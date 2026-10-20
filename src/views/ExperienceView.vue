<template>
  <main class="portfolio-page">
    <!-- Hero Header -->
    <section class="container section hero-section">
      <div class="page-eyebrow animate-fade-up" v-fade-up>
        <span class="eyebrow-dot"></span>
        <span class="text-small-caps text-gold">Professional Timeline &amp; Major Honors</span>
      </div>
      <h1 class="animate-fade-up delay-100" v-fade-up style="max-width: 920px;">
        Experience &amp;<br />Achievements
      </h1>
      <p class="animate-fade-up delay-200 subtitle" v-fade-up>
        A documented chronological timeline of ongoing computational research in aerospace systems at IIT Madras and educational digital entrepreneurship, alongside a distinct record of competitive academic and international achievements.
      </p>

      <!-- Quick Highlights Metric Bar -->
      <div class="quick-highlights-bar animate-fade-up delay-300" v-fade-up>
        <div class="highlight-item">
          <span class="highlight-label">RESEARCH APPOINTMENT</span>
          <span class="highlight-val text-gold">Aerospace Dept &bull; AVASYA</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">TOP SELECTION</span>
          <span class="highlight-val text-emerald">GCI World 2026 (UTokyo)</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">OUTREACH &amp; MEDIA</span>
          <span class="highlight-val">AKcollegeReview</span>
        </div>
        <div class="highlight-divider"></div>
        <div class="highlight-item">
          <span class="highlight-label">RESEARCH INITIATIVES</span>
          <span class="highlight-val text-gold">LiDAR &amp; Mag-Anomaly</span>
        </div>
      </div>

      <!-- Navigation Jump & Filter Pills -->
      <div class="filter-nav-bar animate-fade-up delay-300" v-fade-up>
        <button 
          class="filter-pill" 
          :class="{ active: activeSectionTab === 'all' }"
          @click="activeSectionTab = 'all'"
        >
          <span>All Content</span>
        </button>
        <button 
          class="filter-pill" 
          :class="{ active: activeSectionTab === 'experience' }"
          @click="activeSectionTab = 'experience'"
        >
          <span class="pill-badge-dot research-dot"></span>
          <span>Section A &bull; Experience Timeline</span>
        </button>
        <button 
          class="filter-pill" 
          :class="{ active: activeSectionTab === 'achievements' }"
          @click="activeSectionTab = 'achievements'"
        >
          <span class="pill-badge-dot gold-dot"></span>
          <span>Section B &bull; Major Achievements</span>
        </button>
      </div>
    </section>

    <!-- ======================================================================
         SECTION A: WORK & RESEARCH EXPERIENCE (TIMELINE STRUCTURE)
         ====================================================================== -->
    <section 
      v-show="activeSectionTab === 'all' || activeSectionTab === 'experience'" 
      class="container section" 
      id="experience-timeline-section"
    >
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Section A</div>
        <h2 class="section-title">Work &amp; Research Experience</h2>
        <p class="section-intro">
          Chronological record of university aerospace research appointments and educational entrepreneurship.
          <span class="text-gold font-medium"> Click on any card along the timeline to open its complete in-depth case study.</span>
        </p>
      </div>

      <!-- BULLET-PROOF TIMELINE STRUCTURE (Mathematically Aligned Spine & Dots) -->
      <div class="timeline-stream animate-fade-up delay-100" v-fade-up>
        <!-- TIMELINE ITEM 1: Aerospace Department AVASYA -->
        <div class="timeline-row">
          <!-- 1. Left Time Rail -->
          <div class="t-rail-time">
            <span class="t-date-text text-gold">Oct 2026 &mdash; Present</span>
            <span class="t-status-label">Active Research</span>
          </div>

          <!-- 2. Perfectly Centered Axis Column (Line + Dot) -->
          <div class="t-rail-axis">
            <div class="t-line-segment top-line"></div>
            <div class="t-dot-node dot-cyan pulse-active" title="Active Research Appointment"></div>
            <div class="t-line-segment bottom-line"></div>
          </div>

          <!-- 3. Right Content Column (Compact Box) -->
          <div class="t-rail-content">
            <div 
              class="card compact-t-card clickable-card"
              @click="openModal('avasya-aerospace')"
              tabindex="0"
              role="button"
              aria-label="View details for Aerospace Department AVASYA research"
              @keydown.enter="openModal('avasya-aerospace')"
              @keydown.space.prevent="openModal('avasya-aerospace')"
            >
              <div class="card-accent-bar bar-cyan"></div>
              
              <div class="c-card-top">
                <div class="c-badges">
                  <span class="status-indicator-badge active-badge">
                    <span class="pulse-dot"></span> Active Research &bull; Ongoing
                  </span>
                  <span class="badge badge-dept">Aerospace Department</span>
                  <span class="badge badge-outline">IIT Madras BS</span>
                </div>
                <span class="c-open-hint text-small-caps text-gold">
                  <span>View Case Study</span>
                  <span class="arrow-glyph">&#8599;</span>
                </span>
              </div>

              <h3 class="c-card-title">Student Researcher &bull; Aerospace Department Vertical</h3>
              <div class="c-card-org">
                <span class="org-name-gold">AVASYA &mdash; The Aero and Applied Science Society</span>
                <span class="org-sub-meta">&bull; Indian Institute of Technology Madras</span>
              </div>

              <p class="c-card-desc">
                Conducting computational research on autonomous drone intelligence across two core areas: <strong>Energy-Efficient LiDAR Mapping &amp; Sensor Scheduling</strong> and <strong>AI-Based Magnetic Anomaly Detection</strong>.
              </p>

              <div class="c-card-footer">
                <div class="chips-container">
                  <span class="chip">LiDAR Sensor Scheduling</span>
                  <span class="chip">Magnetic Anomaly ML</span>
                  <span class="chip">Embedded AI</span>
                  <span class="chip">Autonomous UAVs</span>
                </div>
                <div class="inspect-text-action text-cyan text-small-caps">
                  <span>Click to Inspect Investigations</span>
                  <span class="btn-arrow">&#8594;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TIMELINE ITEM 2: AKcollegeReview -->
        <div class="timeline-row">
          <!-- 1. Left Time Rail -->
          <div class="t-rail-time">
            <span class="t-date-text text-gold">Feb 2026 &mdash; Present</span>
            <span class="t-status-label">Digital Creator</span>
          </div>

          <!-- 2. Perfectly Centered Axis Column (Line + Dot) -->
          <div class="t-rail-axis">
            <div class="t-line-segment top-line"></div>
            <div class="t-dot-node dot-red" title="Active Channel"></div>
            <div class="t-line-segment bottom-line last-segment"></div>
          </div>

          <!-- 3. Right Content Column (Compact Box) -->
          <div class="t-rail-content">
            <div 
              class="card compact-t-card clickable-card"
              @click="openModal('akcollegereview')"
              tabindex="0"
              role="button"
              aria-label="View details for AKcollegeReview"
              @keydown.enter="openModal('akcollegereview')"
              @keydown.space.prevent="openModal('akcollegereview')"
            >
              <div class="card-accent-bar bar-red"></div>

              <div class="c-card-top">
                <div class="c-badges">
                  <span class="status-indicator-badge completed-badge">
                    <span class="status-check">&#9654;</span> YouTube &bull; Digital Channel
                  </span>
                  <span class="badge badge-media">Educational Content Creator</span>
                  <span class="badge badge-outline">Public Outreach</span>
                </div>
                <span class="c-open-hint text-small-caps text-gold">
                  <span>View Details</span>
                  <span class="arrow-glyph">&#8599;</span>
                </span>
              </div>

              <h3 class="c-card-title">Founder &amp; Educational Content Creator</h3>
              <div class="c-card-org">
                <span class="org-name-gold">AKcollegeReview</span>
                <span class="org-sub-meta">&bull; Higher Education Guidance &amp; Analytics</span>
              </div>

              <p class="c-card-desc">
                Founded and run an educational channel providing data-backed engineering college reviews, JoSAA/CSAB counselling analysis, and student mentorship, directly complemented by the live <strong>JEE Counselling Platform</strong>.
              </p>

              <div class="c-card-footer">
                <div class="chips-container">
                  <span class="chip">Admissions Analytics</span>
                  <span class="chip">Audience Engagement</span>
                  <span class="chip">Student Mentorship</span>
                  <span class="chip">Entrepreneurship</span>
                </div>
                <div class="inspect-text-action text-red text-small-caps">
                  <span>Click to Inspect Channel &amp; Tools</span>
                  <span class="btn-arrow">&#8594;</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ======================================================================
         SECTION B: MAJOR ACHIEVEMENTS & HONORS (DISTINCT DEDICATED SECTION)
         ====================================================================== -->
    <section 
      v-show="activeSectionTab === 'all' || activeSectionTab === 'achievements'" 
      class="container section achievements-section-block" 
      id="achievements-section"
    >
      <div class="section-header-block animate-fade-up" v-fade-up>
        <div class="section-tag text-small-caps text-gold">Section B</div>
        <h2 class="section-title">Major Achievements &amp; Honors</h2>
        <p class="section-intro">
          Verified international programme selections and honors highlighting academic excellence and global merit.
        </p>
      </div>

      <!-- PRIORITY ACHIEVEMENT 1: GCI World 2026 Selection (Featured Highlight Card) -->
      <div 
        class="card priority-gci-card animate-fade-up delay-100 clickable-card" 
        v-fade-up
        @click="openModal('gci-world')"
        tabindex="0"
        role="button"
        aria-label="View details for GCI World 2026 Selection"
        @keydown.enter="openModal('gci-world')"
        @keydown.space.prevent="openModal('gci-world')"
      >
        <div class="gold-gradient-border"></div>
        
        <div class="gci-header-wrapper">
          <div class="gci-title-block">
            <div class="priority-badge-row mb-3">
              <span class="badge badge-priority-gold">
                &#9733; PRIORITIZED INTERNATIONAL SELECTION
              </span>
              <span class="status-indicator-badge active-badge">
                <span class="pulse-dot"></span> Selected Participant &bull; Sep &mdash; Dec 2026
              </span>
              <span class="badge badge-outline">The University of Tokyo</span>
            </div>

            <h3 class="gci-program-title">
              Global Consumer Intelligence (GCI) World 2026
            </h3>
            <div class="gci-cohort-subtitle text-gold text-small-caps">
              September 2026 Cohort &bull; Selected Candidate
            </div>

            <div class="gci-org-meta">
              <span class="lab-bold">Matsuo-Iwasawa Laboratory</span>
              <span class="univ-bold">&bull; Graduate School of Engineering, The University of Tokyo (UTokyo)</span>
            </div>
          </div>

          <div class="gci-seal-box">
            <div class="tokyo-seal-badge">
              <span class="tokyo-seal-sub">THE UNIVERSITY OF TOKYO</span>
              <span class="tokyo-seal-main">UTokyo</span>
              <span class="tokyo-seal-lab">MATSUO LAB</span>
            </div>
          </div>
        </div>

        <div class="gci-body-content">
          <p class="gci-lead-text">
            Competitively selected as an international participant for the prestigious <strong>Global Consumer Intelligence (GCI) World</strong> programme organized by the renowned <strong>Matsuo-Iwasawa Laboratory</strong> at <strong>The University of Tokyo</strong>.
          </p>

          <div class="gci-spec-grid">
            <div class="gci-spec-box">
              <span class="spec-label text-small-caps text-gold">Selecting Organization</span>
              <span class="spec-value">Matsuo-Iwasawa Laboratory, The University of Tokyo</span>
            </div>
            <div class="gci-spec-box">
              <span class="spec-label text-small-caps text-gold">Official Programme</span>
              <span class="spec-value">GCI World 2026 (Global Consumer Intelligence)</span>
            </div>
            <div class="gci-spec-box">
              <span class="spec-label text-small-caps text-gold">Selection Status</span>
              <span class="spec-value text-emerald">Selected International Participant</span>
            </div>
            <div class="gci-spec-box">
              <span class="spec-label text-small-caps text-gold">Cohort &amp; Year</span>
              <span class="spec-value">September Cohort (2026)</span>
            </div>
          </div>

          <div class="gci-actions">
            <a 
              href="https://weblab.t.u-tokyo.ac.jp/en/lecture/gci/" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-gold btn-sm"
              @click.stop
            >
              <span>View Official GCI Programme</span>
              <span class="btn-arrow">&#8599;</span>
            </a>
            <span class="gci-verify-note text-muted text-small-caps">
              Verified Global Selection &bull; Tokyo, Japan &bull; Click to open case modal
            </span>
          </div>
        </div>
      </div>

    </section>

    <!-- Navigation CTA Section -->
    <section class="container compact-section cta-section text-center animate-fade-up" v-fade-up>
      <div class="cta-inner-box card">
        <h2 class="mb-4">Explore Academic Credentials &amp; Live Profiles</h2>
        <p class="cta-subtitle mx-auto mb-8">
          Review formal academic qualifications and coursework progression at IIT Madras, or check real-time competitive programming ratings across Codeforces, CodeChef, and AtCoder.
        </p>
        <div class="cta-buttons">
          <router-link to="/education" class="btn btn-gold">
            <span>Academic Qualifications</span>
            <span class="btn-arrow">&#8594;</span>
          </router-link>
          <router-link to="/profiles" class="btn btn-outline">
            <span>Online Profiles</span>
            <span class="btn-arrow">&#8594;</span>
          </router-link>
          <router-link to="/projects" class="btn btn-outline">View Projects</router-link>
          <a href="/Resume.pdf" target="_blank" class="btn btn-outline">Download Resume</a>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         INTERACTIVE DETAIL MODAL / DRAWER (DOM DIALOG)
         ====================================================================== -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div 
          v-if="activeModalId" 
          class="detail-modal-overlay" 
          @click.self="closeModal"
          aria-modal="true"
          role="dialog"
        >
          <div class="detail-modal-card card">
            <div class="modal-gold-bar"></div>
            
            <button 
              class="modal-close-btn" 
              @click="closeModal" 
              aria-label="Close dialog (Escape)"
            >
              <span class="close-symbol">&#10005;</span>
              <span class="esc-kbd">ESC</span>
            </button>

            <div class="modal-scroll-body">
              <!-- MODAL 1: Aerospace Department AVASYA Research -->
              <div v-if="activeModalId === 'avasya-aerospace'" class="modal-content-wrap">
                <div class="modal-badge-row mb-3">
                  <span class="status-indicator-badge active-badge">
                    <span class="pulse-dot"></span> Active Research Member &bull; Oct 2026 &mdash; Present
                  </span>
                  <span class="badge badge-dept">Aerospace Department Vertical</span>
                  <span class="badge badge-outline">IIT Madras BS Degree</span>
                </div>

                <h2 class="modal-heading">
                  Aerospace Department &bull; AVASYA Society, IIT Madras BS
                </h2>
                <div class="modal-subheading text-gold text-small-caps mb-4">
                  Student Researcher &bull; Computational Aerospace &amp; Autonomous Perception
                </div>

                <div class="modal-intro-box">
                  <p>
                    Allotted to the Aerospace Department division under <strong>AVASYA</strong> (The official Aero and Applied Science Society of IIT Madras BS). My research appointment is focused on mathematical modeling, computational simulation, and machine learning pipelines for autonomous unmanned aerial systems.
                  </p>
                </div>

                <!-- RESEARCH TRACK 1 -->
                <div class="modal-section-card mt-6">
                  <div class="track-badge-row mb-2">
                    <span class="track-tag text-small-caps text-gold">RESEARCH PROJECT 01</span>
                    <span class="badge badge-dept">Aerospace Optimisation + Embedded AI + Power Management</span>
                  </div>
                  <h3 class="track-modal-title">Energy-Efficient LiDAR Mapping and Sensor Scheduling</h3>
                  
                  <p class="track-modal-desc">
                    LiDAR mapping consumes substantial energy through flight dynamics, high-frequency active laser pulsing, and onboard embedded computing. An aerial drone with limited battery capacity must intelligently budget and schedule available resources.
                  </p>

                  <h4 class="modal-sub-title text-small-caps text-cyan mt-4 mb-3">Active System Investigations</h4>
                  <div class="investigation-grid">
                    <div class="invest-item">
                      <div class="invest-num">01</div>
                      <div>
                        <h5 class="invest-title">Spatial Scan Density Allocation</h5>
                        <p class="invest-desc">Investigating how densely the drone should scan different regions based on terrain variance and target geometric complexity.</p>
                      </div>
                    </div>
                    <div class="invest-item">
                      <div class="invest-num">02</div>
                      <div>
                        <h5 class="invest-title">Dynamic Resolution Triggering</h5>
                        <p class="invest-desc">Deciding when higher-resolution measurements are strictly necessary versus low-power baseline scanning.</p>
                      </div>
                    </div>
                    <div class="invest-item">
                      <div class="invest-num">03</div>
                      <div>
                        <h5 class="invest-title">Re-Observation Prioritization</h5>
                        <p class="invest-desc">Formulating algorithmic criteria for which topological zones exhibit high uncertainty and deserve additional passes.</p>
                      </div>
                    </div>
                    <div class="invest-item">
                      <div class="invest-num">04</div>
                      <div>
                        <h5 class="invest-title">Accuracy vs. Flight Time Trade-Off</h5>
                        <p class="invest-desc">Quantifying multi-objective Pareto frontiers balancing mapping accuracy and point-cloud fidelity against remaining flight endurance.</p>
                      </div>
                    </div>
                    <div class="invest-item">
                      <div class="invest-num">05</div>
                      <div>
                        <h5 class="invest-title">Optimal Return-to-Recharge Policy</h5>
                        <p class="invest-desc">Scheduling critical battery cutoffs to ensure safe autonomous return without mission compromise.</p>
                      </div>
                    </div>
                  </div>

                  <div class="chips-container mt-4">
                    <span class="chip">LiDAR Mapping</span>
                    <span class="chip">Sensor Scheduling</span>
                    <span class="chip">Embedded AI</span>
                    <span class="chip">Power Management</span>
                    <span class="chip">Pareto Frontiers</span>
                  </div>
                </div>

                <!-- RESEARCH TRACK 2 -->
                <div class="modal-section-card mt-6">
                  <div class="track-badge-row mb-2">
                    <span class="track-tag text-small-caps text-gold">RESEARCH PROJECT 02</span>
                    <span class="badge badge-dept">Geophysical Signal Processing + Machine Learning</span>
                  </div>
                  <h3 class="track-modal-title">AI-Based Magnetic Anomaly Detection</h3>

                  <p class="track-modal-desc">
                    A drone collects continuous magnetic-field measurements while flying low-altitude survey grids over an area. The raw sensor readings represent an intertwined superposition of four distinct signal components:
                  </p>

                  <div class="superposition-container">
                    <div class="super-item">
                      <span class="super-icon">&#127757;</span>
                      <span class="super-title">Underground Sources</span>
                      <span class="super-sub">Buried ferrous &amp; archaeological targets</span>
                    </div>
                    <div class="super-item">
                      <span class="super-icon">&#9651;</span>
                      <span class="super-title">Geological Variations</span>
                      <span class="super-sub">Regional geomagnetic gradients</span>
                    </div>
                    <div class="super-item">
                      <span class="super-icon">&#9889;</span>
                      <span class="super-title">Drone Interference</span>
                      <span class="super-sub">Motors, avionics &amp; ESC EM noise</span>
                    </div>
                    <div class="super-item">
                      <span class="super-icon">&#128266;</span>
                      <span class="super-title">Measurement Noise</span>
                      <span class="super-sub">High-frequency magnetometer drift</span>
                    </div>
                  </div>

                  <div class="research-question-box">
                    <div class="rq-badge text-small-caps text-gold">&#10067; Central Research Question</div>
                    <p class="rq-text">
                      &ldquo;Can machine learning distinguish archaeological magnetic anomalies from geological variations and sensor noise more reliably than conventional signal-processing methods?&rdquo;
                    </p>
                    <div class="rq-meta">
                      Benchmarking spatial-temporal neural filters against traditional Fourier and Butterworth frequency-domain passes.
                    </div>
                  </div>

                  <div class="chips-container mt-4">
                    <span class="chip">Geophysical Signal Processing</span>
                    <span class="chip">Magnetic Anomaly Detection</span>
                    <span class="chip">Drone Magnetometry</span>
                    <span class="chip">Machine Learning</span>
                    <span class="chip">Noise Disentanglement</span>
                  </div>
                </div>

                <!-- ACADEMIC INTEGRITY NOTE -->
                <div class="integrity-callout mt-6">
                  <div class="callout-icon">&#9432;</div>
                  <div class="callout-text">
                    <strong>Position, Responsibilities &amp; Research Integrity:</strong> My appointment in AVASYA's Aerospace Department involves algorithmic formulation, mathematical modeling of power dynamics, Python simulation pipelines, and literature reviews. The research is active and ongoing; I focus on verified modeling and transparent methodology without claiming unverified empirical outcomes.
                  </div>
                </div>

                <div class="modal-actions-bar mt-8">
                  <button class="btn btn-gold btn-sm" @click="closeModal">
                    <span>Close Case Study</span>
                  </button>
                  <a href="https://study.iitm.ac.in/ds/" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                    <span>IIT Madras BS Portal</span>
                    <span class="btn-arrow">&#8599;</span>
                  </a>
                </div>
              </div>

              <!-- MODAL 2: AKcollegeReview -->
              <div v-else-if="activeModalId === 'akcollegereview'" class="modal-content-wrap">
                <div class="modal-badge-row mb-3">
                  <span class="status-indicator-badge completed-badge">
                    <span class="status-check">&#9654;</span> Founded Feb 2026 &bull; YouTube
                  </span>
                  <span class="badge badge-media">Educational Content Creator</span>
                  <span class="badge badge-outline">Public Outreach</span>
                </div>

                <h2 class="modal-heading">
                  AKcollegeReview &bull; Educational Content Creation &amp; Entrepreneurship
                </h2>
                <div class="modal-subheading text-gold text-small-caps mb-4">
                  Founder &bull; Admissions Intelligence, JoSAA/CSAB Analytics &amp; Mentorship
                </div>

                <div class="modal-intro-box">
                  <p>
                    Founded and actively direct <strong>AKcollegeReview</strong> to demystify engineering admissions, provide data-backed college reviews, and mentor thousands of entrance exam aspirants across India through clear video content and software tools.
                  </p>
                </div>

                <div class="contributions-grid mt-6">
                  <div class="contrib-item">
                    <div class="contrib-icon youtube-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="contrib-title">Analytical Cutoff Research</h4>
                      <p class="contrib-text">Perform deep statistical analysis on official JoSAA, CSAB, and institute placement metrics to explain closing rank trends and ROI.</p>
                    </div>
                  </div>

                  <div class="contrib-item">
                    <div class="contrib-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 class="contrib-title">Audience Engagement &amp; Mentorship</h4>
                      <p class="contrib-text">Directly guided prospective students through query resolution, live discussions, and personalized advice on branch selection.</p>
                    </div>
                  </div>

                  <div class="contrib-item">
                    <div class="contrib-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </div>
                    <div>
                      <h4 class="contrib-title">Software Engineering Synergy</h4>
                      <p class="contrib-text">Engineered the full-stack <strong>JEE Counselling Platform</strong> (counsellingwebsite.vercel.app), solving admission dilemmas with interactive prediction algorithms.</p>
                    </div>
                  </div>

                  <div class="contrib-item">
                    <div class="contrib-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 class="contrib-title">Entrepreneurial Execution</h4>
                      <p class="contrib-text">Demonstrates public communication, audio-visual editing, community building, and product thinking valuable for developer relations.</p>
                    </div>
                  </div>
                </div>

                <div class="modal-actions-bar mt-8">
                  <a href="https://www.youtube.com/@AkCollegeReview" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm">
                    <span>Visit YouTube Channel</span>
                    <span class="btn-arrow">&#8599;</span>
                  </a>
                  <a href="https://counsellingwebsite.vercel.app" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                    <span>Open Live Counselling App</span>
                    <span class="btn-arrow">&#8599;</span>
                  </a>
                  <button class="btn btn-outline btn-sm" @click="closeModal">Close</button>
                </div>
              </div>


              <!-- MODAL 4: GCI World 2026 -->
              <div v-else-if="activeModalId === 'gci-world'" class="modal-content-wrap">
                <div class="modal-badge-row mb-3">
                  <span class="badge badge-priority-gold">&#9733; PRIORITIZED INTERNATIONAL SELECTION</span>
                  <span class="status-indicator-badge active-badge">
                    <span class="pulse-dot"></span> Selected Candidate &bull; Sep &mdash; Dec 2026
                  </span>
                  <span class="badge badge-outline">The University of Tokyo</span>
                </div>

                <h2 class="modal-heading">
                  Global Consumer Intelligence (GCI) World 2026
                </h2>
                <div class="modal-subheading text-gold text-small-caps mb-4">
                  Matsuo-Iwasawa Laboratory &bull; Graduate School of Engineering, The University of Tokyo
                </div>

                <div class="modal-intro-box">
                  <p>
                    Competitively selected as an international participant for the flagship <strong>Global Consumer Intelligence (GCI) World</strong> programme organized by one of Asia's foremost deep learning and AI academic laboratories.
                  </p>
                </div>

                <div class="gci-spec-grid mt-6">
                  <div class="gci-spec-box">
                    <span class="spec-label text-small-caps text-gold">Selecting Organization</span>
                    <span class="spec-value">Matsuo-Iwasawa Laboratory, The University of Tokyo</span>
                  </div>
                  <div class="gci-spec-box">
                    <span class="spec-label text-small-caps text-gold">Programme Track</span>
                    <span class="spec-value">GCI World 2026 (September Cohort)</span>
                  </div>
                  <div class="gci-spec-box">
                    <span class="spec-label text-small-caps text-gold">Selection Status</span>
                    <span class="spec-value text-emerald">Selected International Candidate</span>
                  </div>
                  <div class="gci-spec-box">
                    <span class="spec-label text-small-caps text-gold">Focus Area</span>
                    <span class="spec-value">Data Science, ML &amp; Consumer Intelligence</span>
                  </div>
                </div>

                <div class="modal-section-card mt-6">
                  <h4 class="modal-sub-title text-small-caps text-gold mb-3">Curriculum &amp; Technical Scope</h4>
                  <p class="track-modal-desc">
                    Led by Prof. Yutaka Matsuo, the curriculum covers hands-on machine learning architectures, statistical hypothesis testing, big data processing pipelines, predictive consumer behavior modeling, and production-grade Python data science.
                  </p>
                  <div class="chips-container mt-4">
                    <span class="chip">Python Data Science</span>
                    <span class="chip">Supervised ML</span>
                    <span class="chip">Predictive Modeling</span>
                    <span class="chip">Statistical Inference</span>
                    <span class="chip">UTokyo Matsuo Lab</span>
                  </div>
                </div>

                <div class="modal-actions-bar mt-8">
                  <a href="https://weblab.t.u-tokyo.ac.jp/en/lecture/gci/" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm">
                    <span>View Official Matsuo Lab GCI Programme</span>
                    <span class="btn-arrow">&#8599;</span>
                  </a>
                  <button class="btn btn-outline btn-sm" @click="closeModal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

