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
                  <!--<img src="../assets/images/nav-logo.png" alt="...">-->
                  <div class="caption">
                    <h4><strong v-text="b.name"></strong></h4>
                    <p>公寓</p>
                    <p><a href="#" class="btn btn-success" role="button">详情</a> <a href="#" class="btn btn-default"
                                                                                   role="button" @click="delColl(b.id)">取消</a></p>
                  </div>
                </div>
              </div>

            </div>
            <!--公寓收藏内容end-->
            <!--房间收藏内容-->
            <div class="row my-coll-room mcoll" v-if="roomstate">
              <div class="col-sm-4 col-md-4" v-for="r in room_info">
                <div class="thumbnail">
                  <!--<img src="./images/det3.jpg" alt="...">-->
                  <div class="caption">
                    <h4><strong v-text="r.room__name"></strong></h4>
                    <p v-text="r.room__beadhouse__name"></p>
                    <p><a href="#" class="btn btn-success" role="button">详情</a> <a href="#" class="btn btn-default"
                                                                                   role="button" @click="delColl(r.room_id)">取消</a></p>
                  </div>
                </div>
              </div>

            </div>
            <!--房间收藏内容end-->
            <!--文章收藏内容-->
            <div class="row my-coll-set mcoll" v-for="a in art_info" v-if="artstate">
              <div class="col-sm-4 col-md-4">
                <div class="thumbnail">
                  <!--<img src="./images/det4.jpg" alt="...">-->
                  <div class="caption">
                    <h4><strong v-text=""></strong></h4>
                    <p v-text=""></p>
                    <p><a href="#" class="btn btn-success" role="button">详情</a> <a href="#" class="btn btn-default"
                                                                                   role="button" @click="delColl(a.id)">取消</a></p>
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
  export default {
    name: "",
    data() {
      return {
        bhstate: true,
        roomstate: false,
        artstate: false,
        bh_info: [
          {
            "id": 66000,
            "name": '江苏省苏州市吴江市滨湖乐龄公寓',
            "bh_img": './images/det1.jpg'
          },
          {
            "id": 66001,
            "name": '江苏省苏州市相城区社会福利中心',
            "bh_img": './images/det2.jpg'
          },
          {
            "id": 66002,
            "name": '逸和源湘家荡颐养中心苏州接待处',
            "bh_img": './images/det1.jpg'
          },
          {
            "id": 66003,
            "name": '江苏省苏州市常熟市梅李镇敬老院',
            "bh_img": './images/det2.jpg'
          },
        ],
        room_info: [
          {
            "room__beadhouse__name": '江苏省苏州市吴江市滨湖乐龄公寓',
            "room_id": 1,
            "room__name": '标准单人间',
            "room_img": './images/det1.jpg'
          },
          {
            "room__beadhouse__name": '江苏省苏州市相城区社会福利中心',
            "room_id": 2,
            "room__name": '大床房',
            "room_img": './images/det2.jpg'
          },
          {
            "room__beadhouse__name": '逸和源湘家荡颐养中心苏州接待处',
            "room_id": 3,
            "room__name": '豪华双人房',
            "room_img": './images/det2.jpg'
          },
          {
            "room__beadhouse__name": '江苏省苏州市常熟市梅李镇敬老院',
            "room_id": 4,
            "room__name": '家庭房',
            "room_img": './images/det1.jpg'
          },
        ],
        art_info: [
          {
            "id": 111,
            "title": '怎样变年轻',
            "bh_name":'小太阳养老院',
            "sub_time":'18-10 -8'
          }
        ]
      }
    },
    methods: {
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
      getRoomInfo: function () {
        // var vm = this;
        // axios.post('http://localhost:8000/')
        //   .then(function (response) {
        //     vm.roominfo = response.data;
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      },
      getArtInfo: function () {
        // var vm = this;
        // axios.post('http://localhost:8000/')
        //   .then(function (response) {
        //     vm.artinfo = response.data;
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      },
      delColl:function (id) {
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
      }
    },
    mounted: {
      // var vm = this;
      // axios.post('http://localhost:8000/')
      //   .then(function (response) {
      //     vm.bhinfo = response.data;
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
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
