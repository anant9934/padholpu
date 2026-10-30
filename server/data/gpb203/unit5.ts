import { UnitContent } from "./types";

export const unit5Content: UnitContent = {
  "unitNumber": 5,
  "title": "Extrachromosomal Inheritance and Molecular Genetics",
  "shortDescription": "Cytoplasmic inheritance, organellar genetics (mitochondria and chloroplasts), Cytoplasmic Male Sterility (CMS) in crops, experimental proof of DNA as genetic material, Watson-Crick double helix, semi-conservative DNA replication, the universal genetic code, transcription, and translation.",
  "estimatedReadTimeMinutes": 25,
  "syllabusTopics": [
    "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
    "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
    "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
    "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
    "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
    "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
  ],
  "notes": {
    "learningObjectives": [
      "Distinguish between maternal effects (nuclear-encoded preformed substances, e.g., Limnaea shell coiling) and true cytoplasmic organellar inheritance.",
      "Explain chloroplast inheritance in Mirabilis jalapa leaf variegation (Carl Correns) and mitochondrial genetics in Saccharomyces cerevisiae (Ephrussi petite mutants).",
      "Evaluate Cytoplasmic Male Sterility (CMS) and the three-line breeding system (A, B, and R lines) for commercial hybrid seed production in pearl millet, rice, and sorghum.",
      "Critically analyze the historical experiments proving DNA as the transforming principle and hereditary material (Griffith's transformation, Avery-MacLeod-McCarty enzymatic degradation, Hershey-Chase bacteriophage T2 blender experiment).",
      "Describe the stereochemical features of the B-DNA double helix (Watson, Crick, and Franklin) and the semi-conservative replication mechanism proved by Meselson and Stahl.",
      "Deconstruct the universal triplet genetic code, characteristics (degeneracy, non-overlapping, wobble hypothesis), and the molecular mechanics of transcription and translation."
    ],
    "sections": [
      {
        "id": "sec-gpb-5-1",
        "heading": "1. Extranuclear Inheritance and Maternal Effects",
        "content": "While the overwhelming majority of phenotypic traits are governed by nuclear Mendelian genes, certain hereditary characteristics are transmitted through non-nuclear self-replicating genetic elements located in the cytoplasm (organellar genomes of chloroplasts and mitochondria).",
        "subsections": [
          {
            "subheading": "Diagnostic Criteria for Extranuclear Inheritance",
            "content": "Four definitive criteria distinguish extranuclear (cytoplasmic) inheritance from Mendelian nuclear heredity:\n1. **Disparity in Reciprocal Crosses:** Reciprocal crosses yield completely different phenotypic results in F1. Progeny invariably resemble the female parent (uniparental maternal inheritance) because the egg cell contributes virtually all cytoplasm, whereas the male sperm contributes only a naked nucleus.\n2. **Failure to Segregate in Mendelian Proportions:** Offspring do not exhibit classical Mendelian ratios (3:1, 9:3:3:1) in F2 or backcrosses.\n3. **Maternal Transmission across Successive Backcrosses:** When female progeny are repeatedly backcrossed to the recurrent male parent, the maternal trait persists indefinitely without dilution.\n4. **Non-Mapping to Nuclear Linkage Groups:** Traits cannot be mapped to any known nuclear chromosome."
          },
          {
            "subheading": "Maternal Effects vs True Cytoplasmic Inheritance",
            "content": "A crucial distinction must be drawn between true cytoplasmic inheritance (organellar DNA) and **Maternal Effects** (predetermination by the maternal nuclear genotype). In maternal effects (e.g., shell coiling in the freshwater snail *Limnaea peregra*, studied by Boycott and Diver):\n- The phenotype of the offspring is determined exclusively by the nuclear genotype of the mother (*not* the mother's own phenotype, nor the offspring's own genotype).\n- Dextral coiling (*D*) is dominant to sinistral coiling (*d*). A sinistral female of genotype *Dd* produces 100% dextral offspring because the maternal *D* allele directs the cleavage orientation of the spindle fibers in the oocyte cytoplasm prior to fertilization."
          }
        ]
      },
      {
        "id": "sec-gpb-5-2",
        "heading": "2. Chloroplast and Mitochondrial Genetics",
        "content": "Chloroplasts (cpDNA / plastome) and mitochondria (mtDNA / chondriome) possess autonomous, circular, double-stranded, histone-free DNA genomes encoding rRNAs, tRNAs, and key photosynthetic or respiratory polypeptides, consistent with the Endosymbiotic Theory (Lynn Margulis).",
        "subsections": [
          {
            "subheading": "Chloroplast Inheritance in Mirabilis jalapa (Carl Correns, 1909)",
            "content": "Carl Correns discovered the first case of cytoplasmic inheritance in the Four o'clock plant (*Mirabilis jalapa*) exhibiting variegated (green, pale white, and variegated) branches:\n- Seeds collected from a green branch crossed with pollen from any branch produce 100% green progeny.\n- Seeds collected from a pale white branch crossed with any pollen produce 100% white progeny (which die as seedlings due to lack of chlorophyll).\n- Seeds collected from a variegated branch yield green, white, and variegated seedlings in random proportions regardless of pollen source.\n- Mechanism: Maternal plastids (chloroplasts) are randomly distributed into egg cells during cytokinesis (replicative segregation / heteroplasmy)."
          },
          {
            "subheading": "Mitochondrial Genetics: Petite Mutants in Yeast (Boris Ephrussi)",
            "content": "In baker's yeast (*Saccharomyces cerevisiae*), Ephrussi identified slow-growing mutant colonies lacking cytochrome oxidase and functional electron transport chains:\n- **Nuclear (Segregational) Petites:** Caused by recessive mutations in nuclear genes; cross with wild-type yields normal 1:1 Mendelian tetrad segregation.\n- **Neutral (Cytoplasmic) Petites (rho-zero):** Caused by complete deletion of mitochondrial DNA. Crossing with wild-type produces 100% normal respiratory progeny across all meiotic ascospores.\n- **Suppressive Petites (rho-minus):** Caused by mutant mtDNA with large deletions that replicate faster than wild-type mtDNA, suppressing wild-type mitochondria and producing predominantly petite progeny."
          }
        ]
      },
      {
        "id": "sec-gpb-5-3",
        "heading": "3. Cytoplasmic Male Sterility (CMS) in Plant Breeding",
        "content": "Cytoplasmic Male Sterility (CMS) is a condition where a plant cannot produce functional pollen while female fertility remains completely normal. It is governed by chimeric, aberrant mitochondrial genes (e.g., *urf13* in T-cytoplasm maize causing susceptibility to *Bipolaris maydis* southern corn leaf blight).",
        "subsections": [
          {
            "subheading": "The Three-Line Hybrid Seed Production System (CGMS)",
            "content": "Commercial hybrid seed production in pearl millet, sorghum, and hybrid rice relies on the Cytoplasmic-Genetic Male Sterility (CGMS) system involving three parental breeding lines:\n1. **A-Line (Male Sterile Line):** Carries sterile cytoplasm (*S*) and recessive nuclear maintainer alleles (*rf rf*). Phenotypically male sterile (*S rf rf*). Used as the female seed parent.\n2. **B-Line (Maintainer Line):** Carries normal fertile cytoplasm (*N*) and identical recessive nuclear alleles (*rf rf*). Phenotypically male fertile (*N rf rf*). When crossed with the A-line (`S rf rf x N rf rf`), all progeny remain male sterile (`S rf rf`), maintaining and multiplying the A-line.\n3. **R-Line (Restorer Line):** Carries dominant nuclear fertility restorer genes (*Rf Rf*) regardless of cytoplasm (`N Rf Rf` or `S Rf Rf`). When crossed with the A-line (`S rf rf x N Rf Rf`), the resulting F1 commercial hybrid is heterozygous (`S Rf rf`), completely restoring male fertility in the farmer's grain crop."
          }
        ]
      },
      {
        "id": "sec-gpb-5-4",
        "heading": "4. Identification of DNA as Genetic Material",
        "content": "Three historic experiments decisively proved that deoxyribonucleic acid (DNA), rather than protein, is the universal physical carrier of genetic information.",
        "subsections": [
          {
            "subheading": "Milestone Experiments in Molecular Biology",
            "content": "Chronological progression of discoveries:",
            "table": {
              "headers": [
                "Experiment",
                "Investigators / Year",
                "System Used",
                "Key Findings & Biochemical Proof"
              ],
              "rows": [
                [
                  "Bacterial Transformation",
                  "Frederick Griffith (1928)",
                  "*Streptococcus pneumoniae* (Type II-R non-virulent rough vs Type III-S virulent smooth)",
                  "Heat-killed S virulent cells incubated with living R avirulent cells caused R cells to transform into living S encapsulated virulent cells, killing mice. Proved existence of a heat-stable 'Transforming Principle'."
                ],
                [
                  "Identification of Transforming Principle",
                  "Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944)",
                  "*Streptococcus pneumoniae* in vitro extracts",
                  "Purified transforming principle was treated with Protease (no effect), RNase (no effect), but **DNase (Deoxyribonuclease) completely abolished transforming activity**. Proved DNA is the transforming principle."
                ],
                [
                  "Bacteriophage Blender Experiment",
                  "Alfred Hershey and Martha Chase (1952)",
                  "Bacteriophage T2 and *Escherichia coli*",
                  "Selectively labeled phage proteins with radioactive Sulfur-35 (35S) and phage DNA with Phosphorus-32 (32P). After infection and agitation in a Waring blender, 32P entered the bacterial pellet while 35S remained in the supernatant. Proved viral DNA enters host cells to direct replication."
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-gpb-5-5",
        "heading": "5. Watson-Crick DNA Architecture, Replication, and Central Dogma",
        "content": "In 1953, James Watson and Francis Crick, utilizing Rosalind Franklin and Maurice Wilkins' X-ray diffraction fiber data and Erwin Chargaff's base-equivalence rules, proposed the **B-DNA double-helix model**.",
        "subsections": [
          {
            "subheading": "Key Structural Features of the B-DNA Double Helix",
            "content": "1. Two antiparallel polynucleotide chains coiled around a central axis in a right-handed helix (one strand runs 5'->3', the other 3'->5').\n2. Hydrophilic sugar-phosphate backbones face outward, while hydrophobic nitrogenous bases face inward, stacked perpendicular to the helical axis (3.4 \u00c5 separation between base pairs).\n3. Complementary base pairing governed by hydrogen bonds: Adenine pairs with Thymine via two hydrogen bonds (*A = T*); Guanine pairs with Cytosine via three hydrogen bonds (*G === C*). Consistent with Chargaff's Rule: `A + G = T + C` and `A/T = 1.0, G/C = 1.0`.\n4. One complete helical turn measures 34 \u00c5 (3.4 nm) and contains 10.5 base pairs, with a helical diameter of 20 \u00c5 (2.0 nm).\n5. Major groove (22 \u00c5 wide) and minor groove (12 \u00c5 wide) facilitate sequence-specific binding of regulatory proteins."
          },
          {
            "subheading": "Meselson-Stahl Experiment (1958) on Semi-Conservative Replication",
            "content": "Matthew Meselson and Franklin Stahl grew *E. coli* in heavy nitrogen (15NH4Cl) for generations, then switched cells to light nitrogen (14N). Using isopycnic CsCl density gradient equilibrium centrifugation:\n- Generation 0: 100% Heavy DNA (15N-15N band).\n- Generation 1: 100% Hybrid intermediate DNA (15N-14N band), disproving the conservative replication model.\n- Generation 2: 50% Hybrid DNA (15N-14N) and 50% Light DNA (14N-14N), disproving the dispersive replication model and conclusively proving **Semi-Conservative DNA Replication**."
          },
          {
            "subheading": "The Genetic Code and Central Dogma",
            "content": "The genetic code connects mRNA nucleotide sequences to polypeptide amino acid sequences:\n- **Triplet Codon:** 3 nucleotides specify 1 amino acid (64 codons: 61 sense codons + 3 stop codons: UAA, UAG, UGA).\n- **Universal, Degenerate, Non-Overlapping, and Commaless:** Most amino acids are specified by multiple synonymous codons (e.g., Leucine and Arginine have 6 codons).\n- **Wobble Hypothesis (Francis Crick, 1966):** Base pairing at the third (3') position of the mRNA codon and 5' position of the tRNA anticodon is flexible, allowing a single tRNA carrying inosine (I) to recognize multiple codons (U, C, A).\n- **Transcription:** Synthesis of pre-mRNA from DNA template strand by RNA Polymerase (pioneered by sigma factor in prokaryotes; RNA Pol II in eukaryotes), followed by 5' capping, splicing, and 3' polyadenylation.\n- **Translation:** Ribosome-mediated polypeptide synthesis in three phases: Initiation (GTP-dependent binding of Met-tRNA to AUG at P-site), Elongation (EF-Tu peptide bond formation at A-site by peptidyl transferase), and Termination (Release factors RF1/RF2 recognizing stop codons)."
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Extranuclear inheritance shows maternal transmission, reciprocal cross disparity, and non-Mendelian ratios.",
      "Limnaea shell coiling demonstrates maternal effect driven by maternal nuclear genotype, not cytoplasmic genes.",
      "CMS and the 3-line breeding system (A, B, R lines) enable commercial hybrid seed production in crops.",
      "Griffith, Avery-MacLeod-McCarty, and Hershey-Chase provided unequivocal proof that DNA is the genetic material.",
      "Watson-Crick B-DNA is an antiparallel right-handed double helix stabilized by A=T and G===C base pairing.",
      "Meselson-Stahl 15N/14N experiment proved semi-conservative DNA replication.",
      "The triplet genetic code is degenerate, universal, non-overlapping, and modulated by Crick's wobble pairing."
    ],
    "commonMisunderstandings": [
      {
        "myth": "All traits that are transmitted through the mother are examples of cytoplasmic organellar inheritance.",
        "reality": "Maternal effects (e.g., shell coiling in Limnaea) are directed by nuclear genes acting in the maternal ovary during oogenesis, not by organellar DNA."
      },
      {
        "myth": "The genetic code is ambiguous because multiple codons can code for the same amino acid.",
        "reality": "The code is degenerate (redundant), but never ambiguous: each specific codon codes for one and only one amino acid."
      }
    ],
    "summary": "Unit 5 explores extrachromosomal inheritance and molecular genetics. It differentiates true organellar inheritance (chloroplast and mitochondrial DNA) from maternal effects, illustrating chloroplast leaf variegation in Mirabilis, yeast petites, and the pivotal agricultural role of Cytoplasmic-Genetic Male Sterility (CGMS) in hybrid seed production. It reviews landmark experiments proving DNA as genetic material, details the structural geometry of the Watson-Crick B-DNA helix, explains semi-conservative replication, and deconstructs the central dogma from transcription through genetic code decoding to ribosomal translation."
  },
  "mcqs": [
    {
      "id": "GPB203-U5-MCQ01",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Easy",
      "questionText": "What is the most characteristic diagnostic feature of cytoplasmic (extranuclear) inheritance in reciprocal crosses?",
      "options": {
        "A": "Identical 3:1 ratio in both crosses",
        "B": "Striking disparity between reciprocal crosses, with progeny always resembling the female parent",
        "C": "Strict patroclinous inheritance",
        "D": "9:3:3:1 segregation"
      },
      "correctOption": "B",
      "explanation": "Because egg cells contribute virtually all cytoplasm and organellar DNA while sperm contributes only a naked nucleus, progeny exhibit maternal inheritance."
    },
    {
      "id": "GPB203-U5-MCQ02",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Easy",
      "questionText": "In shell coiling of the freshwater snail Limnaea peregra, which coiling direction is dominant?",
      "options": {
        "A": "Sinistral (left-handed)",
        "B": "Dextral (right-handed)",
        "C": "Planispiral",
        "D": "Uncoiled"
      },
      "correctOption": "B",
      "explanation": "Dextral coiling (governed by dominant nuclear allele D) is dominant over sinistral coiling (d)."
    },
    {
      "id": "GPB203-U5-MCQ03",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Easy",
      "questionText": "Shell coiling in Limnaea peregra is a classic demonstration of:",
      "options": {
        "A": "Chloroplast inheritance",
        "B": "Maternal effect (predetermination by maternal nuclear genotype)",
        "C": "Mitochondrial gene mutation",
        "D": "Sex-linked inheritance"
      },
      "correctOption": "B",
      "explanation": "Limnaea shell coiling is determined by the nuclear genotype of the mother directing spindle orientation during early embryonic cleavage."
    },
    {
      "id": "GPB203-U5-MCQ04",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Medium",
      "questionText": "A female snail of genotype Dd (dextral) is crossed with a sinistral male (dd). What phenotype will the progeny exhibit?",
      "options": {
        "A": "50% Dextral, 50% Sinistral",
        "B": "100% Dextral",
        "C": "100% Sinistral",
        "D": "75% Dextral, 25% Sinistral"
      },
      "correctOption": "B",
      "explanation": "Because the mother's nuclear genotype is Dd (carrying the dominant D allele), 100% of her offspring will exhibit dextral shell coiling."
    },
    {
      "id": "GPB203-U5-MCQ05",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Medium",
      "questionText": "Why do organellar traits (mitochondrial and chloroplast) fail to show classical Mendelian segregation ratios in F2?",
      "options": {
        "A": "Because organellar genomes do not contain nucleotides",
        "B": "Because organelles undergo non-Mendelian random vegetative segregation (heteroplasmy) during cytokinesis without a mitotic spindle",
        "C": "Because organelles are destroyed by nucleases",
        "D": "Because organelles lack ribosomes"
      },
      "correctOption": "B",
      "explanation": "Cytoplasmic organelles divide and partition stochastically into daughter cells during cell division without meiotic spindle mechanics."
    },
    {
      "id": "GPB203-U5-MCQ06",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Medium",
      "questionText": "Kappa particles in Paramecium aurelia conferring killer trait are an example of:",
      "options": {
        "A": "Nuclear gene interaction",
        "B": "Cytoplasmic inheritance (endosymbiotic bacteria Caedibacter taeniospiralis)",
        "C": "Maternal effect",
        "D": "Translocation"
      },
      "correctOption": "B",
      "explanation": "Kappa particles are endosymbiotic cytoplasmic bacteria that produce paramecin toxins, maintained only in the presence of dominant nuclear K genes."
    },
    {
      "id": "GPB203-U5-MCQ07",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Medium",
      "questionText": "Iojap inheritance in maize (Zea mays) is unique because:",
      "options": {
        "A": "It is strictly governed by mitochondrial genes",
        "B": "A recessive nuclear gene (ij/ij) permanently induces irreversible mutations in chloroplast DNA, creating striped leaves",
        "C": "It is caused by a virulent virus",
        "D": "It does not inherit through seeds"
      },
      "correctOption": "B",
      "explanation": "Marcus Rhoades proved that the nuclear recessive gene ij induces permanent, maternally inherited chloroplast mutations producing green-white striping."
    },
    {
      "id": "GPB203-U5-MCQ08",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Hard",
      "questionText": "A sinistral female snail of genotype dd is crossed with a homozygous dextral male (DD). What are the phenotypes of the F1 and F2 generations?",
      "options": {
        "A": "F1 all dextral, F2 all sinistral",
        "B": "F1 all sinistral, F2 all dextral",
        "C": "F1 all dextral, F2 3 dextral : 1 sinistral",
        "D": "F1 all sinistral, F2 1:1"
      },
      "correctOption": "B",
      "explanation": "F1 mother is dd -> F1 progeny are 100% sinistral (genotype Dd). When F1 females (Dd) reproduce, their progeny (F2) are 100% dextral!"
    },
    {
      "id": "GPB203-U5-MCQ09",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Hard",
      "questionText": "In maternal effect, when an F1 individual of genotype Dd self-fertilizes, what phenotypic segregation is observed in the F3 generation?",
      "options": {
        "A": "3 Dextral : 1 Sinistral",
        "B": "100% Dextral",
        "C": "3 Dextral families : 1 Sinistral family",
        "D": "1:2:1"
      },
      "correctOption": "C",
      "explanation": "F2 genotypes are 1 DD : 2 Dd : 1 dd. In F3, broods from DD and Dd mothers are 100% dextral (3/4 of families), while broods from dd mothers are 100% sinistral (1/4 of families)."
    },
    {
      "id": "GPB203-U5-MCQ10",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "difficulty": "Hard",
      "questionText": "Heteroplasmy refers to a cellular state where:",
      "options": {
        "A": "Cells contain two nuclei",
        "B": "A single cell contains a mixed population of both normal and mutant organellar (mitochondrial or chloroplast) genomes",
        "C": "Cells have two different chromosome numbers",
        "D": "DNA is mixed with RNA"
      },
      "correctOption": "B",
      "explanation": "Heteroplasmy describes the co-existence of genetically distinct organellar genomes within the same eukaryotic cell or tissue."
    },
    {
      "id": "GPB203-U5-MCQ11",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Easy",
      "questionText": "Who first discovered chloroplast inheritance in Mirabilis jalapa (Four o'clock plant) in 1909?",
      "options": {
        "A": "Gregor Mendel",
        "B": "Carl Correns",
        "C": "Hugo de Vries",
        "D": "T. H. Morgan"
      },
      "correctOption": "B",
      "explanation": "Carl Correns discovered maternal plastid inheritance while studying variegated branch foliage in Mirabilis jalapa."
    },
    {
      "id": "GPB203-U5-MCQ12",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Easy",
      "questionText": "If flowers from a pale white branch of Mirabilis jalapa are pollinated with pollen from a green branch, the progeny will be:",
      "options": {
        "A": "100% Green",
        "B": "100% Pale White (lethal seedlings)",
        "C": "50% Green, 50% White",
        "D": "Variegated"
      },
      "correctOption": "B",
      "explanation": "Progeny strictly inherit the plastid phenotype of the female maternal branch; white maternal branches yield 100% white seedlings."
    },
    {
      "id": "GPB203-U5-MCQ13",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Easy",
      "questionText": "The circular double-stranded DNA genome present within chloroplasts is termed the:",
      "options": {
        "A": "Plasmid",
        "B": "Plastome (cpDNA)",
        "C": "Chondriome",
        "D": "Ribosome"
      },
      "correctOption": "B",
      "explanation": "The chloroplast genetic complement is termed the plastome (cpDNA)."
    },
    {
      "id": "GPB203-U5-MCQ14",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Medium",
      "questionText": "Petite mutants in baker's yeast (Saccharomyces cerevisiae) are characterized by:",
      "options": {
        "A": "Resistance to antibiotics",
        "B": "Deficiency in respiratory cytochromes and inability to grow on non-fermentable carbon sources like glycerol",
        "C": "Lack of cell wall",
        "D": "Inability to ferment glucose"
      },
      "correctOption": "B",
      "explanation": "Petite mutants lack functional respiratory electron transport chains (cytochromes b, c1, a, a3), forming tiny colonies that grow only by anaerobic fermentation."
    },
    {
      "id": "GPB203-U5-MCQ15",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Medium",
      "questionText": "Who discovered petite mutants in yeast and demonstrated their non-Mendelian mitochondrial inheritance?",
      "options": {
        "A": "Boris Ephrussi (1949)",
        "B": "Jacques Monod",
        "C": "Carl Correns",
        "D": "Arthur Kornberg"
      },
      "correctOption": "A",
      "explanation": "Boris Ephrussi and colleagues in Paris discovered and characterized segregational, neutral, and suppressive petite mutants in yeast."
    },
    {
      "id": "GPB203-U5-MCQ16",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Medium",
      "questionText": "When a Neutral Petite yeast (rho-zero, lacking all mtDNA) is crossed with a wild-type yeast (rho-plus), the meiotic ascospores segregate:",
      "options": {
        "A": "2 normal : 2 petite",
        "B": "4 normal : 0 petite (100% wild-type)",
        "C": "0 normal : 4 petite",
        "D": "3 normal : 1 petite"
      },
      "correctOption": "B",
      "explanation": "Wild-type mitochondria are contributed to the diploid zygote, restoring functional respiratory capacity to all four meiotic ascospores."
    },
    {
      "id": "GPB203-U5-MCQ17",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Medium",
      "questionText": "In Chlamydomonas reinhardtii, chloroplast resistance to streptomycin (sm-r) is inherited uniparentally through which mating type?",
      "options": {
        "A": "Mating type minus (mt-)",
        "B": "Mating type plus (mt+)",
        "C": "Both equally",
        "D": "Neither"
      },
      "correctOption": "B",
      "explanation": "Ruth Sager proved that chloroplast genes in Chlamydomonas are inherited exclusively through the mt+ parent; the mt- chloroplast DNA is degraded."
    },
    {
      "id": "GPB203-U5-MCQ18",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Hard",
      "questionText": "Suppressive petite mutants in yeast produce predominantly petite diploid progeny when mated with wild-type because:",
      "options": {
        "A": "Nuclear genes destroy wild-type mitochondria",
        "B": "Mutant mtDNA has high replication origin density, replicating faster and out-competing wild-type mtDNA",
        "C": "They produce chemical toxins",
        "D": "They prevent ascus formation"
      },
      "correctOption": "B",
      "explanation": "Suppressive petite mtDNA carries large deletions but retains active replication origins, enabling it to out-replicate wild-type mtDNA molecules."
    },
    {
      "id": "GPB203-U5-MCQ19",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Hard",
      "questionText": "According to the Endosymbiotic Theory championed by Lynn Margulis, mitochondria evolved from ancestral:",
      "options": {
        "A": "Cyanobacteria",
        "B": "Alpha-proteobacteria",
        "C": "Archaebacteria",
        "D": "Bacteriophages"
      },
      "correctOption": "B",
      "explanation": "Mitochondria originated from engulfed aerobic alpha-proteobacteria, while chloroplasts evolved from photosynthetic cyanobacteria."
    },
    {
      "id": "GPB203-U5-MCQ20",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "difficulty": "Hard",
      "questionText": "In human mitochondrial genetics, Leber's Hereditary Optic Neuropathy (LHON) is transmitted strictly through:",
      "options": {
        "A": "Paternal Y-chromosome",
        "B": "Maternal lineage (affected mothers pass it to 100% of children; affected fathers pass it to 0%)",
        "C": "X-linked recessive carrier females",
        "D": "Autosomal dominant inheritance"
      },
      "correctOption": "B",
      "explanation": "LHON is caused by mutations in mitochondrial ND genes (complex I) and is inherited strictly through the maternal ovum."
    },
    {
      "id": "GPB203-U5-MCQ21",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Easy",
      "questionText": "Cytoplasmic Male Sterility (CMS) in crop plants is biologically governed by genes residing in the:",
      "options": {
        "A": "Chloroplast genome",
        "B": "Mitochondrial genome (mtDNA)",
        "C": "Nuclear chromosomes",
        "D": "Ribosomal RNA"
      },
      "correctOption": "B",
      "explanation": "CMS is caused by chimeric, aberrant open reading frames in mitochondrial DNA that disrupt tapetum development during pollen microsporogenesis."
    },
    {
      "id": "GPB203-U5-MCQ22",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Easy",
      "questionText": "In the three-line hybrid seed production system (CGMS), what is the genetic constitution of the A-Line?",
      "options": {
        "A": "Male fertile with normal cytoplasm",
        "B": "Male sterile line with sterile cytoplasm and recessive maintainer alleles (S rf rf)",
        "C": "Male fertile restorer line",
        "D": "Diploid tester"
      },
      "correctOption": "B",
      "explanation": "The A-line is the female seed parent carrying sterile cytoplasm (S) and homozygous recessive non-restorer alleles (rf rf)."
    },
    {
      "id": "GPB203-U5-MCQ23",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Easy",
      "questionText": "In the CGMS system, which line is crossed with the A-line to maintain and multiply the A-line seed?",
      "options": {
        "A": "Restorer line (R-line)",
        "B": "Maintainer line (B-line: N rf rf)",
        "C": "Wild progenitor",
        "D": "Open pollinated variety"
      },
      "correctOption": "B",
      "explanation": "The B-line (maintainer line) has normal cytoplasm (N rf rf); crossing S rf rf x N rf rf yields 100% sterile A-line seed (S rf rf)."
    },
    {
      "id": "GPB203-U5-MCQ24",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Medium",
      "questionText": "What is the genetic constitution of the Restorer Line (R-Line) in the three-line hybrid system?",
      "options": {
        "A": "S rf rf",
        "B": "Carries dominant nuclear fertility restorer alleles (Rf Rf) that override sterile cytoplasm",
        "C": "N rf rf",
        "D": "Haploid sterile"
      },
      "correctOption": "B",
      "explanation": "The R-line carries dominant nuclear restorer alleles (Rf Rf) that restore pollen fertility in the F1 hybrid crop (S Rf rf)."
    },
    {
      "id": "GPB203-U5-MCQ25",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Medium",
      "questionText": "The catastrophic 1970 Southern Corn Leaf Blight epidemic in the USA (caused by Bipolaris maydis) was linked to which CMS cytoplasm?",
      "options": {
        "A": "T-cytoplasm (Texas male-sterile cytoplasm carrying urf13)",
        "B": "C-cytoplasm",
        "C": "S-cytoplasm",
        "D": "WA-cytoplasm"
      },
      "correctOption": "A",
      "explanation": "Texas cytoplasm (T-CMS) carried the chimeric mitochondrial gene urf13, which produced a receptor protein sensitive to T-toxin from Bipolaris maydis."
    },
    {
      "id": "GPB203-U5-MCQ26",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Medium",
      "questionText": "The Wild Abortive (WA) cytoplasm is the premier source of Cytoplasmic Male Sterility used to develop commercial hybrids in which major cereal?",
      "options": {
        "A": "Wheat",
        "B": "Hybrid Rice (pioneered by Yuan Longping)",
        "C": "Barley",
        "D": "Maize"
      },
      "correctOption": "B",
      "explanation": "Yuan Longping utilized the Wild Abortive (WA) cytoplasmic male sterility found in wild rice (Oryza rufipogon) to launch commercial hybrid rice."
    },
    {
      "id": "GPB203-U5-MCQ27",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Medium",
      "questionText": "Tift 23A is the landmark cytoplasmic male sterile line that revolutionized hybrid breeding in India for which crop?",
      "options": {
        "A": "Sorghum",
        "B": "Pearl Millet (Bajra - Pennisetum glaucum)",
        "C": "Pigeonpea",
        "D": "Cotton"
      },
      "correctOption": "B",
      "explanation": "Tift 23A (developed by Glenn Burton) served as the maternal CMS parent for India's first blockbuster pearl millet hybrids (e.g., HB-1)."
    },
    {
      "id": "GPB203-U5-MCQ28",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Hard",
      "questionText": "In two-line hybrid rice breeding, male sterility is conditioned without CMS using:",
      "options": {
        "A": "Chemical emasculation",
        "B": "Environment-sensitive Genic Male Sterility (EGMS: TGMS and PGMS)",
        "C": "Radiation-induced nullisomics",
        "D": "Mechanical detasseling"
      },
      "correctOption": "B",
      "explanation": "Two-line hybrid rice uses Thermo-sensitive Genic Male Sterility (TGMS) or Photoperiod-sensitive Genic Male Sterility (PGMS), eliminating B-lines."
    },
    {
      "id": "GPB203-U5-MCQ29",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Hard",
      "questionText": "What is the commercial product harvested from a hybrid seed production block where an A-line (S rf rf) is pollinated by an R-line (N Rf Rf)?",
      "options": {
        "A": "Certified B-line seed",
        "B": "Commercial F1 hybrid seed (Genotype: S Rf rf, fully fertile in farmer fields)",
        "C": "Inbred foundation seed",
        "D": "Sterile progeny"
      },
      "correctOption": "B",
      "explanation": "The harvested seed is the commercial F1 hybrid (S Rf rf), which develops into fully fertile, heavy grain-yielding plants in farmers' fields."
    },
    {
      "id": "GPB203-U5-MCQ30",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "difficulty": "Hard",
      "questionText": "Which mitochondrial chimeric gene is responsible for male sterility in the Wild Abortive (WA) hybrid rice system?",
      "options": {
        "A": "urf13",
        "B": "WA352 (or orfH79)",
        "C": "pvs-b",
        "D": "orf256"
      },
      "correctOption": "B",
      "explanation": "The chimeric mitochondrial gene WA352 interacts with nuclear-encoded proteins, causing tapetal programmed cell death and pollen abortion in WA hybrid rice."
    },
    {
      "id": "GPB203-U5-MCQ31",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Easy",
      "questionText": "Frederick Griffith (1928) discovered the phenomenon of bacterial transformation using which bacterium?",
      "options": {
        "A": "Escherichia coli",
        "B": "Streptococcus pneumoniae (Pneumococcus)",
        "C": "Bacillus subtilis",
        "D": "Salmonella typhimurium"
      },
      "correctOption": "B",
      "explanation": "Griffith used virulent smooth (S) and avirulent rough (R) strains of Streptococcus pneumoniae in laboratory mice."
    },
    {
      "id": "GPB203-U5-MCQ32",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Easy",
      "questionText": "In Griffith's experiment, which combination of pneumococcal cells injected into mice resulted in pneumonia and death?",
      "options": {
        "A": "Living Type II-R cells alone",
        "B": "Heat-killed Type III-S cells alone",
        "C": "Mixture of living Type II-R cells and heat-killed Type III-S cells",
        "D": "Boiled saline"
      },
      "correctOption": "C",
      "explanation": "The harmless living R cells took up genetic material from the dead heat-killed S cells and transformed into deadly living S cells."
    },
    {
      "id": "GPB203-U5-MCQ33",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Easy",
      "questionText": "Which enzyme was shown by Avery, MacLeod, and McCarty (1944) to completely destroy the transforming principle?",
      "options": {
        "A": "Protease (trypsin/chymotrypsin)",
        "B": "RNase",
        "C": "DNase (Deoxyribonuclease)",
        "D": "Lipase"
      },
      "correctOption": "C",
      "explanation": "Treatment with DNase completely destroyed transforming ability, proving that DNA was the transforming agent."
    },
    {
      "id": "GPB203-U5-MCQ34",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Medium",
      "questionText": "In the Hershey-Chase (1952) blender experiment, which radioactive isotope was used to specifically label bacteriophage DNA?",
      "options": {
        "A": "Sulfur-35 (35S)",
        "B": "Phosphorus-32 (32P)",
        "C": "Carbon-14 (14C)",
        "D": "Nitrogen-15 (15N)"
      },
      "correctOption": "B",
      "explanation": "DNA contains abundant phosphorus but no sulfur; therefore, 32P exclusively labeled the bacteriophage DNA core."
    },
    {
      "id": "GPB203-U5-MCQ35",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Medium",
      "questionText": "In the Hershey-Chase experiment, which radioactive isotope was used to specifically label the bacteriophage protein coat?",
      "options": {
        "A": "Phosphorus-32 (32P)",
        "B": "Sulfur-35 (35S)",
        "C": "Hydrogen-3 (Tritium)",
        "D": "Cobalt-60"
      },
      "correctOption": "B",
      "explanation": "Proteins contain methionine and cysteine (sulfur) but no phosphorus; therefore, 35S exclusively labeled the protein capsid."
    },
    {
      "id": "GPB203-U5-MCQ36",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Medium",
      "questionText": "Following high-speed agitation in the Waring blender and centrifugation in the Hershey-Chase experiment, where was the 32P radioactivity detected?",
      "options": {
        "A": "In the liquid supernatant containing empty viral ghosts",
        "B": "Inside the bacterial cell pellet at the bottom of the tube",
        "C": "Equally distributed",
        "D": "Evaporated as gas"
      },
      "correctOption": "B",
      "explanation": "32P entered the bacterial cells and precipitated in the pellet, proving that viral DNA enters the host cell to direct viral progeny production."
    },
    {
      "id": "GPB203-U5-MCQ37",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Medium",
      "questionText": "Heinz Fraenkel-Conrat and Bea Singer (1957) demonstrated that RNA is the genetic material in which virus?",
      "options": {
        "A": "Bacteriophage T2",
        "B": "Tobacco Mosaic Virus (TMV)",
        "C": "Influenza virus",
        "D": "Lambda phage"
      },
      "correctOption": "B",
      "explanation": "Reconstitution experiments using hybrid TMV (Type A RNA + Type B protein) proved that progeny virus always possessed proteins encoded by the viral RNA."
    },
    {
      "id": "GPB203-U5-MCQ38",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Hard",
      "questionText": "Why did the scientific community resist Avery, MacLeod, and McCarty's 1944 findings for nearly a decade?",
      "options": {
        "A": "Because DNA was thought to be too simple (the 'Tetranucleotide Hypothesis' of Levene) while proteins were complex and varied",
        "B": "Because mice were considered invalid test subjects",
        "C": "Because DNase was unknown",
        "D": "Because Griffith retracted his paper"
      },
      "correctOption": "A",
      "explanation": "Phoebus Levene's erroneous tetranucleotide theory held that DNA was an invariant, repetitive scaffold; proteins were assumed to be the genetic material."
    },
    {
      "id": "GPB203-U5-MCQ39",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Hard",
      "questionText": "In Hershey and Chase's blender experiment, what was the primary physical function of the kitchen Waring blender?",
      "options": {
        "A": "To lyse the bacterial cell walls",
        "B": "To shear off the empty bacteriophage protein coats (ghosts) from the bacterial cell surface",
        "C": "To homogenize the DNA",
        "D": "To induce phage DNA replication"
      },
      "correctOption": "B",
      "explanation": "Centrifugal shear forces in the blender detached empty 35S-labeled protein capsids adhering to the bacterial exterior without lysing bacteria."
    },
    {
      "id": "GPB203-U5-MCQ40",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "difficulty": "Hard",
      "questionText": "Transformation in Streptococcus pneumoniae is biologically mediated by a physiological state called:",
      "options": {
        "A": "Lysogeny",
        "B": "Competence (driven by Competence Stimulating Peptide / Com quorum sensing)",
        "C": "Conjugation",
        "D": "Transduction"
      },
      "correctOption": "B",
      "explanation": "Bacterial competence is a specialized physiological state enabling active uptake and genomic integration of exogenous extracellular DNA."
    },
    {
      "id": "GPB203-U5-MCQ41",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Easy",
      "questionText": "James Watson and Francis Crick published their landmark double-helix model of DNA in which year?",
      "options": {
        "A": "1944",
        "B": "1953 (in Nature)",
        "C": "1958",
        "D": "1962"
      },
      "correctOption": "B",
      "explanation": "Watson and Crick published their structure of DNA in Nature on April 25, 1953 (awarded the Nobel Prize in 1962 with Maurice Wilkins)."
    },
    {
      "id": "GPB203-U5-MCQ42",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Easy",
      "questionText": "According to Chargaff's rules of base composition in double-stranded DNA:",
      "options": {
        "A": "A = G and C = T",
        "B": "A = T and G = C (Total Purines = Total Pyrimidines)",
        "C": "A + T = G + C",
        "D": "A/C = 1.0"
      },
      "correctOption": "B",
      "explanation": "Erwin Chargaff demonstrated that adenine equals thymine (A=T) and guanine equals cytosine (G=C), meaning Purines (A+G) = Pyrimidines (T+C)."
    },
    {
      "id": "GPB203-U5-MCQ43",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Easy",
      "questionText": "How many hydrogen bonds form between Guanine and Cytosine in a DNA double helix?",
      "options": {
        "A": "One",
        "B": "Two",
        "C": "Three (G === C)",
        "D": "Four"
      },
      "correctOption": "C",
      "explanation": "Guanine and cytosine pair via three specific hydrogen bonds, making GC-rich DNA thermodynamically more stable than AT-rich DNA."
    },
    {
      "id": "GPB203-U5-MCQ44",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Easy",
      "questionText": "What is the physical helical diameter of the B-DNA double helix?",
      "options": {
        "A": "10 \u00c5",
        "B": "20 \u00c5 (2.0 nm)",
        "C": "34 \u00c5",
        "D": "3.4 \u00c5"
      },
      "correctOption": "B",
      "explanation": "The B-DNA double helix maintains a constant uniform diameter of 20 Angstroms (2.0 nm)."
    },
    {
      "id": "GPB203-U5-MCQ45",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Medium",
      "questionText": "In the B-DNA double helix, one complete 360-degree helical turn spans what distance and contains approximately how many base pairs?",
      "options": {
        "A": "20 \u00c5 and 5 bp",
        "B": "34 \u00c5 (3.4 nm) and 10.5 base pairs",
        "C": "3.4 \u00c5 and 1 bp",
        "D": "45 \u00c5 and 15 bp"
      },
      "correctOption": "B",
      "explanation": "Each complete pitch (turn) measures 34 \u00c5, with a vertical rise of 3.4 \u00c5 per base pair, containing ~10.5 bp per turn in solution."
    },
    {
      "id": "GPB203-U5-MCQ46",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Medium",
      "questionText": "The two strands of a DNA double helix are described as 'antiparallel' because:",
      "options": {
        "A": "One strand runs in the 5'->3' direction and the complementary strand runs in the 3'->5' direction",
        "B": "Both strands run in the same direction",
        "C": "They are made of different sugars",
        "D": "One is RNA and one is DNA"
      },
      "correctOption": "A",
      "explanation": "The 5'-phosphate to 3'-hydroxyl orientation of one strand is oriented opposite to that of its paired partner strand."
    },
    {
      "id": "GPB203-U5-MCQ47",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Medium",
      "questionText": "Matthew Meselson and Franklin Stahl (1958) proved semi-conservative DNA replication using which heavy isotope?",
      "options": {
        "A": "Carbon-13",
        "B": "Nitrogen-15 (15N as 15NH4Cl)",
        "C": "Oxygen-18",
        "D": "Sulfur-35"
      },
      "correctOption": "B",
      "explanation": "Meselson and Stahl labeled E. coli DNA with heavy stable isotope 15N and analyzed density transitions on CsCl gradients."
    },
    {
      "id": "GPB203-U5-MCQ48",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Medium",
      "questionText": "In the Meselson-Stahl experiment, what band(s) were observed after exactly ONE generation of replication in 14N medium?",
      "options": {
        "A": "One heavy band and one light band",
        "B": "A single hybrid intermediate-density band (15N-14N)",
        "C": "A single light band",
        "D": "Two hybrid bands"
      },
      "correctOption": "B",
      "explanation": "A single intermediate hybrid band appeared, conclusively ruling out the conservative replication model."
    },
    {
      "id": "GPB203-U5-MCQ49",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Hard",
      "questionText": "If a double-stranded DNA sample contains 28% Cytosine, what percentage of Adenine does it contain?",
      "options": {
        "A": "28%",
        "B": "22%",
        "C": "44%",
        "D": "56%"
      },
      "correctOption": "B",
      "explanation": "By Chargaff's rule: %G = %C = 28%. Total G+C = 56%. Therefore, Total A+T = 100 - 56 = 44%. Since %A = %T, %A = 44 / 2 = 22%."
    },
    {
      "id": "GPB203-U5-MCQ50",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "difficulty": "Hard",
      "questionText": "J. Herbert Taylor (1957) demonstrated semi-conservative replication at the eukaryotic chromosome level in Vicia faba using:",
      "options": {
        "A": "Cesium chloride centrifugation",
        "B": "Tritiated thymidine (3H-thymidine) and autoradiography",
        "C": "Gel electrophoresis",
        "D": "X-ray crystallography"
      },
      "correctOption": "B",
      "explanation": "Taylor used 3H-thymidine autoradiography in broad bean (Vicia faba) root-tip chromosomes, proving each chromatid is semi-conservatively replicated."
    },
    {
      "id": "GPB203-U5-MCQ51",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Easy",
      "questionText": "How many total triplet codons exist in the standard universal genetic code?",
      "options": {
        "A": "20",
        "B": "64",
        "C": "61",
        "D": "16"
      },
      "correctOption": "B",
      "explanation": "With 4 nitrogenous bases arranged in triplets, 4^3 = 64 codons are generated."
    },
    {
      "id": "GPB203-U5-MCQ52",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Easy",
      "questionText": "Which codon acts as the universal initiation (start) codon for protein synthesis and encodes Methionine?",
      "options": {
        "A": "UAA",
        "B": "AUG",
        "C": "UAG",
        "D": "UGA"
      },
      "correctOption": "B",
      "explanation": "AUG is the universal start codon, specifying N-formylmethionine in prokaryotes and methionine in eukaryotes."
    },
    {
      "id": "GPB203-U5-MCQ53",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Easy",
      "questionText": "Which of the following trios represents the three stop (nonsense) codons in mRNA?",
      "options": {
        "A": "AUG, GUG, UUG",
        "B": "UAA, UAG, UGA",
        "C": "AAA, UUU, GGG",
        "D": "UAC, UGG, UGC"
      },
      "correctOption": "B",
      "explanation": "UAA (ochre), UAG (amber), and UGA (opal) signal translational termination."
    },
    {
      "id": "GPB203-U5-MCQ54",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Easy",
      "questionText": "Who shared the 1968 Nobel Prize with Nirenberg and Holley for deciphering the genetic code using synthetic polyribonucleotides?",
      "options": {
        "A": "Arthur Kornberg",
        "B": "Har Gobind Khorana",
        "C": "Severo Ochoa",
        "D": "Sydney Brenner"
      },
      "correctOption": "B",
      "explanation": "Indian-American biochemist Har Gobind Khorana synthesized defined RNA polymers to confirm triplet codon assignments."
    },
    {
      "id": "GPB203-U5-MCQ55",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Medium",
      "questionText": "The genetic code is described as 'Degenerate' because:",
      "options": {
        "A": "It breaks down over time",
        "B": "A single amino acid can be specified by more than one synonymous codon",
        "C": "One codon codes for multiple amino acids",
        "D": "It differs between plants and animals"
      },
      "correctOption": "B",
      "explanation": "Degeneracy means that multiple codons specify the same amino acid (e.g., UUU and UUC both encode Phenylalanine)."
    },
    {
      "id": "GPB203-U5-MCQ56",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Medium",
      "questionText": "Francis Crick's Wobble Hypothesis (1966) explains non-standard base pairing occurring at which position?",
      "options": {
        "A": "The 5' first base of the mRNA codon",
        "B": "The 3' third base of the mRNA codon and 5' base of the tRNA anticodon",
        "C": "The middle base of the codon",
        "D": "The amino acid attachment site of tRNA"
      },
      "correctOption": "B",
      "explanation": "Wobble pairing occurs between the third base (3') of the codon and first base (5') of the anticodon, allowing one tRNA to read multiple codons."
    },
    {
      "id": "GPB203-U5-MCQ57",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Medium",
      "questionText": "During transcription, RNA polymerase binds to which specific DNA sequence upstream of the coding region?",
      "options": {
        "A": "Operator",
        "B": "Promoter region (e.g., TATA box / Pribnow box)",
        "C": "Spliceosome",
        "D": "Poly-A tail"
      },
      "correctOption": "B",
      "explanation": "RNA polymerase recognizes and binds to specific promoter sequences (-10 and -35 boxes in prokaryotes; TATA box in eukaryotes) to initiate transcription."
    },
    {
      "id": "GPB203-U5-MCQ58",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Medium",
      "questionText": "In eukaryotic mRNA processing, what is added to the 5' end and 3' end of the primary transcript?",
      "options": {
        "A": "7-methylguanosine cap at 5' end and Poly-A tail at 3' end",
        "B": "Poly-A at 5' and cap at 3'",
        "C": "Lipid bilayer at both ends",
        "D": "Histones"
      },
      "correctOption": "A",
      "explanation": "Eukaryotic pre-mRNA receives a 5' 7-methylguanosine cap (protects against nucleases) and a 3' polyadenylated tail (200-250 adenines)."
    },
    {
      "id": "GPB203-U5-MCQ59",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Hard",
      "questionText": "Which ribosomal enzymatic activity catalyzes peptide bond formation between amino acids during translation elongation?",
      "options": {
        "A": "Aminoacyl-tRNA synthetase",
        "B": "Peptidyl transferase (ribozyme activity of 23S/28S rRNA)",
        "C": "DNA ligase",
        "D": "RNA helicase"
      },
      "correctOption": "B",
      "explanation": "Peptidyl transferase, catalyzed directly by the large ribosomal subunit rRNA (a ribozyme), forms peptide bonds between amino acids."
    },
    {
      "id": "GPB203-U5-MCQ60",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "difficulty": "Hard",
      "questionText": "Temin and Baltimore (1970) discovered reverse transcriptase in retroviruses, which modified Crick's Central Dogma by demonstrating:",
      "options": {
        "A": "Protein to DNA flow",
        "B": "RNA-directed synthesis of DNA (Reverse Transcription: RNA -> DNA)",
        "C": "Direct translation of DNA into protein",
        "D": "Spontaneous amino acid creation"
      },
      "correctOption": "B",
      "explanation": "Reverse transcriptase synthesizes complementary DNA (cDNA) from an RNA template, proving that genetic information can flow from RNA back to DNA."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "GPB203-U5-SUB01",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "questionText": "Enumerate the four diagnostic criteria that distinguish true cytoplasmic (extranuclear) inheritance from nuclear Mendelian inheritance.",
      "modelAnswer": "Extranuclear (cytoplasmic) inheritance involves genes residing outside the nucleus in organellar genomes (chloroplasts and mitochondria). Geneticists apply four rigorous criteria to distinguish cytoplasmic inheritance from Mendelian transmission:\n\n1. Disparity between Reciprocal Crosses (Maternal Transmission):\nIn Mendelian nuclear inheritance, reciprocal crosses yield identical phenotypic results in F1. In cytoplasmic inheritance, reciprocal crosses yield strikingly disparate outcomes: the progeny invariably display the phenotype of the female parent (*uniparental maternal inheritance*). This occurs because the female egg cell contributes virtually all cytoplasm, while the male pollen/sperm contributes only a naked nucleus.\n\n2. Absence of Classical Mendelian Segregation Ratios:\nCytoplasmic traits do not segregate into predictable Mendelian ratios (e.g., 3:1 in F2 or 1:1 in test crosses). Instead, random partitioning of organelles during cytokinesis (replicative segregation) produces continuous or mosaic phenotypic variations.\n\n3. Persistence across Repeated Backcrosses:\nWhen female progeny are repeatedly backcrossed over 6\u20138 generations to the recurrent male parent, nuclear genes of the female are progressively replaced by the male genome (~99.2% recurrent genome). In cytoplasmic inheritance, the maternal trait persists indefinitely without dilution because organellar DNA is never displaced by male nuclear alleles.\n\n4. Inability to Map Genes to Nuclear Linkage Groups:\nCytoplasmic genes cannot be mapped onto any nuclear chromosome linkage group and show zero linkage with any known nuclear genetic markers.",
      "outlinePoints": [
        "Reciprocal cross disparity with strict maternal transmission",
        "Failure to segregate in Mendelian 3:1 or 9:3:3:1 ratios",
        "Indefinite persistence across recurrent backcrossing",
        "Absence of genetic linkage with nuclear chromosomal markers"
      ]
    },
    {
      "id": "GPB203-U5-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "questionText": "Explain the genetic mechanism of shell coiling in Limnaea peregra and explain why it is classified as a maternal effect rather than true cytoplasmic inheritance.",
      "modelAnswer": "In the freshwater snail *Limnaea peregra* (studied by Boycott and Diver, 1923, and analyzed genetically by Sturtevant, 1923), shell coiling direction is determined by a classic **Maternal Effect**.\n\n1. Genetic Control:\n- Shell coiling can be either **Dextral** (right-handed clockwise coiling) or **Sinistral** (left-handed counter-clockwise coiling).\n- Controlled by a pair of nuclear alleles: dominant allele *D* determines dextral coiling, while recessive allele *d* determines sinistral coiling.\n\n2. Maternal Effect Mechanism:\n- The phenotypic coiling of the offspring is determined exclusively by the **nuclear genotype of the mother**, completely irrespective of the offspring's own genotype or the phenotype of the mother.\n- Cellular Basis: The orientation of the mitotic spindle during the second cleavage division of the zygote determines coiling direction. The mother deposits spindle-orienting proteins or mRNAs into the oocyte cytoplasm during oogenesis. If the mother possesses at least one *D* allele (*DD* or *Dd*), the gene products induce dextral cleavage; if the mother is *dd*, the lack of this substance results in sinistral cleavage.\n\n3. Why It Is NOT True Cytoplasmic Inheritance:\n- In true cytoplasmic inheritance, the trait is governed by organellar DNA and persists maternally indefinitely.\n- In *Limnaea*, the trait is governed by a standard nuclear gene that undergoes normal Mendelian segregation (*1 DD : 2 Dd : 1 dd* in F2). The phenotypic manifestation is simply delayed by exactly one generation. When an F2 *dd* individual (derived from a *Dd* mother, which has a dextral shell) reproduces, all its F3 progeny have sinistral shells. This segregation confirms nuclear control, disproving cytoplasmic organellar heredity.",
      "outlinePoints": [
        "Nuclear alleles D (dextral, dominant) vs d (sinistral, recessive)",
        "Determination of offspring phenotype by maternal nuclear genotype",
        "Cytological mechanism: maternal oocyte proteins directing spindle cleavage angle",
        "Explanation of delayed one-generation Mendelian segregation disproving organellar heredity"
      ]
    },
    {
      "id": "GPB203-U5-SUB03",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "questionText": "Describe Carl Correns' classic experiment on chloroplast leaf variegation in Mirabilis jalapa.",
      "modelAnswer": "In 1909, German botanist Carl Correns documented the first definitive evidence of extranuclear inheritance while investigating leaf variegation in the Four o'clock plant (*Mirabilis jalapa*).\n\n1. Experimental Observations:\nCorrens observed that individual *Mirabilis jalapa* plants developed three distinct branch phenotypes on the same bush:\n- Completely Green branches (normal chloroplasts).\n- Completely Pale White branches (chlorophyll-deficient plastids / leucoplasts).\n- Variegated branches (mottled green and white patches).\n\n2. Reciprocal Crossing Results:\nCorrens made systematic reciprocal pollinations among flowers born on these three branch types:\n- Crosses on Flowers of Green Branches: Whether pollinated with pollen from green, white, or variegated branches, the progeny were **100% Green**.\n- Crosses on Flowers of White Branches: When pollinated with pollen from any branch, the progeny were **100% Pale White** (seedlings died early due to lack of photosynthesis).\n- Crosses on Flowers of Variegated Branches: When pollinated with pollen from any branch, the seeds produced a mixture of **Green, White, and Variegated seedlings** in unpredictable, non-Mendelian ratios.\n\n3. Cytological Explanation:\n- The phenotype of the offspring depends strictly on the maternal branch from which the seed is harvested; pollen contributes zero plastids.\n- In variegated branches, cells contain a mixture of normal green chloroplasts and mutant white plastids (**heteroplasmy**).\n- During cytokinesis, plastids segregate randomly into daughter cells. An egg cell may receive only green plastids (yielding green plants), only white plastids (yielding white plants), or a mixture (yielding variegated plants).",
      "outlinePoints": [
        "Three branch types observed on Mirabilis jalapa (green, white, variegated)",
        "Reciprocal crossing results demonstrating 100% maternal transmission",
        "Complete lack of pollen influence on offspring leaf phenotype",
        "Cytological mechanism: heteroplasmy and random vegetative segregation of chloroplasts"
      ]
    },
    {
      "id": "GPB203-U5-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)",
      "questionText": "Differentiate between Segregational, Neutral, and Suppressive petite mutants in Saccharomyces cerevisiae.",
      "modelAnswer": "In baker's yeast (*Saccharomyces cerevisiae*), Boris Ephrussi (1949) isolated 'petite' mutants that form miniature colonies because they lack respiratory cytochromes and cannot perform oxidative phosphorylation, growing exclusively by slow anaerobic fermentation.\n\nPetite mutants are categorized into three distinct genetic classes:\n\n1. Segregational (Nuclear) Petites:\n- Genetic Basis: Caused by recessive point mutations in nuclear genes encoding respiratory enzymes.\n- Meiotic Segregation: When crossed with wild-type (*rho+*), the diploid zygote is normal. Upon sporulation, meiotic ascospores segregate in a strict **2 normal : 2 petite Mendelian ratio** (1:1).\n\n2. Neutral (Cytoplasmic) Petites (*rho-zero*):\n- Genetic Basis: Caused by the complete physical loss or total deletion of mitochondrial DNA (mtDNA = 0%).\n- Meiotic Segregation: When crossed with wild-type (*rho+*), the wild-type parent contributes intact normal mitochondria. The diploid zygote is fully respiratory. Upon sporulation, **100% of the ascospores are normal wild-type (4 normal : 0 petite)** across all generations. The petite trait completely disappears.\n\n3. Suppressive Petites (*rho-minus*):\n- Genetic Basis: Caused by extensive internal deletions in mtDNA that retain functional replication origins.\n- Meiotic Segregation: When mated with wild-type (*rho+*), the mutant mtDNA out-replicates wild-type mtDNA or recombines with it, suppressing normal mitochondrial function. Upon sporulation, **predominantly petite ascospores (up to 99% petite)** are produced in non-Mendelian proportions.",
      "outlinePoints": [
        "Phenotypic nature of petite colonies (respiratory deficiency, anaerobic fermentation)",
        "Segregational petites: nuclear recessive mutations showing 2:2 Mendelian tetrad segregation",
        "Neutral petites (rho-zero): total mtDNA loss yielding 100% wild-type ascospores (4:0)",
        "Suppressive petites (rho-minus): mutant mtDNA out-replicating wild-type yielding majority petite progeny"
      ]
    },
    {
      "id": "GPB203-U5-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "questionText": "Explain the role of A-line, B-line, and R-line in commercial hybrid seed production under the CGMS system.",
      "modelAnswer": "The Cytoplasmic-Genetic Male Sterility (CGMS) three-line system is the premier technology for commercial hybrid seed production in self- and cross-pollinated crops (rice, sorghum, pearl millet), eliminating manual emasculation:\n\n1. A-Line (Male Sterile Seed Parent):\n- Genetic Constitution: Carries sterile cytoplasm (*S*) and homozygous recessive nuclear non-restorer alleles (*rf rf*). Genotype: `S rf rf`.\n- Phenotype: Male sterile (anthers are shriveled, non-dehiscent, with aborted pollen); female fertility is 100% normal.\n- Role: Serves as the female parent in commercial hybrid seed production blocks.\n\n2. B-Line (Maintainer Line):\n- Genetic Constitution: Isogenic counterpart of the A-line possessing identical recessive nuclear genes (*rf rf*), but carries normal fertile cytoplasm (*N*). Genotype: `N rf rf`.\n- Phenotype: Fully male fertile and female fertile.\n- Role: Used exclusively to maintain and multiply the A-line. When crossed with the A-line (`S rf rf female x N rf rf male`), 100% of the harvested seed is male sterile (`S rf rf`), perpetuating the A-line.\n\n3. R-Line (Restorer Line):\n- Genetic Constitution: Carries dominant nuclear fertility restorer alleles (*Rf Rf*) regardless of cytoplasm (`N Rf Rf` or `S Rf Rf`).\n- Phenotype: Fully fertile. Possesses superior agronomic combining ability with the A-line.\n- Role: Used as the male pollinator in commercial hybrid production fields. Crossing `A-line (S rf rf) x R-line (N Rf Rf)` yields the **Commercial F1 Hybrid (Genotype: S Rf rf)**. The dominant *Rf* allele overrides the sterile cytoplasm, fully restoring pollen fertility and seed set in the farmer's grain field.",
      "outlinePoints": [
        "A-line: male sterile seed parent (S rf rf)",
        "B-line: isogenic maintainer line (N rf rf) used to multiply A-line seed",
        "R-line: fertility restorer pollinator carrying dominant Rf Rf alleles",
        "Harvest of commercial F1 hybrid seed (S Rf rf) displaying restored fertility"
      ]
    },
    {
      "id": "GPB203-U5-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "questionText": "Describe Frederick Griffith's (1928) transformation experiment in Streptococcus pneumoniae and state the significance of the 'transforming principle'.",
      "modelAnswer": "In 1928, British medical officer Frederick Griffith conducted landmark experiments on the bacterium *Streptococcus pneumoniae* (Pneumococcus) that laid the foundation for molecular genetics.\n\n1. Experimental Strains:\n- **Type III-S (Smooth) Strain:** Virulent pathogen. Possesses a smooth, glistening polysaccharide capsule that protects the bacterium from phagocytosis by host white blood cells. Inoculation kills mice via septicemia.\n- **Type II-R (Rough) Strain:** Avirulent mutant. Lacks the protective capsule, forming rough colonies. Easily engulfed and destroyed by the mouse immune system; mice survive.\n\n2. Griffith's Four Experimental Steps:\n- Experiment 1: Injected living Type II-R cells into mice -> Mice survived.\n- Experiment 2: Injected living Type III-S cells into mice -> Mice contracted pneumonia and died; living S cells recovered.\n- Experiment 3: Injected heat-killed Type III-S cells into mice -> Mice survived (proving heat destroys virulence).\n- Experiment 4: Injected a mixture of living avirulent Type II-R cells AND heat-killed virulent Type III-S cells into mice.\n  * Result: The mice developed severe pneumonia and died!\n  * Autopsy: Griffith isolated abundant living, encapsulated Type III-S bacteria from the blood of the dead mice.\n\n3. Scientific Conclusion and Significance:\nBecause dead S cells could not come back to life, Griffith concluded that some biological substance from the dead heat-killed S cells had passed into the living R cells, permanently transforming them into virulent, capsule-producing S cells.\nHe termed this unknown hereditary molecule the **'Transforming Principle'**. Although Griffith did not identify the chemical nature of the substance, his experiment demonstrated that genetic information can be transferred horizontally between bacterial cells.",
      "outlinePoints": [
        "Description of Type III-S (virulent, encapsulated) and Type II-R (avirulent, non-capsulated) strains",
        "Four experimental protocols and results in laboratory mice",
        "Isolation of living S bacteria from mice injected with heat-killed S + living R cells",
        "Formulation of the 'Transforming Principle' concept and historical significance"
      ]
    },
    {
      "id": "GPB203-U5-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "questionText": "State Chargaff's rules of DNA base composition and explain their critical role in Watson and Crick's formulation of the double-helix model.",
      "modelAnswer": "Between 1949 and 1952, Austrian biochemist Erwin Chargaff used paper chromatography and ultraviolet spectrophotometry to precisely quantify the nitrogenous base composition of DNA across diverse eukaryotic and prokaryotic organisms, establishing **Chargaff's Rules**:\n\n1. Core Base-Composition Rules (For Double-Stranded DNA):\n- **Equivalence of Purines and Pyrimidines:** The total sum of purines equals the total sum of pyrimidines:\n  `Purines (A + G) = Pyrimidines (T + C)`, or `(A + G) / (T + C) = 1.0`\n- **1:1 Base Ratio Equivalence:**\n  * The amount of Adenine is always equal to Thymine: `A = T` (or `A / T = 1.0`)\n  * The amount of Guanine is always equal to Cytosine: `G = C` (or `G / C = 1.0`)\n- **Species-Specific Base Ratio (Dissimilarity Index):** The ratio of `(A + T) / (G + C)` is constant for a given biological species, but varies widely across different species (ranging from 0.4 in *Streptomyces* to 1.8 in yeast).\n\n2. Critical Role in Developing the Double-Helix Model:\nPrior to Chargaff, prevailing theory assumed the 'tetranucleotide hypothesis' (DNA is an invariant repeating polymer of equal A, T, G, C parts). Chargaff demonstrated that DNA composition varies with species, satisfying the requirement for informational diversity.\n\nFurthermore, when James Watson and Francis Crick were attempting to build a physical model:\n- They initially attempted like-with-like base pairing (A-A, T-T, G-G), which failed because purine-purine pairs were too wide and pyrimidine-pyrimidine pairs too narrow to fit Rosalind Franklin's uniform 20 \u00c5 helical diameter.\n- Chargaff's strict `A = T` and `G = C` equivalence provided the mathematical clue that forced Watson to pair a purine with a pyrimidine.\n- Watson realized that specific hydrogen bonding between Adenine and Thymine (*A = T*, two bonds) and Guanine and Cytosine (*G === C*, three bonds) formed pairs of identical geometric dimensions, explaining both Chargaff's rules and the uniform diameter of the double helix.",
      "outlinePoints": [
        "Chargaff's base-equivalence rules: A = T and G = C",
        "Total purines equals total pyrimidines (A+G = T+C)",
        "Species-specific variation in (A+T)/(G+C) ratio refuting the tetranucleotide theory",
        "Role in guiding Watson and Crick toward complementary purine-pyrimidine base pairing"
      ]
    },
    {
      "id": "GPB203-U5-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "questionText": "Explain the key properties of the Genetic Code: Triplet nature, Degeneracy, Non-overlapping, and Universal nature.",
      "modelAnswer": "The genetic code is the universal biological dictionary translating the linear nucleotide sequence of mRNA into the linear amino acid sequence of proteins.\n\nKey Properties of the Genetic Code:\n\n1. Triplet Nature:\nThree consecutive mRNA nucleotides constitute a 'codon' specifying one amino acid. Because there are 4 bases, doublet codons could only specify 4^2 = 16 amino acids (insufficient for 20 amino acids). Triplet codons generate `4^3 = 64` codons, which fully accommodates all 20 standard amino acids (61 sense codons + 3 stop codons).\n\n2. Degeneracy (Redundancy):\nMultiple codons can specify the same amino acid. Except for Methionine (*AUG*) and Tryptophan (*UGG*), which have single codons, all standard amino acids are encoded by 2 to 6 synonymous codons (e.g., Leucine, Serine, and Arginine each have 6 codons). Degeneracy minimizes the deleterious impact of point mutations (especially at the 3rd codon wobble position).\n\n3. Non-Overlapping and Commaless:\n- Non-Overlapping: In translation, the ribosome reads codons strictly three by three in succession. A single nucleotide belongs to only one codon (e.g., sequence *AUGCCA* is read as *AUG* and *CCA*, never *UGC*).\n- Commaless: There are no punctuations, pauses, or spacer bases between adjacent codons. Translation begins at *AUG* and reads continuously until a stop codon.\n\n4. Universal Nature:\nWith minor exceptions (in mammalian mitochondria and certain protozoa), the genetic code is identical across all living organisms, from *E. coli* to maize to humans. For example, *UUU* codes for Phenylalanine in bacteria, plants, and humans alike, providing compelling proof for the common evolutionary origin of all life and enabling recombinant DNA technology.",
      "outlinePoints": [
        "Triplet nature: 4^3 = 64 codons specifying 20 amino acids",
        "Degeneracy: multiple synonymous codons per amino acid buffering against mutations",
        "Non-overlapping and commaless: sequential three-base reading without punctuation",
        "Universality: identical codon assignments across all biological domains enabling genetic engineering"
      ]
    },
    {
      "id": "GPB203-U5-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments",
      "questionText": "Provide a comprehensive comparative analysis of the three landmark experiments proving DNA as the genetic material: (a) Griffith's transformation (1928), (b) Avery, MacLeod, and McCarty's enzymatic dissection (1944), and (c) Hershey and Chase's blender experiment (1952).",
      "modelAnswer": "The identification of DNA as the universal physical substance of heredity resolved biology's greatest mystery through three sequential, definitive experiments:\n\n1. Frederick Griffith (1928) \u2014 Discovery of the 'Transforming Principle':\n- System: *Streptococcus pneumoniae* (virulent encapsulated Type III-S vs avirulent non-capsulated Type II-R) in laboratory mice.\n- Protocol:\n  * Mice injected with living R cells survived.\n  * Mice injected with heat-killed S cells survived.\n  * Mice injected with a mixture of living R cells AND heat-killed S cells developed fatal pneumonia.\n  * Living encapsulated Type III-S bacteria were recovered from the dead mice.\n- Conclusion: A heat-stable chemical component ('Transforming Principle') was transferred from dead S cells into living R cells, permanently transforming them into virulent S cells. Griffith discovered transformation, but could not determine its chemical identity.\n\n2. Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944) \u2014 Chemical Proof of DNA:\n- System: In vitro biochemical fractionation of *Streptococcus pneumoniae* cell-free extracts.\n- Protocol:\n  * Harvested massive cultures of virulent Type III-S cells, lysed them, and precipitated active transforming extracts.\n  * Subjected the purified extract to selective enzymatic degradation using specific enzymes before adding to living R cells:\n    1. Treatment with **Proteases (Trypsin and Chymotrypsin)**: Completely destroyed all proteins -> Transformation was **unaffected** (R cells still transformed into S).\n    2. Treatment with **Ribonuclease (RNase)**: Completely destroyed all RNA -> Transformation was **unaffected**.\n    3. Treatment with Lipases and Carbohydrases: Destroyed lipids and polysaccharides -> Transformation was **unaffected**.\n    4. Treatment with **Deoxyribonuclease (DNase)**: Selectively degraded DNA -> **Transformation was completely abolished!**\n  * Physical and chemical testing (ultracentrifugation, electrophoresis, UV absorption at 260 nm, N:P ratio of 1.67) confirmed that the transforming activity resided in pure, high-molecular-weight DNA.\n- Conclusion: DNA is the transforming principle and the chemical basis of heredity.\n\n3. Alfred Hershey and Martha Chase (1952) \u2014 Confirmation via Bacteriophage T2:\n- System: Bacteriophage T2 (a simple virus containing only DNA inside a protein capsid) infecting *Escherichia coli*.\n- Radioactive Tracing Rationale:\n  * DNA contains abundant Phosphorus, but zero Sulfur. Labeled with radioactive Phosphorus-32 (**32P**).\n  * Protein capsids contain Sulfur (methionine, cysteine), but zero Phosphorus. Labeled with radioactive Sulfur-35 (**35S**).\n- Experimental Protocol:\n  * Batch 1: *E. coli* infected with 35S-protein labeled T2 phages.\n  * Batch 2: *E. coli* infected with 32P-DNA labeled T2 phages.\n  * Infection was allowed to proceed for a few minutes, then cultures were agitated in a high-speed kitchen **Waring blender** to shear off empty viral protein capsids ('ghosts') from the bacterial cell surface.\n  * Centrifuged at high speed to separate heavy bacterial cells (pellet) from lighter viral ghosts (supernatant).\n- Findings:\n  * In the 35S batch: ~80% of the radioactivity remained in the liquid supernatant (in empty protein coats); almost no 35S entered the bacterial pellet.\n  * In the 32P batch: Over 85% of the radioactivity was found in the bacterial pellet. When these bacteria lysed, progeny phages contained 32P, but no 35S.\n- Conclusion: Only viral DNA enters host bacterial cells to direct the replication of new phages; protein coats remain outside as empty hulls. This provided final, universally accepted proof that DNA is the genetic material.",
      "outlinePoints": [
        "Griffith (1928): in vivo transformation of R to S in mice, establishing the 'transforming principle'",
        "Avery, MacLeod, and McCarty (1944): in vitro enzymatic dissection proving DNase abolishes transformation",
        "Biophysical validation of DNA purity by Avery's team",
        "Hershey and Chase (1952): bacteriophage T2 blender experiment utilizing 32P (DNA) and 35S (protein)",
        "Centrifugal separation proving 32P enters host cells while 35S coats remain in supernatant",
        "Historical synthesis cementing DNA as the hereditary molecule"
      ]
    },
    {
      "id": "GPB203-U5-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "questionText": "Detail the structural architecture of the Watson-Crick B-DNA double helix. Explain base pairing geometry, major and minor grooves, helical dimensions, and the forces that stabilize the double helix.",
      "modelAnswer": "In April 1953, James D. Watson and Francis H. C. Crick published their historic model of the B-form deoxyribonucleic acid (B-DNA) double helix, synthesizing Erwin Chargaff's base-ratio data and Rosalind Franklin and Maurice Wilkins' X-ray fiber diffraction Photograph 51.\n\n1. Fundamental Architecture and Dimensions of B-DNA:\n- **Right-Handed Double Helix:** B-DNA consists of two polynucleotide chains wound around a central helical axis in a right-handed spiral.\n- **Antiparallel Polarity:** The two strands run in opposite directions: one strand has 5'->3' polarity (ending in a 5'-phosphate group), while the complementary strand has 3'->5' polarity (ending in a 3'-hydroxyl group).\n- **Diameter:** The double helix maintains a constant uniform width of **20 \u00c5 (2.0 nm)** along its entire length.\n- **Helical Pitch and Rise:**\n  * Each complete 360-degree helical turn spans a distance of **34 \u00c5 (3.4 nm)**.\n  * Each turn contains approximately **10.0 to 10.5 base pairs** in aqueous solution.\n  * The vertical distance (rise) between adjacent base pairs along the axis is **3.4 \u00c5 (0.34 nm)**.\n  * The helical rotation angle between adjacent base pairs is ~36 degrees (360 / 10).\n\n2. Spatial Organization and Base Pairing Geometry:\n- **Sugar-Phosphate Backbone:** The hydrophilic deoxyribose sugars linked by alternating 3',5'-phosphodiester bonds form the structural outer scaffold, facing the aqueous cellular environment.\n- **Inward-Facing Nitrogenous Bases:** The hydrophobic planar purine and pyrimidine rings point inward toward the helical axis, stacked horizontally like staircase steps perpendicular to the long axis.\n- **Complementary Base Pairing:**\n  * Adenine (purine) pairs strictly with Thymine (pyrimidine) via **two hydrogen bonds**: `A = T` (one between N1 of A and N3 of T; one between C6 amino of A and C4 keto of T).\n  * Guanine (purine) pairs strictly with Cytosine (pyrimidine) via **three hydrogen bonds**: `G === C` (between C6 keto of G and C4 amino of C; N1 of G and N3 of C; C2 amino of G and C2 keto of C).\n- This purine-pyrimidine pairing geometry ensures that the width of an A-T pair (10.85 \u00c5) is virtually identical to that of a G-C pair (10.85 \u00c5), preserving the uniform 20 \u00c5 diameter.\n\n3. Major and Minor Grooves:\nBecause the glycosidic bonds connecting the bases to the deoxyribose sugars are not positioned directly opposite each other (forming an angle of 120 and 240 degrees), the helical twisting generates two asymmetrical surface indentations:\n- **Major Groove:** Wide (22 \u00c5) and deep (8.5 \u00c5). Displays distinct hydrogen bonding donor/acceptor patterns that allow sequence-specific regulatory proteins (transcription factors, zinc fingers, restriction enzymes) to recognize specific base sequences without unwinding the helix.\n- **Minor Groove:** Narrow (12 \u00c5) and shallow (7.5 \u00c5).\n\n4. Non-Covalent Forces Stabilizing the Double Helix:\n- **Hydrogen Bonding:** Billions of individual hydrogen bonds between complementary base pairs provide specificity.\n- **Base-Stacking Interactions (Hydrophobic and Van der Waals forces):** Planar aromatic purine and pyrimidine rings stack closely on top of each other (3.4 \u00c5 spacing). Pi-electron cloud interactions and hydrophobic exclusion of water contribute >80% of the total free energy stabilizing the duplex.\n- **Electrostatic Interactions:** Positively charged divalent cations (Mg2+) and basic histone/polyamines neutralize the negative charges of phosphate groups, preventing repulsive strand separation.",
      "outlinePoints": [
        "Helical geometry: right-handed, antiparallel strands, uniform 20 \u00c5 diameter",
        "Helical dimensions: 34 \u00c5 pitch, 10.5 base pairs per turn, 3.4 \u00c5 rise per base pair",
        "Complementary base pairing geometry: A=T (2 bonds) and G===C (3 bonds)",
        "Asymmetrical geometry creating Major Groove (22 \u00c5) and Minor Groove (12 \u00c5)",
        "Thermodynamic stabilization forces: hydrogen bonding, base-stacking pi interactions, and ionic shielding"
      ]
    },
    {
      "id": "GPB203-U5-SUB11",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "questionText": "Explain the Meselson-Stahl Experiment (1958). Contrast the Conservative, Semi-Conservative, and Dispersive models of replication, and show the isotopic density gradient patterns across Generations 0, 1, 2, and 3.",
      "modelAnswer": "When Watson and Crick proposed the double helix in 1953, they famously noted: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.' Three alternative hypotheses were proposed for DNA replication:\n- **Semi-Conservative Model (Watson & Crick):** Each parental strand acts as a template for synthesizing a new complementary daughter strand. Each replicated duplex contains one intact conserved parental strand and one newly synthesized strand.\n- **Conservative Model:** The parental duplex remains completely intact, directing the synthesis of an entirely new double-stranded DNA molecule.\n- **Dispersive Model:** The parental DNA breaks into fragments, and parental and newly synthesized segments are dispersed randomly into all daughter strands.\n\nThe Meselson-Stahl Experiment (1958):\nMatthew Meselson and Franklin Stahl designed a landmark experiment using heavy isotope density labeling to definitively test these models.\n\n1. Experimental Protocol:\n- *Escherichia coli* cells were grown for over 14 generations in a minimal medium containing **heavy nitrogen (15NH4Cl)** as the sole nitrogen source. Heavy 15N was uniformly incorporated into all purines and pyrimidines, producing high-density 'heavy' DNA.\n- Cells were harvested, washed, and transferred into a medium containing normal **light nitrogen (14NH4Cl)**.\n- Cell samples were harvested at precise generation intervals (0, 1.0, 2.0, 3.0 generations) synchronized with the 20-minute *E. coli* cell cycle.\n- DNA was extracted and analyzed using **Isopycnic Cesium Chloride (CsCl) Density Gradient Centrifugation** at 45,000 rpm for 20 hours. Under high centrifugal force, CsCl forms a continuous density gradient; DNA molecules migrate until their buoyant density matches the CsCl solution, forming sharp UV-absorbing bands.\n\n2. Results and Rejection of Alternative Hypotheses:\n\nA. Generation 0 (Prior to transfer to 14N):\n- Result: A single sharp band at the bottom of the gradient corresponding to **100% Heavy DNA (15N-15N)**.\n\nB. Generation 1.0 (After one round of replication in 14N):\n- Result: A single sharp band positioned exactly halfway between heavy and light positions, corresponding to **100% Intermediate Hybrid DNA (15N-14N)**.\n- **Rejection of Conservative Model:** The conservative model predicted two distinct bands (50% heavy 15N-15N and 50% light 14N-14N). The complete absence of heavy DNA and presence of 100% hybrid DNA definitively disproved the conservative model!\n\nC. Generation 2.0 (After two rounds of replication in 14N):\n- Result: Exactly two bands of equal intensity appeared: **50% Light DNA (14N-14N)** and **50% Hybrid DNA (15N-14N)**.\n- **Rejection of Dispersive Model:** The dispersive model predicted that hybrid DNA would continue to dilute uniformly into a single progressively lighter band across generations. The appearance of a distinct, pure light band (14N-14N) alongside the persistent hybrid band definitively disproved the dispersive model!\n\nD. Generation 3.0:\n- Result: Two bands: **75% Light DNA (14N-14N)** and **25% Hybrid DNA (15N-14N)**.\nThe proportion of light DNA expanded according to `1 - (1/2)^(n-1)`.\n\nConclusion:\nThe Meselson-Stahl experiment provided unequivocal biophysical proof that DNA replicates via the **Semi-Conservative Mechanism**.",
      "outlinePoints": [
        "Definitions of the three competing replication models (conservative, semi-conservative, dispersive)",
        "Experimental design: 15N heavy labeling and transfer to 14N light medium in E. coli",
        "Isopycnic CsCl density gradient equilibrium centrifugation technique",
        "Analysis of Generation 1 (100% hybrid) disproving conservative replication",
        "Analysis of Generation 2 (50% light, 50% hybrid) disproving dispersive replication",
        "Generation 3 ratios and conclusion validating semi-conservative replication"
      ]
    },
    {
      "id": "GPB203-U5-SUB12",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "questionText": "Explain the molecular mechanisms of Transcription and Translation in prokaryotes. Detail the role of RNA Polymerase, sigma factor, tRNA charging, ribosome binding sites, and translational elongation.",
      "modelAnswer": "The Central Dogma of Molecular Biology (Francis Crick, 1958) describes the directional flow of genetic information: `DNA --[Transcription]--> mRNA --[Translation]--> Polypeptide`.\n\n1. Molecular Mechanism of Transcription in Prokaryotes:\nTranscription is catalyzed by a multi-subunit **RNA Polymerase holoenzyme** (`alpha_2 beta beta' omega sigma`).\n- **Initiation:**\n  * The core enzyme (`alpha_2 beta beta' omega`) possesses catalytic activity but cannot recognize promoters.\n  * The **sigma factor (sigma-70)** associates with the core enzyme, directing it to bind specifically to promoter sequences at **-35 (TTGACA)** and **-10 (TATAAT / Pribnow Box)** upstream of the transcription start site (+1).\n  * RNA polymerase unwinds ~14 base pairs of DNA, forming an open promoter complex.\n- **Elongation:**\n  * The sigma factor dissociates after 8\u201310 nucleotides are synthesized.\n  * The core enzyme moves along the DNA template strand in the 3'->5' direction, synthesizing complementary mRNA in the **5'->3' direction** using ribonucleoside triphosphates (rNTPs) at ~50 nucleotides/second.\n- **Termination:**\n  * **Rho-Independent (Intrinsic) Termination:** Transcribed GC-rich inverted repeats form a stable hairpin stem-loop structure, followed by a run of 6\u20138 uracil residues. The weak rU-dA hybrid causes the RNA transcript and polymerase to dissociate.\n  * **Rho-Dependent Termination:** The hexameric ATP-dependent **Rho protein** binds to an unprinted cytosine-rich *rut* site on nascent mRNA, translocates toward the polymerase, and unwinds the RNA-DNA hybrid.\n\n2. Molecular Mechanism of Translation:\nTranslation translates mRNA codons into a functional polypeptide in the cytoplasm:\n- **Amino Acid Activation and tRNA Charging:**\n  Aminoacyl-tRNA synthetase binds a specific amino acid and ATP to form aminoacyl-AMP, then transfers the amino acid to the 3'-CCA end of its cognate tRNA, forming charged **aminoacyl-tRNA**.\n- **Phase I: Translation Initiation:**\n  * The 30S small ribosomal subunit, guided by Initiation Factors (IF1, IF2-GTP, IF3), binds to the mRNA via base pairing between its 16S rRNA and the **Shine-Dalgarno sequence (AGGAGG)** located 8 bases upstream of the AUG start codon.\n  * Initiator charged tRNA (**fMet-tRNAfMet**) binds to the AUG codon positioned at the peptidyl (**P**) site.\n  * The 50S large ribosomal subunit binds, hydrolyzing GTP to assemble the complete 70S initiation complex.\n- **Phase II: Translation Elongation:**\n  Operates as a three-step cycle mediated by Elongation Factors:\n  1. Codon Recognition: An elongation factor **EF-Tu-GTP** delivers the next cognate charged aminoacyl-tRNA into the empty aminoacyl (**A**) site.\n  2. Peptide Bond Formation: The **Peptidyl Transferase** catalytic center (23S rRNA ribozyme) transfers the peptide chain from the P-site tRNA to the amino acid at the A-site, forming a peptide bond.\n  3. Translocation: **EF-G-GTP** hydrolyzes GTP to shift the ribosome exactly one triplet codon forward (5'->3'). The uncharged tRNA moves to the exit (**E**) site and dissociates; the peptidyl-tRNA shifts from A to P site, clearing the A-site for the next codon.\n- **Phase III: Translation Termination:**\n  When a stop codon (UAA, UAG, UGA) enters the A-site, it is recognized by **Release Factors (RF1 or RF2)**. RF3 stimulates hydrolysis of the ester bond connecting the completed polypeptide to the P-site tRNA, releasing the protein. Ribosome recycling factors (RRF) disassemble the 70S ribosome into 30S and 50S subunits.",
      "outlinePoints": [
        "Central Dogma flow of genetic information: DNA -> RNA -> Protein",
        "Prokaryotic transcription initiation: promoter recognition by sigma-70 holoenzyme",
        "Transcription elongation and Rho-independent vs Rho-dependent termination",
        "Aminoacyl-tRNA synthetase activation and tRNA charging",
        "Translation initiation: 16S rRNA binding to Shine-Dalgarno sequence and fMet-tRNA binding",
        "Translation elongation cycle: EF-Tu codon delivery, 23S rRNA peptidyl transferase, and EF-G translocation",
        "Translation termination via stop codons and Release Factors"
      ]
    },
    {
      "id": "GPB203-U5-SUB13",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "questionText": "Explain Francis Crick's Wobble Hypothesis (1966). Detail the stereochemical rules of wobble base pairing, explain the role of Inosine, and explain why wobble allows 31 tRNAs to translate all 61 sense codons.",
      "modelAnswer": "In 1966, Francis Crick formulated the **Wobble Hypothesis** to resolve an apparent paradox in protein synthesis: while there are 61 sense codons specifying 20 amino acids, most eukaryotic and bacterial cells contain significantly fewer than 61 distinct tRNA species (typically 30\u201345 tRNAs).\n\n1. The Biological Paradox and Crick's Solution:\nIf strict Watson-Crick base pairing (*A=U* and *G===C*) were required across all three codon positions, a cell would require 61 distinct tRNAs with unique anticodons.\nCrick realized that:\n- Pairing between the first two positions of the mRNA codon (5' base and middle base) and the third and second positions of the tRNA anticodon (3' and middle) is strictly Watson-Crick and geometrically rigid, ensuring translational accuracy.\n- However, at the **third position of the mRNA codon (3' end)** and the **first position of the tRNA anticodon (5' end)**, the spatial constraints of the ribosomal decoding center are relaxed ('wobble'). This allows non-standard, flexible hydrogen bonding between certain bases.\n\n2. Stereochemical Rules of Wobble Base Pairing:\nThe base present at the **5' position of the tRNA anticodon** determines whether the tRNA can recognize one, two, or three different mRNA codons:\n\nA. When the 5' Anticodon Base is Cytosine (C) or Adenine (A):\n- No wobble is possible; strict standard pairing only:\n  * 5' Anticodon **C** pairs strictly with 3' Codon **G** (1 codon recognized).\n  * 5' Anticodon **A** pairs strictly with 3' Codon **U** (1 codon recognized).\n\nB. When the 5' Anticodon Base is Guanine (G):\n- Conformation allows two alternative pairings:\n  * 5' Anticodon **G** pairs with 3' Codon **C** (standard) OR 3' Codon **U** (wobble pair).\n  * Result: A single tRNA with 5'-G can read **two codons** ending in C or U.\n\nC. When the 5' Anticodon Base is Uracil (U):\n- Can pair with two purines:\n  * 5' Anticodon **U** pairs with 3' Codon **A** (standard) OR 3' Codon **G** (wobble pair).\n  * Result: A single tRNA with 5'-U can read **two codons** ending in A or G.\n\nD. When the 5' Anticodon Base is Inosine (I):\n- Inosine is a modified deaminated purine base (hypoxanthine nucleoside) formed post-transcriptionally by tRNA-adenosine deaminase.\n- Inosine possesses maximum spatial wobble flexibility and can form stable hydrogen bonds with **three different bases**:\n  * 5' Anticodon **I** pairs with 3' Codon **U**, **C**, OR **A**!\n  * Result: A single tRNA carrying inosine at its 5' position can recognize **three distinct synonymous codons**!\n\n3. Evolutionary and Functional Significance:\n- **Economy of Translational Machinery:** By allowing one tRNA species to decode up to three codons, a cell can translate all 61 sense codons using as few as **31 different tRNA species** (or 22 in mitochondria).\n- **Speed of Translation:** Wobble pairing facilitates rapid dissociation of the tRNA anticodon from the mRNA codon after peptide bond formation, accelerating elongation rates.\n- **Protection Against Deleterious Mutations:** Because synonymous codons for an amino acid usually differ only at the third wobble position, silent transition mutations do not alter protein primary structure.",
      "outlinePoints": [
        "The biological paradox: 61 sense codons vs ~31 to 45 tRNA species",
        "Rigid Watson-Crick pairing at codon positions 1 and 2 vs flexible wobble at position 3",
        "Complete table of 5' anticodon bases and their allowable 3' codon partner bases",
        "Role of Inosine (I) pairing with U, C, and A, decoding three codons with one tRNA",
        "Evolutionary advantages: economy of tRNAs, translation speed, and mutational buffering"
      ]
    },
    {
      "id": "GPB203-U5-SUB14",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "questionText": "Discuss the molecular biology of Cytoplasmic Male Sterility (CMS) in plants. Detail the Texas CMS (T-CMS) system in maize and its interaction with the nuclear restorer genes Rf1 and Rf2.",
      "modelAnswer": "Cytoplasmic Male Sterility (CMS) is a maternally inherited trait in higher plants characterized by the inability to shed functional pollen while vegetative growth and female fertility remain fully normal.\n\n1. Molecular Etiology of CMS in Plant Mitochondria:\nPlant mitochondrial genomes (chondriomes) are unusually large (200 to 2,500 kb) and contain abundant repeated DNA sequences that undergo frequent non-homologous homologous recombination.\n- These recombination events generate **chimeric open reading frames (ORFs)**\u2014novel hybrid genes fusing portions of standard mitochondrial genes (such as ATP synthase, cytochrome oxidase) with uncharacterized DNA segments.\n- These chimeric ORFs encode cytotoxic transmembrane proteins that specifically disrupt mitochondrial membrane integrity during the energy-demanding development of the anther tapetum and pollen microspores, triggering premature tapetal programmed cell death (apoptosis) and pollen abortion.\n\n2. The Texas CMS (T-CMS) Paradigm in Maize:\nTexas male-sterile cytoplasm (T-CMS) was widely deployed across the United States in the 1960s, occupying over 85% of hybrid maize acreage.\n- **The Chimeric Gene urf13:**\n  Molecular analysis revealed that T-cytoplasm mitochondria carry a unique chimeric gene called **T-urf13** (arising from complex recombinations involving the *rrn26* ribosomal RNA gene and *atp6*).\n- **The URF13 Protein:**\n  *T-urf13* encodes a 13-kDa hydrophobic polypeptide (URF13) that inserts into the inner mitochondrial membrane, forming oligomeric pore-like channels.\n- **Pollen Abortion:**\n  During anther development, tapetal cells undergo a 40-fold increase in mitochondrial number to fuel pollen wall synthesis. The accumulation of URF13 pores causes mitochondrial uncoupling, loss of membrane potential, and cellular collapse, resulting in complete male sterility.\n- **The 1970 Southern Corn Leaf Blight Epidemic:**\n  The fungus *Bipolaris maydis* (race T) produces a specific polyketide host-selective toxin (**T-toxin**). The fungal T-toxin binds specifically to the URF13 protein pores, forcing them permanently open and causing massive electrolyte leakage, causing severe blighting of leaves and ears. This demonstrated the immense vulnerability of monocultured cytoplasmic uniformity.\n\n3. Nuclear Restoration of Fertility (Rf1 and Rf2 Interaction):\nFertility in T-CMS maize is restored by two dominant nuclear genes: **Rf1** (Chromosome 3) and **Rf2** (Chromosome 9):\n- **Rf1 (Pentatricopeptide Repeat Protein - PPR):**\n  *Rf1* encodes a mitochondrial-targeted **Pentatricopeptide Repeat (PPR)** RNA-binding protein. The RF1 protein binds specifically to the chimeric *T-urf13* mRNA transcript, directing endonucleolytic cleavage of the mRNA, which prevents translation of the toxic URF13 protein.\n- **Rf2 (Aldehyde Dehydrogenase - ALDH):**\n  *Rf2* encodes a functional mitochondrial aldehyde dehydrogenase that detoxifies volatile aldehydes produced during anther metabolic bursts.\n- When both dominant alleles are present in the F1 hybrid (`T-cytoplasm Rf1- Rf2-`), the accumulation of URF13 is suppressed, mitochondrial respiration proceeds normally, and 100% normal pollen fertility is restored.",
      "outlinePoints": [
        "Origin of CMS via mitochondrial genome rearrangements producing chimeric ORFs",
        "Cytotoxic tapetal membrane disruption causing pollen microspore abortion",
        "Detailed architecture of the T-urf13 chimeric gene in Texas maize cytoplasm",
        "Mechanism of URF13 protein pore formation and tapetal collapse",
        "Bipolaris maydis T-toxin interaction and the 1970 corn blight disaster",
        "Molecular mechanism of nuclear restorer genes: Rf1 (PPR protein mRNA cleavage) and Rf2 (aldehyde dehydrogenase)"
      ]
    },
    {
      "id": "GPB203-U5-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
      "questionText": "Compare True Cytoplasmic Inheritance with Maternal Effects.",
      "modelAnswer": "True Cytoplasmic Inheritance and Maternal Effects both produce maternal transmission patterns, but they are governed by fundamentally different genetic systems:\n\n1. Genetic Determinant:\n- True Cytoplasmic Inheritance: Governed by autonomous **organellar DNA** residing in the cytoplasm (chloroplast DNA / plastome or mitochondrial DNA / chondriome).\n- Maternal Effect: Governed strictly by standard **nuclear genes** residing on chromosomes in the mother's nucleus (*not* cytoplasmic organellar DNA).\n\n2. Mechanism of Transmission:\n- Cytoplasmic Inheritance: Transmitted through the physical inheritance of cytoplasmic organelles via the female ovum (which provides all cytoplasm, while the sperm contributes none).\n- Maternal Effect: Mediated by preformed chemical substances (proteins, mRNAs, or morphogens) synthesized by the mother's nuclear genome during oogenesis and deposited into the egg cytoplasm prior to fertilization.\n\n3. Persistence Across Successive Generations:\n- Cytoplasmic Inheritance: Persists permanently across all subsequent generations as long as the maternal lineage continues; unaffected by nuclear backcrossing.\n- Maternal Effect: Transient and non-permanent. Segregates in normal Mendelian proportions in subsequent generations, but the phenotypic expression is **delayed by exactly one generation**.\n\n4. Representative Examples:\n- Cytoplasmic Inheritance: Leaf variegation in *Mirabilis jalapa* (cpDNA); Yeast petite mutants (mtDNA); Cytoplasmic Male Sterility in maize and rice.\n- Maternal Effect: Shell coiling in *Limnaea peregra*; anterior-posterior morphogen gradients (*bicoid* mRNA) in *Drosophila* embryos.",
      "outlinePoints": [
        "Genetic basis: organellar DNA (cpDNA/mtDNA) vs maternal nuclear genes",
        "Mechanism: physical organelle transmission vs oocyte mRNA/protein predetermination",
        "Persistence: permanent maternal continuity vs delayed one-generation Mendelian segregation",
        "Classic examples for each category"
      ]
    },
    {
      "id": "GPB203-U5-SUB16",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "questionText": "Differentiate between Cytoplasmic Male Sterility (CMS) and Genetic Male Sterility (GMS).",
      "modelAnswer": "Cytoplasmic Male Sterility (CMS) and Genetic Male Sterility (GMS) are two alternative male sterility mechanisms utilized in crop hybrid seed production:\n\n1. Genetic Control:\n- Cytoplasmic Male Sterility (CMS): Governed by mutated, chimeric genes residing in the **mitochondrial genome (extranuclear mtDNA)**.\n- Genetic Male Sterility (GMS): Governed strictly by **nuclear genes** (typically a single recessive Mendelian gene, *ms ms*).\n\n2. Mode of Inheritance:\n- CMS: Maternally transmitted. An A-line mother (*S rf rf*) crossed with a maintainer B-line (*N rf rf*) produces 100% male sterile progeny.\n- GMS: Follows standard Mendelian segregation. Crossing a male sterile plant (*ms ms*) with a heterozygous maintainer (*Ms ms*) produces a segregating 1 fertile (*Ms ms*) : 1 sterile (*ms ms*) progeny ratio.\n\n3. Maintenance of the Male Sterile Line:\n- CMS: Maintained easily and purely (100% male sterile seed harvested) by pollinating the A-line with the maintainer B-line.\n- GMS: Cannot be maintained as a 100% pure male sterile stand; seed harvested from *ms ms x Ms ms* always contains 50% fertile plants that must be manually rogued out in the field at flowering before pollen sheds.\n\n4. Fertility Restoration in Commercial Hybrids:\n- CMS: Requires a specialized Restorer line (R-line) carrying dominant nuclear fertility restorer genes (*Rf Rf*) to ensure the farmer's grain crop is fertile.\n- GMS: Any normal inbred line carrying the wild-type dominant allele (*Ms Ms*) restores fertility in the F1 hybrid (*Ms ms*).\n\n5. Crop Utility:\n- CMS: Ideal for grain crops (rice, pearl millet, sorghum, maize).\n- GMS: Preferred in crops where vegetative or fruit parts are harvested (chilli, tomato, pigeonpea) where pollen fertility is non-essential, or in crops easily rogued.",
      "outlinePoints": [
        "Genetic location: mitochondrial genome vs nuclear chromosomal genes",
        "Inheritance: maternal transmission vs standard Mendelian segregation",
        "Maintenance: 100% pure A-line harvest vs 50:50 segregating mixture requiring roguing",
        "Restoration requirements in commercial hybrids (specialized R-line vs any wild-type inbred)",
        "Crop adoption preferences"
      ]
    },
    {
      "id": "GPB203-U5-SUB17",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication",
      "questionText": "Compare B-DNA, A-DNA, and Z-DNA in terms of helical handedness, diameter, base pairs per turn, and physiological occurrence.",
      "modelAnswer": "DNA can adopt distinct structural conformations depending on hydration, salt concentration, and nucleotide sequence:\n\n1. Helical Handedness:\n- B-DNA: Right-handed double helix.\n- A-DNA: Right-handed double helix.\n- Z-DNA: **Left-handed** double helix (exhibits a zigzag phosphate backbone).\n\n2. Helical Diameter:\n- B-DNA: 20 \u00c5 (2.0 nm) - Intermediate width.\n- A-DNA: 26 \u00c5 (2.6 nm) - Short, wide, compact cylinder.\n- Z-DNA: 18 \u00c5 (1.8 nm) - Elongated, slim, narrow cylinder.\n\n3. Base Pairs per Complete Turn and Pitch:\n- B-DNA: ~10.5 bp per turn; Pitch = 34 \u00c5; Rise per bp = 3.4 \u00c5.\n- A-DNA: 11 bp per turn; Pitch = 28 \u00c5; Rise per bp = 2.6 \u00c5 (bases strongly tilted 20 degrees relative to axis).\n- Z-DNA: 12 bp per turn (6 repeating dinucleotide dimers); Pitch = 45 \u00c5; Rise per bp = 3.7 \u00c5.\n\n4. Major and Minor Groove Geometry:\n- B-DNA: Wide major groove and narrow minor groove.\n- A-DNA: Extremely deep, narrow major groove and broad, shallow minor groove.\n- Z-DNA: Flattened, non-distinct major groove and extremely deep, narrow minor groove.\n\n5. Physiological Occurrence and Biological Role:\n- B-DNA: The standard, predominant conformation in living cells under physiological high hydration (>92% relative humidity) and neutral ionic strength.\n- A-DNA: Found under dehydrating conditions (<75% relative humidity), in double-stranded RNA duplexes, and in RNA-DNA hybrid intermediates during transcription.\n- Z-DNA: Formed dynamically in vivo in alternating purine-pyrimidine tracts (e.g., *poly(dG-dC)*) under high salt or negative supercoiling; involved in transcriptional regulation and viral pathogenesis.",
      "outlinePoints": [
        "Handedness: B-DNA (right), A-DNA (right), Z-DNA (left-handed zigzag)",
        "Helical diameter: B (20 \u00c5), A (26 \u00c5), Z (18 \u00c5)",
        "Base pairs per turn and pitch: B (10.5 bp, 34 \u00c5), A (11 bp, 28 \u00c5), Z (12 bp, 45 \u00c5)",
        "Groove morphology comparison",
        "Biological contexts: standard cellular state (B) vs RNA hybrids (A) vs transient supercoiled tracts (Z)"
      ]
    },
    {
      "id": "GPB203-U5-SUB18",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "questionText": "A hybrid rice breeding program uses the Wild Abortive (WA) Cytoplasmic-Genetic Male Sterility (CGMS) system. A plant breeder makes the following experimental crosses: Cross 1: A-line x B-line. Cross 2: A-line x R-line. Cross 3: (F1 of Cross 2) selfed. Cross 4: (F1 of Cross 2) test-crossed with B-line. (a) Provide complete genotypic and phenotypic descriptions for the parental lines and progeny of Crosses 1, 2, 3, and 4. (b) What proportion of fertile plants appears in Cross 3 and Cross 4? (c) Why can commercial farmers never save and replant the harvested F2 grain of a hybrid rice crop?",
      "modelAnswer": "Genetic Analysis of the Three-Line Hybrid Rice CGMS System:\n\nGenetic Definitions:\n- Cytoplasm: *S* = Sterile (Wild Abortive) cytoplasm; *N* = Normal fertile cytoplasm.\n- Nuclear Restorer Gene: Dominant *Rf* restores male fertility; recessive *rf* maintains sterility.\n- Parental Line Genotypes:\n  * A-line (Female seed parent): `S rf rf` (Male sterile, female fertile).\n  * B-line (Maintainer line): `N rf rf` (Male fertile, female fertile).\n  * R-line (Restorer line): `N Rf Rf` (Male fertile, female fertile).\n\n(a) Detailed Analysis of Crosses:\n\nCross 1: A-line x B-line (A-line Seed Multiplication):\n- Female: `S rf rf` x Male: `N rf rf`\n- Progeny Genotype: **100% S rf rf**\n- Phenotype: **100% Male Sterile Plants**.\n- Function: Maintains and multiplies pure seed of the female A-line.\n\nCross 2: A-line x R-line (Commercial F1 Hybrid Seed Production):\n- Female: `S rf rf` x Male: `N Rf Rf`\n- Female gamete: *S rf*; Male gamete: *N Rf*\n- Progeny Genotype: **100% S Rf rf (F1 Commercial Hybrid)**\n- Phenotype: **100% Fully Fertile Plants** (the single dominant *Rf* allele overrides the sterile *S* cytoplasm).\n- Function: This is the high-yielding commercial hybrid seed sold to farmers for grain production.\n\nCross 3: Selfing the F1 Commercial Hybrid (F1 x F1):\n- Cross: `S Rf rf` x `S Rf rf`\n- Maternal cytoplasm is *S* across all progeny.\n- Nuclear alleles segregate in standard Mendelian monohybrid fashion:\n  * 1/4 *Rf Rf* (Homozygous dominant) -> Genotype: `S Rf Rf` (Fertile)\n  * 2/4 *Rf rf* (Heterozygous) -> Genotype: `S Rf rf` (Fertile)\n  * 1/4 *rf rf* (Homozygous recessive) -> Genotype: `S rf rf` (Male Sterile!)\n- Phenotypic Outcome: **3/4 (75%) Fertile Plants : 1/4 (25%) Male Sterile Plants**.\n\nCross 4: Test Crossing the F1 Hybrid with B-line:\n- Cross: F1 Hybrid female (`S Rf rf`) x B-line male (`N rf rf`)\n- Maternal gametes: 1/2 *S Rf* and 1/2 *S rf*. Paternal gamete: *N rf*.\n- Progeny Genotypes:\n  * 50% `S Rf rf` -> Male Fertile\n  * 50% `S rf rf` -> Male Sterile\n- Phenotypic Outcome: **1 Fertile : 1 Male Sterile (50% Fertile)**.\n\n(b) Summary Proportions:\n- Cross 3 (F2 generation): **75% Fertile : 25% Sterile**.\n- Cross 4 (Test cross): **50% Fertile : 50% Sterile**.\n\n(c) Why Farmers Can NEVER Replant Saved F2 Hybrid Seed:\nIf a farmer saves grain harvested from a commercial F1 hybrid field and replants it in the next season:\n1. Severe Genetic Segregation and Sterility: Exactly **25% (one out of every four plants) of the F2 crop will be completely male sterile (*S rf rf*)**, producing empty, chaffy, grainless panicles, resulting in an immediate 25% minimum yield loss!\n2. Loss of Heterosis (Hybrid Vigor): The remaining 75% fertile plants segregate widely for height, maturity date, tillering, and grain quality, resulting in severe inbreeding depression and uneven ripening.\nTherefore, farmers must purchase certified F1 hybrid seed fresh every single crop season.",
      "outlinePoints": [
        "Genotypic definitions of A-line (S rf rf), B-line (N rf rf), and R-line (N Rf Rf)",
        "Cross 1 derivation (100% male sterile A-line maintenance)",
        "Cross 2 derivation (100% fertile commercial F1 hybrid S Rf rf)",
        "Cross 3 derivation showing 75% fertile : 25% sterile F2 segregation",
        "Cross 4 derivation showing 1:1 test cross segregation",
        "Explanation of 25% sterile panicles and inbreeding depression preventing farmers from saving F2 seed"
      ]
    },
    {
      "id": "GPB203-U5-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms",
      "questionText": "A double-stranded DNA coding fragment from a bacterial crop pathogen has the following sequence: 5'- ATG GCA TTC CCT AAG TGA -3' (Coding / Non-Template strand) and 3'- TAC CGT AAG GGA TTC ACT -5' (Template strand). (a) Write the sequence and polarity of the transcribed mRNA. (b) Deduce the amino acid sequence using standard genetic code assignments: AUG = Met, GCA = Ala, UUC = Phe, CCU = Pro, AAG = Lys, UGA = Stop. (c) Predict the phenotypic consequence of an induced transition mutation altering the 6th nucleotide (A to G) in the coding strand. (d) Predict the phenotypic consequence of a frameshift deletion of the 4th nucleotide (G) in the coding strand.",
      "modelAnswer": "Step-by-Step Molecular Problem Breakdown:\n\nGiven DNA Duplex:\n- Coding (Sense) Strand:    `5'- ATG GCA TTC CCT AAG TGA -3'`\n- Template (Antisense) Strand: `3'- TAC CGT AAG GGA TTC ACT -5'`\n\n(a) Sequence and Polarity of Transcribed mRNA:\nRNA Polymerase transcribes using the Template strand (3'->5') to synthesize mRNA complementary to the template and identical to the coding strand (replacing Thymine with Uracil):\n`mRNA: 5'- AUG GCA UUC CCU AAG UGA -3'`\n\n(b) Deduction of Polypeptide Amino Acid Sequence:\nReading codons sequentially from 5' to 3':\n- Codon 1: `AUG` -> **Methionine (Met)** (N-terminal amino acid)\n- Codon 2: `GCA` -> **Alanine (Ala)**\n- Codon 3: `UUC` -> **Phenylalanine (Phe)**\n- Codon 4: `CCU` -> **Proline (Pro)**\n- Codon 5: `AAG` -> **Lysine (Lys)**\n- Codon 6: `UGA` -> **Stop Codon** (Translational Termination)\nPrimary Polypeptide Sequence:\n`NH2 - Met - Ala - Phe - Pro - Lys - COOH` (Pentapeptide length).\n\n(c) Effect of Transition Mutation at 6th Nucleotide (A to G in Coding Strand):\n- Original 2nd codon: `GCA` (Alanine).\n- 6th nucleotide is the third base of codon 2: `GCA` -> mutated to `GCG`.\n- Mutated mRNA 2nd codon: `GCG`.\n- Biochemical Outcome: In the genetic code, `GCA`, `GCC`, `GCU`, and `GCG` all specify **Alanine** (code degeneracy / wobble position).\n- Phenotypic Consequence: This is a **Silent (Synonymous) Mutation**. The amino acid sequence remains completely unaltered (`Met - Ala - Phe - Pro - Lys`). The bacterial enzyme maintains 100% normal function and wild-type phenotype.\n\n(d) Effect of Frameshift Deletion of 4th Nucleotide (G Deleted from Coding Strand):\n- Original Coding Strand: `5'- ATG [G]CA TTC CCT AAG TGA -3'`\n- After deletion of nucleotide 4 (G):\n  `5'- ATG CAT TCC CTA AGT GA... -3'`\n- Transcribed mRNA:\n  `5'- AUG CAU UCC CUA AGU GA... -3'`\n- New Triplet Reading Frames:\n  * Codon 1: `AUG` -> **Met**\n  * Codon 2: `CAU` -> **Histidine (His)** (altered from Ala!)\n  * Codon 3: `UCC` -> **Serine (Ser)** (altered from Phe!)\n  * Codon 4: `CUA` -> **Leucine (Leu)** (altered from Pro!)\n  * Codon 5: `AGU` -> **Serine (Ser)** (altered from Lys!)\n  * Codon 6: `GA...` -> Reading frame shift removes the original UGA stop codon. Translation will continue into non-coding regions until an out-of-frame stop codon is encountered.\n- Phenotypic Consequence: This **Frameshift Mutation** causes a complete missense scramble of all amino acids downstream of the lesion, completely destroying tertiary folding and catalytic activity. The resulting mutant pathogen protein is non-functional, leading to a loss-of-function mutant phenotype.",
      "outlinePoints": [
        "Transcription derivation showing mRNA identical to coding strand with U replacing T",
        "Translation deduction showing NH2-Met-Ala-Phe-Pro-Lys-COOH pentapeptide",
        "Analysis of A->G transition showing GCG synonymous silent mutation with zero phenotypic change",
        "Analysis of single-base deletion showing frameshift altering all downstream codons and removing stop codon",
        "Comparison of functional retention in silent mutation vs complete enzymatic inactivation in frameshift"
      ]
    },
    {
      "id": "GPB203-U5-SUB20",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production",
      "contextScenario": "In 1970, the United States suffered the worst agricultural plant disease catastrophe in modern history: Southern Corn Leaf Blight (caused by the fungal pathogen Bipolaris maydis race T). Over 15% of the total US maize crop was wiped out within weeks, causing billions of dollars in losses. Subsequent investigations revealed that >85% of all commercial hybrid maize fields across North America carried identical Texas Cytoplasmic Male Sterility (T-CMS), which was adopted by seed companies because it eliminated the labor cost of manual detasseling.",
      "questionText": "Analyze the historical case study above. (a) Explain the molecular and cellular mechanism that made T-CMS maize uniquely hyper-susceptible to Bipolaris maydis race T. (b) Explain why reliance on a single male-sterile cytoplasm created unprecedented genetic vulnerability. (c) Discuss the lessons learned by international plant breeders and detail modern diversification strategies deployed to prevent similar cytoplasmic monoculture disasters.",
      "modelAnswer": "Case Study Analysis \u2014 The 1970 Southern Corn Leaf Blight Epidemic and T-CMS:\n\n(a) Molecular and Cellular Mechanism of Hyper-Susceptibility:\n- The Texas cytoplasmic male sterility (T-CMS) was caused by a unique, chimeric mitochondrial gene termed **T-urf13** (formed via aberrant mitochondrial recombination).\n- *T-urf13* encodes a 13-kDa hydrophobic protein (URF13) that embeds as a tetramer within the inner mitochondrial membrane, disrupting pollen tapetum development and conferring male sterility.\n- Co-Evolution of the Pathogen (*Bipolaris maydis* Race T):\n  The fungal pathogen evolved a specialized strain (Race T) that synthesizes a deadly family of linear polyketide molecules called **T-toxin**.\n  * In normal (*N*) cytoplasm maize, T-toxin has zero toxicity.\n  * In T-CMS maize, T-toxin binds with extreme stereochemical affinity to the URF13 protein embedded in the mitochondrial membrane.\n  * Toxin binding forces the URF13 channels wide open, collapsing the proton gradient, uncoupling oxidative phosphorylation, and releasing Ca2+ and cytochrome c.\n  * This triggers rapid, catastrophic necrosis and systemic cell death across leaves, stalks, and ears, completely destroying infected plants within days.\n\n(b) Why the Adoption of T-CMS Created Extreme Genetic Vulnerability:\n- Commercial Economic Driver: Hybrid seed production in maize historically required hiring massive labor crews to manually pull tassels (detassel) from female rows before pollen shed. T-CMS eliminated manual detasseling entirely, saving seed companies millions of dollars.\n- **Cytoplasmic Monoculture:** Seed companies universally converted virtually all commercial hybrid parental lines to T-CMS. By 1970, more than **85% of all maize fields in the United States shared the identical T-cytoplasm**.\n- While farmers planted diverse commercial hybrid varieties with different nuclear pedigrees, they all shared **100% identical mitochondrial DNA**. When *Bipolaris maydis* Race T emerged, there were zero cytoplasmic resistance barriers across millions of continuous hectares.\n\n(c) Lessons Learned and Modern Diversification Strategies:\nThe 1970 disaster fundamentally transformed plant breeding policy worldwide, establishing the science of **genetic vulnerability management**:\n1. Prohibition of Cytoplasmic Monocultures: Modern hybrid breeding regulations strictly prohibit relying on a single source of male-sterile cytoplasm. Seed companies are legally required to diversify maternal cytoplasms.\n2. Cytoplasmic Diversification in Hybrid Maize: Replacement of T-cytoplasm with **C-cytoplasm (Charrua)** and **S-cytoplasm (USDA-S)**, which carry different chimeric mitochondrial genes (*atp6* and *pvs*) that are 100% immune to *Bipolaris maydis* T-toxin.\n3. Adoption of Multi-Line Cytoplasms in Rice and Sorghum: Hybrid rice breeding programs in China and India maintain a portfolio of distinct CMS sources: Wild Abortive (WA), Kalinga, Dwarf-Wild (DA), Gambiaca, and Tian-CMS.\n4. Deployment of Alternative Non-CMS Systems: Expansion of **Environment-sensitive Genic Male Sterility (EGMS: TGMS and PGMS)** in two-line hybrid rice and **Genetically Engineered Male Sterility (Barnase-Barstar system)**, which eliminate mitochondrial vulnerability entirely.",
      "outlinePoints": [
        "Molecular interaction between fungal T-toxin and mitochondrial URF13 protein pores",
        "Collapse of mitochondrial membrane potential triggering catastrophic leaf blighting",
        "Economic driver (eliminating detasseling costs) leading to 85% cytoplasmic monoculture",
        "False security of nuclear diversity masking 100% mitochondrial vulnerability",
        "Breeding policy shifts: prohibition of cytoplasmic monocultures and diversification into C and S cytoplasms",
        "Adoption of multi-cytoplasmic breeding in hybrid rice and EGMS two-line systems"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "GPB203-U5-FC01",
      "front": "What is Cytoplasmic Inheritance?",
      "back": "Transmission of characters governed by genes residing in organellar DNA (chloroplasts and mitochondria) through the female gamete.",
      "hint": "Exhibits maternal transmission and reciprocal cross disparity.",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences"
    },
    {
      "id": "GPB203-U5-FC02",
      "front": "What is a Maternal Effect?",
      "back": "Phenotype of offspring is determined by the nuclear genotype of the mother (e.g., shell coiling in Limnaea peregra), not by organellar DNA.",
      "hint": "Mediated by preformed substances in the oocyte.",
      "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences"
    },
    {
      "id": "GPB203-U5-FC03",
      "front": "What did Carl Correns discover in Mirabilis jalapa in 1909?",
      "back": "Discovered maternal chloroplast inheritance; progeny leaf color strictly matched the maternal branch (green, white, or variegated).",
      "hint": "First proof of plastome heredity.",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)"
    },
    {
      "id": "GPB203-U5-FC04",
      "front": "What are Petite mutants in yeast (Saccharomyces cerevisiae)?",
      "back": "Respiratory-deficient mutants lacking functional mitochondrial cytochromes that form tiny colonies growing only by fermentation.",
      "hint": "Discovered by Boris Ephrussi (1949).",
      "syllabusTopic": "Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)"
    },
    {
      "id": "GPB203-U5-FC05",
      "front": "What is Cytoplasmic Male Sterility (CMS) in crops?",
      "back": "Maternally inherited pollen abortion caused by chimeric mitochondrial genes, while female fertility remains normal.",
      "hint": "Used for commercial hybrid seed production.",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production"
    },
    {
      "id": "GPB203-U5-FC06",
      "front": "What are the A, B, and R lines in the CGMS three-line hybrid system?",
      "back": "A-line = male sterile seed parent (S rf rf); B-line = maintainer line (N rf rf); R-line = fertility restorer line (N Rf Rf).",
      "hint": "Produces commercial fertile F1 hybrid (S Rf rf).",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production"
    },
    {
      "id": "GPB203-U5-FC07",
      "front": "What caused the 1970 Southern Corn Leaf Blight disaster in the USA?",
      "back": "Widespread monoculture of Texas CMS maize (T-CMS) carrying mitochondrial urf13, which was hyper-sensitive to Bipolaris maydis T-toxin.",
      "hint": "Over 85% of US maize carried identical T-cytoplasm.",
      "syllabusTopic": "Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production"
    },
    {
      "id": "GPB203-U5-FC08",
      "front": "What did Frederick Griffith discover in 1928?",
      "back": "Discovered the 'Transforming Principle' in Streptococcus pneumoniae; heat-killed virulent S cells transformed avirulent R cells into living S cells.",
      "hint": "Injected pneumococci into mice.",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments"
    },
    {
      "id": "GPB203-U5-FC09",
      "front": "How did Avery, MacLeod, and McCarty (1944) prove DNA was the transforming principle?",
      "back": "Showed that transformation was destroyed by DNase, but unaffected by Protease, RNase, or Lipase.",
      "hint": "First biochemical proof of DNA as genetic material.",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments"
    },
    {
      "id": "GPB203-U5-FC10",
      "front": "What did the Hershey-Chase blender experiment (1952) demonstrate?",
      "back": "Proved DNA is the genetic material in T2 bacteriophage: 32P-labeled DNA entered host E. coli cells, while 35S-labeled protein coats remained outside.",
      "hint": "Used a kitchen Waring blender.",
      "syllabusTopic": "Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments"
    },
    {
      "id": "GPB203-U5-FC11",
      "front": "What are Chargaff's Rules for base composition in double-stranded DNA?",
      "back": "Total Purines = Total Pyrimidines (A+G = T+C); Adenine equals Thymine (A=T) and Guanine equals Cytosine (G=C).",
      "hint": "Erwin Chargaff (1950).",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication"
    },
    {
      "id": "GPB203-U5-FC12",
      "front": "What are the dimensions of the Watson-Crick B-DNA double helix?",
      "back": "Diameter = 20 \u00c5 (2.0 nm); Pitch (turn) = 34 \u00c5 (3.4 nm); ~10.5 base pairs per turn; Rise per base pair = 3.4 \u00c5.",
      "hint": "Published in Nature, April 1953.",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication"
    },
    {
      "id": "GPB203-U5-FC13",
      "front": "How did the Meselson-Stahl experiment (1958) prove semi-conservative replication?",
      "back": "Grew E. coli in 15N then 14N; Gen 1 yielded 100% hybrid intermediate DNA (15N-14N), and Gen 2 yielded 50% light and 50% hybrid DNA on CsCl gradients.",
      "hint": "Disproved conservative and dispersive models.",
      "syllabusTopic": "Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication"
    },
    {
      "id": "GPB203-U5-FC14",
      "front": "What is the universal start codon in protein synthesis?",
      "back": "AUG, which codes for Methionine (N-formylmethionine in prokaryotes).",
      "hint": "Initiates translation in all organisms.",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    },
    {
      "id": "GPB203-U5-FC15",
      "front": "What are the three stop (nonsense) codons in mRNA?",
      "back": "UAA (ochre), UAG (amber), and UGA (opal).",
      "hint": "Signal translational termination.",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    },
    {
      "id": "GPB203-U5-FC16",
      "front": "What does Degeneracy of the genetic code mean?",
      "back": "Multiple synonymous codons specify the same amino acid (e.g., 6 codons for Leucine), buffering against mutations.",
      "hint": "61 sense codons specify 20 amino acids.",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    },
    {
      "id": "GPB203-U5-FC17",
      "front": "What is Francis Crick's Wobble Hypothesis (1966)?",
      "back": "Relaxed non-standard base pairing at the 3' base of mRNA codon and 5' base of tRNA anticodon allows one tRNA to decode multiple codons.",
      "hint": "Inosine (I) can pair with U, C, and A.",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    },
    {
      "id": "GPB203-U5-FC18",
      "front": "What is the Shine-Dalgarno sequence in prokaryotes?",
      "back": "A ribosomal binding site (AGGAGG) on mRNA ~8 bases upstream of AUG that pairs with 16S rRNA to initiate translation.",
      "hint": "Aligns the ribosome at the start codon.",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    },
    {
      "id": "GPB203-U5-FC19",
      "front": "What enzyme catalyzes peptide bond formation during translation?",
      "back": "Peptidyl transferase, a ribozyme activity of the 23S rRNA (prokaryotes) or 28S rRNA (eukaryotes) in the large ribosomal subunit.",
      "hint": "RNA catalytic activity.",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    },
    {
      "id": "GPB203-U5-FC20",
      "front": "What is Reverse Transcription?",
      "back": "RNA-directed DNA synthesis catalyzed by Reverse Transcriptase in retroviruses, modifying Crick's Central Dogma (RNA -> DNA).",
      "hint": "Discovered by Temin and Baltimore (1970).",
      "syllabusTopic": "The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms"
    }
  ]
};
