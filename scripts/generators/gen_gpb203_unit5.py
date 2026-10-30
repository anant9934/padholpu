import json
import os

unit5 = {
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
                            "headers": ["Experiment", "Investigators / Year", "System Used", "Key Findings & Biochemical Proof"],
                            "rows": [
                                ["Bacterial Transformation", "Frederick Griffith (1928)", "*Streptococcus pneumoniae* (Type II-R non-virulent rough vs Type III-S virulent smooth)", "Heat-killed S virulent cells incubated with living R avirulent cells caused R cells to transform into living S encapsulated virulent cells, killing mice. Proved existence of a heat-stable 'Transforming Principle'."],
                                ["Identification of Transforming Principle", "Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944)", "*Streptococcus pneumoniae* in vitro extracts", "Purified transforming principle was treated with Protease (no effect), RNase (no effect), but **DNase (Deoxyribonuclease) completely abolished transforming activity**. Proved DNA is the transforming principle."],
                                ["Bacteriophage Blender Experiment", "Alfred Hershey and Martha Chase (1952)", "Bacteriophage T2 and *Escherichia coli*", "Selectively labeled phage proteins with radioactive Sulfur-35 (35S) and phage DNA with Phosphorus-32 (32P). After infection and agitation in a Waring blender, 32P entered the bacterial pellet while 35S remained in the supernatant. Proved viral DNA enters host cells to direct replication."]
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
                        "content": "1. Two antiparallel polynucleotide chains coiled around a central axis in a right-handed helix (one strand runs 5'->3', the other 3'->5').\n2. Hydrophilic sugar-phosphate backbones face outward, while hydrophobic nitrogenous bases face inward, stacked perpendicular to the helical axis (3.4 Å separation between base pairs).\n3. Complementary base pairing governed by hydrogen bonds: Adenine pairs with Thymine via two hydrogen bonds (*A = T*); Guanine pairs with Cytosine via three hydrogen bonds (*G === C*). Consistent with Chargaff's Rule: `A + G = T + C` and `A/T = 1.0, G/C = 1.0`.\n4. One complete helical turn measures 34 Å (3.4 nm) and contains 10.5 base pairs, with a helical diameter of 20 Å (2.0 nm).\n5. Major groove (22 Å wide) and minor groove (12 Å wide) facilitate sequence-specific binding of regulatory proteins."
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
    "mcqs": [],
    "subjectiveQuestions": [],
    "flashcards": []
}

# ----------------- 60 MCQs -----------------
# 20 Easy, 25 Medium, 15 Hard
mcq_data = [
    # Topic 1: Cytoplasmic inheritance vs maternal effects (10 Qs: 3E, 4M, 3H)
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Easy",
     "What is the most characteristic diagnostic feature of cytoplasmic (extranuclear) inheritance in reciprocal crosses?",
     "Identical 3:1 ratio in both crosses", "Striking disparity between reciprocal crosses, with progeny always resembling the female parent", "Strict patroclinous inheritance", "9:3:3:1 segregation", "B",
     "Because egg cells contribute virtually all cytoplasm and organellar DNA while sperm contributes only a naked nucleus, progeny exhibit maternal inheritance."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Easy",
     "In shell coiling of the freshwater snail Limnaea peregra, which coiling direction is dominant?",
     "Sinistral (left-handed)", "Dextral (right-handed)", "Planispiral", "Uncoiled", "B",
     "Dextral coiling (governed by dominant nuclear allele D) is dominant over sinistral coiling (d)."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Easy",
     "Shell coiling in Limnaea peregra is a classic demonstration of:",
     "Chloroplast inheritance", "Maternal effect (predetermination by maternal nuclear genotype)", "Mitochondrial gene mutation", "Sex-linked inheritance", "B",
     "Limnaea shell coiling is determined by the nuclear genotype of the mother directing spindle orientation during early embryonic cleavage."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Medium",
     "A female snail of genotype Dd (dextral) is crossed with a sinistral male (dd). What phenotype will the progeny exhibit?",
     "50% Dextral, 50% Sinistral", "100% Dextral", "100% Sinistral", "75% Dextral, 25% Sinistral", "B",
     "Because the mother's nuclear genotype is Dd (carrying the dominant D allele), 100% of her offspring will exhibit dextral shell coiling."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Medium",
     "Why do organellar traits (mitochondrial and chloroplast) fail to show classical Mendelian segregation ratios in F2?",
     "Because organellar genomes do not contain nucleotides", "Because organelles undergo non-Mendelian random vegetative segregation (heteroplasmy) during cytokinesis without a mitotic spindle", "Because organelles are destroyed by nucleases", "Because organelles lack ribosomes", "B",
     "Cytoplasmic organelles divide and partition stochastically into daughter cells during cell division without meiotic spindle mechanics."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Medium",
     "Kappa particles in Paramecium aurelia conferring killer trait are an example of:",
     "Nuclear gene interaction", "Cytoplasmic inheritance (endosymbiotic bacteria Caedibacter taeniospiralis)", "Maternal effect", "Translocation", "B",
     "Kappa particles are endosymbiotic cytoplasmic bacteria that produce paramecin toxins, maintained only in the presence of dominant nuclear K genes."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Medium",
     "Iojap inheritance in maize (Zea mays) is unique because:",
     "It is strictly governed by mitochondrial genes", "A recessive nuclear gene (ij/ij) permanently induces irreversible mutations in chloroplast DNA, creating striped leaves", "It is caused by a virulent virus", "It does not inherit through seeds", "B",
     "Marcus Rhoades proved that the nuclear recessive gene ij induces permanent, maternally inherited chloroplast mutations producing green-white striping."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Hard",
     "A sinistral female snail of genotype dd is crossed with a homozygous dextral male (DD). What are the phenotypes of the F1 and F2 generations?",
     "F1 all dextral, F2 all sinistral", "F1 all sinistral, F2 all dextral", "F1 all dextral, F2 3 dextral : 1 sinistral", "F1 all sinistral, F2 1:1", "B",
     "F1 mother is dd -> F1 progeny are 100% sinistral (genotype Dd). When F1 females (Dd) reproduce, their progeny (F2) are 100% dextral!"),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Hard",
     "In maternal effect, when an F1 individual of genotype Dd self-fertilizes, what phenotypic segregation is observed in the F3 generation?",
     "3 Dextral : 1 Sinistral", "100% Dextral", "3 Dextral families : 1 Sinistral family", "1:2:1", "C",
     "F2 genotypes are 1 DD : 2 Dd : 1 dd. In F3, broods from DD and Dd mothers are 100% dextral (3/4 of families), while broods from dd mothers are 100% sinistral (1/4 of families)."),
    ("Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences", "Hard",
     "Heteroplasmy refers to a cellular state where:",
     "Cells contain two nuclei", "A single cell contains a mixed population of both normal and mutant organellar (mitochondrial or chloroplast) genomes", "Cells have two different chromosome numbers", "DNA is mixed with RNA", "B",
     "Heteroplasmy describes the co-existence of genetically distinct organellar genomes within the same eukaryotic cell or tissue."),

    # Topic 2: Chloroplast and mitochondrial genetics (10 Qs: 3E, 4M, 3H)
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Easy",
     "Who first discovered chloroplast inheritance in Mirabilis jalapa (Four o'clock plant) in 1909?",
     "Gregor Mendel", "Carl Correns", "Hugo de Vries", "T. H. Morgan", "B",
     "Carl Correns discovered maternal plastid inheritance while studying variegated branch foliage in Mirabilis jalapa."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Easy",
     "If flowers from a pale white branch of Mirabilis jalapa are pollinated with pollen from a green branch, the progeny will be:",
     "100% Green", "100% Pale White (lethal seedlings)", "50% Green, 50% White", "Variegated", "B",
     "Progeny strictly inherit the plastid phenotype of the female maternal branch; white maternal branches yield 100% white seedlings."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Easy",
     "The circular double-stranded DNA genome present within chloroplasts is termed the:",
     "Plasmid", "Plastome (cpDNA)", "Chondriome", "Ribosome", "B",
     "The chloroplast genetic complement is termed the plastome (cpDNA)."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Medium",
     "Petite mutants in baker's yeast (Saccharomyces cerevisiae) are characterized by:",
     "Resistance to antibiotics", "Deficiency in respiratory cytochromes and inability to grow on non-fermentable carbon sources like glycerol", "Lack of cell wall", "Inability to ferment glucose", "B",
     "Petite mutants lack functional respiratory electron transport chains (cytochromes b, c1, a, a3), forming tiny colonies that grow only by anaerobic fermentation."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Medium",
     "Who discovered petite mutants in yeast and demonstrated their non-Mendelian mitochondrial inheritance?",
     "Boris Ephrussi (1949)", "Jacques Monod", "Carl Correns", "Arthur Kornberg", "A",
     "Boris Ephrussi and colleagues in Paris discovered and characterized segregational, neutral, and suppressive petite mutants in yeast."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Medium",
     "When a Neutral Petite yeast (rho-zero, lacking all mtDNA) is crossed with a wild-type yeast (rho-plus), the meiotic ascospores segregate:",
     "2 normal : 2 petite", "4 normal : 0 petite (100% wild-type)", "0 normal : 4 petite", "3 normal : 1 petite", "B",
     "Wild-type mitochondria are contributed to the diploid zygote, restoring functional respiratory capacity to all four meiotic ascospores."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Medium",
     "In Chlamydomonas reinhardtii, chloroplast resistance to streptomycin (sm-r) is inherited uniparentally through which mating type?",
     "Mating type minus (mt-)", "Mating type plus (mt+)", "Both equally", "Neither", "B",
     "Ruth Sager proved that chloroplast genes in Chlamydomonas are inherited exclusively through the mt+ parent; the mt- chloroplast DNA is degraded."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Hard",
     "Suppressive petite mutants in yeast produce predominantly petite diploid progeny when mated with wild-type because:",
     "Nuclear genes destroy wild-type mitochondria", "Mutant mtDNA has high replication origin density, replicating faster and out-competing wild-type mtDNA", "They produce chemical toxins", "They prevent ascus formation", "B",
     "Suppressive petite mtDNA carries large deletions but retains active replication origins, enabling it to out-replicate wild-type mtDNA molecules."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Hard",
     "According to the Endosymbiotic Theory championed by Lynn Margulis, mitochondria evolved from ancestral:",
     "Cyanobacteria", "Alpha-proteobacteria", "Archaebacteria", "Bacteriophages", "B",
     "Mitochondria originated from engulfed aerobic alpha-proteobacteria, while chloroplasts evolved from photosynthetic cyanobacteria."),
    ("Chloroplast genetics (Mirabilis jalapa leaf variegation) and Mitochondrial genetics (Yeast petite mutants)", "Hard",
     "In human mitochondrial genetics, Leber's Hereditary Optic Neuropathy (LHON) is transmitted strictly through:",
     "Paternal Y-chromosome", "Maternal lineage (affected mothers pass it to 100% of children; affected fathers pass it to 0%)", "X-linked recessive carrier females", "Autosomal dominant inheritance", "B",
     "LHON is caused by mutations in mitochondrial ND genes (complex I) and is inherited strictly through the maternal ovum."),

    # Topic 3: Cytoplasmic Male Sterility (CMS) in crops (10 Qs: 3E, 4M, 3H)
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Easy",
     "Cytoplasmic Male Sterility (CMS) in crop plants is biologically governed by genes residing in the:",
     "Chloroplast genome", "Mitochondrial genome (mtDNA)", "Nuclear chromosomes", "Ribosomal RNA", "B",
     "CMS is caused by chimeric, aberrant open reading frames in mitochondrial DNA that disrupt tapetum development during pollen microsporogenesis."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Easy",
     "In the three-line hybrid seed production system (CGMS), what is the genetic constitution of the A-Line?",
     "Male fertile with normal cytoplasm", "Male sterile line with sterile cytoplasm and recessive maintainer alleles (S rf rf)", "Male fertile restorer line", "Diploid tester", "B",
     "The A-line is the female seed parent carrying sterile cytoplasm (S) and homozygous recessive non-restorer alleles (rf rf)."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Easy",
     "In the CGMS system, which line is crossed with the A-line to maintain and multiply the A-line seed?",
     "Restorer line (R-line)", "Maintainer line (B-line: N rf rf)", "Wild progenitor", "Open pollinated variety", "B",
     "The B-line (maintainer line) has normal cytoplasm (N rf rf); crossing S rf rf x N rf rf yields 100% sterile A-line seed (S rf rf)."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Medium",
     "What is the genetic constitution of the Restorer Line (R-Line) in the three-line hybrid system?",
     "S rf rf", "Carries dominant nuclear fertility restorer alleles (Rf Rf) that override sterile cytoplasm", "N rf rf", "Haploid sterile", "B",
     "The R-line carries dominant nuclear restorer alleles (Rf Rf) that restore pollen fertility in the F1 hybrid crop (S Rf rf)."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Medium",
     "The catastrophic 1970 Southern Corn Leaf Blight epidemic in the USA (caused by Bipolaris maydis) was linked to which CMS cytoplasm?",
     "T-cytoplasm (Texas male-sterile cytoplasm carrying urf13)", "C-cytoplasm", "S-cytoplasm", "WA-cytoplasm", "A",
     "Texas cytoplasm (T-CMS) carried the chimeric mitochondrial gene urf13, which produced a receptor protein sensitive to T-toxin from Bipolaris maydis."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Medium",
     "The Wild Abortive (WA) cytoplasm is the premier source of Cytoplasmic Male Sterility used to develop commercial hybrids in which major cereal?",
     "Wheat", "Hybrid Rice (pioneered by Yuan Longping)", "Barley", "Maize", "B",
     "Yuan Longping utilized the Wild Abortive (WA) cytoplasmic male sterility found in wild rice (Oryza rufipogon) to launch commercial hybrid rice."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Medium",
     "Tift 23A is the landmark cytoplasmic male sterile line that revolutionized hybrid breeding in India for which crop?",
     "Sorghum", "Pearl Millet (Bajra - Pennisetum glaucum)", "Pigeonpea", "Cotton", "B",
     "Tift 23A (developed by Glenn Burton) served as the maternal CMS parent for India's first blockbuster pearl millet hybrids (e.g., HB-1)."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Hard",
     "In two-line hybrid rice breeding, male sterility is conditioned without CMS using:",
     "Chemical emasculation", "Environment-sensitive Genic Male Sterility (EGMS: TGMS and PGMS)", "Radiation-induced nullisomics", "Mechanical detasseling", "B",
     "Two-line hybrid rice uses Thermo-sensitive Genic Male Sterility (TGMS) or Photoperiod-sensitive Genic Male Sterility (PGMS), eliminating B-lines."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Hard",
     "What is the commercial product harvested from a hybrid seed production block where an A-line (S rf rf) is pollinated by an R-line (N Rf Rf)?",
     "Certified B-line seed", "Commercial F1 hybrid seed (Genotype: S Rf rf, fully fertile in farmer fields)", "Inbred foundation seed", "Sterile progeny", "B",
     "The harvested seed is the commercial F1 hybrid (S Rf rf), which develops into fully fertile, heavy grain-yielding plants in farmers' fields."),
    ("Cytoplasmic Male Sterility (CMS) and Cytoplasmic-Genetic Male Sterility (CGMS) in crop hybrid seed production", "Hard",
     "Which mitochondrial chimeric gene is responsible for male sterility in the Wild Abortive (WA) hybrid rice system?",
     "urf13", "WA352 (or orfH79)", "pvs-b", "orf256", "B",
     "The chimeric mitochondrial gene WA352 interacts with nuclear-encoded proteins, causing tapetal programmed cell death and pollen abortion in WA hybrid rice.")
]

