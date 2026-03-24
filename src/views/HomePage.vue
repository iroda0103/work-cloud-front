<template>
  <div class="home">

    <!-- ══════════ HERO ══════════ -->
    <section class="hero">
      <!-- Background decorations -->
      <div class="hero-bg">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="grid-pattern"></div>
      </div>

      <div class="container">
        <div class="hero-inner">
          <!-- Badge -->
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Cloud-Native Development Platform
          </div>

          <!-- Title -->
          <h1 class="hero-title">
            Your Personal<br />
            <span class="gradient-text">Cloud Workspace</span>
          </h1>

          <p class="hero-desc">
            Access a full Linux desktop with Python, VS Code, and development tools
            directly from your browser. No setup. No installation. Just code.
          </p>

          <!-- CTA Buttons -->
          <div class="hero-actions">
            <router-link to="/register" class="btn-primary">
              <i class="fa-solid fa-rocket"></i>
              Start for Free
            </router-link>
            <router-link to="/login" class="btn-outline">
              <i class="fa-solid fa-right-to-bracket"></i>
              Sign In
            </router-link>
          </div>

          <!-- Trust line -->
          <p class="hero-trust">
            <i class="fa-solid fa-shield-halved"></i>
            No credit card required &nbsp;·&nbsp;
            <i class="fa-solid fa-bolt"></i>
            Ready in 30 seconds
          </p>
        </div>

        <!-- Terminal Mockup -->
        <div class="terminal-wrapper">
          <div class="terminal">
            <div class="terminal-titlebar">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span class="terminal-title">bash — work-cloud</span>
            </div>
            <div class="terminal-body">
              <div class="t-line"><span class="t-prompt">~</span><span class="t-cmd"> python3 main.py</span></div>
              <div class="t-line t-output">Loading model weights... <span class="t-ok">✓</span></div>
              <div class="t-line t-output">Training epoch 1/10... <span class="t-cyan">87%</span></div>
              <div class="t-line"><span class="t-prompt">~</span><span class="t-cmd"> code .</span></div>
              <div class="t-line t-output">Opening VS Code... <span class="t-ok">✓</span></div>
              <div class="t-line"><span class="t-prompt">~</span><span class="t-cursor">█</span></div>
            </div>
          </div>

          <!-- Floating cards -->
          <div class="f-card f-card-1">
            <div class="f-icon"><i class="fa-solid fa-code"></i></div>
            <div>
              <div class="f-name">VS Code</div>
              <div class="f-sub">Ready</div>
            </div>
          </div>
          <div class="f-card f-card-2">
            <div class="f-icon python"><i class="fa-brands fa-python"></i></div>
            <div>
              <div class="f-name">Python 3.11</div>
              <div class="f-sub">Installed</div>
            </div>
          </div>
          <div class="f-card f-card-3">
            <div class="f-icon node"><i class="fa-brands fa-node-js"></i></div>
            <div>
              <div class="f-name">Node.js 20</div>
              <div class="f-sub">LTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ STATS ══════════ -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-inner">
          <div class="stat">
            <span class="stat-num">10,000+</span>
            <span class="stat-lbl">Active Users</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">50+</span>
            <span class="stat-lbl">Pre-installed Tools</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">99.9%</span>
            <span class="stat-lbl">Uptime SLA</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">24/7</span>
            <span class="stat-lbl">Support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ FEATURES ══════════ -->
    <section class="features" id="features">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Features</div>
          <h2 class="section-title">Why Choose Work Cloud?</h2>
          <p class="section-sub">Everything you need for modern cloud development, in one place</p>
        </div>

        <div class="features-grid">
          <div class="feat-card">
            <div class="feat-icon">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <h3>Instant Setup</h3>
            <p>Start coding in under 30 seconds. No installation or configuration needed whatsoever.</p>
          </div>

          <div class="feat-card">
            <div class="feat-icon">
              <i class="fa-solid fa-globe"></i>
            </div>
            <h3>Access Anywhere</h3>
            <p>Work from any device with just a web browser. Your workspace travels with you.</p>
          </div>

          <div class="feat-card feat-card--highlight">
            <div class="feat-icon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Secure & Isolated</h3>
            <p>Each workspace is fully isolated with end-to-end encryption and enterprise-grade security.</p>
          </div>

          <div class="feat-card">
            <div class="feat-icon">
              <i class="fa-solid fa-code"></i>
            </div>
            <h3>Full Dev Tools</h3>
            <p>VS Code, Python, Node.js, Git, Docker and 50+ tools pre-installed and ready to use.</p>
          </div>

          <div class="feat-card">
            <div class="feat-icon">
              <i class="fa-solid fa-gauge-high"></i>
            </div>
            <h3>High Performance</h3>
            <p>Powered by enterprise-grade cloud infrastructure with dedicated CPU and RAM resources.</p>
          </div>

          <div class="feat-card">
            <div class="feat-icon">
              <i class="fa-solid fa-floppy-disk"></i>
            </div>
            <h3>Auto-Save</h3>
            <p>Your work is automatically saved and synced. Never lose your progress again.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ HOW IT WORKS ══════════ -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">Simple Process</div>
          <h2 class="section-title">Up and running in minutes</h2>
        </div>

        <div class="steps">
          <div class="step">
            <div class="step-num">01</div>
            <div class="step-content">
              <h4>Create Account</h4>
              <p>Sign up in seconds with just your email. No credit card required.</p>
            </div>
          </div>
          <div class="step-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="step">
            <div class="step-num">02</div>
            <div class="step-content">
              <h4>Launch Workspace</h4>
              <p>Click one button and your full Linux desktop starts in 30 seconds.</p>
            </div>
          </div>
          <div class="step-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          <div class="step">
            <div class="step-num">03</div>
            <div class="step-content">
              <h4>Start Coding</h4>
              <p>Open VS Code, run your scripts, install packages — full control.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════ CTA ══════════ -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div class="cta-orb cta-orb-1"></div>
          <div class="cta-orb cta-orb-2"></div>
          <div class="cta-content">
            <div class="section-tag">Get Started</div>
            <h2>Ready to start coding in the cloud?</h2>
            <p>Join thousands of developers using Work Cloud today.</p>
            <router-link to="/register" class="btn-cta">
              <i class="fa-solid fa-rocket"></i>
              Create Your Free Workspace
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home {
  background: var(--bg-0);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ── Shared ── */
.gradient-text {
  background: linear-gradient(135deg, #a78bfa, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-tag {
  display: inline-block;
  padding: 5px 14px;
  border-radius: 20px;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.25);
  font-size: 12px;
  font-weight: 600;
  color: var(--purple-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 40px;
  font-weight: 800;
  color: var(--text-1);
  letter-spacing: -0.5px;
  line-height: 1.2;
  margin-bottom: 12px;
}

.section-sub {
  font-size: 17px;
  color: var(--text-2);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── HERO ── */
.hero {
  padding: 120px 0 100px;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #7c3aed, transparent 70%);
  top: -200px;
  left: -200px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #06b6d4, transparent 70%);
  bottom: -200px;
  right: -100px;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-inner {
  max-width: 560px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.2);
  font-size: 13px;
  font-weight: 500;
  color: var(--purple-3);
  margin-bottom: 28px;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.7);
  animation: pulse-badge 2s ease-in-out infinite;
}

@keyframes pulse-badge {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

.hero-title {
  font-size: 58px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -1.5px;
  color: var(--text-1);
  margin-bottom: 20px;
}

.hero-desc {
  font-size: 17px;
  color: var(--text-2);
  line-height: 1.7;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  background: var(--gradient);
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 0 0 rgba(124, 58, 237, 0);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(124, 58, 237, 0.4);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  background: var(--bg-card);
  color: var(--text-1);
  border: 1px solid var(--border);
  text-decoration: none;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}

.hero-trust {
  font-size: 13px;
  color: var(--text-3);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.hero-trust i {
  color: var(--purple-3);
  font-size: 12px;
}

/* ── Terminal ── */
.terminal-wrapper {
  position: relative;
}

.terminal {
  background: #0a0a18;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 14px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.05),
    0 32px 80px rgba(0,0,0,0.6),
    0 0 60px rgba(124, 58, 237, 0.12);
}

.terminal-titlebar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.dot.red { background: #ff5f57; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #28ca41; }

.terminal-title {
  margin-left: 8px;
  font-size: 12px;
  color: var(--text-3);
  font-family: 'Monaco', 'Menlo', monospace;
}

.terminal-body {
  padding: 20px 20px 24px;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  font-size: 13.5px;
  line-height: 2;
  min-height: 200px;
}

.t-line { display: flex; align-items: center; gap: 0; }

.t-prompt {
  color: var(--purple-3);
  font-weight: 600;
  white-space: nowrap;
}

.t-prompt::before {
  content: '❯ ';
  color: var(--purple-3);
}

.t-cmd { color: var(--text-1); }
.t-output { color: var(--text-3); padding-left: 20px; }
.t-ok { color: var(--success); margin-left: 4px; }
.t-cyan { color: var(--cyan-2); }

.t-cursor {
  color: var(--purple-3);
  animation: blink 1s step-end infinite;
  margin-left: 4px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Floating Cards */
.f-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(15, 15, 32, 0.95);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  z-index: 2;
}

.f-card-1 { top: -20px; right: -24px; animation: float 4s ease-in-out infinite; }
.f-card-2 { bottom: 40px; left: -28px; animation: float 4s ease-in-out infinite 1.3s; }
.f-card-3 { bottom: -20px; right: 40px; animation: float 4s ease-in-out infinite 2.6s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.f-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: var(--purple-3);
  flex-shrink: 0;
}

.f-icon.python { background: rgba(6, 182, 212, 0.12); border-color: rgba(6,182,212,0.3); color: var(--cyan-2); }
.f-icon.node { background: rgba(16, 185, 129, 0.12); border-color: rgba(16,185,129,0.3); color: #34d399; }

.f-name { font-size: 13px; font-weight: 600; color: var(--text-1); line-height: 1.3; }
.f-sub { font-size: 11px; color: var(--text-3); }

/* ── STATS BAR ── */
.stats-bar {
  padding: 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.015);
}

.stats-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 36px 0;
  gap: 0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 56px;
}

.stat-num {
  font-size: 32px;
  font-weight: 800;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.stat-lbl {
  font-size: 13px;
  color: var(--text-3);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: var(--border);
  flex-shrink: 0;
}

/* ── FEATURES ── */
.features {
  padding: 120px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feat-card {
  padding: 32px;
  border-radius: var(--radius-lg);
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.feat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-soft);
  opacity: 0;
  transition: opacity 0.3s;
}

.feat-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(124,58,237,0.08);
}

.feat-card:hover::before { opacity: 1; }

.feat-card--highlight {
  background: linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.06));
  border-color: rgba(124, 58, 237, 0.25);
}

.feat-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.15));
  border: 1px solid rgba(124, 58, 237, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--purple-3);
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}

