<template>
  <main class="portfolio-page">
    <!-- Hero / About Introduction -->
    <section class="container hero-section">
      <div class="hero-split">
        <div class="hero-text-col">
          <div class="page-eyebrow animate-fade-up" v-fade-up>
            <span class="eyebrow-dot"></span>
            <span class="text-small-caps text-gold">Aman Kumar &bull; Data Science &amp; Computing Undergraduate &bull; IIT Madras</span>
          </div>

          <h1 class="hero-headline animate-fade-up delay-100" v-fade-up>
            Building intelligent<br />
            systems and solving<br />
            complex problems<br />
            with data and code.
          </h1>

          <p class="hero-bio animate-fade-up delay-200" v-fade-up>
            Undergraduate student pursuing a <strong>B.S. in Data Science and Applications</strong> at the <strong>Indian Institute of Technology Madras</strong>. Combining mathematical rigor, machine learning, and systems engineering to design reliable computational models, full-stack software architectures, and data-driven solutions.
          </p>

          <div class="hero-ctas animate-fade-up delay-300" v-fade-up>
            <router-link to="/projects" class="btn btn-gold">
              <span>View Projects</span>
              <span class="btn-arrow">&#8594;</span>
            </router-link>
            <router-link to="/experience" class="btn btn-outline">
              <span>Experience &amp; Achievements</span>
            </router-link>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="Download Aman Kumar's Resume (PDF)">Resume (PDF)</a>
          </div>
        </div>

        <div class="hero-photo-col animate-fade-up delay-200" v-fade-up>
          <div class="photo-frame-wrapper">
            <div class="photo-corner top-left"></div>
            <div class="photo-corner top-right"></div>
            <div class="photo-corner bottom-left"></div>
            <div class="photo-corner bottom-right"></div>
            <div class="photo-inner-box">
              <img 
                src="/photo.png" 
                alt="Aman Kumar - Data Science and Software Engineering Student at IIT Madras" 
                class="hero-portrait"
                width="1856"
                height="2262"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Bar -->
      <div class="quick-highlights-bar animate-fade-up delay-300" v-fade-up>
        <div class="highlight-item">
          <span class="highlight-label">INSTITUTION</span>
          <span class="highlight-val text-gold">IIT Madras (B.S. DS)</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">RESEARCH ALLOTMENT</span>
          <span class="highlight-val text-cyan">Aerospace Dept &bull; AVASYA</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">GLOBAL SELECTION</span>
          <span class="highlight-val text-emerald">GCI World 2026 (UTokyo)</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">ACADEMIC RECORD</span>
          <span class="highlight-val text-gold">8.59 CGPA</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">DIGITAL INITIATIVE</span>
          <span class="highlight-val">AKcollegeReview</span>
        </div>
      </div>
    </section>

    <!-- SECTION 1: Introduction & Research Interests -->
    <section class="container section" id="research-interests">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Core Intellectual Focus</div>
        <h2 class="section-title">Introduction &amp; Research Interests</h2>
        <p class="section-intro">
          My primary research inquiry and academic interests lie at the intersection of mathematical theory, machine learning architectures, and aerospace computational modeling. I prioritize reproducible methodology, algorithmic efficiency, and foundational understanding.
        </p>
      </div>

      <div class="interests-cards-grid animate-fade-up delay-100" v-fade-up>
        <!-- Card 1: Machine Learning & AI -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <circle cx="12" cy="5" r="2"></circle>
              <circle cx="5" cy="19" r="2"></circle>
              <circle cx="19" cy="19" r="2"></circle>
              <path d="M6.5 17.5 10.5 6.5"></path>
              <path d="M17.5 17.5 13.5 6.5"></path>
              <path d="M7 19h10"></path>
            </svg>
          </div>
          <h3 class="interest-title">Artificial Intelligence &amp; Deep Learning</h3>
          <p class="interest-desc">
            Investigating predictive architectures, supervised &amp; unsupervised learning algorithms, neural representations, and scalable statistical inference models.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">Supervised ML</span>
            <span class="chip">Neural Networks</span>
            <span class="chip">Deep Learning</span>
            <span class="chip">Optimization</span>
          </div>
        </div>

        <!-- Card 2: Data Science & Statistical Inference -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M3 3v18h18"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>
          </div>
          <h3 class="interest-title">Data Science &amp; Statistical Analysis</h3>
          <p class="interest-desc">
            Extracting meaningful signals from complex data through probability distributions, exploratory data analysis, hypothesis testing, and rigorous statistical modeling.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">Statistical Modeling</span>
            <span class="chip">Probability Theory</span>
            <span class="chip">Exploratory Analysis</span>
            <span class="chip">Inference</span>
          </div>
        </div>

        <!-- Card 3: Aerospace Optimisation & Embedded AI -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h3 class="interest-title">Aerospace Optimisation &amp; Embedded AI</h3>
          <p class="interest-desc">
            Investigating energy-efficient LiDAR mapping and sensor scheduling for battery-constrained UAVs within AVASYA Aerospace at IIT Madras, optimizing spatial density and flight endurance.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">LiDAR Mapping</span>
            <span class="chip">Sensor Scheduling</span>
            <span class="chip">Embedded AI</span>
            <span class="chip">Power Management</span>
          </div>
        </div>

        <!-- Card 4: Geophysical Signal Processing & ML -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
          </div>
          <h3 class="interest-title">Geophysical Signal Processing &amp; ML</h3>
          <p class="interest-desc">
            Applying machine learning to UAV magnetic anomaly detection, isolating subterranean and archaeological signatures from natural geological variations and drone electromagnetic noise.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">Magnetic Anomaly Detection</span>
            <span class="chip">Geophysical ML</span>
            <span class="chip">Noise Disentanglement</span>
            <span class="chip">Time-Series Signals</span>
          </div>
        </div>

        <!-- Card 5: Algorithms & Computational Complexity -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h3 class="interest-title">Algorithm Design &amp; Complexity</h3>
          <p class="interest-desc">
            Analyzing asymptotic time-space complexity, designing dynamic programming strategies, mastering graph algorithms, and active competitive problem-solving across contest platforms.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">Graph Theory</span>
            <span class="chip">Dynamic Programming</span>
            <span class="chip">Asymptotic Analysis</span>
            <span class="chip">Trees &amp; Heaps</span>
          </div>
        </div>

        <!-- Card 6: Large Language Models & Modern AI -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3 class="interest-title">Large Language Models &amp; AI Systems</h3>
          <p class="interest-desc">
            Exploring generative models, context augmentation (RAG), prompt-chaining frameworks (LangChain, LangGraph), and agentic workflows for scalable software automation.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">LLMs</span>
            <span class="chip">Prompt Engineering</span>
            <span class="chip">LangChain &amp; LangGraph</span>
            <span class="chip">RAG Systems</span>
          </div>
        </div>

        <!-- Card 6: Scalable Systems & Architecture -->
        <div class="card interest-card">
          <div class="interest-icon-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 class="interest-title">Software Engineering &amp; Systems</h3>
          <p class="interest-desc">
            Architecting multi-tier applications with clean separation of concerns, RESTful APIs, relational databases, role-based access control, and containerization.
          </p>
          <div class="chips-container mt-4">
            <span class="chip">Flask RESTful</span>
            <span class="chip">PostgreSQL &amp; SQLite</span>
            <span class="chip">System Architecture</span>
            <span class="chip">Docker &amp; Linux</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: Technical Skills (Organized in 4 Categories) -->
    <section class="container section" id="technical-skills">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Domain Categorization</div>
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-intro">
          Structured into four functional domains aligned with my software development, data science, and academic research goals.
        </p>
      </div>

      <div class="skills-category-grid animate-fade-up delay-100" v-fade-up>
        <!-- Category 1: Programming -->
        <div class="card skill-category-card">
          <div class="skill-cat-header">
            <div class="cat-badge-wrap">
              <span class="cat-num text-small-caps text-gold">01 &bull; CORE LANGUAGES</span>
              <h3 class="cat-title">Programming</h3>
            </div>
            <div class="cat-icon-badge">
              <span>&lt;/&gt;</span>
            </div>
          </div>
          <p class="cat-desc">
            Foundational programming languages used for algorithmic problem solving, backend systems, database queries, and scientific scripting.
          </p>

          <div class="skills-badge-list">
            <div class="skill-pill-item">
              <span class="skill-name">Python</span>
              <span class="skill-sub">Primary &bull; DS, ML &amp; Backend</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">C++</span>
              <span class="skill-sub">Algorithms &amp; Competitive Programming</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Java</span>
              <span class="skill-sub">Object-Oriented Design &amp; Software</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">SQL</span>
              <span class="skill-sub">Relational Schema &amp; Complex Queries</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">JavaScript</span>
              <span class="skill-sub">Modern Web &amp; Frontend Interaction</span>
            </div>
          </div>
        </div>

        <!-- Category 2: Data Science & ML -->
        <div class="card skill-category-card">
          <div class="skill-cat-header">
            <div class="cat-badge-wrap">
              <span class="cat-num text-small-caps text-gold">02 &bull; DATA &amp; INTELLIGENCE</span>
              <h3 class="cat-title">Data Science &amp; ML</h3>
            </div>
            <div class="cat-icon-badge">
              <span>&#9881;</span>
            </div>
          </div>
          <p class="cat-desc">
            Libraries, numerical packages, and deep learning frameworks applied to model training, multidimensional tensor operations, and exploratory analytics.
          </p>

          <div class="skills-badge-list">
            <div class="skill-pill-item">
              <span class="skill-name">NumPy</span>
              <span class="skill-sub">Multidimensional Array Computing</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Pandas</span>
              <span class="skill-sub">Data Wrangling &amp; Pipeline Operations</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">scikit-learn</span>
              <span class="skill-sub">Classical Machine Learning Algorithms</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">PyTorch</span>
              <span class="skill-sub">Deep Learning &amp; Neural Modeling</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Data Visualization</span>
              <span class="skill-sub">Matplotlib, Seaborn &amp; Dashboards</span>
            </div>
          </div>
        </div>

        <!-- Category 3: Web Development & Tools -->
        <div class="card skill-category-card">
          <div class="skill-cat-header">
            <div class="cat-badge-wrap">
              <span class="cat-num text-small-caps text-gold">03 &bull; SOFTWARE &amp; INFRASTRUCTURE</span>
              <h3 class="cat-title">Web Development &amp; Tools</h3>
            </div>
            <div class="cat-icon-badge">
              <span>&#128187;</span>
            </div>
          </div>
          <p class="cat-desc">
            Full-stack frameworks, relational database engines, containerization, and developer tooling used to architect reliable, deployed user applications.
          </p>

          <div class="skills-badge-list">
            <div class="skill-pill-item">
              <span class="skill-name">Flask</span>
              <span class="skill-sub">RESTful API Architecture &amp; Microservices</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">React</span>
              <span class="skill-sub">Component SPAs &amp; Dynamic UI</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">PostgreSQL</span>
              <span class="skill-sub">Relational DB &bull; ACID Transactions</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Git</span>
              <span class="skill-sub">Version Control &amp; Team Collaboration</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Docker</span>
              <span class="skill-sub">Containerization &amp; Reproducible Setup</span>
            </div>
          </div>
        </div>

        <!-- Category 4: Research & Computing -->
        <div class="card skill-category-card">
          <div class="skill-cat-header">
            <div class="cat-badge-wrap">
              <span class="cat-num text-small-caps text-gold">04 &bull; SCIENTIFIC INQUIRY</span>
              <h3 class="cat-title">Research &amp; Computing</h3>
            </div>
            <div class="cat-icon-badge">
              <span>&#129504;</span>
            </div>
          </div>
          <p class="cat-desc">
            Theoretical paradigms, statistical modeling, algorithmic complexity, and scientific computing methods powering research workflows and technical papers.
          </p>

          <div class="skills-badge-list">
            <div class="skill-pill-item">
              <span class="skill-name">Machine Learning</span>
              <span class="skill-sub">Supervised Models &amp; Anomaly Detection</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Statistical Analysis</span>
              <span class="skill-sub">Hypothesis Testing &amp; Signal Processing</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Algorithm Design</span>
              <span class="skill-sub">Graph Optimization &amp; Dynamic Programming</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Aerospace Optimisation</span>
              <span class="skill-sub">LiDAR Sensor Scheduling &amp; Power Modeling</span>
            </div>
            <div class="skill-pill-item">
              <span class="skill-name">Geophysical Signal Processing</span>
              <span class="skill-sub">Magnetic Anomaly Detection &amp; Filtering</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: Current Focus & Professional Interests -->
    <section class="container section" id="current-focus">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Continuous Growth &amp; Trajectory</div>
        <h2 class="section-title">Current Focus &amp; Professional Interests</h2>
        <p class="section-intro">
          Technologies and domains I am actively exploring, alongside professional aspirations and high-impact internship objectives.
        </p>
      </div>

      <div class="focus-split-container animate-fade-up delay-100" v-fade-up>
        <!-- Left: Active Technical Explorations -->
        <div class="card focus-col-card">
          <div class="focus-card-header">
            <span class="text-small-caps text-gold">Active Deep Dives</span>
            <h3 class="focus-card-title">Currently Exploring &amp; Experimenting</h3>
          </div>
          <p class="focus-card-p">
            Currently deepening my applied engineering competencies in advanced AI systems, aerospace optimization, and signal processing:
          </p>

          <div class="exploring-badges-grid">
            <div class="explore-item">
              <div class="explore-dot"></div>
              <div>
                <span class="explore-name">PyTorch</span>
                <span class="explore-note">Deep learning architectures &amp; tensor computations</span>
              </div>
            </div>

            <div class="explore-item">
              <div class="explore-dot"></div>
              <div>
                <span class="explore-name">Embedded AI &amp; LiDAR Scheduling</span>
                <span class="explore-note">Energy-efficient UAV sensor allocation &amp; battery trade-offs</span>
              </div>
            </div>

            <div class="explore-item">
              <div class="explore-dot"></div>
              <div>
                <span class="explore-name">Geophysical Anomaly Detection</span>
                <span class="explore-note">ML signal filtering to isolate subterranean magnetic features</span>
              </div>
            </div>

            <div class="explore-item">
              <div class="explore-dot"></div>
              <div>
                <span class="explore-name">LangChain &amp; LangGraph</span>
                <span class="explore-note">Stateful agentic workflows &amp; multi-agent architectures</span>
              </div>
            </div>

            <div class="explore-item">
              <div class="explore-dot"></div>
              <div>
                <span class="explore-name">Large Language Models (LLMs)</span>
                <span class="explore-note">Context reasoning, fine-tuning, and semantic retrieval</span>
              </div>
            </div>

            <div class="explore-item">
              <div class="explore-dot"></div>
              <div>
                <span class="explore-name">Competitive Programming</span>
                <span class="explore-note">Daily problem solving across Codeforces, LeetCode &amp; AtCoder</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Professional Goals & Internship Targets -->
        <div class="card focus-col-card">
          <div class="focus-card-header">
            <span class="text-small-caps text-gold">Career &amp; Engineering Goals</span>
            <h3 class="focus-card-title">Professional Interests &amp; Aspirations</h3>
          </div>
          <p class="focus-card-p">
            Actively seeking technical internships and research engagements where I can contribute analytical rigor and engineering discipline:
          </p>

          <div class="goals-list">
            <div class="goal-item">
              <div class="goal-bullet">&#10003;</div>
              <div>
                <h4 class="goal-title">Software Engineering Internships</h4>
                <p class="goal-desc">
                  Building backend services, clean REST APIs, database schemas, and robust user-facing platforms using Python, Flask, React, and SQL.
                </p>
              </div>
            </div>

            <div class="goal-item">
              <div class="goal-bullet">&#10003;</div>
              <div>
                <h4 class="goal-title">Data Science &amp; Machine Learning Roles</h4>
                <p class="goal-desc">
                  Applying predictive modeling, feature engineering, exploratory data analysis, and machine learning pipelines to solve complex business and scientific challenges.
                </p>
              </div>
            </div>

            <div class="goal-item">
              <div class="goal-bullet">&#10003;</div>
              <div>
                <h4 class="goal-title">Aerospace &amp; Computational Research</h4>
                <p class="goal-desc">
                  Contributing to numerical physics models, trajectory simulations, and algorithmic pipelines in aerospace and autonomous systems.
                </p>
              </div>
            </div>

            <div class="goal-item">
              <div class="goal-bullet">&#10003;</div>
              <div>
                <h4 class="goal-title">Technical Education &amp; Developer Community</h4>
                <p class="goal-desc">
                  Continuing student mentorship, clear educational communication, and open knowledge sharing through digital channels like AKcollegeReview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: Navigation / Call to Action -->
    <section class="container compact-section text-center animate-fade-up" v-fade-up>
      <div class="cta-inner-box card">
        <h2 class="mb-4">Explore My Academic &amp; Professional Footprint</h2>
        <p class="cta-subtitle mx-auto mb-8">
          Delve into my research with AVASYA Aerospace at IIT Madras, check the UTokyo GCI selection details, inspect live competitive programming ratings, or review completed software systems.
        </p>
        <div class="cta-buttons">
          <router-link to="/experience" class="btn btn-gold">
            <span>Experience &amp; Achievements</span>
            <span class="btn-arrow">&#8594;</span>
          </router-link>
          <router-link to="/education" class="btn btn-outline">Academic Qualifications</router-link>
          <router-link to="/profiles" class="btn btn-outline">Online Profiles</router-link>
          <router-link to="/projects" class="btn btn-outline">View Projects</router-link>
          <router-link to="/contact" class="btn btn-outline">Contact Me</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// About / Home Page
