import json

u3_data = {
    "unitNumber": 3,
    "title": "Kharif Pulses and Oilseeds",
    "shortDescription": "Comprehensive agronomy of major kharif pulses (pigeonpea, green gram, black gram) and oilseeds (soybean, groundnut), covering varietal selection, rhizobial symbiosis, gypsum dynamics, and crop protection.",
    "estimatedReadTimeMinutes": 160,
    "syllabusTopics": [
        "Soybean (Glycine max): origin, distribution, economic importance, varieties, and Bradyrhizobium inoculation",
        "Groundnut (Arachis hypogaea): botanical classification, gynophore pegging, calcium dynamics, and aflatoxin management",
        "Pigeonpea (Cajanus cajan): physiological characteristics, cropping systems, wilt and sterility mosaic management, and hybrids",
        "Green gram (Vigna radiata) and Black gram (Vigna mungo): agronomic management, MYMV resistance, and foliar nutrition",
        "Nutrient management, nodulation dynamics, phosphorus solubilization, and biofertilizers in kharif legumes"
    ],
    "notes": {
        "learningObjectives": [
            "Analyze the agronomic requirements, biological nitrogen fixation, and varietal landscape of Soybean and Groundnut in India.",
            "Deconstruct the physiological phenomenon of subterranean pegging in Groundnut and formulate calcium/gypsum nutrition schedules to prevent pod popping.",
            "Evaluate cropping systems, ideotypes, and disease management (Fusarium wilt, Sterility Mosaic Disease) in Pigeonpea, including the genetics of cytoplasmic male-sterile hybrids.",
            "Synthesize package of practices for Green gram and Black gram, focusing on early maturity catch cropping, MYMV management, and foliar DAP supplementation.",
            "Examine biological nitrogen fixation (BNF) biochemistry, leghemoglobin role, phosphorus-biofertilizer interactions, and micronutrient (Mo, Co) requirements in pulse crops."
        ],
        "sections": [
            {
                "id": "sec-agp218-3-1",
                "heading": "1. Soybean (Glycine max (L.) Merr.): Agronomy and Inoculation",
                "content": "Soybean, known as the 'Golden Bean' or 'Miracle Crop', is unique among grain legumes as it serves as both a premier oilseed (20% oil content) and a high-protein source (40-42% lysine-rich protein). Originating in Eastern Asia (China), soybean cultivation expanded dramatically in Central India (Madhya Pradesh, Maharashtra, Rajasthan), designating Madhya Pradesh as the 'Soya State'.\n\n### Botanical and Agronomic Characteristics\n- **Growth Habit:** Determinate (stem terminates in a flower cluster; vegetative growth stops before flowering) vs Indeterminate (vegetative growth continues during flowering and pod development).\n- **Soil & Climate:** Well-drained fertile loam to deep black clay soils (Vertisols) with pH 6.5–7.5. Sensitive to waterlogging; raised bed or ridge-and-furrow planting is highly recommended.\n- **Seed Rate & Spacing:** Sowing rate of 65–75 kg/ha for small-medium seeded cultivars; spacing of 45 cm × 5–10 cm at a planting depth of 3–4 cm.\n- **Leading Cultivars:** JS 335, JS 93-05 (early maturing, 90–95 days), JS 95-60, NRC 37 (Ahilya 2), NRC 127, and DSb 21.\n\n### Inoculation and Nodulation Dynamics\nSoybean establishes a symbiotic relationship with *Bradyrhizobium japonicum*, an exclusive slow-growing rhizobial species not natively abundant in Indian soils outside traditional soybean tracts. Inoculation using lignite- or liquid-based *Bradyrhizobium japonicum* formulations at 500 g/ha or 10 ml/kg seed with 10% jaggery sticker solution is mandatory. Effective nodulation is marked by the internal pinkish-red coloration caused by leghemoglobin, which maintains an oxygen-free microenvironment for nitrogenase enzyme function.",
                "subsections": [
                    {
                        "subheading": "Seed Viability and Mechanical Damage",
                        "content": "Soybean seed coats are exceedingly delicate. Harvesting at seed moisture below 13% or cylinder thrashing at speeds above 300-400 rpm induces micro-cracks in the seed testa, destroying embryo viability. High germination vigor requires gentle post-harvest handling."
                    }
                ]
            },
            {
                "id": "sec-agp218-3-2",
                "heading": "2. Groundnut (Arachis hypogaea L.): Botany, Pegging, and Gypsum",
                "content": "Groundnut (peanut/monkey nut), native to South America (Brazil-Peru region), contains 45-50% high-quality edible oil and 25-28% digestible protein. It is predominantly cultivated in Gujarat, Andhra Pradesh, Tamil Nadu, and Rajasthan.\n\n### Botanical Classification\n- **Subspecies *fastigiata* (Bunch / Spanish-Valencia type):** Upright erect growth habit, non-spreading, clusters of pods around tap root, non-dormant seeds (dormancy absent; seeds germinate if rain occurs near maturity), early maturing (90–110 days); e.g., TMV 2, JL 24, TAG 24, Kadiri 9.\n- **Subspecies *hypogaea* (Spreading / Virginia type):** Prostrate or trailing growth habit, pods scattered along trailing lateral branches, marked seed dormancy (requires 30-45 days rest), long duration (120–140 days); e.g., TMV 1, M 13, Somnath, Girnar 2.\n\n### The Physiology of Pegging (Gynophore Elongation)\nFollowing self-pollination and fertilization, the base of the ovary elongates into a geotropic, needle-like stalk called the **peg** (gynophore). The peg curves downward and enters the soil (typically 3-5 cm deep). Soil darkness and mechanical resistance trigger horizontal orientation and subterranean pod enlargement.\n\n### Calcium Nutrition and Gypsum Application\nGroundnut pods absorb calcium directly from the surrounding soil solution through the shell wall, not via the root system or vascular xylem stream. Calcium deficiency prevents pod filling, resulting in blind or empty pods known as **'pops'**. Application of gypsum ($CaSO_4 \\cdot 2H_2O$) at 400-500 kg/ha at the flowering-to-pegging stage (35-45 DAS) provides soluble calcium ($Ca^{2+}$) in the pod zone and sulfur ($S$) for oil and amino acid synthesis.",
                "subsections": [
                    {
                        "subheading": "Aflatoxin Contamination",
                        "content": "Infection by *Aspergillus flavus* and *Aspergillus parasiticus* produces carcinogenic aflatoxins ($B_1, B_2, G_1, G_2$). Pod injury during weeding, end-of-season drought stress, and storage of pods at moisture levels exceeding 8-9% dramatically elevate aflatoxin levels."
                    }
                ]
            },
            {
                "id": "sec-agp218-3-3",
                "heading": "3. Pigeonpea (Cajanus cajan (L.) Millsp.): Physiology and Cropping",
                "content": "Pigeonpea (Redgram / Arhar / Tur) is the second most crucial pulse crop in India after chickpea. Endemic to India, it is characterized by deep taproots (extending >2 meters), making it exceptionally drought-tolerant and a vital component of dryland cropping systems.\n\n### Plant Architecture and Maturity Groups\n- **Extra-Early & Early Maturing:** 100–120 days (e.g., UPAS 120, Pusa 992, ICPL 87); fits well into Pigeonpea-Wheat crop rotation in northern irrigated belts.\n- **Medium Maturing:** 150–180 days (e.g., Asha / ICPL 87119, BDN 711, Maruti / ICP 8863); standard rainfed crops in central and peninsular India.\n- **Late Maturing:** 200–270 days (e.g., Bahar, NDA 1); traditional flood-prone or frost-free belts of Eastern UP and Bihar.\n\n### Hybrid Pigeonpea Technology\nICRISAT (Hyderabad) achieved a global breakthrough by releasing **ICPH 8** in 1991, the world's first commercial pulse hybrid based on genetic male sterility (GMS). Subsequent advancements developed Cytoplasmic-Genetic Male Sterility (CMS) using wild relatives (*Cajanus cajanifolius* - A4 cytoplasm), yielding superior hybrids like **ICPH 2671** and **ICPH 2740** that confer a 30-40% yield advantage over conventional inbreds.\n\n### Major Biotic Stresses\n- **Fusarium Wilt (*Fusarium udum*):** Soil-borne fungal disease causing xylem vascular browning, leaf withering, and complete plant death. Managed via resistant cultivars (Asha, Maruti), crop rotation with sorghum, and seed treatment with *Trichoderma viride*.\n- **Sterility Mosaic Disease (SMD):** Known as the 'green plague' because infected plants develop bushy, pale green leaves and complete cessation of flowering. Vectored by the eriophyid mite *Aceria cajani*. Resistant cultivars include ICPL 87119 (Asha) and BSMR 736.",
                "subsections": [
                    {
                        "subheading": "Nipping (Apical Bud Decapitation)",
                        "content": "Detopping the apical shoot at 45-50 days after sowing eliminates apical dominance, stimulating profuse secondary and tertiary branching, which substantially expands total pod-bearing nodes."
                    }
                ]
            },
            {
                "id": "sec-agp218-3-4",
                "heading": "4. Green Gram and Black Gram: Agronomy and Management",
                "content": "Green gram (*Vigna radiata* / Moong) and Black gram (*Vigna mungo* / Urd) are ancient Asiatic legumes indigenous to India. Both crops possess a short growth duration (60-75 days), making them ideal for catch cropping, green manuring, intercropping, and sequential systems.\n\n### Distinguishing Agronomic Features\n- **Green gram (*Vigna radiata*):** Leaves trifoliate with ovate leaflets; yellow flowers; cylindrical, narrow pods containing small green cylindrical seeds; cultivated during Kharif, Rabi (coastal belts), and summer under irrigation. Varieties: Pusa Vishal, Samrat, IPM 02-3, SML 668.\n- **Black gram (*Vigna mungo*):** Denser, coarser pubescence on vegetative parts; pods are shorter, erect or sub-erect, heavily hairy, containing oblong black seeds with a distinct raised white protruding hilum. Varieties: T 9, Pant U 31, Uttara, IPU 02-43.\n\n### Key Diseases and Physiological Interventions\n- **Mungbean Yellow Mosaic Virus (MYMV):** Geminivirus causing brilliant golden yellow mosaic patches on leaves, severe stunting, and pod reduction. Vectored by the whitefly (*Bemisia tabaci*). Management involves using resistant cultivars (IPM 02-3, Pant U 31) and seed treatment with imidacloprid (5 g/kg seed) or foliar spray of thiamethoxam.\n- **Foliar Nutrition (2% DAP Spray):** Pulses experience monocarpic senescence where nitrogen fixation ceases abruptly during pod fill. Foliar spraying of 2% Diammonium Phosphate (DAP) or 1% urea at early flowering and 15 days later prolongs functional canopy photosynthesis and arrests flower shed.",
                "subsections": [
                    {
                        "subheading": "Phosphorus Solubilization in Vigna Species",
                        "content": "Rhizosphere exudation of low molecular weight organic acids (citric, malic) by Vigna roots solubilizes fixed soil phosphorus, improving nutrient uptake even in low-P soils."
                    }
                ]
            },
            {
                "id": "sec-agp218-3-5",
                "heading": "5. Biological Nitrogen Fixation, Phosphorus, and Biofertilizers",
                "content": "Kharif grain legumes fix atmospheric nitrogen ($N_2$) through mutualistic endosymbiosis with diazotrophic bacteria (*Rhizobium* and *Bradyrhizobium* species), supplying 50-80% of their total nitrogen requirement while leaving behind 20-40 kg residual N/ha for subsequent cereal crops.\n\n### The Biochemistry of Nodulation and N2 Fixation\n- **Infection & Nodule Formation:** Plant roots secrete flavonoids (luteolin, daidzein) that induce bacterial *nod* genes, triggering Nod factor secretion. This causes root hair curling, infection thread formation, and cortical cell division into root nodules.\n- **Nitrogenase Complex:** The enzyme comprises dinitrogenase (Mo-Fe protein) and dinitrogenase reductase (Fe protein). It reduces $N_2$ to $NH_3$: $$N_2 + 8H^+ + 8e^- + 16\\text{ATP} \\xrightarrow{\\text{Nitrogenase}} 2NH_3 + H_2 + 16\\text{ADP} + 16P_i$$.\n- **Leghemoglobin:** High oxygen levels irreversibly deactivate nitrogenase. Leghemoglobin functions as an oxygen buffer, binding free $O_2$ and delivering it precisely at low tension to bacterial respiratory chains.\n\n### Phosphorus and Micronutrient Synergy\n- **Phosphorus ($P_2O_5$):** Legumes require high phosphorus (40-60 kg/ha) because ATP is consumed in massive amounts during nitrogen reduction (16 ATP per $N_2$ fixed). Phosphate Solubilizing Bacteria (*Bacillus megaterium*, *Pseudomonas striata*) solubilize insoluble rock phosphate and calcium phosphates.\n- **Molybdenum (Mo) and Cobalt (Co):** Mo is a core structural cofactor in the Mo-Fe protein of nitrogenase. Co is essential for cobalamin (Vitamin $B_{12}$) synthesis required by rhizobial bacteroids.",
                "subsections": [
                    {
                        "subheading": "Rhizobial Cross-Inoculation Groups",
                        "content": "Rhizobia are host-specific: *Bradyrhizobium japonicum* nodulates Soybean; *Rhizobium leguminosarum* bv. *viciae* nodulates Pea/Lentil; *Rhizobium* sp. (cowpea group) nodulates Pigeonpea, Groundnut, Green gram, and Cowpea."
                    }
                ]
            }
        ],
        "keyTakeaways": [
            "Soybean requires specific inoculation with Bradyrhizobium japonicum and gentle threshing to prevent microscopic embryo damage.",
            "Groundnut pegging is geotropic; calcium cannot be translocated basipetally from shoots to subterranean pegs, requiring gypsum application in the pod zone.",
            "Subspecies fastigiata (bunch groundnut) lacks seed dormancy and is prone to in-situ sprouting, whereas subsp. hypogaea (spreading) exhibits strict dormancy.",
            "Pigeonpea hybrid ICPH 8 was the world's first pulse hybrid; modern CMS hybrids utilize the A4 cytoplasm derived from wild Cajanus cajanifolius.",
            "MYMV is transmitted persistently by the whitefly Bemisia tabaci; resistant varieties and timely vector control are vital.",
            "Nitrogenase requires 16 ATP per N2 fixed and is protected from oxygen toxicity by leghemoglobin; molybdenum acts as an indispensable catalytic cofactor."
        ],
        "commonMisunderstandings": [
            {
                "myth": "Pulses do not require any nitrogenous fertilizer application because they fix all their own nitrogen.",
                "reality": "Pulses require a 'starter dose' of nitrogen (15-25 kg N/ha) during early vegetative growth before functional root nodules develop at 15-20 DAS."
            },
            {
                "myth": "Foliar application of calcium will correct groundnut pod popping just as effectively as soil application of gypsum.",
                "reality": "Calcium is phloem-immobile; it cannot translocate from foliage down into subterranean pods. Calcium must be present in the pod-zone soil solution for direct absorption by the developing pod."
            },
            {
                "myth": "Any commercial Rhizobium biofertilizer packet can be used interchangeably for soybean, groundnut, and chickpea.",
                "reality": "Rhizobial strains are strictly cross-inoculation group specific. Soybean requires Bradyrhizobium japonicum and will not form nodules if treated with chickpea or pea inoculants."
            },
            {
                "myth": "Harvesting soybean at very low moisture (<10%) preserves seed viability better during storage.",
                "reality": "Soybean seeds harvested below 12-13% moisture become brittle, causing severe internal embryo cracking and loss of seed viability during mechanical threshing."
            }
        ],
        "summary": "Unit 3 delivers an advanced agronomic synthesis of major kharif pulses (pigeonpea, green gram, black gram) and oilseeds (soybean, groundnut). It details the botanical adaptations of soybean, its dual oil-protein utility, and the vital requirement of Bradyrhizobium japonicum inoculation. In groundnut, subterranean gynophore pegging dictates direct calcium absorption from soil, establishing the agronomic necessity of gypsum application at pegging to prevent empty pods (pops). The genetics and management of pigeonpea are deconstructed from deep-root drought tolerance to CMS-based hybrid breeding and devastating biotic constraints (Fusarium wilt and SMD). Short-duration Vigna crops (green and black gram) are evaluated for catch cropping, whitefly-borne MYMV management, and foliar DAP intervention. Finally, the biochemical mechanics of biological nitrogen fixation, nitrogenase sensitivity, leghemoglobin buffering, and phosphorus-molybdenum synergy are comprehensively established."
    }
}
print("Base u3_data defined.")
