import { db } from "../server/db";
import {
  subjects,
  units,
  topics,
  resources,
  questions,
  quizzes,
  subjectiveQuestions,
  flashcardDecks,
  flashcards,
  users,
} from "../shared/schema";
import { eq, and, sql } from "drizzle-orm";
import fs from "fs";
import path from "path";
import { ensureMultidisciplinarySeedData } from "../server/services/academic-multidisciplinary";

// ============================================================================
// VERIFIED ACADEMIC CONTENT MANIFEST
// ============================================================================

export const VERIFIED_RESOURCES = [
  // ── LAW (BALLB) ─────────────────────────────────────────────────────────
  {
    subjectCode: "LAW101",
    type: "Legal Case Brief",
    title: "Doctrine of Precedent & Judicial Hierarchy in India",
    description: "Detailed legal analysis of binding precedent under Article 141, ratio decidendi vs obiter dicta, and appellate authority.",
    url: "/content/verified/law/law101-doctrine-of-precedent.pdf",
    filename: "LAW101_Doctrine_of_Precedent_LPU.pdf",
    fileSize: 4120,
    unitNumber: 1,
  },
  {
    subjectCode: "LAW102",
    type: "Notes",
    title: "Fundamental Rights & Golden Triangle (Articles 14, 19, 21)",
    description: "Constitutional jurisprudence on non-arbitrariness, procedural fairness, and substantive due process following Maneka Gandhi.",
    url: "/content/verified/law/law102-fundamental-rights-golden-triangle.pdf",
    filename: "LAW102_Fundamental_Rights_Golden_Triangle.pdf",
    fileSize: 5240,
    unitNumber: 1,
  },
  {
    subjectCode: "LAW103",
    type: "Case Study",
    title: "Strict vs Absolute Liability: From Rylands to M.C. Mehta",
    description: "Factual and comparative legal analysis of non-natural land use vs enterprise liability for hazardous industrial operations.",
    url: "/content/verified/law/law103-strict-vs-absolute-liability.pdf",
    filename: "LAW103_Strict_vs_Absolute_Liability.pdf",
    fileSize: 4890,
    unitNumber: 1,
  },
  {
    subjectCode: "LAW201",
    type: "Notes",
    title: "Essentials of Valid Contract & Doctrine of Frustration (Sec 10 & 56)",
    description: "Analysis of offer, acceptance, consideration, lawful object, and supervening impossibility under Indian Contract Act 1872.",
    url: "/content/verified/law/law201-contract-law-essentials.pdf",
    filename: "LAW201_Contract_Law_Essentials.pdf",
    fileSize: 4350,
    unitNumber: 1,
  },

  // ── MANAGEMENT (BBA) ───────────────────────────────────────────────────
  {
    subjectCode: "MGT101",
    type: "Notes",
    title: "Henri Fayol's 14 Principles of Management & Administrative Theory",
    description: "Core organizational principles: division of work, unity of command, scalar chain, equity, and esprit de corps.",
    url: "/content/verified/management/mgt101-fayol-principles.pdf",
    filename: "MGT101_Fayol_Management_Principles.pdf",
    fileSize: 3750,
    unitNumber: 1,
  },
  {
    subjectCode: "MGT102",
    type: "Notes",
    title: "Double-Entry Bookkeeping & Accounting Equation Mechanics",
    description: "Classification of real, personal, and nominal accounts with ledger posting, trial balance, and Ind AS adjustments.",
    url: "/content/verified/management/mgt102-accounting-principles.pdf",
    filename: "MGT102_Accounting_Principles.pdf",
    fileSize: 4620,
    unitNumber: 1,
  },
  {
    subjectCode: "MGT201",
    type: "Case Study",
    title: "Strategic Positioning & Porter's Five Forces Framework Analysis",
    description: "Competitive strategy case study: threat of new entrants, buyer power, supplier leverage, substitution, and rivalry.",
    url: "/content/verified/management/mgt201-porter-five-forces.pdf",
    filename: "MGT201_Porter_Five_Forces_Case.pdf",
    fileSize: 5120,
    unitNumber: 1,
  },

  // ── AGRICULTURE (BSC-AGRI) ─────────────────────────────────────────────
  {
    subjectCode: "AGR101",
    type: "Fieldwork Guide",
    title: "Principles of Agronomy: Tillage & Kharif/Rabi Cropping Systems",
    description: "Agronomic field guide on primary vs secondary tillage, zero tillage practices, seedbed preparation, and crop rotations.",
    url: "/content/verified/agriculture/agr101-agronomy-fieldwork-guide.pdf",
    filename: "AGR101_Agronomy_Fieldwork_Guide.pdf",
    fileSize: 6180,
    unitNumber: 1,
  },
  {
    subjectCode: "AGR102",
    type: "Laboratory Guide",
    title: "Soil Horizon Profiling, Texture Analysis & Cation Exchange Capacity",
    description: "Soil science laboratory manual: soil horizons (O, A, E, B, C), hydrometer soil texture testing, and CEC estimation.",
    url: "/content/verified/agriculture/agr102-soil-science-lab-manual.pdf",
    filename: "AGR102_Soil_Science_Lab_Manual.pdf",
    fileSize: 5840,
    unitNumber: 1,
  },

  // ── SCIENCES (BSC-PHYSICS) ─────────────────────────────────────────────
  {
    subjectCode: "PHY101",
    type: "Formula Sheet",
    title: "Special Theory of Relativity: Lorentz Transformations & Relativistic Dynamics",
    description: "Mathematical summary: Lorentz coordinate boost, time dilation, length contraction, relativistic momentum, and E=mc^2.",
    url: "/content/verified/physics/phy101-lorentz-transformations-summary.pdf",
    filename: "PHY101_Special_Relativity_Formula_Sheet.pdf",
    fileSize: 3420,
    unitNumber: 1,
  },
  {
    subjectCode: "MTH101",
    type: "Formula Sheet",
    title: "Calculus & Linear Algebra: Eigenvalues, Diagonalization & Matrix Calculus",
    description: "Comprehensive summary of characteristic polynomial, Cayley-Hamilton theorem, quadratic forms, and multivariate Taylor expansion.",
    url: "/content/verified/math/mth101-linear-algebra-summary.pdf",
    filename: "MTH101_Linear_Algebra_Summary.pdf",
    fileSize: 3890,
    unitNumber: 1,
  },

  // ── COMMERCE (BCOM-HONS) ───────────────────────────────────────────────
  {
    subjectCode: "COM101",
    type: "Notes",
    title: "Financial Accounting: Consignment Accounts & Joint Venture Accounting",
    description: "Accounting treatment of goods sent on consignment, del credere commission, valuation of unsold stock, and joint ventures.",
    url: "/content/verified/commerce/com101-consignment-accounting.pdf",
    filename: "COM101_Consignment_Accounting.pdf",
    fileSize: 4500,
    unitNumber: 1,
  },
  {
    subjectCode: "COM102",
    type: "Notes",
    title: "Business Law: Quasi-Contracts & Remedies for Breach of Contract",
    description: "Sections 68-72 quasi-contracts (quantum meruit) and Section 73 liquidated damages vs penalty rules in commercial trade.",
    url: "/content/verified/commerce/com102-business-law-remedies.pdf",
    filename: "COM102_Business_Law_Remedies.pdf",
    fileSize: 4210,
    unitNumber: 1,
  },

  // ── COMPUTING (BTECH-CSE) ──────────────────────────────────────────────
  {
    subjectCode: "CSE121",
    type: "Notes",
    title: "Procedural Programming in C: Pointers, Memory Allocation & Structs",
    description: "Comprehensive guide to pointers, stack vs heap memory (malloc/free), pointer arithmetic, and struct data layouts.",
    url: "/content/verified/cse/cse121-pointers-and-memory.pdf",
    filename: "CSE121_Pointers_and_Memory.pdf",
    fileSize: 4780,
    unitNumber: 1,
  },
  {
    subjectCode: "CSE205",
    type: "Notes",
    title: "Data Structures: Self-Balancing Trees, Graphs & Asymptotic Bounds",
    description: "AVL rotations, Red-Black tree invariants, Dijkstra's shortest path, and master theorem time complexity proofs.",
    url: "/content/verified/cse/cse205-data-structures-guide.pdf",
    filename: "CSE205_Data_Structures_Guide.pdf",
    fileSize: 5310,
    unitNumber: 1,
  },
  {
    subjectCode: "CSE310",
    type: "Notes",
    title: "Relational Database Design: Normal Forms (1NF to BCNF) & Transaction Isolation (ACID)",
    description: "Formal functional dependencies, Armstrong's axioms, lossless join decomposition, dependency preservation, and ACID concurrency control.",
    url: "/content/verified/cse/cse310-relational-database-design.pdf",
    filename: "CSE310_Relational_Database_Design.pdf",
    fileSize: 4680,
    unitNumber: 2,
  },
  {
    subjectCode: "LAW202",
    type: "Notes",
    title: "General Exceptions under IPC (Sections 76-106) & Strict Doctrine of Mens Rea",
    description: "Statutory defences in Indian Penal Code: mistake of fact (Sec 76, 79), judicial acts, accident, necessity, insanity (Sec 84), intoxication, and right of private defence.",
    url: "/content/verified/law/law202-ipc-general-exceptions.pdf",
    filename: "LAW202_IPC_General_Exceptions.pdf",
    fileSize: 5320,
    unitNumber: 2,
  },
  {
    subjectCode: "MGT103",
    type: "Notes",
    title: "Price Elasticity of Demand, Short-Run Marginal Costs & Market Structures",
    description: "Microeconomic principles: point and arc elasticity, returns to scale, short-run vs long-run cost curves, profit maximization under perfect competition and monopoly.",
    url: "/content/verified/management/mgt103-business-economics.pdf",
    filename: "MGT103_Business_Economics_Principles.pdf",
    fileSize: 4410,
    unitNumber: 1,
  },
  {
    subjectCode: "AGR201",
    type: "Fieldwork Guide",
    title: "Integrated Pest Management (IPM): Economic Injury Level & Biological Controls",
    description: "Protocols for insect scouting, economic threshold levels, pheromone traps, biopesticides, and management of major crop pests in Indian agriculture.",
    url: "/content/verified/agriculture/agr201-ipm-fieldwork-guide.pdf",
    filename: "AGR201_IPM_Field_Manual.pdf",
    fileSize: 4950,
    unitNumber: 2,
  },
  {
    subjectCode: "INT219",
    type: "Notes",
    title: "Modern Web Architecture: Asynchronous JavaScript, Fetch API & Responsive CSS Grid",
    description: "DOM manipulation, ECMAScript Promise pipelines, asynchronous event loops, CSS Grid and Flexbox alignment, and RESTful client design.",
    url: "/content/verified/cse/int219-modern-web-development.pdf",
    filename: "INT219_Modern_Web_Development.pdf",
    fileSize: 4820,
    unitNumber: 2,
  },
  {
    subjectCode: "PSY101",
    type: "Notes",
    title: "Foundations of Human Cognition: Classical & Operant Conditioning Paradigms",
    description: "Behavioral psychology principles: Ivan Pavlov's classical conditioning, B.F. Skinner's operant conditioning, schedules of reinforcement, and cognitive schemas.",
    url: "/content/verified/humanities/psy101-foundations-of-psychology.pdf",
    filename: "PSY101_Foundations_of_Psychology.pdf",
    fileSize: 4250,
    unitNumber: 1,
  },
];

