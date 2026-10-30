import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const agr217Metadata: SubjectMetadata = {
  "code": "AGR217",
  "name": "Principles and Practices of Natural Farming",
  "programmeCode": "BSC-AGRI",
  "programmeName": "B.Sc. (Hons.) Agriculture",
  "semester": 3,
  "credits": 2,
  "lectureHours": 1,
  "tutorialHours": 0,
  "practicalHours": 2,
  "totalHours": 3,
  "courseCategory": "Core",
  "overview": "Principles and Practices of Natural Farming delivers an in-depth scientific, ecological, and economic exploration of non-chemical regenerative agriculture rooted in indigenous Indian traditions and agro-ecological science. The curriculum covers the philosophical origins of Natural Farming (Fukuoka's 'Do-Nothing' agriculture and Subhash Palekar's Zero Budget Natural Farming), contrasting it with conventional and organic systems. Students master the preparation chemistry and microbial dynamics of cow-based bio-enhancers (Jeevamrit, Beejamrit, Ghanajeevamrit), soil biology and native earthworm ecology, the microclimatic physics of Waaphasa, and tripartite mulching (Acchadana). The course further investigates Ecological Pest Management (EPM) utilizing botanical extracts (Neemastra, Brahmastra, Agniastra, Dashparni Ark) and bio-fungicides (fermented buttermilk, Sonthastra). It culminates in economic cost-benefit analysis, large-scale institutional scaling models like APCNF / RySS, national policies (PKVY, BPKP, NMNF), and decentralized quality assurance under PGS-India."
};

export const agr217CourseOutcomes = [
  {
    code: "CO1",
    title: "Philosophy & Principles of Natural Farming",
    description: "Evaluate the agro-ecological and philosophical principles of Natural Farming, distinguishing its biological and economic foundations from conventional chemical and certified organic farming."
  },
  {
    code: "CO2",
    title: "Bio-Formulations & Microbial Dynamics",
    description: "Formulate, standardize, and evaluate native cow-based biological enhancers (Jeevamrit, Beejamrit, Ghanajeevamrit) and analyze their rhizosphere microbiology."
  },
  {
    code: "CO3",
    title: "Soil Food Web, Waaphasa & Acchadana",
    description: "Synthesize the biophysics of soil aeration (Waaphasa), native earthworm ecology, tripartite mulching (Acchadana), and long-term soil organic carbon sequestration."
  },
  {
    code: "CO4",
    title: "Ecological Pest & Disease Management",
    description: "Design on-farm botanical concoctions (Neemastra, Brahmastra, Agniastra, Dashparni Ark) and bio-fungicides (sour buttermilk, Sonthastra) within an Ecological Pest Management framework."
  },
  {
    code: "CO5",
    title: "Economics, Policy & Quality Systems",
    description: "Conduct farm cost-benefit analyses, examine large-scale institutional models (APCNF/RySS), evaluate national policy schemes (PKVY, BPKP, NMNF), and apply PGS-India peer certification."
  }
];

export const agr217GradingComponents = [
  {
    component: "Continuous Assessment (CA)",
    weightage: "25%",
    marks: "25 Marks",
    details: "Continuous evaluation through classroom quizzes, formulation preparation assignments, field observations, and viva."
  },
  {
    component: "Mid-Term Examination (MTE)",
    weightage: "25%",
    marks: "25 Marks",
    details: "University mid-term theory examination covering Units 1, 2, and 3, testing conceptual comprehension and biochemical mechanisms."
  },
  {
    component: "End-Term Examination (ETE)",
    weightage: "50%",
    marks: "50 Marks",
    details: "Comprehensive university examination covering all 5 units, assessing theory, application, and institutional policy frameworks."
  }
];

export const agr217Textbooks = [
  {
    title: "The Philosophy of Natural Farming",
    author: "Subhash Palekar",
    note: "Comprehensive treatise on Zero Budget Natural Farming principles, microbial concoctions, and multi-tier crop geometry."
  },
  {
    title: "The One-Straw Revolution: An Introduction to Natural Farming",
    author: "Masanobu Fukuoka",
    note: "Foundational international philosophy on no-till, no-fertilizer, and no-pesticide natural agriculture."
  },
  {
    title: "APCNF Practitioner Manual and Field Handbook",
    author: "Rythu Sadhikara Samstha (RySS)",
    note: "Operational handbook detailing community resource person extension, PMDS, and large-scale natural farming protocols."
  },
  {
    title: "Participatory Guarantee System for India (PGS-India) Operational Guidelines",
    author: "National Centre of Organic and Natural Farming (NCONF)",
    note: "Official regulatory manual for peer-review certification, Local Group standards, and Jaivik Bharat compliance."
  }
];

