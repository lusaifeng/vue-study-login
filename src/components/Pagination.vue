<template>
  <nav class="pagination">
    <a class="button" :class="{'is-disabled':params.current_page == 1}"
      @click="$emit('clicked',params.current_page - 1)"
    >上一页</a>
    <a class="button" :class="{'is-disabled':params.current_page == params.last_page}" 
      @click="$emit('clicked',params.current_page + 1)"
    >下一页</a>
    <span v-for="page in params.last_page">
      <a class="button" :class="{'is-primary':params.current_page==page}"
       @click="$emit('clicked',page)"
      >{{page}}</a>
    </span>
    <!-- <ul>
      <li>
        <a class="button">1</a>
      </li>
      <li>
        <span>...</span>
      </li>
      <li>
        <a class="button">45</a>
      </li>
      <li>
        <a class="button is-primary">46</a>
      </li>
      <li>
        <a class="button">47</a>
      </li>
      <li>
        <span>...</span>
      </li>
      <li>
        <a class="button">86</a>
      </li>
    </ul> -->
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