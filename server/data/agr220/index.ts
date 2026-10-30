import { SubjectMetadata, UnitContent } from "./types";
import { unit1Content } from "./unit1";
import { unit2Content } from "./unit2";
import { unit3Content } from "./unit3";
import { unit4Content } from "./unit4";
import { unit5Content } from "./unit5";

export const agr220Metadata: SubjectMetadata = {
  code: "AGR220",
  name: "Massive Open Online Course 1",
  programmeCode: "BSC-AGRI",
  programmeName: "B.Sc. (Hons.) Agriculture",
  semester: 3,
  credits: 2,
  ltp: "L: 2 | T: 0 | P: 0",
  courseCategory: "Core",
  syllabusPdfUrl: "/AGR220_Syllabus.pdf",
  overview: "Massive Open Online Course 1 (AGR220) empowers undergraduate agricultural students with essential digital learning competencies, information management skills, spatial technologies, and modern career development frameworks. The course covers global and national MOOC platforms (SWAYAM, NPTEL, Coursera, edX), self-regulated learning and metacognitive time-management strategies, academic integrity and bibliographic citation tools (Zotero, Mendeley), digital learning repositories (ICAR e-Courseware, CeRA, NDLI), remote assessment and AI proctoring, Open Badges and blockchain credentialing (Blockcerts), agricultural information systems (farmer mobile apps, satellite remote sensing, NDVI, QGIS spatial mapping, RTK guidance, Kisan Drones), and AgriTech career readiness (ATS resume engineering, entrepreneurship under the ACABC scheme, carbon farming, and field translation).",
  courseOutcomes: [
    {
      code: "CO1",
      title: "Digital Learning Paradigms & Self-Regulated Metacognition",
      description: "Analyze the architectural models of MOOCs (cMOOCs vs xMOOCs), master self-regulated learning strategies (Zimmerman's model, Pomodoro, Spaced Repetition), and manage digital cognitive distraction in online higher education."
    },
    {
      code: "CO2",
      title: "Information Management, Digital Libraries & Academic Integrity",
      description: "Utilize premier agricultural digital repositories (ICAR e-Courseware, CeRA, AGRIS, NDLI), execute Boolean bibliographic searches, manage reference citations via Zotero/Mendeley, and uphold academic integrity avoiding plagiarism."
    },
    {
      code: "CO3",
      title: "Online Assessment, AI Proctoring & Verifiable Credentialing",
      description: "Evaluate formative and summative digital assessments, psychometric item metrics, Calibrated Peer Review (CPR), remote AI surveillance proctoring, Open Badges JSON-LD metadata, and blockchain diploma verification via Blockcerts."
    },
    {
      code: "CO4",
      title: "Agricultural Information Systems, Remote Sensing & Drones",
      description: "Integrate national farmer mobile applications (Kisan Suvidha, Meghdoot, Damini, Plantix), satellite remote sensing (Sentinel-2, Landsat, SAR, NDVI), QGIS thematic fertility mapping, precision RTK machinery, and DGCA-compliant Kisan Drone operations."
    },
    {
      code: "CO5",
      title: "AgriTech Career Readiness, Entrepreneurship & Field Translation",
      description: "Conduct skill gap analyses, formulate personal development plans, evaluate agribusiness carbon farming and cold chain logistics, leverage ACABC and RKVY-RAFTAAR entrepreneurship funding, and engineer ATS-optimized technical resumes."
    }
  ],
  gradingStructure: [
    {
      component: "Continuous Assessment (CA)",
      weightage: "30%",
      marks: "30 Marks",
      details: "Weekly online module evaluations, graded discussion forum contributions, self-regulated learning reflections, and bibliographic reference exercises."
    },
    {
      component: "Mid-Term Examination (MTE)",
      weightage: "20%",
      marks: "40 Marks",
      details: "Computer-based mid-term assessment evaluating Units 1 and 2, testing digital pedagogy, academic databases, and information management."
    },
    {
      component: "End-Term Proctored Examination (ETE)",
      weightage: "50%",
      marks: "70 Marks",
      details: "Comprehensive proctored university end-term examination covering all five units (Units 1 to 5), evaluating theoretical concepts, analytical problem solving, and agricultural technology applications."
    }
  ],
  textbooks: [
    {
      title: "The MOOC Revolution: Massive Open Online Courses and the Future of Higher Education",
      author: "Curtis J. Bonk, Mimi M. Lee, Thomas C. Reeves, and Thomas H. Reynolds",
      note: "Foundational reference examining digital pedagogical models, instructional design, learner engagement, and global online higher education transformations."
    },
    {
      title: "E-Learning in the 21st Century: A Community of Inquiry Framework for Research and Practice",
      author: "D. Randy Garrison",
      note: "Seminal work establishing the Community of Inquiry (CoI) model, analyzing cognitive, social, and teaching presence in asynchronous digital environments."
    },
    {
      title: "Digital Agriculture: Concepts, Technologies, and Applications",
      author: "N. K. Jain and P. K. Singh",
      note: "Comprehensive textbook detailing agricultural informatics, mobile agro-advisories, sensor networks, satellite remote sensing, and precision farming in India."
    },
    {
      title: "Precision Agriculture Technology for Crop Farming",
      author: "Qin Zhang",
      note: "Authoritative engineering textbook covering GNSS/RTK guidance, variable rate technology (VRT), yield monitoring, and agricultural drone applications."
    }
  ],
  practicals: [
    {
      id: 1,
      title: "Personal Learning Environment (PLE) Setup and MOOC Platform Navigation",
      objectives: [
        "Create verified student accounts on SWAYAM, NPTEL, and Coursera platforms.",
        "Set up a personal calendar time-blocking schedule and configure digital note-taking systems (Notion/Obsidian) for asynchronous course tracking."
      ],
      apparatus: [
        "Computer with high-speed internet connection",
        "Google Calendar / Notion application",
        "SWAYAM and NPTEL portal access"
      ],
      procedure: [
        "Log into SWAYAM using institutional email and navigate course catalogs under Agriculture & Food Sciences.",
        "Enroll in an approved 8- or 12-week course and inspect syllabus modules, assignment deadlines, and proctored exam dates.",
        "Construct a weekly time-blocking schedule allocating four 45-minute study blocks per week.",
        "Configure note-taking templates integrating active retrieval prompts and Cornell layout."
      ],
      observations: [
        "Course title and NPTEL/SWAYAM course ID: ____________________",
        "Weekly assignment submission deadlines: ____________________",
        "Planned study slots per week: ____________________"
      ],
      precautions: [
        "Ensure institutional email addresses are used to enable credit transfer under the Academic Bank of Credits (ABC).",
        "Verify proctored exam date conflicts with semester university examinations before enrollment."
      ]
    },
    {
      id: 2,
      title: "Bibliographic Literature Search and Reference Management in Zotero",
      objectives: [
        "Execute advanced Boolean search queries across ICAR CeRA, Google Scholar, and AGRIS databases.",
        "Capture metadata, full-text PDFs, and generate automated bibliographies in APA 7th style using Zotero reference manager."
      ],
      apparatus: [
        "Computer with internet access",
        "Zotero Desktop and Zotero Connector browser extension",
        "Access to ICAR CeRA / Google Scholar"
      ],
      procedure: [
        "Install Zotero desktop software and browser connector.",
        "Formulate a structured search query using Boolean operators (e.g., 'bioherbicide' AND 'Colletotrichum' NOT 'chemical').",
        "Search Google Scholar and CeRA; import at least 10 peer-reviewed journal articles into a dedicated Zotero collection.",
        "Annotate PDFs, extract key quotes, and generate an automated in-text citation and formatted bibliography in APA 7th edition."
      ],
      observations: [
        "Boolean search string employed: ____________________",
        "Total search results returned: ____________________",
        "Number of relevant peer-reviewed articles archived in Zotero: ____________________"
      ],
      precautions: [
        "Inspect imported metadata fields (authors, publication year, journal title, volume, DOI) for automated extraction errors.",
        "Avoid predatory journals by cross-referencing against the UGC-CARE list and NAAS journal ratings."
      ]
    },
    {
      id: 3,
      title: "Interactive Soil Fertility Mapping in QGIS from Sample Survey Data",
      objectives: [
        "Import GPS-tagged soil testing data (available N, P, K) into QGIS.",
        "Execute Inverse Distance Weighting (IDW) interpolation and generate a classified thematic fertility map."
      ],
      apparatus: [
        "QGIS 3.x Desktop Software",
        "Sample field CSV dataset with Latitude, Longitude, and Available Potassium (kg/ha)",
        "Village cadastral boundary shapefile"
      ],
      procedure: [
        "Open QGIS and set Project CRS to WGS 84 / UTM Zone 43N (EPSG:32643).",
        "Add delimited text layer containing GPS coordinates and soil potassium values.",
        "Open Processing Toolbox and run 'IDW Interpolation' using a distance coefficient of 2.0 and 5-meter pixel resolution.",
        "Clip the resulting raster surface against the village boundary polygon.",
        "Apply 'Singleband pseudocolor' symbology categorized into Low (<144 kg/ha), Medium (144-336 kg/ha), and High (>336 kg/ha) tiers.",
        "Compose a publication map layout with north arrow, scale bar, legend, and title."
      ],
      observations: [
        "Interpolated potassium minimum value: ________ kg/ha, maximum: ________ kg/ha",
        "Percentage of farm area falling under 'Low' potassium category: ________ %",
        "Recommended fertilizer dosage adjustment: ____________________"
      ],
      precautions: [
        "Ensure coordinates are projected into metric UTM coordinates before running interpolation; unprojected degrees distort spatial distance weighting.",
        "Clip strictly to the boundary mask to prevent spurious edge extrapolations."
      ]
    },
    {
      id: 4,
      title: "Satellite Crop Health Monitoring and NDVI Calculation in Sentinel-2",
      objectives: [
        "Acquire cloud-free Sentinel-2 multispectral imagery and compute NDVI using Band 8 (NIR) and Band 4 (Red).",
        "Differentiate healthy vegetative canopy from moisture-stressed or barren parcels."
      ],
      apparatus: [
        "Computer with web browser accessing Copernicus Browser / Sentinel Hub",
        "Target farm parcel coordinate bounding box"
      ],
      procedure: [
        "Access Copernicus Browser and navigate to the target agricultural research farm.",
        "Filter for Sentinel-2 L2A bottom-of-atmosphere imagery with <10% cloud cover during the active vegetative crop stage.",
        "Select the NDVI layer or calculate using the Custom Script: (B08 - B04) / (B08 + B04).",
        "Export the geotagged GeoTIFF and analyze spatial NDVI variations across field compartments.",
        "Cross-reference low NDVI patches against irrigation schedules and soil texture differences."
      ],
      observations: [
        "Date of Sentinel-2 satellite pass: ____________________",
        "Maximum NDVI observed in healthy crop plots: ________",
        "Minimum NDVI observed in stressed/fallow plots: ________"
      ],
      precautions: [
        "Use Level-2A (Bottom-of-Atmosphere surface reflectance) rather than Level-1C (Top-of-Atmosphere) to ensure atmospheric scattering is corrected.",
        "Avoid scenes with thin cirrus cloud cover that falsely depress NIR reflectance."
      ]
    },
    {
      id: 5,
      title: "AgriTech Resume Engineering and STAR Portfolio Presentation",
      objectives: [
        "Construct an ATS-compatible single-column agricultural science resume following the Google XYZ formula.",
        "Present a 3-minute technical case study solving a precision agronomy problem using the STAR framework."
      ],
      apparatus: [
        "Word processor (Google Docs / Microsoft Word)",
        "Job description of an entry-level Precision Agronomist or AgriTech Executive",
        "Presentation slides / Digital Portfolio"
      ],
      procedure: [
        "Analyze target AgriTech job listings and compile a prioritized technical keyword list (e.g., QGIS, NDVI, Soil Health Card, STCR, FCO, Drone SOP).",
        "Draft an ATS-optimized single-column resume with standard semantic headings.",
        "Engineer project bullet points converting passive statements into high-impact Google XYZ formulations.",
        "Structure a 3-minute oral presentation using the STAR method (Situation, Task, Action, Result) explaining a field trial or spatial data analysis project."
      ],
      observations: [
        "ATS resume keyword match percentage: ________ %",
        "STAR presentation evaluated by peers: Clarity ( /5), Technical Depth ( /5), Professional Delivery ( /5)"
      ],
      precautions: [
        "Do not include multi-column tables, photos, or complex graphic elements in the ATS resume file.",
        "Ensure all project claims are supported by verifiable artifacts in your digital portfolio or GitHub repository."
      ]
    }
  ]
};

export const agr220Units: UnitContent[] = [
  unit1Content,
  unit2Content,
  unit3Content,
  unit4Content,
  unit5Content
];

export const agr220CompleteSubject = {
  metadata: agr220Metadata,
  units: agr220Units
};

export default agr220CompleteSubject;
