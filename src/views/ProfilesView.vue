<template>
  <main class="portfolio-page">
    <!-- Hero Header -->
    <section class="container section hero-section">
      <div class="page-eyebrow animate-fade-up" v-fade-up>
        <span class="eyebrow-dot"></span>
        <span class="text-small-caps text-gold">Consolidated Developer Footprint &amp; Presence</span>
      </div>
      <h1 class="animate-fade-up delay-100" v-fade-up style="max-width: 900px;">
        Online Profiles &amp;<br />Technical Presence
      </h1>
      <p class="animate-fade-up delay-200 subtitle" v-fade-up>
        A consolidated overview of my competitive programming performance, open-source engineering repositories, machine learning exploration, and professional networks.
      </p>

      <!-- Category Fast Nav Pills -->
      <div class="category-nav-bar animate-fade-up delay-300" v-fade-up>
        <a href="#competitive-programming" class="category-nav-pill">
          <span class="pill-icon">&#9889;</span>
          <span>Competitive Programming</span>
        </a>
        <a href="#ds-ml" class="category-nav-pill">
          <span class="pill-icon">&#129504;</span>
          <span>Data Science &amp; ML</span>
        </a>
        <a href="#development-oss" class="category-nav-pill">
          <span class="pill-icon">&#128187;</span>
          <span>Development &amp; Open Source</span>
        </a>
        <a href="#professional-research" class="category-nav-pill">
          <span class="pill-icon">&#127760;</span>
          <span>Professional &amp; Research</span>
        </a>
      </div>
    </section>

    <!-- CATEGORY A: Competitive Programming -->
    <section class="container section" id="competitive-programming">
      <div class="cp-section-header animate-fade-up" v-fade-up>
        <div>
          <div class="section-tag text-small-caps text-gold">Category A</div>
          <h2 class="section-title mb-2">Competitive Programming</h2>
          <p class="cp-section-subtitle">
            Real-time rating, contest performance, and algorithmic problem-solving scores dynamically connected to each platform's live API.
          </p>
        </div>
        <button 
          @click="refreshAllScores" 
          class="btn btn-outline btn-sm sync-action-btn" 
          :disabled="isSyncing" 
          title="Refresh latest ratings from platforms"
        >
          <span class="sync-icon" :class="{ 'spin-active': isSyncing }">&#8635;</span>
          <span>{{ isSyncing ? 'Fetching...' : 'Sync Live Ratings' }}</span>
        </button>
      </div>

      <div class="cp-grid animate-fade-up delay-100" v-fade-up>
        <!-- Codeforces Card -->
        <div class="card cp-card">
          <div class="cp-header">
            <div class="cp-icon-wrap codeforces-glow">
              <svg class="cp-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="9" width="4.5" height="12" rx="1.5" fill="#FFD225"/>
                <rect x="9.75" y="3" width="4.5" height="18" rx="1.5" fill="#3B82F6"/>
                <rect x="17.5" y="6" width="4.5" height="15" rx="1.5" fill="#EF4444"/>
              </svg>
            </div>
            <span class="badge badge-outline cp-badge">Div. 2 &amp; 3</span>
          </div>

          <h3 class="cp-title">Codeforces</h3>
          <p class="text-small-caps text-gold mb-3">Global Timed Rounds</p>

          <!-- Score Showcase -->
          <div class="score-card-section mb-6">
            <div class="score-meta-top">
              <div class="score-live-tag">
                <span class="live-dot" :class="{ 'pulsing': profiles.codeforces.isLive }"></span>
                <span class="live-text">{{ profiles.codeforces.isLive ? 'LIVE RATING' : (profiles.codeforces.isLoading ? 'SYNCING...' : 'RATING') }}</span>
              </div>
              <span class="rank-pill" :style="{ borderColor: profiles.codeforces.rankColor, color: profiles.codeforces.rankColor }">
                {{ profiles.codeforces.rank }}
              </span>
            </div>

            <div class="score-value-display">
              <div class="score-number">{{ profiles.codeforces.rating }}</div>
              <div class="score-sub-label">CURRENT RATING</div>
            </div>

            <div class="score-submetrics">
              <div class="submetric-item">
                <span class="submetric-label">MAX RATING</span>
                <span class="submetric-value">{{ profiles.codeforces.maxRating }}</span>
              </div>
              <div class="submetric-item">
                <span class="submetric-label">RANK</span>
                <span class="submetric-value">{{ profiles.codeforces.rank }}</span>
              </div>
              <div class="submetric-item">
                <span class="submetric-label">STATUS</span>
                <span class="submetric-value">{{ profiles.codeforces.thirdMetric.val }}</span>
              </div>
            </div>
          </div>

          <div class="cp-handle-box mb-4">
            <span class="handle-label">Handle</span>
            <a href="https://codeforces.com/profile/amankumar.pro" target="_blank" rel="noopener noreferrer" class="handle-tag">
              @amankumar.pro
            </a>
          </div>

          <p class="cp-desc mb-6">
            {{ profiles.codeforces.desc }}
          </p>

          <div class="cp-topics mb-8">
            <h5 class="text-small-caps text-muted mb-3">Core Focus</h5>
            <div class="chips-container">
              <span v-for="t in profiles.codeforces.topics" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>

          <div class="mt-auto">
            <a href="https://codeforces.com/profile/amankumar.pro" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cp-btn">
              <span>View Codeforces Profile</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>

        <!-- CodeChef Card -->
        <div class="card cp-card">
          <div class="cp-header">
            <div class="cp-icon-wrap codechef-glow">
              <svg class="cp-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.153 9.0766.4236 8.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.8925 1.3516 0 .054-.054.1079-.054.1079-.4325.865-.4873 1.73-.325 2.5952.1621.5407.3786 1.0282.5408 1.5148.3785 1.0274.7578 2.0007.92 3.1362.1622.3244.3235.7571.4316 1.1897.2704.8651.542 1.8383 1.353 2.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.9733 1.5673-1.6221 2.865-1.8925.5195-.1093 1.081-.1497 1.6625-.1278a8.7733 8.7733 0 0 1 1.7988.2357c1.4599.3785 2.595 1.1358 2.6492 1.7846.0273.3549.0398.6952.0326 1.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.9733 1.0266-1.8382 1.6213-2.6492.9733-1.3518 1.8928-2.5962 1.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.0428 14.3788a9.8602 9.8602 0 0 0-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.811 1.8925l.0511 1.431c.6672-.3558 1.7326-.8747 3.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.044 1.6075 0 3.2682.5336 4.8767 1.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888z"/>
              </svg>
            </div>
            <span class="badge badge-outline cp-badge">Division 4</span>
          </div>

          <h3 class="cp-title">CodeChef</h3>
          <p class="text-small-caps text-gold mb-3">Rated Contests &amp; Starters</p>

          <!-- Score Showcase -->
          <div class="score-card-section mb-6">
            <div class="score-meta-top">
              <div class="score-live-tag">
                <span class="live-dot" :class="{ 'pulsing': profiles.codechef.isLive }"></span>
                <span class="live-text">{{ profiles.codechef.isLive ? 'LIVE RATING' : (profiles.codechef.isLoading ? 'SYNCING...' : 'RATING') }}</span>
              </div>
              <span class="rank-pill" :style="{ borderColor: profiles.codechef.rankColor, color: profiles.codechef.rankColor }">
                {{ profiles.codechef.rank }}
              </span>
            </div>

            <div class="score-value-display">
              <div class="score-number">{{ profiles.codechef.rating }}</div>
              <div class="score-sub-label">CURRENT RATING</div>
            </div>

            <div class="score-submetrics">
              <div class="submetric-item">
                <span class="submetric-label">MAX RATING</span>
                <span class="submetric-value">{{ profiles.codechef.maxRating }}</span>
              </div>
              <div class="submetric-item">
                <span class="submetric-label">DIVISION</span>
                <span class="submetric-value">{{ profiles.codechef.extraMetric.val }}</span>
              </div>
              <div class="submetric-item">
                <span class="submetric-label">STARS</span>
                <span class="submetric-value">{{ profiles.codechef.thirdMetric.val }}</span>
              </div>
            </div>
          </div>

          <div class="cp-handle-box mb-4">
            <span class="handle-label">Handle</span>
            <a href="https://www.codechef.com/users/amankumarpro" target="_blank" rel="noopener noreferrer" class="handle-tag">
              @amankumarpro
            </a>
          </div>

          <p class="cp-desc mb-6">
            {{ profiles.codechef.desc }}
          </p>

          <div class="cp-topics mb-8">
            <h5 class="text-small-caps text-muted mb-3">Core Focus</h5>
            <div class="chips-container">
              <span v-for="t in profiles.codechef.topics" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>

          <div class="mt-auto">
            <a href="https://www.codechef.com/users/amankumarpro" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cp-btn">
              <span>View CodeChef Profile</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>

        <!-- AtCoder Card -->
        <div class="card cp-card">
          <div class="cp-header">
            <div class="cp-icon-wrap atcoder-glow">
              <img src="/atcoder.svg" alt="AtCoder Logo" class="cp-icon atcoder-icon" />
            </div>
            <span class="badge badge-outline cp-badge">ABC &amp; ARC</span>
          </div>

          <h3 class="cp-title">AtCoder</h3>
          <p class="text-small-caps text-gold mb-3">Japanese Algorithmic Contests</p>

          <!-- Score Showcase -->
          <div class="score-card-section mb-6">
            <div class="score-meta-top">
              <div class="score-live-tag">
                <span class="live-dot" :class="{ 'pulsing': profiles.atcoder.isLive }"></span>
                <span class="live-text">{{ profiles.atcoder.isLive ? 'LIVE RATING' : (profiles.atcoder.isLoading ? 'SYNCING...' : 'RATING') }}</span>
              </div>
              <span class="rank-pill" :style="{ borderColor: profiles.atcoder.rankColor, color: profiles.atcoder.rankColor }">
                {{ profiles.atcoder.rank }}
              </span>
            </div>

            <div class="score-value-display">
              <div class="score-number">{{ profiles.atcoder.rating }}</div>
              <div class="score-sub-label">CURRENT RATING</div>
            </div>

            <div class="score-submetrics">
              <div class="submetric-item">
                <span class="submetric-label">MAX RATING</span>
                <span class="submetric-value">{{ profiles.atcoder.maxRating }}</span>
              </div>
              <div class="submetric-item">
                <span class="submetric-label">CONTESTS</span>
                <span class="submetric-value">{{ profiles.atcoder.extraMetric.val }}</span>
              </div>
              <div class="submetric-item">
                <span class="submetric-label">BEST PERF</span>
                <span class="submetric-value">{{ profiles.atcoder.thirdMetric.val }}</span>
              </div>
            </div>
          </div>

          <div class="cp-handle-box mb-4">
            <span class="handle-label">Handle</span>
            <a href="https://atcoder.jp/users/amankumarpro2006" target="_blank" rel="noopener noreferrer" class="handle-tag">
              @amankumarpro2006
            </a>
          </div>

          <p class="cp-desc mb-6">
            {{ profiles.atcoder.desc }}
          </p>

          <div class="cp-topics mb-8">
            <h5 class="text-small-caps text-muted mb-3">Core Focus</h5>
            <div class="chips-container">
              <span v-for="t in profiles.atcoder.topics" :key="t" class="chip">{{ t }}</span>
            </div>
          </div>

          <div class="mt-auto">
            <a href="https://atcoder.jp/users/amankumarpro2006" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cp-btn">
              <span>View AtCoder Profile</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORY B: Data Science & Machine Learning -->
    <section class="container section" id="ds-ml">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Category B</div>
        <h2 class="section-title">Data Science &amp; Machine Learning</h2>
        <p class="section-intro">
          Profiles and technical artifacts showcasing applied data science, model evaluation, exploratory data analysis, and modern AI engineering explorations.
        </p>
      </div>

      <div class="profiles-cards-grid animate-fade-up delay-100" v-fade-up>
        <!-- Kaggle -->
        <div class="card platform-card">
          <div class="platform-card-header">
            <div class="platform-badge-logo kaggle-logo-bg">
              <span class="platform-letter">K</span>
            </div>
            <span class="badge badge-outline">Competitions &amp; Notebooks</span>
          </div>

          <h3 class="platform-title">Kaggle</h3>
          <p class="platform-handle text-small-caps text-gold">@amanpro2006</p>
          <p class="platform-desc">
            Participating in tabular ML competitions, authoring reproducible exploratory data analysis (EDA) notebooks, and completing rigorous data science learning micro-courses.
          </p>

          <div class="platform-features-list">
            <div class="p-feature">
              <span class="feature-bullet">&#10003;</span>
              <span>Python &amp; ML Course Credentials</span>
            </div>
            <div class="p-feature">
              <span class="feature-bullet">&#10003;</span>
              <span>Exploratory Data Analysis Notebooks</span>
            </div>
            <div class="p-feature">
              <span class="feature-bullet">&#10003;</span>
              <span>Predictive Modeling on Structured Datasets</span>
            </div>
          </div>

          <div class="platform-footer mt-auto">
            <a href="https://www.kaggle.com/amanpro2006" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm w-100">
              <span>Explore Kaggle Profile</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- CATEGORY C: Development & Open Source -->
    <section class="container section" id="development-oss">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Category C</div>
        <h2 class="section-title">Development &amp; Open Source</h2>
        <p class="section-intro">
          Full-stack software engineering, production applications, and open-source contributions hosted on GitHub with comprehensive version control.
        </p>
      </div>

      <!-- Primary GitHub Hub Card -->
      <div class="card oss-hub-card animate-fade-up delay-100" v-fade-up>
        <div class="oss-hub-header">
          <div class="oss-user-info">
            <div class="github-icon-large">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <div>
              <h3 class="hub-title">GitHub Profile</h3>
              <a href="https://github.com/Amankumar270306" target="_blank" rel="noopener noreferrer" class="hub-handle text-gold">
                @Amankumar270306
              </a>
            </div>
          </div>
          <a href="https://github.com/Amankumar270306" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>Follow on GitHub</span>
            <span class="btn-arrow">&#8599;</span>
          </a>
        </div>

        <p class="hub-desc">
          Building and maintaining user-facing web applications, REST APIs, and algorithmic utilities. Active commit history, structured branch workflows, and clean modular codebases.
        </p>

        <!-- Pinned Repositories Grid -->
        <h4 class="pinned-section-title text-small-caps text-muted mb-4">Pinned Repositories &amp; Systems</h4>
        <div class="pinned-repos-grid">
          <!-- Repo 1: Trekking App -->
          <div class="repo-card">
            <div class="repo-card-top">
              <span class="repo-type-tag">IITM MAD-I &bull; S Grade</span>
              <a href="https://github.com/24f2003323/trekking-management-application" target="_blank" rel="noopener noreferrer" class="repo-link-icon" title="View Source">
                &#8599;
              </a>
            </div>
            <h5 class="repo-name">trekking-management-application</h5>
            <p class="repo-summary">
              3-role trekking management system supporting Admin, Trek Staff, and Trekker workflows. Built with Flask, SQLite, and Flask-RESTful APIs with complete role-based authentication.
            </p>
            <div class="repo-meta">
              <span class="repo-lang"><span class="lang-dot python-dot"></span>Python</span>
              <span class="repo-badge">Flask &bull; SQLite</span>
            </div>
          </div>

          <!-- Repo 2: JoSAA Counselling -->
          <div class="repo-card">
            <div class="repo-card-top">
              <span class="repo-type-tag">Live Product &bull; 60+ Users</span>
              <a href="https://counsellingwebsite.vercel.app/" target="_blank" rel="noopener noreferrer" class="repo-link-icon" title="Live Website">
                &#8599;
              </a>
            </div>
            <h5 class="repo-name">jee-josaa-counselling-platform</h5>
            <p class="repo-summary">
              Student-focused counselling engine helping engineering candidates explore college cutoff trends and rank allocations during JoSAA &amp; CSAB admissions.
            </p>
            <div class="repo-meta">
              <span class="repo-lang"><span class="lang-dot js-dot"></span>JavaScript</span>
              <span class="repo-badge">React &bull; Vercel</span>
            </div>
          </div>

          <!-- Repo 3: Portfolio -->
          <div class="repo-card">
            <div class="repo-card-top">
              <span class="repo-type-tag">Open Source Portfolio</span>
              <a href="https://github.com/Amankumar270306/portfolio" target="_blank" rel="noopener noreferrer" class="repo-link-icon" title="View Source">
                &#8599;
              </a>
            </div>
            <h5 class="repo-name">portfolio</h5>
            <p class="repo-summary">
              Modern personal portfolio built with Vue 3, TypeScript, and custom CSS design system. Features live CP platform rating integration and dark/light luxury theme.
            </p>
            <div class="repo-meta">
              <span class="repo-lang"><span class="lang-dot vue-dot"></span>Vue &bull; TS</span>
              <span class="repo-badge">Vite &bull; Responsive</span>
            </div>
          </div>
        </div>

        <!-- Tooling & Workflow Chips -->
        <div class="dev-tooling-strip mt-6">
          <span class="tooling-label text-small-caps text-muted">Core Development Stack:</span>
          <div class="chips-container">
            <span class="chip">Git</span>
            <span class="chip">GitHub</span>
            <span class="chip">Linux / Bash</span>
            <span class="chip">Docker</span>
            <span class="chip">VS Code</span>
            <span class="chip">Postman</span>
            <span class="chip">REST APIs</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CATEGORY D: Professional & Research Profiles -->
    <section class="container section" id="professional-research">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Category D</div>
        <h2 class="section-title">Professional &amp; Research Profiles</h2>
        <p class="section-intro">
          Curated professional and academic profiles representing industry reach, software engineering networking, and ongoing research endeavors.
        </p>
      </div>

      <div class="profiles-cards-grid animate-fade-up delay-100" v-fade-up>
        <!-- LinkedIn -->
        <div class="card platform-card">
          <div class="platform-card-header">
            <div class="platform-badge-logo linkedin-logo-bg">
              <span class="platform-letter">in</span>
            </div>
            <span class="badge badge-outline">Professional Network</span>
          </div>

          <h3 class="platform-title">LinkedIn</h3>
          <p class="platform-handle text-small-caps text-gold">Aman Kumar</p>
          <p class="platform-desc">
            Connecting with software engineering practitioners, IIT Madras alumni, AI researchers, and engineering leaders. Sharing insights on coursework, projects, and tech trends.
          </p>

          <div class="platform-features-list">
            <div class="p-feature">
              <span class="feature-bullet">&#10003;</span>
              <span>Project Demos &amp; Updates</span>
            </div>
            <div class="p-feature">
              <span class="feature-bullet">&#10003;</span>
              <span>Academic Milestone Verification</span>
            </div>
            <div class="p-feature">
              <span class="feature-bullet">&#10003;</span>
              <span>Direct Collaboration Inquiries</span>
            </div>
          </div>

          <div class="platform-footer mt-auto">
            <a href="https://www.linkedin.com/in/aman-kumar-212878358/" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm w-100">
              <span>Connect on LinkedIn</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation / CTA Section -->
    <section class="container compact-section cta-section text-center animate-fade-up" v-fade-up>
      <div class="cta-inner-box card">
        <h2 class="mb-4">Interested in Collaborating or Hiring?</h2>
        <p class="cta-subtitle mx-auto mb-8">
          I am actively open to discussing software engineering internships, AI/ML research collaborations, and open-source contributions.
        </p>
        <div class="cta-buttons">
          <router-link to="/education" class="btn btn-gold">
            <span>View Academic Education</span>
            <span class="btn-arrow">&#8594;</span>
          </router-link>
          <router-link to="/contact" class="btn btn-outline">Contact Me</router-link>
          <a href="/Resume.pdf" target="_blank" class="btn btn-outline">Download Resume</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Metric {
  key: string;
  val: string | number;
}

