<template>
  <div>
    <div>
      <div class="act-header">
        <div class="row">
          <div class="col-lg-2">

          </div>
          <div class="col-lg-6">
            <h1 v-text="details.title">健康生活：每天一杯水，医生远离我</h1>
          </div>
          <div class="col-lg-4">

          </div>

        </div>
        <div class="row art-from">
          <div class="col-sm-2">
            <div v-text="details.date">2018-10-14 17:37:58</div>
          </div>
          <div class="col-sm-8">
            <p><a href="#">来源：小太阳养老公寓</a></p>
          </div>
          <div class="col-sm-1">
            <a href="#">举报</a>
          </div>
        </div>
      </div>
      <div class="h-xian"></div>
      <div class="right">
        <div class="row">
          <h2 class="col-lg-12 panel panel-success">专题推荐</h2>
          <div class="cccr-hot">
            <div class="cccr-hot-left panel-body">
              <h4><a href="">健康生活，从喝水做起</a></h4>
              <div class="xian">
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="art-cont" v-for="c in details.content">
        <div class="row">

          <p v-text="c">新华社北京8月30日电（记者刘华、王卓伦）国家主席习近平30日在人民大会堂同科特迪瓦总统瓦塔拉举行会谈。两国元首一致同意，推动中科关系迈向更高水平，实现互利共赢。</p>


        </div>
      </div>


      <div class="art-reply">
        <h2>参与互动</h2>
        <div class="art-reply-content">
          <form action="">
            <textarea class="form-control" rows="3" v-model="comment"></textarea>
            <div>
              <input type="button" class="i-reset" value="重置" v-on:click="m_reset">
              <input type="button" class="i-submit" value="提交" v-on:click="m_submit">
            </div>
          </form>
        </div>
        <div class="m_re" >
          <div class="select-art" v-for="ac in all_comment" v-show="com_flag">
            <div class="select-art-left">
              <img src="ac.user_img" alt="">
              <p v-text="ac.user_name">天生丽质小可爱</p>
            </div>
            <div class="select-art-right">
              <p v-text="ac.comment_content">
                自从健康喝水之后年轻了十岁。喝年轻了多喝水好，我都喝白了！喝年轻了多喝水好，我都喝白了！喝年轻了多喝水好，我都喝白了！喝年轻了多喝水好，我都喝白了！喝年轻了多喝水好，我都喝白了！喝年轻了多喝水好，我都喝白了！喝年轻了多喝水好，我都喝白了！喝年轻了！</p>
              <form action="">
                <input type="submit" name="" value="赞" class="praise">
                <input type="submit" name="" value="踩" class="tread">
                <input type="text">
                <input type="submit" name="" value="回复" class="replay">

              </form>
            </div>
          </div>
          <div v-show="!com_flag" class="no_one"><h3>还没有人发布评论</h3></div>
        </div>


      </div>

    </div>


  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "ArticleDetails",
    data: function () {
      return {
        details: {},
        comment: '',
        art_id: 0,
        all_comment: {},
        com_flag: true,
      }
    },
    mounted: function () {
      this.getart();
      this.getallreplay();
    },
    methods: {
      getart: function () {
        this.art_id = this.$route.query.article_id;
        // alert(this.art_id)
        var that = this
        axios.get('http://127.0.0.1:8000/article/getarticlebyid/' + that.art_id + '/')
          .then(function (response) {
            // vm.list = response.data;
            // console.log(response)
            that.details = response.data[0];
            // console.log(that.details)

          })
          .catch(function (error) {
            console.log(error)
          })

      },
      m_submit: function () {
        var u_id = sessionStorage.getItem('u_id')
        //如果用户登录
        if (u_id) {
          //如果在登录前输入了文字
          if (this.comment) {
            var user = {
              "content": this.comment,
              "article_id": this.art_id,
              "user_id": u_id,
            }
            var istoken = sessionStorage.getItem('token');
            var that = this
            axios.post('http://127.0.0.1:8000/article/commentarticle/', user, {
              headers: {
                "token": istoken
              }
            })
              .then(function (response) {
                // console.log(response.data)
                if (response.data.statuscode == '202') {
                  that.comment = '';
                  this.$options.methods.getallreplay()
                }

              })
              .catch(function (error) {
                console.log(error)
              })

          } else {
            this.comment = '输入内容不能为空'
          }
        }
        //如果用户没有登录
        else {
          // 如果没登陆且输入了文字
          if (this.comment) {
            sessionStorage.setItem('already_con', this.comment)
            sessionStorage.setItem('from', '/articlelist')
            this.$router.push({path: "/login"});
          }
          //如果没登陆，没有输入文字
          else {
            sessionStorage.setItem('from', '/articlelist')
            this.$router.push({path: "/login"});
          }

        }

      },
      m_reset: function () {
        this.comment = ''
      },
      getallreplay: function () {

        var that = this
        axios.get('http://127.0.0.1:8000/article/getcommentsbyarticleid/' + that.art_id + '/')
          .then(function (response) {
            // vm.list = response.data;
            // console.log(response.data)
            if (response.data.length != 0) {

              that.all_comment = response.data
              console.log(that.all_comment)
            }
            else {

              that.com_flag = false
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
  @import "../../static/css/articledetails.css";
</style>
