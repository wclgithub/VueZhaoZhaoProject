<template id="logintpl">
  <div>
    <div class="login-background">
      <div id="login">
        <p>登录朝朝优选</p>
        <form action="">
          <div>
            <input type="text" required placeholder=" 请输入您的手机号码" v-model.trim="u_tel">
            <!--value="15776554504"-->
            <input type="password" required placeholder=" 请输入您的密码" v-model.trim="u_pwd">
            <!--value="175436"-->
            <p v-text="u_err" class="err"></p>

          </div>
          <button type="button" v-on:click="checklogin">登录</button>

        </form>


      </div>
      <input type="checkbox" class="chcbox" v-on:click="remember" v-model="checked">
      <div class="chk">记住密码</div>
      <div class="lg-rg">
        <p>还没注册？</p>
        <router-link to="/register" class="lg-rg-a">注册账号>></router-link>
      </div>
      <div class="fpwd">
        <router-link to="/forget" class="fpwd-a">忘记密码？</router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    data: function () {
      return {
        u_tel: '',
        u_pwd: '',
        u_err: '',
        checked: null
        // remember_flag:false,
      }
    },
    mounted: function () {
      setTimeout(() => {
        // alert('coming')
        this.u_err = ''
      }, 5000);
      if (sessionStorage.getItem('hav_reg_tel')) {
        this.u_tel = sessionStorage.getItem('hav_reg_tel');
        this.u_pwd = sessionStorage.getItem('hav_reg_pwd');


      }
      if (localStorage.getItem('tel')) {
        this.u_tel = localStorage.getItem('tel');
        this.u_pwd = localStorage.getItem('pwd');
        this.checked = true
      } else {
        this.checked = false
      }


    },

    methods: {
      checklogin: function () {
        var reg = /^1[3456789]\d{9}$/;
        if (reg.test(this.u_tel)) {
          var user = {
            "telephone": this.u_tel,
            "password": this.u_pwd,
          }
          var that = this
          axios.post('http://127.0.0.1:8000/user/login/', user)
            .then(function (response) {
              // vm.list = response.data;
              // console.log(response.data.id)
              // console.log(response)
              // console.log(response.data.statusCode)
              // console.log(response.headers.token)
              if (response && response.data.id) {
                sessionStorage.setItem('telephone', that.u_tel);
                sessionStorage.setItem('token', response.headers.token);
                sessionStorage.setItem('u_id', response.data.id);
                sessionStorage.setItem('u_points', response.data.points);
                var from = sessionStorage.getItem('from');
                if (from) {
                  // location.href = from;
                  that.$router.push({path: from});
                } else {
                  that.$router.push({path: "/"});
                }
              }
              if (response && response.data.statuscode == '403') {
                // location.href='regist.html';
                that.$router.push({path: "/register"});
                sessionStorage.setItem('notregtel', that.u_tel);
                console.log(that.u_tel)

              }
              if (response && response.data.statuscode == '409') {

                that.u_err = '用户名或密码错误';
              }

            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          this.u_err = '请输入正确的手机号'
        }

      },
      remember: function () {
        if (!this.checked) {
          this.checked = true;
          localStorage.setItem('tel', this.u_tel);
          localStorage.setItem('pwd', this.u_pwd);


        } else {
          this.checked = false;
          localStorage.setItem('tel', '');
          localStorage.setItem('pwd', '');

        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/login.css";


</style>
