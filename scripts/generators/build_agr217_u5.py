"""AGR217 Unit 5 Complete Builder"""
import json
from gen_agr217_u5_notes import u5_notes

TOPICS = [
    "Economic cost-benefit analysis of Natural Farming vs conventional chemical agriculture: input cost reduction, net returns, and risk resilience",
    "Large-scale institutional adoption models: Andhra Pradesh Community-Managed Natural Farming (APCNF) / RySS model and women self-help groups (SHGs)",
    "Government policy frameworks: Paramparagat Krishi Vikas Yojana (PKVY), Bharatiya Prakritik Krishi Paddhati (BPKP), and National Mission on Natural Farming (NMNF)",
    "Certification systems: Participatory Guarantee System for India (PGS-India), Jaivik Bharat logo, and peer-review certification for smallholders",
    "Supply chains and market linkages: Farmer Producer Organizations (FPOs), direct-to-consumer marketing, premium pricing, and carbon credits"
]

mcqs = [
    # ========================== EASY (20) ==========================
    {
        "id": "AGR217-U5-MCQ01",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Easy",
        "questionText": "What happens to a farmer's paid-out operational costs (Cost A1/A2) when transitioning from chemical to Natural Farming?",
        "options": {
            "A": "They increase by 500%",
            "B": "They are slashed by 60% to 85% due to the elimination of purchased synthetic fertilizers and pesticides",
            "C": "They remain exactly identical to conventional farming",
            "D": "They double every growing season"
        },
        "correctOption": "B",
        "explanation": "Natural Farming eliminates purchased synthetic chemicals, reducing paid-out cash costs (Cost A1/A2) by 60% to 85% as inputs are prepared on-farm.",
        "tags": ["Cost Reduction", "Paid-out Costs", "Economics"]
    },
    {
        "id": "AGR217-U5-MCQ02",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Easy",
        "questionText": "Why does net farm income often rise in Natural Farming even during initial transitional seasons?",
        "options": {
            "A": "Because the government buys all crops at 10 times the market price",
            "B": "Because the massive savings from eliminating chemical inputs outweigh any minor transitional yield fluctuations",
            "C": "Because natural farmers work 24 hours without sleep",
            "D": "Because rainfall triples automatically"
        },
        "correctOption": "B",
        "explanation": "Even if yield remains flat or experiences a slight 5-10% adjustment, the dramatic reduction in input expenditures leads to higher net profit margins.",
        "tags": ["Net Returns", "Farm Income", "Input Savings"]
    },
    {
        "id": "AGR217-U5-MCQ03",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "What does 'APCNF' stand for in Indian agricultural development?",
        "options": {
            "A": "Andhra Pradesh Community-Managed Natural Farming",
            "B": "All Punjab Certified Nitrogen Farming",
            "C": "Assam Plantation Coffee and Nut Federation",
            "D": "Association of Private Chemical and Nitrate Formulators"
        },
        "correctOption": "A",
        "explanation": "APCNF stands for Andhra Pradesh Community-Managed Natural Farming, an internationally recognized agro-ecological transformation program.",
        "tags": ["APCNF", "Institutional Model", "Andhra Pradesh"]
    },
    {
        "id": "AGR217-U5-MCQ04",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "Which not-for-profit state government corporation implements the APCNF program in Andhra Pradesh?",
        "options": {
            "A": "Rythu Sadhikara Samstha (RySS)",
            "B": "Bhabha Atomic Research Centre",
            "C": "Indian Oil Corporation",
            "D": "Reserve Bank of India"
        },
        "correctOption": "A",
        "explanation": "Rythu Sadhikara Samstha (RySS) is the special purpose non-profit vehicle set up by the Government of Andhra Pradesh to roll out Natural Farming.",
        "tags": ["RySS", "APCNF", "Institutional Design"]
    },
    {
        "id": "AGR217-U5-MCQ05",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "Which grassroots community institution is the core social engine of farmer mobilization under APCNF?",
        "options": {
            "A": "Women Self-Help Groups (SHGs) and their village federations",
            "B": "Urban commercial banks",
            "C": "Chemical fertilizer dealer associations",
            "D": "Stock exchange brokers"
        },
        "correctOption": "A",
        "explanation": "APCNF leverages the pre-existing network of Women Self-Help Groups (SHGs) and VO/MS federations to drive community adoption and peer monitoring.",
        "tags": ["SHGs", "Women Empowerment", "Grassroots Mobilization"]
    },
    {
        "id": "AGR217-U5-MCQ06",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "Under the Paramparagat Krishi Vikas Yojana (PKVY), what is the total financial assistance provided per hectare over three years?",
        "options": {
            "A": "Rs 5,000",
            "B": "Rs 50,000",
            "C": "Rs 5,00,000",
            "D": "Rs 500"
        },
        "correctOption": "B",
        "explanation": "PKVY provides financial assistance of Rs 50,000 per hectare over a three-year period, with Rs 31,000 given directly for input procurement and bio-fertilizers.",
        "tags": ["PKVY", "Financial Support", "Government Policy"]
    },
    {
        "id": "AGR217-U5-MCQ07",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "What does 'BPKP' stand for in the context of central government agricultural schemes?",
        "options": {
            "A": "Bharatiya Prakritik Krishi Paddhati",
            "B": "Bihar Pesticide and Potassium Plan",
            "C": "Bengal Paddy Krishi Parishad",
            "D": "Bharat Petroleum Kisan Petroleum"
        },
        "correctOption": "A",
        "explanation": "BPKP stands for Bharatiya Prakritik Krishi Paddhati, a central sub-scheme under PKVY launched to promote indigenous cow-based natural farming.",
        "tags": ["BPKP", "Central Scheme", "Prakritik Krishi"]
    },
    {
        "id": "AGR217-U5-MCQ08",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "Along which sacred river is a dedicated 5-km wide Natural Farming corridor being developed under the Namami Gange program?",
        "options": {
            "A": "River Ganga",
            "B": "River Thames",
            "C": "River Amazon",
            "D": "River Nile"
        },
        "correctOption": "A",
        "explanation": "The Namami Gange initiative promotes a 5-km natural farming corridor on both banks of the River Ganga to stop chemical fertilizer and pesticide runoff.",
        "tags": ["Namami Gange", "River Ganga", "Corridor"]
    },
    {
        "id": "AGR217-U5-MCQ09",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "What does 'PGS-India' stand for in agricultural certification?",
        "options": {
            "A": "Participatory Guarantee System for India",
            "B": "Private Grain Standard for India",
            "C": "Pesticide Government Service of India",
            "D": "Public Grocery Store of India"
        },
        "correctOption": "A",
        "explanation": "PGS-India stands for Participatory Guarantee System for India, a decentralized, peer-review-based organic and natural certification system.",
        "tags": ["PGS-India", "Certification", "Peer Review"]
    },
    {
        "id": "AGR217-U5-MCQ10",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "Which unified logo was launched by FSSAI to certify genuine organic and natural agricultural produce in India?",
        "options": {
            "A": "Jaivik Bharat",
            "B": "Chemical Free Green",
            "C": "Kisan Pride",
            "D": "AgriGold"
        },
        "correctOption": "A",
        "explanation": "The 'Jaivik Bharat' logo is India's official certification mark established by FSSAI for food products meeting organic and natural regulatory standards.",
        "tags": ["Jaivik Bharat", "FSSAI", "Logo"]
    },
    {
        "id": "AGR217-U5-MCQ11",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "What is the minimum number of local farmers required to form a Local Group under PGS-India certification?",
        "options": {
            "A": "5 farmers",
            "B": "500 farmers",
            "C": "1000 farmers",
            "D": "1 farmer alone"
        },
        "correctOption": "A",
        "explanation": "Under PGS-India guidelines, a minimum of 5 like-minded neighboring farmers can form a Local Group to conduct mutual peer appraisals.",
        "tags": ["PGS-India", "Local Group", "Peer Appraisal"]
    },
    {
        "id": "AGR217-U5-MCQ12",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "What does 'FPO' stand for in modern agricultural marketing?",
        "options": {
            "A": "Farmer Producer Organization",
            "B": "Fertilizer Processing Outlet",
            "C": "Fixed Price Office",
            "D": "Federal Poultry Operation"
        },
        "correctOption": "A",
        "explanation": "FPO stands for Farmer Producer Organization, an enterprise collectivizing primary producers to build economies of scale in aggregation, grading, and marketing.",
        "tags": ["FPO", "Farmer Producer Organization", "Agri-Business"]
    },
    {
        "id": "AGR217-U5-MCQ13",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "In direct-to-consumer (D2C) marketing of natural produce, what proportion of the consumer rupee does the farmer typically capture?",
        "options": {
            "A": "70% to 85%",
            "B": "Only 5%",
            "C": "Less than 1%",
            "D": "100% loss"
        },
        "correctOption": "A",
        "explanation": "By eliminating middlemen and wholesale commission agents through D2C channels, natural farmers capture 70% to 85% of retail consumer expenditure.",
        "tags": ["D2C", "Consumer Rupee", "Direct Marketing"]
    },
    {
        "id": "AGR217-U5-MCQ14",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "What is 'Pre-Monsoon Dry Sowing' (PMDS) developed under the APCNF program?",
        "options": {
            "A": "Sowing a diverse seed cocktail into dry summer soils before monsoon rains to establish year-round green cover",
            "B": "Drying harvested grain on concrete highways",
            "C": "Burning dry grass in hot summer months",
            "D": "Pumping dry sand into tubewells"
        },
        "correctOption": "A",
        "explanation": "PMDS involves sowing 15-20 species of seeds into dry, unplowed soil during April-May, utilizing atmospheric moisture and Waaphasa to sustain 365-day green cover.",
        "tags": ["PMDS", "Pre-Monsoon Sowing", "APCNF"]
    },
    {
        "id": "AGR217-U5-MCQ15",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Easy",
        "questionText": "How many Bio-Input Resource Centres (BRCs) are planned under the National Mission on Natural Farming (NMNF)?",
        "options": {
            "A": "15,000 BRCs",
            "B": "50 BRCs",
            "C": "10 BRCs",
            "D": "1,000,000 BRCs"
        },
        "correctOption": "A",
        "explanation": "The National Mission on Natural Farming plans to establish 15,000 village-level Bio-Input Resource Centres (BRCs) to make cow-based formulations accessible.",
        "tags": ["BRC", "NMNF", "Bio-Input Centres"]
    },
    {
        "id": "AGR217-U5-MCQ16",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Easy",
        "questionText": "Which national institution acts as the apex Secretariat for PGS-India certification under the Ministry of Agriculture?",
        "options": {
            "A": "National Centre of Organic and Natural Farming (NCONF), Ghaziabad",
            "B": "Coal India Limited",
            "C": "Railway Recruitment Board",
            "D": "Automobile Association of India"
        },
        "correctOption": "A",
        "explanation": "NCONF Ghaziabad (formerly NCOF) is the nodal government agency administering PGS-India standards and regional councils across the country.",
        "tags": ["NCONF", "PGS-India", "Secretariat"]
    },
    {
        "id": "AGR217-U5-MCQ17",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "What is 'Community-Supported Agriculture' (CSA)?",
        "options": {
            "A": "A partnership where consumers buy seasonal subscriptions directly from local natural farms, sharing agricultural risks and harvests",
            "B": "A government scheme to build concrete shopping malls",
            "C": "An export contract with multinational shipping lines",
            "D": "A program to replace all farms with solar panels"
        },
        "correctOption": "A",
        "explanation": "In CSA, local consumers pay upfront seasonal subscriptions to a farmer in exchange for weekly deliveries of fresh produce, fostering trust and financial security.",
        "tags": ["CSA", "Community Agriculture", "Direct Marketing"]
    },
    {
        "id": "AGR217-U5-MCQ18",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Easy",
        "questionText": "How does multi-tier intercropping in Natural Farming buffer farmers against market price volatility?",
        "options": {
            "A": "If the price of one cash crop crashes, income from other pulses, oilseeds, and vegetables compensates for the loss",
            "B": "It forces mandis to buy all crops at Rs 1000 per kg",
            "C": "It prevents crops from growing too tall",
            "D": "It guarantees zero production of food"
        },
        "correctOption": "A",
        "explanation": "Harvesting multiple co-existing crops (grains, legumes, leafy greens) provides regular staggered income, preventing economic disaster if a single crop's price collapses.",
        "tags": ["Crop Diversification", "Risk Mitigation", "Price Volatility"]
    },
    {
        "id": "AGR217-U5-MCQ19",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Easy",
        "questionText": "Who are 'Community Resource Persons' (CRPs) in the APCNF extension model?",
        "options": {
            "A": "Practicing natural farmers trained as peer champions who mentor and handhold neighboring farming families",
            "B": "Foreign pesticide sales executives",
            "C": "Armed security officers guarding crops",
            "D": "Software programmers living in overseas cities"
        },
        "correctOption": "A",
        "explanation": "CRPs are experienced local natural farmers who live in the village and provide empathetic, practical farmer-to-farmer guidance to new adopters.",
        "tags": ["CRPs", "Farmer-to-Farmer", "APCNF Extension"]
    },
    {
        "id": "AGR217-U5-MCQ20",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Easy",
        "questionText": "What additional monetization mechanism allows natural farmers to earn revenue by sequestering atmospheric carbon dioxide in their soils?",
        "options": {
            "A": "Agricultural Soil Carbon Credits",
            "B": "Diesel subsidies",
            "C": "Pesticide rebates",
            "D": "Plastic packaging incentives"
        },
        "correctOption": "A",
        "explanation": "By sequestering carbon into soil through mulching and cover cropping, natural farmers can generate verified soil carbon credits for sale on voluntary carbon markets.",
        "tags": ["Carbon Credits", "SOC", "Monetization"]
    },

    # ========================== MEDIUM (25) ==========================
    {
        "id": "AGR217-U5-MCQ21",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "In CACP agricultural economic methodology, how does the reduction of 'Cost A2' benefit tenant farmers adopting Natural Farming?",
        "options": {
            "A": "Tenant farmers can pay zero rent legally",
            "B": "Because Cost A2 includes leased-in land rent plus paid-out inputs, lowering input costs frees working capital and avoids high-interest informal borrowing",
            "C": "It converts leased land into ancestral owned land automatically",
            "D": "Tenant farmers do not have to weed their fields"
        },
        "correctOption": "B",
        "explanation": "Tenant farmers bear severe operational risk. Slashing cash input outlays reduces working capital requirements, insulating tenants from devastating debt traps.",
        "tags": ["Cost A2", "Tenant Farmers", "Debt Insulation"]
    },
    {
        "id": "AGR217-U5-MCQ22",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "Why is the benefit-cost (B:C) ratio of Natural Farming typically superior to conventional farming despite similar gross output values?",
        "options": {
            "A": "Because the denominator (total cost of cultivation) is dramatically lower while gross returns remain comparable or improve",
            "B": "Because natural farmers receive free diesel from the state",
            "C": "Because the calculation excludes all labor costs",
            "D": "Because B:C ratio in Natural Farming is always fixed at 10.0"
        },
        "correctOption": "A",
        "explanation": "The B:C ratio equals Gross Returns divided by Total Cost. By reducing cultivation costs by 40-70%, the B:C ratio increases significantly even with equal yields.",
        "tags": ["B:C Ratio", "Cost of Cultivation", "Profitability"]
    },
    {
        "id": "AGR217-U5-MCQ23",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "How does the 'Pre-Monsoon Dry Sowing' (PMDS) technique under APCNF contribute to year-round soil microbial survival?",
        "options": {
            "A": "By utilizing summer air conditioning units",
            "B": "Multi-species roots capture atmospheric dew and release continuous rhizosphere exudates, keeping soil microbes active through harsh dry summers",
            "C": "By injecting synthetic glucose solutions into the topsoil",
            "D": "By flooding the fields with 5 feet of municipal wastewater"
        },
        "correctOption": "B",
        "explanation": "PMDS establishes dense root systems that tap nocturnal dew condensation and pump carbon exudates into the soil, preventing microbial dormancy and topsoil death.",
        "tags": ["PMDS", "Microbial Survival", "Rhizosphere Exudates"]
    },
    {
        "id": "AGR217-U5-MCQ24",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "What role do women SHG federations (e.g., Mandal Samakhyas) play in ensuring adherence to Natural Farming protocols under RySS?",
        "options": {
            "A": "They enforce protocols through police arrests",
            "B": "They manage community seed banks, oversee social peer monitoring, and disburse interest-free internal loans for buying native cows",
            "C": "They export all local produce to foreign countries",
            "D": "They manufacture synthetic urea in village centers"
        },
        "correctOption": "B",
        "explanation": "Mandal Samakhyas provide social accountability, manage community bio-resource centres, and support member families with micro-loans for native livestock.",
        "tags": ["Mandal Samakhya", "SHGs", "Social Capital"]
    },
    {
        "id": "AGR217-U5-MCQ25",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "In the PKVY funding breakdown of Rs 50,000 per hectare, what specific amount is earmarked for direct farmer assistance for bio-inputs and seeds?",
        "options": {
            "A": "Rs 31,000 per hectare (62% of total allocation)",
            "B": "Rs 500 per hectare",
            "C": "Rs 50,000 in cash without any conditions",
            "D": "Zero rupees"
        },
        "correctOption": "A",
        "explanation": "Under PKVY, Rs 31,000/ha is disbursed via Direct Benefit Transfer (DBT) to the farmer for purchasing on-farm input materials, botanical seeds, and bio-fertilizers.",
        "tags": ["PKVY DBT", "Funding Breakdown", "Farmer Assistance"]
    },
    {
        "id": "AGR217-U5-MCQ26",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "What key operational distinction exists between Bharatiya Prakritik Krishi Paddhati (BPKP) and general organic farming schemes?",
        "options": {
            "A": "BPKP prohibits all off-farm purchased organic manures (e.g., commercial bio-fertilizers, vermicompost) and insists on 100% on-farm cow formulations and biomass recycling",
            "B": "BPKP encourages synthetic nitrogen sprays once a month",
            "C": "BPKP permits the use of glyphosate on field borders",
            "D": "BPKP requires farmers to export all food to Europe"
        },
        "correctOption": "A",
        "explanation": "BPKP specifically emphasizes zero external purchased inputs—excluding commercial organic brands—and focuses strictly on on-farm biomass and native cow formulations.",
        "tags": ["BPKP Distinction", "Zero Purchased Inputs", "Prakritik Krishi"]
    },
    {
        "id": "AGR217-U5-MCQ27",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "What is the primary role of a 'Bhartiya Prakritik Kheti Bio-Input Resource Centre' (BRC) under the NMNF?",
        "options": {
            "A": "To manufacture synthetic organophosphate pesticides",
            "B": "To prepare and supply standardized, ready-to-use Jeevamrit, Beejamrit, and botanical concoctions to local farmers who do not own cattle",
            "C": "To sell imported hybrid seeds at commercial rates",
            "D": "To conduct computer coding classes for farmers"
        },
        "correctOption": "B",
        "explanation": "BRCs serve as village-level micro-enterprises run by trained entrepreneurs to provide ready-made biological formulations to farmers who lack livestock or labor.",
        "tags": ["BRC", "Bio-Inputs", "Enterprise"]
    },
    {
        "id": "AGR217-U5-MCQ28",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "How does PGS-India certification fundamentally differ from Third-Party NPOP certification regarding financial cost to smallholders?",
        "options": {
            "A": "PGS-India charges Rs 1,00,000 per year per acre",
            "B": "PGS-India is free of certification audit charges for smallholder farmers, whereas NPOP entails heavy fees paid to commercial certification agencies",
            "C": "Both systems require identical international currency payments",
            "D": "NPOP is sponsored for free by the United Nations"
        },
        "correctOption": "B",
        "explanation": "PGS-India eliminates commercial audit fees by utilizing peer evaluation by local farmers, making certification accessible to smallholders with zero out-of-pocket costs.",
        "tags": ["PGS-India vs NPOP", "Certification Cost", "Smallholders"]
    },
    {
        "id": "AGR217-U5-MCQ29",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "What does the 'PGS-India Green' certificate signify during a farm's certification journey?",
        "options": {
            "A": "The farm has completed its full 3-year conversion and is 100% certified organic",
            "B": "The farm is in its conversion/transition period (Year 1 to Year 3) adhering to natural standards under peer supervision",
            "C": "The farm has failed all inspection audits",
            "D": "The farmer is growing only green spinach"
        },
        "correctOption": "B",
        "explanation": "'PGS-India Green' is granted to farms undergoing the mandatory 36-month conversion phase. Full certification grants 'PGS-India Organic' or 'PGS-India Natural'.",
        "tags": ["PGS-India Green", "Conversion Period", "Certification"]
    },
    {
        "id": "AGR217-U5-MCQ30",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "Under PGS-India protocol, what occurs if an individual farmer in a Local Group secretly applies synthetic urea or chemical pesticides?",
        "options": {
            "A": "The farmer is given an award by the group",
            "B": "Peer inspection detects the violation, the individual's certification is suspended, and the group's integrity is safeguarded through collective peer accountability",
            "C": "All other farms in the district are immediately bulldozed",
            "D": "Nothing, synthetic chemicals are allowed under PGS-India"
        },
        "correctOption": "B",
        "explanation": "PGS-India relies on mutual peer appraisal. Violations are reported to the Regional Council, leading to individual suspension and ensuring group-wide compliance.",
        "tags": ["Peer Accountability", "Sanctions", "Compliance"]
    },
    {
        "id": "AGR217-U5-MCQ31",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "How does a Farmer Producer Organization (FPO) address the challenge of small marketable surpluses among individual natural farmers?",
        "options": {
            "A": "By aggregating small volumes into commercial bulk lots, establishing uniform grading, and negotiating directly with institutional buyers",
            "B": "By discarding half of each farmer's harvest",
            "C": "By forcing farmers to store produce inside their homes indefinitely",
            "D": "By banning trade outside the village boundaries"
        },
        "correctOption": "A",
        "explanation": "FPOs pool the modest output of hundreds of smallholders into viable commercial shipments, enabling post-harvest processing, branding, and direct retail access.",
        "tags": ["Aggregation", "FPO", "Economies of Scale"]
    },
    {
        "id": "AGR217-U5-MCQ32",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "What technology is increasingly integrated into natural produce packaging to verify authentic farm origin and build consumer trust?",
        "options": {
            "A": "Dynamic QR codes linking to farm GPS coordinates, farmer profiles, and PGS certification records",
            "B": "Heavy lead seal tags",
            "C": "Chemical color indicator strips that glow under ultraviolet light",
            "D": "Microscopic radioactive isotopes"
        },
        "correctOption": "A",
        "explanation": "Traceable QR codes allow urban consumers to scan retail packages and view verified data on farmer identity, geographic location, harvest dates, and PGS status.",
        "tags": ["Traceability", "QR Codes", "Consumer Trust"]
    },
    {
        "id": "AGR217-U5-MCQ33",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "Why is the working capital requirement in Natural Farming substantially lower than in green-revolution package agriculture?",
        "options": {
            "A": "Because on-farm cow-based concoctions and farm-saved seeds do not require advance cash outlays at the start of the planting season",
            "B": "Because banks give 100% cash subsidies for all seeds",
            "C": "Because natural farmers do not use electricity or water",
            "D": "Because crops grow without any planting"
        },
        "correctOption": "A",
        "explanation": "Conventional agriculture requires heavy upfront cash for chemical bags, hybrid seed packets, and spray canisters. Natural Farming relies on on-farm inputs, eliminating peak liquidity pressure.",
        "tags": ["Working Capital", "Cash Flow", "Liquidity"]
    },
    {
        "id": "AGR217-U5-MCQ34",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "What is the role of a 'Master Farmer' in the APCNF extension hierarchy?",
        "options": {
            "A": "A university professor who lectures once a year",
            "B": "A seasoned practitioner whose own fields serve as live educational demonstration plots for visiting farmers",
            "C": "A government tax collector inspecting grain stores",
            "D": "A tractor rental agency manager"
        },
        "correctOption": "B",
        "explanation": "Master Farmers provide empirical proof of success on their own holdings, hosting field days and teaching practical concoction preparation to neighboring farmers.",
        "tags": ["Master Farmer", "Demonstration Plots", "APCNF"]
    },
    {
        "id": "AGR217-U5-MCQ35",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "Under the NMNF guidelines, who are the 'Krishi Sakhis' mobilized to support women in natural farming?",
        "options": {
            "A": "Trained women community resource persons who promote natural farming practices within Women Self-Help Groups",
            "B": "Urban bank tellers handling check clearing",
            "C": "Engineers building chemical fertilizer factories",
            "D": "Seed testing laboratory clerks in New Delhi"
        },
        "correctOption": "A",
        "explanation": "Krishi Sakhis are trained community women resource persons who facilitate adoption of natural farming techniques among SHG members at the hamlet level.",
        "tags": ["Krishi Sakhi", "Women In Agriculture", "NMNF"]
    },
    {
        "id": "AGR217-U5-MCQ36",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "Which tier in the PGS-India architecture reviews and endorses Local Group peer inspection summaries before issuing certification?",
        "options": {
            "A": "Regional Council (RC)",
            "B": "World Trade Organization (WTO)",
            "C": "International Monetary Fund (IMF)",
            "D": "District Police Station"
        },
        "correctOption": "A",
        "explanation": "Regional Councils (RCs)—typically established NGOs, KVKs, or state agriculture directorates—audit and endorse Local Group peer summary reports.",
        "tags": ["Regional Council", "PGS Architecture", "Governance"]
    },
    {
        "id": "AGR217-U5-MCQ37",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "What economic advantage does 'Participatory Price Discovery' offer to direct-marketing natural farming collectives?",
        "options": {
            "A": "Prices are set cooperatively between conscious urban consumer groups and farmers based on true cost of production rather than speculative mandi volatility",
            "B": "Produce is given away for free",
            "C": "Consumers pay whatever the international oil price dictates",
            "D": "Government fixes the price at Rs 1 per ton"
        },
        "correctOption": "A",
        "explanation": "Participatory price discovery establishes stable, equitable prices negotiated between consumer groups and producer collectives, shielding farmers from price crashes.",
        "tags": ["Price Discovery", "Fair Pricing", "Direct Trade"]
    },
    {
        "id": "AGR217-U5-MCQ38",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "How does the multi-cropping design in Natural Farming alter family labor allocation across the calendar year?",
        "options": {
            "A": "It concentrates all work into 2 stressful days, leaving 363 days completely idle",
            "B": "It smooths labor requirements into productive, continuous employment year-round through staggered intercrop maintenance and harvesting",
            "C": "It eliminates the need for human labor entirely",
            "D": "It forces family members to migrate to overseas cities"
        },
        "correctOption": "B",
        "explanation": "Polycultures and diverse crop calendars distribute labor smoothly across all seasons, replacing the extreme peak/idle cycles of monoculture farming.",
        "tags": ["Labor Allocation", "Employment Smoothing", "Family Labor"]
    },
    {
        "id": "AGR217-U5-MCQ39",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "In the APCNF framework, what is meant by a 'Natural Farming Model Village' (Gram Panchayat)?",
        "options": {
            "A": "A village where 100% of farming households across all contiguous fields adopt Natural Farming, eliminating chemical drift across borders",
            "B": "A village with no trees or livestock",
            "C": "A concrete town with zero agricultural land",
            "D": "A village that uses only imported chemical fertilizers"
        },
        "correctOption": "A",
        "explanation": "A Model Village achieves saturation adoption where every farming family adopts natural methods, creating chemical-free contiguous landscape corridors.",
        "tags": ["Model Village", "Saturation", "Landscape Transition"]
    },
    {
        "id": "AGR217-U5-MCQ40",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Medium",
        "questionText": "Under PKVY guidelines, what is the standardized cluster size recommended for establishing an organic/natural farming group?",
        "options": {
            "A": "50 acres (approx. 20 hectares)",
            "B": "5,000 hectares",
            "C": "0.1 acre",
            "D": "1 square kilometer of desert"
        },
        "correctOption": "A",
        "explanation": "PKVY mandates forming clusters of 50 acres (approx. 20 ha) of contiguous or semi-contiguous land among 20–50 farmers to facilitate group certification.",
        "tags": ["PKVY Cluster Size", "50 Acres", "Group Certification"]
    },
    {
        "id": "AGR217-U5-MCQ41",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "What specific endorsement on the PGS-India portal distinguishes farms practicing zero purchased external inputs from standard organic farms?",
        "options": {
            "A": "PGS-India Natural",
            "B": "PGS-India Hybrid",
            "C": "PGS-India Chemical",
            "D": "PGS-India Synthetic"
        },
        "correctOption": "A",
        "explanation": "The 'PGS-India Natural' tag specifically certifies farms practicing Subhash Palekar Natural Farming principles with zero off-farm commercial inputs.",
        "tags": ["PGS-India Natural", "Zero Input Certification", "Endorsement"]
    },
    {
        "id": "AGR217-U5-MCQ42",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Medium",
        "questionText": "How do voluntary carbon credit verification standards (e.g., Verra, Gold Standard) measure carbon sequestered by natural farming practices?",
        "options": {
            "A": "By counting the number of tractors in the village",
            "B": "Through stratified soil core sampling combined with remote sensing and biogeochemical carbon modeling (e.g., RothC or DNDC)",
            "C": "By asking the local postman for an opinion",
            "D": "By weighing the crop harvest at the mandi"
        },
        "correctOption": "B",
        "explanation": "Soil carbon sequestration is verified through rigorous baseline soil sampling, bulk density testing, satellite NDVI monitoring, and validated carbon cycle models.",
        "tags": ["Carbon Verification", "Verra", "Soil Carbon Modeling"]
    },
    {
        "id": "AGR217-U5-MCQ43",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Medium",
        "questionText": "What microeconomic term describes the condition where a farm household produces enough diverse food crops to fulfill its own dietary nutrition without cash expenditure?",
        "options": {
            "A": "Household Nutritional Self-Reliance",
            "B": "Consumer Surplus Deficit",
            "C": "Deadweight Loss",
            "D": "Stagflation"
        },
        "correctOption": "A",
        "explanation": "Nutritional self-reliance occurs when a diverse polyculture provides grains, pulses, oilseeds, and vegetables, eliminating food purchase expenses and improving health.",
        "tags": ["Nutritional Self-Reliance", "Food Security", "Polyculture"]
    },
    {
        "id": "AGR217-U5-MCQ44",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Medium",
        "questionText": "Why did APCNF prioritize scaling in drought-prone, semi-arid districts like Ananthapuramu in Andhra Pradesh?",
        "options": {
            "A": "Farmers there were wealthy and owned excess groundwater",
            "B": "Severe agrarian distress, frequent crop failure, and extreme climate vulnerability made input cost elimination and soil moisture conservation urgent necessities",
            "C": "Ananthapuramu receives over 3000 mm of rainfall annually",
            "D": "Chemical fertilizer companies had no stores there"
        },
        "correctOption": "B",
        "explanation": "Ananthapuramu represents a chronically drought-prone district where conventional input costs drove severe farmer distress; PMDS and Waaphasa proved transformative.",
        "tags": ["Ananthapuramu", "Climate Vulnerability", "Drought Resilience"]
    },
    {
        "id": "AGR217-U5-MCQ45",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Medium",
        "questionText": "What document must each member of a PGS-India Local Group maintain to record daily field operations, concoction preparations, and intercrop sowings?",
        "options": {
            "A": "Farmer Farm History Sheet / Farmer Diary",
            "B": "A printed bank checkbook",
            "C": "A police clearance certificate",
            "D": "A passport with a valid tourist visa"
        },
        "correctOption": "A",
        "explanation": "Each farmer maintains a simple vernacular Farm Diary documenting sowing dates, inputs applied, and seed sources, which peers inspect during group meetings.",
        "tags": ["Farmer Diary", "Documentation", "PGS-India"]
    },

    # ========================== HARD (15) ==========================
    {
        "id": "AGR217-U5-MCQ46",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Hard",
        "questionText": "In macroeconomic agricultural terms, how does wide-scale adoption of Natural Farming reduce the fiscal burden on the Union Government of India?",
        "options": {
            "A": "By reducing the multi-billion-dollar central chemical fertilizer subsidy bill (urea, DAP, MOP) and saving foreign exchange reserves on LNG/fertilizer imports",
            "B": "By eliminating income tax on corporate executives",
            "C": "By removing all import duties on foreign luxury cars",
            "D": "By shutting down state agricultural universities"
        },
        "correctOption": "A",
        "explanation": "India spends over Rs 1.7 to 2.2 lakh crore annually on fertilizer subsidies. Widespread natural farming adoption directly reduces fiscal outlays and import bills.",
        "tags": ["Fertilizer Subsidy", "Fiscal Relief", "Macroeconomics"]
    },
    {
        "id": "AGR217-U5-MCQ47",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Hard",
        "questionText": "Using the Comprehensive Scheme for Studying the Cost of Cultivation of Principal Crops (CSCP), which specific cost category accounts for the greatest percentage drop when switching to Natural Farming?",
        "options": {
            "A": "Material Input Expenditure (Fertilizers, Chemicals, Plant Protection)",
            "B": "Rent paid for leased-in land",
            "C": "Land revenue and cesses paid to state government",
            "D": "Depreciation on farm buildings"
        },
        "correctOption": "A",
        "explanation": "Material input outlays for synthetic fertilizers, fungicides, and insecticides drop to near zero, accounting for the single largest cost reduction in the CACP accounting matrix.",
        "tags": ["CACP Matrix", "Material Inputs", "Cost Decomposition"]
    },
    {
        "id": "AGR217-U5-MCQ48",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Hard",
        "questionText": "What sociological and behavioral mechanism underpins the effectiveness of APCNF's 'Farmer-to-Farmer' extension over conventional bureaucratic T&V (Training and Visit) systems?",
        "options": {
            "A": "Homophily and experiential credibility: resource-poor farmers trust peers who share identical socio-economic constraints and farm the same soils successfully",
            "B": "CRPs use legal penalties to force compliance",
            "C": "T&V extension agents speak only Latin",
            "D": "CRPs distribute free chemical pesticides at night"
        },
        "correctOption": "A",
        "explanation": "Diffusion of Innovations research demonstrates that homophilous communication (peer-to-peer) produces high experiential trust, overcoming risk aversion.",
        "tags": ["Diffusion of Innovations", "Homophily", "Extension Theory"]
    },
    {
        "id": "AGR217-U5-MCQ49",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Hard",
        "questionText": "In the APCNF Pre-Monsoon Dry Sowing (PMDS) model, how does a 15-to-20 seed cocktail mimic natural ecological succession to survive severe 45°C summer heat?",
        "options": {
            "A": "Diverse root architectures (taproots, fibrous roots) tap distinct soil zones, while varying drought-tolerant canopies establish a synergistic microclimate",
            "B": "Seeds are coated with synthetic plastic heat shields",
            "C": "Seeds undergo genetic engineering to synthesize antifreeze proteins",
            "D": "The crop cocktail survives by burning underlying soil minerals"
        },
        "correctOption": "A",
        "explanation": "The complementary mix of grasses, pulses, oilseeds, and millets creates an interactive root-soil hydraulic redistribution network, maintaining canopy transpiration cooling.",
        "tags": ["PMDS Ecology", "Hydraulic Redistribution", "Succession"]
    },
    {
        "id": "AGR217-U5-MCQ50",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Hard",
        "questionText": "Under the National Mission on Natural Farming (NMNF) operational guidelines, what institutional role is designated for Krishi Vigyan Kendras (KVKs)?",
        "options": {
            "A": "Establishing dedicated 1-hectare Natural Farming demonstration models, conducting scientific validation trials, and training Master Trainers",
            "B": "Selling commercial synthetic insecticides at wholesale rates",
            "C": "Issuing commercial export licenses to international trading houses",
            "D": "Operating commercial poultry hatcheries exclusively"
        },
        "correctOption": "A",
        "explanation": "KVKs are tasked with setting up verified 1-hectare demonstration plots, conducting long-term agronomic validation, and training field facilitators (Krishi Sakhis/CRPs).",
        "tags": ["KVK Mandate", "NMNF", "Demonstration Models"]
    },
    {
        "id": "AGR217-U5-MCQ51",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Hard",
        "questionText": "How does the BPKP framework resolve the potential labor constraint in smallholder natural farming households?",
        "options": {
            "A": "By supporting village-level Custom Hiring Centres (CHCs) and micro-enterprise Bio-Input Resource Centres (BRCs) to mechanize and outsource concoction production",
            "B": "By importing foreign migrant workers",
            "C": "By mandating 18-hour workdays for school children",
            "D": "By banning all farm tools and machinery"
        },
        "correctOption": "A",
        "explanation": "Establishing local BRCs allows farmers to purchase freshly prepared Jeevamrit or Neemastra at nominal cost, overcoming on-farm labor constraints for concoction preparation.",
        "tags": ["Labor Constraint", "BRC Micro-Enterprise", "Mechanization"]
    },
    {
        "id": "AGR217-U5-MCQ52",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Hard",
        "questionText": "Under ISO/IEC 17065 conformity assessment guidelines, why does PGS-India represent a 'First-Party / Second-Party Participatory System' rather than a 'Third-Party Audited System'?",
        "options": {
            "A": "Because assessment is conducted collaboratively by the producers themselves and their immediate peer community based on shared norms, rather than external commercial audit corporations",
            "B": "Because it has no inspection rules or guidelines",
            "C": "Because only government ministers are allowed to inspect farms",
            "D": "Because PGS certificates expire within 24 hours"
        },
        "correctOption": "A",
        "explanation": "First/second-party participatory systems rely on peer stakeholder verification, shared values, and horizontal transparency rather than detached third-party paid audits.",
        "tags": ["Conformity Assessment", "Peer Certification", "ISO Frameworks"]
    },
    {
        "id": "AGR217-U5-MCQ53",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Hard",
        "questionText": "What regulatory mandate does FSSAI's Food Safety and Standards (Organic Foods) Regulations, 2017 enforce regarding PGS-India certified produce?",
        "options": {
            "A": "Produce bearing the PGS-India Green/Organic logo and Jaivik Bharat identity is legally recognized as compliant organic food for commercial sale in domestic Indian markets",
            "B": "It mandates that all PGS-India produce must be destroyed at the border",
            "C": "It requires PGS-India farmers to pay a 50% luxury sales tax",
            "D": "It bans the retail sale of all natural foods in grocery stores"
        },
        "correctOption": "A",
        "explanation": "The FSSAI Organic Food Regulations formally recognize PGS-India certification as equivalent to NPOP for all domestic retail trade, protecting smallholders legally.",
        "tags": ["FSSAI Regulations", "Jaivik Bharat", "Legal Recognition"]
    },
    {
        "id": "AGR217-U5-MCQ54",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "In agricultural supply chain analysis, how does an FPO selling directly to urban institutional buyers alter the 'Price Spread'?",
        "options": {
            "A": "It shrinks the price spread by bypassing commission agents and multi-tiered wholesalers, returning a higher share of consumer expenditure to farmers",
            "B": "It widens the price spread to infinity",
            "C": "It guarantees that consumers pay double the export price",
            "D": "Price spread cannot be measured in agriculture"
        },
        "correctOption": "A",
        "explanation": "The price spread is the difference between consumer retail price and farmgate price. By compressing intermediate trading tiers, FPOs drastically narrow this spread.",
        "tags": ["Price Spread", "Supply Chain", "Value Capture"]
    },
    {
        "id": "AGR217-U5-MCQ55",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "What additionality criterion must a natural farming carbon offset project satisfy to register under international carbon registries (e.g., Verra VM0042)?",
        "options": {
            "A": "Demonstrating that the carbon sequestration and agricultural practice adoption would NOT have occurred in the absence of carbon finance incentives",
            "B": "Proving that the farm emits zero oxygen",
            "C": "Requiring all farmers to buy electric tractors",
            "D": "Planting only eucalyptus trees"
        },
        "correctOption": "A",
        "explanation": "Additionality requires empirical evidence that the regenerative practices and carbon uptake exceed business-as-usual scenarios and depend on carbon market revenues.",
        "tags": ["Carbon Additionality", "Verra VM0042", "Offset Verification"]
    },
    {
        "id": "AGR217-U5-MCQ56",
        "syllabusTopic": TOPICS[0],
        "difficulty": "Hard",
        "questionText": "In farm enterprise budget analysis, how does the elimination of chemical pesticides affect the 'Yield Variance' (downside production risk) during extreme weather seasons?",
        "options": {
            "A": "Healthy, biologically active soils with high organic matter retain moisture better, resulting in lower yield variability and reduced downside risk during droughts",
            "B": "Downside risk increases to 100% loss every year",
            "C": "Pesticide elimination causes immediate crop death during rain",
            "D": "Yield variance is unaffected by soil biology"
        },
        "correctOption": "A",
        "explanation": "Soils with high humus and active mycorrhizal networks retain 1.5–2 times more plant-available water, significantly lowering yield variance during dry spells.",
        "tags": ["Yield Variance", "Climate Resilience", "Downside Risk"]
    },
    {
        "id": "AGR217-U5-MCQ57",
        "syllabusTopic": TOPICS[1],
        "difficulty": "Hard",
        "questionText": "How does the 'Pre-Monsoon Dry Sowing' model generate an economic 'crop season' where no agriculture was historically possible in rainfed regions?",
        "options": {
            "A": "It creates a harvestable green biomass / vegetable window during the hot fallow summer (April-June), generating bonus household income and fodder before Kharif",
            "B": "It turns dry soil into solid gold bars",
            "C": "It relies on massive diesel-powered air heaters",
            "D": "It replaces crops with artificial plastic turf"
        },
        "correctOption": "A",
        "explanation": "By establishing crops before the monsoon using dew and deep soil vapor, PMDS harvests leafy greens, pulses, and livestock fodder during the traditionally barren summer fallow.",
        "tags": ["PMDS Economics", "Fallow Utilization", "Bonus Window"]
    },
    {
        "id": "AGR217-U5-MCQ58",
        "syllabusTopic": TOPICS[2],
        "difficulty": "Hard",
        "questionText": "What is the strategic objective of pairing the National Mission on Natural Farming with the DAY-NRLM (National Rural Livelihoods Mission) framework?",
        "options": {
            "A": "To leverage over 80 million organized rural women across 7 million SHGs as rapid diffusion nodes for natural farming technologies and bio-enterprises",
            "B": "To construct highway toll booths in rural areas",
            "C": "To train rural youth in commercial airline piloting",
            "D": "To shut down all village dairy cooperatives"
        },
        "correctOption": "A",
        "explanation": "Linking with DAY-NRLM leverages the vast existing network of organized women SHGs, empowering them as natural farming extensionists and bio-enterprise operators.",
        "tags": ["DAY-NRLM", "SHG Federation", "Scaling Strategy"]
    },
    {
        "id": "AGR217-U5-MCQ59",
        "syllabusTopic": TOPICS[3],
        "difficulty": "Hard",
        "questionText": "Why does the European Union (EU) and USDA NOP historically restrict mutual recognition of PGS-India certified commodities for international export?",
        "options": {
            "A": "International export protocols under ISO 17065 mandate independent, third-party accredited conformity assessments to prevent perceived producer conflicts of interest",
            "B": "PGS-India produces food that contains too much gold",
            "C": "India does not have any cargo ships",
            "D": "PGS-India farmers refuse to use English numbers"
        },
        "correctOption": "A",
        "explanation": "Global export standards traditionally demand third-party commercial verification (NPOP/ISO 17065) rather than peer-review systems, keeping PGS focused on domestic markets.",
        "tags": ["Export Restrictions", "ISO 17065", "Domestic Focus"]
    },
    {
        "id": "AGR217-U5-MCQ60",
        "syllabusTopic": TOPICS[4],
        "difficulty": "Hard",
        "questionText": "In life cycle assessment (LCA) and environmental economics, what 'positive externalities' of Natural Farming are currently uncompensated in conventional market pricing?",
        "options": {
            "A": "Groundwater recharge, pollinator conservation, elimination of toxic nitrate leaching, and carbon sequestration",
            "B": "Generation of radioactive waste and toxic heavy metals",
            "C": "Increasing the salt content of ocean waters",
            "D": "Depletion of atmospheric oxygen levels"
        },
        "correctOption": "A",
        "explanation": "Positive externalities are unpriced ecological benefits (clean aquifers, thriving bee colonies, carbon capture) that Natural Farming delivers without market reward.",
        "tags": ["Positive Externalities", "Environmental Economics", "LCA"]
    }
]

