<template >
  <div>
    <div class="login-background">
      <div id="login">
        <p>注册朝朝优选</p>
        <form action="" id="loginform">
          <div>
            <input type="text" required placeholder=" 请输入您的手机号码" id="reg-tel" name="tel" v-model.trim="reg_tel">
            <div class="tel-reg-err"></div>
            <!--value="15776554504"-->
            <input type="password" required placeholder=" 请输入您的密码" id="reg-pwd" name="reg-password" v-model.trim="reg_pwd">

            <input type="password" required placeholder=" 请再次输入您的密码" id="conf-pwd" name="conf-password" v-model.trim="reg_conpwd">
            <!--value="175436"-->
            <p class="reg-err" v-text="r_err"></p>
            <p class="pwd-im" v-text="pwd_im"></p>
            <div class="ret-log">

              <router-link to="/login" class="err-a" v-text="r_erra"></router-link>
              <p class="err-p" v-text="r_errim"></p>
              <!--<a href="login.html" class="err-a" v-text="r_erra"></a>-->
              <!--现在去登录？   登录>>-->
            </div>

          </div>
          <button type="button" id="reg-btn" v-on:click="regist">注册</button>



        </form>

      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'Register',
  data:function () {
    return{
      reg_tel:'',
      reg_pwd:'',
      reg_conpwd:'',
      r_err:'',
      pwd_im:'数字、字母、符号两种以上组合6-20位密码',
      r_errim:'',
      r_erra:'',
    }
  },
  mounted:function(){
    setTimeout(() => {
      // alert('coming')
      this.r_err=''
    }, 5000);
  },
  methods:{
    regist:function () {
      if (!this.reg_tel)
        this.r_err='请输入手机号码';
      else {
        var reg=/^1[3456789]\d{9}$/;
        if (reg.test(this.reg_tel)){
            var reg01=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
            if (reg01.test(this.reg_pwd)){
              if (this.reg_conpwd==this.reg_pwd){
                var that=this
                var user = {
                  "telephone": this.reg_tel,
                  "password": this.reg_pwd,
                };
                axios.post('http://127.0.0.1:8000/user/register/',user )
                  .then(function (response) {
                    console.log(response.data.statuscode)
                    // console.log(response.headers.token)
                    if (response&&response.data.statuscode=='202') {

                      sessionStorage.setItem('telephone', that.reg_tel);
                      sessionStorage.setItem('token',response.headers.token);
                      console.log('2')
                      var from = sessionStorage.getItem('from');
                      if (from) {
                        // location.href = from;
                        that.$router.push({path: from});
                      } else {
                        // location.href = 'index.html'
                        console.log('3')
                        that.$router.push({path: "/"});
                        console.log('4')
                      }
                    }if (response&&response.data.statuscode=='401'){

                      that.r_err='您已注册';
                      that.r_errim='现在去登录?';
                      that.r_erra='登录>>';
                      sessionStorage.setItem('hav_reg_tel', that.reg_tel);
                      sessionStorage.setItem('hav_reg_pwd', that.reg_pwd);
                      console.log(sessionStorage.getItem('hav_reg_tel'));
                      // location.href = 'login.html'
                      // that.$router.push({path: "/login"});
                    }if (response&&response.data.statuscode=='409'){

                      that.r_err='注册失败，请稍后重试';
                    }

                  })
                  .catch(function (error) {
                    console.log(error)
                  })
              }
              else {
                this.r_err='两次密码不一致';
              }
            } else {
              this.r_err='请输入由数字、字母、符号两种以上组合的密码';
            }

        }else {
          this.r_err='请输入正确的手机号'
        }

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/register.css";

</style>
