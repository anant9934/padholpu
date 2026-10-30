import json
import os

unit1 = {
    "unitNumber": 1,
    "title": "Mendelian Genetics",
    "shortDescription": "Foundational principles of heredity, Mendel's laws of segregation and independent assortment, monohybrid, dihybrid and trihybrid crosses, test crosses, back crosses, gene interactions, lethal genes, and multiple allelism.",
    "estimatedReadTimeMinutes": 22,
    "syllabusTopics": [
        "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)",
        "Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios",
        "Test cross, back cross, and reciprocal crosses in genetic analysis",
        "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor"
    ],
    "notes": {
        "learningObjectives": [
            "Explain Gregor Johann Mendel's experimental design, selection of Pisum sativum, and statistical derivation of the laws of segregation and independent assortment.",
            "Calculate phenotypic and genotypic frequencies for monohybrid, dihybrid, and trihybrid crosses, including branch-line and Punnett square methods.",
            "Differentiate between test cross, back cross, and reciprocal cross, evaluating their utility in determining zygosity and maternal effects.",
            "Analyze modifications of Mendelian dihybrid ratios resulting from incomplete dominance, codominance, epistasis (complementary, supplementary, duplicate), and lethal genes.",
            "Understand the genetics of multiple allelic series, dominance hierarchies, and their application in human ABO blood group and Rh incompatibility systems."
        ],
        "sections": [
            {
                "id": "sec-gpb-1-1",
                "heading": "1. Mendel's Experimental System and Laws of Inheritance",
                "content": "Gregor Johann Mendel (1822–1884), through meticulous hybridization experiments on the garden pea (*Pisum sativum*) conducted between 1856 and 1863 at the Augustinian Abbey of St. Thomas in Brno, laid the mathematical foundation of transmission genetics. Mendel's success over previous hybridizers (such as Kolreuter, Knight, and Gartner) was attributable to: (1) selection of a strictly self-pollinating species with easily crossable, bisexual, cleistogamous flowers; (2) focusing on discrete, contrasting qualitative characters rather than complex continuous variations; (3) maintaining precise quantitative pedigree records across successive generations (P1, F1, F2, F3); and (4) applying statistical probability to analyze phenotypic segregations.\n\n### The Seven Pairs of Contrasting Characters in Garden Pea:\n1. Stem height: Tall (*T*) vs Dwarf (*t*)\n2. Flower position: Axial (*A*) vs Terminal (*a*)\n3. Flower color: Violet/Purple (*C*) vs White (*c*)\n4. Pod shape: Inflated (*I*) vs Constricted (*i*)\n5. Pod color: Green (*G*) vs Yellow (*g*)\n6. Seed shape: Round (*R*) vs Wrinkled (*r*)\n7. Cotyledon/Seed color: Yellow (*Y*) vs Green (*y*)",
                "subsections": [
                    {
                        "subheading": "The Law of Segregation (Mendel's First Law)",
                        "content": "The Law of Segregation states that during gamete formation in a heterozygote, the two alleles of a gene pair separate (segregate) cleanly from each other without blending or contaminating one another, such that each gamete receives only one allele with equal probability (50%). When F1 heterozygous plants (*Tt*) undergo meiosis, homologous chromosomes carrying *T* and *t* separate at Anaphase I, ensuring gametic purity. For this reason, the first law is also termed the 'Principle of Purity of Gametes'.",
                        "keyPoints": [
                            "Alleles remain structurally intact and pure throughout somatic cell divisions.",
                            "Segregation occurs strictly during Anaphase I of meiosis as homologous centromeres separate.",
                            "The monohybrid F2 phenotypic ratio is 3:1 (dominant to recessive), while the genotypic ratio is 1:2:1 (1 TT : 2 Tt : 1 tt)."
                        ]
                    },
                    {
                        "subheading": "The Law of Independent Assortment (Mendel's Second Law)",
                        "content": "The Law of Independent Assortment asserts that when two or more pairs of independent, non-allelic genes are brought together in a hybrid, the segregation of alleles of one gene occurs completely independently of the segregation of alleles of any other gene during gametogenesis. This law applies strictly to genes residing on non-homologous chromosomes or located sufficiently far apart on the same chromosome (>50 cM) to exhibit unlinked behavior.",
                        "table": {
                            "headers": ["Cross Type", "F1 Genotype", "Gamete Types", "F2 Phenotypic Ratio", "F2 Genotypic Ratio"],
                            "rows": [
                                ["Monohybrid", "Aa", "2 (A, a)", "3:1 (2 phenotypes)", "1:2:1 (3 genotypes)"],
                                ["Dihybrid", "AaBb", "4 (AB, Ab, aB, ab)", "9:3:3:1 (4 phenotypes)", "1:2:1:2:4:2:1:2:1 (9 genotypes)"],
                                ["Trihybrid", "AaBbCc", "8 (2^3)", "27:9:9:9:3:3:3:1 (8 phenotypes)", "27 genotypes (3^3)"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-gpb-1-2",
                "heading": "2. Test Cross, Back Cross, and Reciprocal Crosses",
                "content": "Geneticists employ specialized crosses to diagnose the allelic composition of individuals, verify gametic segregation ratios, and ascertain whether traits are governed by nuclear or extranuclear determinants.",
                "subsections": [
                    {
                        "subheading": "Analytical Diagnostic Crosses",
                        "content": "Definitions, procedures, and applications of diagnostic breeding crosses in crop genetics:",
                        "table": {
                            "headers": ["Cross Type", "Parental Combination", "Expected Ratio", "Genetic Application"],
                            "rows": [
                                ["Back Cross", "F1 hybrid × Either parent (P1 or P2)", "Varies depending on dominant or recessive parent", "Used in plant breeding to introgress a specific desirable gene from donor parent into recipient recurrent parent."],
                                ["Test Cross", "F1 hybrid × Homozygous double recessive parent", "Monohybrid 1:1; Dihybrid 1:1:1:1; Trihybrid 1:1:1:1:1:1:1:1", "Tests whether an individual displaying dominant phenotype is homozygous (*TT*) or heterozygous (*Tt*). Directly reflects types and frequencies of gametes produced by F1."],
                                ["Reciprocal Cross", "Cross A (Female P1 × Male P2) inverted to Cross B (Female P2 × Male P1)", "Identical ratios in nuclear inheritance; disparate ratios in cytoplasmic inheritance", "Detects maternal effects, organellar (chloroplast/mitochondrial) inheritance, and sex-linked genes."]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-gpb-1-3",
                "heading": "3. Deviations from Mendelism: Gene Interactions and Lethality",
                "content": "Classical Mendelian inheritance assumes complete dominance and independent action of single genes. However, post-Mendelian discoveries revealed intra-allelic and inter-allelic interactions that modify standard phenotypic ratios while leaving genotypic segregation (1:2:1 or 9:3:3:1) intact.",
                "subsections": [
                    {
                        "subheading": "Intra-Allelic Interactions",
                        "content": "1. **Incomplete Dominance (Partial Dominance):** Neither allele is completely dominant over the other; the F1 heterozygote exhibits an intermediate phenotype. Classic example: *Mirabilis jalapa* (Four o'clock plant) and *Antirrhinum majus* (Snapdragon) flower color where Red (*RR*) × White (*rr*) produces Pink (*Rr*). F2 phenotypic and genotypic ratios coincide at 1 Red : 2 Pink : 1 White (1:2:1).\n\n2. **Codominance:** Both alleles of a heterozygous gene pair express themselves simultaneously and equally in the phenotype without blending. Example: Roan coat color in shorthorn cattle (*CRCR* Red × *CWCW* White → *CRCW* Roan with intermingled red and white hairs); human MN blood group antigens (*LM*, *LN*); and *IA*, *IB* alleles of ABO blood system.\n\n3. **Lethal Genes:** Alleles that cause the premature death of the organism carrying them, typically in the homozygous condition. Lucien Cuenot (1905) discovered lethal yellow coat color in mice (*Ay*), where *AyAy* dies *in utero*, yielding a modified 2 yellow : 1 agouti ratio. In plants, albino seedlings in maize and snapdragon (*golden* allele) die upon exhausting endosperm reserves due to absence of chlorophyll, producing a 2:1 green-to-albino survival ratio."
                    },
                    {
                        "subheading": "Inter-Allelic (Epistatic) Interactions Modifying Dihybrid 9:3:3:1 Ratio",
                        "content": "Epistasis occurs when one gene locus masks, inhibits, or modifies the phenotypic expression of alleles at a distinct non-allelic gene locus:",
                        "table": {
                            "headers": ["Type of Interaction", "Modified F2 Ratio", "Biochemical / Crop Example", "Mechanism"],
                            "rows": [
                                ["Recessive Epistasis (Supplementary)", "9:3:4", "Coat color in mice, bulb color in onion", "Homozygous recessive *aa* masks the expression of *B/b* alleles."],
                                ["Dominant Epistasis", "12:3:1", "Fruit color in summer squash (*Cucurbita pepo*)", "Dominant allele *A* inhibits pigment synthesis regardless of *B* locus."],
                                ["Duplicate Recessive (Complementary)", "9:7", "Flower color in sweet pea (*Lathyrus odoratus*)", "Recessive homozygosity at either locus (*aa* or *bb*) blocks pathway."],
                                ["Duplicate Dominant", "15:1", "Seed capsule shape in shepherd's purse (*Capsella bursa-pastoris*)", "Dominant allele at either of two loci produces the triangular phenotype."],
                                ["Duplicate Genes with Cumulative Effect", "9:6:1", "Fruit shape in squash (*Cucurbita pepo*)", "Two dominants produce disc, single dominant gives sphere, double recessive gives long."],
                                ["Dominant Inhibitory Epistasis", "13:3", "Feather color in fowl, grain color in maize", "Dominant inhibitor *I* suppresses dominant pigment allele *P*."]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-gpb-1-4",
                "heading": "4. Multiple Alleles and Pseudoalleles",
                "content": "Multiple alleles represent a series of more than two alternate forms of a single gene locus, arising through repeated independent mutations, that occupy the same chromosomal position in a homologous pair.\n\n### Fundamental Characteristics of Multiple Alleles:\n- They occupy identical loci on homologous chromosomes; therefore, crossing over cannot take place between multiple alleles of the same series.\n- An individual diploid organism carries at most two alleles of the series, whereas a gamete carries only one.\n- Multiple alleles always govern the same general phenotypic trait, exhibiting varying degrees of expression or qualitative difference.\n- The wild-type allele is usually completely dominant, while mutant alleles show intermediate dominance or codominance among themselves.\n- When any two mutant alleles are crossed, the hybrid exhibits a mutant rather than wild-type phenotype (no complementation).\n\n### Number of Genotypes Possible:\nFor a multiple allelic series with *n* alleles, the total number of possible diploid genotypes is given by: `Total Genotypes = n(n + 1) / 2`, comprising `n` homozygous genotypes and `n(n - 1) / 2` heterozygous genotypes.",
                "subsections": [
                    {
                        "subheading": "Human ABO Blood Groups and Rh Incompatibility",
                        "content": "Discovered by Karl Landsteiner in 1900, the ABO system is controlled by the *I* gene (Isohemagglutinin) with three alleles: *IA*, *IB*, and *i* (or *IO*). Alleles *IA* and *IB* produce distinct glycosyltransferase enzymes that add N-acetylgalactosamine and D-galactose, respectively, to the precursor H-antigen, while *i* is an inactive null allele. *IA* and *IB* are codominant with respect to each other and both are dominant over *i*. This gives rise to 6 genotypes and 4 phenotypes (Blood groups A, B, AB, and O).\n\nThe Rh blood group system, discovered by Landsteiner and Wiener (1940), involves the Rh antigen (D-antigen). Erythroblastosis fetalis (hemolytic disease of the newborn) develops when an Rh-negative mother carries an Rh-positive fetus; maternal anti-D IgG antibodies cross the placenta in subsequent Rh-positive pregnancies, destroying fetal red blood cells."
                    }
                ]
            }
        ],
        "keyTakeaways": [
            "Mendel's experimental precision with Pisum sativum established the fundamental particulate nature of inheritance.",
            "The Law of Segregation explains 3:1 F2 phenotypic ratio and 1:2:1 genotypic ratio through gametic purity.",
            "The Law of Independent Assortment produces the 9:3:3:1 dihybrid ratio, applying only to non-linked gene loci.",
            "Epistatic gene interactions modify classical dihybrid ratios (e.g., 9:7 complementary, 9:3:4 recessive epistasis, 12:3:1 dominant epistasis) without altering underlying genotypic segregation.",
            "Multiple allelic series occupy identical loci, do not cross over, and generate n(n+1)/2 genotypes in diploid populations."
        ],
        "commonMisunderstandings": [
            {
                "myth": "Gene interactions and epistasis violate Mendel's Law of Segregation.",
                "reality": "Epistasis modifies phenotypic expression and outward ratios (e.g., 9:7 or 12:3:1), but the underlying alleles still segregate at Anaphase I strictly in Mendelian genotypic proportions (1:2:1:2:4:2:1:2:1)."
            },
            {
                "myth": "An individual organism can carry more than two alleles of a multiple allelic series.",
                "reality": "While a population can have tens or hundreds of alleles at a gene locus (e.g., self-incompatibility S-alleles in plants), any single diploid individual can carry at most two alleles."
            }
        ],
        "summary": "Unit 1 establishes the foundational architecture of transmission genetics. Beginning with Mendel's pioneering experiments on Pisum sativum and his laws of segregation and independent assortment, it explores the mathematical derivation of monohybrid, dihybrid, and trihybrid ratios. Analytical crosses including back crosses and test crosses serve as diagnostic tools for zygosity and gametic output. The unit analyzes non-Mendelian modifications arising from incomplete dominance, codominance, lethal alleles, and diverse epistatic gene interactions, concluding with the principles of multiple allelism illustrated by ABO blood antigens and Rh factor dynamics."
    },
    "mcqs": [],
    "subjectiveQuestions": [],
    "flashcards": []
}

# ----------------- 60 MCQs -----------------
# 20 Easy, 25 Medium, 15 Hard
mcq_data = [
    # Topic 1: Mendel's experiments and laws of inheritance (12 Qs: 4E, 5M, 3H)
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Easy",
     "Which plant was utilized by Gregor Johann Mendel for his historical hybridization experiments?",
     "Lathyrus odoratus", "Pisum sativum", "Phaseolus vulgaris", "Cajanus cajan", "B",
     "Mendel selected the garden pea (Pisum sativum) due to its clear contrasting traits, annual life cycle, and naturally self-pollinating flowers."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Easy",
     "How many pairs of contrasting characters in garden pea were investigated by Mendel?",
     "Five pairs", "Seven pairs", "Ten pairs", "Twelve pairs", "B",
     "Mendel studied exactly seven distinct pairs of contrasting phenotypic characters in Pisum sativum."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Easy",
     "Which of the following seed traits was recognized by Mendel as dominant in garden pea?",
     "Wrinkled seed shape", "Green seed color", "Round seed shape", "Constricted pod shape", "C",
     "Round seed shape (governed by the R allele producing starch branching enzyme I) is dominant over wrinkled seed shape (r)."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Easy",
     "Mendel's First Law, the Law of Segregation, is fundamentally based on:",
     "Blending of parental fluids", "Purity of gametes", "Linkage between genes", "Crossing over at pachytene", "B",
     "The Law of Segregation is also known as the Principle of Purity of Gametes because alleles segregate without blending."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Medium",
     "During which cell division stage does physical segregation of homologous alleles take place?",
     "Metaphase II of meiosis", "Anaphase I of meiosis", "Prophase I of meiosis", "Telophase II of meiosis", "B",
     "Homologous chromosomes carrying alternative alleles separate from each other during Anaphase I of meiosis."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Medium",
     "Mendel presented his landmark research paper entitled 'Experiments in Plant Hybridization' in which year?",
     "1856", "1865", "1900", "1884", "B",
     "Mendel read his findings before the Natural History Society of Brno in 1865, and the paper was published in 1866."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Medium",
     "The independent rediscovery of Mendel's laws in 1900 was accomplished by which trio of botanists?",
     "Watson, Crick, and Franklin", "Hugo de Vries, Carl Correns, and Erich von Tschermak", "Bateson, Punnett, and Morgan", "Sutton, Boveri, and McClintock", "B",
     "De Vries (Netherlands), Correns (Germany), and von Tschermak (Austria) independently rediscovered and confirmed Mendel's laws in 1900."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Medium",
     "Why does the Law of Independent Assortment fail when two genes are closely linked on the same chromosome?",
     "Because homologous pairs do not pair in synapsis", "Because linked genes tend to be inherited together during meiosis", "Because DNA replication stops", "Because centromeres fail to divide", "B",
     "Independent assortment requires genes to be on non-homologous chromosomes or far apart; physical linkage prevents independent recombination."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Medium",
     "In garden pea, which pair represents dominant flower position and dominant pod color?",
     "Terminal position and Yellow pod", "Axial position and Green pod", "Axial position and Yellow pod", "Terminal position and Green pod", "B",
     "In Pisum sativum, axial flower position and green pod color are dominant over terminal flower position and yellow pod color."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Hard",
     "Which modern molecular enzyme defect is responsible for the wrinkled seed phenotype (r) studied by Mendel?",
     "Loss of Phytoene synthase", "Insertion inactivation of Starch Branching Enzyme I (SBEI)", "Mutation in Gibberellin 20-oxidase", "Deficiency in Alcohol dehydrogenase", "B",
     "Wrinkled peas carry a transposon-like 0.8 kb insertion in the gene encoding Starch Branching Enzyme I (SBEI), causing sucrose accumulation."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Hard",
     "Mendel's tall vs dwarf stem length is governed by the Le gene. The dwarf phenotype (le) results from a mutation in:",
     "Gibberellin 3-beta-hydroxylase", "Auxin response factor 7", "Cytokinin dehydrogenase", "Abscisic acid aldehyde oxidase", "A",
     "The Le gene encodes GA 3-beta-hydroxylase, which converts inactive GA20 into active GA1. The recessive mutant produces a dwarfed stem."),
    ("Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)", "Hard",
     "Under what cytogenetic condition will two non-allelic genes on the same chromosome assort completely independently?",
     "When they are less than 10 cM apart", "When recombination frequency reaches the maximum ceiling of 50%", "When a pericentric inversion is present", "When heterochromatin blocks crossing over", "B",
     "When two syntenic genes are separated by 50 cM or more, multiple crossovers result in 50% recombinant gametes, indistinguishable from independent assortment."),

    # Topic 2: Monohybrid, dihybrid, and trihybrid crosses (12 Qs: 4E, 5M, 3H)
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Easy",
     "What is the expected classical phenotypic ratio in the F2 generation of a Mendelian monohybrid cross?",
     "1:2:1", "3:1", "9:3:3:1", "1:1", "B",
     "A monohybrid cross between heterozygous F1 individuals (Tt x Tt) yields a 3 dominant to 1 recessive phenotypic ratio."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Easy",
     "What is the expected genotypic ratio in the F2 generation of a Mendelian monohybrid cross?",
     "3:1", "1:2:1", "1:1:1:1", "9:3:3:1", "B",
     "The genotypic segregation of Tt x Tt is 1 TT : 2 Tt : 1 tt (1:2:1)."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Easy",
     "How many different types of gametes are produced by an individual of genotype AaBb?",
     "2", "4", "8", "16", "B",
     "The number of gametes produced by a heterozygous genotype is 2^n, where n is the number of heterozygous loci. For AaBb, 2^2 = 4 (AB, Ab, aB, ab)."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Easy",
     "What is the standard phenotypic ratio in the F2 generation of a Mendelian dihybrid cross?",
     "1:2:1", "3:1", "9:3:3:1", "15:1", "C",
     "The independent assortment of two heterozygous gene pairs (AaBb x AaBb) produces a 9:3:3:1 phenotypic ratio."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Medium",
     "In an F2 dihybrid population of 1600 plants, approximately how many plants are expected to be homozygous recessive for both traits (aabb)?",
     "900", "300", "100", "16", "C",
     "The frequency of double recessive aabb is 1/16. For 1600 plants, 1600 * (1/16) = 100 plants."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Medium",
     "How many unique genotypic classes are produced in the F2 generation of a dihybrid cross?",
     "4", "8", "9", "16", "C",
     "The number of genotypic classes in an F2 generation is given by 3^n. For n = 2 (dihybrid), 3^2 = 9 distinct genotypes."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Medium",
     "How many different types of gametes are formed by a trihybrid plant with genotype AaBbCc?",
     "6", "8", "16", "27", "B",
     "Using the 2^n formula where n = 3, 2^3 = 8 distinct gametic combinations are generated."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Medium",
     "What is the expected F2 phenotypic ratio of a trihybrid cross involving complete dominance at all three loci?",
     "9:3:3:1", "27:9:9:9:3:3:3:1", "1:1:1:1:1:1:1:1", "15:1:15:1", "B",
     "The expansion of (3:1)^3 generates 8 phenotypic classes: 27:9:9:9:3:3:3:1."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Medium",
     "What proportion of the F2 generation in a dihybrid cross is completely homozygous for both loci (AABB, AAbb, aaBB, or aabb)?",
     "1/16", "2/16", "4/16 (1/4)", "9/16", "C",
     "Each double homozygote occurs with a frequency of 1/16. With 4 such classes (AABB, AAbb, aaBB, aabb), the total proportion is 4/16 = 1/4."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Hard",
     "What is the probability of obtaining an offspring with genotype AaBbCc from a cross between parents of genotypes AaBbCc x AaBbCc?",
     "1/8", "1/16", "1/64", "8/64 (1/8)", "D",
     "P(Aa) = 1/2, P(Bb) = 1/2, P(Cc) = 1/2. By the product rule of probability, P(AaBbCc) = 1/2 * 1/2 * 1/2 = 1/8 (or 8/64)."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Hard",
     "In a cross AaBbCcDd x AaBbCcDd, how many distinct phenotypic and genotypic classes are generated in the progeny?",
     "8 phenotypes, 27 genotypes", "16 phenotypes, 81 genotypes", "32 phenotypes, 64 genotypes", "16 phenotypes, 256 genotypes", "B",
     "For n = 4 heterozygous genes: Phenotypic classes = 2^4 = 16; Genotypic classes = 3^4 = 81."),
    ("Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios", "Hard",
     "From a cross between AaBb x aabb, what percentage of the progeny is expected to show the dominant phenotype for both traits assuming independent assortment?",
     "50%", "25%", "75%", "12.5%", "B",
     "A dihybrid test cross produces AaBb, Aabb, aaBb, and aabb in a 1:1:1:1 ratio. The dominant phenotype (AaBb) represents 1/4 = 25%."),

    # Topic 3: Test cross, back cross, and reciprocal crosses (12 Qs: 4E, 5M, 3H)
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Easy",
     "A test cross involves crossing an individual displaying a dominant phenotype with an individual of which genotype?",
     "Homozygous dominant", "Heterozygous dominant", "Homozygous recessive", "Any wild-type parent", "C",
     "A test cross specifically mates the individual of unknown genotype with a homozygous recessive individual."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Easy",
     "What is the expected phenotypic ratio from a monohybrid test cross (Tt x tt)?",
     "3:1", "1:1", "1:2:1", "9:3:3:1", "B",
     "A monohybrid test cross (Tt x tt) produces 50% tall (Tt) and 50% dwarf (tt), yielding a 1:1 ratio."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Easy",
     "A cross between an F1 hybrid and either of its parental strains is called a:",
     "Test cross", "Back cross", "Reciprocal cross", "Dihybrid cross", "B",
     "A back cross is a cross between an F1 hybrid and either of its parents (dominant or recessive). All test crosses are back crosses, but not all back crosses are test crosses."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Easy",
     "What is the primary function of a genetic test cross?",
     "To create polyploid plants", "To determine whether an individual is homozygous or heterozygous dominant", "To induce beneficial mutations", "To double chromosome numbers", "B",
     "A test cross reveals whether an organism showing a dominant trait is homozygous (yielding 100% dominant progeny) or heterozygous (yielding a 1:1 ratio)."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Medium",
     "What is the expected phenotypic ratio in a dihybrid test cross involving independently assorting genes (AaBb x aabb)?",
     "9:3:3:1", "1:1:1:1", "1:2:1", "3:1", "B",
     "A dihybrid test cross produces four phenotypic classes in equal proportions: 1:1:1:1."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Medium",
     "In a reciprocal cross, if Cross 1 is Female A x Male B, then Cross 2 must be:",
     "Female A x Male A", "Female B x Male A", "Female B x Male B", "Female AB x Male AB", "B",
     "A reciprocal cross inverts the sexes of the parents: Female B is crossed with Male A."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Medium",
     "If reciprocal crosses produce significantly different phenotypic outcomes in the F1 generation, the trait is most likely:",
     "Governed by autosomal unlinked genes", "Influenced by maternal cytoplasmic inheritance or sex-linkage", "Under incomplete dominance", "Controlled by duplicate recessive epistasis", "B",
     "Discrepancies in reciprocal crosses indicate extranuclear (maternal/organellar) inheritance or sex-linked genes on sex chromosomes."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Medium",
     "In plant breeding, repeatedly backcrossing an F1 hybrid to the recurrent parent is primarily done to:",
     "Increase genetic variability", "Transfer a specific target gene into an established elite cultivar's genetic background", "Induce cytoplasmic male sterility", "Break all linkage blocks", "B",
     "Backcross breeding transfers a specific gene (e.g., disease resistance) from a donor parent while recovering ~99% of the recurrent parent's genome after 6 backcrosses."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Medium",
     "A tall pea plant is test crossed and produces 48 tall and 52 dwarf offspring. What was the genotype of the parent plant?",
     "TT", "Tt", "tt", "Cannot be determined", "B",
     "The approximately 1:1 ratio (48:52) confirms that the parent tall plant was heterozygous (Tt)."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Hard",
     "What phenotypic ratio is obtained from a trihybrid test cross (AaBbCc x aabbcc) assuming independent assortment?",
     "27:9:9:9:3:3:3:1", "1:1:1:1:1:1:1:1", "9:3:3:1", "3:1:3:1:3:1:3:1", "B",
     "A trihybrid test cross yields eight phenotypic classes in equal proportions: 1:1:1:1:1:1:1:1."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Hard",
     "In a test cross of AaBb, the progeny counts are: 403 AB, 397 ab, 102 Ab, and 98 aB. This significant deviation from 1:1:1:1 indicates:",
     "Maternal inheritance", "Linkage between gene A and gene B", "Dominant epistasis", "Incomplete penetrance", "B",
     "The excess of parental types (403 + 397 = 800) over recombinant types (102 + 98 = 200) indicates linkage with a recombination frequency of 20% (20 cM)."),
    ("Test cross, back cross, and reciprocal crosses in genetic analysis", "Hard",
     "How many backcross generations are typically required in recurrent backcross breeding to recover over 98% of the recurrent parent genome?",
     "2 generations", "3 generations", "6 generations", "12 generations", "C",
     "The proportion of recurrent parent genome recovered is 1 - (1/2)^(n+1). For n = 6 backcrosses: 1 - (1/2)^7 = 1 - 1/128 = 99.2%."),

    # Topic 4: Gene interactions: Incomplete dominance, codominance, lethal genes (12 Qs: 4E, 5M, 3H)
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Easy",
     "Flower color inheritance in Mirabilis jalapa (Four o'clock) exhibiting pink flowers in F1 is an example of:",
     "Complete dominance", "Incomplete dominance", "Codominance", "Overdominance", "B",
     "Crossing red (RR) and white (rr) four o'clock plants yields pink (Rr) F1 flowers due to incomplete (partial) dominance."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Easy",
     "What is the F2 phenotypic ratio in a monohybrid cross displaying incomplete dominance?",
     "3:1", "1:2:1", "9:3:3:1", "2:1", "B",
     "In incomplete dominance, the phenotypic ratio matches the genotypic ratio: 1 Red : 2 Pink : 1 White (1:2:1)."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Easy",
     "Which of the following is a classic textbook example of codominance in animals?",
     "Roan coat color in shorthorn cattle", "Albino seedlings in maize", "Comb shape in poultry", "Seed shape in garden pea", "A",
     "Roan cattle (CRCW) express both red and white hairs simultaneously without blending, demonstrating codominance."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Easy",
     "What modified phenotypic ratio is typically produced by a recessive lethal gene in the surviving progeny of a monohybrid cross?",
     "3:1", "1:2:1", "2:1", "1:1", "C",
     "Because homozygous lethal individuals (e.g., AyAy mice) die in utero or as seedlings, the surviving progeny segregate in a 2:1 ratio."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Medium",
     "In poultry, crossing pea comb (RRpp) with rose comb (rrPP) yields walnut comb (RrPp) in F1. This classic gene interaction was discovered by:",
     "Mendel and Morgan", "Bateson and Punnett", "Beadle and Tatum", "Sutton and Boveri", "B",
     "William Bateson and Reginald Punnett discovered complementary interaction affecting comb shape in poultry producing walnut comb (9:3:3:1)."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Medium",
     "What modified F2 dihybrid phenotypic ratio characterizes duplicate recessive epistasis (complementary gene interaction)?",
     "9:3:4", "12:3:1", "9:7", "15:1", "C",
     "Duplicate recessive epistasis (e.g., flower color in sweet pea Lathyrus odoratus) produces a 9 colored : 7 white ratio."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Medium",
     "The 12:3:1 F2 dihybrid phenotypic ratio observed in fruit color of summer squash (Cucurbita pepo) is caused by:",
     "Recessive epistasis", "Dominant epistasis", "Incomplete dominance", "Polymeric gene action", "B",
     "Dominant epistasis produces a 12:3:1 ratio because the dominant allele at the first locus (W) masks the expression of alleles at the second locus (Y/y)."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Medium",
     "Recessive epistasis (supplementary gene action) in mice coat color produces which characteristic F2 ratio?",
     "9:3:4", "13:3", "9:6:1", "15:1", "A",
     "In mice, agouti (9) : black (3) : albino (4) represents a 9:3:4 ratio where the homozygous recessive cc condition epistatically masks black/agouti."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Medium",
     "A cross between two yellow mice always yields 2 yellow : 1 agouti mice. What causes this departure from Mendelian expectation?",
     "Yellow is recessive to agouti", "The yellow allele (Ay) is dominant for coat color but lethal in homozygous condition (AyAy)", "Agouti mice have higher fertility", "Crossing over separates the genes", "B",
     "Ay is a pleiotropic allele: it acts dominantly to produce yellow fur but acts recessively to cause embryonic lethality in homozygotes."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Hard",
     "What modified F2 phenotypic ratio is produced by duplicate genes with cumulative effects (polymeric gene action) in fruit shape of Cucurbita pepo?",
     "9:6:1", "15:1", "9:7", "13:3", "A",
     "Two dominant genes together produce disc shape (9), either dominant alone produces sphere shape (6), and double recessive produces long shape (1) = 9:6:1."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Hard",
     "Dominant inhibitory epistasis (such as that governing anthocyanin pigmentation in rice or feather color in fowl) produces which F2 ratio?",
     "15:1", "13:3", "9:3:4", "12:3:1", "B",
     "Dominant inhibitory epistasis results in a 13:3 ratio because a dominant inhibitor (I) suppresses the pigment allele (P), leaving only iiP- colored (3/16)."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Hard",
     "Triangular seed capsule shape in shepherd's purse (Capsella bursa-pastoris) vs ovoid capsule is governed by duplicate dominant epistasis, yielding an F2 ratio of:",
     "9:3:3:1", "15:1", "9:7", "12:3:1", "B",
     "Duplicate dominant epistasis produces a 15:1 ratio because a dominant allele at either of the two duplicate loci (T1 or T2) produces the triangular phenotype."),

    # Topic 5: Multiple alleles and pseudoalleles (12 Qs: 4E, 5M, 3H)
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Easy",
     "How many alleles are involved in governing the human ABO blood group system?",
     "Two alleles", "Three alleles", "Four alleles", "Multiple pairs on different chromosomes", "B",
     "The ABO blood group system is governed by three multiple alleles of the I gene: IA, IB, and i (or IO)."),
    ("Gene interactions: Incomplete dominance, codominance, and lethal genes", "Easy",
     "Who originally discovered the human ABO blood group system in 1900?",
     "Gregor Mendel", "Karl Landsteiner", "Thomas Hunt Morgan", "Sewall Wright", "B",
     "Austrian biologist Karl Landsteiner discovered the A, B, and O blood groups in 1900 (Nobel Prize in 1930)."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Easy",
     "In the ABO blood group system, the relationship between alleles IA and IB is:",
     "Complete dominance", "Incomplete dominance", "Codominance", "Epistasis", "C",
     "IA and IB are codominant: a person of genotype IAIB expresses both A and B antigens on their erythrocytes (Blood Group AB)."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Easy",
     "A person with blood group O has which specific genotype?",
     "IAIA", "IBi", "ii", "IAIB", "C",
     "Blood group O is the universal recessive phenotype, requiring homozygous null alleles (ii)."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Medium",
     "If a multiple allelic series has n = 5 alleles in a population, how many diploid genotypes are possible?",
     "5", "10", "15", "25", "C",
     "Using the formula n(n+1)/2: 5(6)/2 = 15 distinct diploid genotypes."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Medium",
     "Which of the following blood groups is considered the universal erythrocyte donor in blood transfusions?",
     "Group AB positive", "Group O negative", "Group A negative", "Group B positive", "B",
     "O-negative RBCs lack A, B, and Rh (D) antigens, meaning recipient antibodies will not agglutinate them upon transfusion."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Medium",
     "A child has blood group O. The mother has blood group A and the father has blood group B. What are the parental genotypes?",
     "IAIA and IBi", "IAi and IBi", "IAi and IBIB", "IAIA and IBIB", "B",
     "For the child to be genotype ii, both parents must contribute an i allele. Thus, the mother is IAi and the father is IBi."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Medium",
     "Erythroblastosis fetalis (hemolytic disease of the newborn) is triggered by which maternal-fetal Rh incompatibility?",
     "Rh-positive mother carrying an Rh-negative fetus", "Rh-negative mother carrying an Rh-positive fetus", "Rh-negative mother carrying an Rh-negative fetus", "Rh-positive mother carrying an Rh-positive fetus", "B",
     "Maternal sensitization occurs when an Rh-negative mother carries an Rh-positive fetus. In subsequent Rh-positive pregnancies, maternal anti-D IgG crosses the placenta."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Medium",
     "In plants, self-incompatibility (SI) preventing self-fertilization in Brassica and Solanaceae is governed by:",
     "Lethal albino genes", "A multi-allelic S-gene series", "Cytoplasmic mitochondrial factors", "Complementary epistatic genes", "B",
     "Gametophytic and sporophytic self-incompatibility systems are governed by a hypervariable multiple-allelic S-locus."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Hard",
     "What biochemical substance provides the basal core structure onto which IA and IB glycosyltransferases attach immunodominant sugars?",
     "Lewis antigen", "H antigen (encoded by the FUT1 gene)", "Rh factor protein", "Glycophorin A", "B",
     "The H antigen, synthesized by alpha-1,2-fucosyltransferase (H gene), serves as the precursor substrate. Genetically recessive hh individuals display the rare Bombay phenotype."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Hard",
     "Pseudoalleles are defined as genes that are functionally allelic (govern the same trait) but:",
     "Reside on non-homologous chromosomes", "Can occasionally undergo intragenic crossing over because they occupy closely adjacent sub-loci", "Show cytoplasmic inheritance", "Cannot mutate", "B",
     "Pseudoalleles (e.g., lozenge eye locus in Drosophila) behave as alleles in complementation tests but can be separated by rare recombination events."),
    ("Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor", "Hard",
     "In rabbits, coat color is controlled by four multiple alleles: C (Agouti) > cch (Chinchilla) > ch (Himalayan) > c (Albino). What is the expected phenotypic outcome of crossing a heterozygous Chinchilla (cch c) with a heterozygous Himalayan (ch c)?",
     "100% Chinchilla", "1 Chinchilla : 1 Himalayan : 1 Albino", "2 Chinchilla : 1 Himalayan : 1 Albino", "1 Chinchilla : 2 Himalayan : 1 Albino", "C",
     "cch is dominant to ch and c; ch is dominant to c. Cross: cch c x ch c -> 1 cch ch (Chinchilla), 1 cch c (Chinchilla), 1 ch c (Himalayan), 1 cc (Albino). Phenotypic ratio: 2 Chinchilla : 1 Himalayan : 1 Albino.")
]

for idx, item in enumerate(mcq_data, start=1):
    q_id = f"GPB203-U1-MCQ{idx:02d}"
    unit1["mcqs"].append({
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
unit1["subjectiveQuestions"] = [
    {
        "id": "GPB203-U1-SUB01",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)",
        "questionText": "Enumerate the primary reasons for Gregor Mendel's success in discovering the fundamental laws of inheritance where earlier hybridizers failed.",
        "modelAnswer": """Gregor Johann Mendel's breakthrough in uncovering the particulate mechanism of heredity, succeeding where prominent contemporaries like Kolreuter and Knight failed, rested upon four critical methodological innovations:

1. Selection of Suitable Experimental Material:
Mendel chose the garden pea (*Pisum sativum*), which possesses ideal biological attributes:
- An annual life cycle permitting several generations of observations within a few years.
- Naturally self-pollinating cleistogamous flowers that prevent uncontrolled foreign pollination.
- Perfect bisexual flowers large enough to facilitate manual emasculation and cross-pollination.
- Readily fertile hybrid progeny, ensuring robust generational continuity.

2. Focus on Discrete, Qualitative Characters:
Earlier researchers attempted to analyze holistic plant appearance or continuously varying traits (e.g., overall vigor), becoming overwhelmed by blended variations. In contrast, Mendel isolated seven distinct, non-overlapping qualitative character pairs (e.g., tall vs dwarf, yellow vs green cotyledons, round vs wrinkled seeds).

3. Rigorous Quantitative and Statistical Pedigree Tracking:
Mendel maintained meticulous generational records, tracking parents, F1, F2, and F3 families separately. He counted hundreds of individual offspring per cross and applied mathematical probability to identify reproducible whole-number ratios (such as 3:1 and 9:3:3:1).

4. True-Breeding Parental Lines and Methodical Hypotheses Testing:
Mendel verified that his initial parental varieties bred pure for at least two generations before commencing experimental crosses, and he systematically tested his hypotheses using reciprocal and test crosses.""",
        "outlinePoints": [
            "Biological advantages of Pisum sativum (self-pollination, cleistogamy, annual cycle)",
            "Selection of seven discrete, contrasting qualitative characters",
            "Meticulous quantitative data collection and probability-based ratio analysis",
            "Use of true-breeding pure lines and rigorous testing via test crosses"
        ]
    },
    {
        "id": "GPB203-U1-SUB02",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)",
        "questionText": "State Mendel's Law of Segregation and explain why it is cytologically referred to as the 'Principle of Purity of Gametes'.",
        "modelAnswer": """Mendel's Law of Segregation (First Law of Inheritance) states that when a pair of alleles controlling a trait are brought together in an F1 hybrid, they remain distinct without blending or contaminating each other, and they cleanly segregate (separate) during the formation of gametes such that each gamete receives only one allele of the pair with equal 50% probability.

Cytological Basis and Purity of Gametes:
1. Purity of Allelic Identity: In a monohybrid heterozygote (e.g., *Tt*), the dominant allele (*T*) and recessive allele (*t*) coexist within every somatic cell nucleus without modifying each other's structural or functional identity. The recessive allele reappears completely unchanged in the F2 generation.
2. Meiotic Separation: During gametogenesis, homologous chromosomes carrying the *T* and *t* loci undergo synapsis in Prophase I and cleanly separate at Anaphase I when homologous centromeres move to opposite poles.
3. Haploid Gamete Constitution: Because gametes are haploid products of meiosis, a gamete carries only one member of each chromosome pair, and therefore strictly one allele (*T* or *t*). A gamete can never be heterozygous. Hence, gametes are intrinsically 'pure' for the factor they carry, providing the cytological justification for calling this the 'Principle of Purity of Gametes'.""",
        "outlinePoints": [
            "Formal definition of the Law of Segregation",
            "Absence of blending or contamination in heterozygous somatic cells",
            "Anaphase I separation of homologous chromosomes as the cytological mechanism",
            "Haploid nature of gametes ensuring absolute allelic purity"
        ]
    },
    {
        "id": "GPB203-U1-SUB03",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios",
        "questionText": "Using the branch-line (forked-line) method, derive the phenotypic and genotypic classes and their frequencies for a dihybrid cross (AaBb x AaBb).",
        "modelAnswer": """The branch-line (forked-line) method calculates multi-locus genetic outcomes by applying the product rule of probability to independent monohybrid segregation events.

1. Phenotypic Ratio Derivation:
In a dihybrid cross (*AaBb* x *AaBb*), each gene pair segregates into a 3/4 dominant : 1/4 recessive phenotypic ratio independently:
- Gene A: 3/4 A- (Dominant A) and 1/4 aa (Recessive a)
- Gene B: 3/4 B- (Dominant B) and 1/4 bb (Recessive b)

Multiplying branches:
- From 3/4 A-:
  * x 3/4 B- = 9/16 A-B- (Double Dominant)
  * x 1/4 bb = 3/16 A-bb (Dominant A, Recessive b)
- From 1/4 aa:
  * x 3/4 B- = 3/16 aaB- (Recessive a, Dominant B)
  * x 1/4 bb = 1/16 aabb (Double Recessive)

Phenotypic Ratio = 9:3:3:1 (Total = 16/16).

2. Genotypic Ratio Derivation:
Monohybrid genotypic segregation for both loci is 1/4 homozygous dominant : 2/4 heterozygous : 1/4 homozygous recessive:
- 1/4 AA branches to: 1/4 BB (1/16 AABB), 2/4 Bb (2/16 AABb), 1/4 bb (1/16 AAbb).
- 2/4 Aa branches to: 1/4 BB (2/16 AaBB), 2/4 Bb (4/16 AaBb), 1/4 bb (2/16 Aabb).
- 1/4 aa branches to: 1/4 BB (1/16 aaBB), 2/4 Bb (2/16 aaBb), 1/4 bb (1/16 aabb).

Genotypic Ratio = 1:2:1:2:4:2:1:2:1 (9 distinct genotypic classes).""",
        "outlinePoints": [
            "Application of the product rule of probability in the forked-line method",
            "Derivation of the 4 phenotypic classes yielding the 9:3:3:1 ratio",
            "Derivation of the 9 genotypic classes yielding the 1:2:1:2:4:2:1:2:1 ratio",
            "Verification of total frequencies summing to 16/16"
        ]
    },
    {
        "id": "GPB203-U1-SUB04",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Test cross, back cross, and reciprocal crosses in genetic analysis",
        "questionText": "Define test cross and back cross. Explain why every test cross is a back cross, but not every back cross is a test cross.",
        "modelAnswer": """Definitions:
- Back Cross: A cross between an F1 hybrid and either of its two parental strains (or an individual genetically identical to one of the parents). If the F1 hybrid (*Aa*) is crossed with the homozygous dominant parent (*AA*), it is a dominant backcross; if crossed with the homozygous recessive parent (*aa*), it is a recessive backcross.
- Test Cross: A specific diagnostic cross between an individual showing a dominant phenotype (whose genotype is unknown: *AA* or *Aa*) and a tester individual that is homozygous recessive for all loci under investigation (*aa*).

Why every test cross is a back cross, but not every back cross is a test cross:
In classical Mendelian experiments, one of the original parental strains is homozygous recessive (*aa*). When an F1 individual (*Aa*) is test-crossed, the tester partner (*aa*) is identical in genotype to the recessive parent. Thus, this test cross qualifies as a back cross to the recessive parent.

However, a back cross can also be conducted using the homozygous dominant parent (*AA*). For example, *Aa* x *AA* is a legitimate back cross, but it is NOT a test cross because the dominant parent masks recessive alleles, producing 100% dominant offspring regardless of whether the F1 parent was *AA* or *Aa*, failing to test or reveal the genotype of the F1.""",
        "outlinePoints": [
            "Definition and parental types for back cross and test cross",
            "Explanation of how test cross identifies zygosity of dominant phenotypes",
            "Structural relationship: test cross to recessive parent coincides with back cross",
            "Contrast with dominant back cross (Aa x AA) which fails diagnostic testing"
        ]
    },
    {
        "id": "GPB203-U1-SUB05",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "questionText": "Explain the genetic basis of incomplete dominance in Mirabilis jalapa flower color and compare its F2 ratios with complete dominance.",
        "modelAnswer": """Incomplete dominance (also termed partial dominance or semi-dominance) occurs when the dominant allele at a locus does not completely mask the phenotypic expression of the recessive allele in the heterozygous state, resulting in an intermediate F1 hybrid phenotype.

1. Mechanism in Mirabilis jalapa (Four o'clock plant):
- True-breeding red-flowered plants (*RR*) synthesize a full quantity of anthocyanin pigment via active enzymatic pathways.
- True-breeding white-flowered plants (*rr*) carry null or inactive alleles, producing no pigment.
- The F1 heterozygote (*Rr*) possesses only one functional *R* allele, producing roughly half the normal quantity of pigment (haploinsufficiency/dosage effect). This reduced pigment density gives the petals a pink coloration.

2. Comparison of F2 Ratios:
When F1 pink plants are self-pollinated (*Rr* x *Rr*), the F2 generation exhibits:
- Complete Dominance (e.g., Pea height):
  * Phenotypic Ratio: 3 Tall : 1 Dwarf (3:1)
  * Genotypic Ratio: 1 TT : 2 Tt : 1 tt (1:2:1)
  * Note: Heterozygotes (*Tt*) cannot be visually distinguished from homozygotes (*TT*).
- Incomplete Dominance (*Mirabilis jalapa*):
  * Phenotypic Ratio: 1 Red (*RR*) : 2 Pink (*Rr*) : 1 White (*rr*) (1:2:1)
  * Genotypic Ratio: 1 RR : 2 Rr : 1 rr (1:2:1)
  * Note: Phenotypic and genotypic ratios are identical because every genotype produces a visually distinct phenotype.""",
        "outlinePoints": [
            "Definition of incomplete dominance and molecular basis (pigment dosage/haploinsufficiency)",
            "Cross schematic in Mirabilis jalapa (RR Red x rr White -> Rr Pink)",
            "Comparison of F2 phenotypic ratios: 3:1 (complete) vs 1:2:1 (incomplete)",
            "Coincidence of phenotypic and genotypic ratios in incomplete dominance"
        ]
    },
    {
        "id": "GPB203-U1-SUB06",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "questionText": "Describe the inheritance of yellow coat color in mice and explain why the yellow allele behaves as a recessive lethal gene.",
        "modelAnswer": """The inheritance of yellow coat color in mice (*Mus musculus*), first described by French geneticist Lucien Cuenot in 1905, represents the classic textbook demonstration of a lethal allele displaying pleiotropic gene action.

1. Experimental Observations:
When wild-type agouti (brownish) mice are crossed with yellow mice, the progeny always segregate in a 1 yellow : 1 agouti ratio, demonstrating that all living yellow mice are heterozygous.
When two yellow mice are crossed together, they consistently produce a ratio of approximately 2 yellow : 1 agouti, rather than the expected Mendelian 3:1 ratio. Furthermore, litter sizes from yellow x yellow crosses are roughly 25% smaller than normal.

2. Genetic and Molecular Basis:
- The yellow coat allele (*Ay*) is an allele of the Agouti locus.
- For coat coloration, *Ay* is completely dominant over the wild-type agouti allele (*A*). Any mouse possessing *AyA* develops yellow fur.
- For embryonic viability, *Ay* acts as a recessive lethal allele. Molecular analysis reveals that *Ay* arose from a large genomic deletion that fuses the *Raly* promoter to the agouti coding sequence while deleting *Raly* (an essential RNA-binding protein gene).
- In homozygous *AyAy* blastocysts, the complete absence of the RALY protein causes developmental arrest during early gastrulation, resulting in embryonic resorption in utero.
- Consequently, the 1/4 homozygous *AyAy* class dies prior to birth, leaving 2/3 *AyA* (yellow) and 1/3 *AA* (agouti), producing the characteristic 2:1 living ratio.""",
        "outlinePoints": [
            "Cuenot's crosses in yellow mice producing consistent 2:1 ratios",
            "Observation of 25% litter size reduction and absence of homozygous yellow mice",
            "Pleiotropic dual action: dominant for yellow coat, recessive for lethality",
            "Molecular cause: deletion affecting the Raly gene leading to embryonic arrest"
        ]
    },
    {
        "id": "GPB203-U1-SUB07",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor",
        "questionText": "State the key characteristics of a multiple allelic series and give the formula for calculating the number of genotypes possible.",
        "modelAnswer": """Multiple alleles constitute a series of three or more alternative forms of a single gene locus present within a population, originating via independent mutational events of the same ancestral gene.

Key Characteristics of Multiple Alleles:
1. Identical Chromosomal Locus: All alleles of a multiple series occupy the exact same locus on a homologous chromosome. Consequently, crossing over cannot take place between alleles of the same series.
2. Individual Diploid Limit: Regardless of how many alleles exist within the species population, an individual diploid organism can carry at most two alleles (one on each homologous chromosome), and a haploid gamete carries only one.
3. Common Phenotypic Domain: All alleles of a series govern the same phenotypic trait (e.g., eye color in *Drosophila*, blood groups in humans, self-incompatibility in plants), albeit producing quantitative or qualitative variations.
4. Dominance Hierarchy or Codominance: The wild-type allele is usually fully dominant over all mutant alleles, while mutant alleles may exhibit complete dominance, incomplete dominance, or codominance among themselves.
5. Lack of Complementation: When two different mutant alleles of the series are brought together in a heterozygote, the phenotype is mutant rather than wild-type.

Calculation of Genotypes:
For a series comprising *n* alleles, the total number of diploid genotypes is given by:
`Total Genotypes = n(n + 1) / 2`
This comprises `n` homozygous genotypes and `n(n - 1) / 2` heterozygous genotypes.""",
        "outlinePoints": [
            "Definition of multiple allelism and population-level existence",
            "Structural features: same locus, absence of crossing over, maximum 2 alleles per diploid",
            "Phenotypic characteristics and dominance hierarchy",
            "Mathematical formula for total, homozygous, and heterozygous genotypes"
        ]
    },
    {
        "id": "GPB203-U1-SUB08",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Hard",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor",
        "questionText": "What are pseudoalleles? How are they distinguished from true alleles using cis-trans complementation tests?",
        "modelAnswer": """Pseudoalleles are genes that appear to be allelic because they govern the same phenotypic trait, exhibit similar mutant characteristics, and fail to complement each other in standard genetic crosses, but can nevertheless undergo rare recombination (crossing over) because they occupy distinct, closely linked sub-loci along the chromosome.

Distinction via Cis-Trans Complementation Test:
The classical criterion distinguishing true alleles from pseudoalleles is the cis-trans test (developed by E. B. Lewis using the *lozenge* and *bithorax* loci in *Drosophila*):

1. Cis-Configuration (*m1 m2 / + +*):
Both mutant mutations reside on the same homolog, while the other homolog carries wild-type alleles. In this arrangement, the functional wild-type chromosome produces normal products, resulting in a wild-type phenotype in both true allelic and pseudoallelic systems.

2. Trans-Configuration (*m1 + / + m2*):
Each homologous chromosome carries one mutant and one wild-type sub-locus.
- If the mutations are in True Alleles (same cistron/gene): Neither chromosome can produce a complete functional protein; the trans-heterozygote displays a mutant phenotype (no complementation), and no recombinant wild-type progeny can be generated by crossing over.
- If the mutations are in Pseudoalleles (closely adjacent functional units or cistrons): Recombination during meiosis occasionally produces a wild-type chromosome (*+ +*) and a double mutant chromosome (*m1 m2*). The detection of rare wild-type recombinants (e.g., 1 in 10,000 progeny) provides cytogenetic proof that the two mutations occupy separate physical sites, classifying them as pseudoalleles rather than identical true alleles.""",
        "outlinePoints": [
            "Definition of pseudoalleles as closely linked, functionally related sub-loci",
            "Explanation of cis configuration (m1 m2 / + +) yielding wild-type phenotype",
            "Explanation of trans configuration (m1 + / + m2) and complementation failure",
            "Intragenic recombination as the definitive cytological proof separating pseudoalleles"
        ]
    },
    {
        "id": "GPB203-U1-SUB09",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Medium",
        "syllabusTopic": "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)",
        "questionText": "Explain Mendel's Law of Independent Assortment with the help of a dihybrid cross in Pisum sativum involving seed shape and seed color. Show the complete Punnett square, phenotypic classes, and genotypic frequencies.",
        "modelAnswer": """Mendel's Law of Independent Assortment (Second Law of Inheritance) states that when two or more pairs of independent, non-allelic genes are brought together in a hybrid, the segregation of alleles of one gene pair into gametes occurs completely independently of the segregation of alleles of any other gene pair.

1. Experimental Dihybrid Cross Setup in Pisum sativum:
- Character 1: Seed Shape — Round (*R*, dominant) vs Wrinkled (*r*, recessive)
- Character 2: Seed (Cotyledon) Color — Yellow (*Y*, dominant) vs Green (*y*, recessive)

Parental Generation (P1):
- True-breeding Round Yellow (*RRYY*) x True-breeding Wrinkled Green (*rryy*)
- Gametes: *RY* from female parent, *ry* from male parent.

First Filial Generation (F1):
- All progeny are *RrYy* (Phenotypically Round Yellow).

2. Gametogenesis in the F1 Dihybrid:
Because the *R/r* gene locus and the *Y/y* gene locus reside on different non-homologous chromosomes (Chromosome 7 and Chromosome 1, respectively), homologous chromosomes align and segregate independently at Metaphase I and Anaphase I.
Four types of gametes are produced in equal 25% frequencies:
`Gametes = 1/4 RY, 1/4 Ry, 1/4 rY, 1/4 ry`

3. The F2 16-Cell Punnett Square:
Selfing the F1 plants (*RrYy* x *RrYy*) creates 16 possible fertilization combinations:
- Row 1 (RY gamete): RRYY (Round Yellow), RRYy (Round Yellow), RrYY (Round Yellow), RrYy (Round Yellow)
- Row 2 (Ry gamete): RRYy (Round Yellow), RRyy (Round Green), RrYy (Round Yellow), Rryy (Round Green)
- Row 3 (rY gamete): RrYY (Round Yellow), RrYy (Round Yellow), rrYY (Wrinkled Yellow), rrYy (Wrinkled Yellow)
- Row 4 (ry gamete): RrYy (Round Yellow), Rryy (Round Green), rrYy (Wrinkled Yellow), rryy (Wrinkled Green)

4. Summary of F2 Phenotypic Classes (9:3:3:1):
- 9/16 Round Yellow (*R-Y-*) — Parental combination
- 3/16 Round Green (*R-yy*) — Recombinant combination
- 3/16 Wrinkled Yellow (*rrY-*) — Recombinant combination
- 1/16 Wrinkled Green (*rryy*) — Parental combination

5. Summary of F2 Genotypic Classes (1:2:1:2:4:2:1:2:1):
The 9 distinct genotypes are: 1 RRYY, 2 RRYy, 1 RRyy, 2 RrYY, 4 RrYy, 2 Rryy, 1 rrYY, 2 rrYy, and 1 rryy.

Conclusion:
The appearance of novel recombinant phenotypes (Round Green and Wrinkled Yellow) in predictable 3/16 proportions conclusively demonstrates that the allele for seed shape assorts independently from the allele for seed color.""",
        "outlinePoints": [
            "Statement and cytogenetic meaning of the Law of Independent Assortment",
            "P1 cross setup and F1 hybrid constitution (RrYy)",
            "Formation of 4 gamete types in equal 1:1:1:1 proportions via meiotic assortment",
            "16-cell Punnett square detailing fertilization events",
            "Summary of 9:3:3:1 phenotypic classes and 9 genotypic classes"
        ]
    },
    {
        "id": "GPB203-U1-SUB10",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "questionText": "Define epistasis. Classify non-allelic gene interactions and explain dominant epistasis (12:3:1) and duplicate recessive epistasis (9:7) with detailed biochemical and genetic examples.",
        "modelAnswer": """Epistasis is an inter-allelic (non-allelic) gene interaction wherein one gene locus masks, inhibits, suppresses, or modifies the phenotypic expression of alleles at a completely separate gene locus. The gene that exerts the masking effect is termed the 'epistatic gene', while the gene whose expression is suppressed is called the 'hypostatic gene'. Epistasis modifies classical Mendelian dihybrid ratios without altering underlying meiotic chromosome segregation.

1. Dominant Epistasis (12:3:1 Ratio):
Mechanism: A single dominant allele at the epistatic locus (*A*) completely suppresses the expression of both dominant and recessive alleles at the hypostatic locus (*B/b*). Only when the epistatic locus is homozygous recessive (*aa*) can the hypostatic locus express itself.

Example: Fruit Color in Summer Squash (*Cucurbita pepo*):
- Two gene loci interact: Gene *W* (epistatic inhibitor) and Gene *Y* (color enzyme).
- Dominant allele *W* prevents the conversion of a colorless precursor into any pigment, resulting in White fruit.
- In the absence of *W* (*ww*), dominant allele *Y* converts the precursor into yellow pigment (Yellow fruit), while recessive *yy* leaves the fruit Green.

Cross: True-breeding White (*WWYY*) x True-breeding Green (*wwyy*)
- F1 Generation: *WwYy* (All White fruit).
- F2 Generation:
  * 9 W-Y- : White (suppressed by W)
  * 3 W-yy : White (suppressed by W) -> Total White = 12/16
  * 3 wwY- : Yellow (W absent, Y converts to yellow) = 3/16
  * 1 wwyy : Green (W absent, y produces green) = 1/16
- F2 Phenotypic Ratio = 12 White : 3 Yellow : 1 Green (12:3:1).

2. Duplicate Recessive Epistasis / Complementary Gene Interaction (9:7 Ratio):
Mechanism: Recessive homozygosity at either of two non-allelic loci (*aa* or *bb*) blocks the biochemical pathway, producing an identical mutant phenotype. Both dominant alleles (*A* and *B*) must be present simultaneously to synthesize the final end-product.

Example: Flower Color in Sweet Pea (*Lathyrus odoratus*) (Bateson and Punnett):
- Synthesis of purple anthocyanin requires two sequential enzymatic steps:
  * Precursor Substance (Colorless) --[Enzyme A (encoded by gene C)]--> Intermediate Chromogen (Colorless) --[Enzyme B (encoded by gene P)]--> Anthocyanin (Purple Pigment).
- Genotype *C-P-* produces functional Enzyme A and Enzyme B, yielding Purple flowers.
- Genotypes *C-pp*, *ccP-*, and *ccpp* lack one or both enzymes, resulting in White flowers.

Cross: White (*CCpp*) x White (*ccPP*)
- F1 Generation: *CcPp* (All Purple flowers due to complementation).
- F2 Generation:
  * 9 C-P- : Purple (both functional enzymes present) = 9/16
  * 3 C-pp : White (Enzyme B missing)
  * 3 ccP- : White (Enzyme A missing)
  * 1 ccpp : White (Both enzymes missing) -> Total White = 7/16
- F2 Phenotypic Ratio = 9 Purple : 7 White (9:7).""",
        "outlinePoints": [
            "Definition of epistasis, epistatic vs hypostatic genes",
            "General classification of epistatic modifications of the 9:3:3:1 ratio",
            "Detailed breakdown of Dominant Epistasis (12:3:1) in Cucurbita pepo",
            "Detailed breakdown of Duplicate Recessive Epistasis (9:7) in Lathyrus odoratus",
            "Two-step biochemical pathway explaining complementary gene action"
        ]
    },
    {
        "id": "GPB203-U1-SUB11",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Medium",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor",
        "questionText": "Discuss the genetic architecture, biochemical basis, inheritance pattern, and clinical significance of the human ABO blood group and Rh factor systems.",
        "modelAnswer": """The human ABO blood group system (discovered by Karl Landsteiner in 1900) and the Rh system (Landsteiner and Wiener, 1940) represent fundamental paradigms of multiple allelism, codominance, and clinical immunohematology.

1. Genetic Architecture of the ABO System:
The ABO system is governed by the *I* (Isohemagglutinin) gene located on the long arm of human Chromosome 9 (9q34.2). It consists of three multiple alleles:
- *IA*: Encodes alpha-1,3-N-acetylgalactosaminyltransferase.
- *IB*: Encodes alpha-1,3-galactosyltransferase.
- *i* (or *IO*): Contains a single base pair deletion (guanine at nucleotide 261) causing a frameshift that produces a non-functional, truncated enzyme (null allele).

Allelic Relationships:
- *IA* and *IB* are codominant with respect to each other; individuals carrying *IAIB* synthesize both enzymes and present both A and B antigens (Blood Group AB).
- Both *IA* and *IB* are completely dominant over *i*.

Genotypes and Phenotypes:
- Group A: *IAIA*, *IAi* (Antigen A on RBCs; Anti-B IgM in serum)
- Group B: *IBIB*, *IBi* (Antigen B on RBCs; Anti-A IgM in serum)
- Group AB: *IAIB* (Antigens A and B on RBCs; No antibodies in serum - Universal Recipient)
- Group O: *ii* (Neither antigen on RBCs; Both Anti-A and Anti-B in serum - Universal Donor)

2. Biochemical Biosynthesis and the Bombay Phenotype:
The synthesis of A and B antigens occurs sequentially on cell-surface glycoproteins. The *H* gene on Chromosome 19 encodes fucosyltransferase, which attaches L-fucose to a terminal galactose precursor to form the foundational H-substance. The *IA* and *IB* enzymes subsequently add N-acetylgalactosamine and D-galactose to the H-antigen, respectively. Individuals homozygous for rare recessive *hh* alleles (the Bombay Phenotype) cannot synthesize the H-substance; consequently, even if they possess *IA* or *IB* genes, they fail to express A or B antigens and test phenotypically as Group O.

3. The Rh Factor System and Erythroblastosis Fetalis:
The Rh blood group system is governed by the *RHD* and *RHCE* genes on Chromosome 1. The presence of the dominant D antigen designates an individual as Rh-positive (*Rh+*), while the homozygous deletion/absence of *RHD* renders an individual Rh-negative (*Rh-*).

Clinical Pathology:
Erythroblastosis fetalis (Hemolytic Disease of the Newborn) arises when an Rh-negative mother conceives an Rh-positive fetus (inherited from an Rh-positive father).
- During first delivery, fetal Rh+ RBCs enter the maternal circulation, stimulating maternal B-cells to produce anti-D memory cells.
- In subsequent Rh-positive pregnancies, maternal anti-D antibodies (IgG class) cross the placenta, binding to fetal erythrocytes and causing massive hemolysis, severe anemia, jaundice, and hydrops fetalis.
- Prevention: Administering Rh-immune globulin (RhoGAM / anti-D IgG) to the Rh-negative mother within 72 hours of delivery or amniocentesis clears fetal RBCs before maternal immunization occurs.""",
        "outlinePoints": [
            "Genetic locus (Chromosome 9) and 3 multiple alleles (IA, IB, i)",
            "Codominance of IA and IB and complete dominance over null allele i",
            "Biochemical synthesis from H-substance and explanation of Bombay phenotype (hh)",
            "Rh factor genetics (RHD gene on Chromosome 1) and clinical etiology of erythroblastosis fetalis",
            "Mechanism of Rh immunization and prophylaxis with RhoGAM"
        ]
    },
    {
        "id": "GPB203-U1-SUB12",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "questionText": "Compare and contrast the genetic mechanisms, biochemical pathways, and modified dihybrid ratios of Recessive Epistasis (9:3:4), Duplicate Dominant Epistasis (15:1), and Dominant Inhibitory Epistasis (13:3).",
        "modelAnswer": """Epistatic interactions reflect divergent underlying biochemical architectures where multi-enzyme cascades determine the final phenotypic manifestation. Below is a comparative analysis of three major epistatic modifications of the classical 9:3:3:1 dihybrid ratio:

1. Recessive Epistasis (Supplementary Gene Interaction - 9:3:4):
- Mechanism: Homozygous recessive alleles at the epistatic locus (*aa*) completely mask the phenotypic expression of alleles at the hypostatic locus (*B* or *b*). When dominant allele *A* is present, locus *B* can express its distinctive phenotypes.
- Biochemical Pathway:
  Colorless Precursor 1 --[Enzyme A (Gene A)]--> Intermediate Pigment (e.g., Black) --[Enzyme B (Gene B)]--> Final Pigment (e.g., Agouti).
  If *aa* is present, Enzyme A is absent; the pathway halts at Precursor 1, resulting in albino/white regardless of *B*.
- F2 Progeny Segregation:
  * 9 A-B- : Agouti (both enzymes active)
  * 3 A-bb : Black (only Enzyme A active)
  * 3 aaB- : Albino (pathway blocked at step 1)
  * 1 aabb : Albino (pathway blocked at step 1)
  * Grouping: 9 : 3 : (3 + 1) = 9:3:4.
- Biological Example: Coat color in mice (*Mus musculus*) and bulb color in onion (*Allium cepa*).

2. Duplicate Dominant Epistasis (Duplicate Gene Action - 15:1):
- Mechanism: A dominant allele at either of two non-allelic loci (*A* or *B*) is sufficient to catalyze the reaction and produce the dominant phenotype. Only the double homozygous recessive genotype (*aabb*) produces the alternative recessive phenotype.
- Biochemical Pathway: Two duplicate, redundant genes encode identical or functionally equivalent isozymes that catalyze the same essential step:
  Precursor --[Enzyme A OR Enzyme B]--> Final Product.
- F2 Progeny Segregation:
  * 9 A-B- : Dominant phenotype
  * 3 A-bb : Dominant phenotype
  * 3 aaB- : Dominant phenotype
  * 1 aabb : Recessive phenotype (lacks both isozymes)
  * Grouping: (9 + 3 + 3) : 1 = 15:1.
- Biological Example: Triangular seed capsule vs ovoid capsule in shepherd's purse (*Capsella bursa-pastoris*).

3. Dominant Inhibitory Epistasis (Inhibitor Gene Action - 13:3):
- Mechanism: A dominant allele at the inhibitory locus (*I*) acts as a repressor or produces an inhibitor that prevents the phenotypic expression of a dominant pigment-producing allele (*P*) at a second locus. The recessive allele *ii* allows *P* to produce pigment.
- Biochemical Pathway:
  Gene P produces a functional chromogenic enzyme. Gene I produces an inhibitory protein or competitive binder that deactivates Enzyme P.
- F2 Progeny Segregation:
  * 9 I-P- : White/Unpigmented (suppressed by I)
  * 3 I-pp : White/Unpigmented (inhibited and lacking enzyme P)
  * 1 iipp : White/Unpigmented (lacking enzyme P) -> Total White = 13/16
  * 3 iiP- : Colored/Pigmented (no inhibitor, functional enzyme P active) = 3/16
  * Grouping: (9 + 3 + 1) : 3 = 13:3.
- Biological Example: Malvidin pigmentation in *Primula*, kernel color in maize, and feather color in fowl.""",
        "outlinePoints": [
            "Introduction to comparative biochemical modeling of epistasis",
            "Recessive Epistasis (9:3:4): sequential pathway, blocking at precursor step",
            "Duplicate Dominant Epistasis (15:1): parallel redundant isozyme pathways",
            "Dominant Inhibitory Epistasis (13:3): active dominant repression of pigment synthesis",
            "Summary table of genotypes, enzyme presence, and biological examples"
        ]
    },
    {
        "id": "GPB203-U1-SUB13",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Medium",
        "syllabusTopic": "Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios",
        "questionText": "Explain the calculation of gamete types, phenotypic classes, and genotypic frequencies for a trihybrid cross (AaBbCc x AaBbCc). Discuss the generalized mathematical formulae for 'n' independently assorting heterozygous gene loci.",
        "modelAnswer": """A trihybrid cross involves three independently assorting, non-linked heterozygous gene pairs (*AaBbCc* x *AaBbCc*). The mathematical expansion of Mendelian principles reveals universal predictive power governing polygenic and multi-locus segregations.

1. Analysis of the Trihybrid Cross:
Assuming complete dominance at all three loci (*A > a*, *B > b*, *C > c*):

A. Number of Gamete Types:
Each heterozygous gene locus (*Aa*, *Bb*, *Cc*) produces 2 alternative alleles with equal probability (1/2).
By the multiplication rule of independent events:
Number of gametes = 2 x 2 x 2 = 2^3 = 8 distinct gametic genotypes:
`Gametes = ABC, ABc, AbC, Abc, aBC, aBc, abC, abc (each with frequency 1/8)`.

B. Total Number of Offspring Combinations:
Random union of 8 male and 8 female gametes creates an 8 x 8 Punnett square:
Total fertilization combinations = 8 x 8 = 64 combinations (4^3).

C. Number of F2 Phenotypic Classes:
Each locus generates 2 phenotypic classes (3/4 dominant : 1/4 recessive).
Multiplying three monohybrid phenotypic distributions:
(3 dominant + 1 recessive)^3 = 27 ABC : 9 ABc : 9 AbC : 9 aBC : 3 Abc : 3 aBc : 3 abC : 1 abc.
Total Phenotypic Classes = 2^3 = 8 classes.
Phenotypic Ratio = 27:9:9:9:3:3:3:1.

D. Number of F2 Genotypic Classes:
Each locus generates 3 genotypic classes (1/4 AA : 2/4 Aa : 1/4 aa).
Multiplying three monohybrid genotypic distributions:
Number of Genotypic Classes = 3 x 3 x 3 = 3^3 = 27 distinct genotypes.

2. Universal Mathematical Formulae for 'n' Heterozygous Loci:
When 'n' independently assorting heterozygous gene loci are involved in a selfing cross:
- Number of gamete types produced by F1: `2^n`
- Total zygotic combinations in F2 (Punnett square cells): `4^n`
- Number of distinct F2 phenotypic classes (with complete dominance): `2^n`
- Number of distinct F2 genotypic classes: `3^n`
- Frequency of completely homozygous recessive individuals (*aabbcc...*): `(1/4)^n = 1 / (4^n)`
- Frequency of individuals heterozygous at all 'n' loci (*AaBbCc...*): `(2/4)^n = (1/2)^n`
- Test cross phenotypic and genotypic ratio: `(1:1)^n` (generating 2^n classes in equal frequency)

These mathematical generalizations demonstrate that as the number of segregating loci increases, genotypic diversity expands exponentially, providing the foundation for quantitative polygenic variation.""",
        "outlinePoints": [
            "Setup of trihybrid cross (AaBbCc x AaBbCc)",
            "Derivation of 8 gamete types (2^3) and 64 zygotic combinations (4^3)",
            "Derivation of the 8 phenotypic classes and 27:9:9:9:3:3:3:1 ratio",
            "Derivation of the 27 genotypic classes (3^3)",
            "Comprehensive table of generalized mathematical formulae for 'n' loci"
        ]
    },
    {
        "id": "GPB203-U1-SUB14",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)",
        "questionText": "Discuss the physical and cytological basis of Mendel's laws during mitosis and meiosis. Explain how chromosome behavior at Anaphase I and Metaphase I provides direct proof of segregation and independent assortment.",
        "modelAnswer": """The Chromosome Theory of Heredity, formulated independently by Walter Sutton and Theodor Boveri in 1902–1903, bridged the gap between Mendel's abstract mathematical 'factors' (genes) and observable cellular structures, demonstrating that chromosomes serve as the physical vehicles of Mendelian heredity.

1. Parallels Between Mendelian Factors and Chromosomes:
- Occurrence in Pairs: Somatic cells contain diploid chromosomes (2n) in homologous pairs; Mendel's factors exist in allelic pairs (*Aa*).
- Segregation During Gametogenesis: Homologous chromosomes separate during meiosis so gametes receive one set (n); Mendelian alleles segregate cleanly into gametes.
- Independent Behavior: Different non-homologous chromosome pairs align and separate independently; unlinked genes assort independently.
- Restoration upon Fertilization: Fusion of haploid egg and sperm restores the diploid chromosome number; zygote restores allelic pairs (*Aa*).

2. Cytological Basis of the Law of Segregation (Anaphase I):
- During S-phase of interphase, each chromosome replicates into two identical sister chromatids.
- In Prophase I of meiosis, homologous chromosomes find each other and undergo synapsis to form bivalents (tetrads).
- At Metaphase I, homologous pairs align along the equatorial plate.
- At Anaphase I, spindle fibers contract, separating homologous centromeres and pulling homologous chromosomes toward opposite poles. Sister chromatids remain joined at their centromeres.
- Cytological Proof: If one homologous chromosome carries allele *A* and its partner carries *a*, their physical movement to opposite poles at Anaphase I ensures that half the resulting daughter cells receive *A* and half receive *a*. This physical disjunction constitutes the direct cytological mechanism of Mendel's Law of Segregation.

3. Cytological Basis of Independent Assortment (Metaphase I and Anaphase I):
- Consider a dihybrid (*AaBb*) where gene *A/a* resides on Chromosome Pair 1 and gene *B/b* resides on Chromosome Pair 2.
- At Metaphase I, the orientation of bivalent Pair 1 on the spindle equator is entirely random and independent of the orientation of bivalent Pair 2.
- Two equally probable spatial orientations occur at Metaphase I:
  * Arrangement 1 (50% probability): Chromosome with allele *A* faces the same pole as chromosome with allele *B*; chromosome with *a* faces the same pole as *b*. Anaphase I yields gametes *AB* and *ab*.
  * Arrangement 2 (50% probability): Chromosome with allele *A* faces the same pole as chromosome with allele *b*; chromosome with *a* faces the same pole as *B*. Anaphase I yields gametes *Ab* and *aB*.
- Because both orientations occur with equal 50% frequency across millions of meiocytes, four gamete types (*AB, Ab, aB, ab*) are generated in equal 1:1:1:1 proportions, directly validating Mendel's Law of Independent Assortment.""",
        "outlinePoints": [
            "Sutton-Boveri Chromosome Theory of Heredity and historical alignment",
            "Four direct parallels between genes and chromosomes",
            "Anaphase I disjunction of homologous centromeres as the physical basis of segregation",
            "Random equatorial alignment of non-homologous bivalents at Metaphase I explaining independent assortment",
            "Equal probability of alternative chromosome orientations generating 1:1:1:1 gametic ratios"
        ]
    },
    {
        "id": "GPB203-U1-SUB15",
        "questionType": "COMPARISON",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "questionText": "Differentiate between Incomplete Dominance and Codominance with suitable genetic examples.",
        "modelAnswer": """Incomplete Dominance and Codominance represent two distinct forms of intra-allelic gene interactions that deviate from complete Mendelian dominance:

1. Nature of Heterozygote Phenotype:
- Incomplete Dominance: The F1 heterozygote displays an intermediate, blended phenotype that falls qualitatively between the two homozygous parental phenotypes. Neither allele is fully expressed.
- Codominance: Both alleles express their full, distinct phenotypic effects simultaneously and equally in the F1 heterozygote without blending or creating an intermediate state.

2. Molecular and Enzymatic Basis:
- Incomplete Dominance: Driven by a quantitative gene dosage effect (haploinsufficiency). One functional allele produces roughly 50% of the normal enzyme or pigment level, which is insufficient to achieve the full dominant phenotype (e.g., reduced anthocyanin density).
- Codominance: Both alleles encode functional, structurally distinct protein products (such as alternative surface antigens or isoenzymes) that are both produced in full quantity and co-exist on the cell membrane.

3. Representative Biological Examples:
- Incomplete Dominance: Flower color in *Mirabilis jalapa* and *Antirrhinum majus* (Red *RR* x White *rr* -> Pink *Rr*); feather color in Andalusian fowl (Black x White -> Blue).
- Codominance: Human AB blood group (*IAIB* producing both A and B antigens); MN blood groups (*LMLN* producing M and N glycoproteins); Roan coat color in shorthorn cattle (*CRCW* showing intermingled patches of pure red and pure white hairs).

4. F2 Phenotypic and Genotypic Ratios:
Both systems exhibit an identical 1:2:1 F2 phenotypic ratio that perfectly matches the 1:2:1 genotypic ratio, but they differ fundamentally in whether the heterozygous state is an intermediate blend or an unblended dual expression.""",
        "outlinePoints": [
            "Phenotypic distinction: intermediate blend vs simultaneous dual expression",
            "Molecular mechanisms: haploinsufficiency/pigment dosage vs co-expression of distinct proteins",
            "Biological examples for each system (Mirabilis vs ABO/Roan cattle)",
            "Comparison of F2 ratios (1:2:1 in both, but biologically divergent)"
        ]
    },
    {
        "id": "GPB203-U1-SUB16",
        "questionType": "COMPARISON",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes",
        "questionText": "Compare Dominant Epistasis (12:3:1) and Recessive Epistasis (9:3:4) in terms of gene action, masking mechanism, and modified ratios.",
        "modelAnswer": """Dominant Epistasis and Recessive Epistasis are non-allelic gene interactions that modify the classical 9:3:3:1 Mendelian dihybrid ratio:

1. Masking Gene Action:
- Dominant Epistasis: A single dominant allele at the epistatic locus (e.g., *A-*) is sufficient to completely mask or inhibit the phenotypic expression of alleles at the hypostatic locus (*B* or *b*).
- Recessive Epistasis: Only homozygous recessive alleles at the epistatic locus (e.g., *aa*) mask the phenotypic expression of alleles at the hypostatic locus (*B* or *b*). A single dominant allele *A* permits normal expression of the *B* locus.

2. Genotypic Classes and Phenotypic Regrouping:
- Dominant Epistasis (12:3:1):
  * 9 A-B- + 3 A-bb = 12/16 (Epistatic phenotype caused by dominant *A*)
  * 3 aaB- = 3/16 (Hypostatic dominant phenotype)
  * 1 aabb = 1/16 (Hypostatic recessive phenotype)
  * Resulting Ratio = 12 : 3 : 1.
- Recessive Epistasis (9:3:4):
  * 9 A-B- = 9/16 (Fully expressed dual dominant phenotype)
  * 3 A-bb = 3/16 (Intermediate single dominant phenotype)
  * 3 aaB- + 1 aabb = 4/16 (Epistatic phenotype caused by homozygous recessive *aa*)
  * Resulting Ratio = 9 : 3 : 4.

3. Underlying Biochemical Pathways:
- Dominant Epistasis: The epistatic dominant gene produces an active inhibitor substance that blocks pigment production regardless of other enzymes present. Example: Fruit color in summer squash (*Cucurbita pepo*).
- Recessive Epistasis: Operates as a sequential multi-step pathway where *Gene A* catalyzes the precursor step and *Gene B* catalyzes the terminal step. When *aa* is present, the pathway is arrested at Step 1, rendering the status of *Gene B* irrelevant. Example: Coat color in mice (Agouti 9 : Black 3 : Albino 4).""",
        "outlinePoints": [
            "Dominant allele masking (A-) vs homozygous recessive masking (aa)",
            "Mathematical regrouping of the 9:3:3:1 classes (12:3:1 vs 9:3:4)",
            "Biochemical differences: dominant inhibitor vs sequential pathway arrest",
            "Classic examples: summer squash fruit color vs mice coat color"
        ]
    },
    {
        "id": "GPB203-U1-SUB17",
        "questionType": "COMPARISON",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor",
        "questionText": "Differentiate between Multiple Alleles and Polygenes (Quantitative Genes) in crop genetics.",
        "modelAnswer": """Multiple Alleles and Polygenes represent two fundamentally divergent modes of genetic organization that are frequently confused:

1. Chromosomal Locus:
- Multiple Alleles: Involve three or more alternative forms of a gene that all occupy the exact same physical locus on homologous chromosomes.
- Polygenes: Involve multiple independent, non-allelic genes located at distinct loci across the same chromosome or on completely different chromosomes.

2. Number of Factors per Diploid Individual:
- Multiple Alleles: A diploid organism can carry at most two alleles of the series (e.g., *IAIB* or *IAi* in human blood groups), and a gamete carries strictly one.
- Polygenes: A diploid individual carries all the polygenic loci simultaneously (e.g., *AABBCCDD* in wheat grain color), carrying pairs of alleles at every locus.

3. Type of Phenotypic Variation:
- Multiple Alleles: Typically govern qualitative traits with distinct discontinuous classes (e.g., Blood groups A, B, AB, O; self-incompatibility S-alleles; rabbit coat colors).
- Polygenes: Govern quantitative traits characterized by continuous variation and a normal distribution curve (e.g., grain yield, plant height, protein content).

4. Additive Effect and Environmental Sensitivity:
- Multiple Alleles: Exhibit dominance hierarchies, incomplete dominance, or codominance; alleles do not have cumulative additive effects. Relatively insensitive to environmental fluctuations.
- Polygenes: Each contributing allele exerts a small, cumulative, additive effect on the total phenotype. Highly influenced by environmental factors (high G x E interaction).

5. Recombination Behavior:
- Multiple Alleles: Crossing over does not take place between multiple alleles because they occupy identical loci.
- Polygenes: Polygenes on different chromosomes assort independently, while syntenic polygenes undergo meiotic crossing over.""",
        "outlinePoints": [
            "Chromosomal location: single locus vs multiple distinct loci",
            "Number of alleles present in an individual diploid (maximum 2 vs all loci)",
            "Trait nature: qualitative discontinuous vs quantitative continuous",
            "Gene action: dominance/codominance vs cumulative additive effects",
            "Crossing over potential: absent between multiple alleles vs present between polygenes"
        ]
    },
    {
        "id": "GPB203-U1-SUB18",
        "questionType": "APPLICATION",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios",
        "questionText": "In tomato, tall plant habit (D) is dominant over dwarf (d), and smooth fruit epidermis (P) is dominant over peachy/hairy fruit (p). A plant breeder crosses a pure-breeding tall peachy plant with a pure-breeding dwarf smooth plant. (a) What are the F1 and F2 phenotypes and ratios? (b) If the F1 is test-crossed with a dwarf peachy plant, what are the expected phenotypic frequencies assuming independent assortment? (c) How can the breeder identify homozygous tall smooth plants (DDPP) in the F2 population?",
        "modelAnswer": """Genetic Problem Breakdown:
- Locus 1: Height — Tall (*D*) > Dwarf (*d*)
- Locus 2: Fruit Skin — Smooth (*P*) > Peachy (*p*)

(a) F1 and F2 Phenotypes and Ratios:
- Parental Cross: Pure-breeding Tall Peachy (*DDpp*) x Pure-breeding Dwarf Smooth (*ddPP*)
- Parental Gametes: *Dp* and *dP*
- F1 Generation: All offspring are *DdPp* (Phenotype: Tall Smooth).

F2 Generation (F1 selfed: *DdPp* x *DdPp*):
Assuming independent assortment, the F2 generation yields the classical 9:3:3:1 phenotypic ratio:
- 9/16 Tall Smooth (*D-P-*)
- 3/16 Tall Peachy (*D-pp*)
- 3/16 Dwarf Smooth (*ddP-*)
- 1/16 Dwarf Peachy (*ddpp*)
Total = 16 combinations (Ratio 9:3:3:1).

(b) Test Cross of the F1 Generation:
- Cross: F1 Tall Smooth (*DdPp*) x Dwarf Peachy tester (*ddpp*).
- F1 Gametes produced in equal frequency (25% each): *DP*, *Dp*, *dP*, *dp*.
- Tester Gamete: *dp* (100%).
Expected Progeny Frequencies (1:1:1:1 ratio):
- 25% (1/4) Tall Smooth (*DdPp*)
- 25% (1/4) Tall Peachy (*Ddpp*)
- 25% (1/4) Dwarf Smooth (*ddPp*)
- 25% (1/4) Dwarf Peachy (*ddpp*)

(c) Breeding Protocol to Identify Homozygous DDPP Plants in F2:
In the F2 population, Tall Smooth plants occur with a frequency of 9/16, but they comprise four distinct genotypes: 1 *DDPP*, 2 *DDPp*, 2 *DdPP*, and 4 *DdPp*. To identify the desirable true-breeding *DDPP* genotype (which represents only 1 in 9 of the Tall Smooth plants):
1. Progeny Testing via Selfing: Self-pollinate individual F2 Tall Smooth plants and harvest seed separately. Grow F3 plant rows.
   - Any plant that breeds 100% true for tall smooth fruit across all F3 progeny is confirmed as *DDPP*.
   - Plants that segregate for peachy (*DDPp*), dwarf (*DdPP*), or both (*DdPp*) are discarded.
2. Individual Test Crossing: Alternatively, test cross candidate F2 Tall Smooth plants with the homozygous double recessive tester (*ddpp*).
   - If 100% of the test-cross progeny are Tall Smooth, the candidate parent was *DDPP*.
   - If any dwarf or peachy progeny appear, the parent is heterozygous.""",
        "outlinePoints": [
            "Genotype determination of parents and F1 hybrid (DdPp)",
            "F2 phenotypic segregation calculation showing 9:3:3:1 classes",
            "Test cross derivation showing 1:1:1:1 equal proportions",
            "Breeding methodologies (progeny testing and test crossing) to isolate pure DDPP lines"
        ]
    },
    {
        "id": "GPB203-U1-SUB19",
        "questionType": "APPLICATION",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor",
        "questionText": "In a hospital maternity ward, a mix-up of four newborn babies (Baby 1, Baby 2, Baby 3, Baby 4) occurs. The blood groups of the babies and four sets of parents are determined as follows: Baby 1: Group O; Baby 2: Group A; Baby 3: Group B; Baby 4: Group AB. Couple I: Group AB x Group O; Couple II: Group A x Group B; Couple III: Group B x Group B; Couple IV: Group O x Group O. Assign each baby to its biological parents with full genetic justifications.",
        "modelAnswer": """To solve this disputed parentage case, we evaluate the possible gametes and offspring genotypes for each parental couple using Mendelian principles of ABO multiple allelism.

1. Analysis of Parental Couples:
- Couple IV: Mother Group O (*ii*) x Father Group O (*ii*)
  * Gametes: Both parents can produce only *i* gametes.
  * Possible Offspring: 100% *ii* (Group O). They can NEVER produce a child with A, B, or AB blood groups.
  * Direct Assignment: Baby 1 (Group O) must belong to Couple IV.

- Couple I: One parent Group AB (*IAIB*) x One parent Group O (*ii*)
  * Gametes from AB parent: *IA* (50%) and *IB* (50%).
  * Gametes from O parent: *i* (100%).
  * Possible Offspring: 50% *IAi* (Group A) and 50% *IBi* (Group B).
  * Critical Rule: An AB parent can NEVER produce an O child (cannot provide an *i* allele if homozygous, nor can both parents contribute *i*), and an O parent can NEVER produce an AB child (cannot provide *IA* or *IB*). Thus, Couple I can have ONLY an A or B baby.

- Couple III: Both parents Group B (*IBIB* or *IBi*) x (*IBIB* or *IBi*)
  * Gametes: *IB* and possibly *i*. Neither parent carries the *IA* allele.
  * Possible Offspring: Group B (*IBIB*, *IBi*) or Group O (*ii*).
  * Critical Rule: Without the *IA* allele in either parent, Couple III can NEVER produce a child with blood group A or AB.
  * Direct Assignment: Since Baby 1 (Group O) is already assigned to Couple IV, Couple III must be the biological parents of Baby 3 (Group B).

- Couple II: One parent Group A (*IAIA* or *IAi*) x One parent Group B (*IBIB* or *IBi*)
  * Possible Offspring: If both parents are heterozygous (*IAi* x *IBi*), they can produce ALL four blood groups: Group AB (*IAIB*), Group A (*IAi*), Group B (*IBi*), and Group O (*ii*).
  * Direct Assignment: Couple II is the ONLY couple possessing both *IA* and *IB* alleles who can produce Baby 4 (Group AB).

2. Final Reconciled Allocation:
- With Baby 4 (AB) assigned to Couple II, Baby 3 (B) assigned to Couple III, and Baby 1 (O) assigned to Couple IV:
- Couple I (AB x O) must be the biological parents of Baby 2 (Group A, genotype *IAi*).

Summary Table of Assignments:
- Couple I (AB x O) -> Baby 2 (Group A)
- Couple II (A x B) -> Baby 4 (Group AB)
- Couple III (B x B) -> Baby 3 (Group B)
- Couple IV (O x O) -> Baby 1 (Group O)""",
        "outlinePoints": [
            "Genotypic possibilities for all four parental mating combinations",
            "Elimination logic for Couple IV (O x O -> strictly Group O baby)",
            "Elimination logic for Couple III (B x B -> cannot have A or AB)",
            "Resolution of Couple I (AB x O -> can have only A or B) and Couple II (A x B -> only source for AB)",
            "Final verified assignment table"
        ]
    },
    {
        "id": "GPB203-U1-SUB20",
        "questionType": "CASE_STUDY",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor",
        "contextScenario": "A woman with blood group O gives birth to a child with blood group AB. In a paternity suit, the alleged father (Blood Group B) claims non-paternity on the grounds that it is genetically impossible for an O-group mother to have an AB child. Subsequent specialized molecular and serological testing reveals that the mother has the rare Bombay phenotype (genotype hh IAIB), and her erythrocytes lack the H-antigen.",
        "questionText": "Analyze the case study above. (a) Explain the genetic and biochemical basis of the Bombay phenotype. (b) Explain why standard hospital blood tests misidentified the mother as blood group O. (c) Determine whether the alleged father (Group B) could be the biological parent. (d) What would be the expected blood group outcome of this child if the father is heterozygous IBi Hh?",
        "modelAnswer": """Case Study Analysis — The Bombay Phenotype (hh) and Disputed Parentage:

(a) Genetic and Biochemical Basis of the Bombay Phenotype:
The Bombay phenotype (first discovered in 1952 by Dr. Y. M. Bhende in Bombay, India) represents a rare example of recessive epistasis involving the *FUT1* (*H*) gene located on Chromosome 19.
- The dominant allele *H* encodes an alpha-1,2-fucosyltransferase enzyme that attaches L-fucose to a terminal galactose residue of cell-surface glycolipids, forming the essential 'H-antigen'.
- The H-antigen is the mandatory biochemical substrate required by the *IA* (N-acetylgalactosaminyltransferase) and *IB* (galactosyltransferase) enzymes to attach their respective immunodominant sugars.
- Individuals with the rare homozygous recessive genotype *hh* fail to produce functional fucosyltransferase. As a result, no H-antigen is synthesized on their red blood cells. Even though they carry functional *IA* or *IB* genes on Chromosome 9, the enzymes have no substrate to act upon.

(b) Misidentification in Standard Hospital Serological Tests:
Standard routine blood typing relies exclusively on forward grouping: mixing patient RBCs with anti-A and anti-B commercial antisera.
Because the mother lacks the H-antigen, neither A nor B antigens are displayed on her RBC membrane. Consequently, her red blood cells do not agglutinate with anti-A or anti-B antisera, leading technicians to categorize her as standard Group O.
However, in reverse grouping (serum testing), Bombay individuals carry Anti-A, Anti-B, AND high-titer Anti-H antibodies, whereas normal Group O individuals have abundant H-antigen and lack Anti-H antibodies.

(c) Paternity Assessment:
The mother's true genotype is *hh IAIB*. She carries both functional *IA* and *IB* alleles that were masked by epistatic *hh* homozygosity.
She contributes a gamete carrying an *IA* allele (or *IB*) along with a recessive *h* allele.
The child has blood group AB (*IAIB Hh*). The child received the *IA* allele from the mother (along with *h*) and must have received an *IB* allele and a dominant *H* allele from the father.
Since the alleged father has Blood Group B (carrying *IB* and presumably wild-type *H*), he is genetically fully capable of contributing the *IB* allele and the necessary *H* allele to allow expression of both A and B antigens in the child. Therefore, the alleged father cannot be excluded and is biologically compatible.

(d) Expected Cross Outcome (Mother hh IAIB x Father Hh IBi):
- Maternal gametes: 1/2 h IA, 1/2 h IB
- Paternal gametes: 1/4 H IB, 1/4 H i, 1/4 h IB, 1/4 h i
Fertilization combinations with wild-type *H* will express ABO antigens; combinations with *hh* will express the Bombay phenotype:
- 25% *Hh IAIB* -> Blood Group AB (like the child)
- 25% *Hh IBi* -> Blood Group B
- 25% *hh ...* -> Bombay phenotype (serologically Group O)
- 12.5% *Hh IAi* -> Blood Group A
- 12.5% *Hh IBIB* -> Blood Group B
This confirms that a child with Group AB is a predictable 25% outcome of this mating.""",
        "outlinePoints": [
            "Biochemical mechanism of FUT1 (H) gene and epistatic masking in hh individuals",
            "Serological explanation of why forward typing mimics Group O (lack of H substrate)",
            "Resolution of paternity: mother is hh IAIB and passed IA to child; alleged father contributed IB and H",
            "Cross calculation (hh IAIB x Hh IBi) verifying 25% probability of Group AB offspring"
        ]
    }
]

# ----------------- 20 Flashcards -----------------
unit1["flashcards"] = [
    {
        "id": "GPB203-U1-FC01",
        "front": "What is Mendel's Law of Segregation?",
        "back": "Alleles of a gene separate cleanly during meiosis into different gametes without blending, so each gamete carries only one allele.",
        "hint": "Also known as the Principle of Purity of Gametes.",
        "syllabusTopic": "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)"
    },
    {
        "id": "GPB203-U1-FC02",
        "front": "What is Mendel's Law of Independent Assortment?",
        "back": "Alleles of two or more independent, non-allelic genes assort into gametes completely independently of each other.",
        "hint": "Applies strictly to unlinked genes.",
        "syllabusTopic": "Mendel's experiments and laws of inheritance (Segregation and Independent Assortment)"
    },
    {
        "id": "GPB203-U1-FC03",
        "front": "What are the F2 phenotypic and genotypic ratios of a Mendelian monohybrid cross?",
        "back": "Phenotypic ratio = 3:1 (dominant to recessive); Genotypic ratio = 1:2:1 (1 TT : 2 Tt : 1 tt).",
        "hint": "Classical cross of two heterozygotes (Tt x Tt).",
        "syllabusTopic": "Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios"
    },
    {
        "id": "GPB203-U1-FC04",
        "front": "What is the F2 phenotypic ratio of a Mendelian dihybrid cross?",
        "back": "9:3:3:1 (9 double dominant, 3 single dominant A, 3 single dominant B, 1 double recessive).",
        "hint": "Result of AaBb x AaBb cross.",
        "syllabusTopic": "Monohybrid, dihybrid, and trihybrid crosses and their genetic ratios"
    },
    {
        "id": "GPB203-U1-FC05",
        "front": "What is a Test Cross?",
        "back": "A cross between an individual with a dominant phenotype and a homozygous recessive individual to determine the unknown's zygosity.",
        "hint": "Produces a 1:1 ratio for monohybrids.",
        "syllabusTopic": "Test cross, back cross, and reciprocal crosses in genetic analysis"
    },
    {
        "id": "GPB203-U1-FC06",
        "front": "What is a Back Cross?",
        "back": "A cross between an F1 hybrid and either of its parental strains (dominant or recessive).",
        "hint": "Widely used in plant breeding to introgress donor genes into recurrent parents.",
        "syllabusTopic": "Test cross, back cross, and reciprocal crosses in genetic analysis"
    },
    {
        "id": "GPB203-U1-FC07",
        "front": "What is a Reciprocal Cross?",
        "back": "A pair of crosses in which the source of male and female gametes is reversed for the two parental strains.",
        "hint": "Used to detect maternal effects or sex-linked inheritance.",
        "syllabusTopic": "Test cross, back cross, and reciprocal crosses in genetic analysis"
    },
    {
        "id": "GPB203-U1-FC08",
        "front": "What is Incomplete Dominance?",
        "back": "A form of gene action where the heterozygote displays an intermediate phenotype between the two homozygotes (e.g., Pink flowers in Mirabilis jalapa).",
        "hint": "F2 phenotypic and genotypic ratios both equal 1:2:1.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC09",
        "front": "What is Codominance?",
        "back": "A condition in which both alleles of a heterozygote express their distinct phenotypic products simultaneously without blending (e.g., AB blood group, Roan cattle).",
        "hint": "Both alleles are fully active.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC10",
        "front": "What is a Lethal Gene?",
        "back": "An allele whose phenotypic expression leads to premature death of the organism, typically in the homozygous state (yielding a 2:1 living ratio).",
        "hint": "Example: Yellow coat color in mice (Ay).",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC11",
        "front": "What is Epistasis?",
        "back": "An inter-allelic interaction where an allele at one gene locus masks, inhibits, or modifies the phenotypic expression of alleles at another gene locus.",
        "hint": "Modifies the dihybrid 9:3:3:1 ratio.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC12",
        "front": "What F2 ratio characterizes Dominant Epistasis?",
        "back": "12:3:1 (e.g., Fruit color in summer squash Cucurbita pepo).",
        "hint": "A dominant epistatic allele masks both alleles at the second locus.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC13",
        "front": "What F2 ratio characterizes Recessive Epistasis (Supplementary gene action)?",
        "back": "9:3:4 (e.g., Coat color in mice, bulb color in onion).",
        "hint": "Homozygous recessive aa masks the B locus.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC14",
        "front": "What F2 ratio characterizes Duplicate Recessive Epistasis (Complementary genes)?",
        "back": "9:7 (e.g., Flower color in sweet pea Lathyrus odoratus).",
        "hint": "Recessive homozygosity at either locus produces the mutant white phenotype.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC15",
        "front": "What F2 ratio characterizes Duplicate Dominant Epistasis?",
        "back": "15:1 (e.g., Triangular seed capsule shape in shepherd's purse Capsella bursa-pastoris).",
        "hint": "A dominant allele at either locus produces the dominant trait.",
        "syllabusTopic": "Gene interactions: Incomplete dominance, codominance, and lethal genes"
    },
    {
        "id": "GPB203-U1-FC16",
        "front": "What are Multiple Alleles?",
        "back": "A series of three or more alternative forms of a single gene locus present within a population, occupying the exact same locus on homologous chromosomes.",
        "hint": "Example: Human ABO blood group system (IA, IB, i).",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor"
    },
    {
        "id": "GPB203-U1-FC17",
        "front": "What is the formula for calculating total genotypes in a multiple allelic series with 'n' alleles?",
        "back": "Total Genotypes = n(n + 1) / 2 (comprising n homozygous and n(n - 1) / 2 heterozygous genotypes).",
        "hint": "For 3 alleles (ABO), 3(4)/2 = 6 genotypes.",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor"
    },
    {
        "id": "GPB203-U1-FC18",
        "front": "What is the Bombay Phenotype?",
        "back": "A rare genetic condition where homozygous recessive hh prevents synthesis of H-antigen, making individuals serologically test as Group O despite carrying IA or IB.",
        "hint": "Recessive epistasis involving the FUT1 gene.",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor"
    },
    {
        "id": "GPB203-U1-FC19",
        "front": "What causes Erythroblastosis Fetalis in newborns?",
        "back": "Maternal-fetal Rh incompatibility: an Rh-negative mother sensitized to Rh-positive fetal cells produces anti-D IgG that destroys fetal RBCs in subsequent pregnancies.",
        "hint": "Prevented by administering RhoGAM.",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor"
    },
    {
        "id": "GPB203-U1-FC20",
        "front": "What are Pseudoalleles?",
        "back": "Genes that govern the same trait and fail to complement each other in trans, but can be separated by rare meiotic crossing over because they occupy adjacent sub-loci.",
        "hint": "Discovered by E. B. Lewis in Drosophila.",
        "syllabusTopic": "Multiple alleles and pseudoalleles with special reference to ABO blood groups and Rh factor"
    }
]

out_path = os.path.abspath("server/data/gpb203/unit1.ts")
with open(out_path, "w", encoding="utf-8") as f:
    f.write('import { UnitContent } from "./types";\n\n')
    f.write('export const unit1Content: UnitContent = ')
    f.write(json.dumps(unit1, indent=2))
    f.write(';\n')

print(f"Generated GPB203 Unit 1 successfully: {len(unit1['mcqs'])} MCQs, {len(unit1['subjectiveQuestions'])} Subj, {len(unit1['flashcards'])} Flashcards")
