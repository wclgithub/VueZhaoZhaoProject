<template>

    <div class="col-md-9">
      <div class="row">
        <div class="col-md-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title glyphicon glyphicon-calendar">每日签到</h3>
            </div>
            <div class="panel-body my-every">
              <div class="my-every-btn"><button class="btn bg-orange my-sign" @click="flag && Sign()" v-text="signtext">签到+1</button></div>
              <!--<div class="my-every-btn"><button class="btn bg-orange history-sign">历史签到</button></div>-->
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title glyphicon glyphicon-euro">我的积分</h3>
            </div>
            <div class="panel-body my-every">
              <div class="my-every-btn"><button class="btn bg-orange user-socre" v-text="user_info.points">375</button></div>
              <!--<div class="my-every-btn"><button class="btn bg-orange ">积分记录</button></div>-->
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title glyphicon glyphicon-gift">每日奖励</h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-md-4  my-img-centet">
                  <!--头像(left)-->
                  <!--<img class="img-circle my-img" src="./images/user.png" alt="" id="user">-->
                  <button class="btn btn-danger my-img-btn"><p>修改头像</p><input type="file" id="xdaTanFileImg" onchange="xmTanUploadImg(this)" ></button>
                </div>
                <div class="col-md-8">
                  <!--头像right-->
                  <h4 class="glyphicon glyphicon-user">
                    <span class="user-name" v-text="user_info.name">可爱小宝贝</span> LV<span>2</span>
                  </h4>
                  <div class="progress">
                    <div class="progress-bar progress-bar-warning active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">
                      <span class="sr-only">45% Complete</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6"></div>

                    <div class="col-md-2 my-change"><a href="#"><button class="btn btn-danger" @click.prevent.stop="changeInfo()">修改信息</button></a></div>
                    <div class="col-md-2"></div>
                  </div>
                </div>
                <div class="col-md-12 list-btn">
                  <div class="list-group">
                    <button type="button" class="list-group-item" ><span class="badge" id="b2">2</span>积分成就奖励</button>
                    <button type="button" class="list-group-item" ><span class="badge" id="b3">4</span>线上订购奖励</button>
                    <button type="button" class="list-group-item" ><span class="badge" id="b4">4</span>线下公寓奖励</button>
                    <button type="button" class="list-group-item" ><span class="badge" id="b5">1</span>其他奖励</button>
                  </div>

                </div>
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
        data(){
          return{
            alldata: [],
            signtext:'签到+1',
            flag:true,
            user_info:{
              "telephone": "18846463366",
              "id": "1",
              "regist_time": "2018-09-15",
              "sex": "0",
              "name": "猫咪",
              "user_img": "./images/user.png",
              "points": 50
            },
          }
    },
      methods:{
         Sign:function () {
           this.user_info.points+=1;
           this.signtext='已签到';
           this.flag=false;
           var vm = this;
           // axios.post('http://127.0.0.1:8000/user/xxx',user_info )
           //   .then(function (response) {
           //     vm.state = response.data;
           //     console.log(response.data)
           //     console.log(response)
           //   })
           //   .catch(function (error) {
           //     console.log(error)
           //   })

         },
        changeInfo:function () {
          this.$emit('changeinfoclick')

        }
      },
      mounted() {
        var vm = this;
        // axios.post('http://localhost:8000/')
        //   .then(function (response) {
        //     vm.user_info = response.data;
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      }
    }
</script>

<style scoped>
  .my-nav-img img{
    height: 65px;

  }

  .my-nav a,.my-footer{
    color: white;
  }
  .my-every{
    display: flex;
  }
  .my-every-btn {
    flex: 1;
    text-align: center;
  }
  .my-every-btn button{
    color: white;
    width: 80px;
    height: 80px;
    border: solid 0px black;
    border-radius: 50%;
    box-shadow: #7b8099 2px 2px 2px;
  }

  .bg-orange{
    background: #f0ad4e;
  }
  .panel-primary > .panel-heading,.bg-green{
    background: #40a170;
  }
  .nav > li > a:hover,
  .nav > li > a:focus {
    color: black;
  }


  .my-change{
    margin-left: 15px;
  }

  .my-input span p{
    margin: 0;
    padding: 0;
    width: 150px;
  }
  .my-img-centet{
    text-align: center;
  }

  .my-active a{
    color: white;
  }

  .order-img img{
    width: 100px;
    height: 60px;
  }
  .my-nav-size ul li{
    font-size: 14px;

  }
  #xdaTanFileImg{
    opacity:0;
    filter:alpha(opacity=0);
  }
  .my-img-btn{
    width: 85px;
    height: 35px;
  }
  .my-img-btn p{
    position:absolute;
  }


</style>