interface CPProfile {
  id: string;
  platform: string;
  subtitle: string;
  badge: string;
  handle: string;
  url: string;
  rating: number | string;
  maxRating: number | string;
  rank: string;
  rankColor: string;
  extraMetric: Metric;
  thirdMetric: Metric;
  desc: string;
  topics: string[];
  isLoading: boolean;
  isLive: boolean;
}

const isSyncing = ref(false);

const profiles = ref<Record<string, CPProfile>>({
  codeforces: {
    id: 'codeforces',
    platform: 'Codeforces',
    subtitle: 'Global Timed Rounds',
    badge: 'Div. 2 & 3',
    handle: 'amankumar.pro',
    url: 'https://codeforces.com/profile/amankumar.pro',
    rating: 921,
    maxRating: 921,
    rank: 'Newbie',
    rankColor: '#808080',
    extraMetric: { key: 'Max Rank', val: 'Newbie' },
    thirdMetric: { key: 'Rounds', val: 'Rated' },
    desc: 'Competing in live rated rounds with strict time and memory constraints, solving complex challenges across graph traversal, greedy strategies, and dynamic programming.',
    topics: ['Graph Theory', 'Greedy Heuristics', 'Data Structures', 'Time Complexity'],
    isLoading: false,
    isLive: false,
  },
  codechef: {
    id: 'codechef',
    platform: 'CodeChef',
    subtitle: 'Division Rated Contests',
    badge: 'Division 4',
    handle: 'amankumarpro',
    url: 'https://www.codechef.com/users/amankumarpro',
    rating: 1143,
    maxRating: 1143,
    rank: '1★',
    rankColor: '#e5a855',
    extraMetric: { key: 'Division', val: 'Div. 4' },
    thirdMetric: { key: 'Stars', val: '1★' },
    desc: 'Active in Starters, Cook-Offs, and rated challenges, mastering algorithmic design patterns, array manipulations, and efficient problem solutions.',
    topics: ['Starters Rounds', 'Combinatorics', 'Array & Strings', 'Optimized Coding'],
    isLoading: false,
    isLive: false,
  },
  atcoder: {
    id: 'atcoder',
    platform: 'AtCoder',
    subtitle: 'Japanese Algorithmic Contests',
    badge: 'ABC & ARC',
    handle: 'amankumarpro2006',
    url: 'https://atcoder.jp/users/amankumarpro2006',
    rating: 120,
    maxRating: 120,
    rank: 'Grey',
    rankColor: '#9e9e9e',
    extraMetric: { key: 'Contests', val: 5 },
    thirdMetric: { key: 'Best Perf', val: 757 },
    desc: 'Regular participant in AtCoder Beginner Contests (ABC) and Regular Contests (ARC), solving challenging algorithmic problems emphasizing mathematics, dynamic programming, and constructive logic.',
    topics: ['Math & Number Theory', 'Dynamic Programming', 'Constructive DSA', 'Contest Speed'],
    isLoading: false,
    isLive: false,
  }
});

