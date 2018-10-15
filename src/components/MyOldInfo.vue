<template>
  <div class="col-md-9">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title glyphicon glyphicon-user">我的信息</h3>
          </div>
          <!--第1个人的信息区-->
          <div class="panel-body old_info" v-for=" old in old_info">
            <!--第1.1行-->
            <div class="row">
              <div class="col-md-4 my-img-centet">
                <!--头像(left)-->
                <!--<img class="img-circle my-img" src="./images/mydad.png" alt="">-->
                <button class="btn btn-danger ">修改头像</button>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-11">
                    <div class="input-group my-input">
                      <span class="input-group-addon " id="basic-addon1"><p>姓名：</p></span>
                      <input type="text" class="form-control" placeholder="Username：王小翠" v-model="old.ci_info_name">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon " id="basic-addon2"><p>性别：</p></span>
                      <input type="text" class="form-control" placeholder="Sex：女" v-model="old.ci_info_sex">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon " id="basic-addon3"><p>出生日期：</p></span>
                      <input type="text" class="form-control" placeholder="Birth：1998-7-7" v-model="old.ci_info_birth">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon " id="basic-addon4"><p>联系电话：</p></span>
                      <input type="text" class="form-control" placeholder="Tel：18842421515"
                             v-model="old.ci_info_telephone">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon " id="basic-addon5"><p>紧急联系人电话：</p></span>
                      <input type="text" class="form-control" placeholder="Ftel：18845454444"
                             v-model="old.ci_info_urg_tel">
                    </div>
                    <div class="input-group my-input">
                      <span class="input-group-addon " id="basic-addon6"><p>紧急联系地址：</p></span>
                      <input type="text" class="form-control" placeholder="Address：江苏省苏州市星湖街创意产业园4栋b202"
                             v-model="old.ci_info_address">
                    </div>
                    <hr>
                  </div>
                  <div class="col-md-1"></div>
                </div>
                <!--第1.2行end-->
              </div>
            </div>
          </div>
          <!--第1个人的信息区end-->

          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4 my-old-change">
              <button class="btn btn-danger add-old-info" @click="addOldInfo()">添加人物</button>
              <button class="btn btn-danger save" @click="saveOldInfo()">保存信息</button>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
        <!--第1.1行end-->
        <!--第1.2行-->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        old_info: [
          {
            "ci_info_id": 1,
            "ci_info_telephone": "18846463123",
            "ci_info_name": "张小明",
            "ci_info_birth": "1970-1-2",
            "ci_info_sex": '男',
            "ci_info_urg_tel": "18846463366",
            "ci_info_address": "江苏省苏州市工业园区",
            "ci_info_img": "./images/user.png"

          },
          {
            "ci_info_id": 2,
            "ci_info_telephone": "18846464567",
            "ci_info_name": "赵小丽",
            "ci_info_birth": "1971-2-3",
            "ci_info_sex": '女' +
              '',
            "ci_info_urg_tel": "18846463935",
            "ci_info_address": "江苏省苏州市吴中",
            "ci_info_img": "./images/user.png"
          }

        ]
      }
    },
    methods: {
      saveOldInfo: function () {
        for (let i = 0,j=0; i < this.old_info.length; i++) {
          if (!this.old_info[i].ci_info_name) {
            alert('姓名不能为空！');
            break;
          }
          j++;
          if(j==this.old_info.length) {
            // axios.post('http://127.0.0.1:8000/user/xxx',old_info )
            //   .then(function (response) {
            //     console.log(response.data)
            //     console.log(response)
            //   })
            //   .catch(function (error) {
            //     console.log(error)
            //   })
            // if(response.data.statuscode=='202'){
            //     alert('保存成功');
            // }
            alert('ok');
          }
        }


      },
      addOldInfo: function () {
        this.old_info.push(
          [
            {
              "ci_info_telephone": "",
              "ci_info_name": "",
              "ci_info_birth": "",
              "ci_info_sex": '',
              "ci_info_urg_tel": "",
              "ci_info_address": "",
              "ci_info_img": ""
            }
          ]
        )
      }
    },
    mounted() {
      // axios.post('http://127.0.0.1:8000/user/xxx')
      //   .then(function (response) {
      //       old_info=response.data
      //     console.log(response.data)
      //     console.log(response)
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

  .my-every {
    display: flex;
  }

  .my-every-btn {
    flex: 1;
    text-align: center;
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

  .my-footer {
    padding-top: 15px;
    font-size: 13px;
  }

  .my-change {
    margin-left: 15px;
  }

  .my-input {
    margin-bottom: 10px;
  }

  .my-input span p {
    margin: 0;
    padding: 0;
    width: 150px;
  }

  .my-img-centet {
    text-align: center;
  }

  .my-old-change {
    margin: 10px 25px;
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

  .my-img-btn p {
    position: absolute;
  }


</style>
