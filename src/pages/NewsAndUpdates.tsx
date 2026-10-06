import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  MapPin,
  Gauge,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Video as VideoIcon,
  HardHat,
  Newspaper,
  Maximize2,
  X,
  AlertCircle,
} from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import {
  ongoingSites,
  videoShowcases,
  newsArticles,
  type VideoShowcase,
} from "../data/newsUpdatesData";

export default function NewsAndUpdates() {
  const [activeTab, setActiveTab] = useState<"all" | "sites" | "videos" | "news">("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [selectedVideoModal, setSelectedVideoModal] = useState<VideoShowcase | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const defaultVideo = videoShowcases.find((v) => v.isFeatured) || videoShowcases[0];
  const [activeVideo, setActiveVideo] = useState<VideoShowcase>(defaultVideo);

  const handleSelectVideo = (video: VideoShowcase) => {
    setActiveVideo(video);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="bg-[var(--color-foam)] min-h-screen">
      {/* Page Hero */}
      <PageHero
        eyebrow="Field Dispatches & Media"
        heading={"News, Video Updates &\nOngoing Sites"}
        body="Track live progress reports, project video walkthroughs, and technical milestones from our active water, wastewater, and HVAC utility installations across East Africa."
        image="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1600&auto=format&fit=crop"
      />

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Navigation / Filter Tabs & Overview */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-black/5 pb-8 mb-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Real-Time Updates"
              heading="Engineering in action."
              body="Explore video footage from our treatment plants, track progress across active project sites, and review latest technical milestones."
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Updates", icon: null },
              { id: "sites", label: "Ongoing Sites", icon: HardHat },
              { id: "videos", label: "Videos & Media", icon: VideoIcon },
              { id: "news", label: "Field News", icon: Newspaper },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === id
                    ? "bg-[var(--color-primary)] text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70"
                }`}
              >
                {Icon && <Icon size={13} />}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* NTV News Public Health Alert Banner */}
        {(activeTab === "all" || activeTab === "videos" || activeTab === "news") && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-amber-300/80 bg-gradient-to-r from-amber-50 via-white to-amber-50/80 p-5 md:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md">
                  <AlertCircle size={26} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="rounded-full bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 uppercase tracking-wider shadow-xs">
                      NTV News Feature
                    </span>
                    <span className="text-xs font-bold text-amber-800 tracking-wide">
                      Public Health Advisory: Nairobi Groundwater
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                    Dental Fluorosis Alert: High Fluoride Levels in Nairobi Water
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-slate-600 max-w-2xl leading-relaxed">
                    National NTV News reporting highlights severe dental fluorosis affecting residents across Nairobi and the Great Rift Valley due to untreated boreholes. Allianz Utilities supplies certified <strong className="text-slate-800">Defluoridation Units</strong> and <strong className="text-slate-800">Brackish Reverse Osmosis (RO)</strong> systems to safely reduce fluoride below 1.5 mg/L.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-start md:self-center">
                <button
                  onClick={() => {
                    const ntvVid = videoShowcases.find((v) => v.id === "ntv-dental-fluorosis-nairobi");
                    if (ntvVid) handleSelectVideo(ntvVid);
                    document.getElementById("video-spotlight")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-2.5 text-xs font-bold shadow-md transition-all hover:scale-105 cursor-pointer"
                >
                  <Play size={13} className="fill-current" /> Watch NTV Video
                </button>
                <Link
                  to="/products/reverse-osmosis-plant"
                  className="inline-flex items-center gap-1 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-4 py-2.5 text-xs font-semibold transition-colors"
                >
                  Fluoride Removal Units <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Featured Video Player Showcase (Shown on 'all' or 'videos') */}
        {(activeTab === "all" || activeTab === "videos") && (
          <div id="video-spotlight" className="mb-20 scroll-mt-24">
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  Video Spotlight: {activeVideo.title}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Click any clip below to switch video
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl grid lg:grid-cols-[1.5fr_1fr]">
              {/* Video Player */}
              <div className="relative bg-black min-h-[320px] sm:min-h-[440px] flex items-center justify-center group">
                {activeVideo.youtubeId ? (
                  <iframe
                    key={activeVideo.id}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full border-0 min-h-[340px] sm:min-h-[440px]"
                  />
                ) : activeVideo.videoSrc ? (
                  <video
                    key={activeVideo.id}
                    ref={videoRef}
                    src={activeVideo.videoSrc}
                    playsInline
                    controls
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    className="h-full w-full object-contain max-h-[540px] bg-black"
                  />
                ) : (
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="h-full w-full object-cover max-h-[540px] opacity-75"
                  />
                )}

                {/* Video Play/Pause Overlay Controls for local videos */}
                {!isPlaying && !activeVideo.youtubeId && activeVideo.videoSrc && (
                  <div className="absolute inset-0 bg-black/35 flex items-center justify-center pointer-events-none">
                    <button
                      onClick={togglePlay}
                      className="pointer-events-auto h-16 w-16 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer backdrop-blur-xs"
                      aria-label="Play Video"
                    >
                      <Play size={28} className="ml-1 fill-current" />
                    </button>
                  </div>
                )}
              </div>

              {/* Video Information Side Panel */}
              <div className="p-6 md:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full bg-[var(--color-surface-light)] border border-[var(--color-primary)]/20 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                      {activeVideo.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {activeVideo.clientOrLocation}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-deepwater)] leading-tight">
                    {activeVideo.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-secondary)]">
                    {activeVideo.subtitle}
                  </p>

                  <p className="mt-4 text-xs md:text-sm text-slate-600 leading-relaxed">
                    {activeVideo.description}
                  </p>

                  {/* Highlights tailored to active video */}
                  {activeVideo.id === "ntv-dental-fluorosis-nairobi" ? (
                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                        <span>WHO & KEBS Limit: 1.5 mg/L | Untreated boreholes: 4 – 15+ mg/L</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                        <span>Allianz RO & Ion Exchange skids remove up to 98% of dissolved fluoride</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                        <span>Prevents permanent teeth discoloration & skeletal fluorosis</span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                        <span>Automated aeration cycles and real-time membrane flux control</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                        <span>Compliant with WHO and NEMA discharge standards</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[var(--color-secondary)] shrink-0" />
                        <span>Engineered, built, and maintained across Kenya & East Africa</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">
                    {activeVideo.id === "ntv-dental-fluorosis-nairobi"
                      ? "Concerned about your borehole's fluoride levels?"
                      : "Need a video survey of your facility?"}
                  </span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] hover:underline"
                  >
                    {activeVideo.id === "ntv-dental-fluorosis-nairobi"
                      ? "Book Water Fluoride Test"
                      : "Request Site Survey"}{" "}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Ongoing Sites Section */}
        {(activeTab === "all" || activeTab === "sites") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="eyebrow text-[var(--color-secondary)]">Active Field Works</span>
                <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-deepwater)]">
                  Ongoing Sites & Projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline"
              >
                View All Portfolio Projects <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ongoingSites.map((site) => (
                <div
                  key={site.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Site Image & Status Badge */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold shadow-xs ${
                          site.status === "Active O&M"
                            ? "bg-[#68B623] text-white"
                            : site.status === "Commissioning"
                            ? "bg-[#0091DA] text-white"
                            : "bg-[#FF9800] text-white"
                        }`}
                      >
                        {site.status}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1 text-[11px]">
                        <MapPin size={13} className="text-[#a3e635]" /> {site.location}
                      </span>
                      <span className="text-[10px] text-white/80 font-mono">{site.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                        Client: {site.client}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold text-[var(--color-deepwater)] leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                        {site.title}
                      </h3>

                      {/* Progress Bar */}
                      <div className="mt-3.5 mb-4">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-500 mb-1">
                          <span>Execution Progress</span>
                          <span className="text-[var(--color-primary)]">{site.progressPercentage}%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/50">
                          <div
                            className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] h-full rounded-full transition-all duration-700"
                            style={{ width: `${site.progressPercentage}%` }}
                          />
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {site.description}
                      </p>

                      {/* Key Features List */}
                      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                        {site.keyFeatures.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <span className="text-[var(--color-secondary)] font-bold">•</span>
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Capacity Metric & Action Footer */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-surface-light)] text-[var(--color-primary)] border border-slate-200/60">
                          <Gauge size={16} />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">
                            Design Capacity
                          </p>
                          <p className="text-xs font-bold text-[var(--color-deepwater)]">
                            {site.capacity}
                          </p>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 rounded-full bg-[var(--color-surface-light)] hover:bg-[var(--color-primary)] text-[var(--color-primary)] hover:text-white px-3 py-1.5 text-xs font-semibold transition-colors"
                      >
                        Enquire <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video Reel / Video Updates Showcase */}
        {(activeTab === "all" || activeTab === "videos") && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="eyebrow text-[var(--color-primary)]">Media & Field Footage</span>
                <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-deepwater)]">
                  Video Clips & Plant Walkthroughs
                </h2>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videoShowcases.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideoModal(video)}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                    <span className="absolute top-2.5 left-2.5 bg-[var(--color-deepwater)]/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                      {video.tag}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {video.clientOrLocation}
                      </p>
                      <h4 className="mt-1 font-display text-base font-bold text-[var(--color-deepwater)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {video.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectVideo(video);
                          document.getElementById("video-spotlight")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Play size={12} className="fill-current" /> Play in Spotlight
                      </button>
                      <button
                        onClick={() => setSelectedVideoModal(video)}
                        className="text-slate-500 hover:text-[var(--color-primary)] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Expand</span>
                        <Maximize2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News & Technical Milestones */}
        {(activeTab === "all" || activeTab === "news") && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="eyebrow text-[var(--color-secondary)]">Company Dispatches</span>
                <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-deepwater)]">
                  Latest News & Technical Articles
                </h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {newsArticles.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                        <span className="font-semibold text-[var(--color-primary)]">{article.category}</span>
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar size={12} /> {article.date}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-[var(--color-deepwater)] leading-snug">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {article.summary}
                      </p>

                      {article.bulletPoints && (
                        <div className="mt-3.5 space-y-1">
                          {article.bulletPoints.map((point, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                              <span className="text-[var(--color-secondary)] font-bold">•</span>
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span>By {article.author}</span>
                      <span className="font-mono text-[11px]">{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[var(--color-primary)] via-[#0B42A0] to-[#08337E] text-white p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow text-[#a7f3d0]">Direct Engineering Support</span>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight">
              Have an ongoing site or upcoming industrial project?
            </h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Our process engineering specialists conduct on-site water testing, system audits, and feasibility studies across Kenya and the East African region.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 shadow-md"
            >
              Contact Our Engineers
            </Link>
            <Link
              to="/projects"
              className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-sm font-semibold transition-colors border border-white/20"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative">
            <button
              onClick={() => setSelectedVideoModal(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="bg-black relative aspect-video flex items-center justify-center">
              {selectedVideoModal.youtubeId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideoModal.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideoModal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : selectedVideoModal.videoSrc ? (
                <video
                  src={selectedVideoModal.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={selectedVideoModal.thumbnail}
                    alt={selectedVideoModal.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                    <VideoIcon size={44} className="text-[var(--color-secondary)] mb-2" />
                    <p className="font-display text-xl font-bold">{selectedVideoModal.title}</p>
                    <p className="text-xs text-white/80 mt-1 max-w-md">
                      High-definition field footage captured on-site at {selectedVideoModal.clientOrLocation}.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded-full bg-[var(--color-surface-light)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                  {selectedVideoModal.tag}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedVideoModal.clientOrLocation}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--color-deepwater)]">
                {selectedVideoModal.title}
              </h3>
              <p className="text-xs font-semibold text-[var(--color-secondary)] mt-0.5">
                {selectedVideoModal.subtitle}
              </p>
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {selectedVideoModal.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
