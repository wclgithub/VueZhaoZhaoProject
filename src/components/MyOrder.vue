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
            <div class="panel-body my-every row my-order-room " v-if="(nopaystate||allstate)&&nopay.status_id==1"
                 v-for="nopay in user_order" >
              <div class="col-md-2" v-text="nopay.id"></div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{nopay.beadhouse__name}} {{nopay.name}} {{nopay.setname}}</div>
              <div class="col-md-1" v-text="nopay.price">￥2500</div>
              <div class="col-md-1" v-text="nopay.number">2月</div>
              <div class="col-md-2">未付款</div>
              <div class="col-md-1 text-danger" @click="delOrder(nopay.id)">删除</div>
            </div>
          </div>
          <div class="my-ing-order or-model">
            <div class="panel-body my-every row " v-if="(ingstate||allstate)&&ing.status_id==2" v-for="ing in user_order">
              <div class="col-md-2" v-text="ing.id"></div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{ing.beadhouse__name}} {{ing.name}} {{ing.setname}}</div>
              <div class="col-md-1" v-text="ing.price">￥2500</div>
              <div class="col-md-1" v-text="ing.number">4月</div>
              <div class="col-md-2">预定中</div>
              <div class="col-md-1 text-danger" @click="delOrder(ing.id)">删除</div>
            </div>
          </div>
          <div class="my-success-order or-model">
            <div class="panel-body my-every row my-order-set " v-if="(successstate||allstate)&&success.status_id==3"
                 v-for="success in user_order">
              <div class="col-md-2" v-text="success.id">1232341466</div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{success.beadhouse__name}} {{success.name}} {{success.setname}}
              </div>
              <div class="col-md-1" v-text="success.price">￥2500</div>
              <div class="col-md-1" v-text="success.number">5月</div>
              <div class="col-md-2">已付款</div>
              <div class="col-md-1 text-danger" @click="delOrder(success.id)">删除</div>
            </div>
          </div>
          <div class="my-bad-order or-model">
            <div class="panel-body my-every row my-order-set " v-if="(badstate||allstate)&&bad.status_id==4" v-for="bad in user_order">
              <div class="col-md-2" v-text="bad.id">12364565126</div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3">{{bad.beadhouse__name}} {{bad.name}} {{bad.setname}}</div>
              <div class="col-md-1" v-text="bad.price">￥2500</div>
              <div class="col-md-1" v-text="bad.number">6月</div>
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
  import axios from 'axios'

  export default {
    name: "",
    data() {
      return {
        allstate: true,
        nopaystate: false,
        ingstate: false,
        successstate: false,
        badstate: false,
        user_order: [],
      }
    },
    methods: {
      delOrder: function (id) {
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
      var vm = this;
      var token = sessionStorage.getItem('token');
      var user_id = sessionStorage.getItem('u_id');
      if (token) {
        var vm = this;
        var data = {
          "user_id": user_id
        }
        axios.post('http://127.0.0.1:8000/order/getorder/', data, {
          headers: {
            "token": token
          }
        })
          .then(function (response) {
            //拿到所有订单
            vm.user_order = response.data;
            console.log(vm.user_order)
            // for (let i in vm.user_order) {
            //   if (i.status_id == 1) {
            //     vm.success_order.push(i);
            //   }
            //   else if (i.status_id == 2) {
            //     vm.ing_order.push(i);
            //   }
            //   else if (i.status_id == 3) {
            //     vm.nopay_order.push(i);
            //   }
            //   else {
            //     vm.bad_order.push(i);
            //   }
            //   alert(vm.success_order)
            // }

          })
          .catch(function (error) {
            console.log(error)
          })

      }
      else {
        alert('请先登录！')
        this.$router.push({path: "/login"});
      }


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