</script>

<style scoped>
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }

.text-cyan {
  color: #38bdf8;
}
.text-emerald {
  color: #10b981;
}

.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: auto;
}

.compact-section {
  padding-top: 3.5rem;
  padding-bottom: 4rem;
}

/* Hero Section */
.hero-section {
  padding-top: 4rem;
  padding-bottom: 3.5rem;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-split {
  display: flex;
  align-items: center;
  gap: 4.5rem;
  justify-content: space-between;
}
@media (max-width: 960px) {
  .hero-split {
    flex-direction: column-reverse;
    gap: 3rem;
    text-align: center;
  }
}

.hero-text-col {
  flex: 1.2;
  max-width: 650px;
}

.page-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-gold);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
}

.hero-headline {
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  line-height: 1.15;
  margin-bottom: 2rem;
  color: var(--text-light);
  font-family: var(--font-serif);
}
.theme-light .hero-headline {
  color: var(--text-dark);
}

.hero-bio {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 2.75rem;
  font-weight: 300;
}
.hero-bio strong {
  color: var(--text-light);
  font-weight: 500;
}
.theme-light .hero-bio strong {
  color: var(--text-dark);
}

.hero-ctas {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
}
@media (max-width: 960px) {
  .hero-ctas {
    justify-content: center;
  }
}

