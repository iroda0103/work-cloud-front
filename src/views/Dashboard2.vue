<template>
  <div class="dashboard">
    <nav class="navbar">
      <div class="nav-left">
        <h2>Work Cloud</h2>
      </div>
      <div class="nav-right">
        <span class="username">{{ username }}</span>
        <button @click="logout" class="btn-logout">Logout</button>
      </div>
    </nav>
    
    <div class="dashboard-content">
      <div class="welcome-section">
        <h1>Welcome, {{ username }}! 👋</h1>
        <p>Your cloud workspace is ready to use</p>
      </div>
      
      <div class="actions">
        <div class="action-card">
          <div class="icon">💻</div>
          <h3>Start Workspace</h3>
          <p>Launch your personal cloud desktop with Python, VS Code, and more</p>
          <button 
            @click="startWorkspace" 
            :disabled="loading || workspaceActive"
            class="btn-start"
          >
            {{ workspaceActive ? 'Workspace Active' : 'Start Now' }}
          </button>
        </div>
        
        <div class="action-card">
          <div class="icon">📊</div>
          <h3>Your Resources</h3>
          <div class="resources">
            <div class="resource-item">
              <span class="label">CPU</span>
              <span class="value">2 Cores</span>
            </div>
            <div class="resource-item">
              <span class="label">RAM</span>
              <span class="value">2 GB</span>
            </div>
            <div class="resource-item">
              <span class="label">Storage</span>
              <span class="value">10 GB</span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="error" class="error-banner">
        {{ error }}
      </div>
    </div>
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
  methods: {
    async startWorkspace() {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await api.startWorkspace();
        const workspaceUrl = response.data.workspaceUrl;
        
        // Workspace sahifasiga o'tish
        this.$router.push({
          name: 'workspace',
          params: { url: workspaceUrl }
        });
        
        this.workspaceActive = true;
      } catch (error) {
        this.error = error.response?.data?.error || 'Failed to start workspace';
      } finally {
        this.loading = false;
      }
    },
    
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    //   this.$router.push('/login');
    }
  },
  mounted() {
    // Token tekshirish
    if (!localStorage.getItem('token')) {
    //   this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: #f5f7fa;
}

.navbar {
  background: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-left h2 {
  margin: 0;
  color: #667eea;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.username {
  color: #333;
  font-weight: 500;
}

.btn-logout {
  padding: 8px 20px;
  background: #f5f5f5;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-logout:hover {
  background: #e5e5e5;
}

.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.welcome-section {
  text-align: center;
  margin-bottom: 50px;
}

.welcome-section h1 {
  font-size: 36px;
  margin: 0 0 10px;
  color: #333;
}

.welcome-section p {
  color: #666;
  font-size: 18px;
}

.actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.action-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  text-align: center;
}

.icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.action-card h3 {
  margin: 0 0 10px;
  color: #333;
}

.action-card p {
  color: #666;
  margin-bottom: 20px;
}

.btn-start {
  padding: 12px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-start:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-start:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.resources {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.resource-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 6px;
}

.label {
  color: #666;
  font-weight: 500;
}

.value {
  color: #333;
  font-weight: 600;
}

.error-banner {
  background: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  margin-top: 20px;
}
</style>