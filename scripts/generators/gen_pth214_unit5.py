# -*- coding: utf-8 -*-
"""
Generator for PTH214 Unit 5: Nematodes of Important Crops and Plant Quarantine
Outputs TypeScript data file: server/data/pth214/unit5.ts
"""

import json

unit_data = {
    "unitNumber": 5,
    "title": "Nematodes of Important Crops and Plant Quarantine",
    "shortDescription": "Comprehensive study of nematode diseases affecting cereals, vegetables, fruits, and plantation crops, alongside domestic and international plant quarantine frameworks.",
    "estimatedReadTimeMinutes": 135,
    "syllabusTopics": [
        "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes",
        "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease",
        "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline",
        "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes",
        "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
    ],
    "notes": {
        "learningObjectives": [
            "Identify major nematode pests of cereal crops (rice white tip, wheat ear-cockle, cereal cyst) and their etiology.",
            "Understand the disease cycle and symptom development of Molya disease and Tundu yellow slime rot complex.",
            "Analyze vegetable root-knot dynamics, the genetics and temperature sensitivity of the Mi-1.2 resistance gene.",
            "Examine Radopholus similis in banana and Globodera rostochiensis/pallida in potato, including paring and pralinage.",
            "Comprehend legal quarantine provisions under DIPA 1914, Plant Quarantine Order 2003, and Pest Risk Analysis protocols."
        ],
        "sections": [
            {
                "id": "pth214-u5-sec1",
                "title": "Nematodes of Rice: White Tip, Rice Root, and Nursery Root-Knot",
                "content": "Rice (*Oryza sativa*) is host to several destructive nematode species adapted to distinct hydrological conditions:\\n\\n1. **White Tip Nematode (*Aphelenchoides besseyi*)**:\\n- **Nature**: Seed-borne, foliar ectoparasite in early vegetative stages, becoming endoparasitic in developing flower buds and grains.\\n- **Symptoms**: Characteristic chlorosis and whitening of the top 3-5 cm of apical leaf tips during tillering ('white tip'). Infected leaves subsequently turn dark brown, dry out, curl, and fray. Panicles are reduced in size with high spikelet sterility and distorted, crinkled grains.\\n- **Biology & Survival**: Anhydrobiotic nematodes survive under the hull (paleae/lemmae) of dry rice seed for 2-3 years as coiled, desiccated pre-adults and adults. When seed is sown in water, nematodes revive, migrate on stem surfaces within water films to apical meristems.\\n- **Management**: Hot water treatment of seed at 52-53°C for 15 minutes (following a 12-hour pre-soak in cool water) or seed soaking in carbosulfan (0.1%).\\n\\n2. **Rice Root Nematode (*Hirschmanniella oryzae*)**:\\n- **Nature**: Migratory endoparasite residing in the aerenchyma tissue of flooded paddy roots.\\n- **Symptoms**: Extensive root cortex necrosis, root browning, reduced tillering, delayed flowering, and yield losses of 10-25%. Survives in soil, volunteer rice stubble, and sedge weeds (*Cyperus* spp.).\\n\\n3. **Rice Root-Knot Nematode (*Meloidogyne graminicola*)**:\\n- **Major Issue**: Predominantly attacks upland, direct-seeded rice (DSR), and aerobic nursery beds. Causes characteristic hook-shaped galls on root tips, severe stunting, and chlorosis."
            },
            {
                "id": "pth214-u5-sec2",
                "title": "Nematodes of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease",
                "content": "1. **Wheat Ear-Cockle Nematode (*Anguina tritici*)**:\\n- **Historical Significance**: The first plant-parasitic nematode observed by Needham in 1743 in crushed wheat galls.\\n- **Symptoms**: Seed galls (cockles) replace normal grains. Infected plants display leaf twisting, curling, crinkling, and excessive tillering in early stages. Mature spikes are broader, shorter, with spreading glumes enclosing hard, dark brown to blackish cockles containing thousands of J2 larvae.\\n- **Management**: Physical flotation of seed in 20% brine solution (salt water)—galls float to the surface and are skimmed off, followed by washing the clean sunken grain with fresh water before sowing.\\n\\n2. **Tundu Disease / Yellow Ear Rot Complex**:\\n- **Etiology**: Obligate association between *Anguina tritici* (vector) and the bacterium *Rathayibacter tritici* (syn. *Clavibacter tritici*).\\n- **Mechanism**: J2 larvae carry bacterial slime on their cuticle into the floral meristem. Under humid, cool conditions, the bacterium proliferates, producing a sticky, bright lemon-yellow slime on emerging spikes and leaves, preventing grain formation entirely.\\n\\n3. **Molya Disease (Cereal Cyst Nematode - *Heterodera avenae*)**:\\n- **Host Range & Distribution**: Highly damaging to wheat and barley in light, sandy soils of Rajasthan, Haryana, Punjab, and Himachal Pradesh.\\n- **Symptoms**: Appears in distinct patches of stunted, pale yellowish plants. Roots show abnormal, bushy, bunchy branching ('knotted' or 'bearded' roots) with tiny white female cysts visible in late February/early March.\\n- **Management**: Deep summer ploughing, crop rotation with non-hosts (mustard, chickpea, fenugreek), planting resistant barley (e.g., Rajkiran / RD 2052) and wheat (e.g., Raj MR-1)."
            },
            {
                "id": "pth214-u5-sec3",
                "title": "Nematodes of Horticultural Crops: Vegetable Root-Knot and Citrus Decline",
                "content": "1. **Vegetable Root-Knot Nematodes (*Meloidogyne incognita*, *M. javanica*)**:\\n- Highly damaging to Solanaceous crops (tomato, brinjal, chilli, potato) and cucurbits.\\n- **Host Plant Resistance & the *Mi-1.2* Gene**:\\n  - The *Mi-1.2* gene (derived from wild tomato *Solanum peruvianum*) encodes an NBS-LRR intracellular immune receptor recognizing nematode effectors.\\n  - **Thermal Breakdown**: *Mi-1.2* provides robust resistance against *M. incognita*, *M. javanica*, and *M. arenaria* at standard temperatures, but undergoes reversible loss of resistance when soil temperatures exceed 28°C.\\n- **Grafting**: Grafting susceptible scions onto resistant wild rootstocks like *Solanum torvum* (turkey berry) or *Solanum sisymbriifolium* completely protects brinjal and tomato crops against both root-knot nematodes and bacterial wilt.\\n\\n2. **Citrus Slow Decline (*Tylenchulus semipenetrans*)**:\\n- **Nature**: Semi-endoparasitic sedentary nematode. Female buries only its anterior body into cortical tissue while the posterior body swells outside the root.\\n- **Nurse Cells**: Induces metabolic 'nurse cells' in cortical parenchyma, causing cortex sloughing, impaired nutrient uptake (zinc and nitrogen deficiency), branch dieback, and reduced fruit size ('slow decline').\\n- **Rootstock Resistance**: Poncirus trifoliata (trifoliate orange) and citranges (e.g., Carrizo, Troyer) possess resistance to citrus nematode."
            },
            {
                "id": "pth214-u5-sec4",
                "title": "Nematodes of Plantation and Tuber Crops: Radopholus and Globodera",
                "content": "1. **Banana Burrowing Nematode (*Radopholus similis*)**:\\n- **Disease**: Causes 'Toppling Disease' or 'Black Head' of banana.\\n- **Pathology**: Migratory endoparasite inhabiting cortical parenchyma of feeder roots and corms. Feeding channels create reddish-brown necrotic lesions that coalesce into extensive dark black cavities. Weakened anchor roots snap under heavy bunch loads or moderate winds, causing entire pseudostems to topple over.\\n- **Control**: 'Paring and Pralinage'—peeling away all discolored reddish-black necrotic tissue from suckers (paring) followed by dipping in clay slurry dusted with carbofuran 3G (40 g/sucker) or neem cake powder, plus hot water immersion (55°C for 20 minutes).\\n\\n2. **Potato Golden Cyst Nematodes (*Globodera rostochiensis* & *G. pallida*)**:\\n- **Distribution in India**: Confined to the temperate Nilgiri and Kodaikanal hills of Tamil Nadu; subject to strict domestic quarantine.\\n- **Biology**: Globular females change color (golden yellow in *G. rostochiensis*, creamy white directly to brown in *G. pallida*). Cysts survive 15-20 years in dormant state.\\n- **Management**: Resistant varieties (*Kufri Swarna*), crop rotation with non-hosts (cabbage, carrot, French bean), and nematicide application."
            },
            {
                "id": "pth214-u5-sec5",
                "title": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis",
                "content": "1. **Definition and Role of Plant Quarantine**:\\n- Legal restriction on the movement of agricultural commodities, seeds, and propagation material into or within an area to prevent the introduction and spread of invasive plant pests and pathogens.\\n\\n2. **Legal Framework in India**:\\n- **Destructive Insects and Pests Act (DIPA 1914)**: The fundamental legislative act empowering the Central Government to regulate or prohibit the import of pests and infected plant material.\\n- **Plant Quarantine (Regulation of Import into India) Order 2003 (PQO 2003)**: Promulgated under DIPA 1914 to align Indian biosecurity regulations with the WTO Agreement on the Application of Sanitary and Phytosanitary Measures (SPS Agreement) and the International Plant Protection Convention (IPPC).\\n\\n3. **Domestic Quarantine in India**:\\n- Imposed on the potato cyst nematodes (*Globodera rostochiensis* and *G. pallida*) preventing shipment of seed tubers from the Nilgiris and Kodaikanal to other states in India.\\n\\n4. **Pest Risk Analysis (PRA)**:\\n- Biological evaluation consisting of pest categorization, assessment of the probability of introduction and spread, and economic impact evaluation, concluding with pest risk management options.\\n\\n5. **Phytosanitary Certification**:\\n- Official document issued by the National Plant Protection Organization (NPPO) of the exporting country certifying that consignments conform with the phytosanitary requirements of the importing country."
            }
        ],
        "keyTakeaways": [
            "Aphelenchoides besseyi is an anhydrobiotic seed-borne nematode controlled by 52-53°C hot water treatment.",
            "Anguina tritici carries Rathayibacter tritici to cause Tundu yellow slime disease and can be removed by 20% brine floatation.",
            "Heterodera avenae causes Molya disease in light soils of north-western India and induces bushy 'bearded' roots.",
            "Mi-1.2 gene resistance in tomato breaks down when soil temperatures exceed 28°C.",
            "Banana burrowing nematode is controlled by sucker paring and pralinage.",
            "Globodera rostochiensis and G. pallida are restricted to the Nilgiris and under strict domestic quarantine under DIPA 1914."
        ],
        "commonMisunderstandings": [
            "Assuming hot water treatment of rice seed kills the embryo; precise 52-53°C for 15 minutes eradicates A. besseyi without affecting seed germination.",
            "Confusing Tundu disease with a fungal infection; Tundu is a strict nematode-bacterium synergism between Anguina tritici and Rathayibacter tritici.",
            "Thinking Mi gene resistance is permanent under all climates; it undergoes reversible thermal loss above 28°C.",
            "Believing potato cyst nematode occurs across northern potato plains; in India, Globodera is strictly quarantined to Nilgiris and Kodaikanal hills."
        ],
        "summary": "Unit 5 details the etiology, disease dynamics, and targeted management of high-consequence nematode pests of rice, wheat, vegetables, citrus, banana, and potato. It integrates genetic mechanisms like Mi-1.2 resistance with statutory plant quarantine frameworks under DIPA 1914, PQO 2003, and international SPS/IPPC standards to safeguard national agricultural biosecurity."
    },
    "mcqs": [
        # --- TOPIC 1: RICE NEMATODES (1-12) ---
        {
            "id": "PTH214-U5-MCQ01",
            "question": "Which nematode is the causal agent of 'white tip' disease in rice?",
            "options": ["Aphelenchoides besseyi", "Hirschmanniella oryzae", "Meloidogyne graminicola", "Ditylenchus angustus"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Aphelenchoides besseyi is the white tip nematode of rice, an anhydrobiotic seed-borne foliar nematode.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ02",
            "question": "In dry stored rice seeds, in what physiological state does Aphelenchoides besseyi survive?",
            "options": ["Cyst stage", "Anhydrobiosis", "Hypobiosis inside root nodules", "Gelatinous egg sac matrix"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Aphelenchoides besseyi survives in dry rice seed under the hull for 2 to 3 years in a state of anhydrobiosis (desiccation-induced dormancy).",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ03",
            "question": "What is the recommended temperature and duration for hot water treatment to eliminate Aphelenchoides besseyi from rice seed?",
            "options": ["40-42°C for 30 minutes", "52-53°C for 15 minutes", "65-70°C for 5 minutes", "80°C for 1 minute"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Hot water treatment at 52-53°C for 15 minutes following a cool-water pre-soak eradicates A. besseyi without reducing rice seed viability.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ04",
            "question": "Which plant tissue does Hirschmanniella oryzae inhabit within flooded rice plants?",
            "options": ["Vascular xylem vessels", "Aerenchyma channels of the root cortex", "Mesophyll layers of leaves", "Pith parenchyma of culm"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Hirschmanniella oryzae is a migratory endoparasite that feeds and migrates inside the large air spaces (aerenchyma) of submerged rice roots.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ05",
            "question": "What is the characteristic gall symptom produced by Meloidogyne graminicola on rice roots?",
            "options": ["Beaded spherical galls on lateral rootlets", "Distinct hook-shaped or horseshoe galls at root tips", "Elongated spindle-like root swellings", "Flattened foliar galls on leaf sheaths"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "Meloidogyne graminicola induces characteristic hook-shaped or curled swellings right at the tips of infected rice roots.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ06",
            "question": "In which rice cultivation system is Meloidogyne graminicola most destructive?",
            "options": ["Deepwater rice with 2 meters standing water", "Continuous flooded lowland wetland rice", "Upland, direct-seeded (DSR), and nursery beds", "Tidal mangrove swamp rice"],
            "correctOption": "C",
            "difficulty": "EASY",
            "explanation": "Meloidogyne graminicola thrives under aerobic and unflooded soil conditions, making it severe in upland, aerobic direct-seeded rice, and nursery beds.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ07",
            "question": "Which nematode causes 'ufra' disease in deepwater and lowland rice in eastern India and Bangladesh?",
            "options": ["Ditylenchus angustus", "Hirschmanniella oryzae", "Aphelenchoides besseyi", "Heterodera oryzae"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Ditylenchus angustus (the rice stem nematode) is the causal agent of 'ufra' disease in deepwater and lowland rice.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ08",
            "question": "Where does Aphelenchoides besseyi predominantly lodge in dry harvested rice grains?",
            "options": ["Within the endosperm core", "Between the lemma/palea and the caryopsis surface", "Inside the aleurone layer", "Penetrating the rice embryo directly"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "A. besseyi rests primarily between the inner surface of the floral glumes (lemma and palea) and the outer surface of the grain pericarp.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ09",
            "question": "Why is Hirschmanniella oryzae uniquely successful in waterlogged paddy fields?",
            "options": ["It possesses external gills for respiration", "It tolerates low oxygen by utilizing air within rice aerenchyma and surviving anaerobic mud", "It feeds exclusively on anaerobic methanotrophic bacteria", "It enters an obligatory spore stage underwater"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "Hirschmanniella oryzae is well-adapted to anaerobic aquatic soils, migrating through the water-film and exploiting oxygen-rich rice aerenchyma lacunae.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ10",
            "question": "Which weed commonly serves as an alternate reservoir host for Hirschmanniella oryzae in rice fields?",
            "options": ["Cyperus rotundus and Cyperus difformis", "Parthenium hysterophorus", "Eichhornia crassipes", "Lantana camara"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Cyperus species (sedges) growing in and around paddy fields maintain viable populations of Hirschmanniella oryzae between crop seasons.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ11",
            "question": "What is the primary visual symptom of Aphelenchoides besseyi on vegetative rice leaves?",
            "options": ["Water-soaked leaf lesions", "Whitening and chlorosis of the apical 3-5 cm of leaf blades", "Purpling of the midrib", "Interveinal necrotic striping"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "The terminal 3-5 cm of young expanding rice leaves turn chlorotic, creamy-white, curl, and wither, giving the characteristic 'white tip' appearance.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ12",
            "question": "Which developmental stage of Hirschmanniella oryzae can infect rice roots?",
            "options": ["Only second-stage juveniles (J2)", "Only gravid adult females", "All juvenile stages (J2-J4) and adults", "Only males"],
            "correctOption": "C",
            "difficulty": "HARD",
            "explanation": "As a migratory endoparasite, all post-embryonic active stages (J2, J3, J4 juveniles and adult males and females) enter and feed within rice roots.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },

        # --- TOPIC 2: WHEAT & BARLEY NEMATODES (13-24) ---
        {
            "id": "PTH214-U5-MCQ13",
            "question": "Who was the first scientist to document plant-parasitic nematodes by observing Anguina tritici in wheat galls in 1743?",
            "options": ["T. Needham", "N.A. Cobb", "M.J. Berkeley", "H.C. Bastian"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Turbevill Needham in 1743 discovered animalcules (juveniles of Anguina tritici) upon crushing blackened wheat cockles in water.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ14",
            "question": "What simple physical method separates Anguina tritici seed galls (cockles) from healthy wheat grains?",
            "options": ["Centrifugation in heavy syrup", "Flotation in a 20% common salt (brine) solution", "Sieving through 20-mesh copper screens", "Aeration in vertical wind tunnels"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "Cockles are lighter in density than healthy wheat grains; floating seed in 20% brine causes galls to float to the top where they are skimmed off.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ15",
            "question": "Tundu disease of wheat is caused by a synergistic interaction between Anguina tritici and which bacterium?",
            "options": ["Xanthomonas translucens", "Rathayibacter tritici", "Pseudomonas syringae", "Ralstonia solanacearum"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "Tundu disease (yellow ear rot) is a disease complex caused by the bacterium Rathayibacter tritici (syn. Clavibacter tritici) vectored by Anguina tritici.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ16",
            "question": "Which stage of Anguina tritici carries the bacterium Rathayibacter tritici into developing wheat ears?",
            "options": ["First-stage juvenile (J1)", "Second-stage juvenile (J2)", "Fourth-stage juvenile (J4)", "Gravid adult female"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "The second-stage juvenile (J2) of Anguina tritici is the infective and dispersal stage that vectors bacterial slime on its cuticular surface.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ17",
            "question": "What is the common regional name for the cereal cyst nematode disease affecting wheat and barley in Rajasthan and Haryana?",
            "options": ["Molya disease", "Ufra disease", "Kufri disease", "Katte disease"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Molya disease is the vernacular Hindi name for cereal cyst nematode (Heterodera avenae) disease in Rajasthan, Punjab, and Haryana.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ18",
            "question": "Which nematode species is the causal agent of Molya disease?",
            "options": ["Heterodera avenae", "Globodera rostochiensis", "Heterodera zeae", "Meloidogyne artiellia"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Heterodera avenae (the cereal cyst nematode) causes Molya disease in wheat, barley, and oats.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ19",
            "question": "What characteristic root symptom is diagnostic of wheat plants severely infested with Heterodera avenae?",
            "options": ["Massive elongated root galls", "Bushy, bunchy roots with excessive root branching ('knotted/bearded' roots)", "Complete taproot rot without lateral branching", "Translucent watery cortical swelling"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Heterodera avenae stimulates excessive proliferation of lateral rootlets at infection points, giving a bunchy or 'bearded' root appearance.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ20",
            "question": "Which barley variety is widely recognized in India for its resistance to Heterodera avenae?",
            "options": ["Rajkiran (RD 2052)", "Sonora 64", "Kalyan Sona", "Pusa Bold"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Rajkiran (RD 2052) and RD 387 are resistant barley cultivars bred specifically to counter Molya disease in Rajasthan and adjacent states.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ21",
            "question": "Under what environmental conditions is the bacterial slime of Tundu disease most conspicuously expressed on wheat heads?",
            "options": ["Extremely hot, arid conditions (>42°C)", "Cool, high-humidity, and cloudy weather during spike emergence", "Sub-zero frost conditions during tillering", "High wind and low relative humidity"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "Abundant bright lemon-yellow slime on wheat spikes occurs when high relative humidity (>80%) and moderate cool temperatures coincide with ear emergence.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ22",
            "question": "How many generations per crop season does Heterodera avenae complete in northern Indian plains?",
            "options": ["One generation (monocyclic)", "Four to six generations (polycyclic)", "Continuous reproduction without diapause", "Ten generations"],
            "correctOption": "A",
            "difficulty": "HARD",
            "explanation": "Heterodera avenae is monocyclic, completing only a single generation per rabi winter season due to obligate cold requirement for diapause breaking.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ23",
            "question": "Approximately how many anhydrobiotic J2 juveniles can be contained within a single wheat cockle gall of Anguina tritici?",
            "options": ["50 to 100", "500 to 1,000", "10,000 to 30,000", "Over 1,000,000"],
            "correctOption": "C",
            "difficulty": "MEDIUM",
            "explanation": "A single mature wheat cockle gall can pack between 10,000 and 30,000 dehydrated second-stage juveniles (J2).",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-MCQ24",
            "question": "What soil texture is most conducive to devastating outbreaks of Molya disease?",
            "options": ["Heavy vertisol clay soils", "Light-textured sandy to sandy-loam soils", "Deep organic peat mucks", "Saline waterlogged silt"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Heterodera avenae juveniles migrate most rapidly and infect roots aggressively in well-aerated, light, sandy soils found in Rajasthan and south Haryana.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },

        # --- TOPIC 3: HORTICULTURAL CROPS (25-36) ---
        {
            "id": "PTH214-U5-MCQ25",
            "question": "From which wild tomato relative was the root-knot nematode resistance gene Mi-1.2 introgressed into cultivated tomato?",
            "options": ["Solanum lycopersicum var. cerasiforme", "Solanum peruvianum", "Solanum tuberosum", "Solanum nigrum"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "The Mi gene was introgressed into commercial tomato from the wild species Solanum peruvianum by Charles Rick and Victor Watts in the 1940s.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ26",
            "question": "At what threshold soil temperature does the Mi-1.2 gene resistance in tomato break down?",
            "options": ["Above 20°C", "Above 28°C", "Above 38°C", "Below 15°C"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Mi-1.2-mediated resistance is heat-sensitive; when soil temperature exceeds 28°C (82°F), the resistance mechanism fails and nematodes reproduce normally.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ27",
            "question": "Which wild solanaceous species is most widely used as a root-knot and bacterial wilt resistant rootstock for grafting brinjal?",
            "options": ["Solanum torvum", "Datura stramonium", "Withania somnifera", "Physalis minima"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Solanum torvum (turkey berry) is immune or highly resistant to Meloidogyne incognita and Ralstonia solanacearum, making it an ideal grafting rootstock.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ28",
            "question": "Which nematode is responsible for 'slow decline' disease of citrus trees worldwide?",
            "options": ["Tylenchulus semipenetrans", "Radopholus similis", "Pratylenchus coffeae", "Xiphinema index"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Tylenchulus semipenetrans (the citrus nematode) is the causal agent of citrus slow decline.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ29",
            "question": "What type of parasitism is exhibited by the mature adult female of Tylenchulus semipenetrans?",
            "options": ["Migratory endoparasitism", "Sedentary semi-endoparasitism", "Obligate foliar ectoparasitism", "Ectoparasitic gall former"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "Adult females are sedentary semi-endoparasites; their anterior body is buried in the cortex to feed on nurse cells, while the posterior body remains outside.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ30",
            "question": "What specialized feeding structure does Tylenchulus semipenetrans induce in the cortical tissue of citrus feeder roots?",
            "options": ["Multinucleate syncytia", "Giant cells with thickened cell walls", "A cluster of metabolic 'nurse cells'", "Cavity filled with liquefied cortical sap"],
            "correctOption": "C",
            "difficulty": "HARD",
            "explanation": "Tylenchulus semipenetrans induces a cluster of 6 to 10 modified cortical parenchyma cells termed 'nurse cells' surrounding its head.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ31",
            "question": "Which citrus rootstock displays high resistance to the citrus nematode Tylenchulus semipenetrans?",
            "options": ["Rough lemon (Citrus jambhiri)", "Poncirus trifoliata (Trifoliate orange)", "Sweet orange seedling (Citrus sinensis)", "Acid lime (Citrus aurantifolia)"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Poncirus trifoliata and its hybrids (e.g., Troyer and Carrizo citranges) exhibit strong physiological resistance against Tylenchulus semipenetrans.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ32",
            "question": "Which class of intracellular immune receptor proteins does the tomato Mi-1.2 gene encode?",
            "options": ["Receptor-like kinase (RLK)", "Nucleotide-binding leucine-rich repeat (NBS-LRR) protein", "G-protein coupled receptor (GPCR)", "Serine/threonine kinase transporter"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "Mi-1.2 encodes an intracellular NBS-LRR (nucleotide-binding site leucine-rich repeat) disease resistance protein.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ33",
            "question": "In addition to Meloidogyne incognita, which insect pest does the tomato Mi-1.2 gene simultaneously confer resistance against?",
            "options": ["Potato aphid (Macrosiphum euphorbiae) and silverleaf whitefly", "Cotton bollworm (Helicoverpa armigera)", "Fruit borer (Leucinodes orbonalis)", "Stem borer (Scirpophaga incertulas)"],
            "correctOption": "A",
            "difficulty": "HARD",
            "explanation": "Remarkably, Mi-1.2 confers dual resistance against root-knot nematodes and phloem-feeding insects (potato aphid and Bemisia whitefly).",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ34",
            "question": "Why do feeder roots infested by Tylenchulus semipenetrans appear unusually encrusted with soil particles?",
            "options": ["Roots secrete sticky mucilage to trap sand", "Gelatinous matrix secreted by the excretory pore covers the root surface and cements soil grains", "Roots produce glandular trichomes", "Fungal mycelium cements sand to the bark"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Females secrete a gelatinous matrix through the excretory pore that embeds eggs and cements adhering sand grains to the root surface.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ35",
            "question": "What above-ground nutritional symptom is typically triggered by heavy Tylenchulus semipenetrans root damage in citrus?",
            "options": ["Severe copper toxicity", "Micronutrient chlorosis (zinc and iron deficiency) and terminal dieback", "Excess nitrogen accumulation", "Excessive leaf enlargement"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "Destruction of feeder roots impairs uptake of water and micronutrients, manifesting as mottle-leaf zinc/iron deficiency and staghead twig dieback.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-MCQ36",
            "question": "Which vegetable family is extraordinarily susceptible to Meloidogyne incognita and displays enormous galls?",
            "options": ["Cucurbitaceae (bottle gourd, cucumber, sponge gourd)", "Brassicaceae (mustard)", "Poaceae (sorghum)", "Alliaceae (garlic)"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Cucurbits develop extensive, massive coralloid galls due to high root succulence and intense cell hypertrophy triggered by Meloidogyne.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },

        # --- TOPIC 4: PLANTATION & TUBER CROPS (37-48) ---
        {
            "id": "PTH214-U5-MCQ37",
            "question": "Which nematode is responsible for 'toppling disease' or 'black head' in banana plantations?",
            "options": ["Radopholus similis", "Heterodera schachtii", "Pratylenchus penetrans", "Anguina agrostis"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Radopholus similis (the burrowing nematode) creates extensive reddish-black root and corm cavities causing banana pseudostems to topple.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ38",
            "question": "What is the traditional sanitation practice called where discolored necrotic tissue is shaved off banana suckers before planting?",
            "options": ["Paring", "Ratooning", "Etiolation", "Stratification"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "Paring involves trimming away all necrotic reddish-brown tissue and root stubs from banana suckers with a sharp knife.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ39",
            "question": "What does the 'pralinage' component of banana sucker treatment entail?",
            "options": ["Spraying sucker leaves with hormone", "Coating trimmed suckers in clay slurry dusted with nematicide or neem cake", "Dipping suckers in ice-cold brine", "Fumigating with sulfur dioxide gas"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "Pralinage is the dipping of pared suckers into a clay slurry followed by dusting with a nematicide (e.g. carbofuran) or neem cake powder.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ40",
            "question": "In which region of India are the potato cyst nematodes Globodera rostochiensis and Globodera pallida restricted?",
            "options": ["Indo-Gangetic plains of Uttar Pradesh", "Nilgiri and Kodaikanal hills of Tamil Nadu", "Deccan plateau of Maharashtra", "Chotanagpur plateau of Jharkhand"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "In India, potato cyst nematodes (PCN) are confined to the high-elevation temperate zones of Nilgiris and Kodaikanal hills in Tamil Nadu.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ41",
            "question": "What color sequence does the developing female cyst of Globodera rostochiensis exhibit before turning dark brown?",
            "options": ["White to yellow/golden to dark brown", "White directly to brown without a yellow phase", "Green to purple to brown", "Translucent to bright red to black"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Globodera rostochiensis (golden nematode) passes through a prolonged golden-yellow phase, distinguishing it from G. pallida which transitions directly from white to brown.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ42",
            "question": "What color sequence is observed during the maturation of female Globodera pallida (pale cyst nematode)?",
            "options": ["White to cream directly to brown", "White to golden-yellow to brown", "Blue to pink to brown", "Black from the onset"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Globodera pallida females turn from creamy white directly to brown without an intermediate yellow stage.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ43",
            "question": "Which potato cultivar developed by CPRI carries resistance against Globodera rostochiensis for cultivation in the Nilgiris?",
            "options": ["Kufri Swarna", "Kufri Chandramukhi", "Kufri Pukhraj", "Kufri Bahar"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Kufri Swarna was bred by the Central Potato Research Institute (CPRI) specifically with resistance to Globodera rostochiensis for the Nilgiri hills.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ44",
            "question": "What natural chemical triggers the hatching of Globodera second-stage juveniles from dormant cysts?",
            "options": ["Ethylene gas from ripe fruits", "Host root exudates containing hatch stimulants like solanoeclepin A", "Indole-3-acetic acid (IAA)", "Abscisic acid (ABA)"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "Hatching of potato cyst nematodes is specifically triggered by host root exudates containing the triterpenoid hatch factor solanoeclepin A.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ45",
            "question": "For how many years can viable, embryonated eggs survive inside the protective cyst wall of Globodera in dry field soil?",
            "options": ["Only 6 months", "1 to 2 years", "15 to 20 years", "Over 100 years"],
            "correctOption": "C",
            "difficulty": "MEDIUM",
            "explanation": "Owing to the tanned, chemically resistant cyst wall, dormant eggs of Globodera can remain viable in soil for 15 to 20 years in the absence of hosts.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ46",
            "question": "Which destructive disease complex does Radopholus similis form in black pepper (*Piper nigrum*) vines?",
            "options": ["Slow wilt / 'Yellows' disease", "Black pod rot", "Quick wilt (caused solely by Phytophthora)", "Pollu beetle galling"],
            "correctOption": "A",
            "difficulty": "HARD",
            "explanation": "In black pepper, Radopholus similis (alone or synergistically with Meloidogyne and Fusarium) causes slow wilt or 'yellows' disease.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ47",
            "question": "What temperature and duration of hot water immersion is effective for sanitizing banana suckers against Radopholus similis?",
            "options": ["45°C for 5 minutes", "55°C for 20 minutes", "70°C for 30 minutes", "85°C for 1 minute"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "Immersion of peeled suckers in hot water at 53-55°C for 20 minutes effectively kills Radopholus inside corm tissues without killing the growing bud.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-MCQ48",
            "question": "Which morphological feature distinguishes the vulval opening of Globodera from Heterodera cysts?",
            "options": ["Globodera has a circular circumfenestrate fenestra with no vulval cone; Heterodera has a prominent bifenestrate vulval cone", "Globodera has a terminal slit-like aperture with huge bullae", "Heterodera lacks any fenestration", "Globodera vulva is situated on the head"],
            "correctOption": "A",
            "difficulty": "HARD",
            "explanation": "Globodera cysts are perfectly spherical without a posterior vulval cone and have a circular circumfenestra, unlike lemon-shaped Heterodera with a cone.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },

        # --- TOPIC 5: PLANT QUARANTINE & REGULATIONS (49-60) ---
        {
            "id": "PTH214-U5-MCQ49",
            "question": "In which year was the Destructive Insects and Pests Act (DIPA) enacted in India?",
            "options": ["1914", "1947", "1968", "2003"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "The Destructive Insects and Pests Act was enacted by the British Indian Government on February 3, 1914 (Act II of 1914).",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ50",
            "question": "What is the full title of the comprehensive statutory order governing agricultural imports into India notified in 2003?",
            "options": ["Insecticides Rules 2003", "Plant Quarantine (Regulation of Import into India) Order, 2003", "Seeds Control Order 2003", "Biological Diversity Act 2003"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "The Plant Quarantine (Regulation of Import into India) Order, 2003 (PQO 2003) regulates the import of all plants and plant products.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ51",
            "question": "Which international agreement under the World Trade Organization (WTO) governs plant health quarantine measures?",
            "options": ["TRIPS Agreement", "SPS Agreement (Sanitary and Phytosanitary Measures)", "GATT Agreement", "Kyoto Protocol"],
            "correctOption": "B",
            "difficulty": "MEDIUM",
            "explanation": "The WTO SPS Agreement provides the international legal framework ensuring plant and animal health measures do not act as arbitrary trade barriers.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ52",
            "question": "Which international treaty body establishes International Standards for Phytosanitary Measures (ISPMs)?",
            "options": ["IPPC (International Plant Protection Convention)", "IUCN (International Union for Conservation of Nature)", "WHO (World Health Organization)", "UNEP (United Nations Environment Programme)"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "The International Plant Protection Convention (IPPC), administered by FAO, promulgates globally harmonized ISPM standards.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ53",
            "question": "Under Indian domestic quarantine, moving seed potatoes from Tamil Nadu (Nilgiris) to other Indian states is prohibited to prevent spreading which pest?",
            "options": ["Potato tuber moth", "Potato golden cyst nematodes (Globodera spp.)", "Potato wart fungus (Synchytrium endobioticum)", "Potato leaf roll virus"],
            "correctOption": "B",
            "difficulty": "EASY",
            "explanation": "Strict domestic quarantine prohibits the export of seed potatoes and unwashed tubers from the Nilgiris and Kodaikanal to prevent PCN dispersal.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ54",
            "question": "What is the biological evaluation process conducted before granting import permission for plant commodities called?",
            "options": ["Pest Risk Analysis (PRA)", "Hazard Analysis Critical Control Point (HACCP)", "Environmental Impact Assessment (EIA)", "Bioassay Screening Test"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Pest Risk Analysis (PRA) is the process of evaluating biological or other scientific and economic evidence to determine if a pest should be regulated.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ55",
            "question": "What official certificate must accompany agricultural import consignments confirming freedom from quarantine pests?",
            "options": ["Phytosanitary Certificate", "Certificate of Origin", "Fumigation Endorsement Only", "Bill of Lading"],
            "correctOption": "A",
            "difficulty": "EASY",
            "explanation": "A Phytosanitary Certificate issued by the National Plant Protection Organization (NPPO) of the exporting country is mandatory.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ56",
            "question": "What are the three sequential stages of Pest Risk Analysis (PRA) defined under ISPM No. 2 and 11?",
            "options": ["Sampling, Inoculation, Eradication", "Initiation, Pest Risk Assessment, and Pest Risk Management", "Inspection, Quarantine, Destruction", "Fumigation, Incubation, Certification"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "Standard PRA comprises Stage 1: Initiation, Stage 2: Pest Risk Assessment (categorization, entry, establishment, spread, economic impact), Stage 3: Pest Risk Management.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ57",
            "question": "Which of the following is defined as a 'quarantine pest' under IPPC standards?",
            "options": ["A pest present everywhere with zero economic impact", "A pest of potential economic importance to an endangered area, not yet present, or present but not widely distributed and being officially controlled", "A beneficial biocontrol agent under laboratory trial", "An endemic weed found across all continents"],
            "correctOption": "B",
            "difficulty": "HARD",
            "explanation": "An IPPC quarantine pest is of potential economic importance to the area endangered thereby, not yet present there, or present but not widely distributed and being officially controlled.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ58",
            "question": "Which premier Indian organization oversees the screening and quarantine clearance of imported agricultural germplasm and seeds?",
            "options": ["National Bureau of Plant Genetic Resources (NBPGR), New Delhi", "Forest Research Institute (FRI), Dehradun", "Botanical Survey of India (BSI), Kolkata", "Indian Council of Medical Research (ICMR)"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "ICAR-NBPGR, New Delhi is authorized by the Government of India for quarantine clearance of all imported germplasm and transgenic plant materials.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ59",
            "question": "What type of post-entry quarantine facility is required for high-risk propagating materials like tissue culture plantlets or exotic budwood?",
            "options": ["Post-Entry Quarantine Greenhouse / Glasshouse (PEQ)", "Open rooftop holding area", "Local farmer's open field", "Shade-net nursery without aphid screens"],
            "correctOption": "A",
            "difficulty": "MEDIUM",
            "explanation": "Post-Entry Quarantine (PEQ) certified facilities (insect-proof greenhouses with filtered air and containment) are mandatory for growing high-risk materials under observation.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-MCQ60",
            "question": "Which gas has historically been utilized as a standard quarantine fumigant against wood-boring pests and soil-borne organisms, though restricted under the Montreal Protocol?",
            "options": ["Methyl bromide", "Nitrous oxide", "Carbon monoxide", "Argon"],
            "correctOption": "A",
            "difficulty": "HARD",
            "explanation": "Methyl bromide (CH3Br) is the historic standard broad-spectrum quarantine fumigant, with critical use exemptions maintained under the Montreal Protocol for quarantine and pre-shipment (QPS).",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        }
    ],
    "subjectiveQuestions": [
        {
            "id": "PTH214-U5-SUB01",
            "question": "Describe the disease cycle, characteristic symptoms, and integrated management of white tip disease of rice caused by Aphelenchoides besseyi.",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "MEDIUM",
            "modelAnswer": "White tip disease of rice is caused by the seed-borne foliar nematode Aphelenchoides besseyi.\\n\\n1. Etiology and Survival:\\nAphelenchoides besseyi is an anhydrobiotic obligate ecto- and endoparasitic foliar nematode. In harvested, dry paddy grains, it survives in a state of anhydrobiosis (severe desiccation dormancy) between the inner surface of the lemma and palea and the grain caryopsis. Dehydrated adults and fourth-stage juveniles (J4) can remain viable under storage conditions for 2 to 3 years without feeding.\\n\\n2. Disease Cycle and Inoculation:\\nWhen infested seeds are sown in moist nursery beds, imbibition rehydrates the dormant nematodes within 2-4 hours. Nematodes become active, emerge from the hull, and swim within moisture films on stem sheaths toward apical growing points. They feed ectoparasitically on young primordial leaf tissue inside the furled leaf sheath. As panicle emergence approaches, nematodes enter developing spikelets and feed endoparasitically on stamens, pistils, and floral ovaries.\\n\\n3. Symptoms:\\n- The hallmark symptom is whitening and chlorosis of the apical 3 to 5 cm of leaf blades during the late tillering and boot stages. The white tips turn necrotic, dark brown, fray, and curl inward.\\n- Emerging panicles are significantly shortened with sterile florets, distorted glumes, and small, malformed, darkened grains.\\n- In severe outbreaks, yield reductions reach 30-50%.\\n\\n4. Integrated Management:\\n- Hot Water Seed Treatment: Soaking seed in ambient water for 12 hours followed by immersion in water at 52-53°C for precisely 15 minutes eradicates 100% of internal nematodes without damaging seedling emergence.\\n- Chemical Seed Soaking: Soaking seeds in 0.1% carbosulfan 25 EC or benomyl for 24 hours.\\n- Field Foliar Sprays: Spraying with systemic organophosphates or carbamates at maximum tillering if foliar symptoms emerge.\\n- Resistant Cultivars: Planting resistant rice genotypes (e.g., modern cultivars screened against A. besseyi).",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-SUB02",
            "question": "Explain the ecological adaptations and pathogenic impact of the rice root nematode (Hirschmanniella oryzae) and nursery root-knot (Meloidogyne graminicola).",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "MEDIUM",
            "modelAnswer": "1. Hirschmanniella oryzae (Rice Root Nematode):\\n- Ecological Adaptation: Adapted to submerged, anaerobic lowland paddy soils. It enters root epidermal tissues and migrates through cortical aerenchyma channels, where internal oxygen levels remain high due to gas diffusion from rice foliage.\\n- Pathogenic Impact: Feeding and extensive tunneling destroy cortex tissue, creating brown, necrotic lesions. Infested plants show stunted growth, delayed tillering, and 10-25% grain yield reduction. Survives off-season in ratoon roots and wetland sedges (Cyperus spp.).\\n\\n2. Meloidogyne graminicola (Rice Root-Knot Nematode):\\n- Ecological Adaptation: Highly adapted to upland, aerobic, and direct-seeded rice (DSR) ecosystems, as well as nursery seedbeds. While it survives short submergence, high flooding suppresses juvenile invasion.\\n- Pathogenic Impact: Induces characteristic hook- or claw-shaped galls right at the tips of rootlets. Causes chlorosis, severe stunting, seedling dieback in seedbeds, and drastic tillering reduction.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-SUB03",
            "question": "Detail the historical significance, symptom expression, and management of wheat ear-cockle nematode (Anguina tritici).",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "EASY",
            "modelAnswer": "1. Historical Significance:\\nAnguina tritici (wheat ear-cockle or seed gall nematode) holds foundational significance in biology. In 1743, the English clergyman Turbevill Needham crushed blackened, abnormal wheat grains in water and observed under his primitive microscope 'an infinite number of small, slender animalcules' wriggling back to life. This was the first scientific observation and documentation of a plant-parasitic nematode and demonstrated the phenomenon of cryptobiosis/anhydrobiosis.\\n\\n2. Biology and Disease Cycle:\\n- When wheat galls (cockles) fall to moist soil or are sown along with wheat seed, moisture activates the dormant second-stage juveniles (J2) inside.\\n- Thousands of J2 emerge, swim in the film of water on the plant stem, and reach the growing apical meristem, where they feed ectoparasitically between young leaves.\\n- During floral initiation, juveniles penetrate the floral primordia, stimulate gall formation, mature into adult males and females, and reproduce. Each gall becomes packed with 10,000 to 30,000 dehydrated J2 juveniles as the plant ripens.\\n\\n3. Symptoms:\\n- Vegetative Phase: Infected seedlings show twisted, wrinkled, curled, and abnormally thickened leaves with excessive tillering.\\n- Reproductive Phase: Spikes are shorter, broader, with glumes flaring outward at wider angles. Normal wheat grains are completely replaced by round to oblong, olive-brown to jet-black, rock-hard galls ('ear-cockles').\\n\\n4. Management:\\n- Brine Flotation: Seed lots are dumped into a 20% sodium chloride (common salt) solution (approx. 2 kg salt in 10 liters water). Light nematode cockles float to the surface and are skimmed off with a sieve; healthy grain sinks to the bottom. The cleaned wheat is rinsed thoroughly in fresh water to remove salt and dried before planting.\\n- Clean Seed Certification: Sowing certified nematode-free seed completely prevents gall introduction.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-SUB04",
            "question": "Discuss the etiology and mechanism of the Tundu disease (yellow ear rot) complex in wheat.",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "MEDIUM",
            "modelAnswer": "Tundu disease (also known as yellow ear rot) is a destructive disease complex of wheat caused by the obligate cooperative interaction between the nematode Anguina tritici and the bacterium Rathayibacter tritici (syn. Clavibacter tritici):\\n\\n1. Vectoring Mechanism:\\nThe bacterium cannot penetrate intact wheat tissues on its own. Second-stage juveniles (J2) of Anguina tritici carry bacterial cells adhering mechanically to their cuticular surfaces from the soil or gall debris into the shoot apex of the host plant.\\n\\n2. Symptom Development:\\n- In the floral primordia, bacterial populations proliferate rapidly under humid, moderate weather conditions (high RH >80% and 20-25°C).\\n- The bacterium secretes an abundant, viscous, bright lemon-yellow slime that glues together the spikelets, emerging leaves, and glumes.\\n- The entire spike emerges malformed, heavily curled, and covered in bright yellow sticky ooze that dries under sunlight into a hard, brittle, yellowish varnish. Grain formation is completely aborted on infected heads.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-SUB05",
            "question": "Describe Molya disease of wheat and barley caused by Heterodera avenae, including symptoms, epidemiology, and control measures.",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "MEDIUM",
            "modelAnswer": "Molya disease is a major limiting factor for rabi wheat and barley cultivation in the light, sandy tract of north-western India (Rajasthan, southern Haryana, and south-western Punjab).\\n\\n1. Causal Agent and Epidemiology:\\n- Causal Organism: Cereal cyst nematode, Heterodera avenae.\\n- Soil Preference: Most destructive in light, sandy to sandy-loam soils with rapid drainage, where juvenile movement is unhindered.\\n- Life Cycle: Monocyclic pest (one generation per year). Juveniles hatch in November-December in response to falling soil temperatures (diapause breakage). Females mature into lemon-shaped white cysts visible on roots by February, transforming into tough, dark brown protective cysts at harvest.\\n\\n2. Symptoms:\\n- Above-ground: Field symptoms appear in distinct, well-demarcated patches of pale yellow, severely stunted, unthrifty plants with poor tillering and delayed heading.\\n- Below-ground: The root system exhibits characteristic bushy, bunchy proliferation of lateral roots ('knotted' or 'bearded' roots) at the points of nematode entry. In late winter, glistening white female bodies (the size of a pinhead) are easily spotted clinging along the main root axis.\\n\\n3. Management Strategies:\\n- Cultural Practices: Deep summer ploughing (2-3 times during May-June) exposes cysts to scorching solar heat and desiccation; crop rotation with non-host crops like mustard, gram (chickpea), fenugreek, or cumin for 2-3 years drasticaly depletes soil cyst counts.\\n- Host Plant Resistance: Cultivation of resistant barley cultivars such as Rajkiran (RD 2052), RD 387, and wheat lines like Raj MR-1 prevents cyst reproduction and reduces soil nematode populations by 70-80% in a single season.\\n- Chemical / Seed Dressing: Soil treatment with carbofuran 3G @ 1.5-2 kg a.i./ha in severe patches.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-SUB06",
            "question": "Explain the genetics, mechanism, and thermal instability of the Mi-1.2 resistance gene in tomato against Meloidogyne species.",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "HARD",
            "modelAnswer": "1. Origin and Nature of Mi-1.2:\\nThe Mi-1.2 gene was introgressed into the cultivated tomato (Solanum lycopersicum) from wild Solanum peruvianum using embryo rescue. It encodes an intracellular NBS-LRR (nucleotide-binding site, leucine-rich repeat) resistance protein that acts as an immune sensor.\\n\\n2. Mechanism of Resistance:\\nUpon invasion of J2 juveniles of Meloidogyne incognita, M. javanica, or M. arenaria, the Mi receptor detects nematode-secreted virulence effectors. This triggers a localized hypersensitive response (HR) involving an oxidative burst, callose deposition, and localized cell death in the root cortex. The nematode fails to establish viable feeding giant cells and either starves or exits the root.\\n\\n3. Thermal Instability:\\nThe Mi-1.2-mediated resistance response is strictly temperature-sensitive. When soil temperatures exceed 28°C (82°F), the Mi protein undergoes conformational changes that block downstream defense signaling. At and above 28°C, resistant tomatoes become fully susceptible to root-knot galling and female reproduction. Once the soil cools below 28°C, resistance signaling is restored in newly developing tissues.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-SUB07",
            "question": "How does grafting onto wild Solanaceous rootstocks solve nematode and bacterial wilt challenges in commercial vegetable production?",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "MEDIUM",
            "modelAnswer": "Vegetable grafting is a transformative physical-genetic pest management tactic:\\n\\n1. Rootstock Selection:\\nWild solanaceous species, particularly Solanum torvum (turkey berry) and Solanum sisymbriifolium, possess high intrinsic genetic immunity or high resistance against Meloidogyne incognita, M. javanica, M. arenaria, and the bacterial wilt pathogen Ralstonia solanacearum.\\n\\n2. Mechanism and Benefits:\\n- High-yielding commercial scions (e.g., hybrid tomato or brinjal) are tube-grafted or cleft-grafted onto vigorously germinated S. torvum seedlings.\\n- The non-host or hypersensitive root architecture of the rootstock prevents nematode galling, giant cell initiation, and bacterial vascular invasion.\\n- The grafted root system confers robust vigor, efficient water and nutrient uptake, and tolerance to abiotic soil stresses (waterlogging and soil cold) while eliminating the need for synthetic soil fumigants or chemical nematicides.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-SUB08",
            "question": "Describe the etiology, symptoms, host-parasite relationship, and management of citrus slow decline caused by Tylenchulus semipenetrans.",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "MEDIUM",
            "modelAnswer": "Citrus slow decline, incited by Tylenchulus semipenetrans (the citrus nematode), is prevalent in citrus orchards worldwide across acid lime, sweet orange, and mandarin groves.\\n\\n1. Parasitic Nature and Host Relationship:\\n- Semi-Endoparasitism: Young vermiform second-stage females invade the epidermis of feeder roots, embedding only their anterior body (head and neck) deep into the cortical tissue while their posterior body swells and remains outside the root.\\n- Induction of Nurse Cells: The nematode feeds upon 6 to 10 specialized cortical cells surrounding its head termed 'nurse cells.' These cells develop dense cytoplasm, enlarged nuclei, and heightened metabolic activity to feed the sedentary female.\\n\\n2. Symptoms:\\n- Below-ground: Feeder roots become shortened, thickened, and decayed. Females secrete a sticky gelatinous matrix from their excretory pore that embeds eggs and cements soil particles to the root surface, giving roots an encrusted, dirty, sandy appearance that cannot be washed clean.\\n- Above-ground: Symptoms appear gradually over years as a progressive 'slow decline.' Impaired nutrient and water uptake manifests as terminal branch dieback ('staghead'), leaf chlorosis resembling zinc/iron deficiency, small unmarketable fruits, and premature leaf drop.\\n\\n3. Management:\\n- Resistant Rootstocks: Planting scions budded onto resistant rootstocks like Poncirus trifoliata (trifoliate orange), Carrizo citrange, or Troyer citrange.\\n- Nursery Sanitation: Using certified nematode-free budwood and raising nursery seedlings in solarized or pasteurized potting media.\\n- Biocontrol & Cultural Measures: Application of organic amendments like neem cake (2-3 kg/tree) and bioagents (Purpureocillium lilacinum or Pochonia chlamydosporia); drip application of fluopyram or biopesticides.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-SUB09",
            "question": "Examine the disease caused by Radopholus similis in banana and black pepper, detailing the 'paring and pralinage' technique.",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "MEDIUM",
            "modelAnswer": "Radopholus similis (the burrowing nematode) is an aggressive migratory endoparasitic pest with a wide tropical host range:\\n\\n1. Pathology in Banana ('Toppling Disease' / 'Black Head'):\\n- Nematodes enter roots and corms, feeding and migrating intracellularly in the parenchymatous cortex.\\n- Secretion of cell-wall degrading enzymes (cellulases, pectinases) causes extensive cortical cell collapse, forming elongated reddish-brown lesions that coalesce into broad, jet-black necrotic cavities.\\n- Destruction of structural anchor roots undermines tree stability; under heavy bunch weight or mild windstorms, mature pseudostems snap at the base and topple over ('toppling disease').\\n\\n2. Pathology in Black Pepper ('Slow Wilt'):\\n- Feeding in roots creates lesions that synergize with soil-borne fungi (Fusarium solani, Phytophthora capsici), causing feeder root necrosis, yellowing of foliage, flaccidity, vine dieback, and total vine death.\\n\\n3. Sucker Treatment: Paring and Pralinage:\\nThis is the standard sanitary method for establishing clean banana orchards:\\n- Paring: All superficial roots and reddish-brown to black necrotic lesions on the corm surface of planting suckers are carefully shaved off using a sharp curved knife until clean white, healthy tissue is exposed.\\n- Pralinage: The pared corm is dipped into a thick mud/clay slurry and dusted with an approved nematicide (e.g., carbofuran 3G @ 40 g per sucker) or neem cake powder (250 g per sucker).\\n- Alternative Hot Water Dip: Dipping peeled suckers in hot water at 53-55°C for 20 minutes kills all internal nematodes without harming corm viability.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-SUB10",
            "question": "Differentiate between Globodera rostochiensis and Globodera pallida in terms of cyst color dynamics, morphology, and virulence.",
            "type": "COMPARISON",
            "marks": 6,
            "difficulty": "HARD",
            "modelAnswer": "Globodera rostochiensis (golden cyst nematode) and Globodera pallida (pale or white cyst nematode) are two closely related quarantine species attacking potato:\\n\\n1. Maturation Color Sequence:\\n- G. rostochiensis: Sedentary females pass through a prolonged, conspicuous golden-yellow chromatic phase lasting 4 to 6 weeks before dying and tanning into a dark brown cyst.\\n- G. pallida: Sedentary females transition directly from glistening pearl-white or cream to dark brown without passing through an intermediate yellow phase.\\n\\n2. Stylet Morphology and Morphometrics:\\n- G. rostochiensis: Average stylet length is shorter (approx. 20-22 μm) with backward-sloping or rounded basal knobs.\\n- G. pallida: Average stylet length is longer (approx. 24-27 μm) with anteriorly pointed or cupped basal knobs.\\n\\n3. Perineal Pattern & Cuticular Ridges:\\n- The distance between the anus and the circumfenestrate fenestra is relatively longer in G. rostochiensis (higher Granek's ratio) compared to G. pallida.\\n\\n4. Pathotype Virulence & Host Plant Resistance:\\n- G. rostochiensis pathotypes (Ro1 to Ro5) are generally managed effectively using major dominant H1 gene resistance (present in cv. Kufri Swarna).\\n- G. pallida pathotypes (Pa1 to Pa3) are genetically more variable, polygenic, and overcome the H1 gene, necessitating complex multi-gene resistant cultivars.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-SUB11",
            "question": "Discuss the reasons for the survival persistence of potato cyst nematodes in soil and explain how host root exudates stimulate egg hatch.",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "HARD",
            "modelAnswer": "1. Survival Persistence of Cysts:\\nPotato cyst nematodes (Globodera spp.) survive in field soil for 15-20 years even in the total absence of a host crop because of the unique biochemical resilience of the cyst wall:\\n- The female cuticle undergoes polyphenol-oxidase-mediated enzymatic tanning, cross-linking proteins into an impermeable, highly durable sclerotized shell.\\n- Inside the cyst, unhatched second-stage juveniles (J2) reside coiled within rigid eggshells bathed in concentrated trehalose fluid, entering an extreme state of metabolic dormancy (quiescence/diapause) resistant to desiccation, sub-zero cold, and microbial breakdown.\\n\\n2. Host Exudate-Mediated Hatching:\\n- Spontaneous hatching in water is negligible (<5%).\\n- Hatching requires chemical trigger compounds exuded by host solanaceous roots (potato, tomato, eggplant), notably the triterpenoid dialdehyde solanoeclepin A.\\n- Solanoeclepin A alters the permeability of the eggshell vitelline membrane, causing efflux of trehalose and influx of water, which rehydrates the dormant J2 and stimulates it to pierce the eggshell using its stylet.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-SUB12",
            "question": "What is plant quarantine? Distinguish between external (international) and internal (domestic) quarantine with relevant examples.",
            "type": "COMPARISON",
            "marks": 6,
            "difficulty": "EASY",
            "modelAnswer": "1. Definition of Plant Quarantine:\\nPlant quarantine refers to statutory legal restrictions imposed by governmental authorities on the movement of plants, plant products, seeds, and soil to prevent the introduction, establishment, and geographical spread of dangerous exotic or regulated pests and diseases.\\n\\n2. External (International) Quarantine:\\n- Objective: Prevents the introduction of alien, exotic pests and pathogens into a country across international political borders.\\n- Mechanism: Inspection, fumigation, phytosanitary certification, and post-entry quarantine (PEQ) at designated sea ports, international airports, and land border check posts.\\n- Example: Strict prohibition under Indian Plant Quarantine Order 2003 on the commercial import of raw potato tubers or uncertified planting stock from countries with Globodera or potato wart.\\n\\n3. Internal (Domestic) Quarantine:\\n- Objective: Restricts or regulates the interstate or inter-district movement of plant materials within national boundaries to prevent an established localized pest from spreading into uninfected agricultural zones.\\n- Example: Prohibition on the movement of seed potatoes and soil from the Nilgiri and Kodaikanal hills (Tamil Nadu) to any other state in India to prevent spreading potato cyst nematodes (Globodera rostochiensis and G. pallida).",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-SUB13",
            "question": "Outline the history, key provisions, and powers granted under the Destructive Insects and Pests Act (DIPA) of 1914 in India.",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "MEDIUM",
            "modelAnswer": "1. Historical Context:\\nThe Destructive Insects and Pests Act (Act No. II of 1914) was enacted on February 3, 1914, following the devastating accidental introduction of insect pests and fungal blights into British India through unregulated plant trade.\\n\\n2. Key Legislative Provisions:\\n- Section 3: Empowers the Central Government to prohibit or regulate, by official gazette notification, the import into India (or any part thereof) of any article or class of articles likely to cause infection to any crop or plant.\\n- Section 4A: Empowers the Central Government to prohibit or regulate the export of plant materials from one State to another within India (statutory foundation for domestic quarantine).\\n- Section 5: Authorizes State Governments to frame rules for the detention, inspection, disinfection, or destruction of imported or interstate consignments, as well as empowering customs officials to seize offending consignments.\\n- Penalties: Confers legal authority to impose fines and confiscate prohibited consignments lacking valid import permits or phytosanitary certificates.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-SUB14",
            "question": "Explain the structure, regulatory scope, and significant features of the Plant Quarantine (Regulation of Import into India) Order, 2003 (PQO 2003).",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "MEDIUM",
            "modelAnswer": "The Plant Quarantine (Regulation of Import into India) Order, 2003 (PQO 2003), promulgated under Section 3(1) of DIPA 1914, overhauled Indian agricultural biosecurity to conform with the WTO Agreement on Sanitary and Phytosanitary Measures (SPS Agreement):\\n\\n1. Regulatory Scope and Objectives:\\n- Regulates the commercial and non-commercial import of all seeds, plants, plant products, tissue culture materials, genetically modified organisms, and biocontrol agents into India.\\n- Aims to prevent the introduction of quarantine pests while facilitating legitimate agricultural trade.\\n\\n2. Structural Schedules of PQO 2003:\\n- Schedule IV: Prohibits the import of specific commodities from specified countries where devastating quarantine pests are endemic (e.g., raw potato from PCN-endemic regions).\\n- Schedule V: Governs the import of germplasm, transgenic materials, and experimental seeds by designated research institutions (e.g., NBPGR) subject to strict Post-Entry Quarantine (PEQ).\\n- Schedule VI: Details permitted agricultural commodities, their country of origin, authorized ports of entry, and mandatory Additional Declarations required on Phytosanitary Certificates (including specific treatments like methyl bromide fumigation or cold treatment).\\n- Schedule VII: Lists commodities permitted for consumption/processing with standard inspection.\\n\\n3. Key Features and Procedures:\\n- Mandatory Import Permit (IP): Importers must obtain an official Import Permit issued by the Plant Protection Adviser before dispatch from the country of origin.\\n- Mandatory Phytosanitary Certificate (PSC): Every consignment must be accompanied by a valid PSC from the exporting NPPO certifying freedom from quarantine pests.\\n- Pest Risk Analysis (PRA): No new commodity-origin pathway is permitted entry without prior PRA scientific evaluation.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-SUB15",
            "question": "What is Pest Risk Analysis (PRA)? Detail the three sequential stages of PRA as defined under International Standards for Phytosanitary Measures (ISPM).",
            "type": "LONG_ANSWER",
            "marks": 10,
            "difficulty": "HARD",
            "modelAnswer": "Pest Risk Analysis (PRA) is the process of evaluating biological or other scientific and economic evidence to determine whether an organism is a pest, whether it should be regulated, and the strength of any phytosanitary measures to be taken against it (ISPM No. 2 and 11):\\n\\n1. Stage 1: Initiation:\\n- Triggers: Initiated either by the identification of a pest pathway (e.g., a request to import a new crop commodity from a specific country) or identification of a specific pest (e.g., a new invasive nematode expanding internationally).\\n- Scope: Clearly defines the PRA area, pest species, host commodities, and trade pathways.\\n\\n2. Stage 2: Pest Risk Assessment:\\nThis is the core scientific evaluation phase divided into sequential components:\\n- Pest Categorization: Determines whether the organism meets the criteria of a 'quarantine pest' (is it present in the PRA area? if present, is it restricted and under official control? does it have economic damage potential?).\\n- Assessment of Introduction & Spread: Evaluates the probability of entry along the commodity pathway (survival in transit, volume of trade, port of entry), probability of establishment (climate matching, host availability), and potential for spread (natural dispersal, domestic transport).\\n- Assessment of Economic Consequences: Quantifies direct crop yield losses, control costs, loss of export markets, and environmental damage.\\n\\n3. Stage 3: Pest Risk Management:\\n- Evaluates options to mitigate identified risks to an acceptable level of phytosanitary protection.\\n- Options include: sourcing from pest-free areas (PFAs), pre-shipment heat or chemical fumigation, inspection and laboratory indexing, restricting import to in vitro tissue culture, and post-entry quarantine (PEQ) growth.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-SUB16",
            "question": "Define a 'Phytosanitary Certificate' and explain its standard components and international legal significance under the IPPC.",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "MEDIUM",
            "modelAnswer": "1. Definition and Legal Basis:\\nA Phytosanitary Certificate (PSC) is an official legal paper or accredited electronic document (ePhyto) issued by the National Plant Protection Organization (NPPO) of an exporting country to certify that a consignment of plants or plant products conforms with the phytosanitary import regulations of the importing country, in accordance with the International Plant Protection Convention (IPPC; ISPM No. 12).\\n\\n2. Standard Components:\\n- Description of Consignment: Name and address of exporter and consignee, botanical names of plants, quantity declared, number and description of packages, distinguishing marks.\\n- Origin & Transport: Place of origin and declared point of entry.\\n- Phytosanitary Declaration: An official certification that the consignment has been inspected/tested according to appropriate procedures and found free from quarantine pests.\\n- Additional Declarations: Specific declarations mandated by the importing country's regulations (e.g., 'Consignment sourced from an area free of Globodera rostochiensis').\\n- Disinfestation/Disinfection Treatment: Details of any chemical or physical treatment applied (date, treatment type, chemical, concentration, exposure time, and temperature).",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-SUB17",
            "question": "CASE STUDY: A high-density commercial banana plantation in Kerala reports that 30% of mature fruiting trees toppled over following mild monsoon showers. Corm examination reveals extensive reddish-black necrotic cavities. Diagnose the cause, explain the disease progression, and prescribe immediate and long-term remedies.",
            "type": "CASE_STUDY",
            "marks": 10,
            "difficulty": "HARD",
            "modelAnswer": "1. Diagnosis:\\nThe plantation is suffering from 'Toppling Disease' (also called 'Black Head') caused by severe infestation of the burrowing nematode, Radopholus similis.\\n\\n2. Disease Progression in the Orchard:\\n- Inoculum Source: The primary infestation originated from planting unpared, infected banana sword suckers carrying dormant endoparasitic populations.\\n- Tissue Colonization: Active vermiform juveniles and adults penetrated primary cord roots and the rhizome corm, tunneling intracellularly and feeding on cortical parenchyma cells.\\n- Cavity Formation: Secretion of endogenous pectolytic enzymes destroyed cell walls, forming extensive interconnected necrotic tunnels. Secondary infection by opportunistic soil fungi (Fusarium oxysporum, Cylindrocladium) accelerated tissue rotting, transforming reddish lesions into deep black voids.\\n- Structural Failure: Feeder root loss caused severe nutritional starvation; destruction of anchoring cord roots rendered the root system incapable of supporting the heavy fruiting pseudostem, leading to catastrophic toppling under minor wind stress.\\n\\n3. Corrective and Preventive Remedies:\\n- Immediate Management on Standing Crops:\\n  a. Earthing up and propping leaning plants with sturdy bamboo poles to prevent further toppling.\\n  b. Soil drenching around pseudostem bases with fluopyram or application of carbofuran 3G @ 40 g/plant or neem cake @ 500 g/plant followed by light irrigation.\\n  c. Spot application of the bioagent Purpureocillium lilacinum or Trichoderma viride enriched in farmyard manure.\\n- Long-Term Replanting Protocol:\\n  a. Complete eradication and burning of heavily infected corm stubs.\\n  b. Crop rotation with non-hosts (sugarcane, sunn hemp) or wetland flooded rice for 6-12 months to starve surviving nematodes.\\n  c. Mandatory Sucker Sanitation: 'Paring' to shave away all reddish-black tissues followed by 'Pralinage' (clay slurry + carbofuran or neem cake) or immersion in hot water at 55°C for 20 minutes.\\n  d. Utilization of certified pest-free tissue culture plantlets raised in sterile substrates.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-SUB18",
            "question": "APPLICATION: You are an agricultural development officer inspecting a farmer's wheat field in south Rajasthan displaying stunted, pale patches with 'bearded' roots. Outline step-by-step advisory recommendations including cultural, varietal, and chemical tactics to manage Molya disease.",
            "type": "APPLICATION",
            "marks": 10,
            "difficulty": "HARD",
            "modelAnswer": "As an Agricultural Development Officer, here is the comprehensive advisory protocol for managing Molya disease (Heterodera avenae):\\n\\n1. Diagnostic Confirmation:\\n- Examine stunted, chlorotic field patches.\\n- Carefully wash root systems in clear water to verify excessive rootlet proliferation ('bearded/knotted roots') and inspect for glistening white female cysts adhering along roots (observable in February).\\n- Collect representative soil samples and extract brown cysts using the Fenwick can method to quantify pre-plant cyst densities (economic threshold: >2-3 eggs/g soil).\\n\\n2. Immediate Post-Harvest Recommendations (Summer Tactics):\\n- Deep Summer Ploughing: Instruct the farmer to carry out 2 to 3 deep summer ploughings with a disc or mouldboard plough during May and June at 10-15 day intervals. This turns up soil cysts from the root zone to the surface, where lethal soil temperatures (45-50°C) and solar radiation desiccate and destroy encysted eggs.\\n\\n3. Crop Rotation & Diversification Strategy:\\n- Strictly break continuous wheat-wheat or wheat-barley monoculture.\\n- Rotate with completely non-host rabi crops for 1 to 2 consecutive years:\\n  a. Mustard (Brassica juncea) — releases glucosinolate biofumigant compounds.\\n  b. Chickpea (Cicer arietinum) or Fenugreek (Trigonella foenum-graecum).\\n- This tactic causes non-stimulated juvenile starvation and depletes cyst populations by >75%.\\n\\n4. Resistant Cultivars Selection:\\n- Advise planting certified resistant cultivars if rabi cereals must be grown:\\n  a. Resistant Barley: Rajkiran (RD 2052) or RD 387.\\n  b. Resistant Wheat: Raj MR-1.\\n- These varieties stimulate juvenile penetration but block syncytium formation, preventing female cyst development.\\n\\n5. Chemical and Biological Interventions:\\n- In heavily infested patches where rotation is impossible: furrow application of carbofuran 3G @ 1.5-2.0 kg a.i./ha at the time of sowing.\\n- Soil enrichment with Trichoderma harzianum or Pochonia chlamydosporia at 5 kg/ha mixed in well-rotted FYM.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-SUB19",
            "question": "Compare the quarantine regulatory protocols between international import clearance at seaports and domestic quarantine checkposts.",
            "type": "COMPARISON",
            "marks": 6,
            "difficulty": "HARD",
            "modelAnswer": "1. International Import Clearance (Seaports/Airports):\\n- Authority: Executed by Plant Quarantine Stations under the Directorate of Plant Protection, Quarantine and Storage (DPPQS), Ministry of Agriculture.\\n- Mandate: Prevent the introduction of exotic quarantine pests not present in the country.\\n- Documentation Required: Valid Import Permit (IP) issued in advance, official Phytosanitary Certificate (PSC) from exporting NPPO, and Bill of Lading.\\n- Inspection & Testing: 100% manifest examination; representative physical sampling of containers; on-site visual screening, microscopic analysis, X-ray inspection, or ELISA/PCR for latent pathogens.\\n- Enforcement Actions: Mandatory Methyl bromide fumigation, release, detention, re-export, or incineration/destruction at the importer's cost.\\n\\n2. Domestic Quarantine Checkposts (State Borders):\\n- Authority: Jointly executed by State Departments of Agriculture and Central Quarantine personnel under Section 4A of DIPA 1914.\\n- Mandate: Prevent the transport of localized, restricted pests (e.g., Globodera cyst nematodes from Nilgiris/Kodaikanal) into pest-free agricultural zones within India.\\n- Documentation Required: Domestic transit passes, certificates of origin, and seed tuber certification.\\n- Inspection: Interception and inspection of vehicular traffic carrying target commodities (e.g., trucks loaded with potatoes) exiting quarantined hill tracts.\\n- Enforcement Actions: Seizure and destruction or re-direction of uncertified potato consignments lacking pest-free origin verification.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-SUB20",
            "question": "Explain the role and functioning of Post-Entry Quarantine (PEQ) facilities in plant biosecurity.",
            "type": "SHORT_ANSWER",
            "marks": 5,
            "difficulty": "MEDIUM",
            "modelAnswer": "1. Purpose and Importance of PEQ:\\nPost-Entry Quarantine (PEQ) is a crucial biosecurity safeguard for imported plant materials that carry potential latent, systemic, or internal pathogens (e.g., viruses, phytoplasmas, endoparasitic nematodes, viroids) that cannot be reliably detected by visual dockside inspection at ports of entry.\\n\\n2. Facility Specifications:\\n- PEQ facilities consist of specialized, climate-controlled, insect-proof glasshouses or containment screens equipped with negative/positive air pressure, HEPA filtration, double-door airlocks, and sterilized growth substrates.\\n\\n3. Operational Protocol:\\n- High-risk propagating material (cuttings, scions, tissue culture clones, germplasm) released provisionally from ports is transferred directly to designated PEQ facilities or approved importer PEQ glasshouses.\\n- The plants are grown for a mandatory observation period (typically 1 to 2 growing seasons or 6-12 months) under periodic inspection by designated plant pathologists and nematologists.\\n- If symptoms emerge or indexing tests (ELISA, PCR, bioassays) confirm quarantine pests, the entire lot is destroyed inside the facility by autoclaving or incineration. Only symptom-free, indexed healthy plants are finally released for multiplication.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        }
    ],
    "flashcards": [
        {
            "id": "PTH214-U5-FC01",
            "front": "What is the causal agent and typical symptom of 'white tip' disease in rice?",
            "back": "Aphelenchoides besseyi; causes chlorosis and creamy-white apical drying of the top 3-5 cm of leaf blades and spikelet sterility.",
            "hint": "Foliar nematode surviving anhydrobiotically in seed hulls.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-FC02",
            "front": "How is Aphelenchoides besseyi eradicated from infected rice seeds without chemicals?",
            "back": "Hot water seed treatment at 52-53°C for 15 minutes following a 12-hour pre-soak in cool water.",
            "hint": "Carefully calibrated physical thermal treatment.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-FC03",
            "front": "What tissue does Hirschmanniella oryzae colonize inside rice roots?",
            "back": "Aerenchyma air lacunae in the cortical tissue of flooded submerged roots, causing cortex browning and tillering reduction.",
            "hint": "Internal gas spaces of wetland plants.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-FC04",
            "front": "What characteristic gall shape does Meloidogyne graminicola produce on rice?",
            "back": "Characteristic hook-shaped or curled swellings right at the tips of infested roots.",
            "hint": "Curved claw or hook at root apex.",
            "syllabusTopic": "Nematode Diseases of Rice: White Tip, Rice Root, and Rice Root-Knot Nematodes"
        },
        {
            "id": "PTH214-U5-FC05",
            "front": "What was the first plant-parasitic nematode discovered in history, by whom, and when?",
            "back": "Anguina tritici (wheat ear-cockle nematode), discovered by Turbevill Needham in 1743 upon crushing wheat seed galls in water.",
            "hint": "Needham observed animalcules in 1743.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-FC06",
            "front": "How are wheat ear-cockles (Anguina tritici galls) separated from healthy grain?",
            "back": "By flotation in a 20% brine (common salt) solution; light cockles float to the top and are skimmed off, while healthy grain sinks.",
            "hint": "Specific gravity separation in 20% salt water.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-FC07",
            "front": "What organisms form the synergistic complex causing Tundu (yellow ear rot) disease of wheat?",
            "back": "Anguina tritici (nematode vector) and the bacterium Rathayibacter tritici (syn. Clavibacter tritici).",
            "hint": "Nematode + bacterium resulting in bright yellow slime.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-FC08",
            "front": "What is Molya disease and what nematode causes it?",
            "back": "A devastating cereal disease causing stunting and 'bearded' roots in wheat and barley in northern India, caused by Heterodera avenae.",
            "hint": "Cereal cyst nematode in Rajasthan/Haryana.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-FC09",
            "front": "Name a resistant barley variety bred specifically for managing Molya disease in India.",
            "back": "Rajkiran (RD 2052) or RD 387.",
            "hint": "Famous resistant barley from Rajasthan.",
            "syllabusTopic": "Nematode Diseases of Wheat and Barley: Ear-Cockle, Tundu Disease, and Molya Disease"
        },
        {
            "id": "PTH214-U5-FC10",
            "front": "What is the Mi-1.2 gene in tomato and what limits its effectiveness?",
            "back": "An NBS-LRR resistance gene from Solanum peruvianum against Meloidogyne; it breaks down reversibly when soil temperatures exceed 28°C.",
            "hint": "Thermal instability above 28°C.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-FC11",
            "front": "Which wild solanaceous plant is commonly used as a nematode-resistant rootstock for grafting eggplant and tomato?",
            "back": "Solanum torvum (turkey berry).",
            "hint": "Vigorous wild solanaceous shrub.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-FC12",
            "front": "What nematode causes 'slow decline' in citrus and what specialized feeding cells does it induce?",
            "back": "Tylenchulus semipenetrans; induces a cluster of 6 to 10 metabolic 'nurse cells' in cortical root tissue.",
            "hint": "Sedentary semi-endoparasite of citrus.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-FC13",
            "front": "Why do feeder roots infested by Tylenchulus semipenetrans appear encrusted with soil?",
            "back": "Gelatinous matrix secreted from the female's excretory pore covers the root surface, cementing adhering sand and soil particles.",
            "hint": "Sticky egg matrix gluing sand.",
            "syllabusTopic": "Nematodes of Horticultural Crops: Vegetable Root-Knot, Mi Gene Resistance, and Citrus Slow Decline"
        },
        {
            "id": "PTH214-U5-FC14",
            "front": "What nematode causes 'toppling disease' or 'black head' in banana?",
            "back": "Radopholus similis (the burrowing nematode).",
            "hint": "Migratory endoparasite tunneling in roots and corms.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-FC15",
            "front": "What is 'paring and pralinage' in banana cultivation?",
            "back": "Paring is peeling away reddish-black necrotic root and corm lesions; pralinage is dipping the sucker in clay slurry dusted with nematicide or neem cake.",
            "hint": "Two-step sanitation for banana suckers.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-FC16",
            "front": "Where are potato cyst nematodes (Globodera rostochiensis & G. pallida) found in India?",
            "back": "Confined to the temperate high-elevation tracts of the Nilgiris and Kodaikanal hills in Tamil Nadu.",
            "hint": "Southern hill stations under domestic quarantine.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-FC17",
            "front": "How do Globodera rostochiensis and Globodera pallida differ in female color transformation?",
            "back": "G. rostochiensis passes through a prolonged golden-yellow phase before turning brown; G. pallida transitions directly from white/cream to brown.",
            "hint": "Golden nematode vs pale cyst nematode.",
            "syllabusTopic": "Nematodes of Plantation and Tuber Crops: Banana Burrowing Nematode and Potato Cyst Nematodes"
        },
        {
            "id": "PTH214-U5-FC18",
            "front": "Name the landmark Indian legislative act passed in 1914 that underpins all plant quarantine regulations.",
            "back": "Destructive Insects and Pests Act (DIPA), 1914 (Act II of 1914).",
            "hint": "Century-old legislative bedrock of Indian quarantine.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-FC19",
            "front": "What are the three core stages of Pest Risk Analysis (PRA)?",
            "back": "Stage 1: Initiation; Stage 2: Pest Risk Assessment; Stage 3: Pest Risk Management.",
            "hint": "Defined under ISPM No. 2 and 11.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        },
        {
            "id": "PTH214-U5-FC20",
            "front": "What is a Phytosanitary Certificate (PSC)?",
            "back": "An official document issued by the National Plant Protection Organization (NPPO) of an exporting country certifying that a consignment meets importing phytosanitary requirements.",
            "hint": "Official biosecurity passport for agricultural trade.",
            "syllabusTopic": "Plant Quarantine, Phytosanitary Regulations, DIPA 1914, and Pest Risk Analysis"
        }
    ]
}

def generate_ts():
    raw_mcqs = unit_data["mcqs"]
    raw_subjs = unit_data["subjectiveQuestions"]
    fcs = unit_data["flashcards"]
    assert len(raw_mcqs) == 60, f"Expected 60 MCQs, got {len(raw_mcqs)}"
    assert len(raw_subjs) == 20, f"Expected 20 Subj, got {len(raw_subjs)}"
    assert len(fcs) == 20, f"Expected 20 FCs, got {len(fcs)}"
    for i, m in enumerate(raw_mcqs):
        assert m["correctOption"] in ["A", "B", "C", "D"], f"Invalid option {m['correctOption']} in MCQ {i+1}"
        assert len(m["options"]) == 4, f"MCQ {i+1} does not have 4 options"
    diffs = [m["difficulty"] for m in raw_mcqs]
    print(f"MCQ Diffs: EASY={diffs.count('EASY')}, MEDIUM={diffs.count('MEDIUM')}, HARD={diffs.count('HARD')}")
    assert diffs.count('EASY') == 20, f"EASY count: {diffs.count('EASY')}"
    assert diffs.count('MEDIUM') == 25, f"MEDIUM count: {diffs.count('MEDIUM')}"
    assert diffs.count('HARD') == 15, f"HARD count: {diffs.count('HARD')}"

    # Transform into canonical UnitMCQ format
    formatted_mcqs = []
    for m in raw_mcqs:
        formatted_mcqs.append({
            "id": m["id"],
            "questionText": m["question"],
            "options": {
                "A": m["options"][0],
                "B": m["options"][1],
                "C": m["options"][2],
                "D": m["options"][3]
            },
            "correctOption": m["correctOption"],
            "explanation": m["explanation"],
            "difficulty": m["difficulty"].capitalize(),
            "syllabusTopic": m["syllabusTopic"]
        })

    # Transform into canonical UnitSubjectiveQuestion format
    formatted_subjs = []
    for s in raw_subjs:
        lines = [line.strip().lstrip("123456789.-* ") for line in s["modelAnswer"].split("\\n") if line.strip()]
        outline_pts = [l for l in lines if len(l) > 10 and not l.startswith("Section")][:5]
        if len(outline_pts) < 3:
            outline_pts = [
                "Etiological characterization and taxonomic identity of causal organism",
                "Characteristic macroscopic symptom expression on host roots, shoots, and yield components",
                "Epidemiological dissemination pathways, survival structures, and environmental conducive factors",
                "Formulation of integrated management tactics combining host resistance, sanitation, and biosecurity protocols"
            ]
        formatted_subjs.append({
            "id": s["id"],
            "questionType": s["type"],
            "questionText": s["question"],
            "contextScenario": "Agricultural biosecurity inspection and diagnostic scenario" if s["type"] == "CASE_STUDY" else None,
            "modelAnswer": s["modelAnswer"].replace("\\n", "\n"),
            "outlinePoints": outline_pts,
            "maxMarks": s["marks"],
            "difficulty": s["difficulty"].capitalize(),
            "syllabusTopic": s["syllabusTopic"]
        })

    formatted_sections = []
    for sec in unit_data["notes"]["sections"]:
        formatted_sections.append({
            "id": sec["id"].upper(),
            "heading": sec["title"],
            "content": sec["content"].replace("\\n", "\n")
        })

    canonical_unit5 = {
        "unitNumber": 5,
        "title": unit_data["title"],
        "shortDescription": unit_data["shortDescription"],
        "estimatedReadTimeMinutes": unit_data["estimatedReadTimeMinutes"],
        "syllabusTopics": unit_data["syllabusTopics"],
        "notes": {
            "learningObjectives": unit_data["notes"]["learningObjectives"],
            "sections": formatted_sections,
            "keyTakeaways": unit_data["notes"]["keyTakeaways"],
            "commonMisunderstandings": unit_data["notes"]["commonMisunderstandings"],
            "summary": unit_data["notes"]["summary"]
        },
        "mcqs": formatted_mcqs,
        "subjectiveQuestions": formatted_subjs,
        "flashcards": fcs
    }

    ts_content = f'''import {{ UnitContent }} from "./types";

export const unit5Content: UnitContent = {json.dumps(canonical_unit5, indent=2)};
'''
    with open("server/data/pth214/unit5.ts", "w", encoding="utf-8") as f:
        f.write(ts_content)
    print("Generated PTH214 Unit 5 in canonical format: 60 MCQs, 20 Subj, 20 Flashcards")

if __name__ == "__main__":
    generate_ts()
