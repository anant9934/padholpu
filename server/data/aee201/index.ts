import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const aee201Metadata: SubjectMetadata = {
  code: "AEE201",
  name: "Entrepreneurship Development and Business Communication",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 1 | T: 0 | P: 2",
  courseCategory: "Core",
  syllabusPdfUrl: "/AEE201_Syllabus.pdf",
  overview: "Entrepreneurship Development and Business Communication equips undergraduate agriculture students with foundational mindsets, theoretical models, practical managerial skills, and communication techniques required to conceive, plan, finance, launch, and manage sustainable agricultural enterprises, farmer producer companies, and rural ventures.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Foundations of Entrepreneurship and Institutional Support",
      description: "Understand the concept of entrepreneurship, Danhof's agricultural typologies, McClelland's achievement motivation, and apex institutional financing architecture (NABARD, SFAC, APEDA, MSME)."
    },
    {
      code: "CO2",
      title: "Business Communication and Interpersonal Dynamics",
      description: "Master business communication principles (7 Cs), overcome semantic/psychological barriers, and draft professional correspondence (letters, memos, circulars, technical reports)."
    },
    {
      code: "CO3",
      title: "Feasibility Analysis, Business Planning, and DPR Formulation",
      description: "Apply systematic ideation, execute multi-dimensional feasibility appraisals (technical, market, financial, environmental), structure bankable DPRs, and design the 9-block Business Model Canvas."
    },
    {
      code: "CO4",
      title: "Agribusiness Marketing Mix, Pricing, and Financial Management",
      description: "Apply agricultural marketing strategies (4Ps/7Ps), conduct market research, design pricing and disintermediated distribution channels, and manage working capital and financial ratios."
    },
    {
      code: "CO5",
      title: "Agri-Enterprise Models, FPO Governance, and Startup Incubation",
      description: "Analyze modern agribusiness models (CHCs, cold chain, agritourism), Farmer Producer Company statutory governance, rural women entrepreneurship under DAY-NRLM, and agritech incubation (RKVY-RAFTAAR, e-NAM)."
    }
  ],
  gradingStructure: [
    {
      component: "Continuous Assessment (CA)",
      weightage: "20%",
      marks: "30 Marks (Best 2 of 3)",
      details: "Two best descriptive continuous assessments of 30 marks each, scaled to 20% weightage, covering ongoing unit content and practical exercises."
    },
    {
      component: "Mid-Term Examination (MTE)",
      weightage: "20%",
      marks: "40 Marks",
      details: "Mid-term university examination covering Units 1, 2, and 3, comprising objective and short/medium descriptive questions."
    },
    {
      component: "End-Term Examination (ETE)",
      weightage: "40%",
      marks: "70 Marks",
      details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing knowledge, financial appraisal, and strategic management."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Evaluation of practical lab records, viva-voce, SWOT analysis presentations, DPR defense, and Business Model Canvas pitch sessions."
    }
  ],
  textbooks: [
    {
      title: "Entrepreneurship Development and Management",
      author: "R. K. Singh",
      note: "Prescribed core textbook for foundational entrepreneurship theories, competency frameworks, and institutional schemes."
    },
    {
      title: "Agri-Business Management",
      author: "Himanshu and O. P. Singh",
      note: "Standard academic reference for agricultural business plans, feasibility studies, and working capital management."
    },
    {
      title: "Business Communication: Making Connections in a Digital World",
      author: "Raymond V. Lesikar and Marie E. Flatley",
      note: "Comprehensive reference for written business correspondence, report drafting, and presentation skills."
    },
    {
      title: "Agricultural Marketing in India",
      author: "S. S. Acharya and N. L. Agarwal",
      note: "Authoritative textbook on Indian agricultural marketing systems, price spread, mandis, and market efficiency."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "SWOT Analysis of a Local Agribusiness Enterprise",
      objectives: [
        "Conduct an on-site field diagnostic study of a local agro-processing or farm-input enterprise.",
        "Construct an empirical 4-quadrant SWOT matrix and propose strategic risk mitigation measures."
      ],
      materialsRequired: ["Survey questionnaires", "Enterprise financial records", "Field observation logbooks", "SWOT analysis templates"],
      procedureSteps: [
        "Visit a local commercial enterprise (e.g., custom hiring center, dairy chilling plant, seed processing unit).",
        "Interview the promoter and operations manager regarding sourcing, sales margins, power reliability, and competitors.",
        "Identify internal Strengths and Weaknesses, and external Opportunities and Threats.",
        "Compile observations into a 4-quadrant SWOT matrix with actionable recommendations.",
        "Present findings in a 10-minute classroom slide pitch."
      ],
      observationsAndRecording: [
        "Record raw material procurement distances and seasonality constraints.",
        "Note existing debt-to-equity ratios and customer payment delay periods."
      ],
      reflectionQuestions: [
        "How can an agribusiness convert an external regulatory threat (e.g., chemical pesticide restrictions) into an internal commercial opportunity?",
        "Why is raw material seasonality the single greatest operational weakness for rural food processors?"
      ],
      submissionGuidance: "Submit a 4-page diagnostic report with completed SWOT matrix and strategic recommendations."
    },
    {
      id: 2,
      title: "Formulation of a Detailed Project Report (DPR) for a Micro-Agri Enterprise",
      objectives: [
        "Master the technical and financial chapters of a bankable Detailed Project Report.",
        "Calculate capital outlay, means of finance, operating cash flows, BEP, and DSCR for a ₹20 Lakh project."
      ],
      materialsRequired: ["DPR financial modeling templates", "Machinery quotation proformas", "Commercial bank loan application checklists", "Scientific literature on agro-processing"],
      procedureSteps: [
        "Select a specific micro-enterprise (e.g., commercial mushroom cultivation, honey processing, bio-fertilizer unit).",
        "Formulate production process flowcharts, material balance, and equipment specifications.",
        "Itemize fixed capital outlay (land, civil works, machinery) and working capital requirements.",
        "Construct 3-year projected Profit & Loss, Balance Sheet, and Cash Flow schedules.",
        "Compute Break-Even Point (units and %) and Debt Service Coverage Ratio (DSCR)."
      ],
      observationsAndRecording: [
        "Record equipment quotations from certified fabricators.",
        "Document working capital cycles across peak and lean harvesting seasons."
      ],
      reflectionQuestions: [
        "Why will a commercial bank reject a DPR if the projected DSCR is below 1.5 in agriculture?",
        "How does phased capacity utilization (50%-70%-85%) protect the startup during initial years?"
      ],
      submissionGuidance: "Submit the complete bankable Detailed Project Report (minimum 8 pages) including all financial schedules."
    },
    {
      id: 3,
      title: "Designing a Business Model Canvas (BMC) for an Agri-Startup",
      objectives: [
        "Map the 9 building blocks of Alexander Osterwalder's Business Model Canvas for an agritech venture.",
        "Align customer jobs, pains, and gains using the Value Proposition Canvas."
      ],
      materialsRequired: ["BMC visual poster templates", "Sticky notes and markers", "Case study documentation of Indian agritech startups"],
      procedureSteps: [
        "Form teams of 3-4 students and conceive an innovative agritech startup concept (e.g., solar cold storage-as-a-service, Kisan drone spraying).",
        "Map the Customer Profile (jobs, pains, gains) and design the Value Map.",
        "Populate all 9 building blocks: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partnerships, and Cost Structure.",
        "Conduct a peer review exercise challenging underlying business assumptions.",
        "Refine and present the final canvas to a mock investor jury."
      ],
      observationsAndRecording: [
        "Record specific pain relievers that directly resolve smallholder liquidity and transit loss challenges.",
        "Identify high-margin recurring revenue stream mechanisms."
      ],
      reflectionQuestions: [
        "How does a multi-sided platform business model (like DeHaat) balance incentives for both farmers and corporate buyers?",
        "Why is the BMC superior to a traditional 50-page business plan during early customer discovery?"
      ],
      submissionGuidance: "Submit the completed 1-page visual Business Model Canvas accompanied by a 2-page strategic narrative."
    },
    {
      id: 4,
      title: "Mock Investor Pitch and Business Presentation for Seed Funding",
      objectives: [
        "Develop executive oral communication, elevator pitching, and non-verbal delivery competence.",
        "Apply the 3P presentation formula (Preparation, Practice, Performance) and Aristotle's Rhetorical Triangle."
      ],
      materialsRequired: ["Presentation clicker", "Stopwatch timer", "Investor pitch evaluation rubrics", "Audio-visual projector"],
      procedureSteps: [
        "Prepare a 10-slide pitch deck adhering to Guy Kawasaki's 10-20-30 Rule.",
        "Structure the presentation: Hook → Problem → Solution → TAM/SAM → Business Model → Traction → Team → The Ask.",
        "Rehearse voice projection, intonation, posture (kinesics), and deliberate eye contact.",
        "Deliver a strict 7-minute pitch before an external jury followed by 3 minutes of rigorous cross-examination Q&A.",
        "Review video recording of performance for non-verbal mannerisms and filler words."
      ],
      observationsAndRecording: [
        "Record speech rate (words per minute) and instances of vocal disfluencies (um, ah).",
        "Note jury feedback on financial metric defense (CAC, LTV, IRR)."
      ],
      reflectionQuestions: [
        "How does a presenter project calm authority and Ethos when answering aggressive financial objections?",
        "Why must complex agronomic trial data be translated into financial unit economics when pitching to venture capitalists?"
      ],
      submissionGuidance: "Submit the finalized 10-slide PowerPoint presentation alongside a 1-page self-reflection audit."
    },
    {
      id: 5,
      title: "Institutional Field Visit to a Farmer Producer Company (FPC) or Agri-Incubator",
      objectives: [
        "Study the real-world governance, shareholding structure, and commercial operations of an active Farmer Producer Company or RKVY-RAFTAAR incubator.",
        "Interview the CEO, Board of Directors, and member farmers regarding input aggregation and marketing margins."
      ],
      materialsRequired: ["Institutional visit questionnaire", "Field notebook", "Camera/Smartphone for documentation"],
      procedureSteps: [
        "Participate in a guided field visit to an incorporated FPC or university agribusiness incubator (R-ABI).",
        "Inspect physical infrastructure: aggregation bays, electronic weighbridges, seed grading units, or testing labs.",
        "Examine statutory registers: register of members, minute books of Board and AGM meetings, and audited annual reports.",
        "Interact with smallholder members to evaluate perceived benefits (input discounts, higher farm-gate realizations).",
        "Document governance challenges, working capital constraints, and member side-selling issues."
      ],
      observationsAndRecording: [
        "Record total enrolled member share capital, SFAC equity grant received, and annual turnover.",
        "Note the percentage of produce marketed through the FPC vs sold to traditional mandis."
      ],
      reflectionQuestions: [
        "What structural mechanisms prevent political co-optation in a Farmer Producer Company compared to traditional cooperatives?",
        "How does a professional CEO balance commercial profitability with smallholder member welfare?"
      ],
      submissionGuidance: "Submit an exhaustive 5-page institutional case study report detailing the visit observations and strategic recommendations."
    }
  ]
};

export const aee201Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const aee201CompleteSubject = {
  metadata: aee201Metadata,
  units: aee201Units
};

export default aee201CompleteSubject;