export const agr217Practicals = [
  {
    id: 1,
    title: "Preparation and Aerobic Fermentation of Liquid Jeevamrit and Solid Ghanajeevamrit",
    objectives: [
      "Prepare a standard 200-liter batch of Liquid Jeevamrit using indigenous cow dung, cow urine, jaggery, pulse flour, and virgin rhizosphere soil.",
      "Prepare Solid Ghanajeevamrit for basal broadcast during sowing or planting."
    ],
    materialsRequired: ["200-liter plastic drum", "Wooden stirring stick", "Muslin/khadi cloth", "Indigenous cow dung (10 kg)", "Indigenous cow urine (10 L)", "Organic jaggery (2 kg)", "Chickpea flour / Besan (2 kg)", "Virgin fence/forest soil (500 g)", "Clean water (200 L)"],
    procedureSteps: [
      "In a 200 L plastic drum placed under dense shade, add 200 L of water.",
      "Thoroughly mix 10 kg fresh desi cow dung and 10 L desi cow urine into the water.",
      "Dissolve 2 kg jaggery and 2 kg besan in water to form a lump-free slurry and pour into the drum.",
      "Add 500 g of fertile virgin soil harvested beneath an undisturbed banyan/neem tree.",
      "Stir the liquid clockwise for 5 minutes using a wooden rod.",
      "Cover the drum with a breathable khadi or jute bag to permit gas exchange while excluding flies.",
      "Stir clockwise for 5 minutes twice daily (morning and evening) for 48 hours to complete fermentation.",
      "For Ghanajeevamrit: Spread 100 kg dry cow dung, mix with 5 kg jaggery, 5 kg besan, 5 L cow urine, dry in shade, and pulverize."
    ],
    observationsAndRecording: [
      "Record temperature, pH shift, and color changes over the 48-hour fermentation cycle.",
      "Perform simple microscopic examination to observe active bacterial and protozoan motility."
    ],
    reflectionQuestions: [
      "Why is clockwise stirring recommended for maintaining aerophilic microbial consortia?",
      "How does virgin forest soil provide a superior microbial inoculum compared to chemical field soil?"
    ],
    submissionGuidance: "Submit a laboratory report documenting fermentation curves, ingredient ratios, and field application dosages."
  },
  {
    id: 2,
    title: "Seed Treatment of Kharif Crops with Beejamrit (Seed Biopriming)",
    objectives: [
      "Prepare Beejamrit formulation using cow dung, cow urine, slaked lime (Chuna), and soil.",
      "Demonstrate seed biopriming of cereals and pulses to enhance germination and suppress seed-borne pathogens."
    ],
    materialsRequired: ["Indigenous cow dung (5 kg)", "Cow urine (5 L)", "Slaked lime / Chuna (50 g)", "Water (20 L)", "Virgin soil (handful)", "Cereal and pulse seeds (Paddy, Soybean, Maize)", "Drying tarp / sheet"],
    procedureSteps: [
      "Tie 5 kg fresh cow dung in a cloth bundle and suspend it in a bucket of 20 L water for 12 hours.",
      "Squeeze the bundle repeatedly to extract soluble microbial essence into the water.",
      "Dissolve 50 g of slaked lime in 1 liter of water overnight.",
      "Add 5 L native cow urine, the lime water, and a handful of virgin soil into the cow dung extract.",
      "Stir the mixture thoroughly to form homogeneous Beejamrit.",
      "Pour Beejamrit over seeds placed on a clean tarp; gently rub with hands to coat every seed uniformly.",
      "Dry treated seeds under shade for 4 hours before sowing."
    ],
    observationsAndRecording: [
      "Record seed germination percentage in Beejamrit-treated vs untreated seeds across 7 days.",
      "Observe early radicle and seminal root emergence vigor."
    ],
    reflectionQuestions: [
      "Why must seeds be dried under shade rather than direct sunlight after Beejamrit treatment?",
      "What role does slaked lime play in regulating pH and controlling fungal spores?"
    ],
    submissionGuidance: "Submit an experimental comparative germination record with seedling vigor index calculations."
  },
  {
    id: 3,
    title: "Acchadana (Mulching) Field Layout and Waaphasa Soil Moisture Assessment",
    objectives: [
      "Demonstrate layout of Shushka Acchadana (straw mulch) and Jeeva Acchadana (live legume mulch) in field plots.",
      "Evaluate the Waaphasa condition (50:50 air-water vapor pore space) and compare topsoil temperatures."
    ],
    materialsRequired: ["Dry paddy straw / crop residues (3-5 t/ha)", "Cowpea / moong seeds for live mulch", "Soil thermometer", "Trowel / auger", "Moisture sensor or tensiometer"],
    procedureSteps: [
      "Demarcate three adjacent 5m x 5m plots: (A) Bare unmulched control, (B) Straw mulched (Shushka Acchadana, 3-inch layer), and (C) Live legume mulched (Jeeva Acchadana).",
      "Apply alternate-furrow irrigation to establish the Waaphasa zone in furrows.",
      "Insert soil thermometers at 5 cm and 10 cm depths in all three plots.",
      "Record soil temperatures at 08:00, 13:00, and 17:00 hours on sunny days.",
      "Examine topsoil structure, aggregation, and presence of native earthworm casts beneath mulched vs bare soil."
    ],
    observationsAndRecording: [
      "Tabulate temperature differentials between mulched and bare plots.",
      "Document visual differences in soil compaction, surface crusting, and capillary porosity."
    ],
    reflectionQuestions: [
      "How does a 3-inch straw mulch layer buffer soil against extreme summer midday heat?",
      "Why does flooding a field eliminate the Waaphasa condition and induce root hypoxia?"
    ],
    submissionGuidance: "Submit a comprehensive field report detailing soil temperature curves, earthworm cast counts, and moisture conservation data."
  },
  {
    id: 4,
    title: "Formulation of Botanical Bio-Repellents: Neemastra, Brahmastra, and Agniastra",
    objectives: [
      "Prepare Neemastra, Brahmastra, and Agniastra adhering to exact ingredient proportions and thermal protocols.",
      "Calibrate dilution rates and demonstrate knapsack sprayer foliar application."
    ],
    materialsRequired: ["Neem leaves (5 kg)", "Ungrazed leaves (Calotropis, Karanj, Castor, Custard apple - 2 kg each)", "Green chillies (500 g)", "Garlic (500 g)", "Dry tobacco / Datura (1 kg)", "Native cow urine (20 L)", "Earthen/metal pots", "Stove / fire source", "Knapsack sprayer"],
    procedureSteps: [
      "Prepare Neemastra: Mix 5 kg dung, 5 L urine, and 5 kg crushed neem in 200 L water; ferment 48 hours in shade.",
      "Prepare Brahmastra: Pound 2 kg neem plus 2 kg each of 4 ungrazed leaves into paste. Boil in 10 L cow urine for 15-20 minutes. Cool for 48 hours and filter.",
      "Prepare Agniastra: Grind 500 g green chillies, 500 g garlic, 1 kg tobacco, and 5 kg neem into paste. Boil in 10 L cow urine for 20 minutes until dark. Cool 48 hours and strain.",
      "Measure pH and aroma of all three extracts.",
      "Dilute Brahmastra (2.5 L in 100 L water) and Agniastra (2 L in 100 L water) for knapsack spraying."
    ],
    observationsAndRecording: [
      "Record physical characteristics, filtration efficiency, and shelf-life stability notes.",
      "Tabulate target pest complexes for each botanical concoction."
    ],
    reflectionQuestions: [
      "Why must personal protective equipment (gloves, eye masks) be worn when preparing and handling Agniastra?",
      "What secondary metabolites in Calotropis and Pongamia make them toxic to chewing caterpillars?"
    ],
    submissionGuidance: "Submit a detailed formulation laboratory portfolio with safety protocols and crop-specific spray schedules."
  },
  {
    id: 5,
    title: "Participatory Guarantee System (PGS-India) Peer Review Simulation and Documentation",
    objectives: [
      "Simulate the formation of a PGS-India Local Group (LG) of 5 neighboring farmers.",
      "Complete Farmer Farm History Diaries, conduct simulated peer farm appraisals, and generate endorsement reports."
    ],
    materialsRequired: ["PGS-India operational guidelines", "Farmer History Diary templates", "Peer Review Checklist sheets", "Local Group Summary forms", "Sample crop record data"],
    procedureSteps: [
      "Form a simulated 5-member Local Group, electing a Group Leader and Convener.",
      "Fill out individual Farm History Sheets detailing crops sown, Beejamrit/Jeevamrit usage, and buffer zone dimensions.",
      "Form a 3-member peer appraisal committee to inspect simulated farm plots for chemical contamination signs.",
      "Complete the Peer Appraisal Checklist, noting compliance with zero-synthetic-chemical standards.",
      "Convene a mock Local Group review meeting to discuss peer findings, vote on approvals, and resolve non-compliances.",
      "Prepare and submit the finalized Local Group Summary Sheet for Regional Council (RC) endorsement."
    ],
    observationsAndRecording: [
      "Document peer inspection observations, buffer zone measurements, and seed source verifications.",
      "Record consensus decisions on issuing PGS-Green vs PGS-Natural certificates."
    ],
    reflectionQuestions: [
      "How does peer appraisal prevent fraudulent organic claims without costly third-party commercial audits?",
      "What corrective sanctions are applied if an individual member is found using synthetic chemical fertilizers?"
    ],
    submissionGuidance: "Submit a complete mock PGS-India certification portfolio including Local Group Pledge, 5 Farmer Diaries, and Peer Inspection Reports."
  }
];

export const agr217Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const agr217CompleteSubject = {
  metadata: agr217Metadata,
  courseOutcomes: agr217CourseOutcomes,
  gradingComponents: agr217GradingComponents,
  textbooks: agr217Textbooks,
  practicals: agr217Practicals,
  units: agr217Units
};

export default agr217CompleteSubject;
