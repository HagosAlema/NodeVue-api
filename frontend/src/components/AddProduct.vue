<template>
    <div>
      <div class="add">
        <label class="label">Product: </label>
        <input type="text" class="product-text" v-model="productName" placeholder="Type Product Name"/>
        <button class="product-btn" @click="addProduct">Add</button>
      </div>
      <div class="prod-content">
        <table class="prod_tbl">
          <tr class="prod_th">
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
          <tr class="prod_td" v-for="(item, index) in products" :key="index" :class="index % 2 === 0 ? 'col1' :'col2' ">
              <td>{{index}}</td>
              <td>{{item.name}}</td>
              <td><img src="../assets/img/infinity.png" style="height: 50px;"/></td>
          </tr>
          <!--<tr class="prod_td" v-for="(item, index) in data" :key="index">-->
            <!--<div class="col2">-->
              <!--<td>{{index}}</td>-->
              <!--<td>{{item.name}}</td>-->
              <!--<td><img src="../assets/img/infinity.png" style="height: 50px;"/></td>-->
            <!--</div>-->
          <!--</tr>-->
        </table>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
  export default {
    name: 'AddProduct',
    data () {
      return {
        productName: '',
        data: [],
        limit: 50,
        offset: 0
      }
    },
    created () {
      this.getProduct()
    },
    computed: {
      products: function () {
        return this.data.slice().reverse()
      }
    },
    methods: {
      addProduct: function () {
        var self = this
        var url = '/server'
        var data = {
          name: this.productName
        }
        this.productName = ''
        axios.post(`${url}/product/add`, {data: data})
          .then((result) => {
            console.log(result.data)
            var data = {
              name: result.data.name,
              __v: result.data.__v,
              _id: result.data._id
            }
            self.data.push(data)
            // this.brandCList = result.data.data.brandCList
            // this.bestList = result.data.data.bestItemList
            // this.brandList = result.data.data.brandList
            })
        // self.getProduct()
      },
      getProduct: function () {
        var data = {
          limit: this.limit,
          offset: this.offset
        }
        var self = this
        // this.offset += this.limit
        const url = '/server'
        // window.setTimeout(e => {
        axios.get(`${url}/product/all`)
          .then((result) => {
            console.log('Length = ' + result.data.allList.length)
            console.log(result.data.allList)
            for (var i = 0; i < result.data.allList.length; i++) {
              self.data.push(result.data.allList[i])
            }
            // self.data = result.data.allList
            self.loading = false
            // this.bestList = result.data.data.bestItemList
            // this.brandList = result.data.data.brandList
          })
      },
      emptyProductName: function () {
        this.productName = ''
      }
    }

  }
</script>

<style scoped>
  .add .product-text {border: solid 1px; border-radius: 4px; line-height: 25px; min-width: 40%; font-size: 14px; font-weight: bold;}
  .add .product-btn {background-color: dodgerblue; line-height: 24px; border-radius: 5px; width: 50px; vertical-align: middle}

  table {width: 100%; margin-top: 5%;}
  .prod-content .prod_tbl .prod_th {background-color: #DCDCDC; width: 100%; line-height: 50px }
  .prod-content .prod_tbl .prod_td.col1 {background-color: #fff; width: 100%}
  .prod-content .prod_tbl .prod_td.col2 {background-color: #f3f3f3; width: 100%}
  .prod-content .prod_tbl .prod_th th, .prod-content .prod_tbl .prod_th td{width: 30%}
  /*div.prod-content table.prod_tbl tr.prod_th th {text-align: left; float: left; background-color: #f2f2f2; width: 30%}*/
  div.prod-content table.prod_tbl tr.prod_th td {text-align: left; float: left}
  div.prod-content table.prod_tbl tr.prod_th td img{height: 50px !important;}

</style>