const getCodeforcesRankColor = (rank: string) => {
  const r = rank.toLowerCase();
  if (r.includes('expert')) return '#0000ff';
  if (r.includes('specialist')) return '#03a89e';
  if (r.includes('pupil')) return '#008000';
  if (r.includes('master')) return '#ff8c00';
  if (r.includes('grandmaster')) return '#ff0000';
  return '#808080';
};

const getCodeChefRankColor = (stars: string) => {
  if (stars.includes('2')) return '#1e7d22';
  if (stars.includes('3')) return '#3366cc';
  if (stars.includes('4')) return '#684273';
  if (stars.includes('5')) return '#ffbf00';
  if (stars.includes('6')) return '#ff7f00';
  if (stars.includes('7')) return '#d0011b';
  return '#e5a855';
};

const getAtCoderRankColor = (rating: number) => {
  if (rating >= 2800) return '#ff0000';
  if (rating >= 2400) return '#ff8000';
  if (rating >= 2000) return '#c0c000';
  if (rating >= 1600) return '#0000ff';
  if (rating >= 1200) return '#00c0c0';
  if (rating >= 800) return '#008000';
  if (rating >= 400) return '#804000';
  return '#9e9e9e';
};

const getAtCoderRankName = (rating: number) => {
  if (rating >= 2800) return 'Red';
  if (rating >= 2400) return 'Orange';
  if (rating >= 2000) return 'Yellow';
  if (rating >= 1600) return 'Blue';
  if (rating >= 1200) return 'Cyan';
  if (rating >= 800) return 'Green';
  if (rating >= 400) return 'Brown';
  return 'Grey';
};