export const AUTHENTIC_DISCIPLINE_MCQS = [
  {
    subjectCode: "LAW101",
    unit: "Unit 1",
    topic: "Judicial Precedent",
    question: "Which Article of the Constitution of India establishes that law declared by the Supreme Court is binding on all courts?",
    optionA: "Article 141",
    optionB: "Article 136",
    optionC: "Article 32",
    optionD: "Article 226",
    correctOption: "A",
    explanation: "Article 141 of the Constitution establishes the doctrine of binding precedent (stare decisis) for Supreme Court rulings.",
  },
  {
    subjectCode: "LAW101",
    unit: "Unit 1",
    topic: "Legal Maxims",
    question: "The legal maxim 'Ubi jus ibi remedium' directly expresses which foundational legal concept?",
    optionA: "Where there is a right, there is a remedy",
    optionB: "Ignorance of the law is no excuse",
    optionC: "An act of god harms no one",
    optionD: "No one should be judged in their own cause",
    correctOption: "A",
    explanation: "'Ubi jus ibi remedium' denotes that whenever common law confers a right, it also provides a remedy for infringement.",
  },
  {
    subjectCode: "MGT101",
    unit: "Unit 1",
    topic: "Management Principles",
    question: "According to Henri Fayol, which principle dictates that an employee must receive orders from one superior only?",
    optionA: "Unity of Command",
    optionB: "Unity of Direction",
    optionC: "Scalar Chain",
    optionD: "Esprit de Corps",
    correctOption: "A",
    explanation: "Unity of command states that an employee should be answerable to and receive directions from only a single manager.",
  },
  {
    subjectCode: "MGT101",
    unit: "Unit 1",
    topic: "Strategic Analysis",
    question: "In Porter's Five Forces model, which force assesses the ease with which buyers can transition to rival offerings?",
    optionA: "Bargaining Power of Buyers",
    optionB: "Threat of New Entrants",
    optionC: "Threat of Substitutes",
    optionD: "Supplier Concentration",
    correctOption: "A",
    explanation: "Buyer power increases when switching costs are low and alternative suppliers are abundant.",
  },
  {
    subjectCode: "AGR101",
    unit: "Unit 1",
    topic: "Cropping Systems",
    question: "Which of the following field crops is strictly classified as a Kharif crop in Indian agro-climatic zones?",
    optionA: "Rice (Paddy)",
    optionB: "Wheat",
    optionC: "Mustard",
    optionD: "Chickpea (Gram)",
    correctOption: "A",
    explanation: "Paddy is cultivated during the southwest monsoon (June-October) and is a primary Kharif staple.",
  },
  {
    subjectCode: "AGR101",
    unit: "Unit 1",
    topic: "Tillage",
    question: "What is the primary agronomic objective of Happy Seeder zero-tillage technology in wheat cultivation?",
    optionA: "Direct drilling into standing residue while halting stubble burning",
    optionB: "Deep subsoiling to invert soil horizons",
    optionC: "Flooding the field to suppress weed germination",
    optionD: "Pulverizing soil into fine dust particles",
    correctOption: "A",
    explanation: "Happy Seeder cuts standing paddy straw and seeds wheat simultaneously, conserving moisture and avoiding stubble burning.",
  },
  {
    subjectCode: "COM101",
    unit: "Unit 1",
    topic: "Consignment Accounts",
    question: "A consignor pays a Del Credere commission to the consignee primarily to indemnify against which risk?",
    optionA: "Bad debts arising from credit sales",
    optionB: "Marine transit damages",
    optionC: "Foreign currency volatility",
    optionD: "Normal warehouse evaporation",
    correctOption: "A",
    explanation: "Del credere commission transfers the risk of bad debts from consignor to consignee upon making credit sales.",
  },
  {
    subjectCode: "PHY101",
    unit: "Unit 1",
    topic: "Relativity",
    question: "In the Lorentz transformation, what is the value of the Lorentz factor gamma when relative velocity v equals 0?",
    optionA: "1",
    optionB: "0",
    optionC: "Infinity",
    optionD: "0.5",
    correctOption: "A",
    explanation: "When v = 0, gamma = 1 / sqrt(1 - 0) = 1, reducing Lorentz transformations to standard Newtonian Galilean coordinates.",
  },
  {
    subjectCode: "CSE310",
    unit: "Unit 2",
    topic: "Database Normalization",
    question: "Which relational schema normal form strictly guarantees that every non-trivial functional dependency X -> Y has X as a superkey?",
    optionA: "Boyce-Codd Normal Form (BCNF)",
    optionB: "Third Normal Form (3NF)",
    optionC: "Second Normal Form (2NF)",
    optionD: "First Normal Form (1NF)",
    correctOption: "A",
    explanation: "BCNF requires that for every functional dependency X -> Y, X must be a superkey of the relation. In 3NF, Y may also be a prime attribute.",
  },
  {
    subjectCode: "LAW202",
    unit: "Unit 2",
    topic: "General Exceptions IPC",
    question: "Under Section 84 of the Indian Penal Code 1860, the legal test of insanity requires proving that the accused at the time of the act was incapable of knowing:",
    optionA: "The nature of the act, or that what was being done was either wrong or contrary to law",
    optionB: "Only that the act would cause economic loss to others",
    optionC: "The civil remedies available to the victim",
    optionD: "The specific sections of the Penal Code under which he is triable",
    correctOption: "A",
    explanation: "Section 84 IPC incorporates the legal standard from the English M'Naghten Rules (1843), requiring cognitive incapacity regarding the nature of the act or its wrongfulness/illegality.",
  },
  {
    subjectCode: "MGT103",
    unit: "Unit 1",
    topic: "Price Elasticity",
    question: "In microeconomics, when price elasticity of demand (|Ed|) is greater than 1, a decrease in the price of the commodity causes total revenue of the firm to:",
    optionA: "Increase",
    optionB: "Decrease",
    optionC: "Remain unchanged",
    optionD: "Drop immediately to zero",
    correctOption: "A",
    explanation: "When demand is elastic (|Ed| > 1), the percentage increase in quantity demanded exceeds the percentage decrease in price, leading to an increase in total revenue (TR = P * Q).",
  },
  {
    subjectCode: "AGR201",
    unit: "Unit 2",
    topic: "Integrated Pest Management",
    question: "In Integrated Pest Management (IPM), the Economic Threshold (ET) is formally defined as the pest population density at which control measures should be applied to prevent the population from reaching:",
    optionA: "The Economic Injury Level (EIL)",
    optionB: "Complete extinction",
    optionC: "The General Equilibrium Position (GEP)",
    optionD: "Zero population density",
    correctOption: "A",
    explanation: "The Economic Threshold (ET) is the operational action threshold. It is always set below the Economic Injury Level (EIL) to provide adequate response time for control measures before economic loss occurs.",
  },
  {
    subjectCode: "INT219",
    unit: "Unit 2",
    topic: "Asynchronous JavaScript",
    question: "In JavaScript's Event Loop execution model, which of the following queues takes priority over the standard Task (Macrotask) Queue upon completion of current call stack execution?",
    optionA: "Microtask Queue (Promise callbacks, queueMicrotask)",
    optionB: "DOM Timer Queue (setTimeout callbacks)",
    optionC: "I/O Polling Queue",
    optionD: "SetImmediate Queue",
    correctOption: "A",
    explanation: "The Event Loop continuously executes the call stack, empties the entire Microtask Queue (Promises, mutation observers) before picking the next single macrotask from the Macrotask Queue.",
  },
  {
    subjectCode: "PSY101",
    unit: "Unit 1",
    topic: "Classical Conditioning",
    question: "In Ivan Pavlov's classical conditioning experiments with canines, what was the meat powder classified as prior to any pairing with the metronome?",
    optionA: "Unconditioned Stimulus (UCS)",
    optionB: "Conditioned Stimulus (CS)",
    optionC: "Conditioned Response (CR)",
    optionD: "Neutral Stimulus (NS)",
    correctOption: "A",
    explanation: "The meat powder naturally and automatically triggered salivation without prior training, making it an Unconditioned Stimulus (UCS), producing an Unconditioned Response (UCR).",
  },
];

