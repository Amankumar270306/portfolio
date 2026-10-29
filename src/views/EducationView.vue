<template>
  <main class="portfolio-page">
    <!-- Hero Header -->
    <section class="container section hero-section">
      <div class="page-eyebrow animate-fade-up" v-fade-up>
        <span class="eyebrow-dot"></span>
        <span class="text-small-caps text-gold">Academic Foundation &amp; Formal Credentials</span>
      </div>
      <h1 class="animate-fade-up delay-100" v-fade-up style="max-width: 900px;">
        Education &amp;<br />Academic Qualifications
      </h1>
      <p class="animate-fade-up delay-200 subtitle" v-fade-up>
        Building a rigorous foundation in Data Science, Computing, and Software Systems through the Indian Institute of Technology Madras, hands-on architectural projects, and verified technical credentials.
      </p>

      <!-- Quick Highlights Bar -->
      <div class="quick-highlights-bar animate-fade-up delay-300" v-fade-up>
        <div class="highlight-item">
          <span class="highlight-label">INSTITUTION</span>
          <span class="highlight-val">IIT Madras</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">DEGREE</span>
          <span class="highlight-val">B.S. in Data Science</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">ACADEMIC CGPA</span>
          <span class="highlight-val text-gold">8.59 / 10.0</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">CURRENT STATUS</span>
          <span class="highlight-val text-emerald">Foundation Completed &bull; Diploma In Progress</span>
        </div>
      </div>
    </section>

    <!-- SECTION A: Academic Education -->
    <section class="container section" id="academic-education">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Section A</div>
        <h2 class="section-title">Academic Education</h2>
        <p class="section-intro">
          My primary degree curriculum at the Indian Institute of Technology Madras is structured into progressive academic tiers. Each tier builds upon prior theoretical mastery and project rigor.
        </p>
      </div>

      <!-- IIT Madras Primary Degree Showcase -->
      <div class="degree-main-card card animate-fade-up delay-100" v-fade-up>
        <div class="degree-card-header">
          <div class="degree-title-wrap">
            <span class="degree-timeline-tag text-small-caps text-gold">2024 &mdash; 2028 (Expected)</span>
            <h3 class="degree-heading">Bachelor of Science (B.S.) in Data Science and Applications</h3>
            <div class="institution-meta">
              <span class="institution-name">Indian Institute of Technology Madras</span>
              <span class="institution-loc">&bull; Chennai, India</span>
            </div>
          </div>
          <div class="cgpa-badge-box">
            <span class="cgpa-num">8.59</span>
            <span class="cgpa-scale">/ 10.0 CGPA</span>
            <span class="cgpa-sub">Academic Standing</span>
          </div>
        </div>

        <p class="degree-summary">
          Enrolled in IIT Madras's premier undergraduate curriculum blending rigorous statistical mathematics, advanced data structures, algorithmic problem solving, machine learning systems, and full-stack software development.
        </p>

        <!-- Integrated Academic Levels Progression Roadmap -->
        <div class="levels-roadmap-wrapper">
          <div class="levels-header">
            <h4 class="levels-title text-small-caps">Degree Structure &amp; Progression Roadmap</h4>
            <span class="levels-note text-muted">Integrated milestones of the 4-year B.S. Degree</span>
          </div>

          <div class="levels-stepper">
            <!-- Level 1: Foundation Level (Completed) -->
            <div class="level-card level-completed">
              <div class="level-status-strip">
                <span class="status-indicator-badge completed-badge">
                  <span class="status-check">&#10003;</span> Completed &bull; Sep 2025
                </span>
                <span class="level-roll">Roll No: 24F2003323</span>
              </div>
              <div class="level-body">
                <div class="level-num-title">
                  <span class="level-tag">LEVEL 01</span>
                  <h5>Foundation Level</h5>
                </div>
                <p class="level-desc">
                  Successfully completed all 8 foundational qualifying modules across mathematics, statistics, computing logic, and programming with high distinction.
                </p>
                <div class="level-topics-list">
                  <span class="level-chip">&#10003; Mathematics for Data Science I &amp; II</span>
                  <span class="level-chip">&#10003; Statistics for Data Science I &amp; II</span>
                  <span class="level-chip">&#10003; Computational Thinking</span>
                  <span class="level-chip">&#10003; Programming in Python</span>
                  <span class="level-chip">&#10003; English I &amp; II</span>
                </div>
                <div class="level-footer">
                  <a 
                    href="/637b04965a35d39126daf6e8cca9143ee08fe83285676d590a3834c898f1239c.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn-outline btn-xs"
                  >
                    <span>View Official IITM Certificate</span>
                    <span class="btn-arrow">&#8599;</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Level 2: Diploma Level (In Progress) -->
            <div class="level-card level-active">
              <div class="level-status-strip">
                <span class="status-indicator-badge active-badge">
                  <span class="pulse-dot"></span> In Progress &bull; 2025 &mdash; 2026
                </span>
                <span class="level-track">Dual Diploma: Programming + Data Science</span>
              </div>
              <div class="level-body">
                <div class="level-num-title">
                  <span class="level-tag">LEVEL 02</span>
                  <h5>Diploma Level</h5>
                </div>
                <p class="level-desc">
                  Actively mastering core computer science and data disciplines, spanning algorithmic problem solving, relational database engineering, modern full-stack architectures, and machine learning foundations.
                </p>
                <div class="level-topics-list">
                  <span class="level-chip active-chip">&#9679; Data Structures &amp; Algorithms (DSA)</span>
                  <span class="level-chip active-chip">&#9679; Database Management Systems (DBMS / SQL)</span>
                  <span class="level-chip active-chip">&#9679; Modern App Development II (Vue.js, REST APIs)</span>
                  <span class="level-chip active-chip">&#9679; System Commands &amp; Bash Shell Scripting</span>
                  <span class="level-chip active-chip">&#9679; Machine Learning Foundations / Machine Learning Training</span>
                </div>
                <div class="level-footer">
                  <span class="in-progress-note text-small-caps text-gold">Actively Enrolled &bull; Completing Capstones</span>
                </div>
              </div>
            </div>

            <!-- Level 3: Degree Level (Upcoming) -->
            <div class="level-card level-upcoming">
              <div class="level-status-strip">
                <span class="status-indicator-badge upcoming-badge">
                  Upcoming &bull; 2027 &mdash; 2028
                </span>
                <span class="level-track">Degree &amp; Specialization Stage</span>
              </div>
              <div class="level-body">
                <div class="level-num-title">
                  <span class="level-tag">LEVEL 03</span>
                  <h5>Degree Level (B.S. Graduation)</h5>
                </div>
                <p class="level-desc">
                  Planned specialization in Deep Learning, Large-Scale AI Engineering, Distributed Computing Systems, and a comprehensive industry research capstone.
                </p>
                <div class="level-topics-list">
                  <span class="level-chip upcoming-chip">Deep Learning &amp; Neural Nets</span>
                  <span class="level-chip upcoming-chip">AI Systems &amp; LLM Engineering</span>
                  <span class="level-chip upcoming-chip">Distributed Cloud &amp; Big Data</span>
                  <span class="level-chip upcoming-chip">Industry Apprenticeship &amp; Thesis</span>
                </div>
                <div class="level-footer">
                  <span class="upcoming-note text-small-caps text-muted">Planned Degree Culmination</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="degree-actions-row">
          <a href="https://study.iitm.ac.in/ds/academics.html#AC11" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
            <span>Explore Official IITM Curriculum</span>
            <span class="btn-arrow">&#8599;</span>
          </a>
        </div>
      </div>

      <!-- Additional Academic Programmes -->
      <div class="additional-programmes-section mt-8 animate-fade-up delay-150" v-fade-up>
        <h4 class="text-small-caps text-gold mb-4" style="letter-spacing: 0.15em; font-size: 0.8rem;">Additional Academic Programmes</h4>
        
        <div class="card additional-prog-card">
          <div class="prog-card-header">
            <div class="prog-title-wrap">
              <div class="prog-badge-row mb-2">
                <span class="badge badge-outline prog-cohort-badge">September Cohort</span>
                <span class="status-indicator-badge active-badge">
                  <span class="pulse-dot"></span> In Progress &bull; Sep &mdash; Dec 2026
                </span>
                <span class="badge badge-outline prog-online-badge">Online &bull; International</span>
              </div>
              <h3 class="prog-heading">GCI WORLD 2026 &mdash; SEPTEMBER COHORT</h3>
              <div class="prog-lab-meta">
                <span class="lab-name">Matsuo-Iwasawa Laboratory</span>
                <span class="lab-univ">&bull; The University of Tokyo</span>
              </div>
            </div>
            <div class="prog-logo-badge">
              <span class="tokyo-univ-tag">UTokyo</span>
            </div>
          </div>

          <p class="prog-desc">
            Selected participant in an international data science programme covering practical data science and machine learning.
          </p>

          <div class="prog-chips-container mb-6">
            <span class="chip prog-chip">PYTHON</span>
            <span class="chip prog-chip">MACHINE LEARNING</span>
            <span class="chip prog-chip">DATA SCIENCE</span>
          </div>

          <div class="prog-action-row">
            <a 
              href="https://weblab.t.u-tokyo.ac.jp/en/lecture/gci/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline btn-sm"
            >
              <span>View Official Programme</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Secondary Schooling Credentials -->
      <div class="secondary-education-grid mt-8 animate-fade-up delay-200" v-fade-up>
        <div class="card schooling-card">
          <div class="schooling-header">
            <span class="text-small-caps text-gold">2022 &mdash; 2024</span>
            <span class="badge badge-outline">CBSE Class XII</span>
          </div>
          <h4 class="schooling-institution">G.L. SCHOOL</h4>
          <p class="schooling-meta">Senior Secondary Certificate Examination &bull; Agra</p>
          <div class="schooling-score">
            <span class="score-bold">79.6%</span>
            <span class="score-context">Physics, Chemistry, Mathematics &amp; Computer Science</span>
          </div>
        </div>

        <div class="card schooling-card">
          <div class="schooling-header">
            <span class="text-small-caps text-gold">2020 &mdash; 2022</span>
            <span class="badge badge-outline">State Board Class X</span>
          </div>
          <h4 class="schooling-institution">Shiv Shakti H.S. School</h4>
          <p class="schooling-meta">Secondary School Examination &bull; Agra</p>
          <div class="schooling-score">
            <span class="score-bold">83.0%</span>
            <span class="score-context">Mathematics &amp; Science Curriculum</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION B: Certifications -->
    <section class="container section" id="certifications">
      <div class="section-header-block certs-header-block animate-fade-up" v-fade-up>
        <div class="header-text-col">
          <div class="section-tag text-small-caps text-gold">Section B</div>
          <h2 class="section-title">Certificates</h2>
          <p class="section-intro">
            Industry credentials, verified certificates, and technical accreditations validating hands-on proficiency in software engineering, cloud systems, and algorithmic development.
          </p>
        </div>
        <div class="header-action-col">
          <a 
            href="https://www.linkedin.com/in/aman-kumar-aka-umang/details/certifications/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-outline btn-sm view-all-certs-btn"
          >
            <span>View All</span>
            <span class="btn-arrow">&#8599;</span>
          </a>
        </div>
      </div>

      <div class="certs-compact-grid animate-fade-up delay-100" v-fade-up>
        <!-- Cert 1: IITM Foundation -->
        <div class="card cert-compact-card">
          <div class="cert-card-top">
            <div class="cert-issuer-badge">
              <span class="issuer-avatar">IITM</span>
              <span class="issuer-name">IIT Madras CODE</span>
            </div>
            <span class="cert-date-tag">Sep 2025</span>
          </div>

          <h3 class="cert-title">Foundational Level in Programming and Data Science</h3>
          <p class="cert-org text-small-caps text-gold">Indian Institute of Technology Madras</p>
          <p class="cert-brief">
            Verified credentials in Python, discrete mathematics, statistical modeling, and computational algorithmic thinking.
          </p>

          <div class="cert-skills-chips">
            <span class="c-chip">Python</span>
            <span class="c-chip">Statistics</span>
            <span class="c-chip">Mathematics</span>
            <span class="c-chip">Linux Shell</span>
          </div>

          <div class="cert-card-bottom">
            <a 
              href="/637b04965a35d39126daf6e8cca9143ee08fe83285676d590a3834c898f1239c.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline btn-xs"
            >
              <span>View IITM Certificate</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
            <span class="cert-verify-tag">&#10003; Verified PDF</span>
          </div>
        </div>

        <!-- Cert 2: AI/ML for Geodata Analytics (IIRS, ISRO) -->
        <div class="card cert-compact-card">
          <div class="cert-card-top">
            <div class="cert-issuer-badge">
              <span class="issuer-avatar isro-avatar">ISRO</span>
              <span class="issuer-name">IIRS &bull; ISRO</span>
            </div>
            <span class="cert-date-tag">Aug 2026</span>
          </div>

          <h3 class="cert-title">AI/ML for Geodata Analytics</h3>
          <p class="cert-org text-small-caps text-gold">Indian Institute of Remote Sensing (IIRS), Indian Space Research Organization (ISRO)</p>
          <div class="cert-id-tag mb-3">
            <span class="cert-id-label">Credential ID:</span>
            <code class="cert-id-val">ybR54g2SH0</code>
          </div>
          <p class="cert-brief">
            Application of machine learning algorithms and neural computing to geospatial data, remote sensing satellite observations, and spatial pattern analytics.
          </p>

          <div class="cert-skills-chips">
            <span class="c-chip">Geodata Analytics</span>
            <span class="c-chip">Machine Learning</span>
            <span class="c-chip">Remote Sensing</span>
            <span class="c-chip">Satellite Imagery</span>
          </div>

          <div class="cert-card-bottom">
            <a 
              href="https://www.linkedin.com/in/aman-kumar-aka-umang/details/certifications/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline btn-xs"
            >
              <span>View Credential</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
            <span class="cert-verify-tag isro-tag">&#10003; ISRO Verified</span>
          </div>
        </div>

        <!-- Cert 3: Words as Vectors (IIT Madras) -->
        <div class="card cert-compact-card">
          <div class="cert-card-top">
            <div class="cert-issuer-badge">
              <span class="issuer-avatar">IITM</span>
              <span class="issuer-name">IIT Madras</span>
            </div>
            <span class="cert-date-tag">Completed</span>
          </div>

          <h3 class="cert-title">Words as Vectors: From Linear Algebra to Word2Vec</h3>
          <p class="cert-org text-small-caps text-gold">Indian Institute of Technology Madras</p>
          <p class="cert-brief">
            Mathematical foundations of vector space models, high-dimensional linear algebra, word embeddings, continuous bag-of-words (CBOW), and Skip-gram architectures.
          </p>

          <div class="cert-skills-chips">
            <span class="c-chip">Linear Algebra</span>
            <span class="c-chip">Word2Vec</span>
            <span class="c-chip">Vector Embeddings</span>
            <span class="c-chip">NLP Fundamentals</span>
          </div>

          <div class="cert-card-bottom">
            <a 
              href="https://www.linkedin.com/in/aman-kumar-aka-umang/details/certifications/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline btn-xs"
            >
              <span>View Credential</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
            <span class="cert-verify-tag">&#10003; IITM Verified</span>
          </div>
        </div>
      </div>

      <!-- Bottom View All Button -->
      <div class="certs-bottom-action animate-fade-up delay-200" v-fade-up>
        <a 
          href="https://www.linkedin.com/in/aman-kumar-aka-umang/details/certifications/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-outline certs-view-all-cta"
        >
          <span>View All Certificates &amp; Licenses</span>
          <span class="btn-arrow">&#8599;</span>
        </a>
      </div>
    </section>

    <!-- SECTION C: Relevant Academic Achievements -->
    <section class="container section" id="academic-achievements">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Section C</div>
        <h2 class="section-title">Relevant Academic Achievements</h2>
        <p class="section-intro">
          Significant milestones, honors, project awards, and technical recognition demonstrating academic dedication in software engineering, AI/ML, and data science.
        </p>
      </div>

      <div class="achievements-grid animate-fade-up delay-100" v-fade-up>
        <!-- Achievement 1: S/A Grades in 9 Courses -->
        <div class="card achievement-card highlight-glow">
          <div class="achievement-icon-box">
            <span class="achievement-badge-star">&#9733;</span>
          </div>
          <div class="achievement-content">
            <div class="achievement-header-meta">
              <span class="text-small-caps text-gold">Highest Academic Honors</span>
              <span class="badge badge-gold">S &amp; A Grades in 9 Courses</span>
            </div>
            <h3 class="achievement-title">Consistent Top Academic Honors (S &amp; A Grades)</h3>
            <p class="achievement-institution">IIT Madras &bull; 2024 &mdash; Present</p>
            <p class="achievement-text">
              Secured prestigious 'S' (Outstanding &bull; Top Percentile) and 'A' (Excellent) letter grades across 9 academic coursework subjects at IIT Madras, demonstrating consistent subject mastery across mathematics, statistics, data structures, and software systems.
            </p>
            <div class="achievement-pills">
              <span class="a-pill">9 S/A Grade Courses</span>
              <span class="a-pill">Top Percentile Standing</span>
              <span class="a-pill">Theory &amp; Systems Mastery</span>
              <span class="a-pill">Proctored Academic Rigor</span>
            </div>
          </div>
        </div>

        <!-- Achievement 2: 8.59 CGPA Distinction -->
        <div class="card achievement-card">
          <div class="achievement-icon-box">
            <span class="achievement-icon-num">8.59</span>
          </div>
          <div class="achievement-content">
            <div class="achievement-header-meta">
              <span class="text-small-caps text-gold">Academic Distinction</span>
              <span class="badge badge-outline">Top Quartile</span>
            </div>
            <h3 class="achievement-title">8.59 Cumulative GPA at IIT Madras</h3>
            <p class="achievement-institution">IIT Madras B.S. in Data Science &bull; 2024 &mdash; Present</p>
            <p class="achievement-text">
              Demonstrated consistent academic rigor across rigorous proctored examinations spanning Discrete Mathematics, Computational Thinking, Python Programming, and Statistical Inference.
            </p>
            <div class="achievement-pills">
              <span class="a-pill">Consistent High Standing</span>
              <span class="a-pill">Proctored Exam Rigor</span>
              <span class="a-pill">Mathematics &amp; Logic</span>
            </div>
          </div>
        </div>

        <!-- Achievement 3: Foundation Level Scholar -->
        <div class="card achievement-card">
          <div class="achievement-icon-box">
            <span class="achievement-icon-sym">&#127891;</span>
          </div>
          <div class="achievement-content">
            <div class="achievement-header-meta">
              <span class="text-small-caps text-gold">Credential Completion</span>
              <span class="badge badge-outline">Sep 2025</span>
            </div>
            <h3 class="achievement-title">IIT Madras Foundational Level Certificate Conferred</h3>
            <p class="achievement-institution">Centre for Outreach and Digital Education (CODE)</p>
            <p class="achievement-text">
              Successfully qualified all 8 foundation courses on the first attempt, meeting stringent national proctored benchmark requirements and qualifying for the advanced Diploma track.
            </p>
            <div class="achievement-pills">
              <span class="a-pill">Roll: 24F2003323</span>
              <span class="a-pill">8 Foundational Courses</span>
              <span class="a-pill">Qualified for Diploma</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Relevant Coursework Section -->
    <section class="container compact-section">
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Domain Breakdown</div>
        <h2 class="section-title">Core Academic Coursework</h2>
      </div>

      <div class="coursework-domains-grid animate-fade-up delay-100" v-fade-up>
        <div class="card domain-card">
          <h4 class="domain-title text-gold">Data Structures &amp; Algorithms</h4>
          <p class="domain-desc">Algorithmic complexity, recursion, graph algorithms, dynamic programming, sorting and searching.</p>
          <div class="domain-chips">
            <span class="chip">Asymptotic Analysis</span>
            <span class="chip">Graph Theory</span>
            <span class="chip">Dynamic Programming</span>
            <span class="chip">Trees &amp; Heaps</span>
          </div>
        </div>

        <div class="card domain-card">
          <h4 class="domain-title text-gold">Data Science &amp; Machine Learning</h4>
          <p class="domain-desc">Supervised and unsupervised learning, regression models, classification metrics, statistical inference.</p>
          <div class="domain-chips">
            <span class="chip">Linear Regression</span>
            <span class="chip">Classification</span>
            <span class="chip">Statistical Modeling</span>
            <span class="chip">Probability</span>
          </div>
        </div>

        <div class="card domain-card">
          <h4 class="domain-title text-gold">Systems &amp; Database Architecture</h4>
          <p class="domain-desc">Relational database schemas, SQL queries, normalization, transactions, and Linux shell automation.</p>
          <div class="domain-chips">
            <span class="chip">PostgreSQL &amp; SQLite</span>
            <span class="chip">Relational Schema</span>
            <span class="chip">System Commands (Bash)</span>
            <span class="chip">Indexing &amp; ACID</span>
          </div>
        </div>

        <div class="card domain-card">
          <h4 class="domain-title text-gold">Modern Software Engineering</h4>
          <p class="domain-desc">Multi-tier architectures, RESTful API design, authentication, state management, and responsive frontends.</p>
          <div class="domain-chips">
            <span class="chip">Flask RESTful APIs</span>
            <span class="chip">Vue.js Single Page Apps</span>
            <span class="chip">SQLAlchemy ORM</span>
            <span class="chip">Role-Based Auth</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation / CTA Section -->
    <section class="container compact-section cta-section text-center animate-fade-up" v-fade-up>
      <div class="cta-inner-box card">
        <h2 class="mb-4">Explore My Technical &amp; Open-Source Profiles</h2>
        <p class="cta-subtitle mx-auto mb-8">
          Review live competitive programming ratings across Codeforces, CodeChef, and AtCoder, along with open-source repositories and machine learning projects.
        </p>
        <div class="cta-buttons">
          <router-link to="/profiles" class="btn btn-gold">
            <span>View Online Profiles</span>
            <span class="btn-arrow">&#8594;</span>
          </router-link>
          <router-link to="/projects" class="btn btn-outline">Explore Projects</router-link>
          <a href="/Resume.pdf" target="_blank" class="btn btn-outline">Download Resume</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Page 1: Education & Academic Credentials
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

