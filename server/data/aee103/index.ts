import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";
import { unit6Content } from "./unit6";

export const aee103Metadata: SubjectMetadata = {
  code: "AEE103",
  name: "Fundamentals of Extension Education",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 1 | T: 0 | P: 2",
  courseCategory: "Core",
  syllabusPdfUrl: "/AEE103_Syllabus.pdf",
  overview: "Fundamentals of Extension Education provides undergraduate agricultural students with an essential foundation in adult educational principles, historical extension systems in India, contemporary trends in digital and market-led technology transfer, community development philosophies, extension administration, and agricultural communication dynamics.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Concept and principles of extension education",
      description: "Aware about the concept and principles of extension education and effective teaching methods of farmers for agricultural development."
    },
    {
      code: "CO2",
      title: "Organizational set-up of agricultural extension",
      description: "Memorize the organizational set-up of agricultural extension for rural development."
    },
    {
      code: "CO3",
      title: "Adoption, diffusion, planning and evaluation",
      description: "Observe the adoption/diffusion of innovations, motivation, planning, and evaluation of extension programmes."
    },
    {
      code: "CO4",
      title: "Communication and new trends in agricultural extension",
      description: "Discuss the principles of communication and new trends in agricultural extension."
    },
    {
      code: "CO5",
      title: "ICT applications in transfer of technology",
      description: "Apply the ICT applications in transfer of technology for community development."
    }
  ],
  // The supplied syllabus states L:1, T:0, P:2 and 2 credits, but does not
  // specify assessment weightages. Do not infer or display an unverified split.
  gradingStructure: [],
  gradingDisclosure: "The supplied AEE103 syllabus specifies L: 1, T: 0, P: 2 and 2 credits, but does not state assessment weightages. Check the current course instructions or faculty communication for the applicable grading pattern.",
  textbooks: [
    {
      title: "Fundamentals of Agricultural Extension Education",
      author: "Sagar Mondal and G. L. Ray",
      note: "Prescribed core textbook for foundational principles, programme planning, and communication models."
    },
    {
      title: "Education and Communication for Development",
      author: "O. P. Dahama and O. P. Bhatnagar",
      note: "Standard academic reference for extension teaching methods, visual aids, and rural sociology."
    },
    {
      title: "Fundamentals of Extension Education and Management in Extension",
      author: "K. A. Jalihal and V. Veerabhadraiah",
      note: "In-depth reference for extension administration, supervision, and POSDCORB functions."
    },
    {
      title: "Handbook of Extension Education",
      author: "O. S. Rathore, M. S. Chauhan, B. S. Bhimawat, and S. Dhakar",
      note: "Comprehensive guide for Indian agricultural development schemes and PRA field techniques."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Group Discussion on Agricultural Technologies",
      objectives: [
        "Understand the dynamics, seating arrangement, and role distribution in extension group discussions.",
        "Practice moderating and participating in structured farm problem-solving discussions."
      ],
      materialsRequired: ["Chart papers", "Markers", "Discussion evaluation rubrics", "Audio recording device"],
      procedureSteps: [
        "Organize 15-20 students into a circular seating arrangement ensuring mutual eye contact.",
        "Assign a realistic village topic: 'Challenges in Adopting Micro-Irrigation in Arid Belts'.",
        "Designate one student as Moderator, one as Timekeeper, and one as Rapporteur.",
        "Conduct a 25-minute discussion where the moderator elicits participation from all members.",
        "Rapporteur summarizes key consensus points and presents conclusions."
      ],
      observationsAndRecording: [
        "Record the frequency of participation for each member.",
        "Note instances of leadership, conflict resolution, and dominant behavior."
      ],
      reflectionQuestions: [
        "How can a moderator tactfully encourage a shy participant without causing embarrassment?",
        "What strategies prevent aggressive participants from monopolizing village discussions?"
      ],
      submissionGuidance: "Submit a 2-page report including discussion transcript summary, consensus action items, and personal self-reflection."
    },
    {
      id: 2,
      title: "Identification of Rural Leaders Using Sociometric & Key-Informant Techniques",
      objectives: [
        "Apply the Sociometric technique in a real or simulated village group.",
        "Construct a sociogram and identify Sociometric Stars and Isolates."
      ],
      materialsRequired: ["Sociometric questionnaire sheets", "Graph paper or network visualization software", "Clipboard"],
      procedureSteps: [
        "Administer a private questionnaire asking respondents: 'Name 3 farmers you would consult if your crop is infested by an unknown disease'.",
        "Tabulate responses into an N x N Sociometric Choice Matrix.",
        "Calculate incoming choice scores for every member.",
        "Plot the network nodes and directed arrows to draw the Sociogram.",
        "Identify Stars (≥5 choices), Isolates (0 choices), and Mutual Pairs."
      ],
      observationsAndRecording: [
        "Record sociometric choices and identify top 3 informal opinion leaders.",
        "Observe whether leadership correlates with land size, age, or education."
      ],
      reflectionQuestions: [
        "Why is an informal sociometric star more influential than an appointed political leader?",
        "How should an extension worker approach a group isolate to ensure inclusion?"
      ],
      submissionGuidance: "Submit the completed Sociometric Matrix, the drawn Sociogram diagram, and a 1-page leadership engagement strategy."
    },
    {
      id: 3,
      title: "Preparation of Audio-Visual Aids for Farmer Training",
      objectives: [
        "Design and construct effective low-cost visual aids (charts, posters, flashcard sets).",
        "Apply principles of visual literacy, contrast, lettering, and layout."
      ],
      materialsRequired: ["Poster chart sheets", "Acrylic markers", "Flashcard boards (10x12 inches)", "Ruler", "Scissors"],
      procedureSteps: [
        "Select a specific farm topic: 'Identification of Fall Armyworm in Maize'.",
        "Design a 20x30 inch poster using the ABC rules: Attractive, Brief, Clear.",
        "Ensure lettering size is readable from 15 feet away (minimum 1.5 inches for headline).",
        "Construct a set of 10 sequential flashcards illustrating symptoms and spray techniques.",
        "Present the visual aids before the class for peer readability critique."
      ],
      observationsAndRecording: [
        "Evaluate visual contrast under different lighting conditions.",
        "Record peer readability scores and timing required to grasp the message."
      ],
      reflectionQuestions: [
        "Why should an agricultural poster convey only a single primary idea?",
        "What are the common visual layout mistakes that confuse semi-literate farmers?"
      ],
      submissionGuidance: "Submit the completed poster and flashcard set with a written justification of the color palette and typography chosen."
    },
    {
      id: 4,
      title: "Preparation of Extension Literature: Leaflets, Folders, and Pamphlets",
      objectives: [
        "Draft and layout concise, easily readable extension folders in the local language.",
        "Apply Flesch Reading Ease principles to technical agricultural recommendations."
      ],
      materialsRequired: ["A4 art paper", "Desktop publishing software / template sheets", "High-resolution farm photos"],
      procedureSteps: [
        "Select a crop technology: 'Package of Practices for Organic Basmati Rice'.",
        "Fold an A4 sheet into a 3-panel (6-page) accordion folder.",
        "Draft the front panel with an eye-catching headline, photo, and sponsoring institution.",
        "Organize internal panels sequentially: Soil, Nursery, Transplanting, Nutrient Management, Pest Control, Economics.",
        "Back panel: Contact details of KVK scientists and helpline numbers."
      ],
      observationsAndRecording: [
        "Calculate average sentence length (target 15-18 words).",
        "Verify absence of confusing Latin chemical jargon."
      ],
      reflectionQuestions: [
        "Why are accordion-folded folders preferred by farmers over stapled booklets?",
        "How can technical dosages be expressed without confusing metric conversions?"
      ],
      submissionGuidance: "Submit the finished physical or digital 6-panel folder accompanied by readability metric calculations."
    },
    {
      id: 5,
      title: "Presentation Skills and Micro-Teaching in Agricultural Extension",
      objectives: [
        "Deliver an engaging 7-minute agricultural micro-teaching presentation to a rural audience.",
        "Master body language, voice modulation, question-handling, and presentation structure."
      ],
      materialsRequired: ["Podium", "Digital projector or chalkboard", "Timer", "Evaluation rubrics"],
      procedureSteps: [
        "Prepare a 7-minute lesson plan on: 'Drip Fertigation in Vegetables'.",
        "Structure into: Introduction (1 min hook), Body (5 min core steps), and Summary (1 min action call).",
        "Deliver the presentation maintaining eye contact, enthusiastic modulation, and open posture.",
        "Incorporate a 2-minute audience question-and-answer simulation.",
        "Receive peer and faculty feedback using standard micro-teaching rubrics."
      ],
      observationsAndRecording: [
        "Record filler word count ('um', 'ah', 'you know').",
        "Assess pacing (target: 120-140 words per minute)."
      ],
      reflectionQuestions: [
        "How does an extension speaker re-engage an audience that appears distracted or bored?",
        "What is the best way to respond to a difficult farmer question when you do not know the answer?"
      ],
      submissionGuidance: "Submit the structured 7-minute lesson plan, presentation slide deck/notes, and self-evaluation form."
    },
    {
      id: 6,
      title: "Village Visits to Understand Farmers' Problems & Extension Needs",
      objectives: [
        "Conduct a field survey in an adopted village to identify agronomic, economic, and institutional constraints.",
        "Differentiate between farmers' felt and unfelt needs."
      ],
      materialsRequired: ["Structured interview schedules", "Field notebook", "Camera", "Soil sampling kit"],
      procedureSteps: [
        "Visit 5 selected smallholder farm households in the adopted village.",
        "Administer a semi-structured interview schedule covering cropping history, input costs, pest issues, and marketing.",
        "Inspect standing crops, farm machinery, and livestock housing alongside the farmer.",
        "Document yield gaps between research potential and actual harvest.",
        "Classify recorded constraints into technical, financial, and institutional categories."
      ],
      observationsAndRecording: [
        "Record socioeconomic data, cropping intensity, and soil test availability.",
        "Identify top 3 felt needs expressed by the farm family."
      ],
      reflectionQuestions: [
        "Why do smallholder farmers often prioritize risk avoidance over maximum yield?",
        "How does lack of storage infrastructure force farmers into distress selling?"
      ],
      submissionGuidance: "Submit an exhaustive 4-page Village Visit Case Study report with photographic documentation and constraint analysis."
    },
    {
      id: 7,
      title: "Studying DRDA, Panchayati Raj Institutions (PRI), and District Development Departments",
      objectives: [
        "Understand the administrative linkages between Panchayati Raj Institutions and line departments.",
        "Examine the operational mechanisms of DRDA in executing rural schemes."
      ],
      materialsRequired: ["Institutional organogram charts", "Interview questionnaire for BDO/Panchayat Secretary"],
      procedureSteps: [
        "Visit the Block Development Office (BDO) and an active Gram Panchayat office.",
        "Map the 3-tier PRI structure: Zila Parishad, Panchayat Samiti, and Gram Panchayat.",
        "Interview the Panchayat Secretary on Gram Panchayat Development Plan (GPDP) formulation.",
        "Examine how MGNREGA works are sanctioned and social audits are conducted.",
        "Document coordination mechanisms between Agriculture, Animal Husbandry, and PRI bodies."
      ],
      observationsAndRecording: [
        "Diagram the administrative flow of development funds from Ministry to Gram Panchayat.",
        "Record the frequency and attendance of Gram Sabha meetings."
      ],
      reflectionQuestions: [
        "What are the major structural hurdles hindering effective PRI involvement in agricultural extension?",
        "How can Gram Sabhas be made more effective in holding local officials accountable?"
      ],
      submissionGuidance: "Submit an institutional organogram and a 3-page analytical report on PRI-Departmental convergence."
    },
    {
      id: 8,
      title: "Visits to Local Agricultural NGOs, FO/FPOs, and Community Enterprises",
      objectives: [
        "Study the governance, business model, and extension services of an active Farmer Producer Organization (FPO).",
        "Analyze the role of NGOs in community mobilization and natural farming."
      ],
      materialsRequired: ["FPO case study questionnaire", "Notebook", "Business model canvas template"],
      procedureSteps: [
        "Visit the registered office and processing facility of an active local FPO.",
        "Interview the Board of Directors (farmer leaders) and Chief Executive Officer (CEO).",
        "Document member strength, share capital, turnover, and major commodity focus.",
        "Inspect custom hiring centres, input retail outlets, or grading facilities run by the FPO.",
        "Complete a Business Model Canvas mapping customer segments, value propositions, and revenue streams."
      ],
      observationsAndRecording: [
        "Record wholesale input cost savings achieved for member farmers.",
        "Note market price premiums realized by selling directly to corporate or export buyers."
      ],
      reflectionQuestions: [
        "What are the primary financial and working-capital constraints faced by new FPOs?",
        "Why is professional CEO management essential for the commercial success of farmer companies?"
      ],
      submissionGuidance: "Submit a detailed FPO Business Analysis Report with completed Business Model Canvas and recommendations."
    },
    {
      id: 9,
      title: "Participatory Rural Appraisal (PRA) Techniques in Village Planning",
      objectives: [
        "Execute core PRA tools: Resource/Social Mapping, Transect Walk, Venn Diagram, and Seasonal Calendar.",
        "Facilitate village community members in generating their own diagnostic data."
      ],
      materialsRequired: ["Rangoli powders", "Seeds and stones", "Chart sheets", "GPS device", "Camera"],
      procedureSteps: [
        "Mobilize 15-20 villagers in a public square; explain that villagers are the experts and students are facilitators.",
        "Step 1: Guide villagers to draw a Social & Resource Map on the ground using colored powders.",
        "Step 2: Conduct a 1-kilometer Transect Walk from ridge to valley bottom, recording soils, crops, and problems.",
        "Step 3: Construct a Venn Diagram (Chapati Diagram) analyzing institutional importance and accessibility.",
        "Step 4: Draw a 12-month Seasonal Calendar charting rainfall, labor peaks, pest attacks, and disease seasons."
      ],
      observationsAndRecording: [
        "Photograph all ground diagrams before copying them accurately onto paper.",
        "Record community consensus on the top 3 priority problems."
      ],
      reflectionQuestions: [
        "How does drawing diagrams on the ground empower non-literate community members?",
        "What does the overlap in a Venn diagram signify regarding village institutional relationships?"
      ],
      submissionGuidance: "Submit the complete PRA Atlas containing full-color reproductions of all 4 PRA tools and a prioritized problem matrix."
    },
    {
      id: 10,
      title: "Exploring Community Radio and Television Program Production for Farmers",
      objectives: [
        "Understand the technical and pedagogical steps in producing agricultural radio and TV broadcasts.",
        "Analyze listener profiles and formatting for rural educational media."
      ],
      materialsRequired: ["Digital audio recorder / smartphone microphone", "Audio editing software (Audacity)", "Headphones"],
      procedureSteps: [
        "Visit a local Community Radio Station (CRS) or All India Radio (AIR) Kisanvani studio.",
        "Interview the station director on broadcast reach, transmission radius, and farmer feedback mechanisms.",
        "Study the studio acoustic setup, directional microphones, and mixing consoles.",
        "Analyze program formats: farmer interviews, expert dialogues, farm dramas, and agro-weather bulletins.",
        "Record ambient village farm sounds (tractor, bird calls, livestock) to use as sound effects."
      ],
      observationsAndRecording: [
        "Record broadcast schedules and peak rural listening hours.",
        "Compare reach and cost per listener of community radio vs commercial FM."
      ],
      reflectionQuestions: [
        "Why is community radio uniquely suited for preserving indigenous dialects and localized farming practices?",
        "What makes a farm radio interview engaging rather than sounding like a boring lecture?"
      ],
      submissionGuidance: "Submit a 2-page studio analysis report and a 1-page programming schedule for a proposed rural community station."
    },
    {
      id: 11,
      title: "Script Writing for Print Media: Farm News, Columns, and Success Stories",
      objectives: [
        "Write professionally structured agricultural news releases and magazine feature columns.",
        "Apply editorial proofreading, fact-checking, and layout principles."
      ],
      materialsRequired: ["Word processor / typewriter", "Agricultural research bulletin references", "Style sheet"],
      procedureSteps: [
        "Select an emerging agricultural technology: 'Bio-Priming of Seeds with Bio-Control Agents'.",
        "Write a 350-word agricultural news press release utilizing the Inverted Pyramid structure.",
        "Draft an engaging, human-interest feature column (600 words) for a rural farming monthly magazine.",
        "Formulate three alternative high-impact headlines and sub-headings.",
        "Include an informative technical sidebar detailing dosages and seed supplier contacts."
      ],
      observationsAndRecording: [
        "Check that the Lead paragraph answers all 5 Ws and 1 H.",
        "Verify that technical terminology is translated into clear vernacular words."
      ],
      reflectionQuestions: [
        "What is the difference in tone and pacing between an urgent news alert and an educational magazine feature?",
        "How can agricultural journalists verify scientific claims before publishing?"
      ],
      submissionGuidance: "Submit the finalized news release and feature article formatted ready for print publication."
    },
    {
      id: 12,
      title: "Radio and Television Script Development for Agricultural Communication",
      objectives: [
        "Write and record a complete 5-minute agricultural radio drama or television demonstration script.",
        "Incorporate sound effects (SFX), spoken dialogue in local dialect, and visual directions."
      ],
      materialsRequired: ["Audio recording gear", "Two-column TV script layout sheet", "Audacity editing software"],
      procedureSteps: [
        "Select a topic: 'Preventing Post-Harvest Storage Losses using Pusa Bins and Hermetic Bags'.",
        "Write a 5-minute Radio Script in two-column format (Audio / SFX): create two conversational characters (Skeptical Farmer and Progressive Neighbor).",
        "Write a 3-minute Television Demonstration Script in two-column format (Video on Left / Audio on Right).",
        "Record the audio drama using fellow students as voice actors, editing in ambient sound effects (chickens, farm background).",
        "Play the audio clip to the class for peer evaluation."
      ],
      observationsAndRecording: [
        "Time the audio recording to verify exact 5-minute runtime (approx. 650 words).",
        "Ensure dialogue sounds natural and colloquial rather than reciting textbook prose."
      ],
      reflectionQuestions: [
        "Why must a radio script rely heavily on vivid descriptive words and sound effects to create 'theatre of the mind'?",
        "What are the formatting conventions for visual transitions (Cut, Dissolve, Pan) in television scripts?"
      ],
      submissionGuidance: "Submit the complete written two-column Radio and TV scripts alongside the finalized MP3 audio recording."
    }
  ]
};

export const aee103Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content,
  unit6Content
];

export const aee103CompleteSubject = {
  metadata: aee103Metadata,
  units: aee103Units
};

export default aee103CompleteSubject;
