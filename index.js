/* BLOCK TRANSLATION */
(function () {
  var lock = function () {
    document.documentElement.setAttribute("translate", "no");
    document.documentElement.className = "notranslate";
    [
      "#google_translate_element",
      ".goog-te-banner-frame",
      ".skiptranslate",
    ].forEach(function (s) {
      document.querySelectorAll(s).forEach(function (e) {
        e.remove();
      });
    });
    document.body.style.top = "";
  };
  lock();
  new MutationObserver(lock).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();

/* ICONS */
var I = {
  html: '<svg viewBox="0 0 32 32" fill="none"><path d="M4 2l2.4 27L16 31l9.6-2L28 2H4z" fill="#E44D26"/><path d="M16 29l7.8-2.2 2-22.8H16V29z" fill="#F16529"/><path d="M16 13.5H11l-.4-4H16V5.5H6.5l1 11H16v-3zm0 8l-5.2-1.4-.3-3.6H7l.6 6.5L16 25.5V21.5z" fill="#EBEBEB"/><path d="M16 13.5v3h4.7l-.5 5L16 22.8v4l7.4-2.1.1-1 .9-10 .1-1H16zm0-8v4h9.3l.1-1 .2-3H16z" fill="white"/></svg>',
  css: '<svg viewBox="0 0 32 32" fill="none"><path d="M4 2l2.4 27L16 31l9.6-2L28 2H4z" fill="#1572B6"/><path d="M16 29l7.8-2.2 2-22.8H16V29z" fill="#33A9DC"/><path d="M16 13.5H10.8l-.3-3.5H16V6.5H7l.9 10.5H16v-3.5zm0 7.8l-5-1.4-.3-3.4H7.7l.6 6.5L16 25.5v-4.2z" fill="#EBEBEB"/><path d="M16 13.5v3.5h4.9l-.5 5.3L16 23.3v4.2l7.4-2.1 1-11.4H16zm0-7v3.5h9.5l.3-3.5H16z" fill="white"/></svg>',
  js: '<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="2" fill="#F7DF1E"/><path d="M9.7 24.9l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7v-9.5h2.8V23c0 2.7-1.6 4-3.9 4-2.1 0-3.3-1.1-3.9-2.5l1.6-.6zm8.5-.4l2.3-1.4c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-1.9-.8-3.2-1.8-3.2-3.9 0-1.9 1.5-3.4 3.7-3.4 1.6 0 2.8.6 3.6 2l-2.2 1.4c-.4-.8-.9-1.1-1.6-1.1-.7 0-1.2.4-1.2 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.3 1 3.5 2 3.5 4.2 0 2.4-1.9 3.6-4.4 3.6-2.5 0-4-1.2-4.9-2.7z" fill="#323232"/></svg>',
  ts: '<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="2" fill="#3178C6"/><path d="M18.6 22.8v2.7c.5.2 1 .4 1.7.5.6.1 1.3.2 2 .2.7 0 1.3-.1 1.9-.2.6-.2 1.1-.4 1.5-.8.4-.3.7-.8.9-1.3.2-.5.3-1.2.3-1.9 0-.5-.1-1-.2-1.4-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.6-1.1-.9-.4-.3-.9-.5-1.5-.8l-.8-.3c-.3-.1-.6-.3-.8-.4-.2-.1-.4-.3-.5-.5-.1-.2-.2-.4-.2-.7 0-.2 0-.4.1-.6.1-.2.2-.3.4-.5.2-.1.4-.2.6-.3.3-.1.5-.1.8-.1.3 0 .5 0 .8.1.3 0 .5.1.8.2.3.1.5.2.7.3.2.1.4.3.6.4v-2.6c-.4-.1-.8-.3-1.4-.4-.5-.1-1.1-.1-1.7-.1-.7 0-1.3.1-1.9.3-.6.2-1 .5-1.5.8-.4.4-.7.8-.9 1.3-.2.5-.3 1.1-.3 1.7 0 .9.2 1.6.7 2.2.4.6 1.1 1.1 2 1.5l.9.4c.4.2.7.3.9.4.3.2.5.3.6.5.1.2.2.4.2.7 0 .2 0 .5-.1.7-.1.2-.3.4-.5.5-.2.1-.4.2-.7.3-.3.1-.5.1-.8.1-.7 0-1.3-.1-1.9-.4-.6-.2-1.1-.6-1.5-1zm-5.3-9.1h4V11H7v2.7h4v12.3h2.3V13.7z" fill="white"/></svg>',
  node: '<svg viewBox="0 0 32 32" fill="none"><path d="M16 2.6L4 9.3v13.4l12 6.7 12-6.7V9.3L16 2.6z" fill="#339933"/><path d="M16 5.4l9.2 5.3v10.6L16 26.6l-9.2-5.3V10.7L16 5.4z" fill="#333"/><path d="M16 8.5c-.5 0-.9.4-.9.9v8.1c0 .3.2.6.4.8l5.8 3.4c.4.2.9.1 1.2-.3.2-.4.1-.9-.3-1.2l-5.3-3.1V9.4c0-.5-.4-.9-.9-.9z" fill="#339933"/><path d="M16 8.5c.5 0 .9.4.9.9v7.7l5.3 3.1c.4.2.5.7.3 1.2-.2.4-.8.5-1.2.3l-5.8-3.4c-.2-.1-.4-.4-.4-.8V9.4c0-.5.4-.9.9-.9z" fill="#6CC24A"/></svg>',
  react:
    '<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" stroke-width="1.4" fill="none"/><ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" stroke-width="1.4" fill="none" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" stroke-width="1.4" fill="none" transform="rotate(120 16 16)"/></svg>',
  py: '<svg viewBox="0 0 32 32" fill="none"><path d="M15.9 2C11.2 2 11.5 4 11.5 4v4.1h4.6V9H7.9S5 8.7 5 13.5s2.6 4.7 2.6 4.7h1.6v-2.3s-.1-2.6 2.5-2.6h4.3s2.4.1 2.4-2.3V4.4S18.9 2 15.9 2zm-2.5 1.5c.5 0 .8.4.8.8s-.4.8-.8.8-.8-.4-.8-.8.4-.8.8-.8z" fill="#3776AB"/><path d="M16.1 30c4.7 0 4.4-2 4.4-2v-4.1h-4.6V23h8.2S27 23.3 27 18.5s-2.6-4.7-2.6-4.7h-1.6v2.3s.1 2.6-2.5 2.6h-4.3s-2.4-.1-2.4 2.3v4.6S13.1 30 16.1 30zm2.5-1.5c-.5 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8z" fill="#FFD43B"/></svg>',
  java: '<svg viewBox="0 0 32 32" fill="none"><path d="M12.2 22.5s-1 .6.7.8c2 .2 3 .2 5.2-.2 0 0 .6.4 1.4.7-5 2.1-11.2-.1-7.3-1.3zm-.6-2.8s-1.1.8.6.9c2.2.2 4 .2 7-.3 0 0 .4.4 1 .6-6.2 1.8-13.1.2-8.6-1.2z" fill="#E76F00"/><path d="M17.4 14.4c1.3 1.4-.3 2.7-.3 2.7s3.1-1.6 1.7-3.6c-1.3-1.9-2.4-2.8 3.2-6 0 0-8.7 2.2-4.6 6.9z" fill="#E76F00"/><path d="M23.9 24.4s.7.6-.8.9c-3 .9-12.4 1.2-15 0-1-.4.8-.9 1.4-1 .6-.1.9-.1.9-.1-.9-.7-6.3 1.4-2.7 2 9.8 1.6 17.8-.7 16.2-1.8zm-11.5-8.1s-4.4 1-.7 1.8c1.8.4 5.3.3 8.6-.1 2.7-.4 5.4-1.1 5.4-1.1s-.9.4-1.6.8c-6.4 1.7-18.8.9-15.2-.8 3-1.4 3.5-1.6 3.5-1.6zm11.7 6.5c6.5-3.4 3.5-6.6 1.4-6.2-.5.1-.7.2-.7.2s.2-.3.6-.4c4.3-1.5 7.7 4.4-1.4 6.7 0-.1.1-.2.1-.3z" fill="#5382A1"/><path d="M19 2s2.5 2.5-2.4 6.3c-3.9 3.1-.9 4.9 0 6.9-2.3-2-3.9-3.8-2.8-5.5C15.4 7.4 20.1 6.2 19 2z" fill="#E76F00"/><path d="M13.5 29.9c6.2.4 15.7-.2 16-2.8 0 0-.4 1.1-5.1 1.9-5.4.9-12 .8-15.9.2 0 0 .8.7 5 .7z" fill="#5382A1"/></svg>',
  docker:
    '<svg viewBox="0 0 32 32" fill="none"><path d="M28.8 14.2c-.3-.2-1-.6-2.3-.5-.2-1.5-1.1-2.8-2.2-3.6l-.5-.3-.3.4c-.5.7-.7 1.9-.6 2.8.1.6.3 1.2.7 1.7-.3.2-.9.4-1.7.4H2.3c-.2 1.1 0 3.6 1.5 5.6 1.2 1.6 3 2.4 5.3 2.4 5 0 8.7-2.3 10.5-6.4.7 0 2.1 0 2.9-1.4l.1-.2-.3-.1c-.3-.2-.5-.5-.5-.8zm-12.3-9.7H14v2.4h2.5V4.5zm0 3.1H14v2.4h2.5V7.6zm-3.2 0h-2.5V10h2.5V7.6zm-3.1 0H7.7V10h2.5V7.6zm3.1-3.1H10.8v2.4h2.5V4.5zm-3.1 0H7.7v2.4h2.5V4.5zm-3.2 3.1H4.5V10H7v-2.4zm6.3 6.2h-2.5v2.4h2.5v-2.4zm3.2 0H13v2.4h2.5v-2.4zm3.1 0h-2.5v2.4h2.5v-2.4zm-9.5 0H7.7v2.4h2.5v-2.4zm-3.1 0H4.6v2.4H7v-2.4z" fill="#2496ED"/></svg>',
  git: '<svg viewBox="0 0 32 32" fill="none"><path d="M30.5 14.6L17.4 1.5a1.8 1.8 0 00-2.5 0L12 4.4l3.2 3.2a2.1 2.1 0 012.6 2.7l3 3a2.1 2.1 0 012.7 2.6 2.1 2.1 0 11-2.5.5l-2.8-2.8v7.4a2.1 2.1 0 01.6 3.8 2.1 2.1 0 11-2.8-3 2 2 0 00.6-1.4v-7.7a2.1 2.1 0 01-1.1-2.8L11.8 7 1.5 17.2a1.8 1.8 0 000 2.5l13.1 13.1a1.8 1.8 0 002.5 0L30.5 19.3z" fill="#F05032"/></svg>',
  sql: '<svg viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="8" rx="10" ry="3.5" fill="#4479A1"/><path d="M6 8v5c0 1.9 4.5 3.5 10 3.5S26 14.9 26 13V8" stroke="#4479A1" stroke-width="1.5" fill="none"/><path d="M6 13v5c0 1.9 4.5 3.5 10 3.5S26 19.9 26 18v-5" stroke="#4479A1" stroke-width="1.5" fill="none"/><path d="M6 18v5c0 1.9 4.5 3.5 10 3.5S26 24.9 26 23v-5" stroke="#4479A1" stroke-width="1.5" fill="none"/><ellipse cx="16" cy="8" rx="10" ry="3.5" fill="#336791" opacity=".5"/></svg>',
  bash: '<svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#1e1e1e"/><path d="M7 11l5 5-5 5" stroke="#4EC9B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 21h10" stroke="#4EC9B0" stroke-width="2" stroke-linecap="round"/></svg>',
};

var stack = [
  { ic: I.html, n: "HTML5", lv: 95, c: "#E44D26" },
  { ic: I.css, n: "CSS3", lv: 90, c: "#1572B6" },
  { ic: I.js, n: "JavaScript", lv: 88, c: "#F7DF1E" },
  { ic: I.ts, n: "TypeScript", lv: 82, c: "#3178C6" },
  { ic: I.node, n: "Node.js", lv: 87, c: "#339933" },
  { ic: I.react, n: "React", lv: 82, c: "#61DAFB" },
  { ic: I.py, n: "Python", lv: 90, c: "#3776AB", b: "Scripts" },
  { ic: I.java, n: "Java", lv: 92, c: "#E76F00", b: "Apps" },
  { ic: I.docker, n: "Docker", lv: 80, c: "#2496ED" },
  { ic: I.sql, n: "SQL", lv: 85, c: "#4479A1" },
  { ic: I.bash, n: "Bash", lv: 78, c: "#4EC9B0" },
  { ic: I.git, n: "Git", lv: 95, c: "#F05032" },
];

var projects = [
  {
    n: "SmartBudget",
    sub: "Personal Finance Tracker",
    tags: [
      { l: "Python", c: "ta" },
      { l: "FastAPI", c: "" },
    ],
    col: "#6ee7b7",
    img: "SmartBudget.PNG",
    prob: "Most finance apps overwhelm users with features they never use. People wanted one clean place to track income, expenses, and savings goals without a subscription.",
    sol: "Built a high-performance full-stack application using Python and FastAPI for asynchronous data fetching. Designed a normalized PostgreSQL schema to ensure financial data integrity across transactions and saving goals. The frontend is a lightweight, responsive dashboard built with Vanilla JavaScript and Chart.js, served via Nginx on a Linux VPS",
    res: "300+ sign-ups in the first month with zero marketing. Average session time of 8 minutes. Users actually engaged with their data.",
    m: "300+",
    ml: "Users in month one",
    github: "https://github.com/prof1119/SmartBudget.git",
    live: "smartbudget.html",
  },
  {
    n: "LinkPulse",
    sub: "URL Analytics Platform",
    tags: [
      { l: "Python", c: "ta" },
      { l: "FastAPI", c: "" },
      { l: "Redis", c: "tb" },
      { l: "Docker", c: "" },
    ],
    col: "#818cf8",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    prob: "Marketers sharing links had no visibility into which channels drove clicks, what devices were used, or when traffic peaked. They were flying blind.",
    sol: "Built a Python/FastAPI shortener that captures click metadata in real-time into Redis, with a cron job aggregating stats into PostgreSQL and a vanilla JS frontend with live chart updates.",
    res: "Handles 15,000 redirects per day on a single $10 server. P99 redirect latency under 40ms thanks to Redis caching.",
    m: "40ms",
    ml: "P99 redirect latency",
    github: "https://github.com/ahmedghareeb",
    live: "#",
  },
  {
    n: "DevBoard",
    sub: "Team Task Manager",
    tags: [
      { l: "Java", c: "ta" },
      { l: "Spring Boot", c: "" },
      { l: "React", c: "tb" },
      { l: "MySQL", c: "" },
    ],
    col: "#f87171",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80",
    prob: "Small dev teams bouncing between Trello, Slack, and GitHub needed a single kanban board that ties tasks directly to GitHub issues without paying for enterprise tools.",
    sol: "Built a Spring Boot REST API with role-based auth (Admin/Member/Viewer), a React drag-and-drop kanban board, and a GitHub webhook integration that auto-updates cards when PRs merge.",
    res: "Used daily by a 12-person team for 6+ months. Status-update meetings dropped from 3x/week to 1x/week.",
    m: "-66%",
    ml: "Fewer status meetings",
    github: "https://github.com/ahmedghareeb",
    live: "#",
  },
];

var services = [
  {
    ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="26" height="26"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M3 17.5h4m-2-2v4M7 14h3v3H7z"/></svg>',
    ttl: "Scalable Backend Systems",
    dsc: "Architecting high-performance backends using Java (Spring Boot) and Node.js, focused on microservices, event-driven design, and seamless API integration.",
    tags: ["Java", "Spring Boot", "Kafka", "Microservices"],
  },
  {
    ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="26" height="26"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    ttl: "Full-Stack Solutions",
    dsc: "Delivering end-to-end web applications by bridging modern React frontends with robust TypeScript-based backends for a unified user experience.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="26" height="26"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l4 4"/></svg>',
    ttl: "Process Automation & ETL",
    dsc: "Automating complex workflows and data pipelines with Python, including web scraping, scheduled tasks, and efficient data processing engines.",
    tags: ["Python", "Automation", "Selenium", "ETL"],
  },
  {
    ico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="26" height="26"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
    ttl: "Strategic Tech Advisory",
    dsc: "Improving team velocity and code quality through deep-dive architecture audits, performance tuning, and technical mentoring.",
    tags: ["Code Review", "Optimization", "System Design"],
  },
];

var exp = [
  {
    d: "2023 - Present",
    r: "Independent Full-Stack Developer",
    c: "Personal Lab / Freelance",
    desc: "Building production-ready systems, including a high-throughput fintech-style platform. Implementing Java/Spring Boot microservices and data pipelines for real-world scenarios.",
    sk: ["Java", "Spring Boot", "Python", "Kafka", "AWS"],
  },
  {
    d: "2022 - 2023",
    r: "Backend & Systems Focus",
    c: "Open Source & Side Projects",
    desc: "Developed real-time event systems and Node.js APIs. Focused on building reliable, well-documented tools and deploying them using Docker and Redis.",
    sk: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
  },
  {
    d: "2021 - 2022",
    r: "Backend Exploration",
    c: "Self-Initiated Projects",
    desc: "Started building SaaS analytics tools with Python and Django. Focused on writing clean, testable code and understanding database optimization.",
    sk: ["Python", "Django", "MySQL", "Git"],
  },
  {
    d: "2020 - 2021",
    r: "Computer Science Foundations",
    c: "Self-Directed Learning",
    desc: "Dedicated this period to mastering how software works under the hood. Deep-dived into core CS fundamentals, focusing on distributed systems and high-performance algorithms.",
    sk: ["Data Structures", "Algorithms", "Operating Systems", "Networking"],
  },
];
/* MARQUEE */
var mqi = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Python",
  "Java",
  "Docker",
  "SQL",
  "Bash",
  "Git",
  "REST APIs",
  "Microservices",
  "CI/CD",
];
var mqEl = document.getElementById("mqT");
mqEl.innerHTML = []
  .concat(mqi, mqi)
  .map(function (t) {
    return (
      '<div class="mqi"><svg viewBox="0 0 8 8" fill="#6ee7b7" width="6" height="6"><circle cx="4" cy="4" r="2.5"/></svg>' +
      t +
      "</div>"
    );
  })
  .join("");

/* STACK */
var skEl = document.getElementById("skGrid");
skEl.innerHTML = stack
  .map(function (s, i) {
    return (
      '<div class="ski rv" style="--tc:' +
      s.c +
      ";transition-delay:" +
      i * 40 +
      'ms">' +
      '<div class="ski-icon">' +
      s.ic +
      "</div>" +
      '<div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;justify-content:center">' +
      '<div class="ski-name">' +
      s.n +
      "</div>" +
      (s.b ? '<span class="ski-badge">' + s.b + "</span>" : "") +
      "</div>" +
      '<div class="ski-bw"><div class="ski-b" style="--lv:' +
      s.lv +
      "%;background:" +
      s.c +
      '"></div></div>' +
      "</div>"
    );
  })
  .join("");

/* PROJECTS */
var pjEl = document.getElementById("pjList");
pjEl.innerHTML = projects
  .map(function (p, i) {
    return (
      '<div class="pjcard rv" style="transition-delay:' +
      i * 60 +
      'ms" onclick="tglPj(this)">' +
      '<div class="pjhd">' +
      '<div class="pjmeta"><span class="pjidx">0' +
      (i + 1) +
      '</span><div><div class="pjname">' +
      p.n +
      '</div><div style="font-size:.68rem;color:var(--tm);margin-top:2px">' +
      p.sub +
      "</div></div></div>" +
      '<div class="pjrt">' +
      '<div class="tags">' +
      p.tags
        .map(function (t) {
          return '<span class="tag ' + t.c + '">' + t.l + "</span>";
        })
        .join("") +
      "</div>" +
      '<div class="pjtog"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><path d="M8 3v10M3 8h10"/></svg></div>' +
      "</div></div>" +
      '<div class="pjbody"><div class="pjin">' +
      '<div class="pjthumb">' +
      '<img src="' +
      p.img +
      '" alt="' +
      p.n +
      '" class="thimg" loading="lazy">' +
      '<div class="thov"></div>' +
      "</div>" +
      '<div class="cs">' +
      '<div class="csb lp"><div class="csl"><span class="csd"></span>The Problem</div><p class="cst">' +
      p.prob +
      "</p></div>" +
      '<div class="csb ls"><div class="csl"><span class="csd"></span>The Solution</div><p class="cst">' +
      p.sol +
      "</p></div>" +
      '<div class="csb lr"><div class="csl"><span class="csd"></span>The Result</div><span class="csm">' +
      p.m +
      '</span><p style="font-size:.63rem;color:var(--tm);margin-bottom:5px">' +
      p.ml +
      '</p><p class="cst">' +
      p.res +
      "</p></div>" +
      "</div>" +
      '<div class="pjlinks">' +
      '<a href="' +
      p.github +
      '" target="_blank" class="pjlink" onclick="event.stopPropagation()"><svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>GitHub</a>' +
      (p.live
        ? '<a href="' +
          p.live +
          '" target="_blank" class="pjlink" onclick="event.stopPropagation()"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="13" height="13"><path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5v5M14 2L8 8"/></svg>Live Demo</a>'
        : "") +
      "</div></div></div></div>"
    );
  })
  .join("");

/* SERVICES */
var svEl = document.getElementById("svGrid");
svEl.innerHTML = services
  .map(function (s, i) {
    return (
      '<div class="svcard rv" style="transition-delay:' +
      i * 70 +
      'ms">' +
      '<div class="svico">' +
      s.ico +
      "</div>" +
      '<h3 class="svttl">' +
      s.ttl +
      "</h3>" +
      '<p class="svdsc">' +
      s.dsc +
      "</p>" +
      '<div class="tags">' +
      s.tags
        .map(function (t) {
          return '<span class="tag">' + t + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>"
    );
  })
  .join("");

/* CONTRIB GRID */
var cg = document.getElementById("cgrid");
var ch = "";
for (var i = 0; i < 52 * 7; i++) {
  var r = Math.random();
  var l =
    r > 0.78 ? "l4" : r > 0.58 ? "l3" : r > 0.38 ? "l2" : r > 0.2 ? "l1" : "";
  var n =
    l === "l4"
      ? Math.floor(Math.random() * 8 + 5)
      : l === "l3"
        ? Math.floor(Math.random() * 4 + 3)
        : l === "l2"
          ? 2
          : l === "l1"
            ? 1
            : 0;
  ch +=
    '<div class="cc ' +
    l +
    '" title="' +
    n +
    " contribution" +
    (n !== 1 ? "s" : "") +
    '"></div>';
}
cg.innerHTML = ch;

/* LANG BARS */
var ld = [
  { n: "Java", p: 34, c: "#E76F00" },
  { n: "Python", p: 27, c: "#3776AB" },
  { n: "JavaScript", p: 18, c: "#F7DF1E" },
  { n: "TypeScript", p: 11, c: "#3178C6" },
  { n: "Bash / SQL", p: 7, c: "#4EC9B0" },
  { n: "HTML / CSS", p: 3, c: "#E44D26" },
];
var lrEl = document.getElementById("lrRows");
lrEl.innerHTML = ld
  .map(function (l) {
    return (
      '<div class="lrr"><div class="lrn">' +
      l.n +
      '</div><div class="lrbw"><div class="lrb" style="background:' +
      l.c +
      '" data-w="' +
      l.p +
      '%"></div></div><div class="lrp">' +
      l.p +
      "%</div></div>"
    );
  })
  .join("");
new IntersectionObserver(
  function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting)
        e.target.querySelectorAll(".lrb").forEach(function (b) {
          b.style.width = b.dataset.w;
        });
    });
  },
  { threshold: 0.3 },
).observe(lrEl);

