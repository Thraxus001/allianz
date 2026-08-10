import Aquamembrane from "../assets/Aqua-membrane.jpg";
//import aboutImg from "../assets/waterhand.jpg";
//import ctech from "../assets/ctech.png";
import effluent from "../assets/effluent.png";
//import logoImg from "../assets/logo.jpg";
import maintennance from "../assets/maintenance.jpeg";
import mbbr from "../assets/mbbr.jpeg";
//import productsImg from "../assets/productss.jpeg";
//import qrCodeImg from "../assets/qrcode.jpg";
import reverse from "../assets/reverse.jpeg";
import ultrafiltration from "../assets/ultrafiltration.png";
import wastewater from "../assets/wastewater.png";
import design from "../assets/design.jpg";
import training from "../assets/training.jpeg";
import ctech from "../assets/ctech.webp";
import main from "../assets/maintenancee.jpeg";
import Ro from "../assets/RO.jpeg";
import fire from "../assets/fire.webp";

export type Product = {
  slug: string;
  navLabel: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  process: { title: string; body: string }[];
  applications: string[];
  specNote?: string;
  pdfFile: string;
  pdfSize: string;
};

export type Service = {
  slug: string;
  navLabel: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  process: { title: string; body: string }[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "c-tech-sbr",
    navLabel: "C-Tech SBR",
    title: "C-Tech SBR (Sequencing Batch Reactor)",
    tagline: "Intelligent Cyclic Activated Sludge Wastewater Treatment.",
    heroImage: ctech,
    intro:
      "C-Tech SBR biological systems treat wastewater in timed cycles within a single reactor. Combining aeration, settling, and decanting into a single basin, this technology offers superior nutrient removal and high-efficiency operations for domestic and industrial effluents.\n\nWe design compact, energy-efficient SBR systems that consistently achieve high treatment standards while minimizing operating costs.",
    highlights: [
      "Timed batch processing in a single reactor basin",
      "Eliminates secondary clarifiers and sludge recycling loops",
      "Flexible operation under high hydraulic and organic shock loads",
      "Highly automated PLC-controlled decanting cycles",
    ],
    process: [
      {
        title: "Filling",
        body: "Wastewater fills the basin.",
      },
      {
        title: "Aeration",
        body: "Active biology digests organic matter under cyclical aeration.",
      },
      {
        title: "Settling",
        body: "Aeration stops, allowing biomass to settle.",
      },
      {
        title: "Decanting",
        body: "Clean supernatant is decanted.",
      },
    ],
    applications: [
      "Hotels, eco-resorts, and wildlife lodges",
      "Residential estates and high-density apartments",
      "Industrial effluent and manufacturing factories",
      "Municipal sewage treatment upgrades",
    ],
    pdfFile: "c-tech-sbr-datasheet.pdf",
    pdfSize: "1.4 MB",
  },
  {
    slug: "c-mem-sbr",
    navLabel: "C-Mem ",
    title: "C-Mem (Membrane Bioreactor)",
    tagline: "Advanced Wastewater Recycling with Membrane Technology.",
    heroImage: ultrafiltration,
    intro:
      "C-Mem SBR systems combine biological treatment with ultrafiltration membrane separation. By utilizing hollow-fiber membranes directly within or after the reactor, the system filters out all suspended solids, bacteria, and pathogens, yielding extremely high-quality effluent suitable for unrestricted recycling.\n\nWe supply advanced membrane technology that delivers outstanding water quality, reduced footprint, and reliable long-term operation.",
    highlights: [
      "Combines biological digestion with ultrafiltration membrane separation",
      "Produces high-purity effluent ready for reuse (toilet flushing, irrigation)",
      "Extremely compact footprint, eliminating settling tank requirements",
      "Premium high-flux membrane materials with automatic backwash",
    ],
    process: [
      {
        title: "Biological Digestion",
        body: "Aerated biomass digests dissolved organic pollutants in the reactor basin.",
      },
      {
        title: "Membrane Filtration",
        body: "Effluent is drawn through micro-pores under vacuum, separating pure water from activated sludge.",
      },
    ],
    applications: [
      "High-end water recycling loops",
      "Eco-tourism facilities near sensitive ecosystems",
      "Commercial complexes and malls",
      "Water-scarce industrial manufacturing plants",
    ],
    pdfFile: "c-mem-sbr-datasheet.pdf",
    pdfSize: "1.8 MB",
  },
  {
    slug: "biokleen-mbbr",
    navLabel: "Biokleen MBBR",
    title: "Biokleen MBBR (Moving Bed Biofilm Reactor)",
    tagline: "High-Efficiency Biological Wastewater Treatment.",
    heroImage: mbbr,
    intro:
      "Biokleen MBBR technology utilizes custom-designed floating biofilm carriers to increase active surface area in biological aeration tanks. This robust process is highly resilient to flow fluctuations and provides rapid biological degradation within a compact layout.\n\nOur MBBR systems are robust, easy to operate, and designed to maximize treatment efficiency while reducing plant footprint and maintenance.",
    highlights: [
      "High active biomass concentration on floating carrier media",
      "Compact footprint compared to conventional activated sludge systems",
      "Self-regulating biofilm adjusts to organic load fluctuations",
      "Low operational maintenance with no sludge return activated loop",
    ],
    process: [
      {
        title: "Biofilm carriers",
        body: "Wastewater is mixed in a basin containing floating high-surface-area carriers that support the growth of active biofilm.",
      },
      {
        title: "Clarification",
        body: "Treated wastewater passes to a settling basin where sloughed biomass is separated.",
      },
    ],
    applications: [
      "Industrial food and beverage effluent treatment",
      "Municipal wastewater plant capacity upgrades",
      "New residential housing developments",
      "Commercial and business park sewage treatment",
    ],
    pdfFile: "biokleen-mbbr-datasheet.pdf",
    pdfSize: "1.2 MB",
  },
  {
    slug: "aqua-clean-ro",
    navLabel: "Aqua Clean RO",
    title: "Aqua Clean RO (Reverse Osmosis System)",
    tagline: "High-Purity Water for Critical Applications.",
    heroImage: Ro,
    intro:
      "Aqua Clean RO systems use high-pressure semi-permeable membranes to remove dissolved salts, heavy metals, micro-pollutants, and silica from brackish and borehole water. Engineered for longevity and performance, these systems feed pure water to laboratories, healthcare setups, and industrial processes.\n\nEvery system is engineered to deliver maximum efficiency, reliability, and long-term performance.",
    highlights: [
      "Sized for flow rates from 250 LPH to 100,000+ LPH",
      "High-rejection thin-film composite membranes",
      "VFD-driven high-pressure pumps for energy savings",
      "Integrated automated Clean-in-Place (CIP) wash systems",
    ],
    process: [
      {
        title: "Pre-treatment sizing",
        body: "We audit raw water TDS, silica and silt density index to size sand filters, softeners and antiscalant dosing.",
      },
      {
        title: "Membrane process",
        body: "Feedwater passes through semi-permeable membranes under pressure, separating clean permeate from concentrated brine.",
      },
    ],
    applications: [
      "Hospitals and clinical laboratories",
      "Industrial boiler feed and manufacturing",
      "Borehole purification for residential complexes",
      "Commercial drinking water systems",
    ],
    pdfFile: "aqua-clean-ro-datasheet.pdf",
    pdfSize: "2.1 MB",
  },
  {
    slug: "aqua-clean-uf",
    navLabel: "Aqua Clean UF",
    title: "Aqua Clean UF (Ultrafiltration System)",
    tagline: "Advanced Pathogen and Suspended Solids Removal.",
    heroImage: reverse,
    intro:
      "Aqua Clean UF systems filter water using hollow-fiber membranes with a pore size of 0.02 microns. This physical barrier blocks suspended solids, turbidity, viruses, and bacteria while keeping essential minerals intact, making it perfect for primary borehole filtration or RO pre-treatment.\n\nOur UF systems are built using premium membrane technology and customized to suit your water source, ensuring consistent water quality with reduced operational costs.",
    highlights: [
      "Removes pathogens and macromolecules down to 0.02 microns",
      "High-flux hollow-fiber membranes with automated backwash",
      "Low-pressure operation requiring minimal power consumption",
      "Robust physical barrier against suspended matter and turbidity",
    ],
    process: [
      {
        title: "Barrier Filtration",
        body: "Raw water passes through hollow fibers, trapping particulate matter on the outside.",
      },
      {
        title: "Automated Backwash",
        body: "Flow is periodically reversed to flush out accumulated solids.",
      },
    ],
    applications: [
      "Primary borehole and surface water purification",
      "Pre-treatment for Reverse Osmosis systems",
      "Potable water supply for schools and estates",
      "Greywater and secondary effluent polishing",
    ],
    pdfFile: "aqua-clean-uf-datasheet.pdf",
    pdfSize: "1.6 MB",
  },
  {
    slug: "aqua-clean-wtp",
    navLabel: "Aqua Clean WTP",
    title: "Aqua Clean Water Treatment Plant",
    tagline: "Comprehensive Large-Scale Utility Water Purification.",
    heroImage: wastewater,
    intro:
      "Aqua Clean Water Treatment Plants combine coagulation, flocculation, aeration, iron/manganese removal, ion exchange, and disinfection technologies to treat highly contaminated borehole, municipal, or well water. Designed for high volume, they deliver stable, safe drinking and utility water.\n\nWe provide carefully engineered solutions using high-quality resins that maximize efficiency, extend equipment life, and reduce maintenance costs.",
    highlights: [
      "Modular layouts combining clarification, softening, and iron filtration",
      "Volumetric automatic regeneration for ion exchange resins",
      "Corrosion-resistant FRP pressure vessels and multi-port valves",
      "Chemical dosing systems for disinfection and pH adjustment",
    ],
    process: [
      {
        title: "Oxidation & Coagulation",
        body: "Air, chlorine, or coagulants are added to precipitate iron, manganese, and organics.",
      },
      {
        title: "Media & Ion Filtration",
        body: "Water passes through catalytic media and resin beds to remove hardness and minerals.",
      },
    ],
    applications: [
      "Large industrial manufacturing complexes",
      "Residential estates and high-rise apartments",
      "Borehole water conditioning for central HVAC loops",
      "Agricultural and greenhouse water supply",
    ],
    pdfFile: "aqua-clean-wtp-datasheet.pdf",
    pdfSize: "2.5 MB",
  },
  {
    slug: "aqua-clean-lake-river",
    navLabel: "Aqua Clean Lake/River",
    title: "Aqua Clean Lake/River Water Treatment System",
    tagline: "High-Efficiency Surface Water Purification.",
    heroImage: effluent,
    intro:
      "Our Lake/River surface water treatment systems are designed to process highly turbid water with fluctuating organic loads. By integrating clarifiers, chemical coagulation, ultrafiltration, and active carbon filters, we turn raw river or lake water into safe drinking water for communities and estates.\n\nWe deliver complete skid-mounted or containerized solutions that allow simple installation and start-up in remote or rural locations.",
    highlights: [
      "Engineered for high turbidity and variable organic content",
      "Rapid coagulation-flocculation basins with lamella clarifiers",
      "Integrated final UV and chlorine disinfection channels",
      "Skid-mounted containerized designs for rapid deployment",
    ],
    process: [
      {
        title: "Clarification",
        body: "Coagulant chemical dosing precipitates mud, silt, and algae in a lamella settler.",
      },
      {
        title: "Polishing & Disinfection",
        body: "Clarified water is polished through sand/carbon beds and disinfected.",
      },
    ],
    applications: [
      "Off-grid agricultural farms and irrigation",
      "Remote resorts and community drinking systems",
      "Municipal backup water supplies",
      "Industrial process water extraction",
    ],
    pdfFile: "aqua-clean-lake-river-datasheet.pdf",
    pdfSize: "2.3 MB",
  },
  {
    slug: "hvac-systems",
    navLabel: "HVAC Systems",
    title: "HVAC (Heating, Ventilation & Air Conditioning)",
    tagline: "Central Climate Control and Chilled Water Distribution.",
    heroImage: maintennance,
    intro:
      "We engineer and install central HVAC systems, including centrifugal chillers, air handling units, cooling towers, and duct networks. Our HVAC solutions are integrated with water conditioning systems to prevent scaling, ensuring continuous thermal comfort and maximum energy efficiency for large developments.",
    highlights: [
      "Central chiller layouts optimized for commercial cooling loads",
      "High-performance air handling and mechanical ventilation",
      "Integrated water pre-treatment to protect condenser loops",
      "Smart BMS integration for automation and energy tracking",
    ],
    process: [
      {
        title: "Thermal Exchange",
        body: "Chilled water loops distribute cool air through air handling units.",
      },
      {
        title: "Heat Rejection",
        body: "Cooling towers reject heat, protected from scaling by integrated softeners.",
      },
    ],
    applications: [
      "Shopping malls and retail developments",
      "Hospitality hotels and medical centers",
      "Corporate offices and high-rise buildings",
      "Industrial process cooling loops",
    ],
    pdfFile: "hvac-systems-datasheet.pdf",
    pdfSize: "1.9 MB",
  },
  {
    slug: "fire-fighting-systems",
    navLabel: "Fire Fighting Systems",
    title: "Fire Fighting & Safety Systems",
    tagline: "Automatic Sprinklers, Hydrants, and Pump Stations.",
    heroImage: fire,
    intro:
      "We plan and deploy professional fire protection systems according to NFPA regulations. From high-pressure fire pump packages and wet-pipe automatic sprinkler networks to landing valves and hydrants, we build life safety infrastructure you can trust during emergencies.",
    highlights: [
      "Automatic sprinkler networks and wet riser lines",
      "High-pressure fire pump sets (Duty, Standby, and Jockey pumps)",
      "Compliant with NFPA and local fire safety codes",
      "Integrated storage reservoir piping and control check valves",
    ],
    process: [
      {
        title: "Pressure Monitoring",
        body: "Jockey pumps maintain pipe pressure. System activation starts main duty pumps.",
      },
      {
        title: "Fire Suppression",
        body: "Heat-sensitive sprinklers or manual hydrants discharge water to contain fire.",
      },
    ],
    applications: [
      "Commercial shopping malls and offices",
      "Industrial warehouses and factories",
      "High-density residential complexes",
      "Off-grid lodges and eco-resorts",
    ],
    pdfFile: "fire-fighting-systems-datasheet.pdf",
    pdfSize: "1.5 MB",
  },
];

