<template>
  <div class="col-md-9">
    <div class="row">
      <div class="col-md-12">
        <div class="my-nav-size">
          <h3 class="panel-title">
            <ul class="nav nav-tabs">
              <li role="presentation" class="my-active maall" id="my-oall"><a href="#"
                                                                              @click="allstate=true,nopaystate=false,ingstate=false,successstate=false,badstate=false">全部订单</a>
              </li>
              <li role="presentation" class="my-active ma" id="my-nopay"><a href="#"
                                                                            @click="allstate=false,nopaystate=true,ingstate=false,successstate=false,badstate=false">未付款订单</a>
              </li>
              <li role="presentation" class="my-active ma" id="my-ing"><a href="#"
                                                                          @click="allstate=false,nopaystate=false,ingstate=true,successstate=false,badstate=false">预定中订单</a>
              </li>
              <li role="presentation" class="my-active ma" id="my-success"><a href="#"
                                                                              @click="allstate=false,nopaystate=false,ingstate=false,successstate=true,badstate=false">已完成订单</a>
              </li>
              <li role="presentation" class="my-active ma" id="my-bad"><a href="#"
                                                                          @click="allstate=false,nopaystate=false,ingstate=false,successstate=false,badstate=true">失效订单</a>
              </li>
            </ul>
          </h3>
        </div>
        <div class="panel panel-primary">

          <div class="panel-heading order-box-top ">
            <div class="row ">
              <div class="col-md-2">订单编号</div>
              <div class="col-md-2">商品图片</div>
              <div class="col-md-3">商品</div>
              <div class="col-md-1">价格</div>
              <div class="col-md-1">周期</div>
              <div class="col-md-2">状态</div>
              <div class="col-md-1">操作</div>
            </div>
          </div>

          <div class="my-nopay-order or-model">
            <div class="panel-body my-every row my-order-room " v-if="nopaystate||allstate" v-for="nopay in nopay_order">
              <div class="col-md-2" v-text="nopay.id"></div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{nopay.room__beadhouse__name}} {{nopay.room__name}} {{nopay.setmeal__name}}</div>
              <div class="col-md-1" v-text="nopay.price">￥2500</div>
              <div class="col-md-1" v-text="nopay.set_meal_cyc">2月</div>
              <div class="col-md-2">未付款</div>
              <div class="col-md-1 text-danger" @click="delOrder(nopay.id)">删除</div>
            </div>
          </div>
          <div class="my-ing-order or-model">
            <div class="panel-body my-every row " v-if="ingstate||allstate" v-for="ing in ing_order">
              <div class="col-md-2" v-text="ing.id"></div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{ing.room__beadhouse__name}} {{ing.room__name}} {{ing.setmeal__name}}</div>
              <div class="col-md-1"  v-text="ing.price">￥2500</div>
              <div class="col-md-1" v-text="ing.set_meal_cyc">4月</div>
              <div class="col-md-2">预定中</div>
              <div class="col-md-1 text-danger" @click="delOrder(ing.id)">删除</div>
            </div>
          </div>
          <div class="my-success-order or-model">
            <div class="panel-body my-every row my-order-set " v-if="successstate||allstate" v-for="success in success_order">
              <div class="col-md-2" v-text="success.id">1232341466</div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{success.room__beadhouse__name}} {{success.room__name}} {{success.setmeal__name}}</div>
              <div class="col-md-1"  v-text="success.price">￥2500</div>
              <div class="col-md-1" v-text="success.set_meal_cyc">5月</div>
              <div class="col-md-2">已付款</div>
              <div class="col-md-1 text-danger" @click="delOrder(success.id)">删除</div>
            </div>
          </div>
          <div class="my-bad-order or-model">
            <div class="panel-body my-every row my-order-set " v-if="badstate||allstate" v-for="bad in bad_order">
              <div class="col-md-2" v-text="bad.id">12364565126</div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{bad.room__beadhouse__name}} {{bad.room__name}} {{bad.setmeal__name}}</div>
              <div class="col-md-1"  v-text="bad.price">￥2500</div>
              <div class="col-md-1" v-text="bad.set_meal_cyc">6月</div>
              <div class="col-md-2">已失效</div>
              <div class="col-md-1 text-danger" @click="delOrder(bad.id)">删除</div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        allstate: true,
        nopaystate: false,
        ingstate: false,
        successstate: false,
        badstate: false,
        user_order: [
          {
            "id": 12343,
            "price": 1500,
            "status_id": 1,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det1.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",

          },
          {
            "id": 12344,
            "price": 1500,
            "status_id": 1,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det2.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12345,
            "price": 1500,
            "status_id": 1,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det3.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12346,
            "price": 2500,
            "status_id": 2,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det1.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12347,
            "price": 3500,
            "status_id": 3,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det4.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12348,
            "price": 2600,
            "status_id": 4,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det4.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12349,
            "price": 2800,
            "status_id": 4,
            "room__beadhouse__name": "夏天养老公寓",
            "room__name": "",
            "setmeal__name": "体检套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det3.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12350,
            "price": 2800,
            "status_id": 4,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "",
            "setmeal__name": "体检套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det3.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12351,
            "price": 2800,
            "status_id": 4,
            "room__beadhouse__name": "夏天养老公寓",
            "room__name": "",
            "setmeal__name": "体检套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det2.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },

        ],
        success_order: [
          {
            "id": 12343,
            "price": 1500,
            "status_id": 1,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det1.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",

          },
          {
            "id": 12344,
            "price": 1500,
            "status_id": 1,
            "room__beadhouse__name": "夏天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det2.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12345,
            "price": 1500,
            "status_id": 1,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det3.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },

        ],
        ing_order: [
          {
            "id": 12346,
            "price": 2500,
            "status_id": 2,
            "room__beadhouse__name": "夏天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det1.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },


        ],
        nopay_order: [

          {
            "id": 12347,
            "price": 3500,
            "status_id": 3,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det4.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },

        ],
        bad_order: [
          {
            "id": 12348,
            "price": 2600,
            "status_id": 4,
            "room__beadhouse__name": "夏天养老公寓",
            "room__name": "标准单人间",
            "setmeal__name": "营养套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det4.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12349,
            "price": 2800,
            "status_id": 4,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "",
            "setmeal__name": "体检套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det3.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12350,
            "price": 2800,
            "status_id": 4,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "",
            "setmeal__name": "体检套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det3.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },
          {
            "id": 12351,
            "price": 2800,
            "status_id": 4,
            "room__beadhouse__name": "春天养老公寓",
            "room__name": "",
            "setmeal__name": "体检套餐",
            "set_meal_cyc": "2",
            "order_img": "./images/det2.jpg",
            "build_time": "19-08-01 12:25:35",
            "check_in_id": "张晓风",
          },

        ],
      }
    },
    methods:{
      delOrder:function (id) {
        // axios.post('http://127.0.0.1:8000/user/xxx',id )
        //   .then(function (response) {
        //     console.log(response.data)
        //     console.log(response)
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
        // if(response.data.statuscode=='202'){
        //     alert('删除成功');
        // }
      }
    },
    mounted() {
      // var vm = this;
      // axios.post('http://localhost:8000/')
      //   .then(function (response) {
      //     vm.userorder = response.data;
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      // var success_order=[];
      // var ing_order=[];
      // var nopay_order=[];
      // var bad_order=[];
      //
      // for (let i=0;i<userorder.length;i++){
      //   if (userorder[i]['order_state_id']==1){
      //     success_order.push(userorder[i]);
      //   }
      //   else if (userorder[i]['order_state_id']==2){
      //     ing_order.push(userorder[i]);
      //   }
      //   else if (userorder[i]['order_state_id']==3){
      //     nopay_order.push(userorder[i]);
      //   }
      //   else {
      //     bad_order.push(userorder[i]);
      //   }
      // }
    }
  }
