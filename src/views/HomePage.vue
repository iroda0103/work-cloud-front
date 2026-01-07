<template>
  <div class="home">
    <!-- Header Component -->
    <!-- <HomeHeader /> -->

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Your Personal
            <span class="gradient-text">Cloud Workspace</span>
          </h1>
          <p class="hero-subtitle">
            Access a full Linux desktop with Python, VS Code, and development tools
            directly from your browser. No setup required.
          </p>
          <div class="hero-buttons">
            <router-link to="/register" class="btn-primary">
              <i class="fa-solid fa-rocket"></i>
              Get Started Free
            </router-link>
            <router-link to="/login" class="btn-secondary">
              <i class="fa-solid fa-right-to-bracket"></i>
              Sign In
            </router-link>
          </div>
        </div>

        <div class="hero-image">
          <div class="floating-card">
            <i class="fa-solid fa-code"></i>
            <span>VS Code</span>
          </div>
          <div class="floating-card delay-1">
            <i class="fa-brands fa-python"></i>
            <span>Python</span>
          </div>
          <div class="floating-card delay-2">
            <i class="fa-solid fa-terminal"></i>
            <span>Terminal</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Why Choose Work Cloud?</h2>
        <p class="section-subtitle">Everything you need for modern development</p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <h3>Instant Setup</h3>
            <p>Start coding in seconds. No installation, no configuration needed.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-globe"></i>
            </div>
            <h3>Access Anywhere</h3>
            <p>Work from any device with just a web browser. Your workspace follows you.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Secure & Isolated</h3>
            <p>Your workspace is completely isolated and secure in the cloud.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h3>Full Development Tools</h3>
            <p>VS Code, Python, Node.js, and more pre-installed and ready to use.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-gauge-high"></i>
            </div>
            <h3>High Performance</h3>
            <p>Powered by enterprise-grade cloud infrastructure for smooth performance.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-arrows-rotate"></i>
            </div>
            <h3>Auto-Save</h3>
            <p>Your work is automatically saved. Never lose your progress again.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Active Users</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Pre-installed Tools</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99.9%</div>
            <div class="stat-label">Uptime</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Support</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to start coding?</h2>
          <p>Join thousands of developers using Work Cloud</p>
          <router-link to="/register" class="btn-cta">
            <i class="fa-solid fa-rocket"></i>
            Create Your Workspace
          </router-link>
        </div>
      </div>
    </section>

    <!-- Footer Component -->
    <!-- <HomeFooter /> -->
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader.vue';
import HomeFooter from '../components/HomeFooter.vue';

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    HomeFooter
  }
};
</script>

<style scoped>
/* Global Styles */
.home {
  background: radial-gradient(circle at top, #eef2ff, #f8fafc);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 42px;
  text-align: center;
  margin-bottom: 16px;
  color: #1f2937;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 18px;
  margin-bottom: 60px;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Hero Section */
.hero {
  padding: 100px 0 120px;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: #1f2937;
}

.hero-subtitle {
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary,
.btn-cta {
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: inherit;
}

.btn-primary,
.btn-cta {
  background: #667eea;
  color: white;
  border: 2px solid transparent;
}

.btn-primary:hover,
.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

/* Hero Animation */
.hero-image {
  position: relative;
  height: 300px;
  margin-top: 80px;
}

.floating-card {
  position: absolute;
  background: white;
  padding: 20px 30px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  animation: float 3s ease-in-out infinite;
}

.floating-card i {
  font-size: 24px;
  color: #667eea;
}

.floating-card:nth-child(1) {
  top: 20%;
  left: 10%;
}

.floating-card:nth-child(2) {
  top: 50%;
  right: 15%;
  animation-delay: 1s;
}

.floating-card:nth-child(3) {
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Features Section */
.features {
  padding: 80px 0;
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  border-radius: 20px;
  background: #f8fafc;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: #eef2ff;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  font-size: 28px;
  color: #667eea;
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #1f2937;
}

.feature-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Stats Section */
.stats {
  padding: 80px 0;
  background: radial-gradient(circle at top, #eef2ff, #f8fafc);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  color: #667eea;
  margin-bottom: 8px;
}

.stat-label {
  color: #6b7280;
  font-size: 16px;
}

/* CTA Section */
.cta {
  padding: 100px 0;
  background: white;
}

.cta-content {
  text-align: center;
  padding: 80px 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 24px;
  color: white;
}

.cta-content h2 {
  font-size: 42px;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.9;
}

.btn-cta {
  background: white;
  color: #667eea;
  font-size: 18px;
  padding: 16px 40px;
}

.btn-cta:hover {
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .section-title {
    font-size: 32px;
  }

  .floating-card {
    padding: 12px 20px;
    font-size: 14px;
  }

  .floating-card i {
    font-size: 18px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-content h2 {
    font-size: 32px;
  }
}
</style>