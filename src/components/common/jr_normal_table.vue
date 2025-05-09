<template>
  <div class="container">
    <div class="el-row">
        <div class="el-col-24">
            <div class="vip-table-container">
            <table class="table vip-table">
                <thead>
                <tr class="el-row">
                <th class="th-table" :style="`color:${table.headerFontColor || '#FED504'};background:${table.headerBackground || '#252525'}`"  :class="`el-col-${col}`" v-for="(table, index) in data.table" :key="index">
                    <span>{{table.name}}</span>
                </th>
                </tr>
                </thead>
                <tbody>
                <tr class="el-row" v-for="(item,index) in data.listData" :key="index">
                <td :class="`el-col-${col}`" v-for="(table, index) in data.table" :key="index">
                    <span class="fw-700" :class="table.className">{{item[table.prop]}}{{ table.unit || ''}}</span>
                </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'jrNormalTable',
    data(){
      return{}
    },
    props: {
        data: {
            type: Object,
            default: () => ({
              title: '',
              tip: '',
              listData: [],
            }),
        },
        col: {
            type: String,
            default: '8'
        },
    },
    methods:{},
 }
</script>

<style scoped>
@import url("../../assets/css/style.css");
.vip-table-container {
    margin-bottom: 40px;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #333;
  }

  .vip-table {
    width: 100%;
    margin-bottom: 0;
  }

  .vip-table th {
    font-weight: 600;
    text-align: center;
    padding: 15px;
    font-weight: 700;
    font-size: 15px;
    border-bottom: 2px solid #333;
  }

  .vip-table td {
    padding: 15px 0px;
    text-align: center;
    color: #bbb;
    border-bottom: 1px solid #333;
    font-size: 14px;
    background-color: #191917;
  }

  .vip-table tr:hover td {
    background-color: #222220;
  }

  .vip-level {
    font-weight: 700;
    background: linear-gradient(90deg, #FED504 -30%, #FED504 30%, #FF7D10 90%);
    -webkit-background-clip: text;
    color: transparent;
  }

@media (max-width: 960px) {
.th-table{
    height: 60px;
    display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    align-items: center;
    -webkit-line-clamp: 2
}
}
</style>