.feat-card:hover .feat-icon {
  box-shadow: 0 0 24px rgba(124, 58, 237, 0.35);
}

.feat-card h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
}

.feat-card p {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.65;
  position: relative;
  z-index: 1;
}

/* ── HOW IT WORKS ── */
.how-it-works {
  padding: 80px 0 120px;
}

.steps {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
}

.step {
  flex: 1;
  max-width: 280px;
  padding: 32px 28px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  transition: all 0.3s;
}

.step:hover {
  border-color: var(--border-hover);
  transform: translateY(-3px);
}

.step-num {
  font-size: 42px;
  font-weight: 900;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 16px;
  letter-spacing: -2px;
}

.step-content h4 {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-1);
  margin-bottom: 8px;
}

.step-content p {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.6;
}

.step-arrow {
  color: var(--text-3);
  font-size: 18px;
  flex-shrink: 0;
}

/* ── CTA ── */
.cta-section {
  padding: 80px 0 120px;
}

.cta-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.08));
  border: 1px solid rgba(124, 58, 237, 0.25);
  padding: 80px 48px;
  text-align: center;
}

.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}

.cta-orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(124,58,237,0.25), transparent 70%);
  top: -150px;
  left: -100px;
}

.cta-orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%);
  bottom: -100px;
  right: -50px;
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-size: 44px;
  font-weight: 800;
  color: var(--text-1);
  letter-spacing: -0.8px;
  margin-bottom: 14px;
  line-height: 1.2;
}

