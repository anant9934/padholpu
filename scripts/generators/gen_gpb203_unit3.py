import json
import os

unit3 = {
    "unitNumber": 3,
    "title": "Quantitative Genetics",
    "shortDescription": "Distinction between qualitative and quantitative traits, multiple factor hypothesis of polygenic inheritance, genotype-environment interactions, components of genetic variance, broad- and narrow-sense heritability, genetic advance, and breeding selection methods.",
    "estimatedReadTimeMinutes": 23,
    "syllabusTopics": [
        "Qualitative versus quantitative traits and continuous variation",
        "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance",
        "Genotype-environment interaction and phenotypic plasticity",
        "Heritability: Broad-sense and narrow-sense heritability estimation",
        "Genetic advance and response to selection in crop populations",
        "Genetic variance components (additive, dominance, epistatic) and selection methods"
    ],
    "notes": {
        "learningObjectives": [
            "Contrast qualitative (discontinuous, oligogenic) and quantitative (continuous, polygenic) traits in crop plants.",
            "Explain H. Nilsson-Ehle's multiple factor hypothesis using Swedish winter wheat kernel color and calculate contributing allele frequencies.",
            "Analyze genotype x environment (G x E) interaction, phenotypic stability parameters (Eberhart and Russell model), and phenotypic plasticity.",
            "Formulate and calculate broad-sense (H^2) and narrow-sense (h^2) heritability from variance components and parent-offspring regression.",
            "Compute Genetic Advance (GA) and Genetic Advance as percent of mean (GAM) to predict response to selection in plant breeding programmes.",
            "Partition phenotypic variance into additive, dominance, epistatic, and environmental components to choose appropriate breeding methods."
        ],
        "sections": [
            {
                "id": "sec-gpb-3-1",
                "heading": "1. Qualitative vs Quantitative Traits and Continuous Variation",
                "content": "Plant characteristics fall into two fundamental genetic categories: qualitative (Mendelian/oligogenic) traits and quantitative (biometrical/polygenic) traits. Quantitative traits form the foundation of agronomic productivity (e.g., grain yield, seed weight, protein content, drought tolerance).",
                "subsections": [
                    {
                        "subheading": "Comprehensive Comparison of Qualitative and Quantitative Traits",
                        "content": "Key biological, statistical, and agronomic contrasts:",
                        "table": {
                            "headers": ["Feature", "Qualitative Traits", "Quantitative Traits"],
                            "rows": [
                                ["Number of Genes", "Controlled by one or two major genes (Oligogenic / Monogenic)", "Controlled by multiple minor genes (Polygenic / Multigenic)"],
                                ["Phenotypic Variation", "Discontinuous classes; distinct non-overlapping phenotypes (e.g., tall vs dwarf)", "Continuous distribution forming a Gaussian normal curve (e.g., plant height 80-160 cm)"],
                                ["Effect of Individual Gene", "Large, discernible phenotypic effect per allele", "Small, cumulative, individually indistinguishable effect per contributing allele"],
                                ["Environmental Influence", "Negligible; phenotype directly reflects genotype (low G x E interaction)", "Substantial; environmental variation blurs genotypic boundaries"],
                                ["Measurement Scale", "Counting into discrete categories (frequencies/ratios: 3:1, 9:3:3:1)", "Graduated measurement on continuous scales (kg/ha, cm, grams, percentages)"],
                                ["Statistical Methodology", "Chi-square goodness of fit tests, binomial expansions", "Biometrical statistics: Mean, variance, standard deviation, ANOVA, regression, QTL analysis"],
                                ["Agronomic Examples", "Seed shape, flower color, monogenic disease resistance (e.g., rust race resistance)", "Grain yield, oil content, days to flowering, harvest index, biomass"]
                            ]
                        }
                    }
                ]
            },
            {
                "id": "sec-gpb-3-2",
                "heading": "2. Multiple Factor Hypothesis of Polygenic Inheritance",
                "content": "Sir Francis Galton (1889) and biometricians (Karl Pearson) argued that continuous variation contradicted particulate Mendelian heredity. In 1909, Swedish geneticist H. Nilsson-Ehle reconciled biometric continuous variation with Mendelian genetics through his **Multiple Factor Hypothesis** on winter wheat (*Triticum aestivum*) kernel color.",
                "subsections": [
                    {
                        "subheading": "Nilsson-Ehle's Two-Gene Model in Wheat Kernel Color",
                        "content": "Nilsson-Ehle crossed true-breeding dark red kernel wheat (*R1R1 R2R2*) with true-breeding white kernel wheat (*r1r1 r2r2*):\n- F1 Generation: *R1r1 R2r2* produced medium red kernels.\n- F2 Generation: Segregated into 5 distinct phenotypic color grades in a 1:4:6:4:1 binomial frequency based on the number of dominant contributing alleles (*R*):\n  * 4 Contributing Alleles (*R1R1 R2R2*): 1/16 Dark Red\n  * 3 Contributing Alleles (*R1R1 R2r2*, *R1r1 R2R2*): 4/16 Medium-Dark Red\n  * 2 Contributing Alleles (*R1R1 r2r2*, *r1r1 R2R2*, *R1r1 R2r2*): 6/16 Medium Red\n  * 1 Contributing Allele (*R1r1 r2r2*, *r1r1 R2r2*): 4/16 Light Red\n  * 0 Contributing Alleles (*r1r1 r2r2*): 1/16 White (recessive parental)\n\nIn crosses involving three segregating genes (*R1, R2, R3*), the F2 segregated into 7 phenotypic classes with a (1 + 1)^6 expansion = 1:6:15:20:15:6:1, where only 1/64 was white. As the number of segregating polygenes increases, discrete phenotypic steps merge into a smooth continuous normal distribution.",
                        "keyPoints": [
                            "Formula for number of phenotypic classes = 2n + 1 (where n is the number of segregating polygenic loci).",
                            "Frequency of extreme parental phenotypes in F2 = (1/4)^n = 1 / (4^n).",
                            "Contributing alleles exert equal, additive effects on the phenotype; non-contributing alleles add zero."
                        ]
                    }
                ]
            },
            {
                "id": "sec-gpb-3-3",
                "heading": "3. Genotype x Environment (G x E) Interaction and Stability",
                "content": "The phenotype (*P*) is the combined product of genotype (*G*), environment (*E*), and the genotype-by-environment interaction (*G x E*):\n`P = G + E + (G x E)`\n\nG x E interaction occurs when different genotypes respond differentially to varying environments, resulting in changes in relative performance or rank across locations/seasons.",
                "subsections": [
                    {
                        "subheading": "Phenotypic Stability Models (Eberhart and Russell, 1966)",
                        "content": "Plant breeders evaluate genotypes across multi-location trials (MET) using three stability parameters:\n1. **Mean Performance (X):** High overall yield across all environments.\n2. **Regression Coefficient (bi):** Response/sensitivity to environmental index:\n   - `bi = 1.0`: Average stability (responds proportionally to environmental improvement).\n   - `bi > 1.0`: Below-average stability (highly responsive to favorable/high-input environments; suitable for intensive farming).\n   - `bi < 1.0`: Above-average stability (less sensitive to environmental fluctuations; highly adapted to poor/marginal stress-prone conditions).\n3. **Deviation from Regression (S^2di):** Measure of predictability. A stable genotype must have `S^2di = 0` (non-significant deviation from linearity)."
                    }
                ]
            },
            {
                "id": "sec-gpb-3-4",
                "heading": "4. Variance Partitioning, Heritability, and Genetic Advance",
                "content": "Fisher (1918) established the biometrical framework for partitioning phenotypic variance (*Vp*) into genetic (*Vg*) and environmental (*Ve*) components:\n`Vp = Vg + Ve + 2Cov(G,E)`\nWhen experimental designs randomize genotypes, the covariance term is zero (`Vp = Vg + Ve`).\n\n### Partitioning Genetic Variance (Vg):\nGenetic variance is further subdivided into: `Vg = Va + Vd + Vi`\n- **Additive Genetic Variance (Va):** Variance due to the average individual effects of genes that are faithfully transmitted from parents to offspring. Responds directly to directional selection.\n- **Dominance Genetic Variance (Vd):** Variance resulting from intra-allelic interactions (dominance/recessiveness). Destroyed upon meiotic segregation in sexually reproducing crops.\n- **Epistatic Genetic Variance (Vi):** Variance resulting from inter-allelic interactions across loci. Divided into additive x additive (*Vaa*), additive x dominance (*Vad*), and dominance x dominance (*Vdd*).",
                "subsections": [
                    {
                        "subheading": "Broad-Sense vs Narrow-Sense Heritability",
                        "content": "Heritability quantifies the proportion of total phenotypic variation attributable to genetic differences:\n\n1. **Broad-Sense Heritability (H^2):**\n`H^2 = Vg / Vp = (Va + Vd + Vi) / Vp`\nMeasures the total genetic determination of a trait. Highly relevant for clonally propagated crops (e.g., sugarcane, potato, fruit trees) where total genetic variance including dominance and epistasis is fixed and conserved during vegetative propagation.\n\n2. **Narrow-Sense Heritability (h^2):**\n`h^2 = Va / Vp = Va / (Va + Vd + Vi + Ve)`\nMeasures only the additive portion of genetic variance transmitted predictably from parents to sexually generated progeny. Dictates response to artificial selection in seed-propagated self- and cross-pollinated crops.",
                        "table": {
                            "headers": ["Heritability Class", "Value Range", "Breeding Implication / Selection Method"],
                            "rows": [
                                ["High Heritability", "h^2 > 60% (>0.60)", "Simple mass selection or individual plant selection in early generations (F2) is highly effective."],
                                ["Moderate Heritability", "30% <= h^2 <= 60%", "Progeny testing, pedigree selection, or family selection required; early generation selection is moderately reliable."],
                                ["Low Heritability", "h^2 < 30% (<0.30)", "Direct phenotypic selection is ineffective due to heavy environmental noise. Requires replicated multi-location trials, index selection, or marker-assisted selection (MAS)."]
                            ]
                        }
                    },
                    {
                        "subheading": "Genetic Advance (GA) and Response to Selection",
                        "content": "Genetic advance (GA) measures the expected improvement in the mean of the progeny population over the base parental population under one cycle of directional selection:\n`GA = k * sigma_p * h^2`\nwhere:\n- `k` = Selection differential intensity factor in standardized units (e.g., k = 2.06 for 5% selection intensity).\n- `sigma_p` = Phenotypic standard deviation of the base population (`sqrt(Vp)`).\n- `h^2` = Narrow-sense heritability.\n\n### Genetic Advance as Percent of Mean (GAM):\n`GAM = (GA / Population Mean) * 100`\nJohnson et al. (1955) proved that heritability estimates alone are insufficient to predict selection response; **high heritability coupled with high genetic advance** confirms that additive gene action predominates, ensuring successful selection in breeding programmes."
                    }
                ]
            }
        ],
        "keyTakeaways": [
            "Qualitative traits are oligogenic and discontinuous; quantitative traits are polygenic, continuous, and environmentally sensitive.",
            "Nilsson-Ehle's multiple factor hypothesis proved that continuous variation is governed by multiple Mendelian genes with additive effects.",
            "Phenotypic variance partitions into Additive (Va), Dominance (Vd), Epistatic (Vi), and Environmental (Ve) components.",
            "Broad-sense heritability (H^2 = Vg/Vp) applies to clonal crops, while narrow-sense heritability (h^2 = Va/Vp) guides sexual crop breeding.",
            "High heritability accompanied by high genetic advance indicates strong additive gene action and ensures rapid breeding progress."
        ],
        "commonMisunderstandings": [
            {
                "myth": "High broad-sense heritability guarantees that simple selection will produce large breeding progress.",
                "reality": "High H^2 can be driven predominantly by dominance (Vd) or epistasis (Vi), which dissipate upon sexual reproduction. Only high narrow-sense heritability (h^2) coupled with high genetic advance guarantees selection progress."
            },
            {
                "myth": "Heritability is a fixed biological constant for a crop species.",
                "reality": "Heritability is a population-specific parameter; it varies widely depending on the genetic diversity of the specific population and the environmental variance of the test location."
            }
        ],
        "summary": "Unit 3 explores the biometrical foundation of crop breeding. It contrasts discrete qualitative traits with continuous quantitative traits, reviewing Nilsson-Ehle's multiple factor hypothesis and the additive action of polygenes. It models genotype-environment interactions and phenotypic stability across multi-environment trials. The unit details Fisherian variance partitioning into additive, dominance, epistatic, and environmental components, deriving broad-sense and narrow-sense heritability and genetic advance calculations that dictate selection efficacy in crop improvement."
    },
    "mcqs": [],
    "subjectiveQuestions": [],
    "flashcards": []
}

