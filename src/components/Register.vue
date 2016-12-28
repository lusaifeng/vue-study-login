<template>
	<div class="register container">
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
						<input class="input" :class="{'is-danger':errors.username}" type="Email" v-model="email" placeholder="Email">
						<i class="fa fa-envelope"></i>
            <span class="help is-danger" v-if="errors.email">{{errors.email[0]}}</span>
					</p>

					<p class="control has-icon">
						<input class="input" :class="{'is-danger':errors.username}" type="password" v-model="password" placeholder="密码">
						<i class="fa fa-lock"></i>
            <span class="help is-danger" v-if="errors.password">{{errors.password[0]}}</span>
					</p>
					<p class="control has-icon">
						<input class="input" :class="{'is-danger':errors.username}" type="password" v-model="password_confirmation" placeholder="确认密码">
						<i class="fa fa-lock"></i>
            <span class="help is-danger" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>
					</p>
					<p class="control">
						<button class="button is-success" @click="register">
							注册
						</button>
						<router-link to="/login" class="button is-link">
							已有账号
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
    name: 'register',
    data () {
      return {
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
        errors: {}
      }
    },
    methods: {
      register: function () {
        var that = this
        that.$http.post(global.apiUrl + 'register', {
          username: that.username,
          password: that.password,
          password_confirmation: that.password_confirmation,
          email: that.email
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
    }
  }
</script>

<style lang="css" scoped>
</style>