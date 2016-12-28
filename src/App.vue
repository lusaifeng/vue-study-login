<template>
  <div id="main">
    <topbar></topbar>

    <tasks></tasks>
  </div>
</template>

<script>
  import Tasks from 'components/Tasks'
  import Topbar from 'components/Topbar'
  export default {
    name: 'app',
    components: {
      Tasks, Topbar
    },
    data () {
      return {}
    }
  }
</script>

<style>

</style>
