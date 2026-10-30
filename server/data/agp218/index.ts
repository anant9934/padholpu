import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const agp218Metadata: SubjectMetadata = {
  "code": "AGP218",
  "name": "Crop Production Technology-I (Kharif Crops)",
  "programmeCode": "BSC-AGRI",
  "programmeName": "B.Sc. (Hons.) Agriculture",
  "semester": 3,
  "credits": 4,
  "lectureHours": 3,
  "tutorialHours": 0,
  "practicalHours": 2,
  "totalHours": 5,
  "courseCategory": "Core",
  "overview": "Crop Production Technology-I (Kharif Crops) delivers an extensive agronomic and scientific exploration of the principal food, pulse, oilseed, fiber, and industrial crops cultivated during the Kharif (monsoon) season in India. Students analyze crop classification, agro-climatic zones, cropping systems, soil-plant-water relations, and crop ideotypes. The curriculum covers the package of practices for major cereals (rice, maize, sorghum, pearl millet), pulses and oilseeds (soybean, groundnut, pigeonpea, green gram, black gram), cash and industrial crops (cotton, sugarcane, jute, sunflower, sesame), and concludes with comprehensive weed science, herbicide biochemistry, intercropping competition indices, and conservation agriculture."
};

export const agp218CourseOutcomes = [
  {
    code: "CO1",
    title: "Principles of Crop Production & Ecology",
    description: "Analyze agronomic classification, agro-climatic zones, crop ecology, and soil-plant-water dynamics in Kharif crop ecosystems."
  },
  {
    code: "CO2",
    title: "Kharif Cereals Agronomy & Hybrid Production",
    description: "Master production technologies and hybrid seed production of major Kharif cereals (Rice, Maize, Sorghum, Pearl Millet)."
  },
  {
    code: "CO3",
    title: "Kharif Pulses & Oilseeds Management",
    description: "Formulate package of practices for major Kharif pulses and oilseeds (Soybean, Groundnut, Pigeonpea, Green gram, Black gram) including BNF and gypsum dynamics."
  },
  {
    code: "CO4",
    title: "Kharif Cash Crops & Industrial Quality",
    description: "Evaluate cultivation, crop protection, and post-harvest quality parameters for commercial cash crops (Cotton, Sugarcane, Jute, Sunflower, Sesame)."
  },
  {
    code: "CO5",
    title: "Weed Science, Intercropping & Conservation Agriculture",
    description: "Design Integrated Weed Management programs, compute intercropping competition indices (LER, ATER, RCC), and evaluate Conservation Agriculture systems."
  }
];

export const agp218GradingComponents = [
  {
    component: "Continuous Assessment (CA)",
    weightage: "20%",
    marks: "30 Marks",
    details: "Continuous evaluation through online objective quizzes, unit tests, field herbarium preparation, and agronomic problem-solving assignments."
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
    details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing agronomic knowledge, calculations, and package of practices."
  },
  {
    component: "Practical Examination & Lab/Field Viva",
    weightage: "20%",
    marks: "50 Marks",
    details: "Evaluation of practical crop cafeteria identification, seed rate / fertilizer calculations, herbicide sprayer calibration, and crop museum records."
  }
];

export const agp218Textbooks = [
  {
    title: "Agronomy of Field Crops",
    author: "S. R. Reddy",
    note: "Prescribed core textbook for package of practices, varietal recommendations, and agronomy of field crops in India."
  },
  {
    title: "Principles and Practices of Agronomy",
    author: "S. S. Singh",
    note: "Standard academic reference for crop classification, soil-plant-water relations, and cropping systems."
  },
  {
    title: "Crop Production Technology-I (Kharif Crops)",
    author: "ICAR e-Course Consortium",
    note: "Comprehensive national ICAR curriculum resource for B.Sc. (Hons.) Agriculture degree programmes."
  },
  {
    title: "Weed Management: Principles and Practices",
    author: "O. P. Gupta",
    note: "Authoritative reference on herbicide classification, modes of action, sprayer calibration, and IWM."
  }
];