# We need 30 more MCQs:
# Topic 4: Experimental proof of DNA as genetic material (10 Qs: 3E, 4M, 3H)
# Topic 5: Watson-Crick DNA structure and replication (10 Qs: 4E, 4M, 2H)
# Topic 6: Genetic code and Central Dogma (10 Qs: 4E, 4M, 2H)

mcq_data_extra = [
    # Topic 4: Experimental proof of DNA as genetic material (10 Qs: 3E, 4M, 3H)
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Easy",
     "Frederick Griffith (1928) discovered the phenomenon of bacterial transformation using which bacterium?",
     "Escherichia coli", "Streptococcus pneumoniae (Pneumococcus)", "Bacillus subtilis", "Salmonella typhimurium", "B",
     "Griffith used virulent smooth (S) and avirulent rough (R) strains of Streptococcus pneumoniae in laboratory mice."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Easy",
     "In Griffith's experiment, which combination of pneumococcal cells injected into mice resulted in pneumonia and death?",
     "Living Type II-R cells alone", "Heat-killed Type III-S cells alone", "Mixture of living Type II-R cells and heat-killed Type III-S cells", "Boiled saline", "C",
     "The harmless living R cells took up genetic material from the dead heat-killed S cells and transformed into deadly living S cells."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Easy",
     "Which enzyme was shown by Avery, MacLeod, and McCarty (1944) to completely destroy the transforming principle?",
     "Protease (trypsin/chymotrypsin)", "RNase", "DNase (Deoxyribonuclease)", "Lipase", "C",
     "Treatment with DNase completely destroyed transforming ability, proving that DNA was the transforming agent."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Medium",
     "In the Hershey-Chase (1952) blender experiment, which radioactive isotope was used to specifically label bacteriophage DNA?",
     "Sulfur-35 (35S)", "Phosphorus-32 (32P)", "Carbon-14 (14C)", "Nitrogen-15 (15N)", "B",
     "DNA contains abundant phosphorus but no sulfur; therefore, 32P exclusively labeled the bacteriophage DNA core."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Medium",
     "In the Hershey-Chase experiment, which radioactive isotope was used to specifically label the bacteriophage protein coat?",
     "Phosphorus-32 (32P)", "Sulfur-35 (35S)", "Hydrogen-3 (Tritium)", "Cobalt-60", "B",
     "Proteins contain methionine and cysteine (sulfur) but no phosphorus; therefore, 35S exclusively labeled the protein capsid."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Medium",
     "Following high-speed agitation in the Waring blender and centrifugation in the Hershey-Chase experiment, where was the 32P radioactivity detected?",
     "In the liquid supernatant containing empty viral ghosts", "Inside the bacterial cell pellet at the bottom of the tube", "Equally distributed", "Evaporated as gas", "B",
     "32P entered the bacterial cells and precipitated in the pellet, proving that viral DNA enters the host cell to direct viral progeny production."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Medium",
     "Heinz Fraenkel-Conrat and Bea Singer (1957) demonstrated that RNA is the genetic material in which virus?",
     "Bacteriophage T2", "Tobacco Mosaic Virus (TMV)", "Influenza virus", "Lambda phage", "B",
     "Reconstitution experiments using hybrid TMV (Type A RNA + Type B protein) proved that progeny virus always possessed proteins encoded by the viral RNA."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Hard",
     "Why did the scientific community resist Avery, MacLeod, and McCarty's 1944 findings for nearly a decade?",
     "Because DNA was thought to be too simple (the 'Tetranucleotide Hypothesis' of Levene) while proteins were complex and varied", "Because mice were considered invalid test subjects", "Because DNase was unknown", "Because Griffith retracted his paper", "A",
     "Phoebus Levene's erroneous tetranucleotide theory held that DNA was an invariant, repetitive scaffold; proteins were assumed to be the genetic material."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Hard",
     "In Hershey and Chase's blender experiment, what was the primary physical function of the kitchen Waring blender?",
     "To lyse the bacterial cell walls", "To shear off the empty bacteriophage protein coats (ghosts) from the bacterial cell surface", "To homogenize the DNA", "To induce phage DNA replication", "B",
     "Centrifugal shear forces in the blender detached empty 35S-labeled protein capsids adhering to the bacterial exterior without lysing bacteria."),
    ("Experimental proof of DNA as genetic material: Griffith, Avery-MacLeod-McCarty, and Hershey-Chase experiments", "Hard",
     "Transformation in Streptococcus pneumoniae is biologically mediated by a physiological state called:",
     "Lysogeny", "Competence (driven by Competence Stimulating Peptide / Com quorum sensing)", "Conjugation", "Transduction", "B",
     "Bacterial competence is a specialized physiological state enabling active uptake and genomic integration of exogenous extracellular DNA."),

    # Topic 5: Watson-Crick DNA structure and replication (10 Qs: 4E, 4M, 2H)
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Easy",
     "James Watson and Francis Crick published their landmark double-helix model of DNA in which year?",
     "1944", "1953 (in Nature)", "1958", "1962", "B",
     "Watson and Crick published their structure of DNA in Nature on April 25, 1953 (awarded the Nobel Prize in 1962 with Maurice Wilkins)."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Easy",
     "According to Chargaff's rules of base composition in double-stranded DNA:",
     "A = G and C = T", "A = T and G = C (Total Purines = Total Pyrimidines)", "A + T = G + C", "A/C = 1.0", "B",
     "Erwin Chargaff demonstrated that adenine equals thymine (A=T) and guanine equals cytosine (G=C), meaning Purines (A+G) = Pyrimidines (T+C)."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Easy",
     "How many hydrogen bonds form between Guanine and Cytosine in a DNA double helix?",
     "One", "Two", "Three (G === C)", "Four", "C",
     "Guanine and cytosine pair via three specific hydrogen bonds, making GC-rich DNA thermodynamically more stable than AT-rich DNA."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Easy",
     "What is the physical helical diameter of the B-DNA double helix?",
     "10 Å", "20 Å (2.0 nm)", "34 Å", "3.4 Å", "B",
     "The B-DNA double helix maintains a constant uniform diameter of 20 Angstroms (2.0 nm)."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Medium",
     "In the B-DNA double helix, one complete 360-degree helical turn spans what distance and contains approximately how many base pairs?",
     "20 Å and 5 bp", "34 Å (3.4 nm) and 10.5 base pairs", "3.4 Å and 1 bp", "45 Å and 15 bp", "B",
     "Each complete pitch (turn) measures 34 Å, with a vertical rise of 3.4 Å per base pair, containing ~10.5 bp per turn in solution."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Medium",
     "The two strands of a DNA double helix are described as 'antiparallel' because:",
     "One strand runs in the 5'->3' direction and the complementary strand runs in the 3'->5' direction", "Both strands run in the same direction", "They are made of different sugars", "One is RNA and one is DNA", "A",
     "The 5'-phosphate to 3'-hydroxyl orientation of one strand is oriented opposite to that of its paired partner strand."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Medium",
     "Matthew Meselson and Franklin Stahl (1958) proved semi-conservative DNA replication using which heavy isotope?",
     "Carbon-13", "Nitrogen-15 (15N as 15NH4Cl)", "Oxygen-18", "Sulfur-35", "B",
     "Meselson and Stahl labeled E. coli DNA with heavy stable isotope 15N and analyzed density transitions on CsCl gradients."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Medium",
     "In the Meselson-Stahl experiment, what band(s) were observed after exactly ONE generation of replication in 14N medium?",
     "One heavy band and one light band", "A single hybrid intermediate-density band (15N-14N)", "A single light band", "Two hybrid bands", "B",
     "A single intermediate hybrid band appeared, conclusively ruling out the conservative replication model."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Hard",
     "If a double-stranded DNA sample contains 28% Cytosine, what percentage of Adenine does it contain?",
     "28%", "22%", "44%", "56%", "B",
     "By Chargaff's rule: %G = %C = 28%. Total G+C = 56%. Therefore, Total A+T = 100 - 56 = 44%. Since %A = %T, %A = 44 / 2 = 22%."),
    ("Watson-Crick DNA double-helix architecture and Meselson-Stahl semi-conservative replication", "Hard",
     "J. Herbert Taylor (1957) demonstrated semi-conservative replication at the eukaryotic chromosome level in Vicia faba using:",
     "Cesium chloride centrifugation", "Tritiated thymidine (3H-thymidine) and autoradiography", "Gel electrophoresis", "X-ray crystallography", "B",
     "Taylor used 3H-thymidine autoradiography in broad bean (Vicia faba) root-tip chromosomes, proving each chromatid is semi-conservatively replicated."),

    # Topic 6: Genetic code and Central Dogma (10 Qs: 4E, 4M, 2H)
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Easy",
     "How many total triplet codons exist in the standard universal genetic code?",
     "20", "64", "61", "16", "B",
     "With 4 nitrogenous bases arranged in triplets, 4^3 = 64 codons are generated."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Easy",
     "Which codon acts as the universal initiation (start) codon for protein synthesis and encodes Methionine?",
     "UAA", "AUG", "UAG", "UGA", "B",
     "AUG is the universal start codon, specifying N-formylmethionine in prokaryotes and methionine in eukaryotes."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Easy",
     "Which of the following trios represents the three stop (nonsense) codons in mRNA?",
     "AUG, GUG, UUG", "UAA, UAG, UGA", "AAA, UUU, GGG", "UAC, UGG, UGC", "B",
     "UAA (ochre), UAG (amber), and UGA (opal) signal translational termination."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Easy",
     "Who shared the 1968 Nobel Prize with Nirenberg and Holley for deciphering the genetic code using synthetic polyribonucleotides?",
     "Arthur Kornberg", "Har Gobind Khorana", "Severo Ochoa", "Sydney Brenner", "B",
     "Indian-American biochemist Har Gobind Khorana synthesized defined RNA polymers to confirm triplet codon assignments."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Medium",
     "The genetic code is described as 'Degenerate' because:",
     "It breaks down over time", "A single amino acid can be specified by more than one synonymous codon", "One codon codes for multiple amino acids", "It differs between plants and animals", "B",
     "Degeneracy means that multiple codons specify the same amino acid (e.g., UUU and UUC both encode Phenylalanine)."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Medium",
     "Francis Crick's Wobble Hypothesis (1966) explains non-standard base pairing occurring at which position?",
     "The 5' first base of the mRNA codon", "The 3' third base of the mRNA codon and 5' base of the tRNA anticodon", "The middle base of the codon", "The amino acid attachment site of tRNA", "B",
     "Wobble pairing occurs between the third base (3') of the codon and first base (5') of the anticodon, allowing one tRNA to read multiple codons."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Medium",
     "During transcription, RNA polymerase binds to which specific DNA sequence upstream of the coding region?",
     "Operator", "Promoter region (e.g., TATA box / Pribnow box)", "Spliceosome", "Poly-A tail", "B",
     "RNA polymerase recognizes and binds to specific promoter sequences (-10 and -35 boxes in prokaryotes; TATA box in eukaryotes) to initiate transcription."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Medium",
     "In eukaryotic mRNA processing, what is added to the 5' end and 3' end of the primary transcript?",
     "7-methylguanosine cap at 5' end and Poly-A tail at 3' end", "Poly-A at 5' and cap at 3'", "Lipid bilayer at both ends", "Histones", "A",
     "Eukaryotic pre-mRNA receives a 5' 7-methylguanosine cap (protects against nucleases) and a 3' polyadenylated tail (200-250 adenines)."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Hard",
     "Which ribosomal enzymatic activity catalyzes peptide bond formation between amino acids during translation elongation?",
     "Aminoacyl-tRNA synthetase", "Peptidyl transferase (ribozyme activity of 23S/28S rRNA)", "DNA ligase", "RNA helicase", "B",
     "Peptidyl transferase, catalyzed directly by the large ribosomal subunit rRNA (a ribozyme), forms peptide bonds between amino acids."),
    ("The Genetic Code (properties and deciphering) and central dogma: Transcription and Translation mechanisms", "Hard",
     "Temin and Baltimore (1970) discovered reverse transcriptase in retroviruses, which modified Crick's Central Dogma by demonstrating:",
     "Protein to DNA flow", "RNA-directed synthesis of DNA (Reverse Transcription: RNA -> DNA)", "Direct translation of DNA into protein", "Spontaneous amino acid creation", "B",
     "Reverse transcriptase synthesizes complementary DNA (cDNA) from an RNA template, proving that genetic information can flow from RNA back to DNA.")
]

