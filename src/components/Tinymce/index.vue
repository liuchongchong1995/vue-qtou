<template>
    <div class="tinymce-container" :class="{hidden:htmlIsEmpty,readonly:readonly}" :style="{ width: containerWidth }">
        <textarea :id="tinymceId" class="tinymce-textarea" />
        <input type="file" ref="uploadImg" style="display:none" accept="image/png,image/jpg,image/jpeg" @change="handleUploadImg">
        <input type="file" ref="uploadVideo" style="display:none" accept="video/mp4,video/avi" @change="handleUploadVideo">
        <div class="word-count" v-if="isShowWordCount">
            <span class="fr">{{ currWordCount }} / {{ maxWordCount }}</span>
        </div>
    </div>
</template>

<script>
    import { getQiNiuToken } from '@/assets/api/tools';
    import { fileUpload } from '@/assets/scripts/fileUpload';
    import { uploadBase64 } from '@/assets/api/tools';
    import { dateFormat } from '@/assets/scripts/utils/date'; 
    import plugins from './plugins';
    import toolbar from './toolbar';
    import load from './dynamicLoadScript';
    const tinymceCDN ='https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js';

    export default {
        name: 'Tinymce',
        // components: { editorImage },
        props: {
            id: {
                type: String,
                default: function() {
                    return (
                        'vue-tinymce-' +
                        +new Date() +
                        ((Math.random() * 1000).toFixed(0) + '')
                    );
                }
            },
            // 能确定到底插入到哪一个字段中
            fieldName: {
                type: String,
                default: "content"
            },
            value: {
                type: String,
                default: ''
            },
            toolbar: {
                type: Array,
                required: false,
                default() {
                    return [];
                }
            },
            isShowToolbar:{
                type:Boolean,
                default:true
            },
            menubar: {
                type: String,
                default: 'file edit insert view format table'
            },
            // 是否显示字数统计
            isShowWordCount: {
                type: Boolean,
                default: false
            },
            // 最大字数限制
            maxWordCount: {
                type: Number,
                default: 5000
            },
            height: {
                type: [Number, String],
                required: false,
                default: 360
            },
            width: {
                type: [Number, String],
                required: false,
                default: 'auto'
            },
            readonly: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                hasDefaultValue:false,
                hasChange: false,
                hasInit: false,
                currWordCount: 0,
                htmlIsEmpty:true,
                tinymceId: this.id,
                fullscreen: false,
                languageTypeList: {
                    en: 'en',
                    zh: 'zh_CN',
                    es: 'es_MX',
                    ja: 'ja'
                }
            };
        },
        computed: {
            containerWidth() {
                const width = this.width;
                if (/^[\d]+(\.[\d]+)?$/.test(width)) {
                    // matches `100`, `'100'`
                    return `${width}px`;
                }
                return width;
            }
        },
        watch:{
            value(val) {
                if ((!this.hasChange && this.hasInit) || this.isNeedChange) {
                    this.$nextTick(() =>{
                        var tinymceEx = window.tinymce.get(this.tinymceId);

                        tinymceEx.setContent(val || '');
                        this.$emit('change', tinymceEx.getContent({format: 'text'}));
                    });
                }
            }
        },
        mounted() {
            this.init();
        },
        activated() {

            if (window.tinymce) {
                this.initTinymce();
            }
        },
        deactivated() {
            this.destroyTinymce();
        },
        destroyed() {
            this.destroyTinymce();
        },
        methods: {
            init() {
                // dynamic load tinymce from cdn
                load(tinymceCDN, err => {
                    if (err) {
                        this.$message.error(err.message);
                        return;
                    }
                    this.initTinymce();
                });
            },
            initTinymce() {
                const _this = this;

                this.htmlIsEmpty = !this.value;
                window.tinymce.init({
                    readonly: this.readonly,
                    automatic_uploads: false,
                    // images_upload_url: '/upload/upload',
                    selector: `#${this.tinymceId}`,
                    language: "zh_CN",
                    height: this.height,
                    body_class: 'panel-body ',
                    object_resizing: false,
                    statusbar:false,
                    toolbar: this.isShowToolbar?toolbar:false,
                    menubar: false,
                    plugins: plugins,
                    end_container_on_empty_block: true,
                    powerpaste_word_import: 'clean',
                    code_dialog_height: 450,
                    code_dialog_width: 1000,
                    fontsize_formats: '12px 14px 16px 18px 20px 24px 30px 36px 48px',
                    advlist_bullet_styles: 'square',
                    advlist_number_styles: 'default',
                    imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
                    default_link_target: '_blank',
                    link_title: false,
                    media_live_embeds:true,
                    charLimit:this.maxWordCount,
                    indentation:'1em',
                    forced_root_block:"p",
                    formats:{
                        h1:{block:"h1",classes:'class1',styles: {'font-size':'36px'}},
                        h2:{block:"h2",classes:'class2',styles: {'font-size':'30px'}},
                        h3:{block:"h3",classes:'class3',styles: {'font-size':'24px'}},
                        h4:{block:"h4",classes:'class4',styles: {'font-size':'20px'}},
                        h5:{block:"h5",classes:'class5',styles: {'font-size':'18px'}},
                        h6:{block:"h6",classes:'class6',styles: {'font-size':'16px'}}
                    },
                    style_formats:[{title: '首行缩进', block: 'p', styles: {'text-indent': '2em'}}],
                    style_formats_merge:true,
                    style_formats_autohide: false,
                    nonbreaking_force_tab: false, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
                    paste_filter_drop:false,
                    paste_enable_default_filters: false,
                    paste_preprocess:(plugin,args)=>{
                        var contentLen = this.editor.getContent({format: 'text'}).length;
                        var currWord = args.content.indexOf("<meta") > -1?22:0;

                        if(contentLen >= this.maxWordCount){
                            args.content = "";
                        }else{
                            if(contentLen <= 1){
                                args.content =  args.content.substr(0,this.maxWordCount + currWord);
                            }else{
                                if(contentLen + this.currWordCount >= this.maxWordCount){
                                    args.content = args.content.substr(0,this.maxWordCount - this.currWordCount + currWord);

                                }else{
                                    args.content =  args.content.substr(0,this.maxWordCount - this.currWordCount  +currWord);
                                }
                            }
                        }
                    },
                    init_instance_callback: editor => {
                        if (_this.value) {
                            this.hasDefaultValue = true;
                            editor.insertContent(_this.value);
                            this.currWordCount = editor.getContent({format: 'text'}).length;
                            this.$emit('change', editor.getContent({format: 'text'}),_this.fieldName);

                        }else{
                            this.hasDefaultValue = false;
                            this.currWordCount = 0;
                        }
                        _this.editor = editor;
                        _this.hasInit = true;

                        function setCurrCount(){
                            var content = editor.getContent({format: 'text'});
                            if((/^\s+$/g).test(content)){
                                _this.currWordCount = 0;
                            }
                            else if ( content.length > _this.maxWordCount) {
                                _this.editor.setContent(content.substr(0, _this.maxWordCount));
                                _this.currWordCount = _this.maxWordCount;
                            } else {
                                _this.currWordCount = content.length;
                            }
                            _this.$emit('change', editor.getContent({format: 'text'}),_this.fieldName);

                        }
                        editor.on('KeyUp',()=> {
                            setCurrCount();
                        });
                        editor.on('Paste', function () {
                            setCurrCount();
                        });
                        editor.on('Blur', function () {
                            _this.$emit('input', editor.getContent(),_this.fieldName);
                            _this.$emit('blur',"",_this.fieldName);
                        });
                    },
                    setup(editor) {
                        editor.on('init', function() {
                            this.getBody().style.fontSize = '18px';
                            this.getBody().style.lineHeigth = '1.5';
                        });    
                        editor.addButton('myimage', {
                            title: '上传图片',
                            icon:"image",
                            style:"width:24px",
                            onclick: function() {
                                _this.$refs.uploadImg.click();
                            }
                        });
                        editor.addButton('myvideo', {
                            title: '上传视频',
                            icon:"media",
                            style:"width:24px",
                            onclick: function() {
                                _this.$refs.uploadVideo.click();
                            }
                        });
                    }
                });
            },
            // 上传之前判断
            beforeEditorImgUpload(file) {
                // this.qn.key = file.name;
                // 通过设置key为文件名，上传到七牛中会显示对应的图片名
                const isJPG = file.type === "image/jpeg" || file.type === "image/png";
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传格式不正确，只能上传png,jpg,jpeg图片');
                }
                // 判断是否超过图片限制的尺寸
                if(!isLt2M){
                    this.$message.error('图片大小不能超过2M');
                }
                return isJPG && isLt2M;
            },
            handleUploadImg(){
                let file = this.$refs.uploadImg.files[0];

                if (!this.beforeEditorImgUpload(file)) {
                    return false;
                }
                let request = {
                    file,
                    filename: "file",
                    action: "xxx"
                }
                this.initEditorImgUploader(request).then((url) => {
                    this.$refs.uploadImg.value = "";
                    this.editor.insertContent('<img src="'+url+'">');
                });
            },
            handleUploadVideo(){
                let file = this.$refs.uploadVideo.files[0];

                if (!this.beforeVideoUpload(file)) {
                    return false;
                }
                let request = {
                    file,
                    filename: "file",
                    action: "xxx",
                    callback:(url)=>{
                        var videohtml =`<p>
                            <span class="mce-preview-object mce-object-video" contenteditable="false" data-mce-object="video" data-mce-p-allowfullscreen="allowfullscreen" data-mce-p-frameborder="no" data-mce-p-scrolling="no" data-mce-p-src=${url} data-mce-html="%20">
                            <video src=${url} width="100%" controls="controls"></video>
                           </span>
                        </p>`;
                        this.$refs.uploadVideo.value = "";
                        this.editor.insertContent(videohtml);
                    }
                }
                this.initVideoFileUpload(request);
            },
            // 在编辑器中上传视频的操作
            beforeVideoUpload(file) {
                const isVideo = file.type === "video/mp4" || file.type === "video/avi";
                // const isLt2M = file.size / 1024 / 1024 < 30;

                if (!isVideo) {
                    this.$message.error('视频只能上传mp4或avi格式');
                }
                // if (!isLt2M) {
                //     this.$message.error('视频大小不能超过30M');
                // }
                return isVideo; // && isLt2M;
            },
            createFileName() {

                return dateFormat(Math.round(new Date() / 1000), "yyyy/MM/dd") + '/' + 'editor' + '/' + parseInt(Math.random() * 1000000) + '.png';
            },
            uploadBase64ToQiNiu(base64Str,progress,success) {
                getQiNiuToken()
                    .then(({ data: { token, img_url } }) => {
                        uploadBase64(btoa(this.createFileName()),token,base64Str)
                            .then(({ key }) => {
                                this.$emit("success", img_url + "/" + key, key);
                                progress(100);
                                success();
                            })
                    })
                    .catch(() => {
                        this.$message.error("上传图片失败");
                        this.$emit("error");
                    });
            },
            initVideoFileUpload(request) {
                getQiNiuToken().then(res => {
                    if (res.code != 0) {
                        return;
                    }
                    let data = res.data;
                    let token = data.token;
                    let host = data.img_url;

                    const loading = this.$loading({
                        lock: true,
                        text: '上传视频中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0)'
                    });
                    let params = {
                        token: token,
                        request: request,
                        filetype: "video",
                        module: 'editor',
                        complete: complete => {
                            let key = complete.key;
                            const videoSrc = host + "/" + key;

                            loading.close();
                            request.callback && request.callback(videoSrc);
                        },
                        next: () => {},
                        error: () => {
                            loading.close();
                        }
                    }
                    fileUpload(params)
                });
            },
            initEditorImgUploader(request) {
                return new Promise((resolve) => {
                    getQiNiuToken().then(res => {
                        if (res.code != 0) {
                            return;
                        }

                        let data = res.data;

                        let token = data.token;
                        let host = data.img_url;
                        const loading = this.$loading({
                            lock: true,
                            text: '上传图片中',
                            spinner: 'el-icon-loading',
                            color: "#fff",
                            background: 'rgba(0, 0, 0, 0.5)'
                        });
                        let params = {
                            token: token,
                            request: request,
                            module: 'editor',
                            complete: complete => {
                                let key = complete.key;
                                loading.close();

                                resolve(host + "/" + key);
                            },
                            next: () => {},
                            error: () => {}
                        }

                        fileUpload(params)
                    });
                });
            },
            destroyTinymce() {
                const tinymce = window.tinymce.get(this.tinymceId);
                if (this.fullscreen) {
                    tinymce.execCommand('mceFullScreen');
                }

                if (tinymce) {
                    tinymce.destroy();
                }
            },
            setContent(value) {
                window.tinymce.get(this.tinymceId).setContent(value);
            },
            getContent() {
                window.tinymce.get(this.tinymceId).getContent();
            },
            imageSuccessCBK(arr) {
                const _this = this;
                arr.forEach(v => {
                    window.tinymce
                        .get(_this.tinymceId)
                        .insertContent(`<img class="wscnph" src="${v.url}" >`);
                });
            }
        }
    };
</script>

<style scoped>
    .tinymce-container {
        position: relative;
        line-height: normal;
    }
    .tinymce-container >>> .mce-fullscreen {
        z-index: 10000;
    }
    .tinymce-textarea {
        visibility: hidden;
        z-index: -1;
    }
    .editor-custom-btn-container {
        position: absolute;
        right: 4px;
        top: 4px;
        /*z-index: 2005;*/
    }
    .fullscreen .editor-custom-btn-container {
        z-index: 10000;
        position: fixed;
    }
    .editor-upload-btn {
        display: inline-block;
    }

</style>
<style lang="scss">
    .tinymce-container{
        &.readonly{
            iframe{
                height:auto!important;
            }
            .mce-edit-area,
            .mce-panel{
                border:none;
                box-shadow: none;
            }
            &.hidden{
                display: none!important;
            }
        }


    }
</style>
