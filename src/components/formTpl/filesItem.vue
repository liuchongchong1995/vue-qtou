<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="20" v-for="(item, index) in files" :key="index">
            <el-col :span="17">
                <el-link type="success" disabled>{{ getFIlesNameHandel(item) }}</el-link>
            </el-col>
            <el-col :span="3">
                <a :href="item" target="_blank" download="download"><i class="el-icon-view el-icon-download"></i>下载</a>
            </el-col>
        </el-row>
    </el-form-item>
</template>
<script>
    export default {
        name: 'filesItem', 
        props: {
            itemdata: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            isShowOperation: {
                type: Boolean,
                default: true
            },
            lableText: {
                type: String,
                default: ""
            },
            value: {
                type: String,
                default: "文件名字"
            },
            isDisabled: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false,
                files: []
            },
            answerIsUpdate: {
                type: String,
                default: "2"
            }
        },
        created() {
            this.files = JSON.parse(this.itemdata.answer);
        },
        methods: {
            getFIlesNameHandel(file) {
                let reg = new RegExp("(^|&)attname=([^&]*)(&|$)", "i");
                let r = file.split('?')[1].match(reg);  
                if (r != null) {
                    return unescape(r[2]); 
                }
                return null; 
            }
        }
    }
</script> 
