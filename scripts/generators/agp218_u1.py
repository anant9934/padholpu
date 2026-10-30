"""AGP218 Unit 1 Data Generator: Principles of Crop Production"""

def get_unit1_data():
    syllabus_topics = [
        "Agronomic classification of crops; agro-climatic zones of India",
        "Cropping systems, farming systems, and sustainable agriculture",
        "Crop ecology, weather parameters, and climate resilience in Kharif season",
        "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
        "Plant growth regulators and crop ideotype concept in Kharif crops"
    ]

    notes = {
        "learningObjectives": [
            "Classify field crops according to agronomic utility, life cycle, and photoperiod, and analyze the 15 Planning Commission agro-climatic zones of India.",
            "Differentiate between cropping systems (monoculture, multiple cropping, intercropping) and integrated farming systems for sustainable agriculture.",
            "Examine crop ecology, thermal time (GDD), solar radiation interception, and climate resilience strategies in the Kharif season.",
            "Deconstruct soil-plant-water relations, physiological drought tolerance mechanisms, water use efficiency (WUE), and critical crop growth stages for irrigation.",
            "Evaluate the physiological modes of action of plant growth regulators (PGRs) and the Donald crop ideotype concept for Kharif cereals and pulses."
        ],
        "sections": [
            {
                "id": "sec-agp218-1-1",
                "heading": "1. Agronomic Classification of Crops and Agro-Climatic Zones of India",
                "content": "Agronomy classifies economic plants based on their commercial use, life cycle, botanical families, and ecological adaptations.\n\n### Major Agronomic Classifications\n- **By Economic Utility:** Cereals (Gramineae/Poaceae - rice, maize, sorghum), Pulses/Grain Legumes (Fabaceae - pigeonpea, green gram, soybean), Oilseeds (groundnut, sesame, sunflower), Fiber crops (cotton, jute), Forage/Fodder crops (sorghum, cowpea), and Commercial/Cash crops (sugarcane).\n- **By Season:** Kharif (monsoon crops sown June-July, harvested Sept-Oct; e.g., rice, maize, groundnut), Rabi (winter crops sown Oct-Nov, harvested Feb-April; e.g., wheat, chickpea, mustard), and Zaid (summer crops sown Feb-March, harvested April-May; e.g., moong, watermelon).\n- **By Photoperiod:** Short-day plants (require dark period longer than critical night length to flower; e.g., traditional rice, soybean), Long-day plants (require dark period shorter than critical night length; e.g., wheat, barley), and Day-neutral plants (flowering insensitive to photoperiod; e.g., maize, sunflower, cotton).\n\n### Planning Commission's 15 Agro-Climatic Zones of India\nIn 1988, the Planning Commission delineated India into 15 broad agro-climatic zones based on homogeneity in rainfall, temperature, soil topography, water resources, and existing cropping patterns: (1) Western Himalayan, (2) Eastern Himalayan, (3) Lower Gangetic Plain, (4) Middle Gangetic Plain, (5) Upper Gangetic Plain, (6) Trans-Gangetic Plain, (7) Eastern Plateau and Hills, (8) Central Plateau and Hills, (9) Western Plateau and Hills, (10) Southern Plateau and Hills, (11) East Coast Plains and Hills, (12) West Coast Plains and Ghats, (13) Gujarat Plains and Hills, (14) Western Dry Region (Thar Desert), and (15) The Islands Region.",
                "subsections": [
                    {
                        "subheading": "ICAR's 20 Agro-Ecological Regions (AER)",
                        "content": "ICAR and the National Bureau of Soil Survey and Land Use Planning (NBSS&LUP) refined these into 20 Agro-Ecological Regions based on physiography, soils, bioclimatic types, and Length of Growing Period (LGP)."
                    }
                ]
            },
            {
                "id": "sec-agp218-1-2",
                "heading": "2. Cropping Systems, Farming Systems, and Sustainability",
                "content": "A **Cropping Pattern** represents the yearly spatial and temporal arrangement of crops on a given area. A **Cropping System** encompasses the cropping pattern and its management to extract maximum economic return while conserving natural resources.\n\n### Typology of Cropping Systems\n- **Monoculture / Sole Cropping:** Cultivating only one crop variety in the field season after season (e.g., continuous low-land puddle rice).\n- **Multiple Cropping:** Cultivating two or more crops on the same field in a single calendar year:\n  - *Intercropping:* Growing two or more crops simultaneously in distinct row configurations (e.g., Pigeonpea + Soybean in 2:4 row ratio).\n  - *Sequential / Relay Cropping:* Growing two or more crops in sequence; in relay cropping, the succeeding crop is sown into the standing preceding crop before harvest (e.g., relay sowing of lathyrus or lentil into standing paddy).\n  - *Alley Cropping:* Growing food crops in alleys between rows of trees or shrubs.\n\n### Integrated Farming Systems (IFS)\nIFS combines crop husbandry with livestock, poultry, fishery, apiculture, mushroom cultivation, and biogas. Wastes or by-products from one enterprise serve as the bio-input for another (e.g., crop residues feed dairy cattle; cow dung generates biogas and bio-slurry; slurry fertilizes fish ponds; nutrient-rich pond silt enriches crop fields).",
                "subsections": [
                    {
                        "subheading": "Cropping Intensity (CI)",
                        "content": "Calculated as: $$\\text{Cropping Intensity (\\%)} = \\left( \\frac{\\text{Gross Cropped Area}}{\\text{Net Sown Area}} \\right) \\times 100$$. National cropping intensity in India is approximately 143%."
                    }
                ]
            },
            {
                "id": "sec-agp218-1-3",
                "heading": "3. Crop Ecology, Weather Parameters, and Climate Resilience",
                "content": "Crop ecology investigates the bidirectional interactions between agricultural plants and their abiotic and biotic environment.\n\n### Critical Agro-Meteorological Parameters in Kharif\n- **Solar Radiation & Photosynthetically Active Radiation (PAR):** Wavelengths between 400 nm and 700 nm drive photosynthesis. C4 crops (maize, sorghum, sugarcane) exhibit no photorespiration and utilize high solar irradiance efficiently, whereas C3 crops (rice, soybean, groundnut) photorespire and saturate at lower irradiance.\n- **Growing Degree Days (GDD / Thermal Time):** Quantifies heat accumulation driving plant phenological development: $$\\text{GDD} = \\sum \\left[ \\frac{T_{\\max} + T_{\\min}}{2} - T_{\\text{base}} \\right]$$. Base temperatures: 10°C for rice/maize, 4°C for temperate wheat.\n- **Monsoon Dynamics and Kharif Vulnerability:** Over 55% of Indian net cultivated area is rainfed. The South-West monsoon (June-September) accounts for 75% of annual precipitation. Erratic monsoon onsets, prolonged mid-season dry spells (exceeding 15-20 days), and terminal heat stress cause catastrophic yield reductions.\n\n### Climate Resilience and Contingency Crop Planning\nContingency measures for delayed monsoon: (1) Sowing short-duration alternative cultivars (e.g., replacing long-duration rice with pearl millet, sesame, or horsegram); (2) Promoting Direct Seeded Rice (DSR) to avoid nursery delay; (3) Foliar spraying of 2% potassium chloride (KCl) or 1% urea during dry spells to maintain leaf turgor.",
                "subsections": [
                    {
                        "subheading": "C3 vs C4 Photosynthetic Pathways",
                        "content": "C4 crops possess Kranz leaf anatomy, use PEP carboxylase to fix CO2 with zero photorespiration, and achieve higher Water Use Efficiency (WUE) and temperature tolerance than C3 plants."
                    }
                ]
            },
            {
                "id": "sec-agp218-1-4",
                "heading": "4. Soil-Plant-Water Relations and Water Use Efficiency (WUE)",
                "content": "Water is the essential medium for nutrient transport, cell turgidity, enzymatic reactions, and thermal regulation via transpiration.\n\n### Soil Moisture Constants and Energy Concepts\n- **Saturation Capacity:** All soil pore spaces (macro and micro) are completely filled with water (soil water potential $\\approx 0$ bar).\n- **Field Capacity (FC):** Water retained in soil after excess gravitational water has drained away (1-3 days after rain); soil matric potential is $-0.1$ to $-0.33$ bar.\n- **Permanent Wilting Point (PWP):** Soil moisture percentage at which plant roots can no longer extract water; leaves wilt irreversibly (soil water potential is $-15$ bar).\n- **Available Water Capacity (AWC):** Soil moisture held between Field Capacity and Permanent Wilting Point ($AWC = FC - PWP$).\n\n### Water Use Efficiency (WUE)\nDefined as the ratio of marketable crop yield ($Y$) to total water consumed through evapotranspiration ($ET$): $$\\text{WUE} = \\frac{Y}{ET}$$ (kg/ha-mm). Micro-irrigation (drip/sprinkler) elevates WUE by 40-70% compared to traditional surface flood irrigation.\n\n### Critical Stages for Irrigation in Major Kharif Crops\nMoisture stress during critical physiological phases causes irreversible yield losses:\n- **Rice:** Tillering, Panicle Initiation, Flowering (heading), and Milking.\n- **Maize:** Tasseling and Silking (most sensitive).\n- **Sorghum / Pearl Millet:** Flag leaf emergence, Flowering, and Grain filling.\n- **Soybean:** Pod initiation and Seed development.\n- **Groundnut:** Flowering, Pegging (crucial), and Pod development.\n- **Cotton:** Square formation, Flowering, and Early boll development.",
                "subsections": [
                    {
                        "subheading": "Physiological Drought Tolerance Mechanisms",
                        "content": "Plants withstand drought through: (1) Drought Escape (early maturity), (2) Drought Avoidance (deep taproots, stomatal closure, waxy leaf cuticles, leaf rolling), and (3) Drought Tolerance (osmotic adjustment via accumulation of proline, glycine-betaine, and soluble sugars)."
                    }
                ]
            },
            {
                "id": "sec-agp218-1-5",
                "heading": "5. Plant Growth Regulators (PGRs) and the Crop Ideotype Concept",
                "content": "Plant Growth Regulators (PGRs) are organic compounds other than nutrients that in minute concentrations modify physiological processes.\n\n### Classes of Plant Growth Regulators in Kharif Agronomy\n- **Auxins (IAA, NAA, 2,4-D):** NAA (Planofix @ 20 ppm) sprayed on cotton and pigeonpea prevents premature square, flower, and pod drop.\n- **Gibberellins ($GA_3$):** Induces stem elongation; used in hybrid rice seed production to enhance panicle exertion in male-sterile (CMS) lines.\n- **Cytokinins (Kinetin, BAP):** Retards chlorophyll degradation, promotes cell division, and delays leaf senescence (stay-green trait in maize and sorghum).\n- **Abscisic Acid (ABA):** Stress hormone inducing stomatal closure during moisture deficits, reducing transpiration loss.\n- **Ethylene (Ethephon / Ethrel):** Promotes fruit ripening and defoliation in cotton for mechanized harvesting.\n- **Growth Retardants (Mepiquat Chloride, Chlormequat Chloride - CCC / Cycocel):** Inhibits gibberellin synthesis, restricting excessive vegetative growth, reducing lodging, and channeling photosynthates into reproductive bolls in cotton.\n\n### Crop Ideotype Concept (C.M. Donald, 1968)\nDonald defined an ideotype as a biological model expected to perform in a predictable manner within a defined environment, yielding greater quantity or quality of grain when grown in a community (crop canopy):\n- **Wheat/Rice Ideotype:** Short, stiff erect culms (dwarfing genes *Rht* in wheat, *sd-1* in rice) resistant to lodging, small erect thick leaves maximizing light interception without mutual shading, high harvest index (>0.5), and large panicle with high number of fertile spikelets.\n- **Pulse Ideotype:** Indeterminate erect growth, synchronous flowering, pods borne on upper canopy nodes for sunlight capture, and photo-insensitivity.",
                "subsections": [
                    {
                        "subheading": "Harvest Index (HI)",
                        "content": "Introduced by Donald: $$\\text{Harvest Index} = \\left( \\frac{\\text{Economic Yield (Grain)}}{\\text{Biological Yield (Grain + Straw)}} \\right) \\times 100$$. Modern semi-dwarf cereals achieve HI of 45-50%, compared to 25-30% in traditional tall landraces."
                    }
                ]
            }
        ],
        "keyTakeaways": [
            "Agronomic classification categorizes crops by utility, life cycle, and photoperiod across the 15 agro-climatic zones of India.",
            "Integrated Farming Systems (IFS) optimize circular bio-resource recycling, enhancing farm resilience and net family income.",
            "C4 crops (maize, sorghum, sugarcane) utilize high solar radiation and temperatures with zero photorespiration, outperforming C3 crops in WUE.",
            "Soil available water is bound between Field Capacity (-0.33 bar) and Permanent Wilting Point (-15 bar); irrigation must prevent stress during critical growth stages.",
            "Donald's crop ideotype revolutionized crop breeding, utilizing dwarfing genes (*sd-1*) and erect canopies to elevate harvest index from 30% to 50%."
        ],
        "commonMisunderstandings": [
            {
                "myth": "Plants can absorb all the water present in a saturated soil.",
                "reality": "In saturated soils, gravitational water drains away rapidly, and root asphyxiation occurs due to lack of oxygen. Plants can only absorb capillary water held between Field Capacity and Permanent Wilting Point."
            },
            {
                "myth": "Plant growth retardants like Cycocel stunt crop yield.",
                "reality": "Growth retardants inhibit excessive vegetative vine/leaf growth, preventing canopy lodging and redirecting assimilates into reproductive sinks (cotton bolls, peanut pods), thus enhancing yield."
            },
            {
                "myth": "Short-day plants flower only during short 8-hour days regardless of night length.",
                "reality": "Photoperiodism is governed by the length of the uninterrupted dark period (critical night length). A flash of light during the night disrupts flowering in short-day plants."
            }
        ],
        "summary": "Principles of crop production establish the scientific and agro-ecological foundations for cultivating Kharif crops in India. By understanding agronomic classifications across agro-climatic zones, designing integrated farming systems, maximizing radiation interception and thermal time, managing water use efficiency across critical irrigation stages, and utilizing plant growth regulators within Donald ideotype canopies, agronomists maximize crop yield potential while conserving vital natural resources."
    }

    # 60 MCQs: 20 Easy, 25 Medium, 15 Hard
    mcqs = [
        # Easy (1-20)
        {
            "id": "AGP218-U1-MCQ01",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Easy",
            "questionText": "Into how many broad Agro-Climatic Zones did the Planning Commission of India delineate the country in 1988?",
            "options": {"A": "8", "B": "15", "C": "20", "D": "25"},
            "correctOption": "B",
            "explanation": "The Planning Commission demarcated India into 15 distinct Agro-Climatic Zones based on homogeneity in rainfall, temperature, soil topography, and cropping systems."
        },
        {
            "id": "AGP218-U1-MCQ02",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Easy",
            "questionText": "Kharif season crops in India are typically sown during which months?",
            "options": {
                "A": "June - July (onset of South-West monsoon)",
                "B": "October - November (onset of winter)",
                "C": "February - March (spring season)",
                "D": "December - January"
            },
            "correctOption": "A",
            "explanation": "Kharif crops (monsoon crops) are sown in June-July with the onset of the South-West monsoon and harvested in September-October."
        },
        {
            "id": "AGP218-U1-MCQ03",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Easy",
            "questionText": "Which botanical family do major pulse crops like pigeonpea, green gram, and soybean belong to?",
            "options": {"A": "Poaceae / Gramineae", "B": "Fabaceae / Leguminosae", "C": "Solanaceae", "D": "Brassicaceae"},
            "correctOption": "B",
            "explanation": "Pulses belong to the family Fabaceae (Leguminosae), distinguished by root nodule symbiosis with nitrogen-fixing bacteria."
        },
        {
            "id": "AGP218-U1-MCQ04",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Easy",
            "questionText": "Which of the following is classified as a C4 cereal crop?",
            "options": {"A": "Rice", "B": "Maize", "C": "Wheat", "D": "Barley"},
            "correctOption": "B",
            "explanation": "Maize (*Zea mays*), sorghum, and sugarcane are classic C4 plants possessing Kranz anatomy and high photosynthetic efficiency."
        },
        {
            "id": "AGP218-U1-MCQ05",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Easy",
            "questionText": "The practice of growing only one single crop variety in a field year after year is known as:",
            "options": {"A": "Monoculture / Sole Cropping", "B": "Intercropping", "C": "Relay Cropping", "D": "Mixed Farming"},
            "correctOption": "A",
            "explanation": "Monoculture refers to the repetitive cultivation of a single crop on the same agricultural land across successive seasons."
        },
        {
            "id": "AGP218-U1-MCQ06",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Easy",
            "questionText": "Growing two or more crops simultaneously in the same field in definite row proportions (e.g. Pigeonpea + Soybean in 2:4) is called:",
            "options": {"A": "Intercropping", "B": "Monoculture", "C": "Fallowing", "D": "Ratooning"},
            "correctOption": "A",
            "explanation": "Intercropping involves cultivating two or more crops simultaneously in the same piece of land in distinct geometric row arrangements."
        },
        {
            "id": "AGP218-U1-MCQ07",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Easy",
            "questionText": "Soil moisture held between Field Capacity and Permanent Wilting Point is known as:",
            "options": {"A": "Available Water", "B": "Gravitational Water", "C": "Hygroscopic Water", "D": "Chemically Combined Water"},
            "correctOption": "A",
            "explanation": "Available water is the capillary moisture fraction held between Field Capacity (-0.33 bar) and Permanent Wilting Point (-15 bar) accessible to plant roots."
        },
        {
            "id": "AGP218-U1-MCQ08",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Easy",
            "questionText": "What is the standard soil water potential at the Permanent Wilting Point (PWP)?",
            "options": {"A": "0 bar", "B": "-0.33 bar", "C": "-15 bar", "D": "-31 bar"},
            "correctOption": "C",
            "explanation": "Permanent Wilting Point occurs at a soil matric potential of approximately -15 bars (-1.5 MPa), where plant roots can no longer extract water."
        },
        {
            "id": "AGP218-U1-MCQ09",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Easy",
            "questionText": "Which growth stage is considered the most critical for moisture stress in maize cultivation?",
            "options": {"A": "Seedling emergence", "B": "Tasseling and Silking", "C": "Knee-high stage", "D": "Physiological maturity"},
            "correctOption": "B",
            "explanation": "Tasseling and silking (flowering) is the most critical moisture-sensitive period in maize; stress during silking causes severe pollination failure and barren cobs."
        },
        {
            "id": "AGP218-U1-MCQ10",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Easy",
            "questionText": "Who pioneered the 'Crop Ideotype' concept in plant breeding and agronomy in 1968?",
            "options": {"A": "Norman Borlaug", "B": "C. M. Donald", "C": "M. S. Swaminathan", "D": "Gregor Mendel"},
            "correctOption": "B",
            "explanation": "Australian agronomist C. M. Donald conceptualized the 'Ideotype' in 1968 as an idealized biological model designed to yield optimally in a crop canopy."
        },
        {
            "id": "AGP218-U1-MCQ11",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Easy",
            "questionText": "Which plant hormone is commonly referred to as the 'Stress Hormone' responsible for stomatal closure during drought?",
            "options": {"A": "Abscisic Acid (ABA)", "B": "Gibberellic Acid ($GA_3$)", "C": "Cytokinin", "D": "Auxin (IAA)"},
            "correctOption": "A",
            "explanation": "Abscisic acid (ABA) rapidly synthesizes in roots under soil moisture stress and translocates to leaves, triggering stomatal closure to conserve water."
        },
        {
            "id": "AGP218-U1-MCQ12",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Easy",
            "questionText": "Which synthetic auxin formulation (NAA) is sprayed at 20 ppm on cotton and pigeonpea to prevent premature flower and pod drop?",
            "options": {"A": "Planofix", "B": "Roundup", "C": "Cycocel", "D": "Bavistin"},
            "correctOption": "A",
            "explanation": "Planofix (Naphthalene Acetic Acid - NAA) prevents abscission layer formation, curbing premature flower square and boll drop in cotton and pulses."
        },
        {
            "id": "AGP218-U1-MCQ13",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Easy",
            "questionText": "What spectral range of solar radiation constitutes Photosynthetically Active Radiation (PAR)?",
            "options": {"A": "100 nm - 300 nm", "B": "400 nm - 700 nm", "C": "800 nm - 1200 nm", "D": "Above 1500 nm"},
            "correctOption": "B",
            "explanation": "PAR spans the visible light spectrum from 400 nm to 700 nm, which plant chlorophyll pigments absorb to drive the photochemical reactions of photosynthesis."
        },
        {
            "id": "AGP218-U1-MCQ14",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Easy",
            "questionText": "Which critical growth stage in groundnut requires adequate soil moisture for gynophore entry into the soil?",
            "options": {"A": "Pegging stage", "B": "Emergence", "C": "Vegetative branching", "D": "Harvest curing"},
            "correctOption": "A",
            "explanation": "Pegging (gynophore elongation into the soil) is critical in groundnut; dry, crusted topsoil prevents peg penetration, resulting in poor pod formation."
        },
        {
            "id": "AGP218-U1-MCQ15",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Easy",
            "questionText": "The dwarfing gene responsible for the semi-dwarf architecture of modern Green Revolution rice varieties is:",
            "options": {"A": "sd-1 (Dee-geo-woo-gen)", "B": "Rht-1", "C": "Opaque-2", "D": "Nif gene"},
            "correctOption": "A",
            "explanation": "The *sd-1* (semi-dwarf 1) recessive gene from Taiwanese landrace Dee-geo-woo-gen confers lodging resistance and high fertilizer responsiveness in modern rice."
        },
        {
            "id": "AGP218-U1-MCQ16",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Easy",
            "questionText": "Harvest Index (HI) is mathematically defined as:",
            "options": {
                "A": "(Economic Yield / Biological Yield) × 100",
                "B": "(Straw Weight / Grain Weight) × 100",
                "C": "(Total Dry Matter / Root Weight) × 100",
                "D": "Grain Yield / Irrigated Area"
            },
            "correctOption": "A",
            "explanation": "Harvest Index measures the partition efficiency of assimilates: Economic Yield (grain) divided by Biological Yield (grain + straw) multiplied by 100."
        },
        {
            "id": "AGP218-U1-MCQ17",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Easy",
            "questionText": "In relay cropping, when is the second crop sown?",
            "options": {
                "A": "Before harvesting the preceding standing crop",
                "B": "Two months after plowing the preceding crop",
                "C": "Only during summer fallow",
                "D": "Simultaneously in the same seed furrow"
            },
            "correctOption": "A",
            "explanation": "Relay cropping involves planting the second crop into the standing first crop prior to its harvest (e.g., broadcasting paira/utera pulses in standing rice)."
        },
        {
            "id": "AGP218-U1-MCQ18",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Easy",
            "questionText": "Plants that flower only when exposed to day lengths shorter than a critical photoperiod are classified as:",
            "options": {"A": "Short-Day Plants (SDP)", "B": "Long-Day Plants (LDP)", "C": "Day-Neutral Plants (DNP)", "D": "Sciophytes"},
            "correctOption": "A",
            "explanation": "Short-day plants (e.g. traditional rice, soybean) flower when day length is less than their critical photoperiod (requiring long uninterrupted nights)."
        },
        {
            "id": "AGP218-U1-MCQ19",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Easy",
            "questionText": "Sunnhemp and Dhaincha are predominantly cultivated in Kharif season as:",
            "options": {"A": "Green manure crops", "B": "Beverage crops", "C": "Narcotic crops", "D": "Sugar crops"},
            "correctOption": "A",
            "explanation": "Sunnhemp (*Crotalaria juncea*) and Dhaincha (*Sesbania aculeata*) are fast-growing green manure legumes incorporated into soil to add organic matter and nitrogen."
        },
        {
            "id": "AGP218-U1-MCQ20",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Easy",
            "questionText": "Water Use Efficiency (WUE) of a field crop is expressed in units of:",
            "options": {"A": "kg/ha-mm", "B": "liters/second", "C": "tons/acre", "D": "bar/meter"},
            "correctOption": "A",
            "explanation": "Crop WUE is expressed as kilograms of economic produce harvested per hectare per millimeter of water consumed (kg/ha-mm)."
        },

        # Medium (21-45)
        {
            "id": "AGP218-U1-MCQ21",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Medium",
            "questionText": "What is the formula for calculating Growing Degree Days (GDD / Thermal Time)?",
            "options": {
                "A": "$\\sum \\left[ \\frac{T_{\\max} + T_{\\min}}{2} - T_{\\text{base}} \\right]$",
                "B": "$\\sum [T_{\\max} - T_{\\min}]$",
                "C": "$\\sum [T_{\\text{mean}} \\times T_{\\text{base}}]$",
                "D": "$[T_{\\max} + T_{\\min}] / 2$"
            },
            "correctOption": "A",
            "explanation": "GDD accumulates thermal units: mean daily temperature $(T_{\\max} + T_{\\min})/2$ minus the crop's base temperature ($T_{\\text{base}}$)."
        },
        {
            "id": "AGP218-U1-MCQ22",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Medium",
            "questionText": "What is the standard base temperature ($T_{\\text{base}}$) below which vegetative growth ceases in tropical Kharif cereals like rice and maize?",
            "options": {"A": "0°C", "B": "4°C", "C": "10°C", "D": "20°C"},
            "correctOption": "C",
            "explanation": "Tropical and subtropical crops like rice, maize, and sorghum have a base physiological threshold temperature of 10°C (compared to 4°C for temperate wheat)."
        },
        {
            "id": "AGP218-U1-MCQ23",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Medium",
            "questionText": "Why do C4 crops (maize, sorghum) achieve significantly higher water use efficiency (WUE) than C3 crops (rice, soybean)?",
            "options": {
                "A": "C4 crops possess Kranz anatomy and utilize PEP carboxylase, fixing CO2 efficiently at low internal CO2 concentrations with reduced stomatal opening and zero photorespiration",
                "B": "C4 crops do not transpire water",
                "C": "C4 crops have white roots",
                "D": "C4 crops absorb moisture directly from fog"
            },
            "correctOption": "A",
            "explanation": "PEP carboxylase has high affinity for CO2 without oxygenase activity, allowing C4 plants to assimilate carbon rapidly with tighter stomatal apertures and no photorespiratory loss."
        },
        {
            "id": "AGP218-U1-MCQ24",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Medium",
            "questionText": "If a farmer cultivates 5 hectares of land, growing 5 ha of Kharif paddy, 3 ha of Rabi wheat, and 2 ha of summer moong, what is the Cropping Intensity?",
            "options": {"A": "100%", "B": "150%", "C": "200%", "D": "250%"},
            "correctOption": "C",
            "explanation": "Gross Cropped Area = 5 (paddy) + 3 (wheat) + 2 (moong) = 10 ha. Net Sown Area = 5 ha. Cropping Intensity = (10 / 5) × 100 = 200%."
        },
        {
            "id": "AGP218-U1-MCQ25",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Medium",
            "questionText": "What is the Land Equivalent Ratio (LER) in intercropping systems?",
            "options": {
                "A": "The relative land area under sole cropping required to produce the yields obtained under intercropping",
                "B": "The price of agricultural land divided by farm size",
                "C": "The ratio of tractor speed to bullock speed",
                "D": "The percentage of organic carbon in topsoil"
            },
            "correctOption": "A",
            "explanation": "LER = $(Y_{ab} / Y_{aa}) + (Y_{ba} / Y_{bb})$. An LER > 1.0 indicates an intercropping yield advantage over sole cropping due to complementary resource utilization."
        },
        {
            "id": "AGP218-U1-MCQ26",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Medium",
            "questionText": "Under the ICAR / NBSS&LUP 20 Agro-Ecological Regions (AER) framework, what parameter defines the 'Length of Growing Period' (LGP)?",
            "options": {
                "A": "The period in days when precipitation exceeds 0.5 of potential evapotranspiration (PET), plus time required to transpire stored soil moisture",
                "B": "The number of days between bank loan sanction and harvest",
                "C": "The duration of summer vacation",
                "D": "The total calendar year of 365 days"
            },
            "correctOption": "A",
            "explanation": "LGP is the duration (in days) during which water availability (precipitation + soil moisture storage) is sufficient to sustain active crop growth without moisture stress."
        },
        {
            "id": "AGP218-U1-MCQ27",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Medium",
            "questionText": "At Field Capacity, what is the typical soil matric potential range for medium-textured loam soils?",
            "options": {"A": "-0.01 to -0.05 bar", "B": "-0.1 to -0.33 bar", "C": "-5.0 to -10.0 bar", "D": "-15 to -31 bar"},
            "correctOption": "B",
            "explanation": "Field Capacity represents capillary water retained after gravitational drainage, characterized by a matric suction of -0.1 bar (sandy soils) to -0.33 bar (clay/loam soils)."
        },
        {
            "id": "AGP218-U1-MCQ28",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Medium",
            "questionText": "Which anti-transpirant functions as a 'Stomatal Closing' agent?",
            "options": {
                "A": "Phenyl Mercuric Acetate (PMA) and Atrazine (at low concentrations)",
                "B": "Kaolinite clay suspension",
                "C": "Liquid paraffin and Mobil leaf",
                "D": "Urea solution"
            },
            "correctOption": "A",
            "explanation": "PMA and low-dose atrazine act as stomatal-closing anti-transpirants, reducing water loss during dry spells (Kaolin is reflective; waxes are film-forming)."
        },
        {
            "id": "AGP218-U1-MCQ29",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Medium",
            "questionText": "How does 5% Kaolin spray function as a reflective-type anti-transpirant in rainfed Kharif crops?",
            "options": {
                "A": "Forms a white reflective coating on leaves that reflects excess solar radiation, reducing leaf temperature and transpiration rate without stopping photosynthesis",
                "B": "Glues all stomata completely shut permanently",
                "C": "Kills all leaf insects",
                "D": "Supplies nitrogen directly to roots"
            },
            "correctOption": "A",
            "explanation": "Kaolin reflects incoming radiation, lowering leaf canopy temperature by 2-4°C and reducing the vapor pressure gradient driving transpiration."
        },
        {
            "id": "AGP218-U1-MCQ30",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Medium",
            "questionText": "Which plant growth retardant is commercially applied to cotton to control excessive vegetative rank growth and induce reproductive flowering?",
            "options": {"A": "Mepiquat Chloride (Chamatkar)", "B": "Gibberellic Acid ($GA_3$)", "C": "Ethrel", "D": "2,4-D Ethyl Ester"},
            "correctOption": "A",
            "explanation": "Mepiquat chloride inhibits gibberellic acid synthesis, suppressing excessive vertical node elongation in cotton, promoting compact canopies and boll retention."
        },
        {
            "id": "AGP218-U1-MCQ31",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Medium",
            "questionText": "Why is Gibberellic Acid ($GA_3$) sprayed at 40-60 g/ha during hybrid rice seed production?",
            "options": {
                "A": "To promote full panicle exertion out of the flag leaf sheath in Cytoplasmic Male Sterile (CMS / A line) plants",
                "B": "To kill weeds in paddy water",
                "C": "To turn grain dark yellow",
                "D": "To induce sterility in the R line"
            },
            "correctOption": "A",
            "explanation": "In CMS lines, 20-30% of the panicle remains trapped inside the flag leaf sheath; $GA_3$ application elongates uppermost internodes, ensuring full panicle exertion for outcrossing."
        },
        {
            "id": "AGP218-U1-MCQ32",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Medium",
            "questionText": "In Donald's cereal ideotype, why are small, thick, erect upper leaves agronomically advantageous?",
            "options": {
                "A": "They allow sunlight to penetrate deep into the lower canopy, maximizing whole-canopy photosynthesis with a higher extinction coefficient",
                "B": "They collect rainwater like cups",
                "C": "They prevent insects from landing",
                "D": "They eliminate all leaf transpiration"
            },
            "correctOption": "A",
            "explanation": "Erect leaves permit sunlight to filter into lower canopy layers, minimizing mutual shading and maintaining positive carbon assimilation in lower leaves."
        },
        {
            "id": "AGP218-U1-MCQ33",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Medium",
            "questionText": "In soybean cultivation, moisture stress during which stage causes maximum reduction in seed yield?",
            "options": {
                "A": "Pod development and seed filling (R3 to R5 stages)",
                "B": "Emergence (VE)",
                "C": "First trifoliate leaf stage (V1)",
                "D": "Leaf fall stage"
            },
            "correctOption": "A",
            "explanation": "Moisture deficit during pod initiation and seed enlargement induces flower and pod abortion, drastically reducing pod count per plant and 100-seed weight."
        },
        {
            "id": "AGP218-U1-MCQ34",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Medium",
            "questionText": "In an Integrated Farming System (IFS) for 1 hectare of irrigated lowland, which enterprise combination provides optimal bio-resource recycling?",
            "options": {
                "A": "Crop (Rice-Fish) + Dairy (2 cows) + Poultry + Biogas + Vermicomposting",
                "B": "Crop + Heavy Tractor Factory",
                "C": "Continuous chemical monoculture only",
                "D": "Timber forestry with zero crops"
            },
            "correctOption": "A",
            "explanation": "Rice-fish-dairy-biogas-vermicompost links wastes seamlessly: cow dung feeds biogas and fish ponds; slurry enriches compost; crop residues feed cattle."
        },
        {
            "id": "AGP218-U1-MCQ35",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Medium",
            "questionText": "Which Agro-Climatic Zone of India is characterized by the Thar Desert, extremely low rainfall (<300 mm), and dominance of pearl millet and moth bean?",
            "options": {
                "A": "Zone 14: Western Dry Region",
                "B": "Zone 1: Western Himalayan Region",
                "C": "Zone 3: Lower Gangetic Plain",
                "D": "Zone 12: West Coast Plains"
            },
            "correctOption": "A",
            "explanation": "Zone 14 (Western Dry Region, covering western Rajasthan) is characterized by hot arid climate, sandy desert soils, and drought-hardy crops like bajra, guar, and moth bean."
        },
        {
            "id": "AGP218-U1-MCQ36",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Medium",
            "questionText": "What contingency measure is recommended when the South-West monsoon is delayed by 4-6 weeks in north-western plains?",
            "options": {
                "A": "Shift from long-duration transplanted paddy to short-duration pulses (moong, urd), sesame, or pearl millet/sorghum",
                "B": "Leave all fields fallow for two years",
                "C": "Sow wheat in July",
                "D": "Spray herbicide over the entire district"
            },
            "correctOption": "A",
            "explanation": "Delayed monsoon contingency planning replaces long-duration thirsty crops with early-maturing, drought-tolerant pulses, oilseeds, or coarse cereals."
        },
        {
            "id": "AGP218-U1-MCQ37",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Medium",
            "questionText": "What instrument is used in the field to measure soil matric suction (water potential) directly up to -0.85 bar?",
            "options": {"A": "Tensiometer", "B": "Anemometer", "C": "Pyranometer", "D": "Hydrometer"},
            "correctOption": "A",
            "explanation": "Tensiometers measure soil water tension (suction) directly in the field through a porous ceramic cup, effective between 0 and -0.85 bar."
        },
        {
            "id": "AGP218-U1-MCQ38",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Medium",
            "questionText": "What does the 'Stay-Green' trait in sorghum and maize ideotypes signify?",
            "options": {
                "A": "The physiological ability to maintain green photosynthetic leaves and functional chlorophyll during post-flowering grain filling under terminal drought",
                "B": "Painting crop leaves green with dye",
                "C": "Harvesting crops before seeds form",
                "D": "Resistance to flooding only"
            },
            "correctOption": "A",
            "explanation": "Stay-green lines retain active green leaf area during grain filling under moisture stress, preventing premature senescence and elevating grain yield and stover quality."
        },
        {
            "id": "AGP218-U1-MCQ39",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Medium",
            "questionText": "How does osmotic adjustment assist plants in tolerating physiological drought stress?",
            "options": {
                "A": "Active cellular accumulation of compatible organic solutes (proline, glycine-betaine, sugars) lowers cellular osmotic potential, maintaining root water uptake and leaf turgor",
                "B": "By causing all roots to rot",
                "C": "By shedding all plant seeds",
                "D": "By absorbing gaseous nitrogen through stems"
            },
            "correctOption": "A",
            "explanation": "Osmotic adjustment lowers internal cell water potential below that of the drying soil, allowing continued water uptake and cell expansion under water deficit."
        },
        {
            "id": "AGP218-U1-MCQ40",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Medium",
            "questionText": "What is the primary ecological mechanism behind 'Resource Complementarity' in a Pigeonpea + Maize intercropping system?",
            "options": {
                "A": "Spatial and temporal niche differentiation: shallow-rooted maize grows and matures rapidly in 90 days, while deep-rooted pigeonpea grows slowly initially and matures in 180 days utilizing deeper soil water",
                "B": "Both crops compete violently for the same topsoil layer",
                "C": "Pigeonpea kills maize plants",
                "D": "Maize shades out pigeonpea completely"
            },
            "correctOption": "A",
            "explanation": "Temporal and spatial complementarity ensures minimal competition: maize captures peak resources early, while pigeonpea utilizes post-maize solar radiation and deep subsoil moisture."
        },
        {
            "id": "AGP218-U1-MCQ41",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Medium",
            "questionText": "What is the IW/CPE ratio used in irrigation scheduling?",
            "options": {
                "A": "Ratio of Irrigation Water depth (IW) to Cumulative Pan Evaporation (CPE)",
                "B": "Internal Water over Crop Photosynthesis Efficiency",
                "C": "Integrated Weed control per Crop Area",
                "D": "Inflow Weight over Crop Purity Estimate"
            },
            "correctOption": "A",
            "explanation": "The IW/CPE approach schedules irrigation when cumulative open-pan evaporation reaches a predetermined ratio against depth of applied water (e.g. 0.8 for maize)."
        },
        {
            "id": "AGP218-U1-MCQ42",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Medium",
            "questionText": "Which plant growth regulator is sprayed on sugarcane prior to harvest to enhance sucrose accumulation?",
            "options": {"A": "Glyphosate (at sub-lethal ripening doses) or Ethephon", "B": "2,4-D amine salt", "C": "Atrazine", "D": "Bordeaux mixture"},
            "correctOption": "A",
            "explanation": "Chemical ripeners like ethephon and low-dose glyphosate arrest vegetative apical growth in sugarcane, channeling sugars into stalk sucrose storage."
        },
        {
            "id": "AGP218-U1-MCQ43",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Medium",
            "questionText": "Which crop is classified as an 'Exhaustive Crop' due to heavy nutrient removal from soil?",
            "options": {"A": "Sugarcane and Maize", "B": "Green gram", "C": "Cowpea", "D": "Sunnhemp"},
            "correctOption": "A",
            "explanation": "Sugarcane and maize produce massive biomass and extract heavy amounts of N, P, K, depleting soil reserves compared to restorative legume crops."
        },
        {
            "id": "AGP218-U1-MCQ44",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Medium",
            "questionText": "What is 'Alley Cropping' (Agroforestry)?",
            "options": {
                "A": "Cultivating food crops in the alleys formed between hedgerows of fast-growing leguminous trees or shrubs (e.g. *Leucaena leucocephala*)",
                "B": "Growing vegetables in city alleyways",
                "C": "Growing crops only inside greenhouses",
                "D": "Planting trees without any crops"
            },
            "correctOption": "A",
            "explanation": "Alley cropping intercrops food annuals between perennial woody hedgerows, providing pruned green biomass mulch and erosion control."
        },
        {
            "id": "AGP218-U1-MCQ45",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Medium",
            "questionText": "How does mid-season drought stress during Kharif trigger sudden spikelet sterility in flowering rice?",
            "options": {
                "A": "High canopy temperatures and moisture deficit cause anther indehiscence, non-viable pollen germination, and pistil desiccation",
                "B": "Stem borer insects invade the roots",
                "C": "Rice grains turn into liquid water",
                "D": "Soil pH becomes 14"
            },
            "correctOption": "A",
            "explanation": "Rice floret opening and anthesis are exceptionally sensitive to moisture and heat stress; dry air and high temperature cause pollen grains to desiccate, resulting in empty spikelets."
        },

        # Hard (46-60)
        {
            "id": "AGP218-U1-MCQ46",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Hard",
            "questionText": "In canopy micro-meteorology, Monsi and Saeki's application of the Beer-Lambert Law to solar radiation extinction within a crop canopy is formulated as:",
            "options": {
                "A": "$I_L = I_0 \\cdot e^{-k \\cdot \\text{LAI}}$, where $k$ is the canopy extinction coefficient and LAI is Leaf Area Index",
                "B": "$I_L = I_0 \\times k \\times \\text{LAI}$",
                "C": "$I_L = \\text{LAI} / k$",
                "D": "$I_L = I_0 + k + \\text{LAI}$"
            },
            "correctOption": "A",
            "explanation": "Light transmission ($I_L$) through a canopy decreases exponentially with Leaf Area Index (LAI) according to $I_L = I_0 \\cdot e^{-k \\cdot \\text{LAI}}$; erect-leaf canopies have a lower $k$ (0.3-0.5), allowing deeper light penetration."
        },
        {
            "id": "AGP218-U1-MCQ47",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Hard",
            "questionText": "Under the Scholander Pressure Chamber technique, what physiological parameter is measured to assess crop water stress in the field?",
            "options": {
                "A": "Xylem water potential ($\\Psi_x$) of an excised leaf petiole",
                "B": "Soil bulk density",
                "C": "Root nodule hemoglobin content",
                "D": "Chlorophyll fluorescence"
            },
            "correctOption": "A",
            "explanation": "The pressure chamber applies nitrogen gas pressure to an excised leaf inside a sealed bomb until xylem sap emerges at the cut stem, measuring negative xylem pressure potential."
        },
        {
            "id": "AGP218-U1-MCQ48",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Hard",
            "questionText": "In an intercropping trial of Maize + Soybean, sole maize yields 4,000 kg/ha and intercropped maize yields 3,200 kg/ha. Sole soybean yields 2,000 kg/ha and intercropped soybean yields 1,200 kg/ha. What is the Land Equivalent Ratio (LER)?",
            "options": {"A": "1.40", "B": "1.00", "C": "0.80", "D": "2.20"},
            "correctOption": "A",
            "explanation": "Partial LER Maize = 3,200 / 4,000 = 0.80. Partial LER Soybean = 1,200 / 2,000 = 0.60. Total LER = 0.80 + 0.60 = 1.40. (A 40% land-use efficiency advantage over sole cropping)."
        },
        {
            "id": "AGP218-U1-MCQ49",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Hard",
            "questionText": "What biochemical mechanism explains why Cycocel (Chlormequat Chloride - CCC) restricts plant height?",
            "options": {
                "A": "It inhibits the enzyme ent-kaurene synthetase in the early terpenoid pathway of gibberellin biosynthesis",
                "B": "It degrades auxin via IAA oxidase stimulation",
                "C": "It destroys chlorophyll a and b",
                "D": "It blocks nitrogen absorption at the root hair"
            },
            "correctOption": "A",
            "explanation": "Cycocel blocks cyclization of geranylgeranyl diphosphate to ent-kaurene in the plastids, shutting down endogenous gibberellin synthesis and preventing cell elongation."
        },
        {
            "id": "AGP218-U1-MCQ50",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Hard",
            "questionText": "In soil-plant-atmosphere continuum (SPAC) thermodynamics, what drives water movement from soil through roots, stem, and leaves into the atmosphere?",
            "options": {
                "A": "A continuous negative gradient of water potential ($\\Psi_w$) from soil (-0.3 bar) to roots (-2 bar) to leaves (-15 bar) to the dry atmosphere (-500 to -1000 bar)",
                "B": "Active hydraulic pumps in the xylem vessels",
                "C": "Atmospheric pressure pushing water down into roots",
                "D": "Earth's magnetic field"
            },
            "correctOption": "A",
            "explanation": "Water moves passively along a spontaneous thermodynamic gradient of decreasing free energy (water potential) from less negative soil moisture to extremely negative atmospheric vapor."
        },
        {
            "id": "AGP218-U1-MCQ51",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Hard",
            "questionText": "In intercropping competition indices, what does an 'Aggressivity' ($A_{ab}$) value of exactly ZERO indicate?",
            "options": {
                "A": "Both component crops are equally competitive",
                "B": "Crop A has completely eliminated Crop B",
                "C": "Crop B is parasitic on Crop A",
                "D": "The intercropping system has completely failed"
            },
            "correctOption": "A",
            "explanation": "Aggressivity measures the difference between component crop LERs; an aggressivity index of zero indicates that both species are equally competitive in utilizing resources."
        },
        {
            "id": "AGP218-U1-MCQ52",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Hard",
            "questionText": "Donald’s concept of a 'Weak Competitor' ideotype argues that an ideal crop plant in a high-density community should:",
            "options": {
                "A": "Compete minimally with its neighbors within the canopy, displaying non-aggressive, unbranched erect architecture that optimizes community grain yield rather than individual plant biomass",
                "B": "Vigorously shade out and strangle all neighboring plants",
                "C": "Grow wide spreading branches to capture all space",
                "D": "Produce giant leaves that touch the ground"
            },
            "correctOption": "A",
            "explanation": "Donald demonstrated that plants with high competitive ability in isolation perform poorly in dense crop stands; ideal ideotypes are modest competitors that maximize cooperative canopy yield."
        },
        {
            "id": "AGP218-U1-MCQ53",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Hard",
            "questionText": "What physiological condition defines 'Cardinal Temperatures' for a crop species?",
            "options": {
                "A": "The minimum, optimum, and maximum temperature thresholds governing biological metabolic activity and growth",
                "B": "The boiling point and freezing point of irrigation water",
                "C": "The temperature inside an air-conditioned seed store",
                "D": "The soil temperature during monsoon rain"
            },
            "correctOption": "A",
            "explanation": "Cardinal temperatures comprise the Minimum (below which growth stops), Optimum (where growth rate is maximal), and Maximum (above which tissue damage or thermal death occurs)."
        },
        {
            "id": "AGP218-U1-MCQ54",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Hard",
            "questionText": "In drip fertigation agronomy, what is the 'Wetted Bulb' geometry in a heavy clay soil compared to a coarse sandy soil?",
            "options": {
                "A": "Clay soils produce a wide, shallow, horizontally dispersed wetted bulb due to high capillary forces; sandy soils produce a narrow, deep, vertically elongated bulb due to gravity",
                "B": "Sandy soils disperse horizontally while clay soils drain vertically",
                "C": "Both soils form identical circular spheres",
                "D": "Clay soils absorb zero water"
            },
            "correctOption": "A",
            "explanation": "High matric suction in fine clay pores causes lateral capillary water movement, creating a wide shallow bulb; coarse sand has low capillarity and high gravitational drainage, creating a deep narrow column."
        },
        {
            "id": "AGP218-U1-MCQ55",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Hard",
            "questionText": "What does the Area Time Equivalent Ratio (ATER) measure in intercropping that LER fails to capture?",
            "options": {
                "A": "It accounts for the duration (time in days) that each component crop occupies the field, preventing bias when long-duration and short-duration crops are intercropped",
                "B": "It measures the dollar profit per acre",
                "C": "It measures tractor fuel consumption per hour",
                "D": "It records the number of farmers in the village"
            },
            "correctOption": "A",
            "explanation": "LER assumes both crops occupy the land for the same duration. ATER incorporates the field time of each crop, providing a more accurate assessment when short and long duration crops (e.g. maize + pigeonpea) are intercropped."
        },
        {
            "id": "AGP218-U1-MCQ56",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "difficulty": "Hard",
            "questionText": "Which Agro-Climatic Zone encompasses the fertile Indo-Gangetic alluvial plains of Punjab, Haryana, and western Uttar Pradesh?",
            "options": {
                "A": "Zone 6: Trans-Gangetic Plain Region",
                "B": "Zone 8: Central Plateau and Hills",
                "C": "Zone 14: Western Dry Region",
                "D": "Zone 15: The Islands Region"
            },
            "correctOption": "A",
            "explanation": "Zone 6 (Trans-Gangetic Plain) covers Punjab, Haryana, Delhi, and Chandigarh, representing India's highest-intensity irrigated Green Revolution agricultural heartland."
        },
        {
            "id": "AGP218-U1-MCQ57",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "difficulty": "Hard",
            "questionText": "What physiological damage occurs during 'Photo-Inhibition' in C3 crops exposed to high solar irradiance and concurrent heat stress?",
            "options": {
                "A": "Light-induced damage to the D1 protein of Photosystem II (PSII) reaction center, reducing quantum yield of CO2 assimilation",
                "B": "Roots stop absorbing nitrogen",
                "C": "Stems crack open mechanically",
                "D": "Seeds germinate inside green pods"
            },
            "correctOption": "A",
            "explanation": "Excess excitation energy that cannot be dissipated via non-photochemical quenching damages the D1 core reaction center protein of PSII, suppressing photochemical efficiency."
        },
        {
            "id": "AGP218-U1-MCQ58",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "difficulty": "Hard",
            "questionText": "In Donald’s ideotype breeding, what is the relationship between Harvest Index (HI) and Biological Yield?",
            "options": {
                "A": "Grain yield increases by elevating Harvest Index (partitioning) without necessarily increasing total biological biomass, avoiding lodging penalties",
                "B": "Harvest Index increases by making straw 10 feet tall",
                "C": "Harvest Index and grain yield are negatively correlated in all crops",
                "D": "Biological yield must always decrease to zero"
            },
            "correctOption": "A",
            "explanation": "The Green Revolution achieved dramatic grain yield breakthroughs not by increasing total biomass, but by doubling the Harvest Index (partitioning photosynthates into grain rather than tall straw)."
        },
        {
            "id": "AGP218-U1-MCQ59",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "difficulty": "Hard",
            "questionText": "What is 'Cavitation' or 'Embolism' in the xylem vessels of a drought-stressed crop?",
            "options": {
                "A": "The rupture of the continuous water column under extreme negative tension, resulting in air bubbles filling the xylem conduit and halting sap flow",
                "B": "The bursting of root cells due to excess water",
                "C": "Bacterial rot in the phloem tissue",
                "D": "The crystallization of sugars in leaves"
            },
            "correctOption": "A",
            "explanation": "Under severe moisture stress, excessive xylem tension causes dissolved gases to nucleate into air bubbles (embolisms), breaking the continuous water column and inducing hydraulic failure."
        },
        {
            "id": "AGP218-U1-MCQ60",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "difficulty": "Hard",
            "questionText": "In sustainability assessment, what is the 'Sustainability Yield Index' (SYI) based on long-term agricultural experiment data?",
            "options": {
                "A": "$\\text{SYI} = \\frac{\\bar{Y} - \\sigma}{Y_{\\max}}$, where $\\bar{Y}$ is mean yield, $\\sigma$ is standard deviation, and $Y_{\\max}$ is maximum historical yield",
                "B": "$\\text{SYI} = \\bar{Y} \\times \\sigma$",
                "C": "$\\text{SYI} = Y_{\\max} - \\bar{Y}$",
                "D": "$\\text{SYI} = \\sigma / \\bar{Y}$"
            },
            "correctOption": "A",
            "explanation": "The Sustainability Yield Index (developed by Singh et al.) quantifies the minimum guaranteed yield fraction under weather fluctuations; higher SYI indicates resilient, sustainable cropping practices."
        }
    ]

    # 20 Subjective Questions: 8 SHORT_ANSWER, 6 LONG_ANSWER, 3 COMPARISON, 2 APPLICATION, 1 CASE_STUDY
    subjectives = [
        {
            "id": "AGP218-U1-SUB01",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Easy",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "questionText": "Classify agricultural field crops on the basis of their economic utility and photoperiodic response with relevant Kharif examples.",
            "modelAnswer": """Agronomy classifies crops to optimize management practices, resource allocations, and spatial rotations:

1. Classification Based on Economic Utility:
- Cereals: Cultivated grasses yielding edible starchy caryopsis grains (e.g., Rice - *Oryza sativa*, Maize - *Zea mays*, Sorghum - *Sorghum bicolor*).
- Pulses / Grain Legumes: Pod-bearing leguminous crops rich in vegetable protein (e.g., Pigeonpea - *Cajanus cajan*, Green gram - *Vigna radiata*, Black gram - *Vigna mungo*).
- Oilseeds: Crops cultivated for edible or industrial fatty oil extraction (e.g., Groundnut - *Arachis hypogaea*, Soybean - *Glycine max*, Sesame - *Sesamum indicum*).
- Fiber Crops: Grown for vegetative or seed epidermal fibers (e.g., Cotton - *Gossypium hirsutum*, Jute - *Corchorus olitorius*).
- Forage / Fodder Crops: Herbaceous biomass cultivated for feeding livestock (e.g., Fodder Sorghum, Fodder Cowpea).

2. Classification Based on Photoperiodic Response:
Photoperiodism is the physiological response to the relative length of day and night:
- Short-Day Plants (SDP): Require a photoperiod shorter than a critical threshold (long uninterrupted dark period) to trigger floral transition (e.g., Traditional lowland Rice, Soybean, Cowpea).
- Long-Day Plants (LDP): Require photoperiods longer than their critical duration to flower (primarily Rabi crops like Wheat, Barley, Mustard).
- Day-Neutral Plants (DNP): Flowering is independent of day length, governed purely by physiological age and thermal accumulation (e.g., Maize, Sunflower, Cotton, Tomato).""",
            "outlinePoints": [
                "Economic utility classification: Cereals, Pulses, Oilseeds, Fibers, and Fodder with botanical names",
                "Photoperiodic classification: Short-Day Plants (SDP) and long night requirement (Rice, Soybean)",
                "Long-Day Plants (LDP) context (Wheat/Barley)",
                "Day-Neutral Plants (DNP) insensitive to photoperiod (Maize, Sunflower, Cotton)"
            ]
        },
        {
            "id": "AGP218-U1-SUB02",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "questionText": "Explain the concept of Integrated Farming Systems (IFS). How does bio-resource recycling in IFS enhance climate resilience and smallholder income?",
            "modelAnswer": """An Integrated Farming System (IFS) is an agro-economic system where multiple complementary agricultural enterprises (crop husbandry, dairy, poultry, aquaculture, horticulture, beekeeping, and mushroom cultivation) are synergistically integrated on a single farm holding.

1. Principles of Bio-Resource Recycling:
The foundational philosophy of IFS is: 'The by-product or waste of one enterprise serves as the valuable input for another.'
- Crop residues (paddy straw, maize stover) are utilized as dry fodder for dairy cattle and substrate for mushroom cultivation.
- Animal manure (cow dung, urine) is fed into a biogas digester, producing clean combustible methane gas for household cooking and lighting.
- The spent bio-digester slurry is utilized as nutrient-rich bio-fertilizer for fish ponds (promoting plankton growth) and vermicomposting beds.
- Vermicompost and nutrient-rich pond silt are returned to crop fields, restoring soil organic carbon and reducing chemical fertilizer purchase by 50-70%.

2. Climate Resilience and Income Enhancement:
- Multi-Tier Income Generation: Generates continuous, diversified cash flow throughout the year (daily dairy milk, weekly eggs, seasonal fish and crops) rather than relying on a single bimodal crop harvest.
- Risk Hedging Against Extreme Weather: If unseasonal monsoon dry spells destroy the Kharif pulse crop, the farmer's livelihood is protected by daily dairy milk sales and poultry income.
- Enhanced Soil Moisture Retention: Regular recycling of organic manure improves soil aggregation, infiltration rate, and available water holding capacity, buffering crops against mid-season droughts.""",
            "outlinePoints": [
                "Definition of Integrated Farming System (IFS) as an enterprise mix",
                "Core bio-resource recycling loops: Crop waste to livestock fodder, dung to biogas slurry, slurry to fish/crops",
                "Continuous multi-tier daily/weekly cash flow generation",
                "Risk diversification hedging against monsoon failures",
                "Soil moisture conservation and chemical fertilizer reduction"
            ]
        },
        {
            "id": "AGP218-U1-SUB03",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "questionText": "Define Growing Degree Days (GDD). How is thermal time utilized to predict crop phenology and plan Kharif sowing windows?",
            "modelAnswer": """Growing Degree Days (GDD), or Thermal Time, is an agro-meteorological index that quantifies the accumulation of physiological heat units above a specific base temperature required for a crop to complete distinct developmental stages.

1. Mathematical Formula:
$$\\text{GDD} = \\sum_{i=1}^{n} \\left[ \\frac{T_{\\max} + T_{\\min}}{2} - T_{\\text{base}} \\right]$$
Where:
- $T_{\\max}$ = Daily maximum air temperature
- $T_{\\min}$ = Daily minimum air temperature
- $T_{\\text{base}}$ = Base threshold temperature below which plant enzymatic processes and tissue growth cease (10°C for tropical Kharif crops like rice, maize, and sorghum; 4°C for wheat).
*Condition: If $[(T_{\\max} + T_{\\min})/2] < T_{\\text{base}}$, GDD is taken as zero.*

2. Application in Crop Phenology and Sowing Decisions:
- Predicting Phenological Transitions: Unlike calendar days (which vary wildly between cool and hot years), GDD requirements for specific growth stages remain constant. For instance, a maize hybrid consistently requires 1,250 GDD from emergence to silking, and 2,400 GDD to achieve physiological maturity (black layer formation).
- Sowing Date Optimization: Farmers utilize GDD to synchronize flowering with favorable weather, ensuring grain filling completes before terminal winter cold drops temperatures below base thresholds.
- Pest and Disease Modeling: Insect life cycles (e.g., Cotton Pink Bollworm emergence) are modeled using thermal time, allowing agronomists to broadcast spray warnings precisely when accumulated GDD indicates peak egg hatching.""",
            "outlinePoints": [
                "Definition of GDD / Thermal Time as heat unit accumulation",
                "Mathematical formula and base temperature concepts (10°C for Kharif crops)",
                "Predicting phenological milestones (silking, physiological maturity)",
                "Calibrating sowing windows to prevent terminal cold or heat stress",
                "Forecasting pest egg hatching and disease emergence cycles"
            ]
        },
        {
            "id": "AGP218-U1-SUB04",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Easy",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "questionText": "Explain the Soil Moisture Constants: Saturation Capacity, Field Capacity, and Permanent Wilting Point. Diagram the Available Water Capacity (AWC).",
            "modelAnswer": """Soil moisture constants represent specific thermodynamic equilibrium states of soil water governing plant availability:

1. Saturation Capacity (0 bar):
Occurs when all macro- and micro-pore spaces in the soil are completely filled with water following heavy irrigation or rainfall. Gravitational water drains away rapidly under the influence of gravity over 24-72 hours. Lack of soil aeration at saturation induces root hypoxia in dryland crops.

2. Field Capacity (FC) (-0.1 to -0.33 bar):
The amount of water held in the soil after gravitational water has drained away. Soil matric suction is -0.1 bar in coarse sands and -0.33 bar in loams and clays. It represents the upper limit of available soil water storage where both moisture and oxygen are optimally available for plant roots.

3. Permanent Wilting Point (PWP) (-15 bar):
The soil moisture content at which soil suction reaches approximately -15 bars (-1.5 MPa). Plant roots can no longer extract water at a rate fast enough to meet transpiration demand; plant cells lose turgidity, and leaves wilt permanently and fail to recover even when placed in a saturated atmosphere overnight.

4. Available Water Capacity (AWC):
The portion of capillary water retained in the root zone between Field Capacity and Permanent Wilting Point:
$$\\text{AWC} = \\text{Field Capacity (FC)} - \\text{Permanent Wilting Point (PWP)}$$
Silt loam and clay loam soils possess the highest AWC, whereas coarse sandy soils have low AWC due to high drainage permeability.""",
            "outlinePoints": [
                "Saturation capacity: Macro-pore waterlogging and oxygen deprivation (0 bar)",
                "Field capacity: Capillary water equilibrium (-0.1 to -0.33 bar)",
                "Permanent Wilting Point: Thermodynamic root absorption limit (-15 bar)",
                "Available Water Capacity formula: AWC = FC - PWP",
                "Soil textural variations influencing AWC (loams vs sands)"
            ]
        },
        {
            "id": "AGP218-U1-SUB05",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "questionText": "List the critical growth stages for irrigation in Rice, Maize, Groundnut, and Cotton. Why does moisture stress during these stages cause irreversible yield loss?",
            "modelAnswer": """Critical stages for irrigation are specific physiological phases in crop development during which moisture deficiency inflicts severe, irreversible yield depression that cannot be compensated for by copious water application at later stages.

1. Critical Irrigation Stages by Crop:
- Rice: (1) Initial tillering (panicle number determination), (2) Panicle initiation (PI), (3) Booting and Flowering/Heading, and (4) Milking stage.
- Maize: (1) Tasseling and (2) Silking (flowering). Moisture stress during this 2-week window causes desiccation of silk and pollen abortion.
- Groundnut: (1) Flowering, (2) Pegging (crucial for gynophores penetrating the soil to initiate pods), and (3) Pod development.
- Cotton: (1) Square formation, (2) Peak flowering, and (3) Early boll development.

2. Physiological Basis of Irreversible Yield Loss:
- Reproductive Organ Abortion: Reproductive stages involve active meiosis, cell division, and pollen tube growth. Moisture stress triggers ethylene and abscisic acid (ABA) synthesis, forming abscission layers that cause flower square drop in cotton, empty spikelets in rice, and pod abortion in soybean.
- Disruption of Source-Sink Translocation: Water deficit closes stomata, halting photosynthesis. Simultaneously, dehydration shrinks phloem conduits, preventing the translocation of stored assimilates from leaves (source) into developing grains or bolls (sink), resulting in shriveled seeds and severely reduced 1,000-grain weight.""",
            "outlinePoints": [
                "Definition of critical growth stages for irrigation",
                "Rice critical stages: Tillering, Panicle Initiation, Flowering, Milking",
                "Maize critical stages: Tasseling and Silking",
                "Groundnut critical stages: Flowering, Pegging, and Pod development",
                "Cotton critical stages: Square formation, Flowering, and Boll development",
                "Physiological mechanisms: Flower/square abortion via ABA and phloem translocation failure"
            ]
        },
        {
            "id": "AGP218-U1-SUB06",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Easy",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "questionText": "Explain Donald's Crop Ideotype concept. How does an ideotype differ from traditional single-plant selection?",
            "modelAnswer": """The Crop Ideotype concept was formulated in 1968 by Australian agronomist C. M. Donald to revolutionize crop breeding and plant architecture:

1. Definition of Crop Ideotype:
Donald defined an ideotype as 'a biological model which is expected to perform or behave in a predictable manner within a defined environment; more specifically, a crop ideotype is a plant model engineered to yield a greater quantity or quality of grain or useful product when grown in a crop community (crop canopy).'

2. Ideotype vs. Traditional Defect Elimination Breeding:
- Traditional Breeding: Focused on eliminating specific genetic defects (e.g., breeding solely for disease resistance or cold tolerance) or selecting individual 'super-plants' that looked vigorous in isolation.
- Ideotype Breeding: Proactively designs a comprehensive architectural and physiological blueprint that maximizes light interception, photosynthetic efficiency, and assimilate partitioning when plants are grown in dense, commercial field stands.

3. The 'Weak Competitor' Paradox:
Donald made the counter-intuitive breakthrough that an individual plant that is a ferocious, aggressive competitor in isolation (possessing wide spreading branches, large horizontal leaves, and rampant tillering) performs poorly in a dense farm field because it causes severe mutual shading. An ideal crop ideotype is a 'weak competitor'—possessing compact, erect leaves and short, stiff stems—that cooperates efficiently with neighboring plants to maximize total community yield per hectare.""",
            "outlinePoints": [
                "Donald's 1968 definition of Crop Ideotype as a predictable biological model",
                "Proactive morphological design vs traditional defect elimination breeding",
                "Focus on community canopy performance rather than isolated individual vigor",
                "The 'Weak Competitor' paradox: Compact, non-aggressive plants maximizing community yield",
                "Architectural optimization of erect canopies for dense field populations"
            ]
        },
        {
            "id": "AGP218-U1-SUB07",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "questionText": "Describe the physiological functions and field application of any four Plant Growth Regulators (PGRs) in Kharif crop management.",
            "modelAnswer": """Plant Growth Regulators (PGRs) are organic compounds applied in minute concentrations to modify crop growth, flowering, and yield partitioning:

1. Naphthalene Acetic Acid (NAA / Planofix) [Auxin]:
- Physiological Mode: Suppresses the formation of the abscission layer in pedicels and petioles.
- Field Application: Sprayed at 20 ppm on Cotton during square and boll formation, and on Pigeonpea during peak flowering, reducing flower square and pod shedding by 35-40%.

2. Mepiquat Chloride (Chamatkar) [Growth Retardant]:
- Physiological Mode: Blocks the early enzymatic steps of gibberellin biosynthesis, preventing cell elongation.
- Field Application: Applied to Cotton at 50-75 g a.i./ha when vegetative rank growth threatens canopy ventilation. It restricts internodal length, promotes compact pyramidal architecture, and diverts carbohydrates into boll retention.

3. Gibberellic Acid ($GA_3$) [Gibberellin]:
- Physiological Mode: Promotes cell division and internodal cell elongation.
- Field Application: Sprayed at 40-60 g/ha during hybrid rice seed production (sprayed at 5-10% heading). It ensures full panicle exertion of Cytoplasmic Male Sterile (CMS) lines out of the flag leaf sheath, elevating cross-pollination seed set.

4. Ethephon (Ethrel) [Ethylene Releaser]:
- Physiological Mode: Breaks down inside plant tissue to release ethylene gas, stimulating senescence and uniform abscission.
- Field Application: Used as a chemical defoliant in mechanized Cotton harvesting to promote synchronous boll opening and clean mechanical picking.""",
            "outlinePoints": [
                "NAA (Planofix @ 20 ppm): Inhibiting abscission layer to prevent cotton square and pulse pod drop",
                "Mepiquat Chloride: Restricting cotton rank growth to direct photosynthates to bolls",
                "Gibberellic Acid ($GA_3$ @ 40g/ha): Full panicle exertion in hybrid rice CMS lines",
                "Ethephon (Ethrel): Defoliation and synchronous boll opening for cotton harvest"
            ]
        },
        {
            "id": "AGP218-U1-SUB08",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "questionText": "Explain the morphological and physiological adaptations that enable C4 crops like Sorghum and Pearl Millet to thrive in semi-arid dryland environments.",
            "modelAnswer": """Sorghum (*Sorghum bicolor*) and Pearl Millet (*Pennisetum glaucum*) possess specialized evolutionary adaptations for extreme heat, drought, and low soil fertility:

1. Kranz Leaf Anatomy and C4 Photosynthetic Efficiency:
- Both species possess Kranz anatomy, characterized by chloroplast-rich bundle sheath cells surrounded by mesophyll cells.
- Primary carbon fixation is driven by Phosphoenolpyruvate (PEP) carboxylase, which has an affinity for CO2 10 times higher than Rubisco and zero affinity for oxygen.
- Photorespiration is completely absent, allowing these crops to maintain high photosynthetic rates even under intense solar irradiance, high temperatures (35-45°C), and partially closed stomata.

2. Morphological and Root Architecture Adaptations:
- Deep, Extensive Fibrous Root System: Roots penetrate beyond 1.5 to 2.0 meters, extracting deep moisture unavailable to shallow legumes. Pearl millet roots exhibit high hydraulic conductance.
- Thick Waxy Cuticle and Leaf Rolling: Leaves are coated with dense epicuticular wax films (bloom) that reflect excess radiation. During midday water deficits, bulliform cells trigger longitudinal leaf rolling, reducing exposed transpirational leaf area by 50%.

3. Physiological Drought Tolerance Mechanisms:
- Osmotic Adjustment: Cells actively synthesize and accumulate compatible osmolytes (proline and soluble sugars), maintaining root water uptake under drying soil potentials.
- Physiological Dormancy (Quiescence): Sorghum can suspend growth and enter dormancy during severe mid-season dry spells, resuming active vegetative and reproductive development as soon as rain arrives.""",
            "outlinePoints": [
                "Kranz anatomy and PEP carboxylase eliminating photorespiration at high temperatures",
                "High photosynthetic rates maintained with partially closed stomata",
                "Deep, dense fibrous root architecture tapping subsoil moisture",
                "Thick waxy leaf cuticles and bulliform-cell mediated leaf rolling",
                "Cellular osmotic adjustment via proline and physiological drought dormancy"
            ]
        },

        # Long Answer Questions (9-14)
        {
            "id": "AGP218-U1-SUB09",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Medium",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India",
            "questionText": "Discuss the Planning Commission’s 15 Agro-Climatic Zones of India. Detail the physiographic characteristics, rainfall regimes, and dominant Kharif cropping systems of any four major zones.",
            "modelAnswer": """In 1988, the Planning Commission divided India into 15 broad Agro-Climatic Zones under the Agro-Climatic Regional Planning (ACRP) framework to plan regional agricultural development based on natural resource endowments:

1. Overview of the 15 Agro-Climatic Zones:
(1) Western Himalayan, (2) Eastern Himalayan, (3) Lower Gangetic Plain, (4) Middle Gangetic Plain, (5) Upper Gangetic Plain, (6) Trans-Gangetic Plain, (7) Eastern Plateau and Hills, (8) Central Plateau and Hills, (9) Western Plateau and Hills, (10) Southern Plateau and Hills, (11) East Coast Plains and Hills, (12) West Coast Plains and Ghats, (13) Gujarat Plains and Hills, (14) Western Dry Region, and (15) The Islands Region.

2. Detailed Analysis of Four Major Zones:

A. Zone 6: Trans-Gangetic Plain Region (Punjab, Haryana, Delhi):
- Physiography & Soils: Fertile, deep alluvial soils deposited by the Indus river system. Flat topography with high groundwater irrigation infrastructure (tube-wells and canal networks).
- Rainfall & Climate: Semi-arid climate with annual precipitation of 400 to 750 mm, concentrated during July-August; hot summers and cool winters.
- Dominant Kharif Cropping Systems: High-input, intensively irrigated Transplanted Paddy (including Basmati rice), Hybrid Maize, and Bt Cotton, predominantly followed by wheat in Rabi (Rice-Wheat cropping system).

B. Zone 9: Western Plateau and Hills (Maharashtra, Western MP, Northern Karnataka):
- Physiography & Soils: Semi-arid Deccan trap plateau dominated by medium to deep black cotton soils (Vertisols) high in clay content and water-retention capacity, prone to cracking in dry spells.
- Rainfall & Climate: Annual rainfall varies from 600 to 1,000 mm, with frequent mid-season droughts.
- Dominant Kharif Cropping Systems: Rainfed Cotton, Soybean, Pigeonpea, Sorghum (Jowar), and Pearl Millet; famous for Soybean + Pigeonpea (4:2) and Cotton + Green gram intercropping.

C. Zone 12: West Coast Plains and Ghats (Coastal Maharashtra, Goa, Coastal Karnataka, Kerala):
- Physiography & Soils: Rugged Western Ghat mountain ranges sloping steeply to narrow coastal plains. Acidic, heavily leached laterite and coastal alluvial soils.
- Rainfall & Climate: Humid tropical climate with heavy monsoon rainfall exceeding 2,500 to 3,500 mm.
- Dominant Kharif Cropping Systems: Wet-puddle Rice (terraced and coastal lowlands), Plantation crops (Coconut, Arecanut, Rubber, Black Pepper), and Tapioca (Cassava).

D. Zone 14: Western Dry Region (Western Rajasthan):
- Physiography & Soils: Arid Thar desert landscape dominated by loose, coarse sandy soils with low water-holding capacity, low organic matter, and sand dunes.
- Rainfall & Climate: Extreme hot arid climate, high evapotranspiration (>2,000 mm), and erratic rainfall (<300 mm).
- Dominant Kharif Cropping Systems: Drought-hardy dryland crops: Pearl Millet (Bajra), Clusterbean (Guar), Moth bean (*Vigna aconitifolia*), and Sesame.""",
            "outlinePoints": [
                "Genesis and rationale of Planning Commission's 15 Agro-Climatic Zones (1988)",
                "Complete listing of all 15 zones",
                "Zone 6 (Trans-Gangetic Plain): Deep alluvium, canal irrigation, Rice-Wheat/Cotton system",
                "Zone 9 (Western Plateau): Black cotton soils (Vertisols), rainfed Cotton, Soybean, and Jowar",
                "Zone 12 (West Coast Plains): Laterite soils, heavy precipitation (>3,000 mm), Lowland Rice and Plantation crops",
                "Zone 14 (Western Dry Region): Arid sands, extreme heat, Bajra, Moth bean, and Guar systems"
            ]
        },
        {
            "id": "AGP218-U1-SUB10",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "questionText": "Critically analyze the physiological and ecological impacts of aberrant South-West monsoon dynamics (delayed onset, prolonged mid-season dry spells, early withdrawal) on Kharif crops. Formulate a comprehensive Contingency Agronomic Plan.",
            "modelAnswer": """The South-West monsoon (June-September) delivers over 75% of India’s annual precipitation, driving production across 55% of net cropped rainfed land. Climatic aberrations severely disrupt crop phenology:

1. Physiological and Ecological Impacts of Monsoon Aberrations:

A. Delayed Monsoon Onset (by 3 to 6 Weeks):
- Seedlings in rice nurseries become over-aged (45-60 days old). Transplanting over-aged seedlings results in poor root anchoring, reduced tillering capacity, and early heading with low panicle grain counts.
- In dryland pulses and oilseeds, delayed sowing pushes flowering into late September, exposing crops to terminal moisture stress and high pest incidence.

B. Prolonged Mid-Season Dry Spells (Breaks in Monsoon exceeding 15-20 days):
- Coincides with critical vegetative-to-reproductive transitions (e.g. maize tasseling, groundnut pegging, soybean flowering).
- Triggers stomatal closure, reducing internal $CO_2$ and causing thermal leaf scorching. Synthesizes abscisic acid (ABA), inducing mass shedding of flower squares in cotton and pods in pulses.
- Severe moisture stress in topsoil hardens soil crusts, preventing groundnut gynophores (pegs) from penetrating the soil.

C. Early Monsoon Withdrawal (Terminal Drought in September):
- Starves crops during grain filling and milking stages.
- Accelerates canopy senescence, shortening the grain filling duration and leading to shriveled, chaffy grains and drastic reductions in test weight.

2. Comprehensive Contingency Agronomic Plan:

Strategy 1: For Delayed Monsoon Onset:
- Rice Ecosystem: Transition from traditional flooded transplanting to Direct Seeded Rice (DSR) using zero-till seed drills with pre-emergence pendimethalin; adopt Community Nurseries with tube-well irrigation to provide 25-day-old seedlings upon rain arrival; shift to extra-short duration varieties (e.g. Sahbhagi Dhan, Vandana).
- Rainfed Drylands: Replace long-duration crops with alternative short-duration, drought-hardy pulses and millets (e.g., replace maize with pearl millet; replace groundnut with sesame or black gram).

Strategy 2: For Mid-Season Dry Spells:
- In-situ Moisture Conservation: Operate bullock/tractor-drawn cultivators to create a shallow dust mulch (breaking capillary pores); construct conservation furrows at 3-5 meter intervals across slopes.
- Anti-Transpirant Foliar Sprays: Apply 5% Kaolinite clay suspension (reflective type) to reflect solar radiation, or spray 2% Potassium Chloride (KCl) to maintain cell osmotic turgor.
- Life-Saving Supplemental Irrigation: Deploy harvested farm-pond water via pressurized micro-sprinklers at critical stages.
- Population Thinning: Thin every third plant row in dryland maize/sorghum stands to reduce canopy transpiration competition.

Strategy 3: For Early Monsoon Withdrawal (Terminal Drought):
- Strip lower senescent leaves in cotton and sorghum to curb transpirational water loss.
- Harvest crops at physiological maturity (e.g. black layer in maize) rather than waiting for field-dry curing.
- Prepare fields immediately for early rabi chickpea or mustard to utilize residual subsoil moisture.""",
            "outlinePoints": [
                "Significance of South-West monsoon in Indian agriculture (75% rainfall, 55% rainfed area)",
                "Physiological impact of delayed onset: Over-aged rice seedlings and curtailed tillering",
                "Physiological impact of mid-season dry spells: Stomatal closure, ABA synthesis, and pegging failure",
                "Physiological impact of early withdrawal: Terminal drought, shriveled grains, and low test weight",
                "Contingency measures for delayed onset: DSR, community nurseries, and short-duration pulses/millets",
                "Contingency measures for mid-season drought: Dust mulching, Kaolin/KCl sprays, thinning, and farm-pond irrigation",
                "Contingency measures for terminal drought: Stripping senescent leaves, harvesting at physiological maturity, and zero-till rabi sowing"
            ]
        },
        {
            "id": "AGP218-U1-SUB11",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "questionText": "Deconstruct the Soil-Plant-Atmosphere Continuum (SPAC). Explain the thermodynamic concepts of Water Potential ($\\Psi_w$), Osmotic Potential ($\\Psi_s$), and Turgor Potential ($\\Psi_p$), and analyze the physiological mechanisms of drought avoidance versus drought tolerance.",
            "modelAnswer": """The Soil-Plant-Atmosphere Continuum (SPAC) represents the unified, continuous hydraulic system through which water moves passively along a thermodynamic energy gradient from soil, through plant tissues, into the atmosphere.

1. Thermodynamic Principles and Components of Water Potential:
Water potential ($\\Psi_w$) measures the chemical free energy of water in a system relative to pure, free water (defined as 0 MPa at atmospheric pressure). In plant cells:
$$\\Psi_w = \\Psi_s + \\Psi_p + \\Psi_m$$
Where:
- Osmotic (Solute) Potential ($\\Psi_s$): Represents the effect of dissolved solutes on water free energy. Solutes reduce free energy, making $\\Psi_s$ always negative.
- Turgor (Pressure) Potential ($\\Psi_p$): The hydrostatic pressure exerted by the protoplast against the rigid cell wall. In turgid cells, $\\Psi_p$ is positive, maintaining structural rigidity and driving cell expansion.
- Matric Potential ($\\Psi_m$): Forces of adsorption and capillarity binding water to cell walls and soil particles; highly negative in drying soils and negligible in vacuoles.

2. The Hydraulic Gradient Driving SPAC:
Water flows down a spontaneous thermodynamic gradient of decreasing water potential:
$$\\text{Soil } (\\Psi_w \\approx -0.03 \\text{ to } -0.33 \\text{ MPa}) \\rightarrow \\text{Root Xylem } (-0.5 \\text{ MPa}) \\rightarrow \\text{Stem } (-0.8 \\text{ MPa}) \\rightarrow \\text{Leaf } (-1.5 \\text{ MPa}) \\rightarrow \\text{Atmosphere } (-50 \\text{ to } -100 \\text{ MPa})$$
The enormous evaporative demand of dry air creates negative hydrostatic tension in leaf xylem, pulling water upward via the Cohesion-Tension theory.

3. Physiological Mechanisms of Drought Resistance:

A. Drought Avoidance (Maintaining High Internal Tissue Hydration):
- Maximizing Water Uptake: Developing deep, proliferating root systems (e.g., pigeonpea taproots penetrating >2m) with high root-to-shoot biomass ratios.
- Minimizing Water Loss:
  - Rapid stomatal closure mediated by root-sourced ABA.
  - Development of thick epicuticular waxes (glaucousness) on sorghum and pearl millet leaves.
  - Active leaf rolling driven by bulliform cells, reducing effective exposed leaf area.
  - Parheliotropism: Leaves orienting parallel to sunlight during peak heat to minimize radiation absorption.

B. Drought Tolerance (Surviving and Functioning at Low Tissue Water Potential):
- Osmotic Adjustment (OA): Cells actively synthesize and accumulate non-toxic, compatible organic solutes (proline, glycine-betaine, mannitol, and soluble sugars) and potassium ions ($K^+$). This lowers cellular $\\Psi_s$, allowing total $\\Psi_w$ to fall below soil water potential while maintaining positive turgor pressure ($\\Psi_p > 0$) for stomatal opening and cell expansion.
- Desiccation-Tolerant Protective Proteins: Synthesis of Late Embryogenesis Abundant (LEA) proteins, Heat Shock Proteins (HSPs), and antioxidant enzymes (Superoxide Dismutase, Catalase) that stabilize cell membranes and scavenge Reactive Oxygen Species (ROS) during severe dehydration.""",
            "outlinePoints": [
                "SPAC definition as a unified thermodynamic hydraulic continuum",
                "Water potential equation: $\\Psi_w = \\Psi_s + \\Psi_p + \\Psi_m$ and component definitions",
                "Thermodynamic gradient driving water flow from soil (-0.33 bar) to atmosphere (-1000 bar)",
                "Drought Avoidance: Deep roots, ABA stomatal closure, waxy cuticles, and leaf rolling",
                "Drought Tolerance: Osmotic adjustment via proline/glycine-betaine maintaining turgor pressure",
                "Cellular desiccation protection: LEA proteins, HSPs, and antioxidant ROS scavenging"
            ]
        },
        {
            "id": "AGP218-U1-SUB12",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Medium",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "questionText": "Analyze the agronomic indices used to evaluate Intercropping Systems: Land Equivalent Ratio (LER), Relative Crowding Coefficient (RCC), Aggressivity (A), and Area Time Equivalent Ratio (ATER). Provide numerical illustrations.",
            "modelAnswer": """Intercropping productivity and biological efficiency are quantitatively evaluated through competition indices that compare intercrop yields against sole crop baselines:

1. Land Equivalent Ratio (LER):
- Definition: The relative land area under sole cropping required to produce the yields achieved in an intercropping system:
  $$\\text{LER} = L_A + L_B = \\left( \\frac{Y_{AB}}{Y_{AA}} \\right) + \\left( \\frac{Y_{BA}}{Y_{BB}} \\right)$$
  Where $Y_{AB}$ and $Y_{BA}$ are intercrop yields of crops A and B, and $Y_{AA}$ and $Y_{BB}$ are their respective sole crop yields.
- Interpretation:
  - LER > 1.0: Intercropping advantage (e.g., LER = 1.25 indicates a 25% yield advantage; 1.25 ha of sole land is needed to produce the intercropped yield).
  - LER < 1.0: Intercropping disadvantage (mutual competitive inhibition).

2. Relative Crowding Coefficient (RCC / K):
- Definition: Measures the relative dominance of one species over the other in a mixture:
  $$K = K_A \\times K_B = \\left[ \\frac{Y_{AB} \\times Z_{BA}}{(Y_{AA} - Y_{AB}) \\times Z_{AB}} \\right] \\times \\left[ \\frac{Y_{BA} \\times Z_{AB}}{(Y_{BB} - Y_{BA}) \\times Z_{BA}} \\right]$$
  Where $Z_{AB}$ and $Z_{BA}$ are the sown proportions of crops A and B.
- Interpretation: If product $K > 1.0$, there is a net yield advantage; if $K = 1.0$, no advantage; if $K < 1.0$, yield disadvantage.

3. Aggressivity (A):
- Definition: Measures how much the relative yield increase of crop A exceeds that of crop B:
  $$A_{AB} = \\left( \\frac{Y_{AB}}{Y_{AA} \\times Z_{AB}} \\right) - \\left( \\frac{Y_{BA}}{Y_{BB} \\times Z_{BA}} \\right)$$
- Interpretation:
  - $A_{AB} = 0$: Both crops are equally competitive.
  - $A_{AB} > 0$: Crop A is dominant.
  - $A_{AB} < 0$: Crop A is dominated.

4. Area Time Equivalent Ratio (ATER):
- Limitation of LER: LER assumes both crops occupy the land for the same duration. When an 80-day pulse is intercropped with a 180-day pigeonpea, LER overestimates land efficiency.
- ATER Formula:
  $$\\text{ATER} = \\left[ \\left( \\frac{Y_{AB}}{Y_{AA}} \\times \\frac{T_A}{T} \\right) + \\left( \\frac{Y_{BA}}{Y_{BB}} \\times \\frac{T_B}{T} \\right) \\right]$$
  Where $T_A$ and $T_B$ are field durations in days, and $T$ is total field duration of the system.

5. Numerical Illustration (Maize + Soybean Intercrop in 1:2 ratio):
- Sole Maize ($Y_{AA}$) = 4,000 kg/ha; Intercrop Maize ($Y_{AB}$) = 3,200 kg/ha
- Sole Soybean ($Y_{BB}$) = 1,800 kg/ha; Intercrop Soybean ($Y_{BA}$) = 1,080 kg/ha
- Partial LER Maize = $3,200 / 4,000 = 0.80$
- Partial LER Soybean = $1,080 / 1,800 = 0.60$
- Total LER = $0.80 + 0.60 = 1.40$
Conclusion: The intercropping system generates a 40% yield advantage, confirming high biological complementarity.""",
            "outlinePoints": [
                "Land Equivalent Ratio (LER): Formula, component partial LERs, and interpretation of LER > 1.0",
                "Relative Crowding Coefficient (RCC / K): Measures dominance and product K advantage",
                "Aggressivity (A): Formula quantifying competitive dominance vs submissiveness",
                "Area Time Equivalent Ratio (ATER): Resolving temporal bias in mismatched duration intercrops",
                "Step-by-step numerical illustration (Maize + Soybean yielding LER = 1.40)"
            ]
        },
        {
            "id": "AGP218-U1-SUB13",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops",
            "questionText": "Detail Donald’s Cereal Crop Ideotype model. Explain how the incorporation of dwarfing genes (sd-1, Rht) transformed canopy architecture, light extinction, lodging resistance, and Harvest Index.",
            "modelAnswer": """In 1968, Australian agronomist C. M. Donald published 'The Breeding of Crop Ideotypes', presenting a revolutionary conceptual paradigm for plant breeding:

1. Donald’s Foundational Cereal Ideotype Specifications:
Donald proposed that a cereal ideotype designed for high-density, high-fertility cultivation should possess nine distinct traits:
1. Short, Stiff Culm: Prevents stem lodging under heavy fertilizer application and mechanical harvesting.
2. Compact, Erect Canopy: Leaves held at steep angles (70-80° to horizontal).
3. Small, Thick, Narrow Leaves: High specific leaf weight (SLW), rich in chlorophyll per unit leaf area.
4. Large Ear / Panicle: High number of fertile spikelets per unit head length.
5. Presence of Awns: Photosynthetic bristles on glumes contributing 10-15% of grain filling assimilates, particularly under terminal drought.
6. Single Culm / Low Tillering Architecture: Avoids producing wasteful, non-productive secondary tillers that consume nutrients and senesce prematurely.
7. High Harvest Index (>0.5): Over 50% of total biological biomass partitioned into grain.
8. Non-Aggressive Community Competitor: Cooperative canopy architecture minimizing shading of adjacent plants.
9. Moderate Disease and Pest Resistance.

2. Genetic Transformation: Dwarfing Genes (*sd-1* and *Rht*):
The architectural transformation of the Green Revolution was driven by two landmark dwarfing genes:
- *sd-1* in Rice (*Oryza sativa*): A recessive loss-of-function mutation in the *GA20ox-2* gene (gibberellin 20-oxidase), derived from Taiwanese landrace Dee-geo-woo-gen. It halts gibberellin synthesis in internodes, reducing plant height from 150 cm down to 90 cm without reducing panicle size.
- *Rht-B1b* and *Rht-D1b* in Wheat (*Triticum aestivum*): Gibberellin-insensitive mutations from Japanese cultivar Norin-10 encoding altered DELLA proteins.

3. Biomechanical and Physiological Consequences:

A. Absolute Lodging Resistance:
Traditional tall landraces possessed high centers of gravity; applying nitrogen (>60 kg N/ha) caused stem elongation, leading to wind lodging, canopy decay, and 40-60% yield loss. Semi-dwarf ideotypes lower the center of gravity, resisting lodging even under 150-200 kg N/ha.

B. Canopy Extinction Coefficient ($k$) and Light Interception:
Under the Beer-Lambert Law ($I = I_0 e^{-k \\cdot \\text{LAI}}$), traditional droopy leaves have a high extinction coefficient ($k \\approx 0.7 - 0.9$), absorbing all light in the top 20 cm and casting the lower canopy into complete darkness. Erect-leaf ideotypes have a low extinction coefficient ($k \\approx 0.3 - 0.5$), allowing sunlight to illuminate lower canopy tiers uniformly.

C. Doubling of the Harvest Index:
Traditional landraces had a Harvest Index of barely 25-30% (producing 2.5 tons of straw for every 1 ton of grain). Ideotypes doubled the Harvest Index to 50-55%, channeling photosynthates directly into reproductive grain sinks.""",
            "outlinePoints": [
                "Donald's 1968 cereal ideotype: 9 structural traits (erect leaves, short stiff culm, large ear, high HI)",
                "The 'Weak Competitor' philosophy for community canopy yield optimization",
                "Genetic mechanics of dwarfing genes: sd-1 (GA20-oxidase defect in rice) and Rht (DELLA mutation in wheat)",
                "Biomechanical impact: Center of gravity reduction and absolute lodging resistance under high fertility",
                "Light extinction physics: Beer-Lambert Law, low extinction coefficient (k=0.4), and lower canopy illumination",
                "Assimilate partitioning: Doubling Harvest Index from 25% to over 50%"
            ]
        },
        {
            "id": "AGP218-U1-SUB14",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Medium",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "questionText": "Evaluate the methods of measuring and scheduling crop irrigation: Soil moisture depletion approach, Climatological (IW/CPE) approach, and Plant-based canopy temperature indicators.",
            "modelAnswer": """Scientific irrigation scheduling aims to apply the exact depth of water at the precise time to maximize Water Use Efficiency (WUE) and crop yield:

1. Soil Moisture Depletion (SMD) Approach:
- Operational Principle: Irrigation is scheduled when a predetermined percentage of Available Soil Water (ASW) is depleted from the effective root zone.
- Typical Depletion Thresholds:
  - Moisture-sensitive crops (rice, maize, groundnut): Irrigated at 25% to 50% depletion of ASW.
  - Drought-hardy crops (sorghum, pearl millet, cotton): Irrigated at 50% to 75% depletion.
- Instrumentation: Soil moisture is monitored using gravimetric oven drying, tensiometers (0 to -0.85 bar), electrical resistance gypsum blocks (-1 to -15 bar), or digital Time Domain Reflectometry (TDR) probes.
- Strengths & Limitations: Highly accurate and reflects root-zone moisture directly; however, spatial soil variability across large fields makes single-point sensor placement challenging.

2. Climatological Approach (IW / CPE Ratio):
- Operational Principle: Integrates atmospheric evaporative demand with crop water consumption. Irrigation of a predetermined depth ($IW$, usually 50 to 60 mm) is applied when Cumulative Pan Evaporation ($CPE$) from an open-pan evaporimeter reaches a threshold value:
  $$\\text{Irrigation Interval (Days)} = \\frac{IW}{\\text{Target Ratio} \\times \\text{Daily Pan Evaporation}}$$
- Benchmark Ratios for Kharif Crops:
  - Maize: IW/CPE = 0.8 to 0.9 (high water sensitivity).
  - Cotton: IW/CPE = 0.6 to 0.7.
  - Pearl Millet / Sorghum: IW/CPE = 0.4 to 0.6.
- Strengths & Limitations: Exceptionally simple, inexpensive, and easily managed by farm workers without complex soil sampling. However, it ignores crop stage differences unless ratio coefficients are adjusted seasonally.

3. Plant-Based Indicators (Canopy Temperature and Stress Indices):
- Operational Principle: The plant acts as a dynamic integrator of both soil water availability and atmospheric demand.
- Infrared Thermometry & Crop Water Stress Index (CWSI):
  - When soil water is plentiful, open stomata transpire freely; evaporative cooling maintains canopy temperature ($T_c$) 2-5°C below ambient air temperature ($T_a$) ($T_c - T_a < 0$).
  - As moisture stress develops, stomata close, transpiration halts, and solar radiation warms the canopy ($T_c - T_a > 0$).
  - Handheld infrared thermometers measure $T_c - T_a$; irrigation is triggered when the differential crosses a positive threshold.
- Other Plant Indicators: Visual indicators (midday leaf rolling in maize/rice, leaf color change from light green to dull dark blue-green in cotton), and Scholander pressure chamber xylem water potential.

Conclusion:
Integrating climatological IW/CPE schedules with plant canopy temperature monitoring provides optimal irrigation precision, saving up to 30-40% water under micro-irrigation systems.""",
            "outlinePoints": [
                "Definition and objective of scientific irrigation scheduling",
                "Soil Moisture Depletion approach: Depletion thresholds (50% ASW) and sensor tools (Tensiometer, TDR)",
                "Climatological (IW/CPE) approach: Open-pan evaporimeter, benchmark crop ratios (Maize 0.8, Sorghum 0.5)",
                "Plant-based indicators: Infrared thermometry, Crop Water Stress Index (CWSI), and leaf rolling",
                "Scholander pressure chamber xylem potential measurements",
                "Synthesis: Precision water saving combining IW/CPE with plant canopy sensors"
            ]
        },

        # Comparison Questions (15-17)
        {
            "id": "AGP218-U1-SUB15",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Easy",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "questionText": "Compare C3 Plants and C4 Plants across leaf anatomy, primary carboxylating enzyme, photorespiration, and water use efficiency.",
            "modelAnswer": """C3 and C4 plants represent two distinct photosynthetic evolutionary pathways:

1. Leaf Internal Anatomy:
- C3 Plants (e.g., Rice, Soybean, Groundnut): Standard bifacial leaf anatomy; mesophyll cells contain normal chloroplasts; bundle sheath cells lack specialized enlarged chloroplasts.
- C4 Plants (e.g., Maize, Sorghum, Pearl Millet, Sugarcane): Possess specialized 'Kranz Anatomy'; bundle sheath cells are tightly packed in wreaths around vascular bundles, packed with large, specialized chloroplasts.

2. Primary Carbon-Fixing Enzyme and Initial Product:
- C3 Plants: Primary enzyme is Ribulose-1,5-bisphosphate carboxylase/oxygenase (Rubisco). The first stable product is a 3-carbon compound: 3-Phosphoglycerate (3-PGA).
- C4 Plants: Primary enzyme is Phosphoenolpyruvate (PEP) carboxylase in mesophyll cells. The first stable product is a 4-carbon dicarboxylic acid: Oxaloacetate (OAA) or Malate.

3. Photorespiration (Warburg Effect):
- C3 Plants: Significant photorespiration occurs under high temperatures and oxygen; Rubisco acts as an oxygenase, wasting 25-40% of assimilated carbon as $CO_2$ with zero ATP gain.
- C4 Plants: Zero detectable photorespiration. PEP carboxylase has zero oxygenase affinity; the internal C4 biochemical pump concentrates $CO_2$ inside bundle sheath cells to 10x atmospheric levels, suppressing Rubisco oxygenase activity.

4. Water Use Efficiency (WUE) and Temperature Optimum:
- C3 Plants: Lower WUE (typically 1.5 to 3.0 kg grain/ha-mm); optimal temperature range is 20-30°C.
- C4 Plants: Superior WUE (3.5 to 6.0 kg grain/ha-mm); optimal temperature range is 32-45°C, making them highly adapted to hot, semi-arid Kharif conditions.""",
            "outlinePoints": [
                "Leaf anatomy: Normal mesophyll vs Kranz anatomy with wreath-like bundle sheaths",
                "Primary enzyme & product: Rubisco / 3-PGA (C3) vs PEP carboxylase / Oxaloacetate (C4)",
                "Photorespiration: Heavy 30% carbon loss in C3 vs Zero photorespiration in C4",
                "Water Use Efficiency & temperature: Moderate WUE (20-30°C) vs Double WUE (32-45°C)",
                "Representative Kharif crop examples for each class"
            ]
        },
        {
            "id": "AGP218-U1-SUB16",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "questionText": "Differentiate between Mixed Cropping and Intercropping in terms of spatial arrangement, management, weeding, and commercial objectives.",
            "modelAnswer": """Mixed cropping and intercropping represent distinct multiple cropping strategies:

1. Spatial Row Arrangement:
- Mixed Cropping: Seeds of two or more crops are mixed together thoroughly in definite or random ratios and broadcast across the field with zero row arrangement or geometric spacing.
- Intercropping: Two or more crops are planted simultaneously in definite, distinct row ratios and geometric configurations (e.g., Maize + Cowpea in 2:2 row ratio, or Pigeonpea + Soybean in 2:4 ratio).

2. Management and Agronomic Operations:
- Mixed Cropping: Extremely difficult to manage. Mechanical weeding, inter-cultivation, crop-specific fertilizer application, and plant protection spraying are nearly impossible because plants are scattered randomly.
- Intercropping: Highly organized. Inter-row spacing allows tractor or bullock-drawn cultivators to perform intercultural weeding between rows; target herbicides or pesticides can be applied specifically to designated crop rows.

3. Fertilizer and Irrigation Targeting:
- Mixed Cropping: A single uniform broadcast fertilizer or irrigation rate is applied to the entire mixed stand, often leading to over-fertilization of legumes or under-fertilization of cereals.
- Intercropping: Fertilizer can be placed precisely at the root zones of the component crops according to their specific nutritional requirements.

4. Harvesting and Commercial Objectives:
- Mixed Cropping: Traditional subsistence practice aimed primarily at insurance against complete crop failure in unpredictable dryland climates; crops are harvested mixed together or with difficulty as they mature at different times.
- Intercropping: Commercial, market-oriented practice designed to maximize total land productivity per unit area (LER > 1.0) through spatial and temporal resource complementarity; component crops are harvested separately and marketed independently.""",
            "outlinePoints": [
                "Spatial geometry: Random broadcast mixture vs Definite geometric row configurations",
                "Intercultural operations: Impossible mechanical weeding vs Easy inter-row cultivation",
                "Nutrient targeting: Indiscriminate broadcast vs Crop-specific root-zone precision",
                "Harvesting: Difficult staggered harvest vs Organized separate crop harvesting",
                "Objective: Traditional subsistence insurance vs Commercial yield maximization (LER > 1.0)"
            ]
        },
        {
            "id": "AGP218-U1-SUB17",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Hard",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages",
            "questionText": "Compare Drought Avoidance and Drought Tolerance as physiological survival strategies in rainfed Kharif crops.",
            "modelAnswer": """Plants adapt to agricultural drought through two distinct evolutionary strategies:

1. Core Strategy Definition:
- Drought Avoidance: The plant maintains high internal water potential (high tissue hydration) despite low soil moisture availability by maximizing water absorption or minimizing transpirational water loss.
- Drought Tolerance: The plant withstands low internal water potential (cellular dehydration) without suffering lethal metabolic damage, continuing physiological functions at negative water potentials.

2. Morphological and Structural Mechanisms:
- Drought Avoidance:
  - Rapid taproot penetration into deep subsoil layers (e.g. Pigeonpea roots).
  - Thick waxy cuticles (epicuticular wax bloom in sorghum).
  - Bulliform-cell driven leaf rolling in rice and maize to reduce exposed leaf area.
  - Parheliotropic leaf movements (leaf blades turning parallel to sunlight).
- Drought Tolerance:
  - Small, rigid cells that maintain wall structural integrity during cell shrinking.
  - High cellular elasticity allowing protoplasts to shrink without tearing the plasma membrane away from cell walls.

3. Biochemical and Osmotic Mechanisms:
- Drought Avoidance:
  - Rapid root-to-shoot signaling via Abscisic Acid (ABA) inducing immediate stomatal closure.
- Drought Tolerance:
  - Active Osmotic Adjustment (OA): De novo synthesis and accumulation of compatible solutes (proline, glycine-betaine, trehalose, polyols) and potassium ($K^+$), lowering cellular osmotic potential ($\\Psi_s$) to maintain turgor ($\\Psi_p > 0$) for stomatal opening.
  - Desiccation Protection: Synthesis of Late Embryogenesis Abundant (LEA) proteins and Heat Shock Proteins (HSPs) that protect enzymes from denaturation.
  - Antioxidant Defense: Elevated activities of Superoxide Dismutase (SOD), Catalase (CAT), and Peroxidase to neutralize toxic Reactive Oxygen Species (ROS).

4. Representative Kharif Crop Examples:
- Avoidance: Pigeonpea, Cotton, Cowpea.
- Tolerance: Pearl Millet, Sorghum, Moth bean.""",
            "outlinePoints": [
                "Core philosophy: Maintaining high tissue hydration vs Functioning at low water potential",
                "Morphological traits: Deep roots, waxy cuticles, leaf rolling vs Small rigid cells",
                "Biochemical signaling: ABA stomatal closure vs Active osmotic adjustment (proline accumulation)",
                "Cellular desiccation machinery: LEA proteins, HSP chaperones, and antioxidant ROS enzymes",
                "Crop examples: Pigeonpea/Cotton (Avoidance) vs Sorghum/Pearl millet (Tolerance)"
            ]
        },

        # Application Questions (18-19)
        {
            "id": "AGP218-U1-SUB18",
            "questionType": "APPLICATION",
            "maxMarks": 8,
            "difficulty": "Medium",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture",
            "questionText": "An agronomist conducts a field evaluation of a Pigeonpea + Soybean intercropping experiment in a 2:4 row replacement series. The recorded experimental data across 1 hectare is:\n- Sole Pigeonpea yield: 1,800 kg/ha\n- Intercropped Pigeonpea yield: 1,350 kg/ha\n- Sole Soybean yield: 2,400 kg/ha\n- Intercropped Soybean yield: 1,440 kg/ha\n- Market Price of Pigeonpea: ₹70/kg\n- Market Price of Soybean: ₹45/kg\n\nCalculate: (1) Partial LER of Pigeonpea, (2) Partial LER of Soybean, (3) Total Land Equivalent Ratio (LER), and (4) Gross Monetary Returns of the Intercropping system versus Sole Pigeonpea and Sole Soybean. Provide an agronomic interpretation.",
            "modelAnswer": """STEP-BY-STEP AGRONOMIC CALCULATIONS:

1. CALCULATION OF PARTIAL AND TOTAL LER:
- Partial LER for Pigeonpea ($L_P$):
  $$L_P = \\frac{\\text{Intercrop Yield of Pigeonpea}}{\\text{Sole Crop Yield of Pigeonpea}} = \\frac{1,350}{1,800} = 0.75$$

- Partial LER for Soybean ($L_S$):
  $$L_S = \\frac{\\text{Intercrop Yield of Soybean}}{\\text{Sole Crop Yield of Soybean}} = \\frac{1,440}{2,400} = 0.60$$

- Total Land Equivalent Ratio (LER):
  $$\\text{Total LER} = L_P + L_S = 0.75 + 0.60 = 1.35$$

*Agronomic Interpretation: The total LER of 1.35 indicates a 35% biological yield advantage over sole cropping. It implies that 1.35 hectares of sole land (0.75 ha of sole pigeonpea + 0.60 ha of sole soybean) would be required to produce the same physical output harvested from 1.0 hectare of the intercropping system.*

2. GROSS MONETARY RETURNS EVALUATION:
- Gross Returns from Intercropping (1 ha):
  - Revenue from Pigeonpea: $1,350 \\text{ kg} \\times ₹70 = ₹94,500$
  - Revenue from Soybean: $1,440 \\text{ kg} \\times ₹45 = ₹64,800$
  - Total Intercrop Gross Return = $₹94,500 + ₹64,800 = ₹1,59,300$

- Gross Returns from Sole Pigeonpea (1 ha):
  $$\\text{Sole Pigeonpea Return} = 1,800 \\text{ kg} \\times ₹70 = ₹1,26,000$$

- Gross Returns from Sole Soybean (1 ha):
  $$\\text{Sole Soybean Return} = 2,400 \\text{ kg} \\times ₹45 = ₹1,08,000$$

3. ECONOMIC ADVANTAGE COMPARISON:
- Economic Gain over Sole Pigeonpea:
  $$₹1,59,300 - ₹1,26,000 = +₹33,300 \\text{ (26.43\\% higher revenue)}$$
- Economic Gain over Sole Soybean:
  $$₹1,59,300 - ₹1,08,000 = +₹51,300 \\text{ (47.50\\% higher revenue)}$$

Conclusion:
The Pigeonpea + Soybean (2:4) intercropping system is biologically superior (LER = 1.35) and economically lucrative, delivering ₹1,59,300/ha. The temporal complementarity—fast-maturing soybean (95 days) harvesting early before slow-growing pigeonpea (180 days) branches out—maximizes both sunlight interception and smallholder income.""",
            "outlinePoints": [
                "Step 1: Partial LER Pigeonpea calculation (0.75)",
                "Step 2: Partial LER Soybean calculation (0.60)",
                "Step 3: Total LER computation (1.35) and 35% land efficiency interpretation",
                "Step 4: Gross revenue computation for Intercrop (₹1,59,300)",
                "Step 5: Gross revenue for Sole Pigeonpea (₹1,26,000) and Sole Soybean (₹1,08,000)",
                "Economic interpretation: 26.4% higher revenue over sole pigeonpea and temporal complementarity"
            ]
        },
        {
            "id": "AGP218-U1-SUB19",
            "questionType": "APPLICATION",
            "maxMarks": 8,
            "difficulty": "Hard",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "questionText": "A commercial hybrid maize crop was sown on 25 June in Central India (Base temperature $T_{\\text{base}} = 10^\\circ\\text{C}$). The recorded daily temperatures during the first 5 days post-emergence were:\n- Day 1: Max 34°C, Min 22°C\n- Day 2: Max 36°C, Min 24°C\n- Day 3: Max 32°C, Min 20°C\n- Day 4: Max 28°C, Min 18°C (rainy)\n- Day 5: Max 30°C, Min 20°C\n\nCalculate the cumulative Growing Degree Days (GDD) accumulated over this 5-day period. If the maize hybrid requires 1,250 GDD to reach the silking stage, explain how an agronomist uses historical GDD datasets to schedule fertilizer side-dressing and plan irrigation before the critical flowering window.",
            "modelAnswer": """STEP-BY-STEP GDD CALCULATION AND AGRONOMIC APPLICATION:

1. DAILY AND CUMULATIVE GDD CALCULATION:
Formula: $\\text{GDD} = \\left[ \\frac{T_{\\max} + T_{\\min}}{2} \\right] - T_{\\text{base}}$ (where $T_{\\text{base}} = 10^\\circ\\text{C}$)

- Day 1:
  $$\\text{Mean Temp} = \\frac{34 + 22}{2} = 28^\\circ\\text{C}; \\quad \\text{GDD}_1 = 28 - 10 = 18^\\circ\\text{C-days}$$
- Day 2:
  $$\\text{Mean Temp} = \\frac{36 + 24}{2} = 30^\\circ\\text{C}; \\quad \\text{GDD}_2 = 30 - 10 = 20^\\circ\\text{C-days}$$
- Day 3:
  $$\\text{Mean Temp} = \\frac{32 + 20}{2} = 26^\\circ\\text{C}; \\quad \\text{GDD}_3 = 26 - 10 = 16^\\circ\\text{C-days}$$
- Day 4:
  $$\\text{Mean Temp} = \\frac{28 + 18}{2} = 23^\\circ\\text{C}; \\quad \\text{GDD}_4 = 23 - 10 = 13^\\circ\\text{C-days}$$
- Day 5:
  $$\\text{Mean Temp} = \\frac{30 + 20}{2} = 25^\\circ\\text{C}; \\quad \\text{GDD}_5 = 25 - 10 = 15^\\circ\\text{C-days}$$

- Cumulative GDD Accumulated Over 5 Days:
  $$\\text{Cumulative GDD} = 18 + 20 + 16 + 13 + 15 = 82^\\circ\\text{C-days}$$

2. AGRONOMIC SCHEDULING APPLICATION:
- Average Daily GDD Accumulation: $82 / 5 = 16.4^\\circ\\text{C-days/day}$.
- Projected Days to Silking (1,250 GDD):
  $$\\text{Estimated Days to Silking} \\approx \\frac{1,250}{16.4} \\approx 76 \\text{ days post-emergence}$$

3. Operational Deployment by the Agronomist:
- Nitrogen Top-Dressing at Knee-High Stage (V6):
  Maize rapidly absorbs nitrogen between the V6 (knee-high) and V10 stages (accumulating around 400 to 550 GDD). By tracking live GDD accumulation rather than calendar days, the agronomist schedules the split application of urea (50 kg N/ha) exactly when the crop hits 450 GDD, ensuring nitrogen availability prior to tassel initiation inside the whorl.
- Pre-Flowering Irrigation Buffer:
  Tasseling and silking (1,200 to 1,350 GDD) is the single most moisture-sensitive phase. Tracking thermal accumulation allows the farm manager to pre-irrigate the field at 1,150 GDD, ensuring the root zone is at 100% Field Capacity when silks emerge, preventing silk desiccation, pollen-silk nicking mismatches, and cob barrenness.""",
            "outlinePoints": [
                "Step 1: Daily GDD calculation for all 5 days using $T_{\\text{base}} = 10^\\circ\\text{C}$",
                "Step 2: Cumulative GDD summation (82°C-days)",
                "Step 3: Average daily thermal pace (16.4 GDD/day) and projected 76 days to silking",
                "Agronomic application 1: Precision nitrogen side-dressing timed to V6 stage (450 GDD)",
                "Agronomic application 2: Proactive irrigation scheduling at 1,150 GDD to buffer against silking moisture stress"
            ]
        },

        # Case Study (20)
        {
            "id": "AGP218-U1-SUB20",
            "questionType": "CASE_STUDY",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season",
            "contextScenario": "In the semi-arid Vidarbha region of Maharashtra (Agro-Climatic Zone 9: Western Plateau and Hills), a cluster of 200 smallholder farmers cultivate rainfed Bt cotton on medium black soils (Vertisols). In the 2024 Kharif season, the South-West monsoon arrived on 18 June, encouraging farmers to sow cotton with basal fertilizer (NPK 20:20:0). However, from 12 July to 10 August, an unprecedented 29-day continuous mid-season dry spell struck the district, accompanied by high temperatures (38°C) and dry winds. Farmers noticed severe moisture stress: cotton plants began wilting by 11:00 AM, shedding over 60% of their early floral squares (flower buds), while leaves rolled tightly and developed marginal necrosis. Several distressed farmers panicked and sprayed heavy chemical insecticides believing the flower shedding was caused by bollworms. Neighboring farmer Ramesh, an agricultural graduate, adopted a scientific climate-resilience package: (1) He ran a tractor-mounted blade harrow to create a 3-inch soil dust mulch; (2) He thinned every fourth plant in rows to reduce canopy transpirational competition; (3) He applied a foliar spray of 2% Potassium Chloride (KCl) combined with 1% Urea and 20 ppm Planofix (NAA); and (4) He mobilized community farm ponds (Jal-Yukta Shivar) to give a single 30-mm supplemental drip irrigation during peak square formation.",
            "questionText": "Conduct an exhaustive agro-ecological and physiological diagnosis of the 29-day dry spell on the cotton crop. Contrast the panic chemical responses of the traditional farmers against Ramesh's scientific climate-resilience package. Evaluate Ramesh's agronomic interventions across soil physics, plant water relations, and hormonal balance, detailing how his package prevented crop failure.",
            "modelAnswer": """The 29-day dry spell in Vidarbha represents a severe mid-season agro-meteorological drought striking at the most critical physiological phenophase of Bt cotton—the transition from vegetative branching to reproductive square initiation.

1. Agro-Ecological and Physiological Diagnosis:

A. The Root of Square Shedding (Physiological vs Insect Pest):
- Traditional farmers misdiagnosed flower square shedding as insect bollworm damage. In reality, square shedding was a classical physiological dehydration response.
- When soil moisture in the root zone drops toward Permanent Wilting Point (-15 bar), water potential in leaf cells falls below -1.8 MPa. The plant synthesizes stress ethylene and abscisic acid (ABA) at the pedicel junction. ABA and ethylene activate cellulase and pectinase enzymes in the abscission zone, dissolving cell walls and causing mass shedding of squares (natural self-thinning to protect plant survival). Spraying insecticides was a disastrous error: it burned already-dehydrated leaf tissues, eliminated beneficial predatory spiders, and increased farmer financial debt without addressing moisture loss.

B. The Soil Cracking Phenomenon:
- Vertisols (black cotton soils) contain high percentages of montmorillonite clay. As moisture evaporates, clay shrinks and forms deep, wide soil cracks (3 to 6 feet deep). These cracks tear feeder roots mechanically and expose subsoil layers directly to hot air, drastically accelerating evaporation.

2. Evaluation of Ramesh’s Scientific Climate-Resilience Package:

A. Soil Dust Mulching (Disrupting Capillary Evaporation):
- Ramesh operated a blade harrow across rows, creating a 3-inch loose, pulverized dust mulch.
- Soil Physics Principle: Loose dust mulch breaks the continuous capillary soil pores that pump water from subsoil to the surface, arresting evaporation losses by up to 50% and sealing crack openings.

B. Population Thinning (Canopy Demand Management):
- By thinning every fourth plant, Ramesh reduced total crop Leaf Area Index (LAI) by 25%. Under the Beer-Lambert law and transpiration mechanics, lower canopy leaf area proportionally reduces daily community transpiration, preserving finite soil water for the remaining 75% of plants.

C. Foliar Spray: 2% KCl + 1% Urea + 20 ppm NAA (Planofix):
- Potassium Chloride (KCl @ 2%): Potassium ($K^+$) is the primary osmoticum regulating stomatal guard cells. Foliar $K^+$ enables guard cells to retain turgor, preventing stomatal collapse while promoting cellular osmotic adjustment.
- Urea (1%): Supplies foliar nitrogen directly to metabolically starving leaves whose root nutrient uptake had halted due to dry soil.
- Planofix (NAA @ 20 ppm): Auxin counteracts abscisic acid and ethylene in the square pedicel abscission zone, halting the enzymatic dissolution of cell walls and retaining squares on sympodial branches.

D. Supplemental Drip Irrigation from Farm Pond (30 mm):
- Applying 30 mm of water via micro-drip irrigation applied moisture directly to the root zone without evaporation waste, elevating root water potential from -1.8 MPa to -0.4 MPa, rescuing the crop until the monsoon resumed in mid-August.

Financial and Agronomic Outcome:
Traditional farmers suffered 55-70% yield loss, harvesting barely 4 quintals/ha of stained fiber. Ramesh harvested 14.5 quintals/ha of top-grade seed cotton, recovering all costs and proving that scientific crop ecology and physiological management are indispensable for dryland climate resilience.""",
            "outlinePoints": [
                "Agro-ecological diagnosis: Mid-season drought striking Vertisols during cotton square initiation",
                "Physiological mechanics: Ethylene/ABA synthesis dissolving pedicel abscission zones vs misdiagnosed bollworm pests",
                "Soil physics of Vertisols: Montmorillonite shrinkage, deep cracking, and root shearing",
                "Evaluation of Dust Mulching: Breaking capillary conduits to arrest evaporation",
                "Evaluation of Canopy Thinning: Reducing transpirational Leaf Area Index (LAI) demand",
                "Evaluation of Foliar Spray: Potassium (osmotic turgor), Urea (leaf nitrogen), and NAA Planofix (anti-abscission)",
                "Supplemental Farm Pond Drip Irrigation: Root zone recharge from -1.8 MPa to -0.4 MPa",
                "Comparative harvest outcomes: 4 q/ha failure vs 14.5 q/ha bumper harvest"
            ]
        }
    ]

    # 20 Flashcards
    flashcards = [
        {
            "id": "AGP218-U1-FC01",
            "front": "How many Agro-Climatic Zones did the Planning Commission of India delineate in 1988?",
            "back": "15 Agro-Climatic Zones based on homogeneity in rainfall, temperature, soil, and cropping systems.",
            "hint": "Exactly fifteen zones.",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India"
        },
        {
            "id": "AGP218-U1-FC02",
            "front": "What defines a Short-Day Plant (SDP)?",
            "back": "A plant that initiates flowering only when day length is shorter than a critical photoperiod (requiring long uninterrupted dark nights, e.g., rice, soybean).",
            "hint": "Flowers under short days and long nights.",
            "syllabusTopic": "Agronomic classification of crops; agro-climatic zones of India"
        },
        {
            "id": "AGP218-U1-FC03",
            "front": "What are the three cardinal temperatures for crop growth?",
            "back": "Minimum temperature (growth starts), Optimum temperature (growth rate maximal), and Maximum temperature (growth ceases).",
            "hint": "Minimum, Optimum, Maximum.",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season"
        },
        {
            "id": "AGP218-U1-FC04",
            "front": "What is the formula for Growing Degree Days (GDD / Thermal Time)?",
            "back": "GDD = Sum of [(T_max + T_min) / 2 - T_base], where T_base is 10°C for tropical Kharif crops.",
            "hint": "Mean daily temperature minus base temperature.",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season"
        },
        {
            "id": "AGP218-U1-FC05",
            "front": "What is Photosynthetically Active Radiation (PAR)?",
            "back": "The spectral waveband of solar radiation between 400 nm and 700 nm absorbed by chlorophyll to drive photosynthesis.",
            "hint": "400 to 700 nm waveband.",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season"
        },
        {
            "id": "AGP218-U1-FC06",
            "front": "Why do C4 crops have higher Water Use Efficiency than C3 crops?",
            "back": "C4 crops use PEP carboxylase with Kranz anatomy to fix CO2 with zero photorespiration and maintain high photosynthesis with partially closed stomata.",
            "hint": "Kranz anatomy and zero photorespiration.",
            "syllabusTopic": "Crop ecology, weather parameters, and climate resilience in Kharif season"
        },
        {
            "id": "AGP218-U1-FC07",
            "front": "What is Field Capacity (FC) in soil water relations?",
            "back": "The moisture percentage retained in soil after gravitational drainage has ceased (held at -0.1 to -0.33 bar suction).",
            "hint": "Capillary moisture held after drainage.",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages"
        },
        {
            "id": "AGP218-U1-FC08",
            "front": "What is the soil water potential at the Permanent Wilting Point (PWP)?",
            "back": "-15 bar (-1.5 MPa), where plant roots can no longer extract water and leaves wilt irreversibly.",
            "hint": "Minus 15 bars.",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages"
        },
        {
            "id": "AGP218-U1-FC09",
            "front": "What is Available Water Capacity (AWC)?",
            "back": "The soil water fraction available for plant root uptake: AWC = Field Capacity (FC) - Permanent Wilting Point (PWP).",
            "hint": "AWC = FC - PWP.",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages"
        },
        {
            "id": "AGP218-U1-FC10",
            "front": "What is the most critical growth stage for moisture stress in maize?",
            "back": "Tasseling and Silking (flowering); moisture stress causes pollen abortion and silk desiccation, resulting in barren cobs.",
            "hint": "Flowering stage: Tasseling and Silking.",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages"
        },
        {
            "id": "AGP218-U1-FC11",
            "front": "What is the critical growth stage for moisture in groundnut?",
            "back": "Pegging stage (gynophore elongation into soil) and pod development.",
            "hint": "Pegging stage.",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages"
        },
        {
            "id": "AGP218-U1-FC12",
            "front": "Who formulated the Crop Ideotype concept in 1968?",
            "back": "C. M. Donald, who conceptualized an idealized plant model designed to maximize community grain yield in a dense canopy.",
            "hint": "C. M. Donald.",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops"
        },
        {
            "id": "AGP218-U1-FC13",
            "front": "What is the formula for Harvest Index (HI)?",
            "back": "HI = (Economic Yield / Biological Yield) × 100; modern semi-dwarf cereals achieve HI of 45-50%.",
            "hint": "Economic yield over biological yield.",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops"
        },
        {
            "id": "AGP218-U1-FC14",
            "front": "What is the dwarfing gene in Green Revolution semi-dwarf rice varieties?",
            "back": "The sd-1 (semi-dwarf 1) recessive gene from Dee-geo-woo-gen, which restricts internodal elongation.",
            "hint": "sd-1 gene.",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops"
        },
        {
            "id": "AGP218-U1-FC15",
            "front": "What is the primary commercial use of NAA (Planofix @ 20 ppm) in Kharif crops?",
            "back": "Sprayed on cotton and pigeonpea to prevent premature shedding of squares, flowers, and pods by inhibiting abscission layer formation.",
            "hint": "Auxin spray preventing flower/boll drop.",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops"
        },
        {
            "id": "AGP218-U1-FC16",
            "front": "What is the physiological role of Mepiquat Chloride in cotton?",
            "back": "Acts as a growth retardant inhibiting gibberellin synthesis, restricting excessive vegetative rank growth and promoting boll retention.",
            "hint": "Growth retardant controlling cotton rank growth.",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops"
        },
        {
            "id": "AGP218-U1-FC17",
            "front": "What does a Land Equivalent Ratio (LER) > 1.0 signify in intercropping?",
            "back": "Indicates a biological yield advantage; LER = 1.25 means the intercrop produces 25% more yield than sole crops on the same land area.",
            "hint": "Yield advantage over sole cropping.",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture"
        },
        {
            "id": "AGP218-U1-FC18",
            "front": "What is Cropping Intensity (CI) and its formula?",
            "back": "CI (%) = (Gross Cropped Area / Net Sown Area) × 100; measures the number of times crops are raised on a field in a year.",
            "hint": "(Gross Cropped Area / Net Sown Area) × 100.",
            "syllabusTopic": "Cropping systems, farming systems, and sustainable agriculture"
        },
        {
            "id": "AGP218-U1-FC19",
            "front": "What is the 'Stay-Green' trait in sorghum and maize?",
            "back": "The ability to retain functional green photosynthetic leaves and delay senescence during post-flowering grain filling under terminal drought.",
            "hint": "Delayed leaf senescence under drought.",
            "syllabusTopic": "Plant growth regulators and crop ideotype concept in Kharif crops"
        },
        {
            "id": "AGP218-U1-FC20",
            "front": "How does 5% Kaolinite spray function as an anti-transpirant?",
            "back": "Acts as a reflective-type anti-transpirant, coating leaves in a white film that reflects excess solar radiation, lowering canopy temperature by 2-4°C.",
            "hint": "White reflective clay film reducing leaf heat.",
            "syllabusTopic": "Soil-plant-water relations, water use efficiency, and critical irrigation stages"
        }
    ]

    return {
        "unitNumber": 1,
        "title": "Principles of Crop Production",
        "shortDescription": "Agronomic classification of crops, 15 agro-climatic zones, cropping/farming systems, crop ecology (PAR, GDD), soil-plant-water relations, and Donald's crop ideotype.",
        "estimatedReadTimeMinutes": 22,
        "syllabusTopics": syllabus_topics,
        "notes": notes,
        "mcqs": mcqs,
        "subjectiveQuestions": subjectives,
        "flashcards": flashcards
    }
