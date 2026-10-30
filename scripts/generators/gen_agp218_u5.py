import json

u5_data = {
    "unitNumber": 5,
    "title": "Weed Management and Cropping Systems",
    "shortDescription": "Comprehensive analysis of weed biology, critical competition periods, herbicide classification and modes of action, integrated weed management, intercropping competition indices (LER, RCC, ATER), and conservation agriculture in Kharif cropping systems.",
    "estimatedReadTimeMinutes": 165,
    "syllabusTopics": [
        "Weed biology, classification, crop-weed competition, and Critical Period of Weed Competition (CPWC)",
        "Herbicide classification (chemical families, modes of action, selectivity, and application timing)",
        "Integrated Weed Management (IWM), herbicide resistance mechanisms, and mitigation strategies",
        "Intercropping systems: principles, canopy architecture, and competition indices (LER, ATER, RCC, CR, Aggressivity)",
        "Crop rotation, sequential cropping systems, and conservation agriculture (zero tillage and residue management)"
    ],
    "notes": {
        "learningObjectives": [
            "Deconstruct weed biology, propagation mechanisms, and determine the Critical Period of Weed Competition (CPWC) across major Kharif field crops.",
            "Classify herbicides according to chemical family, mode of action (ALS, ACCase, PS-II, EPSPS, synthetic auxins), and application window (PPI, PRE, POST).",
            "Formulate Integrated Weed Management (IWM) programs and design strategies to mitigate and manage herbicide resistance in agronomically problematic weed biotypes.",
            "Calculate and interpret intercropping competition indices: Land Equivalent Ratio (LER), Area Time Equivalent Ratio (ATER), Relative Crowding Coefficient (RCC/K), Competitive Ratio (CR), and Aggressivity.",
            "Evaluate crop rotation principles, Kharif sequential cropping systems, and the tripartite pillars of Conservation Agriculture (minimum soil disturbance, permanent soil cover, crop diversification)."
        ],
        "sections": [
            {
                "id": "sec-agp218-5-1",
                "heading": "1. Weed Biology, Classification, and Crop-Weed Competition",
                "content": "A weed is defined agronomically as any plant growing where it is not desired, possessing traits that enable it to colonize disturbed agro-ecosystems and compete aggressively with cultivated crops for light, nutrients, moisture, and physical space.\n\n### Botanical and Ecological Classification of Weeds\n- **By Morphology & Cotyledon Number:**\n  - *Grasses (Monocots - Poaceae):* Hollow cylindrical stems with nodes and internodes, parallel-veined narrow leaves with open sheaths, fibrous roots (e.g., *Echinochloa colona*, *Eleusine indica*, *Cynodon dactylon*).\n  - *Sedges (Monocots - Cyperaceae):* Solid triangular stems without nodes, 3-ranked leaves with closed sheaths, modified rhizomes/tubers (e.g., *Cyperus rotundus*, *Cyperus iria*).\n  - *Broad-leaved Weeds (Dicots):* Expanded reticulate-veined leaves, net venation, taproot system (e.g., *Parthenium hysterophorus*, *Amaranthus viridis*, *Trianthema portulacastrum*, *Commelina benghalensis*).\n- **By Life Span:** Annuals (complete lifecycle within one season; *Echinochloa crus-galli*), Biennials (*Daucus carota* wild), and Perennials (propagate through vegetative tubers/stolons and seeds; *Cyperus rotundus*, *Sorghum halepense*).\n- **By Parasitism:** Semi-root parasite (*Striga asiatica* in sorghum/maize), Complete root parasite (*Orobanche* spp.), Semi-stem parasite (*Loranthus*), and Complete stem parasite (*Cuscuta* spp.).\n\n### Critical Period of Weed Competition (CPWC)\nThe CPWC is the critical window in the crop growth cycle during which weeds must be controlled to prevent unrecoverable economic yield losses exceeding an acceptable threshold (typically 5%). Weeds emerging prior to or after this window cause negligible yield loss.\n- **Direct Seeded Rice (DSR):** 15–45 DAS (yield loss up to 80–100% if unweeded).\n- **Transplanted Puddled Rice:** 20–40 DAT.\n- **Maize:** 15–35 DAS.\n- **Soybean / Groundnut:** 15–30 DAS.\n- **Cotton:** 15–60 DAS.",
                "subsections": [
                    {
                        "subheading": "Allelochemical Interference",
                        "content": "Weeds such as *Parthenium hysterophorus* (parthenin) and *Cyperus rotundus* exude toxic allelochemicals into the rhizosphere, directly suppressing crop seed germination, radicle elongation, and mycorrhizal infection."
                    }
                ]
            },
            {
                "id": "sec-agp218-5-2",
                "heading": "2. Herbicide Classification, Modes of Action, and Application",
                "content": "Herbicides are chemical compounds that kill or severely inhibit plant growth through targeted interference with specific biochemical and metabolic enzymes.\n\n### Classification by Time of Application\n- **Pre-Plant Incorporation (PPI):** Applied and mechanically incorporated into soil prior to sowing to prevent volatility or photodecomposition (e.g., Fluchloralin @ 1.0 kg a.i./ha, Trifluralin).\n- **Pre-Emergence (PRE):** Applied onto the soil surface after crop sowing but before crop and weed seedling emergence (within 0–3 DAS) (e.g., Pendimethalin 30% EC, Atrazine 50% WP, Pretilachlor 50% EC with safener).\n- **Post-Emergence (POST):** Applied directly onto foliage after crop and weeds have emerged (typically 15–25 DAS) (e.g., Imazethapyr 10% SL, Bispyribac-sodium 10% SC, 2,4-D amine salt).\n\n### Major Herbicide Biochemical Modes of Action\n1. **ALS (Acetolactate Synthase) Inhibitors (Group 2):** Inhibit synthesis of branched-chain amino acids (valine, leucine, isoleucine); e.g., Sulfonylureas (Pyrazosulfuron-ethyl, Halosulfuron) and Imidazolinones (Imazethapyr).\n2. **ACCase (Acetyl-CoA Carboxylase) Inhibitors (Group 1):** Inhibit fatty acid biosynthesis in grasses exclusively; e.g., Fenoxaprop-p-ethyl, Cyhalofop-butyl.\n3. **Photosystem-II (PS-II) Inhibitors (Group 5 & 6):** Block electron transport at the plastoquinone-B binding site of the D1 protein in photosystem II; e.g., Triazines (Atrazine in maize/sugarcane).\n4. **Microtubule Assembly Inhibitors (Group 3):** Bind tubulin, arresting spindle fiber formation and mitotic cell division in emerging radicles; e.g., Dinitroanilines (Pendimethalin, Trifluralin).\n5. **Synthetic Auxins (Group 4):** Mimic indole-3-acetic acid (IAA), disrupting phloem transport and cell wall plasticity in dicots; e.g., 2,4-D, MCPA.",
                "subsections": [
                    {
                        "subheading": "Herbicide Safeners",
                        "content": "Chemical compounds (e.g., fenclorim with pretilachlor in wet DSR; cyometrinil) that selectively up-regulate glutathione S-transferase (GST) in the crop, accelerating herbicide detoxifying metabolism without protecting weeds."
                    }
                ]
            },
            {
                "id": "sec-agp218-5-3",
                "heading": "3. Integrated Weed Management (IWM) and Resistance Dynamics",
                "content": "Integrated Weed Management (IWM) is a multifaceted agro-ecological approach that combines preventive, cultural, mechanical, biological, and chemical tactics to suppress weed populations below economic injury levels without degrading the environment.\n\n### Pillars of IWM\n- **Preventive Tactics:** Certified weed-free seed lots, quarantine regulations, cleaning agricultural equipment, and keeping irrigation channels free of weed seed heads.\n- **Cultural Tactics:** Optimum planting density, stale seedbed technique (stimulating weed flushes with pre-sowing irrigation followed by shallow tillage or non-selective knockdown herbicide), crop rotation, competitive crop varieties, and intercropping for rapid canopy closure.\n- **Mechanical Tactics:** Cono-weeders in SRI paddy, tractor-drawn intercultural cultivators, wheel hoes, and hand weeding.\n- **Biological Tactics:** Host-specific bio-control agents; e.g., *Zygogramma bicolorata* (Mexican beetle) feeding on *Parthenium*, *Neochetina eichhorniae* weevils against water hyacinth, and mycoherbicides (e.g., *Colletotrichum gloeosporioides* - Collego).\n\n### Herbicide Resistance Evolution\nContinuous reliance on a single herbicide mode of action imposes intense selection pressure, rapidly selecting for rare naturally occurring resistant biotypes within a weed population.\n- **Target-Site Resistance (TSR):** Point mutations in the catalytic binding site of the target enzyme (e.g., Ser653Asn mutation in ALS; Ile1781Leu mutation in ACCase) that prevent herbicide binding.\n- **Non-Target Site Resistance (NTSR):** Enhanced metabolic degradation via up-regulated Cytochrome P450 monooxygenases, glutathione S-transferases, or vacuolar sequestration.\n- **Resistance Management Strategies:** Mandatory rotation of herbicide modes of action (tank mixtures of different mechanisms), integrating mechanical weeding, stale seedbeds, and avoiding sub-lethal herbicide rates.",
                "subsections": [
                    {
                        "subheading": "Classic Herbicide Resistance in India",
                        "content": "The evolution of Isoproturon resistance in *Phalaris minor* (canary grass) in the rice-wheat belt of Haryana/Punjab remains the global benchmark of target-site and metabolic resistance."
                    }
                ]
            },
            {
                "id": "sec-agp218-5-4",
                "heading": "4. Intercropping Systems and Competition Evaluation Indices",
                "content": "Intercropping involves cultivating two or more crop species simultaneously on the same piece of land in distinct spatial configurations (e.g., row intercropping, strip intercropping, relay intercropping).\n\n### Agronomic Principles and Canopy Architecture\n- **Spatial Complementarity:** Combining crops with contrasting canopy architecture (e.g., tall erect C4 cereal like Maize/Sorghum with spreading C3 legume like Cowpea/Soybean) to maximize Photosynthetically Active Radiation (PAR) interception across multiple vertical strata.\n- **Temporal Complementarity:** Combining crops with diverging maturity cycles (e.g., early-maturing Soybean [90 days] + late-maturing Pigeonpea [180 days]) so that peak nutrient and water demands occur at different times.\n\n### Mathematical Evaluation Indices of Intercropping\n1. **Land Equivalent Ratio (LER):** Relative land area under sole crops required to produce the same yields achieved in intercropping:\n   $$\\text{LER} = L_A + L_B = \\frac{Y_{AB}}{Y_{AA}} + \\frac{Y_{BA}}{Y_{BB}}$$\n   Where $Y_{AB}$ and $Y_{BA}$ are intercrop yields of crops A and B, and $Y_{AA}$ and $Y_{BB}$ are sole crop yields. An $\\text{LER} > 1.0$ indicates yield advantage / land-use efficiency.\n2. **Area Time Equivalent Ratio (ATER):** Incorporates the duration ($t$) each crop occupies the field:\n   $$\\text{ATER} = \\frac{(L_A \\times t_A) + (L_B \\times t_B)}{T}$$\n   Where $t_A, t_B$ are days to maturity, and $T$ is the total duration of the intercropping system.\n3. **Relative Crowding Coefficient (RCC or $K$):** Quantifies competitive dominance and whether one species produced more or less yield than expected. Calculated as $K = K_A \\times K_B$. If $K > 1$, there is a net yield advantage.\n4. **Competitive Ratio (CR):** Represents the ratio of individual LERs adjusted for proportional sowing areas ($Z_A, Z_B$):\n   $$\\text{CR}_A = \\left( \\frac{L_A}{L_B} \\right) \\times \\left( \\frac{Z_B}{Z_A} \\right)$$\n5. **Aggressivity ($A_{AB}$):** Measures how much the relative yield increase in species A exceeds that of species B:\n   $$A_{AB} = \\frac{Y_{AB}}{Y_{AA} \\times Z_{AB}} - \\frac{Y_{BA}}{Y_{BB} \\times Z_{BA}}$$",
                "subsections": [
                    {
                        "subheading": "Additive vs Replacement Series",
                        "content": "In an Additive series, the intercrop is introduced into 100% sole population of the base crop without reducing base crop density. In a Replacement series, total plant density is held constant while proportions of both crops vary."
                    }
                ]
            },
            {
                "id": "sec-agp218-5-5",
                "heading": "5. Crop Rotation, Sequential Systems, and Conservation Agriculture",
                "content": "A sustainable cropping system balances resource extraction with restorative ecological cycles.\n\n### Crop Rotation Principles\nCrop rotation is the scheduled alternation of different crop species on the same field over successive seasons. Fundamental agronomic rules: (1) Alternate deep-rooted crops (Pigeonpea/Cotton) with shallow-rooted crops (Rice/Cereals); (2) Alternate fertility-exhaustive crops (Maize/Sugarcane) with fertility-restorative legumes (Green gram/Cowpea); (3) Rotate crops from different botanical families to break pest and disease cycles; (4) Alternate taproot crops with fibrous-rooted crops to preserve soil physical structure.\n\n### Major Kharif Sequential Systems\n- **Rice–Wheat System:** Backbone of Indo-Gangetic food security; faces declining groundwater tables and residue burning issues.\n- **Rice–Chickpea / Rice–Lentil (Paira/Utera Cropping):** Relay sowing pulse seeds directly into standing rice fields 10–15 days before harvest to utilize residual soil moisture.\n- **Maize–Mustard / Maize–Potato–Wheat:** High-intensity commercial cereal-vegetable rotations in northwestern irrigated plains.\n\n### The Tripartite Pillars of Conservation Agriculture (CA)\nConservation Agriculture is an agro-ecosystem management approach recognized by FAO that aims to achieve sustainable productivity while preserving environmental resources:\n1. **Continuous Minimum Mechanical Soil Disturbance (Zero / Reduced Tillage):** Direct seeding using Turbo Happy Seeder or Zero-Till Seed Drill into untilled soil, preserving soil aggregation, earthworm burrows, and fungal mycelial networks.\n2. **Permanent Organic Soil Cover (Residue Retention):** Maintaining at least 30% (ideally >60–80%) of soil surface covered with crop residues (3–5 t/ha). Mulch prevents soil erosion, cushions raindrop impact, suppresses weeds, and lowers soil temperatures during summer.\n3. **Diversification of Crop Species (Crop Rotation & Intercropping):** Integrating legumes, cover crops, and varied root architectures to break pest and weed life cycles and enhance rhizosphere biodiversity.",
                "subsections": [
                    {
                        "subheading": "Turbo Happy Seeder Technology",
                        "content": "Combines a rotor that cuts standing rice straw and flails it over the sown seed furrow while simultaneously precision-drilling wheat seed and fertilizer into untilled soil, resolving the stubble-burning crisis."
                    }
                ]
            }
        ],
        "keyTakeaways": [
            "Weeds are classified into grasses (Poaceae), sedges (Cyperaceae), and broadleaf weeds (dicots) based on morphology and biology.",
            "The Critical Period of Weed Competition (CPWC) represents the narrow physiological window (typically 15-45 DAS) where weed interference causes severe irreversible crop yield loss.",
            "Herbicides are classified into PPI (Fluchloralin), PRE (Pendimethalin, Atrazine), and POST (Imazethapyr, Bispyribac) based on application timing, and act via specific enzyme targets (ALS, ACCase, PS-II, EPSPS).",
            "Target-site (TSR) and non-target site resistance (NTSR) develop under continuous single-herbicide selection pressure and are countered via IWM, stale seedbeds, and mode-of-action rotations.",
            "Intercropping yield advantage is demonstrated when Land Equivalent Ratio (LER) exceeds 1.0; ATER adjusts LER for crop growth duration.",
            "Conservation Agriculture is founded on three inseparable pillars: zero/minimum soil tillage, permanent organic residue retention (>30%), and crop diversification/rotation."
        ],
        "commonMisunderstandings": [
            {
                "myth": "A field must be kept 100% weed-free throughout the entire lifespan of the crop to achieve maximum yield.",
                "reality": "Weed presence before or after the Critical Period of Weed Competition (CPWC) causes negligible economic yield loss. Keeping fields weed-free during the CPWC (e.g., 15-35 DAS) delivers maximum yields while saving labor and chemical costs."
            },
            {
                "myth": "An intercropping system with an LER of 1.25 automatically proves that the system is more productive in all respects.",
                "reality": "LER does not account for time. If a long-duration intercrop (180 days) is combined with a short crop (60 days), LER may overestimate efficiency. The Area Time Equivalent Ratio (ATER) must be calculated to normalize yields over actual field occupancy time."
            },
            {
                "myth": "Conservation agriculture simply means stopping plowing (zero tillage).",
                "reality": "Zero tillage alone without permanent surface residue retention and crop rotation leads to severe soil compaction, weed dominance, and yield penalties. Conservation Agriculture requires all three pillars simultaneously."
            },
            {
                "myth": "Herbicide safeners protect both crop plants and weed seedlings equally from herbicide injury.",
                "reality": "Safeners specifically up-regulate glutathione S-transferase (GST) and cytochrome P450 enzymes within the crop's genome, accelerating herbicide detoxification while leaving weeds fully susceptible."
            }
        ],
        "summary": "Unit 5 synthesizes the agro-ecological and chemical disciplines of weed science and cropping systems. It establishes the biological classification of weeds (grasses, sedges, broadleaves) and examines crop-weed interference alongside the Critical Period of Weed Competition (CPWC). The chemical landscape of herbicides is deconstructed into application windows (PPI, PRE, POST) and primary modes of action (ALS, ACCase, PS-II, microtubule assembly, synthetic auxins) alongside the biochemistry of safeners. Integrated Weed Management (IWM) models and herbicide resistance mechanics (TSR vs NTSR) provide the framework for resistance mitigation. Intercropping agronomy is analyzed through spatial and temporal canopy architecture, evaluated via mathematical indices including LER, ATER, RCC (K), Competitive Ratio, and Aggressivity. Finally, the ecological rules of crop rotation and sequential cropping lead into Conservation Agriculture, defined by minimum soil disturbance, surface residue retention, and systematic crop diversification."
    }
}

print("Base u5_data defined.")
