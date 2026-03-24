<template>
  <footer class="footer">
    <!-- Top border glow -->
    <div class="footer-glow"></div>

    <div class="container">
      <!-- Footer Top -->
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="brand-logo">
            <div class="brand-icon">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <span>Work Cloud</span>
          </router-link>
          <p class="brand-desc">
            Your personal cloud workspace for modern development.
            Access a full Linux desktop from anywhere in the world.
          </p>
          <div class="social-links">
            <a href="#" aria-label="GitHub" class="social-btn">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" aria-label="Twitter" class="social-btn">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" class="social-btn">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Discord" class="social-btn">
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>

        <div class="footer-links-group">
          <div class="footer-col">
            <h5 class="col-title">Product</h5>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5 class="col-title">Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5 class="col-title">Resources</h5>
            <ul>
              <li><a href="#community">Community</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#guides">Guides</a></li>
              <li><a href="#status">
                <span class="status-dot"></span>
                System Status
              </a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h5 class="col-title">Legal</h5>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Work Cloud, Inc. All rights reserved.
        </p>
        <div class="bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#sitemap">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  background: var(--bg-0);
  border-top: 1px solid var(--border);
  padding: 72px 0 32px;
  position: relative;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 1px;
  background: var(--gradient);
  filter: blur(0px);
  opacity: 0.6;
}

.footer::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 200px;
  background: radial-gradient(ellipse, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
}

/* Footer Top */
.footer-top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
  margin-bottom: 56px;
}

/* Brand Section */
.footer-brand {
  max-width: 300px;
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  text-decoration: none;
}

.brand-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}

.brand-logo span {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-1);
}

.brand-desc {
  font-size: 14px;
  color: var(--text-3);
  line-height: 1.7;
  margin-bottom: 24px;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 10px;
}

.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-3);
  font-size: 15px;
  transition: all 0.2s;
  text-decoration: none;
}

.social-btn:hover {
  background: rgba(124, 58, 237, 0.12);
  border-color: rgba(124, 58, 237, 0.4);
  color: var(--purple-3);
  transform: translateY(-2px);
}

/* Footer Links */
.footer-links-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.col-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-1);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col ul li a {
  font-size: 14px;
  color: var(--text-3);
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.footer-col ul li a:hover {
  color: var(--purple-3);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--success);
  flex-shrink: 0;
  box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.copyright {
  font-size: 13px;
  color: var(--text-3);
}

.bottom-links {
  display: flex;
  gap: 24px;
}

.bottom-links a {
  font-size: 13px;
  color: var(--text-3);
  transition: color 0.2s;
  text-decoration: none;
}

.bottom-links a:hover {
  color: var(--text-2);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .footer-brand { max-width: 100%; }
  .footer-links-group { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .footer-links-group { grid-template-columns: repeat(2, 1fr); gap: 28px; }
  .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
  .bottom-links { flex-wrap: wrap; justify-content: center; }
}

@media (max-width: 480px) {
  .footer { padding: 48px 0 28px; }
  .footer-links-group { grid-template-columns: repeat(2, 1fr); }
}
</style>
