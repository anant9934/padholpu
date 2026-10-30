"""AGR217 Unit 4 Complete Builder"""
import json
from gen_agr217_u4_notes import u4_notes

TOPICS = [
    "Ecological Pest Management (EPM), predator-prey dynamics, and Economic Threshold Levels in Natural Farming",
    "Botanical decoctions: Neemastra preparation, triterpenoid modes of action, and sucking pest control",
    "Potent insecticidal formulations: Agniastra and Brahmastra formulation chemistry and caterpillar/borer management",
    "Dashparni Ark: Ten-leaf fermented botanical bio-repellent preparation, phytochemistry, and broad-spectrum pest suppression",
    "Botanical disease management and cultural controls: Sour buttermilk (Chhachh), Sonthastra, trap cropping, and border crops"
]

mcqs = [
    # ========================== EASY (20) ==========================
    {
        "id": "AGR217-U4-MCQ01",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Easy",
        "questionText": "What is the primary objective of Ecological Pest Management (EPM) in Natural Farming?",
        "options": {
            "A": "Total chemical eradication of all insect populations in the field",
            "B": "Maintaining pest populations below the Economic Threshold Level (ETL) while conserving natural predators",
            "C": "Killing only insects that are green in color",
            "D": "Sterilizing the topsoil using high-pressure steam"
        },
        "correctOption": "B",
        "explanation": "Natural Farming aims to maintain insect populations below the Economic Threshold Level (ETL) through predator-prey balance, rather than pursuing harmful total eradication.",
        "tags": ["EPM", "ETL", "Pest Management"]
    },
    {
        "id": "AGR217-U4-MCQ02",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "What is the principal active botanical compound found in neem leaves and seed kernels responsible for antifeedant action?",
        "options": {
            "A": "Azadirachtin",
            "B": "Nicotine",
            "C": "Capsaicin",
            "D": "Curcumin"
        },
        "correctOption": "A",
        "explanation": "Azadirachtin is the primary triterpenoid (limonoid) in neem that acts as a potent antifeedant, repellent, and insect growth regulator (IGR).",
        "tags": ["Neemastra", "Azadirachtin", "Botanicals"]
    },
    {
        "id": "AGR217-U4-MCQ03",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "Which category of insect pests is primarily targeted by Neemastra in Natural Farming?",
        "options": {
            "A": "Cryptic internal stem borers",
            "B": "Soft-bodied sucking pests (aphids, jassids, whiteflies, thrips)",
            "C": "Termites in deep root systems",
            "D": "Storage grain weevils"
        },
        "correctOption": "B",
        "explanation": "Neemastra is specifically formulated for managing sucking pests (aphids, jassids, whiteflies) and early instars of caterpillars.",
        "tags": ["Neemastra", "Sucking Pests", "Aphids"]
    },
    {
        "id": "AGR217-U4-MCQ04",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "How many distinct bitter or pungent plant leaf species are utilized in preparing Brahmastra?",
        "options": {
            "A": "2 species",
            "B": "5 species",
            "C": "10 species",
            "D": "20 species"
        },
        "correctOption": "B",
        "explanation": "Brahmastra is prepared by boiling crushed leaves of 5 plant species (neem plus 4 other plants that livestock naturally do not graze) in native cow urine.",
        "tags": ["Brahmastra", "Formulation", "Five Leaves"]
    },
    {
        "id": "AGR217-U4-MCQ05",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "Which high-potency pungent botanical ingredients are boiled alongside neem and cow urine in Agniastra?",
        "options": {
            "A": "Green chilli paste and native garlic bulb paste",
            "B": "Sugar cane juice and molasses",
            "C": "Coconut milk and rose petals",
            "D": "Banana peel and yeast"
        },
        "correctOption": "A",
        "explanation": "Agniastra contains crushed green chillies (capsaicin), garlic paste (allicin), tobacco leaves (nicotine), and neem leaves boiled in indigenous cow urine.",
        "tags": ["Agniastra", "Chilli", "Garlic", "Capsaicin"]
    },
    {
        "id": "AGR217-U4-MCQ06",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "How many different species of plant leaves are used to prepare Dashparni Ark?",
        "options": {
            "A": "3 species",
            "B": "5 species",
            "C": "10 species",
            "D": "12 species"
        },
        "correctOption": "C",
        "explanation": "'Dasha' means ten and 'Parni' means leaves. Dashparni Ark is formulated using leaves of 10 distinct medicinal and ungrazed plant species.",
        "tags": ["Dashparni Ark", "Ten Leaves", "Botanicals"]
    },
    {
        "id": "AGR217-U4-MCQ07",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "What is the recommended fermentation duration for Dashparni Ark before it is filtered and ready for field use?",
        "options": {
            "A": "2 to 4 hours",
            "B": "24 to 48 hours",
            "C": "30 to 45 days",
            "D": "6 months"
        },
        "correctOption": "C",
        "explanation": "Dashparni Ark requires a prolonged fermentation period of 30 to 45 days in shade to thoroughly extract secondary plant metabolites.",
        "tags": ["Dashparni Ark", "Fermentation Time", "Preparation"]
    },
    {
        "id": "AGR217-U4-MCQ08",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "Which household dairy product is fermented with copper to control fungal powdery and downy mildews in Natural Farming?",
        "options": {
            "A": "Sweet condensed milk",
            "B": "Sour churned buttermilk (Chhachh / Mattha)",
            "C": "Pasteurized butter",
            "D": "Pure cow ghee"
        },
        "correctOption": "B",
        "explanation": "Fermented sour buttermilk (5-7 days old), kept with a copper plate or vessel, forms copper lactate and lactic acid that act as potent natural fungicides.",
        "tags": ["Sour Buttermilk", "Chhachh", "Bio-fungicide"]
    },
    {
        "id": "AGR217-U4-MCQ09",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "Which flowering plant is widely planted as a trap crop to divert Helicoverpa armigera from tomato and chickpea crops?",
        "options": {
            "A": "African Marigold (Tagetes erecta)",
            "B": "Water lily",
            "C": "Wheat",
            "D": "Bermuda grass"
        },
        "correctOption": "A",
        "explanation": "African marigold is a classic trap crop whose bright flowers attract Helicoverpa armigera moths for oviposition, sparing the cash crop.",
        "tags": ["Trap Crop", "Marigold", "Helicoverpa"]
    },
    {
        "id": "AGR217-U4-MCQ10",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "What is the key botanical constituent in Sonthastra used for controlling fungal blights and sheath blight?",
        "options": {
            "A": "Dry ginger powder (Sonth) boiled with milk",
            "B": "Dry red chilli flakes in diesel",
            "C": "Mustard oil and salt",
            "D": "Crushed onion peels"
        },
        "correctOption": "A",
        "explanation": "Sonthastra is prepared using dry ginger powder (Sonth) boiled in water and combined with boiled cow milk, providing gingerols and antimicrobial lactoferrins.",
        "tags": ["Sonthastra", "Dry Ginger", "Fungicide"]
    },
    {
        "id": "AGR217-U4-MCQ11",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Easy",
        "questionText": "Why does excessive synthetic nitrogen fertilizer increase insect pest attacks on crops?",
        "options": {
            "A": "It repels natural predators through bad odor",
            "B": "It causes rapid, succulent vegetative growth with thin cell walls and high free amino acids",
            "C": "It increases soil temperature above 50°C",
            "D": "It attracts insects using magnetic fields"
        },
        "correctOption": "B",
        "explanation": "High synthetic nitrogen promotes succulent cell elongation, thin epidermal cuticles, and rich amino acid sap, making plants highly vulnerable to piercing-sucking insects.",
        "tags": ["Nitrogen", "Cell Walls", "Pest Vulnerability"]
    },
    {
        "id": "AGR217-U4-MCQ12",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "What role does indigenous cow urine play when formulating botanical extracts like Neemastra and Brahmastra?",
        "options": {
            "A": "It acts as a sweet feeding attractant",
            "B": "It acts as a natural surfactant, sticker, and solvent carrying antimicrobial benzoic and hippuric acids",
            "C": "It freezes the formulation instantly",
            "D": "It turns the liquid into solid wax"
        },
        "correctOption": "B",
        "explanation": "Cow urine serves as a natural surfactant and penetrating sticker containing bioactive uric acid, hippuric acid, and salts that enhance foliar spread.",
        "tags": ["Cow Urine", "Surfactant", "Botanicals"]
    },
    {
        "id": "AGR217-U4-MCQ13",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "Which severe crop pest category is specifically controlled by Agniastra due to its deep tissue penetrating heat?",
        "options": {
            "A": "Internal borer complex (stem borers, bollworms, and fruit borers)",
            "B": "Root-knot nematodes in saline water",
            "C": "Algae growing on irrigation pipes",
            "D": "Earthworms inside soil burrows"
        },
        "correctOption": "A",
        "explanation": "Agniastra ('Fire Weapon') combines capsaicin, nicotine, and allicin to effectively kill and repel internal borers (cotton bollworms, paddy stem borers, brinjal shoot borers).",
        "tags": ["Agniastra", "Stem Borer", "Bollworm"]
    },
    {
        "id": "AGR217-U4-MCQ14",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "Why are leaves from plants avoided by grazing animals selected for making Dashparni Ark and Brahmastra?",
        "options": {
            "A": "They contain higher moisture than fodder grasses",
            "B": "They are rich in bitter, toxic secondary metabolites (alkaloids, tannins, glycosides) that naturally deter herbivores",
            "C": "They are easy to chew for cows",
            "D": "They grow only in aquatic swamps"
        },
        "correctOption": "B",
        "explanation": "Plants avoided by cattle have evolved defensive secondary metabolites (alkaloids, glycosides, terpenoids) that act as natural antifeedants and insect toxins.",
        "tags": ["Secondary Metabolites", "Alkaloids", "Ungrazed Leaves"]
    },
    {
        "id": "AGR217-U4-MCQ15",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "Which trap crop is recommended to manage the diamondback moth (Plutella xylostella) in cole crops (cabbage/cauliflower)?",
        "options": {
            "A": "Indian mustard (Brassica juncea)",
            "B": "Sugarcane",
            "C": "Rice",
            "D": "Cotton"
        },
        "correctOption": "A",
        "explanation": "Mustard is an effective trap crop for cabbage/cauliflower; diamondback moths preferentially lay eggs on mustard, which is planted every 15 rows.",
        "tags": ["Mustard", "Diamondback Moth", "Trap Crop"]
    },
    {
        "id": "AGR217-U4-MCQ16",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "What structure is erected in Natural Farming fields to encourage predatory insectivorous birds to hunt caterpillars?",
        "options": {
            "A": "T-shaped wooden bird perches",
            "B": "Plastic scarecrows that emit smoke",
            "C": "High-voltage neon light grids",
            "D": "Concrete sound barriers"
        },
        "correctOption": "A",
        "explanation": "Installing 20-25 T-perches per acre provides resting platforms for insectivorous birds like black drongos, who actively hunt defoliating caterpillars.",
        "tags": ["Bird Perches", "Biological Control", "Predators"]
    },
    {
        "id": "AGR217-U4-MCQ17",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Easy",
        "questionText": "What biological phenomenon occurs when synthetic chemical insecticides kill natural predators and cause the target pest to multiply explosively?",
        "options": {
            "A": "Pest resurgence",
            "B": "Crop dormition",
            "C": "Photosynthetic inhibition",
            "D": "Nitrogen fixation"
        },
        "correctOption": "A",
        "explanation": "Pest resurgence happens when pesticides wipe out natural enemies, allowing surviving resistant target pests to reproduce rapidly without predatory control.",
        "tags": ["Pest Resurgence", "Chemical Impacts", "EPM"]
    },
    {
        "id": "AGR217-U4-MCQ18",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "What is the recommended fermentation time for Neemastra under shade before application?",
        "options": {
            "A": "48 hours (2 days)",
            "B": "1 year",
            "C": "10 minutes",
            "D": "90 days"
        },
        "correctOption": "A",
        "explanation": "Neemastra is prepared by fermenting cow dung, cow urine, and crushed neem in 200 L water for 48 hours in the shade with twice-daily stirring.",
        "tags": ["Neemastra", "Fermentation", "Preparation"]
    },
    {
        "id": "AGR217-U4-MCQ19",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "Which plant leaf with milky latex is commonly used as one of the 5 leaves in Brahmastra?",
        "options": {
            "A": "Calotropis procera (Aak / Madar)",
            "B": "Triticum aestivum (Wheat)",
            "C": "Zea mays (Maize)",
            "D": "Oryza sativa (Rice)"
        },
        "correctOption": "A",
        "explanation": "Calotropis procera (Madar/Aak) contains bitter cardiac glycosides (calotropin) and toxic latex, making it an excellent ungrazed plant for Brahmastra.",
        "tags": ["Calotropis", "Brahmastra", "Alkaloids"]
    },
    {
        "id": "AGR217-U4-MCQ20",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "What active antimicrobial substance is present in raw turmeric powder used in combination with cow urine for plant sprays?",
        "options": {
            "A": "Curcumin",
            "B": "Gluten",
            "C": "Caffeine",
            "D": "Ascorbic acid"
        },
        "correctOption": "A",
        "explanation": "Curcumin is the principal polyphenol in turmeric (Curcuma longa), exhibiting potent antifungal, antibacterial, and antiviral properties.",
        "tags": ["Curcumin", "Turmeric", "Antimicrobial"]
    },

    # ========================== MEDIUM (25) ==========================
    {
        "id": "AGR217-U4-MCQ21",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "In Ecological Pest Management, how does a 'secondary pest outbreak' differ from 'pest resurgence'?",
        "options": {
            "A": "Resurgence occurs in winter, whereas outbreaks occur exclusively in monsoon",
            "B": "Resurgence involves the resurgence of target pests, while secondary outbreak is the explosive multiplication of a previously harmless minor pest whose natural predators were destroyed",
            "C": "Secondary pest outbreak only affects weeds, not cultivated crops",
            "D": "Pest resurgence is caused by earthworms, whereas outbreaks are caused by fungi"
        },
        "correctOption": "B",
        "explanation": "Secondary pest outbreaks occur when broad-spectrum chemicals kill natural enemies keeping non-target minor pests in check (e.g., whitefly outbreak after spraying against bollworms).",
        "tags": ["Secondary Pest Outbreak", "Resurgence", "Ecology"]
    },
    {
        "id": "AGR217-U4-MCQ22",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "What is the primary physiological mechanism by which azadirachtin disrupts the life cycle of insect pests?",
        "options": {
            "A": "It permanently fuses the insect's thoracic legs together",
            "B": "It inhibits the ecdysone titer and disrupts juvenile hormone balance, arresting molting and metamorphosis",
            "C": "It hydrolyzes the insect cuticle into simple sugars instantly",
            "D": "It blinds the compound eyes of adult moths"
        },
        "correctOption": "B",
        "explanation": "Azadirachtin is an insect growth regulator (IGR) that interferes with ecdysteroid titers in the hemolymph, preventing pupation, molting, and successful metamorphosis.",
        "tags": ["Azadirachtin", "Ecdysone", "Insect Growth Regulator"]
    },
    {
        "id": "AGR217-U4-MCQ23",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "What are the exact standard proportions of ingredients required to prepare a 200-liter batch of Neemastra for 1 acre?",
        "options": {
            "A": "50 kg dung, 50 L urine, 50 kg neem, 100 L water",
            "B": "5 kg desi cow dung, 5 L desi cow urine, 5 kg crushed neem leaves (or 2 kg neem seed powder), and 200 L water",
            "C": "1 kg dung, 20 L urine, 10 kg chemical sulfur, and 50 L water",
            "D": "10 kg dung, 1 kg jaggery, 100 g copper sulfate, and 500 L water"
        },
        "correctOption": "B",
        "explanation": "The standard Subhash Palekar protocol for Neemastra is 5 kg fresh indigenous cow dung, 5 L native cow urine, and 5 kg crushed neem leaves in 200 L water.",
        "tags": ["Neemastra", "Formulation Proportions", "Protocol"]
    },
    {
        "id": "AGR217-U4-MCQ24",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "Why is boiling necessary when preparing Brahmastra, whereas Neemastra is only cold fermented?",
        "options": {
            "A": "Boiling is necessary to kill beneficial bacteria in cow urine",
            "B": "Thermal decoction is required to denature plant proteins and extract complex water-insoluble alkaloids from dense leaves like custard apple and karanja",
            "C": "Boiling evaporates all water to create a solid dry powder",
            "D": "Boiling produces alcohol needed for preservation"
        },
        "correctOption": "B",
        "explanation": "Dense, waxy leaves containing complex alkaloids (anonaine, karanjin, ricinine) require boiling in cow urine to dissolve and extract potent secondary compounds into solution.",
        "tags": ["Brahmastra", "Boiling", "Alkaloid Extraction"]
    },
    {
        "id": "AGR217-U4-MCQ25",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "What neurotoxic alkaloid is present in tobacco leaves used in Agniastra to induce rapid knock-down of chewing pests?",
        "options": {
            "A": "Nicotine",
            "B": "Morphine",
            "C": "Quinine",
            "D": "Atropine"
        },
        "correctOption": "A",
        "explanation": "Nicotine in tobacco acts as an agonist on nicotinic acetylcholine receptors (nAChR) in insect central nervous systems, inducing convulsions and paralysis.",
        "tags": ["Nicotine", "Agniastra", "Neurotoxin"]
    },
    {
        "id": "AGR217-U4-MCQ26",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "Which sulfur-containing compound produced in crushed garlic bulb paste provides antimicrobial and repellent efficacy in Agniastra?",
        "options": {
            "A": "Allicin (diallyl thiosulfinate)",
            "B": "Sulfuric acid",
            "C": "Glucosamine",
            "D": "L-cysteine"
        },
        "correctOption": "A",
        "explanation": "Crushing garlic triggers alliinase to convert alliin into allicin, an organosulfur compound with strong repellent, antifeedant, and membrane-permeabilizing activity.",
        "tags": ["Allicin", "Garlic", "Agniastra"]
    },
    {
        "id": "AGR217-U4-MCQ27",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "Which combination of plant species is typical of the ten botanical ingredients in Dashparni Ark?",
        "options": {
            "A": "Neem, Karanj, Calotropis, Custard apple, Castor, Guava, Lantana, Datura, Nerium, and Papaya",
            "B": "Wheat, Rice, Maize, Sorghum, Pearl millet, Barley, Oat, Rye, Triticale, and Sugarcane",
            "C": "Mango, Apple, Banana, Grape, Orange, Papaya, Pineapple, Strawberry, Fig, and Date",
            "D": "Rose, Jasmine, Marigold, Hibiscus, Lotus, Tulip, Carnation, Lily, Orchid, and Daisy"
        },
        "correctOption": "A",
        "explanation": "Dashparni Ark uses 10 ungrazed, medicinal, and bitter/toxic species containing diverse secondary metabolites to create a broad-spectrum pest repellent.",
        "tags": ["Dashparni Ark", "Plant Selection", "Botanicals"]
    },
    {
        "id": "AGR217-U4-MCQ28",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "What prevents Dashparni Ark from turning putrid and foul-smelling during its 40-day anaerobic fermentation?",
        "options": {
            "A": "Adding synthetic formalin disinfectant",
            "B": "Antimicrobial alkaloids, high salinity/urea in cow urine, and regular twice-daily aerobic stirring",
            "C": "Keeping the container inside a refrigerated cold room",
            "D": "Adding pure sodium hydroxide flakes"
        },
        "correctOption": "B",
        "explanation": "The high concentration of antimicrobial polyphenols, terpenes, cow urine metabolites (hippuric acid), and clockwise stirring encourage controlled fermentation rather than putrefaction.",
        "tags": ["Dashparni Ark", "Fermentation Chemistry", "Preservation"]
    },
    {
        "id": "AGR217-U4-MCQ29",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "What chemical reaction takes place when sour buttermilk is fermented in the presence of a submerged copper plate?",
        "options": {
            "A": "Formation of insoluble toxic copper oxide slag",
            "B": "Reaction of microbial lactic acid with metallic copper to form bio-active copper lactate [Cu(C3H5O3)2]",
            "C": "Complete vaporization of milk lactose into hydrogen cyanide gas",
            "D": "Transformation of copper into pure gold"
        },
        "correctOption": "B",
        "explanation": "Lactic acid generated by Lactobacillus reacts with copper metal to yield soluble copper lactate, a potent bio-available fungicide that ruptures fungal hyphae.",
        "tags": ["Copper Lactate", "Sour Buttermilk", "Bio-fungicide"]
    },
    {
        "id": "AGR217-U4-MCQ30",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "Why is cow milk boiled, cooled, and skimmed of cream before being mixed with boiled dry ginger in Sonthastra?",
        "options": {
            "A": "To prevent milk fat globules from clogging sprayer nozzles and suffocating leaves with an oily film",
            "B": "To increase the sweetness of the spray",
            "C": "To convert milk calcium into limestone",
            "D": "To allow butterflies to feed on the residue"
        },
        "correctOption": "A",
        "explanation": "Removing the butterfat/cream layer avoids clogging fine knapsack spray nozzles and prevents greasy films that attract saprophytic molds on foliage.",
        "tags": ["Sonthastra", "Milk Skimming", "Preparation"]
    },
    {
        "id": "AGR217-U4-MCQ31",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "In the 'Push-Pull' integrated pest management system for cereal crops, what is the ecological function of the 'Push' crop?",
        "options": {
            "A": "It physically pushes weeds out of the field through aggressive runners",
            "B": "It emits volatile semiochemicals (e.g., monoterpenes) that naturally repel adult insect pests away from the primary crop",
            "C": "It provides shade to cool the irrigation canal",
            "D": "It produces bright ultraviolet light to blind passing moths"
        },
        "correctOption": "B",
        "explanation": "The 'Push' companion plant (such as Desmodium) produces repellent volatile terpenoids that drive stem borer moths away from the main cereal crop.",
        "tags": ["Push-Pull", "Semiochemicals", "Desmodium"]
    },
    {
        "id": "AGR217-U4-MCQ32",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "How does castor (Ricinus communis) function as a monitoring and trap crop when planted along field borders?",
        "options": {
            "A": "It kills insects by electric shocks",
            "B": "Its large, broad leaves preferentially attract Spodoptera litura moths to deposit egg masses, which can be visually scouted and hand-picked",
            "C": "It emits sweet nectar that dissolves caterpillar mandibles",
            "D": "It produces roots that absorb nitrogen from the air"
        },
        "correctOption": "B",
        "explanation": "Spodoptera litura moths exhibit strong oviposition preference for castor leaves; farmers easily spot the clustered golden-brown egg masses and destroy them before hatching.",
        "tags": ["Castor", "Spodoptera", "Egg Masses"]
    },
    {
        "id": "AGR217-U4-MCQ33",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "What distinguishes predatory insects (e.g., Coccinellid beetles) from parasitoid insects (e.g., Trichogramma wasps)?",
        "options": {
            "A": "Predators eat plants, while parasitoids drink morning dew",
            "B": "Predators freely consume many prey individuals during their life, whereas parasitoid larvae develop inside or on a single host individual, ultimately killing it",
            "C": "Parasitoids only infect mammals, not insects",
            "D": "Predators are active only under freezing winter conditions"
        },
        "correctOption": "B",
        "explanation": "Predators kill and feed on multiple prey items directly, while female parasitoids oviposit inside or on a specific insect host, whose body feeds the developing parasitoid larva.",
        "tags": ["Predators", "Parasitoids", "Biological Control"]
    },
    {
        "id": "AGR217-U4-MCQ34",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "What dilution rate is recommended when applying standard Neemastra foliar spray in an agricultural field?",
        "options": {
            "A": "Neemastra is applied undiluted (100% pure stock solution) directly from the fermentation barrel",
            "B": "1:1000 dilution in mineral oil",
            "C": "Neemastra stock (prepared with 200 L water) is sprayed directly per acre without further water dilution",
            "D": "1 mL per 100 liters of water"
        },
        "correctOption": "C",
        "explanation": "Neemastra is prepared directly in 200 L of water in a drum, and after 48 hours of fermentation and straining, the entire 200 L filtrate is sprayed directly over 1 acre.",
        "tags": ["Neemastra", "Dosage", "Application"]
    },
    {
        "id": "AGR217-U4-MCQ35",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "What dilution of Brahmastra stock solution is mixed with water for knapsack spraying per acre?",
        "options": {
            "A": "2 to 3 liters of concentrated Brahmastra in 100 liters of water",
            "B": "50 liters in 50 liters of water (1:1 ratio)",
            "C": "1 drop in 1000 liters of water",
            "D": "Brahmastra is never diluted with water"
        },
        "correctOption": "A",
        "explanation": "Brahmastra is a concentrated boiled extract; 2 to 3 L of stock extract is diluted in 100 L of water per acre (or 400-500 mL per 15-L knapsack tank).",
        "tags": ["Brahmastra", "Dilution", "Knapsack Spray"]
    },
    {
        "id": "AGR217-U4-MCQ36",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "What is the biochemical role of capsaicin from green chillies when applied in Agniastra?",
        "options": {
            "A": "It binds to TRPV1 sensory receptors on insect cuticle/oral membranes, causing extreme irritation, repelling feeding, and enhancing chemical penetration",
            "B": "It acts as a nitrogen nutrient source for photosynthesis",
            "C": "It freezes the insect's gut fluids into ice crystals",
            "D": "It dissolves the cell wall of the host plant"
        },
        "correctOption": "A",
        "explanation": "Capsaicin causes severe sensory irritation, disrupts feeding reflexes, and acts synergistically with nicotine and allicin to penetrate insect spiracles and tissues.",
        "tags": ["Capsaicin", "Agniastra", "Mechanism"]
    },
    {
        "id": "AGR217-U4-MCQ37",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "How does Dashparni Ark stimulate Systemic Acquired Resistance (SAR) in treated crop plants?",
        "options": {
            "A": "By transferring viral genes into plant chromosomes",
            "B": "Diverse botanical elicitors trigger the plant's salicylic acid and jasmonic acid defense pathways, synthesizing PR proteins and phytoalexins",
            "C": "By blocking sunlight from hitting plant stomata",
            "D": "By raising soil pH to 14.0"
        },
        "correctOption": "B",
        "explanation": "Phytochemical elicitors in Dashparni Ark trigger the host plant's internal immune signaling (SAR), accelerating the production of pathogenesis-related (PR) proteins.",
        "tags": ["SAR", "Plant Immunity", "Dashparni Ark"]
    },
    {
        "id": "AGR217-U4-MCQ38",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "Why is spraying botanical concoctions recommended during early morning or late evening hours rather than midday?",
        "options": {
            "A": "Photodegradation of active azadirachtin/capsaicin compounds by UV rays and rapid midday droplet evaporation are minimized",
            "B": "Insects only breathe air during nighttime hours",
            "C": "Cow urine catches fire when exposed to noon sunlight",
            "D": "Knapsack sprayers cannot function above 25°C"
        },
        "correctOption": "A",
        "explanation": "Midday heat and intense UV radiation break down delicate botanical active principles (like azadirachtin) and cause rapid evaporation, leading to scorch marks on leaves.",
        "tags": ["Application Timing", "Photodegradation", "UV Stability"]
    },
    {
        "id": "AGR217-U4-MCQ39",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "What nematicidal compound is synthesized and released by the root exudates of African marigold (Tagetes spp.)?",
        "options": {
            "A": "Alpha-terthienyl",
            "B": "Atrazine",
            "C": "Carbofuran",
            "D": "Glyphosate"
        },
        "correctOption": "A",
        "explanation": "Roots of Tagetes exude alpha-terthienyl, a photo-activated polythienyl compound that provides exceptional nematicidal action against Meloidogyne root-knot nematodes.",
        "tags": ["Alpha-Terthienyl", "Marigold", "Nematicide"]
    },
    {
        "id": "AGR217-U4-MCQ40",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "How do border rows of sorghum or pearl millet protect low-canopy vegetable fields from viral vector insects?",
        "options": {
            "A": "They act as physical windbreaks that filter out drifting airborne aphid and whitefly vectors",
            "B": "They produce ultrasonic sound waves that repel insects",
            "C": "They poison the ground water with tannins",
            "D": "They attract lightning strikes"
        },
        "correctOption": "A",
        "explanation": "Dense tall border crops like sorghum act as mechanical wind barriers, catching wind-borne aphids and whiteflies before they reach susceptible vegetable crops.",
        "tags": ["Border Crops", "Barrier Effect", "Vector Control"]
    },
    {
        "id": "AGR217-U4-MCQ41",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "Why does Neemastra exhibit negligible toxicity toward adult honeybees and predatory ladybird beetles?",
        "options": {
            "A": "Beneficial insects drink only distilled water",
            "B": "Azadirachtin acts primarily through ingestion by phytophagous chewing/sucking insects rather than broad contact neurotoxicity against adult pollinators",
            "C": "Honeybees possess special enzymes that convert azadirachtin into honey",
            "D": "Neemastra has a repelling color that bees cannot see"
        },
        "correctOption": "B",
        "explanation": "Azadirachtin is primarily an antifeedant and stomach poison requiring ingestion of plant sap/tissues; adult non-target pollinators visiting flowers for nectar remain largely unaffected.",
        "tags": ["Selectivity", "Pollinators", "Ecological Safety"]
    },
    {
        "id": "AGR217-U4-MCQ42",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "What potent toxic alkaloid is derived from Datura leaves when used in preparing Brahmastra or Agniastra?",
        "options": {
            "A": "Hyoscyamine and scopolamine (tropane alkaloids)",
            "B": "Penicillin",
            "C": "Caffeine",
            "D": "Chlorophyll"
        },
        "correctOption": "A",
        "explanation": "Datura species synthesize tropane alkaloids (hyoscyamine, scopolamine, atropine) that block muscarinic receptors and act as potent insect antifeedants.",
        "tags": ["Datura", "Tropane Alkaloids", "Toxicity"]
    },
    {
        "id": "AGR217-U4-MCQ43",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "What is the shelf life of properly filtered Dashparni Ark stored in sealed containers in a cool, shaded environment?",
        "options": {
            "A": "24 hours only",
            "B": "Up to 6 months",
            "C": "50 years",
            "D": "3 days"
        },
        "correctOption": "B",
        "explanation": "Because of its high concentration of antimicrobial metabolites, tannins, and organic salts, filtered Dashparni Ark remains active for up to 6 months.",
        "tags": ["Shelf Life", "Dashparni Ark", "Storage"]
    },
    {
        "id": "AGR217-U4-MCQ44",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "What is the primary mode of action of sour buttermilk spray in suppressing fungal spore germination on crop leaves?",
        "options": {
            "A": "Severe low pH (~3.5-4.0) combined with lactic acid disrupts fungal plasma membrane electrochemical gradients",
            "B": "It coats the leaf with thick synthetic plastic resin",
            "C": "It removes all nitrogen from the leaf tissue",
            "D": "It heats the leaf surface to 70°C"
        },
        "correctOption": "A",
        "explanation": "Lactic acid lowers leaf surface pH, while antimicrobial bacteriocins and copper lactate disrupt fungal spore germination and cell wall integrity.",
        "tags": ["Lactic Acid", "Fungal Inhibition", "Membrane Disruption"]
    },
    {
        "id": "AGR217-U4-MCQ45",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "How does maintaining flowering insectary plants (e.g., coriander, fennel, buckwheat) on bunds support natural pest control?",
        "options": {
            "A": "They supply nectar and pollen needed to sustain adult parasitoid wasps (Trichogramma) and hoverflies",
            "B": "Their flowers emit loud buzzing noises",
            "C": "They absorb all groundwater so pests die of thirst",
            "D": "They trap pests on sticky flower petals"
        },
        "correctOption": "A",
        "explanation": "Adult parasitoid micro-wasps and hoverflies require floral nectar and pollen for energy and egg maturation; insectary plants ensure high parasitoid longevity.",
        "tags": ["Insectary Plants", "Parasitoid Conservation", "Floral Resources"]
    },

    # ========================== HARD (15) ==========================
    {
        "id": "AGR217-U4-MCQ46",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Hard",
        "questionText": "Which theoretical ecological concept explains why chemical insecticides induce pest outbreaks by causing greater mortality to higher-trophic-level predators than to herbivore pests?",
        "options": {
            "A": "The Volterra Principle (or Volterra Effect)",
            "B": "The Liebig Law of Minimum",
            "C": "The Hardy-Weinberg Equilibrium",
            "D": "The Doppler Effect"
        },
        "correctOption": "A",
        "explanation": "The Volterra Principle demonstrates mathematically that general biocides disproportionately destroy predator populations, resulting in an exponential net increase in prey (pest) densities.",
        "tags": ["Volterra Principle", "Trophic Collapse", "Predator-Prey"]
    },
    {
        "id": "AGR217-U4-MCQ47",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Hard",
        "questionText": "At the molecular level, why do neem-derived triterpenoids prevent the emergence of rapid insect physiological resistance compared to synthetic pyrethroids?",
        "options": {
            "A": "Neem contains a complex cocktail of over 50 bio-active limonoids (azadirachtin, salannin, nimbin, meliantriol) hitting multiple cellular targets simultaneously",
            "B": "Azadirachtin mutates insect genes into plant genes",
            "C": "Insects are unable to swallow neem molecules",
            "D": "Neem operates exclusively by physical freezing"
        },
        "correctOption": "A",
        "explanation": "Single-molecule synthetic insecticides rapidly select for single point mutations (e.g., kdr in sodium channels). Neem's multi-component limonoid blend prevents target-site resistance.",
        "tags": ["Resistance Management", "Limonoids", "Phytochemistry"]
    },
    {
        "id": "AGR217-U4-MCQ48",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Hard",
        "questionText": "What specific biochemical interaction occurs when capsaicin from Agniastra encounters insect cuticular sensory papillae?",
        "options": {
            "A": "It opens calcium-permeable transient receptor potential (TRP) channels, triggering continuous neuro-sensory discharge and gustatory rejection",
            "B": "It converts cuticular waxes into gaseous nitrogen",
            "C": "It hydrolyzes chitin into crystalline quartz",
            "D": "It dissolves the exoskeleton into pure water"
        },
        "correctOption": "A",
        "explanation": "Capsaicin activates insect TRPV channels, causing intense calcium influx, neurotoxic depolarization, gut paralysis, and cessation of feeding.",
        "tags": ["Capsaicin", "TRPV Channels", "Neurophysiology"]
    },
    {
        "id": "AGR217-U4-MCQ49",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Hard",
        "questionText": "Why is Pongamia pinnata (Karanj) leaf extract highly synergistic when boiled with neem in Brahmastra?",
        "options": {
            "A": "Karanjin acts as a natural cytochrome P450 monooxygenase inhibitor, preventing insect detoxifying enzymes from breaking down neem limonoids",
            "B": "It neutralizes all bitter taste so insects consume it faster",
            "C": "It produces methane gas that asphyxiates insects",
            "D": "It attracts honeybees to attack caterpillars"
        },
        "correctOption": "A",
        "explanation": "Karanjin and associated furanoflavonoids in Karanj inhibit insect cytochrome P450 detoxification enzymes, synergizing the toxicity of neem and other alkaloids.",
        "tags": ["Karanjin", "Enzyme Inhibition", "Synergism"]
    },
    {
        "id": "AGR217-U4-MCQ50",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Hard",
        "questionText": "During the 40-day fermentation of Dashparni Ark, what microbiological and chemical evolution ensures the extraction of hydrophobic terpenes?",
        "options": {
            "A": "Bacterial secretion of bio-surfactants (rhamnolipids and lipopeptides) and organic acids solubilizes lipophilic botanical terpenes into the aqueous phase",
            "B": "The liquid boils spontaneously due to nuclear fission",
            "C": "Adding synthetic ethanol dissolves all lipids",
            "D": "Earthworms swallow the leaves and excrete pure oil"
        },
        "correctOption": "A",
        "explanation": "Fermenting microbes secrete bio-surfactants and organic acids that emulsify and solubilize hydrophobic terpenes and alkaloids into the liquid extract.",
        "tags": ["Bio-surfactants", "Dashparni Ark", "Lipophilic Extraction"]
    },
    {
        "id": "AGR217-U4-MCQ51",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Hard",
        "questionText": "Why does Calotropis procera contribute potent toxic cardiac glycosides when incorporated into Dashparni Ark?",
        "options": {
            "A": "Calotropin and uscharin inhibit insect Na+/K+-ATPase membrane pumps, inducing cellular osmotic collapse",
            "B": "They convert insect hemolymph into solid wood",
            "C": "They prevent sunlight from entering through the spiracles",
            "D": "They act as artificial sweeteners"
        },
        "correctOption": "A",
        "explanation": "Calotropis contains cardenolides like calotropin and calactin that inhibit Na+/K+-ATPase enzyme complexes, disrupting membrane potentials across insect nerves and muscles.",
        "tags": ["Calotropin", "Cardiac Glycosides", "Cellular Inhibition"]
    },
    {
        "id": "AGR217-U4-MCQ52",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "What role do milk lactoferrins and salts play in Sonthastra when combating powdery mildew (Erysiphe spp.) infections?",
        "options": {
            "A": "Lactoferrin chelates essential iron required for fungal pathogenesis, while milk salts alter osmotic pressure and induce hyphal collapse",
            "B": "Milk creates a sugary crust that feeds the fungus until it explodes",
            "C": "Milk proteins turn into nylon threads that entangle spores",
            "D": "Milk evaporates to leave pure limestone"
        },
        "correctOption": "A",
        "explanation": "Lactoferrin in milk sequesters free iron ions vital for fungal growth, while alkaline salts and antimicrobial peptides directly damage fungal hyphal walls.",
        "tags": ["Lactoferrin", "Iron Chelation", "Powdery Mildew"]
    },
    {
        "id": "AGR217-U4-MCQ53",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "How does the Push-Pull strategy utilize volatile chemicals emitted by Melinis minutiflora (molasses grass)?",
        "options": {
            "A": "It emits (E)-beta-farnesene and (E)-4,8-dimethyl-1,3,7-nonatriene that repel stem borer moths while attracting natural parasitoid wasps (Cotesia sesamiae)",
            "B": "It secretes sticky molasses that physically glues moths to the ground",
            "C": "It absorbs insect pheromones into its chloroplasts",
            "D": "It releases chlorine gas into the atmosphere"
        },
        "correctOption": "A",
        "explanation": "Molasses grass releases herbivore-induced plant volatile mimics that repel female stem borer moths while simultaneously attracting parasitoid wasps.",
        "tags": ["Semiochemicals", "Cotesia", "Push-Pull Volatiles"]
    },
    {
        "id": "AGR217-U4-MCQ54",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Hard",
        "questionText": "Why does Natural Farming emphasize maintaining a silica-rich epidermis through native mulch decomposition to deter boring larvae?",
        "options": {
            "A": "Biogenic opal phytoliths embedded in epidermal cells cause severe mechanical wear and fracture of larval mandibles",
            "B": "Silica acts as an electrical insulator stopping photosynthesis",
            "C": "Silica attracts predatory spiders via magnetic resonance",
            "D": "Silica lowers leaf surface temperature below 0°C"
        },
        "correctOption": "A",
        "explanation": "Deposition of biogenic silica phytoliths strengthens cell walls and abrades the mandibles of chewing caterpillars, significantly slowing down feeding and larval development.",
        "tags": ["Phytoliths", "Biogenic Silica", "Mandibular Wear"]
    },
    {
        "id": "AGR217-U4-MCQ55",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Hard",
        "questionText": "How does salivary esterase from piercing-sucking aphids interact with dilute neem limonoids in plant phloem?",
        "options": {
            "A": "Aphid feeding is inhibited through gustatory chemoreceptor deterrence, inducing starvation before phloem sap can be ingested",
            "B": "Esterase converts azadirachtin into a nutrient hormone",
            "C": "Aphids digest azadirachtin into fat stores",
            "D": "Esterase neutralizes cow urine entirely"
        },
        "correctOption": "A",
        "explanation": "Neem limonoids trigger deterrent chemoreceptors in sensory sensilla, causing immediate stylet withdrawal, halting feeding, and inducing mortality through starvation.",
        "tags": ["Stylet Withdrawal", "Antifeedant", "Aphid Physiology"]
    },
    {
        "id": "AGR217-U4-MCQ56",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Hard",
        "questionText": "In preparing Agniastra, why is the heating process terminated once foaming ceases and the liquid darkens?",
        "options": {
            "A": "Prolonged over-boiling beyond 30 minutes causes thermal degradation and volatilization of heat-sensitive active compounds like nicotine and capsaicin",
            "B": "To prevent the earthen pot from turning into diamond",
            "C": "Because the liquid turns into poisonous solid pitch",
            "D": "Cow urine catches fire spontaneously after 30 minutes"
        },
        "correctOption": "A",
        "explanation": "Over-boiling volatilizes nicotine and denatures active allicin/capsaicin structures; gentle simmering ensures complete solvent extraction without thermal destruction.",
        "tags": ["Agniastra", "Thermal Degradation", "Extraction Kinetics"]
    },
    {
        "id": "AGR217-U4-MCQ57",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Hard",
        "questionText": "What is the biological function of adding fresh cow dung to Dashparni Ark during its fermentation phase?",
        "options": {
            "A": "It inoculates anaerobic cellulolytic and methanotrophic bacterial consortia that break down tough waxy leaf cuticles, releasing internal alkaloids",
            "B": "It turns the color green to camouflage the pot",
            "C": "It provides toxic heavy metals to poison insects",
            "D": "It acts as a physical filter to remove water"
        },
        "correctOption": "A",
        "explanation": "Native cow dung introduces robust consortia of cellulolytic and pectinolytic microorganisms that macerate fibrous plant cell walls, releasing intracellular secondary metabolites.",
        "tags": ["Cow Dung Inoculum", "Cellulolytic Microbes", "Dashparni Ark"]
    },
    {
        "id": "AGR217-U4-MCQ58",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "How does rhizosphere inoculation of Jeevamrit contribute to systemic disease suppression in aerial plant foliage?",
        "options": {
            "A": "PGPR strains (Bacillus and Pseudomonas) trigger Induced Systemic Resistance (ISR) via jasmonate/ethylene pathways throughout the host plant",
            "B": "Microbes physically travel through xylem vessels up into flower petals",
            "C": "Microbes drink all fungal spores from the air",
            "D": "Jeevamrit turns leaves into impermeable stone"
        },
        "correctOption": "A",
        "explanation": "Beneficial root-colonizing PGPR in Jeevamrit prime the plant's systemic defense pathways (ISR), conferring broad-spectrum resistance against foliar fungal blights and spots.",
        "tags": ["ISR", "PGPR", "Disease Suppression"]
    },
    {
        "id": "AGR217-U4-MCQ59",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "What chemical safety advantage does copper lactate formed in sour buttermilk offer over traditional Bordeaux mixture (copper sulfate + lime)?",
        "options": {
            "A": "Copper lactate operates at significantly lower elemental copper concentrations (grams vs kilograms), preventing toxic heavy metal accumulation in agricultural soils",
            "B": "Copper lactate contains zero copper atoms",
            "C": "Bordeaux mixture evaporates within 2 seconds",
            "D": "Copper lactate acts as a weed seed killer"
        },
        "correctOption": "A",
        "explanation": "Traditional Bordeaux mixture deposits massive amounts of persistent copper ions in topsoil. Copper lactate provides effective fungicidal activity with minimal elemental copper loading.",
        "tags": ["Copper Lactate", "Bordeaux Mixture", "Soil Toxicity"]
    },
    {
        "id": "AGR217-U4-MCQ60",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Hard",
        "questionText": "In agro-ecological theory, what constitutes the 'Functional Agrobiodiversity' threshold required to maintain natural biological control?",
        "options": {
            "A": "A multi-trophic habitat mosaic providing continuous alternative hosts, floral nectar, microclimatic refugia, and overwintering sites across space and time",
            "B": "Planting exactly 10,000 trees of a single timber species",
            "C": "Flooding the farm under 1 meter of standing water",
            "D": "Applying synthetic broad-spectrum granules once a week"
        },
        "correctOption": "A",
        "explanation": "Functional agrobiodiversity integrates structural spatial and temporal complexity (hedgerows, trap crops, polycultures) to sustain natural enemies year-round.",
        "tags": ["Functional Agrobiodiversity", "Habitat Mosaic", "EPM"]
    }
]

