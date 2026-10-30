import json

metadata = {
    "code": "SOL223",
    "name": "Farm Machinery and Power",
    "programmeCode": "BSC-AGRI",
    "programmeName": "B.Sc. (Hons.) Agriculture",
    "semester": 3,
    "credits": 4,
    "ltp": "L: 3 | T: 0 | P: 2",
    "courseCategory": "Core",
    "syllabusPdfUrl": "/SOL223_Syllabus.pdf",
    "overview": "Farm Machinery and Power introduces undergraduate agricultural students to the engineering principles, mechanics, calibration, and operational management of agricultural power sources, primary and secondary soil tillage equipment, precision sowing and transplanting machinery, modern combine harvesters, plant protection sprayers, and tractor powertrain and hydraulic systems.",
    "courseOutcomes": [
        {
            "code": "CO1",
            "title": "Farm Power Sources & Thermodynamic Calculations",
            "description": "Quantify animate, mechanical, electrical, and renewable farm power sources, and calculate Indicated Horsepower (IHP), Brake Horsepower (BHP), Frictional Horsepower (FHP), PTO power, and Drawbar Horsepower (DBHP)."
        },
        {
            "code": "CO2",
            "title": "Soil Tillage Dynamics & Implement Mechanics",
            "description": "Evaluate primary and secondary tillage implements including mouldboard ploughs, disc ploughs, subsoilers, harrows, cultivators, and PTO-driven rotavators, with emphasis on suction, draft, and conservation tillage."
        },
        {
            "code": "CO3",
            "title": "Sowing, Planting & Transplanter Engineering",
            "description": "Analyze seed and fertilizer metering mechanisms, furrow openers, seed drill laboratory/field calibration, mechanical paddy transplanters, potato planters, and Direct Seeded Rice (DSR) machinery."
        },
        {
            "code": "CO4",
            "title": "Harvesting, Threshing & Post-Harvest Systems",
            "description": "Comprehend the working dynamics of reciprocating cutter bars, combine harvester functional subsystems (cylinder, concave, straw walkers, cleaning shoe), maize shellers, and groundnut decorticators."
        },
        {
            "code": "CO5",
            "title": "Pumping Hydraulics, Spraying & Tractor Powertrains",
            "description": "Master centrifugal and submersible irrigation pump hydraulics, NPSH and cavitation, micro-irrigation filtration, hydraulic spray nozzles, tractor transmission, and three-point hitch draft/position hydraulics."
        }
    ],
    "gradingStructure": [
        {
            "component": "Continuous Assessment (CA)",
            "weightage": "20%",
            "marks": "30 Marks (Best 2 of 3)",
            "details": "Two best descriptive continuous assessments of 30 marks each, scaled to 20% weightage, covering machinery mechanics, calibration calculations, and practical design scenarios."
        },
        {
            "component": "Mid-Term Examination (MTE)",
            "weightage": "20%",
            "marks": "40 Marks",
            "details": "Mid-term university examination covering Units 1, 2, and 3, comprising analytical numerical problems and descriptive technical questions."
        },
        {
            "component": "End-Term Examination (ETE)",
            "weightage": "40%",
            "marks": "70 Marks",
            "details": "Comprehensive university examination covering all five units (Units 1 to 5) testing machinery design, hydraulic equations, operational troubleshooting, and field efficiency."
        },
        {
            "component": "Practical Examination & Lab Record",
            "weightage": "20%",
            "marks": "50 Marks",
            "details": "Evaluation of practical lab record, viva-voce, seed drill calibration, plough adjustments, tractor driving and hitching, and pump dismantling/testing."
        }
    ],
    "textbooks": [
        {
            "title": "Elements of Agricultural Engineering",
            "author": "Jagdishwar Sahay",
            "note": "Standard prescribed core textbook for farm power, IC engines, tillage implements, and agricultural machinery calibration."
        },
        {
            "title": "Principles of Agricultural Engineering, Vol. I",
            "author": "A. M. Michael and T. P. Ojha",
            "note": "Comprehensive treatise covering farm power sources, kinematics of farm machinery, tractor transmissions, and thermodynamics."
        },
        {
            "title": "Farm Machinery and Equipment",
            "author": "H. P. Smith and L. H. Wilkes",
            "note": "Authoritative reference for planting equipment, combine harvesters, cutter bars, and crop processing machinery."
        },
        {
            "title": "Farm Tractors: Maintenance and Repair",
            "author": "S. C. Jain and C. R. Rai",
            "note": "In-depth engineering manual for tractor engines, transmission gearboxes, hydraulic draft sensing, and preventive servicing."
        }
    ],
    "practicals": [
        {
            "id": 1,
            "title": "Study of Construction, Parts and Adjustments of Mouldboard Plough",
            "objectives": [
                "Identify and inspect the share, mouldboard, landside, frog, and beam of a tractor-mounted MB plough.",
                "Measure and adjust vertical suction (clearance) and horizontal suction (side clearance)."
            ],
            "materialsRequired": ["Tractor-mounted 2-bottom MB plough", "Steel measuring scale / calipers", "Straight edge rule", "Wrench set"],
            "procedureSteps": [
                "Place the MB plough on a clean, level concrete floor with the tractor disconnected.",
                "Inspect the share cutting edge and classify share type (slip, shin, or bar point).",
                "Place a straight edge beneath the landside sole; measure the vertical gap under the landside heel (vertical suction, 3-5 mm).",
                "Place a straight edge along the furrow-facing side of the landside; measure the lateral clearance of the share point toward unploughed land (horizontal suction, 3-5 mm).",
                "Adjust the coulter and jointer positions relative to the share point and record all dimensions."
            ],
            "observationsAndRecording": [
                "Record measured vertical suction (mm) and horizontal suction (mm).",
                "Measure furrow width per bottom and total plough cutting width."
            ],
            "reflectionQuestions": [
                "What operational defect occurs if the share point's vertical suction wears down to zero?",
                "Why must horizontal suction point toward the unploughed land rather than into the furrow?"
            ],
            "submissionGuidance": "Submit a technical report containing labeled hand-drawn sketches of the plough bottom and suction measurement diagrams."
        },
        {
            "id": 2,
            "title": "Laboratory Calibration and Field Testing of a Seed-Cum-Fertilizer Drill",
            "objectives": [
                "Calibrate a tractor grain drill using the stationary jack method to achieve a target seed rate of 100 kg/ha for wheat.",
                "Evaluate discharge uniformity across individual furrow openers."
            ],
            "materialsRequired": ["Tractor seed-cum-fertilizer drill", "Wheat seed (clean, graded)", "Two mechanical screw jacks", "Collection polythene bags", "Digital balance (0.1 g precision)", "Chalk and measuring tape"],
            "procedureSteps": [
                "Measure effective drill width W = N * S and drive wheel rolling diameter D; calculate circumference C = pi * D.",
                "Calculate wheel turns per hectare: N_ha = 10,000 / (W * C).",
                "Raise the drive wheel on jacks; fill the seed hopper with wheat seed.",
                "Attach collection bags beneath all seed delivery tubes.",
                "Rotate the drive wheel manually for 50 revolutions at a steady simulated speed.",
                "Weigh the seed dropped in each bag individually and calculate total mass w_test.",
                "Compute seed rate: Seed Rate (kg/ha) = (w_test * N_ha) / 50.",
                "Adjust feed lever until the measured rate matches 100 kg/ha within ±2%."
            ],
            "observationsAndRecording": [
                "Tabulate seed collected from each of the furrow tubes; compute mean and percentage deviation.",
                "Record nominal laboratory seed rate and apply 8% wheel slip correction for field estimate."
            ],
            "reflectionQuestions": [
                "Why do variations exceeding ±5% among individual tubes indicate need for mechanical realignment?",
                "How does wheel slip in tilled soil cause a seed drill calibrated on jacks to under-seed in the field?"
            ],
            "submissionGuidance": "Submit the completed calibration data table, derivation of equations, and final feed gate calibration graph."
        },
        {
            "id": 3,
            "title": "Study of Tractor Hydraulic System and Implement Hitching Controls",
            "objectives": [
                "Understand the kinematics of the standardized Category I and II three-point linkage.",
                "Operate and compare Position Control and Draft Control under simulated field conditions."
            ],
            "materialsRequired": ["Agricultural tractor (35-50 hp)", "Mounted cultivator or MB plough", "Operator manual", "Hydraulic pressure test gauge"],
            "procedureSteps": [
                "Locate the two lower lift links, adjustable leveling rod, top link, and rockshaft arms on the tractor.",
                "Measure lower hitch pin diameters and compare with Category I/II specifications.",
                "Hitch a mounted cultivator to the tractor using 3-point pins and lynch pins; level the implement laterally using the leveling box.",
                "Start engine, operate the Position Control lever, and observe rockshaft arm displacement.",
                "Engage Draft Control mode; apply manual compressive force to the spring-loaded top link bracket and observe automatic lift response.",
                "Measure hydraulic relief valve popping pressure using an in-line gauge."
            ],
            "observationsAndRecording": [
                "Record lower link pin diameter, top link pin diameter, and hitch point spread.",
                "Note rockshaft lift response time and maximum hydraulic relief pressure (bar)."
            ],
            "reflectionQuestions": [
                "Why is Draft Control inappropriate for operating a tractor boom sprayer or seed drill?",
                "How does top link sensing create automatic weight transfer onto tractor rear wheels?"
            ],
            "submissionGuidance": "Submit a detailed schematic diagram of the three-point hitch geometry and explain the internal spool valve response to top link deflection."
        },
        {
            "id": 4,
            "title": "Discharge Testing, Nozzle Calibration, and Droplet Assessment of Knapsack Sprayer",
            "objectives": [
                "Calibrate a lever-operated knapsack sprayer and evaluate nozzle flow rates at varied pressures.",
                "Assess spray droplet distribution on water-sensitive paper."
            ],
            "materialsRequired": ["16-liter knapsack sprayer", "Flat fan nozzle and hollow cone nozzle", "Graduated measuring cylinder (1000 mL)", "Stopwatch", "Pressure gauge on lance", "Water-sensitive paper strips"],
            "procedureSteps": [
                "Fill sprayer tank with clean water; inspect pump cup washer and delivery hose for leaks.",
                "Attach flat fan nozzle; pump handle at steady rate (30 strokes/min) to maintain 2.5 bar pressure.",
                "Collect nozzle discharge for 60 seconds into a graduated cylinder; record discharge in L/min.",
                "Repeat test at 1.5, 2.0, 3.0, and 3.5 bar pressures; plot Pressure vs Discharge curve.",
                "Place water-sensitive papers at canopy height; execute a walking spray pass at 3.6 km/h.",
                "Examine droplet blue stains under hand lens to estimate droplet density (droplets/cm²)."
            ],
            "observationsAndRecording": [
                "Record discharge (L/min) at 5 different pressure intervals.",
                "Estimate Volume Median Diameter (VMD) category and droplet count per cm²."
            ],
            "reflectionQuestions": [
                "Why does quadrupling spray pressure only double nozzle discharge rate?",
                "What is the danger of operating a flat fan nozzle at excessively high pressures (>4.0 bar)?"
            ],
            "submissionGuidance": "Submit the plotted Pressure-Discharge curve alongside scanned images of the water-sensitive spray cards."
        },
        {
            "id": 5,
            "title": "Study of Combine Harvester Subsystems and Calculation of Field Losses",
            "objectives": [
                "Identify the header, feeder, rasp-bar cylinder, concave, straw walkers, and cleaning shoe of a combine harvester.",
                "Measure header losses, separation losses, and cleaning losses in a standing wheat or paddy field."
            ],
            "materialsRequired": ["Self-propelled combine harvester", "Loss collection trays (1.0 m x 0.5 m)", "Canvas sheet", "Precision digital scale", "Measuring tape"],
            "procedureSteps": [
                "Conduct a static walk-around inspection; trace crop flow from reel to clean grain elevator.",
                "Measure cylinder diameter, width, rasp bar count, and concave grate opening dimensions.",
                "During field operation, throw collection trays onto the ground behind the cutter bar (header loss).",
                "Suspend a collection canvas beneath the rear straw walker discharge hood to catch walker losses.",
                "Collect chaff and grain falling off the cleaning shoe sieves onto a trailing tray.",
                "Separate loose grain from unthreshed heads and straw in all collected samples; weigh grain.",
                "Calculate percentage losses relative to total harvested grain yield."
            ],
            "observationsAndRecording": [
                "Record measured cylinder speed (RPM) and concave front/rear clearance (mm).",
                "Tabulate Header Loss (%), Threshing Loss (%), Walker Loss (%), and Shoe Loss (%)."
            ],
            "reflectionQuestions": [
                "If walker loss is high while cylinder loss is low, what machine adjustment should be made?",
                "How does an out-of-register cutter bar increase header losses?"
            ],
            "submissionGuidance": "Submit a technical flow diagram of the combine harvester and complete calculations of total field harvesting losses."
        },
        {
            "id": 6,
            "title": "Dismantling, Inspection, and Testing of an Agricultural Centrifugal Pump",
            "objectives": [
                "Dismantle a single-stage volute centrifugal water pump and inspect the impeller, casing, and stuffing box.",
                "Evaluate total dynamic head, discharge, and pump efficiency on a hydraulic test bench."
            ],
            "materialsRequired": ["Single-stage centrifugal pump test rig", "Pressure gauges (suction vacuum gauge and delivery pressure gauge)", "V-notch weir or volumetric tank", "Stopwatch", "Tachometer", "Mechanic toolkit"],
            "procedureSteps": [
                "Dismantle pump volute casing, remove impeller, and inspect for cavitation pitting and abrasive wear.",
                "Inspect gland packing or mechanical shaft seal and shaft sleeve; reassemble pump.",
                "Prime pump completely; start electric motor and record rotational speed using tachometer.",
                "Operate pump with delivery valve at full open, 3/4, 1/2, 1/4 open, and fully closed (shut-off).",
                "At each valve setting, record suction vacuum (mmHg), delivery pressure (kg/cm²), and weir head.",
                "Calculate discharge Q (L/s), Total Dynamic Head TDH (m), and Water Horsepower (WHP).",
                "Plot Pump Characteristic Curves: Head vs Discharge (H-Q), and Efficiency vs Discharge."
            ],
            "observationsAndRecording": [
                "Tabulate suction head, delivery head, total head, discharge, and electrical power at 5 valve settings.",
                "Identify the Best Efficiency Point (BEP) from the plotted curves."
            ],
            "reflectionQuestions": [
                "Why does a centrifugal pump draw minimum electric motor current when the discharge valve is fully closed?",
                "What is the physical cause of cavitation pitting on the rear face of impeller vanes?"
            ],
            "submissionGuidance": "Submit the plotted pump performance curves (H-Q, Power-Q, and Efficiency-Q) and write an evaluation of the pump's operational condition."
        }
    ]
}

index_content = f"""import {{ SubjectMetadata, UnitContent }} from "./types";
import {{ unit1Content }} from "./unit1";
import {{ unit2Content }} from "./unit2";
import {{ unit3Content }} from "./unit3";
import {{ unit4Content }} from "./unit4";
import {{ unit5Content }} from "./unit5";

export const sol223Metadata: SubjectMetadata = {json.dumps(metadata, indent=2)};

export const sol223Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const sol223CompleteSubject = {{
  metadata: sol223Metadata,
  units: sol223Units
}};

export default sol223CompleteSubject;
"""

with open("/Users/quantum/Downloads/padho lpu/server/data/sol223/index.ts", "w") as f:
    f.write(index_content)

print("SOL223 index.ts written successfully!")
