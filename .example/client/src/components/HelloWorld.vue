<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="https://arsan.dev" target="_blank">Arsan Dev</a> (c) 2019
    <hr>

    <div class="red-msg">
      *Note: to create, update, and delete, please access this page: <router-link :to="{name:'getToken'}">Get Token</router-link>
      (JWT/Authentication simulation)
    </div>

    <form @submit.prevent="insert()">
      <input type="text" autocomplete="off" placeholder="enter name" ref="name">
      <button type="submit">+ Add New Name</button>
    </form>

    <div class="container">
      <div class="card" v-for="(u, index) in users" :key="index" @dblclick="remove(u.id)">
        <h3>{{u.name}}</h3>
        <div class="red-msg">*double click to delete</div>
        <a href="javascript:" @click="update(u.id)">Update</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      users: [],
      token: this.$cookies.get("sevnToken")
    }
  },
  methods: {
    getUsers() {
      this.axios.get(this.api+"/users").then(res => {
        this.users = res.data
      })
    },
    update(id) {
      let name = prompt("type new name")
      this.axios.put(this.api+"/users/"+id+"?token="+this.token, {
        name: name
      }).then(res => {
        if (res.data.status) this.getUsers()
      }).catch(() => {
       alert("An error occurred in access rule. Please access \"Get Token\" Page ")
      })
    },
    insert() {
      this.axios.post(this.api+"/users?token="+this.token, {
        name: this.$refs.name.value
      }).then(res => {
        if (res.data.status) this.getUsers()
      }).catch(() => {
       alert("An error occurred in access rule. Please access \"Get Token\" Page ")
      })
    },
    remove(id) {
      this.axios.delete(this.api+"/users/"+id+"?token="+this.token).then(() => {
        this.getUsers()
      }).catch(() => {
        alert("An error occurred in access rule. Please access \"Get Token\" Page ")
      })
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style scoped>
  a{
    color:#2b67a0;
    text-decoration: none;
  }
  .container {
    margin: 20px 25%;
  }
  form {
    margin-top: 10px;
  }
  .card {
    padding: 8px;
    border: 1px solid #DDD;
    border-radius: 5px;
    margin-top: 8px;
  }
  .red-msg {
    color: red;
  }
  .card h3 {
    margin: 0;
  }
</style>
