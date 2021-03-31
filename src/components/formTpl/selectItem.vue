<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="20">
            <el-col :span="4">
                <el-select v-model="selected" clearable :disabled="itemIsDisabled" @change="selectChange">
                    <el-option v-for="(item, index) in itemdata" :key="index" :value="item" :label="item"></el-option>
                </el-select>
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
        name: 'selectItem', 
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
                default: ""
            },
            lableText: {
                type: String,
                default: ""
            },
            itemdata: {
                type: Array,
                default: () => { return ["1", "2", "3"] }
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
                selected: this.selectedVal,
                itemIsDisabled: this.isDisabled
            }
        },
        watch: {
            itemdata(val) {
                this.itemdata = val;
                this.selected = this.itemdata[0];
            },
            isDisabled(val) {
                this.itemIsDisabled = val;
            }
        },
        created() {
            // this.optionData = this.itemdata.option_data['option'];
            // console.log(this.optionData)
            // this.optionData = this.itemdata;
            // console.log(this.optionData.option_data.option)
        },
        methods: {
            editHandel() {
                this.itemIsDisabled = false;
            },
            submitHandel() {
                this.$parent.$parent.formSubmitHandel(this.selected, this.id);
            },
            selectChange() {
                let idx = this.itemdata.findIndex(item => item == this.selected);
                this.$parent.pickerHandel(idx, this.selected);
            }
        }
    }
</script>