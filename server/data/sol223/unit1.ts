import { UnitContent } from "./types";

export const unit1Content: UnitContent = {
  "unitNumber": 1,
  "title": "Sources of Farm Power",
  "shortDescription": "Comprehensive analysis of agricultural power sources including human, animal, mechanical, electrical, and renewable energy, alongside thermodynamic power measurement and farm ergonomics.",
  "estimatedReadTimeMinutes": 22,
  "syllabusTopics": [
    "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
    "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
    "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
    "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
    "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
    "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
    "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)"
  ],
  "notes": {
    "learningObjectives": [
      "Quantify human, animal, mechanical, electrical, and renewable power outputs and thermodynamic conversion efficiencies in Indian agriculture.",
      "Calculate Indicated Horsepower (IHP), Brake Horsepower (BHP), Frictional Horsepower (FHP), Drawbar Horsepower (DBHP), and tractive efficiencies.",
      "Evaluate aerodynamic power extraction in multi-blade farm windmills according to the Betz limit and design solar photovoltaic irrigation systems.",
      "Apply ergonomic principles, acoustic exposure limits (85 dBA threshold), vibration mitigation, and Roll-Over Protective Structure (ROPS) safety standards."
    ],
    "sections": [
      {
        "id": "sec-1-1",
        "heading": "1. Animate Power in Agriculture: Human and Animal Energy",
        "content": "Animate power remains a vital energy source for marginal and smallholder farming in India, accounting for critical field operations like weeding, transplanting, and localized transport.\n\nAn adult male agricultural worker under tropical conditions develops an average continuous sustained power output of approximately 0.10 hp (75 Watts), with female workers developing approximately 0.08 hp (60 Watts). Peak physical exertion can generate 0.5 hp for brief intervals of under 30 seconds, but sustained work is physiologically bounded by an oxygen consumption rate of 1.0 to 1.2 L/min and maximum sustained heart rate between 110 and 120 beats per minute.\n\nWorking bullocks (*Bos indicus*) exert a continuous draft force of approximately 10% to 12% of their total body weight for sustained 6 to 8-hour working days. A typical pair of Indian draft bullocks weighing a combined 800 kg can exert a sustained pull of 80 to 95 kgf (785 to 932 N) at walking speeds between 2.5 and 3.5 km/h, delivering approximately 0.75 to 1.0 hp (560 to 746 Watts) of draft power.\n\nTraditional wooden neck yokes concentrate high compressive stresses over a limited contact patch (150-200 cm\u00b2), causing neck calluses, gall sores, and significant physiological fatigue. Improved harnessing systems\u2014such as padded collar harnesses and the Allahabad three-pad harness\u2014distribute pulling forces evenly across the animal's skeletal shoulder frame, increasing sustainable draft power delivery by 20% to 30% while reducing thermal and muscular fatigue.",
        "subsections": [
          {
            "subheading": "Comparative Performance of Animate vs Small Mechanical Power Sources",
            "content": "Operational metrics comparing human, draft animal, and small mechanization units:",
            "table": {
              "headers": [
                "Metric",
                "Adult Human Laborer",
                "Pair of Medium Bullocks (800 kg)",
                "Small Power Tiller (10 hp)"
              ],
              "rows": [
                [
                  "Continuous Power",
                  "0.08 - 0.10 hp (60-75 W)",
                  "0.75 - 1.00 hp (560-746 W)",
                  "10 hp (7.4 kW)"
                ],
                [
                  "Sustained Daily Working Time",
                  "6 - 8 hours",
                  "6 hours (with mandatory rest)",
                  "10 - 12 hours"
                ],
                [
                  "Continuous Draft Exertion",
                  "15 - 25 kgf",
                  "80 - 100 kgf",
                  "300 - 450 kgf"
                ],
                [
                  "Operating Speed",
                  "2.0 - 2.5 km/h",
                  "2.5 - 3.5 km/h",
                  "3.5 - 5.0 km/h"
                ],
                [
                  "Energy Conversion Efficiency",
                  "15 - 20% (metabolic)",
                  "9 - 11% (feed to draft)",
                  "28 - 34% (diesel fuel)"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-1-2",
        "heading": "2. Mechanical and Electrical Power Sources in Agriculture",
        "content": "Mechanical power on modern agricultural holdings is delivered primarily by Compression Ignition (CI) diesel engines mounted on tractors, power tillers, self-propelled harvesters, and irrigation pumpsets. Agricultural machinery overwhelmingly relies on diesel engines rather than Spark Ignition (SI) petrol engines because of superior thermodynamic thermal efficiency (32-38% vs 22-28%), lower specific fuel consumption (190-225 g/kWh vs 270-330 g/kWh), higher torque output at low rotational speeds, lower volatility fuel storage safety, and extended operational longevity.\n\nElectric power represents the most cost-effective and energy-efficient source for stationary farm operations, including deep-well submersible water pumping, threshing, chaff cutting, and grain milling. Three-phase squirrel-cage induction motors are the industry standard due to their brushless ruggedness, absence of commutator spark hazard, high electrical-to-mechanical conversion efficiency (>85-92%), and minimal maintenance requirements.\n\nHowever, rural power feeders frequently suffer from inductive reactive loads, yielding lagging power factors as low as 0.65 to 0.75 and causing severe line losses and voltage sags. Installing shunt power capacitor banks at farm pump terminals elevates the power factor to near unity (0.95-0.98), reducing line current, lowering distribution transformer heating, and stabilizing supply voltages.",
        "subsections": [
          {
            "subheading": "Four-Stroke Diesel (CI) vs Petrol (SI) Engines in Farm Traction",
            "content": "Thermodynamic and structural comparisons of tractor engine systems:",
            "table": {
              "headers": [
                "Engineering Parameter",
                "Diesel Engine (CI)",
                "Petrol Engine (SI)"
              ],
              "rows": [
                [
                  "Thermodynamic Cycle",
                  "Diesel Cycle / Dual Cycle",
                  "Otto Cycle"
                ],
                [
                  "Compression Ratio Range",
                  "14:1 to 22:1",
                  "6:1 to 10:1"
                ],
                [
                  "Fuel Induction System",
                  "Direct/Indirect High-Pressure Injection (150-250 bar)",
                  "Carburettor or Port Injection (low pressure)"
                ],
                [
                  "Ignition Mechanism",
                  "Heat of compressed air (auto-ignition)",
                  "Timed electric spark plug arc"
                ],
                [
                  "Brake Thermal Efficiency",
                  "32% - 38%",
                  "22% - 28%"
                ],
                [
                  "Torque Rise Characteristics",
                  "High torque at low engine RPM (ideal for tillage lugging)",
                  "Moderate torque requiring high rotational speeds"
                ],
                [
                  "Specific Fuel Consumption",
                  "190 - 225 g/kWh",
                  "280 - 340 g/kWh"
                ]
              ]
            }
          }
        ]
      },
      {
        "id": "sec-1-3",
        "heading": "3. Renewable Energy: Agricultural Windmills and Solar Systems",
        "content": "Renewable energy technologies mitigate farm vulnerability to grid instability and diesel price volatility.\n\n**Agricultural Windmills:** Water-pumping windmills commonly deploy multi-blade horizontal-axis rotors (12 to 24 galvanized steel blades) designed for high starting torque at low cut-in wind velocities (2.5 to 3.5 m/s). Kinetic power available in a wind stream is calculated as:\nP = 0.5 * rho * A * V^3\nwhere rho is air density (1.225 kg/m\u00b3 at sea level), A is swept rotor area (m\u00b2), and V is instantaneous wind velocity (m/s). According to the aerodynamic Betz Limit, no wind turbine can convert more than 16/27 (59.3%) of the kinetic energy in wind into mechanical shaft power (maximum power coefficient C_p = 0.593).\n\n**Solar Photovoltaic (SPV) Water Pumping:** Standalone SPV pumping systems deploy mono-crystalline or multi-crystalline photovoltaic solar arrays directly coupled to variable frequency drives (VFD) and brushless DC (BLDC) or AC induction motor-pumps. Under Standard Test Conditions (STC: 1000 W/m\u00b2 irradiance, 25\u00b0C cell temperature, AM 1.5 spectrum), a 3 hp (2.2 kW) to 5 hp (3.7 kW) SPV pump delivers 70,000 to 150,000 liters of water daily from total dynamic heads of 10 to 50 meters, eliminating recurring operating fuel expenditures under national programs such as PM-KUSUM.\n\n**Solar Thermal Crop Dryers:** Natural and forced convection solar tunnel and cabinet dryers protect harvested crops from rain, insects, and fungal aflatoxins, reducing moisture content from 80% to safe storage thresholds (<12%) through greenhouse solar thermal absorption.",
        "subsections": [
          {
            "subheading": "Solar Photovoltaic Pumping Efficiency Cascade",
            "content": "The overall system efficiency of an SPV water pumping installation represents the product of subsystem efficiencies: PV Array Efficiency (16-20%) x Inverter/VFD Controller Efficiency (94-97%) x Motor-Pump Wire-to-Water Efficiency (50-65%), resulting in an overall solar-to-hydraulic power efficiency of 8% to 12%."
          }
        ]
      },
      {
        "id": "sec-1-4",
        "heading": "4. Power Measurement Terminology and Mathematical Calculations",
        "content": "Precise characterization of tractor and engine capacity requires rigorous distinction between internal thermodynamic power, flywheel power, PTO power, and drawbar pulling capacity:\n\n1. **Indicated Horsepower (IHP):** The total thermodynamic power generated by fuel combustion inside the engine cylinders against the piston heads.\nIHP (Metric) = (P_m * L * A * N * n) / 4500\nwhere P_m is mean effective pressure (kg/cm\u00b2), L is piston stroke length (m), A is cylinder cross-sectional area (cm\u00b2), N is power strokes per minute (N/2 for a 4-stroke engine, N for a 2-stroke engine), and n is number of cylinders.\nIn SI units: P_ind (kW) = (p_m * L * A * n_c * (N / 60)) / 1000, where p_m is in Pascals and N is power strokes/sec.\n\n2. **Brake Horsepower (BHP):** The actual usable mechanical shaft power delivered at the engine flywheel, measured using a dynamometer (Prony brake, hydraulic, or eddy current dynamometer):\nBHP (Metric) = (2 * pi * N * T) / 4500\nwhere T is engine torque (kgf*m) and N is crankshaft rpm. In SI units: P_brake (kW) = (2 * pi * N * T) / 60000, where T is in N*m.\n\n3. **Frictional Horsepower (FHP):** Internal parasitic power loss consumed by bearing friction, piston ring drag, valve actuation, water pump, and oil churning: FHP = IHP - BHP. Evaluated experimentally using Willans line extrapolation or the Morse Test for multi-cylinder engines.\n\n4. **Power Take-Off (PTO) Power:** Mechanical power delivered through the rear splined PTO shaft to dynamic driven implements (rotavators, threshers, balers). The standard agricultural PTO rotates at 540 \u00b1 10 rpm (6 splines, 34.9 mm diameter) or 1000 \u00b1 25 rpm (21 splines, 34.9 mm diameter) at rated engine speed. PTO power is roughly 88% to 92% of flywheel BHP.\n\n5. **Drawbar Horsepower (DBHP):** The pulling power exerted by the tractor through its drawbar to pull trailing tillage and transport implements across the ground:\nDBHP (Metric) = (Draft (kgf) * Travel Speed (km/h)) / 270\nIn SI units: P_db (kW) = (Draft (kN) * Travel Speed (km/h)) / 3.6\nDrawbar efficiency = DBHP / PTO HP (typically 55% to 75%, governed by wheel slip, soil traction coefficient, and rolling resistance).",
        "subsections": [
          {
            "subheading": "Engine Performance Efficiencies Summary",
            "content": "Core thermodynamic and driveline conversion efficiencies:",
            "keyPoints": [
              "Mechanical Efficiency (eta_m) = (BHP / IHP) * 100 (typically 80% to 88% at full engine load).",
              "Brake Thermal Efficiency (eta_bth) = (BHP * 632.5) / (m_f * C_v) * 100, where m_f is fuel mass flow (kg/h) and C_v is calorific value (kcal/kg).",
              "Transmission Efficiency = (PTO Power / Flywheel BHP) * 100 (typically 88% to 93%).",
              "Tractive Efficiency = (Drawbar Power / Axle Power) * 100 (maximized at 10-15% wheel slip in tilled soil)."
            ]
          }
        ]
      },
      {
        "id": "sec-1-5",
        "heading": "5. Ergonomics, Farm Safety, Vibration, and ROPS Architecture",
        "content": "Agricultural operations present severe occupational health hazards, including high ambient acoustic pressure, low-frequency whole-body vibration, and traumatic machinery rollovers.\n\n**Acoustic Exposure and Hearing Conservation:** Agricultural tractors without sound-insulated cabs produce sound pressure levels of 88 to 98 dB(A) at the operator's ear level. Indian Standards (IS 12180) and OSHA specify a maximum permissible continuous acoustic exposure limit of 85 dB(A) for an 8-hour workday. Continuous exposure to levels exceeding 90 dB(A) induces permanent sensorineural hearing loss, requiring acoustic cabin insulation, tuned exhaust mufflers, and earplugs/earmuffs.\n\n**Whole-Body Vibration (WBV):** Tractor operation over unpaved field terrain subjects drivers to severe low-frequency vibration (1 to 20 Hz). The human spinal column resonates dangerously between 4 and 8 Hz, accelerating lumbar disc herniation, microvascular damage, and chronic lower back pain. Ergonomic suspension seats equipped with hydraulic-pneumatic dampers and weight-adjustable coil springs attenuate acceleration spikes.\n\n**Tractor Rollover Protection:** Overturning (lateral rollover on slopes or rearward pitch during high-hitch pulling) accounts for over 50% of fatal farm accidents. Rearward rollover can occur in under 0.75 seconds if the implement is hitched above the rear axle center. Roll-Over Protective Structures (ROPS)\u2014mandated by IS 11821 and OECD Code 4\u2014provide a rigid structural safety frame that prevents cab crushing and, when paired with a fastened seatbelt, preserves an uncrushed survival envelope for the operator.",
        "subsections": [
          {
            "subheading": "Vital Tractor Operational Safety Directives",
            "content": "Crucial protocols to prevent catastrophic machinery injuries:",
            "keyPoints": [
              "Always verify that PTO master shields and telescopic driveline guards rotate freely to prevent clothing entanglement.",
              "Never hitch trailing implements to the top link or rear axle housing; pull exclusively from the swinging drawbar.",
              "Lock left and right brake pedals together when traveling on highways to prevent lethal asymmetric braking spins.",
              "Widen wheel tread track width when operating on steep hillside slopes to maximize lateral rollover stability angle."
            ]
          }
        ]
      }
    ],
    "keyTakeaways": [
      "Human agricultural labor provides ~0.1 hp (75 W), while a pair of bullocks develops 0.75-1.0 hp sustained draft power.",
      "Four-stroke diesel engines dominate farm mechanization due to superior thermal efficiency (32-38%) and high low-end torque.",
      "Drawbar Power (kW) = Draft (kN) * Speed (km/h) / 3.6; DBHP is roughly 55-70% of PTO HP due to soil rolling resistance and slip.",
      "Standard tractor PTO operates at 540 \u00b1 10 rpm (6 splines) or 1000 \u00b1 25 rpm (21 splines) at rated engine speed.",
      "ROPS protective frames combined with seatbelts form a certified survival envelope against deadly lateral and rearward rollovers."
    ],
    "commonMisunderstandings": [
      {
        "myth": "Brake Horsepower (BHP) is the total thermodynamic energy released by fuel combustion inside the engine cylinder.",
        "reality": "Indicated Horsepower (IHP) is the total thermodynamic power inside the cylinder; BHP is the lower usable power delivered at the flywheel after overcoming frictional losses (FHP)."
      },
      {
        "myth": "A pair of bullocks can pull an implement matching their entire body weight continuously throughout the day.",
        "reality": "Draft bullocks can only exert a sustained pull of 10% to 12% of their combined body weight for 6 to 8 hours without sustaining severe muscular breakdown and heat exhaustion."
      },
      {
        "myth": "Hitching a stalled trailer to the tractor's top link or upper rear housing improves pulling traction safely.",
        "reality": "Hitching above the designated drawbar height induces an uncontrollable backward tipping moment, rotating the tractor backward around its rear axle in under 0.75 seconds and crushing the operator."
      }
    ],
    "summary": "Unit 1 provides the engineering foundations of agricultural power systems. It covers the work limits of human and animal energy, the thermodynamics of diesel and electric power, aerodynamic windmill and solar photovoltaic pump design, mathematical formulations of IHP, BHP, FHP, and DBHP, and critical occupational safety standards including ROPS and noise mitigation."
  },
  "mcqs": [
    {
      "id": "SOL223-U1-MCQ01",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "difficulty": "Easy",
      "questionText": "What is the average sustained continuous power output of an adult male agricultural worker under tropical conditions?",
      "options": {
        "A": "0.05 hp (37 Watts)",
        "B": "0.10 hp (75 Watts)",
        "C": "0.25 hp (186 Watts)",
        "D": "0.50 hp (373 Watts)"
      },
      "correctOption": "B",
      "explanation": "An adult male agricultural worker develops approximately 0.10 hp (75 Watts) of sustained continuous power during an 8-hour workday."
    },
    {
      "id": "SOL223-U1-MCQ02",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Easy",
      "questionText": "As a general engineering rule, the sustained draft force exerted by a working bullock is approximately what percentage of its body weight?",
      "options": {
        "A": "5% to 8%",
        "B": "10% to 12%",
        "C": "25% to 30%",
        "D": "40% to 50%"
      },
      "correctOption": "B",
      "explanation": "Working draft animals can exert sustained continuous draft force equal to 10% to 12% of their body weight for a normal working day."
    },
    {
      "id": "SOL223-U1-MCQ03",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Easy",
      "questionText": "Which thermodynamic cycle forms the operational basis of commercial agricultural tractor diesel engines?",
      "options": {
        "A": "Rankine Cycle",
        "B": "Otto Cycle",
        "C": "Diesel or Dual Combustion Cycle",
        "D": "Carnot Cycle"
      },
      "correctOption": "C",
      "explanation": "Agricultural tractors use compression ignition engines operating on the Diesel or Dual combustion cycle."
    },
    {
      "id": "SOL223-U1-MCQ04",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Easy",
      "questionText": "What is the maximum theoretical efficiency (Betz Limit) for aerodynamic energy extraction by a horizontal-axis wind rotor?",
      "options": {
        "A": "33.3%",
        "B": "50.0%",
        "C": "59.3%",
        "D": "75.0%"
      },
      "correctOption": "C",
      "explanation": "According to Betz's law, no wind turbine can capture more than 16/27 (59.3%) of the kinetic energy in wind."
    },
    {
      "id": "SOL223-U1-MCQ05",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "difficulty": "Easy",
      "questionText": "Which type of electric motor is most universally deployed for agricultural tubewell pumping and stationary processing in India?",
      "options": {
        "A": "DC Series Motor",
        "B": "Single-phase Universal Motor",
        "C": "Three-Phase Squirrel Cage Induction Motor",
        "D": "Stepper Motor"
      },
      "correctOption": "C",
      "explanation": "Three-phase squirrel cage induction motors are widely used due to their robust construction, low maintenance, and high efficiency."
    },
    {
      "id": "SOL223-U1-MCQ06",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Easy",
      "questionText": "The total power developed inside an engine cylinder by the expansion of burning fuel against the piston is termed:",
      "options": {
        "A": "Brake Horsepower (BHP)",
        "B": "Indicated Horsepower (IHP)",
        "C": "Frictional Horsepower (FHP)",
        "D": "Drawbar Horsepower (DBHP)"
      },
      "correctOption": "B",
      "explanation": "Indicated Horsepower (IHP) represents the absolute thermodynamic power generated by gas pressure acting on the piston crown."
    },
    {
      "id": "SOL223-U1-MCQ07",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Easy",
      "questionText": "The mechanical power available at the engine flywheel or crankshaft for performing work is known as:",
      "options": {
        "A": "Indicated Horsepower",
        "B": "Brake Horsepower",
        "C": "Frictional Horsepower",
        "D": "Thermal Horsepower"
      },
      "correctOption": "B",
      "explanation": "Brake Horsepower (BHP) is the usable shaft power measured at the engine flywheel by a dynamometer."
    },
    {
      "id": "SOL223-U1-MCQ08",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Easy",
      "questionText": "What is the mathematical relationship defining Frictional Horsepower (FHP)?",
      "options": {
        "A": "FHP = IHP + BHP",
        "B": "FHP = IHP - BHP",
        "C": "FHP = BHP - IHP",
        "D": "FHP = IHP / BHP"
      },
      "correctOption": "B",
      "explanation": "Frictional Horsepower represents internal parasitic mechanical losses, defined as FHP = IHP - BHP."
    },
    {
      "id": "SOL223-U1-MCQ09",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Easy",
      "questionText": "What is the standard rotational speed of a standard 6-spline agricultural tractor Power Take-Off (PTO) shaft?",
      "options": {
        "A": "360 \u00b1 10 rpm",
        "B": "540 \u00b1 10 rpm",
        "C": "720 \u00b1 10 rpm",
        "D": "1000 \u00b1 10 rpm"
      },
      "correctOption": "B",
      "explanation": "The worldwide ASAE/BIS standard speed for a 6-spline agricultural tractor PTO shaft is 540 \u00b1 10 rpm at rated engine speed."
    },
    {
      "id": "SOL223-U1-MCQ10",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Easy",
      "questionText": "What is the maximum permissible continuous noise exposure level for an 8-hour workday under Indian and OSHA workplace standards?",
      "options": {
        "A": "70 dB(A)",
        "B": "85 dB(A)",
        "C": "95 dB(A)",
        "D": "105 dB(A)"
      },
      "correctOption": "B",
      "explanation": "The permissible occupational continuous noise exposure threshold for an 8-hour workday is 85 dB(A)."
    },
    {
      "id": "SOL223-U1-MCQ11",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "difficulty": "Easy",
      "questionText": "During continuous sustained agricultural manual work, what is the recommended upper limit of human heart rate?",
      "options": {
        "A": "80 beats per minute",
        "B": "110-120 beats per minute",
        "C": "150-160 beats per minute",
        "D": "180-190 beats per minute"
      },
      "correctOption": "B",
      "explanation": "Ergonomic studies indicate that sustained manual farm labor should not elevate heart rate beyond 110-120 beats/min to prevent fatigue."
    },
    {
      "id": "SOL223-U1-MCQ12",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Easy",
      "questionText": "A pair of draft bullocks weighing 400 kg each can typically develop approximately how much continuous power combined?",
      "options": {
        "A": "0.25 to 0.40 hp",
        "B": "0.75 to 1.00 hp",
        "C": "2.00 to 2.50 hp",
        "D": "4.00 to 5.00 hp"
      },
      "correctOption": "B",
      "explanation": "A medium pair of Indian bullocks (800 kg total) generates between 0.75 and 1.0 hp (560-746 W) of continuous draft power."
    },
    {
      "id": "SOL223-U1-MCQ13",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Easy",
      "questionText": "What is the typical compression ratio range of commercial agricultural tractor diesel engines?",
      "options": {
        "A": "6:1 to 9:1",
        "B": "10:1 to 12:1",
        "C": "14:1 to 22:1",
        "D": "25:1 to 32:1"
      },
      "correctOption": "C",
      "explanation": "Agricultural CI diesel engines operate at high compression ratios between 14:1 and 22:1 to achieve auto-ignition of fuel."
    },
    {
      "id": "SOL223-U1-MCQ14",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Easy",
      "questionText": "In the wind power equation P = 0.5 * rho * A * V^3, how does power output vary with wind velocity (V)?",
      "options": {
        "A": "Linearly with V",
        "B": "Directly with the square of V (V^2)",
        "C": "Directly with the cube of V (V^3)",
        "D": "Inversely with V"
      },
      "correctOption": "C",
      "explanation": "Wind power is proportional to the cube of wind velocity (V^3); doubling wind velocity increases kinetic power by 8 times."
    },
    {
      "id": "SOL223-U1-MCQ15",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "difficulty": "Easy",
      "questionText": "Installing shunt capacitor banks across an agricultural induction motor's terminals serves primarily to:",
      "options": {
        "A": "Increase motor operating speed",
        "B": "Improve power factor and reduce line current",
        "C": "Convert AC supply to DC power",
        "D": "Reverse motor rotation"
      },
      "correctOption": "B",
      "explanation": "Shunt capacitors supply reactive volt-amperes (VARs), raising the lagging power factor toward unity and reducing feeder line current."
    },
    {
      "id": "SOL223-U1-MCQ16",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Easy",
      "questionText": "Mechanical efficiency (eta_m) of an internal combustion engine is calculated as:",
      "options": {
        "A": "(IHP / BHP) * 100",
        "B": "(BHP / IHP) * 100",
        "C": "(FHP / BHP) * 100",
        "D": "(DBHP / PTO HP) * 100"
      },
      "correctOption": "B",
      "explanation": "Mechanical efficiency is the ratio of usable flywheel power to total thermodynamic indicated power: (BHP / IHP) * 100."
    },
    {
      "id": "SOL223-U1-MCQ17",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Easy",
      "questionText": "What is the metric formula for calculating Drawbar Horsepower (DBHP)?",
      "options": {
        "A": "(Draft in kgf * Speed in km/h) / 75",
        "B": "(Draft in kgf * Speed in km/h) / 270",
        "C": "(Draft in kgf * Speed in m/s) / 4500",
        "D": "(Draft in N * Speed in km/h) / 270"
      },
      "correctOption": "B",
      "explanation": "In metric units, DBHP = (Draft in kgf * Speed in km/h) / 270, derived from 1 metric hp = 75 kgf*m/s."
    },
    {
      "id": "SOL223-U1-MCQ18",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Easy",
      "questionText": "What is the primary function of a Roll-Over Protective Structure (ROPS) on an agricultural tractor?",
      "options": {
        "A": "Prevent the tractor from tilting completely",
        "B": "Maintain a crush-proof operator survival envelope during a rollover",
        "C": "Reduce engine exhaust noise",
        "D": "Provide weather shade for the operator"
      },
      "correctOption": "B",
      "explanation": "A ROPS frame provides structural integrity to preserve a crush-free safety envelope for the operator when belted during a rollover."
    },
    {
      "id": "SOL223-U1-MCQ19",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Easy",
      "questionText": "Which part of the traditional wooden bullock yoke rests directly on the bullock's neck?",
      "options": {
        "A": "The beam",
        "B": "The trace chain",
        "C": "The neck yoke or bow",
        "D": "The hitch pin"
      },
      "correctOption": "C",
      "explanation": "The neck yoke (or bow) rests across the draft animal's neck immediately anterior to the hump."
    },
    {
      "id": "SOL223-U1-MCQ20",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Easy",
      "questionText": "In a four-stroke internal combustion engine, how many crankshaft revolutions are completed per power stroke per cylinder?",
      "options": {
        "A": "Half a revolution",
        "B": "One revolution",
        "C": "Two revolutions",
        "D": "Four revolutions"
      },
      "correctOption": "C",
      "explanation": "In a four-stroke engine, a complete operational cycle requires four piston strokes and two complete revolutions (720\u00b0) of the crankshaft."
    },
    {
      "id": "SOL223-U1-MCQ21",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "difficulty": "Medium",
      "questionText": "What is the average human mechanical efficiency during sustained pedaling or manual crank operation?",
      "options": {
        "A": "5% to 8%",
        "B": "15% to 20%",
        "C": "45% to 50%",
        "D": "65% to 70%"
      },
      "correctOption": "B",
      "explanation": "Human metabolic-to-mechanical conversion efficiency during continuous sustained pedaling or cranking ranges between 15% and 20%."
    },
    {
      "id": "SOL223-U1-MCQ22",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Medium",
      "questionText": "If a pair of bullocks exerts a draft of 90 kgf while plowing at a forward walking speed of 3.0 km/h, what is their power output?",
      "options": {
        "A": "0.50 metric hp",
        "B": "1.00 metric hp",
        "C": "1.50 metric hp",
        "D": "2.00 metric hp"
      },
      "correctOption": "B",
      "explanation": "Power (hp) = (Draft in kgf * Speed in km/h) / 270 = (90 * 3.0) / 270 = 270 / 270 = 1.00 metric hp."
    },
    {
      "id": "SOL223-U1-MCQ23",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Medium",
      "questionText": "Why do agricultural diesel engines deliver superior fuel economy compared to petrol engines during heavy field tillage?",
      "options": {
        "A": "Lower cylinder compression pressures",
        "B": "Higher brake thermal efficiency and greater energy density per liter of diesel fuel",
        "C": "Faster flame propagation speed",
        "D": "Lower air-fuel ratios"
      },
      "correctOption": "B",
      "explanation": "Diesel engines operate at higher compression ratios with lean burn cycles, yielding 32-38% thermal efficiency alongside higher fuel energy density."
    },
    {
      "id": "SOL223-U1-MCQ24",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Medium",
      "questionText": "Why do traditional water-pumping farm windmills feature 12 to 24 curved metal blades rather than 2 or 3 slender airfoil blades?",
      "options": {
        "A": "To operate at high tip-speed ratios",
        "B": "To maximize starting torque at low wind velocities (2.5-3.5 m/s)",
        "C": "To reduce manufacturing costs",
        "D": "To survive hurricane-force winds without furling"
      },
      "correctOption": "B",
      "explanation": "High rotor solidity (many blades) produces high starting torque at low wind speeds, necessary to lift a positive-displacement pump rod."
    },
    {
      "id": "SOL223-U1-MCQ25",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "difficulty": "Medium",
      "questionText": "An induction motor operating at 415 V with a power factor of 0.70 draws 10 A. If a capacitor elevates the power factor to 0.95, what happens to the line current?",
      "options": {
        "A": "It increases to 13.5 A",
        "B": "It remains unchanged at 10 A",
        "C": "It decreases to approximately 7.37 A",
        "D": "It drops to zero"
      },
      "correctOption": "C",
      "explanation": "Active power P = sqrt(3)*V*I*cos(phi). Because P is constant, I2 = I1 * (cos(phi1) / cos(phi2)) = 10 * (0.70 / 0.95) = 7.37 A."
    },
    {
      "id": "SOL223-U1-MCQ26",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "A four-cylinder, four-stroke diesel engine has a 10 cm bore, 12 cm stroke, runs at 2000 rpm, and develops a mean effective pressure of 6 kg/cm\u00b2. What is its IHP?",
      "options": {
        "A": "18.84 metric hp",
        "B": "25.13 metric hp",
        "C": "37.69 metric hp",
        "D": "50.26 metric hp"
      },
      "correctOption": "B",
      "explanation": "A = pi*(10^2)/4 = 78.54 cm\u00b2. L = 0.12 m. N_p = 2000/2 = 1000. IHP = (6 * 0.12 * 78.54 * 1000 * 4) / 4500 = 226,195 / 4500 = 50.26 / 2 = 25.13 metric hp."
    },
    {
      "id": "SOL223-U1-MCQ27",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "If an engine's indicated horsepower (IHP) is 40 hp and its brake horsepower (BHP) is 34 hp, what is its mechanical efficiency?",
      "options": {
        "A": "75.0%",
        "B": "80.0%",
        "C": "85.0%",
        "D": "90.0%"
      },
      "correctOption": "C",
      "explanation": "Mechanical efficiency = (BHP / IHP) * 100 = (34 / 40) * 100 = 85.0%."
    },
    {
      "id": "SOL223-U1-MCQ28",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "A tractor pulls a 3-bottom plow with a draft of 1200 kgf at a travel speed of 4.5 km/h. Calculate the drawbar power delivered by the tractor:",
      "options": {
        "A": "15.0 metric hp",
        "B": "20.0 metric hp",
        "C": "25.0 metric hp",
        "D": "30.0 metric hp"
      },
      "correctOption": "B",
      "explanation": "DBHP = (Draft * Speed) / 270 = (1200 * 4.5) / 270 = 5400 / 270 = 20.0 metric hp."
    },
    {
      "id": "SOL223-U1-MCQ29",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "The standard 21-spline agricultural tractor PTO shaft is engineered to rotate at what standard speed?",
      "options": {
        "A": "540 rpm",
        "B": "750 rpm",
        "C": "1000 rpm",
        "D": "1250 rpm"
      },
      "correctOption": "C",
      "explanation": "The 21-spline 35 mm (1-3/8 inch) diameter tractor PTO shaft rotates at 1000 \u00b1 25 rpm at rated engine speed."
    },
    {
      "id": "SOL223-U1-MCQ30",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Medium",
      "questionText": "The natural resonant frequency of the human seated spinal column lies in which critical frequency band?",
      "options": {
        "A": "0.1 to 0.5 Hz",
        "B": "4.0 to 8.0 Hz",
        "C": "25 to 30 Hz",
        "D": "50 to 60 Hz"
      },
      "correctOption": "B",
      "explanation": "Whole-body vibration studies demonstrate that the human spine resonates strongly between 4 and 8 Hz, causing severe lumbar stress."
    },
    {
      "id": "SOL223-U1-MCQ31",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "difficulty": "Medium",
      "questionText": "What is the maximum oxygen uptake (VO2 max) commonly measured in healthy rural agricultural laborers?",
      "options": {
        "A": "0.5 to 0.8 L/min",
        "B": "2.0 to 2.8 L/min",
        "C": "4.5 to 5.5 L/min",
        "D": "6.0 to 7.0 L/min"
      },
      "correctOption": "B",
      "explanation": "Typical agricultural workers display a VO2 max of 2.0 to 2.8 liters of oxygen per minute, with 30-35% usable for sustained 8-hour work."
    },
    {
      "id": "SOL223-U1-MCQ32",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Medium",
      "questionText": "Why does the draft capacity of bullocks decrease substantially when ambient temperatures exceed 38\u00b0C?",
      "options": {
        "A": "Rumen fermentation ceases",
        "B": "Draft animals have limited sweat gland density and must expend energy panting to dissipate metabolic heat",
        "C": "Muscular glycogen stores dissolve",
        "D": "Hoof horn softens excessively"
      },
      "correctOption": "B",
      "explanation": "Zebu cattle possess lower sweat gland evaporative capacity; high heat load forces tachypnea and panting, drastically reducing muscular output."
    },
    {
      "id": "SOL223-U1-MCQ33",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Medium",
      "questionText": "What is the primary function of the fuel injection pump (FIP) governor in an agricultural tractor diesel engine?",
      "options": {
        "A": "Advance ignition timing with speed",
        "B": "Automatically regulate fuel delivery to maintain set engine speed under fluctuating field loads",
        "C": "Cut off air supply during cold start",
        "D": "Mix diesel with lubricating oil"
      },
      "correctOption": "B",
      "explanation": "The governor adjusts rack position and fuel metering to maintain steady engine rpm when implement load changes dynamically in the soil."
    },
    {
      "id": "SOL223-U1-MCQ34",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Medium",
      "questionText": "A solar PV water pump has a 3 kWp PV array with 18% efficiency, an inverter with 95% efficiency, and a motor-pump with 55% efficiency. What is the overall solar-to-hydraulic efficiency?",
      "options": {
        "A": "4.5%",
        "B": "9.4%",
        "C": "15.2%",
        "D": "22.0%"
      },
      "correctOption": "B",
      "explanation": "Overall efficiency = 0.18 * 0.95 * 0.55 = 0.09405, or approximately 9.4%."
    },
    {
      "id": "SOL223-U1-MCQ35",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "difficulty": "Medium",
      "questionText": "Why is a Star-Delta starter used with higher horsepower (>5 hp) three-phase agricultural induction motors?",
      "options": {
        "A": "To increase starting torque by 300%",
        "B": "To limit starting inrush current to approximately one-third of direct-on-line (DOL) current",
        "C": "To correct phase imbalance",
        "D": "To reverse rotational direction automatically"
      },
      "correctOption": "B",
      "explanation": "Starting in star connection applies 1/sqrt(3) (58%) of line voltage to each winding, limiting starting current to ~33% of DOL value."
    },
    {
      "id": "SOL223-U1-MCQ36",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "During a Prony brake dynamometer test, a brake arm of 0.6 m length registers a net load of 25 kgf at 1500 rpm. What is the engine's BHP?",
      "options": {
        "A": "20.94 metric hp",
        "B": "31.42 metric hp",
        "C": "45.00 metric hp",
        "D": "52.36 metric hp"
      },
      "correctOption": "B",
      "explanation": "Torque T = 25 kgf * 0.6 m = 15 kgf*m. BHP = (2 * pi * N * T) / 4500 = (2 * 3.1416 * 1500 * 15) / 4500 = 141,372 / 4500 = 31.42 metric hp."
    },
    {
      "id": "SOL223-U1-MCQ37",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "The Morse Test is an experimental procedure specifically used to determine the IHP of which engine category?",
      "options": {
        "A": "Single-cylinder diesel engine",
        "B": "Multi-cylinder internal combustion engine",
        "C": "Two-stroke scooter engine",
        "D": "External combustion steam engine"
      },
      "correctOption": "B",
      "explanation": "The Morse test cuts off fuel/ignition to individual cylinders sequentially in multi-cylinder engines to measure individual cylinder IHP."
    },
    {
      "id": "SOL223-U1-MCQ38",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "If a tractor's PTO power is 45 hp and its drawbar horsepower in tilled soil is 27 hp, what is its drawbar efficiency?",
      "options": {
        "A": "50%",
        "B": "60%",
        "C": "70%",
        "D": "80%"
      },
      "correctOption": "B",
      "explanation": "Drawbar efficiency = (DBHP / PTO HP) * 100 = (27 / 45) * 100 = 60%."
    },
    {
      "id": "SOL223-U1-MCQ39",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Medium",
      "questionText": "A rearward tractor rollover can occur in as little as 0.75 seconds when an implement is hitched to:",
      "options": {
        "A": "The standard swinging drawbar",
        "B": "The center of the rear axle housing or the top link bracket",
        "C": "The front weight bracket",
        "D": "The lower three-point hitch pins"
      },
      "correctOption": "B",
      "explanation": "Hitching above the drawbar height creates a rotational moment around the rear axle that flips the tractor backward faster than human reaction time."
    },
    {
      "id": "SOL223-U1-MCQ40",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "difficulty": "Medium",
      "questionText": "Which hand tool handle design feature most effectively reduces cumulative wrist musculoskeletal stress in farm laborers?",
      "options": {
        "A": "Rough unfinished wood surface",
        "B": "Handle aligned to maintain the wrist in a neutral, unbent posture (10-15\u00b0 bend)",
        "C": "A sharp rectangular cross-section",
        "D": "Short handle requiring deep lumbar flexion"
      },
      "correctOption": "B",
      "explanation": "Ergonomically contoured handles maintaining the wrist in neutral alignment prevent carpal tunnel syndrome and tenosynovitis."
    },
    {
      "id": "SOL223-U1-MCQ41",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Medium",
      "questionText": "The Allahabad three-pad harness increases draft performance over traditional wooden yokes primarily because it:",
      "options": {
        "A": "Restricts bullock breathing to increase oxygen uptake",
        "B": "Transfers load from the sensitive neck vertebrae onto the muscular shoulders and chest",
        "C": "Forces the animal to walk at double speed",
        "D": "Eliminates the need for reins"
      },
      "correctOption": "B",
      "explanation": "By seating across the muscular shoulder girdle and breast, the three-pad harness eliminates throat choke and cervical point pressure."
    },
    {
      "id": "SOL223-U1-MCQ42",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Medium",
      "questionText": "What is Specific Fuel Consumption (SFC) of a tractor diesel engine typically expressed in?",
      "options": {
        "A": "Liters per kilometer",
        "B": "Grams of fuel per kilowatt-hour (g/kWh)",
        "C": "Kilograms of fuel per hectare",
        "D": "Hours per liter"
      },
      "correctOption": "B",
      "explanation": "Specific fuel consumption is the mass of fuel consumed per unit energy output, standardly measured in g/kWh (or g/hp-h)."
    },
    {
      "id": "SOL223-U1-MCQ43",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Medium",
      "questionText": "The cut-in wind speed of a traditional multi-blade agricultural water-pumping windmill is typically around:",
      "options": {
        "A": "0.5 to 1.0 m/s",
        "B": "2.5 to 3.5 m/s",
        "C": "7.0 to 8.5 m/s",
        "D": "12.0 to 14.0 m/s"
      },
      "correctOption": "B",
      "explanation": "Multi-blade windmills begin generating usable pumping motion at cut-in speeds between 2.5 and 3.5 m/s (approx. 9 to 12 km/h)."
    },
    {
      "id": "SOL223-U1-MCQ44",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Medium",
      "questionText": "What causes the significant difference between a tractor's PTO power and its Drawbar power in the field?",
      "options": {
        "A": "Inaccurate engine governors",
        "B": "Rolling resistance of tractor tires and wheel slip on compliant agricultural soil",
        "C": "Excessive engine oil viscosity",
        "D": "Radiator cooling fan power absorption"
      },
      "correctOption": "B",
      "explanation": "Drive-wheel slip (10-15%) and rolling resistance against deformable soil consume substantial energy, lowering drawbar efficiency."
    },
    {
      "id": "SOL223-U1-MCQ45",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Medium",
      "questionText": "According to OECD Code 4 / BIS standards, what test is performed to certify tractor ROPS structural integrity?",
      "options": {
        "A": "High-speed crash wall impact",
        "B": "Static and dynamic multi-directional load and crush tests (longitudinal, transverse, vertical)",
        "C": "Submersion water leak test",
        "D": "Wind tunnel aerodynamic drag test"
      },
      "correctOption": "B",
      "explanation": "ROPS certification requires rigorous static and dynamic load tests from the rear, side, and top to verify energy absorption without intrusion."
    },
    {
      "id": "SOL223-U1-MCQ46",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Hard",
      "questionText": "In a multi-cylinder diesel engine Morse Test, the BHP with all 4 cylinders firing is 28.0 kW. When cylinders 1, 2, 3, and 4 are cut out individually, the remaining BHP values are 20.2 kW, 20.5 kW, 20.1 kW, and 20.4 kW respectively. What is the engine's total IHP?",
      "options": {
        "A": "28.0 kW",
        "B": "30.8 kW",
        "C": "32.0 kW",
        "D": "35.2 kW"
      },
      "correctOption": "B",
      "explanation": "Indicated power for each cylinder i = BHP_all - BHP_cut. I1 = 28 - 20.2 = 7.8; I2 = 28 - 20.5 = 7.5; I3 = 28 - 20.1 = 7.9; I4 = 28 - 20.4 = 7.6. Total IHP = 7.8 + 7.5 + 7.9 + 7.6 = 30.8 kW."
    },
    {
      "id": "SOL223-U1-MCQ47",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Hard",
      "questionText": "Using the Morse Test results from the previous question (BHP = 28.0 kW, IHP = 30.8 kW), what is the engine's mechanical efficiency and frictional power loss?",
      "options": {
        "A": "90.9% efficiency and 2.8 kW FHP",
        "B": "85.2% efficiency and 3.8 kW FHP",
        "C": "94.5% efficiency and 1.8 kW FHP",
        "D": "78.0% efficiency and 5.2 kW FHP"
      },
      "correctOption": "A",
      "explanation": "eta_m = (BHP / IHP) * 100 = (28.0 / 30.8) * 100 = 90.91%. FHP = IHP - BHP = 30.8 - 28.0 = 2.8 kW."
    },
    {
      "id": "SOL223-U1-MCQ48",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Hard",
      "questionText": "A tractor traveling at 5 km/h develops a drawbar pull of 18 kN. What is the drawbar power developed in kilowatts?",
      "options": {
        "A": "18.0 kW",
        "B": "25.0 kW",
        "C": "36.0 kW",
        "D": "90.0 kW"
      },
      "correctOption": "B",
      "explanation": "Power (kW) = (Force in kN * Speed in km/h) / 3.6 = (18 * 5) / 3.6 = 90 / 3.6 = 25.0 kW."
    },
    {
      "id": "SOL223-U1-MCQ49",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Hard",
      "questionText": "Calculate the theoretical maximum wind power extractable by a wind rotor of 4 m diameter operating in air of density 1.2 kg/m\u00b3 with a wind velocity of 8 m/s:",
      "options": {
        "A": "1.15 kW",
        "B": "2.29 kW",
        "C": "3.86 kW",
        "D": "5.45 kW"
      },
      "correctOption": "B",
      "explanation": "Rotor area A = pi * (2^2) = 12.566 m\u00b2. P_wind = 0.5 * 1.2 * 12.566 * (8^3) = 0.6 * 12.566 * 512 = 3860 W = 3.86 kW. Betz max = 0.593 * 3.86 kW = 2.29 kW."
    },
    {
      "id": "SOL223-U1-MCQ50",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Hard",
      "questionText": "An agricultural diesel engine consumes 6.5 kg of diesel fuel per hour while developing 25 kW of brake power. If the calorific value of diesel is 42,000 kJ/kg, what is the brake thermal efficiency?",
      "options": {
        "A": "28.5%",
        "B": "33.0%",
        "C": "37.5%",
        "D": "42.0%"
      },
      "correctOption": "B",
      "explanation": "Heat input rate = (6.5 kg/h * 42,000 kJ/kg) / 3600 s = 75.83 kW. Brake thermal efficiency = (25 kW / 75.83 kW) * 100 = 32.97% ~ 33.0%."
    },
    {
      "id": "SOL223-U1-MCQ51",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "difficulty": "Hard",
      "questionText": "A 3-phase, 415 V, 50 Hz, 4-pole agricultural induction motor runs at a full-load speed of 1440 rpm. What is the rotor slip percentage?",
      "options": {
        "A": "2.0%",
        "B": "4.0%",
        "C": "6.0%",
        "D": "8.0%"
      },
      "correctOption": "B",
      "explanation": "Synchronous speed N_s = (120 * f) / P = (120 * 50) / 4 = 1500 rpm. Slip s = ((N_s - N) / N_s) * 100 = ((1500 - 1440) / 1500) * 100 = (60 / 1500) * 100 = 4.0%."
    },
    {
      "id": "SOL223-U1-MCQ52",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Hard",
      "questionText": "Under OSHA acoustic noise dosage rules, if 85 dB(A) is permissible for 8 hours with a 5 dB exchange rate, what is the maximum permissible exposure time at 95 dB(A)?",
      "options": {
        "A": "4 hours",
        "B": "2 hours",
        "C": "1 hour",
        "D": "30 minutes"
      },
      "correctOption": "B",
      "explanation": "With a 5 dB exchange rate, each 5 dB increase halves permissible exposure: 85 dB(A) = 8 h; 90 dB(A) = 4 h; 95 dB(A) = 2 hours."
    },
    {
      "id": "SOL223-U1-MCQ53",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "difficulty": "Hard",
      "questionText": "If a farm laborer consumes 1.4 liters of oxygen per minute during manual spade digging, what is their approximate energy expenditure rate? (Caloric equivalent = 20.9 kJ per liter of O2)",
      "options": {
        "A": "15.2 kJ/min",
        "B": "29.3 kJ/min",
        "C": "42.5 kJ/min",
        "D": "55.0 kJ/min"
      },
      "correctOption": "B",
      "explanation": "Energy expenditure = 1.4 L/min * 20.9 kJ/L = 29.26 kJ/min (approx. 488 Watts), classifying manual spading as heavy work."
    },
    {
      "id": "SOL223-U1-MCQ54",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "difficulty": "Hard",
      "questionText": "Two bullocks weighing 450 kg and 500 kg are yoked together. If the angle of the trace chain to the horizontal is 20\u00b0, and the horizontal draft required by the plow is 95 kgf, what total pull must the bullocks exert along the trace?",
      "options": {
        "A": "89.3 kgf",
        "B": "101.1 kgf",
        "C": "115.4 kgf",
        "D": "128.0 kgf"
      },
      "correctOption": "B",
      "explanation": "Horizontal draft D = Pull * cos(theta) -> Pull = D / cos(20\u00b0) = 95 / 0.9397 = 101.1 kgf."
    },
    {
      "id": "SOL223-U1-MCQ55",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "difficulty": "Hard",
      "questionText": "What is the volumetric efficiency of a naturally aspirated tractor diesel engine running at rated load?",
      "options": {
        "A": "50% to 60%",
        "B": "75% to 85%",
        "C": "95% to 105%",
        "D": "110% to 125%"
      },
      "correctOption": "B",
      "explanation": "Naturally aspirated agricultural diesel engines achieve volumetric efficiencies of 75% to 85% due to intake manifold and valve flow restrictions."
    },
    {
      "id": "SOL223-U1-MCQ56",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "difficulty": "Hard",
      "questionText": "A solar water pump lifts 120,000 liters of water per day through a total dynamic head of 20 meters. If water density is 1000 kg/m\u00b3, what is the daily hydraulic energy delivered?",
      "options": {
        "A": "6.54 kWh",
        "B": "12.2 kWh",
        "C": "23.5 kWh",
        "D": "45.0 kWh"
      },
      "correctOption": "A",
      "explanation": "Hydraulic work = m * g * h = 120,000 kg * 9.81 m/s\u00b2 * 20 m = 23,544,000 Joules. In kWh: 23,544,000 / 3,600,000 = 6.54 kWh."
    },
    {
      "id": "SOL223-U1-MCQ57",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Hard",
      "questionText": "A tractor has a drive-wheel rolling radius of 0.75 m. During field plowing, the rear axle rotates at 35 rpm while the actual ground speed measured is 4.8 km/h. What is the wheel slip percentage?",
      "options": {
        "A": "8.5%",
        "B": "13.2%",
        "C": "20.5%",
        "D": "27.0%"
      },
      "correctOption": "B",
      "explanation": "Theoretical speed V_t = 2 * pi * r * N = 2 * 3.1416 * 0.75 * 35 = 164.93 m/min = 9.896 km/h / 1.792 = 5.53 km/h. Slip = ((V_t - V_a) / V_t) * 100 = ((5.53 - 4.8) / 5.53) * 100 = 13.2%."
    },
    {
      "id": "SOL223-U1-MCQ58",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "difficulty": "Hard",
      "questionText": "In Willans Line method of determining engine friction, what parameter is plotted on the X-axis against fuel consumption on the Y-axis?",
      "options": {
        "A": "Engine RPM",
        "B": "Brake Power (kW or BHP)",
        "C": "Coolant temperature",
        "D": "Exhaust gas temperature"
      },
      "correctOption": "B",
      "explanation": "Willans line plots fuel consumption rate against Brake Power at constant speed; backward linear extrapolation to zero fuel gives FHP."
    },
    {
      "id": "SOL223-U1-MCQ59",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "difficulty": "Hard",
      "questionText": "The rearward tipping moment in a tractor is primarily generated when which counteracting resisting force is exceeded?",
      "options": {
        "A": "Engine compression resistance",
        "B": "The stabilizing moment created by the tractor's front-end weight acting across the wheelbase",
        "C": "Coolant pump hydraulic drag",
        "D": "Front tire rolling resistance"
      },
      "correctOption": "B",
      "explanation": "Rearward rollover occurs when the dynamic rotational moment around the rear axle exceeds the stabilizing moment (Front weight * Wheelbase)."
    },
    {
      "id": "SOL223-U1-MCQ60",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "difficulty": "Hard",
      "questionText": "If the line voltage supplied to a 3-phase induction motor drops by 10%, how much does its maximum starting and breakdown torque decrease?",
      "options": {
        "A": "Decreases by 5%",
        "B": "Decreases by 10%",
        "C": "Decreases by 19%",
        "D": "Decreases by 30%"
      },
      "correctOption": "C",
      "explanation": "Torque in an induction motor is proportional to the square of terminal voltage (T proportional to V^2). A 10% drop gives (0.90)^2 = 0.81, an exact 19% reduction."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "SOL223-U1-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "questionText": "Define Indicated Horsepower (IHP), Brake Horsepower (BHP), Frictional Horsepower (FHP), and Mechanical Efficiency as applied to agricultural engines.",
      "modelAnswer": "In agricultural engineering thermodynamics, engine power ratings are defined by specific mechanical boundaries:\n\n1. Indicated Horsepower (IHP): The total theoretical thermodynamic power generated inside the engine cylinders by the expansion of combustible gases against the piston heads. It is calculated from indicator diagrams as IHP = (P_m * L * A * N * n) / 4500 (in metric units), where P_m is mean effective pressure, L is stroke, A is cylinder area, N is power strokes/min, and n is cylinder count.\n\n2. Brake Horsepower (BHP): The usable mechanical power delivered at the engine flywheel or output shaft after overcoming internal mechanical resistance. BHP is measured experimentally using an absorption dynamometer (such as a Prony brake, hydraulic, or eddy current dynamometer) as BHP = (2 * pi * N * T) / 4500, where T is shaft torque and N is engine rpm.\n\n3. Frictional Horsepower (FHP): The parasitic mechanical power absorbed by the engine's internal components due to sliding friction (piston rings, journal bearings, valve train) and auxiliary drives (oil pump, water pump, injection pump). It is defined as FHP = IHP - BHP.\n\n4. Mechanical Efficiency (eta_m): The ratio of usable power at the flywheel to total thermodynamic power generated in the cylinders: eta_m = (BHP / IHP) * 100. In well-maintained agricultural diesel engines, mechanical efficiency typically ranges between 80% and 88% at rated load.",
      "outlinePoints": [
        "Definition and mathematical formulation of Indicated Horsepower (IHP)",
        "Definition, measurement, and formula for Brake Horsepower (BHP)",
        "Definition of Frictional Horsepower (FHP = IHP - BHP)",
        "Definition, percentage range (80-88%), and significance of Mechanical Efficiency"
      ]
    },
    {
      "id": "SOL223-U1-SUB02",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "questionText": "Compare Compression Ignition (Diesel) engines with Spark Ignition (Petrol) engines with specific reference to agricultural field operations.",
      "modelAnswer": "Agricultural tractors and field machinery predominantly deploy Compression Ignition (CI) diesel engines rather than Spark Ignition (SI) petrol engines due to key operational and economic differences:\n\n1. Thermodynamic Cycle & Efficiency: Diesel engines operate on the Diesel or Dual cycle at high compression ratios (14:1 to 22:1), achieving brake thermal efficiencies of 32% to 38%. SI engines operate on the Otto cycle at lower compression ratios (6:1 to 10:1), achieving only 22% to 28% efficiency.\n\n2. Torque Characteristics & Lugging Ability: Agricultural tillage requires high torque at low rotational speeds to overcome abrupt soil impedance surges. Diesel engines produce maximum torque at lower RPM with exceptional torque rise under lugging conditions, whereas petrol engines require higher RPM to maintain torque and stall easily under shock loads.\n\n3. Fuel Economy & Specific Consumption: Specific Fuel Consumption (SFC) for agricultural diesels is 190 to 225 g/kWh, compared to 280 to 340 g/kWh for petrol engines. Furthermore, diesel possesses a higher volumetric energy density (~38.6 MJ/L vs ~34.8 MJ/L for petrol).\n\n4. Ignition & Reliability: Diesel engines achieve auto-ignition via compressed air heat, eliminating spark plugs, ignition coils, and high-tension distributors that are prone to failure in humid, dusty agricultural environments.\n\n5. Safety & Maintenance: Diesel has a higher flash point (>55\u00b0C vs -40\u00b0C for petrol), drastically minimizing on-farm fuel storage fire hazards during hot harvest seasons.",
      "outlinePoints": [
        "Thermodynamic cycle and compression ratio differences",
        "Torque rise, low-RPM lugging power, and stall resistance",
        "Specific Fuel Consumption (g/kWh) and volumetric energy density",
        "Ignition system reliability under dusty field conditions",
        "Fuel storage safety and flash point considerations"
      ]
    },
    {
      "id": "SOL223-U1-SUB03",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "questionText": "Explain the step-by-step procedure of the Morse Test for determining the IHP and mechanical efficiency of a multi-cylinder internal combustion engine. Include relevant equations.",
      "modelAnswer": "The Morse Test is an experimental procedure used to determine the Indicated Horsepower (IHP) of multi-cylinder internal combustion engines without deploying complex internal cylinder pressure transducers.\n\n1. Theoretical Principle:\nThe test assumes that the frictional power loss (FHP) of an engine remains constant at a given speed, regardless of whether all cylinders are firing or one cylinder is deactivated. Therefore, the drop in brake power when one cylinder is cut out equals the indicated power developed by that deactivated cylinder.\n\n2. Experimental Procedure:\n- The multi-cylinder engine is coupled to a dynamometer and run at a constant rated speed N (rpm).\n- The total brake power (BHP_total) delivered with all n cylinders firing is measured.\n- Cylinder 1 is cut out (by short-circuiting its spark plug in SI engines or cutting off fuel injection in CI engines using the fuel pump cut-off lever).\n- The engine speed tends to drop; the dynamometer load is immediately adjusted to restore the engine speed precisely to the original rated speed N.\n- The new brake power (BHP_1cut) is recorded.\n- Cylinder 1 is restored, and the procedure is repeated sequentially for cylinders 2, 3, through n, recording BHP_2cut, BHP_3cut, etc., always maintaining constant speed N.\n\n3. Mathematical Formulation:\nLet F_1, F_2, ... F_n be the frictional power of individual cylinders, and I_1, I_2, ... I_n be their indicated powers.\nTotal BHP = (I_1 + I_2 + ... + I_n) - (F_1 + F_2 + ... + F_n)\nWhen Cylinder 1 is cut out:\nBHP_1cut = (I_2 + I_3 + ... + I_n) - (F_1 + F_2 + ... + F_n)\nSubtracting gives the indicated power of Cylinder 1:\nI_1 = BHP_total - BHP_1cut\nSimilarly for cylinder i: I_i = BHP_total - BHP_icut\nTotal Engine IHP = Sum of I_i (from i = 1 to n)\nTotal Engine FHP = Total IHP - Total BHP\nMechanical Efficiency eta_m = (BHP_total / Total IHP) * 100\n\n4. Limitations:\nThe test slightly overestimates FHP because pumping losses and cylinder wall temperatures alter marginally when a cylinder is deactivated.",
      "outlinePoints": [
        "Fundamental assumption: constancy of mechanical friction at constant speed",
        "Step-by-step execution protocol maintaining rated engine rpm",
        "Mathematical derivations for individual cylinder IHP (I_i = BHP_total - BHP_icut)",
        "Calculation of Total IHP, Total FHP, and Mechanical Efficiency",
        "Experimental limitations and practical assumptions"
      ]
    },
    {
      "id": "SOL223-U1-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "questionText": "Discuss the physiological factors limiting the draft capacity of Indian working bullocks and explain why traditional wooden yokes are inefficient.",
      "modelAnswer": "The draft capacity of Indian bullocks (*Bos indicus*) is governed by physiological thresholds and mechanical harnessing efficiency:\n\n1. Body Weight and Draft Ratio: Working bullocks develop a sustained draft force of 10% to 12% of their body weight over a 6 to 8-hour workday. Short-duration pulls can reach 20% to 25%, but induce rapid muscular exhaustion.\n\n2. Thermal Regulation: Draft animals possess low sweat gland density compared to horses and rely heavily on respiratory evaporation (panting). When ambient temperatures exceed 36-38\u00b0C, metabolic heat accumulation causes severe respiratory distress, elevating rectal temperature beyond 39.5\u00b0C and causing working capacity to drop by 40-50%.\n\n3. Inefficiency of Traditional Wooden Yokes:\n- Stress Concentration: Traditional yokes consist of an unpadded wooden beam resting on the neck. The contact area is only 150 to 200 cm\u00b2, producing intense compressive pressures (>1.5 kg/cm\u00b2) that cause neck gall sores and tissue necrosis.\n- Tracheal Compression: High hitch angles cause the yoke to ride backward against the trachea, restricting respiratory ventilation.\n- Allahabad Harness Alternative: Improved padded collar harnesses increase contact area to 500-600 cm\u00b2, distributing draft across the skeletal shoulders and raising pull capacity by 20-25%.",
      "outlinePoints": [
        "Draft-to-body-weight ratio (10-12% sustained)",
        "Thermoregulatory constraints, sweat gland limitations, and heat stress",
        "Drawbacks of traditional yokes: pressure concentration, sores, tracheal choking",
        "Advantages of improved padded collar/shoulder harnesses"
      ]
    },
    {
      "id": "SOL223-U1-SUB05",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "questionText": "A 4-cylinder 4-stroke tractor diesel engine has a bore of 105 mm, stroke of 120 mm, and runs at 2200 rpm. An indicator diagram yields a mean effective pressure of 7.2 bar. If mechanical efficiency is 84%, calculate: (a) IHP in kW, (b) BHP in kW, and (c) FHP in kW.",
      "modelAnswer": "Given Parameters:\n- Number of cylinders (n) = 4\n- Engine type: 4-stroke cycle -> Power strokes per second N_p = 2200 / (2 * 60) = 18.33 strokes/sec\n- Cylinder bore (D) = 105 mm = 0.105 m\n- Stroke length (L) = 120 mm = 0.12 m\n- Piston cross-sectional area (A) = pi * (0.105^2) / 4 = 0.008659 m\u00b2\n- Mean effective pressure (p_m) = 7.2 bar = 7.2 * 10^5 N/m\u00b2 (Pascals)\n- Mechanical efficiency (eta_m) = 84% = 0.84\n\nStep 1: Calculate Indicated Power (IHP in kW):\nP_ind = (p_m * L * A * N_p * n) / 1000\nP_ind = (720,000 * 0.12 * 0.008659 * 18.33 * 4) / 1000\nP_ind = (720,000 * 0.12 * 0.008659 * 73.32) / 1000\nP_ind = 54.86 kW\nTherefore, total Indicated Power = 54.86 kW (approx. 74.6 metric hp).\n\nStep 2: Calculate Brake Power (BHP in kW):\nBHP = P_ind * eta_m\nBHP = 54.86 * 0.84 = 46.08 kW (approx. 62.6 metric hp).\n\nStep 3: Calculate Frictional Power (FHP in kW):\nFHP = P_ind - BHP\nFHP = 54.86 - 46.08 = 8.78 kW (approx. 11.9 metric hp).\n\nFinal Answers:\n(a) Indicated Power = 54.86 kW\n(b) Brake Power = 46.08 kW\n(c) Frictional Power = 8.78 kW",
      "outlinePoints": [
        "Listing given engineering parameters and unit conversions",
        "Calculation of piston area and power stroke frequency",
        "Evaluation of Indicated Power using P_ind formula (54.86 kW)",
        "Determination of Brake Power using mechanical efficiency (46.08 kW)",
        "Computation of Frictional Power (8.78 kW)"
      ]
    },
    {
      "id": "SOL223-U1-SUB06",
      "questionType": "CASE_STUDY",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "questionText": "An agricultural tractor pulling a loaded sugarcane trolley on an inclined slope suffers a catastrophic rearward rollover. Analyze the mechanics of rearward tipping, explain critical reaction times, and propose structural and operational countermeasures.",
      "modelAnswer": "Mechanics of Rearward Rollover Incident:\n\n1. Physical Dynamics:\nA tractor's rearward rollover is governed by torsional moments acting around the rear axle centerline. The engine drives the rear axle pinion, which exerts an upward rotational reaction moment against the tractor chassis. When the rear wheels cannot slip (e.g., stuck in a furrow or heavily loaded on an incline) and the drawbar hitch is improperly connected above the rear axle center, the driving torque pivots the entire front end of the tractor upward around the rear axle.\n\n2. Time Horizon and Human Reaction:\nA rearward rollover can reach the critical tip-over angle (90\u00b0 backward) in under 0.75 seconds. Human perception and brake-clutch depression reaction time is 1.0 to 1.5 seconds. Therefore, once backward pitching initiates under full throttle, human intervention is biologically impossible to arrest the roll.\n\n3. Contributing Risk Factors in the Sugarcane Trolley Scenario:\n- High Hitch Point: Hitching the trolley to the top link or rear housing bracket rather than the low swinging drawbar.\n- Slope Gradient: Ascending a steep incline shifts the tractor's center of gravity (CG) rearward toward the rear axle, drastically reducing the stabilizing moment (W_front * Wheelbase).\n- Sudden Clutch Engagement: Popping the clutch while under heavy drawbar resistance provides high shock torque.\n\n4. Countermeasures and Prevention:\n- Structural Countermeasure: Installation of a certified Roll-Over Protective Structure (ROPS) compliant with IS 11821 / OECD Code 4, combined with mandatory seatbelt fastening to preserve a survival envelope.\n- Hitching Rule: Implements must strictly be hitched to the swinging drawbar positioned below the rear axle centerline (maximum allowable height 350-400 mm).\n- Front Ballasting: Adding cast-iron front suitcase weights to ensure at least 20% of gross vehicle weight rests on the front steering axle under all field conditions.",
      "outlinePoints": [
        "Mechanical analysis of rear-axle reaction torque and chassis tipping moment",
        "Chronological breakdown of rollover speed (0.75 s) vs human reaction time (1.2 s)",
        "Critical causes: high hitch point, uphill slope, sudden clutch release",
        "Structural solution: ROPS safety frame and seatbelt enclosure",
        "Operational guidelines: drawbar hitch height limits and front ballasting"
      ]
    },
    {
      "id": "SOL223-U1-SUB07",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "questionText": "Explain the ergonomic concept of work-rest cycles and physiological fatigue limits during intense manual farm labor.",
      "modelAnswer": "Manual agricultural tasks\u2014such as manual transplanting, weeding with a khurpi, and harvesting with a sickle\u2014impose high physiological strain on the human muscular and cardiovascular systems.\n\n1. Energy Expenditure Thresholds: The human physiological workload is classified based on oxygen consumption and caloric expenditure. Light farm work consumes <10 kJ/min, moderate work 10-20 kJ/min, and heavy work (e.g., spading, manual loading) exceeds 25-30 kJ/min. For sustained 8-hour labor without cumulative exhaustion, an average worker's energy expenditure must not exceed 30% to 35% of their maximal aerobic capacity (VO2 max), equivalent to ~16-18 kJ/min.\n\n2. Work-Rest Cycles: When tasks exceed the aerobic endurance threshold, lactic acid accumulates in skeletal muscle tissue due to anaerobic glycolysis. Implementing structured work-rest cycles (e.g., 50 minutes of work followed by 10 minutes of shaded rest and hydration) allows the heart rate to return below 100 beats/min and facilitates the metabolic clearance of blood lactate.\n\n3. Ergonomic Impact: Providing scheduled rest pauses prevents cumulative physical trauma, minimizes heat stroke risks in tropical fields, and maintains higher overall labor productivity across the day.",
      "outlinePoints": [
        "Classification of agricultural workloads by energy expenditure (kJ/min)",
        "The 30-35% VO2 max limit for continuous 8-hour farm work",
        "Physiological basis of fatigue: lactic acid buildup under anaerobic strain",
        "Structure and benefits of work-rest cycles for farm laborers"
      ]
    },
    {
      "id": "SOL223-U1-SUB08",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "questionText": "Differentiate between PTO Horsepower and Drawbar Horsepower. Why is Drawbar Horsepower substantially lower than PTO Horsepower?",
      "modelAnswer": "Power Take-Off (PTO) Horsepower and Drawbar Horsepower represent two distinct mechanical power delivery pathways of an agricultural tractor:\n\n1. Definition of PTO Horsepower: The power available at the tractor's rear rotating splined shaft (rotating at 540 or 1000 rpm) used to drive dynamic stationary or trailing implements like rotavators, balers, and threshers. It is measured using a stationary PTO dynamometer and is typically 88% to 92% of the engine flywheel BHP.\n\n2. Definition of Drawbar Horsepower (DBHP): The actual pulling power exerted by the tractor through its drawbar to pull trailing tillage implements (plows, harrows) across the ground: DBHP = (Draft * Speed) / 270 (metric).\n\n3. Why DBHP is Substantially Lower than PTO HP:\nDrawbar Horsepower is standardly only 55% to 75% of PTO HP due to parasitic field tractive losses:\n- Wheel Slip: To generate tractive pull, rubber tractor tires must slip relative to compliant soil. An optimal wheel slip of 10% to 15% is required for maximum tractive efficiency, consuming 10-15% of delivered axle power.\n- Rolling Resistance: Tractor tires deform compliant soil, creating a continuous uphill rut. Rolling resistance absorbs 15% to 25% of gross axle power.\n- Final Drive and Differential Friction: Gear reduction through the differential and planetary final drive hubs consumes 3% to 5% of engine power.",
      "outlinePoints": [
        "Definition, measurement, and power path of PTO Horsepower",
        "Definition and mathematical formulation of Drawbar Horsepower",
        "Tractive loss mechanism 1: drive-wheel slip on agricultural soils",
        "Tractive loss mechanism 2: rolling resistance and soil sinkage",
        "Tractive loss mechanism 3: final drive transmission gear friction"
      ]
    },
    {
      "id": "SOL223-U1-SUB09",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "questionText": "Describe the design, operational components, and performance characteristics of a Solar Photovoltaic (SPV) Water Pumping System for agricultural irrigation.",
      "modelAnswer": "Solar Photovoltaic (SPV) water pumping systems provide decentralized, fossil-fuel-free irrigation, widely subsidized in India under the PM-KUSUM scheme.\n\n1. Major Subsystems & Components:\n- Solar PV Array: Composed of series-parallel strings of mono- or polycrystalline silicon solar cells mounted on a galvanized steel tracking frame. Arrays are rated from 1.5 kWp to 7.5 kWp depending on pump horsepower (2 hp to 7.5 hp).\n- Inverter / Variable Frequency Drive (VFD) Controller: Converts variable DC power from the solar array into variable-frequency, variable-voltage AC power (or controls DC for BLDC motors). The controller incorporates Maximum Power Point Tracking (MPPT) algorithms (Perturb & Observe or Incremental Conductance) to maximize energy extraction under fluctuating solar irradiance.\n- Motor-Pump Set: Submersible multi-stage centrifugal pumps (for deep borewells) or surface mono-block pumps (for open wells and canals). High-efficiency Brushless DC (BLDC) motors or premium-efficiency (IE3) AC induction motors are standard.\n\n2. Working Principle & Performance:\nDuring sunlight hours, photovoltaic cells generate DC current. The MPPT controller continuously tracks peak voltage (V_mpp) and current (I_mpp). As irradiance varies (from 200 W/m\u00b2 at sunrise to 1000 W/m\u00b2 at solar noon), the VFD modulates motor operating frequency (20 to 50 Hz), allowing continuous water discharge even under cloudy conditions.\n\n3. Hydraulic Output Calculation:\nDaily hydraulic energy delivered = (V * rho * g * TDH) / 3.6x10^6 (kWh), where V is total daily water volume (m\u00b3), rho is 1000 kg/m\u00b3, g is 9.81 m/s\u00b2, and TDH is Total Dynamic Head (m).\nA typical 3 hp (2.2 kWp array) SPV pump operating against a 30-meter head under 5.5 kWh/m\u00b2/day solar insolation delivers 80,000 to 100,000 liters of water daily.\n\n4. Advantages & Limitations:\nAdvantages include zero operating fuel expenditure, automated sunrise-to-sunset operation, and high reliability (>25-year panel life). Limitations include high initial capital outlay, lack of pumping after sunset without expensive batteries, and output reduction during monsoon overcast periods.",
      "outlinePoints": [
        "Overview and significance under PM-KUSUM initiative",
        "Core components: SPV array, MPPT/VFD controller, and motor-pump set",
        "Working mechanics and variable frequency modulation under changing insolation",
        "Mathematical formulation of daily hydraulic energy and discharge",
        "Critical advantages and practical field limitations"
      ]
    },
    {
      "id": "SOL223-U1-SUB10",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations",
      "questionText": "Explain the causes of low power factor in agricultural electric pumping installations and describe how shunt capacitors resolve this issue.",
      "modelAnswer": "Agricultural tubewell pumping installations across rural India are notorious for poor electrical power quality, commonly exhibiting lagging power factors between 0.65 and 0.75.\n\n1. Causes of Low Power Factor:\n- Inductive Motor Loads: Three-phase squirrel cage induction motors are highly inductive machines. They require alternating magnetic flux to induce rotor currents, drawing a substantial magnetizing current that lags terminal voltage by 90 electrical degrees.\n- Underloaded Motor Operation: Farmers frequently install oversized motors (e.g., 10 hp motor driving a 6 hp pump load). When an induction motor operates below 50% rated capacity, its active power drops sharply while magnetizing reactive power remains nearly constant, driving the power factor down to 0.50-0.65.\n\n2. Consequences:\nLow power factor causes high total line current (I = P / (sqrt(3)*V*cos(phi))), inducing excessive I\u00b2R copper heating losses in rural distribution lines, severe voltage drops at tail-end farm feeders, and premature burnout of distribution transformers.\n\n3. Solution via Shunt Power Capacitors:\nShunt capacitors draw leading reactive current (90\u00b0 ahead of voltage). When connected directly across motor terminals, capacitors supply the necessary magnetizing reactive power locally. Consequently, the utility grid feeder supplies only active real power (kW). Installing properly sized capacitors raises the operating power factor to 0.95-0.98, reducing line current by 25-30%, stabilizing supply voltage, and eliminating low-PF financial penalties from state electricity utilities.",
      "outlinePoints": [
        "Inductive nature of induction motor magnetizing current",
        "Severe impact of motor oversizing on power factor degradation",
        "Adverse effects: increased line current, I\u00b2R line losses, voltage sags",
        "Mechanism of shunt capacitor reactive power compensation (leading VARs)",
        "Benefits: 25-30% line current reduction, voltage stabilization, penalty avoidance"
      ]
    },
    {
      "id": "SOL223-U1-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "questionText": "State Betz's Law governing wind energy extraction and explain why agricultural water-pumping windmills have low rotational speeds.",
      "modelAnswer": "Betz's Law and Farm Windmill Aerodynamics:\n\n1. Betz's Law:\nFormulated by German physicist Albert Betz in 1919, the law states that no wind turbine can convert more than 16/27 (59.26%) of the kinetic energy in wind into mechanical shaft power. This maximum power coefficient (C_p_max = 0.593) arises because air must retain sufficient downstream velocity to move away from the rotor; if the rotor extracted 100% of kinetic energy, exit velocity would be zero, halting all airflow through the blades.\n\n2. Why Agricultural Water-Pumping Windmills Rotate Slowly:\nTraditional agricultural windmills (e.g., Southern Cross multi-blade designs) are coupled to positive displacement reciprocating piston pumps. Reciprocating pumps require tremendous starting torque to break mechanical stiction and lift a column of water from deep wells. To generate high starting torque at low cut-in wind velocities (2.5 to 3.5 m/s), these windmills are built with high blade solidity (12 to 24 wide, overlapping curved metal blades covering 70-80% of the swept circle). This high aerodynamic drag and torque profile operates at a very low Tip-Speed Ratio (TSR = tip speed / wind speed approx. 1.0 to 1.5), resulting in slow, high-torque rotation.",
      "outlinePoints": [
        "Statement and mathematical limit of Betz's Law (C_p_max = 16/27 = 59.3%)",
        "Physical rationale: necessity of exit airflow velocity",
        "High starting torque requirement of reciprocating water pumps",
        "High solidity rotor design (12-24 blades) and low Tip-Speed Ratio (1.0-1.5)"
      ]
    },
    {
      "id": "SOL223-U1-SUB12",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "questionText": "Define Whole-Body Vibration (WBV) in agricultural machinery. What health risks does it pose to tractor operators, and how is it mitigated?",
      "modelAnswer": "Whole-Body Vibration (WBV) in Agricultural Machinery:\n\n1. Definition:\nWhole-Body Vibration (WBV) refers to mechanical vibration transmitted to the human body as a whole, typically through the supporting surface of the seat or floorpan when an operator sits or stands on operating farm machinery traversing uneven terrain. It is quantified as frequency-weighted acceleration in m/s\u00b2 across three orthogonal axes (X-fore-aft, Y-lateral, Z-vertical) pursuant to ISO 2631-1.\n\n2. Occupational Health Hazards:\nTractors traversing unpaved agricultural fields generate dominant low-frequency vibration between 1 and 20 Hz. The human seated spine has a natural resonant frequency between 4 and 8 Hz, while internal visceral organs resonate between 10 and 14 Hz. Continuous exposure to resonance causes microfractures in spinal endplates, accelerated intervertebral disc herniation, sciatica, and chronic musculoskeletal lower back disorders.\n\n3. Engineering Mitigation Strategies:\n- Operator Seat Suspension: Equipping tractors with pneumatic or mechanical scissors suspension seats incorporating hydraulic dampers and operator-weight adjustment dials.\n- Cab and Axle Suspension: Incorporating hydro-pneumatic front axle suspension and elastomeric cab mounting bushings.\n- Radial Low-Pressure Tires: Deploying large-volume radial agricultural tires operated at optimal low inflation pressures (0.8 to 1.2 bar), which absorb high-frequency ground impact shocks.",
      "outlinePoints": [
        "Technical definition and ISO 2631-1 measurement metrics (m/s\u00b2)",
        "Low-frequency terrain excitation (1-20 Hz) and human spinal resonance (4-8 Hz)",
        "Pathophysiological consequences: disc degeneration, chronic lumbar back pain",
        "Mitigation: pneumatic suspension seats, suspended cabs, low-pressure radial tires"
      ]
    },
    {
      "id": "SOL223-U1-SUB13",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "questionText": "A 45 hp tractor is plowing with a 3-bottom mouldboard plow at a speed of 4.5 km/h in sandy loam soil. The unit draft of the soil is 0.5 kgf/cm\u00b2. Each bottom cuts a furrow 30 cm wide and 15 cm deep. Calculate: (a) Total draft in kgf, (b) Drawbar horsepower required, and (c) Drawbar power in kW.",
      "modelAnswer": "Given Parameters:\n- Number of bottoms (n) = 3\n- Furrow width per bottom (w) = 30 cm\n- Furrow depth (d) = 15 cm\n- Unit draft of soil (sigma) = 0.5 kgf/cm\u00b2\n- Travel speed (V) = 4.5 km/h\n\nStep 1: Calculate Total Furrow Cross-Sectional Area (A):\nCross-sectional area per bottom = w * d = 30 cm * 15 cm = 450 cm\u00b2\nTotal area for 3 bottoms = 3 * 450 cm\u00b2 = 1350 cm\u00b2\n\nStep 2: Calculate Total Draft Force (D):\nTotal Draft (D) = Total Area * Unit Draft\nD = 1350 cm\u00b2 * 0.5 kgf/cm\u00b2 = 675 kgf\nIn SI units: D = 675 kgf * 9.80665 N/kgf = 6619.5 N = 6.62 kN\n\nStep 3: Calculate Drawbar Horsepower (DBHP):\nDBHP (metric) = (Draft in kgf * Speed in km/h) / 270\nDBHP = (675 * 4.5) / 270\nDBHP = 3037.5 / 270 = 11.25 metric hp\n\nStep 4: Calculate Drawbar Power in Kilowatts (kW):\nPower (kW) = (Draft in kN * Speed in km/h) / 3.6\nPower (kW) = (6.62 kN * 4.5 km/h) / 3.6 = 29.79 / 3.6 = 8.28 kW\nAlternatively: 11.25 metric hp * 0.7355 kW/hp = 8.27 kW\n\nSummary of Results:\n(a) Total Draft = 675 kgf (6.62 kN)\n(b) Drawbar Horsepower = 11.25 metric hp\n(c) Drawbar Power = 8.28 kW",
      "outlinePoints": [
        "Listing soil unit draft, plough geometry, and travel speed",
        "Calculation of furrow cross-sectional area (1350 cm\u00b2)",
        "Determination of total draft force (675 kgf / 6.62 kN)",
        "Computation of metric Drawbar Horsepower (11.25 hp)",
        "Computation of Drawbar Power in SI units (8.28 kW)"
      ]
    },
    {
      "id": "SOL223-U1-SUB14",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "questionText": "Outline the acoustic hazards of tractor operation, specify permissible noise exposure limits, and explain practical engineering controls for noise reduction.",
      "modelAnswer": "Acoustic Hazards and Noise Control in Farm Machinery:\n\n1. Acoustic Exposure Levels:\nConventional agricultural tractors without sound-damped cabs produce noise levels of 88 to 98 dB(A) at the operator's ear under full engine load. Major sound sources include diesel cylinder combustion shock, exhaust gas pulses, cooling fan blade turbulence, and straight-cut transmission gears.\n\n2. Permissible Exposure Standards:\nUnder Indian Standards (IS 12180) and international OSHA regulations, the permissible continuous noise limit is 85 dB(A) for an 8-hour workday. With a 5 dB exchange rate, permissible exposure drops to 4 hours at 90 dB(A) and only 2 hours at 95 dB(A). Unprotected chronic exposure causes permanent sensorineural hearing loss (acoustic trauma) through irreversible destruction of cochlear hair cells.\n\n3. Engineering & Administrative Controls:\n- Source Control: Installing reactive-absorptive combination exhaust silencers (mufflers) and aerodynamically profiled composite cooling fans.\n- Path Attenuation: Installing rubber vibration-isolation cab mounts, double-wall firewall bulkheads, and acoustic foam roof and floor linings.\n- Personal Protective Equipment (PPE): Mandatory use of hearing protection (earmuffs or foam earplugs providing 20-25 dB Noise Reduction Rating) when operating open-station tractors.",
      "outlinePoints": [
        "Sound pressure levels of tractors (88-98 dBA) and primary sources",
        "Permissible acoustic thresholds (85 dBA for 8 h) and exchange rate rules",
        "Pathology of chronic noise-induced cochlear hearing loss",
        "Engineering controls: mufflers, acoustic cab insulation, elastomeric mounts",
        "Administrative and personal protective measures (earmuffs/plugs)"
      ]
    },
    {
      "id": "SOL223-U1-SUB15",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency",
      "questionText": "Compare a four-wheel tractor with a two-wheel walking tractor (power tiller) in terms of power output, field maneuverability, and agricultural suitability.",
      "modelAnswer": "Four-Wheel Tractor vs Two-Wheel Power Tiller:\n\n1. Power Capacity & Engine Rating:\n- Four-Wheel Tractor: Engine power ranges from 25 hp to over 75 hp, powered by multi-cylinder (3 to 4 cylinder) water-cooled diesel engines, capable of handling heavy deep tillage and large multi-row implements.\n- Power Tiller: Engine power ranges from 8 hp to 15 hp, typically powered by a single-cylinder horizontal diesel engine with hopper or radiator cooling.\n\n2. Field Maneuverability & Terrain Adaptation:\n- Four-Wheel Tractor: Requires large headlands (5-8 meters) for turning. Its high axle weight (1800-3000 kg) induces severe subsoil compaction and risks bogging down in deep puddled wetland soils.\n- Power Tiller: Extremely agile with near-zero turning radius via independent steering dog clutches. Lightweight (350-500 kg), making it ideal for terraced hillside plots and small puddled wetland paddy basins.\n\n3. Implement Versatility & Operator Ergonomics:\n- Four-Wheel Tractor: Features standard Category I/II three-point hydraulic hitch, draft control, and 540 rpm PTO. Provides seated operator comfort and high daily field capacity (3-6 ha/day).\n- Power Tiller: Implements are hitched via simple hitch pins or rotary tiller flanges. The operator must walk behind or balance on a tail wheel sulky, leading to substantial physical fatigue and high exposure to handle vibration.",
      "outlinePoints": [
        "Engine horsepower rating and cylinder configuration comparison",
        "Weight, turning radius, and performance in puddled paddy fields",
        "Suitability for large commercial farms vs small terraced holdings",
        "Hydraulic hitching systems and implement versatility",
        "Operator ergonomics: seated tractor comfort vs walk-behind physical fatigue"
      ]
    },
    {
      "id": "SOL223-U1-SUB16",
      "questionType": "LONG_ANSWER",
      "maxMarks": 10,
      "difficulty": "Hard",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks",
      "questionText": "Explain the mechanics of draft animal harnessing. Compare traditional yokes with improved harnessing systems and discuss their impact on draft power delivery.",
      "modelAnswer": "Mechanics of Draft Animal Harnessing in Indian Agriculture:\n\n1. Biomechanical Principles of Draft Generation:\nA draft animal produces forward pull by leaning forward, shifting its center of gravity ahead of its hoof support base. Muscular effort from the hindquarters drives the skeleton against a harness contact surface, transferring tractive effort along the traces to the agricultural implement. The efficiency of this process depends on contact area, pressure distribution, point of draft application, and angle of pull.\n\n2. Limitations of Traditional Wooden Yokes:\n- The traditional neck yoke is a rigid, unpadded wooden beam resting directly on the animal's cervical vertebrae immediately anterior to the withers.\n- Contact Area: Extremely small (120 to 180 cm\u00b2), generating localized contact pressures of 1.5 to 2.2 kgf/cm\u00b2.\n- Pathological Consequences: High focal pressure creates painful neck sores, galls, and subcutaneous hematomas. Under heavy load, the yoke rides backward, compressing the jugular vein and trachea and causing premature exhaustion.\n- Hitch Angle Misalignment: Yokes often produce steep pull angles (>25\u00b0), creating a large vertical force component that drives the yoke painfully down onto the animal's neck.\n\n3. Improved Harnessing Architectures:\n- Allahabad Three-Pad Harness: Developed at SHUATS, it incorporates two padded shoulder pads seated over the scapulae and a third padded wither pad. Contact area increases to 450-550 cm\u00b2, reducing peak contact pressure below 0.5 kgf/cm\u00b2.\n- Collar Harness: Distributes load uniformly across the pectoral girdle and muscular shoulders, bypassing the sensitive cervical spine entirely.\n\n4. Quantitative Impact on Draft Delivery:\nField trials by ICAR demonstrate that improved padded harnesses:\n- Increase sustainable draft power delivery by 20% to 28% (elevating output from 0.75 hp to nearly 1.0 hp per pair).\n- Reduce pulse rate elevation by 15-20% and lower rectal temperature accumulation during afternoon work.\n- Extend daily working duration from 4-5 hours to 6-7 hours without gall formation.",
      "outlinePoints": [
        "Biomechanical principles: center of gravity shift and muscular tractive transfer",
        "Engineering critique of traditional neck yokes: point loading and tracheal choking",
        "Design features of Allahabad three-pad harness and collar harnesses",
        "Comparison of contact area (150 cm\u00b2 vs 500 cm\u00b2) and localized pressure",
        "Quantitative benefits: 20-28% power increase and reduced physiological fatigue"
      ]
    },
    {
      "id": "SOL223-U1-SUB17",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations",
      "questionText": "Calculate the indicated thermal efficiency and brake thermal efficiency of a tractor diesel engine developing 35 kW brake power with a mechanical efficiency of 82%, consuming 9.2 kg of diesel fuel per hour. (Calorific value of diesel = 42,500 kJ/kg).",
      "modelAnswer": "Given Parameters:\n- Brake Power (P_b) = 35 kW\n- Mechanical efficiency (eta_m) = 82% = 0.82\n- Fuel consumption rate (m_f) = 9.2 kg/h = 9.2 / 3600 kg/s = 0.002556 kg/s\n- Calorific value of diesel (CV) = 42,500 kJ/kg\n\nStep 1: Calculate Heat Input Rate from Fuel (Q_in in kW):\nQ_in = m_f * CV = 0.002556 kg/s * 42,500 kJ/kg = 108.61 kW (kJ/s)\n\nStep 2: Calculate Brake Thermal Efficiency (eta_bth):\neta_bth = (Brake Power / Heat Input Rate) * 100\neta_bth = (35 kW / 108.61 kW) * 100 = 32.22%\n\nStep 3: Calculate Indicated Power (P_ind in kW):\nP_ind = Brake Power / eta_m\nP_ind = 35 kW / 0.82 = 42.68 kW\n\nStep 4: Calculate Indicated Thermal Efficiency (eta_ith):\neta_ith = (Indicated Power / Heat Input Rate) * 100\neta_ith = (42.68 kW / 108.61 kW) * 100 = 39.30%\nAlternatively: eta_ith = eta_bth / eta_m = 32.22% / 0.82 = 39.29%\n\nFinal Answers:\n- Brake Thermal Efficiency = 32.22%\n- Indicated Thermal Efficiency = 39.30%",
      "outlinePoints": [
        "Listing given engine operational parameters and fuel properties",
        "Calculation of thermal energy input rate (108.61 kW)",
        "Computation of Brake Thermal Efficiency (32.22%)",
        "Determination of Indicated Power (42.68 kW)",
        "Computation of Indicated Thermal Efficiency (39.30%)"
      ]
    },
    {
      "id": "SOL223-U1-SUB18",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)",
      "questionText": "What is a Roll-Over Protective Structure (ROPS)? Explain the differences between a 2-post ROPS, a 4-post ROPS, and an integrated safety cab.",
      "modelAnswer": "Roll-Over Protective Structures (ROPS) in Agricultural Machinery:\n\n1. Definition:\nA Roll-Over Protective Structure (ROPS) is a specialized structural steel frame mounted directly to the tractor chassis or rear axle housing. Its primary purpose is to absorb kinetic impact energy and maintain a crush-free operator clearance envelope (survival zone) in the event of an accidental lateral rollover or rearward pitch, compliant with BIS (IS 11821) and OECD standards.\n\n2. Structural Configurations:\n- Two-Post ROPS: Consists of two vertical high-strength steel hollow structural section (HSS) uprights connected by a crossbar behind the operator's seat. Often equipped with a folding hinge pin to allow passage under low orchard canopies. It provides essential rollover protection when paired with a lap seatbelt, though it leaves the operator exposed to weather.\n- Four-Post ROPS: Features four vertical structural pillars (two in front of the operator's console and two behind) connected by rigid overhead longitudinal and transverse beams. It offers superior torsional stiffness and energy absorption during complex multi-revolution rolls on steep hillsides.\n- Integrated Safety Cab: The structural ROPS framework is fully enclosed with automotive-grade acoustic insulation, tempered safety glass, HVAC air conditioning, and filtration systems. Beyond rollover protection, it isolates the operator from airborne pesticide mist, toxic dust, acoustic noise (<75 dBA), and whole-body vibration.",
      "outlinePoints": [
        "Definition, structural purpose, and IS 11821 / OECD standards",
        "Description and foldable utility of 2-post ROPS",
        "Description and enhanced torsional rigidity of 4-post ROPS",
        "Features of integrated safety cabs: acoustic, thermal, and chemical isolation"
      ]
    },
    {
      "id": "SOL223-U1-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying",
      "questionText": "A farmer intends to install a multi-blade water-pumping windmill with a rotor diameter of 5 meters. If the average local wind speed is 6 m/s and air density is 1.22 kg/m\u00b3, calculate: (a) Total kinetic wind power intercepted, (b) Maximum theoretical extractable power (Betz limit), and (c) Actual mechanical shaft power assuming an overall aerodynamic power coefficient of 0.28.",
      "modelAnswer": "Given Parameters:\n- Windmill rotor diameter (D) = 5.0 m -> Radius (R) = 2.5 m\n- Wind speed (V) = 6.0 m/s\n- Air density (rho) = 1.22 kg/m\u00b3\n- Aerodynamic power coefficient (C_p) = 0.28\n\nStep 1: Calculate Rotor Swept Area (A):\nA = pi * R\u00b2 = 3.14159 * (2.5)\u00b2 = 19.635 m\u00b2\n\nStep 2: Calculate Total Kinetic Power Available in the Wind Stream (P_total):\nP_total = 0.5 * rho * A * V\u00b3\nP_total = 0.5 * 1.22 * 19.635 * (6.0)\u00b3\nP_total = 0.61 * 19.635 * 216\nP_total = 2587.1 W = 2.587 kW\n\nStep 3: Calculate Maximum Theoretical Extractable Power (Betz Limit):\nAccording to Betz's law, maximum theoretical power coefficient C_p_max = 16/27 = 0.5926\nP_Betz = 2.587 kW * 0.5926 = 1.533 kW (1533 Watts)\n\nStep 4: Calculate Actual Mechanical Shaft Power (P_actual):\nP_actual = C_p * P_total\nP_actual = 0.28 * 2587.1 W = 724.4 W = 0.724 kW (approx. 0.985 metric hp)\n\nFinal Answers:\n(a) Total Intercepted Wind Power = 2.587 kW\n(b) Theoretical Betz Limit Power = 1.533 kW\n(c) Actual Mechanical Shaft Power = 0.724 kW (~0.99 metric hp)",
      "outlinePoints": [
        "Listing rotor geometry, wind velocity, and air density",
        "Calculation of rotor swept area (19.635 m\u00b2)",
        "Computation of total kinetic wind power (2.587 kW)",
        "Calculation of Betz theoretical limit (1.533 kW)",
        "Determination of actual mechanical shaft power delivery (0.724 kW)"
      ]
    },
    {
      "id": "SOL223-U1-SUB20",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints",
      "questionText": "Describe three ergonomic design interventions in manual farm hand tools that reduce musculoskeletal injuries among agricultural workers.",
      "modelAnswer": "Ergonomic Design Interventions in Agricultural Hand Tools:\n\n1. Handle Diameter and Grip Geometry:\nTraditional farm hand tools often feature narrow, rough, or unshaped wooden handles that require excessive grip force, leading to forearm fatigue and blister formation. Ergonomically optimized handles feature an elliptical cross-section with an outer diameter between 30 and 40 mm. This geometry matches optimal human power grip anatomy, distributing gripping pressure across the entire palm and reducing grip strain by up to 35%.\n\n2. Bent-Handle Architecture for Neutral Wrist Alignment:\nConventional tools (like weeding trowels and sickles) force operators to perform extreme wrist flexion or ulnar deviation. Incorporating an intentional handle bend (typically 10\u00b0 to 15\u00b0) allows the user to exert maximal cutting force while maintaining the wrist joint in a neutral, straight posture, preventing carpal tunnel syndrome and tenosynovitis.\n\n3. Extended Shaft Length to Prevent Lumbar Flexion:\nTraditional tools like the Indian khurpi force farm laborers into deep squatting or severe lumbar spinal bending (>60\u00b0 flexion) for hours. Replacing short-handled tools with long-handled weeders (120-150 cm handle length) allows the operator to work upright. This eliminates static lumbar muscle loading, reducing chronic lower back disorders and tripling daily weeding coverage.",
      "outlinePoints": [
        "Handle diameter optimization (30-40 mm) for anatomical power grip",
        "Bent-handle geometry (10-15\u00b0) for maintaining neutral wrist alignment",
        "Long-handled tool design to eliminate continuous lumbar bending",
        "Productivity and occupational health benefits"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "SOL223-U1-FC01",
      "front": "What is the average sustained power output of an adult male agricultural worker?",
      "back": "Approximately 0.10 hp (75 Watts) of continuous sustained power over an 8-hour workday.",
      "hint": "Think around 1/10th of a horsepower",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints"
    },
    {
      "id": "SOL223-U1-FC02",
      "front": "What sustained draft force can a working bullock exert relative to its body weight?",
      "back": "10% to 12% of its total body weight for a normal 6 to 8-hour working day.",
      "hint": "A percentage range roughly around one-tenth",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks"
    },
    {
      "id": "SOL223-U1-FC03",
      "front": "What is the formula for calculating Indicated Horsepower (IHP) in metric units?",
      "back": "IHP = (P_m * L * A * N * n) / 4500, where P_m is mean effective pressure (kg/cm\u00b2), L is stroke (m), A is area (cm\u00b2), N is power strokes/min, and n is number of cylinders.",
      "hint": "PLANn / 4500",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC04",
      "front": "Define Frictional Horsepower (FHP).",
      "back": "The parasitic mechanical power lost to internal engine friction: FHP = IHP - BHP.",
      "hint": "Difference between indicated and brake power",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC05",
      "front": "What is the standard rotational speed of a 6-spline tractor PTO shaft?",
      "back": "540 \u00b1 10 rpm at rated engine speed (shaft diameter 34.9 mm / 1-3/8 inch).",
      "hint": "Between 500 and 600 rpm",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC06",
      "front": "What is the standard rotational speed of a 21-spline tractor PTO shaft?",
      "back": "1000 \u00b1 25 rpm at rated engine speed.",
      "hint": "One thousand rpm",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC07",
      "front": "What is the metric formula for Drawbar Horsepower (DBHP)?",
      "back": "DBHP = (Draft in kgf * Speed in km/h) / 270.",
      "hint": "(Draft * Speed) / 270",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC08",
      "front": "State Betz's Law governing wind rotor efficiency.",
      "back": "The maximum theoretical kinetic power that can be extracted from a wind stream by any rotor is 16/27 (59.3%).",
      "hint": "Theoretical ceiling of 59.3%",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying"
    },
    {
      "id": "SOL223-U1-FC09",
      "front": "What is the typical brake thermal efficiency range for agricultural diesel engines?",
      "back": "32% to 38%, significantly higher than petrol engines (22-28%).",
      "hint": "Between thirty and forty percent",
      "syllabusTopic": "Mechanical power: internal combustion engines, tractors, power tillers, and comparative thermal efficiency"
    },
    {
      "id": "SOL223-U1-FC10",
      "front": "What is the permissible continuous acoustic exposure limit for an 8-hour workday?",
      "back": "85 dB(A) under Indian and OSHA occupational health standards.",
      "hint": "Eighty-five decibels",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)"
    },
    {
      "id": "SOL223-U1-FC11",
      "front": "In what frequency range does the human seated spinal column resonate?",
      "back": "4 to 8 Hz, making tractor terrain-induced vibrations in this band hazardous to lumbar health.",
      "hint": "Four to eight Hertz",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)"
    },
    {
      "id": "SOL223-U1-FC12",
      "front": "What is the primary function of a tractor Roll-Over Protective Structure (ROPS)?",
      "back": "To maintain a crush-proof structural survival envelope for a seat-belted operator during a rollover.",
      "hint": "Survival zone / crush prevention",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)"
    },
    {
      "id": "SOL223-U1-FC13",
      "front": "What is the Morse Test used for in engine diagnostics?",
      "back": "To determine the Indicated Horsepower (IHP) and mechanical efficiency of individual cylinders in a multi-cylinder engine.",
      "hint": "Sequential cylinder cutout test",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC14",
      "front": "How does installing shunt capacitors improve agricultural motor efficiency?",
      "back": "Supplies local reactive power, raising lagging power factor toward unity and reducing line current and heating losses.",
      "hint": "Supplies leading VARs to correct power factor",
      "syllabusTopic": "Electrical power: induction motors, rural electrification, power factor, and farm stationary operations"
    },
    {
      "id": "SOL223-U1-FC15",
      "front": "Why do traditional farm water-pumping windmills have 12 to 24 blades?",
      "back": "High solidity provides high starting torque at low cut-in wind velocities (2.5-3.5 m/s) to lift reciprocating pump rods.",
      "hint": "Maximizes starting torque at low wind speeds",
      "syllabusTopic": "Renewable energy: agricultural windmills, solar photovoltaic water pumping, and solar thermal drying"
    },
    {
      "id": "SOL223-U1-FC16",
      "front": "Why is hitching implements above the rear axle center dangerous?",
      "back": "It creates an uncontrollable rearward tipping moment that can flip the tractor backward in under 0.75 seconds.",
      "hint": "Rearward rollover risk",
      "syllabusTopic": "Ergonomics, farm safety, noise thresholds, vibration mitigation, and Roll-Over Protective Structures (ROPS)"
    },
    {
      "id": "SOL223-U1-FC17",
      "front": "What is the typical sustained power delivered by a pair of 400 kg Indian bullocks?",
      "back": "0.75 to 1.0 hp (560 to 746 Watts) at walking speeds of 2.5 to 3.5 km/h.",
      "hint": "Around three-quarters to one horsepower",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks"
    },
    {
      "id": "SOL223-U1-FC18",
      "front": "What is the Allahabad three-pad harness and why is it superior to wooden yokes?",
      "back": "An improved harness with padded shoulder and wither pads; increases contact area to ~500 cm\u00b2, preventing neck galls and increasing pull by 20-25%.",
      "hint": "Padded shoulder harness reducing localized pressure",
      "syllabusTopic": "Animal power: draft capability, physiological limits, harnessing systems, and power output of bullocks"
    },
    {
      "id": "SOL223-U1-FC19",
      "front": "What is the formula for Drawbar Power in SI units?",
      "back": "P_db (kW) = (Draft in kN * Travel Speed in km/h) / 3.6.",
      "hint": "(Draft in kN * Speed in km/h) / 3.6",
      "syllabusTopic": "Power measurement: IHP, BHP, FHP, PTO power, drawbar pull, drawbar power, and mechanical efficiency calculations"
    },
    {
      "id": "SOL223-U1-FC20",
      "front": "What is the physiological work limit for sustained 8-hour human manual labor?",
      "back": "Energy expenditure should not exceed 30% to 35% of maximal aerobic capacity (VO2 max), with heart rate staying below 110-120 bpm.",
      "hint": "30-35% VO2 max limit",
      "syllabusTopic": "Human power: physiological energy expenditure, work capacity, and ergonomic constraints"
    }
  ]
};
