import { UnitContent } from "./types";

export const unit5Content: UnitContent = {
  "unitNumber": 5,
  "title": "Irrigation, Spraying and Tractor Technology",
  "shortDescription": "Engineering dynamics of irrigation pumps, micro-irrigation systems, plant protection sprayers and nozzles, tractor transmission, three-point hitch hydraulics, and periodic maintenance.",
  "estimatedReadTimeMinutes": 26,
  "syllabusTopics": [
    "Irrigation pumps (centrifugal, submersible, turbine)",
    "Micro-irrigation (drip, sprinkler)",
    "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
    "Dusters (rotary, plunger, power operated) and aerosol generators",
    "Tractor \u2014 engine, transmission, hydraulic system",
    "Tractor maintenance; PTO; implement hitching systems"
  ],
  "notes": {
    "learningObjectives": [
      "Evaluate irrigation pump mechanics (centrifugal, submersible, turbine), Total Dynamic Head (TDH), cavitation dynamics, Net Positive Suction Head (NPSH), and hydraulic power formulas.",
      "Analyze micro-irrigation engineering (drip emitter hydraulics, filtration trains, Venturi fertigation) and sprinkler uniformity coefficients (Christiansen uniformity).",
      "Dissect plant protection spraying equipment, hydraulic nozzles (flat fan, hollow cone), droplet spectrum metrics (VMD, NMD), and spray drift physics.",
      "Examine agricultural tractor powertrain systems (dual clutches, synchromesh transmissions, differentials, final drive planetary reductions) and hydraulic draft/position control systems."
    ],
    "sections": [
      {
        "id": "sec-5-1",
        "heading": "1. Irrigation Pumps and Pumping Hydraulics",
        "content": "Pumps convert mechanical power into hydraulic energy to lift and pressurize water for agricultural irrigation.\n\n**Classification of Agricultural Pumps:**\n1. **Centrifugal Pump:** Standard surface pump. Fluid enters axially through the impeller eye and is accelerated radially outward by curved rotating vanes into a spiral volute casing, converting kinetic velocity into static pressure head. Practical suction lift is bounded by atmospheric pressure and water vapor pressure to roughly 6 to 7.5 meters at sea level.\n2. **Submersible Pump:** Close-coupled multi-stage centrifugal pump assembly integrated with a hermetically sealed electric motor, submerged directly inside deep tubewells (borewells). Eliminates suction lift limits and self-priming requirements; handles dynamic heads exceeding 100 to 250 meters.\n3. **Vertical Turbine Pump:** Multi-stage pump with impellers submerged beneath the water table driven by a surface motor via a long vertical line shaft inside the discharge column pipe.\n\n**Hydraulic Power and Efficiency Formulations:**\n- **Water Horsepower (WHP):** The theoretical hydraulic power delivered to the water stream:\nWHP (metric) = (Q * H) / 75\nwhere Q is discharge (L/s) and H is Total Dynamic Head (m). In SI units:\nP_hyd (kW) = (rho * g * Q * H) / 1000 = (9.81 * Q * H) / 1000, with Q in L/s and H in meters.\n- **Brake Horsepower (BHP):** Power required at the pump input shaft:\nBHP = WHP / eta_pump\nwhere eta_pump is pump mechanical-hydraulic efficiency (typically 65% to 80%).\n\n**Cavitation and Net Positive Suction Head (NPSH):**\nIf static pressure at any point inside the pump (notably the impeller eye) drops below the saturation vapor pressure of water at the operating temperature, localized boiling occurs, forming microscopic vapor bubbles. When these bubbles are swept into higher pressure zones of the impeller vanes, they violently collapse (implode), generating localized micro-jets with shock pressures exceeding 1000 MPa. This causes severe acoustic noise, severe pitting of impeller metal, and sudden loss of discharge capacity. To prevent cavitation, the **Net Positive Suction Head Available (NPSHA)** from the installation must exceed the **NPSH Required (NPSHR)** specified by the pump manufacturer by at least 0.5 to 1.0 meter.",
        "subsections": [
          {
            "subheading": "Components of Total Dynamic Head (TDH)",
            "content": "TDH represents the total equivalent head against which the pump must work:\nTDH = H_s + H_d + H_fs + H_fd + (V_d\u00b2 / 2g)\nwhere H_s is static suction lift, H_d is static discharge elevation, H_fs and H_fd are frictional head losses in suction and delivery piping, and V_d\u00b2 / 2g is delivery velocity head."
          }
        ]
      },
      {
        "id": "sec-5-2",
        "heading": "2. Micro-Irrigation Engineering: Drip and Sprinkler Systems",
        "content": "Micro-irrigation achieves water application efficiencies of 85% to 95% by applying water directly to the plant root zone at low pressures.\n\n**Drip (Trickle) Irrigation Subsystems:**\n1. *Control Head:* Includes backflow preventers, pressure regulators, and primary filtration.\n2. *Filtration Train:* Essential to prevent micro-orifice clogging:\n   - *Hydrocyclone (Sand Separator):* Centrifugally separates heavy suspended sand and silt particles from well water.\n   - *Media (Sand) Filter:* Deep silica sand bed (0.8-1.2 mm grain size) that traps organic debris, algae, and biological slimes.\n   - *Screen / Disc Filter:* Secondary barrier with 120-mesh (130-micron) synthetic discs or stainless steel screens that captures remaining fine particulate matter.\n3. *Fertigation Injectors:* Venturi injectors create a differential pressure vacuum that siphons concentrated fertilizer solution directly into pressurized irrigation lines, enabling simultaneous watering and nutrient delivery.\n4. *Emitters (Drippers):* Pressure-compensating (PC) labyrinth emitters maintain uniform discharge (typically 2.0 to 4.0 L/h) across operating pressure variations of 0.8 to 3.5 bar along long lateral runs.\n\n**Sprinkler Irrigation Systems:**\nSimulates natural rainfall by spraying pressurized water (2.0 to 4.5 bar) through impact rotating nozzles. Uniformity is quantified by the **Christiansen Uniformity Coefficient (CU)**:\nCU (%) = (1 - (Sum |x - x_bar| / (n * x_bar))) * 100\nwhere x is catch-can precipitation depth, x_bar is mean depth, and n is number of collectors. A well-designed system maintains CU > 85%.",
        "subsections": [
          {
            "subheading": "Drip vs Sprinkler Irrigation Operational Trade-Offs",
            "content": "Comparative performance metrics:",
            "table": {
              "headers": [
                "Engineering Parameter",
                "Drip Irrigation",
                "Sprinkler Irrigation"
              ],
              "rows": [
                [
                  "Operating Pressure",
                  "1.0 - 2.0 bar (low)",
                  "2.5 - 4.5 bar (medium-high)"
                ],
                [
                  "Water Application Efficiency",
                  "90% - 95%",
                  "75% - 85%"
                ],
                [
                  "Evaporation & Wind Drift Loss",
                  "Virtually zero (sub-canopy)",
                  "High (up to 15-20% in hot windy climates)"
                ],
                [
                  "Filtration Strictness",
                  "Extreme (120-mesh mandatory)",
                  "Moderate (screen filter sufficient)"
                ],
                [
                  "Suitability for Fertigation",
                  "Exceptional (direct root placement)",
                  "Moderate (foliar contact can scorch leaves)"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-5-3",
        "heading": "3. Plant Protection Machinery: Sprayers, Nozzles, and Dusters",
        "content": "Sprayers atomize chemical pesticide formulations into droplets for uniform distribution over target plant foliage.\n\n**Sprayer Classifications:**\n1. *Hydraulic Sprayers:* Liquid pressure forces spray through small nozzle orifices. Includes manual knapsack sprayers (piston or diaphragm pump developing 2 to 4 bar), foot sprayers (pedal-lever operated, 10 to 15 bar for high trees), rocking sprayers, and tractor-mounted boom sprayers.\n2. *Pneumatic (Air-Assisted) Sprayers:* A high-velocity fan air blast shears low-pressure liquid into fine mist and carries droplets into dense orchard canopies.\n\n**Hydraulic Spray Nozzles:**\n- **Flat Fan Nozzle:** Produces a tapered flat spray sheet with elliptical impact pattern; standard for tractor boom broadcast herbicide applications where overlapping patterns achieve uniform deposition.\n- **Hollow Cone Nozzle:** Liquid enters through tangential swirl slots, forming a rotating conical sheet with droplets concentrated around the perimeter; ideal for insecticide and fungicide penetration in dense crop foliage.\n- **Solid (Full) Cone Nozzle:** Features an internal swirl plate that fills the entire conical pattern uniformly; used for spot spraying and drenching.\n- **Floodjet (Deflector) Nozzle:** Wide flat spray (120\u00b0-140\u00b0) at ultra-low pressure (<1.5 bar) producing large coarse droplets; standard for drift-free liquid fertilizer and herbicide banding.\n\n**Droplet Spectrum and Drift:**\nDroplet sizing is quantified by Volume Median Diameter (VMD, D_v0.5) and Number Median Diameter (NMD). Droplets smaller than 100 microns are highly susceptible to wind drift and evaporative loss; droplets larger than 350 microns tend to bounce off waxy leaf surfaces and roll to the ground. Optimal agricultural foliar spraying maintains VMD between 150 and 250 microns.\n\n**Dusters:**\nDistribute dry powder chemical dusts using rotary fans or reciprocating bellows. Venturi feed funnels inject dry powder into the airstream, though dusting suffers from severe wind drift compared to liquid spraying.",
        "subsections": [
          {
            "subheading": "Calibration Formula for Field Sprayers",
            "content": "Application rate in liters per hectare is calculated as:\nApplication Rate (L/ha) = (600 * Q_total) / (W * V)\nwhere Q_total is total boom discharge (L/min), W is boom swath width (m), and V is forward tractor speed (km/h)."
          }
        ]
      },
      {
        "id": "sec-5-4",
        "heading": "4. Tractor Powertrain Systems: Transmission and Engine Auxiliary Architecture",
        "content": "The agricultural tractor driveline must transmit massive engine torque across a wide spectrum of speeds (1.5 km/h for heavy deep plowing to 30 km/h for highway haulage):\n\n**Dual Clutch Assembly:**\nTractors incorporate dual-clutch mechanisms housing two concentric friction plates: the primary transmission clutch plate (controls ground drive) and the independent secondary PTO clutch plate. Depressing the clutch pedal halfway disengages ground drive while keeping the PTO shaft spinning; depressing fully disengages both.\n\n**Transmission Gearbox Configurations:**\n1. *Sliding Mesh:* Spur gears slide along splined shafts into engagement; requires stopping tractor to shift gears.\n2. *Constant Mesh:* Helical gears remain continuously in mesh; shifting occurs via sliding dog clutches.\n3. *Synchromesh Gearbox:* Conical synchronizer rings equalize rotational speeds of mating gears before engagement, enabling smooth on-the-move shifting.\n\n**Differential and Differential Lock:**\nThe differential allows the outer drive wheel to rotate faster than the inner wheel when turning corners. However, if one wheel enters a slippery mud patch, the differential spins that wheel uselessly while delivering zero torque to the wheel with traction. The **differential lock** mechanically pins both axle shafts together into a solid axle, locking both wheels to turn at identical speeds to pull the tractor out of mud.\n\n**Final Drive Reductions:**\nHigh-ratio planetary gear sets or bull gear-and-pinion reductions located inside the rear wheel hubs provide final torque multiplication and speed reduction, relieving transmission shafts from carrying peak wheel axle torque.",
        "subsections": [
          {
            "subheading": "Tractor Engine Subsystems",
            "content": "Key auxiliary systems:",
            "keyPoints": [
              "Air Induction: Heavy-duty oil bath air cleaners or two-stage dry cyclonic paper element filters with aspirator scavenge tubes that remove 99.9% of abrasive silica dust.",
              "Fuel Injection: Inline multi-element injection pumps, rotary distributor pumps, or modern Common Rail Direct Injection (CRDI) generating 1600+ bar pressure.",
              "Cooling System: Pressurized radiator with centrifugal water pump, thermostatic bypass valve (82\u00b0-88\u00b0C), and expansion recovery tank.",
              "Lubrication: Full-pressure forced feed lubrication driven by an internal gear/trochoid oil pump with full-flow spin-on filters."
            ]
          }
        ]
      },
      {
        "id": "sec-5-5",
        "heading": "5. Tractor Hydraulics, Three-Point Hitching, and Maintenance",
        "content": "The tractor hydraulic system provides muscle for lifting, lowering, and dynamically regulating mounted implements:\n\n**Three-Point Hitch Architecture:**\nConsists of two lower draft links (carrying the implement weight) and one adjustable upper top link, forming a kinematic linkage compliant with ISO / BIS standards (Category I for up to 45 hp; Category II for 45 to 100 hp).\n\n**Hydraulic Control Modes:**\n1. **Position Control:** The hydraulic control lever sets and maintains the implement at a fixed vertical height or depth relative to the tractor chassis, regardless of soil resistance. Essential for seed drills, sprayers, and fertilizer spreaders.\n2. **Draft (Automatic Depth) Control:** The hydraulic valve senses compressive or tensile forces exerted on the top link (or lower draft sensing pins) by the soil resistance against the plough. When the plough encounters hard compacted soil, the increased draft force signals the hydraulic spool valve to raise the implement slightly, transferring implement weight onto the rear tractor wheels (weight transfer). This boosts traction and prevents engine stall. When draft decreases, the implement lowers back to set depth.\n3. **Mixed Control:** Blends position and draft signals for undulating field contours.\n\n**Power Take-Off (PTO) Architecture:**\nTransmits rotational power at standard 540 \u00b1 10 rpm (6 splines, 34.9 mm diameter) or 1000 \u00b1 25 rpm (21 splines). Types include Transmission PTO (stops when main clutch is pressed), Live PTO (driven through dual clutch), and Independent PTO (controlled by dedicated hydraulic clutch pack completely independent of vehicle travel).\n\n**Periodic Tractor Maintenance Schedules:**\n- Daily (10 Hours): Check engine oil level, clean pre-cleaner bowl, grease steering kingpins, drain fuel water trap.\n- 50 Hours: Clean air filter, check fan belt tension, lubricate three-point hitch linkages.\n- 250 Hours: Change engine oil and replace oil filter, clean fuel sediment bowl, check battery electrolyte.\n- 500 Hours: Replace fuel filter elements, inspect brake and clutch pedal free play, clean hydraulic suction strainer.\n- 1000 Hours: Drain and replace transmission/hydraulic oil, flush radiator coolant, service fuel injectors.",
        "subsections": [
          {
            "subheading": "Three-Point Hitch Category Specifications",
            "content": "Standardized hitch pins dimensions:",
            "table": {
              "headers": [
                "Parameter",
                "Category I (Up to 45 hp)",
                "Category II (45 to 100 hp)"
              ],
              "rows": [
                [
                  "Lower Link Pin Diameter",
                  "22.2 mm (7/8 in)",
                  "28.6 mm (1-1/8 in)"
                ],
                [
                  "Top Link Pin Diameter",
                  "19.0 mm (3/4 in)",
                  "25.4 mm (1.0 in)"
                ],
                [
                  "Lower Hitch Point Spread",
                  "683 mm (26.9 in)",
                  "825 mm (32.5 in)"
                ],
                [
                  "Standard Lift Capacity",
                  "1000 - 1500 kgf",
                  "1800 - 2500 kgf"
                ]
              ]
            }
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Water Horsepower WHP = (Q * H) / 75 (metric) or P_hyd (kW) = (9.81 * Q * H) / 1000; cavitation occurs when pressure drops below vapor pressure (NPSHA < NPSHR).",
      "Drip irrigation achieves 90-95% efficiency using multi-stage filtration (hydrocyclone + media + screen) and pressure-compensating emitters.",
      "Flat fan nozzles suit broadcast herbicide spraying, while hollow cone nozzles maximize insecticide foliage penetration.",
      "Tractor differential lock rigidly locks both rear axles to pull out of mud; final drive planetary sets provide torque multiplication.",
      "Draft control automatically raises the plough during high soil resistance surges, transferring weight to rear tires to prevent stall."
    ],
    "commonMisunderstandings": [
      {
        "myth": "A centrifugal pump can lift water from any suction depth as long as the motor is powerful enough.",
        "reality": "Suction lift is bounded by atmospheric pressure (~10.33 m theoretical); in practical agricultural installations, friction and vapor pressure limit suction lift to strictly 6.0 to 7.5 meters before severe cavitation occurs."
      },
      {
        "myth": "Operating the tractor with the differential lock engaged on hard concrete highways improves straight-line stability.",
        "reality": "Engaging the differential lock on hard roads prevents wheels from differentiating during turns, making steering impossible and risking catastrophic axle or differential gear breakage."
      },
      {
        "myth": "Increasing sprayer boom pressure is the best way to double the application rate (L/ha).",
        "reality": "Discharge is proportional to the square root of pressure; doubling spray rate requires a 4-fold increase in pressure, which shatters droplets into drift-prone aerosols (<100 microns)."
      }
    ],
    "summary": "Unit 5 details agricultural irrigation pumps, micro-irrigation hydraulics, plant protection sprayers, and tractor engineering systems. It analyzes centrifugal and submersible pump dynamics, NPSH and cavitation, drip/sprinkler design, hydraulic spray nozzles, tractor transmission mechanics (dual clutches, differentials), three-point hitch hydraulics (draft and position control), and periodic maintenance protocols."
  },
  "mcqs": [
    {
      "id": "SOL223-U5-MCQ01",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Easy",
      "questionText": "What is the theoretical maximum suction lift of a surface centrifugal pump at sea level under standard atmospheric pressure?",
      "options": {
        "A": "3.5 meters",
        "B": "7.0 meters",
        "C": "10.33 meters",
        "D": "15.0 meters"
      },
      "correctOption": "C",
      "explanation": "Standard atmospheric pressure (1.033 kg/cm\u00b2 or 101.3 kPa) supports a theoretical water column of 10.33 meters."
    },
    {
      "id": "SOL223-U5-MCQ02",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Easy",
      "questionText": "In practical field installations, what is the maximum recommended suction lift for a surface centrifugal water pump to avoid cavitation?",
      "options": {
        "A": "6.0 to 7.5 meters",
        "B": "10.0 to 12.0 meters",
        "C": "15.0 to 18.0 meters",
        "D": "25.0 to 30.0 meters"
      },
      "correctOption": "A",
      "explanation": "Due to friction, pipe bends, and water vapor pressure, practical suction lift cannot exceed 6.0 to 7.5 meters."
    },
    {
      "id": "SOL223-U5-MCQ03",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Easy",
      "questionText": "Which irrigation pump operates with both the multi-stage pump and hermetically sealed electric motor submerged in the borewell?",
      "options": {
        "A": "Surface centrifugal pump",
        "B": "Submersible pump",
        "C": "Jet pump",
        "D": "Air lift pump"
      },
      "correctOption": "B",
      "explanation": "Submersible pumps are close-coupled motor-pump units installed directly beneath the water level in deep borewells."
    },
    {
      "id": "SOL223-U5-MCQ04",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Easy",
      "questionText": "Which micro-irrigation system achieves the highest water application efficiency (90% to 95%) by delivering water directly to root zones?",
      "options": {
        "A": "Border strip irrigation",
        "B": "Sprinkler irrigation",
        "C": "Drip (trickle) irrigation",
        "D": "Furrow flooding"
      },
      "correctOption": "C",
      "explanation": "Drip irrigation applies water slowly and directly at the plant root zone, minimizing evaporation and percolation losses."
    },
    {
      "id": "SOL223-U5-MCQ05",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Easy",
      "questionText": "What is the primary function of a hydrocyclone (sand separator) in a drip irrigation filtration train?",
      "options": {
        "A": "Kill fungal spores with UV light",
        "B": "Centrifugally separate suspended inorganic sand and heavy silt particles from well water",
        "C": "Dissolve solid fertilizer pellets",
        "D": "Add chlorine to water"
      },
      "correctOption": "B",
      "explanation": "Centrifugal swirl in the hydrocyclone spins dense sand particles outward to settle in a collection chamber."
    },
    {
      "id": "SOL223-U5-MCQ06",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Easy",
      "questionText": "Which hydraulic spray nozzle is standardly recommended for broadcast herbicide application on tractor boom sprayers?",
      "options": {
        "A": "Hollow cone nozzle",
        "B": "Flat fan nozzle",
        "C": "Rotary atomizing disc",
        "D": "Solid stream nozzle"
      },
      "correctOption": "B",
      "explanation": "Flat fan nozzles produce a tapered flat fan spray pattern that provides uniform coverage when overlapped along a boom."
    },
    {
      "id": "SOL223-U5-MCQ07",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Easy",
      "questionText": "Which nozzle is preferred for applying contact insecticides and fungicides to achieve deep penetration into dense crop foliage?",
      "options": {
        "A": "Flat fan nozzle",
        "B": "Hollow cone nozzle",
        "C": "Floodjet nozzle",
        "D": "Anvil deflector nozzle"
      },
      "correctOption": "B",
      "explanation": "Hollow cone nozzles produce fine, swirling droplets with multi-directional trajectory, providing thorough foliage penetration."
    },
    {
      "id": "SOL223-U5-MCQ08",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Easy",
      "questionText": "What is the standard pressure developed by a manual lever-operated knapsack sprayer during normal agricultural spraying?",
      "options": {
        "A": "0.5 to 1.0 bar",
        "B": "2.0 to 4.0 bar (approx. 30-60 psi)",
        "C": "15.0 to 20.0 bar",
        "D": "50.0 to 60.0 bar"
      },
      "correctOption": "B",
      "explanation": "Manual knapsack sprayers operate standardly between 2.0 and 4.0 bar pressure to deliver uniform droplet atomization."
    },
    {
      "id": "SOL223-U5-MCQ09",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Easy",
      "questionText": "What is the function of the differential lock in an agricultural tractor?",
      "options": {
        "A": "Lock the tractor steering in straight lines",
        "B": "Mechanically lock both rear drive axle shafts together so both wheels turn at identical speeds to escape mud",
        "C": "Stop the tractor engine instantly",
        "D": "Lock the three-point hitch at top position"
      },
      "correctOption": "B",
      "explanation": "The differential lock eliminates differential action, locking both drive wheels together to overcome single-wheel spin in mud."
    },
    {
      "id": "SOL223-U5-MCQ10",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Easy",
      "questionText": "Which hydraulic control mode in a tractor automatically adjusts implement working depth based on changes in soil draft resistance?",
      "options": {
        "A": "Position Control",
        "B": "Draft (Automatic Depth) Control",
        "C": "Float Control",
        "D": "Transport Lock Control"
      },
      "correctOption": "B",
      "explanation": "Draft control senses soil resistance forces through the hitch and raises or lowers the implement to maintain constant draft."
    },
    {
      "id": "SOL223-U5-MCQ11",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Easy",
      "questionText": "What is the lower link hitch pin diameter for a standardized Category I tractor three-point linkage?",
      "options": {
        "A": "15.8 mm",
        "B": "22.2 mm (7/8 inch)",
        "C": "28.6 mm (1-1/8 inch)",
        "D": "36.5 mm"
      },
      "correctOption": "B",
      "explanation": "Under ISO / BIS standards, Category I three-point hitch lower link pins have a standardized diameter of 22.2 mm."
    },
    {
      "id": "SOL223-U5-MCQ12",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Easy",
      "questionText": "What is the standard rotational speed of a 6-spline tractor Power Take-Off (PTO) shaft?",
      "options": {
        "A": "360 rpm",
        "B": "540 \u00b1 10 rpm",
        "C": "750 rpm",
        "D": "1000 rpm"
      },
      "correctOption": "B",
      "explanation": "The global standard speed for a 6-spline agricultural tractor PTO shaft is 540 \u00b1 10 rpm at rated engine speed."
    },
    {
      "id": "SOL223-U5-MCQ13",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Easy",
      "questionText": "The phenomenon where water vapor bubbles form at low pressure in an impeller and implode violently causing metal erosion is:",
      "options": {
        "A": "Priming",
        "B": "Cavitation",
        "C": "Surging",
        "D": "Water hammer"
      },
      "correctOption": "B",
      "explanation": "Cavitation occurs when local pressure drops below vapor pressure, creating vapor cavities that implode against metal surfaces."
    },
    {
      "id": "SOL223-U5-MCQ14",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Easy",
      "questionText": "What is the Christiansen Uniformity Coefficient (CU) used to quantify in sprinkler irrigation systems?",
      "options": {
        "A": "Pump diesel fuel economy",
        "B": "Uniformity of water precipitation distribution over the irrigated field",
        "C": "Water pH value",
        "D": "Tractor operating speed"
      },
      "correctOption": "B",
      "explanation": "Christiansen's Uniformity Coefficient measures the spatial uniformity of water application across catch-can collectors."
    },
    {
      "id": "SOL223-U5-MCQ15",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Easy",
      "questionText": "Why do modern agricultural tractors deploy a dual-clutch transmission mechanism?",
      "options": {
        "A": "To have two reverse gears",
        "B": "To operate the vehicle ground drive and the PTO shaft independently using a single foot pedal",
        "C": "To increase fuel efficiency by 50%",
        "D": "To double the tractor horsepower"
      },
      "correctOption": "B",
      "explanation": "A dual clutch allows stopping or shifting tractor travel (half pedal) while keeping PTO-driven implements (e.g., rotavator) spinning."
    },
    {
      "id": "SOL223-U5-MCQ16",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Easy",
      "questionText": "What is the formula for calculating Water Horsepower (WHP) of an irrigation pump in metric units?",
      "options": {
        "A": "WHP = (Q in L/s * H in m) / 75",
        "B": "WHP = (Q in L/s * H in m) / 270",
        "C": "WHP = (Q in m\u00b3/h * H in m) / 4500",
        "D": "WHP = (Q * H * 1000) / 75"
      },
      "correctOption": "A",
      "explanation": "In metric units, WHP = (Q in L/s * H in meters) / 75, where 1 metric hp = 75 kgf*m/s."
    },
    {
      "id": "SOL223-U5-MCQ17",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Easy",
      "questionText": "Which tractor transmission system uses brass synchronizer rings to match gear speeds before engagement for smooth on-the-move shifting?",
      "options": {
        "A": "Sliding mesh gearbox",
        "B": "Synchromesh gearbox",
        "C": "Hydrostatic drive",
        "D": "Belt pulley drive"
      },
      "correctOption": "B",
      "explanation": "Synchromesh gearboxes use friction cone synchronizers to equalize gear speeds, preventing gear clashing during shifts."
    },
    {
      "id": "SOL223-U5-MCQ18",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Easy",
      "questionText": "The hydraulic control mode used when operating implements that require a constant height above ground (e.g., seed drills, sprayers) is:",
      "options": {
        "A": "Draft Control",
        "B": "Position Control",
        "C": "Mixed Control",
        "D": "Free Floating Mode"
      },
      "correctOption": "B",
      "explanation": "Position control holds the implement at a fixed vertical height relative to the tractor chassis regardless of soil forces."
    },
    {
      "id": "SOL223-U5-MCQ19",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Easy",
      "questionText": "During daily (10-hour) tractor preventive maintenance, which inspection routine is mandatory?",
      "options": {
        "A": "Overhaul the engine gearbox",
        "B": "Check engine crankcase oil level and inspect the air cleaner pre-cleaner bowl",
        "C": "Replace the hydraulic pump",
        "D": "Flush radiator coolant"
      },
      "correctOption": "B",
      "explanation": "Daily checks include inspecting engine oil dipstick level, coolant level, and emptying the cyclonic pre-cleaner dust bowl."
    },
    {
      "id": "SOL223-U5-MCQ20",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Easy",
      "questionText": "Spray droplets smaller than what size threshold are classified as highly drift-prone aerosols in agricultural spraying?",
      "options": {
        "A": "50 microns",
        "B": "100 microns",
        "C": "250 microns",
        "D": "500 microns"
      },
      "correctOption": "B",
      "explanation": "Droplets smaller than 100 microns possess low terminal velocity and drift off-target under the slightest breeze."
    },
    {
      "id": "SOL223-U5-MCQ21",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Medium",
      "questionText": "A centrifugal pump discharges 30 liters of water per second against a total dynamic head of 25 meters. If pump efficiency is 70%, what is the required shaft brake horsepower?",
      "options": {
        "A": "7.5 metric hp",
        "B": "10.0 metric hp",
        "C": "14.3 metric hp",
        "D": "20.0 metric hp"
      },
      "correctOption": "C",
      "explanation": "Water HP = (Q * H) / 75 = (30 * 25) / 75 = 750 / 75 = 10.0 WHP. Shaft BHP = WHP / eta = 10.0 / 0.70 = 14.28 ~ 14.3 metric hp."
    },
    {
      "id": "SOL223-U5-MCQ22",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Medium",
      "questionText": "Why does a centrifugal pump require priming before starting if it is installed above the water reservoir level?",
      "options": {
        "A": "To lubricate the electric motor",
        "B": "Because air in the impeller casing cannot generate sufficient pressure differential to draw water up the suction pipe",
        "C": "To cool the electrical wires",
        "D": "To prevent water from entering the impeller"
      },
      "correctOption": "B",
      "explanation": "Air has very low density; spinning air generates negligible pressure head, failing to create the suction vacuum needed to lift water."
    },
    {
      "id": "SOL223-U5-MCQ23",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Medium",
      "questionText": "How does a Venturi fertilizer injector introduce dissolved agrochemicals into a pressurized drip irrigation pipe?",
      "options": {
        "A": "Uses an external electric pump",
        "B": "Constriction in the flow path accelerates water velocity, creating a localized pressure drop (vacuum) that siphons fertilizer",
        "C": "Generates high static pressure",
        "D": "Uses magnetic resonance"
      },
      "correctOption": "B",
      "explanation": "Bernoulli's principle: fluid constriction in the throat increases velocity and drops static pressure below atmospheric, siphoning fluid."
    },
    {
      "id": "SOL223-U5-MCQ24",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Medium",
      "questionText": "What is the standard mesh rating of the secondary disc or screen filter used in agricultural drip irrigation systems?",
      "options": {
        "A": "20 to 40 mesh",
        "B": "60 to 80 mesh",
        "C": "120 mesh (approx. 130 microns)",
        "D": "500 mesh"
      },
      "correctOption": "C",
      "explanation": "A 120-mesh (130-micron) filter is the global standard to trap microscopic particles that would clog 0.8-1.5 mm dripper labyrinths."
    },
    {
      "id": "SOL223-U5-MCQ25",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Medium",
      "questionText": "If the operating pressure of a hydraulic spray nozzle is quadrupled (increased by 4 times), how does the flow rate (L/min) change?",
      "options": {
        "A": "Flow rate remains unchanged",
        "B": "Flow rate doubles (increases by 2 times)",
        "C": "Flow rate quadruples (increases by 4 times)",
        "D": "Flow rate increases by 16 times"
      },
      "correctOption": "B",
      "explanation": "Discharge Q is proportional to the square root of pressure: Q2 / Q1 = sqrt(P2 / P1) = sqrt(4) = 2.0 (doubles)."
    },
    {
      "id": "SOL223-U5-MCQ26",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Medium",
      "questionText": "A tractor boom sprayer has an effective swath width of 12 meters and travels at 6 km/h. If total boom discharge is 24 L/min, what is the application rate in L/ha?",
      "options": {
        "A": "100 L/ha",
        "B": "200 L/ha",
        "C": "300 L/ha",
        "D": "400 L/ha"
      },
      "correctOption": "B",
      "explanation": "Application Rate = (600 * Q_total) / (W * V) = (600 * 24) / (12 * 6) = 14,400 / 72 = 200 L/ha."
    },
    {
      "id": "SOL223-U5-MCQ27",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Medium",
      "questionText": "In a tractor hydraulic three-point hitch, how does Draft Control provide automatic weight transfer onto the rear tractor wheels?",
      "options": {
        "A": "By pumping hydraulic oil into the tires",
        "B": "When draft surges, the hydraulic lift arms pull upward on the implement, transferring its downward reaction force onto the rear axle",
        "C": "By shifting the tractor engine backward",
        "D": "By locking the front axle"
      },
      "correctOption": "B",
      "explanation": "The upward lifting effort transfers part of the implement mass onto the rear drive tires, increasing traction grip and preventing slip."
    },
    {
      "id": "SOL223-U5-MCQ28",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Medium",
      "questionText": "Why are final drive planetary gear reduction sets located directly inside the tractor's rear wheel hubs?",
      "options": {
        "A": "To make changing tires easier",
        "B": "To perform final speed reduction and torque multiplication right at the wheel, allowing upstream transmission shafts to be lighter",
        "C": "To cool the brakes",
        "D": "To steer the rear wheels"
      },
      "correctOption": "B",
      "explanation": "Placing maximum torque reduction at the wheel hub allows differential and drive shafts to transmit lower torque at higher speeds."
    },
    {
      "id": "SOL223-U5-MCQ29",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Medium",
      "questionText": "What is an Independent PTO (IPTO) on an agricultural tractor?",
      "options": {
        "A": "A PTO driven by an auxiliary gasoline engine",
        "B": "A PTO controlled by a dedicated hydraulic clutch that can be engaged or disengaged completely independently of tractor motion",
        "C": "A PTO that only rotates in reverse",
        "D": "A PTO without splines"
      },
      "correctOption": "B",
      "explanation": "An Independent PTO uses an electro-hydraulic clutch pack, operating completely independently of travel speed or main clutch pedal."
    },
    {
      "id": "SOL223-U5-MCQ30",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Medium",
      "questionText": "What is the condition that guarantees a centrifugal pump will NOT experience cavitation during operation?",
      "options": {
        "A": "NPSHA < NPSHR",
        "B": "NPSHA >= NPSHR + Safety Margin (typically 0.5 to 1.0 m)",
        "C": "Total head equals zero",
        "D": "Water temperature exceeds 100\u00b0C"
      },
      "correctOption": "B",
      "explanation": "Cavitation is prevented only when Net Positive Suction Head Available exceeds the manufacturer's required NPSH by a safety margin."
    },
    {
      "id": "SOL223-U5-MCQ31",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Medium",
      "questionText": "In drip irrigation, what is a Pressure-Compensating (PC) emitter?",
      "options": {
        "A": "An emitter that works without water pressure",
        "B": "An emitter containing a flexible elastomeric diaphragm that regulates orifice size to maintain constant discharge across varying pressures",
        "C": "An emitter that changes spray color",
        "D": "An emitter made of solid brass"
      },
      "correctOption": "B",
      "explanation": "The elastomeric diaphragm flexes under varying pressures, maintaining uniform discharge (e.g., 2.0 L/h) across undulating slopes."
    },
    {
      "id": "SOL223-U5-MCQ32",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Medium",
      "questionText": "What is Volume Median Diameter (VMD or D_v0.5) in spray droplet characterization?",
      "options": {
        "A": "The diameter of the single largest droplet",
        "B": "The droplet diameter such that 50% of the total spray liquid volume is composed of droplets smaller than this diameter",
        "C": "The average diameter of 10 droplets",
        "D": "The nozzle orifice diameter"
      },
      "correctOption": "B",
      "explanation": "VMD divides spray volume in half: 50% of total liquid volume is in droplets smaller than VMD, and 50% in larger droplets."
    },
    {
      "id": "SOL223-U5-MCQ33",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Medium",
      "questionText": "What is the lower link hitch pin diameter for a standardized Category II tractor three-point linkage?",
      "options": {
        "A": "22.2 mm (7/8 inch)",
        "B": "28.6 mm (1-1/8 inch)",
        "C": "36.5 mm",
        "D": "45.0 mm"
      },
      "correctOption": "B",
      "explanation": "Category II three-point hitch lower link pins have a standardized diameter of 28.6 mm (1-1/8 inch)."
    },
    {
      "id": "SOL223-U5-MCQ34",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Medium",
      "questionText": "What is the primary operational hazard of engaging the differential lock while operating an agricultural tractor on a paved concrete highway?",
      "options": {
        "A": "Engine stalls immediately",
        "B": "The tractor cannot differentiate wheel speeds during turns, making steering impossible and risking axle fracture or rollover",
        "C": "Brakes catch fire",
        "D": "Tire tread melts"
      },
      "correctOption": "B",
      "explanation": "Solid-axle lock prevents outer wheels from turning faster in corners, causing severe tire scrub, loss of steering, and mechanical breakage."
    },
    {
      "id": "SOL223-U5-MCQ35",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Medium",
      "questionText": "At what operational interval is it standardly recommended to replace the engine lubricating oil and oil filter in an agricultural tractor?",
      "options": {
        "A": "Every 10 hours",
        "B": "Every 50 hours",
        "C": "Every 250 hours",
        "D": "Every 1500 hours"
      },
      "correctOption": "C",
      "explanation": "Standard manufacturer schedules mandate replacing engine oil and spin-on oil filter elements every 250 operational hours."
    },
    {
      "id": "SOL223-U5-MCQ36",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Medium",
      "questionText": "Why does the discharge of a centrifugal pump decrease when the total dynamic pumping head increases?",
      "options": {
        "A": "The motor speeds up",
        "B": "Head and discharge follow an inverse parabolic characteristic curve governed by impeller diameter and backward-curved vane kinematics",
        "C": "Friction drops to zero",
        "D": "Water becomes more dense"
      },
      "correctOption": "B",
      "explanation": "Pump head-capacity curves demonstrate that discharge decreases as head increases, reaching zero flow at shut-off head."
    },
    {
      "id": "SOL223-U5-MCQ37",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Medium",
      "questionText": "What is the function of an air-release vacuum-relief valve installed at the highest elevation points of a drip irrigation system?",
      "options": {
        "A": "Cool the plastic pipes",
        "B": "Expel air during pipe filling and admit air during shutdown to prevent vacuum suction of mud into emitter orifices",
        "C": "Spray water into the air",
        "D": "Filter sand particles"
      },
      "correctOption": "B",
      "explanation": "Releasing air prevents water hammer; breaking vacuum prevents back-siphoning of dirty soil water into dripper outlets."
    },
    {
      "id": "SOL223-U5-MCQ38",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Medium",
      "questionText": "What is the primary function of the air pressure chamber mounted on a reciprocating knapsack or power sprayer pump?",
      "options": {
        "A": "Filter chemical dust",
        "B": "Dampen pressure pulsations caused by reciprocating piston strokes, delivering a steady, pulse-free liquid spray",
        "C": "Increase chemical concentration",
        "D": "Store compressed air to drive the tractor"
      },
      "correctOption": "B",
      "explanation": "The air cushion in the surge chamber compresses during discharge and expands during suction, smoothing pressure pulses."
    },
    {
      "id": "SOL223-U5-MCQ39",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Medium",
      "questionText": "In a tractor hydraulic system, where does the feedback sensing mechanism for Draft Control standardly connect?",
      "options": {
        "A": "The front axle pivot pin",
        "B": "The spring-loaded top link bracket or internal lower link draft sensing torsion bar",
        "C": "The steering wheel column",
        "D": "The engine exhaust manifold"
      },
      "correctOption": "B",
      "explanation": "Top link compressive forces (or lower link bending deflections) mechanically signal the internal hydraulic spool valve."
    },
    {
      "id": "SOL223-U5-MCQ40",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Medium",
      "questionText": "What is the standard rotational speed of a 21-spline agricultural tractor PTO shaft?",
      "options": {
        "A": "540 rpm",
        "B": "720 rpm",
        "C": "1000 \u00b1 25 rpm",
        "D": "1500 rpm"
      },
      "correctOption": "C",
      "explanation": "The 21-spline 35 mm (1-3/8 inch) diameter tractor PTO shaft standardly rotates at 1000 \u00b1 25 rpm at rated engine speed."
    },
    {
      "id": "SOL223-U5-MCQ41",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Medium",
      "questionText": "What happens to the electric motor load when a centrifugal pump operates with an open discharge valve against near-zero dynamic head?",
      "options": {
        "A": "Motor runs cold and draws zero current",
        "B": "Discharge increases to maximum, causing the motor to draw peak electric current and risk thermal burnout (overload)",
        "C": "Motor reverses direction",
        "D": "Pump explodes instantly"
      },
      "correctOption": "B",
      "explanation": "Centrifugal pumps absorb maximum brake horsepower at maximum discharge; operating with zero head can overload the motor."
    },
    {
      "id": "SOL223-U5-MCQ42",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Medium",
      "questionText": "Why are media (sand) filters mandatory when utilizing surface canal water or wastewater for drip irrigation?",
      "options": {
        "A": "To soften hard water",
        "B": "Deep silica sand beds trap organic algae, suspended biological slimes, and organic matter that bypass screen filters",
        "C": "To heat the water",
        "D": "To remove dissolved salts"
      },
      "correctOption": "B",
      "explanation": "Surface waters contain compressible organic algae and slimes that extrude through screens; deep media beds trap them throughout."
    },
    {
      "id": "SOL223-U5-MCQ43",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Medium",
      "questionText": "Why are floodjet (deflector) nozzles operated at very low pressures (<1.5 bar) for soil-applied herbicide application?",
      "options": {
        "A": "To atomize liquid into a dense fog",
        "B": "To produce very large, heavy droplets that minimize wind drift onto sensitive adjacent crops",
        "C": "To save battery power",
        "D": "To prevent nozzle clogging"
      },
      "correctOption": "B",
      "explanation": "Low pressure produces coarse spray droplets (>400 microns) that resist drift during pre-emergence herbicide spraying."
    },
    {
      "id": "SOL223-U5-MCQ44",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Medium",
      "questionText": "What is the function of the thermostatically controlled bypass valve in a tractor engine cooling system?",
      "options": {
        "A": "Circulate water to the cab heater",
        "B": "Reroute coolant back to the water pump bypass until operating temperature reaches 80-85\u00b0C, ensuring rapid engine warm-up",
        "C": "Drain boiling coolant onto the ground",
        "D": "Control fuel injection timing"
      },
      "correctOption": "B",
      "explanation": "Keeps coolant recirculating internally until proper thermal expansion occurs, preventing cold engine cylinder scuffing."
    },
    {
      "id": "SOL223-U5-MCQ45",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Medium",
      "questionText": "What safety hazard arises if an implement PTO telescopic driveline is operated without its rotating plastic shield?",
      "options": {
        "A": "PTO shaft overheats",
        "B": "Any loose clothing, hair, or limbs can instantly wrap around the spinning shaft (540 rpm), causing fatal entanglement",
        "C": "Tractor battery drains",
        "D": "Hydraulic lift stops working"
      },
      "correctOption": "B",
      "explanation": "Unshielded PTO shafts rotate 9 times per second; clothing entanglement occurs in a fraction of a second, causing fatal injuries."
    },
    {
      "id": "SOL223-U5-MCQ46",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Hard",
      "questionText": "A deep tubewell submersible pump lifts 40 L/s against a total dynamic head of 65 meters. If overall wire-to-water efficiency (motor + pump) is 62%, what electric power (in kW) is consumed from the power grid?",
      "options": {
        "A": "25.5 kW",
        "B": "41.2 kW",
        "C": "58.0 kW",
        "D": "72.5 kW"
      },
      "correctOption": "B",
      "explanation": "Hydraulic Power P_hyd (kW) = (rho * g * Q * H) / 1000 = (9.81 * 40 * 65) / 1000 = 25.506 kW. Electric Power Input = P_hyd / eta = 25.506 / 0.62 = 41.14 kW ~ 41.2 kW."
    },
    {
      "id": "SOL223-U5-MCQ47",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Hard",
      "questionText": "A centrifugal pump operates at sea level where atmospheric pressure is 10.33 m of water. Water temperature is 30\u00b0C (vapor pressure = 0.43 m). If static suction lift is 4.5 m, suction pipe friction loss is 1.2 m, and velocity head is 0.2 m, calculate the Net Positive Suction Head Available (NPSHA):",
      "options": {
        "A": "2.50 m",
        "B": "4.00 m",
        "C": "5.80 m",
        "D": "8.20 m"
      },
      "correctOption": "B",
      "explanation": "NPSHA = H_atm - H_vap - H_s - H_fs = 10.33 - 0.43 - 4.50 - 1.20 - 0.20 = 4.00 meters."
    },
    {
      "id": "SOL223-U5-MCQ48",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Hard",
      "questionText": "A catch-can test for a sprinkler system with 16 collectors yields a mean catch of 12.0 mm. The sum of absolute deviations from the mean across all 16 cans is 28.8 mm. What is the Christiansen Uniformity Coefficient (CU)?",
      "options": {
        "A": "75.0%",
        "B": "85.0%",
        "C": "90.0%",
        "D": "94.5%"
      },
      "correctOption": "B",
      "explanation": "CU = (1 - (Sum |x - x_bar| / (n * x_bar))) * 100 = (1 - (28.8 / (16 * 12.0))) * 100 = (1 - (28.8 / 192.0)) * 100 = (1 - 0.15) * 100 = 85.0%."
    },
    {
      "id": "SOL223-U5-MCQ49",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Hard",
      "questionText": "A tractor boom sprayer has 20 nozzles spaced 50 cm apart. The calibrated discharge per nozzle is 1.2 L/min at 3.0 bar. If the tractor travels at 5.4 km/h, what is the field chemical application rate in L/ha?",
      "options": {
        "A": "133 L/ha",
        "B": "200 L/ha",
        "C": "267 L/ha",
        "D": "350 L/ha"
      },
      "correctOption": "C",
      "explanation": "Swath width W = 20 * 0.50 = 10.0 m. Total discharge Q_total = 20 * 1.2 = 24.0 L/min. Application Rate = (600 * Q_total) / (W * V) = (600 * 24.0) / (10.0 * 5.4) = 14,400 / 54 = 266.67 L/ha ~ 267 L/ha."
    },
    {
      "id": "SOL223-U5-MCQ50",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Hard",
      "questionText": "An agricultural tractor engine develops 45 kW at 2100 rpm. The transmission ratio in 1st low gear (including gearbox, differential, and final reduction) is 64:1. Assuming 88% mechanical transmission efficiency, what is the torque delivered at the rear drive axle?",
      "options": {
        "A": "8.4 kNm",
        "B": "11.5 kNm",
        "C": "16.8 kNm",
        "D": "22.0 kNm"
      },
      "correctOption": "B",
      "explanation": "Engine torque T_e = (45,000 * 60) / (2 * pi * 2100) = 2,700,000 / 13,194.7 = 204.6 Nm. Axle torque = T_e * Gear Ratio * Efficiency = 204.6 * 64 * 0.88 = 11,524 Nm = 11.52 kNm."
    },
    {
      "id": "SOL223-U5-MCQ51",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Hard",
      "questionText": "A 1.0-hectare banana orchard has drip laterals spaced 2.5 m apart with 4 L/h drippers spaced 1.5 m apart along laterals. If the daily irrigation requirement is 6 mm, how many hours must the system operate daily?",
      "options": {
        "A": "2.25 hours",
        "B": "3.75 hours",
        "C": "5.62 hours",
        "D": "7.50 hours"
      },
      "correctOption": "C",
      "explanation": "Volume needed for 6 mm = 10,000 m\u00b2 * 0.006 m = 60 m\u00b3 = 60,000 L. Number of emitters = 10,000 / (2.5 * 1.5) = 10,000 / 3.75 = 2666.7 emitters. Total discharge = 2666.7 * 4 L/h = 10,666.8 L/h. Operating time = 60,000 / 10,666.8 = 5.625 hours ~ 5.62 hours."
    },
    {
      "id": "SOL223-U5-MCQ52",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Hard",
      "questionText": "In a droplet spectrum analysis, the Relative Span (RS) is defined as (D_v0.9 - D_v0.1) / D_v0.5. What does a very low Relative Span (<0.8) indicate?",
      "options": {
        "A": "Droplets evaporate instantly",
        "B": "A highly uniform, narrow droplet size spectrum with minimal drift-prone fines and minimal oversized spatters",
        "C": "The nozzle is clogged with sand",
        "D": "Spray pressure is too low"
      },
      "correctOption": "B",
      "explanation": "Low Relative Span indicates monodisperse or narrow droplet distribution, maximizing biological efficacy and minimizing drift."
    },
    {
      "id": "SOL223-U5-MCQ53",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Hard",
      "questionText": "In a tractor hydraulic system with a pump delivering 32 L/min at 175 bar pressure, what hydraulic power (in kW) is generated?",
      "options": {
        "A": "4.5 kW",
        "B": "9.33 kW",
        "C": "15.0 kW",
        "D": "28.0 kW"
      },
      "correctOption": "B",
      "explanation": "Hydraulic Power (kW) = (Pressure in bar * Flow in L/min) / 600 = (175 * 32) / 600 = 5600 / 600 = 9.33 kW."
    },
    {
      "id": "SOL223-U5-MCQ54",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Hard",
      "questionText": "According to pump affinity laws, if the rotational speed of a centrifugal pump is increased by 20% (N2 = 1.20 * N1), how do discharge (Q), head (H), and power (P) change?",
      "options": {
        "A": "Q +20%, H +20%, P +20%",
        "B": "Q +20%, H +44%, P +72.8%",
        "C": "Q +44%, H +72.8%, P +100%",
        "D": "Q doubles, H doubles, P quadruples"
      },
      "correctOption": "B",
      "explanation": "Affinity laws: Q is proportional to N (1.20x); H is proportional to N\u00b2 (1.2\u00b2 = 1.44x); P is proportional to N\u00b3 (1.2\u00b3 = 1.728x, a 72.8% increase)."
    },
    {
      "id": "SOL223-U5-MCQ55",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Hard",
      "questionText": "What is the mathematical condition for zero side draft when hitching a 3-point mounted implement to a tractor?",
      "options": {
        "A": "Top link must be fully extended",
        "B": "The implement's center of resistance, hitch center, and tractor's center of pull must all lie along the same vertical longitudinal plane",
        "C": "Lower links must be unhitched",
        "D": "Tire pressure must be 5 bar"
      },
      "correctOption": "B",
      "explanation": "Aligning the implement center of resistance with the tractor center of pull ensures pure longitudinal pull with zero side draft."
    },
    {
      "id": "SOL223-U5-MCQ56",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "difficulty": "Hard",
      "questionText": "In a Venturi fertigation injector, if the upstream supply pressure is 3.0 bar, what minimum pressure drop must occur across the throat to initiate suction?",
      "options": {
        "A": "5%",
        "B": "10% to 15%",
        "C": "25% to 35%",
        "D": "75%"
      },
      "correctOption": "C",
      "explanation": "Venturi injectors require a 25% to 35% pressure differential between inlet and outlet to create the vacuum required for suction."
    },
    {
      "id": "SOL223-U5-MCQ57",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "difficulty": "Hard",
      "questionText": "A pesticide label mandates an application rate of 250 L/ha using nozzles delivering 0.9 L/min each at 50 cm spacing. What forward tractor travel speed must be maintained?",
      "options": {
        "A": "2.5 km/h",
        "B": "4.32 km/h",
        "C": "6.5 km/h",
        "D": "8.0 km/h"
      },
      "correctOption": "B",
      "explanation": "Formula: Speed V = (600 * Q_nozzle) / (Spacing * Rate) = (600 * 0.9) / (0.50 * 250) = 540 / 125 = 4.32 km/h."
    },
    {
      "id": "SOL223-U5-MCQ58",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "difficulty": "Hard",
      "questionText": "Why is a torque limiter (shear bolt or slip clutch) mandatory in the PTO driveline of a tractor-mounted rotary tiller?",
      "options": {
        "A": "To slow down the tractor",
        "B": "To prevent catastrophic damage to the tractor PTO shaft, bevel gears, and transmission when blades hit boulders",
        "C": "To reduce tractor diesel emissions",
        "D": "To lubricate the three-point hitch"
      },
      "correctOption": "B",
      "explanation": "If rotating blades hit an immovable rock, the slip clutch slips (or shear bolt shears), preventing PTO shaft twisting."
    },
    {
      "id": "SOL223-U5-MCQ59",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "difficulty": "Hard",
      "questionText": "What is the specific speed (N_s) of an irrigation pump and what does a high specific speed (>5000 in US units) indicate?",
      "options": {
        "A": "Pump warranty period",
        "B": "A dimensionless parameter relating speed, discharge, and head; high N_s indicates axial-flow propeller pumps for low heads and large discharges",
        "C": "Maximum water temperature",
        "D": "Motor winding resistance"
      },
      "correctOption": "B",
      "explanation": "Specific speed categorizes impellers: low N_s for high-head radial flow; high N_s for low-head high-discharge axial-flow propeller pumps."
    },
    {
      "id": "SOL223-U5-MCQ60",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "difficulty": "Hard",
      "questionText": "During tractor periodic maintenance at 1000 operational hours, which comprehensive service must be executed?",
      "options": {
        "A": "Paint the tractor chassis",
        "B": "Drain and replace all transmission, hydraulic, and final drive oils, clean hydraulic suction strainer, and service fuel injectors",
        "C": "Replace the steering wheel",
        "D": "Change the operator seat"
      },
      "correctOption": "B",
      "explanation": "The major 1000-hour service involves replacing all transmission/hydraulic fluids, filter elements, and testing fuel injection pressures."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL223-U5-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "questionText": "Define Total Dynamic Head (TDH), Water Horsepower (WHP), and Net Positive Suction Head (NPSH) as applied to agricultural water pumping.",
      "modelAnswer": "Hydraulic Parameters in Agricultural Water Pumping:\n\n1. Total Dynamic Head (TDH):\n- Definition: The total equivalent energy head against which an irrigation pump must work during continuous operation. It represents the vertical sum of static elevation and frictional losses: TDH = H_s + H_d + H_fs + H_fd + (V_d\u00b2 / 2g), where H_s is static suction lift, H_d is static discharge elevation, H_fs and H_fd are pipe frictional head losses, and V_d\u00b2 / 2g is discharge velocity head.\n\n2. Water Horsepower (WHP):\n- Definition: The theoretical hydraulic power imparted to the water stream by the pump impeller. In metric units: WHP = (Q * H) / 75, where Q is discharge in liters per second and H is Total Dynamic Head in meters (1 metric hp = 75 kgf*m/s). In SI units: P_hyd (kW) = (9.81 * Q * H) / 1000.\n\n3. Net Positive Suction Head (NPSH):\n- Definition: The total absolute suction head available at the pump suction eye above the saturation vapor pressure of the pumped liquid, required to prevent localized boiling (cavitation).\n- Forms: NPSH Available (NPSHA), determined by atmospheric pressure, water temperature, and suction piping geometry; and NPSH Required (NPSHR), the minimum head specified by the pump manufacturer. Cavitation is avoided when NPSHA >= NPSHR + 0.5 m.",
      "outlinePoints": [
        "Definition and components of Total Dynamic Head (static + friction + velocity)",
        "Definition and metric/SI formulations of Water Horsepower",
        "Definition of Net Positive Suction Head (NPSH) and vapor pressure threshold",
        "Distinction between NPSHA (available) and NPSHR (required)",
        "The fundamental anti-cavitation criterion (NPSHA > NPSHR)"
      ]
    },
    {
      "id": "SOL223-U5-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "questionText": "Compare Position Control and Draft Control in agricultural tractor hydraulic systems. Explain when an operator should select each mode.",
      "modelAnswer": "Position Control vs Draft Control in Tractor Hydraulics:\n\n1. Operational Principle & Feedback Mechanism:\n- Position Control: Uses mechanical feedback from the tractor rockshaft to hold the three-point hitch links at an exact vertical position relative to the tractor chassis. The position of the quadrant control lever corresponds directly to implement height/depth. Changes in soil resistance have zero effect on hitch position.\n- Draft Control: Uses mechanical or electronic feedback from deflection sensors on the top link bracket (or lower draft sensing pins). The system continuously monitors the horizontal pulling force (draft) exerted by the soil against the implement. When draft exceeds the setpoint, the internal spool valve automatically lifts the implement slightly, transferring implement weight onto the rear tractor wheels.\n\n2. Primary Agricultural Function:\n- Position Control: Maintains precise spatial height or working depth in uniform, cultivated soil where soil resistance does not threaten engine stall.\n- Draft Control: Prevents tractor engine stalling and drive-wheel spin in variable, compacted soils during heavy tillage.\n\n3. Implement Selection Criteria:\n- Position Control: Strictly selected for surface implements and secondary tillage tools that require constant depth or ground clearance: seed drills, planters, boom sprayers, fertilizer spreaders, post-hole diggers, and transport.\n- Draft Control: Selected exclusively for ground-engaging, heavy primary tillage implements operating at variable depths: mouldboard ploughs, disc ploughs, subsoilers, and deep chisel tines.",
      "outlinePoints": [
        "Position control mechanism: rockshaft feedback holding constant physical height",
        "Draft control mechanism: top link force sensing regulating implement depth",
        "Weight transfer effect in draft control boosting rear tire traction",
        "Implement selection for Position Control (seeders, sprayers, spreaders)",
        "Implement selection for Draft Control (MB ploughs, disc ploughs, subsoilers)"
      ]
    },
    {
      "id": "SOL223-U5-SUB03",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "questionText": "Describe the complete filtration train required for a commercial Drip Irrigation system using surface canal water. Explain the working principles of Hydrocyclones, Media (Sand) Filters, and Disc Filters.",
      "modelAnswer": "Complete Filtration Architecture for Drip Irrigation Systems:\n\n1. Criticality of Filtration in Drip Irrigation:\nDrip emitters operate through tortuous micro-labyrinths with orifice cross-sections of only 0.6 to 1.5 mm. Even microscopic silt grains, algae strands, or bacterial slimes will clog dripper passages, causing uneven water application, localized crop drought stress, and system failure. A multi-stage filtration train is mandatory when using surface canal or open-well water.\n\n2. Three-Stage Filtration Train Architecture:\n\nStage 1: Hydrocyclone (Centrifugal Sand Separator):\n- Purpose: Removes heavy inorganic particulates (coarse sand, silt, gravel) having specific gravities >2.5.\n- Working Principle: Pressurized water enters tangentially into a conical steel or composite chamber. The tangential velocity creates an intense centrifugal vortex. Centrifugal forces propel heavy sand particles outward against the conical wall, where they spiral down into a sediment collection chamber at the base. Clean water flows upward through a central vortex finder into the discharge pipe. Hydrocyclones remove up to 98% of sand particles >75 microns without media cartridges.\n\nStage 2: Media (Sand / Gravel) Filter:\n- Purpose: Removes suspended organic matter, living algae, biological slimes, and organic debris.\n- Working Principle: Consists of an epoxy-coated pressure vessel containing a deep bed (40 to 60 cm depth) of crushed silica sand or basalt gravel (0.8 to 1.2 mm grain size). Unlike screen filters where organic slimes squash through pores under pressure, media filters provide deep three-dimensional entrapment throughout the porous bed matrix. When pressure differential across the bed exceeds 0.5 bar, automatic backwashing reverses water flow, fluidizing the sand and flushing trapped algae out the backwash drain.\n\nStage 3: Secondary Disc / Screen Filter:\n- Purpose: Safety polishing barrier that catches escaped sand grains or backwash debris.\n- Working Principle: Comprises a cylindrical stack of grooved plastic rings compressed tightly by a spring inside a pressure housing. The intersecting micro-grooves form a 120-mesh (130-micron) three-dimensional filter matrix. Water flows from outside to inside, trapping fine particulates. Discs are easily flushed by loosening the compression spring during routine maintenance.",
      "outlinePoints": [
        "Importance of filtration due to narrow dripper labyrinths (0.6-1.5 mm)",
        "Stage 1: Hydrocyclone centrifugal vortex sand separation mechanics",
        "Stage 2: Deep bed Media (silica sand) filtration for organic algae and slimes",
        "Backwashing protocol triggered by 0.5 bar pressure differential",
        "Stage 3: 120-mesh grooved Disc filter polishing safety barrier",
        "Sequential integration ensuring zero emitter clogging from canal water"
      ]
    },
    {
      "id": "SOL223-U5-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "questionText": "Compare Flat Fan and Hollow Cone spray nozzles in terms of spray pattern, droplet spectrum, and target pest application.",
      "modelAnswer": "Flat Fan vs Hollow Cone Spray Nozzles:\n\n1. Spray Pattern Geometry:\n- Flat Fan Nozzle: Produces a narrow, planar, fan-shaped spray sheet with a tapered elliptical footprint. Fluid density is highest in the center and tapers toward edges. Designed for multi-nozzle spray booms where overlapping adjacent fan patterns (typically 30-50% overlap) produces uniform broadcast coverage.\n- Hollow Cone Nozzle: Liquid passes through internal tangential swirl grooves, exiting as a wide-angle rotating hollow conical sheet. Liquid droplets are concentrated in an outer ring with virtually no droplets in the center.\n\n2. Droplet Spectrum & Penetration:\n- Flat Fan: Produces medium to coarse droplets (VMD 250 to 400 microns), designed to minimize spray drift while providing downward soil and surface deposition.\n- Hollow Cone: Produces fine, swirling droplets (VMD 100 to 200 microns) with high multi-directional kinetic velocity, enabling droplets to swirl around and coat the undersides of dense foliage.\n\n3. Target Pesticide Application:\n- Flat Fan: Standard for soil-applied pre-emergence herbicides and selective systemic post-emergence weedicides.\n- Hollow Cone: Standard for foliar-applied contact insecticides and systemic fungicides requiring complete coverage across dense canopies (e.g., cotton, orchards, vegetables).",
      "outlinePoints": [
        "Spray pattern geometry: tapered planar sheet vs circular hollow ring",
        "Boom overlap requirement of flat fan nozzles for uniform broadcast",
        "Droplet spectrum: medium/coarse drift-resistant vs fine swirling droplets",
        "Herbicide broadcast application (flat fan) vs foliar insect/fungal coverage (hollow cone)"
      ]
    },
    {
      "id": "SOL223-U5-SUB05",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "questionText": "A centrifugal pump discharges 3600 liters of water per minute against a static lift of 18 meters. Frictional head losses in suction and delivery pipes total 3.5 meters, and delivery velocity head is 0.5 meters. If the pump efficiency is 72% and electric motor efficiency is 88%, calculate: (a) Total Dynamic Head in meters, (b) Water Horsepower (WHP) in metric hp, (c) Pump shaft Brake Horsepower (BHP), and (d) Electrical power input from the grid in kilowatts.",
      "modelAnswer": "Given Parameters:\n- Discharge (Q) = 3600 L/min = 3600 / 60 = 60.0 L/s\n- Static head (H_stat) = 18.0 m\n- Friction head loss (H_f) = 3.5 m\n- Velocity head (H_v) = 0.5 m\n- Pump efficiency (eta_pump) = 72% = 0.72\n- Motor efficiency (eta_motor) = 88% = 0.88\n\nStep 1: Calculate Total Dynamic Head (TDH):\nTDH = Static Head + Friction Loss + Velocity Head\nTDH = 18.0 m + 3.5 m + 0.5 m = 22.0 meters\n\nStep 2: Calculate Water Horsepower (WHP in metric hp):\nWHP = (Q in L/s * TDH in m) / 75\nWHP = (60.0 * 22.0) / 75 = 1320 / 75 = 17.60 metric hp\nIn SI units (kW): P_hyd = (9.81 * 60.0 * 22.0) / 1000 = 12.949 kW\n\nStep 3: Calculate Pump Shaft Brake Horsepower (BHP):\nBHP = WHP / eta_pump\nBHP = 17.60 / 0.72 = 24.44 metric hp\nIn SI units: P_shaft = 12.949 kW / 0.72 = 17.985 kW\n\nStep 4: Calculate Electrical Power Input (P_in in kW):\nP_in = P_shaft / eta_motor\nP_in = 17.985 kW / 0.88 = 20.437 kW (approx. 20.44 kW)\n\nFinal Answers:\n(a) Total Dynamic Head = 22.0 meters\n(b) Water Horsepower = 17.60 metric hp (12.95 kW)\n(c) Pump Shaft BHP = 24.44 metric hp (17.99 kW)\n(d) Electrical Power Input = 20.44 kW",
      "outlinePoints": [
        "Listing given discharge, heads, and component efficiencies",
        "Summation of Total Dynamic Head (22.0 m)",
        "Computation of Water Horsepower (17.60 metric hp / 12.95 kW)",
        "Determination of pump shaft Brake Horsepower (24.44 metric hp)",
        "Calculation of electrical grid power consumption (20.44 kW)"
      ]
    },
    {
      "id": "SOL223-U5-SUB06",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "questionText": "A farmer operates a surface centrifugal pump installed 6.8 meters above an open irrigation canal during peak summer (water temperature 35\u00b0C). The pump emits loud gravel-like crackling noises, discharges 40% less water than rated, and shows severe pitting on the bronze impeller vanes after two months. Diagnose the hydraulic failure, explain the physical mechanism, and provide engineering remedies.",
      "modelAnswer": "Diagnostic Analysis and Remediation of Pump Cavitation Failure:\n\n1. Failure Diagnosis:\nThe farmer's centrifugal pump is suffering from severe hydraulic cavitation. The symptoms described\u2014loud crackling noise resembling gravel passing through the casing, sharp drop in discharge capacity (head breakdown), and honeycomb pitting erosion on impeller vanes\u2014are classic hallmarks of cavitation damage.\n\n2. Physical Mechanism of Cavitation:\n- Cavitation occurs when static pressure inside the pump impeller drops below the saturation vapor pressure of the pumped liquid at operating temperature.\n- At 35\u00b0C summer water temperature, the saturation vapor pressure of water rises significantly to 5.62 kPa (equivalent to ~0.57 m of water head), compared to only 1.7 kPa at 15\u00b0C.\n- The static suction lift of 6.8 m is excessively high. The available Net Positive Suction Head (NPSHA) is calculated as:\nNPSHA = H_atm - H_vap - H_static_lift - H_friction_loss\nWith atmospheric pressure H_atm ~ 10.1 m, H_vap = 0.57 m, and H_s = 6.8 m, plus suction pipe friction losses H_fs (~1.0 m):\nNPSHA = 10.1 - 0.57 - 6.8 - 1.0 = 1.73 meters.\n- Standard agricultural centrifugal pumps of this capacity require an NPSHR of 2.8 to 3.5 meters. Because NPSHA (1.73 m) < NPSHR (3.0 m), water spontaneously boils at the low-pressure impeller eye, creating millions of microscopic vapor cavities.\n- When these vapor bubbles are swept into the high-pressure outer vane channels, they violently implode. The implosion collapses water inward, generating micro-jets with localized impact pressures of 1000 to 1500 MPa at frequencies of 25 kHz. These repetitive shock waves fatigue and gouge micro-fragments of bronze from the impeller vanes (cavitation pitting).\n\n3. Corrective Engineering Remedies:\n- Remedy 1: Lower the Pump Elevation: Lower the pump onto a dug platform or floating pontoon closer to the water surface, reducing static suction lift to <3.5 meters. This increases NPSHA well above NPSHR.\n- Remedy 2: Increase Suction Pipe Diameter: Replace the suction pipe with one size larger diameter (e.g., from 3-inch to 4-inch), and remove restrictive 90\u00b0 elbows and foot valve restrictions to reduce friction head losses (H_fs).\n- Remedy 3: Convert to Submersible Installation: Replace the surface suction pump with an open-well submersible pump placed directly at the canal bed. This eliminates suction lift entirely, providing positive suction pressure and permanently preventing cavitation.",
      "outlinePoints": [
        "Identification of the failure mode: severe hydraulic cavitation",
        "Physical mechanism: local pressure dropping below water vapor pressure at 35\u00b0C",
        "Mathematical proof: NPSHA (1.73 m) falling far below manufacturer NPSHR (3.0 m)",
        "Implosion mechanics: 1000+ MPa micro-jets causing honeycomb metal pitting",
        "Remedy 1: lowering pump mounting elevation to reduce static suction lift",
        "Remedy 2: increasing suction pipe diameter to lower friction head loss",
        "Remedy 3: converting to submersible installation to eliminate suction lift"
      ]
    },
    {
      "id": "SOL223-U5-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "questionText": "Explain the working principle and agricultural necessity of the Tractor Differential and Differential Lock.",
      "modelAnswer": "Working and Role of the Tractor Differential and Differential Lock:\n\n1. The Differential Mechanism:\n- Working Principle: The differential consists of a bevel crown wheel carrying a differential cage with small bevel spider pinions meshing with two side axle gears. When traveling straight, both rear wheels rotate at equal speeds. When turning a corner, the outer wheel must travel a longer curved path than the inner wheel; the spider pinions walk around the side gears, allowing the outer axle to rotate faster while delivering equal driving torque to both wheels.\n\n2. The Problem of Single-Wheel Slip:\nIn muddy or loose agricultural fields, if one drive wheel loses traction (e.g., in a wet furrow), the differential's equal-torque property causes that wheel to spin uselessly at double speed, while delivering zero torque to the wheel on solid ground, immobilizing the tractor.\n\n3. The Differential Lock Solution:\nThe differential lock is a foot-operated sliding dog clutch on the rear axle. When depressed by the operator, the dog teeth mechanically lock the two differential side gears (or lock one side gear to the cage). This forces both rear drive axles to rotate as a single solid shaft at identical speeds, transferring full engine torque to the gripping wheel and allowing the tractor to drive out of the mud.",
      "outlinePoints": [
        "Differential bevel gear architecture and cornering speed differentiation",
        "The agricultural problem: single-wheel spin in mud immobilizing the vehicle",
        "Equal-torque distribution principle causing drive stall on low traction",
        "Mechanics of the foot-actuated dog-clutch differential lock",
        "Operational safety rule: strictly disengage before turning or road transport"
      ]
    },
    {
      "id": "SOL223-U5-SUB08",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "questionText": "Compare Drip Irrigation with Overhead Sprinkler Irrigation across five engineering and agronomic criteria.",
      "modelAnswer": "Drip Irrigation vs Sprinkler Irrigation:\n\n1. Water Application Efficiency & Evaporation Loss:\n- Drip: Achieves 90% to 95% efficiency. Water is applied drop-by-drop directly to the root zone beneath the crop canopy; wind drift and evaporative droplet losses are virtually zero.\n- Sprinkler: Achieves 75% to 85% efficiency. Water is sprayed into the air; in hot, arid, windy climates, 10% to 20% of discharged water evaporates in the air or drifts off-target.\n\n2. Operating Pressure & Energy Requirement:\n- Drip: Operates at low pressures (1.0 to 2.0 bar / 15 to 30 psi), requiring lower pumping power and reducing electric/diesel consumption.\n- Sprinkler: Operates at medium to high pressures (2.5 to 4.5 bar / 35 to 65 psi) to achieve nozzle throw and droplet breakup, demanding higher pumping energy.\n\n3. Disease Incidence & Foliar Scorching:\n- Drip: Keeps plant foliage and stems completely dry, drastically lowering fungal foliar diseases (powdery mildew, blight, downy mildew).\n- Sprinkler: Wets the entire canopy, washing away protective fungicides, creating humid microclimates that promote fungal outbreaks, and risking foliar scorch if saline water is used.\n\n4. Topographical Adaptation & Soil Types:\n- Drip: Highly suited for steep undulating slopes, terraced hillsides, and rocky soils with pressure-compensating emitters.\n- Sprinkler: Suited for undulating sandy soils, but heavy clay soils suffer surface runoff and puddling under high application rates.\n\n5. Filtration Rigor & Capital Outlay:\n- Drip: Requires complex, expensive multi-stage filtration (120-mesh); emitters are vulnerable to clogging.\n- Sprinkler: Requires only basic screen filtration; large nozzle orifices (3-6 mm) rarely clog.",
      "outlinePoints": [
        "Application efficiency (90-95% vs 75-85%) and wind drift losses",
        "Operating pressure requirements (1-2 bar vs 2.5-4.5 bar)",
        "Foliar wetting and plant fungal disease dynamics",
        "Topographical adaptation across slopes and light soils",
        "Filtration strictness: extreme 120-mesh vs coarse screen filtration"
      ]
    },
    {
      "id": "SOL223-U5-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "questionText": "Describe the functional components and calibration procedure of a Tractor-Mounted Hydraulic Boom Sprayer. Explain how application rate (L/ha) is regulated in the field.",
      "modelAnswer": "Engineering Architecture and Calibration of Tractor Boom Sprayers:\n\n1. Functional Components of the Boom Sprayer:\n- Chemical Tank: A UV-stabilized polyethylene or fiberglass tank (400 to 1000 L capacity) equipped with a large filling strainer and mechanical or hydraulic jet agitator.\n- Hydraulic Pump: A PTO-driven roller, diaphragm, or centrifugal pump delivering 40 to 80 L/min at pressures between 3.0 and 10.0 bar.\n- Pressure Regulating Valve & Relief Bypass: Maintains uniform system pressure; bypasses excess liquid back to the tank for continuous hydraulic agitation.\n- Spray Boom: A folding tubular truss boom (8 to 18 meters wide) supporting nozzle bodies spaced at uniform intervals (standardly 50 cm). Features spring-loaded breakaway hinges that swing backward if the boom strikes a tree or fence post.\n- Nozzle Assemblies: Incorporate check valves (anti-drip diaphragm valves that seal when pressure drops <0.7 bar), 50-mesh nozzle tip strainers, and flat fan spray tips.\n\n2. Field Calibration Protocol (Step-by-Step):\n- Step 1: Measure Nozzle Spacing and Swath Width: Record nozzle spacing S (m) and total boom width W = N * S (e.g., 20 nozzles at 0.5 m = 10.0 m).\n- Step 2: Establish Tractor Travel Speed: Measure a 50-meter test course in the field. Drive the tractor with half-full spray tank at the intended throttle setting (e.g., 1800 rpm in 2nd low gear). Record travel time t (seconds). Calculate forward speed:\nV (km/h) = (50 m / t) * 3.6\n- Step 3: Check Nozzle Uniformity: Fill tank with clean water, park tractor, engage PTO, and set pressure regulator to 3.0 bar. Collect discharge from every nozzle for 60 seconds into graduated cylinders. Calculate mean discharge per nozzle (Q_avg in L/min). Any nozzle discharging >\u00b15% from the mean must be cleaned or replaced.\n- Step 4: Calculate Total Boom Discharge: Q_total (L/min) = N * Q_avg.\n- Step 5: Calculate Field Application Rate (L/ha):\nApplication Rate (L/ha) = (600 * Q_total) / (W * V)\nor per individual nozzle: Rate (L/ha) = (60,000 * Q_nozzle) / (S * V)\n\n3. Regulating Application Rate in the Field:\nIf the calculated rate deviates from the target chemical label recommendation:\n- Minor Adjustments (\u00b110%): Adjust the pressure regulator (increase pressure to raise rate; note: rate scales with sqrt(P)).\n- Moderate Adjustments (\u00b125%): Change tractor travel speed by shifting transmission gears.\n- Major Adjustments (>30%): Swap nozzle tips to a larger or smaller orifice size (e.g., from ISO 02 yellow to ISO 03 blue tips).",
      "outlinePoints": [
        "Key subsystems: tank, PTO pump, pressure regulator, folding breakaway boom, nozzles",
        "Step 1 & 2: Measuring swath width and field speed determination over 50 m",
        "Step 3: Checking nozzle discharge uniformity across all tips (<\u00b15% tolerance)",
        "Step 4 & 5: Calibration formula derivation for total boom and single nozzle",
        "Three-tier regulation hierarchy: pressure adjustment, speed change, nozzle tip swapping"
      ]
    },
    {
      "id": "SOL223-U5-SUB10",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "questionText": "Explain the three standardized tractor hitch categories according to ISO / BIS standards. What happens if a Category II implement is hitched to a Category I tractor without proper conversion bushings?",
      "modelAnswer": "Tractor Three-Point Hitch Categories and Compatibility:\n\n1. Standardized Three-Point Hitch Categories:\nThe International Organization for Standardization (ISO 730) and Bureau of Indian Standards (IS 4468) define three-point hitch geometry based on tractor drawbar power:\n- Category I: For tractors up to 35-45 hp (25-35 kW). Lower link hitch pin diameter is 22.2 mm (7/8 in); top link pin diameter is 19.0 mm (3/4 in); lower hitch point spread is 683 mm (26.9 in).\n- Category II: For tractors from 45 to 100 hp (35-75 kW). Lower link pin diameter is 28.6 mm (1-1/8 in); top link pin diameter is 25.4 mm (1.0 in); lower hitch point spread is 825 mm (32.5 in).\n- Category III: For heavy tractors from 100 to 225 hp (75-165 kW). Lower link pin diameter is 36.5 mm (1-7/16 in); top link pin diameter is 31.8 mm (1-1/4 in); hitch point spread is 965 mm (38.0 in).\n\n2. Mismatched Hitching Without Conversion Bushings:\nIf an implement with Category II hitch pins (28.6 mm) is mounted directly onto a Category I tractor possessing smaller 22.2 mm ball eyes, the pins cannot physically insert into the balls. Conversely, if a Category I implement is attached to a Category II tractor without stepped conversion adapter bushings:\n- Severe Slop & Impact Shock: The loose 6.4 mm gap allows the implement to bash violently inside the link balls during transport and field reversing, causing severe shock loading.\n- Pin Shearing & Link Failure: Cyclic impact fatigue can shear the hitch pins or ovalize the ball joints.\n- Loss of Draft Control Precision: Slop isolates the top link from subtle soil resistance variations, causing erratic hunting in the hydraulic draft control.",
      "outlinePoints": [
        "Definition and power ratings of Category I, II, and III hitches",
        "Pin diameters and hitch point spread dimensions for Category I vs II",
        "Physical impossibility of oversized pins in smaller ball eyes",
        "Hazard of loose undersized pins: impact bashing, pin shear, ovalization",
        "Loss of hydraulic draft control sensing fidelity due to mechanical play"
      ]
    },
    {
      "id": "SOL223-U5-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "questionText": "Explain the difference between Volume Median Diameter (VMD) and Number Median Diameter (NMD) in spray droplet characterization.",
      "modelAnswer": "VMD vs NMD in Agricultural Spray Droplet Characterization:\n\n1. Volume Median Diameter (VMD or D_v0.5):\n- Definition: The droplet diameter such that 50% of the total liquid volume of the spray is contained in droplets of smaller diameter, and 50% of the volume is in larger droplets.\n- Agricultural Significance: VMD represents the mass distribution of the chemical. Because volume scales with the cube of the radius (V proportional to d\u00b3), a single 400-micron droplet contains the same chemical volume as 64 droplets of 100 microns. VMD dictates total chemical dosage, surface runoff risk, and canopy penetration.\n\n2. Number Median Diameter (NMD or D_n0.5):\n- Definition: The droplet diameter such that 50% of the total number of droplets in the spray cloud are smaller than this diameter, and 50% are larger.\n- Agricultural Significance: NMD represents droplet population count, which dictates droplet density (number of droplets hitting per square centimeter of leaf surface).\n\n3. The VMD / NMD Ratio (Relative Uniformity):\nIn hydraulic sprayers, VMD is always significantly larger than NMD (VMD/NMD ratio typically 2.0 to 3.5). A ratio approaching 1.0 indicates a highly uniform spray spectrum with minimal driftable fines and minimal wasteful overspray droplets.",
      "outlinePoints": [
        "Definition of Volume Median Diameter (VMD / D_v0.5) based on 50% volume",
        "Definition of Number Median Diameter (NMD / D_n0.5) based on 50% population count",
        "Cubic volume relationship (d\u00b3) illustrating volume concentration in large droplets",
        "Significance of VMD/NMD ratio as an index of droplet size uniformity"
      ]
    },
    {
      "id": "SOL223-U5-SUB12",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "questionText": "Define Pump Affinity Laws. State the mathematical relationships governing centrifugal pump speed changes.",
      "modelAnswer": "Centrifugal Pump Affinity Laws:\n\n1. Definition:\nThe Pump Affinity Laws are a set of mathematical proportionality equations derived from dimensional analysis that predict the performance characteristics (discharge, head, and power) of a geometrically similar centrifugal pump when either pump rotational speed or impeller diameter is varied.\n\n2. Affinity Laws for Variable Rotational Speed (Constant Impeller Diameter):\nWhen a pump's rotational speed changes from N1 to N2:\n- Law 1: Discharge (Q) varies directly proportional to rotational speed:\nQ2 / Q1 = N2 / N1\n(e.g., Increasing speed by 20% increases discharge by 20%.)\n- Law 2: Head (H) varies directly proportional to the square of rotational speed:\nH2 / H1 = (N2 / N1)\u00b2\n(e.g., Increasing speed by 20% increases head by (1.20)\u00b2 = 1.44, a 44% increase.)\n- Law 3: Brake Power (P) varies directly proportional to the cube of rotational speed:\nP2 / P1 = (N2 / N1)\u00b3\n(e.g., Increasing speed by 20% increases power absorbed by (1.20)\u00b3 = 1.728, a 72.8% increase.)\n\n3. Practical Agricultural Application:\nAffinity laws explain why slightly speeding up a tractor PTO-driven irrigation pump dramatically increases the required tractor engine horsepower, potentially overloading the tractor if speed is increased excessively.",
      "outlinePoints": [
        "Definition of Pump Affinity Laws derived from fluid dimensional analysis",
        "First Affinity Law: Discharge proportional to Speed (Q proportional to N)",
        "Second Affinity Law: Head proportional to Speed squared (H proportional to N\u00b2)",
        "Third Affinity Law: Power proportional to Speed cubed (P proportional to N\u00b3)",
        "Practical significance: massive horsepower surge when speeding up irrigation pumps"
      ]
    },
    {
      "id": "SOL223-U5-SUB13",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "questionText": "A farmer operates a tractor boom sprayer with 18 flat fan nozzles spaced 50 cm apart. The recommended application rate of an insecticide is 200 L/ha. If the calibrated discharge of each nozzle is 0.85 L/min at 2.5 bar, calculate: (a) Total swath width in meters, (b) Forward speed in km/h the tractor must maintain, and (c) If the spray tank holds 600 liters, how many hectares can be sprayed per full tank?",
      "modelAnswer": "Given Parameters:\n- Number of nozzles (N) = 18\n- Nozzle spacing (S) = 50 cm = 0.50 m\n- Target application rate (AR) = 200 L/ha\n- Discharge per nozzle (q) = 0.85 L/min\n- Spray tank capacity = 600 liters\n\nStep 1: Calculate Total Swath Width (W):\nW = N * S = 18 * 0.50 m = 9.0 meters\n\nStep 2: Calculate Total Boom Discharge (Q_total):\nQ_total = N * q = 18 * 0.85 L/min = 15.3 L/min\n\nStep 3: Calculate Required Forward Speed (V in km/h):\nFormula: Application Rate (L/ha) = (600 * Q_total) / (W * V)\nRearranging for Speed (V):\nV = (600 * Q_total) / (W * AR)\nV = (600 * 15.3) / (9.0 * 200)\nV = 9180 / 1800 = 5.10 km/h\nAlternatively using single nozzle formula: V = (60,000 * 0.85) / (0.50 * 200 * 500) = 51,000 / 10,000 = 5.10 km/h.\n\nStep 4: Calculate Area Sprayed per Full Tank (A_tank):\nArea = Tank Capacity / Application Rate\nArea = 600 L / 200 L/ha = 3.0 hectares\n\nFinal Answers:\n(a) Total Swath Width = 9.0 meters\n(b) Forward Tractor Speed = 5.10 km/h\n(c) Area Sprayed per Tank = 3.0 hectares",
      "outlinePoints": [
        "Listing given boom parameters, nozzle discharge, and target rate",
        "Computation of total boom swath width (9.0 m)",
        "Calculation of total boom discharge rate (15.3 L/min)",
        "Mathematical determination of required tractor speed (5.10 km/h)",
        "Computation of acreage coverage per 600 L tank (3.0 ha)"
      ]
    },
    {
      "id": "SOL223-U5-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "questionText": "Describe the operational differences between Sliding Mesh, Constant Mesh, and Synchromesh gearboxes in agricultural tractors.",
      "modelAnswer": "Evolution of Tractor Transmission Gearboxes:\n\n1. Sliding Mesh Gearbox:\n- Mechanism: Straight-cut spur gears slide axially along splined transmission shafts to engage mating gears on the countershaft.\n- Operational Limitations: Gears can only be engaged when the tractor is completely stationary. Shifting while moving causes severe gear clashing and tooth chipping. Straight-cut teeth produce high transmission noise under heavy tillage.\n\n2. Constant Mesh Gearbox:\n- Mechanism: Helical or spur gears remain continuously in mesh with mating gears. Gears rotate freely on bushings on the output shaft until locked to the shaft by sliding internal splined dog clutches.\n- Operational Features: Eliminates tooth edge chipping during engagement and allows the use of quieter helical gear profiles, though double-clutching is still required to match shaft speeds when shifting on the move.\n\n3. Synchromesh Gearbox:\n- Mechanism: Features brass friction synchronizer cones between mating gears. When shifting, the synchronizer cone contacts the gear hub first, using friction to accelerate or decelerate the gear to match output shaft speed before the sliding collar dog teeth engage.\n- Operational Superiority: Enables effortless, noise-free, on-the-move gear shifting without clashing or double-clutching, standard on modern agricultural tractors.",
      "outlinePoints": [
        "Sliding mesh: spur gears sliding into mesh; stationary shifting only",
        "Constant mesh: gears continuously meshed, engaged via sliding dog clutches",
        "Synchromesh: brass friction cones equalizing speeds before dog engagement",
        "Operational comparison: clashing risk vs smooth on-the-move shifting"
      ]
    },
    {
      "id": "SOL223-U5-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)",
      "questionText": "Compare a Surface Centrifugal Pump with a Deep Tubewell Submersible Pump across four practical criteria.",
      "modelAnswer": "Surface Centrifugal Pump vs Submersible Pump:\n\n1. Installation Position & Suction Lift Limits:\n- Surface Centrifugal: Installed on ground surface or in a shallow dry pit. Limited by physics to a maximum practical suction lift of 6.0 to 7.5 meters. Completely inoperable in deep tubewells where water tables drop below 8 meters.\n- Submersible Pump: Both pump and electric motor are suspended deep inside the well casing beneath the water table. Operates under positive head; zero suction lift restrictions, capable of pumping from depths of 100 to 300+ meters.\n\n2. Priming Requirements & Cavitation Vulnerability:\n- Surface Centrifugal: Requires manual priming (filling suction pipe with water) before startup if a foot valve leaks. Highly vulnerable to cavitation if water levels decline in summer.\n- Submersible: Self-priming because impellers are perpetually submerged in water; cavitation at the suction eye is virtually impossible under proper submergence.\n\n3. Weather Protection & Vandalism Security:\n- Surface Centrifugal: Requires a weatherproof pumphouse to protect the motor from rain and theft.\n- Submersible: Safely housed deep underground inside the borewell casing, immune to surface weather extremes and tamper-proof.\n\n4. Maintenance Accessibility:\n- Surface Centrifugal: Easy to inspect, lubricate, and replace packings/mechanical seals on-site.\n- Submersible: Maintenance requires pulling hundreds of meters of heavy steel column pipe with a tripod crane, incurring high labor costs.",
      "outlinePoints": [
        "Installation location and suction lift boundary (6-7 m vs unlimited depth)",
        "Priming requirements: mandatory manual priming vs automatic submergence",
        "Weather vulnerability and underground anti-theft security",
        "Maintenance accessibility: on-surface ease vs expensive well extraction"
      ]
    },
    {
      "id": "SOL223-U5-SUB16",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "questionText": "Explain the 50-hour, 250-hour, 500-hour, and 1000-hour periodic maintenance schedules for an agricultural tractor diesel engine and chassis.",
      "modelAnswer": "Comprehensive Periodic Maintenance Protocols for Agricultural Tractors:\n\nPreventive maintenance minimizes unscheduled downtime during critical planting and harvesting seasons, preserves thermal efficiency, and prevents catastrophic mechanical failures.\n\n1. Daily (10-Hour) Maintenance Service:\n- Check engine crankcase oil level using the dipstick; replenish with recommended API grade oil.\n- Inspect coolant level in the radiator recovery expansion tank; check fan belt tension.\n- Empty the cyclonic dust pre-cleaner bowl; inspect air cleaner restriction indicator.\n- Drain accumulated water and sediment from the primary fuel filter water trap bowl.\n- Grease front axle pivot pins, steering drag links, and kingpins using a grease gun.\n\n2. 50-Hour Maintenance Service:\n- Clean the main dry air cleaner element by gently blowing low-pressure compressed air (<3 bar) from inside out; replace if paper pleats are punctured.\n- Check tire inflation pressures (1.0-1.4 bar rear drive tires; 1.8-2.2 bar front tires).\n- Lubricate three-point hitch ball joints, lift rod gearboxes, and leveling linkages.\n- Inspect brake pedal free-play (approx. 25-30 mm) and clutch pedal free-play (approx. 20-25 mm).\n\n3. 250-Hour Maintenance Service (Primary Minor Service):\n- Drain warm engine lubricating oil; replace engine oil filter cartridge with a new element.\n- Clean fuel sediment bowl and wash the nylon strainer with clean diesel.\n- Inspect battery electrolyte specific gravity (1.260 at full charge); clean terminals and coat with petroleum jelly.\n- Inspect transmission, differential, and hydraulic oil dipstick levels; top up if needed.\n\n4. 500-Hour Maintenance Service (Intermediate Service):\n- Replace primary and secondary fuel filter elements; bleed the fuel system of entrained air.\n- Clean the engine crankcase breather tube and PCV valve.\n- Inspect wheel hub bearing end-play and tighten wheel lug nuts to specified torque.\n- Wash external radiator cooling fins with low-pressure water to remove chaff and insect debris.\n\n5. 1000-Hour Maintenance Service (Major Overhaul Service):\n- Completely drain and replace transmission, rear axle differential, and hydraulic fluid (typically 40 to 60 liters of multi-grade tractor hydraulic fluid).\n- Remove and clean the internal hydraulic suction oil strainer and replace the hydrostatic filter.\n- Flush engine cooling system with radiator cleaner and refill with fresh 50:50 glycol-water mixture.\n- Remove fuel injectors and test spray pattern and popping opening pressure on a nozzle tester.\n- Adjust engine intake and exhaust valve tappet clearances using feeler gauges.",
      "outlinePoints": [
        "Daily (10 h): oil level, coolant, pre-cleaner dust, fuel water trap, grease points",
        "50-hour: air filter dusting, tire pressures, pedal free-play adjustments",
        "250-hour: engine oil and filter change, battery specific gravity, fluid top-ups",
        "500-hour: fuel filter replacement, radiator fin washing, wheel bearing checks",
        "1000-hour: transmission/hydraulic oil drain, hydraulic strainer, injector testing, valve lash"
      ]
    },
    {
      "id": "SOL223-U5-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)",
      "questionText": "A 100-meter-long drip lateral pipe has 100 in-line emitters spaced 1.0 meter apart. Each emitter discharges 4.0 L/h at a nominal pressure of 1.0 bar. According to Christiansen's hydraulic rule, head loss in the lateral must not exceed 20% of emitter operating pressure. Calculate: (a) Total lateral discharge in L/h and L/s, (b) Maximum allowable friction head loss in the lateral, and (c) Required inlet pressure if emitter pressure at the tail end is maintained at 1.0 bar.",
      "modelAnswer": "Given Parameters:\n- Lateral length (L) = 100 m\n- Number of emitters = 100\n- Emitter nominal discharge (q) = 4.0 L/h\n- Nominal emitter pressure = 1.0 bar (approx. 10.0 m of water head)\n- Maximum allowable head loss (Delta H_max) = 20% of operating head\n\nStep 1: Calculate Total Lateral Discharge (Q_lat):\nTotal discharge = Number of emitters * Single emitter discharge\nQ_lat = 100 * 4.0 L/h = 400.0 L/h\nConverting to liters per second: Q_lat = 400.0 / 3600 = 0.111 L/s\n\nStep 2: Calculate Maximum Allowable Friction Head Loss (Delta H_allowable):\nOperating pressure head H = 1.0 bar = 10.0 meters of water\nDelta H_allowable = 20% of 10.0 m\nDelta H_allowable = 0.20 * 10.0 m = 2.0 meters of water head (0.20 bar)\n\nStep 3: Calculate Required Lateral Inlet Pressure (P_inlet):\nTo ensure that the furthest downstream emitter at the tail end receives at least 1.0 bar (10.0 m) after frictional loss:\nP_inlet = Tail End Pressure + Maximum Friction Loss\nP_inlet = 10.0 m + 2.0 m = 12.0 meters of water head\nConverting to bar: P_inlet = 12.0 / 10.0 = 1.20 bar\n\nFinal Answers:\n(a) Total Lateral Discharge = 400 L/h (0.111 L/s)\n(b) Maximum Allowable Friction Head Loss = 2.0 meters (0.20 bar)\n(c) Required Lateral Inlet Pressure = 1.20 bar (12.0 m head)",
      "outlinePoints": [
        "Listing lateral parameters and 20% hydraulic allowable loss rule",
        "Computation of total lateral water discharge (400 L/h / 0.111 L/s)",
        "Determination of maximum allowable friction loss (2.0 m head)",
        "Calculation of required lateral inlet pressure (1.20 bar / 12 m head)"
      ]
    },
    {
      "id": "SOL223-U5-SUB18",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems",
      "questionText": "Define Transmission PTO, Live PTO, and Independent PTO on agricultural tractors. How do their operating mechanisms differ?",
      "modelAnswer": "Classification of Tractor Power Take-Off (PTO) Drives:\n\n1. Transmission PTO (Conventional PTO):\n- Working Mechanism: The PTO shaft is driven directly from the output side of the tractor's main transmission gearbox via a simple mechanical dog clutch.\n- Operational Behavior: Depressing the single foot clutch pedal disengages both the tractor ground drive and the PTO shaft simultaneously. If the tractor stops, the PTO stops. Unsuitable for balers or rotary tillers because starting the implement requires moving the tractor.\n\n2. Live PTO:\n- Working Mechanism: Driven by a dual-stage friction clutch assembly mounted on the engine flywheel. The clutch contains two separate pressure plates operated by a two-stage foot pedal.\n- Operational Behavior: Depressing the clutch pedal halfway disengages the primary plate (stopping tractor ground motion) while the secondary plate keeps the PTO shaft spinning. Fully depressing the pedal disengages both drives. Allows clearing jammed implements while stationary.\n\n3. Independent PTO (IPTO):\n- Working Mechanism: Driven directly from the engine flywheel through a dedicated hydraulic multi-plate wet clutch pack, completely independent of the transmission or foot clutch.\n- Operational Behavior: Controlled by a separate hand lever or electric switch on the console. The PTO can be engaged, disengaged, or modulated on the move regardless of vehicle travel speed or foot clutch position.",
      "outlinePoints": [
        "Definition and single-clutch limitation of Transmission PTO",
        "Definition, dual-stage clutch mechanics, and two-position pedal of Live PTO",
        "Definition, dedicated hydraulic clutch pack, and hand-lever control of Independent PTO",
        "Operational superiority of Independent PTO for modern farm implements"
      ]
    },
    {
      "id": "SOL223-U5-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system",
      "questionText": "A 4-wheel drive agricultural tractor has an engine developing 50 kW at 2200 rpm. The total gear reduction ratio in working gear is 48:1. If transmission mechanical efficiency is 86%, drive tire rolling radius is 0.70 meters, and travel speed is 4.5 km/h, calculate: (a) Engine torque in Nm, (b) Total axle torque in kNm, and (c) Maximum theoretical tractive effort (pull) developed in kN.",
      "modelAnswer": "Given Parameters:\n- Engine power (P_e) = 50 kW = 50,000 W\n- Engine rotational speed (N_e) = 2200 rpm\n- Total transmission gear ratio (G) = 48:1\n- Transmission mechanical efficiency (eta_t) = 86% = 0.86\n- Drive wheel rolling radius (R) = 0.70 m\n- Travel speed (V) = 4.5 km/h = 1.25 m/s\n\nStep 1: Calculate Engine Torque (T_e in Nm):\nP_e = (2 * pi * N_e * T_e) / 60\nT_e = (60 * P_e) / (2 * pi * N_e)\nT_e = (60 * 50,000) / (2 * 3.14159 * 2200)\nT_e = 3,000,000 / 13,823.0 = 217.03 Nm\n\nStep 2: Calculate Total Axle Torque (T_axle in kNm):\nAxle torque incorporates gear multiplication and mechanical efficiency:\nT_axle = T_e * G * eta_t\nT_axle = 217.03 Nm * 48 * 0.86\nT_axle = 217.03 * 41.28 = 8959.0 Nm = 8.959 kNm (approx. 8.96 kNm)\n\nStep 3: Calculate Maximum Theoretical Tractive Effort (F_tractive in kN):\nTractive force is the tangential push exerted at the tire-ground contact patch:\nF_tractive = T_axle / R\nF_tractive = 8959.0 Nm / 0.70 m = 12,798.6 N = 12.80 kN\n\nFinal Answers:\n(a) Engine Torque = 217.03 Nm\n(b) Total Axle Torque = 8.96 kNm\n(c) Theoretical Tractive Effort = 12.80 kN",
      "outlinePoints": [
        "Listing engine power, speed, gear reduction, and rolling radius",
        "Computation of engine brake torque (217.03 Nm)",
        "Determination of total rear axle torque with 86% efficiency (8.96 kNm)",
        "Calculation of maximum theoretical tractive effort (12.80 kN)"
      ]
    },
    {
      "id": "SOL223-U5-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer",
      "questionText": "Describe the construction and working of a compression-type hand sprayer (pneumatic knapsack sprayer).",
      "modelAnswer": "Construction and Working of a Compression (Pneumatic) Sprayer:\n\n1. Functional Concept:\nUnlike continuous-pumping knapsack sprayers where the operator pumps with one hand while spraying with the other, a compression sprayer is pressurized prior to spraying. It delivers chemical mist autonomously under internal pneumatic pressure until pressure depletes.\n\n2. Key Structural Components:\n- Pressure Tank: A seamless brass, stainless steel, or reinforced polymer cylindrical vessel (typically 6 to 12 L capacity) designed to safely withstand test pressures of 6 to 8 bar.\n- Central Plunger Pump: A hand-operated piston pump suspended in the center of the tank, fitted with a leather or Viton cup washer and bottom check valve.\n- Pressure Relief Valve (Safety Valve): A spring-loaded valve that vents air if pressure exceeds 4.5 bar, preventing tank rupture.\n- Discharge Assembly: Includes a dip tube extending to the tank bottom, flexible delivery hose, trigger cut-off valve, lance, and swirl nozzle.\n\n3. Operational Sequence:\nThe tank is filled with chemical liquid to 75% capacity, leaving a 25% overhead air chamber. The pump cylinder is screwed tightly into the top filler opening. The operator strokes the central pump handle 30 to 40 times, compressing the trapped air space to roughly 3.0 to 4.0 bar. The operator then locks the handle, straps the unit to their back, and opens the hand lance trigger. The compressed air cushion forces liquid up through the dip tube and out the nozzle until pressure drops to ~1.0 bar, requiring re-pumping.",
      "outlinePoints": [
        "Functional principle: pre-pressurization eliminating continuous hand pumping",
        "Components: pressure vessel, central plunger pump, relief valve, discharge lance",
        "The 75% liquid to 25% overhead air ratio rule",
        "Operational cycle: manual pumping to 3-4 bar, hands-free spraying, re-pressurization"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL223-U5-FC01",
      "front": "What is the theoretical maximum suction lift of a surface centrifugal pump?",
      "back": "10.33 meters at sea level under standard atmospheric pressure (practical limit: 6.0 to 7.5 m).",
      "hint": "10.33 m theoretical",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)"
    },
    {
      "id": "SOL223-U5-FC02",
      "front": "Define Cavitation in an agricultural irrigation pump.",
      "back": "Formation and violent implosion of water vapor cavities when pressure drops below vapor pressure, causing pitting erosion.",
      "hint": "Vapor bubble implosion causing metal erosion",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)"
    },
    {
      "id": "SOL223-U5-FC03",
      "front": "What condition must be met to prevent pump cavitation?",
      "back": "NPSHA (Net Positive Suction Head Available) must exceed NPSHR (Required) by at least 0.5 to 1.0 meter.",
      "hint": "NPSHA > NPSHR",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)"
    },
    {
      "id": "SOL223-U5-FC04",
      "front": "What is the metric formula for Water Horsepower (WHP)?",
      "back": "WHP = (Q in L/s * Total Dynamic Head in m) / 75.",
      "hint": "(Q * H) / 75",
      "syllabusTopic": "Irrigation pumps (centrifugal, submersible, turbine)"
    },
    {
      "id": "SOL223-U5-FC05",
      "front": "What is the water application efficiency of a well-maintained drip irrigation system?",
      "back": "90% to 95%, delivering water directly to the root zone with near-zero evaporation.",
      "hint": "90% to 95%",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)"
    },
    {
      "id": "SOL223-U5-FC06",
      "front": "What is the function of a Venturi injector in micro-irrigation?",
      "back": "Creates a localized vacuum constriction that siphons liquid fertilizers directly into pressurized irrigation water.",
      "hint": "Siphons liquid fertilizer using differential pressure",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)"
    },
    {
      "id": "SOL223-U5-FC07",
      "front": "What is the standard mesh rating of disc/screen filters in drip irrigation?",
      "back": "120 mesh (approx. 130 microns), preventing clogging of dripper labyrinths.",
      "hint": "120 mesh",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)"
    },
    {
      "id": "SOL223-U5-FC08",
      "front": "What is a Pressure-Compensating (PC) drip emitter?",
      "back": "An emitter containing an elastomeric diaphragm that maintains constant discharge across varying operating pressures.",
      "hint": "Constant discharge diaphragm emitter",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)"
    },
    {
      "id": "SOL223-U5-FC09",
      "front": "Which hydraulic nozzle is preferred for broadcast herbicide boom spraying?",
      "back": "Flat fan nozzle, which produces an overlapping tapered flat spray sheet.",
      "hint": "Flat fan nozzle",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer"
    },
    {
      "id": "SOL223-U5-FC10",
      "front": "Which hydraulic nozzle is preferred for foliar insecticide/fungicide spraying?",
      "back": "Hollow cone nozzle, which produces fine swirling droplets that penetrate dense foliage.",
      "hint": "Hollow cone nozzle",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer"
    },
    {
      "id": "SOL223-U5-FC11",
      "front": "Define Volume Median Diameter (VMD) in agricultural spraying.",
      "back": "The droplet diameter such that 50% of the total spray liquid volume is in droplets smaller than this diameter.",
      "hint": "50% volume droplet diameter",
      "syllabusTopic": "Sprayers \u2014 knapsack, power sprayer, boom sprayer"
    },
    {
      "id": "SOL223-U5-FC12",
      "front": "What is the function of the differential lock on an agricultural tractor?",
      "back": "Mechanically locks both rear axle shafts together so both wheels turn at identical speeds to escape mud.",
      "hint": "Locks rear drive wheels together in mud",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system"
    },
    {
      "id": "SOL223-U5-FC13",
      "front": "When should Position Control be used on an agricultural tractor?",
      "back": "When operating implements requiring fixed height or depth: seed drills, sprayers, fertilizer spreaders, and transport.",
      "hint": "Holds fixed implement height/depth",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system"
    },
    {
      "id": "SOL223-U5-FC14",
      "front": "When should Draft Control be selected on an agricultural tractor?",
      "back": "When operating heavy primary tillage implements (MB plough, subsoiler) in variable soil to prevent engine stall.",
      "hint": "Automatic depth adjustment for soil resistance",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system"
    },
    {
      "id": "SOL223-U5-FC15",
      "front": "What is the lower link hitch pin diameter for a Category I three-point hitch?",
      "back": "22.2 mm (7/8 inch) under standardized ISO/BIS specifications.",
      "hint": "22.2 mm (7/8 in)",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system"
    },
    {
      "id": "SOL223-U5-FC16",
      "front": "What is the lower link hitch pin diameter for a Category II three-point hitch?",
      "back": "28.6 mm (1-1/8 inch) for tractors from 45 to 100 hp.",
      "hint": "28.6 mm (1-1/8 in)",
      "syllabusTopic": "Tractor \u2014 engine, transmission, hydraulic system"
    },
    {
      "id": "SOL223-U5-FC17",
      "front": "What is a Live PTO on an agricultural tractor?",
      "back": "A PTO driven by a dual-stage clutch; half pedal stops travel while the PTO keeps spinning; full pedal stops both.",
      "hint": "Dual-stage clutch control",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems"
    },
    {
      "id": "SOL223-U5-FC18",
      "front": "What is an Independent PTO (IPTO)?",
      "back": "A PTO driven by a dedicated hydraulic clutch, operated by a hand switch independently of vehicle travel or foot clutch.",
      "hint": "Independent hydraulic clutch",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems"
    },
    {
      "id": "SOL223-U5-FC19",
      "front": "What is the standard engine oil and filter change interval for an agricultural tractor?",
      "back": "Every 250 operational hours under standard manufacturer maintenance schedules.",
      "hint": "Every 250 hours",
      "syllabusTopic": "Tractor maintenance; PTO; implement hitching systems"
    },
    {
      "id": "SOL223-U5-FC20",
      "front": "What is the Christiansen Uniformity Coefficient (CU) threshold for well-designed sprinklers?",
      "back": "Greater than 85% (CU > 85%), indicating highly uniform spatial water distribution.",
      "hint": "Greater than 85%",
      "syllabusTopic": "Micro-irrigation (drip, sprinkler)"
    }
  ]
};