export const VERIFIED_SUBJECTIVE_QUESTIONS = [
  // ── LAW ──
  {
    subjectCode: "LAW101",
    questionText: "Explain the doctrine of Stare Decisis in the Indian judicial framework. Differentiate between Ratio Decidendi and Obiter Dicta with relevant Supreme Court precedents.",
    contextScenario: "A High Court single-judge bench dissented from an earlier division bench judgment of the same High Court on the ground that the earlier ruling was per incuriam.",
    statuteOrCitation: "Constitution of India, Article 141; Union of India v. Raghubir Singh (1989) 2 SCC 754",
    modelAnswer: "The doctrine of Stare Decisis (Article 141) binds all courts within India to follow law declared by the Supreme Court. Ratio decidendi represents the legal principle essential to the determination of the dispute, whereas obiter dicta reflects incidental observations. A single judge cannot overrule a larger division bench unless declared per incuriam by a competent appellate authority.",
    maxMarks: 15,
    difficulty: "Hard",
  },
  {
    subjectCode: "LAW103",
    questionText: "Discuss the evolution of Absolute Liability in India as distinct from the Rule in Rylands v. Fletcher. How does enterprise liability protect victims of hazardous industrial disasters?",
    contextScenario: "A chemical processing plant situated near a residential area suffered a chlorine gas valve rupture during routine maintenance, hospitalizing over 200 citizens.",
    statuteOrCitation: "M.C. Mehta v. Union of India (Oleum Gas Leak Case, 1987); Rylands v. Fletcher (1868) L.R. 3 H.L. 330",
    modelAnswer: "In M.C. Mehta (1987), Chief Justice P.N. Bhagwati established that the 19th-century English rule of Strict Liability with its exceptions (act of God, third-party sabotage) is inadequate for modern industrial enterprises. An enterprise engaged in inherently hazardous activities owes an absolute and non-delegable duty to the community, and liability cannot be avoided by pleading absence of negligence.",
    maxMarks: 15,
    difficulty: "Hard",
  },

  // ── MANAGEMENT ──
  {
    subjectCode: "MGT101",
    questionText: "Critically evaluate Henri Fayol's 14 Principles of Management in contemporary agile technology enterprises. Which principles require adaptation in modern flat organizations?",
    contextScenario: "A high-growth SaaS enterprise is experiencing communication delays due to strict adherence to the scalar chain and unity of command.",
    statuteOrCitation: "Henri Fayol, General and Industrial Management (1916); Mintzberg Managerial Roles Framework",
    modelAnswer: "While classical principles like division of work, remuneration, and discipline remain universal, principles such as Scalar Chain and Unity of Command often create bureaucratic bottlenecks in dynamic cross-functional environments. Contemporary technology firms adopt dual reporting (Matrix organizations) and decentralized gang-plank communication to preserve agility.",
    maxMarks: 10,
    difficulty: "Medium",
  },
  {
    subjectCode: "MGT102",
    questionText: "Explain the matching principle in accrual accounting. Contrast it with cash-basis accounting and illustrate how depreciation embodies this principle.",
    contextScenario: "A logistics company purchased delivery vans for Rs. 50,00,000 with a 5-year useful life. The manager wants to write off the entire Rs. 50 lakhs in Year 1.",
    statuteOrCitation: "Ind AS 1 Presentation of Financial Statements; Ind AS 16 Property, Plant and Equipment",
    modelAnswer: "The matching principle requires that revenues generated in an accounting period must be matched against expenses incurred to produce those revenues. Expensing the full asset cost in Year 1 distorts net profit. Under Ind AS 16, depreciation systematically allocates depreciable amount over asset useful life, adhering strictly to the matching principle.",
    maxMarks: 10,
    difficulty: "Medium",
  },

  // ── AGRICULTURE ──
  {
    subjectCode: "AGR101",
    questionText: "Describe the agro-ecological differences between Kharif, Rabi, and Zaid seasons in North Indian agriculture. Detail the seedbed preparation required for zero-till wheat following basmati rice.",
    contextScenario: "Farmers in Punjab face short turnaround times (10-15 days) between harvesting paddy and sowing wheat, often resorting to crop residue burning.",
    statuteOrCitation: "ICAR Agronomy Handbook; Happy Seeder / Super Seeder Zero-Tillage Extension Protocols",
    modelAnswer: "Kharif crops (June-October) coincide with southwest monsoon (warm/humid, e.g. rice, maize); Rabi crops (October-March) require temperate conditions (e.g. wheat, mustard). Zero-tillage using Happy Seeder directly cuts paddy straw, drills wheat seed with starter fertilizer into untilled soil, and deposits residue as surface mulch, conserving moisture and halting stubble burning.",
    maxMarks: 15,
    difficulty: "Hard",
  },

  // ── SCIENCES (PHYSICS) ──
  {
    subjectCode: "PHY101",
    questionText: "Derive the Lorentz Transformation equations for coordinate frames in relative uniform motion along the x-axis. Demonstrate that the speed of light c remains invariant.",
    contextScenario: "An electron beam travels at 0.8c relative to laboratory frame S. A detector moves in the same direction at 0.5c.",
    statuteOrCitation: "Einstein (1905), On the Electrodynamics of Moving Bodies; Relativistic Kinematics",
    modelAnswer: "Starting from the postulates of special relativity: (1) laws of physics are invariant across all inertial frames, and (2) light speed c is constant. Postulating linear transformation x' = gamma(x - vt) and x = gamma(x' + vt') and invoking the spherical wavefront invariant x^2 - c^2 t^2 = x'^2 - c^2 t'^2 yields gamma = 1/sqrt(1 - v^2/c^2). Applying relativistic velocity addition confirms c remains the upper universal speed limit.",
    maxMarks: 15,
    difficulty: "Hard",
  },

  // ── COMPUTER SCIENCE ──
  {
    subjectCode: "CSE205",
    questionText: "Explain the self-balancing mechanism of AVL trees. Detail the four rotation cases (LL, RR, LR, RL) and prove why the search time complexity remains strictly O(log n).",
    contextScenario: "A dictionary lookup service needs guaranteed worst-case search times under continuous insertion and deletion workloads.",
    statuteOrCitation: "Adelson-Velsky and Landis (1962); Asymptotic Complexity Bounds",
    modelAnswer: "An AVL tree maintains a balance factor (height(left) - height(right)) of -1, 0, or +1 at every node. When an insert produces balance factor +2 or -2, single rotations (LL or RR) or double rotations (LR or RL) restore balance in O(1) time. Because tree height h is strictly bounded by 1.44 log2(n), lookup, insert, and delete are guaranteed to complete in O(log n) worst-case time.",
    maxMarks: 10,
    difficulty: "Medium",
  },
  {
    subjectCode: "CSE310",
    questionText: "Explain the criteria for a decomposition to be lossless and dependency-preserving. Decompose relation R(A, B, C, D) with FDs {A -> B, B -> C, C -> D} into 3NF and verify BCNF compliance.",
    contextScenario: "A database architect is redesigning a legacy university registry table to eliminate update and deletion anomalies.",
    statuteOrCitation: "Codd (1970); Date & Darwen Relational Database Design Standards",
    modelAnswer: "A decomposition of R into R1 and R2 is lossless-join if R1 ∩ R2 forms a superkey of either R1 or R2. Dependency preservation requires that the union of FDs enforceable within decomposed schemas covers the original closure F+. Given R(A, B, C, D) with FDs {A -> B, B -> C, C -> D}: Candidate key is A. Canonical 3NF decomposition yields R1(A, B), R2(B, C), and R3(C, D). In each decomposed relation, the determinant is a superkey within its projection, satisfying both 3NF and BCNF while fully preserving all functional dependencies without cross-table joins.",
    maxMarks: 15,
    difficulty: "Hard",
  },
  {
    subjectCode: "LAW202",
    questionText: "Analyse the scope and statutory limitations of the Right of Private Defence of the body under Sections 96 to 102 of the IPC. When does the right extend to causing the death of the assailant?",
    contextScenario: "A shopkeeper was attacked late at night by armed intruders brandishing lethal weapons. In defending his life, he discharged a licensed firearm, fatally wounding one attacker.",
    statuteOrCitation: "Indian Penal Code 1860, Sections 96-106; Amjad Khan v. State (1952 SCR 567); Darshan Singh v. State of Punjab (2010) 2 SCC 333",
    modelAnswer: "Section 96 IPC affirms that nothing is an offense which is done in the exercise of the right of private defence. Under Section 102, the right commences as soon as a reasonable apprehension of danger to the body arises from an attempt or threat to commit the offense, and continues as long as such apprehension exists. Section 100 authorises causing death only when the assault reasonably causes apprehension of: (1) death, (2) grievous hurt, (3) rape, (4) unnatural lust, (5) kidnapping/abduction, (6) wrongful confinement, or (7) acid attack (Criminal Law Amendment Act 2013). As held in Darshan Singh (2010), the right is defensive and not retributive; force used must not exceed the harm necessary to repel the unlawful threat.",
    maxMarks: 15,
    difficulty: "Hard",
  },
  {
    subjectCode: "MGT103",
    questionText: "Compare short-run equilibrium and long-run equilibrium of a firm under Monopolistic Competition versus Perfect Competition. Explain why excess capacity exists under Monopolistic Competition.",
    contextScenario: "A retail coffee chain operates in a competitive metropolitan area where each outlet possesses modest brand loyalty and distinct ambiance.",
    statuteOrCitation: "Chamberlin (1933) Theory of Monopolistic Competition; Varian Microeconomic Analysis",
    modelAnswer: "Under perfect competition, firms produce at the minimum point of their Long-Run Average Cost (LAC) curve where P = MR = MC = minimum LAC, achieving both allocative and productive efficiency. Under monopolistic competition, product differentiation creates a downward-sloping demand curve (AR). While free entry eliminates economic profits in the long run (tangency of AR and LAC), tangency occurs on the falling portion of the LAC curve (where slope of AR is negative). Consequently, output is less than the socially optimum minimum-cost output, giving rise to Chamberlin's 'Excess Capacity'.",
    maxMarks: 15,
    difficulty: "Medium",
  },
  {
    subjectCode: "AGR201",
    questionText: "Formulate an Integrated Pest Management (IPM) schedule for Brown Plant Hopper (Nilaparvata lugens) in paddy cultivation. Detail cultural, biological, and chemical intervention thresholds.",
    contextScenario: "A regional agricultural extension officer reports yellowing, drying, and hopper burn patches across irrigated rice fields during the panicle initiation stage.",
    statuteOrCitation: "ICAR Directorate of Rice Research; Plant Protection Guidelines (Ministry of Agriculture)",
    modelAnswer: "Integrated management of Brown Plant Hopper (BPH) requires: (1) Cultural controls: Alternate wetting and drying (AWD) of paddy fields rather than continuous flooding; formation of 'alleyways' every 2 metres for aeration; avoiding excess nitrogenous fertilisation (>120 kg N/ha). (2) Biological controls: Conservation of natural predators including mirid bugs (Cyrtorhinus lividipennis) and wolf spiders (Lycosa pseudoannulata). (3) Chemical interventions: Scout 10 hills randomly; trigger spray when population reaches Economic Threshold (5-10 nymphs/hill in vegetative phase, 1-2 per tiller in heading phase). Direct targeted spray of systemic insecticides such as Pymetrozine 50 WG or Triflumezopyrim 10 SC towards the base of tillers, strictly avoiding broad-spectrum synthetic pyrethroids which induce resurgence.",
    maxMarks: 15,
    difficulty: "Hard",
  },
  {
    subjectCode: "INT219",
    questionText: "Design a robust asynchronous client module using modern JavaScript Fetch API. Explain how to handle HTTP network errors, 4xx/5xx responses, request cancellation via AbortController, and JSON parsing safely.",
    contextScenario: "A financial dashboard fetches streaming equity prices from multiple REST endpoints with a 5-second timeout requirement.",
    statuteOrCitation: "WHATWG Fetch Standard; W3C Web Platform Architecture Guidelines",
    modelAnswer: "The Fetch API does not reject promises on HTTP error statuses (like 404 or 500); it only rejects on network disconnection or DNS failure. A robust implementation requires inspecting response.ok boolean before parsing JSON payload. Request cancellation must utilise AbortController: const controller = new AbortController(); fetch(url, { signal: controller.signal }). If timeout expires, controller.abort() cancels pending in-flight TCP streams without leaking memory. Error handling must distinguish between AbortError (intentional cancellation) and genuine network failures, returning strongly-typed state to UI components.",
    maxMarks: 15,
    difficulty: "Medium",
  },
  {
    subjectCode: "PSY101",
    questionText: "Differentiate between the Availability Heuristic and the Representativeness Heuristic as identified by Kahneman and Tversky. Provide concrete behavioral examples of each.",
    contextScenario: "An executive risk committee repeatedly miscalculates product launch failure probabilities due to cognitive biases in statistical estimation.",
    statuteOrCitation: "Tversky & Kahneman (1974), Judgment under Uncertainty: Heuristics and Biases, Science",
    modelAnswer: "Amos Tversky and Daniel Kahneman established that human cognition relies on mental shortcuts (heuristics) that deviate from rational probabilistic calculation: (1) Availability Heuristic: Assessing the frequency or probability of an event based on how easily concrete instances come to mind. For example, individuals vastly overestimate the likelihood of plane crashes compared to car accidents because aviation disasters receive intense emotional and media salience. (2) Representativeness Heuristic: Evaluating the probability that an entity belongs to a category based on similarity to a mental prototype, ignoring base-rate frequencies. For example, describing an introverted, detail-oriented person and erroneously assuming they are more likely to be a librarian than a salesperson, even when salespeople outnumber librarians in the population by 20 to 1.",
    maxMarks: 15,
    difficulty: "Medium",
  },
];

