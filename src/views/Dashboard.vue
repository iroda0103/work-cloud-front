<template>
  <div class="dashboard">
    <!-- Background -->
    <div class="dash-bg">
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>
    </div>

    <div class="dash-container">
      <!-- Welcome Header -->
      <div class="welcome-section">
        <div class="welcome-left">
          <div class="user-avatar-lg">{{ username.charAt(0).toUpperCase() }}</div>
          <div class="welcome-text">
            <span class="welcome-label">Welcome back</span>
            <h1 class="welcome-name">{{ username }}</h1>
          </div>
        </div>
        <div class="status-pill">
          <span class="status-dot"></span>
          All systems operational
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="alert-error">
        <i class="fa-solid fa-triangle-exclamation"></i>
        {{ error }}
      </div>

      <!-- Cards Grid -->
      <div class="cards-grid">

        <!-- Workspace Card -->
        <div class="dash-card workspace-card">
          <div class="card-top">
            <div class="card-icon-wrap">
              <i class="fa-solid fa-desktop"></i>
            </div>
            <div class="card-badge">
              <span class="badge-dot-offline"></span>
              Offline
            </div>
          </div>

          <div class="card-body">
            <h3>Cloud Workspace</h3>
            <p>Launch your personal Linux desktop with VS Code, Python, and full development tools.</p>

            <div class="workspace-specs">
              <div class="spec-item">
                <i class="fa-brands fa-python"></i>
                <span>Python 3.11</span>
              </div>
              <div class="spec-item">
                <i class="fa-solid fa-code"></i>
                <span>VS Code</span>
              </div>
              <div class="spec-item">
                <i class="fa-brands fa-node-js"></i>
                <span>Node.js 20</span>
              </div>
              <div class="spec-item">
                <i class="fa-brands fa-git-alt"></i>
                <span>Git</span>
              </div>
            </div>
          </div>

          <button
            class="btn-launch"
            :class="{ loading: loading, active: workspaceActive }"
            :disabled="loading || workspaceActive"
            @click="startWorkspace"
          >
            <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
            <i v-else-if="workspaceActive" class="fa-solid fa-circle-check"></i>
            <i v-else class="fa-solid fa-play"></i>
            {{ buttonText }}
          </button>
        </div>

        <!-- Resources Card -->
        <div class="dash-card resources-card">
          <div class="card-top">
            <div class="card-icon-wrap secondary">
              <i class="fa-solid fa-server"></i>
            </div>
            <span class="card-title-sm">Your Resources</span>
          </div>

          <div class="resources-list">
            <div class="resource-item">
              <div class="res-left">
                <div class="res-icon">
                  <i class="fa-solid fa-microchip"></i>
                </div>
                <div>
                  <div class="res-name">CPU</div>
                  <div class="res-val">2 Cores</div>
                </div>
              </div>
              <div class="res-bar-wrap">
                <div class="res-bar">
                  <div class="res-bar-fill" style="width: 0%"></div>
                </div>
                <span class="res-pct">Idle</span>
              </div>
            </div>

            <div class="resource-item">
              <div class="res-left">
                <div class="res-icon">
                  <i class="fa-solid fa-memory"></i>
                </div>
                <div>
                  <div class="res-name">RAM</div>
                  <div class="res-val">2 GB</div>
                </div>
              </div>
              <div class="res-bar-wrap">
                <div class="res-bar">
                  <div class="res-bar-fill" style="width: 0%"></div>
                </div>
                <span class="res-pct">Idle</span>
              </div>
            </div>

            <div class="resource-item">
              <div class="res-left">
                <div class="res-icon">
                  <i class="fa-solid fa-hard-drive"></i>
                </div>
                <div>
                  <div class="res-name">Storage</div>
                  <div class="res-val">10 GB</div>
                </div>
              </div>
              <div class="res-bar-wrap">
                <div class="res-bar">
                  <div class="res-bar-fill" style="width: 4%"></div>
                </div>
                <span class="res-pct">~0.4 GB</span>
              </div>
            </div>
          </div>

          <div class="res-footer">
            <i class="fa-solid fa-circle-info"></i>
            Resources are allocated when workspace is active
          </div>
        </div>

        <!-- Quick Start Card -->
        <div class="dash-card quickstart-card">
          <div class="card-top">
            <div class="card-icon-wrap green">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <span class="card-title-sm">Quick Start</span>
          </div>

          <div class="quick-list">
            <div class="quick-item">
              <div class="q-num">1</div>
              <div class="q-text">
                <strong>Launch workspace</strong>
                <span>Click the Launch button above</span>
              </div>
            </div>
            <div class="quick-item">
              <div class="q-num">2</div>
              <div class="q-text">
                <strong>Open VS Code</strong>
                <span>Pre-installed on your desktop</span>
              </div>
            </div>
            <div class="quick-item">
              <div class="q-num">3</div>
              <div class="q-text">
                <strong>Start coding</strong>
                <span>Install packages, run scripts</span>
              </div>
            </div>
          </div>
        </div>

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
  computed: {
    buttonText() {
      if (this.loading) return 'Launching...';
      if (this.workspaceActive) return 'Workspace Active';
      return 'Launch Workspace';
    }
  },
  methods: {
    async startWorkspace() {
      this.loading = true;
      this.error = null;
      this.$router.push({ name: 'workspace', params: { url: 'https://vnc.work-cloud.uz/' } });
    },
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      // this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: var(--bg-0);
  position: relative;
  overflow-x: hidden;
}