/* Portrait Styling */
.hero-photo-col {
  flex: 0.8;
  display: flex;
  justify-content: center;
}

.photo-frame-wrapper {
  position: relative;
  padding: 1rem;
  border: 1px solid var(--border-dark);
  background: rgba(255, 255, 255, 0.015);
  display: inline-block;
}
.theme-light .photo-frame-wrapper {
  border-color: var(--border-light);
  background: rgba(0, 0, 0, 0.02);
}

.photo-inner-box {
  position: relative;
  overflow: hidden;
  max-width: 380px;
  background: #1a1a1a;
  border: 1px solid var(--border-dark);
}
.hero-portrait {
  width: 100%;
  height: auto;
  display: block;
  filter: grayscale(100%) contrast(1.15);
  transition: transform 0.5s ease, filter 0.5s ease;
}
.photo-frame-wrapper:hover .hero-portrait {
  filter: grayscale(40%) contrast(1.1);
  transform: scale(1.02);
}

.photo-corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: var(--accent-gold);
}
.top-left { top: -1px; left: -1px; border-top: 2px solid var(--accent-gold); border-left: 2px solid var(--accent-gold); }
.top-right { top: -1px; right: -1px; border-top: 2px solid var(--accent-gold); border-right: 2px solid var(--accent-gold); }
.bottom-left { bottom: -1px; left: -1px; border-bottom: 2px solid var(--accent-gold); border-left: 2px solid var(--accent-gold); }
.bottom-right { bottom: -1px; right: -1px; border-bottom: 2px solid var(--accent-gold); border-right: 2px solid var(--accent-gold); }