const fetchCodeforces = async () => {
  const p = profiles.value.codeforces;
  p.isLoading = true;
  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${p.handle}`);
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'OK' && data.result && data.result.length > 0) {
        const u = data.result[0];
        if (typeof u.rating === 'number') {
          p.rating = u.rating;
        }
        if (typeof u.maxRating === 'number') {
          p.maxRating = u.maxRating;
        }
        if (u.rank) {
          p.rank = u.rank.charAt(0).toUpperCase() + u.rank.slice(1);
          p.rankColor = getCodeforcesRankColor(u.rank);
        }
        if (u.maxRank) {
          p.extraMetric = { key: 'Max Rank', val: u.maxRank.charAt(0).toUpperCase() + u.maxRank.slice(1) };
        }
        p.isLive = true;
      }
    }
  } catch (err) {
    console.warn('Codeforces fetch notice:', err);
  } finally {
    p.isLoading = false;
  }
};

const fetchCodeChef = async () => {
  const p = profiles.value.codechef;
  p.isLoading = true;
  try {
    const res = await fetch(`https://competeapi.vercel.app/user/codechef/${p.handle}/`);
    if (res.ok) {
      const data = await res.json();
      if (data) {
        if (data.rating_number) {
          p.rating = data.rating_number;
        }
        if (data.max_rank) {
          p.maxRating = data.max_rank;
        }
        if (data.rating) {
          p.rank = data.rating.trim();
          p.rankColor = getCodeChefRankColor(data.rating);
          p.thirdMetric = { key: 'Stars', val: data.rating.trim() };
        }
        p.isLive = true;
      }
    }
  } catch (err) {
    console.warn('CodeChef fetch notice:', err);
  } finally {
    p.isLoading = false;
  }
};

