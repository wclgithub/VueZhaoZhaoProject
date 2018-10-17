<template>
  <transition name="modal-fade">
    <div id="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header">
            <p v-text="showinterl"></p>
            <p v-text="showgoodinterl"></p>
            <button type="button" class="btn-close" @click="close">x</button>
          </slot>
        </div>
        <!--<div class="modal-body">-->
          <!--<slot name="body"> 这是Modal弹框的主体</slot>-->
        <!--</div>-->
        <div class="dropdown ">
          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Dropdown
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
        <div class="modal-footer">
          <slot name="footer"> 这是Modal弹框的脚部
            <button type="button" class="btn-green" @click="close">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Modal',
    props: ['show'],
    data() {
      return {
        showinterl:'',
        showgoodinterl:'',
      }
    },
    mounted: function () {
      this.islogin();

    },
    methods: {
      close: function () {
        this.$emit('close');
      },
      islogin:function () {
        if (sessionStorage.getItem('u_intergral')) {
          this.showinterl=sessionStorage.getItem('u_intergral')
          this.showgoodinterl='商品所需积分：'+sessionStorage.getItem('good_intergral')
        }else {
          this.showinterl='请先登录'
        }
      }
    }
  }
</script>
<style scoped>
  #modal-backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /*background-color: red;*/
    background-color: rgba(198, 198, 198, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    width: 500px;
    height: 400px;
    position: fixed;
    top: 200px;
    left: 500px;
    background-color: #fff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header, .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eee;
    color: #4aae9b;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none 0;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background-color: transparent;
  }

  .btn-green {
    color: #fff;
    background-color: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }

  .modal-fade-enter, .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity .5s ease
  }

</style>
