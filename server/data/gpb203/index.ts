import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const gpb203Metadata: SubjectMetadata = {
  code: "GPB203",
  name: "Principles of Genetics",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 4,
  ltp: "L: 3 | T: 0 | P: 2",
  courseCategory: "Core",
  syllabusPdfUrl: "/GPB203_Syllabus.pdf",
  overview: "Principles of Genetics provides agricultural undergraduates with a comprehensive foundation in the physical and chemical basis of heredity. The course encompasses classical Mendelian inheritance, chromosome architecture and mechanics during cell division, sex determination, sex linkage, linkage mapping, polygenic quantitative genetics, spontaneous and induced mutagenesis, structural and numerical chromosomal aberrations, cytoplasmic heredity, and central dogma molecular genetics, establishing the scientific bedrock for advanced plant breeding and crop improvement.",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Mendelian Principles and Gene Interactions",
      description: "Understand and apply Mendel's laws of segregation and independent assortment, mono/di/trihybrid crosses, test and back crosses, gene interactions (epistasis), and multiple allelism."
    },
    {
      code: "CO2",
      title: "Chromosome Theory, Sex Linkage and Genetic Mapping",
      description: "Analyze the chromosome theory of heredity, diverse sex-determining mechanisms, sex-linked transmission patterns, meiotic crossing over, and construct chromosome linkage maps using three-point test cross data."
    },
    {
      code: "CO3",
      title: "Biometrical and Quantitative Genetics",
      description: "Differentiate qualitative and quantitative traits, apply Nilsson-Ehle's multiple factor hypothesis, analyze genotype x environment interactions, and partition phenotypic variance to compute heritability and genetic advance."
    },
    {
      code: "CO4",
      title: "Mutations and Chromosomal Aberrations",
      description: "Evaluate the molecular mechanisms of physical and chemical mutagens, identify structural chromosomal rearrangements (loops and multivalent configurations), and apply aneuploidy and polyploidy in crop breeding."
    },
    {
      code: "CO5",
      title: "Extrachromosomal Inheritance and Molecular Genetics",
      description: "Distinguish organellar heredity from maternal effects, apply Cytoplasmic-Genetic Male Sterility (CGMS) in hybrid seed production, evaluate landmark DNA proof experiments, and explain replication, transcription, and translation."
    }
  ],
  gradingStructure: [
    {
      component: "Continuous Assessment (CA)",
      weightage: "20%",
      marks: "30 Marks (Best 2 of 3)",
      details: "Two best descriptive continuous assessments of 30 marks each, scaled to 20% weightage, covering ongoing unit content and practical exercises."
    },
    {
      component: "Mid-Term Examination (MTE)",
      weightage: "20%",
      marks: "40 Marks",
      details: "Mid-term university examination covering Units 1, 2, and 3, comprising objective and short/medium descriptive questions."
    },
    {
      component: "End-Term Examination (ETE)",
      weightage: "40%",
      marks: "70 Marks",
      details: "Comprehensive university examination covering all five theory units (Units 1 to 5) testing knowledge, analysis, and practical scenarios."
    },
    {
      component: "Practical Examination & Lab Viva",
      weightage: "20%",
      marks: "50 Marks",
      details: "Evaluation of practical lab record, viva-voce, cytological slide preparations (mitosis/meiosis), Chi-square goodness-of-fit exercises, and chromosome mapping problems."
    }
  ],
  textbooks: [
    {
      title: "Principles of Genetics",
      author: "E. J. Gardner, M. J. Simmons, and D. P. Snustad",
      note: "Standard international reference for Mendelian inheritance, cytogenetics, and molecular biology."
    },
    {
      title: "Genetics: A Conceptual Approach",
      author: "Benjamin A. Pierce",
      note: "Prescribed textbook for linkage mapping, quantitative genetics, and chromosomal aberrations."
    },
    {
      title: "Elements of Genetics",
      author: "Phundan Singh",
      note: "Comprehensive Indian text focused on agricultural applications, polyploidy breeding, and CMS systems."
    },
    {
      title: "Introduction to Quantitative Genetics",
      author: "D. S. Falconer and Trudy F. C. Mackay",
      note: "Authoritative reference for variance partitioning, heritability, and selection response in plant populations."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Study of Microscope and Preparation of Microscopic Slides for Mitosis in Onion Root Tips",
      objectives: [
        "Master the operation of compound brightfield research microscopes.",
        "Prepare squash mounts of Allium cepa root tips to identify mitotic stages (Prophase, Metaphase, Anaphase, Telophase)."
      ],
      materialsRequired: ["Compound microscope", "Onion root tips pretreated with 8-hydroxyquinoline", "1N HCl", "Acetocarmine / Aceto-orcein stain", "Spirit lamp", "Slide and coverslip"],
      procedureSteps: [
        "Excise 2-3 mm actively growing root tips from germinating onion bulbs.",
        "Fix in Carnoy's fluid (3:1 ethanol : glacial acetic acid) for 24 hours.",
        "Hydrolyze in 1N HCl at 60°C for 5-7 minutes to soften the pectate middle lamella.",
        "Stain with 1% acetocarmine on a clean glass slide and gently warm over a spirit lamp flame without boiling.",
        "Place a coverslip, apply uniform thumb pressure between blotting paper folds to squash cells into a single monolayer, and observe under 10x and 40x magnification."
      ],
      observationsAndRecording: [
        "Sketch and label distinct stages of mitosis: condensed prophase chromosomes, metaphase equatorial plate alignment, anaphase V/J-shaped chromosome separation, and telophase nuclear envelope reformation.",
        "Calculate the Mitotic Index: `(Number of dividing cells / Total number of cells observed) * 100`."
      ],
      reflectionQuestions: [
        "Why is 8-hydroxyquinoline or colchicine pretreatment necessary to observe clear metaphase plates?",
        "What happens if root tips are over-hydrolyzed in hot 1N HCl?"
      ],
      submissionGuidance: "Submit labelled camera lucida / photomicrographic drawings of all four mitotic stages along with calculated mitotic indices."
    },
    {
      id: 2,
      title: "Cytological Analysis of Meiosis in Developing Anthers of Maize / Onion",
      objectives: [
        "Identify and characterize substages of Prophase I (Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis) and meiotic divisions.",
        "Observe chiasmata, bivalent pairing, and Anaphase I disjunction."
      ],
      materialsRequired: ["Immature flower buds of Allium cepa or young tassels of Zea mays", "Carnoy's fixative II", "2% acetocarmine stain", "Dissecting needles", "Slide warmer"],
      procedureSteps: [
        "Fix immature flower buds harvested at 8:00–10:00 AM in Carnoy's fluid II (6 ethanol : 3 chloroform : 1 acetic acid) for 24 hours.",
        "Dissect out developing yellow/translucent anthers under a stereomicroscope.",
        "Place anthers in a drop of 2% acetocarmine, crush with a brass rod to release pollen mother cells (PMCs), and discard debris.",
        "Heat gently, apply coverslip, squash firmly, and examine under oil immersion (100x)."
      ],
      observationsAndRecording: [
        "Record cytological hallmarks: pachytene thick paired strands, diplotene chiasmata terminalization, diakinesis ring bivalents, and Anaphase I reductional separation.",
        "Check for meiotic irregularities such as laggards, univalents, or dicentric bridges."
      ],
      reflectionQuestions: [
        "Why are developing anthers harvested early in the morning for meiotic studies?",
        "How does chromosome behavior at Anaphase I differ fundamentally from mitotic anaphase?"
      ],
      submissionGuidance: "Submit a complete illustrated portfolio detailing the 5 substages of meiotic Prophase I with descriptions of chromosome morphology."
    },
    {
      id: 3,
      title: "Chi-Square (χ2) Goodness-of-Fit Test in Monohybrid and Dihybrid Segregations",
      objectives: [
        "Apply the Chi-square statistical test to evaluate whether observed genetic segregations conform to expected Mendelian ratios.",
        "Calculate degrees of freedom, determine probability values from Chi-square distribution tables, and accept or reject the null hypothesis."
      ],
      materialsRequired: ["Monohybrid and dihybrid F2 ear corn cobs / seed packets", "Data recording sheets", "Scientific calculator", "Chi-square distribution table"],
      procedureSteps: [
        "Count and tabulate total observed seed counts (O) for each phenotypic class on an F2 maize ear cob (e.g., Purple Starchy, Purple Waxy, Yellow Starchy, Yellow Waxy).",
        "Formulate the null hypothesis (H0): 'The observed segregations conform to the expected Mendelian 9:3:3:1 ratio'.",
        "Calculate expected frequencies (E) for each class: `E = (Ratio Fraction) * Total Observed Count`.",
        "Compute the Chi-square statistic: `χ2 = Sum[(O - E)^2 / E]`.",
        "Determine degrees of freedom: `df = Number of phenotypic classes - 1`.",
        "Compare calculated χ2 against the critical table value at p = 0.05. If calculated χ2 < critical table value, accept H0."
      ],
      observationsAndRecording: [
        "Construct complete Chi-square calculation table with columns: Class, O, E, (O - E), (O - E)^2, and (O - E)^2 / E.",
        "Record calculated χ2, degrees of freedom, and corresponding p-value range."
      ],
      reflectionQuestions: [
        "What does a probability value of p < 0.01 imply regarding the null hypothesis?",
        "Why is Yates' correction for continuity applied when df = 1 in 2x2 contingency tables?"
      ],
      submissionGuidance: "Submit completed statistical analysis worksheets for one monohybrid (3:1) and one dihybrid (9:3:3:1) experimental dataset."
    },
    {
      id: 4,
      title: "Construction of Chromosome Linkage Maps from Three-Point Testcross Data",
      objectives: [
        "Determine linear gene sequence and calculate map distances from three-point test cross progeny counts.",
        "Calculate coefficient of coincidence and chromosome interference."
      ],
      materialsRequired: ["Three-point test cross problem datasets", "Graph paper", "Calculator", "Pedigree worksheets"],
      procedureSteps: [
        "Tabulate test-cross progeny phenotypes and classify into Parental (highest frequency), Single Crossover Region I, Single Crossover Region II, and Double Crossover (lowest frequency) classes.",
        "Determine gene order by comparing Parental alleles with Double Crossover alleles; identify the single flipped middle marker.",
        "Calculate map distance for Interval 1: `[(Total SCO I + DCO) / Total Progeny] * 100` cM.",
        "Calculate map distance for Interval 2: `[(Total SCO II + DCO) / Total Progeny] * 100` cM.",
        "Draw the calibrated genetic linkage map with loci positions and centiMorgan distances.",
        "Calculate expected DCO frequency, Coefficient of Coincidence (C), and Interference (I = 1 - C)."
      ],
      observationsAndRecording: [
        "Record mathematical calculations for gene order deduction.",
        "State final map distances and degree of positive/negative interference."
      ],
      reflectionQuestions: [
        "Why do double crossovers fail to be detected in a two-point test cross?",
        "What does an interference value of I = 1.0 signify physically?"
      ],
      submissionGuidance: "Submit solved genetic linkage mapping problems with complete step-by-step mathematical working and scale-drawn chromosome maps."
    },
    {
      id: 5,
      title: "Induction of Polyploidy in Crop Seedlings Using Colchicine",
      objectives: [
        "Master methods of colchicine application (cotton plug, drop method, seed soaking) to induce autotetraploidy.",
        "Evaluate putative polyploids using morphological (gigas characters) and stomatal chloroplast count techniques."
      ],
      materialsRequired: ["Vigna radiata / Trigonella foenum-graecum germinating seedlings", "0.1% and 0.2% aqueous colchicine solutions", "Absorbent cotton", "Micropipette", "Epidermal peeling kit and nail polish"],
      procedureSteps: [
        "Grow seedlings in petri dishes until shoot apical meristems emerge.",
        "Apply a tiny cotton swab saturated with 0.1% or 0.2% colchicine solution onto the growing shoot apex for 6, 12, or 24 hours, keeping it moist in the dark.",
        "Rinse treated seedlings thoroughly with distilled water and transplant into pots.",
        "Observe emerging foliage for gigas traits: dark green coloration, thicker leaves, and retarded initial growth.",
        "Make lower epidermal impressions using clear nail polish, peel with forceps, mount in water, and examine under 40x to measure stomatal size and count guard cell chloroplast numbers."
      ],
      observationsAndRecording: [
        "Measure and compare stomatal length (microns) and stomatal frequency per square millimeter between treated and control plants.",
        "Count the average number of chloroplasts per guard cell pair (typically doubled from ~10 in diploids to ~20 in tetraploids)."
      ],
      reflectionQuestions: [
        "Why is guard cell chloroplast count considered a reliable indirect screen for ploidy level?",
        "What safety precautions must be strictly observed when handling colchicine in the laboratory?"
      ],
      submissionGuidance: "Submit a comparative report on diploid vs putative tetraploid plants featuring stomatal measurements and micrometric data."
    },
    {
      id: 6,
      title: "Identification of Aneuploids and Structural Chromosomal Aberrations from Karyotype Charts",
      objectives: [
        "Analyze photographic karyotypes and idiograms of crop plants and human clinical syndromes.",
        "Identify monosomy, trisomy, deletion loops, inversion loops, and translocation multivalents."
      ],
      materialsRequired: ["Karyotype photographic prints of wheat monosomics, Datura trisomics, Down syndrome, and Turner syndrome", "Micrometer ruler", "Cytogenetic atlas"],
      procedureSteps: [
        "Count total somatic chromosome numbers from metaphase photographic plates.",
        "Pair homologous chromosomes according to size, centromeric index (arm ratio), and G-banding patterns.",
        "Identify numerical aberrations: missing chromosome (2n-1 monosomic) or extra chromosome (2n+1 trisomic).",
        "Examine pachytene squash diagrams to identify diagnostic structural figures: loop with no centromere (paracentric inversion) vs cross figure (translocation)."
      ],
      observationsAndRecording: [
        "Record standardized cytogenetic nomenclature (e.g., 2n = 41 in wheat; 47,XX,+21 in humans).",
        "Diagram pachytene pairing configurations for translocation quadrivalents."
      ],
      reflectionQuestions: [
        "How does a G-banding pattern assist in identifying reciprocal translocations?",
        "Why are monosomics viable in hexaploid wheat but lethal in diploid barley?"
      ],
      submissionGuidance: "Submit constructed karyogram worksheets and identified cytogenetic diagnosis reports for three unknown chromosome plates."
    }
  ]
};

export const gpb203Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const gpb203CompleteSubject = {
  metadata: gpb203Metadata,
  units: gpb203Units
};

export default gpb203CompleteSubject;
