<template>
  <div>

    <div class="index-search-background">
      <div class="container ">
        <div class="row">
          <div class="col-lg-6">
            <div class="input-group">
              <input type="text" class="form-control input-search" placeholder="" v-model="ser_word">
              <span class="input-group-btn">
                                    <button id="input-submit" class="btn btn-default " type="button" v-on:click="search">搜索</button>
                                </span>
            </div><!-- /input-group -->
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
      </div>

    </div>

    <content>
      <div class="index-rooms-back">
        <div id="better">
          <p>优 选 公 寓</p>
        </div>
        <div class="index-rooms-list row">

          <div class="single-room col-lg-4" v-for="h in house_list">
            <!--<a href="./house.html"></a>-->
            <router-link to="/house"><img src="../assets/images/room_pic.jpg" alt=""></router-link>
            <p class="room-p01"><router-link to="/house" v-text="h.name"></router-link></p>
            <p class="room-p02"><router-link to="/house" v-text="h.collect_object"></router-link></p>
            <div class="row main-cost">
              <div class="col-sm-1 cost-icon">￥</div>
              <div class="col-sm-3 cost" v-text="h.price">888</div>
              <div class="col-sm-1 cost-icon">起</div>
            </div>

          </div>

        </div>
      </div>
    </content>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data:function (){
    return{
      house_list:[],
      ser_word:'',

    }
  },
  mounted:function(){
    this.GetHouseData();


  },
  methods:{
    GetHouseData:function () {
      var data= [
        {
          "id":1,
          "name":'name1',
          "collect_object":'23423',
          "price":'111',
          "score":5,
        },
        {
          "id":2,
          "name":'name2',
          "collect_object":'33673',
          "price":'222',
          "score":5,
        },
        {
          "id":3,
          "name":'name3',
          "collect_object":'5685836',
          "price":'333',
          "score":4.5,
        },
        {
          "id":4,
          "name":'name4',
          "collect_object":'552525',
          "price":'444',
          "score":5,
        },
        {
          "id":5,
          "name":'name5',
          "collect_object":'7356734',
          "price":'555',
          "score":5,
        },
        {
          "id":4,
          "name":'name4',
          "collect_object":'552525',
          "price":'444',
          "score":5,
        },
        {
          "id":4,
          "name":'name4',
          "collect_object":'552525',
          "price":'444',
          "score":5,
        },
        {
          "id":4,
          "name":'name4',
          "collect_object":'552525',
          "price":'444',
          "score":5,
        }

      ]

      // axios.get('http://192.168.2.32:8000/beadhouse/gethouseby///1/1/')
      //     .then(function (response){
      //         // console.log(response.data)
      //         console.log(response)
      data.forEach((item, index) => {
        // console.log(item)
        if (item.score===5) {
          // console.log(data)
          this.house_list.push(item)
        }
      })
      //
      //     })
      //     .catch(function (error) {
      //         console.log(error)
      //     });
      // this.house_list=rebds;
      // console.log(this.house_list)
    },
    search:function () {
      if (this.ser_word){
        sessionStorage.setItem('already_searched',this.ser_word)
        this.$router.push({path:"/apart"});
      }else {
        this.$router.push({path:"/apart"});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../static/css/index.css";

</style>
