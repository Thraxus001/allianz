import reverse from "../assets/reverse.jpeg";
import maintennance from "../assets/maintenance.jpeg";
import Aquamembrane from "../assets/aqua-membrane.jpg";
import wastewater from "../assets/wastewater.png";
import effluent from "../assets/effluent.png";
import ultrafiltration from "../assets/ultrafiltration.png";
import mbbr from "../assets/mbbr.jpeg";
import wasteplant from "../assets/wasteplant.png";
import ctech from "../assets/ctech.png";
import sbr from "../assets/sbr.png";

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
};

export const products: Product[] = [
  {
    slug: "waste-water-treatment-plant",
    navLabel: "Waste Water Treatment Plant",
    title: "Waste Water Treatment Plants",
    tagline: "C-TECH™ cyclic activated sludge, engineered for continuous compliance.",
    heroImage:
      wastewater,
    intro:
      "Our municipal and industrial wastewater plants run on the C-TECH™ cyclic activated sludge process, carrying out carbon oxidation, nitrification, denitrification and biological phosphorus removal inside a single continuous cycle — no equalization tanks, no mixers, no shock filling.",
    highlights: [
      "Selector suppresses filamentous, bulking sludge and boosts bio-P removal",
      "Oxygen Uptake Rate (OUR) software regulates aeration for lower running costs",
      "Typical cycle of 2–4 hours: aeration, settling, decanting",
      "Round, square or container-based tank formats to fit the site",
      "Reference plants on every continent, up to 600,000 m³/day",
    ],
    process: [
      {
        title: "Continuous cycling",
        body: "Parallel tanks keep the plant online during maintenance, with the PLC control system able to take a single tank offline without breaking treatment continuity.",
      },
      {
        title: "Simultaneous nutrient removal",
        body: "Nitrification happens at the outside of the floc while denitrification happens within it, meeting effluent targets of BOD/SS/TN/TP under 10/10/10/10/1 mg/l.",
      },
    ],
    applications: [
      "Municipal wastewater treatment",
      "Beverage and food industry",
      "Paper, pulp and wood industry",
      "Pharmaceutical and chemical industry",
      "Petrochemical industry",
      "Textile production",
    ],
  },
  {
    slug: "reverse-osmosis-system",
    navLabel: "Reverse Osmosis System",
    title: "Reverse Osmosis Systems",
    tagline: "AQUA series membrane filtration for seawater, brackish and process water.",
    heroImage:
      Aquamembrane,
    intro:
      "Where conventional purification can't keep up — seawater, high-conductivity borehole water, demanding process streams — our AQUA reverse osmosis skids apply pressure across a selective membrane to reject dissolved minerals and deliver consistent permeate quality.",
    highlights: [
      "AQUA 180 through AQUA 9680: 1–96 m³/hour at 20°C",
      "8\" TFC spiral membranes with FRP pressure vessels",
      "AISI304 stainless steel high-pressure centrifugal pumps",
      "Cross-flow operation keeps membrane surfaces self-cleaning",
      "Automatic flushing, conductivity monitoring and optional CIP skid",
    ],
    process: [
      {
        title: "Cross-flow membrane transport",
        body: "Feedwater splits into permeate that passes through the membrane and concentrate that sweeps parallel to its surface, limiting scale build-up and extending membrane life.",
      },
      {
        title: "Feedwater readiness",
        body: "We size pretreatment against your feed TDS, pH, silica, iron and turbidity so the membranes see water within their recommended operating envelope.",
      },
    ],
    applications: [
      "Desalination for coastal and island sites",
      "Brackish borehole water treatment",
      "Boiler and process feedwater",
      "Bottled and packaged water production",
      "Pretreatment polishing ahead of ultrapure systems",
    ],
    specNote:
      "Recommended feed limits: TDS 0–2,000 ppm, pH 6–8, silica under 25 ppm, feed temperature 10–30°C.",
  },
  {
    slug: "ultrafiltration-plant",
    navLabel: "Ultrafiltration Plant",
    title: "Ultrafiltration Plants",
    tagline: "C-MEM™ hollow-fibre membranes rated to 0.02 µm.",
    heroImage:
      ultrafiltration,
    intro:
      "C-MEM™ ultrafiltration replaces flocculation, sedimentation and sand filtration with a single membrane stage. Built on PFAS-free hollow-fibre HDPE with a 20-nanometre pore size, it holds back 99.9999% of bacteria, viruses, worm eggs and suspended solids.",
    highlights: [
      "Hollow fibre geometry OD 0.4 mm / ID 0.2 mm, PFAS-free",
      "TMP range 50–600 mbar submerged, up to 3 bar pressurized",
      "Flux up to 200 l/m² h at 2 bar",
      "Sealed, individually replaceable cartridges — low maintenance",
      "Suitable for submerged open-tank or pressurized configurations",
    ],
    process: [
      {
        title: "Filtration cycle",
        body: "Raw water is drawn through the fibre wall from outside-in, leaving particles, bacteria and viruses on the membrane surface while clean permeate passes through.",
      },
      {
        title: "Backwash cycle",
        body: "Air scouring and a reverse water pulse lift retained solids off the fibres, keeping the cartridge productive without chemical-heavy cleaning regimes.",
      },
    ],
    applications: [
      "Membrane bioreactor (C-MEM™ MBR) pretreatment",
      "Landfill leachate and greywater treatment",
      "Pretreatment ahead of nanofiltration or reverse osmosis",
      "Drinking water: turbidity, arsenic, manganese and iron removal",
      "Compact household and municipal drinking water systems",
    ],
  },
  {
    slug: "effluent-treatment-plant",
    navLabel: "Effluent Treatment Plant",
    title: "Effluent Treatment Plants",
    tagline: "Purpose-built trains for industrial discharge compliance.",
    heroImage:
      effluent,
    intro:
      "Every effluent stream is different, so we design each treatment train around your inlet chemistry and the discharge limit you need to hit — combining physical, chemical and biological stages so treated effluent clears local environmental standards, including NEMA in Kenya.",
    highlights: [
      "Primary treatment target of FOG under 100 mg/l ahead of biological stages",
      "Configuration matched to inlet/outlet parameters and wastewater temperature",
      "Coagulation, flocculation, pH correction and disinfection dosing as required",
      "Designed for variable organic and hydraulic loading",
      "Full compliance sampling and lab analysis available as an ongoing service",
    ],
    process: [
      {
        title: "Screening and primary treatment",
        body: "Coarse solids and free oil and grease are removed first to protect downstream biological and membrane stages.",
      },
      {
        title: "Biological and polishing stages",
        body: "MBBR, activated sludge or C-TECH™ biology reduces BOD/COD/ammonia, followed by clarification, filtration and disinfection to meet the agreed discharge quality.",
      },
    ],
    applications: [
      "Food and beverage processing",
      "Textile and dye industries",
      "Tanneries and leather processing",
      "Pharmaceutical manufacturing",
      "Commercial and industrial estates",
    ],
  },
  {
    slug: "package-mbbr-waste-water-treatment",
    navLabel: "Package MBBR Waste Water Treatment",
    title: "Package MBBR Waste Water Treatment",
    tagline: "Factory-built moving bed biofilm reactors, ready to drop in and connect.",
    heroImage:
      mbbr,
    intro:
      "Our packaged Biokleen MBBR units carry biofilm-forming carrier media inside a pre-built, containerised reactor — a fast route to reliable BOD, COD and ammonia removal without the footprint or civil works of a conventional plant.",
    highlights: [
      "Floating carriers at 0.93–0.95 SG, protected surface for bacterial culture",
      "Standard maximum media fill fraction of 70% in the reactor",
      "No sludge recirculation required",
      "Handles variable flow and shock loads without losing biomass",
      "Scales from 20 m³/day up to 10,000 m³/day",
    ],
    process: [
      {
        title: "Attached-growth biology",
        body: "Bacteria colonise the protected surface of each carrier, so the active biomass stays inside the reactor rather than washing out with the flow.",
      },
      {
        title: "Factory-built delivery",
        body: "The reactor tank, diffuser system and media retention screens arrive pre-assembled, cutting on-site installation time significantly versus poured-in-place tanks.",
      },
    ],
    applications: [
      "Hotels, resorts and residential estates",
      "Shopping malls and commercial buildings",
      "Schools and hospitals",
      "Breweries, distilleries and dairy processing",
      "Upgrading lagoons or oxidation ponds to meet new limits",
    ],
  },
  {
    slug: "package-waste-water-treatment",
    navLabel: "Package Waste Water Treatment",
    title: "Package Waste Water Treatment Plants",
    tagline: "Complete, containerised treatment for sites without space for a conventional works.",
    heroImage:
      wasteplant,
    intro:
      "For estates, institutions and industrial sites that need treatment on a compact footprint, our packaged plants combine screening, biological treatment and clarification into a single delivered unit — commissioned faster than a site-built plant and easy to expand later.",
    highlights: [
      "Above-ground or underground plant concepts",
      "Modular design — add capacity as demand grows",
      "Lower mechanical and electrical engineering requirement than conventional builds",
      "Suited to sites with limited buffer zone or land availability",
      "Backed by Allianz Utilities O&M and AMC service plans",
    ],
    process: [
      {
        title: "Site-matched configuration",
        body: "We select the biological process — MBBR, SBR or extended aeration — against your flow, loading and available footprint before the unit is built.",
      },
      {
        title: "Delivery and commissioning",
        body: "Units are shipped substantially complete, positioned on a prepared base, connected, and commissioned by our field engineers.",
      },
    ],
    applications: [
      "Real estate developments and gated communities",
      "Remote or off-grid institutional sites",
      "Construction camps and temporary facilities",
      "Small to mid-size industrial premises",
      "Emergency or interim treatment capacity",
    ],
  },
  {
    slug: "package-sbr-waste-water-treatment",
    navLabel: "Package SBR Waste Water Treatment",
    title: "Package SBR Waste Water Treatment Plants",
    tagline: "Reliable SBR technology for compact and flexible industrial and domestic wastewater treatment.",
    heroImage: sbr,
    intro:
      "Sequencing Batch Reactors (SBRs) offer a highly effective alternative for advanced wastewater treatment. By operating under non-steady state conditions inside a single reactor tank, Allianz Utilities SBR systems handle a broad array of influent volumes and discharge chemistry variations using advanced automation and flexible geometries.",
    highlights: [
      "Single tank configuration eliminates the need for external clarifiers",
      "Flexible plant geometry suitable for circular, square, or rectangular layouts",
      "Low operating costs and capital investment requirements",
      "Robust biological nutrient removal (nitrogen, phosphorus) and BOD reduction",
      "Highly adaptable for constrained spaces like resorts, commercial towers, and tourism zones",
      "Complete automatic plant operation with peak load compensation",
    ],
    process: [
      {
        title: "Flexible Volume Feeding",
        body: "SBR operates effectively under varying hydraulic rates and organic loads, balancing biological treatment cycles without relying on a fixed, rigid influent flow rate.",
      },
      {
        title: "Advanced Sludge Sequencing",
        body: "A complete treatment sequence—including filling, aeration, settling, and decanting—takes place inside a single compact basin, delivering high purification rates and heavy metal removal (cyanide, copper, nickel).",
      },
    ],
    applications: [
      "Tourism areas, hotels and recreation centers",
      "Commercial office towers and residential buildings",
      "Industrial effluent treatment (metal and nutrient removal)",
      "Municipal and domestic wastewater recycling",
    ],
  },
];

