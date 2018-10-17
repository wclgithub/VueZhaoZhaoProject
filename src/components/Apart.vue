<template>
  <!--内容-->
  <div class="row my-index-center">
    <!--内容左空白-->
    <div class="col-md-2"></div>
    <!--内容左空白end-->
    <!--中间内容-->

    <div class="col-md-8">
      <!--筛选-->
      <div class="row">
        <div class="col-lg-12">
          <div class="panel panel-success">
            <div class="panel-heading">
              <div class="row">
                <div class="col-lg-4">
                  <input class="city form-control inputkey" @click="toAddress" v-model="city" placeholder="请选择地区">
                  <v-distpicker type="mobile" @selected='selected' v-show="addInp">
                  </v-distpicker>
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-3">
                  <input type="text" class="form-control inputkey" placeholder="请输入关键字" v-model="search_data">
                </div>
                <div class="col-lg-1">
                  <button type="button" class="btn btn-sm btn-success" @click="Search()">搜索</button>
                </div>
              </div>
            </div>
            <ul class="list-group">
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-1"><a href="javascript:void 0">城市</a></div>
                  <div class="col-md-1"><a href="javascript:void 0" data-address="不限" @click="getAddress($event)">不限</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-address="北京" @click="getAddress($event)">北京</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-address="上海" @click="getAddress($event)">上海</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-address="深圳" @click="getAddress($event)">深圳</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-address="广州" @click="getAddress($event)">广州</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-address="大连" @click="getAddress($event)">大连</a>
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-1"><a href="javascript:void 0">价位</a></div>
                  <div class="col-md-1"><a href="javascript:void 0" data-min=0 data-max=50000 @click="getPrice($event)">不限</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=0 data-max=1000 @click="getPrice($event)">1千元以下</a>
                  </div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=1000 data-max=2000
                                           @click="getPrice($event)">1-2千元</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=2000 data-max=3000
                                           @click="getPrice($event)">2-3千元</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=3000 data-max=4000
                                           @click="getPrice($event)">3-4千元</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=4000 data-max=50000
                                           @click="getPrice($event)">5千元以上</a></div>
                </div>
              </li>
              <li class="list-group-item">
                <div class="row">
                  <div class="col-md-1"><a href="javascript:void 0" data-min=0 data-max=50000>评分</a></div>
                  <div class="col-md-1"><a href="javascript:void 0" data-min=0 data-max=5
                                           @click="getScore($event)">不限</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=4 data-max=5
                                           @click="getScore($event)">4分以上</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=3 data-max=4
                                           @click="getScore($event)">3-4分</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=2 data-max=3
                                           @click="getScore($event)">2-3分</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=1 data-max=2
                                           @click="getScore($event)">1-2分</a></div>
                  <div class="col-md-2"><a href="javascript:void 0" data-min=0 data-max=1
                                           @click="getScore($event)">1分以下</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--筛选end-->
      <!--公寓展示-->
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-success">
            <div class="panel-heading">
              <div class="row">
                <div class="col-md-4">
                  <div class="row">
                    <div class="col-md-4"><a href="#" >默认排序</a></div>
                    <div class="col-md-4" @click="Search()"><a href="#" @click="changeSortType(sort_type_one=0,sort_type_two)">价格排序</a></div>
                    <div class="col-md-4" @click="Search()"><a href="#" @click="changeSortType(sort_type_one=1,sort_type_two)">评分排序</a></div>
                  </div>
                </div>
                <div class="col-md-8"></div>
              </div>
            </div>
            <div class="panel-body bh-info" v-for="b in bh_info" v-if="b.min_price>=min_price&&b.min_price<=max_price&&b.score>=min_score&&b.score<=max_score">
              <div class="bh-border-bottom" :id="b.id">
                <div class="row">
                  <div class="col-md-3 bhimg">
                    <img src="../assets/images/det2.jpg" alt="..." @click="getBhid()">
                  </div>
                  <div class="col-md-5">
                    <h4 v-text="b.name" @click="saveBhId(b.id)">苏州小太阳养老公寓老年招待所等公寓</h4>
                    <p v-text="b.address">地址:江苏省苏州市工业园区创意产业园产业园院院</p>
                    <p >人员规模:<span v-text="b.staff">120人</span></p>
                    <p v-text="b.property">机构类型:民营机构</p>
                  </div>
                  <div class="col-md-2 bh-border-left">
                    <h4 class="bh-score">评分:<span class="text-orange" v-text="b.score">5</span>分</h4>
                    <h4>起价:<span class="bh-price" v-text="b.min_price">5000元</span></h4>
                  </div>
                  <div class="col-md-2 bh-border-left">
                    <h3>
                      <a href="#" class="btn btn-warning showinfo" @click="saveBhId(b.id)">查看详情</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--公寓展示end-->
      <!--页码-->
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous" @click.prevent="changePage(0)">
                  <span aria-hidden="true"  >&laquo;</span>
                </a>
              </li>
              <li><a href="#" v-if="pagenum+i-1<=show_page_count" v-text="pagenum+i-1" v-for="i in show_page_count">1</a></li>
              <li>
                <a href="#" aria-label="Next"  @click.prevent="changePage(1)">
                  <span aria-hidden="true" >&raquo;</span>
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


