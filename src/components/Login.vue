<template>
  <div class="login container">
    <div class="notification">
      <div class="columns">
        <div class="column"></div>

        <div class="column">
          <p class="control">
            <span class="help is-danger" v-if="errors.error">{{errors.error}}</span>
          </p>
          <p class="control has-icon">
            <input class="input" :class="{'is-danger':errors.username}" type="text" v-model="username" placeholder="用户名">
            <i class="fa fa-user"></i>
            <span class="help is-danger" v-if="errors.username">{{errors.username[0]}}</span>
          </p>
          <p class="control has-icon">
            <input class="input" :class="{'is-danger':errors.password}" type="password" v-model="password" placeholder="密码">
            <i class="fa fa-lock"></i>
            <span class="help is-danger" v-if="errors.password">{{errors.password[0]}}</span>
          </p>
          <p class="control">
            <button class="button is-success" @click="login">
              登录
            </button>
            <router-link to="/register" class="button is-link">
              注册
            </router-link>
          </p>
        </div>

        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'login',
    data () {
      return {
        username: 'aaaa',
        password: '111111',
        errors: {}
      }
    },
    methods: {
      login: function () {
        var that = this
        that.$http.post(global.apiUrl + 'login', {
          username: that.username,
          password: that.password
        }).then(function (response) {
          if (response.data.token) {
            window.localStorage.setItem('token', response.data.token)
            Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.token
            that.$router.replace('/')
          }
        }, function (response) {
          switch (response.status) {
            case 422:
              that.errors = response.data
              break
            case 401:
              that.errors = response.data
              break
          }
        })
      }
    },
    mounted: function () {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