export const agp218Practicals = [
  {
    id: 1,
    title: "Identification of Kharif Crop Seeds, Plants, and Weeds in Crop Cafeteria",
    objectives: [
      "Identify vegetative, floral, and seed characteristics of major kharif cereals, pulses, oilseeds, and fiber crops.",
      "Recognize major grassy, sedge, and broadleaf weed species infesting kharif crops."
    ],
    materialsRequired: ["Seed samples", "Fresh crop and weed specimens", "Hand lens", "Botanical identification keys", "Herbarium press"],
    procedureSteps: [
      "Visit the university crop cafeteria / instructional research farm during early kharif season.",
      "Observe and record morphological traits: leaf sheath, ligule, auricle, branching habit, and inflorescence type.",
      "Collect and press representative specimens of prominent weed species (Echinochloa, Cyperus, Trianthema, Parthenium).",
      "Mount identified specimens on standard herbarium sheets with botanical nomenclature and morphological notes.",
      "Submit the herbarium album for evaluation."
    ],
    observationsAndRecording: [
      "Tabulate seed color, test weight (1,000-seed weight), and diagnostic features.",
      "Record distinguishing differences between grasses and sedges in the field."
    ],
    reflectionQuestions: [
      "Why is vegetative identification of Echinochloa colona difficult in direct-seeded rice nurseries?",
      "How do ligule and auricle morphology differentiate rice from barnyard grass at the 2-leaf stage?"
    ],
    submissionGuidance: "Submit a labeled herbarium portfolio containing 20 field crop and 20 weed specimens alongside morphology notes."
  },
  {
    id: 2,
    title: "Nursery Raising and Seedling Transplanting in Rice (Conventional vs SRI)",
    objectives: [
      "Compare wet-bed conventional nursery raising with modified mat nursery preparation in System of Rice Intensification (SRI).",
      "Master single-seedling transplanting geometry and evaluate early tillering vigor."
    ],
    materialsRequired: ["Certified paddy seed", "Nursery nursery beds", "Polythene sheeting", "Banana leaf sheets", "Wooden markers / ropes", "Cono-weeder"],
    procedureSteps: [
      "Prepare a raised wet-bed nursery and a modified mat nursery side-by-side.",
      "Treat seeds with carbendazim and incubate for pre-germination.",
      "Sow pre-germinated seed on nurseries at specified seed rates.",
      "Uproot 21-day-old conventional seedlings and 10-12-day-old young SRI seedlings (with seed and roots intact).",
      "Transplant conventional seedlings (2-3 seedlings/hill at 20x15 cm) and SRI seedlings (1 seedling/hill at 25x25 cm square grid).",
      "Record seedling mortality and time required for resumption of vegetative growth."
    ],
    observationsAndRecording: [
      "Record nursery emergence percentage and seedling height at 10 and 21 DAS.",
      "Document root architecture differences between conventional and SRI seedlings."
    ],
    reflectionQuestions: [
      "Why does transplanting 10-12 day-old seedlings in SRI promote higher phyllochronic tillering than older seedlings?",
      "What precautions must be observed while uprooting young SRI seedlings to prevent root shock?"
    ],
    submissionGuidance: "Submit an experimental practical report comparing seedling establishment, tillering dynamics, and water use."
  },
  {
    id: 3,
    title: "Calculation of Seed Rate, Plant Population, and Fertilizer Doses for Kharif Crops",
    objectives: [
      "Calculate theoretical and adjusted seed rates based on purity and germination percentages.",
      "Determine fertilizer requirements (Urea, DAP, MOP, SSP, Gypsum) from recommended NPK doses."
    ],
    materialsRequired: ["Scientific calculator", "Crop spacing specifications", "Fertilizer nutrient composition charts", "Field dimensions log"],
    procedureSteps: [
      "Review standard formula for seed rate calculation based on test weight, row spacing, and real value of seed.",
      "Solve numerical problems for field plots of Maize (60x20 cm), Soybean (45x5 cm), and Groundnut (30x10 cm).",
      "Compute commercial fertilizer quantities to satisfy recommended N:P2O5:K2O doses using single vs complex fertilizers.",
      "Calculate gypsum requirements for groundnut pegging stage application (400 kg/ha).",
      "Prepare a farm fertilizer procurement schedule for a 5-hectare multi-crop kharif farm."
    ],
    observationsAndRecording: [
      "Record real value of seed (Purity % x Germination % / 100).",
      "Tabulate commercial fertilizer splits (basal vs top-dressing) for irrigated maize."
    ],
    reflectionQuestions: [
      "Why must seed rate be elevated by 20-25% when sowing bold-seeded groundnut cultivars under rainfed conditions?",
      "How does using DAP as a phosphorus source affect the calculation of basal urea requirements?"
    ],
    submissionGuidance: "Submit a completed 10-problem numerical worksheet demonstrating step-by-step mathematical calculations."
  },
  {
    id: 4,
    title: "Herbicide Formulations, Calibration of Knapsack Sprayer, and Field Application",
    objectives: [
      "Identify common herbicide formulations (EC, WP, SC, SL, CS, WDG) and calculate commercial dosage.",
      "Calibrate a knapsack sprayer fitted with flat fan and floodjet nozzles to ensure uniform soil and foliar delivery."
    ],
    materialsRequired: ["Knapsack sprayer", "Flat fan nozzle (8002)", "Floodjet nozzle", "Measuring cylinder", "Stopwatch", "Measuring tape", "Water"],
    procedureSteps: [
      "Inspect sprayer tank, lance, and pressure chamber for leaks and uniform operating pressure.",
      "Fill sprayer with a known volume of water (10 L) and establish a comfortable walking speed (1 m/s) across a 25 m test strip.",
      "Measure spray swath width and time taken to spray the test area.",
      "Collect and measure nozzle discharge in a graduated cylinder over 60 seconds.",
      "Calculate spray volume per hectare using standard calibration equations.",
      "Demonstrate uniform pre-emergence herbicide spraying on a prepared seedbed."
    ],
    observationsAndRecording: [
      "Record nozzle discharge rate (L/min) and effective spray swath width (m).",
      "Compute delivery volume in L/ha (Target: 500 L/ha for PRE herbicides)."
    ],
    reflectionQuestions: [
      "Why are hollow-cone nozzles unsuitable for applying pre-emergence soil herbicides?",
      "What operational errors lead to herbicide drift and crop injury during post-emergence spraying?"
    ],
    submissionGuidance: "Submit a laboratory report detailing sprayer calibration steps, discharge curves, and safety precautions."
  },
  {
    id: 5,
    title: "Yield Estimation, Harvest Index, and Intercropping Competition Analysis (LER)",
    objectives: [
      "Perform pre-harvest yield estimation using sample quadrate sampling in standing kharif crops.",
      "Determine biological yield, economic yield, harvest index, and compute Land Equivalent Ratio (LER) for intercropping trials."
    ],
    materialsRequired: ["1m x 1m sampling quadrates", "Field harvesting shears", "Spring balance", "Moisture meter", "Threshing trays"],
    procedureSteps: [
      "Demarcate representative 1 sq. meter quadrate plots in sole and intercropped fields (e.g., Maize + Soybean).",
      "Count total number of plants, effective cobs/pods per plant, and average seeds per pod/cob.",
      "Harvest above-ground biomass, bundle, and record total fresh biological weight.",
      "Sun-dry, thresh, clean, and weigh dry economic grain yield; determine 100-seed weight and moisture percentage.",
      "Calculate Harvest Index (Economic Yield / Biological Yield x 100).",
      "Calculate partial and total Land Equivalent Ratio (LER) for the intercropped system."
    ],
    observationsAndRecording: [
      "Record plant stand, yield attributes, and grain weight per quadrate.",
      "Tabulate sole vs intercrop yield data and compute LER."
    ],
    reflectionQuestions: [
      "Why is the Harvest Index in traditional indeterminate pulses lower than in modern semi-dwarf cereals?",
      "How does an LER of 1.35 translate into land savings for a smallholder farmer?"
    ],
    submissionGuidance: "Submit an empirical field report documenting yield calculations, harvest index charts, and intercropping efficiency analysis."
  }
];

export const agp218Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const agp218CompleteSubject = {
  metadata: agp218Metadata,
  courseOutcomes: agp218CourseOutcomes,
  gradingComponents: agp218GradingComponents,
  textbooks: agp218Textbooks,
  practicals: agp218Practicals,
  units: agp218Units
};

export default agp218CompleteSubject;