.photo-caption-tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}
.caption-name {
  color: var(--accent-gold);
  font-weight: 600;
}
.caption-inst {
  color: var(--text-muted);
}

/* Quick Highlights Metric Bar */
.quick-highlights-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.75rem;
  margin-top: 3.5rem;
  padding: 1.25rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  border-radius: 4px;
}
.theme-light .quick-highlights-bar {
  background: rgba(0, 0, 0, 0.02);
  border-color: var(--border-light);
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.highlight-label {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-weight: 600;
}
.highlight-val {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-light);
}
.theme-light .highlight-val {
  color: var(--text-dark);
}

.highlight-divider {
  width: 1px;
  height: 28px;
  background: var(--border-dark);
}
.theme-light .highlight-divider {
  background: var(--border-light);
}

/* Section Header Block */
.section-header-block {
  margin-bottom: 3.5rem;
}
.section-tag {
  font-size: 0.72rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.15em;
}
.section-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  margin-bottom: 1rem;
  color: var(--text-light);
}
.theme-light .section-title {
  color: var(--text-dark);
}
.section-intro {
  font-size: 1.05rem;
  max-width: 780px;
  line-height: 1.7;
  color: var(--text-muted);
}

/* Interests Grid */
.interests-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
@media (max-width: 1024px) {
  .interests-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .interests-cards-grid {
    grid-template-columns: 1fr;
  }
}

