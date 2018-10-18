<template>
  <div>
    <div class="intergral-ads">
      <img src="../assets/images/maojin.jpg" alt="">
    </div>

    <div class="intergral-content">
      <div class="intergral-hot">
        <a href="#">所有兑换</a>
      </div>
      <div class="intergral-can">
        <a href="#">我能兑换</a>
      </div>
      <div id="showintegral">

        <div class="getintegral">
          <a href="#" v-show="!logined" v-on:click="tologin" class="notlogin">请先登录</a>
          <a class="getintegral-p" v-show="logined" v-text="myintergral" v-on:click="topersonal"></a>
        </div>
      </div>
      <div class="intergral-content-middle row">
        <div class="col-lg-4 mygoods" v-for="good in goods_list">
          <a href="#"><img src="../assets/images/anmoqi.png" alt=""></a><br>
          <a href="#" v-text="good.goods_name"></a>名称<br>
          <p v-text="good.describe">描述</p>
          <p style="font-size: 20px;color: #ff4d15" v-text="good.price">价格</p>
          <!--<button v-bind:id="good.good_id" v-on:click="exchange(good.price)">-->
          <!--兑换 class="btn btn-primary btn-lg"-->
          <!--</button>-->
          <div id="app">
            <button type="button" class="btn" @click="showModal(good.price)">兑换</button>
            <modal v-show="isModalVisible" @close="closeModal"/>
          </div>

        </div>
      </div>
    </div>

  </div>


  </div>

  </div>
</template>

<!--<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
<script>
  import axios from 'axios'
  import Modal from '../components/Modal.vue'
  export default {
    name: 'ShoppingMall',
    components: {
      Modal
    },

    data: function () {
      return {
        logined: true,
        myintergral: '',
        goods_list: [],
        isModalVisible: false,
      }
    },
    mounted: function () {
      this.islogin();
      this.getGoods();
    },
    methods: {
      islogin: function () {
        var istoken = sessionStorage.getItem('token');
        var that = this
        if (istoken) {
          var user = {
            "user_id": sessionStorage.getItem('u_id')
          }

          axios.post('http://127.0.0.1:8000/user/getuserinfo/', user, {
            headers: {
              "token": istoken
            }
          })
            .then(function (response) {
              console.log(response)
              if (response.data.id)
                that.myintergral = '我的积分：' + response.data.points;
                sessionStorage.setItem('u_intergral',that.myintergral)


            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          that.logined = false
        }
      },
      tologin: function () {
        sessionStorage.setItem('from', '/shoppingmall');
        this.$router.push({path: "/login"});
      },
      topersonal: function () {
        this.$router.push({path: "/personalcenter"});
      },
      getGoods: function () {
        var goods = [
          {
            "goods_name": "佳禾空气波按摩器",
            "img": "anmoqi.png",
            "price": "1000",
            "describe": "腿部小腿手臂胳膊大腿气压按摩仪",
            "good_id": "1",
          },
          {
            "goods_name": "三诺血糖测试仪",
            "img": "xuetang1.jpg",
            "price": "2680",
            "describe": "全自动检测试纸精准",
            "good_id": "10",
          },
          {
            "goods_name": "三诺安稳免调码血糖试纸",
            "img": "xuetang2.jpg",
            "price": "690",
            "describe": "糖尿病试纸100片",
            "good_id": "11",
          },
          {
            "goods_name": "血压计测量仪器",
            "img": "xueya1.jpg",
            "price": "990",
            "describe": "老人上臂式全自动高精准语音",
            "good_id": "12",
          },
          {
            "goods_name": "欧姆龙家用电子血压计",
            "img": "xueya2.jpg",
            "price": "3990",
            "describe": "上臂式高精准智能全自动血压测量仪器",
            "good_id": "13",
          },
          {
            "goods_name": "哈尔斯保温杯",
            "img": "shuibei1.jpg",
            "price": "580",
            "describe": "不锈钢水杯便携商务定制",
            "good_id": "2",
          },
          {
            "goods_name": "金边锤目纹玻璃杯",
            "img": "shuibei2.jpg",
            "price": "198",
            "describe": "金边锤目纹玻璃杯家用水杯",
            "good_id": "3",
          },
          {
            "goods_name": "金号纯棉毛巾",
            "img": "maojin1.jpg",
            "price": "89",
            "describe": "成人加厚柔软吸水",
            "good_id": "4",
          },
          {
            "goods_name": "洁丽雅毛巾",
            "img": "maojin2.jpg",
            "price": "350",
            "describe": "柔软吸水全棉",
            "good_id": "5",
          },
          {
            "goods_name": "毛巾浴巾",
            "img": "maojin3.jpg",
            "price": "399",
            "describe": "成人柔软超强吸水",
            "good_id": "6",
          },
          {
            "goods_name": "黑人炭丝深洁双支牙刷",
            "img": "yashua1.jpg",
            "price": "99",
            "describe": "人家用旅行情侣套装进口软刷毛",
            "good_id": "7",
          },
          {
            "goods_name": "佳洁士组合装8支",
            "img": "yashua2.jpg",
            "price": "899",
            "describe": "美国进口全优7效软毛牙刷",
            "good_id": "8",
          },
          {
            "goods_name": "欧乐b电动牙刷D12",
            "img": "yashua3.jpg",
            "price": "2490",
            "describe": "成人款软毛充电式家用",
            "good_id": "9",
          },
        ]
        var that = this
        // axios.get('http://127.0.0.1:8000/getcode/')
        //     .then(function (response){
        //         console.log(response.data)
        //         if (response.data=='203'){
        //             that.goods_list=response
        that.goods_list = goods;
        //         }else {
        //
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })

      },
      showModal: function (p) {
        this.isModalVisible = true
        sessionStorage.setItem('good_intergral',p)

      },
      closeModal: function () {
        this.isModalVisible = false
      }

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/shoppingmall.css";
</style>
