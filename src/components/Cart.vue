<template>
  <div class="cart-container">
    <div class="row">
      <!-- 按钮触发模态框 -->
      <!--<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">开始演示模态框</button>-->
      <!-- 模态框（Modal） -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h2 class="modal-title text-center" id="myModalLabel" style="color: rgba(255,18,4,0.84);" v-text="err_message"></h2>
            </div>
            <div class="modal-body text-center"><span v-text="err_message"></span></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal -->
      </div>
    </div>
    <div class=" panel panel-success">

      <div class="cart-con-header panel-heading ">
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked">
          <label for="checkbox">全选</label>
        </div>
        <div>商品</div>
        <div>公寓</div>
        <div>单价</div>
        <div>周期</div>
        <div>小计</div>
        <div>操作</div>
      </div>
      <div class="cart-con-goods" v-for="c in cart_info" :key="c.id">
        <div class="cart-con-header cart-good-item" :id=c.id>
          <div class="cart-goodsimg">
            <input type="checkbox" :id=c.id :value=c.id v-model="checkedBoxList" :data-type="c.type" @click="">
            <a href="#"><img src="../assets/images/det2.jpg" alt=""></a>
          </div>
          <div v-text="c.name"></div>
          <div v-text="c.beadhouse_name"></div>
          <div v-text="c.price"></div>
          <div class="cart-btn-operator" :id="c.id">
            <input readonly="readonly" type="" value="-" @click="countReduce($event),sumPrice()" :disabled="c.number<1">
            <input class="bigoperator" type="text" v-model.number="c.number">
            <input readonly="readonly" type="" value="+" @click="countAdd($event),sumPrice()">
          </div>
          <div class="row-count" v-text="c.number*c.price"></div>
          <div><a href="" class="a-delete" @click.prevent="delGoods(c.good_id,c.type)">删除</a></div>
        </div>
      </div>

      <div class="cart-con-count">
        <ul class="col-md-9">
          <li class="f-l">
            <div class="por">
              <div class="selectBox">
                <div class="selectBox_show" v-on:click.stop="arrowDown">
                  <i class="icon icon_arrowDown"></i>
                  <a class="input-old" title="请选择" v-text="unitName" :id=unitId @click="getname()"></a>
                  <input type="hidden" name="unit" v-model="unitModel">
                </div>
                <div class="selectBox_list" v-show="isShowSelect">
                  <div class="selectBox_listLi" v-for="(item, index) in dataList"
                       @click.stop="select(item, index)" :id=item.id v-text="item.name">
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="col-md-3 bottom">总计:<span v-text="sum"></span>元
          <div class="btn btn-warning btn-lg" @click.prevent="addOrder">结算</div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'jquery'
  import 'bootstrap/dist/js/bootstrap.min'
  export default {
    name: 'Cart',
    data() {
      return {
        cart_info: [],   // 用来显示所有商品
        checked: false,
        checkedBoxList: [],  // 用来控制全选和反选
        checkNames: [],
        cart_info_id: 0,
        dataList: [],
        unitName: '请选择入住人',
        unitModel: '',
        room_set: [],
        isShowSelect: false,
        unitId: 0, // 当前选中的入驻人id
        sum: 0,    // 用来显示总价
        order_list: [], //订单列表用来存放添加到订单里的房间和套餐
        err_message:'',
      }
    },
    // 钩子获取数据
    mounted() {
      this.getData();
    },

    methods: {
      // 全选与选项
      changeAllChecked: function () {
        if (this.checked) {//实现反选
          this.checkedBoxList = [];
        } else { //实现全选
          this.checkedBoxList = [];
          this.cart_info.forEach((item) => {
            this.checkedBoxList.push(item.id);
          });
        }
      },
      arrowDown() {
        if (sessionStorage.getItem('u_points')) {
          this.isShowSelect = !this.isShowSelect;
        } else {
        }
      },
      sumPrice: function () {
        this.sum = 0;
        for (let i of this.cart_info) {
          for (let j of this.checkedBoxList) {
            if (i.id === j) {
              this.sum += i.price * i.number
            }
          }
        }
      },
      countAdd: function (event) {
        let cart_id = event.target.parentNode.id;
        for (let i of this.cart_info) {
          if (i.id == cart_id) {
            i.number++;
          }
        }
      },
      countReduce: function (event) {
        let cart_id = event.target.parentNode.id;
        for (let i of this.cart_info) {
          if (i.id == cart_id) {
            i.number--;
          }
        }
      },
      select(item, index) {
        this.isShowSelect = false;
        this.unitModel = index;
        this.unitName = item.name;
        this.unitId = item.id;
      },
      getname: function () {
        var user_id = sessionStorage.getItem('u_id')
        if (user_id) {
          this.dataList = []
          var u_id = {
            "user_id": user_id
          };
          var token = sessionStorage.getItem('token');
          var that = this;
          axios.post('http://127.0.0.1:8000/user/getcheckinfo/', u_id, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              response.data.forEach((item, index) => {
                that.dataList.push(item)
              });
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          this.err_message = '请登录';
          $('#myModal').modal();
        }
      },
      delGoods: function (good_id, good_type) {
        let data = {
          "user_id": sessionStorage.getItem('u_id'),
          "good_id": parseInt(good_id),
          "type": parseInt(good_type),
        };
        let that = this;
        axios.post('http://127.0.0.1:8000/cart/deletecart/', data, {"headers": {"token": sessionStorage.getItem('token')}}).then(function (response) {
          that.getData();
          that.err_message = '删除成功';
          $('#myModal').modal();
        })
      },
      // 用来获取购物车列表的函数
      getData: function () {
        var vm = this;
        this.cart_info = [];
        var token = sessionStorage.getItem('token');
        var user_id = sessionStorage.getItem('u_id');
        var data = {
          "user_id": user_id
        };
        var that = this;
        if (token) {
          axios.post('http://127.0.0.1:8000/cart/getcart/', data, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              // config.headers.common['token']=token
              let i = 0;
              for (let room of response.data.room) {
                i += 1;
                let json_room = {
                  "id": i,
                  "name": room.name,
                  "price": room.price,
                  "beadhouse_name": room.beadhouse_name,
                  "number": room.number,
                  "good_id": room.id,
                  "type": 0,
                };
                that.cart_info.push(json_room)
              }
              for (let meal of response.data.meal) {
                i += 1;
                let json_meal = {
                  "id": i,
                  "name": meal.name,
                  "price": meal.price,
                  "beadhouse_name": meal.beadhouse_name,
                  "number": meal.number,
                  "good_id": meal.id,
                  "type": 1,
                };
                that.cart_info.push(json_meal)
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          this.err_message = '请登录';
          $('#myModal').modal();
        }

      },
      // 结算函数
      addOrder: function () {
        this.order_list = [];
        if (this.unitId == 0) {
          this.err_message='请选择入住人';
          $('#myModal').modal();
        } else {
          for (let good of this.cart_info) {
            if (this.checkedBoxList.indexOf(good.id) >= 0) {
              this.order_list.push(good)
            }
          }
          if (this.order_list.length <= 0){ // 判断商品有没有被选中
            this.err_message = '请选择商品';
            $('#myModal').modal();
          }
          else {
            let result = confirm("请支付订单金额"); //在页面上弹出对话框
            let statusid = 2;
            if (result == true)
              statusid = 2;
            else
              statusid = 1;
            let data = {
              "user_id": sessionStorage.getItem('u_id'),
              "price": this.sum,
              "check_info_id": this.unitId,
              "good_list": this.order_list,
              "status": statusid,
            };
            let that = this;
            axios.post('http://127.0.0.1:8000/order/addorder/', data, {
              headers: {
                "token": sessionStorage.getItem('token')
              }
            }).then(function (response) {
              if (response.data.statuscode == '202'){
                that.err_message = '下单成功';
                $('#myModal').modal();
                that.getData();
                that.checkedBoxList = []
              }else {
                that.err_message = '生成订单失败';
                $('#myModal').modal();
              }
            })
          }
        }
      }
    },
    watch: {
      "checkedBoxList": function () {
        // 每当checkedBoxList发生改变时，更新总价
        this.sumPrice();
        // 如果checkedBoxList长度不等于购物车列表长度，全选状态为false
        if (this.checkedBoxList.length != this.cart_info.length) {
          this.checked = false
        }
        else {
          this.checked = true
        }
      },
      deep: true,
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart-container {
    font-size: 16px;
    width: 1100px;
    min-height: 550px;
    margin: auto;
    margin-top: 20px;
    border-bottom: 2px solid gainsboro;
    margin-bottom: 100px;
  }

  .cart-con-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
  }

  .cart-con-header div, .good-item div {
    padding-left: 10px;
    flex: 1;
    margin: auto;
  }

  .cart-con-header div:nth-child(6), .good-item div:nth-child(6) {
    flex: 1.5;
  }

  .cart-con-header div:nth-child(1), .good-item div:nth-child(1),
  .cart-con-header div:nth-child(2), .good-item div:nth-child(2),
  .cart-con-header div:nth-child(3), .good-item div:nth-child(3) {
    flex: 2.6;
  }

  .cart-good-item input {
    margin: auto 0;
  }

  .cart-good-item {
    height: 100px;
    box-sizing: border-box;
    border: #ebebeb solid 1px;
    line-height: 100px;
    font-size: 15px;
  }

  .cart-good-item img {
    width: 130px;
    height: 80px;
    border-radius: 5px;
  }

  .cart-goodsimg div {
    height: 70px;
    float: left;
    margin: auto 0;
  }

  .cart-btn-operator input {
    height: 20px;
    border: solid 1px grey;
    outline: none;
    box-sizing: border-box;
    width: 20px;
    text-align: center;
    line-height: 20px;
  }
  input.bigoperator{
    width: 28px;
  }

  .cart-btn-operator input[type="button"] {
    width: 20px;
  }

  .cart-opt input {
    height: 20px;
    width: 80px;
  }

  .cart-con-count {
    position: relative;
    background: #e7e7e7;
    height: 50px;
  }

  .cart-btn-operator input {
    background: white;
    border: gainsboro solid 1px;
  }

  ul li {
    list-style: none;
  }

  .selectBox {
    width: 120px;
    margin-top: 7px;
    padding: 6px;
    border: darkgray 1px solid;
    background: white;
    font-size: 16px;
  }

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
  }

  .cart-good-item input[type='checkbox'] {
    margin-left: 15px;
  }

  .btn-lg {
    width: 120px;
    height: 45px;

  }

  .selectBox_list {
    max-height: 100px;
    width: 80px;
    display: block;
  }

</style>
