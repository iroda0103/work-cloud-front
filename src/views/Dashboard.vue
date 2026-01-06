<template>
  <div class="dashboard">
    <!-- Navbar -->
    <header class="navbar">
      <div class="nav-left">
        <div class="logo">
          <i class="fa-solid fa-cloud"></i>
        </div>
        <span class="brand">Work Cloud</span>
      </div>

      <div class="nav-right">
        <div class="user">
          <i class="fa-solid fa-user"></i>
          <span>{{ username }}</span>
        </div>

        <button class="btn-logout" @click="logout">
          <i class="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </header>

    <!-- Content -->
    <main class="dashboard-content">
      <section class="welcome">
        <h1>Welcome back, <span>{{ username }}</span></h1>
        <p>Your personal cloud workspace is ready </p>
      </section>

      <section class="cards">
        <!-- Workspace -->
        <div class="card primary">
          <div class="card-icon">
            <i class="fa-solid fa-desktop"></i>
          </div>

          <h3>Cloud Workspace</h3>
          <p class="p-text">Start your Linux desktop with VS Code, Python and full dev tools.</p>

          <button
            class="btn-primary"
            :disabled="loading || workspaceActive"
            @click="startWorkspace"
          >
            <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
            <i v-else-if="workspaceActive" class="fa-solid fa-circle-check"></i>
            <i v-else class="fa-solid fa-play"></i>

            {{ buttonText }}
          </button>
        </div>

        <!-- Resources -->
        <div class="card">
          <div class="card-icon secondary">
            <i class="fa-solid fa-server"></i>
          </div>

          <h3>Your Resources</h3>

          <ul class="resources">
            <li>
              <span><i class="fa-solid fa-microchip"></i> CPU</span>
              <strong>2 Cores</strong>
            </li>
            <li>
              <span><i class="fa-solid fa-memory"></i> RAM</span>
              <strong>2 GB</strong>
            </li>
            <li>
              <span><i class="fa-solid fa-hard-drive"></i> Storage</span>
              <strong>10 GB</strong>
            </li>
          </ul>
        </div>
      </section>

      <div v-if="error" class="error">
        <i class="fa-solid fa-circle-exclamation"></i>
        {{ error }}
      </div>
    </main>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'DashboardView',
  data() {
    return {
      username: localStorage.getItem('username') || 'User',
      loading: false,
      workspaceActive: false,
      error: null
    };
  },
  computed: {
    buttonText() {
      if (this.loading) return 'Starting...';
      if (this.workspaceActive) return 'Workspace Active';
      return 'Start Workspace';
    }
  },
  methods: {
    async startWorkspace() {
      this.loading = true;
      this.error = null;
      try {
        const { data } = await api.startWorkspace();
        this.workspaceActive = true;
        this.$router.push({ name: 'workspace', params: { url: data.workspaceUrl } });
      } catch (e) {
        this.error = e.response?.data?.error || 'Failed to start workspace';
      } finally {
        this.loading = false;
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.dashboard {
  min-height: 100vh;
  background: radial-gradient(circle at top, #eef2ff, #f8fafc);
}
.p-text{
    margin-top: 20px;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,.7);
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  border-bottom: 1px solid #e5e7eb;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg,#667eea,#764ba2);
    background: #667eea;

  display: grid;
  place-items: center;
  color: #fff;
}

.brand {
  font-weight: 700;
  font-size: 18px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
}

.btn-logout {
  border: none;
  background: #f3f4f6;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

/* Content */
.dashboard-content {
  max-width: 1200px;
  margin: auto;
  padding: 60px 20px;
}

.welcome {
  text-align: center;
  margin-bottom: 60px;
}

.welcome h1 {
  font-size: 38px;
}

.welcome span {
  color: #667eea;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

/* Cards */
.card {
  background: #fff;
  border-radius: 20px;
  padding: 36px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,.08);
  transition: transform .3s, box-shadow .3s;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0,0,0,.12);
}

.primary {
  border: 2px solid #667eea33;
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: #eef2ff;
  display: grid;
  place-items: center;
  margin: auto auto 20px;
  font-size: 28px;
  color: #667eea;
}

.btn-primary {
  margin-top: 80px;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  background: linear-gradient(135deg,#667eea,#764ba2);
  background: #667eea;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.btn-primary:disabled {
  opacity: .6;
}

/* Resources */
.resources {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.resources li {
  display: flex;
  justify-content: space-between;
  background: #f8fafc;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 10px;
}

/* Error */
.error {
  margin-top: 30px;
  padding: 16px;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 12px;
  text-align: center;
}
</style>
