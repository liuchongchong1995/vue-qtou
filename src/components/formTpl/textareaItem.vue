<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-input type="textarea" :rows="4" v-model="textareaVal" :disabled="itemIsDisabled" @input="onInputHandel" @blur="onInputHandel"></el-input>
            </el-col>
            <el-col :span="3" v-show="isShowOperation">
                <el-button v-show="itemIsDisabled" type="primary" @click="editHandel">编辑</el-button>
                <el-button v-show="!itemIsDisabled" type="danger" @click="submitHandel">保存</el-button>
            </el-col>
        </el-row>
    </el-form-item>
</template>
<script>
    export default {
        name: 'textareaItem', 
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
                default: false
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
            placeholder: {
                type: String,
                default: "多行文本"
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
                textareaVal: this.value,
                itemIsDisabled: this.isDisabled,
                data: this.itemdata
            }
        },
        watch: {
            isDisabled(val) {
                this.itemIsDisabled = val;
            }
        },
        methods: {
            onInputHandel() {
                this.$emit('parentCallbackFun', this.textareaVal);
            },
            editHandel() {
                this.itemIsDisabled = false;
            },
            submitHandel() {
                this.$parent.$parent.formSubmitHandel(this.textareaVal, this.id);
            }
        }
    }
</script>