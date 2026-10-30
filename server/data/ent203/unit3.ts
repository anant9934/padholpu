import { UnitContent } from "./types";

export const unit3Content: UnitContent = {
  "unitNumber": 3,
  "title": "Microbial Biopesticides \u2014 Viruses and Nematodes",
  "shortDescription": "Baculovirus biology (NPV and GV), occlusion bodies, host liquefaction, in vivo HaNPV/SlNPV production, and entomopathogenic nematodes (Steinernema and Heterorhabditis) with mutualistic bacteria.",
  "estimatedReadTimeMinutes": 30,
  "syllabusTopics": [
    "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
    "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
    "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
    "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
    "EPN foraging strategies, in vivo/in vitro production methods, and field applications"
  ],
  "notes": {
    "learningObjectives": [
      "Characterize Baculoviridae morphology, differentiating Nucleopolyhedrovirus (NPV) polyhedra from Granulovirus (GV) granules.",
      "Trace the biphasic life cycle of baculoviruses: occlusion-derived virions (ODV) midgut invasion, budded virion (BV) systemic spread, and tissue liquefaction by viral chitinases and cathepsins.",
      "Master in vivo production protocols, standardization in Larval Equivalents (LE), and field deployment of HaNPV and SlNPV.",
      "Compare the mutualistic biology of Steinernematidae (Xenorhabdus) and Heterorhabditidae (Photorhabdus luminescens) entomopathogenic nematodes.",
      "Evaluate EPN foraging strategies (ambushers vs cruisers), in vivo White trap rearing, in vitro fermentation, and application technologies."
    ],
    "sections": [
      {
        "id": "sec-3-1",
        "heading": "1. Baculoviruses: Classification, Morphology, and Occlusion Bodies",
        "content": "Baculoviruses belong to the family Baculoviridae, comprising rod-shaped (bacilliform) viruses containing large, circular, supercoiled double-stranded DNA genomes (80 to 180 kbp). They are highly specialized obligate pathogens of arthropods, predominantly infecting the order Lepidoptera, with select species infecting Diptera and Hymenoptera (sawflies).\n\n**Taxonomic Classification and Occlusion Morphotypes:**\nThe family is divided into four genera based on genomic phylogeny and host range:\n1. **Alphabaculovirus:** Lepidopteran-specific Nucleopolyhedroviruses (NPVs).\n2. **Betabaculovirus:** Lepidopteran-specific Granuloviruses (GVs).\n3. **Gammabaculovirus:** Hymenopteran-specific NPVs.\n4. **Deltabaculovirus:** Dipteran-specific NPVs.\n\nBaculoviruses are characterized by their biphasic phenotype: they produce two distinct virion morphotypes during their replication cycle:\n- **Occlusion-Derived Virus (ODV):** Embedded within crystalline proteinaceous occlusion bodies (OBs), specialized for oral transmission and environmental survival between hosts.\n- **Budded Virus (BV):** Unoccluded virions that bud through the plasma membrane of infected host cells (acquiring a host-derived membrane envelope modified with the viral GP64 or F fusion glycoprotein), specialized for secondary systemic dissemination throughout the insect body tissues.\n\n**Structural Occlusion Bodies (Polyhedra vs Granules):**\n- **Nucleopolyhedrovirus (NPV):** Produces large (0.5 to 15 \u00b5m), multi-faceted polyhedral occlusion bodies (polyhedra) composed of the 31 kDa matrix protein **polyhedrin**. Polyhedra enclose multiple virions. Based on packaging, they are sub-classified into:\n  - *Multiple Nucleopolyhedrovirus (MNPV):* Multiple nucleocapsids (2 to 15) packaged within a single viral envelope (e.g., *Autographa californica* MNPV, *Spodoptera litura* NPV).\n  - *Single Nucleopolyhedrovirus (SNPV):* Exactly one nucleocapsid per envelope (e.g., *Helicoverpa armigera* SNPV).\n- **Granulovirus (GV):** Produces minute (0.3 to 0.5 \u00b5m), ovocylindrical proteinaceous capsules called granules or capsules, composed of the matrix protein **granulin**. Each granule normally encloses only a single virion containing a single nucleocapsid (e.g., *Plutella xylostella* GV, *Chilo infuscatellus* GV).",
        "subsections": []
      },
      {
        "id": "sec-3-2",
        "heading": "2. Baculovirus Pathogenic Cycle and Host Liquefaction",
        "content": "The pathogenesis of baculovirus infection represents a masterpiece of biochemical subversion unfolding over 4 to 8 days:\n\n1. **Ingestion and Dissolution:** Insect larvae consume foliage contaminated with polyhedra. In the alkaline midgut lumen (pH 10.0 to 11.5), the polyhedrin protein matrix dissolves rapidly, liberating the embedded Occlusion-Derived Virions (ODVs).\n\n2. **Primary Midgut Infection:** ODVs pass through the peritrophic matrix and fuse directly with the apical microvillar membrane of midgut epithelial cells. Nucleocapsids are translocated across the cytoplasm into the host nucleus via actin-based motility. In the nucleus, viral DNA uncoats, transcribing immediate-early and early viral genes.\n\n3. **Systemic Spread via Budded Viruses (BV):** Progeny nucleocapsids migrate to the cell periphery, acquire an envelope modified with viral fusion proteins (GP64/F), and bud through the basolateral membrane into the hemocoel and tracheal systems. BVs infect hemocytes, fat bodies, epidermis, and muscular tissues, driving massive secondary infection.\n\n4. **Very Late Phase and Occlusion Formation:** In the nuclei of infected fat body and epidermal cells, the virus transitions to very late gene expression, transcribing enormous quantities of polyhedrin protein under the control of the hyper-strong *polh* promoter. Billions of new polyhedra form within the infected nuclei.\n\n5. **Host Behavior Modification and Tissue Liquefaction:** Baculoviruses manipulate host behavior: infected larvae display negative geotaxis and positive phototaxis, migrating to the very apex of the plant canopy ('tree-top disease' or *Wipfelkrankheit*). Finally, the virus expresses two late structural hydrolytic enzymes: viral endochitinase (*v-chiA*) and a cysteine protease (*v-cath*). These enzymes cooperatively digest the host's internal organs and the chitinous basement membrane of the exoskeleton. The cuticle tears open ('melting disease'), and millions of polyhedra rain down upon the lower foliage, maximizing transmission to conspecific larvae.",
        "subsections": []
      },
      {
        "id": "sec-3-3",
        "heading": "3. In Vivo Production and Practical Use of HaNPV and SlNPV",
        "content": "Because baculoviruses are obligate intracellular pathogens, commercial production is executed primarily via *in vivo* mass culturing on laboratory-reared host larvae:\n\n**In Vivo Mass Rearing of Helicoverpa armigera NPV (HaNPV) and Spodoptera litura NPV (SlNPV):**\n- **Host Rearing:** Host larvae are reared synchronously on semi-synthetic artificial diets (based on chickpea flour/kabuli chana, yeast, vitamins, and antimicrobial agents) under sterile conditions at 26-28\u00b0C and 65-70% RH.\n- **Inoculation:** Early 4th-instar or early 5th-instar larvae are inoculated by diet surface contamination with a calibrated suspension of polyhedral inclusion bodies (typically 1 x 10^5 to 1 x 10^6 POBs/ml). Early instars succumb prematurely with low yield, whereas late instars maximize larval biomass and polyhedral yield.\n- **Incubation:** Inoculated larvae are incubated individually in compartmentalized multi-well trays for 5-7 days to prevent cannibalism. As larvae show systemic infection symptoms (sluggishness, pale chalky discoloration), but prior to complete cuticular rupture, moribund larvae are harvested.\n- **Downstream Processing:** Cadavers are homogenized in sterile distilled water containing 0.1% sodium dodecyl sulfate (SDS), filtered through multi-layered muslin cloth to eliminate coarse insect debris, and subjected to differential centrifugation (low-speed 500 g to pellet debris; high-speed 3000-4000 g to pellet polyhedra). The concentrated polyhedral paste is resuspended, quantified using a hemocytometer under phase-contrast optics, and standardized.\n\n**Standardization Units:**\n- Commercial formulations are standardized either by **POB count** (Polyhedral Occlusion Bodies/ml, typically 1 x 10^9 POB/ml) or in **Larval Equivalents (LE)**.\n- **Definition of Larval Equivalent:** 1 LE is defined as the biological potency equivalent to the viral harvest from one fully grown, infected 5th-instar larva, universally standardized in India as **6 x 10^9 POBs**.\n- Field Recommendation: Standard application rate is **250 to 500 LE/ha** (1.5 x 10^12 to 3.0 x 10^12 POB/ha) applied in late evening, blended with 0.1% teepol (wetting agent), 0.5% jaggery/crude sugar (phagostimulant), and 0.1% Tinopal/optical brightener (UV screen).",
        "subsections": []
      },
      {
        "id": "sec-3-4",
        "heading": "4. Entomopathogenic Nematodes (EPN): Symbiotic Biology and Life Cycle",
        "content": "Entomopathogenic Nematodes (EPN) are microscopic, unsegmented, soil-dwelling roundworms (phylum Nematoda, order Rhabditida) that possess mutualistic associations with lethal enterobacteria. They function as biological 'smart missiles' capable of actively searching for and killing subterranean and cryptic insect pests.\n\n**Taxonomic Groups and Bacterial Symbionts:**\n1. **Family Steinernematidae:** Genus *Steinernema* (*S. carpocapsae*, *S. glaseri*, *S. riobrave*, *S. feltiae*). Exclusively mutualistic with Gram-negative bacteria belonging to the genus *Xenorhabdus* (e.g., *Xenorhabdus nematophila*).\n2. **Family Heterorhabditidae:** Genus *Heterorhabditis* (*H. bacteriophora*, *H. indica*, *H. megidis*). Exclusively mutualistic with Gram-negative bioluminescent bacteria belonging to the genus *Photorhabdus* (e.g., *Photorhabdus luminescens*).\n\n**The Mutualistic Tripartite Symbiosis:**\n- The nematode provides protection, shelter, and active motility to the bacterium, transporting it from the external soil environment into the nutrient-rich host hemocoel.\n- The bacterium provides lethality, synthesizing potent insecticidal toxins that kill the insect within 24 to 48 hours, secreting broad-spectrum antibiotics that prevent secondary bacterial putrefaction, and enzymatically bioconverting host tissues into a digested nutrient soup upon which the nematode feeds and reproduces.\n\n**The Life Cycle and Pathology:**\n- The only free-living, soil-dwelling stage is the **Infective Juvenile (IJ)**, also known as the 3rd-stage dauer juvenile (J3). The IJ is enclosed in a protective second-stage cuticular sheath, possesses a closed mouth and anus, does not feed, and harbors 200 to 2,000 bacterial cells within a specialized intestinal pouch (in *Steinernema*) or throughout its gut lumen (in *Heterorhabditis*).\n- **Host Entry:** The IJ locates a host and enters through natural openings (mouth, anus, spiracles). Heterorhabditids also possess a specialized anterior cuticular tooth that allows mechanical scraping through thin intersegmental membranes.\n- **Bacterial Release:** Once in the hemolymph, the IJ sheds its sheath and regurgitates symbiotic bacteria into the insect hemocoel.\n- **Toxemia and Death:** The bacteria multiply rapidly, secreting high-molecular-weight insecticidal toxins (e.g., Makes Caterpillars Floppy - Mcf toxin, Toxin complexes Tc), proteases, and lipases. The host succumbs to overwhelming bacteremia and septicemic shock within 24 to 48 hours.\n- **Cadaver Pathology:**\n  - In *Heterorhabditis* infections: Cadavers turn distinct brick-red or reddish-purple and exhibit eerie green bioluminescence in the dark due to bacterial luciferase enzyme activity.\n  - In *Steinernema* infections: Cadavers turn dull ochre, yellowish-brown, or greyish-black, without bioluminescence.\n- **Reproduction:** In *Steinernema*, IJs develop into amphimictic males and females that mate to produce offspring. In *Heterorhabditis*, the colonizing IJ develops into a self-fertile protandric hermaphrodite (first generation), followed by amphimictic generations. Nematodes undergo 2 to 3 generations inside the cadaver.\n- **Emergence:** Within 10 to 14 days, as host nutrients become exhausted and bacterial metabolite cues shift, juvenile nematodes mature into millions of dauer IJs (100,000 to 500,000 IJs per cadaver). The IJs rupture through the cadaver cuticle and disperse into the surrounding soil searching for new hosts.",
        "subsections": []
      },
      {
        "id": "sec-3-5",
        "heading": "5. EPN Foraging Strategies, Mass Rearing, and Application",
        "content": "Understanding the behavioral ecology and bioengineering of EPNs is critical for operational efficacy:\n\n**Foraging Strategies (Ambusher vs. Cruiser Continuum):**\n- **Ambusher Strategy:** Nematodes stand erect on their tails on soil particles ('nictating') and leap or attach to passing mobile insect hosts at the soil surface. Characterized by low directional motility and high nictation frequency. Best exemplified by *Steinernema carpocapsae*. Highly effective against surface-active pests like armyworms, cutworms (*Agrotis ipsilon*), and webworms.\n- **Cruiser Strategy:** Nematodes do not nictate; instead, they move actively through soil pores, following carbon dioxide, temperature, and excretory chemical gradients over long distances (up to 90 cm). Best exemplified by *Heterorhabditis bacteriophora* and *Steinernema glaseri*. Highly effective against sedentary, subterranean pests like white grubs, root weevil grubs, and root borers.\n- **Intermediate / Cruiser-Ambusher:** *Steinernema feltiae* and *Heterorhabditis indica* exhibit flexible searching behavior based on soil moisture and pest cues.\n\n**Production Bioengineering:**\n1. **In Vivo Production (White Trap Method):** Utilizes greater wax moth larvae (*Galleria mellonella*). Larvae are exposed to IJs on moist filter paper in Petri dishes. Once mortality occurs (48 h), cadavers are placed on an inverted watch glass or Petri dish draped with filter paper resting in a water reservoir (the White trap). As new IJs emerge, they crawl down the moist paper into the water, where they are harvested, washed, and refrigerated.\n2. **In Vitro Solid Fermentation:** Nematodes and their symbiotic bacteria are cultivated together on polyurethane sponge cubes impregnated with nutrient homogenates (beef fat, egg yolk, yeast, soy flour) in aerated autoclavable bags, yielding 5 x 10^7 IJs/bag in 2-3 weeks.\n3. **In Vitro Submerged Liquid Fermentation:** The industrial pinnacle: large bioreactors (10,000 to 80,000 liters) cultivated diphasically. Symbiotic bacteria are cultured to stationary phase, followed by IJ inoculation. Bubble columns or internal draft-tube air-lift bioreactors are utilized because conventional mechanical impellers shear delicate nematode bodies.\n\n**Formulation and Storage:**\n- Formulated into water-dispersible granules (WDG), polyacrylamide gels, vermiculite, or moist polyether sponges. Stored at 5-10\u00b0C (shelf life 3 to 6 months) under humid, aerated conditions. *Steinernema carpocapsae* exhibits higher room-temperature storage stability than *Heterorhabditis* species.",
        "subsections": []
      }
    ],
    "keyTakeaways": [
      "Baculoviruses comprise Nucleopolyhedroviruses (NPVs) with polyhedral occlusion bodies and Granuloviruses (GVs) with single-virion granules.",
      "Baculoviruses express a biphasic phenotype: Occlusion-Derived Viruses (ODV) for oral infection and Budded Viruses (BV) for systemic spread.",
      "Host tissue liquefaction ('melting') is driven by viral endochitinase (v-chiA) and cathepsin protease (v-cath), accompanied by tree-top disease (negative geotaxis).",
      "Baculovirus field recommendations are standardized in Larval Equivalents (1 LE = 6 x 10^9 POBs; 250-500 LE/ha).",
      "Steinernema mutualistically harbors Xenorhabdus, while Heterorhabditis harbors bioluminescent Photorhabdus luminescens.",
      "EPN Infective Juveniles (IJs) locate insect hosts, regurgitate symbiotic bacteria, and cause fatal septicemia within 24-48 hours.",
      "Ambusher nematodes (S. carpocapsae) nictate to catch surface pests, while cruisers (H. bacteriophora) move through soil hunting subterranean grubs."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Baculoviruses can infect and mutate non-target beneficial insects like honeybees and parasitic wasps.",
        "reality": "Baculoviruses exhibit extreme phylogenetic specificity; they infect only specific target arthropod species or genera, having zero infectivity toward vertebrates, humans, bees, or parasitoids."
      },
      {
        "myth": "Entomopathogenic nematodes directly kill the insect host by consuming its tissues like a parasitic worm.",
        "reality": "The nematode itself does not directly kill the insect; it acts as a biological delivery vector for its lethal symbiotic bacterium (Xenorhabdus or Photorhabdus), which produces the fatal toxemia and septicemia."
      },
      {
        "myth": "EPNs can be sprayed through conventional high-pressure sprayers using fine-mesh nozzle filters.",
        "reality": "High pressure (>300 psi) and fine spray nozzles (especially filters <50 mesh) physically shear and kill living nematodes. Sprayers must operate below 200 psi with all fine filters removed."
      }
    ],
    "summary": "Baculoviruses (NPVs and GVs) and entomopathogenic nematodes (Steinernema and Heterorhabditis) represent premier biopesticides for lepidopteran and soil pests. Baculoviruses produce occlusion bodies (polyhedra and granules) that dissolve in alkaline midguts to release ODVs, followed by BV systemic spread and terminal liquefaction mediated by v-chiA chitinase and v-cath cathepsin. Standardized in Larval Equivalents (1 LE = 6x10^9 POBs), HaNPV and SlNPV provide targeted control against bollworms and cutworms. Concurrently, EPNs carry mutualistic bacterial weapons (Xenorhabdus and Photorhabdus) inside dauer infective juveniles (IJs). Cruising or ambushing IJs enter insect hosts, release bacteria to trigger fatal septicemia within 48 hours, and yield hundreds of thousands of progeny IJs from cadavers, offering sustainable, eco-friendly pest suppression."
  },
  "mcqs": [
    {
      "id": "ENT203-U3-MCQ01",
      "options": {
        "A": "Linear single-stranded RNA",
        "B": "Circular double-stranded DNA",
        "C": "Segmented double-stranded RNA",
        "D": "Single-stranded circular DNA"
      },
      "correctOption": "B",
      "explanation": "Baculoviruses possess large, circular, supercoiled double-stranded DNA (dsDNA) genomes ranging from 80 to 180 kbp.",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "What type of genome is characteristic of the family Baculoviridae?"
    },
    {
      "id": "ENT203-U3-MCQ02",
      "options": {
        "A": "Granulin",
        "B": "Polyhedrin",
        "C": "Tubulin",
        "D": "Collagen"
      },
      "correctOption": "B",
      "explanation": "The crystalline protein matrix that encloses virions in NPV polyhedra is composed of the 31 kDa protein polyhedrin.",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "What is the primary matrix protein that forms the multi-faceted occlusion bodies (polyhedra) in Nucleopolyhedrovirus (NPV)?"
    },
    {
      "id": "ENT203-U3-MCQ03",
      "options": {
        "A": "Polyhedrin",
        "B": "Granulin",
        "C": "Oosporein",
        "D": "Chitinase"
      },
      "correctOption": "B",
      "explanation": "Granulovirus occlusion bodies (granules or capsules) are formed primarily from the crystalline matrix protein granulin.",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "What is the primary matrix protein of Granulovirus (GV) occlusion capsules?"
    },
    {
      "id": "ENT203-U3-MCQ04",
      "options": {
        "A": "Larvae burrowing deep beneath plant roots",
        "B": "Infected larvae climbing to the topmost apical shoots of plants prior to death",
        "C": "Complete shedding of larval head capsules",
        "D": "Immediate spinning of oversized silk cocoons"
      },
      "correctOption": "B",
      "explanation": "Baculoviruses induce negative geotaxis/positive phototaxis, causing moribund larvae to climb to upper plant apices to maximize virus dispersal.",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "What clinical symptom exhibited by baculovirus-infected caterpillars is popularly termed 'tree-top disease' or Wipfelkrankheit?"
    },
    {
      "id": "ENT203-U3-MCQ05",
      "options": {
        "A": "Hard calcified petrification",
        "B": "Melting or liquefaction disease",
        "C": "Dry mummy formation",
        "D": "Gall proliferation"
      },
      "correctOption": "B",
      "explanation": "Viral chitinases and cathepsins digest the host tissues and cuticle from within, causing the caterpillar to liquefy and rupture ('melting disease').",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "What symptom describes the post-mortem disintegration of caterpillar bodies infected with baculoviruses?"
    },
    {
      "id": "ENT203-U3-MCQ06",
      "options": {
        "A": "1 x 10^6 POBs",
        "B": "6 x 10^9 POBs",
        "C": "1 x 10^12 POBs",
        "D": "5 x 10^4 POBs"
      },
      "correctOption": "B",
      "explanation": "One Larval Equivalent (1 LE) is standardized across Indian research institutions as 6 x 10^9 polyhedral inclusion bodies (POBs).",
      "difficulty": "Easy",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "In India, what standard number of Polyhedral Occlusion Bodies (POBs) is defined as one Larval Equivalent (1 LE)?"
    },
    {
      "id": "ENT203-U3-MCQ07",
      "options": {
        "A": "Helicoverpa armigera (Gram pod borer / Cotton bollworm)",
        "B": "Spodoptera litura (Tobacco caterpillar)",
        "C": "Plutella xylostella (Diamondback moth)",
        "D": "Scirpophaga incertulas (Yellow stem borer)"
      },
      "correctOption": "A",
      "explanation": "HaNPV is the specific Nucleopolyhedrovirus formulation developed to control Helicoverpa armigera in chickpea, pigeonpea, cotton, and tomato.",
      "difficulty": "Easy",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "Which agricultural pest is specifically controlled using HaNPV?"
    },
    {
      "id": "ENT203-U3-MCQ08",
      "options": {
        "A": "First-stage juvenile (J1)",
        "B": "Infective Juvenile (IJ or J3 dauer larva)",
        "C": "Adult amphimictic female",
        "D": "Gravid hermaphrodite"
      },
      "correctOption": "B",
      "explanation": "The 3rd-stage dauer juvenile, known as the Infective Juvenile (IJ), is the non-feeding, soil-persisting stage that seeks and infects hosts.",
      "difficulty": "Easy",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What is the only free-living, infective developmental stage of entomopathogenic nematodes found in the soil?"
    },
    {
      "id": "ENT203-U3-MCQ09",
      "options": {
        "A": "Photorhabdus luminescens",
        "B": "Xenorhabdus nematophila",
        "C": "Bacillus thuringiensis",
        "D": "Pseudomonas fluorescens"
      },
      "correctOption": "B",
      "explanation": "Nematodes of the genus Steinernema carry symbiotic bacteria belonging to the genus Xenorhabdus (e.g., Xenorhabdus nematophila).",
      "difficulty": "Easy",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "Which symbiotic bacterium is mutualistically associated with entomopathogenic nematodes of the genus Steinernema?"
    },
    {
      "id": "ENT203-U3-MCQ10",
      "options": {
        "A": "Xenorhabdus bovienii",
        "B": "Photorhabdus luminescens",
        "C": "Agrobacterium tumefaciens",
        "D": "Serratia marcescens"
      },
      "correctOption": "B",
      "explanation": "Heterorhabditis nematodes harbor the Gram-negative, bioluminescent bacterium Photorhabdus luminescens.",
      "difficulty": "Easy",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "Which symbiotic bacterium is mutualistically associated with nematodes of the genus Heterorhabditis?"
    },
    {
      "id": "ENT203-U3-MCQ11",
      "options": {
        "A": "Chalky white",
        "B": "Brick-red or reddish-purple (and bioluminescent in the dark)",
        "C": "Olive-green",
        "D": "Bright yellow"
      },
      "correctOption": "B",
      "explanation": "Photorhabdus produces anthraquinone pigments that turn the cadaver brick-red, alongside luciferase that causes eerie green bioluminescence in darkness.",
      "difficulty": "Easy",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What color do insect cadavers typically turn when killed by Heterorhabditis bacteriophora carrying Photorhabdus?"
    },
    {
      "id": "ENT203-U3-MCQ12",
      "options": {
        "A": "24 to 48 hours",
        "B": "2 to 3 weeks",
        "C": "6 to 8 weeks",
        "D": "Within 5 minutes"
      },
      "correctOption": "A",
      "explanation": "Once inside the hemolymph, regurgitated symbiotic bacteria multiply rapidly and secrete lethal toxins, causing septicemic death in 24 to 48 hours.",
      "difficulty": "Easy",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "How quickly do insect hosts typically die following entry of EPN infective juveniles into the hemolymph?"
    },
    {
      "id": "ENT203-U3-MCQ13",
      "options": {
        "A": "Berlese funnel",
        "B": "White trap",
        "C": "Soxhlet extractor",
        "D": "Kjeldahl digestion flask"
      },
      "correctOption": "B",
      "explanation": "The White trap (developed by G.F. White in 1927) utilizes an inverted watch glass draped with filter paper in water to harvest emerging IJs.",
      "difficulty": "Easy",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What is the name of the classic laboratory apparatus used to collect emerging EPN infective juveniles from infected insect cadavers?"
    },
    {
      "id": "ENT203-U3-MCQ14",
      "options": {
        "A": "Galleria mellonella (Greater wax moth larvae)",
        "B": "Apis mellifera (Honeybee workers)",
        "C": "Musca domestica (Housefly maggots)",
        "D": "Tribolium confusum (Flour beetle)"
      },
      "correctOption": "A",
      "explanation": "Larvae of the greater wax moth (Galleria mellonella) are standard in vivo hosts because of their large size, susceptibility, and ease of laboratory rearing.",
      "difficulty": "Easy",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Which laboratory host insect is universally utilized for the in vivo mass multiplication of entomopathogenic nematodes?"
    },
    {
      "id": "ENT203-U3-MCQ15",
      "options": {
        "A": "Budded Virus (BV)",
        "B": "Occlusion-Derived Virus (ODV)",
        "C": "Free viroid RNA",
        "D": "Bacteriophage T4"
      },
      "correctOption": "B",
      "explanation": "Occlusion-Derived Virions (ODVs) are embedded within crystalline polyhedrin or granulin matrices, conferring extreme environmental stability against desiccation.",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "Which virion form of baculoviruses is specialized for oral transmission and environmental survival between host generations?"
    },
    {
      "id": "ENT203-U3-MCQ16",
      "options": {
        "A": "Occlusion-Derived Virus (ODV)",
        "B": "Budded Virus (BV)",
        "C": "Polyhedral body",
        "D": "Protoxin inclusion"
      },
      "correctOption": "B",
      "explanation": "Budded Viruses (BVs) bud through the plasma membrane of infected midgut cells into the hemocoel, spreading infection to fat bodies, muscles, and epidermis.",
      "difficulty": "Easy",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "Which baculovirus virion form mediates rapid systemic infection throughout the insect tissues via the hemolymph and tracheae?"
    },
    {
      "id": "ENT203-U3-MCQ17",
      "options": {
        "A": "5 to 10 LE/ha",
        "B": "250 to 500 LE/ha",
        "C": "5,000 to 10,000 LE/ha",
        "D": "50,000 LE/ha"
      },
      "correctOption": "B",
      "explanation": "The standard field recommendation in India is 250 to 500 Larval Equivalents (LE) per hectare (equivalent to 1.5 x 10^12 to 3.0 x 10^12 POBs/ha).",
      "difficulty": "Easy",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "What is the recommended field dosage of HaNPV per hectare for suppressing Helicoverpa armigera in chickpea?"
    },
    {
      "id": "ENT203-U3-MCQ18",
      "options": {
        "A": "Cruiser strategy",
        "B": "Ambusher strategy",
        "C": "Sedentary endoparasitism",
        "D": "Chemotactic diving"
      },
      "correctOption": "B",
      "explanation": "Ambushers (such as Steinernema carpocapsae) stand erect on their tails on soil particles (nictation) and latch onto passing surface-dwelling insects.",
      "difficulty": "Easy",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Which behavioral hunting strategy is characterized by nematodes standing erect on their tails ('nictating') to jump onto mobile surface insects?"
    },
    {
      "id": "ENT203-U3-MCQ19",
      "options": {
        "A": "Steinernema carpocapsae",
        "B": "Heterorhabditis bacteriophora",
        "C": "Meloidogyne incognita",
        "D": "Heterodera avenae"
      },
      "correctOption": "B",
      "explanation": "Heterorhabditis bacteriophora is a cruiser that moves through soil gradients of carbon dioxide and temperature to find subterranean pests like white grubs.",
      "difficulty": "Easy",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Which EPN species is a classic 'cruiser' that actively navigates deep into soil pores to locate subterranean root grubs?"
    },
    {
      "id": "ENT203-U3-MCQ20",
      "options": {
        "A": "Nematodes cause corrosion of brass nozzles",
        "B": "Mechanical shear forces and sieve trapping physically crush and kill living nematodes",
        "C": "High pressure accelerates nematode reproduction in the tank",
        "D": "Nematodes react chemically with aluminum tanks"
      },
      "correctOption": "B",
      "explanation": "EPNs are living macroscopic animals (0.5-1.0 mm); high hydraulic shear and fine screen meshes (<50 mesh) physically damage and kill the nematodes.",
      "difficulty": "Easy",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Why should high pump pressures (>300 psi) and fine 100-mesh filters be avoided when spraying EPN formulations?"
    },
    {
      "id": "ENT203-U3-MCQ21",
      "options": {
        "A": "MNPV contains RNA while SNPV contains DNA",
        "B": "MNPV has multiple nucleocapsids enclosed within a single envelope, whereas SNPV has a single nucleocapsid per envelope",
        "C": "MNPV has multiple polyhedra per cell while SNPV has only one",
        "D": "MNPV infects plants while SNPV infects insects"
      },
      "correctOption": "B",
      "explanation": "Multiple Nucleopolyhedroviruses (MNPV) bundle 2 to 15 nucleocapsids within one viral membrane envelope, whereas Single NPVs (SNPV) possess one.",
      "difficulty": "Medium",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "What is the primary structural difference between an MNPV and an SNPV?"
    },
    {
      "id": "ENT203-U3-MCQ22",
      "options": {
        "A": "Viral endochitinase (v-chiA) and cysteine protease (v-cath)",
        "B": "DNA polymerase and reverse transcriptase",
        "C": "Amylase and cellulase",
        "D": "Acetylcholinesterase and lipase"
      },
      "correctOption": "A",
      "explanation": "Viral endochitinase (v-chiA) and cathepsin-like cysteine protease (v-cath) act synergistically to degrade host structural proteins and cuticular chitin.",
      "difficulty": "Medium",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "Which pair of viral late enzymes is directly responsible for the post-mortem liquefaction ('melting') of baculovirus-infected caterpillar cadavers?"
    },
    {
      "id": "ENT203-U3-MCQ23",
      "options": {
        "A": "GP64 envelope glycoprotein",
        "B": "Polyhedrin matrix protein",
        "C": "P74 per os infectivity factor",
        "D": "Hemagglutinin neuraminidase"
      },
      "correctOption": "A",
      "explanation": "GP64 is the primary low-pH activated envelope fusion glycoprotein of group I alphabaculoviruses that mediates endosomal entry into host cells.",
      "difficulty": "Medium",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "Which major envelope glycoprotein mediates cell-to-cell fusion and entry during secondary systemic infection by Budded Viruses (BV) in Autographa californica MNPV?"
    },
    {
      "id": "ENT203-U3-MCQ24",
      "options": {
        "A": "Enzymes that synthesize sucrose in the plant leaf",
        "B": "Essential surface proteins on ODVs required for binding and fusing with midgut microvillar membranes during oral infection",
        "C": "Pigments that absorb solar UV light",
        "D": "Proteins that induce diapause in adult moths"
      },
      "correctOption": "B",
      "explanation": "PIFs are conserved structural proteins on the ODV envelope that are indispensable for specific binding to and entry into midgut epithelial cells.",
      "difficulty": "Medium",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "What are 'Per Os Infectivity Factors' (PIFs, e.g., P74, PIF1, PIF2) in baculovirus occlusion-derived virions?"
    },
    {
      "id": "ENT203-U3-MCQ25",
      "options": {
        "A": "As a chemical preservative to inhibit bacterial fermentation",
        "B": "As a phagostimulant that stimulates caterpillars to feed voraciously on treated foliage",
        "C": "To neutralize alkaline water in the spray tank",
        "D": "To accelerate viral DNA replication inside the tank"
      },
      "correctOption": "B",
      "explanation": "Baculoviruses must be eaten to cause infection; adding jaggery or crude sugar acts as a potent gustatory phagostimulant, increasing ingestion of polyhedra.",
      "difficulty": "Medium",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "Why is crude jaggery or brown sugar (0.5%) added to field spray solutions of HaNPV or SlNPV?"
    },
    {
      "id": "ENT203-U3-MCQ26",
      "options": {
        "A": "Acts as a UV protectant shielding viral DNA and enhances peritrophic membrane permeability to virions",
        "B": "Directly poisons insect motor neurons",
        "C": "Kills non-target predatory mites",
        "D": "Prevents caterpillar eggs from hatching"
      },
      "correctOption": "A",
      "explanation": "Optical brighteners (stilbene derivatives like Tinopal) absorb UV-B radiation to prevent photolysis and bind peritrophic membrane chitin, increasing infection rates.",
      "difficulty": "Medium",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "What is the primary role of Tinopal or optical brighteners when tank-mixed with baculovirus formulations?"
    },
    {
      "id": "ENT203-U3-MCQ27",
      "options": {
        "A": "Early instars are completely immune to viral infection",
        "B": "Older instars possess massive larval biomass, yielding exponentially more polyhedra per larva before death",
        "C": "First instars cannot chew artificial diet",
        "D": "Older instars do not produce cathepsin enzymes"
      },
      "correctOption": "B",
      "explanation": "Early instars die quickly with minute polyhedral yield, whereas 4th/5th instars possess large fat body reserves, yielding 1 to 5 x 10^9 POBs per single cadaver.",
      "difficulty": "Medium",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "In the mass production of HaNPV, why are 4th or early 5th-instar larvae chosen for inoculation rather than 1st or 2nd-instar larvae?"
    },
    {
      "id": "ENT203-U3-MCQ28",
      "options": {
        "A": "They possess an anterior cuticular tooth that can mechanically scrape and rupture thin intersegmental cuticle",
        "B": "They dissolve the insect wing buds using acid",
        "C": "They are injected by parasitic braconid wasps",
        "D": "They enter exclusively through transovarial transmission"
      },
      "correctOption": "A",
      "explanation": "While both genera enter natural body openings, Heterorhabditis possesses an anterior dorsal tooth that mechanically punctures thin intersegmental membranes.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "How do Heterorhabditis infective juveniles uniquely gain entrance into insect hosts compared to Steinernema?"
    },
    {
      "id": "ENT203-U3-MCQ29",
      "options": {
        "A": "Obligate amphimixis (males and females required)",
        "B": "Protandric self-fertile hermaphroditism",
        "C": "Cyclic thelytokous parthenogenesis only",
        "D": "Asexual binary fission"
      },
      "correctOption": "B",
      "explanation": "A single colonizing IJ of Heterorhabditis develops into a self-fertile protandric hermaphrodite in the 1st generation, guaranteeing reproduction from a single nematode.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What is the reproductive mode of the first-generation adult nematodes of Heterorhabditis inside the host cadaver?"
    },
    {
      "id": "ENT203-U3-MCQ30",
      "options": {
        "A": "They are exclusively amphimictic in all generations, requiring both male and female nematodes to mate",
        "B": "They produce clones via budding",
        "C": "They are hermaphroditic in all generations",
        "D": "They do not reproduce inside insect cadavers"
      },
      "correctOption": "A",
      "explanation": "Steinernema species are dioecious/amphimictic in all generations; successful reproduction requires the entry and mating of at least one male and one female IJ.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "In contrast to Heterorhabditis, how do Steinernema nematodes reproduce inside the host insect?"
    },
    {
      "id": "ENT203-U3-MCQ31",
      "options": {
        "A": "Toxin complexes (Tc proteins: TcA, TcB, TcC) and Mcf (Makes Caterpillars Floppy) toxin",
        "B": "Cry1Ac endotoxin",
        "C": "Aflatoxin B1",
        "D": "Destruxin B"
      },
      "correctOption": "A",
      "explanation": "Photorhabdus secretes high-molecular-weight Toxin Complexes (Tc) and Mcf toxins that induce gut disintegration, hemocyte apoptosis, and flaccidity.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What broad-spectrum insecticidal toxin family is synthesized by Photorhabdus luminescens during infection?"
    },
    {
      "id": "ENT203-U3-MCQ32",
      "options": {
        "A": "The symbiotic bacteria secrete potent broad-spectrum antibiotics (such as xenorhabdins, nematophin, and stilbenes)",
        "B": "The cadaver completely dries into dust within 10 minutes",
        "C": "The nematode freezes the host body to -20\u00b0C",
        "D": "The soil pH drops to 1.0"
      },
      "correctOption": "A",
      "explanation": "Symbiotic bacteria produce powerful antibiotic metabolites (stilbenes, xenorhabdins, anthraquinones) that sterilize the cadaver against putrefactive competitors.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "Why do insect cadavers colonized by Xenorhabdus or Photorhabdus resist rotting by secondary saprophytic soil microbes?"
    },
    {
      "id": "ENT203-U3-MCQ33",
      "options": {
        "A": "It protects the dauer larva from desiccation, osmotic shock, and microbial antagonism in the soil",
        "B": "It functions as a parachute during aerial flight",
        "C": "It stores glucose for adult reproduction",
        "D": "It secretes pheromones to attract female moths"
      },
      "correctOption": "A",
      "explanation": "The retained J2 cuticle serves as an impermeable protective envelope that shields the non-feeding dauer IJ from soil desiccation, chemicals, and pathogens.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What is the primary physiological function of the second-stage cuticular sheath retained by the EPN infective juvenile (IJ)?"
    },
    {
      "id": "ENT203-U3-MCQ34",
      "options": {
        "A": "Heterorhabditis indica",
        "B": "Meloidogyne javanica",
        "C": "Aphelenchoides besseyi",
        "D": "Tylenchulus semipenetrans"
      },
      "correctOption": "A",
      "explanation": "Heterorhabditis indica is an indigenous, warm-adapted tropical EPN widely commercialized across India for biological suppression of white grubs and root borers.",
      "difficulty": "Medium",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Which of the following EPN species is widely commercialized to manage white grubs (Holotrichia serrata) in sugarcane and arecanut in India?"
    },
    {
      "id": "ENT203-U3-MCQ35",
      "options": {
        "A": "Rapid desiccation (lack of surface moisture) and solar UV radiation on the leaf canopy",
        "B": "Nematodes being eaten by caterpillars",
        "C": "Plant leaves absorbing the nematodes as nutrients",
        "D": "Nematodes transforming into plant parasites"
      },
      "correctOption": "A",
      "explanation": "Nematodes require a continuous film of water to move and survive; foliar droplets evaporate quickly, and direct sunlight (UV) kills them within minutes to hours.",
      "difficulty": "Medium",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What is the primary factor limiting the field efficacy of foliar applications of entomopathogenic nematodes?"
    },
    {
      "id": "ENT203-U3-MCQ36",
      "options": {
        "A": "Chilo infuscatellus Granulovirus (CiGV)",
        "B": "Helicoverpa armigera NPV",
        "C": "Plutella xylostella NPV",
        "D": "Spodoptera litura MNPV"
      },
      "correctOption": "A",
      "explanation": "Chilo infuscatellus Granulovirus (CiGV) is a betabaculovirus effectively deployed against the sugarcane early shoot borer in Tamil Nadu and Andhra Pradesh.",
      "difficulty": "Medium",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "Which Granulovirus is successfully utilized in southern India to manage the early shoot borer of sugarcane?"
    },
    {
      "id": "ENT203-U3-MCQ37",
      "options": {
        "A": "Using an Improved Neubauer Hemocytometer under phase-contrast optics at 400x magnification",
        "B": "Measuring electrical conductivity of the solution",
        "C": "Titrating against 0.1 N hydrochloric acid",
        "D": "Using a Brix sugar refractometer"
      },
      "correctOption": "A",
      "explanation": "Direct microscopic enumeration using an Improved Neubauer hemocytometer grid under high-power phase-contrast microscopy is the standard method for POB quantification.",
      "difficulty": "Medium",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "How are polyhedral occlusion bodies (POBs) counted and quantified in certified quality control laboratories?"
    },
    {
      "id": "ENT203-U3-MCQ38",
      "options": {
        "A": "Internal draft-tube air-lift bioreactor or bubble column fermenter",
        "B": "High-speed Rushton turbine impeller reactor (>1,000 rpm)",
        "C": "Hammer mill fermenter",
        "D": "Centrifugal cyclone fermenter"
      },
      "correctOption": "A",
      "explanation": "Air-lift and bubble column fermenters rely on gentle pneumatic aeration rather than mechanical impellers, eliminating shear damage to living nematodes.",
      "difficulty": "Medium",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What bioengineering bioreactor design is typically employed for large-scale liquid submerged production of EPNs to avoid shearing the worms?"
    },
    {
      "id": "ENT203-U3-MCQ39",
      "options": {
        "A": "Juvenile nematodes hatching internally inside the maternal uterus and consuming maternal tissues before emerging",
        "B": "Nematodes dying of cold shock",
        "C": "Bacterial symbionts killing the mother nematode",
        "D": "Adult females laying millions of eggs in the soil"
      },
      "correctOption": "A",
      "explanation": "Under nutrient deprivation, eggs hatch inside the mother's body, and the juvenile larvae consume the maternal tissue ('bagging' or endotokia matricida).",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "Which of the following describes the phenomenon of 'endotokia matricida' frequently observed in entomopathogenic nematodes?"
    },
    {
      "id": "ENT203-U3-MCQ40",
      "options": {
        "A": "Completely dry, parched soil (<5% moisture)",
        "B": "Moist soil near field capacity (capillary water films in soil pores)",
        "C": "Completely flooded and anaerobic standing water",
        "D": "Frozen permafrost soil"
      },
      "correctOption": "B",
      "explanation": "Nematodes move by undulating against soil particle surfaces within continuous capillary water films; flooded soil limits oxygen, while dry soil immobilizes them.",
      "difficulty": "Medium",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What is the optimal soil moisture condition for entomopathogenic nematodes to actively search and locate insect grubs?"
    },
    {
      "id": "ENT203-U3-MCQ41",
      "options": {
        "A": "It is one of the strongest eukaryotic transcriptional promoters known in molecular biology, driving massive protein expression in the very late phase",
        "B": "It prevents RNA transcription completely",
        "C": "It is an active bacterial plasmid sequence",
        "D": "It codes for insect flight muscle proteins"
      },
      "correctOption": "A",
      "explanation": "The polh promoter directs massive transcription of polyhedrin (up to 20% of total cellular protein), making baculovirus expression vectors famous in biotechnology.",
      "difficulty": "Medium",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "In baculovirus genetics, what is the significance of the 'polyhedrin promoter' (polh)?"
    },
    {
      "id": "ENT203-U3-MCQ42",
      "options": {
        "A": "24 hours",
        "B": "3 to 6 months",
        "C": "5 years",
        "D": "15 years"
      },
      "correctOption": "B",
      "explanation": "At refrigerated temperatures (5-10\u00b0C), metabolic consumption of lipid reserves slows, allowing formulated IJs to maintain high viability for 3 to 6 months.",
      "difficulty": "Medium",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What is the typical shelf life of formulated EPN products stored at 5 to 10\u00b0C under aerated conditions?"
    },
    {
      "id": "ENT203-U3-MCQ43",
      "options": {
        "A": "Because chickpea flowers close in the evening",
        "B": "To prevent rapid photo-inactivation of polyhedra by solar ultraviolet radiation and coincide with nocturnal caterpillar feeding",
        "C": "Because the virus is synthesized by moonlight",
        "D": "To avoid wetting honeybees during their night flight"
      },
      "correctOption": "B",
      "explanation": "Solar UV-B inactivates viral DNA within hours. Late afternoon/evening spraying gives polyhedra 12 hours of UV-free exposure while larvae feed actively at night.",
      "difficulty": "Medium",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "Why is late evening application strongly advocated for spraying HaNPV in chickpea?"
    },
    {
      "id": "ENT203-U3-MCQ44",
      "options": {
        "A": "Steinernema feltiae",
        "B": "Steinernema carpocapsae",
        "C": "Heterorhabditis bacteriophora",
        "D": "Bursaphelenchus xylophilus"
      },
      "correctOption": "A",
      "explanation": "Steinernema feltiae is an intermediate forager, adapting its behavior between cruising and nictating/ambushing depending on pest depth and environmental cues.",
      "difficulty": "Medium",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Which of the following EPN species displays an intermediate foraging strategy (exhibiting both ambushing and cruising tendencies)?"
    },
    {
      "id": "ENT203-U3-MCQ45",
      "options": {
        "A": "Steinernema cadavers turn ochre or dark greyish-brown without bioluminescence, whereas Heterorhabditis cadavers turn red and glow in the dark",
        "B": "Steinernema cadavers turn bright green with white powder",
        "C": "Steinernema cadavers burst into flames",
        "D": "Heterorhabditis cadavers remain alive indefinitely"
      },
      "correctOption": "A",
      "explanation": "Steinernema with Xenorhabdus produces ochre-brown non-luminescent cadavers, while Heterorhabditis with Photorhabdus produces red luminescent cadavers.",
      "difficulty": "Medium",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "Which symptom distinguishes an insect killed by Steinernema carpocapsae from one killed by Heterorhabditis bacteriophora?"
    },
    {
      "id": "ENT203-U3-MCQ46",
      "options": {
        "A": "It transfers glucose to active host ecdysone, inactivating the molting hormone and arresting host development to prevent larval pupation during viral replication",
        "B": "It accelerates larval molting so the cuticle sheds before infection",
        "C": "It synthesizes chitin for the viral capsid",
        "D": "It dissolves the host nucleus"
      },
      "correctOption": "A",
      "explanation": "The egt gene encodes an enzyme that conjugates UDP-glucose or galactose to ecdysteroids, inactivating them and blocking larval molting/pupation.",
      "difficulty": "Hard",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "What is the biochemical function of the viral ecdysteroid UDP-glucosyltransferase (egt) gene encoded by many baculoviruses?"
    },
    {
      "id": "ENT203-U3-MCQ47",
      "options": {
        "A": "It forms an electron-dense surface carbohydrate-protein membrane around the polyhedron that seals the matrix and provides structural integrity and resistance to mechanical degradation",
        "B": "It acts as the primary receptor for insect gut binding",
        "C": "It transcribes the viral dsDNA inside the nucleus",
        "D": "It functions as an intracellular RNA silencing suppressor"
      },
      "correctOption": "A",
      "explanation": "The calyx/polyhedral envelope (composed of PEP) coats the exterior of the polyhedral body, preventing premature shedding of virions and protecting against physical shear.",
      "difficulty": "Hard",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "In the structural assembly of baculovirus occlusion bodies, what is the role of the polyhedral envelope/calyx protein (PEP)?"
    },
    {
      "id": "ENT203-U3-MCQ48",
      "options": {
        "A": "By encoding specific anti-apoptotic proteins such as p35 (caspase inhibitor) or IAP (Inhibitor of Apoptosis) proteins",
        "B": "By degrading the entire host mitochondrial genome instantly",
        "C": "By converting all cellular ATP into cyclic AMP",
        "D": "By hyper-methylating insect histones"
      },
      "correctOption": "A",
      "explanation": "Baculoviruses encode apoptosis suppressors: P35 acts as a suicide substrate that stoichiometrically inhibits initiator and effector caspases, while IAPs block caspase activation.",
      "difficulty": "Hard",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "How do baculoviruses overcome host cellular apoptosis upon early viral gene expression?"
    },
    {
      "id": "ENT203-U3-MCQ49",
      "options": {
        "A": "Reversible DNA inversions or promoter switching leading to Phase I (primary form with antibiotic/toxin production and nematode retention) vs Phase II (secondary form lacking antibiotics and poorly supporting nematode reproduction)",
        "B": "Mutation from Gram-negative to Gram-positive cell wall structure",
        "C": "Loss of cellular flagella in response to sunlight",
        "D": "Transformation into endospore-forming bacteria"
      },
      "correctOption": "A",
      "explanation": "Phase variation involves phenotypic switching between Phase I (dye-absorbing, antibiotic-producing, optimal for nematodes) and Phase II (defective, non-pigmented).",
      "difficulty": "Hard",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What is the molecular mechanism underlying the 'phase variation' phenomenon in symbiotic Xenorhabdus and Photorhabdus bacteria?"
    },
    {
      "id": "ENT203-U3-MCQ50",
      "options": {
        "A": "It curls its body into an elastomeric loop (forming a 'p' shape) and snaps its cuticular surface tension to propel itself several body lengths through the air",
        "B": "It possesses microscopic thoracic prolegs with crochets",
        "C": "It expels high-pressure jet streams of water from its excretory pore",
        "D": "It utilizes symbiotic bacterial flagella as external propulsion motors"
      },
      "correctOption": "A",
      "explanation": "S. carpocapsae forms a kink or loop with its body, building elastic mechanical stress in its cuticle before releasing surface tension to fling itself toward a host.",
      "difficulty": "Hard",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What specific morphological adaptation in Steinernema carpocapsae allows the dauer infective juvenile to execute jumping/nictating maneuvers?"
    },
    {
      "id": "ENT203-U3-MCQ51",
      "options": {
        "A": "By injecting anti-phagocytic effector proteins via a Type III Secretion System (T3SS) and secreting lipase inhibitors that halt hemocyte spreading",
        "B": "By causing instant precipitation of all hemolymph water into ice crystals",
        "C": "By coating the insect heart in crystalline sulfur",
        "D": "By binding juvenile hormone to epicuticular hydrocarbons"
      },
      "correctOption": "A",
      "explanation": "Photorhabdus deploys a functional T3SS to inject toxins (like LopT) into hemocytes, causing actin depolymerization, preventing phagocytosis, and inducing hemocyte apoptosis.",
      "difficulty": "Hard",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "How does Photorhabdus luminescens suppress the insect host's cellular encapsulation response within minutes of entering the hemocoel?"
    },
    {
      "id": "ENT203-U3-MCQ52",
      "options": {
        "A": "Photorhabdus must first be cultured to late logarithmic/stationary phase to establish optimal nutrient bioconversion and antibiotic titers before nematode IJs are introduced",
        "B": "Nematodes eat the bioreactor walls if introduced first",
        "C": "Bacteria die if nematodes are present during inoculation",
        "D": "To prevent the production of dissolved oxygen"
      },
      "correctOption": "A",
      "explanation": "Nematodes are obligate bacterivores that require pre-digested nutrients and Phase I Photorhabdus biomass; bacteria are cultured first for 24-48 h before IJ seeding.",
      "difficulty": "Hard",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "In the in vitro industrial liquid culture of Heterorhabditis, why is the process carried out as a strict two-stage monoxenic fermentation?"
    },
    {
      "id": "ENT203-U3-MCQ53",
      "options": {
        "A": "Polyhedrin molecules are packed into a body-centered cubic crystalline lattice held by salt bridges and intermolecular disulfide bonds that deprotonate and collapse at pH > 10.0",
        "B": "They are composed of lipid bilayers that dissolve in bile salts",
        "C": "They are held together by covalent diamond carbon bonds",
        "D": "They contain cellulose microfibrils cleaved by insect cellulase"
      },
      "correctOption": "A",
      "explanation": "The crystalline lattice of polyhedrin is stabilized by extensive salt bridges and tyrosine/cysteine interactions that rapidly ionize and disintegrate under hyper-alkaline conditions.",
      "difficulty": "Hard",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionText": "What is the structural basis for the alkaline sensitivity of polyhedrin and granulin occlusion body matrices in insect guts?"
    },
    {
      "id": "ENT203-U3-MCQ54",
      "options": {
        "A": "Protein tyrosine phosphatase (ptp) and ecdysteroid UDP-glucosyltransferase (egt)",
        "B": "Reverse transcriptase gene",
        "C": "Nitrogenase reductase gene",
        "D": "Heat shock 70 gene"
      },
      "correctOption": "A",
      "explanation": "The viral ptp gene and egt gene coordinate altered phototactic and negative geotactic behavior, forcing moribund caterpillars to ascend the host plant canopy.",
      "difficulty": "Hard",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "Which specific gene in baculoviruses is responsible for manipulating host caterpillar behavior to climb to the plant canopy before death?"
    },
    {
      "id": "ENT203-U3-MCQ55",
      "options": {
        "A": "A dedicated pouch located in the anterior ventricular region of the intestine that exclusively maintains and nourishes symbiotic Xenorhabdus cells in a monoculture",
        "B": "An organ that stores starch granules for winter survival",
        "C": "A poison gland that injects neurotoxins through the stylet",
        "D": "A sensory organ that detects geomagnetic north"
      },
      "correctOption": "A",
      "explanation": "Steinernematid IJs possess a specialized, modified anterior intestinal pouch (receptacle) that retains a pure monoculture of Xenorhabdus symbionts during the non-feeding dauer phase.",
      "difficulty": "Hard",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionText": "What is the function of the specialized intestinal vesicle ('bacterial receptacle') in Steinernema carpocapsae infective juveniles?"
    },
    {
      "id": "ENT203-U3-MCQ56",
      "options": {
        "A": "Sandy loam soils with pore diameters >30 \u00b5m permit rapid nematode sinusoidal undulation and oxygen diffusion, whereas heavy compact clays restrict motility and induce asphyxiation",
        "B": "Sandy soils absorb all nematode moisture instantly",
        "C": "Clay soils convert nematodes into root parasites",
        "D": "Sandy soils neutralize symbiotic bacterial toxins"
      },
      "correctOption": "A",
      "explanation": "Nematode locomotion requires soil pore sizes matched to nematode diameter (typically >30 \u00b5m). Sandy and light soils promote cruising, whereas dense clay restricts movement.",
      "difficulty": "Hard",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "Why does soil texture profoundly influence the biocontrol efficacy of Heterorhabditis and Steinernema species?"
    },
    {
      "id": "ENT203-U3-MCQ57",
      "options": {
        "A": "P74 is an essential per os infectivity factor (PIF) that forms a core complex on the ODV envelope required to recognize and bind the midgut microvillar membrane",
        "B": "P74 synthesizes the viral polyhedral envelope",
        "C": "P74 hydrolyzes host fat bodies for energy",
        "D": "P74 suppresses insect juvenile hormone synthesis"
      },
      "correctOption": "A",
      "explanation": "Deletion of p74 completely abolishes oral infectivity of ODVs in caterpillars while having zero effect on the infectivity of budded viruses in cell culture.",
      "difficulty": "Hard",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionText": "What is the primary role of the baculovirus p74 gene in establishing primary infection in host midguts?"
    },
    {
      "id": "ENT203-U3-MCQ58",
      "options": {
        "A": "It specifically targets and infects mole crickets (Scapteriscus spp.) using aggressive host-specific cruising cues",
        "B": "It only infects aquatic mosquito larvae",
        "C": "It infects aphids on foliar canopies",
        "D": "It parasitizes predatory ladybird beetles"
      },
      "correctOption": "A",
      "explanation": "Steinernema scapterisci is an evolved behavioral specialist that hunts and infects subterranean mole crickets, widely used in turf and pasture management.",
      "difficulty": "Hard",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "How does the nematode Steinernema scapterisci specifically specialize in biological pest suppression compared to S. carpocapsae?"
    },
    {
      "id": "ENT203-U3-MCQ59",
      "options": {
        "A": "A reversible physiological state of arrested metabolic dormancy induced by controlled water removal, extending product room-temperature shelf life",
        "B": "Complete genetic mutation of nematode chromosomes",
        "C": "The irreversible crystallization of nematode intestines",
        "D": "A sexual mating phase induced by pheromones"
      },
      "correctOption": "A",
      "explanation": "Anhydrobiosis is a quiescent state where nematodes tolerate severe dehydration by accumulating trehalose and glycerol, halting metabolic decay during storage.",
      "difficulty": "Hard",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionText": "What is the role of anhydrobiosis in formulated entomopathogenic nematodes?"
    },
    {
      "id": "ENT203-U3-MCQ60",
      "options": {
        "A": "Low speed pellets coarse insect cuticular debris, head capsules, and unconsumed diet, while leaving viral polyhedra suspended in the supernatant",
        "B": "Low speed kills competing bacterial contaminants",
        "C": "Low speed breaks open polyhedral crystals",
        "D": "Low speed precipitates viral DNA"
      },
      "correctOption": "A",
      "explanation": "Low speed (500 g) sedimentation separates heavy insect tissue debris from the supernatant containing polyhedra, which are subsequently pelleted at 3000-4000 g.",
      "difficulty": "Hard",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionText": "In differential centrifugation of harvested baculovirus larval homogenate, why is a low-speed centrifugation (500 g for 5 minutes) conducted prior to high-speed pelleting (3500 g)?"
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "ENT203-U3-SUB01",
      "modelAnswer": "A Polyhedral Occlusion Body (POB), or polyhedron, is a microscopic, multi-faceted crystalline protein inclusion body synthesized in the nuclei of insect cells during the late and very late phases of Nucleopolyhedrovirus (NPV) replication. Ranging from 0.5 to 15 \u00b5m in diameter, polyhedra consist of an organized crystalline lattice of the 31 kDa matrix protein polyhedrin, enveloped by an electron-dense carbohydrate-protein calyx. Polyhedra enclose and hermetically seal dozens to hundreds of Occlusion-Derived Virions (ODVs), protecting the encapsulated viral dsDNA against mechanical abrasion, enzymatic degradation, and environmental desiccation between host generations.\n\nA Larval Equivalent (LE) is a biological potency and volumetric standardization unit utilized in India for quantifying baculovirus formulations. It is defined as the biological insecticidal potency equivalent to the total viral yield harvested from a single, fully developed, moribund 5th-instar host caterpillar. Under standardized Indian Council of Agricultural Research (ICAR) guidelines, 1 LE is universally calibrated to contain exactly 6 x 10^9 Polyhedral Occlusion Bodies (6 x 10^9 POBs). Recommended field doses for crop protection are typically expressed as 250 to 500 LE/ha.",
      "maxMarks": 4,
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionType": "DEFINITION",
      "questionText": "Define 'Polyhedral Occlusion Body' (POB) and 'Larval Equivalent' (LE).",
      "outlinePoints": [
        "POB is a crystalline polyhedrin matrix enclosing Occlusion-Derived Virions (ODVs).",
        "Protects viral genome from environmental degradation and desiccation.",
        "Larval Equivalent (LE) represents the average viral harvest from one infected 5th-instar larva.",
        "1 LE is standardized as 6 x 10^9 POBs under ICAR/CIB&RC specifications."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB02",
      "modelAnswer": "An Entomopathogenic Nematode (EPN) is an unsegmented, microscopic, soil-inhabiting roundworm belonging to the phylum Nematoda (families Steinernematidae and Heterorhabditidae) that lives in an obligate mutualistic association with lethal insecticidal enterobacteria (Xenorhabdus and Photorhabdus spp.). Functioning as biological delivery vectors, EPNs actively seek out, penetrate, and kill susceptible soil-dwelling or cryptic insect hosts within 24 to 48 hours through bacterial toxemia and septicemia, completing 2 to 3 reproductive generations within the host cadaver.\n\nThe Infective Juvenile (IJ), also termed the dauer juvenile or third-stage juvenile (J3), is the sole free-living, non-feeding, morphologically and physiologically specialized developmental stage of EPNs that survives in the external soil ecosystem. Enclosed within the retained cuticular sheath of the second molt (J2), the IJ possesses a closed stoma (mouth) and anus, carries a pure monoculture of mutualistic bacteria within its intestinal receptacle, and exhibits specialized host-seeking behaviors (cruising or ambushing) to locate new insect hosts.",
      "maxMarks": 4,
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionType": "DEFINITION",
      "questionText": "Define 'Entomopathogenic Nematode' (EPN) and 'Infective Juvenile' (IJ).",
      "outlinePoints": [
        "EPNs are soil nematodes mutualistically carrying lethal bacteria (Xenorhabdus/Photorhabdus).",
        "Function as vectors causing fatal septicemia within 24 to 48 hours.",
        "IJ (dauer J3) is the only free-living, non-feeding soil stage.",
        "Retains protective J2 cuticle sheath and harbors symbiotic bacteria in gut.",
        "Specialized for host seeking and environmental persistence."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB03",
      "modelAnswer": "'Tree-Top Disease' (scientifically termed *Wipfelkrankheit*) refers to a remarkable behavioral modification induced by baculoviruses in infected lepidopteran caterpillars during terminal stages of infection. Governed by viral genes such as protein tyrosine phosphatase (ptp) and ecdysteroid UDP-glucosyltransferase (egt), the virus alters host phototaxis and geotaxis, compelling moribund larvae to cease feeding, ascend the host plant against gravity, and firmly clasp onto the topmost apical leaves, shoots, or flower heads prior to death.\n\n'Melting Disease' describes the post-mortem physical disintegration and liquefaction of baculovirus-killed caterpillar cadavers. Upon host death, two late-expressed viral structural enzymes\u2014viral endochitinase (v-chiA) and cathepsin-like cysteine protease (v-cath)\u2014cooperatively digest the host's internal visceral organs, muscular tissues, and the chitinous basement membrane of the integument. As a result, the fragile cuticle ruptures under minimal disturbance, releasing millions of infectious polyhedral occlusion bodies in a brown fluid that cascades down the lower foliage, maximizing viral dispersal to other foraging larvae.",
      "maxMarks": 4,
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionType": "DEFINITION",
      "questionText": "Define 'Tree-Top Disease' (Wipfelkrankheit) and 'Melting Disease' in baculovirus-infected insects.",
      "outlinePoints": [
        "Tree-top disease: Viral manipulation forcing moribund caterpillars to climb to plant apices.",
        "Governed by viral ptp and egt genes altering geotaxis and phototaxis.",
        "Melting disease: Post-mortem tissue liquefaction and cuticular rupture.",
        "Driven by viral endochitinase (v-chiA) and cysteine protease (v-cath).",
        "Ruptured cadavers rain infectious polyhedra down upon lower foliage."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB04",
      "modelAnswer": "Baculoviruses are unique among animal viruses because they produce two structurally and functionally distinct virion phenotypes during their replication cycle, each adapted to a specific mode of transmission:\n\n1. **Occlusion-Derived Virus (ODV):**\n   - Morphology: Virions are packaged inside crystalline protein inclusion bodies (polyhedra in NPV; granules in GV). The ODV envelope is acquired from the inner nuclear membrane and contains specialized Per Os Infectivity Factors (PIFs).\n   - Function: Specialized exclusively for primary oral infection and environmental persistence. It survives outside the host for months. When ingested, the polyhedral matrix dissolves in the alkaline midgut, liberating ODVs that specifically fuse with the microvillar brush border membrane of midgut epithelial cells.\n\n2. **Budded Virus (BV):**\n   - Morphology: Unoccluded, single nucleocapsids that migrate to the plasma membrane and bud outwards into the hemocoel, acquiring an envelope derived from the host plasma membrane enriched with viral fusion glycoproteins (e.g., GP64 or F protein).\n   - Function: Specialized for secondary systemic infection. BVs circulate through the hemolymph and enter tracheal cells, fat body, hemocytes, and muscles via low-pH receptor-mediated endocytosis, rapidly transmitting infection throughout all insect organ systems.",
      "maxMarks": 6,
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionType": "SHORT_ANSWER",
      "questionText": "Explain the biphasic life cycle of baculoviruses, highlighting the roles of ODV and BV.",
      "outlinePoints": [
        "ODV: Occluded inside polyhedrin; specialized for oral midgut infection and environmental stability.",
        "ODV envelope contains PIFs essential for midgut epithelial binding.",
        "BV: Unoccluded virions budding from plasma membrane with GP64 fusion proteins.",
        "BV mediates rapid secondary systemic spread via hemolymph and tracheal systems."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB05",
      "modelAnswer": "Because baculoviruses cannot replicate in synthetic media, commercial production relies on synchronous in vivo mass culturing in living host larvae:\n\n1. **Host Insect Maintenance:** Larvae of Helicoverpa armigera are reared on chickpea-based semi-synthetic diet under sterile conditions at 26-28\u00b0C, 65-70% RH, and a 14:10 h photoperiod.\n2. **Diet Inoculation:** Synchronized early 5th-instar larvae (weight ~150-200 mg) are selected. Standardized HaNPV inoculum (1 x 10^6 POBs/ml) is spread uniformly over the diet surface using an automated dispenser or micropipette.\n3. **Individual Rearing:** Because H. armigera larvae are fiercely cannibalistic, inoculated caterpillars must be placed individually into 24-well cellular culture trays or compartmentalized plastic rearing blocks supplied with fresh diet.\n4. **Incubation and Monitoring:** Trays are incubated at 26-28\u00b0C for 5 to 7 days. As infection progresses, larvae turn sluggish and develop a characteristic chalky, pale yellowish ventral appearance.\n5. **Harvesting:** Moribund larvae showing advanced symptoms are harvested just prior to complete cuticular rupture. Cadavers are collected into chilled containers.\n6. **Downstream Purification:** Cadavers are homogenized in sterile water containing 0.1% SDS, filtered through multi-layered muslin cloth to eliminate coarse debris, and purified by differential centrifugation (500 g for 5 min to discard debris; 3500 g for 15 min to pellet polyhedra). Polyhedra are quantified with a hemocytometer and standardized to 1 x 10^9 POBs/ml or packaged as 250 LE containers.",
      "maxMarks": 6,
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionType": "SHORT_ANSWER",
      "questionText": "Describe the in vivo mass production procedure of Helicoverpa armigera NPV (HaNPV).",
      "outlinePoints": [
        "Host reared on semi-synthetic chickpea diet at 26-28\u00b0C.",
        "Early 5th-instar larvae inoculated with calibrated 10^6 POB/ml suspension.",
        "Individual rearing in compartmentalized trays prevents cannibalism.",
        "Harvest moribund caterpillars at 5-7 days prior to cuticular melting.",
        "Differential centrifugation purifies polyhedra; standardized to 6 x 10^9 POB/LE."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB06",
      "modelAnswer": "The association between Heterorhabditis bacteriophora nematodes and Photorhabdus luminescens bacteria is a quintessential obligate mutualism wherein neither partner can successfully reproduce or survive in nature without the other:\n\n1. **Benefits Provided by the Nematode to the Bacterium:**\n   - *Transport and Protection:* Photorhabdus is an unencapsulated, desiccation-sensitive bacterium incapable of surviving independently in soil. The nematode serves as a mobile biological vector, sheltering the bacteria within its gut lumen and transporting them through soil pores into living host insects.\n   - *Host Entry:* The nematode actively breaches the insect's protective barriers (via spiracles, mouth, or dorsal cuticular tooth), delivering the bacterial payload directly into the nutritious hemocoel.\n\n2. **Benefits Provided by the Bacterium to the Nematode:**\n   - *Host Lethality (Biopesticide Action):* The bacterium synthesizes high-molecular-weight insecticidal toxins (Tc toxins, Mcf toxin) and hydrolytic enzymes that rapidly kill the insect within 24-48 hours.\n   - *Nutrient Processing:* Photorhabdus bioconverts host tissues, hemolymph, and fat bodies into an easily digestible nutrient soup that supports nematode development and reproduction across 2-3 generations.\n   - *Cadaver Sterilization:* The bacterium produces powerful stilbene antibiotics and anthraquinones that suppress putrefying soil bacteria and scavengers, preserving the cadaver exclusively for the reproducing nematodes.\n   - *Reproductive Signaling:* Specific bacterial metabolite cues trigger juvenile nematode maturation and packaging of bacterial cells into newly differentiated infective juveniles.",
      "maxMarks": 6,
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionType": "SHORT_ANSWER",
      "questionText": "Explain the mutualistic relationship between Heterorhabditis nematodes and Photorhabdus luminescens bacteria.",
      "outlinePoints": [
        "Obligate mutualism: neither partner survives independently in soil environments.",
        "Nematode vectors and protects bacteria in its gut, breaching host integuments.",
        "Bacterium produces Tc/Mcf toxins killing insect within 24-48 hours.",
        "Bacterium digests host tissues into nutrient broth for nematode development.",
        "Secretes stilbene antibiotics to prevent cadaver putrefaction by saprophytes."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB07",
      "modelAnswer": "Entomopathogenic nematodes exhibit distinct behavioral adaptations for host localization, conceptualized along a foraging continuum between ambushers and cruisers:\n\n1. **Ambusher Foragers (e.g., Steinernema carpocapsae):**\n   - *Locomotory Behavior:* Low directional motility; they remain sedentary in the upper topsoil layer (0-2 cm depth).\n   - *Host Finding Mechanism:* Display a specialized behavior termed **nictation**, standing vertically on their tails on soil particles and curling into an elastomeric loop to spring or jump onto passing insects. They respond poorly to distant carbon dioxide gradients.\n   - *Target Host Spectrum:* Highly effective against highly mobile, surface-dwelling or foliage-feeding pests that contact the topsoil, such as armyworms, cutworms (*Agrotis ipsilon*), and mole crickets.\n\n2. **Cruiser Foragers (e.g., Heterorhabditis bacteriophora, Steinernema glaseri):**\n   - *Locomotory Behavior:* Highly active, continuous directional undulation through soil pores, traveling up to 90 cm vertically and horizontally.\n   - *Host Finding Mechanism:* Do not nictate; actively track volatile host emissions along chemotactic gradients (carbon dioxide, plant root distress volatiles, insect excretory cues) and thermal gradients.\n   - *Target Host Spectrum:* Exceptionally adapted for locating sedentary, cryptic, subterranean insect pests dwelling deep in the rhizosphere, including white grubs (*Holotrichia* spp.), root weevils (*Otiorhynchus* spp.), and sugarcane root borers.",
      "maxMarks": 6,
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionType": "SHORT_ANSWER",
      "questionText": "Contrast the foraging strategies of ambusher versus cruiser entomopathogenic nematodes.",
      "outlinePoints": [
        "Ambushers (S. carpocapsae): Sedentary near soil surface; locate hosts by nictating and jumping.",
        "Ambushers target mobile surface pests (cutworms, armyworms).",
        "Cruisers (H. bacteriophora): Actively directional; move up to 90 cm through soil pores.",
        "Cruisers track chemical/CO2 gradients to hunt sedentary subterranean grubs and root borers."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB08",
      "modelAnswer": "The White trap (developed by G.F. White in 1927) is the standard laboratory method for collecting emerging Infective Juveniles (IJs) from nematode-infected insect cadavers:\n\n1. **Principle:** The technique exploits the positive hydrotropic and dispersal behavior of newly emerged dauer IJs as they leave the nutrient-exhausted cadaver.\n2. **Apparatus Assembly:**\n   - A standard plastic or glass Petri dish bottom (100 mm diameter) is filled with a shallow layer (10-15 ml) of sterile distilled water.\n   - An inverted watch glass or the bottom of a smaller Petri dish (50 mm) is positioned centrally inside the water.\n   - A piece of circular filter paper (Whatman No. 1) is draped over the inverted watch glass such that its circular edge extends into the surrounding water reservoir, creating a capillary water bridge.\n3. **Placement of Cadavers:**\n   - Insect cadavers (typically *Galleria mellonella* larvae inoculated 5-7 days prior) are placed on top of the moist filter paper above the watch glass.\n   - The outer dish is covered with its lid to maintain 100% relative humidity.\n4. **Harvesting:**\n   - By day 10 to 14, hundreds of thousands of dauer IJs emerge from the cadaver cuticle, crawl across the moist filter paper, and migrate down the capillary bridge into the clear water pool.\n   - The nematode suspension is harvested daily by decanting the water, washed 3 times by gravity sedimentation in cold sterile water, and transferred to culture flasks for refrigerated storage (5-10\u00b0C).",
      "maxMarks": 6,
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionType": "SHORT_ANSWER",
      "questionText": "Outline the operation of a White trap for harvesting EPN infective juveniles.",
      "outlinePoints": [
        "Exploits natural dispersal behavior of dauer IJs emerging from exhausted cadavers.",
        "Inverted watch glass draped with filter paper contacting a surrounding water bath.",
        "Infected Galleria cadavers placed on moist paper inside a humidified dish.",
        "IJs crawl down capillary bridge into water pool over 10-14 days.",
        "Harvested by decanting, washing by sedimentation, and cold storage at 5-10\u00b0C."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U3-SUB09",
      "modelAnswer": "Nucleopolyhedroviruses (NPVs) and Granuloviruses (GVs) represent the two primary morphological and taxonomic divisions within the family Baculoviridae:\n\n1. **Taxonomy and Nomenclature:**\n   - *NPV:* Classified under the genus *Alphabaculovirus* (lepidopteran hosts), *Gammabaculovirus* (sawflies), and *Deltabaculovirus* (dipterans).\n   - *GV:* Strictly classified under the genus *Betabaculovirus*, restricted exclusively to hosts within the insect order Lepidoptera.\n\n2. **Occlusion Body Morphology and Matrix Protein:**\n   - *NPV:* Produces large (0.5 to 15 \u00b5m), multi-faceted, polyhedral occlusion bodies (polyhedra). The crystalline matrix is composed of the 31 kDa protein **polyhedrin**.\n   - *GV:* Produces tiny (0.3 to 0.5 \u00b5m), ovocylindrical or ellipsoidal capsules termed granules. The crystalline matrix is composed of the 29 kDa protein **granulin**.\n\n3. **Virion Packaging per Occlusion Body:**\n   - *NPV:* Encloses dozens to hundreds of virions per polyhedron. Can be single-enveloped (SNPV) or multi-enveloped (MNPV) with 2-15 nucleocapsids per envelope.\n   - *GV:* Characteristically encloses only **one single virion** containing exactly one nucleocapsid per granule.\n\n4. **Cellular and Tissue Pathology:**\n   - *NPV:* Causes rapid, explosive polyorgan infection; polyhedra form exclusively within the enlarged **nuclei** of infected cells. Results in dramatic tissue liquefaction ('melting') within 4 to 7 days.\n   - *GV:* Replication is slower (7 to 14 days). In some species, infection is tissue-restricted (e.g., fat body only), and late in infection, the nuclear membrane breaks down, allowing granules to form throughout the mingled nucleoplasm and cytoplasm.",
      "maxMarks": 6,
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies",
      "questionType": "COMPARISON",
      "questionText": "Compare Nucleopolyhedrovirus (NPV) with Granulovirus (GV) in taxonomy, occlusion morphology, virion packaging, and host tissue pathology.",
      "outlinePoints": [
        "Taxonomy: NPV belongs to Alphabaculovirus; GV belongs to Betabaculovirus.",
        "Matrix: NPV polyhedra composed of polyhedrin (0.5-15 \u00b5m); GV granules composed of granulin (0.3-0.5 \u00b5m).",
        "Packaging: NPV encloses dozens of virions (SNPV or MNPV); GV encloses only one single virion per capsule.",
        "Pathology: NPV causes rapid nuclear liquefaction in 4-7 days; GV is slower and can spread throughout cytoplasm."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U3-SUB10",
      "modelAnswer": "Steinernematidae and Heterorhabditidae are the two economically paramount families of entomopathogenic nematodes, exhibiting key biological divergences:\n\n1. **Bacterial Symbiont Genera:**\n   - *Steinernematidae:* Mutualistically associates exclusively with Gram-negative bacteria of the genus **Xenorhabdus** (e.g., *X. nematophila*, *X. bovienii*).\n   - *Heterorhabditidae:* Mutualistically associates exclusively with Gram-negative bioluminescent bacteria of the genus **Photorhabdus** (e.g., *P. luminescens*).\n\n2. **Host Penetration Mechanics:**\n   - *Steinernematidae:* Infective juveniles lack cuticular teeth; entry into the host hemocoel occurs strictly through natural anatomical orifices (mouth, anus, spiracles).\n   - *Heterorhabditidae:* In addition to natural openings, IJs possess an anterior terminal dorsal tooth that can mechanically abrade and penetrate thin intersegmental cuticular membranes directly.\n\n3. **Sexual Reproduction Strategy:**\n   - *Steinernematidae:* Amphimictic (dioecious) in all generations. Every generation requires the presence of both male and female nematodes to copulate and produce progeny.\n   - *Heterorhabditidae:* Demonstrates heterogonic reproduction. The colonizing IJ develops into a self-fertile protandric **hermaphrodite** in the first generation, enabling successful infection from a single entering nematode. Subsequent generations are amphimictic.\n\n4. **Cadaver Color and Luminescence:**\n   - *Steinernematidae:* Insect cadavers turn ochre, cream, yellowish-brown, or dark greyish-brown; completely non-luminescent.\n   - *Heterorhabditidae:* Cadavers turn characteristic brick-red or purple due to bacterial anthraquinones and display greenish bioluminescence visible in total darkness.",
      "maxMarks": 6,
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionType": "COMPARISON",
      "questionText": "Compare Steinernematidae with Heterorhabditidae across bacterial symbionts, host entry mechanics, adult sexual reproduction, and cadaver color.",
      "outlinePoints": [
        "Bacterium: Steinernema carries Xenorhabdus; Heterorhabditis carries bioluminescent Photorhabdus.",
        "Entry: Steinernema enters via natural openings; Heterorhabditis additionally uses a dorsal cuticular tooth.",
        "Reproduction: Steinernema is amphimictic (dioecious) in all generations; Heterorhabditis 1st gen is a self-fertile hermaphrodite.",
        "Cadaver: Steinernema produces ochre/brown cadavers; Heterorhabditis produces glowing red cadavers."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U3-SUB11",
      "modelAnswer": "Mass rearing of entomopathogenic nematodes is carried out via biological in vivo systems or bioengineered in vitro fermentation platforms:\n\n1. **Rearing Matrix and Scale:**\n   - *In Vivo:* Uses living insect hosts, primarily larvae of the greater wax moth (*Galleria mellonella*). Conducted in small plastic trays and White traps; represents low-technology, decentralized production suitable for smallholder supply.\n   - *In Vitro:* Cultivates nematodes axenically or monoxenically with their symbiont on artificial nutrient media. Conducted on solid polyurethane sponge matrices in autoclavable bags, or in large liquid stirred bioreactors (1,000 to 50,000 liters) with air-lift circulation.\n\n2. **Capital Cost and Equipment:**\n   - *In Vivo:* Very low initial capital investment. Requires basic rearing shelves, insect cages, and Petri dishes. Highly labor-intensive (manual diet preparation, larval sorting, cadaver handling).\n   - *In Vitro:* Extremely high capital cost for bioreactors, steam boilers, sterile air filtration, and dissolved oxygen controls. Highly automated with low operational labor per unit.\n\n3. **Yield and Production Capacity:**\n   - *In Vivo:* Produces ~100,000 to 250,000 IJs per Galleria larva. Production capacity is strictly constrained by host insect rearing space and diet costs.\n   - *In Vitro:* Yields 5 x 10^7 IJs per solid sponge bag and up to 1 x 10^5 to 5 x 10^5 IJs per milliliter in liquid fermenters, enabling industrial supply for thousands of hectares.\n\n4. **Quality and Virulence:**\n   - *In Vivo:* Yields IJs with exceptionally high lipid reserves, maximal infectivity, and zero risk of symbiont phase shift.\n   - *In Vitro:* Continuous subculturing risks symbiont Phase II decay and reduced nematode virulence unless rigorous mother culture replenishment protocols are maintained.",
      "maxMarks": 6,
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionType": "COMPARISON",
      "questionText": "Compare In Vivo versus In Vitro mass production of Entomopathogenic Nematodes.",
      "outlinePoints": [
        "Matrix: In vivo uses live Galleria larvae; in vitro uses nutrient media on solid sponge or liquid bioreactors.",
        "Investment: In vivo requires low capital but high labor; in vitro requires high capital for automated bioreactors.",
        "Capacity: In vivo produces ~2x10^5 IJs/larva (limited scale); in vitro yields 10^5 IJs/ml for commercial scale.",
        "Quality: In vivo produces highly virulent IJs; in vitro requires vigilance against bacterial Phase II decay."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U3-SUB12",
      "modelAnswer": "The pathogenic infection process of Nucleopolyhedroviruses (Alphabaculovirus) is a precisely choreographed, biphasic cellular and genetic subversion of the insect host unfolding across five chronological phases:\n\n**Phase 1: Ingestion, Alkaline Dissolution, and Peritrophic Breach**\nThe insect consumes foliage carrying polyhedral occlusion bodies (POBs). Upon reaching the midgut lumen, the polyhedra encounter a hyper-alkaline environment (pH > 10.0 to 11.5). This alkaline pH disrupts salt bridges and deprotonates cysteine residues in the polyhedrin protein matrix, dissolving the crystals within 10 to 30 minutes and releasing hundreds of Occlusion-Derived Virions (ODVs). The released ODVs traverse the mesh-like peritrophic membrane aided by viral metalloproteases (enhancins).\n\n**Phase 2: Primary Infection of Midgut Epithelial Cells**\nODVs attach to microvillar brush border membranes via Per Os Infectivity Factors (PIF complexes: P74, PIF1, PIF2, PIF3, PIF4). The ODV envelope fuses directly with the microvillar plasma membrane at neutral/alkaline pH, discharging rod-shaped nucleocapsids into the cytoplasm. Nucleocapsids are actively transported along the host actin cytoskeleton to nuclear pore complexes, docking and injecting the circular double-stranded viral DNA into the host nucleus.\n\n**Phase 3: Viral Gene Expression and Budded Virus (BV) Production**\nViral transcription occurs in a tightly regulated temporal cascade:\n1. Immediate-Early and Early Genes: Transcribed by host RNA polymerase II, encoding viral transactivators (IE1), DNA replication machinery, and anti-apoptotic proteins (P35, IAP) that neutralize host cellular defense.\n2. Late Genes: Transcribed by a virus-encoded four-subunit RNA polymerase, encoding structural capsid proteins.\nProgeny nucleocapsids assemble in a newly formed virogenic stroma within the nucleus. Instead of being occluded, these early nucleocapsids migrate to the basal plasma membrane of the midgut epithelial cell. They acquire a host-derived membrane envelope modified with the viral fusion glycoprotein **GP64** (or F protein) and bud into the hemolymph as **Budded Viruses (BVs)** within 24 to 36 hours.\n\n**Phase 4: Secondary Systemic Infection via Hemolymph and Tracheae**\nBVs circulate throughout the hemocoel and enter tracheal epidermal cells, fat body, hemocytes, and muscle tissues via low-pH endocytosis mediated by GP64. In these secondary tissues, the virus replicates exponentially, driving widespread systemic infection across virtually all host organ systems.\n\n**Phase 5: Very Late Phase, Behavioral Modification, and Tissue Liquefaction**\nIn secondary target cells (principally fat body and hypodermis), viral replication transitions to the very late phase governed by the hyper-active **polyhedrin (polh)** and **p10** promoters. Millions of nucleocapsids are enveloped within the nucleus and packaged into massive polyhedral crystals. Concurrently, viral **ptp** and **egt** genes modulate host behavior, inducing negative geotaxis that drives moribund larvae to climb to plant tops ('tree-top disease'). Finally, two viral late enzymes\u2014viral endochitinase (*v-chiA*) and cathepsin protease (*v-cath*)\u2014accumulate. Upon host death (day 5 to 7), these enzymes cooperatively lyse the internal viscera and dissolve the cuticular basement membrane. The caterpillar cuticle tears open ('melting disease'), and billions of polyhedra cascade onto lower leaves, ensuring widespread transmission.",
      "maxMarks": 10,
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction",
      "questionType": "LONG_ANSWER",
      "questionText": "Provide a comprehensive analysis of the infection cascade of Nucleopolyhedroviruses (NPV) in a caterpillar host, from oral ingestion to terminal liquefaction.",
      "outlinePoints": [
        "Phase 1: Ingestion and crystal dissolution in alkaline midgut lumen (pH >10.0), releasing ODVs.",
        "Phase 2: PIF-mediated ODV fusion with microvilli; nucleocapsid transport to nucleus via actin.",
        "Phase 3: Immediate-early anti-apoptotic expression (p35) and budding of GP64-coated BVs into hemolymph.",
        "Phase 4: BV-mediated secondary systemic spread to fat bodies, muscles, and tracheal cells.",
        "Phase 5: Hyper-transcription of polyhedrin, behavioral ascent (ptp/egt), and tissue melting by v-chiA and v-cath."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U3-SUB13",
      "modelAnswer": "The tripartite parasitism between Heterorhabditis bacteriophora, its symbiotic bacterium Photorhabdus luminescens, and a susceptible insect host represents one of the most lethal and sophisticated mutualisms in biology:\n\n**Stage 1: Host Location and Penetration**\nThe non-feeding 3rd-stage dauer Infective Juvenile (IJ) survives in soil pores protected by its retained J2 cuticular sheath. As a classic cruiser forager, it moves through soil along gradients of carbon dioxide and root distress volatiles to locate subterranean insect larvae (e.g., white grubs). Upon contacting the host, the IJ enters through natural body openings (spiracles, mouth, anus) or utilizes its sharp, terminal anterior dorsal cuticular tooth to mechanically scrape and rupture thin intersegmental cuticle directly into the hemocoel.\n\n**Stage 2: Bacterial Regurgitation and Immunosuppression**\nOnce inside the host hemolymph, the IJ sheds its J2 sheath and undergoes an environmental cue-induced activation. Within 4 to 6 hours, the IJ expels 200 to 2,000 cells of Photorhabdus luminescens from its digestive tract into the hemocoel. The bacteria deploy a Type III Secretion System (T3SS) to inject effector toxins (LopT) into host hemocytes, paralyzing insect cellular defenses (phagocytosis and nodule formation) within minutes.\n\n**Stage 3: Fatal Toxemia, Septicemia, and Tissue Bioconversion**\nFree of immune suppression, Photorhabdus multiplies geometrically. The bacteria secrete high-molecular-weight multi-subunit insecticidal protein complexes (Toxin Complexes: TcA, TcB, TcC) and the 'Makes Caterpillars Floppy' (Mcf) toxin, which destroy midgut epithelial barriers and induce widespread cellular apoptosis. Concurrently, bacterial proteases, lipases, and chitinases liquefy internal host tissues into a rich, sterile nutrient soup. The insect dies of overwhelming septicemia and toxic shock within 24 to 48 hours.\n\n**Stage 4: Cadaver Preservation and Pigmentation**\nPhotorhabdus synthesizes small-molecule stilbene derivatives (3,5-dihydroxy-4-isopropylstilbene) with potent broad-spectrum antibiotic activity against Gram-positive, Gram-negative, and fungal competitors. Furthermore, the bacteria biosynthesize anthraquinone pigments that turn the cadaver a characteristic brick-red or purple, while the enzyme bacterial luciferase oxidizes reduced flavin mononucleotide (FMNH2) and fatty aldehydes, producing visible greenish bioluminescence in darkness. These adaptations deter saprophytic microbes and subterranean scavengers (ants, beetles).\n\n**Stage 5: Nematode Reproduction and Dimorphic Development**\nThe colonizing IJs feed voraciously on the proliferating Photorhabdus biomass and digested host viscera. In Heterorhabditis, every colonizing IJ develops into a protandric, self-fertile **hermaphrodite** (first generation). This guarantees reproduction even if only a single nematode invaded the host. First-generation hermaphrodites lay hundreds of eggs that hatch and develop into second-generation amphimictic adults (males and females). Nematodes complete 2 to 3 generations over 8 to 12 days, multiplying from a few invading worms into hundreds of thousands.\n\n**Stage 6: Dauer Differentiation and Emergence**\nBy day 10 to 14, host tissues are completely exhausted. High population density, accumulation of nematode pheromones, and nutrient depletion trigger developing J2 larvae to undergo specialized dauer differentiation. The juvenile retains its J2 cuticle as an outer sheath, ceases feeding, closes its stoma, and packages symbiotic Phase I Photorhabdus cells into its gut lumen. Hundreds of thousands (up to 500,000) of newly formed Infective Juveniles rupture through the cadaver cuticle and disperse into the surrounding soil to hunt new insect hosts.",
      "maxMarks": 10,
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionType": "LONG_ANSWER",
      "questionText": "Detail the complete tripartite parasitic cycle of Heterorhabditis bacteriophora and Photorhabdus luminescens inside an insect host.",
      "outlinePoints": [
        "Stage 1: Cruising IJ enters host via spiracles, mouth, anus, or cuticular dorsal tooth puncture.",
        "Stage 2: IJ sheds sheath and regurgitates Photorhabdus; bacterial T3SS paralyses hemocytes.",
        "Stage 3: Secretion of Tc and Mcf toxins kills insect in 24-48 h; tissues liquefied into nutrient soup.",
        "Stage 4: Stilbene antibiotics sterilize cadaver; anthraquinones color cadaver red with luciferase glow.",
        "Stage 5: 1st-generation self-fertile hermaphrodite reproduces, followed by amphimictic generations.",
        "Stage 6: Nutrient exhaustion triggers dauer IJ formation carrying Phase I bacteria, emerging into soil."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U3-SUB14",
      "modelAnswer": "Industrial commercialization of entomopathogenic nematodes requires scalable, cost-effective in vitro cultivation technologies capable of generating billions of infective juveniles independent of live host insects:\n\n**1. In Vitro Solid Fermentation (Three-Dimensional Sponge System):**\n- *Principle:* Developed by Bedding (1981), this method recreates a three-dimensional porous matrix that provides immense surface area for gas exchange and nematode locomotion.\n- *Matrix & Media Formulation:* Polyether polyurethane foam cut into small cubes (0.5 to 1.0 cm3) is utilized as the physical support matrix. The matrix is coated with nutrient homogenates: 10-15% chicken offal, homogenized pig or beef fat, soy flour, yeast extract, and egg yolk.\n- *Sterilization and Inoculation:* Sponge bags or autoclavable polypropylene trays with air-permeable filter patches are autoclaved at 121\u00b0C for 30 minutes. Bags are first inoculated with a pure monoculture of the primary form (Phase I) of the symbiotic bacterium (*Xenorhabdus* or *Photorhabdus*) and incubated for 24-48 hours at 26-28\u00b0C to establish bacterial biomass.\n- *Nematode Inoculation & Harvest:* Axenic infective juveniles are introduced. The culture is incubated at 25\u00b0C for 2 to 3 weeks. When nutrient exhaustion signals dauer transformation, the sponge matrix is harvested, placed on fine-mesh sieves in water extraction baths, and nematodes crawl out into the water pool. Yields average 5 x 10^7 to 1 x 10^8 IJs per bag.\n\n**2. In Vitro Submerged Liquid Fermentation (Bioreactor Technology):**\n- *Bioengineering Challenges:* Nematodes are obligate aerobes, highly sensitive to shear stress, and possess large physical dimensions (500-1000 \u00b5m). Conventional Rushton turbine impellers shear nematode bodies and destroy adults.\n- *Bioreactor Design:* Industrial production utilizes **air-lift bioreactors** (with internal draft tubes) or bubble column fermenters (5,000 to 50,000 L capacity). Aeration and mixing are driven purely by pneumatic air bubbles rising through the central draft tube, maintaining uniform liquid circulation with minimal shear force.\n- *Monoxenic Two-Stage Cultivation:* Liquid media (peptone, yeast extract, corn oil, glucose, egg yolk solids) is sterilized in situ. Stage 1: The bioreactor is inoculated with Phase I symbiotic bacteria and cultured for 24-36 hours at 28\u00b0C with high dissolved oxygen (DO >40%) until bacterial density reaches 10^9 cells/ml. Stage 2: Sterile IJs are inoculated into the bioreactor at a density of 1,000 to 2,000 IJs/ml. Temperature is lowered to 25\u00b0C, and DO is maintained above 20% by automated oxygen-enriched sparging.\n- *Culture Dynamics & Downstream Harvest:* Nematodes feed on the bacteria, mature, and complete two synchronous reproductive cycles over 10 to 14 days. As bacteria deplete, J2 larvae undergo dauer differentiation into IJs (>100,000 IJs/ml). The whole broth is chilled to 10\u00b0C, and IJs are separated using continuous vibratory sieves or gentle hydrocyclones, washed, and formulated into vermiculite, polyacrylamide gels, or water-dispersible granules.",
      "maxMarks": 10,
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionType": "LONG_ANSWER",
      "questionText": "Describe the bioengineering principles and production protocols for mass multiplication of EPNs using in vitro solid and submerged liquid fermentation.",
      "outlinePoints": [
        "Solid SSF: Bedding's polyurethane sponge foam coated with animal/soy nutrient homogenate in filter bags.",
        "Two-stage inoculation: Phase I bacteria established for 24-48 h before adding axenic IJs.",
        "Liquid Fermentation: Pneumatic air-lift bioreactors prevent mechanical shear damage from impellers.",
        "Parameters: Monoxenic culture at 25\u00b0C, automated DO >20%, harvesting after 10-14 days.",
        "Downstream: Continuous vibratory sieving, washing, and formulation into gels or water-dispersible granules."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U3-SUB15",
      "modelAnswer": "Baculoviruses represent highly selective, environmentally benign components of Integrated Pest Management (IPM) in cotton and chickpea. Achieving high field bioefficacy requires precise timing, proper spray adjuvants, and physiological synchronization:\n\n**1. Target Pest Ecology & Scouting Benchmarks:**\n- *Cotton:* Targets Helicoverpa armigera (American bollworm) and Spodoptera litura (tobacco caterpillar).\n- *Chickpea:* Targets Helicoverpa armigera (gram pod borer).\n- Action Threshold: Initiate sprays strictly at the Economic Threshold Level (ETL)\u2014for H. armigera: 1 larva/meter row in chickpea or 1 egg/plant or 5-10% flared squares in cotton; for S. litura: 1 egg mass or skeletonized leaf cluster per 10 plants.\n- Instar Specificity: Baculoviruses are highly lethal to 1st and 2nd-instar larvae (LC50 is 100- to 1,000-fold lower than for 4th instars). Spraying must coincide with egg hatch.\n\n**2. Spray Solution Calibration and Tank Formulation:**\n- Recommended Dosage: **250 to 500 Larval Equivalents (LE) per hectare** (equivalent to 1.5 x 10^12 to 3.0 x 10^12 POBs/ha).\n- Spray Volume: 400 to 500 liters of water per hectare for knapsack sprayers, ensuring thorough canopy coverage.\n- Adjuvant Tank-Mix Formulation:\n  - Phagostimulant: Add **0.5% crude jaggery or brown sugar** (5 g/L). Caterpillars actively ingest treated foliage.\n  - Wetting/Spreading Agent: Add **0.1% non-ionic surfactant** (e.g., Teepol or Triton X-100, 1 ml/L) to overcome leaf waxiness.\n  - UV Screen: Add **0.1% Tinopal (optical brightener)** or 0.5% crude cottonseed oil to shield polyhedra from solar UV photolysis.\n\n**3. Operational Timing and Application Mechanics:**\n- Diurnal Timing: Spray strictly during **late afternoon (after 4:30 PM)**. This avoids midday solar UV-B degradation and provides 12-14 hours of darkness while caterpillars emerge to feed voraciously at night.\n- Spray Delivery: Direct hollow-cone nozzles to coat flower buds, young bolls, and terminal foliage.\n\n**4. Sequential Rotation and IPM Compatibility:**\n- Apply two sequential sprays of HaNPV spaced 5 to 7 days apart during peak flowering/podding.\n- Baculoviruses are 100% compatible with beneficial predatory bugs (*Orius*, *Geocoris*), parasitoid wasps (*Trichogramma chilonis*, *Campoletis sonorensis*), and honeybees, allowing natural biological control to operate unhindered alongside viral epizootics.",
      "maxMarks": 10,
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionType": "LONG_ANSWER",
      "questionText": "Formulate a comprehensive management schedule integrating HaNPV and SlNPV for managing bollworms and leaf defoliators in cotton and chickpea ecosystems.",
      "outlinePoints": [
        "Scouting & ETL: Spray strictly against early 1st/2nd instars at ETL (1 larva/m row or 5% flared squares).",
        "Dosage: 250 to 500 LE/ha (1.5x10^12 to 3.0x10^12 POBs/ha) in 400-500 L water/ha.",
        "Adjuvants: 0.5% jaggery (phagostimulant), 0.1% surfactant (wetting), 0.1% Tinopal (UV screen).",
        "Timing: Spray strictly late afternoon (>4:30 PM) to avoid solar UV photolysis and match nocturnal feeding.",
        "IPM Compatibility: Fully compatible with natural enemies like Trichogramma and Chrysoperla."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U3-SUB16",
      "modelAnswer": "The failure of the HaNPV spray in this chickpea field is a direct consequence of severe operational and agronomic execution errors rather than a defective biological agent:\n\n**Diagnostic Operational Failures:**\n1. **Midday Application (Solar UV Inactivation):**\n   - Applying HaNPV at 12:00 noon exposed unprotected polyhedral occlusion bodies to intense solar ultraviolet (UV-A and UV-B: 290-380 nm) radiation. Solar UV induces thymine dimerization and free radical cleavage in viral dsDNA, causing 90-95% loss of viral infectivity within 2 to 4 hours of midday exposure.\n2. **Absence of Phagostimulants:**\n   - Baculoviruses must be orally ingested to initiate infection. Without an ingestive stimulant, neonate caterpillars feeding sparingly on chickpea foliage (which contains acidic malic and oxalic acid exudates) consumed insufficient viral particles to exceed the lethal threshold.\n3. **Absence of Wetting Agents (Surfactants):**\n   - Chickpea leaves are densely covered with glandular trichomes secreting glandular acids. Without a surfactant, spray droplets beaded up and rolled off the leaves or dried rapidly without spreading.\n\n**Corrective Instructions for the Grower:**\n1. **Reschedule Application Timing:** Reapply strictly after **4:30 PM (late afternoon)** or on overcast days. This allows polyhedra to remain biologically active overnight, coinciding with the peak nocturnal feeding activity of Helicoverpa larvae.\n2. **Incorporate Tank Adjuvants:**\n   - Add **0.5% jaggery (500 g per 100 liters water)** as a phagostimulant.\n   - Add **0.1% Tinopal or Blankophor (100 g per 100 liters)** as a UV shield and peritrophic membrane penetrant.\n   - Add **0.1% Teepol or neutral soap solution** as a wetting agent.\n3. **Target Early Larval Instars:** Confirm larvae are 1st to 2nd instars (<1 cm long); do not expect rapid knockdown on large 5th instars which require 1,000-fold higher viral doses to succumb.",
      "maxMarks": 6,
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionType": "APPLICATION",
      "questionText": "A chickpea farmer applies HaNPV at 12:00 noon using clear well water without adjuvants and reports complete pest management failure. Diagnose the operational errors and provide corrective instructions.",
      "outlinePoints": [
        "Error 1: Midday spray caused rapid photolytic inactivation of viral DNA by solar UV radiation.",
        "Error 2: Lack of phagostimulant reduced ingestion on acid-secreting chickpea foliage.",
        "Error 3: Lack of surfactant caused spray droplets to bead and roll off hairy leaves.",
        "Correction: Reschedule spray to late afternoon (>4:30 PM) for nocturnal feeding.",
        "Correction: Add 0.5% jaggery, 0.1% Tinopal UV screen, and 0.1% Teepol wetting agent."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U3-SUB17",
      "modelAnswer": "White grubs (*Holotrichia consanguinea*) feed voraciously on groundnut taproots, causing pod loss, wilting, and plant mortality in sandy and light soils across Gujarat, Rajasthan, and Andhra Pradesh. Heterorhabditis indica is an indigenous cruiser nematode exceptionally effective in managing this subterranean pest:\n\n**Application Protocol:**\n1. **Pre-Application Soil Conditioning:**\n   - White grubs dwell 5 to 15 cm deep in the root zone. Nematodes require continuous capillary moisture films to navigate through soil pores.\n   - Irrigate the groundnut field lightly 24 hours prior to nematode application to bring soil moisture to approximately field capacity (damp, friable soil).\n\n2. **Dosage and Formulation Preparation:**\n   - Recommended Dose: **2.5 x 10^9 Infective Juveniles (IJs) per hectare** (equivalent to 2.5 to 5.0 kg of commercial wettable powder formulation containing 1 x 10^9 IJs/kg).\n   - Slurry Preparation: Suspend the wettable powder in 20 liters of water in a bucket, agitate for 5 minutes, and pass through a coarse sieve into the spray tank.\n\n3. **Application Delivery Systems:**\n   - *Method A: Drip Irrigation Injection:* Inject the concentrated nematode suspension through a Venturi injector into the drip system during the final 30 minutes of an irrigation cycle.\n   - *Method B: Knapsack Soil Drenching:* Remove all fine nozzle filter screens (remove filters <50 mesh) to avoid physical crushing of nematodes. Operate at low pressure (<200 kPa / 30 psi). Direct a solid-stream drench along the crop rows at the base of the groundnut plants.\n\n4. **Post-Application Management:**\n   - Apply immediately before sunset (5:00 PM onwards) or during cloudy weather to protect nematodes from surface solar heat and UV.\n   - Follow immediately with a light irrigation (10-15 mm water) to flush the nematodes 5 to 10 cm deep into the rhizosphere where the white grubs are actively feeding.",
      "maxMarks": 6,
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionType": "APPLICATION",
      "questionText": "Design an application protocol for using Heterorhabditis indica against white grubs (Holotrichia consanguinea) in groundnut.",
      "outlinePoints": [
        "Pre-irrigate soil to field capacity so nematodes can undulate through capillary water films.",
        "Dosage: 2.5 x 10^9 IJs/ha (2.5-5.0 kg commercial WP) in groundnut root zone.",
        "Delivery: Via drip irrigation or low-pressure knapsack drench with all fine (<50 mesh) filters removed.",
        "Apply late evening (>5:00 PM) to avoid surface heat and UV radiation.",
        "Follow immediately with light irrigation to wash nematodes 5-10 cm deep into grub feeding zone."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U3-SUB18",
      "modelAnswer": "Microscopic quantification of polyhedra using an Improved Neubauer Hemocytometer is the universal benchmark for verifying the potency of baculovirus formulations:\n\n**Step-by-Step Hemocytometer Protocol:**\n1. **Sample Dilution:**\n   - Thoroughly shake the HaNPV formulation to disperse settled polyhedra.\n   - Pipette 1.0 ml into 99.0 ml of sterile distilled water containing 0.05% SDS (to disperse clumps), yielding a 10^-2 dilution. Mix on a vortex for 5 minutes.\n   - If the sample is highly concentrated, prepare a further decimal dilution (e.g., 10^-3 or 10^-4) until microscopic inspection reveals approximately 30 to 100 polyhedra per large grid square.\n\n2. **Loading the Hemocytometer:**\n   - Clean the hemocytometer chamber and specialized cover glass (0.4 mm thickness) with 70% ethanol and dry with lens paper.\n   - Place the cover glass firmly over the central polished counting grids until iridescent Newton's rings appear on both sides.\n   - Deliver 10 \u00b5l of the diluted suspension to the chamber edge via micropipette. Allow the fluid to fill the chamber by capillary action without overflowing into moats or forming air bubbles. Let stand undisturbed for 5 minutes to allow polyhedra to settle onto the grid surface.\n\n3. **Microscopic Counting:**\n   - Mount on a phase-contrast microscope at 400x magnification. Polyhedra appear as distinct, highly refractile, bright multi-faceted crystals against a dark background.\n   - Count all polyhedra within five large squares (the four corners and central square of the large 1 mm2 center grid). Use standard inclusion rules: count polyhedra touching top and left boundary lines; ignore those touching bottom and right lines.\n\n4. **Mathematical Calculation:**\n   - The chamber depth is 0.1 mm. The area of the center grid is 1 mm2, consisting of 25 large squares (each large square volume = 0.04 mm2 x 0.1 mm = 0.004 mm3 = 4 x 10^-6 ml).\n   - Formula:\n     POB/ml = [Total Polyhedra Counted in 5 squares / 5] x [25 / (10^-4 ml)] x Dilution Factor\n     Simplifies to: POB/ml = [Total Counted in 5 squares] x 50,000 x Dilution Factor.\n   - If 160 polyhedra are counted across 5 squares at a 10^-3 dilution:\n     POB/ml = 160 x 50,000 x 1,000 = 8.0 x 10^9 POB/ml.",
      "maxMarks": 6,
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV",
      "questionType": "APPLICATION",
      "questionText": "Describe how to calculate and verify the polyhedral concentration (POB/ml) of an unknown HaNPV sample using an Improved Neubauer Hemocytometer.",
      "outlinePoints": [
        "Dilute sample in water with 0.05% SDS and vortex to ensure complete polyhedral dispersion.",
        "Mount clean cover glass until Newton's rings appear; load 10 \u00b5l into chamber without bubbles.",
        "Allow polyhedra to settle for 5 minutes; count under phase-contrast optics at 400x.",
        "Count 5 large squares (4 corners + center) applying standard grid inclusion rules.",
        "Calculate POB/ml = (Count in 5 squares / 5) x 25 x 10,000 x Dilution Factor."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U3-SUB19",
      "modelAnswer": "This scenario describes a classic, well-documented microbiological phenomenon known as **Phase Variation** (or phenotypic shifting from Phase I to Phase II) in symbiotic bacteria of entomopathogenic nematodes:\n\n**Diagnostic Analysis:**\n1. **Mechanism of Phase Variation:**\n   - *Photorhabdus luminescens* naturally exists in two distinct, reversible phenotypic phases: **Phase I (Primary form)** and **Phase II (Secondary form)**.\n   - *Phase I Characteristics:* Synthesizes crystalline inclusion proteins, secretes high levels of stilbene and anthraquinone antibiotics (turning colonies dark red on MacConkey agar), exhibits bright green bioluminescence, and expresses essential nutrient factors required by *Heterorhabditis* for reproduction and dauer IJ maturation.\n   - *Phase II Characteristics:* Occurs when bacteria undergo prolonged, repeated in vitro subculturing on artificial media (especially under stationary growth, oxygen stress, or high temperatures). Driven by genomic rearrangements or promoter inversions, Phase II bacteria lose luciferase activity, cease antibiotic and toxin synthesis, and fail to provide the nutritional cues necessary for nematode embryogenesis. Consequently, inoculated nematodes fail to reproduce, abort development, and yield zero dauer IJs.\n\n**Prescribed Corrective and Preventive Protocols:**\n1. **Colony Selection on Selective Media:**\n   - Streak the degraded culture onto **NBTA agar** (Nutrient Agar supplemented with 0.0025% Bromothymol Blue and 0.004% 2,3,5-Triphenyltetrazolium Chloride).\n   - Phase I colonies absorb bromothymol blue and reduce tetrazolium, developing into distinct dark blue/green colonies with a clear surrounding halo. In contrast, Phase II colonies remain pale red or white.\n   - Aseptically pick exclusively pure Phase I dark blue colonies for subculturing.\n2. **Bioluminescence Screening:**\n   - Inspect agar plates in a completely dark room after 5 minutes of eye adaptation; only luminescent colonies are selected for bioreactor seed trains.\n3. **Implement Strict Master Seed Banking:**\n   - Never maintain symbiotic bacteria by continuous weekly petri dish transfers.\n   - Establish a Master Cell Bank (MCB) and Working Cell Bank (WCB) stored in 20% glycerol cryovials at **-80\u00b0C** or in liquid nitrogen.\n   - Inoculate fermenters strictly from cryovials, limiting subcultures to a maximum of 2 to 3 passages before returning to the original cryogenic stock.\n4. **In Vivo Passage Rejuvenation:**\n   - Pass the nematode-bacterial complex through live *Galleria mellonella* larvae every 6 months to maintain natural selection for virulent Phase I symbionts.",
      "maxMarks": 8,
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria",
      "questionType": "CASE_STUDY",
      "questionText": "A commercial EPN production laboratory observes that its subcultured stock of Photorhabdus luminescens has stopped producing antibiotics and no longer causes bioluminescence. Inoculated Heterorhabditis nematodes fail to produce IJs. Diagnose the cause and prescribe preventive measures.",
      "outlinePoints": [
        "Diagnosis: Phenotypic phase shift from Phase I (primary form) to Phase II (secondary form).",
        "Causes: Repeated in vitro subculturing on artificial media selected for non-luminescent Phase II mutants.",
        "Impact: Phase II lacks antibiotics, toxins, and nutrient factors, aborting nematode reproduction.",
        "Corrective Selection: Streak onto NBTA agar and select dark blue colonies; verify luminescence in the dark.",
        "Prevention: Cryopreserve Master Cell Banks at -80\u00b0C; limit subcultures to 2-3 passages; rejuvenate in vivo."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U3-SUB20",
      "modelAnswer": "Replacing hazardous organophosphates (chlorpyrifos) in temperate apple orchards requires matching the specific ecology and behavioral niches of the subterranean target pests with the physiological adaptations of entomopathogenic nematodes:\n\n**Target Pest Ecological Niches:**\n1. *Root Borer (Dorysthenes hugelii):* Larvae are large, long-lived subterranean cerambycid grubs that tunnel deeply (15 to 40 cm deep) inside woody apple roots and surrounding rhizosphere soils.\n2. *Woolly Apple Aphid (Eriosoma lanigerum):* Form persistent subterranean root colonies that form galls on lateral root systems 10 to 25 cm deep.\n\n**Comparative Evaluation of EPN Candidates:**\n1. **Steinernema carpocapsae Evaluation:**\n   - *Foraging Strategy:* Classic **ambusher**. Nematodes stay within the top 0-2 cm of the soil surface, nictating to catch mobile surface insects. They do not navigate actively into deep soil.\n   - *Penetration Mechanics:* Lacks cuticular teeth; cannot breach the heavily armored, deeply recessed spiracles of cerambycid grubs.\n   - *Verdict for Orchard Roots:* Unsuitable for deep root borers and root aphids because it will remain trapped at the soil surface.\n\n2. **Heterorhabditis bacteriophora Evaluation:**\n   - *Foraging Strategy:* Classic **cruiser**. Highly mobile, active undulator capable of penetrating 30 to 60 cm deep into root zones following volatile root distress signals and carbon dioxide gradients.\n   - *Penetration Mechanics:* Possesses a sharp anterior dorsal cuticular tooth capable of puncturing thin intersegmental membranes of root borer grubs directly into the hemocoel.\n   - *Symbiont Potency:* Harbors *Photorhabdus luminescens*, which secretes potent Tc and Mcf toxins that kill large cerambycid grubs within 48 hours.\n   - *Temperature Tolerance:* Well-adapted to temperate and sub-temperate soils (effective at 12-25\u00b0C).\n\n**Recommended Orchard Implementation Protocol:**\n- Apply **Heterorhabditis bacteriophora** at a dosage of **2.5 x 10^9 IJs/ha**.\n- Delivery: Inject via basin irrigation or drench 5 to 10 liters of nematode suspension around the root basin of each apple tree in autumn (September-October) when soil temperatures are 15-20\u00b0C and grubs are active near feeder roots.\n- Follow with an immediate 20-30 mm irrigation to carry the cruising nematodes deep into root tunnels, achieving residue-free biological root protection.",
      "maxMarks": 8,
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications",
      "questionType": "CASE_STUDY",
      "questionText": "An apple orchardist in Himachal Pradesh seeks to replace synthetic chlorpyrifos soil drenches against woolly apple aphid (Eriosoma lanigerum) and root borer using biological alternatives. Evaluate the suitability of Steinernema carpocapsae vs. Heterorhabditis bacteriophora.",
      "outlinePoints": [
        "Target ecology: Root borer and woolly aphid dwell deep (15-40 cm) in apple root zones.",
        "S. carpocapsae is an ambusher restricted to top 2 cm; ineffective against deep root borers.",
        "H. bacteriophora is a cruiser that actively navigates 30-60 cm deep tracking CO2 cues.",
        "Possesses dorsal tooth to puncture grub intersegmental cuticles, killing grubs in 48 h.",
        "Prescription: Apply H. bacteriophora at 2.5x10^9 IJs/ha around apple tree basins in autumn."
      ],
      "difficulty": "Hard"
    }
  ],
  "flashcards": [
    {
      "id": "ENT203-U3-FC01",
      "front": "What type of genome is characteristic of Baculoviridae?",
      "back": "Circular, supercoiled double-stranded DNA (dsDNA) of 80 to 180 kbp.",
      "hint": "Circular dsDNA",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies"
    },
    {
      "id": "ENT203-U3-FC02",
      "front": "What is the matrix protein of Nucleopolyhedrovirus (NPV) polyhedra?",
      "back": "Polyhedrin, a 31 kDa crystalline protein matrix enclosing dozens to hundreds of virions.",
      "hint": "Polyhedrin",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies"
    },
    {
      "id": "ENT203-U3-FC03",
      "front": "What is the matrix protein of Granulovirus (GV) capsules?",
      "back": "Granulin, a 29 kDa crystalline protein capsule enclosing exactly one virion.",
      "hint": "Granulin",
      "syllabusTopic": "Baculovirus biology: classification, morphology, NPV vs GV, and occlusion bodies"
    },
    {
      "id": "ENT203-U3-FC04",
      "front": "What are the two virion morphotypes produced in the baculovirus life cycle?",
      "back": "Occlusion-Derived Virus (ODV) for oral transmission and Budded Virus (BV) for secondary systemic spread.",
      "hint": "ODV and BV",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction"
    },
    {
      "id": "ENT203-U3-FC05",
      "front": "What envelope glycoprotein mediates systemic infection in Budded Viruses (BV)?",
      "back": "GP64 (or F protein), which mediates low-pH receptor-mediated endosomal entry.",
      "hint": "GP64 glycoprotein",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction"
    },
    {
      "id": "ENT203-U3-FC06",
      "front": "What viral enzymes drive the post-mortem liquefaction ('melting') of caterpillars?",
      "back": "Viral endochitinase (v-chiA) and cathepsin-like cysteine protease (v-cath).",
      "hint": "v-chiA and v-cath",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction"
    },
    {
      "id": "ENT203-U3-FC07",
      "front": "What behavioral disease causes baculovirus-infected larvae to climb to plant tops?",
      "back": "Tree-top disease (Wipfelkrankheit), driven by viral ptp and egt genes altering geotaxis.",
      "hint": "Tree-top disease",
      "syllabusTopic": "Baculovirus infection cycle: midgut entry, systemic spread, and tissue liquefaction"
    },
    {
      "id": "ENT203-U3-FC08",
      "front": "What is the standardized POB value of one Larval Equivalent (1 LE) in India?",
      "back": "1 LE = 6 x 10^9 Polyhedral Occlusion Bodies (POBs).",
      "hint": "6 x 10^9 POBs",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV"
    },
    {
      "id": "ENT203-U3-FC09",
      "front": "What is the standard field application dosage of HaNPV per hectare?",
      "back": "250 to 500 Larval Equivalents (LE) per hectare (1.5 x 10^12 to 3.0 x 10^12 POBs/ha).",
      "hint": "250-500 LE/ha",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV"
    },
    {
      "id": "ENT203-U3-FC10",
      "front": "Why is jaggery/brown sugar (0.5%) added to baculovirus spray solutions?",
      "back": "It acts as a gustatory phagostimulant, compelling caterpillars to feed voraciously on treated leaves.",
      "hint": "Phagostimulant",
      "syllabusTopic": "In vivo production, standardization (Larval Equivalents), and field use of HaNPV and SlNPV"
    },
    {
      "id": "ENT203-U3-FC11",
      "front": "What is the sole free-living, infective soil stage of entomopathogenic nematodes?",
      "back": "The Infective Juvenile (IJ), also called the 3rd-stage dauer larva (J3).",
      "hint": "Dauer Infective Juvenile (IJ)",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria"
    },
    {
      "id": "ENT203-U3-FC12",
      "front": "Which symbiotic bacterium is mutualistically associated with Steinernema nematodes?",
      "back": "Xenorhabdus spp. (e.g., Xenorhabdus nematophila).",
      "hint": "Xenorhabdus",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria"
    },
    {
      "id": "ENT203-U3-FC13",
      "front": "Which symbiotic bacterium is mutualistically associated with Heterorhabditis nematodes?",
      "back": "Photorhabdus luminescens, a Gram-negative bioluminescent bacterium.",
      "hint": "Photorhabdus luminescens",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria"
    },
    {
      "id": "ENT203-U3-FC14",
      "front": "What color do insect cadavers turn when killed by Heterorhabditis bacteriophora?",
      "back": "Brick-red or purple (and bioluminescent in darkness) due to anthraquinones and luciferase.",
      "hint": "Brick-red / Bioluminescent",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria"
    },
    {
      "id": "ENT203-U3-FC15",
      "front": "How does Heterorhabditis mechanically breach host insect cuticle?",
      "back": "Using an anterior terminal cuticular dorsal tooth that punctures intersegmental membranes.",
      "hint": "Dorsal cuticular tooth",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria"
    },
    {
      "id": "ENT203-U3-FC16",
      "front": "What is the sexual reproduction strategy of first-generation Heterorhabditis adults?",
      "back": "Self-fertile protandric hermaphroditism, allowing single-nematode colonization.",
      "hint": "Self-fertile hermaphrodite",
      "syllabusTopic": "Entomopathogenic nematodes (EPN): Steinernema, Heterorhabditis, and symbiotic bacteria"
    },
    {
      "id": "ENT203-U3-FC17",
      "front": "What hunting strategy characterizes Steinernema carpocapsae?",
      "back": "Ambusher strategy: standing erect on tails (nictating) on soil particles to jump onto mobile pests.",
      "hint": "Ambusher / Nictation",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications"
    },
    {
      "id": "ENT203-U3-FC18",
      "front": "What hunting strategy characterizes Heterorhabditis bacteriophora?",
      "back": "Cruiser strategy: actively moving deep through soil pores tracking CO2 and root volatiles.",
      "hint": "Cruiser strategy",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications"
    },
    {
      "id": "ENT203-U3-FC19",
      "front": "What classic laboratory apparatus is used to harvest emerging EPN infective juveniles?",
      "back": "The White trap, using an inverted watch glass draped with filter paper in water.",
      "hint": "White trap",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications"
    },
    {
      "id": "ENT203-U3-FC20",
      "front": "Why must fine spray filters (<50 mesh) be removed when applying EPNs?",
      "back": "Living nematodes (500-1000 \u00b5m) are physically trapped, crushed, and sheared by fine mesh screens.",
      "hint": "Prevents physical shearing of nematodes",
      "syllabusTopic": "EPN foraging strategies, in vivo/in vitro production methods, and field applications"
    }
  ]
};
