<template>
  <main class="portfolio-page">
    <section class="container section hero-section">
      <h1 class="animate-fade-up" v-fade-up style="max-width: 800px;">Academic Foundation<br/>& Technical Expertise</h1>
      <p class="animate-fade-up delay-100 subtitle" v-fade-up>
        Building a strong foundation in Data Science, Artificial Intelligence, and Software Engineering through rigorous academics, hands-on projects, and continuous learning.
      </p>
    </section>

    <section class="container section">
      <h2 class="section-title animate-fade-up" v-fade-up>Education</h2>
      
      <div class="timeline animate-fade-up delay-100" v-fade-up>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <p class="text-small-caps text-gold mb-2">2024 &mdash; Present</p>
          <h3 class="mb-2">Bachelor of Science (B.S.)</h3>
          <p class="degree-title mb-4">Data Science and Applications</p>
          <h4 class="institution mb-4">Indian Institute of Technology Madras</h4>
          
          <div class="badges-row mb-6">
            <span class="badge badge-outline">Foundation Level Completed</span>
            <span class="badge badge-outline">Diploma Level (In Progress)</span>
          </div>
          
          <div class="coursework-section mt-6">
            <h5 class="text-small-caps text-muted mb-4">Relevant Coursework</h5>
            <div class="chips-container">
              <span class="chip">Machine Learning</span>
              <span class="chip">Database Management Systems</span>
              <span class="chip">Data Structures & Algorithms</span>
              <span class="chip">Statistics</span>
              <span class="chip">Mathematics</span>
              <span class="chip">Modern Application Development</span>
              <span class="chip">Programming</span>
              <span class="chip">System Commands</span>
            </div>
          </div>
          
          <div class="mt-8">
            <a href="https://study.iitm.ac.in/ds/academics.html#AC11" target="_blank" class="btn btn-outline">View Curriculum</a>
          </div>
        </div>
      </div>
    </section>
    <section class="container section">
      <div class="cp-section-header animate-fade-up" v-fade-up>
        <div>
          <h2 class="section-title mb-2">Competitive Programming Profiles</h2>
          <p class="cp-section-subtitle">Real-time rating, contest performance, and algorithmic problem-solving scores dynamically connected to each platform.</p>
        </div>
        <button 
          @click="refreshAllScores" 
          class="btn btn-outline btn-sm sync-action-btn" 
          :disabled="isSyncing" 
          title="Refresh latest ratings from platforms"
        >
          <span class="sync-icon" :class="{ 'spin-active': isSyncing }">↻</span>
          <span>{{ isSyncing ? 'Fetching...' : 'Sync Live Ratings' }}</span>
        </button>
      </div>
      
      <div class="cp-grid animate-fade-up delay-100" v-fade-up>
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
              <span class="btn-arrow">↗</span>
            </a>
          </div>
        </div>

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
            <a href="https://codeforces.com/profile/aman.study25" target="_blank" rel="noopener noreferrer" class="handle-tag">
              @aman.study25
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
            <a href="https://codeforces.com/profile/aman.study25" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm cp-btn">
              <span>View Codeforces Profile</span>
              <span class="btn-arrow">↗</span>
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
              <span class="btn-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="container section">
      <h2 class="section-title animate-fade-up" v-fade-up>Certifications</h2>
      
      <div class="cards-grid animate-fade-up delay-100" v-fade-up>
        <div class="card cert-card">
          <h3 class="mb-2">Foundation in Data Science & Programming</h3>
          <p class="text-small-caps text-gold mb-6">Indian Institute of Technology Madras</p>
          
          <h5 class="text-small-caps text-muted mb-4">Skills Learned:</h5>
          <ul class="cert-skills-list mb-8">
            <li>&#10003; Python</li>
            <li>&#10003; Mathematics & Statistics</li>
            <li>&#10003; Computational Thinking</li>
            <li>&#10003; Basic Linux & Shell Scripting</li>
          </ul>
          
          <div class="mt-auto">
            <a href="#" class="btn btn-outline btn-sm">View Credential</a>
          </div>
        </div>

        <div class="card cert-card">
          <h3 class="mb-2">AWS Academy Cloud Foundations</h3>
          <p class="text-small-caps text-gold mb-6">Amazon Web Services (AWS)</p>
          
          <h5 class="text-small-caps text-muted mb-4">Skills Learned:</h5>
          <ul class="cert-skills-list mb-8">
            <li>&#10003; Cloud Concepts & Architecture</li>
            <li>&#10003; Core AWS Services (EC2, S3, RDS)</li>
            <li>&#10003; Security, Identity & Access Management</li>
            <li>&#10003; Cloud Economics and Billing</li>
          </ul>
          
          <div class="mt-auto">
            <a href="#" class="btn btn-outline btn-sm">View Credential</a>
          </div>
        </div>
      </div>
    </section>

    <section class="container section">
      <h2 class="section-title animate-fade-up" v-fade-up>Technical Expertise</h2>
      
      <div class="expertise-grid animate-fade-up delay-100" v-fade-up>
        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Programming</h3>
          <div class="chips-container">
            <span class="chip">Python</span>
            <span class="chip">C</span>
            <span class="chip">C++</span>
            <span class="chip">Java</span>
            <span class="chip">JavaScript</span>
            <span class="chip">SQL</span>
            <span class="chip">Bash</span>
            <span class="chip">R</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Artificial Intelligence</h3>
          <div class="chips-container">
            <span class="chip">Machine Learning</span>
            <span class="chip">Deep Learning</span>
            <span class="chip">Data Analysis</span>
            <span class="chip">Statistics</span>
            <span class="chip">Data Visualization</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Backend Development</h3>
          <div class="chips-container">
            <span class="chip">Flask</span>
            <span class="chip">REST APIs</span>
            <span class="chip">PostgreSQL</span>
            <span class="chip">MySQL</span>
            <span class="chip">SQLite</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Frontend Development</h3>
          <div class="chips-container">
            <span class="chip">Vue.js</span>
            <span class="chip">HTML5</span>
            <span class="chip">CSS3</span>
            <span class="chip">Bootstrap</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Developer Tools</h3>
          <div class="chips-container">
            <span class="chip">Git</span>
            <span class="chip">GitHub</span>
            <span class="chip">Linux</span>
            <span class="chip">Docker</span>
            <span class="chip">VS Code</span>
            <span class="chip">Jupyter Notebook</span>
            <span class="chip">Postman</span>
          </div>
        </div>

        <div class="card expertise-card">
          <h3 class="text-small-caps text-gold mb-4">Currently Learning</h3>
          <div class="chips-container">
            <span class="chip">AWS</span>
            <span class="chip">Kubernetes</span>
            <span class="chip">LangChain</span>
            <span class="chip">LangGraph</span>
            <span class="chip">PyTorch</span>
          </div>
        </div>
      </div>
    </section>

    <section class="container compact-section">
      <h2 class="section-title animate-fade-up" v-fade-up>Academic & Professional Highlights</h2>
      
      <div class="stats-grid animate-fade-up delay-100" v-fade-up>
        <div class="stat-card card">
          <div class="stat-number text-gold">8+</div>
          <div class="stat-label">Foundation Courses<br/>Completed</div>
        </div>
        
        <div class="stat-card card">
          <div class="stat-number text-gold">5</div>
          <div class="stat-label">Projects<br/>Completed</div>
        </div>

        <div class="stat-card card">
          <div class="stat-number text-gold">5</div>
          <div class="stat-label">Programming<br/>Languages</div>
        </div>

        <div class="stat-card card">
          <div class="stat-text text-gold">AI & ML</div>
          <div class="stat-label">Core Research<br/>Areas</div>
        </div>
      </div>
    </section>

    <section class="container compact-section cta-section text-center animate-fade-up" v-fade-up>
      <h2 class="mb-4">Interested in collaborating?</h2>
      <p class="cta-subtitle mx-auto mb-8">
        I'm always open to discussing research opportunities, innovative projects, internships, and software engineering collaborations.
      </p>
      <div class="cta-buttons">
        <a href="/Resume.pdf" target="_blank" class="btn btn-gold">Download Resume</a>
        <router-link to="/contact" class="btn btn-outline">Contact Me</router-link>
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
  },
  codeforces: {
    id: 'codeforces',
    platform: 'Codeforces',
    subtitle: 'Global Timed Rounds',
    badge: 'Div. 2 & 3',
    handle: 'aman.study25',
    url: 'https://codeforces.com/profile/aman.study25',
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
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-8 { margin-top: 2rem; }
.mt-auto { margin-top: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }
.text-center { text-align: center; }

.section {
  min-height: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-section {
  padding-top: 6rem;
  padding-bottom: 4rem;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.subtitle {
  font-size: 1.25rem;
  max-width: 700px;
  line-height: 1.8;
  color: var(--text-muted);
}

.compact-section {
  min-height: auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 4rem;
  color: var(--text-light);
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 1.5rem;
}

.badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  border-radius: 2rem;
}
.badge-outline {
  border: 1px solid var(--accent-gold);
  color: var(--accent-gold);
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.chip {
  background: var(--card-bg-dark);
  border: 1px solid var(--border-dark);
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: var(--text-light);
  border-radius: 4px;
  transition: all var(--transition-fast);
}
.chip:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  transform: translateY(-2px);
}

.degree-title {
  color: var(--accent-gold);
  font-size: 1.15rem;
  letter-spacing: 0.5px;
}
.institution {
  color: var(--text-muted);
  font-weight: 400;
  font-family: var(--font-sans);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}
.cert-card {
  display: flex;
  flex-direction: column;
  transition: transform var(--transition-normal);
}
.cert-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}
.cert-skills-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--text-light);
  font-size: 0.95rem;
}
.cert-skills-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-sm {
  padding: 0.5rem 1.25rem;
  font-size: 0.7rem;
}