const fetchAtCoder = async () => {
  const p = profiles.value.atcoder;
  p.isLoading = true;
  try {
    let res = await fetch(`/api/atcoder/users/${p.handle}/history/json`);
    if (!res.ok) {
      res = await fetch(`https://atcoder.jp/users/${p.handle}/history/json`);
    }
    if (res.ok) {
      const history = await res.json();
      if (Array.isArray(history) && history.length > 0) {
        const ratedContests = history.filter((c: any) => c.IsRated);
        const lastRated = ratedContests[ratedContests.length - 1] || history[history.length - 1];
        if (lastRated && typeof lastRated.NewRating === 'number') {
          p.rating = lastRated.NewRating;
          const maxRating = Math.max(...history.map((c: any) => c.NewRating || 0));
          p.maxRating = maxRating > 0 ? maxRating : lastRated.NewRating;
          p.rank = getAtCoderRankName(p.rating as number);
          p.rankColor = getAtCoderRankColor(p.rating as number);
          p.extraMetric = { key: 'Contests', val: history.length };
          
          const maxPerf = Math.max(...history.map((c: any) => c.Performance || 0));
          if (maxPerf > 0) {
            p.thirdMetric = { key: 'Best Perf', val: maxPerf };
          }
          p.isLive = true;
        }
      }
    }
  } catch (err) {
    console.warn('AtCoder fetch notice:', err);
  } finally {
    p.isLoading = false;
  }
};