# ----------------- 60 MCQs -----------------
# 20 Easy, 25 Medium, 15 Hard
mcq_data = [
    # Topic 1: Qualitative vs quantitative traits (10 Qs: 3E, 4M, 3H)
    ("Qualitative versus quantitative traits and continuous variation", "Easy",
     "Which of the following is a classic example of a qualitative trait in crop plants?",
     "Grain yield per plant", "Flower color (purple vs white)", "1000-kernel weight", "Plant biomass", "B",
     "Flower color is controlled by one or two major genes displaying discrete, discontinuous classes without environmental overlap."),
    ("Qualitative versus quantitative traits and continuous variation", "Easy",
     "Quantitative traits in crops typically exhibit which type of phenotypic distribution in segregating generations?",
     "Bimodal distribution", "Gaussian normal (bell-shaped) continuous curve", "Trimodal discrete classes", "Strict 3:1 ratio", "B",
     "Quantitative traits show continuous variation following a symmetrical bell-shaped Gaussian normal distribution."),
    ("Qualitative versus quantitative traits and continuous variation", "Easy",
     "The individual genes controlling a quantitative continuous trait are known as:",
     "Oligogenes", "Polygenes (or minor genes)", "Lethal genes", "Pseudoalleles", "B",
     "Polygenes (minor genes) collectively control quantitative traits, each contributing a small, cumulative additive effect."),
    ("Qualitative versus quantitative traits and continuous variation", "Medium",
     "Which statistical branch was pioneered by Sir Francis Galton and Karl Pearson to study quantitative continuous traits?",
     "Mendelian genetics", "Biometrical genetics", "Microbial genetics", "Cytogenetics", "B",
     "Biometrical genetics applies mathematical statistics (mean, variance, covariance, regression) to analyze quantitative variation."),
    ("Qualitative versus quantitative traits and continuous variation", "Medium",
     "Why does environmental variation have a much larger impact on quantitative traits than on qualitative traits?",
     "Because quantitative traits lack DNA", "Because individual polygenic effects are small, so environmental noise easily obscures subtle genotypic differences", "Because polygenes are located only on sex chromosomes", "Because qualitative traits do not undergo meiosis", "B",
     "Because each contributing polygene exerts only a minor effect, environmental fluctuations blur the boundaries between adjacent genotypic classes."),
    ("Qualitative versus quantitative traits and continuous variation", "Medium",
     "Which of the following agronomic traits is strictly quantitative?",
     "Stem height governed by Le/le in pea", "Seed protein content percentage in soybean", "Yellow vs green cotyledon in pea", "Round vs wrinkled seed shape", "B",
     "Seed protein percentage is governed by numerous polygenes and heavily influenced by soil nitrogen, moisture, and temperature."),
    ("Qualitative versus quantitative traits and continuous variation", "Medium",
     "The term 'Oligogenic trait' refers to a trait controlled by:",
     "Hundreds of genes", "One or a few major genes with large phenotypic effects", "Only cytoplasmic mitochondrial genes", "Lethal alleles exclusively", "B",
     "Oligogenic traits are governed by one or a few major genes (e.g., standard Mendelian qualitative traits)."),
    ("Qualitative versus quantitative traits and continuous variation", "Hard",
     "In biometrical genetics, Quantitative Trait Loci (QTLs) are identified and mapped onto chromosomes using:",
     "Visual flower inspection", "Linkage mapping with molecular markers (RFLPs, SSRs, SNPs) and interval mapping algorithms", "Standard monohybrid Chi-square test", "Gram staining", "B",
     "QTL mapping statistically correlates phenotypic quantitative measurements with segregation of molecular DNA markers across a linkage map."),
    ("Qualitative versus quantitative traits and continuous variation", "Hard",
     "A trait with continuous variation that shows an abrupt threshold for phenotypic manifestation (e.g., disease incidence: healthy vs infected) is termed a:",
     "Threshold trait (quasi-continuous trait)", "Strict oligogenic trait", "Holandric trait", "Maternal trait", "A",
     "Threshold traits have an underlying continuous polygenic liability, but the phenotype manifests discontinuously once a physiological threshold is crossed."),
    ("Qualitative versus quantitative traits and continuous variation", "Hard",
     "What causes transgressive segregation in an F2 population derived from two inbred parents?",
     "Novel point mutations", "Complementary combination of positive contributing alleles from both parents exceeding the phenotypic range of either parent", "Cytoplasmic maternal inheritance", "Chromosomal deletion", "B",
     "Transgressive segregants arise when progeny accumulate more favorable polygenic alleles than either parent possessed (e.g., Parent 1: AAbbCC; Parent 2: aaBBcc -> F2: AABBCC)."),

    # Topic 2: Multiple factor hypothesis and Nilsson-Ehle (10 Qs: 3E, 4M, 3H)
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Easy",
     "Who proposed the Multiple Factor Hypothesis in 1909 using wheat kernel color?",
     "Gregor Mendel", "H. Nilsson-Ehle", "E. M. East", "G. H. Shull", "B",
     "Herman Nilsson-Ehle performed crosses in Swedish winter wheat (Triticum aestivum), proving that kernel color is polygenic."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Easy",
     "In Nilsson-Ehle's two-gene wheat kernel color cross (R1r1 R2r2 x R1r1 R2r2), how many phenotypic color grades appeared in F2?",
     "3 grades", "5 grades (1:4:6:4:1)", "9 grades", "16 grades", "B",
     "The two-gene cross segregates into 5 phenotypic grades corresponding to 4, 3, 2, 1, or 0 dominant contributing alleles in a 1:4:6:4:1 ratio."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Easy",
     "What proportion of the F2 generation in Nilsson-Ehle's two-gene cross had white kernels?",
     "1/4", "1/16", "6/16", "1/64", "B",
     "White kernels require homozygous absence of all contributing alleles (r1r1 r2r2), occurring with a frequency of (1/4)^2 = 1/16."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Medium",
     "If a quantitative trait is controlled by 'n' independent polygenic loci, what is the formula for the number of phenotypic classes in F2?",
     "2n", "2n + 1", "3^n", "4^n", "B",
     "The number of phenotypic classes in F2 is 2n + 1 (e.g., for n = 2 loci, 2(2) + 1 = 5 classes; for n = 3 loci, 2(3) + 1 = 7 classes)."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Medium",
     "In polygenic inheritance, what is the frequency of recovering the extreme parental phenotypes in the F2 generation?",
     "(1/2)^n", "(1/4)^n", "(3/4)^n", "1 / (2n + 1)", "B",
     "The probability of recovering each extreme parental homozygote in F2 is (1/4)^n, where n is the number of segregating polygenic loci."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Medium",
     "In Nilsson-Ehle's three-gene wheat kernel color cross, what was the F2 phenotypic ratio?",
     "1:4:6:4:1", "1:6:15:20:15:6:1", "9:3:3:1", "27:9:9:9:3:3:3:1", "B",
     "Expansion of (A + a)^6 yields 7 phenotypic classes in a 1:6:15:20:15:6:1 ratio across 64 total zygotic combinations."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Medium",
     "Edward M. East (1916) validated the multiple factor hypothesis by studying corolla tube length in which plant?",
     "Pisum sativum", "Nicotiana longiflora (tobacco)", "Zea mays", "Antirrhinum majus", "B",
     "East demonstrated polygenic continuous inheritance in tobacco (Nicotiana longiflora) corolla length, recovering parental extremes in F2/F3."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Hard",
     "If an F2 population of 1024 plants yields exactly 1 individual showing the extreme parental dwarf phenotype, how many polygenic loci are segregating?",
     "2 loci", "3 loci", "5 loci", "10 loci", "C",
     "Frequency = 1/1024 = (1/4)^n. Since 4^5 = 1024, exactly n = 5 polygenic loci are segregating."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Hard",
     "In a polygenic system with 3 loci (A, B, C) where base plant height is 50 cm and each dominant allele adds 5 cm, what is the height of an AABbcc plant?",
     "55 cm", "65 cm", "75 cm", "80 cm", "B",
     "The genotype AABbcc possesses 3 dominant alleles (two A, one B). Total height = Base (50 cm) + (3 x 5 cm) = 65 cm."),
    ("Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance", "Hard",
     "Why do polygenic traits produce a smooth continuous curve rather than discrete stair-step bars in natural field populations?",
     "Because polygenes mutate during mitosis", "Because environmental variation expands each discrete genotypic value into an overlapping distribution", "Because crossing over does not occur", "Because dominance is always 100% complete", "B",
     "Environmental effects add random continuous variance around each polygenic mean, causing adjacent discrete genotypic distributions to merge into a single continuous normal curve."),

    # Topic 3: Genotype-environment interaction and stability (10 Qs: 3E, 4M, 3H)
    ("Genotype-environment interaction and phenotypic plasticity", "Easy",
     "The fundamental equation relating phenotype (P), genotype (G), and environment (E) is:",
     "P = G x E", "P = G + E + (G x E)", "P = G - E", "P = (G + E) / 2", "B",
     "Phenotype is the sum of genotypic value, environmental deviation, and the interaction between genotype and environment: P = G + E + (G x E)."),
    ("Genotype-environment interaction and phenotypic plasticity", "Easy",
     "The ability of an individual genotype to produce different phenotypes in response to varying environmental conditions is called:",
     "Epistasis", "Phenotypic plasticity", "Penetrance", "Heritability", "B",
     "Phenotypic plasticity is the capacity of a given genotype to alter its physiological or morphological phenotype in different environments."),
    ("Genotype-environment interaction and phenotypic plasticity", "Easy",
     "In plant breeding, Genotype x Environment (G x E) interaction is evaluated by conducting:",
     "Single-plant greenhouse assays", "Multi-Environment Trials (MET) across diverse locations and seasons", "Pure line selection without replication", "Test crosses with homozygous testers only", "B",
     "Multi-Environment Trials (MET) across diverse agro-ecological regions and years quantify G x E interaction and assess stability."),
    ("Genotype-environment interaction and phenotypic plasticity", "Medium",
     "In the Eberhart and Russell (1966) stability model, a genotype with regression coefficient bi = 1.0 is considered to have:",
     "Below average stability", "Average stability (well adapted to all environments)", "Specific adaptation to poor environments", "High instability", "B",
     "A regression coefficient of bi = 1.0 signifies average stability; the variety responds in direct linear proportion to environmental potential."),
    ("Genotype-environment interaction and phenotypic plasticity", "Medium",
     "According to Eberhart and Russell, an ideal stable crop cultivar must possess:",
     "Low mean yield, bi = 0, high S^2di", "High mean yield, regression coefficient bi = 1.0, and deviation from regression S^2di = 0", "bi > 2.0 and high S^2di", "bi < 0 and negative yield", "B",
     "An ideal stable cultivar exhibits high mean performance, average environmental responsiveness (bi = 1.0), and minimal unpredictable deviation (S^2di = 0)."),
    ("Genotype-environment interaction and phenotypic plasticity", "Medium",
     "A crop cultivar having bi > 1.0 is specifically recommended for:",
     "Drought-prone, marginal rainfed lands", "Favorable, high-input, well-irrigated commercial production environments", "Subsistence farming with zero inputs", "Shaded understory environments", "B",
     "Cultivars with bi > 1.0 have below-average stability but high sensitivity/responsiveness to environmental enhancement, excelling under intensive management."),
    ("Genotype-environment interaction and phenotypic plasticity", "Medium",
     "What does a significant 'deviation from regression' (S^2di > 0) indicate regarding cultivar performance?",
     "The cultivar is perfectly predictable", "The cultivar's response to changing environments is unpredictable and unstable", "The cultivar is immune to diseases", "The cultivar has 100% heritability", "B",
     "A non-zero S^2di signifies erratic, unpredictable performance that cannot be modeled by simple linear regression."),
    ("Genotype-environment interaction and phenotypic plasticity", "Hard",
     "In multi-environment trials, an interaction where the relative ranking of genotypes changes across environments is called a:",
     "Non-crossover (qualitative) interaction", "Crossover (qualitative rank-change) G x E interaction", "Neutral interaction", "Orthogonal deviation", "B",
     "Crossover G x E interactions involve rank changes across environments (e.g., Genotype A outperforms B in location 1, but B outperforms A in location 2), complicating universal variety release."),
    ("Genotype-environment interaction and phenotypic plasticity", "Hard",
     "Which multivariate statistical technique generates a biplot displaying Genotype main effect and Genotype x Environment interaction simultaneously?",
     "ANOVA", "GGE Biplot (or AMMI - Additive Main Effects and Multiplicative Interaction)", "Student t-test", "Chi-square contingency table", "B",
     "AMMI analysis and GGE biplots partition G x E into principal components, visualizing cultivar adaptability and mega-environments simultaneously."),
    ("Genotype-environment interaction and phenotypic plasticity", "Hard",
     "Homeostasis (genetic buffering) that enables heterozygous populations (e.g., F1 hybrids) to maintain stable yields across environments is termed:",
     "Developmental / Individual homeostasis", "Structural polyploidy", "Inbreeding depression", "Epistatic decay", "A",
     "Individual homeostasis (Lerner, 1954) enables genetically heterozygous organisms to buffer physiological development against environmental stress."),

    # Topic 4: Heritability (broad and narrow) (10 Qs: 4E, 4M, 2H)
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Easy",
     "Broad-sense heritability (H^2) is defined as the ratio of:",
     "Additive variance to phenotypic variance (Va / Vp)", "Total genetic variance to total phenotypic variance (Vg / Vp)", "Dominance variance to environmental variance (Vd / Ve)", "Environmental variance to phenotypic variance (Ve / Vp)", "B",
     "Broad-sense heritability (H^2) = Vg / Vp, measuring the proportion of phenotypic variation caused by total genetic differences."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Easy",
     "Narrow-sense heritability (h^2) is defined as the ratio of:",
     "Vg / Vp", "Additive genetic variance to total phenotypic variance (Va / Vp)", "Vd / Vp", "Ve / Vp", "B",
     "Narrow-sense heritability (h^2) = Va / Vp, quantifying only the additive portion of genetic variance transmitted to offspring."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Easy",
     "The theoretical numerical range of heritability is between:",
     "-1.0 and +1.0", "0.0 and 1.0 (or 0% to 100%)", "1.0 and 10.0", "0 and infinity", "B",
     "Heritability is a proportion ranging from 0.0 (no genetic variation) to 1.0 (100% of phenotypic variation is genetic)."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Easy",
     "In clonally propagated crops (e.g., potato, sugarcane), which heritability estimate is most practically relevant?",
     "Narrow-sense heritability (h^2)", "Broad-sense heritability (H^2)", "Only environmental variance", "Paternal heritability", "B",
     "Clonal propagation fixes and preserves the entire genetic constitution (Va + Vd + Vi) without sexual segregation, making H^2 the relevant parameter."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Medium",
     "In parent-offspring regression where single-parent values are regressed on offspring means (b_OP), narrow-sense heritability (h^2) equals:",
     "b_OP", "2 * b_OP", "1/2 * b_OP", "(b_OP)^2", "B",
     "Offspring share half their additive genes with a single parent. Therefore, h^2 = 2 x b_OP (for mid-parent regression, h^2 = b_MP)."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Medium",
     "If phenotypic variance Vp = 100 and environmental variance Ve = 25 in a segregating population, what is the broad-sense heritability (H^2)?",
     "25%", "50%", "75% (0.75)", "100%", "C",
     "Vg = Vp - Ve = 100 - 25 = 75. Therefore, H^2 = Vg / Vp = 75 / 100 = 0.75 (or 75%)."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Medium",
     "When narrow-sense heritability (h^2) of a crop trait is high (>60%), the most effective selection method is:",
     "Progeny testing over multiple locations", "Simple mass selection / individual plant selection in early generations", "Recurrent reciprocal selection", "Marker-assisted introgression exclusively", "B",
     "High narrow-sense heritability means phenotype reliably reflects breeding value, allowing effective direct phenotypic selection on individual plants."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Medium",
     "Why is environmental variance (Ve) typically estimated from non-segregating parental lines (P1, P2) and F1 in crop genetics?",
     "Because they have no chromosomes", "Because they are genetically uniform, so any observable phenotypic variance is entirely environmental", "Because their heritability is 100%", "Because they do not photosynthesize", "B",
     "Pure-line parents and F1 hybrids have uniform genotypes (Vg = 0), so all observed variance within them is purely environmental (Ve)."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Hard",
     "If a population has Va = 30, Vd = 15, Vi = 5, and Ve = 50, what are the broad-sense (H^2) and narrow-sense (h^2) heritabilities?",
     "H^2 = 50%, h^2 = 30%", "H^2 = 30%, h^2 = 50%", "H^2 = 80%, h^2 = 40%", "H^2 = 100%, h^2 = 60%", "A",
     "Vp = 30 + 15 + 5 + 50 = 100. Vg = 30 + 15 + 5 = 50. H^2 = 50/100 = 50%. h^2 = Va/Vp = 30/100 = 30%."),
    ("Heritability: Broad-sense and narrow-sense heritability estimation", "Hard",
     "Realized heritability (h^2_realized) is calculated from an artificial selection experiment as the ratio of:",
     "Selection Differential (S) / Response to Selection (R)", "Response to Selection (R) / Selection Differential (S)", "Population Mean / Standard Deviation", "Total Yield / Area", "B",
     "According to the Breeder's Equation (R = h^2 * S), realized heritability is h^2 = R / S."),

    # Topic 5: Genetic advance and selection methods (10 Qs: 4E, 4M, 2H)
    ("Genetic advance and response to selection in crop populations", "Easy",
     "In quantitative genetics, the 'Breeder's Equation' predicting response to selection (R) is expressed as:",
     "R = h^2 * S", "R = Vp / Vg", "R = S / h^2", "R = k * Ve", "A",
     "The Breeder's Equation states that Response to selection (R) equals narrow-sense heritability (h^2) multiplied by the Selection Differential (S)."),
    ("Genetic advance and response to selection in crop populations", "Easy",
     "The difference between the mean phenotypic value of selected parents and the mean of the original base population is termed:",
     "Genetic advance", "Selection differential (S)", "Heritability coefficient", "Standard error", "B",
     "Selection Differential (S = Xs - X0) measures the phenotypic superiority of selected individuals over the unselected base population."),
    ("Genetic advance and response to selection in crop populations", "Easy",
     "What selection intensity factor 'k' in standardized units corresponds to saving the top 5% of a normally distributed population?",
     "1.00", "1.755", "2.06", "3.00", "C",
     "For a standard normal truncation selection of 5% (p = 0.05), the standardized selection intensity factor k = 2.06."),
    ("Genetic advance and response to selection in crop populations", "Easy",
     "According to Johnson, Robinson, and Comstock (1955), reliable prediction of high genetic gain requires:",
     "High heritability alone", "High genetic advance alone", "High heritability coupled with high genetic advance", "Low heritability and zero variance", "C",
     "High heritability accompanied by high genetic advance confirms that additive gene action predominates, ensuring real breeding progress."),
    ("Genetic advance and response to selection in crop populations", "Medium",
     "Genetic Advance (GA) is mathematically calculated using the formula:",
     "GA = k * sigma_p * h^2", "GA = k / (sigma_p * h^2)", "GA = h^2 / S", "GA = Vg / Ve", "A",
     "GA = k * sigma_p * h^2, where k is selection intensity, sigma_p is phenotypic standard deviation, and h^2 is narrow-sense heritability."),
    ("Genetic advance and response to selection in crop populations", "Medium",
     "Genetic Advance as percent of mean (GAM) is classified as 'High' when it exceeds:",
     "5%", "10%", "20%", "50%", "C",
     "Johnson et al. classified GAM as: Low (<10%), Moderate (10-20%), and High (>20%)."),
    ("Genetic advance and response to selection in crop populations", "Medium",
     "A trait with high heritability but low genetic advance is governed predominantly by:",
     "Additive gene action", "Non-additive gene action (dominance and epistasis)", "Environmental variance only", "Strict maternal inheritance", "B",
     "When high heritability is coupled with low genetic advance, non-additive gene action (dominance and epistasis) predominates; simple selection will be ineffective."),
    ("Genetic advance and response to selection in crop populations", "Medium",
     "Which breeding procedure is best suited for improving a self-pollinated crop trait governed by additive polygenic variance with high heritability?",
     "Heterosis breeding (F1 hybrids)", "Pedigree selection / Bulk breeding", "Clonal propagation", "Chemical mutagenesis exclusively", "B",
     "Pedigree selection and bulk breeding effectively fix additive polygenic alleles into homozygous pure lines in self-pollinated crops."),
    ("Genetic advance and response to selection in crop populations", "Hard",
     "In a wheat breeding program, mean yield of base population is 40 q/ha (sigma_p = 4.0 q/ha). Top 5% plants are selected (k = 2.06). If narrow-sense heritability h^2 = 0.50, what is the Genetic Advance (GA)?",
     "2.06 q/ha", "4.12 q/ha", "8.24 q/ha", "16.48 q/ha", "B",
     "GA = k * sigma_p * h^2 = 2.06 * 4.0 * 0.50 = 4.12 q/ha. The expected progeny mean will be 40 + 4.12 = 44.12 q/ha."),
    ("Genetic advance and response to selection in crop populations", "Hard",
     "When non-additive genetic variance (dominance Vd and dominance-by-dominance Vdd epistasis) predominates, which breeding strategy should be employed?",
     "Mass selection in F2", "Hybrid breeding (exploiting heterosis / hybrid vigor)", "Pure line selection", "Single seed descent without selection", "B",
     "Non-additive variance cannot be fixed in homozygous pure lines; it is commercially exploited through F1 hybrid cultivars exhibiting heterosis."),

    # Topic 6: Genetic variance components (10 Qs: 3E, 5M, 2H)
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Easy",
     "Which component of genetic variance is fixable by selection in homozygous pure lines?",
     "Dominance variance (Vd)", "Additive genetic variance (Va)", "Environmental variance (Ve)", "Dominance x dominance epistatic variance (Vdd)", "B",
     "Additive genetic variance represents the average allele substitution effects that breed true and are permanently fixable in homozygous lines."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Easy",
     "Intra-allelic interaction between alleles at the same locus contributes to which variance component?",
     "Additive variance (Va)", "Dominance variance (Vd)", "Epistatic variance (Vi)", "Environmental variance (Ve)", "B",
     "Dominance variance (Vd) arises specifically from intra-allelic interactions (partial, complete, or overdominance)."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Easy",
     "Inter-allelic interaction between different gene loci contributes to which variance component?",
     "Additive variance (Va)", "Dominance variance (Vd)", "Epistatic variance (Vi)", "Environmental variance (Ve)", "C",
     "Epistatic variance (Vi) arises from interactions between alleles at distinct non-allelic loci."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Medium",
     "Epistatic genetic variance (Vi) is subdivided into which three biological components?",
     "Va, Vd, and Ve", "Additive x Additive (Vaa), Additive x Dominance (Vad), and Dominance x Dominance (Vdd)", "Vp, Vg, and Ve", "V1, V2, and V3", "B",
     "Cockerham and Kempthorne partitioned epistatic variance into Vaa (additive x additive), Vad (additive x dominance), and Vdd (dominance x dominance)."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Medium",
     "Which epistatic variance component is fixable in homozygous pure lines of self-pollinated crops?",
     "Additive x Dominance (Vad)", "Dominance x Dominance (Vdd)", "Additive x Additive (Vaa)", "None can ever be fixed", "C",
     "Additive x Additive (Vaa) interactions involve homozygous combinations across loci (e.g., AABB) that breed true in pure lines."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Medium",
     "In cross-pollinated crops, combining ability analysis evaluates parents using General Combining Ability (GCA) and Specific Combining Ability (SCA). GCA is primarily associated with:",
     "Dominance variance (Vd)", "Additive genetic variance (Va) and additive x additive epistasis (Vaa)", "Environmental variance exclusively", "Maternal effects only", "B",
     "Sprague and Tatum (1942) established that GCA reflects additive gene action, whereas SCA reflects non-additive (dominance and epistasis) action."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Medium",
     "Specific Combining Ability (SCA) in diallel or line x tester crosses is primarily governed by:",
     "Additive variance (Va)", "Non-additive genetic variance (Dominance Vd and Epistasis Vi)", "Soil fertility gradients", "Centromere position", "B",
     "SCA variance estimates non-additive gene effects (dominance and epistatic interactions), indicating specific hybrid cross performance."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Medium",
     "Which experimental mating design utilizes crosses between 'l' lines and 't' testers to estimate GCA and SCA variance components?",
     "Diallel analysis", "Line x Tester (L x T) analysis (Kempthorne, 1957)", "North Carolina Design I", "Biparental mating", "B",
     "Kempthorne's Line x Tester analysis evaluates large numbers of lines crossed to common testers to estimate GCA of lines, GCA of testers, and SCA."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Hard",
     "In North Carolina Design II (NCD II), each of 'm' males is mated to each of 'f' females. The variance among male parents estimates:",
     "1/4 of Additive variance (1/4 Va)", "1/2 of Dominance variance (1/2 Vd)", "Total environmental variance (Ve)", "Epistatic variance exclusively", "A",
     "In biparental and NCD II designs, paternal half-sib family variance estimates covariance among half-sibs = 1/4 Va."),
    ("Genetic variance components (additive, dominance, epistatic) and selection methods", "Hard",
     "If the ratio of GCA variance to SCA variance (2 * sigma^2_gca / (2 * sigma^2_gca + sigma^2_sca)) is close to 1.0, what does this indicate?",
     "Non-additive gene action completely dominates", "Additive gene action predominates over non-additive action", "Trait has zero heritability", "Selection must be delayed to F8", "B",
     "A Baker ratio close to 1.0 confirms that additive genetic variance predominates, indicating that progeny performance can be reliably predicted from parental GCA alone.")
]