.text-emerald {
  color: #10b981;
}

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

/* Quick Highlights Bar */
.quick-highlights-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.75rem;
  margin-top: 2.5rem;
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

/* Degree Main Card */
.degree-main-card {
  padding: 3rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  transition: border-color var(--transition-fast);
}
.theme-light .degree-main-card {
  background: var(--card-bg-light);
  border-color: var(--border-light);
}
.degree-main-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
}

.degree-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-dark);
  margin-bottom: 2rem;
}
.theme-light .degree-card-header {
  border-bottom-color: var(--border-light);
}

.degree-title-wrap {
  flex: 1;
}
.degree-timeline-tag {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  margin-bottom: 0.5rem;
}
.degree-heading {
  font-size: clamp(1.5rem, 2.5vw, 2.1rem);
  line-height: 1.3;
  margin-bottom: 0.75rem;
  color: var(--text-light);
}
.theme-light .degree-heading {
  color: var(--text-dark);
}
.institution-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: var(--text-muted);
}
.institution-name {
  font-weight: 500;
  color: var(--accent-gold);
}

.cgpa-badge-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem 1.75rem;
  background: rgba(212, 175, 55, 0.06);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
}
.cgpa-num {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-gold);
  line-height: 1;
}
.cgpa-scale {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  margin-top: 0.2rem;
}
.theme-light .cgpa-scale {
  color: var(--text-dark);
}
.cgpa-sub {
  font-size: 0.65rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.degree-summary {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}

/* Levels Roadmap Stepper */
.levels-roadmap-wrapper {
  margin-bottom: 2.5rem;
}
.levels-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.levels-title {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  color: var(--accent-gold);
}
.levels-note {
  font-size: 0.8rem;
}

.levels-stepper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.level-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-fast);
  overflow: hidden;
}
.theme-light .level-card {
  background: rgba(0, 0, 0, 0.02);
  border-color: var(--border-light);
}
.level-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.4);
}

