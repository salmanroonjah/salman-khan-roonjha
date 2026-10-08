import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CreativeProject } from '../data/portfolioData';
import { 
  Play, 
  ExternalLink, 
  X, 
  Film, 
  Eye, 
  Maximize2 
} from 'lucide-react';

interface WorkShowcaseProps {
  lang: 'en' | 'ur';
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ lang }) => {
  const { data } = usePortfolio();
  const isUrdu = lang === 'ur';
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeMediaProject, setActiveMediaProject] = useState<CreativeProject | null>(null);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? data.myWork.projects
      : data.myWork.projects.filter((p) => p.category === selectedCategory);

  const openModal = (project: CreativeProject) => {
    setActiveMediaProject(project);
  };

  return (
    <section 
      id="my-work" 
      className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#07080B] relative overflow-hidden"
    >
      {/* Ambient Cinema Lighting Mesh */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase text-emerald-400">
              <Film className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isUrdu ? 'ویڈیوز اور تخلیقی پراجیکٹس' : 'Selected Works & Media'}</span>
              <span aria-hidden="true" className="text-white/20">/</span>
              <span className="text-white/60">{isUrdu ? 'پورٹ فولیو نمائش' : 'Cinematic Portfolio'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {isUrdu ? 'میرا کام: ویڈیوز اور تخلیقی پراجیکٹس' : 'My Work (Videos & Creative Projects)'}
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {isUrdu ? data.myWork.introLineUrdu : data.myWork.introLine}
            </p>
          </div>
        </div>

        {/* Apple/Samsung Clean Segmented Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl mb-12 max-w-fit">
          {data.myWork.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* High-Fidelity Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Media Frame (16:9 Aspect Ratio) */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black/60 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-[#07080B]/20 to-transparent" />

                {/* Duration indicator (Clean unboxed text) */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400 font-medium">
                  {project.mediaType === 'video' ? (project.duration || 'Video') : 'Graphic'}
                </div>

                {/* Organization Kicker (Bottom Left of Frame) */}
                <div className="absolute bottom-3 left-4 text-xs font-mono font-medium text-slate-300 drop-shadow-md">
                  {project.createdFor}
                </div>

                {/* Play / Zoom Icon Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/90 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                    {project.mediaType === 'video' ? (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </div>

                  <h3 
                    onClick={() => openModal(project)}
                    className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {isUrdu ? project.titleUrdu : project.title}
                  </h3>

                  <div className="text-xs text-slate-400">
                    <span className="text-slate-300 font-semibold">{isUrdu ? 'کردار: ' : 'Role: '}</span>
                    <span>{isUrdu ? project.myRoleUrdu : project.myRole}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal line-clamp-2">
                    {isUrdu ? project.aboutUrdu : project.about}
                  </p>

                  {/* Quantitative Result / Views Metric */}
                  {project.result && (
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-xs space-y-0.5">
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">
                        {isUrdu ? 'اثرات / ویوز' : 'Impact / Reach'}
                      </span>
                      <span className="text-slate-200 font-medium font-sans">
                        {isUrdu ? project.resultUrdu : project.result}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                  <button
                    onClick={() => openModal(project)}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{project.mediaType === 'video' ? 'Watch Reel' : 'View Media'}</span>
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                      title="Open external source"
                    >
                      <span>External Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Media Lightbox Modal */}
      {activeMediaProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveMediaProject(null)}
        >
          <div
            className="rounded-3xl bg-[#0C0E14] border border-white/[0.12] max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-5 bg-black/50 border-b border-white/[0.08] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  {activeMediaProject.category}
                </span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span className="text-xs text-slate-300 font-mono">
                  {activeMediaProject.createdFor}
                </span>
              </div>

              <button
                onClick={() => setActiveMediaProject(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-white/[0.06] rounded-xl transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Media Stage */}
              <div className="rounded-2xl overflow-hidden bg-black border border-white/[0.08] aspect-video w-full flex items-center justify-center relative shadow-2xl">
                {activeMediaProject.mediaType === 'video' && activeMediaProject.videoUrl ? (
                  <video
                    src={activeMediaProject.videoUrl}
                    poster={activeMediaProject.thumbnailUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                ) : (
                  <img
                    src={activeMediaProject.thumbnailUrl}
                    alt={activeMediaProject.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Media Info Sheet */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {isUrdu ? activeMediaProject.titleUrdu : activeMediaProject.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-slate-500 block uppercase">Role</span>
                    <span className="text-slate-200 font-sans font-semibold text-sm">
                      {isUrdu ? activeMediaProject.myRoleUrdu : activeMediaProject.myRole}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-slate-500 block uppercase">Impact / Metrics</span>
                    <span className="text-emerald-400 font-sans font-semibold text-sm">
                      {isUrdu ? activeMediaProject.resultUrdu : activeMediaProject.result || 'Community Distribution'}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  {isUrdu ? activeMediaProject.aboutUrdu : activeMediaProject.about}
                </p>

                {activeMediaProject.link && (
                  <div className="pt-2">
                    <a
                      href={activeMediaProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg shadow-emerald-500/25"
                    >
                      <span>Open Project External Link</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
