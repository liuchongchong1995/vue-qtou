<template>
    <el-row>
        <el-col :span="24">
            <ul class="m-option-list">
                <li v-for="(item, index) in optionData" :class="[ index == 0 ? 'style': '' ]" @click="selectOption(index)">
                    <div class="m-option-list-icon">
                        <i class="el-icon-qtou" v-html="item.icon"></i>
                    </div>
                    <p>{{ item.name }}</p>
                    <div class="m-option-list-state" :class="[ item.isSelect ? 'style': '' ]">
                        <i class="el-icon-qtou" v-show="index != 0">&#xe62d;</i>
                    </div>
                </li>
            </ul>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        data() {
            return {
                optionData: [{
                    name: '无',
                    icon: '&#xe600;',
                    isSelect: false
                },{
                    name: '查看',
                    icon: '&#xe603;',
                    isSelect: true
                },{
                    name: '分享',
                    icon: '&#xe60e;',
                    isSelect: false
                },{
                    name: '下载PDF文件',
                    icon: '&#xe623;',
                    isSelect: false
                },{
                    name: '下载原始文件',
                    icon: '&#xe60e;',
                    isSelect: false
                },{
                    name: '下载加密文件',
                    icon: '&#xe617;',
                    isSelect: false
                },{
                    name: '打印',
                    icon: '&#xe607;',
                    isSelect: false
                },{
                    name: '转存',
                    icon: '&#xe694;',
                    isSelect: false
                },{
                    name: '上传',
                    icon: '&#xe60c;',
                    isSelect: false
                },{
                    name: '删除',
                    icon: '&#xe63e;',
                    isSelect: false
                }]
            };
        },

        methods: {
            selectOption(index) {
                if (index == 0) {
                    this.optionData = this.optionData.map(function(e) {
                        e.isSelect = false
                        return e;
                    })
                }else{
                    this.optionData[index].isSelect = !this.optionData[index].isSelect;
                }
            },
        },
    };
</script>

<style lang="scss">
    
</style>

<style lang="scss" scoped>

    @import "@/assets/scss/mixins/_variable.scss";
    .m-option-list{
        padding-top: 20px;
        display: flex;

        &>li{
            width: 10%;
            align-items: center;
            text-align: center;
            cursor: pointer;

            &.style{

                .m-option-list-icon{
                    color: #E71313;
                }

                & p{
                    color: #E71313;
                }
            }

            .m-option-list-icon{
                color: #333333;
                margin-bottom: 8px;
                & i{
                    font-size: 26px;
                    line-height: 40px;
                }
            }

            & p{
                color: #333333;
                font-size: 12px;
                line-height: 18px;
                height: 60px;
            }

            .m-option-list-state{
                height: 50px;
                color: #BBBBBB;
                background: #FCFCFC;
                & i{
                    line-height: 50px;
                    font: {
                        size: 14px;
                        weight: blod;
                    };
                }

                &.style{
                    color: $color;
                }
            }
        }
    }

</style>
