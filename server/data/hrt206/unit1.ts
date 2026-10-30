import { UnitContent } from "./types";

export const unit1Content: UnitContent = {
  "unitNumber": 1,
  "title": "Introduction and Mango",
  "shortDescription": "Importance and scope of fruit and plantation crops, horticultural classification, agro-climatic zones, and comprehensive commercial production technology of Mango (Mangifera indica) including high-density planting, grafting, nutrition, canopy architecture, and physiological disorders.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
    "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
    "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
    "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
    "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
    "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
  ],
  "notes": {
    "learningObjectives": [
      "Assess the socioeconomic and nutritional importance of fruit and plantation crops, India's global standing in horticulture, and key agro-climatic zones.",
      "Classify major fruit crops systematically based on botanical family, temperature adaptation (tropical, subtropical, temperate), and post-harvest respiratory behavior (climacteric vs non-climacteric).",
      "Evaluate commercial mango varieties of North, South, East, and West India, highlighting traits of regular-bearing hybrids like Amrapali and Mallika.",
      "Master nursery propagation protocols: epicotyl (stone) grafting, veneer grafting, and polyembryonic vs monoembryonic rootstocks.",
      "Formulate orchard architecture for traditional vs high-density planting (HDP), drip fertigation schedules, and paclobutrazol (Cultar) application for flower induction.",
      "Diagnose and manage physiological disorders: mango malformation (Fusarium mangiferae), spongy tissue, black tip (boron deficiency/brick kiln fumes), and alternate bearing."
    ],
    "sections": [
      {
        "id": "sec-hrt-1-1",
        "heading": "1. Importance, Scope, and Classification of Fruit Crops",
        "content": "India is the second-largest producer of fruits in the world (accounting for ~11% of global fruit production), often hailed as the 'Fruit Basket of the World'. Horticulture contributes over 30% to agricultural GDP while occupying only ~13% of cropped area. Fruits provide essential protective nutrition: vitamins (Vitamin A in mango/papaya, Vitamin C in aonla/guava), minerals (potassium, iron, calcium), antioxidants, and dietary fiber, mitigating malnutrition and lifestyle diseases.",
        "subsections": [
          {
            "subheading": "Comprehensive Classification of Fruit Crops",
            "content": "Fruit crops are categorized across three major scientific schemes:",
            "table": {
              "headers": [
                "Classification Basis",
                "Category",
                "Key Physiological / Ecological Traits",
                "Representative Fruit Crops"
              ],
              "rows": [
                [
                  "Climatic Adaptation",
                  "Tropical Fruits",
                  "Evergreen, frost-sensitive, require warm humid climate year-round; no chilling requirement.",
                  "Mango, Banana, Papaya, Pineapple, Sapota, Guava, Coconut, Cashew"
                ],
                [
                  "Climatic Adaptation",
                  "Subtropical Fruits",
                  "Tolerate light winter frost, require hot summers and cool winters; distinct seasons.",
                  "Citrus (Sweet orange, Mandarin), Grape, Pomegranate, Litchi, Ber, Fig, Loquat"
                ],
                [
                  "Climatic Adaptation",
                  "Temperate Fruits",
                  "Deciduous, highly cold-tolerant; strictly require winter chilling (hours below 7\u00b0C) to break bud dormancy.",
                  "Apple, Pear, Peach, Plum, Apricot, Cherry, Walnut, Almond"
                ],
                [
                  "Ripening Physiology",
                  "Climacteric Fruits",
                  "Exhibit a dramatic surge in respiration (climacteric peak) and burst of ethylene production during ripening; can be harvested at physiological maturity.",
                  "Mango, Banana, Papaya, Guava, Apple, Sapota, Fig, Plum"
                ],
                [
                  "Ripening Physiology",
                  "Non-Climacteric",
                  "Gradual, steady decline in respiration without ethylene burst; do not ripen off the tree, must ripen fully on tree before harvest.",
                  "Citrus species, Grape, Pomegranate, Litchi, Pineapple, Ber, Strawberry, Jamun"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-hrt-1-2",
        "heading": "2. Mango: Botanical Background, Cultivars, and Agro-Climatic Needs",
        "content": "Mango (*Mangifera indica L.*, Family Anacardiaceae, 2n = 4x = 40) is the 'National Fruit of India' and the 'King of Fruits'. Originating in the Indo-Burma region, India produces over 45% of the world's mangoes across 2.3 million hectares.",
        "subsections": [
          {
            "subheading": "Commercial Mango Cultivars of India",
            "content": "Regional distribution and cultivar specialties:",
            "table": {
              "headers": [
                "Region",
                "Commercial Cultivar",
                "Key Agronomic and Quality Attributes",
                "Bearing Habit"
              ],
              "rows": [
                [
                  "Western India",
                  "Alphonso (Hapus)",
                  "Premier export cultivar, superb aroma, golden-yellow pulp, highly susceptible to spongy tissue.",
                  "Alternate bearing"
                ],
                [
                  "Western India",
                  "Kesar",
                  "Gujarat's pride, outstanding processing quality for pulp, saffron-colored flesh, sweet aroma.",
                  "Alternate bearing"
                ],
                [
                  "Northern India",
                  "Dashehari",
                  "Leading table cultivar of UP, sweet fiberless pulp, thin stone, pleasant flavor.",
                  "Alternate bearing"
                ],
                [
                  "Northern India",
                  "Langra",
                  "Distinctive greenish-yellow peel when ripe, strong characteristic turpentine aroma, highly juicy.",
                  "Alternate bearing"
                ],
                [
                  "Northern India",
                  "Chausa",
                  "Late-maturing, exceptionally sweet, golden-yellow skin, very popular in northern plains.",
                  "Alternate bearing"
                ],
                [
                  "Eastern India",
                  "Himsagar / Bombai",
                  "Leading Bengal cultivar, rich sweet flavor, fiberless, thin peel.",
                  "Regular bearing"
                ],
                [
                  "Southern India",
                  "Banganapalli (Benishan)",
                  "Large fruit, golden skin, firm fiberless sweet pulp, excellent shelf-life and transportability.",
                  "Regular bearing"
                ],
                [
                  "Southern India",
                  "Totapuri (Bangalora)",
                  "Beak-shaped apex, thick skin, mildly sweet, premier processing variety for pulp and juice.",
                  "Strictly regular bearing"
                ],
                [
                  "Hybrid",
                  "Amrapali (Dashehari x Neelum)",
                  "Precocious, dwarf, regular bearing, exceptionally high beta-carotene (Vitamin A), suited for HDP (2.5 x 2.5 m).",
                  "Strictly regular bearing"
                ],
                [
                  "Hybrid",
                  "Mallika (Neelum x Dashehari)",
                  "Semi-vigorous, regular bearing, large fruit (300g), high TSS (24\u00b0 Brix), excellent keeping quality.",
                  "Regular bearing"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-hrt-1-3",
        "heading": "3. Propagation, Rootstocks, and High-Density Planting (HDP)",
        "content": "Because mango is highly heterozygous and cross-pollinated, seed propagation causes wide genetic segregation. Commercial orchards rely exclusively on vegetative grafting onto sturdy rootstocks.",
        "subsections": [
          {
            "subheading": "Vegetative Propagation Techniques",
            "content": "1. **Epicotyl (Stone) Grafting:** Executed on 10\u201315 day old tender, copper-colored germinating seedlings (epicotyls). Wedge grafting is performed using mature terminal scions. Very high success rate (80\u201390%), cost-effective, and rapid.\n2. **Veneer Grafting:** Commercial standard in North India on 9\u201312 month old rootstocks. A shallow sloping cut is made on the rootstock stem, matching a wedge cut on the scion.\n3. **Softwood Grafting:** Performed on 3\u20136 month old new flushes during warm humid monsoon months.\n\n### Rootstocks: Monoembryonic vs Polyembryonic:\n- **Monoembryonic:** Single sexual embryo per seed (North Indian cultivars); produces variable seedling rootstocks.\n- **Polyembryonic:** Contains one sexual embryo and multiple asexual nucellar embryos (South Indian cultivars: *Olour, Kurukkan, Vellaikolumban, Chandrakaran*). Nucellar seedlings are true-to-type, clonal, and provide uniform vigor and salinity/dwarfism tolerance (*Vellaikolumban* induces dwarfism)."
          },
          {
            "subheading": "High-Density Planting (HDP) and Meadow Orcharding",
            "content": "Traditional mango orchards planted at 10 x 10 m (100 trees/ha) require 10\u201315 years to reach full bearing. Modern high-density systems revolutionize productivity:\n- **HDP Amrapali:** Planted at **2.5 x 2.5 m spacing in a square system**, accommodating **1,600 trees/ha**. Produces commercial yields from year 3 (10\u201315 t/ha compared to 7\u20138 t/ha in traditional orchards).\n- **Canopy Architecture & Pruning:** Annual post-harvest center-opening pruning (heading back and thinning out) maintains tree canopy height below 2.5 m, ensuring light penetration and continuous fruiting wood formation.\n- **Growth Regulators:** Application of **Paclobutrazol (Cultar)** @ 3\u20135 ml/m canopy diameter as a soil drench in September\u2013October inhibits gibberellin biosynthesis, arresting vegetative flushes and inducing profuse, synchronized flowering."
          }
        ]
      },
      {
        "id": "sec-hrt-1-4",
        "heading": "4. Physiological Disorders of Mango and Integrated Management",
        "content": "Mango production faces several destructive physiological and pathological disorders:",
        "subsections": [
          {
            "subheading": "Major Disorders, Causes, and Control",
            "content": "Disorders, etiology, and remedial measures:",
            "table": {
              "headers": [
                "Disorder",
                "Symptoms & Etiology",
                "Remedial & Management Practices"
              ],
              "rows": [
                [
                  "Mango Malformation",
                  "Vegetative: Bunchy-top crowded shoots. Floral: Compact, hypertrophied panicles with crowded male flowers; zero fruit set. Complex etiology: *Fusarium mangiferae* fungus + mango bud mite (*Aceria mangiferae*).",
                  "Prune and burn malformed panicles. Spray NAA @ 200 ppm in October to delay panicle emergence. Spray dimethoate or dicofol to control bud mites."
                ],
                [
                  "Spongy Tissue",
                  "Internal non-edible breakdown of pulp in ripe fruit; yellowish, corky, acidic, gas-filled tissue with off-flavor. Major export barrier in Alphonso. Caused by high soil convective heat during fruit maturity triggering premature amylase breakdown of starch.",
                  "Harvest fruits at 85% maturity (specific gravity 1.01-1.02). Mulch orchard soil with paddy straw or cover crops. Grow resistant cultivars (Ratna, Sindhu, Kesar, Dashehari)."
                ],
                [
                  "Black Tip",
                  "Distal end of developing fruit turns yellow, dark brown, and finally black and necrotic; fruit growth arrests. Caused by toxic sulfur dioxide (SO2), carbon monoxide (CO), and fluoride fumes emitted by nearby brick kilns, aggravated by Boron deficiency.",
                  "Enact legislation keeping brick kilns >3 km away from orchards. Spray Borax @ 1% (10 g/L) or Sodium carbonate (0.5%) at pea stage and marble stage."
                ],
                [
                  "Biennial / Alternate Bearing",
                  "Heavy crop in 'On-year' followed by negligible crop in 'Off-year' due to depletion of carbohydrate reserves and hormonal imbalance (high endogenous gibberellins from developing seeds).",
                  "Deblossoming partial flowers in 'On-year'. Soil application of Paclobutrazol @ 3\u20135 g a.i./tree in Sept-Oct. Plant regular-bearing hybrids (Amrapali, Mallika, Ratna)."
                ],
                [
                  "Fruit Drop",
                  "Massive drop of flowers and young fruits at mustard, pea, and marble stages. Only 0.1% of flowers reach harvest maturity.",
                  "Spray 2,4-D @ 10-20 ppm or NAA @ 20 ppm at pea and marble stages. Ensure regular irrigation during fruit enlargement."
                ]
              ]
            }
          }
        ]
      }
    ],
    "keyTakeaways": [
      "India is the world's leading producer of mango and banana, contributing over 30% to agricultural GDP.",
      "Fruits are classified climatically into tropical, subtropical, and temperate, and physiologically into climacteric and non-climacteric.",
      "Alphonso (West), Dashehari and Langra (North), and Banganapalli (South) are premier regional mango cultivars; Amrapali is ideal for HDP (2.5 x 2.5 m).",
      "Epicotyl grafting on 10-15 day old rootstocks provides rapid, high-success vegetative propagation.",
      "Spongy tissue in Alphonso is caused by convective soil heat; black tip is triggered by brick kiln fumes and boron deficiency.",
      "Paclobutrazol (Cultar) soil drench in autumn successfully breaks alternate bearing by suppressing vegetative growth and stimulating floral bud differentiation."
    ],
    "commonMisunderstandings": [
      {
        "myth": "All fruits can be harvested unripe and ripened artificially with ethylene.",
        "reality": "Only climacteric fruits (mango, banana, papaya) exhibit an ethylene-driven respiratory burst after harvest. Non-climacteric fruits (citrus, grape, pomegranate) do not ripen after harvest and must achieve full maturity on the tree."
      },
      {
        "myth": "Mango malformation is purely a genetic disorder.",
        "reality": "Mango malformation is a complex biotic disorder caused primarily by the fungus Fusarium mangiferae and transmitted by the eriophyid bud mite Aceria mangiferae."
      }
    ],
    "summary": "Unit 1 establishes the economic, nutritional, and ecological framework of fruit and plantation crops in India. It examines botanical and climatic classifications, contrasting climacteric and non-climacteric post-harvest physiology. The unit delivers a complete technical production package for Mango (Mangifera indica), analyzing commercial cultivars, nursery propagation (epicotyl and veneer grafting), polyembryonic rootstocks, high-density planting (HDP) architecture, drip fertigation, and paclobutrazol-mediated canopy control, concluding with diagnosis and mitigation of physiological disorders such as malformation, spongy tissue, black tip, and alternate bearing."
  },
  "mcqs": [
    {
      "id": "HRT206-U1-MCQ01",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Easy",
      "questionText": "What is India's global rank in total fruit production?",
      "options": {
        "A": "First",
        "B": "Second (after China)",
        "C": "Third",
        "D": "Fifth"
      },
      "correctOption": "B",
      "explanation": "India ranks second globally in total fruit production after China, producing over 100 million metric tonnes annually."
    },
    {
      "id": "HRT206-U1-MCQ02",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Easy",
      "questionText": "Which fruit crop is universally recognized as the richest natural source of Vitamin C (Ascorbic acid) in India?",
      "options": {
        "A": "Mango",
        "B": "Barbados cherry (Malpighia glabra) / Aonla (Emblica officinalis)",
        "C": "Banana",
        "D": "Apple"
      },
      "correctOption": "B",
      "explanation": "Barbados cherry (~1000-4000 mg/100g) followed by Aonla (~600 mg/100g) are the richest commercial sources of Vitamin C."
    },
    {
      "id": "HRT206-U1-MCQ03",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Easy",
      "questionText": "Which vitamin is abundantly present in ripe yellow mango and papaya fruits?",
      "options": {
        "A": "Vitamin C",
        "B": "Vitamin A (beta-carotene precursor)",
        "C": "Vitamin D",
        "D": "Vitamin K"
      },
      "correctOption": "B",
      "explanation": "Ripe mangoes (up to 4800 IU/100g in Amrapali) and papayas are exceptionally rich in beta-carotene (pro-vitamin A)."
    },
    {
      "id": "HRT206-U1-MCQ04",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Medium",
      "questionText": "What is the daily per capita fruit consumption recommended by the Indian Council of Medical Research (ICMR)?",
      "options": {
        "A": "50 grams",
        "B": "120 grams per day",
        "C": "250 grams",
        "D": "400 grams"
      },
      "correctOption": "B",
      "explanation": "ICMR recommends a minimum daily dietary intake of 120 g of fruits per person for balanced protective nutrition."
    },
    {
      "id": "HRT206-U1-MCQ05",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Medium",
      "questionText": "Which Indian government agency is responsible for facilitating and regulating agricultural processed food exports, including fresh fruits?",
      "options": {
        "A": "ICAR",
        "B": "APEDA (Agricultural and Processed Food Products Export Development Authority)",
        "C": "NABARD",
        "D": "FCI"
      },
      "correctOption": "B",
      "explanation": "APEDA under the Ministry of Commerce & Industry oversees the export promotion of fresh fruits, vegetables, and processed products."
    },
    {
      "id": "HRT206-U1-MCQ06",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Medium",
      "questionText": "Which state in India is the largest producer of mangoes?",
      "options": {
        "A": "Punjab",
        "B": "Andhra Pradesh / Uttar Pradesh",
        "C": "Kerala",
        "D": "Rajasthan"
      },
      "correctOption": "B",
      "explanation": "Andhra Pradesh and Uttar Pradesh are the leading mango-producing states in India in terms of area and production."
    },
    {
      "id": "HRT206-U1-MCQ07",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Medium",
      "questionText": "The Golden Revolution in Indian agriculture is associated with the dramatic surge in the production of:",
      "options": {
        "A": "Oilseeds",
        "B": "Horticulture and Honey",
        "C": "Pulses",
        "D": "Fertilizers"
      },
      "correctOption": "B",
      "explanation": "The Golden Revolution (1991-2003, spearheaded by Nirpakh Tutej) refers to the massive growth in horticulture, fruits, and honey production."
    },
    {
      "id": "HRT206-U1-MCQ08",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Hard",
      "questionText": "Which export destination accounts for the largest share of Indian fresh mango exports?",
      "options": {
        "A": "Australia",
        "B": "Middle East / UAE and Gulf Cooperation Council (GCC) countries",
        "C": "South America",
        "D": "Russia"
      },
      "correctOption": "B",
      "explanation": "The UAE and Middle Eastern countries represent the largest volume export market for Indian mangoes (Alphonso, Banganapalli, Kesar)."
    },
    {
      "id": "HRT206-U1-MCQ09",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Hard",
      "questionText": "Vapour Heat Treatment (VHT) and Hot Water Treatment are mandatory quarantine protocols for export of Indian mangoes to Japan and USA to eliminate:",
      "options": {
        "A": "Fungal anthracnose spores",
        "B": "Bactrocera fruit flies and stone weevil eggs",
        "C": "Bacterial canker",
        "D": "Aphids"
      },
      "correctOption": "B",
      "explanation": "Vapour Heat Treatment (47.5\u00b0C for 20 min) is mandatory to disinfest Oriental fruit fly (Bactrocera dorsalis) maggots before export."
    },
    {
      "id": "HRT206-U1-MCQ10",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "difficulty": "Hard",
      "questionText": "Which agro-climatic zone of India is characterized as the 'Temperate Fruit Zone'?",
      "options": {
        "A": "Western Dry Zone",
        "B": "North-Western Himalayan Region (Jammu & Kashmir, Himachal Pradesh, Uttarakhand)",
        "C": "Southern Coastal Zone",
        "D": "Eastern Plateau"
      },
      "correctOption": "B",
      "explanation": "The North-Western Himalayan region provides the mandatory 800-1500 hours of chilling (<7\u00b0C) required for temperate pome and stone fruits."
    },
    {
      "id": "HRT206-U1-MCQ11",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Easy",
      "questionText": "Which of the following is classified as a temperate deciduous fruit crop?",
      "options": {
        "A": "Banana",
        "B": "Apple (Malus domestica)",
        "C": "Mango",
        "D": "Papaya"
      },
      "correctOption": "B",
      "explanation": "Apple is a deciduous temperate tree fruit requiring winter chilling temperatures below 7\u00b0C to break winter dormancy."
    },
    {
      "id": "HRT206-U1-MCQ12",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Easy",
      "questionText": "Which of the following is a classic non-climacteric fruit that must fully ripen on the tree before harvest?",
      "options": {
        "A": "Banana",
        "B": "Citrus (Sweet orange / Mandarin)",
        "C": "Mango",
        "D": "Papaya"
      },
      "correctOption": "B",
      "explanation": "Citrus fruits do not exhibit a post-harvest respiratory climacteric burst and cannot synthesize sugars or ripen once harvested."
    },
    {
      "id": "HRT206-U1-MCQ13",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Easy",
      "questionText": "Botanically, the edible fleshy fruit of mango (Mangifera indica) is classified as a:",
      "options": {
        "A": "Berry",
        "B": "Drupe (Stone fruit)",
        "C": "Pome",
        "D": "Hesperidium"
      },
      "correctOption": "B",
      "explanation": "Mango is a fleshy drupe featuring a thin exocarp (peel), thick fleshy mesocarp (pulp), and stony endocarp enclosing the seed."
    },
    {
      "id": "HRT206-U1-MCQ14",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Medium",
      "questionText": "Climacteric fruit ripening is physiologically characterized by a sharp concomitant surge in respiration rate and the production of:",
      "options": {
        "A": "Gibberellic acid",
        "B": "Ethylene (C2H4)",
        "C": "Abscisic acid",
        "D": "Cytokinin"
      },
      "correctOption": "B",
      "explanation": "Climacteric fruits undergo an autocatalytic burst of ethylene production accompanied by a respiratory climacteric peak during ripening."
    },
    {
      "id": "HRT206-U1-MCQ15",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Medium",
      "questionText": "Which of the following groups contains ONLY non-climacteric fruit crops?",
      "options": {
        "A": "Mango, Banana, Guava",
        "B": "Grape, Pomegranate, Citrus, Litchi",
        "C": "Apple, Pear, Plum",
        "D": "Sapota, Papaya, Fig"
      },
      "correctOption": "B",
      "explanation": "Grape, Pomegranate, Citrus, and Litchi are all classic non-climacteric fruits."
    },
    {
      "id": "HRT206-U1-MCQ16",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Medium",
      "questionText": "Botanically, the fruit of Citrus species (orange, lemon) is classified as a specialized berry termed a:",
      "options": {
        "A": "Drupe",
        "B": "Hesperidium",
        "C": "Pome",
        "D": "Syconus"
      },
      "correctOption": "B",
      "explanation": "A hesperidium is a modified berry with a leathery glandular rind (flavedo and albedo) and interior juice vesicles derived from carpel hairs."
    },
    {
      "id": "HRT206-U1-MCQ17",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Medium",
      "questionText": "Which fruit family does the litchi (Litchi chinensis) belong to?",
      "options": {
        "A": "Anacardiaceae",
        "B": "Sapindaceae",
        "C": "Rutaceae",
        "D": "Rosaceae"
      },
      "correctOption": "B",
      "explanation": "Litchi and rambutan belong to the soapberry family, Sapindaceae."
    },
    {
      "id": "HRT206-U1-MCQ18",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Hard",
      "questionText": "Pome fruits (such as Apple and Pear) develop from which flower structure?",
      "options": {
        "A": "Superior single ovary",
        "B": "Inferior ovary surrounded by an enlarged fleshy floral hypanthium / thalamus",
        "C": "Multiple apocarpous ovaries",
        "D": "Inflorescence axis"
      },
      "correctOption": "B",
      "explanation": "Pomes are false fruits (pseudocarps) where the edible flesh develops from the fused floral tube (hypanthium/thalamus) enclosing the core."
    },
    {
      "id": "HRT206-U1-MCQ19",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Hard",
      "questionText": "The edible fleshy portion of Pomegranate (Punica granatum) is botanically the:",
      "options": {
        "A": "Mesocarp",
        "B": "Aril (fleshy, juicy testa of seeds)",
        "C": "Endocarp",
        "D": "Thalamus"
      },
      "correctOption": "B",
      "explanation": "In pomegranate (botanically a balausta), the edible portions are the succulent, ruby-red seed arils."
    },
    {
      "id": "HRT206-U1-MCQ20",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "difficulty": "Hard",
      "questionText": "What type of multiple aggregate fruit is represented by the Fig (Ficus carica)?",
      "options": {
        "A": "Sorosis",
        "B": "Syconus",
        "C": "Siliqua",
        "D": "Balausta"
      },
      "correctOption": "B",
      "explanation": "Fig is a syconus, a hollow fleshy pear-shaped receptacle (inflorescence axis) lined internally with numerous tiny individual drupelets."
    },
    {
      "id": "HRT206-U1-MCQ21",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Easy",
      "questionText": "Which family does mango (Mangifera indica) belong to?",
      "options": {
        "A": "Rutaceae",
        "B": "Anacardiaceae",
        "C": "Myrtaceae",
        "D": "Musaceae"
      },
      "correctOption": "B",
      "explanation": "Mango belongs to the cashew and sumac family, Anacardiaceae."
    },
    {
      "id": "HRT206-U1-MCQ22",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Easy",
      "questionText": "Which commercial mango variety of Maharashtra is globally celebrated for export but suffers from spongy tissue?",
      "options": {
        "A": "Dashehari",
        "B": "Alphonso (Hapus)",
        "C": "Langra",
        "D": "Chausa"
      },
      "correctOption": "B",
      "explanation": "Alphonso is India's most celebrated export variety, renowned for flavor, but severely affected by spongy tissue disorder."
    },
    {
      "id": "HRT206-U1-MCQ23",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Easy",
      "questionText": "Which famous northern Indian mango variety retains its green skin color even when fully ripe and sweet?",
      "options": {
        "A": "Chausa",
        "B": "Langra",
        "C": "Dashehari",
        "D": "Fazli"
      },
      "correctOption": "B",
      "explanation": "Langra (originating in Varanasi) retains an olive-green skin color even when fully ripe, possessing a rich, distinct flavor."
    },
    {
      "id": "HRT206-U1-MCQ24",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Medium",
      "questionText": "Amrapali is a celebrated dwarf, regular-bearing hybrid mango developed by crossing:",
      "options": {
        "A": "Neelum x Alphonso",
        "B": "Dashehari x Neelum",
        "C": "Alphonso x Banganapalli",
        "D": "Langra x Totapuri"
      },
      "correctOption": "B",
      "explanation": "Amrapali (IARI, 1971) was developed from the cross Dashehari (female) x Neelum (male)."
    },
    {
      "id": "HRT206-U1-MCQ25",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Medium",
      "questionText": "Mallika, an outstanding high-TSS mango hybrid, was bred from which reciprocal parentage?",
      "options": {
        "A": "Dashehari x Neelum",
        "B": "Neelum x Dashehari",
        "C": "Alphonso x Kesar",
        "D": "Banganapalli x Alphonso"
      },
      "correctOption": "B",
      "explanation": "Mallika (IARI, 1971) was developed from the cross Neelum (female) x Dashehari (male)."
    },
    {
      "id": "HRT206-U1-MCQ26",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Medium",
      "questionText": "Sindhu is a world-famous seedless/thin-stone mango hybrid developed by crossing:",
      "options": {
        "A": "Neelum x Dashehari",
        "B": "Ratna x Alphonso",
        "C": "Amrapali x Kesar",
        "D": "Totapuri x Dashehari"
      },
      "correctOption": "B",
      "explanation": "Sindhu (developed at FRS Vengurla) was bred from Ratna x Alphonso; its stone is paper-thin and non-viable (seedless)."
    },
    {
      "id": "HRT206-U1-MCQ27",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Medium",
      "questionText": "Which commercial mango variety of South India possesses a distinct parrot beak-shaped apex and is the premier pulp processing variety?",
      "options": {
        "A": "Banganapalli",
        "B": "Totapuri (Bangalora)",
        "C": "Neelum",
        "D": "Suvarnarekha"
      },
      "correctOption": "B",
      "explanation": "Totapuri has a prominent hooked beak and firm pulp, making it India's leading industrial processing mango."
    },
    {
      "id": "HRT206-U1-MCQ28",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Hard",
      "questionText": "In mango inflorescences, what types of flowers are borne on the panicle?",
      "options": {
        "A": "Only bisexual flowers",
        "B": "Staminate (male) flowers and Hermaphrodite (bisexual) flowers",
        "C": "Pistillate and staminate flowers",
        "D": "Neutrals only"
      },
      "correctOption": "B",
      "explanation": "Mango panicles are andromonoecious, bearing thousands of staminate (male) and hermaphrodite (perfect) flowers."
    },
    {
      "id": "HRT206-U1-MCQ29",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Hard",
      "questionText": "What environmental condition during flowering is most detrimental to mango fruit set?",
      "options": {
        "A": "Clear sunny skies and 28\u00b0C",
        "B": "Rainfall, heavy fog, and high humidity",
        "C": "Dry winds",
        "D": "Soil moisture depletion"
      },
      "correctOption": "B",
      "explanation": "Rainfall and fog during blooming wash away pollen, prevent pollinator (housefly) flight, and promote devastating powdery mildew and anthracnose infections."
    },
    {
      "id": "HRT206-U1-MCQ30",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "difficulty": "Hard",
      "questionText": "Which primary insect pollinator is responsible for cross-pollination in mango orchards?",
      "options": {
        "A": "Honeybees (Apis mellifera)",
        "B": "Housefly (Musca domestica) and hoverflies (Diptera)",
        "C": "Bumblebees",
        "D": "Wind only"
      },
      "correctOption": "B",
      "explanation": "Mango flowers produce a pungent odor attractive to Dipteran flies; the common housefly (Musca domestica) is the chief natural pollinator."
    },
    {
      "id": "HRT206-U1-MCQ31",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Easy",
      "questionText": "Epicotyl grafting (Stone grafting) in mango is carried out on rootstock seedlings that are how old?",
      "options": {
        "A": "10 to 15 days old",
        "B": "6 months old",
        "C": "12 months old",
        "D": "2 years old"
      },
      "correctOption": "A",
      "explanation": "Epicotyl grafting is performed when seedlings are in the copper/purple leaf stage, just 10-15 days after seed germination."
    },
    {
      "id": "HRT206-U1-MCQ32",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Easy",
      "questionText": "Which grafting technique is considered the standard commercial nursery method for propagating mangoes in Northern India?",
      "options": {
        "A": "T-budding",
        "B": "Veneer grafting",
        "C": "Air layering",
        "D": "Ground layering"
      },
      "correctOption": "B",
      "explanation": "Veneer grafting onto 9-12 month old rootstocks during July-August is the commercial standard in North India."
    },
    {
      "id": "HRT206-U1-MCQ33",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Easy",
      "questionText": "Polyembryonic mango rootstocks are genetically distinct because:",
      "options": {
        "A": "They produce multiple seeds per fruit",
        "B": "Each seed contains multiple asexual nucellar embryos that breed true-to-type, clonal rootstocks",
        "C": "They are polyploid triploids",
        "D": "They cannot germinate"
      },
      "correctOption": "B",
      "explanation": "Polyembryonic seeds produce true-to-type, clonal nucellar seedlings, providing uniform tree vigor and rootstock performance."
    },
    {
      "id": "HRT206-U1-MCQ34",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Easy",
      "questionText": "Which of the following is a classic South Indian polyembryonic mango rootstock known to induce dwarfism?",
      "options": {
        "A": "Dashehari",
        "B": "Vellaikolumban",
        "C": "Langra",
        "D": "Chausa"
      },
      "correctOption": "B",
      "explanation": "Vellaikolumban is a renowned polyembryonic rootstock that imparts significant dwarfing stature to grafted scions."
    },
    {
      "id": "HRT206-U1-MCQ35",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Medium",
      "questionText": "Kurukkan is a celebrated polyembryonic mango rootstock widely utilized in coastal India because it confers:",
      "options": {
        "A": "Dwarfism only",
        "B": "High tolerance to soil salinity and sodicity",
        "C": "Complete seedlessness",
        "D": "Early flowering in winter"
      },
      "correctOption": "B",
      "explanation": "Kurukkan is internationally recognized for exceptional tolerance to high soil salinity and chloride toxicity."
    },
    {
      "id": "HRT206-U1-MCQ36",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Medium",
      "questionText": "In preparing scion sticks for veneer grafting in mango, 'precooling' or 'defoliation' of scion shoots 7-10 days prior to detachment is done to:",
      "options": {
        "A": "Remove pests",
        "B": "Swell the axillary buds and store carbohydrates for rapid callus union",
        "C": "Reduce weight",
        "D": "Change flower sex ratio"
      },
      "correctOption": "B",
      "explanation": "Defoliating mother scion shoots while attached to the tree forces axillary vegetative buds to swell, ensuring rapid graft take upon union."
    },
    {
      "id": "HRT206-U1-MCQ37",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Medium",
      "questionText": "What wrapping material is universally used to tie the graft union in epicotyl and veneer grafting?",
      "options": {
        "A": "Jute string",
        "B": "200-gauge transparent polyethylene strips",
        "C": "Cotton thread",
        "D": "Mud plaster"
      },
      "correctOption": "B",
      "explanation": "Polythene strips (100-200 gauge) seal moisture, maintain cambial contact, and prevent entry of rainwater and fungi."
    },
    {
      "id": "HRT206-U1-MCQ38",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Medium",
      "questionText": "Why does hardwood cutting propagation fail commercially in mango?",
      "options": {
        "A": "Mango has no vascular cambium",
        "B": "Poor root initiation due to high anatomical sclerenchyma ring barriers and high tannin content",
        "C": "Roots grow upward",
        "D": "Leaves fall off immediately"
      },
      "correctOption": "B",
      "explanation": "Stem cuttings in mango root very poorly due to a continuous sclerenchymatous sheath in the phloem and internal rooting inhibitors."
    },
    {
      "id": "HRT206-U1-MCQ39",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Hard",
      "questionText": "The optimum temperature and relative humidity required for rapid callus formation and graft union success in mango are:",
      "options": {
        "A": "15\u00b0C and 40% RH",
        "B": "25\u00b0C to 30\u00b0C and 80% to 90% RH",
        "C": "40\u00b0C and 20% RH",
        "D": "5\u00b0C and 95% RH"
      },
      "correctOption": "B",
      "explanation": "Cambial cell division and callus bridge formation occur optimally between 25-30\u00b0C under high humidity (80-90%)."
    },
    {
      "id": "HRT206-U1-MCQ40",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "difficulty": "Hard",
      "questionText": "Which polyembryonic rootstock is known for cold hardiness and root knot nematode resistance in subtropical zones?",
      "options": {
        "A": "Alphonso",
        "B": "Olour (or Chandrakaran)",
        "C": "Totapuri",
        "D": "Banganapalli"
      },
      "correctOption": "B",
      "explanation": "Olour and Chandrakaran are vigorous polyembryonic rootstocks exhibiting tolerance to environmental stresses and nematodes."
    },
    {
      "id": "HRT206-U1-MCQ41",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Easy",
      "questionText": "What is the standard planting distance for traditional commercial mango varieties (e.g., Dashehari, Alphonso)?",
      "options": {
        "A": "2.5 x 2.5 m",
        "B": "5 x 5 m",
        "C": "10 x 10 m (square system: 100 trees/ha)",
        "D": "20 x 20 m"
      },
      "correctOption": "C",
      "explanation": "Traditional vigorous mango varieties are planted at 10 x 10 m spacing, accommodating 100 trees per hectare."
    },
    {
      "id": "HRT206-U1-MCQ42",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Easy",
      "questionText": "What is the recommended planting density and spacing for High-Density Planting (HDP) of Amrapali mango?",
      "options": {
        "A": "10 x 10 m (100 plants/ha)",
        "B": "5 x 5 m (400 plants/ha)",
        "C": "2.5 x 2.5 m in square system (1600 plants/ha)",
        "D": "1 x 1 m (10000 plants/ha)"
      },
      "correctOption": "C",
      "explanation": "Amrapali's genetic dwarfness allows high-density planting at 2.5 x 2.5 m, accommodating 1,600 trees per hectare."
    },
    {
      "id": "HRT206-U1-MCQ43",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Easy",
      "questionText": "Paclobutrazol (commercially sold as Cultar) is applied to mango orchards primarily to:",
      "options": {
        "A": "Control fruit fly maggots",
        "B": "Inhibit vegetative flushes and promote profuse, synchronized flowering",
        "C": "Accelerate leaf fall",
        "D": "Acidify the soil"
      },
      "correctOption": "B",
      "explanation": "Paclobutrazol is an anti-gibberellin triazole applied to soil to retard vegetative shoot flushes and induce early, regular flowering."
    },
    {
      "id": "HRT206-U1-MCQ44",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Medium",
      "questionText": "When is Paclobutrazol (Cultar) recommended to be applied as a soil drench in mango orchards?",
      "options": {
        "A": "During full bloom in March",
        "B": "September to October (2 to 3 months prior to anticipated flowering)",
        "C": "During fruit harvest in June",
        "D": "Immediately after winter frost"
      },
      "correctOption": "B",
      "explanation": "Soil application around the root zone in September-October inhibits vegetative flushes and promotes flower bud differentiation in December-January."
    },
    {
      "id": "HRT206-U1-MCQ45",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Medium",
      "questionText": "What is the recommended dose of Paclobutrazol for a 10-year-old bearing mango tree?",
      "options": {
        "A": "0.1 gram",
        "B": "3.0 to 5.0 grams a.i. (or 1.0 to 1.25 ml Cultar per meter canopy diameter)",
        "C": "500 grams",
        "D": "5 kilograms"
      },
      "correctOption": "B",
      "explanation": "The standard recommended dosage is 0.75-1.25 ml Cultar (23% SC) per meter of canopy spread, dissolved in 10-15 L water."
    },
    {
      "id": "HRT206-U1-MCQ46",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Medium",
      "questionText": "At what life stage should an established bearing mango tree receive its major annual fertilizer dose?",
      "options": {
        "A": "During peak flowering in February",
        "B": "Immediately post-harvest (July-August) during the monsoon flush",
        "C": "During fruit ripening in May",
        "D": "Mid-winter dormancy in December"
      },
      "correctOption": "B",
      "explanation": "Fertilizers are applied immediately after harvest in July-August to fuel the post-harvest vegetative flush that will bear next year's crop."
    },
    {
      "id": "HRT206-U1-MCQ47",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Medium",
      "questionText": "In mango orchard layout, which planting system accommodates 15% more trees than the square system?",
      "options": {
        "A": "Rectangular system",
        "B": "Hexagonal (Equilateral Triangle / Septule) system",
        "C": "Contour system",
        "D": "Quincunx system"
      },
      "correctOption": "B",
      "explanation": "The hexagonal system accommodates 15% more trees per unit area compared to the standard square system."
    },
    {
      "id": "HRT206-U1-MCQ48",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Medium",
      "questionText": "Why is irrigation strictly withheld in mango orchards for 2 to 3 months prior to flowering (October to December)?",
      "options": {
        "A": "To kill weeds",
        "B": "To induce physiological moisture stress that checks vegetative flushing and stimulates flower bud induction",
        "C": "To reduce fruit weight",
        "D": "To prevent leaf shedding"
      },
      "correctOption": "B",
      "explanation": "Imposing mild water deficit in autumn checks vegetative growth and promotes flower bud differentiation; watering at this stage forces unwanted vegetative flushes."
    },
    {
      "id": "HRT206-U1-MCQ49",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Hard",
      "questionText": "In HDP mango canopy management, 'Center-Opening' pruning involves:",
      "options": {
        "A": "Removing all lower skirt branches",
        "B": "Removing central upright limbs to allow solar radiation penetration into the interior canopy",
        "C": "Pruning off all flowering terminals",
        "D": "Root pruning at trunk base"
      },
      "correctOption": "B",
      "explanation": "Removing central upright limbs opens the canopy center, allowing sunlight penetration, improving fruit color, and preventing interior barrenness."
    },
    {
      "id": "HRT206-U1-MCQ50",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "difficulty": "Hard",
      "questionText": "What is the recommended pit size for establishing a mango orchard in marginal soils?",
      "options": {
        "A": "30 x 30 x 30 cm",
        "B": "1 x 1 x 1 meter (filled with 50 kg FYM, 1 kg single superphosphate, and topsoil)",
        "C": "2 x 2 x 2 meters",
        "D": "10 x 10 x 10 cm"
      },
      "correctOption": "B",
      "explanation": "Pits of 1m x 1m x 1m dug in summer, weathered, and refilled with topsoil, 50 kg well-rotten FYM, and chlorpyrifos dust provide optimal rooting."
    },
    {
      "id": "HRT206-U1-MCQ51",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Easy",
      "questionText": "Mango malformation manifests in which two distinct morphological forms?",
      "options": {
        "A": "Leaf spot and stem rot",
        "B": "Vegetative malformation (bunchy top) and Floral malformation (hypertrophied panicles)",
        "C": "Root knot and fruit crack",
        "D": "Spongy tissue and black tip"
      },
      "correctOption": "B",
      "explanation": "Mango malformation occurs as vegetative malformation in young seedlings and floral malformation in bearing panicles."
    },
    {
      "id": "HRT206-U1-MCQ52",
      "syllabusTopic": "Mango malformation causal agent",
      "difficulty": "Easy",
      "questionText": "Which fungal pathogen is primarily associated with mango malformation disease?",
      "options": {
        "A": "Colletotrichum gloeosporioides",
        "B": "Fusarium mangiferae (syn. Fusarium moniliforme var. subglutinans)",
        "C": "Oidium mangiferae",
        "D": "Phomopsis mangiferae"
      },
      "correctOption": "B",
      "explanation": "Fusarium mangiferae is the established fungal incitant of vegetative and floral malformation."
    },
    {
      "id": "HRT206-U1-MCQ53",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Easy",
      "questionText": "Spongy tissue in Alphonso mango is primarily caused by:",
      "options": {
        "A": "Viral infection",
        "B": "Convective heat absorption from bare orchard soil during fruit maturity triggering premature amylase breakdown of starch",
        "C": "Excessive boron toxicity",
        "D": "Frost injury"
      },
      "correctOption": "B",
      "explanation": "High soil temperatures (>40\u00b0C) radiate convective heat to hanging fruits, inactivating invertase and activating amylases that cause spongy pulp breakdown."
    },
    {
      "id": "HRT206-U1-MCQ54",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Easy",
      "questionText": "Black tip of mango is an abiotic disorder triggered by:",
      "options": {
        "A": "Excessive rainfall",
        "B": "Fumes from operational brick kilns (SO2, CO, fluoride) and Boron deficiency",
        "C": "Aphid honeydew",
        "D": "Sunburn"
      },
      "correctOption": "B",
      "explanation": "Brick kiln gases (sulfur dioxide and carbon monoxide) combined with boron deficiency cause necrotic black tip at the fruit apex."
    },
    {
      "id": "HRT206-U1-MCQ55",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Medium",
      "questionText": "Which chemical spray in the second fortnight of October is recommended to reduce the incidence of floral malformation?",
      "options": {
        "A": "NAA @ 200 ppm",
        "B": "2,4-D @ 100 ppm",
        "C": "Gibberellic acid @ 500 ppm",
        "D": "Bordeaux mixture 10%"
      },
      "correctOption": "A",
      "explanation": "A single spray of Naphthalene Acetic Acid (NAA) @ 200 ppm in October suppresses early malformed panicle emergence and increases hermaphrodite flower percentage."
    },
    {
      "id": "HRT206-U1-MCQ56",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Medium",
      "questionText": "Which vector is known to transmit and aggravate mango malformation by carrying fungal spores into vegetative and floral buds?",
      "options": {
        "A": "Mango hoppers (Amritodus atkinsoni)",
        "B": "Mango bud mite (Aceria mangiferae / Eriophyes mangiferae)",
        "C": "Mealybug",
        "D": "Fruit borer"
      },
      "correctOption": "B",
      "explanation": "The microscopic eriophyid mango bud mite (Aceria mangiferae) vectors Fusarium spores directly into growing bud tissues."
    },
    {
      "id": "HRT206-U1-MCQ57",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Medium",
      "questionText": "What effective soil management practice significantly reduces spongy tissue incidence in Alphonso mango orchards?",
      "options": {
        "A": "Bare clean cultivation in summer",
        "B": "Post-harvest mulching with straw or growing sod cover crops to reduce soil convective heat",
        "C": "Heavy flood irrigation during harvest",
        "D": "Applying unslaked lime"
      },
      "correctOption": "B",
      "explanation": "Covering the orchard floor with paddy straw mulch or leguminous green cover crops prevents soil overheating and mitigates spongy tissue."
    },
    {
      "id": "HRT206-U1-MCQ58",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Medium",
      "questionText": "To manage Black Tip disorder in mango orchards, spraying Borax is recommended at what concentration and stage?",
      "options": {
        "A": "10% at harvest",
        "B": "Borax @ 1% (or 10 g/L) at pea stage and marble stage",
        "C": "0.01% in winter",
        "D": "5% at full bloom"
      },
      "correctOption": "B",
      "explanation": "Two sprays of Borax @ 1% or Sodium carbonate (0.5%) at pea stage and marble stage effectively prevent black tip necrosis."
    },
    {
      "id": "HRT206-U1-MCQ59",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Hard",
      "questionText": "Which destructive insect pest of mango nymphs and adults sucks sap from tender panicles, excreting sticky honeydew that fosters sooty mold?",
      "options": {
        "A": "Mango stone weevil (Sternochetus mangiferae)",
        "B": "Mango hopper (Amritodus atkinsoni and Idioscopus clypealis)",
        "C": "Stem borer (Batocera rufomaculata)",
        "D": "Fruit fly"
      },
      "correctOption": "B",
      "explanation": "Mango hoppers suck sap from emerging flushes and panicles, devastating fruit set; honeydew promotes Capnodium sooty mold."
    },
    {
      "id": "HRT206-U1-MCQ60",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "difficulty": "Hard",
      "questionText": "The Mango Stone Weevil (Sternochetus mangiferae) is a major quarantine export hurdle because:",
      "options": {
        "A": "It causes fruits to drop at marble stage",
        "B": "Adults oviposit in young fruit and larvae bore directly into the seed stone, leaving no outward entry blemish",
        "C": "It destroys bark",
        "D": "It causes malformation"
      },
      "correctOption": "B",
      "explanation": "Stone weevil larvae tunnel into the seed endocarp without damaging the outer pulp, making external visual inspection impossible."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "HRT206-U1-SUB01",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India",
      "questionText": "Discuss the nutritional and socioeconomic significance of fruit crops in India. Why are fruits termed 'protective foods'?",
      "modelAnswer": "Fruit crops hold immense socioeconomic and nutritional importance in India's agricultural economy:\n\n1. Nutritional Role as 'Protective Foods':\nFruits are termed 'protective foods' because they provide high concentrations of essential micronutrients, vitamins, minerals, and antioxidants that protect the human body against metabolic disorders, chronic diseases, and nutritional deficiencies:\n- Vitamin A (Beta-carotene): Abundant in yellow fruits like mango (up to 4,800 IU/100g in Amrapali) and papaya, essential for retinal health and immune function.\n- Vitamin C (Ascorbic Acid): Found in high concentrations in aonla (600 mg/100g) and guava (200 mg/100g), acting as a powerful free-radical scavenger.\n- Minerals & Dietary Fiber: Bananas provide bioavailable potassium and magnesium; dates and custard apples supply iron; pectin and soluble fiber aid gastrointestinal health.\n\n2. Socioeconomic Significance:\n- High Income Generation: Generates 3 to 5 times higher net monetary returns per hectare compared to traditional cereal farming.\n- Employment Creation: Fruit orchards and post-harvest supply chains generate year-round rural employment (800\u20131,000 man-days/ha compared to 150 man-days in cereals).\n- Export Earnings: India exports fresh and processed fruits (Alphonso and Kesar mangoes, Thompson Seedless grapes, Cavendish bananas) worth over $1.5 billion annually, overseen by APEDA.",
      "outlinePoints": [
        "Definition of protective foods: supplying vitamins, minerals, and dietary antioxidants",
        "Key nutritional sources: Vitamin A (mango/papaya), Vitamin C (aonla/guava), Potassium (banana)",
        "High net financial returns per hectare compared to field crops",
        "Substantial rural employment generation across orchard management and post-harvest logistics",
        "Foreign exchange earnings through APEDA export channels"
      ]
    },
    {
      "id": "HRT206-U1-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "questionText": "Classify fruit crops based on climatic adaptation (Tropical, Subtropical, and Temperate) with two examples and temperature requirements of each.",
      "modelAnswer": "Fruit crops are classified into three major climatic categories based on their thermal requirements, cold tolerance, and seasonal growth cycles:\n\n1. Tropical Fruit Crops:\n- Climatic Requirements: Require warm, frost-free, humid or semi-humid conditions year-round. They are evergreen trees or giant herbs that are highly sensitive to frost. They require average temperatures between 24\u00b0C and 32\u00b0C and have zero chilling requirements.\n- Representative Examples: Mango (*Mangifera indica*), Banana (*Musa paradisiaca*), Papaya (*Carica papaya*), Pineapple (*Ananas comosus*), Sapota (*Manilkara zapota*).\n\n2. Subtropical Fruit Crops:\n- Climatic Requirements: Grown in regions experiencing distinct hot summers and cool winters. They tolerate mild, light winter frosts and lower temperatures, but do not require chilling temperatures to break bud dormancy. Optimal growth occurs between 15\u00b0C and 35\u00b0C.\n- Representative Examples: Citrus species (Sweet Orange, Mandarin), Grape (*Vitis vinifera*), Pomegranate (*Punica granatum*), Litchi (*Litchi chinensis*), Guava (*Psidium guajava*).\n\n3. Temperate Fruit Crops:\n- Climatic Requirements: Grown in high-altitude or high-latitude regions. They are deciduous trees that shed their leaves in winter and enter deep physiological dormancy. They have an obligate **chilling requirement** (requiring 800 to 1,500 hours below 7.2\u00b0C) during winter to break bud dormancy and trigger spring flowering.\n- Representative Examples: Apple (*Malus domestica*), Pear (*Pyrus communis*), Peach (*Prunus persica*), Plum (*Prunus domestica*), Walnut (*Juglans regia*).",
      "outlinePoints": [
        "Tropical fruits: evergreen, frost-sensitive, high year-round heat (mango, banana, papaya)",
        "Subtropical fruits: distinct seasons, mild frost tolerance, no chilling requirement (citrus, grape, pomegranate)",
        "Temperate fruits: deciduous, cold-hardy, obligate winter chilling <7\u00b0C (apple, pear, peach)",
        "Temperature thresholds and two representative crop examples for each class"
      ]
    },
    {
      "id": "HRT206-U1-SUB03",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)",
      "questionText": "Differentiate between Climacteric and Non-Climacteric fruit ripening with three examples of each.",
      "modelAnswer": "Fruit ripening physiology is categorized into two distinct post-harvest respiratory classes:\n\n1. Climacteric Fruits:\n- Ripening Physiology: Characterized by a dramatic, autonomous surge in cellular respiration rate (the 'climacteric peak') accompanied by a sharp burst of autocatalytic **ethylene production (System 2 ethylene)** during the onset of ripening.\n- Post-Harvest Behavior: These fruits can be harvested at physiological maturity (firm, unripe, full size) and will successfully ripen off the tree, developing optimal flavor, sugar content, aroma, and soft texture. Starch stored in the pulp hydrolyzes into sucrose, fructose, and glucose post-harvest.\n- Examples: Mango (*Mangifera indica*), Banana (*Musa* spp.), Papaya (*Carica papaya*), Guava (*Psidium guajava*), Apple (*Malus domestica*).\n\n2. Non-Climacteric Fruits:\n- Ripening Physiology: Exhibit a slow, steady decline in respiration rate throughout development and senescence, with no respiratory burst and only basal, non-autocatalytic **ethylene production (System 1 ethylene)**.\n- Post-Harvest Behavior: These fruits do not store significant starch reserves in their pulp. If harvested immature, they will never sweeten or improve in eating quality; they simply desiccate and rot. Consequently, they **must achieve full, edible ripeness on the tree** before harvest.\n- Examples: Citrus species (Sweet Orange, Mandarin, Lime), Grape (*Vitis vinifera*), Pomegranate (*Punica granatum*), Litchi (*Litchi chinensis*), Strawberry (*Fragaria ananassa*).",
      "outlinePoints": [
        "Respiratory climacteric peak and autocatalytic ethylene production in climacteric fruits",
        "Ability of climacteric fruits to convert starch to sugar off the tree post-harvest",
        "Gradual respiratory decline and lack of ethylene burst in non-climacteric fruits",
        "Necessity of tree-ripening in non-climacteric crops",
        "Three crop examples for each category"
      ]
    },
    {
      "id": "HRT206-U1-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "questionText": "Describe the unique horticultural traits and parental origins of the mango hybrids Amrapali and Mallika.",
      "modelAnswer": "Amrapali and Mallika represent two landmark mango hybrids developed at the Indian Agricultural Research Institute (IARI), New Delhi, by Dr. R. N. Singh and colleagues (1971) to overcome the traditional alternate bearing and excessive vegetative vigor of North Indian mangoes:\n\n1. Amrapali:\n- Parental Cross: **Dashehari (female) x Neelum (male)**.\n- Growth Habit: Distinctly dwarf tree stature (possessing very short internodes), precocious bearing, and strictly regular-bearing habit inherited from Neelum.\n- Fruit & Nutritional Quality: Medium-sized fruit (150\u2013200g) with an apricot-yellow peel, deep orange-red pulp, and exceptionally high **beta-carotene (Vitamin A) content (~4,800 IU/100g)**\u2014the highest among all Indian commercial cultivars.\n- High-Density Planting (HDP): Amrapali revolutionized mango orcharding because its dwarf canopy permits planting at **2.5 x 2.5 m in a square system (1,600 trees/ha)**, yielding 12\u201316 t/ha compared to 7\u20138 t/ha in traditional orchards.\n\n2. Mallika:\n- Parental Cross: **Neelum (female) x Dashehari (male)** (Reciprocal cross of Amrapali).\n- Growth Habit: Semi-vigorous tree with spreading canopy, highly regular-bearing, and precocious.\n- Fruit & Processing Quality: Produces large, oblong, attractive fruits (300\u2013400g) with canary-yellow peel, firm fiberless pulp, rich sweet taste, and remarkably high **Total Soluble Solids (TSS: 24\u201325\u00b0 Brix)**.\n- Post-Harvest Quality: Outstanding keeping quality and transportability, making it an excellent dual-purpose variety for fresh table consumption and industrial canning/pulp processing.",
      "outlinePoints": [
        "Parental lineage: Amrapali (Dashehari x Neelum) vs Mallika (Neelum x Dashehari)",
        "Amrapali: genetic dwarfness, regular bearing, highest beta-carotene content",
        "Amrapali suitability for HDP at 2.5 x 2.5 m (1,600 trees/ha)",
        "Mallika: semi-vigorous, large fruit size, exceptional TSS (24\u00b0 Brix), and long shelf life"
      ]
    },
    {
      "id": "HRT206-U1-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "questionText": "Explain the procedure of Epicotyl (Stone) Grafting in mango and highlight its advantages over traditional veneer grafting.",
      "modelAnswer": "Epicotyl (Stone) Grafting is an efficient, rapid vegetative propagation technique developed in Konkan, Maharashtra, that utilizes very young germinating seedlings:\n\n1. Step-by-Step Procedure:\n- Raising Rootstocks: Fresh mango stones (seeds) are sown in raised nursery beds during June-July. Within 10 to 15 days, seeds germinate into tender seedlings showing a characteristic copper-purple stem color.\n- Rootstock Preparation: The 10\u201315 day old seedling (epicotyl) is severed horizontally 5\u20136 cm above the stone. A vertical downward cleft (split) of 2\u20133 cm length is made down the center of the stem.\n- Scion Preparation: Mature, terminal shoots (3\u20134 months old) with plump, swollen terminal buds are selected from elite mother trees and defoliated 7 days prior. A 2.5\u20133 cm wedge shape is cut at the base of the scion.\n- Insertion and Tying: The wedge scion is fitted securely into the cleft of the epicotyl, aligning the vascular cambium on at least one side. The graft union is bound firmly with a 100-gauge polyethylene strip.\n- Potting: Grafted plants are immediately potted into polythene bags filled with potting mixture and kept in shade.\n\n2. Key Advantages over Veneer Grafting:\n- **Speed & Time Saving:** Saves almost an entire year in the nursery. Epicotyl grafting uses 10-day-old seedlings, whereas veneer grafting requires 9\u201312 month old rootstocks.\n- **High Success Rate:** Young epicotyl tissue possesses active meristematic cells, ensuring rapid callus formation and 80\u201390% graft success.\n- **Compact & Easy Handling:** Young grafted plants in polythene bags require minimal nursery space and are lightweight for long-distance transport.",
      "outlinePoints": [
        "Use of 10-15 day old copper-colored germinating seedlings as rootstocks",
        "Stepwise cleft grafting protocol and cambial alignment",
        "Pre-defoliation of mature scions with swollen terminal buds",
        "Comparison with veneer grafting: saving 1 year of nursery time, higher graft success, and compact handling"
      ]
    },
    {
      "id": "HRT206-U1-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "questionText": "Differentiate between Monoembryonic and Polyembryonic mango varieties and explain the breeding utility of polyembryonic rootstocks.",
      "modelAnswer": "Mango varieties exhibit two distinct seed embryony types that have profound implications for rootstock selection and genetic uniformity:\n\n1. Monoembryonic Mangoes:\n- Definition: Seeds contain strictly **one sexual zygotic embryo** resulting from normal cross-fertilization between egg cell and pollen grain.\n- Geographic Distribution: Typical of North, Central, and Eastern Indian cultivars (*Dashehari, Langra, Alphonso, Chausa, Amrapali*).\n- Nursery Characteristics: When planted, each seed produces a single seedling that is genetically variable and heterogeneous due to cross-pollination. Therefore, monoembryonic seedlings cannot produce uniform clonal rootstocks.\n\n2. Polyembryonic Mangoes:\n- Definition: Seeds contain **multiple embryos**\u2014typically one sexual zygotic embryo and several (2 to 8) asexual adventitious embryos originating directly from maternal **nucellar cells** of the ovule.\n- Geographic Distribution: Common in humid, tropical coastal belts of South India (Kerala, Goa), Southeast Asia, and Florida.\n- Horticultural Significance: Nucellar embryos are 100% clonal and true-to-type to the mother tree. When sown, polyembryonic seeds yield multiple vigorous, uniform seedlings that can be separated and used as standardized clonal rootstocks.\n\nBreeding and Agronomic Utility of Polyembryonic Rootstocks:\n- **Rootstock Uniformity:** Eliminates the rootstock-induced variability in tree vigor and yield that plagues traditional orchards.\n- **Dwarfing Potential:** The polyembryonic cultivar **Vellaikolumban** is celebrated for inducing significant dwarfing stature when used as a rootstock, facilitating high-density planting.\n- **Abiotic Stress Tolerance:** Polyembryonic cultivars like **Kurukkan** impart outstanding tolerance to soil salinity, alkalinity, and high water-table conditions, enabling mango cultivation in coastal sodic belts.",
      "outlinePoints": [
        "Monoembryonic: single zygotic cross-fertilized embryo with genetic segregation (North Indian cultivars)",
        "Polyembryonic: multiple asexual nucellar clonal embryos breeding true-to-type (South Indian cultivars)",
        "Nursery utility: providing uniform, non-variable clonal rootstock stands",
        "Agronomic value: dwarfing rootstock (Vellaikolumban) and salt tolerance (Kurukkan)"
      ]
    },
    {
      "id": "HRT206-U1-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "questionText": "Explain the mode of action, application protocol, and benefits of Paclobutrazol (Cultar) in commercial mango orchards.",
      "modelAnswer": "Paclobutrazol (marketed as Cultar, 23% SC) is a synthetic triazole plant growth regulator that plays a pivotal role in modern commercial mango production:\n\n1. Biochemical Mode of Action:\nPaclobutrazol is a potent **anti-gibberellin agent**. It specifically inhibits the enzyme *ent*-kaurene oxidase in the terpenoid biosynthetic pathway, blocking the synthesis of active endogenous gibberellic acids (GAs).\n- High endogenous GA levels promote vigorous vegetative shoot flushing, which inhibits flower bud differentiation.\n- By suppressing gibberellin biosynthesis, Paclobutrazol shifts the plant's metabolic balance toward **accumulating carbohydrates and starch**, elevating the Carbon:Nitrogen (C:N) ratio in terminal shoots and inducing profuse, synchronized floral bud initiation.\n\n2. Application Protocol:\n- Timing: Applied as a soil collar drench in **September to October** (2 to 3 months prior to anticipated panicle emergence).\n- Dosage: Calculated based on tree canopy spread: **0.75 to 1.25 ml Cultar (or 3\u20135 g active ingredient) per meter of canopy diameter**.\n- Method: Clear the soil beneath the canopy skirt. Dissolve the required dose in 10\u201315 liters of water. Dig a shallow circular furrow (10\u201315 cm deep) around the trunk at a radius of 1.0\u20131.5 m (over the active feeder root zone), pour the solution uniformly, and cover with soil. Maintain soil moisture for 2\u20133 weeks.\n\n3. Commercial Agronomic Benefits:\n- Overcomes Biennial/Alternate Bearing: Induces regular flowering every year in notoriously alternate-bearing cultivars like Alphonso and Dashehari.\n- Promotes Early and Synchronized Flowering: Advances bloom by 20\u201330 days, enabling early harvest when market prices are highest.\n- Dwarf Canopy Control: Restricts vegetative internode elongation, making it indispensable for maintaining tree architecture in High-Density Planting (HDP) orchards.",
      "outlinePoints": [
        "Biochemical mode of action: inhibition of ent-kaurene oxidase and gibberellin synthesis",
        "Shifting metabolic balance to elevate C:N ratio and trigger floral bud differentiation",
        "Soil drench protocol in September-October (0.75-1.25 ml/m canopy diameter)",
        "Triple benefits: breaking alternate bearing, advancing harvest date, and restricting canopy vigor for HDP"
      ]
    },
    {
      "id": "HRT206-U1-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "questionText": "Describe the symptoms, causes, and integrated management of Black Tip disorder in mango.",
      "modelAnswer": "Black Tip (also known as Chimney Disease) is a serious abiotic physiological disorder of mango occurring predominantly in the peri-urban belts of Northern India (Uttar Pradesh, Bihar, Punjab):\n\n1. Visual Symptoms:\n- The disorder manifests on developing fruits when they reach the marble to half-grown stage.\n- The distal (stigmatic) end of the fruit initially develops an etiology of yellowing, followed by dark brown necrotic spotting.\n- The necrosis rapidly spreads upward across the lower third of the fruit; the tip turns jet black, flattened, and hard, with gummy exudations.\n- Affected fruits cease growth, ripen prematurely, rot internally, and drop, becoming completely unmarketable.\n\n2. Causal Etiology:\n- Black tip is caused by the toxic air emissions from operational **brick kilns** situated within the vicinity of mango orchards. The toxic flue gases contain **Sulfur dioxide (SO2), Carbon monoxide (CO), Fluorides, and Ethylene**.\n- The disorder is severely aggravated by **Boron deficiency** in the orchard soil, which weakens cell wall elasticity and renders the fruit apex hyper-susceptible to toxic atmospheric gases.\n\n3. Integrated Management Practices:\n- Legislative Isolation: State horticultural departments enforce zoning laws mandating that coal-fired brick kilns must be located at a minimum distance of **3 to 5 kilometers** away from commercial mango orchards, or use cleaner zigzag chimney technologies.\n- Foliar Borax Sprays: Spray **Borax @ 1% (10 g/L)** or Solubor (0.2%) at three critical fruit developmental stages: (1) before flowering, (2) pea stage, and (3) marble stage.\n- Chemical Neutralization: Foliar sprays of **Caustic Soda / Sodium carbonate (0.5%)** or lime (1%) at pea and marble stages neutralize acidic sulfur deposits on the fruit cuticle.",
      "outlinePoints": [
        "Distal end necrosis, blackening, hardening, and premature fruit rotting symptoms",
        "Dual etiology: brick kiln toxic fumes (SO2, CO, fluoride) coupled with Boron deficiency",
        "Legislative zoning requiring brick kilns >3-5 km away from orchards",
        "Foliar Borax (1%) sprays at pea and marble stages",
        "Caustic soda (0.5%) sprays to neutralize atmospheric sulfur deposition"
      ]
    },
    {
      "id": "HRT206-U1-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "questionText": "Provide an in-depth analysis of Mango Malformation. Compare Vegetative and Floral malformation, discuss the complex etiology (Fusarium mangiferae and Aceria mangiferae), and detail a complete integrated disease management schedule.",
      "modelAnswer": "Mango Malformation is the most destructive and widespread developmental disorder of *Mangifera indica*, severely threatening mango production across North-West India, Egypt, and the Americas.\n\n1. Morphological Symptoms and Classification:\nA. Vegetative Malformation (Bunchy Top):\n- Primarily affects young seedlings in nursery beds and growing shoot flushes of orchard trees.\n- Apical dominance is lost; shoots develop severely shortened internodes, producing crowded, stunted, compact clusters of tiny, thickened, strap-like leaves.\n- The affected shoot resembles a dense, vegetative rosette or broom ('bunchy top'), arresting tree growth.\n\nB. Floral Malformation:\n- Affects developing inflorescences (panicles), transforming them into dense, hypertrophied, compact, greenish masses.\n- The main rachis and lateral axes of the panicle thicken dramatically and branch excessively.\n- Floral Alteration: Instead of the normal 1:1 or 2:1 ratio of male to hermaphrodite flowers, malformed panicles bear an overwhelming excess of **male flowers (>95%)** that are enlarged, sterile, and produce aborted pollen.\n- The thickened panicles remain green and persist on the tree like compact heads long after normal panicles have shed their flowers, setting zero commercial fruit.\n\n2. Complex Etiological Architecture:\nFor decades, malformation was debated as a physiological, nutritional, or viral disorder. Modern molecular plant pathology has established that mango malformation is an infectious **fungal-acarological disease complex**:\n- **Primary Incitant:** The filamentous ascomycete fungus **Fusarium mangiferae** (formerly classified within the *Fusarium moniliforme* species complex). The fungus colonizes the vascular bundles of apical meristems, synthesizing abnormal levels of stress ethylene and malformin phytotoxins that disrupt endogenous auxin/cytokinin ratios.\n- **The Vector Role of Mango Bud Mite (Aceria mangiferae / Eriophyes mangiferae):** The microscopic eriophyid mite inhabits the protective bracts of vegetative and floral buds. The mite's feeding punctures wound the tender tissue and physically introduce *Fusarium mangiferae* conidia directly into meristematic cells, dramatically magnifying disease incidence.\n\n3. Integrated Disease Management Schedule:\nEffective control requires a synchronized, multi-pronged approach:\n\nA. Mechanical Sanitation:\n- Prune off all malformed vegetative shoots and floral panicles along with **15\u201320 cm of healthy wood below the point of attachment**.\n- Collect and immediately burn all pruned material outside the orchard. Sterilize pruning shears in 2% sodium hypochlorite to prevent mechanical transmission.\n\nB. Chemical and Acaricidal Sprays:\n- Spray systemic miticides (Dicofol @ 0.05% or Wettable Sulfur @ 0.2% or Dimethoate @ 0.04%) during autumn (October) to eradicate populations of *Aceria mangiferae* bud mites before they enter overwintering floral buds.\n- Spray systemic fungicides (Carbendazim @ 0.1% or Thiophanate-methyl @ 0.1%) during bud swell in January to suppress *Fusarium* spore germination.\n\nC. Hormonal Regulation:\n- Spray **Naphthalene Acetic Acid (NAA) @ 200 ppm in the second fortnight of October**.\n- NAA application shifts the endogenous hormonal balance, delays early panicle emergence into warmer spring months, and significantly reduces the percentage of malformed panicles while boosting the proportion of fertile hermaphrodite flowers.\n\nD. Resistant Germplasm:\n- Plant less susceptible commercial varieties: *Bhadauran, Amrapali, Bahaduran, Elaichi*, and *Alphonso* (which is relatively tolerant compared to highly susceptible Bombay Green and Dashehari).",
      "outlinePoints": [
        "Vegetative malformation: bunchy-top symptoms, internode shortening, seedling stunting",
        "Floral malformation: hypertrophied panicles, excess male flowers, complete lack of fruit set",
        "Etiology: Fusarium mangiferae fungal pathogen and Aceria mangiferae mite vector interaction",
        "Mechanical sanitation: pruning 15-20 cm healthy wood and burning infected material",
        "Acaricidal sprays targeting bud mites in October",
        "NAA 200 ppm foliar spray in late October to restore hormonal balance and reduce malformation",
        "Use of tolerant/resistant cultivars"
      ]
    },
    {
      "id": "HRT206-U1-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "questionText": "Discuss Spongy Tissue in Alphonso mango. Explain its physiological etiology, enzymatic breakdown mechanisms, environmental triggers, and comprehensive mitigation strategies.",
      "modelAnswer": "Spongy Tissue is the single greatest post-harvest physiological malady afflicting India's premier export mango, **Alphonso (Hapus)**, causing up to 30\u201340% loss of export-grade fruit in the Konkan belt of Maharashtra.\n\n1. Description and Internal Symptoms:\n- Spongy tissue is an insidious internal disorder that cannot be detected by external visual inspection. The outward skin color, gloss, shape, and firmness appear completely normal.\n- When the ripe fruit is sliced open, a localized patch of the mesocarp (pulp) near the stone appears pale yellowish, spongy, dry, corky, and fibrous.\n- The affected pulp develops gas-filled air pockets, emits a foul, fermented, sour odor, and has a bitter, unpalatable acidic taste (pH drops to ~3.0 compared to normal pulp pH 4.5), completely ruining market quality.\n\n2. Biochemical and Enzymatic Etiology:\nExtensive biochemical investigations (Dr. Y. T. N. Reddy and Dr. R. T. Gunjate) revealed that spongy tissue is triggered by an abnormal, premature enzymatic cascade:\n- **Premature Seed Germination Activity:** As the fruit approaches full maturity on the tree, the physiological trigger for seed germination is initiated. The embryo releases signals that accelerate metabolic breakdown of adjoining mesocarp tissue.\n- **Inactivation of Invertase:** In spongy tissue, the acid invertase enzyme is inactivated, halting the normal conversion of sucrose into sweet hexose sugars (glucose and fructose).\n- **Hyperactivation of Amylases and Cellulases:** Starch-degrading alpha- and beta-amylases are prematurely hyper-activated. Starch is rapidly degraded into organic acids (malic, citric, and oxalic acids) rather than sugars, causing the sharp drop in pH. Cellulases and pectinases dissolve middle lamellae, creating air cavities and a corky, spongy texture.\n\n3. Environmental Drivers \u2014 Convective Heat Hypothesis:\n- The Konkan belt experiences scorching summer temperatures (>38\u201342\u00b0C) during April-May when Alphonso matures.\n- The bare, exposed laterite soil of the orchard floor absorbs intense solar radiation, heating up to 55\u201360\u00b0C.\n- This extreme heat radiates upward as **convective heat waves**. Hanging fruits, especially those on the lower and southwest canopy, absorb convective heat, raising internal pulp temperatures and triggering the destructive enzymatic breakdown.\n\n4. Comprehensive Mitigation and Management Strategies:\nA. Optimized Harvest Maturity:\n- Never allow Alphonso fruits to ripen on the tree. Harvest at **85% maturity (specific gravity between 1.01 and 1.02)**.\n- Fruits with specific gravity >1.02 (fully tree-ripe) have 5-fold higher spongy tissue incidence.\n\nB. Orchard Floor Temperature Management:\n- **Mulching:** Cover the entire orchard floor beneath the tree canopy with an 8\u201310 cm thick layer of paddy straw or dry grass mulch in March. Mulching reduces soil temperature by 10\u201312\u00b0C, completely arresting convective heat radiation.\n- **Cover Cropping:** Grow dense leguminous green cover crops (e.g., *Stylosanthes*, cowpea, sunnhemp) on the orchard floor.\n\nC. Post-Harvest Cooling:\n- Avoid harvesting during hot afternoon hours; harvest strictly between 6:00 AM and 10:00 AM.\n- Subject harvested fruits to immediate **Hydrocooling** (immersion in cold water at 12\u201315\u00b0C) or pre-cooling to rapidly remove field heat.\n\nD. Varietal Substitution:\n- Plant spongy-tissue-resistant hybrids developed using Alphonso as a parent: **Ratna (Neelum x Alphonso)** and **Sindhu (Ratna x Alphonso)**, which are 100% free from spongy tissue.",
      "outlinePoints": [
        "Description of internal corky, pale yellow, sour, gas-filled pulp symptoms in Alphonso",
        "Biochemical breakdown: inactivation of invertase and hyper-activation of amylases and cellulases",
        "Drop in pH and accumulation of organic acids creating sour off-flavor",
        "Convective heat hypothesis from sun-baked orchard laterite soils",
        "Harvest maturity regulation (85% maturity, specific gravity 1.01-1.02)",
        "Paddy straw mulching and cover cropping to suppress convective heat radiation",
        "Pre-cooling protocols and planting resistant hybrids (Ratna, Sindhu)"
      ]
    },
    {
      "id": "HRT206-U1-SUB11",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "questionText": "Compare traditional mango orcharding with High-Density Planting (HDP) and Meadow Orcharding. Discuss spacing, population density, yield profiles, pruning systems, and canopy architecture.",
      "modelAnswer": "The global fruit industry has shifted decisively from traditional wide-spaced extensive orchards to High-Density Planting (HDP) and Meadow Orcharding to maximize land-use efficiency, precocity, and early financial returns.\n\n1. Comparative Framework of Mango Planting Systems:\n\nA. Traditional Planting System:\n- Spacing: **10 x 10 m** (or 12 x 12 m in vigorous cultivars like Langra).\n- Population Density: **100 trees per hectare**.\n- Canopy Architecture: Large, dome-shaped trees reaching 8\u201312 meters in height.\n- Gestation & Yield Profile: Long gestation period (takes 8\u201310 years to commence commercial bearing). Peak yield reaches 8\u201310 t/ha only after 15\u201320 years.\n- Drawbacks: Inefficient land use in early years; spraying, pest control, and harvesting require hazardous ladder climbing; high fruit damage upon harvesting.\n\nB. High-Density Planting (HDP):\n- Spacing: **5 x 5 m** (400 trees/ha) for semi-vigorous cultivars, or **2.5 x 2.5 m** (1,600 trees/ha) for dwarf cultivars like **Amrapali**.\n- Population Density: **400 to 1,600 trees per hectare** (4 to 16 times higher than traditional).\n- Gestation & Yield Profile: Highly precocious. Commercial bearing commences by Year 3. Yields reach **15\u201320 t/ha by Year 5**, achieving full economic yield a decade ahead of traditional orchards.\n- Labor Efficiency: All orchard operations (pruning, spraying, bagging, harvesting) can be conducted from the ground without ladders.\n\nC. Ultra-High Density (Meadow Orcharding):\n- Spacing: **3 x 1 m or 2 x 1 m** (3,333 to 5,000 trees/ha), adapted from guava to dwarf mangoes under drip fertigation.\n- Management: Requires severe annual mechanised or manual post-harvest topping and hedging to maintain trees as small productive bushes (<2 m height).\n\n2. Canopy Architecture and Pruning Systems in HDP:\nHigh tree density inevitably causes canopy crowding and shading if left unmanaged. Strict annual pruning is non-negotiable:\n- **Center-Opening Pruning:** Removal of the central dominant upright shoot during Year 2 to create an **Open-Center / Modified Central Leader** architecture. This allows uniform sunlight penetration into the interior canopy, promoting floral bud differentiation.\n- **Post-Harvest Pruning:** Immediately after fruit harvest (July), heading back of current-season fruited shoots by 10\u201315 cm and thinning out of criss-crossing, dead, and diseased twigs. This triggers an early synchronized vegetative flush that matures by October to form next year's fruiting wood.\n- **Height Maintenance:** Tree height is strictly capped at **2.0 to 2.5 meters** (matching 75\u201380% of inter-row spacing) to avoid shading adjacent rows.\n\n3. Nutrient and Water Integration (Drip Fertigation):\nHDP orchards cannot be managed with broadcast fertilizers or flood irrigation:\n- Drip irrigation with 2 emitters per tree delivers water directly to the concentrated root zone, saving 40\u201350% water.\n- Water-soluble fertilizers (NPK 19:19:19, Urea, Potassium nitrate) are injected via venturi injectors according to crop phonological stages: high N after pruning, balanced NPK during flush maturation, and high Potassium during fruit enlargement.",
      "outlinePoints": [
        "Structural contrast: traditional 10x10 m (100 trees/ha) vs HDP 2.5x2.5 m (1,600 trees/ha) vs Meadow orcharding",
        "Yield dynamics: early precocity (Year 3) and 2 to 3-fold higher yield in HDP",
        "Canopy management: center-opening pruning and annual post-harvest heading back",
        "Maintaining height below 2.5 m to prevent canopy overlap and shading",
        "Drip fertigation schedules and precision water management in high-density orchards"
      ]
    },
    {
      "id": "HRT206-U1-SUB12",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "questionText": "Discuss the phenomenon of Biennial (Alternate) Bearing in mango. Explain the nutritional, hormonal, and genetic theories behind it, and formulate cultural and chemical practices to establish regular bearing.",
      "modelAnswer": "Biennial bearing (also termed Alternate or Irregular bearing) is a notorious physiological trait in mango where a heavy crop year ('On-Year') is invariably followed by a lean or completely barren year ('Off-Year'). It plagues most premier North and West Indian cultivars (*Alphonso, Dashehari, Langra, Chausa*), causing extreme market price volatility.\n\n1. Theories Explaining Alternate Bearing:\n\nA. The Nutritional Theory (Carbohydrate-Nitrogen Balance):\n- Proposed by Kraus and Kraybill (1918) and applied to mango by Sen (1943).\n- In an 'On-Year', the tree produces a massive crop of hundreds of fruits. Fruit growth and seed maturation consume virtually all photosynthates, nitrogen, and stored carbohydrates (starch).\n- Consequently, the tree is exhausted and fails to produce autumn vegetative flushes.\n- Shoots formed late in the season lack sufficient reserves, having a very low **Carbon:Nitrogen (C:N) ratio**. In the absence of mature, carbohydrate-rich shoots, flower bud induction fails in December-January, resulting in an 'Off-Year'.\n\nB. The Hormonal Theory (Gibberellin Inhibition):\n- Developing mango seeds produce massive quantities of **endogenous gibberellins (GAs)** during the 'On-Year'.\n- These gibberellins are transported backward from fruits into the adjacent vegetative shoots, where they act as potent physiological repressors of floral bud initiation.\n- High gibberellin levels keep buds vegetative, forcing vegetative flushes instead of panicles.\n\nC. Genetic Control:\n- South Indian cultivars (*Neelum, Totapuri, Bangalora, Banganapalli*) possess genetic regular-bearing habits because their shoots can flower and flush simultaneously, whereas North Indian cultivars strictly require shoot maturation for 8\u201310 months before flowering.\n\n2. Management Strategies to Establish Regular Bearing:\n\nA. Chemical Induction with Paclobutrazol (Cultar):\n- Application of **Paclobutrazol @ 3 to 5 g a.i./tree (or 1 ml/m canopy spread)** as a soil collar drench in September\u2013October.\n- Paclobutrazol directly inhibits gibberellin biosynthesis, counteracting the seed hormonal inhibitory signal, elevating the C:N ratio, and forcing profuse, regular flowering even following a heavy on-year.\n\nB. Crop Load Regulation (Thinning / Deblossoming):\n- In an expected 'On-Year', chemically deblossom 50% of the panicles by spraying **NAA @ 200 ppm or 2,4-D @ 50 ppm** at panicle emergence, or manually remove panicles from half the tree limbs.\n- Conserves carbohydrate reserves, allowing the non-flowering limbs to generate vegetative flushes that will fruit in the subsequent 'Off-Year'.\n\nC. Post-Harvest Nutrition and Pruning:\n- Apply heavy doses of fast-acting nitrogen and phosphorus fertilizers (e.g., 1 kg Urea + 50 kg FYM) along with irrigation **immediately after harvest in July** to stimulate an immediate early-monsoon flush.\n- Flushes formed in July mature fully by November, becoming competent to differentiate floral buds.\n\nD. Genetic Deployment:\n- Plant modern regular-bearing hybrids bred from Neelum: **Amrapali, Mallika, Ratna, Sindhu**, which are genetically immune to alternate bearing.",
      "outlinePoints": [
        "Definition of On-Year vs Off-Year dynamics in alternate bearing",
        "Nutritional theory: carbohydrate exhaustion and depressed C:N ratio",
        "Hormonal theory: seed-derived gibberellins suppressing floral differentiation",
        "Genetic differences between North Indian alternate vs South Indian regular cultivars",
        "Paclobutrazol soil drenching in September-October as a definitive chemical solution",
        "Crop load management via partial deblossoming in on-years",
        "Immediate post-harvest fertilization and adoption of regular hybrids (Amrapali, Ratna)"
      ]
    },
    {
      "id": "HRT206-U1-SUB13",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "questionText": "Explain the step-by-step methodology for establishing a commercial mango orchard. Cover site selection, soil requirements, pit preparation, planting systems, and windbreak establishment.",
      "modelAnswer": "Establishing a commercial mango orchard is a long-term capital investment that requires meticulous planning and scientific execution to ensure productivity for 40\u201350 years.\n\n1. Site Selection and Edaphic/Climatic Requirements:\n- Climate: Tropical or subtropical climate with distinct dry winters and hot summers. Frost-free zones are essential; mature trees survive light frost, but young seedlings perish at <0\u00b0C.\n- Rainfall: Optimal annual rainfall of 750\u20131,500 mm. Crucially, dry weather is mandatory during flowering (January\u2013March) to avoid blossom blights and facilitate pollinator activity.\n- Soil: Deep, well-drained, fertile alluvial or red loamy soil with a depth of at least 2 to 2.5 meters. Deep taproots cannot penetrate hard pans or rocky substrata.\n- Water Table & pH: Water table must remain below 2.5\u20133.0 meters year-round. Optimal soil pH is **6.0 to 7.5**. Sodic soils (pH >8.5) cause severe micronutrient chlorosis and root rot.\n\n2. Orchard Layout and Planting Systems:\n- **Square System:** Most popular and practical layout. Trees are planted at equal distances in both directions (e.g., 10 x 10 m for traditional; 5 x 5 m or 2.5 x 2.5 m for HDP), permitting cross-cultivation in two directions.\n- **Hexagonal System:** Accommodates 15% more trees per hectare; suitable for high-value fertile land where intercropping is minimal.\n- **Contour System:** Mandatory for hilly terrain and slopes (>10%) to prevent soil erosion.\n\n3. Pit Digging, Solarization, and Filling:\n- Pits of size **1 x 1 x 1 meter** are dug during the peak summer months (April\u2013May) using manual labor or tractor-mounted post-hole diggers.\n- Pits are left exposed to the blazing sun for 3\u20134 weeks for solarization to eradicate soil-borne pathogens, grubs, and nematodes.\n- Refilling (June, prior to monsoon): Mix topsoil with:\n  * 40\u201350 kg well-decomposed Farmyard Manure (FYM)\n  * 1.0 kg Single Super Phosphate (SSP)\n  * 100 g Chlorpyrifos (1.5% dust) or Neem cake (2 kg) to prevent termite and white grub attacks.\n- Refill the pit 10\u201315 cm above ground level to allow for settling after initial rains.\n\n4. Planting Protocol:\n- Timing: Early monsoon (July\u2013August) in low-rainfall belts, or end of monsoon (September\u2013October) in heavy-rainfall regions.\n- Planting: Cut open the polythene bag of the grafted plant without disturbing the root ball. Place the plant in the center of the pit such that the graft union remains **15 cm above ground level** (to prevent scion rooting).\n- Press soil firmly, stake the plant immediately with bamboo poles, and apply immediate watering.\n\n5. Establishment of Windbreaks:\nMango trees are vulnerable to branch breakage, fruit drop, and desiccation caused by strong summer winds (Loo) and storms.\n- Plant dense, multi-row, fast-growing evergreen windbreak trees along the Southern and Western orchard boundaries.\n- Ideal Windbreak Species: *Casuarina equisetifolia, Eucalyptus, Polyalthia longifolia* (Ashok), *Syzygium cumini* (Jamun), and *Dalbergia sissoo* (Shisham).\n- Plant windbreak rows 1\u20132 years prior to orchard planting at 2 x 2 m spacing.",
      "outlinePoints": [
        "Site and soil requirements: deep loam (>2 m), pH 6.0-7.5, water table <2.5 m, dry flowering season",
        "Planting systems: Square system (universal), Hexagonal (15% more trees), Contour (slopes)",
        "Pit preparation: 1x1x1 m excavation, summer solarization, refilling with FYM, SSP, and chlorpyrifos",
        "Planting technique: maintaining graft union 15 cm above ground, staking, and immediate watering",
        "Windbreak architecture: multi-row barrier trees on South-West borders (Casuarina, Jamun, Shisham)"
      ]
    },
    {
      "id": "HRT206-U1-SUB14",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "questionText": "Discuss the major insect pests of mango in India: (a) Mango Hopper, (b) Mealybug, (c) Fruit Fly, and (d) Stone Weevil. Detail their biology, damage symptoms, and integrated pest management (IPM) practices.",
      "modelAnswer": "Mango orchards host several devastating insect pests capable of causing complete crop failure and triggering strict international phytosanitary trade embargoes.\n\n1. Mango Hopper (*Amritodus atkinsoni* and *Idioscopus clypealis*, Family Cicadellidae):\n- Biology: Tiny, wedge-shaped greyish-brown insects that breed profusely on emerging flushes and flowering panicles during spring.\n- Damage: Both nymphs and adults pierce tender tissues and suck cell sap from buds, flowers, and fruitlets, causing heavy blossom drop ('hopper burn'). They excrete copious sugary honeydew, upon which the black fungus *Capnodium mangiferae* develops (**Sooty Mold**), coating leaves and panicles in black crust and shutting down photosynthesis.\n- IPM: Prune crowded, shaded interior branches to allow solar penetration. Spray **Thiamethoxam 25 WG @ 0.3 g/L** or **Imidacloprid 17.8 SL @ 0.3 ml/L** at panicle emergence and fruitlet stage. Conserve predatory chrysopids.\n\n2. Mango Mealybug (*Drosicha mangiferae*, Family Pseudococcidae):\n- Biology: Female adults are wingless, flattened, covered in white mealy wax. They oviposit egg masses (hundreds of pink eggs) in soil cracks beneath the canopy in April-May. Eggs diapause in soil throughout summer and hatch in December-January. Nymphs crawl up the tree trunk to feed on panicles.\n- Damage: Sucking sap causes flower drying and fruit drop.\n- IPM:\n  * Summer deep ploughing around tree basins to expose egg sacs to sunlight and predatory birds.\n  * **Alkathene Trunk Banding:** In mid-December (before hatching), wrap a 30-cm wide slippery polythene sheet (alkathene band) around the trunk 1 meter above ground, applying grease/sticky paste at the lower edge to physically trap and block ascending nymphs.\n  * Spray Chlorpyrifos dust or entomopathogenic fungus *Beauveria bassiana* around the tree base.\n\n3. Oriental Fruit Fly (*Bactrocera dorsalis*, Family Tephritidae):\n- Biology: Adult female fly pierces the skin of ripening fruits using its sharp ovipositor to deposit batches of eggs under the epidermis.\n- Damage: Larvae (maggots) hatch within 24\u201348 hours and feed voraciously on the sweet pulp, causing internal liquefaction, secondary bacterial rotting, and premature fruit drop. Major export barrier!\n- IPM:\n  * Field Sanitation: Collect and deeply bury all dropped, infested fruits in 2-foot deep pits with lime.\n  * **Methyl Eugenol Pheromone Traps:** Install 10\u201312 parapheromone traps/ha charged with Methyl eugenol + Malathion to mass-trap male flies.\n  * **Bait Spraying:** Spot-spray protein hydrolysate or jaggery (100 g) + Malathion 50 EC (10 ml) in 10 L water.\n  * Post-Harvest: Mandatory **Hot Water Immersion (48\u00b0C for 60 min)** or **Vapour Heat Treatment (VHT at 47.5\u00b0C for 20 min)** for export consignments.\n\n4. Mango Stone Weevil (*Sternochetus mangiferae*, Family Curculionidae):\n- Biology: Adult weevil lays eggs on the rind of young marble-sized fruits.\n- Damage: The neonate grub bores straight through the pulp into the developing seed stone, leaving a tiny pinprick that heals completely, leaving no external blemish. Inside the stone, the grub consumes the seed cotyledons. The adult emerges by chewing through pulp upon ripening. A major quarantine pest.\n- IPM: Strict quarantine inspection. Deep ploughing post-harvest to destroy hibernating weevils in bark crevices. Spray **Deltamethrin @ 1 ml/L** at marble stage. Clean orchard sanitation.",
      "outlinePoints": [
        "Mango Hopper: sap sucking, hopper burn, and Capnodium sooty mold development; systemic neonicotinoid control",
        "Mango Mealybug: subterranean egg diapause, trunk banding with alkathene sheets to block nymph climb",
        "Fruit Fly: internal maggot pulp breakdown; methyl eugenol pheromone traps and post-harvest VHT treatment",
        "Stone Weevil: cryptic seed destruction without external blemish; quarantine importance and chemical sprays"
      ]
    },
    {
      "id": "HRT206-U1-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements",
      "questionText": "Compare North Indian commercial mango cultivars with South Indian commercial cultivars.",
      "modelAnswer": "Commercial mango cultivars of Northern and Southern India display fundamental differences in embryony, bearing habit, peel coloration, and fruit flavor:\n\n1. Embryony Type:\n- North Indian Cultivars: Almost exclusively **Monoembryonic**. Seeds contain a single zygotic cross-pollinated embryo that segregates genetically when planted.\n- South Indian Cultivars: Many commercial varieties and rootstocks are **Polyembryonic** (*Olour, Kurukkan, Chandrakaran*), containing asexual nucellar embryos that breed true-to-type.\n\n2. Bearing Habit:\n- North Indian: Strictly **Alternate (Biennial) Bearing** (*Dashehari, Langra, Chausa*). Heavy 'On-Year' crops are followed by lean 'Off-Years' due to vegetative flush requirements and cold winter dormancy.\n- South Indian: Predominantly **Regular Bearing** (*Neelum, Totapuri, Banganapalli*). Warmer subtropical/tropical winters allow overlapping vegetative flushes and continuous annual flowering.\n\n3. Fruit Flavor and Fiber Content:\n- North Indian: Known for intense, rich sweetness, delicate aromatic terpenes, fiberless melting pulp, and thin peel. Highly prized for fresh table consumption (*Dashehari, Langra*).\n- South Indian: Generally milder in aroma, firmer in texture, thicker peel, with slightly higher acid-sugar balance. Highly suited for long-distance transport and industrial pulp canning (*Totapuri, Banganapalli*).\n\n4. Ripe Peel Color:\n- North Indian: Variable; Langra remains deep green when ripe; Dashehari is greenish-yellow; Chausa turns bright yellow.\n- South Indian: Most turn an intense, bright golden-yellow peel upon maturity (*Banganapalli, Totapuri*).",
      "outlinePoints": [
        "Embryony: Monoembryonic (North) vs Polyembryonic presence (South)",
        "Bearing habit: strictly alternate/biennial (North) vs regular bearing (South)",
        "Flavor and texture: delicate sweet table fruit vs firm, thick-skinned processing fruit",
        "Representative varieties for each geographic zone"
      ]
    },
    {
      "id": "HRT206-U1-SUB16",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics",
      "questionText": "Differentiate between Epicotyl (Stone) Grafting and Veneer Grafting in mango nursery management.",
      "modelAnswer": "Epicotyl Grafting and Veneer Grafting are the two primary asexual propagation methods in commercial mango nurseries:\n\n1. Age and Stage of Rootstock Seedling:\n- Epicotyl Grafting: Uses very young germinating seedlings that are only **10 to 15 days old**, still attached to the nutritive seed stone and possessing copper-colored juvenile stem tissue.\n- Veneer Grafting: Uses mature rootstock seedlings that are **9 to 12 months old** (pencil thickness, 0.8\u20131.0 cm diameter) with brown, woody bark.\n\n2. Grafting Cut Architecture:\n- Epicotyl Grafting: The seedling is decapitated 5\u20136 cm above the stone and a vertical **cleft (split)** is made down the center. A double-sloped wedge scion is inserted into the cleft.\n- Veneer Grafting: The rootstock is NOT decapitated initially. A shallow, 3\u20134 cm downward sloping **tangential notch/flap cut** is made on the side of the stem to receive a matching scion with one long sloping cut. The rootstock top is cut back gradually only after the graft unites.\n\n3. Nursery Gestation Time:\n- Epicotyl Grafting: Extremely rapid. Grafted plants are ready for field sale within 6\u20138 months of seed sowing, saving almost an entire year of nursery management.\n- Veneer Grafting: Requires 1.5 to 2 years (9 months to raise rootstock + 6\u20138 months for graft establishment).\n\n4. Commercial Geographic Popularity:\n- Epicotyl: Highly successful and universally adopted in warm, humid coastal zones (Maharashtra, Goa, Konkan, Karnataka).\n- Veneer: Standard commercial practice across Northern and Central India (Uttar Pradesh, Punjab, Bihar, Madhya Pradesh).",
      "outlinePoints": [
        "Rootstock age: 10-15 days old (epicotyl) vs 9-12 months old (veneer)",
        "Cut technique: apical cleft insertion vs side veneer flap insertion",
        "Nursery turnaround time: 6-8 months vs 18-24 months",
        "Regional preference: Konkan/coastal belts vs Northern subtropical plains"
      ]
    },
    {
      "id": "HRT206-U1-SUB17",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "questionText": "Compare Spongy Tissue with Black Tip disorder in mango.",
      "modelAnswer": "Spongy Tissue and Black Tip represent two economically devastating physiological disorders in mango:\n\n1. Nature and Visibility of Symptoms:\n- Spongy Tissue: An **internal, hidden disorder** confined to the pulp (mesocarp). The outer fruit appears 100% normal and flawless; the defect is visible only after cutting open the ripe fruit (revealing pale, corky, acidic, gas-filled spongy pulp).\n- Black Tip: An **external, visible disorder**. It manifests on the outside of growing green fruits, starting as distal yellowing that rapidly turns into a flat, hard, sunken jet-black necrotic apex.\n\n2. Developmental Stage of Manifestation:\n- Spongy Tissue: Manifests during the **final ripening stage** of post-harvest fruit, as starch converts to sugar.\n- Black Tip: Manifests in the orchard during early fruit enlargement (**pea to marble stage**).\n\n3. Causal Etiology:\n- Spongy Tissue: Triggered by **convective soil heat radiation** (>40\u00b0C) from unmulched orchard floors, causing premature seed germination signals, inactivation of invertase, and hyper-activation of amylases.\n- Black Tip: Caused by atmospheric pollution from **brick kiln fumes** (SO2, CO, fluorides) interacting with **Boron deficiency**.\n\n4. Varietal Specificity:\n- Spongy Tissue: Highly variety-specific; predominantly affects **Alphonso** (rare in Dashehari, Langra, or Kesar).\n- Black Tip: Affects almost all commercial varieties grown near brick kilns, especially Dashehari and Langra.\n\n5. Management Remedies:\n- Spongy Tissue: Harvest at 85% maturity (sp. gravity 1.01-1.02); paddy straw mulching; sod cover crops; planting resistant hybrids (Ratna, Sindhu).\n- Black Tip: Enforce 3-5 km kiln isolation buffer; foliar sprays of Borax @ 1% or caustic soda (0.5%) at pea and marble stages.",
      "outlinePoints": [
        "Symptom location: hidden internal pulp breakdown vs conspicuous external apical necrosis",
        "Developmental timing: post-harvest ripening phase vs tree fruitlet marble stage",
        "Etiology: convective soil heat radiation vs brick kiln toxic emissions and boron deficiency",
        "Varietal specificity: almost exclusive to Alphonso vs broad susceptibility in North India",
        "Remedial measures: mulching/early harvest vs Borax sprays/kiln zoning"
      ]
    },
    {
      "id": "HRT206-U1-SUB18",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules",
      "questionText": "A progressive grower wishes to establish a commercial High-Density Planting (HDP) mango orchard on a 2-hectare farm in semi-arid conditions. (a) Recommend the most suitable cultivar, planting system, and spacing, calculating total tree requirement. (b) Formulate an integrated drip fertigation schedule from Year 1 to Year 5. (c) Detail the canopy pruning schedule and Paclobutrazol application protocol to maintain tree height below 2.5 meters and ensure regular bearing.",
      "modelAnswer": "Commercial High-Density Mango Production Plan (2-Hectare Farm):\n\n(a) Cultivar, Spacing, and Planting Geometry:\n- **Recommended Cultivar:** **Amrapali** (Dashehari x Neelum). Its genetic dwarf stature, short internodes, precocity, and strictly regular-bearing habit make it the premier candidate for commercial HDP.\n- **Planting System & Spacing:** Square system at **2.5 x 2.5 meters**.\n- **Tree Population Calculation:**\n  * Area of 1 hectare = 10,000 m2. For 2 hectares = 20,000 m2.\n  * Land area per tree = 2.5 m x 2.5 m = 6.25 m2.\n  * Tree Density per hectare = 10,000 / 6.25 = 1,600 trees/ha.\n  * **Total Trees Required for 2 Hectares = 3,200 grafted plants** (+ 160 plants for gap filling).\n\n(b) Integrated Drip Fertigation Schedule (Year 1 to Year 5):\nDrip system utilizes online pressure-compensating emitters (2 per tree in Year 1-2; 4 per tree from Year 3 onwards):\n- **Year 1:** 100 g N, 50 g P2O5, 100 g K2O per tree, split into monthly fertigations from July to March.\n- **Year 2:** 200 g N, 100 g P2O5, 200 g K2O per tree.\n- **Year 3:** 300 g N, 150 g P2O5, 300 g K2O per tree.\n- **Year 4:** 400 g N, 200 g P2O5, 400 g K2O per tree.\n- **Year 5 and Onwards (Bearing Orchard):** 500 g N, 250 g P2O5, 500 g K2O + 50 kg well-rotten FYM per tree per year.\n  * **Fertigation Split (Bearing Stage):**\n    1. Post-Harvest Stage (July-August): Apply 50% N + 100% P + 25% K via drip to fuel the critical autumn vegetative flush.\n    2. Bud Differentiation Stage (October-November): Strictly withhold irrigation and nitrogen to impose moisture stress and elevate the C:N ratio.\n    3. Fruit Set to Marble Stage (February-March): Apply 25% N + 25% K + micronutrient spray (Zinc 0.5% + Boron 0.2%).\n    4. Fruit Enlargement Stage (April-May): Apply remaining 25% N + 50% K (Potassium nitrate) to boost fruit size, TSS, and fruit retention.\n\n(c) Canopy Architecture and Paclobutrazol Management:\n1. Canopy Pruning Schedule:\n- **Year 1:** Decapitate the main stem at 60\u201375 cm height to encourage 3\u20134 primary scaffold limbs oriented symmetrically.\n- **Year 2:** Pinch secondary branches at 45 cm to promote tertiary shoots, developing a compact, goblet-like open-center canopy.\n- **Year 3 Onwards (Annual Maintenance Pruning):**\n  * Execute pruning strictly **within 2 weeks of fruit harvest (July)**.\n  * Head back current-season fruited terminals by 15\u201320 cm to an active bud.\n  * Thin out interior crossing, shaded, dead, and diseased shoots ('Center-Opening') to ensure sunlight penetrates down to the lower canopy skirt.\n  * Cap tree height rigidly at **2.2 to 2.5 meters** to prevent inter-row shading.\n\n2. Paclobutrazol (Cultar) Application Protocol:\n- Commence from Year 4 onwards to restrict vegetative growth and guarantee 100% annual regular flowering.\n- Dosage: Apply **1.0 ml Cultar (23% SC) per meter of canopy spread** in **mid-September**.\n- Application: Dissolve the required dose in 10 L water and pour as a soil drench around the drip line furrow, followed by light irrigation. This suppresses unwanted winter vegetative flushes and forces synchronized panicle emergence in January.",
      "outlinePoints": [
        "Selection of Amrapali at 2.5 x 2.5 m square spacing requiring 3,200 plants for 2 hectares",
        "Drip fertigation schedule detailing progressive NPK dosages from Year 1 to Year 5",
        "Phenological fertigation splits targeting vegetative flush, moisture stress, and fruit sizing",
        "Canopy architecture: primary scaffold selection and annual post-harvest heading back",
        "Rigid maintenance of tree height below 2.5 m",
        "Paclobutrazol soil collar drenching protocol (1 ml/m canopy) in September"
      ]
    },
    {
      "id": "HRT206-U1-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "questionText": "An exporter in Maharashtra faces rejection of 35% of an Alphonso mango consignment to Europe due to internal spongy tissue breakdown and fruit fly interception. Formulate an end-to-end Standard Operating Procedure (SOP) covering pre-harvest orchard practices, harvest indices, post-harvest cooling, and phytosanitary treatments to achieve zero-defect export quality.",
      "modelAnswer": "End-to-End Standard Operating Procedure (SOP) for Export-Grade Alphonso Mango:\n\n1. Pre-Harvest Orchard Management Protocols:\n- **Soil Heat Mitigation (Combating Spongy Tissue):**\n  * In early March (8 weeks before harvest), cover the entire orchard floor beneath the tree canopy with an 8\u201310 cm thick layer of **paddy straw mulch** (5 tonnes/ha).\n  * Mulch suppresses soil surface temperature by 10\u201312\u00b0C, preventing convective heat radiation into hanging fruits.\n  * Maintain clean weeding around tree collars.\n- **Pre-Harvest Pest Management (Combating Fruit Fly):**\n  * Install **Methyl Eugenol Pheromone Traps** @ 15 traps/ha 60 days prior to harvest to monitor and mass-trap male *Bactrocera dorsalis* fruit flies.\n  * Practice bait spraying: spot-spray tree trunks with Protein hydrolysate (0.1%) + Malathion 50 EC (0.1%) every 10 days.\n  * Pre-harvest Fruit Bagging: Enclose individual developing fruits at marble stage in double-layered brown paper bags. Bagging provides 100% mechanical protection against fruit fly oviposition and sunburn.\n\n2. Precision Harvest Maturity Indices:\n- **Specific Gravity Benchmark:** Never allow fruits to ripen on the tree. Harvest strictly at **85% horticultural maturity**, verified when fruit specific gravity is between **1.01 and 1.02** (tested via flotation in 2.5% saline solution; fruits that sink in water but float in 2.5% brine are optimal).\n  * Fruits with specific gravity >1.02 have massive spongy tissue incidence and must be rejected.\n- **Visual Maturity Markers:** Outward rounding of fruit shoulders; depression of the stalk cavity; transformation of olive-green peel to lighter green with a powdery white bloom.\n- **Harvest Operation:** Harvest exclusively during cool morning hours (**6:00 AM to 9:30 AM**). Cut fruit stems leaving a **1.0 to 1.5 cm pedicel intact** using sharp harvest shears. Leaving the pedicel prevents latex (sap) spurting onto the fruit skin, which causes 'sap burn' and fungal lenticel rot.\n\n3. Post-Harvest Packhouse Operations:\n- **De-Sapping:** Invert harvested fruits upside down on specialized cushioned de-sapping conveyor racks for 4 hours to drain sticky latex cleanly away from the fruit surface.\n- **Pre-Cooling:** Transfer de-sapped fruits immediately to a forced-air pre-cooling chamber at **12\u00b0C to 13\u00b0C (90% RH)** to remove field heat within 6 hours.\n\n4. Mandatory Export Phytosanitary Disinfestation:\n- **Hot Water Treatment (HWT):** Dip fruits in hot water at **48\u00b0C for 60 minutes**, followed by immediate drying. This kills anthracnose (*Colletotrichum*) latent spores and fruit fly eggs.\n- **Vapour Heat Treatment (VHT):** For European Union, Japan, and USA consignments, process fruits in an automated VHT chamber: heat internal fruit core temperature to **47.5\u00b0C using saturated water vapor and hold for 20 minutes**, followed by rapid cooling. This provides 100% quarantine security against fruit fly larvae without damaging pulp texture.\n\n5. Packaging and Cold Chain Logistics:\n- Sort and grade fruits by weight: Grade A (250\u2013300g per fruit).\n- Pack individually in foam netting sleeves inside ventilated 5-ply corrugated fiberboard (CFB) cartons (3.0 kg net weight).\n- Transport in refrigerated reefer containers maintained strictly at **12.5\u00b0C to 13.0\u00b0C and 85\u201390% RH** throughout maritime or air transit.",
      "outlinePoints": [
        "Pre-harvest straw mulching to arrest soil convective heat and eliminate spongy tissue",
        "Methyl eugenol trap installation and pre-harvest fruit bagging against fruit flies",
        "Harvest maturity index based strictly on specific gravity 1.01-1.02 and morning harvesting with 1.5 cm pedicels",
        "De-sapping on inverted racks and rapid forced-air pre-cooling at 12-13\u00b0C",
        "Phytosanitary Vapour Heat Treatment (VHT at 47.5\u00b0C for 20 min) and Hot Water Treatment",
        "Reefer cold chain transport maintained at 12.5\u00b0C to prevent chilling injury and maintain export quality"
      ]
    },
    {
      "id": "HRT206-U1-SUB20",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing",
      "contextScenario": "A 15-hectare commercial Dashehari mango orchard in western Uttar Pradesh experiences sudden crop failure. In March, over 70% of emerging panicles are observed to be abnormally compact, thickened, bunched, and greenish, with crowded male flowers that set zero fruit. Concurrently, 2-year-old interplanted nursery grafts exhibit severe bunchy-top rosettes. By May, the few surviving fruits in trees situated on the western border adjacent to an active coal-fired brick kiln turn dark yellow, necrotic, and jet black at the apical tip.",
      "questionText": "Analyze the multi-disorder crisis described in the case study. (a) Diagnose the two distinct disorders affecting the orchard. (b) Explain the etiological factors and vectors driving the panicle and shoot abnormalities. (c) Explain why fruits near the western boundary developed black apical tips. (d) Prescribe an emergency remediation and long-term rehabilitation schedule for the grower.",
      "modelAnswer": "Case Study Analysis \u2014 Multi-Disorder Crisis in Commercial Dashehari Orchard:\n\n(a) Clinical Diagnosis of the Two Disorders:\n1. **Mango Malformation Complex:**\n   - The thickened, compact, bunched greenish panicles with sterile male flowers represent **Floral Malformation**.\n   - The stunted, rosette clusters on 2-year-old nursery grafts represent **Vegetative Malformation (Bunchy Top)**.\n2. **Black Tip Disorder (Chimney Disease):**\n   - The distal apical yellowing and jet-black necrotic collapse on developing fruits bordering the western boundary represent classic **Black Tip**.\n\n(b) Etiology and Vectors of the Malformation Outbreak:\n- **Pathogen:** The primary incitant is the fungus **Fusarium mangiferae**. It colonizes the vascular bundles of shoot tips and floral buds, secreting toxic fungal metabolites (malformins and ethylene) that disrupt hormonal balance, causing internode compression and suppressing hermaphrodite flower differentiation.\n- **Acarological Vector:** The disease was vectored and amplified throughout the orchard by the microscopic **Mango Bud Mite (Aceria mangiferae)**. These mites inhabit bud scales; their feeding wounds allow *Fusarium* hyphae to penetrate meristematic cells, spreading infection across 70% of panicles.\n- The presence of vegetative bunchy-top in the nursery indicates that infected scion wood was used for grafting, serving as an internal primary inoculum reservoir.\n\n(c) Reason for Apical Blackening on the Western Border:\n- The western boundary directly abuts an active, operational coal-fired **brick kiln**.\n- The prevailing wind direction in Northern India during spring/summer is Westerly. The kiln emits toxic flue gases containing **Sulfur dioxide (SO2), Carbon monoxide (CO), and Fluoride**.\n- These acidic, toxic gases settle on the developing fruits along the western border. The toxic fumes dissolve in cuticular waxes at the fruit apex, uncoupling cellular metabolism and causing tissue collapse.\n- If the orchard soil is also deficient in **Boron**, cell wall membrane stability is degraded, making the distal fruit apex hypersensitive to sulfur necrosis.\n\n(d) Emergency Remediation and Long-Term Rehabilitation Plan:\n\n1. Immediate Remediation (Current Season):\n- **Sanitation of Malformed Panicles:** Immediately cut and remove all malformed floral panicles and bunchy-top shoots along with **15\u201320 cm of healthy supporting wood**. Burn all excised material outside the orchard.\n- **Rescue Spray for Black Tip:** Spray trees on the western border with **Borax @ 1% (10 g/L)** or **Caustic Soda / Sodium carbonate (0.5%)** immediately at pea/marble stage to neutralize sulfur deposits and strengthen apical cell walls.\n- **Post-Harvest Flush Protection:** Spray **Carbendazim @ 0.1%** combined with an acaricide (**Dicofol @ 0.05% or Dimethoate @ 0.04%**) to kill overwintering bud mites and fungal inocula.\n\n2. Long-Term Rehabilitation Protocol:\n- **Zoning Enforcement & Windbreak Shielding:** File a formal petition with the District Magistrate under the Brick Kiln Regulation Act to enforce the mandatory **3-km buffer distance** or convert to cleaner zigzag kilns. Concurrently, plant a dense, 3-row evergreen windbreak (*Casuarina* and *Jamun*) along the western boundary to physically intercept air pollutants.\n- **Autumn Hormonal Reset:** Spray **NAA @ 200 ppm in the second fortnight of October**. This breaks the hormonal dominance of *Fusarium*, delays early flowering, and reduces floral malformation by >80% in the following spring.\n- **Nursery Cleanliness:** Destroy all infected bunchy-top nursery grafts. Procure certified disease-free scions from verified healthy mother trees for future plantings.",
      "outlinePoints": [
        "Diagnosis 1: Mango Malformation (floral and vegetative bunchy-top)",
        "Diagnosis 2: Black Tip abiotic disorder caused by brick kiln emissions",
        "Etiological role of Fusarium mangiferae fungal infection amplified by Aceria mangiferae bud mites",
        "Analysis of western border fruit damage driven by westerly wind dispersion of SO2 and kiln fumes",
        "Immediate pruning of malformed wood (15-20 cm below infection) and Borax (1%) spraying",
        "Long-term rehabilitation: NAA 200 ppm in October, dense windbreak planting, and nursery sanitation"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "HRT206-U1-FC01",
      "front": "What is India's global rank in fruit production?",
      "back": "India ranks second in global fruit production (after China), contributing ~11% of the world's fruit output.",
      "hint": "Known as the Fruit Basket of the World.",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India"
    },
    {
      "id": "HRT206-U1-FC02",
      "front": "What daily fruit intake is recommended by ICMR?",
      "back": "120 grams of fresh fruits per capita per day for balanced protective human nutrition.",
      "hint": "Dietary guidelines for Indians.",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India"
    },
    {
      "id": "HRT206-U1-FC03",
      "front": "What defines a Climacteric fruit?",
      "back": "Fruits that show an autocatalytic burst of ethylene and a respiratory peak during ripening; can ripen off the tree (e.g., mango, banana).",
      "hint": "Can be harvested at physiological maturity.",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)"
    },
    {
      "id": "HRT206-U1-FC04",
      "front": "What defines a Non-Climacteric fruit?",
      "back": "Fruits that do not show an ethylene burst or respiratory surge; do not ripen off the tree and must ripen on the tree (e.g., citrus, grape).",
      "hint": "Slow steady decline in respiration.",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)"
    },
    {
      "id": "HRT206-U1-FC05",
      "front": "What is the botanical fruit type of mango?",
      "back": "Drupe (Stone fruit), comprising thin exocarp, fleshy mesocarp, and stony endocarp.",
      "hint": "Family Anacardiaceae.",
      "syllabusTopic": "Classification of fruit crops: Botanical, climatic (tropical, subtropical, temperate), and ripening physiology (climacteric vs non-climacteric)"
    },
    {
      "id": "HRT206-U1-FC06",
      "front": "What are the parentages of mango hybrids Amrapali and Mallika?",
      "back": "Amrapali = Dashehari x Neelum; Mallika = Neelum x Dashehari (developed at IARI, 1971).",
      "hint": "Reciprocal crosses of Dashehari and Neelum.",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements"
    },
    {
      "id": "HRT206-U1-FC07",
      "front": "What is the recommended spacing and tree density for Amrapali HDP?",
      "back": "2.5 x 2.5 meters in a square system, accommodating 1,600 trees per hectare.",
      "hint": "High-Density Planting standard.",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules"
    },
    {
      "id": "HRT206-U1-FC08",
      "front": "What is Sindhu mango famous for?",
      "back": "A seedless/thin-stone commercial mango hybrid developed at FRS Vengurla from Ratna x Alphonso.",
      "hint": "Paper-thin non-viable stone.",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements"
    },
    {
      "id": "HRT206-U1-FC09",
      "front": "What is Epicotyl (Stone) Grafting in mango?",
      "back": "Cleft grafting performed on 10\u201315 day old tender, copper-colored germinating seedlings attached to the seed stone.",
      "hint": "Saves 1 year in nursery production.",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics"
    },
    {
      "id": "HRT206-U1-FC10",
      "front": "What are Polyembryonic mango rootstocks?",
      "back": "Rootstocks carrying asexual nucellar embryos that produce 100% clonal, true-to-type, uniform rootstocks (e.g., Kurukkan, Vellaikolumban).",
      "hint": "Common in South India.",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics"
    },
    {
      "id": "HRT206-U1-FC11",
      "front": "Which mango rootstock induces dwarfism and which confers salt tolerance?",
      "back": "Vellaikolumban induces dwarfism; Kurukkan confers high tolerance to soil salinity and sodicity.",
      "hint": "South Indian polyembryonic varieties.",
      "syllabusTopic": "Propagation techniques in mango: Epicotyl/stone grafting, veneer grafting, and rootstock dynamics"
    },
    {
      "id": "HRT206-U1-FC12",
      "front": "What is Paclobutrazol (Cultar) used for in mango orchards?",
      "back": "An anti-gibberellin applied as a soil drench in Sep-Oct (1 ml/m canopy) to inhibit vegetative flushes and induce regular, synchronized flowering.",
      "hint": "Breaks alternate bearing.",
      "syllabusTopic": "Orchard establishment, High-Density Planting (HDP), canopy management, and integrated nutrient/irrigation schedules"
    },
    {
      "id": "HRT206-U1-FC13",
      "front": "What causes Mango Malformation?",
      "back": "A fungal-acarological complex caused primarily by Fusarium mangiferae and vectored by the mango bud mite (Aceria mangiferae).",
      "hint": "Vegetative bunchy top and floral hypertrophied panicles.",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
    },
    {
      "id": "HRT206-U1-FC14",
      "front": "How is Mango Malformation controlled hormonally?",
      "back": "A single foliar spray of Naphthalene Acetic Acid (NAA) @ 200 ppm in the second fortnight of October.",
      "hint": "Suppresses early malformed panicle emergence.",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
    },
    {
      "id": "HRT206-U1-FC15",
      "front": "What causes Spongy Tissue in Alphonso mango?",
      "back": "Convective heat radiation from bare orchard soil during maturity, causing premature seed germination signals and starch breakdown by amylases.",
      "hint": "Internal corky, sour, pale yellow pulp breakdown.",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
    },
    {
      "id": "HRT206-U1-FC16",
      "front": "How is Spongy Tissue managed in Alphonso orchards?",
      "back": "Harvest at 85% maturity (specific gravity 1.01-1.02); paddy straw mulching; sod cover crops; and growing resistant hybrids (Ratna, Sindhu).",
      "hint": "Lowers soil temperature by 10-12\u00b0C.",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
    },
    {
      "id": "HRT206-U1-FC17",
      "front": "What causes Black Tip disorder in mango?",
      "back": "Toxic fumes from operational brick kilns (SO2, CO, fluorides) combined with Boron deficiency in the orchard.",
      "hint": "Necrotic apical fruit collapse.",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
    },
    {
      "id": "HRT206-U1-FC18",
      "front": "How is Black Tip controlled chemically?",
      "back": "Foliar sprays of Borax @ 1% (10 g/L) or Caustic Soda (0.5%) at pea stage and marble stage of fruit development.",
      "hint": "Neutralizes acidic sulfur emissions.",
      "syllabusTopic": "Physiological disorders and pest/disease management: Mango malformation, spongy tissue, black tip, and alternate bearing"
    },
    {
      "id": "HRT206-U1-FC19",
      "front": "What is the primary natural pollinator of mango flowers?",
      "back": "The common housefly (Musca domestica) and hoverflies (Order Diptera), attracted to andromonoecious panicles.",
      "hint": "Not honeybees.",
      "syllabusTopic": "Mango (Mangifera indica): Botanical description, commercial cultivars (Alphonso, Dashehari, Langra, Amrapali, Mallika), and climatic requirements"
    },
    {
      "id": "HRT206-U1-FC20",
      "front": "What is Vapour Heat Treatment (VHT) in mango export?",
      "back": "A mandatory quarantine treatment heating fruit pulp to 47.5\u00b0C for 20 minutes to kill Oriental fruit fly (Bactrocera dorsalis) maggots.",
      "hint": "Required for exports to Japan and USA.",
      "syllabusTopic": "Importance, scope, nutritional value, and export potential of fruit and plantation crops in India"
    }
  ]
};
