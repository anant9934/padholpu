import { UnitContent } from "./types";

export const unit3Content: UnitContent = {
  "unitNumber": 3,
  "title": "Chemical Fertilizers \u2014 Classification and Analysis",
  "shortDescription": "Comprehensive study of straight, complex, mixed, and customized fertilizers; chemistry of urea, NCU, SSP, DAP, MOP, and SOP; statutory FCO 1985 sampling protocols; and laboratory analytical methods for N, P, K, moisture, and biuret.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
    "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
    "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
    "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
    "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
    "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
    "Official sampling techniques from bagged lots, slotted triers, and Form J execution"
  ],
  "notes": {
    "learningObjectives": [
      "Classify chemical fertilizers systematically into straight, complex, mixed, and customized categories.",
      "Analyze the chemical composition, manufacturing principles, and soil transformations of nitrogenous, phosphatic, and potassic fertilizers.",
      "Explain the statutory framework of the Fertilizer (Control) Order (FCO, 1985) and the Essential Commodities Act, 1955.",
      "Master the scientific protocols of fertilizer sampling from bagged lots and bulk consignments.",
      "Understand laboratory methods for quantifying nitrogen, phosphorus, potassium, moisture, and biuret in fertilizers.",
      "Evaluate chemical incompatibilities during physical blending and describe anti-caking mechanisms."
    ],
    "sections": [
      {
        "id": "sec-3-1",
        "heading": "Classification and Principles of Chemical Fertilizers",
        "content": "Chemical fertilizers are industrially synthesized inorganic or organic salts delivering concentrated, bioavailable plant nutrients. They are categorized based on nutrient content, synthesis, and physical state.\\n\\n1. Straight Fertilizers: Supply only one primary nutrient (N, P, or K). Examples: Urea (46% N), Ammonium sulphate (20.6% N), Single superphosphate (16% P2O5), Muriate of potash (60% K2O).\\n\\n2. Complex Fertilizers: Contain two or three primary nutrients combined chemically in uniform granules. Every granule possesses identical chemical composition. Examples: Diammonium phosphate (DAP: 18% N, 46% P2O5), 10:26:26, 12:32:16, 17:17:17, 19:19:19. They eliminate segregation during transit and reduce handling costs.\\n\\n3. Mixed Fertilizers (Fertilizer Blends): Physical mechanical mixtures of straight fertilizers. Flexible in formulating custom grades but prone to segregation during transport and caking during storage.\\n\\n4. Fortified and Customized Fertilizers: Enriched with secondary or micronutrients (e.g., Zincated urea with 2% Zn, Boronated SSP with 0.2% B) or crop-specific formulations (customized fertilizers) tailored to district soil fertility maps."
      },
      {
        "id": "sec-3-2",
        "heading": "Nitrogenous Fertilizers: Chemistry, Transformations, and NCU",
        "content": "1. Urea [CO(NH2)2]: Contains 46.0% total N in amide form. Produced by reacting anhydrous ammonia with carbon dioxide at 180-200\u00b0C and 150-200 bar. In soil, urease hydrolyzes urea to ammonium carbonate: CO(NH2)2 + 2 H2O -> (NH4)2CO3 -> 2 NH4+ + CO3^2-. Nitrifying bacteria oxidize NH4+ to NO3-. Unincorporated surface urea undergoes ammonia volatilization losses up to 30-40%. Has equivalent acidity of 80-85.\\n\\n2. Neem Coated Urea (NCU): Mandatory in India since May 2015. Coated with 0.035-0.05% cold-pressed neem seed oil. Triterpenoids (nimbin, nimbidin, azadirachtin) inhibit Nitrosomonas bacteria, slowing nitrification and increasing nitrogen use efficiency (NUE) by 10-15% while completely preventing diversion into industrial applications.\\n\\n3. Ammonium Sulphate [(NH4)2SO4]: Contains 20.6% ammoniacal N and 24.0% sulfate sulfur. Strongly acid-forming (equivalent acidity = 110). Highly effective for oilseeds, sulfur-deficient soils, and alkaline-calcareous soils.\\n\\n4. Calcium Ammonium Nitrate (CAN / 'Kisan Khad'): Contains 25.0% N (12.5% NH4+ and 12.5% NO3-) blended with 20% limestone or dolomite. Chemically and physiologically neutral (zero equivalent acidity), ideal for all soils, especially acidic tracts."
      },
      {
        "id": "sec-3-3",
        "heading": "Phosphatic and Potassic Fertilizers",
        "content": "1. Phosphatic Fertilizers:\\n- Water-Soluble: Single Superphosphate (SSP: 16% P2O5, 11% S, 19% Ca; monocalcium phosphate + gypsum), Triple Superphosphate (TSP: 46% P2O5; monocalcium phosphate without gypsum), Diammonium Phosphate (DAP: 18% N, 46% P2O5; min 41% water-soluble P2O5). Readily absorbed; optimal in neutral to alkaline soils.\\n- Citrate-Soluble: Dicalcium phosphate (34-39% P2O5), Basic slag (14-18% P2O5, 40-50% lime). Soluble in neutral ammonium citrate (pH 7.0); ideal for acidic soils.\\n- Insoluble / Citrate-Insoluble: Rock phosphate (18-32% P2O5; fluorapatite), Bone meal. Effective only in strongly acidic soils (pH < 5.5).\\n\\n2. Potassic Fertilizers:\\n- Muriate of Potash (MOP / KCl): 60.0% water-soluble K2O. Reddish-pink or white crystalline salt. High salt index (116). Contains ~47% chloride; unsuited for chloride-sensitive crops (tobacco, potato, grapes).\\n- Sulphate of Potash (SOP / K2SO4): 50.0% K2O and 17.5% S. Maximum chloride limit 2.5%. Lower salt index (46). Essential for chloride-sensitive crops and intensive greenhouse fertigation."
      },
      {
        "id": "sec-3-4",
        "heading": "Fertilizer Control Order (FCO 1985) and Statutory Sampling",
        "content": "1. Statutory Framework:\\nPromulgated under Section 3 of the Essential Commodities Act, 1955 (ECA). Regulates fertilizer prices, distribution, and quality standards across India. Establishes the Central Fertilizer Quality Control and Training Institute (CFQC&TI), Faridabad, and state laboratories.\\n\\n2. Sampling Protocol from Bagged Lots (Schedule II):\\n- Scale of Sampling: Up to 10 bags: all bags; 11-100 bags: 10 bags; 101-200 bags: 15 bags; 201-500 bags: 20 bags; >1000 bags: 30 bags selected at random.\\n- Equipment: Slotted stainless steel trier inserted diagonally from bottom to top corner to extract complete cross-sectional core samples.\\n- Composite and Reduction: Cores pooled into gross sample (~3 kg), homogenized, and reduced to ~1.5 kg by coning and quartering.\\n- Triplicate Portions: Divided into three identical sealed portions (~500 g each) in presence of dealer: Portion 1 to notified testing lab with Form J; Portion 2 to dealer; Portion 3 retained as referee sample for court or CFQC&TI appellate re-testing within 30 days."
      },
      {
        "id": "sec-3-5",
        "heading": "Laboratory Analytical Methods and Incompatibilities",
        "content": "1. Laboratory Analysis Protocols:\\n- Moisture: Standard oven drying at 105\u00b0C \u00b1 2\u00b0C for heat-stable fertilizers; vacuum desiccator method over H2SO4/P2O5 at room temperature for heat-sensitive fertilizers (urea, DAP, CAN).\\n- Biuret in Urea: Spectrophotometric copper-complex method in alkaline Rochelle salt medium at 550 nm; FCO ceiling <= 1.5% for soil grade, <= 0.4% for foliar grade.\\n- Nitrogen: Total Kjeldahl digestion with H2SO4-CuSO4-K2SO4. Differential distillation with MgO for ammoniacal-N and Devarda's alloy for nitrate-N in CAN.\\n- Phosphorus: Quimociac volumetric/gravimetric method (precipitation as yellow quinoline phosphomolybdate followed by NaOH titration) or spectrophotometric molybdovanadate method at 420-470 nm.\\n- Potassium: Sodium tetraphenylboron (NaTPB) volumetric method or flame emission photometry at 766.5 nm.\\n\\n2. Fertilizer Incompatibilities and Storage Degradation:\\n- Urea + SSP: Urea displaces water of crystallization from monocalcium phosphate, releasing free water that turns the mixture into sticky slush.\\n- Ammonium fertilizers + Lime/Basic slag: Alkaline OH- drives off gaseous ammonia volatilization: (NH4)2SO4 + Ca(OH)2 -> CaSO4 + 2 NH3(g) + 2 H2O.\\n- Water-soluble phosphates + Calcium nitrate: Forms insoluble dicalcium/tricalcium phosphate precipitates (retrogradation).\\n- Critical Relative Humidity (CRH): Humidity threshold above which salt absorbs water. Anti-caking coatings (paraffin, amines) protect granules against humidity fluctuations."
      }
    ],
    "keyTakeaways": [
      "Urea (46% N) is the principal nitrogen source; mandatory neem coating (0.035-0.05% oil) inhibits Nitrosomonas, increasing NUE and halting industrial diversion.",
      "Single Superphosphate (SSP: 16% P2O5) provides 11% S and 19% Ca, making it superior to DAP for sulfur-hungry oilseeds and calcium-demanding groundnut.",
      "MOP (60% K2O) contains 47% chloride, making SOP (50% K2O, <2.5% Cl) essential for chloride-sensitive crops (tobacco, potato, grapes).",
      "CAN (25% N) is a chemically and physiologically neutral fertilizer with equal parts ammoniacal and nitrate nitrogen, leaving zero soil acidity.",
      "FCO 1985 under the Essential Commodities Act regulates fertilizer standards; inspectors draw random core samples using slotted triers, preparing sealed triplicate samples via quartering.",
      "Laboratory analysis employs quimociac for P, Devarda's reduction for NO3-N, MgO for NH4-N, and NaTPB for K.",
      "Incompatibilities include urea + SSP (slush formation) and ammonium salts + lime (ammonia volatilization)."
    ],
    "commonMisunderstandings": [
      {
        "myth": "DAP supplies all major plant nutrients.",
        "reality": "DAP supplies only Nitrogen (18%) and Phosphorus (46%), but zero Potassium (0% K) and zero Sulfur (0% S)."
      },
      {
        "myth": "CAN produces soil acidity like ammonium sulphate.",
        "reality": "CAN is blended with 20% limestone (CaCO3), giving it an equivalent acidity of zero (neutral)."
      },
      {
        "myth": "Heating urea to determine moisture in an oven at 105\u00b0C is acceptable.",
        "reality": "Urea thermally decomposes and forms biuret above 100\u00b0C; moisture in urea must be determined using a vacuum desiccator at room temperature."
      },
      {
        "myth": "MOP and SOP can be used interchangeably on any crop.",
        "reality": "MOP supplies high chloride which damages burning quality in tobacco and reduces starch in potatoes, where SOP is mandatory."
      }
    ],
    "summary": "Unit 3 delivers an in-depth, scientifically rigorous curriculum on chemical fertilizers, their classification, manufacturing chemistry, and statutory analysis under the Fertilizer (Control) Order, 1985. It covers straight, complex, mixed, and customized fertilizers, contrasting their physical properties, segregation tendencies, and storage behaviors. The nitrogenous group details urea synthesis, biuret formation mechanisms, equivalent acidity, and the agronomic rationale for mandatory Neem Coated Urea (NCU). The phosphatic section compares water-soluble (SSP, TSP, DAP), citrate-soluble (basic slag, DCP), and insoluble forms (rock phosphate), highlighting SSP's sulfur and calcium advantages. Potassic fertilizers contrast MOP (KCl, 60% K2O) with SOP (K2SO4, 50% K2O) regarding chloride sensitivity in tobacco and potato. FCO statutory regulations, inspector powers under the Essential Commodities Act, bag sampling schedules, slotted spear sampling, and coning/quartering to prepare triplicate sealed samples (Form J) are thoroughly detailed. Finally, definitive laboratory procedures (Kjeldahl digestion, Devarda's reduction, MgO distillation, Quimociac P titration, NaTPB K determination, and spectrophotometric biuret assay) and chemical blending incompatibilities are fully detailed."
  },
  "mcqs": [
    {
      "id": "SOL203-U3-MCQ01",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Easy",
      "questionText": "What is the standard total nitrogen content in commercial fertilizer-grade prilled urea?",
      "options": {
        "A": "46.0%",
        "B": "20.6%",
        "C": "25.0%",
        "D": "18.0%"
      },
      "correctOption": "A",
      "explanation": "Fertilizer-grade urea contains a minimum guaranteed 46.0% total nitrogen in amide (NH2) form, making it the most concentrated solid nitrogenous fertilizer."
    },
    {
      "id": "SOL203-U3-MCQ02",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Easy",
      "questionText": "What is the nutrient composition of standard Diammonium Phosphate (DAP)?",
      "options": {
        "A": "18% N and 46% P2O5",
        "B": "46% N and 18% P2O5",
        "C": "20% N and 20% P2O5",
        "D": "16% N and 48% P2O5"
      },
      "correctOption": "A",
      "explanation": "Standard fertilizer-grade DAP contains 18% total nitrogen (in ammoniacal form) and 46% total phosphorus (as P2O5), of which at least 41% must be water-soluble under FCO standards."
    },
    {
      "id": "SOL203-U3-MCQ03",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Easy",
      "questionText": "What is the chemical formula and potash content (K2O) of Muriate of Potash (MOP)?",
      "options": {
        "A": "Potassium chloride (KCl) with 60% K2O",
        "B": "Potassium sulphate (K2SO4) with 50% K2O",
        "C": "Potassium nitrate (KNO3) with 44% K2O",
        "D": "Potassium carbonate (K2CO3) with 30% K2O"
      },
      "correctOption": "A",
      "explanation": "Muriate of Potash is potassium chloride (KCl) containing a minimum of 60.0% water-soluble potash (K2O)."
    },
    {
      "id": "SOL203-U3-MCQ04",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Easy",
      "questionText": "Which of the following fertilizers is classified as a 'straight fertilizer'?",
      "options": {
        "A": "Urea",
        "B": "Diammonium Phosphate (DAP)",
        "C": "Nitrophosphate (20:20:0)",
        "D": "NPK complex (12:32:16)"
      },
      "correctOption": "A",
      "explanation": "Straight fertilizers supply only one primary plant nutrient (N, P, or K). Urea supplies only nitrogen (46% N) and is thus a straight nitrogenous fertilizer."
    },
    {
      "id": "SOL203-U3-MCQ05",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Easy",
      "questionText": "What is the available P2O5 content in Single Superphosphate (SSP)?",
      "options": {
        "A": "16.0%",
        "B": "46.0%",
        "C": "32.0%",
        "D": "8.0%"
      },
      "correctOption": "A",
      "explanation": "Standard Single Superphosphate (SSP) contains 16.0% available P2O5 (minimum 14.5% water-soluble P2O5), along with 11% sulfur and 19% calcium."
    },
    {
      "id": "SOL203-U3-MCQ06",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Easy",
      "questionText": "Which harmful condensation byproduct formed during high-temperature urea manufacturing is restricted to a maximum of 1.5% under the FCO?",
      "options": {
        "A": "Biuret",
        "B": "Cyanamide",
        "C": "Formaldehyde",
        "D": "Melamine"
      },
      "correctOption": "A",
      "explanation": "Biuret (NH2-CO-NH-CO-NH2) is formed when molten urea is heated above 133\u00b0C. It is phytotoxic to seeds and foliage; hence the FCO specifies a maximum of 1.5% for soil application and 0.4% for foliar spray grade."
    },
    {
      "id": "SOL203-U3-MCQ07",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Easy",
      "questionText": "Which fertilizer is known as 'Kisan Khad' (Farmer's Fertilizer) and is chemically and physiologically neutral in soil?",
      "options": {
        "A": "Calcium Ammonium Nitrate (CAN)",
        "B": "Ammonium Sulphate",
        "C": "Urea",
        "D": "Sodium Nitrate"
      },
      "correctOption": "A",
      "explanation": "Calcium Ammonium Nitrate (CAN) contains 25.0% N (half as ammoniacal N and half as nitrate N) along with calcium carbonate; it leaves no residual acidity or alkalinity in the soil."
    },
    {
      "id": "SOL203-U3-MCQ08",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Easy",
      "questionText": "Which crops are highly sensitive to chloride toxicity, making Sulphate of Potash (SOP) preferred over Muriate of Potash (MOP)?",
      "options": {
        "A": "Tobacco, potato, and grapes",
        "B": "Wheat, rice, and maize",
        "C": "Sugarcane and pearl millet",
        "D": "Cotton and mustard"
      },
      "correctOption": "A",
      "explanation": "Tobacco (burn quality is impaired), potato (tuber starch content is reduced), and grapes/berries are chloride-sensitive; applying MOP causes chloride toxicity, making chloride-free SOP (K2SO4) essential."
    },
    {
      "id": "SOL203-U3-MCQ09",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Easy",
      "questionText": "What is the nitrogen and sulfur content in standard Ammonium Sulphate [(NH4)2SO4]?",
      "options": {
        "A": "20.6% N and 24.0% S",
        "B": "46.0% N and 0% S",
        "C": "25.0% N and 10.0% S",
        "D": "18.0% N and 18.0% S"
      },
      "correctOption": "A",
      "explanation": "Fertilizer-grade ammonium sulphate contains 20.6% ammoniacal nitrogen and 24.0% sulfate sulfur, making it an excellent dual fertilizer for oilseed and sulfur-deficient crops."
    },
    {
      "id": "SOL203-U3-MCQ10",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Easy",
      "questionText": "What is Triple Superphosphate (TSP) and its P2O5 content?",
      "options": {
        "A": "A concentrated phosphatic fertilizer containing 46.0% available P2O5",
        "B": "A mix of three different phosphate rocks",
        "C": "A mixture of SSP, DAP, and urea",
        "D": "An organic bone phosphate with 10% P2O5"
      },
      "correctOption": "A",
      "explanation": "Triple Superphosphate (TSP) is manufactured by treating rock phosphate with phosphoric acid (rather than sulfuric acid used for SSP), resulting in 46.0% available P2O5 with virtually no gypsum/sulfur."
    },
    {
      "id": "SOL203-U3-MCQ11",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Easy",
      "questionText": "Which Indian statutory act legally empowers the government to regulate fertilizer quality, distribution, and pricing?",
      "options": {
        "A": "The Essential Commodities Act, 1955 via Fertilizer (Control) Order, 1985",
        "B": "The Insecticides Act, 1968",
        "C": "The Seeds Act, 1966",
        "D": "The Environment Protection Act, 1986"
      },
      "correctOption": "A",
      "explanation": "The Fertilizer (Control) Order (FCO, 1985) is promulgated under Section 3 of the Essential Commodities Act, 1955 (ECA), providing statutory power to enforce standards and penalize adulteration."
    },
    {
      "id": "SOL203-U3-MCQ12",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Easy",
      "questionText": "What tool is standardly used by a Fertilizer Inspector to draw representative core samples from bagged fertilizers?",
      "options": {
        "A": "A slotted tube / spear sampler (trier)",
        "B": "A garden spade",
        "C": "A plastic spoon",
        "D": "A vacuum pump"
      },
      "correctOption": "A",
      "explanation": "A slotted grain or fertilizer trier (spear sampler) with an inner rotating tube and sharp pointed tip is inserted diagonally from one corner to the opposite corner of the bag to draw a complete core cross-section."
    },
    {
      "id": "SOL203-U3-MCQ13",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Easy",
      "questionText": "What is the mandatory coating applied to 100% of subsidized agricultural urea manufactured or imported in India since May 2015?",
      "options": {
        "A": "Neem oil (Neem Coated Urea - NCU)",
        "B": "Polymer plastic coating",
        "C": "Sulfur coating",
        "D": "Wax emulsion"
      },
      "correctOption": "A",
      "explanation": "The Government of India made Neem Coated Urea (NCU) mandatory in 2015 (coated with 0.035-0.05% neem oil) to slow nitrification, increase nitrogen use efficiency, and prevent illegal diversion for industrial uses."
    },
    {
      "id": "SOL203-U3-MCQ14",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Easy",
      "questionText": "What is a 'complex fertilizer'?",
      "options": {
        "A": "A fertilizer containing two or three primary nutrients (N, P, K) synthesized through chemical reaction rather than physical blending",
        "B": "A fertilizer that requires a computer to apply",
        "C": "A fertilizer with an unknown chemical formula",
        "D": "A fertilizer that dissolves only in organic solvents"
      },
      "correctOption": "A",
      "explanation": "Complex fertilizers (e.g., DAP, 10:26:26, 12:32:16) contain two or three primary nutrients combined chemically in uniform granules during the manufacturing process, ensuring every granule has identical composition."
    },
    {
      "id": "SOL203-U3-MCQ15",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Easy",
      "questionText": "What is the equivalent acidity of Ammonium Sulphate?",
      "options": {
        "A": "110 (requires 110 kg CaCO3 to neutralize acidity produced by 100 kg fertilizer)",
        "B": "0",
        "C": "50",
        "D": "29"
      },
      "correctOption": "A",
      "explanation": "Ammonium sulphate has an equivalent acidity of 110, meaning 110 kg of pure calcium carbonate is needed to neutralize the acid residue produced in soil by applying 100 kg of the fertilizer."
    },
    {
      "id": "SOL203-U3-MCQ16",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Easy",
      "questionText": "Which of the following is a water-soluble 100% complex fertilizer commonly used for fertigation and foliar spray?",
      "options": {
        "A": "19:19:19 (Polyfeed)",
        "B": "Single Superphosphate",
        "C": "Rock phosphate",
        "D": "Basic slag"
      },
      "correctOption": "A",
      "explanation": "19:19:19 is a 100% completely water-soluble, chloride-free specialty complex fertilizer designed for fertigation via drip systems and foliar application without nozzle clogging."
    },
    {
      "id": "SOL203-U3-MCQ17",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Easy",
      "questionText": "What is the potash and sulfur content of Sulphate of Potash (SOP)?",
      "options": {
        "A": "50% K2O and 17.5% S",
        "B": "60% K2O and 0% S",
        "C": "44% K2O and 13% N",
        "D": "30% K2O and 30% S"
      },
      "correctOption": "A",
      "explanation": "Sulphate of Potash (K2SO4) contains 50.0% water-soluble K2O and approximately 17.5% sulfate sulfur, with less than 2.5% chloride (Cl)."
    },
    {
      "id": "SOL203-U3-MCQ18",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Easy",
      "questionText": "In how many identical sealed portions must a Fertilizer Inspector divide a composite sample under FCO sampling rules?",
      "options": {
        "A": "Three identical parts (one for dealer, one for laboratory, one for referee/court)",
        "B": "Only one part",
        "C": "Ten parts",
        "D": "Five parts"
      },
      "correctOption": "A",
      "explanation": "Under FCO rules, the inspector must divide the composite sample into three identical parts (sealed and signed): one handed to the dealer/manufacturer, one sent to the notified testing laboratory, and one kept in safe custody as a referee sample."
    },
    {
      "id": "SOL203-U3-MCQ19",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Easy",
      "questionText": "Which micronutrient is commonly fortified into urea under FCO specifications to correct widespread deficiency in Indian soils?",
      "options": {
        "A": "Zinc (Zincated Urea containing 2.0% Zn)",
        "B": "Cobalt",
        "C": "Molybdenum",
        "D": "Nickel"
      },
      "correctOption": "A",
      "explanation": "Zincated Urea (coated or fortified with 2.0% Zn) is recognized under FCO to facilitate uniform field application of zinc alongside nitrogen in zinc-deficient rice-wheat soils."
    },
    {
      "id": "SOL203-U3-MCQ20",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Easy",
      "questionText": "What form of phosphorus is present in Rock Phosphate?",
      "options": {
        "A": "Insoluble tricalcium phosphate / fluorapatite [Ca10(PO4)6F2]",
        "B": "Water-soluble monocalcium phosphate",
        "C": "Citrate-soluble dicalcium phosphate",
        "D": "Pure pyrophosphate"
      },
      "correctOption": "A",
      "explanation": "Rock phosphate contains phosphorus primarily as insoluble fluorapatite or hydroxyapatite, which is water-insoluble and citrate-insoluble, requiring acidic soil conditions (pH < 5.5) for slow dissolution."
    },
    {
      "id": "SOL203-U3-MCQ21",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Medium",
      "questionText": "What is the chemical form of phosphorus present in Single Superphosphate (SSP)?",
      "options": {
        "A": "Monocalcium phosphate monohydrate [Ca(H2PO4)2\u00b7H2O] and gypsum [CaSO4\u00b72H2O]",
        "B": "Tricalcium phosphate [Ca3(PO4)2]",
        "C": "Dicalcium phosphate dihydrate [CaHPO4\u00b72H2O]",
        "D": "Ammonium polyphosphate [(NH4)4P2O7]"
      },
      "correctOption": "A",
      "explanation": "SSP is produced by treating rock phosphate with sulfuric acid: Ca10(PO4)6F2 + 7 H2SO4 + 3 H2O -> 3 Ca(H2PO4)2\u00b7H2O + 7 CaSO4 + 2 HF. The phosphorus is predominantly water-soluble monocalcium phosphate mixed intimately with calcium sulfate (gypsum)."
    },
    {
      "id": "SOL203-U3-MCQ22",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Medium",
      "questionText": "Why is the application of Ammonium Chloride (25% N) NOT recommended for potato, onion, and sugarcane?",
      "options": {
        "A": "High chloride concentration adversely affects tuber starch accumulation, bulb quality, and sugar crystallization",
        "B": "It turns the crop foliage permanently blue",
        "C": "It decomposes into explosive nitrogen trichloride gas in the field",
        "D": "It causes instant drying of soil water within 2 hours"
      },
      "correctOption": "A",
      "explanation": "Ammonium chloride contains approximately 66% chloride (Cl-). Heavy chloride accumulation retards sugar synthesis, decreases starch content in potatoes, and impairs burning quality in tobacco."
    },
    {
      "id": "SOL203-U3-MCQ23",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Medium",
      "questionText": "What happens chemically when urea is applied to soil surface without incorporation?",
      "options": {
        "A": "Urease enzyme hydrolyzes urea into ammonium carbonate, which dissociates into volatile ammonia gas (NH3), leading to volatilization losses up to 30-40%",
        "B": "It converts instantly into insoluble calcium cyanamide rock",
        "C": "It turns into pure nitric acid that dissolves soil clay",
        "D": "It polymerizes into synthetic plastic sheets on top of the soil"
      },
      "correctOption": "A",
      "explanation": "Soil urease rapidly breaks down surface urea: (NH2)2CO + 2 H2O -> (NH4)2CO3 -> 2 NH3(g) + CO2 + H2O. Under high pH, dry surface conditions, and warm wind, free ammonia volatilizes into the atmosphere."
    },
    {
      "id": "SOL203-U3-MCQ24",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Medium",
      "questionText": "Under FCO specifications, what is the maximum permissible moisture limit in prilled urea?",
      "options": {
        "A": "1.0% by weight",
        "B": "5.0% by weight",
        "C": "10.0% by weight",
        "D": "0.01% by weight"
      },
      "correctOption": "A",
      "explanation": "The maximum permissible moisture limit for prilled urea under FCO is 1.0% by weight. Excess moisture causes caking, dissolution in bags, and promotes biuret formation."
    },
    {
      "id": "SOL203-U3-MCQ25",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Medium",
      "questionText": "How is 'water-soluble phosphate' differentiated from 'citrate-soluble phosphate' in fertilizer analysis?",
      "options": {
        "A": "Water-soluble phosphate dissolves in distilled water; citrate-soluble dissolves in neutral 1 N ammonium citrate solution but not in pure water",
        "B": "Citrate-soluble phosphate is only found in citrus fruits",
        "C": "Water-soluble phosphate contains zero phosphorus atoms",
        "D": "Citrate-soluble phosphate is completely insoluble under any environmental condition"
      },
      "correctOption": "A",
      "explanation": "Water-soluble phosphate (monocalcium phosphate, ammonium phosphates) dissolves readily in pure water. Citrate-soluble phosphate (dicalcium phosphate, basic slag) does not dissolve in water but dissolves in neutral ammonium citrate solution (pH 7.0). Both are plant-available."
    },
    {
      "id": "SOL203-U3-MCQ26",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Medium",
      "questionText": "What is the equivalent acidity of Urea (46% N)?",
      "options": {
        "A": "80 to 85",
        "B": "0",
        "C": "110",
        "D": "20"
      },
      "correctOption": "A",
      "explanation": "Urea produces an acidic residue upon complete nitrification: NH4+ + 2 O2 -> NO3- + H2O + 2 H+. Its equivalent acidity is 80 to 85 kg CaCO3 per 100 kg of urea applied."
    },
    {
      "id": "SOL203-U3-MCQ27",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Medium",
      "questionText": "Which of the following describes a 'mixed fertilizer' (fertilizer mixture) as opposed to a 'complex fertilizer'?",
      "options": {
        "A": "A physical dry mechanical blend of two or more straight fertilizers (e.g., urea + SSP + MOP) without chemical reaction",
        "B": "A fertilizer dissolved in hot nitric acid",
        "C": "A single chemical compound synthesized in an autoclave",
        "D": "A naturally mined mineral ore containing all elements"
      },
      "correctOption": "A",
      "explanation": "Mixed fertilizers are physical mixtures prepared by dry-blending individual straight fertilizers (like mixing ammonium sulphate, SSP, and MOP). Granules differ in composition, unlike homogeneous complex fertilizers."
    },
    {
      "id": "SOL203-U3-MCQ28",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Medium",
      "questionText": "What is the statutory form used by a Fertilizer Inspector under FCO when seizing or drawing official samples for analysis?",
      "options": {
        "A": "Form J",
        "B": "Form A",
        "C": "Form C",
        "D": "Form Z"
      },
      "correctOption": "A",
      "explanation": "Form J is the official memorandum prescribed under Schedule II of FCO, 1985, executed by the Fertilizer Inspector when drawing official fertilizer samples in the presence of the dealer/custodian."
    },
    {
      "id": "SOL203-U3-MCQ29",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Medium",
      "questionText": "What analytical method is specified under FCO for determining total nitrogen in urea?",
      "options": {
        "A": "Total Kjeldahl digestion method (or modified Kjeldahl without reduction)",
        "B": "Flame spectrophotometry",
        "C": "EDTA complexometric titration",
        "D": "Gravimetric barium sulfate method"
      },
      "correctOption": "A",
      "explanation": "Urea nitrogen is amide nitrogen. It is digested with concentrated sulfuric acid in the presence of a catalyst (CuSO4 + K2SO4) into ammonium sulfate, then distilled with 40% NaOH into standard acid and titrated."
    },
    {
      "id": "SOL203-U3-MCQ30",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Medium",
      "questionText": "In fertilizer sampling from a lot of 100 bags, what is the minimum number of bags that must be sampled according to the FCO sampling schedule?",
      "options": {
        "A": "10 bags (approximately sqrt(N) or according to FCO scale)",
        "B": "All 100 bags",
        "C": "Only 1 bag",
        "D": "50 bags"
      },
      "correctOption": "A",
      "explanation": "According to the sampling schedule in FCO Schedule II, for a lot size between 65 and 100 bags, a minimum of 10 bags must be selected at random for drawing composite primary cores."
    },
    {
      "id": "SOL203-U3-MCQ31",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Medium",
      "questionText": "What is 'Basic Slag' and what is its agricultural utility?",
      "options": {
        "A": "A byproduct of steel manufacture (Thomas process) containing 14-18% citrate-soluble P2O5 and 40-50% lime (CaO), valuable for reclaiming acid soils",
        "B": "Waste slag from coal power plants with zero phosphorus",
        "C": "Toxic heavy metal ash dumped from brass furnaces",
        "D": "Synthetic liquid phosphorus used in greenhouse hydroponics"
      },
      "correctOption": "A",
      "explanation": "Basic slag (Thomas slag) is a byproduct of steel manufacture using iron ores rich in phosphorus. It contains 14-18% P2O5 as tetracalcium phosphate (Ca4P2O9) and high free lime, making it an excellent phosphatic liming material for acid soils."
    },
    {
      "id": "SOL203-U3-MCQ32",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Medium",
      "questionText": "What is the method of 'quartering' in laboratory fertilizer sample preparation?",
      "options": {
        "A": "Coning and flattening the composite sample, dividing it into four equal quadrants, discarding two diagonally opposite quarters, and recombining the other two until reduced to ~500 g",
        "B": "Cutting the fertilizer bag into four equal pieces",
        "C": "Adding 4 liters of water to one bag of fertilizer",
        "D": "Dividing the testing fee among four laboratory analysts"
      },
      "correctOption": "A",
      "explanation": "Quartering is the standard mechanical reduction technique: the composite sample is heaped into a cone, flattened, divided into four quadrants; two opposite quadrants are rejected and the remaining two mixed, repeating until the required sample size (~400-500 g) is reached."
    },
    {
      "id": "SOL203-U3-MCQ33",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Medium",
      "questionText": "What is the primary visual difference between commercial Muriate of Potash (MOP) and Sulphate of Potash (SOP)?",
      "options": {
        "A": "MOP is typically reddish-pink to white crystalline granules (due to iron oxide impurities), while SOP is clean white powder or granules",
        "B": "MOP is dark black and SOP is bright yellow",
        "C": "MOP is a blue liquid and SOP is a gas",
        "D": "There is no visual difference; both are bright green"
      },
      "correctOption": "A",
      "explanation": "Commercial fertilizer-grade MOP is typically pinkish-red (from hematite/iron oxide inclusions in sylvinite ore) or off-white, whereas SOP (K2SO4) is pure white or pale cream crystals/powder."
    },
    {
      "id": "SOL203-U3-MCQ34",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Medium",
      "questionText": "What is Boronated Single Superphosphate and its specified boron content under FCO?",
      "options": {
        "A": "SSP fortified with 0.18% to 0.20% Boron (B)",
        "B": "SSP fortified with 5.0% Boron",
        "C": "SSP mixed with borax powder at 50% w/w",
        "D": "SSP sprayed with boric acid crystals yielding 10% B"
      },
      "correctOption": "A",
      "explanation": "Under FCO Schedule I, Boronated Single Superphosphate must contain minimum 16.0% available P2O5 and 0.18% to 0.20% total Boron (B) by weight to address boron-deficient soils."
    },
    {
      "id": "SOL203-U3-MCQ35",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Medium",
      "questionText": "Which of the following fertilizer grades is an example of an incomplete complex fertilizer containing N and P but no K?",
      "options": {
        "A": "20:20:0 (Ammonium Phosphate Sulphate)",
        "B": "10:26:26",
        "C": "12:32:16",
        "D": "17:17:17"
      },
      "correctOption": "A",
      "explanation": "20:20:0 (Ammonium Phosphate Sulphate or Nitrophosphate) supplies 20% N and 20% P2O5, with 0% K2O, along with 13% sulfate sulfur."
    },
    {
      "id": "SOL203-U3-MCQ36",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Medium",
      "questionText": "Why is Nitrochalk or CAN safe to store and handle compared to pure Ammonium Nitrate (NH4NO3)?",
      "options": {
        "A": "Pure ammonium nitrate is highly hygroscopic and explosive; blending with limestone/calcium carbonate stabilizes the salt against detonation and reduces moisture absorption",
        "B": "Limestone dissolves the nitrogen into nitrogen gas",
        "C": "CAN contains zero nitrogen, making it inert",
        "D": "Limestone turns ammonium nitrate into liquid petroleum"
      },
      "correctOption": "A",
      "explanation": "Pure ammonium nitrate (34% N) is a powerful oxidizing agent subject to thermal detonation and intense caking. Blending with finely powdered limestone (CaCO3) or dolomite produces CAN (25% N), which is non-explosive and safe for commercial transport."
    },
    {
      "id": "SOL203-U3-MCQ37",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Medium",
      "questionText": "What chemical analytical method is used under standard protocols to quantify available potassium in chemical fertilizers?",
      "options": {
        "A": "Sodium tetraphenylboron (STPB) gravimetric / volumetric method or Flame Photometry",
        "B": "Spectrophotometric ninhydrin method",
        "C": "Gas liquid chromatography",
        "D": "Nuclear magnetic resonance spectroscopy"
      },
      "correctOption": "A",
      "explanation": "Potassium in fertilizer analysis is standardly determined either gravimetrically/volumetrically using the sodium tetraphenylboron (NaTPB) precipitation method or instrumentally by flame emission photometry."
    },
    {
      "id": "SOL203-U3-MCQ38",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Medium",
      "questionText": "What is the maximum limit of free phosphoric acid (as P2O5) permitted in Single Superphosphate under FCO to prevent bag rotting and caking?",
      "options": {
        "A": "4.0% by weight",
        "B": "20.0% by weight",
        "C": "15.0% by weight",
        "D": "0.001% by weight"
      },
      "correctOption": "A",
      "explanation": "FCO specifies that free phosphoric acid in SSP must not exceed 4.0% by weight. Higher free acid makes the fertilizer sticky, corrodes packaging bags, and interferes with drill application."
    },
    {
      "id": "SOL203-U3-MCQ39",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Medium",
      "questionText": "Which complex fertilizer grade contains 10% N, 26% P2O5, and 26% K2O?",
      "options": {
        "A": "IFFCO 10:26:26 NPK complex",
        "B": "12:32:16 NPK complex",
        "C": "19:19:19 NPK complex",
        "D": "28:28:0 complex"
      },
      "correctOption": "A",
      "explanation": "NPK 10:26:26 is a popular complex fertilizer grade manufactured by granulating ammonium phosphate with potassium chloride, providing high phosphorus and potassium for root crops, pulses, and oilseeds."
    },
    {
      "id": "SOL203-U3-MCQ40",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Medium",
      "questionText": "What is the critical relative humidity (CRH) of a fertilizer, and why is it important?",
      "options": {
        "A": "The relative humidity of the surrounding air above which the fertilizer spontaneously absorbs moisture from the atmosphere",
        "B": "The maximum humidity at which crops can photosynthesize",
        "C": "The percentage of water required to dissolve 1 gram of fertilizer",
        "D": "The boiling point of liquid nitrogen fertilizer"
      },
      "correctOption": "A",
      "explanation": "CRH is the threshold atmospheric relative humidity above which a dry fertilizer salt absorbs water from air and becomes wet/caked. Urea has a CRH of ~72% at 30\u00b0C, while ammonium nitrate has a very low CRH of ~59%, making it highly hygroscopic."
    },
    {
      "id": "SOL203-U3-MCQ41",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Medium",
      "questionText": "What is the permissible particle size specification under FCO for granular fertilizers (such as DAP and NPK complexes)?",
      "options": {
        "A": "Not less than 90% material shall pass through 4 mm IS sieve and be retained on 1 mm IS sieve; not more than 5% below 1 mm",
        "B": "100% material must pass through 0.01 mm sieve",
        "C": "Particles must be larger than 25 mm diameter",
        "D": "Size does not matter as long as color is white"
      },
      "correctOption": "A",
      "explanation": "FCO specifies that at least 90% of granular fertilizers must be between 1 mm and 4 mm IS sieves (not more than 5% shall pass through 1 mm sieve) to ensure uniform mechanical drillability."
    },
    {
      "id": "SOL203-U3-MCQ42",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Medium",
      "questionText": "What happens when urea and single superphosphate (SSP) are physically mixed and stored for several days?",
      "options": {
        "A": "The mixture absorbs moisture, undergoes chemical reaction releasing water of crystallization, and turns into a sticky, wet slush",
        "B": "The mixture explodes into flames",
        "C": "The mixture converts into pure gaseous nitrogen",
        "D": "It turns into hard crystalline quartz that cannot be broken"
      },
      "correctOption": "A",
      "explanation": "Urea reacts with monocalcium phosphate in SSP releasing hydrated water: Ca(H2PO4)2\u00b7H2O + 4 CO(NH2)2 -> Ca(H2PO4)2\u00b74CO(NH2)2 + H2O. This released water liquefies the mixture, rendering it unusable unless applied immediately."
    },
    {
      "id": "SOL203-U3-MCQ43",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Medium",
      "questionText": "In determining water-soluble P2O5 in DAP under FCO, how is the phosphate extracted from the sample?",
      "options": {
        "A": "Successive washings of 1.0 g sample with small portions of distilled water on a filter paper into a 500 ml volumetric flask",
        "B": "Boiling with 18 N sulfuric acid for 6 hours",
        "C": "Dissolving in hot acetone and benzene",
        "D": "Burning in an electric furnace at 1000\u00b0C"
      },
      "correctOption": "A",
      "explanation": "Water-soluble phosphate is extracted by placing the fertilizer on a filter paper in a funnel and washing it continuously with small increments of distilled water until the volume in the volumetric flask reaches ~450 ml, then making up to 500 ml."
    },
    {
      "id": "SOL203-U3-MCQ44",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Medium",
      "questionText": "What is the chemical name and composition of Dicalcium Phosphate (DCP)?",
      "options": {
        "A": "CaHPO4\u00b72H2O, containing 34-39% citrate-soluble P2O5",
        "B": "Ca(H2PO4)2, containing 50% water-soluble P2O5",
        "C": "Ca3(PO4)2, containing 10% insoluble P2O5",
        "D": "CaCO3\u00b7Ca3(PO4)2, containing 1% P2O5"
      },
      "correctOption": "A",
      "explanation": "Dicalcium phosphate dihydrate (CaHPO4\u00b72H2O) contains 34-39% P2O5 which is insoluble in water but completely soluble in neutral ammonium citrate, commonly used in animal feeds and acidic soils."
    },
    {
      "id": "SOL203-U3-MCQ45",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Medium",
      "questionText": "What is the function of adding potassium sulphate (K2SO4) and copper sulphate (CuSO4) in the Kjeldahl digestion of fertilizer samples?",
      "options": {
        "A": "K2SO4 raises the boiling point of concentrated sulfuric acid to ~370\u00b0C; CuSO4 acts as an oxidation catalyst",
        "B": "K2SO4 turns the solution red; CuSO4 neutralizes the acid",
        "C": "K2SO4 acts as a buffer against boiling; CuSO4 bleaches the sample",
        "D": "They prevent any gas from escaping the flask"
      },
      "correctOption": "A",
      "explanation": "Concentrated H2SO4 boils at ~330\u00b0C. Adding K2SO4 elevates the digestion temperature to 360-380\u00b0C, speeding up digestion, while CuSO4 (or selenium) catalyzes the oxidative cleavage of organic C-N bonds."
    },
    {
      "id": "SOL203-U3-MCQ46",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Hard",
      "questionText": "A fertilizer sample of DAP is analyzed in the laboratory. 1.0 g of sample is extracted to 500 ml. A 25 ml aliquot is precipitated as ammonium phosphomolybdate and converted to quinoline phosphomolybdate. The precipitate requires 35.0 ml of 0.5 N NaOH for dissolution. If 1 ml of 0.5 N NaOH corresponds to 0.001366 g P2O5, what is the P2O5 percentage in the sample?",
      "options": {
        "A": "47.81%",
        "B": "18.00%",
        "C": "35.00%",
        "D": "24.50%"
      },
      "correctOption": "A",
      "explanation": "Weight of P2O5 in 25 ml aliquot = 35.0 ml * 0.001366 g = 0.04781 g. Total P2O5 in 500 ml = 0.04781 * (500 / 25) = 0.9562 g. Percentage P2O5 in 1.0 g sample = (0.9562 / 1.0) * 100 = 47.81%. It complies with the DAP standard (min 46.0%)."
    },
    {
      "id": "SOL203-U3-MCQ47",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Hard",
      "questionText": "In the volumetric quimociac (quinoline phosphomolybdate) method for phosphorus determination, what is the stoichiometric equivalence factor between NaOH and P2O5?",
      "options": {
        "A": "26 equivalents of NaOH react per mole of P2O5 [1 mole (C9H7N)3\u00b7H3[PO4\u00b712MoO3] requires 26 NaOH]",
        "B": "1 equivalent of NaOH per mole of P2O5",
        "C": "2 equivalents of NaOH per mole of P2O5",
        "D": "12 equivalents of NaOH per mole of P2O5"
      },
      "correctOption": "A",
      "explanation": "In the quimociac method, the yellow precipitate (C9H7N)3\u00b7H3[PO4\u00b712MoO3] dissolves in excess standard NaOH according to: (C9H7N)3\u00b7H3[PO4\u00b712MoO3] + 26 NaOH -> 12 Na2MoO4 + Na2HPO4 + 3 C9H7N + 14 H2O. Thus 26 moles of NaOH react per mole of phosphorus (or 52 moles per mole of P2O5)."
    },
    {
      "id": "SOL203-U3-MCQ48",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Hard",
      "questionText": "What is the analytical principle of determining biuret in urea using the spectrophotometric copper-complex (Biuret) method under FCO?",
      "options": {
        "A": "In an alkaline tartrate medium, biuret reacts with cupric ions (Cu2+) to form an intensely violet-purple coordination complex with peak absorbance at 540-560 nm",
        "B": "Biuret reacts with silver nitrate to form a black precipitate",
        "C": "Biuret fluoresces under green laser light",
        "D": "Biuret decomposes into copper metal that is weighed on a microbalance"
      },
      "correctOption": "A",
      "explanation": "Biuret reacts with divalent copper ions in alkaline potassium sodium tartrate solution (Rochelle salt) to form a stable, purple-colored coordinate chelate complex [Cu(biuret)2]^2-. The intensity of the violet color is measured spectrophotometrically at 550 nm against a calibration curve."
    },
    {
      "id": "SOL203-U3-MCQ49",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Hard",
      "questionText": "How does the legal definition of 'adulterated fertilizer' differ from 'sub-standard fertilizer' under the Fertilizer (Control) Order 1985?",
      "options": {
        "A": "Sub-standard fertilizer fails to conform to prescribed nutrient standards within permissible tolerance limits, whereas adulterated fertilizer has been deliberately substituted, contaminated, or mixed with extraneous foreign substances",
        "B": "Sub-standard is a criminal offense while adulterated is completely legal",
        "C": "There is no legal difference; both terms are interchangeable",
        "D": "Adulterated fertilizer refers only to expired packaging"
      },
      "correctOption": "A",
      "explanation": "Under FCO Clause 2, 'sub-standard' refers to genuine fertilizer where nutrient levels have fallen marginally below the guaranteed specification (beyond tolerance limits) without criminal intent, whereas 'adulterated' involves fraudulent physical substitution, imitation, or addition of spurious diluents (e.g., salt, river sand, gypsum)."
    },
    {
      "id": "SOL203-U3-MCQ50",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Hard",
      "questionText": "Why is the determination of ammoniacal nitrogen in CAN (Calcium Ammonium Nitrate) carried out by distillation with magnesium oxide (MgO) rather than sodium hydroxide (NaOH)?",
      "options": {
        "A": "Strong alkali like NaOH would decompose nitrate ions into ammonia or attack organic binders, whereas mild MgO selectively releases ammoniacal nitrogen without hydrolyzing nitrate",
        "B": "MgO is cheaper than NaOH",
        "C": "NaOH dissolves the glass distillation condenser",
        "D": "Ammonia only evaporates in the presence of magnesium crystals"
      },
      "correctOption": "A",
      "explanation": "Heavy calcined MgO is a mild alkaline agent that produces a pH of ~9.5. It quantitatively liberates ammonia from ammonium ions without risk of reducing nitrate (NO3-) or decomposing non-ammoniacal nitrogenous species."
    },
    {
      "id": "SOL203-U3-MCQ51",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Hard",
      "questionText": "What is the Devarda's Alloy method used for in fertilizer quality laboratories?",
      "options": {
        "A": "Quantitative reduction of nitrate (NO3-) and nitrite (NO2-) nitrogen into ammonia (NH3) in an alkaline medium for Kjeldahl distillation",
        "B": "Measurement of copper content in fungicides",
        "C": "Separating potassium from sodium by magnetic attraction",
        "D": "Coating fertilizer granules with water-resistant zinc"
      },
      "correctOption": "A",
      "explanation": "Devarda's alloy (45% Al, 50% Cu, 5% Zn) is a potent reducing agent. In strongly alkaline solution (NaOH), nascent hydrogen generated by the aluminum-zinc alloy reduces nitrate ions completely to ammonia: 3 NO3- + 8 Al + 5 OH- + 18 H2O -> 3 NH3 + 8 Al(OH)4-."
    },
    {
      "id": "SOL203-U3-MCQ52",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Hard",
      "questionText": "What is the permissible analytical tolerance limit under FCO Schedule I for total nitrogen in fertilizers containing more than 20% guaranteed N (such as Urea or CAN)?",
      "options": {
        "A": "0.3 to 0.5 units of N",
        "B": "5.0 units of N",
        "C": "Zero tolerance (0.00%)",
        "D": "10.0 units of N"
      },
      "correctOption": "A",
      "explanation": "For high-analysis nitrogenous fertilizers (>20% N), FCO permits an analytical variation tolerance of 0.3 to 0.5 units. For urea (46.0% N), a lab finding of 45.7% N falls within permissible tolerance."
    },
    {
      "id": "SOL203-U3-MCQ53",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Hard",
      "questionText": "In the manufacture of nitrophosphate fertilizers via the Odda Process, what chemical step is used to separate excess calcium from dissolved rock phosphate?",
      "options": {
        "A": "Cooling the nitric acid-digested rock solution to -5\u00b0C to 0\u00b0C to crystallize calcium nitrate [Ca(NO3)2\u00b74H2O], which is filtered out",
        "B": "Adding mercury to precipitate calcium amalgam",
        "C": "Bubbling chlorine gas to burn the calcium",
        "D": "Boiling the mixture until all calcium evaporates"
      },
      "correctOption": "A",
      "explanation": "In the Odda (nitro-phosphate) process, rock phosphate is digested with HNO3: Ca10(PO4)6F2 + 20 HNO3 -> 6 H3PO4 + 10 Ca(NO3)2 + 2 HF. Cooling the solution crystallizes calcium nitrate tetrahydrate, leaving phosphoric acid for ammoniation into water-soluble nitrophosphates."
    },
    {
      "id": "SOL203-U3-MCQ54",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "difficulty": "Hard",
      "questionText": "In gravimetric determination of potassium in fertilizer using sodium tetraphenylboron [NaB(C6H5)4], what is the chemical formula and precipitate formed?",
      "options": {
        "A": "Potassium tetraphenylboron [KB(C6H5)4], an insoluble white stoichiometric precipitate",
        "B": "Potassium chloride crystals",
        "C": "Potassium chromate red precipitate",
        "D": "Potassium hexacyanoferrate blue gel"
      },
      "correctOption": "A",
      "explanation": "Sodium tetraphenylboron (STPB) reacts selectively in weakly alkaline EDTA medium with potassium ions to precipitate white potassium tetraphenylboron: K+ + [B(C6H5)4]- -> KB(C6H5)4(s). The precipitate is filtered, dried at 105\u00b0C, and weighed."
    },
    {
      "id": "SOL203-U3-MCQ55",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "difficulty": "Hard",
      "questionText": "What is the Karl Fischer titration method used for in specialized fertilizer testing?",
      "options": {
        "A": "Accurate coulometric or volumetric quantification of trace and low moisture content in hygroscopic fertilizers",
        "B": "Measuring total sulfur in ammonium sulfate",
        "C": "Analyzing trace lead and arsenic",
        "D": "Determining the electrical conductivity of granules"
      },
      "correctOption": "A",
      "explanation": "Karl Fischer titration relies on the bunsen-like reaction: I2 + SO2 + H2O + 3 RN + CH3OH -> 2 RN\u00b7HI + RN\u00b7HSO4CH3. It quantitatively reacts with water molecules, providing precise moisture determination without thermal degradation of heat-sensitive compounds."
    },
    {
      "id": "SOL203-U3-MCQ56",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "difficulty": "Hard",
      "questionText": "What is the primary cause of 'bag caking' in stored NPK complex fertilizers during monsoon seasons?",
      "options": {
        "A": "Capillary dissolution of soluble salts at contact points above the critical relative humidity, followed by recrystalization into salt bridges as humidity fluctuates",
        "B": "Biological bacterial colonization spinning fungal webs",
        "C": "Spontaneous fusion of plastic packaging with fertilizer granules",
        "D": "Electromagnetic attraction between nitrogen and potassium atoms"
      },
      "correctOption": "A",
      "explanation": "When ambient humidity exceeds the CRH, salt dissolves into a thin liquid film at inter-particle contact points. When humidity drops or temperature changes, water evaporates, causing recrystallization and forming crystalline solid salt bridges between granules."
    },
    {
      "id": "SOL203-U3-MCQ57",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "difficulty": "Hard",
      "questionText": "Why is the use of Single Superphosphate (SSP) preferred over DAP in oilseed crops like Groundnut, Mustard, and Soybean?",
      "options": {
        "A": "SSP contains 11% sulfate-sulfur and 19% calcium in addition to 16% P2O5, fulfilling critical sulfur needs for oil and protein synthesis",
        "B": "DAP is 100% toxic to oilseed roots",
        "C": "SSP contains liquid nitrogen that evaporates into flowers",
        "D": "Mustard cannot absorb ammoniacal nitrogen present in DAP"
      },
      "correctOption": "A",
      "explanation": "Oilseeds have high requirements for sulfur (essential for methionine, cysteine, and glucosinolate biosynthesis) and calcium (critical for pod filling in groundnut). SSP supplies 11% S and 19% Ca along with P, whereas standard DAP supplies 0% S and 0% Ca."
    },
    {
      "id": "SOL203-U3-MCQ58",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "difficulty": "Hard",
      "questionText": "Under FCO testing protocols, what is the maximum permissible limit for total chloride (Cl) in Sulphate of Potash (SOP)?",
      "options": {
        "A": "2.5% by weight",
        "B": "15.0% by weight",
        "C": "25.0% by weight",
        "D": "0.001% by weight"
      },
      "correctOption": "A",
      "explanation": "To ensure safety for chloride-sensitive crops (tobacco, potato), FCO Schedule I sets a strict ceiling of maximum 2.5% chloride (on dry basis) in commercial fertilizer-grade Sulphate of Potash."
    },
    {
      "id": "SOL203-U3-MCQ59",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "difficulty": "Hard",
      "questionText": "What is the role of neutral ammonium citrate solution (Petermann or AOAC method) in phosphatic fertilizer analysis?",
      "options": {
        "A": "It selectively dissolves citrate-soluble dicalcium phosphate and basic phosphates while leaving insoluble tricalcium phosphate and fluorapatite intact",
        "B": "It destroys all water molecules",
        "C": "It neutralizes sulfuric acid during titration",
        "D": "It precipitates potassium as yellow citrate salt"
      },
      "correctOption": "A",
      "explanation": "Neutral ammonium citrate solution (pH 7.0 at 65\u00b0C) complexes Ca2+ ions, selectively solubilizing dicalcium phosphate (CaHPO4) without attacking unreacted crystalline fluorapatite, defining the 'available' phosphate fraction (water-soluble + citrate-soluble)."
    },
    {
      "id": "SOL203-U3-MCQ60",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "difficulty": "Hard",
      "questionText": "Under FCO regulations, if a fertilizer dealer disputes the adverse analytical report of a Notified Laboratory, what is the statutory appellate recourse?",
      "options": {
        "A": "The dealer can apply to the Appellate Authority within 30 days to send the third referee sample to the Central Fertilizer Quality Control and Training Institute (CFQC&TI), Faridabad, whose finding is final and binding",
        "B": "The dealer must immediately be sent to prison for 10 years without trial",
        "C": "The dealer can re-test the sample in their own retail shop using litmus paper",
        "D": "The dealer can demand that all fertilizer bags in the district be burned"
      },
      "correctOption": "A",
      "explanation": "Under FCO Clause 32B, the dealer or manufacturer can challenge the report within 30 days. The court or appellate authority sends the sealed third referee sample to the Central Fertilizer Quality Control & Training Institute (CFQC&TI), Faridabad, whose analytical result is conclusive evidence in a court of law."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL203-U3-SUB01",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "questionText": "Define chemical fertilizers and classify them comprehensively based on the number of primary nutrients, chemical form of nutrients, and physical state.",
      "contextScenario": "",
      "modelAnswer": "Chemical fertilizers are commercially manufactured inorganic or synthetic organic chemical substances containing high concentrations of plant nutrients in readily soluble and available forms, designed to supplement soil fertility and meet crop nutrient requirements.\n\nComprehensive Classification:\n\n1. Based on the Number of Primary Nutrients:\n- Straight Fertilizers: Contain only one primary macronutrient (N, P, or K).\n  * Nitrogenous: Urea (46% N), Ammonium sulphate (20.6% N).\n  * Phosphatic: Single superphosphate (16% P2O5), Triple superphosphate (46% P2O5).\n  * Potassic: Muriate of potash (60% K2O), Sulphate of potash (50% K2O).\n- Complex Fertilizers: Contain two or three primary nutrients synthesized through chemical reactions during manufacturing into homogeneous granules.\n  * Examples: Diammonium phosphate (DAP: 18:46:0), NPK complexes (10:26:26, 12:32:16, 19:19:19).\n- Mixed Fertilizers (Fertilizer Blends): Physical dry mechanical mixtures of two or more straight fertilizers without chemical bonding.\n\n2. Based on the Chemical Form of the Nutrient:\n- Nitrogenous Fertilizers:\n  * Nitrate Form: Sodium nitrate (16% N), Calcium nitrate (15.5% N).\n  * Ammoniacal Form: Ammonium sulphate (20.6% N), Ammonium chloride (25% N).\n  * Nitrate and Ammoniacal Form: Calcium ammonium nitrate (CAN: 25% N), Ammonium nitrate (34% N).\n  * Amide Form: Urea [CO(NH2)2: 46% N], Calcium cyanamide (21% N).\n- Phosphatic Fertilizers:\n  * Water-soluble: SSP, TSP, DAP, Monocalcium phosphate.\n  * Citrate-soluble: Dicalcium phosphate, Basic slag.\n  * Insoluble / Citrate-insoluble: Rock phosphate, Raw bone meal.\n\n3. Based on Physical Form:\n- Solid Fertilizers: Prills (urea), granules (DAP, NPK complexes), crystals (ammonium sulfate), and powders (rock phosphate, SSP).\n- Liquid / Fluid Fertilizers: Clear liquid fertilizers, suspensions, anhydrous ammonia gas, and water-soluble fertigation grades.",
      "outlinePoints": [
        "Chemical fertilizers are commercially manufactured inorganic or synthetic organic chemical substances containing high co",
        "Comprehensive Classification:",
        "1. Based on the Number of Primary Nutrients:",
        "- Straight Fertilizers: Contain only one primary macronutrient (N, P, or K)."
      ]
    },
    {
      "id": "SOL203-U3-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "questionText": "Compare Urea, Ammonium Sulphate, and Calcium Ammonium Nitrate (CAN) with respect to nitrogen content, chemical forms of N, soil reactions, and hygroscopic nature.",
      "contextScenario": "",
      "modelAnswer": "Nitrogenous fertilizers vary considerably in their chemical behaviors, equivalent acidity, and agronomic performance in diverse soil regimes.\n\n1. Total Nitrogen Content and Chemical Form:\n- Urea: 46.0% total N in organic amide [CO(NH2)2] form. Upon soil application, it hydrolyzes via urease into ammoniacal (NH4+) and subsequently nitrifies to nitrate (NO3-).\n- Ammonium Sulphate [(NH4)2SO4]: 20.6% total N entirely in ammoniacal (NH4+) form, accompanied by 24.0% sulfate-sulfur (SO4^2-).\n- Calcium Ammonium Nitrate (CAN): 25.0% total N in dual forms: 12.5% ammoniacal-N (NH4+) and 12.5% nitrate-N (NO3-).\n\n2. Soil Reaction and Equivalent Acidity:\n- Urea: Moderately acid-forming. Hydrolysis initially raises local pH, but subsequent nitrification of ammonium produces net acidity. Equivalent acidity is 80 to 85 kg CaCO3 per 100 kg fertilizer.\n- Ammonium Sulphate: Strongly acid-forming. Both NH4+ nitrification and SO4^2- anions induce soil acidification. Equivalent acidity is 110 kg CaCO3 per 100 kg fertilizer; unsuited for acidic soils unless limed, but excellent for alkaline/calcareous soils.\n- CAN: Chemically and physiologically neutral. Formulated with ~20% limestone or dolomite (CaCO3/MgCO3), it has zero equivalent acidity, leaving no residual acidity or alkalinity.\n\n3. Hygroscopicity and Storage Stability:\n- Urea: High Critical Relative Humidity (CRH ~72% at 30\u00b0C); moderately hygroscopic; requires moisture-proof HDPE/polythene-lined bags; prills cake if humidity exceeds 75%.\n- Ammonium Sulphate: Low hygroscopicity (CRH ~79% at 30\u00b0C); crystals store exceptionally well under humid tropical climates without severe caking.\n- CAN: Highly hygroscopic when pure, but calcium carbonate coating elevates stability; requires airtight hermetic packaging to prevent slurry formation during monsoons.",
      "outlinePoints": [
        "Nitrogenous fertilizers vary considerably in their chemical behaviors, equivalent acidity, and agronomic performance in ",
        "1. Total Nitrogen Content and Chemical Form:",
        "- Urea: 46.0% total N in organic amide [CO(NH2)2] form. Upon soil application, it hydrolyzes via urease into ammoniacal ",
        "- Ammonium Sulphate [(NH4)2SO4]: 20.6% total N entirely in ammoniacal (NH4+) form, accompanied by 24.0% sulfate-sulfur ("
      ]
    },
    {
      "id": "SOL203-U3-SUB03",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "questionText": "Explain the chemistry and manufacturing of Single Superphosphate (SSP). Highlight why it is agronomically valuable for sulfur- and calcium-deficient soils.",
      "contextScenario": "",
      "modelAnswer": "Single Superphosphate (SSP) is the oldest commercially manufactured chemical fertilizer, first produced in England by Sir John Bennet Lawes in 1842.\n\nManufacturing Chemistry:\nSSP is manufactured by reacting finely ground insoluble fluoroapatite rock phosphate with 65-70% concentrated sulfuric acid (H2SO4) in an enclosed acid mixer and continuous den:\n[Ca3(PO4)2]3\u00b7CaF2 + 7 H2SO4 + 3 H2O -> 3 [Ca(H2PO4)2\u00b7H2O] + 7 CaSO4 + 2 HF(g)\nThe product cures in storage dens for 2 to 4 weeks while the reaction completes, converting insoluble rock into water-soluble monocalcium phosphate monohydrate and solid calcium sulfate (gypsum).\n\nNutrient Composition:\n1. Available Phosphorus (P2O5): 16.0% (minimum 14.5% water-soluble).\n2. Sulfate Sulfur (S): 11.0% (as CaSO4).\n3. Calcium (Ca): 19.0% to 21.0%.\n\nAgronomic Value for S- and Ca-Deficient Soils:\n- Triple Nutrient Delivery: Unlike DAP or TSP (which deliver zero sulfur), SSP provides three essential plant nutrients (P, S, and Ca) in a single product.\n- Oilseeds and Pulses: Oilseed crops (mustard, groundnut, soybean, sunflower) require high sulfur for synthesizing sulfur-containing amino acids (cysteine, methionine) and glucosinolates. Applying SSP directly remedies widespread sulfur deficiency in Indian soils.\n- Pod Filling in Groundnut: Groundnut pods absorb calcium directly from surrounding soil; SSP supplies soluble calcium preventing 'pops' (empty pods) and enhancing shell hardening.\n- Soil Structure Amelioration: The 50% gypsum component supplies divalent Ca2+ that helps maintain good structure in sodic and degraded soils.",
      "outlinePoints": [
        "Single Superphosphate (SSP) is the oldest commercially manufactured chemical fertilizer, first produced in England by Si",
        "Manufacturing Chemistry:",
        "SSP is manufactured by reacting finely ground insoluble fluoroapatite rock phosphate with 65-70% concentrated sulfuric a",
        "[Ca3(PO4)2]3\u00b7CaF2 + 7 H2SO4 + 3 H2O -> 3 [Ca(H2PO4)2\u00b7H2O] + 7 CaSO4 + 2 HF(g)"
      ]
    },
    {
      "id": "SOL203-U3-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "questionText": "Distinguish between Muriate of Potash (MOP) and Sulphate of Potash (SOP) with respect to chemical formula, potash content, chloride toxicity, and crop preference.",
      "contextScenario": "",
      "modelAnswer": "Potassium fertilizers are essential for activating enzymes, regulating stomatal conductance, facilitating carbohydrate translocation, and enhancing crop drought and disease tolerance.\n\n1. Chemical Formula and Potash Concentration:\n- Muriate of Potash (MOP): Potassium chloride (KCl). Contains 60.0% water-soluble potash (K2O) and ~47% chloride (Cl-).\n- Sulphate of Potash (SOP): Potassium sulphate (K2SO4). Contains 50.0% water-soluble potash (K2O), ~17.5% sulfate-sulfur (SO4^2-), and less than 2.5% chloride.\n\n2. Physical Properties and Color:\n- MOP: Coarse crystalline or granular material; typically reddish-pink to orange due to trace iron oxide inclusions in sylvinite ore, though white crystalline grades exist.\n- SOP: Fine crystalline powder or homogeneous white to cream granules; highly soluble in water.\n\n3. Salt Index and Osmotic Effects:\n- MOP: High salt index (~116 relative to sodium nitrate = 100). Higher osmotic stress risk when placed near germinating seeds or in saline soils.\n- SOP: Lower salt index (~46). Significantly safer for seed placement, nurseries, and intensive greenhouse fertigation.\n\n4. Chloride Sensitivity and Crop Preferences:\n- Chloride-Sensitive Crops (SOP is mandatory):\n  * Tobacco: Chloride accumulation above 1.0% in cured leaves reduces burning quality and creates undesirable ash.\n  * Potato: High chloride inhibits starch synthesis and dry matter accumulation, resulting in soggy tubers.\n  * Grapes, berries, citrus, and flowers: Chloride causes marginal leaf scorch, tip burning, and fruit dropping.\n- Chloride-Tolerant Crops (MOP is ideal and cost-effective):\n  * Rice, wheat, maize, sugarcane, cotton, and coconut (coconut specifically responds favorably to chloride for osmoregulation).",
      "outlinePoints": [
        "Potassium fertilizers are essential for activating enzymes, regulating stomatal conductance, facilitating carbohydrate t",
        "1. Chemical Formula and Potash Concentration:",
        "- Muriate of Potash (MOP): Potassium chloride (KCl). Contains 60.0% water-soluble potash (K2O) and ~47% chloride (Cl-).",
        "- Sulphate of Potash (SOP): Potassium sulphate (K2SO4). Contains 50.0% water-soluble potash (K2O), ~17.5% sulfate-sulfur"
      ]
    },
    {
      "id": "SOL203-U3-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "questionText": "Explain the statutory protocol for fertilizer sampling from bagged lots prescribed under Schedule II of the Fertilizer (Control) Order, 1985.",
      "contextScenario": "",
      "modelAnswer": "Schedule II of the Fertilizer (Control) Order (FCO), 1985, establishes rigid, legally binding sampling protocols that Fertilizer Inspectors must follow to ensure samples are truly representative and legally admissible in court.\n\n1. Lot Identification and Scale of Sampling:\nA 'lot' constitutes a identifiable consignment of fertilizer of homogeneous grade and batch. Sampling bags are selected at random according to lot size:\n- Up to 10 bags: All bags sampled (100%).\n- 11 to 100 bags: Minimum 10 bags sampled.\n- 101 to 200 bags: Minimum 15 bags sampled.\n- 201 to 500 bags: Minimum 20 bags sampled.\n- 501 to 1000 bags: Minimum 25 bags sampled.\n- Above 1000 bags: Minimum 30 bags sampled.\n\n2. Sampling Equipment and Method of Drawing:\n- Tool: A stainless steel slotted spear/trier (75-100 cm length, 1.5-2.0 cm diameter with pointed solid tip and rotating inner sleeve).\n- Execution: Selected bags are laid horizontally. The closed trier is inserted diagonally from one bottom corner to the opposite top corner. The slot is opened, turned 180 degrees to cut a complete core of granules, closed, and withdrawn.\n\n3. Formation of Composite Gross Sample:\nAll individual core samples from the sampled bags are pooled into a clean, moisture-proof polythene trough or tray, creating a gross sample (typically 2 to 5 kg). Foreign materials are removed, and lumps are crushed.\n\n4. Sample Reduction by Coning and Quartering:\nThe gross composite sample is reduced to ~1.5 kg by quartering:\n- The material is coned and flattened uniformly into a circular cake.\n- Divided into four equal quarters using a wooden or metal cross.\n- Two diagonally opposite quadrants are discarded; the remaining two are thoroughly remixed.\n- The cycle is repeated until approximately 1.5 kg remains.\n\n5. Preparation of Triplicate Official Portions:\nThe 1.5 kg sample is divided into three identical sealed portions (~400-500 g each) placed in airtight polyethylene bags inside cloth or tin containers:\n- Portion 1: Sent to the State Notified Fertilizer Testing Laboratory with Form J.\n- Portion 2: Handed to the dealer/manufacturer against formal acknowledgment.\n- Portion 3 (Referee Sample): Retained under the Inspector's official seal for reference/court testing if challenged.",
      "outlinePoints": [
        "Schedule II of the Fertilizer (Control) Order (FCO), 1985, establishes rigid, legally binding sampling protocols that Fe",
        "1. Lot Identification and Scale of Sampling:",
        "A 'lot' constitutes a identifiable consignment of fertilizer of homogeneous grade and batch. Sampling bags are selected ",
        "- Up to 10 bags: All bags sampled (100%)."
      ]
    },
    {
      "id": "SOL203-U3-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "questionText": "What is 'Neem Coated Urea' (NCU)? Explain its manufacturing specifications under FCO and its agronomic and economic benefits.",
      "contextScenario": "",
      "modelAnswer": "Neem Coated Urea (NCU) is agricultural fertilizer-grade prilled or granular urea coated with pure cold-pressed neem seed oil (Azadirachta indica) to regulate nitrogen release in soil.\n\nManufacturing and FCO Specifications:\n- Statutory Status: In May 2015, the Ministry of Chemicals and Fertilizers mandated that 100% of indigenous and imported subsidized agricultural urea in India must be neem coated.\n- FCO Specifications:\n  1. Total Nitrogen: Minimum 46.0% by weight.\n  2. Neem Oil Content: Minimum 0.035% (350 ppm) to 0.05% (500 ppm) by weight.\n  3. Biuret Content: Maximum 1.5% by weight.\n  4. Moisture Content: Maximum 1.0% by weight.\n  5. Uniformity of coating: Tested using thin-layer chromatography (TLC) to detect azadirachtin/nimbin markers.\n\nAgronomic Benefits:\n1. Nitrification Inhibition: Triterpenoids (nimbin, nimbidin, azadirachtin) inhibit Nitrosomonas bacteria, slowing the oxidation of ammonium (NH4+) to nitrate (NO3-). Nitrogen remains in the cationic NH4+ form bound to clay particles.\n2. Reduced Nutrient Losses: Mitigates nitrate leaching during monsoons and reduces nitrous oxide (N2O) emissions from denitrification.\n3. Enhanced Nitrogen Use Efficiency (NUE): Increases NUE from ~30-35% up to 45-50%, allowing a 10-15% reduction in overall urea consumption with equivalent or higher crop yields.\n\nEconomic and Strategic Benefits:\n- Eliminates Illicit Industrial Diversion: Uncoated subsidized urea was historically diverted to industrial uses (plywood resins, textiles, dairy adulteration). The bitter taste, pungent aroma, and oil coating make NCU unviable for industrial processing, ensuring subsidized fertilizer reaches farmers.",
      "outlinePoints": [
        "Neem Coated Urea (NCU) is agricultural fertilizer-grade prilled or granular urea coated with pure cold-pressed neem seed",
        "Manufacturing and FCO Specifications:",
        "- Statutory Status: In May 2015, the Ministry of Chemicals and Fertilizers mandated that 100% of indigenous and imported",
        "- FCO Specifications:"
      ]
    },
    {
      "id": "SOL203-U3-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "questionText": "Describe the analytical procedure for determining water-soluble and citrate-soluble P2O5 in complex fertilizers using the spectrophotometric or volumetric quimociac method.",
      "contextScenario": "",
      "modelAnswer": "Phosphorus in phosphatic and complex fertilizers (SSP, DAP, NPK) is partitioned into water-soluble, citrate-soluble, and total P2O5 fractions to determine agronomic bioavailability.\n\n1. Extraction Protocols:\n- Water-Soluble P2O5 Extraction:\n  * 1.000 g of finely ground fertilizer is placed on a Whatman No. 2 filter paper in a glass funnel.\n  * The sample is washed with successive small aliquots of distilled water into a 500 ml volumetric flask, allowing each washing to pass through before adding the next, collecting ~450 ml.\n  * Dilute to volume with distilled water (Solution A).\n- Citrate-Soluble P2O5 Extraction:\n  * The filter paper containing the water-insoluble residue is dropped into a 250 ml flask containing 100 ml of neutral ammonium citrate solution (pH 7.0 at 65\u00b0C).\n  * Stoppered and shaken continuously in a thermostatically controlled water bath at 65\u00b0C for exactly 1 hour.\n  * Filtered rapidly through Whatman No. 5 filter paper into a 500 ml flask, washed with 5% ammonium nitrate, and made up to volume (Solution B).\n\n2. Analytical Quantification via Quimociac Method:\nThe volumetric quimociac (quinoline phosphomolybdate) method is the definitive standard under FCO Schedule II.\n\nReagents:\n- Quimociac Reagent: Prepared by dissolving 70 g sodium molybdate dihydrate in 150 ml water, 60 g citric acid monohydrate in 150 ml water and 85 ml concentrated HNO3. Add 5 ml synthetic quinoline to 100 ml water and 35 ml concentrated HNO3, mix all components, dilute to 1 liter, and filter.\n\nReaction and Precipitation:\n- A 25 ml aliquot of Solution A (or Solution B) is transferred into a 500 ml beaker and acidified with 20 ml concentrated HNO3.\n- Dilute to 100 ml, bring to gentle boiling, and add 50 ml of Quimociac reagent.\n- Boil for 1 minute; a heavy, dense yellow crystalline precipitate of quinoline phosphomolybdate forms:\n  H3PO4 + 12 H2MoO4 + 3 C9H7N -> (C9H7N)3\u00b7H3[PO4\u00b712MoO3] + 12 H2O\n- Cool to room temperature.\n\nFiltration and Titration:\n- The precipitate is filtered under suction through a Gooch crucible or paper pulp pad and washed free of acid with water.\n- Transfer precipitate and filter pad back into the beaker. Add an excess known volume (e.g., 50 ml) of standardized 0.5 N NaOH to dissolve the precipitate:\n  (C9H7N)3\u00b7H3[PO4\u00b712MoO3] + 26 NaOH -> 12 Na2MoO4 + Na2HPO4 + 3 C9H7N + 14 H2O\n- Back-titrate excess unreacted NaOH against standardized 0.5 N HCl using phenolphthalein-thymol blue indicator until the violet color discharges to pale yellow.\n\nCalculation:\nP2O5 (%) = [(V_NaOH * N_NaOH - V_HCl * N_HCl) * 0.001366 * (Total Extract Vol / Aliquot Vol) * 100] / Sample Weight (g)\nWhere 1 ml of 0.5 N NaOH = 0.001366 g P2O5.",
      "outlinePoints": [
        "Phosphorus in phosphatic and complex fertilizers (SSP, DAP, NPK) is partitioned into water-soluble, citrate-soluble, and",
        "1. Extraction Protocols:",
        "- Water-Soluble P2O5 Extraction:",
        "* 1.000 g of finely ground fertilizer is placed on a Whatman No. 2 filter paper in a glass funnel."
      ]
    },
    {
      "id": "SOL203-U3-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "questionText": "What is Biuret? How is it formed during urea production, why is it agronomically hazardous, and how is it quantified in the laboratory?",
      "contextScenario": "",
      "modelAnswer": "Biuret (imidodicarbonic diamide: NH2-CO-NH-CO-NH2) is a toxic organic condensation byproduct formed during the industrial manufacturing and prilling of urea.\n\nFormation Mechanism:\nDuring urea synthesis, two molecules of molten urea condense at temperatures exceeding 133\u00b0C with the liberation of ammonia gas:\n2 CO(NH2)2 -> NH2-CO-NH-CO-NH2 (Biuret) + NH3(g)\nExcessive residence time in vacuum concentration evaporators and prilling towers increases biuret accumulation.\n\nAgronomic Hazards:\n- Phytotoxicity: Biuret is a potent plant metabolic poison. It inhibits protein synthesis and disrupts nitrogen assimilation in germinating seedlings.\n- Seed Scorching: In-furrow placement of high-biuret urea causes seedling mortality and stunted primary roots.\n- Foliar Chlorosis: In foliar sprays, biuret causes irreversible tip burn, marginal chlorosis, and mottled yellowing on citrus, potato, coffee, and papaya.\n- Statutory Limits: FCO limits biuret to a maximum of 1.5% by weight for soil application and 0.4% for foliar spray grade.\n\nLaboratory Quantification (Spectrophotometric Biuret Method):\n1. Principle: In an alkaline tartrate medium, biuret coordinates with cupric ions (Cu2+) to form an intensely violet-purple coordination complex [Cu(biuret)2]^2-.\n2. Reagents: Alkaline tartrate solution (Rochelle salt + NaOH) and copper sulfate solution (CuSO4\u00b75H2O).\n3. Procedure: 5.0 g of urea is dissolved in water and brought to 100 ml. An aliquot is treated with alkaline tartrate and copper sulfate in a 50 ml volumetric flask. After 15 minutes of color development, absorbance is measured at 550 nm on a UV-Vis spectrophotometer against a reagent blank and quantified from a standard biuret calibration curve.",
      "outlinePoints": [
        "Biuret (imidodicarbonic diamide: NH2-CO-NH-CO-NH2) is a toxic organic condensation byproduct formed during the industria",
        "During urea synthesis, two molecules of molten urea condense at temperatures exceeding 133\u00b0C with the liberation of ammo",
        "2 CO(NH2)2 -> NH2-CO-NH-CO-NH2 (Biuret) + NH3(g)",
        "Excessive residence time in vacuum concentration evaporators and prilling towers increases biuret accumulation."
      ]
    },
    {
      "id": "SOL203-U3-SUB09",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "questionText": "Compare Straight Fertilizers, Complex Fertilizers, and Mixed Fertilizers with respect to homogeneity, segregation during transport, nutrient ratio flexibility, and ease of storage.",
      "contextScenario": "",
      "modelAnswer": "Chemical fertilizers are distributed and applied as straight, complex, or physically mixed formulations, each presenting distinct physical and agronomic characteristics.\n\n1. Chemical Homogeneity and Granule Integrity:\n- Straight Fertilizers: Chemically pure individual salts (urea, MOP, SSP). Homogeneous within their own chemical entity, delivering only one primary element.\n- Complex Fertilizers: Chemically synthesized multi-nutrient fertilizers (e.g., DAP, 10:26:26, 12:32:16). Every single granule possesses an identical, homogeneous chemical composition throughout the mass.\n- Mixed Fertilizers (Dry Blends): Heterogeneous physical mixtures prepared by mechanically blending separate straight fertilizers. Granules of different ingredients remain physically distinct.\n\n2. Segregation During Transport and Handling:\n- Straight Fertilizers: Negligible segregation because particles are of uniform chemical identity.\n- Complex Fertilizers: Zero segregation during bagging, road transport, or mechanical distribution because each granule contains all guaranteed nutrients in fixed proportions.\n- Mixed Fertilizers: High risk of particle segregation and settling during transit due to variations in density, particle size, and shape among constituent salts (e.g., dense MOP settles while light urea floats), resulting in uneven field distribution.\n\n3. Flexibility of Nutrient Ratios:\n- Straight Fertilizers: Maximum flexibility. Farmers can combine individual bags in exact proportions tailored to specific soil test recommendations.\n- Complex Fertilizers: Rigid, fixed nutrient ratios (e.g., 18:46:0 or 12:32:16) manufactured in centralized chemical plants. Ratios cannot be altered to match unique local soil fertility variations.\n- Mixed Fertilizers: High flexibility. Local blending units can formulate custom NPK grades according to specific district or crop requirements.\n\n4. Storage and Critical Relative Humidity:\n- Straight Fertilizers: Variable; urea is hygroscopic, while ammonium sulfate is stable.\n- Complex Fertilizers: High storage stability; granules are coated with anti-caking agents, resisting caking under humid storage.\n- Mixed Fertilizers: Poor storage stability; contact between incompatible salts (such as urea + SSP) causes spontaneous liquid release and severe caking unless applied immediately.",
      "outlinePoints": [
        "Chemical fertilizers are distributed and applied as straight, complex, or physically mixed formulations, each presenting",
        "1. Chemical Homogeneity and Granule Integrity:",
        "- Straight Fertilizers: Chemically pure individual salts (urea, MOP, SSP). Homogeneous within their own chemical entity,",
        "- Complex Fertilizers: Chemically synthesized multi-nutrient fertilizers (e.g., DAP, 10:26:26, 12:32:16). Every single g"
      ]
    },
    {
      "id": "SOL203-U3-SUB10",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "questionText": "A fertilizer consignment labeled as DAP (18-46-0) is suspected of adulteration with rock phosphate and gypsum. Explain laboratory tests to detect this adulteration.",
      "contextScenario": "",
      "modelAnswer": "Adulteration of high-analysis DAP (18-46-0) with cheaper, low-analysis rock phosphate, sand, and gypsum (calcium sulphate) is a significant commercial fraud. A systematic laboratory investigation confirms genuine compliance versus fraudulent substitution.\n\n1. Rapid Qualitative Spot Tests:\n- Cold Water Dissolution Test:\n  * Genuine DAP is completely water-soluble (>90% dissolves rapidly in cold water, leaving minimal insoluble residue).\n  * If the sample contains rock phosphate or gypsum, a heavy, gritty insoluble sediment settles at the bottom of the beaker.\n- Lime / Alkali Heating Test:\n  * Rub a pinch of DAP with slaked lime [Ca(OH)2] or moist NaOH on the palm.\n  * Genuine DAP releases pungent, eye-watering ammonia gas instantly: (NH4)2HPO4 + Ca(OH)2 -> CaHPO4 + 2 NH3(g) + 2 H2O.\n  * Spurious adulterants (rock phosphate/gypsum) fail to evolve ammonia.\n- Gentle Heating on an Iron Plate:\n  * Genuine DAP swells and bubbles under a flame, evolving ammonia.\n  * Sand, rock phosphate, and gypsum remain inert and do not puff.\n\n2. Quantitative Confirmatory Testing (FCO Protocols):\n- Water-Soluble vs Total P2O5:\n  * Genuine DAP: Minimum 46.0% total P2O5, of which at least 41.0% must be water-soluble (water solubility > 89%).\n  * Rock Phosphate Adulteration: Total P2O5 may appear moderate (e.g., 25-30%), but water-soluble P2O5 drops near zero (<2%), confirming unreacted rock phosphate.\n- Total Ammoniacal Nitrogen (Kjeldahl Method):\n  * Genuine DAP contains minimum 18.0% total nitrogen entirely in ammoniacal form.\n  * Adulterated samples yield significantly lower N (often 4-10% N).\n- Sulfate and Calcium Quantification:\n  * Genuine DAP contains negligible sulfate (<1% S) and no native gypsum.\n  * High sulfate precipitate with BaCl2 and high calcium content confirms gypsum blending.\n\nLegal Conclusion:\nIf water-soluble P2O5 is <41.0% and total N is <17.5%, the sample fails statutory FCO specifications. Detection of inert mineral filler constitutes criminal adulteration under the Essential Commodities Act, 1955.",
      "outlinePoints": [
        "Adulteration of high-analysis DAP (18-46-0) with cheaper, low-analysis rock phosphate, sand, and gypsum (calcium sulphat",
        "1. Rapid Qualitative Spot Tests:",
        "- Cold Water Dissolution Test:",
        "* Genuine DAP is completely water-soluble (>90% dissolves rapidly in cold water, leaving minimal insoluble residue)."
      ]
    },
    {
      "id": "SOL203-U3-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "questionText": "What is the equivalent acidity and basicity of fertilizers? Explain how they are calculated and give two examples of each.",
      "contextScenario": "",
      "modelAnswer": "Equivalent acidity and equivalent basicity are standardized quantitative measures of the residual acidifying or alkalizing effects that chemical fertilizers produce in soil after plant uptake and microbial transformation.\n\n1. Equivalent Acidity:\n- Definition: The number of parts by weight of pure calcium carbonate (CaCO3) required to neutralize the residual acidity produced in the soil by 100 parts by weight of a given fertilizer.\n- Biochemical Cause: Oxidation of ammoniacal nitrogen (NH4+) into nitrate (NO3-) by nitrifying bacteria releases two hydrogen ions per ammonium ion:\n  NH4+ + 2 O2 -> NO3- + H2O + 2 H+\n  These H+ ions displace basic cations (Ca2+, Mg2+) from the soil exchange complex.\n- Examples:\n  * Ammonium Sulphate: Equivalent acidity = 110 (100 kg of ammonium sulphate requires 110 kg CaCO3 to neutralize acid residues).\n  * Ammonium Chloride: Equivalent acidity = 128.\n  * Urea: Equivalent acidity = 80 to 85.\n\n2. Equivalent Basicity:\n- Definition: The residual alkalinity produced in soil by 100 parts by weight of a fertilizer, expressed in terms of parts by weight of calcium carbonate (CaCO3) equivalent.\n- Biochemical Cause: When plant roots absorb nitrate anions (NO3-), they excrete bicarbonate (HCO3-) or hydroxyl (OH-) ions to maintain electroneutrality, leaving an alkaline residue.\n- Examples:\n  * Sodium Nitrate (NaNO3): Equivalent basicity = 29 (100 kg produces neutralizing power equal to 29 kg CaCO3).\n  * Calcium Cyanamide: Equivalent basicity = 63.\n  * Basic Slag: Equivalent basicity = 50 to 70.\n\nAgronomic Significance:\nIn acidic soils, fertilizers with high equivalent basicity or neutral fertilizers (CAN) are preferred to prevent further pH drop, whereas in sodic/alkaline soils, acid-forming fertilizers (ammonium sulphate) help lower soil pH.",
      "outlinePoints": [
        "Equivalent acidity and equivalent basicity are standardized quantitative measures of the residual acidifying or alkalizi",
        "1. Equivalent Acidity:",
        "- Definition: The number of parts by weight of pure calcium carbonate (CaCO3) required to neutralize the residual acidit",
        "- Biochemical Cause: Oxidation of ammoniacal nitrogen (NH4+) into nitrate (NO3-) by nitrifying bacteria releases two hyd"
      ]
    },
    {
      "id": "SOL203-U3-SUB12",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "questionText": "Explain the role and application of specialty 100% water-soluble fertilizers in micro-irrigation (fertigation) and greenhouse horticulture.",
      "contextScenario": "",
      "modelAnswer": "Water-soluble specialty fertilizers (WSFs) are technical-grade, highly refined, crystalline salts manufactured with exceptional purity and near-instant water solubility, formulated specifically for drip fertigation and foliar feeding.\n\n1. Distinct Physical and Chemical Characteristics:\n- 100% Complete Solubility: Dissolve completely without leaving insoluble sediment, sand, or insoluble coatings that clog micro-emitters and narrow drip orifices.\n- Extremely Low Salt Index and Free of Harmful Ions: Formulated without sodium (Na+), heavy metals, or chloride (Cl-), preventing leaf scorch and salt accumulation.\n- Rapid Nutrient Absorption: Nutrients exist in readily absorbable ionic forms (NO3-, H2PO4-, K+, chelated micronutrients).\n\n2. Popular Commercial Grades and Agricultural Uses:\n- 19:19:19 (Polyfeed / General NPK): Balanced grade applied during early vegetative and vegetative growth stages to foster vigorous root and canopy development.\n- 12:61:0 (Monoammonium Phosphate - MAP): High-phosphorus grade applied at planting and root establishment to promote lateral root formation.\n- 0:52:34 (Monopotassium Phosphate - MKP): Nitrogen-free grade applied during flowering, fruit set, and maturation to enhance blossom retention and sugar synthesis.\n- 13:0:45 (Potassium Nitrate): Applied during fruit bulking and development to improve fruit size, color, firmness, and shelf life.\n\n3. Agronomic Advantages in Drip Fertigation:\n- High Nutrient Use Efficiency: Fertilizer is delivered directly into the active root zone in small, frequent doses synchronized with daily crop demand, boosting NUE to 80-90%.\n- Labor and Energy Savings: Eliminates manual fertilizer broadcasting, applying nutrients seamlessly through the pressurized irrigation network.\n- Controlled Greenhouse Environments: Enables precise control over electrical conductivity (EC) and pH of the irrigation water, essential for soilless hydroponics and polyhouse cultivation.",
      "outlinePoints": [
        "Water-soluble specialty fertilizers (WSFs) are technical-grade, highly refined, crystalline salts manufactured with exce",
        "1. Distinct Physical and Chemical Characteristics:",
        "- 100% Complete Solubility: Dissolve completely without leaving insoluble sediment, sand, or insoluble coatings that clo",
        "- Extremely Low Salt Index and Free of Harmful Ions: Formulated without sodium (Na+), heavy metals, or chloride (Cl-), p"
      ]
    },
    {
      "id": "SOL203-U3-SUB13",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "questionText": "Describe the composition, manufacturing principles, and agronomic utility of fortified and customized fertilizers recognized under FCO.",
      "contextScenario": "",
      "modelAnswer": "Fortified and customized fertilizers are modern specialty formulations designed to correct multi-nutrient deficiencies simultaneously and enhance nutrient efficiency.\n\n1. Fortified Fertilizers:\n- Definition: Standard conventional fertilizers enriched with secondary or micronutrients during the manufacturing process to deliver balanced nutrition.\n- Recognized Examples under FCO:\n  * Zincated Urea: Prilled urea coated or fortified with 2.0% Zinc (Zn).\n  * Boronated Single Superphosphate: SSP enriched with 0.18% to 0.20% Boron (B).\n  * Zincated DAP: DAP fortified with 0.5% Zn.\n- Agronomic Utility: Indian soils suffer widespread multi-micronutrient deficiencies (over 40% soils deficient in Zn and 20% in B). Fortification ensures uniform, microscopic distribution across the field, eliminating the risk of uneven manual broadcasting of tiny micronutrient doses.\n\n2. Customized Fertilizers:\n- Definition: Region-, crop-, and soil-specific multi-nutrient formulations manufactured through steam granulation or chemical blending based on systematic soil test fertility mapping.\n- Composition: Contain primary (N, P, K), secondary (S, Mg), and micronutrients (Zn, B) in precise proportions customized for a target crop in a specific agro-climatic zone.\n- FCO Regulatory Criteria:\n  * Must be 100% granular with at least 90% granules between 1 mm and 4 mm.\n  * Minimum total nutrient content must not be less than 30% by weight.\n  * Moisture content must not exceed 1.5%.\n- Agronomic Utility: Supplies all crop-limiting nutrients in a single application, prevents imbalanced fertilization, reduces farmer application costs, and improves crop yields by 15-25%.",
      "outlinePoints": [
        "Fortified and customized fertilizers are modern specialty formulations designed to correct multi-nutrient deficiencies s",
        "1. Fortified Fertilizers:",
        "- Definition: Standard conventional fertilizers enriched with secondary or micronutrients during the manufacturing proce",
        "- Recognized Examples under FCO:"
      ]
    },
    {
      "id": "SOL203-U3-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Official sampling techniques from bagged lots, slotted triers, and Form J execution",
      "questionText": "Compare Water-Soluble, Citrate-Soluble, and Citrate-Insoluble phosphatic fertilizers with respect to chemical compounds, soil type suitability, and release kinetics.",
      "contextScenario": "",
      "modelAnswer": "Phosphatic fertilizers are classified into three distinct categories based on their chemical solubility, which determines their release kinetics and suitability for different soil types.\n\n1. Water-Soluble Phosphatic Fertilizers:\n- Chemical Compounds: Monocalcium phosphate monohydrate [Ca(H2PO4)2\u00b7H2O], Monoammonium phosphate [MAP: NH4H2PO4], and Diammonium phosphate [DAP: (NH4)2HPO4].\n- Commercial Fertilizers: SSP (16% P2O5), TSP (46% P2O5), DAP (46% P2O5).\n- Release Kinetics: Instantaneous dissolution upon contact with soil moisture, releasing orthophosphate (H2PO4-) directly into soil solution.\n- Soil Suitability: Highly effective on neutral, neutral-alkaline, and slightly acidic soils (pH 6.0 to 7.5). In strongly acidic soils (pH < 5.5), high iron and aluminum cause rapid chemical fixation into insoluble strengite and variscite.\n\n2. Citrate-Soluble Phosphatic Fertilizers:\n- Chemical Compounds: Dicalcium phosphate dihydrate [CaHPO4\u00b72H2O], Tetracalcium phosphate [Ca4P2O9], and Silicophosphates.\n- Commercial Fertilizers: Dicalcium phosphate (34-39% P2O5), Basic slag (14-18% P2O5), Rhenania phosphate.\n- Release Kinetics: Insoluble in pure water; dissolves slowly in weak organic acids exuded by plant roots and in neutral ammonium citrate solution.\n- Soil Suitability: Exceptional performance in moderately acidic soils (pH 4.5 to 5.5). The acidic soil solution accelerates dissolution, providing sustained phosphorus throughout crop growth without rapid fixation, while accompanying calcium raises soil pH.\n\n3. Insoluble / Citrate-Insoluble Phosphatic Fertilizers:\n- Chemical Compounds: Tricalcium phosphate [Ca3(PO4)2], Fluorapatite [Ca10(PO4)6F2], Hydroxyapatite.\n- Commercial Fertilizers: Rock phosphate (18-32% P2O5), Raw bone meal (20-25% P2O5).\n- Release Kinetics: Extremely slow release over several years; requires intense biological weathering and high proton concentrations for dissolution.\n- Soil Suitability: Exclusively effective in strongly acidic soils (pH < 5.5) and long-duration plantation crops (tea, coffee, rubber) or wetland rice paddies with green manure.",
      "outlinePoints": [
        "Phosphatic fertilizers are classified into three distinct categories based on their chemical solubility, which determine",
        "1. Water-Soluble Phosphatic Fertilizers:",
        "- Chemical Compounds: Monocalcium phosphate monohydrate [Ca(H2PO4)2\u00b7H2O], Monoammonium phosphate [MAP: NH4H2PO4], and Di",
        "- Commercial Fertilizers: SSP (16% P2O5), TSP (46% P2O5), DAP (46% P2O5)."
      ]
    },
    {
      "id": "SOL203-U3-SUB15",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Classification of chemical fertilizers: straight, complex, mixed, and customized grades",
      "questionText": "Explain the step-by-step procedure for determining moisture content in chemical fertilizers under the Fertilizer Control Order, distinguishing between oven drying and vacuum desiccator methods.",
      "contextScenario": "",
      "modelAnswer": "Moisture determination in chemical fertilizers is critical because excess free water accelerates bag caking, promotes chemical hydrolysis, and inflates commercial weight.\n\n1. Standard Oven-Drying Method (For Heat-Stable Fertilizers):\n- Applicable To: Non-volatile, heat-stable fertilizers such as Potassium chloride (MOP), Potassium sulphate (SOP), and Single superphosphate.\n- Procedure:\n  * Weigh accurately 5.000 g of the prepared fertilizer sample in a pre-weighed, dried porcelain or glass weighing dish fitted with a ground glass lid (Tare weight W1).\n  * Spread the sample in a uniform thin layer.\n  * Place dish and open lid in a thermostatically controlled drying oven maintained strictly at 105\u00b0C \u00b1 2\u00b0C for 5 hours (or until constant mass).\n  * Cover dish, transfer to a desiccator containing activated silica gel, cool for 30 minutes, and weigh (W2).\n- Calculation:\n  Moisture (%) = [(Sample Weight - Dry Sample Weight) / Sample Weight] * 100.\n\n2. Vacuum Desiccator Method (For Heat-Sensitive Fertilizers):\n- Applicable To: Fertilizers that decompose, volatilize, or lose structural water of crystallization at 105\u00b0C, such as Urea (which decomposes and forms biuret), Diammonium phosphate (which loses ammonia), and Calcium ammonium nitrate.\n- Principle: Water is removed at room temperature under deep vacuum over concentrated sulfuric acid or activated phosphorus pentoxide (P2O5) desiccant.\n- Procedure:\n  * Accurately weigh 2.000 to 5.000 g of finely ground fertilizer in a shallow glass dish.\n  * Place the dish in a vacuum desiccator containing concentrated H2SO4 or active P2O5 desiccant.\n  * Evacuate the desiccator using a vacuum pump to an internal pressure below 25-50 mm of mercury (Hg).\n  * Maintain under vacuum at room temperature (25-30\u00b0C) for 24 hours.\n  * Release vacuum slowly through a calcium chloride drying tube, cover the dish, and weigh.\n- Advantage: Provides true free moisture values without thermal decomposition of urea or volatilization of ammoniacal nitrogen.",
      "outlinePoints": [
        "Moisture determination in chemical fertilizers is critical because excess free water accelerates bag caking, promotes ch",
        "1. Standard Oven-Drying Method (For Heat-Stable Fertilizers):",
        "- Applicable To: Non-volatile, heat-stable fertilizers such as Potassium chloride (MOP), Potassium sulphate (SOP), and S",
        "* Weigh accurately 5.000 g of the prepared fertilizer sample in a pre-weighed, dried porcelain or glass weighing dish fi"
      ]
    },
    {
      "id": "SOL203-U3-SUB16",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Nitrogenous fertilizers: Urea synthesis, biuret formation, and Neem Coated Urea (NCU)",
      "questionText": "Describe the powers and statutory obligations of a Fertilizer Inspector during inspection, search, and seizure under Clause 27 and 28 of FCO, 1985.",
      "contextScenario": "",
      "modelAnswer": "Under Clauses 27 and 28 of the Fertilizer (Control) Order (FCO), 1985, read with Section 3 of the Essential Commodities Act (ECA), 1955, the State Government appoints qualified technical officers as Fertilizer Inspectors.\n\nStatutory Powers of a Fertilizer Inspector:\n1. Power of Entry and Inspection: May enter, inspect, and search any premises where fertilizers are manufactured, stored, packed, distributed, or offered for sale, as well as inspect transport vehicles and vessels.\n2. Power to Draw Official Samples: Entitled to inspect fertilizer stock, verify batch records, and draw official representative samples following Schedule II protocols.\n3. Power to Stop and Examine Vehicles: Can stop, detain, and search any carrier, vehicle, or vessel suspected of transporting unauthorized, sub-standard, or adulterated fertilizers.\n4. Power of Seizure: If an inspector has reason to believe that any provision of the FCO has been contravened, they may seize the stock of fertilizer along with packaging, containers, invoices, and accounting registers.\n5. Prohibition of Sale: May issue a formal stop-sale order prohibiting a dealer from selling any stock for up to 21 days pending laboratory assay.\n\nStatutory Obligations and Procedural Rules:\n- Official Identification: Must produce official credentials and authorization upon entry.\n- Presence of Dealer: Samples and inspections must be conducted in the presence of the dealer or custodian.\n- Execution of Form J: Must prepare official sampling memorandum Form J in duplicate, recording batch numbers, date, and signatures of both parties.\n- Triplicate Sealing: Must divide the composite sample into three identical parts, sealing each with the inspector's official wax seal in the presence of the dealer.\n- Prompt Dispatch: Must dispatch Portion 1 to the notified laboratory within 7 days of collection, hand Portion 2 to the dealer, and retain Portion 3 as referee stock.",
      "outlinePoints": [
        "Under Clauses 27 and 28 of the Fertilizer (Control) Order (FCO), 1985, read with Section 3 of the Essential Commodities ",
        "Statutory Powers of a Fertilizer Inspector:",
        "1. Power of Entry and Inspection: May enter, inspect, and search any premises where fertilizers are manufactured, stored",
        "2. Power to Draw Official Samples: Entitled to inspect fertilizer stock, verify batch records, and draw official represe"
      ]
    },
    {
      "id": "SOL203-U3-SUB17",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Ammonium sulphate, calcium ammonium nitrate (CAN), and equivalent acidity concepts",
      "questionText": "Explain the analytical determination of total potassium in NPK complex fertilizers using the Sodium Tetraphenylboron (NaTPB) volumetric method.",
      "contextScenario": "",
      "modelAnswer": "The Sodium Tetraphenylboron (NaTPB) method is the definitive standard analytical method recognized under the Fertilizer (Control) Order for determining potassium in chemical fertilizers.\n\n1. Principle of the Method:\nPotassium ions (K+) in solution react quantitatively with sodium tetraphenylboron [NaB(C6H5)4] in an alkaline EDTA medium to form an extremely insoluble white precipitate of potassium tetraphenylboron:\nK+ + [B(C6H5)4]- -> KB(C6H5)4(s)\nTo eliminate interference from ammonium (NH4+) ions (which also precipitate with NaTPB), formaldehyde is added to bind NH4+ into hexamethylenetetramine (urotropine). An excess known volume of NaTPB is added, and the unreacted excess NaTPB is back-titrated against standard cetyltrimethylammonium bromide (CTAB) or benzethonium chloride using Clayton Yellow indicator.\n\n2. Reagents:\n- Sodium Tetraphenylboron (NaTPB) Solution (~0.05 M): Dissolve 17 g NaTPB in 800 ml water, clarify with Al(OH)3, filter, and standardize.\n- Cetyltrimethylammonium Bromide (CTAB) Solution (~0.05 M).\n- Clayton Yellow (Titan Yellow) Indicator Solution (0.04% w/v).\n- Alkaline EDTA Solution: 40 g disodium EDTA and 100 ml 40% NaOH per liter.\n- Formaldehyde Solution (37%).\n\n3. Analytical Procedure:\n- Sample Dissolution: 2.500 g of ground fertilizer is boiled with 150 ml water for 30 minutes, cooled, transferred to a 250 ml volumetric flask, and diluted to volume.\n- Aliquot Treatment: Pipette a 25 ml aliquot into a 100 ml volumetric flask.\n- Elimination of Interferences: Add 10 ml alkaline EDTA and 5 ml formaldehyde to complex heavy metals and bind ammonium.\n- Precipitation: Add exactly 25.0 ml standardized NaTPB solution with constant swirling. Dilute to 100 ml, mix, and allow precipitate to settle.\n- Filtration: Filter through dry Whatman No. 40 filter paper, discarding the first 15 ml of filtrate.\n- Titration: Pipette 50 ml of the clear filtrate (representing half the unreacted NaTPB) into an Erlenmeyer flask. Add 1 ml Clayton Yellow indicator.\n- Titrate against standard CTAB solution until color shifts from yellow to salmon-pink.\n\n4. Calculation:\nK2O (%) = [(V_NaTPB * F_NaTPB - 2 * V_CTAB * F_CTAB) * 0.002355 * Dilution Factor * 100] / Sample Weight (g).",
      "outlinePoints": [
        "The Sodium Tetraphenylboron (NaTPB) method is the definitive standard analytical method recognized under the Fertilizer ",
        "1. Principle of the Method:",
        "Potassium ions (K+) in solution react quantitatively with sodium tetraphenylboron [NaB(C6H5)4] in an alkaline EDTA mediu",
        "K+ + [B(C6H5)4]- -> KB(C6H5)4(s)"
      ]
    },
    {
      "id": "SOL203-U3-SUB18",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Phosphatic fertilizers: SSP, TSP, DAP, rock phosphate, and water/citrate solubility",
      "questionText": "Compare single nutrient fertilizers with complex fertilizers regarding manufacturing logistics, storage behavior, and field distribution efficiency.",
      "contextScenario": "",
      "modelAnswer": "Modern agricultural supply chains utilize both single nutrient (straight) fertilizers and multi-nutrient complex fertilizers, each presenting distinct economic and logistic characteristics.\n\n1. Manufacturing Logistics and Capital Investment:\n- Straight Fertilizers: Require dedicated single-stream manufacturing facilities (e.g., Haber-Bosch ammonia/urea plants; sulfuric acid-rock phosphate SSP dens). Production is simple, but supply chains must manage multiple separate products (urea, SSP, MOP) to provide balanced plant nutrition.\n- Complex Fertilizers: Require sophisticated, capital-intensive granulation plants, pipe-reactors, and slurry ammoniation systems (e.g., Odda process or nitrophosphate routes). However, combining nitrogen, phosphorus, and potassium into a single product streamlines factory-to-farm transport.\n\n2. Storage Behavior and Hygroscopicity:\n- Straight Fertilizers: Disparate storage behaviors; urea is hygroscopic (CRH 72%) and prone to biuret formation under heat; MOP is stable; SSP can cake and release free acid that degrades packaging bags. Mixing straight fertilizers in the warehouse is impossible due to severe hygroscopic incompatibilities.\n- Complex Fertilizers: Granules undergo conditioning with chemical anti-caking coatings (paraffin wax, fatty amines) that lower moisture uptake, providing superior shelf life and resisting caking during monsoon storage.\n\n3. Transport and Bagging Economy:\n- Straight Fertilizers: Require separate transportation, warehouse handling, and bagging for three individual products, tripling handling and freight costs.\n- Complex Fertilizers: High nutrient analysis (e.g., 10:26:26 supplies 62% total plant nutrients) reduces freight tonnage, warehouse storage space, and handling labor by 30-50%.\n\n4. Field Distribution and Application Efficiency:\n- Straight Fertilizers: Farmers must manually mix three different fertilizers in the field or perform three separate application passes, often resulting in uneven nutrient distribution.\n- Complex Fertilizers: Every single granule delivers balanced, uniform N, P, and K directly to crop roots in a single pass, ensuring uniform crop growth.",
      "outlinePoints": [
        "Modern agricultural supply chains utilize both single nutrient (straight) fertilizers and multi-nutrient complex fertili",
        "1. Manufacturing Logistics and Capital Investment:",
        "- Straight Fertilizers: Require dedicated single-stream manufacturing facilities (e.g., Haber-Bosch ammonia/urea plants;",
        "- Complex Fertilizers: Require sophisticated, capital-intensive granulation plants, pipe-reactors, and slurry ammoniatio"
      ]
    },
    {
      "id": "SOL203-U3-SUB19",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Potassic fertilizers: Muriate of Potash (MOP) vs Sulphate of Potash (SOP) and chloride sensitivity",
      "questionText": "Discuss the chemistry and implications of chemical incompatibilities when physically mixing straight fertilizers on the farm, citing three specific incompatible combinations.",
      "contextScenario": "",
      "modelAnswer": "While physical mixing of straight fertilizers offers flexibility in formulating custom nutrient ratios, certain fertilizer combinations trigger adverse chemical reactions that cause nutrient loss, physical deterioration, or conversion of available nutrients into insoluble forms.\n\n1. Incompatible Combination 1: Urea with Single Superphosphate (SSP):\n- Chemical Reaction:\n  Monocalcium phosphate monohydrate in SSP contains water of crystallization. When blended with urea, urea displaces this water of crystallization, forming an adduct and releasing free liquid water:\n  Ca(H2PO4)2\u00b7H2O + 4 CO(NH2)2 -> Ca(H2PO4)2\u00b74CO(NH2)2 + H2O\n- Physical Consequence: The mixture rapidly absorbs atmospheric moisture and turns into a sticky, unmanageable slush within a few hours. It cannot be applied through seed drills or broadcast by hand.\n\n2. Incompatible Combination 2: Ammonium Fertilizers with Alkaline / Liming Materials:\n- Components: Ammonium sulphate [(NH4)2SO4] or DAP mixed with Calcium hydroxide [Ca(OH)2], quicklime (CaO), basic slag, or wood ash.\n- Chemical Reaction:\n  Free hydroxide (OH-) ions displace ammonia from the ammonium cation, releasing gaseous ammonia:\n  (NH4)2SO4 + Ca(OH)2 -> CaSO4 + 2 NH3(g) + 2 H2O\n- Agronomic Consequence: Causes immediate, massive gaseous volatilization loss of valuable nitrogen, wasting fertilizer investment and polluting ambient air.\n\n3. Incompatible Combination 3: Water-Soluble Phosphates with Calcium Nitrate / Slaked Lime:\n- Components: Single superphosphate or Diammonium phosphate mixed with Calcium Nitrate [Ca(NO3)2].\n- Chemical Reaction:\n  Water-soluble monocalcium phosphate [Ca(H2PO4)2] or ammonium phosphate [(NH4)2HPO4] reacts with soluble Ca2+ ions to form insoluble dicalcium or tricalcium phosphate:\n  Ca(H2PO4)2 + Ca2+ -> 2 CaHPO4(s) + 2 H+\n  2 (NH4)2HPO4 + 3 Ca2+ -> Ca3(PO4)2(s) + 4 NH4+ + 2 H+\n- Agronomic Consequence: Precipitates water-soluble, bioavailable phosphorus into insoluble mineral forms (retrogradation), drastically lowering immediate P availability to young crop seedlings.\n\nFertilizer Mixing Guidelines:\nFertilizer mixing charts designate combinations as: (a) 'Can be mixed and stored', (b) 'Can be mixed only immediately prior to application', and (c) 'Cannot be mixed under any circumstances'.",
      "outlinePoints": [
        "While physical mixing of straight fertilizers offers flexibility in formulating custom nutrient ratios, certain fertiliz",
        "1. Incompatible Combination 1: Urea with Single Superphosphate (SSP):",
        "Monocalcium phosphate monohydrate in SSP contains water of crystallization. When blended with urea, urea displaces this ",
        "Ca(H2PO4)2\u00b7H2O + 4 CO(NH2)2 -> Ca(H2PO4)2\u00b74CO(NH2)2 + H2O"
      ]
    },
    {
      "id": "SOL203-U3-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Fertilizer Control Order (FCO 1985) quality standards and permissible nutrient tolerances",
      "questionText": "A consignment of 200 bags of Calcium Ammonium Nitrate (CAN) is inspected. Explain how to draw the composite sample, prepare analytical portions, and verify ammoniacal vs nitrate nitrogen in the laboratory.",
      "contextScenario": "",
      "modelAnswer": "Inspection and laboratory verification of Calcium Ammonium Nitrate (CAN, 25% N) requires rigorous sampling protocols and specialized differential distillation techniques.\n\n1. Sampling and Composite Preparation (FCO Schedule II):\n- Lot Size: 200 bags.\n- Sampling Scale: For a lot of 101 to 200 bags, a minimum of 15 bags must be selected at random.\n- Drawing Core Samples: A stainless steel slotted trier is inserted diagonally into each selected bag to draw uniform cores across the bag diameter.\n- Homogenization and Reduction: The pooled cores (gross sample ~3 kg) are mixed on a polythene sheet. Quartering is conducted repeatedly until reduced to ~1.5 kg.\n- Triplicate Portions: The 1.5 kg sample is divided into three identical 500 g portions sealed in polythene bags with official seals, recorded on Form J (one for testing lab, one for dealer, one referee).\n\n2. Differential Analytical Determination of Ammoniacal vs Nitrate Nitrogen:\nCAN contains 25.0% total N: 12.5% ammoniacal-N (NH4+) and 12.5% nitrate-N (NO3-). Strong alkali (NaOH) cannot be used directly because it can cause partial nitrate degradation.\n\nPhase A: Determination of Ammoniacal Nitrogen (NH4+-N):\n- Weigh 1.000 g of CAN and dissolve in 100 ml distilled water inside a Kjeldahl distillation flask.\n- Add 5.0 g of heavy calcined Magnesium Oxide (MgO). MgO provides a mild alkaline buffer (pH ~9.5), selectively liberating ammoniacal nitrogen without decomposing nitrate.\n- Steam distil liberated NH3 into 25 ml of 4% boric acid containing mixed indicator:\n  2 NH4+ + MgO -> Mg2+ + 2 NH3(g) + H2O\n- Titrate borate against standardized 0.1 N H2SO4 or HCl.\n- Calculation: Ammoniacal N (%) = (V1 * N_acid * 1.4007) / Sample Wt.\n\nPhase B: Determination of Nitrate Nitrogen (NO3--N) via Devarda's Alloy Reduction:\n- To the cooled residue remaining in the distillation flask from Phase A, add 30 ml of distilled water, 3.0 g of Devarda's Alloy powder (45% Al, 50% Cu, 5% Zn), and 30 ml of 40% NaOH.\n- Connect immediately to the condenser.\n- Nascent hydrogen generated by aluminum in alkali reduces nitrate ions quantitatively into ammonia:\n  3 NO3- + 8 Al + 5 OH- + 18 H2O -> 3 NH3(g) + 8 Al(OH)4-\n- Distil liberated NH3 into a fresh receiver containing boric acid and titrate against 0.1 N standard acid.\n- Calculation: Nitrate N (%) = (V2 * N_acid * 1.4007) / Sample Wt.\n\n3. Verification:\nTotal Nitrogen (%) = Ammoniacal N (%) + Nitrate N (%).\nGenuine CAN must yield Ammoniacal N ~12.5%, Nitrate N ~12.5%, and Total N >= 25.0%.",
      "outlinePoints": [
        "Inspection and laboratory verification of Calcium Ammonium Nitrate (CAN, 25% N) requires rigorous sampling protocols and",
        "1. Sampling and Composite Preparation (FCO Schedule II):",
        "- Lot Size: 200 bags.",
        "- Sampling Scale: For a lot of 101 to 200 bags, a minimum of 15 bags must be selected at random."
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL203-U3-FC01",
      "front": "What is the guaranteed nitrogen content in commercial fertilizer-grade prilled urea?",
      "back": "Minimum 46.0% total nitrogen in amide [CO(NH2)2] form.",
      "hint": "",
      "syllabusTopic": "Chemical Fertilizers"
    },
    {
      "id": "SOL203-U3-FC02",
      "front": "What is the nutrient composition of standard Diammonium Phosphate (DAP)?",
      "back": "18.0% total Nitrogen (ammoniacal) and 46.0% total P2O5 (minimum 41.0% water-soluble).",
      "hint": "",
      "syllabusTopic": "Complex Fertilizers"
    },
    {
      "id": "SOL203-U3-FC03",
      "front": "What is Muriate of Potash (MOP) and its potash content?",
      "back": "Potassium chloride (KCl) containing minimum 60.0% water-soluble K2O.",
      "hint": "",
      "syllabusTopic": "Potassic Fertilizers"
    },
    {
      "id": "SOL203-U3-FC04",
      "front": "What is the nutrient composition of Single Superphosphate (SSP)?",
      "back": "16.0% available P2O5 (min 14.5% water-soluble), 11.0% sulfate sulfur, and 19.0% calcium.",
      "hint": "",
      "syllabusTopic": "Phosphatic Fertilizers"
    },
    {
      "id": "SOL203-U3-FC05",
      "front": "What is biuret, how does it form, and what is its FCO ceiling in urea?",
      "back": "A phytotoxic condensation byproduct [NH2-CO-NH-CO-NH2] formed when urea is heated >133\u00b0C; maximum limit is 1.5% for soil grade and 0.4% for foliar spray.",
      "hint": "",
      "syllabusTopic": "Quality Standards"
    },
    {
      "id": "SOL203-U3-FC06",
      "front": "Why is Calcium Ammonium Nitrate (CAN) known as 'Kisan Khad'?",
      "back": "It contains 25.0% N (12.5% NH4+ and 12.5% NO3-) blended with CaCO3; it is chemically and physiologically neutral, leaving zero residual acidity in soil.",
      "hint": "",
      "syllabusTopic": "Nitrogenous Fertilizers"
    },
    {
      "id": "SOL203-U3-FC07",
      "front": "Why must Sulphate of Potash (SOP) be used instead of MOP for tobacco and potato?",
      "back": "Tobacco and potato are chloride-sensitive; chloride in MOP impairs tobacco leaf burning quality and lowers potato tuber starch content.",
      "hint": "",
      "syllabusTopic": "Potassic Fertilizers"
    },
    {
      "id": "SOL203-U3-FC08",
      "front": "What is the nitrogen and sulfur content of Ammonium Sulphate?",
      "back": "20.6% ammoniacal nitrogen and 24.0% sulfate sulfur (with equivalent acidity of 110).",
      "hint": "",
      "syllabusTopic": "Nitrogenous Fertilizers"
    },
    {
      "id": "SOL203-U3-FC09",
      "front": "What is the mandatory specification for Neem Coated Urea (NCU) in India?",
      "back": "100% of subsidized agricultural urea must be coated with 0.035% to 0.05% (350-500 ppm) neem seed oil to slow nitrification and prevent industrial diversion.",
      "hint": "",
      "syllabusTopic": "Quality Standards"
    },
    {
      "id": "SOL203-U3-FC10",
      "front": "What is the difference between a complex fertilizer and a mixed fertilizer?",
      "back": "Complex: chemically combined into homogeneous granules (e.g., DAP). Mixed: dry mechanical blend of straight fertilizers with high segregation risk.",
      "hint": "",
      "syllabusTopic": "Fertilizer Classification"
    },
    {
      "id": "SOL203-U3-FC11",
      "front": "What is the official statutory form executed by a Fertilizer Inspector when drawing samples?",
      "back": "Form J (under Schedule II of FCO 1985), prepared in duplicate in the presence of the dealer.",
      "hint": "",
      "syllabusTopic": "Sampling & Law"
    },
    {
      "id": "SOL203-U3-FC12",
      "front": "Into how many identical sealed portions is an official fertilizer sample divided?",
      "back": "Three identical sealed portions (~400-500 g each): one for testing lab, one for dealer, one referee sample for court.",
      "hint": "",
      "syllabusTopic": "Sampling & Law"
    },
    {
      "id": "SOL203-U3-FC13",
      "front": "What is the quimociac method in fertilizer testing?",
      "back": "The standard gravimetric/volumetric method for phosphorus: precipitating phosphate as yellow quinoline phosphomolybdate and dissolving in excess NaOH.",
      "hint": "",
      "syllabusTopic": "Laboratory Analysis"
    },
    {
      "id": "SOL203-U3-FC14",
      "front": "Why is Devarda's Alloy used in fertilizer nitrogen determination?",
      "back": "It reduces nitrate (NO3-) and nitrite (NO2-) quantitatively into ammonia (NH3) in alkaline medium for Kjeldahl distillation.",
      "hint": "",
      "syllabusTopic": "Laboratory Analysis"
    },
    {
      "id": "SOL203-U3-FC15",
      "front": "Why can urea and single superphosphate (SSP) NOT be mixed and stored?",
      "back": "Urea displaces water of crystallization from monocalcium phosphate, releasing liquid water that turns the blend into a sticky slush.",
      "hint": "",
      "syllabusTopic": "Fertilizer Incompatibility"
    },
    {
      "id": "SOL203-U3-FC16",
      "front": "What is Critical Relative Humidity (CRH) of a fertilizer?",
      "back": "The atmospheric relative humidity threshold above which a fertilizer spontaneously absorbs moisture from the air and cakes.",
      "hint": "",
      "syllabusTopic": "Physical Properties"
    },
    {
      "id": "SOL203-U3-FC17",
      "front": "What chemical reagent is used to determine biuret in urea spectrophotometrically?",
      "back": "Alkaline Rochelle salt (potassium sodium tartrate) and CuSO4, forming a violet-purple coordination complex measured at 550 nm.",
      "hint": "",
      "syllabusTopic": "Laboratory Analysis"
    },
    {
      "id": "SOL203-U3-FC18",
      "front": "What is the equivalent acidity of Urea vs Ammonium Sulphate?",
      "back": "Urea = 80-85 kg CaCO3 / 100 kg fertilizer; Ammonium Sulphate = 110 kg CaCO3 / 100 kg fertilizer.",
      "hint": "",
      "syllabusTopic": "Soil Chemistry"
    },
    {
      "id": "SOL203-U3-FC19",
      "front": "What is the standard method for determining potassium in fertilizers under FCO?",
      "back": "Sodium tetraphenylboron (NaTPB) volumetric or gravimetric method, precipitating white KB(C6H5)4.",
      "hint": "",
      "syllabusTopic": "Laboratory Analysis"
    },
    {
      "id": "SOL203-U3-FC20",
      "front": "What is the appellate recourse for a dealer disputing an adverse FCO lab report?",
      "back": "Appeal within 30 days to have the sealed 3rd referee sample tested at CFQC&TI, Faridabad, whose finding is final and legally binding.",
      "hint": "",
      "syllabusTopic": "Sampling & Law"
    }
  ]
};
