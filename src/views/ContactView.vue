<template>
  <main class="contact-page">
    <section class="container" style="padding-top: 6rem; padding-bottom: 6rem;">
      <div class="contact-layout">
        
        <!-- LEFT COLUMN -->
        <div class="left-col animate-fade-up" v-fade-up>
          <h1 class="main-title">
            <span class="text-white">Let's<br/>Connect &</span>
            <svg class="title-sparkle" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3v18M3 12h18M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"/>
            </svg>
            <br/>
            <span class="text-gold" style="font-style: italic;">Create Impact.</span>
          </h1>
          
          <div class="divider"></div>

          <p class="description">
            I'm always open to discussing new opportunities, collaborations, research, and innovative ideas. Let's build something meaningful together.
          </p>

          <div class="contact-list">
            <div class="contact-item">
              <div class="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="contact-details">
                <span class="text-small-caps label">Email</span>
                <span class="value">amankumar.pro2006@gmail.com</span>
              </div>
            </div>

            

            <div class="contact-item">
              <div class="icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="contact-details">
                <span class="text-small-caps label">Location</span>
                <span class="value">Agra, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          <div class="quote-card card">
            <svg class="quote-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v12c0 4 0 4 1 4z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v12c0 4 0 4 1 4z"></path>
            </svg>
            <p class="quote-text">
              Driven by curiosity, guided by purpose, focused on building a better tomorrow.
            </p>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="right-col animate-fade-up delay-200" v-fade-up>
          
          <!-- GET IN TOUCH GRID -->
          <div class="section-header">
            <p class="text-small-caps text-gold">Get In Touch</p>
            <div class="header-line"></div>
          </div>
          
          <div class="contact-grid">
            <a href="mailto:amankumar.pro2006@gmail.com" class="grid-card">
              <div class="card-header">
                <div class="icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h3 class="card-title">Email Me</h3>
              </div>
              <p class="card-desc">Drop me an email and I'll get back to you.</p>
              <p class="card-link">amankumar.pro2006@gmail.com</p>
            </a>

            <a href="https://www.linkedin.com/in/aman-kumar-212878358/" target="_blank" class="grid-card">
              <div class="card-header">
                <div class="icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <h3 class="card-title">LinkedIn</h3>
              </div>
              <p class="card-desc">Let's connect and grow our network.</p>
              <p class="card-link">linkedin.com/in/aman-kumar-212878358</p>
            </a>

            <a href="https://github.com/Amankumar270306" target="_blank" class="grid-card">
              <div class="card-header">
                <div class="icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
                <h3 class="card-title">GitHub</h3>
              </div>
              <p class="card-desc">Explore my projects, code, and contributions.</p>
              <p class="card-link">github.com/Amankumar270306</p>
            </a>

            <a href="#" class="grid-card">
              <div class="card-header">
                <div class="icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 class="card-title">Resume</h3>
              </div>
              <p class="card-desc">View or download my latest resume.</p>
              <p class="card-link flex-link">
                Download Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 0.25rem;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </p>
            </a>
          </div>

          <!-- LETS COLLABORATE ROW -->
          <div class="section-header" style="margin-top: 3rem;">
            <p class="text-small-caps text-gold">Let's Collaborate</p>
            <div class="header-line"></div>
          </div>

          <div class="collaborate-tags">
            <div class="collab-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Projects
            </div>
            <div class="collab-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6l4 10H5L9 9Z"></path><path d="M9 13h6"></path></svg>
              Research
            </div>
            <div class="collab-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Internships
            </div>
            <div class="collab-tag">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3-6 6"></path><path d="m8.36 12.59-2.13-2.13a2.5 2.5 0 0 0-3.53 0l-1.42 1.42a2.5 2.5 0 0 0 0 3.54l2.13 2.12"></path></svg>
              Opportunities
            </div>
          </div>

          <!-- BOTTOM BANNER -->
          <div class="card cta-banner">
            <div class="cta-content">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 0.25rem;">
                <path d="M12 3v18M3 12h18M12 3c0 4.97-4.03 9-9 9 4.97 0 9 4.03 9 9 0-4.97 4.03-9 9-9-4.97 0-9-4.03-9-9z"/>
              </svg>
              <div>
                <h4 style="color: white; margin-bottom: 0.25rem; font-family: var(--font-sans); font-size: 1.05rem;">Have an idea or project in mind?</h4>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0;">I'm excited to hear about it and explore how we can work together.</p>
              </div>
            </div>
            <a href="mailto:amankumar.pro2006@gmail.com" class="btn btn-gold btn-send">
              SEND MESSAGE
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 0.5rem;"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.contact-layout {
  display: flex;
  gap: 4rem;
  align-items: stretch;
}
.left-col {
  flex: 0 0 400px;
  display: flex;
  flex-direction: column;
}
.right-col {
  flex: 1;
}

/* LEFT COLUMN STYLES */
.main-title {
  font-size: clamp(3.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 2rem;
  position: relative;
}
.text-white {
  color: white;
}
.title-sparkle {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
}

.divider {
  width: 2rem;
  height: 2px;
  background: var(--accent-gold);
  margin-bottom: 2rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #ccc;
  margin-bottom: 3rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-item {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.contact-details .label {
  color: var(--text-muted);
}
.contact-details .value {
  color: white;
  font-size: 1.05rem;
  font-weight: 500;
}

.quote-card {
  margin-top: auto;
  background: var(--card-bg-dark);
  padding: 2rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  border-left: 2px solid var(--accent-gold);
}
.quote-icon {
  flex-shrink: 0;
  opacity: 0.8;
}
.quote-text {
  color: #ddd;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  font-style: italic;
}


/* RIGHT COLUMN STYLES */
.section-header {
  margin-bottom: 1.5rem;
}
.header-line {
  width: 2rem;
  height: 1px;
  background: var(--accent-gold);
  margin-top: 0.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.grid-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: transparent;
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  text-decoration: none;
  transition: all var(--transition-normal);
}
.grid-card:hover {
  border-color: var(--accent-gold);
  background: rgba(255, 255, 255, 0.02);
  transform: translateY(-3px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--accent-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.card-title {
  color: white;
  font-size: 1.2rem;
  font-family: var(--font-sans);
  margin: 0;
}
.card-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.5;
  flex-grow: 1;
}
.card-link {
  color: var(--accent-gold);
  font-size: 0.9rem;
  margin: 0;
}
.flex-link {
  display: inline-flex;
  align-items: center;
}

/* LETS COLLABORATE ROW */
.collaborate-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}
.collab-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.5rem;
  border: 1px solid var(--border-dark);
  border-radius: 4px;
  color: white;
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  background: transparent;
}
.collab-tag:hover {
  border-color: var(--accent-gold);
  background: rgba(255, 255, 255, 0.02);
}

/* BOTTOM CTA BANNER */
.cta-banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem 2rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  margin-top: 1rem;
}
.cta-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  max-width: 65%;
}
.btn-send {
  border-radius: 4px;
  padding: 0.85rem 1.5rem;
}

@media (max-width: 1024px) {
  .contact-layout {
    flex-direction: column;
  }
  .left-col {
    flex: auto;
    width: 100%;
    margin-bottom: 2rem;
  }
  .title-sparkle {
    position: relative;
    top: auto;
    right: auto;
    margin-left: 1rem;
    vertical-align: middle;
  }
}
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .cta-banner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .cta-content {
    max-width: 100%;
  }
  .btn-send {
    width: 100%;
  }
}
</style>