/* TIMELINE */
var tlEl = document.getElementById("tlEl");
tlEl.innerHTML = exp
  .map(function (t, i) {
    return (
      '<div class="tli rv" style="transition-delay:' +
      i * 80 +
      'ms">' +
      '<div class="tld">' +
      t.d +
      "</div>" +
      '<div class="tlr">' +
      t.r +
      "</div>" +
      '<div class="tlc">' +
      t.c +
      "</div>" +
      '<div class="tldesc">' +
      t.desc +
      "</div>" +
      '<div class="tltgs">' +
      t.sk
        .map(function (s) {
          return '<span class="tag">' + s + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>"
    );
  })
  .join("");

/* TOGGLE PROJECT */
function tglPj(el) {
  var was = el.classList.contains("open");
  document.querySelectorAll(".pjcard.open").forEach(function (c) {
    c.classList.remove("open");
  });
  if (!was) el.classList.add("open");
}

/* SCROLL REVEAL */
var obs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add("on");
    });
  },
  { threshold: 0.06, rootMargin: "0px 0px -28px 0px" },
);
document.querySelectorAll(".rv").forEach(function (el) {
  obs.observe(el);
});
/* Hero reveals immediately */
setTimeout(function () {
  document.querySelectorAll("#hero .rv").forEach(function (el) {
    el.classList.add("on");
  });
}, 50);

/* NAV SCROLL */
window.addEventListener("scroll", function () {
  document.getElementById("nav").classList.toggle("sc", window.scrollY > 34);
});

/* MOBILE NAV */
function toggleNav() {
  var ul = document.querySelector(".nl");
  var open = ul.style.display === "flex";
  if (open) {
    ul.style.display = "";
  } else {
    ul.style.cssText =
      "display:flex;flex-direction:column;position:fixed;top:66px;left:0;right:0;background:rgba(13,15,20,.96);backdrop-filter:blur(18px);padding:20px 5%;border-bottom:1px solid rgba(255,255,255,.07);gap:18px;z-index:199;";
  }
}

document.querySelectorAll('*').forEach(el => {
    el.setAttribute('translate', 'no');
    el.classList.add('notranslate');
});