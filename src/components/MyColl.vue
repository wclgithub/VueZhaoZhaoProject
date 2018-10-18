<template>
  <div class="col-md-9">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-tabs">
          <li role="presentation" class="my-active mc" id="my-house"><a href="#"
                                                                        @click="getBhInfo(),bhstate=true,roomstate=false,artstate=false">公寓收藏</a>
          </li>
          <li role="presentation" class="my-active mc" id="my-room"><a href="#"
                                                                       @click="getRoomInfo(),bhstate=false,roomstate=true,artstate=false">房间收藏</a>
          </li>
          <li role="presentation" class="my-active mc" id="my-set"><a href="#"
                                                                      @click="getArtInfo(),bhstate=false,roomstate=false,artstate=true">文章</a>
          </li>

        </ul>
        <div class="panel panel-primary my-nav-size">
          <div class="panel-body ">
            <div class="row my-coll-all">
            </div>
            <!--公寓收藏内容-->
            <div class="row my-coll-house mcoll" v-if="bhstate">
              <div class="col-sm-4 col-md-4 " v-for="b in bh_info">
                <div class="thumbnail">
                  <img src="../assets/images/det2.jpg" alt="...">
                  <div class="caption">
                    <h4><strong v-text="b.beadhouse__name"></strong></h4>
                    <p>公寓</p>
                    <p><a href="#" class="btn btn-success" role="button">详情</a> <a href="#" class="btn btn-default"
                                                                                   role="button" @click="delColl(b.id,1)">取消</a></p>
                  </div>
                </div>
              </div>

            </div>
            <!--公寓收藏内容end-->
            <!--房间收藏内容-->
            <div class="row my-coll-room mcoll" v-if="roomstate">
              <div class="col-sm-4 col-md-4" v-for="r in room_info">
                <div class="thumbnail">
                  <img src="../assets/images/det2.jpg" alt="...">
                  <div class="caption">
                    <h4><strong v-text="r.room__name"></strong></h4>
                    <p v-text="r.room__beadhouse__name"></p>
                    <p><a href="#" class="btn btn-success" role="button">详情</a> <a href="#" class="btn btn-default"
                                                                                   role="button" @click="delColl(r.room_id,2)">取消</a></p>
                  </div>
                </div>
              </div>

            </div>
            <!--房间收藏内容end-->
            <!--文章收藏内容-->
            <div class="row my-coll-set mcoll"  v-if="artstate">
              <div class="col-sm-4 col-md-4" v-for="a in art_info">
                <div class="thumbnail">
                  <img src="../assets/images/det2.jpg" alt="...">
                  <div class="caption">
                    <h4 :id=a.article_id><strong v-text="a.article__title"></strong></h4>
                    <p v-text="a.article__beadhouse__name"></p>
                    <p><a href="#" class="btn btn-success" role="button">详情</a> <a href="#" class="btn btn-default"
                                                                                   role="button" @click="delColl(a.article_id,3)">取消</a></p>
                  </div>
                </div>
              </div>

            </div>
            <!--文章收藏内容end-->
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
        bhstate: true,
        roomstate: false,
        artstate: false,
        bh_info: [],
        room_info: [],
        art_info: []
      }
    },
    methods: {
      //选择公寓收藏，获取公寓信息
      getBhInfo: function () {
        // var vm = this;
        // axios.post('http://localhost:8000/')
        //   .then(function (response) {
        //     vm.bhinfo = response.data;
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      },
      //选择房间收藏，获取房间信息
      getRoomInfo: function () {
        var vm = this;
        var token=sessionStorage.getItem('token');
        var user_id=sessionStorage.getItem('u_id');
        var data={
          "user_id":user_id
        }
        axios.post('http://127.0.0.1:8000/beadhouse/getroombyuserid/ ',data,{
          headers:{
            "token":token
          }
        })
          .then(function (response) {
            vm.room_info = response.data;
            console.log(vm.room_info)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //选择文章收藏，获取文章信息
      getArtInfo: function () {
        var vm = this;
        var token=sessionStorage.getItem('token');
        var user_id=sessionStorage.getItem('u_id');
        var data={
          "user_id":user_id
        }
        axios.post('http://127.0.0.1:8000/article/getarticlebyuserid/ ',data,{
          headers:{
            "token":token
          }
        })
          .then(function (response) {
            vm.art_info = response.data;
            console.log(vm.art_info)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //删除收藏
      delColl:function (id,type) {
        // axios.post('http://127.0.0.1:8000/user/xxx',id )
        //   .then(function (response) {
        //     console.log(response.data)
        //     console.log(response)
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
        // if(response.data.statuscode=='202'){
        //     alert('取消成功');
        // }
        alert(id+' '+type)
      }
    },
    mounted() {
      var vm = this;
      var token=sessionStorage.getItem('token');
      var user_id=sessionStorage.getItem('u_id');
      var data={
        "user_id":user_id
      }
      if(token){
        axios.post('http://127.0.0.1:8000/beadhouse/gethousebyuserid/',data,{
          headers:{
            "token":token
          }
        })
          .then(function (response) {
            vm.bh_info = response.data;
            console.log(vm.bh_info)
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

  .my-nav {
    height: 65px;
    line-height: 40px;
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

  .my-index-center {
    padding-top: 20px;
    min-height: 600px;
  }

  .my-img {
    width: 150px;
    height: 150px;
    margin: 5px;
  }

  .panel-primary > .panel-heading, .bg-green {
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
