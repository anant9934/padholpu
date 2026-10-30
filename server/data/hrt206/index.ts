import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const hrt206Metadata: SubjectMetadata = {
  code: "HRT206",
  name: "Production Technology of Fruit and Plantation Crops",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 4,
  ltp: "L: 3 | T: 0 | P: 2",
  courseCategory: "Core",
  syllabusPdfUrl: "/HRT206_Syllabus.pdf",
  overview: "Production Technology of Fruit and Plantation Crops provides agricultural undergraduates with a comprehensive foundation in the commercial orchard management, canopy architecture, propagation protocols, nutritional regimes, crop regulation (Bahar treatments), and post-harvest technology of major fruit and plantation crops. The curriculum encompasses tropical, subtropical, and arid fruit crops (Mango, Citrus, Banana, Papaya, Guava, Grape, Pomegranate, Litchi, Ber) and premier commercial plantation crops (Coconut, Cashew, Arecanut, Cocoa, Coffee, Tea), integrating post-harvest physiology, storage engineering (CA/MAP/ZECC), value addition (FSSAI beverages, jams, jellies), and international export quality compliance (Codex, AGMARK, GlobalGAP).",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Horticultural Classification and Mango Production Dynamics",
      description: "Classify fruit crops botanically and agro-climatically, master commercial mango propagation (epicotyl/veneer grafting), high-density planting, canopy architecture, and physiological disorder containment (malformation, spongy tissue)."
    },
    {
      code: "CO2",
      title: "Commercial Technology of Citrus, Banana, and Papaya",
      description: "Evaluate citrus rootstock-scion interactions, gummosis, and Huanglongbing (greening); formulate precision tissue culture and fertigation packages for Grand Naine banana; and master sex expression, papain harvesting, and PRSV control in papaya."
    },
    {
      code: "CO3",
      title: "Canopy Architecture, Bahar Regulation, and Viticulture",
      description: "Apply meadow orcharding and Bahar treatments (Ambe, Mrig, Hasta) in guava and pomegranate; manage guava wilt; master grape training (Bower, Telephone), dual pruning cycles (foundation vs forward), and GA3/CPPU bioregulation; and cultivate litchi and ber."
    },
    {
      code: "CO4",
      title: "Plantation Crops Production and Processing",
      description: "Analyze coconut heterosis (TxD, DxT), copra recovery, and pest management (Rhinoceros beetle, Red palm weevil); master cashew softwood grafting, top-working, and CNSL; manage arecanut Koleroga and curing (Chali vs Kalipak); understand cocoa sweat-box fermentation; and contrast coffee (Arabica vs Robusta) and tea canopy training and CTC/orthodox processing."
    },
    {
      code: "CO5",
      title: "Post-Harvest Physiology, Value Addition, and Export Standards",
      description: "Quantify post-harvest losses, explain ethylene biochemistry (Yang cycle) and 1-MCP action; evaluate pre-cooling, waxing, ZECC, and CA/MAP storage; formulate FSSAI fruit beverages, jams, and jellies; and align production with Codex, AGMARK, VHT/irradiation quarantine, and GlobalGAP certification."
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
      details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing knowledge, diagnostic analysis, and commercial orchard design."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Evaluation of practical lab records, viva-voce, grafting/budding proficiency, maturity indices testing, jelly sheet test execution, and pest/disease specimen identification."
    }
  ],
  textbooks: [
    {
      title: "Production Technology of Fruit Crops",
      author: "K. L. Chadha",
      note: "Authoritative handbook on commercial pomology and agro-climatic packages of Indian fruit crops."
    },
    {
      title: "Textbook of Pomology (Vols 1-4)",
      author: "T. K. Bose, S. K. Mitra, and D. Sanyal",
      note: "Comprehensive multi-volume treatise detailing botany, physiology, cultivars, and orchard management."
    },
    {
      title: "Plantation Crops",
      author: "K. V. Peter and P. K. Valsalakumari",
      note: "Standard national textbook covering coconut, cashew, arecanut, cocoa, coffee, tea, and rubber."
    },
    {
      title: "Postharvest Technology of Horticultural Crops",
      author: "A. A. Kader",
      note: "Premier international reference for post-harvest physiology, ethylene regulation, and CA/MAP storage systems."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Identification of Major Fruit and Plantation Crop Species and Commercial Cultivars",
      objectives: [
        "Identify commercial cultivars of mango, citrus, banana, guava, grape, and pomegranate based on foliar and fruit morphological markers.",
        "Recognize botanical specimens of plantation crops: coconut, cashew, arecanut, cocoa, coffee, and tea."
      ]
    },
    {
      id: 2,
      title: "Vegetative Propagation Techniques: Epicotyl Grafting, Softwood Grafting, Air Layering, and Budding",
      objectives: [
        "Perform stone/epicotyl grafting in mango and softwood cleft grafting in cashew.",
        "Execute air layering (marcottage) in litchi using sphagnum moss and IBA, and T-budding in citrus."
      ]
    },
    {
      id: 3,
      title: "Orchard Layout, High-Density Planting (HDP) Geometry, and Pit Preparation",
      objectives: [
        "Design square, rectangular, and paired-row high-density planting layouts for banana and meadow guava.",
        "Calculate pit dimensions, soil-FYM amendments, and basal bio-agent enrichment protocols."
      ]
    },
    {
      id: 4,
      title: "Canopy Training and Pruning Systems in Grape, Guava, and Ber",
      objectives: [
        "Perform foundation and forward pruning on grapevines trained on Bower and Telephone trellises.",
        "Practice heading back and shoot topping in meadow guava and summer pruning in ber."
      ]
    },
    {
      id: 5,
      title: "Determination of Maturity Indices, Total Soluble Solids (TSS), and Titratable Acidity",
      objectives: [
        "Measure TSS using hand-held digital refractometers and titrate fruit acidity with standard NaOH.",
        "Evaluate specific gravity in mango and starch-iodine index in pome fruits."
      ]
    },
    {
      id: 6,
      title: "Preparation of Value-Added Products: Guava Jelly (Sheet Test) and Mango RTS/Squash",
      objectives: [
        "Prepare crystal-clear guava jelly and verify the end-point using the Sheet/Flake test at 65° Brix.",
        "Formulate Ready-to-Serve (RTS) fruit beverage and fruit squash conforming to FSSAI standards."
      ]
    }
  ]
};

export const hrt206Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const hrt206CompleteSubject = {
  metadata: hrt206Metadata,
  units: hrt206Units
};

export default hrt206CompleteSubject;
