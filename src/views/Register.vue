<template>
  <div class="auth-page">
    <!-- Background decorations -->
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="grid-pattern"></div>

    <!-- Card -->
    <div class="auth-card">
      <!-- Card Header -->
      <div class="card-header">
        <div class="brand-icon">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <h1>Create account</h1>
        <p>Free forever — no credit card needed</p>
      </div>

      <!-- Alerts -->
      <div v-if="error" class="alert alert-error">
        <i class="fa-solid fa-triangle-exclamation"></i>
        {{ error }}
      </div>
      <div v-if="success" class="alert alert-success">
        <i class="fa-solid fa-circle-check"></i>
        {{ success }}
      </div>

      <!-- Form -->
      <form @submit.prevent="handleRegister" class="form">
        <div class="field">
          <label for="username">Username</label>
          <div class="input-wrap">
            <i class="fa-solid fa-user field-icon"></i>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Choose a username"
              required
              minlength="3"
              autocomplete="username"
            />
          </div>
          <span class="hint">Min. 3 characters, letters and numbers only</span>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <div class="input-wrap">
            <i class="fa-solid fa-envelope field-icon"></i>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="your@email.com"
              required
              autocomplete="email"
            />
          </div>
        </div>

        <div class="fields-row">
          <div class="field">
            <label for="password">Password</label>
            <div class="input-wrap">
              <i class="fa-solid fa-lock field-icon"></i>
              <input
                id="password"
                v-model="password"
                type="password"
                placeholder="Min. 6 chars"
                required
                minlength="6"
                autocomplete="new-password"
              />
            </div>
          </div>

          <div class="field">
            <label for="confirmPassword">Confirm</label>
            <div class="input-wrap">
              <i class="fa-solid fa-lock field-icon"></i>
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                type="password"
                placeholder="Repeat password"
                required
                autocomplete="new-password"
              />
            </div>
          </div>
        </div>

        <button type="submit" :disabled="loading" class="btn-submit">
          <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
          <i v-else class="fa-solid fa-user-plus"></i>
          {{ loading ? 'Creating account...' : 'Create Free Account' }}
        </button>
      </form>

      <p class="form-footer">
        Already have an account?
        <router-link to="/login">Sign in</router-link>
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
        this.success = 'Account created! Redirecting to login...';
        setTimeout(() => { this.$router.push('/login'); }, 2000);
      } catch (err) {
        this.error = err.response?.data?.error || 'Registration failed. Please try again.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.auth-page {
  min-height: calc(100vh - 68px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
  background: var(--bg-0);
}

/* Background decorations */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.bg-orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.16), transparent 70%);
  top: -200px;
  right: -100px;
}

.bg-orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.16), transparent 70%);
  bottom: -150px;
  left: -100px;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  z-index: 0;
}

/* Card */
.auth-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 460px;
  background: rgba(15, 15, 32, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(139, 92, 246, 0.18);
  border-radius: 24px;
  padding: 40px 36px;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.04),
    0 32px 80px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(124, 58, 237, 0.08);
}

/* Card Header */
.card-header {
  text-align: center;
  margin-bottom: 28px;
}

.brand-icon {
  width: 52px;
  height: 52px;
  border-radius: 15px;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  margin: 0 auto 20px;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);
}

.card-header h1 {
  font-size: 24px;
  font-weight: 800;
  color: var(--text-1);
  letter-spacing: -0.4px;
  margin-bottom: 6px;
}

.card-header p {
  font-size: 14px;
  color: var(--text-2);
}

/* Alert */
.alert {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 10px;
  font-size: 13px;
  margin-bottom: 20px;
}

.alert-error {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #fca5a5;
}

.alert-success {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: #6ee7b7;
}

/* Form */
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.fields-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.field label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-2);
}

.hint {
  font-size: 11px;
  color: var(--text-3);
}

.input-wrap {
  position: relative;
}

.field-icon {
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  font-size: 14px;
  color: var(--text-3);
  pointer-events: none;
  transition: color 0.2s;
}

.input-wrap input {
  width: 100%;
  padding: 12px 14px 12px 42px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(139, 92, 246, 0.15);
  border-radius: 11px;
  font-size: 14px;
  color: var(--text-1);
  outline: none;
  transition: all 0.2s;
}

.input-wrap input::placeholder {
  color: var(--text-3);
}

.input-wrap input:focus {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.06);
  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.13);
}

.input-wrap:focus-within .field-icon {
  color: #a78bfa;
}

.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 6px;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.3);
}

.btn-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 36px rgba(124, 58, 237, 0.45);
}

.btn-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* Footer */
.form-footer {
  margin-top: 22px;
  text-align: center;
  font-size: 13px;
  color: var(--text-3);
}

.form-footer a {
  color: #a78bfa;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.form-footer a:hover {
  color: var(--text-1);
}

@media (max-width: 480px) {
  .auth-card { padding: 32px 20px; }
  .fields-row { grid-template-columns: 1fr; }
}
</style>
