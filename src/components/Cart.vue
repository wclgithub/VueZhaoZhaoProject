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
          <datalist id="ci_info_name">
            <option value="妈妈">王小翠</option>
            <option value="爸爸">刘大壮</option>
            <option value="叔叔">李志远</option>
          </datalist>
        </div>
        <div v-text="c.set_meal_price"></div>
        <div class="cart-btn-operator">
          <input type="button" value="-" @click="c.number-=1" :disabled="c.number<1">
          <input type="text" v-model.number="c.number">
          <input type="button" value="+" @click="c.number+=1">
        </div>
        <div class="row-count" v-text="c.number*c.set_meal_price"></div>
        <div><a href="#" class="a-delete">删除</a></div>
      </div>
    </div>
    <div class="cart-con-count">
      <div>总计:<span v-text="sum"></span>元<input type="submit" value="结算"></div>
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
  export default {
    name: 'Cart',
    data() {
      return {
        cart_info: [
          {
            "id": 1,
            "cart_set_id": 1,
            "ci_info_name": "王小八",
            "set_meal_name": "标准营养套餐",
            "bh_name": "南京易发红日养老院",
            "set_meal_price": 500,
            "number": 2
          },
          {
            "id": 2,
            "cart_set_id": 1,
            "ci_info_name": "八小王",
            "set_meal_name": "标准营养套餐",
            "bh_name": "南京易发红日养老院",
            "set_meal_price": 500,
            "number": 2
          }, {
            "id": 3,
            "cart_set_id": 1,
            "ci_info_name": "小王八",
            "set_meal_name": "标准营养套餐",
            "bh_name": "南京易发红日养老院",
            "set_meal_price": 500,
            "number": 2
          },
        ],
        checked: false,
        checkedBoxList: [],
      }
    },
    methods: {
      changeAllChecked: function () {
        if (this.checked) {//实现反选
          this.checkedBoxList = [];
        } else { //实现全选
          this.checkedBoxList = [];
          this.cart_info.forEach((item) => {
            this.checkedBoxList.push(item.id);
          });
        }
      }
    },
    watch:{
      "checkedBoxList": function() {
        alert('ok');
        if (this.checkedBoxList.length != this.cart_info.length) {
          this.checked = false
        }
        else {
          this.checked = true
        }
      },
      deep:true,
    },
    computed: {
      sum() {
        let sum = 0;
        for (let i of this.cart_info) {
          if (i.number > 0)
            sum += i.set_meal_price * i.number;
          }
          return sum;
        }
      },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cart-container, .cart-groom {
    width: 1000px;
    margin: auto;
    margin-top: 20px;
    border-bottom: 2px solid gainsboro;
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
    flex: 2.5;
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
    width: 100px;
    height: 70px;
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
    width: 40px;
    text-align: center;
    line-height: 20px;
  }

  .cart-btn-operator input[type="button"] {
    width: 20px;
  }

  .cart-opt input {
    height: 20px;
    width: 80px;
  }

  .cart-con-count {
    background: #e7e7e7;
    height: 50px;
  }

  .cart-con-count div {
    float: right;
  }

  .cart-con-count input {
    margin: 10px;
    width: 100px;
    height: 35px;
    background: #00cc66;
    border: #00cc66 solid 1px;
    border-radius: 10px;
    color: white;
  }

  .cart-groom {
    width: 100%;
    margin: auto;
  }

  .cart-groom-title {
    width: 100%;
  }

  .cart-groom-set-meal {
    width: 100%;
    display: flex;
  }

  .cart-groom-set-meal div {
    flex: 1;
    width: 200px;
    height: 150px;

    box-sizing: border-box;
    border: white solid 3px;
    text-align: center;
  }

  .cart-groom-set-meal div img {
    width: 200px;
    height: 130px;
    border-radius: 5px;

  }

</style>
