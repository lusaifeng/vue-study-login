<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
				<table class="table">
					<thead>
						<tr>
							<th>id</th>
              <th>标签</th>
              <th>创建人</th>
              <th>标题</th>
              <th>创建时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th colspan="7">
                <pagination :params="data" @clicked="changePage"></pagination>
              </th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="task in data.data">
              <td>{{task.id}}</td>
              <td><span class="tag is-primary">{{task.tags}}</span></td>
              <td>{{task.created_by.name}}</td>
              <td>{{task.title}}</td>
              <td>{{task.created_at}}</td>
              <td>
                <span v-if="task.status == 0">等待认领</span>
                <span v-if="task.status == 1">已认领</span>
                <span v-if="task.status == 2">已完成</span>
              </td>
              <td>
                <button class="button is-success" @click="claim(task.id)" v-if="task.status == 0">认领</button>
                <button class="button is-danger" @click="finish(task.id)" v-if="task.status == 1">确认完成</button>
              </td>
            </tr>
            <tr>
              <td colspan="7">
                <router-link to="/addTask" class="button is-primary">+ 创建任务</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>>
</template>

<script>
  import Pagination from './Pagination'
  export default {
    name: 'tasks',
    components: {
      Pagination
    },
    data () {
      return {
        data: [],
        page: 1
      }
    },
    methods: {
      changePage: function (page) {
        this.page = page
        this.fetchTasks()
        this.$router.push({ path: '/', query: {page: this.page} })
      },
      fetchTasks: function () {
        var that = this
        that.$http.get(global.apiUrl + 'tasks', {params: {page: that.page}}).then(function (response) {
          that.data = response.data
        })
      },
      claim: function (id) {
        var that = this
        that.$http.put(global.apiUrl + 'tasks/' + id + '/claim').then(function (response) {
          that.fetchTasks()
        })
      },
      finish: function (id) {
        var that = this
        that.$http.put(global.apiUrl + 'tasks/' + id + '/finish').then(function (response) {
          that.fetchTasks()
        })
      }
    },
    mounted: function () {
      this.page = this.$route.query.page
      this.fetchTasks()
    }
  }
</script>

<style lang="css" scoped>
</style>