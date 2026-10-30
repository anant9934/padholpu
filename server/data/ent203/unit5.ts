import { UnitContent } from "./types";

export const unit5Content: UnitContent = {
  "unitNumber": 5,
  "title": "Semiochemicals and Integrated Use",
  "shortDescription": "Pheromones and allelochemicals, major Indian agricultural pheromones (Gossyplure, Helilure, Spodolure, Ferrugineol), trap engineering, mating disruption, the Push-Pull strategy, and bio-intensive IPM schedules.",
  "estimatedReadTimeMinutes": 28,
  "syllabusTopics": [
    "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
    "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
    "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
    "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
    "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
    "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies"
  ],
  "notes": {
    "learningObjectives": [
      "Classify semiochemicals, differentiating intraspecific pheromones (sex, aggregation, alarm) from interspecific allelochemicals (allomones, kairomones, synomones).",
      "Identify key chemical sex pheromones of major Indian agricultural pests: Gossyplure (pink bollworm), Spodolure (tobacco caterpillar), and Helilure (gram pod borer).",
      "Contrast operational semiochemical deployment strategies: pest population monitoring, mass trapping, attract-and-kill, and atmospheric mating disruption.",
      "Deconstruct trap designs (delta, sleeve, funnel, sticky) and dispenser release kinetics (rubber septa, polyethylene ampoules).",
      "Analyze the ecological mechanism of the Push-Pull strategy (Desmodium push + Napier grass pull) and formulate integrated IPM schedules combining biopesticides with natural enemies."
    ],
    "sections": [
      {
        "id": "sec-5-1",
        "heading": "1. Semiochemicals: Classification, Concepts, and Allelochemicals",
        "content": "Semiochemicals (from the Greek *semeion*, meaning sign or signal) are chemical substances or mixtures that convey information between individual organisms, eliciting behavioral, physiological, or developmental responses in receiving individuals. In agricultural pest management, semiochemicals represent the ultimate tools for non-toxic, behavioral manipulation.\n\n**Broad Categorization:**\nSemiochemicals are bifurcated based on whether communication occurs within the same species or across different species:\n\n1. **Pheromones (Intraspecific Chemical Signals):** Chemical messengers emitted by an individual that elicit a specific behavioral or developmental response in a member of the **same species**:\n   - *Sex Pheromones:* Typically emitted by virgin adult females (or rarely males) to attract the opposite sex over long distances for copulation. Characterized by extreme volatility, species-specific stereochemical isomer ratios, and activity at picogram levels.\n   - *Aggregation Pheromones:* Emitted by individuals of either sex to recruit conspecific individuals of both sexes for joint resource exploitation, feeding, shelter, or mass overwintering (common in curculionid weevils and bark beetles).\n   - *Alarm Pheromones:* Released upon attack or environmental threat, inducing dispersion, dropping, or defensive stinging in conspecifics (e.g., (E)-beta-farnesene in aphids; isoamyl acetate in honeybees).\n   - *Trail-Following & Epideictic Pheromones:* Trail pheromones mark routes to food sources (ants/termites); epideictic (marking) pheromones deter conspecific oviposition on already-infested fruits.\n\n2. **Allelochemicals (Interspecific Chemical Signals):** Chemical signals emitted by an individual that evoke behavioral or physiological responses in a member of a **different species**:\n   - *Allomones:* Evoke a response favorable to the **emitter** but not to the receiver (e.g., defensive chemical secretions, floral scents deceiving pollinators, botanical antifeedants).\n   - *Kairomones:* Evoke a response favorable to the **receiver** but detrimental to the emitter (e.g., host plant volatiles or caterpillar frass scents that attract parasitoid wasps like *Trichogramma* and *Campoletis* to locate their host).\n   - *Synomones:* Evoke a response mutually beneficial to **both emitter and receiver** (e.g., herbivore-induced plant volatiles, HIPVs, released by damaged maize plants that recruit predatory bugs or parasitoids to destroy caterpillars).",
        "subsections": []
      },
      {
        "id": "sec-5-2",
        "heading": "2. Major Agricultural Pheromones in India and Pest Identification",
        "content": "In Indian crop protection, synthetic blends mimicking natural female sex and aggregation pheromones are standardized and commercialized across diverse agro-ecosystems:\n\n**Key Agricultural Pheromones in India:**\n1. **Gossyplure (*Pectinophora gossypiella* - Pink Bollworm of Cotton):**\n   - Chemical Composition: A 1:1 isomeric blend of **(Z,Z)-7,11-hexadecadienyl acetate** and **(Z,E)-7,11-hexadecadienyl acetate**.\n   - Operational Role: Deployed in sleeve or delta traps for early monitoring (ETL: 8 moths/trap/night for 3 consecutive nights) and widespread atmospheric mating disruption.\n2. **Helilure (*Helicoverpa armigera* - Cotton Bollworm / Gram Pod Borer):**\n   - Chemical Composition: A precise 97:3 blend of **(Z)-11-hexadecenal (Z11-16:Ald)** and **(Z)-9-hexadecenal (Z9-16:Ald)**.\n   - Operational Role: Funnel traps deployed at 12 traps/ha for monitoring egg-laying waves in chickpea, pigeonpea, and cotton.\n3. **Spodolure (*Spodoptera litura* - Tobacco Caterpillar):**\n   - Chemical Composition: A 9:1 blend of **(Z,E)-9,11-tetradecadienyl acetate** and **(Z,E)-9,12-tetradecadienyl acetate**.\n   - Operational Role: Deployed in bucket traps for mass monitoring and mass trapping in soybean, groundnut, and tobacco.\n4. **Scirpolure (*Scirpophaga incertulas* - Yellow Stem Borer of Rice):**\n   - Chemical Composition: A 3:1 blend of **(Z)-11-hexadecenal** and **(Z)-9-octadecenal**.\n   - Operational Role: Sleeve traps placed at canopy height (ETL: 1 egg mass/m2 or 1 moth/trap/day).\n5. **Ferrugineol (*Rhynchophorus ferrugineus* - Red Palm Weevil of Coconut):**\n   - Chemical Composition: **4-methyl-5-nonanol** and **4-methyl-5-nonanone** (aggregation pheromone attracting both males and females).\n   - Operational Role: Bucket traps placed in coconut plantations baited with sugarcane juice or crushed date palm.",
        "subsections": [
          {
            "subheading": "Summary of Major Commercial Pheromone Systems in India",
            "content": "Profiles of commercially registered lures and target pests:",
            "table": {
              "headers": [
                "Target Pest",
                "Common Name",
                "Pheromone Trade Blend",
                "Key Chemical Components",
                "Optimal Trap Type"
              ],
              "rows": [
                [
                  "Pectinophora gossypiella",
                  "Pink bollworm",
                  "Gossyplure",
                  "(Z,Z)- and (Z,E)-7,11-hexadecadienyl acetate (1:1)",
                  "Sleeve trap / Delta trap"
                ],
                [
                  "Helicoverpa armigera",
                  "Gram pod borer",
                  "Helilure",
                  "(Z)-11-hexadecenal + (Z)-9-hexadecenal (97:3)",
                  "Funnel / Sleeve trap"
                ],
                [
                  "Spodoptera litura",
                  "Tobacco caterpillar",
                  "Spodolure",
                  "(Z,E)-9,11-tetradecadienyl acetate",
                  "Plastic bucket / Funnel trap"
                ],
                [
                  "Scirpophaga incertulas",
                  "Yellow stem borer",
                  "Scirpolure",
                  "(Z)-11-hexadecenal + (Z)-9-octadecenal (3:1)",
                  "Sleeve trap"
                ],
                [
                  "Plutella xylostella",
                  "Diamondback moth",
                  "Plutellure",
                  "(Z)-11-hexadecenal + (Z)-11-hexadecenyl acetate",
                  "Sticky Delta trap"
                ],
                [
                  "Rhynchophorus ferrugineus",
                  "Red palm weevil",
                  "Ferrugineol",
                  "4-methyl-5-nonanol (Aggregation pheromone)",
                  "Bucket trap with food bait"
                ],
                [
                  "Bactrocera dorsalis",
                  "Oriental fruit fly",
                  "Methyl eugenol",
                  "4-allyl-1,2-dimethoxybenzene (Parapheromone)",
                  "Steiner / McPhail bottle trap"
                ],
                [
                  "Bactrocera cucurbitae",
                  "Melon fruit fly",
                  "Cue-lure",
                  "4-(p-acetoxyphenyl)-2-butanone (Parapheromone)",
                  "Bottle trap with insecticide"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-5-3",
        "heading": "3. Trap Engineering, Dispenser Kinetics, and Field Deployment",
        "content": "A pheromone monitoring or control program requires harmonious engineering of lures, dispensers, and trap designs:\n\n**1. Trap Architecture:**\n- **Delta Trap:** A triangular plastic prism with open ends containing a replaceable sticky adhesive liner (polyisobutylene glue). Ideal for small, fragile microlepidoptera such as *Plutella xylostella* and leafminers.\n- **Funnel / Bucket Trap:** Comprises an entrance canopy, a smooth plastic funnel, and a clear or opaque collection bucket. The lure is suspended beneath the canopy, and a dichlorvos (DDVP) strip or soapy water in the bucket prevents escape. Standard for high-density catches of noctuids (*Helicoverpa*, *Spodoptera*).\n- **Sleeve Trap:** A funnel attached to a long, flexible transparent polyethylene sleeve tied at the bottom. Highly economical, weather-resistant, and standard for rice stem borer and pink bollworm.\n- **Sticky Traps (Color Cues):** Utilize visual chromatic attraction: **Yellow sticky traps** attract whiteflies, aphids, and leafminers; **Blue sticky traps** attract thrips (*Thrips tabaci*, *Scirtothrips dorsalis*).\n\n**2. Controlled-Release Dispenser Systems:**\n- Pheromone molecules are volatile organic esters, aldehydes, or epoxides. Direct exposure leads to rapid flash evaporation. Controlled release is achieved through:\n  - *Rubber Septa:* Pheromone is absorbed into the porous matrix of vulcanized natural rubber septa; diffusion through the polymer matrix sustains zero-order or pseudo-first-order release over 3 to 4 weeks.\n  - *Polyethylene Capillary Tubes & Ampoules:* Sealed microporous plastic ampoules or capillary tubes where vapor diffuses across polymeric membrane walls over 6 to 8 weeks.\n\n**3. Operational Field Strategies:**\n- **Monitoring & Survey:** 5 to 12 traps/ha installed at crop canopy height to track seasonal adult emergence, map population dynamics, and trigger threshold-based spraying (ETL).\n- **Mass Trapping:** High trap density (25 to 50 traps/ha) deployed across contiguous acreage to remove large fractions of male moths, depressing fertilization rates.\n- **Mating Disruption (Confusion Technique):** Deploys thousands of high-emission dispensers (100 to 500 dispensers/ha) or microencapsulated flowable sprayable pheromones. By saturating the field atmosphere with synthetic sex pheromone, male moths are rendered incapable of detecting the minute plume trails emitted by virgin females through three mechanisms:\n  - *Trail Masking:* Background pheromone obscures discrete female plumes.\n  - *False-Trail Following:* Males waste energy following thousands of artificial dispensers.\n  - *Sensory Adaptation / Habituation:* Continuous high pheromone concentrations saturate antennal sensilla trichodea and central nervous system interneurons, shutting down responsiveness.\n- **Attract-and-Kill (Lure-and-Kill):** Combines a pheromone or food kairomone attractant with a fast-acting contact insecticide or pathogen within a localized bait station, eliminating the need to collect or trap moths.",
        "subsections": []
      },
      {
        "id": "sec-5-4",
        "heading": "4. The Push-Pull Strategy: Ecological Engineering for Pest Control",
        "content": "The **Push-Pull Strategy** (also known as the *Stimulo-Deterrent Diversionary Strategy*) is a groundbreaking agro-ecological pest management paradigm developed by Pyke, Miller, Cowles, and popularized for smallholders by Prof. Zeyaur Khan and Prof. John Pickett at ICIPE (Kenya) and Rothamsted Research (UK).\n\n**Ecological Architecture:**\nThe system integrates behavioral semiochemical manipulation using companion plants established within and around the cash crop without synthetic chemicals:\n1. **The 'Push' Component (Intercropped Deterrent):**\n   - A companion crop is planted between rows of the main cash crop (e.g., maize or sorghum intercropped with the leguminous perennial fodder plant *Desmodium uncinatum* - Silverleaf desmodium, or *Melinis minutiflora* - Molasses grass).\n   - Semiochemical Action: *Desmodium* foliage constitutively biosynthesizes and releases volatile monoterpenes and sesquiterpenes\u2014specifically **(E)-beta-ocimene, (E)-4,8-dimethyl-1,3,7-nonatriene (DMNT), and alpha-cedrene**.\n   - Behavioral Response: Gravid female stemborer moths (*Busseola fusca*, *Chilo partellus*) and armyworms (*Spodoptera frugiperda*) interpret these volatiles as signals of an overcrowded or unpalatable host plant, repelling them away from the maize crop ('the Push').\n   - *Dual Phenomenon (Allelopathy against Striga):* Root exudates of *Desmodium* produce isoflavanones (e.g., uncinanone B) that stimulate suicidal germination of the parasitic weed *Striga hermonthica* while simultaneously inhibiting radical haustorial attachment, completely suppressing Striga.\n\n2. **The 'Pull' Component (Border Trap Crop):**\n   - A resilient, attractive border crop is planted in 2 to 3 perimeter rows surrounding the entire field (e.g., Napier grass *Pennisetum purpureum*, or Sudan grass *Sorghum vulgare sudanense*).\n   - Semiochemical Action: Napier grass emits volatile kairomone signals at concentrations 100-fold higher than maize, acting as a powerful olfactory magnet that lures searching female moths away from the interior of the field ('the Pull').\n   - Dead-End Host Trap: When moths oviposit on Napier grass, the plant produces a thick, sticky resinous sap in response to larval feeding that traps and drowns over 80-90% of boring larvae, preventing adult emergence.\n\n3. **Agro-Ecological Benefits:** Yields 2- to 3-fold increases in maize harvest, provides high-protein livestock fodder, improves soil fertility through Desmodium nitrogen fixation, and prevents soil erosion.",
        "subsections": []
      },
      {
        "id": "sec-5-5",
        "heading": "5. Biopesticide Integration in IPM and Indian Success Case Studies",
        "content": "Sustainable pest management requires orchestrating biopesticides, semiochemicals, and biological control agents into harmonious, mutually non-disruptive crop protection schedules:\n\n**Compatibility with Natural Enemies:**\nUnlike broad-spectrum neurotoxins (synthetic pyrethroids, organophosphates) that obliterate natural predator and parasitoid complexes, biopesticides demonstrate high physiological selectivity:\n- **Baculoviruses (HaNPV, SlNPV):** 100% physiologically safe for predators (green lacewings *Chrysoperla zastrowi*, ladybird beetles *Cheilomenes sexmaculata*) and hymenopteran egg parasitoids (*Trichogramma chilonis*).\n- **Bacillus thuringiensis:** Does not harm *Trichogramma* adults; predatory bugs (*Orius*, *Geocoris*) feeding on Bt-intoxicated caterpillars show normal longevity and fecundity.\n- **Neem Formulations (NSKE 5%, Azadirachtin 1500 ppm):** Safe to adult foragers and predatory spiders when applied in late afternoon; minimal impact on *Trichogramma* parasitism rates if sprayed 24 hours after parasitoid emergence.\n\n**Landmark Indian IPM Success Case Studies:**\n1. **Cotton IPM against Bollworm Complex (Punjab, Maharashtra, Gujarat):**\n   - Interventions: Installation of Gossyplure and Helilure traps (12 traps/ha) -> Inundative release of *Trichogramma chilonis* @ 150,000 parasitoids/ha/release (5-6 releases at 7-day intervals) -> Foliar sprays of NSKE 5% at early square formation -> Targeted sprays of HaNPV (250 LE/ha) and Btk (1.5 kg/ha) against hatching larvae -> Switch to PB-Rope atmospheric mating disruption for pink bollworm.\n   - Outcome: Reduced synthetic pesticide sprays by 60-70%, eliminated insecticide resistance in *H. armigera*, and protected cotton yields.\n2. **Diamondback Moth (*Plutella xylostella*) IPM in Crucifers (Karnataka, Tamil Nadu):**\n   - Interventions: Indian mustard (*Brassica juncea*) trap cropping (2 rows of mustard for every 25 rows of cabbage) -> Sticky delta traps with Plutellure for monitoring -> Sequential applications of *Bacillus thuringiensis* subsp. *kurstaki* / *aizawai* (1.0 kg/ha) rotated with NSKE 5% and release of larval parasitoid *Cotesia vestalis* (*plutellae*).\n   - Outcome: Total suppression of pyrethroid-resistant DBM without synthetic chemical residues on cabbage heads.\n3. **Basmati Rice IPM against Yellow Stem Borer and Leaf Folder (Haryana, Punjab):**\n   - Interventions: Scirpolure sleeve traps for monitoring (8 traps/ha) -> Releases of *Trichogramma japonicum* and *T. chilonis* -> Conservation of predatory mirid bugs (*Cyrtorhinus lividipennis*) and spiders -> Biopesticide sprays of *Lecanicillium lecanii* / *Beauveria bassiana* and NSKE against leaf folder and brown planthopper.\n   - Outcome: Zero residue detection in export-grade Basmati rice shipments, preserving export trade value.",
        "subsections": []
      }
    ],
    "keyTakeaways": [
      "Pheromones mediate intraspecific communication (sex, aggregation, alarm), whereas allelochemicals mediate interspecific signaling (allomones, kairomones, synomones).",
      "Major commercial sex pheromones include Gossyplure (pink bollworm), Helilure (gram pod borer), Spodolure (tobacco caterpillar), and Scirpolure (yellow stem borer).",
      "Pheromone deployment includes monitoring (ETL assessment), mass trapping (25-50 traps/ha), and atmospheric mating disruption (trail masking and sensory adaptation).",
      "Trap designs match insect biology: Delta sticky traps for microlepidoptera, sleeve traps for stem borers, and bucket/funnel traps for heavy noctuid catches.",
      "The Push-Pull strategy combines intercropped Desmodium (emitting ocimene/DMNT to repel borers and suppressing Striga) with border Napier grass (pulling and trapping larvae in resin).",
      "Biopesticides (Bt, NPV, Neem) are ecologically compatible with natural enemies (Trichogramma, Chrysoperla, spiders), forming the backbone of residue-free IPM.",
      "Indian IPM successes across cotton, cabbage, and basmati rice have cut synthetic chemical pesticide applications by 60-80% while restoring natural biological balance."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Pheromone traps are designed to kill all insect pests in a field directly and eliminate the need for any other management.",
        "reality": "Pheromone traps attract only adult males of one specific target species. While mass trapping reduces male density, pheromone traps are primarily diagnostic monitoring tools to establish Economic Thresholds (ETL) and guide timely biological sprays."
      },
      {
        "myth": "Mating disruption works by poisoning male moths with volatile chemical toxins.",
        "reality": "Mating disruption uses zero poisons. It saturates the ambient canopy air with synthetic pheromone molecules to camouflage female scent plumes and cause sensory adaptation, preventing males from finding females."
      },
      {
        "myth": "In the Push-Pull strategy, Napier grass acts as a breeding ground that multiplies pests to re-infest the main crop.",
        "reality": "Napier grass is an attractive 'dead-end trap crop'. When larvae hatch and bore into Napier grass stems, the plant secretes an internal gummy, resinous sap that traps, drowns, and kills over 80-90% of invading larvae."
      }
    ],
    "summary": "Semiochemicals provide sophisticated, non-toxic behavioral manipulation of insect pests, dividing into intraspecific pheromones and interspecific allelochemicals. Key female sex pheromones (Gossyplure, Helilure, Spodolure, Scirpolure) and aggregation pheromones (Ferrugineol) are engineered into controlled-release rubber septa and deployed in Delta, sleeve, and funnel traps for monitoring, mass trapping, and atmospheric mating disruption. The Push-Pull strategy harnesses intercropped Desmodium (emitting repellent terpenes and suppressing Striga) paired with perimeter Napier grass (luring borers into a dead-end trap). Integrated seamlessly with selective biopesticides (Bt, NPV, Neem) and natural enemy releases (Trichogramma, Chrysoperla), semiochemicals enable robust, residue-free IPM paradigms in cotton, rice, and vegetables."
  },
  "mcqs": [
    {
      "id": "ENT203-U5-MCQ01",
      "options": {
        "A": "Semiochemicals",
        "B": "Phytoalexins",
        "C": "Alkaloids",
        "D": "Auxins"
      },
      "correctOption": "A",
      "explanation": "Semiochemicals (from Greek semeion, meaning mark or signal) encompass all chemical messenger compounds that convey information between organisms.",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "What is the general term for chemical substances that mediate communication between individual organisms?"
    },
    {
      "id": "ENT203-U5-MCQ02",
      "options": {
        "A": "Allomones",
        "B": "Pheromones",
        "C": "Kairomones",
        "D": "Synomones"
      },
      "correctOption": "B",
      "explanation": "Pheromones are intraspecific chemical messengers that convey information strictly between members of the same biological species.",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "Chemical signals emitted by an individual that elicit a response in a member of the SAME species are called:"
    },
    {
      "id": "ENT203-U5-MCQ03",
      "options": {
        "A": "Helilure",
        "B": "Gossyplure",
        "C": "Spodolure",
        "D": "Scirpolure"
      },
      "correctOption": "B",
      "explanation": "Gossyplure is the synthetic sex pheromone mimicking female Pectinophora gossypiella, used in cotton pest management.",
      "difficulty": "Easy",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What is the trade name of the synthetic sex pheromone blend utilized to monitor and trap pink bollworm (Pectinophora gossypiella)?"
    },
    {
      "id": "ENT203-U5-MCQ04",
      "options": {
        "A": "Helicoverpa armigera (Gram pod borer / American bollworm)",
        "B": "Spodoptera litura",
        "C": "Scirpophaga incertulas",
        "D": "Bemisia tabaci"
      },
      "correctOption": "A",
      "explanation": "Helilure contains synthetic (Z)-11-hexadecenal and (Z)-9-hexadecenal that specifically attract male Helicoverpa armigera moths.",
      "difficulty": "Easy",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "Which agricultural pest is monitored using Helilure pheromone traps in chickpea and cotton?"
    },
    {
      "id": "ENT203-U5-MCQ05",
      "options": {
        "A": "Spodolure",
        "B": "Gossyplure",
        "C": "Plutellure",
        "D": "Ferrugineol"
      },
      "correctOption": "A",
      "explanation": "Spodolure is the synthetic sex pheromone formulation targeting male moths of Spodoptera litura in soybean, tobacco, and groundnut.",
      "difficulty": "Easy",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What is the commercial pheromone lure used for tobacco caterpillar (Spodoptera litura)?"
    },
    {
      "id": "ENT203-U5-MCQ06",
      "options": {
        "A": "Sex pheromone",
        "B": "Aggregation pheromone",
        "C": "Alarm pheromone",
        "D": "Trail pheromone"
      },
      "correctOption": "B",
      "explanation": "Aggregation pheromones attract individuals of both sexes to a specific resource or shelter site, commonly found in curculionid weevils and bark beetles.",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "What type of pheromone attracts members of BOTH sexes (males and females) for feeding, breeding, or overwintering?"
    },
    {
      "id": "ENT203-U5-MCQ07",
      "options": {
        "A": "Rhinoceros beetle",
        "B": "Red palm weevil (Rhynchophorus ferrugineus)",
        "C": "Coconut black-headed caterpillar",
        "D": "Eriophyid mite"
      },
      "correctOption": "B",
      "explanation": "Ferrugineol (4-methyl-5-nonanol) is the aggregation pheromone of the red palm weevil, Rhynchophorus ferrugineus, attracting both sexes.",
      "difficulty": "Easy",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "Which destructive coconut pest is managed using the aggregation pheromone lure 'Ferrugineol'?"
    },
    {
      "id": "ENT203-U5-MCQ08",
      "options": {
        "A": "Delta trap",
        "B": "Light trap",
        "C": "Pitfall trap",
        "D": "Malaise trap"
      },
      "correctOption": "A",
      "explanation": "Delta traps are triangular prismatic traps holding a replaceable sticky bottom liner, widely used for diamondback moth and small moths.",
      "difficulty": "Easy",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "What trap design consists of a triangular plastic prism with a sticky adhesive base inside?"
    },
    {
      "id": "ENT203-U5-MCQ09",
      "options": {
        "A": "Sleeve trap",
        "B": "Pitfall trap",
        "C": "Delta trap",
        "D": "Suction trap"
      },
      "correctOption": "A",
      "explanation": "Sleeve traps feature an inverted funnel connected to a plastic sleeve, widely used in rice fields for catching yellow stem borer moths.",
      "difficulty": "Easy",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "Which trap design is standardly used with a transparent polyethylene bag tied at the bottom in rice stem borer management?"
    },
    {
      "id": "ENT203-U5-MCQ10",
      "options": {
        "A": "Whiteflies and aphids",
        "B": "Adult rhinoceros beetles",
        "C": "Termite queens",
        "D": "Subterranean grubs"
      },
      "correctOption": "A",
      "explanation": "Yellow color cues visually mimic young, lush foliar shoots, attracting soft-bodied sucking insects like whiteflies, aphids, and jassids.",
      "difficulty": "Easy",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "What insect pest is preferentially attracted to yellow sticky traps in vegetable fields?"
    },
    {
      "id": "ENT203-U5-MCQ11",
      "options": {
        "A": "Bright yellow",
        "B": "Bright blue",
        "C": "Jet black",
        "D": "Opaque white"
      },
      "correctOption": "B",
      "explanation": "Thrips (Thrips tabaci, Scirtothrips dorsalis) exhibit strong positive visual phototaxis toward blue wavelengths (around 450-470 nm).",
      "difficulty": "Easy",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "Which visual color of sticky trap is specifically deployed to monitor and capture thrips?"
    },
    {
      "id": "ENT203-U5-MCQ12",
      "options": {
        "A": "Mating disruption (confusion technique)",
        "B": "Chemical fumigation",
        "C": "Soil solarization",
        "D": "Thermal ablation"
      },
      "correctOption": "A",
      "explanation": "Mating disruption permeates the crop canopy with synthetic pheromone, preventing male moths from following female scent trails to mate.",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the non-toxic behavioral pest control technique where an entire field atmosphere is saturated with synthetic sex pheromone to prevent mating?"
    },
    {
      "id": "ENT203-U5-MCQ13",
      "options": {
        "A": "Desmodium (Silverleaf desmodium)",
        "B": "Napier grass",
        "C": "Sugarcane",
        "D": "Eucalyptus"
      },
      "correctOption": "A",
      "explanation": "Desmodium uncinatum is intercropped between maize rows to emit volatile terpenes that repel stemborers and fall armyworms ('Push').",
      "difficulty": "Easy",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionText": "In the Push-Pull strategy developed by ICIPE, what plant is famously intercropped as the 'Push' component in maize fields?"
    },
    {
      "id": "ENT203-U5-MCQ14",
      "options": {
        "A": "Desmodium",
        "B": "Napier grass (Pennisetum purpureum)",
        "C": "Tomato",
        "D": "Wheat"
      },
      "correctOption": "B",
      "explanation": "Napier grass is planted as a border trap crop, emitting attractant volatiles that draw stemborers away from maize into a dead-end trap.",
      "difficulty": "Easy",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionText": "What plant is planted along the perimeter of the field as the 'Pull' component in the Push-Pull system?"
    },
    {
      "id": "ENT203-U5-MCQ15",
      "options": {
        "A": "Kairomone",
        "B": "Allomone",
        "C": "Synomone",
        "D": "Pheromone"
      },
      "correctOption": "A",
      "explanation": "A kairomone benefits the receiving organism at the expense of the emitting organism (e.g., host odors exploited by parasitic wasps).",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "An allelochemical that benefits the RECEIVER but is disadvantageous to the emitter is defined as a:"
    },
    {
      "id": "ENT203-U5-MCQ16",
      "options": {
        "A": "Allomone",
        "B": "Kairomone",
        "C": "Synomone",
        "D": "Autocrine"
      },
      "correctOption": "A",
      "explanation": "An allomone provides an adaptive advantage to the emitting organism (e.g., defensive repellent secretions and botanical antifeedants).",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "An allelochemical that benefits the EMITTER but not the receiver is defined as an:"
    },
    {
      "id": "ENT203-U5-MCQ17",
      "options": {
        "A": "Synomone",
        "B": "Kairomone",
        "C": "Allomone",
        "D": "Pheromone"
      },
      "correctOption": "A",
      "explanation": "A synomone confers a mutual advantage to both the releasing organism and the recipient (e.g., herbivore-damaged plant volatiles recruiting parasitoids).",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "An allelochemical that evokes a mutually beneficial response for BOTH the emitter and receiver is termed a:"
    },
    {
      "id": "ENT203-U5-MCQ18",
      "options": {
        "A": "1 to 2 traps/ha",
        "B": "5 to 12 traps/ha",
        "C": "500 traps/ha",
        "D": "5000 traps/ha"
      },
      "correctOption": "B",
      "explanation": "For population monitoring and scouting, 5 to 12 pheromone traps per hectare installed at crop canopy level is the standard recommendation.",
      "difficulty": "Easy",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the standard trap density recommended per hectare for monitoring Helicoverpa armigera populations in chickpea?"
    },
    {
      "id": "ENT203-U5-MCQ19",
      "options": {
        "A": "Methyl eugenol",
        "B": "Gossyplure",
        "C": "Helilure",
        "D": "Azadirachtin"
      },
      "correctOption": "A",
      "explanation": "Methyl eugenol is a potent male parapheromone/attractant extensively used in Steiner traps for managing Bactrocera dorsalis.",
      "difficulty": "Easy",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What chemical lure is widely utilized to attract male fruit flies of Bactrocera dorsalis (Oriental fruit fly)?"
    },
    {
      "id": "ENT203-U5-MCQ20",
      "options": {
        "A": "Trichogramma chilonis",
        "B": "Spodoptera litura",
        "C": "Helicoverpa armigera",
        "D": "Aphis gossypii"
      },
      "correctOption": "A",
      "explanation": "Trichogramma chilonis is an egg parasitoid inundatively released (50,000 to 150,000/ha) to parasitize bollworm and borer eggs.",
      "difficulty": "Easy",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionText": "Which beneficial egg parasitoid wasp is standardly integrated with biopesticides in Indian cotton and sugarcane IPM?"
    },
    {
      "id": "ENT203-U5-MCQ21",
      "options": {
        "A": "1:1 mixture of (Z,Z)-7,11-hexadecadienyl acetate and (Z,E)-7,11-hexadecadienyl acetate",
        "B": "Pure unbranched hexane",
        "C": "97:3 mixture of (Z)-11-hexadecenal and (Z)-9-hexadecenal",
        "D": "4-methyl-5-nonanol"
      },
      "correctOption": "A",
      "explanation": "Natural Gossyplure is an equimolar (1:1) blend of (7Z,11Z)-hexadecadienyl acetate and (7Z,11E)-hexadecadienyl acetate.",
      "difficulty": "Medium",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What is the exact chemical composition of Gossyplure, the female sex pheromone of Pectinophora gossypiella?"
    },
    {
      "id": "ENT203-U5-MCQ22",
      "options": {
        "A": "(Z)-11-hexadecenal and (Z)-9-hexadecenal in a 97:3 ratio",
        "B": "Methyl eugenol and cue-lure in a 50:50 ratio",
        "C": "Pure ethanol and acetic acid",
        "D": "(E)-beta-farnesene and alpha-pinene"
      },
      "correctOption": "A",
      "explanation": "Helilure is formulated with (Z)-11-hexadecenal (Z11-16:Ald) and (Z)-9-hexadecenal (Z9-16:Ald) in an optimized 97:3 isomer ratio.",
      "difficulty": "Medium",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What are the primary chemical constituents of Helilure used for Helicoverpa armigera?"
    },
    {
      "id": "ENT203-U5-MCQ23",
      "options": {
        "A": "Continuous exposure to high ambient pheromone concentrations saturates antennal receptor neurons and central interneurons, halting response to female plumes",
        "B": "The synthetic pheromone chemically burns off the male moth's antennae",
        "C": "Male moths consume the pheromone and die of poison",
        "D": "The pheromone causes all eggs to turn sterile"
      },
      "correctOption": "A",
      "explanation": "Prolonged exposure to high pheromone levels causes antennal sensilla trichodea to adapt and brain glomeruli to habituate, silencing flight response.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the primary mechanism of atmospheric mating disruption known as 'sensory adaptation and habituation'?"
    },
    {
      "id": "ENT203-U5-MCQ24",
      "options": {
        "A": "Males are attracted to hundreds of artificial point sources, wasting flight energy and time until mating windows close without finding real females",
        "B": "Pheromone molecules condense into a solid wall blocking flight",
        "C": "Females are misled into following male scents",
        "D": "Predators eat the synthetic dispensers"
      },
      "correctOption": "A",
      "explanation": "High dispenser density creates numerous competing false trails; males exhaust energy tracking artificial lures rather than calling females.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "How does the 'false-trail following' mechanism operate during mating disruption in an orchard?"
    },
    {
      "id": "ENT203-U5-MCQ25",
      "options": {
        "A": "(E)-beta-ocimene, alpha-cedrene, and (E)-4,8-dimethyl-1,3,7-nonatriene (DMNT)",
        "B": "Pure methane and carbon dioxide",
        "C": "Nicotine and rotenone",
        "D": "Cellulose and lignin"
      },
      "correctOption": "A",
      "explanation": "Desmodium constitutively emits volatile terpenes ((E)-beta-ocimene, DMNT, alpha-cedrene) that moths perceive as signals of an occupied/unsuitable host.",
      "difficulty": "Medium",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionText": "What volatile terpenes constitutively released by Desmodium uncinatum foliage are responsible for repelling stemborers in the Push-Pull system?"
    },
    {
      "id": "ENT203-U5-MCQ26",
      "options": {
        "A": "Root exudates produce isoflavanones (uncinanone B) that stimulate suicidal seed germination of Striga while inhibiting haustorial root attachment",
        "B": "Desmodium roots secrete sulfuric acid into the topsoil",
        "C": "Desmodium vines wrap around Striga and choke it mechanically",
        "D": "Desmodium absorbs all water from the soil"
      },
      "correctOption": "A",
      "explanation": "Desmodium root exudates contain post-germination inhibitors (uncinanone B) that induce suicidal germination without allowing parasitic attachment.",
      "difficulty": "Medium",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionText": "How does Desmodium concurrently suppress the parasitic witchweed (Striga hermonthica) in maize fields in addition to repelling stemborers?"
    },
    {
      "id": "ENT203-U5-MCQ27",
      "options": {
        "A": "Female moths lay eggs preferentially on Napier grass, but upon larval hatching and boring, the plant produces an internal gummy sap that drowns and kills >80% of larvae",
        "B": "Napier grass leaves are coated in neurotoxic venom",
        "C": "Napier grass grows so tall that caterpillars freeze to death",
        "D": "Napier grass catches fire in sunlight"
      },
      "correctOption": "A",
      "explanation": "Moths prefer ovipositing on Napier grass, but larval entry triggers an internal resinous sap that immobilizes and drowns larvae, preventing adult emergence.",
      "difficulty": "Medium",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionText": "Why is Napier grass (Pennisetum purpureum) classified as a 'dead-end trap crop' for stemborer caterpillars?"
    },
    {
      "id": "ENT203-U5-MCQ28",
      "options": {
        "A": "Cue-lure (4-(p-acetoxyphenyl)-2-butanone)",
        "B": "Methyl eugenol",
        "C": "Gossyplure",
        "D": "Helilure"
      },
      "correctOption": "A",
      "explanation": "Cue-lure is the specific parapheromone attractant for male Bactrocera cucurbitae (melon fly) in cucurbit vegetable crops.",
      "difficulty": "Medium",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What is the active parapheromone lure used in bottle traps to attract male melon fruit flies (Bactrocera cucurbitae)?"
    },
    {
      "id": "ENT203-U5-MCQ29",
      "options": {
        "A": "They provide controlled diffusion kinetics, maintaining a sustained zero- or first-order release rate over 3 to 6 weeks while preventing rapid flash evaporation",
        "B": "They convert pheromones into solid rocks",
        "C": "They prevent rain from wetting the plastic trap",
        "D": "They act as chemical fertilizers for nearby plants"
      },
      "correctOption": "A",
      "explanation": "Polymer matrices slow down volatile evaporation, maintaining a continuous, biologically active emission plume over several weeks in the field.",
      "difficulty": "Medium",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "Why are rubber septa or polyethylene ampoules essential for formulating pheromone lures instead of open liquid containers?"
    },
    {
      "id": "ENT203-U5-MCQ30",
      "options": {
        "A": "8 to 10 adult male moths trapped per night for 3 consecutive days",
        "B": "1000 moths per trap per hour",
        "C": "Catching 1 moth in an entire season",
        "D": "ETL cannot be determined using pheromones"
      },
      "correctOption": "A",
      "explanation": "Catching 8 to 10 moths/trap/night for 3 consecutive nights signals a peak mating flight and imminent oviposition wave, triggering biopesticide sprays.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is an Economic Threshold Level (ETL) typically defined as for Helicoverpa armigera using sex pheromone monitoring traps?"
    },
    {
      "id": "ENT203-U5-MCQ31",
      "options": {
        "A": "25 to 50 traps per hectare",
        "B": "1 trap per 10 hectares",
        "C": "5000 traps per hectare",
        "D": "Mass trapping is prohibited in India"
      },
      "correctOption": "A",
      "explanation": "Mass trapping requires a high trap grid density (25-50 traps/ha) to physically catch and eliminate substantial percentages of male moths.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the recommended trap density for practicing 'Mass Trapping' of Spodoptera litura in a high-infestation groundnut field?"
    },
    {
      "id": "ENT203-U5-MCQ32",
      "options": {
        "A": "Attracted insects contact a lethal toxicant or pathogen at the point source and leave to die, eliminating the need for bulky containment traps",
        "B": "Attract-and-kill traps catch only beneficial predators",
        "C": "It releases live birds to hunt moths",
        "D": "It uses loud sounds to shatter insect wings"
      },
      "correctOption": "A",
      "explanation": "Lure-and-kill applies pheromone combined with a contact poison or pathogen (e.g., sticky droplet formulation), removing the need for collection buckets.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "How does an 'Attract-and-Kill' (Lure-and-Kill) system differ from conventional mass trapping?"
    },
    {
      "id": "ENT203-U5-MCQ33",
      "options": {
        "A": "(Z)-11-hexadecenal and (Z)-9-octadecenal in a 3:1 ratio",
        "B": "Gossyplure 1:1 mix",
        "C": "Methyl eugenol",
        "D": "Ethyl 4-methyloctanoate"
      },
      "correctOption": "A",
      "explanation": "Scirpolure consists of (Z)-11-hexadecenal and (Z)-9-octadecenal formulated in a 3:1 ratio to mimic the female rice stem borer.",
      "difficulty": "Medium",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What is the chemical composition of Scirpolure, the pheromone of Scirpophaga incertulas (yellow stem borer of rice)?"
    },
    {
      "id": "ENT203-U5-MCQ34",
      "options": {
        "A": "A chemical deposited on a fruit after oviposition by a female fly that signals other females that the host fruit is already occupied",
        "B": "A venom injected into prey to dissolve muscles",
        "C": "A scent trail that leads ants back to the queen",
        "D": "A substance that causes immediate molting"
      },
      "correctOption": "A",
      "explanation": "Epideictic/oviposition-deterring pheromones are marking cues deposited on oviposition sites to prevent superparasitism and reduce competition.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "Which of the following describes an 'Epideictic Pheromone' (marking pheromone)?"
    },
    {
      "id": "ENT203-U5-MCQ35",
      "options": {
        "A": "Bt delta-endotoxins are stomach poisons active exclusively in larval midguts and have zero toxicity toward adult egg parasitoids",
        "B": "Bt bacteria feed on Trichogramma wasps",
        "C": "Trichogramma wasps lay their eggs inside Bt spores",
        "D": "Bt sprays kill the cotton plants"
      },
      "correctOption": "A",
      "explanation": "Bt requires alkaline ingestion by larvae and does not harm adult parasitoid wasps, allowing biological egg parasitism and microbial control to work in synergy.",
      "difficulty": "Medium",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionText": "Why is the integration of Bacillus thuringiensis sprays highly compatible with the releases of Trichogramma chilonis in cotton IPM?"
    },
    {
      "id": "ENT203-U5-MCQ36",
      "options": {
        "A": "Plutella xylostella preferentially oviposits on mustard foliage, diverting the pest away from high-value cabbage heads",
        "B": "Mustard plants secrete synthetic pyrethroids into the soil",
        "C": "Mustard plants produce light that blinds moths",
        "D": "Mustard roots absorb all cabbage pests"
      },
      "correctOption": "A",
      "explanation": "Diamondback moth exhibits strong ovipositional preference for mustard over cabbage; planting 2 rows of mustard per 25 rows of cabbage concentrates the pest.",
      "difficulty": "Medium",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionText": "What is the primary role of Indian mustard (Brassica juncea) when planted as a trap crop in cabbage IPM?"
    },
    {
      "id": "ENT203-U5-MCQ37",
      "options": {
        "A": "Intense directional selection pressure rapidly selects for resistant target-site mutations and metabolic enzyme upregulation, leading to field control failure",
        "B": "The insect becomes smaller and ceases reproduction",
        "C": "The crop plants stop growing",
        "D": "The insecticide turns into fertilizer"
      },
      "correctOption": "A",
      "explanation": "Monotonous selection pressure by a single mode of action rapidly selects for resistant genotypes; rotating biopesticides (Bt, NPV, neem) breaks resistance.",
      "difficulty": "Medium",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionText": "What happens when an insect pest is continuously exposed to a single synthetic chemical insecticide without rotating biopesticides?"
    },
    {
      "id": "ENT203-U5-MCQ38",
      "options": {
        "A": "Cyrtorhinus lividipennis (Mirid bug)",
        "B": "Helicoverpa armigera",
        "C": "Sitophilus oryzae",
        "D": "Nephotettix virescens"
      },
      "correctOption": "A",
      "explanation": "Cyrtorhinus lividipennis is a specialized predatory mirid bug that feeds voraciously on eggs and young nymphs of Nilaparvata lugens (BPH) in rice.",
      "difficulty": "Medium",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionText": "Which predatory bug is recognized as an effective biocontrol agent of brown planthopper (BPH) nymphs in rice fields?"
    },
    {
      "id": "ENT203-U5-MCQ39",
      "options": {
        "A": "Pheromone plumes disperse effectively at foliar canopy level where active mate searching and nocturnal moth flight naturally occur",
        "B": "To prevent rain from entering the trap",
        "C": "To keep the trap warm in the sun",
        "D": "Because moths cannot see above 10 cm"
      },
      "correctOption": "A",
      "explanation": "Calling females perch on upper canopy foliage; elevating traps to canopy height aligns the artificial plume with natural male flight paths.",
      "difficulty": "Medium",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "In pheromone trap monitoring, why must traps be installed at crop canopy height rather than placed on bare ground?"
    },
    {
      "id": "ENT203-U5-MCQ40",
      "options": {
        "A": "Every 3 to 4 weeks",
        "B": "Every 24 hours",
        "C": "Once every 3 years",
        "D": "Lures never need replacement"
      },
      "correctOption": "A",
      "explanation": "In tropical climates (high ambient temperature and solar radiation), volatile pheromone reserves deplete within 21 to 28 days (3-4 weeks).",
      "difficulty": "Medium",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "What is the recommended replacement interval for standard rubber septa pheromone lures under tropical field conditions?"
    },
    {
      "id": "ENT203-U5-MCQ41",
      "options": {
        "A": "Green leaf volatiles and terpenoids emitted by caterpillar-damaged maize that attract Campoletis sonorensis parasitoid wasps",
        "B": "Pure distilled water vapor from stomata",
        "C": "Methane gas emitted by flooded paddies",
        "D": "Oxygen released during daytime photosynthesis"
      },
      "correctOption": "A",
      "explanation": "When caterpillars chew maize leaves, the plant releases specific HIPV blends that act as synomones, recruiting parasitoids that destroy the herbivore.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "Which of the following represents a classic 'Herbivore-Induced Plant Volatile' (HIPV) acting as a synomone?"
    },
    {
      "id": "ENT203-U5-MCQ42",
      "options": {
        "A": "They provide long-lasting, steady emission of Gossyplure over 90 to 120 days, covering the entire flowering and boll maturation season",
        "B": "They physically tie the cotton bolls together",
        "C": "They act as electric fences for insects",
        "D": "They eliminate the need for cotton irrigation"
      },
      "correctOption": "A",
      "explanation": "PB-Rope contains polyethylene ampoule tubes tied around cotton stems that release Gossyplure steadily for up to 120 days, suppressing mating all season.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the primary operational advantage of PB-Rope dispensers used for mating disruption of pink bollworm in cotton?"
    },
    {
      "id": "ENT203-U5-MCQ43",
      "options": {
        "A": "Surviving male moths can mate polygynously with multiple females, allowing remaining females to lay fertile egg clutches",
        "B": "Female moths reproduce through spontaneous generation",
        "C": "Traps attract insects from neighboring planets",
        "D": "Male moths do not participate in mating"
      },
      "correctOption": "A",
      "explanation": "Because one male moth can inseminate 3 to 5 females, trapping must remove >90% of males to achieve economic suppression; low trap density fails.",
      "difficulty": "Medium",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "Why is the mass trapping of male moths alone sometimes insufficient to control heavy pest populations if trap density is too low?"
    },
    {
      "id": "ENT203-U5-MCQ44",
      "options": {
        "A": "(Z)-11-hexadecenal and (Z)-11-hexadecenyl acetate",
        "B": "Methyl eugenol",
        "C": "4-methyl-5-nonanol",
        "D": "Rotenone"
      },
      "correctOption": "A",
      "explanation": "Plutellure comprises (Z)-11-hexadecenal, (Z)-11-hexadecenyl acetate, and (Z)-11-hexadecen-1-ol in species-specific proportions.",
      "difficulty": "Medium",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "What is the primary active component of the female sex pheromone of the diamondback moth (Plutella xylostella)?"
    },
    {
      "id": "ENT203-U5-MCQ45",
      "options": {
        "A": "They leave zero toxic chemical residues, ensuring compliance with strict importing-nation Maximum Residue Limits (MRLs)",
        "B": "They dye the grain a golden color",
        "C": "They are mandated by the World Health Organization for all grain",
        "D": "They double the size of the grapes artificially"
      },
      "correctOption": "A",
      "explanation": "Importing countries (EU, USA, Gulf) enforce strict MRLs; biologicals and semiochemicals leave zero synthetic residues, preventing export rejection.",
      "difficulty": "Medium",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionText": "Why is the use of biopesticides and semiochemicals considered indispensable for export-oriented agricultural commodities like Basmati rice and table grapes?"
    },
    {
      "id": "ENT203-U5-MCQ46",
      "options": {
        "A": "Sensilla trichodea housing specialized Pheromone-Binding Proteins (PBPs) and olfactory receptor coreceptors (Orco)",
        "B": "Sensilla basiconica detecting carbon dioxide only",
        "C": "Johnston's organ located in the pedicel",
        "D": "Compound eye ommatidia"
      },
      "correctOption": "A",
      "explanation": "Sensilla trichodea are elongate cuticular hairs containing aqueous sensillum lymph packed with PBPs that capture pheromone molecules and deliver them to Orco complexes.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "In pheromone biochemistry, what specific sensory structure on the male moth antenna is responsible for detecting female sex pheromones at picogram concentrations?"
    },
    {
      "id": "ENT203-U5-MCQ47",
      "options": {
        "A": "Steering upwind into ambient air currents while casting perpendicularly across wind boundaries upon losing the odor plume",
        "B": "Flying in straight lines regardless of wind direction",
        "C": "Detecting magnetic field lines emitted by female wings",
        "D": "Gliding down temperature thermals"
      },
      "correctOption": "A",
      "explanation": "Male moths employ optomotor anemotaxis: surges directly upwind while perceiving pheromone pulses, and zig-zag casting across wind lines when the scent plume is lost.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the physical mechanism known as 'optomotor anemotaxis' utilized by male moths to track a pheromone plume upwind to a calling female?"
    },
    {
      "id": "ENT203-U5-MCQ48",
      "options": {
        "A": "Male Pectinophora gossypiella antennal olfactory receptor neurons possess dual narrow-spectrum receptors that require simultaneous, equimolar excitation to fire the mating program",
        "B": "Non-1:1 blends undergo rapid spontaneous combustion",
        "C": "The (Z,E) isomer is an artificial pesticide that kills the moth",
        "D": "Different ratios attract honeybees instead"
      },
      "correctOption": "A",
      "explanation": "Species specificity is governed by precise multi-component ratios; deviating from the natural 1:1 ratio fails to stimulate the antennal neural pathways or triggers behavioral inhibition.",
      "difficulty": "Hard",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "Why does a 1:1 isomeric blend of (Z,Z)- and (Z,E)-7,11-hexadecadienyl acetate in Gossyplure achieve maximum male catch, whereas a 9:1 or 1:9 blend results in complete trap shutdown?"
    },
    {
      "id": "ENT203-U5-MCQ49",
      "options": {
        "A": "Fick's first and second laws of diffusion, wherein initial release exhibits square-root-of-time (Higuchi kinetics) transitioning into steady-state zero-order or pseudo-first-order flux",
        "B": "Exponential explosion kinetics with infinite acceleration",
        "C": "Linear zero-gravity evaporation independent of temperature",
        "D": "Stefan-Boltzmann radiation law"
      },
      "correctOption": "A",
      "explanation": "Pheromone diffusion through rubber or polyethylene membranes follows Fickian diffusion kinetics, governed by temperature, matrix partition coefficients, and concentration gradients.",
      "difficulty": "Hard",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "What mathematical relationship characterizes the evaporation kinetics of a volatile semiochemical diffusing from a permeable polymeric matrix dispenser?"
    },
    {
      "id": "ENT203-U5-MCQ50",
      "options": {
        "A": "Uncinanone B and di-C-glycosylflavones",
        "B": "Azadirachtin A",
        "C": "Rotenone",
        "D": "Nicotinic acid"
      },
      "correctOption": "A",
      "explanation": "Desmodium uncinatum roots synthesize uncinanone B and C-glycosylflavones that cause suicidal germination of Striga while blocking radical haustorium formation.",
      "difficulty": "Hard",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionText": "In the Push-Pull chemical ecology of Desmodium, which specific root-exuded C-glycosylflavone is responsible for inhibiting haustorial development in Striga hermonthica?"
    },
    {
      "id": "ENT203-U5-MCQ51",
      "options": {
        "A": "Gas Chromatography-Electroantennographic Detection (GC-EAD)",
        "B": "Fourier Transform Infrared Spectroscopy (FTIR)",
        "C": "X-ray Powder Diffraction (XRD)",
        "D": "Differential Scanning Calorimetry (DSC)"
      },
      "correctOption": "A",
      "explanation": "GC-EAD splits column effluent between a FID detector and a living insect antenna mounted between microelectrodes to record depolarization spikes.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "What is the electrophysiological technique utilized to confirm which specific volatile peaks in a gas chromatogram trigger olfactory responses in insect antennae?"
    },
    {
      "id": "ENT203-U5-MCQ52",
      "options": {
        "A": "Mated gravid females from surrounding untreated areas fly directly into the small disrupted plot and oviposit, overcoming local mating prevention",
        "B": "Small fields absorb all pheromone molecules into the soil",
        "C": "Dispensers stop releasing pheromone in small fields",
        "D": "Predators eat the dispensers only in small plots"
      },
      "correctOption": "A",
      "explanation": "Mating disruption targets mating, not gravid females. In small plots, mated females immigrate from neighboring untreated borders and lay eggs ('border effect').",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "Why does mating disruption typically fail in small, isolated crop plots (<1-2 hectares) surrounded by untreated conventional fields?"
    },
    {
      "id": "ENT203-U5-MCQ53",
      "options": {
        "A": "Rapidly inactivate pheromone molecules within milliseconds of receptor binding, clearing sensillar lymph to maintain temporal resolution of incoming odor pulses",
        "B": "Synthesize new pheromones to attract other males",
        "C": "Digest cuticular wax on the antennae",
        "D": "Transport ATP to wing muscles"
      },
      "correctOption": "A",
      "explanation": "PDEs (carboxylesterases, aldehyde oxidases) degrade bound pheromone molecules within milliseconds, resetting receptors so the moth can track plume boundaries.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "What is the biochemical role of Antennal Pheromone-Degrading Enzymes (PDEs) in male moth sensilla?"
    },
    {
      "id": "ENT203-U5-MCQ54",
      "options": {
        "A": "A uniform, homogeneous background of synthetic pheromone elevates ambient odor concentrations above the threshold required for males to resolve discrete female plume pulses",
        "B": "Synthetic pheromone masks the physical sight of female moths",
        "C": "Pheromones turn female moths invisible to infrared detectors",
        "D": "Dispensers emit dense smoke screens"
      },
      "correctOption": "A",
      "explanation": "Trail masking floods the air with a uniform pheromone mist, obliterating the discrete, pulsed concentration gradients needed for upwind flight.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "How does the 'camouflage' or 'trail-masking' hypothesis explain mating disruption mechanistically?"
    },
    {
      "id": "ENT203-U5-MCQ55",
      "options": {
        "A": "(E)-beta-farnesene",
        "B": "Gossyplure",
        "C": "Isoamyl acetate",
        "D": "Methyl parathion"
      },
      "correctOption": "A",
      "explanation": "(E)-beta-farnesene is the classic sesquiterpene alarm pheromone secreted from aphid cornicles that triggers immediate dropping and dispersal.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "Which volatile alarm pheromone component is widely shared across diverse aphid species (Aphididae) upon predator attack?"
    },
    {
      "id": "ENT203-U5-MCQ56",
      "options": {
        "A": "Plant tissue volatiles (ethyl acetate, ethanol) exhibit immense synergy with Ferrugineol, multiplying weevil catch 10- to 20-fold compared to pheromone alone",
        "B": "Ferrugineol cannot evaporate without sugar",
        "C": "Weevils only enter traps to drink alcohol",
        "D": "Food baits prevent the trap plastic from melting"
      },
      "correctOption": "A",
      "explanation": "Host plant fermentation volatiles (esters, ethanol) act as synergistic co-attractants, mimicking a wounded palm tree and drastically boosting trap capture.",
      "difficulty": "Hard",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionText": "Why is the incorporation of food kairomone baits (e.g., fermented palm sap, sugarcane juice) essential when deploying Ferrugineol aggregation pheromone traps?"
    },
    {
      "id": "ENT203-U5-MCQ57",
      "options": {
        "A": "It acts as an elicitor in plant tissues, triggering the jasmonic acid signaling pathway to synthesize and release volatile synomones that recruit parasitoid wasps",
        "B": "It directly paralyzes plant root growth",
        "C": "It synthesizes cellulose for the caterpillar cocoon",
        "D": "It neutralizes all plant leaf toxins instantly"
      },
      "correctOption": "A",
      "explanation": "Volicitin in caterpillar oral secretions acts as an elicitor, inducing plant octadecanoid/jasmonate defense cascades that release parasitoid-attracting synomones.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionText": "In the chemical ecology of tri-trophic interactions, what is the role of caterpillar saliva enzyme 'volicitin' (N-(17-hydroxylinolenoyl)-L-glutamine)?"
    },
    {
      "id": "ENT203-U5-MCQ58",
      "options": {
        "A": "Wind velocity, atmospheric turbulence/eddy diffusion, and release rate exceeding the insect's physiological threshold concentration",
        "B": "The color of the trap canopy only",
        "C": "The electrical charge of the soil",
        "D": "The presence of earthworms in the soil"
      },
      "correctOption": "A",
      "explanation": "Plume reach is governed by Gaussian atmospheric diffusion, wind speed, turbulence, and the distance downwind at which concentration drops below the antennal detection threshold.",
      "difficulty": "Hard",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionText": "What is the primary factor dictating the aerodynamic 'plume reach' (active communication distance) of a pheromone trap in open field conditions?"
    },
    {
      "id": "ENT203-U5-MCQ59",
      "options": {
        "A": "Pheromone is encapsulated within crosslinked polyurea microcapsules suspended in water, allowing conventional boom sprayers to distribute millions of point sources",
        "B": "They dissolve the crop foliage to release scent",
        "C": "They eliminate the need for agricultural tractors",
        "D": "They turn into gas instantly in the spray tank"
      },
      "correctOption": "A",
      "explanation": "MECs enclose pheromones in polymeric microcapsules (10-50 \u00b5m) sprayable via standard sprayers, adhering to foliage and providing thousands of point sources.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "How do microencapsulated flowable pheromone formulations (MEC) facilitate mechanized mating disruption?"
    },
    {
      "id": "ENT203-U5-MCQ60",
      "options": {
        "A": "Insecticide exposure is restricted strictly to target pests attracted to localized bait droplets, eliminating toxic exposure for natural enemies and crop residues",
        "B": "It requires zero labor to apply",
        "C": "It permanently changes pest DNA",
        "D": "It replaces all nitrogen fertilizer"
      },
      "correctOption": "A",
      "explanation": "Target-specific attraction confines the lethal insecticide to micro-droplets or stations, reducing active chemical use by >95% while sparing non-targets.",
      "difficulty": "Hard",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionText": "What is the primary reason why 'Attract-and-Kill' with semiochemicals is ecologically superior to broad-spectrum cover sprays?"
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "ENT203-U5-SUB01",
      "modelAnswer": "A Semiochemical (derived from the Greek root *semeion*, meaning sign or signal) is any chemical compound or message-bearing mixture released by an organism that mediates physiological, behavioral, or developmental interactions between individual organisms in the environment. Semiochemicals function as natural chemical language across the biosphere.\n\nThe fundamental distinction between a Pheromone and an Allelochemical is defined strictly by the taxonomic relationship of the interacting individuals:\n- **Pheromone:** An intraspecific chemical messenger. It is secreted externally by an individual and elicits a specific behavioral reaction (e.g., mating, aggregation, trail following) or physiological modification in a receiving member of the **same biological species**.\n- **Allelochemical:** An interspecific chemical messenger. It conveys information between individuals of **different biological species**. Depending on which organism derives an adaptive evolutionary benefit, allelochemicals are further divided into allomones (benefits emitter), kairomones (benefits receiver), and synomones (benefits both).",
      "maxMarks": 4,
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionType": "DEFINITION",
      "questionText": "Define 'Semiochemical' and contrast 'Pheromone' with 'Allelochemical'.",
      "outlinePoints": [
        "Semiochemicals are message-bearing chemical substances mediating organism interactions.",
        "Pheromones are intraspecific chemical signals acting between individuals of the same species.",
        "Allelochemicals are interspecific chemical signals acting between individuals of different species.",
        "Allelochemicals sub-divide into allomones, kairomones, and synomones based on adaptive benefit."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB02",
      "modelAnswer": "Mating Disruption (or the confusion technique) is an environmentally benign, behavioral pest management strategy wherein an agricultural crop canopy atmosphere is permeating and saturated with synthetic copies of a target insect species' sex pheromone. By maintaining an elevated, homogeneous ambient pheromone concentration across the field, male moths are rendered incapable of detecting, orienting toward, or locating calling virgin females. Consequently, copulation is prevented or delayed past the female reproductive viability window, suppressing fertile egg deposition and eliminating next-generation larval damage without applying chemical neurotoxins.\n\nOptomotor Anemotaxis is the behavioral navigational mechanism utilized by male insects (especially moths) to track volatile pheromone plumes over long distances upwind toward a calling female. Because molecular diffusion alone is too slow to provide directional vectors in turbulent air, the insect perceives the odor pulse and aligns its flight directly **upwind (anemotaxis)**, utilizing visual ground drift perception via its compound eyes **(optomotor feedback)** to maintain forward groundspeed. When the scent plume is momentarily lost, the moth ceases upwind surge and initiates transverse, casting flights perpendicularly across the wind axis until the plume is relocated.",
      "maxMarks": 4,
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionType": "DEFINITION",
      "questionText": "Define 'Mating Disruption' and 'Optomotor Anemotaxis'.",
      "outlinePoints": [
        "Mating disruption saturates field air with synthetic pheromone to prevent mate finding.",
        "Suppresses copulation and fertile egg laying without toxic insecticides.",
        "Optomotor anemotaxis is upwind flight navigation guided by wind and visual ground cues.",
        "Surges directly upwind upon smelling pheromone; casts across wind when plume is lost."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB03",
      "modelAnswer": "The Push-Pull Strategy (formally known as the *Stimulo-Deterrent Diversionary Strategy*) is an integrated agro-ecological pest management paradigm developed by ICIPE and Rothamsted Research that manipulates the distribution and abundance of insect pests using a coordinated combination of repellent and attractive companion plants. The main cash crop is intercropped with a repellent plant that 'pushes' pests away via volatile deterrents, while an attractive perimeter border crop 'pulls' and concentrates pests away from the field interior, all without applying synthetic pesticides.\n\nA Dead-End Trap Crop is a companion plant species planted within or bordering an agricultural field that is highly attractive to adult insect pests for oviposition or feeding, but upon which the invading pests or their newly hatched progeny are unable to survive, develop, or successfully complete their life cycle. The trap crop lures female insects away from the vulnerable cash crop and subsequently destroys the hatched larvae through internal physical mechanisms (such as sticky resinous sap secretions, e.g., Napier grass trapping stemborers) or biochemical unsuitability.",
      "maxMarks": 4,
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionType": "DEFINITION",
      "questionText": "Define 'Push-Pull Strategy' and 'Dead-End Trap Crop'.",
      "outlinePoints": [
        "Push-Pull strategy uses repellent intercrops ('Push') and attractive border crops ('Pull').",
        "Manipulates insect behavior to divert pests away from cash crops without chemical sprays.",
        "Dead-end trap crop is highly attractive for oviposition but prevents larval survival.",
        "Traps and kills invading progeny through internal physical mechanisms or toxicity."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB04",
      "modelAnswer": "Allelochemicals mediate interspecific communication and are classified based on the adaptive evolutionary balance of benefit between the emitter and the receiver:\n\n1. **Allomone (Benefits Emitter):**\n   - *Concept:* A chemical substance produced and released by an organism that elicits a behavioral or physiological response in a member of another species that is adaptively favorable to the **emitting organism** but not to the receiver.\n   - *Agricultural Example:* The secretion of azadirachtin by the neem tree (*Azadirachta indica*). Azadirachtin deters phytophagous caterpillars from feeding, protecting plant tissues from destruction while driving the caterpillar toward starvation.\n\n2. **Kairomone (Benefits Receiver):**\n   - *Concept:* A chemical substance released by an organism that elicits a response adaptively favorable to the **receiving organism** but disadvantageous or detrimental to the emitter.\n   - *Agricultural Example:* Caterpillar frass (feces) and salivary secretions emitted by *Helicoverpa armigera*. Female *Campoletis sonorensis* parasitoid wasps detect these volatile cues over long distances, using them as homing beacons to locate and parasitize the caterpillar host.\n\n3. **Synomone (Benefits Both):**\n   - *Concept:* A chemical substance released by an organism that evokes a behavioral or physiological response that is mutually favorable to **both the emitter and the receiver**.\n   - *Agricultural Example:* Herbivore-Induced Plant Volatiles (HIPVs). When maize plants are attacked by armyworms, damaged leaves emit a complex blend of green leaf volatiles and terpenes (e.g., DMNT). This scent recruits predatory bugs (*Orius*) and parasitoid wasps (*Trichogramma*), aiding the plant by destroying its herbivore while providing the predator with a food host.",
      "maxMarks": 6,
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionType": "SHORT_ANSWER",
      "questionText": "Differentiate between Allomones, Kairomones, and Synomones with one agricultural example each.",
      "outlinePoints": [
        "Allomone: Favorable to emitter, unfavorable to receiver (e.g., neem azadirachtin antifeedant).",
        "Kairomone: Favorable to receiver, detrimental to emitter (e.g., caterpillar frass attracting parasitoids).",
        "Synomone: Mutually favorable to both emitter and receiver (e.g., HIPVs recruiting natural enemies)."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB05",
      "modelAnswer": "Gossyplure is the synthetic sex pheromone mimicking the natural female sex attractant of the pink bollworm (*Pectinophora gossypiella*, family Gelechiidae), the most destructive pest of cotton in India:\n\n1. **Chemical Composition:**\n   - Gossyplure is an equimolar **(1:1 ratio) isomeric mixture** of two long-chain conjugated aliphatic acetates:\n     1. **(7Z,11Z)-7,11-hexadecadienyl acetate** (Z,Z-isomer)\n     2. **(7Z,11E)-7,11-hexadecadienyl acetate** (Z,E-isomer)\n   - *Isomeric Precision:* Natural pink bollworm males are exquisitely sensitive to this 50:50 ratio. If the synthetic mixture deviates to 60:40 or contains traces of the (E,E) isomer, male antennal response is inhibited.\n\n2. **Operational Deployment in Cotton Fields:**\n   - *Monitoring and ETL Determination:* Deployed in sleeve traps or delta traps baited with 1 mg rubber septa lures installed at crop canopy height (5 traps/ha) starting 45 days after sowing. The statutory **Economic Threshold Level (ETL)** in India is established when trap catches reach **8 adult male moths per trap per night for 3 consecutive nights**, or 10% rosette flowers in the field. Reaching ETL triggers immediate biological or targeted chemical intervention.\n   - *Mating Disruption via PB-Rope:* For season-long control, 'PB-Rope L' dispensers (continuous sealed polyethylene tubes containing Gossyplure) are hand-twisted onto cotton plant stems at squaring (40-45 DAS) at a density of 250 to 400 ropes/ha. The ropes emit a steady pheromone plume for 90 to 120 days, saturating the canopy, preventing male moths from locating females, and achieving >90% reduction in boll damage without foliar sprays.",
      "maxMarks": 6,
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionType": "SHORT_ANSWER",
      "questionText": "Detail the chemical composition and operational usage of Gossyplure in cotton pink bollworm management.",
      "outlinePoints": [
        "Chemical: 1:1 equimolar blend of (Z,Z)- and (Z,E)-7,11-hexadecadienyl acetate.",
        "Isomeric precision: Deviations from 1:1 ratio shut down male antennal response.",
        "Monitoring: Sleeve/delta traps at 5 traps/ha; ETL is 8 moths/trap/night for 3 consecutive nights.",
        "Mating Disruption: PB-Rope dispensers at 250-400 ropes/ha provide steady release for 90-120 days."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB06",
      "modelAnswer": "Atmospheric mating disruption does not kill insects through toxic action; rather, it disables the male insect's olfactory navigation system through three distinct neuro-behavioral mechanisms:\n\n1. **Trail Masking (Camouflage):**\n   - Under natural conditions, a calling female moth emits minute quantities of pheromone (nanograms/hour), producing a discontinuous, pulsed scent plume carried downwind.\n   - Mating disruption floods the entire canopy with high background concentrations of synthetic pheromone, obliterating the discrete concentration gradients of the female's plume. The female's delicate scent trail is completely submerged in the background 'noise', preventing the male from resolving the plume boundaries.\n\n2. **False-Trail Following (False Target Attraction):**\n   - Deployed point-source dispensers (e.g., 200 to 500 dispensers/ha) emit pheromone plumes that are hundreds of times stronger than calling females.\n   - Flying males are attracted to these high-emission artificial dispensers. They spend vital flight energy, time, and metabolic reserves tracking and attempting to copulate with inanimate plastic dispensers until the narrow nocturnal mating window closes, leaving females unmated.\n\n3. **Sensory Adaptation and Central Habituation:**\n   - *Sensory Adaptation (Peripheral):* Continuous, intense stimulation of the male's antennal sensilla trichodea saturates olfactory receptor neurons, depleting receptor potentials and rendering them temporarily unresponsive to further pheromone molecules.\n   - *Central Habituation (CNS):* The antennal lobe interneurons and brain glomeruli in the male central nervous system cease processing pheromone signals following uninterrupted exposure, shutting down the optomotor flight program completely.",
      "maxMarks": 6,
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionType": "SHORT_ANSWER",
      "questionText": "Explain the three neuro-behavioral mechanisms of atmospheric mating disruption.",
      "outlinePoints": [
        "Trail Masking: High background pheromone submerges female scent plumes in chemical noise.",
        "False-Trail Following: Males waste time and flight energy tracking hundreds of artificial dispensers.",
        "Sensory Adaptation: Antennal receptor neurons become saturated and physically unresponsive.",
        "Central Habituation: Brain interneurons cease processing pheromonal signals under continuous exposure."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB07",
      "modelAnswer": "The Push-Pull strategy developed by ICIPE utilizes ecological engineering to manage stemborers (*Busseola fusca*, *Chilo partellus*) and the parasitic weed *Striga hermonthica* simultaneously in cereal crops:\n\n1. **The 'Push' Component (Intercrop):**\n   - *Crop:* Silverleaf desmodium (*Desmodium uncinatum*) is intercropped between alternating rows of maize.\n   - *Repelling Stemborers:* *Desmodium* foliage constitutively synthesizes and releases volatile terpenes\u2014specifically **(E)-beta-ocimene, (E)-4,8-dimethyl-1,3,7-nonatriene (DMNT), and alpha-cedrene**. Searching gravid stemborer moths perceive these volatiles as chemical cues signaling that the host is unsuitable or overcrowded, repelling them away from the maize ('Push').\n   - *Suppressing Striga:* *Desmodium* roots exude secondary isoflavanones (uncinanone B) that trigger suicidal germination of dormant *Striga* seeds while chemically blocking the radical haustorium from penetrating maize roots, completely eradicating Striga infestations.\n\n2. **The 'Pull' Component (Perimeter Trap Crop):**\n   - *Crop:* Napier grass (*Pennisetum purpureum*) is planted in 2 to 3 dense rows around the border of the maize field.\n   - *Attracting Moths:* Napier grass emits volatile kairomones at concentrations 100-fold higher than maize, acting as an irresistible olfactory magnet that lures moths away from the crop ('Pull').\n   - *Dead-End Destruction:* When female moths lay eggs on Napier grass, the plant produces a thick, sticky resinous sap upon larval feeding. The sap traps, drowns, and kills over 80-90% of invading larvae, preventing population buildup.\n\n3. **Holistic Agronomic Benefits:** Eliminates pesticide costs, increases maize yields by 200-300%, fixes soil nitrogen, and provides premium livestock fodder.",
      "maxMarks": 6,
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionType": "SHORT_ANSWER",
      "questionText": "Describe the operational mechanics of the Push-Pull strategy in managing maize stemborers and Striga weed.",
      "outlinePoints": [
        "Push: Intercropped Desmodium emits volatile ocimene/DMNT that repels stemborers away from maize.",
        "Striga Control: Desmodium root uncinanone B induces suicidal germination and blocks Striga attachment.",
        "Pull: Perimeter Napier grass emits 100-fold higher attractant volatiles, pulling moths to field edges.",
        "Dead-End Trap: Napier grass secretes sticky sap that drowns and kills >80% of invading borer larvae.",
        "Benefits: 2- to 3-fold maize yield increases, soil nitrogen fixation, and high-protein animal fodder."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB08",
      "modelAnswer": "Achieving true synergy in Integrated Pest Management requires that biological pesticides (microbials and botanicals) do not disrupt beneficial natural enemies (predators and parasitoids):\n\n1. **Target-Site Specificity:**\n   - *Microbials (Bt, NPV, EPN):* Display extreme evolutionary specificity. Bacillus thuringiensis Cry protoxins require alkaline midguts and cadherin receptors absent in predatory beetles (*Coccinellidae*), lacewings (*Chrysoperla*), and adult parasitoids (*Trichogramma*). Similarly, Baculoviruses (HaNPV, SlNPV) only infect specific lepidopteran hosts, having zero infectivity toward beneficial insects.\n2. **Mode of Entry and Ingestion Mechanics:**\n   - While predatory bugs (*Orius*, *Geocoris*) consume insect prey, they do not ingest treated plant cuticle. Bt and baculoviruses function exclusively as stomach poisons; hence, non-phytophagous beneficials remain unexposed.\n   - Entomopathogenic nematodes reside in soil and do not attack aerial foliar predators or bees.\n3. **Botanical Selectivity and Degradation Dynamics:**\n   - *Neem (Azadirachtin):* Functions as a stomach antifeedant and ecdysone disruptor for chewing/phloem-sucking pests. Adult beneficial foragers metabolize low doses without mortality.\n   - *Photolytic Safety Window:* Botanical pesticides (pyrethrins, neem) photolyze under solar UV within 24-48 hours. By timing applications during late evening, beneficial pollinators (honeybees) foraging during morning hours contact dry, non-toxic residue beds.\n4. **Host-Mediated Tri-Trophic Effects:**\n   - The only indirect hazard arises if biopesticides kill target caterpillars before endoparasitoids (e.g., *Campoletis* or *Bracon*) complete their larval development inside the host. Proper spacing (releasing parasitoids 3-4 days prior to biopesticide spraying) eliminates this competition.",
      "maxMarks": 6,
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionType": "SHORT_ANSWER",
      "questionText": "Outline the factors governing the compatibility of biopesticides with beneficial natural enemies in crop ecosystems.",
      "outlinePoints": [
        "Specificity: Bt Cry toxins and baculoviruses have zero toxicity to predatory beetles, bugs, and wasps.",
        "Entry Mode: Ingestion-only stomach poisons spare piercing-sucking predators that do not consume leaves.",
        "Botanicals: Neem spares adult parasitoids and honeybees; rapid photolysis leaves zero toxic residues by morning.",
        "Management: Space parasitoid releases 3-4 days ahead of biopesticide sprays to prevent prey depletion."
      ],
      "difficulty": "Easy"
    },
    {
      "id": "ENT203-U5-SUB09",
      "modelAnswer": "Pheromones represent specialized intraspecific communication systems that diverge markedly between sexual and social recruitment contexts:\n\n1. **Target Sex Responding:**\n   - *Sex Pheromones:* Typically emitted by adult virgin females to attract exclusively **adult males** of the same species (or rarely emitted by males to attract females).\n   - *Aggregation Pheromones:* Emitted by individuals of either sex (often males upon colonizing a host resource) that attract **members of both sexes (males and females equally)** of the species.\n\n2. **Primary Biological Evolutionary Function:**\n   - *Sex Pheromones:* Evolved strictly to facilitate mate location and reproductive copulation over long distances, often operating in nocturnal, low-density insect populations.\n   - *Aggregation Pheromones:* Evolved to coordinate joint group exploitation of an abundant or difficult host resource (e.g., mass attack to overwhelm a tree's resin defenses by bark beetles), communal feeding, mating site clustering, or collective overwintering in shelters.\n\n3. **Practical Trapping Applications and Efficacy:**\n   - *Sex Pheromones:* Widely deployed for **monitoring** seasonal population flights and **mating disruption** (flooding the atmosphere to prevent pair formation). However, in mass trapping, removing only males may still allow surviving males to fertilize remaining females.\n   - *Aggregation Pheromones:* Exceptionally potent for **mass trapping and suppression** (e.g., Ferrugineol for Red Palm Weevil) because every trap catch removes gravid females directly from the breeding population, immediately collapsing reproductive potential.",
      "maxMarks": 6,
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)",
      "questionType": "COMPARISON",
      "questionText": "Compare Sex Pheromones with Aggregation Pheromones in target sex, biological function, and trapping applications.",
      "outlinePoints": [
        "Target Sex: Sex pheromones attract only one sex (males); aggregation pheromones attract both sexes.",
        "Function: Sex pheromones facilitate mating; aggregation pheromones coordinate group feeding and defense.",
        "Taxonomy: Sex pheromones dominate Lepidoptera; aggregation pheromones dominate Coleoptera (weevils/bark beetles).",
        "Control: Aggregation traps remove gravid females directly, providing superior mass suppression."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U5-SUB10",
      "modelAnswer": "Semiochemicals are deployed across three distinct operational strategies, each having specific objectives, trap densities, and management philosophies:\n\n1. **Pheromone Monitoring (Survey & Scouting):**\n   - *Objective:* Qualitative and quantitative population assessment. Detects the first arrival of migratory pests, monitors seasonal flight peaks, and determines when populations breach the **Economic Threshold Level (ETL)** to guide targeted biopesticide applications.\n   - *Trap Density:* Low trap density (**5 to 12 traps/ha**).\n   - *Lure Type:* Standard-emission rubber septa lures replaced every 3-4 weeks.\n\n2. **Mass Trapping (Direct Population Suppression):**\n   - *Objective:* Direct physical capture and removal of a high proportion of the adult pest population (especially males or both sexes in weevils) to depress overall field fertilization rates.\n   - *Trap Density:* High trap grid density (**25 to 50 traps/ha**).\n   - *Trap Architecture:* High-capacity bucket, sleeve, or funnel traps equipped with killing agents (DDVP or soapy water) to prevent overcrowding.\n\n3. **Mating Disruption (Atmospheric Confusion):**\n   - *Objective:* Completely prevent mating from occurring without physically capturing or killing insects in traps. Disables the male's olfactory orientation, leaving females unmated.\n   - *Deployment Density:* Very high density of emission sources (**100 to 500 point-source dispensers/ha**, PB-Ropes, or microencapsulated sprayable formulations).\n   - *Acreage Requirement:* Requires large, contiguous, uniform land areas (>2 to 5 hectares) to prevent mated female immigration across borders.",
      "maxMarks": 6,
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionType": "COMPARISON",
      "questionText": "Compare Monitoring, Mass Trapping, and Mating Disruption in pheromone pest management.",
      "outlinePoints": [
        "Monitoring: Low density (5-12 traps/ha) to assess seasonal flights and determine ETL for spray decisions.",
        "Mass Trapping: High density (25-50 traps/ha) to physically catch and remove large insect proportions.",
        "Mating Disruption: Saturated atmosphere (100-500 dispensers/ha) to prevent copulation without capturing moths.",
        "Requirements: Mating disruption requires large contiguous acreage to eliminate border-edge mating."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U5-SUB11",
      "modelAnswer": "Delta traps and Sleeve/Funnel traps represent the two most common physical architectures in semiochemical deployment:\n\n1. **Structural Architecture and Catch Mechanism:**\n   - *Delta Trap:* A rigid, triangular prism-shaped housing constructed of weatherproof corrugated plastic with open ends. The lure is suspended from the top apex, and the interior floor is lined with a replaceable, highly tacky adhesive liner (polyisobutylene glue). Insects flying into the prism touch the sticky base and are permanently captured.\n   - *Sleeve / Funnel Trap:* Consists of an upper protective rain canopy, a smooth plastic funnel, and a lower catchment vessel\u2014either a rigid plastic bucket or a long, transparent polyethylene plastic sleeve tied at the bottom. Insects attracted to the lure hit the canopy or funnel, lose flight lift, and slide down into the sleeve where they are held by a DDVP insecticide strip or liquid trap.\n\n2. **Target Insect Spectrum and Capacity:**\n   - *Delta Trap:* Specifically suited for **small, delicate microlepidopterans** and light insects (e.g., *Plutella xylostella*, leafminers, codling moth). Very low catch capacity (saturates when 20-50 moths coat the sticky liner).\n   - *Sleeve / Funnel Trap:* Designed for **large, vigorous noctuids and pyralids** (e.g., *Helicoverpa armigera*, *Spodoptera litura*, *Scirpophaga incertulas*). Immense catch capacity; can hold hundreds to thousands of large moths without clogging.\n\n3. **Field Maintenance and Servicing:**\n   - *Delta Trap:* High maintenance; adhesive sheets gather dust, rain debris, and non-target insects, requiring frequent scraping or replacement every 1-2 weeks.\n   - *Sleeve / Funnel Trap:* Low maintenance; sleeves can be emptied by untying the bottom knot, shaking out dead moths, and retightening, enduring entire seasons with minimal labor.",
      "maxMarks": 6,
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionType": "COMPARISON",
      "questionText": "Compare Delta Traps with Sleeve / Funnel Traps in structural design, target pests, and maintenance.",
      "outlinePoints": [
        "Delta Trap: Triangular prism with sticky glue liner; suited for small microlepidoptera (DBM).",
        "Delta Capacity: Low holding capacity; glue saturates with 20-50 moths or environmental dust.",
        "Sleeve/Funnel Trap: Funnel entering a large plastic sleeve/bucket; suited for large noctuids (Helicoverpa).",
        "Sleeve Maintenance: High capacity holding thousands of moths; emptied easily by untying bottom knot."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U5-SUB12",
      "modelAnswer": "The Push-Pull strategy, developed by Prof. Zeyaur Khan and Prof. John Pickett through collaborative research between ICIPE (International Centre of Insect Physiology and Ecology) and Rothamsted Research, represents the gold standard of ecological habitat management in modern agriculture:\n\n**1. Ecological Philosophy and Principles:**\nConventional agriculture relies on synthetic chemical inputs to eradicate pest outbreaks. In contrast, Push-Pull practices agro-ecological engineering, establishing multi-trophic plant-plant and plant-insect semiochemical interactions that continuously divert pests away from the cash crop while enhancing soil health and agricultural biodiversity.\n\n**2. The 'Push' Chemistry and Mechanism:**\n- Companion Intercrop: Silverleaf desmodium (*Desmodium uncinatum*) or Greenleaf desmodium (*D. intortum*) is planted in rows alternating with the staple cereal crop (maize or sorghum).\n- Semiochemical Emission: *Desmodium* foliage constitutively synthesizes and volatilizes a specific chemical blend of monoterpenes and sesquiterpenes: **(E)-beta-ocimene, (E)-4,8-dimethyl-1,3,7-nonatriene (DMNT), and alpha-cedrene**.\n- Behavioral Avoidance: Searching gravid stemborer moths (*Busseola fusca*, *Chilo partellus*) and fall armyworms (*Spodoptera frugiperda*) detect these volatile blends. They perceive the crop as heavily infested or unpalatable, actively flying away from the maize canopy ('the Push').\n\n**3. Allelopathic Suppression of Parasitic Striga Weed:**\n- In addition to foliar volatiles, *Desmodium* roots exude secondary metabolites into the rhizosphere, specifically **uncinanone B** and related C-glycosylflavones.\n- These root exudates trigger suicidal seed germination of the devastating parasitic weed *Striga hermonthica*. Concurrently, secondary flavanones inhibit the elongation of *Striga* radicles and block haustorial attachment to maize roots, completely clearing Striga seedbanks from the soil within 2 to 3 seasons.\n\n**4. The 'Pull' Chemistry and Mechanism:**\n- Border Trap Crop: Napier grass (*Pennisetum purpureum*) or Brachiaria grass (*Brachiaria brizantha*) is planted in a continuous 3-row perimeter border around the field.\n- Olfactory Attraction: Napier grass emits green leaf volatiles and attractant terpenes at concentrations 100-fold higher than maize. Moths are lured outward toward the field perimeter ('the Pull').\n- The Dead-End Phenology: When female moths oviposit on Napier grass, the plant responds to newly hatched larval feeding by exuding an internal gummy, resinous mucilage into the stem tissues. Over 80 to 90% of boring caterpillars become immobilized and drown in the resin, preventing adult emergence and population cycling.\n\n**5. Socio-Economic and Agronomic Impact:**\n- *Yield Enhancement:* Smallholder maize yields consistently increase from 1 tonne/ha to 3.5-4.5 tonnes/ha without synthetic fertilizers or insecticides.\n- *Livestock Integration:* *Desmodium* and Napier grass provide massive amounts of high-protein, drought-tolerant green forage, boosting smallholder dairy and meat production.\n- *Soil Regeneration:* *Desmodium* fixes up to 100 kg of atmospheric nitrogen per hectare per year, prevents soil erosion, and suppresses moisture evaporation.",
      "maxMarks": 10,
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies",
      "questionType": "LONG_ANSWER",
      "questionText": "Provide a comprehensive analysis of the Push-Pull strategy, detailing chemical ecology, plant biology, agronomic integration, and socio-economic impacts.",
      "outlinePoints": [
        "Philosophy: Agro-ecological engineering manipulating insect behavior using companion plants.",
        "Push: Intercropped Desmodium emits ocimene and DMNT, repelling stemborers and armyworms.",
        "Striga Suppression: Desmodium root uncinanone B triggers suicidal germination, eradicating Striga.",
        "Pull: Perimeter Napier grass emits 100-fold higher attractant volatiles, luring moths to borders.",
        "Dead-End Trap: Napier grass secretes sticky sap that drowns and kills >80% of invading larvae.",
        "Impact: Maize yields triple, nitrogen is fixed, and premium livestock fodder is produced."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U5-SUB13",
      "modelAnswer": "Deploying semiochemicals for agricultural monitoring requires precise coordination of analytical chemistry, synthetic isomer purification, polymer physics, and agronomic calibration:\n\n**1. Identification and Chemical Synthesis:**\n- Female calling glands are excised during peak calling periods and extracted in high-purity hexane or dichloromethane. Chemical structures are resolved using coupled Gas Chromatography-Mass Spectrometry (GC-MS) and Gas Chromatography-Electroantennographic Detection (GC-EAD) to identify biologically active peaks.\n- Synthesis requires strict stereochemical control (stereospecific Wittig reactions or alkyne hydrogenations) to achieve exact geometric isomer ratios (e.g., 97:3 for Helilure; 1:1 for Gossyplure). Minor isomeric impurities (even <1% of the opposite geometric isomer) can function as potent behavioral inhibitors, shutting down trap capture.\n\n**2. Controlled-Release Dispenser Physics:**\nPheromones are low-molecular-weight volatile liquids that oxidize rapidly in air. Controlled release is achieved through engineered polymeric dispensers:\n- *Natural Rubber Septa:* Porous vulcanized rubber absorbs 1 to 2 mg of pheromone blend. Evaporation follows Fickian diffusion kinetics through the elastomer matrix, delivering a continuous emission plume (10 to 50 ng/hour) over 21 to 28 days.\n- *Polyethylene Capillary Tubes and Ampoules:* Pheromone is sealed within microporous plastic ampoules; vapor permeates the polymer walls, providing near zero-order release rates over 6 to 8 weeks.\n- *Antioxidant Additives:* Formulations incorporate 0.5-1.0% Butylated Hydroxytoluene (BHT) or tocopherol to inhibit auto-oxidation of vulnerable aldehyde and conjugated diene groups.\n\n**3. Trap Design Selection and Fluid Mechanics:**\n- *Delta Traps:* Triangular prisms with sticky polyisobutylene liners; aerodynamic design minimizes turbulence while channeling pheromone plumes out the open ends; ideal for low-density flights of microlepidoptera (*Plutella*).\n- *Funnel / Sleeve Traps:* Aerodynamic canopy redirects wind currents downward through a low-friction plastic funnel into a holding sleeve; ideal for large, active fliers (*Helicoverpa*, *Spodoptera*).\n\n**4. Field Calibration and Grid Installation:**\n- *Trap Density:* Deployed at **5 to 12 traps/ha** for monitoring. Traps must be positioned at **canopy height**, adjusting poles as crops grow.\n- *Spacing and Wind Alignment:* Traps must be spaced at least 20 to 30 meters apart to prevent overlapping plume interference, oriented along prevailing wind currents.\n- *Data Logging:* Catches are recorded daily or tri-weekly. When counts breach statutory **Economic Threshold Levels (ETL)**, biological control interventions (Bt, NPV, parasitoid releases) are immediately triggered.",
      "maxMarks": 10,
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionType": "LONG_ANSWER",
      "questionText": "Describe the design, biochemical synthesis, dispenser technology, and field calibration of insect pheromone monitoring systems.",
      "outlinePoints": [
        "Identification: GC-MS and GC-EAD identify bioactive peaks from excised female calling glands.",
        "Stereochemistry: Exact isomer ratios are mandatory; minute isomeric impurities completely inhibit catches.",
        "Dispensers: Rubber septa and polyethylene ampoules utilize Fickian diffusion with BHT antioxidants.",
        "Trap Architecture: Delta traps for fragile microlepidoptera; funnel/sleeve traps for large noctuids.",
        "Calibration: 5-12 traps/ha installed at canopy level, spaced 20-30 m apart, checked regularly against ETLs."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U5-SUB14",
      "modelAnswer": "During the late 1990s and early 2000s, Indian cotton cultivation faced a catastrophic crisis. Indiscriminate, calendar-based spraying of synthetic chemical insecticides (organophosphates, synthetic pyrethroids) triggered high-level insecticide resistance in the American bollworm (*Helicoverpa armigera*), decimated natural predator complexes, and led to secondary resurgence of whiteflies and pink bollworm (*Pectinophora gossypiella*), driving farmers into severe debt. In response, ICAR, state agricultural universities, and international agencies designed and implemented a landmark bio-intensive Integrated Pest Management (IPM) model:\n\n**1. Phase 1: Cultural and Ecological Habitat Engineering (0 to 30 DAS):**\n- Sowing certified, resistant cultivars/hybrids simultaneously across contiguous village blocks to prevent staggered breeding.\n- Intercropping cotton with **cowpea (*Vigna unguiculata*) or pigeonpea** as biological refuges and nurseries for predatory ladybird beetles (*Cheilomenes sexmaculata*) and green lacewings (*Chrysoperla zastrowi*).\n- Soil application of **Neem Cake at 250 kg/ha** to suppress soil-borne grubs and nematodes.\n\n**2. Phase 2: Semiochemical Monitoring and ETL-Based Decisions (30 to 70 DAS):**\n- Installation of **Gossyplure and Helilure pheromone traps at 5 traps/ha** across contiguous acreage.\n- Trap catches monitored tri-weekly. Chemical sprays were banned during this vegetative window, allowing natural enemies to establish.\n- Inundative releases of the egg parasitoid **Trichogramma chilonis @ 150,000 parasitoids/ha/release** initiated at 40 DAS, repeated weekly for 4 to 6 releases.\n\n**3. Phase 3: Targeted Botanical and Microbial Biopesticide Applications (70 to 110 DAS):**\n- At early squaring, foliar application of **5% Neem Seed Kernel Extract (NSKE 5%)** or commercial Azadirachtin 1500 ppm EC (3 ml/L). Suppressed whitefly vectors, aphids, and acted as an oviposition deterrent and antifeedant against bollworms.\n- When Helilure trap catches breached ETL (8 moths/trap/night), targeted sprays of **Helicoverpa armigera NPV (HaNPV @ 250 to 500 LE/ha)** blended with 0.5% jaggery and 0.1% Tinopal were applied in late evening, inducing viral epizootics in young caterpillar broods.\n- Alternated with **Bacillus thuringiensis subsp. kurstaki (Btk @ 1.5 kg/ha)** to manage bollworm larvae feeding on bracts and squares.\n\n**4. Phase 4: Pink Bollworm Atmospheric Mating Disruption (Peak Boll Formation):**\n- Deployed **PB-Rope L dispensers (Gossyplure)** at 250 to 350 ropes/ha. Ropes twisted onto main stems saturated the canopy air with pheromone, preventing pink bollworm mating and reducing diapausing larvae in open cotton bolls.\n\n**5. Measurable Outcomes and Agro-Economic Triumph:**\n- Reduced synthetic chemical insecticide sprays from 15-20 sprays per season down to 2-3 targeted sprays (a 70-80% reduction).\n- Successfully broke pyrethroid resistance in *H. armigera*.\n- Preserved natural enemy populations, reduced farmer production costs by Rs. 4,000 to 6,000 per hectare, and restored high seed cotton yields.",
      "maxMarks": 10,
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionType": "LONG_ANSWER",
      "questionText": "Provide a detailed account of the successful Cotton IPM program in India, illustrating how pheromones, biopesticides, and natural enemies revived the crop.",
      "outlinePoints": [
        "Crisis: Severe pyrethroid resistance in Helicoverpa and whitefly resurgence devastated Indian cotton.",
        "Habitat: Cowpea intercropping conserved predatory Chrysoperla and ladybird beetles.",
        "Semiochemicals: Gossyplure/Helilure traps (5/ha) established ETLs; PB-Ropes disrupted pink bollworm mating.",
        "Biocontrol: Inundative Trichogramma releases (150,000/ha) destroyed bollworm eggs.",
        "Microbials & Botanicals: NSKE 5%, HaNPV (250 LE/ha), and Btk sprays eliminated hatching caterpillars.",
        "Outcome: 70-80% reduction in chemical sprays, broken insecticide resistance, and restored profitability."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U5-SUB15",
      "modelAnswer": "Basmati rice production in northern India (Punjab, Haryana, western Uttar Pradesh) faces strict Maximum Residue Limits (MRLs) in importing countries. Implementing an export-compliant, zero-chemical-residue IPM schedule based on semiochemicals, natural enemies, and biopesticides is vital:\n\n**1. Target Pest Complexes:**\n- Yellow Stem Borer (*Scirpophaga incertulas* - causing dead hearts and white ears).\n- Rice Leaf Folder (*Cnaphalocrocis medinalis* - causing folded, skeletonized leaves).\n- Brown Planthopper (*Nilaparvata lugens* - causing hopper burn).\n\n**2. Stage-by-Stage Bio-Intensive Management Schedule:**\n\n*Stage 1: Nursery and Transplanting Phase (0 to 25 DAT)*\n- Soil Treatment: Apply **Pseudomonas fluorescens 1% WP @ 2.5 kg/ha** mixed in FYM for systemic disease and pest resistance.\n- Trap Installation: Install **Scirpolure sleeve traps @ 8 traps/ha** across the field boundary at 15 DAT to track immigrant stem borer moths.\n\n*Stage 2: Tillering and Early Vegetative Phase (25 to 50 DAT)*\n- Parasitoid Releases: Release **Trichogramma japonicum** (targeting yellow stem borer) and **Trichogramma chilonis** (targeting leaf folder) **@ 100,000 parasitoids/ha/release** at weekly intervals from 30 DAT (4 releases total). Staple 'Tricho-cards' beneath leaf tips in late afternoon.\n- Botanical Spray (at 35 DAT): Apply **5% Neem Seed Kernel Extract (NSKE 5%)** or cold-pressed Neem Oil (3 ml/L with 0.1% detergent). Repels female stem borer moths from ovipositing on leaf blades and deters leaf folder larvae.\n- Predator Conservation: Preserve beneficial predatory mirid bugs (*Cyrtorhinus lividipennis*) and wolf spiders (*Lycosa pseudoannulata*) by completely avoiding synthetic chemical sprays.\n\n*Stage 3: Panicle Initiation and Booting Phase (50 to 75 DAT)*\n- Microbial Biopesticide Spray 1: If stem borer catches breach ETL (1 moth/trap/day or 1 egg mass/m2), apply **Bacillus thuringiensis subsp. kurstaki (Btk @ 1.0 to 1.5 kg/ha)**.\n- Microbial Biopesticide Spray 2 (against Sucking Pests): Apply **Beauveria bassiana** or **Lecanicillium lecanii WP (1 x 10^8 CFU/g @ 2.5 kg/ha)** directed at the base of rice clumps to suppress early nymphs of Brown Planthopper (BPH) and Whitebacked Planthopper (WBPH).\n\n*Stage 4: Heading, Flowering, and Grain Filling (75 DAT to Harvest)*\n- Foliar Spray (at 80 DAT): Apply **Azadirachtin 1500 ppm EC @ 2.5 ml/L**. Provides clean, residue-free protection against late-season earhead bugs and leaf folder.\n- Harvest Compliance: Because only biopesticides and semiochemicals were utilized, pre-harvest residue tests confirm **Zero Chemical Residues**, satisfying stringent European Union and US-FDA MRL standards and guaranteeing premium export market prices.",
      "maxMarks": 10,
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionType": "LONG_ANSWER",
      "questionText": "Formulate a comprehensive, season-long biopesticide and semiochemical schedule for managing the pest complex in export-quality Basmati rice.",
      "outlinePoints": [
        "Target: Yellow stem borer, leaf folder, and brown planthopper under strict export MRL compliance.",
        "Nursery: Scirpolure sleeve traps (8/ha) installed to monitor adult stem borer arrivals.",
        "Tillering: Weekly releases of Trichogramma japonicum and T. chilonis (100,000/ha) with foliar NSKE 5%.",
        "Panicle Initiation: Targeted Btk sprays against borers and Beauveria/Lecanicillium sprays against BPH.",
        "Heading: Azadirachtin 1500 ppm EC applied for clean, residue-free protection through harvest.",
        "Outcome: Zero synthetic pesticide residues, 100% compliance with international export standards."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U5-SUB16",
      "modelAnswer": "Catching 15 *Helicoverpa armigera* adult male moths per trap per night for two consecutive nights indicates a major nocturnal mating flight and signals that an intense oviposition wave is actively occurring across the tomato canopy:\n\n**Actionable Biological Response Plan:**\n1. **Interpretation of Pheromone Data:**\n   - The standard Economic Threshold Level (ETL) for *H. armigera* is 8 to 10 moths/trap/night. Reaching 15 moths/trap/night confirms the pest population has **breached the critical action threshold**.\n   - Female moths are currently mating and laying hundreds of eggs on flower sepals, young leaves, and developing green fruits.\n\n2. **Immediate Intervention 1: Inundative Parasitoid Release (Day 1):**\n   - Immediately release the egg parasitoid **Trichogramma chilonis @ 100,000 parasitoids/ha** (deploy 5 Tricho-cards across the field cut into strips and stapled on lower leaf surfaces).\n   - *Trichogramma* will seek out and parasitize freshly laid *Helicoverpa* eggs within 24 to 48 hours, destroying the embryos before larvae can hatch.\n\n3. **Intervention 2: Targeted HaNPV Foliar Spray (Day 3 to 4):**\n   - Timing: Schedule spray exactly **3 to 4 days after the peak flight**. This coincides with the emergence of vulnerable 1st- and early 2nd-instar neonate caterpillars from eggs that escaped parasitism.\n   - Tank Mix Formulation: Apply **HaNPV @ 250 to 500 Larval Equivalents (LE)/ha** (1.5 x 10^12 POBs/ha) in 500 liters of water.\n   - Crucial Adjuvants: Add **0.5% crude jaggery (5 g/L)** as a feeding stimulant, **0.1% non-ionic surfactant (1 ml/L)**, and **0.1% Tinopal** as a UV photoprotectant.\n   - Diurnal Timing: Spray strictly **late afternoon (after 4:30 PM)** to avoid midday solar UV-B degradation and match nocturnal caterpillar feeding.\n\n4. **Intervention 3: Follow-Up Neem Spray (Day 8 to 10):**\n   - Apply **Azadirachtin 1500 ppm EC (3 ml/L)** 5 days after HaNPV to provide residual antifeedant action and arrest development in surviving larvae, preventing fruit boring.",
      "maxMarks": 6,
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionType": "APPLICATION",
      "questionText": "A tomato grower installs 10 Helilure traps per hectare. After catching 15 moths/trap/night for two consecutive nights, the grower asks when and what to spray. Formulate a biological response plan.",
      "outlinePoints": [
        "Threshold Breach: 15 moths/trap/night confirms critical ETL breach, signaling massive egg laying.",
        "Day 1: Release Trichogramma chilonis (100,000/ha) to parasitize and destroy freshly deposited eggs.",
        "Day 3-4: Apply HaNPV (250-500 LE/ha) targeting newly emerged 1st-instar neonates.",
        "Adjuvants: Add 0.5% jaggery (phagostimulant), 0.1% surfactant, and 0.1% Tinopal UV protectant.",
        "Diurnal Timing: Spray strictly after 4:30 PM; follow with Azadirachtin (3 ml/L) on Day 8-10."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U5-SUB17",
      "modelAnswer": "The Oriental fruit fly (*Bactrocera dorsalis*) causes catastrophic fruit rot in ripening mangoes by ovipositing beneath the fruit pericarp. A semiochemical mass trapping grid using Methyl Eugenol is the standard management system:\n\n**5-Hectare Orchard Mass Trapping Layout:**\n1. **Attractant and Toxicant Formulation:**\n   - Attractant: **Methyl eugenol** (4-allyl-1,2-dimethoxybenzene), an extremely powerful male parapheromone.\n   - Toxicant: **Dichlorvos (DDVP 76% EC)** or Malathion (50% EC).\n   - Lure Mixture: Prepare a 4:1 ratio of Methyl eugenol : DDVP (or soak absorbent plywood blocks measuring 5 cm x 5 cm x 1 cm in the chemical mixture for 24 hours).\n\n2. **Trap Architecture (Modified Steiner / Bottle Trap):**\n   - Use transparent 1-liter plastic bottles or Steiner traps with two 1.0-cm entrance holes drilled on opposite sides below the shoulder.\n   - Suspend the treated plywood block or cotton wick inside the bottle using a wire from the screw cap.\n\n3. **Field Grid Layout and Density:**\n   - Density: Deploy **15 to 20 traps per hectare** (Total = 75 to 100 traps for the 5-hectare orchard).\n   - Placement: Hang traps inside tree canopies at a height of **1.5 to 2.0 meters** above ground in shaded, dense foliage branches on the eastern or northern side of the tree to prevent direct solar heating and rapid lure drying.\n   - Grid Distribution: Form a uniform grid with traps spaced approximately **20 to 25 meters apart**. Concentrate higher trap density (spaced 15 m apart) along orchard perimeter borders to intercept incoming flies.\n\n4. **Operational Timing and Maintenance:**\n   - Installation: Install traps **45 to 60 days before fruit harvest** (coinciding with the fruit maturation and marble-to-egg size stage).\n   - Servicing: Inspect traps weekly to record fly catches. Re-charge plywood blocks with 2-3 drops of fresh Methyl eugenol mixture every **4 to 6 weeks**.",
      "maxMarks": 6,
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol",
      "questionType": "APPLICATION",
      "questionText": "Design an orchard mass trapping layout for managing Oriental Fruit Fly (Bactrocera dorsalis) in a 5-hectare mango orchard.",
      "outlinePoints": [
        "Chemistry: 4:1 blend of Methyl eugenol (parapheromone) and DDVP (toxicant) on plywood blocks.",
        "Trap: Steiner or modified plastic bottle trap with two 1-cm entrance holes.",
        "Density: 15 to 20 traps/ha (75-100 traps total across 5 ha), spaced 20-25 m in a grid.",
        "Placement: Hang inside tree canopy at 1.5-2.0 m in shaded foliage to prevent solar drying.",
        "Timing & Maintenance: Install 45-60 days before harvest; recharge lures every 4-6 weeks."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U5-SUB18",
      "modelAnswer": "A sudden drop of pheromone trap catches to zero while field foliar damage escalates is a diagnostic symptom of severe operational and semiochemical maintenance failures:\n\n**Technical Diagnosis:**\n1. **Lure Exhaustion or Thermal Degradation:**\n   - Spodolure consists of conjugated diene acetates ((Z,E)-9,11-tetradecadienyl acetate). These conjugated double bonds are exceptionally photolabile and sensitive to oxidative polymerization under high tropical summer temperatures (>35\u00b0C) and solar UV radiation.\n   - If poor-quality rubber septa lacking antioxidants (BHT) were utilized, the volatile pheromone reserve completely flashed off or degraded into inactive polymers within 7 to 10 days, ceasing emission of the attractant plume.\n2. **Trap Saturation and Odor Repulsion by Putrefying Cadavers:**\n   - In heavy infestations, high-density traps catch hundreds of adult moths in the first 3-5 days.\n   - If the bucket traps were not emptied or lacked a proper killing agent, dead moths accumulated, putrefied in humid heat, and released ammonia and foul putrefactive volatiles that masked the pheromone scent and actively repelled incoming moths.\n3. **Canopy Growth Submerging Traps:**\n   - Soybean canopies grow rapidly. If traps remained tied to initial low stakes, expanding foliage physically enclosed and blocked the trap entrance holes and impeded wind currents necessary to carry the plume downwind.\n4. **Failure to Recognize Mating and Larval Emergence:**\n   - The high initial catches indicated massive adult mating flights 10 days prior. The caterpillars currently defoliating the crop hatched from eggs laid by females that mated before traps were installed or outside trap zones. Pheromone traps do not catch or kill caterpillars.\n\n**Corrective Prescriptions:**\n- Immediately replace all lures with fresh, stabilized Spodolure lures.\n- Empty and clean all trap buckets, adding fresh soapy water or DDVP strips.\n- Raise trap heights so funnels remain 30 cm above the growing soybean canopy.\n- Immediately apply an appropriate biological spray (SlNPV @ 250 LE/ha or NSKE 5%) to kill the currently feeding caterpillars.",
      "maxMarks": 6,
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps",
      "questionType": "APPLICATION",
      "questionText": "A farmer installs 20 pheromone traps per hectare for Spodoptera litura in soybean. After 10 days, trap catches drop to zero, yet defoliation increases. Diagnose the technical errors.",
      "outlinePoints": [
        "Lure Exhaustion: Volatile diene acetates degraded under solar UV and heat within 7-10 days.",
        "Cadaver Putrefaction: Un-emptied traps filled with rotting moths, releasing foul odors that repelled males.",
        "Canopy Obstruction: Expanding soybean foliage physically blocked trap funnels and plume dispersal.",
        "Phenological Gap: Current defoliation is from caterpillars hatched from eggs laid 7-10 days ago.",
        "Remedies: Replace lures, empty buckets, elevate traps 30 cm above canopy, and spray SlNPV."
      ],
      "difficulty": "Medium"
    },
    {
      "id": "ENT203-U5-SUB19",
      "modelAnswer": "The complete failure of pink bollworm (*Pectinophora gossypiella*) mating disruption on isolated 0.5-acre plots surrounded by conventional farms is a classic, predictable ecological failure known as the **Boundary Island Effect**:\n\n**Ecological Causal Analysis:**\n1. **The Mating Disruption Boundary Limitation:**\n   - Mating disruption functions strictly by saturating the air to prevent local male-female orientation and copulation. **It does not kill moths, nor does it affect already-mated female moths.**\n   - In an isolated 0.5-acre plot (approximately 45 m x 45 m), the edge-to-area ratio is enormous. Even if 100% of the male moths within that 0.5-acre plot were completely disoriented and failed to mate locally, the plot was surrounded by conventional farms where mating occurred unhindered.\n2. **Gravid Female Immigration:**\n   - Female pink bollworm moths, once mated in neighboring conventional fields, are strong nocturnal fliers capable of traveling several hundred meters searching for optimal cotton bolls.\n   - Mated gravid females flew straight across the borders into the disrupted 0.5-acre plot and deposited fertile egg clutches on cotton flowers and bolls. Because these females were already mated, atmospheric pheromone disruption had zero deterrent effect on their oviposition.\n3. **Plume Dilution from Edge Winds:**\n   - Ambient wind currents rapidly swept synthetic pheromone away from the edges of the tiny 0.5-acre plot, diluting concentrations below the threshold required for sensory adaptation and allowing localized mating along borders.\n\n**Prescribed Community Landscape Approach:**\n1. **Adopt Contiguous Area-Wide IPM (AW-IPM):**\n   - Mating disruption must **never** be implemented on fragmented individual plots. The minimum effective operational area is **contiguous blocks of at least 5 to 10 hectares (12 to 25 acres)**, ideally covering entire village clusters.\n   - Organize farmers into a village-level IPM cluster to synchronize dispenser deployment.\n2. **Synchronized Dispenser Installation:**\n   - Deploy PB-Ropes (250-350 ropes/ha) uniformly across all contiguous farms simultaneously at squaring (40-45 DAS) before resident populations emerge.\n3. **Buffer Zones and Perimeter Suppression:**\n   - Establish a 50-meter perimeter buffer zone around the contiguous block where higher dispenser densities and border neem sprays are applied to intercept immigrating moths.",
      "maxMarks": 8,
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull",
      "questionType": "CASE_STUDY",
      "questionText": "A smallholder community in Andhra Pradesh attempts mating disruption of pink bollworm using Gossyplure on isolated 0.5-acre cotton plots surrounded by conventional farms. The program fails completely. Analyze the ecological causes and prescribe the community landscape approach.",
      "outlinePoints": [
        "Failure Cause: Boundary Island Effect; tiny 0.5-acre plots suffer massive edge plume dilution.",
        "Gravid Female Immigration: Mated females from surrounding farms flew into the plot and laid eggs.",
        "Mechanism Limitation: Mating disruption prevents mating but has zero effect on already-mated females.",
        "Landscape Solution: Implement Area-Wide IPM (AW-IPM) across contiguous blocks of at least 5-10 hectares.",
        "Community Action: Synchronize PB-Rope installation across all village farms simultaneously at squaring."
      ],
      "difficulty": "Hard"
    },
    {
      "id": "ENT203-U5-SUB20",
      "modelAnswer": "The successful implementation of bio-intensive IPM across Basmati rice clusters in Punjab that eliminated chemical rejections in European export markets serves as an international model for agricultural sustainability:\n\n**1. Institutional Architecture (Cluster Mobilization & Certification):**\n- *Farmer Producer Organizations (FPOs):* Farmers were organized into village-level FPOs, replacing individual chemical spray decisions with collective, synchronized biological management.\n- *Contract Farming and Traceability:* Exporters partnered directly with FPOs, providing guaranteed buy-back at a 15-20% price premium for zero-residue certification. Each field was georeferenced with digital QR-code traceability from nursery to milling.\n- *Technical Extension:* University scientists and Krishi Vigyan Kendras (KVKs) provided hands-on training on pest scouting, pheromone maintenance, and biopesticide handling.\n\n**2. Technical Architecture (Stage-Specific Biological Matrix):**\n- *Step 1: Preventive Soil & Seed Inoculation:* Seed treatment with *Pseudomonas fluorescens* (10 g/kg seed) and soil application with FYM enriched with *Trichoderma harzianum* suppressed fungal foot rot (*Fusarium moniliforme*) and bacterial leaf blight without chemical fungicides.\n- *Step 2: Pheromone Surveillance Grid:* Installed Scirpolure sleeve traps (8 traps/ha) across all contiguous fields. Traps were checked tri-weekly to track yellow stem borer flights, establishing definitive ETLs and eliminating premature calendar spraying.\n- *Step 3: Biological Inundation (Natural Enemies):* Inundative releases of egg parasitoids (*Trichogramma japonicum* and *T. chilonis*) @ 100,000 parasitoids/ha/week starting at 30 DAT (4 releases total). Stapling Tricho-cards across the cluster decimated stem borer and leaf folder eggs.\n- *Step 4: Selective Botanical & Microbial Interventions:* Applied NSKE 5% at early tillering as an antifeedant. When leaf folder or planthopper counts increased, targeted sprays of *Bacillus thuringiensis* (Btk @ 1.0 kg/ha) and *Beauveria bassiana* (1 x 10^8 CFU/g @ 2.5 kg/ha) were applied. Chemical broad-spectrum organophosphates (chlorpyrifos, acephate) and synthetic pyrethroids were 100% banned.\n\n**3. Measurable Economic and Trade Outcomes:**\n- *Residue Compliance:* 100% of tested grain consignments satisfied strict European Union Maximum Residue Limits (MRLs < 0.01 ppm for all banned pesticides).\n- *Cost Economics:* Plant protection input costs decreased by Rs. 3,500/ha due to substitution of expensive chemicals with biologicals.\n- *Biodiversity Restoration:* Natural populations of predatory spiders (*Lycosa*) and mirid bugs (*Cyrtorhinus*) quadrupled, creating permanent natural ecological resilience.",
      "maxMarks": 8,
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies",
      "questionType": "CASE_STUDY",
      "questionText": "A progressive farm cluster in Punjab successfully implements an export-oriented Basmati rice IPM program that achieves zero chemical pesticide rejections in Europe. Analyze the institutional and technical architecture of this success.",
      "outlinePoints": [
        "Institutional: Organized farmers into FPOs with premium buy-back pricing and digital QR-code traceability.",
        "Surveillance: Scirpolure sleeve traps (8/ha) tracked stem borer flights, eliminating calendar sprays.",
        "Biocontrol: Inundative Trichogramma releases (100,000/ha/week) destroyed stem borer and leaf folder eggs.",
        "Microbials: Replaced synthetic chemicals with Pseudomonas, NSKE 5%, Btk, and Beauveria bassiana.",
        "Trade Outcome: 100% compliance with European Union MRLs (<0.01 ppm) and Rs. 3,500/ha input cost savings."
      ],
      "difficulty": "Hard"
    }
  ],
  "flashcards": [
    {
      "id": "ENT203-U5-FC01",
      "front": "What are semiochemicals?",
      "back": "Chemical substances or mixtures that convey information between individual organisms, altering behavior or physiology.",
      "hint": "Message-bearing chemicals",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)"
    },
    {
      "id": "ENT203-U5-FC02",
      "front": "What is the key difference between a pheromone and an allelochemical?",
      "back": "Pheromones act intraspecifically (same species); allelochemicals act interspecifically (different species).",
      "hint": "Intraspecific vs interspecific",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)"
    },
    {
      "id": "ENT203-U5-FC03",
      "front": "What is an allomone?",
      "back": "An interspecific chemical signal that adaptively benefits the emitting organism (e.g., defensive repellents).",
      "hint": "Benefits emitter",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)"
    },
    {
      "id": "ENT203-U5-FC04",
      "front": "What is a kairomone?",
      "back": "An interspecific chemical signal that benefits the receiving organism at the emitter's expense (e.g., host frass odors).",
      "hint": "Benefits receiver",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)"
    },
    {
      "id": "ENT203-U5-FC05",
      "front": "What is a synomone?",
      "back": "An interspecific chemical signal that mutually benefits both the emitter and receiver (e.g., HIPVs recruiting parasitoids).",
      "hint": "Benefits both emitter and receiver",
      "syllabusTopic": "Semiochemicals: definitions, classification (pheromones, allomones, kairomones, synomones)"
    },
    {
      "id": "ENT203-U5-FC06",
      "front": "What is the chemical composition of Gossyplure?",
      "back": "A 1:1 mixture of (Z,Z)-7,11-hexadecadienyl acetate and (Z,E)-7,11-hexadecadienyl acetate.",
      "hint": "1:1 blend of (Z,Z) and (Z,E) isomers",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol"
    },
    {
      "id": "ENT203-U5-FC07",
      "front": "What are the chemical constituents of Helilure?",
      "back": "A 97:3 blend of (Z)-11-hexadecenal and (Z)-9-hexadecenal for Helicoverpa armigera.",
      "hint": "(Z)-11- and (Z)-9-hexadecenal (97:3)",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol"
    },
    {
      "id": "ENT203-U5-FC08",
      "front": "What is Ferrugineol and which pest does it target?",
      "back": "An aggregation pheromone (4-methyl-5-nonanol) targeting both male and female red palm weevils.",
      "hint": "Red palm weevil aggregation pheromone",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol"
    },
    {
      "id": "ENT203-U5-FC09",
      "front": "What trap design is ideal for monitoring diamondback moth (Plutella xylostella)?",
      "back": "Delta sticky trap with replaceable polyisobutylene adhesive liner.",
      "hint": "Delta sticky trap",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps"
    },
    {
      "id": "ENT203-U5-FC10",
      "front": "What trap design is standard for rice yellow stem borer?",
      "back": "Sleeve trap with a funnel and transparent polyethylene bag tied at the bottom.",
      "hint": "Sleeve trap",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps"
    },
    {
      "id": "ENT203-U5-FC11",
      "front": "What visual color of sticky trap is used to attract thrips?",
      "back": "Bright blue sticky traps (matching thrips' positive visual response at 450-470 nm).",
      "hint": "Bright blue",
      "syllabusTopic": "Trap designs and dispenser technologies: delta, sleeve, funnel, and sticky traps"
    },
    {
      "id": "ENT203-U5-FC12",
      "front": "What is mating disruption in pest management?",
      "back": "Saturating field air with synthetic pheromone to prevent males from locating and mating with females.",
      "hint": "Atmospheric confusion preventing mating",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull"
    },
    {
      "id": "ENT203-U5-FC13",
      "front": "What is the recommended trap density for pheromone monitoring of caterpillars?",
      "back": "5 to 12 traps per hectare installed at crop canopy height.",
      "hint": "5 to 12 traps/ha",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull"
    },
    {
      "id": "ENT203-U5-FC14",
      "front": "What trap density is typically recommended for mass trapping Spodoptera litura?",
      "back": "25 to 50 traps per hectare across contiguous acreage.",
      "hint": "25 to 50 traps/ha",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull"
    },
    {
      "id": "ENT203-U5-FC15",
      "front": "In the Push-Pull strategy, what plant serves as the 'Push' intercrop?",
      "back": "Silverleaf desmodium (Desmodium uncinatum), which emits repellent terpenes (ocimene, DMNT).",
      "hint": "Desmodium",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies"
    },
    {
      "id": "ENT203-U5-FC16",
      "front": "In the Push-Pull strategy, what plant serves as the 'Pull' perimeter border?",
      "back": "Napier grass (Pennisetum purpureum), which attracts moths into an internal dead-end resin trap.",
      "hint": "Napier grass",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies"
    },
    {
      "id": "ENT203-U5-FC17",
      "front": "How does Desmodium suppress the parasitic weed Striga hermonthica?",
      "back": "Root uncinanone B causes suicidal germination while inhibiting haustorial attachment to roots.",
      "hint": "Suicidal germination and uncinanone B",
      "syllabusTopic": "The Push-Pull strategy: ecological engineering, companion planting, and case studies"
    },
    {
      "id": "ENT203-U5-FC18",
      "front": "What parapheromone lure attracts male Oriental fruit flies (Bactrocera dorsalis)?",
      "back": "Methyl eugenol (4-allyl-1,2-dimethoxybenzene).",
      "hint": "Methyl eugenol",
      "syllabusTopic": "Major agricultural pheromones: Gossyplure, Helilure, Spodolure, Scirpolure, Ferrugineol"
    },
    {
      "id": "ENT203-U5-FC19",
      "front": "Why are biopesticides like Bt and NPV safe for Trichogramma egg parasitoids?",
      "back": "They are ingestion-only stomach poisons specific to lepidopteran midguts, causing zero harm to adult wasps.",
      "hint": "Target-specific stomach poisons",
      "syllabusTopic": "Integrating biopesticides into IPM schedules: natural enemies, rotation, and case studies"
    },
    {
      "id": "ENT203-U5-FC20",
      "front": "Why did mating disruption fail on small 0.5-acre plots in the case study?",
      "back": "Edge plume dilution and massive immigration of already-mated gravid females from adjacent farms.",
      "hint": "Boundary effect and female immigration",
      "syllabusTopic": "Semiochemical strategies: monitoring, mass trapping, mating disruption, and push-pull"
    }
  ]
};
