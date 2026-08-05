import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";
import faqHeroImg from "../assets/productss.jpeg";

const faqData = [
  {
    question: "What services does Allianz Utilities provide?",
    answer: "We provide end-to-end water and wastewater engineering solutions, including system design, supply and installation, operation and maintenance, annual maintenance contracts, system upgrades, consultancy, and operator training for industrial, commercial, healthcare, institutional, and municipal clients.",
  },
  {
    question: "Which industries do you serve?",
    answer: "We serve a wide range of sectors including hospitals, manufacturing industries, hotels, schools, universities, residential developments, commercial buildings, municipalities, government institutions, and NGOs across East Africa.",
  },
  {
    question: "Do you design and install complete water treatment systems?",
    answer: "Yes. We offer complete turnkey solutions—from consultation and system design to equipment supply, installation, commissioning, and after-sales support.",
  },
  {
    question: "What types of water treatment systems do you supply?",
    answer: "We supply Reverse Osmosis (RO), Ultra Filtration (UF), Micro Filtration (MF), Ion Exchange Systems, water softeners, dosing systems, pumping solutions, and complete water treatment plants tailored to your specific requirements.",
  },
  {
    question: "What wastewater treatment solutions do you offer?",
    answer: "Our wastewater treatment solutions include Package Sewage Treatment Plants (STPs), Sequencing Batch Reactors (SBR), Moving Bed Biofilm Reactors (MBBR), Membrane Bioreactors (MBR), and Effluent Treatment Plants (ETPs), designed to meet environmental and regulatory requirements.",
  },
  {
    question: "Do you offer maintenance services after installation?",
    answer: "Absolutely. We provide routine maintenance, emergency repairs, preventive maintenance, operation and maintenance (O&M), and Annual Maintenance Contracts (AMC) to ensure your systems operate efficiently throughout their lifecycle.",
  },
  {
    question: "What is included in your Annual Maintenance Contract (AMC)?",
    answer: "Our AMC packages typically include scheduled inspections, preventive maintenance, equipment servicing, system performance monitoring, troubleshooting, emergency support, and recommendations for system optimization.",
  },
  {
    question: "Can you upgrade or retrofit an existing treatment plant?",
    answer: "Yes. We specialize in upgrading and modernizing existing water and wastewater treatment systems to improve efficiency, increase capacity, reduce operational costs, and extend equipment lifespan.",
  },
  {
    question: "Do you supply water treatment chemicals and spare parts?",
    answer: "Yes. We supply high-quality water treatment chemicals including chlorine products, antiscalants, CIP cleaning chemicals, filtration media, membranes, pumps, and a wide range of spare parts for treatment systems.",
  },
  {
    question: "Do you provide operator training?",
    answer: "Yes. We offer practical, hands-on training for plant operators, technicians, and maintenance personnel to ensure safe operation, effective troubleshooting, and proper maintenance of water and wastewater treatment systems.",
  },
  {
    question: "How do you determine the right solution for my facility?",
    answer: "Our engineers assess your water quality, treatment requirements, daily demand, available space, and operational objectives before recommending a customized solution that best meets your needs and budget.",
  },
  {
    question: "Do you serve clients outside Kenya?",
    answer: "Yes. In addition to serving clients across Kenya, we have experience delivering projects and technical support in Uganda, Rwanda, Tanzania, and other parts of East Africa.",
  },
  {
    question: "Why should I choose Allianz Utilities?",
    answer: "With over 9 years of experience, Allianz Utilities combines engineering expertise, quality products, innovative technologies, and responsive customer support to deliver reliable, cost-effective, and sustainable water and wastewater solutions. We are committed to building long-term partnerships through exceptional service and dependable technical support.",
  },
  {
    question: "How can I request a quotation or consultation?",
    answer: "Simply contact us through our website, email, or phone. Our team will discuss your project requirements, conduct an assessment if necessary, and provide a customized solution along with a detailed quotation.",
  },
  {
    question: "Do you provide emergency technical support?",
    answer: "Yes. We understand that unexpected system failures can disrupt operations. Our technical team is available to provide prompt troubleshooting and repair services to restore your systems as quickly as possible.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div>
      <PageHero
        eyebrow="Support"
        heading={"Answers to common\ntechnical questions."}
        body="Learn more about our water and wastewater treatment technologies, O&M services, and project consultations."
        image={faqHeroImg}
      />

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading align="center" eyebrow="FAQ" heading="Frequently Asked Questions" />

        <div className="mt-12 space-y-4">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left font-display text-lg font-bold text-[var(--color-deepwater)] md:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex gap-3">
                    <HelpCircle className="mt-0.5 shrink-0 text-[var(--color-current)]" size={20} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`mt-0.5 shrink-0 text-[var(--color-ink)]/40 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--color-current)]" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[16rem] border-t border-black/5" : "max-h-0"
                  }`}
                >
                  <p className="p-5 text-sm leading-relaxed text-[var(--color-ink)]/70 md:p-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
