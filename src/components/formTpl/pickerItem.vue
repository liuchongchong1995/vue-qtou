<template>
    <div class="picker">
        <!--一级类型固定select-->
        <selectItem :lableText="itemdata.option_data.option.title[0]" :isShowOperation="false" :required="required" :isDisabled="itemIsDisabled" :itemdata="parentData" :selectedVal="parentpickerVal" @parentCallbackFun="parentCallbackFun"></selectItem>
        <!--二级类型有可能多选 有可能单选-->
        <checkboxItem v-if="item.text_type == 9" ref="childChecked" :required="required" :lableText="itemdata.option_data.option.title[1]" :isShowOperation="false" :isDisabled="itemIsDisabled" :itemdata="childData" :selectedVal="childVal.split('|')" @parentCallbackFun="parentCallbackFun"></checkboxItem>
        <radioItem v-if="item.text_type == 8" ref="childrRadio" :lableText="itemdata.option_data.option.title[1]" :isShowOperation="false" :isDisabled="itemIsDisabled" :itemdata="childData" :selectedVal="childValData" @parentCallbackFun="parentCallbackFun"></radioItem>
        <div class="operation" v-show="isShowOperation">
            <el-button v-show="itemIsDisabled" type="primary" @click="editHandel">编辑</el-button>
            <el-button v-show="!itemIsDisabled" type="danger" @click="submitHandel">保存</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'inputItem', 
        props: {
            id: {
                type: String,
                default: ""
            },
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
                default: ""
            },
            isDisabled: {
                type: Boolean,
                default: true
            },
            required: {
                type: Boolean,
                default: false
            },
            answerIsUpdate: {
                type: String,
                default: "2"
            }
        },
        data() {
            return {
                pickerVal: '',
                parentpickerVal: '',
                childVal: '',
                activeIndex: 0,
                item: this.itemdata,
                parentData: [],
                childData: [],
                itemIsDisabled: this.isDisabled,
            };
        },
        created() {
            this.parentpickerVal = this.item.answer.split(';')[0];
            this.childVal = this.item.answer.split(';')[1];
            this.activeIndex = this.item.option_data.option.optionData.findIndex(item => item.value == this.parentpickerVal);
            this.item.option_data.option.optionData.forEach(item => {
                this.parentData.push(item.value);
            });
            this.item.option_data.option.optionData[this.activeIndex].childs.forEach(item => {
                this.childData.push(item.value);
            });
        },
        methods: {
            editHandel() {
                this.itemIsDisabled = false;
            },
            submitHandel() {
                if (this.newchildVal.length == 0) {
                    this.$message.error('二分类不能为空');
                    return false;
                }
                
                this.pickerVal = `${this.parentpickerVal};${this.newchildVal.join('|')}`;
                this.$parent.$parent.formSubmitHandel(this.pickerVal, this.id);
            },
            pickerHandel(val, lable) {
                this.parentpickerVal = lable;
                this.childData = [];
                this.newchildVal = [];
                this.item.option_data.option.optionData[val].childs.forEach(item => {
                    this.childData.push(item.value);
                });
            },
            parentCallbackFun(val) {
                this.newchildVal = val;  
            },
        }
    }
</script>
<style lang="scss" scoped> 
    .picker {
        width: 100%;
        position: relative;
       .operation{
           position:absolute;
           left: 24%;
           top: 0;
       }
    }
</style>
