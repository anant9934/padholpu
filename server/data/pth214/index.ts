import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const pth214Metadata: SubjectMetadata = {
  code: "PTH214",
  name: "Fundamentals of Nematology",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 1 | T: 0 | P: 2",
  courseCategory: "Core",
  syllabusPdfUrl: "/PTH214_Syllabus.pdf",
  overview: "Fundamentals of Nematology introduces students to the economic significance, biology, morphology, and ecological dynamics of plant-parasitic nematodes in agricultural production systems. The course covers structural anatomy and diagnostic taxonomy, the biological profiles and parasitism of key nematode genera (root-knot, cyst, lesion, reniform, citrus, and burrowing nematodes), symptom identification, diagnostic extraction protocols, synergistic nematode-pathogen complexes, integrated nematode management tactics, and statutory quarantine regulations under the Destructive Insects and Pests Act (DIPA 1914) and Plant Quarantine Order 2003.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "History, Morphology, Anatomy and Classification of Nematodes",
      description: "Understand the historical evolution of nematology, differentiate free-living and plant-parasitic nematodes, and master structural anatomy including cuticle, stomatostylet/odontostylet, esophagus, and reproductive systems."
    },
    {
      code: "CO2",
      title: "Biology, Host-Parasite Interactions and Major Genera",
      description: "Analyze the life cycles, specialized feeding sites (giant cells, syncytia, nurse cells), and economic damage caused by major sedentary and migratory nematode genera (Meloidogyne, Heterodera, Globodera, Pratylenchus, Rotylenchulus, Radopholus)."
    },
    {
      code: "CO3",
      title: "Symptomatology, Disease Complexes and Extraction Methods",
      description: "Identify distinct above-ground and below-ground nematode symptoms, evaluate synergistic nematode-pathogen complexes (wilt, black head, tundu), and master extraction techniques including Cobb's sieving, Baermann funnel, and Fenwick can."
    },
    {
      code: "CO4",
      title: "Integrated Nematode Management (INM)",
      description: "Evaluate cultural, biological, chemical, and physical nematode control tactics, including crop rotation, solarization, biocontrol fungi (Trichoderma, Pochonia, Purpureocillium), biofumigation, and non-fumigant nematicides."
    },
    {
      code: "CO5",
      title: "Crop Nematode Diseases, Quarantine and Phytosanitary Regulations",
      description: "Formulate management plans for crop-specific nematode challenges (rice white tip, wheat ear-cockle, cereal cyst, citrus slow decline, potato cyst), and evaluate legal biosecurity under DIPA 1914, PQO 2003, and Pest Risk Analysis."
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
      details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing taxonomic knowledge, diagnosis, and integrated management scenarios."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Evaluation of practical lab notebook, viva-voce, soil extraction methods, perineal pattern preparation, root staining techniques, and microscopic specimen identification."
    }
  ],
  textbooks: [
    {
      title: "Plant Nematology",
      author: "N. G. Ravichandra",
      note: "Standard university textbook covering nematode morphology, taxonomy, crop diseases, and integrated management."
    },
    {
      title: "Introduction to Plant Nematology",
      author: "V. H. Dropkin",
      note: "Classical text on physiological host-parasite interactions, histopathology, and feeding site development."
    },
    {
      title: "Plant Parasitic Nematodes of India: Problems and Progress",
      author: "P. C. Trivedi",
      note: "Comprehensive treatise documenting nematode distribution, economic damage, and management across Indian agriculture."
    },
    {
      title: "Nematode Parasites of Crops in Subtropical and Tropical Agriculture",
      author: "M. Luc, R. A. Sikora, and J. Bridge",
      note: "Authoritative global manual for tropical fruit, cereal, vegetable, and plantation crop nematology."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Extraction of Nematodes from Soil using Cobb's Decanting and Sieving and Modified Baermann Funnel",
      objectives: [
        "Master the mechanical principles of specific gravity and size exclusion in nematode extraction.",
        "Combine Cobb's sieving with the modified Baermann funnel to extract active vermiform nematodes from field soil."
      ],
      materialsRequired: ["Soil sample (250 cc)", "Two 5-liter plastic buckets", "Standard test sieves (20, 60, 100, 325, 400 mesh)", "Baermann funnel setup with rubber tubing and pinchcock", "Facial tissue paper and wire gauze support", "Beakers and wash bottle"],
      procedureSteps: [
        "Suspend 200-250 cc of composite field soil in 2 liters of water in a bucket, vigorously breaking up soil clods.",
        "Allow heavy sand particles to settle for 30-45 seconds, then decant the cloudy suspension through a 20-mesh sieve into a second bucket to remove coarse organic debris.",
        "Swirl the liquid in the second bucket, let settle for 20-30 seconds, and pour through a 60-mesh sieve nested over a 325-mesh or 400-mesh sieve.",
        "Wash the residue collected on the fine 325/400-mesh sieve gently into a 100 ml beaker using a fine stream of water from a wash bottle.",
        "Transfer the concentrated catch onto a facial tissue placed over wire gauze in a Baermann funnel filled with fresh water to touch the tissue base.",
        "Incubate at room temperature for 24-48 hours. Active nematodes wriggle through the tissue pores, settle at the rubber tube apex, and are drawn off by releasing the pinchcock into a Syracuse dish for examination."
      ],
      observationsAndRecording: [
        "Record the total nematode count per 250 cc soil using a stereoscopic counting dish under 20x magnification.",
        "Classify extracted nematodes broadly into plant-parasitic (stylet-bearing) and free-living microbial feeders."
      ],
      reflectionQuestions: [
        "Why is a 30-second settling interval crucial prior to pouring the soil suspension through fine sieves?",
        "What are the major limitations of the Baermann funnel technique for sluggish or sedentary nematodes?"
      ],
      submissionGuidance: "Submit a complete illustrated extraction flow diagram with calculations of nematode density per 250 cc soil."
    },
    {
      id: 2,
      title: "Extraction of Cyst Nematodes (Heterodera / Globodera) from Soil using the Fenwick Can Method",
      objectives: [
        "Isolate buoyant dead cysts of Heterodera and Globodera from air-dried soil samples.",
        "Quantify cyst population densities per 100 g of air-dried soil."
      ],
      materialsRequired: ["Fenwick can apparatus with overflow collar and drain", "Air-dried soil sample (100-200 g)", "16-mesh (1 mm) and 60-mesh (250 μm) sieves", "Water source with constant pressure", "Wash bottle and stereomicroscope", "Enameled tray"],
      procedureSteps: [
        "Thoroughly air-dry the collected field soil on paper trays for 3-5 days to ensure cysts become light and floatable.",
        "Fill the Fenwick can with water until it overflows through the exit collar into nested sieves (16-mesh coarse sieve over 60-mesh fine sieve).",
        "Place 100 g of dry soil into the top perforated brass sieve bucket inside the can.",
        "Direct a steady stream of water into the soil bucket to wash fine particles through while buoyant cysts float to the water surface.",
        "The rising water level carries floating cysts and organic debris over the perimeter overflow collar into the receiving 60-mesh sieve.",
        "Backwash the debris caught on the 60-mesh sieve onto smooth filter paper or examine in an enameled tray under a stereomicroscope to pick out spherical or lemon-shaped brown cysts."
      ],
      observationsAndRecording: [
        "Record total brown cysts extracted per 100 g dry soil.",
        "Crush 10 cysts in a drop of water on a counting slide to estimate average egg and viable juvenile content per cyst."
      ],
      reflectionQuestions: [
        "Why must soil be completely air-dried before processing in a Fenwick can?",
        "How do cysts of Globodera differ from seeds or fungal sclerotia under the stereomicroscope?"
      ],
      submissionGuidance: "Submit recorded cyst counts, calculated viable egg densities per gram soil, and diagnostic sketches of extracted cysts."
    },
    {
      id: 3,
      title: "Diagnostic Staining of Endoparasitic Nematodes in Plant Roots using NaOCl-Acid Fuchsin",
      objectives: [
        "Clear opaque root tissues and stain internal nematodes for microscopic visualization.",
        "Observe sedentary and migratory stages of Meloidogyne or Pratylenchus in situ within host cortical tissues."
      ],
      materialsRequired: ["Fresh galled roots of tomato or brinjal", "Sodium hypochlorite (commercial bleach, 5.25% NaOCl)", "Acid fuchsin staining solution (3.5 g acid fuchsin in 250 ml acetic acid and 750 ml distilled water)", "Pure acidified glycerol", "Beakers, hot plate, forceps, dissecting microscope"],
      procedureSteps: [
        "Wash infected root systems gently in tap water to remove all adhering soil particles.",
        "Immerse roots in 1.5% NaOCl solution (diluted commercial bleach) for 2 to 4 minutes with gentle agitation to clear root tannins and soften cell walls.",
        "Rinse cleared roots thoroughly in running tap water for 45 seconds to remove residual hypochlorite.",
        "Drain and plunge the roots into boiling acid fuchsin stain solution for 30 to 45 seconds until tissue takes up a bright magenta color.",
        "Remove roots and rinse off excess superficial stain under cold water.",
        "Transfer stained roots into a beaker containing pure acidified glycerol and heat to boiling for 1 minute to destain host root cells while retaining intense magenta staining within internal nematode bodies.",
        "Mount cleared roots in a drop of glycerol between glass slides and examine under a stereomicroscope or compound microscope at 40x-100x."
      ],
      observationsAndRecording: [
        "Observe and sketch stained pink-to-red nematodes inside the translucent root cortex.",
        "Identify life stages: vermiform J2 juveniles penetrating roots, swollen sausage-shaped J3/J4 stages, and pyriform adult females with associated egg masses."
      ],
      reflectionQuestions: [
        "What is the chemical role of sodium hypochlorite in root clearance?",
        "Why does acid fuchsin stain nematode cuticles and internal organs more intensely than host parenchymatous cells?"
      ],
      submissionGuidance: "Submit photomicrographs or high-magnification labeled drawings of cleared roots showing internal development stages and giant cells."
    },
    {
      id: 4,
      title: "Preparation of Temporary and Permanent Microscopic Mounts of Plant-Parasitic Nematodes",
      objectives: [
        "Master the gentle heat-killing, fixation, and slow glycerol dehydration of nematodes.",
        "Prepare permanent glass slide mounts sealed with paraffin wax or Zut slide sealant."
      ],
      materialsRequired: ["Active nematode suspension", "Triethanolamine formalin (TAF) or FA 4:1 fixative", "Glycerol-ethanol solution (Seinhorst method)", "Watch glass / cavity blocks", "Desiccator with CaCl2", "Glass slides, coverslips, wax ring marker / paraffin wax"],
      procedureSteps: [
        "Concentrate nematodes in a small drop of water in a Syracuse dish.",
        "Heat-kill nematodes by adding an equal volume of hot water (60-65°C) or holding the dish over a gentle flame for 5-8 seconds until nematodes relax into straight or gently curved dead postures.",
        "Immediately add double-strength TAF fixative (7 ml formalin, 2 ml triethanolamine, 91 ml distilled water) and fix for at least 48 hours.",
        "Transfer fixed nematodes into Seinhorst solution I (95 ml 96% ethanol, 5 ml pure glycerol, 0.2 ml distilled water) in a small cavity block.",
        "Place cavity block in a closed desiccator over anhydrous CaCl2 at 37°C for 5-7 days to allow slow, gradual evaporation of ethanol and complete infiltration of nematodes by pure anhydrous glycerol without shrinkage.",
        "Transfer dehydrated nematodes onto a drop of pure anhydrous glycerol in the center of a clean glass slide.",
        "Apply three tiny glass rod glass supports (same diameter as nematodes) to prevent crushing.",
        "Apply a circular coverslip and seal the perimeter with molten paraffin wax or Zut slide-ringing compound."
      ],
      observationsAndRecording: [
        "Examine permanent mount under 100x and 400x magnification.",
        "Confirm that specimens show intact internal organs without cuticular collapse, vacuolation, or shrinkage."
      ],
      reflectionQuestions: [
        "Why does rapid transfer from water into concentrated glycerol cause severe collapse of nematode bodies?",
        "What are the diagnostic advantages of TAF fixative over FAA fixative?"
      ],
      submissionGuidance: "Submit two professionally mounted, wax-sealed permanent slides of plant-parasitic nematodes with standard slide labels."
    },
    {
      id: 5,
      title: "Preparation and Species Identification of Perineal Patterns of Meloidogyne Females",
      objectives: [
        "Dissect mature pear-shaped females of Meloidogyne from fresh root galls.",
        "Excise and trim the posterior cuticular perineal pattern and identify diagnostic species characteristics."
      ],
      materialsRequired: ["Tomato/brinjal roots with mature egg-laying galls", "Fine ophthalmic scalpel (No. 11 blade) and dental pulp excavators", "45% lactic acid or 0.1% cotton blue in lactophenol", "Plastic cavity slides and clean glass slides", "Stereomicroscope and high-resolution compound microscope (1000x oil immersion)"],
      procedureSteps: [
        "Select mature, large galls from fresh host roots and carefully tease open the root cortex under a stereomicroscope using fine dissecting needles.",
        "Tease out intact, milky-white, pear-shaped adult females without puncturing their body walls.",
        "Transfer females into a drop of 45% lactic acid on a clean glass slide or plastic cavity dish for 15-20 minutes to clear body contents.",
        "Under 40x magnification, orient the female on its dorsum. Using an ultra-sharp scalpel blade, slice off the posterior third of the female body.",
        "Gently brush away internal gut viscera and reproductive organs with an eyelash brush, leaving only the transparent posterior cuticular shell.",
        "Trim the cuticle into a neat square or rectangular piece centered on the vulva and anus.",
        "Transfer the cuticular pattern into a drop of pure glycerol on a clean slide, orienting the outer cuticular surface facing upward.",
        "Apply a coverslip, seal with paraffin wax, and examine under 1000x oil immersion magnification."
      ],
      observationsAndRecording: [
        "Examine the dorsal arch height (high and squarish in M. incognita; low and flattened in M. javanica; rounded in M. arenaria).",
        "Inspect lateral field markings: distinct incisures/double lateral lines completely separating dorsal and ventral striae indicates M. javanica; absence of lateral lines with wavy striae indicates M. incognita.",
        "Sketch the observed perineal pattern and diagnose the species."
      ],
      reflectionQuestions: [
        "Why is perineal pattern morphology considered the gold standard for morphological species differentiation in Meloidogyne?",
        "What challenges arise from intraspecific cuticular variability when diagnosing root-knot species?"
      ],
      submissionGuidance: "Submit calibrated microscopic drawings and identified species diagnoses for at least two unknown perineal pattern preparations."
    },
    {
      id: 6,
      title: "Identification of Field Symptoms: Root-Knot Galls, Molya Bearded Roots, Banana Toppling, and Wheat Ear-Cockles",
      objectives: [
        "Recognize and diagnose macro-symptoms caused by major nematode diseases in cereal, vegetable, and fruit crops.",
        "Distinguish nematode symptoms from fungal root rots, bacterial galls, and nutritional chlorosis."
      ],
      materialsRequired: ["Fresh or preserved museum specimens of:", "1. Meloidogyne-infected tomato/cucumber roots with extensive galls", "2. Heterodera avenae-infected wheat plants displaying bushy 'bearded' roots and cysts", "3. Radopholus similis-damaged banana roots and corms with reddish-black necrotic cavities", "4. Anguina tritici-infected wheat heads and seed cockles", "Hand lenses (10x), dissection trays, razor blades, metric ruler"],
      procedureSteps: [
        "Examine tomato root systems: Measure gall diameter, assess galling severity on 1 to 5 scale, and note difference between succulent cortical galls and nodulation in legumes.",
        "Examine Molya-affected wheat roots: Observe stunted main root axes and excessive proliferation of short, bunchy lateral rootlets giving a 'bearded' appearance; locate white pinhead cysts along rootlets.",
        "Examine banana root-corm longitudinal sections: Cut through infected cord roots and corms to observe elongated reddish-brown lesions coalescing into deep black necrotic cavities.",
        "Examine wheat ear-cockle spikes: Observe spreading, flared glumes and compare hard, dark brown to black cockle galls with healthy golden-amber wheat grains. Crush a gall in a water drop to observe wriggling J2 larvae."
      ],
      observationsAndRecording: [
        "Construct a diagnostic symptom matrix comparing host, causal nematode, organ attacked, primary diagnostic visual symptom, and economic damage threshold.",
        "Record hand-lens sketches of: (a) Hooked vs. beaded root galls, (b) Molya bearded root cluster, (c) Banana corm necrosis, (d) Wheat cockle vs. healthy grain."
      ],
      reflectionQuestions: [
        "How can a field officer quickly distinguish a root-knot gall from a Rhizobium nitrogen-fixing nodule on a legume root?",
        "Why do Radopholus similis feeding cavities lead to whole-tree toppling rather than simple leaf chlorosis?"
      ],
      submissionGuidance: "Submit a comprehensive comparative symptomatology chart with labeled diagnostic sketches and diagnostic identification keys."
    }
  ]
};

export const pth214Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const pth214CompleteSubject = {
  metadata: pth214Metadata,
  units: pth214Units
};

export default pth214CompleteSubject;