.dash-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.12;
}

.bg-orb-1 {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, #7c3aed, transparent 70%);
  top: -300px;
  right: -200px;
}

.bg-orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #06b6d4, transparent 70%);
  bottom: -200px;
  left: -150px;
}

.dash-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px 80px;
  position: relative;
  z-index: 1;
}

/* ── Welcome ── */
.welcome-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  gap: 20px;
  flex-wrap: wrap;
}

.welcome-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-avatar-lg {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);
}

.welcome-label {
  display: block;
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 2px;
}

.welcome-name {
  font-size: 26px;
  font-weight: 800;
  color: var(--text-1);
  letter-spacing: -0.5px;
}

.status-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  color: #6ee7b7;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
  animation: pulse-status 2s ease-in-out infinite;
}

@keyframes pulse-status {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.6; }
}

/* ── Alert ── */
.alert-error {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: 12px;
  font-size: 14px;
  color: #fca5a5;
  margin-bottom: 28px;
}

/* ── Cards Grid ── */
.cards-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
}

.workspace-card {
  grid-row: span 2;
}

/* ── Dash Card Base ── */
.dash-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 28px;
  transition: border-color 0.3s;
  backdrop-filter: blur(12px);
}

.dash-card:hover {
  border-color: rgba(139, 92, 246, 0.22);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: var(--purple-3);
}

.card-icon-wrap.secondary {
  background: rgba(6, 182, 212, 0.1);
  border-color: rgba(6, 182, 212, 0.2);
  color: var(--cyan-2);
}

.card-icon-wrap.green {
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
  color: #34d399;
}

.card-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background: rgba(100, 116, 139, 0.12);
  border: 1px solid rgba(100, 116, 139, 0.2);
  color: var(--text-3);
}

.badge-dot-offline {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-3);
}

.card-title-sm {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-2);
}

/* ── Workspace Card ── */
.card-body h3 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 10px;
  letter-spacing: -0.3px;
}

.card-body p {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.65;
  margin-bottom: 24px;
}

.workspace-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: var(--bg-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-2);
}

.spec-item i { color: var(--purple-3); font-size: 13px; }

.btn-launch {
  width: 100%;
  padding: 14px 20px;
  border-radius: 13px;
  border: none;
  background: var(--gradient);
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 4px 24px rgba(124, 58, 237, 0.3);
  margin-top: auto;
}

.btn-launch:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 36px rgba(124, 58, 237, 0.45);
}

.btn-launch.active {
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: #6ee7b7;
  box-shadow: none;
}

.btn-launch:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

/* ── Resources Card ── */
.resources-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.resource-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.res-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.res-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--bg-2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--text-3);
}

.res-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-2);
}

.res-val {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-1);
}

.res-bar-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.res-bar {
  flex: 1;
  height: 5px;
  border-radius: 3px;
  background: var(--bg-3);
  overflow: hidden;
}

.res-bar-fill {
  height: 100%;
  border-radius: 3px;
  background: var(--gradient);
  min-width: 2px;
  transition: width 0.8s ease;
}

.res-pct {
  font-size: 11px;
  color: var(--text-3);
  white-space: nowrap;
  min-width: 36px;
  text-align: right;
}

.res-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  font-size: 12px;
  color: var(--text-3);
}

.res-footer i { color: var(--purple-3); }

/* ── Quick Start Card ── */
.quick-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.quick-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.q-num {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
}

.q-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.q-text strong {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-1);
}

.q-text span {
  font-size: 12px;
  color: var(--text-3);
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .cards-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .workspace-card { grid-row: span 1; }
}

@media (max-width: 600px) {
  .dash-container { padding: 36px 16px 60px; }
  .welcome-section { flex-direction: column; align-items: flex-start; }
  .welcome-name { font-size: 22px; }
}
</style>
