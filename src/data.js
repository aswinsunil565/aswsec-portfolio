export const stats = [
  [10, "Security Tools", "Recon • Testing • Analysis"],
  [3, "Security Domains", "Network • Web • Linux"],
  [2, "Projects", "Academic & Practical"],
  [1, "Focus", "Cybersecurity"],
];
export const aboutTags = [
  "Network Security",
  "Web Security",
  "Penetration Testing",
  "Linux",
];
export const education = [
  [
    "2020 — 2024",
    "B.Tech — Computer Science & Engineering",
    "Mar Baselios Christian College of Engineering and Technology, Kuttikkanam",
    "Kerala, India",
  ],
  [
    "2026 — Present",
    "Techbyheart Academy",
    "Hands-on labs, web security, networking & penetration testing",
    "TryHackMe • Personal Labs",
  ],
];
export const skillCards = [
  [
    "01",
    "Offensive Security",
    "Reconnaissance, enumeration, vulnerability testing and basic web application security.",
    [
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Gobuster",
      "Nikto",
      "SQLmap",
      "Hydra",
      "Wireshark",
    ],
  ],
  [
    "02",
    "Network & Analysis",
    "Understanding protocols, traffic, services and common network-security concepts.",
    [
      "TCP/IP",
      "DNS",
      "HTTP/HTTPS",
      "Wireshark",
      "OSI",
      "Ports",
      "Nslookup",
      "Traceroute",
      "Dig",
    ],
  ],
  [
    "03",
    "Web Security",
    "Core OWASP concepts and beginner-level testing of common web vulnerabilities.",
    ["OWASP Top 10", "XSS", "SQL Injection", "Auth", "Burp"],
  ],
  [
    "04",
    "Scripting & Systems",
    "Using scripting and Linux tools to automate repetitive security tasks and labs.",
    ["Python", "Kali Linux", "Linux CLI", "Windows", "Git"],
  ],
];
export const toolRows = [
  [
    "Recon",
    [
      "Nmap",
      "Gobuster",
      "Whois",
      "Amass",
      "Assetfinder",
      "Subfinder",
      "Subbrute",
      "Sublist3r",
      "WhatWeb",
      "Dig",
      "Nslookup",
      "theHarvester",
    ],
  ],
  [
    "Web",
    [
      "Burp Suite",
      "SQLmap",
      "Nikto",
      "Gobuster",
      "FFUF",
      "Dirb",
      "Dirsearch",
      "Nuclei",
      "SQLmap",
      "Wfuzz",
    ],
  ],
  [
    "Vuln Assessment",
    ["Nessus", "OpenVAS", "Nuclei", "Nikto", "Burp Suite", "OWASP ZAP"],
  ],
  ["OS", ["Linux", "Kali Linux", "Windows", "Ubuntu"]],
  [
    "Development",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Bootstrap",
      "Node.js",
      "Git",
      "Github",
    ],
  ],
  [
    "Design",
    [
      "UI/UX",
      "Figma",
      "Adobe Photoshop",
      "Adobe XD",
      "Adobe Illustrator",
      "Responsive Design",
    ],
  ],
];
// [name, percent] – used by the interactive terminal
export const skills = [
  ["Network Security"],
  ["Web Security"],
  ["Penetration Testing"],
  ["Linux"],
  ["Python"],
];
export const filters = [
  ["all", "All"],
  ["security", "Security"],
  ["python", "Python"],
  ["ai", "AI / ML"],
];
export const projects = [
  {
    n: "01",
    type: "Security Tool",
    name: "Mini-Nmap Scanner",
    cat: "security python",
    status: "Completed",
    desc: "A simplified network scanner that accepts an IP address, identifies common ports, classifies open/closed states and displays response time, with optional basic service detection.",
    tags: ["Python", "Networking", "Nmap Concepts"],
    link: "Code ↗",
    href: "https://github.com/aswinsunil565/Mini-Nmap",
  },
  {
    n: "02",
    type: "Academic Project",
    name: "NOTEIFY",
    cat: "python ai",
    status: "Completed",
    desc: "AI-assisted note-taking application that converts spoken content into text, processes it and generates concise notes for later retrieval.",
    tags: ["Whisper AI", "NLP", "Flutter", "Python"],
    link: "View details ↗",
    href: "#",
  },
  {
    n: "03",
    type: "Learning Lab",
    name: "Web Security Labs",
    cat: "security",
    status: "Ongoing",
    desc: "Hands-on practice with reconnaissance, HTTP, authentication, XSS, SQL injection, Burp Suite and OWASP Top 10 concepts.",
    tags: ["Burp Suite", "OWASP", "Linux"],
    link: "View learning path ↗",
    href: "#",
  },
];
export const nav = [
  "About",
  "Education",
  "Skills",
  "Terminal",
  "Projects",
  "Contact",
];
