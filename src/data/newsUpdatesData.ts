import tworiversImg from "../assets/projects/tworivers.jpeg";
import sabisImg from "../assets/projects/sabis.jpeg";
import uonImg from "../assets/projects/uon.jpeg";
import dolphinImg from "../assets/projects/dolphin.jpeg";
import epzLeatherImg from "../assets/projects/industrialleather.jpeg";
import lifecareImg from "../assets/projects/lifecare.jpeg";
import biovaxImg from "../assets/projects/biovax.jpeg";
import boreholeImg from "../assets/borehole.jpg";
import waterVideo from "../assets/water.mp4";

export interface OngoingSite {
  id: string;
  title: string;
  client: string;
  category: "Operation & Maintenance" | "Water Treatment" | "Wastewater Treatment" | "HVAC & Utilities";
  location: string;
  status: "Active O&M" | "Installation Phase" | "Commissioning" | "System Expansion";
  capacity: string;
  description: string;
  progressPercentage: number;
  lastUpdated: string;
  image: string;
  keyFeatures: string[];
  hasVideo?: boolean;
}

export interface VideoShowcase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  videoSrc?: string;
  youtubeId?: string;
  thumbnail: string;
  duration: string;
  tag: string;
  clientOrLocation: string;
  isFeatured?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: "Field Update" | "Technology" | "Milestone" | "Sustainability";
  date: string;
  summary: string;
  readTime: string;
  author: string;
  image: string;
  bulletPoints?: string[];
}

export const ongoingSites: OngoingSite[] = [
  {
    id: "epza-cetp",
    title: "Common Effluent Treatment Plant (CETP) & ETP",
    client: "Kenya Industrial Leather Park - EPZA",
    category: "Wastewater Treatment",
    location: "Athi River, Machakos, Kenya",
    status: "Installation Phase",
    capacity: "10 MLD CETP & 2.5 MLD ETP",
    description: "Turnkey design, fabrication, and ongoing civil and electro-mechanical execution for an expansive 10 MLD Common Effluent Treatment Plant with a dedicated biological treatment train.",
    progressPercentage: 82,
    lastUpdated: "October 2026",
    image: epzLeatherImg,
    keyFeatures: [
      "10 MLD heavy industrial wastewater capacity",
      "Biological aeration and chemical coagulant dosing",
      "Advanced chromium and suspended solids separation",
      "Zero liquid discharge (ZLD) readiness phase"
    ],
    hasVideo: true,
  },
  {
    id: "two-rivers-om",
    title: "Central Utility O&M & Water Testing Lab",
    client: "Two Rivers Mall",
    category: "Operation & Maintenance",
    location: "Ruaka, Nairobi, Kenya",
    status: "Active O&M",
    capacity: "2,000 CMD RO & 1,500 m³/day MBBR",
    description: "Comprehensive 24/7 on-site operations, preventive mechanical maintenance, and certified chemical laboratory testing for East Africa's largest mixed-use commercial development.",
    progressPercentage: 100,
    lastUpdated: "Ongoing - Live 24/7",
    image: tworiversImg,
    keyFeatures: [
      "2,000 CMD brackish water Reverse Osmosis line",
      "1,500 m³/day biological MBBR wastewater plant",
      "On-site ISO-compliant water testing laboratory",
      "Real-time SCADA parameter monitoring"
    ],
    hasVideo: true,
  },
  {
    id: "dolphin-desal",
    title: "Seawater RO Desalination & BioKleen MBBR",
    client: "Dolphine Hotel",
    category: "Water Treatment",
    location: "Mombasa Coastal Region, Kenya",
    status: "Commissioning",
    capacity: "15,000 m³/day RO & 250 m³/day MBBR",
    description: "Engineering, high-pressure membrane installation, and trial commissioning for high-efficiency coastal seawater desalination paired with complete greywater recycling for landscaping.",
    progressPercentage: 94,
    lastUpdated: "October 2026",
    image: dolphinImg,
    keyFeatures: [
      "Energy-recovery high-pressure seawater reverse osmosis",
      "BioKleen MBBR compact wastewater recycling",
      "Marine-grade corrosion-resistant alloy piping",
      "Automated Clean-In-Place (CIP) membrane skid"
    ],
    hasVideo: true,
  },
  {
    id: "sabis-school",
    title: "Turnkey RO & MBR Reclamation Facility",
    client: "Sabis International School",
    category: "Operation & Maintenance",
    location: "Runda, Nairobi, Kenya",
    status: "Active O&M",
    capacity: "20,000 LPH RO & 300 KLD MBR",
    description: "Multi-stage drinking water purification providing student and staff potable water, combined with high-grade ultrafiltration membrane bioreactor wastewater treatment.",
    progressPercentage: 100,
    lastUpdated: "Ongoing Support",
    image: sabisImg,
    keyFeatures: [
      "Multi-barrier 20,000 LPH potable water RO",
      "Submerged hollow-fiber membrane bioreactor (MBR)",
      "Zero-odor biological treatment in educational setting",
      "Full compliance with WHO potable water parameters"
    ],
  },
  {
    id: "uon-mbr",
    title: "Campus MBR Wastewater Re-engineering",
    client: "University of Nairobi",
    category: "Operation & Maintenance",
    location: "Nairobi Campus, Kenya",
    status: "System Expansion",
    capacity: "150 Kilolitres Per Day",
    description: "Ongoing re-engineering and expansion of biological filtration capacity to handle peak university population discharge with automated solids discharge.",
    progressPercentage: 75,
    lastUpdated: "September 2026",
    image: uonImg,
    keyFeatures: [
      "150 KLD peak campus wastewater throughput",
      "Submersible aeration blowers with VFD control",
      "Treated effluent repurposed for campus green areas",
      "Routine operator skill refresher training"
    ],
  },
  {
    id: "lifecare-dialysis",
    title: "Clinical Hemodialysis Grade RO System O&M",
    client: "LifeCare Hospitals",
    category: "Operation & Maintenance",
    location: "Multiple Branches, Kenya",
    status: "Active O&M",
    capacity: "Clinical Medical Grade RO",
    description: "Strict scheduled preventive servicing, microbial testing, and endotoxin monitoring for ultra-pure water systems directly serving hemodialysis treatment suites.",
    progressPercentage: 100,
    lastUpdated: "Ongoing 24/7 Priority",
    image: lifecareImg,
    keyFeatures: [
      "Ultra-pure medical grade RO conductivity standards",
      "Dual-pass reverse osmosis with UV disinfection",
      "Continuous endotoxin and microbial filtration",
      "Priority 2-hour emergency technician dispatch"
    ],
  },
];