type SectionTab = 'all' | 'experience' | 'achievements';
const activeSectionTab = ref<SectionTab>('all');

const activeModalId = ref<string | null>(null);

const openModal = (modalId: string) => {
  activeModalId.value = modalId;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  activeModalId.value = null;
  document.body.style.overflow = '';
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && activeModalId.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
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
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }

.text-cyan { color: #38bdf8; }
.text-emerald { color: #10b981; }
.text-red { color: #f87171; }
.text-green { color: #10b981; }

.section {
  padding-top: 5rem;
  padding-bottom: 5rem;
  min-height: auto;
}

.compact-section {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.hero-section {
  padding-top: 5rem;
  padding-bottom: 3rem;
  min-height: 48vh;
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
  max-width: 840px;
  line-height: 1.8;
  color: var(--text-muted);
}

/* Quick Highlights Bar */
.quick-highlights-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 1.25rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  border-radius: 4px;
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
.highlight-divider {
  width: 1px;
  height: 28px;
  background: var(--border-dark);
}

/* Navigation / Filter Pills */
.filter-nav-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.5rem;
}
.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  border-radius: 40px;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.filter-pill:hover {
  color: var(--text-light);
  border-color: var(--accent-gold);
  background: rgba(212, 175, 55, 0.06);
}
.filter-pill.active {
  color: var(--bg-dark);
  background: var(--accent-gold);
  border-color: var(--accent-gold);
  font-weight: 700;
}

.pill-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
.research-dot { background: #38bdf8; }
.gold-dot { background: #d4af37; }
.media-dot { background: #ef4444; }

/* Section Header */
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
.section-intro {
  font-size: 1.05rem;
  max-width: 820px;
  line-height: 1.7;
  color: var(--text-muted);
}
.achievements-section-block {
  border-top: 1px solid var(--border-dark);
  margin-top: 2rem;
  padding-top: 6rem;
}

/* ==========================================================================
   MATHEMATICALLY ALIGNED 3-COLUMN TIMELINE STREAM
   ========================================================================== */
.timeline-stream {
  display: flex;
  flex-direction: column;
  max-width: 1050px;
  margin: 0 auto;
}

.timeline-row {
  display: flex;
  align-items: stretch;
  min-height: 160px;
}

/* Column 1: Time Rail */
.t-rail-time {
  width: 170px;
  flex-shrink: 0;
  text-align: right;
  padding-right: 1.75rem;
  padding-top: 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.t-date-text {
  font-family: var(--font-serif);
  font-size: 1.18rem;
  font-weight: 600;
  line-height: 1.2;
}
.t-status-label {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* Column 2: Exact Axis Column (Line + Dot) */
.t-rail-axis {
  width: 32px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.t-line-segment {
  width: 2px;
  background: linear-gradient(180deg, rgba(212, 175, 55, 0.5), rgba(56, 189, 248, 0.4));
  flex: 1;
}
.top-line {
  height: 1.6rem;
  flex: none;
}
.bottom-line {
  flex: 1;
}
.last-segment {
  background: linear-gradient(180deg, rgba(56, 189, 248, 0.4), transparent);
}

/* Perfect Node Dot centered exactly on the line */
.t-dot-node {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--accent-gold);
  background: var(--bg-dark);
  z-index: 5;
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.timeline-row:hover .t-dot-node {
  transform: scale(1.3);
  box-shadow: 0 0 14px var(--accent-gold);
}

.dot-cyan { border-color: #38bdf8; background: #38bdf8; }
.dot-red { border-color: #ef4444; background: #ef4444; }
.dot-green { border-color: #10b981; background: #10b981; }

.pulse-active {
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.8);
  animation: pulse-node 2.2s infinite;
}
@keyframes pulse-node {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
  70% { transform: scale(1.15); box-shadow: 0 0 0 8px rgba(56, 189, 248, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
}

/* Column 3: Compact Content Box Rail */
.t-rail-content {
  flex: 1;
  padding-left: 1.75rem;
  padding-bottom: 2.75rem;
  min-width: 0;
}

/* COMPACT TIMELINE CARD */
.compact-t-card {
  position: relative;
  padding: 1.5rem 1.75rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  border-radius: 2px;
  transition: all var(--transition-fast);
  overflow: hidden;
}
.clickable-card {
  cursor: pointer;
}
.clickable-card:hover {
  border-color: rgba(212, 175, 55, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
.clickable-card:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 3px;
}

.card-accent-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
}
.bar-cyan { background: linear-gradient(90deg, #38bdf8, var(--accent-gold), transparent); }
.bar-red { background: linear-gradient(90deg, #ef4444, var(--accent-gold), transparent); }
.bar-green { background: linear-gradient(90deg, #10b981, var(--accent-gold), transparent); }

.c-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}
.c-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.c-open-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  padding: 0.2rem 0.55rem;
  background: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 2px;
  transition: all var(--transition-fast);
}
.clickable-card:hover .c-open-hint {
  background: var(--accent-gold);
  color: var(--bg-dark);
  font-weight: 700;
}
.arrow-glyph {
  font-size: 0.75rem;
}

.c-card-title {
  font-size: clamp(1.2rem, 1.8vw, 1.45rem);
  line-height: 1.3;
  margin-bottom: 0.3rem;
  color: var(--text-light);
  font-family: var(--font-serif);
}

.c-card-org {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
}
.org-name-gold {
  color: var(--accent-gold);
  font-weight: 500;
}

.c-card-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1rem;
}
.c-card-desc strong {
  color: var(--text-light);
}

.c-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}
.inspect-text-action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  font-weight: 600;
  transition: transform var(--transition-fast);
}
.clickable-card:hover .inspect-text-action {
  transform: translateX(4px);
}

/* Responsive adjustment for Mobile */
@media (max-width: 768px) {
  .timeline-row {
    flex-direction: column;
  }
  .t-rail-time {
    width: 100%;
    text-align: left;
    padding-left: 36px;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 0.5rem;
  }
  .t-rail-axis {
    display: none;
  }
  .t-rail-content {
    padding-left: 0;
    padding-bottom: 2rem;
  }
  .compact-t-card {
    padding: 1.25rem 1.25rem;
  }
}

/* ==========================================================================
   DETAIL MODAL / DRAWER STYLES
   ========================================================================== */
.detail-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  overflow-y: auto;
}

.detail-modal-card {
  position: relative;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  background: #181818;
  border: 1px solid rgba(212, 175, 55, 0.45);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 !important;
}

.modal-gold-bar {
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #38bdf8, var(--accent-gold), #ef4444);
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-dark);
  color: var(--text-muted);
  padding: 0.5rem 0.85rem;
  cursor: pointer;
  z-index: 10;
  transition: all var(--transition-fast);
}
.modal-close-btn:hover {
  background: var(--accent-gold);
  color: var(--bg-dark);
  border-color: var(--accent-gold);
}
.close-symbol {
  font-size: 1rem;
  line-height: 1;
}
.esc-kbd {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  font-family: var(--font-sans);
  font-weight: 600;
}

.modal-scroll-body {
  padding: 2.75rem 3rem;
  overflow-y: auto;
  max-height: calc(90vh - 4px);
}
@media (max-width: 768px) {
  .modal-scroll-body {
    padding: 2rem 1.5rem;
  }
}

.modal-content-wrap {
  display: flex;
  flex-direction: column;
}

.modal-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
}

.modal-heading {
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  font-family: var(--font-serif);
  line-height: 1.2;
  color: var(--text-light);
  margin-bottom: 0.5rem;
}
.modal-subheading {
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  font-weight: 600;
}

.modal-intro-box {
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--accent-gold);
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted);
}
.modal-intro-box strong {
  color: var(--text-light);
}

.modal-section-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid var(--border-dark);
}
.track-modal-title {
  font-family: var(--font-serif);
  font-size: 1.45rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;
}
.track-modal-desc {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-muted);
}
.modal-sub-title {
  font-size: 0.78rem;
  letter-spacing: 0.14em;
}

/* Modal animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .detail-modal-card {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}
.modal-fade-enter-from .detail-modal-card {
  transform: translateY(20px) scale(0.97);
  opacity: 0;
}

.modal-actions-bar {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-dark);
}

/* Badges & Chips */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.85rem;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  font-weight: 600;
  text-transform: uppercase;
}
.badge-outline {
  border: 1px solid var(--border-dark);
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.02);
}
.badge-dept {
  background: rgba(56, 189, 248, 0.12);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
}
.badge-media {
  background: rgba(239, 68, 68, 0.12);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}
.badge-grade {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.4);
}
.badge-priority-gold {
  background: var(--accent-gold);
  color: #111;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.status-indicator-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
}
.active-badge {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}
.completed-badge {
  background: rgba(212, 175, 55, 0.1);
  color: var(--accent-gold);
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse-ring 2s infinite ease-in-out;
}
@keyframes pulse-ring {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.status-check {
  font-size: 0.75rem;
  font-weight: bold;
}

/* Superposition Container in Modal */
.superposition-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 1.75rem;
}
@media (max-width: 900px) {
  .superposition-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .superposition-container {
    grid-template-columns: 1fr;
  }
}

.super-item {
  padding: 1rem 1.15rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-dark);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.super-icon {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}
.super-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-light);
}
.super-sub {
  font-size: 0.72rem;
  color: var(--text-muted);
  line-height: 1.4;
}

/* Research Question Callout */
.research-question-box {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(212, 175, 55, 0.05) 100%);
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-left: 4px solid #38bdf8;
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.5rem;
}
.rq-badge {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.rq-text {
  font-family: var(--font-serif);
  font-size: 1.12rem;
  line-height: 1.6;
  color: var(--text-light);
  font-style: italic;
  margin-bottom: 0.65rem;
}
.rq-meta {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--text-muted);
}

/* Investigation Grid in Modal */
.investigation-grid {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin-bottom: 1.5rem;
}
.invest-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 0.85rem 1.15rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.03);
}
.invest-num {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 700;
  color: #38bdf8;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.invest-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-light);
  font-family: var(--font-sans);
  margin-bottom: 0.2rem;
}
.invest-desc {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
}

