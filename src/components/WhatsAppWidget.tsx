import { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaPaperPlane } from "react-icons/fa6";
import { X, Minus } from "lucide-react";
import logoImg from "../assets/logo.jpg";

// CONFIGURATION: Allianz Utilities WhatsApp connection
const WHATSAPP_NUMBER = "0797804522"; // Automatically converts to international format: 254797804522
const SUPPORT_NAME = "Allianz Utilities Desk";
const SUPPORT_LEAD = "Quinzella Aron";
const SUPPORT_ROLE = "Water & Wastewater Support";

interface ChatMessage {
  id: number;
  sender: "support" | "user";
  text: string;
  time: string;
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true); // Badge notification
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Welcome message flow
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages([
          {
            id: 1,
            sender: "support",
            text: `Hello! Welcome to Allianz Utilities. I'm ${SUPPORT_LEAD} from technical support. How can we assist you with your water, wastewater, or HVAC systems today? 💧`,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  // Scroll to bottom when messages list updates
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
      // Focus the input once the chat window opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const handleSendMessage = (text?: string) => {
    const messageToSend = (text || inputValue).trim();
    if (!messageToSend) return;

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Add user message to local chat thread (visual reinforcement)
    const newMsg: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: messageToSend,
      time: timeStr,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");

    // Clean the phone number (strip leading 0 and prepend Kenya country code 254 if it is a 10-digit number)
    let cleanedNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
    if (cleanedNumber.startsWith("0") && cleanedNumber.length === 10) {
      cleanedNumber = "254" + cleanedNumber.slice(1);
    }

    // Open WhatsApp link in new tab immediately to prevent browser pop-up blockers
    const encodedText = encodeURIComponent(messageToSend);
    const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickReplies = [
    {
      label: "💧 Request a Project Quote",
      message: "Hello Allianz Utilities! I would like to request a quotation for a water / wastewater treatment system.",
    },
    {
      label: "🛠️ Plant Maintenance & AMC",
      message: "Hi, I need assistance with water/wastewater plant servicing, troubleshooting, or Annual Maintenance Contracts (AMC).",
    },
    {
      label: "🏗️ Ongoing Site Consultation",
      message: "Hello! I would like to discuss an ongoing project or schedule an on-site technical survey.",
    },
    {
      label: "📞 Speak with an Engineer",
      message: "Hi there! I would like to speak directly with an Allianz Utilities process engineer.",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Trigger Button */}
      <button
        onClick={toggleWidget}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 relative group cursor-pointer ${
          isOpen
            ? "bg-[var(--color-primary)] rotate-90 scale-95"
            : "bg-[#25D366] hover:bg-[#20ba5a] scale-100 hover:scale-105 shadow-[#25D366]/30"
        }`}
        aria-label="Contact on WhatsApp"
      >
        {isOpen ? (
          <X size={24} className="-rotate-90 transition-transform" />
        ) : (
          <FaWhatsapp size={30} className="text-white drop-shadow-sm" />
        )}

        {/* Pulsing notification badge */}
        {!isOpen && hasNewMessage && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white items-center justify-center text-[9px] font-bold text-white">
              1
            </span>
          </span>
        )}

        {/* Hover Tooltip */}
        {!isOpen && (
          <span className="absolute right-16 bg-[#0c1f3d] text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg border border-white/10">
            Chat on WhatsApp
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-16 right-0 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] via-[#0B42A0] to-[#0091DA] text-white px-5 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={logoImg}
                alt="Allianz Utilities"
                className="w-10 h-10 rounded-full object-contain bg-white p-1 border-2 border-white/20 shadow-xs"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-white rounded-full animate-pulse"></span>
            </div>
            <div>
              <h4 className="font-bold text-sm leading-tight tracking-wide">{SUPPORT_NAME}</h4>
              <p className="text-[11px] text-white/80 font-medium flex items-center gap-1 mt-0.5">
                <span>{SUPPORT_ROLE}</span>
                <span className="text-white/50">•</span>
                <span className="text-[#a7f3d0] font-semibold">Online</span>
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Minimize chat"
          >
            <Minus size={18} />
          </button>
        </div>

        {/* Chat Body (WhatsApp Background Style) */}
        <div className="h-[280px] overflow-y-auto p-4 bg-[#EFEAE2] flex flex-col gap-3 relative scrollbar-thin">
          {/* Subtle WhatsApp style pattern watermark */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath fill='%23000' fill-opacity='0.4' d='M0 0h80v80H0z'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Encryption Note */}
          <div className="bg-[#FFF9E6] text-[11px] text-[#7A5B00] px-3 py-1.5 rounded-lg border border-[#F2DE9C] self-center text-center max-w-[92%] shadow-2xs z-10 font-medium">
            🔒 Direct WhatsApp connection. Messages open directly with our technical desk.
          </div>

          {/* Messages list */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[82%] rounded-xl px-3.5 py-2 text-sm shadow-2xs relative z-10 ${
                msg.sender === "support"
                  ? "bg-white text-slate-800 self-start rounded-tl-none border border-slate-200/50"
                  : "bg-[#DCF8C6] text-slate-900 self-end rounded-tr-none border border-[#c4e8ab]"
              }`}
            >
              <p className="leading-relaxed text-[13px]">{msg.text}</p>
              <p className="text-[10px] text-slate-400 text-right mt-1 font-medium">{msg.time}</p>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="bg-white text-slate-800 max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm shadow-2xs self-start rounded-tl-none z-10 flex items-center gap-1.5 border border-slate-200/50">
              <span className="text-[11px] text-slate-400 font-medium mr-1">{SUPPORT_LEAD} is typing</span>
              <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Quick replies */}
        {messages.length > 0 && messages.filter((m) => m.sender === "user").length === 0 && (
          <div className="p-2.5 bg-slate-50 border-t border-slate-200 flex flex-col gap-1.5 max-h-[135px] overflow-y-auto">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">Quick Inquiries:</p>
            <div className="grid grid-cols-1 gap-1">
              {quickReplies.map((reply) => (
                <button
                  key={reply.label}
                  onClick={() => handleSendMessage(reply.message)}
                  className="w-full text-left text-xs text-[var(--color-primary)] hover:text-white bg-white hover:bg-[var(--color-primary)] px-3 py-1.5 rounded-lg border border-slate-200 hover:border-[var(--color-primary)] transition-all font-medium shadow-2xs cursor-pointer"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Footer */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your inquiry..."
            className="flex-grow bg-slate-100 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all text-slate-800 placeholder-slate-400"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 cursor-pointer ${
              inputValue.trim()
                ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md shadow-[var(--color-primary)]/20 active:scale-95"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
            aria-label="Send message"
          >
            <FaPaperPlane size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