.level-completed {
  border-left: 3px solid #10b981;
}
.level-active {
  border-left: 3px solid var(--accent-gold);
  background: rgba(212, 175, 55, 0.03);
}
.level-upcoming {
  border-left: 3px solid #6b7280;
  opacity: 0.9;
}

.level-status-strip {
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid var(--border-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  background: rgba(0, 0, 0, 0.2);
}
.theme-light .level-status-strip {
  border-bottom-color: var(--border-light);
  background: rgba(0, 0, 0, 0.03);
}

.status-indicator-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.completed-badge {
  color: #10b981;
}
.status-check {
  font-size: 0.85rem;
}
.active-badge {
  color: var(--accent-gold);
}
.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-gold);
  box-shadow: 0 0 6px var(--accent-gold);
  animation: pulse-gold 2s infinite;
}
@keyframes pulse-gold {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
}
.upcoming-badge {
  color: #9ca3af;
}

.level-roll, .level-track {
  font-size: 0.68rem;
  color: var(--text-muted);
}

.level-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.level-num-title {
  margin-bottom: 0.75rem;
}
.level-tag {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  font-weight: 600;
  margin-bottom: 0.2rem;
}
.level-num-title h5 {
  font-size: 1.2rem;
  color: var(--text-light);
}
.theme-light .level-num-title h5 {
  color: var(--text-dark);
}