export const services: Service[] = [
  {
    slug: "operation-and-maintenance",
    navLabel: "Operation & Maintenance (O&M)",
    title: "Operation & Maintenance (O&M)",
    tagline: "Keeping Your Systems Running at Peak Performance.",
    heroImage: maintennance,
    intro:
      "Allianz Utilities provides comprehensive on-site operational staffing, chemical supply, and regular troubleshooting to keep treatment plants operating at peak design efficiency. Our trained personnel manage daily operations, log parameters, and maintain safety standards.",
    highlights: [
      "24/7 on-site operations by trained technicians",
      "Daily logging of flow and water quality parameters",
      "Preventive servicing of pumps, valves, and blowers",
    ],
    process: [
      {
        title: "Operational Staffing",
        body: "We deploy qualified operators who manage the plant daily in accordance with custom site SOPs.",
      },
      {
        title: "Budgeting & Supply Planning",
        body: "We work with clients to forecast, budget, and plan for essential treatment consumables. Our turnkey approach ensures our clients can make precise projectionsas part of every contract."
      },
      {
        title: "Compliance & Strategic Water Planning",
        body: "We support clients in achieving full compliance and water quality regulations for safe consumption. Our services include budgeting, forecasting, and supply planning to ensure sustainable operations, predictable costs, and reliable access to treated water."
      },
    ],
    applications: [
      "Malls",
      "Schools",
      "Universities",
      "Processing Industries",
      "Residential estates",
    ],
  },
  {
    slug: "annual-maintenance-contracts",
    navLabel: "Annual Maintenance Contracts (AMC)",
    title: "Annual Maintenance Contracts (AMC)",
    tagline: "Reliable Support. Predictable Performance.",
    heroImage: main,
    intro:
      "Our Annual Maintenance Contracts provide scheduled preventive maintenance, routine servicing, inspections, emergency breakdown support, and technical assistance for RO Plants, STPs, ETPs, and other water treatment systems throughout the year.\n\nWith an AMC from Allianz Utilities, you can focus on your core operations while we ensure your systems remain in optimal working condition.\n\nOur tailored maintenance plans reduce unexpected failures, extend equipment life, improve operational efficiency, and provide peace of mind with priority technical support whenever you need it.",
    highlights: [
      "Scheduled preventive maintenance visits throughout the year",
      "Detailed component inspection and calibration",
      "Emergency breakdown support with prioritized response times",
      "System performance reporting and optimization reviews",
      "Equiping operators with new tech slills and best practices for improved plant management",
    ],
    process: [
      {
        title: "Audit & Planning",
        body: "We perform an initial audit of your water systems and design a custom preventive maintenance schedule.",
      },
      {
        title: "Scheduled Inspections",
        body: "Our engineers visit your site periodically to service membranes, pumps, and check control settings.",
      },
    ],
    applications: [
      "Malls",
      "Schools",
      "Universities",
      "Processing Industries",
      "Residential estates",
    ],
  },
  {
    slug: "training",
    navLabel: "Training on Water Management",
    title: "Training on Water & Wastewater Management",
    tagline: "Empowering Your Team Through Knowledge.",
    heroImage: training,
    intro:
      "Technology performs best when operated by knowledgeable people. Our comprehensive training programs equip operators, technicians, facility managers, and maintenance teams with the practical skills needed to operate, monitor, troubleshoot, and maintain water and wastewater treatment systems safely and efficiently.\n\nTraining programs can be customized to suit industries, hospitals, institutions, municipalities, and commercial facilities.\n\nOur hands on training is delivered by experienced engineers who combine industry best practices with practical field experience, ensuring your team gains the confidence and competence to manage treatment systems effectively.",
    highlights: [
      "Hands-on site training during commissioning or system handover",
      "Standard Operating Procedures (SOPs) and safety protocols",
      "Our training covers chemical safety, dosing calculations, and water quality testing combined with basic electrical, mechanical, and instrumentation troubleshooting.",
      "We organize regular team refresh sessions and bonding meetings to strengthen collaboration, share new knowledge, and keep everyone updated on best practices."
    ],
    process: [
      {
        title: "Need Analysis",
        body: "We evaluate your staff's skill level and customize the training syllabus to your specific plant configuration.",
      },
      {
        title: "Practical Instruction",
        body: "Our engineers conduct on-site workshops, taking operators through startup, shutdown, backwash, and clean-in-place (CIP) procedures.",
      },
    ],
    applications: [
      "Malls",
      "Schools",
      "Universities",
      "Processing Industries",
      "Residential estates",
    ],
  },
  {
    slug: "retrofitting-and-upgrading",
    navLabel: "Retrofitting & Upgrading",
    title: "Retrofitting & Upgrading Existing Systems",
    tagline: "Modern Solutions for Existing Infrastructure.",
    heroImage: wastewater,
    intro:
      "As treatment technologies continue to evolve, older systems often struggle to meet today's operational demands and environmental standards. We specialize in upgrading, retrofitting, and modernizing existing treatment plants to improve efficiency, increase capacity, reduce operating costs, and enhance overall system reliability.\n\nWhether it's replacing outdated equipment, integrating automation, upgrading membranes, pumps, control systems, or improving process performance, we provide solutions that maximize the value of your existing investment.\n\nOur engineering team carefully evaluates your current system and recommends practical, cost-effective improvements that deliver measurable performance gains while minimizing operational disruptions.",
    highlights: [
      "Upgrading biological basins with MBBR carrier media or MBR membranes",
      "Replacing old pumps, blowers, and valves with energy-efficient models",
      "Integrating PLCs and HMI touchscreens for automated operation and remote monitoring",
      "Restoring compliance to plants that are failing NEMA discharge limits",
    ],
    process: [
      {
        title: "Site Evaluation",
        body: "Our engineers analyze your existing tanks, pipes, and electrical panels to check structural integrity and layout limits.",
      },
      {
        title: "Engineering Proposal",
        body: "We present a retrofit plan that details the capacity increases, expected operational savings, and minimal-downtime execution schedule.",
      },
    ],
    applications: [
      "Malls",
      "Schools",
      "Universities",
      "Processing Industries",
      "Residential estates",
    ],
  },
];

