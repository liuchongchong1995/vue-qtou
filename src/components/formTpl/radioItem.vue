<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-radio-group v-model="radio" :disabled="itemIsDisabled" @change="radioChange">
                    <el-radio v-for="(item, index) in itemdata" :key="item" :label="index" style="margin: 10px 20px 10px 0;">
                        {{ item }}
                    </el-radio>
                </el-radio-group>
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
        name: 'radioItem', 
        props: {
            id: {
                type: String,
                default: ""
            },
            isShowOperation: {
                type: Boolean,
                default: true
            },
            selectedVal: {
                type: String,
                value: "0"
            },
            lableText: {
                type: String,
                value: ""
            },
            itemdata: {
                type: Array,
                default: () => { return ['选中且禁用','复选框 A'] }
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
                radio: 3,
                itemIsDisabled: this.isDisabled,
            }
        },
        watch: {
            isDisabled(val) {
                this.itemIsDisabled = val;
            }
        },
        methods: {
            editHandel() {
                this.itemIsDisabled = false;
            },
            submitHandel() {
                this.$parent.$parent.formSubmitHandel(this.itemdata[this.selected], this.id);
            },
            radioChange() {
                this.radio();
            }
        }
    }
</script>