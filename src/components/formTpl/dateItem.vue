<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="10">
            <el-col :span="3">
                <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 100%;" :disabled="itemIsDisabled"></el-date-picker>
            </el-col>
            <el-col :span="3">
                <el-time-picker placeholder="选择时间" v-model="date2" style="width: 100%;" :disabled="itemIsDisabled"></el-time-picker>
            </el-col>
            <el-col :span="6">
                <el-date-picker
                    v-model="date3"
                    type="daterange"
                    :disabled="isDisabled"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                </el-date-picker>
            </el-col>
            <el-col :span="4">
                <el-date-picker
                    v-model="date1"
                    type="datetime"
                    :disabled="isDisabled"
                    placeholder="选择日期时间">
                </el-date-picker>
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
        name: 'dateItem', 
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
                itemIsDisabled: this.isDisabled,
                date1: '',
                date2: '',
                date3: ''
            };
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
            // submitHandel() {
            //     console.log(this.value);
            // }
        }
    }
</script> 