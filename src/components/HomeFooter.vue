<template>
  <footer class="footer">
    <div class="container">
      <!-- Footer Top -->
      <div class="footer-top">
        <div class="footer-column">
          <div class="footer-logo">
            <div class="logo-icon">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <span class="logo-text">Work Cloud</span>
          </div>
          <p class="footer-desc">
            Your personal cloud workspace for modern development. 
            Access a full Linux desktop from anywhere.
          </p>
          <div class="social-links">
            <a href="#" aria-label="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Discord">
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#api">API</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#community">Community</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#status">Status</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Work Cloud. All rights reserved.
        </p>
        <div class="footer-links">
          <a href="#privacy">Privacy</a>
          <span class="divider">•</span>
          <a href="#terms">Terms</a>
          <span class="divider">•</span>
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
  background: #1f2937;
  color: #d1d5db;
  padding: 60px 0 30px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Footer Top */
.footer-top {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 50px;
}

.footer-column:first-child {
  max-width: 350px;
}

/* Logo */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
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

.logo-text {
  font-weight: 700;
  font-size: 20px;
  color: white;
}

.footer-desc {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #9ca3af;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #374151;
  display: grid;
  place-items: center;
  color: #d1d5db;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;
}

.social-links a:hover {
  background: #667eea;
  color: white;
}

/* Footer Columns */
.footer-column h4 {
  color: white;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 600;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover {
  color: #667eea;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid #374151;
}

.copyright {
  color: #9ca3af;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 12px;
  align-items: center;
}

.footer-links a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #667eea;
}

.divider {
  color: #4b5563;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 30px;
  }

  .footer-column:nth-child(4),
  .footer-column:nth-child(5) {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-column:first-child {
    grid-column: span 2;
    max-width: 100%;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-top {
    grid-template-columns: 1fr;
  }

  .footer-column:first-child {
    grid-column: span 1;
  }

  .social-links {
    justify-content: center;
  }
}
</style>