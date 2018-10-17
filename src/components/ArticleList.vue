<template>
  <div class="container list-body">
    <div class="row">
      <div class="col-md-12 article-logo">
        <span>文章精选</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 article-body" v-for="article in result_list">
        <div class="article-info col-md-8 col-sm-8 col-xs-8" :key="result_list.id">
          <div class="article-title" id="articlelist.id">
            <a href="javascript:void 0"><span v-text="article.title"></span></a>
          </div>
          <div class="article-author" :id="result_list.beadhouse_id">
            <a href="javascript:void 0"><span>作者:</span><span v-text="article.beadhouse__name"></span></a>
          </div>
          <div class="article-time"><span>发表时间:</span><span v-text="article.date"></span></div>
        </div>
        <div class="article-pic col-md-4 col-sm-4 col-xs-4"><img src="../assets/images/article_picture_01.jpg" alt=""></div>
      </div>
    </div>
    <page-list :page_size="page_size" @indexclick="getIndex" @lastindexclick="lastPage" @nextindexclick="nextPage"></page-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Article',
  data () {
    return {
      articlelist : [],
      result_list : [],
      page_index : 1,
      page_size : 1,
    }
  },
  mounted () {
    let that = this;
    axios.get("http://127.0.0.1:8000/article/getarticles/").
    then(function (response) {
      that.articlelist = response.data;
      that.showContent();
      if(that.articlelist.length/10 == 0){
        that.page_size = that.articlelist.length/10;
      } else{
        that.page_size = Math.ceil(that.articlelist.length/10);
      }
    }).
    catch();
  },
  methods:{
    showContent:function () {
      let start = (this.page_index-1) * 10;
      let end = this.articlelist.length<=this.page_index*10-1?this.articlelist.length:this.page_index*10-1;
      this.result_list = [];
      for (let i = start;i<=end;i++){
        this.result_list.push(this.articlelist[i]);
      }
    },
    getIndex: function (i) {
      this.page_index = i;
      this.showContent();
    },
    lastPage: function () {
      if (this.page_index > 1) {
        this.page_index -= 1;
        this.showContent();
      }
    },
    nextPage: function () {
      if (this.page_size > this.page_index) {
        this.page_index += 1;
        this.showContent();
      }
    },
  },
  computed:{

  }
}
</script>
<style>
  .list-body{
    margin: 0 auto;
  }
  .article-logo{
    border-bottom: 2px #b9ff5b solid;
    height: 50px;
    line-height: 50px;
  }
  .article-logo span{
    font-size: 22px;
  }
  .article-body{
    height: 130px;
    border-bottom: 2px solid #d6c9c6;
    padding: 5px;
  }
  .article-info{
    height: 100%;
    background: #dddddd;
  }
  .article-pic{
    border-radius: 10px;
    height: 100%;
  }
  .article-title{
    margin-top: 4px;
    height: 40px;
    font-size: 22px;
    line-height: 40px;
  }
  .article-author{
    margin-top: 4px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
  }
  .article-author a{
    color: black;
  }
  .article-time{
    margin-top: 4px;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
  }
  .article-info span{
    margin-left: 5px;
  }
  .article-pic{
    padding: 0;
  }
  .article-pic img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

</style>


