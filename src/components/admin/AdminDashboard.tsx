import React, { useState, useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { CreativeProject, ExperienceItem, CertificationItem } from '../../data/portfolioData';
import { 
  Lock, 
  Unlock, 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Copy, 
  Check, 
  Download, 
  Upload,
  Eye, 
  Film, 
  Briefcase, 
  Share2, 
  Code, 
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  Key,
  Layers,
  Sparkles
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    data,
    isAdminOpen,
    setIsAdminOpen,
    isAuthenticated,
    login,
    logout,
    addProject,
    updateProject,
    deleteProject,
    addExperience,
    updateExperience,
    deleteExperience,
    updateImpactStat,
    addCertification,
    updateCertification,
    deleteCertification,
    updateHero,
    updateAbout,
    updateContact,
    resetToDefaults,
    getExportCode,
    downloadBackupJson,
    importJsonData,
    changePin,
  } = usePortfolio();

  // Streamlined 5 essential tabs (No irrelevant clutter)
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'experience' | 'content' | 'settings'>('overview');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [newPinInput, setNewPinInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states for New / Editing Project
  const [isEditingProject, setIsEditingProject] = useState(false);
  const [projectForm, setProjectForm] = useState<CreativeProject>({
    id: '',
    title: '',
    titleUrdu: '',
    createdFor: '',
    myRole: '',
    myRoleUrdu: '',
    about: '',
    aboutUrdu: '',
    result: '',
    resultUrdu: '',
    category: 'Training Videos',
    mediaType: 'video',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '05:00 min',
  });

  // Form states for New / Editing Experience
  const [isEditingExp, setIsEditingExp] = useState(false);
  const [expForm, setExpForm] = useState<ExperienceItem>({
    id: '',
    role: '',
    roleUrdu: '',
    organization: '',
    organizationUrdu: '',
    period: '',
    periodUrdu: '',
    location: '',
    locationUrdu: '',
    summary: '',
    summaryUrdu: '',
    bullets: [''],
    bulletsUrdu: [''],
    links: {
      website: '',
      linkedin: '',
      instagram: '',
      facebook: '',
    },
  });

  // Editable Hero state
  const [heroForm, setHeroForm] = useState(data.hero);
  // Editable Contact state
  const [contactForm, setContactForm] = useState(data.contact);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(passwordInput)) {
      setLoginError(false);
      setPasswordInput('');
      showNotification('Admin Panel Unlocked');
    } else {
      setLoginError(true);
    }
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.createdFor) return;

    if (projectForm.id) {
      updateProject(projectForm.id, projectForm);
      showNotification('Project updated successfully');
    } else {
      const newProject: CreativeProject = {
        ...projectForm,
        id: `work-${Date.now()}`,
      };
      addProject(newProject);
      showNotification('New project published');
    }
    setIsEditingProject(false);
  };

  const handleSaveExp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expForm.role || !expForm.organization) return;

    if (expForm.id) {
      updateExperience(expForm.id, expForm);
      showNotification('Experience updated successfully');
    } else {
      const newExp: ExperienceItem = {
        ...expForm,
        id: `exp-${Date.now()}`,
      };
      addExperience(newExp);
      showNotification('New experience published');
    }
    setIsEditingExp(false);
  };

  const handleSaveHeroAndContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateHero(heroForm);
    updateContact(contactForm);
    showNotification('Bio & Contact info saved live');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getExportCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
    showNotification('TypeScript code copied to clipboard');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const ok = importJsonData(content);
        if (ok) {
          showNotification('Portfolio database restored');
        } else {
          alert('Invalid JSON file format.');
        }
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPinInput.trim().length >= 4) {
      changePin(newPinInput.trim());
      setNewPinInput('');
      showNotification('Admin password updated');
    } else {
      alert('Password must be at least 4 characters long.');
    }
  };

  if (!isAdminOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl">
      <div 
        className="relative w-full max-w-5xl bg-[#090C12] border border-white/[0.12] rounded-3xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimalist Control Bar */}
        <div className="p-4 sm:p-5 bg-black/60 border-b border-white/[0.08] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center font-bold">
              <LayoutDashboard className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Portfolio Manager
                </h2>
                <span className="text-[10px] font-mono font-medium text-cyan-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  LIVE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Salman Khan · Instant Cloudflare Sync
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] cursor-pointer"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/[0.06] transition-colors cursor-pointer"
              aria-label="Close Admin"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {notification && (
          <div className="bg-blue-600 text-white px-4 py-2 text-xs font-bold flex items-center justify-between shrink-0 shadow-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-300" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="cursor-pointer">✕</button>
          </div>
        )}

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-14 flex items-center justify-center flex-1 overflow-y-auto">
            <div className="max-w-sm w-full bg-black/40 border border-white/[0.08] rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto shadow-inner">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Security Access</h3>
                <p className="text-xs text-slate-400">
                  Enter your master password to edit portfolio content.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full px-4 py-3 bg-black/60 border border-white/[0.1] rounded-2xl focus:outline-hidden focus:border-blue-500 text-white text-sm"
                  />
                  {loginError && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Incorrect password. Default: <code className="text-cyan-400">admin123</code></span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl text-xs transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] cursor-pointer"
                >
                  Unlock Dashboard
                </button>
              </form>

              <div className="text-center">
                <span className="text-[11px] font-mono text-slate-500">Default PIN: </span>
                <span className="text-[11px] font-mono text-cyan-400 font-bold">admin123</span>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Tabs */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-56 bg-black/30 border-r border-white/[0.08] p-3.5 space-y-1 shrink-0 overflow-y-auto">
              <button
                onClick={() => { setActiveTab('overview'); setIsEditingProject(false); setIsEditingExp(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.35)]' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => { setActiveTab('projects'); setIsEditingProject(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'projects' ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.35)]' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <Film className="w-4 h-4" />
                <span>Work & Videos ({data.myWork.projects.length})</span>
              </button>

              <button
                onClick={() => { setActiveTab('experience'); setIsEditingExp(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'experience' ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.35)]' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience ({data.experience.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('content')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'content' ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.35)]' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <Share2 className="w-4 h-4" />
                <span>Bio, Stats & Socials</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === 'settings' ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.35)]' : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Backup & Security</span>
              </button>

              <div className="pt-4 mt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => setIsAdminOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white/[0.02] hover:bg-white/[0.06] text-cyan-400 rounded-xl text-xs font-medium border border-white/[0.08] transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Live Site</span>
                </button>
              </div>
            </div>

            {/* Main Editor Canvas */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">System Overview</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      All changes are saved instantly in your local browser and reflected on the live site.
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Total Projects</span>
                      <span className="text-2xl font-bold text-blue-400 font-mono">{data.myWork.projects.length}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Work Experience</span>
                      <span className="text-2xl font-bold text-white font-mono">{data.experience.length}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Learners Trained</span>
                      <span className="text-2xl font-bold text-cyan-400 font-mono">{data.impact[0]?.value || '2,500+'}</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">Certifications</span>
                      <span className="text-2xl font-bold text-white font-mono">{data.certifications.length}</span>
                    </div>
                  </div>

                  {/* Fast Action */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Quick Actions</h4>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => {
                          setProjectForm({
                            id: '',
                            title: '',
                            titleUrdu: '',
                            createdFor: '',
                            myRole: 'Video editing, scripting',
                            myRoleUrdu: 'ویڈیو ایڈیٹنگ، اسکرپٹ رائٹنگ',
                            about: '',
                            aboutUrdu: '',
                            result: '',
                            resultUrdu: '',
                            category: 'Training Videos',
                            mediaType: 'video',
                            thumbnailUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
                            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                            duration: '05:00 min',
                          });
                          setIsEditingProject(true);
                          setActiveTab('projects');
                        }}
                        className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Project / Video</span>
                      </button>

                      <button
                        onClick={() => {
                          setExpForm({
                            id: '',
                            role: '',
                            roleUrdu: '',
                            organization: '',
                            organizationUrdu: '',
                            period: '2026 – Present',
                            periodUrdu: '2026 – تا حال',
                            location: 'Lasbela, Balochistan',
                            locationUrdu: 'لسبیلہ، بلوچستان',
                            summary: '',
                            summaryUrdu: '',
                            bullets: [''],
                            bulletsUrdu: [''],
                            links: { website: '', linkedin: '', instagram: '' }
                          });
                          setIsEditingExp(true);
                          setActiveTab('experience');
                        }}
                        className="px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium rounded-xl text-xs border border-white/[0.08] flex items-center gap-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Experience</span>
                      </button>

                      <button
                        onClick={downloadBackupJson}
                        className="px-4 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] text-blue-400 font-medium rounded-xl text-xs border border-white/[0.08] flex items-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download JSON Backup</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROJECTS & VIDEOS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Work, Videos & Creative Projects</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Publish your videos, reels, infographics and branding work.</p>
                    </div>

                    {!isEditingProject && (
                      <button
                        onClick={() => {
                          setProjectForm({
                            id: '',
                            title: '',
                            titleUrdu: '',
                            createdFor: '',
                            myRole: '',
                            myRoleUrdu: '',
                            about: '',
                            aboutUrdu: '',
                            result: '',
                            resultUrdu: '',
                            category: 'Training Videos',
                            mediaType: 'video',
                            thumbnailUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
                            videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                            duration: '05:00 min',
                          });
                          setIsEditingProject(true);
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Project</span>
                      </button>
                    )}
                  </div>

                  {isEditingProject ? (
                    <form onSubmit={handleSaveProject} className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                        <span className="font-bold text-white text-sm">
                          {projectForm.id ? 'Edit Project' : 'Create New Project'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsEditingProject(false)}
                          className="text-slate-400 hover:text-white cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Project Title (English) *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            placeholder="e.g. AI Prompting Masterclass"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Project Title (Urdu)</label>
                          <input
                            type="text"
                            value={projectForm.titleUrdu}
                            onChange={(e) => setProjectForm({ ...projectForm, titleUrdu: e.target.value })}
                            placeholder="مثلاً: اردو اے آئی ماسٹرکلاس"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white font-urdu text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Created For (Organization) *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.createdFor}
                            onChange={(e) => setProjectForm({ ...projectForm, createdFor: e.target.value })}
                            placeholder="e.g. WANG / UrduAI.org"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">My Role *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.myRole}
                            onChange={(e) => setProjectForm({ ...projectForm, myRole: e.target.value })}
                            placeholder="e.g. Video editing, Scripting"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Category</label>
                          <select
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as any })}
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white cursor-pointer"
                          >
                            <option value="Training Videos">Training Videos</option>
                            <option value="Educational Content">Educational Content</option>
                            <option value="Graphics & Design">Graphics & Design</option>
                            <option value="Social Media Campaigns">Social Media Campaigns</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Media Type</label>
                          <select
                            value={projectForm.mediaType}
                            onChange={(e) => setProjectForm({ ...projectForm, mediaType: e.target.value as any })}
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white cursor-pointer"
                          >
                            <option value="video">Playable Video</option>
                            <option value="image">Graphic / Image</option>
                          </select>
                        </div>

                        <div className="space-y-1 sm:col-span-2">
                          <label className="font-medium text-slate-300">Thumbnail Image URL *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.thumbnailUrl}
                            onChange={(e) => setProjectForm({ ...projectForm, thumbnailUrl: e.target.value })}
                            placeholder="Paste image URL..."
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white font-mono text-[11px]"
                          />
                        </div>
                      </div>

                      {projectForm.mediaType === 'video' && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="space-y-1 sm:col-span-2">
                            <label className="font-medium text-slate-300">Video URL (.mp4 / direct stream)</label>
                            <input
                              type="text"
                              value={projectForm.videoUrl || ''}
                              onChange={(e) => setProjectForm({ ...projectForm, videoUrl: e.target.value })}
                              placeholder="Direct .mp4 link..."
                              className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white font-mono text-[11px]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="font-medium text-slate-300">Duration</label>
                            <input
                              type="text"
                              value={projectForm.duration || ''}
                              onChange={(e) => setProjectForm({ ...projectForm, duration: e.target.value })}
                              placeholder="05:00 min"
                              className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                            />
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">About / Summary (English) *</label>
                          <textarea
                            rows={2}
                            required
                            value={projectForm.about}
                            onChange={(e) => setProjectForm({ ...projectForm, about: e.target.value })}
                            placeholder="What it covers or who it's for..."
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Result / Reach (e.g. 2,500+ views)</label>
                          <input
                            type="text"
                            value={projectForm.result || ''}
                            onChange={(e) => setProjectForm({ ...projectForm, result: e.target.value })}
                            placeholder="e.g. 50k+ views"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Project</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsEditingProject(false)}
                          className="px-4 py-2.5 bg-white/[0.04] text-slate-400 hover:text-white rounded-xl text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.myWork.projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col justify-between gap-3 group hover:border-white/[0.2] transition-colors"
                        >
                          <div className="flex gap-3">
                            <img
                              src={proj.thumbnailUrl}
                              alt={proj.title}
                              className="w-20 h-14 object-cover rounded-xl shrink-0 border border-white/[0.06]"
                            />
                            <div className="overflow-hidden">
                              <span className="text-[10px] font-mono font-medium text-cyan-400 uppercase tracking-wider block">
                                {proj.category}
                              </span>
                              <h4 className="text-xs font-bold text-white truncate">{proj.title}</h4>
                              <p className="text-[11px] text-slate-400 truncate">For: {proj.createdFor}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs">
                            <span className="text-[11px] text-slate-500 font-mono">{proj.mediaType}</span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  setProjectForm(proj);
                                  setIsEditingProject(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-white bg-white/[0.04] rounded-lg transition-colors cursor-pointer"
                                title="Edit"
                              >
                                <Edit3 className="w-3.5 h-3.5" />
                              </button>

                              <button
                                onClick={() => {
                                  if (window.confirm(`Delete "${proj.title}"?`)) {
                                    deleteProject(proj.id);
                                    showNotification('Project deleted');
                                  }
                                }}
                                className="p-1.5 text-rose-400 hover:text-rose-300 bg-white/[0.04] rounded-lg transition-colors cursor-pointer"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: EXPERIENCE TIMELINE */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Work Experience</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Edit field roles, dates and responsibilities.</p>
                    </div>

                    {!isEditingExp && (
                      <button
                        onClick={() => {
                          setExpForm({
                            id: '',
                            role: '',
                            roleUrdu: '',
                            organization: '',
                            organizationUrdu: '',
                            period: '2026 – Present',
                            periodUrdu: '2026 – تا حال',
                            location: 'Lasbela, Balochistan',
                            locationUrdu: 'لسبیلہ، بلوچستان',
                            summary: '',
                            summaryUrdu: '',
                            bullets: [''],
                            bulletsUrdu: [''],
                            links: { website: '', linkedin: '', instagram: '' }
                          });
                          setIsEditingExp(true);
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Experience</span>
                      </button>
                    )}
                  </div>

                  {isEditingExp ? (
                    <form onSubmit={handleSaveExp} className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                        <span className="font-bold text-white text-sm">
                          {expForm.id ? 'Edit Experience' : 'Create New Experience'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsEditingExp(false)}
                          className="text-slate-400 hover:text-white cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Role / Job Title *</label>
                          <input
                            type="text"
                            required
                            value={expForm.role}
                            onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                            placeholder="e.g. Master Trainer"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Organization *</label>
                          <input
                            type="text"
                            required
                            value={expForm.organization}
                            onChange={(e) => setExpForm({ ...expForm, organization: e.target.value })}
                            placeholder="e.g. Urdu AI – WANG"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Period *</label>
                          <input
                            type="text"
                            required
                            value={expForm.period}
                            onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                            placeholder="e.g. May 2025 – Present"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-medium text-slate-300">Location</label>
                          <input
                            type="text"
                            value={expForm.location}
                            onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                            placeholder="e.g. Balochistan, Pakistan"
                            className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-medium text-slate-300">Summary Line *</label>
                        <textarea
                          rows={2}
                          required
                          value={expForm.summary}
                          onChange={(e) => setExpForm({ ...expForm, summary: e.target.value })}
                          className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Experience</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditingExp(false)}
                          className="px-4 py-2.5 bg-white/[0.04] text-slate-400 hover:text-white rounded-xl text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-3">
                      {data.experience.map((exp) => (
                        <div
                          key={exp.id}
                          className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-between gap-4"
                        >
                          <div>
                            <span className="text-xs font-bold text-white block">{exp.role} · <span className="text-cyan-400">{exp.organization}</span></span>
                            <span className="text-[11px] text-slate-400 font-mono">{exp.period}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                setExpForm(exp);
                                setIsEditingExp(true);
                              }}
                              className="p-1.5 text-slate-400 hover:text-white bg-white/[0.04] rounded-lg transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete "${exp.role}"?`)) {
                                  deleteExperience(exp.id);
                                  showNotification('Experience removed');
                                }
                              }}
                              className="p-1.5 text-rose-400 hover:text-rose-300 bg-white/[0.04] rounded-lg transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: BIO, STATS & SOCIALS */}
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Bio, Stats & Socials</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Quickly edit your headline, bio, contact coordinates and metrics.</p>
                  </div>

                  <form onSubmit={handleSaveHeroAndContact} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-medium text-slate-300">Headline (English)</label>
                        <input
                          type="text"
                          value={heroForm.headline}
                          onChange={(e) => setHeroForm({ ...heroForm, headline: e.target.value })}
                          className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-medium text-slate-300">Sub-headline (English)</label>
                        <input
                          type="text"
                          value={heroForm.subHeadline}
                          onChange={(e) => setHeroForm({ ...heroForm, subHeadline: e.target.value })}
                          className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-medium text-slate-300">Intro Line (English)</label>
                      <textarea
                        rows={2}
                        value={heroForm.introLine}
                        onChange={(e) => setHeroForm({ ...heroForm, introLine: e.target.value })}
                        className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="font-medium text-slate-300">LinkedIn URL</label>
                        <input
                          type="text"
                          value={contactForm.linkedIn}
                          onChange={(e) => setContactForm({ ...contactForm, linkedIn: e.target.value })}
                          className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white font-mono text-[11px]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-medium text-slate-300">Instagram URL</label>
                        <input
                          type="text"
                          value={contactForm.instagram || ''}
                          onChange={(e) => setContactForm({ ...contactForm, instagram: e.target.value })}
                          className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white font-mono text-[11px]"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-medium text-slate-300">Facebook URL</label>
                        <input
                          type="text"
                          value={contactForm.facebook || ''}
                          onChange={(e) => setContactForm({ ...contactForm, facebook: e.target.value })}
                          className="w-full px-3 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white font-mono text-[11px]"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Bio & Socials</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 5: BACKUP & SETTINGS */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">Backup, Export & Security</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Protect your content and manage your database.</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-bold text-white">Database Backup (.json)</h4>
                        <p className="text-xs text-slate-400">Download or restore your complete website state.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={downloadBackupJson}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download Backup</span>
                        </button>
                        <label className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium rounded-xl text-xs border border-white/[0.1] flex items-center gap-1.5 cursor-pointer">
                          <Upload className="w-4 h-4" />
                          <span>Restore Backup</span>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept=".json"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Change Password */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Key className="w-4 h-4 text-cyan-400" />
                      <span>Change Master Admin Password</span>
                    </h4>
                    <form onSubmit={handlePasswordChange} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="password"
                        placeholder="Enter new password..."
                        value={newPinInput}
                        onChange={(e) => setNewPinInput(e.target.value)}
                        className="px-4 py-2 bg-black/60 border border-white/[0.08] rounded-xl text-white text-xs flex-1"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-cyan-400 font-bold rounded-xl text-xs border border-white/[0.1] cursor-pointer"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>

                  {/* Code Export */}
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">Full TypeScript Code</h4>
                      <button
                        onClick={handleCopyCode}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
                      </button>
                    </div>
                    <textarea
                      readOnly
                      rows={6}
                      value={getExportCode()}
                      className="w-full p-3 bg-black/60 border border-white/[0.08] rounded-xl text-slate-300 font-mono text-[11px]"
                    />
                  </div>

                  {/* Reset Defaults */}
                  <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-rose-400 block">Factory Reset</span>
                      <span className="text-[11px] text-slate-400">Restore original Salman Khan portfolio content.</span>
                    </div>
                    <button
                      onClick={resetToDefaults}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                    >
                      Reset Data
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
