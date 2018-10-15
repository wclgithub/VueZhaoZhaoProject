<template>
  <div class="col-md-9" >
    <div class="row" >
      <div class="col-md-12">
        <!--报表1-->
        <div class="row">
          <h3 class=" col-md-8 panel-title">
            <ul class="nav nav-tabs oldtitle">
              <!--<li role="presentation" class="my-active"><a href="#" >王小翠</a></li>-->
            </ul>
          </h3>
        </div>
        <div class="panel panel-info" id="listeat">
          <div class="panel-heading">
            <h3 class="panel-title glyphicon glyphicon-user eat-h3">
              <!--<strong>王小翠</strong> <em>2018-9-1</em> <span>饮食报表</span>-->
            </h3>
          </div>
          <div class="panel-body">
            <!--第1.1行-->

            <div class="row">
              <div class="col-md-4 my-img-centet eat-img">
                <!--头像(left)-->
                <!--<img class="img-circle my-img" src="./images/user.png" alt="">-->
                <!--<p>王小翠</p>-->
              </div>
              <div class="col-md-8">
                <div class="row" >
                  <div class="col-md-1"></div>
                  <div class="col-md-10  my-info eat-info">
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>早饭：</p></span>-->
                    <!--<input type="text" class="form-control" value="标准营养套餐" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>午饭：</p></span>-->
                    <!--<input type="text" class="form-control" value="自选盒饭(米饭+豆角+芹菜+五花肉)" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>下午茶：</p></span>-->
                    <!--<input type="text" class="form-control" value="咖啡" disabled="disabled" >-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>晚饭：</p></span>-->
                    <!--<input type="text" class="form-control" value="标准营养套餐" disabled="disabled">-->
                    <!--</div>-->
                  </div>
                  <div class="col-md-1"></div>
                </div>
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-5 my-old-change">
                    <button class="btn btn-danger" download="downImg">历史报表</button>
                  </div>
                  <div class="col-md-4"></div>
                </div>
                <!--第1.2行end-->
              </div>
            </div>
          </div>
        </div>
        <!--报表1end-->
        <div class="panel panel-danger" id="list-doctor" >
          <div class="panel-heading">
            <h3 class="panel-title glyphicon glyphicon-user doctor-h3">
              <strong>王小翠</strong> <em>2018-9-1</em> <span>用药报表</span>
            </h3>
          </div>
          <div class="panel-body">
            <!--第1.1行-->
            <div class="row">
              <div class="col-md-4 my-img-centet doctor-img">
                <!--头像(left)-->
                <!--<img class="img-circle my-img" src="./images/user.png" alt="">-->
                <p>王小翠</p>
              </div>
              <div class="col-md-8">
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-10  my-info doctor-info">
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>7:00</p></span>-->
                    <!--<input type="text" class="form-control" value="罗红霉素胶囊2粒(随餐服用)" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>12:10</p></span>-->
                    <!--<input type="text" class="form-control" value="维生素c1粒(饭后服用)" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>12:15</p></span>-->
                    <!--<input type="text" class="form-control" value="外用曲安奈德软膏" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>19:35</p></span>-->
                    <!--<input type="text" class="form-control" value="复方氨酚烷胺片1粒" disabled="disabled" >-->
                    <!--</div>-->
                  </div>
                  <div class="col-md-1"></div>
                </div>
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-5 my-old-change">
                    <button class="btn btn-danger" download="downImg">历史报表</button>
                  </div>
                  <div class="col-md-4"></div>
                </div>
                <!--第1.2行end-->
              </div>
            </div>
          </div>
        </div>
        <!--报表3-->
        <div class="panel panel-warning" id="list-active" >
          <div class="panel-heading">
            <h3 class="panel-title glyphicon glyphicon-user active-h3">
              <!--<strong>王小翠</strong> <em>2018-9-1</em> <span>活动报表</span>-->
            </h3>
          </div>
          <div class="panel-body">
            <!--第1.1行-->
            <div class="row">
              <div class="col-md-4 my-img-centet active-img">
                <!--头像(left)-->
                <!--<img class="img-circle my-img" src="./images/user.png" alt="">-->
                <!--<p>王小翠</p>-->
              </div>
              <div class="col-md-8 ">
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-10  my-info active-info">
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>7:00-7:30</p></span>-->
                    <!--<input type="text" class="form-control" value="晨练太极拳" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>12:15-1:15</p></span>-->
                    <!--<input type="text" class="form-control" value="午睡" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>1:45-3:45</p></span>-->
                    <!--<input type="text" class="form-control" value="活动室打麻将" disabled="disabled">-->
                    <!--</div>-->
                    <!--<div class="input-group my-input">-->
                    <!--<span class="input-group-addon " ><p>5:05-7:00</p></span>-->
                    <!--<input type="text" class="form-control" value="广场舞活动" disabled="disabled" >-->
                    <!--</div>-->
                  </div>
                  <div class="col-md-1"></div>
                </div>
                <div class="row">
                  <div class="col-md-3"></div>
                  <div class="col-md-5 my-old-change">

                    <button class="btn btn-danger" download="downImg">历史报表</button>
                  </div>
                  <div class="col-md-4"></div>
                </div>
                <!--第1.2行end-->
              </div>
            </div>

          </div>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "",
      data(){
          return{
            eat_dyn: [
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 1,
                "dyn_c_time": '2018-09-11 06:12:03',
                "dyn_content": '牛肉汤',
              },
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 1,
                "dyn_c_time": '2018-09-11 07:12:03',
                "dyn_content": '汤',
              },
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 1,
                "dyn_c_time": '2018-09-11 08:12:03',
                "dyn_content": '肉汤',
              },
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 1,
                "dyn_c_time": '2018-09-11 09:12:03',
                "dyn_content": '牛肉',
              },


            ],
            doctor_dyn:[
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 2,
                "dyn_c_time": '2018-09-11 06:12:03',
                "dyn_content": '药1',
              },
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 2,
                "dyn_c_time": '2018-09-11 07:12:03',
                "dyn_content": '药2',
              },
            ],
            act_dyn:[

              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 3,
                "dyn_c_time": '2018-09-11 08:12:03',
                "dyn_content": '麻将',
              },
              {
                "ci_info_name": "王小翠",
                "ci_info_img": "./images/user.png",
                "dyn_type_id": 3,
                "dyn_c_time": '2018-09-11 09:12:03',
                "dyn_content": '散步',
              },
            ]
          }
      },
      mounted(){
        // axios.post('http://127.0.0.1:8000/user/xxx')
        //   .then(function (response) {
        //       oldinfo=response.data
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
  .my-nav-img img{
    height: 65px;

  }

  .my-nav a,.my-footer{
    color: white;
  }

  .my-every-btn button{
    color: white;
    width: 80px;
    height: 80px;
    border: solid 0px black;
    border-radius: 50%;
    box-shadow: #7b8099 2px 2px 2px;
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

  .my-active a{
    color: white;
  }

  .order-img img{
    width: 100px;
    height: 60px;
  }
  .my-nav-size ul li{
    font-size: 14px;

  }

  .my-img-btn p{
    position:absolute;
  }


</style>