.level-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.level-topics-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
}
.level-chip {
  font-size: 0.78rem;
  padding: 0.35rem 0.65rem;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  color: var(--text-light);
}
.theme-light .level-chip {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--border-light);
  color: var(--text-dark);
}
.level-chip.active-chip {
  border-color: rgba(212, 175, 55, 0.25);
  color: var(--text-light);
}
.level-chip.upcoming-chip {
  color: var(--text-muted);
  border-style: dashed;
}

.level-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
.theme-light .level-footer {
  border-top-color: rgba(0, 0, 0, 0.05);
}

.degree-actions-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Additional Academic Programmes */
.additional-programmes-section {
  margin-top: 3rem;
}
.additional-prog-card {
  padding: 2.5rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  border-left: 3px solid var(--accent-gold);
  transition: all var(--transition-fast);
}
.theme-light .additional-prog-card {
  background: var(--card-bg-light);
  border-color: var(--border-light);
  border-left-color: var(--accent-gold);
}
.additional-prog-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
  border-left-color: var(--accent-gold);
  transform: translateY(-3px);
}
.prog-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}
.prog-title-wrap {
  flex: 1;
}
.prog-badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.prog-cohort-badge, .prog-online-badge {
  font-size: 0.65rem;
  padding: 0.25rem 0.65rem;
}
.prog-heading {
  font-size: clamp(1.3rem, 2.2vw, 1.75rem);
  color: var(--text-light);
  margin-bottom: 0.35rem;
}
.theme-light .prog-heading {
  color: var(--text-dark);
}
.prog-lab-meta {
  font-size: 0.95rem;
  color: var(--text-muted);
}
.lab-name {
  color: var(--accent-gold);
  font-weight: 500;
}
.prog-logo-badge {
  padding: 0.5rem 0.85rem;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 4px;
}
.tokyo-univ-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.prog-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  max-width: 850px;
}
.prog-chips-container {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.prog-chip {
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 500;
}

/* Secondary Schooling */
.secondary-education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}
.schooling-card {
  padding: 2rem;
  transition: transform var(--transition-fast), border-color var(--transition-fast);
}
.schooling-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-gold);
}
.schooling-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.schooling-institution {
  font-size: 1.35rem;
  margin-bottom: 0.25rem;
  color: var(--text-light);
}
.theme-light .schooling-institution {
  color: var(--text-dark);
}
.schooling-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}
.schooling-score {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}
.score-bold {
  font-family: var(--font-serif);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--accent-gold);
}
.score-context {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* SECTION B: Certifications */
.certs-header-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;
}
.header-text-col {
  flex: 1;
  min-width: 280px;
}
.view-all-certs-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}
.certs-bottom-action {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
.certs-view-all-cta {
  padding: 0.85rem 2rem;
  font-size: 0.8rem;
  border-color: var(--border-dark);
  transition: all var(--transition-fast);
}
.theme-light .certs-view-all-cta {
  border-color: var(--border-light);
}
.certs-view-all-cta:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  background: rgba(212, 175, 55, 0.08);
}