export const videoShowcases: VideoShowcase[] = [
  {
    id: "ntv-dental-fluorosis-nairobi",
    title: "Dental Fluorosis: The Silent Crisis in Nairobi Water | NTV News Feature",
    subtitle: "High fluoride levels in Nairobi borehole water & the necessity for certified defluoridation",
    description: "An investigative NTV News report covering the widespread dental fluorosis affecting residents due to elevated fluoride levels in Nairobi and Great Rift Valley groundwater. Allianz Utilities highlights the critical engineering solutions — including specialized selective ion-exchange defluoridation and brackish water Reverse Osmosis (RO) — required to eliminate excessive fluoride down to safe WHO and KEBS limits (< 1.5 mg/L).",
    youtubeId: "46IlbKxlkpw",
    thumbnail: "https://img.youtube.com/vi/46IlbKxlkpw/hqdefault.jpg",
    duration: "NTV Feature",
    tag: "NTV News Report",
    clientOrLocation: "Nairobi & Environs, Kenya",
    isFeatured: true,
  },
  {
    id: "water-treatment-process",
    title: "High-Efficiency Water Treatment & Flow Hydraulics",
    subtitle: "Real-time look inside Allianz Utilities fluid processing & plant cycles",
    description: "Watch our automated treatment systems in motion, featuring high-flow intake, pressurized filtration, and precision membrane separation across East African installations.",
    videoSrc: waterVideo,
    thumbnail: biovaxImg,
    duration: "1:45",
    tag: "Plant Technology",
    clientOrLocation: "Allianz Engineering Facility",
    isFeatured: false,
  },
  {
    id: "epza-leather-tour",
    title: "EPZA 10 MLD CETP Construction & Engineering Tour",
    subtitle: "On-site walk-through of the massive biological reactor basins",
    description: "Field engineers inspect the installation of mechanical aerators, clarifiers, and transfer piping at Kenya Industrial Leather Park, Athi River.",
    thumbnail: epzLeatherImg,
    duration: "3:10",
    tag: "Ongoing Site",
    clientOrLocation: "Athi River, Kenya",
  },
  {
    id: "two-rivers-lab",
    title: "Two Rivers Mall Central Utility Plant & Water Lab Tour",
    subtitle: "Daily operations of 3,500 m³/day combined RO & MBBR facility",
    description: "Behind the scenes with our O&M team running daily wet chemistry water testing, pump calibrations, and membrane CIP backwashes.",
    thumbnail: tworiversImg,
    duration: "2:30",
    tag: "O&M Operations",
    clientOrLocation: "Ruaka, Nairobi",
  },
  {
    id: "dolphin-desal-tour",
    title: "Coastal Seawater RO Desalination Skid Inspection",
    subtitle: "Marine intake and high-pressure reverse osmosis commissioning",
    description: "Watch the trial run of high-pressure energy recovery turbines converting Indian Ocean seawater into WHO-standard potable water.",
    thumbnail: dolphinImg,
    duration: "2:05",
    tag: "Commissioning",
    clientOrLocation: "Mombasa, Coast",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "ntv-fluoride-dental-fluorosis-nairobi",
    title: "NTV Investigative Report: Tackling Nairobi's High-Fluoride Crisis & Dental Fluorosis",
    category: "Field Update",
    date: "October 2026",
    readTime: "3 min read",
    author: "Water Quality & Public Health Desk",
    image: boreholeImg,
    summary: "A recent NTV News report highlights the alarming prevalence of dental fluorosis across Nairobi due to high natural fluoride in borehole water. Allianz Utilities offers proven, turnkey defluoridation and Reverse Osmosis solutions to restore safe drinking water.",
    bulletPoints: [
      "Borehole tests across Nairobi and satellite towns frequently reveal fluoride levels ranging from 4 to over 15 mg/L (safe threshold is 1.5 mg/L)",
      "Continuous ingestion during tooth formation causes permanent yellow/brown enamel staining, mottling, and structural brittleness",
      "Allianz Utilities manufactures custom Defluoridation Units and Aqua Clean Brackish RO skids achieving up to 98% fluoride removal",
      "Tailored for schools, residential gated communities, hospitals, and bottling facilities across East Africa"
    ],
  },
  {
    id: "cetp-milestone-athi-river",
    title: "Milestone Reached: Civil Works Completed on 10 MLD Athi River CETP",
    category: "Milestone",
    date: "October 2026",
    readTime: "3 min read",
    author: "Allianz Projects Team",
    image: epzLeatherImg,
    summary: "Allianz Utilities has successfully reached 80%+ completion on the Common Effluent Treatment Plant at the Kenya Industrial Leather Park, gearing up for electro-mechanical commissioning.",
    bulletPoints: [
      "Completed main biological reactor basin concrete pouring and lining",
      "Delivered high-efficiency aeration blowers and membrane racks",
      "Begun piping interconnects with neighboring industrial tanneries"
    ],
  },
  {
    id: "water-testing-two-rivers",
    title: "Two Rivers Water Lab Surpasses 50,000 Parameter Analyses",
    category: "Field Update",
    date: "September 2026",
    readTime: "2 min read",
    author: "Quality & Compliance Desk",
    image: tworiversImg,
    summary: "Our dedicated on-site laboratory at Two Rivers Mall celebrated a benchmark achievement in continuous daily water quality assurance for commercial tenants and residential occupants.",
    bulletPoints: [
      "100% compliance with NEMA discharge standards maintained",
      "Over 99.8% plant uptime across all Reverse Osmosis units",
      "Daily chemical and microbial safety logs audited"
    ],
  },
  {
    id: "dialysis-purity-lifecare",
    title: "Medical-Grade Water Purity Protocols Upgraded Across Healthcare Partners",
    category: "Technology",
    date: "August 2026",
    readTime: "4 min read",
    author: "Engineering Services",
    image: lifecareImg,
    summary: "In partnership with leading hospital networks, Allianz Utilities has deployed upgraded real-time digital conductivity sensors and secondary UV sterilizers for hemodialysis water loops.",
    bulletPoints: [
      "Sub-microsecond resistivity and conductivity monitoring",
      "Automated sanitization cycling to eliminate biofilm formation",
      "Emergency hot-standby pumps ensuring 100% patient treatment continuity"
    ],
  },
];
