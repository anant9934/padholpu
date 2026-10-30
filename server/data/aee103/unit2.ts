import { UnitContent } from "./types";

export const unit2Content: UnitContent = {
  unitNumber: 2,
  title: "Extension Systems in India",
  shortDescription: "Evolution of agricultural extension in India: pre-independence experiments, post-independence community initiatives, T&V system, major agricultural development schemes, poverty alleviation, and women development programmes.",
  estimatedReadTimeMinutes: 22,
  syllabusTopics: [
    "Pre-independence extension efforts: Sriniketan, Marthandam, Firka Development Scheme, Gurgaon Experiment, Sevagram, Baroda Experiment",
    "Post-independence efforts: Etawah Pilot Project, Nilokheri Experiment, CDP (1952), NES (1953)",
    "Reorganised extension system: Training and Visit (T&V) system",
    "Agricultural development programmes: IADP, IAAP, HYVP, KVK, IVLP, ORP, ND, NATP, NAIP",
    "Social justice and poverty alleviation programmes: ITDA, IRDP, SGSY, NRLM",
    "Women development programmes: RMK, MSY"
  ],
  notes: {
    learningObjectives: [
      "Analyze historical pre-independence rural reconstruction experiments and their lasting lessons for extension.",
      "Understand the conceptual genesis of post-independence community development and the Etawah and Nilokheri projects.",
      "Critically evaluate Daniel Benor's Training and Visit (T&V) system, its organizational mechanics, and reasons for its decline.",
      "Chronologically track landmark agricultural development programmes (IADP, IAAP, HYVP, KVK, NATP, NAIP).",
      "Examine targeted poverty alleviation schemes (IRDP, SGSY, DAY-NRLM) and women-centric initiatives (RMK, MSY)."
    ],
    sections: [
      {
        id: "sec-2-1",
        heading: "1. Pre-Independence Extension Efforts in India",
        content: `Prior to 1947, agricultural extension in colonial India was characterized by isolated, philanthropic, and individual-driven rural reconstruction experiments. While lacking continuous state budgetary backing, these pioneers laid the foundational philosophies of modern Indian extension.`,
        subsections: [
          {
            subheading: "Chronological Matrix of Pre-Independence Experiments",
            content: "The foundational pre-independence initiatives are summarized in the historical comparative matrix below:",
            table: {
              headers: ["Project / Experiment", "Year & Founder", "Location", "Core Philosophy & Features", "Primary Limitation"],
              rows: [
                ["Gurgaon Experiment", "1920, F.L. Brayne (Deputy Commissioner)", "Gurgaon District (Punjab/Haryana)", "Village Guides acting as multi-purpose change agents; rural hygiene; women's upliftment; scout movement; school gardens.", "Over-reliant on Brayne's authoritarian official authority; collapsed after his transfer."],
                ["Marthandam Project", "1921, Dr. Spencer Hatch (YMCA)", "Marthandam (Travancore, Kerala/TN)", "Five-fold development: Spiritual, mental, physical, social, economic. Self-help with intimate YMCA guidance. Cottage industries: poultry, bee-keeping, weaving.", "Limited geographic radius; lacked broader agrarian structural land reforms."],
                ["Sriniketan Institute of Rural Reconstruction", "1921, Rabindranath Tagore & Leonard Elmhirst", "Surul / Shantiniketan (West Bengal)", "Joyful learning; youth squads ('Brati Balaks'); revival of rural cottage crafts; village dairy; blending arts with farm science.", "Confined to a cluster of villages; inadequate state funding and institutional scaling."],
                ["Sevagram / Wardha", "1920/1936, Mahatma Gandhi", "Wardha (Maharashtra)", "Constructive Programme: Gram Swaraj, self-sufficiency, charkha (khadi), basic education (Nai Talim), sanitation, removal of untouchability.", "Demanded supreme moral asceticism; difficult to replicate bureaucratically."],
                ["Baroda Experiment", "1932, V.T. Krishnamachari", "Baroda State (Gujarat)", "Integrated village development; cooperative credit; adult literacy; agricultural demonstrations; training local leaders.", "Limited to the princely state territory; dependent on royal patron support."],
                ["Firka Development Scheme", "1946, Madras Government (Tanguturi Prakasam)", "Madras Presidency (34 Firkas)", "First state-sponsored grassroots development; Gandhian Gram Swaraj; rural water supply, khadi, village communications; Firka Development Officers.", "Lacked coordination with specialized technical agriculture departments."]
              ]
            }
          }
        ]
      },
      {
        id: "sec-2-2",
        heading: "2. Post-Independence Extension Initiatives",
        content: `Following independence, the Government of India recognized that isolated private projects could not solve chronic food deficits. Large-scale state-sponsored pilot projects paved the way for nationwide extension infrastructure.`,
        subsections: [
          {
            subheading: "Etawah Pilot Project & Nilokheri Experiment",
            content: "Two decisive experiments catalyzed national policy:",
            keyPoints: [
              "Etawah Pilot Project (1948): Launched by American town planner Albert Mayer at Mahewa (Etawah district, UP) covering 64 villages. Mayer introduced the revolutionary concept of the Village Level Worker (VLW / Gram Sevak) as a multipurpose frontline extension worker acting as a liaison between villagers and subject specialists. Etawah was hailed as the direct prototype and testing ground for India's Community Development Programme.",
              "Nilokheri Experiment (Mazdoor Manzil, 1948): Founded by S.K. Dey (later India's first Union Minister for Community Development) to rehabilitate 7,000 Hindu/Sikh refugees from West Pakistan in Karnal (Haryana). Built on the motto 'Mazdoor Manzil' (destination through labor) to create a self-sufficient agro-industrial-cum-urban township. Successfully integrated vocational training, cottage industries, agriculture, and civic services.",
              "Community Development Programme (CDP, Oct 2, 1952): Launched across 55 community projects with US Ford Foundation support. Emphasized all-round village advancement under Community Development Blocks headed by BDOs.",
              "National Extension Service (NES, Oct 2, 1953): Introduced to establish a permanent extension apparatus across all blocks with less capital-intensive administrative staffing than CDP."
            ]
          }
        ]
      },
      {
        id: "sec-2-3",
        heading: "3. Reorganised Extension System: Training and Visit (T&V) System",
        content: `Introduced in India in 1974 by Daniel Benor with World Bank technical and financial assistance (initially piloted in Rajasthan Canal area and Chambal Command Area, Madhya Pradesh). The T&V system sought to reform undisciplined, diffused extension administration through professional, single-line command and scheduled contact.`,
        subsections: [
          {
            subheading: "Core Structural Features of the T&V System",
            content: "T&V was organized on strict operational principles:",
            table: {
              headers: ["Feature", "T&V Mechanism", "Extension Purpose"],
              rows: [
                ["Single Line of Command", "Extension staff reported exclusively to the Department of Agriculture, not multi-departmental BDOs", "Eliminated conflicting administrative tasks and kept workers focused purely on technical agriculture."],
                ["Fixed Fortnightly Schedule", "Village Extension Worker (VEW) visited each farmer circle on a predetermined fixed day every two weeks", "Farmers knew precisely when and where the extension worker would arrive without notice."],
                ["Fortnightly Training", "VEWs received 1 full day of intensive training every fortnight from Subject Matter Specialists (SMS)", "Ensured VEWs carried only 2 or 3 highly relevant, current crop-stage recommendations ('impact points')."],
                ["Contact Farmers", "VEW worked with 10% selected 'Contact Farmers' representing small, medium, and large holdings", "Contact farmers practiced innovations first; surrounding 'follower farmers' observed and adopted."],
                ["Linkage with Research", "Monthly workshops between Subject Matter Specialists (SMS) and State Agricultural University scientists", "Kept recommendations fresh, field-validated, and scientifically accurate."]
              ]
            }
          },
          {
            subheading: "Shortcomings and Eventual Phasing Out",
            content: "Despite initial yield leaps during the Green Revolution, T&V was gradually phased out by the late 1990s due to: (1) Immense recurrent salary costs unsustainable without World Bank funding; (2) Top-down, supply-driven bias neglecting farmer feedback; (3) Contact farmers monopolizing resources without diffusing knowledge to marginalized castes and women; and (4) Neglect of allied sectors (horticulture, livestock, fisheries).",
            keyPoints: [
              "T&V replaced by ATMA (Agricultural Technology Management Agency) under NATP in 1998.",
              "Shift from single-discipline crop production to integrated, market-led farming systems."
            ]
          }
        ]
      },
      {
        id: "sec-2-4",
        heading: "4. Major Agricultural Development Programmes in India",
        content: `Chronological evolution of specialized technology and production programmes:`,
        subsections: [
          {
            subheading: "Landmark Production & Technology Schemes",
            content: "Summary of strategic government agricultural missions:",
            table: {
              headers: ["Programme", "Year", "Full Title & Focus", "Significance in Extension History"],
              rows: [
                ["IADP", "1960", "Intensive Agriculture District Programme ('Package Programme')", "Piloted in 7 districts (e.g., Ludhiana, Thanjavur, Aligarh) providing a simultaneous package of certified seeds, fertilizers, credit, and extension."],
                ["IAAP", "1964", "Intensive Agriculture Area Programme", "Extended the package approach to 114 districts focusing on specific high-potential crop belts."],
                ["HYVP", "1966", "High Yielding Varieties Programme", "Unleashed the Green Revolution utilizing semi-dwarf wheat (Lerma Rojo, Sonora 64) and paddy (IR-8, TN-1) responsive to fertilizers."],
                ["ND", "1965", "National Demonstrations", "Direct frontline field trials conducted by research scientists to prove genetic yield potential on farmer fields."],
                ["ORP", "1974-75", "Operational Research Projects", "Tested and refined integrated technologies (e.g., watershed management, saline soil reclamation) on a contiguous community scale."],
                ["KVK", "1974", "Krishi Vigyan Kendra (Farm Science Centre)", "Recommended by Mohan Singh Mehta Committee (1974); first KVK set up at Pondicherry under TNAU. Focus on vocational training, frontline demonstrations (FLDs), and on-farm testing (OFT)."],
                ["IVLP", "1995", "Institution Village Linkage Programme", "Piloted technology assessment and refinement (TAR) through participatory rural research directly involving ICAR scientists."],
                ["NATP", "1998", "National Agricultural Technology Project (World Bank)", "Introduced decentralized, demand-driven extension via ATMA (district level), SREP, and farmer advisory committees."],
                ["NAIP", "2006", "National Agricultural Innovation Project", "Strengthened agricultural research-for-development, value chain consortia, and livelihood security in disadvantaged regions."]
              ]
            }
          }
        ]
      },
      {
        id: "sec-2-5",
        heading: "5. Social Justice, Poverty Alleviation & Women Development Programmes",
        content: `Targeted programmes designed to uplift marginalized rural strata and women:`,
        subsections: [
          {
            subheading: "Poverty Alleviation and Livelihoods",
            content: "Chronological transition of anti-poverty programmes:",
            keyPoints: [
              "ITDA (Integrated Tribal Development Agency, 1971-72): Dedicated tribal sub-plan focusing on socio-economic development, shifting cultivation control, and minor forest produce marketing for scheduled tribes.",
              "IRDP (Integrated Rural Development Programme, 1978-80): Flagship self-employment programme providing subsidized bank credit and income-generating productive assets (milch cattle, sewing machines, pumpsets) to below-poverty-line (BPL) families.",
              "SGSY (Swarnajayanti Gram Swarozgar Yojana, April 1999): Restructured IRDP, TRYSEM, DWCRA, SITRA, GKY, and MWS into a unified Self-Help Group (SHG) bank-linkage cluster model.",
              "NRLM / DAY-NRLM (National Rural Livelihoods Mission / Deendayal Antyodaya Yojana, June 2011): Replaced SGSY with a universal social mobilization model, building federated women SHG institutions, community resource persons (Krishi Sakhis), and sustainable livelihoods."
            ]
          },
          {
            subheading: "Women Development Programmes: RMK and MSY",
            content: "Specialized initiatives targeting rural women's empowerment:",
            table: {
              headers: ["Scheme", "Year", "Full Form", "Key Mandate & Operating Model"],
              rows: [
                ["RMK", "1993", "Rashtriya Mahila Kosh (National Credit Fund for Women)", "Apex microfinance institution under Ministry of Women & Child Development; delivered collateral-free micro-credit to poor women through intermediate NGOs/SHGs for micro-enterprises and agriculture."],
                ["MSY", "1993", "Mahila Samridhi Yojana", "Promoted thrift and financial independence among rural women through designated post office savings accounts, offering a 25% government incentive bonus on deposits held for 330 days."]
              ]
            }
          }
        ]
      }
    ],
    keyTakeaways: [
      "Pre-independence projects proved that rural development requires multifaceted interventions (economic, educational, social), but failed due to lack of permanent state backing.",
      "Albert Mayer's Etawah Pilot Project pioneered the multipurpose Village Level Worker (VLW / Gram Sevak), becoming the direct blueprint for the Community Development Programme (1952).",
      "Daniel Benor's T&V system established a strict fortnightly schedule, single line of command, and Subject Matter Specialist training, but declined due to fiscal unsustainability and top-down bias.",
      "The Green Revolution succeeded through the synchronized package of IADP, IAAP, and HYVP.",
      "KVKs (established 1974, Mohan Singh Mehta Committee) remain India's bedrock district-level frontline vocational farm training institutions.",
      "Poverty alleviation shifted from individual asset distribution (IRDP) to federated women Self-Help Groups (SGSY, DAY-NRLM)."
    ],
    commonMisunderstandings: [
      {
        myth: "The T&V system is still the primary operating extension model across Indian state agriculture departments today.",
        reality: "T&V was phased out in the late 1990s and replaced by ATMA (Agricultural Technology Management Agency) which promotes participatory, multi-agency, market-led farming systems."
      },
      {
        myth: "Krishi Vigyan Kendras (KVKs) are degree-granting educational colleges for students.",
        reality: "KVKs are vocational, frontline district assessment and vocational training institutions for farmers, rural youth, and grassroots extension workers; they do not award degrees."
      }
    ],
    summary: "Unit 2 reviews the rich historical trajectory of Indian extension, from pre-colonial grassroots pilots (Sriniketan, Marthandam, Gurgaon) to post-independence institution-building (Etawah, Nilokheri, CDP, T&V). It traces the evolution of agricultural technology missions (IADP to NAIP) and details the transformation of social justice and women's micro-credit programmes (IRDP, DAY-NRLM, RMK, MSY)."
  },
  mcqs: [
    {
      id: "AEE103-U2-MCQ01",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Easy",
      questionText: "Who founded the Gurgaon Experiment in 1920?",
      options: {
        A: "F.L. Brayne",
        B: "Spencer Hatch",
        C: "Rabindranath Tagore",
        D: "Albert Mayer"
      },
      correctOption: "A",
      explanation: "F.L. Brayne, then Deputy Commissioner of Gurgaon district, initiated the Gurgaon Experiment in 1920."
    },
    {
      id: "AEE103-U2-MCQ02",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "The frontline multipurpose worker introduced in the Gurgaon Experiment was known as:",
      options: {
        A: "Village Guide",
        B: "Gram Sevak",
        C: "Kisan Mitra",
        D: "Krishi Sakhi"
      },
      correctOption: "A",
      explanation: "F.L. Brayne appointed and trained 'Village Guides' to act as friends, philosophers, and guides to rural villagers."
    },
    {
      id: "AEE103-U2-MCQ03",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Easy",
      questionText: "The Marthandam Project was launched in 1921 under the auspices of which organization?",
      options: {
        A: "YMCA (Young Men's Christian Association)",
        B: "Indian National Congress",
        C: "Ford Foundation",
        D: "Ramakrishna Mission"
      },
      correctOption: "A",
      explanation: "Dr. Spencer Hatch established the Marthandam Demonstration Centre under the YMCA in Travancore."
    },
    {
      id: "AEE103-U2-MCQ04",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "Dr. Spencer Hatch's Marthandam project was built on the philosophy of development in how many dimensions?",
      options: {
        A: "Five-fold development (Spiritual, mental, physical, social, economic)",
        B: "Two-fold development (Crop and soil)",
        C: "Only military training",
        D: "Single economic focus"
      },
      correctOption: "A",
      explanation: "Hatch's famous five-fold pillar encompassed spiritual, mental, physical, social, and economic upliftment."
    },
    {
      id: "AEE103-U2-MCQ05",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Easy",
      questionText: "Who established the Institute of Rural Reconstruction at Sriniketan in 1921?",
      options: {
        A: "Rabindranath Tagore and Leonard Elmhirst",
        B: "Mahatma Gandhi",
        C: "Jawaharlal Nehru",
        D: "Swami Vivekananda"
      },
      correctOption: "A",
      explanation: "Poet Rabindranath Tagore, assisted by British agronomist Leonard Elmhirst, founded Sriniketan in West Bengal."
    },
    {
      id: "AEE103-U2-MCQ06",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "The youth village scouting squads established under the Sriniketan experiment were called:",
      options: {
        A: "Brati Balaks",
        B: "Vanar Sena",
        C: "Bhoodan Sevaks",
        D: "Lok Dals"
      },
      correctOption: "A",
      explanation: "Tagore organized village youth into 'Brati Balaks' (boys with a vow) for village sanitation, fire-fighting, and scouting."
    },
    {
      id: "AEE103-U2-MCQ07",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Easy",
      questionText: "The Sevagram Ashram rural reconstruction project was initiated by:",
      options: {
        A: "Mahatma Gandhi",
        B: "B.R. Ambedkar",
        C: "Subhas Chandra Bose",
        D: "Sardar Vallabhbhai Patel"
      },
      correctOption: "A",
      explanation: "Mahatma Gandhi established the Sevagram ashram near Wardha, Maharashtra, championing Gram Swaraj and the Constructive Programme."
    },
    {
      id: "AEE103-U2-MCQ08",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "The Firka Development Scheme was initiated in 1946 by which provincial government?",
      options: {
        A: "Madras Government",
        B: "Bombay Presidency",
        C: "Bengal Government",
        D: "Punjab Government"
      },
      correctOption: "A",
      explanation: "The Firka Development Scheme was launched in 1946 by the Government of Madras under Premier Tanguturi Prakasam."
    },
    {
      id: "AEE103-U2-MCQ09",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "Who pioneered the rural reconstruction experiment in the princely state of Baroda in 1932?",
      options: {
        A: "V.T. Krishnamachari",
        B: "Sayajirao Gaekwad III",
        C: "M. Visvesvaraya",
        D: "Mirza Ismail"
      },
      correctOption: "A",
      explanation: "V.T. Krishnamachari, Dewan of Baroda State, established the pioneering Baroda rural reconstruction experiment in 1932."
    },
    {
      id: "AEE103-U2-MCQ10",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Easy",
      questionText: "The Etawah Pilot Project was launched in 1948 by:",
      options: {
        A: "Albert Mayer",
        B: "S.K. Dey",
        C: "Daniel Benor",
        D: "Norman Borlaug"
      },
      correctOption: "A",
      explanation: "Albert Mayer, an American architect and town planner, initiated the Etawah Pilot Project at Mahewa, Uttar Pradesh."
    },
    {
      id: "AEE103-U2-MCQ11",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Medium",
      questionText: "Which landmark concept was introduced for the first time in the Etawah Pilot Project?",
      options: {
        A: "Multipurpose Village Level Worker (VLW / Gram Sevak)",
        B: "Kisan Credit Card",
        C: "Drip irrigation subsidy",
        D: "Agri-business incubator"
      },
      correctOption: "A",
      explanation: "Albert Mayer introduced the multipurpose Gram Sevak to overcome departmental compartmentalization at the village level."
    },
    {
      id: "AEE103-U2-MCQ12",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Easy",
      questionText: "The Nilokheri Experiment, also known as 'Mazdoor Manzil', was conceived and led by:",
      options: {
        A: "S.K. Dey",
        B: "Albert Mayer",
        C: "J.C. Kumarappa",
        D: "Morarji Desai"
      },
      correctOption: "A",
      explanation: "S.K. Dey established Nilokheri in Karnal (Haryana) in 1948 to rehabilitate refugees through cooperative enterprise."
    },
    {
      id: "AEE103-U2-MCQ13",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Easy",
      questionText: "On which date was the nationwide Community Development Programme (CDP) officially launched in India?",
      options: {
        A: "October 2, 1952",
        B: "August 15, 1947",
        C: "January 26, 1950",
        D: "November 14, 1954"
      },
      correctOption: "A",
      explanation: "The Community Development Programme was inaugurated on Gandhi Jayanti, October 2, 1952, across 55 community projects."
    },
    {
      id: "AEE103-U2-MCQ14",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Medium",
      questionText: "The National Extension Service (NES) was launched in India on:",
      options: {
        A: "October 2, 1953",
        B: "October 2, 1952",
        C: "August 15, 1955",
        D: "January 26, 1956"
      },
      correctOption: "A",
      explanation: "NES was launched exactly one year after CDP, on October 2, 1953, to expand permanent extension machinery to all blocks."
    },
    {
      id: "AEE103-U2-MCQ15",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Easy",
      questionText: "Who formulated the Training and Visit (T&V) System of extension?",
      options: {
        A: "Daniel Benor",
        B: "Robert Chambers",
        C: "Paul Leagans",
        D: "Amartya Sen"
      },
      correctOption: "A",
      explanation: "Israeli agricultural expert Daniel Benor formulated the T&V system in collaboration with the World Bank."
    },
    {
      id: "AEE103-U2-MCQ16",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Medium",
      questionText: "In which year and in which Indian project area was the T&V system first piloted?",
      options: {
        A: "1974 in Rajasthan Canal and Chambal Command Areas",
        B: "1952 in Mahewa, UP",
        C: "1960 in Ludhiana, Punjab",
        D: "1985 in Bangalore, Karnataka"
      },
      correctOption: "A",
      explanation: "T&V was piloted in 1974 in the Rajasthan Canal area and Chambal command area in MP/Rajasthan before national rollout."
    },
    {
      id: "AEE103-U2-MCQ17",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Medium",
      questionText: "What was the frequency of scheduled training for Village Extension Workers (VEWs) under the T&V system?",
      options: {
        A: "Fortnightly (once every two weeks)",
        B: "Daily",
        C: "Once a year",
        D: "Monthly"
      },
      correctOption: "A",
      explanation: "VEWs received one full day of intensive practical training every fortnight from Subject Matter Specialists (SMS)."
    },
    {
      id: "AEE103-U2-MCQ18",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Medium",
      questionText: "Under the T&V system, the Village Extension Worker directly interacted with approximately what percentage of selected farmers?",
      options: {
        A: "10% Contact Farmers",
        B: "100% of all village farmers",
        C: "Only 1 richest landlord",
        D: "50% random farmers"
      },
      correctOption: "A",
      explanation: "VEWs focused their scheduled visits on roughly 10% designated 'Contact Farmers' representing diverse landholding strata."
    },
    {
      id: "AEE103-U2-MCQ19",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Hard",
      questionText: "Which administrative principle was a cornerstone of Daniel Benor's T&V system?",
      options: {
        A: "Single Line of Command under the Department of Agriculture",
        B: "Dual control under Revenue and Police departments",
        C: "Complete privatization of extension",
        D: "No reporting requirements"
      },
      correctOption: "A",
      explanation: "T&V removed multipurpose burdens by enforcing a strict single line of technical command directly under Agriculture Directors."
    },
    {
      id: "AEE103-U2-MCQ20",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Easy",
      questionText: "The Intensive Agriculture District Programme (IADP), launched in 1960, is popularly known as the:",
      options: {
        A: "Package Programme",
        B: "Dryland Mission",
        C: "Organic Mission",
        D: "Green Corridor"
      },
      correctOption: "A",
      explanation: "IADP is known as the 'Package Programme' because it provided a synchronized package of inputs, credit, and extension."
    },
    {
      id: "AEE103-U2-MCQ21",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "How many districts were originally selected to pilot the IADP in 1960?",
      options: {
        A: "Seven districts",
        B: "Fifty districts",
        C: "One district",
        D: "One hundred districts"
      },
      correctOption: "A",
      explanation: "IADP was piloted in 7 high-potential districts with assured irrigation (including Ludhiana, Thanjavur, and West Godavari)."
    },
    {
      id: "AEE103-U2-MCQ22",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "The Intensive Agriculture Area Programme (IAAP) was launched in which year?",
      options: {
        A: "1964",
        B: "1958",
        C: "1972",
        D: "1980"
      },
      correctOption: "A",
      explanation: "IAAP was launched in 1964 to extend the intensive package approach to 114 districts."
    },
    {
      id: "AEE103-U2-MCQ23",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Easy",
      questionText: "The High Yielding Varieties Programme (HYVP), which catalyzed the Green Revolution, was introduced in:",
      options: {
        A: "1966",
        B: "1950",
        C: "1975",
        D: "1984"
      },
      correctOption: "A",
      explanation: "HYVP was introduced in Kharif 1966, introducing Mexican semi-dwarf wheat and miracle rice varieties."
    },
    {
      id: "AEE103-U2-MCQ24",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Easy",
      questionText: "The National Demonstrations (ND) programme in agriculture was initiated in:",
      options: {
        A: "1965",
        B: "1947",
        C: "1980",
        D: "1991"
      },
      correctOption: "A",
      explanation: "National Demonstrations were launched in 1965 by ICAR, where researchers showed farmers the genetic yield potential on their own fields."
    },
    {
      id: "AEE103-U2-MCQ25",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "Operational Research Projects (ORP) were launched by ICAR in which year?",
      options: {
        A: "1974-75",
        B: "1960-61",
        C: "1988-89",
        D: "2000-01"
      },
      correctOption: "A",
      explanation: "ORPs were initiated in 1974-75 to test and refine proven technologies on a contiguous watershed or village cluster basis."
    },
    {
      id: "AEE103-U2-MCQ26",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Easy",
      questionText: "The committee that recommended the establishment of Krishi Vigyan Kendras (KVKs) was:",
      options: {
        A: "Dr. Mohan Singh Mehta Committee (1974)",
        B: "Balwant Rai Mehta Committee (1957)",
        C: "Swaminathan Commission (2004)",
        D: "Ashok Mehta Committee (1977)"
      },
      correctOption: "A",
      explanation: "The ICAR committee headed by Dr. Mohan Singh Mehta submitted its report in 1974 recommending KVK establishment."
    },
    {
      id: "AEE103-U2-MCQ27",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Easy",
      questionText: "Where was the first Krishi Vigyan Kendra (KVK) established in India in 1974?",
      options: {
        A: "Pondicherry (Puducherry)",
        B: "Ludhiana, Punjab",
        C: "Pantnagar, UP",
        D: "Nagpur, Maharashtra"
      },
      correctOption: "A",
      explanation: "The first KVK was established in 1974 at Pondicherry under the administrative control of Tamil Nadu Agricultural University."
    },
    {
      id: "AEE103-U2-MCQ28",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "The core operational mandates of a modern Krishi Vigyan Kendra (KVK) include:",
      options: {
        A: "On-Farm Testing (OFT), Frontline Demonstrations (FLDs), and Capacity Development / Training",
        B: "Granting Bachelor and Master degrees",
        C: "Collecting agricultural land revenue taxes",
        D: "Manufacturing heavy commercial tractors"
      },
      correctOption: "A",
      explanation: "KVKs focus on vocational training, On-Farm Testing for technology assessment, and Frontline Demonstrations."
    },
    {
      id: "AEE103-U2-MCQ29",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "The Institution Village Linkage Programme (IVLP) was launched by ICAR in:",
      options: {
        A: "1995",
        B: "1980",
        C: "1970",
        D: "2010"
      },
      correctOption: "A",
      explanation: "IVLP was launched as a pilot project by ICAR in 1995 for technology assessment and refinement (TAR)."
    },
    {
      id: "AEE103-U2-MCQ30",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "The National Agricultural Technology Project (NATP) launched in 1998 was funded by:",
      options: {
        A: "World Bank and Government of India",
        B: "Asian Development Bank only",
        C: "UNESCO",
        D: "International Monetary Fund"
      },
      correctOption: "A",
      explanation: "NATP (1998-2005) was co-funded by the World Bank and GoI, piloting ATMA across 28 districts."
    },
    {
      id: "AEE103-U2-MCQ31",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Hard",
      questionText: "Which landmark district-level extension institution was pioneered under the NATP?",
      options: {
        A: "ATMA (Agricultural Technology Management Agency)",
        B: "Panchayat Samiti",
        C: "NABARD",
        D: "Food Corporation of India"
      },
      correctOption: "A",
      explanation: "ATMA was registered as an autonomous district society under NATP to integrate agriculture and allied departments."
    },
    {
      id: "AEE103-U2-MCQ32",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "The National Agricultural Innovation Project (NAIP) was implemented during:",
      options: {
        A: "2006 to 2014",
        B: "1990 to 1995",
        C: "1965 to 1970",
        D: "1974 to 1980"
      },
      correctOption: "A",
      explanation: "NAIP was launched by ICAR in 2006 with World Bank support to foster end-to-end multi-stakeholder innovation consortia."
    },
    {
      id: "AEE103-U2-MCQ33",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Medium",
      questionText: "Integrated Tribal Development Agency (ITDA) was launched during which Five Year Plan?",
      options: {
        A: "Fifth Five Year Plan (1974-79)",
        B: "First Five Year Plan (1951-56)",
        C: "Ninth Five Year Plan (1997-2002)",
        D: "Twelfth Five Year Plan (2012-17)"
      },
      correctOption: "A",
      explanation: "ITDAs were institutionalized under the Tribal Sub-Plan strategy during the Fifth Five Year Plan."
    },
    {
      id: "AEE103-U2-MCQ34",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Easy",
      questionText: "The Integrated Rural Development Programme (IRDP) was launched nationwide on:",
      options: {
        A: "October 2, 1980",
        B: "August 15, 1975",
        C: "January 26, 1985",
        D: "May 1, 1990"
      },
      correctOption: "A",
      explanation: "Initially piloted in 1978, IRDP was universally expanded to all development blocks in India on October 2, 1980."
    },
    {
      id: "AEE103-U2-MCQ35",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Medium",
      questionText: "What was the primary operating mechanism of the IRDP?",
      options: {
        A: "Providing subsidized bank credit to BPL families to purchase income-generating assets",
        B: "Giving free food grains indefinitely",
        C: "Constructing multi-lane expressways",
        D: "Providing free laptops to urban graduates"
      },
      correctOption: "A",
      explanation: "IRDP combined a government capital subsidy with bank credit to provide income assets (milch cattle, pumpsets, shops)."
    },
    {
      id: "AEE103-U2-MCQ36",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Medium",
      questionText: "Swarnajayanti Gram Swarozgar Yojana (SGSY) was launched in April 1999 by merging which schemes?",
      options: {
        A: "IRDP, TRYSEM, DWCRA, SITRA, GKY, and MWS",
        B: "Only Mid-Day Meal and Sarva Shiksha Abhiyan",
        C: "Only MGNREGA and PMGSY",
        D: "Kisan Credit Card and Crop Insurance"
      },
      correctOption: "A",
      explanation: "SGSY unified six fragmented self-employment programmes into a single self-help group cluster initiative in 1999."
    },
    {
      id: "AEE103-U2-MCQ37",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Medium",
      questionText: "The core functional unit of the SGSY and NRLM poverty alleviation model is the:",
      options: {
        A: "Self-Help Group (SHG)",
        B: "Individual private corporation",
        C: "Large corporate farm",
        D: "District collectorate"
      },
      correctOption: "A",
      explanation: "Both SGSY and NRLM rely on mobilizing 10-20 poor rural women into affinity-based Self-Help Groups (SHGs)."
    },
    {
      id: "AEE103-U2-MCQ38",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Easy",
      questionText: "The National Rural Livelihoods Mission (NRLM) was launched by the Ministry of Rural Development in:",
      options: {
        A: "June 2011",
        B: "April 2001",
        C: "October 1995",
        D: "December 2018"
      },
      correctOption: "A",
      explanation: "NRLM (later renamed Deendayal Antyodaya Yojana - DAY-NRLM) was launched in June 2011 to replace SGSY."
    },
    {
      id: "AEE103-U2-MCQ39",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Medium",
      questionText: "In DAY-NRLM, community women trained to deliver peer agricultural extension are known as:",
      options: {
        A: "Krishi Sakhis",
        B: "Patwaris",
        C: "Gram Pradhans",
        D: "Lekhpals"
      },
      correctOption: "A",
      explanation: "Krishi Sakhis are trained community resource persons who deliver agro-ecological and kitchen garden training to fellow women."
    },
    {
      id: "AEE103-U2-MCQ40",
      syllabusTopic: "Women development programmes",
      difficulty: "Easy",
      questionText: "Rashtriya Mahila Kosh (RMK) was established by the Government of India in which year?",
      options: {
        A: "1993",
        B: "1980",
        C: "2005",
        D: "2015"
      },
      correctOption: "A",
      explanation: "RMK (National Credit Fund for Women) was set up in March 1993 as an apex microfinance body under the Ministry of WCD."
    },
    {
      id: "AEE103-U2-MCQ41",
      syllabusTopic: "Women development programmes",
      difficulty: "Medium",
      questionText: "The primary objective of Rashtriya Mahila Kosh (RMK) was to provide:",
      options: {
        A: "Collateral-free micro-credit to poor women for income-generating micro-enterprises",
        B: "Free university degrees to urban women",
        C: "Free cars to government officials",
        D: "Export subsidies to multinational factories"
      },
      correctOption: "A",
      explanation: "RMK channeled quasi-formal, collateral-free credit through intermediate NGOs/SHGs to poor women lacking collateral."
    },
    {
      id: "AEE103-U2-MCQ42",
      syllabusTopic: "Women development programmes",
      difficulty: "Medium",
      questionText: "Mahila Samridhi Yojana (MSY) was launched on October 2, 1993 to promote:",
      options: {
        A: "Thrift and savings among rural women through designated post office accounts with a government bonus",
        B: "Commercial driving licenses for tractors",
        C: "Free smartphones for schoolgirls",
        D: "Urban shopping malls"
      },
      correctOption: "A",
      explanation: "MSY incentivized rural women to save money in rural post offices by depositing up to ₹300/year with a 25% government bonus."
    },
    {
      id: "AEE103-U2-MCQ43",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Hard",
      questionText: "Which major limitation caused the eventual collapse of F.L. Brayne's Gurgaon Experiment?",
      options: {
        A: "It relied excessively on Brayne's official authority and coercion, lacking genuine community ownership",
        B: "No farmers lived in Gurgaon",
        C: "The British government banned agriculture",
        D: "Pest swarms destroyed all crops"
      },
      correctOption: "A",
      explanation: "Brayne's enthusiasm relied on autocratic bureaucratic pressure; when he transferred, villagers discontinued the practices."
    },
    {
      id: "AEE103-U2-MCQ44",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "The 'Constructive Programme' comprising 18 social and economic items was formulated by:",
      options: {
        A: "Mahatma Gandhi",
        B: "Jawaharlal Nehru",
        C: "Dr. B.R. Ambedkar",
        D: "Lal Bahadur Shastri"
      },
      correctOption: "A",
      explanation: "Gandhiji formulated the Constructive Programme emphasizing charkha, basic sanitation, cottage crafts, and communal unity."
    },
    {
      id: "AEE103-U2-MCQ45",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Medium",
      questionText: "Which foreign philanthropic foundation provided substantial financial and advisory backing for the launching of CDP in 1952?",
      options: {
        A: "Ford Foundation",
        B: "Rockefeller Foundation",
        C: "Bill & Melinda Gates Foundation",
        D: "Carnegie Endowment"
      },
      correctOption: "A",
      explanation: "The Ford Foundation co-funded the initial 55 Community Development Projects and pilot training centres in 1952."
    },
    {
      id: "AEE103-U2-MCQ46",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Hard",
      questionText: "In the T&V system, the technical bridge between research scientists and field-level VEWs was the:",
      options: {
        A: "Subject Matter Specialist (SMS)",
        B: "Village Sarpanch",
        C: "Tehsildar",
        D: "Commercial input dealer"
      },
      correctOption: "A",
      explanation: "SMSs in agronomy, plant protection, and soil science attended monthly research workshops and trained VEWs fortnightly."
    },
    {
      id: "AEE103-U2-MCQ47",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "Frontline Demonstrations (FLDs) conducted by KVKs are distinct from regular state demonstrations because:",
      options: {
        A: "They are designed and directly supervised by agricultural research scientists on farmer fields",
        B: "They are conducted indoors in laboratories only",
        C: "They never use real seeds",
        D: "They are conducted exclusively for university professors"
      },
      correctOption: "A",
      explanation: "FLDs demonstrate newly released technologies directly by scientists with complete input packages on farmer holdings."
    },
    {
      id: "AEE103-U2-MCQ48",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Hard",
      questionText: "Under NATP, the Strategic Research and Extension Plan (SREP) is formulated at which administrative tier?",
      options: {
        A: "District level",
        B: "National cabinet level",
        C: "United Nations level",
        D: "Global level"
      },
      correctOption: "A",
      explanation: "SREP is prepared at the district level using participatory methods to guide ATMA's annual operational priorities."
    },
    {
      id: "AEE103-U2-MCQ49",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Medium",
      questionText: "The 'Panchasutra' (five core principles) of micro-finance in DAY-NRLM Self-Help Groups includes:",
      options: {
        A: "Regular meetings, regular savings, regular internal lending, timely repayment, and up-to-date book-keeping",
        B: "Five free tractors per village",
        C: "Voting in five elections",
        D: "Visiting five foreign countries"
      },
      correctOption: "A",
      explanation: "Panchasutra governs quality SHGs: regular meetings, savings, internal inter-loaning, prompt repayment, and transparent accounts."
    },
    {
      id: "AEE103-U2-MCQ50",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "Spencer Hatch's Marthandam project placed heavy emphasis on which cottage industry to augment farm income?",
      options: {
        A: "Apiculture (Bee-keeping) and poultry",
        B: "Automobile manufacturing",
        C: "Coal mining",
        D: "Ship building"
      },
      correctOption: "A",
      explanation: "Hatch popularized modern box bee-keeping, egg-marketing cooperatives, and poultry breeding in Marthandam."
    },
    {
      id: "AEE103-U2-MCQ51",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Medium",
      questionText: "The administrative head of a Community Development Block created under the CDP (1952) was the:",
      options: {
        A: "Block Development Officer (BDO)",
        B: "District Magistrate (DM)",
        C: "Chief Minister",
        D: "Village Accountant"
      },
      correctOption: "A",
      explanation: "The BDO headed the block development team coordinating agriculture, animal husbandry, health, and cooperatives."
    },
    {
      id: "AEE103-U2-MCQ52",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Medium",
      questionText: "What was a major socio-economic criticism of the 'Contact Farmer' approach in T&V?",
      options: {
        A: "VEWs often selected wealthy, high-caste progressive farmers, neglecting small, marginal, and lower-caste cultivators",
        B: "Contact farmers were all children",
        C: "Contact farmers refused to grow crops",
        D: "Contact farmers charged fees to extension workers"
      },
      correctOption: "A",
      explanation: "Social bias led to elite capture: benefits concentrated around resourceful contact farmers while trickle-down failed."
    },
    {
      id: "AEE103-U2-MCQ53",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Easy",
      questionText: "Which variety of semi-dwarf wheat was famously introduced to India during the HYVP launch in 1966?",
      options: {
        A: "Lerma Rojo 64-A and Sonora 64",
        B: "Sharbati Sonora only",
        C: "Basmati 370",
        D: "Kalyan Sona"
      },
      correctOption: "A",
      explanation: "Norman Borlaug's Mexican dwarf lines Lerma Rojo 64-A and Sonora 64 triggered India's wheat revolution in 1966."
    },
    {
      id: "AEE103-U2-MCQ54",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "On-Farm Testing (OFT) conducted by KVK scientists is primarily designed to:",
      options: {
        A: "Assess and refine agricultural technologies under location-specific farmer conditions before mass dissemination",
        B: "Produce commercial certified seeds for sale",
        C: "Replace private seed companies",
        D: "Construct irrigation canals"
      },
      correctOption: "A",
      explanation: "OFT diagnoses micro-farming systems and refines university recommendations to suit local agro-ecological realities."
    },
    {
      id: "AEE103-U2-MCQ55",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      difficulty: "Hard",
      questionText: "TRYSEM, launched in 1979 as a component of IRDP, stood for:",
      options: {
        A: "Training of Rural Youth for Self-Employment",
        B: "Total Rural Youth Social Education Mission",
        C: "Tribal Rural Youth Solar Energy Mission",
        D: "Technical Research and Youth Skill Expansion Model"
      },
      correctOption: "A",
      explanation: "TRYSEM provided technical and vocational skills to rural BPL youth aged 18-35 to establish micro-enterprises."
    },
    {
      id: "AEE103-U2-MCQ56",
      syllabusTopic: "Women development programmes",
      difficulty: "Medium",
      questionText: "Why was the Rashtriya Mahila Kosh (RMK) termed a 'quasi-formal' microfinance model?",
      options: {
        A: "It did not lend directly to individuals, but provided wholesale funds to grassroots NGOs/SHGs which re-lent to women",
        B: "It was an illegal black market",
        C: "It operated only outside India",
        D: "It lent only in gold bullion"
      },
      correctOption: "A",
      explanation: "RMK operated as an apex wholesale lender, utilizing intermediate voluntary organizations and SHGs as retail channels."
    },
    {
      id: "AEE103-U2-MCQ57",
      syllabusTopic: "Pre-independence extension efforts",
      difficulty: "Medium",
      questionText: "Leonard Elmhirst, who collaborated with Tagore at Sriniketan, was an agronomist from which institution?",
      options: {
        A: "Cornell University, USA",
        B: "Oxford University, UK",
        C: "Harvard University, USA",
        D: "Tokyo University, Japan"
      },
      correctOption: "A",
      explanation: "Leonard Elmhirst was an English agronomist trained at Cornell University who brought scientific methods to Sriniketan."
    },
    {
      id: "AEE103-U2-MCQ58",
      syllabusTopic: "Agricultural development programmes",
      difficulty: "Medium",
      questionText: "The 'Lab to Land' programme was launched by ICAR in which milestone year?",
      options: {
        A: "1979 (ICAR Golden Jubilee)",
        B: "1969",
        C: "1989",
        D: "1999"
      },
      correctOption: "A",
      explanation: "ICAR launched the Lab-to-Land programme in 1979 to commemorate its Golden Jubilee, transferring technologies to 75,000 poor farm families."
    },
    {
      id: "AEE103-U2-MCQ59",
      syllabusTopic: "Post-independence efforts",
      difficulty: "Medium",
      questionText: "In which year did S.K. Dey become the first Union Minister of Community Development in Jawaharlal Nehru's cabinet?",
      options: {
        A: "1956",
        B: "1947",
        C: "1964",
        D: "1971"
      },
      correctOption: "A",
      explanation: "Following his success at Nilokheri, S.K. Dey was appointed Minister for Community Development in 1956."
    },
    {
      id: "AEE103-U2-MCQ60",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      difficulty: "Hard",
      questionText: "The major organizational shift from T&V to ATMA represented a transition from:",
      options: {
        A: "A centralized, top-down, crop-only approach to a decentralized, participatory, multi-disciplinary farming systems approach",
        B: "Free extension to 100% foreign privatized extension",
        C: "Digital apps back to radio only",
        D: "Government officers to military personnel"
      },
      correctOption: "A",
      explanation: "ATMA replaced T&V's rigid single-commodity top-down hierarchy with decentralized, farmer-led, market-oriented farming systems."
    }
  ],
  subjectiveQuestions: [
    {
      id: "AEE103-U2-SUB01",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Medium",
      syllabusTopic: "Pre-independence extension efforts",
      questionText: "Critically evaluate any two major pre-independence rural reconstruction experiments (e.g., Sriniketan and Gurgaon). What were their lasting contributions and causes of failure?",
      modelAnswer: `Pre-independence rural reconstruction in India witnessed visionary efforts by reformers seeking to alleviate rural misery despite colonial neglect.

1. Sriniketan Experiment (1921):
- Founder: Rabindranath Tagore and Leonard K. Elmhirst (Cornell-trained agronomist) at Surul/Shantiniketan, West Bengal.
- Philosophy: "Bring back life in its completeness into the villages." Blending modern farm science with joyful learning, village music, and traditional crafts.
- Key Activities: Establishing dairy and poultry farms, introducing new crops, reviving village cottage crafts (terracotta, leather, handloom), and creating 'Brati Balaks' (youth scout squads for village sanitation and health).
- Lasting Contributions: First project to emphasize rural youth mobilization, cultural dignity, and joyful holistic learning rather than mechanical farm instruction.
- Causes of Failure: Confined to a small cluster of villages; lacked permanent financial support; suffered from Tagore's inability to scale it beyond Shantiniketan without state patronage.

2. Gurgaon Experiment (1920):
- Founder: F.L. Brayne, Deputy Commissioner of Gurgaon District (Punjab/Haryana).
- Core Mechanism: Appointed 'Village Guides' (educated youth posted in villages to serve as friends, philosophers, and guides across sanitation, farming, and education). Promoted rural hygiene (Palewa latrines), tree planting, scouring, and women's education.
- Lasting Contributions: Conceptualized the very first multipurpose frontline village worker, which later inspired Albert Mayer's Gram Sevak.
- Causes of Failure: Heavily reliant on Brayne's autocratic administrative authority and bureaucratic coercion. When Brayne was transferred, villagers abandoned the practices because no genuine inner conviction or democratic local institutions had been built.`,
      outlinePoints: [
        "Historical context of pre-independence rural reconstruction",
        "Sriniketan: founders, holistic philosophy, Brati Balaks, contributions, limitations",
        "Gurgaon: F.L. Brayne, Village Guides, sanitation, contributions, limitations",
        "Key lessons: need for state financial backing and democratic community ownership"
      ]
    },
    {
      id: "AEE103-U2-SUB02",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Hard",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      questionText: "Analyze the Training and Visit (T&V) system of extension. Discuss its core structural features, operational mechanics, achievements, and reasons for its eventual collapse.",
      modelAnswer: `Introduced in India in 1974 by Daniel Benor with World Bank assistance, the Training and Visit (T&V) system aimed to professionalize extension administration by eliminating multi-departmental burdens and establishing strict operational discipline.

Core Structural Features & Operational Mechanics:

1. Single Line of Command:
Extension staff reported exclusively through a unified technical hierarchy: Director of Agriculture → District Extension Officer → Subject Matter Specialists (SMS) → Assistant Extension Officer (AEO) → Village Extension Worker (VEW). Staff were freed from collecting taxes or distributing relief materials.

2. Fixed Fortnightly Schedule:
Each VEW was assigned a defined jurisdiction of 800 to 1,000 farm families divided into 8 groups. The VEW visited each group on a fixed, predictable day once every two weeks.

3. Fortnightly Training & Linkage:
One day every fortnight was dedicated to intensive training where Subject Matter Specialists (SMSs) trained VEWs on only 2-3 specific seasonal technology recommendations ('impact points'). SMSs in turn interacted with State Agricultural University scientists in monthly workshops.

4. Contact Farmer Approach:
VEWs concentrated on roughly 10% designated 'Contact Farmers' representing diverse land classes. Surrounding 'follower farmers' observed and adopted practices through peer diffusion.

Achievements:
- Rapid Diffusion of Green Revolution Technologies: Accelerated adoption of semi-dwarf wheat and paddy varieties, optimal fertilizer doses, and weed control.
- Professionalized Staff: Transformed poorly trained multi-purpose workers into disciplined technical extension agents.

Reasons for Eventual Collapse and Phasing Out:
1. Fiscal Unsustainability: Immense recurring salary costs could not be maintained by state governments once World Bank loan funding ceased.
2. Elite Capture and Inequity: VEWs predominantly chose wealthy, progressive, upper-caste contact farmers; benefits failed to trickle down to smallholders, marginal tenants, and women.
3. Rigid Top-Down Bias: Operated as a one-way technical conveyor belt; failed to listen to farmer constraints or incorporate indigenous knowledge.
4. Single-Commodity Neglect: Focused almost exclusively on food grains (wheat/rice), ignoring livestock, horticulture, agro-forestry, and post-harvest market links.`,
      outlinePoints: [
        "Origin: Daniel Benor, 1974, World Bank collaboration",
        "Four pillars: Single line of command, fixed fortnightly visits, fortnightly SMS training, contact farmers",
        "Green Revolution achievements",
        "Four major failure causes: fiscal burden, elite capture, top-down rigidity, neglect of allied sectors",
        "Transition to ATMA model"
      ]
    },
    {
      id: "AEE103-U2-SUB03",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Post-independence efforts",
      questionText: "Explain the historical significance of the Etawah Pilot Project (1948). Why is it called the testing ground for India's Community Development Programme?",
      modelAnswer: `Launched in September 1948 by American town planner Albert Mayer at Mahewa in Etawah District, Uttar Pradesh, covering 64 villages, the Etawah Pilot Project was India's first post-independence state-sponsored rural development experiment.

Historical Significance:
1. Invention of the Gram Sevak (Village Level Worker): Mayer recognized that illiterate farmers were bewildered by multiple technical officers visiting the village. He created a single, multipurpose frontline worker living among the villagers who handled agriculture, health, and cooperatives, supported by a back-office team of specialists.
2. Pilot for the Community Development Programme (CDP): Etawah proved that rural communities would actively adopt scientific farming (such as Punjab 591 wheat seed) if approached with empathy and coordinated technical support.
3. Democratic Planning: Mayer insisted on grassroots consultation, continuous self-evaluation, and avoiding administrative coercion, establishing the administrative pattern adopted nationwide in the 1952 CDP.`,
      outlinePoints: [
        "Founder: Albert Mayer, 1948, Mahewa (Etawah, UP)",
        "Key innovation: Multipurpose Village Level Worker (Gram Sevak)",
        "Direct prototype and testing ground for CDP (1952)",
        "Democratic methods and technical coordination"
      ]
    },
    {
      id: "AEE103-U2-SUB04",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Post-independence efforts",
      questionText: "Discuss the Nilokheri Experiment ('Mazdoor Manzil'). What were its core principles and achievements under S.K. Dey?",
      modelAnswer: `The Nilokheri Experiment was initiated in 1948 by S.K. Dey (an engineer who later became India's first Union Minister for Community Development) in Karnal district, Haryana.

Core Principles and Mandate:
- Motto: 'Mazdoor Manzil' (Destination through Labor).
- Mandate: To rehabilitate 7,000 Hindu and Sikh refugees displaced from West Pakistan by transforming a malaria-infested swampland into a self-sufficient, productive agro-industrial township.

Key Achievements:
1. Integrated Agro-Industrial Complex: Successfully integrated mechanized farming, poultry, and dairy with small-scale vocational engineering trades (blacksmithy, carpentry, printing, weaving).
2. Right to Work through Self-Reliance: Eliminated the demoralizing refugee 'dole' culture by providing vocational training and productive employment to every able-bodied person.
3. Institutional Training Hub: Nilokheri became the national premier training institute for Block Development Officers (BDOs) and Social Education Organizers under the 1952 CDP.`,
      outlinePoints: [
        "Founder: S.K. Dey, 1948, Karnal (Haryana)",
        "Philosophy: Mazdoor Manzil, rehabilitation through productive labor",
        "Integration of vocational industry with modern agriculture",
        "Legacy as a premier national training hub for community development personnel"
      ]
    },
    {
      id: "AEE103-U2-SUB05",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Medium",
      syllabusTopic: "Agricultural development programmes",
      questionText: "Trace the evolution of agricultural production programmes in India: IADP, IAAP, and HYVP. How did they collectively usher in the Green Revolution?",
      modelAnswer: `In the late 1950s, India faced severe recurring food shortages ('ship-to-mouth' existence relying on US PL-480 wheat imports). In response, the Government shifted from diffuse community development to intensive, production-oriented agricultural technology packages.

1. Intensive Agriculture District Programme (IADP - 1960):
- Origin: Recommended by the 1959 Ford Foundation team report *India's Food Crisis and Steps to Meet It*.
- Approach: Known as the 'Package Programme'. Instead of spreading resources thinly, intensive efforts were concentrated in 7 districts possessing assured irrigation (e.g., Ludhiana in Punjab, Thanjavur in Tamil Nadu, West Godavari in Andhra Pradesh).
- Package Elements: High-quality seeds, chemical fertilizers, pesticides, credit through village cooperatives, storage, and specialized extension staff.

2. Intensive Agriculture Area Programme (IAAP - 1964):
- Expansion: Extending the successful IADP philosophy to 114 districts, focusing intensively on specific commercial crops (rice, wheat, millets, pulses, cotton) with relatively assured water supply.
- Extension Role: Strengthened technical demonstrations and input distribution networks.

3. High Yielding Varieties Programme (HYVP - Kharif 1966):
- Technological Breakthrough: Introduced semi-dwarf, fertilizer-responsive, non-lodging, photo-insensitive wheat (Lerma Rojo, Sonora 64) and paddy (IR-8, Taichung Native-1) developed by Dr. Norman Borlaug and IRRI.
- Concurrence with Inputs: These varieties possessed tremendous genetic yield potential (doubling or tripling traditional yields) when combined with chemical nitrogen and controlled irrigation.

Collective Impact on the Green Revolution:
- IADP and IAAP built the institutional input-supply infrastructure, irrigation canals, and farmer receptivity.
- HYVP provided the revolutionary genetic catalyst.
- Within five years, India transformed from a chronic food-deficit nation into a grain-surplus country, attaining national food self-sufficiency in wheat and rice by the early 1970s.`,
      outlinePoints: [
        "Historical context: 1950s food crisis and US PL-480 dependency",
        "IADP (1960): 'Package Programme', 7 irrigated districts, integrated inputs",
        "IAAP (1964): Extension of package strategy across 114 districts",
        "HYVP (1966): Mexican dwarf wheat and IRRI rice introduction",
        "Synergistic convergence culminating in the Green Revolution"
      ]
    },
    {
      id: "AEE103-U2-SUB06",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Medium",
      syllabusTopic: "Agricultural development programmes",
      questionText: "Examine the role and mandates of Krishi Vigyan Kendras (KVKs) in Indian agricultural extension. How do they differ from State Agricultural Universities and State Departments of Agriculture?",
      modelAnswer: `Established on the recommendations of the Mohan Singh Mehta Committee (1974) with the first centre at Pondicherry, Krishi Vigyan Kendras (KVKs / Farm Science Centres) serve as ICAR's frontline institutional district network (over 730 KVKs operating nationwide).

Core Mandates of Krishi Vigyan Kendras:

1. On-Farm Testing (OFT):
Conducting multi-location participatory trials on farmers' fields to assess, refine, and validate newly developed agricultural technologies under location-specific agro-ecological conditions.

2. Frontline Demonstrations (FLDs):
Demonstrating the agronomic and economic superiority of newly released crop varieties, bio-pesticides, and farm implements directly by scientists on farmers' fields, establishing yield potential and generating farmer feedback.

3. Capacity Development / Vocational Training:
Organizing short-term and long-term vocational training courses for practicing farmers, farm women, rural youth, and grassroots extension personnel on nursery management, organic inputs, polyhouse cultivation, dairying, and mushroom farming.

4. District Technology Hub & Resource Centre:
Producing quality seeds, planting materials, bio-agents, and fingerlings for farmers, while housing diagnostic soil-testing and plant-clinic laboratories.

Institutional Comparison:
- State Agricultural Universities (SAUs): Primary focus is on academic degree education (B.Sc., M.Sc., Ph.D.) and fundamental/applied agricultural research in experimental laboratories.
- State Departments of Agriculture: Primarily responsible for large-scale administrative scheme implementation, input regulatory enforcement (seed/fertilizer licensing), subsidy disbursement, and mass extension across entire districts.
- KVKs: Purely vocational, non-degree, frontline assessment, demonstration, and capacity development bridge connecting SAU/ICAR research with State Departments and farmers.`,
      outlinePoints: [
        "Genesis: Mohan Singh Mehta Committee (1974), Pondicherry debut",
        "Four foundational mandates: OFT, FLDs, Vocational Training, Technology Hub",
        "Comparative analysis: KVKs vs SAUs vs State Agriculture Departments",
        "Significance as district-level scientific extension anchor"
      ]
    },
    {
      id: "AEE103-U2-SUB07",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Agricultural development programmes",
      questionText: "What was the Institution Village Linkage Programme (IVLP)? Explain its 'Technology Assessment and Refinement' (TAR) framework.",
      modelAnswer: `Launched by the Indian Council of Agricultural Research (ICAR) in 1995 across 42 centres, the Institution Village Linkage Programme (IVLP) was designed to operationalize bottom-up technology generation through participatory research.

The Technology Assessment and Refinement (TAR) Framework:
1. Diagnosis of Micro-Farming Systems: Multidisciplinary teams of core scientists (agronomist, soil scientist, plant pathologist, entomologist, extensionist) used PRA techniques to study the total farming system of smallholders.
2. Technology Assessment: Testing whether technologies developed on research station trial plots were agronomically feasible and economically viable under real farmer resource constraints (e.g., poor drainage, low capital).
3. Technology Refinement: Modifying recommendations based on farmer feedback (e.g., adjusting spacing, altering seed rate, or blending organic amendments) before mass dissemination.
4. Paradigm Shift: Shifted the extension model from "transfer of technology" (TOT) to "farmer-participatory research" (FPR).`,
      outlinePoints: [
        "Origin: ICAR, 1995, 42 pilot centres",
        "Multidisciplinary core scientist teams",
        "Technology Assessment under real field resource constraints",
        "Technology Refinement based on farmer feedback",
        "Transition from top-down TOT to participatory research"
      ]
    },
    {
      id: "AEE103-U2-SUB08",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Hard",
      syllabusTopic: "Agricultural development programmes",
      questionText: "Discuss the National Agricultural Technology Project (NATP) and its revolutionary contribution: the Agricultural Technology Management Agency (ATMA).",
      modelAnswer: `The National Agricultural Technology Project (NATP) was implemented from 1998 to 2005 by the Ministry of Agriculture and ICAR with financial assistance from the World Bank. Its most transformative legacy was reforming India's public extension system through ATMA.

Genesis and Need for ATMA:
Under the pre-existing T&V system, extension was top-down, non-participatory, and compartmentalized. Horticulture, animal husbandry, fisheries, and sericulture operated in silos without coordination.

Key Features of the ATMA Model:

1. Autonomous District Society:
Registered under the Societies Registration Act at the district level, chaired by the District Magistrate/Collector with the District Agriculture Officer as Project Director. This granting of administrative and financial autonomy allowed rapid local expenditure without bureaucratic state delays.

2. Multi-Departmental Integration:
Brought agriculture, animal husbandry, fisheries, horticulture, and forestry into a single unified planning body.

3. Strategic Research and Extension Plan (SREP):
Every district prepared an SREP using bottom-up PRA tools to identify farming system constraints and formulate location-specific interventions.

4. Farmer-Led Extension Structures:
- District level: Farmer Advisory Committee (FAC) with 50% farmer representation.
- Block level: Block Technology Team (BTT) composed of technical officers, guided by a Block Farmer Advisory Committee (BFAC).
- Village level: Farmer Interest Groups (FIGs) and Commodity Interest Groups (CIGs).

5. Public-Private Partnerships and Gender Inclusion:
Mandated allocating at least 30% of programme resources towards women farmers and encouraging partnerships with NGOs and input dealers.`,
      outlinePoints: [
        "NATP (1998-2005) background and World Bank funding",
        "Deficiencies of earlier T&V system necessitating reform",
        "ATMA as an autonomous registered district society",
        "SREP preparation using bottom-up PRA",
        "Multi-agency coordination (BTT, BFAC, FAC, FIGs)",
        "Gender inclusion (30% resource reservation for women)"
      ]
    },
    {
      id: "AEE103-U2-SUB09",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Agricultural development programmes",
      questionText: "What was the National Agricultural Innovation Project (NAIP)? Outline its four main project components.",
      modelAnswer: `Launched in July 2006 by ICAR with World Bank funding ($250 million), the National Agricultural Innovation Project (NAIP) succeeded NATP to accelerate collaborative agricultural research and multi-stakeholder innovation.

Four Main Components of NAIP:
1. Component 1: ICAR as a Catalyzing Agent of the National Agricultural Innovation System (NAIS) — Institutional policy reforms, digital knowledge management, and building high-performance computational infrastructure (e.g., CeRA consortium).
2. Component 2: Research on Sustainable Rural Livelihood Security (SRLS) — Targeted research consortia in 150 disadvantaged backward districts to improve food, nutrition, and income security for vulnerable smallholders.
3. Component 3: Research on High-Value Agricultural Production and Value Chains — Public-private consortia working on export-oriented supply chains, post-harvest processing, and commercial biofuels.
4. Component 4: Basic and Strategic Research in Frontier Agricultural Sciences — Cutting-edge research in genomics, nanotechnology, bio-sensors, and climate change adaptation.`,
      outlinePoints: [
        "Launch: July 2006, ICAR + World Bank",
        "Component 1: ICAR organizational & digital reforms (CeRA)",
        "Component 2: Sustainable rural livelihoods in disadvantaged districts",
        "Component 3: High-value value chain consortia with private industry",
        "Component 4: Frontier strategic research (genomics, nanotechnology)"
      ]
    },
    {
      id: "AEE103-U2-SUB10",
      questionType: "LONG_ANSWER",
      maxMarks: 10,
      difficulty: "Medium",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      questionText: "Trace the structural transition from the Integrated Rural Development Programme (IRDP) to Swarnajayanti Gram Swarozgar Yojana (SGSY) and finally to DAY-NRLM.",
      modelAnswer: `India's self-employment poverty alleviation architecture underwent a major paradigm evolution over four decades, shifting from individual asset subsidies to federated women's collective empowerment.

1. Integrated Rural Development Programme (IRDP - 1980):
- Model: Individual-target approach. Targeted below-poverty-line (BPL) households, providing a capital subsidy (25% to 50%) paired with a commercial bank loan to buy productive assets (milch buffaloes, pumpsets, bullock carts).
- Limitations: Chronic leakage and corruption in asset procurement; high non-performing assets (NPAs) for rural banks; lack of forward market linkages; assets often sold off by impoverished families in distress.

2. Swarnajayanti Gram Swarozgar Yojana (SGSY - 1999):
- Structural Shift: Merged six fragmented programmes (IRDP, TRYSEM, DWCRA, SITRA, GKY, MWS) into a unified Self-Help Group (SHG) cluster model.
- Model: Encouraged 10-20 rural poor women to form SHGs, pool monthly savings, establish internal credit, receive revolving funds, and take bank group loans for key micro-enterprise clusters.
- Limitations: Inadequate handholding; heavy reliance on commercial bank discretion; uneven regional performance across states.

3. Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM - 2011 to Present):
- Paradigm Transformation: Shifted from ad-hoc groups to universal social mobilization: organizing at least one woman from every poor rural household into self-managed federated institutions (SHG → Village Organization / VO → Cluster Level Federation / CLF).
- Financial Inclusion: Capitalized with Community Investment Funds (CIF), interest subvention (loans at 7% / 4% on timely repayment), and Bank Sakhis.
- Sustainable Livelihood Ecosystem: Deploying trained community cadre (Krishi Sakhis, Pashu Sakhis) to promote chemical-free natural farming, custom hiring centres, and producer enterprises.`,
      outlinePoints: [
        "Historical overview of rural self-employment strategies",
        "IRDP (1980): Individual asset subsidy model and failure modes",
        "SGSY (1999): Amalgamation and introduction of SHG group approach",
        "DAY-NRLM (2011): Universal mobilization, federated SHG hierarchy (VO, CLF)",
        "Modern livelihood ecosystem: Krishi Sakhis, interest subvention, producer groups"
      ]
    },
    {
      id: "AEE103-U2-SUB11",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Women development programmes",
      questionText: "Explain the mandate, operating mechanism, and impact of Rashtriya Mahila Kosh (RMK).",
      modelAnswer: `Established in March 1993 as an autonomous registered society under the Ministry of Women and Child Development, the Rashtriya Mahila Kosh (RMK / National Credit Fund for Women) was created to meet the unmet credit needs of poor and assetless women.

Mandate and Operating Mechanism:
1. Collateral-Free Micro-Credit: Provided micro-loans to poor women without demanding land titles or physical collateral, which formal commercial banks typically required.
2. Quasi-Formal Wholesale Lender: RMK operated through a two-tier mechanism: it provided wholesale loans at concessional interest rates to intermediate voluntary organizations (NGOs), cooperative societies, and Women Development Corporations, which then re-lent micro-credit to women SHGs.
3. Income Generating Focus: Loans funded agricultural inputs, milch cattle, vegetable vending, petty shops, and handloom weaving.

Impact:
Demonstrated that poor women possess exceptional creditworthiness (repayment rates exceeding 90%), establishing the viability of microfinance that paved the way for modern SHG-bank linkage programs.`,
      outlinePoints: [
        "Establishment: March 1993, Ministry of WCD",
        "Mandate: Collateral-free micro-credit for assetless poor women",
        "Two-tier operating model: Wholesale lending through intermediary NGOs/SHGs",
        "Impact: Proved women's high repayment ethics and catalyzed microfinance growth"
      ]
    },
    {
      id: "AEE103-U2-SUB12",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Women development programmes",
      questionText: "Discuss Mahila Samridhi Yojana (MSY - 1993). How did it promote financial thrift and agency among rural women?",
      modelAnswer: `Launched on October 2, 1993, Mahila Samridhi Yojana (MSY) was a pioneering Central Sector Scheme designed to empower rural adult women through institutional savings and financial independence.

Core Mechanism:
1. Rural Post Office Channel: Rural women aged 18 and above were encouraged to open dedicated individual MSY savings accounts in their local rural post offices with an initial deposit as low as ₹4.
2. 25% Government Incentive Bonus: For every deposit of up to ₹300 kept in the post office account for a 'lock-in' period of 330 days, the Central Government deposited an attractive direct incentive bonus of 25% (₹75 per year).
3. Women's Exclusive Control: The money could be withdrawn exclusively by the woman account holder, safeguarding it from misuse by male relatives.

Contribution to Financial Thrift:
- Mobilized millions of small, hidden savings of rural women into the formal banking system.
- Cultivated the habit of regular thrift and gave rural women economic agency and financial security during family crises.`,
      outlinePoints: [
        "Launch: October 2, 1993, Central Sector Scheme",
        "Utilization of rural post office network",
        "25% government bonus incentive on 330-day savings",
        "Exclusive female ownership preventing diversion by household males",
        "Promoting thrift and formal financial inclusion"
      ]
    },
    {
      id: "AEE103-U2-SUB13",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      questionText: "What is the Integrated Tribal Development Agency (ITDA)? Explain its specific focus in agricultural and rural extension.",
      modelAnswer: `The Integrated Tribal Development Agency (ITDA) is an institutional mechanism established during the Fifth Five-Year Plan (1974-79) under the 'Tribal Sub-Plan' (TSP) strategy to deliver concentrated socio-economic development to contiguous administrative blocks where Scheduled Tribes (ST) constitute 50% or more of the population.

Focus in Agricultural and Rural Extension:
1. Transformation of Shifting Cultivation (Jhum / Podu): Introducing settled terraced cultivation, fruit orchards (cashew, mango, coffee), and agro-forestry to replace ecologically vulnerable slash-and-burn farming.
2. Minor Forest Produce (MFP) Marketing: Supporting tribal gatherers through value addition, processing units, and price stabilization via TRIFED to prevent exploitation by unscrupulous traders.
3. Custom-Hiring & Minor Irrigation: Constructing check dams, lift-irrigation schemes, and distributing tailored agricultural implements adapted to undulating hilly terrains.
4. Culturally Compatible Extension: Deploying tribal language extension literature and local tribal youth as community motivators to preserve tribal cultural autonomy while upgrading farm technologies.`,
      outlinePoints: [
        "Genesis: Fifth Five-Year Plan (1974-79), Tribal Sub-Plan strategy",
        "Targeting blocks with ≥50% Scheduled Tribe concentration",
        "Agricultural interventions: settling shifting cultivation, horticultural orchards",
        "Minor Forest Produce value addition and market security",
        "Culturally empathetic extension delivery"
      ]
    },
    {
      id: "AEE103-U2-SUB14",
      questionType: "COMPARISON",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Post-independence efforts",
      questionText: "Compare the Community Development Programme (CDP, 1952) and the National Extension Service (NES, 1953) in terms of scope, staffing, and budget.",
      modelAnswer: `The CDP and NES were twin post-independence initiatives that established India's grassroots development infrastructure.

1. Scope and Coverage:
- CDP (1952): Commenced intensively in 55 community project areas covering approximately 25,260 villages. Designed as an intensive, comprehensive transformation program covering agriculture, health, education, roads, and sanitation simultaneously.
- NES (1953): Introduced to cover the entire country rapidly with basic extension services. It served as the preparatory permanent framework across all development blocks.

2. Staffing Pattern:
- CDP: Provided a heavy, specialized multidisciplinary block team including BDO, Agricultural Extension Officer, Animal Husbandry Officer, Social Education Organizer, Doctor, Engineer, and 10 Gram Sevaks.
- NES: Had a lighter, less expensive administrative staff structure focused primarily on core agricultural extension, education, and basic sanitation.

3. Budget Allocation:
- CDP: Highly capital-intensive (initial allocation of ₹65 lakhs per community project over 3 years, heavily assisted by US Ford Foundation funds).
- NES: Designed as a low-cost, sustainable model (budget of approximately ₹4.5 lakhs per block over 3 years), focusing on self-help and technical guidance rather than heavy capital subsidies.`,
      outlinePoints: [
        "Comparative table: CDP (1952) vs NES (1953)",
        "Coverage: 55 pilot projects vs nationwide universal rollout",
        "Staffing density: heavy multi-sectoral cadre vs streamlined extension staffing",
        "Financial intensity: capital-heavy Ford Foundation project vs low-cost permanent state apparatus"
      ]
    },
    {
      id: "AEE103-U2-SUB15",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Hard",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system",
      questionText: "What was the role of the Subject Matter Specialist (SMS) in the T&V system? How did they connect research with the field?",
      modelAnswer: `The Subject Matter Specialist (SMS) was the technical intellectual linchpin of Daniel Benor's Training and Visit (T&V) system, stationed at the sub-divisional or district level in disciplines such as Agronomy, Plant Protection, and Soil Science.

Role and Functions of the SMS:
1. Fortnightly Training of VEWs: Spent one full day every two weeks conducting hands-on training for Village Extension Workers (VEWs), teaching them 2-3 specific seasonal 'impact points' (e.g., exact timing of top-dressing urea or scouting for stem borer).
2. Field Diagnostics and Supervision: Spent at least 4 to 6 days per fortnight in the field diagnosing difficult pest outbreaks, nutrient disorders, and inspecting the quality of VEW visits to contact farmers.
3. Monthly Research-Extension Workshops: Attended mandatory 2-day monthly workshops at State Agricultural University research stations. Here, SMSs reviewed current farm problems with research scientists, formulated the technical recommendations for the coming month, and laid out adaptive on-farm research trials.`,
      outlinePoints: [
        "Positioning of SMS at sub-divisional / district level",
        "Fortnightly technical training of VEWs on seasonal 'impact points'",
        "Field diagnostic visits and quality supervision",
        "Monthly Research-Extension workshops with SAU scientists"
      ]
    },
    {
      id: "AEE103-U2-SUB16",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Agricultural development programmes",
      questionText: "What are 'National Demonstrations' (ND)? Why did they represent a revolutionary departure in extension methodology in 1965?",
      modelAnswer: `Initiated in 1965 by the Indian Council of Agricultural Research (ICAR), the National Demonstrations (ND) programme was conceived during the dawn of the Green Revolution to prove the genetic yield potential of new high-yielding crop varieties.

Why It Was a Revolutionary Departure:
1. Demonstrations by Research Scientists: Prior to 1965, demonstrations were conducted solely by junior state extension workers. In ND, research scientists left their ivory-tower trial stations and personally established and conducted demonstrations on ordinary farmers' fields.
2. Direct Proof of Maximum Potential: Designed to prove that yields 3 to 4 times higher than national averages were practically achievable under ordinary farmer soil and water conditions.
3. No Free Giveaways: Demonstrations were carried out on small plots (usually 1 acre) belonging to small/marginal farmers, demonstrating that technology, rather than immense capital wealth, was the decisive factor.
4. Farmer-Scientist Direct Interface: Scientists directly witnessed field problems (salinity, drainage, pests), leading to rapid real-world adjustments in plant breeding priorities.`,
      outlinePoints: [
        "Launch: 1965, ICAR",
        "Direct conduction by research scientists rather than junior field staff",
        "Proving 3-4x yield potential on ordinary farmer plots",
        "Direct scientist-farmer interface accelerating breeding feedback"
      ]
    },
    {
      id: "AEE103-U2-SUB17",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Agricultural development programmes",
      questionText: "Explain the concept and significance of Operational Research Projects (ORP) launched in 1974-75.",
      modelAnswer: `Operational Research Projects (ORP) were initiated by ICAR in 1974-75 to test, adapt, and demonstrate proven agricultural technologies on a contiguous, community-wide scale rather than isolated individual farmer plots.

Key Concept and Significance:
1. Contiguous Watershed / Catchment Scale: Many agricultural technologies cannot succeed on isolated single-acre holdings (e.g., integrated pest management, watershed drainage, soil salinity reclamation, or community rodent control). ORP covered entire villages or watershed catchments (500 to 1,000 hectares) simultaneously.
2. Socio-Economic Barrier Identification: Assessed not just agronomic yield, but the social, institutional, and economic constraints hindering collective farmer action.
3. Inter-Disciplinary Team Approach: Brought together breeders, soil chemists, entomologists, and agricultural economists working alongside local Panchayats and cooperatives.
4. Foundation for Watershed Missions: The methodologies pioneered in ORP projects directly laid the blueprint for India's National Watershed Development Programme for Rainfed Areas (NWDPRA).`,
      outlinePoints: [
        "Launch: 1974-75, ICAR",
        "Whole-community and contiguous watershed scale (500-1000 ha)",
        "Necessity for collective problems (IPM, salinity, soil erosion)",
        "Diagnosis of institutional and socio-economic bottlenecks",
        "Legacy: blueprint for national watershed management programs"
      ]
    },
    {
      id: "AEE103-U2-SUB18",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Medium",
      syllabusTopic: "Social justice and poverty alleviation programmes",
      questionText: "Discuss the 'Panchasutra' and the role of 'Krishi Sakhis' under DAY-NRLM in contemporary rural extension.",
      modelAnswer: `Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM) operates on disciplined community institutional governance known as the 'Panchasutra' and utilizes community cadres like 'Krishi Sakhis' for last-mile extension.

The Panchasutra (Five Golden Principles):
1. Regular Weekly Meetings (Niyamit Baithak)
2. Regular Savings (Niyamit Bachat)
3. Regular Internal Lending (Niyamit Antar-Rin)
4. Timely Repayment of Loans (Niyamit Vapsi)
5. Up-to-date Book-keeping and Accounting (Niyamit Pustak-Sanchalan)
Compliance with the Panchasutra qualifies SHGs for government Revolving Funds and low-interest bank loans.

Role of 'Krishi Sakhis':
- Community Resource Persons (CRPs): Progressive women practicing natural/sustainable agriculture trained intensively by agricultural experts.
- Peer-to-Peer Extension: Delivering practical training on Jeevamrutha preparation, seed germination testing, bio-pesticide concoctions, and nutritional kitchen gardens to fellow SHG members.
- Overcoming Cultural Barriers: Because Krishi Sakhis speak the local dialect and live in the village, rural women consult them freely without the social inhibitions associated with male government officers.`,
      outlinePoints: [
        "DAY-NRLM institutional architecture",
        "Five tenets of Panchasutra (meetings, savings, lending, repayment, book-keeping)",
        "Krishi Sakhis as trained female community resource persons",
        "Promoting agro-ecological practices and nutritional gardens",
        "Cultural accessibility and peer-to-peer empowerment"
      ]
    },
    {
      id: "AEE103-U2-SUB19",
      questionType: "CASE_STUDY",
      maxMarks: 5,
      difficulty: "Hard",
      syllabusTopic: "Agricultural development programmes",
      questionText: "Case Study: A district exhibits severe yield stagnation in pulses, high pest incidence, and fragmented extension across agriculture and animal husbandry departments. How would an ATMA Project Director formulate a Strategic Research and Extension Plan (SREP) to solve these issues?",
      modelAnswer: `Context: District suffering from pulse yield stagnation, pest outbreaks (pod borer), and departmental fragmentation.

Formulation of SREP under ATMA:

1. Participatory Diagnosis (PRA in Agro-Ecological Situations / AES):
The Project Director deploys multidisciplinary teams (agriculture, veterinary, SAU scientists) across all blocks to conduct PRA. Findings reveal: farmers use uncertified seeds susceptible to wilt, overuse synthetic pyrethroids leading to pesticide resistance, and neglect intercropping with fodder legumes.

2. Multi-Departmental Integration:
The SREP brings the Department of Agriculture (seed and bio-control inputs) and Department of Animal Husbandry (promoting dual-purpose cowpea/gram for fodder and soil fertility) into a unified district plan.

3. SREP Strategic Interventions:
- Technology Refinement: Testing wilt-resistant chickpea varieties (e.g., JG-14) through KVK on-farm trials.
- Community IPM: Distributing NPV (Nuclear Polyhedrosis Virus) and pheromone traps through Farmer Interest Groups (FIGs) rather than unguided individual spraying.
- Market Linkages: Organizing pulse growers into Commodity Interest Groups (CIGs) and linking them to NAFED procurement centers for MSP realization.

4. Governance and Funding:
The plan is vetted by the Farmer Advisory Committee (50% farmer members) and approved by the Governing Board chaired by the District Collector, securing direct decentralized central funds.`,
      outlinePoints: [
        "Diagnostic PRA across Agro-Ecological Situations (AES)",
        "Breakdown of departmental silos (Agriculture + Animal Husbandry)",
        "Specific pulse interventions: wilt-resistant seeds, bio-control IPM, fodder integration",
        "Mobilizing Commodity Interest Groups (CIGs) and market linkages",
        "Approval through Farmer Advisory Committee and District Governing Board"
      ]
    },
    {
      id: "AEE103-U2-SUB20",
      questionType: "SHORT_ANSWER",
      maxMarks: 5,
      difficulty: "Easy",
      syllabusTopic: "Pre-independence extension efforts",
      questionText: "State the primary philosophy and three key components of Mahatma Gandhi's 'Sevagram / Wardha' rural reconstruction project.",
      modelAnswer: `Established in 1936 near Wardha in Maharashtra, Sevagram (Village of Service) was Mahatma Gandhi's personal laboratory for practical rural reconstruction, anchored to his overarching philosophy of 'Gram Swaraj' (Village Republics / Self-Sufficiency).

Primary Philosophy:
True independence for India required the comprehensive moral, economic, and social regeneration of its 700,000 villages, transforming each village into a self-reliant, self-governing republic.

Three Key Components:
1. Bread Labor and Khadi (Charkha): Promoting the spinning wheel and handloom weaving to eliminate rural seasonal underemployment, restore rural economic self-sufficiency, and foster dignity of manual labor.
2. Nai Talim (Basic Education / Craft-Centred Education): Educational philosophy integrating academic learning with productive manual crafts (spinning, carpentry, farming) so schooling develops character rather than producing unemployable clerks.
3. Rural Sanitation and Social Equality: Eradication of untouchability, communal harmony, personal scavenging, and construction of sanitary trench latrines to eliminate rural disease and social caste prejudice.`,
      outlinePoints: [
        "Location and founding: 1936, Wardha, Maharashtra",
        "Core philosophy: Gram Swaraj (autonomous, self-reliant village republics)",
        "Charkha and Khadi for economic self-sufficiency and bread labor",
        "Nai Talim (craft-centred basic education)",
        "Sanitation, dignity of labor, and eradication of social untouchability"
      ]
    }
  ],
  flashcards: [
    {
      id: "AEE103-U2-FC01",
      front: "Who founded the Gurgaon Experiment and in which year?",
      back: "F.L. Brayne, Deputy Commissioner of Gurgaon, in 1920.",
      hint: "British civil servant who introduced 'Village Guides'.",
      syllabusTopic: "Pre-independence extension efforts"
    },
    {
      id: "AEE103-U2-FC02",
      front: "What was the frontline change agent called in the Gurgaon Experiment?",
      back: "'Village Guide', appointed to advise villagers on sanitation, schooling, and farming.",
      hint: "Guide to the village.",
      syllabusTopic: "Pre-independence extension efforts"
    },
    {
      id: "AEE103-U2-FC03",
      front: "Where was the Marthandam Project started and who led it?",
      back: "Marthandam (Travancore, Kerala/TN) in 1921 by Dr. Spencer Hatch under the YMCA.",
      hint: "American missionary known for five-fold development.",
      syllabusTopic: "Pre-independence extension efforts"
    },
    {
      id: "AEE103-U2-FC04",
      front: "What were the 'Brati Balaks' in the Sriniketan experiment?",
      back: "Village youth scout squads organized by Rabindranath Tagore for village scouting, sanitation, fire-fighting, and community service.",
      hint: "Boys with a sacred vow.",
      syllabusTopic: "Pre-independence extension efforts"
    },
    {
      id: "AEE103-U2-FC05",
      front: "Who launched the Firka Development Scheme and when?",
      back: "The Government of Madras under Premier Tanguturi Prakasam in 1946 across 34 Firkas.",
      hint: "First state-sponsored pre-independence scheme in South India.",
      syllabusTopic: "Pre-independence extension efforts"
    },
    {
      id: "AEE103-U2-FC06",
      front: "Who initiated the Etawah Pilot Project and what key concept did it introduce?",
      back: "Albert Mayer in 1948 at Mahewa, UP; introduced the multipurpose Village Level Worker (Gram Sevak).",
      hint: "American architect and town planner.",
      syllabusTopic: "Post-independence efforts"
    },
    {
      id: "AEE103-U2-FC07",
      front: "What was the motto of the Nilokheri Experiment?",
      back: "'Mazdoor Manzil' (Destination through Labor), founded by S.K. Dey in 1948 to rehabilitate refugees.",
      hint: "Destination achieved by working hands.",
      syllabusTopic: "Post-independence efforts"
    },
    {
      id: "AEE103-U2-FC08",
      front: "When were the CDP and NES launched in India?",
      back: "Community Development Programme: Oct 2, 1952 (55 projects)\nNational Extension Service: Oct 2, 1953 (nationwide expansion).",
      hint: "Gandhi Jayanti dates in consecutive years.",
      syllabusTopic: "Post-independence efforts"
    },
    {
      id: "AEE103-U2-FC09",
      front: "Who formulated the Training and Visit (T&V) system of extension?",
      back: "Daniel Benor with World Bank assistance, first piloted in India in 1974 in Rajasthan and Madhya Pradesh.",
      hint: "Israeli agricultural extension expert.",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system"
    },
    {
      id: "AEE103-U2-FC10",
      front: "What was the training frequency for VEWs under the T&V system?",
      back: "Fortnightly (once every two weeks for one full day) conducted by Subject Matter Specialists (SMS).",
      hint: "Every 14 days.",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system"
    },
    {
      id: "AEE103-U2-FC11",
      front: "What percentage of farmers were selected as 'Contact Farmers' in T&V?",
      back: "Approximately 10% of farmers in a circle, representing small, medium, and large landholdings.",
      hint: "One in ten.",
      syllabusTopic: "Reorganised extension system: Training and Visit (T&V) system"
    },
    {
      id: "AEE103-U2-FC12",
      front: "Why was IADP (1960) termed the 'Package Programme'?",
      back: "Because it provided a simultaneous package of certified seeds, chemical fertilizers, pesticides, credit, and extension in 7 selected districts.",
      hint: "All inputs bundled together.",
      syllabusTopic: "Agricultural development programmes"
    },
    {
      id: "AEE103-U2-FC13",
      front: "When was the High Yielding Varieties Programme (HYVP) launched?",
      back: "Kharif 1966, introducing semi-dwarf Mexican wheat (Lerma Rojo, Sonora 64) and IRRI rice (IR-8).",
      hint: "The birth year of the Green Revolution in India.",
      syllabusTopic: "Agricultural development programmes"
    },
    {
      id: "AEE103-U2-FC14",
      front: "Which committee recommended Krishi Vigyan Kendras (KVKs)?",
      back: "Dr. Mohan Singh Mehta Committee in 1974; first KVK set up in 1974 at Pondicherry under TNAU.",
      hint: "Report submitted to ICAR in 1974.",
      syllabusTopic: "Agricultural development programmes"
    },
    {
      id: "AEE103-U2-FC15",
      front: "What are the core mandates of a Krishi Vigyan Kendra (KVK)?",
      back: "1. On-Farm Testing (OFT)\n2. Frontline Demonstrations (FLDs)\n3. Capacity Development / Vocational Training\n4. Technology Hub.",
      hint: "Four frontline farm science mandates.",
      syllabusTopic: "Agricultural development programmes"
    },
    {
      id: "AEE103-U2-FC16",
      front: "What does ATMA stand for and under which project was it established?",
      back: "Agricultural Technology Management Agency; established under the National Agricultural Technology Project (NATP, 1998).",
      hint: "Autonomous district society coordinating all farm departments.",
      syllabusTopic: "Agricultural development programmes"
    },
    {
      id: "AEE103-U2-FC17",
      front: "When was IRDP launched nationwide and what was its core mechanism?",
      back: "Launched on October 2, 1980; provided subsidized bank loans to individual BPL families to purchase productive income assets.",
      hint: "Individual asset subsidy program.",
      syllabusTopic: "Social justice and poverty alleviation programmes"
    },
    {
      id: "AEE103-U2-FC18",
      front: "What did Swarnajayanti Gram Swarozgar Yojana (SGSY, 1999) introduce?",
      back: "Shifted poverty alleviation from individual beneficiaries to Self-Help Groups (SHGs) through microfinance and enterprise clusters.",
      hint: "Replaced IRDP with group-based lending.",
      syllabusTopic: "Social justice and poverty alleviation programmes"
    },
    {
      id: "AEE103-U2-FC19",
      front: "What are 'Krishi Sakhis' under DAY-NRLM?",
      back: "Trained female community resource persons who deliver peer-to-peer agro-ecological and kitchen garden training to women SHG members.",
      hint: "Friends of agriculture among rural women.",
      syllabusTopic: "Social justice and poverty alleviation programmes"
    },
    {
      id: "AEE103-U2-FC20",
      front: "What were RMK and MSY launched in 1993?",
      back: "RMK (Rashtriya Mahila Kosh): Collateral-free microfinance for poor women.\nMSY (Mahila Samridhi Yojana): Rural post office savings with a 25% government bonus.",
      hint: "Two landmark women empowerment schemes launched in 1993.",
      syllabusTopic: "Women development programmes"
    }
  ]
};
