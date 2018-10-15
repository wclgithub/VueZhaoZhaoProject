<template>
  <div class="col-md-9">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title glyphicon glyphicon-user">我的信息</h3>
          </div>
          <div class="panel-body">
            <!--第1.1行-->
            <div class="row">
              <div class="col-md-4 my-img-centet">
                <!--头像(left)-->
                <!--<img class="img-circle my-img" src="./images/user.png" alt="" id="user">-->
                <button class="btn btn-danger my-img-btn"><p>修改头像</p><input type="file" id="xdaTanFileImg"
                                                                            onchange="xmTanUploadImg(this)"></button>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-10  my-info">
                    <div class="input-group my-input">
                      <span class="input-group-addon "><p>昵称：</p></span>
                      <input type="text" class="form-control" id="user-name" placeholder="UserName：可爱小宝贝"
                             aria-describedby="basic-addon1" v-model="user_info.user_name">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon "><p>性别：</p></span>
                      <input type="text" class="form-control" id="user-sex" placeholder="Sex：女"
                             aria-describedby="basic-addon1" v-model="user_info.sex">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon "><p>手机号码：</p></span>
                      <input type="text" class="form-control" id="user-tel" placeholder="Tel：18842421515"
                             aria-describedby="basic-addon1" value="" v-model="user_info.telephone">
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                </div>
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4 my-old-change">
                    <button class="btn btn-danger save" @click="saveUserInfo()">保存信息</button>
                  </div>
                  <div class="col-md-4"></div>
                </div>
                <!--第1.2行end-->
              </div>
            </div>
          </div>
        </div>
        <!--第1.1行end-->
        <!--第1.2行-->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return{
        user_info: {
          "telephone": "18846463366",
          "id": "1",
          "regist_time": "2018-09-15",
          "sex": "女",
          "user_name": "猫咪",
          "user_img": "./images/user.png",
          "points": 50
        },
      }
    },
    methods: {
      saveUserInfo:function(){
        if(this.user_info.telephone==''){
          alert('电话号码不能为空！');
        }else {
          // axios.post('http://127.0.0.1:8000/user/xxx',user_info )
          //   .then(function (response) {
          //     console.log(response.data)
          //     console.log(response)
          //   })
          //   .catch(function (error) {
          //     console.log(error)
          //   })
          // if(response.data.statuscode=='202'){
          //     alert('保存成功');
          // }
          console.log(this.user_info.telephone);
          alert('ok');
        }
      }
    },
    mounted(){
      // axios.post('http://127.0.0.1:8000/user/xxx')
      //   .then(function (response) {
      //       user_info=response.data
      //     console.log(response.data)
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      // if(response.data.statuscode=='202'){
      //     alert('保存成功');
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

  .my-input {
    margin-bottom: 10px;
  }

  .my-input span p {
    margin: 0;
    padding: 0;
    width: 150px;
  }

  .my-img-centet {
    text-align: center;
  }

  .my-old-change {
    margin: 10px 25px;
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
