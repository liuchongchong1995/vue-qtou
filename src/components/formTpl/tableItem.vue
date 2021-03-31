<template>
    <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
        <el-row :gutter="20">
            <el-col :span="20">
                <el-table
                    :data="tableData"
                    :span-method="objectSpanMethod"
                    border
                    style="width: 100%">
                    <el-table-column v-for="(item, index) in itemdata['x']" :key="index" :prop="'value'+index" :label="item.name">
                        <template slot-scope="{ row }">
                            <el-input type="textarea" class="table-row-input" v-model="tabledatavalue[row.id][index]" :disabled="row.itemIsDisabled"></el-input>
                        </template>
                    </el-table-column>
                </el-table>
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
        name: 'tableItem',
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
            selectedVal: {
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
                tabledatavalue: [],
                value: "",
                itemIsDisabled: this.isDisabled,
                tableData: [{
                    id: 0,
                    itemIsDisabled: true
                }]
            }
        },
        created() {
            this.tableData = [];
            let tabledata = JSON.parse(this.selectedVal);
            this.tabledatavalue = tabledata;
            for (let i = 0; i < tabledata.length; i++) {
                this.tableData.push({
                    id: i,
                    itemIsDisabled: true
                });
            }


        },
        methods: {
            objectSpanMethod({ hasY = false, rowIndex, columnIndex }) {
                if (!hasY) {
                    return false;
                }
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            },
            addRow(colspan) {
                if (colspan != 0) {
                    return;
                }
                this.tableData.push({ itemIsDisabled: false, id: this.tableData.length });
            },
            editHandel() {
                this.itemIsDisabled = false;
                this.tableData.forEach((item) => {
                    this.$set(item, "itemIsDisabled", false);
                })


            },
            submitHandel() {
                this.$parent.$parent.formSubmitHandel(this.tabledatavalue, this.id);
            }
        }
    }
</script>