/* Callout Note */
.integrity-callout {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.25rem;
  background: rgba(56, 189, 248, 0.05);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 3px;
}
.callout-icon {
  font-size: 1.25rem;
  color: #38bdf8;
  font-weight: bold;
}
.callout-text {
  font-size: 0.82rem;
  line-height: 1.5;
  color: #cbd5e1;
}

/* Contributions Grid in Modal */
.contributions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .contributions-grid {
    grid-template-columns: 1fr;
  }
}
.contrib-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.04);
}
.contrib-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  background: rgba(212, 175, 55, 0.1);
  color: var(--accent-gold);
  display: flex;
  align-items: center;
  justify-content: center;
}
.youtube-icon {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}
.contrib-title {
  font-size: 0.95rem;
  margin-bottom: 0.4rem;
  color: var(--text-light);
  font-family: var(--font-sans);
  font-weight: 600;
}
.contrib-text {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin: 0;
}

/* Chips */
.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.chip {
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.65rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-dark);
  color: var(--text-muted);
  text-transform: uppercase;
}

.btn-sm {
  padding: 0.55rem 1.25rem;
  font-size: 0.7rem;
}
.btn-arrow {
  margin-left: 0.4rem;
  font-size: 0.85rem;
}

/* Priority GCI Card */
.priority-gci-card {
  position: relative;
  padding: 3rem 2.5rem;
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.07) 0%, rgba(30, 30, 30, 0.98) 35%, rgba(18, 18, 18, 1) 100%);
  border: 1px solid rgba(212, 175, 55, 0.55);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(212, 175, 55, 0.12);
  transition: all var(--transition-normal);
  overflow: hidden;
}
.priority-gci-card:hover {
  border-color: var(--accent-gold);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 45px rgba(212, 175, 55, 0.22);
}