subjs = [
    # 8 SHORT_ANSWER (5 marks each, ~150-250 words)
    {
        "id": "AGR217-U4-SUB01",
        "syllabusTopic": TOPICS[0],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the concept of Ecological Pest Management (EPM) in Natural Farming and contrast it with chemical pest eradication.",
        "modelAnswer": """Ecological Pest Management (EPM) in Natural Farming is based on the biological reality that complete pest eradication is neither achievable nor ecologically desirable. In natural ecosystems, herbivorous insects exist in an evolutionary balance with predators, parasitoids, and entomopathogens. EPM focuses on maintaining insect pest populations below the Economic Threshold Level (ETL)—the population density at which pest management action must be initiated to prevent reaching the Economic Injury Level (EIL).

In contrast, chemical pest management operates on an eradication paradigm, employing broad-spectrum synthetic insecticides (organophosphates, synthetic pyrethroids, neonicotinoids). This approach produces severe ecological backlash:
1. Destruction of Non-Target Organisms: Chemical biocides kill beneficial natural predators (ladybird beetles, chrysopids, spiders, and parasitoid wasps) alongside target pests.
2. Pest Resurgence: Because prey species typically reproduce faster than predators, surviving pests rebound exponentially in a predator-free environment.
3. Secondary Pest Outbreaks: Minor pests previously kept under natural control (e.g., whiteflies, spider mites) multiply into devastating plagues once their natural predators are wiped out.

Natural Farming eliminates synthetic nitrogen fertilizers, which cause thin-walled, succulent cell growth. Instead, it relies on biogenic silica deposition and balanced nutrition, creating physically robust plants capable of resisting insect feeding while preserving natural trophic checks and balances.""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["EPM", "ETL", "Pest Resurgence", "Ecology"]
    },
    {
        "id": "AGR217-U4-SUB02",
        "syllabusTopic": TOPICS[1],
        "questionType": "SHORT_ANSWER",
        "questionText": "Detail the formulation protocol, active chemical constituents, and target pests of Neemastra.",
        "modelAnswer": """Neemastra is the primary on-farm botanical formulation in Natural Farming developed specifically for managing soft-bodied sucking pests and early-instar chewing caterpillars.

Formulation Protocol (Standard 1-Acre Batch):
- Ingredients: Fresh indigenous (desi) cow dung (5 kg), indigenous cow urine (5 L), crushed neem leaves or neem seed kernel powder (5 kg), and clean water (200 L).
- Preparation: In a 200 L barrel placed under shade, mix the cow dung and cow urine into 200 L of water. Add the crushed neem leaves and pulp. Stir the mixture vigorously in a clockwise direction with a wooden stick for 5 minutes. Cover with a breathable jute bag and allow it to ferment for 48 hours. Stir twice daily (morning and evening).
- Application: Strain through a double-layered khadi cloth and spray directly over 1 acre without further dilution.

Active Chemical Constituents:
Neemastra contains bioactive tetranortriterpenoids (limonoids), predominantly Azadirachtin (A through K isomers), Salannin, Nimbin, Nimbidin, and Meliantriol. Cow urine supplies hippuric acid, benzoic acid, and nitrogenous bio-surfactants.

Mode of Action and Target Pests:
Azadirachtin acts as an antifeedant, oviposition deterrent, and insect growth regulator (IGR) that disrupts ecdysone titers, preventing successful molting. Neemastra effectively controls aphids, jassids, whiteflies, thrips, spider mites, and neonate caterpillars in paddy, cotton, pulses, and vegetables.""",
        "marks": 5,
        "bloomLevel": "Apply",
        "tags": ["Neemastra", "Azadirachtin", "Formulation", "Sucking Pests"]
    },
    {
        "id": "AGR217-U4-SUB03",
        "syllabusTopic": TOPICS[2],
        "questionType": "SHORT_ANSWER",
        "questionText": "Describe the preparation protocol and application dosage of Brahmastra against leaf-eating caterpillars.",
        "modelAnswer": """Brahmastra is a high-potency boiled botanical decoction formulated using five plant species that cattle and goats naturally avoid grazing due to unpalatable bitter alkaloids and secondary defense compounds.

Preparation Protocol:
1. Plant Selection: Crushed neem leaves (2 kg) are combined with 2 kg each of leaves from four other ungrazed plant species. Suitable options include Custard apple (Annona squamosa), Karanj (Pongamia pinnata), Castor (Ricinus communis), Calotropis (Calotropis procera / Aak), Lantana camara, or Datura metel.
2. Maceration: The selected 10 kg of mixed leaves are thoroughly pounded into a coarse paste.
3. Decoction: The paste is placed in an earthen or copper pot containing 10 liters of native cow urine. The mixture is heated slowly over a low flame and brought to a gentle boil for 15 to 20 minutes until the liquid darkens and froth settles.
4. Maturation: The vessel is covered and kept in the shade for 24 to 48 hours to cool and steep, with brief daily stirring.
5. Filtration: The matured decoction is filtered through a fine khadi mesh and bottled in dark glass or high-density containers.

Application Dosage and Mode of Action:
Dilute 2 to 3 liters of concentrated Brahmastra extract in 100 liters of water per acre (approx. 400–500 mL per 15-liter knapsack sprayer). Brahmastra acts as a combined contact repellent and stomach poison, effectively suppressing Helicoverpa pod borers, Spodoptera armyworms, semi-loopers, and leaf rollers.""",
        "marks": 5,
        "bloomLevel": "Apply",
        "tags": ["Brahmastra", "Preparation", "Caterpillars", "Dosage"]
    },
    {
        "id": "AGR217-U4-SUB04",
        "syllabusTopic": TOPICS[2],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the composition and biochemical action of Agniastra against boring insect complexes.",
        "modelAnswer": """Agniastra ('Fire Weapon') is an intensely pungent, thermogenic botanical extract designed to control cryptic and deeply boring insect pests that evade conventional surface sprays.

Composition (for 1 Acre Coverage):
- Indigenous cow urine: 10 liters
- Pungent green chilli paste (Capsicum annuum): 500 g
- Native garlic bulb paste (Allium sativum): 500 g
- Dry tobacco leaf powder or bidi waste (Nicotiana tabacum): 1 kg (or Datura leaves)
- Crushed neem leaves (Azadirachta indica): 5 kg

Preparation and Boiling:
All crushed ingredients are mixed into 10 L of cow urine in an earthen or stainless steel pot. The mixture is boiled on low heat for 15 to 30 minutes, cooled, and steeped for 48 hours in shade. It is then filtered carefully through muslin cloth.

Biochemical Action:
1. Capsaicin: Green chillies provide capsaicin, which activates sensory TRP ion channels on insect cuticles and mouthparts, causing severe burning sensation, uncoordinated movement, and cessation of feeding.
2. Nicotine: Tobacco supplies nicotine, an agonist of insect nicotinic acetylcholine receptors (nAChR), causing nervous excitation, tremors, and paralysis.
3. Allicin: Garlic delivers organosulfur allicin, which damages microbial cell membranes and acts as a volatile repeller.
4. Azadirachtin: Neem supplies limonoids that disrupt molting and metamorphosis.

When sprayed at 2 to 2.5 L per 100 L water, Agniastra penetrates leaf folds, floral squares, and stalk crevices to control paddy stem borers, cotton bollworms, and brinjal shoot borers.""",
        "marks": 5,
        "bloomLevel": "Understand",
        "tags": ["Agniastra", "Biochemistry", "Capsaicin", "Stem Borers"]
    },
    {
        "id": "AGR217-U4-SUB05",
        "syllabusTopic": TOPICS[3],
        "questionType": "SHORT_ANSWER",
        "questionText": "Discuss the criteria for selecting the ten plant species used in preparing Dashparni Ark.",
        "modelAnswer": """The formulation of Dashparni Ark ('Ten-Leaf Extract') relies on strict ecological and ethnobotanical selection criteria to assemble a broad-spectrum, multi-alkaloid defense shield against insect pests:

Selection Criteria:
1. Non-Palatability to Herbivores: The primary rule in Natural Farming is selecting plants that domestic cattle and goats naturally refuse to graze. Livestock avoidance indicates the presence of bitter alkaloids, latex, cardenolides, or toxic polyphenols that act as natural insect repellents.
2. Diversity of Secondary Metabolites: The ten species must represent diverse chemical families rather than a single group:
   - Limonoids/Triterpenoids: Neem (Azadirachta indica) and Chinaberry (Melia azedarach).
   - Furanoflavonoids: Karanj (Pongamia pinnata) for cytochrome P450 enzyme inhibition.
   - Cardiac Glycosides/Latex: Calotropis procera (Madar/Aak) and Nerium oleander (Kaner).
   - Tropane Alkaloids: Datura metel (Dhatura) for nervous inhibition.
   - Annonaceous Acetogenins: Sitaphal (Annona squamosa) for mitochondrial complex I inhibition.
   - Tannins and Essential Terpenes: Guava (Psidium guajava) and Lantana camara.
   - Ricinine: Castor (Ricinus communis).
   - Papain and Glucosinolates: Papaya (Carica papaya) or Moringa oleifera.
3. Local Availability and Zero Cost: Plants must grow abundantly in local village common lands, field bunds, or wastelands so that farmers incur zero cash input costs.

Combining 2 kg of each of these ten species with cow dung, urine, chillies, garlic, and turmeric produces a stable 40-day fermented bio-repellent.""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["Dashparni Ark", "Plant Selection", "Ethnobotany", "Secondary Metabolites"]
    },
    {
        "id": "AGR217-U4-SUB06",
        "syllabusTopic": TOPICS[4],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the preparation and fungicidal mechanism of fermented sour buttermilk (Chhachh) with copper.",
        "modelAnswer": """Fermented sour buttermilk (Khatta Chhachh) enriched with copper is a cornerstone bio-fungicide in Natural Farming, offering an effective biological alternative to synthetic chemical fungicides and toxic Bordeaux mixture.

Preparation Protocol:
Five liters of fresh buttermilk churned from indigenous cow milk are placed in an earthen or wide-mouthed clay pot. A cleaned copper plate, copper wire, or copper vessel is submerged in the buttermilk. The container is covered with a muslin cloth and kept in shade for 5 to 7 days. As fermentation progresses, lactic acid bacteria proliferate, and the submerged copper reacts with organic acids, imparting a characteristic greenish-blue hue to the liquid.

Fungicidal Mechanism:
1. Lactic Acid and Low pH: Proliferating Lactobacillus spp. ferment residual lactose into lactic acid, dropping the pH to approximately 3.5–4.0. This acidic environment inhibits fungal spore germination and disrupts fungal hyphal membrane potential.
2. Copper Lactate Formation: Lactic acid reacts slowly with metallic copper to form bio-active copper lactate [Cu(C3H5O3)2]. Soluble copper ions bind to fungal cellular enzymes and disrupt membrane integrity without accumulating toxic elemental copper residues in the soil.
3. Bio-protective Metabolites: The fermented culture generates bacteriocins, hydrogen peroxide, and organic acids that suppress phytopathogenic bacteria.

Application:
Dilute 5 L of filtered sour buttermilk in 100 L of water per acre. It provides outstanding control against powdery mildew, downy mildew, Cercospora leaf spots, and bacterial blights in cucurbits, pulses, and orchards.""",
        "marks": 5,
        "bloomLevel": "Apply",
        "tags": ["Sour Buttermilk", "Copper Lactate", "Bio-fungicide", "Mildew"]
    },
    {
        "id": "AGR217-U4-SUB07",
        "syllabusTopic": TOPICS[4],
        "questionType": "SHORT_ANSWER",
        "questionText": "How does trap cropping with African marigold (Tagetes spp.) protect crops from both insect pests and nematodes?",
        "modelAnswer": """Trap cropping with African marigold (Tagetes erecta / Tagetes patula) exemplifies multi-functional ecological engineering in Natural Farming by providing simultaneous above-ground pest diversion and below-ground nematode suppression:

1. Above-Ground Insect Pest Trapping:
- Target Pest: Helicoverpa armigera (Gram pod borer / Tomato fruit borer) and Spodoptera litura.
- Mechanism: Female moths exhibit a strong sensory preference for the bright yellow-orange floral volatiles and nectar of marigold compared to main crops like tomato, chickpea, pigeonpea, or cotton.
- Implementation: Planting one row of marigold for every 8 to 16 rows of the main crop lures adult moths to oviposit on marigold floral buds. These eggs and young larvae can be visually inspected and manually gathered, or left to be parasitized by natural enemies, sparing the valuable cash crop from severe damage.

2. Below-Ground Nematicidal Action:
- Target Parasites: Meloidogyne incognita (root-knot nematode) and Pratylenchus penetrans (lesion nematode).
- Mechanism: Marigold roots synthesize and exude alpha-terthienyl, a photo-activated polythienyl compound. When endoparasitic nematodes penetrate marigold roots, plant peroxidase enzymes trigger the release of reactive singlet oxygen from alpha-terthienyl, destroying nematode cuticles and digestive tracts.

Marigold thus acts as an integrated bio-control barrier that protects both foliage and roots without synthetic chemicals.""",
        "marks": 5,
        "bloomLevel": "Understand",
        "tags": ["Trap Cropping", "Marigold", "Helicoverpa", "Nematodes"]
    },
    {
        "id": "AGR217-U4-SUB08",
        "syllabusTopic": TOPICS[4],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the setup and ecological function of T-shaped bird perches in natural pest regulation.",
        "modelAnswer": """T-shaped bird perches (T-perches) are simple, zero-cost cultural tools in Natural Farming that convert avian biodiversity into an active biological pest control service.

Setup and Installation:
- Construction: Two dried wooden or bamboo poles are nailed or tied together to form a 'T' shape. The vertical pole is 5 to 6 feet long, while the horizontal crossbar is approximately 1.5 to 2 feet wide, providing a comfortable landing perch.
- Density and Height: Install 20 to 25 T-perches uniformly per acre. The horizontal crossbar must stand 1 to 2 feet above the top of the crop canopy so that birds have an unobstructed view of the field.
- Placement Timing: Perches should be installed 25 to 30 days after sowing or transplanting, coinciding with the early vegetative and flowering stages when caterpillar emergence peaks.

Ecological Function:
1. Insectivorous Bird Attraction: The perches provide roosting and hunting platforms for predatory birds such as the Black Drongo (Dicrurus macrocercus), Indian Roller (Coracias benghalensis), Common Myna (Acridotheres tristis), and Pied Bushchat.
2. Predation: Birds perch during peak hunting hours (early morning and twilight) and dive to seize large chewing caterpillars, including Helicoverpa armigera, Spodoptera litura, grasshoppers, and cutworms.
3. Guano Deposition: Bird droppings deposited around perches contribute small amounts of organic nitrogen and phosphorus to the soil.

T-perches significantly reduce caterpillar densities without toxic chemical residues or recurring financial expenditure.""",
        "marks": 5,
        "bloomLevel": "Apply",
        "tags": ["Bird Perches", "Predators", "Avian Control", "Caterpillars"]
    },

    # 6 LONG_ANSWER (10 marks each, ~300-400 words)
    {
        "id": "AGR217-U4-SUB09",
        "syllabusTopic": TOPICS[0],
        "questionType": "LONG_ANSWER",
        "questionText": "Examine the ecological principles governing predator-prey dynamics in agro-ecosystems. How does Natural Farming foster beneficial insect biodiversity while avoiding secondary pest resurgence?",
        "modelAnswer": """Agro-ecosystems are dynamic biological networks governed by multi-trophic interactions among primary producers (crops), primary consumers (herbivorous insects), and secondary/tertiary consumers (predators and parasitoids). Understanding predator-prey balance is central to Natural Farming.

1. The Volterra Principle and Pest Resurgence in Chemical Agriculture:
Under conventional pesticide regimes, broad-spectrum chemicals cause what ecological mathematics describes as the Volterra Effect: general biocides disproportionately suppress predator populations compared to prey. Predators operate at higher trophic levels with lower reproductive rates, smaller population sizes, and longer generation intervals. Conversely, herbivore pests exhibit r-selected reproductive strategies (rapid life cycles, high fecundity). When chemical sprays destroy both groups, surviving resistant pests rebound exponentially in the absence of predatory pressure—a phenomenon termed 'pest resurgence.' Furthermore, minor pests previously held in check by generalist predators (e.g., tetranychid mites and whiteflies) multiply without competition, triggering devastating 'secondary pest outbreaks.'

2. Natural Farming Strategies for Conserving Beneficial Entomofauna:
Natural Farming prevents trophic collapse through deliberate ecological design:
- Elimination of Toxic Insecticides: Eliminating broad-spectrum chemical sprays protects critical natural enemies, including ladybird beetles (Coccinella septempunctata), green lacewings (Chrysoperla carnea), predatory hoverfly larvae (Syrphidae), ground beetles (Carabidae), and spider communities (Lycosidae).
- Maintenance of Functional Agrobiodiversity: Natural Farming incorporates companion crops, mixed polycultures, and flowering bund borders (coriander, fennel, dill, buckwheat). These floral strips provide vital alternate nectar and pollen resources that adult hoverflies and parasitoid wasps (Trichogramma, Bracon, Cotesia) require for egg maturation and extended lifespans.
- Permanent Soil Cover and Straw Mulching: Shushka Acchadana creates an insulated, humid soil microclimate that shelters nocturnal predators, including carabid beetles, staphylinid beetles, and wolf spiders, allowing them to forage actively across the crop canopy.
- Plant Physiological Resistance: By discarding synthetic water-soluble urea in favor of biological nitrogen mineralization from Jeevamrit, Natural Farming avoids the formation of watery, succulent tissues with excess free amino acids. Reinforced with biogenic silica phytoliths from crop residues, plant cell walls become physically tough, reducing insect feeding rates and keeping pest densities permanently below the Economic Threshold Level (ETL).""",
        "marks": 10,
        "bloomLevel": "Analyze",
        "tags": ["Predator-Prey Dynamics", "Volterra Principle", "Beneficial Insects", "Agrobiodiversity"]
    },
    {
        "id": "AGR217-U4-SUB10",
        "syllabusTopic": TOPICS[1],
        "questionType": "LONG_ANSWER",
        "questionText": "Provide an in-depth comparative analysis of the formulation protocols, active phytochemical profiles, biochemical modes of action, and target pest spectra of Neemastra and Brahmastra.",
        "modelAnswer": """Neemastra and Brahmastra represent two foundational on-farm botanical concoctions in Natural Farming, each tailored to distinct pest complexes and crop phenological stages.

1. Formulation Protocols and Extraction Methods:
- Neemastra: Prepared via cold anaerobic/microaerophilic fermentation. Fresh native cow dung (5 kg), native cow urine (5 L), and crushed neem leaves or neem seed kernel powder (5 kg) are mixed in 200 L of water and fermented under shade for 48 hours with twice-daily stirring. The entire 200 L volume is strained and sprayed directly without further dilution.
- Brahmastra: Prepared via thermal decoction. A total of 10 kg of crushed leaves—2 kg neem leaves plus 2 kg each from four other ungrazed bitter/milky plant species (e.g., Custard apple, Karanj, Calotropis, Castor, or Datura)—are boiled in 10 L of native cow urine for 15 to 20 minutes in an earthen or copper pot. After steeping in shade for 24 to 48 hours, the concentrated dark decoction is filtered. It is applied at a dilution of 2 to 3 L per 100 L of water per acre.

2. Phytochemical Profiles:
- Neemastra: Dominated by tetranortriterpenoid limonoids from Azadirachta indica, including Azadirachtin (A, B, D, H, I isomers), Salannin, Nimbin, and Meliantriol, supplemented by cow urine metabolites (hippuric acid, benzoic acid, urea).
- Brahmastra: Contains a complex multi-plant cocktail of bitter alkaloids, cardenolides, and flavonoids, including Azadirachtin (neem), Anonaine (custard apple), Karanjin and pongamol (karanj), Ricinine (castor), and Calotropin/uscharin (Calotropis).

3. Biochemical Modes of Action:
- Neemastra: Functions primarily as an antifeedant, repellent, and insect growth regulator (IGR). Azadirachtin disrupts the release of prothoracicotropic hormone (PTTH) from the insect brain and lowers ecdysone titers in the hemolymph, preventing apolysis and molting in juvenile instars.
- Brahmastra: Combines stomach poisoning, contact neurotoxicity, and digestive enzyme inhibition. Karanjin inhibits insect cytochrome P450 enzymes, while anonaine and calotropin disrupt membrane transport and mitochondrial ATP synthesis, inducing paralysis and rapid feeding cessation.

4. Target Pest Spectra:
- Neemastra: Tailored for soft-bodied piercing-sucking insects (aphids, jassids, whiteflies, thrips, and red spider mites) and early first/second instar caterpillars.
- Brahmastra: Formulated for mature, defoliating caterpillars and borers, including Helicoverpa armigera, Spodoptera litura, cabbage semi-loopers, hairy caterpillars, and leaf folders.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Neemastra", "Brahmastra", "Phytochemistry", "Modes of Action", "Comparison"]
    },
    {
        "id": "AGR217-U4-SUB11",
        "syllabusTopic": TOPICS[2],
        "questionType": "LONG_ANSWER",
        "questionText": "Elaborate on the scientific rationale, chemical ingredients, preparation procedure, and application strategy for Agniastra in managing cryptic tissue-boring pests.",
        "modelAnswer": """Agniastra ('Fire Weapon') is an advanced thermal botanical formulation developed in Natural Farming specifically to combat destructive internal and cryptic insect pests, such as stem borers, pod borers, and bollworms, which feed within plant tissues and resist superficial contact sprays.

1. Scientific Rationale and Ingredient Selection:
Cryptic tissue-boring larvae (e.g., Scirpophaga incertulas in paddy, Pectinophora gossypiella in cotton, Leucinodes orbonalis in brinjal) bore into stems, floral buds, and fruits, shielding themselves from predators and standard bio-pesticides. Controlling them requires an intensely pungent, volatile, and penetrating decoction that irritates larval sensilla, disrupts nerve conduction, and provokes exit or mortality:
- Indigenous Cow Urine (10 L): Serves as an alkaline solvent, bio-surfactant, and source of penetrative benzoic and hippuric acids.
- Crushed Green Chillies (500 g): Provides capsaicin, a pungent alkaloid that triggers intense sensory irritation and cellular permeabilization.
- Native Garlic Bulbs (500 g): Contains alliin, converted by alliinase into allicin (diallyl thiosulfinate), which penetrates membranes and exhibits insecticidal and antimicrobial properties.
- Tobacco Leaves or Datura (1 kg): Delivers neurotoxic alkaloids (nicotine or hyoscyamine) that target acetylcholine receptors.
- Crushed Neem Leaves (5 kg): Provides azadirachtin and limonoids for growth regulation and feeding inhibition.

2. Preparation Procedure:
1. Pounding: Green chillies, peeled garlic, tobacco leaves, and neem leaves are thoroughly ground into fine pastes using a stone mortar.
2. Mixing: The pastes are transferred into an earthen or copper pot containing 10 L of fresh desi cow urine and stirred thoroughly.
3. Thermal Decoction: The pot is heated over a steady low flame until the liquid reaches a gentle boil. Boiling is continued for 15 to 30 minutes until surface foaming subsides and the decoction turns a dark brownish-black color.
4. Cooling and Steeping: The vessel is removed from heat, covered with an earthen lid, and kept under shade for 48 hours to steep and stabilize.
5. Filtration: The matured concoction is filtered through a double-layered khadi cloth and stored in clean, airtight glass or plastic carboys.

3. Application Strategy:
- Dosage: 2 to 2.5 liters of Agniastra stock solution per 100 liters of water per acre.
- Timing: Early morning or late afternoon sprays avoid rapid midday volatilization and prevent foliar phototoxicity.
- Canopy Penetration: Sprayed with fine hollow-cone nozzles to ensure coverage of leaf axils, terminal shoots, and floral buds.""",
        "marks": 10,
        "bloomLevel": "Apply",
        "tags": ["Agniastra", "Tissue Borers", "Capsaicin", "Nicotine", "Preparation"]
    },
    {
        "id": "AGR217-U4-SUB12",
        "syllabusTopic": TOPICS[3],
        "questionType": "LONG_ANSWER",
        "questionText": "Analyze the biochemical dynamics, fermentation microbiology, and multi-functional repellency mechanisms of Dashparni Ark over its 40-day preparation cycle.",
        "modelAnswer": """Dashparni Ark ('Ten-Leaf Extract') is the most comprehensive botanical bio-repellent in Natural Farming. Its distinctive efficacy relies on a protracted 30-to-45-day anaerobic/microaerophilic fermentation that extracts and transforms secondary metabolites from ten ungrazed medicinal plants.

1. Composition and Formulation Setup:
In a 200-liter shaded drum, 200 L of water is mixed with:
- Desi cow dung (5 kg) and native cow urine (10 L)
- Crushed green chillies (500 g), crushed native garlic (250 g), and raw turmeric paste (500 g)
- 2 kg crushed leaves from each of ten ungrazed plant species: Neem, Karanj, Calotropis, Custard Apple, Castor, Datura, Lantana, Nerium, Guava, and Papaya.

2. Fermentation Microbiology and Extraction Kinetics:
- Inoculation and Hydrolysis (Days 1–10): Cow dung introduces cellulolytic, pectinolytic, and lignolytic anaerobic bacteria (Ruminococcus, Clostridium, Fibrobacter). These microorganisms secrete extracellular cellulases and pectinases that break down tough leaf epidermal cuticles and waxy cutin layers, releasing vacuolar contents into the aqueous phase.
- Acidogenesis and Bio-surfactant Synthesis (Days 11–25): Fermenting bacteria produce organic acids (acetic, butyric, lactic acids), dropping the pH. Concurrently, microbial strains synthesize bio-surfactants (glycolipids and lipopeptides) that emulsify lipophilic, hydrophobic triterpenoids, terpenes, and sterols that would otherwise not dissolve in water.
- Alkaloid Stabilization (Days 26–45): Microbial enzymes gently hydrolyze plant glycosides, liberating active aglycones (free alkaloids, phenolic acids, flavonoids) into solution. Twice-daily clockwise stirring prevents surface scum formation and maintains uniform anaerobic digestion without putrefaction.

3. Multi-Functional Modes of Repellency and Suppression:
- Broad-Spectrum Gustatory Repellency: Upon foliar application (2–3 L in 100 L water per acre), the complex mix of bitter alkaloids (anonaine, karanjin, ricinine, daturine) coats crop surfaces. When herbivorous insects touch leaves, their sensilla styloconica trigger gustatory deterrence, causing immediate cessation of feeding.
- Oviposition Deterrence: Volatile terpenes and aromatic compounds mask the natural host plant odor cues, preventing adult moths and flies from identifying crops for egg deposition.
- Systemic Acquired Resistance (SAR): Diverse botanical elicitors stimulate host plant salicylic and jasmonic acid defense cascades, inducing synthesis of pathogenesis-related (PR) proteins and thickening cell walls against secondary fungal invasions.""",
        "marks": 10,
        "bloomLevel": "Analyze",
        "tags": ["Dashparni Ark", "Fermentation Microbiology", "Bio-surfactants", "SAR", "Repellency"]
    },
    {
        "id": "AGR217-U4-SUB13",
        "syllabusTopic": TOPICS[4],
        "questionType": "LONG_ANSWER",
        "questionText": "Formulate a comprehensive non-chemical disease management schedule for horticultural and cereal crops utilizing fermented sour buttermilk, Sonthastra, and cow urine-turmeric extracts.",
        "modelAnswer": """Fungal and bacterial phytopathogens present major challenges in crop production. In Natural Farming, disease management relies on bio-fungicidal formulations that leverage organic acids, metal lactates, phenolic phyto-inhibitors, and induced plant resistance without toxic synthetic residues.

1. Component Formulations and Modes of Action:
- Fermented Sour Buttermilk (Khatta Chhachh with Copper): Fresh cow buttermilk fermented for 5–7 days with a submerged copper plate generates lactic acid (lowering pH to ~3.8) and bio-active copper lactate [Cu(C3H5O3)2]. It acts as a contact bio-fungicide, lysing fungal hyphal membranes and halting spore germination.
- Sonthastra (Dry Ginger + Cow Milk): Dry ginger powder (200 g) boiled in 2 L water is blended with boiled, cooled, and skimmed native cow milk (2 L) and diluted in 200 L water. Gingerols and shogaols disrupt fungal ergosterol synthesis, while milk lactoferrins sequester iron and milk salts exert osmotic stress on germinating spores.
- Cow Urine-Turmeric Decoction: Fresh native cow urine (5 L) mixed with 500 g raw turmeric powder (Curcuma longa) in 100 L water. Curcumin and turmerone disrupt fungal plasma membranes and exhibit antiviral properties, while cow urine provides natural wetting and spreading agents.

2. Seasonal Disease Management Schedule:
- Stage 1: Seed / Seedling Treatment (Pre-Sowing):
  - Treat seeds with Beejamrit (containing cow dung, urine, lime, and virgin soil) to eliminate seed-borne pathogens (Fusarium, Bipolaris, Rhizoctonia) and stimulate early root colonization by antagonistic PGPR.
- Stage 2: Early Vegetative Stage (20–25 DAS / DAT):
  - Soil drenching and foliar spray of Jeevamrit (200 L/acre) to build antagonistic rhizosphere populations (Trichoderma, Bacillus subtilis) that suppress soil-borne damping-off, collar rot, and vascular wilts.
- Stage 3: Mid-Vegetative & Canopy Expansion Stage (40–45 DAS / DAT):
  - Foliar application of Fermented Sour Buttermilk with copper (5 L in 100 L water/acre). Provides preventive and curative suppression of powdery mildew, downy mildew, Cercospora leaf spots, and bacterial blight.
- Stage 4: Flowering and Grain / Fruit Formation Stage (60–75 DAS / DAT):
  - Foliar application of Sonthastra (diluted in 200 L water/acre) against sheath blight, anthracnose, Alternaria blight, and fruit rots.
- Stage 5: Humid Weather Disease Outbreak:
  - Immediate spray of Cow Urine + Turmeric decoction upon early detection of viral mosaics or bacterial leaf streaks.

This integrated calendar provides continuous protection while preventing chemical residues and pathogen resistance.""",
        "marks": 10,
        "bloomLevel": "Create",
        "tags": ["Disease Management Schedule", "Sour Buttermilk", "Sonthastra", "Turmeric", "Bio-fungicides"]
    },
    {
        "id": "AGR217-U4-SUB14",
        "syllabusTopic": TOPICS[4],
        "questionType": "LONG_ANSWER",
        "questionText": "Evaluate the architectural design and ecological mechanisms of the 'Push-Pull' strategy and multi-species trap cropping in sustainable pest management.",
        "modelAnswer": """The 'Push-Pull' strategy and multi-species trap cropping represent sophisticated agro-ecological engineering frameworks that control insect pests by manipulating their behavioral responses to semiochemicals and spatial plant architecture.

1. Architectural Framework of the Push-Pull Strategy:
Originally pioneered by ICIPE and Rothamsted Research, the Push-Pull system integrates intercrops and border crops around a primary cereal (maize, sorghum, pearl millet):
- The 'Push' Component (Intercrop): Silverleaf desmodium (Desmodium uncinatum) or Greenleaf desmodium is intercropped between cereal rows. Desmodium roots release volatile organic compounds, notably (E)-beta-ocimene and (E)-4,8-dimethyl-1,3,7-nonatriene (DMNT). These semiochemicals repel (push) ovipositing stem borer moths (Busseola fusca, Chilo partellus) away from the main cereal canopy. Additionally, Desmodium root exudates stimulate suicidal germination of the parasitic weed Striga hermonthica, providing simultaneous weed suppression.
- The 'Pull' Component (Border Trap Crop): Napier grass (Pennisetum purpureum) or Sudan grass (Sorghum sudanense) is planted in 3 to 4 dense concentric perimeter rows around the field. Napier grass emits volatile attractants at levels 100 times higher than maize, pulling stem borer moths toward the field perimeter. Critically, Napier grass produces a sticky gummy sap when larvae bore into its stems, trapping and killing over 80–90% of developing caterpillars before maturity.
- Parasitoid Recruitment: The volatiles emitted by the companion crops also act as synomones that recruit native parasitoid wasps (e.g., Cotesia sesamiae), elevating larval parasitism rates.

2. Multi-Species Trap Cropping Schemes:
Natural Farming incorporates strategic trap crop architectures tailored to specific cropping systems:
- Tomato / Cotton / Chickpea + Marigold (Tagetes erecta): Marigold planted every 8 to 10 rows attracts Helicoverpa armigera for egg laying while exuding alpha-terthienyl from roots to suppress root-knot nematodes.
- Cabbage / Cauliflower + Indian Mustard (Brassica juncea): Mustard planted in paired rows every 15 rows of cabbage concentrates Diamondback moth (Plutella xylostella) oviposition, sparing marketable cabbage heads.
- Castor Borders for Spodoptera: Planting castor around vegetable perimeters concentrates Spodoptera litura egg clusters for easy visual collection.

3. Agro-Ecological Benefits:
- Zero Synthetic Residues: Controls destructive borers and defoliators without synthetic insecticides.
- Climate Resilience: Fodder grasses (Napier) and legumes (Desmodium) double as livestock feed and nitrogen-fixing soil cover.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Push-Pull Strategy", "Desmodium", "Napier Grass", "Trap Cropping", "Ecological Engineering"]
    },

    # 3 COMPARISON (5 marks each, ~200-300 words)
    {
        "id": "AGR217-U4-SUB15",
        "syllabusTopic": TOPICS[2],
        "questionType": "COMPARISON",
        "questionText": "Compare Brahmastra and Agniastra in terms of formulation ingredients, preparation methods, biochemical potency, and primary target pest complexes.",
        "modelAnswer": """Brahmastra and Agniastra are two potent thermal botanical formulations in Natural Farming designed for distinct pest pressures:

1. Ingredients and Composition:
- Brahmastra: Uses crushed leaves from 5 plant species (2 kg neem leaves plus 2 kg each of 4 ungrazed species like Custard apple, Karanj, Calotropis, and Castor) boiled in 10 liters of native cow urine.
- Agniastra: Incorporates highly pungent and neurotoxic culinary and medicinal ingredients: 5 kg neem leaves, 1 kg dry tobacco powder, 500 g green chilli paste, and 500 g native garlic paste boiled in 10 liters of cow urine.

2. Preparation Method:
- Brahmastra: Boiled gently for 15–20 minutes until the volume slightly reduces, then allowed to cool and steep for 24–48 hours before filtering.
- Agniastra: Boiled vigorously on low heat for 15–30 minutes until surface foaming stops and the mixture turns dark brown/black, followed by a 48-hour steeping period.

3. Biochemical Potency:
- Brahmastra: Delivers a diverse profile of bitter alkaloids (anonaine, ricinine, karanjin) and limonoids that act primarily as stomach poisons and molting inhibitors.
- Agniastra: Exhibits significantly higher acute thermogenic potency due to capsaicin (sensory nerve irritant), nicotine (cholinergic neurotoxin), and allicin (membrane-permeabilizing organosulfur), giving it exceptional penetrative action.

4. Target Pests:
- Brahmastra: Best suited for foliar-feeding caterpillars, armyworms, semi-loopers, and leaf folders.
- Agniastra: Deployed when infestations cross critical damage thresholds and for internal cryptic borers (cotton bollworms, paddy stem borers, shoot and fruit borers).""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["Brahmastra", "Agniastra", "Comparison", "Pest Formulations"]
    },
    {
        "id": "AGR217-U4-SUB16",
        "syllabusTopic": TOPICS[3],
        "questionType": "COMPARISON",
        "questionText": "Compare Neemastra and Dashparni Ark regarding preparation duration, microbial fermentation mechanisms, active ingredient longevity, and spectrum of pest control.",
        "modelAnswer": """Neemastra and Dashparni Ark represent quick-acting vs long-fermented botanical management systems in Natural Farming:

1. Preparation Duration and Fermentation:
- Neemastra: Prepared via rapid 48-hour cold aerobic/microaerophilic fermentation of cow dung, cow urine, and neem leaves in 200 L of water.
- Dashparni Ark: Requires a prolonged 30-to-45-day anaerobic fermentation of 10 distinct ungrazed plant leaves (2 kg each), cow dung, cow urine, chillies, garlic, and turmeric in water.

2. Microbial Fermentation Mechanisms:
- Neemastra: Short-duration microbial activity primarily extracts water-soluble and polar triterpenoids with minimal enzymatic digestion of tough waxy plant tissues.
- Dashparni Ark: Sustained fermentation allows cellulolytic and pectinolytic bacteria to break down waxy plant cuticles, while microbial bio-surfactants solubilize hydrophobic terpenes and sterols into a stable liquid extract.

3. Active Ingredient Longevity (Shelf Life):
- Neemastra: Best used within 10 to 15 days of preparation, though it can last up to 6 months if stirred weekly; active azadirachtin degrades gradually in aqueous solution.
- Dashparni Ark: Highly stable shelf life of up to 6 months without loss of potency, preserved by high tannin, alkaloid, and organic acid concentrations.

4. Spectrum of Pest Control:
- Neemastra: Primarily effective against early-instar caterpillars and soft-bodied sucking insects (aphids, jassids, whiteflies, thrips).
- Dashparni Ark: Broad-spectrum bio-repellent effective against mature caterpillars, beetles, leafhoppers, bugs, and borers, while concurrently stimulating Systemic Acquired Resistance (SAR) against foliar fungal pathogens.""",
        "marks": 5,
        "bloomLevel": "Evaluate",
        "tags": ["Neemastra", "Dashparni Ark", "Comparison", "Fermentation Duration"]
    },
    {
        "id": "AGR217-U4-SUB17",
        "syllabusTopic": TOPICS[4],
        "questionType": "COMPARISON",
        "questionText": "Compare the fungicidal action of fermented sour buttermilk with that of conventional copper-based Bordeaux mixture, addressing soil ecology and eco-toxicity.",
        "modelAnswer": """Fermented sour buttermilk (with copper) and conventional Bordeaux mixture (copper sulfate + hydrated lime) differ markedly in their ecological footprints:

1. Chemical Composition and Concentration:
- Fermented Sour Buttermilk: Contains organic copper lactate [Cu(C3H5O3)2] formed by the reaction of microbial lactic acid with a metallic copper plate, supplemented by lactic acid (pH 3.5–4.0), bacteriocins, and peptides. Elemental copper concentration is very low (micro-gram to milligram levels).
- Bordeaux Mixture: An inorganic suspension of cupric hydroxide and calcium sulfate prepared by mixing 1% copper sulfate (CuSO4·5H2O) and 1% quicklime (CaO), delivering high concentrations of elemental copper (~2.5 kg copper per hectare per application).

2. Mechanism of Disease Suppression:
- Sour Buttermilk: Dual-action mechanism combining organic copper ion toxicity with lactic acid-mediated membrane depolarization and antagonistic bacteriocin action.
- Bordeaux Mixture: Operates strictly via high concentrations of free cupric ions (Cu2+) that denature fungal enzymes non-specifically upon contact.

3. Impact on Soil Ecology and Earthworms:
- Sour Buttermilk: Biodegradable organic acids and minimal copper leave zero toxic residues. It is harmless to beneficial soil earthworms, mycorrhizal fungi, and rhizosphere bacteria.
- Bordeaux Mixture: Non-biodegradable elemental copper accumulates persistently in topsoil. Chronic use leads to severe heavy metal phytotoxicity, decimates native earthworm populations, and inhibits soil dehydrogenase and nitrogenase enzyme activities.

4. Human and Crop Safety:
- Sour Buttermilk: Non-toxic to farm workers, zero pre-harvest interval (PHI), and causes no foliar russeting.
- Bordeaux Mixture: Corrosive, hazardous to applicator eyes/lungs, and frequently induces phytotoxic burning or fruit russeting on tender crops.""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["Sour Buttermilk", "Bordeaux Mixture", "Copper Toxicity", "Comparison"]
    },

    # 2 APPLICATION (10 marks each, ~300-400 words)
    {
        "id": "AGR217-U4-SUB18",
        "syllabusTopic": TOPICS[1],
        "questionType": "APPLICATION",
        "questionText": "A farmer growing Bt cotton observes an early-season influx of sucking pests (jassids, aphids, and whiteflies) followed by early bollworm square damage. Develop a step-by-step natural pest management plan detailing specific formulations, dosages, and cultural controls.",
        "modelAnswer": """Managing early-season sucking pests and emerging bollworm damage in cotton without synthetic pesticides requires a coordinated ecological intervention using on-farm botanical formulations, physical barriers, and biological conservation.

Phase 1: Immediate Field Assessment and Threshold Monitoring:
- Scout 20 random plants across the field. Monitor sucking pest intensity: Economic Threshold Levels (ETL) are 1–2 jassids/leaf, 10–15% plants infested with aphids, and 6–8 whiteflies/leaf. For bollworms, scout for flared squares (>10% damage).
- Install 10 yellow sticky traps per acre for whiteflies/aphids and 10 blue sticky traps for thrips at canopy height.
- Set up 5 pheromone traps per acre with gossyplure/helex lures to monitor adult bollworm moth flights.

Phase 2: Immediate Intervention for Sucking Pests (Days 1–3):
- Foliar Spray of Neemastra: Prepare a standard 200 L batch (5 kg cow dung, 5 L cow urine, 5 kg crushed neem leaves fermented 48 hrs). Strain through khadi cloth and spray undiluted (200 L/acre) using a hollow-cone nozzle, thoroughly coating the undersides of leaves where aphids and jassids congregate.
- Biochemical Mode: Azadirachtin and salannin deter feeding, while cow urine's natural surfactants enhance foliar wetting. Sucking pests experience stylet withdrawal and feeding cessation within 24 hours.

Phase 3: Managing Square Borer / Bollworm Damage (Days 7–10):
- High-Potency Agniastra Spray: If flared squares or larval borings exceed 5%, apply Agniastra. Dilute 2.5 L of Agniastra stock (boiled neem, tobacco, chilli, and garlic in cow urine) in 100 L of water per acre.
- Action: Capsaicin and nicotine penetrate floral bracts and squares, irritating concealed larvae and forcing them out onto foliage where they contact lethal residues or are seized by predators.
- Mechanical Sanitation: Hand-pick and destroy flared squares fallen on the ground to break the caterpillar life cycle.

Phase 4: Cultural and Ecological Fortification:
- Trap Cropping: Intercrop 1 row of African marigold (Tagetes erecta) for every 10 rows of cotton to attract Helicoverpa moths away from cotton squares. Plant border rows of castor around the field perimeter to trap Spodoptera egg masses.
- Erect T-Perches: Install 20 T-shaped wooden bird perches per acre 1 foot above the crop canopy to facilitate caterpillar predation by black drongos and rollers.
- Border Barrier: Maintain 3 rows of dense sorghum or pearl millet along field borders to mechanically intercept drifting wind-borne whiteflies.""",
        "marks": 10,
        "bloomLevel": "Apply",
        "tags": ["Cotton IPM", "Neemastra", "Agniastra", "Trap Crops", "Sticky Traps"]
    },
    {
        "id": "AGR217-U4-SUB19",
        "syllabusTopic": TOPICS[4],
        "questionType": "APPLICATION",
        "questionText": "During prolonged monsoon cloudiness and high humidity, an organic tomato and cucurbit grower reports outbreaks of powdery mildew, downy mildew, and fruit anthracnose. Design a curative and preventive bio-fungicidal protocol.",
        "modelAnswer": """Cloudy, warm, and hyper-humid weather creates ideal microclimatic conditions for phytopathogenic fungi. In tomato and cucurbits, powdery mildew (Erysiphe / Podosphaera), downy mildew (Pseudoperonospora cubensis), and anthracnose (Colletotrichum coccodes) can decimate yields. A multi-pronged non-chemical bio-fungicidal protocol must be executed immediately.

Step 1: Immediate Curative Spray with Fermented Sour Buttermilk (Day 1):
- Preparation: Retrieve 5-day-old sour buttermilk (Khatta Chhachh) fermented with a submerged copper plate. The solution should display a greenish tint indicating dissolved copper lactate.
- Dilution & Dosage: Mix 5 liters of strained buttermilk in 100 liters of clean water per acre (approx. 750 mL per 15-L knapsack sprayer).
- Spraying Technique: Spray during morning hours with fine misting nozzles, ensuring thorough coverage of both upper and lower leaf surfaces, particularly in cucurbits where downy mildew sporulates on leaf undersides.
- Mechanism: Lactic acid drops the surface pH to ~3.8, while copper lactate ruptures fungal hyphal walls and inhibits zoospore motility.

Step 2: Curative and Systemic Protection with Sonthastra (Day 4–5):
- Preparation: Boil 200 g dry ginger powder (Sonth) in 2 L water until reduced to 1 L. Boil 2 L raw cow milk separately, allow to cool, remove the top cream/fat layer, and mix with the ginger decoction.
- Dilution: Dilute into 200 liters of water and spray across the 1-acre crop canopy.
- Mechanism: Gingerols and shogaols exhibit potent antifungal activity against Colletotrichum anthracnose, while milk lactoferrin sequesters free iron and milk salts exert osmotic stress on germinating powdery mildew conidia.

Step 3: Cultural and Microclimatic Interventions:
- Trellising and Pruning: Stake indeterminate tomatoes and train cucurbits onto vertical bower/trellis networks. Prune lower senescent leaves within 15 cm of the soil surface to improve canopy airflow and eliminate humidity pockets.
- Soil Mulching (Shushka Acchadana): Spread a 3-inch layer of dry straw mulch over bare soil beneath vines to prevent rain droplets from splashing soil-borne fungal spores onto lower leaves.
- Avoid Overhead Wetting: Maintain irrigation in alternate furrows only, ensuring foliage remains completely dry during evening hours.

Step 4: Maintenance and Prophylaxis (Day 10–12):
- Apply cow urine-turmeric extract (5 L cow urine + 500 g turmeric in 100 L water) to seal wounded tissues and stimulate systemic acquired resistance (SAR).""",
        "marks": 10,
        "bloomLevel": "Apply",
        "tags": ["Fungal Protocol", "Sour Buttermilk", "Sonthastra", "Anthracnose", "Mildew"]
    },

    # 1 CASE_STUDY (10 marks, ~350-450 words)
    {
        "id": "AGR217-U4-SUB20",
        "syllabusTopic": TOPICS[0],
        "questionType": "CASE_STUDY",
        "questionText": "Case Study: In an intensive vegetable-growing cluster, excessive use of chemical pyrethroids and diamides led to total insecticide failure against Spodoptera frugiperda and tomato leaf miner (Tuta absoluta), accompanied by severe whitefly resurgence. A team of Natural Farming practitioners transitioned a 5-hectare village block to ecological pest management. Analyze the ecological mechanisms of this transition, detail the botanical and cultural interventions deployed, and evaluate the economic and ecological outcomes.",
        "modelAnswer": """Context and Agro-Ecological Crisis:
In an intensive vegetable cluster growing tomato, sweet corn, and cabbage, farmers applied weekly cocktails of synthetic pyrethroids, organophosphates, and diamides (chlorantraniliprole). Within four seasons, the system experienced acute pesticide treadmill failure:
1. Complete Insecticide Resistance: Target pests (Spodoptera frugiperda fall armyworm and Tuta absoluta leafminer) developed target-site mutations and amplified metabolic detoxifying enzymes (cytochrome P450 and esterases), rendering synthetic chemicals ineffective.
2. Predator Annihilation: Chemical applications wiped out native predators (Campoletis parasitoids, Orius insidious pirate bugs, chrysopids, and spiders).
3. Secondary Pest Outbreaks: Cotton whitefly (Bemisia tabaci) surged uncontrollably, transmitting Tomato Leaf Curl Virus (ToLCV) and causing 80% crop losses.

The Ecological Transition Strategy:
The Natural Farming team initiated a structured 3-phase ecological rehabilitation protocol across the 5-hectare contiguous block:

1. Immediate Toxin Moratorium and Botanical Knock-down:
- All synthetic pesticide sprays were immediately halted.
- To suppress the overwhelming armyworm and Tuta infestation, farmers prepared community batches of Agniastra and Brahmastra. Agniastra (boiled cow urine, neem, chillies, garlic, and tobacco) was sprayed at 2.5 L/100 L water. Capsaicin and allicin irritated hidden Tuta larvae within leaf mines, while nicotine provided acute knock-down of feeding armyworms.
- Dashparni Ark (matured 40 days using 10 local botanical species) was sprayed fortnightly at 3 L/100 L water to provide continuous gustatory antifeedant action and deter adult moth oviposition.

2. Habitat Engineering and Biological Re-balancing:
- Trap and Border Crop Architecture: Castor was sown every 10 meters along perimeter bunds to trap Spodoptera egg masses, which farm families collected manually. African marigold was interplanted (1:8 ratio) in tomatoes, diverting Helicoverpa. Three dense border rows of pearl millet and sorghum were planted around the perimeter to block wind-blown whiteflies.
- Avian and Insect Predator Conservation: 25 T-perches per hectare were installed. Within three weeks, insectivorous black drongos and babblers recolonized the fields, actively feeding on armyworm larvae. Bund strips of coriander, fennel, and marigold provided nectar that revived micro-hymenopteran parasitoid populations (Trichogramma and Bracon).

3. Outcomes and System Recovery:
- Pest Densities: Within 60 days, predatory insect populations (ladybirds, spiders, predatory mirid bugs) increased five-fold. Spodoptera and Tuta damage dropped below the Economic Threshold Level (under 5% leaf damage). Whitefly populations dropped by 78% due to border interception and predator recovery.
- Economic Impact: Farmers eliminated pesticide expenditures, saving Rs 18,000–25,000 per hectare. Marketable tomato yields stabilized at 92% of chemical benchmarks in Year 1, rising to 104% in Year 2 as biological soil fertility improved.
- Lesson: The case demonstrates that agro-ecosystem collapse caused by the pesticide treadmill can be reversed by combining targeted botanical formulations with habitat diversification and predator conservation.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Case Study", "Pesticide Treadmill", "Agniastra", "Tuta absoluta", "Ecosystem Recovery"]
    }
]

fcs = [
    {
        "id": "AGR217-U4-FC01",
        "front": "What is the primary goal of Ecological Pest Management (EPM)?",
        "back": "To keep pest populations below the Economic Threshold Level (ETL) through biological balance, rather than total chemical eradication.",
        "hint": "Maintains pests below ETL via biological checks",
        "syllabusTopic": TOPICS[0]
    },
    {
        "id": "AGR217-U4-FC02",
        "front": "What is 'Pest Resurgence'?",
        "back": "The rapid rebound of target pest populations to higher densities following pesticide application due to the destruction of their natural predators.",
        "hint": "Rebound of target pest after predators die",
        "syllabusTopic": TOPICS[0]
    },
    {
        "id": "AGR217-U4-FC03",
        "front": "What causes 'Secondary Pest Outbreaks' in chemical farming?",
        "back": "Broad-spectrum pesticides eliminate natural predators of previously harmless minor pests, causing them to multiply into major plagues.",
        "hint": "Minor pests becoming major after predators are wiped out",
        "syllabusTopic": TOPICS[0]
    },
    {
        "id": "AGR217-U4-FC04",
        "front": "What is the main active limonoid in neem responsible for growth disruption?",
        "back": "Azadirachtin—a tetranortriterpenoid that disrupts ecdysone titers and molting in juvenile insects.",
        "hint": "Azadirachtin (limonoid)",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U4-FC05",
        "front": "What are the standard ingredients in a 200 L batch of Neemastra?",
        "back": "5 kg desi cow dung, 5 L desi cow urine, 5 kg crushed neem leaves (or 2 kg neem seed powder), and 200 L water, fermented 48 hours.",
        "hint": "5 kg dung, 5 L urine, 5 kg neem in 200 L water",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U4-FC06",
        "front": "Which category of insect pests is primarily controlled by Neemastra?",
        "back": "Soft-bodied sucking pests (aphids, jassids, whiteflies, thrips, mites) and early neonate caterpillars.",
        "hint": "Piercing-sucking insects and neonate larvae",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U4-FC07",
        "front": "How many ungrazed plant species are boiled to prepare Brahmastra?",
        "back": "5 species (2 kg neem leaves plus 2 kg each of 4 other bitter/ungrazed plants) boiled in 10 L desi cow urine.",
        "hint": "5 distinct ungrazed plant species",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U4-FC08",
        "front": "What is the target pest spectrum of Brahmastra?",
        "back": "Mature chewing caterpillars, leaf-eating semi-loopers, armyworms (Spodoptera), and pod borers (Helicoverpa).",
        "hint": "Chewing caterpillars and defoliators",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U4-FC09",
        "front": "What pungent culinary ingredients are boiled in Agniastra?",
        "back": "500 g green chilli paste (capsaicin) and 500 g native garlic paste (allicin), along with tobacco/Datura and neem in cow urine.",
        "hint": "Green chilli, garlic, tobacco, and neem",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U4-FC10",
        "front": "What is the primary target pest complex of Agniastra?",
        "back": "Cryptic internal tissue borers (stem borers in paddy, bollworms in cotton, shoot/fruit borers in brinjal).",
        "hint": "Internal stem, pod, and fruit borers",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U4-FC11",
        "front": "How long must Dashparni Ark be fermented before use?",
        "back": "30 to 45 days (minimum 3 weeks) in shade with twice-daily stirring to fully extract secondary alkaloids.",
        "hint": "30 to 45 days of anaerobic fermentation",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U4-FC12",
        "front": "What is the shelf life of filtered Dashparni Ark?",
        "back": "Up to 6 months when stored in a cool, shaded environment in closed containers.",
        "hint": "Up to 6 months",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U4-FC13",
        "front": "What is the application dosage of Dashparni Ark per acre?",
        "back": "2 to 3 liters of concentrated extract diluted in 100 liters of water per acre.",
        "hint": "2-3 L in 100 L water/acre",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U4-FC14",
        "front": "What bio-active fungicide forms when sour buttermilk is fermented with copper?",
        "back": "Copper lactate [Cu(C3H5O3)2] alongside lactic acid, which ruptures fungal hyphae and inhibits spore germination.",
        "hint": "Copper lactate + lactic acid",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U4-FC15",
        "front": "What diseases are controlled by fermented sour buttermilk with copper?",
        "back": "Powdery mildew, downy mildew, Cercospora leaf spots, and citrus canker.",
        "hint": "Powdery and downy mildews, leaf spots",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U4-FC16",
        "front": "What are the two key ingredients in Sonthastra?",
        "back": "Dry ginger powder (Sonth, 200 g) boiled in water and combined with boiled, skimmed native cow milk (2 L).",
        "hint": "Dry ginger decoction + skimmed milk",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U4-FC17",
        "front": "Which insect pest lays eggs preferentially on African marigold trap crops?",
        "back": "Helicoverpa armigera (Gram pod borer / Tomato fruit borer).",
        "hint": "Helicoverpa armigera",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U4-FC18",
        "front": "What nematicidal compound is released by African marigold roots?",
        "back": "Alpha-terthienyl, which suppresses root-knot nematodes (Meloidogyne incognita).",
        "hint": "Alpha-terthienyl",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U4-FC19",
        "front": "How do T-shaped bird perches assist in caterpillar management?",
        "back": "They provide hunting perches for insectivorous birds (black drongos, rollers) that prey on large caterpillars.",
        "hint": "Hunting perches for insectivorous birds",
        "syllabusTopic": TOPICS[0]
    },
    {
        "id": "AGR217-U4-FC20",
        "front": "In the Push-Pull strategy, what are the roles of Desmodium and Napier grass?",
        "back": "Desmodium repels (pushes) stem borer moths with volatile terpenes, while border Napier grass attracts (pulls) and traps them.",
        "hint": "Desmodium pushes, Napier grass pulls and traps",
        "syllabusTopic": TOPICS[4]
    }
]

# Validation
print(f"MCQs: {len(mcqs)} (Easy: {sum(1 for m in mcqs if m['difficulty']=='Easy')}, Med: {sum(1 for m in mcqs if m['difficulty']=='Medium')}, Hard: {sum(1 for m in mcqs if m['difficulty']=='Hard')})")
print(f"Subjs: {len(subjs)} (Types: {[s['questionType'] for s in subjs]})")
print(f"FCs: {len(fcs)}")

u4_data = {
    "unitNumber": 4,
    "title": "Pest and Disease Management in Natural Farming",
    "shortDescription": "Comprehensive principles and practices of Ecological Pest Management (EPM), formulation and application of botanical bio-repellents (Neemastra, Brahmastra, Agniastra, Dashparni Ark), non-chemical disease management with sour buttermilk and Sonthastra, and cultural habitat engineering.",
    "estimatedReadTimeMinutes": 160,
    "syllabusTopics": TOPICS,
    "notes": u4_notes,
    "mcqs": mcqs,
    "subjectiveQuestions": subjs,
    "flashcards": fcs
}

with open("/Users/quantum/Downloads/padho lpu/scripts/generators/agr217_u4.py", "w") as f:
    f.write('"""AGR217 Unit 4 Data Generator: Pest and Disease Management"""\n\n')
    f.write('def get_unit4_data():\n')
    f.write(f'    return {repr(u4_data)}\n')

print("Successfully written agr217_u4.py!")
