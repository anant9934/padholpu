import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const sol203Metadata: SubjectMetadata = {
  code: "SOL203",
  name: "Manure and Fertilizer Testing",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 1 | T: 0 | P: 2",
  courseCategory: "Skill Enhancement",
  syllabusPdfUrl: "/SOL203_Syllabus.pdf",
  overview: "Manure and Fertilizer Testing equips undergraduate agricultural students with comprehensive theoretical knowledge and professional laboratory skills in soil sampling, chemical fertilizer quality control, organic manure evaluation, and instrumental analysis. The course covers nutrient concepts, bulky and concentrated organic manures, fertilizer manufacturing standards under the Fertilizer (Control) Order (FCO 1985), quantitative laboratory assays (Kjeldahl, spectrophotometry, flame photometry, AAS), STCR targeted yield recommendations, Integrated Nutrient Management (INM), and GIS-based regional soil fertility mapping.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Soil Fertility Principles & Nutrient Dynamics",
      description: "Analyze the fundamental principles of soil fertility, essential macro- and micronutrients, soil organic matter functions, cation exchange equilibria, and diagnostic deficiency symptoms."
    },
    {
      code: "CO2",
      title: "Organic Manures & Composting Technologies",
      description: "Evaluate bulky and concentrated organic manures, master Indore and Bangalore composting, vermiculture operations with Eisenia fetida, green manuring, and biofertilizer inoculants."
    },
    {
      code: "CO3",
      title: "Chemical Fertilizers & Statutory FCO Standards",
      description: "Classify straight, complex, and mixed fertilizers; explain the manufacturing and reactions of Urea, NCU, SSP, DAP, MOP, and SOP; and apply FCO Schedule II official sampling protocols."
    },
    {
      code: "CO4",
      title: "Laboratory Testing Methodologies & Instrumental Analysis",
      description: "Execute standard wet chemical and instrumental assays including Walkley-Black organic carbon, Kjeldahl nitrogen, Olsen/Bray phosphorus, flame photometric potassium, and DTPA micronutrient cations by AAS."
    },
    {
      code: "CO5",
      title: "Fertilizer Recommendations, Quality Assurance & Legal Enforcement",
      description: "Formulate soil test-based and STCR targeted yield fertilizer recommendations, design Integrated Nutrient Management (INM) programs, detect fraudulent adulteration via spot tests, and enforce FCO and ECA statutory provisions."
    }
  ],
  gradingStructure: [
    {
      component: "Continuous Assessment (CA)",
      weightage: "20%",
      marks: "30 Marks (Best 2 of 3)",
      details: "Two best descriptive continuous assessments evaluating analytical calculations, chemical extraction mechanisms, and manure quality parameters."
    },
    {
      component: "Mid-Term Examination (MTE)",
      weightage: "20%",
      marks: "40 Marks",
      details: "Mid-term university examination covering Units 1 and 2, comprising objective and short/medium descriptive questions."
    },
    {
      component: "End-Term Examination (ETE)",
      weightage: "40%",
      marks: "70 Marks",
      details: "Comprehensive university examination covering all five units (Units 1 to 5) testing theoretical concepts, STCR derivations, laboratory methods, and legal provisions."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Hands-on evaluation of soil sampling reduction, Walkley-Black titration, Olsen P colorimetry, flame photometer calibration, fertilizer spot testing, and laboratory record submission."
    }
  ],
  textbooks: [
    {
      title: "Soil Fertility and Fertilizers: An Introduction to Nutrient Management",
      author: "John L. Havlin, Samuel L. Tisdale, Werner L. Nelson, and James D. Beaton",
      note: "Globally acclaimed foundational textbook for soil fertility concepts, nutrient cycles, fertilizer chemistry, and plant uptake mechanisms."
    },
    {
      title: "Methods of Analysis of Soils, Plants, Waters, and Fertilisers",
      author: "H. L. S. Tandon",
      note: "Authoritative practical manual published by FDCO detailing standard laboratory analytical protocols, reagent preparation, and instrumental calibration."
    },
    {
      title: "The Fertilizer (Control) Order, 1985 (with Amendments)",
      author: "Department of Agriculture & Cooperation, Ministry of Agriculture, Govt. of India",
      note: "Statutory legal reference governing fertilizer specifications, inspector duties, sampling schedules, laboratory reporting in Form K, and tolerance limits."
    },
    {
      title: "Soil Testing and Plant Analysis",
      author: "R. L. Westerman (SSSA Book Series)",
      note: "Comprehensive advanced reference on soil extraction chemistry, critical nutrient limits, Cate-Nelson partitioning, and QA/QC in testing laboratories."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Collection, Processing, and Preparation of Representative Composite Soil Samples",
      objectives: [
        "Collect representative surface soil cores (0-15 cm) using a zig-zag transect across an agricultural field.",
        "Process, air-dry in shade, and prepare 2.0 mm and 0.5 mm analytical fractions using coning and quartering."
      ],
      materialsRequired: ["Stainless steel auger or spade", "Clean plastic bucket", "Wooden mortar and pestle", "2.0 mm and 0.5 mm IS sieves", "Polythene sample bags and tags"],
      procedureSteps: [
        "Demarcate a 1-hectare uniform field plot, excluding bunds, shade, and manure pits.",
        "Collect 15-20 core sub-samples to 15 cm depth following a 'W' or zig-zag path.",
        "Pool sub-samples in a plastic bucket, crush clods, and spread uniformly on a clean polythene sheet.",
        "Perform sample reduction by coning and quartering until approximately 500 g representative soil remains.",
        "Air-dry the composite sample in shade at room temperature (25-35°C).",
        "Gently grind dried soil with a wooden pestle and pass through a 2.0 mm sieve for general assays; sieve a 50 g sub-sample through a 0.5 mm sieve for OC and N assays."
      ],
      observationsAndRecording: [
        "Record field location, GPS coordinates, previous crop, sampling depth, and soil color/texture.",
        "Calculate recovery percentage of fine earth (<2 mm) relative to coarse rock fragments (>2 mm)."
      ],
      reflectionQuestions: [
        "Why must soil samples never be dried in a hot air oven at 105°C prior to fertility testing?",
        "Why are brass sieves and steel utensils strictly avoided when sampling for micronutrients?"
      ],
      submissionGuidance: "Submit a 2-page practical record with sample registration tag, quartering flowchart, and sample preservation protocol."
    },
    {
      id: 2,
      title: "Determination of Soil Reaction (pH) and Electrical Conductivity (EC)",
      objectives: [
        "Measure active soil pH using a combination glass electrode in 1:2 or 1:2.5 soil-water suspension.",
        "Determine electrical conductivity (EC) to assess total soluble salts and salinity hazards."
      ],
      materialsRequired: ["Digital pH meter with combination electrode", "Conductivity meter with dip cell", "Standard buffer solutions (pH 4.0, 7.0, 9.2)", "Standard 0.01 M KCl solution", "Distilled water"],
      procedureSteps: [
        "Weigh 20.0 g of 2 mm sieved soil into a 100 ml beaker and add 40.0 ml distilled water (1:2 ratio).",
        "Stir intermittently with a glass rod for 30 minutes to allow soil-water equilibrium.",
        "Calibrate the pH meter using pH 7.00 and pH 4.00 (or 9.20) standard buffers.",
        "Immerse the combination electrode into the supernatant suspension and record stabilized pH.",
        "Calibrate the conductivity meter using standard 0.01 M KCl (1.413 dS/m at 25°C).",
        "Insert the conductivity cell into the supernatant and record electrical conductivity in dS/m."
      ],
      observationsAndRecording: [
        "Record sample temperature and apply temperature correction factor to normalize EC to 25°C: EC25 = ECt * [1 - 0.02 * (t - 25)].",
        "Classify the soil into reaction class (acidic, neutral, alkaline, sodic) and salinity class (non-saline, slightly saline, strongly saline)."
      ],
      reflectionQuestions: [
        "What is the physical principle of the potential generated across the lithia-silica glass membrane?",
        "How does dilution from 1:2 to 1:5 affect measured pH in alkaline-calcareous versus saline soils?"
      ],
      submissionGuidance: "Submit analytical data sheet with calibration slope, recorded pH/EC, and soil classification report."
    },
    {
      id: 3,
      title: "Determination of Soil Organic Carbon by Walkley-Black Wet Oxidation Method",
      objectives: [
        "Oxidize active soil organic carbon using standard potassium dichromate in concentrated sulfuric acid.",
        "Back-titrate unreacted dichromate with ferrous ammonium sulfate to quantify organic carbon."
      ],
      materialsRequired: ["1.0 N K2Cr2O7 solution", "Concentrated H2SO4", "0.5 N Ferrous ammonium sulfate (FAS)", "85% Ortho-phosphoric acid (H3PO4)", "Diphenylamine indicator", "500 ml Erlenmeyer flasks"],
      procedureSteps: [
        "Weigh accurately 1.000 g of 0.2 mm sieved soil into a 500 ml conical flask.",
        "Add exactly 10.0 ml of 1.0 N K2Cr2O7 from a volumetric pipette and swirl gently.",
        "Rapidly add 20.0 ml concentrated H2SO4 from an automatic dispenser; swirl for 1 minute to ensure thorough mixing.",
        "Allow the flask to stand on an insulating asbestos sheet for 30 minutes to cool.",
        "Dilute with 200 ml distilled water; add 10 ml H3PO4 and 1.0 ml diphenylamine indicator.",
        "Titrate with standardized 0.5 N FAS until color shifts from deep violet-blue to brilliant apple-green.",
        "Perform a simultaneous reagent blank titration without soil."
      ],
      observationsAndRecording: [
        "Record burette volumes for blank (V_blank) and soil (V_sample).",
        "Calculate Organic Carbon (%): [(V_blank - V_sample) * N_FAS * 0.003 * 100 * 1.30] / Sample Wt.",
        "Calculate Soil Organic Matter (%) = % Organic Carbon * 1.724 (van Bemmelen factor)."
      ],
      reflectionQuestions: [
        "Why is ortho-phosphoric acid added prior to titration with ferrous ammonium sulfate?",
        "Why is an empirical recovery correction factor of 1.30 (77% recovery) traditionally applied?"
      ],
      submissionGuidance: "Submit complete titration records, stoichiometry calculations, and fertility rating (Low, Medium, High)."
    },
    {
      id: 4,
      title: "Determination of Available Nitrogen by Alkaline Permanganate Method (Subbiah & Asija)",
      objectives: [
        "Distil readily hydrolyzable organic and mineral nitrogen in soil using alkaline KMnO4.",
        "Quantify liberated ammonia via acid titration to index soil available nitrogen status."
      ],
      materialsRequired: ["Kjeldahl distillation assembly", "0.32% Potassium permanganate (KMnO4)", "2.5% Sodium hydroxide (NaOH)", "4% Boric acid solution with mixed indicator", "Standard 0.02 N H2SO4"],
      procedureSteps: [
        "Weigh 20.0 g of 2 mm sieved soil into an 800 ml Kjeldahl distillation flask and moisten with 20 ml water.",
        "Add 100 ml of 0.32% KMnO4 solution followed by 50 ml of 2.5% NaOH solution and a few boiling beads.",
        "Immediately connect the flask to the splash head and condenser of the Kjeldahl assembly.",
        "Submerge condenser outlet tube in a conical flask containing 20 ml of 4% boric acid with bromocresol green-methyl red indicator.",
        "Heat the flask steadily and collect ~100 ml of distillate over 30 minutes (boric acid shifts from pink to emerald green).",
        "Titrate distillate against standard 0.02 N H2SO4 until emerald green color reverts to faint pinkish-red.",
        "Run a simultaneous blank distillation without soil."
      ],
      observationsAndRecording: [
        "Record titrant volumes for sample (V1) and blank (V0).",
        "Calculate Available N (kg/ha) = [(V1 - V0) * N_acid * 0.014 * 2.24 * 10^6] / (20 g * 1000) = (V1 - V0) * N_acid * 1568."
      ],
      reflectionQuestions: [
        "What specific nitrogen fractions are oxidized and measured by the alkaline permanganate reagent?",
        "Why must the splash head be inserted between the distillation flask and the condenser?"
      ],
      submissionGuidance: "Submit step-by-step calculations and classify soil into Low (<280), Medium (280-560), or High (>560 kg N/ha)."
    },
    {
      id: 5,
      title: "Colorimetric Determination of Available Phosphorus in Soil by Olsen Method",
      objectives: [
        "Extract plant-available phosphorus using 0.5 M NaHCO3 at pH 8.5 with activated charcoal.",
        "Develop molybdenum blue color using ascorbic acid and measure absorbance at 882 nm."
      ],
      materialsRequired: ["UV-Vis Spectrophotometer", "0.5 M NaHCO3 extractant (pH 8.5)", "Darco G-60 activated charcoal", "Murphy & Riley working reagent (ascorbic acid + ammonium molybdate)", "Standard KH2PO4 stock solution"],
      procedureSteps: [
        "Weigh 2.5 g of 2 mm sieved soil into a 150 ml Erlenmeyer flask.",
        "Add 50.0 ml of Olsen's reagent and 0.5 g of phosphate-free activated charcoal (Darco G-60).",
        "Shake on an orbital/reciprocal shaker at 25°C for exactly 30 minutes.",
        "Filter through Whatman No. 40 filter paper to obtain a clear, colorless filtrate.",
        "Pipette 5.0 ml of filtrate into a 25 ml volumetric flask; neutralize effervescence with dilute H2SO4.",
        "Add 4.0 ml of Murphy & Riley working reagent, make up to volume with distilled water, and mix.",
        "After 15 minutes of color development, read absorbance at 882 nm against a reagent blank.",
        "Construct standard calibration curve using 0, 0.1, 0.2, 0.4, 0.6, 0.8, and 1.0 ppm P standards."
      ],
      observationsAndRecording: [
        "Record spectrophotometric absorbance values and determine extract P concentration from the standard curve.",
        "Calculate Available P in soil (kg/ha) = ppm P in solution * (50 / 2.5) * (25 / 5) * 2.24 = ppm P * 224.",
        "Convert to Available P2O5 (kg/ha) = kg P/ha * 2.29."
      ],
      reflectionQuestions: [
        "How does 0.5 M NaHCO3 at pH 8.5 extract phosphorus from basic calcium phosphates in calcareous soils?",
        "Why is activated charcoal (Darco G-60) added to the soil suspension during extraction?"
      ],
      submissionGuidance: "Submit calibration graph, regression equation (R² >= 0.99), and soil fertility classification."
    },
    {
      id: 6,
      title: "Determination of Available Potassium in Soil by Flame Emission Photometry",
      objectives: [
        "Extract exchangeable potassium from soil colloids using neutral 1 N ammonium acetate (pH 7.0).",
        "Calibrate flame photometer and measure potassium emission intensity at 766.5 nm."
      ],
      materialsRequired: ["Digital Flame Photometer with K filter (766.5 nm)", "Neutral 1 N Ammonium Acetate (CH3COONH4, pH 7.00)", "Stock 1000 ppm K solution (KCl)", "Whatman No. 1 filter paper", "Mechanical shaker"],
      procedureSteps: [
        "Weigh 5.000 g of 2 mm sieved soil into a 150 ml conical flask.",
        "Add 25.0 ml of neutral 1 N ammonium acetate extractant (1:5 ratio).",
        "Shake on a mechanical shaker for exactly 5 minutes.",
        "Filter through Whatman No. 1 filter paper, discarding the first 5 ml of filtrate.",
        "Prepare working potassium standards (0, 5, 10, 15, 20, 25 ppm K) in neutral 1 N NH4OAc matrix.",
        "Ignite flame photometer burner (LPG-air), zero instrument with 0 ppm standard, and set top scale (100) with 25 ppm standard.",
        "Aspirate soil filtrate extracts and record emission values."
      ],
      observationsAndRecording: [
        "Record emission readings and compute ppm K from the linear calibration curve.",
        "Calculate Available K in soil (kg/ha) = ppm K in filtrate * (25 / 5) * 2.24 = ppm K * 11.2.",
        "Convert to Available K2O (kg/ha) = kg K/ha * 1.20."
      ],
      reflectionQuestions: [
        "Why does ammonium acetate serve as an ideal extractant for exchangeable potassium?",
        "What causes sodium ionization interference in flame emission and how can it be suppressed?"
      ],
      submissionGuidance: "Submit standard emission curve, calculation sheet, and fertility interpretation (Low <108, Med 108-280, High >280 kg/ha)."
    },
    {
      id: 7,
      title: "Determination of Available Micronutrient Cations (Zn, Fe, Cu, Mn) by AAS",
      objectives: [
        "Extract bioavailable micronutrient cations using Lindsay and Norvell's DTPA extractant at pH 7.30.",
        "Operate Atomic Absorption Spectrophotometer (AAS) with element-specific hollow cathode lamps."
      ],
      materialsRequired: ["Atomic Absorption Spectrophotometer with Zn/Fe HCL lamps", "DTPA extractant (0.005 M DTPA + 0.01 M CaCl2 + 0.1 M TEA, pH 7.30)", "Plastic extraction bottles", "Certified micronutrient standard stock solutions (1000 ppm)"],
      procedureSteps: [
        "Weigh 10.0 g of 2 mm sieved soil into a clean 100 ml polyethylene bottle (strictly avoid glass/brass contact).",
        "Add 20.0 ml of DTPA extractant (1:2 soil-to-extractant ratio).",
        "Cap tightly and shake on an orbital shaker at 120 rpm for exactly 2 hours at 25°C.",
        "Filter immediately through Whatman No. 42 ashless filter paper into plastic vials.",
        "Prepare working standards: Zinc (0.2, 0.5, 1.0, 2.0 ppm) and Iron (1.0, 2.5, 5.0, 10.0 ppm) in DTPA matrix.",
        "Install Zn hollow cathode lamp (213.9 nm), align burner head, optimize air-acetylene flame, and aspirate standards.",
        "Aspirate sample extracts and record absorbance values; repeat for Fe (248.3 nm)."
      ],
      observationsAndRecording: [
        "Record AAS absorbance, verify linearity, and compute ppm in extract.",
        "Calculate Available Micronutrient in soil (mg/kg or ppm) = ppm in extract * (20 ml / 10 g) = ppm in extract * 2."
      ],
      reflectionQuestions: [
        "Why is DTPA extractant buffered strictly at pH 7.30 using triethanolamine (TEA)?",
        "What is the critical deficiency threshold for DTPA-extractable Zinc in Indian soils?"
      ],
      submissionGuidance: "Submit AAS calibration printout, sample calculations, and deficiency diagnosis."
    },
    {
      id: 8,
      title: "Physical and Chemical Spot Tests for Detection of Fertilizer Adulteration",
      objectives: [
        "Execute rapid physical and chemical spot tests to detect adulteration in Urea, DAP, SSP, and MOP.",
        "Verify compliance against statutory FCO physical standards."
      ],
      materialsRequired: ["Genuine and suspected samples of Urea, DAP, SSP, MOP", "Slaked lime [Ca(OH)2]", "Dilute HCl (10%)", "Barium chloride (BaCl2) solution", "Nichrome wire loop and cobalt glass", "Test tubes, burners, porcelain dishes"],
      procedureSteps: [
        "Urea Endothermic Dissolution Test: Dissolve 10 g urea in 20 ml water in a beaker; observe temperature change by touch and thermometer.",
        "Urea Biuret Flame Test: Heat 2 g urea gently in a dry test tube until it melts, bubbles, and solidifies; cool, add 2 ml 10% NaOH and 2 drops 1% CuSO4; observe violet color.",
        "DAP Lime Ammonia Test: Rub 1 g DAP granules with 0.5 g moist slaked lime on palm; observe pungent ammonia gas and test with moist red litmus paper.",
        "DAP/SSP Carbonate Effervescence Test: Add 5 ml dilute 10% HCl to 1 g DAP/SSP; inspect for bubbling effervescence indicating limestone/marble dust adulterant.",
        "SSP Sulfate Precipitation Test: Dissolve 1 g SSP in dilute HCl, filter, and add 1 ml 10% BaCl2 solution; observe dense white BaSO4 precipitate.",
        "MOP Water Solubility & Flame Test: Dissolve 5 g MOP in water (detect insoluble clay/sand); perform platinum wire flame test observing lilac flame through cobalt glass."
      ],
      observationsAndRecording: [
        "Record visual observations, thermal reactions, gas evolution, and precipitate formation for each fertilizer.",
        "Compile a diagnostic adulteration matrix distinguishing genuine fertilizers from common fraudulent adulterants."
      ],
      reflectionQuestions: [
        "Why does genuine urea produce an intense cooling effect upon dissolution in water?",
        "How can an extension agent visually detect rock phosphate adulteration in commercial DAP?"
      ],
      submissionGuidance: "Submit a comprehensive fertilizer testing report detailing the visual and chemical detection tests executed."
    }
  ]
};

export const sol203Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const sol203CompleteSubject = {
  metadata: sol203Metadata,
  units: sol203Units
};

export default sol203CompleteSubject;
