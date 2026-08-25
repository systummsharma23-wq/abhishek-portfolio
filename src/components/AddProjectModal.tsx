import React, { useState } from 'react';
import { X, Upload, Plus, Image as ImageIcon, Sparkles, Check } from 'lucide-react';
import { Project } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('Podcasts & Finance');
  const [client, setClient] = useState('');
  const [ctrBoost, setCtrBoost] = useState('+18.5% CTR');
  const [viewsGenerated, setViewsGenerated] = useState('1.5M Views');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newProject: Project = {
      id: `custom-${Date.now()}`,
      number: `0${Math.floor(Math.random() * 90 + 10)}`,
      title,
      subtitle: subtitle || 'High-CTR YouTube Thumbnail Design',
      category,
      year: new Date().getFullYear().toString(),
      client: client || 'Private Creator Client',
      role: 'Lead Graphic & Thumbnail Designer',
      services: ['YouTube Thumbnail Design', 'Click Psychology', '3D Retouching'],
      description: description || `Custom YouTube thumbnail design crafted for ${client || 'top creator'}, driving high click-through rate and viewer retention.`,
      coverImage: imageUrl || imagePreview || 'preset:the-money-show',
      isFeatured: true,
      accentColor: '#F5A623',
      ctrBoost: ctrBoost || '+18% CTR',
      viewsGenerated: viewsGenerated || '1M+ Views',
      badgeText: ctrBoost || 'High CTR',
      galleryImages: [
        {
          url: imageUrl || imagePreview || 'preset:the-money-show',
          caption: `${title} 16:9 Master Graphic.`,
          aspectRatio: 'wide',
        }
      ]
    };

    onAddProject(newProject);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#F5F4EF] text-[#0A0A0A] rounded-[32px] max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-black/10 relative">
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] font-bold block">
              PORTFOLIO EXPANSION
            </span>
            <h2 className="text-2xl font-display font-bold text-black">
              Add New Thumbnail / Project
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/10 hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image Upload Box */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-black/70 mb-1.5">
              Thumbnail Image (Upload File or Paste Image URL)
            </label>
            <div className="border-2 border-dashed border-black/20 rounded-2xl p-4 text-center hover:border-[#F5A623] transition-colors bg-white/50">
              {imagePreview ? (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-2 bg-black">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => { setImagePreview(null); setImageUrl(''); }}
                    className="absolute top-2 right-2 p-1 bg-black/80 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="py-4 flex flex-col items-center justify-center">
                  <Upload className="w-8 h-8 text-[#F5A623] mb-2" />
                  <p className="text-xs font-grotesk font-semibold text-black/80">
                    Drag and drop your thumbnail image here, or
                  </p>
                  <label className="mt-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-grotesk font-bold cursor-pointer hover:bg-[#F5A623] hover:text-black transition-all">
                    Browse File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
              <input
                type="text"
                placeholder="Or paste direct image URL (https://...)"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setImagePreview(e.target.value);
                }}
                className="w-full mt-2 px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
              />
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 mb-1">
                Project Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Masterclass // 5M Views"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 mb-1">
                Client / Channel
              </label>
              <input
                type="text"
                placeholder="e.g. Finance Hub / Podcast"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
              />
            </div>
          </div>

          {/* Category & Performance */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
              >
                <option value="Podcasts & Finance">Podcasts & Finance</option>
                <option value="Interviews & Business">Interviews & Business</option>
                <option value="Gaming & Entertainment">Gaming & Entertainment</option>
                <option value="Tech & Reviews">Tech & Reviews</option>
                <option value="EdTech & Exams">EdTech & Exams</option>
                <option value="Lifestyle & Vlogs">Lifestyle & Vlogs</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 mb-1">
                CTR Boost
              </label>
              <input
                type="text"
                placeholder="e.g. +18.5% CTR"
                value={ctrBoost}
                onChange={(e) => setCtrBoost(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 mb-1">
                Views Generated
              </label>
              <input
                type="text"
                placeholder="e.g. 2.1M Views"
                value={viewsGenerated}
                onChange={(e) => setViewsGenerated(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-black/70 mb-1">
              Brief Description / Strategy
            </label>
            <textarea
              rows={2}
              placeholder="High contrast lighting, 3D text composite, and curiosity hook designed for viral reach."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-white rounded-lg border border-black/10 focus:outline-none focus:border-[#F5A623]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-3 border-t border-black/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-grotesk font-bold text-black/70 hover:text-black cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#050505] text-[#F5F4EF] hover:bg-[#F5A623] hover:text-black text-xs font-grotesk font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Portfolio</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
