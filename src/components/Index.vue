<template>
  <div>

    <div class="index-search-background">
      <div class="container ">
        <div class="row">
          <div class="col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control input-search" placeholder="" v-model="ser_word">
              <span class="input-group-btn">
                                    <button id="input-submit" class="btn btn-default " type="button"
                                            v-on:click="search">搜索</button>
                                </span>
            </div><!-- /input-group -->
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
      </div>

    </div>

    <content>
      <div class="index-rooms-back">
        <div id="better">
          <p>优 选 公 寓</p>
        </div>
        <div class="index-rooms-list row">

          <div class="single-room col-lg-3" v-for="h in house_list" v-on:click="toapartinfo(h.id)">
            <!--<a href="./house.html"></a>-->
            <router-link to="/house"><img src="../assets/images/room_pic.jpg" alt=""></router-link>
            <p class="room-p01">
              <router-link to="/house" v-text="h.name"></router-link>
            </p>
            <p class="room-p02">
              <router-link to="/house" v-text="h.property"></router-link>
            </p>
            <div class="row main-cost">
              <div class="col-sm-1 cost-icon">￥</div>
              <div class="col-sm-3 cost" v-text="h.min_price">888</div>
              <div class="col-sm-1 cost-icon">起</div>
            </div>

          </div>

        </div>
      </div>
    </content>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Index',
    data: function () {
      return {
        house_list: [],
        ser_word: '',

      }
    },
    mounted: function () {
      this.GetHouseData();


    },
    methods: {
      GetHouseData: function () {
        var that=this;
        axios.get('http://127.0.0.1:8000/beadhouse/gethouseby///1/1/')
          .then(function (response) {
            // console.log(response.data)
            // console.log(response)
            response.data.forEach((item, index) => {

              if (item.score === 5) {
                console.log(item)
                that.house_list.push(item)
                // console.log(this.house_list)
              }
            })

          })
          .catch(function (error) {
            console.log(error)
          });
      },
      search: function () {
        if (this.ser_word) {
          sessionStorage.setItem('already_searched', this.ser_word)
          this.$router.push({path: "/apart"});

        } else {
          this.$router.push({path: "/apart"});
        }
      },
      toapartinfo:function (id) {
        sessionStorage.setItem('bhid',id);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/index.css";

</style>
