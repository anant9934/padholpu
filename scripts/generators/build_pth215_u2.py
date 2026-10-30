import json

def generate_u2():
    notes = {
        "learningObjectives": [
            "Deconstruct the multi-faceted biocontrol mechanisms of Pseudomonas fluorescens: siderophore-mediated iron competition, broad-spectrum antibiosis (DAPG, PCA, pyrrolnitrin), and Induced Systemic Resistance (ISR).",
            "Analyze the cyclic lipopeptides (iturins, surfactins, fengycins) of Bacillus subtilis and evaluate how endospore resilience extends commercial formulation shelf-life.",
            "Characterize Streptomyces actinomycetes, highlighting secondary antibiotic metabolites (validamycin, streptomycin) and chitinolytic enzymes.",
            "Synthesize the Plant Growth-Promoting Rhizobacteria (PGPR) concept, contrasting direct growth promotion (IAA, ACC deaminase, phosphate solubilization) with indirect biocontrol antagonism.",
            "Master industrial submerged liquid fermentation, talc-based formulation chemistry, and quality standards for bacterial antagonists."
        ],
        "sections": [
            {
                "id": "sec-2-1",
                "heading": "1. Pseudomonas fluorescens: Biology, Siderophores, Antibiosis, and ISR",
                "content": "Pseudomonas fluorescens is a Gram-negative, rod-shaped, non-spore-forming, motile bacterium propelled by one or more polar flagella. Under iron-deficient conditions on King's B medium, it secretes water-soluble, yellow-green fluorescent pigments known as **pyoverdines (pseudobactins)** that fluoresce brilliantly under short-wave ultraviolet light (366 nm). It is an aggressive, ubiquitous rhizosphere colonizer that drives biological control through three distinct mechanisms:\n\n**1. Siderophore-Mediated Iron Competition:**\nIn aerobic agricultural soils, iron predominantly exists in the insoluble, oxidized ferric state ($Fe^{3+}$) as ferric hydroxides, with free ionic concentrations far below the threshold required for microbial growth ($10^{-18}$ M). *P. fluorescens* synthesizes and secretes high-affinity hexadentate iron-chelating ligands called **siderophores (pseudobactin / pyoverdine)** with extraordinarily high stability constants for $Fe^{3+}$ ($K_f \\approx 10^{32}$). These siderophores chelate available ferric ions from the rhizosphere and transport them into the bacterial cell via specific outer membrane TonB-dependent receptor proteins (PupA/PupB). Because phytopathogenic fungi (e.g., *Fusarium oxysporum*, *Pythium ultimum*) produce siderophores with significantly lower binding constants, they suffer severe iron starvation, terminating spore germination and germ tube elongation.\n\n**2. Direct Antibiosis (Antimicrobial Metabolites):**\nStrains of *P. fluorescens* synthesize a diverse arsenal of broad-spectrum low-molecular-weight antibiotics:\n- **2,4-Diacetylphloroglucinol (DAPG):** A phenolic polyketide antibiotic that disrupts fungal membrane integrity, inhibits mitochondrial oxidative phosphorylation, and lyses zoospores of oomycetes.\n- **Phenazines (Phenazine-1-carboxylic acid - PCA):** Heterocyclic nitrogen-containing pigments that enter fungal cells, accept electrons from respiratory chains, and reduce molecular oxygen, generating lethal intracellular reactive oxygen species (ROS - superoxide radicals and hydrogen peroxide).\n- **Pyrrolnitrin:** A phenylpyrrole antibiotic that inhibits protein kinase phosphorylation in fungal glycerol biosynthesis (the chemical template for the synthetic fungicide fludioxonil).\n- **Pyoluteorin:** A chlorinated bipyridyl antibiotic active against *Pythium* damping-off.\n- **Hydrogen Cyanide (HCN):** A volatile metabolite that binds to and inhibits cytochrome c oxidase in fungal mitochondrial respiratory chains.\n\n**3. Induced Systemic Resistance (ISR):**\nRoot colonization by *P. fluorescens* triggers an enhanced defensive state throughout the host plant without systemic bacterial movement. This **ISR** is mediated by the perception of bacterial determinants (flagellin, lipopolysaccharides - LPS, and DAPG) by root cells, activating the **jasmonic acid (JA) and ethylene (ET)** signaling pathways. The plant becomes 'primed'—upon subsequent pathogen challenge, it responds with accelerated accumulation of defense enzymes: phenylalanine ammonia lyase (PAL), peroxidase (POX), polyphenol oxidase (PPO), and callose deposition in cell walls.",
                "subsections": [
                    {
                        "subheading": "Antimicrobial Metabolites of Pseudomonas fluorescens",
                        "content": "Key bioactive compounds and target pathogens:",
                        "table": {
                            "headers": ["Antimicrobial Compound", "Chemical Family", "Target Organisms", "Mode of Physiological Action"],
                            "rows": [
                                ["2,4-DAPG", "Phenolic polyketide", "Gaeumannomyces, Pythium, Rhizoctonia", "Disrupts plasma membrane and mitochondrial respiration"],
                                ["Phenazine-1-carboxylic acid (PCA)", "Heterocyclic phenazine", "Gaeumannomyces graminis, Fusarium", "Generates lethal superoxide radicals via electron uncoupling"],
                                ["Pyrrolnitrin", "Phenylpyrrole", "Rhizoctonia solani, Botrytis cinerea", "Inhibits protein kinase in glycerol synthesis (fludioxonil model)"],
                                ["Pyoluteorin", "Chlorinated bipyridyl", "Pythium ultimum, Phytophthora", "Suppresses oomycete zoosporangial germination"],
                                ["Pseudobactin / Pyoverdine", "Hexadentate peptide siderophore", "Fusarium oxysporum, Pythium", "Starves pathogens of essential ferric iron (Fe3+)"],
                                ["Hydrogen Cyanide (HCN)", "Volatile cyanogen", "Thielaviopsis basicola, Meloidogyne", "Inhibits cytochrome c oxidase in mitochondrial respiration"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-2-2",
                "heading": "2. Bacillus subtilis: Cyclic Lipopeptides and Endospore Resilience",
                "content": "Bacillus subtilis and its sister species (*Bacillus amyloliquefaciens*, *Bacillus velezensis*) are Gram-positive, rod-shaped, aerobic or facultatively anaerobic endospore-forming bacteria belonging to the family Bacillaceae. They are premier commercial bio-antagonists due to their synthesis of potent antifungal cyclic lipopeptides and extreme physical resilience:\n\n**1. Cyclic Lipopeptides (CLPs):**\n*Bacillus* utilizes non-ribosomal peptide synthetases (NRPS) to biosynthesize three major families of amphiphilic cyclic lipopeptides, each comprising a cyclic peptide ring coupled to a fatty acid acyl tail:\n- **Iturin Family (Iturin A, Bacillomycin, Mycosubtilin):** Heptapeptides containing a beta-amino fatty acid chain. Iturins display profound, broad-spectrum antifungal activity against filamentous fungi. They interact specifically with cholesterol and ergosterol in fungal plasma membranes, forming stoichiometric ion-conducting transmembrane pores (1.5-2.0 nm) that trigger catastrophic leakage of potassium ($K^+$), electrolytes, and cytoplasmic proteins, driving osmotic fungal lysis.\n- **Surfactin Family:** Heptapeptides linked to a beta-hydroxy fatty acid chain. Surfactins are among the most powerful biosurfactants known, dramatically reducing the surface tension of water from 72 to 27 mN/m. Surfactins insert into lipid bilayers, solubilizing lipid membranes via a detergent-like mechanism, permeabilizing oomycete zoospore membranes within seconds, and facilitating biofilm formation along root surfaces.\n- **Fengycin Family:** Decapeptides containing an internal lactone ring and a beta-hydroxy fatty acid. Fengycins exhibit potent, selective fungicidal action against filamentous fungi (*Fusarium*, *Pythium*, *Rhizoctonia*), altering membrane architecture and causing structural vacuolization.\n\n**2. Endospore Biology and Commercial Resilience:**\nWhen faced with nutrient limitation, *B. subtilis* initiates asymmetric septation, producing a dormant, dehydrated **endospore**. The endospore core contains a condensed chromosome saturated with Small Acid-Soluble Spore Proteins (SASPs) and dipicolinic acid chelated with calcium (Ca-DPA), shielded by an inner membrane, a thick peptidoglycan cortex, and a multi-layered, keratin-like proteinaceous spore coat.\n- *Commercial Significance:* Endospores resist temperatures above 80-100°C, desiccation, mechanical shearing in industrial fermenters, chemical disinfectants, and ultraviolet radiation. Consequently, *Bacillus* formulations possess an extraordinary commercial shelf-life (**1 to 2 years at ambient room temperature**) compared to fragile vegetative pseudomonads.",
                "subsections": []
            },
            {
                "id": "sec-2-3",
                "heading": "3. Streptomyces Species: Actinomycetes in Disease Suppression",
                "content": "Streptomyces species (*Streptomyces griseus*, *Streptomyces lydicus*, *Streptomyces violaceusniger*) are Gram-positive, high-G+C, filamentous soil bacteria belonging to the order Actinomycetales. They produce extensively branched substrate and aerial mycelia that differentiate into chains of arthrospores, imparting the characteristic earthy smell of virgin soil via the volatile sesquiterpenoid **geosmin**.\n\n**Biocontrol Attributes and Secondary Metabolites:**\n1. **Pharmaceutical Antibiotics in Crop Protection:** *Streptomyces* species are the natural source of over 70% of clinical and agricultural antibiotics. Key agricultural metabolites include:\n   - **Validamycin (from *Streptomyces hygroscopicus*):** An aminoglycoside antibiotic that selectively inhibits the enzyme trehalase in *Rhizoctonia solani*, blocking the hydrolysis of trehalose to glucose. This starves advancing hyphal tips, causing hyphal abnormal branching and cessation of sheath blight development in rice.\n   - **Streptomycin (from *S. griseus*):** An aminoglycoside that binds to the 30S ribosomal subunit of plant pathogenic bacteria (*Xanthomonas*, *Pseudomonas syringae*, *Erwinia amylovora*), misreading codons and arresting bacterial protein synthesis.\n   - **Kasugamycin & Polyoxins:** Inhibit fungal ribosomal translocation and cuticular chitin synthesis in blast (*Magnaporthe oryzae*).\n2. **Cell Wall Hydrolytic Enzymes:** Active chitinase and beta-1,3-glucanase producers that degrade the structural hyphal walls of soil-borne oomycetes and fungi.\n3. **Rhizosphere Colonization:** Form thick, protective endophytic and epiphytic biofilms along root elongation zones, aggressively outcompeting *Fusarium* and *Verticillium* wilt pathogens for colonization space.",
                "subsections": []
            },
            {
                "id": "sec-2-4",
                "heading": "4. The Plant Growth-Promoting Rhizobacteria (PGPR) Concept",
                "content": "The concept of Plant Growth-Promoting Rhizobacteria (PGPR), formalized by Joseph W. Kloepper and Milton N. Schroth in 1978, defines beneficial soil bacteria that aggressively colonize plant roots and enhance plant vegetative growth, root architecture, and disease tolerance through direct and indirect mechanisms:\n\n**1. Direct Mechanisms of Growth Promotion:**\n- **Phytohormone Biosynthesis:** PGPR synthesize and secrete active phytohormones, predominantly **Indole-3-Acetic Acid (IAA)** via tryptophan-dependent pathways (e.g., indole-3-pyruvic acid pathway). Auxin secretion stimulates lateral root proliferation, root hair elongation, and surface area, dramatically increasing water and mineral uptake. Strains also produce gibberellins and cytokinins.\n- **Phosphate Solubilization:** Soil phosphorus is predominantly locked in insoluble mineral complexes (calcium phosphate in alkaline soils; iron and aluminum phosphates in acidic soils). PGPR (such as *Bacillus megaterium*, *Pseudomonas striata*) secrete low-molecular-weight organic acids (principally **gluconic acid, 2-ketogluconic acid, and citric acid**). These organic acids lower rhizosphere pH and chelate divalent/trivalent cations ($Ca^{2+}, Fe^{3+}, Al^{3+}$), releasing bioavailable orthophosphate ions ($H_2PO_4^-$ and $HPO_4^{2-}$).\n- **ACC Deaminase Activity:** Under environmental stress (flooding, salinity, drought, pathogen infection), plants produce excessive levels of 1-aminocyclopropane-1-carboxylate (ACC), the immediate precursor to the stress hormone **ethylene**, causing stunted roots, epinasty, and premature senescence. PGPR expressing the enzyme **ACC Deaminase (acdS gene)** cleave plant ACC into ammonia and alpha-ketobutyrate, lowering ethylene levels and allowing root growth under stress.\n- **Biological Nitrogen Fixation:** Microaerophilic and free-living PGPR fix atmospheric $N_2$.\n\n**2. Indirect Mechanisms (Biocontrol and Defense Priming):**\n- Synthesis of siderophores, broad-spectrum antibiotics, hydrolytic enzymes, and systemic induction of host immune pathways (ISR) that suppress pathogen ingress.",
                "subsections": []
            },
            {
                "id": "sec-2-5",
                "heading": "5. Industrial Mass Production, Formulation, and Quality Control",
                "content": "Commercial manufacturing of bacterial biocontrol agents utilizes automated submerged liquid fermentation coupled with inert carrier blending:\n\n**1. Submerged Fermentation Process:**\n- *Nutrient Media:* For *Pseudomonas fluorescens*, King's B broth, nutrient broth, or cheap agro-industrial byproducts (cane molasses, soybean meal, corn steep liquor) are prepared in industrial stirred-tank bioreactors (500 to 10,000 liters capacity). For *Bacillus subtilis*, media with balanced carbon-to-nitrogen ratios supplemented with manganese ($Mn^{2+}$, 10-50 ppm) is utilized to trigger synchronous endospore formation.\n- *Operating Conditions:* Maintained at 28-30°C, pH 7.0-7.2, with continuous sterile aeration (0.8-1.0 vvm) and impeller agitation (150-250 rpm). Fermentation proceeds for 48 hours for *Pseudomonas* (reaching stationary phase cell densities of $>1 \\times 10^9$ CFU/ml) and 72 hours for *Bacillus* (until phase-contrast microscopy confirms >95% free refractile endospores).\n\n**2. Formulation Chemistry:**\n- *Carrier Selection:* High-grade **talc powder (hydrated magnesium silicate, 300-mesh)** is the industry standard carrier in India. It is neutral (pH 7.0-8.0), inert, and possesses high liquid-absorbing capacity. Lignite, peat, and vermiculite are alternative carriers.\n- *Sterilization:* Carriers must be steam-autoclaved at 121°C (15 psi) for 60 minutes on two consecutive days to eliminate indigenous spore-forming contaminants.\n- *Blending & Additives:* Fermentation broth is mixed with sterilized talc at a 1:2 ratio (w/w). Additives include **Carboxymethyl Cellulose (CMC, 0.5-1.0%)** as an adhesive and sticker for seed coating, and **calcium carbonate ($CaCO_3$, 1.5%)** to buffer formulation pH.\n- *Drying & Packaging:* Cured under dehumidified sterile air at <30°C to an end-point moisture of **8.0-10.0%**. Packaged hermetically in multi-layered laminated aluminum foil pouches to exclude ambient moisture and light.\n\n**3. Statutory Quality Benchmarks (CIB&RC):**\n- Minimum viable count: $1 \\times 10^8$ CFU/g for powder; $1 \\times 10^9$ CFU/ml for liquid SC.\n- Moisture limit: Maximum 10.0% for powder.\n- Non-pathogenic contaminants: $<1 \\times 10^4$ CFU/g; Zero tolerance for *Salmonella*, *Shigella*, and *Vibrio*.\n- Shelf-life: 4 to 6 months for *Pseudomonas*; 12 to 24 months for *Bacillus* endospore formulations.",
                "subsections": []
            }
        ],
        "keyTakeaways": [
            "Pseudomonas fluorescens suppresses pathogens via pyoverdine siderophore iron competition, broad-spectrum antibiotics (DAPG, PCA, pyrrolnitrin), and ISR.",
            "Bacillus subtilis synthesizes pore-forming cyclic lipopeptides (iturins, surfactins, fengycins) that directly lyse fungal and oomycete membranes.",
            "B. subtilis endospores resist heat (>80°C), desiccation, and shear stress, extending product shelf-life to 1-2 years.",
            "Streptomyces actinomycetes produce agricultural antibiotics (validamycin for sheath blight, streptomycin for bacterial blights) and active chitinases.",
            "The PGPR concept combines direct growth promotion (IAA auxin, phosphate-solubilizing organic acids, ACC deaminase) with indirect biological disease suppression.",
            "Commercial bacterial mass production utilizes submerged liquid bioreactors blended into sterilized 300-mesh talc carrier with 1% CMC adhesive.",
            "CIB&RC quality benchmarks mandate minimum 1x10^8 CFU/g for powders, <10% moisture, and zero human pathogen contamination."
        ],
        "commonMisunderstandings": [
            {
                "misunderstanding": "Pseudomonas fluorescens can be stored for 2 years at room temperature in a warehouse just like chemical fungicides.",
                "correction": "Pseudomonas is a non-spore-forming Gram-negative rod whose vegetative cells rapidly lose viability at room temperatures (>30°C); its commercial shelf-life is strictly 4 to 6 months. In contrast, endospore-forming Bacillus subtilis can persist for 1 to 2 years."
            },
            {
                "misunderstanding": "Siderophores directly poison fungal cells through neurotoxic or enzymatic destruction.",
                "correction": "Siderophores are non-toxic iron-chelating ligands. They operate strictly through starvation competition: by binding free ferric iron (Fe3+) with extremely high affinity, they deprive fungal pathogens of the iron required for essential metabolic enzymes."
            },
            {
                "misunderstanding": "ACC deaminase directly stimulates plant root growth like an auxin hormone.",
                "correction": "ACC deaminase is an enzyme that degrades 1-aminocyclopropane-1-carboxylate (the precursor of ethylene). It promotes root growth indirectly by preventing stress-induced ethylene spikes that would otherwise arrest root elongation."
            }
        ],
        "summary": "Bacterial biocontrol agents, spearheaded by fluorescent pseudomonads and endospore-forming bacilli, represent powerful biological alternatives to synthetic chemical fungicides. Pseudomonas fluorescens suppresses soil-borne pathogens via pyoverdine siderophore iron starvation, diverse antibiotics (DAPG, PCA, pyrrolnitrin, HCN), and jasmonate/ethylene-mediated Induced Systemic Resistance (ISR). Bacillus subtilis deploys membrane-lysing cyclic lipopeptides (iturin, surfactin, fengycin) alongside resilient endospores that guarantee superior 1-2 year commercial shelf-life. Actinomycetes like Streptomyces contribute specialized antibiotics (validamycin, streptomycin) and chitinases. Together with direct PGPR traits (IAA synthesis, phosphate solubilization, ACC deaminase), bacterial antagonists are scaled through submerged liquid fermentation and formulated in sterilized talc carriers under strict CIB&RC quality benchmarks."
    }

    # 60 MCQs: 20 Easy, 25 Medium, 15 Hard
    mcqs = [
        # --- EASY (20 questions) ---
        {
            "id": "PTH215-U2-MCQ01",
            "questionText": "What Gram reaction and cell morphology characterize the biocontrol bacterium Pseudomonas fluorescens?",
            "options": {
                "A": "Gram-negative, motile rod with polar flagella",
                "B": "Gram-positive, non-motile coccus",
                "C": "Gram-positive, endospore-forming rod",
                "D": "Acid-fast, spirillum-shaped bacterium"
            },
            "correctOption": "A",
            "explanation": "Pseudomonas fluorescens is a Gram-negative, rod-shaped, strictly aerobic bacterium that moves via one or more polar flagella.",
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ02",
            "questionText": "What color pigment does Pseudomonas fluorescens produce on King's B medium under ultraviolet light?",
            "options": {
                "A": "Yellow-green fluorescent pigment (pyoverdine)",
                "B": "Deep crimson red",
                "C": "Jet black",
                "D": "Dark violet"
            },
            "correctOption": "A",
            "explanation": "P. fluorescens secretes yellow-green fluorescent siderophores (pyoverdines/pseudobactins) that fluoresce brightly under UV light (366 nm).",
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ03",
            "questionText": "What is the primary biological function of siderophores produced by Pseudomonas fluorescens?",
            "options": {
                "A": "High-affinity chelation of ferric iron (Fe3+) to starve plant pathogenic fungi",
                "B": "Direct chemical digestion of plant cellulose",
                "C": "Fixation of atmospheric nitrogen into nitrate",
                "D": "Synthesis of plant cuticle wax"
            },
            "correctOption": "A",
            "explanation": "Siderophores are iron-chelating compounds that bind insoluble ferric iron ($Fe^{3+}$) with high affinity, depriving fungal pathogens of essential iron.",
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ04",
            "questionText": "Which antibiotic produced by Pseudomonas fluorescens is famously known by the abbreviation 'DAPG'?",
            "options": {
                "A": "2,4-Diacetylphloroglucinol",
                "B": "Diaminopimelic glucose",
                "C": "Dinitrophenol glucoside",
                "D": "Diacetyl phosphoglycerate"
            },
            "correctOption": "A",
            "explanation": "DAPG stands for 2,4-Diacetylphloroglucinol, a potent phenolic polyketide antibiotic synthesized by biocontrol pseudomonads.",
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ05",
            "questionText": "What major physiological adaptation confers extreme heat and drought tolerance to Bacillus subtilis?",
            "options": {
                "A": "Formation of dormant, dehydrated endospores",
                "B": "Production of thick lipid envelopes",
                "C": "Continuous flagellar motion",
                "D": "Synthesis of chlorophyll pigments"
            },
            "correctOption": "A",
            "explanation": "Bacillus subtilis forms endospores that resist temperatures above 80°C, desiccation, and UV radiation, conferring exceptional formulation resilience.",
            "difficulty": "Easy",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ06",
            "questionText": "Which cyclic lipopeptide family produced by Bacillus subtilis is primarily responsible for pore formation in fungal cell membranes?",
            "options": {
                "A": "Iturin family (Iturin A, Bacillomycin)",
                "B": "Penicillin",
                "C": "Streptomycin",
                "D": "Tetracycline"
            },
            "correctOption": "A",
            "explanation": "Iturins are heptapeptide cyclic lipopeptides that interact with fungal membrane sterols, creating lytic transmembrane pores.",
            "difficulty": "Easy",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ07",
            "questionText": "What powerful biosurfactant lipopeptide synthesized by Bacillus subtilis lowers water surface tension and permeabilizes oomycete zoospores?",
            "options": {
                "A": "Surfactin",
                "B": "Cellulose",
                "C": "Gelatin",
                "D": "Starch"
            },
            "correctOption": "A",
            "explanation": "Surfactin is a powerful cyclic lipopeptide biosurfactant that reduces water surface tension from 72 to 27 mN/m and lyses zoospore membranes.",
            "difficulty": "Easy",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ08",
            "questionText": "Which antibiotic produced by Streptomyces hygroscopicus is widely utilized in Asia to control rice sheath blight (Rhizoctonia solani)?",
            "options": {
                "A": "Validamycin",
                "B": "Penicillin",
                "C": "Ampicillin",
                "D": "Erythromycin"
            },
            "correctOption": "A",
            "explanation": "Validamycin is an agricultural aminoglycoside antibiotic produced by Streptomyces that inhibits trehalase in Rhizoctonia solani.",
            "difficulty": "Easy",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ09",
            "questionText": "What volatile compound produced by Streptomyces actinomycetes is responsible for the characteristic earthy odor of freshly plowed soil?",
            "options": {
                "A": "Geosmin",
                "B": "Methane",
                "C": "Ethylene",
                "D": "Benzene"
            },
            "correctOption": "A",
            "explanation": "Geosmin is a bicyclic sesquiterpenoid alcohol synthesized by soil actinomycetes (Streptomyces) that imparts the classic smell of moist soil.",
            "difficulty": "Easy",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ10",
            "questionText": "What does the acronym 'PGPR' stand for in soil microbiology and plant pathology?",
            "options": {
                "A": "Plant Growth-Promoting Rhizobacteria",
                "B": "Plant Genetic Protection Reagent",
                "C": "Phosphate Generating Pathogen Reducer",
                "D": "Parasitic Grub Pesticide Residue"
            },
            "correctOption": "A",
            "explanation": "PGPR stands for Plant Growth-Promoting Rhizobacteria, defined by Kloepper and Schroth (1978) as beneficial root-colonizing bacteria.",
            "difficulty": "Easy",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"
        },
        {
            "id": "PTH215-U2-MCQ11",
            "questionText": "Which plant hormone is directly biosynthesized by many PGPR to stimulate lateral root proliferation in crops?",
            "options": {
                "A": "Indole-3-Acetic Acid (IAA - Auxin)",
                "B": "Abscisic acid (ABA)",
                "C": "Ethylene",
                "D": "Jasmonic acid"
            },
            "correctOption": "A",
            "explanation": "PGPR synthesize Indole-3-Acetic Acid (IAA) via tryptophan pathways, stimulating root elongation and branching to enhance nutrient uptake.",
            "difficulty": "Easy",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"
        },
        {
            "id": "PTH215-U2-MCQ12",
            "questionText": "What is the statutory minimum viable count (CFU/g) required by CIB&RC for commercial powder formulations of Pseudomonas fluorescens?",
            "options": {
                "A": "1 x 10^8 CFU/g",
                "B": "1 x 10^5 CFU/g",
                "C": "1 x 10^2 CFU/g",
                "D": "50 CFU/g"
            },
            "correctOption": "A",
            "explanation": "CIB&RC specifications mandate a minimum viable propagule count of 1 x 10^8 CFU per gram for carrier-based bacterial biopesticides.",
            "difficulty": "Easy",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ13",
            "questionText": "What is the most widely utilized inert carrier mineral for formulating bacterial biopesticide powders in India?",
            "options": {
                "A": "Talc powder (hydrated magnesium silicate)",
                "B": "Coarse sand",
                "C": "Pure granite",
                "D": "Crushed marble"
            },
            "correctOption": "A",
            "explanation": "Talc powder (hydrated magnesium silicate, 300-mesh) is the dominant carrier because of its inertness, neutral pH (7.0-8.0), and high absorbency.",
            "difficulty": "Easy",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ14",
            "questionText": "What is the typical commercial shelf-life of talc-based Pseudomonas fluorescens powder stored at room temperature (25-30°C)?",
            "options": {
                "A": "4 to 6 months",
                "B": "5 years",
                "C": "10 years",
                "D": "24 hours"
            },
            "correctOption": "A",
            "explanation": "Because Pseudomonas is a non-spore-forming Gram-negative rod, vegetative cell viability declines within 4 to 6 months at ambient tropical temperatures.",
            "difficulty": "Easy",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ15",
            "questionText": "What is the typical commercial shelf-life of Bacillus subtilis formulations containing endospores?",
            "options": {
                "A": "12 to 24 months (1 to 2 years)",
                "B": "1 week only",
                "C": "3 days",
                "D": "Bacillus dies instantly in powder"
            },
            "correctOption": "A",
            "explanation": "Endospores are cryptobiotic resting structures that maintain high viability for 1 to 2 years at ambient warehouse temperatures.",
            "difficulty": "Easy",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ16",
            "questionText": "Which microbial group is the primary source of clinical and agricultural aminoglycoside antibiotics like streptomycin?",
            "options": {
                "A": "Actinomycetes (genus Streptomyces)",
                "B": "Yeasts",
                "C": "Green algae",
                "D": "Mycoplasmas"
            },
            "correctOption": "A",
            "explanation": "Streptomyces actinomycetes produce the majority of natural antibiotics, including streptomycin, validamycin, and tetracyclines.",
            "difficulty": "Easy",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ17",
            "questionText": "What is the primary role of adding Carboxymethyl Cellulose (CMC, 1%) to talc-based bacterial biopesticides?",
            "options": {
                "A": "Acts as an adhesive and sticker ensuring bacterial cells adhere to seed coats during biopriming",
                "B": "Acts as an antibiotic killing all fungi",
                "C": "Colors the seed green",
                "D": "Replaces synthetic nitrogen fertilizer"
            },
            "correctOption": "A",
            "explanation": "CMC acts as a water-soluble adhesive sticker that binds the mineral carrier and bacterial cells firmly to the seed surface.",
            "difficulty": "Easy",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ18",
            "questionText": "What enzyme produced by PGPR hydrolyzes ACC to lower stress-induced ethylene in plant roots?",
            "options": {
                "A": "ACC Deaminase",
                "B": "Cellulase",
                "C": "Amylase",
                "D": "Urease"
            },
            "correctOption": "A",
            "explanation": "ACC Deaminase cleaves 1-aminocyclopropane-1-carboxylate into ammonia and alpha-ketobutyrate, suppressing inhibitory ethylene levels.",
            "difficulty": "Easy",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"
        },
        {
            "id": "PTH215-U2-MCQ19",
            "questionText": "Which plant signaling pathways mediate Induced Systemic Resistance (ISR) triggered by Pseudomonas fluorescens?",
            "options": {
                "A": "Jasmonic acid (JA) and Ethylene (ET) pathways",
                "B": "Gibberellic acid elongation pathway",
                "C": "Abscisic acid pathway exclusively",
                "D": "Cytokinin division pathway"
            },
            "correctOption": "A",
            "explanation": "PGPR-mediated ISR is characteristically governed by jasmonic acid and ethylene signaling, priming defense enzymes without salicylic acid accumulation.",
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ20",
            "questionText": "Which bacterial biocontrol agent is widely utilized as a seed biopriming agent against Fusarium wilt in chickpea?",
            "options": {
                "A": "Pseudomonas fluorescens",
                "B": "Xanthomonas campestris",
                "C": "Ralstonia solanacearum",
                "D": "Agrobacterium tumefaciens"
            },
            "correctOption": "A",
            "explanation": "Pseudomonas fluorescens seed treatment (10 g/kg seed) colonizes the rhizosphere, producing siderophores and antibiotics that suppress Fusarium wilt.",
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },

        # --- MEDIUM (25 questions) ---
        {
            "id": "PTH215-U2-MCQ21",
            "questionText": "What is the primary thermodynamic reason why pseudobactin siderophores outcompete fungal siderophores for ferric iron in soil?",
            "options": {
                "A": "Pseudobactin possesses an extraordinarily high stability constant (Kf ~ 10^32) for Fe3+, far exceeding the binding affinities of fungal hydroxamates",
                "B": "Pseudobactin converts iron into copper",
                "C": "Pseudobactin dissolves iron into steam",
                "D": "Fungi cannot absorb iron under any circumstances"
            },
            "correctOption": "A",
            "explanation": "Pyoverdines/pseudobactins bind Fe3+ with extreme affinity ($K_f \\approx 10^{32}$), scavenging trace iron and leaving fungi starved of essential iron.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ22",
            "questionText": "How does Phenazine-1-carboxylic acid (PCA) produced by Pseudomonas fluorescens induce cellular death in Gaeumannomyces graminis?",
            "options": {
                "A": "It acts as an electron acceptor in fungal respiratory chains, uncoupling electron transport and generating cytotoxic superoxide radicals",
                "B": "It dissolves fungal chitin instantly",
                "C": "It hydrolyzes the fungal nuclear envelope directly",
                "D": "It blocks fungal water uptake"
            },
            "correctOption": "A",
            "explanation": "Phenazines diffuse into fungal cells, accept electrons from respiratory complexes, and transfer them to O2, generating lethal reactive oxygen species (ROS).",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ23",
            "questionText": "Which synthetic modern agricultural fungicide was chemically modeled after the natural bacterial antibiotic Pyrrolnitrin produced by Pseudomonas?",
            "options": {
                "A": "Fludioxonil",
                "B": "Carbendazim",
                "C": "Mancozeb",
                "D": "Metalaxyl"
            },
            "correctOption": "A",
            "explanation": "The phenylpyrrole fungicide fludioxonil was synthesized as a photostable chemical analog of pyrrolnitrin, a natural antibiotic of P. fluorescens.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ24",
            "questionText": "How do Fengycin cyclic lipopeptides from Bacillus subtilis selectively target filamentous fungi while sparing bacterial cells?",
            "options": {
                "A": "They interact specifically with ergosterol in fungal membranes, altering lipid packing and inducing membrane permeabilization without affecting bacterial hopanoids",
                "B": "They dissolve bacterial cell walls exclusively",
                "C": "They freeze the fungal nucleus",
                "D": "They act as nutrients for fungi"
            },
            "correctOption": "A",
            "explanation": "Fengycins exhibit selective affinity for fungal sterols (ergosterol), disrupting lipid bilayer curvature and creating pores in filamentous fungi.",
            "difficulty": "Medium",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ25",
            "questionText": "What chemical constituents are coordinated within the core of a mature Bacillus endospore to confer extreme heat resistance?",
            "options": {
                "A": "Dipicolinic acid (DPA) chelated with calcium ions (Ca-DPA) and Small Acid-Soluble Proteins (SASPs)",
                "B": "Liquid water and glucose",
                "C": "Pure sulfuric acid and lipid droplets",
                "D": "Chlorophyll and ATP"
            },
            "correctOption": "A",
            "explanation": "Ca-DPA complexes (~10% of spore dry weight) dehydrate the core, while alpha/beta-type SASPs saturate and protect genomic DNA from thermal denaturation.",
            "difficulty": "Medium",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ26",
            "questionText": "How does Validamycin selectively suppress Rhizoctonia solani in rice without killing the plant or non-target fungi?",
            "options": {
                "A": "It mimics trehalose and competitively inhibits trehalase, causing toxic accumulation of trehalose and glucose starvation at hyphal tips",
                "B": "It acts as a general cellular acid",
                "C": "It removes all water from the rice stem",
                "D": "It dissolves the plant cell wall"
            },
            "correctOption": "A",
            "explanation": "Validamycin is a transition-state pseudooligosaccharide analog that specifically inhibits fungal trehalase, halting hyphal elongation in Rhizoctonia.",
            "difficulty": "Medium",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ27",
            "questionText": "Which organic acids are predominantly secreted by Phosphate-Solubilizing Bacteria (PSB) to solubilize tricalcium phosphate in soils?",
            "options": {
                "A": "Gluconic acid and 2-ketogluconic acid (via direct glucose oxidation pathway)",
                "B": "Hydrochloric acid and sulfuric acid",
                "C": "Pure carbonic acid",
                "D": "Fatty acids only"
            },
            "correctOption": "A",
            "explanation": "PSB (e.g., Pseudomonas striata, Bacillus megaterium) oxidize glucose via membrane-bound glucose dehydrogenase, secreting gluconic acid to chelate Ca2+.",
            "difficulty": "Medium",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"
        },
        {
            "id": "PTH215-U2-MCQ28",
            "questionText": "What biochemical cascade is activated in plants during 'priming' by Induced Systemic Resistance (ISR)?",
            "options": {
                "A": "Sensitizing the plant to respond faster and more strongly with phytoalexin synthesis, lignification, and PR-protein accumulation upon pathogen attack",
                "B": "Permanently keeping all stomata closed 24 hours a day",
                "C": "Converting all leaf starch into sucrose permanently",
                "D": "Arresting plant photosynthesis"
            },
            "correctOption": "A",
            "explanation": "ISR primes plant defenses: the plant does not expend energy continuously, but upon pathogen invasion, defense cascades mobilize with accelerated kinetics.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ29",
            "questionText": "Why is the carrier material autoclaved on two consecutive days (fractional sterilization) during bio-formulation manufacturing?",
            "options": {
                "A": "The first autoclaving triggers germination of heat-resistant dormant bacterial endospores, which are then completely destroyed during the second cycle",
                "B": "To ensure the talc powder turns bright white",
                "C": "To melt the minerals into liquid",
                "D": "To cool down the autoclave"
            },
            "correctOption": "A",
            "explanation": "Intermittent sterilization (Tyndallization) ensures that surviving spore-formers germinate in the 24-h interval and are killed in the second steam cycle.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ30",
            "questionText": "What is the primary role of trace manganese (Mn2+, 10-50 ppm) when formulating media for submerged fermentation of Bacillus subtilis?",
            "options": {
                "A": "Acts as an essential cofactor for phosphoglycerate mutase, triggering synchronous endospore formation",
                "B": "Acts as an artificial dye",
                "C": "Kills all vegetative bacteria",
                "D": "Prevents the bioreactor from rusting"
            },
            "correctOption": "A",
            "explanation": "Manganese ions are critical cofactors required to derepress the sporulation cascade (Spo0A) and activate phosphoglycerate mutase in Bacillus.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ31",
            "questionText": "Which defense-related enzyme involved in phenylpropanoid metabolism and lignin synthesis is strongly induced by Pseudomonas fluorescens ISR?",
            "options": {
                "A": "Phenylalanine Ammonia Lyase (PAL)",
                "B": "Amylase",
                "C": "Urease",
                "D": "Ribulose bisphosphate carboxylase"
            },
            "correctOption": "A",
            "explanation": "PAL is the entry enzyme into the phenylpropanoid defense pathway, synthesizing phenolic precursors for lignin, flavonoids, and salicylic acid.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ32",
            "questionText": "What happens if a farmer tank-mixes Pseudomonas fluorescens wettable powder with copper oxychloride bactericide?",
            "options": {
                "A": "Copper ions denature bacterial proteins and kill the living Pseudomonas cells, rendering the biocontrol agent completely ineffective",
                "B": "The mixture creates a new hybrid super-microbe",
                "C": "Copper accelerates bacterial growth 100-fold",
                "D": "The mixture dissolves the spray tank"
            },
            "correctOption": "A",
            "explanation": "Pseudomonas fluorescens is a Gram-negative bacterium highly sensitive to copper bactericides; tank-mixing results in instant microbial death.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ33",
            "questionText": "Which actinomycete species is commercially formulated under trade names like 'Actinovate' to manage foliar downy mildews and soil root rots?",
            "options": {
                "A": "Streptomyces lydicus (strain WYEC 108)",
                "B": "Streptomyces scabies",
                "C": "Mycobacterium tuberculosis",
                "D": "Corynebacterium sepedonicum"
            },
            "correctOption": "A",
            "explanation": "Streptomyces lydicus strain WYEC 108 is a registered, commercial biocontrol actinomycete used for seed treatment and foliar disease suppression.",
            "difficulty": "Medium",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ34",
            "questionText": "How does the volatile gas Hydrogen Cyanide (HCN) produced by rhizosphere pseudomonads suppress black root rot of tobacco (Thielaviopsis basicola)?",
            "options": {
                "A": "HCN diffuses through soil air pores and selectively binds to iron-copper prosthetic groups in fungal cytochrome c oxidase, blocking respiration",
                "B": "HCN acts as a nitrogen fertilizer",
                "C": "HCN freezes the tobacco roots",
                "D": "HCN turns the soil alkaline"
            },
            "correctOption": "A",
            "explanation": "HCN gas diffuses into rhizosphere pores and inhibits mitochondrial electron transport at cytochrome c oxidase, suppressing fungal growth.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ35",
            "questionText": "What is the primary function of calcium carbonate (CaCO3, 1-2%) when formulating talc-based bacterial biopesticides?",
            "options": {
                "A": "Buffers the formulation pH to neutrality (pH 7.0-7.5), preventing acid-induced mortality of bacterial cells during storage",
                "B": "Acts as a primary food source for bacteria",
                "C": "Kills all competing bacteria",
                "D": "Makes the powder float on water"
            },
            "correctOption": "A",
            "explanation": "CaCO3 neutralizes organic acids released by bacteria, maintaining a stable neutral pH micro-environment that prevents cell death in the carrier.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ36",
            "questionText": "Which bacterial biocontrol agent is particularly celebrated for managing rice bacterial leaf blight (Xanthomonas oryzae pv. oryzae)?",
            "options": {
                "A": "Pseudomonas fluorescens (seed biopriming and foliar spray @ 2.5 kg/ha)",
                "B": "Clostridium tetani",
                "C": "Escherichia coli",
                "D": "Agrobacterium rhizogenes"
            },
            "correctOption": "A",
            "explanation": "P. fluorescens produces bacteriocins, PCA, and induces systemic defense enzymes (POX, PPO), effectively suppressing Xanthomonas leaf blight in rice.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ37",
            "questionText": "What is the primary advantage of liquid suspension concentrate (SC) formulations of Bacillus subtilis over talc-based wettable powders?",
            "options": {
                "A": "Liquid SC contains higher CFU titers (min 10^9 CFU/ml), zero carrier dust inhalation hazard, and superior dispersion in micro-irrigation systems",
                "B": "Liquid SC can be boiled before use",
                "C": "Liquid SC never expires even after 100 years",
                "D": "Liquid SC replaces tractor fuel"
            },
            "correctOption": "A",
            "explanation": "Liquid formulations offer higher concentration, easy tank-mixing without nozzle clogging, better compatibility with drip systems, and no dust.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ38",
            "questionText": "How do Plant Growth-Promoting Rhizobacteria enhance plant resistance against drought-induced disease predisposition?",
            "options": {
                "A": "By synthesizing exopolysaccharides (EPS) that form a moisture-retaining biofilm around root zones and cleaving stress ethylene via ACC deaminase",
                "B": "By causing the plant to shed all its roots",
                "C": "By converting soil sand into clay",
                "D": "By absorbing all sunlight"
            },
            "correctOption": "A",
            "explanation": "Bacterial EPS retains moisture around root tips while ACC deaminase suppresses stress ethylene, preventing tissue senescence and pathogen entry.",
            "difficulty": "Medium",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"
        },
        {
            "id": "PTH215-U2-MCQ39",
            "questionText": "What diagnostic selective growth medium is utilized in quality control laboratories to enumerate viable colonies of Pseudomonas fluorescens?",
            "options": {
                "A": "King's B medium (supplemented with cephaloridine, fucidin, and cetrimide - CFC medium)",
                "B": "Pure potato dextrose agar with copper",
                "C": "Nutrient agar with 10% hydrochloric acid",
                "D": "Sabouraud dextrose agar at 50°C"
            },
            "correctOption": "A",
            "explanation": "King's B medium with selective CFC antibiotics permits the growth of fluorescent pseudomonads while suppressing other bacteria and fungi.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ40",
            "questionText": "Which plant defense enzyme induced by PGPR oxidizes monophenols to o-diphenols and o-quinones that are highly toxic to invading fungal hyphae?",
            "options": {
                "A": "Polyphenol Oxidase (PPO)",
                "B": "Nitrogenase",
                "C": "Amylase",
                "D": "Glutamine synthetase"
            },
            "correctOption": "A",
            "explanation": "PPO oxidizes host phenolics into reactive quinones that bind and cross-link fungal proteins, forming a brown melanin barrier around infection sites.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ41",
            "questionText": "Why does Bacillus subtilis form robust, self-assembled 'biofilms' at the air-liquid interface and on plant root elongation zones?",
            "options": {
                "A": "Surfactin secretion coordinates quorum sensing, triggering an extracellular matrix of TasA amyloid fibers and exopolysaccharide (EpsA-O)",
                "B": "The bacteria freeze together into ice",
                "C": "The plant roots secrete superglue",
                "D": "Biofilms are formed by dead fungal hyphae"
            },
            "correctOption": "A",
            "explanation": "Surfactin triggers membrane sensor kinases that activate the master regulator Spo0A, transcribing matrix genes (tasA and eps operon) to form protective biofilms.",
            "difficulty": "Medium",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ42",
            "questionText": "What is the recommended application rate of talc-based Pseudomonas fluorescens for seed biopriming in pulses and cereals?",
            "options": {
                "A": "10 grams per kilogram of seed",
                "B": "500 grams per kilogram of seed",
                "C": "1 milligram per kilogram",
                "D": "10 kilograms per kilogram"
            },
            "correctOption": "A",
            "explanation": "The standard recommendation across State Agricultural Universities is 10 g of talc formulation (1x10^8 CFU/g) per kg of seed mixed with 0.1% jaggery/rice starch paste.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ43",
            "questionText": "How does seed biopriming with Pseudomonas fluorescens protect emerging seedlings from damping-off pathogens (Pythium aphanidermatum)?",
            "options": {
                "A": "Bacteria rapidly colonize the seed coat and spermosphere, consuming seed exudates and secreting DAPG/pyrrolnitrin before fungal zoospores can encyst",
                "B": "Bacteria dissolve the seed embryo",
                "C": "Bacteria heat the seed to 100°C",
                "D": "Pythium transforms into a friendly symbiont"
            },
            "correctOption": "A",
            "explanation": "Bacterial biopriming pre-empts colonization of spermosphere exudates (glucose, amino acids) and creates an antibiotic barrier that repels oomycete zoospores.",
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ44",
            "questionText": "Which actinomycete-derived agricultural bactericide is deployed to control fire blight of apples and pears (Erwinia amylovora)?",
            "options": {
                "A": "Streptomycin sulfate",
                "B": "Validamycin",
                "C": "Iturin A",
                "D": "Pyrrolnitrin"
            },
            "correctOption": "A",
            "explanation": "Streptomycin sulfate (derived from Streptomyces griseus) is an aminoglycoside bactericide used for blossom sprays against Erwinia amylovora.",
            "difficulty": "Medium",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ45",
            "questionText": "What physiological symptom indicates that a commercial batch of Pseudomonas fluorescens has lost its biological efficacy during storage?",
            "options": {
                "A": "Loss of yellow-green fluorescence under UV light, accompanied by drop in viable count below 1 x 10^8 CFU/g",
                "B": "Powder turning bright pink",
                "C": "The bag expanding into a balloon",
                "D": "The powder smelling like roses"
            },
            "correctOption": "A",
            "explanation": "Loss of pyoverdine fluorescence under UV (366 nm) and viable plate counts dropping below 10^8 CFU/g signify loss of viability and siderophore synthesis.",
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },

        # --- HARD (15 questions) ---
        {
            "id": "PTH215-U2-MCQ46",
            "questionText": "In the molecular regulation of antibiotic biosynthesis in Pseudomonas fluorescens, what two-component signal transduction system governs DAPG and PCA expression?",
            "options": {
                "A": "The GacS / GacA (Global Antibiotic and Cyanide Control) sensor kinase and response regulator system",
                "B": "The AgrA / AgrC staphylococcal quorum system",
                "C": "The LuxR / LuxI acyl-homoserine lactone system exclusively",
                "D": "The EnvZ / OmpR osmolarity system"
            },
            "correctOption": "A",
            "explanation": "GacS (membrane sensor kinase) autophosphorylates and activates GacA, which transcribes small non-coding regulatory RNAs (rsmX, rsmY, rsmZ) to derepress DAPG, PCA, and HCN.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ47",
            "questionText": "How does the RNA-binding repressor protein RsmA modulate biocontrol secondary metabolite synthesis in Pseudomonas fluorescens?",
            "options": {
                "A": "RsmA binds to the ribosome-binding site (RBS) of antibiotic mRNAs, blocking translation; GacA-activated small RNAs (RsmY/RsmZ) sequester RsmA to allow translation",
                "B": "RsmA transcribes DNA directly without RNA polymerase",
                "C": "RsmA acts as an active siderophore in the outer membrane",
                "D": "RsmA degrades bacterial flagellin"
            },
            "correctOption": "A",
            "explanation": "RsmA blocks translation of secondary metabolite transcripts; small regulatory RNAs (RsmY, RsmZ) bind and sequester RsmA, triggering antibiotic biosynthesis.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ48",
            "questionText": "What is the structural basis for the Non-Ribosomal Peptide Synthetase (NRPS) modular architecture responsible for biosynthesizing Iturin A in Bacillus subtilis?",
            "options": {
                "A": "Iterative multi-enzyme megasynthases comprising Adenylation (A), Peptidyl Carrier (PCP), and Condensation (C) domains that sequentially assemble amino acids independently of mRNA",
                "B": "Standard 70S ribosomal translation on polycistronic mRNA",
                "C": "Direct enzymatic cleavage of vegetative membrane phospholipids",
                "D": "RNA interference degradation pathways"
            },
            "correctOption": "A",
            "explanation": "NRPS multienzyme complexes feature modular domain suites (A-domain activates amino acid, PCP holds it via phosphopantetheine, C-domain forms peptide bond) synthesizing cyclic lipopeptides.",
            "difficulty": "Hard",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ49",
            "questionText": "Which specific outer membrane TonB-dependent receptor in Pseudomonas fluorescens is responsible for recognizing and internalizing ferric pseudobactin complexes?",
            "options": {
                "A": "PupA (Pseudobactin Uptake Protein A)",
                "B": "FhuA (Ferrichrome receptor)",
                "C": "OmpA (Outer membrane porin)",
                "D": "TolC efflux duct"
            },
            "correctOption": "A",
            "explanation": "PupA is the specialized outer membrane TonB-dependent receptor that specifically binds Fe3+-pseudobactin complexes, utilizing proton-motive force for internalization.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ50",
            "questionText": "In the chemical ecology of 'Take-All Decline' (TAD) in continuous monoculture wheat soils, what specific bacterial genotype is the primary causal agent of natural soil suppressiveness?",
            "options": {
                "A": "Fluorescent Pseudomonas genotypes producing 2,4-diacetylphloroglucinol (DAPG) possessing the phlD gene at population thresholds > 10^5 CFU/g root",
                "B": "Pathogenic Xanthomonas translucens",
                "C": "Streptomyces scabies producing thaxtomin A",
                "D": "Pure fungal mycorrhizae lacking bacteria"
            },
            "correctOption": "A",
            "explanation": "Take-All Decline (suppression of Gaeumannomyces graminis) is driven by natural population buildup of phlD+ DAPG-producing fluorescent pseudomonads exceeding 10^5 CFU/g root.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ51",
            "questionText": "What is the biochemical role of the acdS gene in Plant Growth-Promoting Rhizobacteria?",
            "options": {
                "A": "Encodes ACC Deaminase, which hydrolyzes 1-aminocyclopropane-1-carboxylate into ammonia and alpha-ketobutyrate, sinking plant ethylene precursor pools",
                "B": "Transcribes fungal chitinase genes inside the plant nucleus",
                "C": "Synthesizes bacterial flagellin",
                "D": "Encodes nitrogenase reductase enzyme"
            },
            "correctOption": "A",
            "explanation": "The acdS gene encodes ACC deaminase, which cleaves exuded plant ACC, preventing stress ethylene spikes and maintaining root elongation under biotic/abiotic stress.",
            "difficulty": "Hard",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"
        },
        {
            "id": "PTH215-U2-MCQ52",
            "questionText": "How does the master response regulator Spo0A control the developmental bifurcated switch between biofilm formation and sporulation in Bacillus subtilis?",
            "options": {
                "A": "Low levels of phosphorylated Spo0A~P derepress matrix operons (epsA-O and tapA-sipW-tasA) to form biofilms; high thresholds of Spo0A~P trigger irreversible sporulation",
                "B": "Spo0A destroys all genomic DNA in the mother cell",
                "C": "Spo0A transcribes synthetic pyrethroids inside the cell",
                "D": "Spo0A prevents the synthesis of dipicolinic acid"
            },
            "correctOption": "A",
            "explanation": "A phosphorylation phosphorelay modulates Spo0A~P: low phosphorylation drives biofilm extracellular matrix synthesis, whereas high phosphorylation activates the sporulation sigma factors.",
            "difficulty": "Hard",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ53",
            "questionText": "Which microbial metabolite synthesized by Pseudomonas fluorescens acts as an uncoupling protonophore across fungal mitochondrial membranes?",
            "options": {
                "A": "2,4-Diacetylphloroglucinol (DAPG)",
                "B": "Pure glucose",
                "C": "Starch",
                "D": "Cellulose"
            },
            "correctOption": "A",
            "explanation": "DAPG partitions into lipid bilayers and dissipates transmembrane proton gradients, collapsing mitochondrial membrane potential and arresting ATP synthesis.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ54",
            "questionText": "In Streptomyces biology, what transcriptional cascade regulates the transition from vegetative substrate mycelium to aerial conidiophore chains?",
            "options": {
                "A": "The bld (bald) and whi (white) gene cascades, modulated by signaling extracellular peptide factors (SapB) and gamma-butyrolactones (A-factor)",
                "B": "The lac operon repressor system",
                "C": "The tryptophan attenuation leader peptide",
                "D": "Chloroplast phytochrome receptors"
            },
            "correctOption": "A",
            "explanation": "Streptomyces differentiation is governed by bld genes (initiating aerial hyphae via surfactant peptide SapB) and whi genes (directing septation into arthrospores).",
            "difficulty": "Hard",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"
        },
        {
            "id": "PTH215-U2-MCQ55",
            "questionText": "Why is the direct addition of glycerol or trehalose (5-10%) into liquid formulations of Pseudomonas fluorescens essential for extending shelf-life?",
            "options": {
                "A": "They act as compatible osmoprotectants, stabilizing bacterial cell membranes, preventing cellular protein denaturation, and depressing metabolic respiration during storage",
                "B": "They convert the liquid into solid stone",
                "C": "They act as chemical fungicides directly",
                "D": "They eliminate all dissolved oxygen permanently"
            },
            "correctOption": "A",
            "explanation": "Glycerol and trehalose replace water molecules around membrane phospholipids and proteins, maintaining structural integrity and preventing metabolic autolysis.",
            "difficulty": "Hard",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ56",
            "questionText": "What is the primary role of the TonB-ExbB-ExbD protein complex in the inner membrane of Pseudomonas during siderophore transport?",
            "options": {
                "A": "Couples the proton-motive force of the inner cytoplasmic membrane to transduce energy across the periplasm, opening outer membrane PupA gates for iron uptake",
                "B": "Synthesizes ATP for flagellar propulsion",
                "C": "Exports antibiotic phenazines out of the cell",
                "D": "Degrades plant cellulose microfibrils"
            },
            "correctOption": "A",
            "explanation": "Because the outer membrane lacks ATP, the TonB system couples inner-membrane electrochemical proton potential to mechanically open outer-membrane siderophore transport channels.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ57",
            "questionText": "How does the pyrrolnitrin biosynthetic pathway (prnA, prnB, prnC, prnD) in Pseudomonas convert L-tryptophan into an active antifungal antibiotic?",
            "options": {
                "A": "PrnA catalyzes chlorination of tryptophan, PrnB rearranges the indole to phenylpyrrole, PrnC adds a second chlorine, and PrnD oxidizes the amino group to a nitro group",
                "B": "By polymerizing tryptophan into a rubber polymer",
                "C": "By removing all carbon atoms from tryptophan",
                "D": "By converting tryptophan into synthetic carbendazim"
            },
            "correctOption": "A",
            "explanation": "The 4-gene prnABCD operon executes halogenation, indole rearrangement, regioselective chlorination, and arylamine oxidation to yield pyrrolnitrin.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        },
        {
            "id": "PTH215-U2-MCQ58",
            "questionText": "What molecular feature distinguishes the TasA protein fibers in the extracellular biofilm matrix of Bacillus subtilis?",
            "options": {
                "A": "Functional amyloid fibril polymers that assemble into robust, protease-resistant scaffold networks encasing bacterial cells on root surfaces",
                "B": "Water-soluble globular enzymes that digest starch",
                "C": "Phospholipid monolayers that repel water",
                "D": "RNA interference hairpins"
            },
            "correctOption": "A",
            "explanation": "TasA is a functional bacterial amyloid protein that self-assembles into stable cross-beta sheet fibrils, providing structural integrity to Bacillus biofilms.",
            "difficulty": "Hard",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"
        },
        {
            "id": "PTH215-U2-MCQ59",
            "questionText": "In CIB&RC quality control, why is the 'heat shock test' (80°C for 10 minutes) mandatory prior to plating Bacillus subtilis formulation samples?",
            "options": {
                "A": "To kill all non-spore-forming vegetative contaminants and enumerate exclusively viable, heat-resistant Bacillus endospores",
                "B": "To sterilize the agar medium",
                "C": "To melt the talc carrier",
                "D": "To destroy the Bacillus endospores"
            },
            "correctOption": "A",
            "explanation": "Pasteurization at 80°C destroys vegetative contaminants while activating dormant endospores, ensuring certified enumeration of pure Bacillus endospores.",
            "difficulty": "Hard",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        },
        {
            "id": "PTH215-U2-MCQ60",
            "questionText": "What is the primary mode of physiological action of volatile Hydrogen Cyanide (HCN) synthesized by rhizosphere pseudomonads against root pathogens?",
            "options": {
                "A": "HCN coordinates tightly with the heme a3-CuB binuclear catalytic center of mitochondrial cytochrome c oxidase, blocking cellular electron transfer to oxygen",
                "B": "HCN dissolves the fungal cell wall chitin",
                "C": "HCN acts as an auxin stimulant for roots",
                "D": "HCN freezes the soil water"
            },
            "correctOption": "A",
            "explanation": "Cyanide binds with high affinity to the oxidized ferric heme iron ($Fe^{3+}$) of cytochrome c oxidase (complex IV), terminating aerobic mitochondrial respiration.",
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"
        }
    ]

    # 20 Subjective Questions: DEFINITION (3), SHORT_ANSWER (5), COMPARISON (3), LONG_ANSWER (4), APPLICATION (3), CASE_STUDY (2)
    subj_questions = [
        {
            "id": "PTH215-U2-SUB01",
            "questionType": "DEFINITION",
            "maxMarks": 4,
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)",
            "questionText": "Define 'Siderophore' and explain the structural nature of 'Pyoverdine / Pseudobactin' in Pseudomonas fluorescens.",
            "modelAnswer": "A Siderophore (derived from the Greek root meaning 'iron carrier') is a high-affinity, low-molecular-weight (500 to 1,500 Da) organic ferric iron-chelating ligand biosynthesized and secreted by microorganisms under iron-limiting conditions to scavenge, solubilize, and transport essential ferric iron ($Fe^{3+}$) across cell membranes into the cytoplasm.\n\nPyoverdine (historically termed Pseudobactin) is the primary chromopeptide siderophore synthesized by fluorescent pseudomonads (*Pseudomonas fluorescens*, *P. putida*). Chemically, it consists of three structurally linked domains:\n1. A conserved fluorescent dihydroxyquinoline chromophore (which emits characteristic yellow-green fluorescence under 366 nm UV light).\n2. A variable peptide chain of 6 to 14 amino acids (containing both L- and D-amino acids, resisting proteolytic cleavage).\n3. A dicarboxylic acid or amide acyl side chain.\nPyoverdine functions as a **hexadentate ligand**, coordinating a single $Fe^{3+}$ ion through six oxygen atoms (utilizing catecholate and hydroxamate functional groups) with an extraordinarily high stability constant ($K_f \\approx 10^{32}$). This stability constant far exceeds the iron-binding constants of phytopathogenic fungi, rendering pyoverdine an exceptional weapon of iron-starvation competition in the rhizosphere.",
            "outlinePoints": [
                "Siderophores are low-molecular-weight iron-chelating ligands secreted under iron limitation.",
                "Pyoverdine is a yellow-green fluorescent chromopeptide siderophore.",
                "Consists of a dihydroxyquinoline chromophore, an amino acid peptide chain, and an acyl tail.",
                "Hexadentate ligand coordinating Fe3+ with extreme affinity (Kf ~ 10^32), starving fungal pathogens."
            ]
        },
        {
            "id": "PTH215-U2-SUB02",
            "questionType": "DEFINITION",
            "maxMarks": 4,
            "difficulty": "Easy",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology",
            "questionText": "Define 'Cyclic Lipopeptides' (CLPs) and classify the three major CLP families produced by Bacillus subtilis.",
            "modelAnswer": "Cyclic Lipopeptides (CLPs) are amphiphilic, non-ribosomally synthesized secondary metabolite peptides produced by microorganisms (predominantly *Bacillus* and *Pseudomonas* species) that feature a hydrophilic cyclic peptide ring composed of 7 to 10 amino acid residues covalently linked to a hydrophobic fatty acid acyl side chain of variable length ($C_{13}$ to $C_{17}$).\n\nIn *Bacillus subtilis* and *B. amyloliquefaciens*, CLPs are biosynthesized by modular Non-Ribosomal Peptide Synthetase (NRPS) multi-enzyme complexes and are standardly classified into three distinct functional families:\n1. **Iturin Family (Iturin A, Bacillomycin, Mycosubtilin):** Heptapeptides linked to a $\\beta$-amino fatty acid chain. Renowned for profound, broad-spectrum antifungal activity against filamentous fungi. They interact specifically with sterols in fungal plasma membranes, forming stoichiometric ion-conducting transmembrane lytic pores that induce cell burst.\n2. **Surfactin Family (Surfactin A, B, C):** Heptapeptides linked to a $\\beta$-hydroxy fatty acid chain. Exceptional biosurfactants that reduce water surface tension from 72 to 27 mN/m, insert into phospholipid bilayers to solubilize membranes via detergent action, lyse oomycete zoospores, and mediate bacterial biofilm swarming.\n3. **Fengycin Family (Fengycin A and B / Plipastatin):** Decapeptides containing an internal lactone ring linked to a $\\beta$-hydroxy fatty acid chain. Display selective fungicidal activity against filamentous fungi (*Fusarium*, *Pythium*, *Rhizoctonia*), perturbing lipid bilayer curvature and inducing structural vacuolization.",
            "outlinePoints": [
                "CLPs are amphiphilic molecules featuring a cyclic peptide ring linked to a fatty acid acyl tail.",
                "Biosynthesized non-ribosomally by modular NRPS multi-enzyme complexes.",
                "Iturin Family: Heptapeptides forming lytic transmembrane pores in fungal sterol membranes.",
                "Surfactin Family: Powerful biosurfactants solubilizing membranes and lysing oomycete zoospores.",
                "Fengycin Family: Decapeptides with selective fungicidal action against filamentous plant pathogens."
            ]
        },
        {
            "id": "PTH215-U2-SUB03",
            "questionType": "DEFINITION",
            "maxMarks": 4,
            "difficulty": "Easy",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms",
            "questionText": "Define 'Plant Growth-Promoting Rhizobacteria' (PGPR) and 'ACC Deaminase Activity'.",
            "modelAnswer": "Plant Growth-Promoting Rhizobacteria (PGPR) are free-living, associative, or endophytic rhizosphere-dwelling beneficial bacteria that aggressively colonize plant root systems (rhizoplane and rhizosphere soil) and actively stimulate plant vegetative growth, root architecture, nutrient bioavailability, and systemic disease tolerance through coordinated direct and indirect biological mechanisms.\n\nACC Deaminase Activity refers to the enzymatic capability of specific PGPR strains expressing the **acdS gene** to biosynthesize the enzyme **1-Aminocyclopropane-1-Carboxylate Deaminase (ACC Deaminase)**. In plant tissues experiencing environmental stress (drought, salinity, flooding, heavy metals, or pathogen infection), roots synthesize elevated quantities of ACC, the immediate biochemical precursor of the plant stress hormone **ethylene**. High ethylene concentrations cause acute root growth arrest, epinasty, chlorosis, and premature senescence. Bacterial ACC deaminase exuded at root surfaces cleaves exuded ACC into ammonia ($NH_3$) and $\\alpha$-ketobutyrate. By acting as an extracellular sink that draws ACC out of the plant, the bacterium suppresses internal ethylene accumulation below inhibitory thresholds, allowing sustained primary and lateral root elongation under acute disease and environmental stress.",
            "outlinePoints": [
                "PGPR are beneficial rhizosphere bacteria aggressively colonizing roots to promote growth and health.",
                "ACC Deaminase is an enzyme encoded by the acdS gene in PGPR.",
                "Cleaves 1-aminocyclopropane-1-carboxylate (ACC) into ammonia and alpha-ketobutyrate.",
                "Lowers stress-induced inhibitory ethylene levels in roots, sustaining root growth during stress."
            ]
        },
        {
            "id": "PTH215-U2-SUB04",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 6,
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)",
            "questionText": "Explain the step-by-step mechanism of Siderophore-mediated iron competition by Pseudomonas fluorescens.",
            "modelAnswer": "Iron is an indispensable trace micronutrient required by all living organisms for essential cellular processes, including mitochondrial electron transport (cytochromes), DNA synthesis (ribonucleotide reductase), and protection against oxidative stress (catalase, peroxidase). *Pseudomonas fluorescens* exploits iron chemistry to suppress phytopathogenic fungi through a four-phase competition cascade:\n\n1. **The Insoluble Ferric Iron Challenge:** In well-aerated, neutral to alkaline agricultural soils, free ionic iron ($Fe^{3+}$) hydrolyzes into insoluble oxyhydroxide mineral precipitates (ferrihydrite, goethite). The equilibrium concentration of free soluble $Fe^{3+}$ is approximately $10^{-18}$ to $10^{-20}$ M—far below the minimum concentration ($10^{-6}$ M) required to sustain microbial vegetative growth and fungal spore germination.\n2. **Siderophore Biosynthesis and Secretion:** Under iron limitation ($<10^{-6}$ M $Fe^{3+}$), *P. fluorescens* derepresses the non-ribosomal peptide synthetase operons responsible for biosynthesizing **pyoverdine (pseudobactin)**. Pyoverdine is secreted into the extracellular rhizosphere soil matrix in high concentrations.\n3. **Thermodynamic Iron Sequestration:** Pyoverdine coordinates available ferric ions through its hexadentate oxygen ligand core, forming exceptionally stable, soluble iron complexes ($Fe^{3+}\\text{-pyoverdine}$) with an immense stability constant ($K_f \\approx 10^{32}$). In contrast, soil-borne fungal pathogens (*Fusarium oxysporum*, *Pythium*, *Rhizoctonia*) produce hydroxamate or catecholate siderophores with substantially lower stability constants ($K_f \\approx 10^{22}$ to $10^{29}$). Consequently, *Pseudomonas* thermodynamically sequesters virtually all bioavailable ferric iron in the rhizosphere.\n4. **Selective Receptor Internalization & Fungal Starvation:** *P. fluorescens* possesses specialized outer membrane TonB-dependent receptor proteins (PupA/PupB) that recognize and internalize $Fe^{3+}\\text{-pyoverdine}$ complexes into the bacterium via proton-motive force. Fungal pathogens lack receptors capable of internalizing pseudobactin. Deprived of iron, fungal spores fail to germinate, germ tubes cease elongating, and pathogens cannot establish parasitic infection.",
            "outlinePoints": [
                "Iron is essential for microbial respiration and DNA synthesis, but highly insoluble (Fe3+ ~ 10^-18 M).",
                "Pseudomonas derepresses pyoverdine/pseudobactin synthesis under iron starvation.",
                "Pyoverdine binds Fe3+ with extreme affinity (Kf ~ 10^32), outcompeting fungal siderophores.",
                "TonB-dependent PupA receptors internalize iron into Pseudomonas; fungi cannot uptake pseudobactin.",
                "Pathogens suffer acute iron starvation, halting spore germination and germ tube elongation."
            ]
        },
        {
            "id": "PTH215-U2-SUB05",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 6,
            "difficulty": "Easy",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)",
            "questionText": "Detail the primary antibiotics biosynthesized by Pseudomonas fluorescens and their modes of antifungal action.",
            "modelAnswer": "*Pseudomonas fluorescens* synthesizes a diverse spectrum of broad-spectrum low-molecular-weight antimicrobial secondary metabolites that directly inhibit fungal pathogens in the spermosphere and rhizosphere:\n\n1. **2,4-Diacetylphloroglucinol (DAPG):**\n   - *Chemistry:* A low-molecular-weight phenolic polyketide antibiotic encoded by the six-gene biosynthetic operon *phlACBD*.\n   - *Mode of Action:* DAPG is a broad-spectrum antifungal and antibacterial agent. It partitions into lipid bilayers, acts as a protonophore dissipating transmembrane proton gradients, alters membrane permeability, and disrupts mitochondrial oxidative phosphorylation. It causes zoospore lysis in oomycetes and suppresses *Gaeumannomyces graminis* (take-all of wheat) and *Fusarium* wilts.\n\n2. **Phenazine-1-Carboxylic Acid (PCA):**\n   - *Chemistry:* A bright yellow heterocyclic nitrogenous pigment biosynthesized via the *phz* operon.\n   - *Mode of Action:* PCA penetrates fungal cellular membranes and undergoes redox-cycling. It accepts electrons from fungal respiratory electron transport chains and transfers them to molecular oxygen, generating lethal intracellular bursts of **Reactive Oxygen Species (ROS)**—specifically superoxide radicals ($O_2^{\\bullet-}$) and hydrogen peroxide ($H_2O_2$)—inducing oxidative destruction of fungal lipids and enzymes.\n\n3. **Pyrrolnitrin:**\n   - *Chemistry:* A halogenated phenylpyrrole antibiotic encoded by the *prnABCD* operon from L-tryptophan.\n   - *Mode of Action:* Pyrrolnitrin selectively inhibits fungal protein kinase cascades that regulate glycerol biosynthesis, causing intracellular accumulation of glycerol, osmotic shock, and membrane bursting in *Rhizoctonia solani* and *Botrytis cinerea*. (It served as the natural lead structure for the commercial fungicide fludioxonil).\n\n4. **Pyoluteorin:**\n   - *Chemistry:* A chlorinated bipyridyl compound active primarily against oomycetes (*Pythium ultimum*), suppressing zoosporangial germination and germ tube elongation.\n\n5. **Hydrogen Cyanide (HCN):**\n   - *Chemistry:* A volatile secondary metabolite synthesized from glycine by the enzyme HCN synthase (*hcnABC* operon).\n   - *Mode of Action:* Volatile HCN diffuses through soil air pores and coordinates with the heme iron ($Fe^{3+}$) of fungal **cytochrome c oxidase**, blocking mitochondrial respiration.",
            "outlinePoints": [
                "DAPG: Phenolic polyketide disrupting fungal membranes, proton gradients, and oxidative phosphorylation.",
                "PCA: Phenazine antibiotic undergoing redox cycling to generate lethal reactive oxygen species (ROS).",
                "Pyrrolnitrin: Phenylpyrrole antibiotic inhibiting glycerol synthesis protein kinases (fludioxonil model).",
                "Pyoluteorin: Chlorinated bipyridyl specifically active against oomycete damping-off (Pythium).",
                "Hydrogen Cyanide (HCN): Volatile gas inhibiting fungal mitochondrial cytochrome c oxidase."
            ]
        },
        {
            "id": "PTH215-U2-SUB06",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 6,
            "difficulty": "Easy",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology",
            "questionText": "Explain the cytological and biochemical structure of a Bacillus endospore and explain why endospores provide exceptional commercial shelf-life.",
            "modelAnswer": "When environmental conditions deteriorate (nutrient exhaustion, desiccation), *Bacillus subtilis* undergoes asymmetric cell division to form a specialized, cryptobiotic resting cell termed an **endospore**. The endospore represents one of the most resistant biological structures known to science, organized into five concentric cytological layers:\n\n1. **Endospore Core:** Contains the dehydrated bacterial chromosome, ribosomes, and essential enzymes. The core possesses an exceptionally low water content (10-25% of vegetative cell water), which immobilizes enzymes and prevents thermal denaturation. Genomic DNA is saturated and physically compacted by **alpha/beta-type Small Acid-Soluble Spore Proteins (SASPs)**, which alter DNA conformation from B-DNA to A-DNA, shielding it from ultraviolet radiation, heat, and enzymatic cleavage. Additionally, the core accumulates massive quantities (~10% dry weight) of **pyridine-2,6-dicarboxylic acid (dipicolinic acid - DPA)** chelated with calcium ($Ca^{2+}$), forming a crystalline Ca-DPA lattice that stabilizes nucleic acids.\n2. **Inner Spore Membrane:** An exceptionally impermeable phospholipid bilayer with restricted lipid mobility.\n3. **Germ Cell Wall & Spore Cortex:** A thick, specialized layer of loosely cross-linked peptidoglycan containing muramic acid-$\delta$-lactam residues, exerting compressive mechanical pressure that maintains the core in its dehydrated state.\n4. **Spore Coat:** A thick, multi-layered proteinaceous shield comprising over 70 distinct structural proteins cross-linked by disulfide and dityrosine bonds, resembling animal keratin. The coat acts as an impenetrable physical and chemical sieve, excluding lysozyme, toxic organic solvents, and lytic enzymes.\n5. **Crust / Exosporium:** An outer glycoproteinaceous balloon-like envelope providing surface hydrophobicity.\n\n**Commercial Shelf-Life Implications:**\nBecause the endospore is completely metabolically dormant (cryptobiotic), it does not respire, consume endogenous carbohydrates, or produce toxic metabolic wastes. It easily survives industrial spray-drying temperatures (140°C inlet / 60°C outlet), mechanical shear in blenders, and chemical pesticides. Consequently, commercial *Bacillus* powder formulations retain $>1 \\times 10^8$ CFU/g viability for **1 to 2 years at ambient tropical temperatures (25-35°C)**, far outlasting vegetative pseudomonads.",
            "outlinePoints": [
                "Core: Highly dehydrated (10-25% water), SASP proteins protecting DNA, and Ca-DPA crystalline lattice.",
                "Cortex: Thick, loosely cross-linked peptidoglycan maintaining mechanical dehydration pressure.",
                "Spore Coat: Keratin-like multi-layered protein shield resisting enzymes, solvents, and heat.",
                "Metabolic Dormancy: Zero respiration or nutrient consumption prevents degradation in packages.",
                "Commercial Impact: Resists spray drying; retains >10^8 CFU/g for 1-2 years at room temperature."
            ]
        },
        {
            "id": "PTH215-U2-SUB07",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 6,
            "difficulty": "Easy",
            "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol",
            "questionText": "Describe the biocontrol mechanisms and agricultural significance of Streptomyces actinomycetes in soil ecosystems.",
            "modelAnswer": "Streptomyces species (*Streptomyces griseus*, *Streptomyces lydicus*, *Streptomyces violaceusniger*) are high-G+C, Gram-positive filamentous actinomycetes that form extensively branched vegetative mycelium and chains of aerial arthrospores. They represent an indispensable biological buffer in suppressing plant diseases:\n\n1. **Agricultural Antibiosis (Secondary Metabolites):**\n   - *Streptomyces* possesses large linear genomes (8-10 Mb) encoding dozens of secondary metabolite biosynthetic gene clusters (PKS and NRPS). They synthesize over 70% of naturally occurring antibiotics.\n   - **Validamycin:** An agricultural aminoglycoside produced by *S. hygroscopicus* that specifically inhibits trehalase in *Rhizoctonia solani*, halting the development of rice sheath blight and damping-off.\n   - **Streptomycin Sulfate:** Formulated from *S. griseus* to manage bacterial blights (*Xanthomonas*) and fire blight (*Erwinia amylovora*).\n   - **Kasugamycin and Polyoxins:** Biosynthesized by *Streptomyces* to inhibit fungal protein translocation and chitin assembly in rice blast (*Magnaporthe oryzae*).\n2. **Cell Wall Hydrolysis via Chitinolytic Enzymes:**\n   - Soil actinomycetes are premier recyclers of chitin in the biosphere. When sensing phytopathogenic fungal hyphae in the rhizosphere, *Streptomyces* secretes abundant **endochitinases, exochitinases, and beta-1,3-glucanases** that enzymatically hydrolyze the structural glucan-chitin matrices of fungal hyphae, causing hyphal tip swelling, branching abnormalities, and lysis.\n3. **Aggressive Rhizosphere Colonization & Endophytic Protection:**\n   - *Streptomyces lydicus* colonizes the root elongation zones and feathery root hairs, forming dense epiphytic and endophytic mycelial networks. They aggressively outcompete vascular wilt pathogens (*Fusarium oxysporum*, *Verticillium dahliae*) for colonization space and root exudate sugars, preventing pathogen access to vascular infection courts.",
            "outlinePoints": [
                "Antibiosis: Produces over 70% of natural antibiotics (Validamycin, Streptomycin, Kasugamycin).",
                "Validamycin specifically inhibits trehalase in Rhizoctonia solani sheath blight.",
                "Enzymes: Produces abundant endochitinases and beta-1,3-glucanases lysing fungal cell walls.",
                "Colonization: Forms dense epiphytic/endophytic mycelial shields along root elongation zones.",
                "Competition: Outcompetes vascular wilt pathogens (Fusarium, Verticillium) for infection courts."
            ]
        },
        {
            "id": "PTH215-U2-SUB08",
            "questionType": "SHORT_ANSWER",
            "maxMarks": 6,
            "difficulty": "Easy",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms",
            "questionText": "Explain the dual direct mechanisms of Indole-3-Acetic Acid (IAA) synthesis and Phosphate Solubilization by PGPR.",
            "modelAnswer": "Plant Growth-Promoting Rhizobacteria (PGPR) directly enhance crop productivity and root vigor through the biological secretion of phytohormones and mineral-solubilizing organic acids:\n\n1. **Indole-3-Acetic Acid (IAA) Biosynthesis:**\n   - *Mechanism:* Many beneficial rhizobacteria (*Pseudomonas fluorescens*, *Bacillus subtilis*, *Azospirillum*) utilize L-tryptophan exuded by plant roots as a biochemical precursor to synthesize the auxin **Indole-3-Acetic Acid (IAA)**, predominantly through the **Indole-3-Pyruvic Acid (IPyA)** or **Indole-3-Acetamide (IAM)** pathways.\n   - *Physiological Impact on the Host:* Low concentrations of bacterial IAA loosen plant cell walls, stimulating cellular division and elongation. Auxin specifically triggers the initiation of lateral roots and root hair elongation, increasing the total absorptive surface area of the root system by 200-300%. This expanded root architecture allows the plant to explore greater soil volume for water and minerals, directly increasing plant vigor and rendering the root system more resilient against soil-borne vascular wilt and root-rot pathogens.\n\n2. **Phosphate Solubilization (PSB Action):**\n   - *The Soil Phosphorus Dilemma:* While agricultural soils contain abundant total phosphorus, over 95-98% exists in insoluble, immobile mineral precipitates—such as tricalcium phosphate $[Ca_3(PO_4)_2]$ in neutral/alkaline soils, or strengite $[FePO_4]$ and variscite $[AlPO_4]$ in acidic soils—which plants cannot absorb.\n   - *Mechanism of Solubilization:* Phosphate-solubilizing bacteria (e.g., *Pseudomonas striata*, *Bacillus megaterium*) possess the enzyme **glucose dehydrogenase (GDH)** coupled to the cofactor pyrroloquinoline quinone (PQQ). In the periplasm, GDH oxidizes exuded glucose into **gluconic acid** and **2-ketogluconic acid**, alongside the secretion of citric, isocitric, and malic acids.\n   - *Dissolution:* The organic acids release protons ($H^+$), lowering rhizosphere pH, while their carboxyl and hydroxyl groups chelate divalent and trivalent cations ($Ca^{2+}, Fe^{3+}, Al^{3+}$) from the mineral complexes, releasing bioavailable orthophosphate anions ($H_2PO_4^-$ and $HPO_4^{2-}$) directly into soil solution for plant root absorption.",
            "outlinePoints": [
                "IAA Synthesis: Bacteria utilize root exudate L-tryptophan to synthesize auxin via the IPyA pathway.",
                "IAA Effect: Stimulates lateral root proliferation and root hair elongation, expanding root surface area.",
                "P-Solubilization: Most soil phosphorus is insoluble tricalcium, iron, or aluminum phosphate complexes.",
                "Organic Acids: Glucose dehydrogenase oxidizes glucose into gluconic and 2-ketogluconic acids.",
                "Chelation: Organic acids lower pH and chelate Ca2+/Fe3+/Al3+, releasing soluble orthophosphates (H2PO4-)."
            ]
        },
        {
            "id": "PTH215-U2-SUB09",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)",
            "questionText": "Compare Induced Systemic Resistance (ISR) triggered by PGPR with Systemic Acquired Resistance (SAR) triggered by pathogens.",
            "modelAnswer": "Induced Systemic Resistance (ISR) and Systemic Acquired Resistance (SAR) are two distinct forms of broad-spectrum, whole-plant induced resistance, differing in biological elicitors, signaling cascades, and defense protein profiles:\n\n1. **Inducing Stimulus and Primary Inoculation:**\n   - *SAR (Systemic Acquired Resistance):* Triggered by **necrotizing plant pathogens** (fungi, bacteria, viruses) that produce localized necrotic lesions or hypersensitive response (HR) cell death in leaves.\n   - *ISR (Induced Systemic Resistance):* Triggered by **non-pathogenic root-colonizing PGPR** (such as *Pseudomonas fluorescens*, *Bacillus subtilis*) in the rhizosphere without causing any localized tissue damage or visible necrotic symptoms.\n\n2. **Hormonal Signaling Pathways:**\n   - *SAR:* Strictly dependent on the **Salicylic Acid (SA)** signaling pathway. Involves rapid accumulation of salicylic acid in phloem sap, requiring the central transcriptional regulator **NPR1** (Non-expressor of Pathogenesis-Related genes 1).\n   - *ISR:* Typically independent of salicylic acid; governed by the **Jasmonic Acid (JA)** and **Ethylene (ET)** signaling pathways (although some specific bacterial strains can recruit SA-dependent cross-talk).\n\n3. **Defense Protein Expression and Energetics:**\n   - *SAR:* Characterized by direct, massive, systemic de novo synthesis of **Pathogenesis-Related (PR) proteins**—specifically PR-1, PR-2 ($\beta$-1,3-glucanase), and PR-5 (thaumatin-like proteins)—which continuously consume plant metabolic energy and can impose an agronomic yield penalty in the absence of pathogens.\n   - *ISR:* Characterized by **'Defense Priming' (Sensitization)**. Under non-infected conditions, PR-proteins are not constitutively overexpressed (avoiding metabolic growth penalties). However, upon subsequent pathogen attack, primed plants mobilize defense enzymes (peroxidase, polyphenol oxidase, phenylalanine ammonia lyase, and callose deposition) with markedly accelerated kinetics and intensity.\n\n4. **Spectrum of Protection:**\n   - *SAR:* Broad-spectrum protection primarily against biotrophic and hemibiotrophic foliar pathogens.\n   - *ISR:* Exceptional broad-spectrum protection against necrotrophic pathogens, soil-borne vascular wilt fungi (*Fusarium*), bacterial leaf blights (*Xanthomonas*), and even chewing insect herbivores.",
            "outlinePoints": [
                "Elicitor: SAR is triggered by necrotizing pathogens; ISR is triggered by non-pathogenic PGPR.",
                "Signaling: SAR relies on Salicylic Acid (SA); ISR relies on Jasmonic Acid (JA) and Ethylene (ET).",
                "PR-Proteins: SAR constitutively overexpresses PR-1/PR-2; ISR primes defense enzymes without yield penalty.",
                "Spectrum: SAR protects against biotrophic foliar pathogens; ISR excels against necrotrophs, wilts, and insects."
            ]
        },
        {
            "id": "PTH215-U2-SUB10",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology",
            "questionText": "Compare Pseudomonas fluorescens with Bacillus subtilis across cell wall structure, heat resilience, shelf-life, and primary biocontrol metabolites.",
            "modelAnswer": "Pseudomonas fluorescens and Bacillus subtilis represent the two foremost bacterial biocontrol agents deployed in global plant pathology, exhibiting fundamental biological contrasts:\n\n1. **Cell Wall Structure and Morphology:**\n   - *Pseudomonas fluorescens:* Gram-negative, slender, motile rod with polar flagella. Possesses a thin peptidoglycan layer enveloped by an outer membrane rich in lipopolysaccharides (LPS). Does not form endospores; exists strictly as vegetative cells.\n   - *Bacillus subtilis:* Gram-positive, robust, rod-shaped bacterium with peritrichous flagella. Possesses a thick, multi-layered peptidoglycan cell wall containing teichoic acids. Forms a durable central or sub-terminal endospore.\n\n2. **Heat and Environmental Resilience:**\n   - *Pseudomonas fluorescens:* Thermosensitive vegetative cells. Rapidly inactivated at temperatures above 40-45°C and highly vulnerable to desiccation, osmotic shock, and shear stress during spray drying.\n   - *Bacillus subtilis:* Highly thermotolerant endospores. Resists boiling temperatures (>80-100°C), severe drought, ultraviolet radiation, and mechanical shearing forces in industrial spray dryers.\n\n3. **Commercial Shelf-Life of Formulations:**\n   - *Pseudomonas fluorescens:* Relatively short commercial shelf-life (**4 to 6 months**) in talc powder stored at 25-30°C. Viability drops precipitously if warehouse temperatures exceed 35°C.\n   - *Bacillus subtilis:* Outstanding commercial shelf-life (**12 to 24 months**) at room temperature. Endospores maintain viable counts ($>1 \\times 10^8$ CFU/g) across diverse warehouse conditions.\n\n4. **Primary Biocontrol Metabolites:**\n   - *Pseudomonas fluorescens:* Pyoverdine / pseudobactin siderophores, 2,4-diacetylphloroglucinol (DAPG), phenazine-1-carboxylic acid (PCA), pyrrolnitrin, pyoluteorin, and hydrogen cyanide (HCN).\n   - *Bacillus subtilis:* Cyclic lipopeptides—specifically the Iturin family (iturin A, bacillomycin), Surfactin family (biosurfactants), and Fengycin family, along with bacteriocins (subtilosin A).",
            "outlinePoints": [
                "Morphology: P. fluorescens is Gram-negative (non-spore-forming); B. subtilis is Gram-positive (endospore-forming).",
                "Resilience: P. fluorescens is heat-sensitive (<40°C); B. subtilis endospores survive >80-100°C and desiccation.",
                "Shelf-Life: P. fluorescens has short shelf-life (4-6 months); B. subtilis maintains viability for 12-24 months.",
                "Metabolites: P. fluorescens produces siderophores, DAPG, PCA, pyrrolnitrin; B. subtilis produces iturin, surfactin, fengycin."
            ]
        },
        {
            "id": "PTH215-U2-SUB11",
            "questionType": "COMPARISON",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC",
            "questionText": "Compare Talc-Based Wettable Powder with Liquid Suspension Concentrate (SC) bacterial formulations.",
            "modelAnswer": "Talc-based wettable powders and liquid suspension concentrates represent the two standard delivery formats for commercial bacterial biopesticides in India:\n\n1. **Physical State and Composition:**\n   - *Talc-Based WP:* Solid dry powder consisting of bacterial cells/spores blended into pulverized, steam-sterilized talc mineral carrier (300-mesh) with 1% Carboxymethyl Cellulose (CMC) adhesive and 1.5% $CaCO_3$ buffer, dried to 8-10% moisture.\n   - *Liquid SC:* Liquid suspension consisting of concentrated bacterial cells/endospores suspended in sterile aqueous broth enriched with osmoprotectants (glycerol, trehalose, sorbitol at 5-10%), wetting surfactants, and UV stabilizers.\n\n2. **Active Propagule Concentration (CFU Benchmark):**\n   - *Talc-Based WP:* Minimum **$1 \\times 10^8$ CFU per gram** under statutory CIB&RC specifications.\n   - *Liquid SC:* Minimum **$1 \\times 10^9$ CFU per milliliter** (a 10-fold higher concentration per unit volume than powders).\n\n3. **Application Mechanics and Delivery Systems:**\n   - *Talc-Based WP:* Excellent for seed biopriming (talc powder coats seed surfaces smoothly) and soil application mixed with Farmyard Manure (FYM). However, during foliar spraying, insoluble talc particles settle in spray tanks and can clog fine nozzle filter screens (<50-mesh).\n   - *Liquid SC:* 100% water-miscible with zero insoluble particulate residue. Outstanding for foliar boom spraying, aerial spraying, and automated injection through pressurized micro-irrigation (drip and sprinkler) systems without filter clogging.\n\n4. **Operational Safety and Worker Health:**\n   - *Talc-Based WP:* Poses an occupational inhalation hazard; workers handling bulk powders in enclosed warehouses inhale fine mineral talc dust (silicosis risk) unless respiratory masks are worn.\n   - *Liquid SC:* Completely dust-free; eliminates respiratory inhalation hazards for factory workers and farm laborers.",
            "outlinePoints": [
                "Matrix: Talc WP is dry mineral powder (8-10% moisture); Liquid SC is aqueous suspension with osmoprotectants.",
                "CFU Titer: Talc WP requires min 1x10^8 CFU/g; Liquid SC requires min 1x10^9 CFU/ml (10-fold higher).",
                "Delivery: Talc WP excels in seed biopriming and FYM mixing; Liquid SC excels in drip irrigation and foliar boom spraying.",
                "Nozzle Clogging: Talc WP can settle and clog fine spray nozzles; Liquid SC is 100% miscible with zero clogging.",
                "Occupational Safety: Talc WP poses mineral dust inhalation hazards; Liquid SC is completely dust-free."
            ]
        },
        {
            "id": "PTH215-U2-SUB12",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)",
            "questionText": "Provide a comprehensive analysis of the tripartite biocontrol weaponry of Pseudomonas fluorescens, detailing the molecular genetics, biochemical pathways, and epidemiological impact of Siderophores, Antibiosis, and ISR.",
            "modelAnswer": "Pseudomonas fluorescens represents the preeminent bacterial model of multi-pronged biological disease suppression in modern plant pathology. Its sustained field efficacy against soil-borne and foliar phytopathogens relies on three tightly coordinated, complementary biological weapons:\n\n**1. Weapon 1: Siderophore-Mediated Iron Competition (The Fe3+ Siphon):**\n- *Thermodynamics of Rhizosphere Iron:* In well-aerated agricultural soils at pH 6.5-8.0, iron is locked in insoluble ferric hydroxide mineral complexes $[Fe(OH)_3]$, maintaining free soluble $Fe^{3+}$ at unassimilable concentrations ($10^{-18}$ to $10^{-20}$ M).\n- *Biosynthesis & Molecular Architecture:* Under iron deprivation ($<1 \\mu\\text{M}$), *P. fluorescens* activates the non-ribosomal peptide synthetase operon (*pvd* genes) to biosynthesize **pyoverdine (pseudobactin)**. Pyoverdine is a yellow-green fluorescent chromopeptide consisting of a dihydroxyquinoline chromophore linked to a conserved peptide chain. It functions as a hexadentate ligand coordinating $Fe^{3+}$ with an extraordinary stability constant ($K_f \\approx 10^{32}$).\n- *Mechanism of Pathogen Suppression:* Pyoverdine strips iron out of the soil matrix. Phytopathogenic fungi (*Fusarium oxysporum*, *Pythium ultimum*) produce hydroxamate siderophores with far lower stability constants ($K_f \\approx 10^{22}$ to $10^{29}$) and cannot capture iron. *Pseudomonas* internalizes the $Fe^{3+}\\text{-pyoverdine}$ complex via specific TonB-dependent outer membrane receptors (**PupA / PupB**). Deprived of iron, fungal pathogens cannot synthesize ribonucleotide reductase (halting DNA synthesis), cytochromes (halting mitochondrial respiration), or catalases (causing oxidative lipid autolysis), preventing chlamydospore germination and hyphal growth.\n\n**2. Weapon 2: Broad-Spectrum Antibiosis and Molecular Regulation:**\n- *DAPG Biosynthesis:* Encoded by the conserved biosynthetic operon *phlACBD*. The polyketide synthase PhlD condenses malonyl-CoA to monoacetylphloroglucinol (MAPG), which PhlACB acetylates to 2,4-diacetylphloroglucinol (DAPG). DAPG acts as a protonophore, dissipating mitochondrial proton-motive force and lysing oomycete zoospores.\n- *Phenazine-1-Carboxylic Acid (PCA):* Encoded by the seven-gene core operon *phzA-G*. PCA is a redox-active heterocyclic metabolite that enters fungal hyphae, accepts electrons from respiratory complexes, and reduces molecular oxygen into destructive intracellular **superoxide radicals ($O_2^{\\bullet-}$)** and hydrogen peroxide, triggering membrane lipid peroxidation.\n- *Pyrrolnitrin:* Biosynthesized from L-tryptophan via the *prnABCD* operon. Inhibits protein kinase phosphorylation in fungal glycerol pathways, causing osmotic cell lysis.\n- *GacS/GacA Two-Component Master Switch:* The entire antibiotic and cyanogenesis (*hcnABC*) arsenal is transcriptionally coordinated by the **GacS/GacA** regulatory system. GacS (transmembrane sensor kinase) phosphorylates GacA, transcribing small non-coding regulatory RNAs (**RsmY and RsmZ**). These small RNAs sequester and inactivate the translational repressor protein **RsmA**, derepressing the simultaneous translation of DAPG, PCA, and HCN.\n\n**3. Weapon 3: Induced Systemic Resistance (ISR - The Host Defense Priming):**\n- *Root Colonization and Elicitor Perception:* *P. fluorescens* colonizes root elongation zones, where bacterial determinant molecules—specifically flagellin (flg22), lipopolysaccharides (LPS), and low concentrations of DAPG—are perceived by plant cell-surface Pattern Recognition Receptors (PRRs).\n- *Hormonal Signaling Cascade:* Elicitor recognition launches systemic signaling governed by **Jasmonic Acid (JA) and Ethylene (ET)** pathways, mediated by the central regulatory node **NPR1** (acting downstream in the cytoplasm without requiring nuclear translocation).\n- *Defense Priming:* Rather than expending heavy metabolic energy on constitutive PR-protein synthesis, the plant enters a 'primed' state (sensitization). Upon subsequent fungal or bacterial challenge on distant foliage or roots, the primed plant mobilizes defense cascades with accelerated kinetics: rapid deposition of callose papillae beneath penetration sites, accelerated transcriptional upregulation of **Phenylalanine Ammonia Lyase (PAL)** (generating phenolic precursors for lignin), **Peroxidase (POX)** (driving cell-wall lignification), and **Polyphenol Oxidase (PPO)** (generating toxic quinones), establishing whole-plant systemic immunity.",
            "outlinePoints": [
                "Siderophore Competition: Pyoverdine (Kf ~ 10^32) siphons trace Fe3+ through TonB-dependent PupA receptors.",
                "Iron Starvation: Fungal pathogens (Fusarium, Pythium) lack compatible receptors and suffer respiratory arrest.",
                "Antibiosis: DAPG disrupts fungal membranes; PCA generates intracellular reactive oxygen species (ROS).",
                "Pyrrolnitrin: Phenylpyrrole antibiotic inhibiting fungal glycerol synthesis protein kinases.",
                "GacS/GacA Regulation: Master two-component kinase transcribes RsmY/RsmZ small RNAs, derepressing translation.",
                "ISR Priming: Root perception of flagellin/LPS triggers jasmonic acid and ethylene systemic defense signaling.",
                "Enzyme Mobilization: Primed plants respond to pathogen attack with accelerated PAL, POX, and callose synthesis."
            ]
        },
        {
            "id": "PTH215-U2-SUB13",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology",
            "questionText": "Provide an in-depth biochemical and bioengineering analysis of Bacillus subtilis, detailing cyclic lipopeptide pore formation, endospore developmental genetics, and industrial submerged fermentation.",
            "modelAnswer": "Bacillus subtilis represents the pinnacle of dual-action bacterial biocontrol, combining the direct membrane-lysing power of cyclic lipopeptides with the extreme physical durability of bacterial endospores:\n\n**1. Cyclic Lipopeptides: Biosynthesis and Membrane Lysis Kinetics:**\n- *Non-Ribosomal Biosynthesis:* *B. subtilis* devotes up to 5% of its entire genome to non-ribosomal peptide synthetases (NRPS). Unlike ribosomal translation, NRPS multi-enzyme complexes assemble amino acids without mRNA templates using modular architectures comprising Adenylation (A), Peptidyl Carrier (PCP), and Condensation (C) domains, terminated by a Thioesterase (TE) domain that cyclizes the peptide ring.\n- *Iturin Family Pore Formation:* Iturin A is a cyclic heptapeptide linked to a $\\beta$-amino fatty acid ($C_{14}\\text{-}C_{17}$). Iturin displays selective, high-affinity binding to **ergosterol and cholesterol** within fungal and oomycete plasma membranes. Upon sterol binding, iturin molecules self-assemble into stoichiometric, barrel-stave oligomeric complexes, creating hydrophilic transmembrane ion-conducting pores (1.5-2.0 nm diameter). These pores permit uncontrolled leakage of intracellular potassium ($K^+$), nucleotides, and essential cofactors, dissipating cellular membrane potential and inducing colloid-osmotic swelling and lytic burst within minutes.\n- *Surfactin Membrane Solubilization:* Surfactin ($C_{13}\\text{-}C_{15}$ $\\beta$-hydroxy fatty acid + heptapeptide) is an extraordinary biosurfactant. At sub-micellar concentrations, it inserts into lipid bilayers, expanding membrane surface area; at critical micelle concentration (CMC ~10 $\\mu\\text{M}$), it acts via a carpet/detergent mechanism, solubilizing lipid membranes, dissolving zoospore envelopes of downy mildews, and promoting bacterial root swarming.\n- *Fengycin Filamentous Specificity:* Decapeptides containing an internal lactone ring that specifically alter lipid bilayer curvature in filamentous fungi (*Fusarium*, *Rhizoctonia*), inducing deep structural vacuolization.\n\n**2. Endospore Developmental Genetics and Morphogenesis:**\n- *Sporulation Phosphorelay:* Depletion of carbon, nitrogen, or phosphorus is detected by five transmembrane sensor kinases (KinA, KinB, KinC, KinD, KinE). The kinases autophosphorylate and transfer the high-energy phosphoryl group through a four-protein phosphorelay: $\\text{Kin} \\rightarrow \\text{Spo0F} \\rightarrow \\text{Spo0B} \\rightarrow \\text{Spo0A}$.\n- *Transcriptional Cascades:* Phosphorylated **Spo0A~P** activates the master sporulation switch. Compartmentalized gene expression follows through four specialized sigma factors: **Sigma-F and Sigma-G** direct transcription inside the developing forespore; **Sigma-E and Sigma-K** direct transcription in the mother cell.\n- *Cytological Assembly:* Asymmetric division forms a smaller forespore engulfed by the mother cell. The mother cell synthesizes the thick peptidoglycan cortex and deposits over 70 cross-linked keratin-like structural coat proteins (CotA-Z). The forespore core synthesizes **alpha/beta-type Small Acid-Soluble Proteins (SASPs)** that bind and alter DNA conformation to A-DNA, while accumulating **calcium dipicolinate (Ca-DPA)** (10% of spore dry weight) that drives core dehydration (water content drops to 10-25%). Upon mother cell autolysis, the free endospore is released, possessing extreme resistance to heat (>80°C), desiccation, ultraviolet radiation, and gamma irradiation.\n\n**3. Industrial Submerged Fermentation Engineering:**\n- *Nutrient Formulation:* Commercial production uses large stirred-tank bioreactors (1,000 to 50,000 L). Media utilizes cheap agro-industrial inputs: cane molasses (3-5% w/v), defatted soybean meal (2-3%), yeast autolysate, and $KH_2PO_4$. A critical bioengineering parameter is the addition of **manganese sulfate ($MnSO_4$, 20-50 ppm)**, as $Mn^{2+}$ is an indispensable cofactor for phosphoglycerate mutase that triggers synchronous, high-efficiency sporulation.\n- *Bioreactor Operation:* Maintained at 30-32°C, pH 6.8-7.2 (automated control with NaOH/$H_2SO_4$), dissolved oxygen (DO) maintained >30% saturation via sterile air sparging (0.8-1.2 vvm) and agitation (150-300 rpm).\n- *Fermentation Timeline:* Rapid logarithmic vegetative biomass proliferation occurs during 0 to 18 hours. As easily assimilable nutrients deplete at 18-24 hours, Spo0A phosphorylation triggers sporulation. By 48 to 60 hours, mother cells lyse. Fermentation is terminated when phase-contrast microscopy confirms **>95% free refractile endospores** with titers exceeding $5 \\times 10^9$ spores/ml.\n- *Downstream Harvesting:* Broth is harvested via continuous-flow disc-stack centrifugation or microfiltration to yield a concentrated spore slurry (15-20% solids), which is blended with sterilized talc carrier (1:2 w/w) containing 1% CMC adhesive, or spray-dried directly to yield commercial wettable powders.",
            "outlinePoints": [
                "NRPS Synthesis: Non-ribosomal peptide synthetases assemble cyclic lipopeptides without mRNA templates.",
                "Iturin Lysis: Heptapeptides bind fungal ergosterol, forming 1.5-2 nm pores causing potassium leakage and lysis.",
                "Surfactin Action: Lowers surface tension to 27 mN/m, solubilizing lipid membranes and lysing zoospores.",
                "Sporulation Switch: Kinase phosphorelay activates Spo0A~P; Sigma-F/G and Sigma-E/K orchestrate morphogenesis.",
                "Endospore Core: Ca-DPA crystalline lattice and SASP proteins dehydrate the core and protect genomic DNA.",
                "Bioreactor Engineering: Molasses/soy media with 20-50 ppm Mn2+ operated at 30°C, DO >30%, sporulating in 48-60 h.",
                "Harvest: Centrifugation yields >95% refractile endospores blended into sterilized talc with 1% CMC adhesive."
            ]
        },
        {
            "id": "PTH215-U2-SUB14",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms",
            "questionText": "Provide a comprehensive analysis of the Plant Growth-Promoting Rhizobacteria (PGPR) concept, evaluating direct biofertilization mechanisms, indirect biocontrol pathways, and their integration in sustainable agriculture.",
            "modelAnswer": "The Plant Growth-Promoting Rhizobacteria (PGPR) paradigm, established by Joseph W. Kloepper and Milton N. Schroth in 1978, defines root-colonizing bacteria that exert beneficial impacts on plant growth, nutrient acquisition, and systemic disease tolerance. Rather than acting as narrow biocontrol agents or simple biofertilizers, PGPR function as multi-functional ecological bio-enhancers operating through distinct direct and indirect modalities:\n\n**1. Direct Mechanisms of Plant Growth Promotion (Biofertilization and Phytohormones):**\n- *Auxin (IAA) Biosynthesis and Root Architecture:* Over 80% of rhizosphere PGPR synthesize Indole-3-Acetic Acid (IAA), predominantly through the **Indole-3-Pyruvic Acid (IPyA)** pathway from root-exuded tryptophan. Exogenous bacterial IAA loosens host root cell walls, stimulating cellular division and lateral root emergence while vastly expanding root hair density. This expands the effective nutrient-depletion zone around the plant, allowing increased uptake of immobile soil ions ($H_2PO_4^-, K^+, Zn^{2+}$) and improving vegetative biomass.\n- *Phosphate Solubilization:* In soils, up to 98% of phosphorus is locked in insoluble mineral precipitates (calcium phosphate in alkaline soils; iron/aluminum phosphates in acidic soils). PGPR strains (*Pseudomonas striata*, *Bacillus megaterium*) possess membrane-bound glucose dehydrogenase coupled to pyrroloquinoline quinone (PQQ-GDH). They oxidize glucose into **gluconic acid and 2-ketogluconic acid**. These low-molecular-weight organic acids lower rhizosphere pH and chelate $Ca^{2+}, Fe^{3+}$, and $Al^{3+}$, releasing soluble orthophosphates ($H_2PO_4^-$) for plant uptake.\n- *ACC Deaminase Stress Mitigation:* Under abiotic (salinity, drought, flooding) or biotic (pathogen infection) stress, plants synthesize 1-aminocyclopropane-1-carboxylate (ACC), the immediate precursor to the inhibitory stress hormone **ethylene**. Excessive ethylene causes root stunting, epinasty, and premature senescence. PGPR expressing **ACC Deaminase (acdS gene)** hydrolyze exuded ACC into ammonia and $\\alpha$-ketobutyrate, functioning as a metabolic sink that prevents stress ethylene spikes, sustaining root elongation under severe disease and drought stress.\n- *Biological Nitrogen Fixation:* Free-living and associative PGPR (*Azospirillum*, *Azotobacter*) express nitrogenase (*nif* genes), fixing atmospheric $N_2$ in cereal and vegetable rhizospheres.\n\n**2. Indirect Mechanisms (Biocontrol and Disease Suppression):**\n- *Iron Starvation via Siderophores:* Synthesis of high-affinity ferric iron chelators (pseudobactins, pyoverdines, bacillibactins) that starve soil-borne fungal pathogens (*Fusarium*, *Pythium*) of essential $Fe^{3+}$.\n- *Antibiosis:* Direct excretion of broad-spectrum antibiotics (2,4-DAPG, phenazines, pyrrolnitrin, iturins, surfactins) that lyse fungal mycelium, disrupt oxidative phosphorylation, and dissolve oomycete zoospore membranes.\n- *Lytic Enzymes:* Production of chitinases, $\\beta$-1,3-glucanases, and proteases that degrade fungal hyphal cell walls.\n- *Induced Systemic Resistance (ISR):* Priming of whole-plant systemic defense via jasmonic acid and ethylene signaling pathways, upregulating defense enzymes (PAL, POX, PPO) and structural callose papillae.\n\n**3. Agronomic Integration in Sustainable Agriculture:**\n- *Substitution of Chemical Inputs:* Integrating PGPR reduces synthetic chemical nitrogen and phosphatic fertilizer requirements by **20 to 25%** while eliminating hazardous soil-drench fungicides.\n- *Delivery Methods:* Applied through seed biopriming (10 g/kg seed with 1% CMC), nursery soil drenching, seedling root dipping (1% suspension for 15 min), and automated injection into pressurized micro-irrigation (drip) lines.\n- *Climate Resilience:* Dual growth promotion and ACC deaminase activity equip crops to withstand escalating climate-induced salinity, heat, and pathogen pressures without chemical residues.",
            "outlinePoints": [
                "Concept: Kloepper and Schroth (1978) established PGPR as multi-functional root-colonizing bio-enhancers.",
                "Direct - Auxin (IAA): Synthesizes IAA via IPyA pathway, expanding lateral roots and nutrient uptake.",
                "Direct - P-Solubilization: PQQ-GDH secretes gluconic acid, chelating Ca/Fe/Al to release soluble orthophosphates.",
                "Direct - ACC Deaminase: acdS gene hydrolyzes ACC, suppressing stress ethylene and sustaining root growth.",
                "Indirect - Biocontrol: Siderophore iron starvation, broad-spectrum antibiosis (DAPG/iturins), and lytic enzymes.",
                "Indirect - ISR Priming: Elicitors trigger systemic defense via jasmonate/ethylene pathways without yield penalties.",
                "Agronomic Impact: Replaces 20-25% chemical fertilizers, eliminates synthetic fungicides, and boosts climate resilience."
            ]
        },
        {
            "id": "PTH215-U2-SUB15",
            "questionType": "LONG_ANSWER",
            "maxMarks": 10,
            "difficulty": "Hard",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC",
            "questionText": "Formulate a comprehensive industrial manufacturing protocol for talc-based Pseudomonas fluorescens wettable powder, detailing fermentation parameters, formulation chemistry, quality control testing, and packaging standards.",
            "modelAnswer": "Industrial manufacturing of commercial *Pseudomonas fluorescens* wettable powder requires rigid adherence to sterile bioprocess engineering, carrier formulation chemistry, statutory quality testing, and protective packaging:\n\n**1. Strain Selection and Seed Train Maintenance:**\n- *Certified Strain:* Pure authenticated mother culture of *Pseudomonas fluorescens* (e.g., MTCC or ITCC registered accession) displaying certified DAPG/pyoverdine production and bioefficacy.\n- *Seed Inoculum Scale-Up:* Cryopreserved stock (-80°C in 20% glycerol) -> streaked on King's B agar -> single colony inoculated into 250 ml King's B shake flask (incubated 24 h at 28°C, 180 rpm) -> transferred to 5-liter laboratory seed fermenter (16 h, DO >40%) -> inoculates industrial production bioreactor at 5% (v/v) transfer rate.\n\n**2. Bioreactor Submerged Liquid Fermentation:**\n- *Nutrient Media Formulation:* Cheap agro-industrial media per 1,000 liters: Cane molasses (20 kg), defatted soybean meal (15 kg), peptone (5 kg), $MgSO_4 \\cdot 7H_2O$ (1.5 kg), $K_2HPO_4$ (1.5 kg), and antifoam (silicone emulsion 0.05%).\n- *Operating Parameters:* Temperature maintained at **28 ± 1°C**; pH automatically controlled at **7.0 to 7.2** using sterile 2N NaOH or 2N $H_2SO_4$; sterile air sparging maintained at **0.8 to 1.0 vvm**; variable-speed Rushton turbine agitation (150-250 rpm) maintaining dissolved oxygen (DO) above **25% saturation**.\n- *Harvest Criterion:* Cultivated for **48 hours** until the bacterial culture reaches late logarithmic / early stationary phase, with verified viable cell densities exceeding **$2 \\times 10^9$ CFU/ml**.\n\n**3. Carrier Sterilization and Formulation Chemistry:**\n- *Carrier Selection:* High-grade **Talc powder (hydrated magnesium silicate, 300-mesh)**, chemically inert, neutral pH (7.0-8.0), low heavy metal content.\n- *Fractional Double-Autoclaving:* Raw talc carrier is packaged in shallow stainless-steel trays or polypropylene bags and steam-sterilized at **121°C (15 psi) for 60 minutes on two consecutive days**. This ensures complete eradication of heat-resistant indigenous bacterial and fungal endospores.\n- *Additives:* Add **Carboxymethyl Cellulose (CMC, high-viscosity grade @ 1.0% w/w)** as a seed-coating adhesive sticker, and **Calcium Carbonate ($CaCO_3$ @ 1.5% w/w)** as an internal pH buffer.\n- *Aseptic Blending:* In a sterile ribbon blender under HEPA laminar airflow, mix the bacterial fermentation broth with sterilized talc carrier at a **1:2 ratio (w/w)** (e.g., 500 liters broth blended into 1,000 kg talc).\n- *Curing & Dehumidification:* The moist slurry is spread in a sterile laminar curing chamber under dehumidified air at **<28°C** for 24-36 hours until moisture content drops to **8.0% to 10.0%**.\n\n**4. Statutory Quality Control Testing (CIB&RC Protocols):**\n- *Viable Count (CFU/g):* Serial decimal dilution plating on King's B agar; count must strictly exceed **$1 \\times 10^8$ CFU/g**.\n- *Biological Contamination:* Total non-pathogenic contaminants must not exceed **$1 \\times 10^4$ CFU/g**.\n- *Zero-Tolerance Human Pathogens:* Certified 100% absence of *Salmonella*, *Shigella*, and *Vibrio* (tested on XLD and Selenite F media).\n- *Physical Properties:* Sieve test: $\\ge 98\\%$ passing 75-micron sieve; pH: 6.8 to 7.5; suspensibility: $\\ge 60\\%$.\n\n**5. Hermetic Packaging and Storage:**\n- Packaged in **500 g and 1.0 kg multi-layered laminated aluminum foil pouches (Polyester/Al-Foil/Polyethylene)** and induction-sealed to prevent moisture ingress and photolytic degradation.\n- Labeled with strain accession number, manufacturing date, expiry date (6 months), and storage instructions ('Store in a cool, dry place below 25°C').",
            "outlinePoints": [
                "Seed Train: Scale-up from cryovials to shake flasks and pilot fermenters under strict sterility.",
                "Bioreactor Operation: Molasses-soy media cultivated at 28°C, pH 7.0, DO >25% for 48 h (titer >2x10^9 CFU/ml).",
                "Carrier Sterilization: 300-mesh talc carrier double-autoclaved at 121°C on two consecutive days.",
                "Formulation Chemistry: Blend broth with talc (1:2 w/w) with 1% CMC adhesive and 1.5% CaCO3 buffer.",
                "Curing: Controlled dehumidification at <28°C to an end-point moisture of 8.0-10.0%.",
                "Quality Testing: Confirm viable count >1x10^8 CFU/g, contaminants <10^4/g, zero Salmonella/Shigella, 98% pass 75-micron sieve.",
                "Packaging: Hermetically induction-sealed multi-layered aluminum foil pouches stored below 25°C (6-month shelf life)."
            ]
        },
        {
            "id": "PTH215-U2-SUB16",
            "questionType": "APPLICATION",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms",
            "questionText": "A pulse farmer in Madhya Pradesh faces severe chickpea wilt (Fusarium oxysporum f. sp. ciceris) and phosphorus deficiency in alkaline black cotton soil. Design an integrated bacterial seed and soil treatment protocol.",
            "modelAnswer": "Chickpea (*Cicer arietinum*) in alkaline black cotton soil (pH 7.8-8.5) faces two severe interconnected bottlenecks: vascular wilt infection by *Fusarium oxysporum f. sp. ciceris* (chlamydospores persisting 5-10 years in soil) and severe phosphorus fixation into insoluble tricalcium phosphate. A dual bacterial bio-management protocol addresses both constraints:\n\n**Integrated Bacterial Management Protocol:**\n\n1. **Pre-Planting Soil Enrichment (PSB + Bio-Antagonist):**\n   - Blend **2.5 kg of Pseudomonas fluorescens (1 x 10^8 CFU/g)** with **2.5 kg of Bacillus megaterium / Pseudomonas striata (Phosphate Solubilizing Bacteria - PSB)**.\n   - Thoroughly mix into **500 kg of well-decomposed, moist Farmyard Manure (FYM)** or vermicompost.\n   - Maintain moisture at 40%, cover with a moist gunny bag under tree shade, and incubate for 10-12 days. The beneficial bacteria will multiply 10-fold throughout the organic matrix.\n   - Broadcast this bio-enriched FYM uniformly over 1 hectare in planting furrows during final land preparation.\n   - *Impact:* The PSB secretes gluconic and citric acids that chelate calcium ($Ca^{2+}$), converting fixed tricalcium phosphate into bioavailable $H_2PO_4^-$, while *P. fluorescens* colonizes the root zone.\n\n2. **Seed Biopriming Protocol:**\n   - Prepare a smooth slurry using **10 g of Pseudomonas fluorescens WP (1 x 10^8 CFU/g)** per kilogram of chickpea seed.\n   - Add **10 ml of 10% cooled jaggery or rice gruel solution** as a sticker and nutrient adjuvant.\n   - Mix seeds gently to ensure uniform coating over seed coats without damaging the seed testa.\n   - Shade-dry coated seeds on clean plastic sheets for 1 to 2 hours before sowing.\n\n3. **Biological Disease Suppression Mechanics:**\n   - As seeds germinate, *P. fluorescens* aggressively colonizes emerging radicles and feathery root hairs, forming an antimicrobial biofilm.\n   - The bacteria secrete **pseudobactin siderophores** that siphon iron away from *Fusarium* chlamydospores, halting germination.\n   - Direct secretion of **DAPG and PCA** inhibits fungal hyphal growth, while bacterial determinants trigger **Induced Systemic Resistance (ISR)**, upregulating host peroxidase (POX) and phenylalanine ammonia lyase (PAL) to seal vascular xylem vessels.",
            "outlinePoints": [
                "Agronomic Constraints: Fusarium vascular wilt and severe phosphorus fixation in alkaline black cotton soil.",
                "Soil Enrichment: Blend 2.5 kg P. fluorescens + 2.5 kg PSB into 500 kg moist FYM; incubate 10-12 days under shade.",
                "P-Solubilization: PSB gluconic acid chelates Ca2+, releasing fixed orthophosphates for root uptake.",
                "Seed Biopriming: Treat chickpea seeds with P. fluorescens (10 g/kg) using 10% jaggery adhesive slurry; shade dry.",
                "Wilt Suppression: Siderophores starve Fusarium of iron; DAPG/PCA inhibit hyphae; ISR primes vascular xylem defenses."
            ]
        },
        {
            "id": "PTH215-U2-SUB17",
            "questionType": "APPLICATION",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC",
            "questionText": "Describe how to perform a laboratory serial dilution and spread plating assay to verify the viable CFU count of commercial Pseudomonas fluorescens wettable powder.",
            "modelAnswer": "Statutory verification of viable bacterial cell concentration in commercial *Pseudomonas fluorescens* formulations is conducted via serial decimal dilution and spread plating on King's B medium under laminar airflow:\n\n**Step-by-Step Analytical Laboratory Assay:**\n1. **Sample Weighing and Primary Stock Suspension ($10^{-1}$ Dilution):**\n   - Aseptically weigh exactly **1.0 g** of the commercial *P. fluorescens* wettable powder on an analytical balance.\n   - Transfer into a sterile 150 ml conical flask containing **9.0 ml of sterile physiological saline (0.85% NaCl)** with 0.05% Tween-80. Vortex vigorously for 15 minutes to fully release bacterial cells from talc mineral particles.\n\n2. **Serial Decimal Dilutions ($10^{-2}$ to $10^{-8}$):**\n   - Set up seven sterile test tubes labeled $10^{-2}, 10^{-3}, 10^{-4}, 10^{-5}, 10^{-6}, 10^{-7}, 10^{-8}$, each containing **9.0 ml of sterile distilled water**.\n   - Pipette **1.0 ml** from the $10^{-1}$ stock flask into the $10^{-2}$ tube and vortex. Using a fresh sterile pipette tip, transfer 1.0 ml from $10^{-2}$ to $10^{-3}$. Repeat sequentially down to $10^{-8}$.\n\n3. **Plating on King's B Agar:**\n   - Pipette **0.1 ml** aliquots from $10^{-6}, 10^{-7}$, and $10^{-8}$ dilutions onto duplicate sterile **King's B agar** plates (Proteose peptone 20 g, Glycerol 10 ml, $K_2HPO_4$ 1.5 g, $MgSO_4 \\cdot 7H_2O$ 1.5 g, Agar 15 g, Water 1000 ml).\n   - Spread the aliquot evenly across the agar using a flame-sterilized glass L-spreader (Drigalski spatula).\n   - Incubate plates inverted at **28 ± 1°C** for 24 to 48 hours.\n\n4. **Colony Counting and Calculation:**\n   - Select dilution plates exhibiting between **30 and 300 colonies**. Verify characteristic *P. fluorescens* colonies: circular, smooth, convex, off-white, and emitting intense yellow-green fluorescence under a 366 nm UV transilluminator.\n   - Calculate viable CFU/g:\n     $$\\text{CFU/g} = \\frac{\\text{Average Number of Fluorescent Colonies} \\times \\text{Dilution Factor}}{\\text{Volume Plated } (0.1\\text{ ml})}$$\n   - Example: If 145 colonies are counted on $10^{-6}$ plates, $\\text{CFU/g} = (145 \\times 10^6) / 0.1 = 1.45 \\times 10^9\\text{ CFU/g}$. The formulation passes CIB&RC statutory standards (minimum $1 \\times 10^8$ CFU/g).",
            "outlinePoints": [
                "Stock Suspension: 1.0 g powder vortexed in 9 ml sterile saline with 0.05% Tween-80 for 15 min (10^-1).",
                "Serial Dilution: Sequential 10-fold transfers down to 10^-8 using sterile pipette tips.",
                "Plating: Spread 0.1 ml from 10^-6, 10^-7, 10^-8 onto duplicate King's B agar plates; incubate at 28°C for 24-48 h.",
                "Colony Verification: Count plates with 30-300 colonies emitting yellow-green fluorescence under 366 nm UV.",
                "Mathematical Formula: CFU/g = (Average Colonies x Dilution Factor) / 0.1 ml; verify >= 1 x 10^8 CFU/g."
            ]
        },
        {
            "id": "PTH215-U2-SUB18",
            "questionType": "APPLICATION",
            "maxMarks": 6,
            "difficulty": "Medium",
            "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology",
            "questionText": "Design a foliar bio-spray program using Bacillus subtilis liquid formulation to protect apple orchards against Apple Scab (Venturia inaequalis).",
            "modelAnswer": "Apple scab (*Venturia inaequalis*) is a destructive ascomycete disease in temperate apple orchards (Himachal Pradesh, Jammu & Kashmir), causing velvety olive-green scab lesions on leaves and cracked, deformed fruits. A foliar bio-spray program using *Bacillus subtilis* liquid formulation provides effective, residue-free protection:\n\n**Apple Scab Foliar Bio-Spray Program:**\n1. **Product Specification and Dosage:**\n   - Use registered *Bacillus subtilis* Liquid Suspension Concentrate (SC) containing a minimum of **$1 \\times 10^9$ viable endospores per milliliter**.\n   - Dosage: **3.0 to 4.0 ml per liter of water** (equivalent to 1.5 to 2.0 liters per 500 liters of water per hectare for mature apple canopies).\n\n2. **Critical Phenological Spray Windows:**\n   - *Spray 1 (Silver Tip to Green Tip Stage):* Targets overwintering ascospores shooting from dead leaf pseudothecia on the orchard floor.\n   - *Spray 2 (Pink Bud Stage):* Coats expanding floral sepals and cluster leaves with protective iturin lipopeptides before primary ascospore showers.\n   - *Spray 3 (Petal Fall / Calyx Stage):* Critical window to protect young developing fruitlets against secondary conidial infection.\n   - *Spray 4 (Fruit Development Stage):* Apply at 14-day intervals during wet weather until fruit marble size.\n\n3. **Application Mechanics and Tank Synergy:**\n   - Diurnal Timing: Spray in **late afternoon (after 4:00 PM)** or during cloudy weather to protect germinating bacteria from intense high-altitude solar UV radiation.\n   - Adjuvants: Add a non-ionic organosilicone wetting agent (e.g., Silwet L-77 @ 0.03% / 0.3 ml/L) to lower surface tension, ensuring the bacterial suspension covers both upper and lower leaf surfaces.\n   - Mode of Action in Canopy: *B. subtilis* endospores germinate in canopy dew, colonizing leaf micro-cracks and secreting **iturin A and bacillomycin**, which form lytic pores in germinating *Venturia* ascospores, while **surfactin** dissolves fungal appressoria.",
            "outlinePoints": [
                "Product: B. subtilis liquid SC (min 1x10^9 CFU/ml) applied at 3-4 ml/L in mature apple canopies.",
                "Phenological Windows: Silver tip, Pink bud, Petal fall (critical), and fruit development at 14-day intervals.",
                "Diurnal Timing: Spray late afternoon (>4:00 PM) to shield vegetative cells from solar UV radiation.",
                "Adjuvants: Add 0.03% organosilicone surfactant for complete foliar coverage on waxy apple leaves.",
                "Canopy Action: Bacteria colonize micro-cracks, secreting iturin to lyse ascospores and surfactin to dissolve appressoria."
            ]
        },
        {
            "id": "PTH215-U2-SUB19",
            "questionType": "CASE_STUDY",
            "maxMarks": 8,
            "difficulty": "Hard",
            "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC",
            "questionText": "A biofertilizer laboratory in Punjab bottles unsterilized liquid broth of Pseudomonas fluorescens without osmoprotectants for direct retail. After 60 days, farmers report zero disease control and laboratory testing shows viable counts dropped to zero. Diagnose the technical failures and prescribe industrial remedies.",
            "modelAnswer": "This failure illustrates the severe vulnerability of vegetative Gram-negative bacteria when formulated without bioprocess rigor and osmoprotection:\n\n**Diagnostic Technical Failures:**\n1. **Absence of Osmoprotectants and Metabolic Burnout:**\n   - *Pseudomonas fluorescens* is a strictly vegetative, non-spore-forming bacterium. In plain aqueous liquid broth at ambient warehouse temperatures (30-38°C in Punjab summers), bacterial cells remain metabolically active.\n   - Lacking compatible osmoprotectants (such as glycerol, trehalose, or sorbitol), the cells undergo accelerated endogenous respiration, depleting internal glycogen and ATP reserves within 15-20 days.\n   - Membrane phospholipids undergo autoxidative peroxidation, leading to loss of membrane integrity and rapid autolytic cell death, dropping viable CFU counts to absolute zero within 60 days.\n2. **Oxygen Depletion and Asphyxiation in Sealed Bottles:**\n   - *Pseudomonas* is a strictly aerobic bacterium requiring continuous dissolved oxygen. Packaging dense liquid broth ($10^9$ cells/ml) into airtight, non-permeable plastic bottles rapidly exhausts dissolved oxygen within 48 hours. The cells suffocate and undergo anaerobic autolysis.\n3. **Failure to Use Sterilized Ingredients and Contaminant Proliferation:**\n   - Bottling unsterilized broth introduced airborne bacterial and fungal contaminants. Anaerobic spore-formers (*Bacillus*, *Clostridium*) and yeasts proliferated, fermenting residual sugars, producing toxic acids and foul mercaptan gases, outcompeting and poisoning the delicate pseudomonads.\n\n**Prescribed Industrial and Bioengineering Remedies:**\n1. **Incorporate Osmoprotectants and Polyols:**\n   - Reformulate the liquid medium to include **8 to 10% (v/v) pure glycerol** or **5% trehalose** alongside 1% polyvinylpyrrolidone (PVP-K30) as a cell stabilizer.\n   - Glycerol replaces water molecules in bacterial hydration shells, lowers cellular water activity ($a_w$), stabilizes protein tertiary structure, and arrests metabolic burnout.\n2. **Adopt Aerated or Semi-Permeable Packaging:**\n   - Package liquid formulations in high-density polyethylene (HDPE) containers equipped with **gas-permeable, breathable microporous ePTFE membrane vent caps** that permit passive oxygen diffusion while preventing liquid leakage and microbial ingress.\n3. **Transition to Talc-Based Dry Powder or Bacillus Endospores:**\n   - For tropical warehouse storage without cold chains, blend fermentation broth into sterilized 300-mesh talc carrier with 1% CMC, or transition the commercial product to endospore-forming **Bacillus subtilis**, which naturally guarantees a 1-2 year shelf-life.",
            "outlinePoints": [
                "Failure 1: Absence of osmoprotectants caused metabolic burnout, lipid peroxidation, and autolysis.",
                "Failure 2: Strict aerobes suffocated in airtight plastic bottles due to dissolved oxygen exhaustion.",
                "Failure 3: Unsterilized broth allowed contaminating anaerobic spore-formers to outcompete pseudomonads.",
                "Remedy 1: Add 8-10% glycerol or 5% trehalose osmoprotectants to arrest metabolic respiration.",
                "Remedy 2: Use HDPE bottles with breathable ePTFE membrane vent caps allowing oxygen diffusion.",
                "Remedy 3: Transition to sterilized talc powder carriers or endospore-forming Bacillus subtilis."
            ]
        },
        {
            "id": "PTH215-U2-SUB20",
            "questionType": "CASE_STUDY",
            "maxMarks": 8,
            "difficulty": "Hard",
            "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms",
            "questionText": "An agricultural university evaluates an indigenous Pseudomonas fluorescens isolate that produces immense titers of DAPG and siderophores in vitro, but fails completely to suppress damping-off in field soils. Diagnose the ecological barriers and prescribe genetic/agronomic solutions.",
            "modelAnswer": "The failure of an in vitro 'super-antagonist' to suppress plant disease in natural field soils is a classic, pervasive dilemma in biocontrol research, known as the **Rhizosphere Competence Disconnect**:\n\n**Diagnostic Ecological Barriers:**\n1. **Lack of Rhizosphere Competence and Colonization Failure:**\n   - Producing antibiotics in an agar Petri dish requires zero competition. In field soil, however, an introduced bio-agent must survive intense biotic competition from millions of indigenous soil microbes, colonize the root elongation zone, and establish persistent populations exceeding the critical threshold of **$10^5$ CFU per gram of root**.\n   - The isolate likely lacked essential genetic traits required for competitive rhizosphere colonization: functional flagellar motility (*cheA*, *flg* genes), cell-surface lipopolysaccharide O-antigen synthesis, or high-affinity outer membrane root exudate transport systems.\n2. **Carbon and Nutrient Starvation:**\n   - In agar cultures, the bacterium is supplied with high concentrations of peptone and glycerol. In natural soil, soluble carbon is severely limited. If the isolate cannot efficiently catabolize the specific organic acids, amino acids, and sugars exuded by the host plant's roots, it starves and dies.\n3. **Soil Physicochemical Inactivation (pH and Abiotic Inactivation):**\n   - DAPG and phenazine antibiotic biosynthesis is highly sensitive to soil pH and clay mineralogy. In heavy, highly adsorptive montmorillonite clay soils, positively charged antibiotics become irreversibly bound to clay interlayers, neutralizing their biological bioavailability against advancing pathogens.\n\n**Prescribed Solutions and Corrective Strategies:**\n1. **Screen for Verified Rhizosphere Competence:**\n   - Abandon agar-only selection. Re-screen candidate strains in natural soil systems using spontaneous rifampicin-resistant mutants or GFP-tagged strains to identify isolates that maintain $>10^5$ CFU/g root across 30 days.\n2. **Seed Biopriming with Adjuvants (The Nutrient Bridge):**\n   - Formulate the seed coating with specialized prebiotic carbon sources that the specific *Pseudomonas* strain can selectively utilize (e.g., specific amino acids or trehalose) to give the introduced strain a head-start over indigenous soil microbes.\n3. **Combine into Consortia with Bacillus or Trichoderma:**\n   - Formulate a dual consortium combining *Pseudomonas fluorescens* with *Bacillus subtilis* or *Trichoderma harzianum*. The endospore-forming *Bacillus* provides physical and enzyme support while *Pseudomonas* provides siderophore chelation, establishing multi-trophic resilience across diverse soil types.",
            "outlinePoints": [
                "Rhizosphere Incompetence: High in vitro antibiotic synthesis does not equal in vivo root colonization.",
                "Threshold Failure: Strain failed to achieve the critical population density threshold (>10^5 CFU/g root).",
                "Genetic Deficiencies: Lacked functional flagellar motility (cheA/flg) or LPS O-antigens required for root attachment.",
                "Clay Inactivation: Soil montmorillonite clay interlayers irreversibly adsorbed and neutralized DAPG antibiotics.",
                "Solution 1: Screen strains in natural soil using GFP/rifampicin markers for verified rhizosphere competence.",
                "Solution 2: Seed biopriming with selective prebiotic carbon carriers providing an establishment bridge.",
                "Solution 3: Co-inoculate with Bacillus subtilis to establish resilient, multi-trophic bacterial consortia."
            ]
        }
    ]

    # 20 Flashcards
    flashcards = [
        {"id": "PTH215-U2-FC01", "front": "What Gram reaction and cell morphology characterize Pseudomonas fluorescens?", "back": "Gram-negative, strictly aerobic rod bacterium moving via polar flagella.", "hint": "Gram-negative motile rod", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC02", "front": "What color pigment does Pseudomonas fluorescens emit under UV light (366 nm)?", "back": "Yellow-green fluorescent chromopeptide siderophore known as pyoverdine (pseudobactin).", "hint": "Yellow-green pyoverdine", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC03", "front": "What is the biological mechanism of pyoverdine siderophores in biocontrol?", "back": "Chelates ferric iron (Fe3+) with immense affinity (Kf ~ 10^32), starving plant pathogenic fungi.", "hint": "Iron chelation and starvation", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC04", "front": "What antibiotic produced by Pseudomonas fluorescens is known as DAPG?", "back": "2,4-Diacetylphloroglucinol, a phenolic polyketide antibiotic that disrupts fungal membranes.", "hint": "2,4-Diacetylphloroglucinol", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC05", "front": "What synthetic agricultural fungicide was modeled after the natural antibiotic Pyrrolnitrin?", "back": "Fludioxonil, a commercial phenylpyrrole fungicide derived from Pseudomonas chemistry.", "hint": "Fludioxonil", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC06", "front": "What two-component regulatory system controls antibiotic synthesis in Pseudomonas?", "back": "GacS (sensor kinase) and GacA (response regulator) system.", "hint": "GacS / GacA system", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC07", "front": "What hormonal pathways mediate Induced Systemic Resistance (ISR) by PGPR?", "back": "Jasmonic acid (JA) and Ethylene (ET) signaling pathways (independent of salicylic acid).", "hint": "Jasmonate and Ethylene", "syllabusTopic": "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)"},
        {"id": "PTH215-U2-FC08", "front": "What Gram reaction and spore characteristic define Bacillus subtilis?", "back": "Gram-positive rod bacterium forming heat- and desiccation-resistant endospores.", "hint": "Gram-positive endospore-former", "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"},
        {"id": "PTH215-U2-FC09", "front": "What are the three major cyclic lipopeptide (CLP) families in Bacillus subtilis?", "back": "Iturins (pore-forming antifungals), Surfactins (powerful biosurfactants), and Fengycins.", "hint": "Iturin, Surfactin, Fengycin", "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"},
        {"id": "PTH215-U2-FC10", "front": "How do Iturin lipopeptides kill plant pathogenic fungi?", "back": "They bind to fungal membrane sterols, forming stoichiometric 1.5-2 nm lytic pores.", "hint": "Forms membrane sterol pores", "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"},
        {"id": "PTH215-U2-FC11", "front": "What crystalline complex inside Bacillus endospores confers thermal resistance?", "back": "Calcium dipicolinate (Ca-DPA) complex, accounting for ~10% of spore dry weight.", "hint": "Calcium dipicolinate (Ca-DPA)", "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"},
        {"id": "PTH215-U2-FC12", "front": "What is the commercial shelf-life of Bacillus endospore formulations?", "back": "12 to 24 months (1 to 2 years) at ambient room temperature.", "hint": "12 to 24 months", "syllabusTopic": "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology"},
        {"id": "PTH215-U2-FC13", "front": "Which antibiotic produced by Streptomyces is used against rice sheath blight?", "back": "Validamycin (produced by Streptomyces hygroscopicus), which inhibits fungal trehalase.", "hint": "Validamycin", "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"},
        {"id": "PTH215-U2-FC14", "front": "What volatile sesquiterpenoid gives Streptomyces-rich soils their earthy smell?", "back": "Geosmin, a volatile bicyclic terpenoid alcohol synthesized by soil actinomycetes.", "hint": "Geosmin", "syllabusTopic": "Streptomyces and actinomycetes in plant disease biocontrol"},
        {"id": "PTH215-U2-FC15", "front": "What does PGPR stand for and who coined the concept in 1978?", "back": "Plant Growth-Promoting Rhizobacteria, coined by Joseph W. Kloepper and Milton N. Schroth.", "hint": "Kloepper and Schroth (1978)", "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"},
        {"id": "PTH215-U2-FC16", "front": "How does bacterial ACC Deaminase promote root growth under stress?", "back": "Cleaves plant ACC (ethylene precursor) into ammonia and alpha-ketobutyrate, lowering stress ethylene.", "hint": "Cleaves ethylene precursor ACC", "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"},
        {"id": "PTH215-U2-FC17", "front": "What organic acid is primarily secreted by PGPR to solubilize rock phosphate?", "back": "Gluconic acid (and 2-ketogluconic acid), produced via periplasmic glucose dehydrogenase.", "hint": "Gluconic acid", "syllabusTopic": "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms"},
        {"id": "PTH215-U2-FC18", "front": "What is the statutory CIB&RC minimum viable count for commercial Pseudomonas powder?", "back": "Minimum 1 x 10^8 Colony Forming Units (CFU) per gram.", "hint": "1 x 10^8 CFU/g", "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"},
        {"id": "PTH215-U2-FC19", "front": "What is the role of Carboxymethyl Cellulose (CMC, 1%) in talc bio-formulations?", "back": "Acts as an adhesive and sticker ensuring bacterial cells bind firmly to seeds during biopriming.", "hint": "Adhesive sticker for seed coating", "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"},
        {"id": "PTH215-U2-FC20", "front": "Why is fractional double-autoclaving (Tyndallization) used for talc carrier sterilization?", "back": "Allows surviving heat-resistant bacterial endospores to germinate, destroying them in the second cycle.", "hint": "Destroys germinated spore contaminants", "syllabusTopic": "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"}
    ]

    unit2_obj = {
        "unitNumber": 2,
        "title": "Bacterial Biocontrol Agents",
        "shortDescription": "Pseudomonas fluorescens mechanisms (siderophore iron starvation, DAPG/PCA antibiosis, ISR), Bacillus subtilis cyclic lipopeptides (iturin, surfactin, fengycin), endospore resilience, Streptomyces actinomycetes, PGPR direct/indirect modalities, and industrial formulation engineering.",
        "estimatedReadTimeMinutes": 28,
        "syllabusTopics": [
            "Pseudomonas fluorescens: biology, mechanisms (siderophores, antibiosis, ISR)",
            "Bacillus subtilis: cyclic lipopeptides (iturin, surfactin, fengycin) and endospore biology",
            "Streptomyces and actinomycetes in plant disease biocontrol",
            "The Plant Growth-Promoting Rhizobacteria (PGPR) concept: direct and indirect mechanisms",
            "Industrial mass production, formulation technology (talc-based WP, liquid SC), and QC"
        ],
        "notes": notes,
        "mcqs": mcqs,
        "subjectiveQuestions": subj_questions,
        "flashcards": flashcards
    }

    ts_content = f"""import {{ UnitContent }} from "./types";

export const unit2Content: UnitContent = {json.dumps(unit2_obj, indent=2)};
"""
    with open("/Users/quantum/Downloads/padho lpu/server/data/pth215/unit2.ts", "w") as f:
        f.write(ts_content)
    print("PTH215 Unit 2 generated successfully! MCQs:", len(mcqs), "Subj:", len(subj_questions), "FC:", len(flashcards))

if __name__ == "__main__":
    generate_u2()