.certs-compact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.75rem;
}

.cert-compact-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}
.cert-compact-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}

.cert-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.cert-issuer-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.issuer-avatar {
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: var(--accent-gold);
  color: var(--bg-dark);
  letter-spacing: 0.05em;
}
.isro-avatar {
  background: #ff6f00;
  color: #fff;
}
.issuer-name {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
}
.cert-date-tag {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.cert-title {
  font-size: 1.25rem;
  line-height: 1.35;
  margin-bottom: 0.35rem;
  color: var(--text-light);
}
.theme-light .cert-title {
  color: var(--text-dark);
}
.cert-org {
  font-size: 0.75rem;
  margin-bottom: 0.65rem;
}
.cert-id-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  color: var(--text-muted);
}
.cert-id-label {
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.65rem;
}
.cert-id-val {
  font-family: var(--font-sans);
  color: var(--accent-gold);
  background: rgba(212, 175, 55, 0.08);
  padding: 0.15rem 0.45rem;
  border-radius: 3px;
  border: 1px solid rgba(212, 175, 55, 0.25);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.cert-brief {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.cert-skills-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.c-chip {
  font-size: 0.72rem;
  padding: 0.25rem 0.6rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  color: var(--text-muted);
}
.theme-light .c-chip {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--border-light);
}

.cert-card-bottom {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.cert-verify-tag {
  font-size: 0.72rem;
  color: #10b981;
  font-weight: 500;
}
.isro-tag {
  color: #f59e0b;
}

/* SECTION C: Achievements Grid */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.achievement-card {
  padding: 2.25rem;
  display: flex;
  gap: 1.5rem;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}
.achievement-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}
.highlight-glow {
  border-color: rgba(212, 175, 55, 0.45);
  background: rgba(212, 175, 55, 0.02);
}

.achievement-icon-box {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 6px;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-gold);
}
.achievement-badge-star {
  font-size: 1.6rem;
}
.achievement-icon-num {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 700;
}
.achievement-icon-sym {
  font-size: 1.4rem;
}

