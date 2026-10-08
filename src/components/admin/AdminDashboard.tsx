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
  RefreshCw, 
  ExternalLink, 
  Eye, 
  Film, 
  Briefcase, 
  TrendingUp, 
  Share2, 
  Code, 
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  Award,
  User,
  Key,
  Globe
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

  const [activeTab, setActiveTab] = useState<'overview' | 'hero' | 'projects' | 'experience' | 'impact' | 'certifications' | 'socials' | 'export'>('overview');
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

  // Form states for New / Editing Certification
  const [isEditingCert, setIsEditingCert] = useState(false);
  const [certForm, setCertForm] = useState<CertificationItem>({
    id: '',
    title: '',
    titleUrdu: '',
    issuer: '',
    issuerUrdu: '',
    year: '2025',
    description: '',
    descriptionUrdu: '',
    highlight: false,
  });

  // Editable Hero state
  const [heroForm, setHeroForm] = useState(data.hero);
  // Editable Contact state
  const [contactForm, setContactForm] = useState(data.contact);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(passwordInput)) {
      setLoginError(false);
      setPasswordInput('');
      showNotification('Welcome back, Salman! WordPress-style CMS unlocked.');
    } else {
      setLoginError(true);
    }
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectForm.title || !projectForm.createdFor) return;

    if (projectForm.id) {
      updateProject(projectForm.id, projectForm);
      showNotification('Project updated successfully!');
    } else {
      const newProject: CreativeProject = {
        ...projectForm,
        id: `work-${Date.now()}`,
      };
      addProject(newProject);
      showNotification('New project published to portfolio!');
    }
    setIsEditingProject(false);
  };

  const handleSaveExp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expForm.role || !expForm.organization) return;

    if (expForm.id) {
      updateExperience(expForm.id, expForm);
      showNotification('Experience updated successfully!');
    } else {
      const newExp: ExperienceItem = {
        ...expForm,
        id: `exp-${Date.now()}`,
      };
      addExperience(newExp);
      showNotification('New experience item published!');
    }
    setIsEditingExp(false);
  };

  const handleSaveCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certForm.title || !certForm.issuer) return;

    if (certForm.id) {
      updateCertification(certForm.id, certForm);
      showNotification('Certification updated!');
    } else {
      const newCert: CertificationItem = {
        ...certForm,
        id: `cert-${Date.now()}`,
      };
      addCertification(newCert);
      showNotification('New certification added!');
    }
    setIsEditingCert(false);
  };

  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    updateHero(heroForm);
    showNotification('Hero section saved and live!');
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateContact(contactForm);
    showNotification('Contact & Social links updated!');
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(getExportCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
    showNotification('TypeScript code copied to clipboard!');
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
          showNotification('Portfolio database restored successfully!');
        } else {
          alert('Invalid JSON file format. Please upload a valid exported JSON file.');
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
      showNotification('Admin password updated successfully!');
    } else {
      alert('Password must be at least 4 characters long.');
    }
  };

  if (!isAdminOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white">
                  WordPress-Style Admin Dashboard
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  Live CMS
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Salman Khan Portfolio Manager · All changes saved locally and Cloudflare ready
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                onClick={logout}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 cursor-pointer"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}

            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Admin"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {notification && (
          <div className="bg-emerald-500 text-slate-950 px-4 py-2.5 text-xs font-bold flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="cursor-pointer">✕</button>
          </div>
        )}

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-14 flex items-center justify-center flex-1 overflow-y-auto">
            <div className="max-w-md w-full bg-slate-950/80 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                  <Lock className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-white">Admin Security Access</h3>
                <p className="text-xs text-slate-400">
                  Please enter your admin password to manage projects, videos, experience and content.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">Password / Master PIN</label>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl focus:outline-hidden focus:border-emerald-500 text-white text-sm"
                  />
                  {loginError && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Incorrect password. Default: <code className="text-emerald-400">admin123</code></span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
                >
                  Unlock Admin Panel
                </button>
              </form>

              <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 text-center space-y-1">
                <span>Default Master Password: </span>
                <span className="font-mono text-emerald-400 font-bold">admin123</span>
                <span className="text-slate-500 block">(You can change this password anytime inside the dashboard)</span>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard Tabs */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-slate-950/80 border-r border-slate-800 p-4 space-y-1.5 shrink-0 overflow-y-auto">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold px-3 py-2">
                Content Modules
              </div>

              <button
                onClick={() => { setActiveTab('overview'); setIsEditingProject(false); setIsEditingExp(false); setIsEditingCert(false); }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'overview' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard Overview</span>
              </button>

              <button
                onClick={() => { setActiveTab('hero'); }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'hero' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Hero & Bio Info</span>
              </button>

              <button
                onClick={() => { setActiveTab('projects'); setIsEditingProject(false); }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'projects' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Film className="w-4 h-4" />
                <span>My Work & Videos ({data.myWork.projects.length})</span>
              </button>

              <button
                onClick={() => { setActiveTab('experience'); setIsEditingExp(false); }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'experience' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Experience Timeline ({data.experience.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('impact')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'impact' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Impact Numbers ({data.impact.length})</span>
              </button>

              <button
                onClick={() => { setActiveTab('certifications'); setIsEditingCert(false); }}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'certifications' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Certifications ({data.certifications.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('socials')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'socials' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Share2 className="w-4 h-4" />
                <span>Socials & Contact</span>
              </button>

              <button
                onClick={() => setActiveTab('export')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'export' ? 'bg-emerald-500 text-slate-950' : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Code className="w-4 h-4" />
                <span>Backup & Export</span>
              </button>

              <div className="pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setIsAdminOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 rounded-xl text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
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
                    <h3 className="text-2xl font-black text-white">Dashboard Overview</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Welcome Salman! Any change you make here is immediately active on your live portfolio.
                    </p>
                  </div>

                  {/* Summary Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 block uppercase">Total Projects</span>
                      <span className="text-3xl font-black text-emerald-400 font-mono">{data.myWork.projects.length}</span>
                    </div>

                    <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 block uppercase">Experience Roles</span>
                      <span className="text-3xl font-black text-white font-mono">{data.experience.length}</span>
                    </div>

                    <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 block uppercase">Participants Trained</span>
                      <span className="text-3xl font-black text-emerald-400 font-mono">{data.impact[0]?.value || '2,500+'}</span>
                    </div>

                    <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1">
                      <span className="text-[11px] font-mono text-slate-500 block uppercase">Certifications</span>
                      <span className="text-3xl font-black text-white font-mono">{data.certifications.length}</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="p-6 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-4">
                    <h4 className="text-sm font-bold text-white">Quick Management Actions</h4>
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
                        className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 cursor-pointer"
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
                        className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs border border-slate-700 flex items-center gap-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Experience</span>
                      </button>

                      <button
                        onClick={() => {
                          setCertForm({
                            id: '',
                            title: '',
                            titleUrdu: '',
                            issuer: '',
                            issuerUrdu: '',
                            year: '2026',
                            description: '',
                            descriptionUrdu: '',
                            highlight: false,
                          });
                          setIsEditingCert(true);
                          setActiveTab('certifications');
                        }}
                        className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs border border-slate-700 flex items-center gap-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Certification</span>
                      </button>

                      <button
                        onClick={downloadBackupJson}
                        className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 font-semibold rounded-xl text-xs border border-slate-700 flex items-center gap-2 cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download JSON Backup</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: HERO & BIO */}
              {activeTab === 'hero' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-white">Hero & Bio Information</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Customize your main headlines, sub-headlines and bio intro lines.</p>
                  </div>

                  <form onSubmit={handleSaveHero} className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-slate-300">Headline (English) *</label>
                        <input
                          type="text"
                          required
                          value={heroForm.headline}
                          onChange={(e) => setHeroForm({ ...heroForm, headline: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-slate-300">Headline (Urdu) *</label>
                        <input
                          type="text"
                          required
                          value={heroForm.headlineUrdu}
                          onChange={(e) => setHeroForm({ ...heroForm, headlineUrdu: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-semibold text-slate-300">Sub-headline (English) *</label>
                        <input
                          type="text"
                          required
                          value={heroForm.subHeadline}
                          onChange={(e) => setHeroForm({ ...heroForm, subHeadline: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-semibold text-slate-300">Sub-headline (Urdu) *</label>
                        <input
                          type="text"
                          required
                          value={heroForm.subHeadlineUrdu}
                          onChange={(e) => setHeroForm({ ...heroForm, subHeadlineUrdu: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Intro Line (English) *</label>
                      <textarea
                        rows={2}
                        required
                        value={heroForm.introLine}
                        onChange={(e) => setHeroForm({ ...heroForm, introLine: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Intro Line (Urdu) *</label>
                      <textarea
                        rows={2}
                        required
                        value={heroForm.introLineUrdu}
                        onChange={(e) => setHeroForm({ ...heroForm, introLineUrdu: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Hero Section</span>
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 3: PROJECTS & VIDEOS */}
              {activeTab === 'projects' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white">My Work & Videos</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Manage your videos, infographics, branding and creative media.</p>
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
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Project</span>
                      </button>
                    )}
                  </div>

                  {isEditingProject ? (
                    /* Project Edit Form */
                    <form onSubmit={handleSaveProject} className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
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
                          <label className="font-semibold text-slate-300">Project Title (English) *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.title}
                            onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                            placeholder="e.g. AI Prompting Masterclass"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Project Title (Urdu)</label>
                          <input
                            type="text"
                            value={projectForm.titleUrdu}
                            onChange={(e) => setProjectForm({ ...projectForm, titleUrdu: e.target.value })}
                            placeholder="مثلاً: اردو اے آئی ماسٹرکلاس"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Created For (Organization) *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.createdFor}
                            onChange={(e) => setProjectForm({ ...projectForm, createdFor: e.target.value })}
                            placeholder="e.g. WANG / UrduAI.org"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">My Role *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.myRole}
                            onChange={(e) => setProjectForm({ ...projectForm, myRole: e.target.value })}
                            placeholder="e.g. Video editing, Scripting"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Category</label>
                          <select
                            value={projectForm.category}
                            onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value as any })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
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
                          <label className="font-semibold text-slate-300">Media Type</label>
                          <select
                            value={projectForm.mediaType}
                            onChange={(e) => setProjectForm({ ...projectForm, mediaType: e.target.value as any })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          >
                            <option value="video">Playable Video</option>
                            <option value="image">Graphic / Image</option>
                            <option value="gallery">Photo Gallery</option>
                          </select>
                        </div>

                        <div className="space-y-1 sm:col-span-2">
                          <label className="font-semibold text-slate-300">Thumbnail Image URL *</label>
                          <input
                            type="text"
                            required
                            value={projectForm.thumbnailUrl}
                            onChange={(e) => setProjectForm({ ...projectForm, thumbnailUrl: e.target.value })}
                            placeholder="Paste picture URL..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                          />
                        </div>
                      </div>

                      {projectForm.mediaType === 'video' && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="space-y-1 sm:col-span-2">
                            <label className="font-semibold text-slate-300">Video URL (.mp4 / stream)</label>
                            <input
                              type="text"
                              value={projectForm.videoUrl || ''}
                              onChange={(e) => setProjectForm({ ...projectForm, videoUrl: e.target.value })}
                              placeholder="Direct .mp4 link or video link..."
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="font-semibold text-slate-300">Duration (e.g. 03:45 min)</label>
                            <input
                              type="text"
                              value={projectForm.duration || ''}
                              onChange={(e) => setProjectForm({ ...projectForm, duration: e.target.value })}
                              placeholder="05:00 min"
                              className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                            />
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">About / Summary (English) *</label>
                          <textarea
                            rows={2}
                            required
                            value={projectForm.about}
                            onChange={(e) => setProjectForm({ ...projectForm, about: e.target.value })}
                            placeholder="One line on what it covers or who it's for..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">About / Summary (Urdu)</label>
                          <textarea
                            rows={2}
                            value={projectForm.aboutUrdu}
                            onChange={(e) => setProjectForm({ ...projectForm, aboutUrdu: e.target.value })}
                            placeholder="اردو میں تفصیل..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Result / Reach / Views (e.g. 50k+ views)</label>
                          <input
                            type="text"
                            value={projectForm.result || ''}
                            onChange={(e) => setProjectForm({ ...projectForm, result: e.target.value })}
                            placeholder="e.g. 2,500+ participants reached"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">External Project / Post Link</label>
                          <input
                            type="text"
                            value={projectForm.link || ''}
                            onChange={(e) => setProjectForm({ ...projectForm, link: e.target.value })}
                            placeholder="https://..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Project</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsEditingProject(false)}
                          className="px-4 py-2.5 bg-slate-900 text-slate-400 hover:text-white rounded-xl text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Project List */
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {data.myWork.projects.map((proj) => (
                        <div
                          key={proj.id}
                          className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col justify-between gap-3 group hover:border-slate-700 transition-colors"
                        >
                          <div className="flex gap-3">
                            <img
                              src={proj.thumbnailUrl}
                              alt={proj.title}
                              className="w-20 h-14 object-cover rounded-lg shrink-0 border border-slate-800"
                            />
                            <div className="overflow-hidden">
                              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                                {proj.category}
                              </span>
                              <h4 className="text-xs font-bold text-white truncate">{proj.title}</h4>
                              <p className="text-[11px] text-slate-400 truncate">For: {proj.createdFor}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-850 text-xs">
                            <span className="text-[11px] text-slate-500">{proj.mediaType}</span>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  setProjectForm(proj);
                                  setIsEditingProject(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                                title="Edit Project"
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
                                className="p-1.5 text-rose-400 hover:text-rose-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                                title="Delete Project"
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

              {/* TAB 4: EXPERIENCE TIMELINE */}
              {activeTab === 'experience' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white">Experience Timeline</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Manage your leadership roles, organization links and responsibilities.</p>
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
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Experience</span>
                      </button>
                    )}
                  </div>

                  {isEditingExp ? (
                    /* Experience Edit Form */
                    <form onSubmit={handleSaveExp} className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
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
                          <label className="font-semibold text-slate-300">Job Title / Role (English) *</label>
                          <input
                            type="text"
                            required
                            value={expForm.role}
                            onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                            placeholder="e.g. Acting Project Lead"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Role (Urdu)</label>
                          <input
                            type="text"
                            value={expForm.roleUrdu}
                            onChange={(e) => setExpForm({ ...expForm, roleUrdu: e.target.value })}
                            placeholder="عہدہ اردو میں..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Organization (English) *</label>
                          <input
                            type="text"
                            required
                            value={expForm.organization}
                            onChange={(e) => setExpForm({ ...expForm, organization: e.target.value })}
                            placeholder="e.g. Urdu AI Training Program – WANG"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Organization (Urdu)</label>
                          <input
                            type="text"
                            value={expForm.organizationUrdu}
                            onChange={(e) => setExpForm({ ...expForm, organizationUrdu: e.target.value })}
                            placeholder="ادارے کا نام اردو میں..."
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Period *</label>
                          <input
                            type="text"
                            required
                            value={expForm.period}
                            onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                            placeholder="e.g. Jan 2026 – May 2026"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Location</label>
                          <input
                            type="text"
                            value={expForm.location}
                            onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                            placeholder="e.g. Balochistan, Pakistan"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-slate-300">Summary Line *</label>
                        <textarea
                          rows={2}
                          required
                          value={expForm.summary}
                          onChange={(e) => setExpForm({ ...expForm, summary: e.target.value })}
                          placeholder="Brief summary of duties..."
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                        />
                      </div>

                      {/* Organization Links */}
                      <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                        <span className="font-bold text-white block">Organization Official Links (Social & Web icons appear on card):</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <input
                            type="text"
                            value={expForm.links?.website || ''}
                            onChange={(e) => setExpForm({ ...expForm, links: { ...expForm.links, website: e.target.value } })}
                            placeholder="Website URL (e.g. https://wang.org.pk)"
                            className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                          />
                          <input
                            type="text"
                            value={expForm.links?.linkedin || ''}
                            onChange={(e) => setExpForm({ ...expForm, links: { ...expForm.links, linkedin: e.target.value } })}
                            placeholder="LinkedIn URL"
                            className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                          />
                          <input
                            type="text"
                            value={expForm.links?.instagram || ''}
                            onChange={(e) => setExpForm({ ...expForm, links: { ...expForm.links, instagram: e.target.value } })}
                            placeholder="Instagram URL"
                            className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Experience</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsEditingExp(false)}
                          className="px-4 py-2.5 bg-slate-900 text-slate-400 hover:text-white rounded-xl text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    /* Experience List */
                    <div className="space-y-3">
                      {data.experience.map((exp) => (
                        <div
                          key={exp.id}
                          className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white">{exp.role}</span>
                              <span className="text-xs text-emerald-400 font-semibold">· {exp.organization}</span>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-0.5">
                              {exp.period} · {exp.location}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <button
                              onClick={() => {
                                setExpForm(exp);
                                setIsEditingExp(true);
                              }}
                              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                              title="Edit Experience"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => {
                                if (window.confirm(`Delete "${exp.role} at ${exp.organization}"?`)) {
                                  deleteExperience(exp.id);
                                  showNotification('Experience removed');
                                }
                              }}
                              className="p-2 text-rose-400 hover:text-rose-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                              title="Delete Experience"
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

              {/* TAB 5: IMPACT NUMBERS */}
              {activeTab === 'impact' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-white">Impact in Numbers</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Edit your 4 key career metrics (e.g. 2,500+ participants trained).</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.impact.map((stat, idx) => (
                      <div key={idx} className="p-5 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-3 text-xs">
                        <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase block">Metric #{idx + 1}</span>
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Value (e.g. 2,500+, 4+, 4 languages)</label>
                          <input
                            type="text"
                            value={stat.value}
                            onChange={(e) => updateImpactStat(idx, e.target.value, stat.label)}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-bold font-mono text-base"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Label (English)</label>
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => updateImpactStat(idx, stat.value, e.target.value)}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => showNotification('Impact figures saved!')}
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save All Impact Numbers</span>
                  </button>
                </div>
              )}

              {/* TAB 6: CERTIFICATIONS */}
              {activeTab === 'certifications' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white">Certifications & Recognition</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Manage international accreditations, instructor certifications and honors.</p>
                    </div>

                    {!isEditingCert && (
                      <button
                        onClick={() => {
                          setCertForm({
                            id: '',
                            title: '',
                            titleUrdu: '',
                            issuer: '',
                            issuerUrdu: '',
                            year: '2026',
                            description: '',
                            descriptionUrdu: '',
                            highlight: false,
                          });
                          setIsEditingCert(true);
                        }}
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add New Certification</span>
                      </button>
                    )}
                  </div>

                  {isEditingCert ? (
                    <form onSubmit={handleSaveCert} className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <span className="font-bold text-white text-sm">
                          {certForm.id ? 'Edit Certification' : 'Create New Certification'}
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsEditingCert(false)}
                          className="text-slate-400 hover:text-white cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Title (English) *</label>
                          <input
                            type="text"
                            required
                            value={certForm.title}
                            onChange={(e) => setCertForm({ ...certForm, title: e.target.value })}
                            placeholder="e.g. AI Opportunity Fund: Asia-Pacific Certified Instructor"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Title (Urdu)</label>
                          <input
                            type="text"
                            value={certForm.titleUrdu}
                            onChange={(e) => setCertForm({ ...certForm, titleUrdu: e.target.value })}
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-urdu text-right"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1 sm:col-span-2">
                          <label className="font-semibold text-slate-300">Issuer (Organization) *</label>
                          <input
                            type="text"
                            required
                            value={certForm.issuer}
                            onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })}
                            placeholder="e.g. AI Singapore & AVPN"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-slate-300">Year</label>
                          <input
                            type="text"
                            value={certForm.year}
                            onChange={(e) => setCertForm({ ...certForm, year: e.target.value })}
                            placeholder="2025"
                            className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-semibold text-slate-300">Description</label>
                        <textarea
                          rows={2}
                          value={certForm.description}
                          onChange={(e) => setCertForm({ ...certForm, description: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white"
                        />
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="submit"
                          className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Certification</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditingCert(false)}
                          className="px-4 py-2.5 bg-slate-900 text-slate-400 hover:text-white rounded-xl text-xs cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-3">
                      {data.certifications.map((cert) => (
                        <div
                          key={cert.id}
                          className="p-4 bg-slate-950/70 border border-slate-800 rounded-2xl flex items-center justify-between gap-4"
                        >
                          <div>
                            <span className="text-xs font-bold text-white block">{cert.title}</span>
                            <span className="text-[11px] text-emerald-400">{cert.issuer} · {cert.year}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setCertForm(cert);
                                setIsEditingCert(true);
                              }}
                              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (window.confirm(`Delete "${cert.title}"?`)) {
                                  deleteCertification(cert.id);
                                  showNotification('Certification deleted');
                                }
                              }}
                              className="p-2 text-rose-400 hover:text-rose-300 bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
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

              {/* TAB 7: SOCIALS & CONTACT */}
              {activeTab === 'socials' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-white">Social Media & Coordinates</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Update your LinkedIn, Instagram, Facebook, email, phone and location.</p>
                  </div>

                  <form onSubmit={handleSaveContact} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-950/80 p-6 border border-slate-800 rounded-2xl">
                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">LinkedIn URL</label>
                      <input
                        type="text"
                        value={contactForm.linkedIn}
                        onChange={(e) => setContactForm({ ...contactForm, linkedIn: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Instagram URL</label>
                      <input
                        type="text"
                        value={contactForm.instagram || ''}
                        onChange={(e) => setContactForm({ ...contactForm, instagram: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Facebook URL</label>
                      <input
                        type="text"
                        value={contactForm.facebook || ''}
                        onChange={(e) => setContactForm({ ...contactForm, facebook: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Email Address</label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Phone Number</label>
                      <input
                        type="text"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-slate-300">Location</label>
                      <input
                        type="text"
                        value={contactForm.location}
                        onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-mono text-[11px]"
                      />
                    </div>

                    <div className="sm:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Contact & Social Coordinates</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* TAB 8: BACKUP, EXPORT & SECURITY */}
              {activeTab === 'export' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-white">Backup, Export & Security</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Save JSON backup files, sync code to your repository, or change your master admin password.
                    </p>
                  </div>

                  {/* JSON Backup & Restore Card */}
                  <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">One-Click Database Backup & Restore</h4>
                        <p className="text-xs text-slate-400">Download your entire website data as a .json file or upload an existing backup.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={downloadBackupJson}
                          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download Backup (.json)</span>
                        </button>
                        <label className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl text-xs border border-slate-700 flex items-center gap-1.5 cursor-pointer">
                          <Upload className="w-4 h-4" />
                          <span>Upload Backup</span>
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

                  {/* Password Change Card */}
                  <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Key className="w-4 h-4 text-emerald-400" />
                      <span>Change Master Admin Password</span>
                    </h4>
                    <form onSubmit={handlePasswordChange} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="password"
                        placeholder="Enter new master password..."
                        value={newPinInput}
                        onChange={(e) => setNewPinInput(e.target.value)}
                        className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs flex-1"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold rounded-xl text-xs border border-slate-700 cursor-pointer"
                      >
                        Update Password
                      </button>
                    </form>
                  </div>

                  {/* Full Code Sync Card */}
                  <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">Full portfolioData.ts Code Export</h4>
                        <p className="text-xs text-slate-400">Copy this code to replace /src/data/portfolioData.ts if you want a permanent GitHub commit.</p>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedCode ? 'Copied Code!' : 'Copy Code'}</span>
                      </button>
                    </div>

                    <textarea
                      readOnly
                      rows={8}
                      value={getExportCode()}
                      className="w-full p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-mono text-[11px] leading-relaxed"
                    />
                  </div>

                  {/* Reset Defaults */}
                  <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-2xl flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-rose-400 block">Reset Portfolio to Factory Defaults</span>
                      <span className="text-[11px] text-slate-400">Restore the original official Salman Khan portfolio data.</span>
                    </div>
                    <button
                      onClick={resetToDefaults}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                    >
                      Reset Defaults
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
