import { UnitContent } from "./types";

export const unit3Content: UnitContent = {
  "unitNumber": 3,
  "title": "Online Assessment and Certification",
  "shortDescription": "Formative and summative assessment, item analysis metrics, Calibrated Peer Review (CPR), AI remote proctoring technologies, Open Badges, Blockchain credentialing (Blockcerts), e-portfolio development, and LinkedIn/ORCID optimization.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
    "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
    "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
    "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
    "Blockchain technology in educational credential verification and tamper-proof transcripts",
    "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
    "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD"
  ],
  "notes": {
    "learningObjectives": [
      "Contrast formative and summative online assessment paradigms and calculate psychometric item analysis metrics.",
      "Analyze the operational workflow, calibration essays, and inter-rater reliability of Calibrated Peer Review (CPR).",
      "Evaluate remote and automated AI proctoring technologies (lockdown browsers, computer vision, gaze tracking) and address privacy ethics.",
      "Explain digital micro-credentials, stackable certificates, nanodegrees, and the Open Badges 2.0/3.0 standard.",
      "Understand blockchain applications in credential verification (Blockcerts, Merkle trees, SHA-256 hashes, tamper-proof transcripts).",
      "Develop professional e-portfolios using Google Sites, Notion, and GitHub to showcase field trials and data analytics.",
      "Optimize professional online profiles across LinkedIn, ResearchGate, and ORCID iD for agribusiness and research career advancement."
    ],
    "sections": [
      {
        "id": "agr220-u3-sec1",
        "heading": "1. Online Assessment Architectures and Psychometric Item Analysis",
        "content": "Digital learning architectures employ diverse evaluation strategies balancing grading scalability against cognitive depth.\n\n1. Formative vs Summative Assessment:\n- Formative Assessment: Low-stakes, continuous diagnostic evaluation (in-video pop-up quizzes, weekly self-tests) providing immediate feedback to guide student self-correction without penalty anxiety.\n- Summative Assessment: High-stakes cumulative evaluation (proctored final exams, capstone farm project plans) measuring competence against accredited benchmarks.\n\n2. Assessment Modalities:\n- Automated Multiple-Choice Questions (MCQs): 100% objective, highly scalable, assessing recall and comprehension.\n- Automated Code Evaluators: Testing computational scripts (R/Python for agriculture) inside isolated Docker containers against standardized test suites.\n- Analytical Rubrics: Multi-criteria evaluation matrices establishing explicit performance criteria and achievement levels to standardize subjective grading.\n\n3. Psychometric Item Analysis (Classical Test Theory):\n- Difficulty Index (p): Proportion answering correctly (p = (H + L) / N); ideal range is 0.40 to 0.70.\n- Discrimination Index (DI): Ability to differentiate high from low scorers (DI = (H - L) / (N / 2)); values >= 0.30 indicate good discrimination; negative values reveal defective items.\n- Distractor Efficiency (DE): Incorrect options must be plausible, selected by at least 5% of students."
      },
      {
        "id": "agr220-u3-sec2",
        "heading": "2. Calibrated Peer Review (CPR) and Scalable Peer Grading",
        "content": "Calibrated Peer Review (CPR) solves the grading scalability bottleneck in massive online courses (MOOCs) while training students in critical evaluative thinking.\n\n1. Three-Stage Workflow:\n- Stage 1: Text Submission: Students compose anonymized essays addressing a complex agricultural prompt.\n- Stage 2: Calibration Training: Students grade three pre-scored 'benchmark essays' (high, medium, poor quality) using an analytical rubric. The system calculates a Reviewer Competency Index (RCI); students must demonstrate accurate calibration before grading peers.\n- Stage 3: Double-Blind Peer Evaluation: Students evaluate three randomly assigned peer essays and complete a self-assessment. Final grades weight peer evaluations by each rater's certified RCI score.\n\n2. Inter-Rater Reliability:\nEvaluated statistically using Cohen's Kappa (kappa) or Intraclass Correlation Coefficients (ICC) to ensure peer scores achieve high consistency."
      },
      {
        "id": "agr220-u3-sec3",
        "heading": "3. Remote and AI-Proctored Examination Technologies",
        "content": "Ensuring academic integrity in remote examinations combines client-side operating system containment with cloud computer vision and acoustic analytics.\n\n1. Client-Side Browser Lockdowns (Safe Exam Browser, Respondus):\nBlocks secondary monitors, terminates unauthorized background applications (Zoom, Discord, AnyDesk), disables clipboard copy-paste and screenshot shortcuts, and detects virtual machine hypervisors.\n\n2. Automated AI Surveillance Engines:\n- Computer Vision & Facial Biometrics: Continuous identity verification using CNNs; 68-point facial landmark tracking to detect head-pose and gaze aversion; YOLO/SSD object detection flagging unauthorized smartphones, textbooks, or secondary persons.\n- Acoustic Anomaly Detection: Audio signal processing capturing microphone streams, detecting human speech, whispers, and anomalous decibel spikes.\n\n3. Ethical, Privacy, and Technical Challenges:\n- Algorithmic Bias: Higher error rates and false-positive flags on darker skin tones.\n- Disciplinary Friction: Legitimate quantitative calculation on scratch paper falsely flagged as 'gaze aversion'.\n- Privacy & Surveillance Anxiety: Student discomfort with private room video capture and biometric data storage under GDPR/DPDP frameworks. Best practice mandates human auditor review before penalizing students."
      },
      {
        "id": "agr220-u3-sec4",
        "heading": "4. Digital Credentials, Micro-Credentials, and Blockchain Verification",
        "content": "Higher education is evolving from monolithic 4-year diplomas toward modular, stackable micro-credentials.\n\n1. Open Badges Standard (1EdTech Consortium):\nStandardized digital tokens composed of three JSON-LD objects: (a) Issuer Profile, (b) BadgeClass (skill definition, criteria), and (c) Assertion (individual recipient, issue date, evidence URL). 'Badge Baking' embeds this verifiable JSON metadata directly into PNG/SVG image chunks.\n\n2. Stackable Credentials & NEP 2020 Integration:\nMicro-credentials accumulate toward formal diplomas and degrees, supported in India by the Academic Bank of Credits (ABC) under the National Education Policy 2020.\n\n3. Blockchain Credentialing (Blockcerts Architecture):\n- SHA-256 Hashing: Generates an immutable 64-character digital fingerprint of the certificate; altering a single character changes the hash completely.\n- Merkle Tree Batching: Thousands of student certificates are hashed into a Merkle Tree; only the top Merkle Root is anchored onto a public blockchain (Ethereum, Polygon), ensuring cost-effective scalability.\n- Decentralized Verification: Employers verify certificates in seconds via open web tools without contacting university registrars, eliminating credential fraud."
      },
      {
        "id": "agr220-u3-sec5",
        "heading": "5. Professional E-Portfolios and Online Academic Networking",
        "content": "1. E-Portfolio Development:\nCurating digital evidence of professional competence using Google Sites, Notion, or WordPress. Key sections include: professional biography, field practicals/RAWE documented via STAR methodology (Situation, Task, Action, Result), laboratory testing competencies, and reproducible data analytics scripts hosted on GitHub.\n\n2. Professional Online Networking:\n- LinkedIn Optimization: Professional agricultural headshot and banner, keyword-rich headline ('B.Sc. Agriculture | Precision Farming & GIS Specialist'), 3-paragraph narrative About summary, and featured research posters.\n- ResearchGate: Academic social network for sharing peer-reviewed publications, downloading full texts, and monitoring citation metrics (h-index, Research Interest Score).\n- ORCID iD: Persistent 16-digit unique digital identifier (https://orcid.org/0000-0002-XXXX-XXXX) that eliminates author name ambiguity, automatically linking publications across CrossRef, Scopus, and funding bodies."
      }
    ],
    "keyTakeaways": [
      "Formative assessments provide ongoing diagnostic feedback; summative assessments evaluate cumulative achievement against formal benchmarks.",
      "Item analysis evaluates Difficulty Index (ideal p = 0.40 to 0.70) and Discrimination Index (DI >= 0.30) to optimize online question banks.",
      "Calibrated Peer Review (CPR) trains student evaluators on benchmark essays before double-blind peer grading in massive cohorts.",
      "AI proctoring integrates lockdown browsers, computer vision (head pose, gaze tracking), and audio processing, requiring human oversight to resolve false positives.",
      "Open Badges bake JSON-LD metadata assertions directly into PNG/SVG images, providing verifiable evidence of modular competencies.",
      "Blockchain credentialing (Blockcerts) anchors Merkle roots on decentralized ledgers, enabling instant, tamper-proof diploma verification.",
      "E-portfolios document authentic field trials using the STAR method, complemented by professional networking on LinkedIn, ResearchGate, and ORCID."
    ],
    "commonMisunderstandings": [
      "Misunderstanding: Automated AI proctoring software can legally fail or expel a student without human intervention. Fact: AI proctoring only flags potential incidents; statutory academic regulations mandate that human faculty committees must audit flagged video evidence before any disciplinary action.",
      "Misunderstanding: A digital badge is just a decorative clip-art icon downloaded from the web. Fact: Authentic Open Badges contain cryptographically baked-in JSON-LD metadata detailing the earner, criteria, issuing university, and public key verification signatures.",
      "Misunderstanding: Blockchain diplomas expose private student grades publicly to everyone on the internet. Fact: Blockcerts stores private identifying data off-chain in encrypted student wallets; only anonymous mathematical hashes are stored on-chain.",
      "Misunderstanding: Having an ORCID iD requires paying an annual subscription fee. Fact: ORCID is a global non-profit organization providing free, permanent digital identifiers to all researchers and students worldwide."
    ],
    "summary": "Unit 3 provides comprehensive academic instruction on digital assessment architectures, proctoring technologies, modern credentialing, and professional online branding for agricultural scholars. It contrasts formative diagnostic checks with high-stakes summative exams, detailing psychometric item analysis (Difficulty Index p, Discrimination Index DI, Distractor Efficiency) and analytical rubric design. Calibrated Peer Review (CPR) is analyzed as an instructional methodology for scaling essay grading while fostering evaluative judgment. Remote examination security is examined across client lockdown browsers, AI computer vision (gaze tracking, facial landmarks), audio processing, and ethical privacy safeguards. The unit details digital micro-credentials, stackable qualifications under NEP 2020's Academic Bank of Credits, and the Open Badges 2.0/3.0 standard. Blockchain credentialing via the Blockcerts standard\u2014utilizing SHA-256 cryptographic hashing, asymmetric digital signatures, Merkle tree batching, and decentralized verification\u2014is thoroughly analyzed. Finally, best practices for building reflective e-portfolios (STAR methodology, GitHub reproducible code) and optimizing professional visibility across LinkedIn, ResearchGate, and ORCID iD are fully detailed."
  },
  "mcqs": [
    {
      "id": "AGR220-U3-MCQ01",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Easy",
      "questionText": "What is the primary diagnostic purpose of 'Formative Assessment' in an online course?",
      "options": {
        "A": "Monitoring student learning during the instructional process to provide ongoing feedback that improves teaching and learning",
        "B": "Assigning a final permanent letter grade at the end of the academic year",
        "C": "Ranking students for national scholarships",
        "D": "Expelling failing students from the university"
      },
      "correctOption": "A",
      "explanation": "Formative assessments (low-stakes weekly quizzes, in-video concept checks) provide immediate diagnostic feedback to help students identify strengths and target areas that need work."
    },
    {
      "id": "AGR220-U3-MCQ02",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Easy",
      "questionText": "What is 'Summative Assessment' in online learning?",
      "options": {
        "A": "Evaluating student learning at the end of an instructional unit by comparing it against a benchmark or standard (e.g., final proctored exam)",
        "B": "A 2-minute diagnostic warm-up quiz",
        "C": "Informal peer conversation on a discussion board",
        "D": "Checking student attendance in a morning class"
      },
      "correctOption": "A",
      "explanation": "Summative assessments (high-stakes mid-terms, final exams, capstone projects) measure cumulative knowledge acquisition at the end of a defined instructional period."
    },
    {
      "id": "AGR220-U3-MCQ03",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Easy",
      "questionText": "What is an 'Open Badge' in digital credentialing?",
      "options": {
        "A": "A standardized visual digital token containing baked-in verifiable metadata detailing the earner, issuing institution, criteria, and evidence of achievement",
        "B": "A metal pin worn on a laboratory coat",
        "C": "A discount coupon for buying groceries",
        "D": "A paper certificate mailed via post"
      },
      "correctOption": "A",
      "explanation": "An Open Badge (1EdTech standard) is a digital image containing embedded cryptographic JSON metadata verifying the issuer, earner, criteria, and evidence of competence."
    },
    {
      "id": "AGR220-U3-MCQ04",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Easy",
      "questionText": "What is an 'ORCID iD' and why is it essential for agricultural researchers and students?",
      "options": {
        "A": "A unique, persistent 16-digit digital identifier that distinguishes individual researchers from others, resolving name ambiguities in scientific publications",
        "B": "A national identity card issued by the police",
        "C": "A password used to unlock university Wi-Fi",
        "D": "A tax identification number for farm businesses"
      },
      "correctOption": "A",
      "explanation": "An ORCID iD (Open Researcher and Contributor ID) provides a persistent digital identifier that distinguishes you from every other researcher, ensuring all publications are credited accurately."
    },
    {
      "id": "AGR220-U3-MCQ05",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Easy",
      "questionText": "What is a 'Lockdown Browser' (e.g., Safe Exam Browser, Respondus) used during online exams?",
      "options": {
        "A": "A specialized custom web browser that locks down the testing computer, preventing students from opening new tabs, copying text, or accessing unauthorized software",
        "B": "A physical padlock attached to the computer screen",
        "C": "A software program that turns off the internet permanently",
        "D": "An antivirus software that deletes game files"
      },
      "correctOption": "A",
      "explanation": "A lockdown browser restricts the desktop testing environment, disabling screen capture, keyboard shortcuts, multiple monitors, and internet browsing during exam sessions."
    },
    {
      "id": "AGR220-U3-MCQ06",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "difficulty": "Easy",
      "questionText": "What does 'Double-Blind' mean in online peer assessment of student agricultural essays?",
      "options": {
        "A": "The student author does not know the identity of the peer reviewers, and the peer reviewers do not know the identity of the author",
        "B": "Both the reviewer and author wear dark sunglasses",
        "C": "The computer screen is turned off during grading",
        "D": "Two reviewers grade the paper simultaneously without looking at the rubric"
      },
      "correctOption": "A",
      "explanation": "Double-blind assessment conceals both the author's and reviewers' identities, eliminating demographic biases, personal favoritism, or halo effects during grading."
    },
    {
      "id": "AGR220-U3-MCQ07",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Easy",
      "questionText": "What fundamental property of Blockchain technology makes it valuable for issuing university degrees and MOOC certificates?",
      "options": {
        "A": "Immutability: once a credential's cryptographic hash is recorded on the distributed ledger, it cannot be altered, forged, or deleted",
        "B": "It requires no electricity to operate",
        "C": "It is made of physical metal blocks",
        "D": "It automatically gives every student 100% marks"
      },
      "correctOption": "A",
      "explanation": "Blockchain provides an immutable, decentralized ledger. Certificates hashed onto the blockchain cannot be forged, manipulated, or revoked without cryptographic verification."
    },
    {
      "id": "AGR220-U3-MCQ08",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Easy",
      "questionText": "Which professional social networking platform is most critical for undergraduate agricultural students seeking internships, corporate agribusiness jobs, and professional visibility?",
      "options": {
        "A": "LinkedIn",
        "B": "Snapchat",
        "C": "TikTok",
        "D": "Pinterest"
      },
      "correctOption": "A",
      "explanation": "LinkedIn is the premier global professional networking platform used by agribusiness corporations, seed companies, research organizations, and recruiters to identify talent."
    },
    {
      "id": "AGR220-U3-MCQ09",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Easy",
      "questionText": "What is a 'Micro-credential' in modern agricultural higher education?",
      "options": {
        "A": "A compact, verified qualification focused on a specific narrow skill, competency, or technical knowledge area (e.g., Drone Crop Spraying or Soil Carbon Auditing)",
        "B": "A tiny printed paper certificate measuring 1 centimeter",
        "C": "A certificate that expires after 24 hours",
        "D": "A grade given to microscopic bacteria"
      },
      "correctOption": "A",
      "explanation": "Micro-credentials certify mastery of specific, granular competencies or technical skills acquired through short courses or modular learning, complementing formal university degrees."
    },
    {
      "id": "AGR220-U3-MCQ10",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "difficulty": "Easy",
      "questionText": "What is an 'E-portfolio' (electronic portfolio) in higher education?",
      "options": {
        "A": "A curated digital collection of authentic student artifacts, project reports, videos, and reflective writing demonstrating professional competence over time",
        "B": "A digital leather bag for carrying laptops",
        "C": "An email inbox containing junk messages",
        "D": "A bank statement showing agricultural loans"
      },
      "correctOption": "A",
      "explanation": "An e-portfolio is a dynamic digital repository where students curate evidence of their learning (field trial photos, lab analyses, code, certifications, reflective essays) to showcase skills to employers."
    },
    {
      "id": "AGR220-U3-MCQ11",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Easy",
      "questionText": "What is 'Automated AI Proctoring' in online distance examinations?",
      "options": {
        "A": "Using computer vision, facial tracking, and acoustic analysis algorithms to monitor student webcams and audio feeds for suspicious testing behavior without a continuous human proctor",
        "B": "Having a robot physically walk into the student's room",
        "C": "Using a calculator to solve math problems",
        "D": "Grading papers using red ink"
      },
      "correctOption": "A",
      "explanation": "AI proctoring uses algorithmic monitoring (gaze tracking, multiple face detection, microphone acoustic anomaly detection) to flag potential academic dishonesty during remote exams."
    },
    {
      "id": "AGR220-U3-MCQ12",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Easy",
      "questionText": "What is a 'Rubric' in educational assessment?",
      "options": {
        "A": "A scoring guide or matrix outlining specific criteria and levels of achievement used to evaluate student work objectively",
        "B": "A red pen used by teachers",
        "C": "A software bug that crashes exams",
        "D": "A certificate of attendance"
      },
      "correctOption": "A",
      "explanation": "A rubric defines explicit evaluation criteria (e.g., scientific accuracy, structure, methodology) and performance standards (poor, good, excellent), standardizing subjective grading."
    },
    {
      "id": "AGR220-U3-MCQ13",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Easy",
      "questionText": "What is the recommended professional practice for an agricultural student's LinkedIn headline?",
      "options": {
        "A": "A clear, compelling statement combining your field of study, core competencies, and career aspiration (e.g., 'B.Sc. Agriculture Honors Student | Precision Agronomy & Soil Health Enthusiast')",
        "B": "Writing 'Unemployed and looking for money'",
        "C": "Leaving it completely blank",
        "D": "Listing your favorite video games"
      },
      "correctOption": "A",
      "explanation": "A strong LinkedIn headline immediately communicates professional identity, technical specializations, and career focus to recruiters scanning candidate profiles."
    },
    {
      "id": "AGR220-U3-MCQ14",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Easy",
      "questionText": "Which online education platform popularized the concept of 'Nanodegrees' co-created with technology and industrial partners?",
      "options": {
        "A": "Udacity",
        "B": "Wikipedia",
        "C": "Khan Academy",
        "D": "Duolingo"
      },
      "correctOption": "A",
      "explanation": "Udacity pioneered 'Nanodegrees'\u2014project-focused credentials developed with industry giants (Google, IBM, AWS) to equip learners with job-ready technical skills."
    },
    {
      "id": "AGR220-U3-MCQ15",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Easy",
      "questionText": "What open standard developed by the MIT Media Lab and Learning Machine allows universities to issue blockchain-based digital certificates?",
      "options": {
        "A": "Blockcerts",
        "B": "Bitcoin Cash",
        "C": "HTML5",
        "D": "JavaScript"
      },
      "correctOption": "A",
      "explanation": "Blockcerts is an open-source standard for creating, issuing, viewing, and cryptographically verifying educational credentials on public blockchains."
    },
    {
      "id": "AGR220-U3-MCQ16",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Easy",
      "questionText": "What suspicious activity during an AI-proctored online exam is immediately flagged by computer vision algorithms?",
      "options": {
        "A": "Multiple faces appearing on the webcam, student looking off-screen for prolonged periods, or absence of face in frame",
        "B": "Typing answers on the keyboard",
        "C": "Blinking eyes naturally",
        "D": "Breathing normally"
      },
      "correctOption": "A",
      "explanation": "AI proctoring monitors facial landmarks. It generates incident flags if the candidate's face leaves the camera frame, if a second person enters the frame, or if head-pose tracking detects gaze aversion."
    },
    {
      "id": "AGR220-U3-MCQ17",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "difficulty": "Easy",
      "questionText": "Which software hosting platform is standardly used by precision agriculture and agronomy students to share R/Python data analysis scripts publicly?",
      "options": {
        "A": "GitHub",
        "B": "TikTok",
        "C": "WhatsApp",
        "D": "Netflix"
      },
      "correctOption": "A",
      "explanation": "GitHub is the premier cloud repository for version-controlling and sharing code, allowing agricultural students to host open-source data scripts, GIS workflows, and statistical analyses."
    },
    {
      "id": "AGR220-U3-MCQ18",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Easy",
      "questionText": "What is an 'Adaptive Quiz' (Computerized Adaptive Testing - CAT) in online assessment?",
      "options": {
        "A": "A testing system that dynamically adjusts question difficulty based on the examinee's performance on previous questions",
        "B": "A quiz that only runs on mobile phones",
        "C": "A quiz written in pencil on paper",
        "D": "A test where all students receive identical questions regardless of ability"
      },
      "correctOption": "A",
      "explanation": "Computerized Adaptive Testing (CAT) uses Item Response Theory (IRT) algorithms to tailor difficulty: answering correctly prompts a harder question; answering incorrectly prompts an easier question."
    },
    {
      "id": "AGR220-U3-MCQ19",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Easy",
      "questionText": "What is the primary benefit of joining specialized LinkedIn groups (e.g., 'Indian Agribusiness Professionals', 'ICAR Alumni') for an undergraduate?",
      "options": {
        "A": "Connecting with industry leaders, participating in professional discussions, and discovering unadvertised internship and job opportunities",
        "B": "Getting discounts on movie tickets",
        "C": "Playing online games with friends",
        "D": "Downloading commercial music for free"
      },
      "correctOption": "A",
      "explanation": "Industry-specific LinkedIn groups aggregate domain experts, offering agricultural students direct networking access to senior hiring managers, policy updates, and career leads."
    },
    {
      "id": "AGR220-U3-MCQ20",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Easy",
      "questionText": "What organization establishes and maintains the global technical specifications for the Open Badges standard?",
      "options": {
        "A": "1EdTech Consortium (formerly IMS Global)",
        "B": "International Olympic Committee",
        "C": "World Health Organization",
        "D": "United Nations Security Council"
      },
      "correctOption": "A",
      "explanation": "1EdTech Consortium (formerly IMS Global Learning Consortium) oversees the technical specifications, JSON-LD schemas, and verification protocols for the Open Badges standard."
    },
    {
      "id": "AGR220-U3-MCQ21",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "difficulty": "Medium",
      "questionText": "How does Calibrated Peer Review (CPR) verify a student's grading competency before allowing them to grade peer essays in a MOOC?",
      "options": {
        "A": "Students must first evaluate standard 'benchmark essays' of known quality; only when their grading aligns with the instructor's benchmark ratings are they certified to grade peers",
        "B": "Students take an in-person physical fitness test",
        "C": "The computer randomly assigns grades without student input",
        "D": "Students must pay a deposit of 100 dollars"
      },
      "correctOption": "A",
      "explanation": "In Calibrated Peer Review, learners grade three benchmark essays with pre-assigned instructor scores. The system calculates a Reviewer Competency Index (RCI); students must demonstrate accurate calibration before grading peer submissions."
    },
    {
      "id": "AGR220-U3-MCQ22",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Medium",
      "questionText": "What ethical and privacy concerns have been raised regarding automated AI proctoring in higher education?",
      "options": {
        "A": "Biometric data privacy risks, algorithmic bias in facial recognition across diverse ethnicities, high false-positive flagging rates, and test anxiety from surveillance",
        "B": "Computers consuming too much battery power",
        "C": "Exams being completed too quickly",
        "D": "Students learning too much scientific theory"
      },
      "correctOption": "A",
      "explanation": "AI proctoring systems face scrutiny over algorithmic bias (higher error rates on darker skin tones), intense test anxiety induced by continuous gaze tracking, potential GDPR/DPDP biometric privacy violations, and false flags."
    },
    {
      "id": "AGR220-U3-MCQ23",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Medium",
      "questionText": "In blockchain credentialing, what is a 'Cryptographic Hash' (e.g., SHA-256) of a student's degree certificate?",
      "options": {
        "A": "A unique, fixed-length 64-character digital fingerprint generated from the certificate document; altering even a single comma in the certificate produces a completely different hash",
        "B": "A secret password known only to the student",
        "C": "A physical stamp placed on the paper diploma",
        "D": "A digital photograph of the university building"
      },
      "correctOption": "A",
      "explanation": "A cryptographic hash function (SHA-256) transforms input data into a unique, fixed-size mathematical digest. Any tampering with certificate text irrevocably changes the hash, exposing fraud immediately."
    },
    {
      "id": "AGR220-U3-MCQ24",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Medium",
      "questionText": "What technical process is termed 'baking' in the Open Badges standard?",
      "options": {
        "A": "Embedding the credential's JSON-LD assertion metadata (earner identity, issuer signature, criteria, evidence URL) directly inside the PNG or SVG image file",
        "B": "Heating the computer processor to 100\u00b0C",
        "C": "Cooking meals in agricultural nutrition labs",
        "D": "Printing the badge onto ceramic coffee mugs"
      },
      "correctOption": "A",
      "explanation": "In the Open Badges standard, 'baking' is the process of embedding portable cryptographic metadata directly into the chunks of a PNG or SVG image file, making the badge self-contained and independently verifiable."
    },
    {
      "id": "AGR220-U3-MCQ25",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Medium",
      "questionText": "How does an agricultural student calculate their ResearchGate 'Research Interest Score'?",
      "options": {
        "A": "A dynamic weighted metric calculated from how often other scientists read, recommend, and cite the author's publications and research project updates",
        "B": "The number of research papers printed on paper",
        "C": "The number of hours logged into ResearchGate per week",
        "D": "The financial cost of research laboratory equipment"
      },
      "correctOption": "A",
      "explanation": "ResearchGate's Research Interest Score is an algorithmically weighted bibliometric score reflecting positive peer interactions (reads, recommendations, citations) with a researcher's published scientific outputs."
    },
    {
      "id": "AGR220-U3-MCQ26",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Medium",
      "questionText": "What is 'Item Analysis' in evaluating the statistical quality of multiple-choice questions in an online question bank?",
      "options": {
        "A": "Calculating the Difficulty Index (p-value) and Discrimination Index (DI) to identify questions that are too easy, too difficult, or fail to differentiate high- from low-performing students",
        "B": "Counting the total number of words in an exam",
        "C": "Checking the price of items in a supermarket",
        "D": "Weighing exam papers on a balance"
      },
      "correctOption": "A",
      "explanation": "Item analysis evaluates psychometric validity: Difficulty Index (p) measures the fraction of students answering correctly, while Discrimination Index (DI) compares high scorers against low scorers to weed out ambiguous or defective questions."
    },
    {
      "id": "AGR220-U3-MCQ27",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Medium",
      "questionText": "What is 'Live Remote Proctoring' and how does it differ from Automated AI Proctoring?",
      "options": {
        "A": "Human invigilators monitor student webcams, audio feeds, and screens in real-time over live video streams, whereas AI proctoring uses algorithmic flagging without immediate human presence",
        "B": "Live proctoring requires the teacher to stand in the student's room",
        "C": "There is no difference; both terms describe identical processes",
        "D": "Live proctoring uses robots while AI proctoring uses humans"
      },
      "correctOption": "A",
      "explanation": "Live remote proctoring employs trained human proctors monitoring live video feeds of 6-16 examinees simultaneously, intervening in real time via audio/chat when suspicious behavior occurs."
    },
    {
      "id": "AGR220-U3-MCQ28",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "difficulty": "Medium",
      "questionText": "What is the 'STAR' method used by students to articulate agricultural project case studies within digital portfolios and job interviews?",
      "options": {
        "A": "Situation, Task, Action, and Result",
        "B": "Seed, Tractor, Agronomy, and Reaping",
        "C": "Science, Technology, Agriculture, and Research",
        "D": "Soil, Temperature, Altitude, and Rainfall"
      },
      "correctOption": "A",
      "explanation": "The STAR framework structures competency-based storytelling: Situation (context/problem), Task (your specific objective), Action (steps taken), and Result (quantifiable agricultural outcome achieved)."
    },
    {
      "id": "AGR220-U3-MCQ29",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Medium",
      "questionText": "How does a third-party agribusiness employer verify a candidate's blockchain-issued digital certificate without contacting the issuing university?",
      "options": {
        "A": "The employer inputs the digital certificate file or public key into an open verifier tool, which cryptographically confirms the issuer's signature, recipient ID, and hash on the blockchain in seconds",
        "B": "The employer calls the university registrar by telephone",
        "C": "The employer mails the paper diploma to the government",
        "D": "Verification is impossible without physical paper seals"
      },
      "correctOption": "A",
      "explanation": "Blockchain verification operates cryptographically: the verifier checks that the certificate hash matches the immutable blockchain transaction, confirms the issuer's public digital signature, and validates that the revocation index is clean."
    },
    {
      "id": "AGR220-U3-MCQ30",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Medium",
      "questionText": "What are 'Stackable Credentials' in modern modular university education?",
      "options": {
        "A": "A sequence of micro-credentials and short certificates that can be accumulated ('stacked') over time to count toward an advanced diploma or Master's degree",
        "B": "Stax of paper diplomas piled on an office desk",
        "C": "Earning ten identical degrees in the same subject",
        "D": "Credentials that can only be earned in winter months"
      },
      "correctOption": "A",
      "explanation": "Stackable credentials provide flexible learning pathways, allowing professionals to accumulate verified micro-credentials (e.g., in Soil Health, GIS, Agro-meteorology) that aggregate toward a formal postgraduate qualification."
    },
    {
      "id": "AGR220-U3-MCQ31",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "difficulty": "Medium",
      "questionText": "What mathematical coefficient is commonly calculated to evaluate 'Inter-Rater Reliability' among multiple peer reviewers grading the same agricultural report?",
      "options": {
        "A": "Cohen's Kappa (kappa) or Intraclass Correlation Coefficient (ICC)",
        "B": "Newton's gravitational constant",
        "C": "pH buffer coefficient",
        "D": "Crop transpiration ratio"
      },
      "correctOption": "A",
      "explanation": "Cohen's Kappa and ICC measure statistical agreement among independent raters scoring categorical or continuous variables, correcting for agreement occurring by pure chance."
    },
    {
      "id": "AGR220-U3-MCQ32",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Medium",
      "questionText": "What is the strategic value of obtaining 'Skill Endorsements' and 'Recommendations' on a student's LinkedIn profile?",
      "options": {
        "A": "Provides social proof and third-party validation of technical skills (e.g., Soil Testing, Experimental Design, GIS) from professors, internship supervisors, and peers",
        "B": "Increases computer internet speed",
        "C": "Automatically exempts the student from taking final university exams",
        "D": "Allows the student to post unlimited advertisements"
      },
      "correctOption": "A",
      "explanation": "Endorsements and written recommendations provide credible third-party verification of demonstrated technical competencies, boosting profile visibility in recruiter searches."
    },
    {
      "id": "AGR220-U3-MCQ33",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Medium",
      "questionText": "What is an 'Analytical Rubric' versus a 'Holistic Rubric'?",
      "options": {
        "A": "An analytical rubric evaluates work across multiple independent criteria simultaneously with separate scores for each, whereas a holistic rubric assigns a single overall grade based on an integrated impression",
        "B": "Analytical rubrics are only for mathematics while holistic rubrics are for sports",
        "C": "Analytical rubrics are written in French; holistic in German",
        "D": "There is no difference between the two rubrics"
      },
      "correctOption": "A",
      "explanation": "Analytical rubrics score discrete components individually (e.g., Methodology 20%, Literature Review 20%, Statistical Analysis 40%, Presentation 20%), providing targeted diagnostic feedback; holistic rubrics assign a single global score."
    },
    {
      "id": "AGR220-U3-MCQ34",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Medium",
      "questionText": "What is 'Room Scan' protocol in remote high-stakes online examinations?",
      "options": {
        "A": "Requiring the candidate to pan their webcam 360 degrees around their testing room to prove the workspace is free of unauthorized people, books, notes, or secondary electronic screens",
        "B": "Measuring the air temperature of the room",
        "C": "Painting the room white before testing",
        "D": "Scanning the room using radar technology"
      },
      "correctOption": "A",
      "explanation": "A 360-degree room scan verified by the proctor ensures the physical testing environment meets security guidelines: clean desk, no secondary devices, no hidden headphones, and no other persons present."
    },
    {
      "id": "AGR220-U3-MCQ35",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Medium",
      "questionText": "What are the three core JSON-LD objects that make up the Open Badges specification?",
      "options": {
        "A": "BadgeClass (the achievement), Issuer (the certifying body), and Assertion (the specific instance awarded to an individual)",
        "B": "Header, Body, and Footer",
        "C": "Student, Teacher, and Principal",
        "D": "Input, Process, and Output"
      },
      "correctOption": "A",
      "explanation": "The Open Badges data model defines: (1) Issuer Profile (organization granting badge); (2) BadgeClass (description, criteria, image); (3) Assertion (metadata connecting an individual earner to the BadgeClass with issue date and cryptographic signature)."
    },
    {
      "id": "AGR220-U3-MCQ36",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Medium",
      "questionText": "What is a 'Decentralized Identifier' (DID) in digital identity and verifiable credentials?",
      "options": {
        "A": "A globally unique identifier that enables verifiable, decentralized digital identity without relying on a centralized identity provider or university registrar",
        "B": "A secret password stolen by hackers",
        "C": "An IP address assigned to a smartphone",
        "D": "A bar code printed on physical seed bags"
      },
      "correctOption": "A",
      "explanation": "A DID is a W3C standardized URI that associates an entity (student, university) with a cryptographic document, enabling self-sovereign identity and decentralized verification without central authority lock-in."
    },
    {
      "id": "AGR220-U3-MCQ37",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "difficulty": "Medium",
      "questionText": "What is the pedagogical purpose of 'Reflective Writing' in student agricultural e-portfolios?",
      "options": {
        "A": "Articulating what was learned, analyzing challenges encountered during field trials, evaluating personal growth, and connecting classroom theory to field practice",
        "B": "Writing a fictional novel about farm animals",
        "C": "Copying text verbatim from a textbook",
        "D": "Listing the prices of all chemical pesticides"
      },
      "correctOption": "A",
      "explanation": "Reflective writing transforms static project documentation into deep experiential learning, prompting students to evaluate what worked, why experiments failed, and how they will adapt agronomic practices in the future."
    },
    {
      "id": "AGR220-U3-MCQ38",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Medium",
      "questionText": "How should an agricultural student optimize the 'Featured' section of their LinkedIn profile?",
      "options": {
        "A": "Pinning high-impact visual evidence of achievement: published research papers, NPTEL certificates, links to their digital portfolio, or photographs of field research trials",
        "B": "Leaving it blank to maintain modesty",
        "C": "Posting vacation photographs from the beach",
        "D": "Listing complaints about university professors"
      },
      "correctOption": "A",
      "explanation": "The Featured section acts as an executive showcase atop the profile, immediately highlighting verifiable artifacts (certificates, presentations, publications, field trials) to visiting recruiters."
    },
    {
      "id": "AGR220-U3-MCQ39",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Medium",
      "questionText": "What is 'Distractor Analysis' in improving multiple-choice questions for online agricultural assessments?",
      "options": {
        "A": "Evaluating whether incorrect options (distractors) are plausible and effectively selected by lower-performing students while avoided by high-performing students",
        "B": "Playing loud music during the exam to distract students",
        "C": "Counting how many times students cough during an exam",
        "D": "Turning off lights in the examination room"
      },
      "correctOption": "A",
      "explanation": "Distractor analysis examines frequency of selection for incorrect options. Non-functioning distractors (selected by <5% of students) must be revised to make them plausible yet unambiguously incorrect."
    },
    {
      "id": "AGR220-U3-MCQ40",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Medium",
      "questionText": "What is 'Acoustic Anomaly Detection' in AI exam proctoring software?",
      "options": {
        "A": "Algorithmic audio analysis detecting human whispers, background voices, telephone rings, or paper shuffling that may indicate external assistance",
        "B": "Playing soothing music to calm the student",
        "C": "Measuring the volume of the student's heartbeat",
        "D": "Recording the sound of rainfall on the roof"
      },
      "correctOption": "A",
      "explanation": "Acoustic monitoring processes the microphone feed to detect speech patterns and sudden decibel shifts, creating automated audio event timestamps for human proctor review."
    },
    {
      "id": "AGR220-U3-MCQ41",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Medium",
      "questionText": "What is the 'National Skills Qualifications Framework' (NSQF) in India and how does it relate to online micro-credentials?",
      "options": {
        "A": "A nationally integrated competency-based framework that organizes qualifications across 10 levels based on learning outcomes, enabling modular stacking and credit transfer",
        "B": "A sports qualification framework for Olympic athletes",
        "C": "A military ranking system for the Indian Army",
        "D": "A database for tracking rainfall in Maharashtra"
      },
      "correctOption": "A",
      "explanation": "NSQF organizes qualifications across levels (1 to 10) based on knowledge, skills, and aptitudes, allowing online micro-credentials to be mapped to formal academic and industrial standards."
    },
    {
      "id": "AGR220-U3-MCQ42",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Medium",
      "questionText": "What role does a 'Smart Contract' play in automated blockchain educational credential issuance?",
      "options": {
        "A": "A self-executing computerized protocol stored on the blockchain that automatically issues a verified certificate when predefined academic criteria (e.g., >=75% exam score) are verified by the LMS",
        "B": "A legal contract written by an expensive lawyer",
        "C": "A smartphone app that rents agricultural machinery",
        "D": "An employment agreement signed in ink"
      },
      "correctOption": "A",
      "explanation": "Smart contracts execute programmable code on a blockchain: once the LMS registers verified course completion, the smart contract triggers automated certificate hashing and delivery without human administrative delay."
    },
    {
      "id": "AGR220-U3-MCQ43",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "difficulty": "Medium",
      "questionText": "Why is peer assessment especially valuable for student learning beyond simply solving grading scalability in massive MOOC cohorts?",
      "options": {
        "A": "Evaluating peer work forces students to adopt an evaluative mindset, deeply internalizing assessment rubrics, recognizing alternative scientific perspectives, and refining their own critical reasoning",
        "B": "It allows professors to go on permanent vacation",
        "C": "It eliminates the need for textbooks",
        "D": "It guarantees that every student receives an A grade"
      },
      "correctOption": "A",
      "explanation": "Engaging in peer review provides cognitive benefits: learners internalize standards of excellence by reviewing diverse solutions, stimulating metacognitive reflection on their own work."
    },
    {
      "id": "AGR220-U3-MCQ44",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Medium",
      "questionText": "What is the 'Social Selling Index' (SSI) on LinkedIn, and what four pillars does it measure?",
      "options": {
        "A": "A score measuring professional branding across four pillars: establishing professional brand, finding right people, engaging with insights, and building relationships",
        "B": "The number of items sold on eBay",
        "C": "A student's physical strength score",
        "D": "The number of friends on Facebook"
      },
      "correctOption": "A",
      "explanation": "LinkedIn's SSI metric evaluates professional networking performance across four dimensions: personal branding, network search, content engagement, and relationship building."
    },
    {
      "id": "AGR220-U3-MCQ45",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "difficulty": "Medium",
      "questionText": "What free, user-friendly digital tools can an agricultural student use to build and publish a professional e-portfolio website without coding experience?",
      "options": {
        "A": "Google Sites, Canva Websites, Notion public pages, and WordPress.com",
        "B": "Microsoft Excel",
        "C": "Adobe Photoshop",
        "D": "Calculator"
      },
      "correctOption": "A",
      "explanation": "Google Sites, Notion, Canva, and WordPress provide drag-and-drop website builders enabling students to publish multimedia e-portfolios containing video links, PDFs, and data visualizers without programming."
    },
    {
      "id": "AGR220-U3-MCQ46",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Hard",
      "questionText": "In psychometric test evaluation using Classical Test Theory (CTT), if an online multiple-choice question has a Difficulty Index of p = 0.95 and a Discrimination Index of DI = 0.05, how should the question bank curator handle it?",
      "options": {
        "A": "Discard or heavily revise the question because it is too easy (95% answered correctly) and fails to discriminate between high and low achievers (DI < 0.20)",
        "B": "Retain the question unchanged as an ideal test item",
        "C": "Award double marks for the question",
        "D": "Make the font size larger"
      },
      "correctOption": "A",
      "explanation": "A p-value of 0.95 indicates the question is trivial (almost everyone answered correctly), and DI = 0.05 indicates near-zero discriminatory power. Ideal exam items have moderate difficulty (p = 0.40 to 0.70) and high discrimination (DI >= 0.30)."
    },
    {
      "id": "AGR220-U3-MCQ47",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Hard",
      "questionText": "What is a 'Merkle Tree' (Hash Tree) and how does it allow a university to issue thousands of student degree certificates in a single, cost-effective blockchain transaction?",
      "options": {
        "A": "A hierarchical data structure where every leaf node is the cryptographic hash of an individual certificate, and pairs of nodes are recursively hashed upward to produce a single 'Merkle Root' anchored on the blockchain",
        "B": "A biological apple tree used in grafting experiments",
        "C": "A digital file that stores plant DNA sequences",
        "D": "A database of tractor sales records"
      },
      "correctOption": "A",
      "explanation": "A Merkle Tree hashes thousands of individual student records into pairs, generating a single cryptographic Merkle Root. Anchoring just this one root on the blockchain verifies the integrity of every individual certificate in the batch with minimal transaction fees."
    },
    {
      "id": "AGR220-U3-MCQ48",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Hard",
      "questionText": "What is the technical vulnerability known as 'Virtual Machine / HDMI Splitter Bypass' in remote proctored testing, and how do modern security clients counter it?",
      "options": {
        "A": "Running the exam inside a virtual machine (VM) or using an external hardware HDMI splitter to duplicate video to an unauthorized assistant; countered by hypervisor detection algorithms and continuous webcam room sweeps",
        "B": "Turning off the monitor during an exam",
        "C": "Unplugging the keyboard",
        "D": "Closing the laptop lid"
      },
      "correctOption": "A",
      "explanation": "Sophisticated cheating uses virtualization (running exam inside a VM while browsing host OS) or hardware splitters sending video to a secondary screen. Security software detects VM hypervisors, blocks secondary displays, and requires external smartphone webcam monitoring."
    },
    {
      "id": "AGR220-U3-MCQ49",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Hard",
      "questionText": "In the Open Badges 2.0 / 3.0 specification, what is a 'Cryptographic Verification Assertion' using public-key cryptography?",
      "options": {
        "A": "The badge assertion is digitally signed by the issuer using their private cryptographic key, allowing any recipient to verify authenticity against the issuer's publicly hosted public key without contacting an intermediary",
        "B": "A password typed into a website",
        "C": "An embossed physical wax seal on paper",
        "D": "A fingerprint scanned on an ink pad"
      },
      "correctOption": "A",
      "explanation": "Signed badges utilize asymmetric public-key cryptography: the issuing university signs the badge metadata assertion with its private key; any third party verifies the signature using the university's published public key (hosted at a verified HTTPS domain)."
    },
    {
      "id": "AGR220-U3-MCQ50",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "difficulty": "Hard",
      "questionText": "In a MOOC peer-grading system using calibrated rubrics, how is a student's final assignment score mathematically weighted between their own peer-assigned score and their grading accuracy?",
      "options": {
        "A": "A composite score weighting: (a) average score awarded by certified peers, and (b) Reviewer Competency Index (RCI) evaluating how closely the student's grading matched benchmark standards",
        "B": "Adding the student's age to their quiz score",
        "C": "Taking the average of the student's shoe size and grade",
        "D": "Using pure random lottery selection"
      },
      "correctOption": "A",
      "explanation": "CPR systems compute a composite grade: peer scores are weighted by each rater's competency score, and students earn separate performance credit for how accurately they graded calibration and peer papers."
    },
    {
      "id": "AGR220-U3-MCQ51",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Hard",
      "questionText": "What is the 'Semantic Web' (Linked Open Data) role of an ORCID iD in automated academic discovery?",
      "options": {
        "A": "It provides machine-readable RDF/JSON-LD metadata linking researchers seamlessly across CrossRef, Scopus, Web of Science, PubMed, and funding agencies without human data entry",
        "B": "It translates articles into foreign languages automatically",
        "C": "It searches for used farm equipment",
        "D": "It calculates agricultural weather forecasts"
      },
      "correctOption": "A",
      "explanation": "ORCID provides persistent, machine-resolvable URI identifiers. When a researcher publishes a paper, CrossRef and publishers automatically push the citation to the author's ORCID profile via API integrations."
    },
    {
      "id": "AGR220-U3-MCQ52",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Hard",
      "questionText": "What does Item Response Theory (IRT) model that Classical Test Theory (CTT) fails to capture in large-scale online assessments?",
      "options": {
        "A": "The mathematical relationship between a learner's underlying latent ability (theta) and the probability of correctly answering a specific item, accounting for item discrimination, difficulty, and guessing parameters",
        "B": "The weight of the student in kilograms",
        "C": "The temperature of the examination hall",
        "D": "The number of pages in the test booklet"
      },
      "correctOption": "A",
      "explanation": "IRT (Item Response Theory) models the probability of a correct response as a non-linear logistic function of student ability (\u03b8) and specific item parameters (difficulty b, discrimination a, pseudo-guessing c), enabling adaptive testing."
    },
    {
      "id": "AGR220-U3-MCQ53",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Hard",
      "questionText": "How does 'Self-Sovereign Identity' (SSI) empower students regarding their academic credentials?",
      "options": {
        "A": "Students store and control their own verified credentials in a private digital identity wallet on their mobile device, sharing them selectively with employers without requiring university permission or intermediation",
        "B": "Students can award themselves doctoral degrees without studying",
        "C": "Students can change their birth certificate legally",
        "D": "Students become sovereign kings of their own nation"
      },
      "correctOption": "A",
      "explanation": "Self-Sovereign Identity (SSI) shifts identity control from centralized platforms to the individual. Students hold cryptographically signed verifiable credentials in digital wallets, choosing what to disclose without university intermediaries."
    },
    {
      "id": "AGR220-U3-MCQ54",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "difficulty": "Hard",
      "questionText": "What is the technical role of 'Keystroke Dynamics' in continuous biometric behavioral verification during online exams?",
      "options": {
        "A": "Analyzing unique typing rhythms, dwell times (key hold duration), and flight times (interval between keys) to verify the registered candidate is continuously typing and hasn't swapped seats",
        "B": "Measuring how hard the student hits the keyboard",
        "C": "Counting the total number of words typed per minute",
        "D": "Checking the spelling of English words"
      },
      "correctOption": "A",
      "explanation": "Keystroke dynamics measures behavioral biometric typing cadences (dwell and flight intervals). Because typing rhythms are unique, significant deviations indicate unauthorized ghostwriters or exam seat-swapping."
    },
    {
      "id": "AGR220-U3-MCQ55",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "difficulty": "Hard",
      "questionText": "Why is integrating interactive Jupyter Notebooks or R-Markdown reports into an agricultural e-portfolio considered superior to static PDF summaries for data-driven agronomic roles?",
      "options": {
        "A": "It provides full computational reproducibility, allowing recruiters to inspect live code, statistical ANOVA models, data cleaning pipelines, and interactive Plotly visualization charts directly",
        "B": "Jupyter notebooks use less battery power",
        "C": "PDFs cannot be viewed on mobile phones",
        "D": "Static summaries are illegal under national copyright law"
      },
      "correctOption": "A",
      "explanation": "Computational notebooks embody open science and reproducibility: prospective agribusiness employers can inspect actual data manipulation, statistical models, and dynamic charts, verifying authentic quantitative competence."
    },
    {
      "id": "AGR220-U3-MCQ56",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "difficulty": "Hard",
      "questionText": "What is the 'European Qualifications Framework' (EQF) and how does it facilitate international recognition of micro-credentials?",
      "options": {
        "A": "An eight-level learning outcomes translation grid that maps qualifications across European and international partner nations to ensure mutual credential transparency and mobility",
        "B": "A currency exchange system in Europe",
        "C": "A trade tariff agreement on grain exports",
        "D": "A European tractor safety regulation"
      },
      "correctOption": "A",
      "explanation": "The EQF establishes an 8-level common reference framework based on learning outcomes (knowledge, skills, autonomy), allowing international universities and employers to compare and transfer credentials across borders."
    },
    {
      "id": "AGR220-U3-MCQ57",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "difficulty": "Hard",
      "questionText": "How does the LinkedIn search algorithm rank candidate profiles when agribusiness recruiters search for specialized terms like 'Precision Agriculture Specialist'?",
      "options": {
        "A": "Keyword density in Headline and About sections, completeness of profile (All-Star status), relevance of endorsed skills, connection proximity (1st/2nd degree), and user activity frequency",
        "B": "The alphabetical order of the candidate's last name",
        "C": "The candidate's high school graduation year",
        "D": "The physical proximity of the candidate's house to the recruiter's home"
      },
      "correctOption": "A",
      "explanation": "LinkedIn's Recruiter search algorithm weights keyword optimization in key fields (Headline, About, Experience), 100% profile completeness (All-Star rating), verified skill endorsements, network degree proximity, and active engagement."
    },
    {
      "id": "AGR220-U3-MCQ58",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "difficulty": "Hard",
      "questionText": "In automated online programming assessments (e.g., Python for Agriculture), how does a 'Sandboxed Autograder' evaluate student code submissions securely?",
      "options": {
        "A": "Executes code within an isolated, resource-constrained container (Docker) against hidden unit tests, validating edge cases, memory limits, and execution speed without compromising host server security",
        "B": "Reads the code using OCR scanners",
        "C": "Asks a human programmer to review every line",
        "D": "Deletes the code if it contains errors"
      },
      "correctOption": "A",
      "explanation": "Autograders execute student scripts inside isolated Docker containers with restricted system calls and memory caps, executing automated test suites against hidden inputs to score functional correctness securely."
    },
    {
      "id": "AGR220-U3-MCQ59",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "difficulty": "Hard",
      "questionText": "What is the difference between an 'On-Chain' and an 'Off-Chain' record in blockchain credential verification architectures?",
      "options": {
        "A": "The sensitive personal identifying data and full transcript reside off-chain (in student wallets or encrypted cloud storage), while only the anonymous cryptographic hash and revocation status are stored on-chain",
        "B": "On-chain is for bicycles; off-chain is for tractors",
        "C": "On-chain is completely free; off-chain costs $1 million",
        "D": "There is no difference"
      },
      "correctOption": "A",
      "explanation": "To comply with data privacy laws (GDPR, DPDP Act) and minimize gas fees, private personal data (student name, grades, thesis) is stored off-chain; only the cryptographic hash is anchored on-chain."
    },
    {
      "id": "AGR220-U3-MCQ60",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "difficulty": "Hard",
      "questionText": "What is the 'Halo Effect' in student grading, and how does anonymous double-blind peer assessment neutralize it?",
      "options": {
        "A": "A cognitive bias where an evaluator's positive general impression of a student's prior reputation inflates their score; neutralized by stripping student names and demographics from submissions",
        "B": "A ring of light appearing around a computer monitor",
        "C": "A halo of fungal spores around a plant root",
        "D": "An award given to top-scoring students"
      },
      "correctOption": "A",
      "explanation": "The Halo Effect causes evaluators to award higher grades to students perceived as 'top performers' regardless of actual submission quality. Double-blind anonymization forces evaluators to judge work strictly on objective rubric criteria."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "AGR220-U3-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "questionText": "Differentiate between Formative Assessment and Summative Assessment in online agricultural education, providing two concrete examples of each in a MOOC course.",
      "contextScenario": "An online course instructor is designing the evaluation strategy for a new SWAYAM course on 'Integrated Pest Management'.",
      "modelAnswer": "Educational evaluation is divided into Formative Assessment (assessment FOR learning) and Summative Assessment (assessment OF learning), each serving distinct pedagogical functions.\n\n1. Formative Assessment:\n- Purpose: Conducted dynamically during the learning process to diagnose misconceptions, provide immediate low-stakes feedback, and guide student self-correction without grade penalty anxiety.\n- Nature: Low-stakes or un-graded; frequent; developmental and exploratory.\n- Examples in an Agricultural MOOC:\n  * In-Video Pop-up Concept Checks: A 2-question interactive quiz that pauses an online lecture on weed biology after 5 minutes, asking the student to classify a depicted weed as broadleaf or sedge before the video resumes.\n  * Weekly Practice Problem Sets: An automated practice set where students calculate spray tank herbicide concentrations, providing step-by-step explanatory feedback when an incorrect answer is selected.\n\n2. Summative Assessment:\n- Purpose: Conducted at the culmination of an instructional module or semester to measure cumulative learning achievement against established institutional benchmarks.\n- Nature: High-stakes; formal letter grading; used for certification and credit transfer.\n- Examples in an Agricultural MOOC:\n  * Final Nationwide Proctored Examination: A 3-hour computer-based test conducted at certified testing centers by the National Testing Agency (NTA), evaluating comprehensive IPM knowledge under strict invigilation.\n  * Capstone Field Management Project: Submission of an end-of-course comprehensive farm management plan integrating biological, chemical, and cultural weed control tactics, evaluated against an analytical rubric.\n\nSummary:\nFormative assessment acts as a diagnostic thermometer guiding instruction, whereas summative assessment serves as the final certificate of academic competence.",
      "outlinePoints": [
        "Conceptual definition of Formative Assessment (Assessment FOR learning)",
        "Characteristics and two concrete agricultural MOOC examples (in-video checks, practice sets)",
        "Conceptual definition of Summative Assessment (Assessment OF learning)",
        "Characteristics and two concrete agricultural MOOC examples (proctored final exam, capstone project)",
        "Pedagogical synthesis of both evaluation modes"
      ]
    },
    {
      "id": "AGR220-U3-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "questionText": "Compare Automated AI Proctoring and Live Human Remote Proctoring with respect to surveillance technology, scalability, cost, false-positive rates, and privacy considerations.",
      "contextScenario": "A university academic council is debating whether to contract an AI proctoring vendor or human remote proctors for semester-end distance examinations.",
      "modelAnswer": "The expansion of remote online certification has driven the development of two primary examination surveillance models: Automated AI Proctoring and Live Human Remote Proctoring.\n\n1. Surveillance Technology and Monitoring Mechanism:\n- Automated AI Proctoring: Relies completely on machine learning algorithms. Employs computer vision to track facial landmarks, gaze direction, and presence of secondary persons; audio processing to detect speech anomalies; and lockdown browser hooks to detect background software processes. Algorithms generate automated timestamps flagging 'suspicious incidents'.\n- Live Human Remote Proctoring: Utilizes trained human proctors monitoring live webcam, audio, and screen feeds over WebRTC video streams. A single proctor typically monitors a grid of 6 to 16 students simultaneously, intervening verbally or via text chat when irregularities occur.\n\n2. Scalability and Operational Cost:\n- Automated AI Proctoring: Exceptionally high scalability. A cloud server architecture can proctor 100,000 examinees simultaneously with zero additional labor costs. Highly cost-effective (~$2 to $5 per test session).\n- Live Human Remote Proctoring: Limited scalability. Constrained by human labor ratios (1 proctor per 10-15 candidates). Scheduling large national cohorts requires vast proctoring workforces, elevating costs ($15 to $35 per exam).\n\n3. False-Positive Incident Flagging Rates:\n- Automated AI Proctoring: High false-positive rate. Algorithms frequently misinterpret benign actions as cheating: looking down to write calculations on scratch paper is flagged as 'gaze aversion'; an examinee reading questions aloud is flagged as 'verbal communication'; poor room lighting triggers 'face missing' errors.\n- Live Human Remote Proctoring: Low false-positive rate. Human proctors exercise common sense, recognizing when a student is merely thinking, stretching, or calculating on scratch paper.\n\n4. Privacy, Bias, and Student Anxiety:\n- Automated AI Proctoring: Elevated privacy and bias concerns. Facial recognition models historically display algorithmic bias (higher error rates on dark-skinned candidates). Continuous automated biometric tracking induces severe test anxiety.\n- Live Human Remote Proctoring: Better perceived fairness, though students still express discomfort with strangers observing private bedroom spaces.\n\nInstitutional Recommendation:\nA hybrid approach is optimal: deploy AI algorithms for initial baseline screen lockdown and incident flagging, with all flagged incidents audited and verified by human proctors before initiating academic misconduct proceedings.",
      "outlinePoints": [
        "Surveillance technology: Algorithmic computer vision vs Human invigilator video monitoring",
        "Scalability and cost: Mass cloud scalability ($2-5) vs Labor-constrained scheduling ($15-35)",
        "False-positive rates: Algorithmic misinterpretation vs Human situational judgment",
        "Privacy, algorithmic bias, and test anxiety considerations",
        "Optimal hybrid institutional compromise"
      ]
    },
    {
      "id": "AGR220-U3-SUB03",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Calibrated Peer Review (CPR) and double-blind peer assessment in MOOC environments",
      "questionText": "Explain the operational mechanics of Calibrated Peer Review (CPR) in a massive online agricultural course. Detail the three stages: Text Submission, Calibration Training, and Peer Evaluation.",
      "contextScenario": "An instructor in an online Agronomy course with 5,000 enrolled students needs to implement a peer-review assignment on 'Designing a Sodic Land Reclamation Strategy'.",
      "modelAnswer": "Calibrated Peer Review (CPR) is an instructional web-based scaffolding tool developed by UCLA that enables rigorous writing and evaluation in massive student cohorts where direct faculty grading of thousands of essays is logistically impossible.\n\n1. Stage 1: Text Submission:\n- Prompt Release: The instructor posts a detailed prompt, background literature, and explicit criteria (e.g., 'Draft a 500-word reclamation plan for an alkali soil with pH 9.2, ESP 32%, incorporating gypsum and Sesbania green manure').\n- Writing and Submission: Students compose their essays directly in the online portal. Once the submission deadline passes, all texts are anonymized, and no further edits are permitted.\n\n2. Stage 2: Calibration Training (Training the Reviewer):\nBefore students are permitted to grade real peer papers, they must prove their grading competency against instructor benchmarks:\n- Benchmark Calibration Essays: The instructor has pre-authored three calibration essays of known quality: (1) High-quality exemplary essay, (2) Medium-quality essay with technical flaws, (3) Poor-quality essay with gross scientific errors.\n- Blind Grading: The student reads and grades all three benchmark essays using the multidimensional rubric, answering detailed evaluative questions (e.g., 'Did the author correctly calculate gypsum requirement based on ESP?').\n- Competency Scoring (Reviewer Competency Index - RCI): The system compares the student's ratings against the instructor's key. If the student grades accurately, they earn a high RCI score and are certified to grade peers. If they deviate significantly, the system provides feedback and requires recalibration.\n\n3. Stage 3: Peer Evaluation and Self-Assessment:\n- Double-Blind Peer Review: The student is assigned three anonymous peer essays at random. They evaluate each submission using the rubric and provide constructive qualitative feedback.\n- Self-Assessment: Finally, the student reads their own anonymous submission and evaluates it against the rubric.\n- Final Score Calculation: The software calculates each student's final grade by weighting peer evaluations according to each reviewer's certified RCI score, while rewarding the student for accurate calibration and insightful feedback.\n\nEducational Benefit:\nCPR solves grading scalability while training students in critical analytical evaluation, error detection, and scientific peer review.",
      "outlinePoints": [
        "Theoretical purpose of Calibrated Peer Review (CPR) in massive cohorts",
        "Stage 1: Text Submission (anonymized writing based on standardized prompt)",
        "Stage 2: Calibration Training (grading 3 benchmark essays to establish Reviewer Competency Index)",
        "Stage 3: Double-blind Peer Evaluation and Self-Assessment",
        "Algorithmic score calculation weighted by reviewer competence"
      ]
    },
    {
      "id": "AGR220-U3-SUB04",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "questionText": "Discuss the application of Blockchain technology in educational credentialing. Explain the Blockcerts standard, the role of cryptographic hashing (SHA-256), public-key cryptography, and how decentralized verification eliminates credential fraud in agribusiness hiring.",
      "contextScenario": "An agribusiness multinational corporation is verifying hundreds of degree credentials and online micro-certificates from international job applicants.",
      "modelAnswer": "Academic credential fraud\u2014including counterfeit paper diplomas, fake accreditation mills, and manipulated grade transcripts\u2014is a major challenge in corporate agribusiness recruitment. Blockchain technology provides an immutable, decentralized verification ecosystem.\n\n1. Cryptographic Foundations:\n- Cryptographic Hashing (SHA-256):\n  A cryptographic hash function converts arbitrary digital certificate data into a unique, fixed-size 64-character hexadecimal string (hash). The algorithm is deterministic and collision-resistant: any minute modification to the student's name, degree class, or course credits alters the resulting hash completely, exposing tampering instantly.\n- Asymmetric Public-Key Cryptography:\n  The university possesses a cryptographic key pair: a private key kept strictly confidential, and a public key published at an official, verified web domain. When issuing a certificate, the university digitally signs the document's hash using its private key.\n\n2. The Blockcerts Open Standard Architecture:\nDeveloped by the MIT Media Lab and Learning Machine (now Hyland Credentials), Blockcerts establishes an open-source schema based on W3C Verifiable Credentials:\n- Merkle Tree Batching: To eliminate exorbitant blockchain transaction fees, the university hashes thousands of student certificates into a Merkle Tree structure. Only the single top-level 'Merkle Root' is anchored into a transaction on a public blockchain (e.g., Ethereum, Bitcoin, or Polygon).\n- Digital Identity Wallets: The student receives a digital certificate file containing the JSON-LD assertion, the cryptographic signature, and the Merkle proof path, stored in a mobile identity wallet app on their smartphone.\n\n3. Decentralized Verification Workflow for Agribusiness Recruiters:\nWhen a graduate applies to an agribusiness corporation:\n- Instant Verification: The candidate shares their digital certificate or verification link. The employer uploads it to an open-source web verifier (or scans a QR code).\n- Automated 4-Step Verification Protocol:\n  1. Hash Integrity: The verifier recalculates the SHA-256 hash of the certificate to confirm it has not been altered.\n  2. Merkle Path Validation: Validates that the hash belongs to the Merkle Root anchored in the blockchain transaction.\n  3. Issuer Signature: Verifies the cryptographic signature against the university's published public key to confirm authentic institutional origin.\n  4. Revocation Check: Queries the university's decentralized revocation list to verify the credential has not been withdrawn due to disciplinary action.\n\nOutcome:\nVerification occurs in under 5 seconds with zero fees, eliminating paper notarization and phone verifications while guaranteeing tamper-proof authenticity.",
      "outlinePoints": [
        "The crisis of academic credential fraud and counterfeit diplomas in hiring",
        "Cryptographic foundations: SHA-256 hashing and asymmetric public-key signatures",
        "Blockcerts standard architecture: JSON-LD schemas and Merkle Tree batch anchoring",
        "Four-step automated verification protocol (hash integrity, Merkle path, signature, revocation)",
        "Benefits for agribusiness recruitment: Instant, zero-cost, tamper-proof credential validation"
      ]
    },
    {
      "id": "AGR220-U3-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "questionText": "Explain the Open Badges standard. Describe the three core components of a digital badge assertion and how 'badge baking' embeds verification metadata.",
      "contextScenario": "An agricultural training institute wants to issue verifiable digital micro-credentials to farmers and students completing an organic fertilizer testing workshop.",
      "modelAnswer": "The Open Badges standard, originally launched by the Mozilla Foundation and now stewarded globally by 1EdTech Consortium, is an open technical specification for issuing, collecting, and displaying verifiable digital credentials.\n\n1. The Three Core JSON-LD Architectural Objects:\nAn Open Badge is composed of three interconnected data objects:\n- Issuer Profile:\n  Contains verified organizational metadata about the granting entity (e.g., 'Punjab Agricultural University', website URL, official contact email, cryptographic public key).\n- BadgeClass:\n  The general definition of the achievement. Outlines the credential name (e.g., 'Certified Soil Health Assessor'), description, detailed competencies certified, alignment with industry standards (e.g., NSQF Level 5), and link to the badge image graphic.\n- Assertion:\n  The unique individual instance awarded to a specific earner. Contains the recipient's hashed email address, issue timestamp, expiration date (if applicable), evidence URL (linking to student lab records or exam scores), and the issuer's cryptographic digital signature.\n\n2. The Concept of 'Badge Baking':\n- In traditional web graphics, an image file contains only display pixels. In the Open Badges standard, 'baking' refers to the process of embedding the complete JSON-LD assertion metadata directly into the auxiliary metadata chunks of a portable PNG or SVG image file.\n- Benefit: The badge image becomes a self-contained, tamper-proof credential. When a student downloads the PNG image or uploads it to LinkedIn, Mozilla Backpack, or a digital resume, any viewer can drop the image into a verification engine to read the embedded metadata and confirm validity.",
      "outlinePoints": [
        "Origins of the Open Badges standard (Mozilla Foundation / 1EdTech)",
        "Component 1: Issuer Profile (institution identity and public key)",
        "Component 2: BadgeClass (skill definition, criteria, standard alignments)",
        "Component 3: Assertion (individual earner record, issue date, evidence link)",
        "The 'Badge Baking' process: Embedding portable JSON metadata into PNG/SVG chunks"
      ]
    },
    {
      "id": "AGR220-U3-SUB06",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "questionText": "Formulate a step-by-step optimization strategy for an undergraduate agriculture student's LinkedIn profile to maximize recruitment visibility for corporate agribusiness internships.",
      "contextScenario": "A third-year B.Sc. (Hons.) Agriculture student wants to optimize their LinkedIn presence to secure an internship with a multinational seed or ag-biotech company.",
      "modelAnswer": "A professional LinkedIn profile serves as a dynamic, interactive resume and personal branding portal. Optimizing it requires strategic keyword placement, professional media, and demonstrable evidence of competence.\n\n1. Visual Identity and Header Optimization:\n- Profile Photo: High-resolution, professional headshot in business casual attire with neutral background and warm, direct eye contact.\n- Background Banner: Customized graphic representing agricultural science (e.g., modern greenhouse, field research plot, precision drone mapping) rather than default generic wallpaper.\n- Headline Optimization: Replace default student status with a keyword-rich value proposition:\n  * Poor: 'Student at LPU'\n  * Optimized: 'B.Sc. (Hons.) Agriculture Scholar | Agronomy & Precision Farming Specialist | Data Analytics in Crop Nutrition | Seeking Agribusiness Internships'\n\n2. Crafting a Compelling 'About' Summary (The 3-Paragraph Narrative):\n- Hook & Passion (Paragraph 1): Articulate dedication to sustainable agriculture and food security: 'Passionate agricultural scientist combining field agronomy with digital technology...'\n- Core Competencies & Academic Milestones (Paragraph 2): Highlight technical laboratory and field skills: 'Trained in GPS soil sampling, Walkley-Black organic carbon testing, fertilizer quality analysis under FCO, and R/Python statistical crop modeling...'\n- Call to Action & Career Goal (Paragraph 3): 'Seeking a challenging summer internship in agribusiness supply chains or precision crop management. Connect with me at [email].'\n\n3. Showcasing Tangible Evidence in the 'Featured' Section:\n- Pin high-impact media: NPTEL Elite+Gold certificates, links to your digital portfolio or GitHub data scripts, published review papers, and high-resolution photographs presenting research posters at agricultural seminars.\n\n4. Experience, Education, and Skills Alignment:\n- Experience: Detail field practicals, Rural Agricultural Work Experience (RAWE), and student club leadership using bullet points following the STAR format (Situation, Task, Action, Result).\n- Skills Section: Add 15-20 specialized industry keywords: 'Soil Fertility Analysis', 'Crop Protection', 'Precision Agronomy', 'Experimental Design', 'SPSS/R'. Secure endorsements from professors and peers.\n\n5. Strategic Engagement and Network Expansion:\n- Connect with alumni working in target agribusiness firms (Bayer, Syngenta, ITC, UPL, Godrej Agrovet) with personalized connection notes.\n- Publish weekly short posts summarizing key insights from MOOC lectures or field practicals, positioning yourself as an active, engaged emerging agricultural professional.",
      "outlinePoints": [
        "Visual identity: Professional headshot and agricultural thematic banner",
        "Keyword-rich headline formula combining specialization and career goals",
        "Three-paragraph narrative structure for the 'About' summary",
        "The 'Featured' section: Pinning certificates, research posters, and portfolios",
        "Experience structuring (STAR format) and skills section optimization",
        "Active engagement and networking with agribusiness alumni"
      ]
    },
    {
      "id": "AGR220-U3-SUB07",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "questionText": "Compare Multiple-Choice Questions (MCQs), Automated Code Evaluation, and Rubric-Graded Project Essays with respect to grading objectivity, cognitive depth (Bloom's taxonomy), development effort, and scalability.",
      "contextScenario": "A MOOC instructional design team is deciding which assessment modalities to deploy across introductory versus advanced agricultural technology units.",
      "modelAnswer": "Online assessment architectures employ diverse modalities balancing grading scalability against cognitive depth.\n\n1. Multiple-Choice Questions (Automated MCQs):\n- Grading Objectivity: 100% objective. Zero evaluator bias or subjective discrepancy.\n- Cognitive Depth (Bloom's Taxonomy): Primarily assesses lower-order cognitive tiers: Remember (recalling terms) and Understand (classifying facts). Well-crafted clinical vignettes can assess Apply, but MCQs struggle to evaluate Analyze, Evaluate, and Create.\n- Development Effort: High initial development effort (writing plausible distractors and psychometric validation), but zero recurring grading effort.\n- Scalability: Infinitely scalable. Can grade 100,000 students instantaneously.\n\n2. Automated Code Evaluation (Sandboxed Programming Tests):\n- Grading Objectivity: 100% objective functional verification. Tests student code (e.g., Python script calculating NDVI or ANOVA) against standardized test suites in isolated Docker containers.\n- Cognitive Depth: Reaches mid-to-high cognitive tiers: Apply (implementing algorithms) and Create (writing original code pipelines).\n- Development Effort: Very high development effort requiring programming of test cases, edge condition checks, and security sandboxing.\n- Scalability: Exceptionally high scalability; executes and scores in seconds.\n\n3. Rubric-Graded Project Essays (Complex Case Studies / Portfolios):\n- Grading Objectivity: Moderate to low objectivity. Subject to inter-rater subjectivity and evaluator bias, though analytical rubrics standardize criteria.\n- Cognitive Depth: Reaches highest cognitive tiers: Evaluate (critiquing agronomic strategies) and Create (designing comprehensive farm management architectures).\n- Development Effort: Low initial creation effort (drafting prompt and rubric), but very high recurring evaluation labor requiring human or peer review.\n- Scalability: Poor scalability unless paired with Calibrated Peer Review (CPR).\n\nCurricular Synthesis:\nDeploy automated MCQs for weekly formative checks of foundational terminology; use automated code runners for computational agro-informatics; and deploy rubric-graded projects with peer assessment for advanced capstone synthesis.",
      "outlinePoints": [
        "Overview of the three assessment modalities",
        "MCQs: 100% objective, lower Bloom tiers (remember/understand), infinite scalability",
        "Automated Code Grading: Objective functional testing, mid-high tiers (apply/create), high scalability",
        "Rubric Project Essays: Evaluator subjectivity, highest tiers (evaluate/create), labor-constrained scalability",
        "Strategic integration across agricultural MOOC curricula"
      ]
    },
    {
      "id": "AGR220-U3-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "questionText": "What is an E-portfolio? Outline four core sections an agricultural student should include on their personal portfolio website.",
      "contextScenario": "An undergraduate agriculture student is building a personal digital portfolio using Google Sites to prepare for job placements.",
      "modelAnswer": "An E-portfolio (electronic portfolio) is a purposeful, curated digital collection of authentic student work, academic artifacts, practical demonstrations, and reflective writing demonstrating professional growth, skills, and competencies over time.\n\nFour Core Sections for an Agricultural Student's E-Portfolio:\n\n1. Professional Biography & Statement of Intent (Home / About Page):\n- Professional headshot and concise elevator pitch highlighting degree, university, core agronomic passions, and long-term career vision (e.g., sustainable crop protection, precision agribusiness).\n- Downloadable updated PDF resume and active links to LinkedIn and GitHub profiles.\n\n2. Field Trials & Practical Research Projects:\n- Detailed photographic and narrative documentation of hands-on farm trials conducted during university courses or RAWE (Rural Agricultural Work Experience).\n- Structured using the STAR methodology (Situation, Task, Action, Result) with quantitative data (e.g., 'Evaluated bioherbicide efficacy against Parthenium, recording a 78% mortality rate across 4 replications').\n\n3. Laboratory Assays & Technical Certifications:\n- Documented competencies in standard soil, water, and fertilizer testing protocols (e.g., Walkley-Black organic carbon, Kjeldahl total N, flame photometer K).\n- Embedded digital verified certificates and Open Badges earned through SWAYAM, NPTEL, Coursera, or industry workshops.\n\n4. Data Analytics, Publications & Written Artifacts:\n- Demonstrations of digital tools: interactive maps created in QGIS, statistical ANOVA scripts in R or Python, and copies of published research papers, seminar presentations, or popular extension articles written for farmers.",
      "outlinePoints": [
        "Formal definition and purpose of an academic e-portfolio",
        "Section 1: Professional Biography, vision statement, and resume link",
        "Section 2: Field trials and RAWE farm projects documented via STAR framework",
        "Section 3: Laboratory technical competencies and verified online certifications",
        "Section 4: Data analytics scripts (GIS/R), publications, and extension writings"
      ]
    },
    {
      "id": "AGR220-U3-SUB09",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "questionText": "Analyze the technical architecture of an AI-proctored online examination system. Explain how Computer Vision, Audio Signal Processing, and Browser Hooks operate synergistically to uphold exam integrity.",
      "contextScenario": "An educational software developer is architecting a secure remote exam module for national online agricultural certifications.",
      "modelAnswer": "Modern automated AI proctoring systems integrate client-side operating system controls with cloud machine learning computer vision and acoustic models to maintain exam integrity.\n\n1. Browser & Operating System Hooks (Client-Side Containment):\n- Custom Sandbox Lockdown: Utilizing customized browser sandboxes (built on Chromium or Electron), the proctoring client interfaces with OS APIs to lock down the local environment:\n  * Disables clipboard copy-paste buffers.\n  * Blocks keyboard shortcuts (Alt+Tab, PrintScreen, Ctrl+C/V).\n  * Detects and terminates unauthorized background applications (communication tools like Zoom, Discord, WhatsApp; remote desktop software like TeamViewer, AnyDesk).\n  * Detects secondary external monitors and disables HDMI display mirroring.\n  * Scans for virtual machine hypervisors (VMware, VirtualBox) to prevent bypass attacks.\n\n2. Computer Vision & Facial Biometrics (Visual Surveillance Engine):\n- Facial Recognition & Continuous Authentication: At exam start, the system captures a photo ID and webcam snapshot, verifying identity. Throughout the session, deep neural networks (CNNs) continuously verify that the registered candidate remains the test taker.\n- Facial Landmark & Head-Pose Tracking: Detects 68 facial landmark coordinates to determine head yaw, pitch, and roll angles. If head orientation deviates from the screen by >30 degrees for >5 seconds, it flags 'Gaze Aversion'.\n- Object & Multi-Person Detection: YOLO/SSD object detection algorithms monitor the video stream, flagging unauthorized objects (smartphones, textbooks, secondary tablets) or the appearance of an additional face in the webcam frame.\n\n3. Audio Signal Processing (Acoustic Monitoring Engine):\n- WebRTC Audio Stream Capture: Continuously records the ambient microphone input stream.\n- Speech & Anomaly Detection: Audio processing algorithms differentiate normal typing/breathing from human speech. Detects spoken whispering, reading questions aloud, or background voices, generating automated incident timestamps for review.\n\n4. Post-Exam Automated Incident Audit Dashboard:\nRather than failing students algorithmically, the system compiles a chronological event log with video snapshots of flagged incidents. A certified human auditor reviews flagged clips before final academic certification is approved.",
      "outlinePoints": [
        "Architectural integration of client-side containment and cloud AI analytics",
        "Component 1: Browser hooks, process termination, multi-monitor and VM blocking",
        "Component 2: Computer Vision, facial recognition, head-pose tracking, object detection",
        "Component 3: Acoustic signal processing, speech recognition, and anomaly detection",
        "Component 4: Incident dashboard compilation and human review verification"
      ]
    },
    {
      "id": "AGR220-U3-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "questionText": "Discuss the paradigm shift from traditional degree diplomas to modular, stackable micro-credentials in modern agricultural careers. Analyze how industry partnerships, competency-based education, and the Academic Bank of Credits (ABC) shape this transition.",
      "contextScenario": "A national agricultural education summit is discussing curriculum modernization under India's National Education Policy (NEP 2020).",
      "modelAnswer": "Higher agricultural education is experiencing a structural paradigm shift: moving away from rigid, multi-year monolithic degree diplomas toward flexible, modular, stackable micro-credentials driven by rapid technological evolution.\n\n1. Limitations of Traditional Monolithic Degrees:\n- Slow Curricular Revision Cycles: Revising formal university curricula through statutory Boards of Studies and Academic Councils typically takes 3 to 5 years, leaving graduates lagging behind rapid innovations (e.g., agricultural drone robotics, carbon farming, CRISPR gene editing, AI disease diagnosis).\n- Time-Bound Inflexibility: Traditional degrees require 4 years of continuous full-time physical campus attendance, excluding working professionals, rural youth, and mid-career extension workers.\n\n2. The Modular Micro-Credential Paradigm:\n- Competency-Based Design: Micro-credentials focus on granular, verifiable learning outcomes. Instead of a broad semester course in 'Agricultural Engineering', a student earns targeted micro-credentials in 'Agricultural Drone Flight Operation & DGCA Compliance' or 'Multispectral Sensor NDVI Mapping'.\n- Stackable Learning Pathways: Micro-credentials are not dead ends; they can be accumulated ('stacked') over time. For example, earning three micro-credentials in Soil Health, GIS Modeling, and Precision Fertigation can stack together to fulfill requirements for a Postgraduate Diploma in Precision Agriculture.\n\n3. Role of Industry Partnerships and Co-Certification:\n- Elite Tech and Agribusiness Co-Design: Platforms like Coursera and edX partner with industry leaders (Google, IBM, Bayer) to co-author professional certificates. When a student earns an industry-backed micro-credential, corporate recruiters recognize that the graduate possesses verified, job-ready practical software and field skills.\n\n4. Institutional Recognition under NEP 2020 and the Academic Bank of Credits (ABC):\n- The National Education Policy (NEP 2020) institutionalized this shift by establishing the Academic Bank of Credits (ABC):\n  * Multiple Entry and Multiple Exit Pathways: Allows students to exit after 1 year with an Agricultural Certificate, 2 years with a Diploma, or 4 years with an Honors Degree, depositing digital credits into their personal ABC account.\n  * Cross-Institutional Credit Mobility: Students can enroll in accredited SWAYAM/NPTEL micro-credentials offered by premier institutions (IITs, IIMs, ICAR deemed universities), depositing earned credits directly into their degree transcripts.\n\nConclusion:\nMicro-credentials democratize specialized technical training, bridge the academia-industry skills gap, and foster lifelong continuous professional development in agriculture.",
      "outlinePoints": [
        "The crisis of curricular latency in traditional monolithic 4-year degree programs",
        "The modular micro-credential paradigm: Granular, competency-based, and stackable",
        "Industry co-design (Google, Bayer, IBM) and job-readiness alignment",
        "National Education Policy (NEP 2020) institutional integration via Academic Bank of Credits (ABC)",
        "Multiple entry/exit pathways and lifelong learning in modern agriculture"
      ]
    },
    {
      "id": "AGR220-U3-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "questionText": "Explain the concept of an ORCID iD. Describe how it functions across international scholarly publishers, funding bodies, and research repositories to ensure permanent author disambiguation.",
      "contextScenario": "A student co-authors their first research paper on weed management and the journal submission system requires an ORCID iD.",
      "modelAnswer": "An ORCID iD (Open Researcher and Contributor Identifier) is a unique, persistent, non-proprietary 16-digit digital identifier (URI format: https://orcid.org/0000-0002-1825-0097) provided by the non-profit ORCID organization to uniquely identify individual scholars across the global research ecosystem.\n\n1. The Problem of Author Ambiguity in Scientific Publishing:\nTraditional research indexing suffers from severe name confusion caused by:\n- Common Surnames: Thousands of researchers share identical names (e.g., 'R. Sharma' or 'J. Smith').\n- Cultural Name Transliterations: Changing surname orders, hyphenated names, and transliteration variations across languages.\n- Name Changes: Scholars changing surnames following marriage or personal transitions.\n- Institutional Affiliation Shifts: Authors changing universities and email addresses throughout their careers.\n\n2. How ORCID Functions Across the Scientific Ecosystem:\n- Universal Publisher Integration: Leading scholarly publishers (Elsevier, Springer Nature, Wiley, ICAR journals) mandate ORCID iDs during manuscript submission. When the paper is published, the publisher pushes the publication metadata directly to the author's ORCID record via CrossRef APIs.\n- Grant & Funding Tracking: Research funding agencies (DST, DBT, ICAR, USDA) require ORCID iDs on grant applications, tracking project deliverables automatically.\n- Institutional Repositories: Universities integrate ORCID with institutional repositories (DSpace, KrishiKosh), auto-updating faculty and student publication records without manual data entry.\n\nOutcome:\nAn ORCID iD guarantees that all of a researcher's publications, peer reviews, datasets, and patents are attributed accurately to their unique scientific identity throughout their entire career.",
      "outlinePoints": [
        "Formal definition of ORCID iD (16-digit persistent digital identifier)",
        "The problem of author ambiguity, common surnames, and transliteration shifts",
        "Automated integration across publishers (CrossRef APIs), funding agencies, and repositories",
        "Lifelong author attribution and scientific tracking benefits"
      ]
    },
    {
      "id": "AGR220-U3-SUB12",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "questionText": "Design a comprehensive analytical rubric for evaluating an undergraduate agricultural project report on 'Formulation and Evaluation of a Bioherbicide'. Define four explicit criteria and three achievement levels.",
      "contextScenario": "A university faculty member is developing a standardized grading rubric for an online assignment in an applied agricultural biocontrol course.",
      "modelAnswer": "An analytical rubric evaluates student work across multiple independent criteria, standardizing grading and providing clear diagnostic feedback.\n\nAnalytical Rubric: Evaluation of Bioherbicide Formulation Project (Total: 20 Marks)\n\n1. Criterion 1: Biological Rationale & Weed Target Analysis (Weight: 5 Marks)\n- Exemplary (5 Marks): Clear, scientifically rigorous rationale; thoroughly analyzes the target weed's biology, economic damage, and vulnerabilities; cites current peer-reviewed literature.\n- Competent (3-4 Marks): Sound biological rationale; describes target weed adequately with minor omissions in ecological or economic impact.\n- Developing (0-2 Marks): Vague or inaccurate biological rationale; superficial description of weed host; relies on non-academic sources.\n\n2. Criterion 2: Formulation Technology & Methodology (Weight: 5 Marks)\n- Exemplary (5 Marks): Details complete formulation recipe (active agent, carrier, emulsifier, humectants, UV-protectants); provides exact proportions; describes production methodology step-by-step.\n- Competent (3-4 Marks): Describes major formulation components and general procedure; minor omissions in specific adjuvant functions or proportions.\n- Developing (0-2 Marks): Incomplete formulation recipe; omits critical adjuvants; vague or unworkable production methodology.\n\n3. Criterion 3: Quality Control & Viability Testing Protocol (Weight: 5 Marks)\n- Exemplary (5 Marks): Designs rigorous protocols for spore count (hemocytometer), viability/germination percentage, desiccation tolerance, and shelf-life stability adhering to CIB&RC standards.\n- Competent (3-4 Marks): Outlines standard viability testing and shelf-life testing with minor procedural oversights.\n- Developing (0-2 Marks): Lacks standardized viability testing; omits shelf-life or quality parameters.\n\n4. Criterion 4: Technical Communication, Layout & Referencing (Weight: 5 Marks)\n- Exemplary (5 Marks): Flawless scientific formatting; professional figures and tables; completely consistent APA 7th referencing with zero plagiarism.\n- Competent (3-4 Marks): Well-organized report with minor formatting inconsistencies; mostly accurate APA citations.\n- Developing (0-2 Marks): Disorganized layout; numerous grammatical and typographical errors; missing or incorrectly formatted citations.",
      "outlinePoints": [
        "Structure of an analytical rubric: Multi-criteria evaluation matrix",
        "Criterion 1: Biological rationale and target weed analysis (5 marks)",
        "Criterion 2: Formulation technology and methodology (5 marks)",
        "Criterion 3: Quality control and viability testing protocol (5 marks)",
        "Criterion 4: Technical communication, layout, and APA referencing (5 marks)",
        "Three performance levels: Exemplary, Competent, Developing"
      ]
    },
    {
      "id": "AGR220-U3-SUB13",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "questionText": "Compare LinkedIn and ResearchGate with respect to primary audience, content sharing, professional purpose, and career networking utility for an agricultural science graduate.",
      "contextScenario": "A graduate student is deciding how to allocate their time between commercial networking on LinkedIn and scientific networking on ResearchGate.",
      "modelAnswer": "LinkedIn and ResearchGate represent complementary online networking platforms tailored to different spheres of an agricultural graduate's professional life.\n\n1. Target Audience and Community Demographics:\n- LinkedIn: Broad global professional network encompassing corporate agribusiness executives, marketing managers, HR recruiters, entrepreneurs, government officials, and university alumni.\n- ResearchGate: Specialized academic social network restricted to researchers, professors, doctoral scholars, and scientific research scientists across global universities and research institutes.\n\n2. Types of Content Shared:\n- LinkedIn: Professional achievements, career promotions, company news, industry trend commentaries, short video clips of field demonstrations, and event announcements. Content is presented in conversational, accessible business language.\n- ResearchGate: Full-text peer-reviewed research papers, conference presentations, pre-prints, supplementary experimental datasets, and technical questions regarding laboratory protocols (e.g., 'What is the best extractant for available boron in calcareous soil?'). Content is strictly technical and academic.\n\n3. Primary Professional Purpose:\n- LinkedIn: Commercial career advancement, corporate job hunting, personal branding, finding internships, and building business relationships across agribusiness sectors (seed companies, pesticide firms, AgriTech startups).\n- ResearchGate: Scientific collaboration, tracking international research literature, monitoring citation metrics (h-index, Research Interest Score), and discussing experimental methodologies with peer scientists.\n\n4. Recruitment and Headhunting Utility:\n- LinkedIn: Essential for corporate recruitment; agribusiness recruiters actively search LinkedIn candidate pools using boolean filters.\n- ResearchGate: Ideal for academic recruitment; university professors and international research institutes search ResearchGate to identify potential Ph.D. scholars and postdoctoral scientists based on publication records.\n\nStrategic Recommendation:\nMaintain active presence on both: utilize LinkedIn for corporate agribusiness visibility and professional networking, and utilize ResearchGate for academic credibility and scholarly collaboration.",
      "outlinePoints": [
        "Target audience: Corporate agribusiness industry vs Global scientific research community",
        "Content shared: Professional updates and industry trends vs Research papers, datasets, lab methods",
        "Primary purpose: Career advancement and business branding vs Academic collaboration and citation metrics",
        "Recruitment utility: Corporate industry hiring vs Academic postgraduate/postdoctoral recruitment",
        "Dual-presence strategy for agricultural science scholars"
      ]
    },
    {
      "id": "AGR220-U3-SUB14",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "questionText": "Explain the psychometric methodology of evaluating an online multiple-choice question bank. Define Difficulty Index (p), Discrimination Index (DI), and Distractor Efficiency (DE), and provide calculation formulas.",
      "contextScenario": "An online exam administrator is evaluating the statistical quality of a 100-question item bank used in a national agricultural certification.",
      "modelAnswer": "In professional online assessment, questions are not judged subjectively; their psychometric validity is evaluated statistically using Classical Test Theory (CTT) item analysis metrics.\n\n1. Difficulty Index (p-value / Facility Value):\n- Definition: The proportion of total examinees who answered the item correctly.\n- Formula:\n  p = (H + L) / N\n  Where:\n  * H = Number of correct responses in the upper performance group (top 27% of cohort).\n  * L = Number of correct responses in the lower performance group (bottom 27% of cohort).\n  * N = Total number of students in both upper and lower groups combined.\n- Interpretation:\n  * p > 0.80: Too easy (does not challenge students).\n  * p < 0.20: Too difficult (may be confusing or poorly taught).\n  * p between 0.40 and 0.70: Ideal difficulty for standard academic exams.\n\n2. Discrimination Index (DI / Item Discrimination):\n- Definition: The ability of an item to differentiate between high-performing and low-performing students.\n- Formula:\n  DI = (H - L) / (N / 2)\n  Where (N / 2) is the number of students in one performance group.\n- Interpretation:\n  * DI >= 0.40: Excellent discrimination.\n  * DI = 0.30 to 0.39: Good discrimination; item retained.\n  * DI = 0.20 to 0.29: Mediocre discrimination; requires minor revision.\n  * DI < 0.20: Poor discrimination; item discarded.\n  * Negative DI: Severely defective item (lower group answered correctly more often than upper group), indicating flawed question wording or wrong answer key.\n\n3. Distractor Efficiency (DE):\n- Definition: The effectiveness of incorrect options (distractors) in attracting students who do not know the correct answer.\n- Criteria for a Functioning Distractor: An incorrect option is functioning if it is selected by at least 5% of total examinees, with a higher proportion selected by the lower group.\n- Calculation: If an item has 3 distractors and all 3 are selected by >=5% of students, the item has 100% Distractor Efficiency. If only 1 distractor functions, DE is 33.3%, indicating the two unselected options must be revised to make them plausible.",
      "outlinePoints": [
        "Overview of Classical Test Theory (CTT) item analysis in online question banks",
        "Difficulty Index (p): Formula, calculation, and acceptable range (0.40 to 0.70)",
        "Discrimination Index (DI): Formula, interpretation tiers, and negative DI defects",
        "Distractor Efficiency (DE): Criteria for functioning distractors (>=5% selection)",
        "Psychometric optimization of academic question repositories"
      ]
    },
    {
      "id": "AGR220-U3-SUB15",
      "questionType": "CASE_STUDY",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Remote and AI-proctored examination technologies: Browser lockdowns and biometric surveillance",
      "questionText": "Case Study: During a high-stakes AI-proctored final online examination in Agricultural Statistics, a student living in a rural area experiences intermittent 4G mobile connectivity drops, camera lag, and is flagged 18 times for 'Gaze Aversion' while calculating complex ANOVA tables on physical scratch paper. The automated system issues an 'Integrity Violation Report'. Evaluate this outcome and outline a fair review and appeals process.",
      "contextScenario": "A university academic integrity panel is reviewing an automated cheating report issued by an AI proctoring vendor against a rural student.",
      "modelAnswer": "Diagnosis of Technical and Algorithmic Failure Modes:\nThe scenario illustrates the dangerous pitfalls of uncritical reliance on automated AI proctoring without human oversight, particularly in quantitative technical disciplines and rural connectivity environments:\n1. Disciplinary Mismatch (Quantitative Scratch Paper Work):\n   Agricultural statistics requires extensive multi-step mathematical calculations (sums of squares, degrees of freedom, F-ratios). Looking down at physical scratch paper on the desk is completely normal; the computer vision algorithm, programmed for forward screen gaze, mistakenly classified normal calculating as 'gaze aversion'.\n2. Network Latency & Hardware Packet Drops:\n   Intermittent rural 4G connectivity caused video frame drops, freezing the video buffer and causing the AI model to report 'face missing' or anomalous packet interruptions.\n3. Flawed Vendor Automation:\n   An AI algorithm should NEVER issue an authoritative verdict of academic misconduct; it should only generate flags for human audit.\n\nFair Review and Adjudication Protocol (Institutional Process):\n\n1. Stage 1: Preliminary Technical & Video Audit by Human Panel:\n- Human Review of Flagged Video Clips: The Institutional Academic Integrity Panel (IAIP) reviews the 18 flagged video segments alongside synchronous screen recordings.\n- Behavioral Verification: If the webcam footage shows the student's shoulder and arm moving in rhythm with writing on scratch paper while the screen shows static ANOVA formulas, the human proctor confirms legitimate calculation activity.\n- Network Log Corroboration: IT telemetry logs confirm fluctuating rural 4G packet loss during the exact timestamps of video freezes.\n\n2. Stage 2: Dismissal of Automated Violation:\n- The automated 'Integrity Violation' verdict is formally dismissed due to confirmed algorithmic false positives.\n\n3. Stage 3: Confirmatory Oral Viva Defense:\n- If any residual ambiguity remains, the student attends a 15-minute video viva with the statistics professor, solving a similar ANOVA problem live to demonstrate authentic competence.\n\n4. Institutional Policy Remediation:\n- Update remote testing protocols: For quantitative exams, mandate dual-camera setups (a smartphone webcam positioned at a side angle showing the student's face, hands, desk, and scratch paper simultaneously).\n- Establish policy: Automated AI flags cannot trigger academic penalties without mandatory human panel review.",
      "outlinePoints": [
        "Diagnostic analysis: Algorithmic false positives, quantitative scratch paper work, rural network latency",
        "Stage 1: Human review of flagged video timestamps and screen recordings",
        "Stage 2: Corroborating network packet logs and dismissal of automated violation",
        "Stage 3: Confirmatory oral viva defense with subject professor",
        "Policy reform: Dual-camera angled proctoring and prohibition of fully automated disciplinary verdicts"
      ]
    },
    {
      "id": "AGR220-U3-SUB16",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Digital credentials, micro-credentials, nanodegrees, and the Open Badges standard",
      "questionText": "What are 'Verifiable Credentials' (VCs) and 'Decentralized Identifiers' (DIDs) according to World Wide Web Consortium (W3C) standards?",
      "contextScenario": "An educational technologist is explaining the next generation of digital identity standards to university administrators.",
      "modelAnswer": "The World Wide Web Consortium (W3C) has established open international standards for digital identity and tamper-proof credentialing:\n\n1. Decentralized Identifiers (DIDs):\n- Definition: A new type of globally unique, cryptographically verifiable identifier that does not depend on a centralized registry, identity provider, or certificate authority.\n- Characteristics: Controlled directly by the entity (student or university) using asymmetric cryptography. It resolves to a DID Document containing cryptographic public keys used to verify digital signatures.\n\n2. Verifiable Credentials (VCs):\n- Definition: The digital equivalent of physical credentials (e.g., driver's license, university degree, micro-credential badge), engineered with cryptographic security that makes them tamper-evident and independently verifiable.\n- Architectural Roles in the W3C Ecosystem:\n  * Issuer: The authoritative organization (e.g., Punjab Agricultural University) that signs and grants the credential.\n  * Holder: The student who receives and stores the credential in an encrypted mobile wallet app.\n  * Verifier: The third party (agribusiness employer, overseas university) that cryptographically verifies the credential's authenticity and revocation status without contacting the issuer directly.",
      "outlinePoints": [
        "W3C standard background for digital identity",
        "Decentralized Identifiers (DIDs): Autonomous, cryptographically verifiable URIs",
        "Verifiable Credentials (VCs): Tamper-evident digital representations of diplomas and skills",
        "The three-party architectural trust triangle: Issuer, Holder, Verifier"
      ]
    },
    {
      "id": "AGR220-U3-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "E-portfolio development for showcasing agricultural projects, field trials, and data analyses",
      "questionText": "Describe how an agricultural student can structure and present a precision farming crop data analysis project on an e-portfolio using the STAR (Situation, Task, Action, Result) methodology.",
      "contextScenario": "A student completing an internship on drone-based NDVI crop health monitoring is authoring a project case study for their online e-portfolio.",
      "modelAnswer": "Using the STAR methodology (Situation, Task, Action, Result) transforms an ordinary project description into a compelling evidence-based demonstration of technical competence for prospective employers.\n\nCase Study Presentation: 'Drone-Based Multispectral NDVI Mapping for Targeted Nitrogen Management in Wheat'\n\n1. Situation (The Context and Agronomic Problem):\n- 'During my fourth-semester agronomy practicals, our 5-hectare research wheat farm exhibited severe spatial variability in crop vigor and yellowing under conventional uniform urea broadcasting. Farmers were over-applying nitrogen on fertile patches while under-applying on sandy pockets, leading to high fertilizer costs, leaching, and lodging.'\n\n2. Task (Your Specific Role and Objectives):\n- 'My objective was to deploy a multispectral drone sensor to map crop canopy greenness across the 5 hectares, calculate Normalized Difference Vegetation Index (NDVI) values, and generate a Variable Rate Nitrogen Application (VRA) prescription map to optimize fertilizer use.'\n\n3. Action (Methodology, Technical Tools, and Execution):\n- 'Flight Mission Planning: Mapped the field using Pix4Dcapture, setting a flight altitude of 50 m with 75% forward and side overlap using a DJI Mavic 3 Multispectral drone.'\n- 'Data Processing & Calibration: Processed raw near-infrared (NIR) and red bands in QGIS, calculating NDVI = (NIR - Red) / (NIR + Red) calibrated against radiometric reflectance panels.'\n- 'Zonation Modeling: Classified the raster into three nitrogen vigor zones (Low, Medium, High) and authored an R script converting NDVI values into calibrated urea recommendation rates (0, 30, 60 kg N/ha).'\n\n4. Result (Quantifiable Agronomic & Economic Impact):\n- 'The targeted variable-rate nitrogen application reduced total urea consumption by 22% across the 5 hectares while increasing wheat grain yield by 8.5% due to reduced lodging. I presented the findings at the National Youth Agri-Summit and published the open-source R code on my GitHub repository.'\n\nArtifact Embedding:\nThe portfolio page embeds the interactive QGIS NDVI map, the drone orthomosaic image, and a link to the GitHub R-script repository.",
      "outlinePoints": [
        "Project title and technical alignment with precision agriculture",
        "Situation: Farm spatial variability and uniform fertilization waste",
        "Task: Drone multispectral mapping and variable-rate prescription generation",
        "Action: Flight planning (Pix4D), NDVI computation in QGIS, and R-script modeling",
        "Result: 22% fertilizer savings, 8.5% yield increase, and GitHub code sharing"
      ]
    },
    {
      "id": "AGR220-U3-SUB18",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts",
      "questionText": "Compare Centralized Credential Verification (National Academic Depository - NAD) with Decentralized Blockchain Credentialing (Blockcerts) with respect to infrastructure control, single point of failure, data privacy, and institutional maintenance.",
      "contextScenario": "A national education board is comparing the centralized NAD-DigiLocker architecture with emerging decentralized blockchain credential systems.",
      "modelAnswer": "Digital academic credential verification operates across contrasting centralized and decentralized architectures.\n\n1. Infrastructure Control and Governance:\n- Centralized Verification (NAD / DigiLocker in India):\n  Controlled and maintained by a centralized government authority (Ministry of Electronics and Information Technology / Ministry of Education via DigiLocker). The central database stores student degree records uploaded by verified universities.\n- Decentralized Blockchain (Blockcerts):\n  Distributed across a public or consortium blockchain ledger. No single central government agency, company, or university owns or controls the underlying blockchain network.\n\n2. Vulnerability to Single Point of Failure (System Downtime):\n- Centralized Verification: Highly vulnerable to single points of failure. If the central government server experiences a power outage, DDoS cyberattack, or database maintenance downtime, verification services halt nationwide.\n- Decentralized Blockchain: Resilient against downtime. The blockchain ledger is replicated across thousands of independent validator nodes worldwide; verification functions 24/7 without interruption even if the issuing university's own servers are offline.\n\n3. Data Privacy and Regulatory Compliance (DPDP / GDPR):\n- Centralized Verification: High privacy risk. Central repositories hold massive centralized honeypots of citizens' personal identifying records, increasing risk of catastrophic data breaches if compromised.\n- Decentralized Blockchain: High privacy compliance when properly architected. Personal identifying data remains off-chain in the student's encrypted digital wallet; only an anonymous mathematical hash is anchored on the public blockchain, guaranteeing privacy.\n\n4. Institutional Maintenance and Longevity:\n- Centralized Verification: Dependent on continuous government funding, policy continuity, and server maintenance.\n- Decentralized Blockchain: Permanent and self-sustaining. Even if a private university shuts down permanently, its blockchain-anchored certificates remain cryptographically verifiable for decades into the future.",
      "outlinePoints": [
        "Infrastructure control: Central government authority (NAD/DigiLocker) vs Decentralized ledger (Blockcerts)",
        "Single point of failure: Centralized server vulnerabilities vs Distributed node resilience",
        "Data privacy: Centralized database honeypot risks vs Off-chain privacy preservation",
        "Institutional longevity: Dependent on operational existence vs Permanent independent cryptographic verification"
      ]
    },
    {
      "id": "AGR220-U3-SUB19",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments",
      "questionText": "Discuss the principles of 'Authentic Assessment' in online agricultural education. Explain why conventional multiple-choice tests are inadequate for assessing real-world agricultural competence, and propose three authentic online assessment models.",
      "contextScenario": "An agricultural university curriculum reform committee is replacing high-stakes multiple-choice exams with authentic digital assessments.",
      "modelAnswer": "Authentic Assessment, pioneered by educational researcher Grant Wiggins, refers to evaluation tasks that replicate the real-world intellectual, practical, and diagnostic challenges faced by professionals in the workplace, requiring students to apply knowledge and skills rather than recite memorized facts.\n\n1. Inadequacy of Conventional Multiple-Choice Tests in Agriculture:\nAgricultural science is an applied, biological, and unpredictable discipline. Conventional automated MCQs suffer from severe pedagogical limitations:\n- Artificial Simplification: Real farm ecosystems do not present four neat choices. Pest outbreaks, soil sodicity, and drought occur as complex, interacting biological phenomena.\n- Rote Memorization over Synthesis: MCQs reward shallow recall of facts (e.g., memorizing fertilizer NPK percentages) without evaluating whether the student can physically calibrate a tractor sprayer or diagnose a nutrient deficiency in the field.\n- Vulnerability to Guessing and Cheating: Students can eliminate absurd options or guess answers with a 25% random probability.\n\n2. Three Authentic Online Assessment Models for Agricultural MOOCs:\n\nModel 1: Interactive Virtual Farm Simulation & Agronomic Diagnostic Case Study:\n- Design: Students are placed in a web-based simulation environment representing a 20-hectare farm in a specific agro-climatic zone. The system provides baseline soil health card data, local meteorological forecasts, and water availability.\n- Task: The student must formulate a seasonal crop rotation, select resilient crop varieties, calculate fertilizer schedules using STCR equations, and manage a simulated pest outbreak mid-season.\n- Evaluation: The simulation engine calculates final crop yield, soil organic carbon trajectory, and net farm profit, graded against a standardized rubric evaluating economic and environmental sustainability.\n\nModel 2: Collaborative Video Extension Bulletin & Peer Evaluation:\n- Design: Modern agricultural graduates must communicate scientific discoveries effectively to rural farming communities.\n- Task: Students record a 3-minute video extension demonstration (using their smartphone) explaining a technical practice (e.g., how to treat chickpea seeds with Rhizobium inoculant) in clear, simple language suitable for smallholder farmers.\n- Evaluation: Evaluated via double-blind peer review using an analytical rubric assessing scientific accuracy, visual clarity, practical feasibility, and communication tone.\n\nModel 3: Real-World Open-Source Crop Data Analysis Portfolio:\n- Design: Working with real, messy agricultural datasets (satellite NDVI imagery, weather station feeds, soil testing records).\n- Task: Students author a reproducible R-Markdown or Jupyter Notebook cleaning the dataset, performing ANOVA or regression modeling, and visualizing spatial maps to recommend actionable farm interventions.\n- Evaluation: Graded on computational reproducibility, statistical rigor, and agronomic interpretation.",
      "outlinePoints": [
        "Concept of Authentic Assessment (Grant Wiggins) in applied sciences",
        "Limitations of traditional MCQs: Shallow recall, artificial simplification, lack of practical diagnostic fidelity",
        "Model 1: Interactive virtual farm simulation and agronomic case study",
        "Model 2: Video extension communication bulletins evaluated via peer review",
        "Model 3: Open-source reproducible data analysis portfolios (R-Markdown/Jupyter)",
        "Transforming online evaluation into authentic workplace readiness"
      ]
    },
    {
      "id": "AGR220-U3-SUB20",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD",
      "questionText": "Formulate a proactive networking and outreach communication plan for an agricultural student seeking a summer internship with an AgriTech startup, including a cold connection outreach message on LinkedIn.",
      "contextScenario": "A student wants to reach out directly to the founder or talent acquisition manager of a precision agriculture drone startup on LinkedIn.",
      "modelAnswer": "Securing competitive internships in modern AgriTech requires moving beyond passive job board applications to proactive professional networking on LinkedIn.\n\n1. Pre-Outreach Research & Target Company Mapping:\n- Identify 5 to 10 emerging AgriTech startups operating in your area of interest (e.g., drone multispectral mapping, IoT soil sensors, precision fertigation).\n- Search LinkedIn for key decision-makers: Co-Founders, Chief Agronomists, or Talent Acquisition Leads.\n- Review their recent posts, company press releases, and published whitepapers to understand their core technological challenges and business milestones.\n\n2. Profile Readiness Check (The 'Landing Page' Audit):\nBefore sending messages, ensure your profile is optimized:\n- Headline clearly indicates your technical specialization ('Precision Agronomy | GIS & Drone Mapping').\n- Featured section pins your portfolio demonstrating real project work (e.g., your QGIS NDVI mapping project).\n\n3. The 3-Part Cold Outreach Connection Strategy:\nNever send generic, empty connection requests ('I want to connect'). Always add a personalized note (under LinkedIn's 300-character limit):\n\nDraft Personalized Connection Request (280 characters):\n\"Dear Mr. Sharma, I admire AgriDrone's multispectral work in Punjab. As a 3rd-year B.Sc. Agriculture student skilled in QGIS and drone image processing, I recently built an NDVI nitrogen prescription model. I would love to connect and follow your journey! Best, [Your Name]\"\n\n4. Follow-Up Value-Add Message (Once Connection is Accepted):\nOnce the leader accepts, send a concise, professional message demonstrating authentic value:\n\nFull Outreach Message Template:\n\"Dear Mr. Sharma,\n\nThank you for connecting! I have been closely tracking AgriDrone's deployment of multispectral sensing for precision nitrogen management across northern India.\n\nAs an undergraduate agricultural scholar at LPU, I have dedicated my recent coursework to precision agriculture, mastering QGIS, spatial NDVI interpolation, and soil fertility mapping under FCO standards. I recently completed a project mapping spatial crop variability across a 5-hectare research plot, reducing simulated urea waste by 22% (portfolio link: [Your Portfolio URL]).\n\nI would be honored to contribute to AgriDrone as a Summer Agronomy Intern, supporting flight operations, data processing, or farmer field trials. I have attached my 1-page resume for your consideration.\n\nWould you have 10 minutes next week for a brief conversation regarding how I can add value to your team this summer?\n\nThank you for your time and leadership in digital agriculture!\n\nWarm regards,\n[Your Name]\nB.Sc. (Hons.) Agriculture | [Phone Number] | [Portfolio Link]\"\n\n5. Follow-Up Protocol:\nIf no response is received after 7 to 10 days, send a polite, one-sentence follow-up: 'Hi Mr. Sharma, just following up on this\u2014I would welcome the opportunity to support your team this summer if an opening arises!'",
      "outlinePoints": [
        "Phase 1: Pre-outreach research and decision-maker identification",
        "Phase 2: Profile readiness audit as a professional landing page",
        "Phase 3: Tailored 300-character LinkedIn connection request template",
        "Phase 4: Value-driven follow-up message template demonstrating technical competence",
        "Phase 5: Polite professional follow-up protocol"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "AGR220-U3-FC01",
      "front": "What is the primary pedagogical purpose of Formative Assessment?",
      "back": "To provide ongoing, diagnostic feedback during the learning process, identifying knowledge gaps to inform self-correction and instructional adjustments without grading anxiety.",
      "hint": "Assessment FOR learning vs OF learning",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments"
    },
    {
      "id": "AGR220-U3-FC02",
      "front": "What does a question's Item Difficulty Index (p-value) measure?",
      "back": "The proportion of total test takers who answered the question correctly (p = correct / total). Values between 0.40 and 0.70 are considered optimal.",
      "hint": "Higher p means an easier question",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments"
    },
    {
      "id": "AGR220-U3-FC03",
      "front": "What does a question's Item Discrimination Index (DI) indicate?",
      "back": "The item's ability to distinguish between high-achieving and low-achieving students (DI = (H - L) / (N/2)). A DI >= 0.30 indicates good discriminatory power.",
      "hint": "Difference in correct answers between top and bottom halves",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments"
    },
    {
      "id": "AGR220-U3-FC04",
      "front": "What is a 'Non-Functional Distractor' in MCQ psychometric analysis?",
      "back": "An incorrect answer choice selected by fewer than 5% of examinees, indicating it is obviously implausible and fails to attract low-performing students.",
      "hint": "Selected by less than 5% of examinees",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments"
    },
    {
      "id": "AGR220-U3-FC05",
      "front": "What is an Analytical Rubric?",
      "back": "A scoring guide that evaluates student work across multiple discrete criteria independently, with explicit qualitative descriptors for various achievement levels per criterion.",
      "hint": "Multi-criteria evaluation matrix",
      "syllabusTopic": "Types of online assessments: Formative vs summative, automated quizzes, and rubric-based assignments"
    },
    {
      "id": "AGR220-U3-FC06",
      "front": "What are the three core stages of Calibrated Peer Review (CPR)?",
      "back": "1. Text Submission (student uploads anonymous response); 2. Calibration Training (student grades benchmark essays); 3. Double-Blind Peer Review and Self-Assessment.",
      "hint": "Submit -> Calibrate -> Peer Review",
      "syllabusTopic": "Peer review mechanisms: Calibrated Peer Review (CPR), rubric design, and constructive feedback"
    },
    {
      "id": "AGR220-U3-FC07",
      "front": "What is the Reviewer Competency Index (RCI) in Calibrated Peer Review?",
      "back": "A dynamic mathematical weighting score measuring how accurately a student grades calibration essays compared to expert faculty scores, weighting their peer reviews accordingly.",
      "hint": "Reviewer accuracy weighting score",
      "syllabusTopic": "Peer review mechanisms: Calibrated Peer Review (CPR), rubric design, and constructive feedback"
    },
    {
      "id": "AGR220-U3-FC08",
      "front": "What statistical metric is commonly used to quantify Inter-Rater Reliability?",
      "back": "Cohen's Kappa (for categorical ratings) or Intraclass Correlation Coefficient (ICC, for continuous ratings), measuring agreement beyond chance.",
      "hint": "Cohen's Kappa or ICC",
      "syllabusTopic": "Peer review mechanisms: Calibrated Peer Review (CPR), rubric design, and constructive feedback"
    },
    {
      "id": "AGR220-U3-FC09",
      "front": "How do Lockdown Browsers (e.g., Safe Exam Browser) prevent exam cheating?",
      "back": "They seal the client operating system by locking the browser into full-screen, blocking dual monitors, disabling clipboard copy-paste, and terminating unauthorized background apps.",
      "hint": "OS environment lockdown",
      "syllabusTopic": "Proctored online examinations: Lockdown browsers, automated AI proctoring, and human invigilation"
    },
    {
      "id": "AGR220-U3-FC10",
      "front": "How does AI proctoring detect candidate gaze aversion?",
      "back": "Using computer vision to detect 68 facial landmark coordinates, calculating the vector of head rotation (pitch, yaw, roll) and iris position to detect when pupils drift off-screen.",
      "hint": "68 facial landmarks and head pose vectors",
      "syllabusTopic": "Proctored online examinations: Lockdown browsers, automated AI proctoring, and human invigilation"
    },
    {
      "id": "AGR220-U3-FC11",
      "front": "What is the crucial role of human oversight in AI-proctored online exams?",
      "back": "AI engines generate algorithmic flags for suspicious events; human invigilators must review recorded video evidence to verify genuine academic malpractice before applying penalties.",
      "hint": "Human-in-the-loop review",
      "syllabusTopic": "Proctored online examinations: Lockdown browsers, automated AI proctoring, and human invigilation"
    },
    {
      "id": "AGR220-U3-FC12",
      "front": "What are the three core JSON-LD objects in an Open Badges specification?",
      "back": "1. Issuer (issuing organization metadata); 2. BadgeClass (name, description, learning criteria); 3. Assertion (recipient ID, issue date, verification evidence link).",
      "hint": "Issuer, BadgeClass, Assertion",
      "syllabusTopic": "Digital certificates and micro-credentials: Open Badges standard, nanodegrees, and stackable credits"
    },
    {
      "id": "AGR220-U3-FC13",
      "front": "What is 'Badge Baking' in the Open Badges ecosystem?",
      "back": "The cryptographic process of embedding signed JSON-LD metadata directly into the auxiliary metadata chunks (e.g., iTXt chunk) of a portable PNG or SVG image file.",
      "hint": "Embedding metadata inside image chunks",
      "syllabusTopic": "Digital certificates and micro-credentials: Open Badges standard, nanodegrees, and stackable credits"
    },
    {
      "id": "AGR220-U3-FC14",
      "front": "What are Stackable Credentials?",
      "back": "A sequence of portable, modular micro-credentials or certificates that can be accumulated over time and formally credited toward advanced diplomas or full university degrees.",
      "hint": "Modular certificates building toward a degree",
      "syllabusTopic": "Digital certificates and micro-credentials: Open Badges standard, nanodegrees, and stackable credits"
    },
    {
      "id": "AGR220-U3-FC15",
      "front": "What role does the Academic Bank of Credits (ABC) play under India's NEP 2020?",
      "back": "A national digital depository that records, stores, and transfers academic credits earned by students from authorized higher education institutions and approved SWAYAM MOOCs.",
      "hint": "National credit storage and transfer repository",
      "syllabusTopic": "Digital certificates and micro-credentials: Open Badges standard, nanodegrees, and stackable credits"
    },
    {
      "id": "AGR220-U3-FC16",
      "front": "How does SHA-256 cryptographic hashing ensure tamper-evident transcripts?",
      "back": "It generates a fixed 256-bit (64-hex character) digital fingerprint of the document; altering even a single character in the transcript produces an entirely different hash (avalanche effect).",
      "hint": "256-bit unique cryptographic hash fingerprint",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts"
    },
    {
      "id": "AGR220-U3-FC17",
      "front": "How do Merkle Trees enable scalable blockchain credential verification (Blockcerts)?",
      "back": "Thousands of individual certificate hashes are paired and hashed recursively into a single Merkle Root. Anchoring only the Merkle Root on-chain verifies thousands of credentials cheaply.",
      "hint": "Binary hash tree root anchored on-chain",
      "syllabusTopic": "Blockchain technology in educational credential verification and tamper-proof transcripts"
    },
    {
      "id": "AGR220-U3-FC18",
      "front": "What are the four components of the STAR framework for e-portfolios?",
      "back": "Situation (context and challenge); Task (specific responsibility); Action (tools, methodologies, and steps taken); Result (quantifiable agronomic or economic outcome).",
      "hint": "Situation, Task, Action, Result",
      "syllabusTopic": "Portfolio development: Showcasing projects, field trials, and data analytics on digital platforms"
    },
    {
      "id": "AGR220-U3-FC19",
      "front": "What is an ORCID iD and why is it essential for agricultural researchers?",
      "back": "A persistent 16-digit unique digital identifier (URI) that disambiguates researchers with common names and automatically connects their publications, grants, and peer reviews globally.",
      "hint": "16-digit unique researcher identifier",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD"
    },
    {
      "id": "AGR220-U3-FC20",
      "front": "What is the optimal structure for an agricultural student's LinkedIn headline?",
      "back": "[Academic Degree/Specialization] | [Core Technical Skills: GIS, Soil Testing, Precision Agronomy] | [Career Aspiration/Value Proposition: Sustainable Crop Production].",
      "hint": "Degree | Core Skills | Value Proposition",
      "syllabusTopic": "Professional online networking for agri-graduates: LinkedIn optimization, ResearchGate, and ORCID iD"
    }
  ]
};
