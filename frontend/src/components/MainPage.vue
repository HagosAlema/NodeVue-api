<template>
  <div>
    <div id="content">
        <div class="what_new_C" id="infinite-scroll">
          <div class="what_new_slide">
            <div v-for="(item, index) in data" :key="index">
              <div v-if="index % 2 === 0" class="col1">
                <!--<router-link v-bind:to="'/product/page/'+item.prod_id" >-->
                <img v-if="index % 4 === 0" src="../assets/img/infinity.png" alt="상품사진" />
                <img v-else-if="index % 4 === 1" src="../assets/img/infinity1.png" alt="상품사진" />
                <img v-else-if="index % 4 === 2" src="../assets/img/infinity2.png" alt="상품사진" />
                <img v-else src="../assets/img/inifinity3.png" alt="상품사진" />
                  <!--<p class="workS">Brand</p>-->
                  <span class="workL">{{item.name}}</span>
                <br/>
                  <b class="workS">{{index | priceFormat}}원</b> <br/>
                <!--<hr style="margin-bottom: 20px; color: #727272;"/>-->
                <!--</router-link>-->
              </div>
              <div v-else class="col1" style="margin-left: 4%">
                <!--<router-link v-bind:to="'/product/page/'+item.prod_id" >-->
                <img v-if="index % 4 === 0" src="../assets/img/infinity.png" alt="상품사진" />
                <img v-else-if="index % 4 === 1" src="../assets/img/infinity1.png" alt="상품사진" />
                <img v-else-if="index % 4 === 2" src="../assets/img/infinity2.png" alt="상품사진" />
                <img v-else src="../assets/img/inifinity3.png" alt="상품사진" />
                <!--<p class="workS">Brand</p>-->
                <span class="workL">{{item.name}}</span>
                <br/>
                <b class="workS">{{index | priceFormat}}원</b> <br/>
                <!--<hr style="margin-bottom: 20px; color: #727272;"/>-->
                <!--</router-link>-->
              </div>
              <!--<hr v-if="index % 2 !== 0" style="color: #727272; margin-bottom: 20px;"/>-->
            </div>
            <!-- Add Pagination -->
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MainPage',
  filters: {
    priceFormat: function (value) {
      if (typeof value !== 'number') {
        return value
      }
      const formatter = new Intl.NumberFormat('ko-KR', {
        style: 'decimal'
      })
      return formatter.format(value)
    }
  },
  mounted () {
    var self = this
    window.onscroll = function () {
      var d = document.documentElement
      var b = document.body
      var offset = d.scrollTop + window.innerHeight
      var offset1 = b.scrollTop + window.innerHeight
      var height = d.offsetHeight - 5000

      // console.log('offset1 = ' + offset1)
      // console.log('offset = ' + offset)
      // console.log('height = ' + height)

      if (offset >= height || offset1 >= height) {
        console.log('At the bottom')
        self.getData()
      }
    }
  },
  created () {
    this.getData()
  },
  data () {
    return {
      offset: 0,
      limit: 10,
      data: []
    }
  },
  methods: {
    getData: function () {
      var data = {
        limit: this.limit,
        offset: this.offset
      }
      var self = this
      this.offset += this.limit
      const url = '/server'
      // window.setTimeout(e => {
      axios.get(`${url}/list/all`, {params: data})
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
        //     }, 200)
        // var i
        // for (i = 100; i < 1000; i++) {
        //   var data = {
        //     name: 'Sample Name-' + i
        //   }
        //   const url = '/server'
        //   axios.post(`${url}/list/add`, {data: data})
        //     .then((result) => {
        //       console.log('Entered')
        //       // this.brandCList = result.data.data.brandCList
        //       // this.bestList = result.data.data.bestItemList
        //       // this.brandList = result.data.data.brandList
        //     })
        // }
    }
  }
}
</script>

<style scoped>
  .what_new{width: 100%; padding: 40px 0 0 20px; box-sizing: border-box; position: relative;}
  div div #content #infinite-scroll div div div.col1 img {width: 100%;}
  div#infinite-scroll.what_new_C div.what_new_slide div div.col1 {
    width: 45%;
    display: inline;
    float: left;
    margin-left: 3%;
    box-shadow:0 3px 6px 0 rgba(0,0,0,0.23);
    margin-bottom: 20px;
  }
  div.what_new_slide div{
    /*display: inline-flex;*/
    /*justify-content: center;*/
    /*text-align: center;*/
    /*vertical-align: middle;*/
  }

</style>
