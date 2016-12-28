<template>
  <div class="hero is-primary">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a href="/" class="nav-item is-tab is-active">首页</a>
            <!-- <a class="nav-item is-tab">Level</a> -->
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <div v-if="user.name" class="nav-item">
              <router-link to="/" class="is-active">
                {{user.name}}
              </router-link>  
              <a class="nav-item" @click="logout">退出</a>
            </div>

            <div class="nav-item" v-else>
              <router-link to="/login">
                登录
              </router-link>

              <router-link to="/register" class="nav-item">
                注册
              </router-link>
            </div>  
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'topbar',

    data () {
      return {
        user: {}
      }
    },
    methods: {
      getUser: function () {
        var that = this
        that.$http.get(global.apiUrl + 'profile').then(function (response) {
          that.user = response.data
        })
      },
      logout: function () {
        window.localStorage.setItem('token', '')
        window.location.reload()
      }
    },
    mounted: function () {
      if (window.localStorage.getItem('token')) {
        this.getUser()
      }
    }
  }
</script>

<style lang="css" scoped>
</style>