import { UnitContent } from "./types";

export const unit1Content: UnitContent = {
  "unitNumber": 1,
  "title": "Introduction to MOOCs and Online Learning",
  "shortDescription": "Conceptual architecture of MOOCs, global and national platforms (SWAYAM, NPTEL, Coursera), cMOOCs vs xMOOCs, digital pedagogy (Mayer's CTML, Sweller's CLT), self-regulated learning strategies, and cybersecurity literacy.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Definition, evolution, and conceptual architecture of MOOCs",
    "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
    "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
    "Digital pedagogy and cognitive theories of multimedia learning",
    "Self-regulated learning (SRL) strategies and metacognitive skills",
    "Time management, digital distraction control, and course completion techniques",
    "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students"
  ],
  "notes": {
    "learningObjectives": [
      "Define Massive Open Online Courses (MOOCs) and analyze their structural pillars (Massive, Open, Online, Course).",
      "Compare global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn.",
      "Differentiate between connectivist (cMOOCs) and extended (xMOOCs) pedagogical paradigms.",
      "Apply Mayer's Cognitive Theory of Multimedia Learning and Sweller's Cognitive Load Theory to digital study.",
      "Implement Zimmerman's Self-Regulated Learning (SRL) cyclical model to maintain online study momentum.",
      "Utilize evidence-based time management techniques (Pomodoro, Eisenhower Matrix, Spaced Repetition, Feynman Technique).",
      "Master digital literacy competencies, Creative Commons licensing, and cybersecurity hygiene."
    ],
    "sections": [
      {
        "id": "agr220-u1-sec1",
        "heading": "1. Definition, Conceptual Architecture, and Evolution of MOOCs",
        "content": "A Massive Open Online Course (MOOC) is an online learning model designed for unlimited global participation and open access via the web. The architectural acronym comprises four pillars:\n\n1. Massive: Built on scalable cloud computing architectures capable of enrolling tens of thousands of concurrent learners without performance degradation.\n2. Open: Unrestricted access without geographical constraints or rigid academic prerequisites; core content is typically free to audit, and materials frequently leverage Open Educational Resources (OER).\n3. Online: 100% web-based delivery across cloud Learning Management Systems (LMS), enabling flexible asynchronous or synchronous study.\n4. Course: A structured educational program with accredited learning outcomes, syllabus milestones, multimedia lectures, peer forums, assignments, and verified credentialing.\n\nHistorical Evolution:\n- 1840s-1970s: Distance education progressed from Isaac Pitman's postal correspondence courses to broadcast television universities (UK Open University, 1969).\n- 2001: MIT launched OpenCourseWare (OCW), pioneering the Open Educational Resources movement.\n- 2008: George Siemens and Stephen Downes launched CCK08 ('Connectivism and Connective Knowledge'), inspiring Dave Cormier to coin the term 'MOOC'.\n- 2011: Sebastian Thrun and Peter Norvig offered Stanford's free online 'Intro to AI', enrolling 160,000 students.\n- 2012 ('Year of the MOOC'): Commercial and non-profit giants launched: Coursera (Andrew Ng, Daphne Koller), Udacity, and edX (Harvard, MIT)."
      },
      {
        "id": "agr220-u1-sec2",
        "heading": "2. Major MOOC Platforms and the SWAYAM Ecosystem",
        "content": "1. SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds):\nLaunched by the Ministry of Education, Government of India, SWAYAM provides free access to school, undergraduate, and postgraduate curricula. Courses adhere to the 4-Quadrant Framework:\n- Quadrant 1: e-Tutorial (high-definition video lectures, demonstrations).\n- Quadrant 2: e-Content (downloadable readings, e-books, case studies).\n- Quadrant 3: Assessment (quizzes, problem sets, automated scoring).\n- Quadrant 4: Discussion Forum (clearing doubts, community interaction).\nUnder UGC/NEP 2020 regulations, universities permit up to 40% of degree credits per semester to be earned via SWAYAM, integrated into official transcripts via the Academic Bank of Credits (ABC) and National Testing Agency (NTA) proctored exams.\n\n2. NPTEL (National Programme on Technology Enhanced Learning):\nFounded by seven IITs and IISc Bangalore, NPTEL delivers premier engineering, basic science, and agricultural technology courses with rigorous weekly assignments and proctored certification.\n\n3. Global Platforms:\n- Coursera: Public-benefit corporation partnering with 275+ global universities and industry leaders, offering professional certificates and degree tracks.\n- edX: Open-source learning platform founded by Harvard and MIT, hosting MicroMasters and professional degrees.\n- FutureLearn: UK-based platform founded by The Open University, emphasizing social learning.\n- SWAYAM PRABHA: A network of 40 DTH television channels broadcasting educational content 24/7 via the GSAT-15 satellite, overcoming rural connectivity barriers."
      },
      {
        "id": "agr220-u1-sec3",
        "heading": "3. Typology of MOOCs: cMOOCs vs xMOOCs",
        "content": "MOOCs diverge into two contrasting pedagogical frameworks:\n\n1. cMOOCs (Connectivist MOOCs):\n- Grounded in George Siemens and Stephen Downes' Connectivism.\n- Philosophy: Knowledge is distributed across social networks and co-created by learners rather than transmitted from a central teacher.\n- Structure: Decentralized and open-ended; students interact across blogs, wikis, social media, and forums.\n- Instructor Role: Catalyst, curator, and co-learner.\n- Assessment: Qualitative self-reflection, peer review, and digital portfolios.\n\n2. xMOOCs (eXtended MOOCs):\n- Grounded in instructivist, behaviorist, and cognitivist learning theories.\n- Philosophy: Knowledge is structured, organized content delivered by expert professors for mastery by students.\n- Structure: Linear, centralized modules hosted within a proprietary LMS (Coursera, edX, SWAYAM).\n- Instructor Role: Authoritative subject-matter expert ('sage on the stage').\n- Assessment: Standardized multiple-choice quizzes, auto-graded exercises, and proctored summative exams.\n\n3. Hybrid Formats:\n- SPOCs (Small Private Online Courses): Closed-enrollment cohorts blending MOOC content with on-campus university seminars."
      },
      {
        "id": "agr220-u1-sec4",
        "heading": "4. Digital Pedagogy, Cognitive Load, and Multimedia Learning",
        "content": "1. Mayer's Cognitive Theory of Multimedia Learning (CTML):\nPeople learn more deeply from words and pictures than from words alone. Grounded in three assumptions:\n- Dual Channels: Separate working memory channels for visual/pictorial and auditory/verbal information.\n- Limited Capacity: Each channel has finite bandwidth; overloading causes cognitive breakdown.\n- Active Processing: Deep learning requires selecting, organizing, and integrating new inputs with existing schemas.\n\nKey Principles for Digital Design:\n- Modality Principle: Present visuals with spoken audio narration rather than on-screen text.\n- Coherence Principle: Remove all extraneous decorative pictures, text, and background music.\n- Signaling Principle: Highlight essential information using arrows, colors, and cues.\n- Segmenting Principle: Chunk lengthy lectures into 5-10 minute user-controlled micro-modules.\n\n2. Sweller's Cognitive Load Theory (CLT):\n- Intrinsic Load: Inherent conceptual complexity (element interactivity); managed via scaffolding.\n- Extraneous Load: Mental waste caused by poor slide design and split attention; must be minimized.\n- Germane Load: Productive effort dedicated to building mental schemas; should be maximized.\n\n3. Community of Inquiry (CoI) Model:\nEffective online education occurs at the intersection of Cognitive Presence (constructing meaning), Social Presence (interpersonal peer connection), and Teaching Presence (instructional design and active facilitation)."
      },
      {
        "id": "agr220-u1-sec5",
        "heading": "5. Self-Regulated Learning, Time Management, and Cybersecurity",
        "content": "1. Zimmerman's Cyclical Self-Regulated Learning (SRL) Model:\n- Forethought Phase: Setting SMART goals, task analysis, strategic planning, building self-efficacy.\n- Performance Phase: Implementing self-control, Pomodoro focus blocks, and metacognitive monitoring.\n- Self-Reflection Phase: Self-judgment, internal causal attributions, and strategic adaptation.\n\n2. Time Management & Distraction Control Tools:\n- Eisenhower Matrix: Prioritizing tasks by Urgency and Importance (Do Q1, Schedule Q2, Delegate Q3, Eliminate Q4).\n- Pomodoro Technique: 25 minutes of deep focus followed by 5 minutes of restorative break.\n- Spaced Repetition & Active Recall: Reviewing flashcards at expanding intervals to flatten the forgetting curve.\n- Feynman Technique: Explaining concepts in simple, jargon-free language to expose knowledge gaps.\n\n3. Digital Literacy & Cybersecurity Hygiene:\n- Password Architecture: Strong passphrases (>=14 characters) and password managers.\n- Multi-Factor Authentication (2FA): Mandatory use of app-based authenticators.\n- Phishing Awareness: Recognizing artificial urgency, sender spoofing, and unverified hyperlinks.\n- Network Security: Avoiding public Wi-Fi without VPN encryption; verifying HTTPS.\n- Creative Commons (CC) Licensing: Understanding CC BY, CC BY-SA, CC BY-NC, and CC BY-ND to legally share and remix digital educational resources."
      }
    ],
    "keyTakeaways": [
      "MOOCs represent Massive, Open, Online, Courses delivering accredited higher education via cloud computing architectures.",
      "SWAYAM operates on a 4-Quadrant framework (e-Tutorial, e-Content, Assessment, Discussion Forum) with up to 40% degree credit transfer under UGC/NEP regulations.",
      "xMOOCs follow structured instructivist delivery with automated grading; cMOOCs follow decentralized connectivist network learning.",
      "Mayer's CTML and Sweller's CLT dictate that online lectures must minimize extraneous cognitive load through narration over text, segmenting, and signaling.",
      "Zimmerman's SRL model (Forethought, Performance, Self-Reflection) provides the self-regulatory discipline required to beat the 90% MOOC dropout curve.",
      "Time-management tools like the Eisenhower Matrix, Pomodoro Technique, Spaced Repetition, and Feynman Technique ensure deep retention.",
      "Cybersecurity hygiene demands 2FA authentication, strong passphrases, phishing vigilance, and understanding Creative Commons licenses."
    ],
    "commonMisunderstandings": [
      "Misunderstanding: MOOCs are just informal YouTube video playlists. Fact: MOOCs are structured pedagogical courses featuring learning objectives, interactive quizzes, discussion boards, and proctored credentialing.",
      "Misunderstanding: Online courses on SWAYAM cannot be counted toward an official university degree. Fact: UGC regulations permit up to 40% of semester degree credits to be transferred via SWAYAM into official university mark sheets.",
      "Misunderstanding: Putting all lecture text on the screen alongside voiceover helps students learn faster. Fact: Mayer's Redundancy Principle proves that identical on-screen text and spoken audio overloads visual working memory, hurting comprehension.",
      "Misunderstanding: Watching video lectures repeatedly at 2x speed is effective studying. Fact: Passive re-watching creates an 'Illusion of Competence'; only active retrieval practice (self-testing and flashcards) consolidates long-term memory."
    ],
    "summary": "Unit 1 provides an exhaustive, academically rigorous foundation in MOOCs, digital pedagogy, cognitive learning theories, self-regulated learning, and cybersecurity hygiene for agriculture students. It defines the four pillars of MOOCs and traces distance learning from 19th-century correspondence courses to the 2012 MOOC revolution. The unit analyzes national and global platforms, detailing SWAYAM's 4-quadrant pedagogical model (e-Tutorial, e-Content, Assessment, Discussion Forum) and UGC 40% credit transfer rules via the Academic Bank of Credits and NTA proctored exams. It contrasts connectivist cMOOCs with instructivist xMOOCs, and details Mayer's Cognitive Theory of Multimedia Learning (modality, coherence, signaling, segmenting principles) and Sweller's Cognitive Load Theory (intrinsic, extraneous, germane load). Zimmerman's three-phase Self-Regulated Learning cycle (Forethought, Performance, Self-Reflection) is applied to overcome MOOC dropout curves. Proven productivity systems\u2014the Pomodoro Technique, Eisenhower Matrix, Spaced Repetition, and the Feynman Technique\u2014are detailed alongside vital digital literacy, Creative Commons licensing, and cybersecurity hygiene practices."
  },
  "mcqs": [
    {
      "id": "AGR220-U1-MCQ01",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "difficulty": "Easy",
      "questionText": "What does the acronym 'MOOC' stand for in modern educational technology?",
      "options": {
        "A": "Massive Open Online Course",
        "B": "Modern Online Open Curriculum",
        "C": "Modular Open Operating Class",
        "D": "Multimedia Online Organic Classroom"
      },
      "correctOption": "A",
      "explanation": "MOOC stands for Massive Open Online Course\u2014an online course aimed at unlimited participation and open access via the web."
    },
    {
      "id": "AGR220-U1-MCQ02",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Easy",
      "questionText": "Which is India's national indigenous MOOC platform launched by the Ministry of Education?",
      "options": {
        "A": "SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds)",
        "B": "Coursera",
        "C": "Khan Academy",
        "D": "Duolingo"
      },
      "correctOption": "A",
      "explanation": "SWAYAM is the flagship Indian online platform initiated by the Government of India to provide free quality educational courses from school to postgraduate level."
    },
    {
      "id": "AGR220-U1-MCQ03",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Easy",
      "questionText": "Which premier consortium of Indian Institutes of Technology (IITs) and IISc developed NPTEL?",
      "options": {
        "A": "Seven Indian Institutes of Technology and Indian Institute of Science Bangalore",
        "B": "All India Council for Technical Education (AICTE)",
        "C": "Indian Council of Agricultural Research (ICAR)",
        "D": "University Grants Commission (UGC)"
      },
      "correctOption": "A",
      "explanation": "NPTEL (National Programme on Technology Enhanced Learning) was founded by seven premier IITs (Bombay, Delhi, Guwahati, Kanpur, Kharagpur, Madras, Roorkee) and IISc Bangalore."
    },
    {
      "id": "AGR220-U1-MCQ04",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "difficulty": "Easy",
      "questionText": "What type of MOOC is characterized by a traditional video-lecture, automated quiz, and structured syllabus format?",
      "options": {
        "A": "xMOOC (eXtended MOOC)",
        "B": "cMOOC (Connectivist MOOC)",
        "C": "pMOOC (Personalized MOOC)",
        "D": "mMOOC (Mobile MOOC)"
      },
      "correctOption": "A",
      "explanation": "xMOOCs follow an instructional, teacher-centered, structured behaviorist approach featuring pre-recorded video lectures, readings, and automated quizzes (e.g., standard Coursera, edX courses)."
    },
    {
      "id": "AGR220-U1-MCQ05",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "difficulty": "Easy",
      "questionText": "What is the primary pedagogical philosophy underpinning a cMOOC (Connectivist MOOC)?",
      "options": {
        "A": "Decentralized social networking, peer collaboration, and knowledge co-creation",
        "B": "Strict memorization of textbook chapters for proctored exams",
        "C": "Listening silently to one central authority without peer discussion",
        "D": "Paying high admission fees for one-on-one private tuition"
      },
      "correctOption": "A",
      "explanation": "cMOOCs are grounded in George Siemens and Stephen Downes' connectivist learning theory, where knowledge is distributed across a network of connections and created collaboratively by learners."
    },
    {
      "id": "AGR220-U1-MCQ06",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Easy",
      "questionText": "Which prestigious universities jointly founded edX in 2012 as a non-profit open-source platform?",
      "options": {
        "A": "Harvard University and Massachusetts Institute of Technology (MIT)",
        "B": "Oxford University and Cambridge University",
        "C": "Stanford University and UC Berkeley",
        "D": "Princeton University and Yale University"
      },
      "correctOption": "A",
      "explanation": "edX was founded in May 2012 by scientists and educators from Harvard University and MIT to provide open access to higher education."
    },
    {
      "id": "AGR220-U1-MCQ07",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Easy",
      "questionText": "What is 'asynchronous learning' in an online course environment?",
      "options": {
        "A": "Learning where participants access digital content, lectures, and assignments at their own pace without real-time synchronization",
        "B": "Mandatory live video meetings held every day at 8:00 AM",
        "C": "Writing exams on paper inside a physical classroom",
        "D": "Reading physical books without computer access"
      },
      "correctOption": "A",
      "explanation": "Asynchronous learning does not require real-time interaction; learners engage with instructional materials, pre-recorded lectures, and discussion boards at their own scheduled times."
    },
    {
      "id": "AGR220-U1-MCQ08",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Easy",
      "questionText": "What does 'synchronous learning' entail in digital education?",
      "options": {
        "A": "Real-time, live interaction between instructors and students via webinars, chats, or live video conferences",
        "B": "Reading an email three days after it was sent",
        "C": "Downloading an offline PDF file",
        "D": "Submitting a semester project by postal mail"
      },
      "correctOption": "A",
      "explanation": "Synchronous learning happens in real time, requiring all participants and instructors to be present simultaneously in a virtual classroom."
    },
    {
      "id": "AGR220-U1-MCQ09",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Easy",
      "questionText": "What is 'metacognition' in the context of student learning?",
      "options": {
        "A": "Awareness and active understanding of one's own thought and learning processes ('thinking about thinking')",
        "B": "Memorizing 500 chemical formulas without understanding",
        "C": "The physical weight of the brain",
        "D": "The speed of typing on a smartphone screen"
      },
      "correctOption": "A",
      "explanation": "Metacognition is higher-order thinking that enables understanding, analysis, and control of one's cognitive processes, especially when learning new material."
    },
    {
      "id": "AGR220-U1-MCQ10",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Easy",
      "questionText": "What is the famous 'Pomodoro Technique' used by students for effective time management?",
      "options": {
        "A": "Working in focused 25-minute intervals separated by 5-minute short breaks",
        "B": "Studying continuously for 12 hours without eating",
        "C": "Eating fresh tomatoes before writing an exam",
        "D": "Sleeping for 25 minutes after reading 5 pages"
      },
      "correctOption": "A",
      "explanation": "Developed by Francesco Cirillo, the Pomodoro Technique utilizes a timer to break down work into intervals, traditionally 25 minutes in length, separated by 5-minute breaks."
    },
    {
      "id": "AGR220-U1-MCQ11",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Easy",
      "questionText": "How many quadrants form the official pedagogical framework of SWAYAM courses?",
      "options": {
        "A": "Four quadrants (e-Tutorial, e-Content, Assessment, Discussion Forum)",
        "B": "Two quadrants (Lectures and Exams)",
        "C": "Ten quadrants",
        "D": "Six quadrants"
      },
      "correctOption": "A",
      "explanation": "SWAYAM courses follow a 4-quadrant approach: Quadrant 1: e-Tutorial (video lectures); Quadrant 2: e-Content (reading materials, e-books); Quadrant 3: Assessment (quizzes/tests); Quadrant 4: Discussion Forum (clearing doubts)."
    },
    {
      "id": "AGR220-U1-MCQ12",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "difficulty": "Easy",
      "questionText": "Who coined the term 'MOOC' in 2008 in response to the 'Connectivism and Connective Knowledge' (CCK08) course?",
      "options": {
        "A": "Dave Cormier and Bryan Alexander",
        "B": "Bill Gates",
        "C": "Steve Jobs",
        "D": "Mark Zuckerberg"
      },
      "correctOption": "A",
      "explanation": "Dave Cormier of the University of Prince Edward Island and Bryan Alexander coined the term 'MOOC' in 2008 to describe the open, distributed online course CCK08 offered by George Siemens and Stephen Downes."
    },
    {
      "id": "AGR220-U1-MCQ13",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Easy",
      "questionText": "What is 'phishing' in cybersecurity?",
      "options": {
        "A": "A fraudulent attempt to steal sensitive personal information (passwords, banking credentials) by masquerading as a trustworthy entity in electronic communications",
        "B": "Catching fish in agricultural farm ponds using digital sensors",
        "C": "Updating computer software drivers",
        "D": "Connecting a laptop to high-speed campus Wi-Fi"
      },
      "correctOption": "A",
      "explanation": "Phishing is social engineering where cybercriminals send deceptive emails or messages imitating legitimate platforms (like banks or universities) to deceive victims into revealing login credentials or downloading malware."
    },
    {
      "id": "AGR220-U1-MCQ14",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Easy",
      "questionText": "What percentage of total course credits can a university student in India earn via SWAYAM MOOCs under UGC/ICAR regulations?",
      "options": {
        "A": "Up to 40% of total degree credits",
        "B": "100% of degree credits",
        "C": "Zero credits (purely recreational)",
        "D": "Maximum 2% of credits"
      },
      "correctOption": "A",
      "explanation": "Under the UGC (Credit Framework for Online Learning Courses through SWAYAM) Regulations, universities can permit up to 40% of total credits per semester to be earned through recognized SWAYAM online courses."
    },
    {
      "id": "AGR220-U1-MCQ15",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Easy",
      "questionText": "What is 'blended learning' (hybrid learning)?",
      "options": {
        "A": "An educational model combining traditional face-to-face classroom instruction with digital online learning activities",
        "B": "Using a kitchen blender to prepare plant tissue extracts",
        "C": "Listening to audio lectures while riding a bicycle",
        "D": "Studying two completely unrelated subjects at the exact same minute"
      },
      "correctOption": "A",
      "explanation": "Blended learning combines online digital media with traditional face-to-face classroom teaching, allowing students control over time, place, path, or pace."
    },
    {
      "id": "AGR220-U1-MCQ16",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Easy",
      "questionText": "Which time-management matrix divides tasks into four quadrants based on 'Urgency' and 'Importance'?",
      "options": {
        "A": "Eisenhower Matrix",
        "B": "Mendelian Matrix",
        "C": "Pascal Triangle",
        "D": "Kjeldahl Grid"
      },
      "correctOption": "A",
      "explanation": "The Eisenhower Matrix (or Urgent-Important Matrix) categorizes tasks into four quadrants: Urgent & Important (Do), Important not Urgent (Schedule), Urgent not Important (Delegate), and Neither (Eliminate)."
    },
    {
      "id": "AGR220-U1-MCQ17",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Easy",
      "questionText": "What is 'active recall' as a scientific study technique?",
      "options": {
        "A": "Actively stimulating memory retrieval by testing oneself without looking at notes, rather than passively re-reading text",
        "B": "Recalling a friend's phone number",
        "C": "Highlighting every line in a textbook with a neon marker",
        "D": "Recording lectures and playing them while sleeping"
      },
      "correctOption": "A",
      "explanation": "Active recall involves actively retrieving information from brain memory (through flashcards or practice tests), which produces significantly stronger memory consolidation than passive review."
    },
    {
      "id": "AGR220-U1-MCQ18",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Easy",
      "questionText": "What constitutes a 'strong password' for online learning and institutional accounts?",
      "options": {
        "A": "At least 12-16 characters long, combining uppercase and lowercase letters, numerals, and special symbols, without personal names",
        "B": "Using '123456' or 'password'",
        "C": "Using your first name followed by birth year",
        "D": "Using the same 4-digit PIN for all university and banking portals"
      },
      "correctOption": "A",
      "explanation": "Strong passwords use sufficient length (>=12 characters), character diversity (upper/lower case, numbers, special characters), and avoid dictionary words or easily guessable biographical data."
    },
    {
      "id": "AGR220-U1-MCQ19",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Easy",
      "questionText": "Which major MOOC platform was founded by Stanford computer science professors Andrew Ng and Daphne Koller in 2012?",
      "options": {
        "A": "Coursera",
        "B": "SWAYAM",
        "C": "NPTEL",
        "D": "Blackboard"
      },
      "correctOption": "A",
      "explanation": "Coursera was founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller, pioneering partnerships with universities worldwide."
    },
    {
      "id": "AGR220-U1-MCQ20",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Easy",
      "questionText": "What is 'Two-Factor Authentication' (2FA)?",
      "options": {
        "A": "A security process where a user provides two distinct authentication factors to verify identity (e.g., password plus a one-time OTP sent to a mobile phone)",
        "B": "Having two computers in the same room",
        "C": "Typing a password twice in 10 seconds",
        "D": "Sharing your account with a second student"
      },
      "correctOption": "A",
      "explanation": "Two-Factor Authentication (2FA) strengthens security by requiring two different verification elements: something you know (password) and something you have (smartphone app/SMS token)."
    },
    {
      "id": "AGR220-U1-MCQ21",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Medium",
      "questionText": "What is Mayer's 'Cognitive Theory of Multimedia Learning' (CTML)?",
      "options": {
        "A": "People learn more deeply from words and pictures together than from words alone, mediated through separate visual and auditory information processing channels with limited capacity",
        "B": "Human memory can store infinite amounts of video data simultaneously without mental effort",
        "C": "Students learn best by listening to loud rock music while reading mathematics",
        "D": "Textbooks are 100% obsolete and should be burned"
      },
      "correctOption": "A",
      "explanation": "Richard Mayer's CTML states that the human mind processes visual and verbal information via distinct, capacity-limited working memory channels. Effective multimedia design minimizes extraneous cognitive load while fostering germane schema construction."
    },
    {
      "id": "AGR220-U1-MCQ22",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Medium",
      "questionText": "According to Sweller's Cognitive Load Theory, what are the three types of cognitive load imposed on learners?",
      "options": {
        "A": "Intrinsic load, Extraneous load, and Germane load",
        "B": "Visual load, Auditory load, and Kinesthetic load",
        "C": "Primary load, Secondary load, and Tertiary load",
        "D": "Static load, Dynamic load, and Structural load"
      },
      "correctOption": "A",
      "explanation": "Cognitive Load Theory identifies: (1) Intrinsic load (inherent complexity of the subject matter); (2) Extraneous load (mental effort wasted on poor instructional design); (3) Germane load (productive effort devoted to schema acquisition)."
    },
    {
      "id": "AGR220-U1-MCQ23",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "difficulty": "Medium",
      "questionText": "In what fundamental way does learner assessment differ between an xMOOC and a cMOOC?",
      "options": {
        "A": "xMOOCs utilize centralized, standardized automated quizzes and rubrics, whereas cMOOCs rely on decentralized peer feedback, blog reflections, and self-evaluation",
        "B": "xMOOCs give no grades at all while cMOOCs issue legal birth certificates",
        "C": "xMOOCs are evaluated exclusively by the President of India",
        "D": "There is no assessment difference whatsoever"
      },
      "correctOption": "A",
      "explanation": "xMOOC assessment is centralized, algorithmic, and standardized (multiple choice, machine-graded assignments). cMOOCs emphasize peer dialogue, personal artifacts (blogs, tweets, portfolios), and open-ended reflective self-assessment."
    },
    {
      "id": "AGR220-U1-MCQ24",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Medium",
      "questionText": "What are the three cyclical phases of Self-Regulated Learning according to Barry Zimmerman's model?",
      "options": {
        "A": "Forethought (planning/goal-setting), Performance (monitoring/strategies), and Self-Reflection (evaluation/adaptation)",
        "B": "Introduction, Expansion, and Termination",
        "C": "Reading, Writing, and Arithmetic",
        "D": "Registration, Examination, and Graduation"
      },
      "correctOption": "A",
      "explanation": "Zimmerman's SRL model operates across three repeating phases: (1) Forethought phase (task analysis, goal setting, self-efficacy); (2) Performance phase (self-control, self-recording); (3) Self-reflection phase (self-judgment, adaptive reactions)."
    },
    {
      "id": "AGR220-U1-MCQ25",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Medium",
      "questionText": "What is the primary factor explaining the notorious low completion rates (typically 5% to 15%) historically observed in global MOOCs?",
      "options": {
        "A": "Absence of external enforcement, loss of intrinsic motivation, poor time management, and feelings of isolation without structured cohort accountability",
        "B": "Websites crashing permanently after the first lecture",
        "C": "Students being prohibited by law from finishing online courses",
        "D": "Examinations being impossible for human brains to solve"
      },
      "correctOption": "A",
      "explanation": "Because MOOCs are self-paced, open, and lack rigid institutional enforcement, learners struggle with self-regulation, procrastination, and lack of real-time peer connection, leading to high initial attrition."
    },
    {
      "id": "AGR220-U1-MCQ26",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Medium",
      "questionText": "What does the 'Flipped Classroom' model reverse compared to traditional agricultural lecture delivery?",
      "options": {
        "A": "Direct instruction/lecture content is moved online for individual study prior to class, while in-person class time is dedicated to problem-solving, debates, and hands-on analysis",
        "B": "Teachers take exams while students grade them",
        "C": "Students sit with their backs to the chalkboard",
        "D": "Lectures are delivered at midnight instead of morning"
      },
      "correctOption": "A",
      "explanation": "In a flipped classroom, students watch foundational online video lectures or read digital modules at home before attending class, freeing synchronous classroom time for collaborative case studies, lab experiments, and discussions."
    },
    {
      "id": "AGR220-U1-MCQ27",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Medium",
      "questionText": "Which designated National Coordinator under SWAYAM is responsible for developing online undergraduate degree courses in Agriculture and Allied Sciences?",
      "options": {
        "A": "ICAR (Indian Council of Agricultural Research) / CEC (Consortium for Educational Communication)",
        "B": "IGNOU (for distance education)",
        "C": "IIM Bangalore (for management studies)",
        "D": "NCERT (for school education)"
      },
      "correctOption": "A",
      "explanation": "Under the SWAYAM architecture, specialized National Coordinators oversee distinct sectors: ICAR manages agricultural curricula, CEC/UGC oversees non-technical undergraduate programs, and NPTEL handles engineering/technology."
    },
    {
      "id": "AGR220-U1-MCQ28",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Medium",
      "questionText": "What is 'Spaced Repetition' and why is it superior to 'cramming' for mastering agricultural terminology?",
      "options": {
        "A": "Reviewing material at systematically increasing time intervals (e.g., day 1, 3, 7, 21), leveraging the spacing effect to combat the Ebbinghaus forgetting curve",
        "B": "Repeating words 50 times in one minute",
        "C": "Leaving 10 blank spaces between handwritten words",
        "D": "Studying only once six months before the final exam"
      },
      "correctOption": "A",
      "explanation": "Spaced repetition schedules review sessions just as a memory is about to fade, dramatically flattening the forgetting curve and transferring facts from working memory into permanent long-term storage."
    },
    {
      "id": "AGR220-U1-MCQ29",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Medium",
      "questionText": "What is an 'Open Educational Resource' (OER)?",
      "options": {
        "A": "Teaching, learning, and research materials in any medium that reside in the public domain or are released under an open license (e.g., Creative Commons) allowing free access, re-use, and adaptation",
        "B": "A commercial proprietary textbook costing $500",
        "C": "A pirated copy of software uploaded illegally",
        "D": "A locked government database inaccessible to citizens"
      },
      "correctOption": "A",
      "explanation": "OERs are educational assets licensed under permissions (such as Creative Commons CC BY) that grant the global public 5R freedoms: Retain, Reuse, Revise, Remix, and Redistribute."
    },
    {
      "id": "AGR220-U1-MCQ30",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Medium",
      "questionText": "What does the 'Modality Principle' in Mayer's Multimedia Learning Theory recommend?",
      "options": {
        "A": "Presenting words as spoken narration rather than on-screen written text when accompanying a visual graphic or animation, preventing visual channel overload",
        "B": "Always writing every spoken word on screen simultaneously",
        "C": "Eliminating all audio from educational videos",
        "D": "Using 3D glasses for reading plain text"
      },
      "correctOption": "A",
      "explanation": "The Modality Principle proves that students learn better when graphics are accompanied by spoken auditory narration rather than on-screen printed text, which overloads the eyes (split-attention effect)."
    },
    {
      "id": "AGR220-U1-MCQ31",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "difficulty": "Medium",
      "questionText": "What landmark 2011 Stanford online course attracted over 160,000 enrolled students worldwide, sparking the global 'Year of the MOOC'?",
      "options": {
        "A": "Introduction to Artificial Intelligence (CS221) taught by Sebastian Thrun and Peter Norvig",
        "B": "Principles of Agronomy by Norman Borlaug",
        "C": "Organic Farming Basics",
        "D": "Introduction to World History"
      },
      "correctOption": "A",
      "explanation": "In autumn 2011, Sebastian Thrun and Peter Norvig offered 'Introduction to AI' free online; its enrollment of 160,000+ sparked the founding of Udacity and Coursera and led The New York Times to declare 2012 'The Year of the MOOC'."
    },
    {
      "id": "AGR220-U1-MCQ32",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Medium",
      "questionText": "How does SWAYAM administer its final proctored examination for formal academic credit transfer?",
      "options": {
        "A": "An in-person, proctored computer-based test (CBT) or written exam conducted nationwide across designated exam centers by the National Testing Agency (NTA)",
        "B": "A telephone interview conducted by a computer bot",
        "C": "An unmonitored multiple-choice quiz taken at home with no identification check",
        "D": "Automatic credit award upon clicking 'enroll'"
      },
      "correctOption": "A",
      "explanation": "To maintain academic integrity for official university credit transfers, SWAYAM partners with the National Testing Agency (NTA) to conduct secure, verified proctored examinations at physical testing centers."
    },
    {
      "id": "AGR220-U1-MCQ33",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Medium",
      "questionText": "What is the difference between an 'internal locus of control' and an 'external locus of control' in online learning success?",
      "options": {
        "A": "Learners with an internal locus believe their success depends on their own effort, strategies, and persistence, whereas external-locus learners blame outside circumstances, luck, or platform bugs",
        "B": "Internal locus refers to keyboard controls; external refers to the mouse",
        "C": "Internal locus applies only to offline study; external to online",
        "D": "There is no psychological difference"
      },
      "correctOption": "A",
      "explanation": "An internal locus of control empowers students to take personal ownership of their study habits and progress, a decisive psychological attribute for completing self-paced MOOCs."
    },
    {
      "id": "AGR220-U1-MCQ34",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Medium",
      "questionText": "What is 'context switching' (multitasking) during online learning and how does it impact academic retention?",
      "options": {
        "A": "Rapidly toggling between study material and social media or messaging notifications, incurring cognitive switching costs, fatigue, and memory fragmentation",
        "B": "Switching from daytime reading to nighttime reading",
        "C": "Changing font styles in an assignment document",
        "D": "Connecting a laptop to two different Wi-Fi networks"
      },
      "correctOption": "A",
      "explanation": "Human working memory cannot truly parallel-process complex cognitive tasks. Frequent context switching forces constant reorientation, draining mental energy and causing 40% loss in efficiency."
    },
    {
      "id": "AGR220-U1-MCQ35",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Medium",
      "questionText": "What Creative Commons license allows others to distribute, remix, and build upon your work, even commercially, as long as they credit you?",
      "options": {
        "A": "CC BY (Attribution)",
        "B": "CC BY-NC-ND (Attribution-NonCommercial-NoDerivatives)",
        "C": "All Rights Reserved",
        "D": "Public Domain Mark"
      },
      "correctOption": "A",
      "explanation": "The CC BY (Attribution) license is the most accommodating Creative Commons license, permitting sharing and adaptation for any purpose provided proper creator attribution is given."
    },
    {
      "id": "AGR220-U1-MCQ36",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Medium",
      "questionText": "What is the 'Signaling Principle' (or Cueing Principle) in digital lecture presentation design?",
      "options": {
        "A": "Adding visual cues (arrows, bold text, highlighting, color contrast) to direct learner attention to the most important elements on screen",
        "B": "Waving your hands at the webcam while speaking",
        "C": "Honking an audio horn every two minutes",
        "D": "Sending smoke signals to the university server"
      },
      "correctOption": "A",
      "explanation": "The Signaling Principle demonstrates that learners retain information better when instructional media includes visual cues (arrows, outlines, spotlighting) highlighting essential structural ideas."
    },
    {
      "id": "AGR220-U1-MCQ37",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "difficulty": "Medium",
      "questionText": "What is a 'SPOC' in institutional online education?",
      "options": {
        "A": "Small Private Online Course (a closed-enrollment version tailored for a specific university class)",
        "B": "Systematic Public Online Classroom",
        "C": "Special Plant Organisms Course",
        "D": "Super Professional Online Certificate"
      },
      "correctOption": "A",
      "explanation": "A SPOC (Small Private Online Course) uses MOOC infrastructure and content but restricts enrollment to a designated cohort (e.g., enrolled LPU students) for blended on-campus integration."
    },
    {
      "id": "AGR220-U1-MCQ38",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Medium",
      "questionText": "How does 'time-blocking' (calendar scheduling) assist agricultural students in balancing field practicals and online MOOC coursework?",
      "options": {
        "A": "Dedicates pre-committed, protected calendar blocks of time specifically for MOOC video watching and quizzes, treating them with identical priority as physical field classes",
        "B": "Stops all clocks in the student's room",
        "C": "Allows students to skip physical classes without permission",
        "D": "Automatically speeds up online videos by 4x"
      },
      "correctOption": "A",
      "explanation": "Time blocking replaces vague intentions ('I will study later') with concrete calendar commitments, insulating self-paced online coursework from being crowded out by daily emergencies."
    },
    {
      "id": "AGR220-U1-MCQ39",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Medium",
      "questionText": "What is 'FutureLearn' and which prominent institution founded it in the United Kingdom?",
      "options": {
        "A": "A British MOOC platform launched in 2012 by The Open University",
        "B": "A subsidiary of Microsoft UK",
        "C": "The official exam portal of Cambridge University",
        "D": "A social network for teenagers"
      },
      "correctOption": "A",
      "explanation": "FutureLearn is a UK-based digital education platform established in December 2012 by The Open University in partnership with leading British universities."
    },
    {
      "id": "AGR220-U1-MCQ40",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Medium",
      "questionText": "What is 'Ransomware' in cybersecurity threats to agricultural enterprise and educational institutions?",
      "options": {
        "A": "A form of malicious software that encrypts a user's files and databases, demanding a ransom payment in cryptocurrency to decrypt them",
        "B": "Software used to rent farm tractors online",
        "C": "A digital program that calculates crop harvest prices",
        "D": "A free antivirus program pre-installed on Windows"
      },
      "correctOption": "A",
      "explanation": "Ransomware is malicious code that locks access to vital digital files and computer systems through strong encryption until the victim pays extortionate ransom fees to criminals."
    },
    {
      "id": "AGR220-U1-MCQ41",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Medium",
      "questionText": "What role do 'Discussion Forums' play in student retention within xMOOC environments?",
      "options": {
        "A": "Provide social presence, peer scaffolding, rapid clarification of complex doubts, and a sense of learning community that mitigates feelings of isolation",
        "B": "Allow students to post unrelated advertisements",
        "C": "Automatically generate final exam certificates",
        "D": "Replace the requirement for submitting course assignments"
      },
      "correctOption": "A",
      "explanation": "Active participation in discussion forums fosters social and cognitive presence (Community of Inquiry model), allowing learners to co-construct knowledge and sustain motivation through peer support."
    },
    {
      "id": "AGR220-U1-MCQ42",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Medium",
      "questionText": "What is the 'Split-Attention Effect' in online instructional screen layout?",
      "options": {
        "A": "Mental overload occurring when related text and diagrams are separated physically on screen or in time, forcing the learner's eyes and working memory to split attention back and forth",
        "B": "A condition caused by splitting an apple in half",
        "C": "Dividing computer screen into two equal halves for watching movies",
        "D": "Writing with two hands at the same time"
      },
      "correctOption": "A",
      "explanation": "The Split-Attention Effect occurs when visual information is scattered across disparate locations on screen, forcing working memory to waste cognitive capacity matching labels to graphic elements."
    },
    {
      "id": "AGR220-U1-MCQ43",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Medium",
      "questionText": "What is the 'Feynman Technique' used for testing depth of comprehension in online subjects?",
      "options": {
        "A": "Explaining the concept in simple, jargon-free language as if teaching a 12-year-old child, immediately exposing hidden knowledge gaps and false assumptions",
        "B": "Memorizing full paragraphs verbatim from lecture slides",
        "C": "Solving advanced quantum physics differential equations",
        "D": "Reading lecture transcripts in reverse order"
      },
      "correctOption": "A",
      "explanation": "Nobel physicist Richard Feynman advocated that true mastery of a concept is demonstrated by articulating it in plain, simple terms without relying on jargon. Where explanation falters, true understanding is deficient."
    },
    {
      "id": "AGR220-U1-MCQ44",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Medium",
      "questionText": "What is the 'SWAYAM PRABHA' initiative?",
      "options": {
        "A": "A group of 40 DTH (Direct-to-Home) television channels broadcasting high-quality educational programs 24/7 across India using GSAT-15 satellite",
        "B": "A monthly print magazine published by ICAR",
        "C": "A radio program broadcast once a year on Diwali",
        "D": "A subsidized solar tractor scheme"
      },
      "correctOption": "A",
      "explanation": "SWAYAM PRABHA is a government initiative of 40 DTH channels broadcasting educational video lectures 24/7 via the GSAT-15 satellite, delivering tele-education to remote areas lacking broadband."
    },
    {
      "id": "AGR220-U1-MCQ45",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Medium",
      "questionText": "What is 'Digital Footprint' and why must agriculture professionals manage it proactively?",
      "options": {
        "A": "The unique trail of digital data, posts, comments, and web activity left behind by a user online, which recruiters and academic institutions inspect to assess professional integrity",
        "B": "The physical imprint of a rubber boot in muddy soil",
        "C": "The electrical energy consumed by a tablet computer",
        "D": "The size of a student's profile photograph in pixels"
      },
      "correctOption": "A",
      "explanation": "A digital footprint encompasses all traces of online activity (social media posts, forum interactions, public articles). Cultivating a clean, constructive digital presence is vital for career reputation."
    },
    {
      "id": "AGR220-U1-MCQ46",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Hard",
      "questionText": "In Garrison, Anderson, and Archer's 'Community of Inquiry' (CoI) model for online learning environments, what are the three core structural elements required for deep, meaningful learning?",
      "options": {
        "A": "Cognitive Presence, Social Presence, and Teaching Presence",
        "B": "Physical Presence, Spiritual Presence, and Emotional Presence",
        "C": "Video Quality, Internet Bandwidth, and Screen Resolution",
        "D": "Student Age, Teacher Experience, and Textbook Edition"
      },
      "correctOption": "A",
      "explanation": "The CoI framework posits that effective digital higher education occurs at the intersection of: (1) Cognitive Presence (constructing meaning through sustained reflection); (2) Social Presence (projecting personal identity); (3) Teaching Presence (instructional design and direct facilitation)."
    },
    {
      "id": "AGR220-U1-MCQ47",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "difficulty": "Hard",
      "questionText": "Epistemologically, how do the underlying learning theories of cMOOCs and xMOOCs diverge fundamentally?",
      "options": {
        "A": "cMOOCs are grounded in Connectivism (knowledge distributed across social networks and self-organized by learners), whereas xMOOCs are rooted in Behaviorist-Cognitivist models (content mastery and direct instruction)",
        "B": "cMOOCs are strictly Marxist while xMOOCs are Capitalist",
        "C": "cMOOCs reject computers entirely while xMOOCs use only artificial intelligence",
        "D": "cMOOCs are designed for animals while xMOOCs are for plants"
      },
      "correctOption": "A",
      "explanation": "cMOOCs embrace Connectivism: learning is the process of connecting specialized nodes or information sources across self-organized learner networks. xMOOCs employ traditional instructivist/behaviorist approaches focusing on scalable delivery and automated verification of fixed curricula."
    },
    {
      "id": "AGR220-U1-MCQ48",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "difficulty": "Hard",
      "questionText": "What is the open-source software platform created by edX that powers numerous national and institutional MOOC initiatives (including France Universit\u00e9 Num\u00e9rique and IndonesiaX)?",
      "options": {
        "A": "Open edX",
        "B": "Moodle",
        "C": "Canvas LMS",
        "D": "WordPress"
      },
      "correctOption": "A",
      "explanation": "Open edX is the open-source platform originally created by edX and MIT, made freely available to universities and governments globally to build scalable, customized MOOC delivery ecosystems."
    },
    {
      "id": "AGR220-U1-MCQ49",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Hard",
      "questionText": "What does the 'Redundancy Principle' in Mayer's cognitive multimedia design demonstrate?",
      "options": {
        "A": "Adding redundant on-screen verbatim text to an animation accompanied by concurrent spoken narration hurts learning, as it forces the visual channel to process both text and graphics simultaneously",
        "B": "Lecturers should repeat every sentence five times for clarity",
        "C": "Backing up video files on two hard drives improves student grades",
        "D": "Showing black-and-white slides is superior to colored graphics"
      },
      "correctOption": "A",
      "explanation": "The Redundancy Principle states that presenting identical words as both on-screen written text and spoken narration alongside visual graphics overloads visual working memory, degrading cognitive schema acquisition."
    },
    {
      "id": "AGR220-U1-MCQ50",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Hard",
      "questionText": "Under UGC/MHRD guidelines, how are credits earned on SWAYAM transferred into a student's physical university degree mark sheet?",
      "options": {
        "A": "Through the Academic Bank of Credits (ABC) portal under the National Education Policy (NEP 2020), where earned digital credits are deposited and transferred seamlessly to the host university",
        "B": "By mailing physical paper certificates to the Governor of the State",
        "C": "By paying a physical bribe to the college clerk",
        "D": "Credits earned online cannot be transferred into any official mark sheet"
      },
      "correctOption": "A",
      "explanation": "Under the NEP 2020 framework, the Academic Bank of Credits (ABC) digitally stores, recognizes, and transfers academic credits earned through approved SWAYAM courses directly to the student's degree record."
    },
    {
      "id": "AGR220-U1-MCQ51",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Hard",
      "questionText": "What is the 'Dunning-Kruger Effect' and how does it manifest among novices taking online agricultural science courses?",
      "options": {
        "A": "A cognitive bias wherein novices with low competence in a domain grossly overestimate their own knowledge and skills because they lack the metacognitive ability to recognize their deficiencies",
        "B": "A genetic condition causing color blindness to green plant leaves",
        "C": "The tendency of computers to slow down when playing video",
        "D": "The effect of drought on crop harvest yields"
      },
      "correctOption": "A",
      "explanation": "The Dunning-Kruger Effect describes a cognitive blind spot where low-ability individuals suffer from illusory superiority, underestimating the subject's true complexity until rigorous objective testing exposes their actual mastery level."
    },
    {
      "id": "AGR220-U1-MCQ52",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Hard",
      "questionText": "What is 'Parkinson's Law' and how does it dictate MOOC assignment submission behavior?",
      "options": {
        "A": "'Work expands to fill the time available for its completion'\u2014if given 3 weeks for an assignment, students will procrastinate and finish it in the final 12 hours before the portal closes",
        "B": "The brain stops working after 60 minutes of studying",
        "C": "All computer batteries discharge at a linear rate",
        "D": "Plant disease spreads at the speed of wind"
      },
      "correctOption": "A",
      "explanation": "Formulated by C. Northcote Parkinson, the law explains that without tight internal deadlines, tasks will consume the entirety of the allocated timeframe, promoting procrastination until deadline pressure forces action."
    },
    {
      "id": "AGR220-U1-MCQ53",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Hard",
      "questionText": "What is 'Man-in-the-Middle' (MitM) attack in the context of public Wi-Fi networks used by students at rural field stations?",
      "options": {
        "A": "An attack where a cybercriminal secretly intercepts and potentially alters communication between a student's device and the university server over unencrypted public Wi-Fi",
        "B": "A physical robbery in a computer lab",
        "C": "A referee standing between two sports players",
        "D": "A software bug that shows video backwards"
      },
      "correctOption": "A",
      "explanation": "In a MitM attack, the attacker positions themselves between the client device and the network router (e.g., using a rogue hotspot), eavesdropping on unencrypted credentials, session cookies, and sensitive communications."
    },
    {
      "id": "AGR220-U1-MCQ54",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Hard",
      "questionText": "What does the 'Segmenting Principle' in Mayer's CTML recommend for structuring lengthy technical agricultural video lectures?",
      "options": {
        "A": "Breaking complex continuous 60-minute lectures into bite-sized, learner-paced 5 to 10-minute micro-modules separated by knowledge-check prompts",
        "B": "Cutting the video screen into 4 separate quadrants",
        "C": "Removing all audio from the recording",
        "D": "Playing the lecture at 10x speed"
      },
      "correctOption": "A",
      "explanation": "The Segmenting Principle shows that chunking continuous instructional videos into modular segments (micro-learning) controlled by the user allows working memory to consolidate schemas between sections without cognitive exhaustion."
    },
    {
      "id": "AGR220-U1-MCQ55",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "difficulty": "Hard",
      "questionText": "What is the technical role of an 'LTI' (Learning Tools Interoperability) standard in modern MOOC platforms?",
      "options": {
        "A": "A global IMS standard that enables seamless, secure plug-and-play integration of third-party external learning tools (virtual labs, simulators, quiz engines) into an LMS/MOOC platform",
        "B": "A tractor engine oil specification",
        "C": "A chemical fertilizer grade",
        "D": "A computer keyboard layout"
      },
      "correctOption": "A",
      "explanation": "LTI (Learning Tools Interoperability) is a technical specification developed by IMS Global (1EdTech) that allows learning management systems to embed external web-based learning tools and pass user authentication and grades securely."
    },
    {
      "id": "AGR220-U1-MCQ56",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "difficulty": "Hard",
      "questionText": "What is 'Leitner System' in flashcard-based self-study for agricultural plant pathology and botany?",
      "options": {
        "A": "A spaced-repetition method using multiple compartmentalized boxes, where correctly answered cards are promoted to boxes reviewed less frequently, while missed cards return to Box 1 for daily review",
        "B": "An electric tractor transmission system",
        "C": "A greenhouse hydroponic pump layout",
        "D": "A system for scoring football matches"
      },
      "correctOption": "A",
      "explanation": "Devised by Sebastian Leitner in 1972, the Leitner box system operationalizes spaced repetition by dynamically adjusting review frequency based on learner proficiency with each individual card."
    },
    {
      "id": "AGR220-U1-MCQ57",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "difficulty": "Hard",
      "questionText": "What neurochemical mechanism explains why social media notifications disrupt deep concentration during online learning sessions?",
      "options": {
        "A": "Variable reward schedules trigger intermittent dopamine spikes in the brain's reward pathway, creating compulsive urges to check devices that fracture sustained cognitive focus",
        "B": "Screens emit ultrasonic waves that destroy ear cells",
        "C": "Smartphones release excess lactic acid into finger muscles",
        "D": "Social media apps drain all blood sugar within 30 seconds"
      },
      "correctOption": "A",
      "explanation": "Intermittent notifications act as unpredictable rewards (variable ratio reinforcement), triggering dopamine releases that hijack attention circuits and induce conditioned checking habits that derail focused study."
    },
    {
      "id": "AGR220-U1-MCQ58",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "difficulty": "Hard",
      "questionText": "What is the difference between 'HTTPS' and 'HTTP' when accessing academic portals and online learning websites?",
      "options": {
        "A": "HTTPS encrypts communications between the browser and web server using TLS/SSL cryptographic protocols, protecting sensitive data from interception, whereas HTTP sends data as clear, readable plain text",
        "B": "HTTPS stands for high-speed typing; HTTP is low-speed",
        "C": "HTTPS is only for government offices; HTTP is for students",
        "D": "There is zero functional difference"
      },
      "correctOption": "A",
      "explanation": "HTTPS (Hypertext Transfer Protocol Secure) encrypts all bi-directional traffic using Transport Layer Security (TLS), preventing eavesdropping, tampering, and packet-sniffing attacks common on unencrypted HTTP networks."
    },
    {
      "id": "AGR220-U1-MCQ59",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "difficulty": "Hard",
      "questionText": "What is a 'MOOC aggregator' and what is an example of one?",
      "options": {
        "A": "A discovery website and search engine (e.g., Class Central) that catalogs, reviews, and compares MOOCs across multiple competing platforms",
        "B": "A tractor used to plow farm fields",
        "C": "A high-speed industrial grain harvester",
        "D": "A database for tracking cattle vaccination records"
      },
      "correctOption": "A",
      "explanation": "Class Central is the prominent global MOOC aggregator; it indexes courses from Coursera, edX, SWAYAM, FutureLearn, and university providers, providing learner reviews, rating metrics, and search filtering."
    },
    {
      "id": "AGR220-U1-MCQ60",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "difficulty": "Hard",
      "questionText": "What does the 'Coherence Principle' in multimedia instructional design dictate?",
      "options": {
        "A": "Excluding extraneous words, seductive background music, and irrelevant visual decorations from instructional slides significantly improves learner retention",
        "B": "Every video slide must have colorful cartoon animations",
        "C": "Playing loud classical music in the background improves scientific memory",
        "D": "Using 15 different font colors per slide ensures high attention"
      },
      "correctOption": "A",
      "explanation": "The Coherence Principle demonstrates that adding 'seductive details' (irrelevant fun facts, background music, decorative images) competes for limited working memory resources, distracting and degrading core learning."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "AGR220-U1-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "questionText": "Define a Massive Open Online Course (MOOC) and describe its four defining architectural pillars: Massive, Open, Online, and Course.",
      "contextScenario": "An agricultural undergraduate student is preparing to enroll in their first online learning course and needs to understand the institutional definition and structural components of a MOOC.",
      "modelAnswer": "A Massive Open Online Course (MOOC) is defined as an interactive, web-based distance learning model designed for unlimited participation and open access via the Internet, delivering structured higher-education curricula through multimedia lectures, interactive readings, peer forums, and automated or proctored assessments.\n\nThe architectural acronym embodies four foundational pillars:\n1. Massive: Unlike conventional university seminar rooms bounded by physical seating limits (typically 30-100 students), MOOCs are engineered on scalable cloud computing infrastructures (AWS, Google Cloud) capable of enrolling tens of thousands\u2014or even hundreds of thousands\u2014of simultaneous learners worldwide without infrastructure degradation.\n2. Open: 'Open' traditionally denotes unrestricted access regardless of geographical location, formal prior academic prerequisites, or institutional affiliation. Most foundational learning content is available free of charge (audit track), with optional fees required only for formal proctored verification and authenticated credit certificates. Additionally, courses frequently utilize Open Educational Resources (OER) under Creative Commons licenses.\n3. Online: Course delivery occurs completely over digital internet protocols. Lectures, quizzes, lab simulations, reading materials, and discussion exchanges are hosted in cloud-based Learning Management Systems (LMS), allowing asynchronous or synchronous access from laptops, tablets, or smartphones.\n4. Course: A MOOC is not simply an unstructured YouTube video playlist or informational repository. It is a professionally designed pedagogical program with clear learning objectives, an accredited syllabus, weekly structured modules, milestones, assignments, peer assessments, feedback loops, and summative credentialing.\n\nIn agricultural education, MOOCs democratize access to elite agronomic, biotechnology, and agri-business expertise from premier global and national institutes, bypassing rural educational isolation.",
      "outlinePoints": [
        "Formal definition of Massive Open Online Course (MOOC)",
        "Pillar 1: Massive (scalable cloud architecture, unlimited enrollment)",
        "Pillar 2: Open (unrestricted geographic access, audit freedom, OER)",
        "Pillar 3: Online (internet-based delivery, digital LMS, anytime-anywhere access)",
        "Pillar 4: Course (structured pedagogy, weekly modules, assessment, credentialing)"
      ]
    },
    {
      "id": "AGR220-U1-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "questionText": "Compare and contrast Connectivist MOOCs (cMOOCs) and Extended MOOCs (xMOOCs) with respect to learning philosophy, instructor role, content structure, and assessment methods.",
      "contextScenario": "A university curriculum committee is deciding whether to design a structured xMOOC or a decentralized cMOOC for agricultural extension personnel.",
      "modelAnswer": "The evolution of open online education has established two primary pedagogical genres: cMOOCs and xMOOCs, each anchored in divergent epistemological worldviews.\n\n1. Underlying Learning Philosophy:\n- cMOOCs (Connectivist): Grounded in the connectivist learning theory formulated by George Siemens and Stephen Downes. Knowledge is not viewed as a static commodity transferred from teacher to student; rather, knowledge is distributed across a network of diverse individuals, blogs, tweets, and online communities. Learning is the process of navigating, synthesizing, and creating network connections.\n- xMOOCs (eXtended): Grounded in traditional instructivist, cognitivist, and behaviorist paradigms. Emphasizes structured content transmission, individual cognitive processing, and standardized mastery of core curricula.\n\n2. Role of the Instructor:\n- cMOOCs: The instructor acts as an initial catalyst, curator, node, and co-learner. There is no central authoritative syllabus; the educator facilitates discussions, shares seed resources, and highlights learner artifacts.\n- xMOOCs: The instructor is the central authoritative subject matter expert ('sage on the stage'). The professor delivers pre-recorded lectures, prescribes weekly mandatory readings, and sets strict assessment parameters.\n\n3. Content and Structural Organization:\n- cMOOCs: Highly decentralized and dynamic. Content is co-created by participants across blogs, open wikis, discussion boards, and social media. There is no fixed linear progression.\n- xMOOCs: Linear, centralized, and highly structured. Organized into sequential weekly modules featuring 5-10 minute video lectures, slide decks, readings, and progress checklists hosted within a closed LMS (e.g., Coursera, SWAYAM).\n\n4. Assessment and Evaluation Methodologies:\n- cMOOCs: Assessment is qualitative, open-ended, and self-directed. Learners evaluate their own progress through portfolio development, peer feedback, and public blog reflections. No formal automated exams exist.\n- xMOOCs: Assessment is standardized, automated, and summative. Employs machine-graded multiple-choice quizzes, auto-graded coding exercises, calibrated peer-review rubrics, and proctored examinations for formal certificate issuance.\n\nFor agricultural students, xMOOCs excel at delivering precise foundational scientific facts (e.g., soil chemistry, genetics), while cMOOCs are ideal for professional networking, farmer experience sharing, and grassroots innovation.",
      "outlinePoints": [
        "Epistemological philosophy: Connectivism vs Instructivism/Behaviorism",
        "Instructor role: Decentralized facilitator/co-learner vs Authoritative instructor",
        "Curricular structure: Open decentralized co-creation vs Linear modular LMS",
        "Assessment: Qualitative self-reflection and peer artifacts vs Standardized automated quizzes and proctored exams",
        "Agronomic applicability of both models"
      ]
    },
    {
      "id": "AGR220-U1-SUB03",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "questionText": "Explain the operational architecture of SWAYAM (Study Webs of Active-Learning for Young Aspiring Minds), detailing its 4-quadrant pedagogical model and academic credit transfer rules under the NEP 2020 framework.",
      "contextScenario": "A third-semester B.Sc. (Hons.) Agriculture student wants to enroll in a SWAYAM course and earn official academic credits that transfer into their university mark sheet.",
      "modelAnswer": "SWAYAM is the Government of India's indigenous Massive Open Online Course platform developed by the Ministry of Education with technical collaboration from AICTE and Microsoft. It is designed to uphold the three cardinal principles of national education policy: Access, Equity, and Quality.\n\n1. The 4-Quadrant Pedagogical Architecture:\nTo ensure instructional excellence, all courses approved on SWAYAM must adhere strictly to the standardized 4-Quadrant Framework:\n- Quadrant 1: e-Tutorial:\n  Comprises high-definition, professionally recorded audio-video lectures (typically 15-25 minutes each) prepared by designated National Coordinators (e.g., ICAR, NPTEL, CEC). Incorporates animations, field demonstrations, slide presentations, and virtual laboratory walk-throughs.\n- Quadrant 2: e-Content:\n  Provides downloadable, printable digital instructional materials including comprehensive reading modules, e-books, research paper excerpts, case studies, and reference bibliographies that complement the video lectures.\n- Quadrant 3: Assessment:\n  Facilitates formative and self-assessment via weekly objective quizzes, assignments, short-answer questions, and problem sets with instant automated scoring and diagnostic explanatory feedback.\n- Quadrant 4: Discussion Forum:\n  An asynchronous interactive community space where enrolled students interact directly with course instructors, teaching assistants (TAs), and peer learners to post doubts, discuss assignments, and resolve conceptual bottlenecks.\n\n2. Academic Credit Transfer Mechanism under NEP 2020:\n- Regulatory Mandate: The University Grants Commission (UGC Credit Framework for Online Learning Courses through SWAYAM Regulations) permits universities to allow up to 40% of the total semester credits to be earned through approved online courses.\n- Academic Bank of Credits (ABC): Students register with their unique ABC digital ID. Credits earned through verified SWAYAM courses are deposited digitally into their personal Academic Bank account.\n- In-Person Proctored Examination: While auditing course materials is free, students seeking formal credit must register for a nationwide proctored examination administered by the National Testing Agency (NTA). Exams combine computer-based objective and written questions.\n- Institutional Equivalence & Transcript Integration: Upon passing (typically >=40%), the host university formally waives the equivalent physical course, transcribing the SWAYAM grade and credits onto the student's official degree grade card.",
      "outlinePoints": [
        "Origins and national vision of SWAYAM (Access, Equity, Quality)",
        "Quadrant 1: e-Tutorial (video lectures, demonstrations)",
        "Quadrant 2: e-Content (downloadable readings, e-books)",
        "Quadrant 3: Assessment (quizzes, problem sets)",
        "Quadrant 4: Discussion Forum (clearing doubts, community)",
        "Credit transfer rules under UGC/NEP 2020: 40% credit cap, ABC portal, and NTA proctored exams"
      ]
    },
    {
      "id": "AGR220-U1-SUB04",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "questionText": "Discuss Richard Mayer's Cognitive Theory of Multimedia Learning (CTML). Explain its three core cognitive assumptions and describe four multimedia instructional design principles vital for agricultural e-learning modules.",
      "contextScenario": "An agricultural e-content developer is authoring interactive video modules on insect pest management and needs to structure slides and voiceover to prevent student mental overload.",
      "modelAnswer": "Richard Mayer's Cognitive Theory of Multimedia Learning (CTML) provides a scientifically validated cognitive psychology framework explaining how the human brain processes visual and auditory information during digital instructional delivery.\n\n1. Three Core Cognitive Science Assumptions:\n- Dual-Channel Assumption: Human working memory possesses two separate, distinct channels for processing information: (a) an auditory/verbal channel for processing spoken narration and linguistic audio, and (b) a visual/pictorial channel for processing graphics, video, animations, and on-screen text.\n- Limited-Capacity Assumption: Each cognitive channel has a strictly limited processing capacity at any given instant. Presenting excessive simultaneous stimuli through one channel quickly saturates working memory, causing cognitive overload and inhibiting comprehension.\n- Active-Processing Assumption: Deep, durable learning requires conscious, active cognitive effort. The learner must actively: (1) Select relevant incoming words and images; (2) Organize selected inputs into coherent mental verbal and pictorial representations; and (3) Integrate these new mental models with existing knowledge activated from long-term memory.\n\n2. Four Vital Multimedia Principles for Agricultural Education:\n- Modality Principle:\n  * Rule: People learn much more deeply from visuals combined with spoken narration than from visuals combined with on-screen printed text.\n  * Application: When presenting a complex diagram of the nitrogen cycle or plant cell mitosis, the instructor should narrate the steps orally rather than cluttering the screen with dense text paragraphs, preventing visual channel overload.\n- Coherence Principle:\n  * Rule: Exclude all extraneous words, seductive decorative pictures, and background music from instructional media.\n  * Application: Adding dramatic background music or irrelevant insect cartoons to an IPM module distracts working memory, consuming precious cognitive bandwidth needed to understand pesticide action modes.\n- Signaling Principle (Cueing Principle):\n  * Rule: Learning is enhanced when visual or auditory cues highlight the organization of essential material.\n  * Application: Using highlighted colored borders, directional animated arrows, or spotlight zooms to draw student attention to the diagnostic necrotic lesions on a wheat leaf during disease diagnosis lectures.\n- Segmenting Principle:\n  * Rule: People learn better when technical multimedia instructions are broken into bite-sized, user-controlled segments (micro-modules) rather than continuous unbroken streams.\n  * Application: Dividing a 60-minute agronomy lecture into distinct 5-8 minute targeted video clips separated by self-check questions allows working memory to consolidate knowledge without mental exhaustion.",
      "outlinePoints": [
        "Foundations of Mayer's Cognitive Theory of Multimedia Learning (CTML)",
        "Dual-Channel Assumption (auditory/verbal vs visual/pictorial)",
        "Limited-Capacity Assumption (working memory bottlenecks)",
        "Active-Processing Assumption (selecting, organizing, integrating)",
        "Modality Principle (narration over on-screen text)",
        "Coherence Principle (eliminating seductive extraneous details)",
        "Signaling Principle (visual cues, arrows, highlights)",
        "Segmenting Principle (chunking into micro-learning segments)"
      ]
    },
    {
      "id": "AGR220-U1-SUB05",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "questionText": "Analyze Barry Zimmerman's three-phase cyclical model of Self-Regulated Learning (SRL). Explain how an undergraduate agriculture student can systematically apply it to successfully complete a 12-week NPTEL course.",
      "contextScenario": "A student struggling with procrastination in self-paced online courses seeks a structured metacognitive framework to ensure timely submission of weekly NPTEL assignments.",
      "modelAnswer": "Self-Regulated Learning (SRL) refers to the self-directive process through which learners transform their mental abilities into academic skills. Barry Zimmerman's model conceptualizes SRL as a continuous, repeating three-phase cycle: Forethought, Performance, and Self-Reflection.\n\n1. Phase 1: Forethought Phase (Pre-Action Planning):\nOccurs before starting learning activities. It establishes the motivational and strategic foundation.\n- Task Analysis & Goal Setting: The student examines the 12-week NPTEL course syllabus (e.g., 'Precision Farming'). Instead of setting vague goals ('I will study'), the student establishes SMART proximal goals: 'I will watch Lecture 1 and 2 every Tuesday evening and complete the practice quiz by Thursday 8:00 PM.'\n- Strategic Planning: The student selects specific learning methods: active note-taking, creating concept flashcards, and scheduling dedicated study blocks.\n- Self-Efficacy Beliefs: Cultivating confidence by linking the online course to career goals (e.g., securing an agribusiness internship or ICAR JRF scholarship).\n\n2. Phase 2: Performance Phase (Action and Volitional Control):\nOccurs during active study sessions. Focuses on maintaining attention and monitoring comprehension.\n- Self-Control & Distraction Management: The student implements the Pomodoro Technique (25 minutes intense focus, 5 minutes break), puts their smartphone into 'Do Not Disturb' mode, and uses website blockers to eliminate social media interruptions.\n- Self-Instruction & Active Learning: Rather than passively watching videos at 2x speed, the student pauses at critical junctures, practices active recall, and sketches summary mind maps of precision sensors.\n- Self-Observation (Metacognitive Monitoring): The student continuously evaluates comprehension: 'Do I truly understand how NDVI is calculated from NIR and Red reflectance, or am I just recognizing words?'\n\n3. Phase 3: Self-Reflection Phase (Post-Action Evaluation):\nOccurs after completing weekly assignments or test modules.\n- Self-Judgment: Upon receiving weekly assignment scores, the student objectively compares performance against their goals. If a score was 60% instead of the targeted 90%, the student analyzes specific errors.\n- Causal Attributions: The student adopts an internal, controllable attribution: 'I lost marks because I rushed through the satellite resolution questions without reviewing lecture 3, not because the exam was unfair.'\n- Adaptive Adjustments: The student recalibrates study strategies for the subsequent week\u2014re-watching challenging segments and posting questions on the discussion forum.\n\nBy cycling iteratively through Forethought, Performance, and Self-Reflection each week, the student maintains continuous accountability, overcomes procrastination, and achieves high completion honors.",
      "outlinePoints": [
        "Conceptual definition of Self-Regulated Learning (SRL)",
        "Phase 1: Forethought (SMART goal setting, strategic planning, self-efficacy)",
        "Phase 2: Performance (Pomodoro focus, distraction control, metacognitive self-monitoring)",
        "Phase 3: Self-Reflection (self-judgment, internal causal attributions, strategic recalibration)",
        "Weekly iterative implementation across a 12-week NPTEL course"
      ]
    },
    {
      "id": "AGR220-U1-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "questionText": "Explain the Pomodoro Technique and the Eisenhower Matrix, illustrating how an agricultural student can integrate both tools to balance university coursework and online MOOCs.",
      "contextScenario": "An agriculture student faces severe time conflicts between morning practical classes in crop fields and evening online certification study.",
      "modelAnswer": "Modern agricultural students face heavy academic cognitive demands, balancing physical field practicals, laboratory reports, and self-paced online certification. Combining the Eisenhower Matrix with the Pomodoro Technique creates an effective productivity system.\n\n1. The Eisenhower Matrix (Strategic Task Prioritization):\nDeveloped by Dwight D. Eisenhower, this matrix prioritizes activities across two axes: Urgency and Importance, dividing work into four actionable quadrants:\n- Quadrant 1 (Urgent & Important - DO IMMEDIATELY):\n  Tomorrow's plant pathology lab practical record submission; attending mandatory university mid-term exams; submitting tonight's NPTEL assignment deadline.\n- Quadrant 2 (Important but Not Urgent - SCHEDULE & TIME-BLOCK):\n  Proactive weekly MOOC lecture watching; revising flashcards using spaced repetition; gym exercise and sleep. This quadrant represents the core of academic excellence. Dedicating daily protected time here prevents tasks from becoming crisis emergencies.\n- Quadrant 3 (Urgent but Not Important - DELEGATE / MINIMIZE):\n  Non-essential phone calls, instant chat notifications from peer social groups, urgent but minor administrative errands.\n- Quadrant 4 (Neither Urgent nor Important - ELIMINATE):\n  Mindless scrolling on TikTok/Instagram reels, binge-watching gaming videos, excessive web browsing.\n\n2. The Pomodoro Technique (Tactical Execution):\nOnce Quadrant 2 tasks are scheduled, the Pomodoro Technique delivers focused mental execution:\n- Execution Protocol:\n  1. Choose a single task (e.g., 'Watch SWAYAM Soil Microbiology Lecture 4').\n  2. Set a timer for 25 minutes of undivided, single-task focus (one 'Pomodoro').\n  3. Study with zero interruptions (phone on airplane mode, browser tabs closed).\n  4. When the timer rings, take an immediate 5-minute break (walk, drink water, stretch).\n  5. After four Pomodoros (100 minutes of deep study), take a longer 20-30 minute restorative break.\n\nIntegration Benefit:\nThe Eisenhower Matrix ensures the student is working on the right strategic priorities, while the Pomodoro Technique ensures deep, distraction-free cognitive focus.",
      "outlinePoints": [
        "Overview of the dual prioritization-execution system",
        "Eisenhower Matrix: 4 Quadrants (Do, Schedule, Delegate, Eliminate)",
        "Practical examples of agricultural student tasks across all 4 quadrants",
        "Pomodoro Technique: 25-min focus blocks, 5-min intervals, long rest cycle",
        "Synergistic integration for academic and online certification balance"
      ]
    },
    {
      "id": "AGR220-U1-SUB07",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "questionText": "Outline essential cybersecurity hygiene practices and digital literacy competencies that agriculture students must adopt to protect academic data, prevent phishing, and secure mobile farm management accounts.",
      "contextScenario": "A student using public campus Wi-Fi receives an urgent email appearing to come from the university registrar demanding immediate password verification to avoid enrollment cancellation.",
      "modelAnswer": "As agriculture transitions into digital agronomy, IoT smart farming, and online learning, agricultural students increasingly manage digital identities across university LMS portals, national scholarship schemes, and cloud farm tools. Maintaining robust cybersecurity hygiene is essential.\n\n1. Password Architecture and Multi-Factor Authentication (MFA/2FA):\n- Strong Passphrase Construction: Avoid dictionary words, birthdates, or pet names. Use passphrases combining 14-16 alphanumeric characters, upper/lowercase letters, and special symbols (e.g., 'Tr!t!cum#Aest!vum$2026').\n- Password Managers: Utilize encrypted password managers (Bitwarden, 1Password) to generate and store unique credentials for every portal, preventing cascading breaches.\n- Mandatory 2FA/MFA: Enable Two-Factor Authentication across all academic, email, and banking accounts using authenticator apps (Google Authenticator, Microsoft Authenticator) rather than SMS, which is vulnerable to SIM-swapping.\n\n2. Identifying and Neutralizing Phishing Attacks:\n- Indicators of Phishing:\n  * Artificial Urgency: Threats of account deactivation or enrollment cancellation within 24 hours.\n  * Sender Address Spoofing: Discrepancies between display name and actual header domain (e.g., display says 'Registrar' but email originates from 'registrar-lpu-verify@gmail.com').\n  * Suspicious Links: Hovering the cursor over links reveals mismatched redirect URLs.\n  * Requests for Sensitive Credentials: Legitimate institutions never ask for passwords via email.\n- Protocol: Never click embedded links or download attachments from unsolicited emails. Verify directly by navigating independently to the official institutional portal.\n\n3. Securing Connections on Public and Campus Wi-Fi:\n- Avoid unencrypted open Wi-Fi for banking or exam submissions.\n- Utilize Virtual Private Networks (VPNs) to encrypt all data packets when connected to public hotspots, neutralizing Man-in-the-Middle (MitM) packet-sniffing.\n- Verify HTTPS in the browser address bar (padlock icon) to confirm TLS/SSL encrypted sessions.\n\n4. Digital Device Hygiene:\n- Keep operating systems, browsers, and mobile farm apps updated with the latest security patches.\n- Maintain periodic encrypted backups of research data, theses, and practical reports using the 3-2-1 backup strategy (3 copies, 2 different media, 1 offsite cloud).",
      "outlinePoints": [
        "Password security: Strong passphrases and password managers",
        "Multi-Factor Authentication (MFA) via authenticator applications",
        "Phishing detection: Urgency cues, domain spoofing, hover-verification",
        "Public Wi-Fi security: VPN encryption, HTTPS validation",
        "Device hygiene: Security patching and 3-2-1 data backup strategy"
      ]
    },
    {
      "id": "AGR220-U1-SUB08",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn",
      "questionText": "Compare SWAYAM, Coursera, and edX regarding institutional governance, target audience, pricing models, accreditation mechanisms, and relevance to agricultural students in India.",
      "contextScenario": "A faculty mentor is advising students on selecting the most appropriate platform for online skill enhancement in agribusiness and data analytics.",
      "modelAnswer": "Modern online learning platforms cater to varied educational objectives, differing significantly in their organizational governance, business models, and credential recognition.\n\n1. Institutional Governance and Founding Vision:\n- SWAYAM: Government-funded national initiative launched by the Ministry of Education, Government of India. Overseen by statutory bodies (UGC, AICTE, ICAR, NPTEL) with a public welfare mandate to bridge the digital divide.\n- Coursera: Commercial public-benefit corporation founded in 2012 by Stanford professors. Operates in partnership with over 275 top global universities (Yale, Michigan, Stanford) and industry leaders (Google, IBM).\n- edX: Originally founded as an open-source non-profit by Harvard and MIT in 2012; now operated by 2U Inc., collaborating with elite international universities.\n\n2. Pricing and Access Models:\n- SWAYAM: Completely free to audit and access all four quadrants of learning materials. A nominal examination fee (~\u20b91,000 per course) is charged only if the student registers for the physical NTA proctored exam.\n- Coursera: Freemium model. Video lectures and readings are often free to audit, but graded assignments, certificates, and full specialization tracks require monthly subscriptions ($39-$79/month) or Coursera Plus institutional licenses, though financial aid is available.\n- edX: Freemium model. Audit track allows free time-limited access to videos and readings; verified certificate track requires a fixed fee ($50-$300 per course).\n\n3. Accreditation and University Credit Transfer:\n- SWAYAM: Directly recognized and integrated into Indian higher education under UGC regulations, allowing up to 40% seamless credit transfer into university mark sheets via the Academic Bank of Credits (ABC).\n- Coursera / edX: Formal credit transfer into Indian university degree transcripts requires prior approval from the university's Board of Studies (BOS) or autonomous credit equivalence committees; certificates are primarily recognized as micro-credentials by industry recruiters.\n\n4. Agricultural Relevance for Indian Students:\n- SWAYAM: High direct alignment with the ICAR 5th Deans' Committee syllabus (courses in Agronomy, Soil Testing, Dairy Technology, Agricultural Marketing).\n- Coursera / edX: Superior for complementary modern skill sets: agricultural data analytics, Python for GIS, drone remote sensing, supply chain management, and carbon accounting.",
      "outlinePoints": [
        "Institutional governance: Government public welfare vs Commercial university partnerships",
        "Pricing architecture: Free public access with nominal exam fee vs Freemium/subscription models",
        "Credit accreditation: Automatic UGC/ABC recognition vs Discretionary institutional equivalence",
        "Agricultural utility: Core ICAR curriculum vs Cutting-edge complementary digital/business analytics"
      ]
    },
    {
      "id": "AGR220-U1-SUB09",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "questionText": "Trace the historical milestones of online distance education from early correspondence courses to the global emergence of MOOCs in 2012.",
      "contextScenario": "An agricultural educator is presenting a lecture on the technological evolution of distance learning models.",
      "modelAnswer": "Online learning is the modern culmination of a 150-year evolution of distance education, driven by successive communication technology revolutions.\n\n1. First Generation: Correspondence Education (1840s-1920s):\nInitiated in England by Sir Isaac Pitman, who mailed shorthand texts on postcards. Relied on postal mail distribution of printed textbooks, syllabi, and written postal assignments. Democratized education for rural and remote populations but suffered from long latency and zero interactive peer feedback.\n\n2. Second Generation: Broadcast Multimedia Distance Education (1930s-1970s):\nLeveraged terrestrial radio and broadcast television. Prominent examples include the UK Open University (1969) and regional tele-schools, integrating postal materials with scheduled TV broadcasts and audio cassettes. Provided audio-visual instruction but remained one-directional.\n\n3. Third Generation: Computer-Conducted Tele-learning (1980s-1990s):\nIntroduced microcomputers, local bulletin board systems (BBS), and CD-ROM courseware, enabling semi-interactive electronic exercises.\n\n4. Fourth Generation: Web-Based Learning Management Systems (LMS) (Late 1990s-2000s):\nThe explosion of the World Wide Web gave birth to institutional LMS platforms (Blackboard, Moodle). MIT launched the revolutionary OpenCourseWare (OCW) project in 2001, making lecture notes and syllabi freely accessible online, establishing the Open Educational Resources (OER) movement.\n\n5. Fifth Generation: The MOOC Revolution (2008-2012):\n- 2008: George Siemens and Stephen Downes launched CCK08 ('Connectivism and Connective Knowledge') with 2,200 open online students, inspiring Dave Cormier to coin the term 'MOOC'.\n- Autumn 2011: Stanford professors Sebastian Thrun and Peter Norvig offered 'Introduction to Artificial Intelligence' online for free, enrolling 160,000 students from 190 countries.\n- 2012 ('The Year of the MOOC'): Massive commercial and non-profit platforms launched simultaneously: Udacity (Sebastian Thrun), Coursera (Andrew Ng and Daphne Koller), and edX (Harvard and MIT), sparking global adoption and inspiring national platforms like SWAYAM in India.",
      "outlinePoints": [
        "First Generation: Postal correspondence education (Pitman, 1840s)",
        "Second Generation: Radio and TV broadcast multimedia (Open University, 1960s)",
        "Third Generation: Computer-assisted instruction and CD-ROMs (1980s)",
        "Fourth Generation: Web-based LMS and MIT OpenCourseWare (2001)",
        "Fifth Generation: MOOC dawn (CCK08, Thrun's Stanford AI course, 2012 Year of the MOOC)"
      ]
    },
    {
      "id": "AGR220-U1-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "questionText": "Explain John Sweller's Cognitive Load Theory (CLT). Differentiate between Intrinsic, Extraneous, and Germane cognitive load, and outline pedagogical design rules to optimize each in online video modules.",
      "contextScenario": "An instructional designer is reviewing high dropout rates in an online plant biochemistry course and identifies severe student cognitive fatigue as the root cause.",
      "modelAnswer": "Cognitive Load Theory (CLT), pioneered by educational psychologist John Sweller in the late 1980s, is founded on the premise that human working memory has a strictly limited capacity and duration, whereas long-term memory has virtually unlimited storage capacity. Instructional design must avoid overloading working memory during the acquisition and schema construction process.\n\n1. The Three Forms of Cognitive Load:\n- Intrinsic Cognitive Load:\n  * Definition: The natural mental effort required to process the inherent intellectual complexity of the subject matter itself.\n  * Cause: Determined by element interactivity\u2014the number of elements that must be held in working memory simultaneously to be understood. For example, memorizing isolated terminology (names of 10 weed species) has low element interactivity, whereas calculating soil water balance from transpiration, infiltration, and matric potential involves high element interactivity.\n  * Management: Cannot be eliminated without diluting subject rigor, but can be managed through structured scaffolding and pre-training.\n- Extraneous Cognitive Load:\n  * Definition: Unproductive mental effort imposed by flawed instructional design, confusing screen layouts, redundant information, or split attention.\n  * Cause: Cluttered slides, distracting background audio, dense walls of text, poorly synchronized animations, and difficult navigation.\n  * Management: Must be ruthlessly minimized or eliminated by applying clean multimedia design principles.\n- Germane Cognitive Load:\n  * Definition: Productive mental effort devoted to constructing, organizing, and automating cognitive schemas in long-term memory.\n  * Cause: Active problem solving, drawing concept maps, comparing contrasting cases, and self-explanation.\n  * Management: Should be systematically maximized within the residual capacity of working memory.\n\n2. Pedagogical Design Rules to Optimize Cognitive Architecture:\n- Rule 1: Scaffolding and Pre-Training for Intrinsic Load:\n  Break high-interactivity agricultural systems into isolated components before presenting the whole system. For example, teach the individual enzyme names and substrates in the Calvin cycle before asking students to calculate net ATP/NADPH yields.\n- Rule 2: Eliminate Redundancy and Spatial Split-Attention for Extraneous Load:\n  Integrate text labels directly into diagrams rather than placing labels in a distant legend table. Remove all decorative graphics, stock photography, and background music that do not contribute directly to instructional objectives.\n- Rule 3: Utilize Dual Modality to Expand Working Memory:\n  Offload visual working memory by narrating complex diagrams through the auditory channel (voiceover) while displaying only visual motion on screen.\n- Rule 4: Integrate Worked Examples and Faded Guidance for Germane Load:\n  When teaching quantitative agronomic calculations (fertilizer calibration, seed rate equations), provide fully worked step-by-step example problems first, followed by partially completed problems ('faded examples'), before challenging students with unassisted independent problems.",
      "outlinePoints": [
        "Theoretical architecture of Sweller's Cognitive Load Theory (CLT)",
        "Intrinsic Cognitive Load (inherent complexity, element interactivity)",
        "Extraneous Cognitive Load (instructional design flaws, unproductive mental drain)",
        "Germane Cognitive Load (productive schema construction and automation)",
        "Design Rule 1: Scaffolding and pre-training to manage intrinsic load",
        "Design Rule 2: Eliminating redundancy and split-attention to minimize extraneous load",
        "Design Rule 3: Dual-modality offloading to balance working memory channels",
        "Design Rule 4: Worked examples and faded scaffolding to maximize germane load"
      ]
    },
    {
      "id": "AGR220-U1-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "questionText": "Explain the psychological causes of student procrastination in online courses and present four evidence-based cognitive strategies to overcome it.",
      "contextScenario": "A university counseling service is running a workshop for agriculture students who consistently delay watching weekly online lectures until the final week before exams.",
      "modelAnswer": "Procrastination in online self-paced courses is not simply poor time management or laziness; modern behavioral science identifies it as an emotion-regulation problem where the brain prioritizes short-term mood repair over long-term strategic goals.\n\n1. Primary Psychological Drivers in MOOC Environments:\n- Temporal Discounting (Hyperbolic Discounting): The human brain values immediate rewards (watching social media reels) significantly more than distant future payoffs (earning a certificate 10 weeks away).\n- Task Aversion & Ambiguity: When an assignment topic feels overwhelming or instructions appear ambiguous, it triggers negative emotional states (anxiety, self-doubt). To escape these uncomfortable feelings, students retreat into pleasurable digital distractions.\n- Absence of External Social Accountability: In traditional classrooms, physical peer observation and teacher presence enforce compliance. The isolated online environment lacks immediate social friction for skipping lectures.\n\n2. Four Evidence-Based Cognitive Remediation Strategies:\n- The 'Two-Minute Rule' / Micro-Action Initiation:\n  Overcome initiation friction by lowering the entry threshold: commit to studying for just two minutes or watching one single lecture slide. Once the physical action begins, momentum overcomes inertia.\n- Implementation Intentions ('If-Then' Planning):\n  Transform vague goals into concrete automated triggers: 'If it is Tuesday at 6:00 PM, then I will open my laptop and watch Agronomy Module 3.' This automates behavioral initiation without relying on willpower.\n- Social Commitment Contracts (Accountability Partnerships):\n  Pair with a study partner or join an online cohort. Establish mutual commitments where failing to submit weekly quizzes incurs a tangible social or financial forfeit.\n- Visual Progress Tracking & Gamification:\n  Maintain a physical habit tracker or progress chart on the study desk. Checking off completed modules provides a visible sense of accomplishment, counteracting temporal discounting.",
      "outlinePoints": [
        "Psychological root of procrastination: Emotion regulation and short-term mood repair",
        "Key drivers: Temporal discounting, task aversion, lack of external social friction",
        "Strategy 1: The Two-Minute Rule to lower initiation threshold",
        "Strategy 2: Implementation Intentions ('If-Then' behavioral plans)",
        "Strategy 3: Social commitment contracts and accountability partners",
        "Strategy 4: Visual progress trackers to stimulate positive feedback"
      ]
    },
    {
      "id": "AGR220-U1-SUB12",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "questionText": "Discuss the Creative Commons (CC) licensing framework. Describe the four basic license conditions and explain how six standardized CC licenses govern the reuse of digital agricultural learning resources.",
      "contextScenario": "An agricultural college student is creating a digital field guide on weed identification and needs to select an appropriate open license while incorporating external online photographs.",
      "modelAnswer": "The Creative Commons (CC) legal framework was founded in 2001 to bridge the gap between traditional restrictive copyright ('All Rights Reserved') and the public domain, providing standardized open licenses that grant public permissions to share and use creative work.\n\n1. The Four Fundamental CC Condition Building Blocks:\n- BY (Attribution): The licensee must give appropriate credit to the creator, provide a link to the license, and indicate if changes were made.\n- SA (ShareAlike): If the user remixes, transforms, or builds upon the material, they must distribute their contributions under the identical license as the original.\n- NC (NonCommercial): The material may not be used for commercial purposes or monetary gain.\n- ND (NoDerivatives): The material may be redistributed in its original form, but no adaptations, remixes, or translations can be distributed publicly.\n\n2. The Six Standardized Creative Commons Licenses (From Most Open to Most Restrictive):\n- CC BY (Attribution):\n  The gold standard for Open Educational Resources (OER). Permits redistribution, commercial reuse, and adaptation, provided creator credit is given.\n- CC BY-SA (Attribution-ShareAlike):\n  Used by Wikipedia. Allows adaptation and commercial reuse, but derivative works must inherit the same CC BY-SA license.\n- CC BY-ND (Attribution-NoDerivatives):\n  Allows redistribution for any purpose, including commercially, but the work must remain unchanged and whole with proper credit.\n- CC BY-NC (Attribution-NonCommercial):\n  Permits remixing and non-commercial redistribution with credit; derivatives do not have to be licensed under identical terms.\n- CC BY-NC-SA (Attribution-NonCommercial-ShareAlike):\n  Widely adopted by educational institutions. Allows non-commercial adaptation provided credit is given and derivatives are licensed identically.\n- CC BY-NC-ND (Attribution-NonCommercial-NoDerivatives):\n  The most restrictive license. Allows downloading and sharing with credit, but prohibits any changes or commercial use.\n\nAgricultural Significance:\nUnderstanding CC licensing prevents copyright infringement when students compile research theses, extension bulletins, and digital presentations, enabling legal sharing of agronomic knowledge.",
      "outlinePoints": [
        "Vision of Creative Commons: Balancing copyright and open access",
        "Four core condition symbols: BY (Attribution), SA (ShareAlike), NC (NonCommercial), ND (NoDerivatives)",
        "Six standardized license combinations from CC BY to CC BY-NC-ND",
        "Practical application for student theses, extension materials, and OER adaptation"
      ]
    },
    {
      "id": "AGR220-U1-SUB13",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning",
      "questionText": "Compare Synchronous and Asynchronous online learning modalities with respect to schedule flexibility, technical bandwidth requirements, peer interaction quality, and learning autonomy.",
      "contextScenario": "A rural agricultural university is designing an online certification course for students living in remote farming villages with intermittent electrical and internet connectivity.",
      "modelAnswer": "Online educational delivery is structured across two primary temporal modalities: Synchronous and Asynchronous learning.\n\n1. Schedule Flexibility and Learner Autonomy:\n- Synchronous Learning: Low flexibility. Requires instructors and students to log in simultaneously at fixed, pre-scheduled hours (e.g., live Zoom webinars). Demands rigid adherence to calendar schedules, conflicting with irregular farm work, harvest periods, and travel.\n- Asynchronous Learning: High flexibility and maximum learner autonomy. Course materials (recorded video lectures, readings, quizzes) are available 24/7. Students study whenever and wherever convenient, pausing, rewinding, and pacing learning to match individual schedules.\n\n2. Technical Bandwidth and Infrastructure Sensitivity:\n- Synchronous Learning: Extremely sensitive to network instability. Demands continuous, high-speed broadband and low-latency connections to stream two-way video and audio. Rural power cuts or sudden 4G drops cause immediate disconnection and missed instruction.\n- Asynchronous Learning: Highly resilient to poor infrastructure. Video lectures can be downloaded during off-peak hours or viewed at lower resolutions; readings and quizzes operate effectively over low-bandwidth mobile connections.\n\n3. Peer and Instructor Interaction Quality:\n- Synchronous Learning: High real-time interaction and immediacy. Facilitates spontaneous verbal debates, breakout group problem-solving, live demonstrations, and instant answers to student questions, fostering a strong sense of social presence.\n- Asynchronous Learning: Interaction occurs with temporal delay across discussion boards, email threads, and collaborative wikis. While lacking spontaneous banter, it fosters deeper, more reflective contributions because students have time to formulate evidence-based arguments.\n\n4. Optimal Agronomic Educational Model:\nA blended approach is ideal: Deliver foundational scientific theory asynchronously via modular videos and reading packs, supplemented by bi-weekly synchronous live problem-solving clinics and recorded Q&A sessions.",
      "outlinePoints": [
        "Schedule flexibility and autonomy: Fixed calendar timetables vs 24/7 self-paced study",
        "Bandwidth resilience: Live broadband requirements vs Offline downloadable media",
        "Interaction dynamics: Spontaneous real-time exchange vs Reflective delayed discussion boards",
        "Recommended hybrid model for rural agricultural students"
      ]
    },
    {
      "id": "AGR220-U1-SUB14",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "questionText": "Explain the concept of 'Digital Divide' in rural agriculture. Analyze its three recognized levels (access, skills, outcome) and evaluate how government e-learning initiatives address these inequities.",
      "contextScenario": "An agricultural policymaker is reviewing rural student participation in online technical courses under the Digital India program.",
      "modelAnswer": "The 'Digital Divide' refers to economic, social, and technological inequalities that separate individuals, households, and geographic areas with respect to access to Information and Communication Technologies (ICT) and the Internet.\n\n1. The Three Recognised Levels of the Digital Divide:\n- First-Level Divide (Physical Access & Connectivity):\n  The disparity in physical access to digital hardware and telecommunications infrastructure. In rural agricultural regions, households often lack personal computers, high-speed fiber broadband, and reliable rural electricity grids, relying instead on shared smartphones with limited mobile data.\n- Second-Level Divide (Digital Literacy & Skills):\n  Having physical access to a smartphone or computer does not guarantee effective utilization. The second level concerns disparities in digital competencies: the ability to navigate complex LMS interfaces, critically evaluate online information credibility, troubleshoot software errors, and utilize advanced educational tools.\n- Third-Level Divide (Outcomes & Empowerment):\n  The gap in the ability to translate digital skills and online education into real-world economic and social outcomes: securing high-paying agribusiness employment, launching AgriTech startups, or accessing premium export markets.\n\n2. How Government Initiatives Address These Inequities:\n- SWAYAM PRABHA (Overcoming First-Level Divide):\n  Deploys 40 DTH satellite television channels broadcasting educational content 24/7 over GSAT-15 without requiring internet connections or computer hardware, bringing higher education to remote rural television sets.\n- BharatNet & Common Service Centers (CSCs):\n  Lays optical fiber across 250,000 Gram Panchayats and provides rural digital kiosks where students can access computers and high-speed broadband to download course materials.\n- PM-DISHA (Pradhan Mantri Gramin Digital Saksharta Abhiyan):\n  Targeted national digital literacy campaign training millions of rural citizens in basic smartphone, internet browsing, and digital payment skills, addressing the second-level divide.\n- National Digital Educational Architecture (NDEAR) & SWAYAM Credit Transfer:\n  Legalizes online credit recognition under NEP 2020, ensuring rural students earning MOOC certificates receive degree credentials equivalent to urban university peers, addressing the third-level outcome divide.",
      "outlinePoints": [
        "Conceptual definition of the Digital Divide in agriculture",
        "First-Level Divide: Physical infrastructure, devices, and connectivity",
        "Second-Level Divide: Digital competencies, navigation skills, critical media literacy",
        "Third-Level Divide: Disparity in economic returns, employment, and social mobility",
        "Government interventions: SWAYAM PRABHA DTH, BharatNet, PM-DISHA, and NDEAR credit transfer"
      ]
    },
    {
      "id": "AGR220-U1-SUB15",
      "questionType": "CASE_STUDY",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "questionText": "Case Study: An undergraduate agriculture student enrolled in an 8-week NPTEL course on 'Agro-meteorology' completes the first two weeks with high enthusiasm, but by Week 4 has fallen two assignments behind and contemplates dropping out. Diagnose the failure modes and design an intervention plan.",
      "contextScenario": "A university faculty advisor is conducting an intervention with a student whose online assignment submissions dropped to zero midway through the semester.",
      "modelAnswer": "Diagnosis of Common MOOC Dropout Failure Modes:\nThe student's trajectory exemplifies the typical 'MOOC Attrition Curve' experienced by self-paced distance learners:\n1. Initial Novelty Decay: Initial motivation is fueled by excitement. By Week 4, novelty wanes, and abstract theoretical rigor increases.\n2. Lack of Scheduled Time Blocks: The student relied on 'free time' rather than scheduling non-negotiable calendar blocks, allowing university mid-term exams and social activities to displace online study.\n3. The 'Debt Accumulation' Spiral: Missing one assignment created guilt and anxiety. Falling two weeks behind feels like an insurmountable backlog, triggering defensive avoidance.\n4. Social Isolation: Studying in isolation without peer connection made dropping out feel consequence-free.\n\nFour-Step Rehabilitation and Recovery Plan:\n1. Triage and Psychological Reset:\n- Eliminate Guilt: Reassure the student that falling behind is a universal challenge, not a personal character flaw.\n- Understand the Scoring Rubric: NPTEL typically counts the 'best 6 out of 8' weekly assignments for final eligibility. Missing two assignments does not disqualify the student from earning a top certificate, instantly restoring hope.\n\n2. Rebuilding Momentum (The Micro-Step Restart):\n- Forgive the Backlog Temporarily: Rather than trying to catch up on Weeks 3 and 4 simultaneously, instruct the student to rejoin the current cohort at Week 5.\n- Dedicate two 25-minute Pomodoro sessions to watch Week 5 videos and complete this week's quiz first, re-establishing a winning rhythm.\n\n3. Structural Time-Blocking:\n- Anchor Study Blocks to Daily Habits: Dedicate fixed calendar slots (e.g., Saturday morning 9:00-11:30 AM) reserved exclusively for NPTEL coursework in the university library.\n- Eliminate Distractions: Leave the smartphone in the hostel room or use website-blocking software during this block.\n\n4. Establishing Peer and Faculty Accountability:\n- Pair the student with a study partner enrolled in the same course to review lecture notes together.\n- Schedule a 5-minute weekly check-in with the faculty advisor to review assignment confirmation receipts until the final exam.",
      "outlinePoints": [
        "Diagnostic analysis: Novelty decay, lack of time-blocking, backlog debt spiral, social isolation",
        "Step 1: Psychological reset and understanding NPTEL 'best 6 of 8' scoring rules",
        "Step 2: Restarting momentum with the current weekly module (micro-steps)",
        "Step 3: Concrete habit-anchored time-blocking in the library",
        "Step 4: Institutional and peer accountability partnerships"
      ]
    },
    {
      "id": "AGR220-U1-SUB16",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills",
      "questionText": "Explain the difference between 'Passive Review' and 'Active Retrieval Practice' in studying online agricultural science courses.",
      "contextScenario": "An undergraduate student spends hours highlighting textbook lines and re-watching recorded video lectures but receives poor marks on weekly objective quizzes.",
      "modelAnswer": "Cognitive psychology establishes a sharp contrast between the optical familiarity created by passive review and the durable neural consolidation driven by active retrieval practice.\n\n1. Passive Review (The Illusion of Competence):\n- Methods: Re-reading lecture transcripts, highlighting slide text with neon markers, and re-watching video lectures at normal or accelerated speeds without pausing.\n- Cognitive Mechanism: Relies on recognition memory. When reading already-seen sentences, the brain processes the information smoothly (high processing fluency). This creates a cognitive bias known as the 'Illusion of Competence'\u2014the mistaken belief that because material looks familiar, it is mastered.\n- Retention: Produces weak neural trace consolidation; information fades rapidly from memory within 48-72 hours.\n\n2. Active Retrieval Practice (The Testing Effect):\n- Methods: Closing the notes and writing down everything remembered from a lecture from scratch (free recall); answering practice quizzes without looking at answers; using digital flashcard applications (Anki, Quizlet); and explaining concepts aloud to a peer.\n- Cognitive Mechanism: Forces the brain to reconstruct mental pathways and retrieve information from long-term memory under effortful cognitive conditions. Each successful retrieval reinforces memory traces and builds interconnected associative schemas.\n- Retention: Studies consistently show active retrieval yields 50% to 100% higher long-term retention compared to passive re-reading, significantly improving performance on conceptual examinations.",
      "outlinePoints": [
        "Passive review mechanisms: Re-reading, highlighting, recognition fluency",
        "The Illusion of Competence: Conflating visual recognition with true mastery",
        "Active retrieval practice: Self-testing, flashcards, free recall",
        "The Testing Effect and neural trace consolidation for long-term retention"
      ]
    },
    {
      "id": "AGR220-U1-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques",
      "questionText": "Describe the 'Feynman Technique' for deep learning. Illustrate how an agriculture student can use it to master a complex concept such as C4 photosynthetic pathway versus C3 pathway.",
      "contextScenario": "A student preparing for an online certification exam struggles to retain the biochemical differences between C3 and C4 photosynthetic pathways.",
      "modelAnswer": "The Feynman Technique, developed by Nobel laureate physicist Richard Feynman, is a 4-step metacognitive learning method designed to eliminate superficial jargon and achieve genuine conceptual mastery.\n\nStep 1: Choose the Concept and Write the Title:\nTake a blank sheet of paper and write the target concept at the top: 'Why C4 Plants are More Efficient than C3 Plants in Hot Climates.'\n\nStep 2: Explain the Concept in Plain, Simple Language (The 12-Year-Old Test):\nWrite an explanation as if teaching an intelligent 12-year-old child or a non-scientific farmer. Strictly avoid technical jargon without explanation.\n- Simple Explanation:\n  * Normal plants (C3 plants like wheat and rice) capture carbon dioxide from the air using an enzyme called RuBisCO. But RuBisCO has a design flaw: when weather gets hot and dry, it gets confused and grabs oxygen instead of carbon dioxide. This process (photorespiration) wastes half the plant's energy.\n  * Smart plants (C4 plants like maize, sugarcane, and sorghum) evolved a biological 'turbocharger'. They use an efficient cellular pump (PEP carboxylase) that never grabs oxygen. They capture carbon in outer leaf cells (mesophyll), convert it into a 4-carbon acid, and pump it deep into protected inner chambers (bundle sheath cells) where RuBisCO is kept under high CO2 pressure, completely stopping energy waste.\n\nStep 3: Identify Gaps and Bottlenecks:\nReview the explanation to identify where words become vague, hand-waving, or reliant on unearned jargon (e.g., 'What anatomical feature makes those inner chambers special?'). Return to the MOOC video lecture or textbook to re-study Kranz anatomy and the malate transport mechanism.\n\nStep 4: Refine, Simplify, and Create Analogies:\nSynthesize the explanation using intuitive analogies:\n- Analogy: The C3 plant is like a shopper who goes to a crowded market where oxygen and CO2 fight for attention; in hot weather, the shopper buys the wrong item. The C4 plant operates like a drive-through service: carbon dioxide is packed into a private delivery vehicle (malate) and delivered directly into a locked room (Kranz bundle sheath) where no oxygen is allowed.",
      "outlinePoints": [
        "Step 1: Choose and define the target concept on a blank sheet",
        "Step 2: Explain in plain, jargon-free language to a novice audience",
        "Application: Explaining C3 vs C4 photosynthesis and RuBisCO's oxygen flaw",
        "Step 3: Pinpoint conceptual gaps and return to source lecture materials",
        "Step 4: Simplify, synthesize, and create intuitive physical analogies"
      ]
    },
    {
      "id": "AGR220-U1-SUB18",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)",
      "questionText": "Compare the Community of Inquiry (CoI) model's three presences (Cognitive, Social, and Teaching) between physical university classrooms and online MOOC environments.",
      "contextScenario": "A university transitions an on-campus agricultural entomology course into an online MOOC and must evaluate how to maintain interpersonal dynamics.",
      "modelAnswer": "The Community of Inquiry (CoI) framework, developed by Garrison, Anderson, and Archer, identifies three essential structural presences that must intersect to create deep educational experiences.\n\n1. Teaching Presence (Instructional Design & Facilitation):\n- Physical Classroom: Real-time, fluid, and improvisational. The professor adjusts pacing based on immediate room body language, draws spontaneous blackboard sketches, and conducts live laboratory walk-throughs.\n- Online MOOC: Highly planned, structured, and deliberate. Teaching presence must be intentionally designed into the course before launch: modular video scripts, clear weekly milestones, explicit grading rubrics, automated quiz feedback, and regular announcement emails from teaching assistants.\n\n2. Social Presence (Interpersonal Identity & Cohort Cohesion):\n- Physical Classroom: Natural, immediate, and rich in non-verbal cues. Students see peers, laugh together, engage in spontaneous hallway conversations, and build friendships organically through shared physical space.\n- Online MOOC: Mediated and vulnerable to transactional distance. Social presence requires deliberate digital channels: student introduction threads, personal profile pictures, emojis, peer-review feedback, video discussion boards, and WhatsApp/Discord student study groups to overcome isolation.\n\n3. Cognitive Presence (Constructing Meaning through Reflection):\n- Physical Classroom: Often constrained by classroom time limits. Fast-talking, extroverted students may dominate discussions, leaving introverted learners with limited reflection time.\n- Online MOOC: Well-suited for deep, reflective cognitive processing. Asynchronous discussion forums allow students to pause, reflect, review lecture slides, read scientific papers, and compose well-researched, evidence-based responses without real-time pressure.\n\nEducational Synthesis:\nWhile physical classrooms provide natural social warmth and spontaneous teaching flexibility, online MOOCs excel in cognitive reflection and accessible, repeatable content review.",
      "outlinePoints": [
        "Introduction to the three CoI presences (Garrison, Anderson, Archer)",
        "Teaching Presence: Live spontaneous classroom facilitation vs Pre-designed structured LMS architecture",
        "Social Presence: Immediate physical non-verbal cohesion vs Mediated digital community channels",
        "Cognitive Presence: Real-time spoken discussions vs Deeper asynchronous written reflection",
        "Complementary pedagogical value in blended agricultural education"
      ]
    },
    {
      "id": "AGR220-U1-SUB19",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs",
      "questionText": "Discuss the institutional, technological, and socio-economic challenges confronting online agricultural education in developing economies, and evaluate innovative strategies to overcome them.",
      "contextScenario": "A state agricultural university is developing a comprehensive digital learning master plan to reach smallholder farm youth across dryland agricultural districts.",
      "modelAnswer": "While digital learning and MOOCs offer unprecedented potential to democratize elite agricultural science, agricultural education possesses unique disciplinary characteristics that present severe operational challenges in developing nations.\n\n1. Disciplinary and Pedagogical Challenges:\n- The 'Hands-on Soil' Paradox (Practical Training Deficit):\n  Agricultural science is an applied, experiential discipline requiring physical touch, olfactory evaluation, and kinesthetic skills: assessing soil texture by feel, performing grafting and budding, identifying live pests and weeds in the field, and operating machinery. Pure online screen-based lectures cannot replace physical farm practice.\n- Laboratory and Farm Field Access Limitations:\n  Students studying remotely from home lack access to specialized spectrophotometers, Kjeldahl digestion benches, greenhouses, and experimental agronomy research plots.\n\n2. Technological and Socio-Economic Infrastructure Bottlenecks:\n- Rural Connectivity Deficits & Bandwidth Latency:\n  Agricultural students predominantly reside in rural and semi-urban tracts where 4G/5G mobile connectivity is erratic, high-speed fiber broadband is scarce, and daily power outages disrupt live online classes.\n- Device Inequity & Screen Limitations:\n  Over 75% of rural students access online courses exclusively via small smartphone screens rather than laptops, hindering complex data manipulation, GIS mapping, and thesis drafting.\n- Digital Literacy & Language Barriers:\n  Most elite global MOOCs are produced in English. Rural Indian students educated in vernacular regional languages struggle with advanced scientific English terminology and complex LMS navigation.\n\n3. Innovative Technological and Institutional Remediation Strategies:\n- The Blended 'Hub-and-Spoke' Model (KVK Integration):\n  Leverage existing district Krishi Vigyan Kendras (KVKs) and regional agricultural research stations as physical 'Spokes'. Students complete theoretical MOOC modules online at home, then attend compulsory 2-week hands-on practical residencies at their local KVK for soil testing, field scouting, and tractor operation.\n- Vernacular Localization & Dual-Audio SWAYAM Tracks:\n  Produce regional language translations and multilingual subtitles (Hindi, Punjabi, Marathi, Telugu, Tamil) using AI translation models verified by native subject-matter experts.\n- Virtual Labs and Immersive Simulations:\n  Develop interactive 3D virtual reality (VR) and web-based simulators (using WebGL and Unity) that allow students to simulate spectrophotometer calibrations, tractor linkage adjustments, and greenhouse climate controls on mobile screens.\n- Asynchronous Mobile-First Design & Offline Sync:\n  Engineer LMS mobile apps that allow one-tap downloading of video modules and reading texts when students are in town Wi-Fi zones, enabling completely offline study in un-connected villages.",
      "outlinePoints": [
        "The Disciplinary Paradox: Applied hands-on field nature of agricultural education",
        "Practical training deficits: Soil touch, pest scouting, machinery operation",
        "Infrastructure bottlenecks: Rural bandwidth latency, device limitations, language divides",
        "Strategy 1: The 'Hub-and-Spoke' blended model integrating KVK physical field practicals",
        "Strategy 2: Vernacular AI translations and regional audio tracks on SWAYAM",
        "Strategy 3: Interactive 3D Virtual Labs and WebGL machinery simulations",
        "Strategy 4: Mobile-first offline downloadable course architectures"
      ]
    },
    {
      "id": "AGR220-U1-SUB20",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students",
      "questionText": "Formulate a comprehensive personal digital study plan for an agricultural undergraduate student to earn an NPTEL Elite+Gold certification in an online course while maintaining a high physical semester GPA.",
      "contextScenario": "A high-performing undergraduate student requests a detailed 12-week operational roadmap to balance intensive on-campus coursework with an advanced NPTEL MOOC.",
      "modelAnswer": "Achieving an NPTEL 'Elite + Gold' certification (score >= 90%) while maintaining a high on-campus semester GPA requires systematic planning, rigorous time-blocking, active learning strategies, and consistent exam preparation.\n\n1. Phase 1: Pre-Course Setup (Week 0):\n- Course Selection & Alignment: Select an NPTEL course that synergizes with physical semester subjects (e.g., 'Soil and Water Conservation Engineering' or 'Precision Farming').\n- Workspace & Digital Environment Optimization: Install an ad-blocker, download a clean note-taking app (Obsidian, Notion, or OneNote), set up an Anki digital flashcard deck, and configure a dedicated calendar study block.\n- Baseline Diagnostic: Review the syllabus, prerequisites, and download previous years' exam question papers to calibrate the depth of study required.\n\n2. Phase 2: Weekly Operational Rhythm (Weeks 1 to 10):\n- Fixed Time-Blocking (The 4-Hour Weekly Commitment):\n  * Block A (Tuesday 6:00-7:30 PM): Watch weekly video lectures at 1.25x speed. Take concise Cornell notes focusing on equations, scientific laws, and definitions.\n  * Block B (Thursday 6:00-7:00 PM): Review assigned e-content readings. Convert key definitions and numerical formulas into Anki active recall flashcards.\n  * Block C (Saturday 9:00-10:30 AM): Complete weekly graded assignments independently without looking at answers. Never rely on peer groups or unverified internet solutions, as assignments constitute 25% of the final certification grade.\n- Metacognitive Review: When weekly assignment grades are posted, immediately review incorrect questions and log errors in a dedicated 'Mistake Notebook'.\n\n3. Phase 3: Consolidation & Spaced Repetition (Weeks 10 to 11):\n- Spaced Review: Dedicate 15 minutes daily to review Anki flashcards, automating formula recall.\n- Formula & Equation Cheat-Sheet: Compile a consolidated 3-page summary sheet containing all governing equations, units, constants, and regulatory dates.\n- Mock Exam Simulation: Solve the last three years' proctored NPTEL exam papers under strict timed, closed-book conditions.\n\n4. Phase 4: Final Proctored Exam Execution (Week 12):\n- Exam Readiness: Confirm test center allocation, print NTA hall ticket, verify physical ID credentials, and inspect allowed calculator specifications.\n- Time Management in Exam Hall: Complete rapid objective questions first (first 40 minutes), proceed to numerical calculations (next 60 minutes), and reserve 20 minutes for rigorous verification.\n\nFollowing this disciplined 4-phase framework ensures academic mastery, yielding top certification honors without compromising physical degree grades.",
      "outlinePoints": [
        "Phase 1: Pre-Course Setup (syllabus alignment, digital workspace, Anki setup)",
        "Phase 2: Weekly 4-hour operational rhythm (Cornell notes, flashcard conversion, independent quiz completion)",
        "Phase 3: Consolidation (daily spaced repetition, formula sheets, mock exam simulations)",
        "Phase 4: Proctored exam strategy (hall ticket verification, exam hall time allocation)",
        "Synergistic balance between online certification and physical semester GPA"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "AGR220-U1-FC01",
      "front": "What does MOOC stand for?",
      "back": "Massive Open Online Course: a web-based distance learning model designed for unlimited participation and open access.",
      "hint": "Four words starting with M, O, O, C",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs"
    },
    {
      "id": "AGR220-U1-FC02",
      "front": "What are the four pillars of a MOOC?",
      "back": "Massive (unlimited enrollment), Open (no prerequisites/free audit), Online (internet delivery), and Course (structured syllabus and assessment).",
      "hint": "The four letters of the acronym",
      "syllabusTopic": "Definition, evolution, and conceptual architecture of MOOCs"
    },
    {
      "id": "AGR220-U1-FC03",
      "front": "What is SWAYAM?",
      "back": "India's national indigenous MOOC platform (Study Webs of Active-Learning for Young Aspiring Minds) launched by the Ministry of Education.",
      "hint": "Indian government online portal",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn"
    },
    {
      "id": "AGR220-U1-FC04",
      "front": "What are the 4 quadrants of SWAYAM courses?",
      "back": "Quadrant 1: e-Tutorial (video), Quadrant 2: e-Content (readings), Quadrant 3: Assessment (quizzes), Quadrant 4: Discussion Forum (clearing doubts).",
      "hint": "Tutorial, Content, Assessment, Forum",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn"
    },
    {
      "id": "AGR220-U1-FC05",
      "front": "What is the difference between an xMOOC and a cMOOC?",
      "back": "xMOOCs are structured, teacher-centered, video-and-quiz courses (behaviorist); cMOOCs are decentralized, network-based, collaborative knowledge creation (connectivist).",
      "hint": "Structured instruction vs Social network learning",
      "syllabusTopic": "Typology of MOOCs: Connectivist (cMOOCs) versus Extended (xMOOCs)"
    },
    {
      "id": "AGR220-U1-FC06",
      "front": "What is NPTEL?",
      "back": "National Programme on Technology Enhanced Learning: founded by 7 IITs and IISc Bangalore, coordinating engineering and science MOOCs in India.",
      "hint": "IIT/IISc consortium",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn"
    },
    {
      "id": "AGR220-U1-FC07",
      "front": "What percentage of semester credits can be earned via SWAYAM under UGC/NEP regulations?",
      "back": "Up to 40% of total semester credits can be earned through approved online courses on SWAYAM.",
      "hint": "Less than half, exact percentage",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn"
    },
    {
      "id": "AGR220-U1-FC08",
      "front": "What is Mayer's Dual-Channel Assumption in multimedia learning?",
      "back": "The brain possesses separate processing channels for visual/pictorial information and auditory/verbal information.",
      "hint": "Eyes and ears",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning"
    },
    {
      "id": "AGR220-U1-FC09",
      "front": "What is the Modality Principle in Mayer's theory?",
      "back": "Learners retain information better when graphics are accompanied by spoken audio narration rather than on-screen written text.",
      "hint": "Spoken words over on-screen text",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning"
    },
    {
      "id": "AGR220-U1-FC10",
      "front": "What are the three types of cognitive load in Sweller's Cognitive Load Theory?",
      "back": "Intrinsic load (subject complexity), Extraneous load (poor instructional design), and Germane load (productive schema construction).",
      "hint": "Intrinsic, Extraneous, Germane",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning"
    },
    {
      "id": "AGR220-U1-FC11",
      "front": "What is Zimmerman's 3-phase Self-Regulated Learning (SRL) cycle?",
      "back": "1. Forethought (goal setting, planning); 2. Performance (monitoring, strategies); 3. Self-Reflection (self-judgment, adaptation).",
      "hint": "Before, during, and after study",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills"
    },
    {
      "id": "AGR220-U1-FC12",
      "front": "What is the Pomodoro Technique?",
      "back": "A time management method working in 25-minute focused bursts separated by 5-minute short breaks.",
      "hint": "25 minutes on, 5 minutes off",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques"
    },
    {
      "id": "AGR220-U1-FC13",
      "front": "What are the four quadrants of the Eisenhower Matrix?",
      "back": "Q1: Urgent & Important (Do); Q2: Important Not Urgent (Schedule); Q3: Urgent Not Important (Delegate); Q4: Neither (Eliminate).",
      "hint": "Urgent vs Important axes",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques"
    },
    {
      "id": "AGR220-U1-FC14",
      "front": "What is Active Recall (Retrieval Practice)?",
      "back": "Effortfully retrieving information from memory (via self-testing or flashcards) rather than passively re-reading or highlighting text.",
      "hint": "Testing memory from scratch",
      "syllabusTopic": "Self-regulated learning (SRL) strategies and metacognitive skills"
    },
    {
      "id": "AGR220-U1-FC15",
      "front": "What is Spaced Repetition?",
      "back": "Reviewing material at systematically increasing time intervals to combat the forgetting curve and build permanent memory.",
      "hint": "Spacing out reviews over time",
      "syllabusTopic": "Time management, digital distraction control, and course completion techniques"
    },
    {
      "id": "AGR220-U1-FC16",
      "front": "What is the Feynman Technique?",
      "back": "A 4-step learning method explaining a concept in simple, jargon-free language as if teaching a novice, exposing knowledge gaps.",
      "hint": "Teaching an imaginary 12-year-old",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning"
    },
    {
      "id": "AGR220-U1-FC17",
      "front": "What are the three presences in the Community of Inquiry (CoI) model?",
      "back": "Cognitive Presence (constructing meaning), Social Presence (connecting with peers), and Teaching Presence (instruction and facilitation).",
      "hint": "Cognitive, Social, Teaching",
      "syllabusTopic": "Digital pedagogy and cognitive theories of multimedia learning"
    },
    {
      "id": "AGR220-U1-FC18",
      "front": "What is SWAYAM PRABHA?",
      "back": "A group of 40 DTH television channels broadcasting 24/7 educational programs across India via the GSAT-15 satellite.",
      "hint": "40 DTH educational TV channels",
      "syllabusTopic": "Major global and national platforms: SWAYAM, NPTEL, Coursera, edX, and FutureLearn"
    },
    {
      "id": "AGR220-U1-FC19",
      "front": "What are Creative Commons (CC) licenses?",
      "back": "Standardized public copyright licenses allowing creators to grant permissions to share, reuse, and build upon their work legally.",
      "hint": "CC BY, CC BY-SA, etc.",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students"
    },
    {
      "id": "AGR220-U1-FC20",
      "front": "What is Two-Factor Authentication (2FA)?",
      "back": "A security process requiring two independent authentication factors (e.g., password + authenticator code) to verify identity.",
      "hint": "Something you know + something you have",
      "syllabusTopic": "Digital literacy, ICT competencies, and cybersecurity basics for agriculture students"
    }
  ]
};