.interest-card {
  padding: 2.25rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  transition: all var(--transition-fast);
  display: flex;
  flex-direction: column;
}
.theme-light .interest-card {
  background: var(--card-bg-light);
  border-color: var(--border-light);
}
.interest-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.interest-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 4px;
  background: rgba(212, 175, 55, 0.1);
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.interest-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--text-light);
  font-family: var(--font-serif);
}
.theme-light .interest-title {
  color: var(--text-dark);
}

.interest-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-muted);
  flex: 1;
}

/* Technical Skills Grid (4 Categories) */
.skills-category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (max-width: 860px) {
  .skills-category-grid {
    grid-template-columns: 1fr;
  }
}

.skill-category-card {
  padding: 2.75rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  transition: all var(--transition-fast);
  position: relative;
}
.theme-light .skill-category-card {
  background: var(--card-bg-light);
  border-color: var(--border-light);
}
.skill-category-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
  transform: translateY(-2px);
}

.skill-cat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}
.cat-num {
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  margin-bottom: 0.35rem;
  display: block;
}
.cat-title {
  font-size: 1.6rem;
  color: var(--text-light);
  font-family: var(--font-serif);
}
.theme-light .cat-title {
  color: var(--text-dark);
}

.cat-icon-badge {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.cat-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.skills-badge-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-pill-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1.25rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-fast);
}
.theme-light .skill-pill-item {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.06);
}
.skill-pill-item:hover {
  background: rgba(212, 175, 55, 0.05);
  border-color: rgba(212, 175, 55, 0.3);
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-light);
  font-family: var(--font-sans);
}
.theme-light .skill-name {
  color: var(--text-dark);
}

