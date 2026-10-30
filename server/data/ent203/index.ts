import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const ent203Metadata: SubjectMetadata = {
  "code": "ENT203",
  "name": "Biopesticides in Insect Pest Management",
  "programmeCode": "BSC-AGRI",
  "programmeName": "B.Sc. (Hons.) Agriculture",
  "semester": 3,
  "credits": 2,
  "ltp": "L: 1 | T: 0 | P: 2",
  "courseCategory": "Skill Enhancement",
  "syllabusPdfUrl": "/ENT203_Syllabus.pdf",
  "overview": "Biopesticides in Insect Pest Management provides specialized practical and theoretical training in non-synthetic, ecologically sustainable insect management technologies. Students master the biology, genetics, mass production, quality control, and field deployment of microbial agents (Bacillus thuringiensis, Beauveria bassiana, Metarhizium anisopliae, Baculoviruses, Entomopathogenic Nematodes), botanical extracts (Neem limonoids, pyrethrins, rotenone), and semiochemical tools (sex pheromones, Push-Pull systems) integrated into modern IPM paradigms.",
  "courseOutcomes": [
    {
      "code": "CO1",
      "title": "Conceptual, Classification & Regulatory Framework of Biopesticides",
      "description": "Differentiate microbial, botanical, biochemical, and semiochemical classes, and evaluate the statutory registration guidelines, toxicity tiers, and data requirements enforced by CIB&RC under the Insecticides Act 1968."
    },
    {
      "code": "CO2",
      "title": "Bacterial & Fungal Entomopathogen Bioengineering",
      "description": "Analyze the mode of action of Bacillus thuringiensis Cry/Vip endotoxins and the transcuticular infection mechanisms of Beauveria bassiana and Metarhizium anisopliae, mastering submerged and solid-state fermentation (SSF) techniques and CFU quality standards."
    },
    {
      "code": "CO3",
      "title": "Baculovirus & Entomopathogenic Nematode Systems",
      "description": "Characterize Baculoviridae occlusion bodies (NPV and GV), budded virus systemic spread, in vivo mass production and Larval Equivalent standardization, alongside the mutualistic tripartite biology and application engineering of Steinernema and Heterorhabditis EPNs."
    },
    {
      "code": "CO4",
      "title": "Phytochemistry, Formulations & Actions of Botanical Insecticides",
      "description": "Evaluate the endocrine-disrupting and antifeedant actions of azadirachtin, master on-farm preparation of 5% NSKE and commercial EC standardization, and contrast the axonic disruption of natural pyrethrins with mitochondrial Complex I inhibition by rotenone."
    },
    {
      "code": "CO5",
      "title": "Semiochemical Behavioral Manipulation & Integrated Bio-IPM",
      "description": "Design semiochemical trapping and mating disruption systems utilizing major agricultural pheromones (Gossyplure, Helilure, Spodolure, Ferrugineol), deploy the Push-Pull ecological engineering paradigm, and formulate bio-intensive IPM schedules compatible with natural enemies."
    }
  ],
  "gradingStructure": [
    {
      "component": "Continuous Assessment (CA) Theory",
      "weightage": "20%",
      "marks": "30 Marks (Best 2 of 3)",
      "details": "Two best written continuous assessments evaluating microbial infection pathways, botanical modes of action, pheromone chemistry, and IPM scheduling."
    },
    {
      "component": "Mid-Term Examination (MTE)",
      "weightage": "20%",
      "marks": "40 Marks",
      "details": "Mid-term university theory examination covering Units 1, 2, and 3, focusing on microbial biopesticides, Cry toxins, and nematode mutualism."
    },
    {
      "component": "End-Term Examination (ETE) Theory",
      "weightage": "30%",
      "marks": "50 Marks",
      "details": "Comprehensive end-term university theory examination covering all five units of the ENT203 syllabus."
    },
    {
      "component": "Practical Examination & Continuous Evaluation",
      "weightage": "30%",
      "marks": "50 Marks",
      "details": "Hands-on continuous lab evaluation, bioassay performance, hemocytometer spore counting, NSKE preparation, practical manual records, and end-term practical viva voce."
    }
  ],
  "textbooks": [
    {
      "title": "Biopesticides in Insect Pest Management",
      "authors": "S. Ignacimuthu and A. Sen",
      "publisher": "Phoenix Publishing House, New Delhi",
      "edition": "2nd Edition, 2018",
      "isRecommended": true
    },
    {
      "title": "Microbial Biopesticides: Principles and Practice",
      "authors": "H.D. Burges",
      "publisher": "Kluwer Academic Publishers / Springer",
      "edition": "1st Edition, 1998",
      "isRecommended": true
    },
    {
      "title": "The Neem Tree: Source of Unique Medicinal Products for Integrated Pest Management",
      "authors": "Heinrich Schmutterer",
      "publisher": "VCH Verlagsgesellschaft, Weinheim",
      "edition": "2nd Edition, 2002",
      "isRecommended": false
    },
    {
      "title": "Pheromones and Animal Behavior: Chemical Signals and Signatures",
      "authors": "Tristram D. Wyatt",
      "publisher": "Cambridge University Press",
      "edition": "2nd Edition, 2014",
      "isRecommended": false
    },
    {
      "title": "Biological Control of Crop Pests and Plant Diseases",
      "authors": "S.S. Narwal and B.S. Chahal",
      "publisher": "Scientific Publishers, Jodhpur",
      "edition": "1st Edition, 2015",
      "isRecommended": true
    }
  ],
  "practicalActivities": [
    {
      "id": 1,
      "title": "Isolation, Endospore Staining, and Microscopic Identification of Bacillus thuringiensis",
      "objectives": [
        "Isolate Bacillus thuringiensis from soil and diseased caterpillar cadavers using selective heat-pasteurization.",
        "Perform differential Schaeffer-Fulton malachite green endospore staining to identify green endospores and pink vegetative cells.",
        "Observe bipyramidal parasporal inclusion protein crystals under oil-immersion phase-contrast microscopy."
      ],
      "materialsRequired": [
        "Rhizosphere soil samples and dead caterpillar cadavers",
        "Nutrient Agar / Luria Bertani Agar plates",
        "Water bath (80\u00b0C)",
        "Malachite green 5% aqueous solution",
        "Safranin 0.5% counterstain",
        "Compound microscope with 100x oil-immersion objective"
      ],
      "procedureSteps": [
        "Suspend 1.0 g of soil in 9.0 ml of sterile physiological saline and vortex thoroughly.",
        "Pasteurize the suspension in an 80\u00b0C circulating water bath for 10 minutes to kill non-spore-forming vegetative bacteria.",
        "Prepare serial 10-fold decimal dilutions (10^-2 to 10^-5) and spread-plate 0.1 ml aliquots onto Nutrient Agar.",
        "Incubate plates inverted at 30\u00b0C for 24 to 48 hours until typical off-white, frosted-glass colonies appear.",
        "Prepare a heat-fixed bacterial smear on a glass slide.",
        "Flood smear with 5% malachite green, steam gently over a Bunsen flame for 5 minutes without allowing the dye to boil dry.",
        "Rinse slide with gentle tap water and counterstain with 0.5% safranin for 30 seconds; rinse and air-dry.",
        "Examine under 1000x oil-immersion optics to resolve bright green elliptical endospores, pink vegetative rods, and dark parasporal crystals."
      ],
      "observationsAndRecording": [
        "Sketch the morphological arrangement of Bacillus rods, endospores, and parasporal crystals.",
        "Record the percentage of sporulated cells versus vegetative cells across five microscopic fields."
      ],
      "reflectionQuestions": [
        "Why does malachite green penetrate endospores only when heated, and why does safranin fail to stain the spore coat?",
        "How do parasporal crystal inclusions differ morphologically from endospores under phase-contrast optics?"
      ],
      "submissionGuidance": "Submit labeled biological drawings of the stained smear and write a formal protocol describing how to differentiate B. thuringiensis from B. cereus."
    },
    {
      "id": 2,
      "title": "Mass Culturing, Harvesting, and Hemocytometer Spore Counting of Beauveria bassiana",
      "objectives": [
        "Mass produce aerial conidia of Beauveria bassiana using solid-state grain fermentation (broken rice / sorghum).",
        "Harvest conidia aseptically and prepare serial dilutions.",
        "Quantify conidial concentration (conidia/ml) using an Improved Neubauer Hemocytometer under phase contrast."
      ],
      "materialsRequired": [
        "Pure mother culture of Beauveria bassiana on SDA slants",
        "Autoclavable polypropylene filter-patch bags containing parboiled broken rice (45% moisture)",
        "Laminar airflow bench",
        "Improved Neubauer Hemocytometer and specialized 0.4 mm cover glass",
        "0.05% Tween-80 sterile aqueous solution",
        "Compound research microscope with phase-contrast optics (400x)"
      ],
      "procedureSteps": [
        "Inoculate autoclaved, cooled rice bags with 10 ml of B. bassiana liquid seed culture under the laminar airflow cabinet.",
        "Incubate bags at 26\u00b0C and 70% RH for 10 to 12 days until the grains are coated with a thick, chalky white conidial bloom.",
        "Air-dry grains inside a dehumidified laminar bench (<35\u00b0C) to <8% moisture.",
        "Harvest conidia by gently sieving through a 100-mesh sieve into sterile collection containers.",
        "Aseptically weigh 1.0 g of harvested conidia into 99.0 ml of sterile 0.05% Tween-80 solution; vortex for 5 minutes to disperse clumps.",
        "Prepare a 10^-3 working dilution; load 10 \u00b5l onto the hemocytometer counting grid under the cover glass.",
        "Allow conidia to settle for 5 minutes; count all spherical conidia in five large squares (4 corners + center) under 400x magnification.",
        "Calculate conidial concentration per gram using the standard Neubauer grid formula."
      ],
      "observationsAndRecording": [
        "Record counts across all five large grid squares and calculate mean conidia/square.",
        "Calculate total CFU/g: CFU/g = (Total conidia in 5 squares / 5) x 25 x 10,000 x Dilution Factor."
      ],
      "reflectionQuestions": [
        "Why is a non-ionic surfactant like Tween-80 indispensable when dispersing fungal conidia in water?",
        "What is the statutory CIB&RC minimum CFU count for commercial talc-based Beauveria powder?"
      ],
      "submissionGuidance": "Submit the completed hemocytometer mathematical calculation sheet and a short report evaluating batch quality against CIB&RC specifications."
    },
    {
      "id": 3,
      "title": "In Vivo Mass Rearing of Helicoverpa armigera NPV and Larval Equivalent Calculation",
      "objectives": [
        "Inoculate 5th-instar Helicoverpa armigera larvae with standardized HaNPV inoculum via diet surface contamination.",
        "Monitor progression of viral infection, symptom development, and harvest moribund larvae.",
        "Purify polyhedra by differential centrifugation and calculate production yield in Larval Equivalents (LE)."
      ],
      "materialsRequired": [
        "Laboratory culture of 5th-instar Helicoverpa armigera larvae",
        "Chickpea-based semi-synthetic diet in 24-well rearing trays",
        "Standardized HaNPV stock suspension (1 x 10^7 POB/ml)",
        "Refrigerated benchtop centrifuge",
        "Improved Neubauer hemocytometer",
        "0.1% Sodium Dodecyl Sulfate (SDS) solution"
      ],
      "procedureSteps": [
        "Dispense 50 \u00b5l of HaNPV viral suspension onto the surface of diet cubes in individual wells of 24-well trays.",
        "Place one healthy, active 5th-instar larva per well to prevent cannibalism; seal trays with breathable lids.",
        "Incubate at 26\u00b0C and 65% RH for 5 to 6 days.",
        "Observe daily for sluggishness, loss of appetite, and pale ventral chalkiness.",
        "Harvest 20 moribund caterpillars just prior to cuticular melting; record fresh larval weight.",
        "Homogenize larvae in 20 ml of 0.1% SDS using a tissue grinder; filter through sterile muslin cloth.",
        "Centrifuge filtrate at 500 g for 5 minutes to pellet tissue debris; collect supernatant and centrifuge at 3500 g for 15 minutes to pellet polyhedral inclusion bodies (POBs).",
        "Resuspend polyhedral pellet in 10 ml sterile water, count POBs/ml on a hemocytometer, and calculate total POBs per larva and total LE harvested (1 LE = 6 x 10^9 POBs)."
      ],
      "observationsAndRecording": [
        "Tabulate daily mortality percentage and characteristic clinical signs (geotaxis, skin fragility).",
        "Calculate total POB harvest: POB/larva = (POBs/ml x 10 ml) / 20 larvae.",
        "Determine Larval Equivalents: Total LE = Total POBs / (6 x 10^9)."
      ],
      "reflectionQuestions": [
        "Why must inoculated Helicoverpa caterpillars be housed in strictly individual wells rather than communal cages?",
        "What specific viral late enzymes cause post-mortem cuticular rupture ('melting') in caterpillar cadavers?"
      ],
      "submissionGuidance": "Submit a technical report documenting the in vivo rearing timeline, purification procedure, and final yield calculations in Larval Equivalents."
    },
    {
      "id": 4,
      "title": "Extraction, Rearing, and Bioassay of Entomopathogenic Nematodes using White Traps",
      "objectives": [
        "Bait and extract soil-dwelling entomopathogenic nematodes (Steinernema / Heterorhabditis) using Galleria mellonella larvae.",
        "Assemble a modified White trap to harvest emerging infective juveniles (IJs).",
        "Perform a laboratory Petri dish bioassay to calculate nematode infectivity and LC50 against test larvae."
      ],
      "materialsRequired": [
        "Sandy loam soil samples from agricultural fields",
        "Late-instar Galleria mellonella (greater wax moth) larvae",
        "Glass Petri dishes (100 mm and 50 mm)",
        "Watch glasses and Whatman No. 1 filter papers",
        "Stereomicroscope and hand tally counter",
        "Sterile distilled water"
      ],
      "procedureSteps": [
        "Place 250 g of moist field soil in a plastic container; place 5 healthy Galleria larvae in the soil, cover with lid, and invert.",
        "Incubate at 25\u00b0C for 4 to 5 days; inspect for larval mortality.",
        "Record cadaver color: ochre/brown indicates Steinernema; brick-red/bioluminescent indicates Heterorhabditis.",
        "Assemble a White trap: place an inverted watch glass inside a 100 mm Petri dish containing 15 ml sterile water; drape a filter paper over the watch glass so edges touch the water.",
        "Place infected cadavers on the moist filter paper; cover dish and incubate at 25\u00b0C.",
        "Harvest emerging IJs from the surrounding water daily between days 10 and 14 by decanting into a clean beaker.",
        "Wash nematodes by gravity sedimentation in cold sterile water (repeat 3 times).",
        "Perform bioassay: place 5 Galleria larvae on filter paper in a Petri dish; pipette calibrated aliquots of IJs (25, 50, 100, 200 IJs/dish); record mortality at 24 and 48 hours."
      ],
      "observationsAndRecording": [
        "Record cadaver coloration and presence/absence of darkness bioluminescence.",
        "Tabulate number of emerging IJs per cadaver over a 5-day collection period.",
        "Calculate percentage mortality in bioassay dishes across tested nematode concentrations."
      ],
      "reflectionQuestions": [
        "What symbiotic bacterial genera are associated with Steinernema and Heterorhabditis, and what accounts for cadaver redness and glow?",
        "Why is the third-stage dauer juvenile (IJ) the only developmental stage capable of surviving in the soil?"
      ],
      "submissionGuidance": "Submit biological sketches of the White trap setup, observations of cadaver pathology, and the bioassay mortality curve."
    },
    {
      "id": 5,
      "title": "On-Farm Preparation and Quality Evaluation of 5% Neem Seed Kernel Extract (NSKE)",
      "objectives": [
        "Prepare 10 liters of 5% Neem Seed Kernel Extract (NSKE) following standardized on-farm protocol.",
        "Evaluate physical extraction parameters: turbidity, aroma, filtration efficiency, and emulsion stability.",
        "Execute a laboratory leaf-dip antifeedant bioassay using Spodoptera litura neonates."
      ],
      "materialsRequired": [
        "Dried, well-cured neem seed kernels (500 grams)",
        "Mortar and pestle / mechanical coarse grinder",
        "Muslin cloth bags and 20-liter plastic bucket",
        "Neutral liquid soap / detergent",
        "Castor / cabbage fresh leaves",
        "Spodoptera litura 2nd-instar larvae",
        "Filter paper and Petri dishes"
      ],
      "procedureSteps": [
        "Weigh accurately 500 grams of clean, unblemished neem seed kernels.",
        "Coarsely pound the kernels using a mortar and pestle into gritty particles (avoid grinding into a fine flour).",
        "Tie the crushed kernels loosely in a porous muslin cloth bag.",
        "Immerse and suspend the bag overnight (10 to 12 hours) in a bucket containing 2 liters of clean water.",
        "Knead and squeeze the bag repeatedly with clean hands until the water turns dense and milky-white.",
        "Filter the concentrated milky extract through a double-layered muslin cloth to eliminate coarse solids.",
        "Dissolve 10 grams of neutral soap (0.1%) in warm water and blend into the milky extract.",
        "Add clean water to dilute the mixture to a final volume of 10.0 liters (yielding a 5% w/v NSKE solution).",
        "Conduct leaf-dip bioassay: dip castor leaf discs in NSKE 5% vs distilled water control, air dry, place in Petri dishes with 5 larvae, and record feeding leaf area consumed after 24 hours."
      ],
      "observationsAndRecording": [
        "Record the visual appearance, color, and odor of the prepared NSKE extract.",
        "Measure and calculate the Percentage Antifeedant Index (AFI): AFI (%) = [(Control Area Consumed - Treated Area Consumed) / Control Area Consumed] x 100."
      ],
      "reflectionQuestions": [
        "Why does fine grinding of neem kernels impede aqueous extraction of azadirachtin?",
        "What is the functional role of adding 0.1% soap during the preparation of NSKE?"
      ],
      "submissionGuidance": "Submit a complete practical write-up detailing the NSKE preparation recipe, calculation of the Antifeedant Index, and guidelines for field application."
    },
    {
      "id": 6,
      "title": "Installation, Field Calibration, and Servicing of Sex Pheromone Monitoring Traps",
      "objectives": [
        "Assemble and calibrate Delta traps, sleeve traps, and funnel traps in field crop plots.",
        "Install species-specific sex pheromone lures (Helilure, Spodolure, Gossyplure) at canopy height.",
        "Record daily moth captures, calculate Economic Threshold Levels (ETL), and establish spray triggers."
      ],
      "materialsRequired": [
        "Pheromone lures: Helilure, Spodolure, Gossyplure in sealed foil pouches",
        "Plastic Delta traps with replaceable sticky liners",
        "Plastic funnel traps with collection buckets and DDVP strips",
        "Plastic sleeve traps with transparent bags",
        "Bamboo support poles and tying wire",
        "Forceps and disposable nitrile gloves"
      ],
      "procedureSteps": [
        "Wear clean nitrile gloves when handling pheromone lures to avoid contaminating lures with human odors or cross-scents.",
        "Open the sealed lure pouch using clean scissors; use forceps to attach the rubber septum lure onto the trap canopy holder.",
        "Assemble the trap housing: insert sticky liner into Delta trap; attach transparent polyethylene sleeve to the funnel base of sleeve traps.",
        "Mount the assembled trap onto a bamboo pole in the field, adjusting the height so the trap entrance aligns exactly with the top of the crop canopy.",
        "Install traps at a minimum spacing of 25 meters between traps to eliminate plume interference.",
        "Inspect traps at 24-hour intervals for 14 days; record number of trapped male moths.",
        "Plot daily moth catch curves and identify the date when catches exceed statutory ETL (e.g., 8-10 moths/trap/night for Helicoverpa).",
        "Demonstrate trap servicing: untie sleeve knot to clear dead moths, or replace saturated sticky liners."
      ],
      "observationsAndRecording": [
        "Tabulate daily trap catches for Helilure, Spodolure, and Gossyplure over a 14-day monitoring period.",
        "Plot a graph showing Moths Captured per Trap per Night versus Days After Installation."
      ],
      "reflectionQuestions": [
        "Why must different species' pheromone lures never be touched with the same unwashed bare hands?",
        "How does canopy height alignment influence the aerodynamics of the pheromone plume and trap efficiency?"
      ],
      "submissionGuidance": "Submit the completed pheromone catch log sheet, the plotted population flight curve, and an agronomic recommendation report indicating when biopesticide sprays should be initiated."
    }
  ]
};

export const ent203Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const ent203CompleteSubject = {
  metadata: ent203Metadata,
  units: ent203Units
};

export default ent203CompleteSubject;