.gold-gradient-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #d4af37, #fef08a, #d4af37, #b8962e);
}

.gci-header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.25);
  margin-bottom: 2rem;
}
.gci-title-block {
  flex: 1;
  min-width: 290px;
}
.priority-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

.gci-program-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 0.5rem;
  color: var(--text-light);
}
.gci-cohort-subtitle {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.gci-org-meta {
  font-size: 1.05rem;
  color: var(--text-muted);
}
.lab-bold {
  color: var(--text-light);
  font-weight: 600;
}
.univ-bold {
  color: var(--accent-gold);
}

.tokyo-seal-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--accent-gold);
  padding: 1.25rem 1.75rem;
  background: rgba(212, 175, 55, 0.06);
  border-radius: 4px;
}
.tokyo-seal-sub {
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  font-weight: 700;
}
.tokyo-seal-main {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-gold);
  line-height: 1.1;
  margin: 0.25rem 0;
}
.tokyo-seal-lab {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  color: var(--text-light);
  font-weight: 600;
}

.gci-lead-text {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 2rem;
}

.gci-spec-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 2rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-dark);
  padding: 1.5rem;
}
@media (max-width: 900px) {
  .gci-spec-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .gci-spec-grid {
    grid-template-columns: 1fr;
  }
}
.gci-spec-box {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.spec-label {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  font-weight: 600;
}
.spec-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-light);
}

.gci-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.gci-verify-note {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
}

/* Secondary Achievements Grid */
.achievements-secondary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
@media (max-width: 860px) {
  .achievements-secondary-grid {
    grid-template-columns: 1fr;
  }
}

.ach-card {
  padding: 2.25rem 2rem;
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-fast);
}
.ach-card:hover {
  border-color: rgba(212, 175, 55, 0.4);
}
.ach-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}
.ach-badge-tag {
  font-size: 0.7rem;
  letter-spacing: 0.12em;
}
.ach-year {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-family: var(--font-serif);
}

.ach-grade-display {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.grade-big {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent-gold);
  line-height: 1;
}
.grade-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.ach-title {
  font-size: 1.25rem;
  margin-bottom: 0.35rem;
  color: var(--text-light);
}
.ach-org {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}
.ach-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

/* CTA Section */
.cta-inner-box {
  padding: 4rem 2rem;
  border: 1px solid var(--border-dark);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.015) 0%, rgba(212, 175, 55, 0.04) 100%);
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

@media (max-width: 768px) {
  .priority-gci-card, .ach-card {
    padding: 2rem 1.5rem;
  }
}
</style>
