<template>
  <div class="login-background">
    <div class="mian">
      <div class="div-inner">
        <label for="chtel" class="labtel">手机号：</label><input class="chtel" id="chtel" type="text" v-model.trim="f_tel">
        <button class="getnum" v-on:click="sendMessage" v-bind:disabled="dis_flag" v-show="sendAuthCode">获取验证码</button>
        <button class="getnum" v-on:click="sendMessage" v-bind:disabled="dis_flag" v-text="code_word" v-show="!sendAuthCode"></button>
        <div class="telstatue" v-text="f_truetel"></div>
        <label for="chnum" class="labnum">验证码：</label><input class="chnum" id="chnum" v-model.trim="f_code">
        <div class="sec" v-text="f_err"></div>
        <button class="next" v-on:click="next">下一步</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NavMain',
  data: function () {
    return {
      f_tel: '',
      f_code: '',
      f_truetel: '',
      f_err:'',
      count:60,
      curCount:0,
      dis_flag:false,
      sendAuthCode:true,
      code_word:0,
    }
  },
  mounted: function () {
    setTimeout(() => {
      // alert('coming')
      this.f_err = ''
      this.f_truetel=''
    }, 5000);
  },

  methods: {
    sendMessage:function(){
      var reg=/^1[3456789]\d{9}$/;
      if (reg.test(this.f_tel)) {
        var user = {
          "telephone": this.f_tel,
        }
        console.log(user)
        var that = this
        // axios.post('http://127.0.0.1:8000/getcode/', user)
        //     .then(function (response) {
        //         // vm.list = response.data;
        //         console.log(response)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        // this.curCount=this.count;
        // this.dis_flag=true;
        // this.code_word=+this.curCount+'秒';
        // setInterval(this.$options.methods.SetRemainTime,1000);
        this.sendAuthCode = false;
        this.code_word = 60;
        var auth_timetimer =  setInterval(()=>{
          this.code_word--;
          if(this.code_word<=0){
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);


      } else {
        this.f_truetel = '请输入正确的手机号'
      }


    },

    next: function () {

      if (this.f_code){
        var code = this.f_code
        console.log(code)
        var that=this
        // axios.post('http://127.0.0.1:8000/getcode/', code)
        //   .then(function (response){
        //     console.log(response.data)
        //     if (response.data=='203'){
              this.$router.push({path: "/changepwd"});
        //     }else {
        //       that.f_err='验证码错误'
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      } else {
        this.f_err='请输入验证码'
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../static/css/forget.css";
</style>
