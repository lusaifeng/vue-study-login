<template>
  <nav class="pagination">
    <a class="button" :class="{'is-disabled':params.current_page == 1}"
      @click="$emit('clicked',params.current_page - 1)"
    >上一页</a>
    <a class="button" :class="{'is-disabled':params.current_page == params.last_page}" 
      @click="$emit('clicked',params.current_page + 1)"
    >下一页</a>

    <span v-if="params.current_page != 1 && params.last_page > 5 && params.current_page > 2">
      <a class="button" :class="{'is-primary':params.current_page==1}" @click="$emit('clicked',1)">1</a>
    </span>
    <span v-if="params.last_page > 5 && params.current_page != 1 && params.current_page-1 > 2">...</span>

    <span v-if="params.current_page > 1 && params.last_page > 5 ">
      <a class="button" @click="$emit('clicked',params.current_page-1)">{{params.current_page-1}}</a>
    </span>

    <span v-if="params.last_page > 5">
      <a class="button" :class="{'is-primary':params.current_page}" @click="$emit('clicked',params.current_page)">{{params.current_page}}</a>
    </span>
    <span v-if="params.current_page < params.last_page && params.last_page > 5 && params.current_page < params.last_page - 1">
      <a class="button" @click="$emit('clicked',params.current_page+1)">{{params.current_page+1}}</a>
    </span>
    <span v-if="params.current_page < params.last_page && params.current_page < params.last_page && params.last_page > 5 && params.current_page < params.last_page - 2">...</span>
    <span v-if="params.current_page < params.last_page && params.last_page > 5">
      <a class="button" :class="{'is-primary':params.current_page==params.last_page}" @click="$emit('clicked',params.last_page)">{{params.last_page}}</a>
    </span>

    <span v-if="params.last_page <= 5" v-for="page in params.last_page">
      <a class="button" :class="{'is-primary':params.current_page==page}"
       @click="$emit('clicked',page)"
      >{{page}}</a>
    </span>
  </nav>
</template>

<script>
  export default {
    name: 'pagination',
    props: ['params'],
    data () {
      return {}
    }
  }
</script>
<style lang="css" scoped>
</style>