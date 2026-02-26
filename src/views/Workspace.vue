<template>
  <div class="workspace-container">
    <div class="workspace-header">
      <div class="header-left">
        <button @click="goBack" class="btn-back">← Back to Dashboard</button>
      </div>
      <div class="header-center">
        <span class="status-indicator"></span>
        <span>Workspace Active</span>
      </div>
      <div class="header-right">
        <span class="username">{{ username }}</span>
      </div>
    </div>

    <div class="workspace-content">
      <iframe v-if="workspaceUrl" :src="workspaceUrl" frameborder="0" class="workspace-iframe"
        title="Cloud Workspace"></iframe>
      <div v-else class="loading">
        <!-- <div class="spinner"></div> -->
        <!-- <p>Loading your workspace...</p> -->
         <!-- <img class="img-desktop"
          src="c:\Users\User\AppData\Local\Packages\MicrosoftWindows.Client.Core_cw5n1h2txyewy\TempState\ScreenClip\{49546D36-6B4B-4DE6-8A9F-236BD21ED5F9}.png"
          alt=""> -->
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceView',
  data() {
    return {
      username: localStorage.getItem('username') || 'User',
      workspaceUrl: null
    };
  },
  methods: {
    goBack() {
      this.$router.push('/dashboard');
    }
  },
  mounted() {
    // URL'ni route params dan olish
    this.workspaceUrl = this.$route.params.url;

    if (!this.workspaceUrl) {
      // this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.img-desktop {
  /* height: 300px; */
  width: 600px;
}

.workspace-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #1a1a1a;
}

.workspace-header {
  background: #2d2d2d;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #404040;
}

.btn-back {
  padding: 8px 16px;
  background: #404040;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-back:hover {
  background: #505050;
}

.header-center {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.status-indicator {
  width: 10px;
  height: 10px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.header-right {
  color: white;
}

.workspace-content {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.workspace-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>