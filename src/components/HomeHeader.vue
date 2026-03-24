<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <!-- Logo -->
        <router-link :to="isAuthenticated ? '/dashboard' : '/'" class="logo">
          <div class="logo-mark">
            <img src="/workcloud-icon.svg" alt="Work Cloud" />
          </div>
          <span class="logo-text">Work <span class="logo-accent">Cloud</span></span>
        </router-link>

        <!-- Navigation Links (Guest) -->
        <div v-if="!isAuthenticated" class="nav-links" :class="{ active: menuOpen }">
          <a href="#features" @click="closeMenu">Features</a>
          <a href="#pricing" @click="closeMenu">Pricing</a>
          <a href="#about" @click="closeMenu">About</a>
          <a href="#contact" @click="closeMenu">Contact</a>
        </div>

        <!-- Dashboard nav (Authenticated on workspace page) -->
        <div v-if="isAuthenticated && showDashboardNav" class="nav-links-auth">
          <router-link to="/dashboard" class="nav-link-auth">
            <i class="fa-solid fa-th-large"></i>
            Dashboard
          </router-link>
        </div>

        <!-- Auth Buttons (Guest) -->
        <div v-if="!isAuthenticated" class="nav-auth">
          <router-link to="/login" class="btn-ghost">Sign In</router-link>
          <router-link to="/register" class="btn-glow">
            Get Started
            <i class="fa-solid fa-arrow-right"></i>
          </router-link>
        </div>

        <!-- User Section (Authenticated) -->
        <div v-if="isAuthenticated" class="user-section">
          <div class="user-badge">
            <div class="user-avatar">{{ username.charAt(0).toUpperCase() }}</div>
            <span class="username">{{ username }}</span>
          </div>
          <button class="btn-logout" @click="logout" title="Logout">
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button v-if="!isAuthenticated" class="menu-toggle" @click="toggleMenu" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
          <i class="fa-solid" :class="menuOpen ? 'fa-xmark' : 'fa-bars'"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      menuOpen: false,
      username: localStorage.getItem('username') || 'User'
    };
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('token') || this.$route.name === 'workspace' || this.$route.name === 'dashboard';
    },
    showDashboardNav() {
      return this.$route.name === 'workspace';
    }
  },
  methods: {
    toggleMenu() { this.menuOpen = !this.menuOpen; },
    closeMenu() { this.menuOpen = false; },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.$router.push('/');
    }
  },
  watch: {
    '$route'() {
      this.username = localStorage.getItem('username') || 'User';
    }
  }
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(20px) saturate(180%);
  background: rgba(5, 5, 14, 0.85);
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3));
  border: 1px solid rgba(139,92,246,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.3s;
}

.logo:hover .logo-mark {
  border-color: var(--purple-2);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
}

.logo-mark img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-1);
  letter-spacing: -0.3px;
}

.logo-accent {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Nav Links (Guest) */
.nav-links {
  display: flex;
  gap: 4px;
  align-items: center;
}

.nav-links a {
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-2);
  transition: color 0.2s, background 0.2s;
}

.nav-links a:hover {
  color: var(--text-1);
  background: rgba(255, 255, 255, 0.06);
}

/* Nav Links (Auth) */
.nav-links-auth {
  display: flex;
  align-items: center;
}

.nav-link-auth {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-2);
  transition: all 0.2s;
}

.nav-link-auth:hover {
  color: var(--text-1);
  background: rgba(255, 255, 255, 0.06);
}

.nav-link-auth i { font-size: 14px; }

/* Auth Buttons */
.nav-auth {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-ghost {
  padding: 8px 20px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-2);
  transition: all 0.2s;
  border: 1px solid transparent;
}

.btn-ghost:hover {
  color: var(--text-1);
  background: rgba(255, 255, 255, 0.06);
  border-color: var(--border);
}

.btn-glow {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  background: var(--gradient);
  color: white;
  transition: all 0.3s;
  box-shadow: 0 0 0 rgba(124, 58, 237, 0);
}

.btn-glow:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-purple);
}

.btn-glow i {
  font-size: 12px;
  transition: transform 0.3s;
}

.btn-glow:hover i {
  transform: translateX(3px);
}

/* User Section */
.user-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 6px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.username {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-1);
}

.btn-logout {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--text-2);
  font-size: 14px;
  transition: all 0.2s;
}

.btn-logout:hover {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}

/* Mobile Toggle */
.menu-toggle {
  display: none;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--text-1);
  font-size: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar { height: 60px; }

  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 24, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 16px;
    gap: 4px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-110%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 999;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-links a {
    width: 100%;
    padding: 12px 16px;
    font-size: 15px;
  }

  .nav-auth { display: none; }

  .menu-toggle { display: flex; }

  .username { display: none; }
  .user-badge { padding: 6px; }
}

@media (max-width: 480px) {
  .logo-text { display: none; }
}
</style>
