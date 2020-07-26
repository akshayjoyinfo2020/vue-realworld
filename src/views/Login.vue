<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign In</h1>
          <p class="text-xs-center">
            <a href="">Need an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="err in errors" :key="err.message">{{ err.message }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </fieldset>
            <button
              v-on:click.self.prevent
              type="button"
              @click="login"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      password: "Password@123",
      email: "akshayjoyinfo@gmail.com",
      errors: []
    };
  },
  methods: {
    login() {
      console.log("Clicked on Login Button ......");
      this.$store
        .dispatch("users/loginUser", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.errors = [];
        })
        .catch(err => {
          this.errors = [];
          this.errors.push(err);
        });
    }
  }
};
</script>