subjs = [
    # 8 SHORT_ANSWER (5 marks each, ~150-250 words)
    {
        "id": "AGR217-U5-SUB01",
        "syllabusTopic": TOPICS[0],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain how transitioning to Natural Farming restructures the agricultural cost of cultivation (Cost A1 and Cost A2) for smallholders.",
        "modelAnswer": """In Indian agricultural economics (Commission for Agricultural Costs and Prices - CACP methodology), Cost A1 represents the total paid-out operational expenses incurred by the farmer, including purchased seeds, chemical fertilizers, pesticides, manure, irrigation fees, and hired labor. Cost A2 includes Cost A1 plus rent paid for leased-in land.

In green-revolution agriculture, Cost A1/A2 constitutes the largest drain on farmer finances, consuming 50% to 70% of gross revenue and driving smallholders into high-interest debt with informal moneylenders.

Transitioning to Natural Farming fundamentally restructures this cost architecture:
1. Elimination of Purchased Inputs: Synthetic fertilizers (urea, DAP, MOP), hybrid seeds, and chemical pesticides are replaced by on-farm biological formulations (Jeevamrit, Beejamrit, Neemastra, Dashparni Ark) and indigenous farm-saved seeds.
2. Slashing Paid-Out Expenditure: Cost A1/A2 drops precipitously by 60% to 85%. Cash expenditures are restricted to nominal labor and machinery hire.
3. Liquidity and Debt Insulation: By decoupling the production process from retail input markets, smallholders no longer require upfront seasonal borrowing. Consequently, even if crop yields remain flat during initial transition seasons, net farm income increases immediately due to reduced operational overhead.""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["Cost A1", "Cost A2", "CACP", "Debt Insulation", "Economics"]
    },
    {
        "id": "AGR217-U5-SUB02",
        "syllabusTopic": TOPICS[0],
        "questionType": "SHORT_ANSWER",
        "questionText": "Discuss how polyculture and multi-tier cropping systems in Natural Farming reduce market price and climate risks.",
        "modelAnswer": """Monoculture cropping in conventional agriculture exposes farmers to acute market price volatility and climate vulnerability. If unseasonal rainfall, pest outbreaks, or market price crashes hit a single cash crop, the farming household faces devastating financial losses.

Natural Farming hedges against these systemic risks through multi-tier polycultures and intercropping:
1. Economic Risk Diversification: By intercropping cereals with pulses, oilseeds, and vegetables (e.g., maize + cowpea + marigold + leafy greens), farmers do not rely on a single harvest. If the market price of maize drops, returns from cowpea and vegetables buffer total revenue.
2. Staggered Cash Flow: Short-duration leafy vegetables and green pods yield daily or weekly income within 30 to 45 days of sowing, providing continuous household liquidity rather than forcing families to wait months for a single seasonal harvest.
3. Climate Resilience and Water Use Efficiency: Polycultures combine crops with differing root depths, water requirements, and canopy heights. During dry spells, deep-rooted legumes access subsoil moisture and fix nitrogen, while low-stature companion crops shade the soil surface, reducing evaporative loss.

Polyculture functions as an ecological insurance policy, stabilizing household income across diverse climatic and market scenarios.""",
        "marks": 5,
        "bloomLevel": "Understand",
        "tags": ["Polyculture", "Risk Diversification", "Staggered Cash Flow", "Climate Resilience"]
    },
    {
        "id": "AGR217-U5-SUB03",
        "syllabusTopic": TOPICS[1],
        "questionType": "SHORT_ANSWER",
        "questionText": "Describe the institutional architecture of the Rythu Sadhikara Samstha (RySS) and its role in implementing APCNF.",
        "modelAnswer": """Rythu Sadhikara Samstha (RySS) is a dedicated, non-profit, state-owned corporation established by the Government of Andhra Pradesh to spearhead the Andhra Pradesh Community-Managed Natural Farming (APCNF) program. Its mandate is to transition all 6 million farmers in the state across 6 million hectares to climate-resilient natural farming.

Key Features of the RySS Institutional Architecture:
1. Operational Autonomy: Structured as an independent Section 8 non-profit company, RySS operates outside traditional bureaucratic administrative bottlenecks, enabling agile program design, flexible fund deployment, and direct field coordination.
2. Women-Centric Mobilization: RySS partnered with the state's established Women Self-Help Group (SHG) federations (SERP/Velugu). Women SHGs manage community revolving funds, monitor field compliance, and lead household-level dietary transitions.
3. Community-Driven Extension: Rather than relying on top-down official extension, RySS built a cadre of thousands of Community Resource Persons (CRPs) and Master Farmers—practicing natural farmers who live in villages and provide continuous hands-on mentorship.
4. Scientific Collaboration and Knowledge Generation: RySS collaborates with premier national and international research organizations (ICAR, UNEP, FAO, CIRAD, Reading University) to conduct rigorous longitudinal studies evaluating soil health, crop yields, and socio-economic outcomes.

RySS serves as a globally recognized benchmark for large-scale institutional transformation in regenerative agriculture.""",
        "marks": 5,
        "bloomLevel": "Understand",
        "tags": ["RySS", "APCNF", "Institutional Architecture", "Extension"]
    },
    {
        "id": "AGR217-U5-SUB04",
        "syllabusTopic": TOPICS[1],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the concept, methodology, and agronomic significance of Pre-Monsoon Dry Sowing (PMDS).",
        "modelAnswer": """Pre-Monsoon Dry Sowing (PMDS) is an innovative agro-ecological technology developed and scaled under the APCNF program in Andhra Pradesh, designed to maintain living green plant cover 365 days a year in rainfed environments.

Concept and Methodology:
- Timing: Sown during the peak summer dry months (April–May), well before the arrival of the southwest monsoon, when soils are dry and ambient temperatures reach 40°C–45°C.
- Seed Cocktail: A diverse mix of 15 to 20 different crop species is assembled, including cereals (millets, sorghum), pulses (cowpea, green gram, black gram), oilseeds (sesame, groundnut), and fiber crops (sunnhemp).
- Seed Treatment and Sowing: Seeds are treated with Beejamrit and Ghanajeevamrit, then broadcast directly into untilled dry soil without pre-sowing irrigation.
- Moisture Dynamics: The seeds utilize nocturnal atmospheric humidity, dew condensation, and deep capillary water vapor (Waaphasa) to germinate and establish hardy root systems.

Agronomic Significance:
1. 365-Day Living Root System: Ensures continuous secretion of photosynthetic root exudates, keeping the soil food web active throughout the hot summer when land historically sat barren.
2. Microclimate Cooling: Developing green canopies drop topsoil temperatures by 5°C to 10°C, halting microbial mortality and soil thermal degradation.
3. Summer Harvest and Fodder: Produces nutritious leafy greens, pulses, and green livestock fodder during the traditionally dry pre-Kharif fallow window, generating supplemental income.""",
        "marks": 5,
        "bloomLevel": "Apply",
        "tags": ["PMDS", "Pre-Monsoon Sowing", "Soil Biology", "Waaphasa"]
    },
    {
        "id": "AGR217-U5-SUB05",
        "syllabusTopic": TOPICS[2],
        "questionType": "SHORT_ANSWER",
        "questionText": "Outline the objectives, funding structure, and operational components of Paramparagat Krishi Vikas Yojana (PKVY).",
        "modelAnswer": """Paramparagat Krishi Vikas Yojana (PKVY) was launched in 2015 by the Ministry of Agriculture and Farmers Welfare as a dedicated sub-mission under the National Mission for Sustainable Agriculture (NMSA) to promote traditional organic and natural farming.

Core Objectives:
1. Promote eco-friendly, chemical-free agricultural production systems to enhance soil health and organic matter.
2. Reduce the cost of cultivation by supporting on-farm production of organic bio-inputs.
3. Empower smallholders through cluster-based participatory certification and market integration.

Funding Structure:
- Financial Assistance: PKVY provides total assistance of Rs 50,000 per hectare over a three-year period.
- Direct Benefit Transfer (DBT): Out of the total allocation, Rs 31,000 (62%) is transferred directly to the farmer's bank account for purchasing organic seeds, bio-fertilizers, bio-pesticides, and input preparation drums.
- Extension and Value Addition: The remaining Rs 19,000 per hectare covers cluster formation, capacity building, farmer mobilization, PGS-India certification, packaging, labeling, and transportation to local markets.

Operational Components:
- Cluster Approach: PKVY operates via 50-acre (20-hectare) farmer clusters formed by 20 to 50 contiguous farmers.
- Certification: Adopts the Participatory Guarantee System for India (PGS-India) for cost-free, decentralized peer-reviewed certification.""",
        "marks": 5,
        "bloomLevel": "Understand",
        "tags": ["PKVY", "Financial Outlay", "Cluster Approach", "DBT"]
    },
    {
        "id": "AGR217-U5-SUB06",
        "syllabusTopic": TOPICS[2],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the operational role and economic model of Bio-Input Resource Centres (BRCs) under the National Mission on Natural Farming.",
        "modelAnswer": """Bio-Input Resource Centres (BRCs) are village-level micro-enterprises established under the National Mission on Natural Farming (NMNF) to overcome labor and livestock constraints among smallholders transitioning to natural farming.

Operational Role:
1. Standardized Bio-Input Preparation: BRCs produce high-quality, standardized batches of cow-based biological formulations—including Jeevamrit, Beejamrit, Ghanajeevamrit, Neemastra, Brahmastra, Agniastra, and Dashparni Ark.
2. Support for Landless and Non-Cattle Farmers: A major obstacle in natural farming is that landless or livestock-deprived farmers lack access to indigenous cow dung and cow urine. BRCs bridge this gap by making freshly prepared formulations readily available locally.
3. Quality Assurance: Trained BRC operators follow strict scientific protocols for fermentation, ingredient ratios, and shelf-life management.

Economic Model:
- Enterprise Setup: NMNF plans to establish 15,000 BRCs nationwide, offering capital assistance to local rural youth, Women Self-Help Groups (SHGs), or Farmer Producer Organizations (FPOs) to install drums, grinders, storage tanks, and packaging equipment.
- Revenue Generation: BRCs sell concoctions to surrounding farmers at nominal, accessible rates (e.g., Rs 5–10 per liter for Jeevamrit), covering raw material and operational costs while providing sustainable livelihoods for rural operators.

BRCs decentralize input availability, transforming natural farming inputs into an accessible community utility.""",
        "marks": 5,
        "bloomLevel": "Apply",
        "tags": ["BRC", "Bio-Inputs", "Micro-Enterprise", "NMNF"]
    },
    {
        "id": "AGR217-U5-SUB07",
        "syllabusTopic": TOPICS[3],
        "questionType": "SHORT_ANSWER",
        "questionText": "Explain the operational methodology of the Participatory Guarantee System for India (PGS-India) and how peer appraisals work.",
        "modelAnswer": """The Participatory Guarantee System for India (PGS-India) is a decentralized, community-driven certification system administered by the National Centre of Organic and Natural Farming (NCONF) under the Ministry of Agriculture. It certifies organic and natural farming products based on active peer participation, social trust, and collective responsibility.

Operational Methodology and Peer Appraisal:
1. Formation of Local Group (LG): A minimum of 5 like-minded neighboring farmers within a village or contiguous hamlet form a Local Group. They elect a Group Leader and a convener to manage records.
2. Shared Pledge: Each member signs an operational commitment agreeing to follow zero synthetic chemical inputs and adhere to natural farming practices.
3. Farm History Sheet / Diary: Every farmer maintains a simple vernacular record detailing sowing dates, seed varieties, biological formulations used, and field maintenance.
4. Peer Appraisal Process:
   - Rather than relying on paid external corporate auditors, members inspect each other's fields during critical growth stages.
   - A peer review committee of at least 3 neighboring farmers walks the plots, verifying the absence of synthetic fertilizer bags, checking concoction preparation barrels, and inspecting field bunds for chemical spray drift.
   - The inspection findings are reviewed openly in regular Local Group meetings. If non-compliance is identified, corrective action or suspension is voted on collectively.
5. Endorsement by Regional Council: Peer review summaries are uploaded to the PGS-India web portal and verified by an accredited Regional Council (RC) before certification is issued.""",
        "marks": 5,
        "bloomLevel": "Understand",
        "tags": ["PGS-India", "Peer Appraisal", "Local Group", "Certification Process"]
    },
    {
        "id": "AGR217-U5-SUB08",
        "syllabusTopic": TOPICS[4],
        "questionType": "SHORT_ANSWER",
        "questionText": "How do agricultural soil carbon credits create an additional monetization channel for natural farmers?",
        "modelAnswer": """Agricultural soil carbon credits represent an innovative environmental finance mechanism that monetizes the ecological co-benefits of regenerative agriculture on voluntary carbon markets (VCMs).

Mechanisms of Carbon Accrual in Natural Farming:
1. Soil Organic Carbon (SOC) Sequestration: Natural farming practices—including surface straw mulching (Shushka Acchadana), multi-species live cover cropping (Jeeva Acchadana), zero plowing, and continuous application of Jeevamrit—sequester atmospheric carbon dioxide (CO2) into stable soil humus.
2. Sequestration Rates: Studies show that well-managed natural farms sequester between 0.5 and 1.5 metric tonnes of CO2 equivalent per hectare annually in the top 30 cm of soil.

Monetization Pathway:
1. Baseline and Monitoring: Project developers aggregate contiguous farmer clusters, establishing baseline soil carbon stocks via core sampling and satellite remote sensing.
2. Third-Party Verification: International carbon standards (such as Verra VM0042 or Gold Standard) audit the carbon gains using biogeochemical modeling and field testing.
3. Carbon Credit Issuance: Each metric tonne of verified CO2 sequestered generates one Carbon Offset Credit.
4. Revenue Distribution: These credits are sold to corporate buyers seeking voluntary emissions offsets. Natural farmers receive direct payments of Rs 1,500 to Rs 3,500 per acre annually, providing supplemental income without altering their core farming operations.""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["Carbon Credits", "SOC Sequestration", "Verra", "Voluntary Carbon Market"]
    },

    # 6 LONG_ANSWER (10 marks each, ~300-400 words)
    {
        "id": "AGR217-U5-SUB09",
        "syllabusTopic": TOPICS[0],
        "questionType": "LONG_ANSWER",
        "questionText": "Conduct an exhaustive microeconomic cost-benefit analysis comparing conventional Green Revolution chemical farming with Natural Farming. Evaluate changes in cost components, labor allocation, yield trajectories, and net farm profitability.",
        "modelAnswer": """Transitioning from Green Revolution chemical agriculture to Natural Farming represents a fundamental restructuring of farm microeconomics, altering cost structures, resource allocation, and profitability dynamics.

1. Deconstruction of Cost Components (CACP Methodology):
- Conventional Chemical Farming: Driven by high paid-out costs (Cost A1/A2). Farmers spend heavily on synthetic fertilizers (urea, DAP, potash), commercial hybrid/Bt seeds, chemical insecticides, fungicides, herbicides, and electricity/diesel for excessive irrigation. These purchased inputs constitute 60% to 75% of total production expenses.
- Natural Farming: Eliminates commercial chemical inputs entirely. Formulations (Jeevamrit, Beejamrit, Neemastra, Dashparni Ark) are prepared on-farm using native cow dung, urine, pulse flour, jaggery, and local botanicals. Consequently, Cost A1/A2 drops by 60% to 85%, freeing smallholders from seasonal cash dependencies.

2. Family Labor Substitution vs Cash Debt:
- Conventional farming relies on capital expenditure financed through high-interest informal credit (24%–36% APR), creating severe debt vulnerability.
- Natural Farming substitutes cash outlays with labor investment. Preparing bio-concoctions, maintaining multi-tier intercrops, and spreading mulch requires 15% to 25% more labor time. However, this is largely fulfilled by family labor, converting idle time into productive farm investment and retaining revenue within the farm household.

3. Yield Trajectories and the 'Transitional Dip':
- Opponents often warn of catastrophic yield drops during the transition. Comprehensive field data from thousands of farms in Andhra Pradesh, Karnataka, and Maharashtra demonstrate:
  - Year 1: Yield changes range from a 5–10% decline in irrigated cash crops to immediate yield parity in rainfed millets and pulses.
  - Years 2–3: As soil biology, mycorrhizal networks, and earthworm channels re-establish, yields stabilize and match conventional chemical averages.
  - Years 4+: Biologically mature soils frequently outperform degraded chemical soils, particularly during drought or heat-stress years, due to superior water retention and root depth.

4. Net Farm Profitability and Benefit-Cost (B:C) Ratio:
- Profitability equals Gross Revenue minus Total Costs. Because paid-out costs drop by over 60%, **Net Farm Income increases by 20% to 50% from Year 1**, even where yields remain flat.
- The Benefit-Cost (B:C) ratio in Natural Farming typically ranges between 2.5:1 and 4.2:1, compared to 1.3:1 to 1.8:1 in conventional chemical farming, establishing a resilient economic foundation for smallholder agriculture.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Cost-Benefit Analysis", "Microeconomics", "Labor Substitution", "Yield Trajectory", "Profitability"]
    },
    {
        "id": "AGR217-U5-SUB10",
        "syllabusTopic": TOPICS[1],
        "questionType": "LONG_ANSWER",
        "questionText": "Analyze the scaling strategy of Andhra Pradesh Community-Managed Natural Farming (APCNF). How does the synergy between Women Self-Help Groups (SHGs) and Community Resource Persons (CRPs) drive large-scale social adoption?",
        "modelAnswer": """The Andhra Pradesh Community-Managed Natural Farming (APCNF) model, implemented by Rythu Sadhikara Samstha (RySS), represents the world's most extensive agro-ecological scaling initiative, aiming to transition 6 million farming families across 6 million hectares. Its rapid adoption stems from a human-centered institutional design that pairs the social capital of Women Self-Help Groups (SHGs) with peer-to-peer extension by Community Resource Persons (CRPs).

1. Mobilizing the Social Capital of Women SHGs:
Traditional agricultural extension historically bypassed women, focusing exclusively on male landholders. APCNF restructured this dynamic by anchoring adoption within Andhra Pradesh's established network of women SHGs (SERP/Velugu federations):
- Nutritional and Health Advocacy: Women intuitively recognize the public health impacts of pesticide ingestion—including reproductive complications, chronic illnesses, and family medical debt. By positioning Natural Farming as a source of safe, nutritious food ('Amruth Ahar'), women SHGs championed the transition from the household kitchen garden outward.
- Financial Stewardship: SHGs manage village revolving funds and internal credit lines. They prioritize low-interest loans for members purchasing native cows, drums, and seed stocks, while restricting borrowing for toxic synthetic agrochemicals.
- Peer Monitoring and Social Sanction: SHG weekly meetings serve as transparent forums for peer appraisal, where adherence to natural farming protocols is monitored and celebrated collectively.

2. Farmer-to-Farmer Extension via Community Resource Persons (CRPs):
Conventional extension fails because bureaucratic officers deliver theoretical advice without practical field empathy. APCNF replaces this with a decentralized cadre of CRPs:
- Experiential Credibility: CRPs are practicing natural farmers who have successfully farmed their own land without chemicals. They understand local microclimates, soil varieties, and socio-economic realities, earning immediate trust.
- Intensive Village Handholding: A team of CRPs resides in each target village for up to three years. They mentor 50 to 100 neighboring farmers, conducting live concoction preparation workshops, guiding Pre-Monsoon Dry Sowing (PMDS), and offering immediate troubleshooting during pest or disease outbreaks.
- Video-Enabled Digital Learning: CRPs use localized instructional pico-projector video modules featuring local champion farmers, reinforcing peer-to-peer learning.

3. Outcomes of the Synergistic Model:
By merging the organizational power of women federations with the practical credibility of CRPs, APCNF has successfully scaled natural farming to over 800,000 active farmers across thousands of villages, demonstrating that regenerative agriculture spreads fastest through community-led social networks.""",
        "marks": 10,
        "bloomLevel": "Analyze",
        "tags": ["APCNF Scaling", "Women SHGs", "CRPs", "Social Capital", "Peer Extension"]
    },
    {
        "id": "AGR217-U5-SUB11",
        "syllabusTopic": TOPICS[2],
        "questionType": "LONG_ANSWER",
        "questionText": "Critically examine India's national policy architecture supporting Natural Farming, focusing on the evolutionary trajectory from PKVY and BPKP to the National Mission on Natural Farming (NMNF).",
        "modelAnswer": """Over the past decade, the Government of India has progressively elevated agro-ecology from a marginal alternative into a central national agricultural priority, developing an evolving policy framework:

1. Paramparagat Krishi Vikas Yojana (PKVY - Launched 2015):
- Conceptual Foundation: PKVY was introduced under the National Mission for Sustainable Agriculture (NMSA) to support traditional organic and natural farming through cluster development.
- Financial and Operational Framework: PKVY introduced the 50-acre (20-ha) cluster model, disbursing Rs 50,000 per hectare over three years. Of this, Rs 31,000 (62%) is delivered via Direct Benefit Transfer (DBT) to farmers for bio-inputs, seeds, and drums.
- Critical Contributions: PKVY mainstreamed the Participatory Guarantee System for India (PGS-India), democratizing certification for smallholders. However, its broad definition permitted purchased commercial organic inputs, which often remained costly for smallholders.

2. Bharatiya Prakritik Krishi Paddhati (BPKP - Launched 2020–21):
- Refinement to Pure Natural Farming: Recognizing that commercial organic inputs burdened smallholders, BPKP was introduced as a specialized sub-scheme under PKVY focused specifically on indigenous, cow-based natural farming (Subhash Palekar model).
- Core Tenets: BPKP strictly excludes off-farm purchased inputs, commercial bio-fertilizers, and vermicompost, emphasizing on-farm cow dung/urine bio-formulations (Jeevamrit, Beejamrit) and biomass recycling.
- Financial Support: Provided Rs 12,200 per hectare over three years dedicated to continuous handholding, local capacity building, and cluster-based documentation.

3. The National Mission on Natural Farming (NMNF - Approved 2022–23):
- Independent Mission Status: Elevated Natural Farming into an independent central scheme under the Ministry of Agriculture with an outlay of Rs 1,584 crore.
- Strategic Institutional Anchors:
  - 15,000 Bio-Input Resource Centres (BRCs): Establishes community-level micro-enterprises providing standardized, ready-to-use biological formulations to farmers without cattle.
  - Namami Gange Natural Corridor: Prioritizes a contiguous 5-km natural farming belt along both banks of the River Ganga, safeguarding the riverine basin from agricultural chemical runoff.
  - Institutional Convergence: Bridges extension efforts with DAY-NRLM (mobilizing women Krishi Sakhis) and ICAR/KVKs (establishing 1-ha scientific demonstration models).

India's policy trajectory reflects an evolving commitment to building scalable, resilient, and chemical-free food systems.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Policy Architecture", "PKVY", "BPKP", "NMNF", "Evolution"]
    },
    {
        "id": "AGR217-U5-SUB12",
        "syllabusTopic": TOPICS[3],
        "questionType": "LONG_ANSWER",
        "questionText": "Compare the Participatory Guarantee System for India (PGS-India) with the National Programme for Organic Production (NPOP). Analyze differences in institutional governance, verification methodology, cost structures, and smallholder inclusion.",
        "modelAnswer": """Certification is essential to verify chemical-free production claims, protect consumers from fraud, and secure fair farmgate pricing. India operates two distinct certification systems: third-party NPOP and peer-based PGS-India.

1. Institutional Governance and Regulatory Framework:
- NPOP (Third-Party Certification): Governed by the Agricultural and Processed Food Products Export Development Authority (APEDA) under the Ministry of Commerce. Designed primarily to satisfy international trade protocols and export standards (EU, USDA NOP, Japan).
- PGS-India (Participatory System): Governed by the National Centre of Organic and Natural Farming (NCONF) under the Ministry of Agriculture. Tailored for domestic markets, local food sovereignty, and smallholder empowerment.

2. Verification Methodology:
- NPOP: Employs professional commercial inspection bodies (e.g., SGS, Aditi Organic, Control Union). Inspectors conduct pre-scheduled physical farm audits, examine formal accounting records, and collect soil/crop residue samples for laboratory testing.
- PGS-India: Operates through decentralized peer review. A minimum of 5 neighboring farmers forms a Local Group (LG) and conducts mutual walk-through audits during critical crop stages, verifying practices through transparency, shared values, and community accountability.

3. Cost Structures and Economic Accessibility:
- NPOP: Prohibitively expensive for smallholders. Commercial inspection, laboratory residue analysis, and administrative fees typically cost between Rs 25,000 and Rs 50,000 per farm annually, pricing out resource-poor farmers unless subsidized by corporate exporters.
- PGS-India: Completely free of audit fees for farmers. Operational expenses are covered under government schemes (PKVY/BPKP), eliminating financial barriers for marginal landholders.

4. Documentation, Inclusivity, and Market Realities:
- NPOP: Relies on complex, English-centric paperwork and digital accounting that intimidates non-literate farmers, fostering reliance on external certifying agents.
- PGS-India: Utilizes simple vernacular Farm Diaries and peer verification sheets, promoting farmer autonomy and leadership.
- Market Compliance: Both frameworks are legally recognized under FSSAI's Organic Food Regulations, permitting produce to bear the official 'Jaivik Bharat' logo in domestic retail trade.""",
        "marks": 10,
        "bloomLevel": "Analyze",
        "tags": ["PGS-India vs NPOP", "Certification", "Smallholder Inclusion", "Third-Party Audits"]
    },
    {
        "id": "AGR217-U5-SUB13",
        "syllabusTopic": TOPICS[4],
        "questionType": "LONG_ANSWER",
        "questionText": "Evaluate modern agri-business and value-chain models for natural farm produce, detailing the roles of Farmer Producer Organizations (FPOs), Direct-to-Consumer (D2C) channels, and blockchain traceability.",
        "modelAnswer": """Securing remunerative market access is critical for the long-term sustainability of Natural Farming. Historically, natural farmers were forced to sell their unsegregated produce at conventional mandis, receiving standard commodity prices despite offering pesticide-free harvests. Modern value-chain innovations are reshaping this landscape:

1. Farmer Producer Organizations (FPOs) as Aggregation Engines:
Small and marginal farmers individually produce small marketable surpluses that cannot absorb independent transport or marketing costs:
- Scale and Collective Bargaining: FPOs aggregate output from 500 to 1,000 natural farmers, creating bulk volumes that attract institutional buyers, organic retail chains, and supermarket networks.
- Primary Processing and Value Addition: FPOs invest in cleaning, grading, stone-picking, flour milling, cold-press oil extraction, and hygienic packaging, capturing processing margins that previously went to wholesale millers.
- Expanding Farmer Revenue Share: By bypassing middlemen and arthiyas, FPOs increase the primary producer's share of the consumer rupee from 25–35% in conventional mandis to 65–75%.

2. Direct-to-Consumer (D2C) and Community-Supported Agriculture (CSA):
Digital connectivity enables direct producer-consumer linkages:
- Subscription-Based CSA Models: Urban consumer collectives pay upfront seasonal or annual subscription fees to partner natural farms. In return, the farm delivers weekly subscription baskets of fresh seasonal grains, pulses, and vegetables, sharing production risks with consumers.
- Mobile Apps and WhatsApp Communities: Progressive natural farmers build direct D2C channels, marketing produce via dedicated mobile platforms, farm gate pickup points, and weekend farmers' markets in major cities, capturing 85% to 90% of retail value.

3. Blockchain Traceability and Consumer Trust:
The greatest obstacle in premium organic and natural markets is consumer skepticism regarding chemical-free claims:
- End-to-End Digital Provenance: Modern natural farm collectives implement dynamic QR-code-enabled blockchain traceability. Consumers scan product labels in grocery aisles to view the farm's geographic location, harvest dates, farmer identity, and PGS-India certification status.
- Premium Price Realization: Verified transparent provenance commands retail price premiums of 20% to 40%, delivering fair compensation to farming families while ensuring authentic food safety for consumers.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Agri-Business Models", "FPOs", "D2C Marketing", "Blockchain Traceability", "Value Chain"]
    },
    {
        "id": "AGR217-U5-SUB14",
        "syllabusTopic": TOPICS[4],
        "questionType": "LONG_ANSWER",
        "questionText": "Formulate a blueprint for establishing an economically viable Natural Farming Farmer Producer Company (FPC). Detail governance structures, aggregation logistics, branding, and diverse revenue streams including carbon monetization.",
        "modelAnswer": """A blueprint for an economically viable Natural Farming Farmer Producer Company (FPC) integrates democratic farmer governance, efficient post-harvest logistics, distinct branding, and diversified revenue channels.

1. Governance and Shareholder Structure:
- Shareholder Base: Mobilize 1,000 practicing natural farming families across a contiguous cluster of 15 to 20 villages, ensuring strong representation from small, marginal, and women farmers.
- Board of Directors: Elect an 11-member Board representing diverse village clusters, supported by an experienced Chief Executive Officer (CEO) and professional marketing/accounting staff funded under central FPO promotion programs.
- Equity and Capital: Build an equity base through Rs 1,000 share subscriptions per farmer, matched by the central Equity Grant Scheme, supplemented by a credit guarantee facility for working capital loans.

2. Aggregation, Post-Harvest Logistics, and Quality Control:
- Decentralized Village Collection Centers (VCCs): Establish VCCs within women SHG structures where farmers deposit produce on designated days.
- Strict Protocol Verification: Only produce from plots with active PGS-India certification and verified input diaries is accepted into natural product lines.
- Central Processing Facility (CPF): The FPC operates a central processing hub equipped with multi-crop cleaners, destoners, gravity separators, vacuum packaging equipment, and cold-press oil mills.

3. Branding, Marketing, and Value Addition:
- Distinctive Regional Brand: Create a distinctive farmer-owned brand highlighting environmental purity, traditional indigenous varieties (e.g., scented indigenous rices, Desi pulses), and zero synthetic chemical residues.
- Multi-Channel Market Distribution:
  - B2B Institutional Supply: Long-term supply agreements with organic retail chains, hospitals, and wellness brands.
  - B2C E-Commerce: Direct urban doorstep deliveries via an FPC mobile app and WhatsApp store.
  - Local Value Addition: Produce value-added products like unpolished millets, stone-ground flours, and wood-pressed oils that double gross profit margins.

4. Revenue Diversification via Agricultural Soil Carbon Credits:
- Carbon Aggregation: Aggregate 1,500 hectares of contiguous shareholder land under international carbon standards (Verra VM0042).
- Verification and Issuance: Verify soil organic carbon (SOC) accrual achieved through straw mulching, live cover crops, and zero tillage.
- Carbon Dividend: Distribute carbon revenue (estimated at Rs 2,500–3,500 per acre annually) back to shareholder farmers, providing an independent income stream that reinforces long-term adherence to natural farming practices.""",
        "marks": 10,
        "bloomLevel": "Create",
        "tags": ["FPC Blueprint", "Agri-Enterprise", "Carbon Monetization", "Governance", "Supply Chain"]
    },

    # 3 COMPARISON (5 marks each, ~200-300 words)
    {
        "id": "AGR217-U5-SUB15",
        "syllabusTopic": TOPICS[0],
        "questionType": "COMPARISON",
        "questionText": "Compare the economic resilience of a Natural Farming system with that of a conventional chemical monoculture during an acute drought season.",
        "modelAnswer": """Drought conditions expose fundamental differences in economic resilience between Natural Farming and chemical monocultures:

1. Operational Capital at Risk:
- Chemical Monoculture: Farmers invest heavy upfront cash in synthetic fertilizers, hybrid seeds, and pesticides. When rains fail, this working capital is lost, leaving the farmer with severe unpayable debts.
- Natural Farming: Minimal upfront cash is spent on inputs (Cost A1/A2 is 60–85% lower). In a drought, the financial capital lost is negligible, preventing insolvency and severe agrarian distress.

2. Soil Moisture Retention and Yield Stability:
- Chemical Monoculture: Plowing and lack of mulch leave soils exposed to rapid evaporation. Low organic matter reduces moisture holding capacity, causing crops to wither within 10 to 14 rainless days.
- Natural Farming: Continuous straw mulching (Shushka Acchadana) and high soil organic carbon (humus) cool topsoil and preserve moisture. Mycorrhizal networks and earthworm channels draw subsoil moisture, enabling crops to survive 20 to 30 rainless days.

3. Income Diversification vs Total Crop Loss:
- Chemical Monoculture: Monoculture failure results in a complete loss of household farm revenue.
- Natural Farming: Multi-tier polycultures combine deep-rooted drought-hardy millets and pulses. Even if primary crops suffer, hardy secondary crops provide food and livestock fodder, sustaining household nutrition and financial stability.""",
        "marks": 5,
        "bloomLevel": "Evaluate",
        "tags": ["Economic Resilience", "Drought Comparison", "Soil Moisture", "Risk Mitigation"]
    },
    {
        "id": "AGR217-U5-SUB16",
        "syllabusTopic": TOPICS[2],
        "questionType": "COMPARISON",
        "questionText": "Compare the core philosophies and operational mandates of Bharatiya Prakritik Krishi Paddhati (BPKP) and the Paramparagat Krishi Vikas Yojana (PKVY).",
        "modelAnswer": """While both PKVY and BPKP are flagship initiatives of the Ministry of Agriculture, they differ in philosophy, permitted inputs, and operational focus:

1. Philosophical Foundation:
- PKVY: Designed as a broad organic farming promotion program accommodating diverse organic philosophies, including traditional composting, biodynamic methods, and commercial bio-fertilizers.
- BPKP: Formulated specifically to promote Indian indigenous natural farming (Subhash Palekar model), rooted in zero purchased inputs, indigenous cow biology, and ecological self-reliance.

2. Input Protocols and External Purchases:
- PKVY: Permits off-farm purchased commercial organic inputs, including certified organic manures, rock phosphate, commercial bio-pesticides, and laboratory-produced bio-fertilizers (Rhizobium, Azotobacter).
- BPKP: Strictly prohibits off-farm purchased inputs (even commercial organic ones). Mandates that all soil fertility and plant protection concoctions (Jeevamrit, Beejamrit, Neemastra) be prepared entirely on-farm using local biomass and native cattle dung/urine.

3. Financial Allocation Focus:
- PKVY: Provides Rs 50,000 per hectare over three years, with a major emphasis (Rs 31,000/ha) on direct financial transfers to procure organic inputs and seeds.
- BPKP: Provides Rs 12,200 per hectare over three years, targeting resources toward continuous farmer handholding, community resource person (CRP) extension, and setting up village bio-input resource centers.""",
        "marks": 5,
        "bloomLevel": "Analyze",
        "tags": ["BPKP vs PKVY", "Policy Comparison", "Permitted Inputs", "Zero Purchased Inputs"]
    },
    {
        "id": "AGR217-U5-SUB17",
        "syllabusTopic": TOPICS[3],
        "questionType": "COMPARISON",
        "questionText": "Compare the institutional verification mechanisms of PGS-India with third-party NPOP certification, focusing on smallholder accessibility and transparency.",
        "modelAnswer": """PGS-India and third-party NPOP represent contrasting paradigms for certifying agricultural produce:

1. Verification Mechanism and Power Dynamics:
- PGS-India: Operates through horizontal, peer-to-peer participatory verification. Local farmers review each other's fields during farm walks and open group meetings. Decisions are made collaboratively through consensus and shared community responsibility.
- NPOP: Operates through hierarchical, top-down commercial third-party inspection. Professional auditors from private certification firms conduct formal inspections, creating an unequal power dynamic between auditor and smallholder.

2. Financial Cost and Smallholder Accessibility:
- PGS-India: Entirely free of audit fees for smallholders, with administrative support provided through government schemes. Highly accessible to marginal and resource-poor farming communities.
- NPOP: Incurs significant commercial inspection fees, travel expenses, and lab testing charges (Rs 25,000–50,000 per farm annually), pricing out independent smallholders unless tied to corporate aggregators.

3. Documentation Language and Inclusivity:
- PGS-India: Utilizes simple farm diaries and checklists maintained in local regional languages, enabling non-literate and marginal farmers to participate actively.
- NPOP: Requires formal, English-heavy administrative documentation and auditable audit trails that often exclude smallholders without specialized consultancy assistance.

4. Market Scope:
- PGS-India: Tailored primarily for domestic retail markets under FSSAI's Jaivik Bharat framework.
- NPOP: Designed and required for international export markets under global equivalency agreements.""",
        "marks": 5,
        "bloomLevel": "Evaluate",
        "tags": ["PGS-India vs NPOP", "Certification Systems", "Smallholder Inclusion", "Transparency"]
    },

    # 2 APPLICATION (10 marks each, ~300-400 words)
    {
        "id": "AGR217-U5-SUB18",
        "syllabusTopic": TOPICS[1],
        "questionType": "APPLICATION",
        "questionText": "A district collector in a rainfed, drought-vulnerable district wants to replicate the APCNF model across 50,000 hectares. Develop an operational 3-year transition roadmap detailing community mobilization, CRP training, and Pre-Monsoon Dry Sowing implementation.",
        "modelAnswer": """Replicating the APCNF model across 50,000 hectares in a drought-prone district requires a structured, community-led 3-year implementation roadmap:

Year 1: Foundation Building, Community Mobilization, and Pilot Rollout:
- Month 1–3: Partnership with Women SHG Federations: Mobilize the district's rural women Self-Help Group (SHG) network (National Rural Livelihoods Mission / NRLM). Conduct hamlet-level orientation sessions on food safety, health benefits, and input debt reduction.
- Month 4–5: Identification and Training of CRPs: Select 250 practicing natural farmers as Community Resource Persons (CRPs). Send them for intensive 15-day residential field training at established RySS training academies to master concoction preparation, multi-tier cropping, and community communication.
- Month 6–8: Pre-Monsoon Dry Sowing (PMDS) Pilot: Launch PMDS across 5,000 hectares in April–May. Distribute 15-to-20 seed cocktails treated with Beejamrit to establish summer green cover before the monsoon.
- Month 9–12: 0.5-Acre Entry Plots: Encourage 20,000 participating farming families to convert a 0.5-acre trial plot to validate input cost savings before committing their entire holding.

Year 2: Horizontal Scaling, Institutional Support, and Quality Systems:
- Scaling Coverage: Expand full-field conversion to cover 25,000 hectares. Deploy 500 active CRPs (1 CRP per 50–100 farmers) to provide continuous field mentoring.
- Establishing Bio-Input Resource Centres (BRCs): Establish 100 village-level BRCs managed by women SHGs to produce and supply standardized Jeevamrit, Beejamrit, and botanical repellents (Neemastra, Agniastra) to livestock-deprived households.
- Rolling out PGS-India Certification: Form 1,000 Local Groups under PGS-India. Distribute vernacular Farm Diaries and conduct cluster peer appraisals.
- Landscape Saturation: Designate 20 Gram Panchayats as pilot 'Model Natural Farming Villages' where 100% of contiguous farming land is transitioned to eliminate chemical spray drift.

Year 3: Consolidation, Value-Chain Linkages, and Carbon Monetization:
- Reaching Target: Transition remaining holdings to achieve 50,000 hectares under natural farming.
- Market Infrastructure and FPOs: Incorporate 5 Natural Farming Farmer Producer Companies (FPCs). Build collection centers, grain cleaning lines, and direct marketing arrangements with urban retail chains.
- Carbon Credit Registration: Aggregate contiguous clusters under international carbon registries (Verra VM0042) to secure supplemental carbon offset income for participating farmers.""",
        "marks": 10,
        "bloomLevel": "Create",
        "tags": ["Roadmap", "APCNF Replication", "District Transition", "PMDS", "BRCs"]
    },
    {
        "id": "AGR217-U5-SUB19",
        "syllabusTopic": TOPICS[4],
        "questionType": "APPLICATION",
        "questionText": "An established cluster of 500 natural farmers struggles with low mandi prices for their chemical-free basmati rice and pulses. Formulate a comprehensive market linkage and branding strategy to capture premium value.",
        "modelAnswer": """Selling chemical-free natural produce into conventional wholesale mandis results in commoditization, where premium-quality food is blended with chemically grown crops and sold at generic minimum support prices. A comprehensive direct-to-consumer and institutional value-chain strategy must be established:

Phase 1: Legal Aggregation and FPC Incorporation:
- Form a Farmer Producer Company (FPC) with the 500 natural farmers as equity shareholders.
- Secure active PGS-India Natural certification and register the produce under FSSAI's 'Jaivik Bharat' regulatory framework to verify organic integrity.

Phase 2: Post-Harvest Value Addition and Quality Infrastructure:
- Establish a primary processing unit: Install modern destoning, grading, magnetic cleaning, and vacuum-packaging machinery.
- Packaging Innovation: Package basmati rice and pulses in 1 kg, 2 kg, and 5 kg food-grade eco-friendly paper/jute bags with airtight inner linings to preserve aroma and extend shelf life without chemical fumigants.
- Traceability Integration: Print unique dynamic QR codes on every retail package. When scanned, consumers view the specific farmer's photo, GPS farm location, harvest date, and PGS-India peer inspection report.

Phase 3: Brand Identity and Storytelling:
- Develop a distinct consumer brand: Create a brand identity centered on native soil purity, indigenous heritage seeds, and farmer welfare (e.g., 'Prakritik Pure' or 'Dharani Fresh').
- Visual Storytelling: Share authentic farmer journey videos, laboratory chemical-residue-free test certificates, and soil carbon impact metrics across digital platforms.

Phase 4: Multi-Tiered Market Distribution:
- Tier 1: Direct-to-Consumer (D2C) Subscription Baskets: Launch an e-commerce website and mobile ordering platform targeting urban households in nearby metropolitan areas, offering monthly pantry subscriptions for basmati rice, pulses, and cold-pressed oils.
- Tier 2: Community-Supported Agriculture (CSA) Partnerships: Partner with gated residential communities and apartment welfare associations, organizing weekend 'Farm-to-Fork' pop-up markets.
- Tier 3: Premium B2B Partnerships: Supply bulk packaged grain directly to organic retail chains, wellness centers, and high-end restaurants, eliminating intermediaries.

Outcomes:
Farmers increase farmgate price realization by 40% to 60% compared to standard mandi rates, while consumers receive authentic, chemical-free staple foods.""",
        "marks": 10,
        "bloomLevel": "Apply",
        "tags": ["Branding Strategy", "Direct Marketing", "FPC", "Traceability", "Value Chain"]
    },

    # 1 CASE_STUDY (10 marks, ~350-450 words)
    {
        "id": "AGR217-U5-SUB20",
        "syllabusTopic": TOPICS[1],
        "questionType": "CASE_STUDY",
        "questionText": "Case Study: In the drought-prone district of Ananthapuramu, Andhra Pradesh, resource-poor groundnut farmers faced severe agronomic and financial distress due to monoculture crop failures, heavy chemical fertilizer debts, and recurrent summer droughts. The APCNF initiative intervened with Pre-Monsoon Dry Sowing (PMDS) and women-led Community Resource Person extension. Analyze the socio-economic and ecological mechanisms of this turnaround, detailing changes in farm debt, soil moisture dynamics, and household nutrition.",
        "modelAnswer": """Context and Crisis in Ananthapuramu:
Ananthapuramu district in the Rayalaseema region of Andhra Pradesh represents one of India's most arid and vulnerable agricultural landscapes, receiving only 550 mm of erratic annual rainfall. For decades, green-revolution extension promoted intensive chemical monoculture of rainfed Spanish bunch groundnut. Farmers borrowed heavily at 24%–36% annual interest from local moneylenders to purchase chemical fertilizers, hybrid seeds, and synthetic pesticides. Recurrent monsoon dry spells caused widespread crop failures, leaving smallholders trapped in compounding debt, with many abandoning agriculture to migrate as urban day laborers.

The APCNF Agro-Ecological Intervention:
Beginning in 2017, Rythu Sadhikara Samstha (RySS) launched an intensive, community-led transformation across the district anchored on two key innovations:

1. Pre-Monsoon Dry Sowing (PMDS):
- Farmers broke the destructive monoculture cycle by broadcasting a diverse cocktail of 15 to 20 drought-tolerant seeds (millets, pulses, oilseeds, sunnhemp) into dry, untilled soil in late April.
- Treated with Beejamrit and Ghanajeevamrit, these multi-species seeds utilized nocturnal atmospheric dew and deep capillary soil vapor (Waaphasa) to germinate and establish hardy root systems in 44°C summer heat.
- By the time monsoon showers arrived in June–July, fields already had established multi-tier green canopies, preventing topsoil erosion and maximizing rainwater infiltration.

2. Mobilizing Women SHGs and Farmer-to-Farmer Mentorship:
- APCNF mobilized village Women Self-Help Groups (SHGs) to manage community seed banks and disburse micro-loans for native cows and preparation drums.
- Practicing Master Farmers and Community Resource Persons (CRPs) provided continuous hands-on guidance, demonstrating on-farm preparation of Jeevamrit and Neemastra and eliminating purchased chemical inputs.

Socio-Economic and Ecological Turnaround:
1. Soil Moisture and Crop Resilience: Soil Organic Carbon (SOC) increased from 0.3% to over 0.7% within three years. Continuous straw mulching and dense root networks retained soil moisture, enabling crops to survive 25-day dry spells that destroyed adjacent chemical monocultures.
2. Debt Elimination and Economic Recovery: Paid-out operational costs (Cost A1/A2) plummeted by 75%. Eliminating chemical expenses saved families Rs 12,000–16,000 per acre. Even during drought years, the multi-tier polyculture produced harvestable millets, pulses, and vegetables, generating stable net profits.
3. Household Nutrition and Food Security: The diverse harvests of cowpea, pearl millet, leafy greens, and oilseeds directly enriched family diets, reducing maternal anemia and child malnutrition.
4. Paradigm Shift: The Ananthapuramu experience proved that community-driven Natural Farming can reverse agrarian distress in hyper-arid ecosystems, transforming degraded lands into thriving, climate-resilient agro-ecosystems.""",
        "marks": 10,
        "bloomLevel": "Evaluate",
        "tags": ["Case Study", "Ananthapuramu", "PMDS", "Drought Resilience", "Debt Elimination"]
    }
]

fcs = [
    {
        "id": "AGR217-U5-FC01",
        "front": "How much does Natural Farming reduce paid-out cultivation costs (Cost A1/A2)?",
        "back": "By 60% to 85%, because expensive synthetic fertilizers and pesticides are replaced by on-farm biological formulations.",
        "hint": "60% to 85% cost reduction",
        "syllabusTopic": TOPICS[0]
    },
    {
        "id": "AGR217-U5-FC02",
        "front": "Why does net farm profit increase even during initial transition seasons?",
        "back": "Because the massive savings from eliminating chemical purchases outweigh any minor transitional yield fluctuations.",
        "hint": "Input savings exceed minor yield changes",
        "syllabusTopic": TOPICS[0]
    },
    {
        "id": "AGR217-U5-FC03",
        "front": "What does APCNF stand for?",
        "back": "Andhra Pradesh Community-Managed Natural Farming—the world's largest government-backed agro-ecological program.",
        "hint": "Andhra Pradesh Community-Managed Natural Farming",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U5-FC04",
        "front": "What is Rythu Sadhikara Samstha (RySS)?",
        "back": "A non-profit Section 8 state government corporation implementing the APCNF natural farming program.",
        "hint": "State non-profit implementing APCNF",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U5-FC05",
        "front": "What is Pre-Monsoon Dry Sowing (PMDS)?",
        "back": "Sowing a diverse 15-to-20 seed cocktail in dry summer soils before monsoon rains to maintain 365-day green cover.",
        "hint": "Summer dry sowing maintaining year-round cover",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U5-FC06",
        "front": "Who are Community Resource Persons (CRPs) in APCNF?",
        "back": "Practicing natural farmers trained as peer extension agents who mentor and handhold neighboring farming families.",
        "hint": "Practicing natural farmer peer mentors",
        "syllabusTopic": TOPICS[1]
    },
    {
        "id": "AGR217-U5-FC07",
        "front": "What is the financial assistance provided under PKVY?",
        "back": "Rs 50,000 per hectare over 3 years, with Rs 31,000 (62%) given directly for bio-inputs and seeds.",
        "hint": "Rs 50,000/ha over 3 years (Rs 31,000 DBT)",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U5-FC08",
        "front": "What does BPKP stand for?",
        "back": "Bharatiya Prakritik Krishi Paddhati—a central sub-scheme under PKVY promoting zero-purchased-input natural farming.",
        "hint": "Bharatiya Prakritik Krishi Paddhati",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U5-FC09",
        "front": "What is the key rule that distinguishes BPKP from organic farming?",
        "back": "BPKP strictly prohibits all purchased off-farm inputs (even commercial organic ones), mandating 100% on-farm cow formulations.",
        "hint": "Zero off-farm purchased inputs",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U5-FC10",
        "front": "What is a Bio-Input Resource Centre (BRC)?",
        "back": "A village-level enterprise providing ready-made, standardized natural bio-formulations (Jeevamrit, etc.) to farmers without cattle.",
        "hint": "Village enterprise supplying ready bio-formulations",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U5-FC11",
        "front": "How many BRCs are planned under the National Mission on Natural Farming?",
        "back": "15,000 BRCs nationwide to make natural inputs accessible across rural India.",
        "hint": "15,000 BRCs nationwide",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U5-FC12",
        "front": "What width is the natural farming corridor along River Ganga under Namami Gange?",
        "back": "A 5-km wide corridor on both banks of River Ganga to eliminate toxic chemical runoff into the river.",
        "hint": "5 km corridor on both banks",
        "syllabusTopic": TOPICS[2]
    },
    {
        "id": "AGR217-U5-FC13",
        "front": "What does PGS-India stand for?",
        "back": "Participatory Guarantee System for India—a decentralized, peer-review-based organic and natural certification system.",
        "hint": "Participatory Guarantee System for India",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U5-FC14",
        "front": "What is the minimum number of farmers to form a PGS-India Local Group?",
        "back": "A minimum of 5 like-minded neighboring farmers within a village cluster.",
        "hint": "Minimum 5 neighboring farmers",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U5-FC15",
        "front": "What is the official unified logo for certified organic/natural food in India?",
        "back": "The 'Jaivik Bharat' logo established by FSSAI.",
        "hint": "Jaivik Bharat logo",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U5-FC16",
        "front": "What is the certification cost of PGS-India for smallholder farmers?",
        "back": "Completely free of audit fees for farmers, eliminating the heavy commercial costs of third-party NPOP audits.",
        "hint": "Zero certification audit fees",
        "syllabusTopic": TOPICS[3]
    },
    {
        "id": "AGR217-U5-FC17",
        "front": "What is an FPO in agricultural marketing?",
        "back": "Farmer Producer Organization—a legal producer collective that aggregates smallholder crops for bulk processing and direct sale.",
        "hint": "Farmer Producer Organization",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U5-FC18",
        "front": "What proportion of the consumer rupee does a farmer capture in direct marketing?",
        "back": "70% to 85%, compared to only 25% to 35% in conventional multi-tiered mandi systems.",
        "hint": "70% to 85% of consumer rupee",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U5-FC19",
        "front": "What is Community-Supported Agriculture (CSA)?",
        "back": "A model where urban consumers buy upfront seasonal subscriptions to local natural farms, sharing risks and receiving weekly produce.",
        "hint": "Subscription-based direct farm-to-consumer model",
        "syllabusTopic": TOPICS[4]
    },
    {
        "id": "AGR217-U5-FC20",
        "front": "How much CO2 equivalent per hectare can Natural Farming sequester annually?",
        "back": "Roughly 0.5 to 1.5 metric tonnes of CO2 equivalent per hectare per year in topsoil through mulching and cover cropping.",
        "hint": "0.5 to 1.5 t CO2e/ha/year",
        "syllabusTopic": TOPICS[4]
    }
]

# Validation
print(f"MCQs: {len(mcqs)} (Easy: {sum(1 for m in mcqs if m['difficulty']=='Easy')}, Med: {sum(1 for m in mcqs if m['difficulty']=='Medium')}, Hard: {sum(1 for m in mcqs if m['difficulty']=='Hard')})")
print(f"Subjs: {len(subjs)} (Types: {[s['questionType'] for s in subjs]})")
print(f"FCs: {len(fcs)}")

u5_data = {
    "unitNumber": 5,
    "title": "Economics, Policy, and Institutional Framework of Natural Farming",
    "shortDescription": "Comprehensive analysis of the microeconomics of Natural Farming, large-scale institutional transformation models (APCNF/RySS), national policy architecture (PKVY, BPKP, NMNF), decentralized quality assurance (PGS-India), and innovative market mechanisms including FPOs, direct-to-consumer value chains, and soil carbon credits.",
    "estimatedReadTimeMinutes": 160,
    "syllabusTopics": TOPICS,
    "notes": u5_notes,
    "mcqs": mcqs,
    "subjectiveQuestions": subjs,
    "flashcards": fcs
}

with open("/Users/quantum/Downloads/padho lpu/scripts/generators/agr217_u5.py", "w") as f:
    f.write('"""AGR217 Unit 5 Data Generator: Economics, Policy, and Institutions"""\n\n')
    f.write('def get_unit5_data():\n')
    f.write(f'    return {repr(u5_data)}\n')

print("Successfully written agr217_u5.py!")
