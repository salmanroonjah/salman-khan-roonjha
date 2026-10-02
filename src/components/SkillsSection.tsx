import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Users, Cpu, Palette, Check } from 'lucide-react';

interface SkillsSectionProps {
  lang: 'en' | 'ur';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  const skillGroups = [
    {
      key: 'community',
      data: portfolioData.skills.community,
      icon: Users,
      accent: 'emerald',
      number: '01'
    },
    {
      key: 'technical',
      data: portfolioData.skills.technical,
      icon: Cpu,
      accent: 'stone',
      number: '02'
    },
    {
      key: 'creative',
      data: portfolioData.skills.creative,
      icon: Palette,
      accent: 'amber',
      number: '03'
    },
  ];

  return (
    <section id="skills" className="py-16 bg-[#fafaf8] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
            <span>{isUrdu ? 'تکنیکی و عملی قابلیت' : 'Multidisciplinary Toolkit'}</span>
            <span aria-hidden="true">·</span>
            <span>{isUrdu ? 'جامع صلاحیتیں' : 'Core Capabilities'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            {isUrdu ? 'مہارتیں اور پیشہ ورانہ دائرہ کار' : 'Skills & Operational Competencies'}
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            {isUrdu
              ? 'کمپیوٹر سائنس کی باضابطہ تعلیم اور دیہی بلوچستان کے زمینی حقائق کے امتزاج سے پروان چڑھنے والی ٹھوس صلاحیتیں۔'
              : 'A rare fusion of formal Computer Science foundations, field data rigor, and grassroots communication in regional languages.'}
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.key}
                className="bg-white border border-stone-200/90 rounded-xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center text-stone-800">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-stone-900">
                        {isUrdu ? group.data.titleUrdu : group.data.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-medium text-stone-400">
                      {group.number}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {group.data.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="font-bold text-stone-900">
                            {isUrdu ? skill.nameUrdu : skill.name}
                          </span>
                          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded text-right">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 leading-snug">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-medium">
                  {isUrdu ? 'فیلڈ میں تصدیق شدہ' : 'Field-Tested in District Lasbela'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
