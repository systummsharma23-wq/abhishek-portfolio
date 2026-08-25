import React, { useState } from 'react';
import { X, Check, Copy, Sparkles, Image, User, Layers, RefreshCw } from 'lucide-react';
import { DesignerProfile, Project } from '../types';

interface ContentCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DesignerProfile;
  onUpdateProfile: (newProfile: DesignerProfile) => void;
  projects: Project[];
  onUpdateProjects: (newProjects: Project[]) => void;
  onResetDefaults: () => void;
}

export const ContentCustomizerModal: React.FC<ContentCustomizerModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  projects,
  onUpdateProjects,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'hero' | 'images' | 'stats' | 'projects'>('profile');
  const [copiedJson, setCopiedJson] = useState(false);

  if (!isOpen) return null;

  const handleCopyCleanData = () => {
    const fullExport = {
      profile,
      projects,
    };
    navigator.clipboard.writeText(JSON.stringify(fullExport, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  return (
    <div
      id="content-customizer-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-[#141414] text-white border border-white/15 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#1A1A1A]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F5A623] text-black flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Content & Placeholder Manager
              </h3>
              <p className="text-xs text-white/50 font-mono">
                Easily customize names, portraits, stats & project imagery live
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCleanData}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono flex items-center gap-1.5 text-white/90 transition-colors"
            >
              {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedJson ? 'JSON Copied!' : 'Export JSON'}</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5A623] hover:text-black flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#171717] px-6 gap-6 overflow-x-auto">
          {[
            { id: 'profile', label: 'Identity & Bio', icon: User },
            { id: 'hero', label: 'Hero Display', icon: Layers },
            { id: 'images', label: 'Portraits & Art', icon: Image },
            { id: 'stats', label: 'Statistics', icon: Sparkles },
            { id: 'projects', label: 'Project Titles', icon: Layers },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 text-xs font-grotesk font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-[#F5A623] text-[#F5A623]'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow max-h-[60vh]">
          {/* Identity & Bio */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    DESIGNER NAME
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => onUpdateProfile({ ...profile, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    MONOGRAM / LOGO
                  </label>
                  <input
                    type="text"
                    value={profile.monogram}
                    onChange={(e) => onUpdateProfile({ ...profile, monogram: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    ROLE / TITLE
                  </label>
                  <input
                    type="text"
                    value={profile.role}
                    onChange={(e) => onUpdateProfile({ ...profile, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    LOCATION
                  </label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => onUpdateProfile({ ...profile, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                  AVAILABILITY TEXT
                </label>
                <input
                  type="text"
                  value={profile.availability}
                  onChange={(e) => onUpdateProfile({ ...profile, availability: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                  CONTACT EMAIL
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => onUpdateProfile({ ...profile, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                  ABOUT MANIFESTO / PHILOSOPHY INTRO
                </label>
                <textarea
                  rows={2}
                  value={profile.aboutIntro}
                  onChange={(e) => onUpdateProfile({ ...profile, aboutIntro: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                />
              </div>
            </div>
          )}

          {/* Hero Display Headings */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    HERO LINE 1 (e.g. "visual" or "graphic")
                  </label>
                  <input
                    type="text"
                    value={profile.headlineLine1}
                    onChange={(e) => onUpdateProfile({ ...profile, headlineLine1: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                    HERO LINE 2 (e.g. "poetry" or "designer")
                  </label>
                  <input
                    type="text"
                    value={profile.headlineLine2}
                    onChange={(e) => onUpdateProfile({ ...profile, headlineLine2: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-white/50 block mb-1">
                  HERO BIO SNIPPET
                </label>
                <textarea
                  rows={3}
                  value={profile.bioSnippet}
                  onChange={(e) => onUpdateProfile({ ...profile, bioSnippet: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                />
              </div>

              {/* Quick Preset Buttons */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-[#F5A623] block mb-2">
                  QUICK HEADLINE PRESETS
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => onUpdateProfile({ ...profile, headlineLine1: 'visual', headlineLine2: 'poetry' })}
                    className="px-3 py-1.5 rounded-lg bg-black text-xs font-grotesk hover:bg-[#F5A623] hover:text-black transition-colors"
                  >
                    "visual poetry"
                  </button>
                  <button
                    onClick={() => onUpdateProfile({ ...profile, headlineLine1: 'graphic', headlineLine2: 'designer' })}
                    className="px-3 py-1.5 rounded-lg bg-black text-xs font-grotesk hover:bg-[#F5A623] hover:text-black transition-colors"
                  >
                    "graphic designer"
                  </button>
                  <button
                    onClick={() => onUpdateProfile({ ...profile, headlineLine1: 'art', headlineLine2: 'direction' })}
                    className="px-3 py-1.5 rounded-lg bg-black text-xs font-grotesk hover:bg-[#F5A623] hover:text-black transition-colors"
                  >
                    "art direction"
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Portraits & Artworks */}
          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-3">
                <label className="text-[10px] font-mono uppercase text-white/50 block font-bold">
                  HERO YELLOW CARD PORTRAIT IMAGE
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={profile.portraitYellowBg}
                    alt="Preview"
                    className="w-20 h-24 rounded-2xl object-cover border-2 border-[#F5A623] bg-black shadow-lg"
                  />
                  <div className="flex-1 space-y-2 w-full">
                    <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5A623] text-black font-grotesk font-bold text-xs uppercase cursor-pointer hover:bg-white transition-all">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload New Photo From Device</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              onUpdateProfile({ ...profile, portraitYellowBg: reader.result as string });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder="Or paste image URL"
                      value={profile.portraitYellowBg}
                      onChange={(e) => onUpdateProfile({ ...profile, portraitYellowBg: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-3">
                <label className="text-[10px] font-mono uppercase text-white/50 block font-bold">
                  ABOUT SECTION MONOCHROME PORTRAIT
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <img
                    src={profile.aboutMonochromePortrait}
                    alt="Preview"
                    className="w-20 h-24 rounded-2xl object-cover filter grayscale border-2 border-white/20 bg-black shadow-lg"
                  />
                  <div className="flex-1 space-y-2 w-full">
                    <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-grotesk font-bold text-xs uppercase cursor-pointer hover:bg-[#F5A623] transition-all">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload New Photo From Device</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              onUpdateProfile({ ...profile, aboutMonochromePortrait: reader.result as string });
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      placeholder="Or paste image URL"
                      value={profile.aboutMonochromePortrait}
                      onChange={(e) => onUpdateProfile({ ...profile, aboutMonochromePortrait: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-[#171717] border border-white/15 text-xs text-white focus:outline-none focus:border-[#F5A623]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Statistics */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              {profile.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black border border-white/10 grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[9px] font-mono text-white/40 block">VALUE</label>
                    <input
                      type="text"
                      value={stat.value}
                      onChange={(e) => {
                        const newStats = [...profile.stats];
                        newStats[idx].value = e.target.value;
                        onUpdateProfile({ ...profile, stats: newStats });
                      }}
                      className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-mono text-white/40 block">LABEL</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => {
                        const newStats = [...profile.stats];
                        newStats[idx].label = e.target.value;
                        onUpdateProfile({ ...profile, stats: newStats });
                      }}
                      className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-mono text-white/40 block">SUBLABEL</label>
                    <input
                      type="text"
                      value={stat.sublabel || ''}
                      onChange={(e) => {
                        const newStats = [...profile.stats];
                        newStats[idx].sublabel = e.target.value;
                        onUpdateProfile({ ...profile, stats: newStats });
                      }}
                      className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={proj.id} className="p-4 rounded-2xl bg-black border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#F5A623]">
                        PROJECT {proj.number}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/70 font-mono">
                        {proj.category}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40">{proj.year}</span>
                  </div>

                  {/* Thumbnail and Title Editor */}
                  <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <div className="w-full sm:w-36 aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-white/15 relative shrink-0">
                      {proj.imageUrl ? (
                        <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-black/40 text-[10px] text-white/40 font-mono">
                          Default Asset
                        </div>
                      )}
                      <label className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex items-center justify-center text-[10px] font-bold text-[#F5A623] cursor-pointer transition-opacity">
                        <Upload className="w-3.5 h-3.5 mr-1" /> Replace
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const newProjects = [...projects];
                                newProjects[idx].imageUrl = reader.result as string;
                                newProjects[idx].coverImage = reader.result as string;
                                onUpdateProjects(newProjects);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="flex-1 w-full space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="text-[9px] font-mono text-white/40 block">TITLE</label>
                          <input
                            type="text"
                            value={proj.title}
                            onChange={(e) => {
                              const newProjects = [...projects];
                              newProjects[idx].title = e.target.value;
                              onUpdateProjects(newProjects);
                            }}
                            className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono text-white/40 block">CLIENT</label>
                          <input
                            type="text"
                            value={proj.client}
                            onChange={(e) => {
                              const newProjects = [...projects];
                              newProjects[idx].client = e.target.value;
                              onUpdateProjects(newProjects);
                            }}
                            className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[9px] font-mono text-white/40 block">CTR BOOST</label>
                          <input
                            type="text"
                            value={proj.ctrBoost || ''}
                            onChange={(e) => {
                              const newProjects = [...projects];
                              newProjects[idx].ctrBoost = e.target.value;
                              newProjects[idx].badgeText = e.target.value;
                              onUpdateProjects(newProjects);
                            }}
                            className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono text-white/40 block">VIEWS GENERATED</label>
                          <input
                            type="text"
                            value={proj.viewsGenerated || ''}
                            onChange={(e) => {
                              const newProjects = [...projects];
                              newProjects[idx].viewsGenerated = e.target.value;
                              onUpdateProjects(newProjects);
                            }}
                            className="w-full px-2 py-1.5 rounded bg-[#171717] text-white text-xs border border-white/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#171717] border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset To Default Content</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#F5A623] text-black font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
          >
            Apply & Close
          </button>
        </div>

      </div>
    </div>
  );
};
