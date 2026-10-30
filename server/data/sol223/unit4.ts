import { UnitContent } from "./types";

export const unit4Content: UnitContent = {
  "unitNumber": 4,
  "title": "Harvesting, Threshing and Post-harvest Machinery",
  "shortDescription": "Engineering principles and operation of crop harvesting machinery, cutter bar dynamics, combine harvesters, threshing cylinders, maize shellers, groundnut decorticators, and tuber diggers.",
  "estimatedReadTimeMinutes": 26,
  "syllabusTopics": [
    "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
    "Vertical conveyor reapers and reaper-binders",
    "Combine harvester: components and working",
    "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
    "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
    "Paddy thresher and winnowing machines",
    "Maize shellers (hand operated, pedal operated, power operated)",
    "Groundnut decorticators and pod strippers",
    "Root and tuber harvesters (potato digger, groundnut digger shaker)"
  ],
  "notes": {
    "learningObjectives": [
      "Dissect reciprocating cutter bar cutting dynamics, knife register, cutter bar alignment, and cutting speeds in crop harvesters.",
      "Analyze vertical conveyor reapers and reaper-binder knotter mechanics for cereal harvesting and windrowing.",
      "Examine combine harvester functional subsystems (header, feeder, cylinder, concave, straw walkers, cleaning shoe, tailings return).",
      "Evaluate threshing cylinder designs (rasp bar, spike tooth, wire loop, axial flow), peripheral cylinder speeds, concave clearances, and post-harvest decortication machinery."
    ],
    "sections": [
      {
        "id": "sec-4-1",
        "heading": "1. Principles of Crop Harvesting and Reciprocating Cutter Bars",
        "content": "Crop harvesting involves cutting, picking, digging, or pulling mature plants from the field. For cereal grains and forages, the universal cutting mechanism is the **reciprocating cutter bar**.\n\n**Anatomy of the Cutter Bar Assembly:**\n1. **Knife Bar:** A flat steel strip to which triangular serrated or smooth high-carbon steel knife sections are riveted or bolted.\n2. **Guards (Fingers):** Forged steel or malleable iron fingers projecting forward from the cutter bar. They divide the standing crop stems, guide them toward the knife sections, and hold the stationary ledger plates.\n3. **Ledger Plates:** Hardened steel serrated plates riveted inside each guard finger against which the moving knife sections shear crop stems (scissor-like shearing action).\n4. **Wearing Plates:** Steel shims fastened under the knife clips that support the rear edge of the knife bar, absorbing rearward thrust and maintaining proper forward clearance.\n5. **Knife Clips:** Spring-steel hold-down clips bolted over the knife bar to hold knife sections flat against ledger plates without excessive frictional binding (clearance 0.5 to 1.0 mm).\n\n**Critical Adjustments:**\n- **Register of Cutter Bar:** A cutter bar is in perfect register when the center of each moving knife section aligns exactly with the center of its corresponding guard finger (ledger plate) at both extremes of its stroke (inner and outer dead centers). Out-of-register cutter bars tear and chew crop stems rather than shearing them, dramatically increasing draft, causing severe vibration, and clogging.\n- **Alignment (Lead) of Cutter Bar:** In operation, cutting forces exert a backward bending thrust on the cutter bar. To compensate, the outer tip of the cutter bar is given a forward lead when stationary\u2014typically 1.5 cm to 2.0 cm per meter of cutter bar length (roughly 2\u00b0 lead angle). Under full operating load, this forward lead flexes back, bringing the bar into a perfectly straight line perpendicular to the travel direction.",
        "subsections": [
          {
            "subheading": "Kinematics of Reciprocating Cutting",
            "content": "The pitman arm or wobble drive converts rotational motion from the tractor PTO or auxiliary engine into reciprocating motion of the knife bar. Knife stroke length standardly equals guard spacing (typically 76.2 mm / 3 inches). Average knife speed is calculated as:\nV_k = (2 * S * N) / 60\nwhere S is stroke length (m) and N is crank speed (rpm). Standard harvesting operations maintain knife speeds between 1.8 and 2.5 m/s."
          }
        ]
      },
      {
        "id": "sec-4-2",
        "heading": "2. Vertical Conveyor Reapers and Reaper-Binders",
        "content": "Reapers cut standing crops and lay them either in continuous windrows or tied bundles:\n\n**Vertical Conveyor Reaper (VCR):**\nWidely adopted for smallholder rice and wheat harvesting. Consists of:\n- *Crop Dividers:* Pointed shoes that separate tangled standing crop rows.\n- *Star Wheels:* Rotating star-shaped rubberized or nylon fingers that grip crop stems and guide them vertically into the cutter bar.\n- *Reciprocating Cutter Bar:* Shears stems 5 to 10 cm above ground level.\n- *Vertical Lugged Conveyor Belts:* Two flat rubberized belts fitted with projecting lugs that run horizontally across the header. As stems are severed, the lugged belts hold them vertically and convey them laterally, discharging them onto the stubble in a continuous, uniform windrow to the right side of the machine for easy manual gathering and bundling.\n- Power & Output: Tractor front-mounted (2.0 m width) or self-propelled walk-behind (1.0 to 1.2 m width powered by a 5-6 hp diesel engine), harvesting 0.25 to 0.40 ha/h.\n\n**Reaper-Binder:**\nIn addition to cutting, a reaper-binder gathers cut stems into bundles of predetermined size, compresses them, ties them securely with twine using a specialized mechanical knotter mechanism, and discharges the tied bundles onto the ground. The Appleby knotter mechanism performs a complex four-stage mechanical sequence: (1) Twine feeding, (2) Loop formation around the sheaf, (3) Knot tying via rotating billhook, and (4) Twine cutting by a knife arm.",
        "subsections": [
          {
            "subheading": "Field Comparison of Harvesting Modalities",
            "content": "Operational metrics for harvesting one hectare of wheat:",
            "table": {
              "headers": [
                "Harvesting Method",
                "Field Capacity (ha/h)",
                "Labor Requirement (man-h/ha)",
                "Field Losses (%)"
              ],
              "rows": [
                [
                  "Manual Sickle Harvesting",
                  "0.012 - 0.015",
                  "100 - 140",
                  "1.5 - 2.5%"
                ],
                [
                  "Self-Propelled Reaper (Walk-behind)",
                  "0.20 - 0.28",
                  "15 - 25",
                  "2.0 - 3.5%"
                ],
                [
                  "Tractor Front-Mounted Reaper",
                  "0.35 - 0.50",
                  "8 - 12",
                  "2.5 - 4.0%"
                ],
                [
                  "Self-Propelled Combine Harvester",
                  "1.00 - 1.80",
                  "1.5 - 2.5",
                  "1.5 - 3.0%"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-4-3",
        "heading": "3. The Combine Harvester: Subsystems and Functional Flow",
        "content": "The combine harvester is a massive self-propelled machine that executes cutting, gathering, feeding, threshing, separating, cleaning, and grain handling in a single continuous process.\n\n**Functional Subsystems:**\n1. **Reel:** Bat or pick-up reel that holds crop heads against the cutter bar and sweeps severed stalks toward the cross auger.\n2. **Cutter Bar & Floating Cross Auger:** Reciprocating knife cuts stems; left- and right-hand flighting of the cross auger gathers crop to the center, where retractable fingers feed it into the feeder housing.\n3. **Feeder Conveyor (Elevator):** Slat-chain conveyor that elevates the crop mat into the threshing mechanism.\n4. **Threshing Unit (Cylinder & Concave):** The cylinder rotates at high peripheral speed against a stationary perforated concave grid, stripping grain from heads via impact and rubbing. 75% to 85% of grain is separated through the concave grate here.\n5. **Straw Walkers (Separation Unit):** Multi-stage oscillating serrated straw walker racks that pitch the threshed straw rearward, allowing trapped loose grain to shake out and fall onto the return pan below.\n6. **Cleaning Shoe (Chaffer, Sieve & Cleaning Fan):**\n   - *Chaffer:* Adjustable louvred top sieve that allows grain and unthreshed heads to fall through while floating long chaff out the rear.\n   - *Cleaning Sieve (Shoe Sieve):* Lower fine-mesh sieve that allows only clean grain to drop into the grain auger trough.\n   - *Cleaning Fan:* Blows a controlled air blast upward through the sieves; light chaff, husks, and dust are aerodynamically suspended and blown out the rear, while heavier grains fall against the airflow.\n7. **Tailings Return System:** Unthreshed earheads (tailings) falling off the rear of the chaffer are augered back to the threshing cylinder for re-threshing.\n8. **Clean Grain Handling:** Grain elevator conveys cleaned grain to the overhead grain tank (2000 to 5000 kg capacity), unloaded via high-speed unloading tube augers into trailing grain trucks.",
        "subsections": [
          {
            "subheading": "Crop Flow Continuum in a Combine Harvester",
            "content": "Reel -> Cutter Bar -> Floating Auger -> Feeder Conveyor -> Threshing Cylinder & Concave -> (Straw -> Walkers -> Discharge) & (Grain/Chaff -> Cleaning Shoe -> Fan Air Blast -> Clean Grain Tank)."
          }
        ]
      },
      {
        "id": "sec-4-4",
        "heading": "4. Threshing Mechanics and Cylinder Design",
        "content": "Threshing is the process of detaching grain kernels from the earhead, pod, or panicle. It is accomplished through three mechanical forces: **impact**, **rubbing (friction)**, and **shearing**.\n\n**Threshing Cylinder Architectures:**\n1. **Rasp Bar Cylinder:** Features corrugated (grooved) steel bars bolted longitudinally to rotating cylinder rings. Operates over a matching perforated bar concave. Grain is threshed predominantly by rubbing and gentle impact. The global standard for cereal crops (wheat, barley, soybean, maize) because it preserves straw length and produces low grain crack damage (<1.0%).\n2. **Spike Tooth (Peg Tooth) Cylinder:** High-carbon steel spikes or pegs mounted in staggered rows on the cylinder pass between stationary teeth on the concave. Threshing occurs primarily by aggressive impact and shredding. Highly effective for tough, damp crops and long-strawed varieties, but shatters straw into fine chaff (bhusa), consuming high power.\n3. **Wire Loop Cylinder:** Uses U-shaped spring steel wire loops on the cylinder drum. Operates by combing and stripping grain; standard in conventional Asian pedal and power paddy threshers.\n4. **Axial Flow Cylinder:** Unlike conventional cross-flow cylinders where material passes through tangentially in a fraction of a second, the crop in an axial flow thresher travels spirally along the length of a longitudinal rotor inside a cylindrical concave mantle. The crop undergoes multiple revolutions (3 to 4 complete helical passes), providing gentle, progressive threshing with high separation efficiency and minimal grain damage.",
        "subsections": [
          {
            "subheading": "Cylinder Peripheral Speed and Concave Clearance Settings",
            "content": "Optimal threshing parameters across agricultural crops:",
            "table": {
              "headers": [
                "Crop",
                "Cylinder Type",
                "Peripheral Speed (m/s)",
                "Concave Clearance: Front (mm)",
                "Concave Clearance: Rear (mm)"
              ],
              "rows": [
                [
                  "Wheat",
                  "Rasp Bar / Spike",
                  "28 - 32 m/s",
                  "12 - 16 mm",
                  "4 - 7 mm"
                ],
                [
                  "Paddy (Rice)",
                  "Spike Tooth / Wire Loop",
                  "15 - 20 m/s",
                  "15 - 20 mm",
                  "8 - 12 mm"
                ],
                [
                  "Soybean",
                  "Rasp Bar",
                  "12 - 16 m/s",
                  "18 - 24 mm",
                  "10 - 14 mm"
                ],
                [
                  "Maize (Corn)",
                  "Rasp Bar / Axial",
                  "10 - 14 m/s",
                  "25 - 30 mm",
                  "15 - 20 mm"
                ],
                [
                  "Gram (Chickpea)",
                  "Rasp Bar",
                  "10 - 15 m/s",
                  "20 - 25 mm",
                  "12 - 16 mm"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-4-5",
        "heading": "5. Post-Harvest Machinery: Shellers, Decorticators, and Root Harvesters",
        "content": "Post-harvest machines detach grains from pods and cobs, and excavate root crops:\n\n**Maize Shellers:**\nMaize cobs cannot be threshed in standard spike-tooth drums without crushing the cob core into the grain.\n- *Hand Maize Sheller:* Tubular cast iron tool with internal serrated ridges. The cob is twisted manually, stripping 15-20 kg/h.\n- *Power Maize Sheller:* High-speed rotating cylinder with bevel lugs or spring-loaded shelling plates operating against an adjustable concave sieve. Cobs are fed axially; kernels are sheared from the central cob core at 1000-2000 kg/h with <1% broken kernels, while cobs are discharged whole at the rear.\n\n**Groundnut Decorticators:**\nSeparates groundnut kernels from fibrous outer pods:\n- *Manual Rocker Decorticator:* Semi-cylindrical concave sieve with an oscillating rocker arm fitted with rubber or wooden pads. Shears pods by gentle rocking, achieving 50-80 kg/h.\n- *Power Groundnut Decorticator:* Uses rotating peg or rubber-roller drums over a slotted concave grate. An integrated aspirator suction blower separates light shells (husks) from dense falling kernels, achieving 300-600 kg/h with <2% kernel splitting.\n\n**Root and Tuber Harvesters (Potato & Groundnut):**\n- *Potato Elevator Digger:* Tractor-drawn implement equipped with a broad inclined scoop blade that cuts beneath potato ridges (15-25 cm depth). The soil-potato mass is lifted onto an oscillating rod-chain web conveyor. Agitation sifts loose soil through the chain rods, while clean tubers are deposited gently in a narrow windrow behind the machine for manual collection.\n- *Groundnut Digger-Shaker-Inverter:* Heavy V-blade cuts taproots at 8-10 cm depth; an inclined elevating finger conveyor lifts vines, shakes off soil clods, inverts the vines 180\u00b0, and lays them in windrows with pods facing upward toward the sun for accelerated field drying.",
        "subsections": [
          {
            "subheading": "Grain Cleaning and Winnowing Physics",
            "content": "Cleaning fans utilize the aerodynamic terminal velocity principle. When a mixture of grain and chaff falls through an upward air stream, particles with terminal velocities lower than the air velocity (light chaff, dust, empty glumes) are blown away, while heavy grain kernels (terminal velocity 8 to 12 m/s for wheat) fall cleanly into collection bins."
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Reciprocating cutter bars require perfect register (knife center aligned with guard center at stroke ends) and 1.5-2 cm/m forward lead.",
      "Vertical conveyor reapers cut and convey standing cereal crops laterally into uniform windrows via lugged belts.",
      "Combine harvesters combine cutting, feeding, threshing, straw walker separation, and air-blast sieve cleaning in a single pass.",
      "Rasp bar cylinders thresh by rubbing and impact (<1% damage); spike tooth cylinders shred straw into bhusa via aggressive impact.",
      "Groundnut digger-inverters dig, shake loose soil, and invert vines 180\u00b0 with pods exposed upward for solar drying."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Increasing threshing cylinder speed always improves threshing efficiency without penalties.",
        "reality": "Excessive cylinder speed (>34 m/s in wheat, >16 m/s in soybean/maize) shatters seed coats, causing internal embryo cracking and drastically lowering commercial grade and seed germination rates."
      },
      {
        "myth": "A combine harvester's straw walkers separate the majority of grain from the crop.",
        "reality": "75% to 85% of grain is threshed and separated immediately through the concave grate beneath the cylinder; straw walkers only separate the remaining 15-25% of loose grain trapped in the straw mat."
      },
      {
        "myth": "An out-of-register cutter bar simply runs slightly slower in the field.",
        "reality": "An out-of-register cutter bar fails to shear stems cleanly, causing stems to be dragged, chewed, and jammed between guards, causing severe vibration, cutter bar fracture, and engine overload."
      }
    ],
    "summary": "Unit 4 details the mechanics of crop harvesting, threshing, and post-harvest separation. It explores reciprocating cutter bar dynamics (register, lead, guards), vertical conveyor reapers, complete combine harvester anatomy, cylinder-concave mechanics (rasp bar vs spike tooth), maize shellers, groundnut decorticators, and potato/groundnut root digging equipment."
  },
  "mcqs": [
    {
      "id": "SOL223-U4-MCQ01",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Easy",
      "questionText": "In a reciprocating cutter bar, the moving knife sections shear crop stems against which stationary component?",
      "options": {
        "A": "The cutter bar shoe",
        "B": "The ledger plate mounted inside the guard finger",
        "C": "The pitman flywheel",
        "D": "The wooden beam"
      },
      "correctOption": "B",
      "explanation": "The scissor-like shearing cut occurs between the bevelled edge of the moving knife section and the stationary ledger plate."
    },
    {
      "id": "SOL223-U4-MCQ02",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Easy",
      "questionText": "A cutter bar is defined as being in 'perfect register' when:",
      "options": {
        "A": "The knife bar is painted yellow",
        "B": "The center of each knife section coincides exactly with the center of a guard finger at both dead centers of its stroke",
        "C": "The cutter bar is tilted 45\u00b0 downward",
        "D": "The pitman arm rotates at 2000 rpm"
      },
      "correctOption": "B",
      "explanation": "Register is the precise alignment of knife section centerlines with guard finger centerlines at stroke reversal limits."
    },
    {
      "id": "SOL223-U4-MCQ03",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Easy",
      "questionText": "Why is a forward 'lead' (typically 1.5-2 cm per meter of length) provided to the outer end of a cutter bar when stationary?",
      "options": {
        "A": "To make turning easier",
        "B": "To compensate for rearward deflection caused by cutting resistance during field operation, keeping the bar straight",
        "C": "To drop cut grain forward",
        "D": "To avoid hitting tractor tires"
      },
      "correctOption": "B",
      "explanation": "Backward cutting forces flex the cutter bar; setting an initial forward lead ensures the bar straightens under operational load."
    },
    {
      "id": "SOL223-U4-MCQ04",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders",
      "difficulty": "Easy",
      "questionText": "What is the function of the lugged rubberized conveyor belts on a Vertical Conveyor Reaper (VCR)?",
      "options": {
        "A": "Drive the engine alternator",
        "B": "Grip severed crop stalks vertically and transport them laterally to discharge them into a continuous windrow",
        "C": "Crush crop stems for silage",
        "D": "Act as mud scrapers for wheels"
      },
      "correctOption": "B",
      "explanation": "Lugged belts support cut stalks upright and convey them sideways, laying a clean windrow on the field."
    },
    {
      "id": "SOL223-U4-MCQ05",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Easy",
      "questionText": "Approximately what percentage of grain is separated through the concave grate directly beneath the threshing cylinder in a combine?",
      "options": {
        "A": "10% to 20%",
        "B": "35% to 45%",
        "C": "75% to 85%",
        "D": "98% to 100%"
      },
      "correctOption": "C",
      "explanation": "The threshing cylinder and concave separate 75% to 85% of total grain; straw walkers only separate the remaining 15-25%."
    },
    {
      "id": "SOL223-U4-MCQ06",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Easy",
      "questionText": "Which functional subsystem in a combine harvester separates loose grain trapped inside the moving straw mat after threshing?",
      "options": {
        "A": "Feeder chain conveyor",
        "B": "Oscillating straw walkers",
        "C": "Grain tank unloader auger",
        "D": "Cutter bar wobble box"
      },
      "correctOption": "B",
      "explanation": "Oscillating straw walkers toss the straw mat rearward, allowing trapped grain to fall through grates to the return pan below."
    },
    {
      "id": "SOL223-U4-MCQ07",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "difficulty": "Easy",
      "questionText": "Which threshing cylinder is standardly used for harvesting wheat, barley, and soybeans because it preserves straw and minimizes grain damage?",
      "options": {
        "A": "Spike tooth (peg tooth) cylinder",
        "B": "Rasp bar cylinder",
        "C": "Wire loop cylinder",
        "D": "Smooth wooden drum"
      },
      "correctOption": "B",
      "explanation": "Rasp bar cylinders thresh by rubbing and moderate impact, keeping straw intact with minimal grain cracking (<1%)."
    },
    {
      "id": "SOL223-U4-MCQ08",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "difficulty": "Easy",
      "questionText": "Which threshing cylinder aggressively shreds crop straw into fine cattle feed (bhusa)?",
      "options": {
        "A": "Rasp bar cylinder",
        "B": "Spike tooth (peg tooth) cylinder",
        "C": "Pneumatic blower",
        "D": "Rubber roller sheller"
      },
      "correctOption": "B",
      "explanation": "Spike tooth cylinders use staggered steel pegs passing between concave teeth, shredding straw into fine bhusa."
    },
    {
      "id": "SOL223-U4-MCQ09",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Easy",
      "questionText": "What is the typical peripheral cylinder speed recommended for threshing mature wheat in a rasp-bar combine?",
      "options": {
        "A": "5 to 8 m/s",
        "B": "12 to 16 m/s",
        "C": "28 to 32 m/s",
        "D": "55 to 65 m/s"
      },
      "correctOption": "C",
      "explanation": "Wheat requires high peripheral speeds between 28 and 32 m/s (approx. 850-1050 rpm depending on drum diameter)."
    },
    {
      "id": "SOL223-U4-MCQ10",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Easy",
      "questionText": "What is the typical peripheral cylinder speed recommended for threshing fragile crops like soybean and chickpea to prevent splitting?",
      "options": {
        "A": "5 to 8 m/s",
        "B": "12 to 16 m/s",
        "C": "30 to 35 m/s",
        "D": "45 to 50 m/s"
      },
      "correctOption": "B",
      "explanation": "Soybeans and pulses are vulnerable to cotyledon splitting and require low peripheral speeds of 12 to 16 m/s."
    },
    {
      "id": "SOL223-U4-MCQ11",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Easy",
      "questionText": "What is the primary function of the cleaning fan in a combine harvester cleaning shoe?",
      "options": {
        "A": "Cool the engine radiator",
        "B": "Blow an upward-directed air stream through the sieves to suspend and blow away light chaff and husks",
        "C": "Press grain into storage bags",
        "D": "Generate vacuum for the cabin air conditioner"
      },
      "correctOption": "B",
      "explanation": "The fan blows air upward through the chaffer and sieve, aerodynamically blowing light chaff out the rear while heavy grain drops."
    },
    {
      "id": "SOL223-U4-MCQ12",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Easy",
      "questionText": "What are 'tailings' in a combine harvester and where are they directed?",
      "options": {
        "A": "Crop straw expelled from walkers",
        "B": "Unthreshed earheads falling off the rear of the chaffer, conveyed back to the cylinder for re-threshing",
        "C": "Stones caught in the stone trap",
        "D": "Excess diesel returned to the fuel tank"
      },
      "correctOption": "B",
      "explanation": "Tailings comprise unthreshed heads and pods; the tailings elevator returns them to the cylinder for a second threshing pass."
    },
    {
      "id": "SOL223-U4-MCQ13",
      "syllabusTopic": "Maize shellers (hand operated, pedal operated, power operated)",
      "difficulty": "Easy",
      "questionText": "Why cannot standard spike-tooth wheat threshers be used for shelling maize cobs?",
      "options": {
        "A": "Maize cobs are too dry",
        "B": "Aggressive spikes shatter the soft wooden cob core into fragments, contaminating grain and causing high kernel breakage",
        "C": "Maize kernels contain too much sugar",
        "D": "Spikes attract static electricity"
      },
      "correctOption": "B",
      "explanation": "Spikes crush the spongy cob core into fragments that cannot be separated from kernels; specialized shellers are required."
    },
    {
      "id": "SOL223-U4-MCQ14",
      "syllabusTopic": "Groundnut decorticators and pod strippers",
      "difficulty": "Easy",
      "questionText": "What is the primary operational function of an agricultural groundnut decorticator?",
      "options": {
        "A": "Roast groundnut seeds",
        "B": "Crack and separate outer fibrous pods (shells) from edible kernels with minimal kernel breakage",
        "C": "Extract groundnut oil",
        "D": "Grind pods into cattle feed"
      },
      "correctOption": "B",
      "explanation": "Decorticators crack groundnut hulls and separate light shells from heavy kernels using oscillating or rotating rubbing shoes."
    },
    {
      "id": "SOL223-U4-MCQ15",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)",
      "difficulty": "Easy",
      "questionText": "In a potato elevator digger, how is excavated soil separated from potato tubers?",
      "options": {
        "A": "High-pressure water washing",
        "B": "Agitation along an inclined rod-chain web conveyor sifts loose soil through the chain gaps",
        "C": "Centrifugal spinning basket",
        "D": "Infrared optical sorting"
      },
      "correctOption": "B",
      "explanation": "An oscillating rod-chain apron shakes the soil ridge, sifting pulverized soil downward while elevating clean tubers."
    },
    {
      "id": "SOL223-U4-MCQ16",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)",
      "difficulty": "Easy",
      "questionText": "What is the special function of an agricultural groundnut digger-shaker-inverter?",
      "options": {
        "A": "Picks groundnuts and makes peanut butter",
        "B": "Cuts taproots, shakes loose soil off roots, and inverts vines 180\u00b0 with pods facing upward for solar drying",
        "C": "Buries groundnuts under soil mulch",
        "D": "Plants groundnut seeds in rows"
      },
      "correctOption": "B",
      "explanation": "The machine inverts vines upside down so pods rest elevated in sunlight, accelerating field curing and curing aflatoxin risks."
    },
    {
      "id": "SOL223-U4-MCQ17",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Easy",
      "questionText": "What is the standard stroke length of a conventional agricultural cutter bar knife?",
      "options": {
        "A": "25.4 mm (1 inch)",
        "B": "76.2 mm (3 inches)",
        "C": "152.4 mm (6 inches)",
        "D": "304.8 mm (12 inches)"
      },
      "correctOption": "B",
      "explanation": "Standard agricultural cutter bars operate with a 76.2 mm (3-inch) stroke length, exactly equal to guard finger spacing."
    },
    {
      "id": "SOL223-U4-MCQ18",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "difficulty": "Easy",
      "questionText": "Which threshing mechanism is traditional in small Asian pedal-operated paddy threshers?",
      "options": {
        "A": "Pneumatic air jet",
        "B": "Wire loop drum",
        "C": "Chilled iron rasp bar",
        "D": "Serrated rotary disc"
      },
      "correctOption": "B",
      "explanation": "Pedal threshers deploy a rotating wooden or sheet-metal drum fitted with inverted wire loops that comb grain off panicles."
    },
    {
      "id": "SOL223-U4-MCQ19",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Easy",
      "questionText": "What component in a combine harvester prevents lodged, fallen, or tangled crops from slipping under the cutter bar?",
      "options": {
        "A": "Stone trap",
        "B": "Pick-up reel with spring-loaded tines",
        "C": "Straw chopper",
        "D": "Tailings auger"
      },
      "correctOption": "B",
      "explanation": "Pick-up reels with cam-actuated spring fingers reach down to lift tangled, lodged crop stems ahead of the cutter bar."
    },
    {
      "id": "SOL223-U4-MCQ20",
      "syllabusTopic": "Paddy thresher and winnowing machines",
      "difficulty": "Easy",
      "questionText": "In grain cleaning winnowing machines, what physical property allows heavy grains to be separated from light chaff in an air stream?",
      "options": {
        "A": "Magnetic susceptibility",
        "B": "Differences in terminal velocity in a moving air current",
        "C": "Dielectric constant",
        "D": "Thermal conductivity"
      },
      "correctOption": "B",
      "explanation": "Grain kernels possess higher terminal velocities (8-12 m/s) than light chaff (2-4 m/s), enabling aerodynamic air separation."
    },
    {
      "id": "SOL223-U4-MCQ21",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Medium",
      "questionText": "What happens if a combine cutter bar operates with worn knife clips (hold-down clips having >1.5 mm clearance)?",
      "options": {
        "A": "Travel speed doubles",
        "B": "Knife sections lift off the ledger plates, chewing and tearing stalks instead of shearing cleanly, causing severe clogging",
        "C": "Cutter bar lead angle increases",
        "D": "Pitman arm breaks immediately"
      },
      "correctOption": "B",
      "explanation": "Excessive hold-down clearance allows knives to ride up over ledger plates, losing the tight scissor shear and causing jams."
    },
    {
      "id": "SOL223-U4-MCQ22",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Medium",
      "questionText": "A cutter bar has a crank speed of 500 rpm and a stroke length of 76 mm. What is the average linear knife speed?",
      "options": {
        "A": "0.63 m/s",
        "B": "1.27 m/s",
        "C": "2.53 m/s",
        "D": "3.80 m/s"
      },
      "correctOption": "B",
      "explanation": "Linear distance per revolution = 2 * Stroke = 2 * 0.076 m = 0.152 m. Average knife speed = (0.152 * 500) / 60 = 1.267 m/s ~ 1.27 m/s."
    },
    {
      "id": "SOL223-U4-MCQ23",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Medium",
      "questionText": "In a combine harvester, why is concave clearance always set wider at the front inlet and narrower at the rear outlet?",
      "options": {
        "A": "To simplify manufacturing",
        "B": "To accommodate the high bulk volume of unthreshed straw at the inlet and achieve final grain detachment at the outlet",
        "C": "To prevent grain from falling out",
        "D": "To allow rocks to escape"
      },
      "correctOption": "B",
      "explanation": "The thick incoming unthreshed crop mat enters the wide inlet; as straw compresses and grain detaches, a narrow rear gap finishes threshing."
    },
    {
      "id": "SOL223-U4-MCQ24",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "difficulty": "Medium",
      "questionText": "How does an axial-flow combine cylinder differ fundamentally from a conventional tangential-flow cylinder?",
      "options": {
        "A": "Axial-flow cylinders use wooden pegs",
        "B": "In axial-flow, crop travels spirally along the rotor's longitudinal axis for multiple revolutions instead of passing through in one quick pass",
        "C": "Axial-flow operates without a concave",
        "D": "Axial-flow cylinders rotate at 10,000 rpm"
      },
      "correctOption": "B",
      "explanation": "Axial flow feeds crop along the rotor length, subjecting material to 3-4 helical revolutions for gentle, progressive separation."
    },
    {
      "id": "SOL223-U4-MCQ25",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Medium",
      "questionText": "What is the consequence of setting concave clearance too narrow in a grain combine harvester?",
      "options": {
        "A": "High percentage of unthreshed grain in straw",
        "B": "High grain crack damage, kernel crushing, and excessive straw breakage overloading the sieves",
        "C": "Engine speed increases uncontrollably",
        "D": "Straw walkers stop oscillating"
      },
      "correctOption": "B",
      "explanation": "Excessive concave pinching pulverizes straw into fine chaff that chokes sieves and crushes grain embryos."
    },
    {
      "id": "SOL223-U4-MCQ26",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Medium",
      "questionText": "What is the consequence of setting concave clearance too wide?",
      "options": {
        "A": "Grain cracks into fine powder",
        "B": "Incomplete threshing, resulting in unthreshed earheads escaping onto straw walkers and lost in the field",
        "C": "Combine chassis vibrates violently",
        "D": "Cleaning fan blows grain out the back"
      },
      "correctOption": "B",
      "explanation": "Too wide a gap fails to rub earheads firmly against cylinder bars, leaving grain attached to heads and lost in straw."
    },
    {
      "id": "SOL223-U4-MCQ27",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Medium",
      "questionText": "What happens in the cleaning shoe if the cleaning fan airflow velocity is set too high?",
      "options": {
        "A": "Grain tank fills instantly",
        "B": "Good, heavy grain kernels are carried away by the excessive air stream and blown out the rear of the combine with chaff",
        "C": "Chaffer sieves get clogged with mud",
        "D": "Combine engine overheats"
      },
      "correctOption": "B",
      "explanation": "Excessive air velocity exceeds the terminal velocity of good grain kernels, blowing them out the back as cleaning loss."
    },
    {
      "id": "SOL223-U4-MCQ28",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Medium",
      "questionText": "What happens if the cleaning fan airflow velocity is set too low?",
      "options": {
        "A": "Grain is blown into the cabin",
        "B": "Chaff and husks fail to fluidize and settle directly onto the sieves, blinding sieve openings and causing grain to ride out the rear",
        "C": "Cutter bar stops cutting",
        "D": "Straw walkers break"
      },
      "correctOption": "B",
      "explanation": "Insufficient airflow allows chaff mats to cover sieves (sieve blinding), blocking grain from dropping and causing heavy loss."
    },
    {
      "id": "SOL223-U4-MCQ29",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders",
      "difficulty": "Medium",
      "questionText": "What component in a reaper-binder holds the twine and ties the knot around the gathered sheaf of grain?",
      "options": {
        "A": "The pitman arm",
        "B": "The Appleby knotter mechanism (billhook and twine disc)",
        "C": "The star wheel",
        "D": "The reel bat"
      },
      "correctOption": "B",
      "explanation": "The mechanical knotter features a rotating billhook that loops twine and a retainer disc that grips twine during knot tying."
    },
    {
      "id": "SOL223-U4-MCQ30",
      "syllabusTopic": "Maize shellers (hand operated, pedal operated, power operated)",
      "difficulty": "Medium",
      "questionText": "In a commercial power-operated cylinder maize sheller, what prevents whole cobs from being ejected before they are completely shelled?",
      "options": {
        "A": "An electronic camera",
        "B": "An adjustable weighted retention gate or cone restrictor at the discharge outlet that regulates cob residence time",
        "C": "A magnetic gate",
        "D": "A water spray curtain"
      },
      "correctOption": "B",
      "explanation": "A spring-loaded or weighted discharge flap retards cob exit until kernels are thoroughly sheared by shelling lugs."
    },
    {
      "id": "SOL223-U4-MCQ31",
      "syllabusTopic": "Groundnut decorticators and pod strippers",
      "difficulty": "Medium",
      "questionText": "Why must groundnut pods be dried to a moisture content of 8% to 10% before decortication?",
      "options": {
        "A": "To make shells flammable",
        "B": "High moisture makes shells rubbery and difficult to crack, causing severe kernel crushing; dry pods crack cleanly with minimal kernel splitting",
        "C": "To change kernel color",
        "D": "To kill groundnut insects"
      },
      "correctOption": "B",
      "explanation": "Tough, pliable moist pods resist brittle cracking; drying to 8-10% ensures brittle shell fracture under minimal compressive force."
    },
    {
      "id": "SOL223-U4-MCQ32",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)",
      "difficulty": "Medium",
      "questionText": "In a potato digger elevator, what design feature minimizes skinning and bruising of delicate new-crop potato tubers?",
      "options": {
        "A": "High elevator chain speed",
        "B": "Rubber-coated chain conveyor links and low drop heights onto padded deflectors",
        "C": "Sharpened conveyor cross bars",
        "D": "Drying potatoes with a flame torch"
      },
      "correctOption": "B",
      "explanation": "Rubberized conveyor webbing cushions tubers against impacts, preventing epidermal skin scuffing and fungal rot."
    },
    {
      "id": "SOL223-U4-MCQ33",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Medium",
      "questionText": "Under serrated knife sections, why are smooth ledger plates preferred, whereas serrated ledger plates are paired with smooth knives?",
      "options": {
        "A": "To reduce manufacturing cost",
        "B": "To ensure that one cutting edge has serrations to grip slick, fibrous crop stems while the opposing edge shears cleanly without slipping",
        "C": "Because serrated parts cannot be sharpened",
        "D": "To reduce tractor horsepower"
      },
      "correctOption": "B",
      "explanation": "Having serrations on at least one shearing edge prevents slippery straw stems from sliding forward out of the shear zone."
    },
    {
      "id": "SOL223-U4-MCQ34",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Medium",
      "questionText": "A combine threshing cylinder has a diameter of 60 cm and rotates at 950 rpm. What is its peripheral speed?",
      "options": {
        "A": "14.9 m/s",
        "B": "29.8 m/s",
        "C": "45.2 m/s",
        "D": "59.6 m/s"
      },
      "correctOption": "B",
      "explanation": "Peripheral speed V_p = (pi * D * N) / 60 = (3.14159 * 0.60 * 950) / 60 = 1790.7 / 60 = 29.85 m/s ~ 29.8 m/s."
    },
    {
      "id": "SOL223-U4-MCQ35",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Medium",
      "questionText": "What is the function of the 'stone trap' located immediately ahead of the threshing cylinder in a combine?",
      "options": {
        "A": "Collect loose grain",
        "B": "Catch ingested stones, rocks, and iron scrap before they enter the cylinder and destroy concave bars",
        "C": "Store drinking water for the operator",
        "D": "Filter engine exhaust"
      },
      "correctOption": "B",
      "explanation": "The stone trap is a depression that catches heavy rocks pushed ahead of the drum, preventing catastrophic drum wreckage."
    },
    {
      "id": "SOL223-U4-MCQ36",
      "syllabusTopic": "Paddy thresher and winnowing machines",
      "difficulty": "Medium",
      "questionText": "Why are axial-flow threshers particularly well-suited for high-moisture wetland paddy crops in humid tropical regions?",
      "options": {
        "A": "They require no lubrication",
        "B": "The multiple spiral passes gently tease apart tangled, wet straw mats, separating grain without the choking common to tangential drums",
        "C": "They operate at 5000 rpm",
        "D": "They blow exhaust gas onto wet grain"
      },
      "correctOption": "B",
      "explanation": "Continuous helical transport handles long, damp, tough rice straw without wrapping or plugging the threshing drum."
    },
    {
      "id": "SOL223-U4-MCQ37",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Medium",
      "questionText": "What is the function of the 'wearing plates' installed on a cutter bar?",
      "options": {
        "A": "To weigh down the cutter bar",
        "B": "To support the back edge of the knife bar, absorbing rearward cutting thrust and maintaining correct forward knife position",
        "C": "To sharpen knives automatically",
        "D": "To lubricate the crop stems"
      },
      "correctOption": "B",
      "explanation": "Wearing plates bear the horizontal backward reaction load of cutting, preventing the knife bar from bowing backward."
    },
    {
      "id": "SOL223-U4-MCQ38",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Medium",
      "questionText": "How is the threshing cylinder peripheral speed adjusted on modern combine harvesters?",
      "options": {
        "A": "Changing engine oil weight",
        "B": "Variable-pitch belt pulleys (variable speed drive) or multi-speed gearbox",
        "C": "Adjusting tractor tire size",
        "D": "Shifting the cutter bar forward"
      },
      "correctOption": "B",
      "explanation": "Hydraulically or mechanically adjustable split sheaves vary belt operating diameters, changing drum RPM on the fly."
    },
    {
      "id": "SOL223-U4-MCQ39",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders",
      "difficulty": "Medium",
      "questionText": "Why are star wheels mounted above the cutter bar on a vertical conveyor reaper?",
      "options": {
        "A": "To measure field acreage",
        "B": "To sweep and press standing crop stems against the cutter bar and ensure stalks remain upright as they drop onto the conveyor belt",
        "C": "To chop weed vines into pieces",
        "D": "To shine lights for night harvesting"
      },
      "correctOption": "B",
      "explanation": "Rotating star fingers guide standing stalks into the knife and maintain vertical stem orientation during cutoff."
    },
    {
      "id": "SOL223-U4-MCQ40",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)",
      "difficulty": "Medium",
      "questionText": "In a groundnut digger-shaker, what is the role of the vibrating rear pick-up fingers?",
      "options": {
        "A": "Crack the groundnut shells",
        "B": "Shake loose adhering soil clods from the pod root mass so pods dry clean and unsoiled",
        "C": "Cut the vines into small pieces",
        "D": "Spray fungicide on pods"
      },
      "correctOption": "B",
      "explanation": "Mechanical agitation shakes soil clods off root clusters, leaving clean pods that dry quickly and cause minimal wear in shellers."
    },
    {
      "id": "SOL223-U4-MCQ41",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Medium",
      "questionText": "What is the purpose of the 'chaffer extension' at the rear of the combine cleaning shoe?",
      "options": {
        "A": "Provide a footstep for maintenance",
        "B": "Catch any unthreshed earheads riding over the main chaffer and allow them to drop into the tailings auger rather than onto the ground",
        "C": "Deflect engine exhaust",
        "D": "Hold spare sieves"
      },
      "correctOption": "B",
      "explanation": "The adjustable chaffer extension gives unthreshed heads a final chance to fall into the tailings auger before exiting."
    },
    {
      "id": "SOL223-U4-MCQ42",
      "syllabusTopic": "Maize shellers (hand operated, pedal operated, power operated)",
      "difficulty": "Medium",
      "questionText": "What is the typical grain damage (broken kernel percentage) achieved by a properly adjusted commercial power maize sheller?",
      "options": {
        "A": "Less than 1.0% to 1.5%",
        "B": "5% to 8%",
        "C": "12% to 15%",
        "D": "25% to 30%"
      },
      "correctOption": "A",
      "explanation": "Well-tuned commercial power maize shellers achieve kernel breakage below 1.0-1.5% with near 100% shelling efficiency."
    },
    {
      "id": "SOL223-U4-MCQ43",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Medium",
      "questionText": "What type of drive mechanism has largely replaced the traditional wooden pitman arm in modern high-speed harvester cutter bars?",
      "options": {
        "A": "Leather flat belt drive",
        "B": "Enclosed oil-bath wobble box (oscillating drive) or hydraulic motor drive",
        "C": "Bicycle chain drive",
        "D": "Pneumatic piston drive"
      },
      "correctOption": "B",
      "explanation": "Enclosed wobble boxes provide compact, balanced, high-frequency (600-750 cycles/min) reciprocating drive with zero pitman whip."
    },
    {
      "id": "SOL223-U4-MCQ44",
      "syllabusTopic": "Groundnut decorticators and pod strippers",
      "difficulty": "Medium",
      "questionText": "In an oscillating rocker groundnut decorticator, what governs the clearance between the rocker shoe and the concave screen?",
      "options": {
        "A": "The operator's weight",
        "B": "Adjustable side linkage pins, set to slightly less than average pod diameter to crack shells without crushing kernels",
        "C": "Concave paint color",
        "D": "Hopper capacity"
      },
      "correctOption": "B",
      "explanation": "Clearance must match pod geometry: wide enough to avoid crushing kernels, yet tight enough to fracture the fibrous shell."
    },
    {
      "id": "SOL223-U4-MCQ45",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Medium",
      "questionText": "What is the function of the cross auger floating suspension on a combine header?",
      "options": {
        "A": "Allows the auger to move laterally",
        "B": "Allows the auger to lift vertically to accommodate heavy or bunched slugs of straw without jamming the header",
        "C": "Keeps the auger level on hills",
        "D": "Dampens engine vibrations"
      },
      "correctOption": "B",
      "explanation": "Floating spring-cushioned mounts let the auger rise over large lumps or uneven crop slugs, feeding the elevator smoothly."
    },
    {
      "id": "SOL223-U4-MCQ46",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Hard",
      "questionText": "A self-propelled combine harvester with a 4.2-meter cutter bar operates at a forward speed of 3.6 km/h in a wheat field yielding 4.5 tonnes/ha. If the straw-to-grain ratio is 1.2:1, what is the total crop intake rate (grain + straw) fed into the feeder housing in kg/s?",
      "options": {
        "A": "2.1 kg/s",
        "B": "4.16 kg/s",
        "C": "6.25 kg/s",
        "D": "8.50 kg/s"
      },
      "correctOption": "B",
      "explanation": "Area harvested per second = (4.2 m * 1.0 m/s) = 4.2 m\u00b2/s. In ha/s = 4.2 / 10,000 = 0.00042 ha/s. Grain yield = 4.5 t/ha = 4500 kg/ha. Total crop yield (grain + straw) = 4500 * (1 + 1.2) = 4500 * 2.2 = 9900 kg/ha. Crop intake rate = 0.00042 ha/s * 9900 kg/ha = 4.158 kg/s ~ 4.16 kg/s."
    },
    {
      "id": "SOL223-U4-MCQ47",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Hard",
      "questionText": "A combine threshing cylinder of 0.55 m diameter is harvesting malting barley, where grain crack damage must remain <0.5%. Agronomic guidelines require a peripheral speed of 24 m/s. What cylinder RPM must be selected?",
      "options": {
        "A": "416 rpm",
        "B": "833 rpm",
        "C": "1050 rpm",
        "D": "1250 rpm"
      },
      "correctOption": "B",
      "explanation": "Peripheral speed V_p = (pi * D * N) / 60 -> N = (60 * V_p) / (pi * D) = (60 * 24) / (3.14159 * 0.55) = 1440 / 1.7279 = 833.4 rpm ~ 833 rpm."
    },
    {
      "id": "SOL223-U4-MCQ48",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Hard",
      "questionText": "During combine harvester loss testing, grain collected behind the straw walkers represents 32 kg/ha, while losses behind the cleaning shoe represent 18 kg/ha. If the net harvested grain yield is 3950 kg/ha, what is the total combine processing loss percentage?",
      "options": {
        "A": "0.75%",
        "B": "1.25%",
        "C": "2.50%",
        "D": "3.80%"
      },
      "correctOption": "B",
      "explanation": "Total field loss = Walker loss + Shoe loss = 32 + 18 = 50 kg/ha. Gross yield = 3950 + 50 = 4000 kg/ha. Processing loss (%) = (50 / 4000) * 100 = 1.25%."
    },
    {
      "id": "SOL223-U4-MCQ49",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Hard",
      "questionText": "In a combine cutter bar, why does the ratio of knife speed to forward travel speed (V_k / V_f) have to remain between 1.3 and 1.7?",
      "options": {
        "A": "To prevent engine overheating",
        "B": "If ratio < 1.3, stems are pushed forward and sheared at a slope; if ratio > 1.7, excessive kinetic energy causes stem shattering and unnecessary knife wear",
        "C": "To synchronize with the grain tank auger",
        "D": "To prevent tire slip"
      },
      "correctOption": "B",
      "explanation": "An optimal velocity ratio (1.3-1.7) ensures stalks are severed vertically with minimal forward push and minimal blade wear."
    },
    {
      "id": "SOL223-U4-MCQ50",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Hard",
      "questionText": "In a combine chaffer, what aerodynamic phenomenon occurs if the cleaning fan blast creates turbulent eddied flow instead of laminar flow across the sieve?",
      "options": {
        "A": "Grain flows backwards",
        "B": "Localized dead air spots allow chaff to dump onto the sieve while high-velocity jets blow grain out the rear",
        "C": "Chaffer sieve collapses",
        "D": "Grain moisture increases by 10%"
      },
      "correctOption": "B",
      "explanation": "Air eddies cause dead spots (chaff matting) adjacent to high-velocity blow-holes, simultaneously causing high shoe loss and dirty grain."
    },
    {
      "id": "SOL223-U4-MCQ51",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders",
      "difficulty": "Hard",
      "questionText": "In a tractor front-mounted vertical conveyor reaper harvesting at 4 km/h with an effective width of 2.0 m, what is its theoretical field capacity in ha/h?",
      "options": {
        "A": "0.40 ha/h",
        "B": "0.80 ha/h",
        "C": "1.20 ha/h",
        "D": "1.60 ha/h"
      },
      "correctOption": "B",
      "explanation": "TFC = (Width in m * Speed in km/h) / 10 = (2.0 * 4.0) / 10 = 8.0 / 10 = 0.80 ha/h."
    },
    {
      "id": "SOL223-U4-MCQ52",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)",
      "difficulty": "Hard",
      "questionText": "A 2-row potato digger operates at 3.0 km/h with 75 cm ridge spacing. The digger blade penetrates to 20 cm depth. If soil bulk density is 1.3 g/cm\u00b3, what mass of soil (tonnes/h) is excavated and lifted onto the elevator web?",
      "options": {
        "A": "150 t/h",
        "B": "585 t/h",
        "C": "1170 t/h",
        "D": "2340 t/h"
      },
      "correctOption": "B",
      "explanation": "Working width W = 2 * 0.75 = 1.50 m. Depth D = 0.20 m. Forward speed = 3000 m/h. Volume of soil per hour = 1.50 m * 0.20 m * 3000 m/h = 900 m\u00b3/h. Mass = 900 m\u00b3 * 1300 kg/m\u00b3 = 1,170,000 kg/h = 1170 t/h (if both ridges are continuous slabs) or accounting for ridge cross-section (~50% of rectangular prism) = 585 t/h."
    },
    {
      "id": "SOL223-U4-MCQ53",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "difficulty": "Hard",
      "questionText": "Why is specific power consumption (kWh per tonne of grain threshed) higher in a spike tooth thresher than in a rasp bar thresher?",
      "options": {
        "A": "Spike teeth have higher bearing friction",
        "B": "Spike teeth perform continuous shearing and intensive shredding of the tough straw into fine chaff, requiring high mechanical tearing energy",
        "C": "Spike teeth operate at higher voltage",
        "D": "Spike teeth require water cooling"
      },
      "correctOption": "B",
      "explanation": "Shredding straw into fine bhusa consumes 2 to 3 times more mechanical energy than merely rubbing and knocking kernels out of heads."
    },
    {
      "id": "SOL223-U4-MCQ54",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Hard",
      "questionText": "What is the purpose of the 'straw walker fishbacks' (risers) mounted on combine straw walkers?",
      "options": {
        "A": "Cut tangled weed stems",
        "B": "Prevent threshed straw from sliding downhill backward while flipping and tossing the straw mat upward on each oscillation stroke",
        "C": "Direct exhaust gases away from straw",
        "D": "Sharpen the rasp bars"
      },
      "correctOption": "B",
      "explanation": "Sawtooth fishbacks grip the straw on the upward stroke, propelling it forward and tossing the mat to let trapped grain sift out."
    },
    {
      "id": "SOL223-U4-MCQ55",
      "syllabusTopic": "Maize shellers (hand operated, pedal operated, power operated)",
      "difficulty": "Hard",
      "questionText": "A power maize sheller processes 1500 kg of cobs per hour. Shelling recovers 1170 kg of grain and 330 kg of bare cobs. What is the shelling percentage?",
      "options": {
        "A": "68.0%",
        "B": "75.0%",
        "C": "78.0%",
        "D": "82.5%"
      },
      "correctOption": "C",
      "explanation": "Shelling percentage = (Mass of clean grain / Total mass of cobs) * 100 = (1170 / 1500) * 100 = 78.0%."
    },
    {
      "id": "SOL223-U4-MCQ56",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Hard",
      "questionText": "What is the mathematical condition for the reel tip speed index (K = V_reel / V_forward) to ensure crop heads are held securely without shattering?",
      "options": {
        "A": "K < 0.5",
        "B": "1.1 <= K <= 1.3",
        "C": "2.5 <= K <= 3.0",
        "D": "K > 5.0"
      },
      "correctOption": "B",
      "explanation": "Reel index K standardly ranges between 1.1 and 1.3. Below 1.0, the reel pushes crop forward; above 1.5, violent bats shatter ripe grain."
    },
    {
      "id": "SOL223-U4-MCQ57",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "difficulty": "Hard",
      "questionText": "In a multi-crop thresher, how is concave clearance adjusted between cereal crops and large-seeded pulses?",
      "options": {
        "A": "Replacing the tractor battery",
        "B": "Loosening concave support turnbuckles/eccentrics to widen front and rear clearance gaps",
        "C": "Changing tire air pressure",
        "D": "Tilting the thresher hopper backward"
      },
      "correctOption": "B",
      "explanation": "Adjustable eccentrics or threaded turnbuckles raise or lower the concave basket relative to the cylinder drum."
    },
    {
      "id": "SOL223-U4-MCQ58",
      "syllabusTopic": "Groundnut decorticators and pod strippers",
      "difficulty": "Hard",
      "questionText": "In a power groundnut decorticator with an aspirator blower, why must aspirator air suction be calibrated precisely?",
      "options": {
        "A": "To dry the kernels",
        "B": "If suction is too low, light shells remain mixed in the kernels; if too high, small and split kernels are sucked out into the husk discharge duct",
        "C": "To maintain drum speed",
        "D": "To cool the electric motor"
      },
      "correctOption": "B",
      "explanation": "Aspirator air velocity must exceed the terminal velocity of shells (3-4 m/s) while remaining below that of kernels (7-9 m/s)."
    },
    {
      "id": "SOL223-U4-MCQ59",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "difficulty": "Hard",
      "questionText": "If the pitman arm of a mower or reaper breaks repeatedly at its wooden or metal shank, what is the most likely root mechanical cause?",
      "options": {
        "A": "Tractor running out of fuel",
        "B": "Severe cutter bar out-of-register condition combined with lack of knife lead, causing extreme whipping bending moments",
        "C": "Excessive engine oil",
        "D": "High ambient air temperature"
      },
      "correctOption": "B",
      "explanation": "Out-of-register knives and binding knife clips impose massive cyclical shock loads and reverse bending moments that fracture pitmans."
    },
    {
      "id": "SOL223-U4-MCQ60",
      "syllabusTopic": "Combine harvester: components and working",
      "difficulty": "Hard",
      "questionText": "What is the primary operational advantage of a Hillside Combine Harvester operating in rolling topography?",
      "options": {
        "A": "It can fly over ravines",
        "B": "Automatic hydraulic leveling rams pivot the combine chassis, maintaining the separator body and cleaning shoe perfectly level on slopes up to 25\u00b0",
        "C": "It operates without a cutter bar",
        "D": "It burns water instead of diesel"
      },
      "correctOption": "B",
      "explanation": "Hydraulic leveling keeps the cleaning shoe level, preventing grain and chaff from pooling to one side and pouring out as shoe loss."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL223-U4-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "questionText": "Define Register and Lead (Alignment) of a reciprocating cutter bar. Explain why each adjustment is critical to harvesting performance.",
      "modelAnswer": "Register and Lead in Reciprocating Cutter Bars:\n\n1. Register of Cutter Bar:\n- Definition: A cutter bar is in perfect register when the centerline of each triangular knife section aligns exactly with the centerline of its corresponding guard finger (ledger plate) at both the inner and outer dead centers (extremes) of its stroke.\n- Significance: Perfect register ensures a complete, balanced scissor-shearing cut across the full width of the ledger plate. If the cutter bar is out of register, the knife sections reverse before completing the shear, chewing and tearing stalks. This causes severe crop clogging, increases tractor draft, causes intense driveline vibration, and can fracture the pitman arm.\n\n2. Lead (Alignment) of Cutter Bar:\n- Definition: Lead is the intentional forward angular offset given to the outer tip of the cutter bar relative to its inner drive shoe when the machine is stationary. The standard lead is approximately 1.5 cm to 2.0 cm per meter of cutter bar length (roughly 2\u00b0 forward lead).\n- Significance: In operation, the resistance of cutting tough crop stems and sliding friction across the field creates a heavy backward bending moment. Under full working load, this backward thrust flexes the cutter bar rearward, pulling it into a true straight line perpendicular to forward travel. Without initial lead, the cutter bar flexes backward beyond 90\u00b0, inducing severe binding in the knife clips and accelerated knife bar wear.",
      "outlinePoints": [
        "Definition of Register: alignment of knife centers with guard centers at stroke dead points",
        "Operational consequences of an out-of-register cutter bar (tearing, jams, broken pitman)",
        "Definition of Lead: intentional forward angular offset of the outer tip (1.5-2 cm/m)",
        "Physical rationale: compensating for backward deflection caused by cutting resistance",
        "Consequences of operating without lead (binding, bowing, severe friction)"
      ]
    },
    {
      "id": "SOL223-U4-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "questionText": "Compare a Rasp Bar Threshing Cylinder with a Spike Tooth (Peg Tooth) Threshing Cylinder across five engineering and operational parameters.",
      "modelAnswer": "Rasp Bar vs Spike Tooth Threshing Cylinder:\n\n1. Threshing Mechanism & Primary Forces:\n- Rasp Bar Cylinder: Detaches grain primarily through friction, rubbing, and gentle impact as corrugated steel bars rotate past a perforated bar concave. Straw is squeezed and rubbed without extensive structural tearing.\n- Spike Tooth Cylinder: Operates by aggressive, high-speed impact and shredding. Staggered high-carbon steel spikes on the cylinder pass between matching stationary spikes on the concave, shattering heads and tearing straw.\n\n2. Straw Condition & Chaff (Bhusa) Production:\n- Rasp Bar: Preserves straw structure, leaving long intact straw that is easily handled by straw walkers. Unsuitable if fine bhusa for livestock feed is desired.\n- Spike Tooth: Aggressively chops and shreds straw into fine, soft cattle feed (bhusa), which is highly valued in the Indian dairy economy.\n\n3. Grain Quality & Embryo Crack Damage:\n- Rasp Bar: Highly gentle; grain crack damage standardly remains below 0.5% to 1.0%, making it ideal for malting barley, certified seed crops, and fragile soybeans.\n- Spike Tooth: High impact forces can cause 2% to 5% grain cracking, internal embryo fracturing, and split cotyledons if drum speed is mismanaged.\n\n4. Power Consumption:\n- Rasp Bar: Lower specific energy consumption (typically 2.5 to 3.5 kWh per tonne of grain threshed).\n- Spike Tooth: Higher specific power consumption (5.0 to 8.0 kWh per tonne) due to the immense mechanical energy absorbed in shredding tough straw fibers.\n\n5. Crop Applicability:\n- Rasp Bar: Cereal grains (wheat, barley, oats), pulses, and oilseeds.\n- Spike Tooth: Multi-crop stationary threshers in India, especially for wheat bhusa making and tough, damp paddy.",
      "outlinePoints": [
        "Threshing forces: rubbing/friction (rasp bar) vs aggressive tearing impact (spike tooth)",
        "Straw output: intact long straw vs fine cattle fodder (bhusa)",
        "Grain damage and seed embryo preservation comparison",
        "Specific mechanical energy and tractor power consumption differences",
        "Target crop adaptability and Indian agricultural usage"
      ]
    },
    {
      "id": "SOL223-U4-SUB03",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Combine harvester: components and working",
      "questionText": "Describe the functional subsystems of a self-propelled Combine Harvester and trace the path of grain and straw from cutting to final clean grain storage. Use a schematic flow explanation.",
      "modelAnswer": "Comprehensive Architecture and Material Flow in a Combine Harvester:\n\nA self-propelled combine harvester coordinates seven discrete operations: cutting, gathering, feeding, threshing, separating, cleaning, and grain handling in a single uninterrupted pass.\n\n1. Functional Subsystems:\n- Header Assembly: Includes the floating cutter bar (reciprocating knife sections and guards), the revolving pick-up reel (gathers standing or lodged crop heads toward the cutter bar), and the cross auger (with left- and right-hand helical flights that feed the crop to the center).\n- Feeder Housing: A heavy-duty, enclosed inclined slat-chain conveyor that elevates the dense crop mat into the threshing drum.\n- Threshing Unit: Consists of a high-speed rotating cylinder (rasp bar or spike tooth) and an underlying stationary curved perforated concave. Here, impact and rubbing detach 75% to 85% of grain, which falls through the concave grates onto the grain pan.\n- Separation Unit (Straw Walkers): Multi-section oscillating serrated racks with fishback risers. The remaining 15-25% of grain trapped within the expelled straw mat is shaken out by vigorous tossing. Walkers pitch the straw out the rear of the combine while loose grain falls through walker grates onto a return pan.\n- Cleaning Shoe: Comprises two reciprocating sieves and a centrifugal cleaning fan:\n  * Chaffer Sieve (Upper): Adjustable louvres allow grain to drop through while floating chaff and unthreshed heads rearward.\n  * Cleaning Sieve (Lower): Fine-mesh sieve that allows only clean grain to drop into the clean grain auger trough.\n  * Cleaning Fan: Delivers a controlled, uniform upward air stream that lifts light chaff, dust, and husks out the back, while heavy grain drops against the airflow.\n- Tailings Return System: Unthreshed earheads (tailings) reaching the rear of the chaffer fall into a tailings auger and are elevated back to the threshing cylinder for re-threshing.\n- Clean Grain Handling: Clean grain falling through the shoe sieve is gathered by the clean grain cross auger, conveyed by a vertical bucket elevator, and deposited into the overhead grain tank (2500 to 5000 kg capacity).\n\n2. Crop Material Flow Continuum:\nCrop Heads -> Reel -> Cutter Bar -> Header Cross Auger -> Feeder Slat Conveyor -> Threshing Cylinder & Concave ->\n- Split Path A (Straw): Concave Outlet -> Oscillating Straw Walkers -> Straw Chopper/Spreader -> Field\n- Split Path B (Grain & Chaff): Concave Grates + Walker Return Pan -> Reciprocating Grain Pan -> Chaffer Sieve (Air Blast removes chaff) -> Cleaning Sieve -> Clean Grain Auger -> Bucket Elevator -> Overhead Grain Tank -> Discharge Unloading Auger.",
      "outlinePoints": [
        "Overview of the combine's multi-functional role in cereal harvesting",
        "Header mechanics: pick-up reel, cutter bar, and floating cross auger",
        "Feeder housing conveyor and threshing cylinder-concave mechanics",
        "Straw walker separation mechanics and fishback tossing action",
        "Cleaning shoe mechanics: chaffer sieve, shoe sieve, and cleaning fan airflow",
        "Tailings return recycling and clean grain tank elevator operation",
        "Clear sequential flow chart tracking straw and grain pathways"
      ]
    },
    {
      "id": "SOL223-U4-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "questionText": "Explain the relationship between threshing cylinder speed, concave clearance, threshing efficiency, and mechanical grain damage.",
      "modelAnswer": "Interaction of Cylinder Speed and Concave Clearance in Threshing Mechanics:\n\n1. Cylinder Peripheral Speed Dynamics:\n- Threshing efficiency (the percentage of total grain successfully detached from heads) increases directly with cylinder peripheral speed due to higher kinetic impact energy.\n- However, exceeding crop-specific critical speeds (e.g., >32 m/s for wheat, >16 m/s for soybean) causes grain crack damage to rise exponentially. High impact shatters seed coats, fractures cotyledons, and damages the internal embryo, drastically degrading commercial grade and seed viability.\n\n2. Concave Clearance Dynamics:\n- Concave clearance is the radial distance between the cylinder rasp bar/spike tip and the concave grate. It is tapered (wide at the inlet, narrow at the outlet, e.g., 14 mm front / 5 mm rear for wheat).\n- Setting clearance too wide prevents sufficient rubbing and squeezing, leaving unthreshed heads (low threshing efficiency) that escape out the back with straw.\n- Setting clearance too narrow severely crushes grain kernels, breaks the straw into small chaff particles that overload the cleaning sieves (sieve blinding), and increases tractor fuel consumption.\n\n3. Optimal Tuning Strategy:\nOperators must adjust cylinder speed and concave clearance simultaneously: use the lowest cylinder speed and widest concave clearance that achieves >99% grain detachment with <1% cracked grain.",
      "outlinePoints": [
        "Direct correlation: increasing cylinder speed increases threshing efficiency",
        "The threshold penalty: exponential grain cracking beyond critical speeds",
        "Consequences of excessive concave clearance (unthreshed grain losses)",
        "Consequences of over-tight concave clearance (crushed grain and sieve blinding)",
        "Golden rule: lowest speed and widest clearance achieving complete threshing"
      ]
    },
    {
      "id": "SOL223-U4-SUB05",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms",
      "questionText": "A combine harvester threshing drum has an outer diameter of 600 mm. The operator needs to harvest wheat requiring a peripheral cylinder speed of 30 m/s, and later chickpea requiring 14 m/s. Calculate: (a) Cylinder rotational speed (RPM) required for wheat, (b) Cylinder rotational speed (RPM) required for chickpea, and (c) If the engine PTO runs at a fixed 1000 rpm, what drive ratio must the variable-speed pulley provide in each case?",
      "modelAnswer": "Given Parameters:\n- Cylinder outer diameter (D) = 600 mm = 0.60 m\n- Desired peripheral speed for wheat (V_w) = 30.0 m/s\n- Desired peripheral speed for chickpea (V_c) = 14.0 m/s\n- Input drive shaft speed (N_in) = 1000 rpm\n\nStep 1: Calculate Cylinder RPM for Wheat (N_wheat):\nPeripheral speed V = (pi * D * N) / 60\nN_wheat = (60 * V_w) / (pi * D)\nN_wheat = (60 * 30.0) / (3.14159 * 0.60)\nN_wheat = 1800 / 1.88496 = 954.9 rpm (approx. 955 rpm)\n\nStep 2: Calculate Cylinder RPM for Chickpea (N_chickpea):\nN_chickpea = (60 * V_c) / (pi * D)\nN_chickpea = (60 * 14.0) / (3.14159 * 0.60)\nN_chickpea = 840 / 1.88496 = 445.6 rpm (approx. 446 rpm)\n\nStep 3: Calculate Required Drive Ratios (Ratio = Output RPM / Input RPM):\nFor Wheat:\nDrive Ratio = N_wheat / N_in = 955 / 1000 = 0.955 (or 1 : 1.047 reduction)\nFor Chickpea:\nDrive Ratio = N_chickpea / N_in = 446 / 1000 = 0.446 (or 1 : 2.24 reduction)\n\nFinal Answers:\n(a) Threshing Cylinder RPM for Wheat = 955 rpm\n(b) Threshing Cylinder RPM for Chickpea = 446 rpm\n(c) Drive Transmission Ratio: 0.955 for wheat, and 0.446 for chickpea",
      "outlinePoints": [
        "Listing given drum diameter and required crop peripheral speeds",
        "Mathematical formulation of peripheral velocity (V = pi * D * N / 60)",
        "Computation of drum rotational speed for wheat (955 rpm)",
        "Computation of drum rotational speed for chickpea (446 rpm)",
        "Determination of variable-speed pulley transmission drive ratios"
      ]
    },
    {
      "id": "SOL223-U4-SUB06",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Combine harvester: components and working",
      "questionText": "During field harvesting of basmati paddy with a conventional combine harvester, the grain buyer rejects the consignment due to 8% broken rice kernels and 4% unthreshed grain in the straw. Perform a systematic diagnostic audit of the combine's settings and specify corrective field adjustments.",
      "modelAnswer": "Diagnostic Audit and Corrective Optimization for Combine Paddy Harvesting:\n\n1. Analysis of Harvest Failure Defects:\n- Defect A: 8% Broken Grains: Highly detrimental in basmati rice where whole-head rice commands premium prices. Indicates excessive impact, severe pinching, or aggressive conveyance.\n- Defect B: 4% Unthreshed Grain Loss: Grain escaping unseparated out the back with straw, representing direct economic yield loss.\n\n2. Root Cause Audit:\n- Subsystem 1: Threshing Drum Speed (Cylinder Peripheral Speed):\n  * Finding: Operator is running the cylinder at 850-950 rpm (peripheral speed ~28 m/s), matching wheat settings. Basmati rice has fragile husks and brittle endosperm; peripheral speed >20 m/s shatters the long slender kernels.\n- Subsystem 2: Concave Clearance Misalignment:\n  * Finding: Concave clearance is set too narrow (front 10 mm / rear 4 mm) in an attempt to thresh tightly clinging unthreshed heads, causing severe mechanical grain crushing. Alternatively, an uneven concave basket is pinched on one side and loose on the other.\n- Subsystem 3: Threshing Drum Type Incompatibility:\n  * Finding: A rasp bar cylinder with aggressive steel bars is being used instead of a spike tooth or rubberized rasp bar cylinder. Tough, damp basmati straw wraps around the drum, causing irregular feeding slugs that spike internal pressure.\n- Subsystem 4: Cleaning Fan and Tailings Overload:\n  * Finding: Over-pulverized straw chokes the chaffer sieve. High volumes of unthreshed heads overload the tailings return auger, recycling fragile grains repeatedly through the drum.\n\n3. Corrective Action Protocol:\n- Step 1: Reduce Cylinder Peripheral Speed: Lower cylinder speed to 15 to 18 m/s (approx. 480 to 580 rpm for a 600 mm drum) using the variable speed pulley.\n- Step 2: Widen and Equalize Concave Clearance: Set concave clearance to 16-20 mm at the front inlet and 8-10 mm at the rear outlet. Verify with feeler gauges that left and right clearances are identical.\n- Step 3: Install Specialized Paddy Components: Fit the cylinder with wire-loop or peg-tooth attachments designed for gentle rice stripping.\n- Step 4: Adjust Cleaning Shoe Aerodynamics: Open chaffer louvres slightly and adjust cleaning fan air baffles to deliver a uniform, moderate air blast that fluidizes the chaff without blowing grain out.",
      "outlinePoints": [
        "Identification of the economic crisis: basmati grain breakage and unthreshed loss",
        "Diagnostic audit of excessive cylinder peripheral speed (28 m/s vs 16 m/s)",
        "Diagnostic audit of concave clearance pinching and lateral misalignment",
        "Incompatibility of rasp bar drum with tough, damp basmati straw",
        "Systematic corrective protocol: speed reduction, clearance widening, fan tuning"
      ]
    },
    {
      "id": "SOL223-U4-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders",
      "questionText": "Describe the functional components and working of a Vertical Conveyor Reaper (VCR).",
      "modelAnswer": "Working of the Vertical Conveyor Reaper (VCR):\n\n1. Purpose & Application:\nThe Vertical Conveyor Reaper is an engine-powered or tractor-mounted harvesting machine designed to cut standing cereal crops (wheat, rice, oats) and lay them in continuous, neatly aligned windrows along the ground for easy manual bundling.\n\n2. Key Functional Components:\n- Crop Row Dividers: Pointed triangular sheet-metal shoes projecting forward that part and separate tangled standing crop stems ahead of the cutter bar.\n- Star Wheels: Revolving star-shaped rubberized or polymer wheels mounted above the cutter bar that grip standing crop stems and feed them vertically into the knife.\n- Reciprocating Cutter Bar: Standard 76 mm stroke cutter bar with serrated knife sections that shears crop stems cleanly 5 to 10 cm above ground level.\n- Lugged Vertical Conveyor Belts: Two horizontal flat rubberized belts fitted with projecting flexible lugs, running across the width of the header. One belt runs at the base and the second near the top of the stem.\n\n3. Operational Sequence:\nAs the machine moves forward, the star wheels guide stalks into the cutter bar. As soon as the stems are severed, the lugged belts grip them upright and convey them laterally across the header, discharging them on the right side of the machine in an orderly, continuous windrow parallel to the direction of travel.",
      "outlinePoints": [
        "Agronomic role: cutting and windrowing cereal crops (wheat, paddy)",
        "Crop dividers: parting tangled crop rows ahead of the knife",
        "Star wheels: gripping stems and maintaining vertical orientation",
        "Reciprocating cutter bar: clean cutting at 5-10 cm stubble height",
        "Lugged conveyor belts: lateral conveyance and uniform windrow formation"
      ]
    },
    {
      "id": "SOL223-U4-SUB08",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Maize shellers (hand operated, pedal operated, power operated)",
      "questionText": "Differentiate between a Hand-Operated Rotary Maize Sheller and a Power-Operated Cylinder Maize Sheller.",
      "modelAnswer": "Hand-Operated vs Power-Operated Maize Shellers:\n\n1. Working Principle & Shelling Action:\n- Hand-Operated Sheller: Consists of a hand-cranked cast iron disc featuring cast beveled teeth on its inner face, working against a spring-loaded curved pressure plate. The operator feeds one cob at a time; turning the crank rubs kernels off the cob.\n- Power-Operated Sheller: Features a high-speed rotating steel cylinder equipped with welded shelling lugs or spiral rasp bars inside an enclosed perforated sheet-metal cylindrical concave casing. Whole cobs are bulk-fed into a hopper; continuous axial impact and rubbing shear kernels from cobs.\n\n2. Shelling Capacity & Power Source:\n- Hand Sheller: Human-powered via hand crank. Shelling capacity is 60 to 100 kg of shelled grain per hour.\n- Power Sheller: Driven by a 5 to 10 hp electric motor or tractor PTO. Processing capacity ranges from 1500 to 3500 kg of grain per hour.\n\n3. Cob Handling & Cleaning Integration:\n- Hand Sheller: Cobs are discharged individually by hand. No cleaning mechanism is included; grain must be manually winnowed to remove dust and broken chaff.\n- Power Sheller: Bare cobs are ejected continuously out an end discharge chute, while an integrated centrifugal blower and reciprocating cleaning screen separate husks, dust, and cob fragments from clean grain.",
      "outlinePoints": [
        "Shelling mechanics: single-cob hand friction disc vs continuous bulk cylinder rotor",
        "Power source: human hand crank vs 5-10 hp electric motor / tractor PTO",
        "Throughput capacity comparison (80 kg/h vs 2500 kg/h)",
        "Cleaning integration: manual winnowing required vs built-in aspirator fan"
      ]
    },
    {
      "id": "SOL223-U4-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)",
      "questionText": "Explain the design, operational mechanics, and field adjustments of a Tractor-Drawn Potato Elevator Digger. Discuss factors affecting tuber damage and field recovery efficiency.",
      "modelAnswer": "Design and Operational Dynamics of the Potato Elevator Digger:\n\n1. Functional Significance:\nManual potato digging with spades requires 300 to 400 man-hours per hectare and causes 10% to 15% tuber damage due to spade cuts. A tractor-drawn potato elevator digger mechanizes excavation and separation, lowering labor by 85% and cutting losses below 2%.\n\n2. Key Structural Subsystems:\n- Excavating Blade (Share): A broad, hardened high-carbon steel scoop blade (flat or V-shaped) that penetrates beneath the potato ridge (15 to 25 cm depth), lifting the entire soil ridge containing tubers, vines, and roots.\n- Elevating Rod-Chain Apron (Web Conveyor): An inclined endless conveyor made of high-tensile steel cross-rods (10 to 12 mm diameter) spaced 35 to 45 mm apart, joined by steel side links. Driven by tractor PTO through a gearbox.\n- Agitator Sprockets: Elliptical or star-shaped idler sprockets positioned beneath the upper conveyor run that shake the moving rod apron up and down.\n- Rear Deflectors & Discharge Grate: Adjustable curved steel rods that guide separated tubers into a narrow windrow behind the machine.\n\n3. Operational Sequence:\nAs the tractor advances down the ridges at 2.5 to 3.5 km/h, the blade lifts the intact soil-potato mass onto the elevating apron. The vertical shaking action pulverizes soil clods; loose soil drops through the rod gaps back onto the field. Clean tubers, along with haulms, travel to the rear and drop onto the cleared ground in an orderly row for hand collection.\n\n4. Factors Governing Tuber Bruising and Recovery Efficiency:\n- Depth of Blade Setting: If the blade runs too shallow, tubers are sliced in half by the share point. The blade must be set 3 to 5 cm deeper than the deepest tuber layer.\n- Elevator Chain Agitation Intensity: Excessive shaking in dry sandy soils damages tuber skins, causing rot during cold storage. Agitation must be minimized in light soils and maximized only in heavy clay.\n- Soil-to-Tuber Cushion: The blade should carry a cushion of loose soil at least two-thirds up the elevator web; this soil buffer prevents direct impact between steel rods and potato tubers.\n- Rubber Cushioning: Equipping chain rods with vulcanized rubber sleeves eliminates metal-on-skin impact scuffing.",
      "outlinePoints": [
        "Labor constraints of manual digging vs mechanized elevator harvesting",
        "Design of excavating scoop blade, rod-chain conveyor web, and agitator sprockets",
        "Operational mechanics of soil sifting and tuber windrowing",
        "Blade depth calibration to prevent spade cuts and sliced tubers",
        "Agitation regulation and soil-cushion management to prevent tuber skinning",
        "Rubberized rod coating for premium tuber quality preservation"
      ]
    },
    {
      "id": "SOL223-U4-SUB10",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "questionText": "Explain the concept of 'Reel Index' in combine headers. What operational defects occur when the reel index is either too low or too high?",
      "modelAnswer": "Reel Index in Harvester Cutter Bars:\n\n1. Definition:\nThe Reel Index (K) is the kinematic ratio of the peripheral linear speed of the reel bat tips (V_r) to the forward travel speed of the combine harvester (V_f):\nK = V_r / V_f = (omega_r * R_r) / V_f\nwhere omega_r is the angular velocity of the reel (rad/s), R_r is the reel radius (m), and V_f is the forward travel speed (m/s).\n\n2. Optimal Range:\nIn standard agricultural grain harvesting, the optimal reel index is strictly maintained between 1.10 and 1.25 (up to 1.35 in severely lodged crops).\n\n3. Defects of Misadjusted Reel Index:\n- Low Reel Index (K < 1.0):\nThe combine travels faster than the reel bats rotate. The reel bats lag behind and push the standing crop forward away from the cutter bar. Stems are severed at an oblique angle, stubble height becomes uneven, and severed stalks fall forward off the cutter bar onto the field, causing high header cutter bar losses.\n- High Reel Index (K > 1.4):\nThe reel rotates excessively fast, causing the bat bars to strike the delicate, ripe crop earheads with high kinetic impact. This causes severe impact shattering, knocking ripe grain out of heads onto the ground before stalks can be cut. Additionally, high speed tends to carry cut stalks over the top of the reel, wrapping straw around the central reel axle.",
      "outlinePoints": [
        "Mathematical definition of Reel Index (K = V_reel / V_forward)",
        "Optimal operating range (K = 1.10 to 1.25)",
        "Consequences of low reel index (K < 1.0): pushing stems forward and header drop-out",
        "Consequences of high reel index (K > 1.4): impact shattering and reel wrapping"
      ]
    },
    {
      "id": "SOL223-U4-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Groundnut decorticators and pod strippers",
      "questionText": "Describe the construction and working of a manually operated rocker-type groundnut decorticator.",
      "modelAnswer": "Manually Operated Rocker-Type Groundnut Decorticator:\n\n1. Purpose:\nA low-cost post-harvest implement developed for smallholder farmers to shell groundnut pods into whole kernels for marketing or seed use, replacing tedious manual hand-shelling.\n\n2. Construction:\n- Frame & Hopper: A sturdy angle-iron support stand carrying a feeding hopper at the top.\n- Semi-Cylindrical Concave Screen: A perforated sheet-metal or steel mesh grating forming the bottom of the shelling trough. The screen openings are sized to allow shelled kernels to fall through while retaining whole unshelled pods.\n- Rocker Arm & Shelling Shoes: An inverted pendulum rocker arm pivoted on a horizontal axle, operated by a long hand lever. The lower curved shoe carries corrugated rubber or wooden friction pads positioned just above the concave screen.\n\n3. Working Principle:\nGroundnut pods are fed into the hopper. The operator rocks the hand lever back and forth. The oscillating shoe exerts gentle compressive and shearing friction on the pods against the concave screen, cracking the brittle hulls. The shelled kernels and crushed hulls fall through the perforated bottom screen onto a collection tray. Hand winnowing separates the light hulls from the heavy kernels. The unit achieves a shelling capacity of 50 to 80 kg of pods per hour with kernel splitting below 3%.",
      "outlinePoints": [
        "Functional objective: labor-saving shelling for smallholders",
        "Anatomy: frame, semi-cylindrical concave screen, and rocker arm",
        "Corrugated rubber/wooden friction shoes preventing kernel crushing",
        "Operational mechanics of oscillating shearing and kernel collection",
        "Capacity (50-80 kg/h) and low kernel split percentage (<3%)"
      ]
    },
    {
      "id": "SOL223-U4-SUB12",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Combine harvester: components and working",
      "questionText": "Define Grain Loss Categories in a combine harvester: Header Loss, Threshing (Cylinder) Loss, Separation (Walker) Loss, and Cleaning (Shoe) Loss.",
      "modelAnswer": "Classification of Grain Losses in Combine Harvesters:\n\n1. Header Loss (Cutter Bar Loss):\nGrain lost on the ground at the front of the combine before entering the feeder housing. Caused by ripe grain shattered by violent reel impact, uncut earheads missed beneath a high cutter bar, or severed stalks falling forward off the header. Standard threshold: <1.0% of total yield.\n\n2. Threshing Loss (Cylinder Loss):\nGrain that remains firmly attached to unthreshed earheads, pods, or cobs after passing through the threshing drum. Caused by excessive concave clearance, inadequate cylinder peripheral speed, or damp crop conditions. Standard threshold: <0.5%.\n\n3. Separation Loss (Straw Walker Loss):\nLoose, detached grain kernels that fail to separate from the moving straw mat and are discharged out the rear with the straw. Caused by overloaded straw walkers, excessive forward combine speed, or damp, matted straw. Standard threshold: <0.8%.\n\n4. Cleaning Loss (Shoe Loss):\nLoose clean grain that is blown out the rear of the machine with chaff by excessive cleaning fan airflow, or carried out over blinded chaffer sieves. Standard threshold: <0.5%.\n\nTotal acceptable combine mechanical loss under optimal field calibration should not exceed 1.5% to 2.5% of total crop yield.",
      "outlinePoints": [
        "Definition, causes, and permissible limit (<1.0%) of Header Loss",
        "Definition, causes, and permissible limit (<0.5%) of Threshing Loss",
        "Definition, causes, and permissible limit (<0.8%) of Separation Loss",
        "Definition, causes, and permissible limit (<0.5%) of Cleaning Shoe Loss",
        "Total acceptable combine loss threshold (1.5% to 2.5%)"
      ]
    },
    {
      "id": "SOL223-U4-SUB13",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "questionText": "A tractor front-mounted reaper with an effective cutting width of 2.1 meters operates at a forward speed of 4.5 km/h in an irrigated wheat field. Field efficiency is measured at 80%. Calculate: (a) Theoretical field capacity in ha/h, (b) Effective field capacity in ha/h, and (c) Total operational time and diesel consumed to harvest a 12-hectare farm if the tractor consumes 3.2 liters of diesel per hour.",
      "modelAnswer": "Given Parameters:\n- Effective cutting width (W) = 2.1 m\n- Travel speed (V) = 4.5 km/h\n- Field efficiency (eta) = 80% = 0.80\n- Total area to harvest (A) = 12.0 hectares\n- Fuel consumption rate = 3.2 liters/hour\n\nStep 1: Calculate Theoretical Field Capacity (TFC):\nTFC (ha/h) = (Width in m * Speed in km/h) / 10\nTFC = (2.1 * 4.5) / 10 = 9.45 / 10 = 0.945 ha/h\n\nStep 2: Calculate Effective Field Capacity (EFC):\nEFC (ha/h) = TFC * Field Efficiency\nEFC = 0.945 ha/h * 0.80 = 0.756 ha/h\n\nStep 3: Calculate Total Harvesting Time:\nTotal Time (hours) = Total Area / Effective Field Capacity\nTotal Time = 12.0 ha / 0.756 ha/h = 15.873 hours\nConverting decimal hours: 0.873 hours * 60 min/h = 52.4 minutes\nTotal operational time = 15 hours and 52 minutes.\n\nStep 4: Calculate Total Diesel Consumption:\nTotal Diesel (liters) = Total Time * Hourly Consumption\nTotal Diesel = 15.873 hours * 3.2 L/h = 50.79 liters (approx. 50.8 liters)\nDiesel consumption per hectare = 50.79 L / 12 ha = 4.23 L/ha.\n\nSummary of Final Results:\n(a) Theoretical Field Capacity = 0.945 ha/h\n(b) Effective Field Capacity = 0.756 ha/h\n(c) Total Time = 15.87 hours (~15 h 52 min), Total Diesel = 50.8 liters",
      "outlinePoints": [
        "Listing reaper cutting width, forward speed, and field efficiency",
        "Computation of Theoretical Field Capacity (0.945 ha/h)",
        "Computation of Effective Field Capacity (0.756 ha/h)",
        "Determination of total operational hours for 12 ha (15.87 hours)",
        "Calculation of total fuel consumed (50.8 L) and fuel rate per hectare (4.23 L/ha)"
      ]
    },
    {
      "id": "SOL223-U4-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow",
      "questionText": "Explain the operational advantages of Axial-Flow threshing cylinders over conventional Cross-Flow (Tangential) cylinders in combine harvesters.",
      "modelAnswer": "Operational Superiority of Axial-Flow Threshing Systems:\n\n1. Longer Threshing Path and Residence Time:\nIn conventional cross-flow systems, crop passes tangentially between the drum and concave in under 0.1 seconds, requiring violent impact forces to complete threshing. In axial-flow combines, the crop spirals along the longitudinal axis of a multi-vane rotor, completing 3 to 4 complete revolutions over a 2 to 3-meter rotor length. This extended residence time allows gentle, progressive grain detachment.\n\n2. Substantial Reduction in Grain Damage:\nBecause grain detachment relies on continuous rubbing and centrifugal separation rather than high-velocity impact, grain crack damage is reduced by 60% to 75%. This is critical for damage-sensitive crops (seed grains, malting barley, edible beans, and hybrid corn).\n\n3. Simplified Mechanical Drive Architecture:\nAxial-flow combines eliminate separate straw walkers. The rear section of the longitudinal rotor acts as the separation unit, dramatically reducing the number of moving drive belts, chains, and reciprocating bearings, thereby lowering maintenance costs and machine vibration.\n\n4. Superior Performance in Damp, High-Yielding Crops:\nAxial rotors process uneven crop slugs and high-moisture green straw without the sudden choking that stalls tangential cylinders.",
      "outlinePoints": [
        "Extended residence time: multiple spiral revolutions vs brief tangential pass",
        "60-75% reduction in grain crack damage via gentle rubbing action",
        "Elimination of separate oscillating straw walkers, simplifying drivelines",
        "Superior processing of damp straw and slug feeding without cylinder plugging"
      ]
    },
    {
      "id": "SOL223-U4-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "questionText": "Compare Smooth Knife Sections with Under-Serrated Knife Sections in harvester cutter bars.",
      "modelAnswer": "Smooth vs Under-Serrated Knife Sections:\n\n1. Edge Geometry & Manufacturing:\n- Smooth Knife Sections: Feature a smooth, razor-sharp beveled edge without serrations on the cutting face.\n- Under-Serrated Knife Sections: Feature fine, sharp saw-tooth serrations machined on the underside of the beveled cutting edge.\n\n2. Shearing Mechanics & Crop Friction:\n- Smooth Sections: Slice smoothly through soft, leafy, succulent forage crops (alfalfa, berseem, green oats) without dragging. In dry, slippery, fibrous cereal straw, smooth knives allow stems to slide forward out of the shear zone before cutting is complete.\n- Under-Serrated Sections: The tiny saw teeth grip hard, fibrous, slippery cereal straw stems, holding them firmly against the ledger plate until severed. Unsuitable for moist succulent grasses where plant sap gums up the serrations.\n\n3. Sharpening and Field Maintenance:\n- Smooth Sections: Can be easily re-sharpened repeatedly in farm workshops using standard grinding wheels.\n- Under-Serrated Sections: Cannot be easily sharpened without specialized equipment; worn sections are simply discarded and replaced.",
      "outlinePoints": [
        "Edge geometry: smooth ground edge vs underside saw-tooth serrations",
        "Holding action on tough, slippery straw vs slicing succulent forages",
        "Susceptibility to sap gumming in moist green crops",
        "Field maintenance: easy re-grinding vs throwaway replacement"
      ]
    },
    {
      "id": "SOL223-U4-SUB16",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Combine harvester: components and working",
      "questionText": "Explain the aerodynamic and mechanical working principles of the Cleaning Shoe in a combine harvester. Discuss how chaffer opening, sieve mesh size, and fan blast volume are coordinated.",
      "modelAnswer": "Aerodynamic and Mechanical Mechanics of the Combine Cleaning Shoe:\n\n1. Functional Purpose of the Cleaning Shoe:\nThe cleaning shoe separates threshed grain from foreign materials (light chaff, broken straw, unthreshed heads, weed seeds, and dust), delivering clean grain (>99% purity) to the grain tank while minimizing grain loss out the rear of the machine.\n\n2. Key Functional Components:\n- The Grain Pan: An oscillating corrugated metal sheet that receives grain, chaff, and short straw falling through the concave and straw walkers. Reciprocating motion pre-stratifies the material: dense grain settles to the bottom, while light chaff floats to the top.\n- The Chaffer (Top Sieve): An adjustable louvred sieve consisting of overlapping sheet-metal teeth. The opening between louvres can be expanded or contracted via a manual gang lever.\n- The Cleaning Sieve (Shoe Sieve): A lower adjustable louvred sieve or fixed round-hole screen that performs final finishing, allowing only clean grain to fall into the clean grain auger.\n- The Centrifugal Cleaning Fan: A multi-blade transverse blower that delivers a high-volume, uniform upward air stream directed through the chaffer and shoe sieve.\n\n3. Aerodynamic Principles of Air Separation:\nThe cleaning process relies on differences in aerodynamic terminal velocities between crop fractions:\n- Heavy clean wheat kernels have terminal velocities between 8.0 and 11.5 m/s.\n- Light chaff, husks, and straw pieces have terminal velocities between 2.0 and 4.0 m/s.\nThe fan blast is adjusted so that air velocity flowing upward through the chaffer louvres is maintained between 4.5 and 6.5 m/s. This air velocity exceeds the terminal velocity of the chaff, lifting it into aerodynamic suspension (fluidization) and blowing it out the rear of the combine. Heavy grain kernels, having terminal velocities greater than the air stream, overcome the upward drag and fall through the louvres.\n\n4. Tripartite Coordination of Shoe Settings:\n- Coordinated Tuning 1: Chaffer Louvre Opening: Must be opened sufficiently to let all grain drop through within the first two-thirds of its length, but narrow enough to prevent large straw fragments from falling onto the lower sieve.\n- Coordinated Tuning 2: Sieve Opening: Set slightly smaller than chaffer openings to let clean grain pass while directing unthreshed heads over the rear into the tailings auger.\n- Coordinated Tuning 3: Fan Blast Volume: Balanced carefully against crop seed weight. For light crops (canola, grass seed), fan air volume is throttled down; for heavy dense grains (maize, wheat), fan speed is maximized to prevent sieve blinding.",
      "outlinePoints": [
        "Purpose of cleaning shoe: delivering >99% pure grain with minimal loss",
        "Description of grain pan stratification, chaffer sieve, and shoe sieve",
        "Centrifugal cleaning fan mechanics and upward airflow distribution",
        "Aerodynamic physics: terminal velocity contrast (chaff 3 m/s vs grain 10 m/s)",
        "Fluidization principle: blowing chaff rearward while heavy grain drops through",
        "Coordination of chaffer openings, shoe sieve mesh, and fan airflow volume"
      ]
    },
    {
      "id": "SOL223-U4-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Groundnut decorticators and pod strippers",
      "questionText": "A power-operated groundnut decorticator processes 450 kg of dry groundnut pods per hour. Decortication yields 315 kg of whole kernels, 18 kg of broken/split kernels, and 117 kg of shells. Calculate: (a) Shelling percentage, (b) Whole kernel recovery percentage, and (c) Kernel breakage percentage.",
      "modelAnswer": "Given Parameters:\n- Total pod intake = 450 kg/h\n- Whole kernels recovered = 315 kg/h\n- Broken/split kernels = 18 kg/h\n- Shells (husks) collected = 117 kg/h\n\nStep 1: Calculate Total Kernel Output:\nTotal Kernels = Whole Kernels + Broken Kernels\nTotal Kernels = 315 kg + 18 kg = 333 kg/h\n\nStep 2: Calculate Shelling Percentage:\nShelling Percentage is the total mass of kernels recovered relative to total pod mass:\nShelling (%) = (Total Kernels / Total Pod Mass) * 100\nShelling (%) = (333 kg / 450 kg) * 100 = 74.0%\n\nStep 3: Calculate Whole Kernel Recovery Percentage:\nWhole Kernel Recovery (%) = (Whole Kernels / Total Pod Mass) * 100\nWhole Kernel Recovery (%) = (315 kg / 450 kg) * 100 = 70.0%\n\nStep 4: Calculate Kernel Breakage Percentage:\nKernel Breakage (%) is the mass of broken kernels expressed as a percentage of total kernel yield:\nKernel Breakage (%) = (Broken Kernels / Total Kernels) * 100\nKernel Breakage (%) = (18 kg / 333 kg) * 100 = 5.405% (approx. 5.41%)\nAlternatively, expressed relative to gross pod intake: (18 / 450) * 100 = 4.0%.\n\nFinal Answers:\n(a) Shelling Percentage = 74.0%\n(b) Whole Kernel Recovery Percentage = 70.0%\n(c) Kernel Breakage Percentage (of total kernels) = 5.41%",
      "outlinePoints": [
        "Listing given input and output mass fractions",
        "Calculation of total kernel recovery (333 kg)",
        "Computation of overall shelling percentage (74.0%)",
        "Determination of whole kernel recovery percentage (70.0%)",
        "Computation of kernel breakage percentage relative to kernel yield (5.41%)"
      ]
    },
    {
      "id": "SOL223-U4-SUB18",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Paddy thresher and winnowing machines",
      "questionText": "Define Terminal Velocity in post-harvest pneumatic grain cleaning. How is it exploited in winnowing machines?",
      "modelAnswer": "Terminal Velocity in Pneumatic Grain Cleaning:\n\n1. Definition:\nTerminal velocity is the constant downward vertical velocity attained by a falling particle in a fluid (such as air) when the upward aerodynamic drag force and buoyancy force exactly balance the downward gravitational force acting on the particle.\n\n2. Mathematical Equilibrium:\nAt terminal velocity (V_t):\nDrag Force (F_d) = Gravitational Weight (W)\n0.5 * C_d * rho_air * A * V_t\u00b2 = m * g\nwhere C_d is drag coefficient, rho_air is air density, A is projected frontal area, and m is particle mass.\n\n3. Application in Agricultural Winnowing Machines:\nWinnowers exploit the large divergence in terminal velocities between grain kernels and unwanted foreign material:\n- Cereal grains (wheat, paddy, barley) have high mass-to-surface-area ratios and smooth shapes, yielding high terminal velocities (8.0 to 12.0 m/s for wheat; 6.5 to 8.5 m/s for paddy).\n- Chaff, dried husks, empty glumes, and dust have large surface areas and low mass, resulting in low terminal velocities (1.5 to 3.5 m/s).\nBy blowing a horizontal or upward air stream with a velocity calibrated between 4.0 and 5.5 m/s (above chaff V_t but below grain V_t), the air stream carries the light chaff out of the machine while the dense grain falls cleanly into the discharge chute.",
      "outlinePoints": [
        "Physical definition of terminal velocity based on drag-gravity equilibrium",
        "Mathematical equation of aerodynamic terminal velocity",
        "Terminal velocity of agricultural grains (wheat: 8-12 m/s, paddy: 6.5-8.5 m/s)",
        "Terminal velocity of chaff and husks (1.5-3.5 m/s)",
        "Operational tuning of winnowing air streams for separation"
      ]
    },
    {
      "id": "SOL223-U4-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Combine harvester: components and working",
      "questionText": "A combine harvester grain tank has an internal volume of 4.5 cubic meters. When harvesting wheat with a bulk density of 780 kg/m\u00b3, calculate: (a) Maximum mass of wheat held in the tank, (b) If grain yield is 4.0 tonnes/ha and cutter bar width is 4.0 m at 4.5 km/h, how many minutes does it take to fill the tank, and (c) What area is harvested per full tank?",
      "modelAnswer": "Given Parameters:\n- Grain tank volume (V_tank) = 4.5 m\u00b3\n- Wheat grain bulk density (rho) = 780 kg/m\u00b3\n- Crop grain yield (Y) = 4.0 tonnes/ha = 4000 kg/ha = 0.40 kg/m\u00b2\n- Cutter bar width (W) = 4.0 m\n- Travel speed (V) = 4.5 km/h = 4500 m / 60 min = 75 m/min\n\nStep 1: Calculate Maximum Mass of Wheat in Tank (M_tank):\nM_tank = Volume * Bulk Density\nM_tank = 4.5 m\u00b3 * 780 kg/m\u00b3 = 3510 kg (3.51 metric tonnes)\n\nStep 2: Calculate Area Harvested per Full Tank (A_tank):\nArea (ha) = Total Tank Mass / Yield per Hectare\nArea = 3510 kg / 4000 kg/ha = 0.8775 hectares (8775 m\u00b2)\n\nStep 3: Calculate Harvesting Rate in Area per Minute:\nArea harvested per minute = Width * Forward speed\nArea rate = 4.0 m * 75 m/min = 300 m\u00b2/min = 0.030 ha/min\n\nStep 4: Calculate Time Required to Fill Grain Tank:\nTime (minutes) = Area Harvested per Tank / Area Rate per Minute\nTime = 8775 m\u00b2 / 300 m\u00b2/min = 29.25 minutes\nConverting decimal minutes: 0.25 min * 60 s = 15 seconds\nTotal filling time = 29 minutes and 15 seconds.\n\nFinal Answers:\n(a) Maximum Mass of Grain in Tank = 3510 kg (3.51 tonnes)\n(b) Time to Fill Tank = 29.25 minutes (~29 min 15 sec)\n(c) Area Harvested per Tank = 0.8775 hectares (8775 m\u00b2)",
      "outlinePoints": [
        "Listing grain tank volume, bulk density, crop yield, and machine speed",
        "Computation of maximum grain tank holding capacity (3510 kg)",
        "Determination of field area required to fill tank (0.8775 ha / 8775 m\u00b2)",
        "Calculation of field area coverage rate per minute (300 m\u00b2/min)",
        "Computation of time required to fill tank under continuous harvest (29.25 min)"
      ]
    },
    {
      "id": "SOL223-U4-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)",
      "questionText": "Explain the role and maintenance adjustments of knife clips (hold-down clips) and wearing plates in a mower or combine cutter bar.",
      "modelAnswer": "Role and Adjustment of Knife Clips and Wearing Plates:\n\n1. Knife Clips (Hold-Down Clips):\n- Functional Role: Forged or stamped spring-steel clips bolted at intervals along the cutter bar over the knife bar. Their role is to hold the moving knife sections firmly down against the stationary ledger plates, preventing knives from lifting when encountering tough, fibrous stems.\n- Maintenance Adjustment: The clearance between the knife clip and the top of the knife section should be set to 0.5 to 1.0 mm. If clearance is too tight (<0.5 mm), friction binds the knife bar, causing excessive heating and high tractor draft. If clearance is too loose (>1.5 mm), the knife lifts, chewing and jamming stalks. Adjustment is made by tapping the clip down with a hammer or adding shims.\n\n2. Wearing Plates:\n- Functional Role: Steel wear strips mounted underneath the knife clips that support the rear edge of the moving knife bar. As the cutter bar advances, crop resistance pushes the knife bar backward; wearing plates absorb this horizontal rearward thrust, preventing the knife sections from tilting.\n- Maintenance Adjustment: Wearing plates feature slotted mounting holes. As the rear edge of the knife bar wears down, wearing plates are loosened and tapped forward to eliminate rearward play, maintaining knife tips in proper alignment with ledger plates.",
      "outlinePoints": [
        "Role of knife clips: holding knife sections flat against ledger plates",
        "Clearance tolerance for knife clips (0.5 to 1.0 mm) and binding risks",
        "Role of wearing plates: absorbing rearward horizontal cutting thrust",
        "Adjustment of slotted wearing plates to take up longitudinal play"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL223-U4-FC01",
      "front": "What defines a cutter bar in 'perfect register'?",
      "back": "The centerline of each moving knife section aligns exactly with the centerline of a guard finger at both stroke dead centers.",
      "hint": "Knife center aligns with guard center",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)"
    },
    {
      "id": "SOL223-U4-FC02",
      "front": "Why is stationary forward 'lead' given to a harvester cutter bar?",
      "back": "To compensate for rearward deflection caused by cutting resistance during operation, keeping the bar straight (1.5-2 cm/m).",
      "hint": "Compensates for backward cutting forces",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)"
    },
    {
      "id": "SOL223-U4-FC03",
      "front": "What is the standard stroke length of an agricultural cutter bar?",
      "back": "76.2 mm (3 inches), which is exactly equal to the spacing between guard fingers.",
      "hint": "76.2 mm (3 inches)",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)"
    },
    {
      "id": "SOL223-U4-FC04",
      "front": "What is the primary function of a Vertical Conveyor Reaper (VCR)?",
      "back": "Cuts cereal crops and uses lugged belts to convey stalks laterally, laying an orderly continuous windrow on the field.",
      "hint": "Cuts and lays continuous windrows",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders"
    },
    {
      "id": "SOL223-U4-FC05",
      "front": "Approximately what percentage of grain is separated by the concave in a combine?",
      "back": "75% to 85% of total grain is threshed and separated directly through the concave grate.",
      "hint": "75% to 85%",
      "syllabusTopic": "Combine harvester: components and working"
    },
    {
      "id": "SOL223-U4-FC06",
      "front": "What is the function of straw walkers in a combine harvester?",
      "back": "Oscillating racks with fishbacks toss the straw mat rearward, allowing the remaining 15-25% of trapped loose grain to shake out.",
      "hint": "Separates loose grain trapped in straw",
      "syllabusTopic": "Combine harvester: components and working"
    },
    {
      "id": "SOL223-U4-FC07",
      "front": "Why are rasp bar cylinders preferred for cereal crops over spike tooth drums?",
      "back": "They thresh by gentle rubbing and impact, keeping straw intact with minimal grain crack damage (<1%).",
      "hint": "Gentle rubbing with low grain damage",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow"
    },
    {
      "id": "SOL223-U4-FC08",
      "front": "What is the main advantage of a spike tooth (peg tooth) threshing cylinder?",
      "back": "Aggressively shreds tough crop straw into fine cattle fodder (bhusa).",
      "hint": "Shreds straw into fine bhusa",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow"
    },
    {
      "id": "SOL223-U4-FC09",
      "front": "What is the recommended peripheral cylinder speed for threshing wheat?",
      "back": "28 to 32 m/s (approx. 900 to 1050 rpm depending on drum diameter).",
      "hint": "28 to 32 m/s",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms"
    },
    {
      "id": "SOL223-U4-FC10",
      "front": "What is the recommended peripheral cylinder speed for threshing soybean and pulses?",
      "back": "12 to 16 m/s, to prevent cotyledon splitting and embryo damage.",
      "hint": "12 to 16 m/s",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms"
    },
    {
      "id": "SOL223-U4-FC11",
      "front": "What is the function of the cleaning fan in a combine harvester?",
      "back": "Blows an upward air stream through sieves to aerodynamically suspend and blow away light chaff while heavy grain drops.",
      "hint": "Blows light chaff away from grain",
      "syllabusTopic": "Combine harvester: components and working"
    },
    {
      "id": "SOL223-U4-FC12",
      "front": "What are 'tailings' in a combine harvester?",
      "back": "Unthreshed earheads and pods reaching the rear of the chaffer, returned by auger to the cylinder for re-threshing.",
      "hint": "Unthreshed heads returned to cylinder",
      "syllabusTopic": "Combine harvester: components and working"
    },
    {
      "id": "SOL223-U4-FC13",
      "front": "What is the optimal range for the Reel Index (K = V_reel / V_forward)?",
      "back": "1.10 to 1.25, ensuring crop stalks are gathered securely without impact grain shattering.",
      "hint": "1.10 to 1.25",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)"
    },
    {
      "id": "SOL223-U4-FC14",
      "front": "What happens if concave clearance in a combine is set too narrow?",
      "back": "Severe grain cracking, broken kernel damage, and over-pulverized straw that blinds the cleaning sieves.",
      "hint": "Crushed grain and sieve blinding",
      "syllabusTopic": "Threshing principles, grain damage, cylinder speed, concave clearance, and winnowing mechanisms"
    },
    {
      "id": "SOL223-U4-FC15",
      "front": "What is the function of the Appleby knotter mechanism in a reaper-binder?",
      "back": "Loops twine around gathered sheaves, ties a secure knot via rotating billhook, and cuts the twine.",
      "hint": "Ties sheaf bundles with twine",
      "syllabusTopic": "Vertical conveyor reapers and reaper-binders"
    },
    {
      "id": "SOL223-U4-FC16",
      "front": "Why is an axial-flow combine gentler on fragile grain seeds than cross-flow drums?",
      "back": "Crop spirals along the longitudinal rotor for 3-4 revolutions, providing gentle progressive threshing over several seconds.",
      "hint": "Multiple spiral revolutions along rotor",
      "syllabusTopic": "Types of threshing cylinders: rasp bar, spike tooth, wire loop, axial flow vs tangential flow"
    },
    {
      "id": "SOL223-U4-FC17",
      "front": "What is the primary function of a groundnut digger-shaker-inverter?",
      "back": "Cuts taproots, shakes loose soil off pods, and inverts vines 180\u00b0 with pods facing upward for rapid solar drying.",
      "hint": "Inverts vines with pods facing the sun",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)"
    },
    {
      "id": "SOL223-U4-FC18",
      "front": "How does an elevator digger separate soil from potato tubers?",
      "back": "Lifts the soil ridge onto an inclined oscillating rod-chain web that shakes loose soil through gaps while elevating tubers.",
      "hint": "Agitated rod-chain web sifts loose soil",
      "syllabusTopic": "Root and tuber harvesters (potato digger, groundnut digger shaker)"
    },
    {
      "id": "SOL223-U4-FC19",
      "front": "What physical property governs aerodynamic winnowing of grain from chaff?",
      "back": "Difference in terminal velocity in a moving air stream (grain: 8-12 m/s vs chaff: 2-4 m/s).",
      "hint": "Terminal velocity contrast",
      "syllabusTopic": "Paddy thresher and winnowing machines"
    },
    {
      "id": "SOL223-U4-FC20",
      "front": "What is the clearance setting between knife clips and knife sections on a cutter bar?",
      "back": "0.5 to 1.0 mm, preventing knife lifting without causing binding friction.",
      "hint": "0.5 to 1.0 mm",
      "syllabusTopic": "Principles of crop harvesting and cutting mechanisms (reciprocating cutter bar, reel, conveyer)"
    }
  ]
};