const refreshAllScores = async () => {
  isSyncing.value = true;
  await Promise.allSettled([fetchCodeforces(), fetchCodeChef(), fetchAtCoder()]);
  isSyncing.value = false;
};

onMounted(() => {
  refreshAllScores();
});
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
.mt-auto { margin-top: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }
.w-100 { width: 100%; }

.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: auto;
}

.hero-section {
  padding-top: 5rem;
  padding-bottom: 4rem;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.page-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}
.eyebrow-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-gold);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
}

.subtitle {
  font-size: 1.15rem;
  max-width: 750px;
  line-height: 1.8;
  color: var(--text-muted);
}

/* Category Nav Bar */
.category-nav-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;
}
.category-nav-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  border-radius: 30px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}
.theme-light .category-nav-pill {
  background: rgba(0, 0, 0, 0.02);
  border-color: var(--border-light);
  color: var(--text-dark);
}
.category-nav-pill:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  transform: translateY(-2px);
  background: rgba(212, 175, 55, 0.05);
}
.pill-icon {
  font-size: 0.95rem;
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

/* CP Section Header & Sync Button */
.cp-section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 3.5rem;
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 1.5rem;
  flex-wrap: wrap;
}
.theme-light .cp-section-header {
  border-bottom-color: var(--border-light);
}
.cp-section-header .section-title {
  margin-bottom: 0.5rem;
}
.cp-section-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
  max-width: 650px;
  line-height: 1.6;
}

