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
import cmemzero from "../assets/cmemzero.png";
import membraloop from "../assets/Membraloop.png";
import clarifiers from "../assets/clarrifiers.webp"; 
import zeroliquid  from "../assets/zeroliquid.webp";
import effluenttreatment from "../assets/effluenttreatment.webp";
import watersoftener from "../assets/water softerner.webp";
import filtrationplant from "../assets/filtrationplant.jpeg";
import cion from "../assets/cion.webp";

export type SubProduct = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  heroImage: string;
  process: { title: string; body: string }[];
  pdfFile: string;
  pdfSize: string;
};

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
  category: "Waste Water Treatment" | "Water Treatment" | "River Water Cleaning and Rejuvenation" | "HVAC & Utilities";
  subProducts?: SubProduct[];
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
  // WASTE WATER TREATMENT
  {
    slug: "c-tech-sbr",
    navLabel: "C-TECH SBR",
    title: "C-Tech SBR (Sequencing Batch Reactor)",
    tagline: "Intelligent Cyclic Activated Sludge Wastewater Treatment.",
    heroImage: ctech,
    category: "Waste Water Treatment",
    intro:
      "C-Tech SBR is a technology from SFC; An Austrian company based in Salzburg, with over 30 years of global leadership in innovative drinking water treatment, wastewater treatment, and water reuse technologies.\n\nC-Tech SBR technology treats wastewater through a series of controlled treatment cycles within a single reactor. By integrating filling, biological aeration, settling, and decanting in one basin, the system provides efficient organic matter and nutrient removal for both domestic and industrial wastewater.\n\nOur C-Tech SBR systems are designed to deliver high treatment efficiency, compact installation, and optimized energy consumption, while maintaining consistent effluent quality and minimizing operational and maintenance costs.",
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
    pdfFile: "SBR.pdf",
    pdfSize: "3.5 KB",
  },
  {
    slug: "c-mem-mbr",
    navLabel: "C-MEM MBR",
    title: "C-Mem MBR (Membrane Bioreactor)",
    tagline: "Advanced Wastewater Recycling with Membrane Technology.",
    heroImage: ultrafiltration,
    category: "Waste Water Treatment",
    intro:
      "C-MEM MBR is a technology from SFC; An Austrian company based in Salzburg, with over 30 years of global leadership in innovative drinking water treatment, wastewater treatment, and water reuse technologies.\n\nC-Mem MBR technology combines advanced biological wastewater treatment with membrane filtration to deliver exceptional effluent quality in a compact and highly efficient treatment system. The technology integrates biological treatment with hollow-fiber ultrafiltration membranes submerged directly within the bioreactor. The membranes provide an effective physical barrier that retains suspended solids, bacteria, and other contaminants, producing a clear, high-quality effluent suitable for reuse and recycling applications. Our C-Mem MBR systems are engineered for high treatment performance, compact footprints, reliable operation, and reduced sludge production, making them ideal for applications where stringent effluent standards and water reuse are required.",
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
    pdfFile: "MBR.pdf",
    pdfSize: "2.9 KB",
  },
  {
    slug: "biokleen-mbbr",
    navLabel: "BioKleen MBBR",
    title: "BioKleen MBBR (Moving Bed Biofilm Reactor)",
    tagline: "High-Efficiency Biological Wastewater Treatment.",
    heroImage: mbbr,
    category: "Waste Water Treatment",
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
    slug: "effluent-treatment-plant",
    navLabel: "Effluent Treatment Plant",
    title: "Effluent Treatment Plant (ETP)",
    tagline: "Custom Engineered Solutions for Industrial Effluent Reclamation.",
    heroImage: effluenttreatment,
    category: "Waste Water Treatment",
    intro:
      "Our Effluent Treatment Plants (ETP) are custom-engineered to handle complex industrial streams by combining precise physical screening, chemical conditioning, clarification, biological oxidation, and tertiary filtration. We deliver a complete unit process treatment train designed to reduce organic load, remove heavy metals, and achieve compliant effluent quality.",
    highlights: [
      "Coarse (10-25 mm) and fine (1-6 mm) physical screening barriers",
      "Sized equalization tank (6-24h) and pH correction (6.5-8.5)",
      "Coagulation-flocculation and primary/secondary clarification treatment train",
      "Aerobic biological reactors maintaining dissolved oxygen (DO) of 2-3 mg/L",
    ],
    process: [
      {
        title: "Screening",
        body: "Coarse screens (10-25 mm opening) and fine screens (1-6 mm opening) remove floating debris and large suspended solids.",
      },
      {
        title: "Equalization & pH Correction",
        body: "An equalization tank sized for 6-24 hours of average flow balances inlet variations, followed by adjustment to pH 6.5-8.5.",
      },
      {
        title: "Coagulation & Flocculation",
        body: "Chemical dosing includes rapid mixing (1-5 minutes) and flocculation (15-30 minutes) to agglomerate microscopic particles into heavy flocs.",
      },
      {
        title: "Primary Clarification",
        body: "The conditioned wastewater settles in primary clarifiers with approximately 1.5-2.5 hours detention time to remove settleable solids.",
      },
      {
        title: "Aerobic Biological Reactor",
        body: "Aerated biological systems maintain a dissolved oxygen (DO) level of 2-3 mg/L, enabling microbial degradation of dissolved organics.",
      },
      {
        title: "Secondary Clarification & Sludge Handling",
        body: "Secondary clarifiers separate active biomass, while excess sludge undergoes thickening, dewatering, and approved disposal.",
      },
      {
        title: "Tertiary Filtration & Disinfection",
        body: "Tertiary sand filtration (5-15 m/h) and activated carbon remove trace organics and colour, followed by UV, chlorine, or ozone disinfection.",
      },
    ],
    applications: [
      "Food and beverage factories",
      "Pharmaceutical manufacturing plants",
      "Agricultural processing sites",
      "Chemical processing facilities",
    ],
    pdfFile: "ETP.pdf",
    pdfSize: "2.6 KB",
  },
  {
    slug: "zero-liquid-discharge",
    navLabel: "Zero Liquid Discharge (ZLD)",
    title: "Zero Liquid Discharge (ZLD) Systems",
    tagline: "Ultimate Water Recovery and Industrial Effluent Elimination.",
    heroImage: zeroliquid,
    category: "Waste Water Treatment",
    intro:
      "Allianz Utilities Zero Liquid Discharge (ZLD) systems employ advanced thermal evaporation and crystallization technologies to eliminate wastewater discharge completely. The system purifies industrial effluent, recovering up to 98% of high-purity water for reuse while converting remaining dissolved solids into solid dry crystals for disposal or secondary resource recovery.",
    highlights: [
      "Complete elimination of wastewater discharge",
      "High-efficiency mechanical vapor recompression (MVR) evaporators",
      "Recovers up to 98% of process water for reuse",
      "Robust corrosion-resistant material construction (Titanium/Duplex)",
    ],
    process: [
      {
        title: "Pre-Concentration",
        body: "Reverse Osmosis membranes concentrate salinity levels, reducing the volume of water sent to evaporators.",
      },
      {
        title: "Thermal Evaporation",
        body: "High-efficiency MVR heating evaporates water vapor, which is condensed and recovered as pure distillate.",
      },
      {
        title: "Crystallization",
        body: "The remaining highly concentrated brine slurry is crystallized, forming a dry solid cake of salt.",
      },
      {
        title: "Distillate Recovery",
        body: "Pure condensed water is returned directly to the plant's process loop, closing the water cycle.",
      },
    ],
    applications: [
      "Chemical manufacturing",
      "Pharmaceutical production",
      "Power plants and mining",
      "Eco-industrial zones",
    ],
    pdfFile: "zero-liquid-discharge-datasheet.pdf",
    pdfSize: "2.6 KB",
  },

  // WATER TREATMENT
  {
    slug: "filtration-plant",
    navLabel: "Filtration plant",
    title: "Filtration Plant Systems",
    tagline: "Multi-Media, Activated Carbon, and Depth Sand Filtration.",
    heroImage: filtrationplant,
    category: "Water Treatment",
    intro:
      "Our commercial and industrial Filtration Plants utilize depth sand media, activated carbon, and iron removal filtration to extract suspended solids, turbidity, chlorine, odors, and dissolved metals from raw borehole or municipal water. These units provide vital pre-filtration to protect downstream RO membranes and ensure clean utility water.",
    highlights: [
      "Multi-grade sand media for particles down to 10-15 microns",
      "High-adsorption coconut shell activated carbon",
      "Automated multiport valve control for automatic backwash",
      "Durable fiber-reinforced plastic (FRP) vessel construction",
    ],
    process: [
      {
        title: "Mechanical Filtration",
        body: "Water flows through layers of graduated sand, anthracite, and gravel, trapping suspended debris and dirt.",
      },
      {
        title: "Carbon Adsorption",
        body: "Activated carbon granules chemically bind organic contaminants, chlorine, taste, and foul odors.",
      },
      {
        title: "Automatic Backwash",
        body: "A pressure-based trigger reverses the flow to flush out collected dirt to drain, restoring filter bed efficiency.",
      },
    ],
    applications: [
      "Borehole water pre-treatment",
      "Commercial building utility water supply",
      "Cooling tower loop protection",
      "Pre-filtration for Reverse Osmosis systems",
    ],
    pdfFile: "Filtration.pdf",
    pdfSize: "2.3 KB",
    subProducts: [
      {
        slug: "multimedia-filters",
        title: "Multimedia Filters (Sand/Glass Filters)",
        tagline: "High-Performance Particulate and Turbidity Reduction.",
        intro: "Using layers of high-grade quartz sand and activated glass media, our multimedia filters remove suspended solids, sediment, and colloidal matter down to 10 microns, protecting downstream processes.",
        heroImage: filtrationplant,
        process: [
          {
            title: "Pressure Filtration",
            body: "Feed water flows downward through increasingly fine media layers, trapping particulate matter."
          },
          {
            title: "Media Backwash",
            body: "Flow is periodically reversed to expand the bed and flush accumulated solids to drain."
          }
        ],
        pdfFile: "Filtration.pdf",
        pdfSize: "2.3 KB"
      },
      {
        slug: "activated-carbon-filters",
        title: "Activated Carbon Filters",
        tagline: "Adsorption Filtration for Chlorine, Taste, and Odor Removal.",
        intro: "Engineered with premium coconut-shell activated carbon, these filters chemically adsorb chlorine, volatile organic compounds (VOCs), organic color, and off-tastes from utility water streams.",
        heroImage: filtrationplant,
        process: [
          {
            title: "Adsorption Phase",
            body: "Organics and chlorine contaminants bind to the carbon's micro-porous surface."
          },
          {
            title: "Scouring & Flush",
            body: "Air scouring and backwashing loosen sediment and restore performance."
          }
        ],
        pdfFile: "Filtration.pdf",
        pdfSize: "2.3 KB"
      },
      {
        slug: "ion-removal-filter",
        title: "Ion Removal Filter",
        tagline: "Selective Catalytic Reduction of Iron and Heavy Metals.",
        intro: "Utilizing catalytic and selective adsorption media, these units oxidation-precipitate and filter out dissolved iron, manganese, and trace heavy metals from raw ground water.",
        heroImage: filtrationplant,
        process: [
          {
            title: "Catalytic Oxidation",
            body: "Dissolved metals are oxidized on the media surface, transforming into filterable solids."
          },
          {
            title: "Backwash Cycle",
            body: "Precipitated metal flocs are backwashed out of the filter bed."
          }
        ],
        pdfFile: "Filtration.pdf",
        pdfSize: "2.3 KB"
      },
      {
        slug: "cartridge-filter",
        title: "Cartridge Filter",
        tagline: "Precision Micro-Filtration and Guard Barriers.",
        intro: "Featuring wound or pleated micro-fiber cartridge elements, our cartridge filters act as the final physical guard barrier (1-5 microns) to protect high-pressure RO membranes.",
        heroImage: filtrationplant,
        process: [
          {
            title: "Guard Filtration",
            body: "Water is forced through the fine fiber matrix, capturing remaining microscopic particles."
          },
          {
            title: "Cartridge Replacement",
            body: "Elements are replaced once differential pressure limits are reached."
          }
        ],
        pdfFile: "Filtration.pdf",
        pdfSize: "2.3 KB"
      }
    ]
  },
  {
    slug: "reverse-osmosis-plant",
    navLabel: "Aqua Clean RO system",
    title: "Aqua Clean RO (Reverse Osmosis System)",
    tagline: "High-Purity Water for Critical Applications.",
    heroImage: Ro,
    category: "Water Treatment",
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
    pdfFile: "RO.pdf",
    pdfSize: "2.2 KB",
    subProducts: [
      {
        slug: "brackish-water-ro",
        title: "Brackish Water RO",
        tagline: "High-Efficiency Dissolved Solids Reduction for Groundwater.",
        intro: "Designed for borehole water with moderate salinity, our brackish water RO systems remove up to 99% of dissolved minerals, fluorides, and salts using low-energy membranes.",
        heroImage: Ro,
        process: [
          {
            title: "High-Pressure Feed",
            body: "Feed water is pumped through brackish RO membranes at moderate pressures."
          },
          {
            title: "Salt Rejection",
            body: "Concentrated brine is rejected while high-purity permeate water is collected."
          }
        ],
        pdfFile: "RO.pdf",
        pdfSize: "2.2 KB"
      },
      {
        slug: "saline-water-ro",
        title: "Saline Water RO",
        tagline: "Heavy-Duty Desalination for Seawater & High TDS Sources.",
        intro: "Engineered for seawater or high-mineral industrial loops, these high-pressure desalination systems utilize robust corrosion-resistant materials and energy-recovery devices.",
        heroImage: Ro,
        process: [
          {
            title: "Desalination",
            body: "Feedwater passes through seawater membranes under high pressure to overcome osmotic pressure."
          },
          {
            title: "Energy Recovery",
            body: "High-pressure reject brine transfers energy to the inlet stream, reducing power usage."
          }
        ],
        pdfFile: "RO.pdf",
        pdfSize: "2.2 KB"
      },
      {
        slug: "ro-for-farming-industries",
        title: "RO for Farming & Industries",
        tagline: "Large-Scale Process Water and Irrigation Purifiers.",
        intro: "Customized RO plants providing high-volume, reliable water streams for agricultural irrigation, hydroponics, boiler feedwater, and industrial manufacturing lines.",
        heroImage: Ro,
        process: [
          {
            title: "Scaled Filtration",
            body: "Multi-stage membrane assemblies treat high volumes of raw water."
          },
          {
            title: "Permeate Buffering",
            body: "Product water is sent to storage buffers with automated level controls."
          }
        ],
        pdfFile: "RO.pdf",
        pdfSize: "2.2 KB"
      }
    ]
  },
  {
    slug: "ultrafiltration-plant",
    navLabel: "Ultrafiltration plant",
    title: "C-MEM UF (Ultrafiltration System)",
    tagline: "Advanced Pathogen and Suspended Solids Removal.",
    heroImage: uff,
    category: "Water Treatment",
    intro:
      "C-MEM UF (Ultrafiltration) systems use hollow-fiber membranes with pore sizes as fine as 0.02 microns to remove suspended solids, turbidity, bacteria, and viruses while retaining essential minerals.\n\nDesigned for borehole filtration, surface water treatment, and RO pre-treatment, our UF systems provide consistent water quality, compact operation, and reduced chemical and maintenance requirements.",
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
    pdfFile: "Ultrafiltration.pdf",
    pdfSize: "2.3 KB",
  },
  {
    slug: "aqua-clean-lake-river",
    navLabel: "Aqua Clean Lake/River",
    title: "Aqua Clean Lake/River Water Treatment System",
    tagline: "High-Efficiency Surface Water Purification.",
    heroImage: effluent,
    category: "Water Treatment",
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
    slug: "ion-exchange-units",
    navLabel: "Ion Exchange Units",
    title: "Ion Exchange Units",
    tagline: "High-Capacity Hardness Removal, Demineralization, and Selective Ion Exchange.",
    heroImage: watersoftener,
    category: "Water Treatment",
    intro:
      "Our Ion Exchange Units utilize premium selective resins to target and remove specific dissolved ions from raw water. From water softening and full demineralization (deionization) to specialized fluoride removal, these systems prevent scale buildup, reduce conductivity, and ensure utility and process water meets strict standards.",
    highlights: [
      "High-exchange capacity selective resin beds for target ion removal",
      "Integrated softening, demineralization, and fluoride removal configurations",
      "Optimized service flow rates with automated regenerant dosing cycles",
      "Automated valve control triggering backwash and regeneration phases",
    ],
    process: [
      {
        title: "Ion Exchange Service",
        body: "Raw feedwater passes through the resin bed where target ions (such as calcium, magnesium, or heavy metals) are exchanged for counter-ions.",
      },
      {
        title: "Backwashing",
        body: "The flow is reversed to fluidize and clean the resin bed, flushing out accumulated particulates and preventing compaction.",
      },
      {
        title: "Regeneration",
        body: "A chemical regenerant (brine, acid, or caustic) is introduced to strip target ions and restore resin capacity.",
      },
      {
        title: "Rinsing & Return",
        body: "Slow and fast rinses remove residual regenerant chemicals before the unit returns to active service.",
      },
    ],
    applications: [
      "Boiler feedwater pre-treatment",
      "Cooling tower makeup loops",
      "Commercial laundry and hospitality facilities",
      "High-purity industrial process water",
    ],
    pdfFile: "Softeners.pdf",
    pdfSize: "2.4 KB",
    subProducts: [
      {
        slug: "softeners",
        title: "Softeners",
        tagline: "Cation Exchange Hardness Removal.",
        intro: "Utilizing premium strong-acid cation exchange resin, our water softeners swap calcium and magnesium hardness ions with sodium ions, completely preventing scale buildup.",
        heroImage: watersoftener,
        process: [
          {
            title: "Hardness Exchange",
            body: "Hard water passes through the cation resin bed, capturing calcium/magnesium."
          },
          {
            title: "Brine Regeneration",
            body: "A sodium chloride solution flushes the resin, restoring its capacity."
          }
        ],
        pdfFile: "Softeners.pdf",
        pdfSize: "2.4 KB"
      },
      {
        slug: "demineralization-plant",
        title: "Demineralization Plant",
        tagline: "Cation-Anion Exchange for Ultra-Pure Water.",
        intro: "Features dual-bed or mixed-bed deionizers containing cation and anion resins to remove all dissolved mineral salts, yielding high-purity water with low electrical conductivity.",
        heroImage: watersoftener,
        process: [
          {
            title: "Cation & Anion Exchange",
            body: "Water passes through cation and anion resin beds, removing all dissolved salts."
          },
          {
            title: "Acid/Alkali Regeneration",
            body: "Resins are regenerated using hydrochloric acid and sodium hydroxide."
          }
        ],
        pdfFile: "Softeners.pdf",
        pdfSize: "2.4 KB"
      },
      {
        slug: "fluoride-reversed-units",
        title: "Fluoride Removal Units",
        tagline: "Targeted Adsorption for Safe Drinking Water.",
        intro: "Designed to reduce excessive fluoride concentrations in borehole water to safe potable limits using highly selective activated alumina or specialty ion-exchange resins.",
        heroImage: watersoftener,
        process: [
          {
            title: "Selective Adsorption",
            body: "Fluoride ions are selectively adsorbed onto the media bed."
          },
          {
            title: "Acid/Alum Regeneration",
            body: "The bed is regenerated using alum or mild acid washes to restore capacity."
          }
        ],
        pdfFile: "Softeners.pdf",
        pdfSize: "2.4 KB"
      }
    ]
  },
  {
    slug: "c-mem-zero",
    navLabel: "C-Mem Zero",
    title: "C-Mem Zero Gravity Water Purification",
    tagline: "Decentralized Ultrafiltration with Zero Power Requirements.",
    heroImage: cmemzero,
    category: "Water Treatment",
    intro:
      "C-Mem Zero is a technology from SFC; An Austrian company based in Salzburg, with over 30 years of global leadership in innovative drinking water treatment, wastewater treatment, and water reuse technologies.\n\nC-Mem Zero is a compact gravity-driven ultrafiltration (UF) system designed for raw-water and drinking-water purification. Operating under hydrostatic pressure (gravity) or a pump, it features a permanently hydrophilic membrane with approximately 20 nm (0.02 um) pores and 6 m2 of membrane area. The system delivers up to 1.6 L/min flow under gravity (2 m head) and up to 16 L/min under pump-driven pressure (2 bar), effectively removing turbidity, bacteria, and pathogens without requiring electricity or chemicals.",
    highlights: [
      "Zero electricity or chemical consumption required in gravity mode",
      "Compact hollow-fiber membrane with 20 nm (0.02 um) pore size",
      "6 m2 active membrane surface area for reliable decentralized supply",
      "Flexible operation: Gravity (1.6 L/min) or Pump-driven (16 L/min)",
    ],
    process: [
      {
        title: "Pre-Screening",
        body: "Source-dependent screening and sediment removal are utilized to protect the membranes from large particulates.",
      },
      {
        title: "Gravity or Pump Intake",
        body: "Feed water is fed under a 2 m gravity head (1.6 L/min) or via a pump at 2 bar (16 L/min) depending on design requirements.",
      },
      {
        title: "Hollow-Fiber Ultrafiltration",
        body: "Water passes outside-in through the 20 nm hollow fibers, retaining turbidity, bacteria, and pathogens on the membrane exterior.",
      },
      {
        title: "Treated Water Outlet",
        body: "Clean, safe water is collected from the internal lumen of the fibers and directed to the drinking water distribution line.",
      },
    ],
    applications: [
      "Rural off-grid communities",
      "Disaster relief zones",
      "Remote agricultural and mining camps",
      "Eco-lodges and conservation camps",
    ],
    pdfFile: "CMEM Zero.pdf",
    pdfSize: "2.4 KB",
  },
  {
    slug: "membraloop",
    navLabel: "Membraloop",
    title: "Membraloop Point-of-Use Ultrafiltration",
    tagline: "Point-of-Use Raw Water & Drinking Water Purification.",
    heroImage: membraloop,
    category: "Water Treatment",
    intro:
      "Membraloop is a technology from SFC; An Austrian company based in Salzburg, with over 30 years of global leadership in innovative drinking water treatment, wastewater treatment, and water reuse technologies.\n\nMembraloop is a compact, point-of-use ultrafiltration system engineered for raw-water and drinking-water purification. Utilizing C-MEM hollow-fiber technology with a 0.020 um pore size, it acts as a reliable physical barrier against suspended solids, bacteria, and pathogens. It features a membrane surface area of 3 m2 and supports both gravity-fed and pump-driven flow configurations with standard 3/4-inch connections.",
    highlights: [
      "C-MEM hollow-fiber ultrafiltration with 0.020 um average pore size",
      "3 m2 active membrane surface area for point-of-use applications",
      "Dual-mode: Gravity flow (0.8 L/min at 2m head) or Pumped flow (8 L/min at 2 bar)",
      "Standard 3/4-inch plumbing connections for easy installation",
    ],
    process: [
      {
        title: "Water Inlet Connection",
        body: "Feed water enters the system through standard 3/4-inch connections from raw water sources or storage tanks.",
      },
      {
        title: "Ultrafiltration Barrier",
        body: "Water passes through the C-MEM hollow-fiber membrane, filtering out suspended solids, bacteria, and pathogens down to 0.020 um.",
      },
      {
        title: "Gravity or Pumped Flow",
        body: "Operates under gravity-fed conditions (0.8 L/min at 2m head) or pump-driven pressure (8 L/min at 2 bar) depending on installation setup.",
      },
      {
        title: "Clean Water Output",
        body: "Purified water is collected from the membrane lumen, delivering clean water for domestic or drinking purposes.",
      },
    ],
    applications: [
      "Residential drinking water purification",
      "Remote cabins and off-grid cottages",
      "Emergency water relief stations",
      "Small commercial point-of-use systems",
    ],
    pdfFile: "Membraloop.pdf",
    pdfSize: "2.1 KB",
  },
  {
    slug: "clarrifiers",
    navLabel: "Clarrifiers",
    title: "Lamella Clarifiers & Settling Systems",
    tagline: "High-Rate Sedimentation and Suspended Solids Settling.",
    heroImage: clarifiers,
    category: "Water Treatment",
    intro:
      "Our Lamella Clarifiers utilize inclined plate settling technology to maximize gravity sedimentation in a small physical footprint. By reducing the settling depth, they allow high-capacity particulate separation from raw river water or industrial process loops, preparing water for fine filtration.",
    highlights: [
      "Inclined plate packs increase settling area up to 10x",
      "Compact footprint compared to traditional circular clarifiers",
      "Integrated sludge collection hopper and scraper options",
      "Manufactured in heavy-duty epoxy-coated steel or FRP",
    ],
    process: [
      {
        title: "Coagulated Feed",
        body: "Raw feed treated with flocculants enters the distribution duct of the clarifier basin.",
      },
      {
        title: "Plate Settlement",
        body: "As water flows upwards between inclined plates, suspended solids slide down the smooth plate surfaces.",
      },
      {
        title: "Clear Overflow",
        body: "Clarified water overflows into collecting channels while thick sludge accumulates in the bottom hopper.",
      },
    ],
    applications: [
      "Surface river water pre-clarification",
      "Municipal water plant pre-treatment",
      "Industrial manufacturing process loops",
    ],
    pdfFile: "lamella-clarifiers-datasheet.pdf",
    pdfSize: "1.5 MB",
    subProducts: [
      {
        slug: "lamella",
        title: "Lamella",
        tagline: "Inclined Plate High-Rate Sedimentation.",
        intro: "Uses packs of inclined plates to drastically increase the effective settling area in a compact footprint, allowing high-rate gravity separation of flocs.",
        heroImage: clarifiers,
        process: [
          {
            title: "Inclined Settling",
            body: "Water flows upward through plate channels; solids slide down the plates into the sludge hopper."
          }
        ],
        pdfFile: "lamella-clarifiers-datasheet.pdf",
        pdfSize: "1.5 MB"
      },
      {
        slug: "high-rate-solid",
        title: "High-Rate Solid",
        tagline: "Sludge Blanket Contact Clarifier.",
        intro: "Combines rapid chemical mixing, flocculation, and a dynamic sludge blanket to accelerate floc aggregation and achieve high-velocity settling.",
        heroImage: clarifiers,
        process: [
          {
            title: "Sludge Blanket Passage",
            body: "Water rises through an active suspended sludge bed, filtering out fine particles."
          }
        ],
        pdfFile: "lamella-clarifiers-datasheet.pdf",
        pdfSize: "1.5 MB"
      },
      {
        slug: "contact",
        title: "Contact",
        tagline: "Mechanical Flocculator-Clarifier.",
        intro: "Features mechanical draft-tube mixers to recirculate pre-formed chemical sludges, promoting rapid floc growth and high-efficiency primary settling.",
        heroImage: clarifiers,
        process: [
          {
            title: "Recycle Aggregation",
            body: "Recirculated solids act as nuclei, accelerating the growth of heavy settleable flocs."
          }
        ],
        pdfFile: "lamella-clarifiers-datasheet.pdf",
        pdfSize: "1.5 MB"
      },
      {
        slug: "secondary",
        title: "Secondary",
        tagline: "Wastewater Biomass Separation.",
        intro: "Specifically engineered settling basins designed to separate active biological solids and activated sludge from the treated effluent in sewage treatment systems.",
        heroImage: clarifiers,
        process: [
          {
            title: "Sludge Separation",
            body: "Activated biomass settles out by gravity, leaving clear clarified wastewater to overflow."
          }
        ],
        pdfFile: "lamella-clarifiers-datasheet.pdf",
        pdfSize: "1.5 MB"
      }
    ]
  },
  {
    slug: "c-ion",
    navLabel: "C-ION",
    title: "C-ION Advanced Oxidation System",
    tagline: "Advanced Oxidation Process (AOP) using Non-Thermal Plasma.",
    heroImage: cion,
    category: "Water Treatment",
    intro:
      "C-ION is a technology from SFC; An Austrian company based in Salzburg, with over 30 years of global leadership in innovative drinking water treatment, wastewater treatment, and water reuse technologies.\n\nC-ION is an innovative Advanced Oxidation Process (AOP) that utilizes electrical glow discharge to generate non-thermal plasma (NTP) in the treatment chamber. By producing highly reactive oxygen species (ROS), the system oxidizes and breaks down complex organic and inorganic contaminants. It is highly effective for trace-organic removal, arsenic/manganese removal, and bulking-sludge control, and can be optionally combined with iron coagulation and C-MEM immersed hollow-fiber ultrafiltration.",
    highlights: [
      "Non-thermal plasma (NTP) generated via electrical glow discharge",
      "High concentration of Reactive Oxygen Species (ROS) for rapid oxidation",
      "Effective for trace-organic, arsenic, and manganese removal",
      "Can integrate with C-MEM immersed hollow-fiber UF and iron coagulation",
    ],
    process: [
      {
        title: "Electrical Glow Discharge",
        body: "Electrical energy is applied to generate a non-thermal plasma (NTP) field inside the treatment chamber.",
      },
      {
        title: "ROS Oxidation",
        body: "Highly reactive oxygen species (ROS) oxidize and break down difficult organic and inorganic contaminants.",
      },
      {
        title: "Coagulation & Flocculation (Optional)",
        body: "An iron coagulant is added to precipitate oxidized metals like arsenic and manganese.",
      },
      {
        title: "C-MEM Ultrafiltration (Optional)",
        body: "Immersed C-MEM hollow-fiber membranes provide a physical barrier to filter out the precipitated chemical flocs.",
      },
    ],
    applications: [
      "Trace organic pollutant removal",
      "Industrial wastewater polishing",
      "Arsenic and manganese drinking water treatment",
      "Biological system bulking-sludge control",
    ],
    pdfFile: "C-ION.pdf",
    pdfSize: "2.6 KB",
  },

  // RIVER WATER CLEANING AND REJUVENATION
  {
    slug: "river-water-cleaning-rejuvenation",
    navLabel: "River Water Cleaning and Rejuvenation",
    title: "River Water Cleaning & Rejuvenation",
    tagline: "Large-Scale Surface Water Reclamation and Ecological Restoration.",
    heroImage: effluent,
    category: "River Water Cleaning and Rejuvenation",
    intro:
      "Our River Water Cleaning and Rejuvenation systems combine high-capacity sand filtration, biological riverbed aeration, and natural floating wetlands to restore polluted surface water bodies. Designed for municipal canals, lakes, and rivers, this ecological engineering approach removes heavy organic load, odors, and algae, returning the water body to a thriving ecological state.",
    highlights: [
      "Combines mechanical filtration with biological wetlands",
      "Oxygenates water to eliminate anaerobic odors and sludge",
      "Tailored for high flow rates in rivers, lakes, and channels",
      "Improves biodiversity and local community water access",
    ],
    process: [
      {
        title: "Intake Clarification",
        body: "Coagulants and lamella separators filter mud, silt, and heavy sand out of the incoming river flow.",
      },
      {
        title: "Bio-Aeration",
        body: "Micro-bubbler arrays oxygenate the riverbed, breaking down sludge deposits and ending septic odors.",
      },
      {
        title: "Wetland Polishing",
        body: "Floating wetlands absorb nitrates, phosphates, and ammonia through natural root-system nutrient uptake.",
      },
    ],
    applications: [
      "Urban canal restoration projects",
      "Municipal lake cleanup and aeration",
      "Industrial estate run-off channels",
      "Community river rehabilitation sites",
    ],
    pdfFile: "river-rejuvenation-wte-datasheet.pdf",
    pdfSize: "2.2 MB",
  },

  // HVAC & UTILITIES (kept for routing compatibility)
  {
    slug: "hvac-systems",
    navLabel: "HVAC Systems",
    title: "HVAC (Heating, Ventilation & Air Conditioning)",
    tagline: "Central Climate Control and Chilled Water Distribution.",
    heroImage: maintennance,
    category: "HVAC & Utilities",
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
    body: "C-MEM UF uses ultrafiltration membranes to remove suspended solids, bacteria, and viruses from water while retaining essential minerals.",
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
    image: mbbr,
    //eyebrow: "Aqua RO",
    heading: "Moving Bed Biofilm Reactor",
    body: "Biokleen MBBR uses floating carriers to grow microorganisms, boosting wastewater treatment efficiency in compact tanks.",
  },
   {
    image: Ro,
    //eyebrow: "Aqua RO",
    heading: "Advanced Reverse Osmosis",
    body: "Aqua Clean RO delivers high-efficiency brackish water purification, removing salts and contaminants for reliable industrial and healthcare use.",
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
    name: "C-MEM UF",
    subtitle: "Advanced Ultrafiltration Purification",
    image: uff,
    slug: "ultrafiltration-plant",
  },
  {
    name: "C-MEM MBR",
    subtitle: "Advanced membrane filtration",
    image: ultrafiltration,
    slug: "c-mem-mbr",
  },
  {
    name: "Aqua Clean RO",
    subtitle: " Advanced Reverse Osmosis",
    image: Ro,
    slug: "reverse-osmosis-plant",
  },
  {
    name: "Biokleen MBBR",
    subtitle: "Moving Bed Biofilm Reactor",
    image: mbbr,
    slug: "biokleen-mbbr",
  },
  {
    name: "CTECH SBR",
    subtitle: "Sequence Batch Reactor",
    image: ctech,
    slug: "c-tech-sbr",
  },
];
