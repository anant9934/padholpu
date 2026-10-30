"""Generate AGR217 Unit 4: Pest and Disease Management in Natural Farming"""
import json
import os

u4_notes = {
    'learningObjectives': [
        'Analyze the philosophy of Ecological Pest Management (EPM) in Natural Farming, contrasting biological balance with chemical eradication.',
        'Detail the precise formulation protocols, chemical constituents, and modes of action for Neemastra and Brahmastra against sucking and chewing pests.',
        'Evaluate the preparation and pest suppression mechanisms of Agniastra and Dashparni Ark against resilient stem borers, pod borers, and leaf rollers.',
        'Formulate natural disease control regimens using fermented sour buttermilk (Chhachh), Sonthastra, and cow urine-turmeric decoctions against bacterial and fungal blights.',
        'Design habitat diversification strategies including trap cropping, companion planting, border strips, and the Push-Pull strategy to conserve beneficial entomofauna.'
    ],
    'sections': [
        {
            'id': 'sec-agr217-4-1',
            'heading': '1. Ecological Pest Management (EPM) and the Principle of Coexistence',
            'content': """Natural Farming rejects the concept of total pest eradication, which is chemically impossible and ecologically destructive. Instead, it operates on **Ecological Pest Management (EPM)**, maintaining pest populations below the **Economic Threshold Level (ETL)** while sustaining native biological food chains.

### The Myth of Pest 'Eradication'
- In chemical agriculture, synthetic broad-spectrum insecticides (synthetic pyrethroids, organophosphates, neonicotinoids) eliminate not only target pests but also their natural predators (ladybird beetles, hoverflies, lacewings, parasitoid wasps).
- This triggers **pest resurgence** (rapid rebounding of resistant pests due to predator absence) and **secondary pest outbreaks** (minor pests multiplying uncontrolled into devastating plagues, e.g., whiteflies and red spider mites following synthetic sprays).
- Natural Farming treats insects as integral components of the agro-ecosystem. When crops receive balanced nutrition without synthetic nitrogen-induced cellular succulent elongation, plant cell walls remain thick and lignified, deterring insect feeding.

### Predator-to-Prey Ratios and Agro-biodiversity
- Healthy, pesticide-free farms maintain a natural predator-prey ratio where predators and parasitoids consume over 70–80% of pest eggs and early instars.
- Natural Farming maintains biological equilibrium by conserving micro-habitats, spider webs, ground beetles, and entomopathogenic fungi.""",
            'subsections': [
                {
                    'subheading': 'Nitrogen Fertilization and Pest Susceptibility',
                    'content': 'Synthetic urea causes luxurious vegetative growth with thin cell walls and high free amino acid levels in plant sap, attracting sucking pests. Natural Farming eliminates synthetic nitrogen, building robust silica- and lignin-reinforced cell walls that physically resist piercing-sucking stylets.'
                }
            ]
        },
        {
            'id': 'sec-agr217-4-2',
            'heading': '2. Botanical Formulations: Neemastra and Brahmastra',
            'content': """In Natural Farming, pest repellents are prepared on-farm using local biological resources, native cow products, and plants that cattle and goats naturally avoid grazing due to bitter alkaloids and secondary metabolites.

### Neemastra (For Sucking Pests and Early Instars)
- **Ingredients (per 200 L barrel / 1 acre):**
  1. Fresh indigenous cow dung: 5 kg
  2. Native cow urine: 5 L
  3. Crushed neem leaves and pulp: 5 kg (or neem seed kernel powder: 2–3 kg)
  4. Water: 200 L
- **Preparation & Fermentation:** Mix cow dung, cow urine, and crushed neem in water. Stir clockwise twice daily and let ferment in shade for 48 hours. Filter through a double-layered khadi cloth before spraying.
- **Active Phytochemicals:** Azadirachtin, salannin, nimbin, and meliantriol.
- **Mode of Action:** Antifeedant, insect growth regulator (IGR) disrupting ecdysone and molting, oviposition deterrent, and mild contact repeller.
- **Target Pests:** Aphids, jassids, whiteflies, thrips, and early instars of caterpillars.
- **Shelf Life:** 6 months if kept in shade and stirred weekly.

### Brahmastra (For Defoliators and Caterpillars)
- **Concept:** Utilizes leaves from 5 distinct plant species that domestic animals do not eat due to intense bitterness, toxic latex, or pungent aroma.
- **Ingredients:**
  1. Crushed neem leaves: 2 kg
  2. Leaves from 4 other ungrazed plants (choose 2 kg each of custard apple/Sitaphal, papaya, castor, Lantana camara, Pongamia/Karanja, Datura, or Guava).
  3. Indigenous cow urine: 10 L
- **Preparation Protocol:** Grind all leaves into a fine paste. Add to 10 L cow urine in an earthen or stainless steel pot. Bring to a slow boil for 15–20 minutes until the volume slightly reduces and darkens. Cool in shade for 24–48 hours, stir daily, and filter.
- **Dosage:** Dilute 2 to 3 L of Brahmastra in 100 L of water per acre.
- **Mode of Action:** Complex mixture of bitter alkaloids (anonaine in custard apple, ricinine in castor, karanjin in pongamia) acting as stomach poisons, neurotoxins, and antifeedants.
- **Target Pests:** Pod borers (*Helicoverpa armigera*), armyworms (*Spodoptera litura*), leaf folders, semi-loopers, and hairy caterpillars.""",
            'subsections': [
                {
                    'subheading': 'Why Native Cow Urine?',
                    'content': 'Cow urine contains hippuric acid, benzoic acid, urea, minerals, and bioactive peptides that act as natural penetrating surfactants, ensuring uniform foliar spreading and adhesion of botanical alkaloids.'
                }
            ]
        },
        {
            'id': 'sec-agr217-4-3',
            'heading': '3. High-Potency Formulations: Agniastra and Dashparni Ark',
            'content': """When pest infestations cross critical thresholds or stem/fruit borers bore deeply into plant tissue, high-potency thermogenic botanical extracts are utilized.

### Agniastra (The Fire Weapon)
- **Key Ingredients (for 100–200 L spray / 1 acre):**
  1. Desi cow urine: 10 L
  2. Crushed tobacco leaves (or bidi waste): 1 kg (or 1 kg dry Datura leaves)
  3. Green chilli paste (highly pungent native variety): 500 g
  4. Native garlic bulb paste: 500 g
  5. Crushed neem leaves: 5 kg
- **Preparation Protocol:** Mix all ingredients in an earthen or copper pot with cow urine. Boil slowly on a low fire for 15–30 minutes until froth subsides. Cover and steep in shade for 48 hours. Filter carefully.
- **Active Chemistry:** Nicotine (neurotoxin), capsaicin (sensory nerve irritant and cellular permeabilizer), allicin (sulfur-based antifeedant/antimicrobial), and azadirachtin.
- **Application:** Dilute 2 to 2.5 L of Agniastra in 100 L water. Spray early morning or late afternoon.
- **Target Pests:** Internal tissue borers (stem borer in paddy/maize, pink and spotted bollworms in cotton, fruit borer in tomato/brinjal, shoot borer).

### Dashparni Ark (The Ten-Leaf Broad-Spectrum Extract)
- **Concept:** A long-fermented botanical bio-repellent containing secondary metabolites from ten distinct medicinal and ungrazed plant species.
- **Composition (for 200 L water):**
  - Desi cow dung: 5 kg
  - Desi cow urine: 10 L
  - 10 ungrazed leaf varieties (2 kg each): Neem, Pongamia (Karanj), Calotropis (Madar/Aak), Datura, Custard Apple (Sitaphal), Guava, Castor, Lantana camara, Nerium (Kaner), Papaya, or Moringa.
  - Crushed green chillies: 500 g
  - Crushed native garlic: 250 g
  - Turmeric rhizome paste: 500 g
- **Fermentation:** Ferment in a covered drum in shade for **30 to 45 days** (minimum 3 weeks). Stir clockwise twice daily.
- **Shelf Life:** Up to 6 months.
- **Dosage:** 2–3 L Dashparni Ark diluted in 100 L water per acre.
- **Mechanism:** Induces immediate gustatory repellency, suppresses adult egg-laying, disrupts insect digestive enzymes, and stimulates Systemic Acquired Resistance (SAR) in host plants.""",
            'subsections': [
                {
                    'subheading': 'Precautions with Agniastra',
                    'content': 'Because of high capsaicin and nicotine content, handlers must wear gloves and eye protection. Spraying during intense midday heat must be avoided to prevent foliar phytotoxicity.'
                }
            ]
        },
        {
            'id': 'sec-agr217-4-4',
            'heading': '4. Botanical and Microbial Disease Management',
            'content': """Crop diseases caused by phytopathogenic fungi (mildews, blights, rusts, wilts) and bacteria are managed without copper fungicides or synthetic systemic chemicals.

### Fermented Sour Buttermilk (Khatta Chhachh / Buttermilk Extract)
- **Preparation:** Fresh churned buttermilk (chhachh) from native cow milk is allowed to ferment in an earthen or copper pot for **5 to 7 days**. A copper plate or wire is immersed during fermentation, forming a light greenish-blue copper lactate suspension.
- **Scientific Mechanism:**
  - Lactic acid bacteria (*Lactobacillus*) produce lactic acid, lowering pH to ~3.5–4.0, which inhibits fungal spore germination.
  - Bacteriocins, hydrogen peroxide, and organic acids act as natural biocides.
  - Copper lactate provides bio-assimilable copper ions that rupture fungal hyphae without toxic soil accumulation.
- **Dosage:** 5 L fermented sour buttermilk diluted in 100 L water per acre.
- **Target Diseases:** Powdery mildew, downy mildew, leaf spots (*Cercospora*, *Alternaria*), and citrus canker.

### Sonthastra (Dry Ginger and Milk Decoction)
- **Ingredients:** Dry ginger powder (Sonth): 200 g, raw native cow milk: 2 L, water: 200 L.
- **Preparation:** Boil dry ginger in 2 L water until reduced to 1 L. Boil 2 L milk separately, cool, remove cream layer, and mix with ginger extract. Dilute in 200 L water.
- **Target Diseases:** Sheath blight in paddy, fungal anthracnose, early and late blight, and damping-off.
- **Mechanism:** Gingerols and shogaols exhibit potent antifungal properties, while milk lactoferrin and salts dehydrate germinating fungal hyphae.

### Cow Urine and Turmeric Decoction
- Fresh cow urine (5 L) mixed with 500 g raw turmeric powder (*Curcuma longa*) in 100 L water. Curcumin acts as a strong antifungal membrane disruptor and antiviral agent.""",
            'subsections': [
                {
                    'subheading': 'Prevention via Rhizosphere Inoculation',
                    'content': 'Regular application of Jeevamrit introduces beneficial antagonists (*Trichoderma*, *Bacillus subtilis*, *Pseudomonas fluorescens*) that outcompete pathogenic soil fungi (*Fusarium*, *Rhizoctonia*, *Sclerotium*) via niche exclusion and antibiotic production.'
                }
            ]
        },
        {
            'id': 'sec-agr217-4-5',
            'heading': '5. Cultural Controls, Habitat Management, and Push-Pull Strategies',
            'content': """In Natural Farming, physical crop design acts as the primary defense against insect surges.

### Trap Cropping
- **Marigold (*Tagetes patula/erecta*):** Intercropped or planted as border rows in tomato, cotton, and chickpea. Marigold flowers attract adult *Helicoverpa armigera* and *Spodoptera* moths to lay eggs on marigolds rather than valuable cash crops. Furthermore, marigold root exudates (alpha-terthienyl) suppress plant-parasitic nematodes (*Meloidogyne incognita*).
- **Mustard (*Brassica juncea*):** Planted as trap rows (1 row every 15 rows of cabbage/cauliflower) to attract diamondback moth (*Plutella xylostella*).
- **Castor (*Ricinus communis*):** Planted along field perimeters to trap *Spodoptera litura* egg masses, which can be mechanically removed or allowed to be consumed by birds.

### Border Crops and Windbreaks
- Sowing 3–4 dense rows of tall-growing cereal crops (sorghum, pearl millet, maize) around field perimeters creates a physical barrier against wind-dispersed sucking pests (aphids, thrips, whiteflies) while providing roosting perches for insectivorous birds (black drongos, babblers).

### The Push-Pull Strategy
- **Push Component:** Intercropping repellent companion plants (e.g., *Desmodium*, coriander, fennel) whose volatile terpenes repel stem borers away from main cereal crops.
- **Pull Component:** Surrounding the field border with attractive forage grasses (e.g., Napier grass, Sudan grass) that emit volatile attractants, trapping moths where their larvae cannot thrive.
- **Insectary Flowering Strips:** Planting buckwheat, dill, fennel, and sunnhemp supplies continuous floral nectar and pollen to adult hoverflies, lacewings, and micro-hymenopteran parasitoids (*Trichogramma*, *Bracon*, *Campoletis*).""",
            'subsections': [
                {
                    'subheading': 'Bird Perches (T-Perches)',
                    'content': 'Installing 20–25 T-shaped wooden bird perches per acre at crop canopy height allows predatory birds (drongos, king crows) to hunt caterpillars during morning and dusk hours.'
                }
            ]
        }
    ],
    'keyTakeaways': [
        'Natural Farming practices Ecological Pest Management (EPM), maintaining pest numbers below economic injury levels rather than pursuing chemical eradication.',
        'High nitrogen fertilization promotes succulent cellular growth and thin epidermises; Natural Farming relies on biological mineralization that strengthens plant cuticle and cell walls.',
        'Neemastra (5 kg dung, 5 L urine, 5 kg neem in 200 L water, fermented 48 hrs) manages sucking pests (aphids, jassids, whiteflies) via azadirachtin-mediated growth disruption.',
        'Brahmastra uses leaves from five bitter/ungrazed plant species boiled in cow urine to control defoliators, pod borers, and hairy caterpillars.',
        'Agniastra contains boiled neem, tobacco, hot green chilli, and garlic in cow urine to penetrate tissues and destroy cryptic stem and fruit borers.',
        'Dashparni Ark is a 30-to-45-day anaerobic botanical extract of ten ungrazed medicinal plants, providing long-lasting gustatory repellency and broad-spectrum pest suppression.',
        'Fermented sour buttermilk (aged 5–7 days with copper) provides lactic acid and copper lactate to control downy mildew, powdery mildew, and bacterial blights.',
        'Cultural pest management uses trap crops (marigold, castor, mustard), border barriers (sorghum/maize), and Push-Pull designs to protect cash crops without toxic residues.'
    ],
    'commonMisunderstandings': [
        {
            'myth': 'Natural Farming does not protect crops and leaves them helpless against sudden pest epidemics.',
            'reality': 'Natural Farming utilizes potent on-farm botanical decoctions (Agniastra, Brahmastra, Dashparni Ark) that exhibit proven antifeedant, repellent, and contact toxicity, backed by predatory insect conservation.'
        },
        {
            'myth': 'Pest control in Natural Farming aims to completely kill 100% of all insects in the field.',
            'reality': '100% elimination destroys predator food chains and leads to pest resurgence; the goal is to keep pest densities below the Economic Threshold Level (ETL).'
        },
        {
            'myth': 'Dashparni Ark can be used immediately within 24 hours of mixing.',
            'reality': 'Dashparni Ark requires a full 30 to 45 days of fermentation to extract the complex secondary alkaloids, glycosides, and triterpenoids from the ten plant species.'
        },
        {
            'myth': 'Sour buttermilk is just an organic fertilizer and has no fungicidal efficacy.',
            'reality': 'Fermented sour buttermilk with copper develops copper lactate and bacteriocins with low pH (~3.8), rupturing fungal cell membranes and inhibiting spore germination.'
        }
    ],
    'summary': 'Unit 4 delivers a comprehensive, scientifically validated framework for pest and disease management in Natural Farming. Moving beyond chemical eradication paradigms, the unit establishes Ecological Pest Management (EPM) where crop-predator-prey food webs maintain pest populations below economic injury levels. Detailed preparation protocols, biochemical modes of action, and application dosages are established for key botanical formulations: Neemastra for sucking pests, Brahmastra for leaf-eating caterpillars, Agniastra for cryptic stem and fruit borers, and Dashparni Ark as a long-fermented broad-spectrum repellent. Fungal and bacterial disease mitigation is achieved through bio-derived fungicides including fermented sour buttermilk (chhachh) enriched with copper lactate, Sonthastra (ginger-milk decoction), and cow urine-turmeric extracts. Finally, the unit integrates cultural engineering techniques—trap cropping with marigold, mustard, and castor, border barrier plantings, Push-Pull companion layouts, and insectary floral strips—to achieve resilient agro-ecosystems free of toxic synthetic chemicals.'
}

print("Loaded Unit 4 Notes structure successfully.")
