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
      className="py-24 sm:py-32 border-b transition-colors duration-300 dark:border-white/[0.08] border-slate-200/80 dark:bg-[#070913]/60 bg-slate-50/40 relative overflow-hidden"
    >
      {/* Ambient Cinema Lighting Mesh */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase dark:text-cyan-400 text-blue-700 dark:bg-cyan-950/40 bg-blue-50 border dark:border-cyan-500/30 border-blue-500/20 shadow-[0_0_12px_rgba(37,99,235,0.15)]">
              <Film className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isUrdu ? 'ویڈیوز اور تخلیقی پراجیکٹس' : 'Selected Works & Media'}</span>
              <span aria-hidden="true" className="dark:text-white/20 text-slate-300">/</span>
              <span className="dark:text-white/60 text-slate-600">{isUrdu ? 'پورٹ فولیو نمائش' : 'Verified Portfolio'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold dark:text-white text-slate-900 tracking-tight">
              {isUrdu ? 'میرا کام: ویڈیوز اور تخلیقی پراجیکٹس' : 'My Work (Videos & Creative Projects)'}
            </h2>

            <p className="dark:text-slate-300 text-slate-600 text-sm sm:text-base leading-relaxed">
              {isUrdu ? data.myWork.introLineUrdu : data.myWork.introLine}
            </p>
          </div>
        </div>

        {/* Futuristic Glass Segmented Filter Dock */}
        <div className="relative flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl cyber-glass dark:bg-slate-900/60 bg-white/70 border dark:border-white/10 border-slate-200/90 shadow-lg mb-12 max-w-fit overflow-hidden">
          {/* Subtle live laser sweep across dock */}
          <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none animate-scan-laser" />
          {data.myWork.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer relative z-10 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.45)]'
                  : 'dark:text-slate-300 text-slate-600 hover:dark:text-white hover:text-slate-950 hover:dark:bg-white/[0.08] hover:bg-slate-200/70'
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
              className="group rounded-3xl cyber-glass-card dark:bg-slate-900/60 bg-white/70 border dark:border-white/[0.12] border-slate-200/90 hover:dark:border-cyan-400/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:-translate-y-1 relative"
            >
              {/* Media Frame (16:9 Aspect Ratio) */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-black/80 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t dark:from-[#070913] from-slate-950/70 via-transparent to-black/30" />

                {/* Category Pill Tag (Top Left) */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
                  <span>{project.category}</span>
                </div>

                {/* Duration indicator */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                  {project.mediaType === 'video' ? (project.duration || 'Video') : 'Graphic'}
                </div>

                {/* Organization Kicker (Bottom Left of Frame) */}
                <div className="absolute bottom-3 left-4 text-xs font-mono font-medium text-white drop-shadow-md">
                  {project.createdFor}
                </div>

                {/* Neon Play Ring Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all duration-300">
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
                  <div className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
                    {project.category}
                  </div>

                  <h3 
                    onClick={() => openModal(project)}
                    className="text-lg font-bold dark:text-white text-slate-900 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug cursor-pointer line-clamp-2"
                  >
                    {isUrdu ? project.titleUrdu : project.title}
                  </h3>

                  <div className="text-xs dark:text-slate-400 text-slate-500">
                    <span className="dark:text-slate-300 text-slate-700 font-semibold">{isUrdu ? 'کردار: ' : 'Role: '}</span>
                    <span>{isUrdu ? project.myRoleUrdu : project.myRole}</span>
                  </div>

                  <p className="text-xs sm:text-sm dark:text-slate-300 text-slate-600 leading-relaxed font-normal line-clamp-2">
                    {isUrdu ? project.aboutUrdu : project.about}
                  </p>

                  {/* Quantitative Result / Views Metric */}
                  {project.result && (
                    <div className="p-3 rounded-xl dark:bg-black/40 bg-slate-100/90 border dark:border-white/[0.06] border-slate-200/90 text-xs space-y-0.5 shadow-inner">
                      <span className="font-mono text-[10px] text-blue-600 dark:text-cyan-400 uppercase tracking-wider block font-bold">
                        {isUrdu ? 'اثرات / ویوز' : 'Impact / Reach'}
                      </span>
                      <span className="dark:text-slate-200 text-slate-800 font-medium font-sans">
                        {isUrdu ? project.resultUrdu : project.result}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t dark:border-white/[0.08] border-slate-200/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => openModal(project)}
                    className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{project.mediaType === 'video' ? 'Watch Reel' : 'View Media'}</span>
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-900 inline-flex items-center gap-1 transition-colors font-medium"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setActiveMediaProject(null)}
        >
          <div
            className="rounded-3xl dark:bg-[#0B0F19]/95 bg-white/95 cyber-glass-card border dark:border-white/[0.15] border-slate-300 max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-4 sm:p-5 dark:bg-black/60 bg-slate-100/80 border-b dark:border-white/[0.08] border-slate-200 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg dark:bg-cyan-950/40 bg-cyan-50 border dark:border-cyan-500/30 border-cyan-500/20 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {activeMediaProject.category}
                </span>
                <span aria-hidden="true" className="dark:text-white/20 text-slate-300">·</span>
                <span className="text-xs dark:text-slate-300 text-slate-700 font-mono font-medium">
                  {activeMediaProject.createdFor}
                </span>
              </div>

              <button
                onClick={() => setActiveMediaProject(null)}
                className="p-1.5 dark:text-slate-400 text-slate-500 hover:dark:text-white hover:text-slate-950 dark:hover:bg-white/[0.08] hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Media Stage */}
              <div className="rounded-2xl overflow-hidden bg-black border dark:border-white/[0.08] border-slate-300 aspect-video w-full flex items-center justify-center relative shadow-2xl">
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
                <h3 className="text-2xl font-bold dark:text-white text-slate-900 tracking-tight">
                  {isUrdu ? activeMediaProject.titleUrdu : activeMediaProject.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl dark:bg-white/[0.03] bg-slate-100/90 border dark:border-white/[0.06] border-slate-200">
                    <span className="dark:text-slate-400 text-slate-500 block uppercase font-bold">Role</span>
                    <span className="dark:text-slate-200 text-slate-800 font-sans font-semibold text-sm">
                      {isUrdu ? activeMediaProject.myRoleUrdu : activeMediaProject.myRole}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl dark:bg-white/[0.03] bg-slate-100/90 border dark:border-white/[0.06] border-slate-200">
                    <span className="dark:text-slate-400 text-slate-500 block uppercase font-bold">Impact / Metrics</span>
                    <span className="text-blue-600 dark:text-cyan-400 font-sans font-semibold text-sm">
                      {isUrdu ? activeMediaProject.resultUrdu : activeMediaProject.result || 'Community Distribution'}
                    </span>
                  </div>
                </div>

                <p className="text-sm dark:text-slate-300 text-slate-700 leading-relaxed font-sans">
                  {isUrdu ? activeMediaProject.aboutUrdu : activeMediaProject.about}
                </p>

                {activeMediaProject.link && (
                  <div className="pt-2">
                    <a
                      href={activeMediaProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl text-xs transition-colors shadow-lg shadow-blue-500/25 hover:brightness-110"
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
