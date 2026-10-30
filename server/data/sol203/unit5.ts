import { UnitContent } from "./types";

export const unit5Content: UnitContent = {
  "unitNumber": 5,
  "title": "Fertilizer Recommendations and Quality Control",
  "shortDescription": "Comprehensive study of soil test-based recommendations, STCR targeted yield equations, Integrated Nutrient Management (INM), FCO 1985 enforcement, adulteration spot tests, CFQC&TI standards, Soil Health Cards, and GIS fertility mapping.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
    "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
    "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
    "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
    "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
    "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
    "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping"
  ],
  "notes": {
    "learningObjectives": [
      "Master soil test-based fertilizer recommendation approaches (categorical ratings vs targeted yield).",
      "Derive and solve STCR targeted yield equations for major agricultural crops.",
      "Examine the operational philosophy, components, and long-term soil health benefits of Integrated Nutrient Management (INM).",
      "Analyze the statutory provisions of the Fertilizer (Control) Order 1985 and the Essential Commodities Act 1955.",
      "Demonstrate rapid field and chemical spot tests to detect fertilizer adulteration.",
      "Explain the operational framework of the Soil Health Card (SHC) scheme and GIS-based regional fertility mapping."
    ],
    "sections": [
      {
        "id": "sec-5-1",
        "heading": "Soil Test-Based Recommendations and STCR Targeted Yield Approach",
        "content": "Fertilizer advisory systems have evolved from regional blanket doses to site-specific precision modeling.\\n\\n1. Categorical Soil Test Ratings Approach:\\nAdjusts state recommendations based on soil test classes: Low (< critical limit: +25% to 50% dose), Medium (standard recommended dose), and High (> critical limit: -25% to 50% maintenance dose).\\n\\n2. STCR Targeted Yield Approach (Dr. B. Ramamoorthy, 1967):\\nRelates grain yield target (T in q/ha) directly to crop nutrient requirement (NR, kg/q produce), soil nutrient contribution (%CS), and fertilizer nutrient efficiency (%CF). Derives predictive equations: Fertilizer Dose (FN) = [(NR / %CF) * 100] * T - (%CS / %CF) * SN, simplified as FN = A * T - B * SN. Integrated STCR-IPNS equations incorporate organic manure contributions: FN = A * T - B * SN - C * FYM. Yield targets must remain within the genetic and climatic production ceiling (typically 40-60 q/ha for wheat and rice) to avoid lodging and fertilizer waste."
      },
      {
        "id": "sec-5-2",
        "heading": "Integrated Nutrient Management (INM) and Sustainability",
        "content": "Integrated Nutrient Management (INM) integrates chemical fertilizers, organic manures, green manures, biofertilizers, and crop residues to optimize nutrient availability and maintain soil biological health.\\n\\n1. Pillars of INM:\\n- Chemical Fertilizers: Straight and complex fertilizers meeting peak vegetative uptake.\\n- Bulky Organic Manures: FYM (10-15 t/ha), vermicompost, and enriched compost supplying organic carbon and secondary/micronutrients.\\n- Green Manures: Sesbania and Crotalaria fixing 60-120 kg N/ha and dissolving native calcite in sodic soils.\\n- Biofertilizers: Rhizobium, Azotobacter, Azospirillum, PSB, and VAM inoculants.\\n- Crop Residues: Stubble recycling restoring potassium and silicon.\\n\\n2. Long-Term Experimental Evidence:\\nLong-term fertilizer experiments (LTFEs) demonstrate that continuous 100% NPK fertilization leads to declining factor productivity, micronutrient depletion (Zn, S, B), and soil structural degradation, whereas INM plots sustain high microbial biomass carbon (MBC), increase dehydrogenase/urease activities, and ensure long-term stability."
      },
      {
        "id": "sec-5-3",
        "heading": "Fertilizer Control Order (FCO 1985) and Legal Enforcement",
        "content": "Promulgated under Section 3 of the Essential Commodities Act (ECA), 1955, FCO regulates fertilizer manufacturing, packaging, pricing, distribution, and statutory quality standards across India.\\n\\n1. Inspector Powers and Duties (Clauses 27 & 28):\\nInspectors have powers of entry, search, vehicle detention, and stock seizure. May issue written stop-sale orders (up to 21 days) when contravention is suspected. Must draw official samples in duplicate Form J in the presence of the dealer.\\n\\n2. Sampling Protocol and Triplicate Dispatch:\\nComposite samples (~1.5 kg) prepared via coning and quartering are divided into three identical sealed portions (~500 g each): Portion 1 to Notified Testing Lab; Portion 2 to dealer; Portion 3 retained as referee stock. Labs must test and issue Form K within 30 days.\\n\\n3. Appellate Recourse and Penalties:\\nDealers disputing adverse findings can appeal within 30 days under Clause 32B to send the third referee sample to CFQC&TI, Faridabad, whose finding is conclusive. Violations are punishable under Section 7 of ECA with imprisonment up to 7 years, fines, and license revocation."
      },
      {
        "id": "sec-5-4",
        "heading": "Fertilizer Adulteration Detection and Rapid Spot Tests",
        "content": "Unscrupulous commercial substitution with sand, rock phosphate, gypsum, and limestone requires vigilant spot testing.\\n\\n1. Urea Spot Tests:\\n- Endothermic Dissolution: Dissolving urea in water produces a sharp, ice-cold chilling sensation (+57.8 cal/g heat of solution).\\n- Hot Plate Melting: Melts rapidly, bubbles, and solidifies into biuret emitting white fumes.\\n\\n2. DAP Spot Tests:\\n- Slaked Lime Test: Rubbing DAP with moist lime [Ca(OH)2] on the palm evolves pungent ammonia gas instantly turning moist red litmus blue.\\n- Heating Test: Swells and puffs into porous mass on a hot iron plate.\\n- Acid Effervescence: Pure DAP shows no effervescence; limestone/marble dust adulteration bubbles vigorously with dilute HCl.\\n\\n3. MOP Spot Tests:\\n- Water Solubility: Genuine MOP dissolves completely leaving a faint pink tint; brick powder or clay settles as dense red sediment.\\n- Flame Test: Nichrome wire in gas flame emits violet/lilac potassium flame (cobalt glass); sodium salt adulteration exhibits blinding golden-yellow flame."
      },
      {
        "id": "sec-5-5",
        "heading": "Soil Health Card Scheme and GIS Fertility Mapping",
        "content": "1. Soil Health Card (SHC) Scheme:\\nLaunched in February 2015 ('Swasth Dhara, Khet Haraa'). Reports 12 parameters: pH, EC, OC, N, P, K, S, Zn, Fe, Cu, Mn, and B. Translates numerical test data into practical crop-specific fertilizer schedules (in bags per acre) for 6 designated crops, digitized via national portal (soilhealth.dac.gov.in).\\n\\n2. Regional GIS Fertility Mapping:\\nGPS coordinates geo-reference soil sampling points. Spatial interpolation (Ordinary Kriging or Inverse Distance Weighting) predicts nutrient concentrations across un-sampled grid areas in QGIS/ArcGIS. Produces thematic fertility maps categorized into Low (Red), Medium (Yellow), and High (Green) zones, guiding district fertilizer prepositioning, subsidized nutrient allocation, and precision advisory."
      }
    ],
    "keyTakeaways": [
      "STCR targeted yield equations (Ramamoorthy, 1967) calibrate fertilizer doses directly to yield goals and soil test values: FN = A * T - B * SN.",
      "Integrated Nutrient Management (INM) combines chemical fertilizers, bulky organics, green manures, and biofertilizers, sustaining microbial biomass and preventing micronutrient collapse.",
      "The Soil Health Card Scheme evaluates 12 parameters (pH, EC, OC, N, P, K, S, Zn, Fe, Cu, Mn, B), translating values into crop-specific fertilizer recommendations.",
      "FCO 1985 under the Essential Commodities Act regulates fertilizer standards; Inspectors draw random core samples using slotted triers, preparing sealed triplicate samples via quartering.",
      "Form J is the Inspector's sampling memorandum; Form K is the Notified Laboratory's statutory Certificate of Analysis issued within 30 days.",
      "Adulteration spot tests include endothermic chilling for urea, lime-ammonia release for DAP, and complete water dissolution for MOP.",
      "CFQC&TI, Faridabad, conducts conclusive referee testing on the third sealed sample during legal appeals under Clause 32B."
    ],
    "commonMisunderstandings": [
      {
        "myth": "A farmer targeting an unattainable yield (e.g., 100 q/ha wheat) can achieve it by applying proportionally massive STCR fertilizer doses.",
        "reality": "STCR equations operate only within the realistic genetic potential and agro-climatic ceiling (40-60 q/ha); extreme doses cause severe lodging, pest susceptibility, and salt toxicity."
      },
      {
        "myth": "INM means completely replacing chemical fertilizers with organic manures.",
        "reality": "INM is an integrated system combining chemical fertilizers with organic and biological sources to optimize efficiency and maintain soil health."
      },
      {
        "myth": "A Fertilizer Inspector can confiscate fertilizer stocks permanently without documentation.",
        "reality": "Inspectors must execute duplicate Form J sampling memorandums, seal triplicate samples, and issue formal stop-sale orders valid for a maximum of 21 days pending laboratory assay."
      },
      {
        "myth": "True DAP granules will bubble vigorously when vinegar or acid is added.",
        "reality": "Genuine DAP does not effervesce; vigorous gas bubbling reveals fraudulent adulteration with crushed limestone or marble dust."
      }
    ],
    "summary": "Unit 5 synthesizes the agronomic, legal, and technological aspects of soil test-based fertilizer recommendations, integrated nutrient management, statutory fertilizer quality control, and regional fertility mapping. It details the STCR targeted yield approach established by Dr. B. Ramamoorthy (1967), covering parameter derivations (NR, %CS, %CF), regression modeling, and IPNS equations incorporating FYM. Integrated Nutrient Management (INM) is analyzed using evidence from long-term fertilizer experiments (LTFEs) demonstrating biological and physical soil health maintenance over chemical-only regimens. The statutory framework of the Fertilizer (Control) Order 1985 under the Essential Commodities Act 1955 is thoroughly examined, detailing inspector powers, sampling protocols (Schedule II), Form J execution, triplicate sealing, and Form K certification within 30 days. Rapid field spot tests for detecting urea, DAP, and MOP adulteration are detailed. The national Soil Health Card scheme is reviewed across its 12 diagnostic parameters (pH, EC, OC, N, P, K, S, Zn, Fe, Cu, Mn, B) alongside digital portal workflows. Finally, GIS spatial interpolation (Kriging, IDW) for district soil fertility thematic mapping and the appellate authority of CFQC&TI, Faridabad, under Clause 32B are fully detailed."
  },
  "mcqs": [
    {
      "id": "SOL203-U5-MCQ01",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Easy",
      "questionText": "Who pioneered the Soil Test Crop Response (STCR) targeted yield approach in India?",
      "options": {
        "A": "Dr. B. Ramamoorthy and co-workers (1967)",
        "B": "Dr. Norman Borlaug",
        "C": "Dr. M.S. Swaminathan",
        "D": "Sir Albert Howard"
      },
      "correctOption": "A",
      "explanation": "Dr. B. Ramamoorthy and his team at IARI established the STCR approach in 1967, formulating targeted yield equations relating crop nutrient requirements, soil nutrient reserves, and fertilizer efficiencies."
    },
    {
      "id": "SOL203-U5-MCQ02",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Easy",
      "questionText": "How many total soil health parameters are standardly evaluated and reported under the Government of India's Soil Health Card (SHC) Scheme?",
      "options": {
        "A": "12 parameters",
        "B": "5 parameters",
        "C": "25 parameters",
        "D": "50 parameters"
      },
      "correctOption": "A",
      "explanation": "The Soil Health Card reports 12 key parameters: pH, EC, Organic Carbon (OC), Nitrogen (N), Phosphorus (P), Potassium (K), Sulfur (S), Zinc (Zn), Iron (Fe), Copper (Cu), Manganese (Mn), and Boron (B)."
    },
    {
      "id": "SOL203-U5-MCQ03",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Easy",
      "questionText": "What adjustment is made to the general recommended fertilizer dose when a soil tests in the 'Low' fertility rating for a given nutrient?",
      "options": {
        "A": "Increase recommended dose by 25% to 50%",
        "B": "Apply zero fertilizer",
        "C": "Reduce recommended dose by 50%",
        "D": "Apply only water"
      },
      "correctOption": "A",
      "explanation": "In standard rating-based fertilizer advisory, if a soil tests 'Low' in a nutrient, the general recommended dose is increased by 25% to 50% to build soil reserves and ensure optimum crop yields."
    },
    {
      "id": "SOL203-U5-MCQ04",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Easy",
      "questionText": "What is 'Integrated Nutrient Management' (INM)?",
      "options": {
        "A": "Judicious combination of chemical fertilizers, organic manures, biofertilizers, and crop residues to sustain soil fertility and crop productivity",
        "B": "Applying only chemical fertilizers at 5 times the normal rate",
        "C": "Complete elimination of all agricultural inputs",
        "D": "Using only synthetic growth hormones without fertilizers"
      },
      "correctOption": "A",
      "explanation": "Integrated Nutrient Management (INM) integrates chemical fertilizers, organic manures, green manures, and biofertilizers to optimize nutrient availability, enhance nutrient use efficiency, and maintain long-term soil health."
    },
    {
      "id": "SOL203-U5-MCQ05",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Easy",
      "questionText": "Where is the Central Fertilizer Quality Control and Training Institute (CFQC&TI) headquartered in India?",
      "options": {
        "A": "Faridabad (Haryana)",
        "B": "New Delhi",
        "C": "Hyderabad (Telangana)",
        "D": "Bengaluru (Karnataka)"
      },
      "correctOption": "A",
      "explanation": "The Central Fertilizer Quality Control and Training Institute (CFQC&TI), the premier apex laboratory and training institute for fertilizer quality, is located in Faridabad, Haryana."
    },
    {
      "id": "SOL203-U5-MCQ06",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Easy",
      "questionText": "What statutory certificate of analysis is issued by a Notified Fertilizer Testing Laboratory reporting the test result under FCO 1985?",
      "options": {
        "A": "Form K",
        "B": "Form J",
        "C": "Form A",
        "D": "Form Z"
      },
      "correctOption": "A",
      "explanation": "While Form J is the sampling memorandum drawn by the Inspector, Form K is the official statutory Certificate of Analysis issued by the testing laboratory under FCO Schedule II."
    },
    {
      "id": "SOL203-U5-MCQ07",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Easy",
      "questionText": "What adjustment is made to the recommended fertilizer dose when a soil tests 'High' in available potassium?",
      "options": {
        "A": "Reduce the recommended K2O dose by 25% to 50%",
        "B": "Double the K2O dose",
        "C": "Add extra rock salt",
        "D": "Increase dose by 100%"
      },
      "correctOption": "A",
      "explanation": "When a soil tests 'High' in a nutrient, the soil has substantial available reserves; hence the recommended dose is reduced by 25% to 50% (applying only a maintenance dose) to prevent luxury consumption and save costs."
    },
    {
      "id": "SOL203-U5-MCQ08",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Easy",
      "questionText": "What rapid spot test confirms the genuine identity of DAP granules when heated on an iron plate with slaked lime?",
      "options": {
        "A": "Pungent, choking ammonia gas (NH3) is evolved that turns moist red litmus paper blue",
        "B": "The granules explode into bright fireworks",
        "C": "Granules turn into pure white liquid milk",
        "D": "No reaction occurs under any condition"
      },
      "correctOption": "A",
      "explanation": "When genuine DAP is heated or rubbed with slaked lime [Ca(OH)2], ammoniacal nitrogen reacts to evolve pungent ammonia gas, which turns moist red litmus paper blue and produces dense white fumes with concentrated HCl."
    },
    {
      "id": "SOL203-U5-MCQ09",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Easy",
      "questionText": "What is the maximum time period within which a Notified Fertilizer Testing Laboratory must analyze an official sample and report results?",
      "options": {
        "A": "Within 30 days of receipt of the sample",
        "B": "Within 10 years",
        "C": "Within 24 hours",
        "D": "Within 6 months"
      },
      "correctOption": "A",
      "explanation": "Under FCO provisions, the testing laboratory is statutorily required to complete analysis and transmit the analytical report in Form K within 30 days from the date of receipt of the sample."
    },
    {
      "id": "SOL203-U5-MCQ10",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Easy",
      "questionText": "Which international laboratory accreditation standard governs testing and calibration competence for NABL-accredited fertilizer testing laboratories?",
      "options": {
        "A": "ISO/IEC 17025",
        "B": "ISO 9001",
        "C": "ISO 14001",
        "D": "ISO 22000"
      },
      "correctOption": "A",
      "explanation": "ISO/IEC 17025 is the international standard specifying general requirements for the competence of testing and calibration laboratories, followed by NABL (National Accreditation Board for Testing and Calibration Laboratories)."
    },
    {
      "id": "SOL203-U5-MCQ11",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Easy",
      "questionText": "What does 'NR' represent in an STCR targeted yield equation?",
      "options": {
        "A": "Nutrient Requirement: kilograms of nutrient (N, P2O5, or K2O) required to produce one quintal (100 kg) of economic grain yield",
        "B": "Natural Rainfall in millimeters",
        "C": "Net Revenue per hectare",
        "D": "Nitrogen Retention ratio"
      },
      "correctOption": "A",
      "explanation": "In STCR equations, NR represents the total nutrient requirement in kg needed by the crop per quintal (100 kg) of economic grain or produce."
    },
    {
      "id": "SOL203-U5-MCQ12",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Easy",
      "questionText": "Under what circumstance can a Fertilizer Inspector issue a 'Stop Sale Order' to a fertilizer dealer under FCO?",
      "options": {
        "A": "When the inspector has reasonable cause to believe that a fertilizer lot is sub-standard, adulterated, or stored without valid registration",
        "B": "Whenever the inspector needs a personal loan",
        "C": "Only on national holidays",
        "D": "When the fertilizer bags are dusty"
      },
      "correctOption": "A",
      "explanation": "Under Clause 28 of FCO, an inspector can issue a written stop-sale order (valid up to 21 days) if there is reason to believe that the fertilizer is being sold in contravention of FCO provisions."
    },
    {
      "id": "SOL203-U5-MCQ13",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Easy",
      "questionText": "What happens when genuine Single Superphosphate (SSP) is treated with dilute hydrochloric acid (HCl) followed by Barium Chloride (BaCl2) solution?",
      "options": {
        "A": "A dense, white precipitate of barium sulfate (BaSO4) forms instantly due to the high sulfate content",
        "B": "The solution catches fire",
        "C": "The solution turns deep purple",
        "D": "The beaker melts completely"
      },
      "correctOption": "A",
      "explanation": "SSP contains ~11% sulfate sulfur as calcium sulfate (gypsum). Dissolving it in dilute acid and adding BaCl2 precipitates sulfate ions as insoluble white barium sulfate: SO4^2- + Ba2+ -> BaSO4(s)."
    },
    {
      "id": "SOL203-U5-MCQ14",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Easy",
      "questionText": "Which software and spatial technology is standardly used for generating regional soil fertility maps from georeferenced soil testing data?",
      "options": {
        "A": "Geographic Information Systems (GIS) such as QGIS or ArcGIS",
        "B": "Adobe Photoshop",
        "C": "AutoCAD 3D",
        "D": "Microsoft Word"
      },
      "correctOption": "A",
      "explanation": "GIS software (QGIS, ArcGIS) combined with GPS-referenced soil sampling coordinates enables spatial interpolation (kriging, IDW) to create district and block-level soil fertility thematic maps."
    },
    {
      "id": "SOL203-U5-MCQ15",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Easy",
      "questionText": "What is the penalty for selling adulterated fertilizers under the Essential Commodities Act, 1955?",
      "options": {
        "A": "Imprisonment up to 7 years along with fine and cancellation of dealer registration",
        "B": "A verbal warning only",
        "C": "A small fine of 10 rupees",
        "D": "Free supply of government seeds"
      },
      "correctOption": "A",
      "explanation": "Under Section 7 of the Essential Commodities Act (ECA), 1955, contravention of FCO provisions (such as manufacturing or distributing adulterated fertilizer) is a cognizable criminal offense punishable by imprisonment up to 7 years and fine."
    },
    {
      "id": "SOL203-U5-MCQ16",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Easy",
      "questionText": "What is the primary objective of the Soil Health Card Scheme launched by the Prime Minister in 2015 at Suratgarh, Rajasthan?",
      "options": {
        "A": "To provide every farmer with periodic soil nutrient status cards and tailored crop-specific fertilizer recommendations to arrest declining soil health",
        "B": "To tax farmers on their land holdings",
        "C": "To replace all human farmers with robots",
        "D": "To eliminate the use of water in agriculture"
      },
      "correctOption": "A",
      "explanation": "Launched in February 2015 with the motto 'Swasth Dhara, Khet Haraa' (Healthy Earth, Green Farm), the SHC scheme issues biennial soil health cards to farmers to promote balanced, test-based fertilization."
    },
    {
      "id": "SOL203-U5-MCQ17",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Easy",
      "questionText": "What does '%CS' signify in an STCR fertilizer equation?",
      "options": {
        "A": "Percentage contribution of available nutrients from the soil to the crop",
        "B": "Carbon sequestration percentage",
        "C": "Crop survival percentage",
        "D": "Chemical solubility in water"
      },
      "correctOption": "A",
      "explanation": "In STCR equations, %CS represents the percentage efficiency with which the crop is able to absorb available nutrients from native soil reserves (measured by soil test values)."
    },
    {
      "id": "SOL203-U5-MCQ18",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Easy",
      "questionText": "What is the physical appearance test used to detect sand or stone grit adulteration in fertilizer granules?",
      "options": {
        "A": "Water dissolution test: genuine fertilizer dissolves completely, whereas sand, clay, or quartz grit settles as an insoluble gritty bottom residue",
        "B": "Biting the granules with teeth",
        "C": "Listening to the bag in a quiet room",
        "D": "Smelling the granules with eyes closed"
      },
      "correctOption": "A",
      "explanation": "Water-soluble fertilizers (urea, DAP, MOP) dissolve leaving negligible sediment; insoluble sand, stone dust, or powdered shale adulterants rapidly settle to the bottom of a transparent glass vessel."
    },
    {
      "id": "SOL203-U5-MCQ19",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Easy",
      "questionText": "What is the validity period of an Certificate of Registration (CR) or Authorization Letter issued to a fertilizer retail dealer under FCO?",
      "options": {
        "A": "3 to 5 years (depending on state rules) before renewal",
        "B": "1 month only",
        "C": "Lifetime with zero inspection",
        "D": "24 hours"
      },
      "correctOption": "A",
      "explanation": "A certificate of registration or authorization letter issued to fertilizer wholesalers and retailers is valid for a period of 3 to 5 years (as per State rules) and must be renewed prior to expiry."
    },
    {
      "id": "SOL203-U5-MCQ20",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Easy",
      "questionText": "What is the purpose of establishing Regional Fertilizer Quality Control Laboratories in India?",
      "options": {
        "A": "To provide regional analytical backup to CFQC&TI, train state fertilizer inspectors, and test referee and commercial samples",
        "B": "To manufacture synthetic insecticides",
        "C": "To sell subsidized fertilizers directly to farmers",
        "D": "To build concrete dams across rivers"
      },
      "correctOption": "A",
      "explanation": "Regional Fertilizer Quality Control Laboratories (located at Mumbai, Kalyani, Chennai) operate under CFQC&TI to analyze interstate samples, train state quality personnel, and handle referee disputes."
    },
    {
      "id": "SOL203-U5-MCQ21",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Medium",
      "questionText": "Given an STCR targeted yield equation for wheat: Fertilizer N (FN, kg/ha) = 4.40 * T - 0.40 * SN, where T is the yield target in quintals/ha (q/ha) and SN is available soil nitrogen in kg/ha. If a farmer targets 50 q/ha grain yield and the soil tests 200 kg N/ha, how much fertilizer N should be applied?",
      "options": {
        "A": "140.0 kg N/ha",
        "B": "220.0 kg N/ha",
        "C": "80.0 kg N/ha",
        "D": "300.0 kg N/ha"
      },
      "correctOption": "A",
      "explanation": "FN = 4.40 * T - 0.40 * SN = (4.40 * 50) - (0.40 * 200) = 220 - 80 = 140 kg N/ha."
    },
    {
      "id": "SOL203-U5-MCQ22",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Medium",
      "questionText": "What is the primary mathematical principle behind the STCR (Soil Test Crop Response) approach?",
      "options": {
        "A": "Fertilizer dose = (Nutrient needed for target yield - Nutrient supplied by soil) / Efficiency of fertilizer nutrient",
        "B": "Fertilizer dose = Soil test value multiplied by crop height",
        "C": "Fertilizer dose = Fixed 100 kg per acre regardless of soil or crop",
        "D": "Fertilizer dose = Total rainfall divided by number of days in season"
      },
      "correctOption": "A",
      "explanation": "The STCR model balances total nutrient demand against soil supply: Fertilizer Dose = [(Target Yield * NR) - (Soil Test Value * %CS / 100)] / (%CF / 100)."
    },
    {
      "id": "SOL203-U5-MCQ23",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Medium",
      "questionText": "Why is the Integrated Plant Nutrient Supply (IPNS) system considered superior to chemical fertilizer-only practices in long-term cropping systems?",
      "options": {
        "A": "It sustains crop yields while building soil organic carbon, buffering soil pH, enhancing microbial biomass, and correcting micronutrient deficiencies",
        "B": "It requires zero labor or management",
        "C": "It eliminates all weeds and pests completely within 24 hours",
        "D": "It allows crops to grow in total darkness"
      },
      "correctOption": "A",
      "explanation": "Long-term fertilizer experiments (LTFEs) show that chemical fertilizers alone eventually lead to micronutrient deficiencies and structural degradation, whereas INM/IPNS maintains organic matter, microbial biodiversity, and sustained high productivity."
    },
    {
      "id": "SOL203-U5-MCQ24",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Medium",
      "questionText": "Under Clause 19 of FCO 1985, what constitutes the manufacture or sale of an 'adulterated fertilizer'?",
      "options": {
        "A": "Any fertilizer whose nutrient content has been deliberately reduced, or to which any substance has been added that decreases its quality, or which simulates another fertilizer without conforming to specifications",
        "B": "Fertilizer packed in green-colored bags",
        "C": "Fertilizer sold during evening hours",
        "D": "Fertilizer produced in government factories"
      },
      "correctOption": "A",
      "explanation": "Under FCO Clause 19, no person shall manufacture, pack, distribute, or sell any fertilizer that is adulterated, misbranded, sub-standard, or packed in containers not complying with prescribed standards."
    },
    {
      "id": "SOL203-U5-MCQ25",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Medium",
      "questionText": "What chemical test detects calcium carbonate (crushed limestone or marble dust) adulteration in Single Superphosphate or DAP?",
      "options": {
        "A": "Effervescence test with dilute hydrochloric acid: vigorous bubbling of CO2 gas confirms presence of carbonate minerals",
        "B": "Dissolving in sugar water to see if it turns pink",
        "C": "Exposing granules to a laser beam",
        "D": "Measuring electrical current with a car battery"
      },
      "correctOption": "A",
      "explanation": "Adding dilute HCl (10%) to carbonate adulterants causes immediate vigorous effervescence due to carbon dioxide evolution: CaCO3 + 2 HCl -> CaCl2 + H2O + CO2(g). Pure DAP or SSP contains no free carbonate and shows no vigorous gas bubbling."
    },
    {
      "id": "SOL203-U5-MCQ26",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Medium",
      "questionText": "In an STCR equation incorporating Farmyard Manure (FYM): FN = A * T - B * SN - C * ON. What does 'ON' represent?",
      "options": {
        "A": "Amount of organic manure (FYM or compost) applied in tonnes per hectare",
        "B": "Oxygen concentration in the air",
        "C": "Optimal Nitrogen ratio",
        "D": "Overnight temperature"
      },
      "correctOption": "A",
      "explanation": "In integrated STCR-IPNS equations, 'ON' represents the quantity of organic manure (FYM) applied in t/ha, and 'C' represents the nutrient replacement coefficient of that manure."
    },
    {
      "id": "SOL203-U5-MCQ27",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Medium",
      "questionText": "What is the role of spatial interpolation techniques (e.g., Ordinary Kriging, Inverse Distance Weighting) in soil fertility mapping?",
      "options": {
        "A": "Predicting nutrient values at un-sampled geographical locations based on measured values of surrounding GPS-tagged sample points to produce continuous surface fertility maps",
        "B": "Counting the number of earthworms via satellite",
        "C": "Calculating the price of grain in wholesale markets",
        "D": "Measuring soil temperature using radio waves"
      },
      "correctOption": "A",
      "explanation": "Spatial interpolation algorithms (Kriging, IDW) utilize spatial autocorrelation among georeferenced sample points to predict and generate continuous 2D surface maps of soil pH, EC, and macro/micronutrients."
    },
    {
      "id": "SOL203-U5-MCQ28",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Medium",
      "questionText": "Under FCO rules, what is the consequence if an official fertilizer sample is declared 'Sub-Standard' by the testing laboratory?",
      "options": {
        "A": "The dealer/manufacturer is issued a show-cause notice, sale of the lot is prohibited, and if re-testing confirms, the stock is confiscated or allowed to be sold only as 'sub-standard' at reduced price with written government permission",
        "B": "The dealer receives an award from the government",
        "C": "The fertilizer is mixed with drinking water",
        "D": "The sample is thrown away and forgotten"
      },
      "correctOption": "A",
      "explanation": "If a sample fails to meet prescribed standards within tolerance limits, sale is stopped immediately. If confirmed on appeal, the registration certificate may be cancelled, criminal proceedings initiated, or the material permitted for downgraded sale under strict conditions."
    },
    {
      "id": "SOL203-U5-MCQ29",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Medium",
      "questionText": "What is the 'Nutrient Buffer Power' of a soil and why does it affect soil test fertilizer recommendations?",
      "options": {
        "A": "The capacity of soil solid phase to replenish nutrient ions in soil solution as they are absorbed by plant roots (delta Q / delta I)",
        "B": "The resistance of soil against tractor wheels",
        "C": "The amount of nitrogen gas in soil pores",
        "D": "The pH of pure rainwater falling on soil"
      },
      "correctOption": "A",
      "explanation": "Nutrient buffering capacity is the ratio of change in quantity of labile nutrient (Q) to change in solution intensity (I): Buffer Power = \u0394Q / \u0394I. Highly buffered clay soils require higher fertilizer additions to raise solution concentration than weakly buffered sandy soils."
    },
    {
      "id": "SOL203-U5-MCQ30",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Medium",
      "questionText": "What is a 'Nutrient Index' (NI) in soil fertility evaluation and what value indicates 'Medium' fertility status?",
      "options": {
        "A": "NI = (1 * %Low + 2 * %Medium + 3 * %High) / 100; a value between 1.67 and 2.33 indicates Medium status",
        "B": "NI = Total N + Total P + Total K; value between 50 and 100",
        "C": "NI = Soil depth multiplied by rainfall; value > 5.0",
        "D": "NI = Number of earthworms per square meter"
      },
      "correctOption": "A",
      "explanation": "Parker's Nutrient Index weights samples into three classes: Low (weight 1), Medium (weight 2), and High (weight 3). An NI < 1.67 indicates Low fertility, 1.67 to 2.33 indicates Medium, and > 2.33 indicates High fertility."
    },
    {
      "id": "SOL203-U5-MCQ31",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Medium",
      "questionText": "What is the primary purpose of NABL accreditation for a commercial or state soil and fertilizer testing laboratory?",
      "options": {
        "A": "Formally recognizing technical competence, ensuring data reliability, standardized calibration traceability, and international acceptance of test reports",
        "B": "Allowing the laboratory to sell fertilizers directly to farmers",
        "C": "Exempting laboratory staff from paying income taxes",
        "D": "Eliminating the need to purchase chemical reagents"
      },
      "correctOption": "A",
      "explanation": "NABL (National Accreditation Board for Testing and Calibration Laboratories) accreditation under ISO/IEC 17025 certifies that the lab maintains technical competence, documented quality systems, traceable standards, and validated analytical methods."
    },
    {
      "id": "SOL203-U5-MCQ32",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Medium",
      "questionText": "How does the 'Targeted Yield Approach' differ from the 'Economic Optimum Approach' in fertilizer recommendation?",
      "options": {
        "A": "Targeted yield prescribes fertilizer doses to achieve a specific yield goal within the crop's production potential, whereas economic optimum optimizes profit based on the law of diminishing returns and price ratios",
        "B": "Targeted yield uses zero fertilizer while economic optimum uses maximum fertilizer",
        "C": "Targeted yield is only for vegetables while economic optimum is only for trees",
        "D": "There is no difference between the two approaches"
      },
      "correctOption": "A",
      "explanation": "Targeted yield equations calculate precise fertilizer amounts to fulfill nutrient demands for a farmer's chosen yield target. Economic optimum determines the fertilizer rate where marginal revenue equals marginal fertilizer cost on a response curve."
    },
    {
      "id": "SOL203-U5-MCQ33",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Medium",
      "questionText": "What is the role of the Appellate Authority under FCO Clause 32?",
      "options": {
        "A": "Hearing appeals from dealers or manufacturers aggrieved by orders of cancellation, suspension, or non-issuance of registration certificates by the Registering Authority",
        "B": "Setting the market price of fresh fruits",
        "C": "Testing soil samples for free",
        "D": "Distributing free agricultural tractors"
      },
      "correctOption": "A",
      "explanation": "Under FCO Clause 32, any person aggrieved by an order revoking, suspending, or refusing to grant or renew a certificate of registration may appeal to the designated State Appellate Authority within 30 days."
    },
    {
      "id": "SOL203-U5-MCQ34",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Medium",
      "questionText": "In a village where 70% of soil samples test Low in phosphorus, 25% test Medium, and 5% test High, what is the Nutrient Index (NI) for phosphorus?",
      "options": {
        "A": "1.35 (Low fertility status)",
        "B": "2.50 (High fertility status)",
        "C": "3.00 (Extremely high)",
        "D": "0.50 (Zero fertility)"
      },
      "correctOption": "A",
      "explanation": "Nutrient Index (NI) = [(1 * 70) + (2 * 25) + (3 * 5)] / 100 = (70 + 50 + 15) / 100 = 135 / 100 = 1.35. Since 1.35 is less than 1.67, the village is classified as Low in phosphorus fertility."
    },
    {
      "id": "SOL203-U5-MCQ35",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Medium",
      "questionText": "What is the 'Law of the Minimum' formulated by Justus von Liebig, and how does it relate to balanced fertilizer recommendations?",
      "options": {
        "A": "Crop yield is limited by the scarcest nutrient (limiting factor), not by the total amount of all nutrients present; excess of other nutrients cannot compensate for a deficient one",
        "B": "Crops grow best with minimum water and zero fertilizer",
        "C": "Only trace elements are needed for plant growth",
        "D": "Fertilizers should only be applied at night"
      },
      "correctOption": "A",
      "explanation": "Liebig's Law of the Minimum (visualized as a barrel with unequal staves) states that yield potential is constrained by the most limiting nutrient. Balanced fertilizer recommendations ensure no single essential nutrient restricts crop yield."
    },
    {
      "id": "SOL203-U5-MCQ36",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Medium",
      "questionText": "Why is the use of 'Neem Cake Coated Urea' or nitrification inhibitors an essential component of INM in wetland rice cultivation?",
      "options": {
        "A": "It slows nitrification in the oxidized water-soil interface, preventing nitrate leaching into the reduced rhizosphere where it would undergo denitrification into N2 gas",
        "B": "It kills all fish in the paddy water",
        "C": "It prevents rice plants from growing taller than 10 centimeters",
        "D": "It turns the rice grains green"
      },
      "correctOption": "A",
      "explanation": "In wetland rice paddies, nitrate (NO3-) formed in the aerobic surface water layer diffuses downward into the anaerobic reduced zone and is lost as N2/N2O via denitrification. Nitrification inhibitors keep nitrogen in the ammonium (NH4+) form, which remains bound to clay."
    },
    {
      "id": "SOL203-U5-MCQ37",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Medium",
      "questionText": "What is a 'Fertilizer Inspector Memorandum' (Form J)?",
      "options": {
        "A": "The statutory legal document prepared in duplicate by the Inspector during sampling, containing details of dealer, batch number, manufacturer, and signatures of witnesses",
        "B": "A receipt for paying fertilizer taxes",
        "C": "A train ticket issued to the inspector",
        "D": "A certificate of crop yield awarded to the farmer"
      },
      "correctOption": "A",
      "explanation": "Form J is the legal memorandum drawn by the Fertilizer Inspector at the time of sampling. It records bag condition, batch number, manufacturer, date, quantity in stock, and signatures of the dealer and inspector."
    },
    {
      "id": "SOL203-U5-MCQ38",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Medium",
      "questionText": "How does Integrated Nutrient Management (INM) influence the microbial biomass carbon (MBC) and soil biological health?",
      "options": {
        "A": "Significantly elevates MBC, enzymatic activities (dehydrogenase, urease, alkaline phosphatase), and mycorrhizal colonization compared to 100% chemical NPK fertilization",
        "B": "Reduces soil bacteria by 99%",
        "C": "Sterilizes the soil and prevents fungal growth",
        "D": "Turns all soil carbon into carbon monoxide gas"
      },
      "correctOption": "A",
      "explanation": "Supplying organic residues and biofertilizers alongside mineral fertilizers provides continuous carbon energy substrates for heterotrophic microbes, dramatically increasing microbial biomass carbon (MBC) and enzyme activities."
    },
    {
      "id": "SOL203-U5-MCQ39",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Medium",
      "questionText": "What is the primary role of Farmer Advisory Services in the Soil Health Card Scheme?",
      "options": {
        "A": "Translating laboratory numerical soil test data into simple, actionable fertilizer schedules (in bags per acre) tailored to specific local crops and varieties",
        "B": "Selling expensive farm tractors to farmers",
        "C": "Collecting land revenue taxes",
        "D": "Conducting political rallies in villages"
      },
      "correctOption": "A",
      "explanation": "Farmers cannot easily interpret ppm or kg/ha test figures. Advisory services translate these values into clear, crop-specific recommendations (e.g., 'apply 1 bag urea and 2 bags SSP per acre') including split application timing."
    },
    {
      "id": "SOL203-U5-MCQ40",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Medium",
      "questionText": "What is the function of the National Project on Management of Soil Health and Fertility (NPMSH&F)?",
      "options": {
        "A": "Strengthening soil testing laboratories, promoting INM, setting up new static and mobile testing facilities, and providing quality fertilizer control infrastructure",
        "B": "Importing foreign grains into India",
        "C": "Banning all agricultural trade",
        "D": "Manufacturing diesel engines for tube wells"
      },
      "correctOption": "A",
      "explanation": "NPMSH&F was launched to modernize existing soil testing laboratories, establish new district and mobile laboratories, build capacity for testing secondary and micronutrients, and promote balanced nutrient use."
    },
    {
      "id": "SOL203-U5-MCQ41",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Medium",
      "questionText": "Why is the use of GPS receivers mandatory during soil sampling under the Soil Health Card Scheme?",
      "options": {
        "A": "To accurately record the latitude and longitude coordinates of sampling points, enabling GIS spatial tracking, re-sampling validation, and regional fertility mapping",
        "B": "To measure tractor speed",
        "C": "To provide internet to the farmer",
        "D": "To calculate the altitude of clouds"
      },
      "correctOption": "A",
      "explanation": "GPS coordinates geo-reference each soil sample, allowing digital tracking, periodic monitoring of nutrient changes over time, and generation of precise GIS-based district fertility maps."
    },
    {
      "id": "SOL203-U5-MCQ42",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Medium",
      "questionText": "In an STCR equation for rice: FN = 4.12 * T - 0.35 * SN. If a farmer aims for a target yield (T) of 60 q/ha in a soil with available nitrogen (SN) of 240 kg/ha, what is the required fertilizer N dose?",
      "options": {
        "A": "163.2 kg N/ha",
        "B": "247.2 kg N/ha",
        "C": "84.0 kg N/ha",
        "D": "300.0 kg N/ha"
      },
      "correctOption": "A",
      "explanation": "FN = (4.12 * 60) - (0.35 * 240) = 247.2 - 84.0 = 163.2 kg N/ha."
    },
    {
      "id": "SOL203-U5-MCQ43",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Medium",
      "questionText": "What legal action is taken if a fertilizer manufacturer repeatedly produces sub-standard fertilizer beyond statutory tolerance limits?",
      "options": {
        "A": "Cancellation of manufacturing license and Certificate of Registration, seizure of stocks, and prosecution under Section 7 of the Essential Commodities Act",
        "B": "Awarding a national medal to the manufacturer",
        "C": "Promoting the manufacturer to government minister",
        "D": "Allowing the manufacturer to operate without taxes"
      },
      "correctOption": "A",
      "explanation": "Habitual or serious contravention results in formal revocation of manufacturing licenses, de-registration under FCO, confiscation of factory stock, and criminal prosecution under the Essential Commodities Act."
    },
    {
      "id": "SOL203-U5-MCQ44",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Medium",
      "questionText": "What is the critical role of Krishi Vigyan Kendras (KVKs) in soil fertility management?",
      "options": {
        "A": "Conducting frontline demonstrations of soil test-based INM, providing soil testing services, and training farmers and extension workers in balanced fertilization",
        "B": "Manufacturing commercial pesticides",
        "C": "Exporting basmati rice to international markets",
        "D": "Regulating international air traffic"
      },
      "correctOption": "A",
      "explanation": "KVKs (Farm Science Centres established by ICAR) serve as the district-level agricultural technology assessment and transfer hub, conducting frontline demonstrations on INM, operating testing labs, and training farming communities."
    },
    {
      "id": "SOL203-U5-MCQ45",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Medium",
      "questionText": "What spot test distinguishes genuine Muriate of Potash (MOP) from adulterated red clay or brick powder?",
      "options": {
        "A": "Complete water solubility: genuine MOP dissolves completely in water leaving a clear solution with a faint pink tint, while brick powder or red clay settles immediately as insoluble red sludge",
        "B": "Smelling the powder for perfume",
        "C": "Touching the powder with a magnet",
        "D": "Boiling the powder with vegetable oil"
      },
      "correctOption": "A",
      "explanation": "MOP is potassium chloride, which is completely water-soluble. Red brick powder, sand, or red ochre clay are insoluble minerals that immediately precipitate as muddy red sediment when stirred with water."
    },
    {
      "id": "SOL203-U5-MCQ46",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Hard",
      "questionText": "In an STCR calibration trial for maize, the crop requires 2.50 kg N to produce 1 quintal of grain (NR = 2.50). The efficiency of soil available nitrogen is 35% (%CS = 35) and the efficiency of fertilizer nitrogen is 50% (%CF = 50). What is the calibrated STCR targeted yield equation for fertilizer N (FN)?",
      "options": {
        "A": "FN = 5.00 * T - 0.70 * SN",
        "B": "FN = 2.50 * T - 0.35 * SN",
        "C": "FN = 7.14 * T - 1.42 * SN",
        "D": "FN = 1.25 * T - 0.17 * SN"
      },
      "correctOption": "A",
      "explanation": "The STCR equation is: FN = (NR / %CF * 100) * T - (%CS / %CF) * SN. Here: (2.50 / 50 * 100) = 5.00. And (%CS / %CF) = 35 / 50 = 0.70. Therefore, FN = 5.00 * T - 0.70 * SN."
    },
    {
      "id": "SOL203-U5-MCQ47",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Hard",
      "questionText": "In a long-term fertilizer experiment (LTFE), why does continuous application of 100% Recommended Dose of chemical N fertilizer alone (without P, K, or manure) cause dramatic yield collapse over 15-20 years?",
      "options": {
        "A": "Exhaustion of native available phosphorus and potassium reserves, induced secondary (S) and micronutrient (Zn) deficiencies, and severe soil acidification from nitrification of ammoniacal nitrogen",
        "B": "Accumulation of toxic gold particles in root cells",
        "C": "Crops developing genetic resistance to nitrogen molecules",
        "D": "Conversion of all soil minerals into gaseous radon"
      },
      "correctOption": "A",
      "explanation": "Imbalanced nitrogen-only application forces high vegetative extraction of native soil P, K, and micronutrients. Over decades, this depletes non-labile nutrient reserves, accelerates soil acidification (pH drop), and induces severe multi-nutrient deficiencies."
    },
    {
      "id": "SOL203-U5-MCQ48",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Hard",
      "questionText": "Under FCO Schedule I, what is the maximum permissible biuret tolerance limit in urea intended for foliar spray applications?",
      "options": {
        "A": "0.40% by weight",
        "B": "1.50% by weight",
        "C": "5.00% by weight",
        "D": "0.001% by weight"
      },
      "correctOption": "A",
      "explanation": "While soil-application urea permits up to 1.5% biuret, foliar spray urea must have a maximum of 0.40% biuret by weight. Above 0.4%, direct absorption through leaf cuticles causes severe marginal necrosis and yellow tip chlorosis in sensitive crops."
    },
    {
      "id": "SOL203-U5-MCQ49",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Hard",
      "questionText": "How is the 'Apparent Recovery Efficiency' (ARE) of an applied fertilizer nutrient calculated in agronomic field trials?",
      "options": {
        "A": "ARE (%) = [(Total Nutrient Uptake in Fertilized Plot - Total Nutrient Uptake in Unfertilized Control Plot) / Quantity of Nutrient Applied] * 100",
        "B": "ARE (%) = (Yield in Fertilized Plot / Yield in Control Plot) * 100",
        "C": "ARE (%) = (Soil test value after harvest / Soil test value before harvest) * 100",
        "D": "ARE (%) = Total rainfall divided by fertilizer weight"
      },
      "correctOption": "A",
      "explanation": "Apparent Recovery Efficiency (ARE) quantifies the percentage of applied fertilizer nutrient actually absorbed by the crop: ARE (%) = [(UN - U0) / FN] * 100, where UN and U0 are crop nutrient uptake in fertilized and unfertilized plots, and FN is the fertilizer dose."
    },
    {
      "id": "SOL203-U5-MCQ50",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Hard",
      "questionText": "In an STCR-IPNS model where FYM is integrated, the equation for phosphorus is: FP2O5 = 3.60 * T - 0.72 * SP - 0.85 * FYM_P. If target yield T = 45 q/ha, soil test P (SP) = 15 kg/ha, and 10 t/ha of FYM is applied (delivering FYM_P = 12 kg P2O5), what is the net chemical fertilizer P2O5 requirement?",
      "options": {
        "A": "141.0 kg P2O5/ha",
        "B": "162.0 kg P2O5/ha",
        "C": "105.5 kg P2O5/ha",
        "D": "151.2 kg P2O5/ha"
      },
      "correctOption": "A",
      "explanation": "FP2O5 = (3.60 * 45) - (0.72 * 15) - (0.85 * 12) = 162.0 - 10.8 - 10.2 = 141.0 kg P2O5/ha."
    },
    {
      "id": "SOL203-U5-MCQ51",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Hard",
      "questionText": "What is the legal status and jurisdiction of the Certificate of Analysis (Form K) issued by a Notified Laboratory in a court of law under Section 13 of the ECA?",
      "options": {
        "A": "It is admissible as conclusive evidence of the facts stated therein unless formally challenged by the accused within 30 days and sent for referee re-testing",
        "B": "It is treated as an informal opinion with no legal validity",
        "C": "It can only be used if signed by the President of India",
        "D": "It requires validation by a police constable"
      },
      "correctOption": "A",
      "explanation": "Under Section 13 of the Essential Commodities Act read with FCO provisions, the laboratory certificate signed by the Government Analyst is conclusive evidence in criminal proceedings unless challenged within 30 days and sent to CFQC&TI."
    },
    {
      "id": "SOL203-U5-MCQ52",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Hard",
      "questionText": "In geostatistical kriging for soil fertility mapping, what does the 'Nugget Effect' in a semivariogram signify?",
      "options": {
        "A": "Measurement error, fine-scale spatial variability occurring at distances smaller than the shortest sampling interval, and micro-heterogeneity",
        "B": "The presence of gold nuggets in the soil profile",
        "C": "The maximum distance of spatial correlation",
        "D": "The average crop yield of the district"
      },
      "correctOption": "A",
      "explanation": "In an experimental semivariogram, the nugget variance represents unresolved micro-scale soil spatial variation and analytical measurement error occurring at distances smaller than the sampling grid spacing."
    },
    {
      "id": "SOL203-U5-MCQ53",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Hard",
      "questionText": "Why does excessive reliance on high-analysis chemical fertilizers (e.g., Urea, DAP, MOP) exacerbate widespread sulfur (S) deficiency in intensive agricultural cropping systems?",
      "options": {
        "A": "High-analysis fertilizers are concentrated and contain 0% sulfur, unlike traditional low-analysis fertilizers (SSP contains 11% S, Ammonium Sulfate contains 24% S) which historically supplied incidental sulfur",
        "B": "High-analysis fertilizers chemically destroy sulfur atoms in soil",
        "C": "Urea absorbs all sulfur from the earth's crust",
        "D": "DAP converts sulfur into insoluble stone crystals"
      },
      "correctOption": "A",
      "explanation": "Historically, using Single Superphosphate (11% S) and Ammonium Sulphate (24% S) replenished soil sulfur. Replacing them with sulfur-free high-analysis fertilizers (Urea 46-0-0, DAP 18-46-0, MOP 0-0-60) without sulfur supplementation depleted soil sulfur reserves."
    },
    {
      "id": "SOL203-U5-MCQ54",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "difficulty": "Hard",
      "questionText": "What is the agronomic and chemical rationale for splitting nitrogen fertilizer applications into 3 or 4 doses in cereal crops?",
      "options": {
        "A": "Matching nitrogen availability to peak crop uptake stages, minimizing leaching and volatilization losses, and improving nitrogen use efficiency (NUE)",
        "B": "Giving the farmer exercise walking in the field",
        "C": "Preventing the fertilizer bag from getting dusty",
        "D": "Keeping the irrigation pump cool"
      },
      "correctOption": "A",
      "explanation": "Cereal nitrogen demand is low during early seedling stages and peaks during active tillering, panicle initiation, and flowering. Applying nitrogen in splits synchronizes supply with crop demand, reducing leaching and denitrification."
    },
    {
      "id": "SOL203-U5-MCQ55",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "difficulty": "Hard",
      "questionText": "Under FCO testing protocols, what is the maximum permissible analytical tolerance limit for P2O5 in Single Superphosphate containing 16.0% guaranteed available P2O5?",
      "options": {
        "A": "0.3 units of P2O5 (permissible down to 15.7% P2O5)",
        "B": "5.0 units of P2O5",
        "C": "Zero tolerance (0.00%)",
        "D": "10.0 units of P2O5"
      },
      "correctOption": "A",
      "explanation": "Under FCO Schedule I, for phosphatic fertilizers containing 16-20% guaranteed P2O5, an analytical tolerance of 0.3 units is permissible. A sample testing >= 15.7% available P2O5 complies with standards."
    },
    {
      "id": "SOL203-U5-MCQ56",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "difficulty": "Hard",
      "questionText": "How does the 'Internal Efficiency' (IE) of a nutrient differ from 'Agronomic Efficiency' (AE) in fertilizer trials?",
      "options": {
        "A": "Internal Efficiency is economic yield produced per unit total nutrient absorbed in plant tissues (kg grain / kg nutrient uptake), whereas Agronomic Efficiency is additional grain yield per unit fertilizer nutrient applied (kg grain / kg fertilizer applied)",
        "B": "Internal Efficiency is measured inside the tractor while Agronomic Efficiency is measured outside",
        "C": "Internal Efficiency applies only to weeds while Agronomic Efficiency applies to crops",
        "D": "There is no mathematical difference between IE and AE"
      },
      "correctOption": "A",
      "explanation": "Internal Efficiency (IE = Y / U) measures the plant's physiological ability to convert absorbed nutrients into harvestable grain. Agronomic Efficiency [AE = (Y - Y0) / F] measures yield gain per unit of fertilizer applied."
    },
    {
      "id": "SOL203-U5-MCQ57",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "difficulty": "Hard",
      "questionText": "What is the principle behind 'Site-Specific Nutrient Management' (SSNM) utilizing the Nutrient Expert (NE) decision support system?",
      "options": {
        "A": "Optimizing field-specific fertilizer recommendations dynamically based on yield gap analysis, soil nutrient supplying capacity, and local cropping practices without needing fresh laboratory soil test data",
        "B": "Using satellite lasers to shoot fertilizer into plant stomata",
        "C": "Applying identical fertilizer doses across the entire continent",
        "D": "Eliminating irrigation completely"
      },
      "correctOption": "A",
      "explanation": "Nutrient Expert is an interactive decision support tool based on SSNM principles. It estimates field-specific fertilizer requirements using historical yields, farmer management practices, and site characteristics when recent laboratory tests are unavailable."
    },
    {
      "id": "SOL203-U5-MCQ58",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "difficulty": "Hard",
      "questionText": "What is the primary geochemical cause of widespread multi-micronutrient deficiencies (Zn, Fe, B) in the Indo-Gangetic Alluvial Plains?",
      "options": {
        "A": "Intensive rice-wheat double cropping with high-yielding varieties, high soil pH and calcareous nature, low organic matter, and zero return of micronutrients",
        "B": "Lack of sunlight during winter months",
        "C": "Excessive rainfall washing all clay into the ocean",
        "D": "Earthquakes shaking micronutrients into the core of the earth"
      },
      "correctOption": "A",
      "explanation": "The intensive rice-wheat system extracts substantial micronutrients annually. High soil pH (>7.8) and free CaCO3 in alluvial plains precipitate Zn, Fe, and B into insoluble forms, while low organic recycling prevents replenishment."
    },
    {
      "id": "SOL203-U5-MCQ59",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "difficulty": "Hard",
      "questionText": "What is the function of a 'Referee Analysis' conducted by CFQC&TI under Clause 32B of FCO?",
      "options": {
        "A": "Providing final, conclusive, and legally binding analytical findings on the third sealed sample when the dealer disputes an adverse report from a State testing lab",
        "B": "Training police officers in traffic management",
        "C": "Auditing company bank accounts",
        "D": "Testing pesticide residues in packaged drinking water"
      },
      "correctOption": "A",
      "explanation": "Under FCO Clause 32B, if an appellate court or authority orders a re-test, the third sealed referee sample is dispatched to CFQC&TI, Faridabad, whose analytical report supersedes state lab findings and is conclusive."
    },
    {
      "id": "SOL203-U5-MCQ60",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "difficulty": "Hard",
      "questionText": "In calculating soil fertility ratings across a district, if the Nutrient Index (NI) for Zinc is 1.25, how should district-level fertilizer policy respond?",
      "options": {
        "A": "Formulate mandatory policies for basal zinc sulfate application (25 kg ZnSO4/ha) or zinc-fortified urea distribution, as the district is critically zinc-deficient (NI < 1.67)",
        "B": "Stop all zinc fertilization completely",
        "C": "Apply extra potassium chloride",
        "D": "Ban the cultivation of rice and wheat"
      },
      "correctOption": "A",
      "explanation": "A Nutrient Index of 1.25 falls in the 'Low' fertility category (< 1.67). District agricultural policy must prioritize zinc replenishment via zincated urea, basal zinc sulfate additions, and promotional subsidies."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL203-U5-SUB01",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "questionText": "Explain the theoretical foundation, mathematical derivations, and operational steps of the Soil Test Crop Response (STCR) targeted yield approach pioneered by Dr. B. Ramamoorthy.",
      "contextScenario": "",
      "modelAnswer": "The Soil Test Crop Response (STCR) targeted yield approach, developed by Dr. B. Ramamoorthy and co-workers in 1967 at IARI under the All India Coordinated Research Project (AICRP on STCR), established a quantitative, scientific basis for fertilizer recommendations.\n\n1. Theoretical Foundation:\nTraditional fertilizer recommendations either apply blanket regional doses or adjust doses based on categorical fertility classes (Low, Medium, High). These empirical approaches fail to link specific crop yield goals with measured soil nutrient reserves.\nThe STCR targeted yield approach is anchored on the principle that to achieve a specific crop yield target (T in quintals/ha), a definite quantity of nutrient must be taken up by the crop. This required nutrient is supplied jointly by two sources: (a) native soil available nutrients, and (b) applied chemical fertilizer nutrients (and organic manures).\n\n2. Mathematical Parameters and Derivation:\nThe basic STCR balance equation is:\nTotal Nutrient Uptake = Contribution from Soil + Contribution from Fertilizer\nLet:\n- T = Targeted crop yield (q/ha).\n- NR = Nutrient Requirement (kg of nutrient needed to produce 1 quintal of economic grain).\n- SN = Available soil nutrient measured by standard soil test (kg/ha).\n- FN = Chemical fertilizer nutrient dose to be applied (kg/ha).\n- %CS = Percentage contribution of available nutrient from the soil to the crop.\n- %CF = Percentage contribution of applied nutrient from fertilizer to the crop.\n\nThe relationship is formulated as:\n(T * NR) = (SN * %CS / 100) + (FN * %CF / 100)\n\nRearranging to solve for Fertilizer Dose (FN):\n(FN * %CF / 100) = (T * NR) - (SN * %CS / 100)\nFN = [(NR / %CF) * 100] * T - (%CS / %CF) * SN\n\nDefining coefficients:\nA = (NR / %CF) * 100\nB = (%CS / %CF)\nThus: FN = A * T - B * SN.\n\n3. Operational Steps in Calibration:\n- Establishing Fertility Gradients: An experimental field is divided into strips and treated with graded doses of N, P, and K to create marked fertility gradients in a single soil type.\n- Test Crop Trials: A test crop is sown across strips in sub-plots treated with varying fertilizer combinations.\n- Plant and Soil Assay: Soil samples are analyzed before sowing and after harvest. Total nutrient uptake (grain + straw) is determined.\n- Regression Computation: Multiple linear regression equations calculate NR, %CS, and %CF, yielding validated predictive equations for target yields in diverse agro-climatic zones.",
      "outlinePoints": [
        "The Soil Test Crop Response (STCR) targeted yield approach, developed by Dr. B. Ramamoorthy and co-workers in 1967 at IA",
        "1. Theoretical Foundation:",
        "Traditional fertilizer recommendations either apply blanket regional doses or adjust doses based on categorical fertilit",
        "The STCR targeted yield approach is anchored on the principle that to achieve a specific crop yield target (T in quintal"
      ]
    },
    {
      "id": "SOL203-U5-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "questionText": "What is Integrated Nutrient Management (INM)? Describe its key components, operational philosophy, and long-term soil health benefits.",
      "contextScenario": "",
      "modelAnswer": "Integrated Nutrient Management (INM) or Integrated Plant Nutrient Supply (IPNS) is the combined, coordinated management of all available plant nutrient sources (chemical, organic, biological) to achieve optimum crop productivity, improve nutrient use efficiency, and enhance soil health without ecological degradation.\n\nKey Components of INM:\n1. Chemical Fertilizers: Straight and complex fertilizers (Urea, DAP, SSP, MOP) providing concentrated, readily available nutrients during peak crop uptake demands.\n2. Bulky and Concentrated Organic Manures: Farmyard manure (FYM), compost, vermicompost, pressmud, and oil cakes supplying organic matter, humic acids, secondary nutrients, and micronutrients.\n3. Green Manuring and Green Leaf Manuring: In-situ cultivation and incorporation of Sesbania aculeata or Crotalaria juncea, or loppings of Gliricidia and Pongamia, adding 60-120 kg N/ha and biological carbon.\n4. Biofertilizers: Microbial inoculants (Rhizobium, Azospirillum, Azotobacter, PSB, VAM) enhancing biological nitrogen fixation and phosphorus solubilization.\n5. Crop Residue Recycling: In-situ incorporation or surface mulching of crop stubbles (wheat/paddy straw, sugarcane trash).\n\nLong-Term Soil Health Benefits:\n- Enhanced Physical Properties: Improves soil structure, crumb aggregation, infiltration rates, and water retention capacity while decreasing bulk density.\n- Chemical Buffering: Humic substances buffer against soil pH extremes, increase cation exchange capacity (CEC), and reduce nutrient leaching.\n- Biological Activation: Fuels soil microbial biomass carbon (MBC) and enhances soil enzyme activities (dehydrogenase, urease, alkaline phosphatase).\n- Micronutrient Sustainability: Prevents zinc, iron, and boron deficiencies common in chemical-only intensive cropping systems.",
      "outlinePoints": [
        "Integrated Nutrient Management (INM) or Integrated Plant Nutrient Supply (IPNS) is the combined, coordinated management ",
        "Key Components of INM:",
        "1. Chemical Fertilizers: Straight and complex fertilizers (Urea, DAP, SSP, MOP) providing concentrated, readily availabl",
        "2. Bulky and Concentrated Organic Manures: Farmyard manure (FYM), compost, vermicompost, pressmud, and oil cakes supplyi"
      ]
    },
    {
      "id": "SOL203-U5-SUB03",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "questionText": "Describe the Soil Health Card (SHC) scheme in India. Enumerate the 12 parameters tested, explain how card values are interpreted, and discuss farmer advisory delivery.",
      "contextScenario": "",
      "modelAnswer": "The Soil Health Card (SHC) scheme was launched by the Ministry of Agriculture and Farmers Welfare, Government of India, in February 2015 to promote soil test-based balanced fertilization across Indian agriculture.\n\n1. The 12 Mandatory Soil Health Parameters:\nThe Soil Health Card records twelve physical, chemical, and biological indicators:\n- Soil Physical & Reaction Parameters (3):\n  1. Soil pH (1:2 suspension) \u2014 assesses acidity, neutrality, or alkalinity.\n  2. Electrical Conductivity (EC) \u2014 measures total soluble salts/salinity hazard.\n  3. Organic Carbon (OC %) \u2014 indexes soil biological health and nitrogen-supplying power.\n- Primary Macronutrients (3):\n  4. Available Nitrogen (N, kg/ha) via alkaline permanganate method.\n  5. Available Phosphorus (P, kg/ha) via Olsen (or Bray) method.\n  6. Available Potassium (K, kg/ha) via neutral ammonium acetate flame photometry.\n- Secondary Macronutrient (1):\n  7. Available Sulfur (S, ppm) via 0.15% CaCl2 turbidimetric method.\n- Micronutrients (5):\n  8. Available Zinc (Zn, ppm) via DTPA-AAS method.\n  9. Available Iron (Fe, ppm) via DTPA-AAS method.\n  10. Available Copper (Cu, ppm) via DTPA-AAS method.\n  11. Available Manganese (Mn, ppm) via DTPA-AAS method.\n  12. Available Boron (B, ppm) via hot-water azomethine-H method.\n\n2. Interpretation of Card Values:\nEach nutrient value is benchmarked against standard critical limits and categorized as:\n- Low: Nutrients below critical limit (soil reserves depleted).\n- Medium: Nutrients near threshold (adequate for moderate yield).\n- High: Nutrients above threshold (rich reserve, potential luxury consumption).\n\n3. Farmer Advisory Delivery:\n- Crop-Specific Schedules: The card translates numerical values into practical recommendations for 6 major local crops chosen by the farmer, specifying exact quantities of commercial fertilizers (e.g., number of bags of Urea, DAP/SSP, and MOP per acre).\n- Secondary and Micronutrient Remediation: Recommends specific doses of gypsum or zinc sulfate if S or Zn test low.\n- Organic Integration: Suggests FYM and biofertilizer doses to build organic carbon.",
      "outlinePoints": [
        "The Soil Health Card (SHC) scheme was launched by the Ministry of Agriculture and Farmers Welfare, Government of India, ",
        "1. The 12 Mandatory Soil Health Parameters:",
        "The Soil Health Card records twelve physical, chemical, and biological indicators:",
        "- Soil Physical & Reaction Parameters (3):"
      ]
    },
    {
      "id": "SOL203-U5-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "questionText": "Detail the statutory framework of the Fertilizer (Control) Order (FCO, 1985), focusing on enforcement powers, inspector duties, sample dispatch, and legal penalties under the Essential Commodities Act, 1955.",
      "contextScenario": "",
      "modelAnswer": "The Fertilizer (Control) Order (FCO), 1985, promulgated under Section 3 of the Essential Commodities Act (ECA), 1955, is the statutory legislation governing the manufacture, quality control, distribution, and pricing of fertilizers across India.\n\n1. Statutory Objectives and Registration:\n- Guarantees that only fertilizers conforming to prescribed physical and chemical standards in Schedule I are sold to farmers.\n- Mandates that every manufacturer, importer, wholesaler, and retail dealer must possess a valid Certificate of Registration (CR) or Authorization Letter from the State Registering Authority.\n\n2. Statutory Powers and Duties of Fertilizer Inspectors (Clauses 27 & 28):\n- Powers of Entry and Search: Inspect any manufacturing unit, storage warehouse, retail shop, or transport vessel carrying fertilizers.\n- Powers of Sampling: Draw official representative samples following Schedule II protocols in the presence of the dealer/custodian.\n- Powers of Seizure and Stop-Sale: Seize stocks, packaging materials, and accounting registers, or issue a formal stop-sale order (valid up to 21 days) if contravention is suspected.\n- Memorandum in Form J: Must prepare official sampling Form J in duplicate, recording batch numbers, container types, and signatures of both parties.\n\n3. Sample Preparation and Dispatch Rules:\n- Triplicate Sealing: The reduced composite sample (~1.5 kg) is divided into three identical sealed portions (~500 g each) wrapped in polythene, labeled, and sealed with the Inspector's official seal.\n- Distribution of Portions:\n  * Portion 1: Dispatched to the State Notified Fertilizer Testing Laboratory within 7 days of sampling.\n  * Portion 2: Handed to the dealer against formal written receipt.\n  * Portion 3 (Referee Sample): Retained under official custody for referee re-testing.\n- Analysis Deadline: The laboratory must analyze the sample and deliver the Certificate of Analysis in Form K within 30 days.\n\n4. Legal Penalties under the Essential Commodities Act, 1955 (Section 7):\n- Selling adulterated or misbranded fertilizer is a cognizable criminal offense.\n- Penalties: Imprisonment from 3 months up to 7 years, alongside substantial fines.\n- Administrative Sanctions: Revocation of Certificate of Registration, blacklisting of dealer/manufacturer, and confiscation of seized inventory.",
      "outlinePoints": [
        "The Fertilizer (Control) Order (FCO), 1985, promulgated under Section 3 of the Essential Commodities Act (ECA), 1955, is",
        "1. Statutory Objectives and Registration:",
        "- Guarantees that only fertilizers conforming to prescribed physical and chemical standards in Schedule I are sold to fa",
        "- Mandates that every manufacturer, importer, wholesaler, and retail dealer must possess a valid Certificate of Registra"
      ]
    },
    {
      "id": "SOL203-U5-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "questionText": "A village cooperative receives a suspected consignment of DAP. Describe four simple physical and chemical spot tests that an extension worker can demonstrate to farmers to detect adulteration.",
      "contextScenario": "",
      "modelAnswer": "Because Diammonium Phosphate (DAP: 18-46-0) is an expensive, high-demand fertilizer, fraudulent substitution with sand, rock phosphate, gypsum, and limestone dust occurs in unmonitored markets. Extension workers can demonstrate four simple spot tests to farmers:\n\n1. Cold Water Complete Dissolution Test:\n- Procedure: Add one tablespoon of DAP granules into a clear glass tumbler containing 200 ml of clean water. Stir vigorously for 3 minutes.\n- Genuine DAP: Completely water-soluble (>90% dissolves rapidly, leaving minimal sediment and a clear to slightly turbid solution).\n- Adulterated DAP: Substantial quantities of rock phosphate, marble dust, sand, or gypsum fail to dissolve, settling as a dense, gritty layer at the bottom of the glass.\n\n2. Slaked Lime (Chuna) Ammonia Release Test:\n- Procedure: Take a pinch of DAP granules on the palm or in a small dish. Add a pinch of moist slaked lime [Ca(OH)2 / edible chuna] and rub vigorously together using the thumb.\n- Genuine DAP: Ammoniacal nitrogen reacts immediately with alkaline calcium hydroxide to release strong, pungent ammonia gas:\n  (NH4)2HPO4 + Ca(OH)2 -> CaHPO4 + 2 NH3(g) + 2 H2O\n  The choking smell of ammonia is detected instantly and turns moist red litmus paper blue.\n- Spurious Adulterants: Rock phosphate, gypsum, or clay granules release zero ammonia smell.\n\n3. Hot Iron Plate Puffed Heating Test:\n- Procedure: Place a few genuine DAP granules onto a heated iron plate (or tawa) over a stove flame.\n- Genuine DAP: As temperature rises, genuine DAP granules melt, bubble, swell, and puff up into a whitish porous mass while evolving ammonia fumes.\n- Adulterants: Sand, crushed stone, rock phosphate, and gypsum do not swell or bubble; they remain hard and unreacted.\n\n4. Dilute Acid Effervescence Test (Carbonate Detection):\n- Procedure: Place 10-15 granules in a cup and add a few drops of dilute hydrochloric acid (or bathroom cleaning acid / strong vinegar).\n- Genuine DAP: Dissolves quietly with negligible gas evolution.\n- Adulterated DAP (with marble/limestone dust): Produces vigorous, bubbling effervescence of CO2 gas: CaCO3 + 2 H+ -> Ca2+ + H2O + CO2(g).",
      "outlinePoints": [
        "Because Diammonium Phosphate (DAP: 18-46-0) is an expensive, high-demand fertilizer, fraudulent substitution with sand, ",
        "1. Cold Water Complete Dissolution Test:",
        "- Procedure: Add one tablespoon of DAP granules into a clear glass tumbler containing 200 ml of clean water. Stir vigoro",
        "- Genuine DAP: Completely water-soluble (>90% dissolves rapidly, leaving minimal sediment and a clear to slightly turbid"
      ]
    },
    {
      "id": "SOL203-U5-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "questionText": "Compare Generalized State Fertilizer Recommendations, Soil Test-Based Ratings Approach, and the STCR Targeted Yield Approach with respect to precision and profitability.",
      "contextScenario": "",
      "modelAnswer": "Fertilizer advisory systems have evolved across Indian agriculture to balance operational simplicity against precision and profitability.\n\n1. Generalized State Recommendations (Blanket Recommendations):\n- Approach: Prescribes uniform, fixed N:P2O5:K2O doses (e.g., 120:60:40 kg/ha for wheat) for an entire agro-climatic zone or state, irrespective of individual farm soil nutrient reserves.\n- Precision: Very low precision. Ignores spatial micro-variability in soil fertility across farms and fields.\n- Agronomic & Economic Consequence: Results in severe over-fertilization in fertile soils (wasting money and causing lodging/pollution) and under-fertilization in depleted soils (limiting yield potential).\n\n2. Soil Test-Based Ratings Approach (Low-Medium-High Categories):\n- Approach: Modifies the blanket state recommendation based on soil fertility ratings:\n  * Low (< critical limit): Blanket dose + 25% to 50%.\n  * Medium (around critical limit): 100% of blanket dose.\n  * High (> critical limit): Blanket dose - 25% to 50%.\n- Precision: Moderate precision. Recognizes soil fertility classes but treats all soils within a class identically (e.g., a soil with 11 kg P/ha receives the same recommendation as one with 24 kg P/ha).\n- Profitability: Moderately profitable; prevents gross nutrient imbalances but lacks target yield predictability.\n\n3. STCR Targeted Yield Approach:\n- Approach: Employs mathematically calibrated regression equations that integrate specific crop yield targets with measured soil test values: FN = A * T - B * SN.\n- Precision: Exceptionally high precision. Calculates exact fertilizer kilograms required to meet a farmer's specific yield target, accounting for both soil nutrient supply and fertilizer use efficiency.\n- Profitability: Highest economic returns and benefit-cost (B:C) ratio. Ensures optimal input investment aligned with target production goals.",
      "outlinePoints": [
        "Fertilizer advisory systems have evolved across Indian agriculture to balance operational simplicity against precision a",
        "1. Generalized State Recommendations (Blanket Recommendations):",
        "- Approach: Prescribes uniform, fixed N:P2O5:K2O doses (e.g., 120:60:40 kg/ha for wheat) for an entire agro-climatic zon",
        "- Precision: Very low precision. Ignores spatial micro-variability in soil fertility across farms and fields."
      ]
    },
    {
      "id": "SOL203-U5-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "questionText": "Explain the step-by-step procedure for generating a GIS-based soil fertility thematic map for available phosphorus in a district, discussing its utility for planning.",
      "contextScenario": "",
      "modelAnswer": "Geographic Information Systems (GIS) combined with Global Positioning System (GPS) technology enable spatial interpolation of point soil test data into continuous regional fertility maps.\n\n1. Step-by-Step Spatial Mapping Methodology:\n- Phase 1: GPS-Referenced Soil Sampling:\n  * A systematic sampling grid (e.g., 2.5 km x 2.5 km or 5 km x 5 km) is overlaid on the district base map.\n  * Handheld GPS receivers record precise geographic coordinates (latitude, longitude, altitude) at each sampling spot.\n  * Composite soil samples are collected, labeled with GPS IDs, air-dried, and processed.\n- Phase 2: Laboratory Analysis:\n  * Available phosphorus is analyzed in the laboratory via the Olsen method (0.5 M NaHCO3 spectrophotometry).\n  * Analytical results are compiled into a georeferenced attribute database table linked to sample coordinates.\n- Phase 3: Spatial Data Integration in GIS Environment:\n  * Point shapefiles are imported into GIS software (QGIS or ArcGIS) projected to a standard spatial reference system (UTM / WGS 84).\n  * Attribute tables are linked to spatial point locations.\n- Phase 4: Geostatistical Interpolation (Kriging / IDW):\n  * Semivariogram modeling is performed to evaluate spatial dependence and nugget variance.\n  * Ordinary Kriging or Inverse Distance Weighting (IDW) interpolation predicts phosphorus values across un-sampled grid cells.\n- Phase 5: Categorization and Cartographic Layout:\n  * Continuous surface raster is reclassified into standard ICAR fertility classes: Low (<10 kg P/ha, colored Red), Medium (10-24.6 kg P/ha, colored Yellow), and High (>24.6 kg P/ha, colored Green).\n  * Final layout is generated with boundary vectors, legend, scale, north arrow, and metadata.\n\n2. Utility for Planning and Policy:\n- District Fertilizer Allocation: Enables the Department of Agriculture to pre-position phosphatic fertilizers (DAP/SSP) specifically in high-demand 'Red' low-P blocks.\n- Targeted Subsidies & Interventions: Directs promotional micro-nutrient and soil amendment schemes to deficient clusters.\n- Precision Farming Advisory: Empowers local extension workers to tailor village-level recommendations.",
      "outlinePoints": [
        "Geographic Information Systems (GIS) combined with Global Positioning System (GPS) technology enable spatial interpolati",
        "1. Step-by-Step Spatial Mapping Methodology:",
        "- Phase 1: GPS-Referenced Soil Sampling:",
        "* A systematic sampling grid (e.g., 2.5 km x 2.5 km or 5 km x 5 km) is overlaid on the district base map."
      ]
    },
    {
      "id": "SOL203-U5-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "questionText": "What is the Nutrient Index (NI) approach developed by Parker? Provide the formula, classification criteria, and its application in assessing regional soil fertility.",
      "contextScenario": "",
      "modelAnswer": "The Nutrient Index (NI) approach, formulated by Parker et al. (1951), is a statistical tool used to assess and compare the overall fertility status of a collection of soil samples representing an entire village, block, district, or state.\n\n1. Mathematical Formula:\nSamples analyzed from a region are categorized into three fertility classes: Low, Medium, and High.\nNutrient Index (NI) = [(1 * NL) + (2 * NM) + (3 * NH)] / NT\nWhere:\n- NL = Percentage of soil samples testing in the 'Low' fertility category.\n- NM = Percentage of soil samples testing in the 'Medium' fertility category.\n- NH = Percentage of soil samples testing in the 'High' fertility category.\n- NT = Total percentage (100%).\n- Weights: 1 is assigned to Low, 2 to Medium, and 3 to High.\n\n2. Standard Classification Criteria:\nBased on the computed Nutrient Index value, the region is categorized into fertility ratings:\n- Low Fertility Status: NI < 1.67 (the region has an overall deficiency; priority fertilizer supply needed).\n- Medium Fertility Status: NI between 1.67 and 2.33 (moderate fertility; standard balanced fertilization required).\n- High Fertility Status: NI > 2.33 (adequate to rich reserves; fertilizer doses can be safely curtailed).\n\n3. Application in Regional Soil Fertility Assessment:\n- Prioritizing Resource Allocation: State planning departments evaluate nutrient indices across districts to allocate subsidized fertilizer supplies to priority areas.\n- Monitoring Long-Term Fertility Shifts: Comparing nutrient indices calculated over successive decades reveals whether intensive cropping is depleting or building regional nutrient capital.\n- Custom Fertilizer Formulation: Fertilizers manufacturers use district nutrient indices to design customized grades (e.g., customized NPK formulations).",
      "outlinePoints": [
        "The Nutrient Index (NI) approach, formulated by Parker et al. (1951), is a statistical tool used to assess and compare t",
        "1. Mathematical Formula:",
        "Samples analyzed from a region are categorized into three fertility classes: Low, Medium, and High.",
        "Nutrient Index (NI) = [(1 * NL) + (2 * NM) + (3 * NH)] / NT"
      ]
    },
    {
      "id": "SOL203-U5-SUB09",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "questionText": "Explain the role of the Central Fertilizer Quality Control and Training Institute (CFQC&TI), Faridabad, and describe the referee analysis procedure under FCO Clause 32B.",
      "contextScenario": "",
      "modelAnswer": "The Central Fertilizer Quality Control and Training Institute (CFQC&TI), located at Faridabad (Haryana), is the apex national institute under the Ministry of Agriculture and Farmers Welfare responsible for maintaining fertilizer quality standards across India.\n\nKey Mandates and Functions of CFQC&TI:\n1. Apex Testing and Standardization: Operates the national reference testing laboratory, validating standard analytical methods, testing imported fertilizer consignments at ports, and monitoring interstate fertilizer supplies.\n2. Capacity Building and Training: Conducts specialized statutory training courses for State Fertilizer Inspectors, Laboratory Analysts, and Enforcement Officers.\n3. Regional Oversight: Oversees three Regional Fertilizer Quality Control Laboratories located at Mumbai, Kalyani (Kolkata), and Chennai.\n4. Quality Surveillance: Organizes national surveillance drives and cross-check sample exchanges among State laboratories to maintain inter-laboratory analytical reproducibility.\n\nReferee Analysis Procedure under FCO Clause 32B:\nWhen a fertilizer sample drawn by an Inspector is declared sub-standard or adulterated by a State testing laboratory in Form K, the affected dealer or manufacturer has statutory recourse:\n- Appeal Timeline: Aggrieved parties can challenge the adverse finding within 30 days of receiving the report by applying to the Designated Court or Appellate Authority.\n- Dispatch of Third Referee Sample: The Court or Appellate Authority orders the sealed third referee sample (which was retained under the Inspector's official seal) to be dispatched to CFQC&TI, Faridabad, or a designated National Reference Lab.\n- Blind Re-Analysis: CFQC&TI conducts comprehensive re-testing of the sealed referee portion.\n- Conclusive Evidence: The analytical certificate issued by CFQC&TI is final, conclusive, and legally binding on all parties, superseding the State laboratory report in judicial proceedings.",
      "outlinePoints": [
        "The Central Fertilizer Quality Control and Training Institute (CFQC&TI), located at Faridabad (Haryana), is the apex nat",
        "Key Mandates and Functions of CFQC&TI:",
        "1. Apex Testing and Standardization: Operates the national reference testing laboratory, validating standard analytical ",
        "2. Capacity Building and Training: Conducts specialized statutory training courses for State Fertilizer Inspectors, Labo"
      ]
    },
    {
      "id": "SOL203-U5-SUB10",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "questionText": "Compare the Apparent Recovery Efficiency (ARE), Agronomic Efficiency (AE), and Physiological Efficiency (PE) of applied fertilizer nutrients with formulas and units.",
      "contextScenario": "",
      "modelAnswer": "Evaluating nutrient use efficiency (NUE) provides vital insights into crop uptake physiology and economic returns from applied fertilizers.\n\n1. Apparent Recovery Efficiency (ARE):\n- Definition: The percentage of applied fertilizer nutrient that is actually absorbed by the crop above the unfertilized control.\n- Formula:\n  ARE (%) = [(UN - U0) / FN] * 100\n  Where:\n  * UN = Total nutrient uptake (grain + straw) in the fertilized plot (kg/ha).\n  * U0 = Total nutrient uptake in the unfertilized control plot (kg/ha).\n  * FN = Amount of fertilizer nutrient applied (kg/ha).\n- Units: Percentage (%). Typical values for nitrogen in cereals range from 30% to 50%.\n\n2. Agronomic Efficiency (AE):\n- Definition: The economic yield (grain or produce) increase obtained per unit mass of fertilizer nutrient applied.\n- Formula:\n  AE = (YN - Y0) / FN\n  Where:\n  * YN = Crop economic yield in the fertilized plot (kg/ha).\n  * Y0 = Crop economic yield in the unfertilized control plot (kg/ha).\n  * FN = Fertilizer nutrient applied (kg/ha).\n- Units: kg grain produced per kg fertilizer nutrient applied (kg/kg). Typical values for nitrogen in wheat and rice range from 15 to 25 kg grain/kg N.\n\n3. Physiological Efficiency (PE):\n- Definition: The ability of the plant to convert absorbed nutrient into harvestable economic yield.\n- Formula:\n  PE = (YN - Y0) / (UN - U0)\n  Where:\n  * (YN - Y0) = Increase in economic yield due to fertilization (kg/ha).\n  * (UN - U0) = Increase in plant nutrient uptake due to fertilization (kg/ha).\n- Units: kg grain produced per kg nutrient absorbed (kg/kg). Reflects plant metabolic conversion efficiency independent of soil uptake losses.",
      "outlinePoints": [
        "Evaluating nutrient use efficiency (NUE) provides vital insights into crop uptake physiology and economic returns from a",
        "1. Apparent Recovery Efficiency (ARE):",
        "- Definition: The percentage of applied fertilizer nutrient that is actually absorbed by the crop above the unfertilized",
        "ARE (%) = [(UN - U0) / FN] * 100"
      ]
    },
    {
      "id": "SOL203-U5-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "questionText": "A farmer aims for a target yield of 55 quintals/ha of wheat. The calibrated STCR equations are: FN = 4.39 * T - 0.36 * SN; FP2O5 = 2.82 * T - 0.65 * SP; FK2O = 1.85 * T - 0.22 * SK. Given soil test values: SN = 180 kg/ha, SP = 14 kg/ha, and SK = 210 kg/ha. Calculate the required doses of N, P2O5, and K2O, and convert into commercial bags of Urea, DAP, and MOP.",
      "contextScenario": "",
      "modelAnswer": "Calculation of Nutrient Requirements using STCR Equations:\nTarget Yield (T) = 55 q/ha.\nSoil Test Values: SN = 180 kg N/ha, SP = 14 kg P2O5/ha, SK = 210 kg K2O/ha.\n\n1. Fertilizer Nutrient Calculations:\n- Fertilizer Nitrogen (FN):\n  FN = (4.39 * 55) - (0.36 * 180) = 241.45 - 64.80 = 176.65 kg N/ha.\n- Fertilizer Phosphorus (FP2O5):\n  FP2O5 = (2.82 * 55) - (0.65 * 14) = 155.10 - 9.10 = 146.00 kg P2O5/ha.\n- Fertilizer Potassium (FK2O):\n  FK2O = (1.85 * 55) - (0.22 * 210) = 101.75 - 46.20 = 55.55 kg K2O/ha.\n\n2. Conversion into Commercial Fertilizer Bags (DAP, Urea, MOP):\n(Assuming standard 50 kg bags: DAP supplies 18% N and 46% P2O5; Urea supplies 46% N; MOP supplies 60% K2O).\n\nStep A: Supply Phosphorus via DAP:\n- Required P2O5 = 146.00 kg/ha.\n- DAP required = 146.00 / 0.46 = 317.39 kg DAP/ha.\n- In 50 kg bags = 317.39 / 50 \u2248 6.35 bags of DAP (or ~317 kg DAP).\n- Nitrogen supplied by this DAP = 317.39 * 0.18 = 57.13 kg N.\n\nStep B: Supply Balance Nitrogen via Urea:\n- Net Nitrogen needed = 176.65 - 57.13 = 119.52 kg N/ha.\n- Urea required = 119.52 / 0.46 = 259.83 kg Urea/ha.\n- In 50 kg bags = 259.83 / 50 \u2248 5.2 bags of Urea (or ~260 kg Urea).\n\nStep C: Supply Potassium via MOP:\n- Required K2O = 55.55 kg/ha.\n- MOP required = 55.55 / 0.60 = 92.58 kg MOP/ha.\n- In 50 kg bags = 92.58 / 50 \u2248 1.85 bags of MOP (or ~93 kg MOP).\n\nFarmer Recommendation Summary:\nApply ~6.3 bags DAP and ~1.85 bags MOP as basal placement at sowing, followed by ~5.2 bags Urea applied in two equal splits at crown root initiation and tillering stages.",
      "outlinePoints": [
        "Calculation of Nutrient Requirements using STCR Equations:",
        "Target Yield (T) = 55 q/ha.",
        "Soil Test Values: SN = 180 kg N/ha, SP = 14 kg P2O5/ha, SK = 210 kg K2O/ha.",
        "1. Fertilizer Nutrient Calculations:"
      ]
    },
    {
      "id": "SOL203-U5-SUB12",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "questionText": "What is 'Site-Specific Nutrient Management' (SSNM)? Explain how it dynamically addresses field-scale nutrient variations compared to static blanket recommendations.",
      "contextScenario": "",
      "modelAnswer": "Site-Specific Nutrient Management (SSNM) is a modern, dynamic approach to plant nutrition developed primarily by the International Rice Research Institute (IRRI) and the International Plant Nutrition Institute (IPNI).\n\n1. Concept and Principles:\nUnlike static regional blanket recommendations, SSNM dynamically optimizes the supply of soil nutrients and chemical fertilizers based on field-specific crop needs and indigenous soil nutrient-supplying capacities.\n- It aims to feed crops with nutrients as and when needed, minimizing nutrient deficits and surpluses.\n- It eliminates fixed calendar-based fertilizer scheduling in favor of responsive management.\n\n2. Key Operational Principles:\n- Indigenous Nutrient Supply (INS): Assesses the background supplying power of the soil for N, P, and K using nutrient omission plots (e.g., -N, -P, -K test strips).\n- Crop Demand Modeling: Predicts seasonal nutrient requirements based on realistic yield targets attainable for the local climate and variety.\n- Real-Time Nitrogen Management: Fine-tunes in-season nitrogen top-dressing using non-destructive diagnostic tools: the Leaf Color Chart (LCC), SPAD chlorophyll meters, or handheld NDVI sensors (GreenSeeker).\n- Dynamic P and K Balance: Fertilizes phosphorus and potassium to maintain soil reserves without building wasteful, non-remunerative surpluses.\n\n3. Benefits over Blanket Recommendations:\n- Increases crop yields by 10% to 25% while often reducing total nitrogen application by 20% to 30%.\n- Enhances nitrogen use efficiency (NUE) by 30-40%.\n- Lowers pest vulnerability (excess N attracts stem borers and blast disease) and decreases greenhouse gas emissions (N2O).",
      "outlinePoints": [
        "Site-Specific Nutrient Management (SSNM) is a modern, dynamic approach to plant nutrition developed primarily by the Int",
        "1. Concept and Principles:",
        "Unlike static regional blanket recommendations, SSNM dynamically optimizes the supply of soil nutrients and chemical fer",
        "- It aims to feed crops with nutrients as and when needed, minimizing nutrient deficits and surpluses."
      ]
    },
    {
      "id": "SOL203-U5-SUB13",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "questionText": "Describe the Leaf Color Chart (LCC) technology for real-time nitrogen management in rice and maize, explaining its operational thresholds and agronomic benefits.",
      "contextScenario": "",
      "modelAnswer": "The Leaf Color Chart (LCC) is a simple, inexpensive, non-destructive diagnostic plastic tool developed by IRRI and validated by ICAR for real-time nitrogen top-dressing in cereal crops.\n\n1. Design and Visual Standard:\nThe LCC consists of a high-impact plastic strip with 4 to 6 calibrated green color panels ranging from yellowish-green (panel 1/2: severe N deficiency) to dark forest-green (panel 5/6: high N luxury status).\n\n2. Field Monitoring Protocol (Wetland Rice):\n- Sampling: Select 10 disease-free, fully expanded topmost collared leaves randomly across the field during morning hours (8:00 AM to 10:00 AM).\n- Shade Reading: Place the middle part of the leaf blade on top of the color panel. Shield the leaf from direct sunlight with the body to ensure consistent ambient light.\n- Threshold Comparison: Compare leaf greenness against chart panels. Determine whether average color is lighter or darker than the critical threshold.\n\n3. Critical Thresholds for Decision Making:\n- Semi-dwarf High-Yielding Rice: Critical threshold is Panel 4. If 6 or more leaves out of 10 test below Panel 4, apply 25 to 30 kg N/ha immediately.\n- Aromatic Basmati Rice: Critical threshold is Panel 3 (to avoid excessive vegetative growth and lodging).\n- Maize: Critical threshold is Panel 4.5; top-dress nitrogen if color falls below threshold at knee-high and tasseling stages.\n\n4. Agronomic Benefits:\n- Demand-Driven Supply: Matches nitrogen application with real-time photosynthetic need rather than arbitrary fixed calendar intervals.\n- Fertilizer Savings: Saves 20 to 40 kg N/ha per season without any yield penalty.\n- Lodging and Disease Prevention: Prevents nitrogen luxury consumption that induces stem weakening, bacterial leaf blight, and brown planthopper outbreaks.",
      "outlinePoints": [
        "The Leaf Color Chart (LCC) is a simple, inexpensive, non-destructive diagnostic plastic tool developed by IRRI and valid",
        "1. Design and Visual Standard:",
        "The LCC consists of a high-impact plastic strip with 4 to 6 calibrated green color panels ranging from yellowish-green (",
        "2. Field Monitoring Protocol (Wetland Rice):"
      ]
    },
    {
      "id": "SOL203-U5-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Soil Health Card (SHC) scheme parameters, farmer advisory, and GIS fertility mapping",
      "questionText": "Compare the powers, responsibilities, and procedural constraints of a Fertilizer Inspector with those of a Government Fertilizer Analyst under the FCO, 1985.",
      "contextScenario": "",
      "modelAnswer": "The Fertilizer (Control) Order establishes a dual enforcement architecture dividing administrative field inspection from technical laboratory testing.\n\n1. Fertilizer Inspector:\n- Statutory Role: Field enforcement and regulatory surveillance officer appointed under Clause 27 of FCO.\n- Primary Powers:\n  * Enter, search, and inspect manufacturing facilities, warehouses, wholesale points, and retail shops.\n  * Draw official representative samples according to Schedule II sampling protocols.\n  * Stop, detain, and search vehicles transporting fertilizers.\n  * Seize sub-standard stocks or issue written stop-sale orders (up to 21 days).\n  * File criminal complaints and launch prosecutions under the Essential Commodities Act.\n- Statutory Constraints:\n  * Must perform inspections and draw samples in the presence of the dealer/custodian.\n  * Must divide composite samples into three sealed portions, execute Form J in duplicate, and dispatch Portion 1 to the laboratory within 7 days.\n\n2. Government Fertilizer Analyst:\n- Statutory Role: Technical scientific officer appointed under Clause 27A heading a Notified Testing Laboratory.\n- Primary Powers:\n  * Receive sealed official samples (Portion 1) from Inspectors.\n  * Conduct quantitative physical and chemical analyses following standard methods prescribed in Schedule II.\n  * Sign and issue official statutory Certificates of Analysis in Form K.\n- Statutory Constraints:\n  * Cannot draw samples or enter retail premises unless also notified as an Inspector.\n  * Must verify that sample seals are intact upon receipt before testing.\n  * Must complete laboratory assays and transmit the official Certificate of Analysis (Form K) within 30 days of sample receipt.\n  * Analytical findings are subject to judicial challenge and CFQC&TI referee re-testing.",
      "outlinePoints": [
        "The Fertilizer (Control) Order establishes a dual enforcement architecture dividing administrative field inspection from",
        "1. Fertilizer Inspector:",
        "- Statutory Role: Field enforcement and regulatory surveillance officer appointed under Clause 27 of FCO.",
        "* Enter, search, and inspect manufacturing facilities, warehouses, wholesale points, and retail shops."
      ]
    },
    {
      "id": "SOL203-U5-SUB15",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Soil test-based fertilizer recommendations and categorical fertility class calibrations",
      "questionText": "A coastal district experiences widespread soil salinity (EC > 5.0 dS/m) and multi-micronutrient deficiencies. Formulate an Integrated Nutrient Management strategy to rehabilitate crop productivity in this tract.",
      "contextScenario": "",
      "modelAnswer": "Rehabilitating saline coastal agricultural soils requires an integrated strategy addressing physical soil reclamation, osmotic mitigation, and balanced macro- and micro-nutrition.\n\n1. Physical and Hydrological Interventions:\n- Subsurface / Surface Drainage: Establish a deep drainage network to lower saline water tables and flush excess soluble salts out of the root zone.\n- Rainwater Leaching: Impound monsoon rainwater in leveled fields to dissolve surface salts and leach them down the profile.\n\n2. Organic Manuring and Soil Buffering:\n- Green Manuring with Dhaincha (Sesbania aculeata): Sown during pre-monsoon and incorporated at 45 days. Adds 20 t/ha succulent biomass. Decomposition evolves CO2 and organic acids that improve structure and foster calcium displacement.\n- High-Volume Farmyard Manure or Enriched Compost: Apply 15-20 t/ha well-decomposed FYM or vermicompost. Humic polymers improve aggregation, buffer osmotic extremes, and enhance soil biological activity.\n\n3. Judicious Chemical Fertilizer Management:\n- Potassic Nutrition (SOP over MOP): Muriate of Potash adds extra chloride, compounding salt toxicity. Sulphate of Potash (K2SO4, 50% K2O, 17.5% S) should be used exclusively. K+ maintains cell turgor and competes against Na+ influx.\n- Nitrogen Management: Apply slow-release Neem Coated Urea in 3-4 small splits to avoid salt index spikes. Supplement with Calcium Nitrate to displace toxic sodium from membranes.\n- Phosphatic Management: Band-place Single Superphosphate (SSP); its 19% calcium and 11% sulfur combat sodicity and provide sulfate nutrition.\n\n4. Micronutrient and Biostimulant Interventions:\n- Zinc Remediation: Basal application of 25 kg/ha ZnSO4\u00b77H2O followed by 0.5% foliar spray at active tillering.\n- Iron Chlorosis Prevention: Foliar sprays of 1.0% Ferrous Sulfate (FeSO4) neutralized with lime.\n- Halotolerant Biofertilizers: Inoculate seeds with salt-tolerant Azospirillum and Phosphate Solubilizing Bacteria (PSB) strains.",
      "outlinePoints": [
        "Rehabilitating saline coastal agricultural soils requires an integrated strategy addressing physical soil reclamation, o",
        "1. Physical and Hydrological Interventions:",
        "- Subsurface / Surface Drainage: Establish a deep drainage network to lower saline water tables and flush excess soluble",
        "- Rainwater Leaching: Impound monsoon rainwater in leveled fields to dissolve surface salts and leach them down the prof"
      ]
    },
    {
      "id": "SOL203-U5-SUB16",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "STCR targeted yield approach (Ramamoorthy): nutrient requirements, %CS, %CF, and equations",
      "questionText": "Explain the concept of 'Nutrient Antagonism' in plant nutrition and describe two agronomic examples where excessive application of one nutrient suppresses uptake of another.",
      "contextScenario": "",
      "modelAnswer": "Nutrient Antagonism occurs when an excessive concentration of one nutrient element in the soil solution or root apoplast interferes with, depresses, or completely blocks the absorption, translocation, or metabolic assimilation of another essential nutrient.\n\nMechanisms of Antagonism:\nAntagonistic interactions typically arise from competition for identical membrane carrier proteins or ion channels (due to similar ionic radius, valence, and hydrated sphere size) or direct chemical precipitation in the soil solution.\n\nAgronomic Examples of Nutrient Antagonism:\n1. Potassium-Magnesium-Calcium Antagonism (K vs Mg & Ca):\n- Mechanism: When farmers apply excessive doses of potassic fertilizers (e.g., heavy MOP application), high monovalent K+ ions outcompete divalent Mg2+ and Ca2+ for uptake at root plasma membrane transporters.\n- Consequence: Induces acute magnesium deficiency chlorosis (interveinal chlorosis on older leaves) and calcium deficiency disorders (blossom end rot in tomato, bitter pit in apple) despite adequate Mg and Ca in soil.\n\n2. Phosphorus-Zinc Antagonism (P vs Zn):\n- Mechanism: Heavy or excessive application of phosphatic fertilizers (DAP/SSP) creates high orthophosphate concentrations in soil. This interferes with mycorrhizal colonization, inhibits root-to-shoot translocation of zinc, and can cause chemical precipitation as insoluble zinc phosphate [Zn3(PO4)2] in soil and root tissues.\n- Consequence: Induces severe zinc deficiency chlorosis (white bud in maize, little leaf in citrus, Khaira disease in rice) in crops growing in high-phosphorus soils.",
      "outlinePoints": [
        "Nutrient Antagonism occurs when an excessive concentration of one nutrient element in the soil solution or root apoplast",
        "Mechanisms of Antagonism:",
        "Antagonistic interactions typically arise from competition for identical membrane carrier proteins or ion channels (due ",
        "Agronomic Examples of Nutrient Antagonism:"
      ]
    },
    {
      "id": "SOL203-U5-SUB17",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Integrated Nutrient Management (INM): components, long-term soil health, and sustainability",
      "questionText": "Describe the operational workflow and digital integration of Soil Health Card generation from field sampling to mobile advisory delivery via the national SHC portal.",
      "contextScenario": "",
      "modelAnswer": "The Government of India digitized the Soil Health Card workflow through the centralized National Soil Health Card Web Portal (soilhealth.dac.gov.in) to ensure transparency, traceability, and rapid advisory delivery.\n\n1. Field Sampling and GPS Geo-referencing:\n- Soil samples are drawn across grid blocks (2.5 ha irrigated, 10 ha rainfed) by field extension officers using the mobile SHC application.\n- The mobile app records exact GPS coordinates, farmer Aadhaar/ID, field survey number, mobile phone number, and cropping history.\n- A unique Barcode / QR Code tag is affixed to the sample bag, linking physical soil to its digital registration record.\n\n2. Laboratory Assay and Digital Entry:\n- The barcoded sample is logged into the Notified Soil Testing Laboratory.\n- The sample undergoes standard laboratory testing for the 12 statutory parameters (pH, EC, OC, N, P, K, S, Zn, Fe, Cu, Mn, B).\n- Analytical results are uploaded directly into the SHC portal via computerized instrument interfaces or batch digital spreadsheets, eliminating manual transcription errors.\n\n3. Algorithmic Processing and Card Generation:\n- The portal's backend recommendation engine processes soil test figures through ICAR/SAU calibrated fertilizer response algorithms.\n- Generates automated customized fertilizer doses for up to 6 designated crops, calculating exact bag requirements for Urea, DAP, SSP, MOP, micronutrients, and organic manures.\n- Prints the bilingual Soil Health Card containing color-coded visual dials (Red/Yellow/Green) for easy comprehension.\n\n4. Digital Advisory Dissemination:\n- Soil Health Cards are distributed physically during village Gram Sabhas.\n- Farmers receive digital SMS alerts with summarized recommendations on their registered mobile numbers.\n- Farmers can download and view their Soil Health Cards anytime via the web portal or UMANG mobile application.",
      "outlinePoints": [
        "The Government of India digitized the Soil Health Card workflow through the centralized National Soil Health Card Web Po",
        "1. Field Sampling and GPS Geo-referencing:",
        "- Soil samples are drawn across grid blocks (2.5 ha irrigated, 10 ha rainfed) by field extension officers using the mobi",
        "- The mobile app records exact GPS coordinates, farmer Aadhaar/ID, field survey number, mobile phone number, and croppin"
      ]
    },
    {
      "id": "SOL203-U5-SUB18",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Fertilizer (Control) Order 1985 statutory provisions, inspector powers, and Form K certification",
      "questionText": "Compare Soil Testing with Plant Tissue Analysis (Foliar Diagnostics) with respect to diagnostic purpose, sampling timing, and limitations.",
      "contextScenario": "",
      "modelAnswer": "Soil testing and plant tissue analysis provide complementary diagnostic insights into agricultural crop nutrition.\n\n1. Primary Diagnostic Purpose:\n- Soil Testing: Evaluates the indigenous nutrient-supplying capacity and fertility reserves of the soil prior to sowing or planting. Acts as a predictive, proactive planning tool to determine basal and seasonal fertilizer requirements.\n- Plant Tissue Analysis: Evaluates the actual nutrient absorption, assimilation, and metabolic status within the plant at the time of sampling. Acts as a responsive, in-season diagnostic tool to detect hidden hunger, nutrient imbalances, and visual deficiency symptoms.\n\n2. Sampling Timing and Critical Stages:\n- Soil Testing: Conducted prior to crop sowing or land preparation (during fallow windows), allowing time to procure and apply basal fertilizers.\n- Plant Tissue Analysis: Conducted during specific active vegetative or flowering growth stages (e.g., ear-leaf at silking in maize; flag leaf at boot stage in wheat; youngest fully expanded leaf blade in rice).\n\n3. Speed and Remedial Utility:\n- Soil Testing: Proactive; allows comprehensive pre-plant soil corrections (liming, gypsum application, basal P and K fertilization).\n- Plant Tissue Analysis: Reactive; by the time leaf deficiency is confirmed in the laboratory, yield loss may have already occurred. Foliar corrective sprays (e.g., micronutrient sprays) provide quick emergency rescue, but correcting major NPK deficits mid-season is difficult.\n\n4. Analytical Challenges and Limitations:\n- Soil Testing: Chemical extractants simulate root extraction empirically; results vary with soil pH, texture, and moisture conditions.\n- Plant Tissue Analysis: Leaf nutrient concentrations fluctuate dynamically with plant age, cloud cover, drought stress, and time of day. Samples require immediate washing to remove dust and fungicide residues (copper, zinc) before drying.",
      "outlinePoints": [
        "Soil testing and plant tissue analysis provide complementary diagnostic insights into agricultural crop nutrition.",
        "1. Primary Diagnostic Purpose:",
        "- Soil Testing: Evaluates the indigenous nutrient-supplying capacity and fertility reserves of the soil prior to sowing ",
        "- Plant Tissue Analysis: Evaluates the actual nutrient absorption, assimilation, and metabolic status within the plant a"
      ]
    },
    {
      "id": "SOL203-U5-SUB19",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Physical and chemical spot tests for detecting adulteration in Urea, DAP, SSP, and MOP",
      "questionText": "Discuss the major challenges in the commercialization, distribution, and quality enforcement of biofertilizers and organic manures under the Fertilizer Control Order.",
      "contextScenario": "",
      "modelAnswer": "While biofertilizers and organic manures are vital pillars of sustainable agriculture, their commercial production, distribution, and statutory quality enforcement face severe technological and institutional bottlenecks.\n\n1. Biological Fragility and Shelf Life Constraints:\n- Unlike stable chemical salts (urea, MOP), biofertilizers contain live microbial cultures. Under ambient storage conditions in India (30\u00b0C to 45\u00b0C during summer), viable cell counts drop rapidly from the mandatory 1 x 10^7 CFU/g to sub-standard levels (<1 x 10^5 CFU/g) within 3-4 months.\n- Lack of cold-chain logistics in rural retail distribution causes extensive product mortality before reaching farmers.\n\n2. Formulation and Contamination Challenges:\n- Traditional solid carriers (lignite, peat, charcoal) are often contaminated with native bacteria and actinomycetes. Imperfect sterilization leads to competitive overgrowth of opportunistic contaminants during warehouse storage.\n- Variable quality of organic compost raw materials results in wide swings in C:N ratios, moisture contents, and incomplete pathogen destruction.\n\n3. Adulteration and Heavy Metal Contamination:\n- Commercial city compost and sewage sludge often contain heavy metals (lead, cadmium, chromium, arsenic) and microplastics exceeding FCO limits.\n- Unscrupulous suppliers adulterate organic manures with inert river silt, coal dust, or sawdust to inflate bulk weight.\n\n4. Enforcement and Laboratory Infrastructure Bottlenecks:\n- State Fertilizer Testing Laboratories are predominantly equipped for chemical fertilizer analysis (titrations, flame photometry). Most lack microbiological facilities, laminar air flow hoods, and trained microbiologists to conduct viable CFU plating and strain authenticity testing under FCO Schedule III/IV.\n- Testing a single biofertilizer sample via serial dilution plating takes 7 to 10 days, hindering quick stop-sale enforcement.\n\n5. Farmer Awareness and Application Errors:\n- Farmers frequently mix biofertilizers directly with chemical pesticides or acidic chemical fertilizers, killing beneficial microbes instantly.\n- Unawareness of specific cross-inoculation groups (e.g., applying chickpea Rhizobium to soybean) leads to field failure.",
      "outlinePoints": [
        "While biofertilizers and organic manures are vital pillars of sustainable agriculture, their commercial production, dist",
        "1. Biological Fragility and Shelf Life Constraints:",
        "- Unlike stable chemical salts (urea, MOP), biofertilizers contain live microbial cultures. Under ambient storage condit",
        "- Lack of cold-chain logistics in rural retail distribution causes extensive product mortality before reaching farmers."
      ]
    },
    {
      "id": "SOL203-U5-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Quality control infrastructure: CFQC&TI Faridabad, state testing labs, and ISO/IEC 17025",
      "questionText": "A fertilizer inspector visits a dealer warehouse and finds 500 bags of unmarked black granules sold as 'Bio-DAP'. Outline the legal protocol the inspector must execute to inspect, seize, and prosecute under FCO and ECA.",
      "contextScenario": "",
      "modelAnswer": "Discovering unbranded, unauthorized, or spurious fertilizers being sold under misleading names (such as 'Bio-DAP') represents a serious criminal contravention of the Fertilizer (Control) Order, 1985, and the Essential Commodities Act, 1955.\n\n1. Entry, Inspection, and Verification of Authorization (Clause 27):\n- Identification: The Inspector produces their official identity card and statutory authorization.\n- Register Verification: Demands inspection of the dealer's Certificate of Registration (CR), stock registers, supplier invoices, and delivery challans to verify if 'Bio-DAP' is an approved, registered grade.\n- Visual Examination: Records bag markings. Under FCO Clause 21, every fertilizer bag must clearly state: (a) Name of fertilizer, (b) Brand name, (c) Guaranteed nutrient composition, (d) Gross and net weight, (e) Maximum Retail Price (MRP), and (f) Manufacturer name and license number. Unmarked bags constitute immediate misbranding.\n\n2. Formal Drawing of Official Samples (Schedule II Protocols):\n- Sampling Scale: For a lot of 500 bags, select 20 bags at random.\n- Core Extraction: Insert a slotted trier diagonally into each bag to extract core samples.\n- Homogenization and Reduction: Pool cores into a clean container, mix, and reduce to ~1.5 kg using coning and quartering.\n- Triplicate Sealing: Divide into three 500 g portions sealed in airtight polythene bags and stamped with the Inspector's official wax seal.\n- Execution of Form J: Draft sampling memorandum Form J in duplicate, recording batch numbers, stock quantity (500 bags), and obtaining dealer signatures.\n\n3. Statutory Seizure and Stop-Sale Order (Clause 28):\n- Issue an immediate written Stop-Sale Order prohibiting the dealer from selling or moving any portion of the 500 bags.\n- Formally seize the 500 bags along with sales registers and stock books, preparing a detailed Seizure Memo witnessed by two independent local persons.\n\n4. Laboratory Dispatch and Reporting:\n- Dispatch Portion 1 to the Notified State Fertilizer Testing Laboratory within 7 days with Form J.\n- Hand Portion 2 to the dealer and retain Portion 3 in safe official custody as referee sample.\n\n5. Judicial Prosecution under Essential Commodities Act (Section 7):\n- Upon receipt of Form K confirming sub-standard or adulterated status, issue a formal Show Cause Notice to the dealer.\n- Cancel or suspend the dealer's Certificate of Registration.\n- File a formal First Information Report (FIR) under Section 3/7 of the Essential Commodities Act, 1955, initiating criminal proceedings for adulteration and black-marketing.",
      "outlinePoints": [
        "Discovering unbranded, unauthorized, or spurious fertilizers being sold under misleading names (such as 'Bio-DAP') repre",
        "1. Entry, Inspection, and Verification of Authorization (Clause 27):",
        "- Identification: The Inspector produces their official identity card and statutory authorization.",
        "- Register Verification: Demands inspection of the dealer's Certificate of Registration (CR), stock registers, supplier "
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL203-U5-FC01",
      "front": "Who pioneered the STCR targeted yield concept in India?",
      "back": "Dr. B. Ramamoorthy and co-workers at IARI in 1967.",
      "hint": "",
      "syllabusTopic": "STCR Approach"
    },
    {
      "id": "SOL203-U5-FC02",
      "front": "How many parameters are reported under the Soil Health Card Scheme?",
      "back": "12 parameters: pH, EC, OC, N, P, K, S, Zn, Fe, Cu, Mn, and B.",
      "hint": "",
      "syllabusTopic": "Soil Health Card"
    },
    {
      "id": "SOL203-U5-FC03",
      "front": "What adjustment is made to recommended fertilizer dose for a 'Low' soil test?",
      "back": "Increase the recommended dose by 25% to 50% to build soil reserves.",
      "hint": "",
      "syllabusTopic": "Fertilizer Advisory"
    },
    {
      "id": "SOL203-U5-FC04",
      "front": "What adjustment is made to recommended fertilizer dose for a 'High' soil test?",
      "back": "Reduce the recommended dose by 25% to 50% (maintenance dose only).",
      "hint": "",
      "syllabusTopic": "Fertilizer Advisory"
    },
    {
      "id": "SOL203-U5-FC05",
      "front": "What is the basic mathematical equation of the STCR model?",
      "back": "FN = [(NR / %CF) * 100] * T - (%CS / %CF) * SN (or FN = A * T - B * SN).",
      "hint": "",
      "syllabusTopic": "STCR Approach"
    },
    {
      "id": "SOL203-U5-FC06",
      "front": "What are the components of Integrated Nutrient Management (INM)?",
      "back": "Chemical fertilizers + organic manures + green manures + biofertilizers + crop residue recycling.",
      "hint": "",
      "syllabusTopic": "INM Concepts"
    },
    {
      "id": "SOL203-U5-FC07",
      "front": "Where is CFQC&TI headquartered?",
      "back": "Faridabad, Haryana (Central Fertilizer Quality Control and Training Institute).",
      "hint": "",
      "syllabusTopic": "Quality Infrastructure"
    },
    {
      "id": "SOL203-U5-FC08",
      "front": "What is Form J vs Form K under FCO 1985?",
      "back": "Form J is the Inspector's Sampling Memorandum; Form K is the Lab's Certificate of Analysis.",
      "hint": "",
      "syllabusTopic": "FCO Regulations"
    },
    {
      "id": "SOL203-U5-FC09",
      "front": "What is the maximum penalty for selling adulterated fertilizer under ECA 1955?",
      "back": "Imprisonment up to 7 years along with fine and cancellation of registration.",
      "hint": "",
      "syllabusTopic": "Fertilizer Law"
    },
    {
      "id": "SOL203-U5-FC10",
      "front": "What simple field test detects ammonia release from genuine DAP?",
      "back": "Rubbing DAP granules with moist slaked lime [Ca(OH)2] on the palm instantly evolves pungent NH3 gas.",
      "hint": "",
      "syllabusTopic": "Adulteration Detection"
    },
    {
      "id": "SOL203-U5-FC11",
      "front": "What test detects marble/limestone dust adulteration in fertilizers?",
      "back": "Effervescence test with dilute HCl: carbonate reacts vigorously, releasing bubbling CO2 gas.",
      "hint": "",
      "syllabusTopic": "Adulteration Detection"
    },
    {
      "id": "SOL203-U5-FC12",
      "front": "What is Parker's Nutrient Index (NI) formula?",
      "back": "NI = [(1 * %Low) + (2 * %Medium) + (3 * %High)] / 100 (<1.67 Low; 1.67-2.33 Medium; >2.33 High).",
      "hint": "",
      "syllabusTopic": "Soil Fertility Index"
    },
    {
      "id": "SOL203-U5-FC13",
      "front": "What international accreditation standard applies to testing laboratories?",
      "back": "ISO/IEC 17025 (accredited by NABL in India).",
      "hint": "",
      "syllabusTopic": "Quality Infrastructure"
    },
    {
      "id": "SOL203-U5-FC14",
      "front": "What is the Leaf Color Chart (LCC) critical threshold for semi-dwarf rice?",
      "back": "Panel 4 (if >= 6 leaves out of 10 fall below Panel 4, apply 25-30 kg N/ha).",
      "hint": "",
      "syllabusTopic": "Precision Agriculture"
    },
    {
      "id": "SOL203-U5-FC15",
      "front": "What is the appellate recourse for a disputed FCO laboratory report?",
      "back": "Appeal within 30 days to test the sealed 3rd referee sample at CFQC&TI, Faridabad.",
      "hint": "",
      "syllabusTopic": "FCO Regulations"
    },
    {
      "id": "SOL203-U5-FC16",
      "front": "What is Liebig's Law of the Minimum?",
      "back": "Crop growth is limited by the scarcest essential nutrient, not by the total nutrients available.",
      "hint": "",
      "syllabusTopic": "Plant Nutrition"
    },
    {
      "id": "SOL203-U5-FC17",
      "front": "What is Apparent Recovery Efficiency (ARE) of a fertilizer nutrient?",
      "back": "ARE (%) = [(Nutrient Uptake in Fertilized - Uptake in Control) / Fertilizer Applied] * 100.",
      "hint": "",
      "syllabusTopic": "Nutrient Use Efficiency"
    },
    {
      "id": "SOL203-U5-FC18",
      "front": "What is ordinary kriging in GIS soil fertility mapping?",
      "back": "A geostatistical interpolation method predicting nutrient values at un-sampled locations based on spatial autocorrelation.",
      "hint": "",
      "syllabusTopic": "GIS Mapping"
    },
    {
      "id": "SOL203-U5-FC19",
      "front": "What is Phosphorus-Zinc antagonism?",
      "back": "Excessive phosphatic fertilization depresses root mycorrhizae and inhibits zinc uptake and translocation.",
      "hint": "",
      "syllabusTopic": "Nutrient Antagonism"
    },
    {
      "id": "SOL203-U5-FC20",
      "front": "What is Site-Specific Nutrient Management (SSNM)?",
      "back": "Dynamic field-specific nutrient management feeding crops based on indigenous soil supply and yield demand.",
      "hint": "",
      "syllabusTopic": "Precision Agriculture"
    }
  ]
};
