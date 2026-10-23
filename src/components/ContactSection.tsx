import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Leasing Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onShowToast('Message delivered to our concierge. We will respond within 2 hours.');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#8B5E3C] mb-2">
                Direct Communications
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Connect with Our Resident Concierge.
              </h2>
              <p className="mt-3 text-sm text-[#5C3D2E] font-light leading-relaxed">
                Whether seeking a private property walkthrough, listing your architectural residence, or discussing developer partnerships with George, our team responds swiftly.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 bg-white rounded-2xl border border-[#E8E0D5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#8B5E3C] border border-[#E8E0D5]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Metropolitan Studios</h4>
                  <p className="text-xs text-[#5C3D2E] mt-0.5">
                    <strong>New York:</strong> 450 Lexington Ave, Suite 2100, NY 10017
                  </p>
                  <p className="text-xs text-[#5C3D2E]">
                    <strong>London:</strong> 33 Berkeley Square, Mayfair, London W1J 5EZ
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-[#E8E0D5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#8B5E3C] border border-[#E8E0D5]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Direct Concierge Line</h4>
                  <p className="text-xs text-[#5C3D2E] mt-0.5">+1 (800) 584-LIVING · +44 20 7946 0880</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-[#E8E0D5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#8B5E3C] border border-[#E8E0D5]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Email Inquiry</h4>
                  <p className="text-xs text-[#8B5E3C] font-medium mt-0.5">concierge@havenstoneliving.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 bg-white rounded-2xl border border-[#E8E0D5] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] flex items-center justify-center shrink-0 text-[#8B5E3C] border border-[#E8E0D5]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-[#111111] uppercase tracking-wider">Concierge Hours</h4>
                  <p className="text-xs text-[#5C3D2E] mt-0.5">Monday – Sunday: 08:00 to 20:00 (EST / GMT)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#E8E0D5] p-7 sm:p-10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#111111]">
                    Message Transmitted
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C3D2E] max-w-md mx-auto">
                    Thank you, {formData.name}. Your inquiry has been routed to our senior leasing concierge. We guarantee a thoughtful response within 2 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          subject: 'General Leasing Inquiry',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#EFE6DC] text-[#5C3D2E] text-xs font-semibold rounded-xl border border-[#E8E0D5] transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#111111] mb-1">
                    Send a Message
                  </h3>
                  <p className="text-xs text-[#5C3D2E] mb-5 font-light">
                    Fields marked with an asterisk (*) are required.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Eleanor Rigby"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="eleanor@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5">
                        Inquiry Purpose
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white focus:outline-none transition-all font-medium"
                      >
                        <option value="General Leasing Inquiry">Schedule Private Viewing</option>
                        <option value="List My Property">List an Architectural Residence</option>
                        <option value="Virtual Tour Request">Virtual 3D Tour Question</option>
                        <option value="Tech Inquiry for George">Technical Inquiry for Developer George</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#5C3D2E] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Please specify desired neighborhoods, move-in window, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#E8E0D5] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] focus:ring-2 focus:ring-[#8B5E3C] focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#8B5E3C] hover:bg-[#5C3D2E] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
