import { UnitContent } from "./types";

export const unit4Content: UnitContent = {
  "unitNumber": 4,
  "title": "Mutations and Chromosome Aberrations",
  "shortDescription": "Spontaneous versus induced mutations, molecular mechanisms of physical and chemical mutagens, structural chromosomal aberrations (deletions, duplications, inversions, translocations), numerical chromosome variations (aneuploidy and euploidy), and polyploidy breeding in crop improvement.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
    "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
    "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
    "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
    "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications"
  ],
  "notes": {
    "learningObjectives": [
      "Differentiate between spontaneous and induced mutations, classifying molecular gene mutations into transitions, transversions, missense, nonsense, and frameshift alterations.",
      "Explain the biochemical mechanisms of physical mutagens (X-rays, gamma rays, UV-induced thymine dimers) and chemical mutagens (EMS, 5-bromouracil, acridine orange).",
      "Identify cytological pairing configurations of structural aberrations: deletion loops, tandem duplications, inversion loops, and translocation cross configurations (multivalents).",
      "Analyze aneuploid chromosome complements (2n-1 monosomics, 2n+1 trisomics, 2n-2 nullisomics) and their use in locating genes to specific chromosomes (Sears' monosomic analysis).",
      "Evaluate polyploidy breeding strategies: induction of autopolyploids (triploid seedless watermelon) using colchicine, and allopolyploid synthesis of man-made cereals (Triticale) and amphidiploids (U's Triangle in Brassica)."
    ],
    "sections": [
      {
        "id": "sec-gpb-4-1",
        "heading": "1. Nature, Classification, and Molecular Basis of Gene Mutations",
        "content": "Hugo de Vries (1901) coined the term 'mutation' based on sudden heritable phenotypic changes observed in evening primrose (*Oenothera lamarckiana*). At the molecular level, a gene mutation is an alteration in the nucleotide sequence of DNA.",
        "subsections": [
          {
            "subheading": "Molecular Types of Point Mutations",
            "content": "Point mutations involve changes in a single nucleotide base pair:\n1. **Base Substitutions:**\n   - **Transition:** Replacement of a purine with another purine (A <-> G) or a pyrimidine with another pyrimidine (C <-> T). Four types possible.\n   - **Transversion:** Replacement of a purine with a pyrimidine or vice versa (A <-> C, A <-> T, G <-> C, G <-> T). Eight types possible.\n2. **Consequences on Protein Translation:**\n   - **Synonymous (Silent) Mutation:** Nucleotide substitution alters a codon without changing the encoded amino acid (e.g., GAG to GAA, both encoding glutamate).\n   - **Missense Mutation:** Nucleotide substitution changes a codon to specify a different amino acid (e.g., sickle-cell anemia, CTC to CAC causing Glu6Val).\n   - **Nonsense Mutation:** Codon is altered to one of the three stop codons (UAA, UAG, UGA), terminating translation prematurely.\n3. **Frameshift Mutations:** Insertion or deletion of base pairs not divisible by three, completely altering the translational reading frame downstream."
          }
        ]
      },
      {
        "id": "sec-gpb-4-2",
        "heading": "2. Physical and Chemical Mutagens",
        "content": "H. J. Muller (1927) first induced mutations artificially using X-rays in *Drosophila* (C1B technique), and L. J. Stadler (1928) demonstrated induced mutations in barley and maize.",
        "subsections": [
          {
            "subheading": "Classification and Mechanisms of Mutagens",
            "content": "Physical and chemical agents that increase mutation frequency above baseline:",
            "table": {
              "headers": [
                "Mutagen Class",
                "Specific Agent",
                "Molecular Mode of Action",
                "Mutation Type Induced"
              ],
              "rows": [
                [
                  "Ionizing Radiation",
                  "X-rays, Gamma rays (Co-60), Fast neutrons",
                  "Generates free radicals (reactive oxygen species) causing double-strand DNA breaks and chromosome deletions.",
                  "Large deletions, gross chromosome breaks"
                ],
                [
                  "Non-Ionizing Radiation",
                  "Ultraviolet (UV) light (254-260 nm)",
                  "Excites pyrimidine rings, forming cyclobutane pyrimidine dimers (thymine-thymine dimers) that distort the helix.",
                  "Blocks replication; transition mutations via error-prone SOS repair"
                ],
                [
                  "Alkylating Agents",
                  "Ethyl methanesulfonate (EMS), Methyl methanesulfonate (MMS)",
                  "Adds ethyl/methyl groups to guanine (forms O6-ethylguanine), which mispairs with thymine instead of cytosine.",
                  "High-frequency GC -> AT transition mutations"
                ],
                [
                  "Base Analogs",
                  "5-Bromouracil (5-BU), 2-Aminopurine (2-AP)",
                  "5-BU is a thymine analog whose rare enol tautomer pairs with guanine instead of adenine.",
                  "AT <-> GC bidirectional transitions"
                ],
                [
                  "Acridine Dyes",
                  "Acridine orange, Proflavin, Ethidium bromide",
                  "Intercalates between stacked base pairs, stretching the helix and causing DNA polymerase slippage.",
                  "Frameshift insertions and deletions (+1 or -1 bp)"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-gpb-4-3",
        "heading": "3. Structural Chromosomal Aberrations",
        "content": "Structural changes involve alteration in the physical architecture or linear arrangement of gene loci along chromosomes, detectable through characteristic meiotic pairing configurations.",
        "subsections": [
          {
            "subheading": "Four Major Structural Aberrations",
            "content": "1. **Deletions (Deficiencies):** Loss of an intercalary or terminal chromosomal segment. In pachytene pairing with a normal homolog, the normal chromosome buckles out into a visible **Deficiency Loop** (or Deletion Loop). Enables pseudodominance (expression of recessive alleles unmasked by deleted dominant partner).\n\n2. **Duplications:** Presence of an extra chromosomal segment, resulting in repeated gene sequences. Classified into tandem, reverse tandem, and displaced duplications. Classic example: *Bar* eye duplication in *Drosophila* (Sturtevant and Bridges).\n\n3. **Inversions:** A chromosomal segment rotates 180 degrees and reattaches in reverse order:\n   - **Paracentric Inversion:** Inversion does NOT include the centromere. Crossing over within the inversion loop at pachytene produces a dicentric bridge, an acentric fragment, and two non-recombinant gametes.\n   - **Pericentric Inversion:** Inversion INCLUDES the centromere. Crossing over produces chromatids with duplications and deletions, resulting in inviable recombinant gametes.\n   - Inversion heterozygotes act as 'crossover suppressors' because recombinant gametes are inviable.\n\n4. **Translocations (Reciprocal Translocations):** Mutual exchange of terminal chromosomal segments between non-homologous chromosomes. During pachytene synapsis, a heterozygous reciprocal translocation forms a characteristic **Cross-Shaped Quadrivalent Configuration** involving four chromosomes. At Anaphase I, segregation can be Alternate (yielding 100% viable gametes, forming a ring/figure-eight) or Adjacent-1 / Adjacent-2 (yielding duplicated/deleted inviable gametes, causing ~50% semisterility)."
          }
        ]
      },
      {
        "id": "sec-gpb-4-4",
        "heading": "4. Numerical Variations: Aneuploidy and Euploidy",
        "content": "Numerical changes involve alteration in the number of individual chromosomes (aneuploidy) or entire chromosome sets (euploidy/polyploidy).",
        "subsections": [
          {
            "subheading": "Classification of Chromosome Numbers",
            "content": "1. **Aneuploidy (2n +/- x):**\n   - **Nullisomy (2n - 2):** Loss of an entire homologous pair (e.g., in hexaploid wheat, 2n = 42 -> 40).\n   - **Monosomy (2n - 1):** Loss of a single chromosome (2n = 41 in wheat). E. R. Sears used Chinese Spring wheat monosomic series to locate genes to specific chromosomes.\n   - **Trisomy (2n + 1):** Gain of one extra chromosome (2n = 43 in wheat; Down syndrome 47,+21 in humans; Datura capsule shape by Blakeslee).\n   - **Tetrasomy (2n + 2):** Gain of an extra pair of homologous chromosomes.\n\n2. **Euploidy (Multiples of basic monoploid number x):**\n   - **Autopolyploidy:** Multiplication of identical chromosome sets from the same species (e.g., autotriploid AAA, autotetraploid AAAA). Induced using **colchicine** (which disrupts spindle microtubules). Examples: Triploid seedless watermelon (3x), tetraploid rye, autotetraploid red clover.\n   - **Allopolyploidy (Amphidiploidy):** Doubling of chromosome sets derived from hybridization between two distinct species (e.g., AABB). Examples: Bread wheat (*Triticum aestivum*, 2n = 6x = 42, AABBDD), *Triticale* (man-made cereal from Wheat x Rye), U's Triangle in *Brassica*."
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Point mutations include base substitutions (transitions/transversions) and indel frameshifts.",
      "Chemical mutagens like EMS induce specific GC -> AT transitions; physical mutagens generate double-strand DNA breaks.",
      "Structural aberrations form distinct pachytene loops: deletion loops, inversion loops, and translocation cross configurations.",
      "Heterozygous reciprocal translocations exhibit ~50% pollen and ovule semisterility due to adjacent-1 segregation.",
      "E. R. Sears utilized monosomic series in bread wheat to locate genes to specific chromosomes.",
      "Polyploidy is widespread in crop evolution: autotriploids produce seedless fruits, while allopolyploids (Triticale, Brassica) combine distinct species genomes."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Inversion heterozygotes physically stop crossing over from happening.",
        "reality": "Crossing over occurs freely within the inversion loop; however, the resulting crossover chromatids suffer severe duplications, deletions, or dicentric/acentric defects that render the recombinant gametes inviable, so only non-recombinants survive."
      },
      {
        "myth": "Colchicine induces polyploidy by mutating chromosomes.",
        "reality": "Colchicine is an antimitotic spindle poison that binds to tubulin dimers, preventing microtubule assembly at Metaphase; chromosomes replicate normally but fail to separate at Anaphase, doubling the somatic chromosome number."
      }
    ],
    "summary": "Unit 4 covers the causes, mechanisms, and breeding consequences of chromosomal and genetic mutations. It classifies gene mutations into transitions, transversions, and frameshifts, and examines physical and chemical mutagens. It investigates structural chromosomal rearrangements (deletions, duplications, inversions, translocations) and their meiotic pairing hallmarks, before evaluating numerical variations including aneuploid series (monosomics, trisomics) and polyploid breeding (colchicine induction of seedless autotriploids, allopolyploid synthesis of Triticale and Brassica)."
  },
  "mcqs": [
    {
      "id": "GPB203-U4-MCQ01",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Easy",
      "questionText": "Who coined the term 'Mutation' in 1901 based on studies in Oenothera lamarckiana?",
      "options": {
        "A": "Gregor Mendel",
        "B": "Hugo de Vries",
        "C": "Thomas Hunt Morgan",
        "D": "Charles Darwin"
      },
      "correctOption": "B",
      "explanation": "Hugo de Vries coined the term mutation while observing sudden heritable morphological variations in evening primrose (Oenothera lamarckiana)."
    },
    {
      "id": "GPB203-U4-MCQ02",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Easy",
      "questionText": "A base substitution in which a purine is replaced by another purine (e.g., A -> G) is called a:",
      "options": {
        "A": "Transversion",
        "B": "Transition",
        "C": "Frameshift mutation",
        "D": "Inversion"
      },
      "correctOption": "B",
      "explanation": "Transitions substitute a purine with a purine (A <-> G) or a pyrimidine with a pyrimidine (C <-> T)."
    },
    {
      "id": "GPB203-U4-MCQ03",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Easy",
      "questionText": "A base substitution in which a purine is replaced by a pyrimidine (e.g., A -> C or A -> T) is called a:",
      "options": {
        "A": "Transition",
        "B": "Transversion",
        "C": "Duplication",
        "D": "Translocation"
      },
      "correctOption": "B",
      "explanation": "Transversions substitute a purine with a pyrimidine or vice versa (8 possible combinations)."
    },
    {
      "id": "GPB203-U4-MCQ04",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Easy",
      "questionText": "A mutation that changes a codon to one of the three stop codons (UAA, UAG, UGA) is termed a:",
      "options": {
        "A": "Missense mutation",
        "B": "Nonsense mutation",
        "C": "Silent mutation",
        "D": "Neutral mutation"
      },
      "correctOption": "B",
      "explanation": "Nonsense mutations convert an amino acid-specifying codon into a premature stop codon, terminating translation prematurely."
    },
    {
      "id": "GPB203-U4-MCQ05",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Medium",
      "questionText": "A mutation that alters a single base pair without changing the encoded amino acid (due to genetic code degeneracy) is a:",
      "options": {
        "A": "Missense mutation",
        "B": "Silent (Synonymous) mutation",
        "C": "Frameshift mutation",
        "D": "Nonsense mutation"
      },
      "correctOption": "B",
      "explanation": "Silent (synonymous) mutations change the nucleotide sequence but encode the identical amino acid (e.g., GAG to GAA, both glutamate)."
    },
    {
      "id": "GPB203-U4-MCQ06",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Medium",
      "questionText": "Frameshift mutations are caused by:",
      "options": {
        "A": "Base substitutions of purines",
        "B": "Insertion or deletion of a number of nucleotides that is not a multiple of three",
        "C": "Inversion of chromosome arms",
        "D": "Tautomeric shifts in adenine"
      },
      "correctOption": "B",
      "explanation": "Indel mutations not divisible by three disrupt the triplet translational reading frame, altering all downstream codons."
    },
    {
      "id": "GPB203-U4-MCQ07",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Medium",
      "questionText": "Sickle-cell anemia in humans is caused by which specific molecular mutation in the beta-globin gene?",
      "options": {
        "A": "Nonsense mutation",
        "B": "Missense transversion (GAG -> GTG replacing Glutamate with Valine at codon 6)",
        "C": "Frameshift deletion of 3 base pairs",
        "D": "Silent transition"
      },
      "correctOption": "B",
      "explanation": "Sickle-cell hemoglobin results from an A-to-T transversion converting GAG (glutamic acid) into GTG (valine) at codon 6."
    },
    {
      "id": "GPB203-U4-MCQ08",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Medium",
      "questionText": "Tautomeric shifts causing rare imino forms of adenine or enol forms of thymine lead directly to:",
      "options": {
        "A": "Double-strand breaks",
        "B": "Spontaneous transition mutations during replication",
        "C": "Chromosomal translocations",
        "D": "Aneuploidy"
      },
      "correctOption": "B",
      "explanation": "Tautomerization causes aberrant base pairing (e.g., rare enol thymine pairs with guanine), producing AT -> GC transition mutations."
    },
    {
      "id": "GPB203-U4-MCQ09",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Medium",
      "questionText": "How many possible transition base substitutions exist in a DNA double helix?",
      "options": {
        "A": "Two",
        "B": "Four (A->G, G->A, C->T, T->C)",
        "C": "Eight",
        "D": "Sixteen"
      },
      "correctOption": "B",
      "explanation": "There are four transition substitutions: A->G, G->A, C->T, and T->C."
    },
    {
      "id": "GPB203-U4-MCQ10",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Hard",
      "questionText": "How many possible transversion base substitutions can occur in double-stranded DNA?",
      "options": {
        "A": "Four",
        "B": "Eight",
        "C": "Twelve",
        "D": "Sixteen"
      },
      "correctOption": "B",
      "explanation": "There are eight possible transversion substitutions: A->C, A->T, G->C, G->T, C->A, C->G, T->A, and T->G."
    },
    {
      "id": "GPB203-U4-MCQ11",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Hard",
      "questionText": "Spontaneous deamination of 5-methylcytosine in plant and mammalian genomes directly produces:",
      "options": {
        "A": "Uracil",
        "B": "Thymine (causing CG -> TA transition mutations)",
        "C": "Hypoxanthine",
        "D": "Xanthine"
      },
      "correctOption": "B",
      "explanation": "Deamination of 5-methylcytosine converts it directly to thymine, which is not recognized by uracil-DNA glycosylase, making CpG sites mutation hotspots."
    },
    {
      "id": "GPB203-U4-MCQ12",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "difficulty": "Hard",
      "questionText": "A reverse mutation that restores the wild-type phenotype by altering a different nucleotide within the same or different gene is called a:",
      "options": {
        "A": "True back mutation",
        "B": "Suppressor mutation",
        "C": "Forward mutation",
        "D": "Null mutation"
      },
      "correctOption": "B",
      "explanation": "Suppressor mutations alleviate the effects of an initial mutation at a second, distinct genetic site (intragenic or intergenic)."
    },
    {
      "id": "GPB203-U4-MCQ13",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Easy",
      "questionText": "Who first demonstrated the artificial induction of mutations using X-rays in Drosophila in 1927?",
      "options": {
        "A": "H. J. Muller (using C1B technique)",
        "B": "L. J. Stadler",
        "C": "Barbara McClintock",
        "D": "Charlotte Auerbach"
      },
      "correctOption": "A",
      "explanation": "Hermann J. Muller won the Nobel Prize in 1946 for discovering that X-rays induce mutations in Drosophila using his C1B screening technique."
    },
    {
      "id": "GPB203-U4-MCQ14",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Easy",
      "questionText": "Which radioisotope is the most widely utilized gamma radiation source in agricultural Gamma Gardens for crop mutation breeding?",
      "options": {
        "A": "Carbon-14",
        "B": "Cobalt-60 (60Co)",
        "C": "Phosphorus-32",
        "D": "Uranium-238"
      },
      "correctOption": "B",
      "explanation": "Cobalt-60 gamma irradiators emit high-energy gamma rays used internationally to irradiate crop seeds and vegetative propagules."
    },
    {
      "id": "GPB203-U4-MCQ15",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Easy",
      "questionText": "Ultraviolet (UV) radiation induces mutations primarily by causing:",
      "options": {
        "A": "Double-strand breaks",
        "B": "Cyclobutane pyrimidine dimers (thymine dimers)",
        "C": "Base transitions via alkylation",
        "D": "Centromere cleavage"
      },
      "correctOption": "B",
      "explanation": "Non-ionizing UV light (254-260 nm) crosslinks adjacent pyrimidines, forming cyclobutane thymine dimers that arrest replication forks."
    },
    {
      "id": "GPB203-U4-MCQ16",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Easy",
      "questionText": "Ethyl methanesulfonate (EMS) is the most widely used chemical mutagen in plant breeding. It belongs to which class of mutagens?",
      "options": {
        "A": "Base analogs",
        "B": "Alkylating agents",
        "C": "Acridine dyes",
        "D": "Deaminating agents"
      },
      "correctOption": "B",
      "explanation": "EMS is a monofunctional alkylating agent that adds ethyl groups to oxygen or nitrogen atoms of nucleotide bases."
    },
    {
      "id": "GPB203-U4-MCQ17",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Medium",
      "questionText": "The primary molecular mechanism of EMS mutagenesis involves ethylation of guanine at which position?",
      "options": {
        "A": "N7 position",
        "B": "O6 position (forming O6-ethylguanine which mispairs with Thymine)",
        "C": "C5 position",
        "D": "N3 position"
      },
      "correctOption": "B",
      "explanation": "EMS alkylates guanine at the O6 position; O6-ethylguanine pairs aberrantly with thymine, leading to GC -> AT transition mutations."
    },
    {
      "id": "GPB203-U4-MCQ18",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Medium",
      "questionText": "5-Bromouracil (5-BU) acts as a base analog of which pyrimidine base in DNA?",
      "options": {
        "A": "Cytosine",
        "B": "Thymine",
        "C": "Uracil",
        "D": "Adenine"
      },
      "correctOption": "B",
      "explanation": "5-Bromouracil possesses a bromine atom at position 5 that mimics the methyl group of thymine, allowing it to incorporate in place of thymine."
    },
    {
      "id": "GPB203-U4-MCQ19",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Medium",
      "questionText": "Acridine dyes (such as acridine orange and proflavin) induce mutations by which mechanism?",
      "options": {
        "A": "Alkylating cytosine bases",
        "B": "Intercalating between stacked base pairs, inducing single nucleotide insertions or deletions (frameshifts)",
        "C": "Cleaving phosphodiester bonds directly",
        "D": "Crosslinking homologous chromosomes"
      },
      "correctOption": "B",
      "explanation": "Planar acridine molecules slip between adjacent base pairs, distorting the double helix and causing DNA polymerase slippage that causes frameshifts."
    },
    {
      "id": "GPB203-U4-MCQ20",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Medium",
      "questionText": "Nitrous acid (HNO2) induces mutations by which biochemical reaction?",
      "options": {
        "A": "Oxidative phosphorylation",
        "B": "Oxidative deamination (converting Adenine to Hypoxanthine and Cytosine to Uracil)",
        "C": "Methylation of guanine",
        "D": "Polymerization of thymine"
      },
      "correctOption": "B",
      "explanation": "Nitrous acid deaminates amino groups: adenine becomes hypoxanthine (pairs with C) and cytosine becomes uracil (pairs with A), causing transitions."
    },
    {
      "id": "GPB203-U4-MCQ21",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Medium",
      "questionText": "Who first demonstrated chemical mutagenesis during World War II using mustard gas?",
      "options": {
        "A": "Charlotte Auerbach and J. M. Robson",
        "B": "H. J. Muller",
        "C": "L. J. Stadler",
        "D": "Barbara McClintock"
      },
      "correctOption": "A",
      "explanation": "Charlotte Auerbach and J. M. Robson in Edinburgh proved that mustard gas (sulfur mustard) acts as a potent mutagen in Drosophila."
    },
    {
      "id": "GPB203-U4-MCQ22",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Hard",
      "questionText": "The lethal dose of radiation that kills exactly 50% of an irradiated seed population is designated as:",
      "options": {
        "A": "ED50",
        "B": "LD50",
        "C": "MIC50",
        "D": "TLD"
      },
      "correctOption": "B",
      "explanation": "LD50 (Lethal Dose 50%) is the standard radiobiological benchmark used to determine the optimal radiation dosage for crop mutagenesis."
    },
    {
      "id": "GPB203-U4-MCQ23",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Hard",
      "questionText": "In the repair of UV-induced thymine dimers, the enzyme photolyase utilizes visible blue light (300-500 nm) to split dimers in a process termed:",
      "options": {
        "A": "Base excision repair",
        "B": "Photoreactivation",
        "C": "SOS error-prone bypass",
        "D": "Mismatch repair"
      },
      "correctOption": "B",
      "explanation": "Photoreactivation uses visible light energy absorbed by a pterin chromophore in DNA photolyase to directly split cyclobutane rings."
    },
    {
      "id": "GPB203-U4-MCQ24",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "difficulty": "Hard",
      "questionText": "In Drosophila mutation screening, Muller's C1B chromosome carries three specific genetic markers: C, l, and B. What do they represent?",
      "options": {
        "A": "Crossover enhancer, lethal gene, Bar eye",
        "B": "Crossover suppressor (inversion), recessive lethal gene, and dominant Bar-eye marker",
        "C": "Centromere, light body, Brown eye",
        "D": "Color marker, lethal gene, Bivalents"
      },
      "correctOption": "B",
      "explanation": "C = Inversion suppressing recombination; l = recessive lethal allele; B = dominant Bar-eye marker for visual identification of heterozygous females."
    },
    {
      "id": "GPB203-U4-MCQ25",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Easy",
      "questionText": "The physical loss of a terminal or intercalary chromosomal segment is called a:",
      "options": {
        "A": "Duplication",
        "B": "Deletion (or Deficiency)",
        "C": "Inversion",
        "D": "Translocation"
      },
      "correctOption": "B",
      "explanation": "Deletions involve the loss of a chromosomal segment and its constituent genes."
    },
    {
      "id": "GPB203-U4-MCQ26",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Easy",
      "questionText": "An inversion that does NOT include the centromere is termed a:",
      "options": {
        "A": "Pericentric inversion",
        "B": "Paracentric inversion",
        "C": "Reciprocal translocation",
        "D": "Isochromosome"
      },
      "correctOption": "B",
      "explanation": "Paracentric inversions occur entirely within one chromosome arm without spanning the centromere."
    },
    {
      "id": "GPB203-U4-MCQ27",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Easy",
      "questionText": "An inversion that includes the centromere is termed a:",
      "options": {
        "A": "Paracentric inversion",
        "B": "Pericentric inversion",
        "C": "Robertsonian translocation",
        "D": "Ring chromosome"
      },
      "correctOption": "B",
      "explanation": "Pericentric inversions encompass the centromere, with breakpoints occurring in both chromosome arms."
    },
    {
      "id": "GPB203-U4-MCQ28",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Easy",
      "questionText": "During pachytene of meiosis, what characteristic pairing structure is formed by a deletion heterozygote?",
      "options": {
        "A": "Cross-shaped translocation figure",
        "B": "Deletion loop (deficiency loop)",
        "C": "Dicentric bridge",
        "D": "Isochromosome"
      },
      "correctOption": "B",
      "explanation": "The normal chromosome buckles out into a visible loop (deficiency loop) opposite the deleted region of the damaged homolog."
    },
    {
      "id": "GPB203-U4-MCQ29",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Medium",
      "questionText": "The phenotypic expression of a recessive allele caused by the deletion of the corresponding dominant allele on the homologous chromosome is called:",
      "options": {
        "A": "Incomplete dominance",
        "B": "Pseudodominance",
        "C": "Codominance",
        "D": "Epistasis"
      },
      "correctOption": "B",
      "explanation": "Pseudodominance unmasks recessive alleles when the opposing wild-type dominant gene is lost in a chromosomal deletion."
    },
    {
      "id": "GPB203-U4-MCQ30",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Medium",
      "questionText": "The classic Bar-eye phenotype in Drosophila melanogaster (narrow slit-shaped eye) is caused by which structural aberration?",
      "options": {
        "A": "Paracentric inversion",
        "B": "Tandem duplication of the 16A region on the X-chromosome",
        "C": "Reciprocal translocation",
        "D": "Terminal deletion"
      },
      "correctOption": "B",
      "explanation": "Sturtevant and Bridges proved that Bar eye results from unequal crossing over producing tandem duplications of salivary gland band 16A."
    },
    {
      "id": "GPB203-U4-MCQ31",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Medium",
      "questionText": "Crossing over within a paracentric inversion loop during meiotic Anaphase I results in the formation of:",
      "options": {
        "A": "Two normal monocentric chromatids",
        "B": "A dicentric chromosome bridge and an acentric fragment",
        "C": "A ring chromosome and a Y chromosome",
        "D": "Quadrivalents"
      },
      "correctOption": "B",
      "explanation": "Crossover within a paracentric loop produces a dicentric chromatid (two centromeres) stretched across the spindle and an acentric fragment (lost)."
    },
    {
      "id": "GPB203-U4-MCQ32",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Medium",
      "questionText": "Why are inversion heterozygotes commonly referred to as 'crossover suppressors'?",
      "options": {
        "A": "Because crossing over is mechanically blocked inside the loop",
        "B": "Because recombinant gametes carry lethal duplications/deletions and die, leaving only non-recombinant progeny",
        "C": "Because centromeres refuse to divide",
        "D": "Because DNA polymerase stops working"
      },
      "correctOption": "B",
      "explanation": "Crossing over occurs normally inside the loop; however, recombinant gametes carry fatal duplications and deficiencies, so no recombinant offspring survive."
    },
    {
      "id": "GPB203-U4-MCQ33",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Medium",
      "questionText": "During pachytene synapsis, a reciprocal translocation heterozygote characteristically forms a:",
      "options": {
        "A": "Loop configuration",
        "B": "Cross-shaped quadrivalent configuration involving four chromosomes",
        "C": "Rod bivalent",
        "D": "Ring of 8 chromosomes"
      },
      "correctOption": "B",
      "explanation": "Matching of homologous segments between two translocated chromosomes and two normal homologs forms a characteristic four-armed cross figure."
    },
    {
      "id": "GPB203-U4-MCQ34",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Hard",
      "questionText": "In a reciprocal translocation heterozygote, which meiotic Anaphase I segregation pattern produces balanced, fully viable gametes?",
      "options": {
        "A": "Adjacent-1 segregation",
        "B": "Adjacent-2 segregation",
        "C": "Alternate segregation (zigzag orientation)",
        "D": "Random non-disjunction"
      },
      "correctOption": "C",
      "explanation": "Alternate segregation sends diagonally opposite chromosomes to the same pole, yielding balanced normal and translocated gametes that are fully fertile."
    },
    {
      "id": "GPB203-U4-MCQ35",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Hard",
      "questionText": "In humans, Cri-du-chat (cat's cry) syndrome is caused by which chromosomal deletion?",
      "options": {
        "A": "Deletion of the long arm of chromosome 21",
        "B": "Terminal deletion of the short arm of chromosome 5 (5p-)",
        "C": "Deletion of chromosome 18",
        "D": "Loss of X chromosome"
      },
      "correctOption": "B",
      "explanation": "Cri-du-chat syndrome is caused by a partial terminal deletion of the short arm of chromosome 5 (46,XX or XY, 5p-)."
    },
    {
      "id": "GPB203-U4-MCQ36",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "difficulty": "Hard",
      "questionText": "A Robertsonian translocation (centric fusion) involves:",
      "options": {
        "A": "Fusion of two acrocentric chromosomes at or near their centromeres to form a single large metacentric chromosome",
        "B": "Exchange between two metacentric arms",
        "C": "Deletion of telomeres",
        "D": "Formation of ring chromosomes"
      },
      "correctOption": "A",
      "explanation": "Robertsonian translocations occur between acrocentric chromosomes (e.g., human 14 and 21), fusing their long arms and causing familial Down syndrome."
    },
    {
      "id": "GPB203-U4-MCQ37",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Easy",
      "questionText": "An organism with chromosome number 2n - 1 is classified as:",
      "options": {
        "A": "Nullisomic",
        "B": "Monosomic",
        "C": "Trisomic",
        "D": "Tetrasomic"
      },
      "correctOption": "B",
      "explanation": "Monosomy represents the loss of a single chromosome from the diploid set (2n - 1)."
    },
    {
      "id": "GPB203-U4-MCQ38",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Easy",
      "questionText": "An organism with chromosome number 2n + 1 is classified as:",
      "options": {
        "A": "Monosomic",
        "B": "Trisomic",
        "C": "Nullisomic",
        "D": "Triploid"
      },
      "correctOption": "B",
      "explanation": "Trisomy represents the addition of one extra chromosome to the diploid complement (2n + 1)."
    },
    {
      "id": "GPB203-U4-MCQ39",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Easy",
      "questionText": "An organism missing an entire homologous pair of chromosomes (2n - 2) is called a:",
      "options": {
        "A": "Monosomic",
        "B": "Double monosomic",
        "C": "Nullisomic",
        "D": "Haploid"
      },
      "correctOption": "C",
      "explanation": "Nullisomics lack both members of a specific homologous chromosome pair (2n - 2)."
    },
    {
      "id": "GPB203-U4-MCQ40",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Easy",
      "questionText": "Down syndrome in humans is the classic medical example of which aneuploid condition?",
      "options": {
        "A": "Monosomy X (Turner syndrome)",
        "B": "Trisomy 21 (47, +21)",
        "C": "Klinefelter syndrome (47, XXY)",
        "D": "Triploidy (69, XXX)"
      },
      "correctOption": "B",
      "explanation": "Down syndrome is caused by trisomy of chromosome 21 resulting from meiotic non-disjunction."
    },
    {
      "id": "GPB203-U4-MCQ41",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Medium",
      "questionText": "Who famously used a complete series of 12 primary trisomics in Datura stramonium (Jimson weed) to study fruit capsule morphology?",
      "options": {
        "A": "Gregor Mendel",
        "B": "Albert F. Blakeslee and John Belling",
        "C": "E. R. Sears",
        "D": "Hugo de Vries"
      },
      "correctOption": "B",
      "explanation": "Blakeslee and Belling identified all 12 possible primary trisomics in Datura (2n = 24), each altering capsule shape distinctly."
    },
    {
      "id": "GPB203-U4-MCQ42",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Medium",
      "questionText": "Ernest R. Sears developed a complete set of 21 monosomic lines in which polyploid crop to map genes to specific chromosomes?",
      "options": {
        "A": "Zea mays",
        "B": "Common bread wheat (Triticum aestivum, cultivar 'Chinese Spring')",
        "C": "Oryza sativa",
        "D": "Hordeum vulgare"
      },
      "correctOption": "B",
      "explanation": "Sears developed all 21 possible monosomics (2n = 41) in hexaploid bread wheat, using them to assign genes to chromosomes."
    },
    {
      "id": "GPB203-U4-MCQ43",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Medium",
      "questionText": "Why can hexaploid wheat (Triticum aestivum, 2n = 6x = 42) tolerate nullisomy (2n - 2 = 40) whereas diploid barley dies?",
      "options": {
        "A": "Because wheat has stronger cell walls",
        "B": "Because hexaploid wheat has homeologous chromosomes from three ancestral genomes (A, B, D) that compensate for lost genes",
        "C": "Because wheat undergoes mitosis faster",
        "D": "Because nullisomy does not affect pollen in wheat"
      },
      "correctOption": "B",
      "explanation": "Genetic buffering by homeologous chromosome sets in allopolyploids allows surviving nullisomy; diploid crops lack homeologous compensation."
    },
    {
      "id": "GPB203-U4-MCQ44",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Medium",
      "questionText": "What is the chromosome formula for a 'Double Monosomic' individual?",
      "options": {
        "A": "2n - 2",
        "B": "2n - 1 - 1",
        "C": "2n + 1 + 1",
        "D": "2n - 4"
      },
      "correctOption": "B",
      "explanation": "A double monosomic (2n - 1 - 1) lacks one chromosome from each of two different homologous pairs."
    },
    {
      "id": "GPB203-U4-MCQ45",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Medium",
      "questionText": "What is the chromosome formula for a 'Double Trisomic' individual?",
      "options": {
        "A": "2n + 2",
        "B": "2n + 1 + 1",
        "C": "2n - 2",
        "D": "4n"
      },
      "correctOption": "B",
      "explanation": "A double trisomic (2n + 1 + 1) carries one extra chromosome in two different homologous pairs."
    },
    {
      "id": "GPB203-U4-MCQ46",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Hard",
      "questionText": "A trisomic individual of genotype AAa produces which gametic ratio upon meiosis?",
      "options": {
        "A": "1 A : 1 a",
        "B": "1 AA : 2 Aa : 2 A : 1 a",
        "C": "3 A : 1 a",
        "D": "1 AA : 1 aa"
      },
      "correctOption": "B",
      "explanation": "Random chromosome disjunction in an AAa trisomic yields extra-chromosome gametes (1 AA : 2 Aa) and haploid gametes (2 A : 1 a)."
    },
    {
      "id": "GPB203-U4-MCQ47",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Hard",
      "questionText": "A 'Tertiary Trisomic' chromosome configuration is characterized by an extra chromosome that:",
      "options": {
        "A": "Is completely identical to a normal chromosome",
        "B": "Is an isochromosome",
        "C": "Consists of segments translocated from two different non-homologous chromosomes",
        "D": "Lacks a centromere"
      },
      "correctOption": "C",
      "explanation": "Tertiary trisomics carry an extra translocated chromosome derived from interchange between two non-homologous chromosomes."
    },
    {
      "id": "GPB203-U4-MCQ48",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "difficulty": "Hard",
      "questionText": "An isochromosome is a structurally abnormal chromosome that possesses:",
      "options": {
        "A": "Two identical arms due to transverse division of the centromere instead of longitudinal division",
        "B": "No centromere",
        "C": "Two different satellite regions",
        "D": "Extensive terminal deletions"
      },
      "correctOption": "A",
      "explanation": "Isochromosomes form when the centromere splits horizontally (transversely), creating chromosomes with two genetically identical arms."
    },
    {
      "id": "GPB203-U4-MCQ49",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Easy",
      "questionText": "An organism possessing multiple identical chromosome sets derived from the same species is called an:",
      "options": {
        "A": "Allopolyploid",
        "B": "Autopolyploid",
        "C": "Aneuploid",
        "D": "Amphidiploid"
      },
      "correctOption": "B",
      "explanation": "Autopolyploids contain multiple chromosome sets originating from a single species (e.g., AAAA tetraploid)."
    },
    {
      "id": "GPB203-U4-MCQ50",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Easy",
      "questionText": "Which chemical alkaloid extracted from Autumn Crocus (Colchicum autumnale) is universally used to induce polyploidy in plants?",
      "options": {
        "A": "Gibberellic acid",
        "B": "Colchicine",
        "C": "Indole-3-acetic acid",
        "D": "2,4-D"
      },
      "correctOption": "B",
      "explanation": "Colchicine inhibits spindle microtubule formation during metaphase, causing endoreduplication and chromosome doubling."
    },
    {
      "id": "GPB203-U4-MCQ51",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Easy",
      "questionText": "Commercial seedless watermelons are produced by growing which polyploid form?",
      "options": {
        "A": "Diploid (2x)",
        "B": "Triploid (3x)",
        "C": "Tetraploid (4x)",
        "D": "Hexaploid (6x)"
      },
      "correctOption": "B",
      "explanation": "Triploid watermelons (3x, generated by crossing 4x female with 2x male) fail to produce balanced gametes, resulting in seedless fruit."
    },
    {
      "id": "GPB203-U4-MCQ52",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Easy",
      "questionText": "Triticale, the world's first successful man-made cereal, was synthesized by crossing which two crop genera?",
      "options": {
        "A": "Wheat (Triticum) x Barley (Hordeum)",
        "B": "Wheat (Triticum) x Rye (Secale)",
        "C": "Rice (Oryza) x Maize (Zea)",
        "D": "Oat (Avena) x Wheat (Triticum)"
      },
      "correctOption": "B",
      "explanation": "Triticale is an allopolyploid synthesized by crossing wheat (Triticum) with rye (Secale cereale), followed by colchicine doubling."
    },
    {
      "id": "GPB203-U4-MCQ53",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Medium",
      "questionText": "The classic triangular genomic relationship among Brassica species was elucidated in 1935 by:",
      "options": {
        "A": "H. Kihara",
        "B": "Woo Jang Cho (Nagaharu U - U's Triangle)",
        "C": "E. R. Sears",
        "D": "G. L. Stebbins"
      },
      "correctOption": "B",
      "explanation": "Nagaharu U (Woo Jang Cho) published U's Triangle, demonstrating how three allotetraploid Brassicas evolved from three diploid ancestors."
    },
    {
      "id": "GPB203-U4-MCQ54",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Medium",
      "questionText": "According to U's Triangle, Indian mustard (Brassica juncea, 2n = 36, AABB) is an amphidiploid derived from crossing:",
      "options": {
        "A": "B. oleracea (CC) x B. nigra (BB)",
        "B": "B. rapa (AA, 2n=20) x B. nigra (BB, 2n=16)",
        "C": "B. rapa (AA) x B. oleracea (CC)",
        "D": "B. napus x B. carinata"
      },
      "correctOption": "B",
      "explanation": "Brassica juncea (AABB, 2n=36) is an amphidiploid derived from B. rapa (AA, 2n=20) and B. nigra (BB, 2n=16)."
    },
    {
      "id": "GPB203-U4-MCQ55",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Medium",
      "questionText": "Raphanobrassica, synthesized by G. D. Karpechenko in 1928, was an allotetraploid cross between:",
      "options": {
        "A": "Radish (Raphanus sativus) x Cabbage (Brassica oleracea)",
        "B": "Rye x Wheat",
        "C": "Onion x Garlic",
        "D": "Tomato x Potato"
      },
      "correctOption": "A",
      "explanation": "Karpechenko crossed radish (Raphanus, 2n=18) with cabbage (Brassica, 2n=18) to create the allotetraploid Raphanobrassica."
    },
    {
      "id": "GPB203-U4-MCQ56",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Medium",
      "questionText": "Common bread wheat (Triticum aestivum, 2n = 6x = 42) is an allohexaploid comprising which three ancestral genomes?",
      "options": {
        "A": "AAAABB",
        "B": "AABBDD",
        "C": "AABBCC",
        "D": "AAEEGG"
      },
      "correctOption": "B",
      "explanation": "Bread wheat possesses three distinct diploid genomes: A (T. urartu), B (Aegilops speltoides relative), and D (Aegilops tauschii)."
    },
    {
      "id": "GPB203-U4-MCQ57",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Medium",
      "questionText": "The gigas effect commonly observed in autotetraploid crop plants is characterized by:",
      "options": {
        "A": "Smaller stomata and reduced pollen size",
        "B": "Enlarged cell size, thicker leaves, larger flowers, and larger seeds",
        "C": "Complete sterility and early death",
        "D": "Inability to absorb phosphorus"
      },
      "correctOption": "B",
      "explanation": "The gigas effect results from doubled nuclear DNA and cell volume, producing larger stomata, darker leaves, bigger flowers, and plumper seeds."
    },
    {
      "id": "GPB203-U4-MCQ58",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Hard",
      "questionText": "Why does allohexaploid bread wheat (AABBDD) behave strictly as a diploid during meiotic pairing (forming 21 bivalents with no multivalent pairing)?",
      "options": {
        "A": "Because A, B, and D genomes are completely non-homologous",
        "B": "Due to the Ph1 (Pairing homoeologous 1) gene located on the long arm of Chromosome 5B",
        "C": "Because rye genes suppress pairing",
        "D": "Because centromeres are mutated"
      },
      "correctOption": "B",
      "explanation": "The master Ph1 gene on Chromosome 5B suppresses pairing between homeologous chromosomes, ensuring strict homologous bivalent pairing."
    },
    {
      "id": "GPB203-U4-MCQ59",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Hard",
      "questionText": "Why are autotriploid crops (e.g., triploid bananas, 3x = 33) almost completely seedless and commercially sterile?",
      "options": {
        "A": "Because pollen grains have thick coats",
        "B": "Because trivalent meiotic pairing and unequal chromosome distribution at Anaphase I produce aneuploid inviable gametes",
        "C": "Because ovaries lack ovules",
        "D": "Because seeds fall off before maturity"
      },
      "correctOption": "B",
      "explanation": "In autotriploids, chromosomes form trivalents or univalent-bivalent pairs. Irregular 2:1 disjunction produces unbalanced aneuploid gametes that abort."
    },
    {
      "id": "GPB203-U4-MCQ60",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "difficulty": "Hard",
      "questionText": "What is an 'Octoploid Triticale' synthesized from?",
      "options": {
        "A": "Durum wheat (4x) x Rye (2x)",
        "B": "Bread wheat (Triticum aestivum, 6x) x Rye (Secale cereale, 2x) followed by chromosome doubling",
        "C": "Barley (2x) x Wheat (6x)",
        "D": "Triticum monococcum (2x) x Rye (2x)"
      },
      "correctOption": "B",
      "explanation": "Octoploid Triticale (2n = 8x = 56) is synthesized by crossing hexaploid bread wheat (6x) with diploid rye (2x) and doubling the sterile 4x hybrid with colchicine."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "GPB203-U4-SUB01",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "questionText": "Differentiate between Transitions and Transversions. Give all possible examples of each in double-stranded DNA.",
      "modelAnswer": "Base substitution point mutations in DNA are classified into transitions and transversions based on the biochemical ring structure of the substituted bases:\n\n1. Transitions:\n- Definition: A point mutation where a purine base is replaced by another purine (A <-> G) or a pyrimidine base is replaced by another pyrimidine (C <-> T). The single-ring or double-ring chemical architecture is conserved.\n- Possible Transition Types (4 combinations):\n  * A -> G and G -> A (Purine to Purine)\n  * C -> T and T -> C (Pyrimidine to Pyrimidine)\n- Natural Occurrence: Transitions occur more frequently in nature (spontaneous and chemically induced) because the molecular dimensions of the purine-pyrimidine base pair remain relatively unaltered.\n\n2. Transversions:\n- Definition: A point mutation where a purine base is replaced by a pyrimidine base, or a pyrimidine base is replaced by a purine base (e.g., A <-> C or G <-> T). The chemical ring structure is inverted (two rings to one ring, or vice versa).\n- Possible Transversion Types (8 combinations):\n  * A -> C, A -> T, G -> C, G -> T (Purine replaced by Pyrimidine)\n  * C -> A, C -> G, T -> A, T -> G (Pyrimidine replaced by Purine)\n- Natural Occurrence: Although geometrically there are twice as many possible transversions (8) as transitions (4), transversions occur less frequently because DNA polymerases and proofreading exonucleases more readily detect and correct the drastic steric distortions caused by transversion mismatches (e.g., purine-purine bulges or pyrimidine-pyrimidine pinches).",
      "outlinePoints": [
        "Definitions of transitions (purine-purine / pyrimidine-pyrimidine) and transversions (purine-pyrimidine)",
        "Listing of all 4 transition types",
        "Listing of all 8 transversion types",
        "Stereochemical reasons why transitions occur with higher biological frequency"
      ]
    },
    {
      "id": "GPB203-U4-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "questionText": "Explain the molecular mechanism by which Ethyl Methanesulfonate (EMS) induces mutations in crop plants.",
      "modelAnswer": "Ethyl Methanesulfonate (EMS, CH3SO2OCH2CH3) is the most widely utilized monofunctional alkylating chemical mutagen in plant mutation breeding due to its high mutagenic efficiency and low toxicity to seeds.\n\n1. Mechanism of Alkylation:\nEMS acts by transferring an ethyl group (*-CH2CH3*) to nucleophilic centers of nitrogenous bases in the DNA molecule. While alkylation occurs at several sites (including N7 of guanine and N3 of adenine), the primary mutagenic lesion is the alkylation of the **O6 position of guanine**, forming **O6-ethylguanine**.\n\n2. Aberrant Base Pairing and Transition Mutagenesis:\n- In unmutated DNA, normal guanine (keto form) forms three hydrogen bonds with cytosine (*G === C*).\n- When guanine is ethylated at O6, it adopts an altered enol-like conformation. In this altered state, O6-ethylguanine cannot pair with cytosine; instead, it forms two stable hydrogen bonds with **thymine**.\n- During the next cycle of DNA replication, DNA polymerase incorporates thymine opposite O6-ethylguanine (*O6-ethylG --- T*).\n- In the subsequent replication round, thymine pairs correctly with adenine (*T === A*).\n- Result: The original *G:C* base pair is permanently converted into an *A:T* base pair.\n\nConclusion:\nEMS mutagenesis is characterized by an overwhelming specificity (>90%) for inducing **GC -> AT transition mutations**, which generates high frequencies of single-nucleotide missense mutations in crop genomes.",
      "outlinePoints": [
        "Chemical identity of EMS as an alkylating agent",
        "Ethylation of guanine at the O6 position forming O6-ethylguanine",
        "Aberrant mispairing of O6-ethylguanine with thymine during replication",
        "Fixation of GC -> AT transition mutations after two replication cycles"
      ]
    },
    {
      "id": "GPB203-U4-SUB03",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "questionText": "Describe the meiotic pairing behavior and Anaphase I consequences of a Paracentric Inversion heterozygote.",
      "modelAnswer": "An inversion is a structural chromosomal aberration where a segment breaks, rotates 180 degrees, and rejoins the chromosome in reverse order. In a **Paracentric Inversion**, the inverted segment lies entirely within one chromosome arm and does NOT include the centromere.\n\n1. Meiotic Pachytene Pairing (The Inversion Loop):\nIn an inversion heterozygote (one normal chromosome and one inverted homolog), homologous gene sequences must achieve point-by-point synapsis. To align homologous loci, the paired chromosomes twist to form a characteristic **reverse loop configuration (Inversion Loop)** during pachytene of Prophase I.\n\n2. Consequences of Crossing Over Inside the Inversion Loop:\nIf a single crossover occurs between non-sister chromatids within the inverted segment:\n- The two non-crossover chromatids remain normal: one normal parental chromatid and one inverted parental chromatid.\n- The two crossover chromatids become structurally aberrant:\n  * One recombinant chromatid receives two centromeres, forming a **Dicentric Chromatid**.\n  * The other recombinant chromatid receives no centromere, forming an **Acentric Fragment**.\n\n3. Meiotic Anaphase I Manifestation:\n- At Anaphase I, the two centromeres of the dicentric chromatid are pulled toward opposite spindle poles, creating a visible stretched chromosomal strand termed a **Dicentric Bridge**. Tension typically causes the bridge to snap near its center.\n- The acentric fragment, lacking a kinetochore, cannot attach to spindle fibers and is lost in the cytoplasm.\n\n4. Gametic Outcome:\nRecombinant gametes carry severe duplications and deficiencies and fail to survive. Only gametes receiving the non-crossover normal or inverted chromatids are viable. Thus, paracentric inversions act as strong apparent crossover suppressors.",
      "outlinePoints": [
        "Definition of paracentric inversion (excluding centromere)",
        "Pachytene synapsis forming an inversion loop to maximize gene alignment",
        "Single crossover yielding a dicentric chromatid and an acentric fragment",
        "Anaphase I dicentric bridge formation, acentric fragment loss, and recombinant lethality"
      ]
    },
    {
      "id": "GPB203-U4-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "questionText": "Explain the meiotic Anaphase I segregation patterns of a Reciprocal Translocation heterozygote and explain why it causes 50% semisterility.",
      "modelAnswer": "A reciprocal translocation involves the mutual exchange of terminal chromosomal segments between two non-homologous chromosomes. In a translocation heterozygote (two normal chromosomes *N1, N2* and two translocated chromosomes *T1, T2*), meiotic pairing at pachytene forms a four-chromosome **Cross-Shaped Quadrivalent Configuration**.\n\nMeiotic Anaphase I Segregation Patterns:\nThe quadrivalent orients on the Metaphase I equatorial plate and segregates at Anaphase I via three distinct spatial pathways:\n\n1. Alternate Segregation (Zigzag Orientation):\n- Chromosomes located diagonally opposite each other move to the same spindle pole (*N1 + N2* to one pole, and *T1 + T2* to the other pole).\n- Gametic Constitution: Gametes receive either both normal chromosomes or both translocated chromosomes.\n- Viability: All alleles are present in balanced single doses (no duplications or deletions). All gametes are **100% viable and fertile**.\n\n2. Adjacent-1 Segregation:\n- Non-homologous adjacent chromosomes move to the same pole (*N1 + T2* to one pole, and *N2 + T1* to the other pole).\n- Gametic Constitution: Gametes contain duplications of some chromosomal segments and deficiencies (deletions) of others.\n- Viability: Genetically unbalanced; gametes are **100% inviable/lethal**.\n\n3. Adjacent-2 Segregation:\n- Homologous centromeres fail to separate and move to the same pole (*N1 + T1* to one pole, and *N2 + T2* to the other pole). Very rare.\n- Gametic Constitution: Carries massive duplications and deletions; **100% inviable**.\n\nWhy Translocation Heterozygotes Exhibit 50% Semisterility:\nUnder random spindle orientation, Alternate segregation and Adjacent-1 segregation occur in roughly equal frequencies (~50% each). Because Adjacent-1 gametes abort due to lethal genic imbalances, approximately 50% of the pollen grains and ovules abort, creating the hallmark diagnostic phenotype of **50% pollen and ovule semisterility**.",
      "outlinePoints": [
        "Pachytene cross-shaped quadrivalent configuration involving 4 chromosomes",
        "Alternate segregation producing balanced, viable gametes",
        "Adjacent-1 segregation producing duplicated/deficient inviable gametes",
        "Adjacent-2 segregation involving non-disjunction of homologous centromeres",
        "Equal frequency of Alternate and Adjacent-1 explaining 50% semisterility"
      ]
    },
    {
      "id": "GPB203-U4-SUB05",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "questionText": "Define Aneuploidy. Differentiate between Monosomy, Trisomy, and Nullisomy with their chromosomal formulas.",
      "modelAnswer": "Aneuploidy is a numerical chromosomal abnormality involving the loss or gain of one or more individual chromosomes from the standard diploid complement (2n), rather than complete sets of chromosomes. It results primarily from meiotic non-disjunction or chromosome lagging during gametogenesis.\n\nMajor Aneuploid Conditions:\n\n1. Monosomy (Formula: 2n - 1):\n- Definition: The loss of a single chromosome from a specific homologous pair. The somatic cells contain `2n - 1` chromosomes.\n- Genetic Consequences: In diploids, monosomy is typically lethal because deleterious recessive alleles are unmasked (pseudodominance). In polyploids (e.g., hexaploid wheat, 2n = 41), monosomics are viable and fertile due to homeologous genetic buffering.\n- Human Example: Turner syndrome (45,X).\n\n2. Trisomy (Formula: 2n + 1):\n- Definition: The gain of a single extra chromosome to one homologous pair, such that one chromosome is represented three times (`2n + 1`).\n- Genetic Consequences: Causes phenotypic abnormalities due to gene dosage imbalance. Forms trivalent configurations during meiotic prophase I.\n- Agricultural/Biological Examples: Primary trisomics in *Datura stramonium* altering capsule morphology; Down syndrome (Trisomy 21) in humans.\n\n3. Nullisomy (Formula: 2n - 2):\n- Definition: The loss of an entire homologous pair of chromosomes (`2n - 2`).\n- Genetic Consequences: Universally lethal in diploid species. Viable in allopolyploid crops (e.g., *Triticum aestivum*, 2n = 40) where homeologous chromosomes from other ancestral genomes compensate for the missing pair.",
      "outlinePoints": [
        "Formal definition of aneuploidy and non-disjunction etiology",
        "Monosomy (2n - 1): definition, lethality in diploids vs viability in polyploids",
        "Trisomy (2n + 1): definition, dosage imbalance, trivalent meiotic pairing",
        "Nullisomy (2n - 2): definition, complete pair loss, homeologous compensation"
      ]
    },
    {
      "id": "GPB203-U4-SUB06",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "questionText": "Explain the significance of Ernest R. Sears' monosomic series in bread wheat (Triticum aestivum). How are monosomics used to locate genes to specific chromosomes?",
      "modelAnswer": "Hexaploid bread wheat (*Triticum aestivum*, 2n = 6x = 42) possesses 21 distinct pairs of chromosomes distributed across three ancestral genomes (7A, 7B, 7D). Dr. Ernest R. Sears (1954) isolated and developed a complete set of all **21 possible monosomic lines (2n = 41)** in the cultivar 'Chinese Spring', establishing one of the most powerful cytogenetic tools in crop genetics.\n\nProtocol for Locating a Recessive Gene to a Specific Chromosome:\nSuppose a breeder wants to locate a newly discovered recessive gene for dwarfism (*d*) on one of the 21 wheat chromosomes:\n\n1. Crossing Scheme:\n- The dwarf mutant (*dd*, homozygous recessive, 2n = 42) is crossed as the pollen parent with each of the 21 different Chinese Spring monosomic lines (each carrying 2n = 41, with one specific chromosome lacking its homolog: *20'' + 1'*).\n\n2. Screening F1 Progeny:\nIn each of the 21 crosses, two cytological classes appear in F1:\n- Disomic F1 plants (2n = 42, carrying two doses of the chromosome).\n- Monosomic F1 plants (2n = 41, carrying only a single univalent chromosome).\n\n3. Critical Diagnostic Outcome:\n- **For the 20 Unrelated Monosomic Crosses:** The critical chromosome is present in two doses (one from Chinese Spring carrying dominant wild-type *D*, and one from the dwarf carrying *d*). All monosomic F1 plants are *D-* and display the **normal tall phenotype**.\n- **For the Specific Critical Monosomic Cross (carrying the gene):** The Chinese Spring parent contributes zero copies of the critical chromosome. The F1 monosomic plant receives only the single *d*-bearing chromosome from the dwarf pollen parent. Because there is no dominant wild-type allele to mask it, **the F1 monosomic plant exhibits the dwarf mutant phenotype immediately (pseudodominance)!**\n\n4. Confirmation via F2 Segregation:\nIn F2, the 20 non-critical lines segregate in a normal Mendelian 3 tall : 1 dwarf ratio. In contrast, the critical monosomic line yields almost entirely dwarf plants because the univalent chromosome without *d* is frequently lost as a micronucleus during meiosis.\n\nThis monosomic analysis assigned thousands of agronomic genes (rust resistance, vernalization, grain quality) to specific wheat chromosomes.",
      "outlinePoints": [
        "Overview of Sears' 21 monosomic lines in 'Chinese Spring' wheat (2n = 41)",
        "Crossing the recessive mutant pollen parent to each of the 21 monosomic lines",
        "Unmasking of the recessive phenotype in F1 (pseudodominance) in the critical line",
        "Mendelian 3:1 vs distorted F2 segregation confirming chromosomal assignment"
      ]
    },
    {
      "id": "GPB203-U4-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "questionText": "Describe the cellular mechanism of action of colchicine in inducing polyploidy in plant cells.",
      "modelAnswer": "Colchicine (C22H25NO6) is a toxic natural alkaloid extracted from the seeds and corms of the autumn crocus (*Colchicum autumnale*, family Colchicaceae). It is the premier antimitotic chemical agent used in plant breeding to double chromosome numbers and induce autopolyploidy or amphidiploidy.\n\nCellular Mechanism of Action:\n1. Microtubule Depolymerization:\nColchicine specifically binds with high affinity to free **tubulin heterodimers** (alpha- and beta-tubulin subunits) in the cytoplasm, forming tubulin-colchicine complexes. This binding caps the growing ends of microtubules and blocks further polymerization, causing the complete disintegration and dissolution of the mitotic spindle apparatus.\n\n2. Mitotic Arrest at Metaphase (C-Mitosis):\nDuring cell division, prophase proceeds normally: chromosomes condense and nuclear envelope breaks down. However, in the absence of spindle microtubules, kinetochores cannot attach to spindle fibers. Chromosomes remain scattered across the cell in an arrested metaphase configuration termed **C-metaphase (colchicine-mitosis)**. Sister chromatids remain joined only at their centromeres.\n\n3. Centromere Splitting and Nuclear Restitution (Endoreduplication):\nEventually, despite the absence of spindle tension, centromeres divide autonomously, separating sister chromatids into individual daughter chromosomes. Because there is no spindle apparatus to pull them to opposite poles at Anaphase, all chromosomes remain enclosed within a single restitution nucleus.\n\n4. Somatic Chromosome Doubling:\nA new nuclear envelope reforms around the entire double complement of chromosomes, bypassing telophase and cytokinesis. When this cell resumes normal interphase and enters subsequent mitotic cycles, its somatic chromosome number is permanently doubled from diploid (2n) to autotetraploid (4n).",
      "outlinePoints": [
        "Botanical source of colchicine (Colchicum autumnale)",
        "Binding to tubulin heterodimers preventing spindle microtubule polymerization",
        "Arrest of cell division at C-metaphase without chromosome movement",
        "Autonomous centromere division and formation of a 4n restitution nucleus",
        "Permanent somatic chromosome doubling from 2n to 4n"
      ]
    },
    {
      "id": "GPB203-U4-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "questionText": "Explain why commercial triploid watermelons are seedless. Describe the commercial breeding protocol used to produce triploid seed.",
      "modelAnswer": "Triploid watermelons (*Citrullus lanatus*, 3x = 33) are highly prized commercially because their fruits are completely seedless, containing only tiny, edible, translucent vestigial ovules.\n\n1. Cytogenetic Basis of Seedlessness:\n- Normal diploid watermelon has 2n = 2x = 22 chromosomes.\n- A triploid plant has three sets of chromosomes (3x = 33; 11 sets of three).\n- During meiotic Prophase I in triploid meiocytes, the three homologous chromosomes of each set attempt to pair, forming a mixture of trivalents, bivalents, and univalents.\n- At Anaphase I, the three chromosomes segregate irregularly (either 2:1 or 1:2).\n- Consequently, gametes receive random, unbalanced chromosome numbers (e.g., n = 12, 13, 14... 21). These aneuploid gametes suffer severe genic imbalances that trigger gametic sterility; pollen grains and megaspores abort (>99% sterility).\n- Without viable fertilization of ovules, no hard seeds can develop.\n\n2. Commercial Breeding Protocol to Produce Triploid Seed:\n- Step 1 (Induction of Tetraploid Parent): Treat shoot apices of diploid seedlings with 0.2% colchicine solution to induce chromosome doubling, producing autotetraploid plants (4x = 44).\n- Step 2 (Hybrid Cross): Cross the autotetraploid (4x) female parent with a normal diploid (2x) male pollen parent.\n  * Note: The tetraploid must always be used as the female parent (seed parent) because 2x female x 4x male crosses produce flat, empty, non-viable seeds.\n- Step 3 (Harvesting Triploid F1 Seed): The resulting F1 seeds are triploid (3x = 33). These are harvested and sold to commercial growers.\n- Step 4 (Fruit Production in Commercial Fields): Triploid watermelon flowers are sterile and cannot produce pollen. Therefore, growers plant one row of normal diploid watermelon (pollenizer) for every three rows of triploids. Bees transfer diploid pollen onto triploid female flowers; the pollen tube germination provides the auxin stimulus required to induce fruit enlargement (parthenocarpy) without seed formation.",
      "outlinePoints": [
        "Triploid chromosome makeup (3x = 33) causing trivalent meiotic pairing",
        "Irregular 2:1 Anaphase I disjunction creating aneuploid inviable gametes",
        "Colchicine induction of 4x female parent and cross with 2x male parent",
        "Necessity of planting diploid pollenizers in commercial fields to trigger fruit set"
      ]
    },
    {
      "id": "GPB203-U4-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "questionText": "Explain U's Triangle (Woo Jang Cho / Nagaharu U, 1935). Illustrate the evolutionary relationships, genomic formulas, and chromosome numbers of the six cultivated Brassica species.",
      "modelAnswer": "U's Triangle (formulated in 1935 by the Japanese-Korean botanist Nagaharu U, also known as Woo Jang Cho) is one of the classic triumphs of plant cytogenetics. It elegantly demonstrates how three modern allotetraploid (amphidiploid) *Brassica* oilseed and vegetable crops evolved in nature via interspecific hybridization and spontaneous chromosome doubling between three ancestral diploid species.\n\n1. The Three Primary Diploid Ancestor Species (The Vertices of the Triangle):\n- **Brassica rapa (syn. B. campestris)**:\n  * Genome Symbol: **AA**\n  * Diploid Chromosome Number: **2n = 2x = 20** (n = 10)\n  * Common Crops: Turnip, Chinese cabbage (bok choy), turnip rape (toria).\n- **Brassica nigra**:\n  * Genome Symbol: **BB**\n  * Diploid Chromosome Number: **2n = 2x = 16** (n = 8)\n  * Common Crops: Black mustard.\n- **Brassica oleracea**:\n  * Genome Symbol: **CC**\n  * Diploid Chromosome Number: **2n = 2x = 18** (n = 9)\n  * Common Crops: Cabbage, cauliflower, broccoli, kale, kohlrabi, Brussels sprouts.\n\n2. The Three Allotetraploid Amphidiploid Species (The Sides of the Triangle):\nWhen these diploid species grew in geographic proximity, spontaneous interspecific cross-pollination produced sterile interspecific hybrids. Natural chromosome doubling (amphidiploidy) restored fertility, creating three distinct allotetraploid species:\n\nA. **Brassica juncea (Indian Mustard)**:\n- Hybrid Origin: *Brassica rapa (AA)* x *Brassica nigra (BB)*\n- Genome Symbol: **AABB**\n- Somatic Chromosome Number: **2n = 4x = 36** (n = 10 + 8 = 18)\n- Agronomic Value: Premier oilseed crop of South Asia, highly tolerant to heat and drought.\n\nB. **Brassica napus (Rapeseed / Canola / Rutabaga)**:\n- Hybrid Origin: *Brassica rapa (AA)* x *Brassica oleracea (CC)*\n- Genome Symbol: **AACC**\n- Somatic Chromosome Number: **2n = 4x = 38** (n = 10 + 9 = 19)\n- Agronomic Value: Leading temperate oilseed worldwide (Canola), high in monounsaturated oleic acid.\n\nC. **Brassica carinata (Ethiopian Mustard)**:\n- Hybrid Origin: *Brassica nigra (BB)* x *Brassica oleracea (CC)*\n- Genome Symbol: **BBCC**\n- Somatic Chromosome Number: **2n = 4x = 34** (n = 8 + 9 = 17)\n- Agronomic Value: Drought- and pest-resistant leafy vegetable and industrial biofuel oilseed in East Africa.\n\n3. Experimental Validation of U's Triangle:\nNagaharu U and later cytogeneticists validated this evolutionary model by:\n- Artificially crossing the diploid ancestors (e.g., *B. rapa* x *B. nigra*), treating the sterile F1 hybrid with colchicine, and resynthesizing true-breeding, fully fertile *B. juncea* that was morphologically and cytologically identical to natural *B. juncea*.\n- Modern molecular DNA marker analysis (RFLPs, chloroplast DNA sequencing) confirmed maternal lineages: *B. napus* received its cytoplasm from *B. oleracea*, and *B. juncea* from *B. rapa*.",
      "outlinePoints": [
        "Historical background and significance of Nagaharu U's 1935 discovery",
        "Detailed descriptions of the 3 primary diploids: B. rapa (AA, 20), B. nigra (BB, 16), B. oleracea (CC, 18)",
        "Detailed descriptions of the 3 amphidiploids: B. juncea (AABB, 36), B. napus (AACC, 38), B. carinata (BBCC, 34)",
        "Synthetic hybridization with colchicine proving the model experimentally",
        "Molecular and cytoplasmic confirmation of maternal evolutionary origins"
      ]
    },
    {
      "id": "GPB203-U4-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "questionText": "Discuss the synthesis, cytogenetics, and breeding evolution of Triticale (x Triticosecale Wittmack). Differentiate between Octoploid and Hexaploid Triticale, and explain the cytogenetic challenges overcome to make Triticale a commercial cereal crop.",
      "modelAnswer": "Triticale (*x Triticosecale Wittmack*) is the world's first successful human-engineered synthetic cereal grain. It was created by combining the high grain yield, superior flour bread-making quality, and free-threshing habit of wheat (*Triticum*) with the cold tolerance, drought hardiness, disease resistance, and high lysine protein content of rye (*Secale*).\n\n1. Synthesis of Octoploid Triticale (2n = 8x = 56):\n- Parental Cross: Hexaploid Bread Wheat (*Triticum aestivum*, 2n = 6x = 42, AABBDD) as female parent x Diploid Rye (*Secale cereale*, 2n = 2x = 14, RR) as male parent.\n- F1 Hybrid: Possesses 28 chromosomes (haploid gamete ABD from wheat = 21, and R from rye = 7). The F1 hybrid is completely male- and female-sterile because wheat and rye chromosomes cannot pair during meiosis.\n- Chromosome Doubling: Embryos are rescued via tissue culture and treated with 0.1\u20130.2% colchicine solution to double the chromosome number, producing an allooctoploid:\n  * Genome: **AABBDDRR**\n  * Chromosome Number: **2n = 8x = 56**\n- Agronomic Limitations: Octoploid Triticale suffered from severe meiotic instability, aneuploidy, chromosome lagging, floret sterility, and shriveled grains, preventing widespread commercial adoption.\n\n2. Synthesis of Hexaploid Triticale (2n = 6x = 42):\n- Parental Cross: Tetraploid Durum/Macaroni Wheat (*Triticum turgidum var. durum*, 2n = 4x = 28, AABB) as female parent x Diploid Rye (*Secale cereale*, 2n = 2x = 14, RR) as male parent.\n- F1 Hybrid: Possesses 21 chromosomes (AB from wheat = 14, and R from rye = 7). Completely sterile.\n- Chromosome Doubling: Colchicine treatment doubles the complement to create an allohexaploid:\n  * Genome: **AABBRR**\n  * Chromosome Number: **2n = 6x = 42**\n- Agronomic Superiority: Hexaploid Triticale proved vastly superior to octoploid forms: higher fertility, more stable meiotic pairing, vigorous tillering, and excellent grain yield. Modern commercial cultivars worldwide (e.g., CIMMYT lines) are predominantly hexaploid Triticale.\n\n3. Major Cytogenetic Challenges Overcome by Breeders:\nEarly Triticale lines were unviable for commercial agriculture due to three severe genetic defects:\n- **Meiotic Instability and Univalent Lagging:** Rye chromosomes carry large blocks of terminal heterochromatin that replicate late in S-phase, delaying chromosome condensation and preventing proper pairing with wheat homologs, causing lagging and aneuploid gamete formation. Breeders selected for modified rye chromosomes lacking late-replicating telomeric heterochromatin.\n- **Grain Shrivelling and High Alpha-Amylase:** Premature synthesis of alpha-amylase in developing grain endosperm digested starch, causing severely pinched, shriveled kernels. Extensive selection for normal grain filling eliminated this defect.\n- **Pre-Harvest Sprouting and Tall Straw:** Introgressing dwarfing genes (*Rht*) from wheat and dormancy genes eliminated lodging and pre-harvest sprouting.\n\nToday, Triticale is grown on millions of hectares across Europe, North America, and Australia, serving as a high-protein livestock feed, forage crop, and specialized flour for baking.",
      "outlinePoints": [
        "Evolutionary rationale: combining wheat productivity with rye resilience and lysine",
        "Synthesis of Octoploid Triticale (AABBDDRR, 56) from bread wheat x rye",
        "Synthesis of Hexaploid Triticale (AABBRR, 42) from durum wheat x rye and its superiority",
        "Cytogenetic obstacles: late-replicating rye heterochromatin, meiotic instability, grain shrivelling",
        "Modern commercial status as high-yield feed, forage, and food grain"
      ]
    },
    {
      "id": "GPB203-U4-SUB11",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "questionText": "Compare the mechanisms of mutagenesis induced by Ionizing Radiation, Base Analogs (5-BU), and Acridine Dyes. Discuss their repair pathways: Photoreactivation, Nucleotide Excision Repair, and Error-Prone SOS Repair.",
      "modelAnswer": "Mutagenic agents operate through distinct biophysical and biochemical pathways to alter DNA structure, counterbalanced by cellular DNA repair networks.\n\n1. Comparison of Mutagenic Mechanisms:\n- **Ionizing Radiation (Gamma rays, X-rays):** High-energy radiation penetrates deep into tissues, ionizing water molecules to produce reactive oxygen species (ROS: hydroxyl free radicals *OH.*). These radicals attack the deoxyribose-phosphate backbone, generating single- and double-strand DNA breaks (DSBs). Misrepair of DSBs by Non-Homologous End Joining (NHEJ) causes large deletions, translocations, and chromosome fragmentation.\n- **Base Analogs (5-Bromouracil):** Possesses structural similarity to standard bases. 5-BU incorporates into DNA during replication in place of thymine (keto form). However, the bromine atom increases the probability of tautomeric shift into the rare enol form, which pairs with guanine instead of adenine. This triggers bidirectional transitions (*AT -> GC* or *GC -> AT*).\n- **Acridine Dyes (Proflavin, Acridine Orange):** Planar tricyclic aromatic molecules that intercalate between adjacent stacked base pairs. This increases the distance between adjacent bases from 3.4 \u00c5 to ~6.8 \u00c5, distorting the double helix. During replication, DNA polymerase stutters or slips, inserting or deleting single base pairs, resulting in **frameshift mutations**.\n\n2. Cellular DNA Repair Pathways:\nA. Photoreactivation (Direct Reversal):\n- Specific for repairing UV-induced cyclobutane pyrimidine dimers (CPDs).\n- The enzyme **DNA photolyase** binds directly to thymine dimers in the dark.\n- Upon absorbing blue light photons (300\u2013500 nm), the enzyme transfers an electron via its FADH- catalytic cofactor to the dimer, splitting the cyclobutane ring and restoring monomeric pyrimidines with 100% fidelity without cutting DNA.\n\nB. Nucleotide Excision Repair (NER) (Error-Free Excision):\n- Operates in the dark (Dark Repair) to remove bulky DNA lesions (UV dimers, chemical adducts).\n- Mechanism:\n  1. Damage Recognition: UvrA-UvrB complex scans DNA and identifies helix distortion.\n  2. Dual Incision: UvrC endonuclease cleaves the damaged strand several nucleotides upstream (8th phosphodiester bond) and downstream (4th or 5th bond) of the lesion.\n  3. Excision: UvrD (DNA helicase II) unwinds and removes the 12\u201313 nucleotide oligonucleotide.\n  4. Resynthesis and Ligation: DNA Polymerase I synthesizes replacement DNA using the undamaged complementary strand as a template; DNA ligase seals the nick.\n\nC. SOS Error-Prone Repair (Translesion Synthesis):\n- Induced under catastrophic, widespread DNA damage that arrests replication forks.\n- Mechanism: Single-stranded DNA coated with RecA activates auto-cleavage of the LexA repressor protein, derepressing ~40 SOS genes, including specialized translesion DNA polymerases (**Pol IV / DinB** and **Pol V / UmuD'2C**).\n- Pol V lacks 3'->5' proofreading activity and can replicate straight across non-coding thymine dimers or abasic sites by inserting random nucleotides.\n- Result: Prevents replication fork collapse and saves the cell from immediate death, but at the cost of introducing massive numbers of targeted and untargeted mutations throughout the genome.",
      "outlinePoints": [
        "Mechanisms of Ionizing Radiation (ROS, double-strand breaks, structural deletions)",
        "Mechanisms of Base Analogs (5-BU tautomerization and AT <-> GC transitions)",
        "Mechanisms of Acridine Dyes (intercalation and reading frame indels)",
        "Direct reversal via Photoreactivation (photolyase and blue light)",
        "Stepwise mechanism of Nucleotide Excision Repair (UvrABCD complex)",
        "SOS Error-Prone bypass via translesion DNA polymerases (Pol IV/V) and LexA derepression"
      ]
    },
    {
      "id": "GPB203-U4-SUB12",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)",
      "questionText": "Discuss the application of Induced Mutations in Crop Improvement (Mutation Breeding). Detail the step-by-step procedure for handling M1, M2, and M3 generations and cite successful mutant crop varieties developed in India.",
      "modelAnswer": "Mutation breeding involves the deliberate induction of genetic variability in crop plants using physical or chemical mutagens, followed by systematic selection for desirable agronomic traits (e.g., dwarfing, disease resistance, early maturity, altered grain quality).\n\n1. Step-by-Step Procedure of Mutation Breeding in Seed-Propagated Crops:\nA. Mutagen Treatment and M0 Generation:\n- Select pure-breeding, certified, genetically uniform seed of an elite cultivar that has high yield but lacks a specific desirable trait (e.g., susceptible to rust).\n- Establish the **LD50** (dosage causing 50% seed mortality) via pilot testing.\n- Treat dry seeds with the optimized dose of mutagen (e.g., 200\u2013300 Gy Gamma rays or 0.2\u20130.3% EMS for 6 hours).\n\nB. M1 Generation (First Mutagenized Generation):\n- Sow treated seeds in the field alongside untreated controls.\n- Characteristics: M1 plants exhibit physiological injury, reduced germination, and somatic mutations (chimeras).\n- Genetic Status: Because mutations are typically recessive and induced in single cells of the embryo, M1 plants are heterozygous and chimeric. Selection is NOT practiced in M1 (except for dominant traits).\n- Harvest: Self-pollinate M1 plants and harvest seeds from individual plants or main tillers separately (Plant-to-Row method).\n\nC. M2 Generation (Critical Segregating Generation):\n- Grow M2 progenies as plant-to-row families (30\u201350 plants per M1 row).\n- Genetic Status: Recessive induced mutations segregate into homozygous condition (*mm*) in a typical Mendelian 3:1 ratio.\n- Selection: Rigorous screening for target mutations (chlorophyll mutations, dwarf stature, early flowering, disease-resistant mutants under artificial epiphytotic conditions).\n- Desirable putative mutants are tagged, harvested individually, and advanced.\n\nD. M3 Generation (Confirmation and Stabilization):\n- Grow M3 plant rows from selected M2 mutant plants to confirm true-breeding behavior and eliminate segregating chimeras.\n- Conduct preliminary yield trials comparing mutants with the parental cultivar.\n\nE. M4 to M6 Generations (Multi-Location Testing and Release):\n- Advanced uniform mutant lines enter regional and national multi-environment trials (MET) for yield, quality, and adaptation.\n- Superior stable mutant lines are officially released as new commercial varieties.\n\n2. Prominent Landmark Mutant Crop Varieties Released in India:\nIndia is a global leader in mutation breeding (over 340 mutant varieties released through BARC and ICAR institutes):\n- **Sharbati Sonora (Wheat):** Gamma-ray induced amber grain mutant developed by Dr. M. S. Swaminathan from red-kerneled Mexican dwarf Sonora 64, highly acceptable for Indian chapati making.\n- **Pusa Lerma (Wheat):** Amber grain mutant derived from Lerma Rojo 64A.\n- **Jagannath (Rice):** Semi-dwarf, lodging-resistant gamma-ray mutant derived from tall indica rice T-141.\n- **TAU-1 (Blackgram / Urdbean):** Large-seeded, powdery mildew-resistant mutant developed by BARC, occupying vast acreage in Maharashtra.\n- **TAG-24 and TG-37A (Groundnut):** High-yielding, semi-dwarf, early-maturing mutants from BARC.\n- **Aruna (Castor):** Extremely early-maturing mutant (120 days vs 240 days in parental variety HC-6).",
      "outlinePoints": [
        "Definition, objective, and rationale of mutation breeding in elite crop backgrounds",
        "Establishing LD50 and mutagen application protocol",
        "M1 generation management: physiological damage, chimeras, and absence of selection",
        "M2 generation segregation and selection of homozygous recessive mutants",
        "M3 confirmation and multi-location testing through M6",
        "Exemplary Indian mutant varieties: Sharbati Sonora, Jagannath, TAU-1, TAG-24, Aruna"
      ]
    },
    {
      "id": "GPB203-U4-SUB13",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Medium",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "questionText": "Discuss Trisomics (2n + 1). Differentiate between Primary, Secondary, Tertiary, and Telocentric trisomics, and explain Albert F. Blakeslee's classic work on Datura stramonium fruit capsules.",
      "modelAnswer": "A trisomic individual possesses an entire extra chromosome added to its normal diploid complement (`2n + 1`), so that one of the chromosome pairs is represented by three homologous members instead of two.\n\n1. Classification of Trisomics (Based on the Structure of the Extra Chromosome):\n- **Primary Trisomics:**\n  * The extra chromosome is a completely normal, unaltered chromosome identical to one of the standard chromosomes of the species complement.\n  * Number of possible primary trisomics in a species = Haploid chromosome number (*n*).\n  * Meiotic Pairing: At pachytene, the three homologs form a trivalent (rod, ring, or frying-pan shape) or one bivalent plus one univalent.\n- **Secondary Trisomics:**\n  * The extra chromosome is an **isochromosome** (possessing two genetically identical arms attached to a single centromere, formed by transverse centromere misdivision).\n  * Number possible = *2n* (one for each chromosome arm).\n  * Meiotic Pairing: The isochromosome can pair with itself to form an internal ring univalent, or pair with normal homologs to form characteristic ring trivalents.\n- **Tertiary Trisomics:**\n  * The extra chromosome is a structurally translocated chromosome derived from reciprocal translocation between two non-homologous chromosomes. Its two arms belong to two different linkage groups.\n  * Meiotic Pairing: At pachytene, it pairs with four normal chromosomes to form pentavalent (five-chromosome) configurations.\n- **Telocentric Trisomics:**\n  * The extra chromosome is a telocentric chromosome (possessing only one complete chromosome arm with a terminal centromere).\n\n2. Albert F. Blakeslee's Classic Studies on Datura stramonium:\nBetween 1920 and 1934, Albert F. Blakeslee and John Belling conducted landmark cytogenetic investigations on the Jimson weed (*Datura stramonium*, 2n = 24, n = 12).\n- Because *Datura* has n = 12 chromosomes, Blakeslee isolated and characterized **all 12 possible primary trisomics (2n = 25)**, each representing an extra copy of a different chromosome.\n- Remarkably, each of the 12 primary trisomic lines exhibited a distinct, reproducible morphological alteration in the shape, spine size, and architecture of the fruit capsule (named *Globe, Poinsettia, Cocklebur, Echinus, Rolled, Buckling, Glossy*, etc.).\n- Blakeslee demonstrated that the *Globe* capsule was caused by trisomy of chromosome 11\u201312, *Poinsettia* by chromosome 1\u20132, etc.\n\n3. Genetic Significance:\nBlakeslee's *Datura* work proved that:\n- Individual chromosomes carry distinct sets of developmental genes.\n- An extra chromosome alters the physiological 'genic balance' of the entire genome, producing specific developmental syndromes.\n- Primary trisomics serve as invaluable tools for assigning newly discovered mutant genes to specific linkage groups based on modified F2 trisomic segregation ratios (yielding 8:1 or 35:1 ratios instead of 3:1).",
      "outlinePoints": [
        "Definition of trisomy (2n + 1) and meiotic trivalent formation",
        "Primary Trisomics: normal extra chromosome, number equals haploid number (n)",
        "Secondary Trisomics: extra isochromosome with identical arms",
        "Tertiary Trisomics: extra translocated chromosome, forming pentavalents",
        "Telocentric Trisomics: extra single-arm telocentric chromosome",
        "Blakeslee's 12 primary trisomics in Datura stramonium altering capsule architecture",
        "Genic balance concept and gene mapping utility via trisomic segregation"
      ]
    },
    {
      "id": "GPB203-U4-SUB14",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "questionText": "Discuss the evolutionary and functional significance of Chromosomal Duplications. Detail the Bar-Eye duplication in Drosophila melanogaster and explain how gene duplications provide raw material for evolutionary innovation (Susumu Ohno's hypothesis).",
      "modelAnswer": "Chromosomal duplication involves the presence of an extra chromosomal segment, resulting in the duplication of specific gene loci. Duplications are unique among structural aberrations because they add new genetic material rather than deleting or rearranging existing sequences.\n\n1. Types of Duplications:\n- **Tandem Duplication:** The duplicated segment is positioned immediately adjacent to the original segment in the same linear order (`A-B-C-D-E-F` -> `A-B-C-D-B-C-D-E-F`).\n- **Reverse Tandem Duplication:** The duplicated segment is adjacent but inverted in sequence (`A-B-C-D-D-C-B-E-F`).\n- **Displaced Duplication:** The extra segment is inserted elsewhere on the same chromosome arm or a different chromosome arm.\n- **Translocated Duplication:** The extra segment is incorporated into a non-homologous chromosome.\n\n2. The Classic Bar-Eye Duplication in Drosophila (Sturtevant & Bridges):\n- Normal wild-type *Drosophila* possess oval-shaped compound eyes containing ~800 ommatidia (facets).\n- In 1914, T. H. Morgan discovered the dominant X-linked mutant **Bar eye**, which narrows the eye into a vertical slit with only ~70 ommatidia.\n- In 1936, C. B. Bridges and A. H. Sturtevant examined polytene salivary gland chromosomes of Bar-eyed flies and discovered that the Bar phenotype is caused by a **tandem duplication of the 16A segment** on the X chromosome:\n  * Wild-type (*+*): One dose of 16A per chromosome (~800 facets).\n  * Heterozygous Bar (*B/+*): One chromosome with 16A and one with duplicate 16A-16A (~350 facets).\n  * Homozygous Bar (*B/B*): Both chromosomes carry duplicate 16A-16A (~70 facets).\n  * Double Bar (Ultra-Bar, *BD/B*): Resulting from unequal crossing over during meiosis, one chromosome carries three tandem copies (16A-16A-16A), reducing eye facets to ~45.\n- This proved that gene duplication causes position effects, where the physical proximity of duplicated genes alters phenotypic expression.\n\n3. Evolutionary Significance \u2014 Susumu Ohno's Hypothesis (1970):\nIn his seminal book *Evolution by Gene Duplication*, Susumu Ohno argued that natural selection is fundamentally conservative: an organism cannot mutate an essential single-copy gene without risking catastrophic loss of fitness or death.\n- Gene duplication creates genetic redundancy:\n  * One copy maintains the original essential enzymatic function, preserving organismal viability.\n  * The second 'spare' duplicate copy is relieved from selective pressure. It can accumulate mutations freely over millions of years.\n- Evolutionary Outcomes of Duplicated Genes:\n  1. **Neofunctionalization:** The duplicate accumulates mutations that confer an entirely novel, beneficial enzymatic activity (e.g., evolution of visual opsins, leghemoglobin, antifreeze proteins in Arctic fish).\n  2. **Subfunctionalization:** The original gene had multiple regulatory functions; the duplicate and parent gene partition these ancestral sub-functions between them (e.g., tissue-specific expression).\n  3. **Pseudogenization:** The duplicate accumulates deleterious nonsense/frameshift mutations, becoming a silent, non-functional pseudogene.\n- Multigene Families: Gene duplications gave rise to the globin gene superfamily (alpha- and beta-globins), rRNA gene clusters, and plant disease-resistance (*NBS-LRR*) gene clusters.",
      "outlinePoints": [
        "Classification of duplications: tandem, reverse tandem, displaced, translocated",
        "Sturtevant and Bridges' discovery of Bar eye as tandem duplication of 16A region",
        "Phenotypic manifestation across wild-type, Bar, and Double-Bar via unequal crossing over",
        "Position effect concept in gene duplication",
        "Susumu Ohno's hypothesis: gene redundancy providing raw material for evolutionary innovation",
        "Three evolutionary fates: Neofunctionalization, Subfunctionalization, Pseudogenization"
      ]
    },
    {
      "id": "GPB203-U4-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications",
      "questionText": "Compare Autopolyploidy with Allopolyploidy in crop plants.",
      "modelAnswer": "Autopolyploidy and Allopolyploidy represent two fundamentally distinct forms of whole-genome duplication in plants:\n\n1. Origin of Chromosome Sets:\n- Autopolyploidy: Arises from the duplication of complete chromosome sets derived from the **same single species** (e.g., *AAAA* autotetraploid).\n- Allopolyploidy: Arises from the hybridization between **two or more distinct species**, followed by chromosome doubling of the hybrid (amphidiploidy, e.g., *AABB*).\n\n2. Meiotic Chromosome Pairing:\n- Autopolyploidy: Because all chromosome sets are identical (homologous), chromosomes form complex **multivalents** (quadrivalents, trivalents) during meiotic prophase I.\n- Allopolyploidy: Forms strictly **bivalents** (diploid-like pairing) because each chromosome finds its identical homolog (*A* pairs with *A*, *B* pairs with *B*), suppressed by pairing regulators like the *Ph1* gene.\n\n3. Fertility and Seed Production:\n- Autopolyploidy: Low fertility or high sterility due to irregular multivalent disjunction at Anaphase I, producing aneuploid gametes. Highly advantageous for seedless fruit crops (e.g., triploid banana, seedless watermelon).\n- Allopolyploidy: Highly fertile with regular disjunction and abundant seed set. Ideal for grain and seed crops.\n\n4. Morphological Characteristics:\n- Autopolyploidy: Displays the **gigas effect**: enlarged cells, thicker leaves, larger flowers, and plumper seeds, but often delayed flowering and slower growth.\n- Allopolyploidy: Combines morphological, agronomic, and adaptive traits of both divergent parental species (e.g., wheat yield + rye disease resistance in Triticale).\n\n5. Representative Agricultural Examples:\n- Autopolyploidy: Triploid watermelon (3x), triploid banana (3x), autotetraploid potato (*Solanum tuberosum*, 4x), alfalfa (4x).\n- Allopolyploidy: Bread wheat (*Triticum aestivum*, 6x), upland cotton (*Gossypium hirsutum*, 4x), Indian mustard (*Brassica juncea*, 4x), Triticale (6x, 8x).",
      "outlinePoints": [
        "Origin: single species (homologous) vs interspecific hybridization (homeologous)",
        "Meiotic pairing: irregular multivalents vs regular bivalents",
        "Fertility: high sterility/seedlessness vs high fertility/seed production",
        "Phenotypic effect: gigas effect vs combination of parental traits",
        "Crop examples for each category"
      ]
    },
    {
      "id": "GPB203-U4-SUB16",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "questionText": "Differentiate between Paracentric Inversion and Pericentric Inversion.",
      "modelAnswer": "Inversions are intrachromosomal structural rearrangements classified by the inclusion or exclusion of the centromere:\n\n1. Position Relative to the Centromere:\n- Paracentric Inversion: The inverted segment lies entirely within one chromosome arm; it **does NOT include the centromere**.\n- Pericentric Inversion: The inverted segment spans both chromosome arms; it **INCLUDES the centromere**.\n\n2. Impact on Chromosome Arm Ratio and Morphology:\n- Paracentric: Both breakpoints occur on the same side of the centromere; thus, it **never alters the arm ratio** or morphological classification (metacentric remains metacentric).\n- Pericentric: Breakpoints occur on opposite sides of the centromere at unequal distances; thus, it **often alters the arm ratio** and changes chromosome morphology (e.g., converting a metacentric chromosome into an acrocentric or submetacentric chromosome).\n\n3. Meiotic Crossing Over Products inside Inversion Loop:\n- Paracentric Inversion: A single crossover inside the loop produces:\n  * One normal monocentric chromatid.\n  * One inverted monocentric chromatid.\n  * One **Dicentric Chromatid** (two centromeres), forming a stretched dicentric bridge at Anaphase I.\n  * One **Acentric Fragment** (zero centromeres), which is lost.\n- Pericentric Inversion: A single crossover inside the loop produces:\n  * One normal monocentric chromatid.\n  * One inverted monocentric chromatid.\n  * Two monocentric chromatids carrying **large duplications and terminal deletions**. No dicentric bridge or acentric fragment is formed.\n\n4. Gametic Consequences:\n- In both types, recombinant gametes are inviable due to mechanical breakage or massive genic imbalance. Only non-recombinant gametes survive, making both act as apparent crossover suppressors.",
      "outlinePoints": [
        "Centromere involvement: excluded (paracentric) vs included (pericentric)",
        "Morphological impact: no change in arm ratio vs frequent alteration of centromere position",
        "Meiotic crossover products: dicentric bridge + acentric fragment vs duplicated/deleted monocentrics",
        "Common consequence: recombinant lethality acting as crossover suppressors"
      ]
    },
    {
      "id": "GPB203-U4-SUB17",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "questionText": "Compare Aneuploidy with Euploidy.",
      "modelAnswer": "Numerical chromosomal variations alter chromosome numbers via two distinct biological modes:\n\n1. Definition and Nature of Change:\n- Aneuploidy: The numerical change involves **one or a few individual chromosomes** within a set, resulting in an unbalanced chromosomal complement (`2n +/- x`).\n- Euploidy: The numerical change involves **entire complete sets of chromosomes** (multiples of the basic monoploid chromosome number *x*), resulting in a balanced chromosomal complement (`n, 2n, 3n, 4n, 6n`).\n\n2. Etiology and Cytological Mechanism:\n- Aneuploidy: Caused primarily by **meiotic non-disjunction** (failure of homologous chromosomes to separate at Anaphase I, or sister chromatids to separate at Anaphase II) or chromosome lagging.\n- Euploidy: Caused by **failure of cytokinesis / spindle failure** during mitosis (endoreduplication), polyspermy, or fusion of unreduced (2n) gametes.\n\n3. Genetic Balance and Organismal Viability:\n- Aneuploidy: Causes severe **gene dosage imbalance** because specific individual chromosomes are over- or under-represented. In animals, it is almost universally lethal in embryos (except Trisomy 21 and sex chromosome aneuploidies). In plants, it causes morphological deformities.\n- Euploidy: Maintains proportional **genic balance** because all genes across all chromosomes are multiplied in equal ratios. Highly tolerated in plants, driving evolution and vigor (gigas effect).\n\n4. Major Subclasses and Formulas:\n- Aneuploidy:\n  * Hypoploidy (loss): Monosomy (`2n - 1`), Nullisomy (`2n - 2`).\n  * Hyperploidy (gain): Trisomy (`2n + 1`), Tetrasomy (`2n + 2`).\n- Euploidy: Monoploidy (`1x`), Diploidy (`2x`), Triploidy (`3x`), Tetraploidy (`4x`), Hexaploidy (`6x`).\n\n5. Evolutionary Role:\n- Aneuploidy: Useful for laboratory gene mapping (monosomics, trisomics); rarely drives speciation.\n- Euploidy (Polyploidy): Major evolutionary engine in flowering plants (angiosperms); over 70% of crop plants are paleopolyploids or neopolyploids.",
      "outlinePoints": [
        "Definition: change in individual chromosomes (2n +/- x) vs complete genome sets (multiples of x)",
        "Mechanism: meiotic non-disjunction/lagging vs spindle failure/unreduced gametes",
        "Genic balance: severe dosage imbalance vs conserved proportional balance",
        "Subclasses and formulas for each category",
        "Evolutionary significance in angiosperm speciation"
      ]
    },
    {
      "id": "GPB203-U4-SUB18",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy",
      "questionText": "In hexaploid bread wheat (Triticum aestivum, 2n = 6x = 42), a breeder identifies a recessive chlorotic seedling mutant (ch). To determine which chromosome carries the ch gene, the mutant is crossed as male parent with the 21 monosomic lines of Chinese Spring (2n = 41). (a) In Cross A (Monosomic Chromosome 3A x mutant), the F1 monosomic plants are all normal green. When selfed, the F2 segregates in a 3 green : 1 chlorotic ratio. (b) In Cross B (Monosomic Chromosome 5B x mutant), all F1 monosomic plants exhibit chlorotic seedlings immediately. When selfed, the F2 yields 97% chlorotic plants. Explain the genetic mechanism of both crosses and identify the chromosome carrying the ch gene.",
      "modelAnswer": "Analysis of Monosomic Gene Mapping in Hexaploid Wheat:\n\nGiven:\n- Normal dominant wild-type allele = *Ch* (Green seedlings)\n- Recessive mutant allele = *ch* (Chlorotic seedlings)\n- Male mutant parent is disomic homozygous recessive: *ch ch* (2n = 42). It contributes a normal haploid gamete carrying *ch* (n = 21) across all crosses.\n- Chinese Spring female monosomic lines have 2n = 41 (20 bivalents + 1 univalent: *20'' + 1'*). During female meiosis, the univalent chromosome is included in 75% of functional megaspores (*n = 21, Ch*) and lost in 25% of megaspores (*n = 20, nullisomic for that chromosome*).\n\n(a) Analysis of Cross A (Monosomic Chromosome 3A x mutant ch ch):\n1. F1 Generation:\n- The monosomic F1 plants (2n = 41) receive:\n  * An *n = 20* gamete lacking Chromosome 3A from Chinese Spring.\n  * An *n = 21* gamete from the mutant parent carrying Chromosome 3A with wild-type *Ch* (because the mutation is NOT on Chromosome 3A, Chromosome 3A carries normal wild-type alleles).\n- Therefore, the single dose of Chromosome 3A is *Ch*.\n- Phenotype: All F1 monosomic plants are **Normal Green**.\n2. F2 Generation:\nBecause Chromosome 3A does not carry the *ch* gene, the *ch* locus resides on an unrelated disomic chromosome that undergoes standard Mendelian segregation:\n- The disomic F1 plants (*Ch ch*) self-pollinate to produce a classical **3 Green (*Ch-*) : 1 Chlorotic (*ch ch*)** F2 phenotypic ratio.\nConclusion for Cross A: Chromosome 3A is a **non-critical chromosome**; the *ch* gene does NOT reside on Chromosome 3A.\n\n(b) Analysis of Cross B (Monosomic Chromosome 5B x mutant ch ch):\n1. F1 Generation:\n- Chinese Spring Monosomic 5B produces two types of female gametes:\n  * (n = 21) carrying Chromosome 5B with the wild-type dominant allele *Ch*.\n  * (n = 20) completely lacking Chromosome 5B (nullisomic for 5B).\n- When fertilized by pollen carrying the mutant allele (*ch* on Chromosome 5B):\n  * Disomic F1 zygotes (2n = 42): Genotype *Ch ch* -> Green phenotype.\n  * Monosomic F1 zygotes (2n = 41): Receive *ch* from the father and ZERO copies of Chromosome 5B from Chinese Spring. Genotype = *ch* (Hemizygous).\n- **Phenotypic Manifestation:** Because there is no dominant *Ch* allele to mask it, the single recessive *ch* allele expresses itself immediately (**Pseudodominance**). All F1 monosomic plants develop **Chlorotic Seedlings**!\n\n2. F2 Generation:\nWhen the hemizygous F1 monosomic plant (*ch*) is self-pollinated:\n- Female gametes: 75% are *n = 21 (ch)* and 25% are *n = 20 (nulli-5B)*.\n- Male pollen: Due to severe certation (pollen competition), *n = 20* pollen grains are non-competitive; over 96\u201399% of functioning pollen is *n = 21 (ch)*.\n- Fertilization combinations:\n  * 75% *ch ch* (Disomic Chlorotic)\n  * ~22% *ch* (Monosomic Chlorotic)\n  * ~3% (Nullisomic Chlorotic or Inviable)\n- Result: **~97% of the F2 progeny exhibit chlorotic seedlings!**\n\nFinal Conclusion:\nThe immediate unmasking of the recessive chlorotic trait in F1 monosomics and the extreme non-Mendelian distortion in F2 (~97% chlorotic) conclusively proves that the **ch gene resides on Chromosome 5B**.",
      "outlinePoints": [
        "Genotype setup of Chinese Spring monosomic females and homozygous recessive mutant male",
        "Analysis of Cross A showing non-critical status: normal green F1 and Mendelian 3:1 F2 segregation",
        "Analysis of Cross B showing critical status: immediate F1 pseudodominance (chlorotic phenotype)",
        "Pollen certation dynamics in wheat explaining the ~97% chlorotic F2 frequency",
        "Definitive chromosomal assignment of the ch gene to Chromosome 5B"
      ]
    },
    {
      "id": "GPB203-U4-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)",
      "questionText": "A plant breeder aims to induce resistance to Yellow Vein Mosaic Virus (YVMV) in an elite high-yielding okra (Abelmoschus esculentus) variety using Gamma-ray mutagenesis. (a) Design a comprehensive mutation breeding protocol from M0 to M4 generations. (b) Explain how the LD50 value is determined and why over-irradiation is detrimental. (c) Detail the screening methodology to identify true YVMV-resistant mutants under field epiphytotic conditions.",
      "modelAnswer": "Comprehensive Mutation Breeding Program in Okra for YVMV Resistance:\n\n(a) Step-by-Step Protocol (M0 to M4 Generations):\n\n1. M0 Treatment and Dosimetry:\n- Obtain pure, certified seed (10,000 seeds) of the elite susceptible okra cultivar.\n- Moisture Conditioning: Equilibrate seed moisture content to 10\u201312% (critical because moisture influences free radical production).\n- Gamma Irradiation: Expose seeds to the optimized LD50 dose of Gamma rays (typically 300\u2013400 Gy from a 60Co source).\n\n2. M1 Generation:\n- Field Planting: Sow the 10,000 irradiated seeds alongside 1,000 untreated controls under wide spacing (60 x 30 cm) with optimal irrigation and agronomy.\n- Observation: Record germination percentage, seedling injury (shoot/root reduction), and pollen fertility.\n- Elimination of Chimeras: Do NOT select for disease resistance in M1. Allow natural self-pollination.\n- Harvest: Harvest 3\u20135 pods individually from the main shoot of each surviving M1 plant (harvesting ~3,000 fertile M1 plants).\n\n3. M2 Generation (Critical Screening Generation):\n- Sowing: Plant seeds in a **Plant-to-Row format** (e.g., 3,000 M1 family rows, with 30 plants per row = 90,000 M2 plants).\n- Field Epiphytotic Setup (see section c below) to maximize virus pressure.\n- Screening: Monitor plants weekly from 30 days after sowing. Tag any plant displaying complete absence of vein clearing or mosaic symptoms.\n- Harvest: Harvest seeds from confirmed resistant M2 plants individually.\n\n4. M3 Generation (Confirmation and Progeny Testing):\n- Plant selected M2 candidate mutants as M3 plant-to-row progenies alongside susceptible controls.\n- Confirm that 100% of plants in the row remain resistant (proving homozygosity). Discard segregating rows.\n- Evaluate horticultural attributes: pod length, ridges, color, mucilage, and yield potential.\n\n5. M4 Generation:\n- Replicated preliminary yield trials (PYT) to ensure the mutant line matches or exceeds the parental yield.\n\n(b) Determination of LD50 and Risks of Over-Irradiation:\n- Determination: Treat batches of 100 seeds with progressive gamma-ray doses (100, 200, 300, 400, 500, 600, 700 Gy). Measure germination percentage and seedling height at 15 days. Plot a dose-response curve. The dose that causes exactly 50% reduction in germination or survival relative to the untreated control is the **LD50 (Lethal Dose 50%)**.\n- Why Over-Irradiation is Detrimental: Doses well above LD50 produce excessive double-strand DNA breaks, chromosomal fragmentation, and multi-locus deletions. This causes severe physiological damage, sterility, embryo abortion, multiple background deleterious mutations, and near-zero seed set, eliminating breeding utility.\n\n(c) Epiphytotic Screening Methodology for YVMV Resistance:\nYellow Vein Mosaic Virus (a monopartite begomovirus) is transmitted by the whitefly (*Bemisia tabaci*).\n1. Infector Row Strategy:\n- Plant a highly susceptible spreader/infector okra line (e.g., Pusa Sawani) as border rows and every 5th row throughout the experimental field.\n- Release laboratory-reared, viruliferous whiteflies (*Bemisia tabaci*) uniformly across the field to ensure 100% disease pressure.\n2. Elimination of Escapes:\n- Any plant remaining green must be verified to prevent disease 'escapes' (plants that avoided whitefly feeding).\n- Challenge candidate resistant plants using **Graft Inoculation** (side-cleft grafting of infected scions) or **whitefly clip-cage inoculations** under controlled glasshouse conditions.\n- Perform PCR/ELISA using begomovirus coat protein primers to verify that symptomless plants restrict viral replication.",
      "outlinePoints": [
        "M0 treatment: seed moisture stabilization and 60Co gamma irradiation at LD50",
        "M1 generation management: somatic chimeras, single-plant harvesting",
        "M2 generation plant-to-row sowing and high-throughput field screening",
        "M3 and M4 confirmation of homozygous resistance and yield trial evaluation",
        "Determination of LD50 curve and hazards of excessive irradiation",
        "Epiphytotic infector row design, viruliferous whitefly release, and PCR/graft verification"
      ]
    },
    {
      "id": "GPB203-U4-SUB20",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations",
      "contextScenario": "A commercial maize inbred line exhibits unexpected 50% pollen abortion (semisterility) and 50% defective ovules across multiple seed production seasons. Cytogenetic squashes of pollen mother cells at meiotic pachytene reveal a prominent four-chromosome cross-shaped configuration. At Metaphase I, chromosomes orient in both ring quadrivalent and figure-eight configurations. Anaphase I reveals no dicentric bridges or acentric fragments. When this inbred line is outcrossed to a standard tester line, exactly half the progeny are semisterile and half are fully fertile.",
      "questionText": "Analyze the cytogenetic case study above. (a) Identify the structural chromosomal aberration responsible for the observed abnormalities. (b) Explain why a cross-shaped configuration forms at pachytene. (c) Explain the difference between Alternate and Adjacent-1 segregation and explain why semisterility occurs. (d) Describe how a plant breeder can utilize this translocation breakpoint to link an unmapped marker to a specific chromosome.",
      "modelAnswer": "Case Study Analysis \u2014 Reciprocal Translocation Heterozygosity in Maize:\n\n(a) Identification of the Structural Aberration:\nThe inbred line carries a **Heterozygous Reciprocal Translocation (Interchange Heterozygote)** involving two non-homologous chromosomes.\nKey diagnostic cytogenetic proof from the case facts:\n- Presence of a four-chromosome cross-shaped multivalent at pachytene.\n- Metaphase I quadrivalent rings and figure-eight configurations.\n- Complete absence of dicentric bridges or acentric fragments (ruling out paracentric inversions).\n- Constant 50% pollen and ovule semisterility segregating in 1:1 ratio in outcrosses.\n\n(b) Mechanism of the Pachytene Cross-Shaped Configuration:\nIn a reciprocal translocation, two non-homologous chromosomes (e.g., Chromosome 1 with segments `1a-1b` and Chromosome 2 with segments `2a-2b`) exchange terminal pieces, creating two translocated chromosomes: `T1 (1a-2b)` and `T2 (2a-1b)`.\nIn a translocation heterozygote, four chromosomes must pair: two normal homologs (`N1, N2`) and two translocated homologs (`T1, T2`).\n- Chromosome synapsis in meiosis requires precise, homologous, locus-by-locus alignment.\n- Segment `1a` of N1 pairs with `1a` of T1; segment `1b` of N1 pairs with `1b` of T2.\n- Segment `2a` of N2 pairs with `2a` of T2; segment `2b` of N2 pairs with `2b` of T1.\nTo accommodate this four-way homologous matching, the four chromosomes are forced into a characteristic **four-armed cross-shaped quadrivalent configuration**.\n\n(c) Segregation Patterns and Origin of 50% Semisterility:\nAt Metaphase I and Anaphase I, the cross quadrivalent disjoins via two equally probable pathways:\n1. **Alternate Segregation (Forms Figure-Eight / Ring):**\n   - Diagonally opposite chromosomes move to the same pole (`N1 + N2` to Pole 1, and `T1 + T2` to Pole 2).\n   - Gametes receive either both normal chromosomes or both translocated chromosomes.\n   - Every gamete contains a complete, balanced single complement of all genes (no genes missing, none duplicated).\n   - Gametic outcome: **100% Viable and Fertile**.\n2. **Adjacent-1 Segregation (Forms Open Ring):**\n   - Adjacent non-homologous chromosomes move to the same pole (`N1 + T2` to Pole 1, and `N2 + T1` to Pole 2).\n   - Gametes receive severe chromosomal duplications (e.g., two copies of segment 1a) and fatal deletions (complete absence of segment 1b).\n   - In plants, gametophytic gene expression is vital for pollen tube germination and embryo sac development. These massive genic imbalances cause gametophytic death.\n   - Gametic outcome: **100% Inviable/Aborted**.\nBecause Alternate and Adjacent-1 orientations occur with equal 50% probability across millions of meiocytes, exactly **50% of pollen and 50% of ovules abort (Semisterility)**.\n\n(d) Breeding Utilization for Chromosome Mapping (Translocation Breakpoint Mapping):\nTranslocation breakpoints serve as fixed, visible cytogenetic physical markers:\n- The translocation breakpoint behaves as a single dominant genetic locus that confers semisterility (phenotype: 50% aborted pollen, easily scored under a field microscope).\n- The breeder crosses the unmapped mutant line (*m m*) with a known translocation stock carrying semisterility (*T*).\n- If the unmapped gene resides on either of the two chromosomes involved in the translocation, it will show **genetic linkage with the semisterility trait** (deviation from the unlinked 1:1:1:1 testcross ratio).\n- By testing the unmapped gene against a set of known translocation tester stocks (such as E. B. Longley's maize translocation series), the breeder rapidly identifies the exact chromosome and physical arm location of the unknown gene.",
      "outlinePoints": [
        "Definitive diagnosis of Reciprocal Translocation Heterozygote based on quadrivalent and semisterility",
        "Cytological mechanism of homologous pachytene synapsis forcing a 4-armed cross figure",
        "Comparison of Alternate (balanced, viable) vs Adjacent-1 (duplicated/deficient, lethal) segregation",
        "Explanation of 50% semisterility resulting from equal 50:50 orientation probability",
        "Methodology of using semisterility and translocation breakpoints for physical chromosome mapping"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "GPB203-U4-FC01",
      "front": "What is a Transition mutation?",
      "back": "A base substitution replacing a purine with another purine (A <-> G) or a pyrimidine with another pyrimidine (C <-> T).",
      "hint": "Chemical ring structure is preserved.",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)"
    },
    {
      "id": "GPB203-U4-FC02",
      "front": "What is a Transversion mutation?",
      "back": "A base substitution replacing a purine with a pyrimidine or vice versa (e.g., A <-> C, A <-> T, G <-> C, G <-> T).",
      "hint": "Chemical ring structure is inverted (8 possible types).",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)"
    },
    {
      "id": "GPB203-U4-FC03",
      "front": "What is a Nonsense mutation?",
      "back": "A point mutation that converts an amino acid codon into a premature stop codon (UAA, UAG, UGA), terminating translation.",
      "hint": "Produces truncated non-functional proteins.",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)"
    },
    {
      "id": "GPB203-U4-FC04",
      "front": "What is a Frameshift mutation?",
      "back": "An insertion or deletion of a number of nucleotides not divisible by three, disrupting the triplet reading frame downstream.",
      "hint": "Often induced by intercalating acridine dyes.",
      "syllabusTopic": "Spontaneous versus induced mutations and molecular classification (Transitions, Transversions, Frameshifts)"
    },
    {
      "id": "GPB203-U4-FC05",
      "front": "Who discovered artificial mutagenesis using X-rays?",
      "back": "H. J. Muller in 1927 in Drosophila melanogaster using his C1B technique (Nobel Prize 1946).",
      "hint": "American geneticist.",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)"
    },
    {
      "id": "GPB203-U4-FC06",
      "front": "How does Ethyl Methanesulfonate (EMS) induce mutations?",
      "back": "EMS alkylates guanine at O6 to form O6-ethylguanine, which mispairs with thymine, inducing GC -> AT transitions.",
      "hint": "Most widely used chemical mutagen in plant breeding.",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)"
    },
    {
      "id": "GPB203-U4-FC07",
      "front": "What is 5-Bromouracil (5-BU)?",
      "back": "A base analog of thymine whose rare enol tautomer pairs with guanine, inducing bidirectional AT <-> GC transitions.",
      "hint": "Bromine replaces the 5-methyl group.",
      "syllabusTopic": "Physical mutagens (Ionizing and Non-ionizing radiation) and Chemical mutagens (Alkylating agents, Base analogs, Acridines)"
    },
    {
      "id": "GPB203-U4-FC08",
      "front": "What is Pseudodominance?",
      "back": "The phenotypic expression of a recessive allele caused by the deletion of the corresponding dominant allele on the homolog.",
      "hint": "Unmasking of recessive alleles in deletion heterozygotes.",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations"
    },
    {
      "id": "GPB203-U4-FC09",
      "front": "What causes the Bar-eye phenotype in Drosophila?",
      "back": "A tandem duplication of the 16A region on the X-chromosome (discovered by Bridges and Sturtevant).",
      "hint": "Example of unequal crossing over and position effect.",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations"
    },
    {
      "id": "GPB203-U4-FC10",
      "front": "What is a Paracentric Inversion?",
      "back": "An inversion that does NOT include the centromere; crossovers inside the loop yield a dicentric bridge and acentric fragment.",
      "hint": "Confined to a single chromosome arm.",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations"
    },
    {
      "id": "GPB203-U4-FC11",
      "front": "What is a Pericentric Inversion?",
      "back": "An inversion that INCLUDES the centromere; crossovers yield monocentric chromatids with duplications and deletions.",
      "hint": "Can alter chromosome arm ratios.",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations"
    },
    {
      "id": "GPB203-U4-FC12",
      "front": "What pairing structure forms in a Reciprocal Translocation heterozygote?",
      "back": "A characteristic cross-shaped quadrivalent configuration involving four chromosomes at pachytene.",
      "hint": "Exhibits 50% pollen/ovule semisterility.",
      "syllabusTopic": "Structural chromosomal aberrations: Deletions, Duplications, Inversions, and Translocations"
    },
    {
      "id": "GPB203-U4-FC13",
      "front": "What is Monosomy (2n - 1)?",
      "back": "Loss of a single chromosome from the diploid set (e.g., Sears' 21 Chinese Spring wheat monosomic series, 2n = 41).",
      "hint": "Human example: Turner syndrome (45,X).",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy"
    },
    {
      "id": "GPB203-U4-FC14",
      "front": "What is Trisomy (2n + 1)?",
      "back": "Addition of an extra chromosome to the diploid complement (e.g., Blakeslee's 12 Datura capsule mutants; Down syndrome 47,+21).",
      "hint": "Forms trivalents in meiosis.",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy"
    },
    {
      "id": "GPB203-U4-FC15",
      "front": "What is Nullisomy (2n - 2)?",
      "back": "Loss of an entire homologous pair of chromosomes; lethal in diploids but viable in allopolyploids like hexaploid wheat (2n = 40).",
      "hint": "Homeologous chromosomes compensate.",
      "syllabusTopic": "Numerical chromosomal variations: Aneuploidy (Monosomics, Trisomics, Nullisomics) and Euploidy"
    },
    {
      "id": "GPB203-U4-FC16",
      "front": "What is Colchicine and how does it act?",
      "back": "An alkaloid from Colchicum autumnale that depolymerizes spindle microtubules, arresting mitosis at C-metaphase to double chromosomes.",
      "hint": "Spindle poison used for polyploidy induction.",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications"
    },
    {
      "id": "GPB203-U4-FC17",
      "front": "Why are commercial triploid watermelons seedless?",
      "back": "Trivalent pairing and unequal 2:1 chromosome disjunction in triploids (3x = 33) generate aneuploid inviable gametes that abort.",
      "hint": "Requires diploid pollenizer rows for fruit set.",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications"
    },
    {
      "id": "GPB203-U4-FC18",
      "front": "What is Triticale?",
      "back": "The first man-made cereal, an allopolyploid synthesized by crossing wheat (Triticum) x rye (Secale) followed by colchicine doubling.",
      "hint": "Hexaploid (AABBRR, 42) and Octoploid (AABBDDRR, 56).",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications"
    },
    {
      "id": "GPB203-U4-FC19",
      "front": "What are the six species in U's Triangle?",
      "back": "Diploids: B. rapa (AA, 20), B. nigra (BB, 16), B. oleracea (CC, 18). Amphidiploids: B. juncea (AABB, 36), B. napus (AACC, 38), B. carinata (BBCC, 34).",
      "hint": "Nagaharu U (1935) Brassica relationships.",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications"
    },
    {
      "id": "GPB203-U4-FC20",
      "front": "What is the Ph1 gene in hexaploid wheat?",
      "back": "Pairing homoeologous 1 gene on Chromosome 5B that suppresses pairing between homeologs, ensuring strict diploid-like bivalent pairing.",
      "hint": "Ensures meiotic stability in allohexaploid wheat.",
      "syllabusTopic": "Polyploidy in crop evolution: Autopolyploidy, Allopolyploidy, Synthesis of Triticale, and Crop Improvement Applications"
    }
  ]
};