</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Apart',
    data() {
      return {
        bh_info: [
          // {
          //   "id": "136562594217244",
          //   "name": "江苏省苏州市吴江市滨湖乐龄公寓",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2010年12月",
          //   "ground_size": "10000",
          //   "score": "4",
          //   "min_price": 1800,
          //   "staff": "120人",
          //   "property": "民营机构",
          //
          // },
          // {
          //   "id": "13655930231068",
          //   "name": "江苏省苏州市相城区社会福利中心",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2005.12.1",
          //   "ground_size": "300亩",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562614317350",
          //   "name": "逸和源湘家荡颐养中心苏州接待处",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2013年03月",
          //   "ground_size": "380",
          //   "score": "4",
          //   "min_price": 2000,
          //   "staff": "300人",
          //   "property": "民营机构",
          //
          // },
          // {
          //   "id": "136562614317350",
          //   "name": "江苏省苏州市常熟市梅李镇敬老院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2010年01月",
          //   "ground_size": "35000平方米",
          //   "score": "4",
          //   "min_price": 660,
          //   "staff": "37人",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562613817344",
          //   "name": "江苏省苏州市金阊区博爱乐龄院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2007",
          //   "ground_size": "-",
          //   "score": "4",
          //   "min_price": 1600,
          //   "staff": "-",
          //   "property": "民营机构",
          //
          // },
          // {
          //   "id": "136562600217275",
          //   "name": "江苏省苏州市沧浪区银色家园老年公寓",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2005.10.11",
          //   "ground_size": "13亩多",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "1365592102576",
          //   "name": "江苏省苏州市红十字会老年康复医院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "-",
          //   "ground_size": "8500",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "1365591886463",
          //   "name": "江苏省苏州市平江区好心人护理院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2006.8.1",
          //   "ground_size": "3500",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562375616211",
          //   "name": "江苏省苏州市吴江市社会福利院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "1966.9",
          //   "ground_size": "9000",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "13655945371703",
          //   "name": "江苏省苏州市吴中区爱心护理院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "-",
          //   "ground_size": "10000",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562611917335",
          //   "name": "江苏省苏州市太仓市社会福利服务中心",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "1982",
          //   "ground_size": "25000",
          //   "score": "4",
          //   "min_price": 800,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562622217389",
          //   "name": "江苏省苏州市平江区夕阳红老年公寓",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "-",
          //   "ground_size": "6.5亩",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562608317318",
          //   "name": "江苏省苏州市昆山市福利院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "1984",
          //   "ground_size": "20000",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562375316208",
          //   "name": "江苏省苏州市吴中区甪直镇社会养老中心",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "1977(2011.12.28)",
          //   "ground_size": "15亩",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // },
          // {
          //   "id": "136562379216228",
          //   "name": "江苏省苏州市吴江市震泽镇敬老院",
          //   "address": "江苏省苏州市创意产业园",
          //   "built_time": "2012",
          //   "ground_size": "30亩",
          //   "score": "4",
          //   "min_price": 500,
          //   "staff": "-",
          //   "property": "国营机构",
          //
          // }
        ],
        min_price: 0,
        max_price: 50000,
        city_address: '',
        min_score: 0,
        max_score: 5,
        city: '请选择地区',
        addInp: false,
        mask: false,
        search_data: '',
        search_city:'',
        sort_type_one:0,
        sort_type_two:0,
        pagenum:1,
        page_count:0,
        show_page_count:0,
        bh_start:0,
        bh_end:1,
        new_bh_info:[]
      }
    },
    methods: {
      //点击弹出三级联动npm install v-distpicker --save
      toAddress() {
        this.mask = true;
        this.addInp = true;
      },
      //省市区三级联动
      selected(data) {
        this.mask = false;
        this.addInp = false;
        this.city = data.province.value + ' ' + data.city.value + ' ' + data.area.value;
       this.search_city=data.city.value
      },
      //根据地址+关键字搜索
      Search: function () {
        var vm = this;
        axios.get('http://192.168.2.32:8000/beadhouse/gethouseby/' + vm.search_city + '/' + vm.search_data + '/'+ vm.sort_type_one+'/'+ vm.sort_type_two+'/')
          .then(function (response) {
            vm.bh_info = response.data;
          })
          .catch(function (error) {
            console.log(error)
          });
      },
      //价格筛选
      getPrice: function (event) {
        var childrens = event.target.parentElement.parentElement.children;
        for (let c of childrens) {
          c.firstElementChild.style.background = 'white';
          c.firstElementChild.style.color = '#269abc';
        }
        event.target.style.background = '#efac50';
        event.target.style.color = 'white';
        this.min_price = event.target.dataset.min;
        this.max_price = event.target.dataset.max;
        var min_max_price = {};
        min_max_price["min_price"] = this.min_price,
          min_max_price["max_price"] = this.max_price
      },
      //地区筛选
      getAddress: function (event) {
        var childrens = event.target.parentElement.parentElement.children;
        for (let c of childrens) {
          c.firstElementChild.style.background = 'white';
          c.firstElementChild.style.color = '#269abc';
        }
        event.target.style.background = '#efac50';
        event.target.style.color = 'white';
        this.city_address = event.target.dataset.address;
        // alert(this.city_address);
      },
      //评分筛选
      getScore: function (event) {
        var childrens = event.target.parentElement.parentElement.children;
        for (let c of childrens) {
          c.firstElementChild.style.background = 'white';
          c.firstElementChild.style.color = '#269abc';
        }
        event.target.style.background = '#efac50';
        event.target.style.color = 'white';
        this.min_score = event.target.dataset.min;
        this.max_score = event.target.dataset.max;
        var min_max_score = {};
        min_max_score["min_score"] = this.min_score,
          min_max_score["max_score"] = this.max_score
      },
      //跳转详情页
      saveBhId:function (id) {
        alert(id);
        sessionStorage.setItem('bhid',id);
        this.$router.push({path: "/house"});
      },
      //排序
      changeSortType:function (sort_type_one,sort_type_two) {
        this.$options.methods.Search();
        if(this.sort_type_two==0){
          this.sort_type_two=1;
        }else {
          this.sort_type_two=0;
        }
      },
      //计算总页数
      CountPage:function () {
        this.page_count=Math.ceil(this.bh_info.length/5);
        if(this.page_count<=5){
          this.show_page_count= this.page_count;
        }
        else {
          this.show_page_count=5;
        }
      },
      //获取当前页数据
      ShowBhInfo:function(){
        this.bh_start=(this.pagenum - 1) * 5;
        this.bh_end=(this.pagenum *5);

      },
      //上下页改变页码
      changePage:function(i){
        if(i===0){
          console.log(this.pagenum)
          if (this.pagenum  > 1){
            this.pagenum -= 1;
            this.$options.methods.ShowBhInfo();
          }
          else{
            alert('已经是第一页了');
          }
        }
        else {
          console.log(this.pagenum)
          if (this.pagenum  < this.page_count){
            this.pagenum += 1;
            this.$options.methods.ShowBhInfo();
          }
          else{
            alert('已经是最后一页了');
          }
        }

      }
    },

    mounted() {
      var vm = this;
      var already_searched=sessionStorage.getItem('already_searched');
      if(already_searched){
        vm.search_data=already_searched;
      }else {
        vm.search_data=''
      }
      axios.get('http://127.0.0.1:8000/beadhouse/gethouseby//'+vm.search_data+'///')
        .then(function (response) {
          vm.bh_info = response.data;
          console.log(vm.bh_info)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.CountPage();
      this.ShowBhInfo();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bhimg img {
    width: 230px;
    height: 135px;
    border-radius: 5px;
  }

  .bh-price, .text-orange {
    color: #ffa500;
    font-size: 20px;
    font-weight: bold;
  }

  .bh-border-left {
    height: 135px;
    border-left: lightgrey solid 1px;
    padding: 20px;
  }

  .bh-border-bottom {
    border-bottom: #deefd8 solid 2px;
    padding: 25px;
  }

  .bh-info {
    padding: 0;
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
  .showinfo,.showinfo:visited{
    color: white;
  }
</style>