.mb-3 { margin-bottom: 0.75rem; }

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
  font-family: var(--font-sans);
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

.cp-topics .chips-container {
  gap: 0.5rem;
}

.cp-topics .chip {
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
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
  font-size: 0.9rem;
}
.cp-btn:hover .btn-arrow {
  transform: translate(3px, -3px);
}

/* CP Section Header & Sync Button */
.cp-section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--border-dark);
  padding-bottom: 1.5rem;
  flex-wrap: wrap;
}
.theme-light .cp-section-header {
  border-bottom-color: var(--border-light);
}

.cp-section-header .section-title {
  border-bottom: none;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
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

/* Score Showcase Box Inside Card */
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

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.expertise-card {
  background: transparent;
  transition: border-color var(--transition-fast);
}
.expertise-card:hover {
  border-color: var(--accent-gold);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}
.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  transition: transform var(--transition-normal);
}
.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-gold);
}
.stat-number {
  font-family: var(--font-serif);
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 1rem;
}
.stat-text {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.stat-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cta-section {
  padding-top: 4rem;
  padding-bottom: 8rem;
}
.cta-subtitle {
  font-size: 1.1rem;
  max-width: 600px;
}
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .stat-number {
    font-size: 3rem;
  }
  .stat-text {
    font-size: 2rem;
  }
  .interest-badge {
    width: 100%;
    text-align: center;
  }
  .cp-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .cp-card {
    padding: 2rem 1.5rem;
  }
}
</style>
