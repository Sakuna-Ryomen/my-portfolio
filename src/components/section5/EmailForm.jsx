import { useState } from "react";
import emailjs from "@emailjs/browser";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

/* ── Toast Component ─────────────────────────── */
const Toast = ({ visible }) => (
  <div
    className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-zinc-900 border border-amber-400/40 text-white px-5 py-3.5 rounded-2xl shadow-[0_8px_30px_rgba(245,158,11,0.25)] ${
      visible ? "toast-enter" : "toast-exit"
    }`}
  >
    <CheckCircle className="text-amber-400 w-5 h-5 shrink-0" />
    <div>
      <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-body)" }}>
        Message sent!
      </p>
      <p className="text-xs text-white/55" style={{ fontFamily: "var(--font-body)" }}>
        I'll get back to you soon 🚀
      </p>
    </div>
  </div>
);

/* ── Floating Label Input ────────────────────── */
const FloatInput = ({ icon: Icon, label, type = "text", value, onChange, required = false }) => (
  <div className="input-wrapper relative flex items-center w-full">
    <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 z-10" strokeWidth={1.5} />
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="amber-input h-14 w-full bg-white/5 border border-white/15 text-white rounded-xl pl-11 pr-4 pt-5 pb-2 text-sm transition-all duration-200"
      style={{ fontFamily: "var(--font-body)" }}
    />
    <span className="float-label">{label}</span>
  </div>
);

/* ── Email Form ──────────────────────────────── */
const EmailForm = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastShown, setToastShown] = useState(false);
  const [sending, setSending] = useState(false);

  const showToast = () => {
    setToastShown(true);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
    setTimeout(() => setToastShown(false), 4500);
  };

  const handerSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    const serviceId = "service_zv5oglb";
    const contactTemplateId = "template_u2s0av6";
    const autoReplyTemplateId = "template_iejlgdb";
    const publicKey = "g6G5K61qZMs8yKmiD";
    const templateParams = {
      first_name: fname, last_name: lname,
      email, phone, message: text,
      time: new Date().toLocaleString(),
    };

    const reset = () => { setFName(""); setLName(""); setEmail(""); setPhone(""); setText(""); setSending(false); showToast(); };

    emailjs.send(serviceId, contactTemplateId, templateParams, publicKey)
      .then(reset).catch(() => setSending(false));
    emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey).catch(() => {});
  };

  return (
    <>
      {toastShown && <Toast visible={toastVisible} />}
      <form
        onSubmit={handerSubmit}
        className="w-full p-3 sm:p-4 flex flex-col gap-3"
      >
        {/* Name row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <FloatInput icon={User} label="First Name" value={fname} onChange={(e) => setFName(e.target.value)} required />
          <FloatInput icon={User} label="Last Name" value={lname} onChange={(e) => setLName(e.target.value)} required />
        </div>

        <FloatInput icon={Mail} label="Email Address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <FloatInput icon={Phone} label="Phone (Optional)" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />

        {/* Textarea */}
        <div className="input-wrapper relative flex items-start w-full">
          <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-white/40 z-10" strokeWidth={1.5} />
          <textarea
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder=" "
            className="amber-input w-full bg-white/5 border border-white/15 text-white rounded-xl pl-11 pr-4 pt-7 pb-3 text-sm resize-none transition-all duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          />
          <span className="float-label">Your Message</span>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="self-start flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-400 text-black font-semibold text-sm px-6 py-3 rounded-full shadow-[0_6px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_28px_rgba(245,158,11,0.55)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Send strokeWidth={1.5} size={16} />
          {sending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default EmailForm;
