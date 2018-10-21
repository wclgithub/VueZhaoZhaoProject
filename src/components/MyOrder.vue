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
              <div class="col-md-1">编号</div>
              <div class="col-md-2">商品图片</div>
              <div class="col-md-3">商品</div>
              <div class="col-md-1">总价</div>
              <div class="col-md-2">日期</div>
              <div class="col-md-2">状态</div>
              <div class="col-md-1">操作</div>
            </div>
          </div>
          <!--未付款订单-->
          <div class="my-nopay-order or-model">
            <div class="panel-body my-every row my-order-room " v-if="(nopaystate||allstate)&&nopay.status_id==1"
                 v-for="nopay in user_order">
              <div class="col-md-1" v-text="nopay.id"></div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3 word-color">
                <span v-text="nopay.beadhouse_name"></span>
                <span v-text="nopay.name"></span>
                <span v-text="nopay.setname"></span>
              </div>
              <div class="col-md-1" v-text="nopay.price">￥2500</div>
              <div class="col-md-2" v-text="nopay.build_time"></div>
              <div class="col-md-2">未付款 <a href="#" @click="goToPay(nopay.id,nopay.price)"><strong>去付款</strong></a>
              </div>
              <div class="col-md-1 text-danger btn" @click="delOrder(nopay.id)">删除</div>
            </div>
          </div>
          <!--预定中订单-->
          <div class="my-ing-order or-model">
            <div class="panel-body my-every row " v-if="(ingstate||allstate)&&ing.status_id==4"
                 v-for="ing in user_order">
              <div class="col-md-1" v-text="ing.id"></div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3 word-color">
                <span v-text="ing.beadhouse_name"> </span>
                <span v-text="ing.name"> </span>
                <span v-text="ing.setname"> </span></div>
              <div class="col-md-1" v-text="ing.price">￥2500</div>
              <div class="col-md-2" v-text="ing.build_time"></div>
              <div class="col-md-2">预定中</div>
              <div class="col-md-1 text-danger btn" @click="delOrder(ing.id)">删除</div>
            </div>
          </div>
          <!--已付款订单-->
          <div class="my-success-order or-model">
            <div class="panel-body my-every row my-order-set " v-if="(successstate||allstate)&&success.status_id==2"
                 v-for="success in user_order">
              <div class="col-md-1" v-text="success.id">1232341466</div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3 word-color">
                <span v-text="success.beadhouse_name"> </span>
                <span v-text="success.name"></span>
                <span v-text="success.setname"></span></div>
              <div class="col-md-1" v-text="success.price">￥2500</div>
              <div class="col-md-2" v-text="success.build_time"></div>
              <div class="col-md-2">已付款</div>
              <div class="col-md-1 text-danger btn" @click="delOrder(success.id)">删除</div>
            </div>
          </div>
          <!--已失效订单-->
          <div class="my-bad-order or-model">
            <div class="panel-body my-every row my-order-set " v-if="(badstate||allstate)&&bad.status_id==3"
                 v-for="bad in user_order">
              <div class="col-md-1" v-text="bad.id">12364565126</div>
              <div class="col-md-2 order-img"><img src="../assets/images/det2.jpg" alt=""></div>
              <div class="col-md-3 word-color">
                <span v-text="bad.beadhouse_name"></span>
                <span v-text="bad.name"></span>
                <span v-text="bad.setname"> </span></div>
              <div class="col-md-1" v-text="bad.price">￥2500</div>
              <div class="col-md-2" v-text="bad.build_time"></div>
              <div class="col-md-2">已失效</div>
              <div class="col-md-1 text-danger btn" @click="delOrder(bad.id)">删除</div>
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
      getOrder: function () {
        var vm = this;
        var token = sessionStorage.getItem('token');
        var user_id = sessionStorage.getItem('u_id');
        if (token) {
          var vm = this;
          var data = {
            "user_id": user_id
          }
          axios.post('http://192.168.2.32:8000/order/getorder/', data, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              //拿到所有订单
              vm.user_order = response.data;
              console.log(vm.user_order)

              for (let o of vm.user_order) {
                var k=0;
                for (let l of  o.order_list) {
                  if (l.name) {
                    o.name = l.name;
                    o.beadhouse_name = l.beadhouse_name;
                    o.roomprice = l.price
                  }
                  if (l.setname) {
                   if(k==0){
                     o.setname =l.setname;
                     o.beadhouse_name = l.beadhouse_name;
                     o.setprice = l.price;
                     k++;
                   }else{
                     o.setname =o.setname+l.setname;
                     o.beadhouse_name = l.beadhouse_name;
                     o.setprice = l.price;
                   }
                  }
                }

              }

            })
            .catch(function (error) {
              console.log(error)
            })


        }
        else {
          alert('请先登录！')
          this.$router.push({path: "/login"});
        }

      },
      //删除订单
      delOrder: function (id) {
        var token = sessionStorage.getItem('token');
        var user_id = sessionStorage.getItem('u_id');
        var data = {
          "user_id": user_id,
          "order_id": id
        }
        var vm = this;
        axios.post('http://127.0.0.1:8000/order/deleteorder/', data, {
          headers: {
            "token": token
          }
        })
          .then(function (response) {
            if (response.data.statuscode) {
              if (response.data.statuscode == '202') {
                alert('删除成功');
                vm.getOrder();
              }
            }
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })

      },
      //支付(未支付订单->完成)
      goToPay: function (orderid, price) {
        var result = confirm("确认支付" + price + "元吗?"); //在页面上弹出对话框
        if (result == true) {
          var user_id = sessionStorage.getItem('u_id');
          var token = sessionStorage.getItem('token');
          var data = {
            "order_id": orderid,
            "user_id": user_id
          }
          var vm = this;
          axios.post('http://127.0.0.1:8000/order/changeorderstatus/', data, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              if (response.data.statuscode == '202') {
                alert("您成功支付" + price + "元!")
                vm.getOrder();
              }
              else {
                alert("支付失败!")
              }
            })
            .catch(function (error) {
              console.log(error)
            })

        }
        else {
          alert("您已取消付款!")
        }
      }
    },
    mounted() {
      this.getOrder()

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

  .panel-primary > .panel-heading {
    background: #40a170;
  }

  .nav > li > a:hover,
  .nav > li > a:focus {
    color: black;
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

  .my-img-btn p {
    position: absolute;
  }
  .word-color span:nth-child(1),strong{
    color: orange;
  }


</style>
