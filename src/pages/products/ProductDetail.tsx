import { useState, useEffect, useRef, type DragEvent, type ChangeEvent } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import { ArrowUpRight, Check, FileText, UploadCloud, Download, Trash2, ExternalLink } from "lucide-react";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import ContourDivider from "../../components/ContourDivider";
import { products } from "../../data/content";

type AttachedFile = {
  id: string;
  name: string;
  size: string;
  date: string;
  dataUrl: string;
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const [activeTab, setActiveTab] = useState<"overview" | "documents">("overview");
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user attached files from localStorage on mount/slug change
  useEffect(() => {
    const saved = localStorage.getItem(`attached-pdf-${product.slug}`);
    if (saved) {
      try {
        setAttachedFiles(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse attached files", e);
      }
    } else {
      setAttachedFiles([]);
    }
  }, [product.slug]);

  const handleFile = (file: File) => {
    if (file.type !== "application/pdf") {
      alert("Please upload PDF documents only.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const newFile: AttachedFile = {
        id: crypto.randomUUID(),
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        dataUrl,
      };

      const updated = [newFile, ...attachedFiles];
      setAttachedFiles(updated);
      localStorage.setItem(`attached-pdf-${product.slug}`, JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDeleteFile = (id: string) => {
    const updated = attachedFiles.filter((f) => f.id !== id);
    setAttachedFiles(updated);
    localStorage.setItem(`attached-pdf-${product.slug}`, JSON.stringify(updated));
  };

  const handleViewAttached = (file: AttachedFile) => {
    const win = window.open();
    if (win) {
      win.document.write(
        `<iframe src="${file.dataUrl}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
      );
    }
  };

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Products"
        heading={product.title}
        body={product.tagline}
        image={product.heroImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <h1 className="mb-8 font-display text-4xl font-extrabold uppercase tracking-tight text-[var(--color-secondary)] md:text-5xl">
          {product.title}
        </h1>
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            {/* Tabs Navigation */}
            <div className="mb-8 flex border-b border-black/5">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-4 text-base font-bold transition-all border-b-2 mr-8 cursor-pointer ${
                  activeTab === "overview"
                    ? "border-[var(--color-current)] text-[var(--color-deepwater)]"
                    : "border-transparent text-[var(--color-ink)]/40 hover:text-[var(--color-ink)]/70"
                }`}
              >
                Technology Overview
              </button>
              <button
                onClick={() => setActiveTab("documents")}
                className={`pb-4 text-base font-bold transition-all border-b-2 cursor-pointer ${
                  activeTab === "documents"
                    ? "border-[var(--color-current)] text-[var(--color-deepwater)]"
                    : "border-transparent text-[var(--color-ink)]/40 hover:text-[var(--color-ink)]/70"
                }`}
              >
                Technical Documents
              </button>
            </div>

            {/* Tab: Overview */}
            {activeTab === "overview" && (
              <div className="animate-fade-in">
                <SectionHeading eyebrow="Overview" heading="Technology." body={product.intro} />

                <div className="mt-12 space-y-8">
                  {product.process.map((step, i) => (
                    <div key={step.title} className="flex gap-5">
                      <span className="font-mono text-sm text-[var(--color-current)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink)]/70">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {product.specNote && (
                  <div className="mt-10 rounded-xl border border-[var(--color-current)]/20 bg-[var(--color-foam-2)] p-5 font-mono text-xs leading-relaxed text-[var(--color-current)]">
                    {product.specNote}
                  </div>
                )}
              </div>
            )}

            {/* Tab: Documents & Attachments */}
            {activeTab === "documents" && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-deepwater)] mb-2">
                    Official Product Datasheets
                  </h3>
                  <p className="text-sm text-[var(--color-ink)]/60 mb-6">
                    Download or view the official technical specifications and layouts for {product.title}.
                  </p>

                  <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500 shadow-inner">
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[var(--color-deepwater)] break-all">
                          {product.pdfFile}
                        </h4>
                        <p className="text-xs text-[var(--color-ink)]/55 font-mono mt-0.5">
                          PDF Document • {product.pdfSize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <a
                        href={`/pdfs/${product.pdfFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-[var(--color-current)] hover:bg-[var(--color-foam)] rounded-lg transition-colors"
                        title="View in browser"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={`/pdfs/${product.pdfFile}`}
                        download
                        className="flex items-center gap-1.5 rounded-full bg-[var(--color-current)] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[var(--color-current-2)]"
                      >
                        <Download size={14} /> Download
                      </a>
                    </div>
                  </div>
                </div>

                
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[var(--color-current)]">Key Features</p>
              <ul className="mt-4 space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink)]/80">
                    <Check size={16} className="mt-0.5 shrink-0 text-[var(--color-leaf-2)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="eyebrow text-[var(--color-current)]">Applications</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full bg-[var(--color-foam-2)] px-3 py-1.5 text-xs font-medium text-[var(--color-deepwater)]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--color-deepwater)] p-6">
              <p className="font-display text-xl font-bold text-white">Need this sized for your site?</p>
              <p className="mt-2 text-sm text-white/70">
                Send us your flows and target parameters — we'll come back with a proposal.
              </p>
              <NavLink
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-leaf)] px-5 py-2.5 text-sm font-semibold text-[var(--color-deepwater)] transition-transform hover:scale-105"
              >
                Request A Quote <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </aside>
        </div>
      </section>

      <ContourDivider from="var(--color-foam)" to="var(--color-foam-2)" />
      <section className="bg-[var(--color-foam-2)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading eyebrow="Related" heading="Other solutions." />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {others.map((p) => (
              <NavLink
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-bold text-[var(--color-deepwater)]">{p.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-ink)]/70">{p.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-current)]">
                  View details <ArrowUpRight size={13} />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
