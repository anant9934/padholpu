import json

def generate_index():
    metadata = {
        "code": "PTH215",
        "name": "Biopesticides and Biofertilizers in Plant Disease Management",
        "programmeCode": "BSC-AGRI",
        "programmeName": "B.Sc. (Hons.) Agriculture",
        "semester": 3,
        "credits": 2,
        "ltp": "L: 1 | T: 0 | P: 2",
        "courseCategory": "Skill Enhancement",
        "syllabusPdfUrl": "/PTH215_Syllabus.pdf",
        "overview": "Biopesticides and Biofertilizers in Plant Disease Management provides theoretical foundation and practical training in non-synthetic, ecologically sustainable disease suppression and biological nutrient mobilization. Students master the biology, genetics, mass production, quality control, formulation science, and field deployment of bacterial biocontrol agents (Pseudomonas fluorescens, Bacillus subtilis, Streptomyces), fungal hyperparasites (Trichoderma harzianum, Pochonia chlamydosporia, Ampelomyces quisqualis), biological nitrogen fixers (Rhizobium, Azospirillum, Azotobacter), phosphate solubilizers (PSB/PSM), and Arbuscular Mycorrhizal Fungi (AMF). The course covers the Indian regulatory framework under CIB&RC and FCO, empowering students to design bio-intensive Integrated Disease Management (IDM) and Integrated Nutrient Management (INM) systems.",
        "courseOutcomes": [
            {
                "code": "CO1",
                "title": "Disease Concepts, Epidemiology & Biopesticide Regulations",
                "description": "Deconstruct plant disease causation, disease triangle interactions, principles of plant pathology (avoidance, exclusion, eradication, protection, resistance), and evaluate the advantages of biopesticides over synthetic fungicides within the CIB&RC statutory framework."
            },
            {
                "code": "CO2",
                "title": "Bacterial Antagonists & Plant Growth-Promoting Rhizobacteria (PGPR)",
                "description": "Analyze the biocontrol modalities of Pseudomonas fluorescens (pyoverdine siderophores, 2,4-DAPG, PCA, ISR) and Bacillus subtilis (cyclic lipopeptides, endospore resilience), characterizing direct and indirect PGPR mechanisms and industrial submerged fermentation."
            },
            {
                "code": "CO3",
                "title": "Fungal Biocontrol Agents & Hyperparasitic Systems",
                "description": "Characterize the sequential mycoparasitic cascade of Trichoderma spp. (chemotaxis, lectin docking, coiling, appressoria, CWDE lysis), analyze bioactive metabolites (peptaibols, 6-PAP, gliovirin), evaluate specialized hyperparasites (Pochonia chlamydosporia, Ampelomyces quisqualis), and master solid-state fermentation on agro-wastes."
            },
            {
                "code": "CO4",
                "title": "Biofertilizers & Mycorrhizal Disease Suppression",
                "description": "Synthesize the biology and applications of biological nitrogen fixers (Rhizobium CIG, Azospirillum, Azotobacter), phosphate-solubilizing microorganisms (gluconic acid chelation, phosphatases), and Arbuscular Mycorrhizal Fungi (arbuscules, vesicles, glomalin, Mycorrhiza-Induced Resistance) integrated into INM frameworks."
            },
            {
                "code": "CO5",
                "title": "Commercial Bio-Manufacturing, Statutory QC & IDM Integration",
                "description": "Formulate commercial biocontrol products (300-mesh talc WP, liquid SC with osmoprotectants), audit statutory quality benchmarks (CFU counts, moisture, zero human pathogens, dual-culture potency tests), navigate CIB&RC Section 9(3B) and 9(3) registration, and design field-validated IDM delivery schedules."
            }
        ],
        "gradingStructure": [
            {
                "component": "Continuous Assessment (CA) Theory",
                "weightage": "20%",
                "marks": "30 Marks (Best 2 of 3)",
                "details": "Continuous written tests evaluating biological control mechanisms, biofertilizer biochemistry, formulation engineering, and IDM scheduling."
            },
            {
                "component": "Mid-Term Examination (MTE)",
                "weightage": "20%",
                "marks": "40 Marks",
                "details": "University mid-term theory examination covering Units 1, 2, and 3, focusing on disease principles, bacterial biocontrol, and Trichoderma mycoparasitism."
            },
            {
                "component": "End-Term Examination (ETE) Theory",
                "weightage": "30%",
                "marks": "50 Marks",
                "details": "Comprehensive university end-term examination covering all five units of the PTH215 syllabus."
            },
            {
                "component": "Practical Examination & Continuous Evaluation",
                "weightage": "30%",
                "marks": "50 Marks",
                "details": "Continuous laboratory evaluation, dual-culture confrontation bioassays, microbial staining, Pikovskaya halo indexing, root mycorrhizal staining, formulation QC audits, practical records, and viva voce."
            }
        ],
        "textbooks": [
            {
                "title": "Biopesticides and Biofertilizers: Formulation, Production and Quality Control",
                "authors": "S.P. Pathak and P.K. Mishra",
                "publisher": "Scientific Publishers, Jodhpur",
                "edition": "2nd Edition, 2020",
                "isRecommended": True
            },
            {
                "title": "Biological Control of Plant Pathogens",
                "authors": "Kenneth F. Baker and R. James Cook",
                "publisher": "American Phytopathological Society (APS Press), St. Paul",
                "edition": "1st Edition, 1982",
                "isRecommended": True
            },
            {
                "title": "Biofertilizers and Biopesticides in Sustainable Agriculture",
                "authors": "B.D. Kaushik, A.K. Saxena, and K.G. Mukerji",
                "publisher": "CRC Press / Taylor & Francis Group",
                "edition": "1st Edition, 2019",
                "isRecommended": True
            },
            {
                "title": "Plant Pathology",
                "authors": "George N. Agrios",
                "publisher": "Elsevier Academic Press, Burlington",
                "edition": "5th Edition, 2005",
                "isRecommended": False
            },
            {
                "title": "Trichoderma: Biology and Applications",
                "authors": "Prabhat K. Mukherjee, B.A. Horwitz, U.S. Singh, M. Mukherjee, and M. Schmoll",
                "publisher": "CABI Publishing, Wallingford, UK",
                "edition": "1st Edition, 2013",
                "isRecommended": True
            }
        ],
        "practicalActivities": [
            {
                "id": 1,
                "title": "Dual-Culture Confrontation Assay for Screening Antagonistic Potency of Trichoderma against Rhizoctonia solani",
                "objectives": [
                    "Perform aseptic dual-culture confrontation between Trichoderma harzianum and Rhizoctonia solani on Potato Dextrose Agar.",
                    "Measure the radial mycelial growth of the pathogen in test and control plates.",
                    "Calculate the percentage radial growth inhibition (PGI) and verify compliance with CIB&RC statutory potency standards (>=70%)."
                ],
                "materialsRequired": [
                    "Active 4-day-old pure cultures of Trichoderma harzianum and Rhizoctonia solani",
                    "Sterile Potato Dextrose Agar (PDA) plates",
                    "Sterile 5 mm cork borer, inoculation needle, and Bunsen burner",
                    "Laminar airflow chamber and 28°C incubator",
                    "Digital vernier calipers and permanent marker"
                ],
                "procedureSteps": [
                    "On the back of sterile PDA plates, draw a diametrical baseline and mark two points exactly 60 mm apart (15 mm from each edge).",
                    "Using a sterile 5 mm cork borer, cut a mycelial disc from the active margin of the Rhizoctonia solani culture and place it mycelial side down on one marked point.",
                    "Cut an identical 5 mm disc from the Trichoderma harzianum culture and place it on the opposite marked point.",
                    "Inoculate control plates with a single 5 mm Rhizoctonia solani disc on one point and an uninoculated sterile agar plug on the opposite point.",
                    "Invert all plates and incubate at 28 ± 1°C in the dark for 96 hours.",
                    "Measure the radial growth of Rhizoctonia toward the plate center in control plates (R1) and dual-culture plates (R2) using vernier calipers.",
                    "Calculate Percentage Growth Inhibition: PGI = [(R1 - R2) / R1] x 100."
                ],
                "observationsAndRecording": [
                    "Record colony colony diameters (in mm) for five replicate plates.",
                    "Sketch the zone of confrontation, observing hyphal coiling and overgrowth under stereomicroscopy."
                ],
                "reflectionQuestions": [
                    "What physiological mechanisms are responsible for the clear inhibition zone observed prior to direct contact?",
                    "Why does CIB&RC mandate a minimum 70% growth inhibition threshold for commercial biopesticide registration?"
                ],
                "submissionGuidance": "Submit a complete laboratory practical record sheet containing tabulated measurements, the calculated PGI, stereomicroscopic sketches, and a formal pass/fail statutory evaluation."
            },
            {
                "id": 2,
                "title": "Isolation, King's B UV-Fluorescence Verification, and Siderophore Production Assay of Pseudomonas fluorescens",
                "objectives": [
                    "Isolate fluorescent pseudomonads from healthy crop rhizosphere soil using King's B selective agar.",
                    "Verify the emission of yellow-green pyoverdine fluorescence under shortwave ultraviolet light (366 nm).",
                    "Demonstrate siderophore-mediated ferric iron binding using the Chrome Azurol S (CAS) agar plate assay."
                ],
                "materialsRequired": [
                    "Fresh rhizosphere soil from pulse or cereal crop roots",
                    "King's Medium B agar plates and Chrome Azurol S (CAS) blue agar plates",
                    "Sterile saline blanks (0.85% NaCl), test tubes, and micropipettes",
                    "Laminar airflow hood and 28°C incubator",
                    "Shortwave UV transilluminator (366 nm) and UV-protective goggles"
                ],
                "procedureSteps": [
                    "Weigh 1.0 g of rhizosphere soil and transfer into 9.0 ml of sterile saline; vortex vigorously for 10 minutes.",
                    "Prepare serial tenfold decimal dilutions from 10^-2 to 10^-7.",
                    "Pipette 0.1 ml aliquots from 10^-5, 10^-6, and 10^-7 dilutions onto King's B agar plates and spread uniformly using a sterile glass spreader.",
                    "Incubate plates inverted at 28°C for 48 hours until circular, translucent, mucoid colonies develop.",
                    "Transfer plates into a UV viewing cabinet (wearing protective UV eye shields) and illuminate with 366 nm UV radiation.",
                    "Mark colonies that emit intense yellow-green fluorescence.",
                    "Spot-inoculate fluorescent colonies onto Chrome Azurol S (CAS) blue agar plates and incubate for 72 hours; observe the color transition from deep blue to bright orange/yellow halo, confirming siderophore ferric iron chelation."
                ],
                "observationsAndRecording": [
                    "Count fluorescent colonies under UV light and calculate CFU per gram of rhizosphere soil.",
                    "Measure the diameter of orange halos on CAS agar and determine the Siderophore Production Index."
                ],
                "reflectionQuestions": [
                    "Why does King's B medium omit iron to stimulate pyoverdine pigment production?",
                    "How does siderophore secretion starve soil-borne pathogens like Fusarium and Pythium in field soils?"
                ],
                "submissionGuidance": "Submit a detailed practical report with UV-fluorescent colony counts, CAS halo measurements, and diagrams illustrating iron-siderophore transport across bacterial membranes."
            },
            {
                "id": 3,
                "title": "Differential Endospore Staining and Characterization of Bacillus subtilis Biocontrol Isolates",
                "objectives": [
                    "Isolate endospore-forming bacteria from soil using heat-pasteurization at 80°C.",
                    "Perform differential Schaeffer-Fulton malachite green endospore staining.",
                    "Differentiate green-stained dormant endospores from pink vegetative rods under oil-immersion microscopy."
                ],
                "materialsRequired": [
                    "Agricultural soil samples and 72-hour-old nutrient agar cultures of Bacillus subtilis",
                    "Water bath (80°C), test tubes, and Nutrient Agar plates",
                    "Schaeffer-Fulton staining reagents: 5% aqueous malachite green and 0.5% aqueous safranin",
                    "Microscope slides, cover slips, Bunsen burner, staining racks, and blotting paper",
                    "Bright-field compound microscope with 100x oil-immersion objective"
                ],
                "procedureSteps": [
                    "Suspend 1.0 g of soil in 9.0 ml of sterile water and heat in an 80°C circulating water bath for 15 minutes to eliminate non-spore-forming vegetative microflora.",
                    "Spread 0.1 ml onto Nutrient Agar and incubate at 30°C for 72 hours to induce nutrient limitation and endospore differentiation.",
                    "Prepare a thin, uniform bacterial smear on a clean glass slide and fix by passing through a Bunsen flame three times.",
                    "Place the slide on a wire staining rack over a steaming beaker of water; flood the smear with 5% malachite green.",
                    "Steam the slide for 5 minutes, adding drops of malachite green to prevent the dye from drying out.",
                    "Cool the slide, rinse thoroughly with a gentle stream of tap water for 30 seconds.",
                    "Counterstain the smear with 0.5% safranin for 45 seconds; rinse with water and blot dry with bibulous paper.",
                    "Examine under oil immersion (1000x magnification) to observe bright green oval endospores (central or sub-terminal) within pink/red vegetative bacilli."
                ],
                "observationsAndRecording": [
                    "Draw accurate sketches showing the relative position of endospores within vegetative cells.",
                    "Record the percentage of free spores, endospore-containing cells, and vegetative cells across five microscopic fields."
                ],
                "reflectionQuestions": [
                    "What chemical components in the endospore cortex make it impenetrable to cold stains?",
                    "Why do Bacillus subtilis formulations exhibit 1–2 year shelf-lives while Pseudomonas powders last only 4 months?"
                ],
                "submissionGuidance": "Submit a laboratory report including oil-immersion drawings, sporulation percentage calculations, and an analysis of how endospore resilience benefits commercial product distribution."
            },
            {
                "id": 4,
                "title": "Qualitative Screening and Halo Index Quantification of Phosphate-Solubilizing Bacteria on Pikovskaya's Agar",
                "objectives": [
                    "Isolate phosphate-solubilizing bacteria (PSB) from rhizosphere soil using Pikovskaya's selective medium.",
                    "Observe the development of clear halo zones around bacterial colonies on opaque tricalcium phosphate agar.",
                    "Calculate the Phosphate Solubilization Index (PSI) to identify superior candidate strains for biofertilizer formulation."
                ],
                "materialsRequired": [
                    "Rhizosphere soil samples from legume or sugarcane fields",
                    "Sterile Pikovskaya's agar plates containing 0.5% insoluble tricalcium phosphate",
                    "Sterile saline blanks, dilution tubes, inoculation loop, and micropipettes",
                    "Incubator set at 28°C and digital vernier calipers"
                ],
                "procedureSteps": [
                    "Prepare serial tenfold dilutions of rhizosphere soil in sterile water blanks up to 10^-6.",
                    "Spread 0.1 ml aliquots from 10^-4 and 10^-5 dilutions onto opaque Pikovskaya agar plates.",
                    "Incubate plates inverted at 28°C to 30°C for 5 to 7 days.",
                    "Inspect plates daily for the appearance of transparent clear halo zones around bacterial colonies where insoluble Ca3(PO4)2 has dissolved.",
                    "Using vernier calipers, measure the colony diameter (CD, in mm) and total halo zone diameter (HD, in mm) across two perpendicular axes.",
                    "Calculate the Phosphate Solubilization Index: PSI = (CD + HD) / CD.",
                    "Subculture the top three high-efficiency strains (PSI > 2.5) onto nutrient agar slants."
                ],
                "observationsAndRecording": [
                    "Tabulate colony diameter, total halo diameter, and calculated PSI for at least 5 distinct isolates.",
                    "Photograph or sketch plates showing sharp halo margins on the milky white agar background."
                ],
                "reflectionQuestions": [
                    "What organic acids are primarily responsible for the dissolution of tricalcium phosphate on Pikovskaya's agar?",
                    "How does periplasmic glucose dehydrogenase (GDH) coupled with PQQ drive gluconic acid production in PSB?"
                ],
                "submissionGuidance": "Submit a practical record featuring tabulated PSI data, comparative isolate ranking, and a biochemical flow diagram of organic acid phosphate solubilization."
            },
            {
                "id": 5,
                "title": "Trypan Blue Root Clearing and Staining for Microscopic Visualization of Arbuscular Mycorrhizal Fungi (AMF)",
                "objectives": [
                    "Clear plant root cytoplasmic contents using potassium hydroxide (KOH) and alkaline hydrogen peroxide.",
                    "Stain mycorrhizal fungal structures within the root cortex using trypan blue (or ink-vinegar solution).",
                    "Identify and quantify AMF arbuscules, vesicles, internal hyphae, and entry appressoria using the grid-line intersect method."
                ],
                "materialsRequired": [
                    "Fresh fine feeder roots of maize, sorghum, or onion grown with AMF inoculant",
                    "10% aqueous Potassium Hydroxide (KOH) solution",
                    "Alkaline hydrogen peroxide (0.5% NH4OH + 0.5% H2O2)",
                    "1% Hydrochloric acid (HCl) solution for acidification",
                    "0.05% Trypan blue staining solution in lactoglycerol (or 5% blue Parker ink in 5% household vinegar)",
                    "Water bath (90°C), fine forceps, Petri dishes, microscope slides, and cover slips",
                    "Compound microscope with 10x, 40x, and 100x objectives"
                ],
                "procedureSteps": [
                    "Wash root samples thoroughly under running tap water to remove all adhering soil particles; cut into 1 cm segments.",
                    "Place root segments in heat-resistant tubes containing 10% KOH; heat in a 90°C water bath for 30 minutes to clear root cytoplasm.",
                    "If roots remain pigmented, immerse in alkaline H2O2 for 10 minutes at room temperature to bleach root pigments, then rinse with water.",
                    "Acidify cleared roots by immersing in 1% HCl for 3 minutes (do not rinse after acidification).",
                    "Submerge roots in 0.05% trypan blue in lactoglycerol and heat at 90°C in the water bath for 15 minutes.",
                    "Transfer stained roots to pure lactoglycerol (or acidified glycerol) and leave at room temperature for 24 hours to destain host plant tissues.",
                    "Mount 10 root segments parallel to each other in a drop of glycerol on a glass slide; cover with a cover slip and press down gently.",
                    "Examine under 100x and 400x magnification to resolve dark-blue stained arbuscules, oval vesicles, and cortical hyphae."
                ],
                "observationsAndRecording": [
                    "Sketch and label arbuscules (tree-like branched haustoria) and vesicles (lipid storage organs).",
                    "Calculate percentage mycorrhizal root colonization using the Biermann and Linderman gridline intersect formula: % Colonization = (Number of Mycorrhizal Intersects / Total Intersects Examined) x 100."
                ],
                "reflectionQuestions": [
                    "Why must root tissues be cleared with KOH prior to staining fungal structures with trypan blue?",
                    "What is the functional lifespan of an arbuscule, and what nutritional exchanges take place across the peri-arbuscular membrane?"
                ],
                "submissionGuidance": "Submit a laboratory report with detailed microscopic drawings of arbuscules and vesicles, tabulated gridline intersect counts, and calculated percentage root colonization."
            },
            {
                "id": 6,
                "title": "Preparation, Quality Audit, and Seed Biopriming with Talc-Based Trichoderma Formulations",
                "objectives": [
                    "Formulate a carrier-based wettable powder of Trichoderma harzianum using sterilized 300-mesh talc carrier and CMC sticker.",
                    "Conduct statutory quality control testing: moisture content measurement and serial dilution CFU enumeration.",
                    "Execute a standardized seed biopriming protocol on chickpea seeds, evaluating germination percentage and seedling vigor index."
                ],
                "materialsRequired": [
                    "Conidial biomass from 10-day-old solid-state grain fermentation of Trichoderma harzianum",
                    "300-mesh talc powder (hydrated magnesium silicate), carboxymethyl cellulose (CMC), and CaCO3",
                    "Hot air oven (105°C), analytical balance, moisture moisture balance, and desiccator",
                    "Sterile saline blanks, Trichoderma Selective Medium (TSM) plates, and micropipettes",
                    "Certified chickpea seeds, jaggery (cane sugar), sterile water, and jute hessian bags"
                ],
                "procedureSteps": [
                    "Steam-autoclave high-grade 300-mesh talc powder at 121°C for 60 minutes on two consecutive days to eliminate indigenous spores.",
                    "In an aseptic blending hood, mix harvested conidial grain powder with sterilized talc at a 1:2 ratio, incorporating 1.0% CMC and 1.5% CaCO3.",
                    "Moisture Audit: Weigh 10 g of formulated powder in an aluminum dish; dry at 105°C in a hot-air oven for 3 hours. Reweigh and calculate % Moisture: [(Initial Wt - Final Wt) / Initial Wt] x 100. Confirm that moisture is <=8.0%.",
                    "CFU Audit: Aseptically weigh 1.0 g of formulation into 9.0 ml of sterile water (10^-1). Serially dilute to 10^-6. Spread-plate 0.1 ml from 10^-4, 10^-5, and 10^-6 dilutions onto TSM plates. Incubate at 28°C for 5 days. Confirm count exceeds statutory 2 x 10^6 CFU/g.",
                    "Seed Biopriming: Dissolve 10 g of jaggery in 100 ml of clean water to prepare a 10% sticker slurry. Blend 10 g of the formulated Trichoderma powder into the slurry.",
                    "Pour slurry over 1 kg of chickpea seeds on a clean sheet; mix thoroughly by hand (wearing nitrile gloves) until seeds are uniformly coated.",
                    "Wrap treated seeds in damp jute hessian bags and incubate at 25°C for 12 hours in the dark; observe conidial germination and hyphal sheath development on seed coats under stereomicroscopy."
                ],
                "observationsAndRecording": [
                    "Record formulation moisture percentage and calculated CFU per gram of powder.",
                    "Record germination percentage of bioprimed seeds versus untreated controls in a paper towel germination test at 5 days, calculating Vigour Index = Germination % x (Shoot Length + Root Length)."
                ],
                "reflectionQuestions": [
                    "What happens to Trichoderma conidial viability if formulation moisture exceeds 10% during commercial warehouse storage?",
                    "How does seed biopriming protect emerging pulse seedlings against pre-emergence damping-off caused by Pythium?"
                ],
                "submissionGuidance": "Submit a comprehensive quality control audit dossier including raw drying weights, moisture calculations, CFU colony counts, seed germination data, and Vigour Index graphs."
            }
        ]
    }

    index_ts = f"""import {{ SubjectMetadata, UnitContent }} from "./types";
import {{ unit1Content }} from "./unit1";
import {{ unit2Content }} from "./unit2";
import {{ unit3Content }} from "./unit3";
import {{ unit4Content }} from "./unit4";
import {{ unit5Content }} from "./unit5";

export const pth215Metadata: SubjectMetadata = {json.dumps(metadata, indent=2)};

export const pth215Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const pth215CompleteSubject = {{
  metadata: pth215Metadata,
  units: pth215Units
}};

export default pth215CompleteSubject;
"""
    with open("/Users/quantum/Downloads/padho lpu/server/data/pth215/index.ts", "w") as f:
        f.write(index_ts)
    print("PTH215 index.ts generated successfully!")

if __name__ == "__main__":
    generate_index()
