<template>
  <div class="login-container">
    <div class="login-card">
      <h1>
        <i class="fa-solid fa-cloud"></i>
        Work Cloud
      </h1>

      <p class="subtitle">Cloud-based workspace for everyone</p>

      <div v-if="error" class="error-message">
        <i class="fa-solid fa-circle-exclamation"></i>
        {{ error }}
      </div>

      <form @submit.prevent="handleLogin">
        <!-- Username -->
        <div class="form-group">
          <label for="username">Username</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-user"></i>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Enter your username"
              required
            />
          </div>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-lock"></i>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <button type="submit" :disabled="loading" class="btn-primary">
          <i v-if="!loading" class="fa-solid fa-right-to-bracket"></i>
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>

      <p class="register-link">
        Don’t have an account?
        <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: null
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.error = null;

      try {
        const response = await api.login(this.username, this.password);

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', this.username);

        this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.response?.data?.error || 'Login failed';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
    background: radial-gradient(circle at top, #eef2ff, #f8fafc);

  padding: 20px;
  /* font-family: 'Inter', system-ui, sans-serif; */
}

.login-card {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  font-size: 32px;
  color: #333;
}

h1 i {
  color: #667eea;
  margin-right: 6px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
}

/* ICON + INPUT */
.input-wrapper {
  position: relative;
}

.input-wrapper i {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: #999;
}

input {
  width: 100%;
  padding: 12px 12px 12px 38px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 14px;
  font-family: inherit; /* 🔥 MUHIM */
}

input::placeholder {
  font-family: inherit; /* 🔥 MUHIM */
  color: #aaa;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  /* background: linear-gradient(135deg, #667eea, #764ba2); */
  background: #667eea;
  
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary i {
  margin-right: 6px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  background: #fee;
  color: #c33;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 15px;
  text-align: center;
}

.error-message i {
  margin-right: 6px;
}

.register-link {
  margin-top: 20px;
  text-align: center;
}

.register-link a {
  color: #667eea;
  font-weight: 600;
}
</style>
