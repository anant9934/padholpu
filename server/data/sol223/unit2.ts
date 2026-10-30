import { UnitContent } from "./types";

export const unit2Content: UnitContent = {
  "unitNumber": 2,
  "title": "Soil Tillage and Tillage Equipment",
  "shortDescription": "Engineering dynamics of primary, secondary, and conservation tillage systems, including mouldboard ploughs, disc ploughs, subsoilers, harrows, cultivators, rotavators, and zero-till machinery.",
  "estimatedReadTimeMinutes": 24,
  "syllabusTopics": [
    "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
    "Indigenous ploughs (Desi plough) vs improved ploughs",
    "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
    "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
    "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
    "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
    "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
    "Conservation tillage equipment: zero-till seed drill and strip-till implements"
  ],
  "notes": {
    "learningObjectives": [
      "Classify primary, secondary, conservation, minimum, and zero tillage systems based on soil manipulation and surface residue cover thresholds (>30%).",
      "Dissect the functional components of the Mouldboard (MB) plough (share, mouldboard, landside, frog) and evaluate vertical and horizontal suction mechanics.",
      "Analyze disc plough geometry including disc angle (40\u00b0-45\u00b0) and tilt angle (15\u00b0-25\u00b0), and compare operational dynamics with standard MB ploughs.",
      "Formulate mathematical draft equations, soil specific resistance, and field capacity of secondary tillage implements, cultivators, and rotavators."
    ],
    "sections": [
      {
        "id": "sec-2-1",
        "heading": "1. Fundamentals and Classification of Tillage",
        "content": "Tillage is the mechanical manipulation of soil with tools and implements to create favorable soil physical conditions for seed germination, seedling emergence, and optimal root proliferation.\n\n**Classification of Tillage Systems:**\n1. **Primary Tillage:** The initial major soil manipulation performed after harvest to break, invert, and shatter compacted soil to depths ranging from 15 to 35 cm. Implements include mouldboard ploughs, disc ploughs, subsoilers, and chisel ploughs.\n2. **Secondary Tillage:** Subsequent shallow cultivation (5 to 15 cm depth) designed to pulverize clods, destroy weed seedlings, incorporate fertilizers, and firm the seedbed. Implements include disc harrows, spike tooth harrows, spring tyre cultivators, and rollers.\n3. **Conservation Tillage:** Any tillage and planting system that leaves at least 30% of the soil surface covered with crop residue after planting, significantly mitigating water and wind erosion. Variants include:\n   - *Minimum Tillage:* Minimizing soil disturbance to the absolute essential operations required for seed placement.\n   - *Zero Tillage (No-Till):* Seed is placed directly into untilled soil where the only soil manipulation is a narrow slot or band (5-8 cm wide) cut by specialized inverted-T or double-disc furrow openers.\n   - *Strip Tillage:* Narrow bands (15-20 cm) are mechanically tilled for crop rows while leaving inter-row zones undisturbed under residue.",
        "subsections": [
          {
            "subheading": "Comparison of Tillage Regimes",
            "content": "Core differences across traditional and modern conservation tillage practices:",
            "table": {
              "headers": [
                "Parameter",
                "Conventional Tillage",
                "Conservation Tillage",
                "Zero Tillage (No-Till)"
              ],
              "rows": [
                [
                  "Surface Residue Cover",
                  "< 15% remaining",
                  "> 30% residue retained",
                  "60% to 100% standing stubble retained"
                ],
                [
                  "Tillage Passes Required",
                  "4 to 7 passes (plow + harrow + level)",
                  "1 to 2 passes",
                  "Single pass direct drilling"
                ],
                [
                  "Soil Fuel Consumption",
                  "25 - 40 L diesel/ha",
                  "12 - 18 L diesel/ha",
                  "5 - 8 L diesel/ha"
                ],
                [
                  "Soil Organic Carbon Loss",
                  "High (accelerated oxidation)",
                  "Low to moderate",
                  "Minimized / Carbon sequestration"
                ],
                [
                  "Soil Moisture Retention",
                  "Low (rapid evaporative loss)",
                  "High (mulch barrier)",
                  "Very high (prevents crusting)"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-2-2",
        "heading": "2. Mouldboard (MB) Plough Engineering and Adjustments",
        "content": "The Mouldboard (MB) plough is the classical primary tillage implement designed to completely invert the topsoil slice, bury crop residues and weed seeds, and aerate the root zone.\n\n**Anatomy of the Plough Bottom:**\n1. **Share:** The penetrating and cutting edge that makes the horizontal cut separating the furrow slice from the unploughed land beneath. Fabricated from chilled cast iron or high-carbon steel. Types include regular slip share, shin share, bar point share (adjustable steel bar extended forward as it wears), and slip nose share.\n2. **Mouldboard:** The curved steel sheet that lifts, twists, pulverizes, and inverts the furrow slice cut by the share. Types include:\n   - *Stubble Mouldboard:* Short, broad with abrupt curvature; produces maximum pulverization in clean stubble fields.\n   - *General Purpose Mouldboard:* Moderate length and curvature; provides balanced inversion and pulverization.\n   - *Sod or Breaker Mouldboard:* Long with gentle gradual twist; turns an intact continuous furrow slice without breaking it, ideal for pasture sod.\n   - *Slat Mouldboard:* Features spaced parallel steel slats that reduce soil-metal friction by 20-30% in sticky, heavy clay soils.\n3. **Landside:** The flat longitudinal metal plate that presses against the vertical unploughed furrow wall, absorbing side thrust and stabilizing the plough.\n4. **Frog:** The central irregular cast iron or forged steel block to which the share, mouldboard, and landside are rigidly bolted.\n\n**Suction Mechanics:**\n- *Vertical Suction (Clearance):* The downward tilt of the share point relative to the bottom plane of the landside heal (typically 3 to 5 mm). Vertical suction ensures that the plough penetrates to and maintains its set working depth.\n- *Horizontal Suction (Side Clearance):* The lateral tilt of the share point toward the unploughed land relative to the furrow-side face of the landside (typically 3 to 5 mm). It ensures that the plough cuts its full designated furrow width.",
        "subsections": [
          {
            "subheading": "Center of Resistance and Line of Draft",
            "content": "The center of resistance of an MB plough bottom is the dynamic resultant point where all soil resistance forces (cutting, lifting, turning, sliding) converge. For a single bottom, it lies roughly 3/4 the furrow depth up from the share sole and 1/4 the furrow width inward from the landside. For stable operation without side draft, the true line of draft must pass directly through the tractor hitch center, the implement hitch point, and the center of resistance."
          }
        ]
      },
      {
        "id": "sec-2-3",
        "heading": "3. Disc Ploughs and Deep Tillage Equipment (Subsoilers)",
        "content": "The disc plough replaces the share and mouldboard with a large, rotating concave high-carbon steel disc (50 to 90 cm diameter), designed to roll through soil rather than slide.\n\n**Operational Superiority of Disc Ploughs:**\nDisc ploughs are chosen over MB ploughs under challenging soil conditions:\n- Abrasive, root-infested, stony, or stumpy virgin land where MB shares would shear.\n- Hard, dry, sun-baked clay soils where MB ploughs fail to penetrate.\n- Sticky, waxy clay soils where soil adheres to mouldboards and prevents scouring.\n\n**Geometric Alignment Angles:**\n1. *Disc Angle:* The horizontal angle formed between the plane of the cutting disc edge and the direction of forward travel. Typically set between 40\u00b0 and 45\u00b0. Increasing the disc angle increases the furrow width cut and enhances penetration.\n2. *Tilt Angle:* The vertical angle formed between the plane of the cutting disc and the vertical plane. Typically set between 15\u00b0 and 25\u00b0. Tilt angle enables the disc to penetrate downward and scoop soil upward. Standard disc ploughs feature both disc and tilt angles, whereas vertical disc ploughs (one-way disc harrows) have a tilt angle of 0\u00b0.\n\n**Subsoilers and Chisel Ploughs:**\nSubsoilers are heavy-duty single or twin-tine implements designed to shatter dense, impermeable plow soles (hardpans) created by repeated shallow cultivation and heavy tractor traffic. They operate at depths between 45 and 75 cm without turning the soil or bringing nutrient-deficient subsoil to the surface. Operating a subsoiler requires massive tractor power (60 to 90 hp) and lowers soil bulk density from 1.6-1.7 g/cm\u00b3 down to 1.25-1.35 g/cm\u00b3, restoring deep root penetration and water infiltration.",
        "subsections": [
          {
            "subheading": "Mouldboard vs Disc Plough Comparison",
            "content": "Engineering differences governing selection:",
            "table": {
              "headers": [
                "Feature",
                "Mouldboard (MB) Plough",
                "Standard Disc Plough"
              ],
              "rows": [
                [
                  "Soil Inversion Action",
                  "Near 100% complete inversion and burial",
                  "Partial inversion and mixed soil-residue profile"
                ],
                [
                  "Stony & Root-Infested Soils",
                  "Unsuitable (shear bolt failure or frog fracture)",
                  "Highly suitable (discs roll over obstructions)"
                ],
                [
                  "Scouring in Sticky Clay",
                  "Requires polished surfaces; fails in sticky soils",
                  "Scrapers continuously clean rotating disc faces"
                ],
                [
                  "Draft Requirement",
                  "Lower draft per unit soil volume tilled",
                  "10% to 15% higher draft due to rolling soil wedging"
                ],
                [
                  "Penetration Mechanism",
                  "Vertical suction of share point",
                  "Massive deadweight and tilt angle geometry"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-2-4",
        "heading": "4. Secondary Tillage Implements: Harrows and Cultivators",
        "content": "Secondary tillage implements refine the rough cloddy surface left by primary tillage into a friable seedbed.\n\n**Disc Harrows:**\nComposed of gangs of rotating concave steel discs mounted on a common arbor bolt (gang shaft), separated by cast iron spool spacers. Classified by gang orientation:\n1. *Single Action Disc Harrow:* Two gangs arranged end-to-end throwing soil in opposite lateral directions.\n2. *Tandem Disc Harrow (Double Action):* Four gangs arranged in two opposing pairs; front gangs throw soil outward, rear gangs throw soil inward, leaving a level field.\n3. *Offset Disc Harrow:* Two gangs positioned one behind the other at an angle to the tractor centerline. Can be set to operate offset to the tractor path, ideal for working close to orchard tree rows without tractor interference.\n\n**Disc Gang Angle:** The angle between the gang axis and the direction perpendicular to travel. Adjustable between 0\u00b0 and 25\u00b0; increasing gang angle increases cutting depth, clod crushing, and draft.\n\n**Cultivators:**\nSecondary tillage tools equipped with tines (rigid or spring-loaded) fitted with reversible shovels or sweeps. Spring-loaded tines oscillate when striking underground stones, preventing tine distortion and creating a micro-vibratory pulverization effect in crusted soil.\n\n**Specific Draft Formulation:**\nSpecific Draft (kgf/cm\u00b2) = Total Draft (kgf) / (Cross-sectional area of furrow cut in cm\u00b2).\nSpecific draft varies widely: 0.20-0.35 kgf/cm\u00b2 in light sandy soils, 0.40-0.60 kgf/cm\u00b2 in loams, and 0.70-1.20 kgf/cm\u00b2 in heavy black cotton clay soils.",
        "subsections": [
          {
            "subheading": "Disc Harrow Discs: Plain vs Notched",
            "content": "Plain circular discs provide smooth, uniform cutting in cultivated soil. Notched (cutaway) discs feature scalloped perimeters that concentrate downward force on the points of the scallops, slicing aggressively through tough crop residue (maize and cotton stalks) and penetrating unploughed hard surfaces."
          }
        ]
      },
      {
        "id": "sec-2-5",
        "heading": "5. Powered Tillage Machinery: The Rotary Tiller (Rotavator)",
        "content": "The rotavator is a tractor-PTO-powered secondary tillage implement that achieves complete soil pulverization and seedbed preparation in a single pass.\n\n**Functional Architecture:**\nRotavator consists of a horizontal rotor shaft driven by the tractor PTO through a slip clutch, bevel gearbox, and side-gear/chain drive train. Curved steel blades are bolted to flanges welded onto the rotor shaft. The rotor rotates in the direction of forward tractor travel at 200 to 250 rpm.\n\n**Blade Configurations:**\n1. *L-Shaped Blades:* The standard universal design. Highly effective in cutting heavy weed trash and crop stubble without wrapping around the rotor. Best for dry soil seedbed preparation.\n2. *C-Shaped Blades:* Curved profile that penetrates hard packed soils with lower power consumption than L-blades, though more susceptible to weed wrapping.\n\n**Kinematics of Rotary Tillage:**\nThe blade path through the soil traces a trochoidal curve. The kinematic index (lambda) governs soil pulverization:\nlambda = (omega * R) / V_f\nwhere omega is rotor angular velocity (rad/s), R is rotor radius (m), and V_f is tractor forward travel speed (m/s). For cutting to occur, lambda must be significantly greater than 1.0 (typically 2.5 to 5.0). Lower forward speed or higher rotor RPM increases lambda, producing finer soil tilth.\n\n**Rotavator in Wetland Puddling:**\nFitted with puddling plates, the rotavator churns flooded rice soils, breaking soil aggregates into a colloidal slurry and destroying macropores to create an impervious puddled plow sole that reduces percolation water loss by 60% to 80% in paddy cultivation.",
        "subsections": [
          {
            "subheading": "Operational Trade-Offs of Rotary Tillage",
            "content": "Key benefits and operational drawbacks:",
            "keyPoints": [
              "Produces an exceptional, friable seedbed in a single field pass, saving 60% tractor run time.",
              "High specific energy requirement: absorbs up to 25-35 hp at the PTO shaft.",
              "Excessive rotor speed can over-pulverize soil, destroying natural soil structure and promoting surface crusting after heavy rains.",
              "Safety slip clutch must be adjusted to prevent shock overload damage to the tractor PTO driveline."
            ]
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Conservation tillage retains >30% crop residue, while zero tillage places seed directly into untilled soil via narrow slots.",
      "Vertical suction (3-5 mm) ensures MB plough penetration depth; horizontal suction (3-5 mm) maintains cutting width.",
      "Standard disc ploughs operate with a 40\u00b0-45\u00b0 disc angle and 15\u00b0-25\u00b0 tilt angle, rolling over roots and stones without breakage.",
      "Subsoilers operate at 45-75 cm depth without inverting soil, shattering traffic-induced hardpans to restore percolation.",
      "Rotavator kinematic index (lambda = omega*R / V_f) must exceed 1.0; L-blades excel at cutting residue without wrapping."
    ],
    "commonMisunderstandings": [
      {
        "myth": "A mouldboard plough is superior to a disc plough under all agricultural conditions.",
        "reality": "Mouldboard ploughs fail to penetrate hard, dry clays and break frequently in stony, root-infested soils where disc ploughs roll over obstructions effortlessly."
      },
      {
        "myth": "Zero tillage causes crop yields to plummet due to a lack of soil aeration.",
        "reality": "Zero tillage preserves soil moisture, builds organic matter, stabilizes earthworm biopores for natural aeration, and often matches or exceeds conventional yields while slashing fuel costs by 70%."
      },
      {
        "myth": "The rotavator can be operated at maximum forward tractor speed without affecting seedbed quality.",
        "reality": "Excessive forward speed lowers the kinematic index (lambda), resulting in large unbroken soil slabs and shallow, uneven working depths."
      }
    ],
    "summary": "Unit 2 examines the mechanics, design, and field operation of tillage implements. It covers the classification from primary deep plowing to conservation and zero tillage, the engineering geometry of MB ploughs (shares, mouldboards, suctions), disc plough kinematics, subsoiling hardpan destruction, secondary disc harrows and cultivators, and PTO-driven rotavator pulverization dynamics."
  },
  "mcqs": [
    {
      "id": "SOL223-U2-MCQ01",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "difficulty": "Easy",
      "questionText": "The initial major mechanical soil-working operation performed to break, invert, and aerate soil is termed:",
      "options": {
        "A": "Secondary tillage",
        "B": "Primary tillage",
        "C": "Inter-cultivation",
        "D": "Puddling"
      },
      "correctOption": "B",
      "explanation": "Primary tillage is the initial cutting, lifting, and inverting of compacted soil after harvest."
    },
    {
      "id": "SOL223-U2-MCQ02",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "difficulty": "Easy",
      "questionText": "According to standard conservation definitions, conservation tillage must leave what minimum percentage of the soil surface covered with crop residue?",
      "options": {
        "A": "10%",
        "B": "20%",
        "C": "30%",
        "D": "50%"
      },
      "correctOption": "C",
      "explanation": "Conservation tillage is defined as any tillage system that leaves at least 30% crop residue cover on the soil surface."
    },
    {
      "id": "SOL223-U2-MCQ03",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "Which component of a Mouldboard plough bottom makes the horizontal cut separating the furrow slice from the subsoil?",
      "options": {
        "A": "Mouldboard",
        "B": "Share",
        "C": "Landside",
        "D": "Frog"
      },
      "correctOption": "B",
      "explanation": "The share is the forward penetrating edge that makes the horizontal cutting pass through the soil."
    },
    {
      "id": "SOL223-U2-MCQ04",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "The central irregular metal block to which the share, mouldboard, and landside are rigidly fastened is called the:",
      "options": {
        "A": "Beam",
        "B": "Frog",
        "C": "Colter",
        "D": "Clevis"
      },
      "correctOption": "B",
      "explanation": "The frog is the structural casting or forging that provides the mounting foundation for all soil-engaging bottom components."
    },
    {
      "id": "SOL223-U2-MCQ05",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "What is the primary function of the landside on a Mouldboard plough bottom?",
      "options": {
        "A": "Turn the furrow slice upside down",
        "B": "Counteract the lateral side thrust exerted on the mouldboard by the soil",
        "C": "Cut vertical roots ahead of the share",
        "D": "Support the tractor hitch link"
      },
      "correctOption": "B",
      "explanation": "The landside slides against the unploughed furrow wall to counteract lateral thrust, maintaining plough stability."
    },
    {
      "id": "SOL223-U2-MCQ06",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "Vertical suction (vertical clearance) in an MB plough share ensures that the plough:",
      "options": {
        "A": "Maintains designated furrow width",
        "B": "Penetrates to and maintains its set working depth",
        "C": "Scours cleanly in sticky soils",
        "D": "Rolls smoothly over rocks"
      },
      "correctOption": "B",
      "explanation": "Vertical suction tilts the share point downward (3-5 mm gap), enabling the plough to penetrate and hold set depth."
    },
    {
      "id": "SOL223-U2-MCQ07",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Easy",
      "questionText": "What is the standard disc angle range in a standard tractor-drawn disc plough?",
      "options": {
        "A": "15\u00b0 to 25\u00b0",
        "B": "40\u00b0 to 45\u00b0",
        "C": "60\u00b0 to 75\u00b0",
        "D": "80\u00b0 to 90\u00b0"
      },
      "correctOption": "B",
      "explanation": "The disc angle (between disc cutting edge and travel direction) standardly ranges between 40\u00b0 and 45\u00b0."
    },
    {
      "id": "SOL223-U2-MCQ08",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Easy",
      "questionText": "What is the typical tilt angle range in a standard disc plough?",
      "options": {
        "A": "0\u00b0 to 5\u00b0",
        "B": "15\u00b0 to 25\u00b0",
        "C": "40\u00b0 to 45\u00b0",
        "D": "55\u00b0 to 65\u00b0"
      },
      "correctOption": "B",
      "explanation": "The tilt angle (between disc face plane and the vertical) is standardly set between 15\u00b0 and 25\u00b0."
    },
    {
      "id": "SOL223-U2-MCQ09",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
      "difficulty": "Easy",
      "questionText": "What is the primary agricultural purpose of operating a subsoiler?",
      "options": {
        "A": "Pulverize topsoil into fine dust",
        "B": "Shatter impermeable hardpans without inverting or bringing subsoil to the surface",
        "C": "Plant seeds at high speed",
        "D": "Create ridges for potato cultivation"
      },
      "correctOption": "B",
      "explanation": "Subsoilers operate at 45-75 cm depths to fracture dense traffic hardpans without inverting infertile subsoil."
    },
    {
      "id": "SOL223-U2-MCQ10",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Easy",
      "questionText": "Which secondary tillage implement consists of opposing gangs of concave steel discs designed to pulverize clods?",
      "options": {
        "A": "Mouldboard plough",
        "B": "Disc harrow",
        "C": "Subsoiler",
        "D": "Chisel plough"
      },
      "correctOption": "B",
      "explanation": "Disc harrows use gangs of rotating concave discs to cut crop residues and pulverize surface clods."
    },
    {
      "id": "SOL223-U2-MCQ11",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Easy",
      "questionText": "How is power transmitted from the tractor to drive the rotor shaft of a rotary tiller (rotavator)?",
      "options": {
        "A": "Through the rear tractor tires",
        "B": "From the tractor Power Take-Off (PTO) shaft via gearbox and side gears",
        "C": "Using ground drive friction wheels",
        "D": "By an auxiliary electric motor"
      },
      "correctOption": "B",
      "explanation": "The rotavator is a dynamic active implement driven by the tractor PTO shaft through universal joints and gearboxes."
    },
    {
      "id": "SOL223-U2-MCQ12",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "Horizontal suction (side clearance) in a Mouldboard plough is provided to:",
      "options": {
        "A": "Retain surface moisture",
        "B": "Maintain the correct cutting width of the furrow slice",
        "C": "Prevent the share from wearing down",
        "D": "Invert heavy grass sod without breaking"
      },
      "correctOption": "B",
      "explanation": "Horizontal suction tilts the share point laterally (3-5 mm toward unploughed land) to maintain designed cut width."
    },
    {
      "id": "SOL223-U2-MCQ13",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "Which type of mouldboard has a short, broad body with abrupt curvature for maximum clod pulverization?",
      "options": {
        "A": "Sod or breaker mouldboard",
        "B": "Stubble mouldboard",
        "C": "General purpose mouldboard",
        "D": "Slat mouldboard"
      },
      "correctOption": "B",
      "explanation": "Stubble mouldboards feature sharp curvature that aggressively shatters and pulverizes soil in clean stubble fields."
    },
    {
      "id": "SOL223-U2-MCQ14",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Easy",
      "questionText": "Which type of mouldboard is recommended for sticky, waxy clay soils to reduce soil adherence?",
      "options": {
        "A": "Chilled iron stubble mouldboard",
        "B": "Slat mouldboard",
        "C": "High-speed sod mouldboard",
        "D": "General purpose mouldboard"
      },
      "correctOption": "B",
      "explanation": "Slat mouldboards feature open longitudinal gaps, reducing metal surface area and allowing sticky clay to scour."
    },
    {
      "id": "SOL223-U2-MCQ15",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Easy",
      "questionText": "In a vertical disc plough (one-way disc harrow), what is the value of the tilt angle?",
      "options": {
        "A": "0\u00b0 (vertical)",
        "B": "20\u00b0",
        "C": "45\u00b0",
        "D": "90\u00b0"
      },
      "correctOption": "A",
      "explanation": "In a vertical disc plough, the discs are held perpendicular to the ground, so the tilt angle is 0\u00b0."
    },
    {
      "id": "SOL223-U2-MCQ16",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Easy",
      "questionText": "In a tandem disc harrow, how are the front and rear disc gangs configured to throw soil?",
      "options": {
        "A": "All gangs throw soil to the right",
        "B": "Front gangs throw soil outward, and rear gangs throw soil inward",
        "C": "All gangs throw soil inward",
        "D": "Discs do not throw soil"
      },
      "correctOption": "B",
      "explanation": "Tandem disc harrows throw soil outward with front gangs and inward with rear gangs, leaving a level field profile."
    },
    {
      "id": "SOL223-U2-MCQ17",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Easy",
      "questionText": "Which blade shape on a rotavator is considered universal and most effective at cutting heavy residues without wrapping?",
      "options": {
        "A": "C-shaped blade",
        "B": "L-shaped blade",
        "C": "Straight spike blade",
        "D": "Concave cup blade"
      },
      "correctOption": "B",
      "explanation": "L-shaped blades clear trash effectively and prevent crop vines and residues from wrapping around the rotor shaft."
    },
    {
      "id": "SOL223-U2-MCQ18",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements",
      "difficulty": "Easy",
      "questionText": "In zero-tillage wheat sowing following harvested paddy, what specialized furrow opener is widely used to cut narrow slots?",
      "options": {
        "A": "Wide duckfoot sweep",
        "B": "Inverted-T furrow opener",
        "C": "Mouldboard miniature bottom",
        "D": "Curved shovel"
      },
      "correctOption": "B",
      "explanation": "Inverted-T furrow openers slice through loose residue and deposit seeds in a narrow inverted-T slot in untilled soil."
    },
    {
      "id": "SOL223-U2-MCQ19",
      "syllabusTopic": "Indigenous ploughs (Desi plough) vs improved ploughs",
      "difficulty": "Easy",
      "questionText": "The traditional Indian indigenous plough (Desi plough) cuts what cross-sectional furrow shape in the soil?",
      "options": {
        "A": "Rectangular furrow slice",
        "B": "Trapezoidal inverted slice",
        "C": "V-shaped furrow without soil inversion",
        "D": "Circular groove"
      },
      "correctOption": "C",
      "explanation": "The Desi plough opens a V-shaped furrow by displacement without inverting or burying weeds."
    },
    {
      "id": "SOL223-U2-MCQ20",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Easy",
      "questionText": "What is the typical operating rotational speed of the rotavator rotor shaft under rated tractor PTO operation?",
      "options": {
        "A": "50 to 80 rpm",
        "B": "200 to 250 rpm",
        "C": "540 to 600 rpm",
        "D": "1000 to 1200 rpm"
      },
      "correctOption": "B",
      "explanation": "Through internal reduction gearing, the rotavator rotor shaft standardly turns at 200 to 250 rpm."
    },
    {
      "id": "SOL223-U2-MCQ21",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "difficulty": "Medium",
      "questionText": "How does zero tillage significantly reduce diesel fuel consumption compared to conventional tillage?",
      "options": {
        "A": "Requires a smaller tractor engine",
        "B": "Replaces 4-6 plowing and harrowing passes with a single direct seeding operation",
        "C": "Decreases engine operating RPM",
        "D": "Uses water instead of diesel fuel"
      },
      "correctOption": "B",
      "explanation": "Zero tillage eliminates multiple primary and secondary passes, slashing diesel fuel use from 30-40 L/ha down to 6-8 L/ha."
    },
    {
      "id": "SOL223-U2-MCQ22",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Medium",
      "questionText": "A bar point share is preferred in dry, stony soils because:",
      "options": {
        "A": "It costs less than slip shares",
        "B": "The worn point can be extended forward by loosening clamping bolts",
        "C": "It does not require vertical suction",
        "D": "It is made of soft aluminum"
      },
      "correctOption": "B",
      "explanation": "Bar point shares contain an adjustable high-carbon steel bar that can be pushed forward as the point wears down."
    },
    {
      "id": "SOL223-U2-MCQ23",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Medium",
      "questionText": "Where is the center of resistance located for a single Mouldboard plough bottom?",
      "options": {
        "A": "At the tip of the share point",
        "B": "Approximately 3/4 the furrow depth up from the sole and 1/4 the furrow width inward from the landside",
        "C": "At the top of the plough beam",
        "D": "In the center of the tractor rear axle"
      },
      "correctOption": "B",
      "explanation": "The center of resistance lies roughly 3/4 the depth up from the share sole and 1/4 the cut width inward from the landside."
    },
    {
      "id": "SOL223-U2-MCQ24",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Medium",
      "questionText": "How does an increase in disc angle (from 40\u00b0 to 48\u00b0) affect disc plough performance?",
      "options": {
        "A": "Decreases penetration and cuts narrower furrow",
        "B": "Increases furrow cut width and improves soil penetration",
        "C": "Eliminates side draft completely",
        "D": "Stops disc rotation"
      },
      "correctOption": "B",
      "explanation": "Increasing the disc angle places the disc more perpendicular to travel, broadening cut width and improving bite."
    },
    {
      "id": "SOL223-U2-MCQ25",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Medium",
      "questionText": "Why does a disc plough depend heavily on implement deadweight for soil penetration compared to an MB plough?",
      "options": {
        "A": "Discs lack suction points and must wedge into hard soil solely via downward gravitational and ballast force",
        "B": "Discs turn backwards",
        "C": "Disc bearings have zero friction",
        "D": "Tractors cannot apply hydraulic down-force"
      },
      "correctOption": "A",
      "explanation": "Unlike MB ploughs which pull themselves into the ground via share suction, disc ploughs require heavy ballast mass to penetrate."
    },
    {
      "id": "SOL223-U2-MCQ26",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
      "difficulty": "Medium",
      "questionText": "At what soil depth does an agricultural subsoiler typically operate?",
      "options": {
        "A": "10 to 15 cm",
        "B": "20 to 30 cm",
        "C": "45 to 75 cm",
        "D": "100 to 150 cm"
      },
      "correctOption": "C",
      "explanation": "Subsoilers are engineered to run between 45 and 75 cm deep to shatter subsurface hardpans beneath the plow layer."
    },
    {
      "id": "SOL223-U2-MCQ27",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Medium",
      "questionText": "What is the purpose of adjusting the gang angle on an offset disc harrow?",
      "options": {
        "A": "Change tire inflation pressure",
        "B": "Regulate cutting depth, clod pulverization intensity, and implement draft",
        "C": "Reverse the direction of travel",
        "D": "Level the tractor engine oil"
      },
      "correctOption": "B",
      "explanation": "Increasing the gang angle forces discs to attack soil more aggressively, increasing penetration depth and pulverization."
    },
    {
      "id": "SOL223-U2-MCQ28",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Medium",
      "questionText": "Why are notched (scalloped) discs mounted on the front gang of an offset disc harrow?",
      "options": {
        "A": "To reduce manufacturing costs",
        "B": "To bite into hard soil and cut tough crop residues and trash without slipping",
        "C": "To prevent soil from moving inward",
        "D": "To reduce tractor horsepower requirements"
      },
      "correctOption": "B",
      "explanation": "The notched periphery concentrates penetration weight onto small cutting points, slicing cleanly through thick stalks."
    },
    {
      "id": "SOL223-U2-MCQ29",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Medium",
      "questionText": "What does the kinematic index (lambda) represent in rotary tillage?",
      "options": {
        "A": "Ratio of PTO speed to engine speed",
        "B": "Ratio of peripheral blade tip speed to tractor forward travel speed",
        "C": "Ratio of fuel consumption to tractor weight",
        "D": "Ratio of share width to furrow depth"
      },
      "correctOption": "B",
      "explanation": "Kinematic index lambda = (omega * R) / V_f, measuring blade tip velocity relative to machine forward travel speed."
    },
    {
      "id": "SOL223-U2-MCQ30",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Medium",
      "questionText": "What happens to the soil pulverization (tilth) if a rotavator is operated with a higher kinematic index (lambda >> 1)?",
      "options": {
        "A": "Soil tilth becomes significantly finer with smaller mean aggregate diameter",
        "B": "Soil tilth becomes coarser with large intact clods",
        "C": "Blades stop cutting entirely",
        "D": "Draft requirement drops to zero"
      },
      "correctOption": "A",
      "explanation": "A higher kinematic index means blades slice smaller soil increments per revolution, yielding finer aggregate tilth."
    },
    {
      "id": "SOL223-U2-MCQ31",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Medium",
      "questionText": "Why is a safety slip clutch installed in the rotavator PTO driveline?",
      "options": {
        "A": "To adjust rotor speed in the field",
        "B": "To protect the tractor transmission and PTO gears from shock loads when blades hit rocks",
        "C": "To disengage blades during road transport",
        "D": "To lubricate the side chain drive"
      },
      "correctOption": "B",
      "explanation": "The friction slip clutch slips momentarily under extreme shock overload (striking rocks/roots), shielding drivelines from failure."
    },
    {
      "id": "SOL223-U2-MCQ32",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "difficulty": "Medium",
      "questionText": "In wetland rice production, what is the primary agronomic purpose of puddling?",
      "options": {
        "A": "Aerate the root zone thoroughly",
        "B": "Destroy macropores and create an impermeable dense plow sole to reduce water percolation loss",
        "C": "Dry out the field rapidly",
        "D": "Increase soil shear strength for tractors"
      },
      "correctOption": "B",
      "explanation": "Puddling pulverizes soil aggregates into a slurry, sealing soil pores and reducing deep percolation of ponded water by 70-80%."
    },
    {
      "id": "SOL223-U2-MCQ33",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Medium",
      "questionText": "A 3-bottom MB plough has bottoms of 30 cm cut each, operating at 15 cm depth in soil with 0.5 kgf/cm\u00b2 specific draft. What is the total draft?",
      "options": {
        "A": "450 kgf",
        "B": "675 kgf",
        "C": "900 kgf",
        "D": "1350 kgf"
      },
      "correctOption": "B",
      "explanation": "Total furrow area = 3 * (30 cm * 15 cm) = 1350 cm\u00b2. Total Draft = 1350 cm\u00b2 * 0.5 kgf/cm\u00b2 = 675 kgf."
    },
    {
      "id": "SOL223-U2-MCQ34",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Medium",
      "questionText": "What is the function of disc scrapers mounted on a disc plough?",
      "options": {
        "A": "Sharpen the disc cutting edge during operation",
        "B": "Clean adhering moist soil from the concave disc face to ensure proper scouring and turning",
        "C": "Act as depth gauge wheels",
        "D": "Counteract tractor steering torque"
      },
      "correctOption": "B",
      "explanation": "Scrapers continuously peel sticky soil away from the concave disc face, preventing soil accumulation and ensuring scouring."
    },
    {
      "id": "SOL223-U2-MCQ35",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Medium",
      "questionText": "Why are spring-loaded tines widely preferred over rigid tines in stony and rocky agricultural soils?",
      "options": {
        "A": "They require no lubrication",
        "B": "Tines deflect backward and upward when striking embedded stones, resetting automatically without bending",
        "C": "They operate at double the depth",
        "D": "They eliminate tractor fuel consumption"
      },
      "correctOption": "B",
      "explanation": "Spring trips allow individual tines to deflect over underground obstructions and snap back, preventing structural breakage."
    },
    {
      "id": "SOL223-U2-MCQ36",
      "syllabusTopic": "Indigenous ploughs (Desi plough) vs improved ploughs",
      "difficulty": "Medium",
      "questionText": "Why does plowing with an indigenous (Desi) plough leave unploughed ridges between adjacent passes unless cross-plowing is practiced?",
      "options": {
        "A": "The share point is too sharp",
        "B": "It cuts a V-shaped furrow, leaving triangular uncut soil shoulders between adjacent furrow centers",
        "C": "It turns furrow slices too wide",
        "D": "Bullocks refuse to walk straight"
      },
      "correctOption": "B",
      "explanation": "Because the Desi plough creates a V-shaped profile without horizontal undercut, uncut triangular ridges remain between passes."
    },
    {
      "id": "SOL223-U2-MCQ37",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Medium",
      "questionText": "What is the jointer component on an MB plough and what is its agricultural function?",
      "options": {
        "A": "A small miniature plough bottom that cuts a small furrow off the furrow slice edge to ensure weed burial",
        "B": "The main hinge pin of the three-point hitch",
        "C": "A depth gauge wheel attached to the landside",
        "D": "A spring that dampens vibrations"
      },
      "correctOption": "A",
      "explanation": "The jointer cuts a small ribbon off the furrow edge and inverts it into the furrow bottom so weeds are buried cleanly."
    },
    {
      "id": "SOL223-U2-MCQ38",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Medium",
      "questionText": "What is side draft in a tractor-plough system, and how is it caused?",
      "options": {
        "A": "Vertical uplift caused by rocky soils",
        "B": "Lateral horizontal force caused when the true line of draft does not coincide with the tractor's center of pull",
        "C": "Backward pitching of the tractor on slopes",
        "D": "Vibration of the mouldboard face"
      },
      "correctOption": "B",
      "explanation": "Side draft arises when implement center of resistance and tractor center of pull are misaligned, pulling the tractor sideways."
    },
    {
      "id": "SOL223-U2-MCQ39",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Medium",
      "questionText": "Why does a rotavator create a forward thrust on the tractor during field operation?",
      "options": {
        "A": "Due to tractor tire inflation pressure",
        "B": "The blades rotate forward, biting backward against soil and propelling the machine forward",
        "C": "Because the PTO rotates counter-clockwise",
        "D": "Due to hydraulic down-pressure"
      },
      "correctOption": "B",
      "explanation": "Because blades rotate forward in the direction of travel, the reactive soil cutting force pushes the tractor chassis forward."
    },
    {
      "id": "SOL223-U2-MCQ40",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
      "difficulty": "Medium",
      "questionText": "How does subsoiling affect the bulk density and infiltration rate of compacted agricultural soils?",
      "options": {
        "A": "Increases bulk density and lowers infiltration",
        "B": "Decreases bulk density (from 1.6 to 1.3 g/cm\u00b3) and drastically increases water infiltration rate",
        "C": "Keeps bulk density unchanged",
        "D": "Converts clay into sand"
      },
      "correctOption": "B",
      "explanation": "Shattering the dense hardpan increases pore space, reducing bulk density and facilitating rapid downward water percolation."
    },
    {
      "id": "SOL223-U2-MCQ41",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Medium",
      "questionText": "Spike tooth harrows (peg tooth harrows) are predominantly employed for:",
      "options": {
        "A": "Primary deep plowing of virgin soils",
        "B": "Light surface crust breaking, leveling seedbeds, and destroying newly germinated weed seedlings",
        "C": "Burying deep tree roots",
        "D": "Digging potato tubers"
      },
      "correctOption": "B",
      "explanation": "Spike tooth harrows perform light surface finishing, crust breaking after rain, and smoothing prior to seed drilling."
    },
    {
      "id": "SOL223-U2-MCQ42",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements",
      "difficulty": "Medium",
      "questionText": "What is the main weed control challenge encountered when shifting to zero-tillage systems?",
      "options": {
        "A": "Aquatic algae blooms",
        "B": "Shift toward difficult-to-control perennial weeds and dependence on non-selective burndown herbicides like glyphosate",
        "C": "Weeds stop germinating entirely",
        "D": "Loss of all nitrogen in soil"
      },
      "correctOption": "B",
      "explanation": "Without tillage to uproot weeds, zero-till requires chemical burndown herbicides or mulch suppression to control perennials."
    },
    {
      "id": "SOL223-U2-MCQ43",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Medium",
      "questionText": "The colter on an MB plough performs which operational function?",
      "options": {
        "A": "Pushes the tractor forward",
        "B": "Makes a clean vertical cut into the soil ahead of the share point to produce a smooth furrow wall",
        "C": "Spreads fertilizer into the furrow",
        "D": "Measures furrow depth automatically"
      },
      "correctOption": "B",
      "explanation": "The colter (rolling disc or knife) cuts vertically ahead of the share, leaving a clean furrow wall and reducing share draft."
    },
    {
      "id": "SOL223-U2-MCQ44",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Medium",
      "questionText": "What is the primary operational limitation of using C-shaped blades on a rotavator in trashy fields?",
      "options": {
        "A": "They break instantly on soft soil",
        "B": "They tend to wrap long fibrous weeds, vines, and crop stubble around the rotor shaft",
        "C": "They require three times more horsepower",
        "D": "They cannot operate in dry soil"
      },
      "correctOption": "B",
      "explanation": "C-blades have continuous smooth curvature that easily traps long vines and crop residue, clogging the rotor."
    },
    {
      "id": "SOL223-U2-MCQ45",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "difficulty": "Medium",
      "questionText": "What is strip tillage and what is its primary agronomic benefit?",
      "options": {
        "A": "Plowing narrow diagonal strips across the field",
        "B": "Tilling only narrow 15-20 cm seedbed bands for crop rows while leaving inter-rows covered with residue",
        "C": "Removing all topsoil strips",
        "D": "Harvesting crops in strips"
      },
      "correctOption": "B",
      "explanation": "Strip tillage tills only the narrow seed planting zone, combining the warm seedbed benefits of tillage with the erosion control of no-till."
    },
    {
      "id": "SOL223-U2-MCQ46",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Hard",
      "questionText": "A 2-bottom MB plough cuts a total width of 60 cm at a depth of 18 cm. In a field dynamometer test at 4 km/h, the total draft is recorded as 756 kgf. What is the unit draft of the soil?",
      "options": {
        "A": "0.35 kgf/cm\u00b2",
        "B": "0.50 kgf/cm\u00b2",
        "C": "0.70 kgf/cm\u00b2",
        "D": "0.85 kgf/cm\u00b2"
      },
      "correctOption": "C",
      "explanation": "Total furrow area = 60 cm * 18 cm = 1080 cm\u00b2. Unit draft = Total draft / Total area = 756 kgf / 1080 cm\u00b2 = 0.70 kgf/cm\u00b2."
    },
    {
      "id": "SOL223-U2-MCQ47",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Hard",
      "questionText": "Using the data from the previous question (Draft = 756 kgf, Speed = 4 km/h), what is the drawbar power required in kilowatts?",
      "options": {
        "A": "5.6 kW",
        "B": "8.2 kW",
        "C": "11.2 kW",
        "D": "14.5 kW"
      },
      "correctOption": "B",
      "explanation": "Drawbar pull = 756 kgf * 9.80665 N/kgf = 7413.8 N = 7.414 kN. Power (kW) = (7.414 * 4) / 3.6 = 29.655 / 3.6 = 8.24 kW."
    },
    {
      "id": "SOL223-U2-MCQ48",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Hard",
      "questionText": "A rotavator rotor has a blade tip radius of 0.25 m and rotates at 210 rpm. The tractor travels forward at 3.6 km/h (1.0 m/s). What is the kinematic index (lambda)?",
      "options": {
        "A": "2.5",
        "B": "5.5",
        "C": "8.2",
        "D": "12.5"
      },
      "correctOption": "B",
      "explanation": "omega = 2 * pi * 210 / 60 = 21.99 rad/s. Peripheral speed V_p = omega * R = 21.99 * 0.25 = 5.50 m/s. lambda = V_p / V_f = 5.50 / 1.0 = 5.50."
    },
    {
      "id": "SOL223-U2-MCQ49",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Hard",
      "questionText": "A tandem disc harrow has 16 discs of 50 cm diameter spaced 20 cm apart. If effective cutting width is 1.8 m, travel speed is 5 km/h, and field efficiency is 80%, what is its field capacity?",
      "options": {
        "A": "0.45 ha/h",
        "B": "0.72 ha/h",
        "C": "0.90 ha/h",
        "D": "1.20 ha/h"
      },
      "correctOption": "B",
      "explanation": "Field Capacity (ha/h) = (Width in m * Speed in km/h * Efficiency) / 10 = (1.8 * 5 * 0.80) / 10 = 7.2 / 10 = 0.72 ha/h."
    },
    {
      "id": "SOL223-U2-MCQ50",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Hard",
      "questionText": "In an MB plough, if the vertical clearance (vertical suction) is completely worn away to zero, what operational symptom immediately results?",
      "options": {
        "A": "The plough fails to penetrate hard soil and rides out of the ground onto the surface",
        "B": "The plough dives uncontrollably to excessive depth",
        "C": "The mouldboard inverts soil upside down twice",
        "D": "Furrow width increases by 50%"
      },
      "correctOption": "A",
      "explanation": "Without vertical suction under the share point, downward penetration suction force is lost, causing the plough to ride out."
    },
    {
      "id": "SOL223-U2-MCQ51",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "difficulty": "Hard",
      "questionText": "If the tilt angle of a standard disc plough is decreased from 20\u00b0 toward 5\u00b0, what is the immediate physical consequence?",
      "options": {
        "A": "Penetration in hard soil becomes virtually impossible because discs lose downward wedging action",
        "B": "The plough inverts soil twice as fast",
        "C": "Draft force drops to zero",
        "D": "The discs stop rotating completely"
      },
      "correctOption": "A",
      "explanation": "Tilt angle allows the disc cutting edge to wedge underneath soil. Near zero tilt, the disc acts like a flat wall and cannot penetrate."
    },
    {
      "id": "SOL223-U2-MCQ52",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
      "difficulty": "Hard",
      "questionText": "Why does operating a subsoiler require 60 to 90 hp tractor capacity despite having only 1 or 2 tines?",
      "options": {
        "A": "High transmission friction in the gearbox",
        "B": "Operating at 60 cm depth encounters high passive earth pressure and soil cohesion across deep consolidated layers",
        "C": "The tractor must run at 15 km/h",
        "D": "Hydraulic fluid heats up excessively"
      },
      "correctOption": "B",
      "explanation": "Deep consolidated soil below the plow layer exhibits high confining pressure and shear strength, creating massive draft resistance."
    },
    {
      "id": "SOL223-U2-MCQ53",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Hard",
      "questionText": "What is the mathematical condition for the rotavator blade tip path to trace a true trochoid that performs soil cutting?",
      "options": {
        "A": "lambda < 0.5",
        "B": "lambda = 1.0",
        "C": "lambda > 1.0",
        "D": "lambda = 0"
      },
      "correctOption": "C",
      "explanation": "When lambda (ratio of blade tip speed to forward speed) exceeds 1.0, the blade moves backward relative to the machine, cutting soil."
    },
    {
      "id": "SOL223-U2-MCQ54",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Hard",
      "questionText": "What is the primary purpose of setting 'horizontal suction' to 5 mm toward unploughed land?",
      "options": {
        "A": "Prevent rocks from hitting the share",
        "B": "Compensate for the tractor's lateral veer and hold the plough against the furrow wall to maintain cut width",
        "C": "Keep water in the furrow bottom",
        "D": "Increase travel speed by 10%"
      },
      "correctOption": "B",
      "explanation": "Horizontal suction creates an inward lateral bite that keeps the landside firmly seated against the furrow wall."
    },
    {
      "id": "SOL223-U2-MCQ55",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "difficulty": "Hard",
      "questionText": "In an offset disc harrow operating behind a tractor, why is the rear gang positioned at a slightly greater gang angle than the front gang?",
      "options": {
        "A": "To equalize wear on bearings",
        "B": "To compensate for the reduced penetration resistance of pre-loosened soil and achieve equal soil pulverization",
        "C": "To reduce tractor diesel consumption",
        "D": "To prevent discs from rotating"
      },
      "correctOption": "B",
      "explanation": "The front gang works untilled ground; the rear gang works loosened soil. Setting the rear angle higher balances side draft and finish."
    },
    {
      "id": "SOL223-U2-MCQ56",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements",
      "difficulty": "Hard",
      "questionText": "What is the effect of zero tillage on soil thermal conductivity and early spring soil temperature in northern latitudes?",
      "options": {
        "A": "Soil warms up faster than tilled soil",
        "B": "Surface residue layer acts as an insulator, keeping untilled soil 2\u00b0 to 5\u00b0C cooler and delaying early germination",
        "C": "Soil temperature remains at absolute zero",
        "D": "Residue produces volcanic heat"
      },
      "correctOption": "B",
      "explanation": "High residue reflect sunlight and insulates soil, slowing spring warming and necessitating adapted planting dates."
    },
    {
      "id": "SOL223-U2-MCQ57",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "difficulty": "Hard",
      "questionText": "A tractor has a wheel tread width of 140 cm. When hitching a 3-bottom 35 cm MB plough, what problem arises if the hitch is not offset properly?",
      "options": {
        "A": "Severe side draft occurs, pulling tractor steering continually toward the ploughed furrow",
        "B": "Tractor front wheels lift off the ground",
        "C": "Engine stalls immediately",
        "D": "Mouldboard breaks into pieces"
      },
      "correctOption": "A",
      "explanation": "If the center of resistance does not align with the tractor pull line, substantial side draft induces steering instability and tire wear."
    },
    {
      "id": "SOL223-U2-MCQ58",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "difficulty": "Hard",
      "questionText": "How does specific energy consumption (kJ/m\u00b3 of soil tilled) of a rotavator compare with that of an MB plough working at identical depth?",
      "options": {
        "A": "Rotavator consumes 50% less energy",
        "B": "Rotavator consumes 2.5 to 3.5 times more specific energy per unit volume of soil tilled",
        "C": "Both consume exactly identical energy",
        "D": "MB plough consumes ten times more energy"
      },
      "correctOption": "B",
      "explanation": "Rotary tillers over-pulverize soil aggregates, throwing soil against hoods and consuming 2.5-3.5x higher energy than passive shears."
    },
    {
      "id": "SOL223-U2-MCQ59",
      "syllabusTopic": "Indigenous ploughs (Desi plough) vs improved ploughs",
      "difficulty": "Hard",
      "questionText": "Why does the Desi plough require 3 to 4 times more total field travel distance than an MB plough to achieve comparable seedbed preparation?",
      "options": {
        "A": "It travels at 1 km/h",
        "B": "It cuts narrow V-shaped furrows without inversion, requiring repeated cross-plowing passes to shatter ridges",
        "C": "It requires bullocks to rest every 10 meters",
        "D": "It can only be used at night"
      },
      "correctOption": "B",
      "explanation": "Due to incomplete undercutting, farmers must plow diagonally and perpendicularly multiple times to pulverize uncut ridge shoulders."
    },
    {
      "id": "SOL223-U2-MCQ60",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
      "difficulty": "Hard",
      "questionText": "What is the critical depth phenomenon in subsoiler and chisel tine operation?",
      "options": {
        "A": "The depth where water boils",
        "B": "The threshold depth below which soil failure transitions from upward crescent shattering to lateral compaction and plastic flow",
        "C": "The depth at which tractor stops moving",
        "D": "The maximum length of the tractor top link"
      },
      "correctOption": "B",
      "explanation": "Below the critical depth, soil confining pressure prevents upward shearing, causing the subsoiler to compact soil rather than shatter it."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL223-U2-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "questionText": "Define Primary Tillage, Secondary Tillage, and Conservation Tillage according to standard agricultural engineering terminology.",
      "modelAnswer": "In agricultural engineering and soil dynamics, tillage operations are classified by mechanical function, working depth, and surface soil condition:\n\n1. Primary Tillage: The initial major mechanical soil-working operation performed after crop harvest or on virgin land. Its objective is to aggressively cut, lift, invert, and shatter deeply compacted soil to depths ranging between 15 and 35 cm. Primary tillage buries standing stubble, eradicates deep-rooted weeds, aerates the root zone, and increases soil permeability. Primary implements include mouldboard ploughs, standard disc ploughs, chisel ploughs, and subsoilers.\n\n2. Secondary Tillage: Subsequent shallow mechanical cultivation (5 to 15 cm depth) executed following primary plowing. Its purpose is to crush soil clods, level the field, firm the seedbed, incorporate fertilizers and pre-emergence herbicides, and destroy newly emerged weed seedlings. Implements include disc harrows, spike tooth harrows, spring tyre cultivators, rollers, and rotary tillers.\n\n3. Conservation Tillage: Any tillage and planting system that maintains at least 30% of the soil surface covered with crop residues after planting. Designed to reduce water runoff, arrest wind erosion, conserve soil moisture, and preserve soil organic matter. Sub-types include minimum tillage, zero-tillage (no-till), and strip tillage.",
      "outlinePoints": [
        "Definition, operational depth (15-35 cm), and objectives of Primary Tillage",
        "Examples of primary tillage implements (MB plough, disc plough, subsoiler)",
        "Definition, operational depth (5-15 cm), and objectives of Secondary Tillage",
        "Examples of secondary tillage implements (harrows, cultivators, rotavators)",
        "Definition and key threshold of Conservation Tillage (>30% surface residue)"
      ]
    },
    {
      "id": "SOL223-U2-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "questionText": "Compare a Mouldboard Plough with a Standard Disc Plough across five engineering and field operational parameters.",
      "modelAnswer": "The Mouldboard (MB) plough and Disc plough are the two primary inversion tillage implements deployed globally, distinguished by fundamental mechanical differences:\n\n1. Soil Inversion & Residue Burial: The MB plough provides near 100% soil inversion. Its curved mouldboard lifts and twists the furrow slice upside down, completely burying crop trash, weed seeds, and insect larvae. In contrast, the disc plough rolls through soil, providing partial inversion (50-60%) and mixing crop residue throughout the tilled profile.\n\n2. Performance in Stony & Stumpy Land: MB ploughs fail in stony or root-infested ground; rigid shares hook behind boulders or roots, causing shear bolt failure, beam bending, or frog fracturing. The disc plough rolls over embedded rocks and roots without stopping, making it ideal for newly cleared or rocky land.\n\n3. Scouring in Sticky Clay Soils: In heavy, waxy clay soils, soil adheres tenaciously to the stationary steel face of an MB mouldboard, preventing scouring and causing ploughing to halt. The rotating disc of a disc plough, equipped with curved scrapers, sheds sticky clay continuously.\n\n4. Penetration Mechanism: MB ploughs penetrate via vertical suction engineered into the downward tilt of the share point. Disc ploughs lack downward suction; they rely entirely on heavy structural mass (deadweight ballast) and tilt angle geometry to wedge into hard soil.\n\n5. Draft & Energy Requirement: In well-conditioned loamy soils, the MB plough exhibits lower draft per unit cross-sectional furrow area (0.4-0.6 kgf/cm\u00b2). The disc plough requires 10% to 15% higher draft due to rolling soil wedging and massive implement weight.",
      "outlinePoints": [
        "Furrow slice inversion: complete (MB) vs partial/mixed (disc)",
        "Performance in stony, stumpy, and newly cleared soils",
        "Scouring characteristics in heavy, sticky clay soils",
        "Penetration mechanism: share suction vs ballast deadweight",
        "Draft and specific energy consumption comparisons"
      ]
    },
    {
      "id": "SOL223-U2-SUB03",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "questionText": "Describe the functional components of a Mouldboard Plough bottom. Explain the engineering significance of vertical suction and horizontal suction, and discuss how improper suction affects plough performance.",
      "modelAnswer": "Anatomy of the Mouldboard (MB) Plough Bottom:\n\nThe plough bottom is the three-dimensional working assembly that engages and manipulates the soil slice. It comprises four primary components bolted to a common central frame:\n\n1. Share: The penetrating forward edge that makes the horizontal cutting pass separating the furrow slice from the subsoil. Shares are subjected to intense abrasive wear and are fabricated from chilled cast iron or high-carbon steel. Types include slip shares, shin shares, and bar-point shares (with an extendable steel bar for rocky soils).\n2. Mouldboard: The warped, curved steel plate welded or bolted above the share. It lifts, twists, pulverizes, and inverts the cut furrow slice into the adjacent furrow trench. Types include stubble, general purpose, sod/breaker, and slat mouldboards.\n3. Landside: A long, flat steel plate fastened to the furrow side of the frog. It slides against the vertical unploughed furrow wall, counteracting the intense lateral side thrust exerted on the mouldboard by the turning soil slice and stabilizing the plough.\n4. Frog: The central irregular structural forging or casting to which the share, mouldboard, landside, and plough beam are rigidly secured.\n\nEngineering Significance of Suction Mechanics:\n\n1. Vertical Suction (Vertical Clearance):\n- Definition: The downward tilt of the share point relative to the horizontal plane of the bottom sole of the landside. It is measured as the vertical gap (typically 3 to 5 mm) beneath the heel of the landside when the plough rests on a flat floor with the share point touching.\n- Function: Creates a downward penetrating suction force when the plough moves forward, pulling the implement down to its preset operational depth and maintaining depth stability.\n\n2. Horizontal Suction (Side Clearance):\n- Definition: The lateral tilt of the share point toward the unploughed land relative to the vertical plane of the landside's furrow-facing surface (typically 3 to 5 mm).\n- Function: Ensures that the share point continuously bites into the unploughed land, keeping the landside pressed firmly against the furrow wall to maintain the designated cutting width.\n\nConsequences of Improper Suction:\n- Worn Vertical Suction (<2 mm): The plough fails to penetrate hard soil, continually 'rides out' of the ground onto the surface, and creates irregular, shallow furrows.\n- Excessive Vertical Suction (>8 mm): The plough dives excessively, causing the heel of the landside to lift off the furrow floor, dramatically increasing tractor draft, fuel consumption, and heel wear.\n- Insufficient Horizontal Suction: The plough wanders into the ploughed furrow, cutting a narrower slice than designed, leaving unploughed ridges, and creating severe side draft on the tractor steering.",
      "outlinePoints": [
        "Detailed functional description of the 4 bottom parts: share, mouldboard, landside, frog",
        "Definition, measurement, and typical dimension (3-5 mm) of Vertical Suction",
        "Definition, measurement, and typical dimension (3-5 mm) of Horizontal Suction",
        "Operational defects resulting from worn or excessive vertical suction",
        "Operational defects resulting from improper horizontal suction"
      ]
    },
    {
      "id": "SOL223-U2-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers",
      "questionText": "Define Disc Angle and Tilt Angle in a standard tractor disc plough. Explain how adjusting these angles alters ploughing performance.",
      "modelAnswer": "Geometric Alignment Angles of the Standard Disc Plough:\n\n1. Disc Angle:\n- Definition: The horizontal angle formed between the plane of the circular disc's cutting edge and the direction of forward tractor travel. In standard agricultural disc ploughs, it is adjustable between 40\u00b0 and 45\u00b0.\n- Performance Impact: The disc angle governs the width of the furrow slice cut and the degree of soil inversion. Increasing the disc angle (e.g., from 40\u00b0 to 48\u00b0) positions the disc face more squarely against the soil, increasing furrow cut width, enhancing clod pulverization, and improving penetration in hard ground, though it increases implement draft.\n\n2. Tilt Angle:\n- Definition: The vertical angle formed between the plane of the circular disc's cutting edge and a true vertical line perpendicular to the ground. Typically set between 15\u00b0 and 25\u00b0.\n- Performance Impact: The tilt angle enables the disc's lower cutting edge to undercut the soil slice, providing downward wedging and scooping the soil upward along the concave face. Increasing the tilt angle improves downward penetration in hard, compacted soils. Decreasing the tilt angle toward vertical (0\u00b0) reduces penetration capability but allows high-speed operation in loose, pre-tilled soils (as in vertical disc harrows).",
      "outlinePoints": [
        "Definition and standard range (40\u00b0-45\u00b0) of Disc Angle",
        "Operational effect of disc angle adjustments on cut width and draft",
        "Definition and standard range (15\u00b0-25\u00b0) of Tilt Angle",
        "Operational effect of tilt angle on penetration and soil scooping",
        "Contrast with vertical disc plough geometry (tilt angle = 0\u00b0)"
      ]
    },
    {
      "id": "SOL223-U2-SUB05",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "questionText": "A 3-bottom tractor MB plough cuts a furrow width of 35 cm per bottom to a working depth of 16 cm. The average unit draft of the sandy loam soil is 0.55 kgf/cm\u00b2. If the tractor operates at a forward speed of 4.2 km/h, calculate: (a) Total draft in kgf and kN, (b) Drawbar horsepower required, and (c) Field capacity in ha/h assuming an 82% field efficiency.",
      "modelAnswer": "Given Parameters:\n- Number of bottoms (n) = 3\n- Furrow width per bottom (w) = 35 cm = 0.35 m\n- Furrow depth (d) = 16 cm\n- Soil unit draft (sigma) = 0.55 kgf/cm\u00b2\n- Operating travel speed (V) = 4.2 km/h\n- Field efficiency (eta) = 82% = 0.82\n\nStep 1: Calculate Total Furrow Cross-Sectional Area (A):\nTotal width of cut (W) = 3 * 35 cm = 105 cm = 1.05 m\nTotal cross-sectional area (A) = Total Width * Depth\nA = 105 cm * 16 cm = 1680 cm\u00b2\n\nStep 2: Calculate Total Draft (D):\nTotal Draft in kgf = Total Area * Unit Draft\nD = 1680 cm\u00b2 * 0.55 kgf/cm\u00b2 = 924.0 kgf\nIn SI units (kN):\nDraft (kN) = (924.0 kgf * 9.80665 N/kgf) / 1000 = 9.06 kN\n\nStep 3: Calculate Drawbar Horsepower (DBHP):\nDBHP (metric) = (Draft in kgf * Speed in km/h) / 270\nDBHP = (924.0 * 4.2) / 270 = 3880.8 / 270 = 14.37 metric hp\nIn SI kilowatts: Power = (9.06 kN * 4.2 km/h) / 3.6 = 10.57 kW\n\nStep 4: Calculate Effective Field Capacity (EFC):\nEFC (ha/h) = (Total Width in m * Speed in km/h * Field Efficiency) / 10\nEFC = (1.05 m * 4.2 km/h * 0.82) / 10\nEFC = 3.6162 / 10 = 0.362 ha/h (approx. 2.76 hours per hectare)\n\nFinal Answers:\n(a) Total Draft = 924.0 kgf (9.06 kN)\n(b) Drawbar Power = 14.37 metric hp (10.57 kW)\n(c) Field Capacity = 0.362 ha/h",
      "outlinePoints": [
        "Listing given plough geometry, soil unit draft, and speed",
        "Calculation of total cross-sectional area (1680 cm\u00b2)",
        "Computation of total draft in kgf (924 kgf) and kN (9.06 kN)",
        "Evaluation of Drawbar Horsepower (14.37 hp / 10.57 kW)",
        "Determination of effective field capacity (0.362 ha/h)"
      ]
    },
    {
      "id": "SOL223-U2-SUB06",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements",
      "questionText": "In the Indo-Gangetic Plains, intensive rice-wheat rotation has caused severe subsurface soil compaction (hardpans at 15-20 cm depth) and severe air pollution from paddy straw burning. Evaluate how the combined adoption of subsoiling, Happy Seeder / Super Seeder, and zero-tillage addresses both crises.",
      "modelAnswer": "Agricultural and Environmental Crisis in Rice-Wheat Agro-Ecosystems:\n\nThe intensive rice-wheat cropping system spanning 10 million hectares in the Indo-Gangetic Plains faces two severe ecological bottlenecks:\n1. Subsurface Plow Sole Compaction: Decades of wet wetland rice puddling have formed an impermeable, dense hardpan at 15 to 22 cm depth (bulk density 1.65-1.75 g/cm\u00b3), severely restricting winter wheat root proliferation and deep water infiltration.\n2. Residue Burning Pollution: The narrow 15-day turnaround between rice harvest and wheat sowing compels farmers to burn ~20 million tonnes of rice straw annually, emitting severe particulate matter (PM2.5), carbon monoxide, and greenhouse gases.\n\nIntegrated Technological Solutions:\n\n1. Deep Tillage via Subsoiling:\n- Operation: Once every 3 to 4 years during the dry summer fallow, tractor-mounted subsoilers are run at 50 to 60 cm depth with 1.0 to 1.2 m tine spacing.\n- Agronomic Impact: The subsoiler shatters the puddled hardpan without inverting infertile subsoil. Bulk density drops to 1.30-1.38 g/cm\u00b3, restoring deep gravitational percolation, preventing surface waterlogging, and allowing wheat roots to tap deep soil moisture reserves down to 1.5 m.\n\n2. In-Situ Residue Management via Happy Seeder and Super Seeder:\n- Happy Seeder Technology: Couples a flail rotor with a zero-till seed drill. Flails lift and chop standing paddy stubble, while inverted-T openers place wheat seed and basal fertilizer directly into untilled soil at 3-5 cm depth. The chopped straw is deposited uniformly over the seeded rows as surface mulch.\n- Super Seeder Technology: Combines a rotavator rotor with a zero-till drill. The forward rotavator chops and mixes rice stubble into the top 5-7 cm of soil, while trailing furrow openers plant wheat in the same pass.\n\n3. Ecological and Economic Synergy:\n- Elimination of Stubble Burning: In-situ drilling completely eliminates the need for field burning, improving regional air quality.\n- Water Conservation & Terminal Heat Buffering: The surface mulch layer reduces soil evaporation by 30-40% and keeps soil temperatures 2-3\u00b0C cooler during grain filling in March, mitigating yield losses from terminal heat stress.\n- Diesel & Production Cost Savings: Zero-till drilling eliminates 4 to 6 plowing passes, saving 30 to 40 liters of diesel per hectare and lowering production costs by \u20b93,500 to \u20b94,500/ha.",
      "outlinePoints": [
        "Characterization of the twin crises: puddled plow pan compaction and stubble burning",
        "Role of subsoiling: hardpan shattering, bulk density reduction, and drainage restoration",
        "Mechanics of Happy Seeder: flail residue lifting, slot opening, and mulch deposition",
        "Mechanics of Super Seeder: single-pass residue incorporation and seed placement",
        "Agronomic, economic, and atmospheric benefits of conservation agriculture"
      ]
    },
    {
      "id": "SOL223-U2-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Indigenous ploughs (Desi plough) vs improved ploughs",
      "questionText": "Describe the construction of an Indian indigenous (Desi) plough and state three fundamental mechanical limitations compared to an MB plough.",
      "modelAnswer": "Construction of the Indian Indigenous (Desi) Plough:\n\nThe Desi plough is the traditional wooden tillage implement manufactured by village artisans. It consists of four basic parts:\n1. Body (Kharha): The main curved wooden block made from babul, sal, or shisham hardwood.\n2. Share (Phal): An unhardened forged iron wedge or bar bolted or wedged into the body to penetrate the soil.\n3. Beam (Hal): A long wooden pole connecting the plough body to the bullock neck yoke.\n4. Handle (Hatha): A single upright wooden peg for the operator to guide the implement.\n\nThree Fundamental Mechanical Limitations:\n1. Absence of Soil Inversion: The Desi plough functions as a symmetric wedge, merely opening a V-shaped furrow by pushing soil aside without turning it over. Weeds and crop residues remain unburied on the surface.\n2. Incomplete Soil Undercutting: Because it cuts a V-groove rather than a flat horizontal cut, triangular ridges of uncut hard soil remain between adjacent furrows. Farmers must cross-plow 3 to 4 times to prepare a seedbed.\n3. Low Field Capacity and Inefficient Energy Transfer: With an operational width of only 10 to 15 cm, a farmer and pair of bullocks must walk approximately 65 to 80 km to plow one hectare, compared to only 25 to 30 km with a single-bottom MB plough.",
      "outlinePoints": [
        "Anatomy of the Desi plough: body, share, beam, handle",
        "Limitation 1: absence of soil inversion and poor weed burial",
        "Limitation 2: V-shaped cut leaving unploughed ridges, requiring cross-plowing",
        "Limitation 3: narrow width requiring excessive walking distance (65-80 km/ha)"
      ]
    },
    {
      "id": "SOL223-U2-SUB08",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "questionText": "Differentiate between a Disc Harrow and a Cultivator in terms of working components, operational depth, and soil pulverization.",
      "modelAnswer": "Disc Harrow vs Cultivator in Secondary Tillage:\n\n1. Working Components & Soil Engagement:\n- Disc Harrow: Utilizes gangs of rotating circular concave steel discs (45 to 60 cm diameter) mounted on a common arbor bolt. Soil is cut by rolling shearing action as the discs rotate across the ground.\n- Cultivator: Utilizes stationary tines (rigid or spring-loaded) fitted with soil-engaging tools such as reversible shovels, duckfoot sweeps, or spears. Soil is sheared by continuous horizontal dragging through the soil profile.\n\n2. Residue Handling & Trash Cutting:\n- Disc Harrow: Highly effective at cutting through tough standing crop stubble (maize stalks, cotton residue) and heavy weed mats due to the slicing action of notched rotating discs.\n- Cultivator: Poor at handling loose surface residue; crop stalks and weeds easily tangle around vertical tines, causing clogging and dragging large piles of trash.\n\n3. Operational Depth & Soil Disturbance:\n- Disc Harrow: Operates at shallow depths (6 to 12 cm), aggressively pulverizing topsoil clods, slicing roots, and leveling the surface profile.\n- Cultivator: Operates deeper (10 to 18 cm), shattering crusted subsoil layers, aerating the root zone, and uprooting weed root systems without excessive surface clod pulverization.\n\n4. Field Maintenance & Stoniness:\n- Disc Harrow: Rolls over embedded stones without damage; plain bearings require frequent greasing.\n- Cultivator: Spring-loaded tines trip over stones and reset automatically; shovels can be reversed when worn.",
      "outlinePoints": [
        "Working components: rotating concave discs vs stationary dragged tines",
        "Residue handling: slicing trash vs risk of tine clogging",
        "Operational depth and aggregate pulverization differences",
        "Root eradication mechanisms: cutting vs uprooting",
        "Suitability in stony soils and maintenance requirements"
      ]
    },
    {
      "id": "SOL223-U2-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "questionText": "Explain the working principle and kinematics of the tractor-driven Rotary Tiller (Rotavator). Derive the formula for Kinematic Index (lambda) and explain its significance in determining soil tilth.",
      "modelAnswer": "Kinematics and Working Dynamics of the Rotary Tiller (Rotavator):\n\n1. Operational Architecture:\nThe rotavator is a tractor-mounted secondary tillage machine powered by the tractor Power Take-Off (PTO) shaft. It comprises a central horizontal rotor shaft fitted with welded flanges onto which curved steel blades (L-shaped or C-shaped) are bolted. Power flows from the tractor PTO through a telescopic universal shaft, a friction slip clutch, a bevel pinion gearbox, and a side gear/chain drive, spinning the rotor at 200 to 250 rpm in the direction of forward tractor travel.\n\n2. Kinematics of Soil Cutting:\nAs the rotavator moves forward at tractor speed V_f while the rotor rotates at angular velocity omega, any point on the blade cutting tip undergoes a combined motion of rotation and translation. The resulting trajectory through the soil profile is a trochoidal curve.\n\n3. Derivation of Kinematic Index (lambda):\nLet:\n- R = Radius of rotor blade tip (m)\n- omega = Angular velocity of rotor shaft (rad/s) = (2 * pi * N) / 60, where N is rotor rpm\n- V_f = Tractor forward travel speed (m/s)\n\nThe peripheral blade tip velocity V_p is given by:\nV_p = omega * R\n\nThe Kinematic Index (lambda) is defined as the ratio of peripheral blade tip speed to forward travel speed:\nlambda = V_p / V_f = (omega * R) / V_f\n\n4. Physical & Agronomic Significance of lambda:\n- Case 1: lambda <= 1.0:\nThe blade tip does not move backward relative to the machine. No cutting loop is formed; blades drag through soil like rigid tines, causing extreme structural overload and stall.\n- Case 2: lambda > 1.0 (Cutting Condition):\nThe blade tip traces a true looped trochoid, cutting a crescent-shaped soil slice (trochoidal bite). In commercial agricultural practice, lambda is set between 2.5 and 6.0.\n- Influence on Soil Tilth:\nThe length of the soil slice (bite length, L_b) cut by each blade is inversely proportional to lambda: L_b = (2 * pi * V_f) / (z * omega) = (2 * pi * R) / (z * lambda), where z is the number of blades per flange.\n- High lambda (low forward speed or high rotor RPM): Yields small bite lengths, resulting in fine, dust-like soil pulverization. Ideal for wetland paddy puddling.\n- Low lambda (higher forward speed): Yields large bite lengths, producing a coarser, cloddy seedbed resistant to water erosion and surface crusting.",
      "outlinePoints": [
        "Functional architecture: PTO transmission, gearbox, side drive, and rotor flanges",
        "Trochoidal trajectory of the rotating and translating blade tip",
        "Mathematical formulation and derivation of Kinematic Index (lambda = omega * R / V_f)",
        "Physical boundaries: failure when lambda <= 1.0 vs true cutting when lambda > 1.0",
        "Mathematical relationship between lambda, bite length, and soil tilth refinement"
      ]
    },
    {
      "id": "SOL223-U2-SUB10",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering",
      "questionText": "Explain the concept of 'Critical Depth' in subsoiler and chisel tine operation. What happens when a subsoiler is operated beyond its critical depth?",
      "modelAnswer": "Concept of Critical Depth in Deep Tillage Mechanics:\n\n1. Definition of Critical Depth:\nIn soil mechanics (Godwin and Spoor theory), the 'critical depth' of a narrow vertical tine or subsoiler is the transitional depth threshold where the mechanism of soil failure abruptly changes from upward brittle shearing to lateral plastic compaction.\n\n2. Soil Failure Mechanisms Relative to Critical Depth:\n- Above Critical Depth (Crescent Failure Zone):\nNear the soil surface, the confining overburden pressure is low. As the subsoiler tine advances, soil shears upward along failure planes radiating forward and outward, forming a crescent-shaped failure crater. This creates desirable loosening, shattering, and porosity throughout the soil profile.\n- Below Critical Depth (Lateral Compaction Zone):\nAt greater depths, the massive weight of the overlying soil prevents upward soil displacement. Instead, advancing tines merely push soil sideways in plastic flow, creating localized lateral compaction, smearing furrow walls, and forming a dense subsurface groove without shattering the hardpan.\n\n3. Practical Engineering Consequences:\n- Operating a subsoiler deeper than its critical depth causes draft force to increase exponentially without increasing the shattered cross-sectional area.\n- In dry, hard soils, critical depth is roughly 5 to 7 times the tine width. To deepen the effective crescent shatter zone, engineers install forward-inclined winged footings (horizontal wings) on the subsoiler point, which elevate the critical depth threshold and increase shattered soil volume by up to 200% for the same tractor horsepower.",
      "outlinePoints": [
        "Definition of Critical Depth based on Godwin and Spoor soil failure theory",
        "Description of upward crescent failure above critical depth (loosening)",
        "Description of lateral plastic flow and compaction below critical depth",
        "Exponential draft penalty and absence of shattering below critical depth",
        "Role of winged subsoiler footings in elevating shattered soil volume"
      ]
    },
    {
      "id": "SOL223-U2-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements",
      "questionText": "State four distinct agronomic and environmental advantages of adopting Zero Tillage (No-Till) in wheat cultivation.",
      "modelAnswer": "Agronomic and Environmental Advantages of Zero Tillage in Wheat Cultivation:\n\n1. Advance Sowing Date (Escape Terminal Heat):\nIn the rice-wheat cropping belt, conventional seedbed preparation requires 10 to 15 days for multiple plowing and harrowing passes. Zero tillage allows wheat to be sown immediately following combine-harvested paddy. Advancing sowing by 10 to 14 days ensures that grain filling occurs before scorching summer temperatures arrive in March, preventing yield losses from terminal heat stress.\n\n2. Massive Diesel Fuel and Energy Savings:\nConventional tillage consumes 35 to 45 liters of diesel per hectare across 4 to 6 plowing operations. Zero-till seed drilling completes sowing in a single field pass, using only 6 to 8 liters of diesel per hectare\u2014a fuel saving of over 75%.\n\n3. Conservation of Soil Moisture and Organic Carbon:\nUndisturbed crop residue mulch acts as an insulating barrier against solar radiation, reducing soil water evaporation by 30% to 40% and saving the first pre-sowing irrigation. Minimizing soil disturbance also slows organic carbon oxidation, promoting carbon sequestration.\n\n4. Weed Suppression (Specifically *Phalaris minor*):\n*Phalaris minor* (canary grass) seeds require light exposure to break dormancy. Zero tillage leaves weed seeds buried or covered under thick standing straw where they fail to germinate, reducing weed infestation by 40% to 60%.",
      "outlinePoints": [
        "Advancing wheat sowing by 10-14 days to escape March terminal heat stress",
        "Fuel savings exceeding 75% (6-8 L/ha vs 35-45 L/ha)",
        "Moisture conservation via residue mulch and elimination of pre-sowing irrigation",
        "Suppression of Phalaris minor weed seed germination"
      ]
    },
    {
      "id": "SOL223-U2-SUB12",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "questionText": "Define Specific Draft of soil. What soil and implement factors govern its magnitude?",
      "modelAnswer": "Specific Draft in Tillage Mechanics:\n\n1. Definition:\nSpecific Draft (also termed unit draft) is the draft force required per unit cross-sectional area of the tilled furrow slice. It is mathematically expressed as:\nSpecific Draft (kgf/cm\u00b2 or N/cm\u00b2) = Total Draft Force (kgf or N) / (Furrow Width * Furrow Depth in cm\u00b2)\nIn SI units, it is expressed in kiloPascals (kPa) or N/cm\u00b2.\n\n2. Factors Governing Specific Draft:\n- Soil Texture & Cohesion: Heavy black cotton soils and dense clay soils exhibit high cohesion and internal friction, resulting in high specific draft (0.80 to 1.30 kgf/cm\u00b2). Coarse sandy soils have low cohesion and low specific draft (0.20 to 0.35 kgf/cm\u00b2).\n- Soil Moisture Content: Specific draft is highest in bone-dry, sun-baked soils (due to cementation) and in excessively wet saturated soils (due to soil-metal adhesion and suction). It reaches a minimum at optimal friable tillage moisture (near plastic limit).\n- Forward Operating Speed: As tractor speed increases, kinetic acceleration of the soil slice increases, raising specific draft by 15% to 30% for speeds between 3 and 7 km/h.\n- Implement Geometry & Sharpness: Dulling of the share cutting edge increases specific draft by up to 40%. Highly polished mouldboards that scour cleanly exhibit lower specific draft than rusted surfaces.",
      "outlinePoints": [
        "Mathematical definition and units of Specific Draft (kgf/cm\u00b2 or kPa)",
        "Influence of soil texture: sandy (0.2-0.35) vs heavy clay (0.8-1.3 kgf/cm\u00b2)",
        "Effect of soil moisture: minimization at optimal friable consistency",
        "Influence of tractor operating speed on kinetic soil acceleration",
        "Role of tool sharpness, curvature, and scouring polish"
      ]
    },
    {
      "id": "SOL223-U2-SUB13",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "questionText": "A tractor offset disc harrow has an effective working width of 2.1 meters. During field preparation, the tractor operates in 2nd low gear at a speed of 5.4 km/h. If the field efficiency of the operation is 78%, calculate: (a) Theoretical field capacity in ha/h, (b) Effective field capacity in ha/h, and (c) Time required to harrow an 8-hectare field.",
      "modelAnswer": "Given Parameters:\n- Effective working width (W) = 2.1 m\n- Travel speed (V) = 5.4 km/h\n- Field efficiency (eta) = 78% = 0.78\n- Total field area (A) = 8.0 hectares\n\nStep 1: Calculate Theoretical Field Capacity (TFC):\nTheoretical Field Capacity assumes 100% uninterrupted operation without turns or delays:\nTFC (ha/h) = (Working Width in m * Speed in km/h) / 10\nTFC = (2.1 * 5.4) / 10 = 11.34 / 10 = 1.134 ha/h\n\nStep 2: Calculate Effective Field Capacity (EFC):\nEffective Field Capacity accounts for time lost during headland turns, operator pauses, and overlaps:\nEFC (ha/h) = TFC * Field Efficiency\nEFC = 1.134 ha/h * 0.78 = 0.8845 ha/h (approx. 0.885 ha/h)\n\nStep 3: Calculate Time Required to Harrow 8 Hectares:\nTotal Time (hours) = Total Field Area (ha) / Effective Field Capacity (ha/h)\nTime = 8.0 ha / 0.8845 ha/h = 9.04 hours\nConverting fraction to minutes: 0.04 hours * 60 min/h = 2.4 minutes\nTotal time = 9 hours and 2.5 minutes.\n\nSummary of Final Results:\n(a) Theoretical Field Capacity = 1.134 ha/h\n(b) Effective Field Capacity = 0.885 ha/h\n(c) Total Time Required = 9.04 hours (approx. 9 hours 3 minutes)",
      "outlinePoints": [
        "Listing implement width, tractor speed, and field efficiency",
        "Calculation of Theoretical Field Capacity (1.134 ha/h)",
        "Computation of Effective Field Capacity with 78% efficiency (0.885 ha/h)",
        "Determination of total operational hours for an 8 ha field (9.04 hours)",
        "Conversion of decimal hours to hours and minutes"
      ]
    },
    {
      "id": "SOL223-U2-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "questionText": "Explain the causes and consequences of Side Draft in a tractor-implement system, and describe how it is corrected during plough hitching.",
      "modelAnswer": "Side Draft in Tractor-Plough Systems:\n\n1. Cause of Side Draft:\nSide draft occurs when the tractor's Center of Pull (the longitudinal centerline of the tractor halfway between the rear drive wheels) does not lie along the same vertical plane as the implement's Center of Resistance (the point where soil cutting and turning forces balance on the plough). This misalignment is common when narrow tractors pull wide multi-bottom ploughs, forcing the hitch drawbar to pull at an angle.\n\n2. Adverse Operational Consequences:\n- Steering Veer: The lateral force component pulls the front wheels sideways, forcing the operator to continually fight the steering wheel to prevent drifting into the furrow.\n- Excessive Tire Wear: Severe scrubbing occurs on rear drive tires as they skid laterally across the soil.\n- Increased Fuel Consumption & Draft: Side thrust forces the plough landside hard against the furrow wall, multiplying sliding friction and elevating draft.\n\n3. Engineering Correction & Hitch Adjustment:\n- Adjusting Tractor Wheel Tread Width: Widening or narrowing rear wheel spacing so that the inner tire walls align with the furrow edge.\n- Cross-Shaft Rotation: Rotating the implement's hitch cross-shaft shifts the plough laterally until the line of pull passes through the hitch center.\n- Proper Horizontal Hitch Alignment: Ensuring the hitch point on the drawbar falls precisely on the straight line connecting the tractor center of pull and the plough center of resistance.",
      "outlinePoints": [
        "Definition and root cause: misalignment of Center of Pull and Center of Resistance",
        "Operational defects: steering veer, lateral tire scrub, increased draft",
        "Adjustment 1: tractor wheel tread width modification",
        "Adjustment 2: rotation of implement three-point hitch cross-shaft",
        "Adjustment 3: alignment along the true line of draft"
      ]
    },
    {
      "id": "SOL223-U2-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "questionText": "Compare a One-Way Mouldboard Plough with a Two-Way (Reversible) Mouldboard Plough in terms of field efficiency, dead furrows, and operational economics.",
      "modelAnswer": "One-Way vs Two-Way (Reversible) Mouldboard Plough:\n\n1. Construction & Mechanism:\n- One-Way MB Plough: Features bottoms that throw soil in only one direction (standardly to the right). The tractor must turn in loops on headlands using circuitous plowing patterns (gathering or casting).\n- Two-Way Reversible Plough: Features two sets of opposing bottoms (right-hand and left-hand) mounted on a rotatable longitudinal beam. A hydraulic turnover cylinder rolls the beam 180\u00b0 at the end of each pass, allowing the return pass to throw soil in the same direction.\n\n2. Dead Furrows and Back Furrows:\n- One-Way Plough: Creates multiple elevated ridges (back furrows) and open drainage depressions (dead furrows) across the field, disrupting field leveling, impeding irrigation water flow, and requiring grading passes.\n- Two-Way Reversible Plough: Eliminates all dead furrows and back furrows completely, turning all furrow slices in one direction and leaving a smooth, flat field surface.\n\n3. Field Efficiency & Fuel Consumption:\n- One-Way Plough: Field efficiency is lower (70-75%) due to extensive non-productive travel across headlands when gathering and casting.\n- Two-Way Plough: Field efficiency is higher (82-88%); the tractor simply spins 180\u00b0 at the furrow edge and drops the opposing bottoms, saving 15-20% in tractor time and diesel.\n\n4. Economics & Capital Investment:\nTwo-way ploughs are heavier and 50-70% more expensive due to dual bottoms and hydraulic turnover mechanisms, requiring larger tractor lifting capacities.",
      "outlinePoints": [
        "Structural design: single bottom set vs rotatable dual opposing bottom sets",
        "Field surface profile: formation of dead furrows vs perfectly flat surface",
        "Field efficiency comparison (70-75% vs 82-88%) and reduced headland travel",
        "Fuel economy benefits of back-and-forth plowing",
        "Capital cost and tractor hydraulic lift capacity requirements"
      ]
    },
    {
      "id": "SOL223-U2-SUB16",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)",
      "questionText": "Discuss the physical, chemical, and biological impacts of intensive conventional tillage on soil health. Contrast this with long-term conservation agriculture practices.",
      "modelAnswer": "Impact of Conventional vs Conservation Tillage on Soil Health:\n\n1. Physical Impacts on Soil Structure:\n- Conventional Tillage: Repeated deep plowing and harrowing pulverizes natural soil aggregates, disrupting macro-aggregate structure. Intense mechanical shearing exposes bare soil to rain impact, causing surface slaking, dispersion, and crusting. Tractor traffic compacts the subsoil, forming an impermeable plow pan (hardpan) at 15-20 cm depth that limits water infiltration and induces waterlogging.\n- Conservation Tillage: Retaining >30% crop residue protects the soil surface from raindrop impact. Undisturbed root channels and earthworm burrows form continuous biopores that enhance water infiltration by 2 to 4 times and reduce erosion by up to 90%.\n\n2. Chemical & Organic Carbon Dynamics:\n- Conventional Tillage: Inverting soil exposes protected organic matter to intense solar radiation and high oxygen levels. Aerobic microbial oxidation accelerates, rapidly releasing carbon dioxide and depleting Soil Organic Carbon (SOC) from typical virgin levels of 1.5-2.0% down to <0.4% in tropical soils, reducing cation exchange capacity (CEC).\n- Conservation Tillage: Minimal disturbance and continuous residue addition build SOC pools, sequestering 0.3 to 0.6 tonnes of carbon per hectare annually. This increases soil nutrient retention, buffers pH fluctuations, and enhances fertilizer use efficiency.\n\n3. Biological & Microbial Health:\n- Conventional Tillage: Mechanical shearing tears fungal mycorrhizal hyphal networks, desolating arbuscular mycorrhizal fungi (AMF) that assist phosphorus uptake. Earthworm populations drop by 70-80% due to physical trauma and exposure to predators.\n- Conservation Tillage: Undisturbed moist conditions beneath surface residue stimulate earthworms, beneficial rhizobacteria, and fungal hyphae. Microbial biomass carbon increases by 40-60%, enhancing biological disease suppression and natural soil nutrient recycling.",
      "outlinePoints": [
        "Physical degradation: aggregate destruction, crusting, and traffic-induced hardpans",
        "Physical conservation: residue shielding, biopore preservation, and erosion arrest",
        "Chemical degradation: rapid aerobic oxidation of Soil Organic Carbon (SOC)",
        "Chemical enhancement: SOC sequestration, increased CEC, and nutrient retention",
        "Biological contrast: destruction of mycorrhizal networks vs flourishing earthworm ecology"
      ]
    },
    {
      "id": "SOL223-U2-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement",
      "questionText": "Explain why puddling with a rotavator is considered superior to puddling with an indigenous plough or disc harrow in wetland paddy soils.",
      "modelAnswer": "Rotavator Puddling Mechanics in Wetland Paddy Production:\n\n1. Mechanics of Wetland Puddling:\nPuddling is the mechanical churning of soil at high moisture contents (above saturation) to break down soil aggregates into a uniform, dispersed colloidal suspension. The objective is to destroy continuous macro-pores and create a dense, impervious subsurface mud layer (puddle sole) that minimizes water percolation.\n\n2. Why Rotavator Puddling is Superior:\n- High Degree of Soil Dispersion: The rotavator's high-speed rotating L-blades (200-250 rpm) impart intense shearing and impact energy to submerged soil, dispersing clay platelets rapidly. A single rotavator pass achieves a puddling index of 75% to 85%, whereas an indigenous plough requires 3 to 4 passes to achieve only 50-60%.\n- Uniform Shallow Impervious Layer: The rotavator creates a uniform puddle sole at a consistent 10-12 cm depth, reducing deep percolation water losses by 60% to 75% without creating the excessively deep mud ruts that bog down transplanting machinery.\n- Superior Residue and Weed Incorporation: The high-speed rotor chops and buries green manure crops, weeds, and previous crop stubble completely beneath the water layer, accelerating anaerobic decomposition.\n- Operational Efficiency: A tractor-mounted rotavator puddles 0.35 to 0.50 hectares per hour in a single or double pass, whereas animal-drawn Desi ploughs require 25-30 hours per hectare, drastically reducing water usage during the critical puddling window.",
      "outlinePoints": [
        "Agronomic objective of puddling: soil aggregate dispersion and percolation reduction",
        "Superior clay dispersion index (75-85%) from high-speed blade impact",
        "Uniform depth of puddle sole without excessive sinkage",
        "Complete chopping and burial of green manure and weeds",
        "High field capacity (0.4 ha/h) saving critical irrigation water"
      ]
    },
    {
      "id": "SOL223-U2-SUB18",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Harrows (disc harrow, spike tooth, spring tooth) and cultivators",
      "questionText": "What is a Gang Angle in a disc harrow? Explain its relationship with depth of penetration and draft.",
      "modelAnswer": "Gang Angle in Disc Harrows:\n\n1. Definition:\nThe Gang Angle is the horizontal acute angle formed between the central longitudinal axis of the disc gang shaft (arbor bolt) and a line perpendicular to the direction of tractor travel. In most modern tractor-mounted and trailed disc harrows, the gang angle can be manually adjusted from 0\u00b0 up to 25\u00b0.\n\n2. Relationship with Depth of Penetration:\n- At 0\u00b0 Gang Angle: The disc faces roll parallel to travel, slicing through soil without moving it laterally. Penetration depth is minimal.\n- As Gang Angle Increases (15\u00b0 to 22\u00b0): The concave face of each disc attacks the soil at an aggressive angle, forcing the circular cutting edge to wedge deeper into the ground. Penetration depth increases proportionally with gang angle up to roughly 22\u00b0.\n\n3. Relationship with Implement Draft & Pulverization:\nIncreasing the gang angle forces discs to push, shatter, and throw a larger volume of soil laterally, which improves clod pulverization and weed eradication. However, implement draft increases significantly with gang angle. Farmers set low gang angles (10\u00b0-12\u00b0) for light weed eradication and high gang angles (18\u00b0-24\u00b0) for heavy clod breaking in dry ploughed fields.",
      "outlinePoints": [
        "Definition of Gang Angle relative to travel line perpendicular",
        "Adjustable range in agricultural disc harrows (0\u00b0 to 25\u00b0)",
        "Direct correlation: increasing gang angle increases penetration depth",
        "Effect on lateral soil throw, weed uprooting, and clod pulverization",
        "Direct draft penalty and recommended settings for varied soil tasks"
      ]
    },
    {
      "id": "SOL223-U2-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments",
      "questionText": "A 4-bottom tractor MB plough is operating at 18 cm depth with a cut width of 30 cm per bottom. The total draft measured is 1296 kgf at a travel speed of 5.0 km/h. Determine: (a) Total cross-sectional area of soil cut, (b) Soil specific draft, and (c) Drawbar power in metric horsepower and kilowatts.",
      "modelAnswer": "Given Parameters:\n- Number of bottoms (n) = 4\n- Width per bottom (w) = 30 cm\n- Tillage depth (d) = 18 cm\n- Measured total draft (D) = 1296 kgf\n- Tractor travel speed (V) = 5.0 km/h\n\nStep 1: Calculate Total Cross-Sectional Area (A):\nTotal cutting width (W) = 4 * 30 cm = 120 cm\nTotal area (A) = Total Width * Depth\nA = 120 cm * 18 cm = 2160 cm\u00b2\n\nStep 2: Calculate Soil Specific Draft (sigma):\nSpecific Draft = Total Draft / Total Area\nsigma = 1296 kgf / 2160 cm\u00b2 = 0.60 kgf/cm\u00b2\nIn SI units (kPa):\nsigma = (0.60 kgf/cm\u00b2 * 9.80665 N/kgf * 10,000 cm\u00b2/m\u00b2) / 1000 = 58.84 kPa\n\nStep 3: Calculate Drawbar Power in Metric Horsepower (DBHP):\nDBHP = (Draft in kgf * Speed in km/h) / 270\nDBHP = (1296 * 5.0) / 270\nDBHP = 6480 / 270 = 24.0 metric hp\n\nStep 4: Calculate Drawbar Power in Kilowatts (kW):\nTotal Draft in kN = (1296 kgf * 9.80665 N/kgf) / 1000 = 12.71 kN\nPower (kW) = (Draft in kN * Speed in km/h) / 3.6\nPower (kW) = (12.71 kN * 5.0 km/h) / 3.6 = 63.55 / 3.6 = 17.65 kW\nAlternatively: 24.0 metric hp * 0.7355 kW/hp = 17.65 kW\n\nFinal Answers:\n(a) Total Furrow Cross-Sectional Area = 2160 cm\u00b2\n(b) Soil Specific Draft = 0.60 kgf/cm\u00b2 (58.84 kPa)\n(c) Drawbar Power = 24.0 metric hp (17.65 kW)",
      "outlinePoints": [
        "Listing plough bottom geometry, total draft, and speed",
        "Calculation of total furrow cross-sectional area (2160 cm\u00b2)",
        "Computation of soil specific draft (0.60 kgf/cm\u00b2 / 58.84 kPa)",
        "Determination of Drawbar Horsepower (24.0 metric hp)",
        "Determination of Drawbar Power in SI units (17.65 kW)"
      ]
    },
    {
      "id": "SOL223-U2-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements",
      "questionText": "Describe the inverted-T furrow opener on a zero-till seed drill and explain why it is superior to a shoe or shovel opener in residue-covered fields.",
      "modelAnswer": "The Inverted-T Furrow Opener in Conservation Agriculture:\n\n1. Construction & Geometry:\nThe inverted-T furrow opener consists of a vertical hollow shank made of hardened alloy steel fitted with two small horizontal wings projecting laterally from the bottom edge, forming an upside-down 'T' cross-section. The leading vertical blade has a narrow, sharp profile (only 8 to 12 mm thick).\n\n2. Operational Mechanism:\nAs the zero-till drill advances through undisturbed crop stubble, the sharp vertical shank slices through surface residue with minimal soil disturbance. The lower horizontal wings gently lift and fracture the subsurface soil, creating a micro-cavity (an inverted-T shaped slot) beneath the surface without inverting or shattering the surrounding soil structure.\n\n3. Superiority Over Shoe and Shovel Openers:\n- Prevention of Stubble Clogging: Shovel openers have wide, blunt faces that push loose straw forward, quickly forming a bulldozing pile that clogs the drill. The slender inverted-T shank slices cleanly through trash without dragging.\n- Optimal Seed-Soil Contact & Moisture Conservation: The seed and fertilizer are deposited into the subterranean chamber beneath the horizontal shelf. Soil settles back over the slot, sealing moisture inside while preventing seed desiccation.\n- Minimal Energy Requirement: The narrow frontal cross-section displaces less than 15% of the soil volume tilled by a shovel opener, reducing draft force and tractor fuel consumption by over 50%.",
      "outlinePoints": [
        "Geometric design: narrow vertical shank with horizontal bottom wings",
        "Mechanism of micro-cavity creation beneath surface residue",
        "Advantage 1: clean trash slicing without bulldozing or clogging",
        "Advantage 2: superior subterranean seed microclimate and moisture retention",
        "Advantage 3: low draft requirement saving >50% tractor power"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL223-U2-FC01",
      "front": "What minimum surface residue cover defines Conservation Tillage?",
      "back": "At least 30% of the soil surface covered with crop residue after planting.",
      "hint": "Thirty percent threshold",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)"
    },
    {
      "id": "SOL223-U2-FC02",
      "front": "Which part of the Mouldboard plough bottom makes the horizontal cut?",
      "back": "The share makes the horizontal cutting pass separating the furrow slice from the subsoil.",
      "hint": "Share penetrates horizontally",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments"
    },
    {
      "id": "SOL223-U2-FC03",
      "front": "What is the structural function of the frog on an MB plough?",
      "back": "The central casting/forging to which the share, mouldboard, and landside are rigidly bolted.",
      "hint": "Central mounting block",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments"
    },
    {
      "id": "SOL223-U2-FC04",
      "front": "What is the primary operational purpose of Vertical Suction in an MB plough?",
      "back": "Ensures the plough penetrates downward into the soil to reach and maintain set working depth (typically 3-5 mm).",
      "hint": "Penetration depth clearance",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments"
    },
    {
      "id": "SOL223-U2-FC05",
      "front": "What is the primary operational purpose of Horizontal Suction in an MB plough?",
      "back": "Keeps the landside firmly seated against the unploughed furrow wall to maintain set furrow width (typically 3-5 mm).",
      "hint": "Furrow width clearance",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments"
    },
    {
      "id": "SOL223-U2-FC06",
      "front": "What is the standard disc angle range in an agricultural disc plough?",
      "back": "40\u00b0 to 45\u00b0 between the disc cutting edge and travel direction.",
      "hint": "Forty to forty-five degrees",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers"
    },
    {
      "id": "SOL223-U2-FC07",
      "front": "What is the standard tilt angle range in a standard disc plough?",
      "back": "15\u00b0 to 25\u00b0 from the vertical plane.",
      "hint": "Fifteen to twenty-five degrees",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers"
    },
    {
      "id": "SOL223-U2-FC08",
      "front": "Why is a disc plough preferred over an MB plough in stony, root-infested soils?",
      "back": "Its rotating discs roll smoothly over rocks and tree roots without shearing bolts or bending frames.",
      "hint": "Discs roll over underground obstructions",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers"
    },
    {
      "id": "SOL223-U2-FC09",
      "front": "What is the operating depth range of an agricultural subsoiler?",
      "back": "45 to 75 cm, designed to fracture traffic hardpans without inverting soil.",
      "hint": "Deep tillage: 45-75 cm",
      "syllabusTopic": "Subsoilers and chisel ploughs for deep tillage and hardpan shattering"
    },
    {
      "id": "SOL223-U2-FC10",
      "front": "What is the mathematical definition of Specific Draft of soil?",
      "back": "Specific Draft = Total Draft (kgf) / Furrow Cross-Sectional Area (cm\u00b2).",
      "hint": "Draft divided by furrow cross-sectional area",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments"
    },
    {
      "id": "SOL223-U2-FC11",
      "front": "What is the formula for the Kinematic Index (lambda) of a rotavator?",
      "back": "lambda = (omega * R) / V_f, where omega is rotor angular velocity, R is rotor radius, and V_f is forward speed.",
      "hint": "Ratio of blade tip speed to forward speed",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement"
    },
    {
      "id": "SOL223-U2-FC12",
      "front": "What happens if a rotavator's kinematic index (lambda) is less than or equal to 1.0?",
      "back": "No cutting loop forms; blades drag through soil like rigid tines, causing structural overload and engine stall.",
      "hint": "Trochoid loop fails to cut",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement"
    },
    {
      "id": "SOL223-U2-FC13",
      "front": "Which rotavator blade design is most effective in weed-infested and trashy soils?",
      "back": "L-shaped blades, because their geometry prevents weeds and vines from wrapping around the rotor shaft.",
      "hint": "L-shaped blade",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement"
    },
    {
      "id": "SOL223-U2-FC14",
      "front": "What furrow opener is standardly used on zero-till drills for sowing in heavy stubble?",
      "back": "Inverted-T furrow opener, which cuts a narrow slot beneath surface residue without clogging.",
      "hint": "Inverted-T opener",
      "syllabusTopic": "Conservation tillage equipment: zero-till seed drill and strip-till implements"
    },
    {
      "id": "SOL223-U2-FC15",
      "front": "What furrow shape is produced by the traditional Indian indigenous (Desi) plough?",
      "back": "V-shaped furrow without soil inversion, leaving triangular uncut soil ridges between adjacent passes.",
      "hint": "V-shaped profile",
      "syllabusTopic": "Indigenous ploughs (Desi plough) vs improved ploughs"
    },
    {
      "id": "SOL223-U2-FC16",
      "front": "What is the primary agronomic purpose of puddling in wetland rice cultivation?",
      "back": "To break soil aggregates into a slurry, creating an impermeable mud sole that reduces water percolation by 70-80%.",
      "hint": "Creates impermeable layer to stop water percolation",
      "syllabusTopic": "Objectives and classification of tillage (primary, secondary, minimum, conservation, zero tillage)"
    },
    {
      "id": "SOL223-U2-FC17",
      "front": "What is the function of the slip clutch in a rotavator PTO driveline?",
      "back": "Slips during shock overload (e.g., striking embedded boulders) to shield tractor PTO gears from failure.",
      "hint": "Friction overload protection",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement"
    },
    {
      "id": "SOL223-U2-FC18",
      "front": "What causes Side Draft in a tractor-plough system?",
      "back": "Misalignment between the tractor's Center of Pull and the plough's Center of Resistance.",
      "hint": "Center of pull vs center of resistance misalignment",
      "syllabusTopic": "Mouldboard (MB) plough: components, types, suction, forces, draft and adjustments"
    },
    {
      "id": "SOL223-U2-FC19",
      "front": "What is the typical operating speed of a rotavator rotor shaft?",
      "back": "200 to 250 rpm, reduced from standard 540 rpm PTO speed via internal gearing.",
      "hint": "200-250 rpm",
      "syllabusTopic": "Rotavators (rotary tillers): blades, kinematic index, rotor speed and power requirement"
    },
    {
      "id": "SOL223-U2-FC20",
      "front": "What is the tilt angle of a vertical disc plough (one-way disc harrow)?",
      "back": "0\u00b0 (discs are mounted vertically perpendicular to the ground).",
      "hint": "Zero degrees",
      "syllabusTopic": "Disc plough: types (standard and vertical), disc angle, tilt angle, penetration and scrapers"
    }
  ]
};
