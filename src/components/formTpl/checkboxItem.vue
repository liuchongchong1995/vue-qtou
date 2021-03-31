<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-checkbox-group v-model="checkList" :disabled="itemIsDisabled" @change="checkboxChange">
                    <el-row v-for="(itemArr, idx) in checkboxitemdata" :key="idx">
                        <el-checkbox v-for="(item, index) in checkboxitemdata[idx]" :key="index" :label="item"></el-checkbox>
                    </el-row>
                </el-checkbox-group>
            </el-col>
            <el-col :span="3" v-show="isShowOperation">
                <el-button v-show="itemIsDisabled" type="primary" @click="editHandel">编辑</el-button>
                <el-button v-show="!itemIsDisabled" type="danger">保存</el-button>
            </el-col>
        </el-row>
    </el-form-item>
</template>
<script>
    export default {
        name: 'checkboxItem', 
        props: {
            isShowOperation: {
                type: Boolean,
                default: true
            },
            selectedVal: {
                type: Array,
                default: () => { return [] }
            },
            id: {
                type: String,
                default: ""
            },
            lableText: {
                type: String,
                default: ""
            },
            itemdata: {
                type: Array,
                default: () => { return [] }
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
                checkboxitemdata: [],
                checkList: this.selectedVal,
                itemIsDisabled: this.isDisabled,
            }
        },
        watch: {
            isDisabled(val) {
                this.itemIsDisabled = val;
            },
            itemdata() {
                this.checkboxitemdata = [];
                this.groupCheckbox();
            }
        },
        created() {
            this.groupCheckbox();
        },
        methods: {
            groupCheckbox() {
                for (var i = 0, j = this.itemdata.length; i < j; i += 4) {
                    this.checkboxitemdata.push(this.itemdata.slice(i, i + 4));
                }
            },
            checkboxChange() {
                this.$emit('parentCallbackFun', this.checkList);
            },
            editHandel() {
                this.itemIsDisabled = false;
            },
            // submitHandel() {
            //     //console.log(this.checkList);
            // }
        }
    }
</script> 