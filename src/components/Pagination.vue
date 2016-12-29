<template>
  <nav class="pagination">
    <a class="button" :class="{'is-disabled':params.current_page == 1}"
      @click="$emit('clicked',params.current_page - 1)"
    >上一页</a>
    <a class="button" :class="{'is-disabled':params.current_page == params.last_page}" 
      @click="$emit('clicked',params.current_page + 1)"
    >下一页</a>

    <span v-for="page in params.last_page">
      <template v-if="(page < params.current_page - size || page > params.current_page + size) && page != params.last_page && page != 1">
      {{ 
      (params.current_page - size > 3 && page > 2 && page < params.current_page) 
      || 
      (params.current_page + size < params.last_page - size && page < params.last_page - 1 && page > params.current_page)
       ? '': '...'}}
      </template>
      <a v-else class="button" :class="{'is-primary':params.current_page==page}" @click="$emit('clicked',page)">{{page}}</a>
    </span>
  </nav>
</template>

<script>
  export default {
    name: 'pagination',
    props: {
      params: {
        type: Object,
        required: true
      },
      size: {
        type: Number,
        default: 2
      }
    },
    data () {
      return {}
    }
  }
</script>
<style lang="css" scoped>
.pagination span {
  margin: 0 !important;
}
.pagination a {
  margin: 0 4px;
}
</style>