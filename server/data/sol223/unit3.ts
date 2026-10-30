import { UnitContent } from "./types";

export const unit3Content: UnitContent = {
  "unitNumber": 3,
  "title": "Sowing, Planting and Transplanting Equipment",
  "shortDescription": "Functional mechanics, transmission, and calibration of seed drills, precision pneumatic planters, mat-nursery rice transplanters, potato planters, sugarcane cutter-planters, and Direct Seeded Rice (DSR) machinery.",
  "estimatedReadTimeMinutes": 25,
  "syllabusTopics": [
    "Sowing methods and seed drill functional components",
    "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
    "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
    "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
    "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
    "Potato planters (automatic and semi-automatic) and potato diggers",
    "Sugarcane cutter planters and sett cutting mechanisms",
    "Precision seeders and pneumatic metering systems",
    "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill"
  ],
  "notes": {
    "learningObjectives": [
      "Evaluate mechanical sowing methods, seed drill transmission drivelines, and functional subsystem architecture.",
      "Compare seed and fertilizer metering mechanisms (fluted roller, internal double-run, cell plate, cup feed, pneumatic vacuum) regarding singulation accuracy and seed damage.",
      "Formulate mathematical seed drill calibration protocols (laboratory jack test and field test) and solve seed rate adjustment equations.",
      "Analyze mechanical transplanters (paddy mat-type), automated potato planters, sugarcane cutter-planters, and Direct Seeded Rice (DSR) machinery."
    ],
    "sections": [
      {
        "id": "sec-3-1",
        "heading": "1. Sowing Methods and Seed Drill Functional Architecture",
        "content": "Sowing is the art of placing seeds in the soil at a predetermined depth, spacing, and seed rate to achieve uniform emergence and optimal plant population density.\n\n**Agronomic Sowing Modalities:**\n1. **Broadcasting:** Scattering seeds randomly by hand or centrifugal spreader over the soil surface. Highly labor-inefficient with poor seed placement uniformity, variable depth, and high seed rate requirements (20-30% higher).\n2. **Drilling:** Dropping seeds continuously into narrow parallel furrows opened by mechanical furrow openers, followed by soil covering. Standard for cereal crops (wheat, barley, oats).\n3. **Dibbling:** Placing individual seeds into discrete holes punched at exact intervals along predetermined rows.\n4. **Precision Planting:** Depositing individual single seeds at exact, uniform row-to-row and plant-to-plant spacings (singulation), standard for row crops like maize, cotton, and sunflower.\n5. **Transplanting:** Raising young seedlings in a nursery bed and mechanically transferring them into puddled or tilled field soil (paddy, vegetables).\n\n**Seed-Cum-Fertilizer Drill Anatomy:**\nA modern tractor-drawn seed-cum-fertilizer drill incorporates:\n- *Structural Frame:* Welded tubular steel frame supporting all sub-assemblies.\n- *Divided Hopper:* Two separate compartments for seed and chemical fertilizer (fertilizer compartment fabricated from corrosion-resistant galvanized iron or polymer).\n- *Ground Drive Wheel & Transmission:* Heavy lugged ground wheel that rolls without slip, driving the metering shafts via chain-and-sprocket drivelines with interchangeable gears for rate adjustment.\n- *Furrow Openers:* Cut slots in the soil at adjustable row spacings (15 to 25 cm).\n- *Seed & Fertilizer Delivery Tubes:* Transparent flexible plastic or helical wire-wound tubes conveying metered material to furrow openers.\n- *Covering Devices:* Drag chains, trailing press wheels, or spring blades that collapse loose soil over seeds and firm the furrow.",
        "subsections": [
          {
            "subheading": "Agronomic Comparison of Sowing Techniques",
            "content": "Operational metrics across diverse seeding methods:",
            "table": {
              "headers": [
                "Sowing Method",
                "Depth Uniformity",
                "Spacing Control",
                "Seed Rate Required",
                "Labor (man-h/ha)"
              ],
              "rows": [
                [
                  "Broadcasting (Manual)",
                  "Poor (0 - 8 cm variable)",
                  "Completely random",
                  "125 - 150 kg/ha",
                  "8 - 12"
                ],
                [
                  "Behind Desi Plough (Kera/Pora)",
                  "Moderate (4 - 7 cm)",
                  "Continuous in row",
                  "100 - 120 kg/ha",
                  "20 - 25"
                ],
                [
                  "Tractor Seed Drill",
                  "Excellent (3 - 5 cm uniform)",
                  "Regulated row spacing",
                  "80 - 100 kg/ha",
                  "2 - 3"
                ],
                [
                  "Precision Planter",
                  "Exceptional (2 - 4 cm)",
                  "Exact plant-to-plant",
                  "18 - 25 kg/ha",
                  "1.5 - 2.5"
                ],
                [
                  "Mechanical Paddy Transplanter",
                  "Uniform (1.5 - 2.5 cm)",
                  "Square/rectangular grid",
                  "30 - 35 kg/ha (nursery)",
                  "3 - 5"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-3-2",
        "heading": "2. Seed and Fertilizer Metering Mechanisms",
        "content": "The metering device is the heart of a sowing machine, regulating the discharge rate of seeds from the hopper.\n\n**Primary Seed Metering Types:**\n1. **Fluted Feed Roller:** Standard on small grain drills. Consists of a fluted cast iron or nylon cylinder that slides axially along a square drive shaft inside a feed cup. Seed rate is adjusted by sliding the fluted roller laterally to vary the exposed fluted length inside the hopper. High exposed length delivers maximum seed rate (wheat); small exposure meters low rates (mustard).\n2. **Internal Double-Run Feed:** Features a cast metal disc with internal radial ribs on both faces\u2014one side with fine ribs for small seeds (canola, lucerne, onion) and the opposite side with coarse ribs for large grains (maize, peas, chickpea). Speed of the shaft is varied via multi-speed gearboxes to modulate seeding rate.\n3. **Cup Feed Mechanism:** Small steel cups mounted on the periphery of revolving vertical discs. As discs rotate through the hopper pool, cups scoop seeds and dump them into funnels. Extremely gentle on fragile seeds (groundnut, soybean), but speed is limited to prevent centrifugal throw-off.\n4. **Cell-Feed Plate (Plate Planter):** Horizontal, inclined, or vertical rotating metal plates perforated with edge cells sized to accommodate single seeds. A spring-loaded knocker or brush wipes away excess seeds, delivering precise singulation for maize and cotton.\n5. **Pneumatic (Vacuum) Metering:** Modern precision planters use a rotating perforated vertical disc with an air suction blower. Vacuum holds single seeds against holes; near the bottom, vacuum is cut off by a rubber seal, dropping the seed precisely into the furrow opener.\n\n**Fertilizer Metering Mechanisms:**\nFertilizers are hygroscopic, abrasive, and corrosive. Common metering units include the **star wheel** (spiked revolving disc), **agitator rotor**, and **screw auger**. Star wheels force fertilizer paste through variable sliding orifices into separate delivery boots positioned 5 cm to the side and 3 cm deeper than seed to prevent chemical germination burn.",
        "subsections": [
          {
            "subheading": "Seed Metering Selection Guide",
            "content": "Matching metering mechanisms to agricultural crop types:",
            "table": {
              "headers": [
                "Metering Mechanism",
                "Target Crop Group",
                "Singulation Quality",
                "Mechanical Seed Damage"
              ],
              "rows": [
                [
                  "Fluted Feed Roller",
                  "Wheat, barley, oats, pulses",
                  "Continuous flow (no singulation)",
                  "Low to moderate (<1%)"
                ],
                [
                  "Internal Double-Run",
                  "Cereals and small oilseeds",
                  "Continuous stream",
                  "Extremely low (<0.5%)"
                ],
                [
                  "Inclined Cell Plate",
                  "Groundnut, maize, sunflower",
                  "Single seed spacing",
                  "Moderate (requires sizing)"
                ],
                [
                  "Cup Feed Mechanism",
                  "Groundnut, large beans",
                  "Bulk scoop (1-2 seeds)",
                  "Virtually zero (gentle)"
                ],
                [
                  "Pneumatic Vacuum Disc",
                  "Hybrid maize, cotton, soybean",
                  "Near 100% singulation",
                  "Zero mechanical damage"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-3-3",
        "heading": "3. Furrow Openers, Depth Control, and Calibration Engineering",
        "content": "Furrow openers cut the seed trench, drop seed at uniform depth, and prevent soil sidewall collapse before seed placement.\n\n**Classification of Furrow Openers:**\n1. *Shovel Type:* Reversible carbon-steel shovels. Best suited for well-pulverized, stone-free seedbeds. Subject to clogging in trashy stubble fields.\n2. *Shoe Type:* Fabricated with a curved, pointed runner shoe that wedges through trash and rough soil. Highly suited for poorly prepared, cloddy seedbeds.\n3. *Single Disc Opener:* A slightly concave rotating steel disc (30-40 cm) set at a slight angle (4\u00b0-6\u00b0). Cuts cleanly through heavy surface trash, cover crops, and hard dry crusts.\n4. *Double Disc Opener:* Two flat steel discs mounted at a narrow acute forward angle (7\u00b0-10\u00b0) touching at their leading edge. Cuts a clean V-groove in moist, sticky soil and heavy residue, providing ideal seed-to-soil contact.\n\n**Calibration of Seed-Cum-Fertilizer Drill:**\nCalibration is the process of adjusting and verifying the seed metering mechanism to deliver the exact agronomically recommended seed rate (kg/ha) before going to the field.\n\n**Laboratory Calibration (Jack Method) Protocol:**\n1. Measure the effective working width: W = N * S, where N is number of furrow openers and S is row spacing in meters.\n2. Measure the rolling circumference of the ground drive wheel: C = pi * D (meters).\n3. Calculate ground wheel revolutions required to cover one hectare (10,000 m\u00b2):\nRevolutions per hectare (N_ha) = 10,000 / (W * C)\n4. Lift the seed drill on mechanical jacks so the drive wheel rotates freely.\n5. Fill the hopper with clean seed and set the metering feed gate to the trial setting.\n6. Place collection trays under all furrow opener tubes.\n7. Rotate the drive wheel manually for a test sample number of turns (n_test, e.g., 50 or 100 revolutions).\n8. Collect and weigh the total seed discharged (w_test in kg).\n9. Calculate field seed rate:\nSeed Rate (kg/ha) = (w_test * N_ha) / n_test = (w_test * 10,000) / (W * C * n_test)\n10. Adjust the feed lever and repeat until the measured rate matches the recommendation within \u00b12%.",
        "subsections": [
          {
            "subheading": "Field Calibration vs Lab Calibration",
            "content": "Laboratory jack testing ignores ground drive wheel skid and slip. In tilled soil, drive wheel slip ranges between 5% and 12%. Therefore, a drill calibrated on jacks will under-seed by 5-12% in the field. Field verification over a measured 50-meter run is required to compensate for real wheel slip."
          }
        ]
      },
      {
        "id": "sec-3-4",
        "heading": "4. Mechanical Paddy Transplanters",
        "content": "Rice transplanting is traditionally an arduous manual task requiring 250 to 300 man-hours per hectare. Mechanical transplanters mechanize this operation, ensuring uniform plant populations and optimal square spacing.\n\n**Nursery Culture (Mat-Type Seedlings):**\nMechanical transplanters cannot utilize traditional root-wash seedlings. Seedlings must be raised as dense, interlocking root mats in perforated plastic nursery trays (60 cm x 30 cm x 2 cm) using sieved fertile soil and farmyard manure. Seeds are sown at 100-120 g/tray. Seedlings are ready for mechanical transplanting at 15 to 18 days of age, reaching 15 to 20 cm height with 3 to 4 leaves and robust root intertwining.\n\n**Transplanter Classifications & Mechanisms:**\n- *Walk-Behind Type:* 4-row or 6-row units powered by 3 to 5 hp petrol engines, operated by an attendant walking behind in the mud.\n- *Self-Propelled Riding Type:* 6-row or 8-row high-speed machines powered by 12 to 20 hp diesel engines, equipped with four-wheel drive and wide rubber traction lug wheels.\n\n**Planting Finger Mechanics:**\nRotary planting arms equipped with reciprocating transplanting forks (fingers) sweep down into the seedling tray, shear off a precise seedling block (1.5-2.0 cm\u00b2 root mat containing 2 to 4 seedlings), carry it down through mud, and eject it via a cam-actuated push rod at a depth of 1.5 to 2.5 cm. Row-to-row spacing is fixed at 30 cm, while plant-to-plant hill spacing along the row is adjustable (12, 14, 16, or 18 cm), giving 22 to 28 hills/m\u00b2.",
        "subsections": [
          {
            "subheading": "Agronomic Specifications for Mechanical Transplanting",
            "content": "Critical field and machine parameters:",
            "keyPoints": [
              "Field must be perfectly leveled with 1 to 2 cm standing water; deep water causes floating seedlings.",
              "Field must settle for 24-48 hours after puddling so the mud supports machine weight without sinking.",
              "Planting depth must be maintained at 1.5 to 2.0 cm; deeper planting (>3 cm) inhibits tillering.",
              "Seedling mortality rate should remain below 2-3% under optimal mat nursery preparation."
            ]
          }
        ]
      },
      {
        "id": "sec-3-5",
        "heading": "5. Specialized Planting Machinery and Direct Seeded Rice (DSR)",
        "content": "Tuber, cane, and specialized precision seeding require dedicated machine architectures:\n\n**Potato Planters:**\n1. *Automatic Cup-Type Planter:* An endless vertical belt or revolving vertical wheel fitted with concave metal cups picks seed tubers (35-50 mm diameter, 40-60 g weight) from a hopper pool, transports them upward, and drops them into furrow openers at 20 cm spacing. Ridging discs follow, throwing soil into ridges.\n2. *Semi-Automatic Planter:* Operators seated on the machine manually place tubers into revolving horizontal compartmentalized feeding discs, accommodating irregular tubers with zero skips.\n\n**Sugarcane Cutter-Planters:**\nAutomates five field operations in a single tractor pass: (1) Furrows are opened by heavy ridgers; (2) Whole cane stalks fed into the machine are chopped by rotating knives into 30 to 35 cm setts (each with 2-3 eye buds); (3) Setts pass through an inline fungicidal spray chamber (carbendazim) to prevent red rot; (4) Basal fertilizer is metered into the furrow; and (5) Covering shovels and press rollers firm soil over setts.\n\n**Direct Seeded Rice (DSR) Equipment:**\nDSR eliminates puddling and transplanting, saving 25-30% of irrigation water:\n- *Plastic Drum Seeder:* Manually pulled cylindrical perforated plastic drums that meter pre-germinated paddy seeds onto saturated puddled soil in lines.\n- *Tractor-Drawn DSR Drill (Turbo Happy Seeder / Inclined Plate Drill):* Direct drills dry seeds into untilled or conventionally tilled soil at 2-3 cm depth with simultaneous pre-emergence herbicide spraying (pendimethalin) to suppress early weeds.",
        "subsections": [
          {
            "subheading": "Comparative Economics of DSR vs Puddled Transplanting",
            "content": "Key operational shifts:",
            "keyPoints": [
              "DSR reduces total labor requirement by 75-80% (eliminating nursery raising and manual uprooting/transplanting).",
              "Saves 350 to 500 mm of water per hectare by eliminating the puddling water layer.",
              "Requires aggressive, timely herbicide application to control early weed competition."
            ]
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Fluted feed rollers meter small grains continuously, while cell plates and pneumatic discs provide precision singulation.",
      "Fertilizer boots place chemical fertilizer 5 cm to the side and 3 cm deeper than seed to prevent chemical germination burn.",
      "Laboratory calibration formula: Seed Rate (kg/ha) = (w_test * 10,000) / (W * C * n_test); field wheel slip requires 5-10% compensation.",
      "Mechanical rice transplanters require mat-type nursery seedlings (15-18 days old) planted at 1.5-2.0 cm depth.",
      "Automated sugarcane cutter-planters cut whole stalks into 30-35 cm setts, treat with fungicide, place fertilizer, and cover in a single pass."
    ],
    "commonMisunderstandings": [
      {
        "myth": "A seed drill calibrated on workshop jacks will deliver the exact same seed rate in the field.",
        "reality": "In the field, ground drive wheels experience 5% to 12% traction slip on loose tilled soil, causing the drill to drop 5-12% less seed than predicted by jack calibration unless compensated."
      },
      {
        "myth": "Traditional root-wash nursery seedlings can be fed into mechanical paddy transplanters.",
        "reality": "Mechanical transplanters require dense, interlocking mat-type seedlings grown in specialized trays; loose root-wash seedlings jam the planting fingers and cause 100% missing hills."
      },
      {
        "myth": "Paddy seedlings should be transplanted as deep as possible (5-6 cm) to prevent them from falling over.",
        "reality": "Deep transplanting (>3 cm) suffocates basal nodes, delays tiller initiation, and reduces productive panicle count per hill; optimal depth is strictly 1.5 to 2.0 cm."
      }
    ],
    "summary": "Unit 3 covers sowing, planting, and transplanting machinery. It details seed drill functional assemblies, mechanical and pneumatic metering devices, furrow opener aerodynamics, seed drill calibration mathematics, mat-nursery paddy transplanters, potato planters, sugarcane cutter-planters, and water-saving Direct Seeded Rice (DSR) technologies."
  },
  "mcqs": [
    {
      "id": "SOL223-U3-MCQ01",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "difficulty": "Easy",
      "questionText": "Which sowing method is characterized by scattering seeds randomly across the soil surface by hand?",
      "options": {
        "A": "Dibbling",
        "B": "Drilling",
        "C": "Broadcasting",
        "D": "Precision planting"
      },
      "correctOption": "C",
      "explanation": "Broadcasting is the manual or centrifugal random scattering of seeds over the field surface."
    },
    {
      "id": "SOL223-U3-MCQ02",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "difficulty": "Easy",
      "questionText": "The method of depositing seeds continuously into narrow parallel furrow trenches opened by furrow openers is termed:",
      "options": {
        "A": "Dibbling",
        "B": "Drilling",
        "C": "Hill dropping",
        "D": "Check row planting"
      },
      "correctOption": "B",
      "explanation": "Drilling consists of dropping seeds continuously into regular furrows at a controlled depth."
    },
    {
      "id": "SOL223-U3-MCQ03",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Easy",
      "questionText": "Which seed metering device is most commonly fitted on commercial tractor grain seed drills in India?",
      "options": {
        "A": "Pneumatic vacuum disc",
        "B": "Fluted feed roller",
        "C": "Picker wheel",
        "D": "Rubber suction cup"
      },
      "correctOption": "B",
      "explanation": "Fluted feed rollers are the industry standard for continuous drilling of wheat, barley, and pulses."
    },
    {
      "id": "SOL223-U3-MCQ04",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Easy",
      "questionText": "Which furrow opener is best adapted for slicing cleanly through heavy standing crop stubble and trash?",
      "options": {
        "A": "Reversible shovel",
        "B": "Single or double disc opener",
        "C": "Wooden peg",
        "D": "Duckfoot sweep"
      },
      "correctOption": "B",
      "explanation": "Rotating disc furrow openers (single or double disc) slice through tough trash and stubble without clogging."
    },
    {
      "id": "SOL223-U3-MCQ05",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Easy",
      "questionText": "In seed drill calibration, what is the standard laboratory procedure using mechanical jacks called?",
      "options": {
        "A": "Tire inflation test",
        "B": "Jack calibration test (Stationary test)",
        "C": "Drawbar pull test",
        "D": "Engine dyno test"
      },
      "correctOption": "B",
      "explanation": "The stationary jack test elevates the drive wheel on jacks to simulate field wheel rotations in the workshop."
    },
    {
      "id": "SOL223-U3-MCQ06",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Easy",
      "questionText": "What specialized type of rice nursery is mandatory for operation with mechanical paddy transplanters?",
      "options": {
        "A": "Bare root-wash nursery",
        "B": "Mat-type seedling nursery raised in trays",
        "C": "Broad-bed nursery",
        "D": "Floating deepwater nursery"
      },
      "correctOption": "B",
      "explanation": "Mechanical transplanters require mat-type seedlings grown in specialized trays with interlocking root mats."
    },
    {
      "id": "SOL223-U3-MCQ07",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Easy",
      "questionText": "At what seedling age are mat-type rice seedlings typically ready for mechanical transplanting?",
      "options": {
        "A": "7 to 10 days",
        "B": "15 to 18 days",
        "C": "30 to 35 days",
        "D": "45 to 50 days"
      },
      "correctOption": "B",
      "explanation": "Mat-type rice seedlings are ready at 15 to 18 days of age when they reach 15-20 cm height with 3-4 leaves."
    },
    {
      "id": "SOL223-U3-MCQ08",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Easy",
      "questionText": "What is the recommended agronomic planting depth for rice seedlings in mechanical transplanting?",
      "options": {
        "A": "1.5 to 2.5 cm",
        "B": "5.0 to 6.5 cm",
        "C": "8.0 to 10.0 cm",
        "D": "12.0 to 15.0 cm"
      },
      "correctOption": "A",
      "explanation": "Shallow planting at 1.5 to 2.5 cm is critical to stimulate rapid basal tiller formation in transplanted rice."
    },
    {
      "id": "SOL223-U3-MCQ09",
      "syllabusTopic": "Potato planters (automatic and semi-automatic) and potato diggers",
      "difficulty": "Easy",
      "questionText": "Which mechanism in an automatic potato planter lifts individual seed tubers from the hopper to the delivery chute?",
      "options": {
        "A": "Pneumatic vacuum nozzle",
        "B": "Endless cup belt or revolving picker wheel",
        "C": "High-speed fluted roller",
        "D": "Centrifugal blower"
      },
      "correctOption": "B",
      "explanation": "Automatic potato planters use vertical cup belts or picker wheels that cup single tubers from the hopper pool."
    },
    {
      "id": "SOL223-U3-MCQ10",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms",
      "difficulty": "Easy",
      "questionText": "What is the standard sett length cut by an automated sugarcane cutter-planter?",
      "options": {
        "A": "10 to 15 cm",
        "B": "30 to 35 cm",
        "C": "60 to 75 cm",
        "D": "100 to 120 cm"
      },
      "correctOption": "B",
      "explanation": "Sugarcane cutter-planters chop whole stalks into 30 to 35 cm setts, each containing 2 to 3 viable eye buds."
    },
    {
      "id": "SOL223-U3-MCQ11",
      "syllabusTopic": "Precision seeders and pneumatic metering systems",
      "difficulty": "Easy",
      "questionText": "The placement of individual seeds at exact predetermined plant-to-plant intervals along a row is known as:",
      "options": {
        "A": "Continuous drilling",
        "B": "Precision planting (singulation)",
        "C": "Broadcasting",
        "D": "Random dibbling"
      },
      "correctOption": "B",
      "explanation": "Precision planting deposits single seeds at exact spacings, eliminating thinning and seed waste."
    },
    {
      "id": "SOL223-U3-MCQ12",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "difficulty": "Easy",
      "questionText": "What is the primary natural resource saved by shifting from puddled transplanted rice to Direct Seeded Rice (DSR)?",
      "options": {
        "A": "Phosphate rock",
        "B": "Irrigation water (saving 25-30%)",
        "C": "Sunlight",
        "D": "Atmospheric nitrogen"
      },
      "correctOption": "B",
      "explanation": "DSR eliminates the standing water puddling phase, conserving 25% to 30% of total irrigation water."
    },
    {
      "id": "SOL223-U3-MCQ13",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Easy",
      "questionText": "How is the seed discharge rate adjusted on a fluted feed roller seed drill?",
      "options": {
        "A": "Changing tractor tire pressure",
        "B": "Sliding the fluted roller axially to vary its exposed length inside the feed cup",
        "C": "Altering engine oil level",
        "D": "Tilting the seed box backward"
      },
      "correctOption": "B",
      "explanation": "Exposing more of the fluted roller inside the feed cup increases seed discharge per revolution."
    },
    {
      "id": "SOL223-U3-MCQ14",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Easy",
      "questionText": "Why does an internal double-run metering device have two distinct ribbed sides?",
      "options": {
        "A": "One side for seed and one side for fertilizer",
        "B": "One side with fine ribs for small seeds and the other with coarse ribs for large seeds",
        "C": "To rotate both clockwise and counter-clockwise",
        "D": "To separate weed seeds from clean seeds"
      },
      "correctOption": "B",
      "explanation": "The fine-ribbed side meters small seeds (mustard, clover) while the coarse-ribbed side handles large grains (maize, peas)."
    },
    {
      "id": "SOL223-U3-MCQ15",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Easy",
      "questionText": "Why are fertilizer delivery boots positioned to deposit fertilizer away from seed in a seed-cum-fertilizer drill?",
      "options": {
        "A": "To make the drill lighter",
        "B": "To place fertilizer 5 cm to the side and 3 cm deeper than seed to prevent chemical seedling burn",
        "C": "To feed soil earthworms",
        "D": "Because fertilizer tubes are shorter"
      },
      "correctOption": "B",
      "explanation": "Side-deep fertilizer banding prevents salt toxicity and osmotic root scorching of delicate germinating seedlings."
    },
    {
      "id": "SOL223-U3-MCQ16",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "difficulty": "Easy",
      "questionText": "What drives the seed metering shaft on a tractor-drawn seed-cum-fertilizer drill?",
      "options": {
        "A": "Tractor PTO shaft",
        "B": "A lugged ground drive wheel rolling on the soil via chain-and-sprocket driveline",
        "C": "An onboard electric battery",
        "D": "The engine exhaust gas pressure"
      },
      "correctOption": "B",
      "explanation": "A ground drive wheel rotates proportionally to ground travel distance, ensuring uniform seeding regardless of tractor speed."
    },
    {
      "id": "SOL223-U3-MCQ17",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Easy",
      "questionText": "Why is field calibration necessary after performing a workshop jack calibration of a seed drill?",
      "options": {
        "A": "Workshop lights affect seed flow",
        "B": "To account for ground drive wheel skid and slip in loose tilled soil (typically 5-10%)",
        "C": "Because seed grows heavier in sunlight",
        "D": "To test the tractor horn"
      },
      "correctOption": "B",
      "explanation": "Wheel slip in loose soil reduces drive wheel revolutions per hectare, causing under-seeding unless field-verified."
    },
    {
      "id": "SOL223-U3-MCQ18",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Easy",
      "questionText": "In a mechanical rice transplanter, how many seedlings are typically picked and planted per hill?",
      "options": {
        "A": "1 seedling only",
        "B": "2 to 4 seedlings",
        "C": "8 to 12 seedlings",
        "D": "15 to 20 seedlings"
      },
      "correctOption": "B",
      "explanation": "Planting fingers are sized to shear an area containing 2 to 4 healthy seedlings per hill."
    },
    {
      "id": "SOL223-U3-MCQ19",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "difficulty": "Easy",
      "questionText": "What is an eight-row plastic drum seeder used for in rice farming?",
      "options": {
        "A": "Threshing paddy sheaves",
        "B": "Seeding pre-germinated paddy seeds onto saturated puddled soil in lines",
        "C": "Spraying liquid urea",
        "D": "Digging drainage ditches"
      },
      "correctOption": "B",
      "explanation": "Hand-pulled plastic drum seeders meter sprouted paddy seeds directly onto wet puddled mud in parallel rows."
    },
    {
      "id": "SOL223-U3-MCQ20",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Easy",
      "questionText": "What device trails behind a furrow opener to press loose soil firmly around deposited seeds?",
      "options": {
        "A": "A sharp blade",
        "B": "A press wheel or drag chain",
        "C": "A rotary tiller blade",
        "D": "A subsoiler tine"
      },
      "correctOption": "B",
      "explanation": "Press wheels or drag chains press loose soil into intimate contact with seeds to facilitate capillary moisture uptake."
    },
    {
      "id": "SOL223-U3-MCQ21",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Medium",
      "questionText": "A 9-row seed drill has a row spacing of 20 cm. Its ground wheel diameter is 70 cm. How many wheel revolutions are required to cover one hectare?",
      "options": {
        "A": "1250 revolutions",
        "B": "2526 revolutions",
        "C": "3620 revolutions",
        "D": "5052 revolutions"
      },
      "correctOption": "B",
      "explanation": "Width W = 9 * 0.20 = 1.80 m. Circumference C = pi * 0.70 = 2.199 m. Area per turn = 1.80 * 2.199 = 3.958 m\u00b2. Revolutions/ha = 10,000 / 3.958 = 2526 revolutions."
    },
    {
      "id": "SOL223-U3-MCQ22",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Medium",
      "questionText": "Using the seed drill from the previous question (2526 rev/ha), if 50 test revolutions on jacks yield 2.4 kg of wheat seed, what is the seed rate in kg/ha?",
      "options": {
        "A": "80 kg/ha",
        "B": "100 kg/ha",
        "C": "121.2 kg/ha",
        "D": "145 kg/ha"
      },
      "correctOption": "C",
      "explanation": "Seed rate = (2.4 kg / 50 rev) * 2526 rev/ha = 0.048 * 2526 = 121.25 kg/ha."
    },
    {
      "id": "SOL223-U3-MCQ23",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Medium",
      "questionText": "Why are inclined plate metering devices preferred over horizontal cell plates for fragile seeds like groundnut?",
      "options": {
        "A": "They rotate at 1000 rpm",
        "B": "Gravity assists filling and emptying of cells with minimal mechanical shearing or seed split damage",
        "C": "They require no drive chains",
        "D": "They operate without ground wheels"
      },
      "correctOption": "B",
      "explanation": "Inclining the plate allows seeds to tumble gently into cells, reducing seed coat cracking and kernel splitting."
    },
    {
      "id": "SOL223-U3-MCQ24",
      "syllabusTopic": "Precision seeders and pneumatic metering systems",
      "difficulty": "Medium",
      "questionText": "In a pneumatic vacuum precision planter, how is seed singulation achieved?",
      "options": {
        "A": "By passing seeds through a wire screen",
        "B": "Air suction holds individual seeds against revolving disc holes, while an adjustable scraper wipes away doubles",
        "C": "By coating seeds in plastic",
        "D": "By magnetic attraction"
      },
      "correctOption": "B",
      "explanation": "Controlled vacuum draws one seed per orifice; mechanical singulators brush away extras, delivering singular placement."
    },
    {
      "id": "SOL223-U3-MCQ25",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Medium",
      "questionText": "Why must water depth in the field be maintained strictly at 1 to 2 cm during mechanical rice transplanting?",
      "options": {
        "A": "To keep the engine cool",
        "B": "Excess water causes transplanted seedlings to float and drift, while dry hard mud jams the planting fingers",
        "C": "To prevent weed seeds from growing",
        "D": "To float the transplanter hull"
      },
      "correctOption": "B",
      "explanation": "Deep standing water (>3 cm) causes light root-mat seedlings to float out of the mud, leading to severe missing hill rates."
    },
    {
      "id": "SOL223-U3-MCQ26",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms",
      "difficulty": "Medium",
      "questionText": "Why do modern sugarcane cutter-planters incorporate an inline fungicidal spray chamber?",
      "options": {
        "A": "To kill caterpillars on the tractor",
        "B": "To coat freshly cut sett ends with systemic fungicide (e.g., carbendazim) to prevent red rot and sett rot infection",
        "C": "To wash off dirt",
        "D": "To color the cane setts"
      },
      "correctOption": "B",
      "explanation": "Freshly cut vascular bundles are highly vulnerable to *Colletotrichum falcatum* (red rot); inline fungicidal misting prevents rot."
    },
    {
      "id": "SOL223-U3-MCQ27",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Medium",
      "questionText": "A double disc furrow opener is superior in wet, sticky soils primarily because:",
      "options": {
        "A": "It uses no metal parts",
        "B": "The two discs rotate against each other at an angle, slicing a clean V-trench while scrapers clean the outer faces",
        "C": "It runs 50 cm deep",
        "D": "It heats the soil"
      },
      "correctOption": "B",
      "explanation": "Dual discs shear sticky mud without smearing sidewalls and shed wet soil cleanly when fitted with scrapers."
    },
    {
      "id": "SOL223-U3-MCQ28",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "difficulty": "Medium",
      "questionText": "What is the function of the 'Lucky Seed Drill' (Turbo Happy Seeder variant) in conservation agriculture?",
      "options": {
        "A": "Drills seeds exclusively on dry sand",
        "B": "Simultaneously direct-drills seeds into heavy standing stubble and applies a pre-emergence herbicide spray in one pass",
        "C": "Sorts seeds by weight",
        "D": "Harvests wheat at night"
      },
      "correctOption": "B",
      "explanation": "Lucky Seed Drills combine in-situ zero-till seeding through rice stubble with synchronized band spraying of weedicide."
    },
    {
      "id": "SOL223-U3-MCQ29",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Medium",
      "questionText": "Why is a star wheel metering mechanism commonly deployed for chemical fertilizer distribution?",
      "options": {
        "A": "It spins at high velocity",
        "B": "Its rotating fingers positively displace semi-moist, caked, and hygroscopic fertilizer granules through an adjustable gate",
        "C": "It dissolves fertilizer in water",
        "D": "It acts as a magnetic separator"
      },
      "correctOption": "B",
      "explanation": "Star wheel fingers break lumps and positively expel sticky, hygroscopic fertilizers that would bridge over gravity gates."
    },
    {
      "id": "SOL223-U3-MCQ30",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Medium",
      "questionText": "If an 11-row seed drill with 15 cm row spacing is calibrated for wheat at 100 kg/ha, how much seed should drop from each individual opener per 100 meters of forward travel?",
      "options": {
        "A": "82.5 grams",
        "B": "150.0 grams",
        "C": "225.0 grams",
        "D": "300.0 grams"
      },
      "correctOption": "B",
      "explanation": "Row spacing S = 0.15 m. Area covered by one row over 100 m = 0.15 m * 100 m = 15 m\u00b2. Seed per opener = (100 kg / 10,000 m\u00b2) * 15 m\u00b2 = 0.15 kg = 150 grams."
    },
    {
      "id": "SOL223-U3-MCQ31",
      "syllabusTopic": "Potato planters (automatic and semi-automatic) and potato diggers",
      "difficulty": "Medium",
      "questionText": "In semi-automatic potato planters, why are human operators required on the machine?",
      "options": {
        "A": "To steer the tractor from behind",
        "B": "To manually place single seed tubers into revolving compartmentalized feed rotor trays to prevent misses",
        "C": "To spray insecticide by hand",
        "D": "To cut potatoes into pieces"
      },
      "correctOption": "B",
      "explanation": "Operators place tubers manually into rotary pockets to eliminate skips caused by irregular tuber shapes and sizes."
    },
    {
      "id": "SOL223-U3-MCQ32",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Medium",
      "questionText": "What is the hill-to-hill spacing typically maintained by mechanical rice transplanters along the crop row?",
      "options": {
        "A": "5 to 8 cm",
        "B": "12 to 18 cm",
        "C": "30 to 35 cm",
        "D": "45 to 50 cm"
      },
      "correctOption": "B",
      "explanation": "Row spacing is standardly fixed at 30 cm, while in-row hill spacing is adjustable between 12 and 18 cm."
    },
    {
      "id": "SOL223-U3-MCQ33",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "difficulty": "Medium",
      "questionText": "Why are transparent plastic tubes preferred over opaque rubber hoses for seed and fertilizer delivery?",
      "options": {
        "A": "They are cheaper to mold",
        "B": "They allow the operator to visually detect clogs, bridging, and delivery interruptions immediately",
        "C": "They reflect harmful UV rays",
        "D": "They increase seed germination speed"
      },
      "correctOption": "B",
      "explanation": "Transparent tubes allow immediate visual detection of blockages caused by mud daubers, lumps, or foreign debris."
    },
    {
      "id": "SOL223-U3-MCQ34",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Medium",
      "questionText": "A shoe-type furrow opener is particularly advantageous in cloddy, poorly prepared seedbeds because:",
      "options": {
        "A": "It acts as a rotary tiller",
        "B": "Its curved runner shoe easily pushes aside surface clods and opens a smooth groove without digging too deep",
        "C": "It has zero draft",
        "D": "It vibrates at high frequency"
      },
      "correctOption": "B",
      "explanation": "The wedge-like runner shoe rides over subsurface obstructions and parts cloddy soil without bogging down."
    },
    {
      "id": "SOL223-U3-MCQ35",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Medium",
      "questionText": "If the drive wheel of a seed drill has a 10% slip in tilled soil, what adjustment must be made to the metering gate setting determined on jacks?",
      "options": {
        "A": "Close the gate by 10%",
        "B": "Open the gate to deliver approximately 10% to 11% more seed per revolution to compensate for slip",
        "C": "Leave it unchanged",
        "D": "Reduce tractor speed by half"
      },
      "correctOption": "B",
      "explanation": "With 10% slip, the wheel turns 10% fewer times per hectare; the metering rate per revolution must be boosted by ~11%."
    },
    {
      "id": "SOL223-U3-MCQ36",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Medium",
      "questionText": "How many seedling trays are standardly required to transplant one hectare of rice using a mechanical transplanter?",
      "options": {
        "A": "5 to 10 trays",
        "B": "20 to 30 trays",
        "C": "70 to 80 trays",
        "D": "180 to 220 trays"
      },
      "correctOption": "D",
      "explanation": "One hectare requires approximately 180 to 220 seedling trays (60 cm x 30 cm) containing ~30-35 kg total seed."
    },
    {
      "id": "SOL223-U3-MCQ37",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms",
      "difficulty": "Medium",
      "questionText": "How does an automated sugarcane cutter-planter maintain correct sett orientation in the furrow?",
      "options": {
        "A": "Using optical sensors",
        "B": "Setts fall by gravity through guided chutes to lie flat in the bottom of the opened furrow",
        "C": "Magnetic guides",
        "D": "Using compressed air jets"
      },
      "correctOption": "B",
      "explanation": "Guided delivery chutes ensure setts drop horizontally end-to-end along the furrow floor with buds positioned laterally."
    },
    {
      "id": "SOL223-U3-MCQ38",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Medium",
      "questionText": "What occurs if a fluted feed roller seed drill is operated with fertilizer mixed directly into the seed hopper?",
      "options": {
        "A": "Yield doubles",
        "B": "Corrosive fertilizer particles degrade the nylon/cast flutes and can cause seed germination failure from chemical burn",
        "C": "Drive wheel slips completely",
        "D": "Seed drill flies off the hitch"
      },
      "correctOption": "B",
      "explanation": "Direct contact induces osmotic seed desiccation and severely corrodes seed metering rollers and shafts."
    },
    {
      "id": "SOL223-U3-MCQ39",
      "syllabusTopic": "Precision seeders and pneumatic metering systems",
      "difficulty": "Medium",
      "questionText": "What is the coefficient of variation (CV) used to quantify in precision planter testing?",
      "options": {
        "A": "Fuel consumption variance",
        "B": "Uniformity of seed-to-seed spacing along the furrow (singulation consistency)",
        "C": "Tractor tire wear rate",
        "D": "Air humidity fluctuation"
      },
      "correctOption": "B",
      "explanation": "CV measures seed spacing uniformity; lower CV values (<15%) indicate superior singulation with minimal skips or doubles."
    },
    {
      "id": "SOL223-U3-MCQ40",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "difficulty": "Medium",
      "questionText": "Why must paddy seeds be soaked and pre-germinated (sprouted 1-2 mm) prior to using a manual drum seeder?",
      "options": {
        "A": "To make seeds heavy enough to sink",
        "B": "Pre-germination initiates rapid root anchorage into wet mud before seeds can be washed away by surface water",
        "C": "To change seed color",
        "D": "To remove the rice husk"
      },
      "correctOption": "B",
      "explanation": "A 1-2 mm radicle anchor attaches rapidly to wet puddled mud, preventing seed displacement during surface drainage."
    },
    {
      "id": "SOL223-U3-MCQ41",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Medium",
      "questionText": "Why are press wheels often rubber-tired with a center concave groove?",
      "options": {
        "A": "To prevent tire punctures",
        "B": "To pack soil firmly around the seed on the sides while leaving the soil directly above the seed loose to avoid crusting",
        "C": "To decorate the drill",
        "D": "To drive the tractor steering"
      },
      "correctOption": "B",
      "explanation": "Center-ribbed press wheels firm moist soil against the seed flanks while leaving topsoil loose for unhindered coleoptile emergence."
    },
    {
      "id": "SOL223-U3-MCQ42",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "difficulty": "Medium",
      "questionText": "What is the primary function of the agitator shaft inside a seed drill hopper?",
      "options": {
        "A": "Mix different varieties of seeds",
        "B": "Prevent seed bridging and hollow arch formation over metering orifices, ensuring continuous gravity feed",
        "C": "Crush oversized seeds",
        "D": "Generate static electricity"
      },
      "correctOption": "B",
      "explanation": "Agitator paddles continuously disrupt compacted bridges, ensuring uninterrupted seed flow into feed cups."
    },
    {
      "id": "SOL223-U3-MCQ43",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Medium",
      "questionText": "What operational defect occurs if rice seedlings are transplanted into a freshly puddled field without allowing 24-48 hours settling time?",
      "options": {
        "A": "Seedlings dry up",
        "B": "The heavy transplanter sinks deeply into the soup-like mud, creating excessive ruts and burying seedlings completely",
        "C": "Transplanter wheels spin at 500 rpm",
        "D": "Water turns into ice"
      },
      "correctOption": "B",
      "explanation": "Without settling, fluid mud cannot support machine weight; seedlings get submerged and buried under liquid mud waves."
    },
    {
      "id": "SOL223-U3-MCQ44",
      "syllabusTopic": "Potato planters (automatic and semi-automatic) and potato diggers",
      "difficulty": "Medium",
      "questionText": "Why are potato tubers graded by size (e.g., 35-45 mm) before loading into an automatic cup-type planter?",
      "options": {
        "A": "To improve potato flavor",
        "B": "To ensure that each cup picks exactly one tuber without dropping doubles or causing cup misses",
        "C": "To remove all potato starch",
        "D": "To change skin pigmentation"
      },
      "correctOption": "B",
      "explanation": "Consistent tuber sizing ensures single-tuber pickup per cup, avoiding skips (empty cups) and doubles (two tubers/cup)."
    },
    {
      "id": "SOL223-U3-MCQ45",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Medium",
      "questionText": "During seed drill calibration, if the seed collection from individual furrow tubes varies by more than \u00b15% from the mean, what is indicated?",
      "options": {
        "A": "Hopper is empty",
        "B": "Metering gate openings or fluted roller exposures are unevenly adjusted and must be realigned individually",
        "C": "Tractor requires an oil change",
        "D": "Field is too hilly"
      },
      "correctOption": "B",
      "explanation": "Variation >5% among tubes reveals uneven lateral shaft positioning or individual feed gate misalignment."
    },
    {
      "id": "SOL223-U3-MCQ46",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Hard",
      "questionText": "A 12-row seed drill with 18 cm row spacing has a ground wheel diameter of 0.80 m. During workshop calibration on jacks, 60 wheel revolutions drop 3.24 kg of seed. The field drive wheel slip is measured at 8%. What is the actual field seed rate?",
      "options": {
        "A": "78.5 kg/ha",
        "B": "92.0 kg/ha",
        "C": "100.0 kg/ha",
        "D": "108.7 kg/ha"
      },
      "correctOption": "B",
      "explanation": "Width W = 12 * 0.18 = 2.16 m. Wheel circumference C = pi * 0.80 = 2.513 m. Nominal turns/ha = 10,000 / (2.16 * 2.513) = 1842.2 rev. Theoretical rate = (3.24 / 60) * 1842.2 = 99.48 kg/ha. With 8% slip, actual field turns/ha = 1842.2 * (1 - 0.08) = 1694.8 rev. Actual rate = (3.24 / 60) * 1694.8 = 91.52 ~ 92.0 kg/ha."
    },
    {
      "id": "SOL223-U3-MCQ47",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Hard",
      "questionText": "In a precision planter testing stand, a target spacing of 20 cm is evaluated across 100 consecutive seeds. The mean spacing is 20.2 cm with a standard deviation of 2.1 cm. What is the Coefficient of Variation (CV)?",
      "options": {
        "A": "5.2%",
        "B": "10.4%",
        "C": "15.8%",
        "D": "20.2%"
      },
      "correctOption": "B",
      "explanation": "CV (%) = (Standard Deviation / Mean) * 100 = (2.1 / 20.2) * 100 = 10.39% ~ 10.4%."
    },
    {
      "id": "SOL223-U3-MCQ48",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Hard",
      "questionText": "A 6-row riding-type paddy transplanter operates at a forward speed of 2.7 km/h with 30 cm row spacing and 14 cm hill spacing. How many planting strokes must each planting arm execute per minute?",
      "options": {
        "A": "160 strokes/min",
        "B": "321 strokes/min",
        "C": "450 strokes/min",
        "D": "540 strokes/min"
      },
      "correctOption": "B",
      "explanation": "Forward speed = 2.7 km/h = 2700 m / 60 min = 45 m/min = 4500 cm/min. Distance per hill = 14 cm. Strokes per minute = 4500 cm/min / 14 cm/stroke = 321.4 strokes/min."
    },
    {
      "id": "SOL223-U3-MCQ49",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Hard",
      "questionText": "Using the transplanter data from the previous question (W = 6 * 0.30 = 1.8 m, V = 2.7 km/h), if field efficiency is 75%, what is the effective field capacity?",
      "options": {
        "A": "0.18 ha/h",
        "B": "0.27 ha/h",
        "C": "0.36 ha/h",
        "D": "0.48 ha/h"
      },
      "correctOption": "C",
      "explanation": "EFC = (Width * Speed * Efficiency) / 10 = (1.8 m * 2.7 km/h * 0.75) / 10 = 3.645 / 10 = 0.365 ha/h ~ 0.36 ha/h."
    },
    {
      "id": "SOL223-U3-MCQ50",
      "syllabusTopic": "Precision seeders and pneumatic metering systems",
      "difficulty": "Hard",
      "questionText": "In a vacuum precision planter, if the vacuum pressure is set too high (>6.5 kPa instead of 3.5 kPa for maize), what operational fault results?",
      "options": {
        "A": "Severe seed skips (missing plants)",
        "B": "High percentage of doubles and triples (multiple seeds clinging to single holes)",
        "C": "Seed hopper implosion",
        "D": "Excessive wheel slip"
      },
      "correctOption": "B",
      "explanation": "Excessive vacuum overcomes the mechanical singulator brush, holding multiple seeds against a single hole."
    },
    {
      "id": "SOL223-U3-MCQ51",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Hard",
      "questionText": "A cup feed mechanism has 12 cups on a disc of 30 cm diameter rotating at 25 rpm. If each cup carries an average of 1.5 seeds, how many seeds are discharged per minute?",
      "options": {
        "A": "150 seeds/min",
        "B": "300 seeds/min",
        "C": "450 seeds/min",
        "D": "600 seeds/min"
      },
      "correctOption": "C",
      "explanation": "Discharge rate = Cups/rev * RPM * Seeds/cup = 12 * 25 * 1.5 = 450 seeds/min."
    },
    {
      "id": "SOL223-U3-MCQ52",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "difficulty": "Hard",
      "questionText": "In a double disc opener, what is the critical convergence angle formed between the two rotating discs at their leading edge?",
      "options": {
        "A": "2\u00b0 to 3\u00b0",
        "B": "7\u00b0 to 10\u00b0",
        "C": "25\u00b0 to 30\u00b0",
        "D": "40\u00b0 to 45\u00b0"
      },
      "correctOption": "B",
      "explanation": "The two discs converge forward at an acute angle of 7\u00b0 to 10\u00b0, contacting at the front to cut a clean V-shaped trench."
    },
    {
      "id": "SOL223-U3-MCQ53",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "difficulty": "Hard",
      "questionText": "Why must pre-emergence herbicide (e.g., pendimethalin @ 1.0 kg a.i./ha) be applied within 24-48 hours of sowing in DSR?",
      "options": {
        "A": "To soften the soil",
        "B": "Because unpuddled aerobic soil lacks standing water weed suppression, allowing rapid weed flush that chokes rice seedlings",
        "C": "To fertilize the rice roots",
        "D": "To repel birds"
      },
      "correctOption": "B",
      "explanation": "Aerobic DSR environments lack the weed-suppressing water layer of puddled fields, making immediate pre-emergence herbicide vital."
    },
    {
      "id": "SOL223-U3-MCQ54",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "difficulty": "Hard",
      "questionText": "A farmer wants to sow chickpeas at 75 kg/ha with a 6-row drill spaced at 30 cm. If the drive wheel circumference is 2.2 m, what mass of seed must be collected from all tubes in 40 jack revolutions?",
      "options": {
        "A": "0.60 kg",
        "B": "1.19 kg",
        "C": "2.38 kg",
        "D": "3.50 kg"
      },
      "correctOption": "B",
      "explanation": "Width W = 6 * 0.30 = 1.8 m. Area covered in 40 rev = 1.8 m * 2.2 m * 40 = 158.4 m\u00b2. Total seed = (75 kg / 10,000 m\u00b2) * 158.4 m\u00b2 = 1.188 kg ~ 1.19 kg."
    },
    {
      "id": "SOL223-U3-MCQ55",
      "syllabusTopic": "Potato planters (automatic and semi-automatic) and potato diggers",
      "difficulty": "Hard",
      "questionText": "What is the mechanical cause of 'skips' (empty hills) in an automatic cup-type potato planter?",
      "options": {
        "A": "Too much fertilizer",
        "B": "Excessive conveyor belt speed or undersized tubers that slip through cups",
        "C": "Tractor traveling too slowly",
        "D": "Tire pressure too high"
      },
      "correctOption": "B",
      "explanation": "Excessive belt speed creates centrifugal force that flings tubers out of cups, while non-uniform tubers fail to seat in cups."
    },
    {
      "id": "SOL223-U3-MCQ56",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms",
      "difficulty": "Hard",
      "questionText": "In a sugarcane cutter planter, what prevents eye buds from being crushed during sett cutting?",
      "options": {
        "A": "Laser cutting",
        "B": "Cane stalks are fed between soft rubberized feeding rollers and sliced by high-speed serrated rotary disc blades",
        "C": "Setts are broken by hand",
        "D": "Cane is softened with steam"
      },
      "correctOption": "B",
      "explanation": "Pneumatic/rubberized feed rollers grip the internodes firmly while sharp rotary disc knives shear the stalk without crushing nodes."
    },
    {
      "id": "SOL223-U3-MCQ57",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "difficulty": "Hard",
      "questionText": "What is the effect of changing the forward travel speed on the seed rate (kg/ha) of a ground-wheel-driven seed drill?",
      "options": {
        "A": "Seed rate doubles when speed doubles",
        "B": "Seed rate drops to zero at high speed",
        "C": "Seed rate per hectare remains virtually constant (within reasonable speed limits)",
        "D": "Seed rate varies inversely with the cube of speed"
      },
      "correctOption": "C",
      "explanation": "Because the metering shaft is driven directly by the ground wheel, drive shaft speed scales proportionally with forward speed."
    },
    {
      "id": "SOL223-U3-MCQ58",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "difficulty": "Hard",
      "questionText": "In a mat nursery, why is a high seeding rate (100-120 g per 60x30 cm tray) intentionally used?",
      "options": {
        "A": "To compensate for 90% dead seeds",
        "B": "To produce a dense, interwoven fibrous root matrix that holds the soil cake together during mechanical finger shearing",
        "C": "To produce thick wooden stems",
        "D": "To prevent leaves from turning green"
      },
      "correctOption": "B",
      "explanation": "Dense seedling populations force roots to intertwine tightly, forming a cohesive mat that planting fingers can slice cleanly."
    },
    {
      "id": "SOL223-U3-MCQ59",
      "syllabusTopic": "Precision seeders and pneumatic metering systems",
      "difficulty": "Hard",
      "questionText": "In pneumatic planters, what is the purpose of the 'seed cell cutoff wheel' (singulator wiper)?",
      "options": {
        "A": "To cut seeds in half",
        "B": "To physically dislodge secondary seeds clinging to a vacuum hole, leaving exactly one seed per cell",
        "C": "To blow seeds into the furrow",
        "D": "To seal air leaks in the manifold"
      },
      "correctOption": "B",
      "explanation": "The singulator wiper wipes off multiple seeds held by surface friction or excess suction, ensuring near-perfect singulation."
    },
    {
      "id": "SOL223-U3-MCQ60",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "difficulty": "Hard",
      "questionText": "Why are fertilizer drive sprockets designed with shear pins or slip clutches on heavy seed drills?",
      "options": {
        "A": "To prevent theft of fertilizer",
        "B": "To prevent gearbox breakage if hard hygroscopic fertilizer cakes solidify and seize the star wheel mechanism",
        "C": "To adjust row spacing",
        "D": "To sound an alarm in the cab"
      },
      "correctOption": "B",
      "explanation": "Caked fertilizer can lock metering star wheels solid; safety shear pins break harmlessly to protect gears and shafts from stripping."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL223-U3-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "questionText": "Define Drilling, Dibbling, and Precision Planting. State one agricultural crop suited to each method.",
      "modelAnswer": "Definitions and Agricultural Suitability of Sowing Methods:\n\n1. Drilling:\n- Definition: The mechanical operation of dropping seeds continuously into narrow parallel furrow trenches opened by furrow openers at uniform depth, followed immediately by soil covering and firming.\n- Characteristics: Seeds are distributed continuously along the row without precise plant-to-plant singulation, though row-to-row spacing and depth are strictly regulated.\n- Suited Crop: Wheat (*Triticum aestivum*), barley, and oats.\n\n2. Dibbling:\n- Definition: The placement of individual seeds or seed clusters into discrete holes or cavities punched into the soil at predetermined uniform spacings along rows, followed by soil closure.\n- Characteristics: Provides fixed row and hill intervals with lower seed rate than drilling, traditionally done manually or with dibblers.\n- Suited Crop: Cotton (*Gossypium hirsutum*) and pumpkin/cucurbits.\n\n3. Precision Planting (Singulation):\n- Definition: Sowing method where individual single seeds are separated from bulk hoppers and deposited into furrows at exact, uniform plant-to-plant intervals with near-zero occurrence of skips or doubles.\n- Characteristics: Employs cell plate or pneumatic vacuum metering, optimizing spatial solar interception and nutrient absorption without post-emergence thinning.\n- Suited Crop: Hybrid maize (*Zea mays*), sunflower, and sugar beet.",
      "outlinePoints": [
        "Definition and operational characteristics of Drilling (cereal grains)",
        "Definition and operational characteristics of Dibbling (discrete hills)",
        "Definition, singulation mechanics, and benefits of Precision Planting",
        "Specific crop examples for each sowing method"
      ]
    },
    {
      "id": "SOL223-U3-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "questionText": "Compare the Fluted Feed Roller metering mechanism with the Internal Double-Run metering mechanism in terms of construction, seed adjustment, and seed damage.",
      "modelAnswer": "Fluted Feed Roller vs Internal Double-Run Metering Mechanism:\n\n1. Construction & Geometry:\n- Fluted Feed Roller: Consists of a cylindrical metal or nylon roller featuring longitudinal flutes (grooves) mounted on a square shaft inside a stationary feed cup beneath the hopper. A smooth shut-off cutoff sleeve slides axially beside it.\n- Internal Double-Run: Consists of a vertical cast-iron disc mounted on a drive shaft. Both internal faces of the disc are hollowed with radial ribs: one face features a narrow channel with fine ribs, while the opposite face features a wide channel with coarse, deep ribs.\n\n2. Seed Rate Adjustment Mechanism:\n- Fluted Feed Roller: Rate is adjusted by sliding the fluted roller axially along the shaft to vary the exposed length of flutes inside the feed cup. Sliding the roller fully into the cup maximizes discharge; withdrawing it reduces seed rate.\n- Internal Double-Run: The active side is selected by reversing the drive or sliding an adjustable cover plate. Seed rate is adjusted primarily by changing the rotational speed of the shaft using a multi-speed gearbox or chain-sprocket ratio.\n\n3. Seed Applicability & Mechanical Damage:\n- Fluted Feed Roller: Universal for medium cereals (wheat, barley, pulses). However, large fragile seeds (groundnut, soybean) can get sheared between the flute edges and the feed cup lip, causing 2-5% mechanical seed coat cracking.\n- Internal Double-Run: Exceptionally gentle. The fine side meters tiny oilseeds (mustard, sesame) without leakage; the coarse side handles large grains (peas, maize) with virtually zero mechanical damage (<0.5%).",
      "outlinePoints": [
        "Structural design: axial fluted cylinder vs dual-sided ribbed disc",
        "Seed rate adjustment: axial fluted length vs gearbox speed variation",
        "Small seed capability (mustard, clover) vs large grain handling",
        "Mechanical seed coat damage and cracking vulnerability comparison"
      ]
    },
    {
      "id": "SOL223-U3-SUB03",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "questionText": "Explain the step-by-step laboratory calibration procedure (Jack Method) for a tractor-drawn seed-cum-fertilizer drill. Derive all necessary mathematical formulas and explain why field calibration is needed.",
      "modelAnswer": "Laboratory Calibration Procedure (Jack Method) for Seed-Cum-Fertilizer Drills:\n\n1. Agronomic Significance:\nCalibration ensures that the drill delivers the exact recommended seed rate (kg/ha) across all furrow openers. Under-seeding results in poor plant stand and sub-optimal yields; over-seeding wastes expensive certified seed and causes excessive vegetative lodging.\n\n2. Step-by-Step Experimental Procedure:\n- Step 1: Measure effective width of the drill: W = N * S, where N is the number of furrow openers and S is the row spacing in meters.\n- Step 2: Measure the effective rolling diameter (D in meters) of the ground drive wheel. Calculate its circumference: C = pi * D (meters).\n- Step 3: Determine revolutions required per hectare (10,000 m\u00b2):\nN_ha = 10,000 / (W * C)\n- Step 4: Raise the seed drill on sturdy mechanical jack stands until the ground drive wheels rotate freely without contacting the floor.\n- Step 5: Fill the seed box with clean, graded seed and set the metering feed gate/lever to an estimated scale notch.\n- Step 6: Place clean collection bags or plastic trays under every seed delivery tube.\n- Step 7: Rotate the drive wheel manually for a predetermined test revolution count (e.g., n_test = 50 or 100 turns) at a steady speed simulating field travel.\n- Step 8: Collect the seed discharged from each tube and weigh each individually to check for uniformity across openers (variation among tubes must be <\u00b15%).\n- Step 9: Sum all individual weights to determine total seed dropped: w_test (in kg).\n- Step 10: Calculate the experimental seed rate:\nSeed Rate (kg/ha) = (w_test * N_ha) / n_test = (w_test * 10,000) / (W * C * n_test)\n- Step 11: If the calculated rate deviates from the target, adjust the metering lever and repeat until the target rate is achieved within \u00b12%.\n\n3. Why Field Verification is Mandatory:\nWorkshop jack testing operates under zero wheel slip. In real agricultural fields, ground drive wheels experience 5% to 12% traction slip on loose tilled soil. Consequently, a drill that drops 100 kg/ha on jacks will only turn 90-95% of its revolutions per hectare in the field, under-seeding by 5-10%. Field testing over a marked 50-meter track is required to determine true wheel slip and apply an upward correction factor.",
      "outlinePoints": [
        "Agronomic objective of calibration: achieving target plant population",
        "Geometrical measurements: effective drill width (W) and wheel circumference (C)",
        "Mathematical derivation of revolutions per hectare (N_ha = 10,000 / (W * C))",
        "Experimental execution: jack elevation, tray placement, and uniform test turning",
        "Formula for Seed Rate (kg/ha) and uniformity checking across tubes (<\u00b15%)",
        "Explanation of drive wheel slip (5-12%) and need for field correction"
      ]
    },
    {
      "id": "SOL223-U3-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "questionText": "Compare Shovel Type and Double Disc furrow openers in terms of construction, penetration in trash, and suited soil conditions.",
      "modelAnswer": "Shovel Type vs Double Disc Furrow Openers:\n\n1. Construction & Soil Engagement:\n- Shovel Opener: Consists of a rigid vertical shank fitted with a reversible carbon-steel shovel point (or spear). Soil is opened by continuous horizontal wedging and displacement as the shovel is pulled forward.\n- Double Disc Opener: Features two flat, hardened circular steel discs (30 to 35 cm diameter) mounted at a narrow acute angle (7\u00b0 to 10\u00b0) contacting at their leading edge. The discs roll across the ground, cutting a clean V-shaped trench.\n\n2. Performance in Surface Residue and Stubble:\n- Shovel Opener: Unsuitable for trashy fields; long straw and crop residue catch on the vertical shank, quickly bulldozing into large clogs that lift the drill out of the ground.\n- Double Disc Opener: Superior residue handling; the sharp rotating discs roll over and slice cleanly through heavy corn stalks, wheat straw, and surface mulch without dragging.\n\n3. Suited Soil Conditions:\n- Shovel: Ideal for well-prepared, pulverized, clean, stone-free seedbeds.\n- Double Disc: Essential for conservation tillage, direct drilling into crop residues, and moist, sticky clay soils when equipped with scrapers.",
      "outlinePoints": [
        "Construction: stationary wedging shovel vs rotating dual acute discs (7\u00b0-10\u00b0)",
        "Residue handling: severe bulldozing/clogging (shovel) vs clean rolling slicing (double disc)",
        "Furrow quality: variable tearing vs clean V-groove profile",
        "Soil applicability: conventional pulverized soil vs heavy-residue conservation fields"
      ]
    },
    {
      "id": "SOL223-U3-SUB05",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "questionText": "A 9-row seed drill with 20 cm row spacing has a ground wheel diameter of 80 cm. In a workshop calibration test on jacks, 50 revolutions of the drive wheel yield 1.85 kg of wheat seed. Calculate: (a) Effective drill width in meters, (b) Wheel revolutions required per hectare, (c) Seed rate in kg/ha, and (d) If field wheel slip is 8%, what will be the actual field seed rate?",
      "modelAnswer": "Given Parameters:\n- Number of furrow openers (N) = 9\n- Row spacing (S) = 20 cm = 0.20 m\n- Ground wheel diameter (D) = 80 cm = 0.80 m\n- Test revolutions on jacks (n_test) = 50 rev\n- Seed collected in test (w_test) = 1.85 kg\n- Field wheel slip (s) = 8% = 0.08\n\nStep 1: Calculate Effective Drill Width (W):\nW = N * S = 9 * 0.20 m = 1.80 m\n\nStep 2: Calculate Ground Wheel Circumference (C):\nC = pi * D = 3.14159 * 0.80 m = 2.5133 m\n\nStep 3: Calculate Nominal Revolutions per Hectare (N_ha):\nArea covered per revolution = W * C = 1.80 m * 2.5133 m = 4.524 m\u00b2\nN_ha = 10,000 m\u00b2 / 4.524 m\u00b2 = 2210.4 revolutions per hectare\n\nStep 4: Calculate Laboratory Seed Rate (SR_lab):\nSR_lab = (w_test / n_test) * N_ha\nSR_lab = (1.85 kg / 50 rev) * 2210.4 rev/ha\nSR_lab = 0.037 kg/rev * 2210.4 rev/ha = 81.78 kg/ha\n\nStep 5: Calculate Actual Field Seed Rate with 8% Slip (SR_field):\nWith 8% slip, the ground wheel turns only (1 - 0.08) = 0.92 of nominal revolutions when traversing one hectare in the field:\nActual Field Revolutions = 2210.4 * 0.92 = 2033.6 rev/ha\nSR_field = 0.037 kg/rev * 2033.6 rev/ha = 75.24 kg/ha\nAlternatively: SR_field = SR_lab * (1 - s) = 81.78 * 0.92 = 75.24 kg/ha\n\nFinal Answers:\n(a) Effective Drill Width = 1.80 meters\n(b) Nominal Revolutions per Hectare = 2210.4 rev/ha\n(c) Laboratory Seed Rate = 81.78 kg/ha\n(d) Actual Field Seed Rate (with 8% slip) = 75.24 kg/ha",
      "outlinePoints": [
        "Listing given geometric and experimental values",
        "Calculation of drill width (1.80 m) and wheel circumference (2.513 m)",
        "Determination of nominal revolutions per hectare (2210.4 rev/ha)",
        "Computation of laboratory seed rate (81.78 kg/ha)",
        "Adjustment for 8% drive wheel slip yielding actual field rate (75.24 kg/ha)"
      ]
    },
    {
      "id": "SOL223-U3-SUB06",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "questionText": "A farmer investing in a self-propelled 6-row mechanical rice transplanter experiences 25% missing hills and severe seedling floating in the field. Diagnose the root causes across nursery preparation, field water management, and machine adjustments, and provide corrective measures.",
      "modelAnswer": "Diagnosis and Troubleshooting of Mechanical Rice Transplanting Failures:\n\n1. Agronomic Failure Manifestations:\nThe farmer reports two major operational defects: (a) 25% missing hills (planting forks failing to deposit seedlings), and (b) Floating seedlings (seedlings dislodging and drifting across the puddled water surface).\n\n2. Root Cause Analysis:\n- Cause Category A: Mat Nursery Preparation Deficiencies\n  * Poor Root Interlocking: Traditional root-wash seedlings were used or tray seeding density was too low (<80 g/tray), resulting in fragile mats that tear erratically rather than shearing into cohesive blocks.\n  * Over-Aged Seedlings: Seedlings older than 22 days (>25 cm tall) have fibrous, stiff stems that jam inside the fork guides.\n  * Uneven Mat Thickness: Inconsistent soil thickness in trays (<18 mm in some sections) causes planting fingers to sweep through empty space without grabbing root tissue.\n- Cause Category B: Field and Water Management Errors\n  * Excessive Standing Water: The field has 5 to 8 cm of standing water. When the transplanter ejects seedlings into deep water, hydraulic buoyancy lifts the light root mat before roots can anchor into the mud.\n  * Inadequate Puddling Settling Time: Transplanting was conducted immediately after puddling. Fluid mud cannot support seedling mass, causing them to topple, or excessively hard un-settled soil deflects fingers.\n- Cause Category C: Machine Adjustment Errors\n  * Feed Gate Misalignment: The seedling tray lateral shift pawl or vertical feeder belt is slipping, failing to index the tray forward by 10-12 mm after each stroke.\n  * Worn Planting Fingers: Worn fork tips fail to pinch the mat, or push-out rods are out of time, releasing seedlings too early.\n\n3. Corrective Action Plan:\n- Nursery Standard: Raise seedlings in specialized trays using 100-120 g certified pre-germinated seed per tray. Transplant strictly at 15 to 18 days of age (15-20 cm height, 3-4 leaves) with uniform 20 mm mat thickness.\n- Water Level Regulation: Drain field water so only a shallow film (1.0 to 1.5 cm) remains during transplanting. Allow puddled mud to settle for 24 to 48 hours.\n- Mechanical Calibration: Adjust tray indexing pawl to advance 12 mm per cycle; adjust planting depth gauge to 1.5-2.0 cm; replace worn finger tips.",
      "outlinePoints": [
        "Identification of twin failures: missing hills and floating seedlings",
        "Diagnostic analysis of mat nursery errors: seeding density, age, and thickness",
        "Diagnostic analysis of field hydrology: deep water buoyancy and mud settling time",
        "Diagnostic analysis of transplanter mechanics: tray feed indexing and finger timing",
        "Comprehensive corrective action protocol for nursery, field, and machine"
      ]
    },
    {
      "id": "SOL223-U3-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "questionText": "Describe the preparation of mat-type rice seedlings in nursery trays for mechanical transplanters.",
      "modelAnswer": "Protocol for Raising Mat-Type Rice Seedlings:\n\n1. Nursery Trays & Soil Medium Preparation:\nSpecialized perforated plastic seedling trays measuring 60 cm in length, 30 cm in width, and 2 to 3 cm in depth are used (approximately 180 to 220 trays per hectare). A growing medium comprising 70% sieved fertile topsoil and 30% well-rotted farmyard manure (FYM) mixed with 1.5 g NPK per tray is filled to a uniform depth of 18 to 20 mm.\n\n2. Seed Density and Sowing:\nClean, certified paddy seeds are soaked in water for 24 hours, incubated for 24 hours until 1-2 mm radicles sprout, and sown at a high density of 100 to 120 grams of dry seed equivalent per tray (approx. 2 to 3 seeds/cm\u00b2). High density is critical to ensure root mass intertwines into a cohesive mat.\n\n3. Water Management & Growth:\nTrays are covered with a thin soil layer (2 mm), shaded for 48 hours until emergence, and irrigated via light misting. Seedlings reach 15 to 20 cm height with 3 to 4 leaves in 15 to 18 days. The dense root system forms a firm, flexible carpet that can be rolled like a turf mat and loaded directly onto the transplanter tray.",
      "outlinePoints": [
        "Tray dimensions (60 x 30 x 2 cm) and soil mixture composition",
        "High seeding rate (100-120 g/tray) for root intertwining",
        "Incubation, sprouting, and nursery irrigation protocol",
        "Seedling maturity benchmarks at 15-18 days (15-20 cm height, 3-4 leaves)"
      ]
    },
    {
      "id": "SOL223-U3-SUB08",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Potato planters (automatic and semi-automatic) and potato diggers",
      "questionText": "Differentiate between an Automatic Cup-Type Potato Planter and a Semi-Automatic Potato Planter.",
      "modelAnswer": "Automatic Cup-Type vs Semi-Automatic Potato Planters:\n\n1. Metering & Seed Selection Mechanism:\n- Automatic Cup-Type: Utilizes an endless vertical rubber belt or revolving vertical metal wheel fitted with concave sheet-metal cups. As cups pass through the hopper reservoir, each cup mechanically scoops a single tuber, lifts it, and drops it into the delivery chute without human touch.\n- Semi-Automatic Planter: Features a horizontal rotating compartmentalized feeding disc (carousel) with pockets. Human operators seated on the machine take tubers from hoppers and manually place one tuber into each rotating compartment.\n\n2. Labor Requirement & Sowing Speed:\n- Automatic: High operational speed (4.0 to 6.0 km/h) requiring only the tractor driver, yielding high field capacity (0.4 to 0.6 ha/h).\n- Semi-Automatic: Slower forward speed (2.0 to 3.0 km/h) bounded by human placement dexterity. Requires 2 to 4 seated laborers in addition to the tractor operator.\n\n3. Sensitivity to Seed Tuber Irregularity:\n- Automatic: Highly sensitive to tuber shape and size. Requires strictly graded round tubers (35 to 45 mm). Irregular, elongated, or cut setts cause frequent 'skips' (empty cups) or 'doubles'.\n- Semi-Automatic: Accommodates cut seed pieces, sprouted tubers, and variable sizes with near-zero skips because operators manually ensure singular placement.",
      "outlinePoints": [
        "Metering mechanism: automated endless cup belt vs manual carousel feed disc",
        "Labor requirement: driver-only vs 2-4 seated attendants",
        "Operating speed and field capacity comparison",
        "Sensitivity to tuber grading: strictly graded tubers vs tolerance for cut setts"
      ]
    },
    {
      "id": "SOL223-U3-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms",
      "questionText": "Describe the construction, operational sequence, and agricultural benefits of a Tractor-Mounted Whole-Stalk Sugarcane Cutter-Planter.",
      "modelAnswer": "Engineering Architecture and Working of the Sugarcane Cutter-Planter:\n\n1. Operational Significance:\nManual sugarcane planting is extremely labor-intensive, requiring 80 to 100 man-days per hectare for furrow opening, cane cutting, sett treatment, placement, fertilizing, and covering. Whole-stalk sugarcane cutter-planters execute all five distinct operations in a single coordinated tractor pass.\n\n2. Sequential Functional Subsystems:\n- Subsystem 1: Furrow Opening: Two heavy-duty adjustable ridger bottoms or middle-busters mounted on the forward tool bar open deep V-shaped furrows (25 to 30 cm depth) at standard row spacings of 90, 120, or 150 cm.\n- Subsystem 2: Stalk Feeding & Sett Cutting Mechanism: Whole cane stalks stored in side racks are hand-fed by two seated operators into dual feeding funnels. Soft corrugated rubber feeding rollers grip the stalks and feed them toward high-speed serrated rotary cutting knives. The knives chop the continuous stalks into uniform setts measuring 30 to 35 cm in length (each bearing 2 to 3 viable eye buds) without crushing nodal vascular tissues.\n- Subsystem 3: Inline Chemical Treatment Chamber: As setts drop through the vertical delivery chute, pressurized spray nozzles mist them with a broad-spectrum systemic fungicide solution (e.g., carbendazim @ 0.1%) to protect freshly cut vascular tissue against soil-borne red rot (*Colletotrichum falcatum*) and pineapple sett rot.\n- Subsystem 4: Fertilizer and Insecticide Banding: A synchronized ground-wheel-driven star wheel or fluted dispenser meters granular NPK basal fertilizer and granular nematicide/insecticide (e.g., fipronil) into the furrow base alongside the setts.\n- Subsystem 5: Soil Covering and Compaction: Trailing curved soil-covering tines push loose ridge soil over the setts to a depth of 5 to 7 cm, followed by heavy concave press rollers that firm the soil to eliminate air pockets and facilitate moisture absorption.\n\n3. Quantitative Agricultural and Economic Benefits:\n- Slashes labor requirement by 85% (from 90 man-days to ~12 man-days/ha).\n- Increases sett germination by 15-20% due to instantaneous chemical disinfection and uniform soil compaction.\n- Achieves an effective field capacity of 0.25 to 0.35 ha/h, planting 2.0 to 2.5 hectares per workday.",
      "outlinePoints": [
        "Labor constraints of manual cane planting vs single-pass mechanization",
        "Subsystem 1: Furrow opening geometry using heavy ridger bodies",
        "Subsystem 2: Stalk feed rollers and non-crushing rotary sett cutting (30-35 cm)",
        "Subsystem 3: Pressurized inline fungicidal treatment against red rot",
        "Subsystem 4 & 5: Fertilizer placement, soil covering shovels, and press rollers",
        "Quantitative agronomic and labor benefits (85% labor reduction)"
      ]
    },
    {
      "id": "SOL223-U3-SUB10",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "questionText": "Explain the operational mechanism of a tractor Direct Seeded Rice (DSR) drill fitted with an inclined plate metering system and explain how it prevents seed bridging.",
      "modelAnswer": "Inclined Plate DSR Seed Drill Mechanics:\n\n1. The Problem of Paddy Seed Metering:\nPaddy seeds (*Oryza sativa*) possess coarse, abrasive siliceous husks with prominent awns and surface hairs. In conventional vertical fluted roller seed drills, these barbed husks interlock, forming dense structural domes (bridging) over hopper orifices that interrupt gravity feed, causing erratic skips in seeding.\n\n2. Working Principle of the Inclined Plate Metering Unit:\n- Plate Geometry: The metering mechanism consists of an alloy plate inclined at an angle of 45\u00b0 to 50\u00b0 to the horizontal, positioned at the base of the hopper.\n- Cell Architecture: The outer rim of the plate contains precisely machined notches or cells sized to hold 2 to 3 paddy seeds.\n- Agitation & Gravity Filling: Because the plate is inclined, seeds in the hopper tumble continuously across the lower submerged quadrant of the plate under gentle gravitational circulation. As the plate rotates slowly, individual cells pass through this loose seed pool and fill naturally without forcing.\n- Elimination of Bridging: Continuous tumbling prevents awn interlocking and arch formation. Excess seeds slide backward by gravity before reaching the top of the cycle, eliminating the need for aggressive mechanical wipers that damage germ tips.\n- Positive Gravity Discharge: At the highest point of rotation (180\u00b0 from pick-up), the seed cell rotates past a cut-off shield, allowing the metered seeds to drop by gravity into the delivery funnel.\n\n3. Performance Impact:\nInclined plate drills maintain a coefficient of variation <12% in seed distribution, deliver consistent shallow depth (2-3 cm), and operate with low seed rates (18-22 kg/ha) in dry DSR fields.",
      "outlinePoints": [
        "Abrasive awned husk characteristics of paddy seeds causing bridging",
        "Design geometry: 45\u00b0-50\u00b0 inclined rotating cell plate",
        "Gravity-assisted cell filling and continuous tumbling preventing domes",
        "Natural seed singulation without mechanical seed-crushing wipers",
        "Agronomic precision and seed rate control in dry DSR cultivation"
      ]
    },
    {
      "id": "SOL223-U3-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Precision seeders and pneumatic metering systems",
      "questionText": "Explain the principle of pneumatic (vacuum) precision seed metering and state two distinct advantages over mechanical plate metering.",
      "modelAnswer": "Principle of Pneumatic (Vacuum) Seed Metering:\n\n1. Operational Principle:\nPneumatic precision planters deploy a high-pressure centrifugal vacuum fan driven by the tractor PTO. The fan draws a suction vacuum (3.0 to 5.5 kPa) behind a thin, vertical rotating stainless steel disc perforated with a circle of precision-drilled orifices. As the disc rotates through the lower seed reservoir, the differential air pressure sucks and holds individual seeds against the holes. The disc carries seeds upward past an adjustable singulator blade that mechanically dislodges any second seed. When the hole reaches the bottom discharge position, a stationary rubber seal blocks the vacuum, releasing the single seed precisely into the seed tube.\n\n2. Key Advantages over Mechanical Plate Planters:\n- Insensitivity to Seed Size Variations: Mechanical plates require meticulously graded seeds that match cell dimensions exactly; undersized seeds drop doubles, and oversized seeds jam. Pneumatic suction holds seeds of variable size or irregular shape (e.g., flat vs round hybrid maize) with equal singulation accuracy (>98%).\n- Zero Mechanical Seed Damage: Unlike mechanical plate knockers and wipers that shear fragile seed coats (especially in cotton, groundnut, and pulses), vacuum pressure holds seeds gently without mechanical pinching.",
      "outlinePoints": [
        "Centrifugal vacuum fan and vertical perforated rotating disc assembly",
        "Air differential suction mechanism holding individual seeds",
        "Singulator wipe-off and bottom vacuum cut-off discharge",
        "Advantage 1: insensitivity to irregular seed shapes and sizes",
        "Advantage 2: zero mechanical seed coat damage or embryo crushing"
      ]
    },
    {
      "id": "SOL223-U3-SUB12",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices",
      "questionText": "Define Seed-to-Soil Contact. What mechanical devices on a seed drill optimize this parameter, and why is it agronomically vital?",
      "modelAnswer": "Seed-to-Soil Contact in Sowing Machinery:\n\n1. Definition:\nSeed-to-soil contact describes the percentage of the seed coat's surface area that is in direct physical contact with moist, compacted soil particles, free from surrounding air voids or dry loose straw buffers.\n\n2. Agronomic Importance:\n- Moisture Imbibition: Seeds must absorb water equivalent to 40% to 50% of their dry weight to activate metabolic enzymes and initiate germination. Water transfer in soil occurs primarily via capillary conduction across particle-to-seed contact boundaries; air gaps break this capillary bridge, delaying germination.\n- Thermal Equilibrium: Direct contact ensures uniform soil heat transfer to the embryo.\n- Root Anchorage: High contact enables immediate radical penetration into moist capillary pores, preventing seedling desiccation.\n\n3. Mechanical Devices Optimizing Contact:\n- V-Shaped Double Disc Openers: Cut a narrow, clean trench without tearing jagged furrow walls, dropping seeds into firm moist subsoil.\n- Seed Firming Keels (Seed Firmers): Small flexible poly blades that gently press deposited seeds into the bottom of the furrow trench before soil covers them.\n- Rubber Press Wheels: Trailing concave or dual-angled rubber press wheels compact loose backfilled soil firmly around the seed flanks while leaving the surface crust-free.",
      "outlinePoints": [
        "Definition of seed-to-soil contact percentage",
        "Agronomic role: capillary moisture imbibition for enzyme activation",
        "Thermal conduction and primary radicle anchorage",
        "Device 1: V-shaped double disc furrow openers",
        "Device 2: flexible plastic seed firming tongues",
        "Device 3: trailing rubber press wheels"
      ]
    },
    {
      "id": "SOL223-U3-SUB13",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "questionText": "A 10-row seed drill with 18 cm row spacing has a ground drive wheel of 75 cm diameter. In a field calibration test over a marked distance of 50 meters, the total seed collected from all 10 openers is 0.72 kg. Calculate: (a) Seed rate in kg/ha, (b) Total ground wheel revolutions in the 50 m run if actual wheel slip is 6%, and (c) Quantity of seed required to plant a 15-hectare field.",
      "modelAnswer": "Given Parameters:\n- Number of rows (N) = 10\n- Row spacing (S) = 18 cm = 0.18 m\n- Ground wheel diameter (D) = 75 cm = 0.75 m\n- Test travel distance (L) = 50 m\n- Seed collected across 10 openers (w_test) = 0.72 kg\n- Field wheel slip (s) = 6% = 0.06\n- Total field area = 15.0 hectares\n\nStep 1: Calculate Effective Working Width (W):\nW = N * S = 10 * 0.18 m = 1.80 m\n\nStep 2: Calculate Area Covered in the 50 m Test Run (A_test):\nA_test = Width * Distance = 1.80 m * 50 m = 90.0 m\u00b2\n\nStep 3: Calculate Field Seed Rate (SR in kg/ha):\nSeed Rate = (Seed Collected / Area Covered) * 10,000 m\u00b2/ha\nSeed Rate = (0.72 kg / 90.0 m\u00b2) * 10,000\nSeed Rate = 0.008 kg/m\u00b2 * 10,000 = 80.0 kg/ha\n\nStep 4: Calculate Ground Wheel Revolutions in 50 m with 6% Slip:\nWheel circumference C = pi * D = 3.14159 * 0.75 m = 2.3562 m\nTheoretical revolutions without slip = Distance / Circumference = 50 m / 2.3562 m = 21.22 rev\nWith 6% wheel slip, the wheel must turn more revolutions to push the tractor forward, or in a towed implement, slip causes fewer turns:\nFor a towed ground wheel subjected to skid/slip: Actual revolutions = Theoretical rev * (1 - s) = 21.22 * (1 - 0.06) = 19.95 revolutions (approx. 20.0 rev).\n\nStep 5: Calculate Total Seed Required for 15 Hectares:\nTotal Seed (kg) = Seed Rate (kg/ha) * Total Area (ha)\nTotal Seed = 80.0 kg/ha * 15.0 ha = 1200.0 kg (1.20 metric tonnes).\n\nFinal Answers:\n(a) Field Seed Rate = 80.0 kg/ha\n(b) Ground Wheel Revolutions in 50 m = 19.95 revolutions\n(c) Total Seed Required for 15 ha = 1200 kg (12.0 quintals)",
      "outlinePoints": [
        "Listing given drill geometry, test run parameters, and total field size",
        "Calculation of drill width (1.80 m) and test area (90 m\u00b2)",
        "Computation of field seed rate (80.0 kg/ha)",
        "Determination of actual ground wheel revolutions accounting for 6% slip",
        "Computation of total bulk seed requirement for 15 hectares (1200 kg)"
      ]
    },
    {
      "id": "SOL223-U3-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "questionText": "Explain the mechanical causes of fertilizer hopper corrosion and describe how modern fertilizer drills are engineered to resist chemical deterioration.",
      "modelAnswer": "Fertilizer Hopper Corrosion and Engineering Solutions:\n\n1. Causes of Corrosion in Fertilizer Drills:\nCommercial chemical fertilizers (urea, diammonium phosphate - DAP, muriate of potash - MOP) are highly hygroscopic salts. In humid ambient air, these salts absorb atmospheric moisture, forming highly concentrated, corrosive electrolyte solutions (nitrate, phosphate, and chloride ions). In conventional mild-steel hoppers, this electrolyte induces rapid electrochemical galvanic oxidation, rusting hopper walls, seizing star-wheel metering shafts, and binding feed gates within a single season.\n\n2. Engineering Design Solutions:\n- Corrosion-Resistant Materials: Fabricating fertilizer hoppers from rotationally molded high-density polyethylene (HDPE), stainless steel (AISI 304), or thick fiberglass-reinforced plastic (FRP).\n- Non-Metallic Metering Components: Utilizing engineering polymers (nylon, Delrin, polyacetal) for star wheels, gears, and feed shutters, which are completely inert to chemical salts.\n- Quick-Release Cleanout Gates: Designing hoppers with bottom drop-down hinged dump trays, allowing farmers to flush residual fertilizer with water after daily use.\n- Stainless Steel Drive Shafts: Mounting metering rotors on solid stainless steel or cadmium-plated shafts with sealed, grease-packed ball bearings.",
      "outlinePoints": [
        "Hygroscopic nature of inorganic fertilizers forming corrosive electrolyte solutions",
        "Electrochemical galvanic rusting of mild steel hoppers and seized shafts",
        "Use of HDPE, stainless steel, and FRP composite materials",
        "Polymer (Delrin/nylon) metering rotors and star wheels",
        "Quick-release wash-out trays and sealed bearing architectures"
      ]
    },
    {
      "id": "SOL223-U3-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "questionText": "Compare a Walk-Behind Paddy Transplanter with a Self-Propelled Riding-Type Paddy Transplanter across four operational parameters.",
      "modelAnswer": "Walk-Behind vs Riding-Type Paddy Transplanters:\n\n1. Power Unit & Row Capacity:\n- Walk-Behind: Powered by a small 3.5 to 5.0 hp petrol or diesel engine. Configured standardly as a 4-row or 6-row unit with a working width of 1.2 to 1.8 m.\n- Riding-Type: Powered by a 12 to 20 hp multi-cylinder diesel engine. Configured as an 6-row or 8-row machine with a working width of 1.8 to 2.4 m.\n\n2. Operating Speed & Field Capacity:\n- Walk-Behind: Slower travel speed (1.5 to 2.0 km/h) limited by the walking speed of the human operator in deep puddled mud. Field capacity is 0.15 to 0.22 ha/h (approx. 1.2 to 1.5 ha/day).\n- Riding-Type: Higher forward speed (3.0 to 4.5 km/h) with hydrostatic four-wheel drive. Field capacity reaches 0.35 to 0.50 ha/h (approx. 3.0 to 4.0 ha/day).\n\n3. Operator Ergonomics & Fatigue:\n- Walk-Behind: Severe operator physical fatigue; the operator must slog on foot through knee-deep sticky puddled mud for hours while guiding handlebars.\n- Riding-Type: The operator sits comfortably on an elevated suspension seat above the mud line, operating power steering and hydraulic lift levers with minimal fatigue.\n\n4. Capital Cost & Economic Suitability:\n- Walk-Behind: Lower capital cost (\u20b91.5 to 2.5 lakhs), making it suitable for smallholders and fragmented terraced plots.\n- Riding-Type: High capital cost (\u20b98 to 12 lakhs), viable for large commercial rice holdings and custom hiring centers.",
      "outlinePoints": [
        "Engine horsepower rating and row capacity (4-row vs 8-row)",
        "Working speed and effective field capacity (0.18 vs 0.45 ha/h)",
        "Operator ergonomics: walking through deep mud vs elevated seated driving",
        "Capital investment and economic scale suitability"
      ]
    },
    {
      "id": "SOL223-U3-SUB16",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill",
      "questionText": "Explain the agronomic concept of Direct Seeded Rice (DSR). Describe the construction and operation of the 8-row plastic drum seeder and discuss weed management challenges in DSR.",
      "modelAnswer": "Direct Seeded Rice (DSR) Technology and Mechanization:\n\n1. Concept of Direct Seeded Rice:\nDirect Seeded Rice (DSR) refers to the process of establishing a rice crop by sowing seeds directly in the field rather than raising seedlings in a nursery and manually transplanting them into flooded puddled fields. Sowing can be performed under dry field conditions (Dry DSR) using seed drills, or onto saturated wet puddled soil (Wet DSR) using drum seeders.\n\n2. Construction of the 8-Row Plastic Drum Seeder:\nThe drum seeder is a lightweight, human-pulled implement designed for Wet DSR:\n- Cylindrical Seed Drums: Composed of 4 lightweight, UV-stabilized plastic drums mounted on a common horizontal tubular shaft. Each drum has two circular rows of metering holes (9-10 mm diameter) spaced 20 cm apart, metering 8 rows simultaneously.\n- Perforated Baffles: Drums feature internal plastic baffles that control seed movement and prevent all seeds from bunching at one end when the seeder tilts.\n- Ground Drive Traction Wheels: Two lugged plastic wheels mounted at outer ends rotate the common axle as the operator pulls the seeder forward.\n- Handle & Float: A lightweight tubular T-handle for the operator and an optional sled float that skims the mud surface to maintain uniform wheel traction.\n\n3. Operating Protocol:\n- Seeds are soaked for 24 hours and incubated for 24 hours until radicles emerge (1-2 mm length).\n- Drums are filled to 50% capacity with sprouted seed and closed.\n- The operator walks backward or forward steadily at 1.5-2.0 km/h across a saturated, freshly drained puddled field. As wheels turn, seeds drop through the perforations directly onto the wet mud surface in neat parallel rows.\n\n4. Weed Management Bottlenecks in DSR:\n- The Critical Weed Challenge: In conventional puddled rice, standing water creates an anaerobic layer that suppresses 80% of terrestrial weed seeds. In DSR (especially Dry DSR), the absence of standing water triggers aggressive flushes of grassy weeds (*Echinochloa colona*, *Leptochloa chinensis*), broadleaf weeds, and sedges (*Cyperus rotundus*). Without intervention, weed competition causes 40% to 80% yield loss.\n- Management Strategy: Requires chemical weed control:\n  * Pre-emergence herbicide (Pendimethalin @ 1.0 kg a.i./ha or Pretilachlor with safener) applied within 24-48 hours of sowing.\n  * Early post-emergence herbicide (Bispyribac-sodium @ 25 g a.i./ha) applied at 15-20 days after emergence (3-4 leaf weed stage).",
      "outlinePoints": [
        "Definition of Direct Seeded Rice (Dry DSR vs Wet DSR)",
        "Engineering design of the 8-row plastic drum seeder",
        "Field operation with pre-germinated paddy seeds on saturated mud",
        "Weed dynamics in aerobic environments: loss of water weed barrier",
        "Herbicide chemical intervention protocol (Pendimethalin + Bispyribac-sodium)"
      ]
    },
    {
      "id": "SOL223-U3-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)",
      "questionText": "Explain the operational differences between cell plate metering and pneumatic vacuum metering in precision planters. Why is pneumatic metering preferred for hybrid maize seed?",
      "modelAnswer": "Cell Plate vs Pneumatic Metering in Precision Maize Planters:\n\n1. Mechanical Cell Plate Metering:\n- Working Principle: Uses horizontal or inclined plates perforated with peripheral cells shaped to match seed dimensions. As the plate rotates through the hopper, seeds fall into cells by gravity, and a spring-loaded brush wipes away extras.\n- Limitations in Hybrid Maize: Hybrid maize seed exhibits wide physical variability (flat kernels vs round kernels; small, medium, large grades). If cells are sized for medium flats, large kernels cannot fit (causing empty skips), while small round kernels enter two at a time (causing doubles). Farmers must purchase multiple expensive plate sets for each seed batch.\n\n2. Pneumatic Vacuum Metering:\n- Working Principle: Uses a thin rotating vertical plate with circular holes backed by a continuous suction vacuum (3.5 to 5.0 kPa). Differential air pressure pulls seeds against the holes regardless of whether they are flat, round, thick, or thin. An adjustable singulator finger wipes away extra seeds clinging to the hole, and the vacuum is cut off over the furrow opener to drop the single seed.\n\n3. Why Pneumatic is Superior for Hybrid Maize:\n- Near-Perfect Singulation (>99%): Handles diverse seed grading within expensive hybrid seed bags without changing plates.\n- Higher Sowing Speeds: Operates reliably at 8 to 12 km/h without centrifugal seed drop-out.\n- Zero Embryo Cracking: Eliminates mechanical knockers that damage the delicate germ face of hybrid maize kernels.",
      "outlinePoints": [
        "Mechanical cell plate geometry and seed dimension constraints",
        "Maize seed shape variability (flat vs round kernels) causing skips and doubles",
        "Principle of pneumatic air suction holding seeds against circular holes",
        "Near-100% singulation without changing plates for diverse seed lots",
        "Higher field operating speeds and zero mechanical seed embryo damage"
      ]
    },
    {
      "id": "SOL223-U3-SUB18",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)",
      "questionText": "Define Drive Wheel Skid and Slip in a seed drill. What mathematical formula defines wheel slip, and how does slip affect actual field seed rate?",
      "modelAnswer": "Drive Wheel Skid and Slip in Sowing Machinery:\n\n1. Definition:\nDrive Wheel Slip (or Skid) is the relative motion between the ground-engaging drive wheel of a seed drill and the agricultural soil surface over which it rolls. In agricultural seed drills, the ground wheel must transmit driving torque to overcome the internal friction of seed and fertilizer metering shafts, causing the wheel to slip relative to the ground.\n\n2. Mathematical Formulation:\nWheel Slip percentage (s) is expressed as:\nSlip (%) = ((N_theoretical - N_actual) / N_theoretical) * 100\nAlternatively, based on distance:\nSlip (%) = ((V_theoretical - V_actual) / V_theoretical) * 100\nwhere V_theoretical is the theoretical distance the wheel would cover without slip (Circumference * Revolutions), and V_actual is the true measured ground distance traveled.\n\n3. Impact on Actual Field Seed Rate:\nBecause the seed metering mechanism is driven directly by the ground wheel via chains and sprockets, the number of shaft rotations per hectare is dictated by wheel revolutions. In loose, tilled soil, drive wheel slip ranges between 5% and 12%. Because the wheel slips, it completes fewer revolutions per hectare than measured on workshop jacks. Consequently, unless the feed rate setting is increased by an equivalent percentage, the seed drill will under-seed by 5% to 12% in the field.",
      "outlinePoints": [
        "Definition of drive wheel slip caused by metering driveline torque resistance",
        "Mathematical formula for percentage wheel slip based on revolutions and distance",
        "Typical wheel slip range in tilled seedbed soil (5% to 12%)",
        "Consequence: fewer shaft turns per hectare leading to under-seeding in the field"
      ]
    },
    {
      "id": "SOL223-U3-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)",
      "questionText": "A 4-row walk-behind mechanical rice transplanter has a fixed row spacing of 30 cm and an adjustable hill spacing set to 15 cm. If the transplanter travels at a speed of 1.8 km/h, calculate: (a) Number of hills planted per square meter, (b) Total hills planted per hectare, and (c) Operating frequency of the planting arm in cycles per minute.",
      "modelAnswer": "Given Parameters:\n- Number of rows = 4\n- Row spacing (R) = 30 cm = 0.30 m\n- Hill spacing along row (H) = 15 cm = 0.15 m\n- Forward travel speed (V) = 1.8 km/h\n\nStep 1: Calculate Land Area per Hill:\nArea allocated per single hill = Row Spacing * Hill Spacing\nArea per hill = 0.30 m * 0.15 m = 0.045 m\u00b2\n\nStep 2: Calculate Number of Hills per Square Meter:\nHills per m\u00b2 = 1 / Area per hill\nHills per m\u00b2 = 1 / 0.045 = 22.22 hills/m\u00b2\n\nStep 3: Calculate Total Hills per Hectare (10,000 m\u00b2):\nTotal Hills/ha = Hills per m\u00b2 * 10,000 m\u00b2\nTotal Hills/ha = 22.222 * 10,000 = 222,222 hills per hectare (approx. 2.22 lakh hills/ha).\n\nStep 4: Calculate Operating Frequency of Planting Arm (Strokes/min):\nForward travel speed = 1.8 km/h = 1800 m / 60 min = 30 m/min = 3000 cm/min\nHill spacing along row = 15 cm\nPlanting strokes per minute = Forward speed in cm/min / Hill spacing in cm\nStrokes per minute = 3000 cm/min / 15 cm/stroke = 200 cycles per minute.\n\nFinal Answers:\n(a) Plant Density = 22.22 hills/m\u00b2\n(b) Total Hills per Hectare = 222,222 hills/ha\n(c) Planting Arm Operating Frequency = 200 cycles/min (strokes/min per arm)",
      "outlinePoints": [
        "Listing transplanter geometry and forward walking speed",
        "Calculation of ground area occupied by a single hill (0.045 m\u00b2)",
        "Determination of hill density per square meter (22.22 hills/m\u00b2)",
        "Computation of total hill population per hectare (222,222 hills/ha)",
        "Determination of planting arm operating frequency (200 cycles/min)"
      ]
    },
    {
      "id": "SOL223-U3-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Sowing methods and seed drill functional components",
      "questionText": "Explain the role and operation of drag chains and press wheels as seed-covering attachments on a seed drill.",
      "modelAnswer": "Seed Covering Devices on Agricultural Seed Drills:\n\n1. Role of Covering Attachments:\nOnce the furrow opener drops seeds into the bottom of the open furrow trench, seeds must be covered with moist, friable soil and packed to protect them from solar desiccation, wind displacement, and bird predation, while establishing capillary contact for moisture absorption.\n\n2. Drag Chains:\n- Construction: Consists of lengths of heavy link chain (approx. 40 to 60 cm long) looped behind each furrow opener.\n- Operation: As the drill advances, the chain drags across the ridges of loose soil thrown up by the opener, tumbling loose topsoil back into the trench over the seeds. Best suited for well-pulverized, moist loamy soils.\n\n3. Press Wheels:\n- Construction: Heavy steel or semi-pneumatic rubber-tired wheels mounted on spring-loaded trailing pivot arms directly behind each furrow opener.\n- Operation: Press wheels provide adjustable downward compaction, pressing soil into firm contact with the seed. Semi-pneumatic rubber wheels flex during rotation, shedding sticky mud automatically. High-performance models feature a central concave groove that packs soil firmly on the sides while leaving the surface directly above the seed loose to prevent emergence crusting.",
      "outlinePoints": [
        "Agronomic role: moisture preservation, bird protection, capillary contact",
        "Construction and soil tumbling action of drag chains",
        "Construction and spring-loaded downward compaction of press wheels",
        "Self-cleaning flexible rubber tires and center-groove anti-crusting design"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL223-U3-FC01",
      "front": "What is the most widely deployed seed metering mechanism on Indian grain drills?",
      "back": "The Fluted Feed Roller, which adjusts seed rate by varying the exposed length of flutes inside the feed cup.",
      "hint": "Fluted roller",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)"
    },
    {
      "id": "SOL223-U3-FC02",
      "front": "Why does an internal double-run feed cup have two distinct ribbed faces?",
      "back": "One side has fine ribs for small seeds (mustard, clover) and the other has coarse ribs for large grains (peas, maize).",
      "hint": "Fine side for small seeds, coarse side for large seeds",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)"
    },
    {
      "id": "SOL223-U3-FC03",
      "front": "What is the formula for seed drill revolutions per hectare (N_ha)?",
      "back": "N_ha = 10,000 / (W * C), where W is effective drill width (m) and C is wheel circumference (m).",
      "hint": "10,000 / (Width * Circumference)",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)"
    },
    {
      "id": "SOL223-U3-FC04",
      "front": "Why is field calibration required after performing workshop jack calibration?",
      "back": "To account for ground drive wheel traction slip in tilled soil (typically 5% to 12%), which causes under-seeding.",
      "hint": "Compensates for 5-12% wheel slip",
      "syllabusTopic": "Calibration of seed-cum-fertilizer drill (field and laboratory methods)"
    },
    {
      "id": "SOL223-U3-FC05",
      "front": "Where should fertilizer be placed relative to seed in a seed-cum-fertilizer drill?",
      "back": "Approximately 5 cm to the side and 3 cm deeper than seed to prevent chemical salt germination burn.",
      "hint": "5 cm to the side and 3 cm deeper",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices"
    },
    {
      "id": "SOL223-U3-FC06",
      "front": "What type of nursery is mandatory for mechanical rice transplanters?",
      "back": "Mat-type seedling nursery raised in perforated trays where roots form a dense, cohesive interlocking mat.",
      "hint": "Mat nursery in trays",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)"
    },
    {
      "id": "SOL223-U3-FC07",
      "front": "At what age are mat-type rice seedlings ready for mechanical transplanting?",
      "back": "15 to 18 days of age, when seedlings reach 15-20 cm height with 3-4 leaves.",
      "hint": "15 to 18 days",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)"
    },
    {
      "id": "SOL223-U3-FC08",
      "front": "What is the optimal water depth for mechanical rice transplanting?",
      "back": "A shallow water film of 1.0 to 2.0 cm; deeper water causes light root-mat seedlings to float and drift.",
      "hint": "1 to 2 cm shallow film",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)"
    },
    {
      "id": "SOL223-U3-FC09",
      "front": "What is the standard sett length cut by an automatic sugarcane cutter-planter?",
      "back": "30 to 35 cm in length, with each sett bearing 2 to 3 viable eye buds.",
      "hint": "30 to 35 cm",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms"
    },
    {
      "id": "SOL223-U3-FC10",
      "front": "Why are cane setts misted with fungicide inside a sugarcane cutter-planter?",
      "back": "To disinfect cut vascular ends and protect setts from soil-borne red rot and fungal decay.",
      "hint": "Prevents red rot fungal infection",
      "syllabusTopic": "Sugarcane cutter planters and sett cutting mechanisms"
    },
    {
      "id": "SOL223-U3-FC11",
      "front": "Which furrow opener cuts cleanly through heavy surface crop residue and stubble?",
      "back": "Double disc or single disc furrow openers, which roll over and slice through trash.",
      "hint": "Disc furrow opener",
      "syllabusTopic": "Furrow openers (shoe, shovel, single disc, double disc) and seed covering devices"
    },
    {
      "id": "SOL223-U3-FC12",
      "front": "What is the primary advantage of pneumatic (vacuum) precision seed metering?",
      "back": "Achieves near-100% singulation across variable seed sizes and shapes with zero mechanical seed coat damage.",
      "hint": "Near-perfect singulation without seed damage",
      "syllabusTopic": "Precision seeders and pneumatic metering systems"
    },
    {
      "id": "SOL223-U3-FC13",
      "front": "Why are potato seed tubers graded by size before automatic cup planting?",
      "back": "To ensure every cup scoops exactly one tuber, preventing empty skips and double pickups.",
      "hint": "Prevents skips and doubles in cups",
      "syllabusTopic": "Potato planters (automatic and semi-automatic) and potato diggers"
    },
    {
      "id": "SOL223-U3-FC14",
      "front": "What is the primary natural resource conserved by Direct Seeded Rice (DSR)?",
      "back": "Irrigation water, reducing water consumption by 25% to 30% by eliminating puddling and continuous flooding.",
      "hint": "Water savings of 25-30%",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill"
    },
    {
      "id": "SOL223-U3-FC15",
      "front": "Why must pre-emergence herbicide be applied immediately in DSR fields?",
      "back": "Aerobic unpuddled soil lacks standing water weed suppression, prompting rapid weed flushes that choke rice.",
      "hint": "Compensates for absence of standing water weed suppression",
      "syllabusTopic": "Direct Seeded Rice (DSR) equipment: drum seeder and lucky seed drill"
    },
    {
      "id": "SOL223-U3-FC16",
      "front": "How many rice seedling trays (60x30 cm) are needed to plant one hectare?",
      "back": "Approximately 180 to 220 seedling trays containing 30-35 kg total seed.",
      "hint": "180 to 220 trays",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)"
    },
    {
      "id": "SOL223-U3-FC17",
      "front": "What is the recommended planting depth for mechanically transplanted rice?",
      "back": "1.5 to 2.0 cm; deeper planting (>3 cm) inhibits basal node tillering.",
      "hint": "1.5 to 2.0 cm shallow planting",
      "syllabusTopic": "Paddy transplanters (manual, self-propelled, mat type vs root-wash type)"
    },
    {
      "id": "SOL223-U3-FC18",
      "front": "What drives the metering shafts on a tractor seed drill?",
      "back": "A ground drive wheel rolling on the soil, ensuring seed discharge is proportional to travel distance.",
      "hint": "Lugged ground drive wheel",
      "syllabusTopic": "Sowing methods and seed drill functional components"
    },
    {
      "id": "SOL223-U3-FC19",
      "front": "What does a low Coefficient of Variation (CV < 15%) indicate in precision planter testing?",
      "back": "High seed spacing uniformity and consistent singulation with minimal skips or doubles.",
      "hint": "Uniform seed spacing",
      "syllabusTopic": "Precision seeders and pneumatic metering systems"
    },
    {
      "id": "SOL223-U3-FC20",
      "front": "What mechanism is used to meter hygroscopic chemical fertilizers in seed drills?",
      "back": "Star wheel (spiked rotating disc) mechanism that positively expels moist or caked fertilizer through an adjustable gate.",
      "hint": "Star wheel mechanism",
      "syllabusTopic": "Seed and fertilizer metering mechanisms (fluted roller, internal double run, cup feed, cell plate)"
    }
  ]
};
