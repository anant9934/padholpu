/**
 * PADHO LPU — Semester Curriculum & Academic Architecture Mapping
 *
 * Provides verified curricular structure, subjects, examination blueprints,
 * and academic objectives for LPU semesters 1 through 8.
 */

export interface SemesterSubject {
  code: string;
  name: string;
  category: "Computer Science" | "Mathematics" | "Sciences" | "Electronics" | "Mechanical" | "Specialization" | "Practicum";
  credits: number;
  totalUnits: number;
  description: string;
  isAvailableOnPlatform: boolean;
}

export interface SemesterDetail {
  number: number;
  roman: string;
  title: string;
  stage: "Foundation Sciences" | "Engineering Core" | "Advanced Systems" | "Capstone & Industry";
  summary: string;
  overview: string;
  academicFocus: string[];
  mteGuidance: string;
  eteGuidance: string;
  caGuidance: string;
  subjects: SemesterSubject[];
  faqs: { question: string; answer: string }[];
}

export const SEMESTERS_DATA: Record<number, SemesterDetail> = {
  1: {
    number: 1,
    roman: "I",
    title: "Semester 1 — Foundation Engineering & Sciences",
    stage: "Foundation Sciences",
    summary: "Establishment of foundational mathematical analysis, introductory computational logic in Python, and molecular chemical sciences.",
    overview: "LPU Semester 1 introduces engineering students to foundational sciences, programming basics, and mathematical calculus. Mastering continuous assessments and understanding conceptual frameworks early builds a resilient GPA foundation.",
    academicFocus: [
      "Algorithmic Thinking & Procedural Python Programming",
      "Differential Calculus & Analytical Linear Algebra",
      "Applied Chemical Sciences for Engineering",
      "Engineering Graphics & Computer-Aided Drafting"
    ],
    mteGuidance: "Midterm examinations for Semester 1 evaluate Units 1 through 3. Focus heavily on syntax fundamentals in Python and derivative calculus limits in Mathematics.",
    eteGuidance: "End Term examinations cover the full 5-unit syllabus. Emphasize multi-step chemical kinetics, linear systems, and Python nested control structures.",
    caGuidance: "Continuous assessments require weekly coding lab submissions, viva practice, and regular LMS objective quizzes.",
    subjects: [
      {
        code: "CSE111",
        name: "Computer Programming (Python)",
        category: "Computer Science",
        credits: 4,
        totalUnits: 5,
        description: "Fundamental procedural programming, data types, control flow, functions, lists, dictionaries, and file I/O in Python.",
        isAvailableOnPlatform: true
      },
      {
        code: "MTH166",
        name: "Engineering Mathematics I",
        category: "Mathematics",
        credits: 4,
        totalUnits: 5,
        description: "Differential calculus, expansion of functions, matrices, eigenvalues, and multivariable functions.",
        isAvailableOnPlatform: true
      },
      {
        code: "CHE110",
        name: "Engineering Chemistry",
        category: "Sciences",
        credits: 3,
        totalUnits: 4,
        description: "Spectroscopic techniques, water technology, chemical bonding, polymer chemistry, and electrochemistry.",
        isAvailableOnPlatform: true
      },
      {
        code: "PHY110",
        name: "Engineering Physics",
        category: "Sciences",
        credits: 4,
        totalUnits: 5,
        description: "Wave optics, quantum mechanics, laser technology, fiber optics, and electromagnetic field theory.",
        isAvailableOnPlatform: true
      },
      {
        code: "MEC136",
        name: "Engineering Graphics & Design",
        category: "Mechanical",
        credits: 3,
        totalUnits: 5,
        description: "Orthographic projections, isometric projections, sectional views, and computer-aided drafting (CAD).",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "What are the core subjects in LPU Semester 1?",
        answer: "Semester 1 primarily covers Computer Programming (CSE111), Engineering Mathematics I (MTH166), Engineering Chemistry (CHE110), Engineering Physics (PHY110), and Engineering Graphics & Design (MEC136)."
      },
      {
        question: "Where can I find LPU Semester 1 notes and question papers?",
        answer: "Padho LPU provides verified syllabus unit notes, previous-year question papers (PYQs), and practice quizzes for CSE111, MTH166, CHE110, and more with zero paywalls."
      },
      {
        question: "How should I prepare for LPU Semester 1 MTE exams?",
        answer: "Focus on Units 1 to 3 for each subject. Take timed mock drills and review past term papers to understand objective MCQ weightage and subjective problem formats."
      }
    ]
  },
  2: {
    number: 2,
    roman: "II",
    title: "Semester 2 — Applied Sciences & Core Hardware Principles",
    stage: "Foundation Sciences",
    summary: "Advanced integral calculus, basic electrical circuits, electronic devices, and mechanical systems foundations.",
    overview: "LPU Semester 2 broadens the engineering toolkit to electrical engineering, vector calculus, and applied physical instrumentation, preparing students for upper-division disciplinary courses.",
    academicFocus: [
      "Vector Calculus, Multiple Integrals & Differential Equations",
      "Network Theorems, AC Circuits & Semiconductor Devices",
      "Basic Electrical & Electronics Troubleshooting",
      "Physical Sciences Laboratory & Environmental Studies"
    ],
    mteGuidance: "Prioritize Thevenin/Norton network theorem problems in ECE249 and double integration techniques in MTH165 for MTE Units 1-3.",
    eteGuidance: "ETE demands comprehensive integration of AC steady-state circuit analysis, diode/transistor characteristics, and differential equations.",
    caGuidance: "Maintain disciplined hardware lab logs and prepare for circuit simulation assignments.",
    subjects: [
      {
        code: "MTH165",
        name: "Engineering Mathematics II",
        category: "Mathematics",
        credits: 4,
        totalUnits: 5,
        description: "Multiple integrals, vector calculus, gradient, divergence, curl, Green's and Stokes' theorems, and differential equations.",
        isAvailableOnPlatform: true
      },
      {
        code: "ECE249",
        name: "Basic Electrical and Electronics Engineering",
        category: "Electronics",
        credits: 4,
        totalUnits: 5,
        description: "DC circuits, network theorems, AC circuits, semiconductor diodes, BJT configurations, and digital electronics basics.",
        isAvailableOnPlatform: true
      },
      {
        code: "PHY110",
        name: "Engineering Physics",
        category: "Sciences",
        credits: 4,
        totalUnits: 5,
        description: "Electromagnetic theory, quantum wave equations, lasers, optical fibers, and semiconductor physics.",
        isAvailableOnPlatform: true
      },
      {
        code: "MEC136",
        name: "Engineering Graphics & Design",
        category: "Mechanical",
        credits: 3,
        totalUnits: 5,
        description: "Projection of solids, isometric views, development of surfaces, and technical blueprint drafting.",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "Which subjects require the most practice in LPU Semester 2?",
        answer: "Engineering Mathematics II (MTH165) and Basic Electrical and Electronics Engineering (ECE249) require continuous mathematical derivation and circuit problem solving."
      },
      {
        question: "Where can I practice MCQs for ECE249 and MTH165?",
        answer: "Padho LPU offers unit-wise MCQ question banks and timed simulation mock tests calibrated specifically to LPU examination rubrics."
      }
    ]
  },
  3: {
    number: 3,
    roman: "III",
    title: "Semester 3 — Data Structures & Core Computation",
    stage: "Engineering Core",
    summary: "Deep dive into linear and non-linear data structures, relational database management, and discrete mathematical structures.",
    overview: "Semester 3 is the critical pivot into core Computer Science. Data Structures and Database Management Systems form the foundational cornerstone for technical interviews and upper-level engineering courses.",
    academicFocus: [
      "Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs",
      "Asymptotic Complexity (Big-O, Omega, Theta) & Algorithm Analysis",
      "Relational Database Schema Design, SQL, and Normalization",
      "Set Theory, Combinatorics, and Discrete Mathematical Structures"
    ],
    mteGuidance: "Master pointer manipulation for linked lists, stacks, and binary search trees in DSA, and SQL queries with joins for DBMS.",
    eteGuidance: "ETE heavily tests graph traversal algorithms (BFS/DFS, Dijkstra), B/B+ trees, transaction ACID properties, and concurrency control.",
    caGuidance: "Implement all data structures from scratch without reliance on pre-built standard template libraries to succeed in laboratory evaluations.",
    subjects: [
      {
        code: "CSE205",
        name: "Data Structures and Algorithms",
        category: "Computer Science",
        credits: 4,
        totalUnits: 5,
        description: "Abstract data types, dynamic arrays, linked lists, binary trees, AVL trees, graphs, sorting, searching, and complexity.",
        isAvailableOnPlatform: true
      },
      {
        code: "INT306",
        name: "Database Management Systems (DBMS)",
        category: "Computer Science",
        credits: 4,
        totalUnits: 5,
        description: "Relational models, ER diagrams, SQL queries, relational algebra, normal forms (1NF-BCNF), and transaction recovery.",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "Why is Semester 3 so critical for LPU CSE students?",
        answer: "Semester 3 introduces Data Structures and Algorithms (CSE205) and DBMS (INT306), which together account for the majority of campus placement technical interview rounds."
      },
      {
        question: "Where can I find LPU Semester 3 notes and previous year questions?",
        answer: "Visit the Padho LPU Semester 3 hub to access unit notes for DSA, DBMS SQL queries, solved PYQs, and chapter mock tests."
      }
    ]
  },
  4: {
    number: 4,
    roman: "IV",
    title: "Semester 4 — Operating Systems & Internet Technologies",
    stage: "Engineering Core",
    summary: "System architectures, concurrency and process management in OS, and modern full-stack internet programming.",
    overview: "Semester 4 grounds students in low-level operating system mechanics while simultaneously advancing full-stack web and network programming capabilities.",
    academicFocus: [
      "Process Scheduling, Synchronization & Deadlock Handling",
      "Virtual Memory, Paging, and File System Architecture",
      "Internet Protocols, Client-Server Architectures, and HTML/CSS/JS",
      "Server-side scripting and asynchronous data communications"
    ],
    mteGuidance: "Focus on CPU scheduling algorithms (Round Robin, SRTF), semaphore producer-consumer problems, and front-end DOM manipulation.",
    eteGuidance: "Review page replacement algorithms (LRU, FIFO), disk scheduling, and complete web application integration for ETE.",
    caGuidance: "Complete hands-on Linux system calls and develop small end-to-end web modules for internal marks.",
    subjects: [
      {
        code: "CSE326",
        name: "Internet Programming",
        category: "Computer Science",
        credits: 3,
        totalUnits: 5,
        description: "Web development standards, semantic HTML5, CSS3, modern JavaScript, DOM APIs, and dynamic responsive interface design.",
        isAvailableOnPlatform: true
      },
      {
        code: "INT306",
        name: "Database Management Systems",
        category: "Computer Science",
        credits: 4,
        totalUnits: 5,
        description: "Advanced relational query optimization, indexing strategies, and database connection pooling.",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "What subjects are in LPU Semester 4?",
        answer: "Semester 4 includes Operating Systems, Internet Programming (CSE326), Advanced Database Systems, and Computer Organization."
      },
      {
        question: "How do I practice for CSE326 exams on Padho LPU?",
        answer: "Use Padho LPU's unit question sets to test web standards, CSS layout models, and JavaScript event loops."
      }
    ]
  },
  5: {
    number: 5,
    roman: "V",
    title: "Semester 5 — Software Engineering & Systems Architecture",
    stage: "Advanced Systems",
    summary: "Formal software lifecycle paradigms, design patterns, computer networks, and enterprise application engineering.",
    overview: "Semester 5 elevates students to enterprise engineering standards, covering design patterns, agile sprints, network communication protocols, and cloud-scale software architectures.",
    academicFocus: [
      "Agile & Scrum Methodologies, Requirements Specification (SRS)",
      "UML Class, Sequence, and Activity Modeling",
      "Software Testing (Black-box, White-box, Unit, Integration)",
      "Architectural Design Patterns and Refactoring"
    ],
    mteGuidance: "Prioritize SRS drafting, cyclomatic complexity calculations, and UML sequence diagrams for Units 1 through 3.",
    eteGuidance: "ETE tests full lifecycle traceability, software metrics, COCOMO estimation, and automated testing frameworks.",
    caGuidance: "Case-study presentations and capstone team documentation determine top CA marks.",
    subjects: [
      {
        code: "CSE320",
        name: "Software Engineering",
        category: "Computer Science",
        credits: 4,
        totalUnits: 5,
        description: "Software process models, requirements engineering, architectural design, testing methodologies, and project metrics.",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "What is the focus of LPU Semester 5?",
        answer: "Semester 5 emphasizes Software Engineering (CSE320), Computer Networks, and specialized electives in Artificial Intelligence or Cloud Computing."
      },
      {
        question: "Where can I find solved question papers for CSE320?",
        answer: "Padho LPU hosts verified CSE320 past papers, marking schemes, and revision notes."
      }
    ]
  },
  6: {
    number: 6,
    roman: "VI",
    title: "Semester 6 — Advanced Specializations & Machine Intelligence",
    stage: "Advanced Systems",
    summary: "Machine Learning, distributed cloud computing, cybersecurity, and compiler construction.",
    overview: "Semester 6 delivers disciplinary electives spanning AI/ML, cloud systems, and network security. Students refine their analytical skills and begin initial capstone prototypes.",
    academicFocus: [
      "Supervised & Unsupervised Machine Learning Models",
      "Cloud Infrastructure & Virtualization Technologies",
      "Network Security, Cryptography & Access Control",
      "Pre-placement Aptitude, Technical Interviews, and Capstone Planning"
    ],
    mteGuidance: "Master mathematical intuition for gradient descent, linear/logistic regression, and cryptographic symmetric key algorithms.",
    eteGuidance: "ETE evaluates neural networks, evaluation metrics (ROC-AUC, Precision, Recall), and distributed system consensus.",
    caGuidance: "Implement end-to-end ML pipelines with real datasets for coursework credit.",
    subjects: [
      {
        code: "CSE320",
        name: "Software Engineering",
        category: "Computer Science",
        credits: 4,
        totalUnits: 5,
        description: "Advanced enterprise architecture, microservices, and continuous integration/continuous deployment (CI/CD).",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "How do LPU students balance Semester 6 with placement preparation?",
        answer: "Semester 6 requires dual focus: keeping coursework GPA strong through concise unit notes while solving coding problems on DSA and system design."
      }
    ]
  },
  7: {
    number: 7,
    roman: "VII",
    title: "Semester 7 — Industry Practicums & Major Projects",
    stage: "Capstone & Industry",
    summary: "Industry internships, major project development, advanced research electives, and career placement drives.",
    overview: "Semester 7 is largely industry-driven. Many students complete dedicated 6-month on-site or remote internships while completing specialized elective tracks and major capstone milestones.",
    academicFocus: [
      "Industry Software Engineering Practicum & Technical Reporting",
      "Major Capstone Architecture & Deployment",
      "Advanced Domain Electives (NLP, Deep Learning, Cloud DevOps)",
      "Technical Placement Assessment Reviews"
    ],
    mteGuidance: "Focus on elective coursework units and submit timely project progress documentation.",
    eteGuidance: "Major viva evaluations, code reviews, and comprehensive elective term papers.",
    caGuidance: "Regular mentor reviews and demonstration of working prototypes ensure maximum CA evaluation score.",
    subjects: [
      {
        code: "CSE320",
        name: "Software Engineering Project",
        category: "Practicum",
        credits: 6,
        totalUnits: 5,
        description: "Full-lifecycle enterprise capstone development, version control, automated testing, and cloud deployment.",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "Can I study for Semester 7 exams during an internship?",
        answer: "Yes, Padho LPU's mobile-responsive platform allows interns to review concise unit revision sheets and take quick mock tests during downtime."
      }
    ]
  },
  8: {
    number: 8,
    roman: "VIII",
    title: "Semester 8 — Capstone Thesis & Degree Completion",
    stage: "Capstone & Industry",
    summary: "Final thesis defense, professional ethics, patent filings, and successful transition to graduate roles.",
    overview: "The culminating semester of undergraduate study at Lovely Professional University. Scholars finalize capstone deliverables, defend project theses, and clear all academic credits for degree conferral.",
    academicFocus: [
      "Final Capstone Project Defense & Code Audit",
      "Professional Ethics, Intellectual Property & Patents",
      "Specialized Seminar Reports & Publication Writing",
      "Curriculum Credit Clearance & Degree Audit"
    ],
    mteGuidance: "Complete thesis mid-term evaluations and clear any pending elective coursework requirements.",
    eteGuidance: "Final comprehensive viva examination and project artifact demonstrations.",
    caGuidance: "Ensure all external mentor sign-offs and research paper submissions are logged in university portals.",
    subjects: [
      {
        code: "CSE320",
        name: "Capstone Project & Defense",
        category: "Practicum",
        credits: 12,
        totalUnits: 5,
        description: "Final research publication, code review, scalability analysis, and public panel evaluation.",
        isAvailableOnPlatform: true
      }
    ],
    faqs: [
      {
        question: "What are the requirements to clear Semester 8 at LPU?",
        answer: "Successfully defending your major capstone project, fulfilling elective credits, completing required internship hours, and completing degree audit clearance."
      }
    ]
  }
};
