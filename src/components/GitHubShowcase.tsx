import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Star, GitFork, ExternalLink, Code2, BookOpen } from 'lucide-react';

interface GitHubShowcaseProps {
  lang: 'en' | 'ur';
}

export const GitHubShowcase: React.FC<GitHubShowcaseProps> = ({ lang }) => {
  const isUrdu = lang === 'ur';

  return (
    <section id="github-projects" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 tracking-wider uppercase mb-1">
              <Code2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>{isUrdu ? 'اوپن سورس اور کوڈ ریپوزٹریز' : 'Open Source & Technical Tools'}</span>
              <span aria-hidden="true">·</span>
              <span>GitHub Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {isUrdu ? 'گٹ ہب پراجیکٹس اور تعلیمی ٹولز' : 'GitHub Repositories & Community Code'}
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-xl">
              {isUrdu
                ? 'کمیونٹی اساتذہ اور فیلڈ ورکرز کے لیے تیار کردہ اوپن سورس پرامپٹس، آٹومیشن اسکرپٹس اور زرعی ٹولز۔'
                : 'Open-access EdTech prompt worksheets, survey data hygiene scripts, and sustainability calculators on GitHub.'}
            </p>
          </div>

          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-md transition-colors shadow-2xs self-start md:self-auto"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>{isUrdu ? 'گٹ ہب پروفائل ملاحظہ کریں' : 'Follow @salmanroonjah on GitHub'}</span>
          </a>
        </div>

        {/* 2x2 Clean Repository Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.githubRepositories.map((repo) => (
            <div
              key={repo.name}
              className="bg-[#fafaf8] border border-stone-200/90 rounded-xl p-5 hover:border-emerald-700/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{repo.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>

                  <span className="text-[11px] font-mono font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                    {repo.language}
                  </span>
                </div>

                <div className="text-xs font-semibold text-emerald-800 mb-2 font-urdu">
                  {isUrdu ? repo.nameUrdu : ''}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {isUrdu ? repo.descriptionUrdu : repo.description}
                </p>

                {/* Topics / Tags rendered as clean unboxed text with separators */}
                <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-stone-500 font-mono">
                  {repo.topics.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span>#{t}</span>
                      {idx < repo.topics.length - 1 && (
                        <span aria-hidden="true" className="text-stone-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom stats & action */}
              <div className="mt-5 pt-3 border-t border-stone-200/70 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-4 font-mono tabular-nums">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-600" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-stone-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 hover:text-emerald-950 transition-colors inline-flex items-center gap-1"
                >
                  <span>{isUrdu ? 'ریپو دیکھیں' : 'View Code'}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
