<template>
 <div>
 <div class="col-xs-12 col-md-2 col-lg-2 "/>
    <div class="dv_hometable">
            <table class="table table-hover table-bordered table-fixed">
            <thead>
                <tr>
                    <th style="width:35px">#</th>
                    <th :style="{width:colinfo.width+'px'}" v-for="(colinfo) in columnInfo">
                    {{ colinfo.columnName }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(objectItems,index) in items">
                    <th>{{index + 1}}</th>
                    <td v-for="(item, key, index) in objectItems">{{ item }}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
    
</div>
</template>

<script>
export default {
    props:['items','columnInfo'],
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
                
.table-fixed {
    border:1px solid;
    table-layout: fixed;
    width: 200px;
    overflow:auto;

}
.table-fixed thead th {
    background-color: #2a80af;
    color: white;
}
.dv_hometable {
    margin-top:20px;
}
</style>