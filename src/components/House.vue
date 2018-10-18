<template>
  <!--内容-->
  <div class="row my-index-center">
    <!--内容左空白-->
    <div class="col-md-2"></div>
    <!--内容左空白end-->
    <!--中间内容-->
    <div class="col-md-8">
      <!--巨幕-->
      <div class="row">
        <div class="col-md-12 ">
          <div class="jumbotron">
            <div class="row">
              <div class="col-md-7">

              </div>
              <div class="col-md-5">
                <span class="house-title"></span>
                <p>让您的父母得到最温暖的关怀！</p>
                <div class="row">
                  <div class="col-md-4">
                    <a class="btn btn-success btn-lg" href="#" role="button">公寓简介</a>
                  </div>
                  <div class="col-md-6">
                    <a class="btn btn-success btn-lg" href="#" role="button">增值套餐</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <!--巨幕end-->
      <!--房型-->
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-success">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-4">房型</div>
                <div class="col-md-2">床位数量</div>
                <div class="col-md-2">价格</div>
                <div class="col-md-2">剩余数量</div>
                <div class="col-md-2"></div>
              </div>
            </div>
            <div class="house-info">
              <div class="panel-body house-info house-border-bottom" v-for="r in rooms_info">
              <div class="row">
              <div class="col-md-4">
              <div class="row">
              <div class="col-md-6 houseimg">
              <!--<img src="./images/det2.jpg" alt="">-->
              </div>
              <div class="col-md-6"><h4 class="houselineheight" v-text="r.name">标准豪华单人间</h4></div>
              </div>
              </div>
              <div class="col-md-2"><h4 class="houselineheight" v-text="r.bednum">1张</h4></div>
              <div class="col-md-2"><h4 class="houselineheight text-orange" v-text="r.price">500元/月</h4></div>
              <div class="col-md-2"><h4 class="houselineheight">20张</h4></div>
              <div class="col-md-2 houselineheight">
              <button type="button" class="btn btn-sm btn-success">详情</button>
              </div>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <!--房型end-->
      <!--页码-->
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-4"></div>
      </div>
      <!--页码end-->
    </div>
    <!--中间内容end-->
  </div>
  <!--中间内容end-->
  </div>
  <!--内容右end-->
</template>

<script>
  import axios from 'axios'
    export default {
        name: "",
      data(){
          return{
            rooms_info : [
              // {
              //   "name":"单人间",
              //   "price":1599,
              //   "bednum":1,
              //   "id":"003",
              // },
              // {
              //   "name":"豪华单人间",
              //   "price":1799,
              //   "bednum":1,
              //   "id":"002",
              // },
              // {
              //   "name":"豪华双人间",
              //   "price":2599,
              //   "bednum":2,
              //   "id":"001",
              // },
            ]
          }
      },
      mounted() {

        var vm = this;
        vm.bh_id=sessionStorage.getItem('bhid');
        axios.get('http://127.0.0.1:8000/beadhouse/getroomsbyhouseid/'+vm.bh_id+'/')
          .then(function (response) {
            vm.rooms_info = response.data;
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
</script>

<style scoped>
  .houseimg img{
    width: 150px;
    height: 100px;
    border-radius: 5px;
  }
  .houselineheight{
    height: 80px;
    line-height: 80px;
  }
  .text-orange{
    color: orange;
    font-weight: bolder;
  }
  .house-border-bottom{
    border-bottom: #deefd8 solid 2px;
    padding: 25px;
  }
  .jumbotron{
    color: white;
    text-shadow:black 1px 1px ;
  }
  .house-black{
    background: rgba(0, 0, 0, 0.09);
  }
  .house-title{
    font-size: 35px;
  }

  .my-nav-img img{
    height: 65px;

  }
  .my-nav{
    height: 65px;
    line-height: 40px;
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
  .my-index-center{
    padding-top: 20px;
    min-height: 600px;
  }
  .my-img{
    width: 150px;
    height: 150px;
    margin: 5px;
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
  .list-group-item.active,
  .list-group-item.active:hover,
  .list-group-item.active:focus {
    z-index: 2;
    color: #fff;
    background-color: #40a170;
    border-color: #40a170;
  }
  .my-footer{
    padding-top: 15px;
    font-size: 13px;
  }
  .my-change{
    margin-left: 15px;
  }
  .my-input{
    margin-bottom: 10px;
  }
  .my-input span p{
    margin: 0;
    padding: 0;
    width: 150px;
  }
  .my-img-centet{
    text-align: center;
  }
  .my-old-change{
    margin: 10px 25px;
  }
  .my-active{
    background: #40a170;
    border: white solid 1px;
    border-radius: 4px 4px 0px 0px;
    margin-right: 5px;
  }
  .my-active a{
    color: white;
  }
  .disnone,.iframe_info,.iframe_old_info,.iframe_coll,.iframe_order,.iframe_state{
    display: none;
  }
  .disblock{
    display: block;
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
  .ifream_body{
    overflow:hidden;
    background: rgba(222,239,216,0.39);
  }
  iframe{
    border: 0px;
    min-height: 500px;
    margin: 0;padding: 0;
    width: 100%;

  }
  .iframe_index{
    height: 700px;
  }
  .iframe_info{
    height: 500px;
  }

  .iframe_state{
    height: 1000px;
  }


</style>
