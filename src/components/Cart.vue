<template>
  <div class="cart-container panel panel-success">
    <div class="cart-con-header panel-heading">
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" @click="changeAllChecked">
        <label for="checkbox">全选</label>
      </div>
      <div>商品</div>
      <div>公寓</div>
      <div>入住人</div>
      <div>单价</div>
      <div>周期</div>
      <div>小计</div>
      <div>操作</div>
    </div>
    <div class="cart-con-goods" v-for="c in cart_info" v-if="c.number>=0" :key="c.id">
      <div class="cart-con-header cart-good-item" :id=c.id>
        <div class="cart-goodsimg">
          <input type="checkbox" :id=c.id :value=c.id v-model="checkedBoxList">
          <a href="#"><img src="../assets/images/det2.jpg" alt=""></a>
        </div>
        <div v-text="c.set_meal_name"></div>
        <div v-text="c.bh_name"></div>
        <div class="cart-opt">
          <input type="text" name="check_in" list="ci_info_name" required="required">
          <datalist id="ci_info_name" >
            <option  v-for="name in c.ci_info_name" :value="name['name']" v-text="name['id']"></option>
          </datalist>
        </div>
        <div v-text="c.set_meal_price"></div>
        <div class="cart-btn-operator" :id="c.id">
          <input type="button" value="-" @click="countReduce($event),sumPrice()" :disabled="c.number<1">
          <input type="text" v-model.number="c.number">
          <input type="button" value="+" @click="countAdd($event),sumPrice()">
        </div>
        <div class="row-count" v-text="c.number*c.set_meal_price"></div>
        <div><a href="" class="a-delete" @click.prevent="delCart([c.cart_set_id,c.good_id])">删除</a></div>
      </div>
    </div>
    <div class="cart-con-count">
      <button class="btn g_b" @click="showModal">请选择入住人</button>
      <!--<input type="text" v-text="">-->
      <modal-cart v-show="isModalVisible" @close="closeModal"/>
      <div>总计:<span v-text="sum"></span>元<input type="submit" value="结算" @click.prevent="addOder(sum)"></div>
    </div>

    <div class="cart-groom panel panel-success">
      <div class="cart-groom-title panel-heading"><h4>该公寓推荐套餐</h4></div>
      <div class="cart-groom-set-meal panel-body">
        <div><img src="../assets/images/det2.jpg" alt="">
          <p>标准套餐</p></div>
        <div><img src="../assets/images/det2.jpg" alt="">
          <p>热门套餐</p></div>
        <div><img src="../assets/images/det2.jpg" alt="">
          <p>营养套餐</p></div>
        <div><img src="../assets/images/det2.jpg" alt="">
          <p>体检套餐</p></div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: 'Cart',
    data() {
      return {
        cart_info:"",
        checked: false,
        checkedBoxList: [],
        checkNames:[],
        isModalVisible: false,
        cart_info_id:0
      }
    },
    // 钩子获取数据
    mounted(){
      var vm = this;
      var token=sessionStorage.getItem('token');
      var user_id=sessionStorage.getItem('u_id');
      console.log(user_id);
      var data={
        "user_id":user_id
      };
      var that=this
      if(token){
        axios.post('http://127.0.0.1:8000/cart/getcart/',data,{
          headers:{
            "token":token
          }
        })
          .then(function (response) {
            console.log(response.data)
            // config.headers.common['token']=token
            let res = response.data;
            for(let i in res){
              res[i]['id']=parseInt(i)+1
            }
            vm.checkNames=res[1]['ci_info_name'];
            vm.cart_info = res;
            console.log(vm.cart_info)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
      else {
        alert('请先登录！');
        this.$router.push({path: "/login"});
      }
    },
    //钩子保存/修改数据
    destroyed:function(){

      alert('保存数据！');
      console.log(this.cart_info);
      var token=sessionStorage.getItem('token');
      var user_id=sessionStorage.getItem('u_id');
      var data={
        "user_id":user_id,
        "cart_info":this.cart_info
      };
      if(token){
        axios.post('http://127.0.0.1:8000/cart/updatecart/',data,{
          headers:{
            "token":token
          }
        })
          .then(function (response) {
            console.log(response.data['statuscode'])
          })
          .catch(function (error) {
          })
      }
      else {
        alert('请先登录！');
        this.$router.push({path: "/login"});
      }
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
      // 删除购物车方法：参数 清单id,物品id;删除成功返回新数据
      delCart:function (cart_list_id) {
        // alert(cart_list_id);
        var vm = this;
        var token=sessionStorage.getItem('token');
        var user_id=sessionStorage.getItem('u_id');
        // console.log(user_id);
        // console.log(token);
        var data={
          "user_id":user_id,
          "cart_list_id":cart_list_id[0],
          "good_id":cart_list_id[1]
        };
        if(token){
          axios.post('http://127.0.0.1:8000/cart/deletecart/',data,{
            headers:{
              "token":token
            }
          })
            .then(function (response) {
              let res = response.data['statuscode'];
              if(res == '202'){
                // alert('购物车删除成功！');
                axios.post('http://127.0.0.1:8000/cart/getcart/',data,{
                  headers:{
                    "token":token
                  }
                })
                  .then(function (response) {
                    // config.headers.common['token']=token
                    let res = response.data;
                    if(res['statuscode']){
                      alert('页面刷新失败！')
                    }
                    else {
                      for(let i in res){
                        res[i]['id']=parseInt(i)+1
                      }
                      vm.cart_info = res;
                      console.log(vm.cart_info)
                    }
                  })
                  .catch(function (error) {
                    console.log(error)
                  })

              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      //  定义结算方法 参数：总价；生成订单成功后跳转到付款页
      addOder:function (date) {
        if(this.cart_info_id == 0){
          alert('请选择入住人！')
        }
        else {
          alert(this.cart_info_id);
          var vm = this;
          var token=sessionStorage.getItem('token');
          var user_id=sessionStorage.getItem('u_id');
          // console.log(user_id);
          // console.log(token);
          var data={
            "user_id":user_id,
            "price":date,
            "check_info_id":this.cart_info_id,
            "status_id":1,
            "orders":this.cart_info,
          };
          if(token){
            var than = vm;
            axios.post('http://127.0.0.1:8000/order/addorder/',data,{
              headers:{
                "token":token
              }
            })
              .then(function (response) {
                let res = response.data['statuscode'];
                console.log(res);
                if(res == '202'){
                  // console.log('000000000');
                  // 删除成功 删除购物车
                  for (let item of than.cart_info){
                    // console.log(item);
                    let data2=[item['cart_set_id'],
                      item['good_id']
                    ];
                    //  调用删除方法
                    than.delCart(data2)
                  }
                }
                else if (res == '403'){
                  // console.log('99999999');
                  alert('首次购买请先购买公寓房间！')
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        }
      },
      arrowDown() {
        if (sessionStorage.getItem('u_points')) {
          this.isShowSelect = !this.isShowSelect;
        } else {
          this.showinterl = '请先登录'
        }

      },
      select(item, index) {
        this.isShowSelect = false;
        console.log(item);
        console.log(index);
        this.unitModel = index;
        this.unitName = item.name;
        alert(this.unitName)
      },
      showModal: function () {
        this.isModalVisible = true
      },
      closeModal: function (state) {
        // alert(id);
        if (state[0]===0){
          this.cart_info_id=state[1];
          alert('ok');
          this.isModalVisible = false

        } else {
          this.isModalVisible = false
        }

      },
      sumPrice:function () {
        this.sum = 0;
        for(let i of this.cart_info){
          for (let j of this.checkedBoxList){
            if (i.id === j){
              this.sum+=i.set_meal_price * i.number
            }
          }
        }
      },
      countAdd:function (event) {
        let cart_id = event.target.parentNode.id;
        for (let i of this.cart_info){
          if(i.id == cart_id){
            i.number++;
          }
        }
      },
      countReduce:function (event) {
        let cart_id = event.target.parentNode.id;
        for (let i of this.cart_info){
          if(i.id == cart_id){
            i.number--;
          }
        }
      },

    //  获取入住人id
    //   getcheckinfoid:function (data) {
    //     alert(data[0]);
    //   }
    },
    watch:{
      "checkedBoxList": function() {
        this.sumPrice();
        if (this.checkedBoxList.length != this.cart_info.length) {
          this.checked = false
        }
        else {
          this.checked = true
        }
      },
      deep:true,
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/Cart.css";
</style>