export const heroSlides = [
  {
    image: reverse,
    eyebrow: "Aqua RO Solutions",
    heading: "Advanced membrane technology \nfor clean, safe water",
    body: "Aqua Clean UF uses ultrafiltration membranes to remove suspended solids, bacteria, and viruses from water while retaining essential minerals.",
  },
  {
    image: ultrafiltration,
    eyebrow: "Aqua UF Systems",
    heading: "Advanced Membrane \nBioreactor",
    body: "High‑efficiency wastewater treatment combining biological processes with membrane filtration for superior water quality.",
  },
  {
    image: ctech,
    eyebrow: "Aqua RO",
    heading: "Intelligent batch\nwastewater treatment.",
    body: "Timed SBR cycles combining biological aeration and clarification in a single compact basin.",
  },
  {
    image: maintennance,
    eyebrow: "Support & AMC",
    heading: "Reliable Support.\nPredictable Performance.",
    body: "Scheduled preventive maintenance contracts and O&M staffing keeping utilities in peak condition.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "FAQs", to: "/faqs" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export const offices = [
  {
    country: "Kenya (Headquarters)",
    address: "TRV Centre, Parklands Road, Nairobi",
    phone: "+254 757515151 / +254 734590903",
    email: "info@aul.co.ke",
  },
];

export const technologies = [
  {
    name: "Aqua Clean UF",
    subtitle: "Advanced Ultrafiltration Purification",
    image: reverse,
    slug: "High-Efficiency Ultrafiltration System",
  },
  {
    name: "C-MEM MBR",
    subtitle: "Advanced membrane filtration",
    image: ultrafiltration,
    slug: "ultrafiltration-plant",
  },
  {
    name: "Aqua Clean RO",
    subtitle: " Advanced Reverse Osmosis",
    image: Ro,
    slug: "package-sbr-waste-water-treatment",
  },
  {
    name: "CTECH SBR",
    subtitle: "Sequence Batch Reactor",
    image: ctech,
    slug: "package-mbbr-waste-water-treatment",
  },
];