.sync-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border-color: var(--border-dark);
  padding: 0.6rem 1.25rem;
  transition: all var(--transition-fast);
  cursor: pointer;
  background: transparent;
}
.theme-light .sync-action-btn {
  border-color: var(--border-light);
}
.sync-action-btn:hover:not(:disabled) {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  background: rgba(212, 175, 55, 0.08);
}
.sync-action-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sync-icon {
  display: inline-block;
  font-size: 1.1rem;
  line-height: 1;
  transition: transform var(--transition-fast);
}
.sync-icon.spin-active {
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* CP Grid & Cards */
.cp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.cp-card {
  display: flex;
  flex-direction: column;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
  padding: 2.5rem;
  position: relative;
}
.theme-light .cp-card {
  background: var(--card-bg-light);
  border-color: var(--border-light);
}
.cp-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-gold);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45), 0 0 25px rgba(212, 175, 55, 0.12);
}

.cp-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.cp-icon-wrap {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  transition: all var(--transition-fast);
}
.theme-light .cp-icon-wrap {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--border-light);
}
.cp-card:hover .cp-icon-wrap {
  transform: scale(1.06);
}
.cp-icon {
  width: 28px;
  height: 28px;
  display: block;
}

.atcoder-glow {
  color: #f5f5f5;
  border-color: rgba(255, 255, 255, 0.15);
}
.cp-card:hover .atcoder-glow {
  border-color: var(--accent-gold);
  background: rgba(212, 175, 55, 0.08);
}
.theme-light .atcoder-icon {
  filter: invert(1);
}

.codeforces-glow {
  border-color: rgba(59, 130, 246, 0.25);
}
.cp-card:hover .codeforces-glow {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
}

.codechef-glow {
  color: #e5a855;
  border-color: rgba(229, 168, 85, 0.25);
}
.cp-card:hover .codechef-glow {
  border-color: #e5a855;
  background: rgba(229, 168, 85, 0.08);
}

.cp-badge {
  font-size: 0.68rem;
  padding: 0.35rem 0.85rem;
  letter-spacing: 0.08em;
}

.cp-title {
  font-size: 1.65rem;
  margin-bottom: 0.25rem;
  color: var(--text-light);
}
.theme-light .cp-title {
  color: var(--text-dark);
}

.score-card-section {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  padding: 1.35rem;
  margin-top: 0.5rem;
  transition: all var(--transition-fast);
}
.theme-light .score-card-section {
  background: rgba(0, 0, 0, 0.02);
  border-color: var(--border-light);
}
.cp-card:hover .score-card-section {
  border-color: rgba(212, 175, 55, 0.35);
  background: rgba(212, 175, 55, 0.03);
}

.score-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.score-live-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}
.live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
}
.live-dot.pulsing {
  animation: pulse-glow 2s infinite;
}
@keyframes pulse-glow {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.live-text {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--text-muted);
}

.rank-pill {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: 20px;
  border: 1px solid;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(0, 0, 0, 0.25);
}
.theme-light .rank-pill {
  background: rgba(255, 255, 255, 0.85);
}

.score-value-display {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.score-number {
  font-family: var(--font-serif);
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 1;
  color: var(--accent-gold);
  letter-spacing: -0.02em;
}
.score-sub-label {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-weight: 500;
}

.score-submetrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-dark);
}
.theme-light .score-submetrics {
  border-top-color: var(--border-light);
}
.submetric-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.submetric-label {
  font-size: 0.62rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  font-weight: 500;
}
.submetric-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-light);
  font-family: var(--font-sans);
}
.theme-light .submetric-value {
  color: var(--text-dark);
}

.cp-handle-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-dark);
  border-radius: 4px;
}
.theme-light .cp-handle-box {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--border-light);
}
.handle-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  font-weight: 500;
}
.handle-tag {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent-gold);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.handle-tag:hover {
  color: var(--accent-gold-hover);
  text-decoration: underline;
}

.cp-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
}
.cp-topics h5 {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
}
.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.chip {
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  color: var(--text-light);
  border-radius: 4px;
  transition: all var(--transition-fast);
}
.theme-light .chip {
  background: var(--card-bg-light);
  border-color: var(--border-light);
  color: var(--text-dark);
}
.chip:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  transform: translateY(-2px);
}

