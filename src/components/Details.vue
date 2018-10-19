<template>
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
              <h4>豪华单人间</h4>
            </div>
            <div class="panel-body">
              <p>地址:江苏省苏州市工业园区雪堂街328号</p>
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
                        <h4 v-for="rs in room_set"><input type="checkbox" name="set"><label  v-text="rs.name"></label>/<span v-text="rs.price" class="text-orange"></span>元</h4>
                      </div>
                      <div class="panel-heading">
                        <ul>
                          <li class="f-l">
                            <div class="por">
                              <div class="selectBox" style="width: 400px;">
                                <div class="selectBox_show" v-on:click.stop="arrowDown">
                                  <i class="icon icon_arrowDown"></i>
                                  <a title="请选择" v-text="unitName" :id=unitId @click="getname()"></a>
                                  <input type="hidden" name="unit" v-model="unitModel">
                                </div>
                                <div class="selectBox_list" v-show="isShowSelect"
                                     style="max-height: 240px; width: 398px; display: block;">
                                  <div class="selectBox_listLi" v-for="(item, index) in dataList"
                                       @click.stop="select(item, index)" :id=item.id v-text="item.name">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="panel-body">
                        <button type="button" class="btn btn-warning center-block">加入购物车</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <a href="#">
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-share-alt roombtnmargin">分享
                      </button>
                    </a>
                    <a href="#">
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-star-empty roombtnmargin">收藏
                      </button>
                    </a>
                    <!--<button type="button" class="btn center-block glyphicon glyphicon-star roombtnmargin">收藏</button>-->
                    <a href="#">
                      <button type="button"
                              class="btn center-block glyphicon glyphicon-home roombtnmargin">公寓
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
                      <div class="panel-body" v-for="rc in room_config" ><img :src=rc.srcd ><span v-text="rc.configtype__name"></span></div>
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
</template>

<script>
  import axios from 'axios'

  export default {
    name: "",
    data(){
      return{
        room_id:'',
        room_config:[],
        rooms_info:[],
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
        room_set: [],
        isShowSelect: false,
        unitId:''
      }
    },
    methods:{
      select(item, index) {
        this.isShowSelect = false;
        console.log(item);
        console.log(index);
        this.unitModel = index;
        this.unitName = item.name;
        this.unitId = item.id;
      },
      getname: function () {
         var user_id=sessionStorage.getItem('u_id')

        // console.log(u_id)

        if(user_id){
          this.dataList=[]
          var u_id = {
            "user_id": user_id
          };
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
        }
        else{
          alert('请登录！');
        }

      },
      arrowDown() {
        this.isShowSelect = !this.isShowSelect;
      },
    },
    mounted() {
      var vm = this;
      vm.room_id=sessionStorage.getItem('roomid');
      vm.rooms_info=sessionStorage.getItem('rooms_info');
      for(let r of vm.rooms_info){
        if(r.id==vm.room_id){
          //得到当前room信息
          vm.rooms_info=r
        }
      }
      //得到所有的配置
      axios.get('http://127.0.0.1:8000/beadhouse/getconfigbyid/'+vm.room_id+'/')
        .then(function (response) {
          vm.room_config = response.data;
          for(let c of vm.room_config){
            c.srcd="../../static/images/detc"+c.configtype_id+'.jpg'
          }
          console.log(vm.room_config)
        })
        .catch(function (error) {
          console.log(error)
        })
      axios.get('http://192.168.2.32:8000/beadhouse/getmealbyroomid/'+vm.room_id+'/')
        .then(function (response) {
          vm.room_set = response.data;
          console.log(vm.room_set)
        })
        .catch(function (error) {
          console.log(error)
        })
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
    margin: 10px 20px;
  }

  .roomcheckin {
    border-radius: 5px;
    border: #dcdcdc solid 1px;
  }

  .room-set-img img {
    width: 185px;
    height: 100px;
    border-radius: 5px;
  }

  .room-other {
    height: 750px;
  }

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

  .my-index-center {
    padding-top: 20px;
    min-height: 600px;
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

  .my-img-btn p {
    position: absolute;
  }

  .col-md-2 a, .col-md-1 a {
    padding: 5px;
    text-decoration: none;
    border-radius: 2px;
    color: #269abc;
  }

  .selectBox_show a{
    text-decoration: none;
    color: black;
    font-size: 20px;
    /*padding-left: 80px;*/
  }
  .por{
    /*background: chocolate;*/
    width: 300px;
    margin-left: 40px;
    margin-top: 50px;
    cursor:pointer
  }
  .selectBox_listLi{
    font-size: 15px;
  }


  .f-l{
    list-style: none;
  }
  .text-orange{
    color: orange;
  }

</style>
