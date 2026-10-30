import { UnitContent } from "./types";

export const unit1Content: UnitContent = {
  unitNumber: 1,
  title: "Education",
  shortDescription: "Concepts and types of education, scope and process of extension education, foundational principles, and systematic extension programme planning.",
  estimatedReadTimeMinutes: 18,
  syllabusTopics: [
    "Education: meaning, definition and types (Formal, Non-formal, Informal)",
    "Extension education: meaning, definition, scope and process",
    "Objectives and principles of extension education",
    "Extension programme planning: meaning, process, principles and steps in programme development"
  ],
  notes: {
    learningObjectives: [
      "Distinguish between formal, non-formal, and informal education in agricultural context.",
      "Understand the etymological origin, definitions, and five-stage process of extension education (Leagans' model).",
      "Analyze the fundamental principles of extension education including learning by doing and indigenous knowledge.",
      "Master the 8-step logical framework of extension programme planning and its grassroots execution."
    ],
    sections: [
      {
        id: "sec-1-1",
        heading: "1. Education: Meaning, Definition, and Types",
        content: `Education is the deliberate process of producing desirable changes in human behaviour through the acquisition of knowledge (cognitive), skills (psychomotor), and attitudes (affective). Etymologically, the word 'education' is derived from the Latin roots *educare* (to bring up / to nourish) and *educere* (to lead forth / to extract out).

In the context of rural and agricultural transformation, education serves as an empowering mechanism that enables farming communities to adapt modern scientific practices, enhance resource efficiency, and achieve sustainable livelihoods.`,
        subsections: [
          {
            subheading: "Comparison of Education Types: Formal, Non-Formal, and Informal",
            content: "Education occurs across three recognized modalities, each distinguished by institutionalization, syllabus rigidity, and audience autonomy:",
            table: {
              headers: ["Characteristic", "Formal Education", "Non-Formal Education (Extension)", "Informal Education"],
              rows: [
                ["Institutional Setting", "Classrooms, schools, universities with fixed hierarchy", "Community halls, farmer fields, village squares, Krishi Vigyan Kendras", "Family, social gatherings, market places, daily living"],
                ["Curriculum & Structure", "Rigid, sequential, pre-determined syllabus with formal examinations", "Flexible, needs-based, learner-centric, non-degree, field-oriented", "Unstructured, spontaneous, non-sequential"],
                ["Target Audience", "Homogeneous age cohorts (school/college students)", "Heterogeneous rural adults, farmers, farm women, rural youth", "Universal across lifespan without restriction"],
                ["Instructional Method", "Lecture-dominated, theoretical, standardized grading", "Participatory, demonstrative ('learning by doing'), hands-on", "Incidental observation, imitation, conversation"],
                ["Reward / Motivation", "Degrees, diplomas, certificates, formal academic credentials", "Immediate practical problem-solving, higher crop yields, better income", "Personal satisfaction, cultural assimilation, daily survival"]
              ]
            }
          }
        ]
      },
      {
        id: "sec-1-2",
        heading: "2. Extension Education: Meaning, Scope, and Process",
        content: `The term 'Extension' originated in England in 1866 with the concept of 'University Extension' introduced by James Stuart at Cambridge University to take educational opportunities beyond the physical boundaries of the university to ordinary working people. In agriculture, extension education is an applied behavioral science that communicates research-tested farm technologies to farmers and brings farm field problems back to research stations.

**Key Definitions:**
- **J. Paul Leagans:** "Extension education is an applied science consisting of content derived from research, accumulated field experiences and relevant principles drawn from the behavioral sciences, synthesized with techniques and philosophies into a body of concepts, principles and procedures oriented to providing out-of-school education for adults and youth."
- **Ensminger:** "Extension is an education of rural adults and youth through learning by doing and seeing is believing."`,
        subsections: [
          {
            subheading: "The Scope of Extension Education",
            content: "The operational scope of agricultural extension encompasses: (1) Increasing agricultural efficiency and production; (2) Efficient marketing, distribution, and utilization of farm produce; (3) Conservation and wise management of natural resources; (4) Farm business management and record keeping; (5) Family living and home economics; (6) Youth development and leadership cultivation; and (7) Community development and rural social empowerment.",
            keyPoints: [
              "Two-way bridge: from laboratory/research to land (dissemination), and from land to laboratory (feedback).",
              "Voluntary participation: farmers cannot be coerced; education relies on intrinsic motivation.",
              "Democratic and secular: open to all rural citizens regardless of caste, creed, or landholding size."
            ]
          },
          {
            subheading: "The 5-Stage Extension Educational Process (J. Paul Leagans)",
            content: "Leagans conceptualized the extension education process as a continuous, cyclical matrix comprising five sequential phases:",
            table: {
              headers: ["Phase", "Stage Name", "Key Operational Activities"],
              rows: [
                ["Phase I", "Analysis of Situation", "Gathering baseline facts, village agro-ecological data, existing farmer practices, yield gaps, and resource constraints."],
                ["Phase II", "Determination of Objectives", "Deciding realistic, measurable targets and directions of change (short-term, intermediate, and long-term goals)."],
                ["Phase III", "Teaching and Communication", "Selecting appropriate teaching methods (demonstrations, field days, mass media) and creating an active learning environment."],
                ["Phase IV", "Evaluation of Teaching", "Assessing behavioral changes, technology adoption rate, yield increments, and deviation from original targets."],
                ["Phase V", "Reconsideration & Review", "Refining objectives, methods, and strategies based on evaluation findings, feeding into the next cycle."]
              ]
            }
          }
        ]
      },
      {
        id: "sec-1-3",
        heading: "3. Objectives and Principles of Extension Education",
        content: `The fundamental objective of extension education is the overall development of rural people by helping them to help themselves (*self-help*). Objectives operate at three hierarchical levels:
1. **Fundamental Objectives:** Deep-rooted societal ideals such as democratic rural civilization and personal dignity.
2. **General Objectives:** Broad institutional aims such as increasing agricultural productivity and nutritional security.
3. **Working Objectives:** Specific, measurable, time-bound targets (e.g., training 150 paddy farmers on SRI technique in Kharif season with 20% water saving).`,
        subsections: [
          {
            subheading: "Core Principles of Extension Education",
            content: "Extension work succeeds only when anchored to sound pedagogical and sociological principles:",
            keyPoints: [
              "Principle of Cultural Difference: Every rural community possesses unique traditions, values, and beliefs. Technologies must harmonize with local culture.",
              "Principle of Grassroots Planning: Programmes must commence at the village level addressing the 'felt needs' of local farmers rather than being imposed top-down.",
              "Principle of Indigenous Knowledge: Respecting traditional wisdom and integrating it with modern scientific recommendations.",
              "Principle of Learning by Doing (Seaman A. Knapp): Actual physical practice cements learning and eliminates doubt.",
              "Principle of Seeing is Believing: Result demonstrations visually prove economic and agronomic superiority in farmer field conditions.",
              "Principle of Whole-Family Approach: Engaging farm men, women, and rural youth collaboratively.",
              "Principle of Adaptability: Methods must remain flexible to accommodate unpredictable weather, market volatility, and resource variations."
            ]
          }
        ]
      },
      {
        id: "sec-1-4",
        heading: "4. Extension Programme Planning",
        content: `An extension programme is a written statement comprising four structural elements: (a) Situation, (b) Objectives, (c) Problems, and (d) Solutions. Programme planning is the systematic, democratic decision-making process by which rural people and extension personnel jointly identify problems, determine priorities, and formulate courses of action.`,
        subsections: [
          {
            subheading: "Eight Sequential Steps in Programme Development",
            content: "The classical programme planning cycle involves eight rigorous, chronological steps:",
            table: {
              headers: ["Step", "Action", "Description & Extension Application"],
              rows: [
                ["Step 1", "Collection of Facts", "Surveys, PRA exercises, census data, and meteorological reports to map ground reality."],
                ["Step 2", "Analysis of Situation", "Dissecting gathered facts to identify bottlenecks, resource limitations, and technology adoption gaps."],
                ["Step 3", "Identification of Problems", "Distinguishing real underlying causes from symptoms; prioritizing problems based on economic severity."],
                ["Step 4", "Determination of Objectives & Goals", "Formulating clear, attainable, and quantifiable goals matching available institutional resources."],
                ["Step 5", "Developing Plan of Work and Calendar of Operations", "Assigning who does what, when, where, and with what teaching aids (specifying dates, locations, and responsibilities)."],
                ["Step 6", "Execution of Plan", "Carrying out field demonstrations, trainings, distribution of critical inputs, and advisory services."],
                ["Step 7", "Evaluation of Progress", "Periodic monitoring and post-season evaluation comparing achieved outcomes against planned benchmarks."],
                ["Step 8", "Reconsideration", "Reviewing discrepancies, incorporating farmer feedback, and modifying the next annual plan."]
              ]
            }
          }
        ]
      }
    ],
    keyTakeaways: [
      "Education produces desirable changes in knowledge, skills, and attitudes (K-S-A triad).",
      "Extension is an out-of-school, voluntary, participatory educational system for rural development.",
      "J. Paul Leagans' cycle consists of Situation → Objectives → Teaching → Evaluation → Reconsideration.",
      "Extension teaching is based on Knapp's twin tenets: 'Learning by doing' and 'Seeing is believing'.",
      "Grassroots planning ensures interventions address real 'felt needs' rather than external administrative assumptions."
    ],
    commonMisunderstandings: [
      {
        myth: "Extension education is merely input distribution (seeds and fertilizers) to farmers.",
        reality: "Extension is primarily an educational endeavour designed to build problem-solving competence, decision-making skills, and managerial ability in farmers."
      },
      {
        myth: "Extension programmes must be designed exclusively by agricultural scientists and government officers.",
        reality: "Effective extension programmes must be developed jointly with local farmers at the grassroots level based on their felt needs and indigenous knowledge."
      }
    ],
    summary: "Unit 1 establishes that extension education is a specialized non-formal educational discipline designed to foster agricultural transformation through voluntary behavioral change. Anchored in democratic principles, respect for cultural norms, and rigorous cyclical programme planning, extension serves as the critical knowledge conduit between agricultural research systems and farming communities."
  },
  mcqs: [
    {
      id: "AEE103-U1-MCQ01",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Easy",
      questionText: "The word 'Education' is derived from which Latin root word?",
      options: {
        A: "Educare and Educere",
        B: "Ex-tendere",
        C: "Communis",
        D: "Scientia"
      },
      correctOption: "A",
      explanation: "Education originates from the Latin 'educare' (to bring up / nourish) and 'educere' (to lead forth / extract out)."
    },
    {
      id: "AEE103-U1-MCQ02",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Easy",
      questionText: "Which type of education is non-formal, flexible, need-based, and directed towards rural adults?",
      options: {
        A: "Formal education",
        B: "Extension education",
        C: "Informal education",
        D: "Incidental learning"
      },
      correctOption: "B",
      explanation: "Extension education is a recognized form of non-formal education characterized by flexibility, learner-centeredness, and out-of-school setting."
    },
    {
      id: "AEE103-U1-MCQ03",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Medium",
      questionText: "In Bloom's taxonomy and extension psychology, desirable changes in human behaviour comprise:",
      options: {
        A: "Knowledge, Skills, and Attitudes (K-S-A)",
        B: "Land, Labour, and Capital",
        C: "Planning, Organizing, and Budgeting",
        D: "Input, Output, and Income"
      },
      correctOption: "A",
      explanation: "Educational change targets the cognitive domain (knowledge), psychomotor domain (skills), and affective domain (attitudes)."
    },
    {
      id: "AEE103-U1-MCQ04",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Medium",
      questionText: "Which characteristic strictly distinguishes formal education from non-formal extension education?",
      options: {
        A: "Use of books",
        B: "Rigid curriculum with institutional degree award",
        C: "Learning outcomes",
        D: "Presence of a teacher"
      },
      correctOption: "B",
      explanation: "Formal education is institutionalized, hierarchically structured, and awards degrees, whereas non-formal extension awards practical problem-solving capability without degrees."
    },
    {
      id: "AEE103-U1-MCQ05",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Easy",
      questionText: "Where did the term 'University Extension' first originate in 1866?",
      options: {
        A: "Cambridge University, England",
        B: "Iowa State University, USA",
        C: "Oxford University, England",
        D: "Calcutta University, India"
      },
      correctOption: "A",
      explanation: "The term 'University Extension' was coined in 1866 in England and formally introduced by James Stuart at Cambridge University in 1873."
    },
    {
      id: "AEE103-U1-MCQ06",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "Who defined extension as 'an applied science consisting of content derived from research... oriented to providing out-of-school education'?",
      options: {
        A: "J. Paul Leagans",
        B: "Seaman A. Knapp",
        C: "M.S. Swaminathan",
        D: "Robert Chambers"
      },
      correctOption: "A",
      explanation: "Dr. J. Paul Leagans of Cornell University authored this landmark definition characterizing extension as an applied behavioral science."
    },
    {
      id: "AEE103-U1-MCQ07",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Hard",
      questionText: "According to J. Paul Leagans, the first step in the five-phase extension education process is:",
      options: {
        A: "Determination of objectives",
        B: "Analysis of the situation",
        C: "Teaching and communication",
        D: "Execution of the plan"
      },
      correctOption: "B",
      explanation: "Leagans' cycle begins with 'Analysis of the situation', where baseline facts, resources, and community practices are gathered and examined."
    },
    {
      id: "AEE103-U1-MCQ08",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "The correct sequence of the five phases in Leagans' extension educational process is:",
      options: {
        A: "Situation → Objectives → Teaching → Evaluation → Reconsideration",
        B: "Objectives → Situation → Teaching → Evaluation → Reconsideration",
        C: "Teaching → Situation → Objectives → Evaluation → Reconsideration",
        D: "Situation → Teaching → Objectives → Reconsideration → Evaluation"
      },
      correctOption: "A",
      explanation: "The logical sequence is: 1. Situation, 2. Objectives, 3. Teaching, 4. Evaluation, 5. Reconsideration."
    },
    {
      id: "AEE103-U1-MCQ09",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "Which pioneer is famously regarded as the 'Father of Agricultural Extension Demonstrations'?",
      options: {
        A: "Seaman A. Knapp",
        B: "Norman Borlaug",
        C: "F.L. Brayne",
        D: "Albert Mayer"
      },
      correctOption: "A",
      explanation: "Dr. Seaman A. Knapp pioneered farm field demonstrations in the southern United States in 1903 against the boll weevil pest."
    },
    {
      id: "AEE103-U1-MCQ10",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Easy",
      questionText: "Seaman Knapp's foundational philosophy of agricultural extension is encapsulated in which phrase?",
      options: {
        A: "Learning by doing and seeing is believing",
        B: "Teach from textbooks first",
        C: "Command and control",
        D: "Subsidy-driven adoption"
      },
      correctOption: "A",
      explanation: "Knapp established that what a farmer sees on a neighbouring field and practices with their own hands creates genuine conviction."
    },
    {
      id: "AEE103-U1-MCQ11",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Extension education functions as a two-way channel between:",
      options: {
        A: "Research institutions and farming communities",
        B: "Input dealers and bank managers",
        C: "Civil servants and police departments",
        D: "State capitals and central ministries"
      },
      correctOption: "A",
      explanation: "Extension carries lab findings to farm fields (dissemination) and brings field-level problems and feedback back to research scientists."
    },
    {
      id: "AEE103-U1-MCQ12",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "The principle which states that extension programmes must start where the people are and with what they have is:",
      options: {
        A: "Principle of Cultural Difference",
        B: "Principle of Grassroots / Starting from Existing Situation",
        C: "Principle of External Leadership",
        D: "Principle of Mandatory Quotas"
      },
      correctOption: "B",
      explanation: "Extension must start from the present economic, social, and technological baseline of the village community."
    },
    {
      id: "AEE103-U1-MCQ13",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Hard",
      questionText: "In extension programme terminology, the difference between 'what is' and 'what ought to be' represents a:",
      options: {
        A: "Goal",
        B: "Objective",
        C: "Need / Problem",
        D: "Policy"
      },
      correctOption: "C",
      explanation: "A 'need' is scientifically defined as the gap or distance between the existing situation ('what is') and the desired condition ('what ought to be')."
    },
    {
      id: "AEE103-U1-MCQ14",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Needs that people consciously recognize and express are termed as:",
      options: {
        A: "Felt needs",
        B: "Unfelt needs",
        C: "Latent needs",
        D: "Prescribed needs"
      },
      correctOption: "A",
      explanation: "Felt needs are those of which the people are consciously aware and for whose satisfaction they feel an immediate urge to act."
    },
    {
      id: "AEE103-U1-MCQ15",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Needs which exist in reality but of which rural people are not yet consciously aware are known as:",
      options: {
        A: "Felt needs",
        B: "Unfelt needs",
        C: "Universal needs",
        D: "Basic needs"
      },
      correctOption: "B",
      explanation: "Unfelt needs (such as micronutrient deficiencies or groundwater depletion) require extension education to convert them into felt needs."
    },
    {
      id: "AEE103-U1-MCQ16",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Easy",
      questionText: "The primary philosophical basis of extension education is:",
      options: {
        A: "Helping people to help themselves (self-help)",
        B: "Providing free inputs permanently",
        C: "Enforcing government directives",
        D: "Centralized decision making"
      },
      correctOption: "A",
      explanation: "Extension aims to foster self-reliance, developing local problem-solving capacity rather than perpetual dependency."
    },
    {
      id: "AEE103-U1-MCQ17",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which principle of extension emphasizes involving local farm families in all stages of project design?",
      options: {
        A: "Principle of Participation",
        B: "Principle of Authoritarian Direction",
        C: "Principle of Bureaucracy",
        D: "Principle of Secrecy"
      },
      correctOption: "A",
      explanation: "Active stakeholder participation creates genuine ownership, relevance, and sustainability in rural development initiatives."
    },
    {
      id: "AEE103-U1-MCQ18",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "The 'Whole-Family Approach' in extension education recognizes that:",
      options: {
        A: "Only the male head of the household makes farm decisions",
        B: "Farming is a family enterprise involving men, women, and youth",
        C: "Children should replace adult farm workers",
        D: "Extension applies only to literate family members"
      },
      correctOption: "B",
      explanation: "In Indian agriculture, women and youth perform substantial field, livestock, and post-harvest chores, requiring whole-family engagement."
    },
    {
      id: "AEE103-U1-MCQ19",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Hard",
      questionText: "The principle emphasizing that technologies must not violate established local customs and social taboos is:",
      options: {
        A: "Principle of Cultural Difference and Compatibility",
        B: "Principle of Modernization Imposition",
        C: "Principle of Market Priority",
        D: "Principle of Technical Supremacy"
      },
      correctOption: "A",
      explanation: "Technological recommendations must align with local values, belief systems, and social structures to prevent cultural rejection."
    },
    {
      id: "AEE103-U1-MCQ20",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which level of objectives represents broad, society-wide aspirations such as national food security?",
      options: {
        A: "Working objectives",
        B: "General objectives",
        C: "Fundamental objectives",
        D: "Specific operational goals"
      },
      correctOption: "B",
      explanation: "General objectives are broad institutional goals, distinct from fundamental (societal philosophy) and working (concrete field targets)."
    },
    {
      id: "AEE103-U1-MCQ21",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Easy",
      questionText: "An extension programme document is composed of which four primary elements?",
      options: {
        A: "Situation, Objectives, Problems, and Solutions",
        B: "Budget, Staff, Vehicles, and Buildings",
        C: "Inputs, Tractors, Subsidies, and Taxes",
        D: "Notice, Agenda, Minutes, and Votes"
      },
      correctOption: "A",
      explanation: "Classic extension programme planning defines a programme through the quartet: Situation, Objectives, Problems, and Solutions."
    },
    {
      id: "AEE103-U1-MCQ22",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "A 'Plan of Work' in extension differs from an extension programme because it specifies:",
      options: {
        A: "Who, What, When, Where, and How actions are executed",
        B: "Only long-term visions over 25 years",
        C: "Government political manifestos",
        D: "Disciplinary rules for staff"
      },
      correctOption: "A",
      explanation: "The Plan of Work is the operational schedule detailing specific responsibilities, locations, dates, and teaching aids."
    },
    {
      id: "AEE103-U1-MCQ23",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "How many standardized steps are recognized in the classic extension programme development cycle?",
      options: {
        A: "Three",
        B: "Five",
        C: "Eight",
        D: "Twelve"
      },
      correctOption: "C",
      explanation: "The standard extension programme development process consists of eight sequential steps from fact collection to reconsideration."
    },
    {
      id: "AEE103-U1-MCQ24",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "In the 8-step programme planning cycle, which step immediately follows 'Analysis of Situation'?",
      options: {
        A: "Execution of plan",
        B: "Identification of problems",
        C: "Evaluation",
        D: "Reconsideration"
      },
      correctOption: "B",
      explanation: "Analyzing the situation uncovers underlying bottlenecks, directly leading to Step 3: Identification of problems."
    },
    {
      id: "AEE103-U1-MCQ25",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "The final step (Step 8) in the extension programme development process is:",
      options: {
        A: "Reconsideration and refinement",
        B: "Staff promotion",
        C: "Closing the file",
        D: "Budget expansion"
      },
      correctOption: "A",
      explanation: "Reconsideration closes the loop, allowing extension workers and farmers to review results and modify future plans."
    },
    {
      id: "AEE103-U1-MCQ26",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "Why is 'Collection of Facts' placed at the very start of programme planning?",
      options: {
        A: "To fulfill paperwork formalities",
        B: "To ensure interventions are grounded in actual local reality and resource data",
        C: "To delay programme implementation",
        D: "To verify staff attendance"
      },
      correctOption: "B",
      explanation: "Without accurate baseline facts regarding soil, cropping systems, yields, and demographics, any extension plan will be unrealistic."
    },
    {
      id: "AEE103-U1-MCQ27",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "The participatory tool widely used in extension for fact collection and village appraisal is:",
      options: {
        A: "PRA (Participatory Rural Appraisal)",
        B: "SWIFT",
        C: "CAD / CAM",
        D: "ERP software"
      },
      correctOption: "A",
      explanation: "PRA enables rural people to express, share, and analyze their own living conditions and prioritize problems collaboratively."
    },
    {
      id: "AEE103-U1-MCQ28",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "A 'Calendar of Operations' is an essential component of which planning step?",
      options: {
        A: "Developing the Plan of Work",
        B: "Collection of Facts",
        C: "Reconsideration",
        D: "Selection of Scientists"
      },
      correctOption: "A",
      explanation: "The Calendar of Operations fixes the chronological schedule of seasonal farming operations and corresponding extension activities."
    },
    {
      id: "AEE103-U1-MCQ29",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which of the following is NOT an established principle of extension education?",
      options: {
        A: "Principle of Indigenous Knowledge",
        B: "Principle of Coercive Adoption",
        C: "Principle of Adaptability",
        D: "Principle of Leadership"
      },
      correctOption: "B",
      explanation: "Extension education is strictly voluntary and educational; coercion or authoritarian enforcement violates its fundamental ethos."
    },
    {
      id: "AEE103-U1-MCQ30",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Hard",
      questionText: "In Leagans' model, what connects 'Objectives' to 'Evaluation'?",
      options: {
        A: "Teaching and learning activities",
        B: "Tax revenue collection",
        C: "Police verification",
        D: "Political speeches"
      },
      correctOption: "A",
      explanation: "Teaching is the educational vehicle through which objectives are translated into student learning and subsequently evaluated."
    },
    {
      id: "AEE103-U1-MCQ31",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Easy",
      questionText: "Informal education is best characterized as:",
      options: {
        A: "Lifelong, unorganized, and acquired through daily life experiences",
        B: "Classroom teaching with term exams",
        C: "Degree programmes at university",
        D: "Structured vocational apprenticeship"
      },
      correctOption: "A",
      explanation: "Informal education is the truly lifelong process whereby every individual acquires attitudes, values, and skills from daily experience."
    },
    {
      id: "AEE103-U1-MCQ32",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "The Latin word 'tendere' in extension's root 'ex-tendere' literally means:",
      options: {
        A: "To stretch",
        B: "To harvest",
        C: "To teach",
        D: "To cultivate"
      },
      correctOption: "A",
      explanation: "'Ex' means out and 'tendere' means to stretch; extension literally means stretching or reaching educational work out to the people."
    },
    {
      id: "AEE103-U1-MCQ33",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which of the following describes the cognitive domain in extension learning?",
      options: {
        A: "Developing understanding of fertilizer calculation",
        B: "Mastering the physical skill of knapsack sprayer calibration",
        C: "Developing a positive inclination towards organic farming",
        D: "Sweating during field work"
      },
      correctOption: "A",
      explanation: "Cognitive domain pertains to mental understanding, facts, concepts, and intellectual calculation."
    },
    {
      id: "AEE103-U1-MCQ34",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Calibrating a spray nozzle or grafting a fruit plant belongs to which behavioral domain?",
      options: {
        A: "Psychomotor domain (Skill)",
        B: "Cognitive domain (Knowledge)",
        C: "Affective domain (Attitude)",
        D: "Spiritual domain"
      },
      correctOption: "A",
      explanation: "Physical handling, manual dexterity, and practical manipulation belong to the psychomotor domain."
    },
    {
      id: "AEE103-U1-MCQ35",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "A farmer developing an appreciation for soil health testing reflects a change in the:",
      options: {
        A: "Affective domain (Attitude)",
        B: "Cognitive domain (Knowledge)",
        C: "Psychomotor domain (Skill)",
        D: "Biological domain"
      },
      correctOption: "A",
      explanation: "Feelings, values, appreciation, and motivation belong to the affective domain."
    },
    {
      id: "AEE103-U1-MCQ36",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "In programme planning, a 'Goal' is distinguished from an 'Objective' because a goal is:",
      options: {
        A: "A broader direction of movement, whereas an objective is a specific measurable milestone",
        B: "Written in Latin",
        C: "Set only by the central cabinet",
        D: "Always monetary"
      },
      correctOption: "A",
      explanation: "Goals represent broad overarching directions; objectives are concrete, measurable, and time-bound steps towards those goals."
    },
    {
      id: "AEE103-U1-MCQ37",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "SMART criteria for formulating extension objectives mandates that objectives must be:",
      options: {
        A: "Specific, Measurable, Attainable, Realistic, and Time-bound",
        B: "Simple, Massive, Authoritarian, Rapid, and Traditional",
        C: "Social, Mechanical, Agricultural, Rural, and Technical",
        D: "State-funded, Managed, Audited, Reported, and Taxable"
      },
      correctOption: "A",
      explanation: "SMART is the universal acronym for high-quality objective formulation in extension management."
    },
    {
      id: "AEE103-U1-MCQ38",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Easy",
      questionText: "The principle of 'Leadership' in extension education stresses:",
      options: {
        A: "Identifying and training democratic local rural leaders to multiply extension impact",
        B: "Appointing external political bosses in villages",
        C: "Ignoring local opinions",
        D: "Running extension through authoritarian decree"
      },
      correctOption: "A",
      explanation: "Local opinion leaders bridge the cultural gap between scientists and villagers, dramatically accelerating technology adoption."
    },
    {
      id: "AEE103-U1-MCQ39",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "Which agricultural extension approach relies heavily on 'seeing is believing'?",
      options: {
        A: "Result demonstration",
        B: "Circular letter",
        C: "Radio talk",
        D: "Administrative order"
      },
      correctOption: "A",
      explanation: "A result demonstration is conducted by a farmer under extension supervision to prove the superiority of a new practice over local control."
    },
    {
      id: "AEE103-U1-MCQ40",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "The process of determining how well the desired outcomes of an extension programme have been achieved is:",
      options: {
        A: "Evaluation",
        B: "Planning",
        C: "Budgeting",
        D: "Auditing"
      },
      correctOption: "A",
      explanation: "Evaluation compares observed results against planned objectives to judge programme efficiency and effectiveness."
    },
    {
      id: "AEE103-U1-MCQ41",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "An evaluation conducted while an extension project is currently in progress to make mid-course corrections is known as:",
      options: {
        A: "Formative / On-going evaluation",
        B: "Summative / Ex-post evaluation",
        C: "Ex-ante appraisal",
        D: "Fiscal audit"
      },
      correctOption: "A",
      explanation: "Formative evaluation provides concurrent feedback to fix operational bottlenecks while the project is underway."
    },
    {
      id: "AEE103-U1-MCQ42",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "An evaluation conducted after the completion of an extension project to measure total impact is called:",
      options: {
        A: "Summative / Ex-post evaluation",
        B: "Formative evaluation",
        C: "Diagnostic pre-test",
        D: "Baseline survey"
      },
      correctOption: "A",
      explanation: "Summative evaluation assesses overall end results, yield changes, and socioeconomic return on investment."
    },
    {
      id: "AEE103-U1-MCQ43",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Easy",
      questionText: "In which educational form does the learner decide what, when, and whether to learn?",
      options: {
        A: "Non-formal extension education",
        B: "Compulsory schooling",
        C: "Court-mandated re-education",
        D: "Prison training"
      },
      correctOption: "A",
      explanation: "Voluntary learner agency is the hallmark of non-formal adult extension education."
    },
    {
      id: "AEE103-U1-MCQ44",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "The principle stating that extension programmes must have built-in flexibility to accommodate drought or pest outbreaks is:",
      options: {
        A: "Principle of Adaptability / Flexibility",
        B: "Principle of Rigid Compliance",
        C: "Principle of Standard Uniformity",
        D: "Principle of Fixed Calendar"
      },
      correctOption: "A",
      explanation: "Agriculture is subject to weather unpredictability; extension programmes must rapidly adapt to changing field realities."
    },
    {
      id: "AEE103-U1-MCQ45",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which is a 'Working Objective' for a Krishi Vigyan Kendra in Punjab?",
      options: {
        A: "Train 80 farmers on Happy Seeder machine usage before October 25 to reduce paddy residue burning by 30%",
        B: "Promote world peace and harmony",
        C: "Achieve national industrial progress",
        D: "Eradicate poverty everywhere"
      },
      correctOption: "A",
      explanation: "Option A is specific, measurable, localized, and time-bound—fulfilling all criteria of a working objective."
    },
    {
      id: "AEE103-U1-MCQ46",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Hard",
      questionText: "Extension education is categorized as which type of science?",
      options: {
        A: "Applied behavioral science",
        B: "Pure physical science",
        C: "Theoretical astrophysics",
        D: "Abstract geometry"
      },
      correctOption: "A",
      explanation: "Extension synthesizes sociology, psychology, communication, and agronomy into an applied behavioral science."
    },
    {
      id: "AEE103-U1-MCQ47",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "In extension programme planning, prioritizing problems based on their severity is done during:",
      options: {
        A: "Identification of problems",
        B: "Purchasing stationery",
        C: "Submitting expense claims",
        D: "Closing remarks"
      },
      correctOption: "A",
      explanation: "Step 3 involves separating root problems from superficial symptoms and ranking them based on economic and social urgency."
    },
    {
      id: "AEE103-U1-MCQ48",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "The principle of 'Cooperation and Association' in extension means:",
      options: {
        A: "Collaborating with local institutions like Panchayats, cooperatives, and youth clubs",
        B: "Operating in total isolation",
        C: "Ignoring local administrative bodies",
        D: "Competing aggressively against other development agencies"
      },
      correctOption: "A",
      explanation: "Working in harmony with existing village organizations establishes synergy and prevents wasteful duplication of effort."
    },
    {
      id: "AEE103-U1-MCQ49",
      syllabusTopic: "Education: meaning, definition and types",
      difficulty: "Easy",
      questionText: "Learning farming skills while assisting one's parents on ancestral land is an example of:",
      options: {
        A: "Informal education",
        B: "Formal university degree",
        C: "Non-formal workshop",
        D: "Distance learning course"
      },
      correctOption: "A",
      explanation: "Intergenerational learning through daily socialization and farm chore participation is quintessential informal education."
    },
    {
      id: "AEE103-U1-MCQ50",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "Which of the following is considered an essential prerequisite for effective extension teaching?",
      options: {
        A: "Establishing rapport and mutual trust with rural people",
        B: "Wearing expensive formal suits in muddy fields",
        C: "Displaying administrative arrogance",
        D: "Using obscure foreign jargon"
      },
      correctOption: "A",
      explanation: "Extension is a people-to-people profession; genuine empathy and mutual trust are non-negotiable foundations for learning."
    },
    {
      id: "AEE103-U1-MCQ51",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "A clear difference between an extension programme and an extension project is that a project is:",
      options: {
        A: "A specific, time-bound activity with dedicated funding addressing a single problem",
        B: "A permanent government constitution",
        C: "A philosophical manifesto without budget",
        D: "A verbal speech"
      },
      correctOption: "A",
      explanation: "A project has a distinct start and finish date, earmarked budget, and targeted deliverable, whereas a programme is a comprehensive ongoing plan."
    },
    {
      id: "AEE103-U1-MCQ52",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which statement best reflects the 'Principle of Evaluation' in extension?",
      options: {
        A: "Evaluation is a continuous diagnostic mechanism that guides programme improvement",
        B: "Evaluation is conducted only to punish underperforming staff",
        C: "Evaluation is useless once money is spent",
        D: "Evaluation should be avoided to prevent criticism"
      },
      correctOption: "A",
      explanation: "Evaluation provides scientific feedback on whether educational objectives were achieved, illuminating strengths and weaknesses."
    },
    {
      id: "AEE103-U1-MCQ53",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Easy",
      questionText: "Which target group forms the foundational focus of agricultural extension?",
      options: {
        A: "Farmers, farm women, and rural youth",
        B: "Urban software developers",
        C: "Stock market traders",
        D: "Airline pilots"
      },
      correctOption: "A",
      explanation: "Agricultural extension is explicitly designed for farming families and rural communities."
    },
    {
      id: "AEE103-U1-MCQ54",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "The principle recognizing that farm women contribute up to 70% of agricultural operations in many regions is:",
      options: {
        A: "Whole-Family Approach",
        B: "Urban Centric Approach",
        C: "Top-Down Approach",
        D: "Commercialization Only"
      },
      correctOption: "A",
      explanation: "Gender-inclusive extension recognizes the critical role of women in sowing, weeding, harvesting, and dairy management."
    },
    {
      id: "AEE103-U1-MCQ55",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "When an extension officer gathers meteorological data, soil test values, and village crop yields, they are executing:",
      options: {
        A: "Collection of facts",
        B: "Summative evaluation",
        C: "Reconsideration",
        D: "Punitive auditing"
      },
      correctOption: "A",
      explanation: "Step 1 of programme planning is the gathering of empirical facts from secondary sources and field surveys."
    },
    {
      id: "AEE103-U1-MCQ56",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Medium",
      questionText: "Programme planning that originates from village assemblies and moves upwards through block and district levels is:",
      options: {
        A: "Bottom-up (Grassroots) planning",
        B: "Top-down bureaucratic planning",
        C: "Command economy planning",
        D: "Colonial directive planning"
      },
      correctOption: "A",
      explanation: "Bottom-up planning ensures genuine representation of local priorities and empowers the community."
    },
    {
      id: "AEE103-U1-MCQ57",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Easy",
      questionText: "Which of the following is an example of an Affective educational outcome in extension?",
      options: {
        A: "A farmer feels confident and motivated to adopt drip irrigation",
        B: "A farmer calculates liters per hour of drip discharge",
        C: "A farmer repairs a broken lateral pipe",
        D: "A farmer buys plastic pipes"
      },
      correctOption: "A",
      explanation: "Confidence, conviction, and positive emotional orientation represent the affective learning domain."
    },
    {
      id: "AEE103-U1-MCQ58",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      difficulty: "Medium",
      questionText: "Why is 'Reconsideration' the fifth step in Leagans' extension cycle rather than 'Termination'?",
      options: {
        A: "Because rural development is a continuous, evolving process without an arbitrary endpoint",
        B: "Because extension staff cannot be transferred",
        C: "Because files must never be archived",
        D: "Because farmers never learn"
      },
      correctOption: "A",
      explanation: "Solving one problem creates new aspirations and challenges, making extension an ongoing spiral of rural progress."
    },
    {
      id: "AEE103-U1-MCQ59",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      difficulty: "Hard",
      questionText: "In extension programme planning, differentiating between 'symptom' and 'problem' is critical because:",
      options: {
        A: "Treating symptoms (e.g. debt) without addressing root causes (e.g. crop failure due to spurious seeds) fails permanently",
        B: "It saves paper in reports",
        C: "It is required by grammar rules",
        D: "Symptoms are always medical"
      },
      correctOption: "A",
      explanation: "Effective programmes diagnose and solve fundamental causes (poor seed quality, lack of drainage) rather than superficial symptoms."
    },
    {
      id: "AEE103-U1-MCQ60",
      syllabusTopic: "Objectives and principles of extension education",
      difficulty: "Medium",
      questionText: "Which statement summarizes the ultimate mission of agricultural extension education?",
      options: {
        A: "Fostering progressive, self-reliant, and economically prosperous rural farm families through scientific education",
        B: "Replacing family farming with corporate factories",
        C: "Forcing rural youth to abandon farming",
        D: "Maximizing chemical fertilizer consumption regardless of soil health"
      },
      correctOption: "A",
      explanation: "Extension's holistic goal is the empowerment and prosperity of rural people through sustainable science and democratic self-help."
    }
  ],
  subjectiveQuestions: [
    {
      id: "AEE103-U1-SUB01",
      questionType: "DEFINITION",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Education: meaning, definition and types",
      questionText: "Define education. Differentiate between formal, non-formal, and informal education with relevant agricultural examples.",
      modelAnswer: `Education is the systematic process of bringing about desirable changes in human behaviour through the acquisition and transformation of knowledge, skills, and attitudes.

1. Formal Education:
- Characteristics: Highly institutionalized, chronologically graded, hierarchically structured educational system from primary school to university. Possesses rigid curricula and awards recognized diplomas/degrees.
- Agricultural Example: Enrolling in a 4-year B.Sc. (Hons.) Agriculture degree programme at an accredited state agricultural university following an entrance exam and fixed syllabus.

2. Non-Formal Education (Extension Education):
- Characteristics: Organized, systematic educational activity conducted outside the traditional school framework to provide selected types of learning to specific sub-groups of the population (adults, farmers, rural youth). Highly flexible, learner-centred, need-based, with no degrees awarded.
- Agricultural Example: A 3-day practical training on bee-keeping or polyhouse nursery management conducted by a Krishi Vigyan Kendra (KVK) for practicing farmers.

3. Informal Education:
- Characteristics: The lifelong, unorganized process whereby every individual acquires knowledge, values, and skills from daily life experiences and environmental influences (family, peers, market).
- Agricultural Example: A young boy learning the seasonal signs of monsoon arrival and bullock handling by observing his father working in the field since childhood.`,
      outlinePoints: [
        "Etymological root and behavioral definition of education (K-S-A triad)",
        "Formal education: institutionalized, rigid curriculum, degree awarding (e.g., B.Sc. Agri)",
        "Non-formal education: out-of-school, need-based, practical problem solving (e.g., KVK training)",
        "Informal education: lifelong, incidental, observational learning (e.g., parental farm socialization)"
      ]
    },
    {
      id: "AEE103-U1-SUB02",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Medium",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      questionText: "Explain J. Paul Leagans' concept of the Extension Educational Process. Illustrate all five phases with a real-world agricultural scenario.",
      modelAnswer: `Dr. J. Paul Leagans conceptualized extension education not as a single disconnected event, but as a continuous, dynamic, five-phase cyclical process.

The Five Phases of Leagans' Extension Educational Process:

1. Phase I: Analysis of the Situation
- Focus: Ascertaining baseline facts regarding people, their physical environment, current farm practices, and institutional infrastructure.
- Scenario Application: In a cluster of villages in Punjab, baseline data reveals that 85% of paddy farmers practice post-harvest stubble burning, leading to severe smog and soil microbial loss. Available Happy Seeder machinery is underutilized due to lack of operational know-how and misconceptions about yield depression.

2. Phase II: Determination of Objectives
- Focus: Deciding realistic, measurable targets that address the identified problems and establish the direction of desirable change.
- Scenario Application: Formulating the working objective: "Train 200 progressive farmers in 4 target villages on Happy Seeder operation and zero-tillage wheat sowing during October, aiming for 100% residue retention on 500 hectares with no yield reduction."

3. Phase III: Teaching and Communication
- Focus: Creating effective learning situations by selecting, combining, and executing appropriate extension teaching methods.
- Scenario Application: Extension personnel conduct method demonstrations on calibrating Happy Seeder tractors, set up front-line result demonstrations comparing conventional vs zero-till wheat plots, distribute visual diagnostic folders, and organize field days during the crown root initiation (CRI) stage.

4. Phase IV: Evaluation of Teaching
- Focus: Measuring the extent to which planned objectives were achieved and identifying deviations in farmer adoption or performance.
- Scenario Application: Post-harvest data shows that 165 out of 200 trained farmers completely refrained from burning residue. Wheat yield in zero-till plots averaged 48.5 q/ha compared to 47.8 q/ha in burned plots, while saving ₹3,200/ha in field preparation costs.

5. Phase V: Reconsideration and Feedback
- Focus: Reviewing the entire cycle, examining remaining gaps, and feeding insights into the next seasonal plan.
- Scenario Application: Evaluation revealed that smallholders with tractors under 45 HP could not run heavy Happy Seeders. Reconsideration leads to incorporating Super Seeder and Surface Seeding technology options into the next annual extension work plan.`,
      outlinePoints: [
        "Introduction to Leagans' cyclical model",
        "Phase I: Analysis of Situation (gathering baseline agro-ecological facts)",
        "Phase II: Determination of Objectives (SMART objective formulation)",
        "Phase III: Teaching and Communication (demonstrations, media mix)",
        "Phase IV: Evaluation (measuring behavioral and economic outcomes)",
        "Phase V: Reconsideration (feedback loop feeding next cycle)",
        "Consistent real-world agricultural scenario (paddy stubble / in-situ residue management)"
      ]
    },
    {
      id: "AEE103-U1-SUB03",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Hard",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      questionText: "Discuss the eight sequential steps involved in the extension programme development process. Why is grassroots planning superior to top-down bureaucratic planning?",
      modelAnswer: `Extension Programme Planning is the systematic, democratic decision-making process by which rural people and extension personnel jointly analyze situations, identify problems, determine priorities, and formulate courses of action.

The Eight Sequential Steps in Extension Programme Development:

1. Collection of Facts:
Gathering comprehensive demographic, physical, agronomic, and socioeconomic baseline data using field surveys, PRA tools, village land records, and weather archives.

2. Analysis of Situation:
Examining the collected facts in collaboration with local farmers to understand current productivity levels, input availability, credit access, and marketing infrastructure.

3. Identification of Problems:
Distinguishing fundamental causes from superficial symptoms. For instance, low pulse yields may be attributed not simply to 'bad luck', but to yellow mosaic virus transmitted by whiteflies combined with non-certified seed usage.

4. Determination of Objectives and Goals:
Formulating clear, attainable, and quantifiable goals matching available institutional resources and community urgency.

5. Developing Plan of Work and Calendar of Operations:
Drafting an operational document that answers Who, What, When, Where, and How. The Calendar of Operations synchronizes extension interventions with crop phenology.

6. Execution of Plan:
Implementing field activities: conducting method and result demonstrations, organizing farmer training camps, distributing critical minikits, and broadcasting pest alerts.

7. Evaluation of Progress:
Continuously monitoring process parameters and conducting post-harvest summative evaluations to measure adoption percentage and economic benefit.

8. Reconsideration:
Reflecting on successes and shortfalls with village leadership, updating situation data, and refining objectives for the subsequent agricultural season.

Why Grassroots Planning is Superior to Top-Down Bureaucratic Planning:
- Alignment with Felt Needs: Top-down schemes frequently supply unneeded implements; grassroots planning targets the real problems felt by villagers.
- High Ownership and Commitment: When farmers participate in designing programmes, they actively protect and sustain interventions instead of viewing them as foreign government impositions.
- Harnessing Indigenous Knowledge: Local farmers possess generations of experiential wisdom regarding local soil micro-variations and climate patterns, which technocrats often overlook.
- Enhanced Cost-Effectiveness: Democratic involvement prevents wasteful expenditure on culturally inappropriate technologies.`,
      outlinePoints: [
        "Definition of extension programme planning",
        "Chronological explanation of all 8 steps from Fact Collection to Reconsideration",
        "Detailing Plan of Work and Calendar of Operations",
        "Critical comparative analysis: Grassroots (bottom-up) vs Top-down bureaucratic planning",
        "Principles of felt needs, community ownership, and indigenous knowledge integration"
      ]
    },
    {
      id: "AEE103-U1-SUB04",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "Examine the significance of the 'Principle of Cultural Difference' in agricultural extension. What happens when extension ignores cultural norms?",
      modelAnswer: `The Principle of Cultural Difference recognizes that every rural community possesses unique traditions, customs, values, dietary habits, and social structures that dictate human behavior. Extension personnel must perceive these cultural frameworks from the villagers' viewpoint.

Significance in Agricultural Extension:
1. Communication Resonance: Messages framed within local cultural metaphors and idioms receive faster psychological acceptance.
2. Preventing Rejection: Even scientifically superior technologies are discarded if they conflict with deep-rooted religious beliefs, dietary preferences, or social status symbols.

Consequences of Ignoring Cultural Norms:
- Technology Boycott: Introducing piggery or poultry in orthodox communities where handling such livestock is socially stigmatized leads to outright rejection regardless of profitability.
- Loss of Credibility: Extension workers who inadvertently violate cultural etiquette (e.g., disrespecting village elders or disregarding gender segregation customs) lose the trust of the community.
- Socio-Cultural Disruption: Imposing technologies that disrupt traditional communal labor sharing (like collective harvesting) can fracture village social cohesion.`,
      outlinePoints: [
        "Concept and definition of the Principle of Cultural Difference",
        "Importance in establishing communicative resonance and trust",
        "Specific examples of agricultural failure due to cultural neglect",
        "Best practices: cultural empathy, consultation with elders, local adaptation"
      ]
    },
    {
      id: "AEE103-U1-SUB05",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "Differentiate between 'Felt Needs' and 'Unfelt Needs' in extension education. How does an extension worker convert unfelt needs into felt needs?",
      modelAnswer: `In extension education, a need is defined as the gap between 'what is' (current status) and 'what ought to be' (desirable condition).

1. Felt Needs:
- Needs consciously recognized, experienced, and articulated by the people themselves.
- Example: Farmers demanding urgent repair of an irrigation canal or demanding chemical pesticides during a sudden locust invasion.

2. Unfelt Needs:
- Needs that exist in objective reality but of which the community remains unconscious due to lack of scientific awareness or tradition.
- Example: Micronutrient zinc deficiency in soil causing hidden hunger in crops, or chronic arsenic contamination in drinking water.

Process of Converting Unfelt Needs into Felt Needs:
1. Creating Awareness: Utilizing audio-visual aids, village posters, and short documentary screenings illustrating the hidden damage.
2. Comparative Result Demonstrations: Setting up side-by-side plots where one receives zinc sulfate and the other does not, visually demonstrating the vigorous tillering and extra yield ('seeing is believing').
3. Participatory Diagnostics: Organizing soil health testing camps where farmers witness chemical reactions and receive simple color-coded Soil Health Cards.
4. Discussion with Opinion Leaders: Engaging progressive village leaders who comprehend the issue and discuss it at local teashops and Panchayat meetings.`,
      outlinePoints: [
        "Definition of Need as the gap between 'what is' and 'what ought to be'",
        "Comparison table: Felt vs Unfelt needs with concrete farm examples",
        "Four-stage mechanism for converting unfelt needs into felt needs (Awareness → Demonstrations → Diagnostics → Local opinion leaders)"
      ]
    },
    {
      id: "AEE103-U1-SUB06",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "Explain the philosophy of 'Learning by Doing' established by Dr. Seaman A. Knapp. Why is it vital in adult farmer education?",
      modelAnswer: `Dr. Seaman A. Knapp pioneered the concept that adult farmers are practical empiricists who learn most effectively through active, physical participation. His foundational philosophy rests on two interlinked tenets: 'Learning by doing' and 'Seeing is believing'.

Why It is Vital in Adult Farmer Education:
1. Higher Retention Rates: Educational research indicates that adults retain only 20% of what they hear, 30% of what they see, but up to 90% of what they verbally explain and physically perform with their own hands.
2. Psychomotor Mastery: Agriculture is an applied physical trade. Operations like drone piloting, sprayer nozzle calibration, vermicompost bed layering, and bud grafting cannot be mastered through classroom lectures; they require muscle memory and hands-on practice.
3. Overcoming Skepticism: Resource-poor farmers risk their family livelihood when adopting new technology. When they execute the practice themselves under expert guidance and witness the outcome, fear of failure is replaced by genuine self-confidence.`,
      outlinePoints: [
        "Seaman A. Knapp's core philosophy: Learning by doing and Seeing is believing",
        "Adult learning psychology (retention rates: hearing vs seeing vs doing)",
        "Development of psychomotor skills and muscle memory in farm operations",
        "De-risking technology adoption and building farmer self-confidence"
      ]
    },
    {
      id: "AEE103-U1-SUB07",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Hard",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      questionText: "Discuss the scope of extension education in modern Indian agriculture. How has the scope broadened from mere production enhancement to agribusiness and sustainable development?",
      modelAnswer: `Historically, post-independence extension in India was preoccupied with physical food grain production to avert famines. However, the contemporary scope of extension education has broadened into a multi-dimensional rural empowerment discipline.

Comprehensive Scope of Extension Education:

1. Agricultural Production and Technical Efficiency:
Disseminating high-yielding varieties, integrated nutrient management (INM), precision irrigation, and integrated pest management (IPM) to maximize output per drop and per unit area.

2. Farm Business Management and Record Keeping:
Training farmers to transition from subsistence farming to commercial enterprise management: computing cost of cultivation (C1, C2, C3), profit-loss analysis, crop insurance (PMFBY), and agricultural credit management.

3. Post-Harvest Management and Value Addition:
Educating farmers on grading, sorting, cold-chain storage, primary food processing, and packaging to minimize 15-20% post-harvest perishable losses.

4. Market-Led Extension and Supply Chain Integration:
Providing real-time market intelligence (e-NAM, Agmarknet), connecting Farmer Producer Organizations (FPOs) directly with institutional buyers, eliminating predatory middlemen, and promoting contract farming.

5. Conservation of Natural Resources:
Promoting climate-resilient agriculture, soil carbon enhancement, drip fertigation, rainwater harvesting, and bio-waste management (parali management).

6. Gender Mainstreaming and Family Welfare:
Empowering farm women through self-help groups (SHGs), drudgery reduction tools, nutritional kitchen gardens, and micro-enterprises (mushroom, apiculture).

7. Rural Youth Mobilization and Agripreneurship:
Training rural youth to establish Agri-Clinics and Agri-Business Centres (ACABC), custom hiring centres (CHCs), and digital input-advisory hubs.`,
      outlinePoints: [
        "Historical perspective: shift from famine-avoidance productionism to modern agribusiness",
        "Core domains: Production efficiency, Farm business management, Post-harvest value addition",
        "Market-led extension and digital intelligence (e-NAM, FPOs)",
        "Natural resource conservation and climate resilience",
        "Inclusion of women, youth, and entrepreneurial ecosystems"
      ]
    },
    {
      id: "AEE103-U1-SUB08",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      questionText: "What is a 'Calendar of Operations' in extension? Why is it crucial in agricultural planning?",
      modelAnswer: `A Calendar of Operations is an operational document within the extension Plan of Work that chronologically schedules every educational activity, field intervention, and input requirement against specific calendar dates and seasonal crop stages.

Key Components:
- Specific date or week of execution.
- Target village or location.
- Extension activity (e.g., seed treatment method demonstration, field day).
- Responsible extension officer and farmer leaders.
- Teaching materials and critical inputs required.

Crucial Importance in Agricultural Planning:
1. Biological Synchronization: Agricultural tasks are bound by strict biological windows (e.g., wheat must be sown within optimal thermal windows in November). An extension campaign on seed treatment executed two weeks after sowing is totally worthless.
2. Resource Mobilization: Ensures teaching aids, diagnostic kits, transport, and expert speakers are assembled before the field season commences.
3. Workload Balance: Prevents concentration of all activities into single months, ensuring steady field contact throughout the year.`,
      outlinePoints: [
        "Definition and structural components of a Calendar of Operations",
        "Synchronization with biological crop phenology and seasonal weather",
        "Logistical resource planning and staff responsibility allocation",
        "Prevention of delayed or irrelevant extension interventions"
      ]
    },
    {
      id: "AEE103-U1-SUB09",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "Explain the 'Whole-Family Approach' in agricultural extension. Why did earlier male-dominated extension approaches fail?",
      modelAnswer: `The Whole-Family Approach is an extension principle which recognizes that the farm household functions as an integrated economic and social unit. Extension interventions must therefore actively target farm men, farm women, and rural youth collaboratively rather than treating the male household head as the sole farmer.

Why Earlier Male-Centric Approaches Failed:
1. Misaligned Decision Making: In India, while men frequently purchase commercial inputs, women execute up to 70% of actual field operations (seed selection, sowing, weeding, harvesting, winnowing, and milking dairy cattle). Educating only men created a severe knowledge barrier at the point of field execution.
2. Neglect of Livestock and Post-Harvest Operations: Dairying, backyard poultry, seed storage, and grain drying are traditionally managed by women. Male-oriented training neglected these vital household income streams.
3. Generational Disconnect: Excluding rural youth led to farming being perceived as an unprofitable, low-status chore, accelerating distress rural-to-urban youth migration. Engaging youth in modern digital farm technologies (polyhouses, precision drones) ensures generational continuity.`,
      outlinePoints: [
        "Definition of the Whole-Family Approach in extension",
        "Empirical reality of women's labor in Indian agriculture",
        "Failure points of male-centric extension models",
        "Youth mobilization for sustainable agricultural continuation"
      ]
    },
    {
      id: "AEE103-U1-SUB10",
      questionType: "CASE_STUDY",
      maxMarks: 5,
      difficulty: "Hard",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      questionText: "Case Study: An extension officer is posted to an arid village where farmers suffer heavy yield losses in mustard due to aphid attacks. Formulate SMART working objectives for an integrated pest management (IPM) extension programme.",
      modelAnswer: `Context: Arid village experiencing severe mustard aphid (*Lipaphis erysimi*) infestations with heavy economic yield losses.

Formulation of SMART Working Objectives:

1. Specific (S):
To train 120 mustard-growing farmers across two target Gram Panchayats on Integrated Pest Management (IPM) protocols, specifically: (a) installing yellow sticky traps, (b) monitoring Economic Threshold Levels (ETL: 25-30 aphids/10 cm central twig), and (c) applying targeted systemic insecticide/neem oil only when ETL is breached.

2. Measurable (M):
- Achieve 100% adoption of yellow sticky traps on at least 150 hectares of mustard.
- Reduce synthetic chemical pesticide sprays from an average of 5 unguided sprays to 2 ETL-guided sprays per season.
- Measure a minimum 15% increase in clean seed yield and ₹4,000/ha reduction in plant protection costs.

3. Attainable (A):
The objectives utilize existing Krishi Vigyan Kendra demonstration funds, yellow sticky trap minikits provided under NFSM, and local progressive farmers acting as master scouts.

4. Realistic (R):
The technologies (sticky traps and neem formulations) are low-cost, readily available in local agro-service centres, and do not require heavy specialized machinery.

5. Time-bound (T):
- Phase 1 (Fact gathering & awareness): September 15 – October 15 (Pre-sowing).
- Phase 2 (Method demonstrations on trap installation): November 1 – 15.
- Phase 3 (ETL scouting field days): December 15 – January 30 (Peak aphid window).
- Phase 4 (Summative yield and cost evaluation): March 15 – 30 (Harvest).`,
      outlinePoints: [
        "Diagnostic analysis of mustard aphid scenario",
        "Application of SMART criteria: Specific, Measurable, Attainable, Realistic, Time-bound",
        "Phased chronological timeline matching mustard crop phenology",
        "Explicit target metrics for yield increase and cost reduction"
      ]
    },
    {
      id: "AEE103-U1-SUB11",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Education: meaning, definition and types",
      questionText: "What are the three behavioral domains targeted by extension education? Provide an example of each in the context of organic farming.",
      modelAnswer: `Extension education aims to produce comprehensive behavioral transformation across the K-S-A triad (Cognitive, Psychomotor, and Affective domains).

1. Cognitive Domain (Knowledge):
- Concept: Deals with mental faculties, intellectual understanding, facts, and scientific principles.
- Organic Farming Example: A farmer understands the biological Nitrogen cycle, the difference between chemical nitrogen and bio-fertilizers like *Azotobacter*, and the required decomposition duration for Jeevamrutha.

2. Psychomotor Domain (Skill):
- Concept: Deals with manual dexterity, physical motor skills, and technical manipulation of equipment and materials.
- Organic Farming Example: The farmer accurately layers biomass, cow dung, and virgin soil to build a NADEP compost pit, or precisely strains and sprays neem leaf extract using a knapsack sprayer.

3. Affective Domain (Attitude):
- Concept: Deals with emotions, values, appreciation, conviction, and philosophical orientation.
- Organic Farming Example: The farmer develops genuine pride and ethical conviction regarding chemical-free food production and soil ecosystem stewardship, voluntarily advocating it to fellow villagers.`,
      outlinePoints: [
        "Introduction to K-S-A triad in educational psychology",
        "Cognitive domain (Knowledge) with organic farming application",
        "Psychomotor domain (Skill) with practical physical farm task",
        "Affective domain (Attitude) with value and conviction orientation"
      ]
    },
    {
      id: "AEE103-U1-SUB12",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "Discuss the 'Principle of Indigenous Knowledge' in extension education. Why must extension scientists avoid dismissing traditional practices?",
      modelAnswer: `The Principle of Indigenous Knowledge emphasizes that rural communities possess a profound reservoir of time-tested, empirically evolved ecological and agricultural wisdom developed over centuries of trial and error.

Reasons Extension Scientists Must Not Dismiss Traditional Practices:
1. Ecological Adaptation: Traditional practices (such as mixed cropping of millets and legumes or using neem leaves for grain storage) are intimately adapted to local soil types, micro-climates, and pest complexes.
2. Low Cost and High Accessibility: Indigenous practices utilize locally abundant resources, making them financially sustainable for resource-poor smallholders without incurring commercial debt.
3. Foundation for Scientific Validation: Many modern green technologies are refined validations of traditional practices (e.g., neem-coated urea, bio-pesticides).
4. Respect and Mutual Trust: Dismissing ancestral practices as 'backward' breeds resentment and psychological resistance among village elders. Blending traditional wisdom with modern science (blended technologies) generates maximum adoption.`,
      outlinePoints: [
        "Definition and nature of Indigenous Knowledge Systems (IKS)",
        "Ecological sustainability and low-cost nature of traditional farming",
        "Psychological importance of mutual respect in rapport building",
        "Scientific validation and blending of modern and indigenous technologies"
      ]
    },
    {
      id: "AEE103-U1-SUB13",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Hard",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      questionText: "Compare Participatory Rural Appraisal (PRA) with traditional questionnaire surveys as methods for fact collection in extension planning. Detail three PRA tools.",
      modelAnswer: `Fact collection is Step 1 of extension programme planning. The methodological approach chosen determines whether the resulting data reflects authentic local reality or sterile external biases.

Comparison: PRA vs Traditional Questionnaire Survey:
1. Role of Villagers: In traditional surveys, villagers are passive respondents who answer rigid questions; in PRA, villagers are active analysts, cartographers, and planners of their own reality.
2. Ownership of Information: Survey data is taken away to universities; PRA diagrams and maps remain in the village on walls or ground for public discussion.
3. Medium of Communication: Surveys rely on literacy and complex questionnaires; PRA utilizes visual, tactile symbols (seeds, stones, chalk, ground drawings) enabling even illiterate farmers to participate.
4. Speed and Cost: Surveys require lengthy statistical coding and months of data processing; PRA provides rapid, on-the-spot qualitative insights with direct community consensus.

Three Essential PRA Tools Used in Extension Planning:

1. Resource Map / Social Map:
Villagers draw a map of their village on the ground using colored powders or chalk, marking physical boundaries, soil zones, water harvesting ponds, canal lines, and social settlements. This immediately highlights infrastructural disparities and natural resource endowments.

2. Transect Walk:
A systematic cross-sectional walk across the village territory accompanied by local key informants. Observers record soil changes, cropping patterns, erosion gullies, weeds, and tree species from the highest elevation to the valley bottom, identifying micro-ecological zones.

3. Seasonal Calendar:
A matrix drawn with months along the horizontal axis and agricultural events along the vertical axis (rainfall, sowing, weeding, pest incidence, labor shortages, human disease outbreaks, and cash flow deficits). This enables the extension team to schedule interventions precisely when farmers have both time and urgent need.`,
      outlinePoints: [
        "Comparative matrix: PRA vs Traditional questionnaire surveys",
        "Power dynamics: Outsiders as facilitators vs outsiders as interrogators",
        "Detailed explanation of Resource / Social Mapping",
        "Detailed explanation of Transect Walk",
        "Detailed explanation of Seasonal Calendar for agricultural scheduling"
      ]
    },
    {
      id: "AEE103-U1-SUB14",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "What is the 'Principle of Self-Help' in extension education? Contrast it with the 'Subsidy / Dependency Culture'.",
      modelAnswer: `The Principle of Self-Help is the philosophical bedrock of extension education, summarized in the classic adage: "Help rural people to help themselves." It focuses on enhancing human capacity, analytical skills, and communal confidence so farmers can identify and solve their own problems independently.

Contrast: Self-Help vs Subsidy / Dependency Culture:
1. Objective: Self-help builds enduring human capability and problem-solving skills; subsidy culture focuses solely on distributing free physical goods.
2. Sustainability: Self-help interventions endure long after the extension project terminates because the community owns the solution. Subsidy-dependent programmes collapse the moment free government handouts cease.
3. Dignity and Initiative: Self-help nurtures democratic leadership, pride, and active communal innovation. Chronic subsidy dependency breeds passivity, helplessness, and an attitude of entitlement where villagers wait for external government intervention for even trivial communal repairs (e.g., clearing a field drain).`,
      outlinePoints: [
        "Definition of the Principle of Self-Help ('helping people help themselves')",
        "Capacity building vs material handouts",
        "Long-term sustainability comparison",
        "Psychological impacts: dignity and innovation vs passivity and dependence"
      ]
    },
    {
      id: "AEE103-U1-SUB15",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      questionText: "Explain the two-way bridge function of agricultural extension between Agricultural Research Systems and Farmers.",
      modelAnswer: `Agricultural extension does not function as a one-way megaphone; it operates as an indispensable two-way communication bridge connecting agricultural research institutes with rural farming communities.

1. Downstream Flow (Laboratory to Land / Research to Field):
- Extension scientists translate complex laboratory and trial-plot discoveries into practical, easily understandable recommendations.
- They adapt technologies to local agro-climatic conditions and demonstrate their agronomic and economic viability on farmer fields through method and result demonstrations.

2. Upstream Flow (Land to Laboratory / Field Feedback to Research):
- Extension agents observe how scientific recommendations perform under imperfect farmer conditions (unpredictable rainfall, poor soils, pest mutations).
- They convey farmers' authentic constraints, rejection reasons, and emerging field problems (e.g., a new weed infesting zero-till wheat or a failure of a hybrid variety to cook well) back to research scientists.
- This feedback ensures that national research agendas remain grounded in urgent farm problems rather than ivory-tower academic theories.`,
      outlinePoints: [
        "Conceptual diagram: Research System ⇄ Extension Bridge ⇄ Farming Community",
        "Downstream flow: technology translation, demystification, and demonstration",
        "Upstream flow: farmer feedback, constraint reporting, and realigning research priorities",
        "Consequences of a broken bridge: irrelevant research and technology rejection"
      ]
    },
    {
      id: "AEE103-U1-SUB16",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "What are 'Working Objectives' in extension programme development? State four essential characteristics of well-formulated working objectives.",
      modelAnswer: `Working Objectives are specific, operational, time-bound statements of intended educational outcomes formulated to guide immediate extension teaching activities in a designated locality.

Four Essential Characteristics:
1. Audience Specification: Clearly identifies who the learners are (e.g., marginal women dairy farmers of Block A).
2. Behavioral Change Indicator: States the exact change expected across knowledge, skill, or practice (e.g., to calibrate and operate a drip fertigation injector).
3. Measurable Standard / Criterion: Contains a quantifiable benchmark of performance (e.g., achieving 85% water application uniformity or reducing seed rate from 40 kg to 25 kg/ha).
4. Time Boundary: Defines the deadline or timeframe for achievement (e.g., before the onset of the Rabi 2026 sowing window).`,
      outlinePoints: [
        "Definition of Working Objectives",
        "Target audience identification",
        "Behavioral change specification (K-S-A)",
        "Quantifiable performance benchmark",
        "Explicit time horizon"
      ]
    },
    {
      id: "AEE103-U1-SUB17",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      questionText: "Explain the difference between an Extension Programme and a Plan of Work.",
      modelAnswer: `While both are vital documents in extension management, they differ significantly in scope, structure, and operational detail.

1. Extension Programme:
- Nature: A comprehensive, broad policy statement of the total situation, objectives, problems, and proposed general solutions for a given area over a medium-to-long timeframe (usually 1 to 5 years).
- Focus: Answers 'Why' the interventions are needed, 'What' the fundamental problems are, and 'Where' the community desires to go.
- Structure: Contains situational data, problem priorities, long-term goals, and general policies.

2. Plan of Work:
- Nature: An operational, tactical blueprint derived directly from the extension programme, designed for immediate execution over a single season or year.
- Focus: Answers 'Who' will do the work, 'When' it will occur, 'Where' it will take place, and 'How' it will be executed.
- Structure: Details exact dates, target villages, designated extension officers, required audio-visual aids, demonstration inputs, and the Calendar of Operations.`,
      outlinePoints: [
        "Comparison table: Extension Programme vs Plan of Work",
        "Philosophical vs operational orientation",
        "Time horizons: multi-year strategic framework vs seasonal tactical blueprint",
        "Core questions answered: (Why & What) vs (Who, When, Where, & How)"
      ]
    },
    {
      id: "AEE103-U1-SUB18",
      questionType: "COMPARISON",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps",
      questionText: "Differentiate between Formative Evaluation and Summative Evaluation in extension programme management.",
      modelAnswer: `Evaluation in extension is the scientific process of determining the value or effectiveness of a programme against predetermined objectives.

1. Formative Evaluation (Concurrent / On-going Evaluation):
- Timing: Conducted continuously while the extension programme is actively underway.
- Purpose: Diagnostic in nature. It identifies operational bottlenecks, low attendance, input delivery delays, or communication barriers in real time.
- Action: Enables extension managers to make mid-course corrections, adjust teaching methods, or reallocate staff before the project ends.
- Example: Checking mid-season whether farmers who received pheromone traps understand how to change the lure septum every 21 days.

2. Summative Evaluation (Ex-Post / Terminal Evaluation):
- Timing: Conducted at the conclusion of a project or after harvest.
- Purpose: Judgmental in nature. It measures final impact, overall behavioral change, yield improvements, economic cost-benefit ratios, and goal achievement.
- Action: Provides accountability to funding agencies, documents lessons learned, and justifies whether the programme should be scaled up or terminated.
- Example: Measuring total paddy yield increments and net profit per acre among 500 trained farmers compared to an un-trained control group at the end of the year.`,
      outlinePoints: [
        "Definition of educational evaluation in extension",
        "Formative evaluation: timing, diagnostic role, and mid-course correction",
        "Summative evaluation: timing, terminal impact assessment, and accountability",
        "Agricultural examples illustrating both evaluation types"
      ]
    },
    {
      id: "AEE103-U1-SUB19",
      questionType: "APPLICATION",
      maxMarks: 5,
      difficulty: "Hard",
      syllabusTopic: "Objectives and principles of extension education",
      questionText: "How can an extension worker apply the 'Principle of Local Leadership' to overcome resistance to a novel agricultural technology?",
      modelAnswer: `Rural communities rarely adopt unproven external innovations merely because an outside government officer recommends them; they look to trusted local opinion leaders for guidance.

Steps to Overcome Resistance Using Local Leadership:

1. Sociometric Identification:
Identify genuine informal opinion leaders (progressive farmers who villagers consult for advice, not merely appointed political heads) using sociometric or key informant techniques.

2. Early Involvement and Co-Creation:
Invite these identified leaders to the research station or KVK. Explain the technology transparently, address their doubts, and solicit their feedback on adapting it to local conditions.

3. Frontline Result Demonstrations on Leader Fields:
Conduct the primary result demonstrations on the fields of these respected leaders. When fellow villagers see their own trusted peer successfully adopting the new seed or micro-irrigation system with higher profits and no disaster, social skepticism collapses.

4. Peer-to-Peer Advocacy:
Encourage these leaders to share their experiences during village meetings, local festivals, and field days. Farmers place far greater trust in fellow farmers ('homophilous communication') than in outside technocrats.`,
      outlinePoints: [
        "Sociological role of local opinion leaders in rural decision-making",
        "Identification techniques (sociometry, key informants)",
        "Involving leaders in front-line result demonstrations",
        "Peer-to-peer diffusion and homophilous credibility"
      ]
    },
    {
      id: "AEE103-U1-SUB20",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Extension education: meaning, definition, scope and process",
      questionText: "Summarize the major contributions of Dr. J. Paul Leagans to the academic discipline of Extension Education.",
      modelAnswer: `Dr. J. Paul Leagans of Cornell University is widely celebrated as the foremost architect of extension education as a rigorous academic and applied behavioral discipline.

Key Academic Contributions:
1. Canonical Definition of Extension Education: Defined extension as an applied behavioral science synthesizing research, field experience, and psychological principles into an out-of-school educational discipline for adults and youth.
2. The Five-Stage Extension Educational Process: Formulated the universal cyclical model: Situation → Objectives → Teaching → Evaluation → Reconsideration, which remains the global pedagogical standard.
3. Communication Model for Extension: Developed the renowned 6-element Leagans Communication Model (Communicator → Message → Channel → Treatment of Message → Audience → Audience Response), emphasizing the critical role of message treatment.
4. Concept of Needs: Systematized the theory of educational needs, mathematically and sociologically framing 'Need' as the distance between 'What is' and 'What ought to be', distinguishing felt from unfelt needs.`,
      outlinePoints: [
        "Academic standing of Dr. J. Paul Leagans at Cornell University",
        "Authoritative definition of extension education",
        "The 5-stage educational cycle",
        "6-element communication model and message treatment concept",
        "Theoretical formulation of felt vs unfelt needs"
      ]
    }
  ],
  flashcards: [
    {
      id: "AEE103-U1-FC01",
      front: "What are the Latin root words for 'Education'?",
      back: "'Educare' (to bring up / nourish) and 'Educere' (to lead forth / draw out).",
      hint: "Two Latin verbs beginning with 'Edu-'",
      syllabusTopic: "Education: meaning, definition and types"
    },
    {
      id: "AEE103-U1-FC02",
      front: "What is Non-Formal Education?",
      back: "An organized, systematic, out-of-school educational activity designed for specific learner groups, highly flexible and need-based without awarding academic degrees.",
      hint: "Extension education belongs to this category.",
      syllabusTopic: "Education: meaning, definition and types"
    },
    {
      id: "AEE103-U1-FC03",
      front: "What is Informal Education?",
      back: "The lifelong, unorganized, spontaneous process of acquiring knowledge and skills through daily experiences and social interactions.",
      hint: "Learning by observation in the family.",
      syllabusTopic: "Education: meaning, definition and types"
    },
    {
      id: "AEE103-U1-FC04",
      front: "What are the three behavioral domains in the K-S-A triad?",
      back: "Cognitive domain (Knowledge), Psychomotor domain (Skill), and Affective domain (Attitude).",
      hint: "Head, Hands, and Heart.",
      syllabusTopic: "Education: meaning, definition and types"
    },
    {
      id: "AEE103-U1-FC05",
      front: "Where and when was the term 'University Extension' first used?",
      back: "In 1866 in England, and formally introduced by James Stuart at Cambridge University in 1873.",
      hint: "English university famous for mathematics.",
      syllabusTopic: "Extension education: meaning, definition, scope and process"
    },
    {
      id: "AEE103-U1-FC06",
      front: "What is Dr. Seaman A. Knapp known for in extension history?",
      back: "Known as the 'Father of Agricultural Extension Demonstrations', establishing the principles of 'Learning by doing' and 'Seeing is believing'.",
      hint: "Pioneered boll weevil farm demonstrations in 1903.",
      syllabusTopic: "Extension education: meaning, definition, scope and process"
    },
    {
      id: "AEE103-U1-FC07",
      front: "List the 5 phases of Leagans' Extension Educational Process in order.",
      back: "1. Analysis of Situation\n2. Determination of Objectives\n3. Teaching and Communication\n4. Evaluation of Teaching\n5. Reconsideration",
      hint: "S - O - T - E - R",
      syllabusTopic: "Extension education: meaning, definition, scope and process"
    },
    {
      id: "AEE103-U1-FC08",
      front: "What is the etymological origin of the word 'Extension'?",
      back: "Derived from the Latin roots 'Ex' (out) and 'Tendere' (to stretch), meaning to stretch or extend education out to people.",
      hint: "Latin word meaning 'to stretch out'.",
      syllabusTopic: "Extension education: meaning, definition, scope and process"
    },
    {
      id: "AEE103-U1-FC09",
      front: "How is an educational 'Need' defined in extension?",
      back: "The measurable gap or distance between 'what is' (current condition) and 'what ought to be' (desirable condition).",
      hint: "The difference between present and desired reality.",
      syllabusTopic: "Objectives and principles of extension education"
    },
    {
      id: "AEE103-U1-FC10",
      front: "What is a 'Felt Need'?",
      back: "A need of which people are consciously aware and feel an active inner urge to satisfy.",
      hint: "A problem recognized by the farmer.",
      syllabusTopic: "Objectives and principles of extension education"
    },
    {
      id: "AEE103-U1-FC11",
      front: "What is an 'Unfelt Need'?",
      back: "A real deficiency or problem of which the community is not yet consciously aware (e.g., soil micronutrient deficiency).",
      hint: "Hidden problem requiring extension education to recognize.",
      syllabusTopic: "Objectives and principles of extension education"
    },
    {
      id: "AEE103-U1-FC12",
      front: "What is the Principle of Grassroots Planning?",
      back: "Programmes must originate at the village level based on local conditions and felt needs rather than being imposed from top-down administrative levels.",
      hint: "Bottom-up design.",
      syllabusTopic: "Objectives and principles of extension education"
    },
    {
      id: "AEE103-U1-FC13",
      front: "What is the Whole-Family Approach in agricultural extension?",
      back: "Involving farm men, farm women, and rural youth collaboratively, acknowledging that the farm is an integrated family enterprise.",
      hint: "Gender-inclusive and youth-inclusive.",
      syllabusTopic: "Objectives and principles of extension education"
    },
    {
      id: "AEE103-U1-FC14",
      front: "What are the four components of an Extension Programme?",
      back: "1. Situation\n2. Objectives\n3. Problems\n4. Solutions",
      hint: "S - O - P - S",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps"
    },
    {
      id: "AEE103-U1-FC15",
      front: "What is a 'Plan of Work'?",
      back: "An operational schedule detailing Who, What, When, Where, and How extension activities will be carried out over a specific season.",
      hint: "The tactical action blueprint of an extension programme.",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps"
    },
    {
      id: "AEE103-U1-FC16",
      front: "How many steps are there in the classic extension programme development cycle?",
      back: "Eight steps: Fact collection, Analysis, Problems, Objectives, Plan of work, Execution, Evaluation, and Reconsideration.",
      hint: "Between 7 and 9 steps.",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps"
    },
    {
      id: "AEE103-U1-FC17",
      front: "What does the SMART acronym stand for in objective formulation?",
      back: "Specific, Measurable, Attainable, Realistic, and Time-bound.",
      hint: "Universal criteria for high-quality objectives.",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps"
    },
    {
      id: "AEE103-U1-FC18",
      front: "What is Formative Evaluation?",
      back: "Evaluation conducted during programme execution to identify bottlenecks and make mid-course corrections.",
      hint: "Concurrent / on-going assessment.",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps"
    },
    {
      id: "AEE103-U1-FC19",
      front: "What is Summative Evaluation?",
      back: "Terminal evaluation conducted at the end of a programme to assess final outcomes, adoption rates, and economic impact.",
      hint: "Ex-post / end assessment.",
      syllabusTopic: "Extension programme planning: meaning, process, principles and steps"
    },
    {
      id: "AEE103-U1-FC20",
      front: "Why is the Principle of Indigenous Knowledge critical in extension?",
      back: "Because traditional farm practices are ecologically adapted and time-tested; respecting them builds trust and allows science to blend with local wisdom.",
      hint: "Centuries of farmer experiential knowledge.",
      syllabusTopic: "Objectives and principles of extension education"
    }
  ]
};
