import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const agr233Metadata: SubjectMetadata = {
  code: "AGR233",
  name: "Bioherbicide Formulation and Production",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 1 | T: 0 | P: 2",
  courseCategory: "Skill Enhancement",
  syllabusPdfUrl: "/AGR233_Syllabus.pdf",
  overview: "Bioherbicide Formulation and Production provides undergraduate agricultural students with comprehensive technical competency in isolating, screening, formulating, mass-producing, and applying weed-pathogenic microorganisms and natural phytotoxins. The course integrates classical and molecular pathology, bioprocess engineering, and formulation chemistry to deliver sustainable alternatives to synthetic chemical herbicides within integrated weed management frameworks.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Foundations of Bioherbicides & Biocontrol Paradigms",
      description: "Understand the concept, history, and classification of bioherbicides, comparing classical and augmentative biocontrol doctrines alongside Indian CIB&RC regulatory protocols."
    },
    {
      code: "CO2",
      title: "Microbial Candidates & Etiological Validation",
      description: "Isolate and identify fungal and bacterial weed pathogens, fulfill Koch's postulates, and execute four-tier centrifugal phylogenetic screening to ensure non-target crop safety."
    },
    {
      code: "CO3",
      title: "Bioherbicide Formulation Engineering",
      description: "Formulate wettable powders, granules, and invert water-in-oil emulsions incorporating adjuvants, humectants, and UV-protectants to overcome atmospheric dew barriers."
    },
    {
      code: "CO4",
      title: "Fermentation Bioprocesses & Downstream Recovery",
      description: "Design and optimize solid substrate and submerged liquid fermentation systems, manage pseudoplastic rheology, and execute centrifugal separation and fluidized-bed/spray drying."
    },
    {
      code: "CO5",
      title: "Field Deployment, Agrochemical Compatibility & IWM Integration",
      description: "Schedule field applications based on micrometeorological parameters, assess tank-mix compatibility with synthetic agrochemicals, and deploy bioherbicides against major Indian weed complexes."
    }
  ],
  gradingStructure: [
    {
      component: "Continuous Assessment (CA)",
      weightage: "20%",
      marks: "30 Marks (Best 2 of 3)",
      details: "Two best descriptive continuous assessments evaluating isolation techniques, formulation recipes, and fermentation kinetics."
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
      details: "Comprehensive university examination covering all five units (Units 1 to 5) testing theoretical concepts, bioprocess calculations, and case studies."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Hands-on evaluation of weed pathogen isolation, hemocytometer spore counting, formulation preparation, and laboratory record submission."
    }
  ],
  textbooks: [
    {
      title: "Microbes and Microbial Products as Herbicides",
      author: "Robert E. Hoagland",
      note: "Standard ACS symposium reference for microbial candidate screening, fermentation kinetics, and natural phytotoxin chemistry."
    },
    {
      title: "Biological Control of Weeds with Plant Pathogens",
      author: "R. Charudattan and H. L. Walker",
      note: "Foundational textbook detailing classical and inundative weed biocontrol principles, host specificity protocols, and milestone case histories."
    },
    {
      title: "Biopesticides: Formulation and Delivery",
      author: "Franklin R. Hall and Joseph J. Menn",
      note: "Core industrial reference for emulsifiable concentrates, wettable powders, invert emulsions, and UV photoprotection."
    },
    {
      title: "Principles and Practices of Weed Management",
      author: "O. P. Gupta",
      note: "Authoritative Indian textbook covering agrochemical compatibility, Parthenium management, and integrated weed management (IWM)."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Survey and Isolation of Foliar Fungal Pathogens from Diseased Weed Specimens",
      objectives: [
        "Collect symptomatic weed specimens (Parthenium, Xanthium, Eichhornia) exhibiting leaf blights and cankers.",
        "Perform surface sterilization and axenic isolation on antibiotic-amended Potato Dextrose Agar (PDA)."
      ],
      materialsRequired: ["Sterile scalpels", "1% Sodium hypochlorite", "70% Ethanol", "PDA plates with streptomycin", "Inoculation loop"],
      procedureSteps: [
        "Excise 5 mm tissue segments at the advancing margin between necrotic and healthy leaf tissue.",
        "Immerse tissue in 70% ethanol for 30 seconds, followed by 1% sodium hypochlorite for 90 seconds.",
        "Rinse three times in sterile distilled water inside a laminar airflow cabinet.",
        "Plate four surface-sterilized tissue pieces per PDA plate and incubate at 25°C for 5 days.",
        "Subculture fungal hyphae from colony margins onto fresh slants to establish pure cultures."
      ],
      observationsAndRecording: [
        "Record colony morphology, mycelial color, radial growth rate, and sporulation time.",
        "Prepare microscopic slide mounts in lactophenol cotton blue to observe conidial shape and septation."
      ],
      reflectionQuestions: [
        "Why is it essential to sample from advancing lesion margins rather than completely dead central tissue?",
        "How do broad-spectrum antibiotics prevent bacterial overgrowth during fungal isolation?"
      ],
      submissionGuidance: "Submit a 2-page report including photographic evidence of pure cultures and detailed morphological sketches."
    },
    {
      id: 2,
      title: "Experimental Fulfillment of Koch's Postulates on Weed Seedlings",
      objectives: [
        "Prepare a standardized conidial suspension from a purified fungal weed isolate.",
        "Inoculate healthy weed seedlings and verify identical symptom reproduction."
      ],
      materialsRequired: ["Healthy 3-week-old weed seedlings in pots", "Atomizer sprayer", "Dew chamber (100% RH)", "Tween-80"],
      procedureSteps: [
        "Harvest conidia from 10-day-old fungal cultures by flooding plates with sterile 0.05% Tween-80 water.",
        "Adjust spore density to 1.0 × 10⁶ conidia/mL using a hemocytometer.",
        "Spray uniform volume of inoculum onto potted weed seedlings until run-off; spray control plants with sterile water.",
        "Incubate plants inside a mist chamber at 100% relative humidity and 25°C for 24 hours.",
        "Transfer plants to greenhouse benches and record symptom development daily for 14 days."
      ],
      observationsAndRecording: [
        "Record incubation period (hours to first visual lesion) and calculate Disease Severity Index (0-5 scale).",
        "Re-isolate the fungus from lesions and verify morphological identity with the original culture."
      ],
      reflectionQuestions: [
        "Why does an extended mist period serve as a critical co-factor in Postulate 3 fulfillment?",
        "What conclusions must be drawn if inoculated plants remain completely symptom-free?"
      ],
      submissionGuidance: "Submit completed pathogenicity data sheets and comparative microscopic identification records."
    },
    {
      id: 3,
      title: "Evaluation of Non-Target Crop Safety using Centrifugal Phylogenetic Screening",
      objectives: [
        "Execute host-range screening on economically vital agricultural crop seedlings.",
        "Document hypersensitive defense reactions versus compatible susceptible infections."
      ],
      materialsRequired: ["Seedlings of sunflower, tomato, wheat, rice, and mustard", "Spore suspension (1 × 10⁷ conidia/mL)", "Mist chamber"],
      procedureSteps: [
        "Grow test crop seedlings representing congeneric, confamilial, and staple economic families.",
        "Inoculate crops at 10× field application dose (1.0 × 10⁷ conidia/mL) with 0.05% surfactant.",
        "Maintain under continuous dew for 48 hours to create worst-case infection pressure.",
        "Monitor plants for 21 days for chlorosis, necrosis, cankers, or hypersensitive flecking."
      ],
      observationsAndRecording: [
        "Record infection percentage, lesion diameters, and microscopic presence of callose papillae.",
        "Confirm zero viable conidiogenesis on commercial crop foliage."
      ],
      reflectionQuestions: [
        "Why does testing begin with confamilial species rather than distantly related monocot crops?",
        "What distinguishes a microscopic hypersensitive necrotic fleck from a compatible disease lesion?"
      ],
      submissionGuidance: "Submit a complete host-range screening matrix complying with CIB&RC non-target safety guidelines."
    },
    {
      id: 4,
      title: "Mass Multiplication of Fungal Propagules via Solid Substrate Fermentation (SSF)",
      objectives: [
        "Prepare agricultural grain media and optimize moisture for fungal biomass production.",
        "Harvest and determine aerial conidial yield per gram of dry substrate."
      ],
      materialsRequired: ["Cracked sorghum or wheat grain", "Autoclavable polypropylene bags with breather filters", "Autoclave", "Sieve shaker"],
      procedureSteps: [
        "Soak sorghum grain in water overnight, drain excess water, and adjust moisture content to 50% w/w.",
        "Fill 250 g of moist grain into breather-patch bags and autoclave at 121°C (15 psi) for 45 minutes.",
        "Inoculate cooled bags with 5 mL of liquid mycelial starter culture under laminar airflow.",
        "Incubate at 25°C in darkness, shaking bags every 48 hours to prevent grain agglomeration.",
        "Air-dry colonized grain at 28°C under dehumidified air until moisture reaches <10%."
      ],
      observationsAndRecording: [
        "Track mycelial run across grain particles and days to visible aerial conidiogenesis.",
        "Harvest conidia using a laboratory sieve and record conidial yield per gram of dry grain."
      ],
      reflectionQuestions: [
        "Why does grain agglomeration cause core bed overheating during solid fermentation?",
        "What role do hydrophobic breathable filter patches play in solid-substrate bags?"
      ],
      submissionGuidance: "Submit a production log detailing substrate moisture curves, fermentation kinetics, and conidial recovery."
    },
    {
      id: 5,
      title: "Direct Propagule Counting and Viability Assay using Improved Neubauer Hemocytometer",
      objectives: [
        "Enumerate total spore concentrations using a standardized hemocytometer grid.",
        "Determine percentage spore germination on water agar."
      ],
      materialsRequired: ["Improved Neubauer Hemocytometer", "Cover slips", "Compound light microscope", "Water agar slides"],
      procedureSteps: [
        "Clean hemocytometer and position cover glass to display Newton's interference rings.",
        "Charge counting chamber with 10 microliters of diluted spore suspension via capillary action.",
        "Count spores within 5 central secondary squares (80 small squares) under 400× magnification.",
        "Calculate total spores/mL using: (Count / 80) × 4,000 × 1,000 × Dilution Factor.",
        "Pipette suspension droplets onto water agar slides, incubate for 16 hours at 25°C, and score germination."
      ],
      observationsAndRecording: [
        "Calculate total spore density (spores/mL) and viable spore density (CFU/mL).",
        "Document conidial dimensions (length and width in micrometers) using calibrated ocular micrometers."
      ],
      reflectionQuestions: [
        "Why must spores touching the top and left grid borders be counted while bottom and right are excluded?",
        "What defines a conidium as 'germinated' in standard quality control assays?"
      ],
      submissionGuidance: "Submit completed hemocytometer counting calculations and germination frequency histograms."
    },
    {
        id: 6,
        title: "Preparation of a Wettable Powder (WP) Bioherbicide Formulation",
        objectives: [
          "Formulate dry technical conidia with solid mineral carriers, wetting agents, and dispersants.",
          "Evaluate formulation physical properties: wettability, suspensibility, and pH."
        ],
        materialsRequired: ["Technical fungal conidia", "Kaolin clay", "Sodium lignosulfonate", "Tween-80", "Graduated measuring cylinders"],
        procedureSteps: [
          "Weigh technical conidia (15% w/w), kaolin carrier (75% w/w), sodium lignosulfonate (7% w/w), and Tween-80 (3% w/w).",
          "Homogenize dry inerts in a laboratory ball mill for 10 minutes at low shear.",
          "Add fungal conidia and blend gently to achieve uniform dispersion without frictional heating.",
          "Test wettability: drop 5.0 g of powder onto 100 mL water and time complete wetting without swirling.",
          "Test suspensibility: measure sedimentation volume in a 250 mL cylinder after 30 minutes standing."
        ],
        observationsAndRecording: [
          "Record wetting time in seconds (standard: <60 seconds).",
          "Calculate suspensibility percentage (standard: >70%) and measure slurry pH."
        ],
        reflectionQuestions: [
          "Why is excessive ball milling hazardous to living fungal conidia?",
          "How do lignosulfonate dispersants prevent particle flocculation in spray suspensions?"
        ],
        submissionGuidance: "Submit the formulated WP sample along with a standardized physicochemical evaluation datasheet."
    },
    {
        id: 7,
        title: "Preparation and Evaluation of an Invert Water-in-Oil Emulsion System",
        objectives: [
          "Construct a water-in-oil (W/O) invert bioherbicide emulsion using vegetable oil and low-HLB emulsifiers.",
          "Assess anti-evaporation droplet performance under low relative humidity."
        ],
        materialsRequired: ["Soybean or canola oil", "Sorbitan monooleate (Span-80)", "Spore suspension", "High-shear mechanical homogenizer"],
        procedureSteps: [
          "Prepare oil phase: blend 90 mL refined soybean oil with 10 mL Span-80 (low HLB emulsifier).",
          "Prepare aqueous phase: suspend fungal spores in 100 mL sterile water.",
          "Under continuous mechanical homogenization (3,000 RPM), add aqueous spore phase dropwise into the oil phase.",
          "Homogenize for 3 minutes to produce a thick, stable, creamy invert water-in-oil emulsion.",
          "Pipette 10-microliter droplets of pure water versus invert emulsion onto glass slides and measure droplet mass loss over 4 hours at 25°C."
        ],
        observationsAndRecording: [
          "Confirm water-in-oil status using the drop-dilution test in pure water (invert droplet does not disperse).",
          "Plot comparative evaporation curves: water versus invert emulsion droplets over time."
        ],
        reflectionQuestions: [
          "Why does an external oil phase retard droplet evaporation compared to conventional oil-in-water emulsions?",
          "What equipment modifications are required to spray high-viscosity invert emulsions in the field?"
        ],
        submissionGuidance: "Submit droplet evaporation kinetics graphs and emulsion stability observations."
    },
    {
        id: 8,
        title: "In Vitro Agrochemical Compatibility Testing using Poisoned Food Technique",
        objectives: [
          "Evaluate compatibility between a bioherbicide fungus and synthetic herbicides/fungicides.",
          "Determine the Maximum Non-Inhibitory Concentration (MNIC) on radial growth and germination."
        ],
        materialsRequired: ["PDA plates", "Synthetic chemical pesticides (glyphosate, 2,4-D, carbendazim, mancozeb)", "Fungal culture"],
        procedureSteps: [
          "Melt PDA and cool to 45°C in a water bath.",
          "Amend separate agar flasks with field-recommended concentrations of test agrochemicals; prepare unamended control agar.",
          "Pour into petri plates and allow to solidify under laminar airflow.",
          "Inoculate plate centers with 5 mm mycelial plugs of the bioherbicide fungus.",
          "Incubate at 25°C for 7 days, measuring colony radial diameter daily in two perpendicular directions."
        ],
        observationsAndRecording: [
          "Calculate percentage mycelial growth inhibition: I = [(C - T) / C] × 100.",
          "Categorize agrochemicals into: Compatible (<15% inhibition), Moderately Incompatible (15-50%), and Incompatible (>50%)."
        ],
        reflectionQuestions: [
          "Why do systemic synthetic fungicides cause 100% inhibition even at low concentrations?",
          "How can sub-lethal concentrations of chemical herbicides stimulate fungal growth in vitro?"
        ],
        submissionGuidance: "Submit a complete agrochemical compatibility matrix with radial growth curves and tank-mix recommendations."
    }
  ]
};

export const agr233Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const agr233CompleteSubject = {
  metadata: agr233Metadata,
  units: agr233Units
};

export default agr233CompleteSubject;
