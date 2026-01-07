<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <!-- Logo -->
        <router-link :to="isAuthenticated ? '/dashboard' : '/'" class="logo">
          <div class="logo-icon">
            <i class="fa-solid fa-cloud"></i>
          </div>
          <span class="logo-text">Work Cloud</span>
        </router-link>

        <!-- Navigation Links (faqat login qilmagan userlar uchun) -->
        <div v-if="!isAuthenticated" class="nav-links" :class="{ active: menuOpen }">
          <a href="#features" @click="closeMenu">Features</a>
          <a href="#pricing" @click="closeMenu">Pricing</a>
          <a href="#about" @click="closeMenu">About</a>
          <a href="#contact" @click="closeMenu">Contact</a>
        </div>

        <!-- Dashboard/Workspace uchun navigation -->
        <div v-if="isAuthenticated && showDashboardNav" class="nav-links-auth">
          <router-link to="/dashboard" class="nav-link">
            <i class="fa-solid fa-th-large"></i>
            Dashboard
          </router-link>
        </div>

        <!-- Auth Buttons (Guest user uchun) -->
        <div v-if="!isAuthenticated" class="nav-auth">
          <router-link to="/login" class="btn-login">
            <i class="fa-solid fa-right-to-bracket"></i>
            Sign In
          </router-link>
          <router-link to="/register" class="btn-register">
            <i class="fa-solid fa-rocket"></i>
            Get Started
          </router-link>
        </div>

        <!-- User Info & Logout (Authenticated user uchun) -->
        <div v-if="isAuthenticated" class="user-section">
          <div class="user-info">
            <i class="fa-solid fa-user"></i>
            <span>{{ username }}</span>
          </div>
          <button class="btn-logout" @click="logout">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span class="logout-text">Logout</span>
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button v-if="!isAuthenticated" class="menu-toggle" @click="toggleMenu">
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
      // Workspace sahifasida Dashboard linkini ko'rsatish
      return this.$route.name === 'workspace';
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      this.$router.push('/');
    }
  },
  watch: {
    // Route o'zgarganda username'ni yangilash
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
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid #e5e7eb;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  color: #1f2937;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #667eea;
  display: grid;
  place-items: center;
  color: white;
  font-size: 20px;
}

/* Navigation Links (Guest) */
.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-links a:hover {
  color: #667eea;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Navigation Links (Authenticated) */
.nav-links-auth {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: #6b7280;
  font-weight: 500;
  transition: all 0.3s;
}

.nav-link:hover {
  background: #f3f4f6;
  color: #667eea;
}

.nav-link i {
  font-size: 16px;
}

/* Auth Buttons (Guest) */
.nav-auth {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn-login,
.btn-register {
  padding: 10px 24px;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: inherit;
}

.btn-login {
  color: #667eea;
  background: transparent;
  border: 2px solid transparent;
}

.btn-login:hover {
  background: #f8fafc;
}

.btn-register {
  background: #667eea;
  color: white;
  border: 2px solid transparent;
}

.btn-register:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

/* User Section (Authenticated) */
.user-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #374151;
  font-weight: 500;
  padding: 10px 16px;
  background: #f3f4f6;
  border-radius: 10px;
}

.user-info i {
  color: #667eea;
  font-size: 16px;
}

.btn-logout {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #f3f4f6;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #374151;
  font-family: inherit;
  transition: all 0.3s;
}

.btn-logout:hover {
  background: #fee2e2;
  color: #dc2626;
}

.btn-logout i {
  font-size: 16px;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #1f2937;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-120%);
    transition: transform 0.3s;
  }

  .nav-links.active {
    transform: translateY(0);
  }

  .nav-auth {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links a {
    font-size: 18px;
  }

  .user-info {
    padding: 8px 12px;
  }

  .user-info span {
    display: none;
  }

  .logout-text {
    display: none;
  }

  .btn-logout {
    padding: 10px;
  }

  .nav-links-auth {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo-text {
    display: none;
  }

  .navbar {
    padding: 15px 0;
  }
}
</style>