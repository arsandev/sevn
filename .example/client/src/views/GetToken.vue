<template>
  <div>
    Congratulation! You already have access to create, update, and delete user. <b>Your token saved in cookie (name: sevnToken)</b>.
    Please go back to home.
  </div>
</template>

<script>
export default {
  methods: {
    getToken() {
      this.axios.get(this.api+'/users/getToken').then(res => {
        if (res.data.status) {
          this.$cookies.set("sevnToken", res.data.token)
        }
      })
    }
  },
  mounted() {
    this.getToken()
  }
}
</script>
