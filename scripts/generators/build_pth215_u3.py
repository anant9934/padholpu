import json

def generate_u3():
    notes = {
        "learningObjectives": [
            "Deconstruct the mycoparasitic cascade of Trichoderma spp., detailing chemical sensing, lectin recognition, coiling, appressorium formation, and enzymatic wall lysis.",
            "Analyze the broad-spectrum antifungal metabolites (peptaibols, 6-PAP, gliotoxin, gliovirin) and Induced Systemic Resistance (ISR) activated by Trichoderma.",
            "Characterize specialized fungal antagonists: Pochonia chlamydosporia against plant parasitic nematodes and Ampelomyces quisqualis against powdery mildew.",
            "Evaluate mass production technologies for filamentous fungi, contrasting solid-state fermentation on agro-wastes with biphasic liquid-to-solid production.",
            "Formulate operational field delivery protocols (seed biopriming, FYM enrichment, soil drenching) and assess compatibility with chemical fungicides."
        ],
        "sections": [
            {
                "id": "sec-3-1",
                "heading": "1. Trichoderma Biology and the Mycoparasitic Cascade",
                "content": "Trichoderma species (chiefly *Trichoderma harzianum*, *Trichoderma viride*, *Trichoderma koningii*, and *Trichoderma virens*) are ubiquitous, free-living, soil-dwelling ascomycete fungi belonging to the family Hypocreaceae (order Hypocreales). Teleomorphs, where known, belong to the genus *Hypocrea*. *Trichoderma* colonies grow rapidly on potato dextrose agar (PDA), exhibiting vibrant emerald green to dark green conidial pustules and producing branched conidiophores bearing flask-shaped phialides and globose to subglobose single-celled conidia.\n\n**The Mycoparasitic Cascade (Direct Hyperparasitism):**\nDirect mycoparasitism is an evolutionary, sequential multi-step physiological attack wherein *Trichoderma* parasitizes and consumes living target phytopathogenic fungi (*Rhizoctonia solani*, *Sclerotium rolfsii*, *Fusarium oxysporum*, *Pythium ultimum*):\n1. **Chemotropic Sensing & Chemotaxis:** Hyphal tips of *Trichoderma* detect chemical cues—including low levels of monomeric sugars, oligomers, and degradation peptides—diffusing from the target pathogen host. Advancing *Trichoderma* hyphae reorient their growth direction towards the host hyphae.\n2. **Molecular Recognition & Attachment:** Specific surface-bound carbohydrate-binding proteins (**lectins**) on the host fungal cell wall interact with complementary receptor residues on the *Trichoderma* hyphal envelope. This molecular docking secures firm adhesion.\n3. **Coiling and Morphological Differentiation:** Upon physical contact, *Trichoderma* hyphae wrap tightly around the host hypha in characteristic spiral helical coils. At points of sustained contact, hyphal tips differentiate into swollen, specialized infection structures termed **appressoria** or hook-like clavate holdfasts.\n4. **Secretion of Cell Wall Degrading Enzymes (CWDEs):** Within the appressorial interface, *Trichoderma* discharges a synchronized battery of hydrolytic enzymes that digest structural polymers of the pathogen cell wall:\n   - **Endo-chitinases & Exo-chitinases (N-acetyl-beta-D-glucosaminidases):** Cleave the beta-1,4-glycosidic linkages of chitin microfibrils.\n   - **Beta-1,3-glucanases & Beta-1,6-glucanases:** Digest structural glucan matrices.\n   - **Subtilisin-like Alkaline Proteases (e.g., Prb1):** Hydrolyze cell-wall-associated structural glycoproteins, exposing underlying chitin chains to enzymatic cleavage.\n   - **Cellulases:** Highly effective against oomycete pathogens (*Pythium*, *Phytophthora*) whose cell walls consist primarily of beta-glucans and cellulose rather than chitin.\n5. **Penetration, Hyphal Lysis, and Necrotrophic Digestion:** The combined action of enzymatic digestion and turgor mechanical pressure creates localized perforation holes in the host hyphal wall. *Trichoderma* hyphae penetrate the pathogen lumen, absorb protoplasmic nutrients, and cause total plasmolysis, vacuolization, and structural collapse of the phytopathogen.",
                "subsections": [
                    {
                        "subheading": "Key Hydrolytic Enzymes in Trichoderma Mycoparasitism",
                        "content": "Synergistic enzymatic battery breaking down fungal wall polymers:",
                        "table": {
                            "headers": ["Enzyme Class", "Specific Enzyme", "Substrate Cleaved", "Target Pathogen Wall Structure"],
                            "rows": [
                                ["Endochitinase", "Ech42 (42 kDa)", "Internal beta-1,4-bonds in chitin", "Filamentous fungi (Rhizoctonia, Sclerotium)"],
                                ["Exochitinase", "Nag1 (N-acetylglucosaminidase)", "Terminal N-acetylglucosamine", "Releases monomeric GlcNAc for fungal nutrition"],
                                ["Beta-1,3-Glucanase", "Bgn13.1", "Beta-1,3-D-glucan backbone", "Structural matrix of fungal and oomycete walls"],
                                ["Beta-1,6-Glucanase", "Bgn16.2", "Beta-1,6-glucan branching links", "Pore formation in target hyphal boundaries"],
                                ["Alkaline Protease", "Prb1", "Wall structural glycoproteins", "Exposes underlying chitin fibrils to chitinases"],
                                ["Cellulase (Cel7b)", "Endo-beta-1,4-glucanase", "Cellulose / glucan polymers", "Oomycetes (Pythium, Phytophthora sp.)"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-3-2",
                "heading": "2. Antibiosis, Rhizosphere Competition, and ISR",
                "content": "In addition to physical mycoparasitism, *Trichoderma* suppresses plant diseases through complementary physiological and biochemical modalities:\n\n**1. Antibiosis (Secondary Metabolites):**\n*Trichoderma* isolates produce a vast repertoire of volatile and non-volatile secondary metabolites with high antimicrobial potency:\n- **Peptaibols (Trichorzianins, Alamethicins):** Linear non-ribosomal polypeptide antibiotics (10-20 amino acids long) characterized by a high content of alpha-aminoisobutyric acid (Aib), an N-terminal acetyl group, and a C-terminal amino alcohol. Peptaibols form oligomeric transmembrane ion-conducting channels in pathogen membranes, inducing potassium leakage, membrane depolarization, and lethal cellular lysis. Peptaibols act synergistically with endochitinases to disrupt fungal growth.\n- **6-Pentyl-alpha-pyrone (6-PAP):** A low-molecular-weight volatile lactone with a distinctive sweet coconut-like aroma. 6-PAP halts mycelial proliferation, suppresses spore germination of *Botrytis cinerea* and *Fusarium*, and deters soil insect larvae.\n- **Gliovirin & Gliotoxin:** Diketopiperazine and epipolythiodioxopiperazine compounds produced extensively by *T. virens*. Gliovirin is exceptionally active against *Pythium ultimum* (inhibiting oospore germination), while gliotoxin exhibits potent action against *Rhizoctonia solani*.\n- **Trichodermin & Harzianopyridone:** Sesquiterpenes and heterocyclic antibiotics inhibiting eukaryotic ribosomal protein translation and mitochondrial respiration.\n\n**2. Rhizosphere Competition for Niches and Nutrients:**\n*Trichoderma* hyphae colonize the root mucilage and epidermal cell layers, proliferating at double the rate of soil-borne pathogens. They aggressively utilize rhizosphere root exudates (glucose, sucrose, amino acids) and secrete catecholate and hydroxamate siderophores (**coprogen, ferricrocin**) that chelate scarce micronutrients (especially $Fe^{3+}$), leaving pathogens starved of essential metabolic drivers.\n\n**3. Induction of Systemic Resistance (ISR / SAR Cross-Talk):**\nRoot colonization by *Trichoderma* initiates signaling cascades mediated by MAMPs (Microbe-Associated Molecular Patterns) such as xylanases, swollenin, cellulases, and peptaibols. These elicitors activate both **Jasmonic Acid / Ethylene (JA/ET)**-dependent Induced Systemic Resistance (ISR) and **Salicylic Acid (SA)**-mediated Systemic Acquired Resistance (SAR) pathways. Primed plants accumulate Pathogenesis-Related (PR) proteins (PR-1, PR-2 beta-glucanase, PR-3 chitinase), phytoalexins, and trigger rapid callose papilla deposition along epidermal cell walls.",
                "subsections": []
            },
            {
                "id": "sec-3-3",
                "heading": "3. Specialized Biocontrol Fungi: Pochonia and Ampelomyces",
                "content": "**1. Pochonia chlamydosporia (Nematophagous Biocontrol Fungus):**\nFormerly classified as *Verticillium chlamydosporium*, *Pochonia chlamydosporia* is a facultative parasitic fungus of sedentary endoparasitic plant nematodes (notably root-knot nematodes *Meloidogyne spp.* and cyst nematodes *Heterodera* and *Globodera spp.*):\n- *Mechanism of Action:* The fungus grows saprophytically in the rhizosphere. When its hyphae encounter nematode egg masses enclosed in gelatinous matrices, they adhere to the egg shell and form specialized swollen **appressoria**. The appressorium secretes mechanical turgor and extracellular enzymes—principally the subtilisin-like neutral serine protease **VCP1** and chitinases. These enzymes sequentially dissolve the outer proteinaceous vitelline layer, the middle chitinous layer, and the inner lipid lipoprotein layer of the nematode egg shell.\n- *Hyphal Ingress:* Once inside, hyphae proliferate throughout the developing embryonic juvenile ($J_2$), digesting the embryo and converting the entire egg interior into a mass of fungal chlamydospores, destroying the nematode population cycle.\n\n**2. Ampelomyces quisqualis (Hyperparasite of Powdery Mildew):**\n*Ampelomyces quisqualis* is an obligate, specialized hyperparasite of fungi belonging to the family Erysiphaceae, the causal agents of powdery mildew across cucurbits, grapes, apple, and ornamentals:\n- *Parasitic Mode:* Conidia of *A. quisqualis* land on powdery mildew mycelia and conidiophores. Germ tubes penetrate the host hyphal wall directly without appressoria. The hyperparasite grows internally through the host hyphae, translocating along the mildew colony.\n- *Pycnidial Formation:* Within 5 to 7 days, *A. quisqualis* forms characteristic intrahyphal, yellowish-brown, pyriform **pycnidia** inside the conidiophores and cleistothecia/chasmothecia of the powdery mildew fungus. The infected mildew mycelium collapses, shrivels, ceases conidiation, and dies. Commercial strains (e.g., isolate AQ10) are formulated as water-dispersible granules (WDG) for foliar sprays in greenhouse viticulture and horticulture.",
                "subsections": []
            },
            {
                "id": "sec-3-4",
                "heading": "4. Mass Production Technologies: Solid-State and Biphasic Fermentation",
                "content": "Commercial industrial production of *Trichoderma* relies on optimizing fungal sporulation (chlamydospores and conidia) using inexpensive agricultural byproducts:\n\n**1. Solid-State Fermentation (SSF):**\n- *Substrates:* Broken cereal grains (sorghum, pearl millet/bajra, wheat, maize) or agro-industrial crop residues (wheat bran, paddy straw, saw dust, spent mushroom compost).\n- *Procedure:* Substrates are soaked in tap water to adjust moisture content to **50–60%**, amended with 1–2% sucrose/molasses and 1% calcium sulfate/gypsum (to prevent caking), loaded into autoclavable polypropylene bags, and autoclaved at 121°C (15 psi) for 60–90 minutes. After cooling, bags are aseptically inoculated with a 5-day-old starter mother culture of *Trichoderma* and incubated at 25–28°C with 80% relative humidity. Maximum conidial yield ($>1 \\times 10^9$ CFU/g) is reached within 10 to 14 days, forming dense green conidial crusts.\n\n**2. Two-Stage Biphasic Fermentation:**\n- Modern commercial biofactories combine the rapid biomass multiplication of liquid fermentation with the high sporulation stability of solid substrates:\n  - *Phase 1 (Liquid Fermentation):* *Trichoderma* is grown in industrial fermenters in liquid broth (molasses-yeast extract broth, potato dextrose broth, or corn steep liquor) at 28°C with continuous sterile aeration and stirring for 72–96 hours. This generates high titers of vegetative mycelial biomass and thick-walled resting **chlamydospores**.\n  - *Phase 2 (Solid Inoculation & Sporulation):* The active liquid biomass is blended into sterilized solid carriers (talc powder, vermiculite, or wheat bran) at regulated moisture levels and allowed to cure for 4–6 days in shallow trays. This cues massive aerial conidiation, ensuring an exceptionally high spore load and robust storage stability.",
                "subsections": []
            },
            {
                "id": "sec-3-5",
                "heading": "5. Formulations, Quality Control, and Field Delivery Protocols",
                "content": "**1. Formulation Types & Carriers:**\n- *Wettable Powders (WP):* Inoculum is blended with fine **300-mesh talc powder** (hydrated magnesium silicate), carboxymethyl cellulose (CMC 0.5–1.0%) as a binder, and light wetting agents. Shelf life is 4–6 months at room temperature (25°C).\n- *Liquid SC (Suspension Concentrates):* Conidia suspended in mineral oils or aqueous buffers containing glycerol (osmoprotectant) and UV protectants, extending shelf life to 12 months.\n\n**2. Statutory Quality Benchmarks (CIB&RC Standards):**\n- Minimum viable count: **$2 \\times 10^6$ CFU/g** (or CFU/ml) at the time of sale.\n- Maximum moisture: **8.0%** for powder formulations.\n- Contaminant load: Less than $1 \\times 10^4$ CFU/g of non-target organisms; zero tolerance for pathogenic *Salmonella*, *Shigella*, and *Escherichia coli*.\n- Biological efficacy test: Demonstrating >70% inhibition zone against *Rhizoctonia solani* in dual-culture assay.\n\n**3. Field Delivery Protocols:**\n- **Seed Treatment (Biopriming):** 5–10 g/kg seed mixed with water or jaggery solution. For biopriming, treated seeds are incubated under moist hessian bags for 12–24 hours to allow *Trichoderma* hyphae to colonize seed coats prior to sowing.\n- **Soil Application (FYM Enrichment):** 1–2.5 kg of *Trichoderma* formulation mixed with 100–250 kg of well-decomposed Farmyard Manure (FYM) or vermicompost under shade. The heap is kept moist (40–50%) for 7–10 days to allow massive saprophytic multiplication, then broadcast over 1 acre during final land preparation.\n- **Seedling Root Dip:** 10 g/L water slurry; roots of transplanted vegetables/paddy submerged for 30 minutes before planting.\n- **Compatibility with Agrochemicals:** Highly sensitive to benzimidazoles (carbendazim, benomyl) and sterol demethylation inhibitors (hexaconazole); moderately tolerant to mancozeb and copper oxychloride; compatible with most biofertilizers (*Rhizobium*, *Azotobacter*). A safety interval of 7–10 days must be maintained between fungicide and *Trichoderma* applications.",
                "subsections": []
            }
        ],
        "keyTakeaways": [
            "Trichoderma attacks fungal pathogens through a 5-step cascade: chemotaxis, lectin binding, coiling, appressorium formation, and CWDE lysis.",
            "Cell-wall degrading enzymes (endochitinases, beta-1,3-glucanases, cellulases, Prb1 proteases) act synergistically with peptaibols to puncture pathogen hyphae.",
            "Bioactive metabolites include volatile 6-pentyl-alpha-pyrone (coconut aroma), gliovirin (active against Pythium), and pore-forming peptaibols.",
            "Pochonia chlamydosporia parasitizes eggs of root-knot and cyst nematodes utilizing the extracellular serine protease VCP1.",
            "Ampelomyces quisqualis is an obligate hyperparasite forming destructive intrahyphal pycnidia inside powdery mildew colonies.",
            "Mass production utilizes solid-state fermentation on cereal grains or a two-stage biphasic liquid-to-solid curing process.",
            "CIB&RC quality parameters prescribe a minimum viable count of 2 x 10^6 CFU/g and moisture below 8%.",
            "Trichoderma is compatible with FYM and seed biopriming but is lethally inhibited by benzimidazole fungicides (carbendazim)."
        ],
        "commonMisunderstandings": [
            {
                "myth": "Trichoderma can be mixed directly in the spray tank with carbendazim or other systemic fungicides.",
                "reality": "Carbendazim and benzimidazoles are extremely lethal to Trichoderma even at concentrations below 1 ppm. A minimum waiting interval of 7 to 10 days is required between chemical fungicide and Trichoderma applications."
            },
            {
                "myth": "Trichoderma only attacks dead organic matter and cannot kill living fungal hyphae.",
                "reality": "Trichoderma is a necrotrophic mycoparasite that actively seeks out, coils around, penetrates, and consumes living plant pathogens such as Rhizoctonia solani and Sclerotium rolfsii."
            },
            {
                "myth": "Commercial talc formulations of Trichoderma maintain viable counts indefinitely at room temperature.",
                "reality": "Vegetative conidia in talc formulations decline significantly after 4 to 6 months at temperatures above 30°C. Storage in cool, dry conditions (<25°C) is essential to preserve viable CFU above the 2x10^6 CFU/g threshold."
            },
            {
                "myth": "Pochonia chlamydosporia kills adult root-knot nematodes in the soil.",
                "reality": "Pochonia chlamydosporia is an egg-parasitic fungus that specifically penetrates and destroys nematode egg masses and developing juveniles, rather than motile adult stages."
            },
            {
                "myth": "Trichoderma produces identical enzymes regardless of whether it attacks Pythium or Rhizoctonia.",
                "reality": "Trichoderma exhibits inductive plasticity: it discharges chitinases and proteases against chitinous Rhizoctonia, while synthesizing cellulases and beta-glucanases when encountering cellulosic Oomycetes like Pythium."
            }
        ],
        "summary": "Unit 3 provides a comprehensive analysis of fungal biocontrol agents, with primary focus on the cosmopolitan ascomycete Trichoderma spp. (*T. harzianum*, *T. viride*, *T. virens*). The biological control mechanism is governed by a five-stage mycoparasitic cascade: chemotropic sensing of pathogen exudates, lectin-mediated host recognition, hyphal coiling, appressorial differentiation, and the discharge of cell-wall degrading enzymes (endochitinases, beta-1,3-glucanases, cellulases, and Prb1 proteases). Concurrently, Trichoderma secretes bioactive secondary metabolites—notably transmembrane pore-forming peptaibols, volatile 6-pentyl-alpha-pyrone (6-PAP), gliovirin, and gliotoxin—while competitively occupying rhizosphere niches and priming plant systemic defenses (ISR and SAR). Beyond Trichoderma, specialized fungal biocontrol agents exhibit remarkable target specificity: *Pochonia chlamydosporia* secretes the VCP1 serine protease to disintegrate the multilayered eggshells of root-knot and cyst nematodes, whereas the obligate hyperparasite *Ampelomyces quisqualis* forms intrahyphal pycnidia inside powdery mildew colonies. Industrial mass manufacturing leverages solid-state fermentation on agro-wastes (cereal grains, wheat bran) or biphasic liquid-to-solid systems. CIB&RC statutory standards mandate a minimum viable propagule density of 2 x 10^6 CFU/g and moisture under 8%. Successful field application relies on seed biopriming, FYM bio-enrichment, and strict segregation from chemical fungicides like carbendazim."
    }

    # 60 MCQs (20 Easy, 25 Medium, 15 Hard)
    mcqs = [
        # Easy (1-20)
        {"id": "PTH215-U3-MCQ01", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Easy",
         "questionText": "To which taxonomic family does the biocontrol fungal genus Trichoderma belong?",
         "options": {"A": "Hypocreaceae", "B": "Nectriaceae", "C": "Pythiaceae", "D": "Polyporaceae"},
         "correctOption": "A", "explanation": "Trichoderma belongs to the family Hypocreaceae within the order Hypocreales (division Ascomycota)."},
        {"id": "PTH215-U3-MCQ02", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Easy",
         "questionText": "What is the typical visual appearance of Trichoderma colonies growing on Potato Dextrose Agar (PDA)?",
         "options": {"A": "Vibrant emerald to dark green conidial pustules", "B": "Bright pink to carmine red slimy colonies", "C": "Jet black powdery radiating colonies", "D": "Chalky white bacterial-like mucoid colonies"},
         "correctOption": "A", "explanation": "Trichoderma exhibits fast-growing white mycelia that rapidly turn into dark emerald green conidial pustules as conidiophores mature."},
        {"id": "PTH215-U3-MCQ03", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Easy",
         "questionText": "What morphological structure does Trichoderma form upon contacting the hyphae of a host fungal pathogen?",
         "options": {"A": "Coiling hyphae and appressoria", "B": "Clamp connections", "C": "Ascospores and paraphyses", "D": "Basidiocarps"},
         "correctOption": "A", "explanation": "Trichoderma wraps tightly around host hyphae in coils and forms swollen appressoria or hook-like structures to breach host walls."},
        {"id": "PTH215-U3-MCQ04", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Easy",
         "questionText": "Which primary enzyme is secreted by Trichoderma to degrade the structural backbone of chitinous fungal walls?",
         "options": {"A": "Chitinase", "B": "Pectin methyl esterase", "C": "Amylase", "D": "Lipoxygenase"},
         "correctOption": "A", "explanation": "Chitinase hydrolyzes the beta-1,4-glucosaminic bonds of chitin, the principal structural polysaccharide of fungal pathogen walls."},
        {"id": "PTH215-U3-MCQ05", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Easy",
         "questionText": "What pleasant, characteristic aroma is produced by Trichoderma viride cultures due to the metabolite 6-pentyl-alpha-pyrone (6-PAP)?",
         "options": {"A": "Sweet coconut aroma", "B": "Rotten egg sulfur aroma", "C": "Fishy amine aroma", "D": "Vinegar-like acetic aroma"},
         "correctOption": "A", "explanation": "6-pentyl-alpha-pyrone (6-PAP) is a volatile lactone synthesized by Trichoderma that imparts a distinct coconut-like scent."},
        {"id": "PTH215-U3-MCQ06", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Easy",
         "questionText": "What class of peptide antibiotics produced by Trichoderma contains alpha-aminoisobutyric acid (Aib)?",
         "options": {"A": "Peptaibols", "B": "Cyclic peptides", "C": "Beta-lactams", "D": "Aminoglycosides"},
         "correctOption": "A", "explanation": "Peptaibols are non-ribosomally synthesized linear peptide antibiotics containing high levels of alpha-aminoisobutyric acid (Aib)."},
        {"id": "PTH215-U3-MCQ07", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Easy",
         "questionText": "Which life stage of root-knot nematodes (Meloidogyne spp.) is primarily parasitized by Pochonia chlamydosporia?",
         "options": {"A": "Eggs and developing embryos", "B": "Adult migratory males only", "C": "Third-stage infective juveniles (J3)", "D": "Root gall galling cells"},
         "correctOption": "A", "explanation": "Pochonia chlamydosporia is an egg-parasitic fungus that colonizes nematode egg masses, penetrating and digesting egg shells."},
        {"id": "PTH215-U3-MCQ08", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Easy",
         "questionText": "Ampelomyces quisqualis is an obligate hyperparasite used to control which group of plant diseases?",
         "options": {"A": "Powdery mildews (Erysiphaceae)", "B": "Downy mildews (Peronosporaceae)", "C": "Bacterial wilts (Ralstonia)", "D": "Late blights (Phytophthora)"},
         "correctOption": "A", "explanation": "Ampelomyces quisqualis is a specialized mycoparasite of powdery mildew fungi, forming internal pycnidia in their hyphae."},
        {"id": "PTH215-U3-MCQ09", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Easy",
         "questionText": "Which agro-waste substrate is commonly used as a base for solid-state fermentation of Trichoderma?",
         "options": {"A": "Sorghum/bajra grains and wheat bran", "B": "Polyethylene beads", "C": "Refined white sugar crystals", "D": "Pure silica sand"},
         "correctOption": "A", "explanation": "Cereal grains (sorghum, bajra) and wheat bran provide ideal carbon, nitrogen, and moisture-holding capacity for fungal sporulation."},
        {"id": "PTH215-U3-MCQ10", "syllabusTopic": "Commercial products and field application", "difficulty": "Easy",
         "questionText": "What is the statutory CIB&RC minimum viable spore count for commercial Trichoderma powder formulations?",
         "options": {"A": "2 x 10^6 CFU/g", "B": "1 x 10^4 CFU/g", "C": "1 x 10^12 CFU/g", "D": "5 x 10^2 CFU/g"},
         "correctOption": "A", "explanation": "The Central Insecticides Board & Registration Committee (CIB&RC) in India mandates at least 2 x 10^6 CFU/g for Trichoderma wettable powders."},
        {"id": "PTH215-U3-MCQ11", "syllabusTopic": "Commercial products and field application", "difficulty": "Easy",
         "questionText": "What is the recommended dose of Trichoderma powder formulation for dry seed treatment per kilogram of seed?",
         "options": {"A": "5 to 10 grams per kg seed", "B": "100 to 200 grams per kg seed", "C": "0.1 milligram per kg seed", "D": "500 grams per kg seed"},
         "correctOption": "A", "explanation": "The standard field recommendation is 5 to 10 g of Trichoderma talc-based powder formulation per 1 kg of seed."},
        {"id": "PTH215-U3-MCQ12", "syllabusTopic": "Commercial products and field application", "difficulty": "Easy",
         "questionText": "How is Trichoderma typically mass-multiplied in farm conditions before broadcasting into the soil?",
         "options": {"A": "Multiplied in moist Farmyard Manure (FYM) or vermicompost for 7-10 days", "B": "Mixed with synthetic chemical urea and boiled", "C": "Soaked in 100% alcohol solution", "D": "Exposed to direct noon sunlight on concrete floors"},
         "correctOption": "A", "explanation": "Enrichment in moist FYM or vermicompost under shade allows Trichoderma to multiply millions-fold prior to field soil application."},
        {"id": "PTH215-U3-MCQ13", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Easy",
         "questionText": "Which teleomorphic (sexual) genus corresponds to Trichoderma?",
         "options": {"A": "Hypocrea", "B": "Gibberella", "C": "Glomerella", "D": "Claviceps"},
         "correctOption": "A", "explanation": "The sexual state (teleomorph) of Trichoderma species is classified under the ascomycete genus Hypocrea."},
        {"id": "PTH215-U3-MCQ14", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Easy",
         "questionText": "Which antibiotic metabolite produced by Trichoderma virens is particularly lethal to Pythium ultimum?",
         "options": {"A": "Gliovirin", "B": "Penicillin", "C": "Streptomycin", "D": "Kasugamycin"},
         "correctOption": "A", "explanation": "Gliovirin, an epipolythiodioxopiperazine metabolite from T. virens, exhibits potent inhibitory activity against Pythium ultimum."},
        {"id": "PTH215-U3-MCQ15", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Easy",
         "questionText": "What type of fruiting bodies does Ampelomyces quisqualis develop inside powdery mildew conidiophores?",
         "options": {"A": "Pycnidia", "B": "Apothecia", "C": "Perithecia", "D": "Synnemata"},
         "correctOption": "A", "explanation": "Ampelomyces quisqualis produces pyriform, brownish-yellow pycnidia within the conidiophores and hyphae of powdery mildews."},
        {"id": "PTH215-U3-MCQ16", "syllabusTopic": "Commercial products and field application", "difficulty": "Easy",
         "questionText": "Which class of chemical fungicides is extremely toxic to Trichoderma and must never be tank-mixed with it?",
         "options": {"A": "Benzimidazoles (e.g., Carbendazim)", "B": "Sulfur wettable powders at low dose", "C": "Copper hydroxide at trace levels", "D": "Botanical neem oil"},
         "correctOption": "A", "explanation": "Benzimidazoles like carbendazim and benomyl are intensely fungicidal to Trichoderma even at fractions of a part per million."},
        {"id": "PTH215-U3-MCQ17", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Easy",
         "questionText": "What moisture percentage should be maintained in cereal grain substrates during solid-state fermentation of Trichoderma?",
         "options": {"A": "50% to 60%", "B": "5% to 10%", "C": "90% to 95%", "D": "1% to 2%"},
         "correctOption": "A", "explanation": "A moisture level of 50–60% provides the optimal water activity required for Trichoderma vegetative growth and sporulation."},
        {"id": "PTH215-U3-MCQ18", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Easy",
         "questionText": "What enzyme produced by Trichoderma allows it to parasitize oomycetes like Pythium whose walls lack chitin?",
         "options": {"A": "Beta-glucanases and cellulases", "B": "Keratinase", "C": "Laccase", "D": "Urease"},
         "correctOption": "A", "explanation": "Oomycete cell walls are comprised of beta-glucans and cellulose; Trichoderma secretes beta-1,3-glucanases and cellulases to lyse them."},
        {"id": "PTH215-U3-MCQ19", "syllabusTopic": "Commercial products and field application", "difficulty": "Easy",
         "questionText": "What is the maximum permitted moisture content in commercial Trichoderma powder according to CIB&RC standards?",
         "options": {"A": "8.0%", "B": "25.0%", "C": "40.0%", "D": "0.1%"},
         "correctOption": "A", "explanation": "CIB&RC specifications mandate that moisture in talc/powder formulations of Trichoderma must not exceed 8.0% to prevent spoilage."},
        {"id": "PTH215-U3-MCQ20", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Easy",
         "questionText": "What plant immune response is primarily induced throughout the host following Trichoderma root colonization?",
         "options": {"A": "Induced Systemic Resistance (ISR)", "B": "Hypersensitive systemic necrosis", "C": "Systemic chlorosis", "D": "Genetic male sterility"},
         "correctOption": "A", "explanation": "Root colonization by Trichoderma primes the plant's systemic defense pathways, triggering Induced Systemic Resistance (ISR)."},

        # Medium (21-45)
        {"id": "PTH215-U3-MCQ21", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Medium",
         "questionText": "In the mycoparasitic cascade of Trichoderma, what molecular interaction mediates initial attachment to host hyphae?",
         "options": {"A": "Lectin-carbohydrate recognition between fungal wall surfaces", "B": "Antibody-antigen neutralization", "C": "Electrostatic repulsion between negatively charged spores", "D": "Direct magnetic alignment along soil iron minerals"},
         "correctOption": "A", "explanation": "Host recognition is mediated by specific lectins on the pathogen cell wall binding to carbohydrate residues on Trichoderma hyphae."},
        {"id": "PTH215-U3-MCQ22", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Medium",
         "questionText": "What is the specific physiological function of endochitinases (such as Ech42) during Trichoderma attack?",
         "options": {"A": "Randomly cleaving internal beta-1,4-glucosaminic bonds inside the chitin polymer", "B": "Removing individual glucose molecules from sucrose", "C": "Oxidizing membrane ergosterol into brassinosteroids", "D": "Synthesizing chitin polymers to reinforce the pathogen"},
         "correctOption": "A", "explanation": "Endochitinases cleave internal bonds within the long chitin polymer chain, rapidly fragmenting the pathogen's structural framework."},
        {"id": "PTH215-U3-MCQ23", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Medium",
         "questionText": "Why does Trichoderma secrete the subtilisin-like alkaline protease Prb1 before or alongside chitinases?",
         "options": {"A": "To digest outer structural glycoproteins and expose embedded chitin fibrils", "B": "To synthesize nitrogenous fertilizer for the host crop", "C": "To neutralize soil acidity in the rhizosphere", "D": "To degrade plant cellulose microfibrils"},
         "correctOption": "A", "explanation": "Pathogen cell walls contain a protective outer coat of mannoproteins and structural glycoproteins; Prb1 digests them to expose chitin."},
        {"id": "PTH215-U3-MCQ24", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "How do peptaibol antibiotics produced by Trichoderma cause death of phytopathogenic fungi?",
         "options": {"A": "By forming transmembrane voltage-gated ion channels that leak ions and depolarize membranes", "B": "By inhibiting DNA gyrase and topoisomerase IV", "C": "By blocking microtubule assembly during spindle formation", "D": "By starving the fungus of atmospheric carbon dioxide"},
         "correctOption": "A", "explanation": "Peptaibols aggregate in the lipid bilayer, forming transmembrane pores that allow catastrophic leakage of electrolytes (K+) and ATP."},
        {"id": "PTH215-U3-MCQ25", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "Which statement accurately describes the synergistic biocontrol interaction between peptaibols and endochitinases?",
         "options": {"A": "Chitinase perforates the cell wall, allowing peptaibols rapid access to the underlying plasma membrane", "B": "Peptaibols neutralize chitinase activity to prevent host damage", "C": "Chitinase transforms peptaibols into inert amino acids", "D": "Both molecules compete antagonistically for the same cell receptor"},
         "correctOption": "A", "explanation": "Chitinases degrade the protective outer wall matrix, facilitating instantaneous contact of peptaibols with the vulnerable plasma membrane."},
        {"id": "PTH215-U3-MCQ26", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "What type of iron-chelating siderophores are synthesized by Trichoderma species to outcompete pathogens in the rhizosphere?",
         "options": {"A": "Hydroxamate-type siderophores (e.g., coprogen, ferricrocin)", "B": "Phenolate-type enterobactin", "C": "Organic humic acids", "D": "Synthetic EDTA complexes"},
         "correctOption": "A", "explanation": "Trichoderma synthesizes hydroxamate siderophores like coprogen and ferricrocin, which bind ferric iron with extremely high affinity."},
        {"id": "PTH215-U3-MCQ27", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Medium",
         "questionText": "What is the key extracellular serine protease secreted by Pochonia chlamydosporia to dissolve nematode eggshells?",
         "options": {"A": "VCP1", "B": "Cry1Ac", "C": "Subtilisin DY", "D": "Trypsin III"},
         "correctOption": "A", "explanation": "VCP1 (Verticillium chlamydosporium Protease 1) is a specialized serine endopeptidase that digests proteins in the nematode vitelline coat."},
        {"id": "PTH215-U3-MCQ28", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Medium",
         "questionText": "What structural layers of the nematode eggshell must Pochonia chlamydosporia degrade to infect the embryo?",
         "options": {"A": "Outer vitelline layer, median chitinous layer, and inner lipoidal layer", "B": "Double peptidoglycan wall and teichoic acids", "C": "Lignified secondary cellulose wall", "D": "Silica sheath and wax cuticle"},
         "correctOption": "A", "explanation": "The nematode eggshell comprises an outer vitelline protein coat, a middle chitinous layer, and an inner lipid/ascaroside barrier."},
        {"id": "PTH215-U3-MCQ29", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Medium",
         "questionText": "How does Ampelomyces quisqualis overwinter and survive unfavorable dry environmental conditions?",
         "options": {"A": "As dormant pycnidia inside powdery mildew cleistothecia/chasmothecia and plant debris", "B": "As resistant endospores in deep soil", "C": "As airborne basidiospores", "D": "As macroscopic sclerotia resembling ergot"},
         "correctOption": "A", "explanation": "A. quisqualis overwinters as thick-walled pycnidia inside the overwintering ascocarps (cleistothecia/chasmothecia) of powdery mildews."},
        {"id": "PTH215-U3-MCQ30", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Medium",
         "questionText": "In commercial two-stage biphasic fermentation of Trichoderma, what is the specific objective of Phase 1?",
         "options": {"A": "Rapidly accumulating high titers of vegetative mycelial biomass and chlamydospores in liquid broth", "B": "Inducing immediate dry conidial shedding", "C": "Killing contaminating bacteria with heat", "D": "Extracting pure crystalline peptaibols"},
         "correctOption": "A", "explanation": "Phase 1 uses submerged liquid fermentation in stirred fermenters to generate vast mycelial biomass and chlamydospores in 72–96 hours."},
        {"id": "PTH215-U3-MCQ31", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Medium",
         "questionText": "Why is calcium sulfate (gypsum, 1–2%) frequently added to grain substrates during Trichoderma mass production?",
         "options": {"A": "To prevent grain agglomeration and maintain free-flowing aeration spaces", "B": "To act as a direct systemic fungicide against contaminants", "C": "To dye the grains bright green", "D": "To eliminate the need for autoclave sterilization"},
         "correctOption": "A", "explanation": "Gypsum coats grain surfaces, preventing sticky clumping, maintaining porosity, and facilitating oxygen diffusion during SSF."},
        {"id": "PTH215-U3-MCQ32", "syllabusTopic": "Commercial products and field application", "difficulty": "Medium",
         "questionText": "What physiological process occurs during seed 'biopriming' with Trichoderma?",
         "options": {"A": "Controlled seed hydration allowing Trichoderma conidia to germinate and colonize the seed coat prior to sowing", "B": "High-temperature dry roasting to kill internal smuts", "C": "Chemical acid scarification to dissolve the embryo", "D": "Genetic transformation of seed DNA by fungal plasmids"},
         "correctOption": "A", "explanation": "Biopriming hydrates seeds under warm, humid conditions, allowing Trichoderma to establish a dense mycelial sheath over the seed coat."},
        {"id": "PTH215-U3-MCQ33", "syllabusTopic": "Commercial products and field application", "difficulty": "Medium",
         "questionText": "Why is FYM enrichment recommended before applying Trichoderma to soil?",
         "options": {"A": "It provides abundant organic carbon, enabling Trichoderma to reach high population density before pathogen contact", "B": "It neutralizes Trichoderma spores to avoid phytotoxicity", "C": "It acts as a chemical surfactant to dissolve soil minerals", "D": "It replaces the need for irrigation water entirely"},
         "correctOption": "A", "explanation": "Multiplying Trichoderma in FYM for 7–10 days boosts the biocontrol fungal population, ensuring dominant rhizosphere colonization."},
        {"id": "PTH215-U3-MCQ34", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Medium",
         "questionText": "Which resting structure produced by Trichoderma provides long-term survival in stressful or dry soil conditions?",
         "options": {"A": "Chlamydospores", "B": "Zoospores", "C": "Aplanospores", "D": "Basidiospores"},
         "correctOption": "A", "explanation": "Chlamydospores are thick-walled, globose resting spores formed terminally or intercalary in aged hyphae, surviving adverse conditions."},
        {"id": "PTH215-U3-MCQ35", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "Which plant hormone signaling pathways are primarily engaged during Trichoderma-mediated Induced Systemic Resistance (ISR)?",
         "options": {"A": "Jasmonic Acid (JA) and Ethylene (ET) pathways", "B": "Abscisic acid (ABA) pathway exclusively", "C": "Gibberellic acid (GA) degradation pathway", "D": "Auxin transport inhibition pathway"},
         "correctOption": "A", "explanation": "Trichoderma-mediated ISR is characteristically mediated through the Jasmonic Acid and Ethylene signaling defense cascades."},
        {"id": "PTH215-U3-MCQ36", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "What defense-related enzymes accumulate rapidly in plants primed with Trichoderma following pathogen challenge?",
         "options": {"A": "Phenylalanine ammonia-lyase (PAL), Peroxidase (POX), and Polyphenol oxidase (PPO)", "B": "Amylase, invertase, and cellulase", "C": "DNA polymerase and reverse transcriptase", "D": "Nitrogenase and hydrogenase"},
         "correctOption": "A", "explanation": "Priming accelerates the production of phenylpropanoid pathway defense enzymes: PAL, peroxidase, PPO, and pathogenesis-related proteins."},
        {"id": "PTH215-U3-MCQ37", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Medium",
         "questionText": "What commercial trade name is associated with Ampelomyces quisqualis isolate AQ10 formulated for powdery mildew control?",
         "options": {"A": "AQ10 Biofungicide", "B": "Dipel WP", "C": "Bio-Cure-B", "D": "Nemacheck"},
         "correctOption": "A", "explanation": "AQ10 is the internationally registered biofungicide formulation containing viable conidia of Ampelomyces quisqualis isolate M-10."},
        {"id": "PTH215-U3-MCQ38", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Medium",
         "questionText": "What is the typical incubation temperature and relative humidity required for solid-state multiplication of Trichoderma?",
         "options": {"A": "25–28°C and 80–85% RH", "B": "45–50°C and 20% RH", "C": "10–12°C and 99% RH", "D": "37–40°C and 40% RH"},
         "correctOption": "A", "explanation": "Optimal vegetative growth and conidiation of Trichoderma occur at 25–28°C under high ambient relative humidity (80–85%)."},
        {"id": "PTH215-U3-MCQ39", "syllabusTopic": "Commercial products and field application", "difficulty": "Medium",
         "questionText": "If a farmer applies copper oxychloride to tomato plants, what is the safe waiting interval before applying Trichoderma?",
         "options": {"A": "7 to 10 days", "B": "Zero days (instant tank-mix)", "C": "6 months", "D": "24 hours only"},
         "correctOption": "A", "explanation": "A waiting interval of 7 to 10 days is required after applying copper or contact fungicides to allow chemical residues to decline."},
        {"id": "PTH215-U3-MCQ40", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Medium",
         "questionText": "Against which soil-borne pathogen is Trichoderma viride particularly recognized for controlling damping-off in nurseries?",
         "options": {"A": "Pythium aphanidermatum", "B": "Puccinia graminis", "C": "Tilletia indica", "D": "Ustilago scitaminea"},
         "correctOption": "A", "explanation": "Trichoderma viride is widely applied as seed and nursery soil treatment to manage damping-off caused by Pythium and Rhizoctonia."},
        {"id": "PTH215-U3-MCQ41", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "What is the mode of action of gliotoxin produced by Trichoderma against susceptible pathogens?",
         "options": {"A": "Inactivation of essential thiol-bearing enzymes via disulfide bridge formation and reactive oxygen generation", "B": "Direct cleavage of host plant genomic DNA", "C": "Inhibition of host transpiration through stomatal pore blockage", "D": "Chelation of soil nitrogen ions"},
         "correctOption": "A", "explanation": "The internal disulfide bridge of gliotoxin reacts with exposed thiol groups of target enzymes, causing inactivation and ROS generation."},
        {"id": "PTH215-U3-MCQ42", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Medium",
         "questionText": "Why is Pochonia chlamydosporia considered an excellent candidate for Integrated Pest Management (IPM) in polyhouses?",
         "options": {"A": "It persists saprophytically on organic matter and continuously infects nematode eggs across multiple cropping cycles", "B": "It completely eradicates weeds within 24 hours", "C": "It eliminates whiteflies by foliar contact toxicity", "D": "It replaces nitrogen fertilizers entirely"},
         "correctOption": "A", "explanation": "P. chlamydosporia colonizes the rhizosphere and root mucilage saprophytically, acting as a sustained biological barrier against nematodes."},
        {"id": "PTH215-U3-MCQ43", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Medium",
         "questionText": "Why must polypropylene (PP) bags be used instead of low-density polyethylene (LDPE) for autoclaving solid substrates?",
         "options": {"A": "Polypropylene withstands 121°C steam autoclaving temperatures without melting or collapsing", "B": "Polypropylene chemically triggers spore germination during cooling", "C": "LDPE bags are transparent to shortwave ultraviolet rays", "D": "Polypropylene generates vacuum pressure automatically"},
         "correctOption": "A", "explanation": "Autoclaving requires 121°C (15 psi); polypropylene (PP) resists high thermal stress, whereas LDPE softens and melts at ~105°C."},
        {"id": "PTH215-U3-MCQ44", "syllabusTopic": "Commercial products and field application", "difficulty": "Medium",
         "questionText": "What sticker or binder is incorporated at 0.5–1.0% into talc-based Trichoderma powder to facilitate seed adherence?",
         "options": {"A": "Carboxymethyl cellulose (CMC)", "B": "Sodium dodecyl sulfate (SDS)", "C": "Acetic acid", "D": "Urea formaldehyde"},
         "correctOption": "A", "explanation": "Carboxymethyl cellulose (CMC) serves as an inert, non-toxic adhesive and moisture binder for dry seed coating."},
        {"id": "PTH215-U3-MCQ45", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Medium",
         "questionText": "Which fungal pathogen resting structure is aggressively colonized and degraded by Trichoderma harzianum in soil?",
         "options": {"A": "Sclerotia of Sclerotium rolfsii and Rhizoctonia solani", "B": "Ascospores inside sealed perithecia", "C": "Endospores of Bacillus subtilis", "D": "Bacterial biofilms of Rhizobium"},
         "correctOption": "A", "explanation": "Trichoderma hyphae penetrate melanized outer rinds of sclerotia, secreting beta-glucanases and chitinases that rot the survival structures."},

        # Hard (46-60)
        {"id": "PTH215-U3-MCQ46", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Hard",
         "questionText": "What is the genetic regulation mechanism governing the expression of the endochitinase gene ech42 in Trichoderma during mycoparasitism?",
         "options": {"A": "Repressed by high concentrations of monomeric glucose (catabolite repression) and strongly induced by pathogen cell walls or colloidal chitin", "B": "Constitutively active at identical levels under all nutritional conditions", "C": "Induced solely by far-red light illumination through phytochrome receptors", "D": "Inhibited by ambient fungal cell wall fragments"},
         "correctOption": "A", "explanation": "Ech42 expression is under strict carbon catabolite repression (mediated by Cre1). It is derepressed when glucose is depleted and induced by chitin."},
        {"id": "PTH215-U3-MCQ47", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Hard",
         "questionText": "How does the non-enzymatic protein 'swollenin' produced by Trichoderma facilitate enzymatic cell wall degradation?",
         "options": {"A": "It disrupts the crystalline packing of cellulose and glucan fibrils without hydrolytic cleavage, loosening wall architecture for CWDEs", "B": "It forms a covalent bond that denatures pathogen ribosomal proteins", "C": "It synthesizes callose plugs inside host stomatal chambers", "D": "It polymerizes monomeric sugars into storage glycogen"},
         "correctOption": "A", "explanation": "Swollenin has similarity to plant expansins; it non-hydrolytically disrupts hydrogen bonds in cellulosic/glucan fibrils, opening the wall to CWDEs."},
        {"id": "PTH215-U3-MCQ48", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Hard",
         "questionText": "Which non-ribosomal peptide synthetase (NRPS) system in Trichoderma is responsible for the biosynthesis of 18- to 20-residue peptaibols?",
         "options": {"A": "A modular multienzyme complex with repeating adenylation, thiolation, and condensation domains that incorporates atypical amino acids like Aib", "B": "Standard 80S cytosolic ribosomes utilizing specific tRNAs", "C": "Mitochondrial translation systems dependent on formylmethionine", "D": "Post-translational cleavage of large plant histone precursor proteins"},
         "correctOption": "A", "explanation": "Peptaibols are synthesized by massive multimodular NRPS mega-enzymes that sequentially add amino acids without requiring mRNA templates."},
        {"id": "PTH215-U3-MCQ49", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Hard",
         "questionText": "How does Trichoderma protect itself from self-toxicity caused by the secretion of its own broad-spectrum secondary metabolites like trichodermin?",
         "options": {"A": "By expressing ATP-binding cassette (ABC) transporter efflux pumps and mutations in target ribosomal proteins", "B": "By enclosing toxins in double-membrane endosomes indefinitely", "C": "By converting toxins into structural chitin polymers", "D": "By secreting toxins solely into sterile soil minerals"},
         "correctOption": "A", "explanation": "Trichoderma upregulates pleiotropic ABC and MFS efflux transporters that actively pump toxins out of the cytoplasm, preventing auto-inhibition."},
        {"id": "PTH215-U3-MCQ50", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Hard",
         "questionText": "In Pochonia chlamydosporia, what biochemical trigger initiates the differentiation of appressoria on the nematode egg surface?",
         "options": {"A": "Contact with the egg surface glycoprotein vitelline coat and sensing of low-molecular-weight nitrogenous signals", "B": "Sudden depletion of ambient dissolved carbon dioxide", "C": "Exposure to high concentrations of nematicidal organophosphates", "D": "Phototactic sensing of ultraviolet radiation"},
         "correctOption": "A", "explanation": "Physical contact with the specific surface glycoproteins of the nematode vitelline membrane triggers appressorial differentiation and VCP1 release."},
        {"id": "PTH215-U3-MCQ51", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Hard",
         "questionText": "Why does the biocontrol efficacy of Ampelomyces quisqualis decline sharply under field conditions when ambient relative humidity drops below 60%?",
         "options": {"A": "Germination of A. quisqualis conidia and internal hyphal penetration require free moisture or >=85-90% RH for at least 24 hours", "B": "Low humidity causes powdery mildew conidia to release lethal antibiotics", "C": "A. quisqualis pycnidia undergo immediate explosive dehiscence in dry air", "D": "The host plant cuticle thickens within minutes, repelling the fungus"},
         "correctOption": "A", "explanation": "Like many hyperparasites, A. quisqualis requires high ambient relative humidity (>=85%) or free leaf wetness for spore germination and penetration."},
        {"id": "PTH215-U3-MCQ52", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Hard",
         "questionText": "During industrial submerged fermentation of Trichoderma, what physiological change occurs when carbon sources become depleted in the late stationary phase?",
         "options": {"A": "Hyphae undergo autolysis and fragment into thick-walled asexual chlamydospores with enhanced desiccation tolerance", "B": "The fungus initiates synchronous ascospore ejection", "C": "The culture irreversibly shifts into bacterial endospore formation", "D": "The culture transforms into motile flagellated zoospores"},
         "correctOption": "A", "explanation": "Nutrient depletion in liquid fermentation cues chlamydospore differentiation from hyphal segments, yielding highly stable propagules."},
        {"id": "PTH215-U3-MCQ53", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Hard",
         "questionText": "What is the critical risk of exceeding 65% initial moisture content in cereal grain substrates during solid-state fermentation?",
         "options": {"A": "Grain particles form anaerobic sticky clusters, limiting oxygen diffusion and favoring bacterial contamination", "B": "The fungus undergoes lethal thermal denaturation", "C": "Excess moisture causes spontaneous ignition of the grain mass", "D": "The fungus exclusively produces phytotoxic mycotoxins"},
         "correctOption": "A", "explanation": "High moisture (>65%) collapses substrate interstitial void spaces, resulting in anaerobic compaction, bacterial slime, and fungal suffocation."},
        {"id": "PTH215-U3-MCQ54", "syllabusTopic": "Commercial products and field application", "difficulty": "Hard",
         "questionText": "Under CIB&RC statutory guidelines, which dual-culture bioassay criterion is used to verify the antagonistic potency of Trichoderma mother cultures?",
         "options": {"A": "Demonstrating >=70% mycelial growth inhibition against Rhizoctonia solani or Sclerotium rolfsii in vitro", "B": "Producing a 5 cm clear zone on nutrient agar containing streptomycin", "C": "Total liquefaction of gelatin within 2 hours", "D": "Complete synthesis of 10 g/L citric acid in broth"},
         "correctOption": "A", "explanation": "Antagonistic potency is legally validated using a standardized dual-culture confrontation assay showing >=70% inhibition against R. solani."},
        {"id": "PTH215-U3-MCQ55", "syllabusTopic": "Commercial products and field application", "difficulty": "Hard",
         "questionText": "Why is the shelf-life of Trichoderma conidia formulated in talc powder significantly shorter than Bacillus subtilis endospore formulations?",
         "options": {"A": "Conidia are metabolically active vegetative fungal cells prone to lipid peroxidation and membrane desiccation, whereas endospores are cryptobiotic", "B": "Talc powder contains heavy metals that selectively lyse fungal conidia", "C": "Fungal conidia lack cell walls entirely", "D": "Bacterial endospores actively reproduce in dry talc without water"},
         "correctOption": "A", "explanation": "Trichoderma conidia have thin walls and residual respiration; over months at room temperature, desiccation and lipid oxidation lead to loss of viability."},
        {"id": "PTH215-U3-MCQ56", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR", "difficulty": "Hard",
         "questionText": "What role does the mitogen-activated protein kinase (MAPK) signaling pathway (e.g., Tmk1) play in Trichoderma mycoparasitism?",
         "options": {"A": "Transduces host-derived signals to regulate appressorium development, hyphal coiling, and CWDE gene transcription", "B": "Directly phosphorylates host fungal chitin polymers to dissolve them", "C": "Arrests cell division in the plant host vascular bundle", "D": "Synthesizes outer spore melanin pigments"},
         "correctOption": "A", "explanation": "Tmk1 is a conserved MAPK in Trichoderma that coordinates sensing of host surface ligands with morphogenetic coiling and enzyme secretion."},
        {"id": "PTH215-U3-MCQ57", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms", "difficulty": "Hard",
         "questionText": "How does Trichoderma virens differ biochemically from Trichoderma harzianum in its antibiotic production profile?",
         "options": {"A": "T. virens (formerly Gliocladium virens) is a prolific producer of gliotoxin and gliovirin, which are rarely produced by T. harzianum", "B": "T. virens produces streptomycin and validamycin exclusively", "C": "T. harzianum does not synthesize any CWDEs", "D": "T. virens cannot survive in soil environments"},
         "correctOption": "A", "explanation": "T. virens is characterized by 'Q' and 'P' strains producing gliotoxin and gliovirin; T. harzianum produces peptaibols, 6-PAP, and harzianopyridone."},
        {"id": "PTH215-U3-MCQ58", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces", "difficulty": "Hard",
         "questionText": "Which biological characteristic enables Pochonia chlamydosporia to survive in the rhizosphere when nematode host populations are absent?",
         "options": {"A": "It is an efficient root endophyte and saprophyte capable of utilizing root exudates and dead soil organic matter", "B": "It undergoes obligate cryobiosis inside crystalline quartz particles", "C": "It fixes atmospheric nitrogen inside specialized root nodules", "D": "It forms mycorrhizal arbuscules inside root cortical cells"},
         "correctOption": "A", "explanation": "P. chlamydosporia is a facultative parasite: in the absence of nematodes, it thrives as a rhizosphere saprophyte and harmless root endophyte."},
        {"id": "PTH215-U3-MCQ59", "syllabusTopic": "Mass production of fungal biocontrol agents", "difficulty": "Hard",
         "questionText": "What downstream drying parameter is critical for preserving maximum conidial viability when formulating Trichoderma from solid substrates?",
         "options": {"A": "Slow dehumidified drying below 30–32°C until carrier moisture reaches 7–8%", "B": "Rapid flash-drying at 100°C for 15 minutes", "C": "Direct exposure to solar ultraviolet radiation for 3 days", "D": "Lyophilization in the presence of concentrated hydrochloric acid"},
         "correctOption": "A", "explanation": "Conidia are sensitive to thermal inactivation (>35°C); dehumidified air drying at <=30°C to 7–8% moisture preserves membrane integrity."},
        {"id": "PTH215-U3-MCQ60", "syllabusTopic": "Commercial products and field application", "difficulty": "Hard",
         "questionText": "In an Integrated Pest Management schedule, how can a grower safely integrate Trichoderma with an indispensable copper fungicide spray?",
         "options": {"A": "Apply Trichoderma to soil via enriched FYM at planting, and direct copper sprays strictly to upper foliage 10 days later with zero soil runoff", "B": "Tank-mix both at triple the recommended dose", "C": "Boil the copper solution with Trichoderma to induce heat tolerance", "D": "Apply both simultaneously during peak solar noon"},
         "correctOption": "A", "explanation": "Spatial and temporal separation—delivering Trichoderma into the rhizosphere and applying foliar copper with precautions—avoids lethal contact."},
    ]

    # 20 Subjective Questions (150-400 words model answers, outlinePoints, maxMarks, questionType, difficulty, syllabusTopic)
    subj_questions = [
        {
            "id": "PTH215-U3-SUB01",
            "questionType": "DEFINITION",
            "maxMarks": 3,
            "difficulty": "Easy",
            "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms",
            "questionText": "Define mycoparasitism as exhibited by Trichoderma spp. and distinguish it from antibiosis.",
            "modelAnswer": "Mycoparasitism is a direct biological antagonistic phenomenon wherein one fungus (the mycoparasite) detects, physically attacks, parasitizes, and consumes another living fungus (the host) as a nutritional substrate. In the context of *Trichoderma* spp., mycoparasitism represents a complex, sequential morphogenetic and biochemical cascade comprising chemotropic hyphal growth, recognition mediated by surface lectins, firm adhesion, helical coiling around host hyphae, differentiation of swollen appressoria or hook-like penetration structures, and localized discharge of cell-wall degrading enzymes (CWDEs: endochitinases, beta-1,3-glucanases, and proteases) that breach the host cell wall and drive necrotrophic nutrient absorption.\n\nIn contrast, **antibiosis** is an indirect, chemical-mediated antagonistic interaction that operates without direct physical contact. In antibiosis, *Trichoderma* biosynthesizes and secretes low-molecular-weight secondary metabolites and volatile organic compounds (such as peptaibols, 6-pentyl-alpha-pyrone, gliovirin, and gliotoxin) into the surrounding rhizosphere or extracellular matrix. These chemical compounds diffuse through soil water films and inhibit, disrupt, or kill phytopathogenic fungi by depolarizing plasma membranes, uncoupling oxidative phosphorylation, or blocking vital protein synthesis. While mycoparasitism is a contact-dependent physical and enzymatic predation, antibiosis is diffuse chemical warfare.",
            "outlinePoints": [
                "Definition of mycoparasitism as direct physical parasitism and consumption of one fungus by another",
                "Sequential stages of Trichoderma mycoparasitism (chemotropism, coiling, appressoria, CWDE lysis)",
                "Definition of antibiosis as contact-independent inhibition via secreted secondary metabolites",
                "Key contrasts: physical contact requirement, localization, and physiological mechanisms"
            ]
        },
        {
            "id": "PTH215-U3-SUB02",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Easy",
            "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms",
            "questionText": "Describe the cultural and morphological characteristics of Trichoderma harzianum and Trichoderma viride.",
            "modelAnswer": "*Trichoderma* species are fast-growing soil ascomycetes with distinct macroscopic and microscopic characteristics:\n\n**1. Cultural Characteristics on Agar Media (PDA):**\n- *Growth Rate:* Extremely rapid, with colonies covering an entire 90 mm Petri dish within 48 to 72 hours at 25–28°C.\n- *Colony Appearance:* Initially, the mycelium appears as a sparse, submerged, or loose aerial white cottony mat. Within 3 to 5 days, synchronous sporulation occurs, transforming the colony into dense, radiating concentric rings or scattered pustules ranging from brilliant emerald green to dark forest green or yellowish-green. *T. viride* typically exhibits rougher, granular dark green pustules accompanied by a characteristic sweet coconut odor (from 6-PAP), whereas *T. harzianum* colonies form smoother, yellowish-green to olive-green concentric bands.\n- *Reverse Colony:* Colorless, pale yellowish, or light tan, without producing dark brown diffusable pigments.\n\n**2. Microscopic Characteristics:**\n- *Hyphae:* Septate, hyaline, smooth-walled, branching repeatedly at right angles.\n- *Conidiophores:* Highly branched pyramidal structures where primary branches arise at nearly 90° angles to the main axis, terminating in smaller lateral branches.\n- *Phialides:* Flask-shaped or ampulliform cells, typically arranged in whorls of 2 to 4 (divergent), swollen in the middle with a slender neck.\n- *Conidia (Phialoconidia):* Single-celled, hyaline to light green, globose to subglobose or short-oval, smooth-walled in *T. harzianum* (2.8–3.2 µm) and finely warted (roughened) in *T. viride* (3.5–4.5 µm).\n- *Chlamydospores:* Produced in aged cultures; thick-walled, unicellular, subglobose, intercalary or terminal.",
            "outlinePoints": [
                "Rapid colony expansion on PDA (covers dish in 48–72 hours)",
                "Emerald green to olive-green conidial pustules and concentric sporulation rings",
                "Pyramidal, right-angled branched conidiophores with whorls of flask-shaped phialides",
                "Globose/oval conidia (smooth in T. harzianum, warted in T. viride) and resting chlamydospores"
            ]
        },
        {
            "id": "PTH215-U3-SUB03",
            "questionType": "LONG_ANSWER",
            "maxMarks": 8,
            "difficulty": "Medium",
            "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms",
            "questionText": "Detail the step-by-step mechanism of the mycoparasitic cascade of Trichoderma against soil-borne fungal pathogens.",
            "modelAnswer": "The mycoparasitic cascade executed by *Trichoderma* against soil-borne phytopathogenic fungi (*Rhizoctonia solani*, *Sclerotium rolfsii*, *Fusarium oxysporum*, *Pythium ultimum*) is an orchestrated five-stage biological process:\n\n**1. Chemotropic Sensing and Directed Growth (Chemotaxis):**\n*Trichoderma* detects host pathogens at a distance. Target fungi constantly release trace metabolic byproducts, monomeric sugars, and degradation oligomers into the soil solution. Specialized membrane receptors on *Trichoderma* hyphae sense these chemical concentration gradients, activating Mitogen-Activated Protein Kinase (MAPK) signaling pathways (e.g., *Tmk1*). This reorients hyphal tip polarity, driving chemotropic directional extension directly toward the advancing host hyphae.\n\n**2. Molecular Host Recognition and Binding:**\nUpon physical approach, mutual recognition occurs at the molecular level. *Trichoderma* recognizes specific carbohydrate-binding proteins (**lectins**) present on the outer cell wall surface of the target pathogen. *Trichoderma* cell walls expose complementary carbohydrate ligands (galactose, glucose, mannose residues) that dock tightly with host lectins, securing irreversible physical attachment between the two fungal organisms.\n\n**3. Coiling and Infection Structure Differentiation:**\nFollowing attachment, *Trichoderma* hyphae grow along the contours of the host filament, wrapping around it in tight, helical coils. Under the influence of mechanical contact and chemical cues, hyphal tips arrest elongation and differentiate into specialized infection structures: swollen **appressoria**, clavate terminal holdfasts, and papilla-like hook structures that anchor the mycoparasite firmly against the host surface.\n\n**4. Coordinated Secretion of Cell Wall Degrading Enzymes (CWDEs):**\nWithin the enclosed appressorial-host contact junction, *Trichoderma* discharges a concentrated cocktail of hydrolytic enzymes:\n- *Alkaline Proteases (Prb1):* Cleave outer wall structural mannoproteins to unmask embedded structural fibers.\n- *Endochitinases (Ech42) and Exochitinases (Nag1):* Cleave internal and terminal beta-1,4-bonds of chitin microfibrils.\n- *Beta-1,3- and Beta-1,6-Glucanases:* Dissolve the structural glucan polymer scaffolding.\n- *Cellulases:* Specifically utilized when parasitizing oomycetes (*Pythium*, *Phytophthora*).\n\n**5. Hyphal Penetration, Lysis, and Necrotrophic Exploitation:**\nThe combined action of enzymatic digestion and localized mechanical turgor pressure punctures holes through the host wall. *Trichoderma* penetration hyphae invade the pathogen lumen, proliferate internally, absorb protoplasmic nutrients, and cause total cytoplasmic coagulation, membrane breakdown, and vacuolar collapse of the pathogen.",
            "outlinePoints": [
                "Stage 1: Chemotropic sensing and MAPK-mediated directional hyphal growth",
                "Stage 2: Molecular host recognition mediated by surface lectins and carbohydrate docking",
                "Stage 3: Helical hyphal coiling and differentiation of appressoria/holdfasts",
                "Stage 4: Synergistic discharge of CWDEs (endochitinases, beta-glucanases, Prb1 proteases)",
                "Stage 5: Wall penetration, hyphal lumen invasion, cytoplasmic lysis, and necrotrophic consumption"
            ]
        },
        {
            "id": "PTH215-U3-SUB04",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR",
            "questionText": "Explain the role and chemical nature of peptaibols produced by Trichoderma species.",
            "modelAnswer": "Peptaibols are a unique family of linear, non-ribosomal polypeptide antibiotics biosynthesized by *Trichoderma* species (e.g., *T. harzianum*, *T. viride*, *T. virens*). They play a decisive role in fungal antibiosis and plant immune priming.\n\n**Chemical Nature:**\n1. *Atypical Amino Acids:* Peptaibols consist of 11 to 20 amino acid residues characterized by an unusually high proportion of non-proteinogenic amino acids, primarily **alpha-aminoisobutyric acid (Aib)** and isovaline (Iva).\n2. *Termini Modifications:* Their N-terminus is blocked by an acetyl group (Ac-), while their C-terminus is modified into a 1,2-amino alcohol (such as phenylalaninol, leucinol, or valinol).\n3. *Biosynthesis:* They are biosynthesized independently of ribosomes by giant multienzyme complexes known as Non-Ribosomal Peptide Synthetases (NRPS), which sequentially condense amino acid substrates.\n\n**Biological Function & Mode of Action:**\n- *Membrane Pore Formation:* Because of their amphipathic alpha-helical conformation, peptaibols insert spontaneously into the hydrophobic lipid bilayer of target fungal and oomycete plasma membranes. Multiple peptaibol molecules oligomerize into voltage-dependent transmembrane ion channels (barrel-stave model).\n- *Osmotic Lysis:* These pores allow the uncontrolled outward leakage of cytoplasmic potassium ($K^+$), ATP, and vital electrolytes, dissipating transmembrane electrical potential and driving osmotic fungal lysis.\n- *Synergism with Enzymes:* Peptaibols act in profound synergy with *Trichoderma* endochitinases; chitinases degrade the wall matrix, enabling peptaibols instantaneous access to the host membrane.\n- *Plant Defense Elicitation:* Peptaibols serve as Microbe-Associated Molecular Patterns (MAMPs) that trigger systemic defense responses in host plant roots.",
            "outlinePoints": [
                "Linear non-ribosomal peptide structure containing alpha-aminoisobutyric acid (Aib)",
                "N-terminal acetylation and C-terminal amino alcohol modification",
                "Assembly by multienzymatic Non-Ribosomal Peptide Synthetases (NRPS)",
                "Mechanism: amphipathic helical insertion, transmembrane pore formation, and electrolyte leakage",
                "Synergistic action with endochitinases and elicitation of plant immune defense"
            ]
        },
        {
            "id": "PTH215-U3-SUB05",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR",
            "questionText": "Discuss 6-pentyl-alpha-pyrone (6-PAP) and gliovirin as major antifungal metabolites of Trichoderma.",
            "modelAnswer": "*Trichoderma* species produce an array of bioactive secondary metabolites, among which 6-pentyl-alpha-pyrone (6-PAP) and gliovirin are two of the most prominent:\n\n**1. 6-Pentyl-alpha-pyrone (6-PAP):**\n- *Origin and Chemical Nature:* 6-PAP is a low-molecular-weight volatile lactone (pyrone derivative) biosynthesized predominantly by *Trichoderma viride* and *Trichoderma atroviride* via polyketide pathways. It is responsible for the pleasing, distinctive sweet coconut aroma released by actively growing cultures.\n- *Biological Activity:* As a volatile lipophilic compound, 6-PAP diffuses through soil air-voids and water films. It inhibits spore germination, hyphal growth, and sclerotial formation in several major plant pathogens, including *Botrytis cinerea*, *Rhizoctonia solani*, and *Fusarium oxysporum*. Furthermore, 6-PAP exerts repulsive and deterrent effects against soil-dwelling insect pests and enhances root elongation at low concentrations.\n\n**2. Gliovirin:**\n- *Origin and Chemical Nature:* Gliovirin is a sulfur-containing diketopiperazine antibiotic produced by the 'P-group' strains of *Trichoderma virens* (formerly *Gliocladium virens*).\n- *Biological Activity:* Gliovirin possesses exceptionally potent, selective activity against Oomycetes. It arrests the germination of zoospores and encysted oospores of *Pythium ultimum* and *Phytophthora cactorum* at sub-micromolar concentrations. Its internal disulfide bridge reacts with essential sulfhydryl groups in fungal enzymes, terminating respiration. Strains producing high levels of gliovirin provide superior biological control of seedling damping-off in cotton, sugarbeet, and nursery vegetables.",
            "outlinePoints": [
                "6-PAP: volatile lactone from T. viride, source of sweet coconut aroma",
                "6-PAP activity: diffusion through soil pores, suppression of Botrytis and Fusarium spore germination",
                "Gliovirin: sulfur-containing diketopiperazine produced by T. virens 'P' strains",
                "Gliovirin activity: high selective lethality against oomycetes (Pythium, Phytophthora) via thiol inactivation"
            ]
        },
        {
            "id": "PTH215-U3-SUB06",
            "questionType": "LONG_ANSWER",
            "maxMarks": 8,
            "difficulty": "Medium",
            "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR",
            "questionText": "Explain how Trichoderma colonizes the rhizosphere and primes plant defenses via Induced Systemic Resistance (ISR).",
            "modelAnswer": "*Trichoderma* is an opportunistic plant symbiont that establishes intimate root associations, functioning as a plant growth promoter and immune elicitor:\n\n**1. Rhizosphere Colonization and Endophytic Association:**\nFollowing seed treatment or soil drenching, *Trichoderma* conidia germinate and colonize the rhizosphere mucilage. Hyphae attach to root hair surfaces and penetrate the outer root epidermal layers and outer root cortex. Importantly, colonization is strictly self-limiting: hyphae do not invade beyond the first few cortical cell layers and never penetrate the plant vascular stele, prevented by localized host cell wall papillae (callose) and basal host defenses.\n\n**2. Secretion of MAMPs and Host Perception:**\nDuring root colonization, *Trichoderma* secretes a variety of elicitors recognized by plant pattern recognition receptors (PRRs) as Microbe-Associated Molecular Patterns (MAMPs). Key elicitors include:\n- *Hydrolytic Enzymes:* Swollenin, endopolygalacturonases, and xylanases.\n- *Metabolites:* Peptaibols and 6-PAP.\n- *Structural Cell Wall Fragments:* Chitin fragments, beta-glucan oligosaccharides, and ergosterol.\n\n**3. Signaling Cascade Activation:**\nPerception of these elicitors initiates transmembrane calcium influx, an oxidative burst of low-level reactive oxygen species ($H_2O_2$), and the activation of mitogen-activated protein kinases. Unlike classic systemic acquired resistance (SAR) which is triggered by necrotizing pathogens and mediated by salicylic acid (SA), *Trichoderma*-mediated ISR predominantly activates the **Jasmonic Acid (JA) and Ethylene (ET)** signaling defense pathways, though substantial cross-talk with the SA pathway also occurs.\n\n**4. The 'Primed' Immune State and Defense Expression:**\nISR does not incur heavy energy costs on the plant under non-infected conditions. Instead, it places the plant in an alert state called **'priming'**. When subsequently challenged by a foliar or soil pathogen (*Colletotrichum*, *Alternaria*, *Fusarium*), primed plants mobilize defenses faster and stronger:\n- Rapid upregulation of defense enzymes: Phenylalanine Ammonia-Lyase (PAL), Peroxidase (POX), and Polyphenol Oxidase (PPO).\n- Accelerated deposition of callose and lignin along vascular walls, physically blocking pathogen ingress.\n- Heightened accumulation of antifungal phytoalexins and Pathogenesis-Related (PR) proteins (PR-1, PR-2 beta-glucanases, PR-3 chitinases).",
            "outlinePoints": [
                "Superficial root cortex colonization without vascular ingress",
                "Elicitor/MAMP release: swollenin, peptaibols, xylanases, chitin fragments",
                "Signal transduction via Jasmonic Acid (JA) and Ethylene (ET) pathways (ISR)",
                "Concept of 'priming' (sensitized defensive alertness without growth penalty)",
                "Post-challenge defense mobilization: PAL, peroxidase, phytoalexins, callose, and PR proteins"
            ]
        },
        {
            "id": "PTH215-U3-SUB07",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR",
            "questionText": "Compare and contrast Systemic Acquired Resistance (SAR) and Induced Systemic Resistance (ISR) in plants, highlighting Trichoderma's role.",
            "modelAnswer": "Plants possess two major systemic inducible defense pathways—Systemic Acquired Resistance (SAR) and Induced Systemic Resistance (ISR)—that differ in their inductive triggers, hormonal signaling cascades, and biological characteristics:\n\n| Parameter | Systemic Acquired Resistance (SAR) | Induced Systemic Resistance (ISR) |\n|---|---|---|\n| **Primary Inducing Agent** | Necrotizing plant pathogens (viruses, bacteria, fungi) causing localized necrosis | Beneficial root-colonizing microbes (e.g., *Trichoderma*, *Pseudomonas fluorescens*, PGPR) |\n| **Signaling Phytohormone** | Salicylic Acid (SA) | Jasmonic Acid (JA) and Ethylene (ET) |\n| **Key Regulatory Protein** | NPR1 (Nonexpressor of PR genes 1) translocated into nucleus | NPR1 (acts in cytosol, independent of SA accumulation) |\n| **Defense Marker Genes** | Pathogenesis-Related proteins (PR-1, PR-2 beta-glucanase, PR-5 thaumatin-like) | Plant defensins (*PDF1.2*), thionins, vegetative storage proteins (VSP) |\n| **Plant Fitness Cost** | Direct metabolic reallocation cost; constitutive PR synthesis occurs even without pathogen | Low energy cost; operates through 'priming'—defenses deployed only upon actual pathogen challenge |\n| **Target Spectrum** | Broad-spectrum resistance, highly effective against biotrophic/hemibiotrophic pathogens | Highly effective against necrotrophic pathogens, chewing insects, and root wilt fungi |\n| **Trichoderma Interaction** | Can induce SAR-like responses via certain xylanase elicitors | Serves as the quintessential model agent triggering JA/ET-mediated systemic priming |",
            "outlinePoints": [
                "Inducing agents: necrotizing pathogens (SAR) vs beneficial root colonizers like Trichoderma (ISR)",
                "Hormonal signaling: Salicylic Acid (SAR) vs Jasmonic Acid and Ethylene (ISR)",
                "NPR1 role: nuclear translocation (SAR) vs cytosolic mediation (ISR)",
                "Marker proteins: PR-1/PR-5 (SAR) vs PDF1.2 plant defensins (ISR)",
                "Metabolic cost: constitutive expression (SAR) vs sensitized priming (ISR)"
            ]
        },
        {
            "id": "PTH215-U3-SUB08",
            "questionType": "LONG_ANSWER",
            "maxMarks": 8,
            "difficulty": "Medium",
            "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces",
            "questionText": "Describe the life cycle, parasitism mechanism, and agronomic utility of Pochonia chlamydosporia in nematode management.",
            "modelAnswer": "*Pochonia chlamydosporia* (formerly *Verticillium chlamydosporium*) is a facultative parasitic fungus belonging to the order Hypocreales, recognized as one of the most effective biocontrol agents against sedentary endoparasitic plant nematodes (notably root-knot nematodes *Meloidogyne spp.* and cyst nematodes *Heterodera* and *Globodera spp.*).\n\n**1. Life Cycle and Dual Ecological Niches:**\n*P. chlamydosporia* exhibits a dual ecological lifestyle:\n- *Rhizosphere Saprophyte / Endophyte:* In the absence of nematode hosts, the fungus colonizes the root mucilage and epidermal tissue of host plants as a benign endophyte and saprophyte, utilizing root exudates and decaying soil organic matter without causing phytotoxicity.\n- *Nematode Parasite:* When susceptible plant-parasitic nematodes infect roots and form reproductive females that produce external egg masses in gelatinous matrices, the fungus switches to an aggressive parasitic phase.\n\n**2. Mechanism of Parasitism on Nematode Eggs:**\n1. *Chemotropic Attraction & Adhesion:* Hyphae grow through the gelatinous matrix surrounding nematode egg masses. Upon contact with the egg surface, hyphae attach firmly to the vitelline membrane.\n2. *Appressorial Differentiation:* Hyphal tips swell into simple, lobed **appressoria** that cement the fungus to the eggshell.\n3. *Enzymatic Degradation of Eggshell:* The nematode eggshell is a formidable multi-layered biological barrier consisting of an outer vitelline protein layer, a thick median chitinous layer, and an inner impermeable lipid/ascaroside layer. The appressorium secretes high concentrations of **VCP1**, a 33 kDa subtilisin-like neutral serine endopeptidase. VCP1 degrades the vitelline protein coat, exposing the underlying chitin fibrils. Concurrently, the fungus secretes endochitinases that hydrolyze the chitin layer, followed by lipases that dissolve the lipid barrier.\n4. *Hyphal Penetration & Embryo Consumption:* A slender penetration peg breaches the softened eggshell. Hyphae ramify inside the egg, consuming the embryonic juvenile ($J_1$ or $J_2$), causing total embryonic arrest. The internal cavity of the egg is transformed into a dense cluster of thick-walled **chlamydospores**, ensuring environmental persistence.\n\n**3. Agronomic Utility:**\n- Highly effective in vegetable greenhouses, protected cultivation, and polyhouses against *Meloidogyne incognita* and *M. javanica* in tomato, cucumber, and brinjal.\n- Applied as talc formulations at 20 g/m² in nursery beds or 5–10 kg/ha mixed with FYM, drastically lowering nematode reproduction factors ($Pf/Pi$) over multiple cropping cycles.",
            "outlinePoints": [
                "Taxonomic identity and dual lifestyle (saprophyte/endophyte and nematode parasite)",
                "Structure of nematode eggshell (vitelline coat, chitin layer, lipid membrane)",
                "Appressorial docking and action of VCP1 serine protease and chitinases",
                "Internal hyphal proliferation, embryonic consumption, and chlamydospore differentiation",
                "Field agronomic applications in protected cultivation and nursery beds"
            ]
        },
        {
            "id": "PTH215-U3-SUB09",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces",
            "questionText": "Detail the hyperparasitic interaction between Ampelomyces quisqualis and powdery mildew fungi (Erysiphaceae).",
            "modelAnswer": "*Ampelomyces quisqualis* is a specialized, obligate hyperparasite that targets phytopathogenic fungi belonging to the family Erysiphaceae, the causal agents of powdery mildew across viticulture, horticulture, and ornamentals (*Erysiphe*, *Podosphaera*, *Golovinomyces*, *Leveillula*).\n\n**Mechanism of Hyperparasitism:**\n1. *Spore Germination & Direct Penetration:* Water-borne conidia of *A. quisqualis* land on powdery mildew colonies on leaf surfaces. In the presence of free water or high relative humidity (>=85%), conidia germinate within 6 to 12 hours, producing germ tubes that penetrate directly through the cell walls of powdery mildew hyphae, conidiophores, and immature cleistothecia/chasmothecia without forming prominent appressoria.\n2. *Intrahyphal Growth:* Once inside, *A. quisqualis* hyphae grow longitudinally through the internal lumen of the host hyphae, passing from cell to cell via host septal pores.\n3. *Pycnidial Differentiation:* Within 5 to 7 days, internal hyphae swell and differentiate into characteristic intrahyphal, pyriform, yellowish-brown **pycnidia** inside the swollen cells of mildew conidiophores. This completely halts the production of powdery mildew conidia.\n4. *Colony Collapse:* The infected powdery mildew colony loses its white powdery appearance, turns dull brown, collapses, and undergoes complete cellular lysis.\n5. *Overwintering:* The hyperparasite overwinters as mature pycnidia inside the cleistothecia of the host on fallen leaves and bark crevices, resuming attack during the subsequent spring season.",
            "outlinePoints": [
                "Target specificity against Erysiphaceae powdery mildews",
                "Requirement of high humidity (>=85%) for direct hyphal penetration",
                "Internal longitudinal hyphal growth through host septal pores",
                "Intrahyphal pycnidial formation arresting mildew conidiophore reproduction",
                "Overwintering in host cleistothecia and commercial deployment (AQ10)"
            ]
        },
        {
            "id": "PTH215-U3-SUB10",
            "questionType": "LONG_ANSWER",
            "maxMarks": 8,
            "difficulty": "Medium",
            "syllabusTopic": "Mass production of fungal biocontrol agents",
            "questionText": "Describe the solid-state fermentation (SSF) technology for mass production of Trichoderma using agricultural byproducts.",
            "modelAnswer": "Solid-State Fermentation (SSF) is the primary, cost-effective industrial biotechnology utilized across India and developing nations for mass-producing high-titer conidial formulations of *Trichoderma* spp.:\n\n**1. Selection and Preparation of Agro-Substrates:**\n- *Primary Substrates:* Coarse broken cereal grains (sorghum, pearl millet/bajra, maize, wheat) or agricultural industrial residues (wheat bran, paddy straw, sugarcane bagasse, coffee husk).\n- *Nutritional Supplements:* Substrates are amended with 1–2% cane molasses or jaggery (carbon source), 1% yeast extract or urea (nitrogen source), and 1–2% **calcium sulfate (gypsum)**. Gypsum serves a critical physical function: it coats grain surfaces, preventing caking and agglomeration, thereby maintaining interstitial aeration pores throughout the substrate bed.\n- *Moisture Adjustment:* Tap water is blended to achieve an optimal initial substrate moisture level of **50% to 60%**. Excess moisture (>65%) causes compaction and bacterial spoilage, whereas inadequate moisture (<40%) arrests fungal mycelial expansion.\n\n**2. Packaging and Autoclave Sterilization:**\nSubstrate batches (0.5 to 1.5 kg) are loaded into high-density **polypropylene (PP) bags** fitted with breathable, non-absorbent cotton plugs or hydrophobic microporous filter patches (0.2 µm pore size) to allow sterile gas exchange. Bags are steam-autoclaved at 121°C (15 psi) for 60 to 90 minutes to ensure absolute destruction of indigenous bacterial and fungal spores. Bags are cooled under sterile laminar airflow.\n\n**3. Inoculation and Incubation:**\nEach bag is aseptically inoculated with 5–10 ml of a 5-day-old liquid mother culture or conidial suspension ($10^7$ CFU/ml) of *Trichoderma*. Bags are gently agitated to distribute the inoculum evenly, then incubated in environmentally controlled growth chambers maintained at **25°C to 28°C** and **80% to 85% relative humidity**.\n\n**4. Colonization and Conidiation Dynamics:**\n- *Days 1–4:* Rapid proliferation of white cottony vegetative mycelium throughout the grain matrix.\n- *Days 5–7:* Bags are lightly shaken to break up mycelial mats and promote internal aeration.\n- *Days 8–12:* Dense green conidial sporulation occurs across grain surfaces, yielding vibrant emerald crusts with conidial counts exceeding **$1 \times 10^9$ to $5 \times 10^9$ CFU per gram**.\n\n**5. Harvesting and Processing:**\nThe colonized substrate is emptied into sterile stainless steel trays and subjected to gentle dehumidified air drying at <=30°C until moisture drops to 8%. The dry colonized grain mass is ground and pulverized in a hammer mill, sifted through a 100-mesh sieve, and blended with carrier talc for commercial distribution.",
            "outlinePoints": [
                "Agro-substrate selection (sorghum, bajra, wheat bran) and gypsum amendment",
                "Moisture optimization (50–60%) and PP bag autoclave sterilization at 121°C",
                "Aseptic mother culture inoculation and controlled incubation (25–28°C, 80% RH)",
                "Mycelial proliferation, mid-cycle shaking, and emerald green conidiation (>1x10^9 CFU/g)",
                "Dehumidified tray drying at <=30°C, milling, and talc carrier blending"
            ]
        },
        {
            "id": "PTH215-U3-SUB11",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Mass production of fungal biocontrol agents",
            "questionText": "Compare Solid-State Fermentation (SSF) and Submerged Liquid Fermentation (SLF) for the mass production of Trichoderma.",
            "modelAnswer": "Industrial mass manufacturing of *Trichoderma* relies on two fundamental biotechnological paradigms—Solid-State Fermentation (SSF) and Submerged Liquid Fermentation (SLF):\n\n| Parameter | Solid-State Fermentation (SSF) | Submerged Liquid Fermentation (SLF) |\n|---|---|---|\n| **Substrate Medium** | Solid agro-wastes (cereal grains, wheat bran, straw) with 50–60% moisture | Liquid nutrient broth (molasses-yeast broth, corn steep liquor, PDB) |\n| **Bioreactor Equipment** | Shallow trays, plastic bags, or rotating horizontal drums; low capital cost | Stainless steel stirred-tank industrial fermenters with impellers; high capital cost |\n| **Primary Propagule Form** | Abundant, desiccation-resistant aerial asexual **conidia** (phialoconidia) | Predominantly vegetative mycelial biomass and thick-walled **chlamydospores** |\n| **Oxygenation & Heat Transfer** | Diffusion-limited; metabolic heat dissipation can be difficult in thick beds | Highly efficient via continuous forced sterile aeration (0.8–1.0 vvm) and cooling jackets |\n| **Fermentation Cycle** | Slower; requires 10 to 14 days for complete sporulation | Rapid; achieves maximum biomass in 72 to 96 hours |\n| **Risk of Contamination** | Moderate; difficult to detect localized bacterial pockets in bags | High catastrophic risk; a single contaminant ruins an entire 5,000-liter batch |\n| **Storage Shelf-Life** | Highly stable aerial conidia exhibit 6–8 months shelf-life in dry talc | Liquid mycelium has shorter shelf-life; requires rapid stabilization or biphasic transfer |",
            "outlinePoints": [
                "Substrate nature: solid agricultural grains vs liquid nutrient broth",
                "Bioreactor engineering: simple bags/trays vs automated stirred-tank fermenters",
                "Propagule yield: aerial hydrophobic conidia (SSF) vs chlamydospores and mycelium (SLF)",
                "Process kinetics: 10–14 days cycle (SSF) vs 72–96 hours rapid cycle (SLF)",
                "Capital cost, contamination vulnerability, and commercial formulation shelf-life"
            ]
        },
        {
            "id": "PTH215-U3-SUB12",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 5,
            "difficulty": "Medium",
            "syllabusTopic": "Mass production of fungal biocontrol agents",
            "questionText": "Explain the concept of two-stage biphasic fermentation in the commercial manufacturing of fungal biocontrol agents.",
            "modelAnswer": "Two-stage biphasic fermentation is an advanced hybrid manufacturing strategy designed to exploit the distinct advantages of both submerged liquid fermentation and solid-state fermentation while eliminating their individual limitations:\n\n**1. Stage 1: Liquid Phase (Rapid Biomass Multiplication):**\n*Trichoderma* is cultivated in automated stirred-tank liquid bioreactors containing inexpensive carbon and nitrogen sources (cane molasses 2–3%, yeast extract 0.5%, or corn steep liquor). Under optimal agitation (150–200 rpm), controlled temperature (28°C), and continuous sterile aeration, the fungus grows exponentially. Within **72 to 96 hours**, the system generates an enormous concentration of dense vegetative mycelium and young chlamydospores, achieving high volumetric productivity that is difficult to match on solid grains.\n\n**2. Stage 2: Solid Phase (Curing and High-Density Conidiation):**\nHarvested liquid biomass (mycelial broth) is blended directly into sterilized, moisture-absorbent solid carriers—such as sterilized wheat bran, talc powder, or vermiculite amended with trace nutrients—at a defined ratio (e.g., 1:2 w/w) to reach approximately 40–45% moisture. The blended mixture is spread into shallow sterile trays in humidity-controlled cleanrooms for **4 to 6 days**.\n\n**Commercial Advantages:**\n- *Synchronous Sporulation:* The shift from a liquid submerged environment to an aerated solid surface mimics natural aerial conditions, cueing massive, synchronous differentiation of hydrophobic, desiccation-tolerant aerial **conidia**.\n- *High Spore Titers & Shelf-Life:* The resulting product combines the high throughput of fermenters with the rugged storage shelf-life of conidia, yielding stable viable counts exceeding $1 \times 10^9$ CFU/g.",
            "outlinePoints": [
                "Definition of biphasic fermentation as a hybrid liquid-to-solid production system",
                "Stage 1: submerged liquid bioreactor multiplying vegetative mycelium in 72–96 hours",
                "Stage 2: blending liquid broth into sterile solid carrier trays for 4–6 days curing",
                "Physiological cues triggering massive, synchronous aerial conidiation",
                "Commercial benefits: maximum volumetric yield, operational speed, and extended shelf-life"
            ]
        },
        {
            "id": "PTH215-U3-SUB13",
            "questionType": "LONG_ANSWER",
            "maxMarks": 8,
            "difficulty": "Medium",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "Detail the formulation technology of talc-based Trichoderma powders, including inert ingredients, quality parameters, and packaging.",
            "modelAnswer": "Talc-based wettable powders represent over 80% of all commercially marketed *Trichoderma* biocontrol formulations in India due to their low cost, chemically inert nature, and compatibility with standard farmer application equipment:\n\n**1. Carrier Material and Additives:**\n- *Carrier:* High-grade **talc powder (hydrated magnesium silicate, $Mg_3Si_4O_{10}(OH)_2$)** ground to a fine **300-mesh** particle size. Talc has neutral pH (7.0 to 8.0), low moisture absorbency, non-abrasive texture, and is chemically inert toward fungal conidia.\n- *Sterilization:* Raw talc contains native thermophilic bacterial and fungal spores. It must undergo fractional sterilization (steam autoclaving at 121°C for 60 minutes on two consecutive days, or dry heat at 160°C for 3 hours) prior to fungal blending.\n- *Adhesive / Binder:* **Carboxymethyl Cellulose (CMC)** or gum arabic is added at **0.5% to 1.0%** (w/w). When mixed with water prior to seed dressing, CMC hydrates into a viscous adhesive that binds conidia firmly to seed coats.\n- *Buffering & Osmoprotectants:* Calcium carbonate ($CaCO_3$, 1.5%) is added to buffer formulation pH, while skim milk powder or trehalose (1%) acts as an osmoprotectant preserving spore membrane integrity during desiccation.\n\n**2. Blending and Drying:**\nColonized fungal biomass (conidial harvest or biphasic mash) is intimately blended with sterilized talc carrier in an industrial ribbon blender at a ratio ensuring an initial count $>5 \times 10^8$ CFU/g. The formulated powder is cured under laminar dehumidified air (<30°C) until moisture is reduced to **7.0% to 8.0%**.\n\n**3. Statutory Quality Benchmarks (CIB&RC Standards):**\n- *Viable Spore Density:* Minimum **$2 \times 10^6$ CFU/g** throughout the declared shelf-life.\n- *Moisture Content:* Maximum **8.0%**.\n- *Biological Purity:* Contaminating microorganisms must not exceed $1 \times 10^4$ CFU/g, with complete absence of human enteropathogens (*Salmonella*, *Shigella*, pathogenic *E. coli*).\n- *Bio-efficacy Test:* Must produce >=70% mycelial growth inhibition against *Rhizoctonia solani* in a dual-culture Petri plate assay.\n\n**4. Packaging and Storage:**\nPackaged in hermetically heat-sealed multi-layered laminated aluminum foil pouches (100–150 gauge) that exclude atmospheric water vapor and UV light. Stored under cool, dry conditions (<25°C) with an approved commercial shelf-life of 6 months.",
            "outlinePoints": [
                "Characteristics of 300-mesh talc carrier (inert, neutral pH, fine particle size)",
                "Double-steam sterilization of carrier to eliminate indigenous spore contaminants",
                "Incorporation of additives: 1% CMC adhesive, CaCO3 buffer, and osmoprotectants",
                "Moisture adjustment to 7–8% under controlled dehumidified drying",
                "CIB&RC quality parameters: >=2x10^6 CFU/g, <8% moisture, absence of human pathogens",
                "Laminated aluminum pouch packaging and cool storage conditions"
            ]
        },
        {
            "id": "PTH215-U3-SUB14",
            "questionType": "APPLICATION",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "Describe the operational procedure for seed treatment and seed biopriming using Trichoderma formulations.",
            "modelAnswer": "Seed treatment and biopriming are the most targeted, economical methods of introducing *Trichoderma* into the spermosphere, creating an active protective fungal mantle around emerging seedlings:\n\n**1. Conventional Dry / Slurry Seed Treatment:**\n- *Dosage:* 5 to 10 grams of commercial talc-based *Trichoderma* formulation (minimum $2 \times 10^6$ CFU/g) per 1 kilogram of crop seed.\n- *Slurry Preparation:* To maximize adherence, 50–100 ml of a 10% jaggery (cane sugar) solution or 1% starch/rice gruel solution is prepared in clean water. The talc powder is blended into this liquid to form a smooth, homogeneous, non-dripping slurry.\n- *Coating & Drying:* The slurry is poured over seeds spread on a clean plastic tarpaulin and thoroughly mixed by hand (wearing protective gloves) until every seed is uniformly coated with a pale green film. Treated seeds are spread in a thin layer under shade for 30 to 60 minutes to air-dry before being loaded into seed drills for sowing.\n\n**2. Advanced Seed Biopriming Protocol:**\nBiopriming integrates physiological seed hydration with biological antagonist proliferation prior to field sowing:\n- *Hydration & Inoculation:* Seeds are coated with *Trichoderma* formulation (10 g/kg) and placed in a container with moist sterile vermiculite or lined with moist filter paper at a seed-to-water ratio that initiates early germination metabolism without radicle emergence.\n- *Warm Incubation:* Seeds are wrapped in damp jute hessian bags and incubated at **25°C to 28°C** under warm, moist conditions for **12 to 24 hours**.\n- *Biological Action:* During incubation, seed exudates trigger *Trichoderma* conidia to germinate rapidly. Fungal hyphae proliferate across the seed coat, forming a dense biological shield and invading the outer seed layers. When sown, bioprimed seeds germinate 24–48 hours faster, exhibit high seedling vigor, and show near-complete resistance to pre- and post-emergence damping-off (*Pythium*, *Rhizoctonia*).",
            "outlinePoints": [
                "Dosage: 5–10 g formulation per kg seed using 10% jaggery slurry sticker",
                "Uniform manual seed coating and shade-drying protocol",
                "Biopriming concept: combining controlled hydration with biological colonization",
                "Incubation in moist hessian bags at 25–28°C for 12–24 hours",
                "Field benefits: rapid germination, enhanced vigor, and shield against damping-off"
            ]
        },
        {
            "id": "PTH215-U3-SUB15",
            "questionType": "APPLICATION",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "Outline the step-by-step protocol for Farmyard Manure (FYM) enrichment with Trichoderma for soil application.",
            "modelAnswer": "Broadcasting raw *Trichoderma* powder directly into vast field soils often yields poor results because conidia struggle to survive against indigenous soil microflora without dedicated nutrition. Soil enrichment via Farmyard Manure (FYM) or vermicompost overcomes this limitation by pre-multiplying the biocontrol agent:\n\n**Step-by-Step Enrichment Protocol:**\n1. **Material Requirements (Per Acre Basis):**\n   - Well-decomposed, mature FYM or vermicompost: **100 to 250 kg**.\n   - Commercial talc-based *Trichoderma* formulation ($2 \times 10^6$ CFU/g): **1 to 2.5 kg**.\n   - Jaggery (cane sugar): 1 kg dissolved in 10 liters of water (acts as an initial carbohydrate starter).\n2. **Site Selection:**\n   - An elevated, clean, well-shaded area under tree canopy or thatched shade structure. Direct midday sunlight must be avoided, as ultraviolet radiation and heat (>35°C) are lethal to fungal propagules.\n3. **Layering and Blending:**\n   - Spread a 15–20 cm layer of FYM on the floor or a polythene sheet. Sprinkle a portion of the *Trichoderma* powder and splash with the jaggery water. Repeat with successive layers until a trapezoidal heap of 1 meter height is formed.\n4. **Moisture and Aeration Management:**\n   - Adjust moisture to **40% to 50%** (the mixture should form a ball when squeezed in the hand without water dripping between fingers). Cover the heap loosely with damp gunny bags or banana leaves to conserve humidity while allowing aeration.\n5. **Incubation and Turning:**\n   - Incubate the heap for **7 to 10 days**. On day 4 or 5, turn the heap thoroughly to dissipate internal metabolic heat and provide uniform aeration. Re-moisten if dry.\n6. **Harvest and Field Delivery:**\n   - By day 7 to 10, the entire manure heap is permeated by dense white mycelial threads and dark green conidial crusts, reaching population densities $>1 \times 10^8$ CFU/g. Incorporate into moist soil during final land preparation or ring-apply near root zones of horticultural crops.",
            "outlinePoints": [
                "Material ratios: 1–2.5 kg Trichoderma blended into 100–250 kg well-rotted FYM per acre",
                "Site requirements: elevated shaded location protected from direct sunlight",
                "Heap construction: layering FYM, Trichoderma, and 1% jaggery water starter",
                "Moisture maintenance at 40–50% under moist gunny bag covers",
                "Mid-cycle turning on day 4–5 to dissipate heat and aerate",
                "Field broadcast during final ploughing or localized root zone placement"
            ]
        },
        {
            "id": "PTH215-U3-SUB16",
            "questionType": "CASE_STUDY",
            "maxMarks": 8,
            "difficulty": "Hard",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "A farmer observes damping-off in a chilli nursery caused by Pythium and Rhizoctonia. Evaluate a biological rescue and prevention schedule using Trichoderma.",
            "modelAnswer": "**Case Background:**\nDamping-off in chilli nurseries is a devastating disease complex caused by *Pythium aphanidermatum* (pre-emergence seed rot and watery post-emergence collar collapse) and *Rhizoctonia solani* (wirestem and brown cortical collar girdling). Seedlings collapse in circular patches under conditions of excessive soil moisture and dense nursery sowing.\n\n**Immediate Biological Intervention Schedule:**\n1. **Drainage and Aeration Correction:** Immediately withhold flood watering and open micro-drainage channels around nursery beds to eliminate standing water and reduce relative humidity below 80%.\n2. **Curative Spot Drenching:** In nursery areas showing early localized patch symptoms, drench seedlings and surrounding soil with a fresh, active *Trichoderma viride* or *T. harzianum* liquid suspension:\n   - *Dose:* 10 g talc formulation per liter of water (or 5 ml/L liquid formulation).\n   - *Application:* Apply with a rose-can or knapsack sprayer (nozzle disc removed) directly at the seedling collar zone at a rate of 2–3 liters per square meter. Fungal hyphae rapidly colonize collar tissue, discharging cellulases against *Pythium* and endochitinases against *Rhizoctonia*, arresting lesion spread.\n\n**Preventive Biological Management Protocol for Subsequent Nursery Cycles:**\n1. **Raised Nursery Bed Preparation:** Form raised nursery beds (15 cm high, 1 m wide) with sandy loam soil to guarantee rapid gravitational drainage.\n2. **Soil Bio-Enrichment:** 15 days before sowing, blend 500 g of *Trichoderma* formulation into 50 kg of well-decomposed FYM or vermicompost. Incubate under shade for 7 days, then incorporate into the top 5 cm of nursery bed soil ($500 \\text{ g enriched compost/m}^2$).\n3. **Seed Biopriming:** Treat certified chilli seeds with *Trichoderma* (10 g/kg seed) mixed in 10% jaggery water, then incubate in damp gunny bags for 12 hours prior to line sowing. This establishes an unbroken mycelial mantle over the seed coat.\n4. **Chemical Compatibility Alert:** Ensure that beds treated with *Trichoderma* are NOT sprayed with carbendazim, captan, or thiram. If chemical fungicides were applied previously, maintain an absolute 7 to 10-day safety interval before introducing *Trichoderma*.",
            "outlinePoints": [
                "Diagnosis of chilli damping-off complex (Pythium water-rot and Rhizoctonia wirestem)",
                "Immediate curative drenching at collar region (10 g/L Trichoderma suspension)",
                "Cultural prevention: raised nursery beds (15 cm) ensuring rapid drainage",
                "Soil pre-enrichment with Trichoderma-inoculated FYM 7 days before bed preparation",
                "Seed biopriming protocol (10 g/kg seed in damp cloth for 12 hours)",
                "Strict chemical segregation: avoidance of benzimidazole fungicides"
            ]
        },
        {
            "id": "PTH215-U3-SUB17",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Hard",
            "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms",
            "questionText": "Differentiate between the mycoparasitic modes of action of Trichoderma against filamentous fungi (Rhizoctonia) versus Oomycetes (Pythium).",
            "modelAnswer": "*Trichoderma* demonstrates remarkable physiological plasticity, adapting its enzymatic machinery and antagonistic weapons to the biochemical architecture of the target pathogen:\n\n| Parameter | Attack Against True Fungi (*Rhizoctonia solani*) | Attack Against Oomycetes (*Pythium ultimum* / *Phytophthora*) |\n|---|---|---|\n| **Target Wall Composition** | High content of **chitin** (beta-1,4-N-acetylglucosamine polymers) and beta-1,3-glucans | **Cellulose** (beta-1,4-glucan) and beta-1,3- / beta-1,6-glucans; chitin is absent |\n| **Inducible Enzyme Battery** | Massive upregulation of **endochitinases (Ech42)**, exochitinases (Nag1), and Prb1 proteases | Predominant secretion of **cellulases (Cel7b)**, beta-1,3-glucanases, and beta-1,6-glucanases |\n| **Physical Infection Structure** | Extensive helical hyphal coiling, tightly encircling the pathogen hypha, forming multi-lobed appressoria | Coiling is less pronounced; predominantly loose hyphal wrapping, branching, and direct lateral penetration |\n| **Secondary Metabolite Weaponry** | Highly sensitive to **peptaibols** and **gliotoxin**, which disrupt fungal ergosterol-rich membranes | Highly sensitive to **gliovirin** and **surfactin-like pyrones**, which rapidly lyse zoospore membranes |\n| **Lysis Kinetics** | Slower; requires digestion of thick, melanized fungal walls and sclerotial rinds | Extremely rapid; oomycete hyphae and swimming zoospores lyse within hours of exposure |",
            "outlinePoints": [
                "Cell wall differences: chitin/beta-glucans in Rhizoctonia vs cellulose/beta-glucans in Pythium",
                "Enzyme profile: endochitinase (Ech42) induction vs cellulase/glucanase induction",
                "Morphological structures: extensive helical coiling vs loose hyphal contact and lateral penetration",
                "Antibiotic sensitivity: peptaibols/gliotoxin vs gliovirin-mediated zoospore lysis",
                "Kinetics of degradation: structural sclerotial digestion vs rapid oomycete plasmolysis"
            ]
        },
        {
            "id": "PTH215-U3-SUB18",
            "questionType": "APPLICATION",
            "maxMarks": 6,
            "difficulty": "Hard",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "Assess the compatibility of Trichoderma with synthetic chemical pesticides, inorganic fertilizers, and biofertilizers.",
            "modelAnswer": "Integrating *Trichoderma* successfully into Integrated Pest and Disease Management (IPM/IDM) systems requires an understanding of its chemical and biological compatibility:\n\n**1. Compatibility with Chemical Fungicides:**\n- *Highly Incompatible (Lethal):* Benzimidazoles (**carbendazim, benomyl, thiophanate-methyl**) and triazoles (**hexaconazole, propiconazole**) are extremely fungitoxic to *Trichoderma* even at concentrations below 1 ppm. They completely arrest spore germination and cause hyphal death. Never tank-mix; maintain a 7–10 day safety interval.\n- *Moderately Compatible (Tolerant at field rates):* Dithiocarbamates (**mancozeb, zineb**), inorganic copper fungicides (**copper oxychloride, Bordeaux mixture**), and sulfur formulations exhibit low to moderate toxicity when applied at sub-lethal concentrations. Sequential applications are permissible.\n- *Fungicide-Tolerant Mutants:* Strains developed via UV mutagenesis or protoplast fusion (e.g., carbendazim-tolerant *Trichoderma* strains) can be tank-mixed with low doses of systemic fungicides.\n\n**2. Compatibility with Chemical Insecticides and Herbicides:**\n- Most organophosphates (chlorpyrifos, dimethoate), neonicotinoids (imidacloprid, thiamethoxam), and diamides (chlorantraniliprole) exhibit minimal direct fungicidal action against *Trichoderma* and are generally safe for co-application or rotation.\n\n**3. Compatibility with Biofertilizers and Biocontrol Agents:**\n- *Biofertilizers:* Fully compatible with nitrogen-fixing bacteria (*Rhizobium*, *Azotobacter*, *Azospirillum*) and phosphate-solubilizing bacteria (*Pseudomonas striata*, *Bacillus megaterium*). They can be mixed in slurry for simultaneous seed inoculation.\n- *AM Fungi (VAM):* Highly synergistic. While *Trichoderma* mycoparasitizes plant pathogens, it forms a compatible relationship with mycorrhizal fungi (*Glomus intraradices*), enhancing root colonization without destroying arbuscules.",
            "outlinePoints": [
                "Lethal incompatibility with benzimidazoles (carbendazim) and triazoles",
                "Moderate tolerance to contact fungicides (mancozeb, copper oxychloride, sulfur)",
                "Development and utility of fungicide-tolerant mutant strains",
                "High compatibility with commercial insecticides (neonicotinoids, diamides)",
                "Full compatibility and synergy with biofertilizers (Rhizobium, PSB) and AM fungi"
            ]
        },
        {
            "id": "PTH215-U3-SUB19",
            "questionType": "LONG_ANSWER",
            "maxMarks": 8,
            "difficulty": "Hard",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "Explain the statutory quality control parameters mandated by the Central Insecticides Board & Registration Committee (CIB&RC) for commercial Trichoderma formulations.",
            "modelAnswer": "In India, commercial manufacturing, import, and sale of biological pesticides are strictly regulated under the **Insecticides Act, 1968** through the **Central Insecticides Board & Registration Committee (CIB&RC)**. Every commercial *Trichoderma* formulation (powder or liquid) must comply with rigorous statutory quality benchmarks before receiving registration and market clearance:\n\n**1. Minimum Viable Colony Forming Units (CFU):**\n- *Powder Formulation:* Must contain a minimum viable count of **$2 \times 10^6$ CFU per gram** at the time of sale and throughout the stated shelf-life.\n- *Liquid Formulation:* Must possess a minimum viable count of **$1 \times 10^8$ CFU per milliliter**.\n- *Methodology:* Serial dilution plating on Trichoderma Selective Medium (TSM) or acidified potato dextrose agar (PDA) supplemented with rose bengal and chloramphenicol, with colonies counted after 5 days of incubation at 28°C.\n\n**2. Physical and Chemical Quality Benchmarks:**\n- *Moisture Content:* Must not exceed **8.0%** for powder formulations. High moisture triggers premature spore germination and promotes hydrolytic degradation of conidial membranes.\n- *Particle Size:* 100% of the carrier powder must pass through a 75-micron sieve (200-mesh), and at least 98% must pass through a 53-micron sieve (300-mesh) to ensure uniform wettability and prevent clogging of spray nozzles.\n- *pH Range:* Between 6.5 and 7.5 to maintain physiological neutrality.\n\n**3. Biological Purity and Permissible Contaminants:**\n- *Non-Target Biological Contaminants:* Total load of non-pathogenic contaminating bacteria and fungi must not exceed **$1 \times 10^4$ CFU per gram**.\n- *Human and Animal Pathogens:* Absolute zero tolerance (total absence) for human enteric and medical pathogens, specifically **Salmonella**, **Shigella**, **Vibrio cholerae**, and pathogenic **Escherichia coli**.\n\n**4. Bio-efficacy and Antagonistic Potency Test:**\n- Formulations must undergo a mandatory *in vitro* confrontational dual-culture assay against a virulent reference culture of *Rhizoctonia solani* or *Sclerotium rolfsii* on PDA. The formulation strain must produce at least **70% radial mycelial growth inhibition** compared to the untreated control.\n\n**5. Shelf-life Certification:**\n- Registration dossiers require real-time and accelerated shelf-life stability data. Manufacturers must prove viable CFU retention above statutory limits for at least 6 months under ambient room temperature conditions.",
            "outlinePoints": [
                "Statutory mandate under the Insecticides Act, 1968 and CIB&RC authority",
                "Minimum viable counts: 2x10^6 CFU/g for powders, 1x10^8 CFU/ml for liquids",
                "Physical standards: maximum 8.0% moisture and 300-mesh particle fineness",
                "Permissible contaminant limits (<1x10^4 CFU/g) and zero tolerance for human pathogens",
                "Standardized dual-culture bio-potency test (>=70% inhibition against Rhizoctonia)",
                "Shelf-life stability data and hermetic packaging mandates"
            ]
        },
        {
            "id": "PTH215-U3-SUB20",
            "questionType": "CASE_STUDY",
            "maxMarks": 8,
            "difficulty": "Hard",
            "syllabusTopic": "Commercial products and field application",
            "questionText": "Design an Integrated Disease Management (IDM) schedule combining Trichoderma harzianum for the management of Chickpea Vascular Wilt (Fusarium oxysporum f. sp. ciceris).",
            "modelAnswer": "**Case Problem:**\nChickpea vascular wilt, incited by the soil- and seed-borne fungus *Fusarium oxysporum f. sp. ciceris*, causes severe xylem vessel browning, flaccid leaf drooping, and plant mortality across the semi-arid tropics. Because the pathogen forms long-lived chlamydospores in soil and penetrates deep into vascular bundles, chemical fungicides alone fail to deliver sustained control. An Integrated Disease Management (IDM) program deploying *Trichoderma harzianum* provides robust, sustainable suppression.\n\n**Comprehensive IDM Schedule:**\n\n**1. Cultural and Pre-Planting Tactics:**\n- *Host Resistance:* Select wilt-resistant/tolerant cultivars adapted to the region (e.g., JG 11, JAKI 9218, Digvijay).\n- *Crop Rotation:* Implement a 3-year non-host crop rotation with sorghum, pearl millet, or wheat to decline soil chlamydospore populations.\n- *Deep Summer Ploughing:* Expose topsoil to solar heat during May–June to reduce initial pathogen inoculum.\n\n**2. Soil Pre-Conditioning and Bio-Enrichment:**\n- Inoculate 2.5 kg of *Trichoderma harzianum* talc formulation (minimum $2 \times 10^6$ CFU/g) into 250 kg of well-rotted FYM or vermicompost amended with 1 kg of jaggery.\n- Maintain 40–50% moisture under shade for 10 days, allowing the fungus to colonize the manure bed ($>1 \times 10^8$ CFU/g).\n- Broadcast the enriched FYM over 1 hectare during the final land preparation and incorporate into the top 10 cm of soil.\n\n**3. Integrated Seed Priming and Chemical/Biological Dual Dressing:**\n- *Step 1 (Chemical Clean-up):* If seed infection is suspected, treat seeds first with a mild contact fungicide like thiram or mancozeb at 2 g/kg seed.\n- *Step 2 (Biopriming):* After a 24-hour drying interval, dress the seed with *T. harzianum* (10 g/kg seed) mixed in 10% jaggery solution. Incubate in damp hessian bags for 12 hours prior to planting. *Trichoderma* hyphae colonize the seed coat, forming a physical barrier that intercepts *Fusarium* germ tubes during seedling germination.\n\n**4. Rhizosphere Colonization and Disease Suppression Mechanisms:**\n- *Siderophore Iron Chelation:* *T. harzianum* produces hydroxamate siderophores that starve germinating *Fusarium* microconidia of essential $Fe^{3+}$.\n- *Enzymatic Lysis:* Fungal endochitinases and glucanases degrade advancing *Fusarium* hyphae.\n- *Induced Systemic Resistance (ISR):* *Trichoderma* activates the plant's JA/ET signaling pathways, triggering vascular papillae formation, callose plugs, and xylem phytoalexin synthesis that halt pathogen upward ascent.\n\n**5. Post-Sowing Monitoring:**\n- Maintain adequate soil moisture avoiding water stagnation. Rogued wilted plants should be uprooted and destroyed immediately.",
            "outlinePoints": [
                "Disease background: Fusarium oxysporum f. sp. ciceris soil/seed-borne vascular wilt",
                "Cultural foundation: resistant cultivars (JG 11, Digvijay) and 3-year non-host rotation",
                "Soil bio-enrichment: broadcasting 2.5 kg T. harzianum in 250 kg FYM per hectare",
                "Sequential seed dressing: thiram/mancozeb followed by Trichoderma biopriming",
                "Multi-modal biological suppression: siderophore iron starvation, CWDE lysis, and host ISR priming"
            ]
        }
    ]

    # 20 Flashcards
    flashcards = [
        {"id": "PTH215-U3-FC01", "front": "What taxonomic division and family does Trichoderma belong to?", "back": "Division Ascomycota, Family Hypocreaceae (Order Hypocreales).", "hint": "Ascomycota / Hypocreaceae", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms"},
        {"id": "PTH215-U3-FC02", "front": "What is the teleomorphic (sexual) genus of Trichoderma?", "back": "Hypocrea, an ascomycete genus that forms stromatic fruiting bodies.", "hint": "Hypocrea", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms"},
        {"id": "PTH215-U3-FC03", "front": "What are the 5 sequential steps of Trichoderma mycoparasitism?", "back": "1. Chemotaxis, 2. Molecular recognition, 3. Hyphal coiling, 4. Appressorium formation, 5. Enzymatic lysis.", "hint": "Sensing -> Binding -> Coiling -> Appressoria -> Lysis", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms"},
        {"id": "PTH215-U3-FC04", "front": "What cell surface molecules mediate initial recognition between Trichoderma and host hyphae?", "back": "Host cell wall lectins binding to complementary carbohydrate receptors on Trichoderma.", "hint": "Lectins and carbohydrate residues", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms"},
        {"id": "PTH215-U3-FC05", "front": "What major endochitinase gene is induced in Trichoderma during mycoparasitism?", "back": "Ech42 (42 kDa endochitinase), which cleaves internal beta-1,4-glucosaminic bonds.", "hint": "Ech42", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms"},
        {"id": "PTH215-U3-FC06", "front": "What is the role of alkaline protease Prb1 during fungal cell wall breakdown?", "back": "Hydrolyzes outer structural wall glycoproteins to expose underlying chitin fibrils to chitinases.", "hint": "Digests wall glycoproteins", "syllabusTopic": "Trichoderma: biology and mycoparasitism mechanisms"},
        {"id": "PTH215-U3-FC07", "front": "What are peptaibols and what non-proteinogenic amino acid characterizes them?", "back": "Linear peptide antibiotics synthesized by NRPS containing alpha-aminoisobutyric acid (Aib).", "hint": "Peptides with alpha-aminoisobutyric acid (Aib)", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR"},
        {"id": "PTH215-U3-FC08", "front": "How do peptaibols destroy phytopathogenic fungal hyphae?", "back": "Form transmembrane voltage-dependent ion channels that trigger catastrophic ion leakage and lysis.", "hint": "Transmembrane pore formation and ion leakage", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR"},
        {"id": "PTH215-U3-FC09", "front": "What volatile metabolite gives Trichoderma viride cultures their sweet coconut odor?", "back": "6-Pentyl-alpha-pyrone (6-PAP), a volatile lactone with broad antifungal and insect-repellent properties.", "hint": "6-pentyl-alpha-pyrone (6-PAP)", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR"},
        {"id": "PTH215-U3-FC10", "front": "Which antibiotic produced by Trichoderma virens is selectively lethal against Pythium ultimum?", "back": "Gliovirin, an epipolythiodioxopiperazine antibiotic.", "hint": "Gliovirin", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR"},
        {"id": "PTH215-U3-FC11", "front": "Which plant hormone pathways primarily mediate Trichoderma-induced resistance (ISR)?", "back": "Jasmonic Acid (JA) and Ethylene (ET) signaling pathways.", "hint": "Jasmonic Acid (JA) and Ethylene (ET)", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR"},
        {"id": "PTH215-U3-FC12", "front": "What is 'defense priming' in the context of plant-Trichoderma interaction?", "back": "A sensitized physiological state allowing faster and stronger defense mobilization upon pathogen challenge.", "hint": "Sensitized alert state without growth penalty", "syllabusTopic": "Trichoderma: antibiosis, competition, and ISR"},
        {"id": "PTH215-U3-FC13", "front": "What life stage of root-knot nematodes does Pochonia chlamydosporia parasitize?", "back": "Nematode eggs and developing embryos within gelatinous egg masses.", "hint": "Nematode eggs in gelatinous masses", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces"},
        {"id": "PTH215-U3-FC14", "front": "What specialized serine protease is secreted by Pochonia chlamydosporia to dissolve eggshells?", "back": "VCP1 (a 33 kDa subtilisin-like neutral serine protease).", "hint": "VCP1 serine endopeptidase", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces"},
        {"id": "PTH215-U3-FC15", "front": "What plant pathogen family is hyperparasitized by Ampelomyces quisqualis?", "back": "Family Erysiphaceae (causal agents of powdery mildews).", "hint": "Erysiphaceae (Powdery mildews)", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces"},
        {"id": "PTH215-U3-FC16", "front": "What fruiting structures does Ampelomyces quisqualis form inside powdery mildew hyphae?", "back": "Pyriform, yellowish-brown intrahyphal pycnidia.", "hint": "Intrahyphal pycnidia", "syllabusTopic": "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces"},
        {"id": "PTH215-U3-FC17", "front": "What is the statutory CIB&RC minimum viable count for commercial Trichoderma powder in India?", "back": "2 x 10^6 Colony Forming Units (CFU) per gram.", "hint": "2 x 10^6 CFU/g", "syllabusTopic": "Commercial products and field application"},
        {"id": "PTH215-U3-FC18", "front": "What is the maximum permissible moisture content for Trichoderma powder formulations?", "back": "Maximum 8.0% moisture content.", "hint": "8.0% maximum", "syllabusTopic": "Commercial products and field application"},
        {"id": "PTH215-U3-FC19", "front": "What is the standard dosage of Trichoderma powder formulation for dry seed treatment?", "back": "5 to 10 grams per kilogram of seed.", "hint": "5 to 10 g/kg seed", "syllabusTopic": "Commercial products and field application"},
        {"id": "PTH215-U3-FC20", "front": "Why is carbendazim strictly incompatible with Trichoderma?", "back": "Carbendazim is a benzimidazole fungicide that is lethally toxic to Trichoderma even at <1 ppm.", "hint": "Lethal systemic benzimidazole toxicity", "syllabusTopic": "Commercial products and field application"}
    ]

    unit3_obj = {
        "unitNumber": 3,
        "title": "Fungal Biocontrol Agents",
        "shortDescription": "Biology and mycoparasitic cascade of Trichoderma harzianum and T. viride, secondary antibiosis (peptaibols, 6-PAP, gliovirin), rhizosphere competition and ISR, specialized hyperparasites Pochonia chlamydosporia and Ampelomyces quisqualis, solid-state mass production, and field formulation science.",
        "estimatedReadTimeMinutes": 28,
        "syllabusTopics": [
            "Trichoderma: biology and mycoparasitism mechanisms",
            "Trichoderma: antibiosis, competition, and ISR",
            "Nematophagous and hyperparasitic fungi: Pochonia and Ampelomyces",
            "Mass production of fungal biocontrol agents",
            "Commercial products and field application"
        ],
        "notes": notes,
        "mcqs": mcqs,
        "subjectiveQuestions": subj_questions,
        "flashcards": flashcards
    }

    ts_content = f"""import {{ UnitContent }} from "./types";

export const unit3Content: UnitContent = {json.dumps(unit3_obj, indent=2)};
"""
    with open("/Users/quantum/Downloads/padho lpu/server/data/pth215/unit3.ts", "w") as f:
        f.write(ts_content)
    print("PTH215 Unit 3 generated successfully! MCQs:", len(mcqs), "Subj:", len(subj_questions), "FC:", len(flashcards))

if __name__ == "__main__":
    generate_u3()