for idx, item in enumerate(mcq_data, start=1):
    q_id = f"GPB203-U3-MCQ{idx:02d}"
    unit3["mcqs"].append({
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
unit3["subjectiveQuestions"] = [
    {
        "id": "GPB203-U3-SUB01",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Qualitative versus quantitative traits and continuous variation",
        "questionText": "Outline five major distinguishing features between qualitative and quantitative traits in crop plants.",
        "modelAnswer": """Qualitative (Mendelian/oligogenic) and Quantitative (biometrical/polygenic) traits differ fundamentally across genetic, environmental, and statistical parameters:

1. Number of Governing Genes:
- Qualitative: Governed by one or two major genes (oligogenes) with large, distinct phenotypic effects.
- Quantitative: Governed by numerous minor genes (polygenes) distributed across chromosomes, each exerting a small, cumulative effect.

2. Nature of Phenotypic Variation:
- Qualitative: Shows discontinuous variation, sorting into distinct, non-overlapping categories (e.g., tall vs dwarf pea, red vs white flower).
- Quantitative: Shows continuous variation without discrete classes, forming a bell-shaped Gaussian normal distribution (e.g., grain yield, plant height from 90 to 180 cm).

3. Environmental Influence:
- Qualitative: Negligible environmental effect; phenotype directly mirrors the genotype (low G x E interaction).
- Quantitative: Substantial environmental influence; environmental noise blurs phenotypic boundaries between adjacent genotypes.

4. Measurement Scale:
- Qualitative: Evaluated by visual classification and counting frequencies (percentages and Mendelian ratios: 3:1, 9:3:3:1).
- Quantitative: Evaluated by graduated measurement on continuous scales using physical units (kg/ha, grams, centimeters, days).

5. Statistical Analysis:
- Qualitative: Analyzed using Chi-square (χ2) goodness-of-fit tests and binomial distribution.
- Quantitative: Analyzed using biometrical statistics: mean, variance, standard deviation, ANOVA, regression, and heritability estimates.""",
        "outlinePoints": [
            "Gene number: one/two major genes vs numerous polygenes",
            "Variation type: discontinuous categories vs continuous Gaussian distribution",
            "Environmental sensitivity: minimal vs profound G x E interaction",
            "Measurement: visual counting vs graduated continuous physical units",
            "Statistical methods: Chi-square test vs biometrical ANOVA/variance partitioning"
        ]
    },
    {
        "id": "GPB203-U3-SUB02",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance",
        "questionText": "State H. Nilsson-Ehle's Multiple Factor Hypothesis and explain how it reconciled continuous variation with Mendelian genetics.",
        "modelAnswer": """In the late 19th and early 20th centuries, a major controversy raged between Mendelians (who argued inheritance is particulate and discontinuous) and Biometricians led by Galton and Pearson (who argued that true evolutionary traits vary continuously and cannot be explained by discrete Mendelian factors).

Nilsson-Ehle's Multiple Factor Hypothesis (1909):
Swedish geneticist H. Nilsson-Ehle resolved this conflict through hybridization experiments on kernel color in Swedish winter wheat (*Triticum aestivum*).

Core Postulates of the Hypothesis:
1. Multi-Locus Control: Continuous quantitative traits are controlled by two or more independent Mendelian gene loci (polygenes).
2. Particulate Mendelian Segregation: Each individual polygenic locus segregates cleanly and assorts independently according to standard Mendelian laws during meiosis.
3. Equal and Additive Allelic Action: Each dominant allele (contributing allele) at any of the segregating loci adds an equal, incremental increment to the phenotype. Recessive alleles (non-contributing alleles) contribute nothing.
4. Cumulative Dosages: The phenotype depends strictly on the cumulative number of contributing alleles present across all loci, regardless of which specific locus they occupy.

Reconciliation:
Nilsson-Ehle proved that when multiple Mendelian loci segregate simultaneously, the number of distinct phenotypic classes expands (e.g., 5 classes for 2 genes, 7 classes for 3 genes). When minor environmental variations blur the boundaries between these closely spaced classes, a continuous normal distribution curve emerges, demonstrating that continuous variation is entirely compatible with particulate Mendelian heredity.""",
        "outlinePoints": [
            "Historical conflict between Mendelians and Biometricians",
            "Four core postulates of Nilsson-Ehle's multiple factor hypothesis",
            "Concept of contributing alleles exerting equal additive effects",
            "Explanation of how multi-locus segregation produces continuous phenotypic distributions"
        ]
    },
    {
        "id": "GPB203-U3-SUB03",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance",
        "questionText": "Explain the phenotypic and genotypic segregation in the F2 generation of Nilsson-Ehle's two-gene wheat kernel color cross (R1r1 R2r2 x R1r1 R2r2).",
        "modelAnswer": """Nilsson-Ehle crossed true-breeding dark red kernel wheat (*R1R1 R2R2*) with true-breeding white kernel wheat (*r1r1 r2r2*). The F1 plants (*R1r1 R2r2*) possessed medium red kernels.

When F1 plants were self-pollinated (*R1r1 R2r2* x *R1r1 R2r2*), the F2 generation produced 16 zygotic combinations sorting into 5 distinct phenotypic color grades based on the number of contributing dominant alleles (*R1* and *R2*):

1. Class 1: 4 Contributing Alleles (Genotype: *R1R1 R2R2*)
- Frequency = 1/16
- Phenotype: Dark Red (identical to dominant parent).

2. Class 2: 3 Contributing Alleles (Genotypes: 2 *R1R1 R2r2* + 2 *R1r1 R2R2*)
- Frequency = 4/16 (1/4)
- Phenotype: Medium-Dark Red.

3. Class 3: 2 Contributing Alleles (Genotypes: 1 *R1R1 r2r2* + 1 *r1r1 R2R2* + 4 *R1r1 R2r2*)
- Frequency = 6/16 (3/8)
- Phenotype: Medium Red (identical to F1 hybrid).

4. Class 4: 1 Contributing Allele (Genotypes: 2 *R1r1 r2r2* + 2 *r1r1 R2r2*)
- Frequency = 4/16 (1/4)
- Phenotype: Light Red.

5. Class 5: 0 Contributing Alleles (Genotype: *r1r1 r2r2*)
- Frequency = 1/16
- Phenotype: White (identical to recessive parent).

Phenotypic Ratio = 1 Dark Red : 4 Medium-Dark Red : 6 Medium Red : 4 Light Red : 1 White (1:4:6:4:1).

Mathematical Significance:
The frequencies correspond exactly to the binomial expansion of `(a + b)^4`, where the exponent represents the 4 segregating alleles. This verified that two Mendelian genes acting additively create five discrete phenotypic grades.""",
        "outlinePoints": [
            "P1 cross setup and F1 heterozygous constitution (R1r1 R2r2)",
            "Detailed classification of the 5 F2 phenotypic grades based on contributing allele dosage",
            "Listing of genotypes and individual frequencies summing to 16/16",
            "Derivation of the 1:4:6:4:1 ratio matching the binomial expansion (a + b)^4"
        ]
    },
    {
        "id": "GPB203-U3-SUB04",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity",
        "questionText": "Define Genotype x Environment (G x E) interaction and explain the three stability parameters defined by Eberhart and Russell (1966).",
        "modelAnswer": """Genotype x Environment (G x E) interaction represents the differential phenotypic response of diverse crop genotypes when evaluated across varying environments (locations, soil fertility levels, management regimes, or years). When G x E interaction is significant, the relative performance or ranking of cultivars changes from one environment to another.

The Eberhart and Russell (1966) Stability Model:
Eberhart and Russell proposed evaluating crop stability across multi-location trials using linear regression of genotype performance on an environmental index, defining three parameters:

1. Mean Performance (Xi):
The average yield or agronomic value of genotype *i* across all test environments. A desirable cultivar must have a high overall mean yield exceeding the grand trial mean.

2. Linear Regression Coefficient (bi):
The slope of the regression line relating genotype performance to the environmental index (which measures site potential):
- `bi = 1.0`: Represents average stability. The genotype responds in direct proportion to the environmental improvement (well-adapted to all environments).
- `bi > 1.0`: Represents below-average stability. The genotype is highly sensitive and responsive to favorable, high-input conditions (specifically adapted to high-yield environments).
- `bi < 1.0`: Represents above-average stability. The genotype is insensitive to environmental changes, performing consistently well under poor, stress-prone conditions (adapted to marginal environments).

3. Deviation from Regression (S^2di):
The mean square deviation of actual observed values from the fitted regression line. A genotype is considered predictable and truly stable only if `S^2di = 0` (non-significant). High S^2di indicates erratic, unpredictable behavior.""",
        "outlinePoints": [
            "Definition and practical breeding impact of G x E interaction",
            "Parameter 1: Mean performance (Xi) exceeding grand population mean",
            "Parameter 2: Regression coefficient (bi) interpreting responsiveness (bi=1, bi>1, bi<1)",
            "Parameter 3: Deviation from regression (S^2di = 0) as the non-negotiable test of predictability"
        ]
    },
    {
        "id": "GPB203-U3-SUB05",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation",
        "questionText": "Define broad-sense heritability (H^2) and narrow-sense heritability (h^2). Why is narrow-sense heritability more valuable in seed-propagated crops?",
        "modelAnswer": """Heritability is a biometrical statistic quantifying the proportion of total phenotypic variation (*Vp*) observed in a population that is attributable to genetic differences (*Vg*) among individuals.

1. Broad-Sense Heritability (H^2):
- Definition: The ratio of total genetic variance (*Vg*) to total phenotypic variance (*Vp*):
  `H^2 = Vg / Vp = (Va + Vd + Vi) / Vp`
- It encompasses all forms of genetic variation, including additive variance (*Va*), dominance variance (*Vd*), and epistatic interaction variance (*Vi*).
- Practical Application: Highly relevant for clonally propagated crops (e.g., potato, sugarcane, banana, apple), where vegetative reproduction transmits the entire intact genotype without meiotic segregation.

2. Narrow-Sense Heritability (h^2):
- Definition: The ratio of additive genetic variance (*Va*) to total phenotypic variance (*Vp*):
  `h^2 = Va / Vp = Va / (Va + Vd + Vi + Ve)`
- It measures exclusively the proportion of variance caused by the average effects of individual alleles that are transmitted faithfully from parents to offspring.

Why Narrow-Sense Heritability is Superior in Seed-Propagated Crops:
In sexually reproducing seed crops (self- and cross-pollinated species):
- Dominance variance (*Vd*) arises from specific intra-allelic heterozygote pairings (*Aa*), which are disrupted when homologous chromosomes separate during meiosis.
- Non-additive epistasis (*Vi*) is similarly broken apart by meiotic crossing over and independent assortment.
- Only additive genetic effects (*Va*) breed true across sexual generations.
Therefore, narrow-sense heritability directly dictates the response to artificial selection (Breeder's Equation: `R = h^2 * S`) and accurately predicts breeding progress in seed-propagated crops.""",
        "outlinePoints": [
            "Mathematical definition and formula for broad-sense heritability (H^2 = Vg/Vp)",
            "Mathematical definition and formula for narrow-sense heritability (h^2 = Va/Vp)",
            "Why dominance and epistasis break down during meiotic sexual reproduction",
            "Role of narrow-sense heritability in predicting response to selection (Breeder's Equation)"
        ]
    },
    {
        "id": "GPB203-U3-SUB06",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation",
        "questionText": "Explain how environmental variance (Ve) and genetic variance (Vg) are estimated using non-segregating parental lines and F2 populations.",
        "modelAnswer": """In plant genetics, estimating broad-sense heritability requires partitioning the total phenotypic variance of an F2 segregating population into genetic (*Vg*) and environmental (*Ve*) components.

1. Principle of Using Non-Segregating Generations:
True-breeding inbred parental lines (*P1* and *P2*) are completely homozygous at all loci. The F1 hybrid generation (*P1* x *P2*) is completely heterozygous (*AaBbCc...*), but genetically 100% identical across all individuals.
Because individuals within *P1*, *P2*, and *F1* share identical genotypes, their genetic variance is zero (*Vg = 0*).
Consequently, any phenotypic variation observed within *P1*, *P2*, or *F1* is entirely caused by environmental fluctuations (*Ve*).

2. Calculating Environmental Variance (Ve):
Environmental variance is typically estimated as the arithmetic or geometric mean of the variances of the non-segregating generations:
- Arithmetic Mean: `Ve = (V_P1 + V_P2 + V_F1) / 3`
- Alternatively (Weighting F1 higher): `Ve = (V_P1 + V_P2 + 2*V_F1) / 4`
where *V_P1*, *V_P2*, and *V_F1* are the sample variances measured in the parental and F1 plots.

3. Estimating Genetic Variance (Vg) in F2:
The F2 generation segregates widely due to meiotic recombination and independent assortment. Its total phenotypic variance (*V_F2*) contains both genetic and environmental variance:
`V_F2 = Vg + Ve`
Subtracting the environmental variance (*Ve*) from the F2 variance yields the genetic variance:
`Vg = V_F2 - Ve = V_F2 - [(V_P1 + V_P2 + V_F1) / 3]`

4. Calculating Broad-Sense Heritability (H^2):
`H^2 = Vg / V_F2 = (V_F2 - Ve) / V_F2`
This classical method allows plant breeders to rapidly isolate genetic potential from field trial data.""",
        "outlinePoints": [
            "Genetic uniformity of P1, P2, and F1 meaning Vg = 0",
            "Formula for estimating environmental variance (Ve) from non-segregating controls",
            "F2 variance as the sum of genetic and environmental components (V_F2 = Vg + Ve)",
            "Isolation of Vg and calculation of broad-sense heritability"
        ]
    },
    {
        "id": "GPB203-U3-SUB07",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Genetic advance and response to selection in crop populations",
        "questionText": "Define Genetic Advance (GA) and explain why high heritability must be accompanied by high genetic advance to ensure breeding progress.",
        "modelAnswer": """Definition of Genetic Advance (GA):
Genetic Advance (GA), or Expected Genetic Gain, measures the expected improvement in the mean phenotypic value of the progeny population over the mean of the original base population after one cycle of artificial directional selection. It is calculated as:
`GA = k * sigma_p * h^2`
where `k` is the standardized selection differential (intensity factor), `sigma_p` is the phenotypic standard deviation of the base population, and `h^2` is the narrow-sense heritability.

Why High Heritability Must Be Accompanied by High Genetic Advance:
Johnson, Robinson, and Comstock (1955) proved that heritability estimates alone are insufficient to predict the real gain from selection:

1. High Heritability with High Genetic Advance:
- Indicates that the trait is governed predominantly by **additive gene action**.
- Phenotypic selection on individual plants in early segregating generations (F2/F3) will be highly effective, leading to rapid fixation of superior alleles in pure lines.

2. High Heritability with Low Genetic Advance:
- Occurs when high heritability is driven by **non-additive gene action** (dominance and epistasis) or when the base population has very low phenotypic variance (*sigma_p*).
- Because dominance and non-additive epistasis break down upon sexual segregation, simple phenotypic selection will yield disappointing progress. Breeding requires hybrid production or delayed selection in later generations (F5/F6).

3. Low Heritability with Low Genetic Advance:
- Governed heavily by environmental noise; direct selection is futile.

Conclusion: High heritability provides reliable prediction of selection response only when coupled with substantial genetic advance.""",
        "outlinePoints": [
            "Formula and biological definition of Genetic Advance (GA = k * sigma_p * h^2)",
            "Limitation of heritability estimates used in isolation",
            "High H^2 + High GA: confirms additive gene action and guarantees selection success",
            "High H^2 + Low GA: indicates non-additive dominance/epistatic action or narrow variability"
        ]
    },
    {
        "id": "GPB203-U3-SUB08",
        "questionType": "SHORT_ANSWER",
        "maxMarks": 5,
        "difficulty": "Hard",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods",
        "questionText": "Explain the concept of General Combining Ability (GCA) vs Specific Combining Ability (SCA) and their relationship with genetic variance components.",
        "modelAnswer": """Combining ability analysis (pioneered by Sprague and Tatum, 1942) evaluates the breeding potential of inbred lines used in crop hybridization programs:

1. General Combining Ability (GCA):
- Definition: The average performance of an inbred line in hybrid combinations across a series of diverse tester lines.
- Genetic Basis: GCA is directly associated with **Additive Genetic Variance (Va)** and additive x additive epistatic variance (*Vaa*).
- Breeding Implication: High GCA indicates that the parent possesses favorable additive alleles that are reliably transmitted to all progeny. Parents with high GCA are chosen to develop synthetic varieties, composites, or pure-line cultivars via recurrent selection.

2. Specific Combining Ability (SCA):
- Definition: Cases in which certain specific hybrid cross combinations perform significantly better or worse than expected based on the average performance (GCA) of the two parental lines.
- Genetic Basis: SCA is directly associated with **Non-Additive Genetic Variance**, specifically **Dominance Variance (Vd)** and epistatic interactions involving dominance (*Vad, Vdd*).
- Breeding Implication: High SCA indicates superior hybrid vigor (heterosis) resulting from unique favorable allelic interactions at heterozygous loci. Parents exhibiting high SCA are utilized to produce commercial F1 single-cross hybrids.

Summary of Relationship:
- Total Genetic Variance in Crosses = `2 * sigma^2_gca + sigma^2_sca`
- If GCA variance > SCA variance: Additive gene action predominates; use pedigree or recurrent selection.
- If SCA variance > GCA variance: Non-additive dominance action predominates; use heterosis hybrid breeding.""",
        "outlinePoints": [
            "Definitions of GCA (average performance across testers) and SCA (specific cross deviations)",
            "GCA connection to Additive Genetic Variance (Va) and fixable effects",
            "SCA connection to Non-Additive Dominance Variance (Vd) and heterosis",
            "Selection of breeding methods based on GCA:SCA variance ratio"
        ]
    },
    {
        "id": "GPB203-U3-SUB09",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Medium",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance",
        "questionText": "Explain the Multiple Factor Hypothesis in detail. Using Swedish winter wheat kernel color as a model, show how two and three polygenic loci segregate, deriving the binomial distributions and explaining the transition to continuous variation.",
        "modelAnswer": """The Multiple Factor Hypothesis, formulated by Herman Nilsson-Ehle in 1909 and corroborated by E. M. East in 1916, established the foundational bridge between Mendelian genetics and biometrical quantitative variation.

1. Historical Problem and Hypothesis Postulates:
Mendelian genetics successfully explained discrete qualitative variations (e.g., tall vs dwarf), but biometricians argued that critical agricultural and biological traits (yield, height, intelligence) exhibit continuous variation that cannot fit 3:1 Mendelian ratios.
Nilsson-Ehle postulated that:
- Continuous traits are controlled by multiple independent Mendelian loci (polygenes).
- Each locus segregates according to Mendel's Law of Segregation and assorts independently.
- Alleles are classified into contributing alleles (which add an incremental unit of phenotypic value) and non-contributing alleles (which contribute zero).
- Effects of contributing alleles are equal, cumulative, and additive across all loci, with no dominance.

2. Two-Locus Polygenic Model in Winter Wheat Kernel Color:
Nilsson-Ehle crossed true-breeding Dark Red wheat (*R1R1 R2R2*) with true-breeding White wheat (*r1r1 r2r2*).
- F1 Generation: *R1r1 R2r2* (Medium Red kernels, possessing 2 contributing alleles).
- F2 Generation (Selfing *R1r1 R2r2* x *R1r1 R2r2*):
  The 16 fertilization combinations sort into 5 distinct phenotypic color classes based on the number of dominant contributing alleles (*R*):
  * 4 Doses (*R1R1 R2R2*): 1/16 Dark Red
  * 3 Doses (2 *R1R1 R2r2*, 2 *R1r1 R2R2*): 4/16 Medium-Dark Red
  * 2 Doses (1 *R1R1 r2r2*, 1 *r1r1 R2R2*, 4 *R1r1 R2r2*): 6/16 Medium Red
  * 1 Dose (2 *R1r1 r2r2*, 2 *r1r1 R2r2*): 4/16 Light Red
  * 0 Doses (*r1r1 r2r2*): 1/16 White
- F2 Phenotypic Ratio = 1:4:6:4:1 (5 classes).
This ratio corresponds exactly to the binomial expansion `(1/2 + 1/2)^4 = 1/16, 4/16, 6/16, 4/16, 1/16`.

3. Three-Locus Polygenic Model:
When true-breeding dark red (*R1R1 R2R2 R3R3*) is crossed with white (*r1r1 r2r2 r3r3*):
- F1: *R1r1 R2r2 R3r3* (Trihybrid).
- F2: Expansion of `(1/2 + 1/2)^6` yields 2^6 = 64 combinations distributed across 2n + 1 = 7 phenotypic classes:
  * 6 Doses: 1/64 Dark Red
  * 5 Doses: 6/64
  * 4 Doses: 15/64
  * 3 Doses: 20/64 (Intermediate Red)
  * 2 Doses: 15/64
  * 1 Dose: 6/64
  * 0 Doses: 1/64 White
- F2 Phenotypic Ratio = 1:6:15:20:15:6:1.
Notice that the extreme white phenotype now appears in only 1 out of 64 plants (1.56%).

4. The Transition to Continuous Variation:
- As the number of segregating loci (*n*) increases from 2 to 3 to 10 to 100:
  * Number of phenotypic classes expands according to `2n + 1`.
  * The difference between adjacent classes becomes progressively smaller.
  * The frequency of extreme parental classes shrinks exponentially according to `(1/4)^n`.
- Furthermore, under natural field conditions, micro-environmental variations (soil fertility, water, light) act randomly upon each genotype, superimposing a normal distribution over each discrete genotypic bar.
- Consequently, the discrete stair-step histogram completely merges into a smooth, seamless bell-shaped Gaussian normal distribution curve.""",
        "outlinePoints": [
            "Hypothesis origin and postulates: multi-locus control, additive alleles, lack of dominance",
            "Derivation of the two-gene model showing 5 phenotypic grades and 1:4:6:4:1 ratio",
            "Derivation of the three-gene model showing 7 phenotypic grades and 1:6:15:20:15:6:1 ratio",
            "Mathematical expansion of (1/2 + 1/2)^2n and frequency of parental extremes (1/4)^n",
            "Explanation of how environmental blurring transforms multi-locus histograms into continuous normal curves"
        ]
    },
    {
        "id": "GPB203-U3-SUB10",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation",
        "questionText": "Discuss the partition of phenotypic variance into its biometrical components according to Fisher (1918). Formulate broad-sense and narrow-sense heritability and detail the parent-offspring regression method for estimating h^2.",
        "modelAnswer": """In 1918, Sir Ronald A. Fisher published his landmark paper establishing the mathematical foundation of quantitative genetics by partitioning total phenotypic variance into biologically meaningful genetic and environmental components.

1. Partitioning of Phenotypic Variance (Vp):
The total phenotypic variance (*Vp*) observed among individuals in a population is modeled as:
`Vp = Vg + Ve + 2Cov(G,E) + V(GxE)`
Under controlled experimental designs where genotypes are replicated and randomly assigned to environments, the covariance between genotype and environment `Cov(G,E)` and interaction `V(GxE)` can be separated or minimized, yielding:
`Vp = Vg + Ve`
where *Vg* is the total genetic variance and *Ve* is environmental variance.

Fisher further dissected total genetic variance (*Vg*) into three independent components:
`Vg = Va + Vd + Vi`
- **Additive Genetic Variance (Va):** Variance attributable to the average independent effects of alleles across loci. It represents the breeding value of individuals and is the only component faithfully transmitted from parents to sexual progeny.
- **Dominance Genetic Variance (Vd):** Variance resulting from intra-allelic interactions (dominance/recessiveness) between alleles at the same locus. It depends on heterozygosity and is disrupted during meiosis.
- **Epistatic Genetic Variance (Vi):** Variance resulting from inter-allelic interactions between different gene loci. It is further partitioned into:
  `Vi = Vaa + Vad + Vdd`
  (Additive x Additive, Additive x Dominance, and Dominance x Dominance). Only *Vaa* can be fixed in homozygous lines.

2. Heritability Formulations:
- **Broad-Sense Heritability (H^2):**
  `H^2 = Vg / Vp = (Va + Vd + Vi) / (Va + Vd + Vi + Ve)`
  Quantifies total genetic influence. Applicable to clonally propagated crops where the entire genetic configuration (*Va + Vd + Vi*) is preserved intact.
- **Narrow-Sense Heritability (h^2):**
  `h^2 = Va / Vp = Va / (Va + Vd + Vi + Ve)`
  Quantifies only the fixable additive portion. Governs response to directional selection in sexually reproducing crops.

3. Estimation of Narrow-Sense Heritability via Parent-Offspring Regression:
Parent-offspring regression represents one of the most robust biometrical methods for directly estimating *Va* and *h^2*:

A. Single Parent - Offspring Regression:
- Plot offspring mean phenotype (*Y*) against the phenotypic value of one parent (*X*, e.g., female parent).
- Calculate the linear regression slope (*b_OP*):
  `b_OP = Cov(Parent, Offspring) / Var(Parent)`
- Biometrical theory proves that the covariance between a single parent and its offspring equals half the additive genetic variance: `Cov(P, O) = 1/2 Va`.
- Since `Var(Parent) = Vp`:
  `b_OP = (1/2 Va) / Vp = 1/2 * (Va / Vp) = 1/2 * h^2`
- Solving for narrow-sense heritability:
  `h^2 = 2 * b_OP`

B. Mid-Parent - Offspring Regression:
- Plot offspring mean (*Y*) against the average (mean) value of both parents (*X_mid = (Parent1 + Parent2) / 2*).
- The covariance between mid-parent and offspring equals half the additive genetic variance, but the variance of mid-parent values equals `1/2 Vp`.
- Consequently:
  `b_MPO = Cov(MidParent, Offspring) / Var(MidParent) = (1/2 Va) / (1/2 Vp) = Va / Vp = h^2`
- Solving for narrow-sense heritability:
  `h^2 = b_MPO`
Mid-parent regression provides a direct, uninflated estimate of narrow-sense heritability without requiring a multiplier.""",
        "outlinePoints": [
            "Fisher's variance partitioning equation: Vp = Vg + Ve",
            "Dissection of Vg into Additive (Va), Dominance (Vd), and Epistatic (Vi) components",
            "Definitions and mathematical formulas for broad-sense (H^2) and narrow-sense (h^2) heritability",
            "Derivation of single parent - offspring regression (h^2 = 2 * b_OP)",
            "Derivation of mid-parent - offspring regression (h^2 = b_MPO)"
        ]
    },
    {
        "id": "GPB203-U3-SUB11",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Genetic advance and response to selection in crop populations",
        "questionText": "Derive the Breeder's Equation and Genetic Advance formula. Explain how selection differential, phenotypic standard deviation, selection intensity, and heritability interact to determine genetic gain in crop breeding.",
        "modelAnswer": """The primary goal of plant breeding is to maximize genetic gain per unit time. The mathematical framework describing response to selection was formalized by Lush (1943) and extended to crop breeding by Johnson et al. (1955).

1. Derivation of the Breeder's Equation:
Consider a base population with mean phenotypic value `X0`.
- Artificial selection chooses a subset of superior individuals with mean `Xs` to serve as parents of the next generation.
- **Selection Differential (S):** The phenotypic superiority of selected parents over the base population mean:
  `S = Xs - X0`
- The selected parents mate to produce an offspring generation with mean `X1`.
- **Response to Selection (R):** The actual progress achieved in the offspring generation over the original base population:
  `R = X1 - X0`

By definition, narrow-sense heritability (*h^2*) represents the proportion of phenotypic variation that is additive and transmitted to progeny:
`h^2 = R / S`
Rearranging this relationship yields the classic **Breeder's Equation**:
`R = h^2 * S`

2. Derivation of the Genetic Advance (GA) Formula:
In large breeding populations following a normal distribution, the selection differential (*S*) can be expressed in standardized statistical units:
`S = k * sigma_p`
where:
- `sigma_p` = Phenotypic standard deviation of the base population (`sqrt(Vp)`).
- `k` = Standardized selection differential (Selection Intensity factor). The value of *k* depends strictly on the proportion of the population saved (*p*). For example:
  * Top 1% saved (p = 0.01) -> k = 2.665
  * Top 5% saved (p = 0.05) -> k = 2.063
  * Top 10% saved (p = 0.10) -> k = 1.755
  * Top 20% saved (p = 0.20) -> k = 1.400

Substituting `S = k * sigma_p` into the Breeder's Equation yields the absolute **Genetic Advance (GA)**:
`GA = k * sigma_p * h^2`

Since `h^2 = Va / Vp` and `sigma_p = sqrt(Vp)`:
`GA = k * sqrt(Vp) * (Va / Vp) = k * (Va / sqrt(Vp))`

3. Genetic Advance as Percent of Mean (GAM):
To compare genetic advance across traits measured in different units (e.g., yield in kg/ha vs plant height in cm), GA is standardized against the population mean (`X_bar`):
`GAM = (GA / X_bar) * 100`

4. Interaction of Factors Determining Genetic Gain:
To maximize genetic gain (*GA*), plant breeders strategically manipulate four components:
- **Increase Selection Intensity (k):** Selecting a smaller, highly elite fraction (e.g., top 1% instead of 20%) increases *k*, but excessive intensity risks severe inbreeding depression and loss of genetic diversity.
- **Expand Phenotypic Variance (sigma_p):** Introducing diverse germplasm, exotic landraces, or wild relatives increases genetic variability.
- **Increase Heritability (h^2):** Minimizing environmental variance (*Ve*) through precision experimental field designs, blocking, spatial analysis, and replicated multi-location testing elevates *h^2*.
- **Shorten Generation Interval:** Accelerating breeding cycles via speed breeding (extended photoperiods) and embryo rescue maximizes genetic gain per year.""",
        "outlinePoints": [
            "Derivation of the Breeder's Equation (R = h^2 * S) from selection differential",
            "Standardization of selection differential into intensity factor (k * sigma_p)",
            "Derivation of the complete Genetic Advance formula: GA = k * sigma_p * h^2",
            "Formulation of Genetic Advance as percent of mean (GAM)",
            "Strategic breeding approaches to optimize k, sigma_p, h^2, and generation turnover"
        ]
    },
    {
        "id": "GPB203-U3-SUB12",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity",
        "questionText": "Discuss the biometrical analysis of Multi-Environment Trials (MET). Compare the Finlay-Wilkinson model, Eberhart-Russell model, and the Additive Main Effects and Multiplicative Interaction (AMMI) model.",
        "modelAnswer": """Evaluating crop cultivars across Multi-Environment Trials (MET) across diverse geographic locations, soil types, and crop seasons is mandatory prior to commercial variety release to evaluate adaptation, stability, and Genotype x Environment (G x E) interaction.

1. The Challenge of G x E Interaction:
In ANOVA, the total variance partitions into Genotype main effect (*G*), Environment main effect (*E*), and the interaction effect (*G x E*). Significant G x E complicates selection because the best-performing cultivar in high-rainfall regions may fail in drought-prone regions (crossover interaction).

2. The Finlay and Wilkinson Model (1963):
- Method: Regresses individual cultivar yields against an environmental index (the mean yield of all cultivars in that environment).
- Parameters:
  * Mean cultivar yield across environments.
  * Linear regression slope (*bi*):
    - `bi = 1.0`: Average stability.
    - `bi > 1.0`: High sensitivity; specifically adapted to favorable high-yielding environments.
    - `bi < 1.0`: Low sensitivity; specifically adapted to low-yielding stressful environments.
- Limitation: Assumes all G x E is linear; ignores non-linear residual deviations.

3. The Eberhart and Russell Model (1966):
- Method: Extended Finlay-Wilkinson by introducing an explicit measure of non-linear deviation from regression.
- Mathematical Model:
  `Yij = mi + bi * Ij + dij`
  where `Yij` is yield of genotype *i* in environment *j*, `mi` is genotype mean, `bi` is regression slope, `Ij` is environmental index, and `dij` is deviation from regression.
- Stability Parameters:
  * Mean performance (*Xi*): High overall mean yield.
  * Regression slope (*bi*): `bi = 1.0` indicating average responsiveness.
  * Deviation Mean Square (*S^2di*): Must be statistically non-significant (`S^2di = 0`).
- Advantage: Provides a rigorous statistical test for predictability. If `S^2di` is significantly greater than zero, performance is unpredictable regardless of *bi*.

4. The AMMI (Additive Main Effects and Multiplicative Interaction) Model (Gauch, 1988):
- Method: Combines standard analysis of variance (ANOVA) for additive main effects (*G* and *E*) with Principal Component Analysis (PCA) for the multiplicative *G x E* interaction.
- Mathematical Model:
  `Yij = mu + gi + ej + Sum[lambda_k * gamma_ik * delta_jk] + e_ij`
  where `lambda_k` is the singular value for IPC axis *k*, `gamma_ik` is genotype eigenvector, and `delta_jk` is environment eigenvector.
- AMMI Biplots:
  * AMMI1 Biplot: Plots genotype and environment means on the X-axis against IPCA1 scores on the Y-axis. Genotypes with IPCA1 scores near zero exhibit general stability across all environments.
  * AMMI2 Biplot: Plots IPCA1 against IPCA2, identifying 'mega-environments' and showing specific cultivar adaptations (genotypes close to environment vectors).
- Advantage: Far superior to linear regression when G x E is complex and non-linear, extracting signal from noise and guiding mega-environment cultivar deployment.""",
        "outlinePoints": [
            "Biological and statistical rationale for Multi-Environment Trials (MET)",
            "Finlay-Wilkinson linear regression model and environmental index",
            "Eberhart-Russell three-parameter model (mean, bi, S^2di) and test of predictability",
            "AMMI model combining additive ANOVA with multiplicative Principal Component Analysis",
            "AMMI1 and AMMI2 biplot interpretation for identifying stable cultivars and mega-environments"
        ]
    },
    {
        "id": "GPB203-U3-SUB13",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Medium",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods",
        "questionText": "Describe mating designs used to estimate genetic variance components in crop plants, with specific focus on Diallel Analysis (Griffing's approaches) and Line x Tester analysis.",
        "modelAnswer": """Mating designs are systematic hybridization schemes used by plant breeders to generate structured genetic families (full-sibs, half-sibs), evaluate parental combining ability, and partition genetic variance into additive (*Va*), dominance (*Vd*), and epistatic (*Vi*) components.

1. Diallel Analysis (Griffing, 1956):
A diallel cross involves mating a set of 'p' inbred parental lines in all possible combinations, generating up to `p^2` progenies.
J. Griffing (1956) formulated four standard experimental approaches:
- **Method 1 (Full Diallel):** Parents (p) + Direct F1 crosses [p(p - 1)/2] + Reciprocal F1 crosses [p(p - 1)/2] = `p^2` combinations. Measures GCA, SCA, and maternal/reciprocal effects.
- **Method 2:** Parents (p) + Direct F1 crosses [p(p - 1)/2] = `p(p + 1)/2` combinations (no reciprocals). Most common diallel method.
- **Method 3:** Direct F1 crosses [p(p - 1)/2] + Reciprocal F1 crosses [p(p - 1)/2] = `p(p - 1)` combinations (no parents).
- **Method 4:** Direct F1 crosses only = `p(p - 1)/2` combinations (no parents, no reciprocals).

Griffing's Partitioning:
- **General Combining Ability (GCA):** Reflects additive variance (*Va*).
- **Specific Combining Ability (SCA):** Reflects non-additive variance (*Vd + Vi*).
- **Reciprocal Effects:** Reflects maternal cytoplasmic effects.

2. Line x Tester (L x T) Analysis (Kempthorne, 1957):
- Rationale: Full diallels become unmanageable when testing large numbers of lines (e.g., p = 50 lines requires 1225 crosses). Line x Tester analysis provides a practical, high-throughput alternative.
- Experimental Design: A set of 'l' female lines is crossed with a set of 't' male testers, generating `l x t` full-sib hybrid families.
- Variance Partitioning:
  * Sum of squares for Lines estimates GCA variance of female lines.
  * Sum of squares for Testers estimates GCA variance of male testers.
  * Sum of squares for Line x Tester interaction estimates SCA variance.
- Estimation of Genetic Components:
  * Covariance of Half-Sibs (Lines) = `(1 + F)/4 * Va`
  * Covariance of Full-Sibs (Line x Tester) = `[(1 + F)/2]^2 * Vd`
  (where F is inbreeding coefficient, F = 1 for pure lines).

3. Selection of Breeding Procedures Based on Combining Ability:
- High GCA:SCA Ratio (>1.0): Additive variance predominates. The breeder should use pedigree selection, bulk breeding, or recurrent selection to develop pure-line varieties.
- Low GCA:SCA Ratio (<1.0): Non-additive dominance and epistasis predominate. The breeder should exploit heterosis by developing commercial F1 single-cross or three-way hybrids.""",
        "outlinePoints": [
            "Purpose of mating designs in biometrical genetic variance partitioning",
            "Griffing's four experimental methods of Diallel Analysis (p^2 vs p(p+1)/2)",
            "GCA and SCA interpretations in diallel crossing schemes",
            "Kempthorne's Line x Tester (L x T) design for screening extensive breeding lines",
            "Selection of breeding methods (pure line vs hybrid breeding) based on GCA:SCA ratio"
        ]
    },
    {
        "id": "GPB203-U3-SUB14",
        "questionType": "LONG_ANSWER",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods",
        "questionText": "Discuss how genetic variance components dictate the choice of breeding methods in self-pollinated versus cross-pollinated crops. Contrast Pedigree Selection, Recurrent Selection, and Hybrid Breeding in this context.",
        "modelAnswer": """The architecture of genetic variance—specifically the relative proportions of additive (*Va*), dominance (*Vd*), and epistatic (*Vi*) components—serves as the primary scientific determinant for selecting crop improvement methods.

1. Genetic Architecture and Breeding Objectives in Self-Pollinated Crops:
- Floral Biology: Naturally inbreeding (cleistogamous or chasmogamous selfing); homozygosity increases by 50% each generation (`1 - (1/2)^m`).
- Ultimate Target: Development of a uniform, homozygous pure-line cultivar (*AABBCC...*) that breeds true indefinitely.
- Variance Utilization:
  * Only **Additive Genetic Variance (Va)** and **Additive x Additive Epistasis (Vaa)** can be fixed in homozygous pure lines.
  * Dominance variance (*Vd*) and non-additive epistasis (*Vad, Vdd*) are completely lost as heterozygosity declines to zero upon selfing.
- Appropriate Breeding Method: **Pedigree Selection**
  * Protocol: Cross two homozygous lines -> advance F1 -> in F2, evaluate individual plants under high selection intensity -> advance F3-F5 families with pedigree tracking.
  * Genetic Mechanism: Fixes favorable additive alleles while natural inbreeding purges deleterious recessives. Effective for traits with high narrow-sense heritability (*h^2*).

2. Genetic Architecture and Breeding Objectives in Cross-Pollinated Crops:
- Floral Biology: Naturally outcrossing (dioecious, monoecious, protandry, self-incompatibility); populations exist as highly heterozygous, heterogeneous mixtures.
- Inbreeding Impact: Forced selfing causes severe inbreeding depression (exposure of lethal recessives) and loss of vigor.
- Variance Utilization:
  * **Additive Variance (Va):** Exploited to improve general population performance via **Recurrent Selection**.
  * **Dominance Variance (Vd) and Epistasis (Vi):** Exploited through **Hybrid Breeding** to maximize heterosis (hybrid vigor).

3. Comparison of Core Breeding Strategies:
A. Recurrent Selection (Population Improvement):
- Target Variance: Additive genetic variance (*Va*).
- Mechanism: Cycles of selection of superior individual plants or families (half-sib or full-sib), followed by intermating (recombination) of selected parents.
- Result: Gradually increases the frequency of favorable additive polygenic alleles without eroding genetic diversity, raising the base population yield.

B. Hybrid Breeding (Heterosis Exploitation):
- Target Variance: Non-additive genetic variance (*Vd* and *Vi*).
- Mechanism: Develop inbred lines by forced inbreeding (purging lethal recessives) -> test specific combining ability (SCA) -> cross complementary inbred lines (e.g., Line A x Line B) to produce F1 hybrids.
- Result: Reconstitutes maximal heterozygosity at loci displaying overdominance or dominant complementation, achieving spectacular yield gains in maize, pearl millet, and sunflower.""",
        "outlinePoints": [
            "Biological contrasts between self-pollinated (inbreeding) and cross-pollinated (outbreeding) crops",
            "Why only Va and Vaa are fixable in pure-line varieties of selfers",
            "Pedigree Selection: protocol, genetic mechanism, and fixation of additive alleles",
            "Recurrent Selection: population improvement driven by additive variance accumulation",
            "Hybrid Breeding: exploitation of dominance (Vd) and non-additive epistasis for heterosis"
        ]
    },
    {
        "id": "GPB203-U3-SUB15",
        "questionType": "COMPARISON",
        "maxMarks": 5,
        "difficulty": "Easy",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation",
        "questionText": "Compare Broad-Sense Heritability (H^2) with Narrow-Sense Heritability (h^2).",
        "modelAnswer": """Broad-Sense Heritability and Narrow-Sense Heritability are two distinct measures of genetic determination:

1. Mathematical Formula:
- Broad-Sense Heritability: `H^2 = Vg / Vp = (Va + Vd + Vi) / Vp`
- Narrow-Sense Heritability: `h^2 = Va / Vp = Va / (Va + Vd + Vi + Ve)`

2. Components of Genetic Variance Included:
- Broad-Sense: Includes total genetic variance: additive (*Va*), dominance (*Vd*), and all epistatic interactions (*Vi*).
- Narrow-Sense: Includes strictly additive genetic variance (*Va*), which reflects average allele substitution effects.

3. Biological Significance and Predictability:
- Broad-Sense: Measures the total extent to which individual phenotypes are determined by their genotypes. Does not predict response to sexual selection because dominance and non-additive epistasis are disrupted during meiosis.
- Narrow-Sense: Directly measures the breeding value of individuals. Accurately predicts response to directional selection via the Breeder's Equation (`R = h^2 * S`).

4. Crop Applications:
- Broad-Sense: Highly relevant in vegetatively/clonally propagated crops (potato, sugarcane, cassava, fruit cultivars) where entire intact genotypes are cloned.
- Narrow-Sense: Essential in sexually reproducing seed crops (wheat, rice, maize, soybean) to guide selection of parents and early-generation pedigree selection.""",
        "outlinePoints": [
            "Formulas comparing Vg/Vp vs Va/Vp",
            "Variance components: total genetic vs strictly additive",
            "Predictability of sexual transmission: disrupted vs reliably true-breeding",
            "Crop application: clonal crops (H^2) vs seed-propagated crops (h^2)"
        ]
    },
    {
        "id": "GPB203-U3-SUB16",
        "questionType": "COMPARISON",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods",
        "questionText": "Differentiate between Additive Genetic Variance (Va) and Dominance Genetic Variance (Vd).",
        "modelAnswer": """Additive Genetic Variance (*Va*) and Dominance Genetic Variance (*Vd*) represent the two primary partitions of total genetic variance:

1. Mode of Gene Action:
- Additive Variance (*Va*): Arises from the cumulative, independent additive effects of individual alleles across loci. Each allele substitution adds or subtracts a fixed quantity to the phenotype regardless of which other allele is present at that locus.
- Dominance Variance (*Vd*): Arises from intra-allelic interactions between alternative alleles at the same locus (heterozygous *Aa* interactions), where one allele masks or modifies the expression of the other.

2. Transmission to Offspring:
- Additive Variance: Alleles are transmitted individually through haploid gametes. The additive effects breed true from parents to offspring across sexual generations.
- Dominance Variance: Dominance requires a heterozygous diploid genotype (*Aa*). When gametes are formed during meiosis, the allelic pair separates; thus, dominance configurations cannot be transmitted intact to progeny.

3. Fixability in Pure Lines:
- Additive Variance: 100% fixable in homozygous pure lines (*AA* or *aa*) through inbreeding and selection.
- Dominance Variance: Non-fixable in homozygous pure lines; disappears as inbreeding approaches 100% homozygosity.

4. Breeding Utilization:
- Additive Variance: Exploited via pedigree selection, pure-line selection, and recurrent selection.
- Dominance Variance: Exploited via F1 hybrid breeding to capture heterosis (hybrid vigor).""",
        "outlinePoints": [
            "Gene action: independent allele substitution vs intra-allelic interaction",
            "Transmission: faithfully inherited through gametes vs disrupted by meiotic segregation",
            "Fixability: 100% fixable in pure lines vs non-fixable",
            "Breeding utility: pure-line selection vs F1 hybrid heterosis"
        ]
    },
    {
        "id": "GPB203-U3-SUB17",
        "questionType": "COMPARISON",
        "maxMarks": 5,
        "difficulty": "Medium",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity",
        "questionText": "Compare Crossover (Qualitative) G x E Interaction with Non-Crossover (Quantitative) G x E Interaction.",
        "modelAnswer": """In Multi-Environment Trials (MET), Genotype x Environment (G x E) interaction manifests in two distinct patterns that have profoundly different breeding consequences:

1. Nature of the Interaction:
- Non-Crossover G x E Interaction (Quantitative interaction): The magnitude of performance differences between genotypes changes across environments, but their relative rank order remains identical.
- Crossover G x E Interaction (Qualitative rank-change interaction): The relative ranking of genotypes reverses or changes across different environments.

2. Graphical Representation:
- Non-Crossover: When yield is plotted against environments, the response lines of different genotypes do not intersect; they remain parallel or diverge/converge without crossing.
- Crossover: The response lines of different genotypes cross each other directly on the interaction graph.

3. Practical Example:
- Non-Crossover: Cultivar A yields 40 q/ha in stress and 60 q/ha in optimal; Cultivar B yields 30 q/ha in stress and 45 q/ha in optimal. Cultivar A is superior to B in both environments!
- Crossover: Cultivar A yields 45 q/ha in stress and 50 q/ha in optimal; Cultivar B yields 25 q/ha in stress and 70 q/ha in optimal. Cultivar A wins under stress, but Cultivar B wins under optimal conditions!

4. Breeding and Variety Release Implications:
- Non-Crossover: Easy to manage. A single superior cultivar (Cultivar A) can be recommended and released broadly across all target regions.
- Crossover: Complicates breeding. Precludes releasing a single universal variety. Necessitates dividing the target region into distinct mega-environments and breeding specifically adapted cultivars for each zone.""",
        "outlinePoints": [
            "Rank change: preserved rank order (non-crossover) vs reversal of ranks (crossover)",
            "Graphical behavior: non-intersecting lines vs crossing response lines",
            "Agronomic yield scenario illustrating both types",
            "Breeding implications: broad mega-environment release vs specific adaptation breeding"
        ]
    },
    {
        "id": "GPB203-U3-SUB18",
        "questionType": "APPLICATION",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation",
        "questionText": "In a rice breeding trial for grain yield, variance estimates were obtained from parental, F1, and F2 populations grown under identical field conditions: Variance of Parent 1 (V_P1) = 8.5; Variance of Parent 2 (V_P2) = 9.5; Variance of F1 (V_F1) = 9.0; Variance of F2 (V_F2) = 36.0. (a) Calculate the environmental variance (Ve). (b) Calculate the broad-sense heritability (H^2) of grain yield in the F2 population. (c) If narrow-sense heritability (h^2) is determined to be 0.45, phenotypic standard deviation is 6.0 g/plant, and the top 5% of F2 plants are selected (selection intensity k = 2.06), calculate the expected Genetic Advance (GA). (d) If the mean yield of the F2 population is 30.0 g/plant, calculate the Genetic Advance as percent of mean (GAM) and interpret the result.",
        "modelAnswer": """Step-by-Step Biometrical Calculation:

(a) Calculation of Environmental Variance (Ve):
Since Parents (P1, P2) and F1 are genetically uniform (non-segregating) populations, all observable variance within them is environmental.
`Ve = (V_P1 + V_P2 + V_F1) / 3`
`Ve = (8.5 + 9.5 + 9.0) / 3 = 27.0 / 3 = 9.0`
Environmental Variance (Ve) = **9.0**.

(b) Calculation of Broad-Sense Heritability (H^2):
The F2 population variance represents total phenotypic variance:
`Vp = V_F2 = 36.0`
Genetic variance (*Vg*) is obtained by subtracting environmental variance:
`Vg = V_F2 - Ve = 36.0 - 9.0 = 27.0`
Broad-sense heritability is:
`H^2 = Vg / Vp = 27.0 / 36.0 = 0.75 (or 75.0%)`
Broad-sense Heritability (H^2) = **75.0%** (classified as high).

(c) Calculation of Genetic Advance (GA):
Given:
- Narrow-sense heritability `h^2 = 0.45`
- Phenotypic standard deviation `sigma_p = 6.0 g/plant`
- Selection intensity factor `k = 2.06` (for top 5% selection)

Using the Genetic Advance formula:
`GA = k * sigma_p * h^2`
`GA = 2.06 * 6.0 * 0.45`
`GA = 2.06 * 2.70 = 5.562 g/plant`
Expected Genetic Advance (GA) = **5.56 g/plant**.
The expected mean yield of the progeny of selected plants will be:
`Progeny Mean = Base Mean + GA = 30.0 + 5.56 = 35.56 g/plant`.

(d) Calculation of Genetic Advance as Percent of Mean (GAM):
Given: Population Mean `X_bar = 30.0 g/plant`.
`GAM = (GA / X_bar) * 100`
`GAM = (5.562 / 30.0) * 100 = 18.54%`
Genetic Advance as percent of mean (GAM) = **18.54%**.

Interpretation:
- Heritability (*h^2* = 45%) is classified as **Moderate**.
- Genetic Advance as percent of mean (GAM = 18.54%) is classified as **Moderate** (falling between 10% and 20% according to Johnson et al., 1955).
- Breeding Strategy: Because grain yield exhibits moderate heritability and moderate genetic gain, simple early-generation mass selection will have limited effectiveness. The breeder should employ **pedigree selection with progeny testing** in F3 and F4 generations, or use **family selection** across replicated plots to ensure reliable genetic progress.""",
        "outlinePoints": [
            "Calculation of Ve = 9.0 from non-segregating parental and F1 variances",
            "Calculation of Vg = 27.0 and Broad-sense heritability H^2 = 75.0%",
            "Calculation of absolute Genetic Advance GA = 5.56 g/plant using Breeder's formula",
            "Calculation of GAM = 18.54% (classified as moderate genetic gain)",
            "Agronomic interpretation recommending progeny testing and pedigree breeding"
        ]
    },
    {
        "id": "GPB203-U3-SUB19",
        "questionType": "APPLICATION",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods",
        "questionText": "A maize breeder conducts a 6 x 6 full diallel cross (Griffing's Method 2: parents + F1s) to evaluate grain yield. The analysis of variance reveals: Mean Square for General Combining Ability (MS_GCA) = 120.5 (highly significant); Mean Square for Specific Combining Ability (MS_SCA) = 30.2 (significant). The Baker ratio of combining ability is calculated. (a) Differentiate the genetic mechanisms underlying GCA and SCA. (b) Calculate the relative importance of additive vs non-additive variance. (c) Recommend the most appropriate breeding scheme for this germplasm. (d) How would the breeding recommendation change if MS_SCA was 180.0 and MS_GCA was 15.0?",
        "modelAnswer": """Biometrical Analysis of Maize Diallel Combining Ability:

(a) Genetic Mechanisms of GCA and SCA:
- General Combining Ability (GCA): Reflects **Additive Genetic Variance (Va)** and additive x additive epistatic interactions (*Vaa*). It represents the average breeding value of an inbred line across diverse crosses, driven by alleles that act independently and additively.
- Specific Combining Ability (SCA): Reflects **Non-Additive Genetic Variance**, primarily **Dominance Variance (Vd)** and dominance-related epistatic interactions (*Vad, Vdd*). It represents the deviation of specific hybrid combinations from parental averages, driven by intra-allelic interactions (heterozygote superiority) and inter-allelic complementation.

(b) Relative Importance of Additive vs Non-Additive Variance:
The relative proportion of additive vs non-additive genetic action is evaluated using the **Baker Ratio (1978)**:
`Baker Ratio = (2 * sigma^2_gca) / (2 * sigma^2_gca + sigma^2_sca)`
- Given that `MS_GCA = 120.5` is four-fold higher than `MS_SCA = 30.2`, the GCA variance component (*sigma^2_gca*) heavily outweighs the SCA variance component (*sigma^2_sca*).
- The Baker ratio will be close to 0.80–0.85 (>0.50).
Conclusion: **Additive gene action heavily predominates** over non-additive dominance action in governing grain yield in this population.

(c) Recommended Breeding Strategy for Case 1 (High GCA):
Because additive genetic variance predominates:
1. Performance of hybrids is directly predictable from the GCA of parental lines.
2. The breeder should use **Recurrent Selection for General Combining Ability** or **S1/S2 progeny recurrent selection** to continuously accumulate favorable additive polygenic alleles in the population.
3. The elite inbreds with highest GCA should be intermated to form a superior **Synthetic Variety** or **Composite Variety**, which can be open-pollinated and grown by farmers without needing to purchase expensive hybrid seed annually.

(d) Re-evaluation for Case 2 (MS_SCA = 180.0, MS_GCA = 15.0):
If MS_SCA is twelve-fold higher than MS_GCA:
- The Baker ratio collapses to ~0.10–0.15 (<0.50).
- **Non-additive gene action (dominance and epistasis) overwhelmingly predominates**.
Consequences and Strategy Reversal:
1. Parental GCA is useless for predicting hybrid yield; inbreds with poor individual performance may produce spectacular specific hybrids.
2. The breeder CANNOT use recurrent selection or synthetic varieties, because dominance and epistatic combinations will disintegrate upon random mating.
3. The breeder must adopt **Heterosis Hybrid Breeding**:
   - Classify inbred lines into complementary heterotic groups (e.g., Stiff Stalk vs Non-Stiff Stalk).
   - Use **Reciprocal Recurrent Selection (RRS)** to simultaneously improve cross performance between the two heterotic pools.
   - Screen specific single-crosses (*A x B*) to identify high-SCA hybrids for commercial commercialization as F1 single-cross hybrids.""",
        "outlinePoints": [
            "Genetic basis: GCA driven by Additive Va vs SCA driven by Dominance Vd",
            "Application of the Baker ratio showing additive variance predominance in Case 1",
            "Breeding recommendation for Case 1: recurrent selection and synthetic/composite varieties",
            "Analysis of Case 2 (SCA dominance) and explanation of Baker ratio collapse",
            "Breeding recommendation for Case 2: heterotic grouping, reciprocal recurrent selection, and F1 single-cross hybrids"
        ]
    },
    {
        "id": "GPB203-U3-SUB20",
        "questionType": "CASE_STUDY",
        "maxMarks": 10,
        "difficulty": "Hard",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity",
        "contextScenario": "An international wheat breeding institute evaluates four elite bread wheat cultivars (Variety Alpha, Variety Beta, Variety Gamma, and Variety Delta) across 15 diverse agro-climatic testing environments ranging from optimal irrigated plains (yield potential 65 q/ha) to severe drought-stressed rainfed plateaus (yield potential 20 q/ha). Biometrical stability analysis using the Eberhart and Russell model yields the following parameters: Grand Mean Yield = 42.0 q/ha. Variety Alpha: Mean = 52.0 q/ha, bi = 1.45, S^2di = 0.8 (non-sig). Variety Beta: Mean = 45.0 q/ha, bi = 0.98, S^2di = 0.5 (non-sig). Variety Gamma: Mean = 41.0 q/ha, bi = 0.55, S^2di = 0.6 (non-sig). Variety Delta: Mean = 48.0 q/ha, bi = 1.05, S^2di = 12.4 (highly significant, p < 0.01).",
        "questionText": "Analyze the multi-environment trial data in the case study above. (a) Evaluate the stability and adaptation pattern of each variety according to Eberhart and Russell criteria. (b) Identify which variety should be released for national cultivation across all environments. (c) Identify which variety is ideal for high-input, precision-irrigated commercial farmers. (d) Identify which variety is best suited for marginal, drought-prone subsistence farmers. (e) Explain why Variety Delta, despite having high yield, cannot be recommended for release.",
        "modelAnswer": """Case Study Analysis — Multi-Environment Wheat Stability (Eberhart & Russell Model):

(a) Evaluation of Individual Cultivars:
According to Eberhart and Russell (1966), an ideal cultivar must possess: (1) High mean yield (*Xi > Grand Mean*), (2) Average environmental responsiveness (*bi = 1.0*), and (3) Non-significant deviation from regression (*S^2di = 0*).

1. Variety Alpha (*Mean = 52.0 q/ha, bi = 1.45, S^2di = 0.8 non-sig*):
- Mean yield is exceptionally high (52.0 vs 42.0 q/ha grand mean).
- Regression coefficient *bi = 1.45* is significantly greater than 1.0.
- Deviation *S^2di = 0.8* is non-significant, confirming high predictability.
- Classification: **Below-average stability with high responsiveness**. It responds vigorously to favorable, high-input conditions but yields poorly under stress.

2. Variety Beta (*Mean = 45.0 q/ha, bi = 0.98, S^2di = 0.5 non-sig*):
- Mean yield (45.0 q/ha) is well above the trial mean (42.0 q/ha).
- Regression coefficient *bi = 0.98* is statistically indistinguishable from 1.0.
- Deviation *S^2di = 0.5* is non-significant, confirming near-perfect linear predictability.
- Classification: **Ideal general stability**. Performs reliably across all environments in direct proportion to site potential.

3. Variety Gamma (*Mean = 41.0 q/ha, bi = 0.55, S^2di = 0.6 non-sig*):
- Mean yield (41.0 q/ha) is near the trial mean.
- Regression coefficient *bi = 0.55* is significantly less than 1.0.
- Deviation *S^2di = 0.6* is non-significant, confirming predictability.
- Classification: **Above-average stability with low environmental sensitivity**. It resists environmental degradation, performing exceptionally well in poor, stress-prone environments.

4. Variety Delta (*Mean = 48.0 q/ha, bi = 1.05, S^2di = 12.4 highly sig*):
- Mean yield is high (48.0 q/ha) and *bi = 1.05* is close to 1.0.
- However, deviation *S^2di = 12.4* is highly significant (p < 0.01).
- Classification: **Unstable and unpredictable**. Its response across environments is non-linear and erratic.

(b) National Release Recommendation (All Environments):
**Variety Beta** must be recommended for national release across all agro-climatic zones. It combines superior mean yield (45 q/ha), unit regression slope (*bi = 0.98*), and zero deviation (*S^2di = 0.5*), guaranteeing consistent, predictable performance nationwide.

(c) Recommendation for High-Input Commercial Farming:
**Variety Alpha** is the ideal candidate for high-input, precision-irrigated commercial farm belts (e.g., Punjab, Haryana). Its high slope (*bi = 1.45*) allows it to convert optimal fertilizer and irrigation inputs into maximum yields (reaching 65+ q/ha in top environments).

(d) Recommendation for Marginal Drought-Prone Subsistence Belts:
**Variety Gamma** is recommended for drought-prone, rainfed marginal plateaus. With *bi = 0.55*, it suffers minimal yield reduction under severe moisture stress, providing subsistence farmers with guaranteed yield stability.

(e) Reason for Rejection of Variety Delta:
Despite its attractive mean yield (48.0 q/ha), **Variety Delta must be strictly rejected for release**. Its highly significant deviation from regression (*S^2di = 12.4*) indicates severe non-linear instability. In real farming conditions, Variety Delta could catastrophically fail in certain seasons due to uncharacterized environmental sensitivities (e.g., sudden heat shocks or minor disease fluctuations), posing an unacceptable economic risk to farmers.""",
        "outlinePoints": [
            "Rigorous parameter evaluation of all four cultivars using Eberhart-Russell criteria",
            "Identification of Variety Beta as the ideal stable cultivar for universal national release",
            "Identification of Variety Alpha (bi = 1.45) for high-input favorable production zones",
            "Identification of Variety Gamma (bi = 0.55) for marginal drought-prone subsistence belts",
            "Explanation of why Variety Delta is disqualified due to significant S^2di instability"
        ]
    }
]

# ----------------- 20 Flashcards -----------------
unit3["flashcards"] = [
    {
        "id": "GPB203-U3-FC01",
        "front": "What is a Quantitative Trait?",
        "back": "A continuous, measurable trait controlled by multiple polygenes, each exerting a small additive effect, heavily influenced by the environment (e.g., grain yield).",
        "hint": "Follows a bell-shaped normal distribution curve.",
        "syllabusTopic": "Qualitative versus quantitative traits and continuous variation"
    },
    {
        "id": "GPB203-U3-FC02",
        "front": "What is a Qualitative Trait?",
        "back": "A discontinuous trait controlled by one or two major genes (oligogenes) with distinct non-overlapping classes and negligible environmental influence.",
        "hint": "Example: Tall vs dwarf, red vs white flower.",
        "syllabusTopic": "Qualitative versus quantitative traits and continuous variation"
    },
    {
        "id": "GPB203-U3-FC03",
        "front": "What is the Multiple Factor Hypothesis?",
        "back": "H. Nilsson-Ehle's (1909) proof that continuous quantitative variation is caused by multiple Mendelian genes segregating additively.",
        "hint": "Demonstrated using Swedish winter wheat kernel color.",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance"
    },
    {
        "id": "GPB203-U3-FC04",
        "front": "What F2 phenotypic ratio was obtained by Nilsson-Ehle in his two-gene wheat cross?",
        "back": "1:4:6:4:1 (1 Dark Red : 4 Medium-Dark : 6 Medium : 4 Light : 1 White).",
        "hint": "Corresponds to the binomial expansion (a + b)^4.",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance"
    },
    {
        "id": "GPB203-U3-FC05",
        "front": "What is the formula for the number of phenotypic classes in F2 for 'n' polygenic loci?",
        "back": "Number of classes = 2n + 1 (e.g., 2 loci = 5 classes; 3 loci = 7 classes).",
        "hint": "Formula based on contributing allele dosages.",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance"
    },
    {
        "id": "GPB203-U3-FC06",
        "front": "What is the frequency of recovering extreme parental phenotypes in F2 for 'n' polygenic loci?",
        "back": "Frequency = (1/4)^n = 1 / (4^n).",
        "hint": "For 3 loci, 1/64; for 5 loci, 1/1024.",
        "syllabusTopic": "Multiple factor hypothesis (Nilsson-Ehle kernel color experiment) and polygenic inheritance"
    },
    {
        "id": "GPB203-U3-FC07",
        "front": "What is Phenotypic Plasticity?",
        "back": "The ability of a single genotype to produce different phenotypes in response to distinct environmental conditions.",
        "hint": "Environmental modulation of phenotypic expression.",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity"
    },
    {
        "id": "GPB203-U3-FC08",
        "front": "In the Eberhart-Russell stability model, what does bi = 1.0 indicate?",
        "back": "Average stability; the cultivar responds in direct linear proportion to environmental changes and is adapted to all environments.",
        "hint": "Unit regression slope.",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity"
    },
    {
        "id": "GPB203-U3-FC09",
        "front": "In the Eberhart-Russell stability model, what does bi > 1.0 indicate?",
        "back": "Below-average stability; the cultivar is highly sensitive and responsive, excelling in favorable high-input environments.",
        "hint": "High responsiveness for commercial farming.",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity"
    },
    {
        "id": "GPB203-U3-FC10",
        "front": "In the Eberhart-Russell model, what must S^2di equal for a cultivar to be stable?",
        "back": "S^2di must equal zero (statistically non-significant), confirming predictable linear performance.",
        "hint": "Deviation from regression must be zero.",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity"
    },
    {
        "id": "GPB203-U3-FC11",
        "front": "What is Broad-Sense Heritability (H^2)?",
        "back": "H^2 = Vg / Vp (total genetic variance divided by total phenotypic variance).",
        "hint": "Used primarily in clonally propagated crops.",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation"
    },
    {
        "id": "GPB203-U3-FC12",
        "front": "What is Narrow-Sense Heritability (h^2)?",
        "back": "h^2 = Va / Vp (additive genetic variance divided by total phenotypic variance).",
        "hint": "Dictates response to selection in sexually reproducing seed crops.",
        "syllabusTopic": "Heritability: Broad-sense and narrow-sense heritability estimation"
    },
    {
        "id": "GPB203-U3-FC13",
        "front": "What is the Breeder's Equation?",
        "back": "R = h^2 * S (Response to selection equals narrow-sense heritability multiplied by selection differential).",
        "hint": "Lush's fundamental selection formula.",
        "syllabusTopic": "Genetic advance and response to selection in crop populations"
    },
    {
        "id": "GPB203-U3-FC14",
        "front": "What is the formula for Genetic Advance (GA)?",
        "back": "GA = k * sigma_p * h^2 (Selection intensity x phenotypic standard deviation x narrow-sense heritability).",
        "hint": "Expected gain over base population mean.",
        "syllabusTopic": "Genetic advance and response to selection in crop populations"
    },
    {
        "id": "GPB203-U3-FC15",
        "front": "Why is high heritability alone insufficient to predict selection success?",
        "back": "High heritability may be driven by non-additive dominance/epistasis that disintegrates upon sexual reproduction; high GA confirms additive action.",
        "hint": "Johnson et al. (1955) rule.",
        "syllabusTopic": "Genetic advance and response to selection in crop populations"
    },
    {
        "id": "GPB203-U3-FC16",
        "front": "What is Additive Genetic Variance (Va)?",
        "back": "Variance due to independent, cumulative allele effects that breed true and are 100% fixable in homozygous pure lines.",
        "hint": "Reflects true breeding value.",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods"
    },
    {
        "id": "GPB203-U3-FC17",
        "front": "What is Dominance Genetic Variance (Vd)?",
        "back": "Variance resulting from intra-allelic interactions (heterozygous Aa effects), non-fixable in pure lines and exploited in F1 hybrids.",
        "hint": "Disrupted during meiotic segregation.",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods"
    },
    {
        "id": "GPB203-U3-FC18",
        "front": "What is General Combining Ability (GCA)?",
        "back": "The average performance of an inbred line in hybrid combinations across diverse testers, primarily driven by additive variance (Va).",
        "hint": "Sprague and Tatum (1942).",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods"
    },
    {
        "id": "GPB203-U3-FC19",
        "front": "What is Specific Combining Ability (SCA)?",
        "back": "The performance of specific hybrid combinations that deviate from parental GCA expectations, driven by non-additive dominance (Vd) and epistasis.",
        "hint": "Measures hybrid vigor (heterosis).",
        "syllabusTopic": "Genetic variance components (additive, dominance, epistatic) and selection methods"
    },
    {
        "id": "GPB203-U3-FC20",
        "front": "What is AMMI Analysis in multi-environment crop trials?",
        "back": "Additive Main Effects and Multiplicative Interaction: combines ANOVA for main effects (G and E) with PCA for G x E interaction.",
        "hint": "Generates AMMI biplots for mega-environments.",
        "syllabusTopic": "Genotype-environment interaction and phenotypic plasticity"
    }
]

out_path = os.path.abspath("server/data/gpb203/unit3.ts")
with open(out_path, "w", encoding="utf-8") as f:
    f.write('import { UnitContent } from "./types";\n\n')
    f.write('export const unit3Content: UnitContent = ')
    f.write(json.dumps(unit3, indent=2))
    f.write(';\n')

print(f"Generated GPB203 Unit 3 successfully: {len(unit3['mcqs'])} MCQs, {len(unit3['subjectiveQuestions'])} Subj, {len(unit3['flashcards'])} Flashcards")
