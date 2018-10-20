<template>
  <!--内容-->
  <div class="row my-index-center">
    <!--内容左空白-->
    <div class="col-md-2"></div>
    <!--内容左空白end-->
    <!--中间内容-->
    <div class="col-md-8">
      <div class=" panel panel-success">
        <div class=" panel-heading">
          <h3 v-text="bh_all_info.name">泰康之家</h3>
          <div v-text="bh_all_info.address">地址：北京市昌平区小汤山镇北京同心园</div>
        </div>
        <div class="panel-body row">
          <div class="col-md-4">
            <div class="panel-body content first">
              <h4 class="col-md-6 ">占地面积:</h4>
              <p class="col-md-6" v-text="bh_all_info.ground_size">2000</p>
            </div>
            <div class="panel-body content">
              <h4 class="col-md-6">人员规模:</h4>
              <p class="col-md-6" v-text="bh_all_info.staff">2000</p>
            </div>
            <div class="panel-body content">
              <h4 class="col-md-6">创建日期:</h4>
              <p class="col-md-6" v-text="bh_all_info.build_time">1998-8-8</p>
            </div>
            <div class="panel-body content">
              <h4 class="col-md-6">公寓评分:</h4>
              <p class="col-md-6" v-text="bh_all_info.score">5.2</p>
            </div>
            <div class="panel-body content last">
              <h4 class="col-md-6">机构性质:</h4>
              <p class="col-md-6" v-text="bh_all_info.property">民营机构</p>
            </div>
            <div class="panel-body content last">
              <div class="map"><img src="../assets/images/map.png" alt=""></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
                <div class="thumbnail">
                  <img src="../assets/images/det2.jpg" alt="..." class="col-md-12">
                  <div class="caption">
                    <h4><span v-text="bh_all_info.name">小太阳</span>样图展示</h4>
                    <p v-text="bh_all_info.introduce">南京易发红日养老院以温馨的居家氛围、个性化的服务和专业有爱心的团队，致力于让每位住户有尊严的享受健康愉悦及丰富多彩的生活，促进住户及员工家庭的幸福。南京易发红日养老院推行完全以住户为中心的照护计划。其核心理念是尊重每一位老人的个体差异，为住户提供符合他/她健康及生活习惯的个性化服务，实现高品质的老年生活。作为直营连锁的养老服务品牌，也是国内最早实践社会化养老的企业，南京易发红日养老院布局覆盖北京、上海、广东、浙江、海南等地区，居国内领先地位。恭和苑希望通过自身的实践与努力，成为中国养老服务行业的标杆</p>
                    <p class="height center-block">
                      <button class="btn btn-success glyphicon glyphicon-bed col-md-2" role="button" @click="saveBhId()">查看房间</button>
                      <button class="btn btn-success glyphicon glyphicon-apple col-md-2" role="button">查看套餐</button>
                      <button class="btn btn-success glyphicon glyphicon-star-empty col-md-2" role="button" v-if="flag" @click="collBh()">收藏公寓</button>
                      <button class="btn btn-success glyphicon glyphicon-star col-md-2" role="button" v-if="!flag" @click="delcollBh()">已收藏</button>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--中间内容end-->

  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    data() {
      return{
        flag:'',
        user_id:'',
        bh_id:'',
        bh_all_info:{
          "name":'',
          "address":'',
          "build_tim":'',
          "ground_size":'',
          "property":'',
          "score":'',
          "staff":'',
          "introduce":'',
        }
      }
    },
    methods: {
      //跳转详情页
      saveBhId:function (id) {
        sessionStorage.setItem('bhid',this.bh_id);
        this.$router.push({path: "/house"});
      },
      //收藏公寓
      collBh:function () {
        var vm = this;
        vm.bh_id=sessionStorage.getItem('bhid');
        vm.user_id=sessionStorage.getItem('u_id');
        if(vm.user_id){
          var token=sessionStorage.getItem('token')
          var data={
            "user_id":vm.user_id,
            "house_id":vm.bh_id,
          }
          axios.post('http://127.0.0.1:8000/beadhouse/collecthouse/',data,{headers:{
              "token":token
            }})
            .then(function (response) {
              console.log(response.data)
              if(response.data.statuscode=='202'){
                vm.flag=false;
                alert('收藏成功！')
              }else {
                vm.flag=true;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          alert('请先登录！')
        }
      },
      //取消收藏公寓
      delcollBh:function () {
        var vm = this;
        vm.bh_id=sessionStorage.getItem('bhid');
        vm.user_id=sessionStorage.getItem('u_id');
        if(vm.user_id){
          var token=sessionStorage.getItem('token')
          var data={
            "user_id":vm.user_id,
            "house_id":vm.bh_id,
          }
          axios.post('http://127.0.0.1:8000/beadhouse/cancelhousecollect/',data,{headers:{
              "token":token
            }})
            .then(function (response) {
              if(response.data.statuscode=='202'){
                vm.flag=true;
                alert('取消成功')
              }else {
                vm.flag=false;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          alert('请先登录！')
        }
      }
    },
    mounted() {
      var vm = this;
      vm.bh_id=sessionStorage.getItem('bhid');
      axios.get('http://127.0.0.1:8000/beadhouse/gethousebyid/'+vm.bh_id+'/',)
        .then(function (response) {
          vm.bh_all_info = response.data[0];
          console.log(vm.bh_all_info)
        })
        .catch(function (error) {
          console.log(error)
        })

      //判断该公寓是否被收藏
      vm.user_id=sessionStorage.getItem('u_id');
      if(vm.user_id){
        var token=sessionStorage.getItem('token')
        var data={
          "user_id":vm.user_id,
          "house_id":vm.bh_id,
        }
        axios.post('http://127.0.0.1:8000/beadhouse/ishousecollect/',data,{headers:{
            "token":token
          }})
          .then(function (response) {
            console.log(response.data.collectstatus)
            if(response.data.collectstatus){
                vm.flag=false;
            }else {
              vm.flag=true;
            }
            console.log(vm.bh_all_info)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  .my-nav-img img {
    height: 65px;

  }
  .my-nav a {
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

  .my-index-center {
    padding-top: 20px;
    min-height: 600px;
  }
  .content{
    border: gainsboro 1px solid;
    line-height: 40px;
  }
  .first{
    border-radius: 5px 5px 0px 0px ;
  }
  .last{
    border-radius:  0px 0px 5px 5px ;
  }
  .thumbnail img{
    width: 100%;
    height: 350px;
    margin: 10px 0px;
  }
  .height{
    width: 400px;
    height: 40px;
  }
  .height button{
   margin: 5px;
    width: 100px;
  }
  .glyphicon-star{
    background: orange;
  }
  .map,.map img{
    width: 270px;
    height: 250px;
  }

</style>
