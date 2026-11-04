import React, { useState } from 'react';
import { 
  Building2, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Globe
} from 'lucide-react';
import { INSTITUTIONAL_INFO } from '../data/britishBoardData';

export const AccreditationContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    country: '',
    contactPerson: '',
    email: '',
    phone: '',
    inquiryType: 'center_accreditation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.institutionName || !formData.email) return;

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9E131A] font-semibold mb-2">
            <span>Contact & Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Accreditation Desk</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Institutional Contact & Center Accreditation
          </h2>

          <p className="mt-3 text-base text-slate-600 font-light leading-relaxed">
            Get in touch with the British Board for Training and Consulting for institution accreditation, certificate inquiries, or partner cooperation.
          </p>
        </div>

        {/* 2-Column Split: Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Institutional Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-mono text-[#9E131A] font-semibold">
                  Official Secretariat
                </span>
                <h3 className="font-cinzel text-xl font-bold text-slate-900 mt-1">
                  British Board for Training and Consulting
                </h3>
                <span className="text-xs text-slate-500">United Kingdom</span>
              </div>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#9E131A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Official Portal:</strong>
                    <span className="font-mono text-slate-700">british-board.uk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#9E131A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">General Inquiries:</strong>
                    <span className="font-mono text-slate-700">{INSTITUTIONAL_INFO.officialEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#9E131A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-medium">Accreditation Secretariat:</strong>
                    <span className="font-mono text-slate-700">{INSTITUTIONAL_INFO.officialEmail}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="font-medium text-slate-900">
                  Accreditation Requirements for Training Centers:
                </div>
                <ul className="text-slate-600 space-y-1.5 list-disc pl-4 font-light">
                  <li>Valid institutional registration in country of operation.</li>
                  <li>Qualified instructional faculty and certified trainers (TOT).</li>
                  <li>Standardized assessment criteria and curriculum syllabus.</li>
                  <li>Commitment to the British Board ethical and quality charter.</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-slate-900">
                    Inquiry Received
                  </h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting the British Board for Training and Consulting. Your message has been logged, and our team will review your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 rounded-md"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-slate-100 pb-2 mb-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs text-slate-500 font-light">
                      Please provide your details below for center accreditation or certificate queries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Institution / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.institutionName}
                        onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                        placeholder="e.g. Executive Academy"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United Kingdom, France, UAE..."
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@institution.com"
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 ..."
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                      >
                        <option value="center_accreditation">Training Center Partner Accreditation</option>
                        <option value="course_certification">Program / Curriculum Accreditation</option>
                        <option value="tot_batch">Trainer Qualification (TOT Program)</option>
                        <option value="partnership">Institutional Inquiries & Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief details about your institution and training activities..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#9E131A]"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#9E131A] hover:bg-[#850E14] text-white font-semibold text-xs tracking-wider uppercase rounded-md transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-white" />
                      <span>Send Inquiry</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
