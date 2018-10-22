<template>
  <transition name="modal-fade">
    <div id="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header" >
          </slot>
        </div>
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

          <slot name="footer">
            <p class="err" v-text="err_im"></p>
            <button type="button" class="btn-green" @click="close">关闭</button>
            <button type="button" class="btn-q" @click="closetwo">确定</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'ModalCart',
    props: ['show','good_poins'],
    data() {
      return {
        showinterl: '',
        showgoodinterl: '',
        //下拉列表
        isShowSelect: false,
        dataList: [
          {'name':'请选择入住人'}

        ],
        unitName: '请选择入住人',
        unitModel: '',
        nameList:[],
        // 下拉列表结束
        num:0,
        err_im:'',
        unitNameId:'',


      }
    },
    mounted: function () {
      this.num=sessionStorage.getItem('good_intergral');
      this.islogin();
      this.getname();
    },
    methods: {
      closetwo: function () {
          if (this.unitName==='请选择入住人'){
            this.err_im='请选择入住人'
          }else {
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!这里是已经拿到入住人的名字了！！！！！！！！！！！！！！
            let setData=[];
            setData.push(0);
            setData.push(this.unitNameId);
            alert(setData);
            // alert(this.unitName);
            this.$emit('close',setData);
          //  这个0 是代表选择的按钮  0是确认  传给 Cart.vue中的closeModal方法
          }
      },
      close:function(){
        let setData=[];
        this.$emit('close',1);
        //  这个1 是代表选择的按钮  0是确认，1是关闭
      },
      islogin:function(){
        if (sessionStorage.getItem('u_points')) {
          this.showinterl = '我的积分：'+sessionStorage.getItem('u_points')
        } else {
          this.showinterl = '请先登录'
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
        this.unitNameId = item.id;
        alert(this.unitNameId)
      //  ！！！！！！！！！！！！！在这里拿到被选择的入住人姓名，你可以在这里拿id
      },
      getname: function () {
        var vm = this;
        var token=sessionStorage.getItem('token');
        var user_id=sessionStorage.getItem('u_id');
        console.log(user_id);
        var data={
          "user_id":user_id
        };
        if(token){
          axios.post('http://127.0.0.1:8000/cart/getcart/',data,{
            headers:{
              "token":token
            }
          })
            .then(function (response) {
              console.log(response.data);
              // config.headers.common['token']=token
              let res = response.data;
              response.data.forEach((item, index) => {
                vm.nameList.push(item.ci_info_name[index])
              });
              vm.nameList.forEach((item, index) => {
                vm.dataList.push(item)
              })
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          this.$router.push({path: "/login"});
        }
      },

    }
  }
</script>
<style scoped>
  @import "../../static/css/modal.css";

</style>
