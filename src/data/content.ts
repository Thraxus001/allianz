import uff from "../assets/uff.jpeg";
import effluent from "../assets/effluent.png";
import maintennance from "../assets/maintenance.jpeg";
import mbbr from "../assets/mbbr.jpeg";
import ultrafiltration from "../assets/ultrafiltration.png";
import wastewater from "../assets/wastewater.png";
import training from "../assets/training.jpeg";
import ctech from "../assets/ctech.webp";
import main from "../assets/maintenancee.jpeg";
import Ro from "../assets/RO.jpeg";


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
      "C-Tech SBR technology treats wastewater through a series of controlled treatment cycles within a single reactor. By integrating filling, biological aeration, settling, and decanting in one basin, the system provides efficient organic matter and nutrient removal for both domestic and industrial wastewater.\n\nOur C-Tech SBR systems are designed to deliver high treatment efficiency, compact installation, and optimized energy consumption, while maintaining consistent effluent quality and minimizing operational and maintenance costs.",
    highlights: [
      "Timed batch processing in a single reactor basin",
      "Eliminates secondary clarifiers and sludge recycling loops",
      "Flexible operation under high hydraulic and organic shock loads",
      "Highly automated PLC-controlled decanting cycles",
    ],
    process: [
      {
        title: "Filling",
        body: "Wastewater enters the reactor and fills the treatment basin.",
      },
      {
        title: "Aeration",
        body: "Controlled aeration promotes biological activity, allowing microorganisms to break down organic matter and remove nutrients.",
      },
      {
        title: "Settling",
        body: "Aeration is stopped, allowing the biological solids to settle naturally and form a clear supernatant layer.",
      },
      {
        title: "Decanting",
        body: "The treated supernatant is carefully decanted from the reactor, leaving the settled biomass behind for the next treatment cycle.",
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
    navLabel: "C-Mem MBR",
    title: "C-Mem MBR (Membrane Bioreactor)",
    tagline: "Advanced Wastewater Recycling with Membrane Technology.",
    heroImage: ultrafiltration,
    intro:
      "C-Mem MBR technology combines advanced biological wastewater treatment with membrane filtration to deliver exceptional effluent quality in a compact and highly efficient treatment system.\n\nThe technology integrates biological treatment with hollow-fiber ultrafiltration membranes submerged directly within the bioreactor. The membranes provide an effective physical barrier that retains suspended solids, bacteria, and other contaminants, producing a clear, high-quality effluent suitable for reuse and recycling applications.\n\nOur C-Mem MBR systems are engineered for high treatment performance, compact footprints, reliable operation, and reduced sludge production, making them ideal for applications where stringent effluent standards and water reuse are required.",
    highlights: [
      "Combines biological digestion with ultrafiltration membrane separation",
      "Produces high-purity effluent ready for reuse (toilet flushing, irrigation)",
      "Extremely compact footprint, eliminating settling tank requirements",
      "Premium high-flux membrane materials with automatic backwash",
    ],
    process: [
      {
        title: "Biological Treatment",
        body: "Wastewater enters the bioreactor, where aerated microorganisms break down dissolved organic matter and remove nutrients.",
      },
      {
        title: "Membrane Filtration",
        body: "The treated mixed liquor passes through fine-pore hollow-fiber membranes. The membranes retain activated sludge, suspended solids, bacteria, and other particulates while allowing treated water to pass through.",
      },
      {
        title: "Permeate Extraction",
        body: "A controlled suction or permeate pump draws the filtered water through the membranes, producing a clear and consistently high-quality effluent.",
      },
      {
        title: "Sludge Retention & Recirculation",
        body: "The membrane barrier retains biomass within the bioreactor, allowing high concentrations of active microorganisms to be maintained for enhanced treatment efficiency and reduced reactor volume.",
      },
      {
        title: "Treated Water Reuse",
        body: "The resulting permeate is suitable for applications requiring high-quality treated water, including toilet flushing, irrigation, industrial processes, cleaning, and other non-potable reuse applications, subject to the applicable treatment and reuse standards.",
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
      "Biokleen MBBR (Moving Bed Biofilm Reactor) technology uses specially designed floating biofilm carriers to provide a large surface area for the growth of active microorganisms within biological treatment tanks. This increases the concentration of treatment biomass and enhances the system’s capacity to remove organic matter and nutrients within a compact footprint.\n\nThe process is designed to handle variable flow and organic loading, making it a reliable solution for both domestic and industrial wastewater applications. Biokleen MBBR systems offer high treatment efficiency, operational flexibility, compact installation, and simplified maintenance, while reducing the space required for conventional biological treatment.",
    highlights: [
      "High active biomass concentration on floating carrier media",
      "Compact footprint compared to conventional activated sludge systems",
      "Self-regulating biofilm adjusts to organic load fluctuations",
      "Low operational maintenance with no sludge return activated loop",
    ],
    process: [
      {
        title: "Biofilm Carriers",
        body: "Wastewater enters an aerated basin containing free-floating, high-surface-area biofilm carriers. Microorganisms attach to the carrier surfaces and form an active biofilm that breaks down organic pollutants.",
      },
      {
        title: "Aeration & Mixing",
        body: "Continuous or controlled aeration keeps the carriers in constant movement while supplying oxygen required for biological activity. The movement promotes effective contact between wastewater, oxygen, and the biofilm.",
      },
      {
        title: "Biological Treatment",
        body: "As wastewater passes through the reactor, the microorganisms within the biofilm consume and degrade organic matter and, where configured, facilitate biological nitrogen removal.",
      },
      {
        title: "Clarification",
        body: "Treated wastewater flows to a settling or clarification stage, where excess biomass that has naturally detached from the carriers is separated from the treated water.",
      },
      {
        title: "Treated Effluent",
        body: "The clarified water is collected as treated effluent and can undergo additional polishing or disinfection where required to meet the intended discharge or reuse standards.",
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
      "Aqua Clean RO systems use high-pressure semi-permeable membranes to remove dissolved salts, heavy metals, silica, and other contaminants from brackish and borehole water.\n\nOur systems are engineered for high efficiency, reliable operation, and long-term membrane performance, providing high-quality water for laboratories, healthcare facilities, commercial applications, and industrial processes.",
    highlights: [
      "Sized for flow rates from 250 LPH to 100,000+ LPH",
      "High-rejection thin-film composite membranes",
      "VFD-driven high-pressure pumps for energy savings",
      "Integrated automated Clean-in-Place (CIP) wash systems",
    ],
    process: [
      {
        title: "Pre-Treatment Sizing",
        body: "Raw water is assessed for Fluorides, TDS, silica, turbidity, hardness, and Silt Density Index to correctly size filtration, softening, cartridge filters, and antiscalant dosing.",
      },
      {
        title: "Membrane Process",
        body: "Pre-treated feedwater passes through semi-permeable membranes under high pressure, separating high-quality permeate from concentrated brine.",
      },
      {
        title: "Permeate & Reject",
        body: "The purified permeate is collected for use, while the concentrated reject stream is discharged or managed for recovery where applicable.",
      },
      {
        title: "Final Treatment",
        body: "Where required, additional treatment such as UV, disinfection, remineralization, or pH correction can be incorporated to meet the final water quality requirements.",
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
    heroImage: uff,
    intro:
      "Aqua Clean UF (Ultrafiltration) systems use hollow-fiber membranes with pore sizes as fine as 0.02 microns to remove suspended solids, turbidity, bacteria, and viruses while retaining essential minerals.\n\nDesigned for borehole filtration, surface water treatment, and RO pre-treatment, our UF systems provide consistent water quality, compact operation, and reduced chemical and maintenance requirements.",
    highlights: [
      "Removes pathogens and macromolecules down to 0.02 microns",
      "High-flux hollow-fiber membranes with automated backwash",
      "Low-pressure operation requiring minimal power consumption",
      "Robust physical barrier against suspended matter and turbidity",
    ],
    process: [
      {
        title: "Barrier Filtration",
        body: "Raw water passes through hollow-fiber membranes, where suspended solids, turbidity, bacteria, and other particulates are retained.",
      },
      {
        title: "Membrane Separation",
        body: "The fine membrane pores provide a physical barrier against microorganisms and contaminants while allowing dissolved minerals to pass through.",
      },
      {
        title: "Automated Backwash",
        body: "The filtration flow is periodically reversed to flush accumulated solids from the membrane surface and restore filtration performance.",
      },
      {
        title: "Treated Water",
        body: "Filtered water is collected as high-quality permeate for direct use or further treatment, including as pre-treated feedwater for RO systems.",
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
    slug: "aqua-clean-lake-river",
    navLabel: "Aqua Clean Lake/River",
    title: "Aqua Clean Lake/River Water Treatment System",
    tagline: "High-Efficiency Surface Water Purification.",
    heroImage: effluent,
    intro:
      "Aqua Clean surface water treatment systems are designed to treat highly turbid lake and river water with varying organic loads. By combining clarification, chemical coagulation, filtration, and disinfection, the systems produce safe, high-quality water for communities, estates, and other applications.\n\nOur systems are available in skid-mounted or containerized configurations and are designed for efficient installation, reliable operation, and deployment in remote and rural locations.",
    highlights: [
      "Engineered for high turbidity and variable organic content",
      "Rapid coagulation-flocculation basins with lamella clarifiers",
      "Integrated final UV and chlorine disinfection channels",
      "Skid-mounted containerized designs for rapid deployment",
    ],
    process: [
      {
        title: "Clarification",
        body: "Coagulant dosing promotes the removal of mud, silt, suspended solids, and algae, which are separated in a lamella or other high-rate settling unit.",
      },
      {
        title: "Polishing",
        body: "Clarified water passes through sand and activated carbon filters to remove remaining fine particles, colour, taste, and organic contaminants.",
      },
      {
        title: "Disinfection",
        body: "The filtered water is disinfected using an appropriate process such as chlorination or UV, ensuring effective control of harmful microorganisms.",
      },
      {
        title: "Treated Water",
        body: "The final treated water is collected for potable supply or other intended uses, in accordance with the required water quality standards.",
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
      "We design and install central HVAC systems incorporating centrifugal chillers, air handling units, cooling towers, and duct networks for large commercial and industrial developments.\n\nOur HVAC solutions integrate water conditioning and treatment to minimize scaling, improve system efficiency, and ensure reliable long-term operation.",
    highlights: [
      "Central chiller layouts optimized for commercial cooling loads",
      "High-performance air handling and mechanical ventilation",
      "Integrated water pre-treatment to protect condenser loops",
      "Smart BMS integration for automation and energy tracking",
    ],
    process: [
      {
        title: "Thermal Exchange",
        body: "Chillers produce chilled water that circulates through the system and supplies air handling units to provide conditioned air throughout the building.",
      },
      {
        title: "Air Distribution",
        body: "AHUs regulate and distribute conditioned air through a network of ducts and diffusers, maintaining the required indoor temperature and comfort.",
      },
      {
        title: "Heat Rejection",
        body: "Cooling towers reject heat from the chilled-water system to the atmosphere, maintaining efficient chiller operation.",
      },
      {
        title: "Water Conditioning",
        body: "Integrated water treatment systems help control scale, corrosion, and fouling within cooling water circuits, protecting equipment and maintaining energy efficiency.",
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
    image: uff,
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
    image: uff,
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
