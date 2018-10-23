<template>
  <div>
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
  <div class="row my-index-center">
    <!--内容左空白-->
    <div class="col-md-2"></div>
    <!--内容左空白end-->
    <!--中间内容-->
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading">
              <h4 v-text="room_name">豪华单人间</h4>
            </div>
            <!-- List group -->
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-6 room-img">
                    <img src="../assets/images/det2.jpg" alt="">
                  </div>
                  <div class="col-md-4">
                    <div class="panel panel-default">
                      <div class="panel-body ">
                        <h4 v-for="rs in room_set">
                          <input type="checkbox" :id=rs.id v-model="setmeal_id" :value=rs.id>
                          <label :for=rs.id v-text="rs.name"></label>
                          /
                          <span v-text="rs.price" class="text-orange"></span>
                          元
                        </h4>
                      </div>
                      <div class="panel-heading">
                        <ul>
                          <h4>周期:
                            <input type="number" class="input-month" oninput="if(value>12)value=12 ;if(value<1)value=1"
                                   v-model=number>
                            月
                          </h4>
                        </ul>
                      </div>
                      <div class="panel-body">
                        <button type="button" class="btn btn-warning center-block" @click="addCart()">加入购物车</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a href="http://service.weibo.com/share/share.php?appkey=&title=&url=&searchPic=false&style=simple"
                       target="_blank">
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-share-alt roombtnmargin">分享
                      </button>
                    </a>
                    <a href="#">
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-star-empty roombtnmargin" v-if="flag"
                              @click="collRoom()">收藏房间
                      </button>
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-star roombtnmargin" v-if="!flag"
                              @click="delCollRoom()">已收藏
                      </button>
                    </a>
                    <!--<button type="button" class="btn center-block glyphicon glyphicon-star roombtnmargin">收藏</button>-->
                    <a href="#">
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-home roombtnmargin" @click="goToBh()">公寓
                      </button>
                    </a>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-4">
                    <div class="panel panel-default room-other">
                      <div class="panel-body"><h3>房间设施</h3></div>
                      <div class="panel-body" v-for="rc in room_config"><img :src=rc.srcd><span
                        v-text="rc.configtype__name"></span></div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="panel panel-success" v-for="rs in room_set">
                      <div class="panel-heading" v-text="rs.name">标准营养套餐</div>
                      <div class="panel-body row">
                        <div class="col-md-6 room-set-img">
                          <img class="center-block" src="../assets/images/det2.jpg" alt="">
                        </div>
                        <div class="col-md-6" v-text="rs.content">这是标准营养套餐内容介绍</div>
                      </div>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>

    <!--内容右end-->
    <div class="col-md-2"></div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "",
    data() {
      return {
        room_id: 0,
        room_config: [],
        rooms_info: [],
        dataList: [],
        unitName: '未选择',
        unitModel: '',
        room_set: [],
        isShowSelect: false,
        unitId: '',
        flag: true,
        setmeal_id: [],
        number: 1,
        room_name: '',
        err_message:'',
      }
    },
    methods: {
      goToBh: function () {
        var bh_id = sessionStorage.getItem('bhid');
        this.$router.push({path: "/apartinfo"});
      },
      //收藏房间
      collRoom: function () {
        var vm = this;
        vm.room_id = sessionStorage.getItem('roomid');
        vm.user_id = sessionStorage.getItem('u_id');
        if (vm.user_id) {
          var token = sessionStorage.getItem('token')
          var data = {
            "user_id": vm.user_id,
            "room_id": vm.room_id,
          }
          axios.post('http://127.0.0.1:8000/beadhouse/collectroom/', data, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              console.log(response.data)
              if (response.data.statuscode == '202') {
                vm.flag = false;
                vm.err_message = '收藏成功';
                $('#myModal').modal();
              } else {
                vm.flag = true;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          vm.err_message = '请登录';
          $('#myModal').modal();
        }
      },
      //取消收藏房间
      delCollRoom: function () {
        var vm = this;
        vm.room_id = sessionStorage.getItem('roomid');
        vm.user_id = sessionStorage.getItem('u_id');
        if (vm.user_id) {
          var token = sessionStorage.getItem('token');
          var data = {
            "user_id": vm.user_id,
            "room_id": vm.room_id,
          }
          axios.post('http://127.0.0.1:8000/beadhouse/cancelroomcollect/', data, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              if (response.data.statuscode == '202') {
                vm.flag = true;
                vm.err_message = '取消成功';
                $('#myModal').modal();
              } else {
                vm.flag = false;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
        else {
          vm.err_message = '请登录';
          $('#myModal').modal();
        }
      },
      //添加到购物车
      addCart: function () {
        var vm = this;
        vm.user_id = sessionStorage.getItem('u_id');
        if (vm.user_id) {
          var token = sessionStorage.getItem('token')
          var room_id = sessionStorage.getItem('roomid')
          //房间0 套餐1
          if (vm.setmeal_id) {
            var data = {
              "user_id": vm.user_id,
              "good_list": [
                {
                  "id": vm.room_id,
                  "number": vm.number,
                  "type": 0
                },
              ]
            };
            for(let s in vm.setmeal_id){
              data.good_list.push(
                {
                  "id": vm.setmeal_id[s],
                  "number": vm.number,
                  "type": 1
                },
              )
            }

          }
          else {
           var data = {
              "user_id": vm.user_id,
              "good_list": [
                {
                  "id": vm.room_id,
                  "number": vm.number,
                  "type": 0
                },
              ]
            };
          }
            // var data = {
            //   "user_id": vm.user_id,
            //   "room_id": vm.room_id,
            //   "number":vm.number,
            //   "setmeal_id":vm.setmeal_id
            // }
            // alert(vm.room_id)
            // alert(vm.setmeal_id)
            axios.post('http://127.0.0.1:8000/cart/addcart/', data, {
              headers: {
                "token": token
              }
            })
              .then(function (response) {
                if (response.data.statuscode == '202') {
                  vm.err_message = '成功加入购物车';
                  $('#myModal').modal();
                } else {
                  vm.err_message = '加入购物车失败'; 6
                  $('#myModal').modal();
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }
          else {
          vm.err_message = '请登录';
          $('#myModal').modal();
          }
        }

      },
      mounted() {

        this.room_id = parseInt(sessionStorage.getItem('roomid'));
        this.room_name = sessionStorage.getItem('roomname');
        this.rooms_info = sessionStorage.getItem('rooms_info');
        //得到所有的配置
        var vm = this;
        axios.get('http://127.0.0.1:8000/beadhouse/getconfigbyid/' + vm.room_id + '/')
          .then(function (response) {
            vm.room_config = response.data;
            for (let c of vm.room_config) {
              c.srcd = "http://localhost:8000/media/pic/detc" + c.configtype_id + '.jpg'
            }
            console.log(vm.room_config)
          })
          .catch(function (error) {
            console.log(error)
          })
        axios.get('http://127.0.0.1:8000/beadhouse/getmealbyroomid/' + vm.room_id + '/')
          .then(function (response) {
            vm.room_set = response.data;
            console.log(vm.room_set)
          })
          .catch(function (error) {
            console.log(error)
          })
        //判断房间是否被收藏
        vm.user_id = sessionStorage.getItem('u_id');
        if (vm.user_id) {
          var token = sessionStorage.getItem('token')
          var room_id = sessionStorage.getItem('roomid')
          var data = {
            "user_id": vm.user_id,
            "room_id": vm.room_id,
          }
          axios.post('http://127.0.0.1:8000/beadhouse/isroomcollect/', data, {
            headers: {
              "token": token
            }
          })
            .then(function (response) {
              console.log(response.data.collectstatus)
              if (response.data.collectstatus) {
                vm.flag = false;
              } else {
                vm.flag = true;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    }
</script>

<style scoped>
  .room-img img {
    width: 450px;
    height: 300px;
    border-radius: 5px;
  }

  .roombtnmargin {
    width: 100px;
    margin: 10px 20px;
  }

  .room-set-img img {
    width: 185px;
    height: 100px;
    border-radius: 5px;
  }

  .room-other {
    height: 750px;
  }

  .my-index-center {
    padding-top: 20px;
    min-height: 600px;
  }

  .my-input span p {
    margin: 0;
    padding: 0;
    width: 150px;
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

  .col-md-2 a, .col-md-1 a {
    text-decoration: none;
    border-radius: 2px;
    color: #269abc;
  }

  .text-orange {
    color: orange;
  }

  .glyphicon-star {
    background: orange;
  }

  .input-month {
    width: 100px;
  }

  h4 {
    margin: 10px 5px;
  }

</style>
