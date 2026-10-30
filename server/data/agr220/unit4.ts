import { UnitContent } from "./types";

export const unit4Content: UnitContent = {
  "unitNumber": 4,
  "title": "Agricultural Information Systems",
  "shortDescription": "ICT in agriculture, farmer mobile apps (Kisan Suvidha, Meghdoot, Damini, Plantix), satellite remote sensing (NDVI, Sentinel, Landsat, SAR), GIS spatial mapping in QGIS, RTK precision farming, Kisan Drones and DGCA rules, e-NAM, and AgriStack.",
  "estimatedReadTimeMinutes": 25,
  "syllabusTopics": [
    "Information and Communication Technology (ICT) frameworks in agricultural transformation",
    "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
    "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
    "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
    "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
    "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
    "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks"
  ],
  "notes": {
    "learningObjectives": [
      "Evaluate national farmer mobile applications (Kisan Suvidha, Meghdoot, Damini, Plantix) and their delivery architectures.",
      "Analyze the biological and optical physics of satellite remote sensing, comparing Sentinel-2, Landsat, and microwave SAR.",
      "Master Geographic Information Systems (GIS) workflows in QGIS, executing georeferencing, IDW interpolation, and thematic mapping.",
      "Explain precision agriculture hardware: RTK-GNSS autosteer, impact-plate yield monitors, and Variable Rate Technology (VRT).",
      "Understand DGCA drone regulations, Digital Sky airspace zones, multispectral camera photogrammetry, and ULV spraying dynamics.",
      "Examine digital agricultural extension platforms, analyzing e-NAM's electronic auction architecture and Kisan Call Centers.",
      "Assess AgriStack and Digital Public Infrastructure (DPI) initiatives transforming credit, insurance, and subsidy delivery."
    ],
    "sections": [
      {
        "id": "agr220-u4-sec1",
        "heading": "1. ICT Frameworks and Farmer Mobile Applications",
        "content": "Information and Communication Technology (ICT) in agriculture bridges historical information asymmetries between rural smallholders and technical/market institutions.\n\n1. Public Mobile Platforms in India:\n- Kisan Suvidha: Omnibus multi-lingual portal delivering 5-day IMD weather forecasts, daily modal market prices from APMC mandis, GPS directories of authorized seed/fertilizer dealers, and plant protection guidelines.\n- Meghdoot: Joint IMD-IITM-ICAR application issuing contextual, bi-weekly agrometeorological crop and livestock advisories in regional vernaculars.\n- Damini: Early-warning lightning tracking app developed by IITM Pune that pushes critical alerts 30-45 minutes in advance covering a 20-30 km radius, protecting open-field farm labor.\n- mKisan & Agrimarket: Delivering 2G-compatible text/voice SMS broadcasts and localized 50 km radius APMC mandi arrival/pricing data.\n\n2. AI and Computer Vision in Diagnostics (Plantix):\nEmploys Convolutional Neural Networks (CNNs) trained on vast image repositories of diseased plant organs. When farmers upload photos, the algorithm extracts spatial edge and color features to classify diseases and nutrient deficiencies with confidence percentages, prescribing IPM recommendations."
      },
      {
        "id": "agr220-u4-sec2",
        "heading": "2. Satellite Remote Sensing and Vegetation Indices",
        "content": "Earth observation satellites provide systematic spatial and temporal monitoring of agro-ecosystems.\n\n1. Optical Physics of Vegetation Reflectance:\n- Visible Band (400-700 nm): Strong photon absorption by leaf Chlorophyll a and b pigments (driving photosynthesis), with a minor green reflection peak at ~550 nm.\n- Near-Infrared (NIR) Band (700-1300 nm): Strong cellular scattering (40-60% reflectance) caused by the multiple internal refractive index boundaries of hydrated spongy mesophyll cell walls.\n- Shortwave Infrared (SWIR) Band (1300-2500 nm): Pronounced absorption features driven by liquid water in leaf tissue.\n\n2. Vegetation Indices:\n- NDVI = (NIR - RED) / (NIR + RED): Values range from -1.0 to +1.0. Dense healthy crops range from 0.65 to 0.85; bare soil yields 0.1 to 0.2; water yields negative values.\n- Enhanced Vegetation Index (EVI): Resolves NDVI saturation in closed dense canopies by adding a blue band and canopy background factor.\n\n3. Constellation Comparison:\n- Sentinel-2: 10m spatial resolution, 5-day revisit cycle, and dedicated Red Edge bands sensitive to early nitrogen stress.\n- Landsat-8/9: 30m resolution, 8-day combined revisit, and dual thermal infrared bands for surface temperature modeling.\n- Microwave SAR (Sentinel-1): C-band radar pulses penetrate clouds and rain day and night, providing indispensable all-weather tracking of kharif paddy rice transplantation and flooding."
      },
      {
        "id": "agr220-u4-sec3",
        "heading": "3. Geographic Information Systems (GIS) and Spatial Modeling",
        "content": "Geographic Information Systems (GIS) provide the analytical engine for storing, modeling, and visualizing spatial agricultural phenomena.\n\n1. Spatial Data Models:\n- Vector Data: Discrete points (tubewells, soil test locations), lines (irrigation canals), and polygons (farm parcel cadastral boundaries).\n- Raster Data: Regular pixel grids representing continuous environmental variables (satellite reflectance, digital elevation models, soil pH surfaces).\n\n2. Spatial Analytical Workflows in QGIS:\n- Georeferencing: Aligning raw scanned paper cadastral maps or drone aerial imagery to projected coordinate reference systems (e.g., UTM Zone 43N, EPSG:32643) using Ground Control Points (GCPs).\n- Spatial Interpolation: Converting discrete soil sample test points into continuous thematic nutrient maps using Inverse Distance Weighting (IDW) or Ordinary Kriging based on semivariogram modeling.\n- Raster Map Algebra & Masking: Clipping continuous fertility surfaces against parcel boundary vector layers and reclassifying into agronomic rating tiers (Low/Medium/High) according to Soil Health Card standards."
      },
      {
        "id": "agr220-u4-sec4",
        "heading": "4. Precision Agriculture and Machinery Guidance",
        "content": "Precision Agriculture manages intra-field spatial variability to optimize input efficiency and environmental sustainability.\n\n1. GNSS & RTK Guidance:\nReal-Time Kinematic (RTK) positioning uses dual-frequency carrier-phase GNSS signals corrected by stationary base stations to deliver 1 to 2.5 cm pass-to-pass accuracy, eliminating implement overlap and enabling Controlled Traffic Farming (CTF).\n\n2. Variable Rate Technology (VRT):\n- Map-Based VRA: Executes pre-computed GIS prescription maps uploaded to tractor consoles, dynamically regulating fertilizer spreader belts or sprayer solenoids via GPS coordinates.\n- Sensor-Based VRA: Active optical boom sensors (e.g., GreenSeeker) measure real-time canopy NDVI, computing and injecting nitrogen doses on-the-go.\n\n3. Combine Harvester Yield Monitors:\nImpact-plate load cells located at the discharge head of the clean grain elevator measure instantaneous grain mass flow, combined with capacitive moisture sensors and forward speed to generate spatial crop yield maps."
      },
      {
        "id": "agr220-u4-sec5",
        "heading": "5. Agricultural Drones, Digital Extension, and AgriStack",
        "content": "1. Kisan Drones & DGCA Regulation:\n- Regulatory Framework: Drone Rules 2021 categorizes 10L spraying drones as 'Small Drones' (2-25 kg). Digital Sky maps define Green Zones (free flight up to 400 ft AGL) and controlled Yellow/Red zones. Pilots must hold DGCA-authorized Remote Pilot Certificates (RPC).\n- Ultra-Low Volume (ULV) Spraying: Drones apply concentrated mixtures at 8-15 L/ha using rotary atomizers (CDA) producing optimal 100-150 micron droplets. Propeller downwash drives spray into dense canopies.\n\n2. Digital Extension Architectures:\n- e-NAM (National Agriculture Market): Electronic trading network linking APMC mandis. Mandatory mandi laboratory assaying certifies commodity quality, enabling transparent anonymous nationwide e-bidding, escrow bank settlements, and direct farmer DBT payments.\n- Kisan Call Centers (1800-180-1551): 3-tier toll-free extension network handling farmer inquiries in 22 regional languages.\n\n3. AgriStack & Digital Public Infrastructure:\nEstablishes core registries: verified Digital Farmer IDs, georeferenced cadastral parcel maps, and digital crop sown surveys under the Digital Agriculture Mission, enabling instant 5-minute KCC loans and automated PMFBY insurance claim payouts."
      }
    ],
    "keyTakeaways": [
      "Farmer mobile apps (Kisan Suvidha, Meghdoot, Damini, Plantix) deliver localized meteorological alerts, market prices, and AI computer vision diagnostics.",
      "NDVI = (NIR - RED) / (NIR + RED) exploits high spongy mesophyll NIR scattering against visible red chlorophyll absorption to quantify crop health.",
      "Sentinel-2 provides open 10m multispectral data every 5 days; microwave SAR provides all-weather cloud-penetrating radar imaging during the Kharif monsoon.",
      "QGIS enables georeferencing, vector parcel management, and spatial interpolation (IDW/Kriging) to produce thematic soil health maps.",
      "RTK guidance delivers 1-2.5 cm pass-to-pass accuracy, while ISOBUS connects tractors with variable rate applicators and yield monitors.",
      "Kisan Drones operate under DGCA rules in Green Zones up to 400 ft AGL, utilizing rotary atomizers (100-150 microns) and downwash for ULV chemical spraying.",
      "e-NAM provides national electronic bidding based on scientific assaying, while AgriStack establishes foundational Digital Farmer IDs and GIS crop sown registries."
    ],
    "commonMisunderstandings": [
      "Misunderstanding: Drones can spray conventional pesticide tank mixes at standard 400-500 L/ha water volumes. Fact: Drones operate on Ultra-Low Volume (ULV) principles using 8-15 L/ha with specialized, approved CIB&RC formulations and rotary atomizers.",
      "Misunderstanding: Optical satellite imagery like Sentinel-2 can track kharif crops through heavy monsoonal rain and clouds. Fact: Optical wavelengths cannot penetrate clouds; microwave Synthetic Aperture Radar (SAR, like Sentinel-1) is required for all-weather kharif monitoring.",
      "Misunderstanding: A standard smartphone GPS receiver is accurate enough for automated tractor row steering. Fact: Smartphone GPS drifts by 2 to 5 meters; centimeter-level pass-to-pass tractor guidance requires Real-Time Kinematic (RTK) carrier-phase differential corrections.",
      "Misunderstanding: The Damini app predicts lightning by using the smartphone's built-in magnetic sensor. Fact: Damini receives central server alerts driven by IITM Pune's ground-based Lightning Location Network (LLN) measuring atmospheric electromagnetic radio pulses."
    ],
    "summary": "Unit 4 delivers comprehensive academic coverage of agricultural information systems, remote sensing, spatial technologies, and digital extension architectures. It examines the public mobile application ecosystem (Kisan Suvidha, Meghdoot, Damini, Plantix) and the deployment of deep learning CNNs for visual leaf disease diagnostics. The biological and optical physics of satellite earth observation are analyzed across the electromagnetic spectrum, detailing chlorophyll absorption, mesophyll NIR scattering, the NDVI index, and comparing Sentinel-2, Landsat, and cloud-penetrating Synthetic Aperture Radar (SAR). Geographic Information Systems (GIS) principles are explored in QGIS, detailing vector versus raster models, georeferencing, and geostatistical interpolation (IDW and Kriging) for soil fertility mapping. Precision agriculture technologies are systematically evaluated, including RTK-GNSS centimeter autosteer, impact-plate yield monitoring, and Map-based vs Sensor-based Variable Rate Application (VRA) under the open ISOBUS standard. Agricultural drone operations (Kisan Drones) are covered under DGCA Drone Rules 2021, detailing Digital Sky airspace classifications, multispectral photogrammetry, and Controlled Droplet Application (CDA) ultra-low volume spraying. Finally, digital marketing and extension architectures are explored through e-NAM's laboratory assaying and electronic auction pipeline, the 3-tier Kisan Call Center hierarchy, and India's emerging AgriStack digital public infrastructure."
  },
  "mcqs": [
    {
      "id": "AGR220-U4-MCQ01",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Easy",
      "questionText": "What is the primary function of the Government of India's 'Kisan Suvidha' mobile application?",
      "options": {
        "A": "Providing a single-window mobile portal for farmers to access weather forecasts, market prices, input dealers, and plant protection advisories",
        "B": "Providing social media messaging and video streaming for rural entertainment",
        "C": "Selling second-hand tractors and diesel generators directly to consumers",
        "D": "Operating an online casino and agricultural lottery system"
      },
      "correctOption": "A",
      "explanation": "Kisan Suvidha is an omnibus mobile application developed by the Ministry of Agriculture and Farmers Welfare that delivers real-time weather forecasts, market prices (mandi rates), agro-advisories, dealer locations, and plant protection measures to Indian farmers."
    },
    {
      "id": "AGR220-U4-MCQ02",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Easy",
      "questionText": "Which mobile application was jointly developed by the IMD, IITM, and ICAR to provide district-level agromet weather advisories in regional languages?",
      "options": {
        "A": "Meghdoot",
        "B": "Twitter",
        "C": "Snapchat",
        "D": "Telegram"
      },
      "correctOption": "A",
      "explanation": "Meghdoot is a joint initiative of the India Meteorological Department (IMD), Indian Institute of Tropical Meteorology (IITM), and ICAR that issues location-specific crop and livestock weather advisories in English and local vernacular languages twice a week (Tuesdays and Fridays)."
    },
    {
      "id": "AGR220-U4-MCQ03",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Easy",
      "questionText": "What is the primary warning function of the 'Damini' mobile app developed by IITM-Pune?",
      "options": {
        "A": "Lightning and thunderstorm alerts with 20 to 30 km radius warnings",
        "B": "Soil salinity detection using smartphone cameras",
        "C": "Tractor maintenance scheduling and engine diagnostics",
        "D": "Commodity futures price trading on the NCDEX"
      },
      "correctOption": "A",
      "explanation": "Damini is a specialized mobile app developed by IITM Pune that tracks lightning strikes and issues early warning alerts to users within a 20-30 km radius approximately 30 to 45 minutes before a strike, protecting rural field workers from fatal lightning strikes."
    },
    {
      "id": "AGR220-U4-MCQ04",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Easy",
      "questionText": "Which mobile app utilizes computer vision and convolutional neural networks (CNNs) to diagnose plant diseases and nutrient deficiencies from smartphone leaf photos?",
      "options": {
        "A": "Plantix",
        "B": "Instagram",
        "C": "Candy Crush",
        "D": "Google Maps"
      },
      "correctOption": "A",
      "explanation": "Plantix (developed by PEAT GmbH) uses deep learning image recognition algorithms to detect over 500 crop diseases, pest damage, and nutrient deficiencies instantly when farmers upload a photograph of an affected plant organ."
    },
    {
      "id": "AGR220-U4-MCQ05",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Easy",
      "questionText": "What does the acronym NDVI stand for in remote sensing and satellite crop monitoring?",
      "options": {
        "A": "Normalized Difference Vegetation Index",
        "B": "National Digital Vegetable Identifier",
        "C": "Nitrogen Dynamic Volume Indicator",
        "D": "New Differential Velocity Index"
      },
      "correctOption": "A",
      "explanation": "NDVI stands for Normalized Difference Vegetation Index, a widely used mathematical index computed from satellite imagery to assess whether the target being observed contains live, green vegetation or barren soil/water."
    },
    {
      "id": "AGR220-U4-MCQ06",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Easy",
      "questionText": "What is the mathematical formula used to calculate NDVI from Near-Infrared (NIR) and Red (RED) spectral reflectance bands?",
      "options": {
        "A": "NDVI = (NIR - RED) / (NIR + RED)",
        "B": "NDVI = (NIR + RED) / (NIR - RED)",
        "C": "NDVI = NIR * RED",
        "D": "NDVI = RED / NIR"
      },
      "correctOption": "A",
      "explanation": "NDVI is calculated as (NIR - RED) / (NIR + RED). Healthy green chlorophyll strongly absorbs visible Red light while mesophyll leaf cell structures strongly reflect Near-Infrared light, resulting in high positive NDVI values."
    },
    {
      "id": "AGR220-U4-MCQ07",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Easy",
      "questionText": "Which European Space Agency (ESA) satellite constellation provides free, open-access 10-meter resolution multispectral imagery every 5 days for agricultural monitoring?",
      "options": {
        "A": "Sentinel-2",
        "B": "Hubble Space Telescope",
        "C": "Sputnik 1",
        "D": "Voyager 2"
      },
      "correctOption": "A",
      "explanation": "The European Space Agency's Sentinel-2 constellation (Sentinel-2A and 2B) delivers free, 13-band multispectral optical data at spatial resolutions of 10m, 20m, and 60m with a 5-day revisit cycle worldwide, making it the global standard for open crop monitoring."
    },
    {
      "id": "AGR220-U4-MCQ08",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Easy",
      "questionText": "What does GIS stand for in spatial science and agricultural analytics?",
      "options": {
        "A": "Geographic Information System",
        "B": "Global Irrigation Sensor",
        "C": "General Internet Server",
        "D": "Geostationary Indian Satellite"
      },
      "correctOption": "A",
      "explanation": "GIS stands for Geographic Information System, a computer-based framework that captures, manages, analyzes, and displays geographically referenced data across layers."
    },
    {
      "id": "AGR220-U4-MCQ09",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Easy",
      "questionText": "Which of the following is a leading free, open-source Geographic Information System desktop software used widely by agricultural universities and researchers?",
      "options": {
        "A": "QGIS (Quantum GIS)",
        "B": "Adobe Photoshop",
        "C": "Microsoft PowerPoint",
        "D": "VLC Media Player"
      },
      "correctOption": "A",
      "explanation": "QGIS is an open-source, community-driven desktop GIS application that provides extensive geospatial data viewing, editing, spatial analysis, and map composition capabilities."
    },
    {
      "id": "AGR220-U4-MCQ10",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Easy",
      "questionText": "In GIS, what are the two fundamental data formats used to represent spatial features?",
      "options": {
        "A": "Vector data and Raster data",
        "B": "Audio files and Video files",
        "C": "Paper maps and Chalk drawings",
        "D": "Word documents and PDF files"
      },
      "correctOption": "A",
      "explanation": "Geospatial data is fundamentally represented in two formats: Vector data (points, lines, polygons defined by coordinate geometries) and Raster data (a continuous grid of cells or pixels holding value attributes like elevation or reflectance)."
    },
    {
      "id": "AGR220-U4-MCQ11",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Easy",
      "questionText": "What is the primary objective of Precision Agriculture?",
      "options": {
        "A": "Applying the right input, at the right rate, at the right time, and in the right place across field spatial variability",
        "B": "Applying identical fertilizer amounts uniformly regardless of soil variation",
        "C": "Replacing all human farm workers with humanoid robotic androids",
        "D": "Eliminating the need for irrigation and water management completely"
      },
      "correctOption": "A",
      "explanation": "Precision Agriculture (PA) is a management concept focused on observing, measuring, and responding to inter- and intra-field spatial and temporal variability in crops, optimizing input use efficiency (the '4R' stewardship: Right source, Right rate, Right time, Right place)."
    },
    {
      "id": "AGR220-U4-MCQ12",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Easy",
      "questionText": "What does GPS stand for in satellite navigation and tractor auto-steer systems?",
      "options": {
        "A": "Global Positioning System",
        "B": "General Plant Selector",
        "C": "Geo Precision Sensor",
        "D": "Green Power Station"
      },
      "correctOption": "A",
      "explanation": "GPS stands for Global Positioning System, a satellite-based radionavigation system owned by the United States government and operated by the United States Space Force, providing location and time information anywhere on Earth."
    },
    {
      "id": "AGR220-U4-MCQ13",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Easy",
      "questionText": "What is Variable Rate Technology (VRT) in precision farming equipment?",
      "options": {
        "A": "Equipment and software that dynamically adjusts the application rate of seeds, fertilizers, or pesticides in real time based on spatial field prescription maps",
        "B": "Tractors that change their engine speed randomly to save diesel",
        "C": "Irrigation pumps that shut off when electricity tariffs spike",
        "D": "A system that charges farmers different hourly rental rates for implements"
      },
      "correctOption": "A",
      "explanation": "Variable Rate Technology (VRT) allows agricultural applicators (seeders, sprayers, fertilizer spreaders) to modulate input application rates automatically on-the-fly according to GPS-referenced prescription zones."
    },
    {
      "id": "AGR220-U4-MCQ14",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Easy",
      "questionText": "Which regulatory statutory authority governs drone flight operations, pilot licensing, and airspace classifications in India?",
      "options": {
        "A": "Directorate General of Civil Aviation (DGCA)",
        "B": "Food Safety and Standards Authority of India (FSSAI)",
        "C": "Indian Council of Agricultural Research (ICAR)",
        "D": "Reserve Bank of India (RBI)"
      },
      "correctOption": "A",
      "explanation": "The Directorate General of Civil Aviation (DGCA) under the Ministry of Civil Aviation enforces the Drone Rules 2021, overseeing drone type certification, Remote Pilot Certificate (RPC) issuance, and Digital Sky platform airspace permissions."
    },
    {
      "id": "AGR220-U4-MCQ15",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Easy",
      "questionText": "Under the Government of India's Drone Rules 2021, an agricultural drone with an All-Up Weight (AUW) between 2 kg and 25 kg is classified under which category?",
      "options": {
        "A": "Small Drone",
        "B": "Nano Drone",
        "C": "Micro Drone",
        "D": "Large Drone"
      },
      "correctOption": "A",
      "explanation": "Under Indian Drone Rules: Nano (< 250 g), Micro (250 g to 2 kg), Small (2 kg to 25 kg), Medium (25 kg to 150 kg), and Large (> 150 kg). Standard 10-liter agricultural spraying drones typically fall into the 'Small' category."
    },
    {
      "id": "AGR220-U4-MCQ16",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Easy",
      "questionText": "What does ULV stand for in agricultural drone pesticide and fertilizer application?",
      "options": {
        "A": "Ultra-Low Volume",
        "B": "Universal Liquid Valve",
        "C": "Upper Limit Velocity",
        "D": "Unmanned Land Vehicle"
      },
      "correctOption": "A",
      "explanation": "ULV stands for Ultra-Low Volume spraying, an application method where agrochemical concentrates are finely atomized and applied in small spray carrier volumes (typically 8 to 15 liters per hectare for drones, compared to 400-500 L/ha for manual knapsack spraying)."
    },
    {
      "id": "AGR220-U4-MCQ17",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "difficulty": "Easy",
      "questionText": "What is the toll-free telephone number for the Government of India's 'Kisan Call Center' (KCC)?",
      "options": {
        "A": "1800-180-1551",
        "B": "100",
        "C": "108",
        "D": "1947"
      },
      "correctOption": "A",
      "explanation": "1800-180-1551 is the toll-free number for Kisan Call Centers (KCC) launched in 2004, providing agricultural advisory services to farmers in 22 local Indian languages from 6:00 AM to 10:00 PM on all 365 days."
    },
    {
      "id": "AGR220-U4-MCQ18",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "difficulty": "Easy",
      "questionText": "What does e-NAM stand for in India's agricultural marketing ecosystem?",
      "options": {
        "A": "Electronic National Agriculture Market",
        "B": "Electronic Network of Agro Merchants",
        "C": "Extended National Agronomy Mission",
        "D": "Emergency National Agri Mandi"
      },
      "correctOption": "A",
      "explanation": "e-NAM stands for National Agriculture Market (electronic), a pan-India electronic trading portal launched in 2016 that networks existing APMC mandis to create a unified national market for agricultural commodities."
    },
    {
      "id": "AGR220-U4-MCQ19",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "difficulty": "Easy",
      "questionText": "Which messaging platform is most commonly utilized for real-time peer-to-peer and extension advisory groups among Indian farmers?",
      "options": {
        "A": "WhatsApp",
        "B": "Slack",
        "C": "IRC Chat",
        "D": "Discord"
      },
      "correctOption": "A",
      "explanation": "WhatsApp is ubiquitous across rural India and widely used by Krishi Vigyan Kendras (KVKs), state agriculture officers, and farmer producer organizations (FPOs) to share photo diagnostics, weather alerts, and video advisories."
    },
    {
      "id": "AGR220-U4-MCQ20",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "difficulty": "Easy",
      "questionText": "What does IoT stand for in modern precision agriculture and smart farming?",
      "options": {
        "A": "Internet of Things",
        "B": "Input of Technology",
        "C": "Irrigation on Time",
        "D": "Index of Topography"
      },
      "correctOption": "A",
      "explanation": "IoT stands for Internet of Things, referring to the interconnected network of physical devices (soil moisture sensors, weather stations, smart valves) embedded with electronics and internet connectivity that collect and exchange telemetry data autonomously."
    },
    {
      "id": "AGR220-U4-MCQ21",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Medium",
      "questionText": "What distinguishes the mKisan SMS portal from standard smartphone applications in delivering agricultural advisories?",
      "options": {
        "A": "It pushes targeted, location-specific text and voice messages over 2G cellular networks without requiring smartphone hardware or active internet connectivity",
        "B": "It requires high-speed 5G broadband and 4K smartphone displays",
        "C": "It operates solely through physical postal mail carriers",
        "D": "It only communicates through encrypted radio frequency transceivers"
      },
      "correctOption": "A",
      "explanation": "mKisan delivers text and Interactive Voice Response (IVR) advisories directly to basic feature phones over standard cellular networks, ensuring equitable access for marginalized and resource-poor farmers lacking smartphones or mobile internet."
    },
    {
      "id": "AGR220-U4-MCQ22",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Medium",
      "questionText": "Which Indian government app allows farmers to check real-time daily wholesale prices and arrival volumes across APMC mandis located within a 50 km radius of their current GPS location?",
      "options": {
        "A": "Agrimarket",
        "B": "DigiLocker",
        "C": "Aadhaar FaceRD",
        "D": "IRCTC Rail Connect"
      },
      "correctOption": "A",
      "explanation": "The Agrimarket mobile app captures the farmer's current GPS location and automatically displays commodity market prices, maximum/minimum rates, and arrival trends across all mandis within a 50-kilometer radius."
    },
    {
      "id": "AGR220-U4-MCQ23",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Medium",
      "questionText": "Why does healthy, photosynthetically active green vegetation appear exceptionally bright in the Near-Infrared (NIR) spectrum but dark in the visible Red spectrum?",
      "options": {
        "A": "Chlorophyll pigments absorb visible red photons for photosynthesis (660-680 nm), while spongy mesophyll leaf internal cell walls scatter and reflect up to 50% of NIR energy to prevent leaf overheating",
        "B": "Leaves are coated in metal particles that reflect radio waves",
        "C": "Chlorophyll fluoresces blue light when excited by visible red rays",
        "D": "Near-infrared photons are completely absorbed by leaf stomata"
      },
      "correctOption": "A",
      "explanation": "Chlorophyll a and b pigments absorb red light strongly (driving the light reactions of photosynthesis). In contrast, the internal spongy mesophyll cell structure strongly reflects and scatters near-infrared radiation (700-1100 nm), preventing thermal damage to the leaf."
    },
    {
      "id": "AGR220-U4-MCQ24",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Medium",
      "questionText": "If a remote sensing pixel over a field yields a Near-Infrared (NIR) reflectance of 0.60 and a Red reflectance of 0.10, what is the calculated NDVI value for this pixel?",
      "options": {
        "A": "+0.714",
        "B": "+0.500",
        "C": "+0.060",
        "D": "-0.500"
      },
      "correctOption": "A",
      "explanation": "NDVI = (NIR - RED) / (NIR + RED) = (0.60 - 0.10) / (0.60 + 0.10) = 0.50 / 0.70 = +0.714. This high positive value indicates vigorous, dense green vegetative cover."
    },
    {
      "id": "AGR220-U4-MCQ25",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Medium",
      "questionText": "What typically characterizes the NDVI values of open water bodies and clear farm ponds?",
      "options": {
        "A": "Negative NDVI values (typically between -0.2 and -1.0) because water absorbs NIR light much more strongly than visible red light",
        "B": "Extremely high positive values between +0.8 and +1.0",
        "C": "Identical values to dense alfalfa crops (+0.75)",
        "D": "Zero NDVI with 100% reflectance across all bands"
      },
      "correctOption": "A",
      "explanation": "Clear water absorbs almost all Near-Infrared radiation while reflecting slightly more visible light, meaning NIR < RED, resulting in negative NDVI values (typically -0.2 to -0.5)."
    },
    {
      "id": "AGR220-U4-MCQ26",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Medium",
      "questionText": "What is the primary operational advantage of Synthetic Aperture Radar (SAR) satellites (e.g., Sentinel-1, RISAT-1A) over optical satellites (e.g., Sentinel-2, Landsat-8) in kharif season agricultural monitoring?",
      "options": {
        "A": "SAR microwave pulses penetrate cloud cover, monsoonal haze, and rain, operating day and night irrespective of solar illumination",
        "B": "SAR satellites take true 4K color photographs visible to the human eye",
        "C": "SAR imagery requires zero computer processing or radiometric calibration",
        "D": "SAR satellites fly inside the Earth's troposphere below cloud cover"
      },
      "correctOption": "A",
      "explanation": "Optical satellite sensors cannot penetrate monsoonal cloud decks during the Indian kharif season. Active microwave SAR sensors (like Sentinel-1 C-band or RISAT C-band) emit their own microwave radiation, penetrating clouds and darkness to monitor rice puddling and crop acreage continuously."
    },
    {
      "id": "AGR220-U4-MCQ27",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Medium",
      "questionText": "In spatial data modeling, which vector geometry type is best suited to represent agricultural field boundary parcel polygons?",
      "options": {
        "A": "Closed Polygon features containing perimeter and enclosed area geometry",
        "B": "Single Point coordinates with zero length or area",
        "C": "Polyline segments representing road centerlines",
        "D": "Unstructured point clouds with arbitrary elevations"
      },
      "correctOption": "A",
      "explanation": "Agricultural farm parcels and field boundaries represent discrete areal extents and are stored as Polygon vector geometries, enabling exact computation of field area (hectares), perimeter, and parcel ownership attributes."
    },
    {
      "id": "AGR220-U4-MCQ28",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Medium",
      "questionText": "What is 'Georeferencing' in agricultural GIS workflows?",
      "options": {
        "A": "Assigning real-world geographic coordinates (latitude/longitude or projected coordinates) to an unreferenced raster image or scanned cadastral paper map",
        "B": "Looking up geographic terms in an agricultural dictionary",
        "C": "Writing citations for geography research papers in APA style",
        "D": "Translating soil science terms into regional vernacular languages"
      },
      "correctOption": "A",
      "explanation": "Georeferencing involves establishing ground control points (GCPs) with known geographic coordinates to align raw scanned cadastral maps, drone aerial photos, or satellite tiles onto a real-world geographic coordinate reference system (CRS)."
    },
    {
      "id": "AGR220-U4-MCQ29",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Medium",
      "questionText": "Which spatial interpolation algorithm in GIS is commonly used to generate continuous soil fertility maps (e.g., available N, P, K, pH) from discrete soil sample point locations?",
      "options": {
        "A": "Inverse Distance Weighting (IDW) or Ordinary Kriging",
        "B": "Bubble sort algorithm",
        "C": "Dijkstra shortest path algorithm",
        "D": "Binary search tree interpolation"
      },
      "correctOption": "A",
      "explanation": "Inverse Distance Weighting (IDW) and Ordinary Kriging (geostatistical spatial interpolation based on semivariograms) are standard GIS spatial analyst methods used to predict continuous nutrient values across un-sampled field areas from discrete soil core points."
    },
    {
      "id": "AGR220-U4-MCQ30",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Medium",
      "questionText": "What does EPSG:4326 represent in GIS spatial referencing?",
      "options": {
        "A": "The World Geodetic System 1984 (WGS 84) unprojected geographic coordinate system measured in decimal degrees",
        "B": "A universal soil taxonomy classification code for Mollisols",
        "C": "The standard fertilizer grade for urea in the Indian market",
        "D": "The flight altitude regulation for agricultural drones"
      },
      "correctOption": "A",
      "explanation": "EPSG:4326 is the spatial reference identifier (SRID) representing the unprojected WGS 84 geographic coordinate system, expressing positions in latitude and longitude coordinates (decimal degrees)."
    },
    {
      "id": "AGR220-U4-MCQ31",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Medium",
      "questionText": "Why is Real-Time Kinematic (RTK) positioning preferred over standard autonomous GPS in precision tractor autosteer and bed-forming operations?",
      "options": {
        "A": "RTK utilizes a local stationary base station or cellular CORS network to correct atmospheric satellite errors, achieving pass-to-pass accuracy of 1 to 2.5 cm",
        "B": "RTK uses magnetic compasses that require no satellites at all",
        "C": "Standard GPS is accurate to 1 millimeter while RTK is accurate to 10 meters",
        "D": "RTK eliminates all diesel fuel consumption in tractor operations"
      },
      "correctOption": "A",
      "explanation": "Standard autonomous GPS has an error margin of 2-5 meters due to ionospheric delays and satellite clock drift. RTK positioning uses carrier-phase differential corrections transmitted from a fixed base station to achieve sub-inch (1-2.5 cm) pass-to-pass precision, eliminating row overlap."
    },
    {
      "id": "AGR220-U4-MCQ32",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Medium",
      "questionText": "How does an impact-plate yield sensor installed in a modern combine harvester calculate instantaneous grain yield?",
      "options": {
        "A": "By measuring the force exerted when harvested grain strikes a load cell at the top of the clean grain elevator, combined with grain moisture and GPS speed data",
        "B": "By counting individual grain kernels with high-speed strobe cameras",
        "C": "By weighing the entire combine harvester on continuous road scales",
        "D": "By measuring the volume of exhaust gases emitted by the harvester engine"
      },
      "correctOption": "A",
      "explanation": "An impact-plate mass flow sensor positioned at the discharge of the clean grain elevator measures the kinetic force of grain hitting a load cell. Calibrated against grain moisture and ground speed, it computes mass flow per unit time and generates spatial yield maps."
    },
    {
      "id": "AGR220-U4-MCQ33",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Medium",
      "questionText": "What is the difference between 'Map-based VRA' and 'Sensor-based VRA' in precision nutrient management?",
      "options": {
        "A": "Map-based VRA utilizes pre-compiled prescription maps generated in a GIS, whereas Sensor-based VRA utilizes real-time canopy sensors (e.g., GreenSeeker) to modulate rates instantly without a pre-existing map",
        "B": "Map-based VRA uses paper maps; sensor-based VRA uses Google Earth",
        "C": "Map-based VRA is used only for irrigation; sensor-based is used only for tillage",
        "D": "Map-based VRA requires manual hand spreading; sensor-based uses aircraft"
      },
      "correctOption": "A",
      "explanation": "Map-based Variable Rate Application (VRA) follows GPS prescription maps loaded into the tractor console prior to field entry. Sensor-based VRA uses active optical canopy reflectance sensors (e.g., Trimble GreenSeeker) mounted directly on the tractor boom to read crop vigor and apply variable nitrogen in real time."
    },
    {
      "id": "AGR220-U4-MCQ34",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Medium",
      "questionText": "What is the purpose of the 'Digital Sky Platform' hosted by the Directorate General of Civil Aviation (DGCA)?",
      "options": {
        "A": "An end-to-end online platform that manages drone registrations (UIN), pilot licenses (RPC), and automated flight permission airspace maps (Green, Yellow, Red zones)",
        "B": "A satellite weather streaming service for commercial airline pilots",
        "C": "An e-commerce marketplace for buying second-hand quadcopters",
        "D": "An air traffic simulator video game for aerospace students"
      },
      "correctOption": "A",
      "explanation": "The Digital Sky platform is DGCA's automated interactive airspace map and licensing portal. It delineates Green zones (free flight up to 400 ft without prior permission), Yellow zones (controlled airspace requiring ATC clearance), and Red zones (no-fly zones)."
    },
    {
      "id": "AGR220-U4-MCQ35",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Medium",
      "questionText": "Under current DGCA guidelines, what flight altitude limit is established for drone operations in designated Green Airspace zones without prior air traffic control permission?",
      "options": {
        "A": "Up to 400 feet (120 meters) above ground level (AGL)",
        "B": "Up to 10,000 feet AGL",
        "C": "Up to 50 feet AGL only",
        "D": "Up to 2,000 feet AGL"
      },
      "correctOption": "A",
      "explanation": "In designated Green Zones under India's Drone Rules 2021, drone pilots can operate drones up to 400 feet (120 meters) Above Ground Level (AGL) without needing prior operational air traffic clearance."
    },
    {
      "id": "AGR220-U4-MCQ36",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Medium",
      "questionText": "Why are Centrifugal Rotary Atomizer nozzles (CDA nozzles) frequently preferred over conventional hydraulic pressure nozzles on agricultural spraying drones?",
      "options": {
        "A": "They produce a narrow, uniform droplet size spectrum (100-150 microns) with high drift control and prevent nozzle clogging under low spray volumes",
        "B": "They produce massive droplet sizes larger than 2 millimeters",
        "C": "They heat the pesticide spray solution to boiling temperatures",
        "D": "They eliminate the requirement for any electric power from the drone battery"
      },
      "correctOption": "A",
      "explanation": "Rotary atomizer nozzles use controlled rotating discs to shatter the liquid sheet into an extremely narrow, uniform droplet spectrum (Controlled Droplet Application - CDA), eliminating both drift-prone fine fogs (<50 microns) and wasteful large splashes (>300 microns)."
    },
    {
      "id": "AGR220-U4-MCQ37",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Medium",
      "questionText": "What aerodynamic phenomenon caused by drone propellers actively assists in driving chemical droplets deep into dense crop canopies and under-leaf surfaces?",
      "options": {
        "A": "Rotor downwash (propeller-induced downward airflow)",
        "B": "Bernoulli's horizontal suction drag",
        "C": "Thermal atmospheric convection inversion",
        "D": "Centrifugal angular momentum dispersion"
      },
      "correctOption": "A",
      "explanation": "Drone multi-rotor configurations generate strong downward airflow (rotor downwash) that physically rustles the crop canopy, opening foliage layers and driving atomized chemical droplets to the undersides of leaves where insects and fungal pathogens often reside."
    },
    {
      "id": "AGR220-U4-MCQ38",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "difficulty": "Medium",
      "questionText": "What is the critical prerequisite for agricultural commodities to be traded transparently across states on the e-NAM platform?",
      "options": {
        "A": "Scientific assaying and quality grading parameters established at the mandi laboratory prior to online bidding",
        "B": "Mandatory organic certification by European agencies",
        "C": "Packaging inside vacuum-sealed aluminum containers",
        "D": "Direct delivery of the entire crop harvest to the Prime Minister's office"
      },
      "correctOption": "A",
      "explanation": "For buyers in distant states to bid confidently on e-NAM without physically inspecting the lot, mandis must conduct scientific quality assaying (moisture content, foreign matter, grain size, damaged kernels) and upload standardized assay certificates."
    },
    {
      "id": "AGR220-U4-MCQ39",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "difficulty": "Medium",
      "questionText": "What is Level-3 escalation in the operational hierarchy of the Kisan Call Center (KCC)?",
      "options": {
        "A": "Transferring complex or unanswered technical queries to designated Subject Matter Specialists (SMS) at State Agricultural Universities (SAUs) or ICAR institutes",
        "B": "Reporting the farmer to local police for asking difficult questions",
        "C": "Forwarding the call to international call centers in the United States",
        "D": "Automatically disconnecting the phone call and blocking the caller"
      },
      "correctOption": "A",
      "explanation": "KCC operates on a 3-tier structure: Level-1 (Call center agricultural graduate operators); Level-2 (Subject Matter Specialists at local KVKs/district level); Level-3 (High-level research scientists at State Agricultural Universities and ICAR institutes for unresolved complex queries)."
    },
    {
      "id": "AGR220-U4-MCQ40",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "difficulty": "Medium",
      "questionText": "What communication protocol is widely used for low-power, long-range wireless data transmission from in-field agricultural soil moisture and climate sensors?",
      "options": {
        "A": "LoRaWAN (Long Range Wide Area Network)",
        "B": "HDMI 2.1 cable",
        "C": "Bluetooth Low Energy limited to 5 meters",
        "D": "Dial-up telephone modem"
      },
      "correctOption": "A",
      "explanation": "LoRaWAN is a low-power, wide-area networking protocol that transmits telemetry packets from low-cost battery-operated farm sensors over distances of 10 to 15 kilometers, making it ideal for rural IoT farm networks."
    },
    {
      "id": "AGR220-U4-MCQ41",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Medium",
      "questionText": "What is the primary function of an active optical sensor like the 'Trimble GreenSeeker' in field nitrogen management?",
      "options": {
        "A": "It emits its own light (red and NIR LEDs) and measures canopy reflectance to determine In-Season Estimate of Yield (INSEY) and calculate real-time topdress nitrogen requirements",
        "B": "It sprays weedkiller directly on tree trunks",
        "C": "It measures tractor engine oil temperature",
        "D": "It detects buried metal pipes beneath the soil surface"
      },
      "correctOption": "A",
      "explanation": "Active optical sensors like GreenSeeker emit modulated red and NIR light, making them independent of ambient sunlight. By comparing canopy NDVI against an adjacent non-limiting 'nitrogen-rich strip', the algorithm determines exact real-time nitrogen topdressing rates."
    },
    {
      "id": "AGR220-U4-MCQ42",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Medium",
      "questionText": "In the context of the Government of India's 'Digital Agriculture Mission', what is 'AgriStack'?",
      "options": {
        "A": "A federated digital public infrastructure creating foundational digital registries, including farmer IDs, unified crop sown registries, and georeferenced farm plots",
        "B": "A physical warehouse for stacking 50 kg urea fertilizer sacks",
        "C": "A mobile video game simulating tractor pulling competitions",
        "D": "A database storing only tractor serial numbers"
      },
      "correctOption": "A",
      "explanation": "AgriStack is the foundational digital public infrastructure (DPI) for Indian agriculture. It integrates a Core Farmers Database (unique Farmer ID), Geo-referenced village parcel maps, and Digital Crop Surveys (Crop Sown Registry) to streamline subsidy delivery, credit, and crop insurance."
    },
    {
      "id": "AGR220-U4-MCQ43",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Medium",
      "questionText": "What is the spatial resolution of the visible and NIR bands (Bands 2, 3, 4, and 8) of the Sentinel-2 multispectral satellite?",
      "options": {
        "A": "10 meters",
        "B": "30 meters",
        "C": "250 meters",
        "D": "1 kilometer"
      },
      "correctOption": "A",
      "explanation": "Sentinel-2's core optical bands\u2014Band 2 (Blue), Band 3 (Green), Band 4 (Red), and Band 8 (Broad NIR)\u2014have a high spatial resolution of 10 meters per pixel, enabling individual field-scale vegetation analysis."
    },
    {
      "id": "AGR220-U4-MCQ44",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Medium",
      "questionText": "Under the Kisan Drone Scheme, what financial subsidy assistance was made available to Custom Hiring Centers (CHCs) and Farmer Producer Organizations (FPOs) for drone procurement?",
      "options": {
        "A": "Up to 40% to 50% subsidy (up to Rs. 4-5 lakhs) to CHCs, and up to 75% for FPOs",
        "B": "0% subsidy with high commercial interest rates",
        "C": "100% free distribution of personal drones to all 14 crore farmers",
        "D": "A 5% discount coupon on drone toy models"
      },
      "correctOption": "A",
      "explanation": "To make drone technology accessible to small and marginal farmers, the Ministry of Agriculture provided 40-50% financial assistance (up to Rs. 4-5 lakhs) to CHCs, up to 75% for FPOs, and 100% grant (up to Rs. 10 lakhs) to ICAR institutes and KVKs for field demonstrations."
    },
    {
      "id": "AGR220-U4-MCQ45",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "difficulty": "Medium",
      "questionText": "What role does Edge Computing play in smart agricultural sensor networks compared to traditional Cloud-only architectures?",
      "options": {
        "A": "It processes sensor telemetry and computer vision inference locally on the gateway device in the field, reducing cellular bandwidth consumption and enabling real-time actuator control during internet outages",
        "B": "It requires all raw sensor data to be sent across undersea cables before making decisions",
        "C": "It eliminates the need for computer processors entirely",
        "D": "It replaces electric batteries with manual hand cranks"
      },
      "correctOption": "A",
      "explanation": "Edge computing performs data preprocessing, AI inference (such as drone weed detection or smart irrigation trigger algorithms) locally on edge devices near the sensors, overcoming intermittent rural internet connectivity and latency."
    },
    {
      "id": "AGR220-U4-MCQ46",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Hard",
      "questionText": "At high leaf area index (LAI > 3.0), the standard NDVI index is widely known to suffer from 'saturation'. Which alternative vegetation index was developed to overcome this saturation effect by incorporating a blue band and canopy background adjustment factors?",
      "options": {
        "A": "Enhanced Vegetation Index (EVI)",
        "B": "Simple Ratio (SR)",
        "C": "Total Dissolved Solids (TDS)",
        "D": "Cation Exchange Capacity (CEC)"
      },
      "correctOption": "A",
      "explanation": "EVI = 2.5 * ((NIR - RED) / (NIR + 6*RED - 7.5*BLUE + 1)). The Enhanced Vegetation Index (EVI) incorporates the blue spectral band to correct for atmospheric aerosol scattering and includes canopy background adjustments (L), remaining sensitive to biomass variations in dense closed crop canopies where NDVI saturates."
    },
    {
      "id": "AGR220-U4-MCQ47",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Hard",
      "questionText": "What does the 'Red Edge' (680 to 740 nm) spectral region represent on a vegetation spectral reflectance curve, and why is it critical for early nitrogen stress detection?",
      "options": {
        "A": "It is the sharp transition zone between strong chlorophyll absorption in the red and strong leaf scattering in the NIR; shifts in this inflection point indicate subtle chlorophyll concentration drops before visual chlorosis occurs",
        "B": "It indicates the physical burning of leaf margins caused by potassium deficiency",
        "C": "It is the wavelength where water reflects 100% of incident light",
        "D": "It is an optical artifact caused by satellite camera lens flare"
      },
      "correctOption": "A",
      "explanation": "The red edge is the steep slope connecting visible red chlorophyll absorption to NIR scattering. Red Edge Position (REP) shifts toward shorter wavelengths ('blue shift') as leaf chlorophyll and nitrogen levels decline, enabling detection of physiological nutrient stress days before visible symptoms appear."
    },
    {
      "id": "AGR220-U4-MCQ48",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Hard",
      "questionText": "In geostatistical Kriging of soil test properties, what does the 'Nugget' variance in an experimental semivariogram represent?",
      "options": {
        "A": "Micro-scale spatial variability at distances smaller than the minimum sampling interval, combined with laboratory measurement errors",
        "B": "The total spatial variance of the field at infinite distance (Sill)",
        "C": "The physical presence of gold nuggets in the topsoil horizon",
        "D": "The maximum distance beyond which soil samples are completely uncorrelated"
      },
      "correctOption": "A",
      "explanation": "In a semivariogram gamma(h), the nugget effect is the intercept on the y-axis (variance at lag h = 0). It represents unresolved spatial variation at scales smaller than the sampling distance, combined with experimental sampling and chemical analytical testing errors."
    },
    {
      "id": "AGR220-U4-MCQ49",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Hard",
      "questionText": "What spatial operation would an agricultural GIS analyst execute to extract soil fertility raster values belonging strictly within the cadastral polygon boundary of a specific farmer's plot?",
      "options": {
        "A": "Zonal Statistics as Table or Clip Raster by Mask Layer",
        "B": "Network Shortest Path Analysis",
        "C": "Voronoi polygon centroid clustering",
        "D": "Raster hillshade rendering"
      },
      "correctOption": "A",
      "explanation": "Clipping a raster by a mask layer (or running Zonal Statistics) extracts the raster pixels bounded within the vector polygon, computing mean, standard deviation, and range of soil properties (e.g., pH, organic carbon) specific to that parcel."
    },
    {
      "id": "AGR220-U4-MCQ50",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Hard",
      "questionText": "What international open communication standard enables agricultural electronic control units (ECUs), tractor virtual terminals, and implements from different manufacturers to interoperate seamlessly?",
      "options": {
        "A": "ISOBUS (ISO 11783 standard)",
        "B": "USB 2.0 protocol",
        "C": "Bluetooth 5.0",
        "D": "HTTP/1.1 REST API"
      },
      "correctOption": "A",
      "explanation": "ISO 11783, commercially known as ISOBUS, defines the open tractor-implement communication standard based on the CAN bus protocol. It allows a single universal in-cab display (Virtual Terminal) to operate implements from any manufacturer with plug-and-play compatibility."
    },
    {
      "id": "AGR220-U4-MCQ51",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Hard",
      "questionText": "In combine harvester yield monitoring, what phenomenon causes a significant time delay (typically 8 to 15 seconds) between the moment a crop stem is cut at the cutterbar and when the grain is sensed at the clean grain elevator?",
      "options": {
        "A": "Grain transit lag (threshing, separation, and elevator transport transit time), which must be dynamically compensated during spatial yield map interpolation",
        "B": "GPS satellite signal transmission delay across the exosphere",
        "C": "Battery charge throttling in the yield monitor console",
        "D": "Engine cooling fan thermal cycling"
      },
      "correctOption": "A",
      "explanation": "Threshing, separating, and elevating grain takes 8 to 15 seconds. Without software lead-lag compensation matching grain mass flow readings back to the precise GPS position where the crop was actually cut, yield maps will suffer from severe spatial displacement errors."
    },
    {
      "id": "AGR220-U4-MCQ52",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Hard",
      "questionText": "What is the primary cause of off-target droplet drift during agricultural drone pesticide spraying when droplet Volume Median Diameter (VMD) falls below 100 microns?",
      "options": {
        "A": "Fine droplets have extremely low settling velocity and small mass, causing them to remain suspended in crosswinds and evaporate rapidly before reaching the target canopy",
        "B": "Fine droplets are heavier than air and plunge directly through the root zone",
        "C": "Fine droplets react chemically with drone carbon fiber propellers to create gas",
        "D": "Fine droplets cause electromagnetic interference with the flight controller"
      },
      "correctOption": "A",
      "explanation": "Droplets under 100 microns have minimal terminal settling velocity (<0.3 m/s) and a high surface-area-to-volume ratio, causing them to drift horizontally with ambient crosswinds and evaporate rapidly into the atmosphere before depositing on target foliage."
    },
    {
      "id": "AGR220-U4-MCQ53",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Hard",
      "questionText": "What is the function of Downwelling Light Sensors (DLS) or Sunshine Sensors mounted on the top of agricultural multispectral drone camera payloads?",
      "options": {
        "A": "Measuring real-time solar irradiance in each spectral band during flight to normalize and calibrate aerial reflectance values against passing cloud shadows",
        "B": "Recharging the drone's lithium polymer flight battery during flight",
        "C": "Transmitting live video to air traffic control towers",
        "D": "Measuring ambient atmospheric pressure to calculate altimeter altitude"
      },
      "correctOption": "A",
      "explanation": "Downwelling light sensors capture incoming sunlight intensity for each multispectral band during flight. This allows photogrammetry software (e.g., Pix4Dfields) to calibrate image reflectance radiometrically, ensuring consistent NDVI values even if cloud cover changes during the flight."
    },
    {
      "id": "AGR220-U4-MCQ54",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "difficulty": "Hard",
      "questionText": "In drone photogrammetry for orthomosaic generation, what is the recommended minimum Frontal (along-track) and Lateral (cross-track) image overlap required for reliable 3D point cloud stitching over uniform crop fields?",
      "options": {
        "A": "75% to 80% Frontal overlap and 65% to 75% Lateral overlap",
        "B": "10% Frontal overlap and 5% Lateral overlap",
        "C": "0% overlap to cover more ground area quickly",
        "D": "100% overlap with the drone hovering motionless at one point"
      },
      "correctOption": "A",
      "explanation": "Homogeneous crop canopies (such as dense wheat or paddy) lack distinct visual textures. High overlap (75-80% forward, 65-75% side) ensures feature-matching algorithms (SIFT/Structure-from-Motion) can identify enough common keypoints across multiple camera angles to reconstruct seamless orthomosaics."
    },
    {
      "id": "AGR220-U4-MCQ55",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "difficulty": "Hard",
      "questionText": "In digital commodity trading on e-NAM, what mechanism protects farmers from payment default by out-of-state buyers after commodity dispatch?",
      "options": {
        "A": "Escrow account settlement where the buyer's full purchase funds are locked and deposited with the clearing bank before the seller releases the delivery order",
        "B": "Post-dated personal paper checks written by the trader",
        "C": "Verbal promises recorded over telephone conversations",
        "D": "Handwritten promissory notes delivered by speed post"
      },
      "correctOption": "A",
      "explanation": "e-NAM utilizes automated e-settlement through an integrated clearing and settlement banking gateway. The buyer must deposit the full purchase amount into an escrow account upon winning the bid before an electronic gate pass and delivery order are issued to the seller."
    },
    {
      "id": "AGR220-U4-MCQ56",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "difficulty": "Hard",
      "questionText": "What does 'Soil Apparent Electrical Conductivity' (ECa), measured via electromagnetic induction (EMI) or direct contact coulters (Veris system), correlate with in precision soil zoning?",
      "options": {
        "A": "Soil texture (clay content), cation exchange capacity, topsoil depth, and moisture-holding capacity",
        "B": "Only the concentration of available nitrogen in the top 2 cm",
        "C": "The electrical charge of earthworms living in the subsoil",
        "D": "The radio signals emitted by underground fungal mycelia"
      },
      "correctOption": "A",
      "explanation": "Apparent soil electrical conductivity (ECa) is strongly influenced by soil texture (fine clay particles conduct electricity better than coarse sands), salinity, moisture content, and CEC. Rapid on-the-go ECa mapping is the gold standard for defining stable management zones."
    },
    {
      "id": "AGR220-U4-MCQ57",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "difficulty": "Hard",
      "questionText": "Which satellite remote sensing index specifically targets the shortwave infrared (SWIR) absorption features of liquid water to quantify crop canopy moisture stress?",
      "options": {
        "A": "Normalized Difference Water Index (NDWI) = (NIR - SWIR) / (NIR + SWIR)",
        "B": "NDVI = (NIR - RED) / (NIR + RED)",
        "C": "RGB Color Balance Ratio",
        "D": "Soil Organic Matter Index (SOMI)"
      },
      "correctOption": "A",
      "explanation": "NDWI (Gao, 1996) uses NIR and SWIR bands. Because liquid water in plant leaf tissue absorbs strongly in the Shortwave Infrared (1550-1750 nm) while NIR is reflected, NDWI directly tracks plant water content and canopy hydration stress."
    },
    {
      "id": "AGR220-U4-MCQ58",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "difficulty": "Hard",
      "questionText": "What is the primary difference between a Geographic Coordinate System (GCS) and a Projected Coordinate System (PCS, such as UTM) when performing quantitative agricultural area calculations in GIS?",
      "options": {
        "A": "GCS expresses coordinates in angular spherical units (degrees) which cannot compute accurate linear distances or metric areas, whereas PCS projects the ellipsoid onto a flat plane in metric units (meters), enabling true square meter and hectare calculations",
        "B": "GCS is used only in Europe; PCS is used only in Asia",
        "C": "GCS uses metric units while PCS uses imperial inches",
        "D": "GCS requires satellite connectivity while PCS runs offline"
      },
      "correctOption": "A",
      "explanation": "Geographic Coordinate Systems (e.g., WGS 84, EPSG:4326) model the Earth as a 3D sphere using angular degrees (latitude/longitude), where the physical length of a degree varies with latitude. Projected Coordinate Systems (e.g., UTM Zone 43N) flatten the surface onto a 2D plane in meters, allowing exact area and distance calculations."
    },
    {
      "id": "AGR220-U4-MCQ59",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "difficulty": "Hard",
      "questionText": "In agricultural sensor networks, what power management strategy allows wireless IoT sensor nodes powered by small solar panels to operate unattended for years in remote farm fields?",
      "options": {
        "A": "Deep-sleep cycling where the microcontroller enters ultra-low microamp power states for 98% of the time, waking up briefly to sample sensors and transmit LoRa radio packets",
        "B": "Running the wireless transmitter at maximum power continuously 24/7",
        "C": "Using nuclear micro-reactors installed inside the sensor case",
        "D": "Replacing batteries daily through manual labor"
      },
      "correctOption": "A",
      "explanation": "Field IoT nodes spend over 98-99% of their duty cycle in deep sleep mode (consuming <5 microamps). Every 15-30 minutes, an RTC timer wakes the MCU, reads analog sensor telemetry, transmits an encrypted LoRa packet in milliseconds, and immediately resumes deep sleep."
    },
    {
      "id": "AGR220-U4-MCQ60",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "difficulty": "Hard",
      "questionText": "Under the 'Digital Agriculture Mission 2024-2028' approved by the Union Cabinet of India with an outlay of Rs. 2,817 crore, what are the two core foundational digital public registries being established?",
      "options": {
        "A": "The Agristack Farmer Registry (unique Digital Farmer ID) and the Digital Crop Sown Registry (georeferenced plot-level crop survey)",
        "B": "The National Tractor Registration Database and Diesel Subsidy Roster",
        "C": "The Rural Consumer Credit Card Registry and Gold Loan Archive",
        "D": "The Private AgriTech Vendor Whitelist and Patent Registry"
      },
      "correctOption": "A",
      "explanation": "The Digital Agriculture Mission establishes: (1) Farmers' Registry with verified Digital Farmer IDs linked to land records, and (2) Digital Crop Sown Registry capturing georeferenced, seasonal plot-level crop surveys using mobile ground-truthing and AI satellite verification."
    }
  ],
  "subjectiveQuestions": [
    {
      "id": "AGR220-U4-SUB01",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "questionText": "Define Information and Communication Technology (ICT) in agriculture (e-Agriculture) and explain its core objectives in modern farming.",
      "contextScenario": "An introductory lecture on e-Agriculture frameworks for undergraduate students.",
      "modelAnswer": "Information and Communication Technology (ICT) in agriculture\u2014frequently termed e-Agriculture or Digital Agriculture\u2014refers to the conceptual framework, hardware, software, and communication networks dedicated to creating, storing, processing, analyzing, and disseminating agricultural data and scientific knowledge.\n\nCore Objectives of ICT in Modern Agriculture:\n\n1. Bridging Information Asymmetry:\nHistorically, smallholder farmers suffered from acute information deficits regarding real-time commodity prices, meteorological threats, and agronomic best practices. ICT platforms connect rural producers directly with market intelligence, eliminating manipulative intermediary margins.\n\n2. Optimizing Resource-Use Efficiency:\nDigital tools integrate spatial data, soil moisture metrics, and canopy health monitoring to deliver precise, site-specific recommendations for water, fertilizer, and crop protection chemicals, replacing wasteful uniform broadcast methods.\n\n3. Climate-Resilience and Risk Mitigation:\nAutomated weather monitoring and early-warning forecast advisories (e.g., rainfall forecasting, cyclone alerts, pest outbreak modeling) empower farming communities to execute timely protective interventions, shielding crops against climatic extremes.\n\n4. Enhancing Agricultural Extension Outreach:\nTraditional face-to-face extension struggles with severe manpower shortages (often one extension officer per 1,000+ farmers in India). Digital extension scales scientific expertise instantaneously to millions of farming households via mobile applications, SMS gateways, and interactive video channels.",
      "outlinePoints": [
        "Formal definition of ICT in agriculture (e-Agriculture)",
        "Bridging information asymmetry and market intelligence",
        "Optimizing input resource-use efficiency through precision",
        "Enhancing climate resilience and hazard risk mitigation",
        "Scaling agricultural extension beyond physical manpower limits"
      ]
    },
    {
      "id": "AGR220-U4-SUB02",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "questionText": "Summarize the key features and operational benefits of the 'Kisan Suvidha' and 'Meghdoot' mobile applications for Indian farmers.",
      "contextScenario": "A state agriculture department orientation program for Krishi Sakhis promoting digital mobile tools.",
      "modelAnswer": "The Government of India has deployed specialized mobile applications to empower farmers with timely, actionable field intelligence.\n\n1. Kisan Suvidha Mobile App:\n- Omnibus Single-Window Portal: Developed by the Ministry of Agriculture & Farmers Welfare, it integrates multiple farmer services into an intuitive, multi-lingual smartphone interface.\n- Five-Day Weather Forecast: Displays localized temperature, relative humidity, wind speed, and precipitation forecasts for the current day and the next four days.\n- Mandi Market Rates: Real-time price discovery from the nearest APMC mandis, tracking daily modal prices across commodities.\n- Input Dealer Directory: Geolocation mapping of authorized dealers for certified seeds, fertilizers, and plant protection chemicals.\n- Plant Protection Advisory: Diagnostic guidance on pests and diseases, recommended chemical dosages, and non-chemical cultural controls.\n\n2. Meghdoot Mobile App:\n- Scientific Collaboration: Jointly developed by the India Meteorological Department (IMD), Indian Institute of Tropical Meteorology (IITM), and the Indian Council of Agricultural Research (ICAR).\n- Agrometeorological Advisories: Issues contextual, crop-specific and livestock-specific farm advisories twice weekly (Tuesdays and Fridays) tied directly to upcoming local weather forecasts.\n- Vernacular Accessibility: Information is delivered in simple regional languages using infographic symbols and audio readouts, translating meteorological data into concrete agronomic actions (e.g., 'Delay wheat irrigation due to expected 25 mm convective rainfall on Thursday').",
      "outlinePoints": [
        "Kisan Suvidha: Omnibus portal, 5-day weather, mandi prices, dealer directory",
        "Plant protection diagnostics and authorized input tracking",
        "Meghdoot: Joint IMD-IITM-ICAR initiative for agro-met advisories",
        "Twice-weekly crop and livestock advisories in regional vernaculars",
        "Translating meteorological forecasts into actionable farm management decisions"
      ]
    },
    {
      "id": "AGR220-U4-SUB03",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "questionText": "Compare the spectral and operational characteristics of Sentinel-2 and Landsat-8/9 satellites for agricultural remote sensing.",
      "contextScenario": "An agricultural remote sensing researcher selecting an earth observation data source for regional crop yield modeling.",
      "modelAnswer": "Sentinel-2 (European Space Agency) and Landsat-8/9 (NASA/USGS) are the premier open-access optical satellite constellations used for agricultural monitoring worldwide.\n\n1. Spatial Resolution:\n- Sentinel-2: Delivers high spatial resolution of 10 meters for core visible (Blue, Green, Red) and broad Near-Infrared (Band 8) channels, 20 meters for Red Edge and SWIR bands, and 60 meters for atmospheric correction bands.\n- Landsat-8/9: Delivers 30-meter spatial resolution across optical/reflective bands, with a 15-meter panchromatic sharpening band and 100-meter thermal infrared (TIRS) data resampled to 30 meters.\n- Agronomic Impact: Sentinel-2's 10m pixels are vastly superior for mapping fragmented smallholder farm parcels (<1 hectare) common in India.\n\n2. Temporal Revisit Frequency:\n- Sentinel-2: The dual-satellite constellation (2A and 2B operating 180 degrees apart) achieves a rapid 5-day revisit cycle at the equator.\n- Landsat-8/9: A single Landsat satellite has a 16-day repeat cycle; combined Landsat-8 and Landsat-9 achieve an 8-day revisit interval.\n- Agronomic Impact: Sentinel-2 offers double the observation opportunities, critical for acquiring cloud-free scenes during the monsoon.\n\n3. Spectral Channels & Red Edge Bands:\n- Sentinel-2: Specifically engineered for vegetation science, featuring three dedicated narrow 'Red Edge' bands (Bands 5, 6, 7: 705 nm, 740 nm, 783 nm) that track leaf chlorophyll and nitrogen kinetics.\n- Landsat-8/9: Lacks dedicated red edge bands, but includes two dedicated Thermal Infrared sensors (TIRS Band 10 and 11) capable of monitoring land surface temperature and crop water stress.",
      "outlinePoints": [
        "Spatial resolution: Sentinel-2 (10m/20m) vs Landsat-8/9 (30m)",
        "Suitability for Indian smallholder fragmented parcel monitoring",
        "Temporal resolution: Sentinel-2 (5-day revisit) vs Landsat (8-day combined)",
        "Spectral capabilities: Sentinel-2 red-edge vegetation bands vs Landsat thermal sensors",
        "Summary of complimentary strengths in agricultural analytics"
      ]
    },
    {
      "id": "AGR220-U4-SUB04",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "questionText": "Explain the biological basis of the vegetation spectral reflectance curve and why NDVI effectively quantifies vegetative vigor.",
      "contextScenario": "Explaining satellite crop vegetation indices during a precision farming workshop.",
      "modelAnswer": "The spectral reflectance curve of green vegetation is governed by the optical properties of leaf biochemical pigments and cellular anatomical structures.\n\n1. Visible Spectrum Absorption (400 to 700 nm):\nIn the visible waveband, healthy green leaves reflect very little incident solar radiation (typically 5% to 15%). Chlorophyll a and Chlorophyll b absorb heavily in the blue (430-450 nm) and red (640-660 nm) wavelengths to drive photosynthetic light reactions. A minor reflectance peak in the green spectrum (~550 nm) gives leaves their characteristic green color.\n\n2. The Near-Infrared (NIR) Plateau (700 to 1300 nm):\nIn the NIR spectrum, healthy vegetation reflects 40% to 60% of incident radiation. This high reflectance is not driven by pigments, but by multiple internal refractions and scattering across the refractive index boundaries between hydrated spongy mesophyll cell walls and intercellular air spaces. Plants reflect NIR energy to avoid thermal damage.\n\n3. Why NDVI Quantifies Crop Vigor:\nNDVI is calculated as: NDVI = (NIR - RED) / (NIR + RED).\n- Vigorously Growing Crop: High chlorophyll content absorbs nearly all Red light (Red ~ 0.05), while dense multi-layered mesophyll cells scatter high NIR light (NIR ~ 0.55). This generates high positive NDVI values (0.70 to 0.85).\n- Stressed, Diseased, or Sparse Crop: Chlorophyll degradation increases Red reflectance, while mesophyll collapse decreases NIR reflectance. This causes NDVI to drop sharply (0.20 to 0.40).\n- Barren Soil / Water: Soil exhibits a steady upward linear reflectance slope (NDVI ~ 0.1 to 0.2), while water strongly absorbs NIR, producing negative NDVI values.",
      "outlinePoints": [
        "Visible spectrum: Chlorophyll a and b photon absorption in Red and Blue",
        "Near-Infrared (NIR) plateau: Spongy mesophyll scattering and cellular physics",
        "Mathematical mechanics of the NDVI ratio",
        "Contrasting spectral response of vigorous vs stressed vegetation",
        "Distinction from non-vegetative targets (bare soil and water)"
      ]
    },
    {
      "id": "AGR220-U4-SUB05",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "questionText": "Differentiate between Raster and Vector spatial data models in GIS, citing two agricultural use cases for each model.",
      "contextScenario": "Preparing GIS laboratory instructional notes for agricultural data modeling.",
      "modelAnswer": "Geographic Information Systems (GIS) represent real-world spatial phenomena through two contrasting computational data models: Vector and Raster.\n\n1. Vector Data Model:\n- Structure: Represents discrete geographic features using explicit geometric coordinate pairs (vertices).\n  * Points (single X, Y coordinate; e.g., tubewell location, soil sample point).\n  * Lines / Polylines (connected series of coordinate pairs; e.g., irrigation canal, drainage ditch).\n  * Polygons (closed loops enclosing area; e.g., field cadastral boundary, agro-climatic zone).\n- Agricultural Use Cases:\n  1. Farm Cadastral Parcel Mapping: Delineating legal boundary polygons of individual agricultural plots, storing ownership and land title attributes in relational attribute tables.\n  2. Irrigation Distribution Networks: Modeling pressurized pipe layouts and canal polylines to perform network flow and hydraulic pressure calculations.\n\n2. Raster Data Model:\n- Structure: Represents continuous geographic surfaces as a regular grid of rectangular cells (pixels) organized into rows and columns. Each cell holds a numerical attribute value representing the measured phenomenon across that area.\n- Agricultural Use Cases:\n  1. Satellite Vegetation Monitoring (NDVI): Gridded multi-spectral imagery where each pixel stores a calculated vegetation index value reflecting localized crop biomass.\n  2. Digital Elevation Models (DEM) and Topographic Wetness: Continuous elevation raster surfaces used to calculate slope steepness, flow accumulation, and watershed runoff risk.\n\nSummary Comparison:\nVector models provide high geometric precision for discrete boundaries and small file sizes. Raster models excel at analyzing spatially continuous, gradational environmental variables (soil texture, temperature, satellite reflectance) via mathematical map algebra.",
      "outlinePoints": [
        "Vector model architecture: Points, lines, and polygons with coordinate vertices",
        "Vector agricultural use cases: Cadastral parcel mapping and irrigation networks",
        "Raster model architecture: Uniform pixel grid matrix with continuous numerical values",
        "Raster agricultural use cases: Satellite NDVI vegetation grids and DEM topography",
        "Comparative strengths: Discrete boundary precision vs continuous surface analysis"
      ]
    },
    {
      "id": "AGR220-U4-SUB06",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping",
      "questionText": "Describe the complete step-by-step methodology for generating a thematic soil fertility map (available potassium) from GPS-tagged field soil samples using QGIS.",
      "contextScenario": "A district agricultural officer training laboratory technicians to develop digital soil health maps for farmers.",
      "modelAnswer": "Generating high-accuracy thematic soil fertility maps in QGIS involves a structured five-stage spatial analysis workflow:\n\nStage 1: Field Data Collection and Tabular Preparation:\n- Soil core samples are collected across the target area following a systematic grid (e.g., 50m x 50m) or stratified random design.\n- Each sampling location is tagged using a handheld GPS or smartphone receiver in WGS 84 (EPSG:4326), recording latitude and longitude.\n- Samples are analyzed in the laboratory for available potassium (K2O in kg/ha via flame photometry).\n- Data is compiled into a clean CSV spreadsheet with headers: Sample_ID, Longitude, Latitude, K_kgha.\n\nStage 2: Data Ingestion and Coordinate System Setup in QGIS:\n- Launch QGIS and set the Project Coordinate Reference System (CRS) to an appropriate metric projected system (e.g., WGS 84 / UTM Zone 43N, EPSG:32643) to enable accurate spatial distance calculations.\n- Ingest the point data via 'Layer -> Add Layer -> Add Delimited Text Layer'. Map X-field to Longitude and Y-field to Latitude, setting the layer geometry CRS to EPSG:4326, then export/save as a GeoPackage or Shapefile projected in UTM Zone 43N.\n\nStage 3: Spatial Interpolation (Surface Modeling):\n- Open the Processing Toolbox and select 'Interpolation -> Inverse Distance Weighting (IDW)' or 'Ordinary Kriging' (via SAGA GIS plugin).\n- Set the input vector layer to the soil points, selecting 'K_kgha' as the interpolation attribute.\n- Define the distance coefficient (p = 2.0 for standard IDW) and specify the output pixel resolution (e.g., 5 meters).\n- Execute the tool to produce a continuous floating-point raster surface predicting potassium concentration across every pixel.\n\nStage 4: Masking and Clipping to Farm Boundary:\n- Ingest the vector boundary polygon of the farm or village.\n- Use 'Raster -> Extraction -> Clip Raster by Mask Layer' to clip the interpolated raster strictly to the boundary polygon, eliminating un-sampled edge artifacts.\n\nStage 5: Thematic Cartographic Symbology and Layout:\n- Access Layer Properties -> Symbology, changing render type to 'Singleband pseudocolor'.\n- Classify the continuous raster into standard agronomic rating tiers according to Soil Health Card guidelines:\n  * Low (< 144 kg/ha): Red\n  * Medium (144 - 336 kg/ha): Yellow\n  * High (> 336 kg/ha): Green\n- Open Print Layout to generate the final publication map, adding standard cartographic elements: North arrow, metric scale bar, legend with agronomic dosage recommendations, title, and institutional metadata.",
      "outlinePoints": [
        "Stage 1: GPS field sampling, chemical testing, and CSV tabular structuring",
        "Stage 2: Ingestion in QGIS and reprojecting to metric UTM coordinate system",
        "Stage 3: Spatial interpolation using Inverse Distance Weighting (IDW) or Kriging",
        "Stage 4: Clipping interpolated raster against vector farm boundary mask",
        "Stage 5: Agronomic color ramp symbology (Low/Med/High) and cartographic layout composition"
      ]
    },
    {
      "id": "AGR220-U4-SUB07",
      "questionType": "DEFINITION",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "questionText": "Define Real-Time Kinematic (RTK) positioning and explain why it is essential for automated tractor steering in precision agriculture.",
      "contextScenario": "A farm mechanization seminar comparing GNSS guidance technologies.",
      "modelAnswer": "Real-Time Kinematic (RTK) positioning is an advanced satellite navigation technique that utilizes carrier-phase measurements of Global Navigation Satellite System (GNSS) signals, combined with real-time differential corrections transmitted from a fixed reference base station, to provide centimeter-level positional accuracy.\n\nWhy RTK is Essential for Precision Automated Tractor Guidance:\n\n1. Overcoming Atmospheric Signal Degradation:\nStandard autonomous GPS calculates positions using coarse pseudorange satellite codes, which are degraded by ionospheric refractions, tropospheric delays, and orbital clock errors, resulting in positional drifts of 2 to 5 meters. RTK resolves the integer phase ambiguity of the carrier wave (at gigahertz frequencies), calculating positional vectors with extreme precision.\n\n2. Centimeter-Level Pass-to-Pass Accuracy (1 to 2.5 cm):\nIn field operations like strip-tillage, bed-shaping, inter-row mechanical weeding, and precision seed drilling, tractors must travel in exact parallel passes. RTK autosteer systems steer the tractor along programmed A-B navigation lines with less than 2.5 cm of error, eliminating swath overlap and unplanted gaps.\n\n3. Repeatability Across Seasons:\nRTK provides permanent absolute spatial repeatability. A farmer can establish permanent wheel traffic lanes (Controlled Traffic Farming - CTF), inject liquid fertilizer in narrow bands, and return months later with a seed drill to deposit seeds exactly 5 cm adjacent to the fertilizer band without disturbing root zones.",
      "outlinePoints": [
        "Technical definition of RTK carrier-phase GNSS positioning",
        "Mechanism of base station differential correction transmission",
        "Overcoming ionospheric and tropospheric satellite signal drift",
        "Achieving 1 to 2.5 cm pass-to-pass guidance accuracy",
        "Enabling seasonal repeatability and Controlled Traffic Farming (CTF)"
      ]
    },
    {
      "id": "AGR220-U4-SUB08",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "questionText": "Explain the operational mechanics and working principles of an impact-plate grain yield monitor on a combine harvester.",
      "contextScenario": "Explaining precision harvesting instrumentation during an agricultural engineering class.",
      "modelAnswer": "An impact-plate grain yield monitor is an electromechanical sensor system mounted inside a combine harvester that continuously measures mass flow rate of clean grain as the crop is harvested.\n\n1. Mechanical Sensing Mechanism:\nClean, threshed grain is elevated from the combine's cleaning shoe to the grain tank by the clean grain elevator paddles. At the discharge top of the elevator, the grain is propelled violently against a curved, wear-resistant stainless steel impact plate suspended on a sensitive strain-gauge load cell.\n\n2. Force-Mass Conversion:\nAccording to Newton's Second Law of Motion (Force = rate of change of momentum), the force exerted on the impact plate is directly proportional to the mass flow rate of the incoming grain stream. The strain gauge produces an analog millivolt signal corresponding to plate deflection, which an electronic control unit (ECU) converts into instantaneous grain mass (kilograms per second).\n\n3. Moisture Correction and Spatial Logging:\nSimultaneously, a capacitive moisture sensor installed in the elevator bypass chute measures grain moisture content in real time. Because grain yield is legally traded at standardized base moisture (e.g., 14% for wheat, 15% for maize), the computer dynamically corrects wet grain weight to dry standardized mass.\n\n4. Spatial Yield Mapping:\nBy combining the moisture-corrected mass flow with the combine's forward ground speed (radar/GNSS), effective cutterbar width, and GPS coordinates, the system calculates instantaneous yield in metric tonnes per hectare (t/ha), generating georeferenced spatial yield maps.",
      "outlinePoints": [
        "Location at top of clean grain elevator discharge",
        "Newtonian force conversion on strain-gauge impact load cell",
        "Dynamic moisture correction via capacitive moisture sensor",
        "Integration with GPS coordinates, forward speed, and header width",
        "Generation of spatial field yield variation maps"
      ]
    },
    {
      "id": "AGR220-U4-SUB09",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "questionText": "Compare Map-Based Variable Rate Application (VRA) with Sensor-Based Variable Rate Application across workflow, equipment requirements, latency, and adaptability.",
      "contextScenario": "Advising a corporate farm management company on choosing between map-based and on-the-go sensor-based fertilizer application systems.",
      "modelAnswer": "Variable Rate Application (VRA) modulates agrochemical input rates across field zones using either pre-computed prescription maps or real-time canopy sensors.\n\n1. Workflow & Operational Pipeline:\n- Map-Based VRA: Requires a multi-step pre-field workflow. The agronomist collects historical data (soil grid testing, yield maps, satellite NDVI), uses GIS software to delineate management zones, calculates chemical rates, exports an ISO-XML prescription file, and loads it into the tractor console via USB or cloud sync.\n- Sensor-Based VRA: Operates on-the-go in real time. Active optical sensors (e.g., GreenSeeker, Crop Circle) mounted directly on the tractor boom scan the crop canopy as the machine drives through the field, instantly calculating and injecting the required chemical dose without prior mapping.\n\n2. Hardware & Instrumentation Requirements:\n- Map-Based VRA: Requires a GNSS/GPS receiver on the tractor, a compatible terminal controller running VRA software, and rate-control implement valves.\n- Sensor-Based VRA: Requires specialized active optical light-emitting sensor heads, boom mounting brackets, and real-time processing controllers. A GPS receiver is optional (used for logging as-applied data rather than controlling rate).\n\n3. Latency & Responsiveness:\n- Map-Based VRA: Zero algorithmic delay during application because rates are pre-determined based on GPS location.\n- Sensor-Based VRA: Millisecond computational latency between sensor light detection, algorithmic rate calculation, and hydraulic/solenoid valve actuation.\n\n4. Dynamic Adaptability to Unexpected In-Season Conditions:\n- Map-Based VRA: Inflexible to sudden micro-environmental changes that occurred after the map was generated (e.g., localized hail damage, pest emergence).\n- Sensor-Based VRA: Highly adaptive, detecting real-time canopy chlorosis and biological biomass vigor directly under current field conditions.",
      "outlinePoints": [
        "Workflow comparison: Pre-field GIS prescription mapping vs On-the-go optical scanning",
        "Hardware requirements: GPS-terminal focus vs Active optical sensor heads",
        "System latency: Pre-computed coordinate lookups vs Real-time sensor-actuator loops",
        "Dynamic adaptability to sudden environmental and pest variations",
        "Agronomic suitability and practical limitations of each approach"
      ]
    },
    {
      "id": "AGR220-U4-SUB10",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "questionText": "Examine the technical and operational guidelines for agricultural drone pesticide spraying in India, including DGCA flight compliance, droplet physics, and safety protocols.",
      "contextScenario": "A master trainer preparing a standard operating procedure (SOP) manual for certified drone service operators.",
      "modelAnswer": "Agricultural spraying drones (Kisan Drones) represent a transformative advance in chemical application, governed by strict operational guidelines issued by the Ministry of Agriculture and DGCA.\n\n1. Regulatory Compliance (DGCA & CIB&RC):\n- Pilot Certification: Drone pilots must hold a valid Remote Pilot Certificate (RPC) issued by a DGCA-authorized Remote Pilot Training Organization (RPTO).\n- Airspace Permissions: Operations must adhere to the Digital Sky interactive airspace map. Green Zones allow flights up to 400 ft AGL without air traffic clearance; Yellow and Red zones require prior military/ATC clearances.\n- Approved Agrochemicals: Only pesticides formally approved by the Central Insecticides Board & Registration Committee (CIB&RC) for drone application can be sprayed, adhering strictly to recommended concentrations.\n\n2. Spraying Physics & Droplet Dynamics:\n- Ultra-Low Volume (ULV) Application: Drones apply high-concentration mixtures in carrier water volumes of 8 to 15 liters per hectare, compared to 400-500 L/ha for manual knapsack sprayers.\n- Controlled Droplet Application (CDA): Utilizing rotary centrifugal atomizer nozzles operating at regulated RPM produces an optimal droplet spectrum of 100 to 150 microns (Volume Median Diameter). Droplets <100 microns drift excessively in wind; droplets >250 microns run off leaf surfaces.\n- Propeller Downwash Utilization: The downward turbulent airflow generated by multi-rotor propellers rustles crop foliage, opening the canopy and forcing droplets onto lower stems and the undersides of leaves.\n\n3. Pre-Flight, Operational, and Environmental Safety Protocols:\n- Wind Speed Limits: Spraying must halt when ambient wind velocity exceeds 10 km/h (3 m/s) to prevent off-target chemical drift onto adjacent water bodies or residential settlements.\n- Flight Height and Speed: Drones must maintain a steady radar-guided altitude of 1.5 to 2.5 meters above the crop canopy at a forward ground speed of 3 to 5 m/s.\n- Personal Protective Equipment (PPE): Ground crew must wear nitrile gloves, protective respirators, and eye goggles during chemical mixing and drone battery hot-swaps.",
      "outlinePoints": [
        "Regulatory compliance: DGCA Remote Pilot Certificates and CIB&RC approved pesticides",
        "Digital Sky airspace compliance (Green vs Yellow/Red zones)",
        "Droplet physics: ULV carrier volumes (8-15 L/ha) and CDA droplet optimization (100-150 microns)",
        "Aerodynamic exploitation of multi-rotor propeller downwash",
        "Environmental thresholds (wind < 10 km/h, buffer zones) and PPE safety protocols"
      ]
    },
    {
      "id": "AGR220-U4-SUB11",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying",
      "questionText": "Explain the significance of the 'Digital Sky Platform' and the classification of airspace zones for agricultural drone operations in India.",
      "contextScenario": "A training session on aviation rules for newly licensed drone pilots in agriculture.",
      "modelAnswer": "The Digital Sky Platform is an advanced, automated online unmanned traffic management (UTM) system developed by the Directorate General of Civil Aviation (DGCA) to regulate drone activities across India.\n\n1. Purpose and Digital Infrastructure:\nDigital Sky serves as the centralized digital interface for registering drones, issuing Unique Identification Numbers (UIN), uploading Remote Pilot Certificates (RPC), and delineating dynamic national airspace classifications.\n\n2. Three Airspace Zone Classifications:\n\n- Green Zone:\n  * Definition: Airspace up to 400 feet (120 meters) above ground level that is not designated as a yellow or red zone, and airspace up to 200 feet above the area located between 8 km and 12 km from an operational airport perimeter.\n  * Drone Permission: No prior flight approval or operational permission is required for operating drones in green zones. Agricultural drone operators can conduct spraying and multispectral flights freely within these zones.\n\n- Yellow Zone:\n  * Definition: Controlled airspace encompassing areas within 8 to 12 km of an operational airport, and airspace above 400 feet in green zones.\n  * Drone Permission: Operations require prior clearance and flight plans submitted through Digital Sky to the concerned Air Traffic Control (ATC) authority.\n\n- Red Zone:\n  * Definition: Strictly prohibited 'no-fly' zones, including international borders, military installations, strategic government buildings, and atomic energy stations.\n  * Drone Permission: Drone flights are strictly banned except under exceptional clearance from the Central Government.",
      "outlinePoints": [
        "Digital Sky platform: DGCA's automated UTM regulatory portal",
        "Core functions: UIN registration, RPC management, and airspace maps",
        "Green Zone: Free flight up to 400 ft AGL for agricultural missions",
        "Yellow Zone: Controlled airspace requiring formal ATC flight plan clearance",
        "Red Zone: Prohibited national security zones with strict flight bans"
      ]
    },
    {
      "id": "AGR220-U4-SUB12",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "questionText": "Analyze the operational architecture of e-NAM (National Agriculture Market) and discuss how it addresses the structural deficiencies of traditional APMC mandis.",
      "contextScenario": "A policy debate on agricultural marketing reforms and digital trade infrastructure.",
      "modelAnswer": "The National Agriculture Market (e-NAM) is a pan-India electronic trading portal launched in April 2016 to network existing Agricultural Produce Market Committee (APMC) mandis into a unified, transparent national market.\n\n1. Structural Deficiencies of Traditional APMC Mandis:\n- Geographical Fragmentation: Agricultural marketing was fragmented across thousands of independent APMC mandis, each operating under localized regulations with non-standardized fees.\n- Collusion and Trader Cartels: In physical auction yards, local licensed commission agents and traders formed cartels, suppressing competitive bidding and forcing farmers into distress sales.\n- Arbitrary Deductions and High Commission Fees: Farmers suffered arbitrary physical deductions ('karda') for moisture or foreign matter, alongside high commission agent cuts.\n- Lack of Scientific Quality Grading: Price was dictated by visual inspection, with traders routinely discounting premium quality produce.\n\n2. Operational Architecture of e-NAM:\n- Gate Entry & Electronic Lot Creation: Produce entering the mandi is weighed electronically, and a lot ID with RFID/barcode tagging is generated.\n- Scientific Assaying & Quality Certification: Mandi quality testing laboratories analyze moisture content, foreign matter, grain damage, and purity, uploading an official digital assay certificate linked to the lot ID.\n- Electronic Bidding (e-Bidding): Traders from across India log into the portal and submit anonymous, competitive bids based on verified assay parameters, eliminating local cartel collusion.\n- Transparent Price Discovery: The platform displays highest bids transparently, giving the farmer full autonomy to accept or decline the final auction price.\n- Online Settlement & Direct Farmer Transfer: Upon bid acceptance, buyers transfer funds into an escrow account. Payments are deposited directly into the farmer's bank account via DBT/PFMS, completely bypassing commission agent deductions.\n- Electronic Gate Pass: Once payments clear, an automated e-gate pass is issued for commodity dispatch.",
      "outlinePoints": [
        "Structural deficiencies of traditional APMCs: Cartelization, fragmentation, arbitrary cuts",
        "e-NAM operational pipeline: Gate entry and electronic lot generation",
        "Scientific laboratory assaying and digital quality certification",
        "Pan-India anonymous electronic bidding breaking trader collusions",
        "Escrow account settlement, DBT farmer payments, and e-gate pass dispatch"
      ]
    },
    {
      "id": "AGR220-U4-SUB13",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "questionText": "Describe the three-tier organizational structure and operational workflow of the Kisan Call Center (KCC) scheme in India.",
      "contextScenario": "A training session for agricultural extension officers on national advisory helpline systems.",
      "modelAnswer": "Launched in January 2004 by the Ministry of Agriculture, the Kisan Call Center (KCC) delivers nationwide agricultural extension advisory services through toll-free telephonic connectivity (1800-180-1551).\n\nThree-Tier Operational Architecture:\n\n1. Level-1: First-Line Contact Center Operators:\n- Staffing: Manned by agricultural graduates and postgraduates fluent in local state vernaculars.\n- Workflow: Receive incoming farmer calls directly. Operators use a comprehensive Knowledge Management System (KMS) database to answer common queries regarding crop cultivation practices, fertilizer schedules, mandi prices, and weather forecasts in real time.\n- Resolution Target: Aim to resolve over 85% to 90% of routine technical queries instantly on call.\n\n2. Level-2: Subject Matter Specialists (SMS):\n- Staffing: Located at State Agricultural Universities (SAUs), ICAR institutes, and district Krishi Vigyan Kendras (KVKs).\n- Workflow: If a Level-1 operator cannot resolve a complex query (e.g., obscure crop disease symptoms, rare physiological disorders), the call is escalated via conference call or a prioritized callback ticket to a Level-2 Subject Matter Specialist.\n\n3. Level-3: High-Level Research Specialists & Management:\n- Staffing: Senior research scientists, Directorate of Extension heads, and state agricultural nodal officers.\n- Workflow: Handles unresolved policy, quarantine, or unprecedented epidemic issues. Answers are formulated through laboratory diagnostics or field visits, with the final advisory communicated back to the farmer via SMS, phone call, or personal outreach.",
      "outlinePoints": [
        "Toll-free infrastructure: 1800-180-1551 operating 365 days in 22 languages",
        "Level-1: Agricultural graduate operators handling routine queries via KMS",
        "Level-2: Subject Matter Specialists at KVKs and SAUs for complex technical issues",
        "Level-3: Nodal scientists and research directors for unprecedented epidemic queries",
        "Escalation tracking, ticket generation, and quality feedback loops"
      ]
    },
    {
      "id": "AGR220-U4-SUB14",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "questionText": "Explain how computer vision and Convolutional Neural Networks (CNNs) in mobile applications like 'Plantix' diagnose crop diseases, and identify three practical limitations in field conditions.",
      "contextScenario": "An AgriTech startup developing AI-based leaf disease diagnosis algorithms for smallholder farmers.",
      "modelAnswer": "Mobile applications like Plantix leverage deep learning computer vision architectures to deliver instantaneous plant pathology diagnostics from smartphone cameras.\n\n1. Technical Pipeline of CNN-Based Disease Diagnosis:\n- Image Acquisition & Pre-processing: The farmer captures a photo of an affected plant leaf or stem. The application normalizes image resolution, corrects exposure variations, and centers the region of interest.\n- Feature Extraction via Convolutional Layers: Deep Convolutional Neural Networks (such as ResNet, MobileNet, or EfficientNet) pass mathematical filter kernels across the image grid to detect hierarchical features: edge boundaries, lesion shapes, necrotic margins, chlorotic halos, and textural pustule patterns.\n- Classification & Probability Distribution: The output dense layer calculates a softmax probability distribution across hundreds of known disease and nutrient deficiency classes, returning the top diagnostic match with a confidence score (e.g., 'Tomato Early Blight - 96% match').\n- Prescriptive Recommendation: The app automatically displays approved integrated pest management (IPM) controls, chemical active ingredients, and cultural treatments.\n\n2. Three Practical Limitations in Field Conditions:\n\n- Mixed Infections and Complex Co-Morbidities:\nField crops rarely experience isolated textbook infections. Simultaneous nitrogen deficiency, spider mite feeding, and fungal leaf spot on the same leaf confuse CNN classifiers, leading to inaccurate diagnostic outputs.\n\n- Environmental Lighting and Glare Artifacts:\nDirect noon sunlight, extreme shadows, camera motion blur, or wet leaf reflections alter pixel color channels, causing false-positive classifications.\n\n- Look-Alike Visual Symptoms (Symptomatic Mimicry):\nDifferent pathogens can produce virtually identical visual symptoms (e.g., bacterial wilt vs fungal Fusarium wilt, or zinc deficiency vs iron chlorosis in early stages), which cannot be differentiated from surface optical photography without laboratory culturing or microscopic examination.",
      "outlinePoints": [
        "CNN pipeline: Image capture, convolutional feature filtering, and classification layers",
        "Pattern recognition of chlorotic halos, necrotic lesions, and fungal pustules",
        "Prescriptive IPM and active ingredient recommendations",
        "Limitation 1: Co-morbidities and overlapping biological stresses",
        "Limitation 2: Uncontrolled field lighting, shadows, and camera blur",
        "Limitation 3: Symptomatic mimicry between unrelated fungal and bacterial pathogens"
      ]
    },
    {
      "id": "AGR220-U4-SUB15",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "questionText": "Explain the architectural components of an Internet of Things (IoT) precision irrigation system.",
      "contextScenario": "Designing an automated solar-powered smart drip irrigation system for an orchard.",
      "modelAnswer": "An Internet of Things (IoT) precision irrigation network automates water delivery based on real-time soil and microclimate telemetry, consisting of four core architectural layers:\n\n1. Sensing & Perception Layer (In-Field Telemetry):\n- Soil Moisture Sensors: Capacitive or Time-Domain Reflectometry (TDR) probes installed at multiple root depths (e.g., 15 cm and 45 cm) to track volumetric water content.\n- Environmental Sensor Nodes: Compact weather stations measuring ambient air temperature, relative humidity, solar irradiance, and wind speed to calculate crop evapotranspiration (ETc).\n\n2. Network & Communication Layer:\n- Low-power wireless transceiver nodes collect sensor telemetry and transmit data over LoRaWAN (Long Range Wide Area Network) or cellular NB-IoT (Narrowband IoT) protocols to a central farm gateway over distances of up to 10 kilometers with minimal battery consumption.\n\n3. Cloud Analytics & Decision-Support Layer:\n- Telemetry is routed via the gateway to cloud servers running automated irrigation logic.\n- When soil moisture drops below the Maximum Allowable Depletion (MAD) threshold (e.g., 50% available water capacity), the decision algorithm calculates the precise irrigation runtime required to replenish the root zone to field capacity.\n\n4. Actuation & Execution Layer:\n- The cloud server transmits an execution command back to the field gateway, triggering a 12V latching solenoid valve on the drip irrigation mainline via a smart relay. The valve opens, delivering water, and automatically shuts off once target soil moisture is restored.",
      "outlinePoints": [
        "Perception layer: Capacitive soil moisture sensors and microclimate weather stations",
        "Network layer: LoRaWAN and cellular NB-IoT long-range, low-power telemetry",
        "Cloud analytics layer: Real-time evapotranspiration modeling and MAD thresholds",
        "Actuation layer: Cloud-triggered solenoid valves and automated drip execution",
        "Water conservation and yield optimization benefits"
      ]
    },
    {
      "id": "AGR220-U4-SUB16",
      "questionType": "CASE_STUDY",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors",
      "questionText": "Case Study: A 50-hectare wheat farm in Punjab exhibits high intra-field yield variability (ranging from 2.5 t/ha to 6.2 t/ha) under uniform urea application. Propose a precision nutrient management plan utilizing satellite NDVI, electrical conductivity mapping, and variable rate fertilization.",
      "contextScenario": "A precision agronomy consultancy assisting a commercial farm to eliminate nitrogen waste and balance crop yields.",
      "modelAnswer": "Background:\nA 50-hectare wheat farm exhibits severe yield disparity (2.5 to 6.2 t/ha) under uniform blanket urea broadcasting (150 kg N/ha). Poor-yielding zones suffer from nitrogen leaching in sandy patches and lodging in high-fertility clay pockets.\n\nStep 1: Baseline Delineation of Soil Management Zones:\n- Conduct an Apparent Soil Electrical Conductivity (ECa) survey across the 50 hectares using an electromagnetic induction sensor (e.g., EM38 or Veris rig) to map spatial soil texture boundaries.\n- Collect stratified soil core samples based on ECa clusters (analyzing organic carbon, available N-P-K, pH, and texture).\n- Ingest ECa rasters and soil test values into QGIS, delineating three distinct Management Zones (Zone A: High clay/organic matter; Zone B: Medium loam; Zone C: Coarse sandy loam prone to leaching).\n\nStep 2: In-Season Satellite and Active Optical Monitoring:\n- Track wheat vegetative growth at tillering and crown root initiation using 10m Sentinel-2 NDVI and NDRE (Red Edge) imagery to assess vegetative nitrogen uptake.\n- Deploy a tractor-mounted active optical sensor (GreenSeeker) to measure real-time Normalized Difference Red Edge index across the field prior to second irrigation.\n\nStep 3: Formulating the Variable-Rate Prescription Map:\n- Integrate soil zone capacity with GreenSeeker canopy vigor to generate an ISO-XML Variable Rate prescription map:\n  * Zone A (Vigorous Canopy): Reduce topdress urea by 25% (preventing lodging and luxury nitrogen consumption).\n  * Zone B (Average Canopy): Maintain standard STCR-recommended urea dose.\n  * Zone C (Weak/Leaching-Prone): Split urea into multiple small doses (reducing single-event leaching) combined with slow-release neem-coated urea.\n\nStep 4: Field Execution and Economic Outcome:\n- The prescription map is loaded into an ISOBUS-compatible tractor terminal coupled to a pneumatic spinner spreader with variable-speed hydraulic belts.\n- Projected Outcomes: Eliminates nitrogen lodging in Zone A, boosts grain filling in Zone C, reduces overall urea consumption by 18%, and narrows yield variance from 2.5-6.2 t/ha to a uniform 5.0-6.4 t/ha.",
      "outlinePoints": [
        "Baseline soil spatial zoning via Apparent Electrical Conductivity (ECa) mapping",
        "Stratified grid soil testing and management zone clustering in QGIS",
        "In-season crop nitrogen tracking using Sentinel-2 and active optical canopy sensors",
        "Formulation of ISO-XML Variable Rate prescription map tailored to zone capacities",
        "ISOBUS applicator execution delivering 18% fertilizer savings and uniform yields"
      ]
    },
    {
      "id": "AGR220-U4-SUB17",
      "questionType": "SHORT_ANSWER",
      "maxMarks": 5,
      "difficulty": "Easy",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix",
      "questionText": "Explain the life-saving role of the 'Damini' mobile application for rural agricultural laborers.",
      "contextScenario": "A disaster management training workshop for rural panchayat leaders.",
      "modelAnswer": "The Damini mobile application is an innovative disaster risk-reduction mobile tool developed by the Indian Institute of Tropical Meteorology (IITM, Pune) under the Ministry of Earth Sciences.\n\n1. The Problem of Lightning Fatalities in Agriculture:\nLightning strikes are one of the leading causes of natural disaster fatalities in rural India, claiming over 2,000 lives annually. Agricultural laborers, tractor operators, and livestock grazers working in open fields are exceptionally vulnerable because they lack immediate shelter during sudden convective thunderstorms.\n\n2. Technical Working Mechanism:\n- IITM established a nationwide Lightning Location Network (LLN) comprising sensitive ground-based lightning detection sensors that capture radio frequency electromagnetic pulses emitted by cloud-to-cloud and cloud-to-ground lightning discharges.\n- Telemetry data is processed by central servers to predict the trajectory and initiation of lightning storms.\n- The Damini mobile app utilizes the smartphone's GPS coordinates to monitor local thunderstorm dynamics.\n\n3. Warning Alerts and Precautionary Actions:\n- When a lightning cloud moves toward the user, Damini emits an audible siren alert and pushes notification warnings 30 to 45 minutes prior to strike arrival, covering a danger radius of 20 to 30 kilometers.\n- The app provides life-saving guidance: immediately move away from open fields, avoid standing under tall isolated trees, step down from metal tractors, and adopt the 'lightning crouch' position if trapped in the open.",
      "outlinePoints": [
        "The rural crisis of lightning fatalities among open-field farm workers",
        "IITM Pune's ground-based Lightning Location Network (LLN)",
        "Automated GPS-based predictive alerts issued 30 to 45 minutes in advance",
        "Warning radius coverage of 20 to 30 km",
        "Actionable rural emergency safety protocols (avoiding trees, abandoning tractors)"
      ]
    },
    {
      "id": "AGR220-U4-SUB18",
      "questionType": "COMPARISON",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat",
      "questionText": "Compare Optical Remote Sensing with Microwave Synthetic Aperture Radar (SAR) Remote Sensing for crop monitoring during the Indian kharif (monsoon) season.",
      "contextScenario": "An agricultural insurance agency evaluating remote sensing sensors for Kharif crop damage assessment under PMFBY.",
      "modelAnswer": "Monitoring agricultural crops during the Indian Kharif season (June to October) presents unique environmental hurdles, making sensor selection vital.\n\n1. Atmospheric and Cloud Penetration:\n- Optical Remote Sensing (e.g., Sentinel-2, Landsat-8):\n  Relies on reflected solar radiation in visible, NIR, and SWIR bands (0.4 to 2.5 microns). Optical wavelengths cannot penetrate atmospheric cloud decks, rain, or thick monsoon haze. During peak kharif months, optical imagery is frequently 90-100% cloud-covered, causing critical data gaps during crop growth stages.\n- Microwave SAR Remote Sensing (e.g., Sentinel-1, RISAT-1A):\n  Operates at active microwave frequencies (C-band ~ 5.4 GHz, wavelength ~ 5.6 cm). Microwave pulses easily penetrate monsoonal cloud cover, rain cells, and fog, providing guaranteed all-weather, day-and-night imaging capability throughout the entire monsoon.\n\n2. Sensing Physical Phenomenon:\n- Optical Sensing: Measures biochemical and pigment properties\u2014chlorophyll absorption in red, cellular scattering in NIR, and liquid water absorption in SWIR.\n- Microwave SAR: Measures structural geometry, surface roughness, dielectric permittivity, and volumetric canopy scattering.\n\n3. Application to Specific Kharif Crops:\n- Paddy Rice Mapping: SAR is uniquely suited for kharif rice mapping. In early season, flooded puddling fields act as specular reflectors, bouncing microwave pulses away and producing very low backscatter (dark pixels). As rice grows, vertical stems cause strong double-bounce and volume scattering, providing a unmistakable temporal signature even under total cloud cover.\n- Optical sensors remain superior for fine-scale nutrient deficiency and chlorosis detection, but only when cloud-free windows occur.",
      "outlinePoints": [
        "Cloud penetration: Optical sensor failure under monsoon clouds vs SAR 100% all-weather penetration",
        "Physical sensing mechanism: Biochemical pigment absorption vs Geometric structural backscattering",
        "Day-and-night operational independence of active microwave pulses",
        "Unique suitability of SAR backscatter for flooded paddy rice phenology mapping",
        "Complementary integration under hybrid crop insurance monitoring models"
      ]
    },
    {
      "id": "AGR220-U4-SUB19",
      "questionType": "APPLICATION",
      "maxMarks": 5,
      "difficulty": "Medium",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks",
      "questionText": "Formulate a digital communication strategy for a Krishi Vigyan Kendra (KVK) to disseminate urgent locust or pest swarm warnings to 20,000 farmers in a district within two hours.",
      "contextScenario": "A district emergency task force responding to a fast-moving desert locust swarm approaching agricultural borders.",
      "modelAnswer": "When a catastrophic biosecurity threat like a desert locust swarm or fall armyworm outbreak threatens a district, a multi-channel digital rapid response strategy is essential to reach 20,000 farming households within two hours.\n\n1. Immediate Multi-Channel Broadcast (Hour 0:00 - 0:30):\n- Bulk SMS Gateway (mKisan Portal):\n  Push an urgent high-priority SMS in the regional language to all 20,000 registered farmers via the district mKisan registry. Message must be concise: 'URGENT: Locust swarm sighted 15 km west moving at 12 km/h. Initiate loud sound clanging and prepare approved chemical spray immediately.'\n- Voice Broadcast (IVR Automated Outbound Calling):\n  Simultaneously deploy an automated Interactive Voice Response (IVR) outbound dialer. Voice calls bypass literacy barriers and guarantee immediate mobile ring alerts.\n\n2. Community Multiplier Amplification (Hour 0:30 - 1:00):\n- Tiered WhatsApp Extension Network:\n  Broadcast an official visual infographic bulletin to the KVK's established WhatsApp hierarchy: KVK Scientists -> 500 Panchayat Leaders / Input Dealers -> 2,000 Farmer Producer Organization (FPO) group admins -> Village farmer groups.\n- The infographic must provide visual identification, flight direction, and recommended chemical dosage (e.g., Chlorpyrifos 20% EC or Malathion 96% ULV).\n\n3. Real-Time Telephonic Guidance (Hour 1:00 - 2:00):\n- Kisan Call Center (1800-180-1551) Activation:\n  Alert the local KCC Level-1 operators and district KVK lines to prioritize locust queries, providing real-time technical dosage support to anxious callers.\n\n4. Digital Sky Drone Deployment Coordination:\n- Coordinate with certified local agricultural drone operators to mobilize ULV spraying units to buffer village perimeters ahead of the advancing swarm.",
      "outlinePoints": [
        "Phase 1: High-priority localized bulk SMS and automated IVR voice broadcasts via mKisan",
        "Overcoming rural literacy barriers through automated regional voice dialing",
        "Phase 2: Viral amplification across hierarchical WhatsApp extension groups",
        "Clear visual infographics detailing flight vector and approved chemical doses",
        "Phase 3: Dedicated KCC helpline support and commercial drone spray fleet mobilization"
      ]
    },
    {
      "id": "AGR220-U4-SUB20",
      "questionType": "LONG_ANSWER",
      "maxMarks": 5,
      "difficulty": "Hard",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation",
      "questionText": "Discuss the 'AgriStack' digital public infrastructure initiative by the Government of India, detailing its core registries, data security safeguards, and transformative benefits for farmers.",
      "contextScenario": "An invited paper on the architecture and policy implications of India's Digital Agriculture Mission.",
      "modelAnswer": "AgriStack is the open, interoperable digital public infrastructure (DPI) being built by the Ministry of Agriculture and Farmers Welfare under the Digital Agriculture Mission 2024-2028 (Rs. 2,817 crore outlay), designed to modernize agricultural service delivery.\n\n1. Core Foundational Registries of AgriStack:\n\n- The Farmers' Registry (Digital Farmer ID):\n  Establishes a verified, unique 12-digit Digital Farmer ID for every farmer, authenticated via Aadhaar and linked to digitized cadastral land records. It acts as a single digital identity storing land parcel numbers, operational tenancy, and demographic data.\n\n- Geo-Referenced Village Land Parcel Maps:\n  Digitally converts traditional revenue cadastral maps into GIS vector boundary polygons, geographically anchoring each farmer's plot to exact global coordinates.\n\n- Digital Crop Sown Registry (Crop Survey):\n  Replaces subjective, delayed manual patwari crop surveys with mobile-app ground-truthed seasonal crop surveys, augmented by satellite remote sensing and AI computer vision verification twice yearly.\n\n2. Data Privacy, Governance, and Security Safeguards:\n- Consent-Based Data Sharing:\n  Built on India's Data Empowerment and Protection Architecture (DEPA) and DPDP Act 2023. Private AgriTech companies or financial banks cannot access a farmer's profile without explicit, time-bound digital consent.\n- Interoperability via Open APIs:\n  Utilizes open APIs that allow public and private applications (banks, insurance companies, input suppliers) to integrate without centralizing proprietary control.\n\n3. Transformative Agronomic and Economic Benefits:\n- Instant Paperless Agri-Credit (KCC Loans):\n  Banks can verify land ownership and current standing crops instantly through AgriStack APIs, slashing Kisan Credit Card loan approval times from four weeks to five minutes.\n- Automated, Transparent Crop Insurance (PMFBY):\n  By verifying exact crop sown data and integrating satellite-based yield loss metrics, insurance claims are settled automatically into bank accounts without bureaucratic delays.\n- Precision Targeted Subsidies:\n  Ensures fertilizer subsidies, seed mini-kits, and disaster relief reach genuine cultivating farmers rather than non-cultivating absentee landowners.",
      "outlinePoints": [
        "Conceptual vision of AgriStack as foundational Digital Public Infrastructure (DPI)",
        "Core Registry 1: The verified Digital Farmer ID linked to land records",
        "Core Registry 2: Georeferenced village cadastral boundary GIS maps",
        "Core Registry 3: Digital Crop Sown Registry using mobile and satellite verification",
        "Data privacy safeguards: DPDP Act compliance and consent-driven DEPA architecture",
        "Transformative impacts: 5-minute KCC loans, automated PMFBY insurance, and targeted subsidies"
      ]
    }
  ],
  "flashcards": [
    {
      "id": "AGR220-U4-FC01",
      "front": "What is the primary function of the Kisan Suvidha mobile app?",
      "back": "An omnibus portal providing Indian farmers with real-time 5-day weather forecasts, mandi prices, input dealer locations, and plant protection advisories.",
      "hint": "Omnibus government mobile portal",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix"
    },
    {
      "id": "AGR220-U4-FC02",
      "front": "What is the Meghdoot mobile app?",
      "back": "A joint IMD-IITM-ICAR mobile app providing district-level, crop-specific agrometeorological advisories in regional vernacular languages twice weekly.",
      "hint": "Joint IMD/ICAR agro-met advisory app",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix"
    },
    {
      "id": "AGR220-U4-FC03",
      "front": "What warning does the Damini mobile app provide to rural field workers?",
      "back": "Issues early warning alerts for impending lightning strikes within a 20-30 km radius approximately 30 to 45 minutes prior to strike arrival.",
      "hint": "30-45 minute lightning warning",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix"
    },
    {
      "id": "AGR220-U4-FC04",
      "front": "How does the Plantix mobile app diagnose crop diseases?",
      "back": "Using deep learning Convolutional Neural Networks (CNNs) to analyze smartphone photos of affected plant foliage against a database of over 500 diseases.",
      "hint": "CNN image recognition from leaf photos",
      "syllabusTopic": "Farmer mobile applications: Kisan Suvidha, mKisan, Meghdoot, Damini, Agrimarket, and Plantix"
    },
    {
      "id": "AGR220-U4-FC05",
      "front": "What is the mathematical formula for NDVI?",
      "back": "NDVI = (NIR - RED) / (NIR + RED). It measures green vegetative vigor by contrasting high Near-Infrared scattering against Red chlorophyll absorption.",
      "hint": "(NIR - RED) / (NIR + RED)",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat"
    },
    {
      "id": "AGR220-U4-FC06",
      "front": "What is the spatial resolution of Sentinel-2's visible and NIR bands?",
      "back": "10 meters per pixel (Bands 2, 3, 4, and 8), making it ideal for monitoring smallholder agricultural plots.",
      "hint": "10-meter spatial resolution",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat"
    },
    {
      "id": "AGR220-U4-FC07",
      "front": "Why is Synthetic Aperture Radar (SAR) superior during the Kharif monsoon season?",
      "back": "SAR emits active microwave signals that penetrate thick monsoonal clouds, rain, and haze day and night, unlike optical satellites.",
      "hint": "All-weather cloud penetration via microwaves",
      "syllabusTopic": "Satellite remote sensing principles: Spectral reflectance curves, NDVI, Sentinel, and Landsat"
    },
    {
      "id": "AGR220-U4-FC08",
      "front": "What is the key difference between Vector and Raster data in agricultural GIS?",
      "back": "Vector represents discrete features using points, lines, and polygons; Raster models continuous surfaces as a grid of pixels (e.g., NDVI, elevation).",
      "hint": "Coordinates/geometries vs pixel grid matrix",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping"
    },
    {
      "id": "AGR220-U4-FC09",
      "front": "What is Georeferencing in agricultural GIS?",
      "back": "The process of assigning real-world geographic coordinates to scanned paper cadastral maps or raw aerial photos using Ground Control Points (GCPs).",
      "hint": "Assigning real-world coordinates to raw images",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping"
    },
    {
      "id": "AGR220-U4-FC10",
      "front": "What spatial interpolation method creates continuous soil maps from sample points?",
      "back": "Inverse Distance Weighting (IDW) or Ordinary Kriging, which predict values across un-sampled areas based on spatial correlation.",
      "hint": "IDW or Ordinary Kriging",
      "syllabusTopic": "Geographic Information Systems (GIS): Spatial analysis, raster vs vector, and thematic soil/crop mapping"
    },
    {
      "id": "AGR220-U4-FC11",
      "front": "What accuracy does RTK GNSS guidance achieve on agricultural tractors?",
      "back": "1 to 2.5 centimeters of pass-to-pass accuracy by using carrier-phase differential corrections from a local base station.",
      "hint": "1 to 2.5 cm centimeter precision",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors"
    },
    {
      "id": "AGR220-U4-FC12",
      "front": "How does an impact-plate yield monitor measure grain mass?",
      "back": "By measuring the physical impact force of grain hitting a strain-gauge load cell at the top of the clean grain elevator, corrected for moisture.",
      "hint": "Force impact on load cell at elevator discharge",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors"
    },
    {
      "id": "AGR220-U4-FC13",
      "front": "What is ISOBUS (ISO 11783) in agricultural machinery?",
      "back": "An open universal communication protocol that enables tractors and implements from different manufacturers to communicate through a single in-cab display.",
      "hint": "Universal plug-and-play tractor-implement protocol",
      "syllabusTopic": "Precision agriculture technologies: GNSS/RTK guidance, Variable Rate Technology (VRT), and yield monitors"
    },
    {
      "id": "AGR220-U4-FC14",
      "front": "Under Indian Drone Rules, what weight constitutes a 'Small Drone'?",
      "back": "An All-Up Weight (AUW) between 2 kg and 25 kg, which includes most 10-liter agricultural chemical spraying drones.",
      "hint": "2 kg to 25 kg",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying"
    },
    {
      "id": "AGR220-U4-FC15",
      "front": "What is a 'Green Zone' under DGCA's Digital Sky drone airspace map?",
      "back": "Airspace up to 400 feet (120 meters) AGL where agricultural drones can fly freely without requiring prior air traffic control permission.",
      "hint": "Free flight up to 400 ft AGL",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying"
    },
    {
      "id": "AGR220-U4-FC16",
      "front": "What is the optimal droplet size (VMD) for drone agricultural spraying?",
      "back": "100 to 150 microns, produced via rotary atomizers (CDA), balancing canopy penetration against wind drift and evaporation.",
      "hint": "100 to 150 microns via rotary atomizers",
      "syllabusTopic": "Agricultural drone operations (Kisan Drones): DGCA regulations, multispectral sensors, and ULV spraying"
    },
    {
      "id": "AGR220-U4-FC17",
      "front": "What is the toll-free number for the national Kisan Call Center (KCC)?",
      "back": "1800-180-1551, providing agricultural advice in 22 regional Indian languages from 6:00 AM to 10:00 PM every day.",
      "hint": "1800-180-1551",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks"
    },
    {
      "id": "AGR220-U4-FC18",
      "front": "What prerequisite must be fulfilled before commodities are traded on e-NAM?",
      "back": "Scientific assaying and quality certification conducted in the mandi laboratory, establishing moisture, purity, and grain parameters.",
      "hint": "Mandi laboratory assay certificate",
      "syllabusTopic": "Digital agricultural extension systems: e-NAM, Kisan Call Centers, and AI-enabled advisory networks"
    },
    {
      "id": "AGR220-U4-FC19",
      "front": "What is LoRaWAN and why is it popular in agricultural IoT networks?",
      "back": "A Low-Power, Long-Range Wide Area Network protocol capable of transmitting farm sensor telemetry over 10-15 km on small batteries for years.",
      "hint": "Long-range, low-power wireless sensor protocol",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation"
    },
    {
      "id": "AGR220-U4-FC20",
      "front": "What is 'AgriStack' in India's Digital Agriculture Mission?",
      "back": "A federated digital public infrastructure integrating verified Digital Farmer IDs, georeferenced land parcel maps, and digital crop sown surveys.",
      "hint": "Foundational Digital Public Infrastructure (DPI)",
      "syllabusTopic": "Information and Communication Technology (ICT) frameworks in agricultural transformation"
    }
  ]
};
