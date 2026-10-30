import { UnitContent } from "./types";

export const unit2Content: UnitContent = {
  "unitNumber": 2,
  "title": "Chromosome Theory and Linkage",
  "shortDescription": "Chromosome theory of heredity, mechanisms of sex determination, sex-linked inheritance, linkage and meiotic crossing over, genetic mapping, recombination frequency calculations, and interference and coincidence.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Chromosome theory of heredity and cytological parallelism",
    "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
    "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
    "Linkage and crossing over: types, cytological basis, and molecular models",
    "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence"
  ],
  "notes": {
    "learningObjectives": [
      "Explain the Sutton-Boveri Chromosome Theory of Heredity and cytological evidence connecting genes to chromosomes.",
      "Analyze diverse mechanisms of sex determination including XX/XY, ZZ/ZW, haplodiploidy, and Bridges' genic balance theory in Drosophila.",
      "Distinguish between sex-linked (X-linked and Y-linked), sex-influenced, and sex-limited traits with clinical and agricultural examples.",
      "Explain Morgan's discoveries of linkage and crossing over, coupling and repulsion phases, and Stern's cytological proof in Drosophila and Creighton-McClintock in maize.",
      "Construct genetic linkage maps from two-point and three-point test cross data, calculating recombination frequencies, coefficient of coincidence, and chromosome interference."
    ],
    "sections": [
      {
        "id": "sec-gpb-2-1",
        "heading": "1. Chromosome Theory of Heredity and Sex Determination",
        "content": "The Chromosome Theory of Heredity, formulated by Walter Sutton and Theodor Boveri (1902\u20131903) and experimentally confirmed by Thomas Hunt Morgan (1910) using *Drosophila melanogaster*, established that genes reside at specific physical positions (loci) on chromosomes. Chromosomes undergo replication, synapsis, crossing over, and disjunction in meiosis, mirroring Mendelian segregation and independent assortment.",
        "subsections": [
          {
            "subheading": "Mechanisms of Sex Determination",
            "content": "Sex determination systems determine whether an organism develops male or female reproductive structures:",
            "table": {
              "headers": [
                "System",
                "Homogametic Sex",
                "Heterogametic Sex",
                "Organisms / Crop Examples"
              ],
              "rows": [
                [
                  "XX-XY System",
                  "Female (XX)",
                  "Male (XY)",
                  "Mammals, *Drosophila melanogaster*, dioecious plants (*Silene latifolia*, *Cannabis sativa*)"
                ],
                [
                  "XX-XO System",
                  "Female (XX)",
                  "Male (XO - single X)",
                  "Grasshoppers, cockroaches, true bugs"
                ],
                [
                  "ZZ-ZW System",
                  "Male (ZZ)",
                  "Female (ZW)",
                  "Birds, reptiles, butterflies, silkworms, strawberry"
                ],
                [
                  "Genic Balance System",
                  "X:A Ratio = 1.0 (Female), 0.5 (Male)",
                  "Metamales (<0.5), Metafemales (>1.0), Intersex (0.5\u20131.0)",
                  "*Drosophila melanogaster* (C.B. Bridges) and *Rumex acetosa*"
                ],
                [
                  "Haplodiploidy",
                  "Female (Diploid 2n from fertilized egg)",
                  "Male (Haploid n from unfertilized egg via arrhenotoky)",
                  "Honeybees, wasps, ants (Hymenoptera)"
                ],
                [
                  "Environmental / Hormonal",
                  "Non-genetic temperature-dependent or photoperiodic",
                  "Various",
                  "Alligators, marine turtles, papaya sex reversal under temperature"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-gpb-2-2",
        "heading": "2. Sex-Linked, Sex-Influenced, and Sex-Limited Inheritance",
        "content": "Genes located on sex chromosomes or whose expression is modulated by sex hormones exhibit distinctive non-Mendelian inheritance patterns.",
        "subsections": [
          {
            "subheading": "Comparison of Sex-Related Genetic Modes",
            "content": "Distinguishing characteristics, gene loci, and classic manifestations:",
            "table": {
              "headers": [
                "Category",
                "Chromosomal Locus",
                "Expression Pattern",
                "Representative Examples"
              ],
              "rows": [
                [
                  "Sex-Linked (X-Linked)",
                  "Non-homologous differential segment of X-chromosome",
                  "Criss-cross inheritance (Father -> Daughter -> Grandson); males hemizygous (*XAY* or *XaY*)",
                  "Red-green color blindness, hemophilia in humans; white eye in *Drosophila*"
                ],
                [
                  "Holandric (Y-Linked)",
                  "Non-homologous region of Y-chromosome",
                  "Transmitted strictly from father to son (patroclinous)",
                  "Hypertrichosis of ear pinna, *SRY* testis-determining factor"
                ],
                [
                  "Sex-Influenced",
                  "Autosomal chromosomes (not on sex chromosomes)",
                  "Dominant in one sex but recessive in the other due to hormonal environment",
                  "Pattern baldness in humans (*Bb* bald in males, normal in females); horns in sheep"
                ],
                [
                  "Sex-Limited",
                  "Autosomal chromosomes",
                  "Expressed exclusively in one anatomical sex, zero penetrance in the other",
                  "Milk yield in cattle, egg production in poultry, cock-feathering vs hen-feathering"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-gpb-2-3",
        "heading": "3. Linkage and Meiotic Crossing Over",
        "content": "Mendel's Law of Independent Assortment applies only when gene pairs reside on different non-homologous chromosomes. When two or more genes reside physically on the same chromosome, they constitute a 'linkage group' and tend to be transmitted into gametes together, a phenomenon termed genetic linkage (discovered by Bateson and Punnett as 'coupling and repulsion', and elucidated by T. H. Morgan).",
        "subsections": [
          {
            "subheading": "Coupling vs Repulsion Phases (Bateson and Punnett / Morgan)",
            "content": "- **Coupling Phase (Cis-configuration):** Both dominant alleles are located on one homolog and both recessive alleles on the other (*AB / ab*). Parental gametes are *AB* and *ab*.\n- **Repulsion Phase (Trans-configuration):** Each homolog carries one dominant and one recessive allele (*Ab / aB*). Parental gametes are *Ab* and *aB*.",
            "keyPoints": [
              "Complete Linkage: Genes are so closely packed that no crossing over occurs (e.g., male Drosophila, female silkworms). Gametes are 100% parental.",
              "Incomplete Linkage: Syntentic genes are separated by meiotic crossing over during Pachytene of Prophase I, producing both parental and recombinant gametes.",
              "The maximum observable recombination frequency between any two linked genes is 50%, at which point linked genes appear to assort independently."
            ]
          },
          {
            "subheading": "Cytological Proof of Crossing Over",
            "content": "Conclusive physical proof that genetic recombination involves reciprocal exchange of homologous chromosome segments was demonstrated in 1931 by Harriet Creighton and Barbara McClintock in maize (*Zea mays* using heteromorphic Chromosome 9 with a terminal knob and translocated segment) and Curt Stern in *Drosophila* (using X-chromosomes with carmine/bar markers and translocated Y-arm fragments)."
          }
        ]
      },
      {
        "id": "sec-gpb-2-4",
        "heading": "4. Chromosome Mapping, Recombination Frequency, and Interference",
        "content": "Alfred Henry Sturtevant (1913), an undergraduate student of T. H. Morgan, constructed the world's first genetic linkage map by realizing that the recombination frequency between two linked genes is directly proportional to their physical distance along the chromosome. 1% recombination frequency is designated as 1 map unit (m.u.) or 1 centiMorgan (cM) in honor of Morgan.",
        "subsections": [
          {
            "subheading": "Three-Point Test Cross and Mathematical Diagnostics",
            "content": "A three-point test cross (*ABC/abc* x *abc/abc*) allows simultaneous mapping of three linked loci, determining gene order and calculating distance without the confounding effects of undetected double crossovers:\n\n1. **Gene Order Determination:** Compare the Parental class (highest frequency) with the Double Crossover (DCO) class (lowest frequency). The single gene that flips or differs between Parental and DCO represents the middle gene.\n\n2. **Recombination Frequency (RF):**\n`RF = (Total Recombinants / Total Progeny) x 100`\n\n3. **Coefficient of Coincidence (C):** The ratio of observed double crossovers to expected double crossovers:\n`C = Observed DCO Frequency / Expected DCO Frequency`\nwhere `Expected DCO Frequency = RF(Region I) x RF(Region II)`.\n\n4. **Chromosome Interference (I):** The phenomenon whereby a crossover event in one chromosomal region reduces or inhibits the occurrence of another crossover in an adjacent region:\n`Interference (I) = 1 - Coefficient of Coincidence (C)`\n- If `C = 1`, `I = 0` (No interference; double crossovers occur at random expected rate).\n- If `C = 0`, `I = 1.0` (Complete interference; no double crossovers can occur).\n- If `0 < C < 1`, `Positive interference` (crossover in region 1 suppresses region 2).\n- If `C > 1`, `Negative interference` (crossover in region 1 enhances region 2)."
          }
        ]
      }
    ],
    "keyTakeaways": [
      "The Sutton-Boveri Chromosome Theory aligned Mendelian factors with physical meiotic chromosome behavior.",
      "Sex determination operates via diverse chromosomal systems (XX/XY, ZZ/ZW) and Bridges' genic balance (X:A ratio).",
      "Sex-linked genes exhibit characteristic criss-cross inheritance from father through carrier daughter to grandson.",
      "Meiotic crossing over occurs at Pachytene between non-sister chromatids of homologous chromosomes.",
      "Sturtevant's linkage mapping equates 1% recombination frequency with 1 centiMorgan (cM); interference quantifies crossover suppression."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Two genes that show 50% recombination frequency must be on different chromosomes.",
        "reality": "Genes located very far apart on the same chromosome (>50 cM) undergo multiple crossovers that cap observable recombination frequency at 50%, mimicking independent assortment."
      },
      {
        "myth": "In humans, sex is determined by the ratio of X chromosomes to autosomes like in Drosophila.",
        "reality": "In humans, sex is determined strictly by the presence of the SRY gene on the Y chromosome, triggering male testicular differentiation regardless of X chromosome count (e.g., XXY is male)."
      }
    ],
    "summary": "Unit 2 synthesizes the physical embodiment of inheritance. It covers the Sutton-Boveri chromosome theory, comparative mechanisms of sex determination across taxa, and sex-associated inheritance modes. It details Morgan's discovery of linkage groups, coupling and repulsion, the cytological proof of crossing over, and Sturtevant's logic of chromosome mapping via two-point and three-point test crosses, culminating in mathematical calculations of recombination frequency, coincidence, and interference."
  },
  "mcqs": [
    {
      "id": "GPB203-U2-MCQ01",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Easy",
      "questionText": "Who independently formulated the Chromosome Theory of Heredity in 1902-1903?",
      "options": {
        "A": "Watson and Crick",
        "B": "Walter Sutton and Theodor Boveri",
        "C": "Bateson and Punnett",
        "D": "Jacob and Monod"
      },
      "correctOption": "B",
      "explanation": "Walter Sutton and Theodor Boveri independently recognized the parallelism between Mendelian factor segregation and meiotic chromosome behavior."
    },
    {
      "id": "GPB203-U2-MCQ02",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Easy",
      "questionText": "Which experimental organism was famously utilized by Thomas Hunt Morgan to provide experimental proof of the chromosome theory?",
      "options": {
        "A": "Pisum sativum",
        "B": "Drosophila melanogaster",
        "C": "Neurospora crassa",
        "D": "Caenorhabditis elegans"
      },
      "correctOption": "B",
      "explanation": "Morgan chose the common fruit fly (Drosophila melanogaster) due to its short 10-14 day life cycle, high fecundity, and only 4 pairs of chromosomes."
    },
    {
      "id": "GPB203-U2-MCQ03",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Easy",
      "questionText": "The specific physical location of a gene on a chromosome is called its:",
      "options": {
        "A": "Centromere",
        "B": "Locus",
        "C": "Telomere",
        "D": "Cistron"
      },
      "correctOption": "B",
      "explanation": "A gene locus (plural: loci) is the fixed physical address of a gene along a chromosome."
    },
    {
      "id": "GPB203-U2-MCQ04",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Easy",
      "questionText": "How many linkage groups are present in an organism whose somatic chromosome number is 2n = 14?",
      "options": {
        "A": "14",
        "B": "7",
        "C": "28",
        "D": "21"
      },
      "correctOption": "B",
      "explanation": "The number of linkage groups corresponds to the haploid chromosome number (n). For 2n = 14 (e.g., garden pea), there are 7 linkage groups."
    },
    {
      "id": "GPB203-U2-MCQ05",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Medium",
      "questionText": "Which of the following chromosome structures holds sister chromatids together during Metaphase I of meiosis?",
      "options": {
        "A": "Chiasma",
        "B": "Kinetochore and centromeric cohesion complex",
        "C": "Nuclear envelope",
        "D": "Spindle pole body"
      },
      "correctOption": "B",
      "explanation": "Cohesin complexes at the centromere hold sister chromatids together until Anaphase II."
    },
    {
      "id": "GPB203-U2-MCQ06",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Medium",
      "questionText": "In Drosophila melanogaster, how many pairs of chromosomes are present in a diploid somatic cell?",
      "options": {
        "A": "2 pairs",
        "B": "4 pairs (2n = 8)",
        "C": "8 pairs",
        "D": "12 pairs"
      },
      "correctOption": "B",
      "explanation": "Drosophila melanogaster has 2n = 8 chromosomes (3 pairs of autosomes and 1 pair of sex chromosomes)."
    },
    {
      "id": "GPB203-U2-MCQ07",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Medium",
      "questionText": "In which meiotic stage do homologous chromosomes synapse to form bivalents (tetrads)?",
      "options": {
        "A": "Leptotene",
        "B": "Zygotene",
        "C": "Diplotene",
        "D": "Diakinesis"
      },
      "correctOption": "B",
      "explanation": "Synapsis of homologous chromosomes occurs during the Zygotene stage of Prophase I via the synaptonemal complex."
    },
    {
      "id": "GPB203-U2-MCQ08",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Medium",
      "questionText": "The physical site where crossing over and reciprocal genetic exchange occurs between non-sister chromatids is called a:",
      "options": {
        "A": "Centromere",
        "B": "Chiasma",
        "C": "Chromocenter",
        "D": "Chromomere"
      },
      "correctOption": "B",
      "explanation": "A chiasma (plural: chiasmata) is the visible cytological manifestation of meiotic crossing over."
    },
    {
      "id": "GPB203-U2-MCQ09",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Medium",
      "questionText": "What experimental mutation discovered by T. H. Morgan in 1910 provided the first direct proof that genes reside on sex chromosomes?",
      "options": {
        "A": "Vestigial wings",
        "B": "White eye mutation in male Drosophila",
        "C": "Ebony body",
        "D": "Bar eye"
      },
      "correctOption": "B",
      "explanation": "Morgan discovered a white-eyed male Drosophila whose cross results confirmed that the eye-color gene is carried on the X chromosome."
    },
    {
      "id": "GPB203-U2-MCQ10",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Hard",
      "questionText": "The proteinaceous structure that forms between paired homologous chromosomes during zygotene and pachytene to mediate crossing over is the:",
      "options": {
        "A": "Kinetochore plate",
        "B": "Synaptonemal complex",
        "C": "Spindle apparatus",
        "D": "Centrosome matrix"
      },
      "correctOption": "B",
      "explanation": "The synaptonemal complex is a tripartite protein structure consisting of two lateral elements and a central element facilitating crossover recombination."
    },
    {
      "id": "GPB203-U2-MCQ11",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Hard",
      "questionText": "If an organism has 2n = 20 chromosomes, how many chromatids and how many bivalents are present in a primary meiocyte at Pachytene?",
      "options": {
        "A": "20 chromatids, 10 bivalents",
        "B": "40 chromatids, 10 bivalents",
        "C": "40 chromatids, 20 bivalents",
        "D": "20 chromatids, 20 bivalents"
      },
      "correctOption": "B",
      "explanation": "At pachytene, there are n = 10 bivalents, each composed of 4 chromatids, totaling 10 x 4 = 40 chromatids."
    },
    {
      "id": "GPB203-U2-MCQ12",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "difficulty": "Hard",
      "questionText": "During which stage of Prophase I does terminalization of chiasmata occur?",
      "options": {
        "A": "Zygotene",
        "B": "Pachytene",
        "C": "Diplotene",
        "D": "Diakinesis"
      },
      "correctOption": "D",
      "explanation": "During diakinesis, chiasmata shift toward chromosome ends in a process termed terminalization as chromosomes fully condense."
    },
    {
      "id": "GPB203-U2-MCQ13",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Easy",
      "questionText": "In the ZZ-ZW system of sex determination found in birds and butterflies, which sex is heterogametic?",
      "options": {
        "A": "Male (ZZ)",
        "B": "Female (ZW)",
        "C": "Both are homogametic",
        "D": "Neither has sex chromosomes"
      },
      "correctOption": "B",
      "explanation": "In birds, reptiles, and Lepidoptera, females are the heterogametic sex (ZW) producing two types of eggs, while males are homogametic (ZZ)."
    },
    {
      "id": "GPB203-U2-MCQ14",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Easy",
      "questionText": "In human beings and mammals, sex is determined by which chromosomal system?",
      "options": {
        "A": "ZZ-ZW",
        "B": "XX-XY",
        "C": "Haplodiploidy",
        "D": "Genic balance without Y chromosome"
      },
      "correctOption": "B",
      "explanation": "Mammals operate an XX-XY sex determination system where males are heterogametic (XY) and females are homogametic (XX)."
    },
    {
      "id": "GPB203-U2-MCQ15",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Easy",
      "questionText": "What key master-switch gene located on the human Y chromosome triggers male testicular differentiation?",
      "options": {
        "A": "DAX1",
        "B": "SRY (Sex-determining Region Y)",
        "C": "SOX9",
        "D": "WNT4"
      },
      "correctOption": "B",
      "explanation": "The SRY gene located on the short arm of the Y chromosome produces Testis-Determining Factor (TDF)."
    },
    {
      "id": "GPB203-U2-MCQ16",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Easy",
      "questionText": "In honeybees (Apis mellifera), males (drones) develop by arrhenotokous parthenogenesis and are:",
      "options": {
        "A": "Diploid (2n)",
        "B": "Haploid (n)",
        "C": "Triploid (3n)",
        "D": "Tetraploid (4n)"
      },
      "correctOption": "B",
      "explanation": "Drones develop from unfertilized haploid eggs (n = 16), while queens and workers develop from fertilized diploid eggs (2n = 32)."
    },
    {
      "id": "GPB203-U2-MCQ17",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Medium",
      "questionText": "According to Calvin Bridges' Genic Balance Theory of sex determination in Drosophila, sex is determined by the ratio of:",
      "options": {
        "A": "Y chromosomes to X chromosomes",
        "B": "X chromosomes to Autosomal sets (X:A ratio)",
        "C": "Dominant genes to recessive genes",
        "D": "Centromeres to telomeres"
      },
      "correctOption": "B",
      "explanation": "Bridges proved that sex in Drosophila is determined by the ratio between the number of X chromosomes and sets of autosomes (X:A)."
    },
    {
      "id": "GPB203-U2-MCQ18",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Medium",
      "questionText": "In Drosophila, what sexual phenotype results from an X:A ratio of 0.5 (e.g., 1X : 2A)?",
      "options": {
        "A": "Normal female",
        "B": "Normal fertile/sterile male",
        "C": "Intersex",
        "D": "Metafemale"
      },
      "correctOption": "B",
      "explanation": "An X:A ratio of 0.5 (e.g., XY:2A or XO:2A) results in a male phenotype."
    },
    {
      "id": "GPB203-U2-MCQ19",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Medium",
      "questionText": "In Drosophila, what sexual phenotype results from an X:A ratio of 0.67 (e.g., 2X : 3A)?",
      "options": {
        "A": "Normal male",
        "B": "Intersex",
        "C": "Normal female",
        "D": "Metamale"
      },
      "correctOption": "B",
      "explanation": "An X:A ratio between 0.5 and 1.0 (such as 2X:3A = 0.67) develops into an intersex fly with mixed sexual characteristics."
    },
    {
      "id": "GPB203-U2-MCQ20",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Medium",
      "questionText": "Which of the following dioecious plant species possesses well-differentiated heteromorphic sex chromosomes (XX females, XY males)?",
      "options": {
        "A": "Pisum sativum",
        "B": "Silene latifolia (Melandrium album)",
        "C": "Zea mays",
        "D": "Arabidopsis thaliana"
      },
      "correctOption": "B",
      "explanation": "Silene latifolia (white campion) is the classic botanical model possessing prominent heteromorphic X and Y sex chromosomes."
    },
    {
      "id": "GPB203-U2-MCQ21",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Medium",
      "questionText": "In grasshoppers and true bugs, male sex is determined by which system?",
      "options": {
        "A": "XX-XO system",
        "B": "ZZ-ZW system",
        "C": "Haplodiploidy",
        "D": "Temperature-dependent determination"
      },
      "correctOption": "A",
      "explanation": "Male grasshoppers possess a single X chromosome (XO) and produce gametes with either an X or no sex chromosome."
    },
    {
      "id": "GPB203-U2-MCQ22",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Hard",
      "questionText": "In Drosophila, what sexual phenotype is produced by an individual with genotype 3X : 2A (X:A ratio = 1.5)?",
      "options": {
        "A": "Normal female",
        "B": "Metamale",
        "C": "Metafemale (Superfemale)",
        "D": "Intersex"
      },
      "correctOption": "C",
      "explanation": "An X:A ratio greater than 1.0 (such as 3X:2A = 1.5) produces a sterile, inviable metafemale (superfemale)."
    },
    {
      "id": "GPB203-U2-MCQ23",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Hard",
      "questionText": "A person with Klinefelter syndrome has the karyotype 47,XXY. In humans, this individual is phenotypically male because of the Y chromosome, but in Drosophila, an XXY fly (X:A = 1.0) is:",
      "options": {
        "A": "Normal male",
        "B": "Phenotypically female and fertile",
        "C": "Intersex",
        "D": "Metamale"
      },
      "correctOption": "B",
      "explanation": "In Drosophila, sex depends on X:A ratio. For XXY (2X:2A = 1.0), the fly is phenotypically female because the Y chromosome carries no sex-determining genes (only male fertility factors)."
    },
    {
      "id": "GPB203-U2-MCQ24",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "difficulty": "Hard",
      "questionText": "In the honeybee, sex determination at the complementary sex determiner (csd) locus dictates that:",
      "options": {
        "A": "Hemizygous or homozygous individuals develop into females",
        "B": "Heterozygotes at the csd locus develop into females; hemizygotes develop into males",
        "C": "Temperature during brooding controls csd expression",
        "D": "Nutrition (royal jelly) alters csd DNA sequence"
      },
      "correctOption": "B",
      "explanation": "Heterozygosity at the csd locus triggers female development. Hemizygotes (from unfertilized eggs) develop into normal males; rare homozygous diploids develop into sterile males that are eaten by workers."
    },
    {
      "id": "GPB203-U2-MCQ25",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Easy",
      "questionText": "Traits whose genes reside on the differential (non-homologous) segment of the X-chromosome are called:",
      "options": {
        "A": "Autosomal traits",
        "B": "X-linked (sex-linked) traits",
        "C": "Holandric traits",
        "D": "Sex-limited traits"
      },
      "correctOption": "B",
      "explanation": "X-linked genes are located on the non-homologous segment of the X chromosome, showing sex-linked inheritance."
    },
    {
      "id": "GPB203-U2-MCQ26",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Easy",
      "questionText": "Which transmission pattern characteristically transmits X-linked recessive alleles from an affected father through his carrier daughter to his grandson?",
      "options": {
        "A": "Direct patroclinous inheritance",
        "B": "Criss-cross inheritance",
        "C": "Maternal cytoplasmic inheritance",
        "D": "Holandric inheritance"
      },
      "correctOption": "B",
      "explanation": "Criss-cross inheritance transmits an X-linked recessive trait from father -> daughter (carrier) -> grandson."
    },
    {
      "id": "GPB203-U2-MCQ27",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Easy",
      "questionText": "Genes present exclusively on the human Y-chromosome are termed:",
      "options": {
        "A": "X-linked genes",
        "B": "Holandric genes",
        "C": "Pseudoautosomal genes",
        "D": "Epistatic genes"
      },
      "correctOption": "B",
      "explanation": "Holandric genes reside strictly on the non-homologous region of the Y chromosome and are passed directly from father to son."
    },
    {
      "id": "GPB203-U2-MCQ28",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Easy",
      "questionText": "Which of the following is a classic human example of an X-linked recessive condition?",
      "options": {
        "A": "Pattern baldness",
        "B": "Red-green color blindness",
        "C": "Hypertrichosis of ear pinna",
        "D": "Beard growth in men"
      },
      "correctOption": "B",
      "explanation": "Red-green color blindness and hemophilia are standard paradigms of human X-linked recessive inheritance."
    },
    {
      "id": "GPB203-U2-MCQ29",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Medium",
      "questionText": "A man with red-green color blindness marries a homozygous normal-vision woman. What proportion of their sons will be color blind?",
      "options": {
        "A": "100%",
        "B": "50%",
        "C": "0%",
        "D": "25%"
      },
      "correctOption": "C",
      "explanation": "Sons receive their single X chromosome from their normal mother (X+X+) and the Y chromosome from their father, so 0% of sons will be color blind (all daughters will be carriers: X+Xc)."
    },
    {
      "id": "GPB203-U2-MCQ30",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Medium",
      "questionText": "Pattern baldness in humans is an autosomal trait that behaves as dominant in males and recessive in females. This is classified as a:",
      "options": {
        "A": "Sex-linked trait",
        "B": "Sex-influenced trait",
        "C": "Sex-limited trait",
        "D": "Holandric trait"
      },
      "correctOption": "B",
      "explanation": "Sex-influenced traits are encoded by autosomal genes whose phenotypic dominance is reversed between sexes by circulating sex hormones (androgens)."
    },
    {
      "id": "GPB203-U2-MCQ31",
      "syllabusTopic": "Sex-influenced traits vs Sex-limited traits",
      "difficulty": "Medium",
      "questionText": "Milk production in dairy cattle and egg laying in poultry are controlled by autosomal genes expressed in only one sex. These are called:",
      "options": {
        "A": "Sex-linked traits",
        "B": "Sex-limited traits",
        "C": "Holandric traits",
        "D": "Pleiotropic traits"
      },
      "correctOption": "B",
      "explanation": "Sex-limited traits are autosomal traits whose anatomical or physiological expression is entirely restricted to one biological sex (zero penetrance in the other)."
    },
    {
      "id": "GPB203-U2-MCQ32",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Medium",
      "questionText": "Why are human males referred to as 'hemizygous' for X-linked genes?",
      "options": {
        "A": "Because they possess two identical X chromosomes",
        "B": "Because they have only one X chromosome and therefore carry only one copy of X-linked genes",
        "C": "Because their X chromosome is inactivated",
        "D": "Because they have no X chromosome"
      },
      "correctOption": "B",
      "explanation": "Males have only one X chromosome (XY), so whatever allele is present on their single X chromosome is directly expressed phenotypically."
    },
    {
      "id": "GPB203-U2-MCQ33",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Medium",
      "questionText": "In poultry, barring of feathers is governed by a dominant Z-linked gene (B). What progeny result from crossing a non-barred rooster (zb zb) with a barred hen (ZB W)?",
      "options": {
        "A": "All barred offspring",
        "B": "Barred sons and non-barred daughters",
        "C": "Non-barred sons and barred daughters",
        "D": "All non-barred offspring"
      },
      "correctOption": "B",
      "explanation": "Sons receive ZB from mother and zb from father (ZB zb = barred). Daughters receive zb from father and W from mother (zb W = non-barred)."
    },
    {
      "id": "GPB203-U2-MCQ34",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Hard",
      "questionText": "A woman whose father was hemophilic marries a normal man. If they have a son, what is the probability that he will have hemophilia?",
      "options": {
        "A": "0%",
        "B": "25%",
        "C": "50%",
        "D": "100%"
      },
      "correctOption": "C",
      "explanation": "The woman is an obligate carrier (XHXh) because her father was hemophilic (XhY). A son has a 1/2 (50%) probability of inheriting her mutant Xh chromosome."
    },
    {
      "id": "GPB203-U2-MCQ35",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Hard",
      "questionText": "The pseudoautosomal regions (PAR1 and PAR2) of human X and Y chromosomes are biologically significant because they:",
      "options": {
        "A": "Do not contain any genes",
        "B": "Undergo meiotic pairing and crossing over, behaving like autosomal loci",
        "C": "Encode male-specific hormones",
        "D": "Prevent Barr body formation"
      },
      "correctOption": "B",
      "explanation": "PAR1 and PAR2 are homologous terminal regions of X and Y that pair and recombine during male meiosis, ensuring regular chromosome disjunction."
    },
    {
      "id": "GPB203-U2-MCQ36",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "difficulty": "Hard",
      "questionText": "Mary Lyon's hypothesis of X-chromosome inactivation states that in mammalian female somatic cells:",
      "options": {
        "A": "Both X chromosomes remain equally transcriptionally active",
        "B": "One of the two X chromosomes is randomly and epigenetically silenced, forming a condensed Barr body",
        "C": "Only the paternal X chromosome is ever inactivated",
        "D": "X-inactivation occurs only in germline cells"
      },
      "correctOption": "B",
      "explanation": "Lyonization involves random, stable heterochromatization and epigenetic silencing of one X chromosome per female somatic cell, ensuring dosage compensation with males."
    },
    {
      "id": "GPB203-U2-MCQ37",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Easy",
      "questionText": "Who first observed linkage in sweet pea (Lathyrus odoratus) as 'coupling and repulsion'?",
      "options": {
        "A": "Mendel and Correns",
        "B": "William Bateson and Reginald Punnett",
        "C": "T. H. Morgan and Sturtevant",
        "D": "Avery and MacLeod"
      },
      "correctOption": "B",
      "explanation": "Bateson and Punnett (1905) discovered non-Mendelian associations in flower color and pollen shape, describing them as coupling and repulsion."
    },
    {
      "id": "GPB203-U2-MCQ38",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Easy",
      "questionText": "In which meiotic substage does physical crossing over (exchange of chromatid segments) take place?",
      "options": {
        "A": "Leptotene",
        "B": "Zygotene",
        "C": "Pachytene",
        "D": "Diplotene"
      },
      "correctOption": "C",
      "explanation": "Meiotic crossing over takes place during the Pachytene stage of Prophase I between non-sister chromatids of homologous chromosomes."
    },
    {
      "id": "GPB203-U2-MCQ39",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Easy",
      "questionText": "In the cis-configuration (coupling phase) of a dihybrid (AB/ab), the parental gametes are:",
      "options": {
        "A": "Ab and aB",
        "B": "AB and ab",
        "C": "AB and Ab",
        "D": "aB and ab"
      },
      "correctOption": "B",
      "explanation": "In cis-configuration, both dominant alleles reside on one chromosome and both recessives on the other (AB/ab), yielding AB and ab parental gametes."
    },
    {
      "id": "GPB203-U2-MCQ40",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Easy",
      "questionText": "What is the theoretical upper limit of observable recombination frequency between two linked genes?",
      "options": {
        "A": "25%",
        "B": "50%",
        "C": "75%",
        "D": "100%"
      },
      "correctOption": "B",
      "explanation": "Even with multiple crossovers involving 4 chromatids, the maximum average proportion of recombinant gametes is capped at 50%."
    },
    {
      "id": "GPB203-U2-MCQ41",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Medium",
      "questionText": "In which organism is meiotic crossing over completely absent in the male sex?",
      "options": {
        "A": "Pisum sativum",
        "B": "Drosophila melanogaster",
        "C": "Zea mays",
        "D": "Neurospora crassa"
      },
      "correctOption": "B",
      "explanation": "Male Drosophila melanogaster exhibit complete linkage; no crossing over occurs during spermatogenesis (achiasmatic meiosis)."
    },
    {
      "id": "GPB203-U2-MCQ42",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Medium",
      "questionText": "Who provided the first cytological demonstration of crossing over in Zea mays using heteromorphic chromosomes in 1931?",
      "options": {
        "A": "Harriet Creighton and Barbara McClintock",
        "B": "Curt Stern",
        "C": "T. H. Morgan",
        "D": "A. H. Sturtevant"
      },
      "correctOption": "A",
      "explanation": "Creighton and McClintock used maize Chromosome 9 marked with a physical terminal knob and an extra translocated piece to prove physical exchange."
    },
    {
      "id": "GPB203-U2-MCQ43",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Medium",
      "questionText": "Curt Stern independently demonstrated cytological crossing over in 1931 using which organism?",
      "options": {
        "A": "Zea mays",
        "B": "Drosophila melanogaster",
        "C": "Neurospora crassa",
        "D": "Escherichia coli"
      },
      "correctOption": "B",
      "explanation": "Stern used Drosophila females carrying structurally distinct X chromosomes (one broken with a piece of Y, one with carmine and bar markers)."
    },
    {
      "id": "GPB203-U2-MCQ44",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Medium",
      "questionText": "In the Holliday model of homologous recombination, the cruciform four-stranded DNA junction that forms is called a:",
      "options": {
        "A": "Replication fork",
        "B": "Holliday junction (chi form)",
        "C": "Spliceosome",
        "D": "Okazaki bridge"
      },
      "correctOption": "B",
      "explanation": "Robin Holliday proposed the symmetrical four-way DNA intermediate known as the Holliday junction, resolved by resolvase enzymes."
    },
    {
      "id": "GPB203-U2-MCQ45",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Medium",
      "questionText": "If two genes are 18 map units apart, what percentage of recombinant offspring is expected from a test cross?",
      "options": {
        "A": "9%",
        "B": "18%",
        "C": "36%",
        "D": "82%"
      },
      "correctOption": "B",
      "explanation": "One map unit (cM) equals 1% recombination frequency. Therefore, 18 map units corresponds to 18% recombinant progeny."
    },
    {
      "id": "GPB203-U2-MCQ46",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Hard",
      "questionText": "In a dihybrid test cross involving genes in repulsion phase (Ab/aB), the two recombinant gamete types produced are:",
      "options": {
        "A": "Ab and aB",
        "B": "AB and ab",
        "C": "AB and Ab",
        "D": "aB and ab"
      },
      "correctOption": "B",
      "explanation": "In repulsion (Ab/aB), the parental gametes are Ab and aB; crossing over produces the recombinant gametes AB and ab."
    },
    {
      "id": "GPB203-U2-MCQ47",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Hard",
      "questionText": "The Meselson-Radding model of recombination improved upon the Holliday model by proposing:",
      "options": {
        "A": "Symmetrical double-strand breaks simultaneously",
        "B": "Asymmetric single-strand invasion initiated by a nick in only one DNA duplex followed by DNA synthesis",
        "C": "Recombination without any DNA break",
        "D": "Conservative strand transfer"
      },
      "correctOption": "B",
      "explanation": "The Meselson-Radding model introduced asymmetric single-strand invasion, accounting for aberrant 5:3 and 3:5 gene conversion ratios in fungi."
    },
    {
      "id": "GPB203-U2-MCQ48",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "difficulty": "Hard",
      "questionText": "In the modern Double-Strand Break Repair (DSBR) model (Szostak et al.), meiotic recombination is initiated by which specific endonuclease?",
      "options": {
        "A": "DNA polymerase I",
        "B": "Spo11",
        "C": "Topoisomerase II",
        "D": "Cas9"
      },
      "correctOption": "B",
      "explanation": "Spo11 generates programmed double-strand breaks (DSBs) with 3' overhangs during early meiotic prophase I to initiate crossing over."
    },
    {
      "id": "GPB203-U2-MCQ49",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Easy",
      "questionText": "Who constructed the world's first genetic linkage map in 1913?",
      "options": {
        "A": "T. H. Morgan",
        "B": "Alfred Henry Sturtevant",
        "C": "Gregor Mendel",
        "D": "Barbara McClintock"
      },
      "correctOption": "B",
      "explanation": "Sturtevant, working in Morgan's lab, used recombination frequencies to map six sex-linked genes on the Drosophila X chromosome."
    },
    {
      "id": "GPB203-U2-MCQ50",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Easy",
      "questionText": "One map unit (1 m.u.) of distance on a genetic chromosome map is formally named:",
      "options": {
        "A": "One Mendel",
        "B": "One centiMorgan (cM)",
        "C": "One Angstrom",
        "D": "One base pair"
      },
      "correctOption": "B",
      "explanation": "One map unit equals one centiMorgan (cM), representing a 1% frequency of meiotic recombination."
    },
    {
      "id": "GPB203-U2-MCQ51",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Easy",
      "questionText": "In a three-point test cross, which phenotypic class occurs with the highest numerical frequency?",
      "options": {
        "A": "Double crossover (DCO) class",
        "B": "Parental (non-crossover) class",
        "C": "Single crossover in region I",
        "D": "Single crossover in region II"
      },
      "correctOption": "B",
      "explanation": "Because crossing over is a chance event, non-crossover parental gametes always occur with the highest frequency in test-cross progeny."
    },
    {
      "id": "GPB203-U2-MCQ52",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Easy",
      "questionText": "In a three-point test cross, which phenotypic class occurs with the lowest numerical frequency?",
      "options": {
        "A": "Parental class",
        "B": "Single crossover class",
        "C": "Double crossover (DCO) class",
        "D": "Tester parent class"
      },
      "correctOption": "C",
      "explanation": "Double crossovers require two simultaneous independent crossing over events, making them mathematically the rarest class."
    },
    {
      "id": "GPB203-U2-MCQ53",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Medium",
      "questionText": "How is the middle gene identified in a three-point test cross?",
      "options": {
        "A": "By finding the gene that remains unchanged between parental and DCO classes",
        "B": "By comparing the Parental class with the Double Crossover class; the gene that differs (flips) is the middle gene",
        "C": "By alphabetical order",
        "D": "By counting dominance"
      },
      "correctOption": "B",
      "explanation": "A double crossover exchanges only the central gene marker relative to the flanking outside markers."
    },
    {
      "id": "GPB203-U2-MCQ54",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Medium",
      "questionText": "The Coefficient of Coincidence (C) is mathematically defined as:",
      "options": {
        "A": "Observed DCO frequency / Expected DCO frequency",
        "B": "Expected DCO frequency / Observed DCO frequency",
        "C": "1 - Interference",
        "D": "Total Recombinants / Total Progeny"
      },
      "correctOption": "A",
      "explanation": "Coefficient of coincidence measures the ratio of actual observed double crossovers to the expected double crossovers based on independent chance."
    },
    {
      "id": "GPB203-U2-MCQ55",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Medium",
      "questionText": "What is the mathematical relationship between Chromosome Interference (I) and the Coefficient of Coincidence (C)?",
      "options": {
        "A": "I = C + 1",
        "B": "I = 1 - C",
        "C": "I = 1 / C",
        "D": "I = C x 100"
      },
      "correctOption": "B",
      "explanation": "Interference is calculated as I = 1 - C. When C = 0.8, I = 0.2 (20% interference)."
    },
    {
      "id": "GPB203-U2-MCQ56",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Medium",
      "questionText": "If the Coefficient of Coincidence C = 1.0, what does this indicate regarding chromosome interference?",
      "options": {
        "A": "Complete positive interference (I = 1)",
        "B": "No interference (I = 0); crossovers in adjacent regions occur completely independently",
        "C": "Negative interference",
        "D": "Double crossovers are impossible"
      },
      "correctOption": "B",
      "explanation": "When C = 1.0, Interference I = 1 - 1 = 0, indicating that a crossover in one interval does not affect crossing over in the adjacent interval."
    },
    {
      "id": "GPB203-U2-MCQ57",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Medium",
      "questionText": "In a three-point test cross, the distance between genes A and B is 10 cM, and between B and C is 20 cM. What is the expected frequency of double crossovers?",
      "options": {
        "A": "30%",
        "B": "2% (0.02)",
        "C": "0.5%",
        "D": "20%"
      },
      "correctOption": "B",
      "explanation": "Expected DCO frequency = RF(A-B) x RF(B-C) = 0.10 x 0.20 = 0.02 (or 2%)."
    },
    {
      "id": "GPB203-U2-MCQ58",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Hard",
      "questionText": "In a test cross of 1000 progeny, the expected DCO count was 20, but only 12 double crossovers were observed. What is the degree of chromosome interference (I)?",
      "options": {
        "A": "0.60",
        "B": "0.40 (40%)",
        "C": "0.20",
        "D": "0.80"
      },
      "correctOption": "B",
      "explanation": "C = Observed / Expected = 12 / 20 = 0.60. Interference I = 1 - C = 1 - 0.60 = 0.40 (or 40%)."
    },
    {
      "id": "GPB203-U2-MCQ59",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Hard",
      "questionText": "Why does a two-point test cross between two distant linked genes underestimate the true physical map distance compared to a three-point test cross?",
      "options": {
        "A": "Because genes mutate rapidly",
        "B": "Because double crossovers between the two markers go undetected, restoring the parental arrangement",
        "C": "Because meiosis is inhibited",
        "D": "Because heterochromatin prevents staining"
      },
      "correctOption": "B",
      "explanation": "A double crossover between two distant markers restores the original parental allele combination, masking the two crossover events unless a third central marker is present."
    },
    {
      "id": "GPB203-U2-MCQ60",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "difficulty": "Hard",
      "questionText": "What mathematical mapping function was developed by J.B.S. Haldane in 1919 to correct for undetected multiple crossovers over long chromosome distances?",
      "options": {
        "A": "Poisson correction: d = -1/2 ln(1 - 2r)",
        "B": "Binomial expansion: (p + q)^n",
        "C": "Kosambi function: d = 1/4 ln((1+2r)/(1-2r))",
        "D": "Hardy-Weinberg equilibrium"
      },
      "correctOption": "A",
      "explanation": "Haldane's mapping function utilizes the Poisson distribution (assuming zero interference) to convert observed recombination fraction (r) into true additive map distance (d)."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "GPB203-U2-SUB01",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "questionText": "Outline the fundamental parallels between the behavior of Mendelian factors (genes) and chromosomes during meiosis as noted by Sutton and Boveri.",
      "modelAnswer": "Walter Sutton and Theodor Boveri (1902\u20131903) recognized striking, one-to-one cytological parallels between the transmission of Mendelian factors and the physical movement of chromosomes during gametogenesis:\n\n1. Existence in Pairs:\nMendelian factors occur in pairs in diploid somatic cells (*Aa*). Similarly, chromosomes are present in homologous pairs (2n) in somatic cells, with one member inherited from each parent.\n\n2. Clean Segregation during Gametogenesis:\nMendel's Law of Segregation posits that alleles of a factor pair separate during gamete formation so that each gamete receives only one factor. Cytologically, homologous chromosomes pair in synapsis and disjoin to opposite spindle poles at Anaphase I of meiosis, resulting in haploid gametes (n) possessing strictly one chromosome of each pair.\n\n3. Independent Assortment:\nAlleles of different unlinked gene pairs assort independently into gametes. Cytologically, non-homologous chromosome pairs align randomly and independently along the equatorial plate at Metaphase I, producing recombinant combinations with equal probability.\n\n4. Restoration at Fertilization:\nThe haploid gametes fuse during fertilization to restore the paired diploid state (2n) for both chromosomes and allelic gene factors in the zygote.\n\nThese exact correspondences established the physical reality of genes as discrete chromosomal loci.",
      "outlinePoints": [
        "Presence of both factors and chromosomes in homologous diploid pairs",
        "Anaphase I chromosome disjunction paralleling allelic segregation",
        "Independent Metaphase I bivalent alignment paralleling independent assortment",
        "Syngamy restoring diploid chromosome numbers and allelic factor pairs"
      ]
    },
    {
      "id": "GPB203-U2-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "questionText": "Explain Calvin Bridges' Genic Balance Theory of sex determination in Drosophila melanogaster and provide the X:A ratio thresholds.",
      "modelAnswer": "Calvin B. Bridges (1921) demonstrated that in *Drosophila melanogaster*, sex is not determined simply by the presence or absence of a Y chromosome, but by the quantitative genic balance between female-determining genes on the X-chromosomes and male-determining genes distributed across the autosomes (A).\n\n1. Mechanism of Genic Balance:\n- The X chromosome carries predominantly female-determining factors.\n- The autosomes carry predominantly male-determining factors.\n- The Y chromosome plays no role in somatic sex determination in *Drosophila* (it carries only male fertility factors like *kl-1*, *kl-2*, *kl-3*, *kl-5*). An XO fly is phenotypically male (though sterile), while an XXY fly is a fertile female.\n\n2. Sex Index (X:A Ratio) Thresholds:\nThe sexual phenotype is dictated by the ratio of X chromosomes to sets of autosomes (X:A):\n- X:A = 1.0 (e.g., 2X:2A or 3X:3A) -> Normal Fertile Female\n- X:A = 0.5 (e.g., 1X:2A or XY:2A) -> Normal Male\n- X:A between 0.5 and 1.0 (e.g., 2X:3A = 0.67) -> Intersex (mosaic of male and female tissue)\n- X:A > 1.0 (e.g., 3X:2A = 1.5) -> Metafemale (Superfemale: inviable, sterile)\n- X:A < 0.5 (e.g., 1X:3A = 0.33) -> Metamale (Supermale: severely defective, sterile)",
      "outlinePoints": [
        "Bridges' genic balance concept: ratio of X chromosomes to Autosomal sets",
        "Role of Y chromosome (male fertility only, not somatic sex determination)",
        "Key thresholds: X:A = 1.0 (female) and X:A = 0.5 (male)",
        "Aneuploid sexual outcomes: Intersex (0.67), Metafemale (>1.0), Metamale (<0.5)"
      ]
    },
    {
      "id": "GPB203-U2-SUB03",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "questionText": "Define criss-cross inheritance and illustrate it with Thomas Hunt Morgan's classic white-eye cross in Drosophila melanogaster.",
      "modelAnswer": "Criss-cross inheritance is the distinctive transmission pattern characteristic of X-linked recessive genes wherein a phenotypic trait is transmitted from an affected father to his carrier daughter, who subsequently transmits it to 50% of her sons (maternal grandsons). The trait 'criss-crosses' from male parent through female intermediate to male descendant.\n\nMorgan's Classic White-Eye Experiment in Drosophila:\nIn 1910, T. H. Morgan discovered a spontaneous white-eyed mutant male (*XwY*) in wild-type red-eyed (*X+X+*) cultures.\n\n1. Cross 1 (White-eyed male x Pure Red-eyed female):\n- Parents: *X+X+* (Red female) x *XwY* (White male)\n- Gametes: *X+* from female; *Xw* and *Y* from male\n- F1 Progeny: All red-eyed (Females: *X+Xw* carrier; Males: *X+Y* normal).\n- F2 Progeny (F1 intercrossed: *X+Xw* x *X+Y*):\n  * Females: 100% red-eyed (*X+X+* and *X+Xw*)\n  * Males: 50% red-eyed (*X+Y*) and 50% white-eyed (*XwY*).\n  * Observation: All white-eyed flies in F2 were exclusively male!\n\n2. Reciprocal Cross (White-eyed female x Red-eyed male):\n- Parents: *XwXw* (White female) x *X+Y* (Red male)\n- F1 Progeny: 100% Red-eyed females (*X+Xw*) and 100% White-eyed males (*XwY*).\n- Significance: The white eye phenotype jumped immediately from the mother to her sons in F1, while the father passed his red eye phenotype to his daughters.\n\nThis reciprocal disparity provided the first conclusive experimental proof that the gene for eye color is physically located on the X chromosome.",
      "outlinePoints": [
        "Definition of criss-cross transmission (father -> daughter carrier -> grandson)",
        "Genotypic details of Morgan's original P1, F1, and F2 crosses",
        "F2 result showing restriction of mutant phenotype to males",
        "Reciprocal cross demonstrating direct mother-to-son transmission"
      ]
    },
    {
      "id": "GPB203-U2-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "questionText": "Differentiate between sex-influenced and sex-limited traits with two biological examples of each.",
      "modelAnswer": "Sex-influenced and sex-limited traits are both governed by autosomal genes (not located on sex chromosomes), but they differ fundamentally in their mode of expression and penetrance across sexes:\n\n1. Sex-Influenced Traits:\n- Definition: Autosomal traits whose dominance relationship is reversed between biological sexes under the influence of circulating sex hormones (androgens vs estrogens). A single heterozygous genotype (*Bb*) produces one phenotype in males and the opposite phenotype in females.\n- Biological Examples:\n  * Pattern Baldness in Humans: Governed by autosomal allele *B*. In males (high testosterone), *B* acts as dominant: both *BB* and *Bb* cause baldness. In females, *B* acts as recessive: only homozygous *BB* causes noticeable thinning/baldness, while *Bb* females have normal hair.\n  * Horn Development in Sheep: In Dorset x Suffolk crosses, heterozygous males (*Hh*) develop horns, whereas heterozygous females (*Hh*) are hornless.\n\n2. Sex-Limited Traits:\n- Definition: Autosomal traits whose anatomical, physiological, or behavioral expression is strictly confined to one biological sex. The penetrance in the opposite sex is zero, although both sexes carry and transmit the genes to their offspring.\n- Biological Examples:\n  * Milk Production and Butterfat Content in Dairy Cattle: The genes are autosomal and carried by both bulls and cows. However, bulls never lactate; the trait is expressed exclusively in cows due to mammary gland anatomy and lactation hormones.\n  * Cock-Feathering vs Hen-Feathering in Poultry: Governed by autosomal gene *H*. In roosters, homozygous *hh* produces long, curved sickle feathers (cock-feathering); in hens, all genotypes (*HH*, *Hh*, *hh*) exhibit hen-feathering due to estrogen suppression.",
      "outlinePoints": [
        "Definition and hormonal dominance modulation in sex-influenced traits",
        "Human pattern baldness and sheep horns as sex-influenced examples",
        "Definition and anatomical/hormonal restriction in sex-limited traits",
        "Dairy milk yield and poultry feathering as sex-limited examples"
      ]
    },
    {
      "id": "GPB203-U2-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "questionText": "Explain the concept of complete linkage versus incomplete linkage and mention why male Drosophila exhibits complete linkage.",
      "modelAnswer": "Genetic linkage refers to the physical association and joint transmission of two or more non-allelic genes residing on the same chromosome.\n\n1. Complete Linkage:\n- Definition: Complete linkage occurs when two or more linked genes are situated so close together on a chromosome that no crossing over occurs between them during meiosis. As a result, the parental combinations of alleles are transmitted intact to 100% of the gametes; zero recombinant progeny are formed.\n- Example in Male *Drosophila*: In male *Drosophila melanogaster*, crossing over is completely suppressed throughout the entire genome (achiasmatic meiosis). Spermatocytes form bivalents during prophase I, but synaptonemal complexes are defective and no chiasmata or recombination events occur. Consequently, when a heterozygous male (*b+ b vg+ vg*) is test-crossed with a double-recessive female (*b b vg vg*), only parental gametes (*b+ vg+* and *b vg*) are produced, yielding exactly 50% wild-type and 50% black-vestigial progeny with 0% recombinants. Complete linkage is also observed in female silkworms (*Bombyx mori*).\n\n2. Incomplete Linkage:\n- Definition: Incomplete linkage occurs when linked genes are separated by sufficient physical distance on the chromosome that crossing over occasionally occurs between non-sister chromatids during pachytene of prophase I.\n- Gamete Formation: The meiotic cells yield both non-crossover parental gametes (in excess, >50%) and crossover recombinant gametes (<50%).\n- Example: When female *Drosophila* of the same genotype (*b+ b vg+ vg*) is test-crossed, crossing over occurs in approximately 18% of meiocytes, yielding 82% parental offspring (41% wild-type, 41% black-vestigial) and 18% recombinant offspring (9% black-normal, 9% gray-vestigial).",
      "outlinePoints": [
        "Definition of complete linkage and 100% parental gamete production",
        "Cytological mechanism of achiasmatic meiosis in male Drosophila and female silkworms",
        "Test-cross evidence comparing male vs female Drosophila dihybrid crosses",
        "Definition of incomplete linkage and formation of recombinant gametes via pachytene crossing over"
      ]
    },
    {
      "id": "GPB203-U2-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "questionText": "Describe the cytological demonstration of crossing over performed by Harriet Creighton and Barbara McClintock in Zea mays.",
      "modelAnswer": "In 1931, Harriet Creighton and Barbara McClintock provided the first definitive physical proof that genetic crossing over is accompanied by the actual physical exchange of homologous chromosome segments using maize (*Zea mays*).\n\n1. Experimental Design and Heteromorphic Chromosome 9:\nCreighton and McClintock engineered a strain of maize carrying a 'heteromorphic' (morphologically distinct) Chromosome 9 that possessed two visible cytological landmarks:\n- A densely staining heterochromatic 'knob' at the end of the short arm.\n- A translocated chromosome piece from Chromosome 8 attached to the end of the long arm.\nThe homologous normal Chromosome 9 lacked both the terminal knob and the translocated segment.\n\n2. Genetic Markers on Chromosome 9:\nTwo closely linked genes were positioned between these cytological markers:\n- *C* (colored aleurone, dominant) vs *c* (colorless aleurone, recessive).\n- *Wx* (starchy endosperm, dominant) vs *wx* (waxy endosperm, recessive).\nThe heteromorphic knobbed/translocated chromosome carried alleles *c* and *Wx*. The normal homolog carried alleles *C* and *wx*.\n\n3. The Cross and Cytogenetic Findings:\nThey crossed this female plant (*c Wx / C wx*) with a normal male homozygous for *c* and *wx* (*c wx / c wx*).\n- Non-crossover progeny had either the knobbed-translocated chromosome (*c Wx*) or the knobless-normal chromosome (*C wx*).\n- Recombinant progeny of genotype *C Wx* (colored, starchy) possessed a chromosome with a translocated piece but NO terminal knob.\n- Recombinant progeny of genotype *c wx* (colorless, waxy) possessed a chromosome with a terminal knob but NO translocated piece.\n\nConclusion:\nThe precise physical correlation between cytological marker exchange and genetic allele recombination proved unequivocally that crossing over involves the physical breakage and reciprocal reunion of homologous chromatid segments.",
      "outlinePoints": [
        "Significance of Creighton and McClintock's 1931 maize experiment",
        "Physical landmarks on heteromorphic Chromosome 9 (terminal knob and translocated piece)",
        "Genetic markers used (c/C aleurone color and wx/Wx starch type)",
        "Correlation between recombinant phenotypes and cytologically exchanged chromosome segments"
      ]
    },
    {
      "id": "GPB203-U2-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "questionText": "Define centiMorgan (cM). Explain why recombination frequency between two linked genes never exceeds 50% even when they are separated by 80 cM.",
      "modelAnswer": "Definition of centiMorgan (cM):\nA centiMorgan (cM), or map unit (m.u.), is a standardized unit of measurement used in genetic linkage mapping to quantify the relative distance between gene loci on a chromosome. One centiMorgan is defined as the genetic distance that yields a 1% recombination frequency (1 recombinant individual per 100 test-cross progeny).\n\nWhy Recombination Frequency Never Exceeds 50%:\nEven when two gene loci are physically separated by vast distances (e.g., 80 cM or 120 cM):\n1. Incomplete Chromatid Participation:\nCrossing over during pachytene occurs at the four-strand (tetrad) stage and involves strictly two of the four chromatids (non-sister chromatids) at any single crossover point. The remaining two sister chromatids do not participate in that specific crossover event.\n\n2. Multiple Crossover Dynamics:\nWhen distance increases, multiple crossovers (double, triple, quadruple crossovers) occur between the loci. Depending on which chromatids participate, double crossovers can involve:\n- 2 strands (0% recombinant gametes)\n- 3 strands (50% recombinant gametes)\n- 4 strands (100% recombinant gametes)\nIn a random population of meiocytes, the theoretical average outcome of multi-strand crossing over asymptotically converges to exactly 50% parental and 50% recombinant gametes.\n\n3. Simulation of Independent Assortment:\nAt 50% recombination, the test-cross ratio is 1:1:1:1, exactly mimicking the behavior of genes situated on completely different non-homologous chromosomes. Therefore, standard recombination mapping functions (such as Haldane's or Kosambi's functions) are required to mathematically calculate map distances beyond 50 cM.",
      "outlinePoints": [
        "Formal definition of centiMorgan (1% recombination frequency)",
        "Four-strand tetrad stage involving only 2 non-sister chromatids per crossover",
        "Multi-strand crossover combinations (2-strand, 3-strand, 4-strand) averaging 50%",
        "Convergence to 50% capping and mathematical mimicry of independent assortment"
      ]
    },
    {
      "id": "GPB203-U2-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "questionText": "Define Coefficient of Coincidence and Chromosome Interference. Explain the biological significance of positive vs negative interference.",
      "modelAnswer": "In genetic linkage mapping, crossing over events in adjacent chromosomal intervals are rarely independent. The occurrence of one crossover physically influences the probability of another crossover nearby.\n\n1. Definitions and Mathematical Formulations:\n- Coefficient of Coincidence (C): The ratio of the observed frequency of double crossovers (DCO) to the expected frequency of double crossovers calculated assuming independent events:\n  `C = Observed DCO Frequency / Expected DCO Frequency`\n  where `Expected DCO Frequency = Recombination Frequency(Region I) x Recombination Frequency(Region II)`.\n- Chromosome Interference (I): The measure of the degree to which a crossover in one interval inhibits or enhances crossing over in an adjacent interval:\n  `Interference (I) = 1 - Coefficient of Coincidence (C)`\n\n2. Biological Significance:\n- Positive Interference (0 < C < 1, therefore 0 < I <= 1):\n  * Observed DCOs are fewer than expected.\n  * Biological Basis: In eukaryotic meiosis, the physical rigidity of paired chromosome axes and the spatial mechanics of the synaptonemal complex prevent chiasmata from forming within ~10\u201315 cM of each other (chiasma interference). If `C = 0`, interference is complete (`I = 1.0`), meaning no double crossovers can form. Positive interference is the universal norm in higher plants and animals.\n- Negative Interference (C > 1, therefore I < 0):\n  * Observed DCOs exceed theoretical expectations.\n  * Biological Basis: Occurs predominantly in bacteriophages (e.g., T4), fungal transformation, and intragenic recombination (such as within the *rII* cistron). When localized recombination machinery or heteroduplex repair complexes assemble, multiple closely clustered exchange events take place within a very short physical DNA segment.",
      "outlinePoints": [
        "Formulas for Coefficient of Coincidence (C = Obs/Exp) and Interference (I = 1 - C)",
        "Positive interference: physical inhibition of adjacent chiasmata by chromosome rigidity/synaptonemal complex",
        "Complete interference (C = 0, I = 1.0) over short physical distances",
        "Negative interference (C > 1, I < 0) and clustered intragenic exchange in phages and fungi"
      ]
    },
    {
      "id": "GPB203-U2-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)",
      "questionText": "Provide a comprehensive comparative analysis of sex determination mechanisms across the biological kingdom, covering the XX-XY system, ZZ-ZW system, Haplodiploidy, and environmental/hormonal sex determination.",
      "modelAnswer": "Sex determination represents the biological process through which an organism's developmental pathway is directed toward producing male or female reproductive organs. Nature exhibits remarkable diversity in genetic and environmental sex-determining switches:\n\n1. The XX-XY System (Male Heterogamety):\n- Chromosomal Makeup: Females are homogametic (*XX*), producing eggs that all carry an X chromosome. Males are heterogametic (*XY*), producing 50% X-bearing and 50% Y-bearing sperm.\n- Mechanism in Mammals: Presence of the *SRY* gene on the Y chromosome encodes Testis-Determining Factor (TDF), which directs bipotential embryonic gonads to develop into testes. Absence of *SRY* (in *XX* individuals) allows development of ovaries under *WNT4* and *DAX1* control.\n- Occurrence: Humans, all therian mammals, *Drosophila*, and dioecious plants such as *Silene latifolia* (white campion) and *Cannabis sativa*.\n\n2. The ZZ-ZW System (Female Heterogamety):\n- Chromosomal Makeup: Males are homogametic (*ZZ*), producing uniform Z-bearing sperm. Females are heterogametic (*ZW*), producing 50% Z-bearing and 50% W-bearing ova.\n- Mechanism: Sex is determined by the ovum at fertilization. In birds, the *DMRT1* gene on the Z chromosome exhibits dosage-dependent action: two doses (*ZZ*) induce testes, while a single dose (*ZW*) results in ovaries.\n- Occurrence: Birds (chickens, turkeys), reptiles (snakes, some lizards), butterflies, moths (silkworms), and some fish and strawberries (*Fragaria*).\n\n3. Haplodiploidy (Arrhenotoky):\n- Chromosomal Makeup: There are no dedicated sex chromosomes. Females are diploid (2n) developing from fertilized eggs. Males are haploid (n) developing from unfertilized eggs via arrhenotokous parthenogenesis.\n- Mechanism: Governed by the Complementary Sex Determiner (*csd*) locus (in honeybees). Diploid individuals heterozygous at *csd* differentiate into fertile females (queens or worker bees depending on royal jelly feeding). Hemizygous haploid individuals (single *csd* allele) develop into fertile males (drones) that produce sperm via mitosis without meiosis.\n- Occurrence: Hymenoptera (honeybees, bumblebees, ants, parasitic wasps).\n\n4. Environmental and Hormonal Sex Determination (ESD):\n- Temperature-Dependent Sex Determination (TSD): Found in reptiles (alligators, crocodiles, sea turtles). Incubation temperature of eggs during a critical thermosensitive period determines gonadal development by modulating aromatase enzyme activity (converting testosterone into estradiol).\n  * Pattern Ia: Cold temperatures produce males; warm temperatures produce females (e.g., sea turtles).\n  * Pattern Ib: Cold temperatures produce females; warm temperatures produce males (e.g., alligators).\n- Hormonal and Photoperiodic Reversal in Plants: In dioecious crops like papaya (*Carica papaya*) and cucumber (*Cucumis sativus*), application of gibberellins induces male flower development, whereas auxins and ethylene induce female flowers. High temperatures can cause sex reversal from female to hermaphrodite/male in papaya.",
      "outlinePoints": [
        "XX-XY Male Heterogamety: SRY gene action in mammals and dioecious plants",
        "ZZ-ZW Female Heterogamety: female egg determination and DMRT1 dosage in birds and Lepidoptera",
        "Haplodiploidy: arrhenotokous parthenogenesis and csd heterozygosity in honeybees",
        "Temperature-Dependent Sex Determination (TSD) in reptiles and aromatase regulation",
        "Hormonal sex modification in horticultural crops (papaya and cucurbits)"
      ]
    },
    {
      "id": "GPB203-U2-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "questionText": "Explain the step-by-step methodology for analyzing a three-point test cross. Detail how to determine (a) gene order, (b) map distances, (c) coefficient of coincidence, and (d) chromosome interference using a hypothetical data set.",
      "modelAnswer": "A three-point test cross (*trihybrid test cross*) involves crossing a female individual heterozygous for three linked genes (*AaBbCc*) with a homozygous triple-recessive male tester (*aabbcc*). This represents the foundational method of genetic mapping because it maps three loci simultaneously and directly measures double crossovers.\n\nHypothetical Test-Cross Data:\nProgeny phenotypes and counts from cross *AaBbCc* x *aabbcc* (Total = 1000):\n- Class 1: A B C = 390 (Parental)\n- Class 2: a b c = 380 (Parental)\n- Class 3: A B c = 81 (Single Crossover Region II)\n- Class 4: a b C = 79 (Single Crossover Region II)\n- Class 5: A b c = 27 (Single Crossover Region I)\n- Class 6: a B C = 23 (Single Crossover Region I)\n- Class 7: A b C = 11 (Double Crossover)\n- Class 8: a B c = 9 (Double Crossover)\nTotal Progeny = 1000.\n\nStep 1: Identify Parental and Double Crossover Classes:\n- Parental Classes (Non-Crossovers): Classes with the highest numbers -> *A B C* (390) and *a b c* (380). Total = 770.\n- Double Crossover Classes (DCO): Classes with the lowest numbers -> *A b C* (11) and *a B c* (9). Total = 20.\n\nStep 2: Determine Gene Order:\nCompare the alleles of the Parental chromosomes with the Double Crossover chromosomes.\n- Parental: `A - B - C` and `a - b - c`\n- DCO: `A - b - C` and `a - B - c`\nObserve which locus is swapped ('flipped'):\nNotice that *A* and *C* remain together, while *B* has flipped to *b* (and *a* and *c* remain together while *b* has flipped to *B*).\nTherefore, **Gene B is the middle gene!**\nThe correct physical gene order is: `A - B - C` (or `C - B - A`).\n\nStep 3: Calculate Recombination Frequencies and Map Distances:\nRewrite genotypes in correct physical order:\nParentals: *A B C / a b c*.\n\nInterval 1 (Distance between Gene A and Gene B):\nRecombinants between A and B include Single Crossovers in Region I (Classes 5 & 6) PLUS all Double Crossovers (Classes 7 & 8):\n- SCO I = 27 (A b c) + 23 (a B C) = 50\n- DCO = 11 + 9 = 20\nTotal Recombinants (A-B) = 50 + 20 = 70\nMap Distance (A-B) = (70 / 1000) x 100 = **7.0 cM (map units)**.\n\nInterval 2 (Distance between Gene B and Gene C):\nRecombinants between B and C include Single Crossovers in Region II (Classes 3 & 4) PLUS all Double Crossovers:\n- SCO II = 81 (A B c) + 79 (a b C) = 160\n- DCO = 11 + 9 = 20\nTotal Recombinants (B-C) = 160 + 20 = 180\nMap Distance (B-C) = (180 / 1000) x 100 = **18.0 cM (map units)**.\n\nTotal Linkage Map:\n`A ----------- (7.0 cM) ----------- B ---------------------- (18.0 cM) ---------------------- C`\nTotal length between outside markers A and C = 7.0 + 18.0 = **25.0 cM**.\n\nStep 4: Calculate Coefficient of Coincidence (C):\n- Observed DCO Frequency = 20 / 1000 = 0.02 (2.0%)\n- Expected DCO Frequency = RF(A-B) x RF(B-C) = 0.07 x 0.18 = 0.0126 (1.26%)\n- Coefficient of Coincidence (C) = Observed / Expected = 0.02 / 0.0126 = **1.587**.\n\nStep 5: Calculate Chromosome Interference (I):\n- Interference (I) = 1 - C = 1 - 1.587 = **-0.587 (Negative Interference)**.\nInterpretation: A negative interference value indicates that a crossover event in Region I enhanced the probability of a crossover occurring in Region II, yielding more double crossovers than expected by chance.",
      "outlinePoints": [
        "Introduction to three-point test cross utility and setup",
        "Identification of Parental (highest) and Double Crossover (lowest) classes",
        "Gene order determination by finding the single flipped central marker",
        "Detailed map distance calculations for Interval I and Interval II incorporating DCOs",
        "Calculation of expected DCO, Coefficient of Coincidence, and Chromosome Interference"
      ]
    },
    {
      "id": "GPB203-U2-SUB11",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "questionText": "Compare the Holliday Model and the Double-Strand Break Repair (DSBR) Model of homologous recombination. Discuss their molecular steps, intermediate structures, and resolution pathways.",
      "modelAnswer": "Homologous recombination is an essential molecular process driving meiotic crossing over, generating genetic diversity and repairing DNA breaks. Two landmark models explain its molecular mechanics:\n\n1. The Holliday Model (Robin Holliday, 1964):\n- Initiation: Recombination is initiated by coordinated, single-strand nicks generated at identical, homologous positions on two non-sister chromatid DNA duplexes.\n- Strand Invasion: The cleaved single-stranded ends displace each other and cross over, invading the opposite duplex to pair with complementary strands.\n- Ligation and Heteroduplex Formation: DNA ligase seals the crossed strands, creating a four-way branched DNA intermediate termed the **Holliday Junction**.\n- Branch Migration: The junction migrates laterally along the duplex, unwinding and rewinding DNA, which creates extensive regions of heteroduplex DNA (where one strand originates from maternal and the other from paternal DNA).\n- Resolution: Resolvase cuts the Holliday junction across two alternative planes:\n  * Horizontal Cut (Non-crossover / Patch Recombinant): Recombinant heteroduplex tracts without flanking outside marker exchange.\n  * Vertical Cut (Crossover / Splice Recombinant): True crossing over resulting in reciprocal exchange of flanking chromosomal markers.\n- Limitation: The model requires simultaneous, identical nicks on both duplexes, which rarely occurs *in vivo*, and cannot account for asymmetric gene conversion patterns.\n\n2. The Double-Strand Break Repair (DSBR) Model (Szostak, Orr-Weaver, Rothstein, and Stahl, 1983):\n- Initiation: Recombination is initiated by a programmed, deliberate double-strand break (DSB) in only one of the two homologous DNA duplexes, catalyzed by the topoisomerase-like endonuclease **Spo11**.\n- Resection: 5'-to-3' exonucleases degrade the 5' ends of the broken duplex, generating extensive 3' single-stranded overhangs.\n- Single-Strand Invasion (D-Loop Formation): Guided by recombinases **Rad51** and **Dmc1**, one 3' overhang invades the intact homologous duplex, displacing one strand to form a Displacement Loop (**D-loop**).\n- DNA Synthesis: The invading 3' end primes DNA synthesis using the homologous chromatid as a template, copying lost information (explaining gene conversion).\n- Second-End Capture: The expanding D-loop pairs with the second 3' overhang of the broken duplex. Further synthesis and ligation produce a **Double Holliday Junction (dHJ)** intermediate.\n- Resolution Pathways:\n  * Cleavage of the two junctions in opposite orientations by structure-specific endonucleases (such as MLH1-MLH3) resolves the structure into crossover recombinants (chiasmata).\n  * Cleavage in the same orientation produces non-crossover products.\n  * Alternatively, Synthesis-Dependent Strand Annealing (SDSA) unwinds the invading strand before second-end capture, exclusively producing non-crossover patch recombinants.",
      "outlinePoints": [
        "Holliday Model (1964): single-strand nicks, strand invasion, branch migration, single Holliday junction",
        "Resolution of Holliday junction (horizontal patch vs vertical splice)",
        "DSBR Model (1983): Spo11-induced double-strand break and 5'-3' resection",
        "Rad51/Dmc1 strand invasion, D-loop formation, and second-end capture producing double Holliday junctions",
        "Alternative resolution pathways (crossover vs non-crossover via SDSA)"
      ]
    },
    {
      "id": "GPB203-U2-SUB12",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "questionText": "Discuss dosage compensation in mammals, Drosophila, and Caenorhabditis elegans. Explain Mary Lyon's hypothesis of X-inactivation, Barr body formation, and molecular mechanics of the Xist gene.",
      "modelAnswer": "Because sex chromosomes are unequal in number between sexes (XX females vs XY males), organisms require dosage compensation mechanisms to equalize the expression of X-linked genes relative to autosomal genes.\n\n1. Comparative Mechanisms of Dosage Compensation Across Model Taxa:\n- Mammals (X-Inactivation / Lyonization): One of the two X chromosomes in female somatic cells is epigenetically inactivated and condensed into heterochromatin (Barr body), equalizing dosage with hemizygous XY males.\n- Drosophila (X-Hypertranscription): The male's single X chromosome undergoes 2-fold hypertranscription. The Male-Specific Lethal (MSL) complex (including *roX* RNAs and MOF histone acetyltransferase) hyperacetylates histone H4 at lysine 16 (H4K16ac), doubling mRNA output to equal the female's two X chromosomes.\n- Caenorhabditis elegans (X-Hypotranscription): Both X chromosomes in the XX hermaphrodite undergo a 50% down-regulation of transcription via the Dosage Compensation Complex (DCC), matching the output of XO males.\n\n2. The Lyon Hypothesis (Mary Lyon, 1961):\nMary Lyon proposed that:\n- In female mammalian somatic cells, only one X chromosome remains transcriptionally active.\n- The inactive X chromosome condenses into a dense, heterochromatic mass visible against the inner nuclear envelope during interphase, known as the **Barr body**.\n- The number of Barr bodies in any somatic cell equals `Number of X chromosomes - 1`. Normal females (XX) have 1 Barr body; normal males (XY) have 0; Turner syndrome (XO) females have 0; Klinefelter syndrome (XXY) males have 1; Triple-X females (XXX) have 2.\n- Inactivation occurs randomly in early embryonic development (around the blastocyst stage): roughly 50% of cells inactivate the paternal X (Xp) and 50% inactivate the maternal X (Xm).\n- Once inactivated in an embryonic progenitor cell, all mitotic descendants maintain the exact same inactive X, making mammalian females genetic mosaics (e.g., calico and tortoiseshell coat color in female cats).\n\n3. Molecular Mechanics of Xist and Epigenetic Silencing:\n- X-inactivation is governed by the **X-Inactivation Center (XIC)** on the X chromosome.\n- The *XIC* contains the *Xist* (X-inactive specific transcript) gene, which transcribes a 17-kb long non-coding RNA (lncRNA).\n- On the future inactive X (Xi), *Xist* RNA is transcribed and 'paints' (coats) the entire X chromosome in cis.\n- *Xist* RNA recruits chromatin-modifying complexes, specifically Polycomb Repressive Complex 2 (PRC2), which deposits repressive histone marks: trimethylation of histone H3 at lysine 27 (H3K27me3) and deacetylation of histones.\n- Subsequent DNA methylation of promoter CpG islands by DNA methyltransferases (DNMTs) permanently locks the chromosome in an inactive, condensed heterochromatic state throughout somatic cell life.",
      "outlinePoints": [
        "Evolutionary rationale for dosage compensation",
        "Comparative overview: mammalian X-inactivation, Drosophila hypertranscription, C. elegans hypotranscription",
        "Mary Lyon's hypothesis: random embryonic timing, clonal inheritance, Barr body rule (N - 1)",
        "Calico cat coat color as visible phenotypic evidence of cellular mosaicism",
        "Molecular cascade of Xist lncRNA, Polycomb recruitment (H3K27me3), and CpG methylation"
      ]
    },
    {
      "id": "GPB203-U2-SUB13",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "questionText": "Explain two-point test crosses and discuss their limitations in constructing chromosome maps compared to three-point test crosses. Detail the mathematical mapping functions developed by Haldane and Kosambi.",
      "modelAnswer": "A two-point test cross involves crossing an individual heterozygous at two linked loci (*AaBb*) with a homozygous double-recessive tester (*aabb*). While historically vital for establishing linkage pairs, two-point test crosses suffer from fundamental mathematical and practical limitations when constructing genetic maps.\n\n1. Limitations of Two-Point Test Crosses:\n- Inability to Determine Gene Order Directly: A series of pairwise crosses (A-B, B-C, A-C) must be conducted in separate experiments to infer relative gene sequence, requiring substantial time and labor.\n- Underestimation of Physical Distances over Long Intervals:\n  * When two markers are far apart (>10\u201315 cM), multiple crossover events (especially double crossovers) occur between them.\n  * A double crossover involving two strands exchanges alleles twice, effectively restoring the original parental configuration of the outside markers.\n  * In a two-point cross, these double crossovers are scored as non-recombinant parental phenotypes. Consequently, true map distance is severely underestimated.\n- 50% Asymptotic Ceiling: Two syntenic genes separated by 80 cM yield a maximum observable recombination frequency of only 50%, making them appear unlinked.\n\n2. Advantages of Three-Point Test Crosses:\n- Simultaneous determination of gene order from a single cross by identifying the flipped central marker in the double crossover class.\n- Direct detection and quantification of double crossover frequencies, allowing accurate addition of intermediate map intervals without losing crossover events.\n- Measurement of coefficient of coincidence and chromosome interference.\n\n3. Mathematical Mapping Functions:\nTo correct for undetected multiple crossovers over long intervals and convert observed recombination fractions (*r*) into true additive map distances (*d* in Morgans or cM), geneticists developed mapping functions:\n\nA. Haldane's Mapping Function (1919):\nAssumes that crossing over events occur completely at random and independently without any chromosome interference (Interference I = 0, Coincidence C = 1).\nIt applies the Poisson distribution:\n`r = 1/2 * (1 - e^(-2d))`\nSolving for map distance (*d*):\n`d = -1/2 * ln(1 - 2r)`\nAs distance *d* approaches infinity, recombination frequency *r* approaches the theoretical limit of 0.5 (50%).\n\nB. Kosambi's Mapping Function (1944):\nIncorporates the biological reality that interference exists and decreases linearly with distance, such that Coincidence equals twice the recombination fraction (`C = 2r`):\n`r = 1/2 * [(e^(4d) - 1) / (e^(4d) + 1)] = 1/2 * tanh(2d)`\nSolving for map distance (*d*):\n`d = 1/4 * ln[(1 + 2r) / (1 - 2r)]`\nKosambi's function accurately models map distances in most eukaryotic organisms, including plants, Drosophila, and mammals.",
      "outlinePoints": [
        "Definition and protocol of a two-point test cross",
        "Three critical limitations of two-point crosses (masking by double crossovers, underestimation of distance, 50% ceiling)",
        "Comparative advantages of three-point test cross analysis",
        "Haldane's Poisson mapping function (assuming zero interference)",
        "Kosambi's empirical mapping function (accounting for realistic distance-dependent interference)"
      ]
    },
    {
      "id": "GPB203-U2-SUB14",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism",
      "questionText": "Discuss the discovery, structure, cytological significance, and applications of specialized giant chromosomes: Polytene chromosomes in Diptera and Lampbrush chromosomes in amphibian oocytes.",
      "modelAnswer": "Polytene chromosomes and Lampbrush chromosomes represent specialized 'giant' chromosomes whose extraordinary size and structural organization provided early cytogeneticists with direct visual proof of gene activity and chromosome architecture.\n\n1. Polytene Chromosomes (Salivary Gland Chromosomes):\n- Discovery: Discovered by E. G. Balbiani in 1881 in the midge *Chironomus*, and recognized as giant chromosomes in salivary glands of *Drosophila* by Painter, Heitz, and Bauer in 1933.\n- Structure and Formation:\n  * Formed by endoreduplication (endomitosis): repeated cycles of DNA replication without cell division or chromatid separation. Ten rounds of replication yield 2^10 = 1024 parallel DNA strands tightly aligned in register.\n  * Somatic Synapsis: Homologous chromosomes pair closely in somatic cells, doubling the strand count to ~2048.\n  * Banding Pattern: Under light microscopy, they display distinctive alternating dark bands (condensed, gene-rich heterochromatin/euchromatin) and light interbands (less condensed DNA), providing high-resolution physical cytogenetic maps.\n  * Centromeric Chromocenter: Centromeres of all 8 Drosophila chromosomes fuse into a single amorphous heterochromatic mass called the chromocenter.\n- Chromosome Puffs and Balbiani Rings: Localized uncoiling and decondensation of specific bands into visible loops (puffs). These represent active sites of intense RNA transcription (e.g., puffing induced by the steroid hormone ecdysone during metamorphosis).\n- Cytological Significance: Used to map chromosomal aberrations (inversions, deletions, translocations) with single-band precision.\n\n2. Lampbrush Chromosomes:\n- Discovery: Discovered by Walther Flemming in 1882 in amphibian oocytes and described in detail by J. Ruckert in 1892 in shark oocytes.\n- Structure and Formation:\n  * Found during the prolonged diplotene stage of prophase I in primary oocytes of amphibians, birds, and reptiles undergoing vitellogenesis (yolk accumulation).\n  * Consist of two paired homologous chromosomes held together by chiasmata. Each homolog consists of two sister chromatids.\n  * The main chromosome axis is composed of condensed, transcriptionally inactive chromomeres.\n  * From these chromomeres extend prominent, symmetrical lateral loops of transcriptionally active DNA coated with a thick matrix of nascent ribonucleoprotein (RNP).\n  * The resulting structure resembles a cylindrical wire brush historically used to clean glass lamp chimneys (hence 'lampbrush').\n- Biological Function:\n  * Active transcription on the lateral loops synthesizes massive quantities of maternal mRNA, rRNA, and proteins required to sustain early embryonic development prior to zygotic gene activation.\n- Cytological Significance: Provide direct visual confirmation that loops correspond to active transcription units, demonstrating dynamic chromatin remodeling during gametogenesis.",
      "outlinePoints": [
        "Discovery and endoreduplication mechanism of Polytene chromosomes (Balbiani / Painter)",
        "Structural features of polytene chromosomes: somatic pairing, banding, chromocenter, and transcription puffs (Balbiani rings)",
        "Discovery and diplotene oocyte context of Lampbrush chromosomes (Flemming / Ruckert)",
        "Structural features of lampbrush chromosomes: chromomere axis, symmetrical lateral loops, and RNP matrix",
        "Comparative cytogenetic significance in physical gene mapping and visualizing gene expression"
      ]
    },
    {
      "id": "GPB203-U2-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "questionText": "Compare X-linked inheritance with Y-linked (Holandric) inheritance.",
      "modelAnswer": "X-linked and Y-linked inheritance represent two distinct forms of sex-linked heredity determined by the location of genes on the non-homologous segments of the sex chromosomes:\n\n1. Chromosomal Location:\n- X-Linked Inheritance: Genes reside on the differential (non-homologous) segment of the X chromosome, lacking alleles on the Y chromosome.\n- Y-Linked (Holandric) Inheritance: Genes reside exclusively on the differential segment of the Y chromosome, lacking alleles on the X chromosome.\n\n2. Expression Across Biological Sexes:\n- X-Linked: Expressed in both biological sexes. Males are hemizygous (*XAY* or *XaY*) and express the phenotype directly with a single allele. Females can be homozygous dominant (*XAXA*), heterozygous carriers (*XAXa*), or homozygous recessive (*XaXa*).\n- Y-Linked: Expressed strictly in males. Females possess no Y chromosome and can never carry or express the trait under any condition.\n\n3. Pattern of Transmission:\n- X-Linked: Exhibits criss-cross inheritance. An affected father passes his mutant X chromosome to 100% of his daughters (who become carriers or affected), who then transmit it to 50% of their sons. A father never passes an X-linked trait to his sons.\n- Y-Linked: Exhibits direct father-to-son (patroclinous) transmission. An affected male transmits the trait to 100% of his sons and 0% of his daughters across all generations.\n\n4. Representative Examples:\n- X-Linked: Hemophilia A and B, red-green color blindness, Duchenne muscular dystrophy in humans; white eye in *Drosophila*.\n- Y-Linked: *SRY* gene (testis development), hypertrichosis of the ear pinna in human males.",
      "outlinePoints": [
        "Location: non-homologous X vs exclusive Y differential segment",
        "Sex distribution: both sexes (hemizygous males, carriers) vs strictly males",
        "Transmission: criss-cross (father to daughter to grandson) vs patroclinous (father to 100% sons)",
        "Biological examples for each system"
      ]
    },
    {
      "id": "GPB203-U2-SUB16",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models",
      "questionText": "Differentiate between Coupling (Cis-configuration) and Repulsion (Trans-configuration) phases of genetic linkage.",
      "modelAnswer": "Coupling and Repulsion (first described by Bateson and Punnett in 1905 and explained cytologically by Morgan) represent the two alternative spatial arrangements of alleles in a dihybrid individual:\n\n1. Allelic Arrangement on Homologous Chromosomes:\n- Coupling Phase (Cis-configuration): Both dominant alleles are located on one homologous chromosome, and both recessive alleles are located on the other homologous chromosome. Represented as `AB / ab` (or `++ / ab`).\n- Repulsion Phase (Trans-configuration): Each homologous chromosome carries one dominant allele and one recessive allele. Represented as `Ab / aB` (or `+b / a+`).\n\n2. Parental Origin:\n- Coupling: Results from crossing two true-breeding parents where one is homozygous dominant for both traits and the other is homozygous recessive (*AABB* x *aabb*).\n- Repulsion: Results from crossing two true-breeding parents where each carries one dominant and one recessive trait (*AAbb* x *aaBB*).\n\n3. Gametic Output and Test-Cross Progeny:\n- Coupling Phase (*AB/ab* x *ab/ab*):\n  * Parental (Non-crossover) Gametes: *AB* and *ab* (produced in high, equal frequencies, >50% combined).\n  * Recombinant (Crossover) Gametes: *Ab* and *aB* (produced in low, equal frequencies, <50% combined).\n- Repulsion Phase (*Ab/aB* x *ab/ab*):\n  * Parental (Non-crossover) Gametes: *Ab* and *aB* (produced in high, equal frequencies, >50% combined).\n  * Recombinant (Crossover) Gametes: *AB* and *ab* (produced in low, equal frequencies, <50% combined).\n\n4. Recombination Frequency:\nThe recombination frequency (RF) calculated between the two loci is identical in both phases; only the phenotypic identity of the parental versus recombinant progeny classes is reversed.",
      "outlinePoints": [
        "Chromosomal arrangement: AB/ab (cis) vs Ab/aB (trans)",
        "Parental origin crosses (AABB x aabb vs AAbb x aaBB)",
        "Identity of high-frequency parental gametes vs low-frequency recombinant gametes",
        "Invariance of recombination distance regardless of phase"
      ]
    },
    {
      "id": "GPB203-U2-SUB17",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "questionText": "Compare Genetic Linkage Maps with Physical Chromosome Maps.",
      "modelAnswer": "Genetic Linkage Maps and Physical Chromosome Maps represent two distinct approaches to ordering genes and measuring distances along chromosomes:\n\n1. Basis of Construction:\n- Genetic Linkage Map: Constructed based on recombination frequencies observed between gene markers during meiotic crossing over.\n- Physical Chromosome Map: Constructed based on direct physical measurements of DNA sequences (nucleotide base pairs) or cytological structures (cytogenetic banding).\n\n2. Units of Measurement:\n- Genetic Map: Measured in centiMorgans (cM) or map units (m.u.), where 1 cM represents 1% recombination frequency.\n- Physical Map: Measured in base pairs (bp), kilobase pairs (kb), or megabase pairs (Mb) via DNA sequencing, or banded cytogenetic coordinates (e.g., 9q34).\n\n3. Linearity and Spacing Discrepancies:\n- Genetic Map: Distances are non-uniform across the chromosome because crossover frequencies vary widely along chromatin. Crossing over is suppressed in heterochromatin (centromeric and telomeric regions) and elevated in euchromatic recombination 'hotspots'. Thus, two genes far apart physically may appear genetically close.\n- Physical Map: Distances are strictly physical and proportional to actual DNA length, reflecting true physical distance invariant to recombination rates.\n\n4. Alignment of Gene Order:\n- Both maps preserve the exact same collinear linear sequence (order) of genes along the chromosome.\n\n5. Historical vs Modern Utility:\n- Genetic maps remain essential for classical breeding, QTL mapping, and tracking trait introgression, while physical maps guide genome assembly, CRISPR editing, and molecular cloning.",
      "outlinePoints": [
        "Measurement basis: meiotic crossover frequency vs direct DNA sequence length",
        "Units: centiMorgans (cM) vs base pairs (bp/kb/Mb)",
        "Discrepancies in distance due to recombination cold spots (centromeres) and hot spots",
        "Collinear identity of gene order between both maps",
        "Comparative agricultural and molecular breeding applications"
      ]
    },
    {
      "id": "GPB203-U2-SUB18",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence",
      "questionText": "In maize, three linked recessive genes are: v (virescent seedlings), gl (glossy leaves), and va (variable sterile). A trihybrid plant heterozygous for all three genes is test-crossed with a virescent, glossy, variable sterile plant. The progeny phenotypes are: (1) + + + = 235; (2) v gl va = 245; (3) + gl va = 180; (4) v + + = 190; (5) + + va = 60; (6) v gl + = 65; (7) + gl + = 12; (8) v + va = 13. (Total = 1000). (a) Determine the parental genotypes and allele configuration. (b) Determine the correct gene order. (c) Calculate map distances between genes. (d) Calculate coefficient of coincidence and interference.",
      "modelAnswer": "Step-by-Step Analysis of Maize Trihybrid Test Cross:\n\nTotal progeny = 235 + 245 + 180 + 190 + 60 + 65 + 12 + 13 = 1000 plants.\n\n(a) Parental Genotypes and Allelic Configuration:\n- Non-Crossover Parental Classes (Highest Frequencies):\n  * Class 1: `+ + +` = 235\n  * Class 2: `v gl va` = 245\n  Total Parentals = 480.\nThe trihybrid female parent carries all three wild-type alleles on one homologous chromosome and all three recessive mutant alleles on the other (Cis-coupling configuration: `+ + + / v gl va`).\n\n(b) Correct Gene Order:\n- Double Crossover (DCO) Classes (Lowest Frequencies):\n  * Class 7: `+ gl +` = 12\n  * Class 8: `v + va` = 13\n  Total DCOs = 25.\nCompare Parentals (`+ + +` and `v gl va`) with DCOs (`+ gl +` and `v + va`):\n- In DCO Class 7 (`+ gl +`), the `gl` allele is mutant while `v` and `va` remain wild-type (`+`).\n- In DCO Class 8 (`v + va`), the `gl` locus is wild-type (`+`) while `v` and `va` remain mutant.\nBecause the **gl locus flips** relative to the other two, **gl is the middle gene!**\nThe correct physical gene order is: `v - gl - va` (or `va - gl - v`).\n\n(c) Calculate Map Distances:\nRewrite genotypes in correct order: `v - gl - va`\nParentals: `v gl va` (245) and `+ + +` (235)\n\nInterval 1: Between Gene v and Gene gl:\nRecombinant classes between v and gl:\n- SCO Region I: Classes 3 (`+ gl va` = 180) and 4 (`v + +` = 190) -> Total = 370.\n- DCOs: Classes 7 (`+ gl +` = 12) and 8 (`v + va` = 13) -> Total = 25.\nTotal Recombinants (v-gl) = 370 + 25 = 395.\nMap Distance (v - gl) = (395 / 1000) x 100 = **39.5 cM**.\n\nInterval 2: Between Gene gl and Gene va:\nRecombinant classes between gl and va:\n- SCO Region II: Classes 5 (`+ + va` = 60) and 6 (`v gl +` = 65) -> Total = 125.\n- DCOs: Classes 7 (12) + 8 (13) = 25.\nTotal Recombinants (gl-va) = 125 + 25 = 150.\nMap Distance (gl - va) = (150 / 1000) x 100 = **15.0 cM**.\n\nConstructed Linkage Map:\n`v ------------------- (39.5 cM) ------------------- gl ---------- (15.0 cM) ---------- va`\nTotal distance between v and va = 39.5 + 15.0 = **54.5 cM**.\n\n(d) Coefficient of Coincidence (C) and Interference (I):\n- Observed DCO Frequency = 25 / 1000 = 0.025 (2.5%)\n- Expected DCO Frequency = RF(v-gl) x RF(gl-va) = 0.395 x 0.150 = 0.05925 (5.925%)\n- Coefficient of Coincidence (C) = Observed / Expected = 0.025 / 0.05925 = **0.422**\n- Chromosome Interference (I) = 1 - C = 1 - 0.422 = **0.578 (or 57.8% Positive Interference)**.\nConclusion: A crossover event between *v* and *gl* reduced the occurrence of a simultaneous crossover between *gl* and *va* by 57.8%.",
      "outlinePoints": [
        "Identification of Parental classes (480) and DCO classes (25)",
        "Determination of gene order by showing gl flips relative to outside markers (v - gl - va)",
        "Map distance calculation for Region I (v-gl = 39.5 cM)",
        "Map distance calculation for Region II (gl-va = 15.0 cM)",
        "Calculation of C = 0.422 and positive interference I = 0.578 (57.8%)"
      ]
    },
    {
      "id": "GPB203-U2-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "questionText": "In poultry breeding, sexing day-old chicks is economically vital for commercial egg producers. Explain how sex-linked genes (such as silver vs gold plumage, or slow vs rapid feathering) are utilized as commercial auto-sexing systems. Provide cross schematics and explain why the direction of the cross is critical.",
      "modelAnswer": "Commercial egg production requires early, accurate separation of male and female day-old chicks (sexing) so female layer chicks can be reared and male chicks eliminated without incurring expensive brooding costs. Manual vent sexing is labor-intensive and requires skilled technicians. Poultry geneticists exploit the **ZZ-ZW sex determination system** and sex-linked genes to create commercial **auto-sexing crosses** where chicks are visually identifiable by sex immediately upon hatching.\n\n1. Biological Principle in Poultry:\nIn poultry, roosters are homogametic (*ZZ*) and hens are heterogametic (*ZW*).\nBecause the female passes her single Z chromosome exclusively to her sons and her W chromosome to her daughters, an X/Z-linked recessive cross produces **criss-cross inheritance**:\n- Sons inherit the dominant allele from their mother.\n- Daughters inherit the recessive allele from their father.\n\n2. Silver (S) vs Gold (s) Plumage Auto-Sexing:\nThe gene for feather plumage color is Z-linked:\n- *S* (Silver/White down, dominant)\n- *s* (Gold/Brown down, recessive)\n\nCross Protocol:\n- Father (Rooster): Homozygous Gold (*s s*) \u2014 e.g., Rhode Island Red male.\n- Mother (Hen): Silver (*S W*) \u2014 e.g., Light Sussex or White Wyandotte female.\n\nProgeny at Hatching:\n- Male Chicks (*ZZ*): Receive *S* from mother and *s* from father (`S s`). They exhibit **Silver/White down** with creamy color.\n- Female Chicks (*ZW*): Receive *s* from father and *W* from mother (`s W`). They exhibit **Gold/Buff/Brown down**.\n\nDay-Old Identification:\nWorkers sort chicks at 100% accuracy based purely on down color at hatching: all brown/buff chicks are females (saved as layers); all white/creamy chicks are males.\n\n3. Rapid Feathering (k) vs Slow Feathering (K):\nAnother commercial system uses the Z-linked feather growth gene:\n- *K* (Slow feathering, dominant)\n- *k* (Rapid feathering, recessive)\n\nCross Protocol:\n- Rapid feathering male (*k k*) x Slow feathering female (*K W*).\n- Male chicks (*K k*): Primary wing feathers are the same length or shorter than coverts at day 1 (Slow).\n- Female chicks (*k W*): Primary wing feathers are visibly longer than coverts at day 1 (Rapid).\n\n4. Why the Direction of the Cross is Absolute and Non-Reversible:\nIf the reciprocal cross is performed (Homozygous Silver male *S S* x Gold female *s W*):\n- Sons: *S s* (Silver down).\n- Daughters: *S W* (Silver down).\nAll male and female chicks are completely identical silver down chicks! The cross fails entirely to produce auto-sexing. Thus, the male parent MUST be homozygous recessive and the female parent MUST carry the dominant allele.",
      "outlinePoints": [
        "Economic rationale for day-old chick sexing in commercial egg production",
        "ZZ-ZW heterogamety dynamics enabling criss-cross inheritance in poultry",
        "Detailed Silver (S) vs Gold (s) cross schematic (Rhode Island Red x Light Sussex)",
        "Detailed Slow (K) vs Rapid (k) wing feathering auto-sexing system",
        "Explanation of why reciprocal cross fails (all progeny uniform silver)"
      ]
    },
    {
      "id": "GPB203-U2-SUB20",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns",
      "contextScenario": "A female domestic cat exhibits a rare calico coat pattern characterized by patches of orange and black fur interspersed with white areas. She gives birth to a litter of kittens consisting of two calico females, one orange female, one black male, and one orange male. In an extremely rare veterinary case, a male kitten with a distinct calico coat pattern is presented to the clinic. Cytogenetic karyotyping of the male calico kitten reveals 39 chromosomes instead of the normal feline diploid number 2n = 38.",
      "questionText": "Analyze the case study above. (a) Explain the genetic and cellular mechanism of the calico phenotype in female cats, citing Mary Lyon's hypothesis. (b) Derive the genotypes of the parents that produced the litter described. (c) Explain the cytogenetic abnormality in the male calico kitten, identify the human syndrome it parallels, and explain why male calico cats are almost universally sterile.",
      "modelAnswer": "Case Study Analysis \u2014 Feline Coat Color, Lyonization, and Aneuploidy:\n\n(a) Genetic and Cellular Mechanism of the Calico Phenotype:\nIn domestic cats (*Felis catus*), the gene for orange fur is X-linked:\n- *XO* (Orange allele, produces phaeomelanin)\n- *Xo* (Non-orange/Black allele, produces eumelanin)\nThe white patches are controlled by an independent autosomal gene for piebald spotting (*S*).\n\nCellular Lyonization (Mary Lyon's Hypothesis):\nIn female cats (*XOXo*), dosage compensation occurs via random X-chromosome inactivation during early blastocyst development.\n- In embryonic cells where the *Xo* chromosome is inactivated, the active *XO* chromosome directs the synthesis of orange fur in all mitotic descendant cells, forming an orange clone/patch.\n- In embryonic cells where the *XO* chromosome is inactivated, the active *Xo* chromosome directs black fur synthesis, forming a black patch.\nConsequently, female cats heterozygous for the X-linked color gene are somatic mosaics, displaying the classic calico/tortoiseshell phenotype. Normal males are hemizygous (*XOY* orange or *XoY* black) and cannot be calico.\n\n(b) Derivation of Parental Genotypes:\nThe mother is Calico: Genotype *XOXo*.\nLitter kittens produced:\n- Calico females (*XOXo*)\n- Orange female (*XOXO*)\n- Black male (*XoY*)\n- Orange male (*XOY*)\n\nDeduction of Father's Genotype:\n- The orange female kitten (*XOXO*) must receive an *XO* allele from her mother AND an *XO* allele from her father.\n- A father transmits his single X chromosome to all daughters. Since he contributed *XO* to the orange daughter (and *XO* to one calico daughter), the father must carry the *XO* allele.\n- Therefore, the father was an **Orange male (Genotype XOY)**.\nVerification: Cross *XOXo* (Mother) x *XOY* (Father):\n- Female kittens: 1/2 *XOXO* (Orange), 1/2 *XOXo* (Calico). Matches observed!\n- Male kittens: 1/2 *XOY* (Orange), 1/2 *XoY* (Black). Matches observed!\n\n(c) Cytogenetic Abnormality in the Male Calico Kitten:\n- Normal feline karyotype is 2n = 38 (18 pairs of autosomes + XX or XY).\n- The calico male possesses 39 chromosomes (2n + 1 = 39), having the sex chromosome aneuploidy **XXY (38,XXY)**.\n- He possesses both *XO* and *Xo* alleles (*XOXoY*), which arose from meiotic non-disjunction of sex chromosomes in either the maternal or paternal germline.\n- Having two X chromosomes allows random X-inactivation to operate in his male somatic cells, producing the calico mosaic fur pattern.\n- Human Parallel: This chromosomal condition directly parallels **Klinefelter syndrome in humans (47,XXY)**.\n- Cause of Infertility: The presence of two X chromosomes disrupts normal testicular development. In XXY males, meiotic pairing between the two X chromosomes and the single Y chromosome is defective, triggering widespread apoptosis of germ cells during prophase I, leading to complete aspermatogenesis (absence of sperm) and testicular hypoplasia, rendering calico males sterile.",
      "outlinePoints": [
        "X-linked orange (XO) vs black (Xo) alleles and Lyonization creating female somatic mosaicism",
        "Deduction of father's genotype: must be Orange male (XOY) to produce orange female (XOXO)",
        "Verification of all 4 litter kitten classes using Punnett square",
        "Diagnosis of 39,XXY karyotype resulting from meiotic non-disjunction",
        "Direct comparison with human Klinefelter syndrome (47,XXY) and explanation of germ cell apoptosis causing sterility"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "GPB203-U2-FC01",
      "front": "What is the Chromosome Theory of Heredity?",
      "back": "The theory formulated by Sutton and Boveri (1902) stating that Mendelian genes reside at specific loci on chromosomes and segregate during meiosis.",
      "hint": "Parallelism between genes and meiotic chromosomes.",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism"
    },
    {
      "id": "GPB203-U2-FC02",
      "front": "What organism did T. H. Morgan use to prove the chromosome theory of heredity?",
      "back": "Drosophila melanogaster (common fruit fly).",
      "hint": "Discovered the white eye sex-linked mutation in 1910.",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism"
    },
    {
      "id": "GPB203-U2-FC03",
      "front": "What is the ZZ-ZW sex determination system?",
      "back": "A system where males are homogametic (ZZ) and females are heterogametic (ZW), found in birds, reptiles, and butterflies.",
      "hint": "Females produce two types of eggs.",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)"
    },
    {
      "id": "GPB203-U2-FC04",
      "front": "What is Calvin Bridges' Genic Balance Theory of sex determination in Drosophila?",
      "back": "Sex is determined by the ratio of X chromosomes to sets of autosomes (X:A ratio). X:A = 1.0 is female, X:A = 0.5 is male.",
      "hint": "Y chromosome determines male fertility, not somatic sex.",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)"
    },
    {
      "id": "GPB203-U2-FC05",
      "front": "What is Haplodiploidy?",
      "back": "Sex determination in bees/ants where diploid females develop from fertilized eggs (2n) and haploid males (drones) develop from unfertilized eggs (n).",
      "hint": "Arrhenotokous parthenogenesis.",
      "syllabusTopic": "Mechanisms of sex determination in plants and animals (XX-XY, ZW-ZZ, Genic Balance)"
    },
    {
      "id": "GPB203-U2-FC06",
      "front": "What is Criss-Cross Inheritance?",
      "back": "Transmission of an X-linked recessive trait from an affected father through his carrier daughter to his grandson.",
      "hint": "Father -> Daughter -> Grandson.",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns"
    },
    {
      "id": "GPB203-U2-FC07",
      "front": "What are Holandric Genes?",
      "back": "Genes located on the non-homologous differential segment of the Y chromosome, transmitted strictly from father to son.",
      "hint": "Example: SRY gene, hypertrichosis of ear pinna.",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns"
    },
    {
      "id": "GPB203-U2-FC08",
      "front": "What is a Sex-Influenced Trait?",
      "back": "An autosomal trait whose dominance relationship is reversed between sexes by sex hormones (e.g., pattern baldness in humans, horns in sheep).",
      "hint": "Dominant in males, recessive in females.",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns"
    },
    {
      "id": "GPB203-U2-FC09",
      "front": "What is a Sex-Limited Trait?",
      "back": "An autosomal trait whose phenotypic expression is strictly restricted to one sex (e.g., milk yield in cows, cock-feathering in roosters).",
      "hint": "Zero penetrance in the opposite sex.",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns"
    },
    {
      "id": "GPB203-U2-FC10",
      "front": "What is Mary Lyon's Hypothesis of X-Inactivation?",
      "back": "In mammalian female somatic cells, one of the two X chromosomes is randomly inactivated early in development, forming a Barr body.",
      "hint": "Provides dosage compensation; Barr bodies = X chromosomes - 1.",
      "syllabusTopic": "Sex-linked, sex-influenced, and sex-limited inheritance patterns"
    },
    {
      "id": "GPB203-U2-FC11",
      "front": "What is Genetic Linkage?",
      "back": "The tendency of two or more genes located on the same chromosome to be inherited together during meiosis into gametes.",
      "hint": "Violates Mendel's Law of Independent Assortment.",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models"
    },
    {
      "id": "GPB203-U2-FC12",
      "front": "What is the difference between Coupling and Repulsion phases of linkage?",
      "back": "Coupling (Cis) has both dominant alleles on one homolog (AB/ab); Repulsion (Trans) has one dominant and one recessive on each homolog (Ab/aB).",
      "hint": "Identified by Bateson and Punnett in sweet pea.",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models"
    },
    {
      "id": "GPB203-U2-FC13",
      "front": "Why is meiotic crossing over absent in male Drosophila?",
      "back": "Male Drosophila exhibit complete linkage (achiasmatic meiosis); no synaptonemal complexes or chiasmata form during spermatogenesis.",
      "hint": "Yields 100% parental gametes.",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models"
    },
    {
      "id": "GPB203-U2-FC14",
      "front": "What was the cytological proof of crossing over by Creighton and McClintock?",
      "back": "Demonstrated that genetic recombination in maize Chromosome 9 correlates with physical exchange of terminal knob and translocated segment.",
      "hint": "Conducted in 1931 using Zea mays.",
      "syllabusTopic": "Linkage and crossing over: types, cytological basis, and molecular models"
    },
    {
      "id": "GPB203-U2-FC15",
      "front": "What is a centiMorgan (cM)?",
      "back": "A unit of genetic map distance equal to 1% meiotic recombination frequency (named after T. H. Morgan).",
      "hint": "Also known as 1 map unit (m.u.).",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence"
    },
    {
      "id": "GPB203-U2-FC16",
      "front": "Who constructed the world's first chromosome linkage map?",
      "back": "Alfred Henry Sturtevant in 1913, mapping six sex-linked genes on the Drosophila X chromosome.",
      "hint": "Undergraduate student working in Morgan's Fly Room.",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence"
    },
    {
      "id": "GPB203-U2-FC17",
      "front": "How is the middle gene determined in a three-point test cross?",
      "back": "By comparing the Parental class (most frequent) with the Double Crossover class (least frequent); the gene that flips is in the middle.",
      "hint": "Double crossover alters only the central marker.",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence"
    },
    {
      "id": "GPB203-U2-FC18",
      "front": "What is the formula for the Coefficient of Coincidence (C)?",
      "back": "C = Observed Double Crossover Frequency / Expected Double Crossover Frequency.",
      "hint": "Expected DCO = RF(Region I) x RF(Region II).",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence"
    },
    {
      "id": "GPB203-U2-FC19",
      "front": "What is Chromosome Interference (I)?",
      "back": "The phenomenon where a crossover in one interval suppresses crossing over nearby. Calculated as I = 1 - C (Coefficient of Coincidence).",
      "hint": "Positive interference means observed DCOs are fewer than expected.",
      "syllabusTopic": "Chromosome mapping: two-point and three-point test crosses, recombination frequency, interference and coincidence"
    },
    {
      "id": "GPB203-U2-FC20",
      "front": "What are Polytene Chromosomes?",
      "back": "Giant multistranded chromosomes formed by repeated endoreduplication without cell division, found in Dipteran larval salivary glands.",
      "hint": "Discovered by Balbiani; display active transcription puffs.",
      "syllabusTopic": "Chromosome theory of heredity and cytological parallelism"
    }
  ]
};