.cta-content p {
  font-size: 17px;
  color: var(--text-2);
  margin-bottom: 36px;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  border-radius: 13px;
  font-size: 16px;
  font-weight: 700;
  background: var(--gradient);
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 0 0 rgba(124, 58, 237, 0);
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 48px rgba(124, 58, 237, 0.45);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .hero .container {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .hero-inner { max-width: 100%; }
  .hero-title { font-size: 48px; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .steps { flex-direction: column; align-items: stretch; }
  .step { max-width: 100%; }
  .step-arrow { transform: rotate(90deg); align-self: center; }
}

@media (max-width: 768px) {
  .hero { padding: 80px 0 60px; }
  .hero-title { font-size: 38px; }
  .hero-desc { font-size: 15px; }
  .section-title { font-size: 30px; }
  .stats-inner { flex-wrap: wrap; gap: 28px; padding: 28px 0; }
  .stat { padding: 0 24px; }
  .stat-divider { display: none; }
  .features-grid { grid-template-columns: 1fr; }
  .cta-content h2 { font-size: 30px; }
  .cta-card { padding: 48px 24px; }
  .f-card-2, .f-card-3 { display: none; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 32px; }
  .hero-actions { flex-direction: column; }
  .btn-primary, .btn-outline { width: 100%; justify-content: center; }
}
</style>
