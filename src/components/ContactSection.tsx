import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send, Mail, Sparkles } from 'lucide-react';
import { DesignerProfile } from '../types';

interface ContactSectionProps {
  profile: DesignerProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Inquiry form states
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [selectedService, setSelectedService] = useState('Brand Identity');
  const [selectedBudget, setSelectedBudget] = useState('$5k—$10k');
  const [projectMessage, setProjectMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowInquiryForm(false);
      setProjectMessage('');
    }, 3000);
  };

  const servicesList = [
    'Brand Identity',
    'Editorial / Book Design',
    'Exhibition Scenography',
    'Custom Typography',
    'Digital Experience',
    'Creative Direction',
  ];

  const budgetList = ['$3k—$5k', '$5k—$10k', '$10k—$20k', '$20k+'];

  return (
    <section
      id="contact"
      className="relative bg-[#0A0A0A] text-[#F5F4EF] py-24 sm:py-36 overflow-hidden"
    >
      {/* Noise background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Top Section Index */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest text-[#F5A623] uppercase">
              [ 05 // DIRECT INQUIRY & CONTACT ]
            </span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span className="text-[10px] font-grotesk tracking-wider text-white/60 uppercase">
              GET IN TOUCH
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/40">
            CURRENTLY ACCEPTING NEW PROJECTS
          </span>
        </div>

        {/* DRAMATIC OVERSIZED MULTILINE HEADLINE */}
        <div className="mb-14 sm:mb-20">
          <h2
            id="contact-giant-headline"
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.88] tracking-[-0.06em] text-white uppercase select-none"
          >
            <span className="block hover:text-[#F5A623] transition-colors duration-300">
              let's make
            </span>
            <span className="block hover:text-[#F5A623] transition-colors duration-300">
              something
            </span>
            <span className="block text-[#F5A623] hover:text-white transition-colors duration-300">
              visual.
            </span>
          </h2>
        </div>

        {/* Action Panel & Direct Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          
          {/* LEFT: Email copy capsule & direct messaging button */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base sm:text-xl text-white/70 font-body leading-relaxed max-w-xl">
              Available for high-converting YouTube thumbnails, creator brand identities, and visual packaging. Send a direct email or fill out the project inquiry below.
            </p>

            {/* Interactive Email Bar with Copy Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2.5 rounded-[28px] sm:rounded-full bg-[#181818] border border-white/15 shadow-2xl max-w-xl">
              <div className="flex items-center gap-3 px-4 py-2 flex-grow overflow-hidden">
                <Mail className="w-4 h-4 text-[#F5A623] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-white truncate">
                  {profile.email}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-grotesk font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#F5A623] hover:bg-white text-black font-grotesk font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                >
                  <span>Send Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Start project form toggler */}
            <div className="pt-2">
              <button
                onClick={() => setShowInquiryForm(!showInquiryForm)}
                className="text-xs font-grotesk uppercase tracking-wider text-white/80 hover:text-[#F5A623] flex items-center gap-2 underline underline-offset-4 cursor-pointer"
              >
                <span>{showInquiryForm ? 'Hide Inquiry Form' : 'Or fill out quick project inquiry form'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Interactive Project Inquiry Form */}
            {showInquiryForm && (
              <form
                onSubmit={handleFormSubmit}
                className="mt-6 p-6 sm:p-8 rounded-[32px] bg-[#141414] border border-white/15 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300"
              >
                {formSubmitted ? (
                  <div className="p-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#F5A623] text-black mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-xl text-white">
                      Inquiry Received
                    </h4>
                    <p className="text-xs text-white/70 font-body">
                      Thank you for reaching out. I typically review and respond within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                          YOUR NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Creator / Brand"
                          className="w-full px-4 py-2.5 rounded-2xl bg-black border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#F5A623]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                          YOUR EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="creator@youtube.com"
                          className="w-full px-4 py-2.5 rounded-2xl bg-black border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#F5A623]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                        PROJECT DISCIPLINE
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {servicesList.map((service) => (
                          <button
                            type="button"
                            key={service}
                            onClick={() => setSelectedService(service)}
                            className={`px-3.5 py-1.5 rounded-full text-[11px] font-grotesk transition-all cursor-pointer ${
                              selectedService === service
                                ? 'bg-[#F5A623] text-black font-bold'
                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                        ESTIMATED BUDGET
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetList.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setSelectedBudget(b)}
                            className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                              selectedBudget === b
                                ? 'bg-[#F5A623] text-black font-bold'
                                : 'bg-white/5 text-white/70 hover:bg-white/10'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/50 block mb-2">
                        PROJECT BRIEF / DETAILS
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={projectMessage}
                        onChange={(e) => setProjectMessage(e.target.value)}
                        placeholder="Tell me about your channel, thumbnail requirements, and timeline..."
                        className="w-full px-4 py-2.5 rounded-2xl bg-black border border-white/15 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#F5A623]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#F5A623] hover:bg-white text-black font-grotesk font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </form>
            )}
          </div>

          {/* RIGHT: Direct Email Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F5A623] text-black flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5A623] block font-bold">
                  PRIMARY CONTACT METHOD
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">
                  Direct Email
                </h3>
                <p className="text-xs text-white/60 mt-2 font-body leading-relaxed">
                  For all project bookings, thumbnail design packages, channel retainers, and collaborations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">
                  OFFICIAL INBOX
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-sm font-bold text-[#F5A623] hover:underline break-all block"
                >
                  {profile.email}
                </a>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-white/70 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-white/40">Response Time:</span>
                  <span className="text-white font-bold">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/40">Turnaround:</span>
                  <span className="text-white font-bold">24-48 Hours</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
