<template>
  <div class="register-container">
    <div class="register-card">
      <h1>
        <i class="fa-solid fa-cloud"></i>
        Work Cloud
      </h1>

      <p class="subtitle">Create your cloud workspace account</p>

      <div v-if="error" class="error-message">
        <i class="fa-solid fa-circle-exclamation"></i>
        {{ error }}
      </div>

      <div v-if="success" class="success-message">
        <i class="fa-solid fa-circle-check"></i>
        {{ success }}
      </div>

      <form @submit.prevent="handleRegister">
        <!-- Username -->
        <div class="form-group">
          <label for="username">Username</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-user"></i>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Choose a username"
              required
              minlength="3"
            />
          </div>
          <small class="hint">At least 3 characters, letters and numbers only</small>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-envelope"></i>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
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
              placeholder="Create a strong password"
              required
              minlength="6"
            />
          </div>
          <small class="hint">At least 6 characters</small>
        </div>

        <!-- Confirm Password -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-lock"></i>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              required
            />
          </div>
        </div>

        <button type="submit" :disabled="loading" class="btn-primary">
          <i v-if="!loading" class="fa-solid fa-user-plus"></i>
          {{ loading ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>

      <p class="login-link">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      error: null,
      success: null
    };
  },
  methods: {
    async handleRegister() {
      this.loading = true;
      this.error = null;
      this.success = null;

      // Validation
      if (this.username.length < 3) {
        this.error = 'Username must be at least 3 characters';
        this.loading = false;
        return;
      }

      if (!/^[a-zA-Z0-9]+$/.test(this.username)) {
        this.error = 'Username can only contain letters and numbers';
        this.loading = false;
        return;
      }

      if (this.password.length < 6) {
        this.error = 'Password must be at least 6 characters';
        this.loading = false;
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match';
        this.loading = false;
        return;
      }

      try {
        await api.register(this.username, this.password, this.email);

        this.success = 'Account created successfully! Redirecting to login...';
        
        // Login sahifasiga o'tish (2 soniyadan keyin)
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);

      } catch (err) {
        this.error = err.response?.data?.error || 'Registration failed';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #eef2ff, #f8fafc);
  padding: 20px;
}

.register-card {
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
  margin-bottom: 10px;
}

h1 i {
  color: #667eea;
  margin-right: 6px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 500;
  margin-bottom: 6px;
  display: block;
  color: #333;
}

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
  font-family: inherit;
  transition: border-color 0.3s;
}

input::placeholder {
  font-family: inherit;
  color: #aaa;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.hint {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background: #667eea;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
  margin-top: 10px;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-primary i {
  margin-right: 6px;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  background: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 14px;
}

.error-message i {
  margin-right: 6px;
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 15px;
  text-align: center;
  font-size: 14px;
}

.success-message i {
  margin-right: 6px;
}

.login-link {
  margin-top: 20px;
  text-align: center;
  color: #666;
  font-size: 14px;
}

.login-link a {
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>