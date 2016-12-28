<template>
  <div>
    <topbar></topbar>

    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <p class="control">
            <label class="label">title</label>
            <input class="input" type="text" placeholder="title" v-model="title">
            <span class="help is-danger" v-if="errors.title">{{errors.title[0]}}</span>
          </p>
          
          <p class="control">
            <label class="label">tags</label>
            <input class="input" type="text" placeholder="tags" v-model="tags">
            <span class="help is-danger" v-if="errors.tags">{{errors.tags[0]}}</span>
          </p>

          <p class="control">
            <label class="label">content</label>
            <textarea class="textarea" placeholder="content" v-model="content"></textarea>
          </p>

          <p class="control">
            <button class="button is-primary" @click="addTask">创建</button>
            <a onclick="history.go(-1)" class="button is-link">取消</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  export default {
    name: 'addTask',
    components: {
      Topbar
    },
    data () {
      return {
        title: '',
        tags: '',
        content: '',
        errors: {}
      }
    },
    methods: {
      addTask: function () {
        var that = this
        that.$http.post(global.apiUrl + 'tasks', {
          title: that.title,
          tags: that.tags,
          content: that.content
        }).then(function (response) {
          that.$router.replace('/')
        }, function (response) {
          switch (response.status) {
            case 422:
              that.errors = response.data
              break
          }
        })
      }
    }
  }
</script>

<style lang="css">
</style>