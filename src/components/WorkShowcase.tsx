import React, { useState } from 'react';
import { portfolioData, CreativeProject } from '../data/portfolioData';
import { 
  Play, 
  Image as ImageIcon, 
  ExternalLink, 
  X, 
  Sparkles, 
  Film, 
  CheckCircle2, 
  Eye, 
  Layers, 
  Maximize2 
} from 'lucide-react';

interface WorkShowcaseProps {
  lang: 'en' | 'ur';
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';
  const [selectedCategory, setSelectedCategory] = useState<string>('All Projects');
  const [activeMediaProject, setActiveMediaProject] = useState<CreativeProject | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? portfolioData.myWork.projects
      : portfolioData.myWork.projects.filter((p) => p.category === selectedCategory);

  const openModal = (project: CreativeProject) => {
    setActiveMediaProject(project);
    setActiveGalleryIndex(0);
  };

  return (
    <section id="my-work" className="py-20 sm:py-24 border-b border-slate-800 bg-[#0B0F17] relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            <Film className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isUrdu ? 'ویڈیوز، میڈیا و تخلیقی پراجیکٹس' : 'Videos, Media & Creative Projects'}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{isUrdu ? 'پورٹ فولیو نمائش' : 'Visual Showcase'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {isUrdu ? 'میرا کام: ویڈیوز اور تخلیقی پراجیکٹس' : 'My Work (Videos & Creative Projects)'}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            {isUrdu ? portfolioData.myWork.introLineUrdu : portfolioData.myWork.introLine}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-800/80">
          {portfolioData.myWork.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid with Video & Picture Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Media Frame (16:9 Aspect Ratio) */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Media Type Badge (Top Right) */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-[11px] font-mono text-emerald-400 font-semibold shadow-xs">
                  {project.mediaType === 'video' ? (
                    <>
                      <Film className="w-3 h-3 text-emerald-400" />
                      <span>{project.duration || 'Video'}</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon className="w-3 h-3 text-emerald-400" />
                      <span>{project.duration || 'Visual'}</span>
                    </>
                  )}
                </div>

                {/* Category Pill (Top Left) */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Play Button Overlay (for video) or Zoom icon (for graphics) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/40 group-hover:scale-110 transition-transform">
                    {project.mediaType === 'video' ? (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    ) : (
                      <Maximize2 className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Bottom Bar inside media */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span>{project.createdFor}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Preview</span>
                  </span>
                </div>
              </div>

              {/* Bottom Details Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  {/* Title */}
                  <h3 
                    onClick={() => openModal(project)}
                    className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-snug cursor-pointer"
                  >
                    {isUrdu ? project.titleUrdu : project.title}
                  </h3>

                  {/* My Role */}
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-200 font-semibold">{isUrdu ? 'میرا کردار: ' : 'My role: '}</strong>
                    <span>{isUrdu ? project.myRoleUrdu : project.myRole}</span>
                  </div>

                  {/* About */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    <strong className="text-slate-100 font-medium">{isUrdu ? 'تفصیل: ' : 'About: '}</strong>
                    {isUrdu ? project.aboutUrdu : project.about}
                  </p>

                  {/* Result (if any) */}
                  {project.result && (
                    <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl text-xs space-y-0.5">
                      <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">
                        {isUrdu ? 'نتائج و اثرات (Result)' : 'Result / Reach'}
                      </span>
                      <span className="text-slate-200 font-medium">
                        {isUrdu ? project.resultUrdu : project.result}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Trigger */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => openModal(project)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{project.mediaType === 'video' ? 'Play Video' : 'View Graphics'}</span>
                  </button>

                  <span className="text-[11px] text-slate-500 font-mono">
                    {project.createdFor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Media Lightbox Modal */}
      {activeMediaProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveMediaProject(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  {activeMediaProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  Created for: <strong className="text-white">{activeMediaProject.createdFor}</strong>
                </span>
              </div>

              <button
                onClick={() => setActiveMediaProject(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Media Player / Gallery Canvas */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Media Container */}
              <div className="rounded-xl overflow-hidden bg-black border border-slate-800 aspect-video w-full flex items-center justify-center relative shadow-inner">
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
                    src={
                      activeMediaProject.galleryImages && activeMediaProject.galleryImages.length > 0
                        ? activeMediaProject.galleryImages[activeGalleryIndex]
                        : activeMediaProject.thumbnailUrl
                    }
                    alt={activeMediaProject.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Multi-Image Gallery Strip if multiple pictures exist */}
              {activeMediaProject.galleryImages && activeMediaProject.galleryImages.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {activeMediaProject.galleryImages.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        activeGalleryIndex === idx
                          ? 'border-emerald-400 scale-105 shadow-md shadow-emerald-500/20'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Case Details */}
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {isUrdu ? activeMediaProject.titleUrdu : activeMediaProject.title}
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono mt-1">
                    {activeMediaProject.createdFor} · {activeMediaProject.category}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 pt-2">
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                      {isUrdu ? 'کردار (Role)' : 'My Role'}
                    </span>
                    <span className="text-white font-semibold">
                      {isUrdu ? activeMediaProject.myRoleUrdu : activeMediaProject.myRole}
                    </span>
                  </div>

                  <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                      {isUrdu ? 'دورانیہ / میڈیا' : 'Media Format'}
                    </span>
                    <span className="text-white font-semibold">
                      {activeMediaProject.duration || 'High Definition Media'}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                    {isUrdu ? 'تفصیل (About)' : 'Project Scope & Context'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isUrdu ? activeMediaProject.aboutUrdu : activeMediaProject.about}
                  </p>
                </div>

                {activeMediaProject.result && (
                  <div className="p-4 bg-emerald-950/30 border border-emerald-800/60 rounded-xl space-y-1">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block font-bold">
                      {isUrdu ? 'نتائج (Result / Reach)' : 'Quantified Results & Community Impact'}
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-200 font-medium">
                      {isUrdu ? activeMediaProject.resultUrdu : activeMediaProject.result}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <a
                href={portfolioData.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5"
              >
                <span>Inquire for Similar Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setActiveMediaProject(null)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