for item in mcq_data_extra:
    mcq_data.append(item)

for idx, item in enumerate(mcq_data, start=1):
    q_id = f"GPB203-U5-MCQ{idx:02d}"
    unit5["mcqs"].append({
        "id": q_id,
        "syllabusTopic": item[0],
        "difficulty": item[1],
        "questionText": item[2],
        "options": {
            "A": item[3],
            "B": item[4],
            "C": item[5],
            "D": item[6]
        },
        "correctOption": item[7],
        "explanation": item[8]
    })

# ----------------- 20 Subjective Questions -----------------
# 8 SHORT_ANSWER, 6 LONG_ANSWER, 3 COMPARISON, 2 APPLICATION, 1 CASE_STUDY
unit5["subjectiveQuestions"] = [
    {
        "id": "GPB203-U5-SUB01",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Cytoplasmic inheritance versus maternal effects: characteristics, criteria, and reciprocal differences",
        "questionText": "Enumerate the four diagnostic criteria that distinguish true cytoplasmic (extranuclear) inheritance from nuclear Mendelian inheritance.",
        "modelAnswer": """Extranuclear (cytoplasmic) inheritance involves genes residing outside the nucleus in organellar genomes (chloroplasts and mitochondria). Geneticists apply four rigorous criteria to distinguish cytoplasmic inheritance from Mendelian transmission:

1. Disparity between Reciprocal Crosses (Maternal Transmission):
In Mendelian nuclear inheritance, reciprocal crosses yield identical phenotypic results in F1. In cytoplasmic inheritance, reciprocal crosses yield strikingly disparate outcomes: the progeny invariably display the phenotype of the female parent (*uniparental maternal inheritance*). This occurs because the female egg cell contributes virtually all cytoplasm, while the male pollen/sperm contributes only a naked nucleus.

2. Absence of Classical Mendelian Segregation Ratios:
Cytoplasmic traits do not segregate into predictable Mendelian ratios (e.g., 3:1 in F2 or 1:1 in test crosses). Instead, random partitioning of organelles during cytokinesis (replicative segregation) produces continuous or mosaic phenotypic variations.

3. Persistence across Repeated Backcrosses:
When female progeny are repeatedly backcrossed over 6–8 generations to the recurrent male parent, nuclear genes of the female are progressively replaced by the male genome (~99.2% recurrent genome). In cytoplasmic inheritance, the maternal trait persists indefinitely without dilution because organellar DNA is never displaced by male nuclear alleles.

4. Inability to Map Genes to Nuclear Linkage Groups:
Cytoplasmic genes cannot be mapped onto any nuclear chromosome linkage group and show zero linkage with any known nuclear genetic markers.""",
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
        "modelAnswer": """In the freshwater snail *Limnaea peregra* (studied by Boycott and Diver, 1923, and analyzed genetically by Sturtevant, 1923), shell coiling direction is determined by a classic **Maternal Effect**.

1. Genetic Control:
- Shell coiling can be either **Dextral** (right-handed clockwise coiling) or **Sinistral** (left-handed counter-clockwise coiling).
- Controlled by a pair of nuclear alleles: dominant allele *D* determines dextral coiling, while recessive allele *d* determines sinistral coiling.

2. Maternal Effect Mechanism:
- The phenotypic coiling of the offspring is determined exclusively by the **nuclear genotype of the mother**, completely irrespective of the offspring's own genotype or the phenotype of the mother.
- Cellular Basis: The orientation of the mitotic spindle during the second cleavage division of the zygote determines coiling direction. The mother deposits spindle-orienting proteins or mRNAs into the oocyte cytoplasm during oogenesis. If the mother possesses at least one *D* allele (*DD* or *Dd*), the gene products induce dextral cleavage; if the mother is *dd*, the lack of this substance results in sinistral cleavage.

3. Why It Is NOT True Cytoplasmic Inheritance:
- In true cytoplasmic inheritance, the trait is governed by organellar DNA and persists maternally indefinitely.
- In *Limnaea*, the trait is governed by a standard nuclear gene that undergoes normal Mendelian segregation (*1 DD : 2 Dd : 1 dd* in F2). The phenotypic manifestation is simply delayed by exactly one generation. When an F2 *dd* individual (derived from a *Dd* mother, which has a dextral shell) reproduces, all its F3 progeny have sinistral shells. This segregation confirms nuclear control, disproving cytoplasmic organellar heredity.""",
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
        "modelAnswer": """In 1909, German botanist Carl Correns documented the first definitive evidence of extranuclear inheritance while investigating leaf variegation in the Four o'clock plant (*Mirabilis jalapa*).

1. Experimental Observations:
Correns observed that individual *Mirabilis jalapa* plants developed three distinct branch phenotypes on the same bush:
- Completely Green branches (normal chloroplasts).
- Completely Pale White branches (chlorophyll-deficient plastids / leucoplasts).
- Variegated branches (mottled green and white patches).

2. Reciprocal Crossing Results:
Correns made systematic reciprocal pollinations among flowers born on these three branch types:
- Crosses on Flowers of Green Branches: Whether pollinated with pollen from green, white, or variegated branches, the progeny were **100% Green**.
- Crosses on Flowers of White Branches: When pollinated with pollen from any branch, the progeny were **100% Pale White** (seedlings died early due to lack of photosynthesis).
- Crosses on Flowers of Variegated Branches: When pollinated with pollen from any branch, the seeds produced a mixture of **Green, White, and Variegated seedlings** in unpredictable, non-Mendelian ratios.

3. Cytological Explanation:
- The phenotype of the offspring depends strictly on the maternal branch from which the seed is harvested; pollen contributes zero plastids.
- In variegated branches, cells contain a mixture of normal green chloroplasts and mutant white plastids (**heteroplasmy**).
- During cytokinesis, plastids segregate randomly into daughter cells. An egg cell may receive only green plastids (yielding green plants), only white plastids (yielding white plants), or a mixture (yielding variegated plants).""",
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
        "modelAnswer": """In baker's yeast (*Saccharomyces cerevisiae*), Boris Ephrussi (1949) isolated 'petite' mutants that form miniature colonies because they lack respiratory cytochromes and cannot perform oxidative phosphorylation, growing exclusively by slow anaerobic fermentation.

Petite mutants are categorized into three distinct genetic classes:

1. Segregational (Nuclear) Petites:
- Genetic Basis: Caused by recessive point mutations in nuclear genes encoding respiratory enzymes.
- Meiotic Segregation: When crossed with wild-type (*rho+*), the diploid zygote is normal. Upon sporulation, meiotic ascospores segregate in a strict **2 normal : 2 petite Mendelian ratio** (1:1).

2. Neutral (Cytoplasmic) Petites (*rho-zero*):
- Genetic Basis: Caused by the complete physical loss or total deletion of mitochondrial DNA (mtDNA = 0%).
- Meiotic Segregation: When crossed with wild-type (*rho+*), the wild-type parent contributes intact normal mitochondria. The diploid zygote is fully respiratory. Upon sporulation, **100% of the ascospores are normal wild-type (4 normal : 0 petite)** across all generations. The petite trait completely disappears.

3. Suppressive Petites (*rho-minus*):
- Genetic Basis: Caused by extensive internal deletions in mtDNA that retain functional replication origins.
- Meiotic Segregation: When mated with wild-type (*rho+*), the mutant mtDNA out-replicates wild-type mtDNA or recombines with it, suppressing normal mitochondrial function. Upon sporulation, **predominantly petite ascospores (up to 99% petite)** are produced in non-Mendelian proportions.""",
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
        "modelAnswer": """The Cytoplasmic-Genetic Male Sterility (CGMS) three-line system is the premier technology for commercial hybrid seed production in self- and cross-pollinated crops (rice, sorghum, pearl millet), eliminating manual emasculation:

1. A-Line (Male Sterile Seed Parent):
- Genetic Constitution: Carries sterile cytoplasm (*S*) and homozygous recessive nuclear non-restorer alleles (*rf rf*). Genotype: `S rf rf`.
- Phenotype: Male sterile (anthers are shriveled, non-dehiscent, with aborted pollen); female fertility is 100% normal.
- Role: Serves as the female parent in commercial hybrid seed production blocks.

2. B-Line (Maintainer Line):
- Genetic Constitution: Isogenic counterpart of the A-line possessing identical recessive nuclear genes (*rf rf*), but carries normal fertile cytoplasm (*N*). Genotype: `N rf rf`.
- Phenotype: Fully male fertile and female fertile.
- Role: Used exclusively to maintain and multiply the A-line. When crossed with the A-line (`S rf rf female x N rf rf male`), 100% of the harvested seed is male sterile (`S rf rf`), perpetuating the A-line.

3. R-Line (Restorer Line):
- Genetic Constitution: Carries dominant nuclear fertility restorer alleles (*Rf Rf*) regardless of cytoplasm (`N Rf Rf` or `S Rf Rf`).
- Phenotype: Fully fertile. Possesses superior agronomic combining ability with the A-line.
- Role: Used as the male pollinator in commercial hybrid production fields. Crossing `A-line (S rf rf) x R-line (N Rf Rf)` yields the **Commercial F1 Hybrid (Genotype: S Rf rf)**. The dominant *Rf* allele overrides the sterile cytoplasm, fully restoring pollen fertility and seed set in the farmer's grain field.""",
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
        "modelAnswer": """In 1928, British medical officer Frederick Griffith conducted landmark experiments on the bacterium *Streptococcus pneumoniae* (Pneumococcus) that laid the foundation for molecular genetics.

1. Experimental Strains:
- **Type III-S (Smooth) Strain:** Virulent pathogen. Possesses a smooth, glistening polysaccharide capsule that protects the bacterium from phagocytosis by host white blood cells. Inoculation kills mice via septicemia.
- **Type II-R (Rough) Strain:** Avirulent mutant. Lacks the protective capsule, forming rough colonies. Easily engulfed and destroyed by the mouse immune system; mice survive.

2. Griffith's Four Experimental Steps:
- Experiment 1: Injected living Type II-R cells into mice -> Mice survived.
- Experiment 2: Injected living Type III-S cells into mice -> Mice contracted pneumonia and died; living S cells recovered.
- Experiment 3: Injected heat-killed Type III-S cells into mice -> Mice survived (proving heat destroys virulence).
- Experiment 4: Injected a mixture of living avirulent Type II-R cells AND heat-killed virulent Type III-S cells into mice.
  * Result: The mice developed severe pneumonia and died!
  * Autopsy: Griffith isolated abundant living, encapsulated Type III-S bacteria from the blood of the dead mice.

3. Scientific Conclusion and Significance:
Because dead S cells could not come back to life, Griffith concluded that some biological substance from the dead heat-killed S cells had passed into the living R cells, permanently transforming them into virulent, capsule-producing S cells.
He termed this unknown hereditary molecule the **'Transforming Principle'**. Although Griffith did not identify the chemical nature of the substance, his experiment demonstrated that genetic information can be transferred horizontally between bacterial cells.""",
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
        "modelAnswer": """Between 1949 and 1952, Austrian biochemist Erwin Chargaff used paper chromatography and ultraviolet spectrophotometry to precisely quantify the nitrogenous base composition of DNA across diverse eukaryotic and prokaryotic organisms, establishing **Chargaff's Rules**:

1. Core Base-Composition Rules (For Double-Stranded DNA):
- **Equivalence of Purines and Pyrimidines:** The total sum of purines equals the total sum of pyrimidines:
  `Purines (A + G) = Pyrimidines (T + C)`, or `(A + G) / (T + C) = 1.0`
- **1:1 Base Ratio Equivalence:**
  * The amount of Adenine is always equal to Thymine: `A = T` (or `A / T = 1.0`)
  * The amount of Guanine is always equal to Cytosine: `G = C` (or `G / C = 1.0`)
- **Species-Specific Base Ratio (Dissimilarity Index):** The ratio of `(A + T) / (G + C)` is constant for a given biological species, but varies widely across different species (ranging from 0.4 in *Streptomyces* to 1.8 in yeast).

2. Critical Role in Developing the Double-Helix Model:
Prior to Chargaff, prevailing theory assumed the 'tetranucleotide hypothesis' (DNA is an invariant repeating polymer of equal A, T, G, C parts). Chargaff demonstrated that DNA composition varies with species, satisfying the requirement for informational diversity.

Furthermore, when James Watson and Francis Crick were attempting to build a physical model:
- They initially attempted like-with-like base pairing (A-A, T-T, G-G), which failed because purine-purine pairs were too wide and pyrimidine-pyrimidine pairs too narrow to fit Rosalind Franklin's uniform 20 Å helical diameter.
- Chargaff's strict `A = T` and `G = C` equivalence provided the mathematical clue that forced Watson to pair a purine with a pyrimidine.
- Watson realized that specific hydrogen bonding between Adenine and Thymine (*A = T*, two bonds) and Guanine and Cytosine (*G === C*, three bonds) formed pairs of identical geometric dimensions, explaining both Chargaff's rules and the uniform diameter of the double helix.""",
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
        "modelAnswer": """The genetic code is the universal biological dictionary translating the linear nucleotide sequence of mRNA into the linear amino acid sequence of proteins.

Key Properties of the Genetic Code:

1. Triplet Nature:
Three consecutive mRNA nucleotides constitute a 'codon' specifying one amino acid. Because there are 4 bases, doublet codons could only specify 4^2 = 16 amino acids (insufficient for 20 amino acids). Triplet codons generate `4^3 = 64` codons, which fully accommodates all 20 standard amino acids (61 sense codons + 3 stop codons).

2. Degeneracy (Redundancy):
Multiple codons can specify the same amino acid. Except for Methionine (*AUG*) and Tryptophan (*UGG*), which have single codons, all standard amino acids are encoded by 2 to 6 synonymous codons (e.g., Leucine, Serine, and Arginine each have 6 codons). Degeneracy minimizes the deleterious impact of point mutations (especially at the 3rd codon wobble position).

3. Non-Overlapping and Commaless:
- Non-Overlapping: In translation, the ribosome reads codons strictly three by three in succession. A single nucleotide belongs to only one codon (e.g., sequence *AUGCCA* is read as *AUG* and *CCA*, never *UGC*).
- Commaless: There are no punctuations, pauses, or spacer bases between adjacent codons. Translation begins at *AUG* and reads continuously until a stop codon.

4. Universal Nature:
With minor exceptions (in mammalian mitochondria and certain protozoa), the genetic code is identical across all living organisms, from *E. coli* to maize to humans. For example, *UUU* codes for Phenylalanine in bacteria, plants, and humans alike, providing compelling proof for the common evolutionary origin of all life and enabling recombinant DNA technology.""",
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
        "modelAnswer": """The identification of DNA as the universal physical substance of heredity resolved biology's greatest mystery through three sequential, definitive experiments:

1. Frederick Griffith (1928) — Discovery of the 'Transforming Principle':
- System: *Streptococcus pneumoniae* (virulent encapsulated Type III-S vs avirulent non-capsulated Type II-R) in laboratory mice.
- Protocol:
  * Mice injected with living R cells survived.
  * Mice injected with heat-killed S cells survived.
  * Mice injected with a mixture of living R cells AND heat-killed S cells developed fatal pneumonia.
  * Living encapsulated Type III-S bacteria were recovered from the dead mice.
- Conclusion: A heat-stable chemical component ('Transforming Principle') was transferred from dead S cells into living R cells, permanently transforming them into virulent S cells. Griffith discovered transformation, but could not determine its chemical identity.

2. Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944) — Chemical Proof of DNA:
- System: In vitro biochemical fractionation of *Streptococcus pneumoniae* cell-free extracts.
- Protocol:
  * Harvested massive cultures of virulent Type III-S cells, lysed them, and precipitated active transforming extracts.
  * Subjected the purified extract to selective enzymatic degradation using specific enzymes before adding to living R cells:
    1. Treatment with **Proteases (Trypsin and Chymotrypsin)**: Completely destroyed all proteins -> Transformation was **unaffected** (R cells still transformed into S).
    2. Treatment with **Ribonuclease (RNase)**: Completely destroyed all RNA -> Transformation was **unaffected**.
    3. Treatment with Lipases and Carbohydrases: Destroyed lipids and polysaccharides -> Transformation was **unaffected**.
    4. Treatment with **Deoxyribonuclease (DNase)**: Selectively degraded DNA -> **Transformation was completely abolished!**
  * Physical and chemical testing (ultracentrifugation, electrophoresis, UV absorption at 260 nm, N:P ratio of 1.67) confirmed that the transforming activity resided in pure, high-molecular-weight DNA.
- Conclusion: DNA is the transforming principle and the chemical basis of heredity.

3. Alfred Hershey and Martha Chase (1952) — Confirmation via Bacteriophage T2:
- System: Bacteriophage T2 (a simple virus containing only DNA inside a protein capsid) infecting *Escherichia coli*.
- Radioactive Tracing Rationale:
  * DNA contains abundant Phosphorus, but zero Sulfur. Labeled with radioactive Phosphorus-32 (**32P**).
  * Protein capsids contain Sulfur (methionine, cysteine), but zero Phosphorus. Labeled with radioactive Sulfur-35 (**35S**).
- Experimental Protocol:
  * Batch 1: *E. coli* infected with 35S-protein labeled T2 phages.
  * Batch 2: *E. coli* infected with 32P-DNA labeled T2 phages.
  * Infection was allowed to proceed for a few minutes, then cultures were agitated in a high-speed kitchen **Waring blender** to shear off empty viral protein capsids ('ghosts') from the bacterial cell surface.
  * Centrifuged at high speed to separate heavy bacterial cells (pellet) from lighter viral ghosts (supernatant).
- Findings:
  * In the 35S batch: ~80% of the radioactivity remained in the liquid supernatant (in empty protein coats); almost no 35S entered the bacterial pellet.
  * In the 32P batch: Over 85% of the radioactivity was found in the bacterial pellet. When these bacteria lysed, progeny phages contained 32P, but no 35S.
- Conclusion: Only viral DNA enters host bacterial cells to direct the replication of new phages; protein coats remain outside as empty hulls. This provided final, universally accepted proof that DNA is the genetic material.""",
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
        "modelAnswer": """In April 1953, James D. Watson and Francis H. C. Crick published their historic model of the B-form deoxyribonucleic acid (B-DNA) double helix, synthesizing Erwin Chargaff's base-ratio data and Rosalind Franklin and Maurice Wilkins' X-ray fiber diffraction Photograph 51.

1. Fundamental Architecture and Dimensions of B-DNA:
- **Right-Handed Double Helix:** B-DNA consists of two polynucleotide chains wound around a central helical axis in a right-handed spiral.
- **Antiparallel Polarity:** The two strands run in opposite directions: one strand has 5'->3' polarity (ending in a 5'-phosphate group), while the complementary strand has 3'->5' polarity (ending in a 3'-hydroxyl group).
- **Diameter:** The double helix maintains a constant uniform width of **20 Å (2.0 nm)** along its entire length.
- **Helical Pitch and Rise:**
  * Each complete 360-degree helical turn spans a distance of **34 Å (3.4 nm)**.
  * Each turn contains approximately **10.0 to 10.5 base pairs** in aqueous solution.
  * The vertical distance (rise) between adjacent base pairs along the axis is **3.4 Å (0.34 nm)**.
  * The helical rotation angle between adjacent base pairs is ~36 degrees (360 / 10).

2. Spatial Organization and Base Pairing Geometry:
- **Sugar-Phosphate Backbone:** The hydrophilic deoxyribose sugars linked by alternating 3',5'-phosphodiester bonds form the structural outer scaffold, facing the aqueous cellular environment.
- **Inward-Facing Nitrogenous Bases:** The hydrophobic planar purine and pyrimidine rings point inward toward the helical axis, stacked horizontally like staircase steps perpendicular to the long axis.
- **Complementary Base Pairing:**
  * Adenine (purine) pairs strictly with Thymine (pyrimidine) via **two hydrogen bonds**: `A = T` (one between N1 of A and N3 of T; one between C6 amino of A and C4 keto of T).
  * Guanine (purine) pairs strictly with Cytosine (pyrimidine) via **three hydrogen bonds**: `G === C` (between C6 keto of G and C4 amino of C; N1 of G and N3 of C; C2 amino of G and C2 keto of C).
- This purine-pyrimidine pairing geometry ensures that the width of an A-T pair (10.85 Å) is virtually identical to that of a G-C pair (10.85 Å), preserving the uniform 20 Å diameter.

3. Major and Minor Grooves:
Because the glycosidic bonds connecting the bases to the deoxyribose sugars are not positioned directly opposite each other (forming an angle of 120 and 240 degrees), the helical twisting generates two asymmetrical surface indentations:
- **Major Groove:** Wide (22 Å) and deep (8.5 Å). Displays distinct hydrogen bonding donor/acceptor patterns that allow sequence-specific regulatory proteins (transcription factors, zinc fingers, restriction enzymes) to recognize specific base sequences without unwinding the helix.
- **Minor Groove:** Narrow (12 Å) and shallow (7.5 Å).

4. Non-Covalent Forces Stabilizing the Double Helix:
- **Hydrogen Bonding:** Billions of individual hydrogen bonds between complementary base pairs provide specificity.
- **Base-Stacking Interactions (Hydrophobic and Van der Waals forces):** Planar aromatic purine and pyrimidine rings stack closely on top of each other (3.4 Å spacing). Pi-electron cloud interactions and hydrophobic exclusion of water contribute >80% of the total free energy stabilizing the duplex.
- **Electrostatic Interactions:** Positively charged divalent cations (Mg2+) and basic histone/polyamines neutralize the negative charges of phosphate groups, preventing repulsive strand separation.""",
        "outlinePoints": [
            "Helical geometry: right-handed, antiparallel strands, uniform 20 Å diameter",
            "Helical dimensions: 34 Å pitch, 10.5 base pairs per turn, 3.4 Å rise per base pair",
            "Complementary base pairing geometry: A=T (2 bonds) and G===C (3 bonds)",
            "Asymmetrical geometry creating Major Groove (22 Å) and Minor Groove (12 Å)",
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
        "modelAnswer": """When Watson and Crick proposed the double helix in 1953, they famously noted: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.' Three alternative hypotheses were proposed for DNA replication:
- **Semi-Conservative Model (Watson & Crick):** Each parental strand acts as a template for synthesizing a new complementary daughter strand. Each replicated duplex contains one intact conserved parental strand and one newly synthesized strand.
- **Conservative Model:** The parental duplex remains completely intact, directing the synthesis of an entirely new double-stranded DNA molecule.
- **Dispersive Model:** The parental DNA breaks into fragments, and parental and newly synthesized segments are dispersed randomly into all daughter strands.

The Meselson-Stahl Experiment (1958):
Matthew Meselson and Franklin Stahl designed a landmark experiment using heavy isotope density labeling to definitively test these models.

1. Experimental Protocol:
- *Escherichia coli* cells were grown for over 14 generations in a minimal medium containing **heavy nitrogen (15NH4Cl)** as the sole nitrogen source. Heavy 15N was uniformly incorporated into all purines and pyrimidines, producing high-density 'heavy' DNA.
- Cells were harvested, washed, and transferred into a medium containing normal **light nitrogen (14NH4Cl)**.
- Cell samples were harvested at precise generation intervals (0, 1.0, 2.0, 3.0 generations) synchronized with the 20-minute *E. coli* cell cycle.
- DNA was extracted and analyzed using **Isopycnic Cesium Chloride (CsCl) Density Gradient Centrifugation** at 45,000 rpm for 20 hours. Under high centrifugal force, CsCl forms a continuous density gradient; DNA molecules migrate until their buoyant density matches the CsCl solution, forming sharp UV-absorbing bands.

2. Results and Rejection of Alternative Hypotheses:

A. Generation 0 (Prior to transfer to 14N):
- Result: A single sharp band at the bottom of the gradient corresponding to **100% Heavy DNA (15N-15N)**.

B. Generation 1.0 (After one round of replication in 14N):
- Result: A single sharp band positioned exactly halfway between heavy and light positions, corresponding to **100% Intermediate Hybrid DNA (15N-14N)**.
- **Rejection of Conservative Model:** The conservative model predicted two distinct bands (50% heavy 15N-15N and 50% light 14N-14N). The complete absence of heavy DNA and presence of 100% hybrid DNA definitively disproved the conservative model!

C. Generation 2.0 (After two rounds of replication in 14N):
- Result: Exactly two bands of equal intensity appeared: **50% Light DNA (14N-14N)** and **50% Hybrid DNA (15N-14N)**.
- **Rejection of Dispersive Model:** The dispersive model predicted that hybrid DNA would continue to dilute uniformly into a single progressively lighter band across generations. The appearance of a distinct, pure light band (14N-14N) alongside the persistent hybrid band definitively disproved the dispersive model!

D. Generation 3.0:
- Result: Two bands: **75% Light DNA (14N-14N)** and **25% Hybrid DNA (15N-14N)**.
The proportion of light DNA expanded according to `1 - (1/2)^(n-1)`.

Conclusion:
The Meselson-Stahl experiment provided unequivocal biophysical proof that DNA replicates via the **Semi-Conservative Mechanism**.""",
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
        "modelAnswer": """The Central Dogma of Molecular Biology (Francis Crick, 1958) describes the directional flow of genetic information: `DNA --[Transcription]--> mRNA --[Translation]--> Polypeptide`.

1. Molecular Mechanism of Transcription in Prokaryotes:
Transcription is catalyzed by a multi-subunit **RNA Polymerase holoenzyme** (`alpha_2 beta beta' omega sigma`).
- **Initiation:**
  * The core enzyme (`alpha_2 beta beta' omega`) possesses catalytic activity but cannot recognize promoters.
  * The **sigma factor (sigma-70)** associates with the core enzyme, directing it to bind specifically to promoter sequences at **-35 (TTGACA)** and **-10 (TATAAT / Pribnow Box)** upstream of the transcription start site (+1).
  * RNA polymerase unwinds ~14 base pairs of DNA, forming an open promoter complex.
- **Elongation:**
  * The sigma factor dissociates after 8–10 nucleotides are synthesized.
  * The core enzyme moves along the DNA template strand in the 3'->5' direction, synthesizing complementary mRNA in the **5'->3' direction** using ribonucleoside triphosphates (rNTPs) at ~50 nucleotides/second.
- **Termination:**
  * **Rho-Independent (Intrinsic) Termination:** Transcribed GC-rich inverted repeats form a stable hairpin stem-loop structure, followed by a run of 6–8 uracil residues. The weak rU-dA hybrid causes the RNA transcript and polymerase to dissociate.
  * **Rho-Dependent Termination:** The hexameric ATP-dependent **Rho protein** binds to an unprinted cytosine-rich *rut* site on nascent mRNA, translocates toward the polymerase, and unwinds the RNA-DNA hybrid.

2. Molecular Mechanism of Translation:
Translation translates mRNA codons into a functional polypeptide in the cytoplasm:
- **Amino Acid Activation and tRNA Charging:**
  Aminoacyl-tRNA synthetase binds a specific amino acid and ATP to form aminoacyl-AMP, then transfers the amino acid to the 3'-CCA end of its cognate tRNA, forming charged **aminoacyl-tRNA**.
- **Phase I: Translation Initiation:**
  * The 30S small ribosomal subunit, guided by Initiation Factors (IF1, IF2-GTP, IF3), binds to the mRNA via base pairing between its 16S rRNA and the **Shine-Dalgarno sequence (AGGAGG)** located 8 bases upstream of the AUG start codon.
  * Initiator charged tRNA (**fMet-tRNAfMet**) binds to the AUG codon positioned at the peptidyl (**P**) site.
  * The 50S large ribosomal subunit binds, hydrolyzing GTP to assemble the complete 70S initiation complex.
- **Phase II: Translation Elongation:**
  Operates as a three-step cycle mediated by Elongation Factors:
  1. Codon Recognition: An elongation factor **EF-Tu-GTP** delivers the next cognate charged aminoacyl-tRNA into the empty aminoacyl (**A**) site.
  2. Peptide Bond Formation: The **Peptidyl Transferase** catalytic center (23S rRNA ribozyme) transfers the peptide chain from the P-site tRNA to the amino acid at the A-site, forming a peptide bond.
  3. Translocation: **EF-G-GTP** hydrolyzes GTP to shift the ribosome exactly one triplet codon forward (5'->3'). The uncharged tRNA moves to the exit (**E**) site and dissociates; the peptidyl-tRNA shifts from A to P site, clearing the A-site for the next codon.
- **Phase III: Translation Termination:**
  When a stop codon (UAA, UAG, UGA) enters the A-site, it is recognized by **Release Factors (RF1 or RF2)**. RF3 stimulates hydrolysis of the ester bond connecting the completed polypeptide to the P-site tRNA, releasing the protein. Ribosome recycling factors (RRF) disassemble the 70S ribosome into 30S and 50S subunits.""",
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
        "modelAnswer": """In 1966, Francis Crick formulated the **Wobble Hypothesis** to resolve an apparent paradox in protein synthesis: while there are 61 sense codons specifying 20 amino acids, most eukaryotic and bacterial cells contain significantly fewer than 61 distinct tRNA species (typically 30–45 tRNAs).

1. The Biological Paradox and Crick's Solution:
If strict Watson-Crick base pairing (*A=U* and *G===C*) were required across all three codon positions, a cell would require 61 distinct tRNAs with unique anticodons.
Crick realized that:
- Pairing between the first two positions of the mRNA codon (5' base and middle base) and the third and second positions of the tRNA anticodon (3' and middle) is strictly Watson-Crick and geometrically rigid, ensuring translational accuracy.
- However, at the **third position of the mRNA codon (3' end)** and the **first position of the tRNA anticodon (5' end)**, the spatial constraints of the ribosomal decoding center are relaxed ('wobble'). This allows non-standard, flexible hydrogen bonding between certain bases.

2. Stereochemical Rules of Wobble Base Pairing:
The base present at the **5' position of the tRNA anticodon** determines whether the tRNA can recognize one, two, or three different mRNA codons:

A. When the 5' Anticodon Base is Cytosine (C) or Adenine (A):
- No wobble is possible; strict standard pairing only:
  * 5' Anticodon **C** pairs strictly with 3' Codon **G** (1 codon recognized).
  * 5' Anticodon **A** pairs strictly with 3' Codon **U** (1 codon recognized).

B. When the 5' Anticodon Base is Guanine (G):
- Conformation allows two alternative pairings:
  * 5' Anticodon **G** pairs with 3' Codon **C** (standard) OR 3' Codon **U** (wobble pair).
  * Result: A single tRNA with 5'-G can read **two codons** ending in C or U.

C. When the 5' Anticodon Base is Uracil (U):
- Can pair with two purines:
  * 5' Anticodon **U** pairs with 3' Codon **A** (standard) OR 3' Codon **G** (wobble pair).
  * Result: A single tRNA with 5'-U can read **two codons** ending in A or G.

D. When the 5' Anticodon Base is Inosine (I):
- Inosine is a modified deaminated purine base (hypoxanthine nucleoside) formed post-transcriptionally by tRNA-adenosine deaminase.
- Inosine possesses maximum spatial wobble flexibility and can form stable hydrogen bonds with **three different bases**:
  * 5' Anticodon **I** pairs with 3' Codon **U**, **C**, OR **A**!
  * Result: A single tRNA carrying inosine at its 5' position can recognize **three distinct synonymous codons**!

3. Evolutionary and Functional Significance:
- **Economy of Translational Machinery:** By allowing one tRNA species to decode up to three codons, a cell can translate all 61 sense codons using as few as **31 different tRNA species** (or 22 in mitochondria).
- **Speed of Translation:** Wobble pairing facilitates rapid dissociation of the tRNA anticodon from the mRNA codon after peptide bond formation, accelerating elongation rates.
- **Protection Against Deleterious Mutations:** Because synonymous codons for an amino acid usually differ only at the third wobble position, silent transition mutations do not alter protein primary structure.""",
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
        "modelAnswer": """Cytoplasmic Male Sterility (CMS) is a maternally inherited trait in higher plants characterized by the inability to shed functional pollen while vegetative growth and female fertility remain fully normal.

1. Molecular Etiology of CMS in Plant Mitochondria:
Plant mitochondrial genomes (chondriomes) are unusually large (200 to 2,500 kb) and contain abundant repeated DNA sequences that undergo frequent non-homologous homologous recombination.
- These recombination events generate **chimeric open reading frames (ORFs)**—novel hybrid genes fusing portions of standard mitochondrial genes (such as ATP synthase, cytochrome oxidase) with uncharacterized DNA segments.
- These chimeric ORFs encode cytotoxic transmembrane proteins that specifically disrupt mitochondrial membrane integrity during the energy-demanding development of the anther tapetum and pollen microspores, triggering premature tapetal programmed cell death (apoptosis) and pollen abortion.

2. The Texas CMS (T-CMS) Paradigm in Maize:
Texas male-sterile cytoplasm (T-CMS) was widely deployed across the United States in the 1960s, occupying over 85% of hybrid maize acreage.
- **The Chimeric Gene urf13:**
  Molecular analysis revealed that T-cytoplasm mitochondria carry a unique chimeric gene called **T-urf13** (arising from complex recombinations involving the *rrn26* ribosomal RNA gene and *atp6*).
- **The URF13 Protein:**
  *T-urf13* encodes a 13-kDa hydrophobic polypeptide (URF13) that inserts into the inner mitochondrial membrane, forming oligomeric pore-like channels.
- **Pollen Abortion:**
  During anther development, tapetal cells undergo a 40-fold increase in mitochondrial number to fuel pollen wall synthesis. The accumulation of URF13 pores causes mitochondrial uncoupling, loss of membrane potential, and cellular collapse, resulting in complete male sterility.
- **The 1970 Southern Corn Leaf Blight Epidemic:**
  The fungus *Bipolaris maydis* (race T) produces a specific polyketide host-selective toxin (**T-toxin**). The fungal T-toxin binds specifically to the URF13 protein pores, forcing them permanently open and causing massive electrolyte leakage, causing severe blighting of leaves and ears. This demonstrated the immense vulnerability of monocultured cytoplasmic uniformity.

3. Nuclear Restoration of Fertility (Rf1 and Rf2 Interaction):
Fertility in T-CMS maize is restored by two dominant nuclear genes: **Rf1** (Chromosome 3) and **Rf2** (Chromosome 9):
- **Rf1 (Pentatricopeptide Repeat Protein - PPR):**
  *Rf1* encodes a mitochondrial-targeted **Pentatricopeptide Repeat (PPR)** RNA-binding protein. The RF1 protein binds specifically to the chimeric *T-urf13* mRNA transcript, directing endonucleolytic cleavage of the mRNA, which prevents translation of the toxic URF13 protein.
- **Rf2 (Aldehyde Dehydrogenase - ALDH):**
  *Rf2* encodes a functional mitochondrial aldehyde dehydrogenase that detoxifies volatile aldehydes produced during anther metabolic bursts.
- When both dominant alleles are present in the F1 hybrid (`T-cytoplasm Rf1- Rf2-`), the accumulation of URF13 is suppressed, mitochondrial respiration proceeds normally, and 100% normal pollen fertility is restored.""",
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
        "modelAnswer": """True Cytoplasmic Inheritance and Maternal Effects both produce maternal transmission patterns, but they are governed by fundamentally different genetic systems:

1. Genetic Determinant:
- True Cytoplasmic Inheritance: Governed by autonomous **organellar DNA** residing in the cytoplasm (chloroplast DNA / plastome or mitochondrial DNA / chondriome).
- Maternal Effect: Governed strictly by standard **nuclear genes** residing on chromosomes in the mother's nucleus (*not* cytoplasmic organellar DNA).

2. Mechanism of Transmission:
- Cytoplasmic Inheritance: Transmitted through the physical inheritance of cytoplasmic organelles via the female ovum (which provides all cytoplasm, while the sperm contributes none).
- Maternal Effect: Mediated by preformed chemical substances (proteins, mRNAs, or morphogens) synthesized by the mother's nuclear genome during oogenesis and deposited into the egg cytoplasm prior to fertilization.

3. Persistence Across Successive Generations:
- Cytoplasmic Inheritance: Persists permanently across all subsequent generations as long as the maternal lineage continues; unaffected by nuclear backcrossing.
- Maternal Effect: Transient and non-permanent. Segregates in normal Mendelian proportions in subsequent generations, but the phenotypic expression is **delayed by exactly one generation**.

4. Representative Examples:
- Cytoplasmic Inheritance: Leaf variegation in *Mirabilis jalapa* (cpDNA); Yeast petite mutants (mtDNA); Cytoplasmic Male Sterility in maize and rice.
- Maternal Effect: Shell coiling in *Limnaea peregra*; anterior-posterior morphogen gradients (*bicoid* mRNA) in *Drosophila* embryos.""",
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
        "modelAnswer": """Cytoplasmic Male Sterility (CMS) and Genetic Male Sterility (GMS) are two alternative male sterility mechanisms utilized in crop hybrid seed production:

1. Genetic Control:
- Cytoplasmic Male Sterility (CMS): Governed by mutated, chimeric genes residing in the **mitochondrial genome (extranuclear mtDNA)**.
- Genetic Male Sterility (GMS): Governed strictly by **nuclear genes** (typically a single recessive Mendelian gene, *ms ms*).

2. Mode of Inheritance:
- CMS: Maternally transmitted. An A-line mother (*S rf rf*) crossed with a maintainer B-line (*N rf rf*) produces 100% male sterile progeny.
- GMS: Follows standard Mendelian segregation. Crossing a male sterile plant (*ms ms*) with a heterozygous maintainer (*Ms ms*) produces a segregating 1 fertile (*Ms ms*) : 1 sterile (*ms ms*) progeny ratio.

3. Maintenance of the Male Sterile Line:
- CMS: Maintained easily and purely (100% male sterile seed harvested) by pollinating the A-line with the maintainer B-line.
- GMS: Cannot be maintained as a 100% pure male sterile stand; seed harvested from *ms ms x Ms ms* always contains 50% fertile plants that must be manually rogued out in the field at flowering before pollen sheds.

4. Fertility Restoration in Commercial Hybrids:
- CMS: Requires a specialized Restorer line (R-line) carrying dominant nuclear fertility restorer genes (*Rf Rf*) to ensure the farmer's grain crop is fertile.
- GMS: Any normal inbred line carrying the wild-type dominant allele (*Ms Ms*) restores fertility in the F1 hybrid (*Ms ms*).

5. Crop Utility:
- CMS: Ideal for grain crops (rice, pearl millet, sorghum, maize).
- GMS: Preferred in crops where vegetative or fruit parts are harvested (chilli, tomato, pigeonpea) where pollen fertility is non-essential, or in crops easily rogued.""",
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
        "modelAnswer": """DNA can adopt distinct structural conformations depending on hydration, salt concentration, and nucleotide sequence:

1. Helical Handedness:
- B-DNA: Right-handed double helix.
- A-DNA: Right-handed double helix.
- Z-DNA: **Left-handed** double helix (exhibits a zigzag phosphate backbone).

2. Helical Diameter:
- B-DNA: 20 Å (2.0 nm) - Intermediate width.
- A-DNA: 26 Å (2.6 nm) - Short, wide, compact cylinder.
- Z-DNA: 18 Å (1.8 nm) - Elongated, slim, narrow cylinder.

3. Base Pairs per Complete Turn and Pitch:
- B-DNA: ~10.5 bp per turn; Pitch = 34 Å; Rise per bp = 3.4 Å.
- A-DNA: 11 bp per turn; Pitch = 28 Å; Rise per bp = 2.6 Å (bases strongly tilted 20 degrees relative to axis).
- Z-DNA: 12 bp per turn (6 repeating dinucleotide dimers); Pitch = 45 Å; Rise per bp = 3.7 Å.

4. Major and Minor Groove Geometry:
- B-DNA: Wide major groove and narrow minor groove.
- A-DNA: Extremely deep, narrow major groove and broad, shallow minor groove.
- Z-DNA: Flattened, non-distinct major groove and extremely deep, narrow minor groove.

5. Physiological Occurrence and Biological Role:
- B-DNA: The standard, predominant conformation in living cells under physiological high hydration (>92% relative humidity) and neutral ionic strength.
- A-DNA: Found under dehydrating conditions (<75% relative humidity), in double-stranded RNA duplexes, and in RNA-DNA hybrid intermediates during transcription.
- Z-DNA: Formed dynamically in vivo in alternating purine-pyrimidine tracts (e.g., *poly(dG-dC)*) under high salt or negative supercoiling; involved in transcriptional regulation and viral pathogenesis.""",
        "outlinePoints": [
            "Handedness: B-DNA (right), A-DNA (right), Z-DNA (left-handed zigzag)",
            "Helical diameter: B (20 Å), A (26 Å), Z (18 Å)",
            "Base pairs per turn and pitch: B (10.5 bp, 34 Å), A (11 bp, 28 Å), Z (12 bp, 45 Å)",
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
        "modelAnswer": """Genetic Analysis of the Three-Line Hybrid Rice CGMS System:

Genetic Definitions:
- Cytoplasm: *S* = Sterile (Wild Abortive) cytoplasm; *N* = Normal fertile cytoplasm.
- Nuclear Restorer Gene: Dominant *Rf* restores male fertility; recessive *rf* maintains sterility.
- Parental Line Genotypes:
  * A-line (Female seed parent): `S rf rf` (Male sterile, female fertile).
  * B-line (Maintainer line): `N rf rf` (Male fertile, female fertile).
  * R-line (Restorer line): `N Rf Rf` (Male fertile, female fertile).

(a) Detailed Analysis of Crosses:

Cross 1: A-line x B-line (A-line Seed Multiplication):
- Female: `S rf rf` x Male: `N rf rf`
- Progeny Genotype: **100% S rf rf**
- Phenotype: **100% Male Sterile Plants**.
- Function: Maintains and multiplies pure seed of the female A-line.

Cross 2: A-line x R-line (Commercial F1 Hybrid Seed Production):
- Female: `S rf rf` x Male: `N Rf Rf`
- Female gamete: *S rf*; Male gamete: *N Rf*
- Progeny Genotype: **100% S Rf rf (F1 Commercial Hybrid)**
- Phenotype: **100% Fully Fertile Plants** (the single dominant *Rf* allele overrides the sterile *S* cytoplasm).
- Function: This is the high-yielding commercial hybrid seed sold to farmers for grain production.

Cross 3: Selfing the F1 Commercial Hybrid (F1 x F1):
- Cross: `S Rf rf` x `S Rf rf`
- Maternal cytoplasm is *S* across all progeny.
- Nuclear alleles segregate in standard Mendelian monohybrid fashion:
  * 1/4 *Rf Rf* (Homozygous dominant) -> Genotype: `S Rf Rf` (Fertile)
  * 2/4 *Rf rf* (Heterozygous) -> Genotype: `S Rf rf` (Fertile)
  * 1/4 *rf rf* (Homozygous recessive) -> Genotype: `S rf rf` (Male Sterile!)
- Phenotypic Outcome: **3/4 (75%) Fertile Plants : 1/4 (25%) Male Sterile Plants**.

Cross 4: Test Crossing the F1 Hybrid with B-line:
- Cross: F1 Hybrid female (`S Rf rf`) x B-line male (`N rf rf`)
- Maternal gametes: 1/2 *S Rf* and 1/2 *S rf*. Paternal gamete: *N rf*.
- Progeny Genotypes:
  * 50% `S Rf rf` -> Male Fertile
  * 50% `S rf rf` -> Male Sterile
- Phenotypic Outcome: **1 Fertile : 1 Male Sterile (50% Fertile)**.

(b) Summary Proportions:
- Cross 3 (F2 generation): **75% Fertile : 25% Sterile**.
- Cross 4 (Test cross): **50% Fertile : 50% Sterile**.

(c) Why Farmers Can NEVER Replant Saved F2 Hybrid Seed:
If a farmer saves grain harvested from a commercial F1 hybrid field and replants it in the next season:
1. Severe Genetic Segregation and Sterility: Exactly **25% (one out of every four plants) of the F2 crop will be completely male sterile (*S rf rf*)**, producing empty, chaffy, grainless panicles, resulting in an immediate 25% minimum yield loss!
2. Loss of Heterosis (Hybrid Vigor): The remaining 75% fertile plants segregate widely for height, maturity date, tillering, and grain quality, resulting in severe inbreeding depression and uneven ripening.
Therefore, farmers must purchase certified F1 hybrid seed fresh every single crop season.""",
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
        "modelAnswer": """Step-by-Step Molecular Problem Breakdown:

Given DNA Duplex:
- Coding (Sense) Strand:    `5'- ATG GCA TTC CCT AAG TGA -3'`
- Template (Antisense) Strand: `3'- TAC CGT AAG GGA TTC ACT -5'`

(a) Sequence and Polarity of Transcribed mRNA:
RNA Polymerase transcribes using the Template strand (3'->5') to synthesize mRNA complementary to the template and identical to the coding strand (replacing Thymine with Uracil):
`mRNA: 5'- AUG GCA UUC CCU AAG UGA -3'`

(b) Deduction of Polypeptide Amino Acid Sequence:
Reading codons sequentially from 5' to 3':
- Codon 1: `AUG` -> **Methionine (Met)** (N-terminal amino acid)
- Codon 2: `GCA` -> **Alanine (Ala)**
- Codon 3: `UUC` -> **Phenylalanine (Phe)**
- Codon 4: `CCU` -> **Proline (Pro)**
- Codon 5: `AAG` -> **Lysine (Lys)**
- Codon 6: `UGA` -> **Stop Codon** (Translational Termination)
Primary Polypeptide Sequence:
`NH2 - Met - Ala - Phe - Pro - Lys - COOH` (Pentapeptide length).

(c) Effect of Transition Mutation at 6th Nucleotide (A to G in Coding Strand):
- Original 2nd codon: `GCA` (Alanine).
- 6th nucleotide is the third base of codon 2: `GCA` -> mutated to `GCG`.
- Mutated mRNA 2nd codon: `GCG`.
- Biochemical Outcome: In the genetic code, `GCA`, `GCC`, `GCU`, and `GCG` all specify **Alanine** (code degeneracy / wobble position).
- Phenotypic Consequence: This is a **Silent (Synonymous) Mutation**. The amino acid sequence remains completely unaltered (`Met - Ala - Phe - Pro - Lys`). The bacterial enzyme maintains 100% normal function and wild-type phenotype.

(d) Effect of Frameshift Deletion of 4th Nucleotide (G Deleted from Coding Strand):
- Original Coding Strand: `5'- ATG [G]CA TTC CCT AAG TGA -3'`
- After deletion of nucleotide 4 (G):
  `5'- ATG CAT TCC CTA AGT GA... -3'`
- Transcribed mRNA:
  `5'- AUG CAU UCC CUA AGU GA... -3'`
- New Triplet Reading Frames:
  * Codon 1: `AUG` -> **Met**
  * Codon 2: `CAU` -> **Histidine (His)** (altered from Ala!)
  * Codon 3: `UCC` -> **Serine (Ser)** (altered from Phe!)
  * Codon 4: `CUA` -> **Leucine (Leu)** (altered from Pro!)
  * Codon 5: `AGU` -> **Serine (Ser)** (altered from Lys!)
  * Codon 6: `GA...` -> Reading frame shift removes the original UGA stop codon. Translation will continue into non-coding regions until an out-of-frame stop codon is encountered.
- Phenotypic Consequence: This **Frameshift Mutation** causes a complete missense scramble of all amino acids downstream of the lesion, completely destroying tertiary folding and catalytic activity. The resulting mutant pathogen protein is non-functional, leading to a loss-of-function mutant phenotype.""",
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
        "modelAnswer": """Case Study Analysis — The 1970 Southern Corn Leaf Blight Epidemic and T-CMS:

(a) Molecular and Cellular Mechanism of Hyper-Susceptibility:
- The Texas cytoplasmic male sterility (T-CMS) was caused by a unique, chimeric mitochondrial gene termed **T-urf13** (formed via aberrant mitochondrial recombination).
- *T-urf13* encodes a 13-kDa hydrophobic protein (URF13) that embeds as a tetramer within the inner mitochondrial membrane, disrupting pollen tapetum development and conferring male sterility.
- Co-Evolution of the Pathogen (*Bipolaris maydis* Race T):
  The fungal pathogen evolved a specialized strain (Race T) that synthesizes a deadly family of linear polyketide molecules called **T-toxin**.
  * In normal (*N*) cytoplasm maize, T-toxin has zero toxicity.
  * In T-CMS maize, T-toxin binds with extreme stereochemical affinity to the URF13 protein embedded in the mitochondrial membrane.
  * Toxin binding forces the URF13 channels wide open, collapsing the proton gradient, uncoupling oxidative phosphorylation, and releasing Ca2+ and cytochrome c.
  * This triggers rapid, catastrophic necrosis and systemic cell death across leaves, stalks, and ears, completely destroying infected plants within days.

(b) Why the Adoption of T-CMS Created Extreme Genetic Vulnerability:
- Commercial Economic Driver: Hybrid seed production in maize historically required hiring massive labor crews to manually pull tassels (detassel) from female rows before pollen shed. T-CMS eliminated manual detasseling entirely, saving seed companies millions of dollars.
- **Cytoplasmic Monoculture:** Seed companies universally converted virtually all commercial hybrid parental lines to T-CMS. By 1970, more than **85% of all maize fields in the United States shared the identical T-cytoplasm**.
- While farmers planted diverse commercial hybrid varieties with different nuclear pedigrees, they all shared **100% identical mitochondrial DNA**. When *Bipolaris maydis* Race T emerged, there were zero cytoplasmic resistance barriers across millions of continuous hectares.

(c) Lessons Learned and Modern Diversification Strategies:
The 1970 disaster fundamentally transformed plant breeding policy worldwide, establishing the science of **genetic vulnerability management**:
1. Prohibition of Cytoplasmic Monocultures: Modern hybrid breeding regulations strictly prohibit relying on a single source of male-sterile cytoplasm. Seed companies are legally required to diversify maternal cytoplasms.
2. Cytoplasmic Diversification in Hybrid Maize: Replacement of T-cytoplasm with **C-cytoplasm (Charrua)** and **S-cytoplasm (USDA-S)**, which carry different chimeric mitochondrial genes (*atp6* and *pvs*) that are 100% immune to *Bipolaris maydis* T-toxin.
3. Adoption of Multi-Line Cytoplasms in Rice and Sorghum: Hybrid rice breeding programs in China and India maintain a portfolio of distinct CMS sources: Wild Abortive (WA), Kalinga, Dwarf-Wild (DA), Gambiaca, and Tian-CMS.
4. Deployment of Alternative Non-CMS Systems: Expansion of **Environment-sensitive Genic Male Sterility (EGMS: TGMS and PGMS)** in two-line hybrid rice and **Genetically Engineered Male Sterility (Barnase-Barstar system)**, which eliminate mitochondrial vulnerability entirely.""",
        "outlinePoints": [
            "Molecular interaction between fungal T-toxin and mitochondrial URF13 protein pores",
            "Collapse of mitochondrial membrane potential triggering catastrophic leaf blighting",
            "Economic driver (eliminating detasseling costs) leading to 85% cytoplasmic monoculture",
            "False security of nuclear diversity masking 100% mitochondrial vulnerability",
            "Breeding policy shifts: prohibition of cytoplasmic monocultures and diversification into C and S cytoplasms",
            "Adoption of multi-cytoplasmic breeding in hybrid rice and EGMS two-line systems"
        ]
    }
]

# ----------------- 20 Flashcards -----------------
unit5["flashcards"] = [
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
        "back": "Diameter = 20 Å (2.0 nm); Pitch (turn) = 34 Å (3.4 nm); ~10.5 base pairs per turn; Rise per base pair = 3.4 Å.",
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

out_path = os.path.abspath("server/data/gpb203/unit5.ts")
with open(out_path, "w", encoding="utf-8") as f:
    f.write('import { UnitContent } from "./types";\n\n')
    f.write('export const unit5Content: UnitContent = ')
    f.write(json.dumps(unit5, indent=2))
    f.write(';\n')

print(f"Generated GPB203 Unit 5 successfully: {len(unit5['mcqs'])} MCQs, {len(unit5['subjectiveQuestions'])} Subj, {len(unit5['flashcards'])} Flashcards")