export async function seedVerifiedAcademicContent() {
  console.log("🌱 Starting Verified Multidisciplinary Academic Seeding...");

  // 0. Ensure complete multidisciplinary academic catalog and curriculum mappings
  await ensureMultidisciplinarySeedData();

  // 1. Fetch admin user for author attribution
  let adminUser = (await db.select().from(users).where(eq(users.isAdmin, true)))[0];
  if (!adminUser) {
    adminUser = (await db.select().from(users).limit(1))[0];
  }
  const adminId = adminUser ? adminUser.id : 1;
  const adminName = adminUser ? adminUser.fullName || adminUser.username : "LPU Academic Faculty";

  // 2. Fetch all subjects
  const allSubjs = await db.select().from(subjects);
  const subjMap = new Map<string, any>(allSubjs.map((s: any) => [s.code.toUpperCase(), s]));

  console.log(`[+] Found ${allSubjs.length} registered subjects in catalog.`);

  // 3. Seed Verified Resources (Notes, Case Studies, Formula Sheets, Lab Manuals)
  let seededResources = 0;
  for (const item of VERIFIED_RESOURCES) {
    const subj = subjMap.get(item.subjectCode.toUpperCase());
    if (!subj) {
      console.warn(`[-] Subject ${item.subjectCode} not found in database. Skipping resource.`);
      continue;
    }

    // Check duplicate by title and subject
    const [existing] = await db
      .select()
      .from(resources)
      .where(and(eq(resources.subject, subj.code), eq(resources.title, item.title)));

    if (!existing) {
      await db.insert(resources).values({
        title: item.title,
        subject: subj.code,
        type: item.type,
        url: item.url,
        filename: item.filename,
        fileSize: item.fileSize,
        uploaderId: adminId,
        uploaderName: adminName,
        uploaderUsername: adminUser ? adminUser.username : "admin",
        uploadedBy: adminId,
        isBoosted: false,
      });
      seededResources++;
    }
  }
  console.log(`[+] Seeded ${seededResources} verified study resources across faculties.`);

  // 4. Seed Verified Subjective Questions & Model Answers
  let seededSubjective = 0;
  for (const item of VERIFIED_SUBJECTIVE_QUESTIONS) {
    const subj = subjMap.get(item.subjectCode.toUpperCase());
    if (!subj) continue;

    const [existing] = await db
      .select()
      .from(subjectiveQuestions)
      .where(and(eq(subjectiveQuestions.subjectId, subj.id), eq(subjectiveQuestions.questionText, item.questionText)));

    if (!existing) {
      await db.insert(subjectiveQuestions).values({
        subjectId: subj.id,
        questionType: subj.discipline === "LAW" ? "LEGAL_PROBLEM" : "LONG_ANSWER",
        questionText: item.questionText,
        contextScenario: item.contextScenario,
        statuteOrCitation: item.statuteOrCitation,
        modelAnswer: item.modelAnswer,
        maxMarks: item.maxMarks,
        difficulty: item.difficulty,
        examSession: "LPU Verified Question Bank",
      });
      seededSubjective++;
    }
  }
  console.log(`[+] Seeded ${seededSubjective} verified subjective assessment questions.`);

  // 5. Seed Authentic Discipline MCQs
  let seededMCQs = 0;
  for (const q of AUTHENTIC_DISCIPLINE_MCQS) {
    const subj = subjMap.get(q.subjectCode.toUpperCase());
    if (!subj) continue;

    const [existing] = await db
      .select()
      .from(questions)
      .where(and(eq(questions.subjectId, subj.id), eq(questions.questionText, q.question)));

    if (!existing) {
      await db.insert(questions).values({
        subjectId: subj.id,
        subject: subj.code,
        unit: q.unit || "Unit 1",
        topic: q.topic || "Core",
        difficulty: "Medium",
        questionType: "MCQ",
        questionText: q.question,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD,
        correctOption: q.correctOption,
        explanation: q.explanation,
        createdBy: adminId,
      });
      seededMCQs++;
    }
  }

  // 6. Seed Additional Questions from server/data/questions.json
  const questionsJsonPath = path.join(process.cwd(), "server/data/questions.json");
  const SUBJ_ALIASES: Record<string, string> = {
    CSE111: "CSE121",
    MTH166: "MTH101",
  };

  if (fs.existsSync(questionsJsonPath)) {
    const rawData = fs.readFileSync(questionsJsonPath, "utf-8");
    const jsonQuestions = JSON.parse(rawData);

    for (const q of jsonQuestions.slice(0, 50)) {
      const rawCode = String(q.subject || "").toUpperCase();
      const mappedCode = SUBJ_ALIASES[rawCode] || rawCode;
      const subj = subjMap.get(mappedCode);

      if (!subj) continue;

      // Check if question already exists
      const [existing] = await db
        .select()
        .from(questions)
        .where(and(eq(questions.subjectId, subj.id), eq(questions.questionText, q.question)));

      if (!existing && q.question && q.options && q.options.length >= 4) {
        const optA = q.options[0]?.text || q.options[0] || "Option A";
        const optB = q.options[1]?.text || q.options[1] || "Option B";
        const optC = q.options[2]?.text || q.options[2] || "Option C";
        const optD = q.options[3]?.text || q.options[3] || "Option D";
        const correctLetter =
          q.correctAnswer !== undefined
            ? typeof q.correctAnswer === "number"
              ? ["A", "B", "C", "D"][q.correctAnswer] || "A"
              : String(q.correctAnswer).toUpperCase()
            : "A";

        await db.insert(questions).values({
          subjectId: subj.id,
          subject: subj.code,
          unit: q.unit || "Unit 1",
          topic: q.topic || "General",
          difficulty: q.difficulty || "Medium",
          questionType: "MCQ",
          questionText: q.question,
          optionA: optA,
          optionB: optB,
          optionC: optC,
          optionD: optD,
          correctOption: correctLetter,
          explanation: q.explanation || `Official explanation for ${subj.code} examination topic.`,
          createdBy: adminId,
        });
        seededMCQs++;
      }
    }
  }
  console.log(`[+] Seeded ${seededMCQs} genuine examination MCQs.`);

  // 6. Seed Sample Flashcards for Core Disciplines
  let seededDecks = 0;
  const sampleFlashcardDecks = [
    {
      subjectCode: "LAW101",
      title: "LAW101 Core Legal Maxims",
      description: "Essential Latin legal maxims for law students (Ubi jus ibi remedium, Res ipsa loquitur).",
      cards: [
        { front: "Ubi jus ibi remedium", back: "Where there is a right, there is a remedy. Foundation of civil and tortious relief." },
        { front: "Res ipsa loquitur", back: "The thing speaks for itself. In negligence, shifts burden of proof to defendant." },
        { front: "Stare decisis et non quieta movere", back: "To stand by decisions and not disturb settled points (Doctrine of Precedent)." },
      ],
    },
    {
      subjectCode: "MGT101",
      title: "MGT101 Strategic Frameworks",
      description: "Quick revision deck on Porter's Five Forces and BCG Growth-Share Matrix.",
      cards: [
        { front: "Porter's Five Forces", back: "1. Threat of new entrants, 2. Buyer power, 3. Supplier power, 4. Threat of substitutes, 5. Competitive rivalry." },
        { front: "BCG Matrix Categories", back: "Stars (high growth, high share), Cash Cows (low growth, high share), Question Marks (high growth, low share), Dogs (low growth, low share)." },
      ],
    },
    {
      subjectCode: "AGR101",
      title: "AGR101 Cropping Systems & Tillage",
      description: "Quick revision on Kharif vs Rabi season crops and primary tillage implements.",
      cards: [
        { front: "Primary Tillage Implements", back: "Mouldboard (MB) plough, disc plough, and chisel plough used for deep soil loosening." },
        { front: "Major Kharif Crops", back: "Rice (Oryza sativa), Maize, Cotton, Groundnut, Soybean (grown during SW monsoon)." },
      ],
    },
    {
      subjectCode: "CSE310",
      title: "CSE310 Normal Forms & ACID",
      description: "Quick revision deck on Boyce-Codd Normal Form and ACID transaction guarantees.",
      cards: [
        { front: "ACID Guarantees", back: "Atomicity (all or nothing), Consistency (preserves database invariants), Isolation (concurrent execution serializability), Durability (committed changes survive crashes)." },
        { front: "Boyce-Codd Normal Form (BCNF)", back: "Strict condition: In every non-trivial functional dependency X -> Y, X must be a candidate key (superkey)." },
      ],
    },
    {
      subjectCode: "PSY101",
      title: "PSY101 Conditioning Paradigms",
      description: "Foundational concepts in behavioral conditioning and heuristics.",
      cards: [
        { front: "Classical vs Operant Conditioning", back: "Classical: associations between stimuli and involuntary responses (Pavlov). Operant: association between voluntary behaviors and consequences (Skinner)." },
        { front: "Availability Heuristic", back: "Estimating probability based on ease with which vivid examples come to mind, leading to systematic biases in risk judgment." },
      ],
    },
  ];

  for (const deckInfo of sampleFlashcardDecks) {
    const subj = subjMap.get(deckInfo.subjectCode.toUpperCase());
    if (!subj) continue;

    const [existingDeck] = await db
      .select()
      .from(flashcardDecks)
      .where(and(eq(flashcardDecks.subjectId, subj.id), eq(flashcardDecks.title, deckInfo.title)));

    let deckId = existingDeck?.id;
    if (!deckId) {
      const [newDeck] = await db
        .insert(flashcardDecks)
        .values({
          subjectId: subj.id,
          title: deckInfo.title,
          description: deckInfo.description,
          isPublic: true,
          createdBy: adminId,
          cardCount: deckInfo.cards.length,
        })
        .returning();
      deckId = newDeck.id;
      seededDecks++;

      for (const card of deckInfo.cards) {
        await db.insert(flashcards).values({
          deckId,
          front: card.front,
          back: card.back,
          hint: subj.code,
        });
      }
    }
  }
  console.log(`[+] Seeded ${seededDecks} flashcard revision decks.`);

  console.log("✅ Verified Multidisciplinary Academic Seeding Complete!");
}

// Direct execution
if (import.meta.url.endsWith(process.argv[1]) || process.argv[1]?.includes("seed-verified-academic-content")) {
  seedVerifiedAcademicContent()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Seeding error:", err);
      process.exit(1);
    });
}