.achievement-content {
  flex: 1;
}
.achievement-header-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}
.badge-gold {
  background: rgba(212, 175, 55, 0.15);
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
  font-size: 0.65rem;
  padding: 0.2rem 0.5rem;
  border-radius: 20px;
  font-weight: 600;
  text-transform: uppercase;
}

.achievement-title {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--text-light);
}
.theme-light .achievement-title {
  color: var(--text-dark);
}
.achievement-institution {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}
.achievement-text {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.achievement-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.a-pill {
  font-size: 0.7rem;
  padding: 0.25rem 0.65rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  color: var(--text-light);
}
.theme-light .a-pill {
  background: rgba(0, 0, 0, 0.03);
  border-color: var(--border-light);
  color: var(--text-dark);
}

/* Coursework Domains */
.coursework-domains-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.75rem;
}
.domain-card {
  padding: 2rem;
  transition: border-color var(--transition-fast);
}
.domain-card:hover {
  border-color: var(--accent-gold);
}
.domain-title {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}
.domain-desc {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}
.domain-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
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

.btn-xs {
  padding: 0.4rem 0.85rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.btn-sm {
  padding: 0.65rem 1.35rem;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.btn-arrow {
  transition: transform var(--transition-fast);
  font-size: 0.85rem;
}
.btn:hover .btn-arrow {
  transform: translate(3px, -3px);
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
  .degree-card-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .cgpa-badge-box {
    align-items: flex-start;
    width: 100%;
  }
  .quick-highlights-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .highlight-divider {
    display: none;
  }
  .achievement-card {
    flex-direction: column;
  }
}
</style>
