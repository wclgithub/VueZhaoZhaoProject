<template>
  <transition name="modal-fade">
    <div id="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header" >
            <p v-text="showinterl" class="f"></p>
            <p class="t">商品所需积分:</p><p v-text="good_poins" class="s"></p>
            <!--<div class="d-btn-close">-->
              <!--<button type="button" class="btn-close" @click="close">x</button>-->
            <!--</div>-->
          </slot>
        </div>
        <!--<div class="modal-body">-->
        <!--<slot name="body"> 这是Modal弹框的主体</slot>-->
        <!--</div>-->
        <!--下拉列表---------------------------------------------------------------------------->
        <li class="f-l">
          <div class="por">
            <div class="selectBox" style="width: 400px;">
              <div class="selectBox_show" v-on:click.stop="arrowDown">
                <i class="icon icon_arrowDown"></i>
                <a title="请选择" v-text="unitName"></a>
                <input type="hidden" name="unit" v-model="unitModel">
              </div>
              <div class="selectBox_list" v-show="isShowSelect"
                   style="max-height: 240px; width: 398px; display: block;">
                <div class="selectBox_listLi" v-for="(item, index) in dataList"
                     @click.stop="select(item, index)" v-text="item.name">
                </div>
              </div>
            </div>
          </div>
        </li>

        <div class="modal-footer">

          <p class="modal-footer-p">注意：邮寄地址仅限于您入住人登记的养老公寓地址</p>
          <slot name="footer">
            <p class="err" v-text="err_im"></p>
            <button type="button" class="btn-green" @click="close">关闭</button>
            <button type="button" class="btn-q" @click="closetwo">确定兑换</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Modal',
    props: ['show','good_poins'],
    data() {
      return {
        showinterl: '',
        showgoodinterl: '',
        //下拉列表
        isShowSelect: false,
        dataList: [
          // {key: -1, value: "请选择"},
          // {key: 0, value: "苹果"},
          // {key: 1, value: "香蕉"},
          // {value: "请选择"},
          // {value: "妈妈"},
          // {value: "爸爸"}

        ],
        unitName: '请选择入住人',
        unitModel: '',
        num:0,
        err_im:'',


      }
    },
    mounted: function () {
      this.num=sessionStorage.getItem('good_intergral');
      this.islogin();
      this.getname();
    },
    methods: {
      closetwo: function () {
        var u_points=sessionStorage.getItem('u_points');
        var int_points=parseInt(u_points)
        var int_good_points=parseInt(this.good_poins)
        if (int_points>=int_good_points){
          var now_points=int_points-int_good_points
          sessionStorage.setItem('u_points',now_points)
          this.$options.methods.changepoints(now_points);
          this.$emit('close',0);
        }else {
          this.err_im='您的积分不足'
        }
      },
      close:function(){
        this.$emit('close',1);
      },
      islogin:function(){
        if (sessionStorage.getItem('u_points')) {
          this.showinterl = '我的积分：'+sessionStorage.getItem('u_points')
        } else {
          this.showinterl = '请先登录'
        }
      },
      arrowDown() {
        this.isShowSelect = !this.isShowSelect;
      },
      select(item, index) {
        this.isShowSelect = false;
        console.log(item);
        console.log(index);
        this.unitModel = index;
        this.unitName = item.name;
      },
      getname: function () {
        var u_id = {
          "user_id": sessionStorage.getItem('u_id')
        };
        // console.log(u_id)
        var token = sessionStorage.getItem('token');
        var that=this;
        axios.post('http://127.0.0.1:8000/user/getcheckinfo/', u_id, {
          headers: {
            "token": token
          }
        })
          .then(function (response) {
            // console.log(response.data[0])
            response.data.forEach((item, index) => {
              that.dataList.push(item)
            })
            console.log(that.dataList)
          })
          .catch(function (error) {
            console.log(error)
          })

      },
      changepoints:function (now_points) {
        var user={
          "user_id":sessionStorage.getItem('u_id'),
          "points":now_points
        }
        var istoken = sessionStorage.getItem('token');
        axios.post('http://127.0.0.1:8000/user/updatepoints/', user,{
          headers: {
                    "token": istoken
                  }
        })
          .then(function (response) {
            // console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
<style scoped>
  @import "../../static/css/modal.css";

</style>