export const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1621274790572-7c32596bc67f?q=80&w=1920&auto=format&fit=crop",
    eyebrow: "Municipal & Industrial",
    heading: "Clean water,\nengineered to last.",
    body: "Water treatment, wastewater treatment, HVAC, spares and AMC across East Africa.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop",
    eyebrow: "C-TECH™ Biological Treatment",
    heading: "Compact plants.\nUncompromising compliance.",
    body: "Cyclic activated sludge technology proven across 1,500+ reference sites worldwide.",
  },
  {
    image:
      reverse,
    eyebrow: "Reverse Osmosis & Ultrafiltration",
    heading: "From seawater\nto drinking water.",
    body: "Membrane technology sized and engineered for your feedwater, not off a shelf.",
  },
  {
    image:
      maintennance,
    eyebrow: "Operations & Maintenance",
    heading: "We stay long\nafter commissioning.",
    body: "Full-scope O&M, annual maintenance contracts and OEM spares, on-site.",
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "Products & Services", to: "/products-and-services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export const offices = [
  {
    country: "Kenya (Headquarters)",
    address: "Nairobi Office, TRV Centre, 2201–2202, Rupa Renaissance, Turbhe MIDC",
    phone: "+91 662 2349 02",
    email: "kenya@allianzutilities.com",
  },
  {
    country: "Rwanda",
    address: "Kigali Operations Centre, Julius-Salzburg",
    phone: "+43 662 4349 02",
    email: "rwanda@allianzutilities.com",
  },
  {
    country: "Ethiopia",
    address: "Addis Ababa Field Office, Addis Ababa 2107",
    phone: "+43 662 4349 02",
    email: "ethiopia@allianzutilities.com",
  },
];

export const technologies = [
  {
    name: "C-TECH™",
    subtitle: "Cyclic activated sludge process",
    image:
      ctech,
    slug: "waste-water-treatment-plant",
  },
  {
    name: "C-MEM™",
    subtitle: "Ultrafiltration",
    image:
      ultrafiltration,
    slug: "ultrafiltration-plant",
  },
  {
    name: "Biokleen MBBR",
    subtitle: "Moving bed biofilm reactor",
    image:
      mbbr,
    slug: "package-mbbr-waste-water-treatment",
  },
  {
    name: "Reverse Osmosis",
    subtitle: "AQUA membrane series",
    image:
      Aquamembrane,
    slug: "reverse-osmosis-system",
  },
];
