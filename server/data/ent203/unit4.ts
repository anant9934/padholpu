import { UnitContent } from "./types";

export const unit4Content: UnitContent = {
  "unitNumber": 4,
  "title": "Botanical Biopesticides",
  "shortDescription": "Neem phytochemistry and azadirachtin modes of action (IGR, antifeedant, sterility), NSKE and commercial formulations, natural pyrethrins, rotenone, secondary botanicals, and environmental degradation.",
  "estimatedReadTimeMinutes": 26,
  "syllabusTopics": [
    "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
    "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
    "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
    "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
    "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics"
  ],
  "notes": {
    "learningObjectives": [
      "Analyze the chemical structure and multi-faceted bioactivities of neem limonoids, emphasizing Azadirachtin as an insect growth regulator (IGR) and antifeedant.",
      "Master the step-by-step on-farm preparation of 5% Neem Seed Kernel Extract (NSKE) and standardization of commercial EC formulations (300 to 50,000 ppm).",
      "Explain the neurotoxic mode of action of natural pyrethrins (Chrysanthemum cinerariifolium), the rapid knockdown effect, and synergism with Piperonyl Butoxide (PBO).",
      "Evaluate mitochondrial Complex I inhibition by rotenone (Derris) and cholinergic stimulation by tobacco nicotine.",
      "Assess secondary botanicals (Pongamia/karanjin, Annona/squamocin, Vitex negundo) and their ecological safety profile regarding non-target organisms and environmental persistence."
    ],
    "sections": [
      {
        "id": "sec-4-1",
        "heading": "1. Neem (Azadirachta indica): Phytochemistry and Active Limonoids",
        "content": "The neem tree (*Azadirachta indica* A. Juss, family Meliaceae) is the most celebrated source of botanical insecticides in world agriculture. Indigenous to the Indian subcontinent, virtually every anatomical part of the tree (seeds, leaves, bark, oil) possesses biologically active secondary metabolites, with the highest concentration residing within the seed kernels (0.2 to 0.6% azadirachtin by weight).\n\n**Key Bioactive Limonoids (Tetranortriterpenoids):**\nOver 300 structurally complex limonoids have been isolated from neem, belonging to the tetranortriterpenoid family:\n1. **Azadirachtin (principally Azadirachtin A and B):** The primary and most potent insecticidal constituent. It is a highly oxygenated C-seco-limonoid containing a decalin ring system joined to a dihydrofuran-furan ether ring.\n2. **Salannin:** A potent gustatory feeding deterrent (antifeedant) that inhibits insect sensory gustatory chemoreceptors without displaying strong developmental growth-disrupting toxicity.\n3. **Nimbin and Nimbidin:** Exhibit broad-spectrum antifungal, antiviral, and moderate repellent activities.\n4. **Meliantriol:** First isolated from *Melia azedarach* and *A. indica*, functions as a powerful locust antifeedant.\n5. **Gedunin:** Possesses potent antimalarial, insecticidal, and antifungal properties.",
        "subsections": [
          {
            "subheading": "Major Bioactive Limonoids of Neem",
            "content": "Profiles and primary biological activities:",
            "table": {
              "headers": [
                "Compound",
                "Chemical Class",
                "Primary Site of Localization",
                "Predominant Mode of Action"
              ],
              "rows": [
                [
                  "Azadirachtin A",
                  "Tetranortriterpenoid / C-seco-limonoid",
                  "Seed kernels (2-4 mg/g)",
                  "Ecdysone antagonist / IGR, antifeedant, sterilant"
                ],
                [
                  "Azadirachtin B",
                  "Tetranortriterpenoid",
                  "Seed kernels (0.5-1 mg/g)",
                  "Insect growth disruption, anti-oviposition"
                ],
                [
                  "Salannin",
                  "Seco-limonoid",
                  "Seed kernels & cold-pressed oil",
                  "Potent sensory antifeedant, gustatory deterrent"
                ],
                [
                  "Nimbin / Nimbidin",
                  "Sulfur-containing triterpenoid",
                  "Bark, seed oil",
                  "Antifungal, antibacterial, deterrent"
                ],
                [
                  "Meliantriol",
                  "Triterpenoid alcohol",
                  "Leaves and unripe fruit pericarp",
                  "Gustatory antifeedant against desert locusts"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-4-2",
        "heading": "2. Physiological and Endocrine Mode of Action of Azadirachtin",
        "content": "Azadirachtin does not kill insects through acute, immediate neurotoxicity. Instead, it operates through a unique, multi-pronged physiological and endocrinological disruption:\n\n**1. Insect Growth Regulation (Endocrine Disruption):**\n- **Inhibition of PTTH Release:** Azadirachtin penetrates the hemolymph and binds with high affinity to neurosecretory cells in the insect brain (corpus cardiacum / corpus allatum complex), arresting the synthesis and pulsatile release of Prothoracicotropic Hormone (PTTH).\n- **Suppression of Ecdysteroid Titers:** Deprived of PTTH stimulation, the prothoracic glands fail to synthesize and secrete ecdysone (the molting hormone). Consequently, hemolymph titers of 20-hydroxyecdysone plummet.\n- **Disruption of Apolysis and Ecdysis:** Insects are unable to initiate apolysis (separation of old cuticle) and ecdysis (shedding of the exuviae). Caterpillars and nymphs remain trapped within their old exoskeletons, die during molting, or emerge as crippled, infertile larval-pupal or pupal-adult intermediates exhibiting twisted, crumpled wings and deformed appendages.\n\n**2. Sensory Antifeedant and Deterrent Action:**\n- At the sensory level, azadirachtin stimulates specialized 'deterrent' gustatory chemosensilla on insect mouthparts (maxillary and labial palps) while concurrently firing inhibitory signals to 'sugar' and 'water' receptor cells. This intense sensory mismatch induces absolute anorexia (starvation avoidance), causing caterpillars to starve to death even when resting on lush host foliage.\n\n**3. Reproductive Sterility and Oviposition Deterrence:**\n- In adult females, azadirachtin interferes with juvenile hormone-dependent vitellogenin synthesis in the fat body and its receptor-mediated uptake by developing oocytes in the ovaries. This causes complete ovarian atrophy, oocyte resorption, reduced fecundity, and egg sterility. Gravid females actively avoid laying eggs on treated surfaces (oviposition deterrence).",
        "subsections": []
      },
      {
        "id": "sec-4-3",
        "heading": "3. Neem Formulations: NSKE 5%, Neem Oil, and Commercial EC",
        "content": "Neem is utilized through traditional on-farm preparations as well as refined industrial formulations standardized under the Insecticides Act 1968:\n\n**1. On-Farm Preparation of Neem Seed Kernel Extract (NSKE 5%):**\n- *Kernel Selection:* 50 kg of well-cured, dried, unblemished neem seed kernels are required for 1 hectare of crop (using 1000 L spray water) or 50 g kernel per liter of water.\n- *Decortication & Grinding:* Seeds are gently pounded to remove the outer fibrous shell, and the inner kernel is ground into a coarse, gritty powder (fine powder forms a gelatinous paste that traps active principles).\n- *Soaking & Extraction:* The powder is tied loosely in a clean muslin cloth bag and suspended overnight (10 to 12 hours) in 10 to 20 liters of water. The bag is repeatedly squeezed to extract the milky white emulsion containing water-soluble azadirachtin, salannin, and nimbin.\n- *Soap Addition & Volume Makeup:* Add 100 g of neutral detergent or bar soap powder (0.1%) to the concentrated milky extract as an emulsifier and wetting agent. The extract is diluted with water to make up the final 1000 liters (5% w/v concentration) and sprayed immediately.\n\n**2. Neem Cake (Solid Organic Matrix):**\nThe residue remaining after oil expelling from neem seeds is 'neem cake'. Rich in sulfur, limonoids (1-2 g/kg), and nitrogen (4-5% N), neem cake serves as an organic soil amendment. It suppresses plant-parasitic nematodes (*Meloidogyne incognita*), kills subterranean white grubs and termites, and acts as a natural **nitrification inhibitor** by suppressing *Nitrosomonas* bacteria, preventing nitrogen leaching and boosting urea efficiency.\n\n**3. Industrial Commercial Neem EC Formulations:**\nCommercial formulations are manufactured by solvent extraction (methanol or ethyl acetate) followed by blending with emulsifiers and epoxidized vegetable oils. Registered under CIB&RC based on certified azadirachtin concentration: 300 ppm (0.03% EC), 1500 ppm (0.15% EC), 10,000 ppm (1.0% EC), and 50,000 ppm (5.0% EC). Typical application rate for 1500 ppm EC is 2.5 to 3.0 ml/liter of water.",
        "subsections": []
      },
      {
        "id": "sec-4-4",
        "heading": "4. Pyrethrins and Rotenone: Neurotoxic and Respiratory Botanicals",
        "content": "**Natural Pyrethrins (Chrysanthemum cinerariifolium):**\nNatural pyrethrum is extracted from the dried flower flower heads (capitula) of the Dalmatian daisy (*Chrysanthemum cinerariifolium*, family Asteraceae). The active insecticidal fraction comprises six structurally related monoterpene cyclopentenolone esters known collectively as **pyrethrins**:\n- *Pyrethrins I group:* Pyrethrin I, Cinerin I, Jasmolin I (esters of chrysanthemic acid).\n- *Pyrethrins II group:* Pyrethrin II, Cinerin II, Jasmolin II (esters of pyrethric acid).\n\n**Mode of Action and Synergism:**\n- *Axonic Poison:* Pyrethrins penetrate the insect cuticle with extreme rapidity, binding to the voltage-gated sodium channels along axonal nerve membranes. They prolong the opening of the activation gates, preventing sodium inactivation. This causes massive, repetitive axonal discharges followed by complete conduction block, producing dramatic, instantaneous muscular tremors and **rapid knockdown** (insects drop paralyzed within 1 to 5 minutes).\n- *Recovery and Synergism with PBO:* However, insects possess endogenous detoxification enzymes\u2014principally cytochrome P450 monooxygenases (CYP450)\u2014that rapidly metabolize pyrethrins, allowing 'knocked-down' insects to detoxify the poison and fully recover within hours. To overcome this, commercial pyrethrin formulations are synergized with **Piperonyl Butoxide (PBO)** (typically at a 1:5 to 1:10 ratio). PBO acts as a suicide substrate that irreversibly inhibits CYP450 enzymes, preventing metabolic recovery and ensuring 100% lethal mortality.\n- *Photolability:* Natural pyrethrins are rapidly degraded by solar UV light, having a field half-life of only 1 to 2 hours, making them ideal for harvest-day sprays and indoor pest control.\n\n**Rotenone (Derris elliptica and Lonchocarpus spp.):**\nRotenone is an isoflavonoid extracted from the roots of fabaceous tropical leguminous vines (*Derris elliptica*, *Lonchocarpus nicou*).\n- *Mode of Action:* Cellular respiratory poison. Rotenone specifically binds to and inhibits **Complex I (NADH:ubiquinone oxidoreductase)** of the mitochondrial respiratory electron transport chain, blocking electron transfer from iron-sulfur clusters to ubiquinone. Cellular ATP generation halts, resulting in metabolic collapse and death.\n- *Piscicidal Hazard:* Highly toxic to fish and aquatic life (LC50 < 10 \u00b5g/L); its use is prohibited near water bodies.",
        "subsections": []
      },
      {
        "id": "sec-4-5",
        "heading": "5. Other Plant Extracts, Degradation Dynamics, and Safety",
        "content": "**Additional Botanical Formulations in Agriculture:**\n1. **Karanj (*Pongamia pinnata* / *Millettia pinnata*, family Fabaceae):** Seeds yield 25-35% karanj oil containing the furanoflavonoid **karanjin**. Karanjin acts as a contact insecticide, synergist, oviposition deterrent, and nitrification inhibitor. Often tank-mixed 1:1 with neem oil to enhance field efficacy against whiteflies and mites.\n2. **Custard Apple (*Annona squamosa*, family Annonaceae):** Seeds contain polyketide secondary metabolites termed **annonaceous acetogenins** (e.g., squamocin, annonin). Acetogenins are powerful mitochondrial Complex I inhibitors causing strong contact and antifeedant action against aphids, thrips, and caterpillars.\n3. **Tobacco (*Nicotiana tabacum*, family Solanaceae):** Leaves contain the pyridine alkaloid **nicotine** (1-8%). Nicotine acts as an agonist of nicotinic acetylcholine receptors (nAChR) in central nervous system synapses, causing persistent depolarization, convulsions, and death. High mammalian toxicity (oral LD50 ~50 mg/kg) led to its restriction.\n4. **Indigenous Extracts:** Garlic-chilli-kerosene extracts (allicin and capsaicin acting as irritants, repellents, and membrane disruptors); *Vitex negundo* (nirgundi) leaf extracts for grain protection against storage bruchids; *Calotropis procera* (ak) containing cardiac glycosides (calotropin).\n\n**Environmental Fate and Ecological Safety:**\n- **Photolytic Breakdown:** Botanical pesticides are rapidly decomposed by solar ultraviolet radiation and phylloplane microbial action, yielding environmentally safe polar degradation products within 24 to 72 hours with zero persistent bioaccumulation in food chains.\n- **Non-Target Safety:** Neem and botanical extracts exhibit exceptional safety toward adult honeybees (*Apis mellifera*), predatory spiders, predatory mites (*Phytoseiidae*), and parasitoid wasps (*Trichogramma*, *Bracon*) when applied at recommended agronomic doses, and possess low mammalian toxicity (oral LD50 of azadirachtin >5,000 mg/kg).",
        "subsections": []
      }
    ],
    "keyTakeaways": [
      "Azadirachtin (A & B) from neem seed kernels is a tetranortriterpenoid acting as an ecdysone antagonist and antifeedant.",
      "Azadirachtin arrests PTTH release from the corpus cardiacum, depleting 20-hydroxyecdysone and preventing apolysis and ecdysis.",
      "NSKE 5% is prepared by soaking 50 g coarse neem kernel powder per liter of water with 0.1% soap emulsifier.",
      "Neem cake serves as an organic fertilizer, soil nematicide, white grub suppressant, and nitrification inhibitor.",
      "Natural pyrethrins from Chrysanthemum flowers open axonal sodium channels to induce rapid knockdown.",
      "Piperonyl Butoxide (PBO) synergizes pyrethrins by inhibiting insect cytochrome P450 detoxification enzymes.",
      "Rotenone inhibits mitochondrial Complex I, while nicotine stimulates nicotinic acetylcholine receptors.",
      "Botanical pesticides degrade rapidly under solar UV radiation, leaving zero residues and sparing non-target honeybees."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Neem sprays provide instant knockdown of chewing caterpillars within minutes of application.",
        "reality": "Azadirachtin is an insect growth regulator (IGR) and antifeedant, not a neurotoxin. Caterpillars stop feeding, but actual death occurs during molting or through starvation over 3 to 7 days."
      },
      {
        "myth": "Making NSKE requires grinding neem kernels into an ultra-fine flour.",
        "reality": "Grinding into fine flour releases excessive mucilage and oil that form a sticky gelatinous paste, clogging filters and trapping azadirachtin. Kernels must be coarsely crushed for optimal aqueous extraction."
      },
      {
        "myth": "Natural botanical pesticides are completely non-toxic to all non-target animals because they are organic.",
        "reality": "Rotenone is extremely toxic to fish (used as a piscicide), and nicotine has high mammalian toxicity. 'Natural' origin does not automatically equate to universal safety across all taxonomic classes."
      }
    ],
    "summary": "Botanical biopesticides offer renewable, eco-friendly insect management based on plant secondary metabolites. The premier botanical agent is neem (Azadirachta indica), whose key active limonoid, azadirachtin, acts as an ecdysone-antagonizing insect growth regulator and sensory antifeedant, formulated on-farm as NSKE 5% or commercially as standardized ECs (300 to 50,000 ppm). Pyrethrins from Chrysanthemum cinerariifolium provide rapid knockdown via axonal sodium channel disruption, synergized by PBO to block cytochrome P450 detoxification. Rotenone from Derris disrupts mitochondrial Complex I, while auxiliary botanicals (Pongamia, Annona, Vitex) contribute diverse bioactivities. Decomposing rapidly under solar UV without bioaccumulation, botanicals preserve natural enemies and provide a zero-residue solution for sustainable IPM."
  },
  "mcqs": [
    {
      "id": "ENT203-U4-MCQ01",
      "options": {
        "A": "Azadirachta indica",
        "B": "Chrysanthemum cinerariifolium",
        "C": "Derris elliptica",
        "D": "Nicotiana tabacum"
      },
      "correctOption": "B",
      "explanation": "Natural pyrethrins are extracted from the flower heads (capitula) of the Dalmatian pyrethrum daisy, Chrysanthemum cinerariifolium (Asteraceae).",
      "difficulty": "Easy",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What is the botanical source of natural pyrethrins?"
    },
    {
      "id": "ENT203-U4-MCQ02",
      "options": {
        "A": "Organophosphate",
        "B": "Tetranortriterpenoid (limonoid)",
        "C": "Synthetic pyrethroid",
        "D": "Chlorinated hydrocarbon"
      },
      "correctOption": "B",
      "explanation": "Azadirachtin is a highly oxygenated C-seco-tetranortriterpenoid (limonoid) isolated from the seed kernels of Azadirachta indica.",
      "difficulty": "Easy",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "Which chemical family does the active neem compound Azadirachtin belong to?"
    },
    {
      "id": "ENT203-U4-MCQ03",
      "options": {
        "A": "Bark",
        "B": "Foliar leaves",
        "C": "Seed kernels",
        "D": "Root tips"
      },
      "correctOption": "C",
      "explanation": "Neem seed kernels possess the highest concentration of azadirachtin (typically 2 to 4 mg per gram of dried kernel).",
      "difficulty": "Easy",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "Which anatomical part of the neem tree contains the highest concentration of Azadirachtin?"
    },
    {
      "id": "ENT203-U4-MCQ04",
      "options": {
        "A": "Rapid inhibition of acetylcholinesterase",
        "B": "Insect Growth Regulator (IGR) and ecdysone antagonist",
        "C": "Destruction of flight muscles",
        "D": "Blocking of water absorption in Malpighian tubules"
      },
      "correctOption": "B",
      "explanation": "Azadirachtin functions primarily as an Insect Growth Regulator (IGR) by disrupting ecdysteroid titers and acting as a sensory antifeedant.",
      "difficulty": "Easy",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "What is the primary physiological mode of action of Azadirachtin in insect larvae?"
    },
    {
      "id": "ENT203-U4-MCQ05",
      "options": {
        "A": "500 grams",
        "B": "5 kilograms",
        "C": "50 kilograms",
        "D": "100 kilograms"
      },
      "correctOption": "B",
      "explanation": "A 5% NSKE solution requires 50 grams of kernels per liter of water, which equals 5.0 kg of dried neem seed kernels for 100 liters of spray.",
      "difficulty": "Easy",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "What quantity of neem seed kernels is required to prepare 100 liters of 5% Neem Seed Kernel Extract (NSKE)?"
    },
    {
      "id": "ENT203-U4-MCQ06",
      "options": {
        "A": "To act as an emulsifier and wetting agent that facilitates suspension and leaf spreading",
        "B": "To kill all insect pests directly on contact",
        "C": "To neutralize the color of the extract",
        "D": "To increase the shelf life for 10 years"
      },
      "correctOption": "A",
      "explanation": "Soap acts as a surfactant and emulsifier, lowering surface tension so the milky botanical extract spreads uniformly over waxy plant leaves.",
      "difficulty": "Easy",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "What is the primary role of adding soap powder or detergent (0.1%) during the preparation of NSKE?"
    },
    {
      "id": "ENT203-U4-MCQ07",
      "options": {
        "A": "Rapid knockdown effect (instant paralysis within 1 to 5 minutes)",
        "B": "Mummification over 10 days",
        "C": "Gradual color change to green",
        "D": "Formation of white powdery spores"
      },
      "correctOption": "A",
      "explanation": "Natural pyrethrins cause explosive axonal firing in nerves, inducing rapid loss of motor coordination and immediate knockdown within minutes.",
      "difficulty": "Easy",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What dramatic symptom is characteristic of natural pyrethrin poisoning in flying insects?"
    },
    {
      "id": "ENT203-U4-MCQ08",
      "options": {
        "A": "DDT",
        "B": "Piperonyl Butoxide (PBO)",
        "C": "Copper oxychloride",
        "D": "Urea"
      },
      "correctOption": "B",
      "explanation": "Piperonyl Butoxide (PBO) is added as a synergist to inhibit insect cytochrome P450 enzymes that would otherwise detoxify pyrethrins.",
      "difficulty": "Easy",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "Which chemical compound is standardly combined as a synergist with natural pyrethrins?"
    },
    {
      "id": "ENT203-U4-MCQ09",
      "options": {
        "A": "Roots of Derris and Lonchocarpus species",
        "B": "Flower petals of Tagetes erecta",
        "C": "Leaves of Eucalyptus globulus",
        "D": "Bark of Cinchona officinalis"
      },
      "correctOption": "A",
      "explanation": "Rotenone is extracted from the dried roots of tropical leguminous plants, predominantly Derris elliptica and Lonchocarpus nicou.",
      "difficulty": "Easy",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "From which plant part is rotenone commercially extracted?"
    },
    {
      "id": "ENT203-U4-MCQ10",
      "options": {
        "A": "It promotes massive blue-green algal blooms",
        "B": "It is exceptionally toxic to fish and aquatic gill-breathing organisms (piscicide)",
        "C": "It corrodes fishing boats",
        "D": "It dissolves aquatic plants"
      },
      "correctOption": "B",
      "explanation": "Rotenone is readily absorbed across fish gills and inhibits mitochondrial respiration at extremely low concentrations (LC50 < 10 ppb).",
      "difficulty": "Easy",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "Why is the use of rotenone strictly forbidden near rivers, ponds, and fish farms?"
    },
    {
      "id": "ENT203-U4-MCQ11",
      "options": {
        "A": "Caffeine",
        "B": "Nicotine",
        "C": "Quinine",
        "D": "Morphine"
      },
      "correctOption": "B",
      "explanation": "Tobacco leaves and stems contain the pyridine alkaloid nicotine (1 to 8%), historically used as a contact insecticide.",
      "difficulty": "Easy",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What active botanical alkaloid is present in tobacco (Nicotiana tabacum) waste extracts?"
    },
    {
      "id": "ENT203-U4-MCQ12",
      "options": {
        "A": "Karanjin",
        "B": "Rotenone",
        "C": "Azadirachtin",
        "D": "Pyrethrin"
      },
      "correctOption": "A",
      "explanation": "Karanjin is the major active furanoflavonoid compound in the seed oil of Pongamia pinnata (karanj tree).",
      "difficulty": "Easy",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What active furanoflavonoid is responsible for the insecticidal properties of Karanj (Pongamia pinnata)?"
    },
    {
      "id": "ENT203-U4-MCQ13",
      "options": {
        "A": "Annonaceous acetogenins (e.g., squamocin)",
        "B": "Organophosphates",
        "C": "Pyrethrins",
        "D": "Lignosulfonates"
      },
      "correctOption": "A",
      "explanation": "Custard apple seeds contain annonaceous acetogenins, notably squamocin and annonin, which inhibit mitochondrial energy generation.",
      "difficulty": "Easy",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What active insecticidal principles are found in custard apple (Annona squamosa) seeds?"
    },
    {
      "id": "ENT203-U4-MCQ14",
      "options": {
        "A": "Solar ultraviolet (UV) radiation and microbial action",
        "B": "Atmospheric nitrogen gas",
        "C": "Earth's magnetic field",
        "D": "Plant photosynthesis"
      },
      "correctOption": "A",
      "explanation": "Natural botanical molecules possess conjugated double bonds and photolabile rings that break down rapidly under solar UV rays and leaf microbes.",
      "difficulty": "Easy",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What is the primary environmental factor causing the rapid degradation of botanical insecticides in field conditions?"
    },
    {
      "id": "ENT203-U4-MCQ15",
      "options": {
        "A": "They kill bees instantly",
        "B": "They exhibit high selectivity, sparing adult honeybees and predatory arthropods at agronomic doses",
        "C": "They attract swarms of locusts",
        "D": "They act as bee food"
      },
      "correctOption": "B",
      "explanation": "Neem limonoids target chewing/phloem-sucking pests through ingestion, sparing non-target foraging honeybees and beneficial predators.",
      "difficulty": "Easy",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "What is a major advantage of neem-based biopesticides regarding beneficial honeybees and predatory spiders?"
    },
    {
      "id": "ENT203-U4-MCQ16",
      "options": {
        "A": "It acts as a nitrification inhibitor, slowing conversion of ammonium to nitrate and reducing leaching losses",
        "B": "It immediately converts water into ammonia gas",
        "C": "It removes all soil nitrogen",
        "D": "It replaces phosphorus fertilizers completely"
      },
      "correctOption": "A",
      "explanation": "Neem cake limonoids suppress Nitrosomonas and Nitrobacter bacteria, retarding nitrification and increasing urea nitrogen efficiency.",
      "difficulty": "Easy",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "What is the primary agricultural benefit of applying neem cake to soil in nitrogen management?"
    },
    {
      "id": "ENT203-U4-MCQ17",
      "options": {
        "A": "1500 ppm (0.15% EC) or 10,000 ppm (1% EC)",
        "B": "500,000 ppm (50% EC)",
        "C": "0.001 ppm",
        "D": "Neem formulations contain zero ppm azadirachtin"
      },
      "correctOption": "A",
      "explanation": "Standard commercial formulations registered with CIB&RC are commonly standardized to 300 ppm, 1500 ppm (0.15%), 10,000 ppm (1%), or 50,000 ppm (5%).",
      "difficulty": "Easy",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "What is the typical concentration of Azadirachtin in standard commercial 'NeemAzal' or neem EC formulations sold in India?"
    },
    {
      "id": "ENT203-U4-MCQ18",
      "options": {
        "A": "Salannin",
        "B": "Cellulose",
        "C": "Starch",
        "D": "Lignin"
      },
      "correctOption": "A",
      "explanation": "Salannin is a potent gustatory feeding deterrent that strongly suppresses feeding behavior without displaying high acute developmental toxicity.",
      "difficulty": "Easy",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "Which neem limonoid is primarily renowned for its intense sensory antifeedant action on insect mouthparts?"
    },
    {
      "id": "ENT203-U4-MCQ19",
      "options": {
        "A": "Vitex negundo (Nirgundi)",
        "B": "Saccharum officinarum",
        "C": "Oryza sativa",
        "D": "Zea mays"
      },
      "correctOption": "A",
      "explanation": "Dried leaves of Vitex negundo (Nirgundi) emit volatile monoterpenes and sesquiterpenes that repel bruchid beetles in grain storage bins.",
      "difficulty": "Easy",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "Which indigenous shrub leaf is traditionally mixed with stored grains in Indian villages to repel pulse beetles (Callosobruchus chinensis)?"
    },
    {
      "id": "ENT203-U4-MCQ20",
      "options": {
        "A": "Voltage-gated sodium channels along the nerve axon",
        "B": "Midgut digestive enzymes",
        "C": "Cuticular chitin synthesis complex",
        "D": "Nuclear DNA polymerase"
      },
      "correctOption": "A",
      "explanation": "Pyrethrins bind to voltage-gated sodium channels on axonal membranes, keeping them open and causing repetitive nerve firing.",
      "difficulty": "Easy",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What is the primary target site of natural pyrethrins within the insect nervous system?"
    },
    {
      "id": "ENT203-U4-MCQ21",
      "options": {
        "A": "By inhibiting the release of prothoracicotropic hormone (PTTH) from the corpus cardiacum, depleting hemolymph ecdysteroids",
        "B": "By dissolving all chitin in the cuticle instantly",
        "C": "By converting juvenile hormone into cholesterol",
        "D": "By crystallizing the hemolymph"
      },
      "correctOption": "B",
      "explanation": "Azadirachtin binds to neurosecretory cells, blocking PTTH release, which prevents prothoracic glands from producing ecdysone, halting apolysis and ecdysis.",
      "difficulty": "Medium",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "How does Azadirachtin biochemically interfere with the insect molting process?"
    },
    {
      "id": "ENT203-U4-MCQ22",
      "options": {
        "A": "Formation of crippled larval-pupal intermediates with crumpled wings and trapped exuviae",
        "B": "Doubling of body length with four pairs of extra wings",
        "C": "Immediate conversion into an adult queen bee",
        "D": "Complete loss of digestive tracts"
      },
      "correctOption": "A",
      "explanation": "Disruption of the ecdysone-juvenile hormone balance prevents proper ecdysis, producing deformed larval-pupal intermediates unable to emerge or reproduce.",
      "difficulty": "Medium",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "What morphological abnormality is typically observed when a caterpillar is exposed to sub-lethal concentrations of Azadirachtin during its final instar?"
    },
    {
      "id": "ENT203-U4-MCQ23",
      "options": {
        "A": "Fine flour releases high quantities of oil and mucilage that form an impassable gelatinous paste, clogging filters and trapping azadirachtin",
        "B": "Fine flour explodes when mixed with water",
        "C": "Azadirachtin is destroyed by mechanical grinding",
        "D": "Coarse powder changes water into kerosene"
      },
      "correctOption": "A",
      "explanation": "Pulverizing into fine powder expels sticky mucilage and oil that form a colloid, impeding aqueous diffusion of water-soluble limonoids and clogging filter cloth.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "Why must neem seed kernels be COARSELY crushed rather than pulverized into a fine flour when preparing NSKE 5%?"
    },
    {
      "id": "ENT203-U4-MCQ24",
      "options": {
        "A": "It acts as a competitive suicide inhibitor of microsomal Cytochrome P450 monooxygenases (CYP450)",
        "B": "It accelerates acetylcholinesterase breakdown",
        "C": "It removes sodium ions from the insect body",
        "D": "It dissolves the insect wing joints"
      },
      "correctOption": "A",
      "explanation": "PBO metabolite complexes with the heme iron of cytochrome P450 enzymes, blocking the oxidative detoxification of pyrethrins.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "How does Piperonyl Butoxide (PBO) biochemically prevent insects from recovering after natural pyrethrin knockdown?"
    },
    {
      "id": "ENT203-U4-MCQ25",
      "options": {
        "A": "Complex I (NADH:ubiquinone oxidoreductase)",
        "B": "Complex II (Succinate dehydrogenase)",
        "C": "Complex IV (Cytochrome c oxidase)",
        "D": "Complex V (ATP synthase)"
      },
      "correctOption": "A",
      "explanation": "Rotenone blocks the transfer of electrons from the iron-sulfur centers of Complex I to ubiquinone (coenzyme Q), terminating ATP synthesis.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "Which specific respiratory enzyme complex in the inner mitochondrial membrane is inhibited by Rotenone?"
    },
    {
      "id": "ENT203-U4-MCQ26",
      "options": {
        "A": "Agonist binding to nicotinic acetylcholine receptors (nAChR), causing continuous synaptic stimulation, convulsions, and desensitization paralysis",
        "B": "Inhibition of GABA receptors causing muscle flaccidity",
        "C": "Direct block of axonal chloride channels",
        "D": "Destruction of the blood-brain barrier"
      },
      "correctOption": "A",
      "explanation": "Nicotine mimics acetylcholine, binding to post-synaptic nAChRs; because acetylcholinesterase cannot degrade it, uncontrolled firing leads to paralysis.",
      "difficulty": "Medium",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What is the neurotoxic mechanism of Nicotine in insects?"
    },
    {
      "id": "ENT203-U4-MCQ27",
      "options": {
        "A": "Azadirachtin undergoes rapid acid-catalyzed degradation, photolysis, and isomerization into inactive isoazadirachtin upon UV exposure",
        "B": "To make the product smell like gasoline",
        "C": "To prevent farmers from drinking the formulation",
        "D": "To increase the boiling point above 500\u00b0C"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin is unstable in aqueous and acidic media and photolabile under UV; epoxidized oils act as acid scavengers and photostabilizers.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "Why are commercial neem EC formulations typically stabilized using epoxidized vegetable oils and UV absorbers?"
    },
    {
      "id": "ENT203-U4-MCQ28",
      "options": {
        "A": "It disrupts juvenile hormone-regulated vitellogenin synthesis in the fat body and blocks vitellogenin uptake by developing oocytes",
        "B": "It physically cements the ovipositor shut",
        "C": "It converts all female embryos into males",
        "D": "It dissolves the spermatheca"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin inhibits vitellogenin production and oocyte incorporation, resulting in ovarian atrophy, oocyte resorption, and non-viable eggs.",
      "difficulty": "Medium",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "How does Azadirachtin induce reproductive sterility in adult female insects?"
    },
    {
      "id": "ENT203-U4-MCQ29",
      "options": {
        "A": "Rotenone",
        "B": "Azadirachtin",
        "C": "Pyrethrin I",
        "D": "Allicin"
      },
      "correctOption": "A",
      "explanation": "Rotenone is an isoflavonoid extracted from the roots of Derris elliptica and Lonchocarpus species.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "Which of the following compounds is an active insecticidal constituent extracted from the roots of Derris elliptica?"
    },
    {
      "id": "ENT203-U4-MCQ30",
      "options": {
        "A": "1 to 2 hours",
        "B": "3 to 4 months",
        "C": "1 to 2 years",
        "D": "10 years"
      },
      "correctOption": "A",
      "explanation": "Natural pyrethrins are exceptionally photolabile; solar UV radiation degrades them into non-toxic photoproducts within 1 to 2 hours.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What is the typical field half-life of natural pyrethrins exposed to bright summer sunlight on crop canopies?"
    },
    {
      "id": "ENT203-U4-MCQ31",
      "options": {
        "A": "Cold pressing avoids thermal degradation of heat-sensitive azadirachtin and retains higher levels of volatile deterrent terpenes",
        "B": "Solvent extraction destroys all triglycerides",
        "C": "Cold-pressed oil contains synthetic cypermethrin",
        "D": "Solvent-extracted oil cannot dissolve in water"
      },
      "correctOption": "A",
      "explanation": "High temperatures during solvent stripping denature azadirachtin, whereas hydraulic cold pressing preserves fragile tetranortriterpenoids intact.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "Why is cold-pressed neem oil superior in bioefficacy to solvent-extracted neem oil?"
    },
    {
      "id": "ENT203-U4-MCQ32",
      "options": {
        "A": "Capsaicin and allicin cause sensory irritation and repellency, while kerosene and soap dissolve epicuticular waxes causing desiccation",
        "B": "It inhibits bacterial protein synthesis in the leaf",
        "C": "It acts as a systemic organophosphate",
        "D": "It attracts insect predators with sweet aromas"
      },
      "correctOption": "A",
      "explanation": "The mixture combines irritant/antifeedant phytochemistry (capsaicin, diallyl disulfide) with aliphatic hydrocarbons that disrupt protective cuticular wax.",
      "difficulty": "Medium",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What is the primary mode of action of garlic-chilli kerosene extract against soft-bodied sucking insects?"
    },
    {
      "id": "ENT203-U4-MCQ33",
      "options": {
        "A": "Pyrethrin II",
        "B": "Pyrethrin I",
        "C": "Jasmolin II",
        "D": "Cinerin I"
      },
      "correctOption": "A",
      "explanation": "Pyrethrins II (especially Pyrethrin II) exhibit the most rapid knockdown activity, whereas Pyrethrins I (Pyrethrin I) provide greater lethal killing power.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "Which of the six natural pyrethrin esters is primarily responsible for the fastest knockdown activity?"
    },
    {
      "id": "ENT203-U4-MCQ34",
      "options": {
        "A": "It stimulates deterrent/bitter receptor cells while simultaneously inhibiting sugar and inositol receptor neurons",
        "B": "It paralyzes the taste buds permanently by freezing them",
        "C": "It converts bitter signals into feeding stimulants",
        "D": "It dissolves the caterpillar's mouthparts"
      },
      "correctOption": "A",
      "explanation": "Electrophysiological studies demonstrate that azadirachtin fires 'deterrent' sensilla and blocks sugar/water sensilla, producing profound feeding inhibition.",
      "difficulty": "Medium",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "How does Azadirachtin affect the sensory gustatory chemoreceptors of phytophagous caterpillars?"
    },
    {
      "id": "ENT203-U4-MCQ35",
      "options": {
        "A": "1500 ppm (1.5 g/kg)",
        "B": "100 ppm",
        "C": "10,000 ppm",
        "D": "50,000 ppm"
      },
      "correctOption": "A",
      "explanation": "A 0.15% EC formulation is statutorily standardized under the Insecticides Act to contain a minimum active azadirachtin content of 1500 ppm.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "What is the statutory minimum Azadirachtin content required by CIB&RC for commercial 0.15% EC neem formulations?"
    },
    {
      "id": "ENT203-U4-MCQ36",
      "options": {
        "A": "Early instars of Helicoverpa armigera, Spodoptera litura, and Plutella xylostella",
        "B": "Soil-dwelling earthworms",
        "C": "Predatory mirid bugs",
        "D": "Adult honeybees"
      },
      "correctOption": "A",
      "explanation": "Neem is exceptionally lethal to early-instar lepidopteran caterpillars, suppressing feeding and disrupting molting into later destructive instars.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "Which pest group is particularly susceptible to Neem Seed Kernel Extract (NSKE 5%) sprays in vegetable cultivation?"
    },
    {
      "id": "ENT203-U4-MCQ37",
      "options": {
        "A": "Karanjin acts as a synergistic adjuvant, enhancing cuticular penetration and broadening efficacy against whiteflies and mites",
        "B": "The mixture turns into solid plastic on the leaves",
        "C": "Pongamia oil eliminates the need for water",
        "D": "The combination neutralizes sunlight"
      },
      "correctOption": "A",
      "explanation": "Karanj oil contains furanoflavonoids that synergize neem limonoids, accelerating cuticular penetration and providing superior control of sucking pests.",
      "difficulty": "Medium",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "Why is the combination of Neem oil with Pongamia (Karanj) oil widely practiced in IPM?"
    },
    {
      "id": "ENT203-U4-MCQ38",
      "options": {
        "A": "It ceases feeding completely and starves to death even in the presence of preferred food foliage",
        "B": "Its wings immediately fall off",
        "C": "It undergoes instantaneous liquefaction",
        "D": "It lays thousands of sterile eggs"
      },
      "correctOption": "A",
      "explanation": "Salannin causes complete gustatory deterrence (anorexia); caterpillars refuse to eat and die of progressive inanition and starvation.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "What happens when an insect larva ingests an antifeedant dosage of Salannin?"
    },
    {
      "id": "ENT203-U4-MCQ39",
      "options": {
        "A": "Zero persistent residues due to rapid photolysis and extremely short pre-harvest intervals (PHI of 0-1 day)",
        "B": "They add sweet flavors to the fruit",
        "C": "They act as chemical preservatives preventing rot",
        "D": "They cannot be detected by chemical instruments"
      },
      "correctOption": "A",
      "explanation": "Because natural pyrethrins photolyze into harmless polar fragments within hours, they leave no hazardous residues, allowing a 0-day pre-harvest interval.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What safety property makes natural pyrethrins suitable for application on fruits and vegetables right up to harvest day?"
    },
    {
      "id": "ENT203-U4-MCQ40",
      "options": {
        "A": "Extremely low mammalian toxicity (acute oral LD50 in rats > 5,000 mg/kg)",
        "B": "High acute mammalian toxicity (LD50 < 5 mg/kg)",
        "C": "Potent neurotoxin in humans",
        "D": "Causes immediate skin ulceration"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin displays remarkable mammalian safety, with an oral LD50 exceeding 5,000 mg/kg, classifying it in WHO Class IV (unlikely to present acute hazard).",
      "difficulty": "Medium",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "Which of the following describes the mammalian toxicity profile of pure Azadirachtin?"
    },
    {
      "id": "ENT203-U4-MCQ41",
      "options": {
        "A": "They provide broad-spectrum antifungal and antimicrobial resistance against opportunistic pathogens",
        "B": "They synthesize nitrogen for plant growth",
        "C": "They attract herbivorous caterpillars",
        "D": "They act as water storage polymers"
      },
      "correctOption": "A",
      "explanation": "Nimbin and nimbidin exhibit marked fungicidal and bactericidal activities, protecting neem seeds and tissues against fungal rots and pathogens.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "What is the role of sulfur-containing limonoids like Nimbin in the neem tree's defense system?"
    },
    {
      "id": "ENT203-U4-MCQ42",
      "options": {
        "A": "Synthetic pyrethroids are photostable, persist in soil and water for months, and cause high mortality to non-target aquatic organisms and natural enemies",
        "B": "Natural pyrethrins are manufactured from petroleum",
        "C": "Synthetic pyrethroids cannot kill insects",
        "D": "Natural pyrethrins bioaccumulate in human adipose tissue"
      },
      "correctOption": "A",
      "explanation": "Halogenated synthetic pyrethroids were designed for photostability; this persistence leads to bioaccumulation, secondary pest resurgence, and aquatic toxicity.",
      "difficulty": "Medium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "Why is the use of synthetic pyrethroids (e.g., deltamethrin) ecologically more hazardous than natural pyrethrins?"
    },
    {
      "id": "ENT203-U4-MCQ43",
      "options": {
        "A": "High-Performance Liquid Chromatography (HPLC) with UV/diode array detection at 214-217 nm",
        "B": "Flame atomic absorption spectroscopy",
        "C": "Titration against silver nitrate",
        "D": "Visual color comparison with copper sulfate"
      },
      "correctOption": "A",
      "explanation": "Reverse-phase HPLC (C18 column, acetonitrile-water mobile phase) with UV detection at 214-217 nm is the CIB&RC standard for azadirachtin determination.",
      "difficulty": "Medium",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "Which analytical technique is standardly utilized in certified quality control laboratories to quantify Azadirachtin A and B in commercial neem EC products?"
    },
    {
      "id": "ENT203-U4-MCQ44",
      "options": {
        "A": "Minimal adverse effect; adult worker bees metabolize limonoids, while nursing larvae inside sealed combs avoid exposure",
        "B": "Immediate 100% hive mortality within 5 minutes",
        "C": "Conversion of honey into acetic acid",
        "D": "Destruction of the queen's stinger"
      },
      "correctOption": "A",
      "explanation": "Agronomic concentrations of neem have negligible acute toxicity to adult foragers, and brood comb protection prevents larval exposure.",
      "difficulty": "Medium",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "What physiological symptom is observed in honeybees exposed to direct field sprays of neem oil at agronomic rates?"
    },
    {
      "id": "ENT203-U4-MCQ45",
      "options": {
        "A": "Calotropis procera (Madar / Ak)",
        "B": "Mangifera indica",
        "C": "Musa paradisiaca",
        "D": "Solanum tuberosum"
      },
      "correctOption": "A",
      "explanation": "Calotropis procera (Asclepiadaceae) contains cardenolides (calotropin, calactin) that inhibit sodium-potassium ATPase, repelling herbivores.",
      "difficulty": "Medium",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "Which of the following plants contains toxic cardiac glycosides (calotropin and calactin) utilized in traditional botanical pest suppression?"
    },
    {
      "id": "ENT203-U4-MCQ46",
      "options": {
        "A": "Its rigid conformation comprising a highly oxygenated decalin core fused via a central bond to a potent dihydrofuran-furan hemiacetal moiety, mimicking steroid hormone epitopes",
        "B": "Its linear polyacetylene chain that inserts into DNA grooves",
        "C": "Its heavy content of radioactive sulfur isotopes",
        "D": "Its ability to polymerize into rubber inside insect vessels"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin's decalin and dihydrofuran-furan rings create a rigid, highly oxygenated scaffold with 16 stereocenters, precisely docking into ecdysteroid-binding pockets.",
      "difficulty": "Hard",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "What is the exact stereochemical and structural reason why Azadirachtin exhibits such extraordinary binding affinity to insect neurosecretory receptor sites?"
    },
    {
      "id": "ENT203-U4-MCQ47",
      "options": {
        "A": "Exposure to alkaline pH (>8.0) or polar protic environments, which trigger opening of the hemiacetal ring and skeletal rearrangement",
        "B": "Freezing at -20\u00b0C in pure nitrogen",
        "C": "Contact with pure dry silica sand",
        "D": "Storage in hermetic dark glass bottles"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin is base-labile; alkaline hydrolysis attacks the C-seco hemiacetal functionality, converting active azadirachtin into inactive isoazadirachtin.",
      "difficulty": "Hard",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionText": "Under what specific chemical conditions does Azadirachtin A undergo irreversible isomerization into the biologically inactive derivative isoazadirachtin?"
    },
    {
      "id": "ENT203-U4-MCQ48",
      "options": {
        "A": "It binds to the lipid-exposed cavity between transmembrane segment 4 (S4) of Domain II and S5 of Domain I, sterically arresting channel deactivation",
        "B": "It cleaves the inactivation loop connecting Domain III and IV",
        "C": "It acts as a competitive antagonist of extracellular sodium ions",
        "D": "It phosphorylates the channel pore selectivity filter"
      },
      "correctOption": "A",
      "explanation": "Pyrethrins bind to the hydrophobic cavity of the VGSC alpha-subunit, preventing voltage sensor S4 movement and trapping the channel in a persistent open state.",
      "difficulty": "Hard",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What is the molecular mechanism by which natural Pyrethrin I delays the closing of the activation gate of voltage-gated sodium channels (VGSC)?"
    },
    {
      "id": "ENT203-U4-MCQ49",
      "options": {
        "A": "The methylenedioxyphenyl (benzodioxole) ring",
        "B": "The polyalkoxy ether side chain",
        "C": "The aromatic carboxyl group",
        "D": "The terminal halogen atom"
      },
      "correctOption": "A",
      "explanation": "CYP450 hydroxylates the methylene carbon of the methylenedioxyphenyl group, forming a stable carbene intermediate that coordinates irreversibly with Fe2+ heme.",
      "difficulty": "Hard",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "In the chemical synthesis and storage of Piperonyl Butoxide (PBO), what functional moiety is responsible for forming the stable, inhibitory metabolite complex with Cytochrome P450 heme?"
    },
    {
      "id": "ENT203-U4-MCQ50",
      "options": {
        "A": "Blockade of ubiquinone reduction, accompanied by massive electron leakage at the flavin mononucleotide (FMN) site generating destructive reactive oxygen species (ROS)",
        "B": "Uncoupling of proton flow through ATP synthase without ROS generation",
        "C": "Immediate conversion of succinate into malate in the Krebs cycle",
        "D": "Induction of hyper-transcription of mitochondrial ribosomal RNA"
      },
      "correctOption": "A",
      "explanation": "Rotenone blocks ubiquinone binding to PSST/ND1, backing up electrons to FMN where premature O2 reduction creates superoxide radicals, driving oxidative death.",
      "difficulty": "Hard",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What is the primary cellular consequence of Rotenone binding to the PSST and ND1 subunits of mitochondrial Complex I?"
    },
    {
      "id": "ENT203-U4-MCQ51",
      "options": {
        "A": "Cytochrome P450 monooxygenases (CYP6 and CYP9 clades), glutathione S-transferases (GSTs), and ABC transporters",
        "B": "Collagen and elastin synthesis genes",
        "C": "Silk fibroin heavy chain genes",
        "D": "Mitochondrial cytochrome b558 genes only"
      },
      "correctOption": "A",
      "explanation": "Xenobiotic stress from botanical terpenes induces Phase I (CYP450), Phase II (GSTs), and Phase III (ABC transporter) detoxification pathways.",
      "difficulty": "Hard",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "Which specific gene families in insect pests are transcriptionally upregulated when caterpillars are exposed to continuous low-dose botanical antifeedants?"
    },
    {
      "id": "ENT203-U4-MCQ52",
      "options": {
        "A": "Acetogenins are long-chain aliphatic derivatives (C32-C34 fatty acid derivatives) containing terminal gamma-lactone rings and tetrahydrofuran (THF) rings, whereas rotenone is a rigid polycyclic isoflavonoid",
        "B": "Acetogenins are water-soluble amino acids",
        "C": "Acetogenins contain organometallic platinum bonds",
        "D": "Acetogenins are double-stranded circular RNA molecules"
      },
      "correctOption": "A",
      "explanation": "Acetogenins are unbranched C32/C34 polyketide fatty acid derivatives featuring 1-3 THF rings and a lactone, yet competitively inhibit Complex I like rotenone.",
      "difficulty": "Hard",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "How do annonaceous acetogenins (from Annona squamosa) structurally differ from rotenone while targeting the exact same mitochondrial site?"
    },
    {
      "id": "ENT203-U4-MCQ53",
      "options": {
        "A": "Chlorophyll absorbs visible light and transfers energy to ground-state molecular oxygen, generating singlet oxygen (1O2) that attacks the electron-rich furan double bonds of azadirachtin",
        "B": "Chlorophyll consumes all carbon dioxide around the molecule",
        "C": "Chlorophyll crystallizes azadirachtin into calcium oxalate",
        "D": "Photosensitizers convert azadirachtin into synthetic pyrethroids"
      },
      "correctOption": "A",
      "explanation": "Singlet oxygen generated by chlorophyll photosensitization undergoes a [2+2] or ene-addition across the dihydrofuran ring of azadirachtin, causing rapid photolysis.",
      "difficulty": "Hard",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "Why is the photochemical degradation of Azadirachtin A accelerated in the presence of photosensitizers like chlorophyll on leaf surfaces?"
    },
    {
      "id": "ENT203-U4-MCQ54",
      "options": {
        "A": "Tarsal and ovipositor contact chemosensilla detect volatile limonoid fractions (salannin, azadirachtin), sending aversive neurosensory signals that block abdominal curling and egg-laying motor programs",
        "B": "Neem oil glues the moth's wings to the plant leaf",
        "C": "The scent of neem induces immediate death of adult moths",
        "D": "Neem destroys all egg yolks within 10 seconds of smelling"
      },
      "correctOption": "A",
      "explanation": "Gravid female moths evaluate host plants via tarsal chemoreceptors; contact with neem limonoids triggers sensory repulsion, aborting oviposition behaviors.",
      "difficulty": "Hard",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "What is the physiological basis of the 'oviposition deterrent' effect exhibited by neem seed extracts on female Spodoptera litura moths?"
    },
    {
      "id": "ENT203-U4-MCQ55",
      "options": {
        "A": "Non-polar triglycerides, fatty acids, and waxes partition into the hexane layer, while polar limonoids (azadirachtin, salannin, nimbin) extract selectively into the aqueous methanol phase",
        "B": "Hexane converts azadirachtin into a gas",
        "C": "Methanol solidifies the limonoids into stone",
        "D": "To remove all water from the seeds"
      },
      "correctOption": "A",
      "explanation": "Hexane strips out bulk hydrophobic triglycerides (95% of oil weight), while aqueous methanol selectively concentrates the polar, highly oxygenated limonoid fraction.",
      "difficulty": "Hard",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "In the chemical refining of technical azadirachtin from crude neem oil, why is a liquid-liquid partition between hexane and aqueous methanol performed?"
    },
    {
      "id": "ENT203-U4-MCQ56",
      "options": {
        "A": "Cytochrome P450 ecdysone biosynthetic enzymes (e.g., phantom, disembodied, shadow, shade)",
        "B": "Ribulose-1,5-bisphosphate carboxylase-oxygenase",
        "C": "Lactate dehydrogenase",
        "D": "DNA topoisomerase II"
      },
      "correctOption": "A",
      "explanation": "PTTH stimulates MAPK signaling to induce transcription of the Halloween gene family (phantom, disembodied, shadow) encoding CYP450s that synthesize ecdysone.",
      "difficulty": "Hard",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "What specific enzyme in the prothoracic gland is transcriptionally repressed as a downstream result of azadirachtin-induced PTTH arrest?"
    },
    {
      "id": "ENT203-U4-MCQ57",
      "options": {
        "A": "It selectively inhibits the enzyme ammonia monooxygenase (AMO) in chemolithotrophic Nitrosomonas bacteria",
        "B": "It converts all soil nitrate into nitrogen gas within 5 minutes",
        "C": "It kills all bacteria, fungi, and actinomycetes in the soil",
        "D": "It lowers the soil pH to 2.0"
      },
      "correctOption": "A",
      "explanation": "Karanjin and associated furanoflavonoids specifically inactivate ammonia monooxygenase in Nitrosomonas, retarding the oxidation of NH4+ to NO2-.",
      "difficulty": "Hard",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionText": "Why does the botanical compound Karanjin act as a natural nitrification inhibitor in agricultural soils?"
    },
    {
      "id": "ENT203-U4-MCQ58",
      "options": {
        "A": "A methyl ester group (-COOCH3) on the C-3 side chain of the cyclopropane ring instead of a methyl hydrocarbon group (-CH3)",
        "B": "The presence of six chlorine atoms on the aromatic ring",
        "C": "A complete carbohydrate glucose attached to the cyclopentenolone ring",
        "D": "A quaternary ammonium group"
      },
      "correctOption": "A",
      "explanation": "Pyrethric acid (in Pyrethrin II) contains a polar methyl ester moiety at C-3, whereas chrysanthemic acid (in Pyrethrin I) carries an isobutenyl group.",
      "difficulty": "Hard",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionText": "What structural feature of natural Pyrethrin II makes it significantly more polar than Pyrethrin I?"
    },
    {
      "id": "ENT203-U4-MCQ59",
      "options": {
        "A": "It induces apoptosis in plasmatocytes and granular cells, downregulating beta-1,3-glucan-binding protein and suppressing encapsulation of foreign invaders",
        "B": "It causes hemocytes to multiply into a solid chitinous block",
        "C": "It transforms hemocytes into red erythrocytes",
        "D": "It has zero effect on insect cellular immunity"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin is cytotoxic to circulating hemocytes, causing cell lysis, cytoskeletal breakdown, and disabling the nodulation and encapsulation of pathogens.",
      "difficulty": "Hard",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionText": "How does azadirachtin exposure affect hemocyte morphology and cellular encapsulation responses in lepidopteran larvae?"
    },
    {
      "id": "ENT203-U4-MCQ60",
      "options": {
        "A": "Its intermediate lipophilicity (log Kow ~ 1.09), which permits slow transcuticular diffusion but requires surfactants to breach epicuticular hydrocarbon monolayers",
        "B": "Its extreme hydrophobicity (log Kow > 8.0) that dissolves wax instantly",
        "C": "Its complete water solubility (log Kow < -5.0)",
        "D": "Its ability to evaporate at room temperature"
      },
      "correctOption": "A",
      "explanation": "Azadirachtin has a moderate log Kow (~1.09); it is neither extremely lipophilic nor hydrophilic, making adjuvant surfactants vital for epicuticular penetration.",
      "difficulty": "Hard",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionText": "What is the primary thermodynamic factor governing the partitioning of azadirachtin across the insect cuticular wax barrier during foliar spraying?"
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "ENT203-U4-SUB01",
      "modelAnswer": "A Botanical Biopesticide is a naturally occurring, plant-derived insecticidal or behavioral-modifying formulation synthesized from the secondary metabolites of angiosperms (such as trees, shrubs, or herbs). Unlike primary metabolites (proteins, carbohydrates, lipids) that sustain cellular growth, botanical pesticides originate from secondary metabolic pathways (terpenoids, alkaloids, phenolics, polyketides) evolved by plants as chemical defense mechanisms against phytophagous insect herbivores, plant pathogens, and browsing animals. Prominent examples include neem-derived azadirachtin, Dalmatian pyrethrum, and rotenone.\n\nA Limonoid (chemically classified as a tetranortriterpenoid) is a specialized class of oxygenated triterpenoid secondary metabolites predominantly biosynthesized by plants belonging to the order Rutales, particularly the family Meliaceae (e.g., Azadirachta indica) and Rutaceae. Structurally, limonoids are characterized by a degraded triterpenoid skeleton wherein four terminal carbon atoms of the side chain have been enzymatically cleaved, leaving a distinctive 17-beta-furan ring attached to a complex, highly functionalized carbocyclic core. Limonoids exhibit profound antifeedant, growth-regulating, antifungal, and deterrent activities against insects.",
      "maxMarks": 4,
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionType": "DEFINITION",
      "questionText": "Define 'Botanical Biopesticide' and 'Limonoid'.",
      "outlinePoints": [
        "Botanical biopesticides are plant-derived secondary metabolites evolved for chemical defense.",
        "Examples include azadirachtin (neem), pyrethrins (chrysanthemum), and rotenone (derris).",
        "Limonoids are oxygenated tetranortriterpenoids bearing a 17-beta-furan ring.",
        "Abundant in Meliaceae (neem); possess antifeedant, IGR, and antifungal bioactivities."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB02",
      "modelAnswer": "An Antifeedant (or gustatory feeding deterrent) is a chemical compound or secondary plant substance that, upon sensory contact or oral tasting by a phytophagous insect, inhibits or completely halts normal feeding behavior without directly killing or repelling the insect from the physical proximity of the host plant. Antifeedants operate by interacting with chemosensilla localized on the mouthparts (maxillary and labial palps), firing intense sensory signals through 'deterrent' or 'bitter' receptor cells while simultaneously silencing gustatory 'sugar' and 'water' receptors. Treated insects cease mastication and die of progressive inanition (starvation) despite resting directly on nutritious foliage.\n\nAn Insect Growth Regulator (IGR) is an active agent that disrupts the normal hormonal, developmental, physiological, or biochemical mechanisms of insect molting, metamorphosis, and cuticle formation. Rather than exerting immediate acute neurotoxic knockdown, IGRs function as endocrine disruptors\u2014either by mimicking juvenile hormone (JH mimics), antagonizing or depleting ecdysteroids (molting hormone antagonists like azadirachtin), or inhibiting chitin synthesis enzymes (e.g., benzoylphenylureas). Consequently, insects become trapped in their exuviae during apolysis, abort ecdysis, or differentiate into sterile, deformed larval-pupal intermediates.",
      "maxMarks": 4,
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionType": "DEFINITION",
      "questionText": "Define 'Antifeedant' (Gustatory Deterrent) and 'Insect Growth Regulator' (IGR).",
      "outlinePoints": [
        "Antifeedants halt feeding via chemosensory deterrence without direct acute knockdown.",
        "Operate by firing deterrent gustatory receptors and silencing sugar/water receptors.",
        "IGRs disrupt endocrine signaling, metamorphosis, and cuticular chitin synthesis.",
        "Cause molting failure, trapped exuviae, and deformed, sterile developmental intermediates."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB03",
      "modelAnswer": "The Knockdown Effect is a rapid neurotoxic physiological phenomenon characterized by the almost instantaneous loss of motor coordination, balance, and locomotive control in flying or crawling insects, causing them to fall paralyzed to the ground within seconds to a few minutes (1-5 minutes) of exposure to an active chemical. It is classically exhibited by natural pyrethrins and synthetic pyrethroids, which rapidly penetrate the cuticular wax and bind to voltage-gated sodium channels along axonal nerve membranes, inducing repetitive nerve discharges followed by complete depolarization block. Crucially, knockdown does not guarantee death, as insects possessing active detoxification enzymes may metabolize the toxin and recover.\n\nA Pesticide Synergist is a biologically non-toxic or weakly toxic chemical additive that, when formulated or tank-mixed with an active insecticide, substantially enhances the lethal potency of the insecticide far beyond simple additive effects. Synergists function primarily as competitive suicide inhibitors of metabolic detoxification enzymes within the insect body. The classical example is Piperonyl Butoxide (PBO), which irreversibly binds to and inhibits insect Cytochrome P450 monooxygenases (CYP450), preventing the enzymatic breakdown of pyrethrins and converting a reversible knockdown into 100% irreversible mortality.",
      "maxMarks": 4,
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionType": "DEFINITION",
      "questionText": "Define 'Knockdown Effect' and 'Pesticide Synergist'.",
      "outlinePoints": [
        "Knockdown is rapid motor paralysis and collapse within 1-5 minutes of exposure.",
        "Caused by pyrethrin-mediated axonal sodium channel disruption and depolarization block.",
        "Insects can metabolize the toxin and recover unless detox enzymes are blocked.",
        "Pesticide synergists (e.g., PBO) inhibit insect detoxification enzymes (CYP450).",
        "Synergists convert reversible knockdown into complete, irreversible mortality."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB04",
      "modelAnswer": "Azadirachtin does not act as a contact nerve poison; its insecticidal potency stems from profound disruption of the neuroendocrine orchestration governing insect metamorphosis:\n\n1. **Inhibition of PTTH Secretion:** Upon ingestion, azadirachtin enters the hemolymph and binds with high affinity to neurosecretory cells in the insect brain (corpus cardiacum / corpus allatum complex). It arrests the synthesis and pulsatile release of Prothoracicotropic Hormone (PTTH).\n2. **Shutdown of Ecdysteroid Biosynthesis:** PTTH is the obligate hormonal trigger that signals the prothoracic glands to synthesize and secrete ecdysone. In the absence of PTTH stimulation, prothoracic glands remain inactive, causing hemolymph titers of 20-hydroxyecdysone (20E, the active molting hormone) to drop precipitously below the threshold required to initiate molting.\n3. **Failure of Apolysis and Cuticulogenesis:** 20-hydroxyecdysone normally coordinates apolysis (separation of the old cuticle from underlying epidermal cells) and activates chitin synthesis for the new cuticle. Under azadirachtin suppression, epidermal cell proliferation halts, cuticular enzymes are not secreted, and new epicuticle synthesis fails.\n4. **Ecdysial Arrest and Deformity:** When the insect attempts ecdysis (shedding the old exuviae), it lacks the ecdysis-triggering hormone (ETH) cues. Larvae remain trapped inside their old head capsules and exoskeletons, die of starvation or asphyxiation during ecdysis, or emerge as crippled, infertile larval-pupal intermediates with crumpled wings and twisted appendages.",
      "maxMarks": 6,
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionType": "SHORT_ANSWER",
      "questionText": "Explain the step-by-step hormonal mechanism by which Azadirachtin disrupts insect molting.",
      "outlinePoints": [
        "Binds neurosecretory brain cells, halting pulsatile release of PTTH from corpus cardiacum.",
        "Prothoracic glands fail to synthesize ecdysone, depleting 20-hydroxyecdysone titers.",
        "Arrests apolysis and epidermal chitin synthesis required for new cuticle formation.",
        "Blocks ecdysis; larvae die trapped in old exuviae or emerge as crippled intermediates."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB05",
      "modelAnswer": "Neem Seed Kernel Extract (NSKE 5%) is an economical, highly potent on-farm botanical formulation widely utilized across India for managing chewing and sucking pests:\n\n**Step-by-Step Preparation Protocol:**\n1. **Kernel Requirement and Selection:** For spraying one hectare of field crop using 1,000 liters of water, exactly **50 kg of dried neem seed kernels** are required (50 g kernel per liter of water = 5% w/v). Use mature, well-cured, mold-free seeds harvested in the current season.\n2. **Decortication and Coarse Crushing:** Gently pound the seeds to crack and remove the outer fibrous seed coat (pericarp/hull). Collect the clean inner seed kernels. Coarsely crush or pound the kernels using a mortar and pestle or grain mill. *Crucial Rule:* Do not grind into a fine flour, as fine grinding releases excess oil and mucilage that form a sticky, gelatinous paste that traps azadirachtin.\n3. **Aqueous Soaking and Extraction:** Place the 50 kg of crushed coarse powder into a clean, porous cotton or muslin cloth bag. Tie the neck and suspend the bag overnight (10 to 12 hours) in an open drum containing 100 to 200 liters of clean water. Periodically squeeze and knead the bag with clean hands to leach out the water-soluble limonoids (azadirachtin, salannin, nimbin) into the water, producing a dense, milky-white extract.\n4. **Filtering and Soap Emulsification:** Remove the bag, thoroughly squeeze out all remaining liquid, and filter the concentrated extract through a fine two-layered muslin cloth to eliminate suspended particulate debris. Dissolve **1.0 kg of neutral soap flakes or liquid detergent (0.1%)** in a small bucket of warm water and blend into the milky extract as an emulsifier, wetting, and spreading agent.\n5. **Final Volume Dilution and Spraying:** Dilute the soap-blended concentrate with clean water to make up the final spray volume of 1,000 liters. Spray immediately during late afternoon; do not store overnight as unpreserved aqueous limonoids ferment and hydrolyze rapidly.",
      "maxMarks": 6,
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionType": "SHORT_ANSWER",
      "questionText": "Describe the on-farm preparation procedure for 5% Neem Seed Kernel Extract (NSKE).",
      "outlinePoints": [
        "Ratio: 50 g dried neem kernel per liter of water (50 kg kernels for 1000 L water/ha).",
        "Crush kernels coarsely; avoid fine pulverization to prevent sticky mucilage clumping.",
        "Soak powder in a muslin bag in water for 10-12 hours; squeeze repeatedly to extract limonoids.",
        "Filter through cloth; add 0.1% soap/detergent as an emulsifier and spreading agent.",
        "Make up final volume and spray immediately in late afternoon; avoid storing overnight."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB06",
      "modelAnswer": "Natural pyrethrins (extracted from Chrysanthemum cinerariifolium) are rapid-acting axonic nerve poisons, while Piperonyl Butoxide (PBO) provides essential enzymatic synergism:\n\n1. **Mode of Action on Voltage-Gated Sodium Channels (VGSC):**\n   - Pyrethrins are highly lipophilic molecules that penetrate the insect epicuticular wax within seconds. They bind specifically to the lipid-exposed hydrophobic cavity of the alpha-subunit of voltage-gated sodium channels along axonal nerve membranes.\n   - Pyrethrins hold the activation gate open and profoundly delay the closing (inactivation) of the channel. Following a normal action potential, sodium ions continue to leak inward through the modified channels, generating a persistent depolarizing 'tail current'.\n   - This causes repetitive, uncontrolled axonal firing, extreme muscular spasms, loss of coordination, and rapid **knockdown** within 1 to 5 minutes. Eventually, complete depolarization block halts all nerve conduction.\n\n2. **Mechanism of Piperonyl Butoxide (PBO) Synergism:**\n   - Insects possess robust metabolic defense systems, predominantly Cytochrome P450 monooxygenases (CYP450), that rapidly hydroxylate and detoxify pyrethrins, allowing knocked-down insects to recover within hours.\n   - PBO contains a **methylenedioxyphenyl (benzodioxole)** ring. CYP450 enzymes attempt to metabolize this ring, but the reaction forms a stable, reactive carbene intermediate that coordinates tightly to the Fe2+ heme iron of the enzyme.\n   - This permanently inactivates CYP450 (suicide inhibition). With metabolic detoxification completely abolished, pyrethrin molecules persist indefinitely at axonal sodium channels, converting temporary knockdown into 100% irreversible mortality.",
      "maxMarks": 6,
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionType": "SHORT_ANSWER",
      "questionText": "Explain the neurotoxic mode of action of natural pyrethrins and the biochemical mechanism of PBO synergism.",
      "outlinePoints": [
        "Pyrethrins bind axonal voltage-gated sodium channels, preventing channel closure.",
        "Continuous sodium leakage causes repetitive nerve firing and rapid knockdown in 1-5 min.",
        "Insect CYP450 enzymes normally detoxify pyrethrins, allowing recovery from knockdown.",
        "PBO binds the heme iron of CYP450 enzymes as a suicide inhibitor.",
        "PBO abolishes metabolic recovery, ensuring 100% irreversible insect mortality."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB07",
      "modelAnswer": "Rotenone is a naturally occurring isoflavonoid extracted from the roots of Derris and Lonchocarpus vines that acts as a potent cellular metabolic poison:\n\n1. **Biochemical Mechanism of Action:**\n   - Rotenone diffuses across cellular and mitochondrial membranes, entering the mitochondrial matrix.\n   - It binds specifically to the PSST and ND1 protein subunits of **Complex I (NADH:ubiquinone oxidoreductase)** of the mitochondrial electron transport chain (ETC).\n   - This binding physically blocks the transfer of electrons from the iron-sulfur clusters of Complex I to ubiquinone (coenzyme Q). Consequently, the entire downstream electron transport to Complexes III and IV and the generation of the transmembrane proton gradient halt.\n   - Oxidative phosphorylation is uncoupled, cellular ATP levels plunge to zero, and the cell undergoes bioenergetic failure. Furthermore, backed-up electrons leak at the flavin mononucleotide (FMN) site, generating massive levels of toxic Reactive Oxygen Species (ROS) that induce lipid peroxidation and necrotic cell death.\n\n2. **Environmental and Statutory Restrictions:**\n   - **Extreme Piscicidal Hazard:** Rotenone is exceptionally lethal to all gill-breathing aquatic fauna (fish 96 h LC50 < 10 \u00b5g/L). Because fish absorb rotenone across their gill lamellae directly into arterial circulation without hepatic first-pass metabolism, minute runoff causes total fish kills. Consequently, statutory regulations strictly prohibit rotenone application within 100 meters of lakes, rivers, aquaculture ponds, and drainage waterways.\n   - **Mammalian Neurotoxicity Concerns:** Chronic exposure to rotenone has been linked to dopaminergic neuronal degeneration in rodent models, prompting tight restrictions or outright bans on its use in food crops across numerous countries.",
      "maxMarks": 6,
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionType": "SHORT_ANSWER",
      "questionText": "Describe the cellular respiration inhibition caused by Rotenone and its environmental restrictions.",
      "outlinePoints": [
        "Binds PSST/ND1 subunits of mitochondrial Complex I (NADH:ubiquinone oxidoreductase).",
        "Blocks electron flow to ubiquinone, halting ATP synthesis and causing bioenergetic collapse.",
        "Electron leakage generates cytotoxic Reactive Oxygen Species (ROS).",
        "Extreme piscicide: highly lethal to fish (LC50 < 10 ppb); banned near aquatic ecosystems.",
        "Linked to dopaminergic neuronal degeneration, restricting its use in modern agriculture."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB08",
      "modelAnswer": "Neem cake\u2014the solid organic residue remaining after oil expelling from neem seed kernels\u2014is an invaluable multi-functional organic input in sustainable agriculture, providing four distinct agronomic benefits:\n\n1. **Nitrification Inhibition (Nitrogen Efficiency Booster):**\n   - Neem cake contains lipid-associated limonoids (nimbin, epinimbin) that exert selective bacteriostatic suppression against chemolithotrophic soil bacteria\u2014specifically *Nitrosomonas* and *Nitrobacter*.\n   - These bacteria normally oxidize ammonium (NH4+) into highly leachable nitrate (NO3-). By retarding nitrification, neem cake keeps nitrogen in the stable ammonium form held by soil cation exchange complexes, reducing nitrate leaching and denitrification losses by 20 to 35%.\n   - Blending urea with neem cake (or neem oil coating at 1:5 ratio) significantly boosts Nitrogen Use Efficiency (NUE) and crop yield.\n\n2. **Biological Suppression of Plant-Parasitic Nematodes:**\n   - When incorporated into soil (1 to 2 tonnes/ha), decomposing neem cake releases volatile fatty acids, phenolic acids, and limonoids that directly kill root-knot nematodes (*Meloidogyne incognita*) and cyst nematodes, reducing root galling and larval penetration.\n\n3. **Subterranean Insect Suppression:**\n   - Sinuously releases bitter limonoids into the rhizosphere, repelling and suppressing destructive subterranean insect pests including white grubs (*Holotrichia serrata*), cutworms, and termites.\n\n4. **Organic Soil Conditioning:**\n   - Neem cake provides 4.0-5.0% Nitrogen, 1.0% Phosphorus (P2O5), and 1.5% Potassium (K2O), along with rich organic matter that stimulates beneficial rhizosphere microbes, earthworms, and improves soil moisture retention.",
      "maxMarks": 6,
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionType": "SHORT_ANSWER",
      "questionText": "Explain the multi-functional agricultural utility of Neem Cake in soil and nutrient management.",
      "outlinePoints": [
        "Nitrification inhibitor: Suppresses Nitrosomonas, keeping nitrogen in ammonium form.",
        "Increases Nitrogen Use Efficiency (NUE) and reduces nitrate leaching by 20-35%.",
        "Suppresses plant-parasitic nematodes (Meloidogyne incognita) via phenolic/limonoid release.",
        "Repels and suppresses subterranean insect pests like white grubs and termites.",
        "Acts as an organic fertilizer providing 4-5% N, organic matter, and soil conditioning."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U4-SUB09",
      "modelAnswer": "Azadirachtin and Natural Pyrethrins represent the two most prominent botanical insecticides in global agriculture, displaying fundamental contrasts in chemistry and physiological mechanisms:\n\n1. **Chemical Classification:**\n   - *Azadirachtin:* Highly oxygenated C-seco-limonoid (tetranortriterpenoid) possessing 16 stereocenters, extracted from neem (*Azadirachta indica*) seeds.\n   - *Natural Pyrethrins:* Six structurally related monoterpene cyclopentenolone esters (Pyrethrins I & II, Cinerins, Jasmolins) extracted from *Chrysanthemum cinerariifolium* flower capitula.\n\n2. **Primary Physiological Mode of Action:**\n   - *Azadirachtin:* Functions as an **endocrine disruptor (IGR)** and sensory antifeedant. It inhibits PTTH release from the brain, depleting 20-hydroxyecdysone and preventing apolysis and ecdysis; concurrently stimulates deterrent gustatory receptors.\n   - *Natural Pyrethrins:* Operates as an acute **axonic neurotoxin**. It binds to voltage-gated sodium channels along nerve axons, preventing channel inactivation and causing repetitive discharges.\n\n3. **Speed of Kill (Lethal Kinetics):**\n   - *Azadirachtin:* Slow-acting. Feeding halts within hours, but complete insect mortality or developmental arrest occurs over 3 to 7 days during molting or through gradual starvation.\n   - *Natural Pyrethrins:* Extremely fast-acting. Induces dramatic, instantaneous **knockdown within 1 to 5 minutes** of cuticular contact.\n\n4. **Requirement and Role of Synergists:**\n   - *Azadirachtin:* Does not require a chemical synergist; it is effective as a single active entity or multi-limonoid botanical mixture (NSKE).\n   - *Natural Pyrethrins:* Critically dependent on metabolic synergists like Piperonyl Butoxide (PBO, 1:5 ratio) to inhibit insect cytochrome P450 enzymes that would otherwise detoxify pyrethrins and allow knocked-down insects to recover.",
      "maxMarks": 6,
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionType": "COMPARISON",
      "questionText": "Compare Azadirachtin with Natural Pyrethrins across chemical class, primary mode of action, speed of kill, and role of synergists.",
      "outlinePoints": [
        "Chemistry: Azadirachtin is a tetranortriterpenoid limonoid; Pyrethrins are monoterpene cyclopentenolone esters.",
        "Mode of Action: Azadirachtin is an endocrine IGR and antifeedant; Pyrethrins are axonic sodium channel poisons.",
        "Speed: Azadirachtin kills slowly in 3-7 days during molting; Pyrethrins cause knockdown in 1-5 minutes.",
        "Synergists: Azadirachtin requires no synergist; Pyrethrins require PBO to prevent metabolic detoxification."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U4-SUB10",
      "modelAnswer": "Botanical pesticides and synthetic neurotoxic insecticides represent two divergent paradigms in crop protection:\n\n1. **Insect Resistance Development Risk:**\n   - *Botanical Pesticides:* Extremely low risk of field resistance. Natural extracts (e.g., NSKE, pyrethrum) contain complex cocktails of multiple active compounds (e.g., azadirachtin, salannin, nimbin) acting on multiple physiological sites simultaneously, preventing target-site gene mutations from conferring resistance.\n   - *Synthetic Chemicals:* High resistance risk. Single active synthetic molecules (e.g., synthetic pyrethroids, organophosphates, neonicotinoids) exert intense selection pressure on single receptor sites, leading to rapid, monogenic field resistance.\n\n2. **Environmental Persistence and Residues:**\n   - *Botanical Pesticides:* Exceptionally short environmental half-life (a few hours to 3 days). They are photolabile, decompose into polar organic fragments under solar UV, and leave zero hazardous residues on harvested produce (pre-harvest interval 0-1 day).\n   - *Synthetic Chemicals:* Highly persistent (weeks to years). Many bioaccumulate in food chains, contaminate groundwater, and require strict statutory pre-harvest waiting intervals (7 to 30 days).\n\n3. **Selectivity and Non-Target Safety:**\n   - *Botanical Pesticides:* Generally safe to non-target pollinators (honeybees), predatory spiders, parasitoid wasps, and soil microbes when applied at recommended agronomic rates, possessing high mammalian safety (WHO Class IV).\n   - *Synthetic Chemicals:* Broad-spectrum toxicity; frequently cause catastrophic non-target mortality of honeybees, fish, and natural enemy complexes, triggering secondary pest resurgence.\n\n4. **Commercial Shelf-Life and Physical Stability:**\n   - *Botanical Pesticides:* Relatively poor shelf stability (6 to 12 months). Highly prone to oxidation, polymerization, and photolytic decay during storage; require specialized stabilizing adjuvants and amber containers.\n   - *Synthetic Chemicals:* Highly stable with long, robust commercial shelf lives (2 to 5 years) under varying environmental conditions.",
      "maxMarks": 6,
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry",
      "questionType": "COMPARISON",
      "questionText": "Compare Botanical Pesticides with Synthetic Chemical Insecticides in terms of resistance risk, environmental persistence, non-target safety, and shelf-life.",
      "outlinePoints": [
        "Resistance: Botanicals have very low risk (multi-component complexes); synthetics have high risk (single receptor).",
        "Persistence: Botanicals degrade rapidly under UV (0-3 days, zero residue); synthetics persist for weeks/months.",
        "Safety: Botanicals spare pollinators and natural enemies; synthetics often cause broad-spectrum non-target mortality.",
        "Shelf-life: Botanicals have short shelf stability (6-12 months); synthetics possess 2-5 years stable shelf-life."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U4-SUB11",
      "modelAnswer": "Neem oil (*Azadirachta indica*) and Karanj oil (*Pongamia pinnata*) are the two foremost indigenous non-edible plant oils utilized in Indian pest management:\n\n1. **Active Chemical Constituents:**\n   - *Neem Oil:* Primarily contains tetranortriterpenoid **limonoids** (azadirachtin A & B, salannin, nimbin, meliantriol, and desacetylnimbin) accompanied by sulfur-containing terpenes that impart a pungent garlic-like odor.\n   - *Karanj Oil:* Primarily contains **furanoflavonoids** (karanjin, pongamol, glabrin, pinnatin) and diketones, possessing a distinct bitter, nutty scent.\n\n2. **Modes of Action:**\n   - *Neem Oil:* Primarily an endocrine disruptor (IGR), ecdysone antagonist, sensory antifeedant, and oviposition deterrent. It inhibits molting and reduces female fecundity.\n   - *Karanj Oil:* Acts primarily as a direct contact lipophilic insecticide, disruptor of respiratory cuticular membranes, oviposition deterrent, and mild feeding inhibitor.\n\n3. **Primary Pest Targets:**\n   - *Neem Oil:* Outstanding efficacy against chewing lepidopteran caterpillars (*Helicoverpa*, *Spodoptera*, *Plutella*), root nematodes, and soft-bodied sucking insects.\n   - *Karanj Oil:* Exceptionally effective against difficult sucking pests, particularly two-spotted spider mites (*Tetranychus urticae*), thrips, mealybugs, and scale insects where its furanoflavonoids penetrate lipid layers.\n\n4. **Synergistic Tank Interactions:**\n   - When blended together at a 1:1 ratio with an emulsifier (0.1% soap or Triton X-100), Karanj oil acts as a biological synergist for neem oil. The lipophilic furanoflavonoids of karanj oil soften and dissolve the waxy epicuticle of sucking pests, allowing faster, deeper systemic entry of neem limonoids, producing higher mortality than either oil applied alone.",
      "maxMarks": 6,
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionType": "COMPARISON",
      "questionText": "Compare Neem Oil with Karanj (Pongamia) Oil across active chemistry, primary pest targets, and synergistic interactions.",
      "outlinePoints": [
        "Chemistry: Neem oil contains tetranortriterpenoid limonoids; Karanj oil contains furanoflavonoids (karanjin).",
        "Action: Neem is an endocrine IGR and antifeedant; Karanj acts via contact cuticular disruption and repellency.",
        "Pests: Neem excels against caterpillars and nematodes; Karanj excels against phytophagous mites, thrips, and scales.",
        "Synergy: 1:1 tank mix synergizes penetration, as karanj dissolves epicuticular wax for rapid neem limonoid uptake."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U4-SUB12",
      "modelAnswer": "Azadirachtin, the principal limonoid of Azadirachta indica, represents the most complex and versatile natural biopesticide known to agricultural science. Its insecticidal efficacy does not rely on simple neurotoxicity; instead, it coordinates a multi-pronged physiological attack across three interconnected physiological domains:\n\n**1. Neuroendocrine Disruption and Growth Regulation (IGR Action):**\n- *Arrest of PTTH Synthesis:* Ingested azadirachtin traverses the midgut epithelium into the hemolymph and binds with nanomolar affinity to neurosecretory cells in the corpus cardiacum and brain. This binding blocks the synthesis and pulsatile release of Prothoracicotropic Hormone (PTTH).\n- *Ecdysteroid Depletion:* Without PTTH stimulation, the prothoracic glands fail to synthesize ecdysone. Consequently, circulating titers of active 20-hydroxyecdysone (20E) plummet, disrupting the hormonal signaling necessary to initiate apolysis and cuticular digestion.\n- *Ecdysis Failure:* Developing larvae remain trapped inside their old cuticles. During attempts to molt, larvae exhibit head capsule slippage failure, ecdysial rupture failure, or emerge as crippled, non-viable larval-pupal or pupal-adult intermediates exhibiting crumpled, melanized wings and deformed legs.\n\n**2. Sensory and Behavioral Deterrence (Antifeedant and Repellent Action):**\n- *Gustatory Receptor Modulation:* Azadirachtin interacts directly with gustatory sensilla located on the maxillary and labial palps. Electrophysiological recordings show that azadirachtin specifically stimulates specialized 'deterrent' (bitter-sensing) receptor neurons while simultaneously hyperpolarizing and silencing 'sugar' and 'water' receptor neurons. This intense sensory mismatch signals acute unpalatability.\n- *Inanition and Starvation:* This dual sensory effect triggers profound anorexia. Caterpillars cease chewing within hours of spray exposure and undergo progressive inanition, depleting glycogen and fat body lipid reserves until death occurs from starvation.\n- *Oviposition Deterrence:* Gravid adult female moths detect volatile limonoids through tarsal and ovipositor chemosensilla, rejecting treated plant canopies for egg laying, which dramatically suppresses field egg deposition.\n\n**3. Reproductive Sterility and Fecundity Suppression:**\n- *Suppression of Vitellogenesis:* In adult female insects, azadirachtin disrupts the synthesis of vitellogenin (yolk precursor protein) by the fat body, mediated by interference with juvenile hormone signaling.\n- *Blockade of Oocyte Uptake:* Azadirachtin inhibits the receptor-mediated endocytosis of vitellogenin across follicular epithelial membranes into developing oocytes. This results in severe ovarian atrophy, complete resorption of terminal oocytes, and high rates of non-viable, sterile eggs in treated adults.\n- *Spermatogenesis Disruption:* In males, azadirachtin damages testicular follicular walls, causing reduced sperm motility, abnormal axonemes, and structural male sterility.",
      "maxMarks": 10,
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionType": "LONG_ANSWER",
      "questionText": "Provide a comprehensive analysis of the multi-faceted modes of action of Azadirachtin across insect neuroendocrine, behavioral, and reproductive systems.",
      "outlinePoints": [
        "Endocrine: Binds brain neurosecretory cells, blocking PTTH release and depleting 20-hydroxyecdysone.",
        "Ecdysis Failure: Traps insects in old exuviae, causing ecdysial arrest and crippled intermediates.",
        "Antifeedant: Fires bitter deterrent gustatory sensilla while silencing sugar/water receptors, inducing starvation.",
        "Reproductive: Inhibits vitellogenin synthesis and follicular oocyte uptake, causing ovarian atrophy.",
        "Sterility: Suppresses female fecundity and induces structural sperm abnormalities in males."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U4-SUB13",
      "modelAnswer": "The industrial manufacture of standardized neem-based Emulsifiable Concentrates (EC) from raw neem seeds involves advanced solvent extraction, downstream concentration, formulation chemistry, and rigorous statutory quality assurance:\n\n**1. Industrial Extraction Process:**\n- *Seed Sourcing and Cleaning:* High-quality neem seeds harvested during peak summer (July-August) are dried to <10% moisture, passed through vibratory air screens to remove debris, and decorticated to yield pure kernels containing 0.3-0.5% azadirachtin.\n- *Defatting (Lipid Removal):* Dried kernels are coarsely flaked and fed into continuous counter-current solid-liquid extractors. Non-polar hexane is circulated at 45-50\u00b0C to extract the hydrophobic triglycerides (yielding crude neem oil). Azadirachtin and polar limonoids remain unextracted in the defatted seed meal.\n- *Limonoid Extraction:* The defatted meal is extracted with polar protic solvents\u2014specifically 90% technical methanol or ethanol\u2014at 50\u00b0C. The solvent leaches out over 90% of the active limonoids (azadirachtin A, B, salannin, nimbin). The solvent extract is separated via continuous belt filtration and vacuum-evaporated at low temperature (<50\u00b0C, -0.08 MPa) in a thin-film evaporator, yielding a dark brown viscous resin known as 'Technical Azadirachtin Concentrate' (10-25% azadirachtin purity).\n\n**2. EC Formulation Chemistry:**\n- Because pure azadirachtin is unstable and insoluble in water, it is compounded with specialized carriers, solvents, and surfactants:\n  - *Active Ingredient:* Calibrated quantity of technical azadirachtin concentrate to achieve the desired statutory concentration (e.g., 1500 ppm or 10,000 ppm).\n  - *Solvent Carrier:* Aromatic hydrocarbons (C9-C10 solvent naphtha, cyclohexanone) or refined vegetable oils (refined deodorized soybean or corn oil).\n  - *Emulsifier Blend:* A balanced hydrophilic-lipophilic balance (HLB 11-13) blend of non-ionic (castor oil ethoxylates, polyoxyethylene alkyl phenols) and anionic (calcium dodecylbenzene sulfonate) surfactants (8-12% w/w) to ensure instantaneous spontaneous blooming into a microemulsion upon dilution with water.\n  - *Chemical Stabilizers:* Azadirachtin is vulnerable to acid-catalyzed degradation and UV photolysis. Stabilizers include 2-3% **epoxidized soybean oil (ESBO)** as an internal acid scavenger, along with substituted benzophenones or hindered amine light stabilizers (HALS) as UV photoprotectants.\n\n**3. Statutory Quality Control Standards under CIB&RC:**\n- *Azadirachtin Content Verification:* Quantified via Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC) using a C18 column, acetonitrile:water (40:60) mobile phase, and UV detection at 214 nm. The concentration of Azadirachtin A + B must strictly meet or exceed the labeled statutory value (e.g., min. 0.15% w/w for 1500 ppm EC).\n- *Acidity / pH:* Maximum acidity expressed as H2SO4 must not exceed 0.5% (pH buffered between 5.5 and 7.0).\n- *Flash Point and Emulsion Stability:* Flash point must exceed 24.5\u00b0C (Abel method). When diluted at 1:100 in CIPAC standard hard water, the emulsion must exhibit zero cream separation or oil separation after standing for 2 hours.\n- *Packaging:* Hermetically sealed in high-density polyethylene (HDPE) containers or amber glass bottles with induction-sealed aluminum liners to exclude atmospheric moisture and photolytic light.",
      "maxMarks": 10,
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionType": "LONG_ANSWER",
      "questionText": "Detail the industrial manufacture, quality control parameters, and chemical stabilization of commercial neem-based Emulsifiable Concentrates (EC).",
      "outlinePoints": [
        "Extraction: Hexane defatting followed by polar methanol extraction of defatted meal into technical concentrate.",
        "Formulation: Blended with aromatic/vegetable solvents and matched non-ionic/anionic surfactant systems (HLB 11-13).",
        "Stabilization: Epoxidized soybean oil (ESBO) acid scavenger and UV photostabilizers prevent degradation.",
        "Quality Control: RP-HPLC verification at 214 nm, maximum 0.5% acidity, CIPAC emulsion stability testing.",
        "Packaging: Amber bottles or HDPE containers with induction-sealed aluminum foils to shield from UV and moisture."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U4-SUB14",
      "modelAnswer": "Natural pyrethrins, rotenone, and nicotine represent the classical triad of plant-derived neurotoxic and metabolic poisons historically utilized in global agriculture before the synthetic chemical era:\n\n**1. Natural Pyrethrins (*Chrysanthemum cinerariifolium*):**\n- *Chemical Structure:* Six related monoterpenoid cyclopentenolone esters divided into Pyrethrins I (chrysanthemic acid esters) and Pyrethrins II (pyrethric acid esters) conjugated to pyrethrolone, cinerolone, or jasmolone rings.\n- *Target Site & Mode of Action:* Binds to the alpha-subunit of **voltage-gated sodium channels (VGSC)** along axonal nerve membranes. Prolongs activation gate opening, causing sodium leakage, persistent depolarizing tail currents, repetitive firing, and rapid **knockdown (1-5 min)**, followed by conduction block.\n- *Environmental Fate:* Extremely photolabile. Decomposed by solar UV radiation within 1 to 2 hours into non-toxic polar cyclopropane fragments; zero soil persistence and zero bioaccumulation.\n- *Mammalian Safety:* High safety profile (oral LD50 in rats > 1,500 mg/kg). Mammalian hepatic esterases and Cytochrome P450 enzymes rapidly hydrolyze the ester bonds, preventing systemic intoxication.\n\n**2. Rotenone (*Derris elliptica* and *Lonchocarpus* spp.):**\n- *Chemical Structure:* Complex pentacyclic isoflavonoid featuring fused furan, pyran, and chromene rings.\n- *Target Site & Mode of Action:* Cellular respiratory poison. Binds specifically to the PSST/ND1 subunits of **Complex I (NADH:ubiquinone oxidoreductase)** of the mitochondrial electron transport chain. Blocks electron flow to ubiquinone, halting ATP synthesis and leaking electrons at FMN to generate cytotoxic Reactive Oxygen Species (ROS).\n- *Environmental Fate:* Degrades under sunlight over 2 to 6 days into non-toxic rotenolone and 6a-beta,12a-beta-hydroxyrotenone.\n- *Mammalian & Aquatic Safety:* Moderately toxic to mammals (oral LD50 60 to 350 mg/kg); linked to dopaminergic degeneration. Exceptionally lethal to fish (96 h LC50 < 10 ppb) because fish absorb it across gills directly into blood; banned near aquatic systems.\n\n**3. Nicotine (*Nicotiana tabacum*):**\n- *Chemical Structure:* Simple bicyclic pyridine-pyrrolidine alkaloid containing a tertiary amine.\n- *Target Site & Mode of Action:* Agonist of **nicotinic acetylcholine receptors (nAChR)** in the central and autonomic nervous systems. Binds post-synaptic receptors, causing continuous depolarization, violent tremors, convulsions, and terminal desensitization paralysis.\n- *Environmental Fate:* Rapidly degrades via volatilization and microbial oxidation (forming cotinine) within 24 to 48 hours.\n- *Mammalian Safety:* **Extremely hazardous and highly toxic to mammals** (acute oral LD50 in rats 50 to 60 mg/kg; dermal LD50 50 mg/kg). Readily absorbed through human skin, causing fatal cholinergic poisoning, leading to severe restrictions or bans in modern agriculture.",
      "maxMarks": 10,
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionType": "LONG_ANSWER",
      "questionText": "Provide a comprehensive comparative evaluation of Natural Pyrethrins, Rotenone, and Nicotine regarding their chemical structures, target neuro-metabolic sites, environmental fates, and mammalian safety.",
      "outlinePoints": [
        "Pyrethrins: Cyclopentenolone esters acting on axonal sodium channels; rapid knockdown; UV breakdown in 1-2 h; safe to mammals.",
        "Rotenone: Pentacyclic isoflavonoid inhibiting mitochondrial Complex I; halts ATP; extreme piscicide; moderate mammal hazard.",
        "Nicotine: Pyridine-pyrrolidine alkaloid stimulating post-synaptic nAChRs; fast fatal convulsions; high mammalian toxicity.",
        "Ecological Comparison: Pyrethrins are safest for harvest day; rotenone banned near waterways; nicotine banned for human hazard."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U4-SUB15",
      "modelAnswer": "Vegetable agro-ecosystems (tomato and cabbage) are plagued by destructive complexes of chewing caterpillars and sucking vectors that have developed widespread resistance to synthetic insecticides. Integrating botanical biopesticides provides effective suppression while maintaining zero pre-harvest residues and preserving natural enemies:\n\n**1. Target Pest Complexes:**\n- *Tomato:* Fruit borer (*Helicoverpa armigera*), whitefly (*Bemisia tabaci* - TYLCV vector), and serpentine leafminer (*Liriomyza trifolii*).\n- *Cabbage:* Diamondback moth (*Plutella xylostella*), cabbage head borer (*Hellula undalis*), and cabbage aphids (*Brevicoryne brassicae*).\n\n**2. Stage-Specific Botanical Spray Schedule:**\n\n*Phase 1: Nursery and Transplanting Stage (0 to 20 Days After Transplanting - DAT)*\n- Soil Treatment: Incorporate **Neem Cake at 250 kg/ha** into planting beds 10 days prior to transplanting to suppress soil-dwelling cutworms and root-knot nematodes.\n- Seedling Root Dip: Dip seedling roots in 1% neem oil emulsion for 15 minutes before planting.\n\n*Phase 2: Vegetative Growth and Early Pest Influx (20 to 45 DAT)*\n- Foliar Spray 1 (at 25 DAT): Apply **5% Neem Seed Kernel Extract (NSKE 5%)** (50 kg kernels/ha in 1000 L water + 0.1% soap). Targets early 1st- and 2nd-instar caterpillars of *P. xylostella* and *H. armigera* at oviposition, acting as an antifeedant and IGR.\n- Foliar Spray 2 (at 35 DAT): Apply **Neem Oil + Karanj Oil (1:1 mix) at 3 ml/L** with 0.1% wetting agent. Targets whitefly nymphs, aphids, and leafminers. Karanjin breaks epicuticular waxes while neem limonoids induce nymphal molting arrest.\n\n*Phase 3: Flowering and Fruit / Head Initiation (45 to 65 DAT)*\n- Foliar Spray 3 (at 50 DAT): Apply **Commercial Azadirachtin 1500 ppm (0.15% EC) at 3.0 ml/L** (or 10,000 ppm at 1.0 ml/L). Directed at flower clusters in tomato and wrapping heads in cabbage. Blocks larval boring and suppresses oviposition.\n- Non-Target Safety: Does not harm foraging bumblebees, honeybees, or parasitoids (*Trichogramma*, *Cotesia plutellae*).\n\n*Phase 4: Harvesting and Fruiting Phase (65 DAT to Harvest)*\n- Foliar Spray 4 (during picking): Apply **Natural Pyrethrins synergized with PBO (0.2%)** or **NSKE 5%**. Pyrethrins provide immediate knockdown of adult moths and caterpillars without leaving toxic synthetic residues, allowing harvest on the same day (Pre-Harvest Interval = 0 days).\n\n**3. Operational Application Guidelines:**\n- Apply all botanical sprays strictly in late afternoon (after 4:30 PM) to avoid solar UV photolysis.\n- Use hollow-cone nozzles operated at 30-40 psi, ensuring complete coverage of lower leaf surfaces.",
      "maxMarks": 10,
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionType": "LONG_ANSWER",
      "questionText": "Formulate a comprehensive IPM spray schedule incorporating botanical pesticides (NSKE, Neem EC, Karanj oil) for managing the pest complex of tomato and cabbage.",
      "outlinePoints": [
        "Nursery: Soil incorporation of neem cake (250 kg/ha) against cutworms and root nematodes.",
        "Vegetative (25 DAT): Foliar NSKE 5% targeting early 1st/2nd-instar caterpillars as an IGR and antifeedant.",
        "Vegetative (35 DAT): Neem + Karanj oil (1:1 at 3 ml/L) targeting aphids, whiteflies, and leafminers.",
        "Flowering (50 DAT): Commercial Azadirachtin 1500 ppm EC (3 ml/L) protecting fruit buds and cabbage heads.",
        "Harvesting: Synergized natural pyrethrins or NSKE providing clean, residue-free control with 0-day PHI.",
        "Operational: Spray strictly after 4:30 PM with fine hollow-cone coverage on lower leaf surfaces."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U4-SUB16",
      "modelAnswer": "This scenario represents a classic farmer misconception regarding the mode of action of botanical biopesticides compared to synthetic neurotoxins:\n\n**Agronomic Advice and Biological Explanation for the Grower:**\n1. **Cease Immediate Spraying of Monocrotophos:** Strongly advise the farmer **NOT** to apply hazardous organophosphates like monocrotophos, as the botanical treatment is working exactly as intended by biological design.\n2. **Explanation of Antifeedant Action:**\n   - Azadirachtin and salannin present in NSKE operate primarily as **potent sensory antifeedants**. Upon contacting the leaves, limonoids fired deterrent gustatory chemoreceptors on the caterpillars' mouthparts, signaling intense bitterness and completely halting further feeding within 4 hours.\n   - Because the larvae have ceased feeding, they are causing **zero additional economic damage** to the tomato or cabbage plants. Leaf consumption and fruit boring have stopped completely.\n3. **Explanation of Delayed IGR Mortality:**\n   - Azadirachtin is an **Insect Growth Regulator (IGR)**, not a contact neurotoxin. It does not cause rapid neuro-muscular convulsions or immediate knockdown.\n   - The absorbed azadirachtin is actively circulating within the larval hemolymph, shutting down the release of PTTH from the brain and halting ecdysteroid synthesis.\n   - Actual mortality will occur over the next **3 to 6 days** through two inexorable pathways: progressive starvation (inanition) and fatal ecdysial failure when the caterpillar attempts to molt. Larvae will turn blackened, shriveled, and die trapped within their old cuticles.\n4. **Ecological and Residue Benefits:**\n   - Reassure the grower that by waiting 3-4 days, they will achieve complete larval control while preserving beneficial natural enemies (spiders, predatory mirids, and *Trichogramma* wasps) that will eliminate remaining pest eggs, while maintaining safe, pesticide-residue-free vegetables for market.",
      "maxMarks": 6,
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility",
      "questionType": "APPLICATION",
      "questionText": "A vegetable grower notices that after spraying NSKE 5%, caterpillar feeding ceased within 4 hours, but larvae were still alive after 24 hours. The grower intends to apply synthetic monocrotophos. Advise the farmer on the underlying biology.",
      "outlinePoints": [
        "Reassure the farmer that cessation of feeding within 4 h confirms the botanical spray was successful.",
        "Limonoids act as sensory antifeedants; larvae cause zero economic damage once feeding ceases.",
        "Azadirachtin is an endocrine IGR, not an acute neurotoxin; death occurs during molting in 3-6 days.",
        "Larvae will succumb to starvation and ecdysial arrest without harming crop yield.",
        "Avoiding monocrotophos preserves beneficial natural enemies and guarantees residue-free produce."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U4-SUB17",
      "modelAnswer": "A multi-herbal botanical extract (popularly termed 'Agniastra' or Garlic-Chilli-Neem extract) combines the repellent, sensory irritant, and endocrine-disrupting properties of three distinct plant secondary metabolite profiles:\n\n**Standard Multi-Herbal Formulation Recipe (for 100 Liters Spray):**\n1. **Raw Material Ingredients:**\n   - Fresh Garlic cloves (*Allium sativum*): 1.0 kg\n   - Hot Green Chilli (*Capsicum annuum* / *frutescens* - high pungency): 1.0 kg\n   - Fresh Neem leaves or crushed seed kernels: 5.0 kg\n   - Water: 100 liters\n   - Soap / liquid detergent: 100 grams (0.1% as emulsifier/sticker)\n\n2. **Preparation Procedure:**\n   - *Paste Preparation:* Thoroughly crush or grind the garlic cloves and hot chillies separately into smooth, fine pastes using a stone mill or commercial grinder. Crush the neem leaves/kernels coarsely.\n   - *Infusion & Boiling (or Fermentation):* Combine the garlic paste, chilli paste, and neem in a large vessel containing 10 liters of water. Bring to a gentle boil for 15 to 20 minutes (or steep without heating for 48 hours in an airtight plastic drum to allow anaerobic aqueous extraction).\n   - *Extraction:* Allow the mixture to cool to ambient temperature. Squeeze the solid fibrous residue thoroughly through a three-layered fine muslin cloth to remove all particulate matter that could clog sprayer nozzles.\n   - *Soap Addition & Dilution:* Blend the 100 g of dissolved soap flakes into the concentrated filtrate, and dilute with clean water to make up the final 100 liters of spray solution.\n\n3. **Field Delivery and Spectrum:**\n   - Target Pests: Aphids, whiteflies, thrips, jassids, and early instar caterpillars in chili, brinjal, and okra.\n   - Spray Timing: Apply during late evening (after 4:30 PM). Pungent allicin (garlic) and capsaicin (chilli) irritate insect sensory receptors and strip cuticular wax, while neem limonoids provide long-term IGR and feeding disruption.",
      "maxMarks": 6,
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics",
      "questionType": "APPLICATION",
      "questionText": "A commercial organic farmer seeks to prepare a multi-herbal botanical pest repellent using garlic, chilli, and neem for controlling sucking pests. Detail the formulation recipe and field application.",
      "outlinePoints": [
        "Ingredients: 1 kg garlic, 1 kg hot chilli, 5 kg neem leaves/kernels for 100 L water.",
        "Grind garlic and chilli into fine pastes; crush neem leaves coarsely.",
        "Boil gently for 15-20 min or steep for 48 h in 10 L water, then filter through muslin cloth.",
        "Blend 100 g soap as an emulsifier and dilute with water to make up 100 L.",
        "Targets aphids, whiteflies, and thrips; spray late evening for combined irritant and IGR action."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U4-SUB18",
      "modelAnswer": "Statutory verification of Azadirachtin A and B in commercial formulations is executed via isocratic or gradient Reverse-Phase High-Performance Liquid Chromatography (RP-HPLC) under standardized Bureau of Indian Standards (BIS) and CIB&RC testing guidelines:\n\n**RP-HPLC Analytical Protocol:**\n1. **Instrument and Chromatographic Setup:**\n   - HPLC System: High-pressure binary or quaternary pump equipped with an autosampler and UV/Photodiode Array (PDA) detector set at **214 nm** (the absorption maximum for the enone and furan chromophores of azadirachtin).\n   - Column: Stationary phase consisting of a reverse-phase **C18 (Octadecylsilane)** column (250 mm length x 4.6 mm internal diameter, 5 \u00b5m particle size) maintained at 30\u00b0C.\n   - Mobile Phase: Degassed and sonicated mixture of HPLC-grade **Acetonitrile : Water (40:60 v/v)** or Methanol:Water at an isocratic flow rate of 1.0 ml/min.\n\n2. **Calibration Standard Preparation:**\n   - Accurately weigh 10.0 mg of certified reference standard Azadirachtin A (purity >95%) on an analytical balance.\n   - Dissolve in 10.0 ml of HPLC-grade methanol in a volumetric flask (1000 \u00b5g/ml stock). Prepare serial working calibration standards (10, 25, 50, 100, 200 \u00b5g/ml) to generate a linear calibration curve (R2 > 0.999).\n\n3. **Sample Extraction and Preparation:**\n   - Accurately weigh 1.0 g of the commercial 1500 ppm Neem EC formulation into a 50 ml volumetric flask.\n   - Add 30 ml of HPLC-grade methanol, sonicate in an ultrasonic bath for 15 minutes to fully extract limonoids from the oil/emulsifier matrix, and make up to volume with methanol.\n   - Filter an aliquot through a 0.22 \u00b5m PTFE syringe membrane filter into an autosampler HPLC vial.\n\n4. **Injection and Quantification:**\n   - Inject 20 \u00b5l of standard and sample solutions in triplicate.\n   - Identify the chromatographic peak of Azadirachtin A (retention time typically ~8.5 to 10.5 minutes depending on column) and Azadirachtin B (~7.0 to 8.0 minutes).\n   - Calculate concentration:\n     Azadirachtin (ppm) = [Peak Area of Sample / Peak Area of Standard] x Standard Conc (\u00b5g/ml) x [Sample Volume (ml) / Sample Weight (g)] x Purity Factor.\n   - The product complies with CIB&RC specifications if total azadirachtin is >= 1500 ppm (0.15% w/w).",
      "maxMarks": 6,
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionType": "APPLICATION",
      "questionText": "Describe how to test and verify the active Azadirachtin concentration of a commercial 1500 ppm Neem EC product using Reverse-Phase HPLC.",
      "outlinePoints": [
        "Instrumentation: RP-HPLC with C18 column (250x4.6 mm, 5 \u00b5m) and UV/PDA detector set at 214 nm.",
        "Mobile Phase: Acetonitrile : Water (40:60 v/v) at an isocratic flow rate of 1.0 ml/min at 30\u00b0C.",
        "Standards: Serial dilutions of certified Azadirachtin A (10-200 \u00b5g/ml) establishing R2 > 0.999 curve.",
        "Sample: Dissolve 1.0 g EC in methanol, sonicate for 15 min, and filter through 0.22 \u00b5m PTFE filter.",
        "Quantification: Compare sample peak areas against calibration curve; certified standard requires >= 1500 ppm."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U4-SUB19",
      "modelAnswer": "The rapid loss of bioefficacy and foul gas generation in the bottled neem extract produced by the self-help group stems from severe chemical, photochemical, and microbiological degradation failures:\n\n**Diagnostic Analysis of Technical Failures:**\n1. **Aqueous Hydrolysis of Azadirachtin:**\n   - Azadirachtin is chemically unstable in unbuffered aqueous environments. Over 2 months in water, ester and hemiacetal linkages undergo base- or acid-catalyzed hydrolysis, converting active azadirachtin into biologically inert degradation products (isoazadirachtin and azadirachtinin), dropping active potency to near zero.\n2. **Photolytic Degradation (Clear Plastic Bottles):**\n   - Storing the extract in clear, transparent bottles exposed active limonoids to ambient visible and ultraviolet light. Azadirachtin contains conjugated diene and furan rings that undergo rapid photo-oxidation and cleavage under light, completely inactivating the molecules.\n3. **Microbial Fermentation and Putrefaction:**\n   - Aqueous extracts of neem seed kernels contain abundant water-soluble carbohydrates, free amino acids, and proteins extracted alongside limonoids.\n   - Because no antimicrobial preservative or chemical stabilizer was added, airborne yeast, lactic acid bacteria, and anaerobic spore-formers proliferated. They fermented the organic sugars, producing carbon dioxide and volatile organic sulfur gases (mercaptans and hydrogen sulfide), causing bottle bloating, foul odors, and microbial breakdown of active limonoids.\n\n**Prescribed Industrial and Processing Remedies:**\n1. **Transition to Anhydrous Solvent or Oil Formulations:**\n   - Abandon direct bottling of raw aqueous extracts for long-term storage; aqueous extracts must be used within 24 hours of preparation.\n   - For commercial shelf-stable products, extract kernels using ethanol or ethyl acetate, evaporate the solvent, and dissolve the technical concentrate in anhydrous vegetable oil (e.g., refined soybean oil) or deodorized petroleum solvents to create an Emulsifiable Concentrate (EC).\n2. **Incorporate Chemical Stabilizers:**\n   - Add 1-2% epoxidized soybean oil (ESBO) to neutralize trace acidity, and add 0.1% sodium benzoate or methyl paraben if liquid herbal concentrates are prepared.\n3. **Use Protective Packaging:**\n   - Package exclusively in **amber-colored glass bottles** or **high-density polyethylene (HDPE)** containers with opaque walls to block 100% of actinic ultraviolet light.\n   - Store containers in a cool, dry, dark warehouse below 25\u00b0C.",
      "maxMarks": 8,
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs",
      "questionType": "CASE_STUDY",
      "questionText": "A village self-help group produces bottled 'Neem Seed Extract' for local farmers. After two months of storage in clear transparent plastic bottles, farmers complain of zero pest control and foul-smelling gas in the bottles. Diagnose the technical failures and prescribe industrial remedies.",
      "outlinePoints": [
        "Failure 1: Aqueous hydrolysis broke down ester and hemiacetal linkages into inert isoazadirachtin.",
        "Failure 2: Clear plastic bottles allowed solar UV photolysis of furan rings, inactivating molecules.",
        "Failure 3: Unpreserved seed sugars/proteins underwent bacterial fermentation, producing gas and foul odors.",
        "Remedy 1: Formulate as an anhydrous Emulsifiable Concentrate (EC) in refined vegetable oil.",
        "Remedy 2: Add epoxidized soybean oil stabilizers and antimicrobial preservatives.",
        "Remedy 3: Package exclusively in opaque amber glass or HDPE containers stored below 25\u00b0C."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U4-SUB20",
      "modelAnswer": "This scenario demonstrates the classic pharmacological distinction between rapid **Knockdown** and true **Mortality** caused by natural pyrethrins when applied without a metabolic synergist:\n\n**Physiological Diagnosis:**\n1. **Axonic Penetration and Knockdown:**\n   - Natural pyrethrins are exceptionally lipophilic monoterpene cyclopentenolone esters. They rapidly penetrated the cuticular wax of *Dermanyssus gallinae* mites within seconds of contact.\n   - Binding to voltage-gated sodium channels on axonal membranes, pyrethrins prevented channel closing, causing a sustained flood of sodium ions. This triggered massive, repetitive nerve discharges and depolarization block, producing immediate motor paralysis and rapid knockdown within 3 minutes.\n2. **Metabolic Recovery via Cytochrome P450:**\n   - Chicken red mites, like most arthropods, possess high baseline titers of microsomal **Cytochrome P450 monooxygenases (CYP450)** and carboxylesterases evolved to detoxify dietary xenobiotics.\n   - In the absence of an enzyme inhibitor, these CYP450 enzymes rapidly oxidized the chrysanthemic and pyrethric acid side chains of the un-synergized pyrethrins into non-toxic hydroxylated and carboxylated metabolites.\n   - Within 4 to 6 hours, tissue concentrations of intact pyrethrins at axonal sodium channels dropped below the pharmacological threshold. The sodium channels recovered normal gating kinetics, nerve conduction was restored, and over 80% of the 'knocked-down' mites fully recovered and resumed host parasitism.\n\n**Design of a Permanent Corrective Solution:**\n1. **Incorporate Piperonyl Butoxide (PBO) Synergist:**\n   - Reformulate the spray to include **Piperonyl Butoxide (PBO) at a 1:5 or 1:8 ratio** (e.g., 0.1% pyrethrins + 0.5% PBO).\n   - PBO contains a benzodioxole ring that coordinates irreversibly with the heme iron of mite CYP450 enzymes (suicide inhibition). With metabolic detoxification completely blocked, pyrethrin molecules remain bound to sodium channels indefinitely, converting 3-minute knockdown into 100% irreversible mite mortality.\n2. **Integrate Desiccant Dusts and Neem:**\n   - Dust poultry cracks, crevices, and roosting perches with **diatomaceous earth (DE)** combined with **Neem Seed Extract (1500 ppm)**.\n   - Diatomaceous earth abrasively strips the protective epicuticular wax of the mites, causing fatal desiccation, while neem limonoids provide residual antifeedant action and prevent egg hatching.",
      "maxMarks": 8,
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism",
      "questionType": "CASE_STUDY",
      "questionText": "A poultry farmer applies a natural pyrethrin spray without PBO to control chicken red mites (Dermanyssus gallinae). All mites drop paralyzed in 3 minutes, but 6 hours later, over 80% are walking actively again. Diagnose the physiological cause and design a permanent solution.",
      "outlinePoints": [
        "Diagnosis: Natural pyrethrins caused rapid axonal sodium channel knockdown within 3 minutes.",
        "Cause of Recovery: Mite Cytochrome P450 enzymes metabolized un-synergized pyrethrins within 4-6 hours.",
        "Nerve channels restored normal gating, allowing 80% of knocked-down mites to recover.",
        "Solution: Add Piperonyl Butoxide (PBO at 1:5 ratio) to irreversibly inhibit CYP450 detoxification enzymes.",
        "Integration: Dust cracks with diatomaceous earth and neem to provide residual desiccation and IGR control."
      ],
      "difficulty": "Hard"
    }
  ],
  "flashcards": [
    {
      "id": "ENT203-U4-FC01",
      "front": "What chemical class does Azadirachtin belong to?",
      "back": "A highly oxygenated C-seco-limonoid (tetranortriterpenoid) isolated from neem seeds.",
      "hint": "Tetranortriterpenoid",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry"
    },
    {
      "id": "ENT203-U4-FC02",
      "front": "What part of the neem tree has the highest azadirachtin concentration?",
      "back": "Neem seed kernels (2 to 4 mg per gram of dried kernel).",
      "hint": "Seed kernels",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry"
    },
    {
      "id": "ENT203-U4-FC03",
      "front": "How does Azadirachtin disrupt insect molting biochemically?",
      "back": "It arrests PTTH release from the brain, depleting 20-hydroxyecdysone and preventing apolysis and ecdysis.",
      "hint": "Inhibits PTTH and ecdysone",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility"
    },
    {
      "id": "ENT203-U4-FC04",
      "front": "What is the primary sensory mode of action of Salannin in neem?",
      "back": "Potent gustatory feeding deterrence (antifeedant), firing bitter receptors and halting feeding.",
      "hint": "Gustatory antifeedant",
      "syllabusTopic": "Neem-based biopesticides: active limonoids (Azadirachtin, Salannin, Nimbin) and phytochemistry"
    },
    {
      "id": "ENT203-U4-FC05",
      "front": "What quantity of neem kernels is needed for 100 liters of NSKE 5%?",
      "back": "5 kilograms of dried neem seed kernels (50 g per liter of water).",
      "hint": "5 kg per 100 L",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs"
    },
    {
      "id": "ENT203-U4-FC06",
      "front": "Why should neem kernels be coarsely crushed rather than finely ground for NSKE?",
      "back": "Fine powder expels mucilage and oil that form a sticky gelatinous paste, trapping active limonoids.",
      "hint": "Prevents sticky paste clumping",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs"
    },
    {
      "id": "ENT203-U4-FC07",
      "front": "What role does soap powder (0.1%) play in NSKE preparation?",
      "back": "Acts as an emulsifier, surfactant, and wetting agent to spread the extract on waxy leaves.",
      "hint": "Emulsifier and wetting agent",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs"
    },
    {
      "id": "ENT203-U4-FC08",
      "front": "How does neem cake benefit soil nitrogen management?",
      "back": "Acts as a nitrification inhibitor, suppressing Nitrosomonas bacteria and reducing nitrate leaching.",
      "hint": "Nitrification inhibitor",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs"
    },
    {
      "id": "ENT203-U4-FC09",
      "front": "What are the botanical sources of natural pyrethrins?",
      "back": "Flower capitula of the Dalmatian daisy, Chrysanthemum cinerariifolium (Asteraceae).",
      "hint": "Chrysanthemum cinerariifolium",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC10",
      "front": "What neurotoxic symptom characterizes natural pyrethrin poisoning?",
      "back": "Rapid knockdown effect (instant paralysis within 1 to 5 minutes) via sodium channel disruption.",
      "hint": "Rapid knockdown (1-5 min)",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC11",
      "front": "Why is Piperonyl Butoxide (PBO) formulated with pyrethrins?",
      "back": "It acts as a suicide inhibitor of Cytochrome P450 enzymes, preventing metabolic recovery from knockdown.",
      "hint": "Inhibits CYP450 detoxification",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC12",
      "front": "From which plant is Rotenone commercially extracted?",
      "back": "Dried roots of tropical leguminous vines Derris elliptica and Lonchocarpus nicou.",
      "hint": "Derris and Lonchocarpus roots",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC13",
      "front": "What is the intracellular target of Rotenone?",
      "back": "Inhibits Complex I (NADH:ubiquinone oxidoreductase) of the mitochondrial electron transport chain.",
      "hint": "Mitochondrial Complex I",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC14",
      "front": "Why is rotenone prohibited near aquatic environments?",
      "back": "It is an extreme piscicide, absorbed across fish gills causing fatal respiratory arrest at <10 ppb.",
      "hint": "Extremely toxic to fish",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC15",
      "front": "What is the active furanoflavonoid in Karanj (Pongamia pinnata) oil?",
      "back": "Karanjin, which provides contact insecticidal, repellent, and synergist properties.",
      "hint": "Karanjin",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics"
    },
    {
      "id": "ENT203-U4-FC16",
      "front": "What active insecticidal compounds are found in custard apple (Annona squamosa) seeds?",
      "back": "Annonaceous acetogenins (such as squamocin), which inhibit mitochondrial Complex I.",
      "hint": "Annonaceous acetogenins",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics"
    },
    {
      "id": "ENT203-U4-FC17",
      "front": "What alkaloid is found in tobacco waste extracts and what is its receptor target?",
      "back": "Nicotine, which acts as an agonist of nicotinic acetylcholine receptors (nAChR).",
      "hint": "Nicotine / nAChR",
      "syllabusTopic": "Secondary botanicals (Pongamia, Annona, Vitex) and environmental degradation dynamics"
    },
    {
      "id": "ENT203-U4-FC18",
      "front": "What is the Pre-Harvest Interval (PHI) of natural pyrethrins?",
      "back": "0 to 1 day, because solar UV radiation photolyzes residues into non-toxic fragments within hours.",
      "hint": "0 to 1 day PHI",
      "syllabusTopic": "Natural pyrethrins and rotenone: sources, modes of action, knockdown effect, and synergism"
    },
    {
      "id": "ENT203-U4-FC19",
      "front": "How does Azadirachtin affect female insect reproduction?",
      "back": "Inhibits vitellogenin synthesis and oocyte uptake, causing ovarian atrophy and egg sterility.",
      "hint": "Ovarian atrophy and sterility",
      "syllabusTopic": "Azadirachtin mode of action: IGR, ecdysone disruption, antifeedant, and sterility"
    },
    {
      "id": "ENT203-U4-FC20",
      "front": "Why are commercial neem ECs stabilized with epoxidized soybean oil (ESBO)?",
      "back": "ESBO acts as an acid scavenger, preventing acid-catalyzed degradation of azadirachtin.",
      "hint": "Acid scavenger preventing degradation",
      "syllabusTopic": "Neem formulations: NSKE 5% preparation, neem cake, neem oil, and commercial ECs"
    }
  ]
};