.skill-sub {
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* Current Focus & Interests */
.focus-split-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (max-width: 860px) {
  .focus-split-container {
    grid-template-columns: 1fr;
  }
}

.focus-col-card {
  padding: 2.75rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  display: flex;
  flex-direction: column;
}
.theme-light .focus-col-card {
  background: var(--card-bg-light);
  border-color: var(--border-light);
}

.focus-card-header {
  margin-bottom: 1rem;
}
.focus-card-title {
  font-size: 1.5rem;
  margin-top: 0.4rem;
  color: var(--text-light);
  font-family: var(--font-serif);
}
.theme-light .focus-card-title {
  color: var(--text-dark);
}

.focus-card-p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.exploring-badges-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.explore-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}
.theme-light .explore-item {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.05);
}

.explore-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-gold);
  margin-top: 0.4rem;
  flex-shrink: 0;
}

.explore-name {
  display: block;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 0.2rem;
}
.theme-light .explore-name {
  color: var(--text-dark);
}

.explore-note {
  display: block;
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.4;
}

.goals-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.goal-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.goal-bullet {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.goal-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 0.35rem;
  font-family: var(--font-sans);
}
.theme-light .goal-title {
  color: var(--text-dark);
}

.goal-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

/* Chips */
.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}
.chip {
  font-size: 0.7rem;
  letter-spacing: 0.06em;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  color: var(--text-muted);
  text-transform: uppercase;
}
.theme-light .chip {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--border-light);
}

/* CTA Box */
.cta-inner-box {
  padding: 4rem 2rem;
  border: 1px solid var(--border-dark);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.015) 0%, rgba(212, 175, 55, 0.04) 100%);
}
.theme-light .cta-inner-box {
  border-color: var(--border-light);
  background: #fdfdfd;
}
.cta-subtitle {
  max-width: 680px;
  font-size: 1.05rem;
  line-height: 1.7;
}
.cta-buttons {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-arrow {
  margin-left: 0.4rem;
}

@media (max-width: 768px) {
  .hero-section {
    padding-top: 2rem;
  }
  .skill-category-card, .focus-col-card, .interest-card {
    padding: 2rem 1.5rem;
  }
}
</style>
