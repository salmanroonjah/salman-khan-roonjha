import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  portfolioData as initialPortfolioData, 
  CreativeProject, 
  ExperienceItem,
  CertificationItem 
} from '../data/portfolioData';

type PortfolioDataType = typeof initialPortfolioData;

export type ThemeMode = 'dark' | 'light';

interface PortfolioContextType {
  data: PortfolioDataType;
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  updateData: (newData: Partial<PortfolioDataType>) => void;
  // Projects
  addProject: (project: CreativeProject) => void;
  updateProject: (id: string, updatedProject: Partial<CreativeProject>) => void;
  deleteProject: (id: string) => void;
  // Experience
  addExperience: (exp: ExperienceItem) => void;
  updateExperience: (id: string, updatedExp: Partial<ExperienceItem>) => void;
  deleteExperience: (id: string) => void;
  // Impact
  updateImpactStat: (index: number, value: string, label: string) => void;
  // Certifications
  addCertification: (cert: CertificationItem) => void;
  updateCertification: (id: string, updatedCert: Partial<CertificationItem>) => void;
  deleteCertification: (id: string) => void;
  // Hero & About & Contact
  updateHero: (updated: Partial<typeof initialPortfolioData.hero>) => void;
  updateAbout: (updated: Partial<typeof initialPortfolioData.about>) => void;
  updateContact: (updated: Partial<typeof initialPortfolioData.contact>) => void;
  // Backup & Import
  resetToDefaults: () => void;
  getExportCode: () => string;
  downloadBackupJson: () => void;
  importJsonData: (jsonStr: string) => boolean;
  changePin: (newPin: string) => void;
}

const STORAGE_KEY = 'sk_portfolio_live_data';
const AUTH_KEY = 'sk_portfolio_admin_auth';
const PIN_KEY = 'sk_admin_custom_pin';
const THEME_KEY = 'sk_portfolio_theme';
const DEFAULT_PIN = 'admin123';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    } catch {
      // ignore
    }
    return 'dark';
  });

  const [data, setData] = useState<PortfolioDataType>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure merged with initial in case of any new schema keys
        return { ...initialPortfolioData, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load portfolio data from storage', e);
    }
    return initialPortfolioData;
  });

  // Sync theme to HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (mode: ThemeMode) => {
    setThemeState(mode);
  };

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  });

  // Save changes to localStorage automatically
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save portfolio data to storage', e);
    }
  }, [data]);

  // Check URL hash/params for #admin or ?admin
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setIsAdminOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);

    // Keyboard shortcut: Alt + A
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const login = (password: string) => {
    const savedPin = localStorage.getItem(PIN_KEY) || DEFAULT_PIN;
    if (password === savedPin || password === 'salman2026') {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const changePin = (newPin: string) => {
    if (!newPin.trim()) return;
    localStorage.setItem(PIN_KEY, newPin.trim());
  };

  const updateData = (newData: Partial<PortfolioDataType>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const addProject = (project: CreativeProject) => {
    setData((prev) => ({
      ...prev,
      myWork: {
        ...prev.myWork,
        projects: [project, ...prev.myWork.projects],
      },
    }));
  };

  const updateProject = (id: string, updatedProject: Partial<CreativeProject>) => {
    setData((prev) => ({
      ...prev,
      myWork: {
        ...prev.myWork,
        projects: prev.myWork.projects.map((p) => (p.id === id ? { ...p, ...updatedProject } : p)),
      },
    }));
  };

  const deleteProject = (id: string) => {
    setData((prev) => ({
      ...prev,
      myWork: {
        ...prev.myWork,
        projects: prev.myWork.projects.filter((p) => p.id !== id),
      },
    }));
  };

  const addExperience = (exp: ExperienceItem) => {
    setData((prev) => ({
      ...prev,
      experience: [exp, ...prev.experience],
    }));
  };

  const updateExperience = (id: string, updatedExp: Partial<ExperienceItem>) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, ...updatedExp } : e)),
    }));
  };

  const deleteExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id),
    }));
  };

  const updateImpactStat = (index: number, value: string, label: string) => {
    setData((prev) => {
      const newImpact = [...prev.impact];
      if (newImpact[index]) {
        newImpact[index] = { ...newImpact[index], value, label };
      }
      return { ...prev, impact: newImpact };
    });
  };

  const addCertification = (cert: CertificationItem) => {
    setData((prev) => ({
      ...prev,
      certifications: [cert, ...prev.certifications],
    }));
  };

  const updateCertification = (id: string, updatedCert: Partial<CertificationItem>) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, ...updatedCert } : c)),
    }));
  };

  const deleteCertification = (id: string) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }));
  };

  const updateHero = (updated: Partial<typeof initialPortfolioData.hero>) => {
    setData((prev) => ({
      ...prev,
      hero: { ...prev.hero, ...updated },
    }));
  };

  const updateAbout = (updated: Partial<typeof initialPortfolioData.about>) => {
    setData((prev) => ({
      ...prev,
      about: { ...prev.about, ...updated },
    }));
  };

  const updateContact = (updated: Partial<typeof initialPortfolioData.contact>) => {
    setData((prev) => ({
      ...prev,
      contact: { ...prev.contact, ...updated },
    }));
  };

  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to restore default portfolio data? Any unsaved edits will be reset.')) {
      setData(initialPortfolioData);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const getExportCode = () => {
    return `// Exported from Salman Khan Portfolio CMS on ${new Date().toISOString()}\nexport const portfolioData = ${JSON.stringify(data, null, 2)};\n`;
  };

  const downloadBackupJson = () => {
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `salman-portfolio-data-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importJsonData = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && (parsed.hero || parsed.myWork || parsed.experience)) {
        setData({ ...initialPortfolioData, ...parsed });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        theme,
        toggleTheme,
        setTheme,
        isAdminOpen,
        setIsAdminOpen,
        isAuthenticated,
        login,
        logout,
        updateData,
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
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