.cp-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;
  font-size: 0.75rem;
  border-color: var(--border-dark);
  transition: all var(--transition-fast);
}
.theme-light .cp-btn {
  border-color: var(--border-light);
}
.cp-btn:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  background: rgba(212, 175, 55, 0.08);
}
.btn-arrow {
  transition: transform var(--transition-fast);
  font-size: 0.85rem;
}
.cp-btn:hover .btn-arrow {
  transform: translate(3px, -3px);
}


/* Category B & D: Platform Cards Grid */
.profiles-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.platform-card {
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}
.platform-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}

.platform-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}
.platform-badge-logo {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-dark);
}
.platform-letter {
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--text-light);
}
.theme-light .platform-letter {
  color: var(--text-dark);
}

.kaggle-logo-bg {
  border-color: rgba(32, 190, 255, 0.3);
  color: #20beff;
}
.kaggle-logo-bg .platform-letter {
  color: #20beff;
}
.hf-logo-bg {
  border-color: rgba(255, 210, 37, 0.3);
}
.gitml-logo-bg {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-light);
}
.linkedin-logo-bg {
  border-color: rgba(10, 102, 194, 0.3);
}
.linkedin-logo-bg .platform-letter {
  color: #0a66c2;
}
.blog-logo-bg {
  border-color: rgba(212, 175, 55, 0.3);
}
.research-logo-bg {
  border-color: rgba(124, 58, 237, 0.3);
}

.platform-title {
  font-size: 1.45rem;
  margin-bottom: 0.2rem;
  color: var(--text-light);
}
.theme-light .platform-title {
  color: var(--text-dark);
}
.platform-handle {
  font-size: 0.75rem;
  margin-bottom: 1rem;
}
.platform-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.platform-features-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;
}
.p-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-light);
}
.theme-light .p-feature {
  color: var(--text-dark);
}
.feature-bullet {
  color: var(--accent-gold);
  font-size: 0.85rem;
}

.research-status-pill {
  display: block;
  text-align: center;
  padding: 0.65rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed var(--border-dark);
  border-radius: 4px;
  font-size: 0.72rem;
}
.theme-light .research-status-pill {
  border-color: var(--border-light);
}

/* Category C: OSS Hub Card */
.oss-hub-card {
  padding: 3rem;
  transition: border-color var(--transition-fast);
}
.oss-hub-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
}

.oss-hub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid var(--border-dark);
  margin-bottom: 1.75rem;
}
.theme-light .oss-hub-header {
  border-bottom-color: var(--border-light);
}

.oss-user-info {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.github-icon-large {
  color: var(--accent-gold);
}
.hub-title {
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
  color: var(--text-light);
}
.theme-light .hub-title {
  color: var(--text-dark);
}
.hub-handle {
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
}
.hub-handle:hover {
  text-decoration: underline;
}

.hub-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2.25rem;
}

.pinned-section-title {
  letter-spacing: 0.12em;
}

.pinned-repos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.repo-card {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-fast);
}
.theme-light .repo-card {
  background: rgba(0, 0, 0, 0.02);
  border-color: var(--border-light);
}
.repo-card:hover {
  border-color: var(--accent-gold);
  transform: translateY(-3px);
}

.repo-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.repo-type-tag {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--accent-gold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.repo-link-icon {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 1rem;
  transition: color var(--transition-fast);
}
.repo-link-icon:hover {
  color: var(--accent-gold);
}

.repo-name {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-light);
  word-break: break-all;
}
.theme-light .repo-name {
  color: var(--text-dark);
}
.repo-summary {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
  flex: 1;
}

.repo-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: var(--text-muted);
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.theme-light .repo-meta {
  border-top-color: rgba(0, 0, 0, 0.05);
}
.repo-lang {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.python-dot { background: #3572A5; }
.js-dot { background: #f1e05a; }
.vue-dot { background: #41b883; }

.dev-tooling-strip {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-dark);
}
.theme-light .dev-tooling-strip {
  border-top-color: var(--border-light);
}
.tooling-label {
  font-size: 0.75rem;
  font-weight: 600;
}

/* CTA */
.cta-section {
  padding-top: 4rem;
  padding-bottom: 8rem;
}
.cta-inner-box {
  padding: 4rem 2rem;
  background: linear-gradient(180deg, rgba(212, 175, 55, 0.03) 0%, transparent 100%);
  border-color: var(--border-dark);
}
.theme-light .cta-inner-box {
  border-color: var(--border-light);
}
.cta-subtitle {
  font-size: 1.1rem;
  max-width: 650px;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.btn-sm {
  padding: 0.65rem 1.35rem;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.badge {
  display: inline-block;
  padding: 0.4rem 0.85rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  border-radius: 2rem;
}
.badge-outline {
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
}

@media (max-width: 768px) {
  .cp-grid {
    grid-template-columns: 1fr;
  }
  .cp-card {
    padding: 1.75rem 1.25rem;
  }
  .oss-hub-card {
    padding: 2rem 1.5rem;
  }
}
</style>
