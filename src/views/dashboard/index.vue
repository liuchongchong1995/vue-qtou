<template>
    <div class="app-container l-dashboard"> 
        <el-row :gutter="20" class="m-files">
            <el-col :span="25">
                <div class="m-files-list">
                    <div class="m-files-list-data">
                        <img src="@/assets/images/dashboard/dashboard-file1.png" alt="" class="m-files-list-data-img">
                        <div class="m-files-list-data-info">
                            <p class="m-files-list-data-info-name">全部文件</p>
                            <p class="m-files-list-data-info-number">28902</p>
                        </div>
                    </div>
                    <div class="m-files-list-date">
                        <p class="m-files-list-date-info">本月新增</p>
                        <p class="m-files-list-date-data">902</p>
                        <p class="m-files-list-date-percentage"><i class="el-icon-qtou m-files-list-date-percentage-icon">&#xe626;</i>25%</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="25">
                <div class="m-files-list">
                    <div class="m-files-list-data">
                        <img src="@/assets/images/dashboard/dashboard-file2.png" alt="" class="m-files-list-data-img">
                        <div class="m-files-list-data-info">
                            <p class="m-files-list-data-info-name">热点文件</p>
                            <p class="m-files-list-data-info-number">902</p>
                        </div>
                    </div>
                    <div class="m-files-list-date">
                        <p class="m-files-list-date-info">本月热点</p>
                        <p class="m-files-list-date-data">52</p>
                        <p class="m-files-list-date-percentage"><i class="el-icon-qtou m-files-list-date-percentage-icon">&#xe626;</i>25%</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="25">
                <div class="m-files-list">
                    <div class="m-files-list-data">
                        <img src="@/assets/images/dashboard/dashboard-file3.png" alt="" class="m-files-list-data-img">
                        <div class="m-files-list-data-info">
                            <p class="m-files-list-data-info-name">临期文件</p>
                            <p class="m-files-list-data-info-number">20</p>
                        </div>
                    </div>
                    <div class="m-files-list-date">
                        <p class="m-files-list-date-info">近3日</p>
                        <p class="m-files-list-date-data">9</p>
                        <p class="m-files-list-date-percentage"><i class="el-icon-qtou m-files-list-date-percentage-icon">&#xe626;</i>25%</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="25">
                <div class="m-files-list">
                    <div class="m-files-list-data">
                        <img src="@/assets/images/dashboard/dashboard-file4.png" alt="" class="m-files-list-data-img">
                        <div class="m-files-list-data-info">
                            <p class="m-files-list-data-info-name">共享文件</p>
                            <p class="m-files-list-data-info-number">8902</p>
                        </div>
                    </div>
                    <div class="m-files-list-date">
                        <p class="m-files-list-date-info">本月新增</p>
                        <p class="m-files-list-date-data">90</p>
                        <p class="m-files-list-date-percentage"><i class="el-icon-qtou m-files-list-date-percentage-icon">&#xe626;</i>25%</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="25">
                <div class="m-files-list">
                    <div class="m-files-list-data">
                        <img src="@/assets/images/dashboard/dashboard-file5.png" alt="" class="m-files-list-data-img">
                        <div class="m-files-list-data-info">
                            <p class="m-files-list-data-info-name">与我共享</p>
                            <p class="m-files-list-data-info-number">902</p>
                        </div>
                    </div>
                    <div class="m-files-list-date">
                        <p class="m-files-list-date-info">本月新增</p>
                        <p class="m-files-list-date-data">60</p>
                        <p class="m-files-list-date-percentage"><i class="el-icon-qtou m-files-list-date-percentage-icon">&#xe626;</i>25%</p>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="m-ranking">
            <el-col :span="8">
                <div class="m-ranking-active m-ranking-bgcolor">
                    <div class="m-ranking-active-head">
                        <p class="m-ranking-active-head-name">活跃榜</p>
                        <el-dropdown class="m-ranking-active-head-date">
                            <span class="el-dropdown-link">
                                近30天<i class="el-icon-qtou el-icon-arrow-downs">&#xe625;</i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item style="padding:0 10px;">近60天</el-dropdown-item>
                                <el-dropdown-item style="padding:0 10px;">近90天</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <p class="m-ranking-active-head-btn">更多<i class="el-icon-qtou m-ranking-active-head-btn-icon">&#xe631;</i></p>
                    </div>
                    <el-table 
                        class="m-ranking-active-screen"
                        :data="tableData"
                        :row-style="tableRowStyle"
                        :cell-style="tableCellStyle"
                        :header-cell-style="tableHeadCellStyle"
                        style="width: 100%;">
                        <el-table-column
                            prop="id"
                            label="排名"
                            width="30"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-user">
                                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="m-ranking-active-screen-user-headportrait">
                                    </el-avatar>
                                    <p class="m-ranking-active-screen-user-name">{{ scope.row.name }}</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="amount1"
                            sortable
                            label="浏览文件数"
                            width="100"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-number">{{ scope.row.amount1 }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="amount2"
                            sortable
                            label="浏览总时长"
                            width="100"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-info">
                                    <p class="m-ranking-active-screen-info-bgcolor"></p>
                                    <p class="m-ranking-active-screen-info-number">{{ scope.row.amount2 }}小时</p>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>

            <el-col :span="8">
                <div class="m-ranking-active m-ranking-lately m-ranking-bgcolor">
                    <div class="m-ranking-active-head m-ranking-lately-head">
                        <p class="m-ranking-active-head-name">最近更新</p>
                        <el-dropdown class="m-ranking-active-head-date m-ranking-lately-head-date">
                            <span class="el-dropdown-link">
                                归属我<i class="el-icon-qtou el-icon-arrow-downs">&#xe625;</i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item style="padding:0 10px;">近60天</el-dropdown-item>
                                <el-dropdown-item style="padding:0 10px;">近90天</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <p class="m-ranking-active-head-btn m-ranking-lately-head-btn">更多<i class="el-icon-qtou m-ranking-active-head-btn-icon">&#xe631;</i></p>
                    </div>
                    <el-table 
                        class="m-ranking-active-screen"
                        :data="tableData2"
                        :row-style="tableRowStyle"
                        :cell-style="table2CellStyle"
                        :header-cell-style="tableHeadCellStyle"
                        style="width: 100%;">
                        <el-table-column
                            prop="name"
                            width="220"
                            align="center">
                            <template slot="header" slot-scope="scope">
                                <el-dropdown class="m-ranking-active-head-date m-ranking-lately-head-date">
                                    <span class="el-dropdown-link el-dropdown-link-lately">
                                        所有类型<i class="el-icon-qtou el-icon-arrow-downs">&#xe625;</i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item style="padding:0 10px;">近60天</el-dropdown-item>
                                        <el-dropdown-item style="padding:0 10px;">近90天</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                            <template slot-scope="scope">
                                <div class="m-ranking-lately-screen-info">
                                    <p class="m-ranking-lately-screen-info-p"><i class="el-icon-qtou m-ranking-lately-screen-info-p-icon">&#xe627;</i>{{ scope.row.name }}</p>
                                    <div class="m-ranking-active-screen-user m-ranking-lately-screen-info-user">
                                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="m-ranking-lately-screen-info-user-headportrait">
                                        </el-avatar>
                                        <p class="m-ranking-active-screen-user-name">郄锦</p>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            align="right">
                            <template slot="header" slot-scope="scope">
                                <el-dropdown class="m-ranking-active-head-date m-ranking-lately-head-date">
                                    <span class="el-dropdown-link el-dropdown-link-lately">
                                        最近浏览<i class="el-icon-qtou el-icon-arrow-downs">&#xe625;</i>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item style="padding:0 10px;">近60天</el-dropdown-item>
                                        <el-dropdown-item style="padding:0 10px;">近90天</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </template>
                            <template slot-scope="scope">
                                <div class="m-ranking-lately-screen-date">
                                    <p class="m-ranking-lately-screen-date-datas">{{ scope.row.date }}</p>
                                    <p class="m-ranking-lately-screen-date-more"><i class="el-icon-qtou m-ranking-lately-screen-date-more-icon">&#xe644;</i></p>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>

            <el-col :span="8">
                <div class="m-ranking-active m-ranking-dynamic m-ranking-bgcolor">
                    <div class="m-ranking-active-head m-ranking-dynamic-head">
                        <p class="m-ranking-active-head-name">动态</p>
                        <p class="m-ranking-active-head-btn">更多<i class="el-icon-qtou m-ranking-active-head-btn-icon">&#xe631;</i></p>
                    </div>
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item timestamp="2018/4/12" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/3" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了张小轻上传了张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                            <el-timeline-item timestamp="2018/4/2" placement="top" color="#D8D8D8">
                                <p class="m-ranking-dynamic-cont">张小轻上传了<span>《商业尽调文件.pdf》</span></p>
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="m-analysis">
            <el-col :span="6">
                <div class="m-analysis-title">定向文件热度分析</div>
                <div class="m-analysis-cont">
                    <div class="m-analysis-cont-file">
                        <div class="m-analysis-cont-file-search">
                            <el-input
                                class="m-analysis-cont-file-search-input"
                                placeholder="请输入内容">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                        <div class="m-analysis-cont-file-current">
                            <p class="m-analysis-cont-file-current-title">当前文件</p>
                            <div class="m-analysis-cont-file-current-cont">
                                <p><i class="el-icon-qtou m-analysis-cont-file-current-cont-icon">&#xe629;</i>某公司商业计划书.pptx（15页）</p>
                            </div>
                        </div>
                        <div class="m-analysis-cont-file-hot">
                            <div class="m-analysis-cont-file-hot-title">
                                <p class="m-analysis-cont-file-hot-title-name">热搜文件</p>
                                <p class="m-analysis-cont-file-hot-title-introduce">近7天分享</p>
                                <p><i class="el-icon-qtou">&#xe615;</i></p>
                            </div>
                            <div class="m-analysis-cont-file-current-cont m-analysis-cont-file-hot-cont">
                                <p><i class="el-icon-qtou m-analysis-cont-file-current-cont-icon">&#xe629;</i>某公司商业计划书.pptx（15页）</p>
                                <p><i class="el-icon-qtou m-analysis-cont-file-current-cont-icon">&#xe629;</i>某公司商业计划书.pptx（15页）</p>
                                <p><i class="el-icon-qtou m-analysis-cont-file-current-cont-icon">&#xe629;</i>某公司商业计划书.pptx（15页）</p>
                                <p><i class="el-icon-qtou m-analysis-cont-file-current-cont-icon">&#xe629;</i>某公司商业计划书.pptx（15页）</p>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="m-ranking-active m-analysis-rl m-ranking-bgcolor">
                    <el-table 
                        class="m-ranking-active-screen m-analysis-rl-screen"
                        :data="tableData3"
                        :row-style="tableRowStyle"
                        :cell-style="tableCellStyle"
                        :header-cell-style="table3HeadCellStyle"
                        style="width: 100%;">
                        <el-table-column
                            prop="gender"
                            label=""
                            width="30"
                            align="center">
                            <template slot-scope="scope">
                                <i class="el-icon-qtou m-analysis-rl-screen-icon" v-bind:class="[scope.row.gender == 1 ? 'style' : '']">&#xe67c;</i>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="id"
                            label="#"
                            width="50"
                            align="center">
                            <template slot-scope="scope">
                                <p class="m-analysis-rl-screen-id">{{ scope.row.id }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="160"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-user">
                                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="m-ranking-active-screen-user-headportrait">
                                    </el-avatar>
                                    <div class="m-analysis-rl-screen-name">
                                        <p class="m-ranking-active-screen-user-name m-analysis-rl-screen-name-ns">{{ scope.row.name }}</p>
                                        <p class=" m-analysis-rl-screen-name-post">（浩瀚基金●合伙人）</p>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="shareNumber"
                            sortable
                            label="分享人数"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-number">{{ scope.row.shareNumber }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="previewNumber"
                            sortable
                            label="浏览次数"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-number">{{ scope.row.previewNumber }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="previewDate"
                            sortable
                            label="浏览时长"
                            align="center">
                            <template slot-scope="scope">
                                <div class="m-ranking-active-screen-info">
                                    <p class="m-ranking-active-screen-info-bgcolor"></p>
                                    <p class="m-ranking-active-screen-info-number">{{ scope.row.previewDate }}小时</p>
                                </div>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="latelyPreviewDate"
                            label="最近浏览日期"
                            align="center">
                            <template slot-scope="scope">
                                <p class="m-analysis-rl-screen-lywDate">{{ scope.row.latelyPreviewDate }}</p>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="firstPreviewDate"
                            label="首次浏览日期"
                            align="center">
                            <template slot-scope="scope">
                                <p class="m-analysis-rl-screen-lywDate">{{ scope.row.firstPreviewDate }}</p>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                myRoles: 0,
                tableData: [{
                    id: '0',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2'
                }, {
                    id: '1',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43'
                }, {
                    id: '2',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9'
                }, {
                    id: '3',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2'
                }, {
                    id: '4',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1'
                }, {
                    id: '5',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1'
                }, {
                    id: '6',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1'
                }, {
                    id: '7',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1'
                }],
                tableData2: [{
                    name: '集美优鲜日常运营尽调资料.pdf',
                    date: '2月10日 15:00'
                }, {
                    name: '集美优鲜日常运营尽调资料.pdf',
                    date: '2月10日 15:00'
                }, {
                    name: '集美优鲜日常运营尽调资料.pdf',
                    date: '2月10日 15:00'
                }, {
                    name: '集美优鲜日常运营尽调资料.pdf',
                    date: '2月10日 15:00'
                }, {
                    name: '集美优鲜日常运营尽调资料.pdf',
                    date: '2月10日 15:00'
                }],
                tableData3: [{
                    gender: 0,
                    id: 1,
                    name: '司马倩贞',
                    shareNumber: '10',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 2,
                    name: '司马倩贞',
                    shareNumber: '10',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                },{
                    gender: 0,
                    id: 3,
                    name: '司马倩贞',
                    shareNumber: '10',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 4,
                    name: '司马倩贞',
                    shareNumber: '10',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                },{
                    gender: 0,
                    id: 5,
                    name: '司马倩贞',
                    shareNumber: '10',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 6,
                    name: '司马倩贞',
                    shareNumber: '18',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 7,
                    name: '司马倩贞',
                    shareNumber: '18',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 8,
                    name: '司马倩贞',
                    shareNumber: '18',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 9,
                    name: '司马倩贞',
                    shareNumber: '18',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 10,
                    name: '司马倩贞',
                    shareNumber: '18',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }, {
                    gender: 1,
                    id: 11,
                    name: '司马倩贞',
                    shareNumber: '18',
                    previewNumber: '10',
                    previewDate: '30',
                    latelyPreviewDate: '2021/02/10',
                    firstPreviewDate: '2021/02/10'
                }]
            }
        },
        created() {
            this.myRoles = this.$store.getters.roles[0];
        },
        mounted(){
            document.title = "轻投";
        },
        methods:{
            // 修改table tr行的背景色
            tableRowStyle({ row, rowIndex }) {
                let styleJson = {
                    'border-bottom': 'none'
                }
                return styleJson
            },
            tableCellStyle({ row, rowIndex }) {
                let styleJson = {
                    'border-bottom': 'none',
                    'padding': '5px 0'
                }
                return styleJson
            },
            table2CellStyle({ row, rowIndex }) {
                let styleJson = {
                    'border-bottom': '1px solid #f1f1f1',
                    'padding': '5px 0'
                }
                return styleJson
            },
            tableHeadCellStyle() {
                let styleJson = {
                    'border-bottom': 'none',
                    'color': '#263A5B',
                    'font-size': '14px',
                    'padding': '5px 0'
                }
                return styleJson
            },
            table3HeadCellStyle() {
                let styleJson = {
                    'border-bottom': '1px solid #f1f1f1',
                    'color': '#263A5B',
                    'font-size': '14px',
                    'padding': '5px 0'
                }
                return styleJson
            },
        }
    }
</script>

<style lang="scss">
    .m-ranking-active-screen th > .cell {
        padding: 0;
    }
    .m-ranking-active-screen .cell {
        padding: 0;
    }
    
    .m-analysis-cont-file-search .el-input input{
        border:none;
    }
</style>

<style lang="scss" scoped>
    @import "@/assets/scss/dashboard/dashboard.scss";
</style>