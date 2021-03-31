<template>
    <card>
        <el-form-item :label="lableText" :class="{'el-label-active':answerIsUpdate== 1}" :required="required">
            <el-input v-model="value" :disabled="isDisabled">
            </el-input>
        </el-form-item>
    </card>
</template>
<script>
    export default {
        name: 'matrixItem',  // 矩阵类型 暂时不做
        props: {
            itemdata: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            lableText: {
                type: Boolean,
                default: false
            },
            value: {
                type: String,
                default: ""
            },
            isDisabled: {
                type: Boolean,
                default: false
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
        methods: {
            
        }
    }
</script>