</script>

<style scoped>
  .my-nav-img img {
    height: 65px;

  }

  .my-nav a, .my-footer {
    color: white;
  }

  .my-every-btn button {
    color: white;
    width: 80px;
    height: 80px;
    border: solid 0px black;
    border-radius: 50%;
    box-shadow: #7b8099 2px 2px 2px;
  }

  .panel-primary > .panel-heading, .bg-green {
    background: #40a170;
  }

  .nav > li > a:hover,
  .nav > li > a:focus {
    color: black;
  }

  .list-group-item.active,
  .list-group-item.active:hover,
  .list-group-item.active:focus {
    z-index: 2;
    color: #fff;
    background-color: #40a170;
    border-color: #40a170;
  }

  .my-input span p {
    margin: 0;
    padding: 0;
    width: 150px;
  }

  .my-active {
    background: #40a170;
    border: white solid 1px;
    border-radius: 4px 4px 0px 0px;
    margin-right: 5px;
  }

  .my-active a {
    color: white;
  }

  .order-img img {
    width: 100px;
    height: 60px;
  }

  .my-nav-size ul li {
    font-size: 14px;

  }

  #xdaTanFileImg {
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .my-img-btn {
    width: 85px;
    height: 35px;
  }

  .my-img-btn p {
    position: absolute;
  }


</style>
