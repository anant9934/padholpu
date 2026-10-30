import json

def generate_u2():
    notes = {
        "learningObjectives": [
            "Explain the biochemical classification, structure, and insecticidal specificity of Bacillus thuringiensis Cry and Vip proteins.",
            "Trace the step-by-step mechanism of Bt delta-endotoxin action inside the insect midgut from protoxin solubilization to septicemia.",
            "Analyze the pathogenic infection cycle of entomopathogenic fungi (Beauveria bassiana, Metarhizium anisopliae, Lecanicillium lecanii) including enzymatic cuticle degradation and mycotoxins.",
            "Distinguish industrial production methods: submerged liquid fermentation versus solid-state grain fermentation (SSF).",
            "Evaluate CIB&RC statutory quality control parameters including viable spore count (CFU/g), moisture thresholds, and contaminant restrictions."
        ],
        "sections": [
            {
                "id": "sec-2-1",
                "heading": "1. Bacillus thuringiensis (Bt): Biology, Subspecies, and Toxins",
                "content": "Bacillus thuringiensis (Bt) is a Gram-positive, rod-shaped, endospore-forming, aerobic or facultatively anaerobic soil bacterium belonging to the family Bacillaceae. During its sporulation phase (Phase III to IV of the bacterial sporulation cycle), Bt synthesizes crystalline parasporal inclusion bodies alongside its dormant endospore. These crystals are primarily comprised of insecticidal crystal proteins (ICPs) designated as Delta-endotoxins (Cry and Cyt proteins), encoded by plasmid-borne cry and cyt genes.\n\nIn addition to sporulation-associated Cry proteins, vegetative-stage Bt cells secrete soluble vegetative insecticidal proteins (Vip toxins, e.g., Vip3A) into the surrounding culture medium. Vip toxins are structurally distinct, lack homology with Cry toxins, and bind to completely separate midgut brush border membrane receptors, making them invaluable resistance-management tools.",
                "subsections": [
                    {
                        "subheading": "Major Bt Subspecies and Target Insect Spectra",
                        "content": "Specific Bt subspecies synthesize distinct Cry toxin profiles with distinct host specificity:",
                        "table": {
                            "headers": ["Bt Subspecies / Strain", "Dominant Cry Proteins", "Target Insect Order", "Key Pest Targets"],
                            "rows": [
                                ["B. thuringiensis subsp. kurstaki (Btk)", "Cry1Aa, Cry1Ab, Cry1Ac, Cry2Aa", "Lepidoptera", "Helicoverpa armigera, Spodoptera litura, Pieris brassicae, Plutella xylostella"],
                                ["B. thuringiensis subsp. aizawai (Bta)", "Cry1Ca, Cry1Da, Cry2Ab", "Lepidoptera (resistant)", "Diamondback moth, Armyworms (Spodoptera frugiperda)"],
                                ["B. thuringiensis subsp. israelensis (Bti)", "Cry4Aa, Cry4Ba, Cry11Aa, Cyt1Aa", "Diptera", "Mosquito larvae (Culex, Aedes, Anopheles), Blackflies (Simulium)"],
                                ["B. thuringiensis subsp. tenebrionis / san diego", "Cry3Aa, Cry3Bb", "Coleoptera", "Colorado potato beetle, Chrysomelid leaf beetles"],
                                ["B. thuringiensis subsp. japonensis", "Cry8Ca", "Coleoptera (Scarabaeidae)", "White grubs, Japanese beetles"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-2-2",
                "heading": "2. Step-by-Step Mode of Action of Bt Delta-Endotoxins",
                "content": "Bt delta-endotoxins function strictly as stomach poisons. Unlike contact neurotoxins, Bt crystals must be ingested by susceptible insect larvae during feeding. The detailed cascade of intoxication proceeds through five discrete biochemical phases:\n\n1. **Ingestion and Dissolution:** The insect consumes foliage or food treated with dormant Bt spores and parasporal protein crystals. Upon entering the larval midgut, the crystals encounter an alkaline environment (pH > 9.0 to 11.0, typical of phytophagous lepidopteran and dipteran digestive systems). This hyper-alkaline pH breaks disulfide bridges and solubilizes the inert, insoluble protoxin crystals (130-140 kDa molecular weight).\n\n2. **Proteolytic Activation:** Solubilized protoxins are cleaved by midgut endogenous serine proteases (trypsins and chymotrypsins). Digestion removes ~28 amino acids from the N-terminus and ~600 residues from the C-terminus, yielding a proteolytically stable, active core toxin of approximately 60-65 kDa.\n\n3. **Receptor Recognition and Binding:** The activated core toxin navigates the peritrophic matrix and binds with high affinity to specific transmembrane protein receptors localized on the microvillar apical membrane of midgut epithelial cells. Recognized primary receptors include cadherin-like proteins (CAD), aminopeptidase N (APN), and alkaline phosphatase (ALP).\n\n4. **Oligomerization and Membrane Insertion:** Binding to cadherin induces further proteolytic clipping, driving the toxin monomers to assemble into a stable, membrane-competent tetrameric pre-pore structure ('oligomer'). The oligomer partitions into membrane lipid rafts and inserts its amphipathic alpha-helices into the apical lipid bilayer.\n\n5. **Pore Formation, Colloid-Osmotic Lysis, and Septicemia:** Insertion forms non-specific lytic pores (1-2 nm diameter). These pores permit the uncontrolled influx of monovalent cations (Na+, K+) and water along concentration gradients. The epithelial cells swell and undergo colloid-osmotic lysis. The gut integrity collapses, gut contents leak into the hemocoel, gut paralysis ceases larval feeding within 2-6 hours, and germinating Bt endospores invade the hemolymph, producing fatal bacteremia and septicemic death within 48-72 hours.",
                "subsections": [
                    {
                        "subheading": "Biochemical Factors Influencing Bt Efficacy",
                        "content": "Key physiological and environmental determinants:",
                        "table": {
                            "headers": ["Parameter", "Optimal Condition", "Consequence of Suboptimal State"],
                            "rows": [
                                ["Midgut pH", "pH 9.0 - 11.5", "Acidic midgut (e.g., piercing-sucking hemipterans) prevents crystal dissolution"],
                                ["Protease Activity", "High trypsin/chymotrypsin titers", "Altered protease expression causes protoxin non-cleavage or hyper-degradation"],
                                ["Receptor Density", "Abundant Cadherin / APN receptors", "Receptor downregulation or point mutations confer field resistance"],
                                ["Solar UV Radiation", "Shaded canopy / Evening spray", "Direct UV-B radiation rapidly photolyzes crystal protein bonds (half-life < 2 days)"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-2-3",
                "heading": "3. Entomopathogenic Fungi: Beauveria bassiana and White Muscardine",
                "content": "Entomopathogenic fungi (EPF) are unique biological control agents because they do not require ingestion; they infect susceptible hosts directly through contact and transcuticular penetration. This renders EPF the primary biological weapons against piercing-sucking insect pests (Hemiptera/Homoptera) whose feeding stylets bypass surface spray deposits.\n\n*Beauveria bassiana* (Balsamo-Crivelli) Vuillemin is an anamorphic hypocrealean ascomycete causing the famous 'white muscardine' disease. It is distributed worldwide in soil and phylloplane environments.\n\n**Pathogenic Infection Cascade:**\n- **Conidial Adhesion:** Hydrophobic asexual conidia attach to the epicuticular wax layer of the insect exoskeleton via specific surface proteins called hydrophobins.\n- **Germination and Appressorium Formation:** In response to humidity (>90% RH) and cuticular cues (fatty acids, n-alkanes), the conidium germinates within 12-24 hours, developing a germ tube that swells at its tip to form an appressorium.\n- **Enzymatic Penetration:** The penetration peg produces an aggressive cocktail of hydrolytic enzymes: endoproteases (Pr1 subtilisin-like protease, Pr2 trypsin-like protease), endochitinases, and esterases/lipases. These enzymes degrade the cuticular protein-chitin matrix while physical turgor pressure mechanically breaches the integument.\n- **Hemocoel Colonization:** Upon breaching into the hemolymph, the fungus transitions from filamentous hyphae to dimorphic, cell-wall-less yeast-like budding cells called blastospores. Blastospores multiply rapidly, evade hemocytic encapsulation, and deplete host nutrients.\n- **Secondary Metabolite Secretion:** *B. bassiana* synthesizes immunosuppressive non-ribosomal peptide toxins including beauvericin, bassianolide, and the bright red pigment oosporein. These toxins induce neuromuscular paralysis and multi-organ necrosis.\n- **Host Mummification and Cadaver Sporulation:** Following insect mortality, hyphae switch back to filamentous vegetative growth, erupting outwards through intersegmental membranes. Under humid conditions, dense white powdery mats of conidiophores and conidia blanket the mummified cadaver, facilitating secondary air- and contact-borne dissemination.",
                "subsections": []
            },
            {
                "id": "sec-2-4",
                "heading": "4. Metarhizium anisopliae and Lecanicillium lecanii",
                "content": "*Metarhizium anisopliae* (Metschnikoff) Sorokin, known as the 'green muscardine' fungus, possesses olive-green cylindrical conidia organized into compact prismatic columns. It is exceptionally adapted to subterranean soil ecologies.\n\n**Metarhizium anisopliae Virulence and Host Range:**\n- Key Pathogenic Metabolites: Produces cyclic hexadepsipeptides called **destruxins** (Destruxin A, B, and E). Destruxins suppress host hemocyte phagocytosis, open host calcium channels, paralyze visceral muscles, and disrupt Malpighian tubule excretion.\n- Target Pests: White grubs (*Holotrichia serrata*, *Phyllophaga* spp.), sugarcane root borer, termites (*Odontotermes obesus*), rhinoceros beetle (*Oryctes rhinoceros* in coconut), locusts and grasshoppers (*Schistocerca gregaria* - strain *M. acridum*), and brown planthopper (*Nilaparvata lugens*).\n\n*Lecanicillium lecanii* (formerly *Verticillium lecanii*), known as the 'white halo fungus', produces slender, verticillate phialides yielding globular heads of mucilaginous conidia. It specializes in warm, humid microclimates (greenhouses, tropical canopies) to suppress soft-bodied sucking insects: aphids (*Aphis gossypii*), whiteflies (*Bemisia tabaci*), mealybugs (*Phenacoccus solenopsis*), and scale insects (*Coccus viridis*). It secretes the antibiotic dipicolinic acid and hydrolytic enzymes.",
                "subsections": [
                    {
                        "subheading": "Comparative Characteristics of Major Entomopathogenic Fungi",
                        "content": "Key biological and operational distinctions:",
                        "table": {
                            "headers": ["Fungal Species", "Common Disease Name", "Conidial Color / Morphology", "Key Toxic Metabolites", "Primary Target Pests"],
                            "rows": [
                                ["Beauveria bassiana", "White muscardine", "Chalky white, spherical to globose", "Beauvericin, Bassianolide, Oosporein", "Lepidopteran larvae, whiteflies, thrips, stem borers"],
                                ["Metarhizium anisopliae", "Green muscardine", "Olive-green, cylindrical in columns", "Destruxins (A, B, E), Cytochalasins", "Subterranean root grubs, termites, rhinoceros beetles, locusts"],
                                ["Lecanicillium lecanii", "White halo disease", "Translucent white/pale cream, sticky heads", "Dipicolinic acid, Bassianolone", "Aphids, mealybugs, scales, greenhouse whiteflies"],
                                ["Isaria fumosorosea (Paecilomyces)", "Pink muscardine", "Pinkish-lilac to smoky purple", "Beauvericin, Paecilamin", "Silverleaf whitefly, diamondback moth, spider mites"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-2-5",
                "heading": "5. Mass Production Technologies and Formulation Science",
                "content": "Commercialization of microbial biopesticides requires scalable, cost-effective bio-fermentation systems yielding stable, highly virulent active propagules (spores or conidia).\n\n**1. Fermentation Methodologies:**\n- **Submerged Liquid Fermentation:** Organisms are cultivated in deep, stirred-tank stainless steel bioreactors (500 L to 20,000 L capacity) with continuous sparging of sterile air, mechanical impeller agitation, dissolved oxygen (DO) control, and automated pH/temperature feedback. It is standard for *Bacillus thuringiensis* (producing endospores and crystal inclusions in 48-72 hours) and for fungal blastospore production. Media utilize cheap industrial nutrients: molasses, corn steep liquor, soybean meal, peptone, and yeast extract.\n- **Solid-State Fermentation (SSF):** Microorganisms are cultivated on moist, non-soluble solid organic substrates with low free water. SSF is preferred for filamentous entomopathogenic fungi because aerial conidia produced on solid air interfaces possess thicker walls, higher lipid contents, and significantly greater virulence and UV tolerance than liquid-grown blastospores. Common substrates include broken parboiled rice, wheat bran, crushed sorghum grains, maize grits, and sugarcane bagasse in autoclavable polypropylene aeration bags or shallow aluminum trays.\n- **Two-Stage Diphasic Fermentation:** Combines the strengths of both systems: fungal biomass and hyphal fragments are rapidly mass-produced in submerged liquid fermenters (Stage 1, 3-4 days), which is then inoculated onto sterile moist cereal grains for dense aerial conidiogenesis (Stage 2, 7-10 days).\n\n**2. Downstream Processing and Formulations:**\n- Harvested fungal conidia are air-dried at <35°C to a moisture content of <8%, gently detached via sieving or cyclone separators, and blended with inert carriers.\n- **Wettable Powder (WP):** Dry fungal conidia or Bt spore-crystal mix blended with talc powder, kaolin, or diatomaceous earth (carrier), along with sodium lignosulfonate (wetting agent), sodium dioctyl sulfosuccinate (dispersing agent), and carboxymethyl cellulose (sticker).\n- **Oil-Based Suspension Concentrates (SC):** Conidia suspended in emulsified vegetable or mineral oils (paraffinic oils) with surfactants. Oil protects conidia from desiccation, shields them from solar UV rays, and promotes spread and adherence across waxy insect cuticles.",
                "subsections": []
            },
            {
                "id": "sec-2-6",
                "heading": "6. Quality Control Standards and CIB&RC Statutory Specifications",
                "content": "The Central Insecticides Board & Registration Committee (CIB&RC) in India enforces stringent statutory quality specifications under the Insecticides Act 1968 for registration and market release of microbial pesticides.\n\n**CIB&RC Quality Benchmarks for Microbial Formulations:**\n1. **Viable Active Propagule Count (CFU Count):**\n   - *Bacillus thuringiensis* formulations: Minimum 1 x 10^8 viable spores per gram (or ml) of formulation (or international toxic units ITU/mg bioassay standard).\n   - Entomopathogenic Fungi (*B. bassiana*, *M. anisopliae*, *L. lecanii*): Minimum 1 x 10^8 colony forming units (CFU) per gram for talc-based powders or 1 x 10^9 CFU/ml for liquid suspension concentrates.\n2. **Moisture Content:** For wettable powder formulations, maximum allowable moisture is 8.0% to prevent premature conidial metabolic exhaustion and clumping.\n3. **Biological Contaminant Limits:** Total contaminating microbial load must not exceed 1 x 10^4 per gram. Pathogenic contaminants (including *Salmonella*, *Shigella*, *Vibrio cholerae*, and coliforms) must be completely undetectable (zero tolerance).\n4. **Bioefficacy and LC50 Testing:** Every commercial batch must demonstrate certified laboratory toxicity (LC50 or bioassay) against designated reference test insects (e.g., *Helicoverpa armigera* neonates for Bt or *Galleria mellonella* for EPF).\n5. **Shelf-Life Specification:** Minimum 6 months shelf-life stability with <1 log drop in viable CFU under standard storage conditions (room temperature 25-30°C).",
                "subsections": []
            }
        ],
        "keyTakeaways": [
            "Bacillus thuringiensis synthesizes crystalline parasporal Delta-endotoxins (Cry proteins) during sporulation and soluble Vip toxins during vegetative growth.",
            "Bt Cry protoxins require an alkaline midgut environment (pH > 9.0) and serine proteases for solubilization and cleavage into 60-65 kDa toxic fragments.",
            "Activated Cry toxins bind cadherin and aminopeptidase N receptors, forming 1-2 nm pores that induce colloid-osmotic lysis and lethal septicemia.",
            "Entomopathogenic fungi (Beauveria, Metarhizium, Lecanicillium) bypass the digestive tract by penetrating the cuticle directly using Pr1 proteases and chitinases.",
            "Metarhizium produces paralyzing destruxins targeting soil pests, whereas Beauveria produces beauvericin and oosporein causing white muscardine.",
            "Two-stage diphasic fermentation marries liquid biomass generation with solid-state aerial conidiation for maximal spore durability and virulence.",
            "CIB&RC mandates a minimum active viable spore threshold of 1 x 10^8 CFU/g for microbial biopesticide powders with <8% moisture and zero human pathogens."
        ],
        "commonMisunderstandings": [
            {
                "misunderstanding": "Bt sprays kill insect pests on contact just like organophosphates or pyrethroids.",
                "correction": "Bt delta-endotoxins are purely stomach poisons that have zero contact toxicity. Larvae must actively ingest the crystal protein from treated plant tissue for midgut activation to occur."
            },
            {
                "misunderstanding": "Entomopathogenic fungi can be applied effectively using regular submerged liquid fermentation broth directly.",
                "correction": "Liquid fermenters primarily produce thin-walled, fragile blastospores that possess low field persistence and poor UV tolerance. Durable aerial conidia from solid-state fermentation are essential for commercial field stability."
            },
            {
                "misunderstanding": "Beauveria bassiana and Metarhizium can be tank-mixed with synthetic chemical fungicides to save labor.",
                "correction": "Biocontrol fungi are living eukaryotic organisms. Tank-mixing with broad-spectrum fungicides (such as carbendazim, mancozeb, or hexaconazole) will instantly kill the fungal conidia, rendering the biopesticide totally inert."
            }
        ],
        "summary": "Microbial biopesticides represent the cutting edge of biological insect pest control, dominated by the bacterium Bacillus thuringiensis and hypocrealean entomopathogenic fungi including Beauveria bassiana, Metarhizium anisopliae, and Lecanicillium lecanii. Bt produces parasporal Cry and vegetative Vip toxins that dissolve in alkaline midguts, cleave into active core peptides, bind midgut epithelial receptors, and create lytic pores that destroy gut integrity. In contrast, EPF infect pests directly via transcuticular penetration using cuticle-degrading proteases and chitinases, multiplying in the hemolymph and releasing paralyzing metabolites before erupting in characteristic muscardine mummification. Scalable commercialization relies on solid-state and diphasic fermentation to generate resilient aerial conidia, governed strictly by CIB&RC quality benchmarks guaranteeing viable counts of 10^8 CFU/g and high batch bioefficacy."
    }

    # 60 MCQs: 20 Easy, 25 Medium, 15 Hard
    mcqs = [
        # --- EASY (20 questions) ---
        {
            "id": "ENT203-U2-MCQ01",
            "question": "Bacillus thuringiensis (Bt) is classified as what type of microorganism?",
            "options": {
                "A": "Gram-negative, non-spore-forming coccus",
                "B": "Gram-positive, endospore-forming rod bacterium",
                "C": "Obligate intracellular parasitic fungus",
                "D": "Enveloped single-stranded RNA virus"
            },
            "correctOption": "B",
            "explanation": "Bt is a Gram-positive, rod-shaped, aerobic or facultatively anaerobic endospore-forming soil bacterium belonging to the genus Bacillus.",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ02",
            "question": "At which developmental phase does Bacillus thuringiensis synthesize its parasporal crystal protein?",
            "options": {
                "A": "Logarithmic vegetative growth phase",
                "B": "Lag phase of culture initiation",
                "C": "Sporulation phase",
                "D": "Stationary death phase prior to autolysis"
            },
            "correctOption": "C",
            "explanation": "Parasporal inclusion crystals (Cry proteins) are synthesized during sporulation (specifically stages III to IV) alongside endospore formation.",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ03",
            "question": "Which specific Bt subspecies is primarily utilized worldwide for controlling lepidopteran caterpillar pests?",
            "options": {
                "A": "Bacillus thuringiensis subsp. israelensis",
                "B": "Bacillus thuringiensis subsp. kurstaki",
                "C": "Bacillus thuringiensis subsp. tenebrionis",
                "D": "Bacillus thuringiensis subsp. japonensis"
            },
            "correctOption": "B",
            "explanation": "Bacillus thuringiensis subsp. kurstaki (Btk) produces Cry1Aa, Cry1Ab, Cry1Ac, and Cry2Aa proteins that specifically target lepidopteran larvae.",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ04",
            "question": "Which Bt subspecies is extensively deployed to control dipteran mosquito and blackfly larvae?",
            "options": {
                "A": "B. thuringiensis subsp. israelensis",
                "B": "B. thuringiensis subsp. aizawai",
                "C": "B. thuringiensis subsp. kurstaki",
                "D": "B. thuringiensis subsp. galleriae"
            },
            "correctOption": "A",
            "explanation": "Bt subsp. israelensis (Bti) synthesizes Cry4Aa, Cry4Ba, Cry11Aa, and Cyt1Aa, which are highly toxic to larval Diptera (mosquitoes and blackflies).",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ05",
            "question": "What is the common agricultural disease name caused by Beauveria bassiana in infected insects?",
            "options": {
                "A": "Green muscardine",
                "B": "White muscardine",
                "C": "Milky disease",
                "D": "Flacherie"
            },
            "correctOption": "B",
            "explanation": "Beauveria bassiana causes 'white muscardine' disease, so called because the cadaver becomes completely covered in a chalky white bloom of fungal conidia.",
            "difficulty": "EASY",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ06",
            "question": "What is the common disease name caused by the entomopathogenic fungus Metarhizium anisopliae?",
            "options": {
                "A": "White muscardine",
                "B": "Black muscardine",
                "C": "Green muscardine",
                "D": "Red muscardine"
            },
            "correctOption": "C",
            "explanation": "Metarhizium anisopliae infection results in 'green muscardine' due to the characteristic olive-green color of its conidial crust on dead insects.",
            "difficulty": "EASY",
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-MCQ07",
            "question": "Which insect order is NOT typically susceptible to classic Bt subsp. kurstaki delta-endotoxins?",
            "options": {
                "A": "Lepidoptera",
                "B": "Hemiptera (aphids, planthoppers)",
                "C": "Pieridae (cabbage butterflies)",
                "D": "Noctuidae (armyworms)"
            },
            "correctOption": "B",
            "explanation": "Hemipterans (piercing-sucking bugs) lack the alkaline midgut pH and specific Cry1/Cry2 cadherin receptors required for Bt toxin activation, making them insensitive.",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ08",
            "question": "Unlike chemical pesticides and Bt, entomopathogenic fungi primarily infect insect hosts through which route?",
            "options": {
                "A": "Active oral ingestion into the stomach",
                "B": "Direct penetration through the cuticular exoskeleton",
                "C": "Passive absorption via thoracic spiracles only",
                "D": "Transovarial injection from maternal tissues"
            },
            "correctOption": "B",
            "explanation": "Entomopathogenic fungi do not require ingestion; their germinating conidia mechanically and enzymatically penetrate directly through the insect integument/cuticle.",
            "difficulty": "EASY",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ09",
            "question": "Which entomopathogenic fungus is historically famous as the 'white halo fungus' targeting sucking insect pests?",
            "options": {
                "A": "Metarhizium anisopliae",
                "B": "Lecanicillium lecanii",
                "C": "Nomuraea rileyi",
                "D": "Paenibacillus popilliae"
            },
            "correctOption": "B",
            "explanation": "Lecanicillium lecanii (formerly Verticillium lecanii) is known as the white halo fungus because it surrounds scale insects and aphids with a white ring of mycelium.",
            "difficulty": "EASY",
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-MCQ10",
            "question": "What is the statutory minimum viable spore count (CFU/g) required by CIB&RC for commercial talc-based microbial biopesticides in India?",
            "options": {
                "A": "1 x 10^5 CFU/g",
                "B": "1 x 10^6 CFU/g",
                "C": "1 x 10^8 CFU/g",
                "D": "1 x 10^12 CFU/g"
            },
            "correctOption": "C",
            "explanation": "CIB&RC specifications mandate a minimum viable propagule count of 1 x 10^8 colony forming units (CFU) per gram for wettable powder formulations.",
            "difficulty": "EASY",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ11",
            "question": "Which environmental condition is critical for the germination of fungal conidia on the host cuticle?",
            "options": {
                "A": "Extremely dry air with <20% RH",
                "B": "High relative humidity (typically >85-90% RH)",
                "C": "Direct intense solar UV radiation",
                "D": "Anaerobic waterlogged conditions"
            },
            "correctOption": "B",
            "explanation": "Conidial germination and appressorial penetration by entomopathogenic fungi require free water or high relative humidity (>85-90% RH).",
            "difficulty": "EASY",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ12",
            "question": "What midgut pH condition is required for the dissolution of ingested Bacillus thuringiensis parasporal crystals?",
            "options": {
                "A": "Strongly acidic (pH 1.5 - 3.0)",
                "B": "Neutral (pH 6.5 - 7.0)",
                "C": "Alkaline (pH > 9.0 to 11.0)",
                "D": "Cry crystals do not dissolve in the gut"
            },
            "correctOption": "C",
            "explanation": "Bt protoxin crystals dissolve only under strongly alkaline conditions (pH > 9.0), typical of lepidopteran larval midguts.",
            "difficulty": "EASY",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ13",
            "question": "What is the primary insecticidal protein group produced by vegetative-stage Bacillus thuringiensis cultures?",
            "options": {
                "A": "Cry proteins",
                "B": "Cyt proteins",
                "C": "Vip proteins",
                "D": "Destruxins"
            },
            "correctOption": "C",
            "explanation": "Vip (Vegetative Insecticidal Proteins), such as Vip3A, are secreted by Bt during vegetative growth, whereas Cry/Cyt toxins are formed during sporulation.",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ14",
            "question": "Which of the following pests is an ideal target for Metarhizium anisopliae soil applications?",
            "options": {
                "A": "Aphids on apical shoots",
                "B": "White grubs (Holotrichia serrata) in sugarcane and groundnut",
                "C": "Adult houseflies",
                "D": "Rice gall midge adults"
            },
            "correctOption": "B",
            "explanation": "Metarhizium anisopliae is an exceptionally effective soil bio-agent against subterranean pests including white grubs, root borers, and termites.",
            "difficulty": "EASY",
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-MCQ15",
            "question": "What type of fermentation substrate is commonly used in solid-state fermentation (SSF) for mass producing fungal conidia?",
            "options": {
                "A": "Petroleum jelly",
                "B": "Cereal grains such as broken rice, sorghum, or wheat bran",
                "C": "Pure synthetic nutrient agar",
                "D": "Distilled water with urea"
            },
            "correctOption": "B",
            "explanation": "Solid-state fermentation (SSF) employs cheap agricultural grains like broken rice, crushed sorghum, or wheat bran to provide an aerial solid-gas matrix for sporulation.",
            "difficulty": "EASY",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ16",
            "question": "What is the primary cellular target of activated Bt Cry delta-endotoxins in insect larvae?",
            "options": {
                "A": "Thoracic flight muscle sarcomeres",
                "B": "Midgut epithelial brush border membrane",
                "C": "Axonal sodium channels in the nervous system",
                "D": "Malpighian tubule uric acid pumps"
            },
            "correctOption": "B",
            "explanation": "Activated Cry toxins bind specifically to receptors on the microvillar membrane (brush border) of insect midgut epithelial cells.",
            "difficulty": "EASY",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ17",
            "question": "What is the maximum allowable moisture content specified by CIB&RC for wettable powder microbial biopesticides?",
            "options": {
                "A": "8.0%",
                "B": "20.0%",
                "C": "35.0%",
                "D": "50.0%"
            },
            "correctOption": "A",
            "explanation": "To maintain fungal and bacterial spore viability and prevent premature germination or clumping, CIB&RC limits moisture content to a maximum of 8.0%.",
            "difficulty": "EASY",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ18",
            "question": "Which of the following insecticidal crystal proteins targets coleopteran beetles such as the Colorado potato beetle?",
            "options": {
                "A": "Cry1Ac",
                "B": "Cry3Aa",
                "C": "Cry4Ba",
                "D": "Cry11Aa"
            },
            "correctOption": "B",
            "explanation": "Cry3 toxins (such as Cry3Aa and Cry3Bb from Bt subsp. tenebrionis) specifically target coleopteran insect pests.",
            "difficulty": "EASY",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ19",
            "question": "In the hemolymph of an infected insect, Beauveria bassiana transitions into which morphological form to evade immune responses?",
            "options": {
                "A": "Resting sclerotia",
                "B": "Yeast-like budding blastospores (hyphal bodies)",
                "C": "Thick-walled chlamydospores",
                "D": "Apothecia"
            },
            "correctOption": "B",
            "explanation": "In the hemolymph, the fungus transitions from filamentous hyphae to cell-wall-less, yeast-like blastospores that multiply rapidly and evade encapsulation.",
            "difficulty": "EASY",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ20",
            "question": "Why is late evening application strongly recommended for spraying microbial biopesticides?",
            "options": {
                "A": "To allow farm workers to sleep during the day",
                "B": "To prevent rapid photolytic destruction of spores and crystals by solar UV radiation",
                "C": "Because insects only feed after midnight",
                "D": "Because plants close their stomata in the evening"
            },
            "correctOption": "B",
            "explanation": "Solar ultraviolet (UV-A and UV-B) radiation rapidly denatures Bt crystal proteins and mutates fungal DNA; evening spraying provides overnight protection and moisture.",
            "difficulty": "EASY",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },

        # --- MEDIUM (25 questions) ---
        {
            "id": "ENT203-U2-MCQ21",
            "question": "What is the approximate molecular weight of the inactive full-length protoxin of Cry1Ac before midgut protease cleavage?",
            "options": {
                "A": "25-30 kDa",
                "B": "60-65 kDa",
                "C": "130-140 kDa",
                "D": "250-280 kDa"
            },
            "correctOption": "C",
            "explanation": "Cry1 protoxins are synthesized as large, bipyramidal crystals of 130-140 kDa, which are subsequently cleaved by midgut proteases into 60-65 kDa active toxins.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ22",
            "question": "Which midgut enzyme family in lepidopteran larvae is primarily responsible for processing Bt protoxin into active core toxin?",
            "options": {
                "A": "Lipases",
                "B": "Serine endoproteases (trypsin- and chymotrypsin-like enzymes)",
                "C": "Amylases and cellulases",
                "D": "Cytochrome P450 monooxygenases"
            },
            "correctOption": "B",
            "explanation": "Midgut serine proteases (trypsins and chymotrypsins) cleave the C-terminal half and N-terminal leader sequence from the 130 kDa protoxin to yield the 60 kDa active core.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ23",
            "question": "Which specific primary cell-surface receptor protein on larval midgut epithelial microvilli binds Cry1A toxins to trigger oligomerization?",
            "options": {
                "A": "Cadherin-like transmembrane protein (CAD)",
                "B": "Nicotinic acetylcholine receptor (nAChR)",
                "C": "Octopamine G-protein coupled receptor",
                "D": "Voltage-gated calcium channel"
            },
            "correctOption": "A",
            "explanation": "Cadherin (CAD) is the critical primary receptor that binds monomeric Cry1A toxin, facilitating proteolytic cleavage of the alpha-1 helix and driving oligomer formation.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ24",
            "question": "What is the secondary receptor family that binds the Cry pre-pore oligomer and directs insertion into lipid rafts?",
            "options": {
                "A": "Aminopeptidase N (APN) and Alkaline Phosphatase (ALP)",
                "B": "Acetylcholinesterase-1",
                "C": "Ecdysone receptor (EcR)",
                "D": "Juvenile hormone esterase"
            },
            "correctOption": "A",
            "explanation": "GPI-anchored proteins, notably Aminopeptidase N (APN) and Alkaline Phosphatase (ALP), serve as secondary receptors that facilitate membrane insertion.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ25",
            "question": "What is the ultimate biophysical cause of midgut epithelial cell lysis following Bt Cry pore insertion?",
            "options": {
                "A": "Complete dehydration due to sucrose efflux",
                "B": "Colloid-osmotic swelling caused by uncontrolled influx of cations (Na+, K+) and water",
                "C": "Immediate coagulation necrosis of ribosomal proteins",
                "D": "Direct enzymatic destruction of mitochondrial DNA"
            },
            "correctOption": "B",
            "explanation": "The 1-2 nm pores disrupt selective membrane permeability, allowing free movement of cations and water into the cell, resulting in colloid-osmotic lysis and bursting.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ26",
            "question": "Which cyclic peptide toxins produced by Metarhizium anisopliae are responsible for paralyzing insect neuromuscular systems?",
            "options": {
                "A": "Aflatoxins",
                "B": "Destruxins (A, B, and E)",
                "C": "Beauvericins",
                "D": "Trichothecenes"
            },
            "correctOption": "B",
            "explanation": "Metarhizium produces destruxins (cyclic hexadepsipeptides) that block calcium channels, suppress hemocyte phagocytosis, and induce flaccid paralysis.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-MCQ27",
            "question": "Which enzyme synthesized by Beauveria bassiana plays the decisive role in digesting the protein-rich procuticle of the host?",
            "options": {
                "A": "Pr1 subtilisin-like serine protease",
                "B": "Polygalacturonase",
                "C": "Cellulase Cx",
                "D": "Urease"
            },
            "correctOption": "A",
            "explanation": "Pr1 is a 30 kDa subtilisin-like chymoelastase-type serine protease produced at the appressorial peg that rapidly degrades cuticular structural proteins.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ28",
            "question": "What is oosporein, and what role does it play during Beauveria bassiana infection?",
            "options": {
                "A": "A volatile sex attractant that traps male moths",
                "B": "A red dibenzoquinone antibiotic that inhibits bacterial putrefaction in the host cadaver",
                "C": "A cuticular lipid wax that shields conidia from moisture",
                "D": "A storage polysaccharide used during spore dormancy"
            },
            "correctOption": "B",
            "explanation": "Oosporein is a red dibenzoquinone pigment with potent antimicrobial properties, preventing saprophytic bacterial competitors from colonizing the cadaver.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ29",
            "question": "Why do conidia produced by solid-state fermentation (SSF) exhibit superior field persistence over blastospores from submerged liquid fermentation?",
            "options": {
                "A": "Aerial conidia possess thicker cell walls, higher hydrophobin content, and higher endogenous lipid reserves",
                "B": "Blastopores cannot recognize insect cuticles",
                "C": "SSF conidia contain synthetic chemical additives",
                "D": "Submerged blastospores lack genomic DNA"
            },
            "correctOption": "A",
            "explanation": "Aerial conidia produced at the solid-gas interface have robust melanized/hydrophobin-coated walls and polyols that confer resilience against UV and desiccation.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ30",
            "question": "Which Bt subspecies is specifically effective against diamondback moth (Plutella xylostella) populations that have developed field resistance to Cry1Ac?",
            "options": {
                "A": "Bacillus thuringiensis subsp. aizawai (expressing Cry1C and Cry1D)",
                "B": "Bacillus thuringiensis subsp. israelensis",
                "C": "Bacillus thuringiensis subsp. tenebrionis",
                "D": "Bacillus thuringiensis subsp. japonensis"
            },
            "correctOption": "A",
            "explanation": "Bt subsp. aizawai contains Cry1Ca and Cry1Da toxins that bind to alternative midgut receptors unaffected by Cry1Ac receptor down-regulation in Plutella xylostella.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ31",
            "question": "What is the primary role of sodium lignosulfonate when formulating wettable powder (WP) biopesticides?",
            "options": {
                "A": "As an active biological toxin",
                "B": "As a wetting agent and dispersant that keeps particles suspended in spray water",
                "C": "As an artificial coloring agent",
                "D": "As an antibiotic to kill contaminating fungi"
            },
            "correctOption": "B",
            "explanation": "Sodium lignosulfonate acts as an anionic surfactant/dispersant that prevents fungal conidia or mineral carrier particles from agglomerating in the spray tank.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ32",
            "question": "Under CIB&RC guidelines, what is the maximum permissible level of non-pathogenic contaminating microorganisms in a commercial biopesticide formulation?",
            "options": {
                "A": "Zero contamination allowed",
                "B": "Not more than 1 x 10^4 contaminating colonies per gram/ml",
                "C": "Up to 1 x 10^7 contaminating colonies per gram/ml",
                "D": "Contamination is not regulated"
            },
            "correctOption": "B",
            "explanation": "CIB&RC enforces a strict contaminant threshold of no more than 1 x 10^4 non-pathogenic contaminating colonies per gram or ml of product.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ33",
            "question": "What happens if a farmer tank-mixes Beauveria bassiana WP with hexaconazole fungicide?",
            "options": {
                "A": "Synergistic control of both caterpillars and fungal blights",
                "B": "The fungicide inhibits sterol biosynthesis in B. bassiana, completely inactivating the biopesticide",
                "C": "The biopesticide neutralizes the chemical fungicide",
                "D": "Hexaconazole triggers hyper-sporulation of Beauveria"
            },
            "correctOption": "B",
            "explanation": "Hexaconazole is an ergosterol biosynthesis inhibiting fungicide; it destroys the fungal membrane of Beauveria bassiana, rendering the biological spray ineffective.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ34",
            "question": "Which of the following insecticidal crystal protein families displays significant activity against mosquito larvae (Culex and Aedes)?",
            "options": {
                "A": "Cry1Ac and Cry2Ab",
                "B": "Cry4A, Cry4B, and Cry11A",
                "C": "Cry3A and Cry3B",
                "D": "Cry8C"
            },
            "correctOption": "B",
            "explanation": "Bt subsp. israelensis produces Cry4A, Cry4B, Cry11A, and Cyt1A proteins specifically active against nematoceran Diptera (mosquitoes and blackflies).",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ35",
            "question": "What is the term for the specialized swelling formed at the tip of a fungal germ tube that exerts mechanical and enzymatic force on the insect cuticle?",
            "options": {
                "A": "Haustorium",
                "B": "Appressorium",
                "C": "Basidiocarp",
                "D": "Trichogyne"
            },
            "correctOption": "B",
            "explanation": "The appressorium is the differentiated infection structure that anchors the conidium to the epicuticle and directs the penetration peg into host tissues.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ36",
            "question": "Why are oil-based suspension concentrate (SC) formulations of Beauveria bassiana more effective under low humidity than talc-based wettable powders?",
            "options": {
                "A": "Oil generates heat to hatch the spores",
                "B": "Oil droplets spread over the cuticle, resist droplet evaporation, and maintain a micro-humid zone around the conidium",
                "C": "Oil acts as an artificial midgut protease",
                "D": "Oil completely dissolves the insect's internal organs"
            },
            "correctOption": "B",
            "explanation": "Emulsifiable oils coat conidia, prevent rapid water loss, enhance adhesion to hydrophobic epicuticular wax, and allow germination at lower ambient humidity.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ37",
            "question": "Which entomopathogenic fungus is commercially formulated under the trade name 'Pacer' or 'Biorin' to manage tea mosquito bug and coffee berry borer?",
            "options": {
                "A": "Beauveria bassiana",
                "B": "Bacillus popilliae",
                "C": "Trichoderma viride",
                "D": "Streptomyces scabies"
            },
            "correctOption": "A",
            "explanation": "Beauveria bassiana is widely formulated and registered in India for managing plantation pests such as the coffee berry borer (Hypothenemus hampei).",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ38",
            "question": "What is the typical time frame between Bt ingestion and insect mortality in field conditions?",
            "options": {
                "A": "30 seconds",
                "B": "2 to 6 hours for cessation of feeding, with death in 48 to 72 hours",
                "C": "3 to 4 weeks",
                "D": "Immediate knockdown within 5 minutes"
            },
            "correctOption": "B",
            "explanation": "Larvae stop feeding within 2-6 hours due to midgut paralysis; complete mortality due to septicemia and starvation occurs 2 to 3 days (48-72 h) later.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ39",
            "question": "What is the diagnostic bioassay parameter used in quality control laboratories to quantify microbial biopesticide potency against target larvae?",
            "options": {
                "A": "CEC (Cation Exchange Capacity)",
                "B": "LC50 (Lethal Concentration that kills 50% of the test population)",
                "C": "BOD (Biological Oxygen Demand)",
                "D": "pH buffering index"
            },
            "correctOption": "B",
            "explanation": "LC50 (or LD50) determined via standardized diet-incorporation or leaf-dip bioassays against neonate larvae provides the certified benchmark of biological potency.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ40",
            "question": "Which of the following insect species was the original source from which Shigetane Ishiwata first isolated Bt in 1901?",
            "options": {
                "A": "Bombyx mori (Silkworm)",
                "B": "Helicoverpa armigera (Cotton bollworm)",
                "C": "Apis mellifera (Honeybee)",
                "D": "Tribolium castaneum (Red flour beetle)"
            },
            "correctOption": "A",
            "explanation": "Ishiwata isolated the bacterium from dying silkworm larvae suffering from 'sotto' (sudden-collapse) disease in Japan in 1901.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ41",
            "question": "Why are Cyt proteins present in Bti valuable when combined with Cry toxins against mosquitoes?",
            "options": {
                "A": "They act as chemical fertilizers for aquatic flora",
                "B": "Cyt proteins synergize Cry toxins by functioning as surrogate receptors and overcoming Cry resistance",
                "C": "Cyt proteins kill the mosquito eggs before hatching",
                "D": "They eliminate the need for larval ingestion"
            },
            "correctOption": "B",
            "explanation": "Cyt toxins synergize Cry4 and Cry11 by inserting directly into the membrane and acting as functional receptors, delaying or suppressing receptor-mediated resistance.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ42",
            "question": "Which of the following human pathogens has a ZERO-TOLERANCE restriction in commercial microbial biopesticides under CIB&RC regulations?",
            "options": {
                "A": "Salmonella, Shigella, and Vibrio cholerae",
                "B": "Lactobacillus acidophilus",
                "C": "Saccharomyces cerevisiae",
                "D": "Rhizobium leguminosarum"
            },
            "correctOption": "A",
            "explanation": "CIB&RC strictly forbids the presence of human enteric and opportunistic pathogens such as Salmonella, Shigella, Vibrio, and pathogenic coliforms.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ43",
            "question": "What is the primary carrier material used in India for formulating dry wettable powder biopesticides?",
            "options": {
                "A": "High-grade talc powder (magnesium silicate)",
                "B": "Crushed granite",
                "C": "Coarse sand",
                "D": "Urea prills"
            },
            "correctOption": "A",
            "explanation": "Talc powder (hydrated magnesium silicate, 300 mesh) is the dominant carrier because of its inertness, neutral pH (7.0-8.0), smooth flowability, and low cost.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ44",
            "question": "How do Vip3A toxins differ biochemically from Cry1Ac toxins?",
            "options": {
                "A": "Vip3A is synthesized during vegetative growth and binds distinct midgut receptors with zero structural homology to Cry proteins",
                "B": "Vip3A is a lipid while Cry1Ac is a carbohydrate",
                "C": "Vip3A is active only against adult beetles",
                "D": "Vip3A is an intracellular viral capsid"
            },
            "correctOption": "A",
            "explanation": "Vip3A is a vegetative insecticidal protein secreted into the liquid medium; it lacks sequence/structural homology with Cry proteins and binds different midgut targets.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ45",
            "question": "Which physical test is conducted on biopesticide wettable powders to ensure particles remain suspended in water without rapid settling?",
            "options": {
                "A": "Suspensibility test (minimum 60% suspensibility)",
                "B": "Brix refractometer test",
                "C": "Kjeldahl nitrogen digestion",
                "D": "Flame photometry"
            },
            "correctOption": "A",
            "explanation": "Suspensibility testing ensures that at least 60% of the formulation remains uniformly in suspension after standing undisturbed for 30 minutes in a graduated cylinder.",
            "difficulty": "MEDIUM",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },

        # --- HARD (15 questions) ---
        {
            "id": "ENT203-U2-MCQ46",
            "question": "In the Bravo et al. classical pore-formation model, what structural domain of the activated Cry1A monomer directly drives oligomerization upon cadherin binding?",
            "options": {
                "A": "Cleavage of the alpha-1 helix in Domain I following cadherin interaction",
                "B": "Complete proteolytic loss of Domain II beta-sheets",
                "C": "Phosphorylation of Domain III galactose-binding motifs",
                "D": "Dimerization of the C-terminal cysteines"
            },
            "correctOption": "A",
            "explanation": "Cadherin binding promotes midgut protease removal of the N-terminal alpha-1 helix of Domain I, exposing a hydrophobic patch that facilitates tetrameric oligomer assembly.",
            "difficulty": "HARD",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ47",
            "question": "How does the alternative 'signaling pathway model' proposed by Zhang et al. explain Bt Cry-induced cell death in contrast to the colloid-osmotic pore hypothesis?",
            "options": {
                "A": "Monomeric Cry toxin binding to cadherin activates an intracellular G-protein/adenylyl cyclase cascade, elevating cAMP and activating protein kinase A (PKA) to trigger necrotic apoptosis",
                "B": "Cry toxin enters the nucleus and directly halts transcription of RNA polymerase II",
                "C": "Cry toxin hydrolyzes cellular phospholipid bilayers via phospholipase C activation",
                "D": "Cry toxin blocks mitochondrial complex IV electron transport directly"
            },
            "correctOption": "A",
            "explanation": "The signaling pathway hypothesis argues that Cry binding to cadherin stimulates a G-alpha-protein-coupled adenylyl cyclase cascade, triggering lethal cAMP-dependent PKA ion deregulation.",
            "difficulty": "HARD",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ48",
            "question": "What is the primary genetic mechanism by which field populations of Plutella xylostella developed high-level resistance to Cry1Ac in cabbage fields?",
            "options": {
                "A": "Loss of midgut serine proteases combined with mutations in the ABCC2 transporter and cadherin-like receptors",
                "B": "Evolution of an acidic crop that denatures all bacterial proteins",
                "C": "Upregulation of cuticular wax synthesis preventing oral uptake",
                "D": "Transduction of bacterial resistance genes via bacteriophages"
            },
            "correctOption": "A",
            "explanation": "Diamondback moth field resistance mapped to the ABCC2 transporter locus and altered cadherin/APN expression, preventing Cry1Ac toxin binding and membrane insertion.",
            "difficulty": "HARD",
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-MCQ49",
            "question": "What specific biochemical feature differentiates the Cyt toxin family from the Cry toxin family in Bacillus thuringiensis?",
            "options": {
                "A": "Cyt toxins possess a single-domain alpha-beta architecture and directly disrupt membrane lipid bilayers through general detergent-like or pore-forming action without requiring specific protein receptors",
                "B": "Cyt toxins are ribonucleoproteins that inhibit protein synthesis on the 80S ribosome",
                "C": "Cyt toxins are only synthesized under extreme anaerobic conditions",
                "D": "Cyt toxins require active transport across the peritrophic membrane via ATP pumps"
            },
            "correctOption": "A",
            "explanation": "Cyt (cytolytic) toxins have a single alpha-beta structural domain that interacts directly with membrane lipids (phosphatidylcholine, phosphatidylethanolamine) independently of protein receptors.",
            "difficulty": "HARD",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ50",
            "question": "During Beauveria bassiana cuticle penetration, which specific regulatory cascade derepresses the transcription of the pr1A virulence protease gene?",
            "options": {
                "A": "Starvation for carbon and nitrogen combined with cuticular protein substrate induction regulated by the PacC pH transcription factor and CreA derepression",
                "B": "High ambient sucrose levels triggering insulin-like receptors",
                "C": "Exposure to blue light inducing phytochrome B receptors",
                "D": "Direct binding of host juvenile hormone to the fungal promoter"
            },
            "correctOption": "A",
            "explanation": "The pr1A gene is induced by cuticular protein fragments and derepressed under nutrient limitation via conserved fungal regulators including PacC and CreA.",
            "difficulty": "HARD",
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-MCQ51",
            "question": "Which analytical technique is standardly employed in bioprocess engineering to verify the complete conversion of Bt vegetative cells into dormant endospores and parasporal crystals?",
            "options": {
                "A": "Phase-contrast microscopy coupled with malachite green/safranin endospore staining and SDS-PAGE of crystal proteins",
                "B": "Simple litmus paper pH testing",
                "C": "Standard gas chromatography with flame ionization detection",
                "D": "Total organic carbon furnace combustion"
            },
            "correctOption": "A",
            "explanation": "Phase-contrast microscopy visualizes refractory spores and dark crystals, confirmed by differential malachite green endospore staining and SDS-PAGE molecular weight resolution.",
            "difficulty": "HARD",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ52",
            "question": "What is the primary mode of physiological action of Destruxin B, the cyclodepsipeptide produced by Metarhizium anisopliae?",
            "options": {
                "A": "Inhibition of vacuolar-type ATPase (V-ATPase) and disruption of intracellular calcium homeostasis, leading to visceral muscular paralysis and suppression of plasmatocyte encapsulation",
                "B": "Irreversible inhibition of acetylcholinesterase in the cholinergic synaptic cleft",
                "C": "Intercalation between guanine-cytosine base pairs in host nuclear DNA",
                "D": "Destruction of the cuticular epicuticle wax monolayer"
            },
            "correctOption": "A",
            "explanation": "Destruxins inhibit vacuolar ATPase, deplete cellular ATP, alter cytosolic free Ca2+ levels, and paralyze hemocyte defense mechanisms.",
            "difficulty": "HARD",
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-MCQ53",
            "question": "Why is the diphasic (liquid-to-solid) fermentation method considered technologically superior for large-scale production of Beauveria bassiana conidia compared to direct solid-substrate inoculation?",
            "options": {
                "A": "It drastically shortens the total incubation period by 5-7 days and ensures massive, synchronous, uniform inoculation across the grain substrate",
                "B": "It eliminates the need for steam autoclaving of grains",
                "C": "It produces synthetic chemical surfactants naturally",
                "D": "It converts the fungus from an Ascomycete to a Basidiomycete"
            },
            "correctOption": "A",
            "explanation": "Liquid seed fermentation produces billions of viable hyphal fragments in 48-72 h, which synchronously saturate the grain substrate, cutting solid incubation from 20 days to 7-9 days.",
            "difficulty": "HARD",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ54",
            "question": "How does the water activity (aw) of solid-state fermentation substrates affect the physiological quality of harvested Metarhizium conidia?",
            "options": {
                "A": "Moderate water stress (aw 0.95-0.97) stimulates intracellular accumulation of endogenous polyols (erythritol, arabitol, trehalose), enhancing conidial desiccation and thermal tolerance",
                "B": "High water activity (aw = 1.0) is mandatory to prevent fungal spore formation",
                "C": "Water activity has no measurable impact on fungal biochemistry",
                "D": "Low water activity causes immediate transformation into non-pathogenic mycorrhizae"
            },
            "correctOption": "A",
            "explanation": "Controlled osmotic/matric stress forces EPF to accumulate trehalose and polyols inside the conidial cytoplasm, creating protective vitrified matrices that enhance field shelf-life.",
            "difficulty": "HARD",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ55",
            "question": "In CIB&RC registration protocols for microbial pesticides, what is the mandatory acute oral toxicity testing requirement on laboratory mammalian models?",
            "options": {
                "A": "Single-dose oral toxicity/infectivity/pathogenicity testing on albino rats at 1 x 10^8 CFU/animal, monitored over 21 days for clearance and absence of bacteremia/mycosis",
                "B": "Daily lethal dose tests until 50% mortality of rats is achieved",
                "C": "Mammalian testing is completely waived for all microbials",
                "D": "Testing only on freshwater fingerlings"
            },
            "correctOption": "A",
            "explanation": "Tier I mammalian toxicity requires a single high oral gavage (10^8 CFU) in rats, with clinical observation and necropsy at 21 days to verify non-pathogenicity and complete clearance.",
            "difficulty": "HARD",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ56",
            "question": "Why is the incorporation of UV protectants like optical brighteners (e.g., Tinopal / Blankophor) or lignins known to synergize Bt and entomopathogenic fungal efficacy in field crops?",
            "options": {
                "A": "They absorb UV radiation (290-380 nm) while optical brighteners additionally disrupt the insect peritrophic membrane chitin fibrils, enhancing toxin penetration",
                "B": "They chemically convert Bt endotoxins into organophosphates",
                "C": "They prevent insect larvae from molting",
                "D": "They act as chemical attractants for parasitoid wasps"
            },
            "correctOption": "A",
            "explanation": "Stilbene optical brighteners absorb solar UV rays, shielding bacterial/fungal DNA, and interact with chitin microfibrils in the peritrophic matrix, increasing permeability to pathogens.",
            "difficulty": "HARD",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ57",
            "question": "Which of the following describes the thermodynamic state known as 'vitrification' in properly dried fungal conidia stored under shelf-life testing?",
            "options": {
                "A": "The intracellular aqueous solution transitions into an amorphous, highly viscous glassy state with minimal molecular diffusion, arresting metabolic decay",
                "B": "Conidia crystallize into pure ice spikes that pierce the membrane",
                "C": "Spore proteins denature irreversibly at room temperature",
                "D": "The fungus initiates anaerobic ethanol fermentation"
            },
            "correctOption": "A",
            "explanation": "At <8% moisture and high cytoplasmic sugar content (trehalose), the cytoplasm forms an amorphous glass (vitrification), arresting biochemical reactions and preventing degradation.",
            "difficulty": "HARD",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-MCQ58",
            "question": "What is the biochemical significance of the three-domain structural architecture common to active Cry toxins (Domains I, II, and III)?",
            "options": {
                "A": "Domain I is pore-forming (alpha-helices), Domain II handles receptor recognition (beta-sheets), and Domain III stabilizes the toxin and modulates receptor binding (beta-sandwich)",
                "B": "Domain I is an enzyme, Domain II is a polysaccharide, and Domain III is a lipid",
                "C": "All three domains are identical catalytic protease centers",
                "D": "Domain I binds wax, Domain II binds cellulose, and Domain III enters the nucleus"
            },
            "correctOption": "A",
            "explanation": "X-ray crystallography shows Cry toxins consist of: Domain I (bundle of 7 alpha-helices for membrane insertion/pore formation), Domain II (three antiparallel beta-sheets for receptor binding), and Domain III (beta-sandwich for structural integrity and receptor interaction).",
            "difficulty": "HARD",
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-MCQ59",
            "question": "Which molecular diagnostic technique is accepted by CIB&RC to verify the genetic identity and strain authenticity of commercial Beauveria bassiana isolates?",
            "options": {
                "A": "Internal Transcribed Spacer (ITS1-5.8S-ITS2) rDNA sequencing and Translation Elongation Factor 1-alpha (TEF1-alpha) profiling",
                "B": "Colorimetric Benedict's reducing sugar test",
                "C": "Total lipid saponification number",
                "D": "Soil turbidity test"
            },
            "correctOption": "A",
            "explanation": "Molecular barcoding using fungal ITS rDNA and TEF1-alpha sequence analysis confirms species/strain authenticity and ensures no genetic drift has occurred in mother cultures.",
            "difficulty": "HARD",
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-MCQ60",
            "question": "In submerged fermentation of Bt kurstaki, what physiological event triggers the initiation of the sporulation cascade and concurrent Cry crystal synthesis?",
            "options": {
                "A": "Exhaustion of easily assimilable carbon or nitrogen sources triggering phosphorylation of the master sporulation response regulator Spo0A",
                "B": "Excess supply of high-concentration glucose with 100% dissolved oxygen",
                "C": "Sudden drop of culture temperature to freezing point (0°C)",
                "D": "Exposure to high concentrations of synthetic juvenile hormone"
            },
            "correctOption": "A",
            "explanation": "Depletion of primary nutrients initiates the Spo0A phosphorylation cascade, directing RNA polymerase sigma factors (Sigma-E and Sigma-K) to transcribe cry genes during sporulation.",
            "difficulty": "HARD",
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        }
    ]

    # 20 Subjective Questions: DEFINITION (3), SHORT_ANSWER (5), COMPARISON (3), LONG_ANSWER (4), APPLICATION (3), CASE_STUDY (2)
    subj_questions = [
        {
            "id": "ENT203-U2-SUB01",
            "type": "DEFINITION",
            "question": "Define 'Delta-endotoxin' and 'Vip toxins' in Bacillus thuringiensis.",
            "modelAnswer": "Delta-endotoxins are parasporal crystalline inclusion proteins synthesized by Bacillus thuringiensis during the sporulation phase of its life cycle, encoded by plasmid-borne cry and cyt genes. These proteins exist as inert, insoluble protoxins (130-140 kDa or 65-70 kDa) that require alkaline dissolution (pH > 9.0) and midgut endoprotease cleavage to yield an active core toxin (60-65 kDa). The activated toxin binds microvillar brush border membrane receptors (such as cadherin and aminopeptidase N) in susceptible insect midguts, forming lytic pores that induce colloid-osmotic lysis and lethal septicemia.\n\nIn contrast, Vip (Vegetative Insecticidal Proteins) toxins are soluble insecticidal proteins synthesized and actively secreted into the extracellular culture medium during the vegetative growth phase (logarithmic phase) of B. thuringiensis, encoded by vip genes (e.g., vip3Aa). Vip toxins are structurally unrelated to Cry proteins, possess completely distinct amino acid sequences, and interact with different midgut receptor sites. Consequently, Vip proteins do not exhibit cross-resistance with Cry toxins, serving as vital resistance-breaking tools in transgenic crops and biopesticidal rotations.",
            "keyPoints": [
                "Delta-endotoxins are parasporal crystal proteins (Cry/Cyt) formed during sporulation.",
                "Require alkaline midgut dissolution and protease cleavage to form active 60-65 kDa toxins.",
                "Vip toxins are secreted during vegetative growth and have no structural homology to Cry proteins.",
                "Vip proteins bind distinct receptor sites, eliminating cross-resistance with Cry toxins."
            ],
            "maxMarks": 4,
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-SUB02",
            "type": "DEFINITION",
            "question": "Define 'Entomopathogenic Fungi' (EPF) and 'Muscardine Disease'.",
            "modelAnswer": "Entomopathogenic Fungi (EPF) are specialized fungal microorganisms that act as natural parasitic pathogens of insects and other arthropods, capable of causing fatal epizootic infections in host populations. Unlike entomopathogenic bacteria and viruses which require oral ingestion to initiate pathogenesis, EPFs infect their hosts directly via transcuticular penetration through the insect integument. The primary EPFs deployed in agricultural pest management belong to the order Hypocreales (division Ascomycota), including Beauveria bassiana, Metarhizium anisopliae, Lecanicillium lecanii, and Isaria fumosorosea.\n\nMuscardine disease refers to the characteristic clinical pathology induced by entomopathogenic fungi in insects, where the host's body tissues are colonized, dehydrated, and converted into a rigid, mummified cadaver that subsequently becomes completely enveloped by a dense bloom of fungal mycelia and conidiospores. Muscardine infections are named according to the color of the sporulating fungal crust on the host cadaver: 'white muscardine' caused by Beauveria bassiana, 'green muscardine' caused by Metarhizium anisopliae, and 'red muscardine' caused by Beauveria brongniartii.",
            "keyPoints": [
                "EPFs are insect-parasitizing fungi that penetrate cuticles directly without ingestion.",
                "Major agricultural genera include Beauveria, Metarhizium, and Lecanicillium.",
                "Muscardine disease produces a rigid, mummified cadaver covered with fungal conidiophores.",
                "Color of external fungal crust defines white muscardine (B. bassiana) and green muscardine (M. anisopliae)."
            ],
            "maxMarks": 4,
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-SUB03",
            "type": "DEFINITION",
            "question": "Define 'Colony Forming Unit' (CFU) and state its statutory threshold under CIB&RC.",
            "modelAnswer": "A Colony Forming Unit (CFU) is a microbiological metric that quantifies the number of viable, reproductive bacterial cells, fungal conidia, or propagules within a unit mass or volume of a biological product. It is determined by executing serial decimal dilutions of the formulation, plating aliquots onto selective agar media (such as Nutrient Agar for Bt or Sabouraud Dextrose Agar for fungi), and counting the visible discrete macroscopic colonies that develop after standardized incubation (24-48 hours for bacteria; 4-7 days for fungi) under controlled temperature (27-30°C).\n\nUnder the Central Insecticides Board & Registration Committee (CIB&RC) of India (governed by the Insecticides Act 1968), the statutory quality benchmarks for commercial microbial biopesticides require:\n1. A minimum viable propagule count of 1 x 10^8 CFU per gram for carrier-based wettable powder (WP) formulations.\n2. A minimum of 1 x 10^9 CFU per milliliter for liquid suspension concentrates (SC).\n3. Any formulation registering below 1 x 10^8 CFU/g at the time of regulatory testing or before expiry is deemed sub-standard and liable for statutory confiscation.",
            "keyPoints": [
                "CFU measures viable reproductive microbial propagules capable of forming colonies.",
                "Quantified by serial decimal dilution plating on selective nutrient or fungal agar.",
                "CIB&RC statutory standard is minimum 1 x 10^8 CFU/g for powders, 1 x 10^9 CFU/ml for liquids.",
                "Sub-standard CFU counts lead to regulatory cancellation and batch seizure."
            ],
            "maxMarks": 4,
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-SUB04",
            "type": "SHORT_ANSWER",
            "question": "Explain the role of midgut pH and proteases in the activation of Bacillus thuringiensis Cry protoxins.",
            "modelAnswer": "Bacillus thuringiensis produces Delta-endotoxins as dormant, crystalline protoxins that are non-toxic in their native conformation. Their insecticidal activation is strictly contingent upon two host-specific biochemical factors localized within the midgut lumen of susceptible insects:\n\n1. **Alkaline Solubilization:** Most phytophagous lepidopteran and dipteran larvae maintain an exceptionally alkaline midgut environment (pH 9.0 to 11.5), maintained by active potassium-transporting goblet cells. Ingested parasporal inclusion crystals dissolve exclusively under these high-pH conditions. The alkaline milieu deprotonates sulfhydryl groups, disrupting intermolecular disulfide cross-links and hydrogen bonds, solubilizing the insoluble crystal lattice into monomeric protoxins (130-140 kDa for Cry1).\n\n2. **Proteolytic Activation:** Following dissolution, the protoxin must be cleaved by midgut endogenous serine proteases, predominantly trypsin-like and chymotrypsin-like digestive enzymes. These proteases cleave approximately 28 residues from the N-terminus and remove the entire C-terminal half (~600 amino acids) of the 130 kDa protoxin. This precision processing leaves a proteolytically stable, activated core toxin of 60 to 65 kDa containing three functional domains.\n\nIf the midgut pH is acidic or neutral (as in piercing-sucking hemipterans and mammals), the crystals remain insoluble and pass through harmlessly. Similarly, if the insect expresses altered proteases that fail to cleave or over-digest the toxin, activation fails, demonstrating why Bt displays extreme ecological safety.",
            "keyPoints": [
                "Alkaline midgut pH (>9.0) dissolves insoluble parasporal crystals by breaking disulfide bonds.",
                "Serine proteases (trypsin/chymotrypsin) cleave protoxins from 130 kDa to 60-65 kDa core toxin.",
                "Cleavage removes C-terminal domain and N-terminal leader peptide.",
                "Acidic/neutral guts in mammals and sucking bugs prevent crystal dissolution, ensuring safety."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-SUB05",
            "type": "SHORT_ANSWER",
            "question": "Describe the three-domain structural organization of activated Cry toxins and their functions.",
            "modelAnswer": "X-ray crystallographic studies have revealed that all active Cry delta-endotoxin core molecules (60-65 kDa) share a highly conserved, three-domain globular protein architecture, with each domain performing a specialized mechanical or biochemical role during intoxication:\n\n1. **Domain I (Pore-Forming Domain):** Located at the N-terminus, Domain I consists of a bundle of seven antiparallel alpha-helices surrounding a central hydrophobic helix (helix alpha-5). Upon receptor binding and oligomerization, Domain I undergoes a profound conformational change wherein helices alpha-4 and alpha-5 insert directly into the microvillar apical lipid bilayer of midgut epithelial cells, creating a trans-membrane lytic pore of 1-2 nm diameter.\n\n2. **Domain II (Receptor-Recognition Domain):** The central domain consists of three antiparallel beta-sheets organized in a Greek key topology, terminating in exposed hypervariable surface loops. These surface loops mimic immunoglobulin-binding loops and are the primary determinants of insect specificity. They bind specifically to high-affinity receptors (Cadherin, Aminopeptidase N) on the insect midgut epithelium.\n\n3. **Domain III (Receptor Interaction and Membrane Insertion):** The C-terminal domain is configured as a beta-sandwich structure comprising two antiparallel beta-sheets in a jelly-roll fold. Domain III provides structural stability to the toxin core, shields it from premature proteolytic destruction, interacts with secondary GPI-anchored receptors (such as Alkaline Phosphatase), and participates in ion channel pore permeability.",
            "keyPoints": [
                "Domain I: N-terminal 7-alpha-helix bundle responsible for membrane insertion and pore formation.",
                "Domain II: Three beta-sheets with hypervariable loops governing insect-specific receptor binding.",
                "Domain III: C-terminal beta-sandwich maintaining stability and facilitating secondary receptor binding.",
                "Conserved architecture ensures coordinated binding, oligomerization, and pore formation."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-SUB06",
            "type": "SHORT_ANSWER",
            "question": "Detail the enzymes utilized by Beauveria bassiana during host cuticle penetration.",
            "modelAnswer": "The insect cuticle forms an impenetrable physical and chemical barrier consisting of an outer waxy epicuticle (rich in hydrocarbons, fatty acids, and wax esters) and an inner procuticle (a dense matrix of chitin microfibrils embedded in structural proteins). To breach this barrier, Beauveria bassiana secretes a coordinated battery of hydrolytic enzymes from its germ tube and appressorial peg:\n\n1. **Lipases and Esterases:** Secreted immediately upon conidial adhesion to degrade epicuticular lipids and long-chain wax esters, exposing underlying structural protein matrices.\n\n2. **Proteases (Pr1 and Pr2):** Cuticular structural proteins represent the primary structural barrier (~70% of cuticle dry weight). B. bassiana secretes Pr1 (a 30 kDa subtilisin-like serine endoprotease) and Pr2 (a trypsin-like serine protease). Pr1 degrades cuticular proteins, clears paths for mechanical hyphal ingress, and releases peptide fragments that further stimulate fungal enzyme synthesis.\n\n3. **Chitinases (Endochitinases and Exochitinases):** Once proteases expose chitin polymers, B. bassiana secretes endochitinases (which hydrolyze internal beta-1,4-glycosidic bonds in the chitin chain) and exochitinases/N-acetylglucosaminidases (which cleave terminal dimers into N-acetylglucosamine monomers). Hydrolysis of chitin weakens structural rigidity, allowing the penetration peg to breach into the host hemocoel under mechanical turgor pressure within 24 to 48 hours.",
            "keyPoints": [
                "Lipases degrade epicuticular wax and ester coatings.",
                "Pr1 (subtilisin-like) and Pr2 (trypsin-like) serine proteases digest structural procuticle proteins.",
                "Endochitinases and exochitinases cleave beta-1,4-glycosidic linkages in structural chitin microfibrils.",
                "Synergistic enzymatic degradation combined with appressorial turgor breaches host integument."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-SUB07",
            "type": "SHORT_ANSWER",
            "question": "Explain the practical importance of Metarhizium anisopliae in managing subterranean insect pests.",
            "modelAnswer": "Metarhizium anisopliae ('green muscardine' fungus) occupies an indispensable niche in agricultural integrated pest management because it is exceptionally evolved to persist and infect insect pests within the soil ecosystem. Subterranean insect pests—such as white grubs (Holotrichia serrata, Phyllophaga spp.), termite workers (Odontotermes obesus), root borers, and wireworms—inflict devastating root damage across sugarcane, groundnut, potato, and maize, yet are virtually unreachable by foliar chemical insecticides.\n\nPractical advantages in soil management include:\n1. **Soil Ecological Adaptation:** M. anisopliae conidia possess hydrophobic, melanized cell walls that survive in rhizosphere soils for months, tolerating fluctuating moisture and soil microbial competition.\n2. **Production of Destruxins:** Ingested or penetrating Metarhizium hyphae secrete destruxins (cyclic hexadepsipeptides) into grub hemolymph, inducing flaccid muscular paralysis, disrupting Malpighian tubule function, and neutralizing host hemocyte phagocytosis within 3-5 days.\n3. **Epizootic Potential:** Infected grubs die beneath the soil surface and mummify into sporulating green cadavers. As healthy grubs contact dead cadavers or move through fungus-treated soil zones, the disease spreads epizootically throughout the field.\n4. **Application Methods:** Farmers can apply M. anisopliae talc formulations (2.5 to 5.0 kg/ha) enriched in farmyard manure (FYM) or vermicompost applied directly to seed furrows or during earthing-up operations, providing safe, residue-free subterranean root protection.",
            "keyPoints": [
                "Adapted to soil rhizosphere where synthetic foliar sprays cannot reach subterranean pests.",
                "Targets destructive subterranean pests: white grubs, root borers, and termites.",
                "Secretes destruxins causing paralysis and suppressing host cellular encapsulation.",
                "Formulations enriched in FYM/compost spread epizootically through mummified subterranean cadavers."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-SUB08",
            "type": "SHORT_ANSWER",
            "question": "Outline the two-stage (diphasic) fermentation system for producing entomopathogenic fungi.",
            "modelAnswer": "The diphasic (two-stage) fermentation process is the modern industrial standard for mass-producing high-virulence entomopathogenic fungi (Beauveria bassiana, Metarhizium anisopliae) by marrying the speed of submerged liquid fermentation with the high spore quality of solid-state fermentation:\n\n1. **Stage 1: Submerged Liquid Pre-Culture (Biomass Generation):**\n   - Sterile liquid media containing soluble agricultural nutrients (2-4% sucrose/molasses, 1-2% yeast extract or soybean meal) in a stirred-tank fermenter is inoculated with mother culture conidia.\n   - Operated at 26-28°C with continuous sterile aeration (0.5-1.0 vvm) and agitation (150-250 rpm) for 48 to 72 hours.\n   - Yields an explosive biomass density of vegetative hyphal fragments and blastospores (>1 x 10^8 cells/ml).\n\n2. **Stage 2: Solid-State Surface Conidiogenesis:**\n   - Solid cereal grain substrates (broken parboiled rice, sorghum, or maize grits moistened to 45-50% moisture and autoclaved in polypropylene filter-patch bags) are inoculated with the liquid broth from Stage 1.\n   - Because billions of fungal cells are uniformly distributed across the grains, colonization is rapid, outcompeting contaminants and cutting solid incubation from 20 days down to 7-10 days.\n   - At the solid-air interface, the fungus undergoes aerial sporulation, producing durable, hydrophobic, thick-walled conidia packed with trehalose and protective lipids.\n   - Grains are gently air-dried (<35°C) to <8% moisture, and conidia are harvested using vibrating sieves or cyclone separators.",
            "keyPoints": [
                "Stage 1: Submerged liquid fermentation produces massive hyphal/blastospore biomass in 48-72 h.",
                "Stage 2: Broth inoculates moist cereal grains (rice/sorghum) for aerial conidiogenesis in 7-10 days.",
                "Synchronous inoculation drastically reduces incubation time and contaminant risks.",
                "Harvested aerial conidia exhibit superior hydrophobicity, UV tolerance, and field shelf-life."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-SUB09",
            "type": "COMPARISON",
            "question": "Compare Bacillus thuringiensis with Entomopathogenic Fungi across mode of entry, target pests, humidity requirements, and speed of kill.",
            "modelAnswer": "Bacillus thuringiensis (Bt) and Entomopathogenic Fungi (EPF) represent the two premier microbial insect control groups, displaying marked biological and operational contrasts:\n\n1. **Mode of Entry:**\n   - *Bt:* Strictly an oral stomach poison. Crystals must be actively ingested by larvae while feeding on foliage; it possesses zero contact action.\n   - *EPF:* Enters exclusively through direct contact and active transcuticular penetration of the insect exoskeleton via germ tube appressoria and hydrolytic enzymes.\n\n2. **Target Insect Spectrum:**\n   - *Bt:* Primarily restricted to chewing chewing insects with alkaline midguts (Lepidoptera, Diptera, select Coleoptera). Piercing-sucking insects (Hemiptera) are unaffected.\n   - *EPF:* Broad arthropod host spectrum including piercing-sucking pests (aphids, whiteflies, thrips, scales, mealybugs), subterranean beetles (white grubs), and foliar caterpillars.\n\n3. **Humidity and Environmental Dependence:**\n   - *Bt:* Relatively independent of ambient humidity for efficacy, as activation occurs internally within the larval digestive tract. However, crystals are photolabile to UV rays.\n   - *EPF:* Extremely dependent on external environmental moisture; conidial germination and host penetration require relative humidity above 85-90% or free surface moisture.\n\n4. **Speed of Kill (Lethal Time):**\n   - *Bt:* Fast-acting feeding cessation occurs within 2 to 6 hours due to midgut paralysis; larval mortality from septicemia follows in 48 to 72 hours.\n   - *EPF:* Slower biological incubation; conidial germination, cuticle breach, blastospore multiplication, and mummification require 5 to 9 days to kill the host.",
            "keyPoints": [
                "Entry: Bt requires oral ingestion; EPF infects through contact and cuticular penetration.",
                "Host Range: Bt targets chewing Lepidoptera/Diptera/Coleoptera; EPF targets sucking hemipterans and soil grubs.",
                "Humidity: Bt is independent of ambient RH; EPF requires >85-90% RH for conidial germination.",
                "Speed: Bt halts feeding in 2-6 h (death in 48-72 h); EPF requires 5-9 days for complete mortality."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-SUB10",
            "type": "COMPARISON",
            "question": "Compare Submerged Liquid Fermentation with Solid-State Fermentation (SSF) for entomopathogenic microorganisms.",
            "modelAnswer": "Submerged Liquid Fermentation (SLF) and Solid-State Fermentation (SSF) are two divergent bioengineering strategies utilized in microbial biopesticide manufacturing:\n\n1. **Physical Substrate and Matrix:**\n   - *SLF:* Liquid nutrient broth (water, molasses, peptone, mineral salts) in large closed stainless-steel bioreactors with dissolved oxygen sparging and mechanical agitation.\n   - *SSF:* Solid, moist, non-soluble organic substrates (broken cereal grains, wheat bran, bagasse) with low free water in shallow trays or aerated autoclavable polypropylene bags.\n\n2. **Process Engineering and Parameter Control:**\n   - *SLF:* Highly automated, real-time computerized monitoring and precise control over temperature, dissolved oxygen (DO), pH, nutrient feeding, and foaming.\n   - *SSF:* Heterogeneous matrix creates severe engineering challenges: difficult heat dissipation, poor mass transfer of oxygen, and non-uniform moisture gradients.\n\n3. **Microbial Propagule Yield and Morphology:**\n   - *SLF:* Ideal for Bt endospore and parasporal crystal production. For EPF, it yields vegetative mycelial fragments and thin-walled, fragile blastospores that have poor shelf stability.\n   - *SSF:* The solid-air interface triggers natural aerial conidiogenesis in EPF, producing durable, thick-walled hydrophobic conidia containing high levels of trehalose and protective lipids.\n\n4. **Capital Investment and Scalability:**\n   - *SLF:* High initial capital expenditure for pressure vessels, automated steam sterilization, and instrumentation; highly scalable with low operational labor per unit.\n   - *SSF:* Low capital equipment cost (simple trays and autoclaves), but highly labor-intensive, space-demanding, and vulnerable to cross-contamination if sterile air handling is inadequate.",
            "keyPoints": [
                "Matrix: SLF uses liquid broth in agitated bioreactors; SSF uses moist cereal grains with low free water.",
                "Control: SLF allows automated control of pH/DO; SSF struggles with heat removal and mass transfer.",
                "Propagules: SLF produces Bt spores or EPF blastospores; SSF produces resilient, thick-walled aerial conidia.",
                "Economics: SLF has high capital cost with low labor; SSF has low equipment cost but high labor."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-SUB11",
            "type": "COMPARISON",
            "question": "Compare Beauveria bassiana and Metarhizium anisopliae in terms of morphology, toxins, and ecological adaptation.",
            "modelAnswer": "Beauveria bassiana and Metarhizium anisopliae are both hypocrealean ascomycete fungi sharing an entomopathogenic lifestyle, but diverge in morphological, toxicological, and ecological attributes:\n\n1. **Spore Morphology and Macroscopic Signs:**\n   - *B. bassiana:* Produces single-celled, globose to sub-globose hyaline conidia (2-3 µm diameter) borne on zig-zag rachis-like sympodial conidiophores. Mummified cadavers exhibit a chalky white, powdery bloom ('white muscardine').\n   - *M. anisopliae:* Forms cylindrical, rod-shaped conidia with rounded ends (5-7 µm long) aggregated into dense, parallel, vertical prismatic chains. Cadavers are covered with a characteristic dark olive-green conidial crust ('green muscardine').\n\n2. **Toxin Profiles:**\n   - *B. bassiana:* Produces cyclooligomer depsipeptides (beauvericin, bassianolide) and the red dibenzoquinone pigment **oosporein**, which prevents bacterial decay of the cadaver.\n   - *M. anisopliae:* Synthesizes **destruxins** (cyclic hexadepsipeptides A, B, and E) and cytochalasins, which selectively block host calcium channels and paralyze muscular and Malpighian systems.\n\n3. **Ecological Adaptation and Target Niches:**\n   - *B. bassiana:* Exceptionally adapted to foliar phylloplane environments. Successfully targets foliar chewing caterpillars (Helicoverpa, Spodoptera) and sucking pests (whiteflies, thrips, aphids, coffee berry borer).\n   - *M. anisopliae:* Exceptionally adapted to subterranean rhizosphere and organic soil ecologies. Conidia survive longer in heavy soils, making it the premier agent against soil pests (white grubs, root grubs, wireworms, termites, rhinoceros beetles).",
            "keyPoints": [
                "Morphology: B. bassiana has spherical conidia forming white blooms; M. anisopliae has cylindrical conidia forming olive-green chains.",
                "Toxins: B. bassiana produces beauvericin and red oosporein; M. anisopliae produces calcium-blocking destruxins.",
                "Ecology: B. bassiana thrives in phylloplane foliar environments; M. anisopliae is adapted to subterranean soil ecologies.",
                "Pests: B. bassiana for foliar caterpillars and whiteflies; M. anisopliae for subterranean grubs and termites."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-SUB12",
            "type": "LONG_ANSWER",
            "question": "Provide a comprehensive account of the step-by-step mechanism of action of Bacillus thuringiensis delta-endotoxins from ingestion to larval mortality.",
            "modelAnswer": "The insecticidal action of Bacillus thuringiensis (Bt) Delta-endotoxins (Cry proteins) represents a classical model of receptor-mediated colloid-osmotic lysis. Because these crystalline proteins function strictly as stomach poisons, the cascade unfolds sequentially through five distinct biochemical stages:\n\n**Stage 1: Ingestion and Alkaline Solubilization**\nSusceptible insect larvae (e.g., Helicoverpa armigera) ingest parasporal inclusion crystals along with treated foliage. In the midgut lumen, the crystals encounter a hyper-alkaline environment (pH 9.0 to 11.5) maintained by midgut goblet cell ATP-driven proton pumps. This alkaline pH deprotonates cysteine sulfhydryl groups, disrupting disulfide cross-links and dissolving the insoluble crystalline lattice into soluble, monomeric protoxins (130-140 kDa for Cry1Ac).\n\n**Stage 2: Proteolytic Processing by Midgut Enzymes**\nSolubilized protoxins traverse the peritrophic membrane into the ectoperitrophic space, where endogenous insect serine proteases (trypsins and chymotrypsins) cleave the protoxin. Proteolysis removes an N-terminal peptide (~28 amino acids) and the entire C-terminal domain (~600 residues), yielding a 60-65 kDa proteolytically stable, active core toxin consisting of Domains I, II, and III.\n\n**Stage 3: Primary Receptor Binding and Oligomerization**\nThe active toxin binds via surface loops of Domain II and Domain III to specific, high-affinity primary transmembrane receptors located on the microvillar apical membrane of midgut epithelial cells. The primary receptor is a Cadherin-like transmembrane protein (CAD). Cadherin binding triggers an additional cleavage of the alpha-1 helix in Domain I. This critical cleavage induces the toxin monomers to assemble into a stable, water-soluble tetrameric structure termed the 'pre-pore oligomer'.\n\n**Stage 4: Secondary Receptor Interaction and Membrane Insertion**\nThe tetrameric pre-pore oligomer demonstrates vastly increased affinity for secondary receptors—specifically glycosylphosphatidylinositol (GPI)-anchored proteins including Aminopeptidase N (APN) and Alkaline Phosphatase (ALP). Binding to APN and ALP localizes the oligomer to cholesterol- and sphingolipid-rich lipid raft microdomains. The hydrophobic hairpin loops (helices alpha-4 and alpha-5 of Domain I) undergo a dramatic conformational transition, inserting directly into the apical lipid bilayer.\n\n**Stage 5: Colloid-Osmotic Lysis, Gut Paralysis, and Septicemia**\nMembrane insertion creates symmetric, non-regulated cation-permeable lytic pores (1-2 nm diameter). These pores permit the uncontrolled, passive influx of sodium and potassium ions followed immediately by water down osmotic gradients. Midgut epithelial cells undergo rapid colloid-osmotic swelling and burst (lysis), sloughing off the basement membrane. The midgut epithelial integrity is obliterated, leading to immediate gut paralysis and cessation of feeding within 2 to 6 hours. The alkaline gut contents leak into the acidic hemolymph, altering blood pH. Concurrently, dormant Bt spores present in the gut germinate, invade the nutrient-rich hemocoel, multiply exponentially, and cause lethal bacterial septicemia and death within 48 to 72 hours.",
            "keyPoints": [
                "Stage 1: Ingestion and crystal dissolution in alkaline midgut lumen (pH >9.0).",
                "Stage 2: Serine protease cleavage converting 130 kDa protoxin into 60-65 kDa core toxin.",
                "Stage 3: Binding to Cadherin receptor and formation of tetrameric pre-pore oligomer.",
                "Stage 4: Interaction with GPI-anchored APN/ALP and insertion of Domain I helices into lipid rafts.",
                "Stage 5: Formation of 1-2 nm lytic pores, colloid-osmotic swelling, gut paralysis (2-6 h), and septicemia (48-72 h)."
            ],
            "maxMarks": 10,
            "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"
        },
        {
            "id": "ENT203-U2-SUB13",
            "type": "LONG_ANSWER",
            "question": "Elaborate the complete infection cycle of Beauveria bassiana on an insect host, detailing structural transitions and physiological effects.",
            "modelAnswer": "Beauveria bassiana represents the prototype of hypocrealean fungal entomopathogens. Because it bypasses the digestive tract, its pathogenesis involves a coordinated sequence of adhesion, germination, enzymatic penetration, dimorphic vegetative proliferation, mycotoxin secretion, host mummification, and saprophytic conidiogenesis:\n\n**Phase 1: Attachment and Epicuticular Adhesion**\nAsexual conidia (hydrophobic, single-celled propagules) contact the host epicuticle through passive air currents, rain splash, or insect locomotion. Conidia adhere tenaciously to the cuticular wax monolayer mediated by non-specific hydrophobic interactions governed by fungal cell-wall proteins called hydrophobins (Class I hydrophobin Hyd1), which recognize insect cuticular hydrocarbons.\n\n**Phase 2: Conidial Germination and Appressorium Differentiation**\nUnder favorable relative humidity (>85-90%) and temperatures (25-28°C), the conidium absorbs cuticular moisture and initiates germination within 12-24 hours. The emergent germ tube senses physical topography and cuticular fatty acids, elongating across the integument before its tip swells into a flattened, specialized infection structure called an appressorium. The appressorium anchors firmly by secreting mucilaginous exopolysaccharides.\n\n**Phase 3: Enzymatic Degradation and Cuticular Penetration**\nA narrow penetration peg emerges from the appressorial base. The peg secretes a cocktail of hydrolytic enzymes: lipases and esterases to dissolve epicuticular waxes, followed by subtilisin-like serine proteases (Pr1A) and endochitinases to degrade the protein-chitin procuticle matrix. Synergizing enzymatic dissolution with mechanical turgor pressure generated within the appressorium, the penetration peg breaches through the exocuticle and endocuticle, entering the epidermal layer within 24 to 48 hours.\n\n**Phase 4: Hemocoel Invasion and Blastospore Dimorphism**\nUpon penetrating through the basement membrane into the nutrient-rich hemolymph, B. bassiana undergoes a dimorphic shift. The filamentous hypha fragments into single-celled, yeast-like budding cells called blastospores (hyphal bodies). Because blastospores lack the thick beta-glucan cell wall of conidia, they evade host hemocytic recognition and encapsulation. Blastospores multiply geometrically, circulating throughout the open vascular system and consuming hemolymph trehalose, amino acids, and lipids.\n\n**Phase 5: Toxin Biosynthesis and Host Morbidity**\nDuring blastospore multiplication, the fungus biosynthesizes cyclic depsipeptide toxins including beauvericin, bassianolide, and oosporein. These immunosuppressive metabolites inhibit host cellular immunity, induce vacuolization in host cells, damage internal tissues, and cause multi-organ failure. The insect exhibits sluggish movement, loss of appetite, paralysis, and dies within 4 to 7 days.\n\n**Phase 6: Post-Mortem Mummification and Sporulation**\nFollowing host death, blastospores switch back to filamentous vegetative hyphae, consuming remaining viscera, fat body, and muscles. Hyphae secrete oosporein (a red dibenzoquinone) that suppresses competing saprophytic putrefying bacteria, converting the cadaver into a rigid, odorless mummified 'white stone'. Under humid conditions (>90% RH), hyphae push outwards through thin intersegmental membranes, spiracles, and mouthparts, producing dense sympodial conidiophores. Millions of chalky-white, powdery conidia erupt on the cadaver, creating the classic 'white muscardine' bloom ready to initiate new infection cycles.",
            "keyPoints": [
                "Adhesion: Hydrophobins mediate conidial binding to epicuticular wax layer.",
                "Germination & Appressorium: Germ tube differentiates into an anchored appressorium within 12-24 h.",
                "Cuticle Breach: Pr1 proteases and chitinases synergize with mechanical turgor to penetrate integument.",
                "Blastospore Phase: Dimorphic switch to yeast-like blastospores evades hemocyte encapsulation in hemolymph.",
                "Toxemia & Death: Beauvericin and bassianolide induce multi-organ collapse in 4-7 days.",
                "Mummification & Sporulation: Vegetative hyphae consume cadaver, secrete oosporein, and erupt in white conidial bloom."
            ],
            "maxMarks": 10,
            "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"
        },
        {
            "id": "ENT203-U2-SUB14",
            "type": "LONG_ANSWER",
            "question": "Describe the mass production of Bacillus thuringiensis using industrial submerged fermentation and downstream formulation processing.",
            "modelAnswer": "Industrial production of Bacillus thuringiensis utilizes automated submerged liquid fermentation in large-scale stirred-tank bioreactors (5,000 to 50,000 liters capacity), as Bt's aerobic, rod-shaped physiology and sporulation kinetics are ideally suited to liquid culture.\n\n**1. Raw Material Media Formulation:**\nFermentation media must satisfy strict carbon-to-nitrogen (C:N) ratios (typically 5:1 to 8:1) to support rapid vegetative biomass accumulation followed by synchronous sporulation. Industrial media rely on inexpensive agro-industrial byproducts: carbon sources include cane molasses, corn starch, or glucose; nitrogen sources comprise soybean meal, defatted cottonseed flour, corn steep liquor, or yeast autolysate; supplemented with trace mineral salts (MgSO4, MnSO4, FeSO4, ZnSO4, CaCl2) essential for delta-endotoxin crystallization.\n\n**2. Inoculum Preparation:**\nMother cultures (certified pure strain of Bt subsp. kurstaki or israelensis) are maintained on nutrient agar or in cryovials at -80°C. Inoculum buildup proceeds through a multi-stage seed train: loop inoculation into 250 ml shake flasks -> 5-liter laboratory fermenter -> 500-liter pilot seed fermenter (incubated at 30°C for 12-16 hours) until logarithmic phase cell densities of 10^8 cells/ml are achieved, which then inoculates the production fermenter at a 5-10% (v/v) transfer rate.\n\n**3. Production Bioreactor Operation:**\n- Operating Parameters: Temperature maintained at 28-30°C; pH automatically controlled at 6.8 to 7.2 using sterile NaOH or H2SO4; dissolved oxygen (DO) maintained above 20-30% saturation via sterile air sparging (0.5 to 1.2 vvm) and variable-speed impeller agitation (100 to 300 rpm).\n- Growth Phases: The vegetative phase lasts 12-18 hours. As easily assimilable nutrients deplete, cell division ceases and the culture enters sporulation (18-36 hours), characterized by the phosphorylation of Spo0A and expression of Cry crystal proteins. By 40-48 hours, autolytic enzymes lyse the sporangial mother cell wall, releasing free dormant endospores and bipyramidal parasporal crystals into the broth.\n- Harvest Point: Determined when phase-contrast microscopy confirms >95% cell lysis with free refractile spores and protein crystals.\n\n**4. Downstream Processing:**\n- Biomass Separation: The whole broth is chilled to 10°C to arrest microbial activity. Spores and crystals are harvested using continuous-flow disc-stack centrifugation or hollow-fiber tangential flow microfiltration, yielding a concentrated slurry (15-20% solids).\n- Drying: The concentrated slurry is blended with protective colloids and dried using industrial spray drying (inlet temperature 140-160°C, outlet temperature 60-70°C, where short residence times preserve protein integrity) or low-temperature vacuum drying.\n\n**5. Formulation Science:**\nDry technical powder is blended with carriers and adjuvant additives to produce commercial Wettable Powders (WP):\n- Active Ingredient: Spray-dried Bt spore-crystal concentrate (10-20% w/w).\n- Carrier: Inert precipitated silica or fine talc powder (300 mesh, 70-80% w/w).\n- Wetting & Dispersing Agents: Sodium lignosulfonate or alkyl aryl sulfonates (3-5% w/w) to facilitate instantaneous dispersion in spray tanks.\n- Stickers & UV Shields: Carboxymethyl cellulose (CMC) and lignins/stilbenes (1-2% w/w) to retard rain wash-off and photolytic breakdown.",
            "keyPoints": [
                "Media: Cane molasses, soybean meal, corn steep liquor with trace minerals (Mn, Mg, Ca).",
                "Seed Train: Sequential scale-up from shake flask to pilot fermenter ensuring active vegetative inoculum.",
                "Bioreactor: Aerobic stirred-tank operation at 30°C, pH 7.0, DO >25%, sporulation in 36-48 h.",
                "Harvest: Continuous centrifugation or microfiltration when sporangial lysis reaches >95%.",
                "Formulation: Spray drying into technical powder blended with talc carrier, lignosulfonate dispersant, and UV blockers."
            ],
            "maxMarks": 10,
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        },
        {
            "id": "ENT203-U2-SUB15",
            "type": "LONG_ANSWER",
            "question": "Describe the statutory quality control parameters mandated by the CIB&RC for registration and commercial marketing of entomopathogenic fungal biopesticides.",
            "modelAnswer": "In India, microbial biopesticides are regulated as statutory pesticides under the Insecticides Act 1968 and the Insecticides Rules 1971. The Central Insecticides Board and Registration Committee (CIB&RC) enforces stringent quality control parameters and testing protocols that commercial manufacturers must satisfy for grant of registration (under Section 9(3B) provisional or Section 9(3) regular) and commercial release:\n\n**1. Active Propagule Viability (CFU Count):**\n- For Wettable Powders (WP) and carrier-based dry formulations: Minimum 1 x 10^8 colony-forming units (CFU) per gram.\n- For Liquid Suspension Concentrates (SC): Minimum 1 x 10^9 CFU per milliliter.\n- Spore Viability / Germination Rate: When freshly plated on Sabouraud Dextrose Agar (SDA) at 25°C, conidial germination must exceed 85% at 24 hours.\n\n**2. Moisture Content Threshold:**\nCarrier-based wettable powders must not exceed a maximum moisture content of 8.0% (w/w). Excessive moisture causes premature metabolic activation, lipid exhaustion, clumping, and accelerated thermal loss of conidial viability during warehouse storage.\n\n**3. Biological Purity and Contaminant Limits:**\n- General Microbial Contamination: Total non-pathogenic bacterial and fungal contaminant load must not exceed 1 x 10^4 colonies per gram.\n- Human and Animal Pathogen Restrictions: Absolute zero-tolerance (must be 100% free) for specific opportunistic and enteric human pathogens: Salmonella spp., Shigella spp., Vibrio cholerae, pathogenic Escherichia coli, and hemolytic Streptococci.\n\n**4. Physical and Chemical Properties:**\n- pH Range: Formulation pH must remain buffered within 6.0 to 7.5 to prevent conidial wall destabilization.\n- Particle Size: Minimum 98% of powder formulation must pass through a 75-micron IS sieve (200 mesh).\n- Suspensibility: Minimum 60% suspensibility in standard hard water after 30 minutes standing.\n\n**5. Bioefficacy and Potency Certification:**\nEvery manufacturing batch must undergo standardized bioassay validation against certified laboratory insect cultures. For Beauveria bassiana and Metarhizium anisopliae, the LC50 must be documented against designated test insects (e.g., Galleria mellonella or Spodoptera litura neonates), demonstrating baseline biological killing power.\n\n**6. Shelf-Life Specification and Packaging:**\nManufacturers must establish real-time and accelerated shelf-life stability data demonstrating that the formulation retains at least 1 x 10^8 CFU/g after 6 months storage at room temperature (25-30°C). Products must be packaged in multi-layered, hermetically sealed aluminum foil pouches or HDPE bottles to shield from atmospheric humidity and light.",
            "keyPoints": [
                "CFU Count: Minimum 1 x 10^8 CFU/g for WP and 1 x 10^9 CFU/ml for liquid SC formulations.",
                "Germination: Minimum 85% conidial germination on agar within 24 hours.",
                "Moisture: Maximum allowable moisture is 8.0% to prevent degradation and clumping.",
                "Purity: Maximum 10^4 non-pathogenic contaminants/g; absolute zero tolerance for Salmonella, Shigella, Vibrio.",
                "Physical: pH 6.0-7.5, 98% pass 75-micron sieve, minimum 60% suspensibility.",
                "Shelf-life & Storage: Minimum 6 months stability with <1 log drop; packed in hermetic foil/HDPE."
            ],
            "maxMarks": 10,
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-SUB16",
            "type": "APPLICATION",
            "question": "A tomato grower faces severe silverleaf whitefly (Bemisia tabaci) infestation in a greenhouse. Formulate an application schedule using Lecanicillium lecanii.",
            "modelAnswer": "Silverleaf whitefly (Bemisia tabaci) is a destructive phloem-feeding pest in greenhouse tomatoes that transmits Tomato Yellow Leaf Curl Virus (TYLCV) and secretes honeydew leading to sooty mold. Lecanicillium lecanii ('white halo fungus') is ideally suited for this protected cultivation environment.\n\n**Operational Application Schedule:**\n1. **Pre-Application Greenhouse Conditioning:**\n   - Whitefly nymphs and adults congregate on the abaxial (underside) surfaces of tomato leaves.\n   - Ensure greenhouse relative humidity is maintained above 85% for at least 12-16 hours post-application. Run overhead misting or fogging systems or wet the greenhouse walkways 30 minutes prior to spraying.\n   - Schedule spraying strictly during late afternoon (after 4:30 PM) to avoid daytime solar heating and protect conidia from solar UV degradation.\n\n2. **Dosage and Tank Mix Preparation:**\n   - Use registered Lecanicillium lecanii 1.15% WP (1 x 10^8 CFU/g) at a rate of 5.0 g/liter of water (or 1.0 kg/ha in 200 L water).\n   - Prepare a smooth pre-slurry in a small bucket before pouring through a 100-mesh filter into the spray tank.\n   - Add a non-ionic organosilicone surfactant (e.g., Silwet L-77 at 0.05% or 0.5 ml/L) to facilitate wetting and overcome the hydrophobic waxy bloom covering whitefly nymphs.\n\n3. **Spraying Technique:**\n   - Utilize a knapsack power sprayer or high-pressure hollow-cone nozzle directed upwards to ensure thorough drenching of the lower leaf surfaces where nymphal instars feed.\n\n4. **Frequency and Integration:**\n   - Apply two sequential sprays spaced 5 to 7 days apart to target newly hatched crawlers emerging from previously deposited eggs.\n   - Crucial Precaution: Do not apply synthetic chemical fungicides (e.g., azoxystrobin, difenoconazole, mancozeb) within 10 days before or after L. lecanii application, as fungicidal residues will kill the biocontrol spores.",
            "keyPoints": [
                "Condition greenhouse RH >85% using misting systems to support fungal germination.",
                "Spray late afternoon (after 4:30 PM) to shield conidia from daytime heat and UV rays.",
                "Dosage: L. lecanii WP at 5 g/L with an organosilicone surfactant (0.05%) to breach waxy nymph coatings.",
                "Direct spray upward to thoroughly cover lower leaf surfaces where whiteflies congregate.",
                "Apply 2 sprays at 5-7 day intervals; maintain a 10-day safety buffer from chemical fungicides."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-SUB17",
            "type": "APPLICATION",
            "question": "Design a soil application protocol for Metarhizium anisopliae to control white grubs (Holotrichia serrata) in a sugarcane field.",
            "modelAnswer": "White grub (Holotrichia serrata) larvae feed voraciously on sugarcane roots, severing root systems and causing yellowing, lodging, and complete clump drying. Metarhizium anisopliae offers superior, eco-friendly control when applied through a bio-enriched carrier protocol:\n\n**Soil Application Protocol:**\n1. **On-Farm Bio-Enrichment (Mass Multiplication):**\n   - White grubs dwell 10 to 15 cm deep in soil; direct broadcast of dry powder yields poor distribution.\n   - Take 5.0 kg of Metarhizium anisopliae talc powder (minimum 1 x 10^8 CFU/g).\n   - Thoroughly blend into 500 kg of well-decomposed, moist Farmyard Manure (FYM) or vermicompost.\n   - Maintain moisture at ~40% (damp to touch, no dripping), cover the heap with a moist gunny bag or polythene sheet, and incubate under tree shade for 10 to 15 days. Fungal mycelium will proliferate throughout the manure, multiplying CFU counts 10- to 50-fold.\n\n2. **Field Timing and Delivery:**\n   - Timing: Apply in early monsoon (June-July) coinciding with adult beetle oviposition and emergence of early 1st and 2nd instar grubs, which are highly susceptible.\n   - Method: Apply the bio-enriched FYM directly along the sugarcane root zones in planting furrows or during the first earthing-up operation.\n   - Immediately follow application with light irrigation to carry fungal spores into the rhizosphere grub-feeding zone.\n\n3. **Expected Field Outcome:**\n   - Ingesting and contacting soil-borne conidia, grubs become infected and develop dark brown necrotic lesions. Grubs die within 6 to 10 days, mummifying into green sporulating cadavers that continuously re-inoculate the soil for persistent multi-season suppression.",
            "keyPoints": [
                "Bio-enrich 5 kg M. anisopliae WP in 500 kg moist FYM/vermicompost for 10-15 days under shade.",
                "Apply during early monsoon (June-July) targeting vulnerable 1st and 2nd instar grubs.",
                "Deliver directly into root zones during furrow planting or earthing-up operations.",
                "Provide immediate light irrigation to wash fungal conidia 10-15 cm deep into grub zones.",
                "Mummified grubs act as biological secondary inocula, providing multi-season suppression."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"
        },
        {
            "id": "ENT203-U2-SUB18",
            "type": "APPLICATION",
            "question": "Explain how to conduct a laboratory serial dilution and plating assay to verify the CFU count of a commercial Bacillus thuringiensis formulation.",
            "modelAnswer": "Verifying the viable spore concentration of a commercial Bt formulation requires serial decimal dilution followed by spread-plating on nutrient agar:\n\n**Step-by-Step Laboratory Assay:**\n1. **Sample Preparation and Initial Suspension (10^-1 dilution):**\n   - Aseptically weigh exactly 1.0 g of the Bt powder under a laminar airflow cabinet.\n   - Transfer into a sterile flask containing 99.0 ml of sterile physiological saline (0.85% NaCl) with 0.05% Tween-80 (to disperse clumped spores), yielding a 10^-2 suspension. Shake vigorously on a vortex mixer for 15 minutes.\n\n2. **Heat Shock Treatment:**\n   - To eliminate non-spore-forming vegetative contaminants and enumerate exclusively viable Bt endospores, place the suspension in a circulating water bath at 80°C for 10 minutes, followed by rapid cooling in ice water.\n\n3. **Serial Decimal Dilutions:**\n   - Prepare a series of test tubes with 9.0 ml of sterile distilled water labeled 10^-3 to 10^-8.\n   - Transfer 1.0 ml from the heat-shocked 10^-2 suspension into the 10^-3 tube and vortex. Repeat sequentially down to 10^-8 using a fresh sterile pipette tip at each transfer.\n\n4. **Plating and Incubation:**\n   - Pipette 0.1 ml aliquots from 10^-6, 10^-7, and 10^-8 dilutions onto duplicate sterile Nutrient Agar or Luria-Bertani (LB) agar plates.\n   - Spread the aliquot evenly across the agar using a sterile glass L-spreader (Drigalski spatula).\n   - Incubate plates inverted at 30°C for 24 to 36 hours.\n\n5. **Colony Counting and Calculation:**\n   - Select plates showing between 30 and 300 colonies. Identify characteristic Bt colonies (off-white, opaque, rough, rhizoid margins).\n   - Calculate CFU/g: CFU/g = (Average Number of Colonies x Dilution Factor) / Volume Plated (0.1 ml).\n   - Confirm the presence of parasporal crystals in counted colonies using phase-contrast microscopy or Coomassie brilliant blue staining.",
            "keyPoints": [
                "Suspend 1.0 g sample in 99 ml sterile saline with Tween-80 and vortex for dispersion.",
                "Heat shock at 80°C for 10 minutes to kill non-spore-forming vegetative contaminants.",
                "Perform serial 10-fold dilutions down to 10^-8 using sterile pipette tips.",
                "Spread 0.1 ml onto duplicate Nutrient Agar plates and incubate at 30°C for 24-36 h.",
                "Count plates with 30-300 colonies and calculate CFU/g using dilution factor formula."
            ],
            "maxMarks": 6,
            "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        },
        {
            "id": "ENT203-U2-SUB19",
            "type": "CASE_STUDY",
            "question": "A cabbage grower in Karnataka reports total failure of Bt subsp. kurstaki sprays against Plutella xylostella after two years of continuous weekly usage. Analyze the causes and propose an immediate corrective strategy.",
            "modelAnswer": "The failure of Bacillus thuringiensis subsp. kurstaki (Btk) sprays against Plutella xylostella (Diamondback moth, DBM) in intensively farmed cabbage represents a classic case of field-evolved resistance driven by extreme selection pressure.\n\n**Causal Analysis:**\n1. **High Selection Pressure:** Continuous weekly applications of Btk across multiple overlapping generations of DBM created immense directional selection. With a rapid lifecycle (14-21 days in tropical climates), resistance genes spread rapidly through the population.\n2. **Monogenic Receptor Modification:** Field resistance to Btk in P. xylostella is typically conferred by autosomal recessive mutations in the midgut cadherin gene or the ATP-binding cassette transporter family C2 (ABCC2) locus. These mutations eliminate or downregulate the primary midgut brush border membrane receptors that bind Cry1Ac and Cry1Ab, preventing oligomer insertion and pore formation.\n3. **Cross-Resistance Within Cry1 Class:** Because commercial Btk formulations rely heavily on Cry1Aa, Cry1Ab, and Cry1Ac, selection against one Cry1 protein frequently confers cross-resistance to other Cry1 toxins sharing identical Domain II receptor loops.\n\n**Immediate Corrective Strategy:**\n1. **Switch to B. thuringiensis subsp. aizawai (Bta):**\n   - Immediately substitute Btk with Bt subsp. aizawai formulations (e.g., Agree, Florbac).\n   - Bta produces Cry1Ca and Cry1Da toxins. Cry1C binds to completely independent midgut receptors that remain fully functional in Cry1Ac-resistant DBM, instantly breaking resistance.\n2. **Rotate with Distinct Modes of Action:**\n   - Implement strict chemical and biological rotation: alternate Bta with botanical biopesticides (NeemAzal / NSKE 5%), microbial spinosyns (spinosad), or anthranilic diamides (chlorantraniliprole).\n3. **Deploy Non-Chemical Cultural Measures:**\n   - Intercrop cabbage with mustard (Indian mustard, Brassica juncea) as a trap crop (2 rows of mustard for every 25 rows of cabbage). DBM preferentially oviposits on mustard, which can be sprayed or destroyed.\n   - Install sex pheromone traps (12 traps/ha) for mass monitoring and mating disruption.",
            "keyPoints": [
                "Causes: Extreme selection pressure from weekly Btk sprays selected for mutated ABCC2/cadherin receptors.",
                "Mechanism: Loss of Cry1Ac midgut binding conferred high-level cross-resistance across Cry1 toxins.",
                "Immediate Bio-Switch: Rotate to Bt subsp. aizawai expressing Cry1Ca/Cry1Da which bind alternate receptors.",
                "Integrated Rotation: Alternate with NSKE 5%, spinosad, or diamides to prevent selection.",
                "Cultural Controls: Implement Indian mustard trap cropping and pheromone monitoring."
            ],
            "maxMarks": 8,
            "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"
        },
        {
            "id": "ENT203-U2-SUB20",
            "type": "CASE_STUDY",
            "question": "A biofertilizer laboratory attempts commercial production of Beauveria bassiana using submerged liquid fermentation broth directly bottled for sale. Farmers report zero pest control. Diagnose the technical failure and prescribe the industrial remedy.",
            "modelAnswer": "The commercial failure of directly bottled submerged liquid fermentation broth of Beauveria bassiana stems from a fundamental misunderstanding of fungal physiology, dimorphism, and environmental stability:\n\n**Diagnostic Technical Failure:**\n1. **Blastospore Fragility vs. Aerial Conidia:**\n   - When Beauveria bassiana is grown in agitated submerged liquid bioreactors, it does not produce aerial conidia. Instead, it multiplies as thin-walled, single-celled, yeast-like **blastospores** and vegetative hyphal fragments.\n   - Blastospores naturally lack the robust, hydrophobic outer cell wall and melanized hydrophobin protective layers characteristic of aerial conidia. They are evolutionary adaptations for living inside insect hemolymph, not for surviving atmospheric conditions.\n2. **Rapid Photolytic and Desiccation Degradation:**\n   - When sprayed onto crop canopies, fragile blastospores undergo catastrophic dehydration within minutes under ambient humidity (<80%). Furthermore, lacking protective melanins and carotenoids, their DNA is destroyed by solar UV-B radiation within hours.\n3. **Anaerobic Autolysis in Bottles:**\n   - Fungi are obligate aerobes. Bottling active liquid broth in airtight plastic containers rapidly depletes dissolved oxygen. Within 1-2 weeks, blastospores suffocate, exhaust endogenous glycogen reserves, and undergo autolytic death, dropping the CFU count to zero.\n\n**Prescribed Industrial Remedy:**\n1. **Adopt Two-Stage Diphasic Fermentation:**\n   - Restrict the submerged liquid fermenter strictly to **Stage 1 (Seed Inoculum)** to mass-produce vegetative biomass within 48 to 72 hours.\n   - Use this liquid broth to inoculate **Stage 2: Solid-State Fermentation (SSF)** on moist, autoclaved cereal grains (broken parboiled rice or sorghum) inside aerated polypropylene filter-patch bags.\n2. **Induction of True Aerial Conidiogenesis:**\n   - On the solid grain-air interface, B. bassiana differentiates true aerial conidiophores and produces thick-walled, durable, hydrophobic aerial conidia containing high levels of protective trehalose and polyols.\n3. **Formulation and Packaging:**\n   - Air-dry harvested conidia under dehumidified air (<35°C) to <8% moisture.\n   - Formulate into talc-based Wettable Powder (WP) with sodium lignosulfonate dispersant or suspend in emulsified vegetable oil (Suspension Concentrate, SC). Pack in hermetic aluminum foil pouches to guarantee a verified 6-month shelf life of >1 x 10^8 CFU/g.",
            "keyPoints": [
                "Failure Cause: Submerged fermentation yields fragile, thin-walled blastospores rather than durable conidia.",
                "Vulnerabilities: Blastospores rapidly desiccate on leaves, suffer UV destruction, and autolyze in airtight bottles.",
                "Industrial Solution: Transition to a two-stage diphasic fermentation system.",
                "Solid Phase: Inoculate moist cereal grains with liquid broth to stimulate true aerial conidiation.",
                "Downstream: Dry to <8% moisture and formulate with talc or oil carriers in hermetic packaging."
            ],
            "maxMarks": 8,
            "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"
        }
    ]

    # 20 Flashcards
    flashcards = [
        {"id": "ENT203-U2-FC01", "front": "What are Delta-endotoxins in Bacillus thuringiensis?", "back": "Parasporal crystalline inclusion proteins (Cry/Cyt) synthesized during sporulation that cause colloid-osmotic lysis of midgut epithelial cells.", "hint": "Parasporal crystal proteins", "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"},
        {"id": "ENT203-U2-FC02", "front": "What are Vip toxins and when are they produced?", "back": "Vegetative Insecticidal Proteins secreted during the vegetative growth phase of Bt, binding distinct receptors without Cry cross-resistance.", "hint": "Secreted vegetative proteins", "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"},
        {"id": "ENT203-U2-FC03", "front": "Which Bt subspecies specifically targets mosquito and blackfly larvae?", "back": "Bacillus thuringiensis subsp. israelensis (Bti), containing Cry4A, Cry4B, Cry11A, and Cyt1A toxins.", "hint": "Bti", "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"},
        {"id": "ENT203-U2-FC04", "front": "Which Bt subspecies is effective against Cry1Ac-resistant diamondback moth?", "back": "Bacillus thuringiensis subsp. aizawai, which expresses Cry1C and Cry1D toxins that bind alternate receptors.", "hint": "Bt subsp. aizawai", "syllabusTopic": "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity"},
        {"id": "ENT203-U2-FC05", "front": "What midgut pH is necessary to dissolve Bt Cry protoxin crystals?", "back": "Hyper-alkaline pH (pH > 9.0 to 11.5), which dissolves disulfide cross-links in the crystal matrix.", "hint": "pH > 9.0", "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"},
        {"id": "ENT203-U2-FC06", "front": "What insect midgut enzymes cleave Bt protoxins into active 60-65 kDa core toxins?", "back": "Midgut serine proteases, predominantly trypsin-like and chymotrypsin-like endoproteases.", "hint": "Serine endoproteases", "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"},
        {"id": "ENT203-U2-FC07", "front": "What is the primary transmembrane receptor for Bt Cry1A toxins on microvillar membranes?", "back": "Cadherin-like transmembrane protein (CAD), which triggers toxin oligomerization into a pre-pore structure.", "hint": "Cadherin (CAD)", "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"},
        {"id": "ENT203-U2-FC08", "front": "What size lytic pores do inserted Bt Cry oligomers create in midgut membranes?", "back": "Non-specific cation-permeable pores of 1 to 2 nanometers (nm) in diameter.", "hint": "1-2 nm pores", "syllabusTopic": "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia"},
        {"id": "ENT203-U2-FC09", "front": "How do entomopathogenic fungi uniquely infect insect hosts compared to Bt?", "back": "They penetrate directly through the insect cuticular exoskeleton via germ tubes and enzymes without requiring ingestion.", "hint": "Direct cuticular penetration", "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"},
        {"id": "ENT203-U2-FC10", "front": "What disease does Beauveria bassiana cause and what does the cadaver look like?", "back": "White muscardine; mummified cadavers become enveloped in a dense chalky-white conidial bloom.", "hint": "White muscardine", "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"},
        {"id": "ENT203-U2-FC11", "front": "What specialized appressorial serine protease digests insect cuticular proteins?", "back": "Pr1 (a 30 kDa subtilisin-like chymoelastase endoprotease).", "hint": "Pr1 protease", "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"},
        {"id": "ENT203-U2-FC12", "front": "What antibiotic red pigment is produced by Beauveria bassiana in cadavers?", "back": "Oosporein, a dibenzoquinone antibiotic that inhibits competing saprophytic bacterial putrefaction.", "hint": "Oosporein", "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"},
        {"id": "ENT203-U2-FC13", "front": "What morphological form does Beauveria take inside the host hemolymph to evade immunity?", "back": "Dimorphic yeast-like blastospores (hyphal bodies) that lack thick beta-glucan walls.", "hint": "Budding blastospores", "syllabusTopic": "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum"},
        {"id": "ENT203-U2-FC14", "front": "What is the common name and primary pest niche of Metarhizium anisopliae?", "back": "Green muscardine fungus; adapted to soil environments targeting white grubs, root borers, and termites.", "hint": "Green muscardine / Soil pests", "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"},
        {"id": "ENT203-U2-FC15", "front": "What cyclic hexadepsipeptide toxins are produced by Metarhizium anisopliae?", "back": "Destruxins (A, B, and E), which disrupt calcium channels and paralyze muscular and Malpighian systems.", "hint": "Destruxins", "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"},
        {"id": "ENT203-U2-FC16", "front": "Which entomopathogenic fungus specializes in controlling sucking pests like whiteflies and scales?", "back": "Lecanicillium lecanii (formerly Verticillium lecanii), known as the white halo fungus.", "hint": "Lecanicillium lecanii", "syllabusTopic": "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control"},
        {"id": "ENT203-U2-FC17", "front": "Why is solid-state fermentation (SSF) preferred over liquid culture for fungal biopesticides?", "back": "SSF produces aerial conidia with thicker walls, higher hydrophobin content, and superior UV/thermal tolerance.", "hint": "Produces durable aerial conidia", "syllabusTopic": "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations"},
        {"id": "ENT203-U2-FC18", "front": "What is the statutory CIB&RC minimum viable count (CFU) for commercial powder biopesticides?", "back": "Minimum 1 x 10^8 Colony Forming Units (CFU) per gram.", "hint": "1 x 10^8 CFU/g", "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"},
        {"id": "ENT203-U2-FC19", "front": "What is the maximum allowable moisture content in commercial biopesticide wettable powders?", "back": "8.0% moisture content (w/w), preventing metabolic exhaustion and clumping.", "hint": "8.0% moisture", "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"},
        {"id": "ENT203-U2-FC20", "front": "What is the zero-tolerance biological contaminant rule under CIB&RC microbial guidelines?", "back": "Complete absence of human pathogens including Salmonella, Shigella, Vibrio cholerae, and pathogenic coliforms.", "hint": "Zero Salmonella, Shigella, Vibrio", "syllabusTopic": "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"}
    ]

    unit2_obj = {
        "unitNumber": 2,
        "title": "Microbial Biopesticides — Bacteria and Fungi",
        "shortDescription": "Bacillus thuringiensis endotoxins and mechanism of action, entomopathogenic fungi (Beauveria, Metarhizium, Lecanicillium), fermentation systems, and CIB&RC quality control standards.",
        "estimatedReadTimeMinutes": 28,
        "syllabusTopics": [
            "Bacillus thuringiensis (Bt) biology, Cry/Vip endotoxins, and spectrum of activity",
            "Bt mechanism of action: ingestion, midgut receptor binding, pore formation, and septicemia",
            "Entomopathogenic fungus Beauveria bassiana: infection cycle, cuticle penetration, and host spectrum",
            "Metarhizium anisopliae and Lecanicillium lecanii: biology, destruxins, and sucking/soil pest control",
            "Industrial production technologies: submerged vs solid-state fermentation (SSF) and formulations",
            "Quality control standards: CFU counts, viability testing, purity, and CIB&RC specifications"
        ],
        "notes": notes,
        "mcqs": mcqs,
        "subjectiveQuestions": subj_questions,
        "flashcards": flashcards
    }

    ts_content = f"""import {{ UnitContent }} from "./types";

export const unit2Content: UnitContent = {json.dumps(unit2_obj, indent=2)};
"""
    with open("/Users/quantum/Downloads/padho lpu/server/data/ent203/unit2.ts", "w") as f:
        f.write(ts_content)
    print("ENT203 Unit 2 generated successfully! MCQs:", len(mcqs), "Subj:", len(subj_questions), "FC:", len(flashcards))

if __name__ == "__main__":
    generate_u2()
