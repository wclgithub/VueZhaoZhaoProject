<template>
  <div class="row">
    <div class="col-md-12 page-body text-center">
      <nav aria-label="Page navigation">
        <ul class="pagination pagination-lg">
          <li>
            <a href="javascript:void 0" aria-label="Previous" @click.prevent="lastPage">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="i in page_size"><a href="javascript:void 0" v-text="i" @click.prevent="getIndex(i)"></a></li>
          <li>
            <a href="javascript:void 0" aria-label="Next" @click.prevent="nextPage">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PageList',
    props :['page_size'],
    data () {
      return {

      }
    },
    mounted () {

    },
    methods:{
      getIndex: function (i) {
        this.$emit('indexclick', i)
      },
      lastPage: function () {
        this.$emit('lastindexclick')
      },
      nextPage: function () {
        this.$emit('nextindexclick')
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
