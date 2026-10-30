import { UnitContent } from "./types";

export const unit2Content: UnitContent = {
  "unitNumber": 2,
  "title": "Bioherbicide Candidates \u2014 Microorganisms",
  "shortDescription": "Exploration of fungal and bacterial weed pathogens, Colletotrichum, Phoma, Puccinia, Alternaria, and Xanthomonas, rigorous host specificity testing protocols, fulfillment of Koch's postulates, and high-throughput screening for hypervirulent biocontrol strains.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
    "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
    "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
    "Koch's postulates and etiology confirmation for prospective weed pathogens",
    "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
  ],
  "notes": {
    "learningObjectives": [
      "Characterize the primary fungal genera utilized in bioherbicide formulations and their distinctive pathogenic mechanisms.",
      "Analyze the operational modes of bacterial bioherbicides, including vascular occlusion, deleterious rhizobacteria (DRB), and herbicidal phytotoxins.",
      "Apply Koch's postulates to verify etiology and pathogenic causality in prospective weed disease isolates.",
      "Execute the four-tier centrifugal phylogenetic host-range screening protocol to verify non-target crop safety.",
      "Design bioassay systems to screen, evaluate virulence kinetics, and select stable, hypervirulent microbial candidate strains."
    ],
    "sections": [
      {
        "id": "agr233-u2-sec1",
        "heading": "1. Fungal Pathogens as Bioherbicide Candidates",
        "content": "Plant-pathogenic fungi are the most widely exploited candidates for bioherbicides due to their ability to actively breach unbroken plant cuticles via mechanical turgor pressure and localized enzymatic degradation.\n\n### Prominent Fungal Genera in Weed Biocontrol:\n1. **Colletotrichum (Anthracnose Pathogens):**\n   - *Biology:* Ascomycete fungi characterized by the formation of acervuli containing falcate or cylindrical conidia embedded in a mucilaginous matrix, accompanied by melanized setae.\n   - *Infection Process:* Conidia adhere to the hydrophobic cuticular wax, germinate, and form melanized appressoria capable of exerting substantial osmotic hydrostatic pressure. They exhibit a hemibiotrophic lifestyle\u2014initially establishing asymptomatic biotrophic infection before transitioning to destructive necrotrophy accompanied by severe stem lesions and girdling.\n   - *Key Candidates:* *C. gloeosporioides* f. sp. *aeschynomene* (Northern jointvetch), *C. gloeosporioides* f. sp. *malvae* (Round-leaved mallow), *C. truncatum* (Hemp sesbania).\n\n2. **Phoma and Ascochyta (Coelomycetes):**\n   - *Biology:* Pycnidial fungi producing hyaline or pigmented conidia. Several species produce host-specific phytotoxins that trigger rapid leaf spot necrosis and stem cankers.\n   - *Key Candidates:* *Phoma macrostoma* for broadleaf weed control in turfgrass; *Phoma herbarum*.\n\n3. **Puccinia (Uredinales / Rust Fungi):**\n   - *Biology:* Obligate biotrophic basidiomycetes exhibiting complex macrocyclic or microcyclic life cycles. Rusts are extraordinarily host-specific, often restricted to a single plant species or even specific weed biotypes.\n   - *Key Candidates:* *Puccinia chondrillina* (Skeleton weed), *Puccinia canaliculata* (Yellow nutsedge), *Puccinia abrupta* var. *partheniicola* (Parthenium hysterophorus).\n\n4. **Alternaria and Fusarium:**\n   - *Alternaria:* Necrotrophs producing multicellular muriform dictyoconidia. They secrete host-specific and non-specific polyketide or peptide phytotoxins (e.g., *Alternaria cassiae* for sicklepod, *Alternaria destruens* for dodder).\n   - *Fusarium:* Soil-borne and foliar vascular wilts. *Fusarium oxysporum* strains have been widely evaluated for parasitic weeds (*Striga* and *Orobanche*).",
        "subsections": [
          {
            "subheading": "Hemibiotrophic vs. Necrotrophic Infection Dynamics",
            "content": "Bioherbicide candidates differ fundamentally in their trophic interaction with target weeds:",
            "table": {
              "headers": [
                "Pathological Feature",
                "Hemibiotrophs (e.g., Colletotrichum)",
                "Necrotrophs (e.g., Sclerotinia, Alternaria)"
              ],
              "rows": [
                [
                  "Initial Interaction",
                  "Biotrophic: host cells remain alive and functional during initial invagination",
                  "Direct killing: toxins and enzymes cause rapid host cell lysis"
                ],
                [
                  "Host Range",
                  "Typically narrow and highly host-specific (forma specialis)",
                  "Broader host range requiring formulation confinement or localized application"
                ],
                [
                  "Toxin Production",
                  "Secondary phase; triggers tissue collapse after biotrophic colonization",
                  "Immediate massive secretion of cutinases, pectinases, and oxalic acid"
                ],
                [
                  "Dew Requirement",
                  "Strict: 8-14 hours continuous humidity for appressorial melanization",
                  "Moderate to high; facilitated by organic nutrient carriers on leaf surface"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "agr233-u2-sec2",
        "heading": "2. Bacteria as Bioherbicide Candidates",
        "content": "While fungi dominate foliar applications, plant-pathogenic and deleterious bacteria offer unique advantages, notably rapid generation times and high compatibility with standard submerged liquid fermentation equipment.\n\n### Primary Bacterial Categories:\n1. **Vascular Pathogens (e.g., Xanthomonas campestris pv. poae):**\n   - *Mechanism:* Enters host leaves through hydathodes, stomata, or mechanical cutting wounds (e.g., from lawnmower blades). Once inside the vascular system, bacterial cells multiply, produce copious extracellular polysaccharides (EPS, like xanthan gum), and occlude xylem tracheary elements, inducing lethal systemic wilt in *Poa annua* within 1\u20132 weeks.\n\n2. **Deleterious Rhizobacteria (DRB):**\n   - Non-parasitic root-colonizing bacteria (predominantly *Pseudomonas fluorescens*, *Pseudomonas putida*, and *Enterobacter* spp.) that aggressively colonize the rhizoplane and root hairs of developing weed seedlings.\n   - *Mode of Suppression:* They do not cause macroscopic galling or systemic rotting. Instead, they secrete secondary phytotoxins (e.g., hydrogen cyanide, phenazines, auxins at phytotoxic levels) or compete for iron via siderophores, suppressing root elongation and seedling vigor by 60\u201390%.\n\n3. **Actinomycetes (Streptomyces species):**\n   - Renowned for biosynthesizing secondary metabolic antibiotics and natural herbicidal molecules such as bialaphos and anisomycin.",
        "subsections": [
          {
            "subheading": "Deleterious Rhizobacteria (DRB) vs. Plant Growth Promoting Rhizobacteria (PGPR)",
            "content": "In weed biocontrol, DRB represent the biological mirror image of beneficial PGPR:",
            "keyPoints": [
              "DRB inhibit root cell division by overproducing indole-3-acetic acid (IAA) or producing toxic hydrogen cyanide (HCN).",
              "DRB are selectively colonizing; they inhibit weed radicle elongation (e.g., downy brome) without colonizing winter wheat roots.",
              "DRB require delivery directly onto seed surfaces or in-furrow soil application."
            ]
          }
        ]
      },
      {
        "id": "agr233-u2-sec3",
        "heading": "3. Verification of Etiology: Koch's Postulates for Weed Pathogens",
        "content": "Before any newly observed symptomatic weed pathogen can be considered a bioherbicide candidate, its causal relationship with the target weed disease must be unequivocally confirmed using **Koch's Postulates**.\n\n### The Four Classical Postulates Adapted to Weed Pathology:\n1. **Constant Association:** The prospective microorganism must be consistently found associated with the specific diseased lesions or symptomatic tissues across multiple geographic weed populations, and absent from healthy weed specimens.\n2. **Axenic Isolation:** The suspected pathogen must be isolated from symptomatic weed tissue and grown in pure culture (axenic culture on artificial nutrient media) or on living host differential lines in the case of obligate biotrophs.\n3. **Re-inoculation and Symptom Reproduction:** Inoculation of healthy, disease-free target weed seedlings with propagules from the pure culture must reproduce the exact visual symptoms and pathology observed in the original field specimen.\n4. **Re-isolation:** The identical microorganism must be re-isolated from the artificially inoculated, diseased experimental plant and confirmed to possess morphological, physiological, and molecular characteristics identical to the original isolate.",
        "subsections": [
          {
            "subheading": "Special Considerations for Obligate Biotrophs (e.g., Puccinia)",
            "content": "Because obligate rusts and downy mildews cannot grow on cell-free agar plates, Postulate 2 and 4 are fulfilled by maintaining single-pustule or single-urediniospore cultures on living, detached leaf segments in sterile water agar or micro-containment growth chambers.",
            "keyPoints": [
              "Koch's postulates differentiate true causal pathogens from secondary opportunistic saprophytes.",
              "Molecular barcoding (ITS rDNA and translation elongation factor TEF-1\u03b1) reinforces morphological identification.",
              "Pathogenicity index scores quantify symptom severity during Postulate 3 trials."
            ]
          }
        ]
      },
      {
        "id": "agr233-u2-sec4",
        "heading": "4. Host Specificity Testing: Centrifugal Phylogenetic Screening",
        "content": "Host specificity testing is the bedrock of bioherbicide biosafety. It provides regulatory assurance that the released biological agent will never cause economic damage to cultivated crops, ornamental flora, or indigenous non-target plant species.\n\n### The Centrifugal Phylogenetic Method (Wapshere, 1974):\nHost specificity screening is structured into four concentric, radiating botanical testing tiers:\n1. **Tier I (Congeners / Target Weed Biotypes):** Includes all known physiological biotypes, ecotypes, and botanical varieties of the target weed, alongside closely related wild species within the same genus.\n2. **Tier II (Confamilial Plants & Crops):** Focuses heavily on economically vital cultivated crops, vegetables, and ornamentals belonging to the same botanical family and tribe as the weed host.\n3. **Tier III (Related Orders and Super-orders):** Evaluates plant species from phylogenetically allied families sharing similar secondary phytochemical defenses or cuticular structures.\n4. **Tier IV (Distantly Related Keystone Economic Plants):** Encompasses national staple agricultural crops (e.g., rice, wheat, maize, soybean, sugarcane, cotton) and vulnerable indigenous or endangered flora native to the planned geographic release zone.",
        "subsections": [
          {
            "subheading": "Inoculation Protocols in Host Range Determination",
            "content": "To prevent false negatives, host specificity tests apply severe 'worst-case' inoculation pressures:",
            "table": {
              "headers": [
                "Testing Condition",
                "Standard Protocol",
                "Purpose / Safety Assurance"
              ],
              "rows": [
                [
                  "Inoculum Density",
                  "10 to 100 times standard field dose (e.g., 10\u2077 to 10\u2078 spores/mL)",
                  "Ensures even weak non-target susceptibility is detected"
                ],
                [
                  "Dew Period",
                  "Prolonged continuous dew (24 to 48 hours at 22-25\u00b0C)",
                  "Eliminates environmental escape; maximizes infection potential"
                ],
                [
                  "Physical Wounding",
                  "Leaves tested with and without mechanical carborundum abrasion",
                  "Determines if physical cuticle damage compromises non-target resistance"
                ],
                [
                  "Host Developmental Stages",
                  "Cotyledon, 4-leaf seedling, flowering, and fruiting stages evaluated",
                  "Identifies age-dependent physiological shifts in susceptibility"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "agr233-u2-sec5",
        "heading": "5. Mass Screening, Virulence Assays, and Selection of Hypervirulent Strains",
        "content": "Finding a pathogen associated with a weed is only the first step. Commercial bioherbicide development requires screening hundreds of field isolates to identify **hypervirulent, genetically stable, and industrially scalable candidate strains**.\n\n### Multi-Tier High-Throughput Screening Pipeline:\n1. **Primary High-Throughput In Vitro Screening:**\n   - *Detached Leaf Bioassay:* Uniform droplets of spore suspensions are pipetted onto excised weed leaves incubated in moist chambers. Lesion diameter is measured digitally at 24, 48, and 72 hours.\n   - *Germination and Sporulation Kinetics:* Isolates are evaluated on solid agar to determine radial mycelial growth rate, conidial yield per cm\u00b2, and spontaneous germination percentage.\n2. **Secondary In Vivo Whole-Plant Bioassay:**\n   - Seedlings at the 2-to-4 true-leaf stage are sprayed using precision automated track sprayers.\n   - *Key Virulence Metrics:* LT\u2085\u2080 (Lethal Time required to kill 50% of the weed population) and LC\u2085\u2080 (Lethal Concentration of propagules per mL required for 50% mortality).\n   - *Disease Severity Index (DSI):* Scored on a standardized 0\u20135 visual scale (0 = no symptoms, 5 = complete plant mortality and stem collapse).\n3. **Tertiary Fermentation and Stress-Tolerance Profiling:**\n   - Evaluation of liquid fermentation sporulation capacity (conidia vs. blastospores).\n   - Thermotolerance assays (viability retention following exposure to 40\u00b0C for 4 hours).\n   - UV-B resistance benchmarks under calibrated solar simulation lamps.",
        "subsections": [
          {
            "subheading": "Strain Stability and Prevention of Attenuation",
            "content": "Subculturing microbial strains continuously on nutrient-rich artificial media frequently results in physiological attenuation\u2014loss of pathogenicity and appressorium formation.",
            "keyPoints": [
              "Candidate strains must be cryopreserved at -80\u00b0C or lyophilized in liquid nitrogen immediately upon isolation.",
              "Annual passage through living target weed hosts restores virulence traits and upregulates cutinolytic gene expression.",
              "Single-spore isolation protocols ensure genetic homogeneity and eliminate cryptic virus-like double-stranded RNA (dsRNA) hypovirulence factors."
            ]
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Colletotrichum, Phoma, Alternaria, and Puccinia represent the premier fungal bioherbicide genera, utilizing cutinases and appressorial turgor.",
      "Bacterial candidates function through vascular occlusion (Xanthomonas) or non-parasitic root toxin secretion (deleterious rhizobacteria).",
      "Fulfillment of Koch's postulates remains mandatory to establish pathogenic causality for new weed disease isolates.",
      "Centrifugal phylogenetic screening evaluates plant susceptibility across four concentric botanical tiers, ensuring absolute non-target crop safety.",
      "Strain selection pipelines prioritize candidates demonstrating rapid LT\u2085\u2080, high sporulation in liquid media, and environmental stress resilience.",
      "Repeated subculturing on agar induces virulence attenuation; cryopreservation and periodic host passage are necessary to preserve aggressive pathogenicity."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Any fungal isolate that forms lesions on weed leaves in the field can be commercialized directly as a bioherbicide.",
        "reality": "Most field isolates display weak virulence, narrow temperature tolerances, or inability to sporulate in liquid fermenters; fewer than 1 in 1,000 isolates meet commercial development criteria."
      },
      {
        "myth": "Bacterial bioherbicides only work if they cause visible rotten cavities like soft-rot bacteria.",
        "reality": "Deleterious rhizobacteria (DRB) suppress weed root development through microscopic hormone imbalances and cyanide exudation without causing visible rot."
      },
      {
        "myth": "If a candidate pathogen infects a crop plant under artificial needle-wounding in a laboratory, it must be discarded immediately.",
        "reality": "Needle-wounding bypasses natural cuticular defense barriers; true host specificity evaluates intact, unwounded plants under realistic agricultural field exposure."
      }
    ],
    "summary": "Unit 2 examines microbial candidates for bioherbicide development, detailing the infection strategies of major fungal genera (Colletotrichum, Phoma, Alternaria, Puccinia) and pathogenic bacteria. The curriculum covers the experimental fulfillment of Koch's postulates, rigorous four-tier centrifugal phylogenetic host-specificity screening, and multi-stage screening pipelines designed to isolate and preserve hypervirulent, stress-tolerant biocontrol strains."
  },
  "mcqs": [
    {
      "id": "AGR233-U2-MCQ01",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Easy",
      "questionText": "Which fungal genus is characterized by producing acervuli, falcate/cylindrical conidia, and melanized setae?",
      "options": {
        "A": "Colletotrichum",
        "B": "Rhizopus",
        "C": "Penicillium",
        "D": "Aspergillus"
      },
      "correctOption": "A",
      "explanation": "Colletotrichum belongs to the coelomycetous fungi and produces fruiting bodies known as acervuli containing conidia and stiff, dark setae."
    },
    {
      "id": "AGR233-U2-MCQ02",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Easy",
      "questionText": "What trophic relationship is exhibited by rust fungi belonging to the genus Puccinia?",
      "options": {
        "A": "Obligate biotrophs",
        "B": "Obligate saprophytes",
        "C": "Insect endosymbionts",
        "D": "Anaerobic fermenters"
      },
      "correctOption": "A",
      "explanation": "Rust fungi (Puccinia spp.) are obligate biotrophic parasites that require living plant tissue to complete their life cycle."
    },
    {
      "id": "AGR233-U2-MCQ03",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Easy",
      "questionText": "What weed species is selectively targeted by the bacterial bioherbicide Xanthomonas campestris pv. poae?",
      "options": {
        "A": "Parthenium hysterophorus",
        "B": "Annual bluegrass (Poa annua)",
        "C": "Water hyacinth (Eichhornia crassipes)",
        "D": "Wild oat (Avena fatua)"
      },
      "correctOption": "B",
      "explanation": "Xanthomonas campestris pv. poae is the active pathogen in Camperico, engineered specifically to control Poa annua in turfgrass."
    },
    {
      "id": "AGR233-U2-MCQ04",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Easy",
      "questionText": "Who formulated the foundational scientific postulates used to prove the etiology of infectious plant and animal diseases?",
      "options": {
        "A": "Robert Koch",
        "B": "Gregor Mendel",
        "C": "Norman Borlaug",
        "D": "Charles Darwin"
      },
      "correctOption": "A",
      "explanation": "Robert Koch established the four classical criteria (Koch's postulates) to prove that a specific organism causes a specific disease."
    },
    {
      "id": "AGR233-U2-MCQ05",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Easy",
      "questionText": "What is the primary objective of host specificity testing in bioherbicide research?",
      "options": {
        "A": "To prove that the bioherbicide kills all agricultural crops",
        "B": "To ensure that non-target cultivated crops and beneficial flora remain completely uninfected",
        "C": "To test the speed of tractor sprayers",
        "D": "To measure soil nitrogen levels"
      },
      "correctOption": "B",
      "explanation": "Host specificity testing demonstrates that the bioherbicide pathogen will not attack non-target commercial crops or native flora."
    },
    {
      "id": "AGR233-U2-MCQ06",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Easy",
      "questionText": "In bioherbicide screening, what does the parameter 'LT\u2085\u2080' represent?",
      "options": {
        "A": "Lethal Time required to kill 50% of the target weed population",
        "B": "Light Transmission at 50% wavelength",
        "C": "Long-term temperature tolerance of 50 degrees",
        "D": "Liquid tension in 50 spray nozzles"
      },
      "correctOption": "A",
      "explanation": "LT\u2085\u2080 denotes the Median Lethal Time\u2014the duration required for a pathogen to kill 50% of the inoculated weed population."
    },
    {
      "id": "AGR233-U2-MCQ07",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Easy",
      "questionText": "Deleterious Rhizobacteria (DRB) suppress weeds primarily by colonizing which plant organ?",
      "options": {
        "A": "Flower petals",
        "B": "Root systems and rhizosphere",
        "C": "Trichome tips",
        "D": "Pollen grains"
      },
      "correctOption": "B",
      "explanation": "DRBs aggressively colonize the root surface (rhizoplane) and root hairs of weed seedlings, inhibiting root elongation."
    },
    {
      "id": "AGR233-U2-MCQ08",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Easy",
      "questionText": "Alternaria cassiae is an extensively studied mycoherbicide candidate targeting which invasive legume weed?",
      "options": {
        "A": "Sicklepod (Cassia obtusifolia)",
        "B": "Johnson grass (Sorghum halepense)",
        "C": "Bermuda grass (Cynodon dactylon)",
        "D": "Barnyard grass (Echinochloa crus-galli)"
      },
      "correctOption": "A",
      "explanation": "Alternaria cassiae produces severe seedling foliar necrosis and mortality on sicklepod (Cassia obtusifolia)."
    },
    {
      "id": "AGR233-U2-MCQ09",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Easy",
      "questionText": "What is the second step in fulfilling Koch's Postulates?",
      "options": {
        "A": "Spraying an entire field with synthetic chemicals",
        "B": "Isolating the suspected pathogen from diseased tissue into a pure culture",
        "C": "Taking a photograph of the weed",
        "D": "Selling the crop in the market"
      },
      "correctOption": "B",
      "explanation": "Postulate 2 requires the suspected causal microorganism to be isolated from diseased tissue and grown in pure (axenic) culture."
    },
    {
      "id": "AGR233-U2-MCQ10",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Easy",
      "questionText": "In Wapshere's centrifugal phylogenetic testing, which plants are evaluated first in the innermost tier?",
      "options": {
        "A": "Plants belonging to the same genus and species biotypes as the target weed",
        "B": "Citrus and apple orchards",
        "C": "Coniferous pine trees",
        "D": "Marine kelp"
      },
      "correctOption": "A",
      "explanation": "Testing begins centrifugally with close relatives\u2014biotypes and congeneric species within the same genus as the weed."
    },
    {
      "id": "AGR233-U2-MCQ11",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Easy",
      "questionText": "Fungi in the genus Sclerotinia survive adverse environmental periods primarily by forming durable, hardened structures called:",
      "options": {
        "A": "Sclerotia",
        "B": "Akinetes",
        "C": "Bacterial endospores",
        "D": "Cysts"
      },
      "correctOption": "A",
      "explanation": "Sclerotinia species form dense, melanized resting structures known as sclerotia that can persist in soil for years."
    },
    {
      "id": "AGR233-U2-MCQ12",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Easy",
      "questionText": "A laboratory method where detached leaves are placed on moist filter paper to test pathogen virulence is called a:",
      "options": {
        "A": "Detached leaf bioassay",
        "B": "Soxhlet extraction",
        "C": "Chromatography column",
        "D": "Kjeldahl digestion"
      },
      "correctOption": "A",
      "explanation": "Detached leaf bioassays provide a rapid, controlled high-throughput screening tool to evaluate foliar lesion development."
    },
    {
      "id": "AGR233-U2-MCQ13",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Easy",
      "questionText": "Which fungal genus produces pycnidia\u2014flask-shaped fruiting bodies containing asexual conidia?",
      "options": {
        "A": "Phoma",
        "B": "Puccinia",
        "C": "Agaricus",
        "D": "Saccharomyces"
      },
      "correctOption": "A",
      "explanation": "Phoma is a member of the Coelomycetes that produces pycnidia containing single-celled hyaline or pigmented conidia."
    },
    {
      "id": "AGR233-U2-MCQ14",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Easy",
      "questionText": "Pseudomonas fluorescens strains evaluated as weed suppressive agents belong to which major bacterial group?",
      "options": {
        "A": "Gram-negative, rod-shaped bacteria",
        "B": "Gram-positive spore-forming bacilli",
        "C": "Spiral spirochetes",
        "D": "Acid-fast mycobacteria"
      },
      "correctOption": "A",
      "explanation": "Pseudomonas fluorescens is a Gram-negative, rod-shaped, motile bacterium that produces yellow-green fluorescent siderophores."
    },
    {
      "id": "AGR233-U2-MCQ15",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Easy",
      "questionText": "The fourth step of Koch's Postulates requires:",
      "options": {
        "A": "Re-isolating the identical pathogen from the experimentally inoculated diseased host",
        "B": "Discarding all infected tissues in bleach",
        "C": "Changing the scientific name of the plant",
        "D": "Submitting patent paperwork"
      },
      "correctOption": "A",
      "explanation": "Postulate 4 mandates re-isolating the same organism from the newly inoculated plant and confirming its identity with the original culture."
    },
    {
      "id": "AGR233-U2-MCQ16",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Easy",
      "questionText": "If a candidate bioherbicide fungus causes fatal stem lesions on tomato during host range testing, it is considered:",
      "options": {
        "A": "Unsafe due to non-target crop pathogenicity",
        "B": "A highly successful universal herbicide",
        "C": "Ready for commercial release",
        "D": "An insect repellent"
      },
      "correctOption": "A",
      "explanation": "Any pathogenicity toward economically important non-target crops (like tomato) immediately disqualifies the candidate on biosafety grounds."
    },
    {
      "id": "AGR233-U2-MCQ17",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Easy",
      "questionText": "What does 'LC\u2085\u2080' measure in bioherbicide dose-response assays?",
      "options": {
        "A": "The concentration of inoculum that causes 50% mortality in the test weed population",
        "B": "The amount of light required for 50% spore germination",
        "C": "The liquid capacity of 50-liter fermenters",
        "D": "The percentage of nitrogen in leaf tissue"
      },
      "correctOption": "A",
      "explanation": "LC\u2085\u2080 denotes the Median Lethal Concentration\u2014the spore density (e.g., conidia/mL) needed to kill 50% of the target weeds."
    },
    {
      "id": "AGR233-U2-MCQ18",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Easy",
      "questionText": "Which fungal pathogen has been commercialized under the trade name Sarritor\u00ae for broadleaf weed control in turf?",
      "options": {
        "A": "Sclerotinia minor",
        "B": "Ustilago maydis",
        "C": "Penicillium notatum",
        "D": "Erysiphe graminis"
      },
      "correctOption": "A",
      "explanation": "Sarritor was developed using granular mycelial formulations of Sclerotinia minor for dandelion and broadleaf weed suppression in turf."
    },
    {
      "id": "AGR233-U2-MCQ19",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Easy",
      "questionText": "How does Xanthomonas campestris pv. poae enter annual bluegrass plants under practical field conditions?",
      "options": {
        "A": "Through mower-inflicted cut wounds on grass blade tips",
        "B": "By eating root hairs",
        "C": "Through bee pollination",
        "D": "Via deep soil burrows"
      },
      "correctOption": "A",
      "explanation": "The bacterium enters grass blades through mechanical wounds created during turf mowing, colonizing the vascular xylem vessels."
    },
    {
      "id": "AGR233-U2-MCQ20",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Easy",
      "questionText": "Continuous repeated subculturing of a fungal pathogen on artificial nutrient agar often causes:",
      "options": {
        "A": "Loss of virulence (attenuation)",
        "B": "Spontaneous doubling of pathogenicity",
        "C": "Transformation into a bacterium",
        "D": "Immunity to all fungicides"
      },
      "correctOption": "A",
      "explanation": "Repeated growth on rich artificial media downregulates virulence genes and appressorial formation, leading to culture attenuation."
    },
    {
      "id": "AGR233-U2-MCQ21",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Medium",
      "questionText": "What lifestyle transition defines the hemibiotrophic infection process of Colletotrichum species?",
      "options": {
        "A": "An initial asymptomatic biotrophic phase followed by a destructive necrotrophic killing phase",
        "B": "A saprophytic phase followed by living inside insect intestines",
        "C": "Photosynthetic sugar production transitioning to anaerobic fermentation",
        "D": "Spore dormancy followed by sexual meiosis only"
      },
      "correctOption": "A",
      "explanation": "Hemibiotrophs keep host cells alive initially to establish colonization (biotrophy), then switch to rapid tissue necrosis (necrotrophy)."
    },
    {
      "id": "AGR233-U2-MCQ22",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Medium",
      "questionText": "What phytotoxic compound produced by certain deleterious Pseudomonas fluorescens strains halts root cell division in weed seedlings?",
      "options": {
        "A": "Hydrogen cyanide (HCN)",
        "B": "Ascorbic acid",
        "C": "Beta-carotene",
        "D": "Glucose-6-phosphate"
      },
      "correctOption": "A",
      "explanation": "Certain DRB strains synthesize hydrogen cyanide (HCN) and secondary phytotoxins that uncouple electron transport and stunt radicle elongation."
    },
    {
      "id": "AGR233-U2-MCQ23",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Medium",
      "questionText": "Why is fulfilling Koch's Postulates challenging for obligate biotrophic pathogens like rusts (Puccinia spp.)?",
      "options": {
        "A": "They cannot grow on non-living synthetic agar media in pure axenic culture",
        "B": "They produce zero spores",
        "C": "They are killed by water droplets",
        "D": "They mutate into viruses"
      },
      "correctOption": "A",
      "explanation": "Obligate biotrophs fail to grow on cell-free artificial media, requiring living host tissue or tissue cultures to satisfy Postulate 2 and 4."
    },
    {
      "id": "AGR233-U2-MCQ24",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Medium",
      "questionText": "In centrifugal phylogenetic screening, if a bioagent targeting Parthenium hysterophorus (Asteraceae) is tested, which economic crop must be included in Tier II?",
      "options": {
        "A": "Sunflower (Helianthus annuus)",
        "B": "Wheat (Triticum aestivum)",
        "C": "Rice (Oryza sativa)",
        "D": "Sugarcane (Saccharum officinarum)"
      },
      "correctOption": "A",
      "explanation": "Sunflower belongs to the Asteraceae family; confamilial screening (Tier II) must test sunflower to confirm absolute safety."
    },
    {
      "id": "AGR233-U2-MCQ25",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Medium",
      "questionText": "Why is single-spore isolation an indispensable protocol when purifying wild fungal isolates for bioherbicide research?",
      "options": {
        "A": "It ensures genetic uniformity and eliminates contaminated mixtures of saprophytic strains",
        "B": "It makes conidia immune to ultraviolet light",
        "C": "It doubles the spore size",
        "D": "It eliminates the need for refrigeration"
      },
      "correctOption": "A",
      "explanation": "Single-spore isolation guarantees an isogenic pure culture, ensuring consistent phenotypic virulence and reproducible bioefficacy."
    },
    {
      "id": "AGR233-U2-MCQ26",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Medium",
      "questionText": "The mycoherbicide candidate Alternaria destruens was specifically formulated under the trade name Smolder to control:",
      "options": {
        "A": "Dodder (Cuscuta spp.) in cranberries and alfalfa",
        "B": "Water hyacinth in irrigation canals",
        "C": "Bermuda grass in sports stadiums",
        "D": "Barnyard grass in flooded rice"
      },
      "correctOption": "A",
      "explanation": "Smolder utilized Alternaria destruens formulated as granules or wettable powder to control parasitic dodder (Cuscuta spp.)."
    },
    {
      "id": "AGR233-U2-MCQ27",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Medium",
      "questionText": "How do deleterious rhizobacteria (DRB) differ fundamentally from typical bacterial phytopathogens like Ralstonia or Erwinia?",
      "options": {
        "A": "DRB suppress weed growth through sub-lethal rhizosphere metabolites without causing acute soft rots or systemic vascular breakdown",
        "B": "DRB produce huge woody galls on stems",
        "C": "DRB are obligate animal parasites",
        "D": "DRB require sunlight to infect"
      },
      "correctOption": "A",
      "explanation": "DRBs are non-parasitic or weakly parasitic colonizers that stunt plant growth via hormonal imbalance and root inhibition without macerating tissue."
    },
    {
      "id": "AGR233-U2-MCQ28",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Medium",
      "questionText": "What testing artifact can occur if host specificity trials are conducted exclusively using detached leaves with artificial wound punctures?",
      "options": {
        "A": "False-positive susceptibility results due to bypassed structural cuticular defenses",
        "B": "The fungal spores turn into bacteria",
        "C": "Complete immunity in all plant species",
        "D": "Instantaneous seed production"
      },
      "correctOption": "A",
      "explanation": "Mechanical wounding breaches the cuticle and cell walls, allowing opportunistic pathogens to colonize non-hosts that are completely resistant in nature."
    },
    {
      "id": "AGR233-U2-MCQ29",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Medium",
      "questionText": "What preservation technique is standard for long-term storage of fungal bioherbicide mother cultures without phenotypic attenuation?",
      "options": {
        "A": "Cryopreservation in liquid nitrogen (-196\u00b0C) or ultra-low freezers (-80\u00b0C)",
        "B": "Leaving agar plates on a sunny windowsill",
        "C": "Storing in warm tap water at 37\u00b0C",
        "D": "Exposing to microwave radiation"
      },
      "correctOption": "A",
      "explanation": "Cryopreservation in liquid nitrogen or at -80\u00b0C with cryoprotectants (glycerol) halts metabolic activity and preserves genetic stability."
    },
    {
      "id": "AGR233-U2-MCQ30",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Medium",
      "questionText": "The non-specific phytotoxin produced by Sclerotinia species that chelates calcium and lowers tissue pH to trigger host cell death is:",
      "options": {
        "A": "Oxalic acid",
        "B": "Acetic acid",
        "C": "Malic acid",
        "D": "Citric acid"
      },
      "correctOption": "A",
      "explanation": "Sclerotinia sclerotiorum and S. minor secrete millimolar quantities of oxalic acid, which acidifies tissues and chelates wall-bound calcium, activating polygalacturonases."
    },
    {
      "id": "AGR233-U2-MCQ31",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Medium",
      "questionText": "In modern weed pathology, what molecular diagnostic tool is routinely coupled with Koch's Postulates to confirm isolate identity?",
      "options": {
        "A": "ITS rDNA region PCR amplification and Sanger sequencing",
        "B": "Visual leaf burning test",
        "C": "Gravimetric soil moisture analysis",
        "D": "Hydrometer sedimentation"
      },
      "correctOption": "A",
      "explanation": "Sequencing the internal transcribed spacer (ITS) rDNA region provides an unambiguous molecular barcode confirming taxonomic identity."
    },
    {
      "id": "AGR233-U2-MCQ32",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Medium",
      "questionText": "Pseudomonas fluorescens strain D7 was commercialized in North America specifically to suppress which invasive weed in cereal rotations?",
      "options": {
        "A": "Downy brome (Bromus tectorum)",
        "B": "Common lambsquarters (Chenopodium album)",
        "C": "Redroot pigweed (Amaranthus retroflexus)",
        "D": "Yellow foxtail (Setaria pumila)"
      },
      "correctOption": "A",
      "explanation": "P. fluorescens strain D7 inhibits germination and root elongation of downy brome (Bromus tectorum) in winter wheat fields."
    },
    {
      "id": "AGR233-U2-MCQ33",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Medium",
      "questionText": "What constitutes Tier IV in Wapshere's host specificity screening protocol?",
      "options": {
        "A": "Major economic staple crops, timber species, and endangered indigenous plants regardless of phylogenetic distance",
        "B": "Bacteria grown in milk broth",
        "C": "Synthetic herbicide molecules",
        "D": "Plastic models of plants"
      },
      "correctOption": "A",
      "explanation": "Tier IV is the broad agricultural safety net, testing staple crops (wheat, rice, corn) and endangered plants to guarantee regulatory biosafety."
    },
    {
      "id": "AGR233-U2-MCQ34",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Medium",
      "questionText": "During primary screening of fungal bioherbicides, high conidial sporulation on inexpensive agricultural substrates is critical because:",
      "options": {
        "A": "It directly governs the commercial unit manufacturing cost per hectare",
        "B": "Spores change the taste of weeds",
        "C": "Regulators only allow fungi that sporulate in darkness",
        "D": "Low spore counts kill plants faster"
      },
      "correctOption": "A",
      "explanation": "Mass production economics dictate that candidate strains must yield high spore titers (\u226510\u2078 conidia/mL) on low-cost media to be economically viable."
    },
    {
      "id": "AGR233-U2-MCQ35",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Medium",
      "questionText": "Fusarium oxysporum f. sp. strigae has demonstrated substantial potential as a bioherbicide targeting which parasitic weed in African cereal cropping?",
      "options": {
        "A": "Striga hermonthica (Witchweed)",
        "B": "Eichhornia crassipes",
        "C": "Lantana camara",
        "D": "Convolvulus arvensis"
      },
      "correctOption": "A",
      "explanation": "Fusarium oxysporum f. sp. strigae selectively attacks the subterranean germ tubes and haustoria of Striga hermonthica, preventing crop attachment."
    },
    {
      "id": "AGR233-U2-MCQ36",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Medium",
      "questionText": "What physical barrier in xylem vessels is produced during Xanthomonas vascular wilting?",
      "options": {
        "A": "Extracellular polysaccharide (EPS) slime plugs and bacterial biofilm aggregates",
        "B": "Lignified root bark",
        "C": "Cellulose crystal sheets",
        "D": "Calcium carbonate stones"
      },
      "correctOption": "A",
      "explanation": "Xanthomonas produces copious xanthan EPS and high cell densities that physically clog xylem tracheary vessels, blocking water transport."
    },
    {
      "id": "AGR233-U2-MCQ37",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Medium",
      "questionText": "In bioherbicide screening, what is an 'incompatible host reaction'?",
      "options": {
        "A": "A hypersensitive defense response (HR) resulting in microscopic localized cell death that halts pathogen progress",
        "B": "A reaction where the weed grows 5 times faster",
        "C": "Complete destruction of the tractor sprayer",
        "D": "The plant converting into an animal"
      },
      "correctOption": "A",
      "explanation": "An incompatible reaction occurs when host defense genes recognize the pathogen, triggering localized cell suicide (hypersensitive response) to arrest infection."
    },
    {
      "id": "AGR233-U2-MCQ38",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Medium",
      "questionText": "Why is evaluation of mycotoxin production profiles mandatory prior to commercial strain selection?",
      "options": {
        "A": "To ensure candidate fungi do not secrete hazardous secondary toxins that threaten human or livestock health",
        "B": "To ensure the fungus smells pleasant",
        "C": "To boost chemical fertilizer sales",
        "D": "To verify that the fungus kills honeybees"
      },
      "correctOption": "A",
      "explanation": "Microbial bioherbicides must be proven free of mammalian toxins (e.g., fumonisins, trichothecenes, aflatoxins) to safeguard consumer food chains."
    },
    {
      "id": "AGR233-U2-MCQ39",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Medium",
      "questionText": "Phoma macrostoma produces which class of natural phytotoxic metabolites that cause systemic bleaching in broadleaf weeds?",
      "options": {
        "A": "Macrocidins",
        "B": "Aflatoxins",
        "C": "Streptomycins",
        "D": "Penicillins"
      },
      "correctOption": "A",
      "explanation": "Phoma macrostoma produces macrocidins (cyclic tetramic acid derivatives) that inhibit carotenoid biosynthesis, causing severe foliar bleaching."
    },
    {
      "id": "AGR233-U2-MCQ40",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Medium",
      "questionText": "If a healthy target weed inoculated with a cultured fungal isolate remains completely symptom-free in Postulate 3, what conclusion must be drawn?",
      "options": {
        "A": "The isolated organism is not the causal pathogen of that disease syndrome (or requires specific untested environmental co-factors)",
        "B": "The experiment proved the fungus is hypervirulent",
        "C": "The weed is dead",
        "D": "Koch's postulates were successfully fulfilled"
      },
      "correctOption": "A",
      "explanation": "Failure to reproduce symptoms in Postulate 3 disproves pathogenicity, indicating the isolate was likely a secondary opportunistic saprophyte."
    },
    {
      "id": "AGR233-U2-MCQ41",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Medium",
      "questionText": "What industrial engineering advantage do bacteria hold over filamentous fungi in mass production facilities?",
      "options": {
        "A": "Significantly shorter generation times (doubling in 20-60 minutes) and simpler aeration kinetics in standard fermenters",
        "B": "They produce wooden shells",
        "C": "They require zero nitrogen or carbon in the media",
        "D": "They can survive at 500\u00b0C"
      },
      "correctOption": "A",
      "explanation": "Bacteria multiply rapidly in standard stirred-tank liquid bioreactors, achieving high cell densities within 24 to 48 hours."
    },
    {
      "id": "AGR233-U2-MCQ42",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Medium",
      "questionText": "Why is testing performed across multiple developmental stages (seedling, vegetative, flowering) during host specificity evaluations?",
      "options": {
        "A": "Plant susceptibility can vary dynamically with tissue age, cuticular wax thickness, and ontogenetic defense expression",
        "B": "To keep graduate students busy",
        "C": "Because mature plants have no DNA",
        "D": "Weeds only grow during the night"
      },
      "correctOption": "A",
      "explanation": "Ontogenetic resistance changes as plants age; testing multiple phenological stages ensures non-target safety across the crop's entire life cycle."
    },
    {
      "id": "AGR233-U2-MCQ43",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Medium",
      "questionText": "How does periodic passaging through the living host plant rescue an attenuated bioherbicide culture?",
      "options": {
        "A": "Host biochemical signals trigger epigenetic reactivation of repressed virulence and cutinolytic enzyme genes",
        "B": "It turns the fungus into a bacterium",
        "C": "The plant donates human genes to the fungus",
        "D": "It permanently removes the cell wall"
      },
      "correctOption": "A",
      "explanation": "Living host contact exposes the pathogen to natural defensive pressures, reactivating pathogenicity-related gene clusters that quiet down during agar subculturing."
    },
    {
      "id": "AGR233-U2-MCQ44",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Medium",
      "questionText": "Colletotrichum truncatum is widely investigated as a mycoherbicide targeting which invasive weed in cotton and soybean fields?",
      "options": {
        "A": "Hemp sesbania (Sesbania exaltata)",
        "B": "Purple nutsedge (Cyperus rotundus)",
        "C": "Wild oat (Avena fatua)",
        "D": "Barnyard grass (Echinochloa crus-galli)"
      },
      "correctOption": "A",
      "explanation": "Colletotrichum truncatum isolates cause severe anthracnose, leaf blight, and seedling death on hemp sesbania (Sesbania exaltata)."
    },
    {
      "id": "AGR233-U2-MCQ45",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Medium",
      "questionText": "A standardized visual scale from 0 to 5 used by pathologists to quantify plant disease symptoms during screening is called a:",
      "options": {
        "A": "Disease Severity Index (DSI)",
        "B": "Mohs hardness scale",
        "C": "Richter scale",
        "D": "Beaufort wind scale"
      },
      "correctOption": "A",
      "explanation": "The Disease Severity Index (DSI) categorizes visual chlorosis, lesion expansion, and tissue collapse into numerical ratings for statistical analysis."
    },
    {
      "id": "AGR233-U2-MCQ46",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Hard",
      "questionText": "What melanin biosynthetic pathway is essential for appressorial function and cuticular penetration in Colletotrichum bioherbicides?",
      "options": {
        "A": "1,8-dihydroxynaphthalene (DHN) melanin pathway",
        "B": "DOPA melanin pathway exclusively",
        "C": "Carotenoid pathway",
        "D": "Chlorophyll synthesis pathway"
      },
      "correctOption": "A",
      "explanation": "Colletotrichum uses the DHN-melanin pathway to cross-link its appressorial cell wall, creating an impermeable barrier that allows generation of massive internal hydrostatic turgor."
    },
    {
      "id": "AGR233-U2-MCQ47",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Hard",
      "questionText": "Which bacterial secretion system is used by plant-pathogenic Xanthomonas species to inject transcription activator-like (TAL) effectors directly into host plant cells?",
      "options": {
        "A": "Type III Secretion System (T3SS / Hrp pilus)",
        "B": "Type I ABC transporter",
        "C": "Type V autotransporter",
        "D": "Gram-positive sortase system"
      },
      "correctOption": "A",
      "explanation": "Xanthomonas relies on the Type III secretion system (T3SS) to translocate TAL effectors across plant cell walls to manipulate host gene expression."
    },
    {
      "id": "AGR233-U2-MCQ48",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Hard",
      "questionText": "How did Thomas Rivers modify Koch's postulates in 1937 to accommodate obligate viral pathogens that cannot be grown on cell-free artificial media?",
      "options": {
        "A": "By substituting cell-free culture with demonstration of specific filterable agents reproducing pathology and eliciting specific neutralizing antibodies",
        "B": "By declaring that viruses do not cause disease",
        "C": "By growing viruses on sterile boiled potatoes",
        "D": "By requiring electron microscopes for all diagnostic steps"
      },
      "correctOption": "A",
      "explanation": "Rivers modified the postulates for viral and obligate pathogens by requiring filtration, serial inoculation in living hosts, and immunological confirmation."
    },
    {
      "id": "AGR233-U2-MCQ49",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Hard",
      "questionText": "In phylogenetic screening, what does the 'Phylogenetic Guard' hypothesis assert regarding the safety of candidate co-evolved pathogens?",
      "options": {
        "A": "Evolutionary divergence creates incompatible cell surface receptors and divergent defense pathways, preventing host jumps across distant botanical orders",
        "B": "All fungi eventually evolve into crop pathogens if sprayed outdoors",
        "C": "Weeds and crops have identical immune systems",
        "D": "Plant pathogens are guided by magnetic fields"
      },
      "correctOption": "A",
      "explanation": "The evolutionary distance between plant families ensures structural and biochemical divergence in membrane receptors and cuticles, shielding unrelated economic crops."
    },
    {
      "id": "AGR233-U2-MCQ50",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Hard",
      "questionText": "What presence inside fungal mycelium is responsible for the phenomenon of 'hypovirulence'\u2014the sudden spontaneous loss of killing power in candidate strains?",
      "options": {
        "A": "Double-stranded RNA (dsRNA) mycoviruses",
        "B": "Chloroplasts",
        "C": "Excess nitrogen gas",
        "D": "Heavy metal ions"
      },
      "correctOption": "A",
      "explanation": "Mycoviruses (specifically dsRNA viruses in the family Hypoviridae) can infect candidate fungi, attenuating virulence and debilitating appressorium formation."
    },
    {
      "id": "AGR233-U2-MCQ51",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Hard",
      "questionText": "Which cutin-degrading enzyme is transcriptionally upregulated within 2 hours of spore hydration in hypervirulent Colletotrichum bioherbicide isolates?",
      "options": {
        "A": "Cutinase (serine esterase)",
        "B": "Alpha-amylase",
        "C": "Ribulose-1,5-bisphosphate carboxylase",
        "D": "Nitrogenase"
      },
      "correctOption": "A",
      "explanation": "Cutinase is a specialized serine esterase that hydrolyzes ester bonds in insoluble plant cutin, facilitating appressorial penetration."
    },
    {
      "id": "AGR233-U2-MCQ52",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Hard",
      "questionText": "The active compound produced by Streptomyces viridochromogenes in fermentation broths that served as the structural template for glufosinate is:",
      "options": {
        "A": "Phosphinothricyl-alanyl-alanine (Bialaphos)",
        "B": "Staurosporine",
        "C": "Cycloheximide",
        "D": "Valinomycin"
      },
      "correctOption": "A",
      "explanation": "Bialaphos is phosphinothricyl-alanyl-alanine; chemical synthesis of the active phosphinothricin moiety yielded commercial glufosinate."
    },
    {
      "id": "AGR233-U2-MCQ53",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Hard",
      "questionText": "What physiological defense response is observed at the cellular level when a host-specific mycoherbicide lands on a resistant non-target crop leaf?",
      "options": {
        "A": "Formation of callose-rich papillae and accumulation of autofluorescent phenolics beneath the appressorium",
        "B": "Rapid tissue maceration and water soaking",
        "C": "Immediate shedding of all root nodules",
        "D": "Total cessation of photosynthesis across the whole field"
      },
      "correctOption": "A",
      "explanation": "Non-target resistant plants synthesize callose papillae and cross-link phenolics at the contact site, physically blocking the penetration peg."
    },
    {
      "id": "AGR233-U2-MCQ54",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Hard",
      "questionText": "During fermentation screening, why are 'microsclerotia' considered a superior propagule type compared to conidia for certain soil-applied bioherbicides?",
      "options": {
        "A": "Microsclerotia are compact melanized hyphal aggregates that survive mechanical shear during formulation drying and persist in soil",
        "B": "Microsclerotia fly through the air across oceans",
        "C": "Microsclerotia require no carbon or nitrogen to survive",
        "D": "Microsclerotia can be eaten directly by humans as grain"
      },
      "correctOption": "A",
      "explanation": "Microsclerotia are melanized, desiccation-tolerant hyphal resting bodies capable of surviving formulation drying and germinating hyphally in soil."
    },
    {
      "id": "AGR233-U2-MCQ55",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Hard",
      "questionText": "Puccinia canaliculata was evaluated as a mycoherbicide to manage yellow nutsedge (Cyperus esculentus) in combination with which synthetic chemical safener/herbicide?",
      "options": {
        "A": "Sub-lethal rates of bentazon or paraquat",
        "B": "Pure sulfuric acid",
        "C": "Hexachlorobenzene",
        "D": "DDT"
      },
      "correctOption": "A",
      "explanation": "Integrating Puccinia canaliculata with sub-lethal rates of bentazon or paraquat resulted in synergistic desiccation and tuber suppression in yellow nutsedge."
    },
    {
      "id": "AGR233-U2-MCQ56",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "difficulty": "Hard",
      "questionText": "In the context of the 'Disease Triangle', why must environmental parameters (temperature, dew duration) be strictly standardized during Postulate 3 trials?",
      "options": {
        "A": "Disease is an emergent property requiring an interaction between a virulent pathogen, a susceptible host, and a conducive environment",
        "B": "To ensure the laboratory thermometer does not break",
        "C": "Because pathogens only infect plants on sunny days",
        "D": "Environmental parameters have zero effect on fungal infection"
      },
      "correctOption": "A",
      "explanation": "According to the Disease Triangle, virulent pathogens fail to cause disease if the microclimate (dew period, temperature) is not conducive."
    },
    {
      "id": "AGR233-U2-MCQ57",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "difficulty": "Hard",
      "questionText": "How does the production of excessive indole-3-acetic acid (IAA) by deleterious rhizobacteria lead to weed growth suppression?",
      "options": {
        "A": "Supra-optimal auxin levels trigger excessive ethylene biosynthesis, arresting root elongation and stunting seedling development",
        "B": "IAA dissolves the plant cell wall into water",
        "C": "IAA blocks carbon dioxide from entering stomata",
        "D": "IAA turns roots into leaves"
      },
      "correctOption": "A",
      "explanation": "Auxin overproduction stimulates 1-aminocyclopropane-1-carboxylate (ACC) synthase, elevating ethylene to levels that stunt root elongation."
    },
    {
      "id": "AGR233-U2-MCQ58",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "difficulty": "Hard",
      "questionText": "What statistical bioassay model is routinely used to calculate LT\u2085\u2080 and LC\u2085\u2080 values from cumulative weed mortality data?",
      "options": {
        "A": "Probit analysis (Finney's method) or log-logistic regression",
        "B": "Fourier transform infrared spectroscopy",
        "C": "Student's t-test for single pairs",
        "D": "Hardy-Weinberg equilibrium equation"
      },
      "correctOption": "A",
      "explanation": "Probit analysis transforms sigmoidal dose-response mortality curves into linear regressions to calculate precise LC\u2085\u2080 and LT\u2085\u2080 benchmarks."
    },
    {
      "id": "AGR233-U2-MCQ59",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "difficulty": "Hard",
      "questionText": "Why is 'conidial hydrophobicity' an important physical screening metric for foliar bioherbicide candidate strains?",
      "options": {
        "A": "Hydrophobic conidia coated in rodlet proteins adhere far more tenaciously to waxy, water-repellent leaf cuticles",
        "B": "Hydrophobic conidia dissolve immediately in rainwater",
        "C": "Hydrophobic conidia sink into soil aquifers",
        "D": "It prevents spores from being seen by birds"
      },
      "correctOption": "A",
      "explanation": "Fungal hydrophobins create a rodlet layer on conidia that drives hydrophobic interactions, cementing spores to the waxy leaf cuticle."
    },
    {
      "id": "AGR233-U2-MCQ60",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "difficulty": "Hard",
      "questionText": "What physiological mechanism prevents Sclerotinia minor from being used as an unformulated aerial foliar spray in broad-acre agriculture?",
      "options": {
        "A": "Its broad host range across dicotyledonous cash crops (soybean, canola) necessitates physical placement restricted to turfgrass crowns",
        "B": "It only infects plants growing under seawater",
        "C": "It cannot survive temperatures above 5\u00b0C",
        "D": "It is an obligate algae"
      },
      "correctOption": "A",
      "explanation": "Sclerotinia minor attacks many broadleaf dicots; it can only be safely applied in monocot turfgrass where granular formulation restricts placement to weed crowns."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "AGR233-U2-SUB01",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Detail the hemibiotrophic infection process of Colletotrichum species on weed hosts. Explain why this genus has produced multiple commercial bioherbicide candidates.",
      "modelAnswer": "The genus Colletotrichum (Ascomycota) represents the most successful taxonomic group of fungal plant pathogens utilized in commercial mycoherbicide development, yielding milestone products such as Collego (C. gloeosporioides f. sp. aeschynomene) and Biomal (C. gloeosporioides f. sp. malvae).\n\nSequential Stages of the Hemibiotrophic Infection Process:\n1. Conidial Adhesion and Hydration: Asexual conidia embedded in mucilage adhere tenaciously to the hydrophobic epicuticular wax of the target weed leaf. Upon hydration in a dew film, spores germinate within 4 to 8 hours.\n2. Melanized Appressorium Formation: The germ tube tip differentiates into a domed, thick-walled appressorium. The inner layer of the appressorial wall is impregnated with 1,8-dihydroxynaphthalene (DHN) melanin, which forms a dense, semi-permeable boundary. The cell accumulates high intracellular glycerol concentrations (>4 M), drawing in water via osmosis and generating massive hydrostatic turgor pressure (frequently exceeding 40 to 60 atmospheres).\n3. Cuticular Penetration: A slender penetration peg emerges from the base of the appressorium, puncturing the cuticle through a combination of mechanical pressure and localized secretion of cutinases, esterases, and cellulases.\n4. Biotrophic Phase: Upon entering the epidermal cell lumen, the primary hypha invaginates the host plasma membrane without rupturing it. The fungus extracts nutrients biotrophically while suppressing host hypersensitive defense responses, keeping the host tissue visually symptom-free.\n5. Necrotrophic Switch and Tissue Collapse: Within 48 to 72 hours, secondary hyphae differentiate, rapidly secreting endopolygalacturonases, pectate lyases, and phytotoxins. The host plasma membrane is ruptured, causing rapid cell lysis, water-soaking, sunken anthracnose lesions, stem girdling, and complete weed mortality within 7 to 14 days.\n\nReasons for Commercial Prominence:\n- High Host Specificity: Strains exhibit strict 'forma specialis' adaptations restricted to specific weed species.\n- Liquid Fermentation Feasibility: Many Colletotrichum strains readily differentiate into billions of infective blastospores in submerged liquid culture, enabling cost-effective commercial scale-up.",
      "outlinePoints": [
        "Conidial attachment and mucilage adhesion to hydrophobic leaf cuticles",
        "Appressorial melanization via DHN pathway and generation of osmotic hydrostatic turgor",
        "Mechanical penetration peg driven by pressure and localized cutinase secretion",
        "Biotrophic asymptomatic phase invaginating host plasma membranes",
        "Necrotrophic switch triggering tissue lysis, sunken cankers, and vascular collapse",
        "Commercial attributes: forma specialis host specificity and submerged fermentation scalability"
      ]
    },
    {
      "id": "AGR233-U2-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 8,
      "difficulty": "Medium",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Compare the infection strategies, host ranges, and commercial deployment limitations of rust fungi (Puccinia spp.) versus necrotrophic fungi (Sclerotinia spp.) in weed biocontrol.",
      "modelAnswer": "Rust fungi (Puccinia spp.) and necrotrophic fungi (Sclerotinia spp.) occupy polar opposite ecological and pathological niches in weed biocontrol:\n\n1. Trophic Interaction and Infection Strategy:\n- Puccinia (Obligate Biotrophs): Penetrate exclusively through natural stomatal openings or via specialized appressoria. They form intercellular hyphae and penetrate host cell walls using specialized haustoria to absorb nutrients without killing host cells. The host remains alive as pustules (uredinia) erupt through the epidermis to disperse repeating airborne urediniospores.\n- Sclerotinia (Destructive Necrotrophs): Aggressively kill host cells ahead of advancing hyphae. They secrete massive quantities of cell-wall-degrading enzymes (pectinases, cellulases) and millimolar concentrations of oxalic acid. Oxalic acid lowers ambient pH to ~3.5 and chelates wall-bound calcium, causing rapid tissue collapse, watery soft rot, and stem lodging within 48 to 96 hours.\n\n2. Host Range and Biosafety:\n- Puccinia: Extraordinarily narrow host ranges, often restricted to a single weed species or even specific weed biotypes (e.g., P. chondrillina on Chondrilla juncea). They pose virtually zero risk of non-target crop infection.\n- Sclerotinia: Broad host ranges. Sclerotinia minor and S. sclerotiorum attack hundreds of dicotyledonous plant species, including major crops like soybean, canola, and sunflower.\n\n3. Commercial Deployment and Formulation Limitations:\n- Puccinia: Cannot be cultured on non-living synthetic media in industrial fermenters. Inoculum must be produced on living greenhouse-grown host plants, making large-scale commercial inundative bioherbicide formulation cost-prohibitive. They are primarily deployed in classical inoculative biocontrol.\n- Sclerotinia: Readily cultured on synthetic grain substrates (barley, wheat) and formulated as solid dry granules. However, because of their broad host range, application is strictly restricted to monocotyledonous crops (e.g., amenity turfgrass) where formulation placement targets weed crowns directly, preventing drift onto susceptible broadleaf crops.",
      "outlinePoints": [
        "Trophic mechanism: obligate biotrophic haustorial feeding vs aggressive necrotrophic oxalic acid secretion",
        "Penetration: stomatal/haustorial invasion vs rapid enzymatic tissue maceration",
        "Host range: extreme single-species specificity (Puccinia) vs broad dicot spectrum (Sclerotinia)",
        "Industrial mass production: unculturable on synthetic media vs rapid solid-substrate fermentation",
        "Operational deployment: classical biocontrol vs granular turfgrass formulation"
      ]
    },
    {
      "id": "AGR233-U2-SUB03",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "questionText": "Explain the four steps of Koch's Postulates and their rigorous application in weed pathology. Discuss the modern experimental adaptations required for obligate biotrophs and unculturable microorganisms.",
      "modelAnswer": "Koch's Postulates, established by Robert Koch in 1884, provide the definitive scientific framework required to prove that a specific microorganism is the causal agent of an infectious disease syndrome. In weed pathology, fulfilling these postulates is the mandatory first step before any isolate can be considered a bioherbicide candidate.\n\nThe Four Classical Postulates in Weed Pathology:\n1. Constant Association: The suspected microbial pathogen must be consistently found in diseased tissues across surveyed weed populations, and must be absent in healthy specimens. Pathologists collect symptomatic leaves or stems from multiple agro-ecological zones, documenting consistent symptoms (e.g., leaf blight, stem canker).\n2. Axenic Isolation: The microorganism must be isolated from the diseased weed tissue and cultured in pure culture on synthetic nutrient media (e.g., potato dextrose agar, nutrient broth), free from secondary saprophytes.\n3. Inoculation and Pathogenicity Reproduction: Propagules harvested from the pure culture must be inoculated onto healthy, disease-free specimens of the target weed. Under controlled conducive environmental conditions (calibrated dew period and temperature), the inoculation must reproduce the identical symptoms observed in the original field specimen.\n4. Re-isolation: The identical microorganism must be re-isolated from the artificially infected experimental weed, grown again in pure culture, and confirmed to match the original isolate in morphological and physiological traits.\n\nModern Experimental Adaptations:\n1. Obligate Biotrophs (e.g., Rusts, Powdery Mildews):\nBecause obligate biotrophs cannot grow on cell-free artificial agar (violating Postulate 2), pathologists utilize single-pustule or single-urediniospore cultures maintained continuously on living, detached leaf segments in sterile water agar chambers.\n2. Molecular Barcoding Integration:\nPostulates 2 and 4 are now fortified with molecular verification. PCR amplification and Sanger sequencing of the internal transcribed spacer (ITS rDNA) and translation elongation factor (TEF-1alpha) prove 100% sequence identity between the original field isolate and the re-isolated pathogen.\n3. Standardized Inoculation Protocols:\nTrack-mounted precision sprayers ensure uniform volumetric delivery, and standardized Disease Severity Indices (DSI) quantify Postulate 3 symptom reproduction.",
      "outlinePoints": [
        "Historical and regulatory importance of Koch's Postulates in weed biocontrol",
        "Postulate 1: constant association with symptomatic tissues across field populations",
        "Postulate 2: axenic isolation and pure culture establishment on artificial media",
        "Postulate 3: artificial inoculation of healthy weed seedlings reproducing exact symptoms",
        "Postulate 4: re-isolation and verification of identical morphological identity",
        "Modern adaptations: detached-leaf cultures for obligate biotrophs and ITS rDNA sequencing"
      ]
    },
    {
      "id": "AGR233-U2-SUB04",
      "questionType": "APPLICATION",
      "maxMarks": 8,
      "difficulty": "Hard",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "questionText": "An agricultural research institute has isolated a virulent Phoma strain targeting Xanthium strumarium (cocklebur). Construct a complete Centrifugal Phylogenetic Testing dossier detailing specific test plants across all four tiers.",
      "modelAnswer": "To prove the biosafety of the Phoma isolate targeting Xanthium strumarium (family Asteraceae, tribe Heliantheae) for CIB&RC registration, a comprehensive Centrifugal Phylogenetic Testing dossier is constructed following Wapshere's four-tier methodology:\n\nTier I: Congeners and Weed Biotypes (Target Genus Xanthium)\n- Target: Xanthium strumarium (multiple geographic biotypes across India).\n- Closely related species: Xanthium spinosum (spiny cocklebur).\n- Objective: Verify that the candidate infects diverse regional biotypes of cocklebur while evaluating susceptibility within the genus.\n\nTier II: Confamilial Plants and Economic Crops (Family Asteraceae)\nTesting species belonging to the same tribe (Heliantheae) and broader Asteraceae family cultivated in the target release agro-ecosystems:\n- Sunflower (Helianthus annuus) \u2014 critical commercial oilseed crop in the same tribe.\n- Safflower (Carthamus tinctorius) \u2014 major rabi oilseed crop in Asteraceae.\n- Lettuce (Lactuca sativa) \u2014 commercial horticultural vegetable.\n- Marigold (Tagetes erecta) and Chrysanthemum \u2014 economically vital commercial ornamental flowers.\n- Niger (Guizotia abyssinica) \u2014 tribal oilseed crop.\n- Objective: Confirm zero pathogenicity on economically vital Asteraceae crops.\n\nTier III: Allied Orders and Super-orders\nTesting representatives from closely related botanical orders (e.g., Asterales, Campanulales, Solanales):\n- Tomato (Solanum lycopersicum) and Potato (Solanum tuberosum) \u2014 Solanaceae.\n- Sweet potato (Ipomoea batatas) \u2014 Convolvulaceae.\n- Objective: Rule out broader dicotyledonous susceptibility.\n\nTier IV: Major Staple Economic Crops and Keystone Indigenous Flora\nTesting major regional agricultural staples regardless of evolutionary distance:\n- Cereals: Rice (Oryza sativa), Wheat (Triticum aestivum), Maize (Zea mays).\n- Pulses and Oilseeds: Chickpea (Cicer arietinum), Pigeonpea (Cajanus cajan), Soybean (Glycine max), Mustard (Brassica juncea).\n- Fiber: Cotton (Gossypium hirsutum).\n- Indigenous trees: Neem (Azadirachta indica).\n\nTesting Protocol: All plants are inoculated at 10\u00d7 field dose (10\u2078 conidia/mL) with a 24-hour dew period at 22\u201325\u00b0C. Unwounded plants must exhibit zero sporulating lesions across all Tier II, III, and IV entries.",
      "outlinePoints": [
        "Rationale of centrifugal screening for Xanthium strumarium (Asteraceae: Heliantheae)",
        "Tier I: Xanthium spinosum and diverse geographic biotypes of X. strumarium",
        "Tier II: Asteraceae economic crops (sunflower, safflower, lettuce, marigold, niger)",
        "Tier III: Allied botanical orders (Solanaceae: tomato, potato; sweet potato)",
        "Tier IV: National staples (rice, wheat, maize, chickpea, cotton, mustard, neem)",
        "Worst-case bioassay parameters (10x dose, 24-hr dew period) confirming zero non-target infection"
      ]
    },
    {
      "id": "AGR233-U2-SUB05",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "questionText": "Discuss the modes of action, delivery systems, and agronomic potential of Deleterious Rhizobacteria (DRB) in managing annual grass weeds in cereal rotations.",
      "modelAnswer": "Deleterious Rhizobacteria (DRB) are non-parasitic or weakly parasitic soil bacteria that aggressively colonize the root surfaces (rhizoplane) of specific weed seedlings, suppressing their growth without causing macroscopic soft rot or systemic galling.\n\nModes of Action of DRB:\n1. Production of Phytotoxic Secondary Metabolites: DRB synthesize low-molecular-weight phytotoxins, most notably hydrogen cyanide (HCN). HCN inhibits cytochrome c oxidase in the mitochondrial respiratory chain, depriving emerging weed radicles of ATP and halting root elongation.\n2. Phytohormonal Imbalances: Strains synthesize supra-optimal concentrations of indole-3-acetic acid (IAA). Elevated auxin levels stimulate 1-aminocyclopropane-1-carboxylate (ACC) synthase in weed root cells, triggering massive ethylene synthesis that stunts primary root growth by 60 to 90%.\n3. Siderophore-Mediated Iron Depletion: Highly efficient iron-chelating pyoverdines produced by Pseudomonas fluorescens scavenge rhizosphere ferric iron (Fe\u00b3\u207a), depriving weed root cells of essential micronutrients.\n4. Disruption of Membrane Integrity: Lipopeptide surfactants and membrane-lytic enzymes produced by DRB alter root cell membrane permeability, causing electrolyte leakage and stunted nutrient absorption.\n\nDelivery Systems and Field Application:\n- Seed Coating / Biopriming: Direct application of bacterial suspensions formulated with carboxymethyl cellulose (CMC) or peat carriers onto crop seeds (e.g., winter wheat), allowing the bacteria to proliferate in the furrow upon sowing.\n- In-Furrow Granular Application: Formulating DRB with vermiculite or biochar granules applied directly into the furrow during drill-sowing.\n- Liquid In-Furrow Drenching: Injecting liquid bacterial broths through specialized tubes mounted on tractor seed drills.\n\nAgronomic Potential in Cereal Rotations:\nDRB provide an exceptional tool for managing difficult-to-control annual grass weeds (such as downy brome, Bromus tectorum, and jointed goatgrass, Aegilops cylindrica) in winter wheat rotations. Because these weeds belong to the same botanical family (Poaceae) as wheat, selective synthetic herbicides are scarce. Specific DRB strains (e.g., P. fluorescens D7) selectively colonize weed roots without inhibiting wheat root development, providing an effective biological filter in the seedbed.",
      "outlinePoints": [
        "Definition of Deleterious Rhizobacteria (DRB) as non-parasitic root colonizers",
        "Mode 1: hydrogen cyanide (HCN) and mitochondrial respiration inhibition",
        "Mode 2: supra-optimal auxin (IAA) production and ethylene-mediated stunting",
        "Mode 3: pyoverdine siderophore iron competition and membrane permeability disruption",
        "Delivery technology: seed biopriming, in-furrow granules, and liquid drill drenching",
        "Agronomic utility in suppressing downy brome in winter wheat rotations"
      ]
    },
    {
      "id": "AGR233-U2-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Describe the morphology, conidial characteristics, and herbicidal potential of the genus Alternaria.",
      "modelAnswer": "Morphology and Conidial Characteristics:\nAlternaria (Ascomycota: Pleosporaceae) is a widely distributed genus of necrotrophic plant pathogens characterized by dark, dematiaceous (melanized) hyphae and distinctive large conidia. \n- Conidial Morphology: Conidia are obclavate, beaked, and muriform\u2014divided by both transverse and longitudinal septa. They are dark brown to olivaceous due to dense melanin deposition in the cell walls, conferring superior resistance to solar ultraviolet radiation and desiccation.\n- Production: Conidia are borne singly or in simple/branched chains on simple, erect conidiophores.\n\nHerbicidal Potential:\nAlternaria species are aggressive necrotrophs that secrete potent host-specific and non-specific secondary phytotoxins (such as alternariols, tentoxin, and maculosin) that rapidly disrupt chloroplast membranes and cause foliar necrosis. \nProminent bioherbicide candidates include:\n1. Alternaria cassiae: Highly effective mycoherbicide candidate evaluated for controlling sicklepod (Cassia obtusifolia) in soybean and peanut crops.\n2. Alternaria destruens (Smolder\u00ae): Commercialized for the biological control of parasitic dodder (Cuscuta spp.) in cranberries and alfalfa.",
      "outlinePoints": [
        "Taxonomic grouping: dematiaceous ascomycete with melanized hyphae",
        "Conidial structure: large, muriform (transverse/longitudinal septa), beaked, melanized",
        "UV and desiccation resilience conferred by melanized cell walls",
        "Herbicidal mode of action: toxin secretion (tentoxin, alternariol) and tissue necrosis",
        "Key candidate examples: Alternaria cassiae (sicklepod) and Alternaria destruens (dodder)"
      ]
    },
    {
      "id": "AGR233-U2-SUB07",
      "questionType": "CASE_STUDY",
      "maxMarks": 8,
      "difficulty": "Hard",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Case Analysis: Evaluate the scientific and agronomic challenges in deploying Fusarium oxysporum f. sp. strigae as a bioherbicide against Striga hermonthica in African smallholder cereal fields.",
      "modelAnswer": "Case Analysis: Fusarium oxysporum f. sp. strigae (Fos) against Striga hermonthica:\n\nTarget Weed Biology:\nStriga hermonthica (witchweed) is an obligate root-parasitic weed that infests over 50 million hectares of sub-Saharan African cereals (sorghum, maize, pearl millet), causing yield losses up to 100%. The weed attaches underground to host roots via haustoria, siphoning water, carbohydrates, and minerals before emerging above ground.\n\nBiocontrol Potential of Fos:\nSelected host-specific strains of Fusarium oxysporum f. sp. strigae (e.g., strain 'Foxy 2') selectively infect Striga germ tubes, haustoria, and subterranean stems. It secretes amino acids and toxins that cause wilting and necrosis of the parasite prior to its emergence, protecting cereal yield.\n\nScientific and Agronomic Challenges:\n1. Delivery to the Subterranean Target Zone:\nBecause Striga inflicts 75% of its damage underground, foliar sprays are useless. The bioherbicide must be delivered directly into the soil root zone. This requires granular formulations (e.g., sorghum-grain based) applied during hand-planting, which requires large application volumes (25\u201350 kg/ha) that place heavy labor demands on smallholders.\n2. Soil Microbial Antagonism:\nThe native African soil microbiome contains intense populations of antagonistic actinomycetes, Trichoderma, and nematodes that can outcompete and consume Fos chlamydospores before they reach the germinating Striga seed.\n3. Biosafety and Social Perception Concerns:\nFusarium oxysporum is a notorious genus associated with wilt diseases across diverse crops and hazardous mycotoxin production (fumonisins). Researchers must provide rigorous molecular evidence proving that the candidate strain lacks mycotoxin biosynthetic genes and does not cross-infect maize, sorghum, cowpea, or groundnut.\n4. Adoption Constraints in Smallholder Farming:\nResource-poor smallholders cannot afford cold storage. The formulation must remain viable for months under ambient tropical heat (35\u201340\u00b0C). Recent innovations like 'Toothpick Technology'\u2014where farmers inoculate cooked sorghum grains using pathogen-coated wooden toothpicks on-farm\u2014help circumvent industrial supply chain limitations.",
      "outlinePoints": [
        "Striga hermonthica biology: obligate subterranean root parasite on sorghum and maize",
        "Fos biological mechanism: selective haustorial and underground stem infection",
        "Challenge 1: soil root-zone delivery requiring heavy granular inputs during hand planting",
        "Challenge 2: competition and antagonism from native soil microflora",
        "Challenge 3: biosafety concerns regarding Fusarium mycotoxins and non-target wilt",
        "Challenge 4: on-farm inoculum production innovations (Toothpick technology) for smallholders"
      ]
    },
    {
      "id": "AGR233-U2-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "What is strain attenuation in bioherbicide research? How can an academic laboratory prevent culture degeneration?",
      "modelAnswer": "Strain Attenuation:\nStrain attenuation (or culture degeneration) is the progressive, spontaneous loss of pathogenic virulence, sporulation capacity, or appressorial formation exhibited by microbial biocontrol agents during repeated subculturing on artificial nutrient agar media. In the absence of host plant immune defense pressures, fungi downregulate energy-intensive secondary metabolite and cutinolytic enzyme gene clusters, accumulating physiological or genetic mutations that reduce virulence.\n\nLaboratory Protocols to Prevent Culture Degeneration:\n1. Master Cell Bank System: Immediately upon isolation and single-spore purification, establish a primary 'Master Seed Bank'. Aliquots are preserved in cryogenic storage and never subcultured repeatedly. Working cultures are derived directly from the master stock and discarded after 2 to 3 generations.\n2. Ultra-Low Cryopreservation: Store conidia and mycelia in liquid nitrogen (-196\u00b0C) or ultra-low freezers (-80\u00b0C) using 15\u201320% sterile glycerol or 10% dimethyl sulfoxide (DMSO) as cryoprotectants.\n3. Lyophilization (Freeze-Drying): Lyophilize spores in skim milk or sucrose protective matrices inside hermetically sealed glass ampoules under high vacuum.\n4. Host Passaging: Annually re-inoculate the stored culture onto living, susceptible target weed seedlings. Re-isolating the fungus from active, advancing necrosis restores virulence gene expression and ensures selection of aggressive pathotypes.",
      "outlinePoints": [
        "Definition of strain attenuation and downregulation of pathogenicity genes",
        "Mechanism: lack of selective host immune pressure on artificial agar",
        "Prevention 1: Master Cell Bank two-tier distribution protocol",
        "Prevention 2: ultra-low cryopreservation (-80\u00b0C / -196\u00b0C) with glycerol cryoprotectants",
        "Prevention 3: lyophilization (freeze-drying) in vacuum-sealed glass ampoules",
        "Prevention 4: periodic host passaging through living weed seedlings"
      ]
    },
    {
      "id": "AGR233-U2-SUB09",
      "questionType": "APPLICATION",
      "maxMarks": 7,
      "difficulty": "Hard",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "Describe a high-throughput screening bioassay protocol used to evaluate the virulence of 100 newly collected fungal isolates against an agricultural weed.",
      "modelAnswer": "A high-throughput screening pipeline systematically narrows 100 wild isolates down to 1\u20132 hypervirulent commercial candidates across three structured tiers:\n\nTier 1: Primary High-Throughput In Vitro Screening (Days 1\u20137)\n1. Detached Leaf Bioassay: Healthy, uniform leaves harvested from 3-week-old weed seedlings are placed in multi-well bioassay trays lined with water-saturated filter paper.\n2. Standardized Droplet Inoculation: A 10-microliter droplet of calibrated conidial suspension (1 \u00d7 10\u2076 conidia/mL) in 0.05% Tween-20 is micropipetted onto each leaf. Trays are incubated at 25\u00b0C under continuous high humidity.\n3. Automated Digital Lesion Phenotyping: At 24, 48, and 72 hours, trays are digitally imaged. Image-analysis software measures lesion surface area expansion rate (mm\u00b2/hr). Isolates producing necrotic lesions <10 mm\u00b2 at 48 hours are discarded, narrowing the cohort to the top 20 isolates.\n\nTier 2: Secondary Whole-Plant In Vivo Assay (Days 8\u201320)\n1. Whole-Seedling Spraying: Target weed seedlings grown in standardized potting soil (4-leaf stage) are sprayed using an automated track sprayer calibrated to deliver 200 L/ha at 1 \u00d7 10\u2077 spores/mL.\n2. Controlled Dew Chamber Exposure: Plants are subjected to a standardized, sub-optimal dew period (8 hours at 22\u00b0C) to simulate realistic field stress.\n3. Virulence Kinetics Scoring: Daily disease ratings (0\u20135 scale) establish the LT\u2085\u2080 (Lethal Time 50%) and percent total mortality at 14 days. Isolates with LT\u2085\u2080 > 5 days or mortality <90% are eliminated, selecting the top 5 candidates.\n\nTier 3: Fermentation and Stress Profiling (Days 21\u201335)\n1. Liquid Submerged Sporulation: Isolates are cultured in shake flasks containing inexpensive agricultural media (corn steep liquor, molasses) to measure spore yield per mL.\n2. Thermotolerance and Photostability: Evaluating germination retention following heat stress (40\u00b0C for 4 hours) and calibrated UV-B solar radiation. The single isolate combining rapid LT\u2085\u2080, high liquid yield, and stress tolerance is advanced to formulation development.",
      "outlinePoints": [
        "Tier 1 in vitro: multi-well detached leaf bioassay with automated digital lesion imaging",
        "Elimination criteria in Tier 1: lesion expansion rate < 10 mm\u00b2 at 48 hours",
        "Tier 2 in vivo: automated track spraying of whole seedlings under realistic sub-optimal dew (8 hrs)",
        "Virulence scoring: LT\u2085\u2080 calculation and disease severity index under controlled greenhouse trials",
        "Tier 3 industrial profiling: liquid fermentation sporulation kinetics, thermotolerance, and UV-B stability"
      ]
    },
    {
      "id": "AGR233-U2-SUB10",
      "questionType": "COMPARISON",
      "maxMarks": 6,
      "difficulty": "Medium",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Contrast the pathogenic mechanisms of Xanthomonas campestris pv. poae (bacterium) and Colletotrichum gloeosporioides (fungus) in killing weed tissues.",
      "modelAnswer": "Xanthomonas campestris pv. poae and Colletotrichum gloeosporioides deploy fundamentally different physical and biochemical strategies to infect and kill target weed tissues:\n\n1. Entry and Initial Invasion:\n- Colletotrichum gloeosporioides (Fungus): Actively penetrates intact, unbroken plant surfaces. It germinates, forms a melanized appressorium, and uses massive internal hydrostatic turgor pressure paired with cutinase enzymes to physically pierce the hydrophobic cuticular barrier.\n- Xanthomonas campestris pv. poae (Bacterium): Completely lacks the physical ability to pierce an intact cuticular barrier. It relies strictly on passive entry through natural openings (hydathodes, stomata) or mechanical wounds (such as leaf blade tips sheared off during turf mowing).\n\n2. Tissue Colonization:\n- C. gloeosporioides: Exhibits hemibiotrophic tissue colonization. It invaginates epidermal cells biotrophically, then transitions to destructive necrotrophy, ramifying through cortical parenchyma, lysing cell walls via cellulases and pectinases, and forming sunken anthracnose lesions.\n- X. campestris pv. poae: Specifically colonizes the vascular xylem system. It multiplies within vascular bundles, translocating systemically through xylem vessels.\n\n3. Mechanism of Lethality:\n- C. gloeosporioides: Lethality occurs via enzymatic tissue maceration, cuticular collapse, stem girdling, and loss of structural integrity, leading to desiccation and foliar necrosis.\n- X. campestris pv. poae: Lethality occurs via vascular occlusion. The bacteria secrete abundant extracellular polysaccharide (xanthan slime) and form dense biofilm plugs that obstruct water transport in the xylem, inducing systemic water-stress wilt, tip chlorosis, and desiccation of the grass plant within 10 to 14 days.",
      "outlinePoints": [
        "Entry: active cuticular penetration via appressorial turgor (fungus) vs passive entry through mowing wounds (bacterium)",
        "Colonization: parenchymal hemibiotrophy/necrotrophy (fungus) vs systemic xylem vascular colonization (bacterium)",
        "Lethality: localized enzymatic maceration and stem girdling vs physical vascular occlusion by xanthan slime plugs"
      ]
    },
    {
      "id": "AGR233-U2-SUB11",
      "questionType": "DEFINITION",
      "maxMarks": 4,
      "difficulty": "Easy",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "Define the terms 'Virulence' and 'Aggressiveness' in microbial weed pathology. How are they quantified experimentally?",
      "modelAnswer": "In plant pathology and bioherbicide science, 'Virulence' and 'Aggressiveness' describe distinct facets of microbial pathogenicity:\n\n1. Virulence:\n- Definition: The capacity of a pathogen isolate to cause disease on a specific host genotype or cultivar; in a gene-for-gene context, virulence is qualitative (all-or-nothing compatibility determined by specific virulence/avirulence genes interacting with host resistance genes).\n- Experimental Quantification: Measured as an infection percentage or compatibility ratio on differential host varieties (e.g., compatible '+' or incompatible '-').\n\n2. Aggressiveness:\n- Definition: The quantitative magnitude or speed of disease severity induced by a virulent pathogen on a susceptible host. While two strains may both be virulent, one may destroy plant tissue significantly faster.\n- Experimental Quantification: Quantified using continuous kinetic parameters:\n  - LT\u2085\u2080 (Lethal Time 50%): The time in hours or days required to cause mortality in 50% of the test weed cohort.\n  - LC\u2085\u2080 (Lethal Concentration 50%): The minimum spore density (CFU/mL) needed to achieve 50% plant mortality.\n  - Lesion Expansion Rate: Radial necrotic growth measured in mm\u00b2 per day using digital image analysis.\n  - Area Under the Disease Progress Curve (AUDPC): Integrating disease severity scores over the experimental incubation period.",
      "outlinePoints": [
        "Definition of virulence: qualitative compatibility with specific host genotypes",
        "Experimental quantification of virulence: binary (+/-) differential host screening",
        "Definition of aggressiveness: quantitative speed and severity of disease progression",
        "Experimental metrics for aggressiveness: LT\u2085\u2080, LC\u2085\u2080, lesion growth rate, and AUDPC"
      ]
    },
    {
      "id": "AGR233-U2-SUB12",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Describe the biology and herbicidal activity of Phoma macrostoma and its secondary metabolites (macrocidins).",
      "modelAnswer": "Biology:\nPhoma macrostoma is a soil-inhabiting, pycnidial coelomycetous fungus isolated from diseased plant tissues. It produces hyaline, single-celled conidia inside dark, ostiolate pycnidia. Certain host-specific strains have been developed as commercial bioherbicides for selective broadleaf weed control in turfgrass and agricultural settings.\n\nHerbicidal Activity:\nUnlike foliar mycoherbicides that cause localized spot necrosis, Phoma macrostoma acts as a systemic bleaching bioherbicide. When applied pre-emergence or early post-emergence into the root zone, the fungus colonizes weed root cortical tissues. It selectively infects susceptible broadleaf weeds (such as dandelion, Taraxacum officinale; Canada thistle, Cirsium arvense; and clover, Trifolium spp.) without colonizing desirable monocot turfgrasses (Kentucky bluegrass, fescues).\n\nMechanism of Macrocidins:\nThe primary herbicidal activity is driven by macrocidins (Macrocidin A and B), unique cyclic tetramic acid derivatives biosynthesized by the fungus. Macrocidins are absorbed by weed roots and translocated systemically to developing foliar meristems. They inhibit carotenoid biosynthesis, causing severe chlorophyll photodestruction, systemic white bleaching of newly emerging foliage, stunted development, and complete seedling mortality within 2 to 3 weeks.",
      "outlinePoints": [
        "Taxonomic grouping: coelomycete producing pycnidia and asexual conidia",
        "Target weeds in turf: dandelion, Canada thistle, and clover",
        "Root-colonizing systemic activity sparing monocot turfgrasses",
        "Macrocidins: cyclic tetramic acid derivatives as active phytotoxins",
        "Mode of action: inhibition of carotenoid biosynthesis and systemic foliar bleaching"
      ]
    },
    {
      "id": "AGR233-U2-SUB13",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)",
      "questionText": "Discuss the potential mechanisms by which a non-target crop plant defends itself against an attempted bioherbicide infection. How do these defense barriers ensure biosafety?",
      "modelAnswer": "The biological safety of host-specific bioherbicides relies on multi-layered plant immune defense systems. Non-target commercial crops deploy both pre-formed structural barriers and dynamically induced physiological responses that arrest candidate pathogens:\n\n1. Pre-formed Structural and Chemical Barriers (Passive Defenses):\n- Epicuticular Wax Architecture: Non-target crops often feature dense, crystalline epicuticular wax plates (e.g., glaucous coatings in wheat or cabbage) that fail to provide the specific chemical signals (such as long-chain fatty alcohols) required by specialized weed pathogens to induce spore germination.\n- Cuticular Thickness and Lignification: Thick, highly cross-linked cuticles and silica inclusions physically impede appressorial penetration pegs.\n- Constitutive Phytoanticipins: Non-target tissues maintain stores of pre-formed antimicrobial secondary metabolites (e.g., saponins like avenacin in oats, glucosinolates in Brassicaceae) stored in cell vacuoles. Incompatible spores that attempt penetration rupture vacuoles, releasing enzymes that convert phytoanticipins into active toxins that kill the invading hyphae.\n\n2. Induced Active Defense Mechanisms (Dynamic Defenses):\n- Pattern Recognition and PAMP-Triggered Immunity (PTI): Non-target plant cell surfaces possess Pattern Recognition Receptors (PRRs) that bind fungal Pathogen-Associated Molecular Patterns (PAMPs, such as chitin and beta-glucans). This triggers an immediate cellular defense response.\n- Oxidative Burst: Plant cells rapidly activate plasma-membrane-bound NADPH oxidases, producing a massive localized influx of reactive oxygen species (ROS: hydrogen peroxide, superoxide radicals) that cross-link cell wall proteins and directly inhibit fungal hyphae.\n- Callose Papillae Deposition: Directly beneath the penetration peg, the plant cell rapidly deposits dense callose papillae impregnated with phenolics and silicon, physically blocking entry.\n- Hypersensitive Response (HR): If the fungus penetrates into a host cell, the plant executes localized programmed cell death, desiccating the cell and starving hemibiotrophic or biotrophic fungi.\n- Synthesis of Inducible Phytoalexins: Phenylpropanoid and terpenoid pathways are activated, flooding tissues with targeted antimicrobial compounds that arrest fungal growth.",
      "outlinePoints": [
        "Pre-formed passive barriers: epicuticular wax architecture and lack of germination cues",
        "Cuticular thickness and constitutive phytoanticipins (e.g., avenacins, glucosinolates)",
        "PAMP-Triggered Immunity (PTI) via Pattern Recognition Receptors detecting chitin",
        "Oxidative burst: NADPH oxidase-generated ROS cross-linking walls and inhibiting hyphae",
        "Callose papillae physical barrier deposition at attempted penetration sites",
        "Hypersensitive Response (HR) cell death and rapid de novo phytoalexin synthesis"
      ]
    },
    {
      "id": "AGR233-U2-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "Explain the role of fungal hydrophobins in the formulation and target adhesion of bioherbicide conidia.",
      "modelAnswer": "Fungal hydrophobins are small (70 to 120 amino acid), cysteine-rich amphipathic proteins secreted by filamentous fungi that self-assemble at hydrophobic-hydrophilic interfaces.\n\nRoles in Bioherbicide Science:\n1. Assembly of the Conidial Rodlet Layer:\nHydrophobins assemble into an extraordinarily durable, insoluble, paracrystalline monolayer known as the 'rodlet layer' on the outer cell wall of aerial conidia. This layer gives conidia high surface hydrophobicity.\n\n2. Adhesion to Epicuticular Waxes:\nThe target weed leaf cuticle is covered in hydrophobic epicuticular wax that naturally repels water droplets. The hydrophobic rodlet layer drives strong hydrophobic-hydrophobic interactions, allowing dry or formulated conidia to adhere tenaciously to the leaf surface without being washed off by dew or light rainfall.\n\n3. Triggering Germination and Appressorial Differentiation:\nThe interaction between conidial hydrophobins and the hydrophobic cuticular wax provides the physical thigmotropic (surface-contact) signal required to activate cyclic AMP (cAMP) and mitogen-activated protein kinase (MAPK) signaling cascades, triggering germ tube outgrowth and appressorium formation.\n\n4. Formulation Implications:\nDue to their hydrophobic nature, unformulated aerial conidia clump and resist suspension in pure water. Formulation chemists must incorporate non-ionic surfactants (such as Tween-80 or Silwet L-77) to overcome hydrophobin-induced clumping during spray tank mixing.",
      "outlinePoints": [
        "Biochemical nature: small, cysteine-rich amphipathic proteins",
        "Paracrystalline rodlet layer formation on outer conidial walls",
        "Hydrophobic adhesion to weed epicuticular waxes preventing rain wash-off",
        "Thigmotropic signaling triggering appressorium formation via MAPK pathways",
        "Formulation requirement: non-ionic surfactants to wet hydrophobic conidia"
      ]
    },
    {
      "id": "AGR233-U2-SUB15",
      "questionType": "APPLICATION",
      "maxMarks": 6,
      "difficulty": "Medium",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens",
      "questionText": "An agricultural student observes severe leaf spots on water hyacinth (Eichhornia crassipes) in a drainage canal. Outline a step-by-step laboratory workflow to isolate the causal pathogen and fulfill Koch's postulates.",
      "modelAnswer": "Step-by-Step Laboratory Workflow to Fulfill Koch's Postulates on Water Hyacinth:\n\n1. Sampling and Symptom Documentation (Postulate 1):\nCollect fresh leaf tissues exhibiting active, advancing necrotic margins. Document symptom morphology (e.g., zoned brown leaf spots with yellow halos). Ensure specimens are gathered across multiple plants.\n\n2. Surface Sterilization and Axenic Isolation (Postulate 2):\n- Excise 5 mm tissue pieces across the margin between healthy and necrotic zones.\n- Surface sterilize in 1% sodium hypochlorite (NaOCl) for 90 seconds, rinse in 70% ethanol for 30 seconds, and wash three times in sterile distilled water.\n- Plate tissues onto Potato Dextrose Agar (PDA) amended with streptomycin sulphate (to inhibit bacteria). Incubate at 25\u00b0C for 5\u20137 days.\n- Perform single-spore or hyphal-tip isolation to obtain an axenic pure culture. Document morphological traits and sequence the ITS rDNA region (e.g., identifying Alternaria or Cercospora).\n\n3. Inoculation and Pathogenicity Testing (Postulate 3):\n- Propagate healthy, disease-free water hyacinth ramets in tubs in a containment greenhouse.\n- Harvest conidia from the pure culture, preparing a calibrated suspension of 1 \u00d7 10\u2076 conidia/mL in 0.05% Tween-80.\n- Spray plants uniformly using an atomizer, placing control plants under sterile water spray.\n- Transfer inoculated plants to a mist chamber providing 100% relative humidity for 24 hours at 25\u00b0C, then maintain under greenhouse conditions.\n- Observe daily to verify the reproduction of the identical zoned necrotic leaf spots.\n\n4. Re-isolation and Verification (Postulate 4):\n- Excise tissue from the newly developed experimental lesions.\n- Repeat surface sterilization and plate onto PDA.\n- Confirm that the re-isolated fungus matches the original isolate morphologically and molecularly.",
      "outlinePoints": [
        "Step 1: symptomatic field collection and initial pathological documentation (Postulate 1)",
        "Step 2: surface sterilization (NaOCl/ethanol) and pure culture isolation on PDA (Postulate 2)",
        "Step 3: single-spore isolation and ITS rDNA molecular sequencing",
        "Step 4: mist-chamber inoculation of healthy water hyacinth reproducing exact symptoms (Postulate 3)",
        "Step 5: re-isolation and re-identification confirming morphological and molecular parity (Postulate 4)"
      ]
    },
    {
      "id": "AGR233-U2-SUB16",
      "questionType": "DEFINITION",
      "maxMarks": 4,
      "difficulty": "Easy",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia",
      "questionText": "Define the mycological term 'Forma Specialis' (f. sp.). Why is this sub-specific rank of critical importance in weed biocontrol?",
      "modelAnswer": "Definition:\nForma specialis (plural: formae speciales, abbreviated f. sp.) is an informal taxonomic sub-specific grouping applied to parasitic fungi that are morphologically identical but exhibit distinct physiological specialization and pathogenicity towards specific host plant species or genera.\n\nImportance in Weed Biocontrol:\nThe forma specialis concept is the cornerstone of bioherbicide safety and commercial viability:\n1. Guarantee of Crop Safety: A fungal species may encompass strains that attack destructive weeds alongside strains that attack valuable commercial crops. For example, Colletotrichum gloeosporioides is a broad species complex that causes severe fruit anthracnose in mango, citrus, and avocado. However, Colletotrichum gloeosporioides f. sp. aeschynomene (the active agent in Collego) infects only the weed northern jointvetch (Aeschynomene virginica), posing zero threat to adjacent rice, soybean, or fruit orchards.\n2. Regulatory Registration: International regulatory bodies (including India's CIB&RC and the US EPA) require identification at the forma specialis and strain level to confirm that candidate bioagents are biologically distinct from agricultural crop pathogens.",
      "outlinePoints": [
        "Formal definition: morphologically indistinguishable fungi exhibiting distinct host specialization",
        "Taxonomic context: infraspecific designation in parasitic Ascomycota and Basidiomycota",
        "Safety illustration: C. gloeosporioides f. sp. aeschynomene attacking weeds vs fruit anthracnose strains",
        "Regulatory significance for biopesticide registration and strain-level patents"
      ]
    },
    {
      "id": "AGR233-U2-SUB17",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species",
      "questionText": "How does Camperico\u00ae achieve selective mortality in annual bluegrass without damaging desirable turfgrasses?",
      "modelAnswer": "Camperico\u00ae (active agent: Xanthomonas campestris pv. poae strain JT-P482) achieves selective mortality in annual bluegrass (Poa annua) through physiological and anatomical compatibility:\n\n1. Entry via Mechanical Wounds:\nThe product is applied immediately following turf mowing. Mower blades sever grass leaf tips, creating open vascular entry points. The bacterial cells enter the cut xylem vessels before plant wound healing (callus/suberin deposition) seals the openings.\n\n2. Pathovar Specificity (Vascular Colonization):\nOnce inside the xylem, the bacterium displays strict pathovar-level specificity:\n- In Poa annua (Susceptible Host): The bacterium multiplies aggressively, producing xanthan extracellular polysaccharide (EPS) and biofilm matrices. These aggregates clog xylem tracheids and vessels, halting water transport and causing fatal vascular wilt within 10 to 14 days.\n- In Desirable Turfgrasses (Resistant Non-hosts): In creeping bentgrass (Agrostis stolonifera), Bermuda grass (Cynodon dactylon), or Kentucky bluegrass (Poa pratensis), the host activates active vascular defense responses. The xylem vessels produce tyloses and suberized gum plugs that wall off the bacteria, while antimicrobial phytoalexins halt bacterial multiplication without systemic disease.",
      "outlinePoints": [
        "Application protocol: post-mowing spray entering severed vascular blade tips",
        "Pathological response in Poa annua: aggressive xylem multiplication and xanthan slime occlusion",
        "Vascular collapse and lethal wilting within 10\u201314 days",
        "Resistance in desirable turfgrasses (bentgrass, Bermuda grass): tylose formation and phytoalexin containment"
      ]
    },
    {
      "id": "AGR233-U2-SUB18",
      "questionType": "CASE_STUDY",
      "maxMarks": 8,
      "difficulty": "Hard",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "Case Analysis: A research laboratory has screened 50 isolates of Colletotrichum truncatum for Sesbania control. Isolate CT-14 exhibits the lowest LC\u2085\u2080 but produces low spore titers in liquid fermentation, while Isolate CT-32 exhibits moderate LC\u2085\u2080 but sporulates profusely. Which isolate should be advanced, and what optimization strategies should be deployed?",
      "modelAnswer": "Case Evaluation: Isolate CT-14 vs. Isolate CT-32:\n\nAnalysis of Candidates:\n- Isolate CT-14: Exhibits high biological virulence (low LC\u2085\u2080), meaning fewer spores are needed to kill the weed. However, its low spore yield in liquid fermentation is a major bottleneck; commercial bioherbicide manufacturing requires high production titers (\u226510\u2078\u201310\u2079 spores/mL) to achieve acceptable per-hectare manufacturing costs.\n- Isolate CT-32: Shows moderate virulence but excels in industrial fermentability.\n\nStrategic Decision:\nIsolate CT-14 should be prioritized initially for scientific optimization, while CT-32 is retained as a robust commercial backup. In bioherbicide commercialization, a hypervirulent strain with fermentation bottlenecks is often more valuable than a weak pathogen that ferments easily, because formulation chemistry and bioprocess engineering can systematically overcome fermentation yield limitations.\n\nOptimization Roadmap for Hypervirulent Isolate CT-14:\n1. Fermentation Media Optimization:\nPerform response surface methodology (RSM) to optimize carbon-to-nitrogen (C:N) ratios, carbon sources (sucrose, glucose, glycerol), and organic nitrogen sources (yeast extract, peptone, corn steep liquor). Adjusting C:N ratios from 40:1 to 10:1 often triggers massive blastospore differentiation in Colletotrichum.\n2. Bioprocess Kinetic Manipulation:\nOptimize dissolved oxygen (DO) tension and agitation shear rates. Many fungi fail to sporulate under high-shear rushton turbines; switching to marine-blade or airlift bioreactors minimizes mechanical shear stress.\n3. Two-Stage Biphasic Fermentation:\nIf submerged sporulation remains suboptimal, deploy a biphasic system: grow mycelial biomass in liquid fermenters for 48 hours, then drain and spread the biomass onto shallow solid vermiculite/wheat bran beds for rapid aerial conidiogenesis.\n4. Formulation Synergy:\nFormulate CT-14 with adjuvant synergists (e.g., sub-lethal surfactants or humectants) to further reduce the required field dose, partially offsetting fermentation yield constraints.",
      "outlinePoints": [
        "Comparative evaluation: hypervirulence with fermentation limits (CT-14) vs moderate virulence with high yield (CT-32)",
        "Strategic rationale: prioritizing CT-14 while retaining CT-32 as commercial backup",
        "Bioprocess optimization: Response Surface Methodology (RSM) adjusting carbon-to-nitrogen (C:N) ratios",
        "Engineering interventions: low-shear airlift bioreactors and dissolved oxygen optimization",
        "Alternative production: biphasic liquid-to-solid state fermentation",
        "Formulation compensation: adjuvant synergists lowering required spore load per hectare"
      ]
    },
    {
      "id": "AGR233-U2-SUB19",
      "questionType": "COMPARISON",
      "maxMarks": 6,
      "difficulty": "Medium",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "Compare the advantages and disadvantages of using vegetative blastospores versus aerial conidia as the active propagules in mycoherbicide formulations.",
      "modelAnswer": "Filamentous fungal mycoherbicides can be formulated using either aerial conidia (produced on solid substrates) or blastospores (produced in submerged liquid culture):\n\n1. Production and Fermentation Economics:\n- Blastospores: Produced rapidly (within 48 to 72 hours) at extremely high cell densities (>10\u2078\u201310\u2079 cells/mL) in standard, highly scalable submerged industrial bioreactors. Production costs per liter are low.\n- Aerial Conidia: Require solid-state fermentation (SSF) on grains, bran, or vermiculite beds, which requires large incubation rooms, intensive manual handling, and lengthy cycle times (7 to 21 days), resulting in higher production costs.\n\n2. Morphological and Cell Wall Characteristics:\n- Blastospores: Bud directly from vegetative hyphae in liquid broth. They are larger, hydrophilic, and possess thin, unmelanized cell walls that lack protective rodlet protein layers.\n- Aerial Conidia: Differentiate in air on specialized conidiophores. They feature thick, multi-layered cell walls densely impregnated with melanin and coated in hydrophobic rodlet protein layers.\n\n3. Environmental Resilience and Shelf Life:\n- Blastospores: Highly sensitive to desiccation, osmotic shock, formulation shear stress, and solar UV-B radiation. Their shelf life in dry powder formulations is short (typically <3 months) without cold-chain storage.\n- Aerial Conidia: Highly resilient against ambient desiccation, osmotic fluctuation, and solar UV-B radiation. When formulated at optimal water activity (a_w 0.20\u20130.30), they maintain viability for 12 to 24 months at ambient room temperature.\n\nSummary: Blastospores offer superior manufacturing economics but present severe shelf-life challenges, whereas aerial conidia provide superior field ruggedness and formulation stability at higher manufacturing costs.",
      "outlinePoints": [
        "Production economics: rapid low-cost submerged fermentation (blastospores) vs labor-intensive solid substrate culturing (conidia)",
        "Cell wall morphology: thin hydrophilic unmelanized walls vs thick melanized hydrophobic rodlet walls",
        "Stress tolerance: extreme sensitivity to drying/UV (blastospores) vs high ambient resilience (conidia)",
        "Shelf-life stability: short storage requiring refrigeration vs 12\u201324 month room-temperature stability"
      ]
    },
    {
      "id": "AGR233-U2-SUB20",
      "questionType": "APPLICATION",
      "maxMarks": 7,
      "difficulty": "Hard",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains",
      "questionText": "Explain how Probit Analysis is mathematically applied to determine the LC\u2085\u2080 and LT\u2085\u2080 of candidate bioherbicide strains from bioassay mortality curves.",
      "modelAnswer": "Probit Analysis, developed by C. I. Bliss and formalized by D. J. Finney, is the standard biometric statistical procedure used to analyze quantal (all-or-nothing) response data, such as weed mortality resulting from bioherbicide treatments.\n\nThe Mathematical Challenge:\nWhen weed mortality is plotted against microbial dose (spore concentration) or time of exposure, the resulting dose-response curve is non-linear and sigmoidal (S-shaped). At extremely low doses and near-100% mortality, large changes in concentration yield small changes in mortality, making linear regression unusable.\n\nApplication of Probit Transformation:\n1. Normal Equivalent Deviate (NED) and Probit Scale:\nThe observed percentage mortality is converted into probits (probability units). The probit transformation maps the cumulative normal distribution to a straight line. To avoid negative numbers in manual calculations, a value of 5 is added to the normal equivalent deviate:\nProbit = Normal Equivalent Deviate (NED) + 5.\n(For example: 50% mortality corresponds to a NED of 0, yielding a Probit value of 5.0).\n\n2. Logarithmic Transformation of Dose/Time:\nThe independent variable\u2014either spore concentration (for LC\u2085\u2080) or time in hours/days (for LT\u2085\u2080)\u2014is converted to a logarithmic scale: X = log\u2081\u2080(Dose) or X = log\u2081\u2080(Time).\n\n3. Linear Regression Equation:\nPlotting the probits against the log-dose converts the sigmoidal curve into a straight regression line:\nY = a + b(X)\nWhere:\n- Y is the probit of mortality,\n- X is the log\u2081\u2080(dose or time),\n- a is the intercept,\n- b is the slope (which reflects population heterogeneity and strain potency).\n\n4. Calculation of LC\u2085\u2080 and LT\u2085\u2080:\nTo determine the median lethal benchmark (where mortality = 50%), the probit value Y is set to exactly 5.0:\n5.0 = a + b(log\u2081\u2080LC\u2085\u2080)\nSolving for LC\u2085\u2080:\nlog\u2081\u2080LC\u2085\u2080 = (5.0 - a) / b\nLC\u2085\u2080 = 10^((5.0 - a) / b)\n\nInterpretation: A steeper slope (b) indicates a uniform, highly responsive weed population, while a lower LC\u2085\u2080/LT\u2085\u2080 indicates higher strain virulence.",
      "outlinePoints": [
        "Quantal response nature of weed mortality yielding non-linear sigmoidal curves",
        "Probit transformation mapping cumulative normal sigmoid to linear scale (Probit = NED + 5)",
        "Logarithmic transformation of independent variables (log\u2081\u2080 dose or time)",
        "Derivation of the linear regression equation: Y = a + bX",
        "Setting Y = 5.0 to solve for median lethal benchmarks (LC\u2085\u2080 and LT\u2085\u2080)",
        "Biological interpretation of regression slope and lethal benchmarks"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "AGR233-U2-FC01",
      "front": "What fruiting body is characteristic of the fungal genus Colletotrichum?",
      "back": "Acervulus (containing conidia and melanized setae).",
      "hint": "Saucer-shaped asexual fruiting body.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC02",
      "front": "Define a Hemibiotrophic fungal pathogen.",
      "back": "A pathogen that maintains an initial living biotrophic phase before transitioning to destructive necrotrophy.",
      "hint": "Two-phase lifestyle.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC03",
      "front": "What weed is controlled by the mycoherbicide candidate Alternaria cassiae?",
      "back": "Sicklepod (Cassia obtusifolia) in soybean and peanut fields.",
      "hint": "Invasive leguminous weed.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC04",
      "front": "Name the active bacterial agent in the bioherbicide Camperico\u00ae.",
      "back": "Xanthomonas campestris pv. poae.",
      "hint": "Pathovar targeting annual bluegrass.",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species"
    },
    {
      "id": "AGR233-U2-FC05",
      "front": "How does Xanthomonas campestris pv. poae kill annual bluegrass?",
      "back": "It enters through mower wounds, multiplies in xylem vessels, and causes vascular occlusion and lethal wilt.",
      "hint": "Vascular occlusion via xanthan slime.",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species"
    },
    {
      "id": "AGR233-U2-FC06",
      "front": "What are Deleterious Rhizobacteria (DRB)?",
      "back": "Non-parasitic root-colonizing bacteria that suppress weed seedling growth via phytotoxins and hormonal imbalances.",
      "hint": "Non-parasitic root-stunting bacteria.",
      "syllabusTopic": "Bacteria-based bioherbicides: Xanthomonas campestris pv. poae, Pseudomonas fluorescens, and Streptomyces species"
    },
    {
      "id": "AGR233-U2-FC07",
      "front": "State Koch's Third Postulate in weed pathology.",
      "back": "Inoculation of healthy weed seedlings with the isolated pure culture must reproduce the original disease symptoms.",
      "hint": "Pathogenicity reproduction step.",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens"
    },
    {
      "id": "AGR233-U2-FC08",
      "front": "Why is fulfilling Koch's Postulates difficult for rust fungi (Puccinia spp.)?",
      "back": "They are obligate biotrophs and cannot grow in cell-free pure culture on artificial nutrient agar.",
      "hint": "Unculturable on synthetic agar.",
      "syllabusTopic": "Koch's postulates and etiology confirmation for prospective weed pathogens"
    },
    {
      "id": "AGR233-U2-FC09",
      "front": "What is evaluated in Tier II of Wapshere's Centrifugal Phylogenetic Method?",
      "back": "Cultivated economic crops and ornamentals belonging to the same botanical family (confamilial) as the target weed.",
      "hint": "Same plant family screening.",
      "syllabusTopic": "Host specificity testing and safety protocols for non-target cultivated crops (Centrifugal phylogenetic testing)"
    },
    {
      "id": "AGR233-U2-FC10",
      "front": "What does LT\u2085\u2080 measure in bioherbicide screening?",
      "back": "The median lethal time required to kill 50% of the inoculated target weed population.",
      "hint": "Time to 50% weed kill.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    },
    {
      "id": "AGR233-U2-FC11",
      "front": "What does LC\u2085\u2080 measure in bioherbicide dose-response assays?",
      "back": "The concentration of pathogen propagules (spores/mL) required to cause 50% mortality in the weed population.",
      "hint": "Lethal concentration 50%.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    },
    {
      "id": "AGR233-U2-FC12",
      "front": "What major phytotoxic compound is secreted by Sclerotinia species?",
      "back": "Oxalic acid (which acidifies tissue and chelates calcium, activating macerating enzymes).",
      "hint": "Dicarboxylic acid toxin.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC13",
      "front": "What is the commercial name and active organism of the dodder bioherbicide?",
      "back": "Smolder\u00ae, formulated using the fungal pathogen Alternaria destruens.",
      "hint": "Alternaria product on dodder.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC14",
      "front": "What is Culture Attenuation in bioherbicide maintenance?",
      "back": "The spontaneous loss of pathogenic virulence and sporulation caused by repeated subculturing on artificial agar.",
      "hint": "Loss of virulence on agar.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    },
    {
      "id": "AGR233-U2-FC15",
      "front": "How does host passaging reverse fungal attenuation?",
      "back": "Inoculating the fungus into a living weed host reactivates repressed virulence and cutinolytic gene expression.",
      "hint": "Re-inoculating living weeds.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    },
    {
      "id": "AGR233-U2-FC16",
      "front": "What are Fungal Hydrophobins?",
      "back": "Small amphipathic proteins forming a rodlet layer on conidia that mediate adhesion to waxy leaf surfaces.",
      "hint": "Water-repellent conidial proteins.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    },
    {
      "id": "AGR233-U2-FC17",
      "front": "What phytotoxic metabolites are produced by Phoma macrostoma?",
      "back": "Macrocidins (cyclic tetramic acid derivatives that inhibit carotenoid biosynthesis and cause bleaching).",
      "hint": "Systemic bleaching toxins.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC18",
      "front": "Define Forma Specialis (f. sp.).",
      "back": "A sub-specific taxonomic rank for parasitic fungi that are morphologically identical but restricted to specific host plants.",
      "hint": "Host-specialized strain designation.",
      "syllabusTopic": "Pathogenic fungi as bioherbicides: Colletotrichum, Phoma, Puccinia, Alternaria, Fusarium, and Sclerotinia"
    },
    {
      "id": "AGR233-U2-FC19",
      "front": "What statistical transformation linearizes sigmoidal dose-response mortality data?",
      "back": "Probit Analysis (Finney's method, converting percent mortality into probits against log-dose).",
      "hint": "Probability unit transformation.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    },
    {
      "id": "AGR233-U2-FC20",
      "front": "Why are blastospores more sensitive to formulation drying than aerial conidia?",
      "back": "Blastospores have thin, hydrophilic, unmelanized walls that lack the protective rodlet layer found on aerial conidia.",
      "hint": "Thin unmelanized cell walls.",
      "syllabusTopic": "Mass screening, virulence assay, and selection of hypervirulent and stable biocontrol strains"
    }
  ]
};
